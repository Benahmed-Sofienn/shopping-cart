let favs = Array.from(document.getElementsByClassName("fa-heart"))
let remove = Array.from(document.querySelectorAll(".fa-trash-alt"))
let plusBtns = Array.from(document.querySelectorAll(".fa-plus-square"))
let minusBtns = Array.from(document.querySelectorAll(".fa-minus-square"))
let quantities = Array.from(document.querySelectorAll(".qute"))
let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
let shippingPrice = Array.from(document.querySelectorAll(".text-muted"))
let subtotalPrice = document.querySelector(".subtotal-price")
let totalPrice = document.querySelector("#totalprice")
let Options = Array.from(document.querySelectorAll(".Option"))



//like button
for (let fav of favs) {
    fav.addEventListener("click", function () {
        fav.style.color === 'red' ? fav.style.color = '#212529' : fav.style.color = 'red'
    })
}

// trash button
for (let i in remove) {
    remove[i].addEventListener("click", function () {
        remove[i].parentElement.parentElement.parentElement.remove()
        subtotal()
        total()
    })
}

// add button
for (let plusBtn of plusBtns) {
    plusBtn.addEventListener("click", function () {
        plusBtn.nextElementSibling.innerHTML++;
        color()
        subtotal()
        total()
    })   
}

// minus button
for (let minusBtn of minusBtns) {
    minusBtn.addEventListener("click", function () {
        minusBtn.previousElementSibling.innerHTML > 1 ?
            minusBtn.previousElementSibling.innerHTML-- : null;
            color()
        subtotal()
        total()
    })
}

//minus button color
function color(){
for (let minusBtn of minusBtns) {
    minusBtn.previousElementSibling.innerHTML==1?minusBtn.style.color='#70726e':minusBtn.style.color='#bb0b0b'
}
}

//subtotal
function subtotal() {
    let quantities = Array.from(document.querySelectorAll(".qute"))
    let unitPrices = Array.from(document.querySelectorAll(".unit-price"))
    let subtotalPrice = document.querySelector(".subtotal-price")
    let s = 0;
    for (let i in quantities) {
        s = s + unitPrices[i].innerHTML.replace("DT", "") * quantities[i].innerHTML
    }
    subtotalPrice.innerHTML = s
}

//total

// for(i=0;i<Options.length;i++){
   
//     Options[i].addEventListener("onchange",function ()  {
//    total()
//     })
// }
function total(){
    let mySelect = document.getElementById("mySelect")
    let totalPrice = document.querySelector("#totalpirce")
    let y=0
    let t=parseFloat(subtotalPrice.innerHTML.replace('DT',''))
        if(mySelect.value =='Standard-Delivery- 7 DT'){
        y=7
        }
        else{
            y=0
        }
        totalPrice.innerHTML= t+y+'DT'     
}
