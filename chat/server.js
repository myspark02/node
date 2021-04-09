const path = require('path')
const http = require('http') 
const express = require('express')
const socketio = require('socket.io')
const formatMessage = require('./utils/messages')
const {userJoin, getCurrentUser, userLeave, getRoomUsers} = require('./utils/users')

const app = express()
/* 
    일반적인 경우에는 express를 사용하면 http 모듈을 직접 다룰 
    필요가 없지만(express에 의해 http 모듈이 내부적으로 사용되기 때문에)
    여기서는 socket.io를 사용하기 위해 http server를 직접 사용
*/
const server = http.createServer(app); 
const io = socketio(server)

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

const adminName = 'Admin'
// client가 연결되면 실행
io.on('connection', socket => {

    socket.on('joinRoom', ({username, room})=>{
        console.log('New Web Socket Connection....')
        const user = userJoin(socket.id, username, room)
        socket.join(user.room)

        socket.emit('message', formatMessage(adminName, 'Welcome to chatting room'))
    
        //사용자가 연결되면 브로드케스트
        socket.broadcast.to(user.room).emit('message',  formatMessage(adminName, `${user.username}님이 입장했습니다. `))    

        // 새로운 사용자가 접속하면
        // 그 방 사용자들에게 방정보와 사용자들 정보를 전송, 
        // 그래서 채팅창 왼쪽에 현재 접속된 사용자들 정보와 방정보가 표시되도록하기 위해.
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users:getRoomUsers(user.room)
        })
    })

    // 사용자가 연결을 끊으면 실행 
    socket.on('disconnect', () =>{

        const user = userLeave(socket.id)
        if (user) {
            io.to(user.room).emit('message',  formatMessage(adminName, `${user.username}님이 방을 나갔습니다`))

            // 사용자가 방을 나가면 접속하면
            // 그 방 사용자들에게 방정보와 사용자들 정보를 전송, 
            // 그래서 채팅창 왼쪽에 현재 접속된 사용자들 정보와 방정보가 표시되도록하기 위해.
            io.to(user.room).emit('roomUsers', {
                room: user.room,
                users:getRoomUsers(user.room)
            })
        }
    })

    // Listen for chatMessage 
    socket.on('chatMessage', msg=>{
        // console.log(msg)
        const user = getCurrentUser(socket.id)
        console.log(user)
        io.to(user.room).emit('message',  formatMessage(user.username, msg))
    })
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))

