$(document).ready(function () {
    $("#main").onepage_scroll({
        sectionContainer: ".section",     // sectionContainer accepts any kind of selector in case you don't want to use section
        easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
                                         // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
        pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
        updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
        beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
        afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
        loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
        keyboard: true,                  // You can activate the keyboard controls
        responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
        // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
        // the browser's width is less than 600, the fallback will kick in.
        direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
    });

    // var $videoSrc;
    // $('.bxh_icon').click(function() {
    //     $videoSrc = $(this).data( "data-target" );
    // });
    // // when the modal is opened autoplay it
    // $('#modal_trailer').on('shown.bs.modal', function (e) {
    //
    // // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    //     $("#modal_trailer").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
    // })

    function stopVideo(player) {
        let vidSrc = player.prop('src');
        player.prop('src', vidSrc);
    };

    $('#hero_gold__tab button').on('shown.bs.tab', function(e){
        // console.log(e.target, e.relatedTarget);
        var tabId = e.relatedTarget.attributes['data-bs-target'].value;
        var tabIframe = $(tabId).find('iframe');
        stopVideo(tabIframe);
    });

    $('#modal_trailer').on('hide.bs.modal', function(e){
        //var tabId = e.relatedTarget.attributes['data-bs-target'].value;
        var tabIframe = $(this).find('iframe');
        stopVideo(tabIframe);
    });

})
