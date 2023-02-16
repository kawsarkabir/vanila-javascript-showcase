var formSubmit = document.getElementById('product_form')
var allProducts = []
var totalSummary={
    netPrice:0,
    totalItems:0,
    discount:0,
    totalPrice:0
}

formSubmit.addEventListener('submit', function(event){
    event.preventDefault();

    var productName = document.getElementById('product_name').value;
    var productPrice = document.getElementById('product_price').value;
    var productPriceHide = document.getElementById('product_name');
    var productNameHide = document.getElementById('product_price');
    var product={
        name: productName,
        price:productPrice
    }
    allProducts[allProducts.length]=product;
    productPriceHide.value=""
    productNameHide.value=""
    displayProduct()
    displayProductSummary()
})



// added items 
function displayProduct(){
    var tableBody = document.getElementById('table_body')
    tableBody.innerHTML = null
    for(var i =0; i<allProducts.length; i++){
        var newProductRow=document.createElement('tr')
        var colum_1 = document.createElement('td')
        var colum_2 = document.createElement('td')
        var colum_3 = document.createElement('td')

        colum_1.innerText=i+1
        colum_2.innerText=allProducts[i].name
        colum_3.innerText=allProducts[i].price
        newProductRow.append(colum_1, colum_2, colum_3)
        tableBody.append(newProductRow)
         
    }
}

// product summary
function displayProductSummary(){
    var netPriceBox=document.getElementById("net_price")
    var totalItems=document.getElementById("total_items")
  
    totalSummary.netPrice = 0
    for(var i=0; i < allProducts.length; i++){
    
        totalSummary.netPrice=totalSummary.netPrice+parseInt(allProducts[i].price)
    }

    netPriceBox.innerText= totalSummary.netPrice
    totalItems.innerText=allProducts.length
}

// discount product 
var formDiscount = document.getElementById("discount_form")

formDiscount.addEventListener("submit",function (event) {
    event.preventDefault();
var totalPriceBox = document.getElementById("total_price")
var discount = document.getElementById("discount")
var discountPercentage = document.getElementById("product_discount").value
var discountPercentageHide = document.getElementById("product_discount");
discountPercentageHide.value=''


discountPercentage=parseInt(discountPercentage)
console.log(discountPercentage);
if(isNaN(discountPercentage)){
    alert("Discount")
}else{
    totalSummary.discount=totalSummary.netPrice*(discountPercentage/100)
    discount.innerText=totalSummary.discount
    totalSummary.totalPrice=totalSummary.netPrice-totalSummary.discount
    totalPriceBox.innerText=totalSummary.totalPrice
}
})

// payment successs 
var paymentBtn=document.querySelector(".payment_btn")
paymentBtn.addEventListener("click",function(){
    alert("Payment success")
})











