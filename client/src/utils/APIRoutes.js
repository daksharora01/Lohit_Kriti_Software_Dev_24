export const host = 'http://localhost:3001';
export const allUsersRoute = `${host}/profile/allchats`;
export const sendMessageRoute = `${host}/messages/addmsg`;
export const getAllMessageRoute = `${host}/messages/getmsg`;
export const sendMessageGroupsRoute = `${host}/messages/addmsggroups`;
export const getAllMessageGroupsRoute = `${host}/messages/getmsggroups`;
export const getGroups = (id) => `${host}/groups/all/${id}`;