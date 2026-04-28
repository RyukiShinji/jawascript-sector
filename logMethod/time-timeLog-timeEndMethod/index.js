console.time("MyTimer");
for(let i = 0; i < addToCartButton.length; i++) {
    let button = addToCartButton[i];
    button.addEventListener('click', addToCartClicked)
}
console.timeEnd("MyTimer");
