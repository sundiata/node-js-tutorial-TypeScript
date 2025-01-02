import mongoose, {Schema, Document} from "mongoose";



export interface ITodo extends Document {
 title: string;
 completed: boolean;
 userId: string;
}



const TodoSchema: Schema = new Schema({
    title: { type: String, required: true },
    completed: {type: Boolean, required: true, default: false},
    userId: {type: Schema.Types.ObjectId, ref: "User", required: true}
})


export default mongoose.model<ITodo>("Todo", TodoSchema);