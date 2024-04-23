import TaskSchema from "./TaskSchema.js";

/*CREATE*/
export const insertTask = (taskObj) => {
    return TaskSchema(taskObj).save();
}

/*READ*/
export const getTasks = () => {
    return TaskSchema.find();
}

/*UPDATE*/
export const updateTask = ({ id, type }) => {
    console.log(id, type);
    return TaskSchema.findByIdAndUpdate({ "_id": id }, { type }, { new: true });
}

/*DELETE ONE or  MANY*/
export const deleteTask = (ids) => {
    console.log('///////////////' + ids)
    // return TaskSchema.deleteOne({ "_id": id });
    return TaskSchema.deleteMany({ _id: { $in: ids } });
}

// /*DELETE MANY*/
// export const deleteManyTask = (ids) => {
//     // return TaskSchema.deleteOne({ "_id": id });
//     return TaskSchema.findByIdAndDelete({ "_id" in {$} });
// }