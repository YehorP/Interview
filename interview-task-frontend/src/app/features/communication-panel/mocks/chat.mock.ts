import { Chat } from "../models/chat.model"

export const chatMock: Chat = {
    chatId: 2,
    chatWith: 'Alex Johnson',
    messages: [
        {
            text: 'How are you doing bro ?',
            date: new Date(Date.now()),
            author: 'Alex Johnson'
        }
    ]
};