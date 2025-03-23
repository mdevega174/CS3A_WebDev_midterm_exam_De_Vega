const cart = {};
function addToCart(product_name, product_prize) {
    if (cart[product_name]){
        cart[product_name].quality += 1;
        cart[product_name].totalPrize += product_prize;
    }else { //if not existing in the object
        cart[product_name] = {
            quanlity: 1
            totalPrize: product_prize
        };
    }
    
    function updateCartDisplay() {
        const cartlist = document.getElementByIn('products');
        cartlist.innerHTML = '';
        for(let product in cart) {
            const listItem =document.createElement('li');
            listItem.innerText = ${product}
                                -Quantity: ${cart[product].quality}
                                -totalPrize*product_prize
        }
    }
}
