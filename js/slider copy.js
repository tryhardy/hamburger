function Slider(selector, settings){
    this.target = document.querySelector(selector);
    var list = this.target.querySelector('ul');
    this.countSlides = list.children.length;
    this.currentIndexSlide = 0;

    if (settings) {
        if (settings.animate) {
            list.style.transitionTimingFunction = settings.animate;
        }

        if (settings.duration) {
            list.style.transitionDuration = settings.duration;
        }

        if (settings.autoplay) {
            setInterval( (e) => {
                this.right();
            }, settings.autoplay)
        }

        if (settings.keyControl === '1') {
            window.addEventListener('keydown', (e) => {
                if (e.keyCode == 39) {
                    //console.log(this.right);
                    this.right();
                }
                if (e.keyCode == 37) {
                    //console.log(this.left);
                    this.left();
                }
            });
        }

        if (settings.loop === '1') {

            if (this.currentIndexSlide > this.countSlides) {
                loop('right');
            }
        }
    }
    

    this.target.addEventListener('click', (e) => {
        var arrow = e.target.closest('a[data-vector]');
        if (arrow) {
            e.preventDefault();
            var vector = arrow.dataset.vector;
            //console.log(vector);
            this[vector]();
            loop(vector);
        } 
    });

    this.left = function(){
        if (this.currentIndexSlide > 0){
            this.currentIndexSlide--;
            translateSlider(this.currentIndexSlide); 
            
        }
                   
    };
    this.right = function(){
        if (this.currentIndexSlide < this.countSlides -1){
            this.currentIndexSlide++;
            translateSlider(this.currentIndexSlide);

        }
        
    };

    function translateSlider(index) {
        list.style.transform = `translateX(${-(index * 100)}%)`;
    }

    function loop(direction) {
        var children = list.children;
            console.log(children);

        if (direction === "right") {
            list.appendChild(list.firstElementChild);
            //this.countSlides+=1;
        } else {
            //list.insertBefore(list.lastElementChild, list.firstElementChild);
            list.style.transition = null;
            translateSlider(this.currentIndexSlide); 
            var TEST = list.insertBefore(cildren.length, children[0]);
            console.log(TEST);
        } 
    }
}

const sliderCarousel = new Slider('.slider__carousel', {
    animate: 'cubic-bezier(.17,.67,.62,.92)',
    duration: '.5s',
    keyControl: '1',
    loop: '1',
    //autoplay: '5000',
});

console.log(sliderCarousel);

