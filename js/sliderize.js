(function($) {
    $.fn.sliderize = function(params) {
        // make this apply to all matched elements
        return this.filter('ul').each(function() {
            var that = this;
            var ctr = 0;
            var children = $(that).children();
            var slideSpeed = params.slideSpeed || 100;

            // remove bullet and hide all
            children.css('list-style', 'none');
            children.not(':first').hide();

            // slider counter
            setInterval(function() {
                // fade out current 
                children.eq(ctr).fadeOut(slideSpeed, function() {
                    ctr++;
                    if(ctr === children.length) ctr = 0;
                    // show next
                    children.eq(ctr).fadeIn(slideSpeed);
                });
            }, 2 * 1000);
        });
    };
}(jQuery));
