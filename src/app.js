const express = require("express");
const cors = require("cors");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/repositories/:id", verifyId);

//middleware
function verifyId(request, response, next) {
  const { id } = request.params;
  if (!isUuid(id)) {
    return response.status(400).json({ "error": "invalid repository ID" });
  }
  return next();
}

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.send(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = { id: uuid(), title, url, techs, likes: 0 };
  repositories.push(repository);
  return response.json(repository);
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;
  const repository = repositories.findIndex((repo) => repo.id === id);
  if (repository < 0) {
    return response.status(400).json({ "error": "invalid repository ID" });
  }
  const newRepo = {
    id,
    title,
    url,
    techs,
    likes: repositories[repository].likes,
  };
  repositories[repository] = newRepo;
  return response.json(newRepo);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const index = repositories.findIndex((repo) => repo.id === id);
  if (index < 0) {
    return response.status(400).json({ "error": "invalid repository ID" });
  }
  repositories.splice(index, 1);
  return response.status(204).send();
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const index = repositories.findIndex((repo) => repo.id === id);
  if (index < 0) {
    return response.status(400).json({ "error": "invalid repository ID" });
  }
  repositories[index] = {
    ...repositories[index],
    likes: repositories[index].likes + 1,
  };
  return response.json(repositories[index]);
});

module.exports = app;
