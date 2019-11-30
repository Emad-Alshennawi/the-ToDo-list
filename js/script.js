// select the elements
const list = document.getElementById("list");
const input = document.getElementById("input");
const enterKey = document.getElementById("add-to-do");
const focus = document.getElementById('input');
const btn = document.getElementById("btn");

// focus function
window.onload = function () {
  focus.focus();
}

//add to-do function
function addToDo(toDo){

  const item = `<li class="item">
                  <p class="text">${toDo}</p>
                  <span class="delete">delete</span>
                </li>`;

  const position = "beforeend";

  list.insertAdjacentHTML(position, item);
}

// add the enter key function
enterKey.addEventListener("keyup",function(event){

    if(event.keyCode == 13){

      const toDo = input.value;

        if(toDo){
          addToDo(toDo);
        }
        input.value = "";
      }
});

// add button to-do function
btn.onclick = function () {

  const toDo = input.value;

  if(toDo){
    addToDo(toDo);
  }
  input.value = "";
}

//  remove function
list.addEventListener("click",function(event){

  if(event.target.className == 'delete'){

    const li = event.target.parentElement;

    list.removeChild(li);
  }
});
