function Slider(selector){
    this.target = document.querySelector(selector);
    var list = this.target.querySelector('ul');
    this.countSlides = list.children.length;
    this.currentIndexSlide = 0;

    this.target.addEventListener('click', (e) => {
        var arrow = e.target.closest('a[data-vector]');
        if (arrow) {
            e.preventDefault();
            var vector = arrow.dataset.vector;
           
            this[vector]();
        } 
    });

    this.left = function(){
        this.currentIndexSlide--;
        translateSlider(this.currentIndexSlide);
    };
    this.right = function(){
        this.currentIndexSlide++;
        translateSlider(this.currentIndexSlide);
    };

    function translateSlider(index) {
        list.style.transform = `translateX(${-(this.index * 100)}%)`;
    }
}

const sliderCarousel = new Slider('.slider__carousel');

console.log(sliderCarousel);

// ВТОРОЙ ЭКЗЕМПЛЯР КОНСТРУКТОРА
//const slider2 = new Slider('slider 2');
//console.log(slider2);