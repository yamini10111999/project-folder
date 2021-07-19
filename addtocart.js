window.onload = () => {
  let addBtn = document.querySelectorAll(".cards .btn");
  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", (e) => {
      console.log('btn clicked')
      let a, b;
      a = e.currentTarget.parentElement.children[1].innerHTML;
      b = e.currentTarget.parentElement.children[2].innerHTML;
      storeItem(a, b);
    });
  }
}

var arr = [];
let storage = JSON.parse(localStorage.getItem("books"));
for (let i = 0; i < storage.length; i++) {
  arr.push(storage[i]);
}

function storeItem(a = "Dummy", b = "$5.00", c = 1) {
  //name, cost, quantity --> plz pass in this order
  let item = {
    name: a,
    cost: b,
    quantity: c,
  };
  for (let a = 0; a < arr.length; a++) {
    if (arr[a].name == item.name) {
      arr[a].quantity++;
      localStorage.setItem("books", JSON.stringify(arr));
      return;
    }
  }
  arr.push(item);
  localStorage.setItem("books", JSON.stringify(arr));
}

function getAllItem() {
  let getArr = JSON.parse(localStorage.getItem("books"));
  for (let i = 0; i < getArr.length; i++) {
    addItem(getArr[i], i+1);
  }
}

function addItem(dum, srNo) {
  let box = document.querySelector(".table-box");

  let new_item = document.createElement("div");
  box.append(new_item);
  new_item.outerHTML = `<div class="table-row">
    <div class="table-cell first-cell">
        <p>${srNo}</p>
    </div>
    <div class="table-cell">
        <p>${dum.name}</p>
    </div>
    <div class="table-cell">
        <p>${dum.cost}</p>
    </div>
    <div class="table-cell last-cell">
        <p>${dum.quantity}</p>
    </div>
    <div class="table-cell last-cell">
    <button class="btn2">Remove</button>
    </div>
    </div>`;
}

function removeItem(item) {
  item.remove();
  let z = JSON.parse(localStorage.getItem("books"));
  arr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == item.children[1].children[0].innerHTML) continue;
    else {
      arr.push(z[k]);
    }
  }
  localStorage.setItem("books", JSON.stringify(arr));
}
