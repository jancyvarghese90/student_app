const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    studentName:String,
    studentAge:Number,
    studentLocation:String
});
const studentModel=mongoose.model('student',studentSchema);
module.exports=studentModel;