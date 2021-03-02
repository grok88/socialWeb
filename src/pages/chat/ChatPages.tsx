import React, {useEffect, useState} from 'react';

type WSMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPages = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {
    return <div>
        <Messages/>
        <AddMessForm/>
    </div>
}

const AddMessForm: React.FC = () => {
    const [value, setValue] = useState<string>('');

    const sendMess = () => {
        if (!value) return;
        wsChannel.send(value);
        setValue('');
    }

    return <div>
        <div>
            <textarea value={value} onChange={e => setValue(e.currentTarget.value)}></textarea>
        </div>
        <div>
            <button onClick={sendMess}>Send</button>
        </div>
    </div>
}

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<WSMessageType[]>([]);

    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            console.log(JSON.parse(e.data));
            const newMess = JSON.parse(e.data);
            setMessages((prevState) => [...prevState, ...newMess,]);
        })
    }, [])

    return <div style={{height: '400px', overflowY: 'scroll'}}>
        {messages.map((m, i) => <Message key={i} message={m}/>)}
    </div>
}

type MessagePropsType = {
    message: WSMessageType
}
const Message: React.FC<MessagePropsType> = ({message}) => {
    return <div>
        <img src={message.photo} alt="mess"/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}


export default ChatPages;