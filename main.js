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

for (let i = 0; i < $btnDel.length; i++) {
    $btnDel[i].addEventListener("click", () => {
        let removeItem = $btnDel.value;
        list.remove(removeItem);
        console.log(removeItem);
        render();
        localStorage.removeItem(localStorageKey, JSON.stringify(list));
    });
}


function render() {
  let html = list.map((item) => {
    return `
            <div class = "listItem">
                <li>${item} <button class = "del">${"X"}</button></li>               
            </div>
        `;
  });
  post.innerHTML = html.join("");
}
render();
