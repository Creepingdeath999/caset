 const controls = document.getElementById("controls");
const wheels = document.querySelectorAll(".wrapper div");

 /*controls*/

controls.addEventListener("click", e => {
  let ctrl = e.target;
  if (ctrl.classList[0] === "play") {
      
    wheels.forEach(e=>{
        
        e.classList.toggle('spin');
    })};

});

$(document).ready(function() {
    var widget = SC.Widget(document.getElementById('soundcloud_widget'));
    widget.coock
    widget.bind(SC.Widget.Events.READY, function() {
    });
    
    $('.play').click(function() {widget.toggle(); });

    $('.next').click(function() {widget.next();  });

    $('.prev').click(function() {widget.prev();  });
   
  });

let title;
  (function(){
    var widgetIframe = document.getElementById('soundcloud_widget'),
    widget       = SC.Widget(widgetIframe);

    widget.bind(SC.Widget.Events.READY, function(){
    widget.bind(SC.Widget.Events.PLAY, function(){
    // get information about currently playing sound
   widget.getCurrentSound(function(currentSound){
    title=currentSound.title;
    document.getElementById('title').textContent=title;
     });
     });
    });
    }());
  

