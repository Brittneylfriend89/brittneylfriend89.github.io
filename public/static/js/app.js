function getChartColorsArray(e){if(null!==document.getElementById(e)){var t=document.getElementById(e).getAttribute("data-colors");if(t)return(t=JSON.parse(t)).map(function(e){var t=e.replace(" ","");return-1===t.indexOf(",")?getComputedStyle(document.documentElement).getPropertyValue(t)||t:2==(e=e.split(",")).length?"rgba("+getComputedStyle(document.documentElement).getPropertyValue(e[0])+","+e[1]+")":t});console.warn("data-colors Attribute not found on:",e)}}function ChartColorChangeSparkLine(t,n,a){document.querySelectorAll(".theme-color").forEach(function(e){e.addEventListener("click",function(e){setTimeout(function(){var e=getChartColorsArray(a);n.barColor=e,$("#"+a).sparkline(t,n)},0)})})}!function(r){"use strict";function e(){for(var e=document.getElementById("topnav-menu-content").getElementsByTagName("a"),t=0,n=e.length;t<n;t++)"nav-item dropdown active"===e[t].parentElement.getAttribute("class")&&(e[t].parentElement.classList.remove("active"),e[t].nextElementSibling.classList.remove("show"))}function t(e){1==r("#light-mode-switch").prop("checked")&&"light-mode-switch"===e?(r("html").removeAttr("dir"),r("#dark-mode-switch").prop("checked",!1),r("#rtl-mode-switch").prop("checked",!1),r("#bootstrap-style").attr("href","/static/css/bootstrap.min.css"),r("#app-style").attr("href","/static/css/app.min.css"),document.documentElement.setAttribute("data-bs-theme","light"),sessionStorage.setItem("is_visited","light-mode-switch")):1==r("#dark-mode-switch").prop("checked")&&"dark-mode-switch"===e?(r("html").removeAttr("dir"),r("#light-mode-switch").prop("checked",!1),r("#rtl-mode-switch").prop("checked",!1),document.documentElement.setAttribute("data-bs-theme","dark"),sessionStorage.setItem("is_visited","dark-mode-switch")):1==r("#rtl-mode-switch").prop("checked")&&"rtl-mode-switch"===e&&(r("#light-mode-switch").prop("checked",!1),r("#dark-mode-switch").prop("checked",!1),r("#bootstrap-style").attr("href","/static/css/bootstrap-rtl.min.css"),r("#app-style").attr("href","/static/css/app-rtl.min.css"),r("html").attr("dir","rtl"),document.documentElement.setAttribute("data-bs-theme","light"),sessionStorage.setItem("is_visited","rtl-mode-switch"))}function n(){document.webkitIsFullScreen||document.mozFullScreen||document.msFullscreenElement||(console.log("pressed"),r("body").removeClass("fullscreen-enable"))}if(r("#side-menu").metisMenu(),r(".vertical-menu-btn").on("click",function(e){e.preventDefault(),r("body").toggleClass("sidebar-enable"),992<=r(window).width()?r("body").toggleClass("vertical-collpsed"):r("body").removeClass("vertical-collpsed")}),r("#sidebar-menu a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(r(this).addClass("active"),r(this).parent().addClass("mm-active"),r(this).parent().parent().addClass("mm-show"),r(this).parent().parent().prev().addClass("mm-active"),r(this).parent().parent().parent().addClass("mm-active"),r(this).parent().parent().parent().parent().addClass("mm-show"),r(this).parent().parent().parent().parent().parent().addClass("mm-active"))}),r(document).ready(function(){var e;0<r("#sidebar-menu").length&&0<r("#sidebar-menu .mm-active .active").length&&300<(e=r("#sidebar-menu .mm-active .active").offset().top)&&(e-=300,r(".simplebar-content-wrapper").animate({scrollTop:e},"slow"))}),r('[data-toggle="fullscreen"]').on("click",function(e){e.preventDefault(),r("body").toggleClass("fullscreen-enable"),document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement?document.cancelFullScreen?document.cancelFullScreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen&&document.webkitCancelFullScreen():document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.mozRequestFullScreen?document.documentElement.mozRequestFullScreen():document.documentElement.webkitRequestFullscreen&&document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)}),document.addEventListener("fullscreenchange",n),document.addEventListener("webkitfullscreenchange",n),document.addEventListener("mozfullscreenchange",n),r(".navbar-nav a").each(function(){var e=window.location.href.split(/[?#]/)[0];this.href==e&&(r(this).addClass("active"),r(this).parent().addClass("active"),r(this).parent().parent().addClass("active"),r(this).parent().parent().parent().addClass("active"),r(this).parent().parent().parent().parent().addClass("active"),r(this).parent().parent().parent().parent().parent().addClass("active"))}),r(".right-bar-toggle").on("click",function(e){r("body").toggleClass("right-bar-enabled")}),r(document).on("click","body",function(e){0<r(e.target).closest(".right-bar-toggle, .right-bar").length||r("body").removeClass("right-bar-enabled")}),document.getElementById("topnav-menu-content")){for(var a=document.getElementById("topnav-menu-content").getElementsByTagName("a"),o=0,s=a.length;o<s;o++)a[o].onclick=function(e){"#"===e.target.getAttribute("href")&&(e.target.parentElement.classList.toggle("active"),e.target.nextElementSibling.classList.toggle("show"))};window.addEventListener("resize",e)}var c,l,i;!function(){[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(e){return new bootstrap.Tooltip(e)}),[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(e){return new bootstrap.Popover(e)});var n=r(this).attr("data-delay")?r(this).attr("data-delay"):100,a=r(this).attr("data-time")?r(this).attr("data-time"):1200;r('[data-plugin="counterup"]').each(function(e,t){r(this).counterUp({delay:n,time:a})})}(),window.sessionStorage&&((i=sessionStorage.getItem("is_visited"))||(i="light-mode-switch",sessionStorage.setItem("is_visited",i)),r(".right-bar input:checkbox").prop("checked",!1),r("#"+i).prop("checked",!0),t(i)),r("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch, #dark-rtl-mode-switch").on("change",function(e){t(e.target.id)}),r("#password-addon").on("click",function(){0<r(this).siblings("input").length&&("password"==r(this).siblings("input").attr("type")?r(this).siblings("input").attr("type","input"):r(this).siblings("input").attr("type","password"))}),(i=getChartColorsArray("header-chart-1"))&&(c=[8,6,4,7,10,12,7,4,9,12,13,11,12],l={type:"bar",height:"32",barWidth:"5",barSpacing:"3",barColor:i},r("#header-chart-1").sparkline(c,l),ChartColorChangeSparkLine(c,l,"header-chart-1")),(i=getChartColorsArray("header-chart-2"))&&(c=[8,6,4,7,10,12,7,4,9,12,13,11,12],l={type:"bar",height:"32",barWidth:"5",barSpacing:"3",barColor:i},r("#header-chart-2").sparkline(c,l),ChartColorChangeSparkLine(c,l,"header-chart-2")),r(window).on("load",function(){r("#status").fadeOut(),r("#preloader").delay(350).fadeOut("slow")}),Waves.init()}(jQuery);