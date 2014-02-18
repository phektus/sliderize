$.fn.sliderize = function() {
    var that = this;
    var ctr = 0;
    var children = that.children();   
    var clear = function() {
        $.map(children, function(child) {
            $(child).css('list-style', 'none');
            $(child).hide();
        });
    };

    
    clear();
    $(children[ctr]).show();
    setInterval(function() {
        clear();
        if(ctr>0) $(children[ctr-1]).hide();
        $(children[ctr]).show();
        ctr++;
        if(ctr === children.length-1) ctr = 0;
    }, 2000);
};
