import mongoose from "mongoose";

const todosSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            lowercase: true
        },
        description: {
            type: String,
            required: true,
            lowercase: true
        },
        complete: {
            type: Boolean,
            default: false,
          },
        createdby: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    },{
        timestamps: true
    }
)

export const Todos = mongoose.model("Todos", todosSchema)