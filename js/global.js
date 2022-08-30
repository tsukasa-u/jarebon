import { opChannel } from './webRTC.js';

export const last = (array) => array[array?.length-1];

export let webRTC_channel = new opChannel();

export var loginName = "";

export const setLoginName = (value) => {
    loginName = value;
}

export  var  groupInfo = {
    roomName: "",
    member: [],
    main: "",
    pid: ""
};

export const setGroupInfo = (value) => {
    groupInfo = value;
}

export var groupsInfo = [];

export const setGroupsInfo = (value) => {
    groupsInfo.push(value);
}

export const deleteGroupsInfo = (value) => {
    groupsInfo.delete(value);
}

export const filterPidGroupsInfo = (value) => {
    groupsInfo.filter = groupsInfo.filter((i) => {
        i.pid !== value
    })
}

export var savedHashedPid;

export const setSavedHashedPid = (value) => {
    savedHashedPid = value;
}

