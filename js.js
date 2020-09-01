/* Нажимаем на элемент с подменю, основное меню исчезает, на его месте появляется подменю. */
/* ЛИБО */
/* Нажимаем на элемент с подменю, подменю появляется справа и смещает основное меню, становясь на его место. */

const menuBtn = document.querySelector("i.fas.fa-bars");
const nav = document.querySelector("#nav");
const parentLi = document.querySelector(".submenuParentItem");
const submenu = document.querySelector("#menuAbout");
const menuBackBtn = submenu.querySelector("li:last-child");

menuBtn.addEventListener("click", () => nav.classList.toggle("show"));
parentLi.addEventListener("click", () => submenu.classList.add("slideIn"));
menuBackBtn.addEventListener("click", () => submenu.classList.remove("slideIn"));