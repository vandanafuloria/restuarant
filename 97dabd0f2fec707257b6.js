import foodOneImage from "./images/food1.avif";

function generateFoodOption(menuEl) {
  const menuBar = document.createElement("div");
  menuBar.classList.add("menuBar");

  for (let i = 0; i < 4; i++) {
    const menuListEl = document.createElement("div");
    menuListEl.classList.add("dishContent");

    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", foodOneImage);

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

    // menuEl.appendChild(menuBar);
    return menuBar;
  }
}

export default function createMenuPage() {
  const menuEl = document.createElement("div");
  menuEl.classList.add("menu");

  const headingEl = document.createElement("div");
  headingEl.classList.add("optionContainer");

  const smHeadingEl = document.createElement("h4");
  smHeadingEl.innerText = "Food Menu";

  const xlHeadingEl = document.createElement("h3");
  xlHeadingEl.innerText = "Most Popular Items";

  headingEl.append(smHeadingEl, xlHeadingEl);
  //   menuEl.appendChild(headingEl);

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
  //   menuEl.appendChild(mealSelectEl);

  menuEl.append(headingEl, mealSelectEl);

  for (let i = 0; i < 6; i++) menuEl.appendChild(generateFoodOption(menuEl));

  return menuEl;
}
