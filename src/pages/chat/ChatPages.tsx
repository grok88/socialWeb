import React, {useEffect, useRef, useState} from 'react';

type WSMessageType = {
    message: string
    photo: string
    userId: number
    userName: string
}
const ChatPages = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null);

    useEffect(() => {

        let ws: WebSocket;

        const closeHandler = () => {
            console.log('Socket is closed. Reconnect will be attempted in 3 second.');
            setTimeout(() => {
                createChannel();
            }, 3000)
        }
        const createChannel = () => {

            ws?.removeEventListener('close', closeHandler);
            ws?.close();

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            setWsChannel(ws);
            ws?.addEventListener('close', closeHandler);
        }
        createChannel();

        return () => {
            ws.removeEventListener('close', closeHandler);
            ws.close();
        }
    }, [])


    return <div>
        <Messages wsChannel={wsChannel}/>
        <AddMessForm wsChannel={wsChannel}/>
    </div>
}

const AddMessForm: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [value, setValue] = useState<string>('');
    const [readyState, setReadyState] = useState<'pending' | 'open'>('pending');

    useEffect(() => {
        const openHandler = () => {
            setReadyState('open');
        }

        wsChannel?.addEventListener('open', openHandler)
        return () => {
            wsChannel?.removeEventListener('close', openHandler);
        }
    }, [wsChannel]);

    const sendMess = () => {
        if (!value) return;
        wsChannel?.send(value);
        setValue('');
    }

    return <div>
        <div>
            <textarea value={value} onChange={e => setValue(e.currentTarget.value)}></textarea>
        </div>
        <div>
            <button onClick={sendMess} disabled={wsChannel === null || readyState !== 'open'}>Send</button>
        </div>
    </div>
}

const Messages: React.FC<{ wsChannel: WebSocket | null }> = ({wsChannel}) => {
    const [messages, setMessages] = useState<WSMessageType[]>([]);
    /**
     *  Scroll to bottom
     */
        //ref for auto scroll to bottom
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    /**
     * Get messages from WS
     * Set Messages to useState
     * @param e
     */
    const messageHandler = (e: MessageEvent) => {
        console.log(JSON.parse(e.data));
        let newMess = JSON.parse(e.data);
        setMessages((prevMess) => [...prevMess, ...newMess]);
    }

    useEffect(() => {
        wsChannel?.addEventListener('message', messageHandler)
        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
            wsChannel?.close();
        }
    }, [wsChannel])

    return <div style={{height: '400px', overflowY: 'scroll'}}>
        {messages.map((m, i) => <Message key={i} message={m}/>)}
        <div ref={messagesEndRef}/>
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