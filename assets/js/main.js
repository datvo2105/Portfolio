const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let btns = $$(".btn-control");

btns.forEach((btn) => {
  btn.onclick = () => {
    $(".btn-control.active")?.classList.remove("active");
    btn.classList.add("active");
  };
});
