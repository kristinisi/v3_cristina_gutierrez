const MODEL = Symbol("RestaurantsManager");
const VIEW = Symbol("ManagerView");
const LOAD_RESTAURANTS_MANAGER_OBJECTS = Symbol(
  "Load Restaurants Manager Objects"
);

class ManagerController {
  constructor(model, view) {
    this[MODEL] = model;
    this[VIEW] = view;

    //Invocamos el método onLoad para llamarlo cuando se cargue la página
    this.onLoad();

    //Invocamos el evento y asignamos el manejador al bind
    this.onInit();
    this[VIEW].bindInit(this.handleInit);
  }

  [LOAD_RESTAURANTS_MANAGER_OBJECTS]() {
    //Nos creamos las categorías
    const category1 = this[MODEL].createCategory("Moluscos");
    category1.image = "./img/_calamar.png";
    category1.description =
      "Almejas, Mejillones, Navajas, Ostras, Calamares, Sepias, Pulpos...";
    const category2 = this[MODEL].createCategory("Crustaceos");
    category2.image = "./img/_langosta.png";
    category2.description =
      "Gambas, Langostinos, Cangrejos, Langostas, Bogavante, Centollo...";
    const category3 = this[MODEL].createCategory("Pescados");
    category3.image = "./img/_pez.png";
    category3.description =
      "Pez totoaba, Pez globo, Atún rojo, Rodaballo salvaje, Merluza, Lubina...";

    //Añadimos las categorías
    this[MODEL].addCategory(category1, category2, category3);

    //Creamos los alérgenos
    const allergen1 = this[MODEL].createAllergen("Leche");
    allergen1.description =
      "Cualquier tipo de leche como desnatada, semidescanata o entera.";
    const allergen2 = this[MODEL].createAllergen("Tomate");
    allergen2.description =
      "Cualquier tipo de tomate, ya sea natural, frito, a la plancha, rallado o evaporado.";
    const allergen3 = this[MODEL].createAllergen("Queso");
    allergen3.description =
      "Cualquier tipo de queso, tanto enteros como complementos en salsas.";
    const allergen4 = this[MODEL].createAllergen("Limón");
    allergen4.description =
      "La mayoría de nuestros platos contienen limón, ya sea cortado o exprimido. Consultenos.";

    //Añadimos los alérgenos
    this[MODEL].addAllergen(allergen1, allergen2, allergen3, allergen4);

    //Creamos los menus
    const menu1 = this[MODEL].createMenu("Menú Degustación");
    menu1.description =
      "Nuestro menú Degustación es el más completo con 15 pequeños platos de diferentes sabores.";
    const menu2 = this[MODEL].createMenu("Menú Sorpen");
    menu2.description =
      "Nuestro menú Sorpren tendrás a elegir entre 3 platos y los 4 restantes serán elegidos por el chef.";
    const menu3 = this[MODEL].createMenu("Menú Libertad");
    menu3.description =
      "Nuestro menú Libertad te dará la oportunidad de elegir todos los platos a degustar hasta un máximo de 5 platos por persona.";

    //Añadimos los menus
    this[MODEL].addMenu(menu1, menu2, menu3);

    //Creamos los restaurantes
    const restaurante1 = this[MODEL].createRestaurant("MAR ORIGIN");
    restaurante1.description =
      "Situado en el corazón de Madrid, nuestro primer restaurante, el original";
    restaurante1.image = "./img/origin.jpg";
    const restaurante2 = this[MODEL].createRestaurant("MAR LITORAL");
    restaurante2.description =
      "Situado a pie de playa en Cádiz, donde nuestro producto salta a la mesa.";
    restaurante2.image = "./img/litoral.jpg";
    const restaurante3 = this[MODEL].createRestaurant("MAR CONTINENTAL");
    restaurante3.description =
      "Situado en el corazón de Segovia, un sitio encantador donde te trasladará al mar en un solo bocado.";
    restaurante3.image = "./img/continental.jpg";

    //Añadimos los restaurantes
    this[MODEL].addRestaurant(restaurante1, restaurante2, restaurante3);

    //Creamos los platos
    const plato1 = this[MODEL].createDish("Sepia sucia");
    plato1.description =
      "Tierna sepia cocida en su propia tinta, en armonía con la dulzura de la cebolla caramelizada y el perfume del ajo dorado, creando una sinfonía de contrastes que deleitará tu paladar con cada bocado.";
    plato1.ingredients = [
      "Sepia fresca",
      "Tinta de sepia",
      "Cebolla",
      "Ajo",
      "Tomate",
      "Aceite de oliva",
      "Sal",
      "Pimienta",
      "Perejil fresco",
    ];
    plato1.image = "./img/plato12.png";

    const plato2 = this[MODEL].createDish("Almejas");
    plato2.description =
      "Almejas frescas bañadas en su jugo natural, realzadas con un toque de ajo dorado y perejil fresco, ofreciendo un festín de sabor marino en cada bocado";
    plato2.ingredients = ["Almejas frescas", "Ajo", "Perejil fresco"];
    plato2.image = "./img/plato07.png";

    const plato3 = this[MODEL].createDish("Ostras");
    plato3.description =
      "Ostras recién abiertas, servidas con una delicada rodaja de limón, que resalta su sabor salino y brinda una experiencia refrescante y exquisita para el paladar.";
    plato3.ingredients = ["Ostras frescas", "Limón"];
    plato3.image = "./img/plato08.png";

    const plato4 = this[MODEL].createDish("Navajas");
    plato4.description =
      "Navajas frescas, delicadamente preparadas, servidas sobre una cama de cebolla caramelizada, que realza su sabor a mar mientras se complementa con la dulzura de la cebolla, creando una experiencia gastronómica sublime y sofisticada.";
    plato4.ingredients = [
      "Navajas frescas",
      "Cebolla",
      "Azúcar",
      "Aceite de oliva",
      "Sal",
    ];
    plato4.image = "./img/plato05.png";

    const plato5 = this[MODEL].createDish("Gambas blancas de Huelva");
    plato5.description =
      "Deléitate con nuestras Gambas Blancas de Huelva: langostinos frescos del Atlántico, cocidos para resaltar su dulzura natural. Cada bocado es un viaje a las costas de Huelva, con su sabor marino incomparable";
    plato5.ingredients = ["Gambas frescas", "Sal", "Limón"];
    plato5.image = "./img/plato13.png";

    const plato6 = this[MODEL].createDish("Gambones a la plancha");
    plato6.description =
      "Jugosos gambones cocinados en la plancha y realzados con un toque de limón fresco.";
    plato6.ingredients = ["Gambones frescos", "Sal", "Limón"];
    plato6.image = "./img/plato06.png";

    const plato7 = this[MODEL].createDish(
      "Langosta con bechamel, queso y verduras"
    );
    plato7.description =
      "Langosta con Bechamel y Queso, acompañada de verduras en tempura crujiente. Una combinación de sabores y texturas que te sorprenderá.";
    plato7.ingredients = [
      "Langosta fresca",
      "Bechamel(contiene leche)",
      "Queso",
      "Verduras varias",
      "Harina",
      " Huevo",
      "Sal",
      "Pimienta",
    ];
    plato7.image = "./img/plato10.png";

    const plato8 = this[MODEL].createDish("Pastel de centollo");
    plato8.description =
      "Una mezcla delicada de carne fresca de centollo en una masa finamente elaborada. Un deleite marino en cada bocado.";
    plato8.ingredients = [
      "Carne de centollo fresca",
      "Cebolla",
      "Tomate",
      "Pimiento rojo",
      "Pimiento verde",
      "Huevos",
      "Nata líquida",
      "Sal",
      "Pimienta",
      "Perejil",
    ];
    plato8.image = "./img/plato11.png";

    const plato9 = this[MODEL].createDish(
      "Salmón con salsa de espinacas y queso parmesano."
    );
    plato9.description =
      "Una combinación deliciosa de frescura marina y cremosidad gourmet en cada bocado.";
    plato9.ingredients = [
      "Filetes de salmón fresco",
      "Espinacas frescas",
      "Queso parmesano rallado",
      "Nata líquida",
      "Ajo",
      "Mantequilla",
      "Sal",
      "Pimienta",
    ];
    plato9.image = "./img/plato09.png";

    const plato10 = this[MODEL].createDish(
      "Mero con Variado de Patatas y Salsa Verde de Ajo y Perejil."
    );
    plato10.description =
      "Una combinación de sabores del mar y la tierra en cada bocado.";
    plato10.ingredients = [
      "Filetes de mero frescos",
      "Patatas (varias variedades, como rojas, blancas y dulces)",
      "Ajo",
      "Perejil fresco",
      "Sal",
      "Pimienta",
    ];
    plato10.image = "./img/plato04.png";

    const plato11 = this[MODEL].createDish(
      " Merluza con Salsa de Nata, Tomate y Espinacas"
    );
    plato11.description =
      "Una combinación cremosa y deliciosa que realza la suavidad de la merluza con el frescor de las espinacas y el toque de tomate.";
    plato11.ingredients = [
      "Filetes de merluza frescos",
      "Nata líquida (crema de leche)",
      "Tomates",
      "Espinacas frescas",
      "Ajo",
      "Sal",
      "Pimienta",
    ];
    plato11.image = "./img/plato01.png";

    const plato12 = this[MODEL].createDish(
      "Pez Totova con Tempura de Zanahoria y Remolacha con salsa de ajo."
    );
    plato12.description =
      "Descubre nuestro plato de Pez Totova con Tempura de Zanahoria y Remolacha, servido con una salsa de ajo picante y aromática. Una combinación irresistible de sabores y texturas que te cautivará.";
    plato12.ingredients = [
      "Filetes de pez totova frescos",
      "Zanahorias",
      "Remolachas",
      "Harina de trigo",
      "Huevo",
      "Ajo",
      "Sal",
      "Perejil ",
    ];
    plato12.image = "./img/plato02.png";

    //Añadimos los platos
    this[MODEL].addDish(
      plato1,
      plato2,
      plato3,
      plato4,
      plato5,
      plato6,
      plato7,
      plato8,
      plato9,
      plato10,
      plato11,
      plato12
    );

    //Añadimos los platos a las categorías
    this[MODEL].assignCategoryToDish(category1, plato1, plato2, plato3, plato4);
    this[MODEL].assignCategoryToDish(category2, plato5, plato6, plato7, plato8);
    this[MODEL].assignCategoryToDish(
      category3,
      plato9,
      plato10,
      plato11,
      plato12
    );

    //Añadimos los platos a las alergias
    this[MODEL].assignAllergenToDish(
      allergen1,
      plato7,
      plato8,
      plato9,
      plato11
    );
    this[MODEL].assignAllergenToDish(allergen2, plato8, plato11);
    this[MODEL].assignAllergenToDish(allergen3, plato7, plato9);
    this[MODEL].assignAllergenToDish(allergen4, plato3, plato5);

    //Añadimos los platos a los menús
    this[MODEL].assignDishToMenu(menu1, plato3, plato8, plato12);
    this[MODEL].assignDishToMenu(menu2, plato4, plato5, plato9);
    this[MODEL].assignDishToMenu(menu3, plato2, plato7, plato11);
  }

  onLoad = () => {
    this[LOAD_RESTAURANTS_MANAGER_OBJECTS]();
    this.onAddCategory();
    this.onAddAllergen();
    this.onAddMenu();
    this.onAddRestaurant();
  };

  onInit = () => {
    //carga las categorías al iniciar la página principal
    this[VIEW].showCategories(this[MODEL].categories);
    const randoms = this[MODEL].getRandomDishes();
    this[VIEW].showRandomDishes(randoms);
    this[VIEW].showWe();
    this[VIEW].bindDishesCategoryList(this.handleDishesCategoryList);
  };

  handleInit = () => {
    this.onInit();
  };

  onAddCategory = () => {
    this[VIEW].showCategoriesInMenu(this[MODEL].categories);
    this[VIEW].bindDishesCategoryListInMenu(this.handleDishesCategoryList);
  };

  onAddAllergen = () => {
    this[VIEW].showAllergensInMenu(this[MODEL].allergens);
    this[VIEW].bindDishesAlleregnListInMenu(this.handleDishesAllergenList);
  };

  onAddMenu = () => {
    this[VIEW].showMenuInMenu(this[MODEL].menus);
    this[VIEW].bindDishesMenuListInMenu(this.handleDishesMenuList);
  };

  onAddRestaurant = () => {
    this[VIEW].showRestaurantsInMenu(this[MODEL].restaurants);
    this[VIEW].bindRestaurantListInMenu(this.handleRestaurant);
    this[VIEW].showCloseInMenu();
    this[VIEW].bindCloseInMenu(this.handleClose);
  };

  handleDishesCategoryList = (name) => {
    const category = this[MODEL].createCategory(name);
    this[VIEW].listDishes(
      this[MODEL].getDishesInCategroy(category),
      category.name,
      "Categorías"
    );
    this[VIEW].bindDishClick(this.handleDish);
  };

  handleDishesAllergenList = (name) => {
    const allergen = this[MODEL].createAllergen(name);
    this[VIEW].listDishes(
      this[MODEL].getDishesWithAllergen(allergen),
      allergen.name,
      "Alérgenos"
    );
    this[VIEW].bindDishClick(this.handleDish);
  };

  handleDishesMenuList = (name) => {
    const menu = this[MODEL].createMenu(name);
    this[VIEW].listDishes(
      this[MODEL].getDishesWithMenu(menu),
      menu.name,
      "Menús"
    );
    this[VIEW].bindDishClick(this.handleDish);
  };

  handleDish = (name) => {
    const dish = this[MODEL].createDish(name);
    this[VIEW].showDish(dish);
    this[VIEW].bindShowDishInNewWindow(this.handleShowDishInNewWindow);
  };

  handleRestaurant = (name) => {
    const rest = this[MODEL].createRestaurant(name);
    this[VIEW].showRestaurant(rest, name);
  };

  handleShowDishInNewWindow = (name, pag) => {
    const dish = this[MODEL].createDish(name);
    this[VIEW].showDishInNewWindow(dish, pag);
  };

  handleClose = (pag) => {
    console.log(pag);
    pag.forEach((value) => {
      value.close();
    });
    pag.clear();
    this[VIEW].cont = 0;
  };
}
export default ManagerController;
