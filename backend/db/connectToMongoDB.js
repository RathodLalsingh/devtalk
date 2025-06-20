import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Connected to The MongoDB");
	} catch (error) {
		console.log("Database connectivity issue encountered with MongoDB", error.message);
	}
};

export default connectToMongoDB;
