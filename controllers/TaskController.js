const Task = require("../models/Task");

module.exports = class TaskController {
  static createTask(req, res) {
    res.render("tasks/create");
  }

  //adicionando tarefas
  static async createTaskSave(req, res) {
    const task = {
      title: req.body.title,
      done: false,
    };
    await Task.create(task);
    res.redirect("/tasks");
  }
  //visualizar tarefas
  static async showTasks(req, res) {
    const tasks = await Task.findAll({ raw: true });

    res.render("tasks/all", { tasks });
  }
  //removendo tarefas
  static async removeTasks(req, res) {
    const id = req.body.id;
    await Task.destroy({ where: { id: id } });
    res.redirect("/tasks");
  }

  //puxando dados para o formulário
  static async uptadetasks(req, res) {
    const id = req.params.id;
    const tasks = await Task.findOne({ where: { id: id }, raw: true });
    res.render("tasks/update", { tasks });
  }
  //atualizando dados
  static async TaskUpdatePost(req, res) {
    const id = req.body.id;
    const task = {
      title: req.body.title,
    };
    await Task.update(task, { where: { id: id } });
    res.redirect("/tasks");
  }

  //atualizando o status
  static async UpdateStatus(req, res) {
    const id = req.body.id;
    const status = {
      done: req.body.done === "0" ? true : false,
    };
    await Task.update(status, { where: { id: id } });
    res.redirect("/tasks");
  }
};
