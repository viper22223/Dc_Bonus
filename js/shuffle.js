var Shuffle = window.Shuffle;
var element = document.querySelector('.my-shuffle-container');
var sizer = element.querySelector('.my-sizer-element');

var shuffleInstance = new Shuffle(element, {
  itemSelector: '.picture-item',
  sizer: sizer // could also be a selector: '.my-sizer-element'
});
// shuffleInstance.filter('animal');
$("#all").on("click", function(){
   shuffleInstance.filter();
});
$("#btn-elect").on("click", function(){
   shuffleInstance.filter('elect');
});
$("#btn-beauty").on("click", function(){
   shuffleInstance.filter('beauty');
});
$("#btn-relax").on("click", function(){
   shuffleInstance.filter('relax');
});
$("#btn-goods").on("click", function(){
   shuffleInstance.filter('goods');
});
$("#btn-home").on("click", function(){
   shuffleInstance.filter('home');
});
$("#btn-eats").on("click", function(){
   shuffleInstance.filter('eats');
});
$("#btn-uslug").on("click", function(){
   shuffleInstance.filter('uslug');
});
$("#btn-azc").on("click", function(){
   shuffleInstance.filter('azc');
});