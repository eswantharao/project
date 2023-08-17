const mongoose = require("mongoose");

const connectDB = async() => {
	try
	{
		
		await mongoose.connect("mongodb+srv://eswanthrao42:eswanth%402003@fullstack-blog.ur4sc8c.mongodb.net/fullstack-blog?retryWrites=true&w=majority");
		console.log("MongoDB connected...");
	}
	catch(err)
	{
		console.log(err);
		process.exit(1);
	}
}

module.exports = connectDB;