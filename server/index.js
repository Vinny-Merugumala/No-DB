const express = require("express");
const toDoController = require("./controllers/toDoController");
const finishedController = require("./controllers/finishedController");
const app = express();

app.use(express.json());

app.get("/api/toDo", toDoController.getToDoTasks);
app.post("/api/toDo", toDoController.addToDoTask);
app.put("/api/toDo/:id", toDoController.updateToDoTask);
app.delete("/api/toDo/:id", toDoController.deleteToDoTask);

app.get("/api/finished", finishedController.getFinishedTasks);
app.post("/api/finished", finishedController.addFinishedTask);
app.put("/api/finished/:id", finishedController.updateFinishedTask);
app.delete("/api/finished/:id", finishedController.deleteFinishedTask);

const PORT = 6969;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
