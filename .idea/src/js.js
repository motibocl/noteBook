 /*$(function() {
   $('.menulink').click(function(){
     $("#bg").attr('src',"styles/images/exit-button.png");
   });
 });
*/

function changeImage() {
            if (document.getElementById("enterBtn").src == "http://localhost:63342/noteBook/.idea/src/styles/images/enter-button.png")
            {

                document.getElementById("enterBtn").src = "styles/images/exit-button.png";

            } else if (document.getElementById("enterBtn").src == "http://localhost:63342/noteBook/.idea/src/styles/images/exit-button.png")
                                  {
                                      document.getElementById("enterBtn").src = "styles/images/enter-button.png";
                                  }
        }




/*jQuery(document).ready(function($){

$('.black-button').on({
     'click': function(){
         $('#change-image').attr('src','styles/images/exit-button.png');
     }
 });


 });*/


