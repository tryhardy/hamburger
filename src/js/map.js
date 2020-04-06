(function () {
    const myMap; 

    const init = () => {
        const myMap = new ymaps.Map("map", {
            controls: [],
            center: [30.315635, 59.938951],
            zoom: 7
        });

        const coords = [
          [59.980606, 30.347189],
          [59.945499, 30.267060],
          [59.937999, 30.377596]
        ];

        const myCollection = new ymaps.GeoObjectCollection({}, {
          iconLayout: 'default#image',
          iconImageHref: 'icons/logo.svg',
          iconImageSize: [30, 42],
          iconImageOffset: [-3, -42],
          draggable: false, 
        });
        
        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i]));
        }
        
        myMap.geoObjects.add(myCollection);
        myMap.behaviors.disable('scrollZoom');
        
    }
    ymaps.ready(init);
}());