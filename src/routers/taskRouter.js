import express from "express";
import { idGenerator } from "../utils.js";
import { insertTask, getTasks, updateTask, deleteTask } from "../models/task/TaskModel.js";

const router = express.Router();

let fakeDb = [];

/* GET*/
router.get("/", async (req, res) => {
  const result = await getTasks();
  console.log(result);
  res.json({
    message: "Tasks read",
    data: result,
  });
});

/* POST*/
router.post("/", async (req, res) => {
  try {
    const result = await insertTask(req.body);
    // console.log(result);
    result?._id
      ? res.json({
          message: "Added the data",
        })
      : res.json({
          message: "Failed to add new data",
        });
  } catch (error) {
    console.log(error);
  }
  /*
    const id = idGenerator();
    console.log(req.body);
    fakeDb.push({ ...req.body, id });
  */
});

/*update task*/
router.patch("/", async (req, res) => {
  const { id, type } = req.body;
  const result = await updateTask(id, type);
  // console.log(result);

  // fakeDb = fakeDb.map((item) => {
  //   if (item.id === id) {
  //     return { ...item, type };
  //   }
  //   return item;
  // });
  result?.acknowledged
    ? res.json({
        message: "Your task has been updated",
      })
    : res.json({
        message: "Your task could not be updated",
      });
});

/*delete task*/
router.delete("/", async (req, res) => {
  const { id } = req.body;
  const result = await deleteTask(id);

  // console.log(id);
  // fakeDb = fakeDb.filter((item) => item.id !== id);

  result?.acknowledged
    ? res.json({
        message: "Your task has been deleted",
      })
    : res.json({
        message: "Your task could not be deleted",
      });
});

export default router;
