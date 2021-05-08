const users = [];

// 사용자를 채팅룸으로 입장시킴
function userJoin(id, username, room) {
    const user = {id, username, room}

    users.push(user)

    return user;
}

// 현재 사용자 반환
function getCurrentUser(id) {
    return users.find(user=>user.id === id)
}

// 사용자 채팅룸 떠남
function userLeave(id) {
    const index = users.findIndex(user => user.id===id)
    if (index != -1) {
        return users.splice(index, 1)[0]
    }
}

// 방의 사용자들을 반환
function getRoomUsers(room) {
    return users.filter(user=>user.room===room)
}

module.exports = {
    userJoin, 
    getCurrentUser, 
    userLeave, 
    getRoomUsers
}