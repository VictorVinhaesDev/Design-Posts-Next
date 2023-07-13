import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT);
      
      } catch (error) {
      
        throw new Error ("Mongodb connect failed: " + error)
      }
}
export default connect