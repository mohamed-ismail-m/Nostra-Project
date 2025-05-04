//Selecting Side Navbar, MenuIcon

var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav =document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

//Product Search Functionality

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enterdValue =event.target.value.toUpperCase()

    for(count=0;count<productlist.length; count=count+1){
         var productname =productlist[count].querySelector("p").textContent

         if(productname.toUpperCase().indexOf(enterdValue)<0)
         {
            productlist[count].style.display="none"
         }
         else{
            productlist[count].style.display="block"
         }
    }
})
//Checkbox Functionality

// Select all the checkboxes
const checkboxes = document.querySelectorAll('#checkbox input[type=checkbox]');

// Add change event listener
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filterProducts);
});

// Filter function
function filterProducts() {
  // Get selected colors
  const selectedColors = Array.from(document.querySelectorAll('input[name=color]:checked')).map(cb => cb.value.toLowerCase());
  
  // Get selected types
  const selectedTypes = Array.from(document.querySelectorAll('input[name=type]:checked')).map(cb => cb.value.toLowerCase());

  // Get all products
  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const productColor = product.dataset.color.toLowerCase();
    const productType = product.dataset.type.toLowerCase();

    // Check if product matches selected filters
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(productColor);
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(productType);

    // Show/hide product
    if (colorMatch && typeMatch) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

  const filters = document.querySelectorAll('.filter');
  const products = document.querySelectorAll('.product');

  filters.forEach(filter => {
    filter.addEventListener('change', () => {
      const selectedColors = Array.from(document.querySelectorAll('.filter[data-filter-type="color"]:checked')).map(cb => cb.value);
      const selectedTypes = Array.from(document.querySelectorAll('.filter[data-filter-type="type"]:checked')).map(cb => cb.value);

      products.forEach(product => {
        const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.dataset.color);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.dataset.type);

        product.style.display =
        (colorMatch && typeMatch) ?
        "inline-block" : "none";
      });
    });
  });
