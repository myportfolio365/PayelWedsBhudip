!function(a){"use strict";a(window).on("load",function(){a(".loader-inner").fadeOut(),a(".loader").delay(200).fadeOut("slow")});var s=a(".header"),e=s.offset();a(window).scroll(function(){a(this).scrollTop()>e.top+50&&s.hasClass("default")?s.fadeOut("fast",function(){a(this).removeClass("default").addClass("switched-header").fadeIn(200),a(".scroll-to-top").addClass("active")}):a(this).scrollTop()<=e.top+50&&s.hasClass("switched-header")&&s.fadeOut("fast",function(){a(this).removeClass("switched-header").addClass("default").fadeIn(100),a(".scroll-to-top").removeClass("active")})}),a("a.scroll").smoothScroll({speed:800,offset:-180}),a(".popup-image").magnificPopup({type:"image",fixedContentPos:!1,fixedBgPos:!1,mainClass:"mfp-no-margins mfp-with-zoom",image:{verticalFit:!0},zoom:{enabled:!0,duration:300}}),a(".popup-youtube, .popup-vimeo").magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1});var o=a(".video-cover .play-but");a(".video-cover").each(function(){a(this).find("iframe").length&&a(this).find("iframe").attr("data-src",a(this).find("iframe").attr("src"),a(this).find("iframe").attr("src",""))}),o.on("click",function(){var s=a(this).closest(".video-cover"),e=s.find("iframe");return s.addClass("show-video"),e.attr("src",e.attr("data-src")),!1})
}(jQuery);