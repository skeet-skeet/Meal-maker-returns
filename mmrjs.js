const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
        
    get appetizers() {
      return this._appetizers;
    },
    get mains() {
      return this._mains;
    },
    get desserts() {
      return this._desserts;
    },
  },
  
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };  
  this._courses[courseName].push(dish);
  },     
};
    
menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);
    
menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);
    
menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

const getRandomDishFromCourse = (courseName) => {
    const dishes = menu._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  };
      
const generateRandomMeal = () => {
    const appetizer = getRandomDishFromCourse('appetizers');
    const main = getRandomDishFromCourse('mains');
    const dessert = getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
        
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  };
    
const meal = () => {
  document.getElementById("demo").innerHTML = generateRandomMeal();
};
  
var food = document.querySelector("button");

food.addEventListener("click", function(){
    meal();  
});

