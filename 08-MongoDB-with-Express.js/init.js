const mongoose = require('mongoose');

const Chat = require('./models/chat');


main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "prajwal",
        to: "raftaar",
        msg: "Hello, Good Morning!",
        created_at: new Date()
    },
    {
        from: "rohit",
        to: "pinky",
        msg: "can you send me a today's pictures.",
        created_at: new Date()
    },
    {
        from: "ganpat",
        to: "rahul",
        msg: "Hii, where are you!",
        created_at: new Date()
    },
    {
        from: "anita",
        to: "ganesh",
        msg: "when you free then call me.",
        created_at: new Date()
    },
    {
        from: "bobby",
        to: "simba",
        msg: "sorry, please pick my phone.",
        created_at: new Date()
    },
]

Chat.insertMany(allChats);