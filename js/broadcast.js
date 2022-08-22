import { BroadcastChannel } from 'broadcast-channel';

import {groupInfo} from "./global.js"

var channel = new BroadcastChannel('jarebon_bus');


channel.onmessage = function(e) {
    const json_data = JSON.parse(e);

    // if (loginName == groupInfo.main) {
    //     if (json_data.state == "enter") {
    //         var re_loginData = {
    //             "userName": groupInfo.main,
    //             "roomName": groupInfo.roomName,
    //             "NumOfMember": groupInfo.member.length,
    //             "state": "reenter"
    //         }
    //         broadcastData(JSON.stringify(re_loginData));
    //     }

    //     if (json_data.state == "request") {
    //         if (json_data.roomName == groupInfo.roomName) {
    //             var re_request = {
    //                 "userName": groupInfo.main,
    //                 "roomName": groupInfo.roomName,
    //                 "NumOfMember": groupInfo.member.length,
    //                 "state": "rerequest"
    //             }
    //             broadcastData(JSON.stringify(re_loginData));
    //         }
    //     }
    // } else {
    //     if (json_data.state == "reenter") {

    //     }
    // }



    // console.log('Received', e, "gg");
};

export function broadcastData(str) {
    channel.postMessage(str);
}
