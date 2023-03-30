
var mouseXY = {};
    $( document ).on( "mousemove", function( event ) {
      mouseXY.X = event.pageX; 
      mouseXY.Y = event.pageY;
    });
    var itank = $("#tank");
    var prevXY = {X: null, Y: null};
    var tankInterval = setInterval(function()
    {
    
      
      if(prevXY.Y != mouseXY.Y || prevXY.X != mouseXY.X && (prevXY.Y != null || prevXY.X != null)) {
      
      var tankXY = itank.position();
      var diffX = tankXY.left - mouseXY.X;
      var diffY = tankXY.top - mouseXY.Y;
      var tan = diffY / diffX;
     
      var atan = Math.atan(tan)* 180 / Math.PI;;
       if(diffY > 0 && diffX > 0) {
      
      	atan += 180; 
      }
      else if(diffY < 0 && diffX > 0) {
      
      	atan -= 180;
      }
      
      prevXY.X = mouseXY.X;
      prevXY.Y = mouseXY.Y;
      itank.css({transform: "rotate(" + atan + "deg)"});
    }
    }, 10);

    $(".move-area").mousemove(function(event) {
        var eye = $(".eye");
        console.log('eye', eye)
        var x = (eye.offset().left) + (eye.width() / 2);
        var y = (eye.offset().top) + (eye.height() / 2);
        var rad = Math.atan2(event.pageX - x, event.pageY - y);
        var rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)'
        });
      });