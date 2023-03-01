db.users.insertOne({ name: "tanmay" });

db.users.find();

db.users.insertOne({
  name: "juie",
  age: 19,
  address: { street: "ngp" },
  hobbies: ["running"],
});

db.users.find();

db.users.insertMany([{ name: "Joe" }, { name: "Mike" }]);

db.users.find();

db.users.insertMany([
  {
    name: "juie",
    age: 19,
    address: { street: "ngp" },
    hobbies: ["running"],
  },
  {
    name: "tanmay",
    age: 20,
    address: { street: "ngp" },
    hobbies: ["swimming"],
  },
  {
    name: "joe",
    age: 17,
    address: { street: "pune" },
    hobbies: ["cycling"],
  },
]);

db.users.find().limit(2);

db.users.find().sort({ name: 1 }).limit(2);

db.users.find().sort({ name: -1 }).limit(2);

db.users.find().sort({ age: 1, name: -1 }).limit(2);

db.users.find().sort({ age: -1, name: -1 }).limit(2);

db.users.find().skip(1).limit(2);

db.users.find({ name: "tanmay" });

db.users.find({ age: 19 });

db.users.find({ name: "tanmay" }, { name: 1, age: 1 });

db.users.find({ name: "tanmay" }, { name: 1, age: 1, address: 1, _id: 0 });

db.users.find({ name: "tanmay" }, { age: 0 });

//complex queries

db.users.find({ name: { $eq: "tanmay" } });

db.users.find({ name: { $ne: "tanmay" } });

db.users.find({ age: { $gt: 19 } });

db.users.find({ age: { $gte: 19 } });

db.users.find({ age: { $lte: 19 } });

db.users.find({ age: { $lt: 19 } });

db.users.find({ name: { $in: ["tanmay", "juie"] } });

db.users.find({ name: { $nin: ["tanmay", "juie"] } });

db.users.find({ age: { $exists: true } });

db.users.find({ age: { $exists: false } });

db.users.insertOne({ age: null, name: "rahul" });

db.users.find({ age: { $exists: true } });

db.users.find({ age: { $gte: 19, $lte: 30 } });

db.users.find({ name: "tanmay", age: { $gte: 19, $lte: 23 } });

db.users.find({ $and: [{ name: "tanmay" }, { age: 20 }] });

db.users.find({ $or: [{ name: "tanmay" }, { age: 19 }] });

db.users.find({ age: { $not: { $lte: 20 } } });

db.users.find({ age: { $gte: 20 } });

db.users.insertMany([
  {
    name: "tom",
    balance: 100,
    debt: 200,
  },
  {
    name: "kristin",
    balance: 20,
    debt: 0,
  },
]);

db.users.find({ $expr: { $gt: ["$debt", "$balance"] } });

db.users.find({ "address.street": "ngp" });

db.users.findOne({ age: { $lte: 40 } });

db.users.countDocuments({ age: { $lte: 40 } });

//updating

db.users.updateOne({ age: 20 }, { $set: { age: 22 } });

db.users.findOne({ age: 27 });

db.users.updateOne({ _id: id }, { $set: { name: "tanmay update" } });

db.users.findOne({ _id: id });

db.users.updateOne({ _id: id }, { $inc: { age: 3 } });

db.users.findOne({ _id: id });

db.users.updateOne({ _id: id }, { $rename: { name: "firstName" } });

db.users.updateOne({ _id: id }, { $unset: { age: "" } });

db.users.updateOne({ _id: id }, { $push: { hobbies: "travelling" } });

db.users.findOne({ _id: id });

db.users.updateOne({ _id: id }, { $pull: { hobbies: "travelling" } });

db.users.findOne({ _id: id });

db.users.updateMany(
  { address: { $exists: true } },
  { $unset: { address: "" } }
);

db.users.replaceOne({ age: 25 }, { name: "john" });

db.users.find({ name: "john" });

//delete
db.users.deleteOne({ name: "john" });

db.users.find({ name: "john" });

db.users.deleteMany({ age: { $exists: false } });

db.users.find();
