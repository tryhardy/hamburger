$(document).ready(function() {

  var debounce = function(func, time){
    let timeout;

    return function() {
      const context = this;
      const args = arguments;

      clearTimeout(timeout);
      setTimeout (() => {
        func.apply(context. args);
      }, time);
      
    }
  }

  var coloringDots = function(index) {
    $('.pagination__list')
      .find('.pagination__item')
      .eq(index)
      .addClass('pagination__item--active')
      .siblings()
      .removeClass('pagination__item--active')
  }

  var generateDots = function (){
    $(".section").each(function (){
      var dot = $('<li>', {
        attr: {
          class : 'pagination__item',
        },
        html : '<div class="pagination__circle"></div>'
      })

      $('.pagination__list').append(dot);
      
      $('.pagination__item:first-child').addClass('pagination__item--active');
      
    });
  }

  generateDots();

  var moveSlide = function(container, slideNumber) {

      var items = container.find(".section"),
          activeSlide = items.filter(".section--active"),
          reqItem = items.eq(slideNumber),
          reqIndex = reqItem.index(),
          duration = 800;

    
      if(reqItem.length) {
        items.stop(true, false).animate({
          'top': -reqIndex * 100 + "vh"
        }, duration, function(){
          activeSlide.removeClass("section--active");
          reqItem.addClass("section--active");
          coloringDots(slideNumber);
        });
      }
  }
  

  $("body").on('wheel', function(e) {

    var $this = $(this),
      container = $('.maincontent'),
      items = $(".section"),
      activeItem = items.filter(".section--active"),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev(),
      existedItem, edgeItem, regItem;


    if (e.originalEvent.wheelDelta >= 0) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    } else {
      existedItem = activeItem.next();
      edgeItem = items.first();
    }

    regItem = existedItem.length ? existedItem.index() :  edgeItem.index();

    moveSlide(container, regItem);
 
  });

  $(window).on('keydown', function(e) {
    var $this = $(this),
    container = $('.maincontent'),
    items = $(".section"),
    activeItem = items.filter(".section--active"),
    nextItem = activeItem.next(),
    prevItem = activeItem.prev(),
    existedItem, edgeItem, regItem;

    if (e.keyCode == 38) {
      existedItem = activeItem.prev();
      edgeItem = items.last();

    } else if (e.keyCode == 40) {
      existedItem = activeItem.next();
      edgeItem = items.first();
    }

    regItem = existedItem.length ? existedItem.index() :  edgeItem.index();

    moveSlide(container, regItem);
  });


  $('body').on('click', '.pagination__item', function (){
    var $this = $(this),
        body = $('body');
        container = body.find('.maincontent'),
        index = $this.index();

        moveSlide(container, index);
        coloringDots(index);
  });
 
  $('body').on('click', '.primary-menu__item', function (e){
    e.preventDefault();
    var $this = $(this),
        body = $('body');
        container = body.find('.maincontent'),
        index = $this.index();

        moveSlide(container, index);
        coloringDots(index);
  });
  
});
