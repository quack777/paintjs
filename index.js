// const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

// const title = document.querySelector("h2");

// function handleTitleClick() {
//   title.style.color = "blue";
// }

// function handleMouseEnter() {
//   title.innerText = "Mouse is here!";
// }

// function handleMouseLeave() {
//   title.innerText = "Mouse is gone!";
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

//css에서 클래스이름 clicked를 만들어서 색깔속성을 넣어주고 js에서 그 클래스이름을 넣었다 빼면서 색깔속성을 넣었다가 뺄 수 있게 함
const h1 = document.querySelector("h1");
const title = document.querySelector("body");
const black = "max";
const teal = "min";
function handleResize() {
  let width_size = window.innerWidth;
  if (width_size>1000 &&width_size <=1200) {
    title.classList = black;
    console.log(title.className);
  } else if (width_size>800 &&width_size <=1000) {
    title.classList.remove("max");
    console.log(title.className);
  } else if (width_size>600 &&width_size <=800) {
    title.classList.add("min");
    console.log(title.className);
}
}

window.addEventListener("resize", handleResize);