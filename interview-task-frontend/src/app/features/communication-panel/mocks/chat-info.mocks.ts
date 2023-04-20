import { ChatInfo } from "../models/chat-info.model";

export const chatInfoMock: ChatInfo =
{
    chatId: 3,
    firstName: 'Joe',
    lastName: 'Biden',
    imageLink: 'assets/JoeBiden.jpg',
    lastMessage: {
        author: 'Joe Biden',
        date: new Date(Date.now()),
        text: 'Hi from USA!!!'
    }
};