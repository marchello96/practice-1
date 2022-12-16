window.addEventListener('resize', function(event) {
	adaptive_function();
});

let scrollArr = [];

window.addEventListener('scroll', function(event){
	var topScroll = -window.pageYOffset;
	scrollArr.push(topScroll);
	if((scrollArr.length)>2){
		scrollArr.shift();
	}
	console.log(scrollArr);
})

elemBurger = document.querySelector('.burger__item');
elemMenu = document.querySelector('.header-menu--l');

function resize_header(w){
	movableClass1 = document.querySelector('.header-menu--r');
	movableClass2 = document.querySelector('.header-top__lang');
	receiverClass = document.querySelector('.header-menu--l');
	parentMovableClass1 = document.querySelector('.header-bottom');
	parentMovableClass2 = document.querySelector('.header-top');
	if(w<752){
		receiverClass.append(movableClass1);
		receiverClass.prepend(movableClass2);
	} else {
		parentMovableClass1.append(movableClass1);
		parentMovableClass2.prepend(movableClass2);
		if(elemMenu.classList.contains('active')){
			elemMenu.classList.remove('active');
			elemBurger.classList.remove('active__burger');
		}
	}
};
function adaptive_function(){
	var w = window.outerWidth;
	resize_header(w);
};


elemBurger.addEventListener('click', function(event){
	elemMenu.classList.toggle('active');
	elemBurger.classList.toggle('active__burger');
	if (elemMenu.classList.contains('active')){
		document.body.style.overflow = 'hidden';
	}else{
		document.body.style.overflow = '';
	};
});
