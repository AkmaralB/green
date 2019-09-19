import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e(require("jquery")):e(jQuery)}(function(e,t){e.fn.resizable||(e.fn.resizable=function(t){var n={handleSelector:null,resizeWidth:!0,resizeHeight:!0,resizeWidthFrom:"right",resizeHeightFrom:"bottom",onDragStart:null,onDragEnd:null,onDrag:null,touchActionNone:!0,instanceId:null};return"object"==typeof t&&(n=e.extend(n,t)),this.each(function(){function o(e){e.stopPropagation(),e.preventDefault()}function i(t){t.preventDefault&&t.preventDefault(),d=c(t),d.width=parseInt(l.width(),10),d.height=parseInt(l.height(),10),h=l.css("transition"),l.css("transition","none"),u.onDragStart&&u.onDragStart(t,l,u)===!1||(e(document).on("mousemove."+u.instanceId,r),e(document).on("mouseup."+u.instanceId,a),(window.Touch||navigator.maxTouchPoints)&&(e(document).on("touchmove."+u.instanceId,r),e(document).on("touchend."+u.instanceId,a)),e(document).on("selectstart."+u.instanceId,o),e("iframe").css("pointer-events","none"))}function r(e){var t,n,o=c(e);t="left"===u.resizeWidthFrom?d.width-o.x+d.x:d.width+o.x-d.x,n="top"===u.resizeHeightFrom?d.height-o.y+d.y:d.height+o.y-d.y,u.onDrag&&u.onDrag(e,l,t,n,u)===!1||(u.resizeHeight&&l.height(n),u.resizeWidth&&l.width(t))}function a(t){return t.stopPropagation(),t.preventDefault(),e(document).off("mousemove."+u.instanceId),e(document).off("mouseup."+u.instanceId),(window.Touch||navigator.maxTouchPoints)&&(e(document).off("touchmove."+u.instanceId),e(document).off("touchend."+u.instanceId)),e(document).off("selectstart."+u.instanceId,o),l.css("transition",h),e("iframe").css("pointer-events","auto"),u.onDragEnd&&u.onDragEnd(t,l,u),!1}function c(e){var t={x:0,y:0,width:0,height:0};if("number"==typeof e.clientX)t.x=e.clientX,t.y=e.clientY;else{if(!e.originalEvent.touches)return null;t.x=e.originalEvent.touches[0].clientX,t.y=e.originalEvent.touches[0].clientY}return t}function s(e,t){return e&&">"===e.trim()[0]?(e=e.trim().replace(/^>\s*/,""),t.find(e)):e?t.parent().find(e):t}var u=e.extend({},n);u.instanceId||(u.instanceId="rsz_"+(new Date).getTime());var d,h,f,l=e(this);if("destroy"===t){if(u=l.data("resizable"),!u)return;return f=s(u.handleSelector,l),f.off("mousedown."+u.instanceId+" touchstart."+u.instanceId),u.touchActionNone&&f.css("touch-action",""),void l.removeClass("resizable")}l.data("resizable",u),f=s(u.handleSelector,l),u.touchActionNone&&f.css("touch-action","none"),l.addClass("resizable"),f.on("mousedown."+u.instanceId+" touchstart."+u.instanceId,i)})})});
//# sourceMappingURL=jquery-resizable.min.js.map

$(document).ready(function () {
    $(".section4-gm__img--left").resizable({
        handleSelector: ".section4-gm__img--splitter",
        resizeHeight: false
    });
    // $('.main-right').slick({
    //     settingName: 'setting-value'
    // });

      
});
$(document).on('ready', function() {

    $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    $(".menu-right").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });

    });