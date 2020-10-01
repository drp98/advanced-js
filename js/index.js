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

function sort() {
    const selectedCategory = document.querySelector('#select-category').value;
    const selectedPrice = getPriceInt(document.querySelector('#select-price').value);

    document.querySelectorAll('.product-box__item').forEach(item => {
        const productCategory = item.getAttribute('category');
        const productPrice = getPriceInt(item.querySelector('p').innerHTML);
        
        if((productCategory == selectedCategory || selectedCategory == 'all') && (productPrice <= selectedPrice || selectedPrice == 0)) {
            item.style.display = 'flex'
        }
        else {
            item.style.display = 'none'
        }
    })

}

function productNotAvailable() {

    const div_list = document.querySelectorAll('.product-box__item'); // returns NodeList
    const div_array = [...div_list]; // convert NodeList to Array
    const warningBox = document.querySelector('.warning-box');

    if(div_array.every(item => item.style.display == 'none')) {
        warningBox.style.display = 'flex';
    } else {
        warningBox.style.display = 'none';
    }

}

document.querySelector('#select-category').addEventListener('change', sort)
document.querySelector('#select-price').addEventListener('change', sort)
document.querySelector('#select-category').addEventListener('change', productNotAvailable)
document.querySelector('#select-price').addEventListener('change', productNotAvailable)