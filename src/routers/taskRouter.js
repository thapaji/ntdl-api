import express from "express";
import { idGenerator } from "../utils.js";

const router = express.Router();

let fakeDb = [];

/* GET*/
router.get("/", (req, res) => {
  res.json({
    message: "From the router",
    data: fakeDb,
  });
});

/* POST*/
router.post("/", (req, res) => {
  const id = idGenerator();
//   console.log(req.body);
  fakeDb.push({...req.body, id});
  res.json({
    message: "From the router",
  });
});

/*update task*/
router.patch("/", (req, res) => {
  const { id, type } = req.body;
  console.log(id, type);
  fakeDb = fakeDb.map((item)=>{
    if(item.id === id){
        return{...item,type}
    }
    return item;
  })

  res.json({
    message: "Your task has been updated",
  });
});


/*delete task*/
router.delete("/", (req, res) => {
    const { id } = req.body;
    console.log(id);
    fakeDb = fakeDb.filter(item=>item.id != id);
  
    res.json({
      message: "Your task has been deleted",
    });
  });
  
export default router;
