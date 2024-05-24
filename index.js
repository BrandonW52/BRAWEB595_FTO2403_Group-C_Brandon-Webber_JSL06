// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
  Starters: ["Garlic Bread", "Bruschetta"],
  MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
  Desserts: ["Tiramisu", "Cheesecake"],
};

// Function to display menu items by category
function displayMenuItems(menu) {
  const menuContainer = document.getElementById("menu");

  Object.keys(menu).forEach((menuCategories) => {
    const menuItemHeader = document.createElement("h2");
    menuItemHeader.textContent = menuCategories;
    menuContainer.appendChild(menuItemHeader);

    const menuList = document.createElement("ul");

    menu[menuCategories].forEach((menuItem) => {
      const menuListItem = document.createElement("li");
      menuListItem.textContent = menuItem;
      menuListItem.addEventListener("click", () =>
        addToOrder(menuItem, menuCategories)
      );
      menuList.appendChild(menuListItem);
    });

    menuContainer.appendChild(menuList);
  });
}

// Callback function for adding an item to the order
function addToOrder(menuItem, menuCategories) {
  const orderItemsList = document.getElementById("order-items");
  const orderTotalElement = document.getElementById("order-total");
  let pricing = 0;

  const orderListItem = document.createElement("li");
  orderListItem.textContent = menuItem;
  orderItemsList.appendChild(orderListItem);

  let currentTotal = parseFloat(orderTotalElement.textContent);

  pricing = 0;

  menuCategories == "Starters"
    ? (pricing = 20)
    : menuCategories == "MainCourses"
    ? (pricing = 80)
    : menuCategories == "Desserts"
    ? (pricing = 30)
    : alert("Error");

  currentTotal += pricing;

  orderTotalElement.textContent = currentTotal;

  // Removes items from order
  orderListItem.addEventListener("click", () => {
    orderListItem.remove();

    currentTotal = parseFloat(orderTotalElement.textContent);

    pricing = 0;

    menuCategories == "Starters"
      ? (pricing = -20)
      : menuCategories == "MainCourses"
      ? (pricing = -80)
      : menuCategories == "Desserts"
      ? (pricing = -30)
      : alert("Error");

    currentTotal += pricing;

    orderTotalElement.textContent = currentTotal;
  });
}

// Function to initialize the menu system
function initMenuSystem(menu) {
  // Call the function to display menu items
  displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
