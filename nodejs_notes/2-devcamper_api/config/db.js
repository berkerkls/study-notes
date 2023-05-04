// Here we initialized mongoose
const mongoose = require('mongoose');

// And we created a function to connect the db and use connect func, first param is the url that we can take from mongodb and second param is an object that includes settings as key and val.
const connectDB = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB connected: ${connection.connection.host}`);
};
// mongoose 6 which is the upgraded version, you shouldn't give useNewUrlParser  useCreateIndex useUnifiedTopology true and useFindAndModify false  because mongoose already works like that

module.exports = connectDB;
