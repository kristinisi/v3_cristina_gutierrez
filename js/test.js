import ManagerApp from "../js/managerApp.js";

window.addEventListener("popstate", (event) => {
  if (event.state) {
    historyActions[event.state.action](event);
  }
});

const historyActions = {
  init: () => {
    ManagerApp.handleInit();
  },
  dishesCategoryList: (event) =>
    ManagerApp.handleDishesCategoryList(event.state.category),
  dishesAllergenList: (event) =>
    ManagerApp.handleDishesAllergenList(event.state.allergen),
  dishesMenuList: (event) => ManagerApp.handleDishesMenuList(event.state.menu),
  restaurant: (event) => ManagerApp.handleRestaurant(event.state.restaurant),
  dish: (event) => ManagerApp.handleDish(event.state.name),
};

history.replaceState({ action: "init" }, null);
