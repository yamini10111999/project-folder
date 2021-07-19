let storage = JSON.parse(localStorage.getItem('books'))
var arr = [];
for( let i = 0; i < storage.length; i++){
  arr.push(storage[i]);
}

function storeItem(a = "Dummy", b = '$5.00') {
  console.log('called')
  //name, cost --> plz pass in this order
  let item = {
    name: a,
    cost: b
  };
  // for(let a = 0; a < arr.length; a++){
  //   if(arr[a].name == playerNumber.name)
  //   return alert('Player already in cart')
  // }
  arr.push(item);
  localStorage.setItem("books", JSON.stringify(arr));
}

function getAllItem() {
  let getArr = JSON.parse(localStorage.getItem("books"));
  for (let i = 0; i < getArr.length; i++) {
    addItem(getArr[i]);
  }
}

function addItem(dum) {
  let box = document.querySelector(".table-box");

  let new_item = document.createElement('div');
  box.append(new_item)
  new_item.outerHTML = 
    `<div class="table-row">
    <div class="table-cell first-cell">
        <p>9</p>
    </div>
    <div class="table-cell">
        <p>${dum.name}</p>
    </div>
    <div class="table-cell">
        <p>${dum.cost}</p>
    </div>
    <div class="table-cell last-cell">
        <p>1</p>
    </div>
  </div>`
}

// function removePlayer(p_name){
//   let removeElem = this.parentElement.parentElement.parentElement;
//   removeElem.remove();

//   let z = JSON.parse(localStorage.getItem('array'));
//   arr = [];
//   for(let k = 0; k < Object.keys(z).length; k++){
//     if(z[k].name == p_name) continue
//     else{
//       arr.push(z[k])
//     }
//   }
//   localStorage.setItem('array',JSON.stringify(arr));
// }
