const post = document.getElementById("post");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
let $btnDel = document.getElementsByClassName("del");

console.log(post, input, btn);
const localStorageKey = "localStorageKey";
const local = localStorage.getItem(localStorageKey);

let list = ["ban1", "ban2", "ban3"];

if (local == null) {
  list = [];
} else {
  list = JSON.parse(local);
}

btn.addEventListener("click", addItem);

function addItem() {
  let newItem = input.value;
  console.log(newItem);
  list.push(newItem);
  render();
  localStorage.setItem(localStorageKey, JSON.stringify(list));
  input.value = ""; //clear input value
}

function delete1(id){
  let removed = list.splice(id, 1);
  console.log(removed);
  localStorage.removeItem(removed);
  localStorage.setItem(localStorageKey, JSON.stringify(list));
  render();
}

function render() {
  let html = list.map((item, index) => {
    let id = index;
    return `
            <div class = "listItem">
                <li>${index + 1}. ${item} <button class = "del" onclick = 'delete1(${id})'>${"X"}</button></li>               
            </div>
        `;
  });
  post.innerHTML = html.join("");
}
render();
