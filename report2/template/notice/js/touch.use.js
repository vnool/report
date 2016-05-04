var CONFIG = {
    PAGE_SWAP_TIME: 1.5
};


var TOUCH = {};
TOUCH.y = 0;
TOUCH.dragLength = 0;
$('body').bind("touchstart", function() {
    TOUCH.y = event.touches[0].pageY;
    TOUCH.dragLength = 0;
});
$('body').bind("touchmove", function() {
    var y = event.touches[0].pageY;
    TOUCH.dragLength = y - TOUCH.y;
    event.stopPropagation();
    event.preventDefault();
    $(this).trigger("draging", (TOUCH.dragLength));
});
$('body').bind("touchend", function() {
    $(this).trigger("dragend", TOUCH.dragLength);
});


$.fn.move = function(H, speed) {

    if (!speed) speed = 0;

    $(this).css("transform", "translate3d(0px," + H + ", 0px) scale(1) translateZ(0px)")
        .css("-webkit-transform", "translate3d(0px," + H + ", 0px) scale(1) translateZ(0px)")
        .css("transition-duration", speed + "s").css("-webkit-transition-duration", speed + "s");
};

(function() { //==============================
    var current = 0;
    var isLock = false;

    $('body').bind("draging", function(e, param) {
        if (isLock) return;

        var PageToShowId = 0;
        if (param < 0) {
            PageToShowId = current + 1;
            if (PageToShowId >= $('.PAGE').length) {
                PageToShowId = 0;
            }
        }
        if (param > 0) {
            PageToShowId = current - 1;
            if (PageToShowId < 0) {
                return;
            }
        }
        var ActPage = $('#pageid' + current);
        var BgPage = $('#pageid' + PageToShowId);

        ActPage.removeClass('current').addClass('active');
        BgPage.addClass('current');
        ActPage.move(param + 'px');

    });
    $('body').bind("dragend", function(e, param) {
        if (isLock) return;

        var moveout = '0%';
        var PageToShowId = 0;
        if (param < 0) {
            PageToShowId = current + 1;
            if (PageToShowId >= $('.PAGE').length) {
                PageToShowId = 0;
            }
            moveout = '-100%';
        }
        if (param > 0) {
            PageToShowId = current - 1;
            moveout = '100%';
        }
        if (PageToShowId < 0) {
            return;
        }
        var lastPage = $('#pageid' + current);
        var currentPage = $('#pageid' + PageToShowId);

        if (param < 50 && param > -50) {
            lastPage.move('0px', 1);
            currentPage.removeClass('current');
            lastPage.removeClass('active').addClass('current');;

            return;
        }

        current = PageToShowId;
        lastPage.move(moveout, CONFIG.PAGE_SWAP_TIME);

        isLock = true;
        var swapoutThen = function(){
            isLock = false;
                lastPage.removeClass('active');
                currentPage.addClass('current');
                lastPage.move('0px', 0);

                pageResume(PageToShowId);
        };
        setTimeout(swapoutThen, 800);
        // lastPage.one('webkitTransitionEnd', function() {
        //     //if (event.propertyName == 'transform') {
        //         swapoutThen();
        //    // }
        // });




        setTimeout(function() {

        }, CONFIG.PAGE_SWAP_TIME * 1000);

    });


})(); //===================================

$('.PAGE').swipeUp(function(e) {
    return;

    var This = $(this);

    var myid = parseInt(This.attr('myid'));
    var nextId = (myid + 1);
    if (nextId >= pageMax) {
        $(".PAGE").removeClass('swapUp swapDown');
        $('#pageid' + 0).addClass('swapDown');
        nextId = 0;
    }
    var Next = $('#pageid' + nextId);
    This.removeClass('swapDown').addClass('active');
    Next.addClass('current');
    This.addClass('active swapUp');

    setTimeout(function() {
        This.removeClass('swapUp active');

        pageResume(nextId);
    }, 1500);



});
$('.PAGE').swipeDown(function(e) {
    return;

    var This = $(this);
    var myid = $(this).attr('myid');
    if (myid < 0) return;
    var upId = (myid - 1);
    $('#pageid' + upId).removeClass('swapUp').addClass('swapDown');


    $('#pageid' + upId).addClass('active');
    setTimeout(function() {
        pageResume(upId);
        $('#pageid' + upId).removeClass('active').addClass('current');
        This.removeClass('current');
    }, 1000);

});
$('.PAGE').tap(function() {

});
$('.PAGE').swipeLeft(function() {

});
$('.PAGE').swipeRight(function() {

});

$(function() {
    $(".PAGE").eq(0).addClass('current');
})