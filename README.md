Sliderize
=========

Sliderize is a jquery plugin for creating simplistic sliders.

Usage:
-------
  - Add javascript
        
        <script src="js/jquery.min.js"></script>
        <script src="js/jquery.sliderize.min.js"></script>

  - Add css (on head)

        <link rel="stylesheet" href="css/jquery.sliderize.min.css" />

  - Initialize

        $('ul#mySlide').sliderize({
            slideSpeed: 200,
            maxWidth: 300,
            maxWait: 1500
        });

Testing:
---------
Check out the samples/ folder

Options:
-------
  - slideSpeed - how fast the image changes
  - maxWidth - maximum width of each slide
  - maxWait - how long each slide interval is
  - controlColor - color for the controls (eg., #FFFFFF)
  - padding - distance between images 

Todo:
-------
  - Tests
  - Add pagination

License
----

MIT (except for images in the samples/ directory)

By [Arbie Samong](http://arbie.org/)
