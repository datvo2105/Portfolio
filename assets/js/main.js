const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btns = $$(".btn-control");

btns.forEach((btn) => {
  btn.onclick = () => {
    $(".btn-control.active")?.classList.remove("active");
    btn.classList.add("active");
  };
});

// const contents = document.querySelectorAll("content-item");
// window.onscroll = () => {
//   let current = "";

//   contents.forEach((content) => {
//     const contentTop = content.offsetTop;
//     if (pageOffset >= contentTop - 60) {
//       current = content.getAttribute("id");
//     }
//   });

//   btns.forEach((btn) => {
//     $(".btn-control.active")?.classList.remove("active");
//     if (btn.classList.contains(current)) {
//       btn.classList.add("active");
//     }
//   });
// };
