import "./style.css";

import createHomePage from "./home";
import createMenuPage from "./menu";
import generateContactBoard from "./contact";
import createBookingPage from "./booking";

const currentPageContainer = document.querySelector(".current-page");

const menuNavBtn = document.getElementById("menu");
const homeNavBtn = document.getElementById("home");
const contactNavBtn = document.getElementById("contact");
const bookingNavBtn = document.getElementById("booking");

function navigate(page) {
  homeNavBtn.classList.remove("nav-active");
  menuNavBtn.classList.remove("nav-active");
  contactNavBtn.classList.remove("nav-active");

  if (page === "HOME") {
    const homePage = createHomePage();
    homeNavBtn.classList.add("nav-active");
    const menuPage = createMenuPage();
    const bookingPage = createBookingPage();
    const contactPage = generateContactBoard();

    currentPageContainer.replaceChildren(
      homePage,
      menuPage,
      bookingPage,
      contactPage
    );
  } else if (page === "MENU") {
    const menuPage = createMenuPage();
    menuNavBtn.classList.add("nav-active");
    currentPageContainer.replaceChildren(menuPage);
    // currentPageContainer.replaceChildre
  } else if (page === "CONTACT") {
    const contactPage = generateContactBoard();
    contactNavBtn.classList.add("nav-active");
    currentPageContainer.replaceChildren(contactPage);
  } else if (page === "BOOK") {
    const bookingPage = createBookingPage();
    bookingNavBtn.classList.add("nav-active");
    currentPageContainer.replaceChildren(bookingPage);
  }
}

function initialize() {
  // const homePage = createHomePage()
  // homeNavBtn.classList.add("nav-active");
  // // const menuPage = createMenuPage();
  // currentPageContainer.appendChild(homePage);

  navigate("HOME");
}

menuNavBtn.onclick = () => navigate("MENU");
homeNavBtn.onclick = () => navigate("HOME");
contactNavBtn.onclick = () => navigate("CONTACT");
bookingNavBtn.onclick = () => navigate("BOOK");

document.addEventListener("DOMContentLoaded", initialize);

/*********************************************/

// menuNavBtn.addEventListener

// document.addEventListener("DOMContentLoaded", createHomePage);
// document.addEventListener("DOMContentLoaded", menuSectionGeneration);
// document.addEventListener("DOMContentLoaded", generateContactBoard);
