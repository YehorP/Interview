import { ChatInfo } from "./chat-info.model";

export interface Category {
    categoryId: number,
    categoryName: string,
    chats: ChatInfo[]
}