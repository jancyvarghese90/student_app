var express = require("express");
const router = express.Router();
const studentModel = require("../model/studentModel");

// post route
router.post("/add", async (req, res) => {
  try {
    var item = req.body;
    var data = new studentModel(item);
    await data.save();
    // await new studentModel(req.body).save()
    res.status(200).send("Data added successfully!!");
  } catch (error) {
    res.status(404).send("Unable to send data");
  }
});

// get route
router.get("/get", async (req, res) => {
  try {
    var data = await studentModel.find();
  
    res.status(200).send(data);
  } catch (error) {
    res.status(404).send("unable to send");
  }
});

// delete route
router.delete("/remove/:a", async (req, res) => {
  try {
    console.log(req.params.a);
    await studentModel.findByIdAndDelete(req.params.a);
    res.status(200).send("Deleted successfully");
  } catch (error) {
    res.status(404).send("unable to delete");
  }
});

router.put("/edit/:id", async (req, res) => {
  try {
   await studentModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("updated successfully");
   
  } catch (error) {
    res.status(404).send("unable to update");
  }
});
module.exports = router;