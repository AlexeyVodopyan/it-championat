import React, {useEffect, useRef, useState} from 'react';
import {TextField} from '@consta/uikit/TextField';
import {Button} from '@consta/uikit/Button';
import {Card} from '@consta/uikit/Card';
import css from './GTI.module.css';
import {Text} from '@consta/uikit/Text';
import {getDate} from '../../../utils/utils';
import {useOutletContext} from 'react-router';
import {usersType} from '../../../api/api.types';

interface Props {

}

export const Chat: React.FC<Props> = ({}) => {
    const user = useOutletContext<usersType>();
    const ref = useRef<HTMLDivElement | null>(null)
    const [ws, setWs]  = useState<WebSocket | null>(null)
    const [message, setMessage]  = useState('')
    const [messages, setMessages]  = useState<messageType[]>([])
    const handleChange =  ({ value }: { value: string | null }) => setMessage(value ?? '');
    const onMessageSend =  () => {
        ws?.send(message)
    }
    const onMessage = ((event: any) => {
        try {
            if(JSON.parse(event.data).messages) {
                setMessages(prev => [...prev, ...(JSON.parse(event.data).messages)])
            }
            else {
                setMessages(prevState => [...prevState, JSON.parse(event.data)])
            }
            if(ref.current) {
                setTimeout(() => {
                    if(ref.current) {
                        const height = ref.current?.scrollHeight
                        ref.current.scrollTop = height
                    }
                }, 200)
            }
        }
        catch (e) {
            console.warn(e)
        }
    })
    useEffect(() => {
        console.count()
        const token = localStorage.getItem('token')
        if(!ws)
            setWs(new WebSocket(`ws://localhost:8001/chat/ws/055643a4-815a-4fc2-ab9b-a30ced663aff?token=${token}`))
        if(ws) {
            ws.onclose = () => {
                ws.removeEventListener('onmessage', onMessage)
                setWs(new WebSocket(`ws://localhost:8001/chat/ws/055643a4-815a-4fc2-ab9b-a30ced663aff?token=${token}`))
            }
        }
        return () => {
            console.log('close')
            ws?.close()

        }
    }, [user])
    useEffect(() => {

      if(ws) {
          ws.onmessage = onMessage
      }
    }, [ws])

    return (
        <div className={`${css.chatContainer} container-column`}>
            <div className={css.messagesContainer} ref={ref}>
            {messages.map((mesage, index) => <div className={'container-row'}>
                { mesage.name === user.name? <div className={'flex-grow-1'}/> : null}
                <Card key={index}
                  verticalSpace="xs"
                  horizontalSpace="xs"
                  className={css.selfMessages + " " + css.card}>
                <Text className={'m-b-3'}>Сообщение: {mesage.message}</Text>
                <Text weight={'bold'}>{mesage.name}</Text>
                <Text weight={'bold'}>{mesage.company_name}</Text>
                <Text weight={'bold'}>{getDate(new Date(mesage.created_at))}</Text>
                </Card>
                { mesage.name !== user.name? <div className={'flex-grow-1'}/> : null}
            </div>

            )}
            </div>
            <div className={`${css.inputContainer} container-row`}>
                <TextField value={message} onChange={handleChange} className={'flex-grow-1 m-b-2'}/>
                <Button label={'Отправить'} onClick={onMessageSend}/>
            </div>
        </div>
    );
};

type messageType = {
    "name": string,
    "company_name": string,
    "message": string,
    "created_at": string
}
