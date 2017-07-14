if(window.innerHeight > 650){
        $('.shapka').vide({
            mp4: "../video/video.mp4",
            webm: "../video/video.webm",
            ogv: "../video/video.ogv",
            poster: "../video/video.jpg"
        }, {
            muted: true,
            loop: true,
            autoplay: true,
            position: '50% 50%', // Similar to the CSS `background-position` property.
            posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
            resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
            bgColor: 'transparent' // Allow custom background-color for Vide div,
        });
        $('.shapka').css({
            background:" -moz-linear-gradient(top, rgba(0,0,0,0.65) 25%, rgba(0,0,0,0) 100%)",
            background: "-webkit-linear-gradient(top, rgba(0,0,0,0.65) 25%,rgba(0,0,0,0) 100%)",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 25%,rgba(0,0,0,0) 100%)",
            filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#a6000000', endColorstr='#00000000',GradientType=0 )"
        });
        console.log(">650");
      }
      else{
        $('.shapka').css({
            background: "url('../img/shapka.jpg') no-repeat",
            "background-size": 'cover'
        });
        console.log("<650")
      }

jQuery(document).ready(function($) {
    // Слайдеры
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

    // Яндекс-карты
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


        // Маски
        $('#rachet-telephone').mask('+ 7 (000) 000-00-00');
        $('#zvonok-telephone').mask('+ 7 (000) 000-00-00');
        $('#telephone').mask('+ 7 (000) 000-00-00');
    });


    // модальные окна
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

    console.log(window.innerHeight);
});


// $(window).load(function() {
//       if(window.innerHeight > 650){
//         $('.shapka').vide({
//             mp4: video/video.mp4,
//             webm: video/video.mp4,
//             ogv: pvideo/video.mp4
//         }, {
//             muted: true,
//             loop: true,
//             autoplay: true,
//             position: '50% 50%', // Similar to the CSS `background-position` property.
//             posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
//             resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
//             bgColor: 'transparent' // Allow custom background-color for Vide div,
//         });
//         console.log(">650");
//       }
//       else{
//         $('.shapka').css({
//             // background: "url('../img/shapka.jpg') no-repeat",
//             // background-size: 'cover'
//         });
//         console.log("<650")
//       }
// });


// Функции отправки
// function sendMessageZvonok() {
//     $.ajax({
//         type: "POST",
//         url: "send.php",
//         data: $("#zvonok_form").serialize(),
//         success: function() {
//             window.location = "http://dstmedia.tmweb.ru/success.html"
//         }
//     })
// }

// function sendMessageRachet() {
//     $.ajax({
//         type: "POST",
//         url: "send.php",
//         data: $("#rachet_form").serialize(),
//         success: function() {
//             window.location = "http://dstmedia.tmweb.ru/success.html"
//         }
//     })
// }

// function sendMessageIndex() {
//     $.ajax({
//         type: "POST",
//         url: "send.php",
//         data: $("#index_form").serialize(),
//         success: function() {
//             window.location = "http://dstmedia.tmweb.ru/success.html"
//         }
//     })
// }
