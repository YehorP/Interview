import { Message } from "./message.model";

export interface ChatInfo {
    chatId: number,
    firstName: string,
    lastName: string,
    imageLink?: string,
    lastMessage: Message
}