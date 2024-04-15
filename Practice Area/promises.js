function getCheese() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "🧀";
      resolve(cheese);
    }, 3000);
  });
}
function makeDough(cheese) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "🫓";
      if (dough == "🧀🫓") {
        resolve(dough);
      } else {
        reject("Bad dough");
      }
    }, 3000);
  });
}
function bakePizza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "🍕";
      resolve(pizza);
    }, 3000);
  });
}

async function orderPizza(){
    try{
        const cheese = await getCheese();
        console.log("here is your cheese", cheese);

        const dough = await makeDough(cheese);
        console.log("here is your dough", dough);

        const pizza = await bakePizza(dough);
        console.log("here is your order", pizza);
    }catch(err){
        console.log("error occurred", err)
    }
}

orderPizza();


// getCheese()
//   .then((cheese) => {
//     console.log("here is your cheese", cheese);
//     return makeDough(cheese);
//   })
//   .then((dough) => {
//     console.log("here is your dough", dough);
//     return bakePizza(dough);
//   })
//   .then((pizza) => {
//     console.log("here is your pizza", pizza);
//   })
//   .catch((data) => {
//     console.log("error occurred", data);
//   })
//   .finally(() => {
//     console.log("process ended");
//   });
