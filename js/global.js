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

export var groupsInfo = [{}];

export const setGroupsInfo = (value) => {
    groupsInfo.push(value);
}

export const deleteGroupsInfo = (value) => {
    groupsInfo.delete(value);
}

export var savedHashedPid;

export const setSavedHashedPid = (value) => {
    savedHashedPid = value;
}

