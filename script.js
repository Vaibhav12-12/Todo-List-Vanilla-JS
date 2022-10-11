const addTask = document.getElementById('addTask');
const input = document.getElementById('input');

addTask.addEventListener('click', addNewTask);

function addNewTask() {
  if (input.value != "") {
    var x = document.createElement('div');
    x.innerHTML = input.value;
    document.body.appendChild(x);
    x.addEventListener('click', singleClick);
    x.addEventListener('dblclick', doubleClick);
    input.value = "";
  }
}

function singleClick() {
  if (this.style.textDecoration != "line-through") {
    this.style.textDecoration = "line-through";
  }
  else {
    this.style.textDecoration = "none";
  }
}

function doubleClick() {
  this.remove();
}