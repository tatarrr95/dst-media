jQuery(document).ready(function($) {
    $(".first-slider").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true
    });
    $(".second-slider").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true
    });

    ymaps.ready(function() {
        var e = new ymaps.Map("Map", {
                center: [43.101423, 131.94487],
                zoom: 16
            }),
            i = new ymaps.control.TrafficControl;
        e.controls.add(i), e.behaviors.disable("scrollZoom"), e.controls.remove("zoomControl"), placemark = new ymaps.Placemark([43.101734, 131.948654], {
            iconContent: "",
            iconContentSize: [300, 100]
        }, {
            preset: "islands#blueCircleIcon"
        });
        var s = [43.101735, 131.949185],
            o = new ymaps.GeoObjectCollection({}, {
                iconLayout: "default#image",
                iconImageClipRect: [
                    [0, 0],
                    [33, 42]
                ],
                // iconImageHref: "img/map-marker1.png",
                iconImageSize: [33, 42],
                iconImageOffset: [-33, -42]
            });
        o.add(new ymaps.Placemark(s)), e.geoObjects.add(o)
    });
    
    $("body").on('click', '.v-modal-zvonok', function(event) {
        event.preventDefault();
        var inst = $("[data-remodal-id=modal-zvonok]").remodal();
        inst.open();
    });

    $("body").on('click', '.v-modal-rachet', function(event) {
        event.preventDefault();
        console.log("hello");
        var inst = $("[data-remodal-id=modal-rachet]").remodal();
        inst.open();
    });
});
