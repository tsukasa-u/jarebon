import { BroadcastChannel } from 'broadcast-channel';
import { webRTC_channel, last, loginName, groupInfo, setGroupsInfo, filterPidGroupsInfo, savedHashedPid } from "./global.js"

var channel = new BroadcastChannel('jarebon_bus');


channel.onmessage = function(e) {
    const json_data = JSON.parse(e);

    if (loginName == groupInfo.main) {
        if (json_data.state == "enter") {
            var re_loginData = {
                userName: groupInfo.main,
                roomName: groupInfo.roomName,
                NumOfMember: groupInfo.member.length,
                pid: savedHashedPid,
                state: "reenter"
            }
            broadcastData(JSON.stringify(re_loginData));
        }
        if (json_data.state == "offer") {
            if (json_data.roomName == groupInfo.roomName) {
                let answer = new Promise((resolve, reject) => resolve(webRTC_channel.addRemoteChannel()))
                .then((ch) => new Promise((resolve, reject) => resolve(ch.answerPeers())))
                .then((ch) => new Promise((resolve, reject) => resolve(ch.answerOffer())))
                .catch((err) => console.log(err));
                // let answer = webRTC_channel.addRemoteChannel()
                //     .answerPeers()
                //     .answerOffer();
                var tmp = {
                    userName : groupInfo.main,
                    roomName : groupInfo.roomName,
                    answer : answer,
                    state : "answer"
                }
                broadcastData(JSON.stringify(tmp));
            }
        }
    } else {
        if (json_data.state == "reenter") {
            setGroupsInfo({roomName: json_data.roomName, NumOfMember: json_data.NumOfMember, pid:json_data.pid});
        }
        if (json_data.state == "out") {
            filterPidGroupsInfo(json_data.pid);
        }
        if (json_data.state == "answer") {
            if (json_data.roomName == groupInfo.roomName) {
                last(webRTC_channel.localChannel).setAnswer();
            }
        }
    }

    // console.log('Received', e, "gg");
};

export function broadcastData(str) {
    channel.postMessage(str);
}

export function outRoom() {
    var tmp = {
        userName : groupInfo.main,
        roomName : groupInfo.roomName,
        pid : groupInfo.pid,
        state : "out"
    }
    broadcastData(JSON.stringify(tmp));
}
