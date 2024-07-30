module.exports = {
  multipleMongooseToObject: (mongooses) => {
    return mongooses.map((mongoose) => {
      return mongoose.toObject();
    });
  },
  mongooseToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
