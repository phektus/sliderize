(function($) {
    $.fn.sliderize = function(_params) {
        // make this apply to all matched elements
        return this.filter('ul').each(function() {
            var that = this;
            var ctr = 0;
            var children = $(that).children();
            var params = _params || {};
            var slideSpeed = params.slideSpeed || 100;
            var maxWidth = params.maxWidth ? params.maxWidth + 'px' : '100%';
            var _id = $(that).attr('id');
            var justSlid = false;
            var slide;

            // assign id
            if(!_id) {
                _id = 'slider-' + (Math.floor(Math.random()*1000)+500);
                $(that).attr('id', _id);
            }
            $(that).addClass('slider-list');

            // create wrapper and append this element
            $(that).parent().append([
                '<div class="slider-wrapper" id="slider-wrapper-',
                _id,
                '"></div>'
            ].join(''));
            $('#slider-wrapper-'+_id).css('max-width', maxWidth);
            $(that).wrap($('#slider-wrapper-'+_id));

            // remove bullet and hide all
            children.css('list-style', 'none');
            children.not(':first').hide();

            // slider counter
            slide = function(advance) {
                // fade out current         
                children.eq(ctr).fadeOut(slideSpeed, function() {
                    ctr += advance ? 1 : -1;
                    if(advance && ctr === children.length) ctr = 0;
                    else if(!advance && ctr === 0) ctr = children.length;
                    // show next
                    children.eq(ctr).fadeIn(slideSpeed);
                });
            };
            setInterval(function() {
                // skip slide if controls were just pressed
                if(justSlid === true) {
                    justSlid = false;
                    return;
                }
                // perform slide
                slide.call(that, true);
            }, params.maxWait || 2000);

            // create controls
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

            // hover
            $('#slider-wrapper-'+_id).hover(function() {
                $('.btn-slider-control-'+_id).show();
            }, function() {
                $('.btn-slider-control-'+_id).hide();
            });
            
            // control actions
            $('#btn-prev-'+_id).click(function() {
                justSlid = true;
                slide(false);
            });
            $('#btn-next-'+_id).click(function() {
                justSlid = true;
                slide(true);
            });
        });
    };
}(jQuery));
