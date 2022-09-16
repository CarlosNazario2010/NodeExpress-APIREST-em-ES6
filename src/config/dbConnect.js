import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Carlos:admin@cluster0.su6gg4d.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;