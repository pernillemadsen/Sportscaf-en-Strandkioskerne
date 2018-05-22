//Indsæt nyheder her.
//$("#newswrap > #newsbar").append('<li> <span> •  DATO HER: </span><a target="_blank" href=" LINK HER "> TITEL HER</a> </li>');
$("#newswrap > #newsbar").append('<li> <span> •  03/06/18 </span><a target="_blank" href=" http://www.lokalbilletten.dk "> Svømmestævne</a> </li>');
$("#newswrap > #newsbar").append('<li> <span> •  13/07/18 </span><a target="_blank" href=" http://www.lokalbilletten.dk "> Badminton</a> </li>');
$("#newswrap > #newsbar").append('<li> <span> •  25/08/18 </span><a target="_blank" href=" http://www.lokalbilletten.dk "> Bordtennis </a> </li>');


//http://www.gcmingati.net/wordpress/wp-content/lab/jquery/newsticker/jq-liscroll/scrollanimate.html
/*jQuery expansion */
jQuery.fn.liScroll = function (settings) {
    settings = jQuery.extend({
        travelocity: 0.07
    }, settings);
    return this.each(function () {
        var $strip = jQuery(this);
        $strip.addClass("newsticker")
        var stripWidth = 1;
        $strip.find("li").each(function (i) {
            stripWidth += jQuery(this, i).outerWidth(true);
        });
        var $mask = $strip.wrap("<div class='mask'></div>");
        var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
        var containerWidth = $strip.parent().parent().width(); //a.k.a. 'mask' width 	
        $strip.width(stripWidth);
        var totalTravel = stripWidth + containerWidth;
        var defTiming = totalTravel / settings.travelocity;

        function scrollnews(spazio, tempo) {
            $strip.animate({
                left: '-=' + spazio
            }, tempo, "linear", function () {
                $strip.css("left", containerWidth);
                scrollnews(totalTravel, defTiming);
            });
        }
        scrollnews(totalTravel, defTiming);
        $strip.hover(function () {
                jQuery(this).stop();
            },
            function () {
                var offset = jQuery(this).offset();
                var residualSpace = offset.left + stripWidth;
                var residualTime = residualSpace / settings.travelocity;
                scrollnews(residualSpace, residualTime);
            });
    });
};

/*scroll newsbar function*/
$(function () {
    $("ul#newsbar").liScroll({
        travelocity: 0.05 //speed
    });
});


$("img.logo").click(function () {
    href = "../sportcafe_main/master.html" //find forsiden 
});
