
const chatForm = document.getElementById('chat-form')
const chatMessages = document.querySelector('.chat-messages') 
const roomName = document.getElementById('room-name')
const userList = document.getElementById('users')

// URL로부터 사용자이름과 방이름을 추출
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix: true // Query String에 있는 &, ? 등은 제외시킴
})
console.log(username, room)

const socket = io()

// 채팅룸 입장 정보 서버로 emit
socket.emit('joinRoom', {username, room})

// 방정보와 사용자 정보를 받아 표시한다.
socket.on('roomUsers', ({room, users})=>{
    outputRoomName(room)
    outputUsers(users)
})

// Message from server
socket.on('message', message => {
    console.log(message);
    outputMessage(message)

    // Scroll down
    chatMessages.scrollTop = chatMessages.scrollHeight
})

// Message submit
chatForm.addEventListener('submit', (e) => {
    e.preventDefault(); // submit의 기본 액션인 서버로 요청 보내는 것을 막고

    // e.target으로 현재 엘리먼트를 찾고, 현재 엘리먼트의
    // 엘리먼트들 중에 아이디가 msg인 필드의 값을 가져온다.
    const msg = e.target.elements.msg.value;
    // console.log(msg); 
   
    // 메시지를 서버로 방출
    socket.emit('chatMessage', msg);

    // 입력창 내용 지우기
    e.target.elements.msg.value = ''
    e.target.elements.msg.focus()
})

// 메시지를 DOM으로 출력
function outputMessage(message) {
    const div = document.createElement('div')
    div.classList.add('message')
    
    // backtick 사용, 따옴표 아님. 
    div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
                    <p class="text">
                        ${message.text}
                    </p>`
    // chat.html에서 클래스 속성값이 chat-messages인 태그 객체를 찾아 그 태그의 자식으로 추가              
    document.querySelector('.chat-messages').appendChild(div)
}

// 룸 이름을 DOM에 추가
function outputRoomName(room) {
    roomName.innerText = room;

}

// 사용자들을 DOM에 추가
function outputUsers(users) {
    userList.innerHTML = `
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    `
}

// 방나감 버튼 클릭 시 확인받고, index.html로 이동.
document.getElementById('leave-btn').addEventListener('click', () => {
    const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
    if (leaveRoom) {
      window.location = '../index.html';
    } else {
    }
  });
