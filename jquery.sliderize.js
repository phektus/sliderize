(function($) {
    $.fn.sliderize = function(_params) {
        // make this apply to all matched elements
        return this.filter('ul').each(function() {
            var that = this;
            var ctr = 0;
            var children = $(that).children();
            var params = _params || {};
            var slideSpeed = params.slideSpeed || 100;
            var slideWidth = params.maxWidth + (params.padding|0);
            var _id = $(that).attr('id');
            var justSlid = false;
            var slide;

            // assign id
            if(!_id) {
                _id = 'slider-' + (Math.floor(Math.random()*1000)+500);
                $(that).attr('id', _id);
            }
            $(that).addClass('slider-list');
            $(that).addClass('slider-list-'+_id);

            // create wrapper and append this element
            $(that).parent().append([
                '<div class="slider-wrapper" id="slider-wrapper-',
                _id,
                '"></div>'
            ].join(''));
            $(that).wrap($('#slider-wrapper-'+_id));

            $('#slider-wrapper-'+_id).css('width', params.maxWidth + 'px');
            $('.slider-list-'+_id).css('width', params.maxWidth + 'px');
            $('.slider-list-'+_id+' li').css('width', params.maxWidth + 'px');

            // remove bullet and hide all
            children.css('list-style', 'none');
            children.not(':first').hide();

            // slider counter
            slide = function(advance) {
                currentChild = children.eq(ctr);
                ctr += (advance ? 1 : -1);

                if(advance && ctr >= children.length) ctr = 0;
                if(!advance && ctr === 0) ctr = children.length - 1;

                nextChild = children.eq(ctr);

                currentChild.css('display', 'block')
                    .css('top', 0)
                    .css('left', 0)
                    .css('position', 'absolute');                    
                currentChild.animate({
                    marginLeft: (advance ? '-=' : '+=') + 
                        slideWidth + 
                        'px'
                });

                nextChild.css('margin-left', (advance ? slideWidth : '-'+slideWidth) +'px')
                    .css('display', 'block')
                    .css('top', 0)
                    .css('left', 0)
                    .css('position', 'relative');
                nextChild.animate({
                    marginLeft: (advance ? '0' : ('+='+slideWidth+'px'))
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
            }, params.maxWait || 1000);

            // create controls
            $('#slider-wrapper-'+_id).append('<a href="#" id="btn-prev-'+_id+'"><</a>');
            $('#btn-prev-'+_id).addClass('btn-slider-controls');
            $('#btn-prev-'+_id).addClass('btn-slider-control-'+_id);
            $('#btn-prev-'+_id).addClass('btn-slider-control-prev');
            $('#btn-prev-'+_id).css('color', params.controlColor || '#FFF');

            $('#slider-wrapper-'+_id).append('<a href="#" id="btn-next-'+_id+'">></a>');
            $('#btn-next-'+_id).addClass('btn-slider-controls');
            $('#btn-next-'+_id).addClass('btn-slider-control-'+_id);
            $('#btn-next-'+_id).addClass('btn-slider-control-next');
            $('#btn-next-'+_id).css('color', params.controlColor || '#FFF');

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
