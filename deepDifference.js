var order1 = {
  sandwich: "tuna",
  chips: true,
  drink: "soda",
  order: 1,
  toppings: ["pickles", "mayo", "lettuce"],
  details: {
    name: "Chris",
    phone: "555-555-5555",
    email: "no@thankyou.com"
  },
  otherVal1: "1"
};

var order2 = {
  sandwich: "turkey",
  chips: true,
  drink: "soda",
  order: 2,
  toppings: ["pickles", "lettuce"],
  details: {
    name: "Jon",
    phone: "(555) 555-5555",
    email: "yes@please.com"
  },
  otherVal2: "2"
};

var diff = function(obj1, obj2) {
  // Make sure an object to compare is provided
  if (!obj2 || Object.prototype.toString.call(obj2) !== "[object Object]") {
    return obj1;
  }

  //
  // Variables
  //

  var diffs = {};
  var key;

  for (key in obj1) {
    if (obj1.hasOwnProperty(key)) {
        compare(obj1[key], obj2[key], key);
    }
}
};
