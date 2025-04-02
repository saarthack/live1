var box = document.querySelector('#box')

box.addEventListener('click',function(){
    console.log('clicked on box');
})
box.addEventListener('mouseenter',function(){
    console.log('Mouse Entered on box');
})
box.addEventListener('mouseleave',function(){
    console.log('Mouse Left from box');
})
box.addEventListener('mousemove',function(dets){
    console.log('MouseMoving on box',dets);
})
document.addEventListener('keydown',function(dets){
    console.log('Key down',dets);
})
document.addEventListener('keyup',function(dets){
    console.log('Key Up',dets);
})
document.addEventListener('wheel',function(dets){
    console.log('Wheel moving',dets);
})
document.addEventListener('scroll',function(dets){
    console.log('Scrolling...',dets);
})