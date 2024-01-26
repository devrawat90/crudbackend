 const express = require("express");
require("./config");
const app = express();
const model = require("./schema");
const port = 7000;
app.use(express.json());
app.get("", async (req, resp) => {
  resp.send("helllo");
});
 
app.get("/get", async (req, resp) => {
  const data = await model.find();
  console.log(data);
  resp.send(data);
});
app.post("/create", async (req, resp) => {
  const data = new model(req.body);
  const result = await data.save();
  console.log(result);
  resp.send(result);
});
app.get("/update/:id", async (req, resp) => {
  const data = await model.find({ _id: req.params.id });
  if (data) {
    resp.send(data);
    console.log(data);
  } else {
    resp.send({ sesult: "No Record Found" });
    console.log("No data Found");
  }
});
app.put("/update/:id", async (req, resp) => {
  const data = await model.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
});
app.put("/update/data/:roll", async (req, resp) => {
  const data = await model.updateOne(
    { roll_no: req.params.roll },
    { $set: req.body }
  );

  console.log(data);
  resp.send(data);
});
app.delete("/delete/:id", async (req, resp) => {
  const data = await model.deleteOne({ _id: req.params.id });
  console.log(data);
  resp.send(data);
});
app.get("/delete/:roll", async (req, resp) => {
  const data = await model.find({ roll_no: req.params.roll });
  console.log(data);
  resp.send(data);
});
app.delete("/delete/data/:roll", async (req, resp) => {
  const data = await model.deleteOne({ roll_no: req.params.roll });
  console.log(data);
  resp.send("data");
});

app.listen(port, () => {
  console.log(`server is ready at port number ${port}`);
});
