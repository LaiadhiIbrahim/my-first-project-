const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("clode");

openBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (openBtn.textContent === "Open") {
    openBtn.textContent = "Close";
    openBtn.setAttribute("id", "close");
    menu.style.transform = "translateX(-100%)";
  } else {
    openBtn.textContent = "Open";
    openBtn.setAttribute("id", "open");
    menu.style.transform = "translateX(0)";
  }
});

closeBtn.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  if (closeBtn.textContent === "Close") {
    closeBtn.textContent = "Open";
    closeBtn.setAttribute("id", "open");
    menu.style.transform = "translateX(0)";
  } else {
    closeBtn.textContent = "Close";
    closeBtn.setAttribute("id", "close");
    menu.style.transform = "translateX(-100%)";
  }
});
