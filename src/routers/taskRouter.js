import express from "express";
import { idGenerator } from "../utils.js";
import { insertTask, getTasks, updateTask, deleteTask } from "../models/task/TaskModel.js";

const router = express.Router();

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
});

/*update task*/
router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);
    result?._id
      ? res.json({
          message: "Your task has been updated",
        })
      : res.json({
          message: "Your task could not be updated",
        });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong in server. Please contact the provider.",
    });
  }
});

/*delete task*/
router.delete("/", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;
    const result = await deleteTask(id);

    result?._id
      ? res.json({
          message: "Your task has been deleted",
        })
      : res.json({
          message: "Your task could not be deleted",
        });
  } catch (error) {
    res.status(500).json({
      message: "Something went wrong in server. Please contact the provider.",
    });
  }
});

export default router;
