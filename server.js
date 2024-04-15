import express from "express";
import morgan from "morgan";
const app = express();

const PORT = process.env.PORT || 8000;

/*    MiddleWares       */
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json({
    message: "To Do ......",
  });
});

//run the server

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server running at http://localhost:${PORT}`);
});
