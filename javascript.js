var sidenav=document.querySelector(".side-nav")
    var closenav=document.querySelector(".side-bar-toggle")
    
    function showbar(){
        sidenav.style.left="0"
    }

    function closebar(){
        sidenav.style.left="-60%"
        
    }

    // function myFunction(imgs) {
    //     // Get the expanded image
    //     var expandImg = document.getElementById("expandedImg");
    //     // Get the image text
    //     var imgText = document.getElementById("imgtext");
    //     // Use the same src in the expanded image as the image being clicked on from the grid
    //     expandImg.src = imgs.src;
    //     // Use the value of the alt attribute of the clickable image as text inside the expanded image
    //     imgText.innerHTML = imgs.alt;
    //     // Show the container element (hidden with CSS)
    //     expandImg.parentElement.style.display = "block";
    //   }
      