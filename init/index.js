const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/warderlust");
}


main().then((res) => {
    console.log("DB connection successful");
}).catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "678661169cf5f12e78c52c01"}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
}

initDB();