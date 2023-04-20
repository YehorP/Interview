import { Message } from "./message.model";


export interface Chat {
    chatId: number,
    chatWith: string,
    messages: Message[]
}