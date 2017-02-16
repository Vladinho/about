import $ from 'jquery';

function textAreaAdjust(element) {
	element.style.height = '1px';
	element.style.height = element.scrollHeight + 'px';
}

$(() => {
	const $textarea = $('.js-about-input');

	$textarea.text($textarea.text().replace(/\s\s/g, '')); // фиг знает откуда они там берутся...
	$textarea.on('keyup', event => textAreaAdjust(event.target));
	setTimeout(() => textAreaAdjust($textarea.get(0)), 0);

});

window.textAreaAdjust = textAreaAdjust;

(function(){
    window.addEventListener("DOMContentLoaded", init, false);
    function init(){
        var elem = document.getElementById("controller"); 
        var scale = document.getElementById("scale"); 
        var xScale = 367;
        var level_0 = document.getElementById("level_0");
        var level_1 = document.getElementById("level_1");
        var level_2 = document.getElementById("level_2");
        var level_3 = document.getElementById("level_3");
        level_0.addEventListener('click', function(e){
            elem.style.transition = "left 0.2s linear"
            elem.style.left = "-7px"
        }); 
        level_1.addEventListener('click', function(e) {
            elem.style.transition = "left 0.2s linear"
            elem.style.left = "140px"
        }); 
        level_2.addEventListener('click', function(e) {
            elem.style.transition = "left 0.2s linear"
            elem.style.left = "365px"
        }); 
        level_3.addEventListener('click', function(e) {
            elem.style.transition = "left 0.2s linear"
            elem.style.left = "759px"
        }); 
        scale.addEventListener('click', function(e) {
            var xScale = e.clientX-367
            console.log(xScale)
            elem.style.transition = "left 0.2s linear"
            if(xScale<70)
            {elem.style.left = "-7px"}
            if (xScale<255 && xScale>70)
            {elem.style.left = "140px"}
            if(xScale<565 && xScale>255)
            {elem.style.left = "365px"}
            if(xScale<765 && xScale>565)
            {elem.style.left = "759px"}          
        });
    elem.addEventListener("mousedown", function (e) {
        drag(this, e);
        })   
    }
    function drag(elementToDrag, event) {
        // координаты мыши в начале перетаскивания.
        var startX = event.clientX;
        // начальные координаты элемента, который будет перемещаться.
        var origX = elementToDrag.offsetLeft;
        // разница между координатами мыши и координатами перетаскиваемого элемента.
        var deltaX = startX - origX;
        // Регистрация событий mouseup и mousemove
      
        scale.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);
        function moveHandler(e) {
            elementToDrag.style.transition = "none"
            if((e.clientX - deltaX)>0 && (e.clientX - deltaX)<765)
            {elementToDrag.style.left = (e.clientX - deltaX) + "px"};
        }
        function upHandler(e) {
            if((e.clientX - deltaX)<70)
            {elementToDrag.style.left = "-7px"}
            if((e.clientX - deltaX)<255 && (e.clientX - deltaX)>70)
            {elementToDrag.style.left = "140px"}
            if((e.clientX - deltaX)<565 && (e.clientX - deltaX)>255)
            {elementToDrag.style.left = "365px"}
            if((e.clientX - deltaX)<765 && (e.clientX - deltaX)>565)
            {elementToDrag.style.left = "759px"}    
            elementToDrag.style.transition = "left 0.08s linear"
            document.removeEventListener("mouseup", upHandler, true);
            scale.removeEventListener("mousemove", moveHandler, true);
        }
    }  
})()