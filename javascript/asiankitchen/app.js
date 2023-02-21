// Dataset
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// define button classes
let btnClasses = ["btn-item", "btn", "btn-outline-dark"];

// define single item div classes
let singleItemDivClasses = ["menu-items", "col-lg-6", "col-sm-12"]

// define single item img classes
let singleItemImgClasses = "photo"

// define menu info div classes
let menuInfoDivClasses = ["menu-info"]

// define menu title div classes
let menuTitleDivClasses = ["menu-title"]

// define title price classes
let titlePriceClasses = ["price"]

// define menu text classes 
let menuTextDivClasses = ["menu-text"]

// set Attributes function to set many attr at a time
function setAttributes(element, attributes){
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  };
}

// append many children at a time
function appendChildren(element, children){
  children.forEach(child => {
    element.appendChild(child);
  });
}

// remove many children at a time
function removeChildren(element, children){
  children.forEach(child => {
    element.removeChild(child);
  });
}

// create single item in the menu
function createSingleItem({id, title, img, desc, price, category, ...args}){
  //div single-item -----------------------------------------------------------------------------------
  let singleItemDiv = document.createElement("div");
  setAttributes(singleItemDiv, {"id":`item-${id}`, "category": category});
  singleItemDiv.classList.add(...singleItemDivClasses);

    //>img----------------------------------------------------------------------------------------
    let singleItemImgAttrs = {"class":singleItemImgClasses, src:img, alt:title}; // update
    let singleItemImg = document.createElement("img");
    setAttributes(singleItemImg, singleItemImgAttrs);
    //img ----------------------------------------------------------------------------------------

    //>div menu-info------------------------------------------------------------------------------
    let menuInfoDiv = document.createElement("div");
    menuInfoDiv.classList.add(...menuInfoDivClasses);

      //>div>div menu-title------------------------------------------------------------------
      let menuTitleDiv = document.createElement("div");
      menuTitleDiv.classList.add(...menuTitleDivClasses);
      //div----------------------------------------------------------------------------------

        //>div>div>h4  (h4 title h4 price)-------------------------------------------
        let titleName = document.createElement("h4");
        titleName.innerHTML = title; // update
        //h4-------------------------------------------------------------------------

        //h4 (2)---------------------------------------------------------------------
        let titlePrice = document.createElement("h4");
        titlePrice.classList.add(...titlePriceClasses);
        titlePrice.innerHTML = price; // update
        //h4-------------------------------------------------------------------------
      appendChildren(menuTitleDiv, [titleName, titlePrice])
      //>div>div menu-text-------------------------------------------------------------------
      let menuTextDiv = document.createElement("div");
      menuTextDiv.classList.add(...menuTextDivClasses);
      menuTextDiv.innerHTML = desc; //update
      //div----------------------------------------------------------------------------------
      appendChildren(menuInfoDiv, [menuTitleDiv, menuTextDiv]);
    //div-----------------------------------------------------------------------------------------
    appendChildren(singleItemDiv, [singleItemImg, menuInfoDiv]);
  //div single-item -----------------------------------------------------------------------------------

  menuSection?.appendChild(singleItemDiv)
}

// shows the filtered menu items
function showMenu (menu) {
  menu.forEach(item => {
    createSingleItem(item);
  });
}

let selectedCategory = "All";

//check selected category
function checkCategory({category, ...args}) {
  return selectedCategory === category ;
}

const getChildrenExceptGivenCategory = (parentElementId, category) => {
  return document.querySelectorAll(`${parentElementId}>div:not([category="${category}"])`);
}

const getChildrenByCategory = (parentElementId, category) => {
  return document.querySelectorAll(`${parentElementId}>div[category="${category}"]`);
}

const clearMenuItems = (toBeRemoved) => {
  removeChildren(menuSection, toBeRemoved);
}

// Get the category list
const categories = ["All", ...new Set(menu.map(item => {
  return item.category;
}))];

// get the button container (category menu)
const btnContainer = document.querySelector(".btn-container");

// Add buttons w.r.t. categories
categories.forEach(category => {
  let filterBtn = document.createElement("button");
  filterBtn.classList.add(...btnClasses);
  filterBtn.setAttribute("id", `cat-${category}`)
  filterBtn.innerHTML = `${category}`;

  // -------------------START - Add event listener to each category button-------------------
  filterBtn.addEventListener("click", function() {
    selectedCategory = category;

    let toBeRemoved = getChildrenExceptGivenCategory("#menu-section", selectedCategory);

    let toBeKept = getChildrenByCategory("#menu-section", selectedCategory);
  
    // create items from menu dataset
    let shownMenu = menu.filter(item => checkCategory(item));
    clearMenuItems(toBeRemoved); // category değiştiğinde length'e bak

    shownMenu.length > 0 ? showMenu(shownMenu) : showMenu(menu);
  });
  // -------------------END - Add event listener to each category button-------------------
  btnContainer?.appendChild(filterBtn);
});

// get the menu section element
const menuSection = document.querySelector("#menu-section");
showMenu(menu);




