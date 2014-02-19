(function($) {
    $.fn.sliderize = function(params) {
        // make this apply to all matched elements
        return this.filter('ul').each(function() {
            var that = this;
            var ctr = 0;
            var children = $(that).children();
            var slideSpeed = params.slideSpeed || 100;
            var maxWidth = params.maxWidth ? params.maxWidth + 'px' : '100%';
            var _id = $(that).attr('id');

            if(!_id) {
                _id = 'slider-' + (Math.floor(Math.random()*1000)+500);
                $(that).attr('id', _id);
            }

            // create wrapper and append this element
            $(that).parent().prepend([
                '<div class="slider-wrapper" id="slider-wrapper-',
                _id,
                '"></div>'
            ].join(''));
            $('#slider-wrapper-'+_id).append($(that).detach());
            $('#slider-wrapper-'+_id).css('max-width', maxWidth);

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

            $('#slider-wrapper-'+_id).append([
                '<button id="btn-prev-',
                _id,
                '" class="',
                'btn-slider-controls ',
                'btn-slider-control-'+_id,
                ' btn-slider-control-prev',
                '">',
                '<',
                '</button>'
            ].join(''));

            $('#slider-wrapper-'+_id).append([
                '<button id="btn-next-',
                _id,
                '" class="',
                'btn-slider-controls ',
                'btn-slider-control-'+_id,
                ' btn-slider-control-next',
                '">',
                '>',
                '</button>'
            ].join(''));

            $('#slider-wrapper-'+_id).hover(function() {
                console.log('Hovering:', _id);
                $('.btn-slider-control-'+_id).show();
            }, function() {
                console.log('Unhovering:', _id);
                $('.btn-slider-control-'+_id).hide();
            });
            
            $('#btn-prev-'+_id).click(function() {
                console.log('Clicked previous:', _id);
            });

            $('#btn-next-'+_id).click(function() {
                console.log('Clicked next:', _id);
            });
        });
    };
}(jQuery));
