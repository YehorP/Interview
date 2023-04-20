export const categoryMock = {
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
  };