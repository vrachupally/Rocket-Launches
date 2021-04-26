var minrange = 2006 ;
var maxrange = 2020 ;
var min = document.getElementById("min"); 
var max = document.getElementById("max"); 
var draggables = Draggable.create(".knob", {type:"x",
bounds:"#container",
onDrag :update
});
function update (){
  var x1 = draggables[0].x;
  var x2 = draggables[1].x;
  if ( x1 < x2 ){
    TweenLite.set('.range',{x:x1, width:x2-x1});
    min.innerHTML = 'Min: '+ x1;
    max.innerHTML = 'Max: '+ x2;
  } else {
    TweenLite.set('.range',{x:x2, width:x1-x2});
    min.innerHTML = 'Min: '+ x2;
    max.innerHTML = 'Max: '+ x1;
  };
};
function updateSlider(){
    TweenLite.set('.range',{x:minrange, width:maxrange-minrange})
    TweenLite.set(draggables[0].target, {x:minrange,onUpdate:draggables[0].update,onUpdateScope:draggables[0]});
    TweenLite.set(draggables[1].target, {x:maxrange,onUpdate:draggables[1].update,onUpdateScope:draggables[1]});
    min.innerHTML = 'Min: '+ minrange;
    max.innerHTML = 'Max: '+ maxrange;
}
updateSlider();