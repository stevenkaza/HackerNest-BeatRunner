var varCounter = 0;
var beatbox_add = function(){
     // Stops after 10 counts of the function
     if(varCounter <= 2) {
     	  document.write("A");
          varCounter++;

     } else {
     	  // NEED TO BRIEFLY STOP TIMER TO INSERT BEAT AND THEN RESTART
         document.write("B");
         varCounter=0;
         clearInterval(varName);
         // recall the function
        // beatbox_add();
     }

};

$(document).ready(function(){
     setInterval(beatbox_add, 100);
});
