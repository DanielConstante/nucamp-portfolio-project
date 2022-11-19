$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});


   //loading spinner 
   var myVar;

   function myFunction() {
       myVar = setTimeout(showPage, 2000);
   }

   function showPage() {
       document.getElementById("loader").style.display = "none";
       document.getElementById("myDiv").style.display = "block";
       document.getElementById("title-container").style.display = "none";
       document.getElementById("title").style.display = "none";
    }

