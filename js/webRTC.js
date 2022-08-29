import {broadcastData} from "./broadcast.js"
import {loginName} from "./global.js"

export class opChannel {
    constructor() {
        this.remoteChannel = [];
        this.localChannel = [];
        this.id = 0;
    }

    addRemoteChannel(name = `remoteChannel${this.id}`) {
        let channel = new p2pChannel(name);
        this.remoteChannel.push(channel);
        this.id++;
        return channel;
    }

    addLocalChannel(name = `localChannel${this.id}`) {
        let channel = new p2pChannel(name);
        this.localChannel.push(channel);
        this.id++;
        return channel;
    }

    deleteRemoteChannel(channelName) {
        this.remoteChannel = this.remoteChannel.filter(i => {
            if (i.name != channelName) {
                return true;
            } else {
                i.disconnectPeers();
                return false;
            }
        });
    }

    deleteLocalChannel(channelName) {
        this.LocalChannel = this.LocalChannel.filter(i => {
            if (i.name != channelName) {
                return true;
            } else {
                i.disconnectPeers();
                return false;
            }
        });
    }

    clearRemoteChannel() {
        this.remoteChannel = this.remoteChannel.filter(i => {
            if (i.name != channelName) {
                return true;
            } else {
                i.disconnectPeers();
                return false;
            }
        });
    }

    clearLocalChannel() {
        this.LocalChannel = this.LocalChannel.filter(i => {
            if (i.name != channelName) {
                return true;
            } else {
                i.disconnectPeers();
                return false;
            }
        });
    }
}

export class p2pChannel {
    constructor(name) {    
        this.name = name;
        
        this.localConnection = null;
        this.remoteConnection = null;
        
        this.sendChannel = null;
        this.receiveChannel = null;
    }

    createOffer(roomName) {
        this.localConnection.createOffer()
        .then(offer => this.localConnection.setLocalDescription(offer))
        .catch();
        return localConnection.localDescription.toJSON();
    }

    offerPeers(name = this.name) {
        
        this.localConnection = new RTCPeerConnection();
        
        this.sendChannel = this.localConnection.createDataChannel(name);
        this.sendChannel.onopen = this.handleSendChannelStatusChange;
        this.sendChannel.onclose = this.handleSendChannelStatusChange;
        
        this.localConnection.onicecandidate = e => !e.candidate || remoteConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
        
        // this.localConnection.createOffer()
        // .then(offer => localConnection.setLocalDescription(offer))
        // .then(() => remoteConnection.setRemoteDescription(localConnection.localDescription))
        // .then(() => remoteConnection.createAnswer())
        // .then(answer => remoteConnection.setLocalDescription(answer))
        // .then(() => localConnection.setRemoteDescription(remoteConnection.localDescription))
        // .catch(handleCreateDescriptionError);
        return this;
    }

    answerPeers() {
        this.remoteConnection = new RTCPeerConnection();
        this.remoteConnection.ondatachannel = receiveChannelCallback;
        this.remoteConnection.onicecandidate = e => !e.candidate || localConnection.addIceCandidate(e.candidate).catch(handleAddCandidateError);
        return this;
    }

    answerOffer(sdp) {
        let localDescription = new RTCSessionDescription({
            type : 'offer',
            sdp : sdp,
        });
        let ret;
        this.remoteConnection.setRemoteDescription(localDescription)
        .then(() => remoteConnection.createAnswer())
        .then(answer => {
            remoteConnection.setLocalDescription(answer);
            ret = answer.toJSON();
        })
        .catch();
        return ret;
    }

    setAnswer(sdp) {
        let localDescription = new RTCSessionDescription({
            type : 'answer',
            sdp : sdp,
        });
        this.LocalConnection.setLocalDescription(localDescription);
    }

    disconnectPeers() {
        if (this.localConnection) {
            this.sendChannel.close();
            this.localConnection.close();

            // this.sendChannel = null;
            // this.localConnection = null;
        }
        if (this.remoteConnection) {
            this.receiveChannel.close(); 
            this.remoteConnection.close();

            // this.receiveChannel = null;
            // this.remoteConnection = null;
        }
    }
      
    handleLocalAddCandidateSuccess() {
        
    }
    handleRemoteAddCandidateSuccess() {
        
    }
      
    handleAddCandidateError() {
        
    }

    handleCreateDescriptionError(error) {
        
    }

    handleReceiveMessage(event) {
        return event?.data;
    }

    receiveChannelCallback(event) {
        this.receiveChannel = event.channel;
        this.receiveChannel.onmessage = this.handleReceiveMessage;
        this.receiveChannel.onopen = this.handleReceiveChannelStatusChange;
        this.receiveChannel.onclose = this.handleReceiveChannelStatusChange;
    }

    handleSendChannelStatusChange(event) {
      
    }

    handleReceiveChannelStatusChange(event) {
        
    }

    sendMessage(message) {
        this.sendChannel.send(message);
    }
}
