/* Inspired by Stephen Fairbanks - http://codepen.io/thathurtabit/pen/ymECf */

// on page load...
    moveProgressBar();
    // on browser resize...
    $(window).resize(function() {
        moveProgressBar();
    });

    // SIGNATURE PROGRESS
    function moveProgressBar() {
      console.log("moveProgressBar");
        var getPercent = ($('.progress-container').data('progress-percent') / 100);
        var getProgressWrapWidth = $('.progress-container').width();
        var progressTotal = getPercent * getProgressWrapWidth;
        var animationLength = 5000;
        
        // on page load, animate percentage bar to data percentage length
        // .stop() used to prevent animation queueing
       $('.progress-bar').stop().animate({left: progressTotal}, {progress: function(a, p, c ) {$('.progress-value').html(Math.round( 100 * p ) + "%");},duration:animationLength});
    }
	