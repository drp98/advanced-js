const cart = [];

const getPriceInt = price => parseInt(price.match(/\d+/g).toString());//получение стоимости из строки типа "25 грн."
const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const productQuantityCart = document.querySelector('#cart-product-quantity');
const productPriceCart = document.querySelector('#cart-product-price');
const buttonOrder = document.querySelector('#btn-order');

const categorySelect = document.querySelector('#select-category');
const priceSelect = document.querySelector('#select-price');
const formOrder = document.querySelector('#form-order');
const warningBox = document.querySelector('.warning-box');

const nodeListOfProductBox = document.querySelectorAll('.product-box__item');

const modal = document.querySelector('#modal-order');
const closeModal = document.getElementsByClassName('close')[0];
const inputEmail = document.querySelector('#email');
const inputName = document.querySelector('#name');
const buttonSend = document.querySelector('#button-send');

function renderTopCart({price, quantity}) {
    productPriceCart.innerHTML = price;
    productQuantityCart.innerHTML = quantity;
}

function getSumOfFields(obj, field) {
    return obj.reduce((accumulator, currentValue) => {
        return accumulator + currentValue[field];
    },0)
}

function sort() {
    const selectedCategory = categorySelect.value;
    const selectedPrice = getPriceInt(priceSelect.value);

    nodeListOfProductBox.forEach(item => {
        const productCategory = item.getAttribute('category');
        const productPrice = getPriceInt(item.querySelector('p').innerHTML);
        
        if((productCategory == selectedCategory || selectedCategory == 'all') && (productPrice <= selectedPrice || selectedPrice == 0)) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })
}

function productNotAvailable() {
    const arrayOfProductBox = [...nodeListOfProductBox];
    
    if(arrayOfProductBox.every(item => item.style.display == 'none')) {
        warningBox.style.display = 'flex';
    } else {
        warningBox.style.display = 'none';
    }
}

function validateForm(event) {
    event.preventDefault();

    if(inputEmail.value == '' || inputName.value == '') {
        alert('Поля заполнены неверно');
    } else if(!regexpEmail.test(inputEmail.value)) {
        alert('Некорректный email');
    } else {
        modal.style.display = "none";
        formOrder.submit();
        alert('Cпасибо за покупку!');
        clearCart();
    }
}

function clearCart () {
    productQuantityCart.innerHTML = productPriceCart.innerHTML = 'XXX';
    cart.length = 0;
}

document.addEventListener('change', function(e) {//validation of inputs
    if(e.target.className == 'qty__item') {
        if(e.target.value < 1)
            e.target.value = 1
    } else {
        return
    }
});

document.addEventListener('click', function(e) {//change price and quantity when user clicks 'add' button
    if(e.target.className == 'product-box__btn') {
        const currentPrice = e.target.parentElement.querySelector('p').innerHTML;
        const currentQuantity = parseInt(e.target.parentElement.querySelector('input').value);
        const currentProductName = e.target.parentElement.parentElement.querySelector('h3').innerHTML;

        if(cart.some(element => element.name == currentProductName) && cart.length) {//если товар уже есть в корзине
            cart.forEach((element,index) => {
                if(element.name == currentProductName) {
                    cart[index].quantity += currentQuantity; 
                    cart[index].price += getPriceInt(currentPrice) * (currentQuantity || 1); 
                }
            })
        } else {
            cart.push({
                name: currentProductName,
                quantity: currentQuantity || 1,
                productPrice: getPriceInt(currentPrice),
                price: getPriceInt(currentPrice) * (currentQuantity || 1)
            })
        }

        const productItem = {
            quantity: getSumOfFields(cart,'quantity'),
            price: getSumOfFields(cart, 'price')
        }
        renderTopCart(productItem);
        console.table(cart);
    }
});

buttonOrder.addEventListener('click', () => {//open the modal 
    modal.style.display = "block";
})

closeModal.addEventListener('click', () => {// clicks on <span> (x), close the modal
    modal.style.display = "none";
})

window.addEventListener('click', event => {// clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

buttonSend.addEventListener('click', validateForm);
categorySelect.addEventListener('change', sort);
categorySelect.addEventListener('change', productNotAvailable);
priceSelect.addEventListener('change', sort);
priceSelect.addEventListener('change', productNotAvailable);
