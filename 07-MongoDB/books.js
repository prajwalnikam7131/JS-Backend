const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('connection successful.');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}
// ## you can define schema first way:
// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     price: Number
// });


// ## you can define schema second way:
// const bookSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     author: {
//         type: String
//     },
//     price: {
//         type: Number
//     }
// });

/*  ## SchemaType options:
    1) required : (required : true)
    2) default: (default: 0)
*/
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1,"Price is too low for Amazon selling"], // when error then show this string.
    },
    discount: {
        type: Number,
        default: 0, 
    }
});

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title: "Physics",
    author: "RD Sharma",
    price: 1199
});

book1.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });