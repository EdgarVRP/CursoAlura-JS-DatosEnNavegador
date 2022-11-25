import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (evento) => {
  evento.preventDefault();
  const list = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");

  const value = input.value;
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");
  //const taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];
  //console.log("INICIO");
  //console.log(taskList);
  //const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  // console.log(taskList);

  input.value = "";
  calendar.value = "";
  const taskObj = {
    value,
    dateFormat,
  };
  /* Anteriormente se utilizaba:
    const taskObj={
      value: value,
      dateFormat: dateFormat
    }
     */
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  //SessionStorage para guardar los datos sin cerrar pestaña
  //sessionStorage.setItem('task', JSON.stringify(taskObj));
  taskList.push({ value, dateFormat });
  //console.log("FIN PUSH");
  //console.log(taskList);
  localStorage.setItem("tasks", JSON.stringify(taskList));

  const task = createTask(taskObj);
  list.appendChild(task);
};

export const createTask = ({ value, dateFormat }) => {
  const task = document.createElement("li");
      task.classList.add("card");
  //backticks
  const taskContent = document.createElement("div");
  console.log(value, dateFormat);
  const titleTask = document.createElement("span");
      titleTask.classList.add("task");
      titleTask.innerText = value;
      taskContent.appendChild(checkComplete());
      taskContent.appendChild(titleTask);
  // task.innerHTML = content;
  const dateElement = document.createElement("span");
      dateElement.innerHTML = dateFormat;
      task.appendChild(taskContent);
      task.appendChild(dateElement);
      task.appendChild(deleteIcon());
  return task;
};
// export default addTask;
