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
        } else {
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

const buttonOrder = document.querySelector('#btn-order');
const modal = document.querySelector('#modal-order');
const closeModal = document.getElementsByClassName('close')[0];// Get the <span> element that closes the modal

// When the user clicks the button, open the modal 
buttonOrder.addEventListener('click', () => {
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
})

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})

const buttonSend = document.querySelector('#button-send'); 
const formOrder = document.querySelector('#form-order');

function validateForm(event) {
    event.preventDefault();
    const inputEmail = document.querySelector('#email');
    const inputName = document.querySelector('#name');

    const regexpEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if(inputEmail.value == '' || inputName.value == '') {
        alert('Поля заполнены неверно');
        console.log('error');
    } else if(regexpEmail.test(inputEmail.value) == false) {
        alert('Некорректный email');
    } else {
        modal.style.display = "none";
        formOrder.submit();
        alert('Cпасибо за покупку!');
        clearPrice();
    }
}

function clearPrice () {
    productQuantityCart.innerHTML = productPriceCart.innerHTML = 'XXX';
    cart.price = cart.quantity = 0;
}

buttonSend.addEventListener('click', validateForm);

