const flowers = [
  {  id: 1,
    color: "white",
    species: "white rose",
    price: .90,
  },
  {  id: 2,
    color: "blue",
    species: "red tulip",
    price: 1.10,
  }
]

const addFlower = (flowerObject) => {
        const lastIndex = flowers.length - 1
        const currentLastItem = flowers[lastIndex]
        const maxId = currentLastItem.id
        const newId = maxId + 1
        
        flowerObject.id = newId
        flowers.push(flowerObject)
}


const findExpensiveFlowers = () => {
    const expensiveFlowers = []
    for (const flower of flowers) {
        if(flower.price >= 1){
            expensiveFlowers.push(flower)
        }
        
    }



    return expensiveFlowers  // Do not change this code
}




// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

