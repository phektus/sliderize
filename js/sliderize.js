$.fn.sliderize = function(params) {
    var that = this;
    var ctr = 0;
    var children = that.children();
    var slideSpeed = params.slideSpeed || 100;

    children.css('list-style', 'none');
    children.not(':first').hide();
    setInterval(function() {
        children.eq(ctr).fadeOut(slideSpeed, function() {
            ctr++;
            if(ctr === children.length-1) ctr = 0;
            children.eq(ctr).fadeIn(slideSpeed);
        });
    }, 2 * 1000);
};
