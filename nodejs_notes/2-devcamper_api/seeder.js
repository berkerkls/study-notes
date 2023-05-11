const fs = require('fs');
const mongoose = require('mongoose');
const colors = require('colors');
const dotenv = require('dotenv');

// reach the config file
dotenv.config({ path: './config/config.env' });

// connect to mmongoose
mongoose.connect(process.env.MONGO_URI);

// get bootcamps json in the file
const bootcamps = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/bootcamps.json`, 'utf-8')
);

// Get bootcamp model
const Bootcamp = require('./models/Bootcamp');

// Basically we are doing post method just like we do in our controller
const importData = async () => {
  try {
    await Bootcamp.create(bootcamps);
    console.log('Data Imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error.red.inverse);
  }
};

// And basically we are deleting whole data just like we do in our controller
const deleteData = async () => {
  try {
    await Bootcamp.deleteMany();
    console.log('Data destroyed'.red.inverse);
  } catch (error) {
    console.log(error.red.inverse);
  }
};

// if the node seeder -i run it will import and node seeder -d it will delete whole data
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
