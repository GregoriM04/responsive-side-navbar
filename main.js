const btn = document.querySelector("#btn");
const sidebar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(".search-icon");

// First try
// btn.onclick = function () {
//     sidebar.classList.toggle("active");
// };

// searchBtn.onclick = function () {
//     sidebar.classList.toggle("active");
// };

// Second try
let activate = function () {
  sidebar.classList.toggle("active");
};

btn.addEventListener("click", activate);
searchBtn.addEventListener("click", activate);
