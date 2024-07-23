const mongoose = require('mongoose');

main()
    .then(() => {
        console.log('connection successful.');
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

/* ## Insert in mongoose : insertOne  */
// const user1 = new User({
//     name: "Prajwal",
//     email: "prajwal@123.in",
//     age: 24
// });

// user1.save();


/* ## Insert in mongoose : insertOne  using then and catch. */
// const user2 = new User({
//     name: "raftaar",
//     email: "raftaar@123.in",
//     age: 23
// });

// user2.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


/* ## Insert in mongoose : insertMaby */
// User.insertMany([
//     { name: "Iron Man", email: "ironman@333gmail.com", age: 50 },
//     { name: "Thor", email: "thor@111gmail.com", age: 30 },
//     { name: "Spider Man", email: "spiderman@333gmail.com", age: 47 }
// ]).then((res) => {
//     console.log(res);
// });


/* ## Find in mongoose : */
// User.find({}) // no filter use.
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.find({ age: { $gte: 30 } })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


/* ## Find in mongoose : Model.findById */
// User.findById('669fa9cf827e8ec2f21d2cfa')
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


/* ## Update in mongoose : */
// ## updateOne():-
// User.updateOne(
//     { name: "Iron Man" }, // filter
//     { age: 55 })          // Updation
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


// ## updateMany():-
// User.updateMany(
//     { age: {$gt: 30} }, // condition
//     { age: 55 })          // Updation
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


/* ## Update in mongoose :
    --> findOneAndUpdate(conditions, update)           // returns Query
    --> findOneAndUpdate(conditions, update, options)  // returns Query
*/

// // ## findOneAndUpdate(conditions, update) :
// User.findOneAndUpdate({ name: "Spider Man" }, { name: "spidy" })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });


// ## findOneAndUpdate(conditions, update, options) : by default new is false.
// User.findOneAndUpdate({ name: "raftaar" }, { name: "Raftaar" }, { new: true })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });


/* ## Update in mongoose :
    --> findByIdAndUpdate(id, update)           // returns Query
    --> findByIdAndUpdate(id, update, options)  // returns Query
*/
// User.findByIdAndUpdate("669f552c20f9a9118ee73534", { age: 100 }, { new: true })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });


/* ## Delete in mongoose : deleteOne */
// User.deleteOne({ name: "Iron man" })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });


/* ## Delete in mongoose : deleteMany */
// User.deleteMany({ age: { $lt: 30 } })
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//         console.log(err)
//     });
