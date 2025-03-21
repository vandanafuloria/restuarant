const contentEl = document.querySelector(".content");
const homeBtnEl = document.querySelector(".home");

function createHomePage() {
  const homePageHeadingsEl = document.createElement("div");

  const headingEl = document.createElement("h1");
  headingEl.innerText = "Enjoy Our Delicious Meal";
  const paraEl = document.createElement("p");
  paraEl.innerText =
    "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet";
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "BOOK A TABLE";
  console.log(buttonEl);

  // create text side of the page
  homePageHeadingsEl.append(headingEl, paraEl, buttonEl);

  const imageContainerEl = document.createElement("div");
  const imagEl = document.createElement("img");
  imagEl.setAttribute("src", "images/hero.png");
  imageContainerEl.appendChild(imagEl);

  homePageHeadingsEl.append(imageContainerEl);

  contentEl.appendChild(homePageHeadingsEl);
  contentEl.appendChild(imageContainerEl);
}

/*********************************************/

function generateFoodOption(menuEl) {
  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");

  for (let i = 0; i < 4; i++) {
    const menuListEl = document.createElement("div");
    menuListEl.classList.add("dishContent");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/food1.avif");

    const menuListContent = document.createElement("div");
    menuListContent.classList.add("dishContentList");

    const menuListContentEl = document.createElement("div");

    const dishName = document.createElement("h1");
    dishName.innerText = "Chicken Burger";

    const priceEl = document.createElement("h3");
    priceEl.innerText = "$12";

    menuListContentEl.append(dishName, priceEl);
    menuListContent.append(imgEl, menuListContentEl);

    menuListEl.append(menuListContent);
    menuBar.appendChild(menuListEl);

    menuEl.appendChild(menuBar);
  }
}

const menuEl = document.querySelector(".menu");

function menuSectionGeneration() {
  const headingEl = document.createElement("div");
  headingEl.classList.add("optionContainer");

  const smHeadingEl = document.createElement("h4");
  smHeadingEl.innerText = "Food Menu";

  const xlHeadingEl = document.createElement("h3");
  xlHeadingEl.innerText = "Most Popular Items";

  headingEl.append(smHeadingEl, xlHeadingEl);
  menuEl.appendChild(headingEl);

  const mealSelectEl = document.createElement("div");
  mealSelectEl.classList.add("mealSection");
  const brkfstEl = document.createElement("div");
  const lunchEl = document.createElement("div");
  const dinnerEl = document.createElement("div");

  const iconContainer = document.createElement("i");
  iconContainer.classList.add("fa-solid", "fa-mug-saucer");
  const brkfast = document.createElement("h4");
  brkfast.innerText = "Breakfast";

  brkfstEl.append(iconContainer, brkfast);

  const iconContainerLunch = document.createElement("i");
  iconContainerLunch.classList.add("fa-solid", "fa-burger");
  const lunch = document.createElement("h4");
  lunch.innerText = "Dunch";

  lunchEl.append(iconContainerLunch, lunch);

  const iconContainerdinner = document.createElement("i");
  iconContainerdinner.classList.add("fa-solid", "fa-utensils");
  const dinner = document.createElement("h4");
  dinner.innerText = "Dinner";
  dinnerEl.append(iconContainerdinner, dinner);

  mealSelectEl.append(brkfstEl, lunchEl, dinnerEl);
  menuEl.appendChild(mealSelectEl);

  generateFoodOption(menuEl);
}

const contactEl = document.querySelector(".contact");

function generateContactBoard() {
  const contactElHeading = document.createElement("h1");
  contactElHeading.innerText = "Any Query ? Contact Us";

  contactEl.appendChild(contactElHeading);

  const infoContainer = document.createElement("div");

  const infoPhoneEl = document.createElement("div");
  const infoPhoneContent = document.createElement("div");
  const phoneHeading = document.createElement("h1");
  phoneHeading.innerText = "Phone";
  const logoEl = document.createElement("i");
  logoEl.classList.add("fa-solid", "fa-phone-volume");
  infoPhoneContent.append(phoneHeading, logoEl);
  const phoneNum = document.createElement("p");
  phoneNum.innerText = "+91-9087654321";
  infoPhoneEl.append(infoPhoneContent, phoneNum);

  infoContainer.appendChild(infoPhoneEl);

  const infoEmail = document.createElement("div");

  const infoEmailEl = document.createElement("div");
  const infoEmailContent = document.createElement("div");
  const emailHeading = document.createElement("h1");
  emailHeading.innerText = "Email";
  const emailLogoEl = document.createElement("i");
  emailLogoEl.classList.add("fa-solid", "fa-envelope");
  infoEmailContent.append(emailHeading, emailLogoEl);
  const email = document.createElement("p");
  email.innerText = "vaddafaf555@gmail.com";
  infoEmailEl.append(infoEmailContent, email);

  infoContainer.appendChild(infoEmailEl);

  const infoAddress = document.createElement("div");

  const infoAddressEl = document.createElement("div");
  const infoAddressContent = document.createElement("div");
  const addressHeading = document.createElement("h1");
  addressHeading.innerText = "Address";
  const infoAddressLogoEl = document.createElement("i");
  infoAddressLogoEl.classList.add("fa-solid", "fa-location-dot");
  infoAddressContent.append(addressHeading, infoAddressLogoEl);
  const address = document.createElement("p");
  address.innerText = "Mr John Smith: 132 My Street, Kingston, New York 1240";
  infoAddressEl.append(infoAddressContent, address);

  infoContainer.appendChild(infoAddressEl);

  contactEl.appendChild(infoContainer);

  const locationContainer = document.createElement("div");
  const mapContainer = document.createElement("img");
  mapContainer.setAttribute("src", "images/map.png");
  const restaurantContainer = document.createElement("img");
  restaurantContainer.setAttribute("src", "images/restaurant.jpg");

  locationContainer.append(mapContainer, restaurantContainer);

  contactEl.appendChild(locationContainer);
}

document.addEventListener("DOMContentLoaded", createHomePage);
document.addEventListener("DOMContentLoaded", menuSectionGeneration);
document.addEventListener("DOMContentLoaded", generateContactBoard);
