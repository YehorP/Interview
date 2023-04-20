import { Category } from "../models/category.model";

export const categoriesMock: Category[] = [
    {
      categoryId: 1,
      categoryName: 'Pinned',
      chats: [
        {
          chatId: 1,
          firstName: 'John',
          lastName: 'Doe',
          imageLink: 'assets/avatar.png',
          lastMessage: {
            author: 'You',
            date: new Date(Date.now()),
            text: 'Bye!!!'
          }
        },
        {
          chatId: 2,
          firstName: 'Alex',
          lastName: 'Johnson',
          lastMessage: {
            author: 'Alex Johnson',
            date: new Date(Date.now()),
            text: 'How are you doing bro ?'
          }
        }
      ]
    },
    {
      categoryId: 2,
      categoryName: 'Recent',
      chats: [
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
        },
      ]
    }
  ];