const chats = [
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
            {
                chatId: 4,
                firstName: 'Monika',
                lastName: 'Kowalska',
                lastMessage: {
                    author: 'Monika Kowalska',
                    date: new Date(Date.now()),
                    text: 'Have you checked my code?'
                }
            },
            {
                chatId: 5,
                firstName: 'Filip',
                lastName: 'Kwiatkowski',
                lastMessage: {
                    author: 'You',
                    date: new Date(Date.now()),
                    text: 'Thank you for the meeting'
                }
            },
            {
                chatId: 6,
                firstName: 'John',
                lastName: 'Cena',
                lastMessage: {
                    author: 'You',
                    date: new Date(Date.now()),
                    text: 'Can you see me ?'
                }
            },
            {
                chatId: 7,
                firstName: 'Elon',
                lastName: 'Musk',
                imageLink: 'assets/ElonMusk.jpg',
                lastMessage: {
                    author: 'Elon Musk',
                    date: new Date(Date.now()),
                    text: 'Check out my new Tesla'
                }
            },
            {
                chatId: 8,
                firstName: 'Ed',
                lastName: 'Sheeran',
                lastMessage: {
                    author: 'Ed Sheeran',
                    date: new Date(Date.now()),
                    text: 'Check out my new song on spotify'
                }
            },
            {
                chatId: 9,
                firstName: 'Ryan',
                lastName: 'Gosling',
                lastMessage: {
                    author: 'Ryan Gosling',
                    date: new Date(Date.now()),
                    text: 'Check out my new film'
                }
            },
            {
                chatId: 10,
                firstName: 'Test',
                lastName: 'Chat',
                lastMessage: {
                    author: 'Test Chat',
                    date: new Date(Date.now()),
                    text: 'Check out my new film'
                }
            },
            {
                chatId: 11,
                firstName: 'Test',
                lastName: 'Chat',
                lastMessage: {
                    author: 'Test Chat',
                    date: new Date(Date.now()),
                    text: 'Check out my new film'
                }
            },
            {
                chatId: 12,
                firstName: 'Test',
                lastName: 'Chat',
                lastMessage: {
                    author: 'Test Chat',
                    date: new Date(Date.now()),
                    text: 'Check out my new film'
                }
            },
            {
                chatId: 13,
                firstName: 'Test',
                lastName: 'Chat',
                lastMessage: {
                    author: 'Test Chat',
                    date: new Date(Date.now()),
                    text: 'Check out my new film'
                }
            },
        ]
    },
    
];

module.exports = chats;