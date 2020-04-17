const mongoose = require('mongoose')
const tasksSchema = mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
},{
    timestamps:true
})

const task = mongoose.model('Task',tasksSchema)




module.exports = task