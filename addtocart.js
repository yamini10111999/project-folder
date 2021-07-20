window.onload = () => {
  let addBtn = document.querySelectorAll(".cards .btn");
  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", (e) => {
      const Btn = e.currentTarget;
      let a, b;
      a = Btn.parentElement.children[1].innerHTML;
      b = Btn.parentElement.children[2].innerHTML;
      storeItem(a, b);
      Btn.classList.add('added');
      Btn.setAttribute('disabled', 'disabled');
      setTimeout( function() {
        Btn.classList.remove('added')
        Btn.removeAttribute('disabled');
      }, 1500);
    });
  }
};

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
    addItem(getArr[i], i + 1);
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
  emptyCheck();
}

function emptyCheck() {
  let z = JSON.parse(localStorage.getItem("books"));
  let itemLength = Object.keys(z).length;
  console.log('emptycheck', itemLength)
    if (itemLength < 1) {
      document.getElementsByClassName("Cart")[0].style.display = "none";
      document.getElementsByClassName("emptyCart")[0].style.display =
        "block";
    } else {
      document.getElementsByClassName("Cart")[0].style.display = "block";
      document.getElementsByClassName("emptyCart")[0].style.display =
        "none";
    }
  }