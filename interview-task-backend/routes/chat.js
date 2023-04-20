const express = require('express');
const chats = require('../data/chats');
const messages = require('../data/messages')
const route = express.Router();

route.get('/', (req, res) => {
    res.status(200).json(chats);
});


route.get('/:id/message', (req, res) => {
    try {
        const chatId = +req.params.id;
        const chat = messages.find(el => el.chatId === chatId);
        if (chat) {
            res.status(200).json(chat);
            return
        }
    
        res.status(400).json('');
    } catch (error) {
        res.status(400).json('');
    }
});

route.post('/:id/message', (req, res) => {
    try {
        const chatId = +req.params.id;
        const chat = messages.find(el => el.chatId === chatId);
        if (chat) {
            const response = { author: chat.chatWith, text: "Thank you for your message!", date: new Date(Date.now()) };
            chat.messages.push(req.body);
            chat.messages.push(response)
            let chatInfoChat = null;
            for (let category of chats) {
                chatInfoChat = category.chats.find(el => el.chatId === chatId);
                if (chatInfoChat)
                    break;
            }
            chatInfoChat.lastMessage = response;
            res.status(200).json(response);
            return
        }
    
        res.status(400).json('');
    } catch (error) {
        res.status(400).json('');
    }
});

module.exports = route;