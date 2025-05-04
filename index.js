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

function closeBanner() {
    document.getElementById("promo-banner").style.display ="none";
}


  const images = [document.getElementById("img1"), document.getElementById("img2")];
  let current = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.classList.remove("hidden");
        img.classList.add("block");
      } else {
        img.classList.remove("block");
        img.classList.add("hidden");
      }
    });
  }

  function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
  }

  function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
  }
