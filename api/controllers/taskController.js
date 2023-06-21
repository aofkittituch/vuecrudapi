const mongoose = require("mongoose");
const task = mongoose.model("task");

exports.list_all_task = (req, res) => {
  task.find({}, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.create_a_task = (req, res) => {
  const newTask = new task(req.body);
  newTask.save((err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.read_a_task = (req, res) => {
  task.findById(req.params.taskId, (err, task) => {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.update_a_task = (req, res) => {
  task.findOneAndUpdate(
    { _id: req.params.taskId },
    req.body,
    { new: true },
    (err, task) => {
      if (err) res.send(err);
      res.json(task);
    }
  );
};

exports.delete_a_task = (req, res) => {
  task.deleteOne({ _id: req.params.taskId }, (err) => {
    if (err) res.send(err);
    res.json({
      message: "task successfully deleted",
      _id: req.params.taskId,
    });
  });
};
