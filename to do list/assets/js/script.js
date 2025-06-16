let btn = document.getElementById("btn");
btn.addEventListener("click", addTask);
let tickAll = document.getElementById("tickAll");
let deletAll = document.getElementById("deletAll");
let unorderList = document.getElementById("unorderList");
let task = document.getElementById("task");

function addTask(event) {
  if (unorderList.children.length >= 0) {
    task.placeholder = "Adauga taskuri";
  }

  tickAll.addEventListener("click", tickAll1);
  function tickAll1() {
    Check();
  }

  deletAll.addEventListener("click", deletAll1);
  function deletAll1() {
    Xmark();
  }

  event.preventDefault();

  if (task.value.trim() === "") {
    alert("Introdu un task");
    return;
  }

  let listItem = document.createElement("li");
  let btnCheck = document.createElement("button");
  let check = document.createElement("i");
  let paragraf = document.createElement("p");
  let xmark = document.createElement("i");
  let btnXmark = document.createElement("button");

  btnCheck.addEventListener("click", Check);
  function Check() {
    listItem.classList.add("bifa");
  }

  btnXmark.addEventListener("click", Xmark);
  function Xmark() {
    listItem.classList.add("remove");
    setTimeout(() => {
      listItem.remove();
    }, 1500);
  }
  btnCheck.classList.add("check");
  btnXmark.classList.add("xmark");
  check.classList.add("fa-solid", "fa-check");
  xmark.classList.add("fa-solid", "fa-xmark");

  unorderList.appendChild(listItem);
  listItem.appendChild(btnCheck);
  listItem.appendChild(paragraf);
  listItem.appendChild(btnXmark);
  btnCheck.appendChild(check);
  btnXmark.appendChild(xmark);

  paragraf.innerText = task.value;

  task.value = "";
}
