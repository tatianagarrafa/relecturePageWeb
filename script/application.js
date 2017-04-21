/* function auto executante 
menu burger
*/

(function(){
	window.addEventListener('load', function(){

			elmBurger = document.getElementById('burger')
			elmBurger.addEventListener('click', function(){
			console.log('click ' + elmBurger.id )
			elmMenu = document.getElementById('menuPrincipal')
			this.classList.toggle('unx')
			//this.classList.toggle('unx')
			elmMenu.classList.toggle('fermeture')
			//elmMenu.classList.toggle('fermeture')
			console.log('menuPrincipal ' + elmMenu.classList )

		})
	})

})();

//submenu
$(function(){
	$('nav ul li').hover(
		function () {
			//montrer le submenu
			$('ul', this).slideDown(150);
		}, 
		function () {
			//cacher le submenu
			$('ul', this).slideUp(150);			
		}
	);
});

//slider

function slide1(){
	document.getElementById('slide').src="images/photoslider_1.jpg";
	setTimeout("slide2()", 2000)
}
			 
function slide2(){
	document.getElementById('slide').src="images/photoslider_2.jpg";
	setTimeout("slide3()", 2000)
}
			 
function slide3(){
	document.getElementById('slide').src="images/photoslider_3.jpg";
	setTimeout("slide4()", 2000)
}
			
function slide4(){
	document.getElementById('slide').src="images/photoslider_5.jpg";
	setTimeout("slide1()", 2000)
}

//flip
(function(){
	window.addEventListener("load", function(){
		var d = document;
		var elemFlip = d.querySelector(".flip");
		elemFlip.addEventListener("click", function(){
			this.classList.toggle("flipClick")//this est l'élément qui reçois le click
		})
	})
	
}());
