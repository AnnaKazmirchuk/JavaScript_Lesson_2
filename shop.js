const goods = [
    {
        id: 1,
        name: "Dress",
        description: "Office style, blue color",
        sizes: ["40", "42", "44"],
        price: 5000,
        available: true,
    },
    {
        id: 2,
        name: "Suit",
        description: "Office style, grey color",
        sizes: ["40", "42", "44"],
        price: 8000,
        available: true,
    },    
    {
        id: 3,
        name: "Jacket",
        description: "Office style, pink color",
        sizes: ["40", "42", "44"],
        price: 7000,
        available: true,
    },    
    {
        id: 4,
        name: "Trouses",
        description: "Office style, black color",
        sizes: ["40", "42", "44"],
        price: 6600,
        available: true,
    },  
    {
        id: 5,
        name: "Coat",
        description: "Winter season, green color",
        sizes: ["40", "42", "44"],
        price: 15000,
        available: true,
    },   
]

const basket = [
    {
        good: 1,
        amount: 5,
    },
    {
        good: 5,
        amount: 3,
    },
]    

function addGood(goodIndex, amount) {
    basket.push({"good":goodIndex, "amount":amount});
    return basket
}    


function deleteGood(good) {
    basket.splice(good, 1);
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length);
    return basket
}

function getTotal() {

    result = {
        totalAmount: 0,
        totalSum: 0,
    }
    for (let position of basket) {
        result.totalAmount += position.amount;
        result.totalSum += goods[position.good].price  * position.amount;
    }
    return result
}


// console.log(addGood(process.argv[2], process.argv[3]))
// console.log(deleteGood(process.argv[2]))
// console.log(clearBasket())
console.log(getTotal())