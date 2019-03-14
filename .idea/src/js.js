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

 var today = new Date ( );//today a date object

 var days = new Array ( );
 days[days.length] = "יום ראשון";//in index 0
 days[days.length] = "יום שני";//in index 1 becouse 0 place isnt empty
 days[days.length] = "יום שלישי";
 days[days.length] = "יום רביעי";
 days[days.length] = "יום חמישי";
 days[days.length] = "יום שישי";
 days[days.length] = "יום שבת";
 var day=today.getDay();
 var month=today.getMonth();
 var year=today.getFullYear();
 document.getElementById("date").innerHTML =document.write (days[day]  + day + "/" + month + "/" + year );


 /*jQuery(document).ready(function($){

 $('.black-button').on({
      'click': function(){
          $('#change-image').attr('src','styles/images/exit-button.png');
      }
  });


  });*/


