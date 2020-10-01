const cart = {
    price: 0,
    quantity: 0
}

const getPriceInt = price => parseInt(price.match(/\d+/g).toString());//получение стоимости из строки типа "25 грн."

const productQuantityCart = document.querySelector('#cart-product-quantity');//верхний блок: количество
const productPriceCart = document.querySelector('#cart-product-price');//верхний блок: цена

function renderTopCart({price, quantity}) {
    productPriceCart.innerHTML = price;
    productQuantityCart.innerHTML = quantity;
}

document.querySelectorAll('.qty__item').forEach(nodeElement => {//validation of inputs
    nodeElement.addEventListener('change', () => {
        if(nodeElement.value < 1)
            nodeElement.value = 1
    })
})

document.querySelectorAll('.product-box__btn').forEach(nodeElement => {//listener of add button
    nodeElement.addEventListener('click', () => {
        const currentPrice = nodeElement.parentElement.querySelector('p').innerHTML;
        const currentQuantity = parseInt(nodeElement.parentElement.querySelector('input').value);

        cart.quantity += currentQuantity || 1;
        cart.price += getPriceInt(currentPrice) * (currentQuantity || 1);

        renderTopCart(cart);
    })
})