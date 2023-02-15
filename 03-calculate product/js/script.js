var formSubmit = document.getElementById('product_form')
var allProducts = []

function displayProduct(){
    var tableBody = document.getElementById('table_body')
    for(var i = 0; i< allProducts.length; i++){
        var newProductRow = document.createElement('tr')
        var colum_1 = document.createElement('td')
        var colum_2 = document.createElement('td')
        var colum_3 = document.createElement('td')

        colum_1.innerText = i+1
        colum_2.innerText = allProducts[i].name
        colum_2.innerText = allProducts[i].price
        newProductRow.append(colum_1, colum_2,colum_3)
        tableBody.append(newProductRow)
    }
 }



formSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    var productName = document.getElementById('product_name').value;
    var productPrice = document.getElementById('product_price').value;

    var product = {
        name:productName,
        price:productPrice
    }
    allProducts = [allProducts.length] = product;
    displayProduct();

})
