function filterSelection(filter) {
  let cata_img = document.querySelectorAll(".card_section > .card-row");
  var btn = document.querySelectorAll(".filterBtn > .btn");
  for (let i = 0; i < btn.length; i++) {
    btn[i].classList.remove("active");
  }
  if (filter == "All") {
    for (let i = 0; i < cata_img.length; i++) {
      // cata_img[i].classList.remove("scale0");
      cata_img[i].classList.add("scale1");
    }
  } else {
    for (let i = 0; i < cata_img.length; i++) {
      if (cata_img[i].classList.contains(filter)) {
        cata_img[i].classList.add("scale1");
      } else {
        cata_img[i].classList.remove('scale1');
      }
    }
  }
  this.classList.add("active");
}
window.onload = () => {
  var btn = document.querySelectorAll(".filterBtn > .btn");
  btn[0].click();
}
