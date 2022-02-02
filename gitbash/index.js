const products = [
    {id:"001", name:"television", description:"Quality exprience, at an affordable price", price:"$400", inStock:"true"},
    {id:"002", name:"standing fan", description:"A samsung product", price:"$50", inStock:"true"},
    {id:"003", name:"table", description:"made of tempered glass", price:"$120", inStock:"false"},
    {id:"004", name:"mifi", description:"wireless, fast & safe connection", price:"$50", inStock:"true"},
    {id:"005", name:"laptop", description:"A hp product", price:"$499", inStock:"false"},
    {id:"006", name:"Iphone 13", description:"An apple product", price:"$1100", inStock:"false"},
    {id:"007", name:"A catorn of indomie", description:"Quick and easy to cook", price:"$10", inStock:"true"},
    {id:"008", name:"mirrior", description:" An oval shaped mirrior", price:"$50", inStock:"false"},
    {id:"009", name:"flash light", description:" last longer after full charge", price:"$9", inStock:"true"},
    {id:"010", name:"playstation 5", description:" its more than just a game", price:"$600", inStock:"false"},
    {id:"011", name:"xbox seriesx", description:"the future of gaming", price:"$650", inStock:"false"},
    {id:"012", name:"wii", description:"your game, your rules ", price:"$375", inStock:"true"},
    {id:"013", name:"nintendo switch", description:"never leave your child without one ", price:"$300", inStock:"true"},
    {id:"014", name:"inverter", description:"electricty whenever you want it", price:"$250", inStock:"false"},
    {id:"015", name:"dvd player", description:"LG's best selling product ", price:"$39", inStock:"true"}

]

// company name
const productNames = products.map(product=> `${product.name}`);
console.log(productNames)



const productNamesAndPrice = products.map(product=> `${product.name} -  ${product.price}`);
console.log(productNamesAndPrice)

// products in stock
const productsInStock= products.filter(product => product.inStock==="true" );
console.log(productsInStock)


// products not in stock
const productsNotInStock= products.filter(product => product.inStock !=="true");
console.log(productsNotInStock)