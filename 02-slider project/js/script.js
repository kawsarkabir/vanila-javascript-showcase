// img included here
var allImages = [
    '../img/slider-01.jpg',
    '../img/slider-02.jpg',
    '../img/slider-03.jpg'
];

var slider = document.querySelector('.sliders img');
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

// next button func
next.addEventListener('click', function(){
    var current = slider.getAttribute('src')
    var currentIndex = allImages.indexOf(current)
    if(currentIndex == allImages.length - 1){
        slider.src =allImages[0]
    }else{
        slider.src =allImages[currentIndex + 1]
    }
})

// previous button 
prev.addEventListener('click', function(){
    var current = slider.getAttribute('src')
    var currentIndex = allImages.indexOf(current)
    if(currentIndex == 0){
        slider.src =allImages[allImages.length - 1]
    }else{
        slider.src =allImages[currentIndex - 1]
    }
})

