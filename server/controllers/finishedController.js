const finishedTasks = [
  {
    date: "July 12,2019",
    time: "1:30 pm",
    description: "Finished finishList",
    id: 1
  }
];
let id = 2;
const getFinishedTasks = (req, res) => {
  res.json(finishedTasks);
};

const addFinishedTask = (req, res) => {
  const { date, time, description } = req.body;
  if (!date || !time || !description) {
    return res.status(417).json("Date, time, and description are required");
  }
  finishedTasks.push({ date, time, description, id });
  id++;
  res.json(finishedTasks);
};

const updateFinishedTask = (req, res) => {
  const { id } = req.params;
  const { date, time, description } = req.body;
  console.log(id);
  const index = finishedTasks.findIndex(finished => finished.id === +id);

  edittedObject = {
    date,
    time,
    description,
    id: +id
  };
  finishedTasks[index] = edittedObject;
  res.json(finishedTasks);
};

const deleteFinishedTask = (req, res) => {
  const { id } = req.params;
  index = finishedTasks.findIndex(finished => finished.id === +id);
  finishedTasks.splice(index, 1);
  res.json(finishedTasks);
  console.log(id);
};

module.exports = {
  getFinishedTasks,
  addFinishedTask,
  updateFinishedTask,
  deleteFinishedTask
};
