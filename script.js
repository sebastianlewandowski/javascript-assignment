/* GLOBAL VARIABLES */
var listOfProducts;

var clicks;
var clicks=0;
var i=1;


fetch("./products.json")
.then(function(response) {
    return response.json();
})
.then(function(products) {
    listOfProducts = products;
    createUIFromLoadedProducts();
            /* loop begins */
    listOfProducts.forEach(function(product) 
    {
            /* placing JSON file */
        var main = document.querySelector("#main"); 

            /* creating divs to elements in the loop */
        var productDiv = document.createElement("div"); 
            /* creating id */
        productDiv.setAttribute("id", "div" + i); 
       
    
      var title = document.createElement("h1");
        title.innerText = product.title;            
        productDiv.appendChild(title);

       var description = document.createElement("h3");
        description.innerText = product.description;
        productDiv.appendChild(description);
    
      var getproductimage = document.createElement("img");
        getproductimage.src ="assets/" + product.image;
        productDiv.appendChild(getproductimage);
    

        
      var price = document.createElement("h4");
        price.innerText = product.price + " kr";
        productDiv.appendChild(price);
    
      var btn = document.createElement("BUTTON");
        btn.innerHTML = '<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i> Lägg till i kundkorgen';
        productDiv.appendChild(btn);
    
      main.appendChild(productDiv);
        var kundvagn = document.querySelector("#count");
    
      btn.onclick = function() {
        clicks += 1;
        kundvagn.innerHTML = clicks;
        alert( product.title + " Ligger nu i kundvagnen");
        } 
    i++;
    });
   



function createUIFromLoadedProducts() {
  

}


})
