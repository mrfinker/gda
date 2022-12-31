/**
 * TI WooCommerce Wishlist Plugin - Allow your store guests and customers to add products to Wishlist.  Add Wishlist functionality to your store for free.
 * @version 1.47.0
 * @link https://wordpress.org/plugins/ti-woocommerce-wishlist/
 */
"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function showTooltip(t,i){t.setAttribute("class","social social-clipboard tooltipped tooltipped-s"),t.setAttribute("aria-label",i)}function clearTooltip(t){t.currentTarget.setAttribute("class","social social-clipboard "),t.currentTarget.removeAttribute("aria-label")}!function(c){c.fn.tinvwl_to_wishlist=function(t){var i={api_url:window.location.href.split("?")[0],text_create:window.tinvwl_add_to_wishlist.text_create,text_already_in:window.tinvwl_add_to_wishlist.text_already_in,class:{dialogbox:".tinvwl_add_to_select_wishlist",select:".tinvwl_wishlist",newtitle:".tinvwl_new_input",dialogbutton:".tinvwl_button_add"},redirectTimer:null,onPrepareList:function(){},onGetDialogBox:function(){},onPrepareDialogBox:function(){c("body > .tinv-wishlist").length||c("body").append(c("<div>").addClass("tinv-wishlist")),c(this).appendTo("body > .tinv-wishlist")},onCreateWishList:function(t){c(this).append(c("<option>").html(t.title).val(t.ID).toggleClass("tinv_in_wishlist",t.in))},onSelectWishList:function(){},onDialogShow:function(t){c(t).addClass("tinv-modal-open"),c(t).removeClass("ftinvwl-pulse")},onDialogHide:function(t){c(t).removeClass("tinv-modal-open"),c(t).removeClass("ftinvwl-pulse")},onInited:function(){},onClick:function(){if(c(this).is(".disabled-add-wishlist"))return!1;c(this).is(".ftinvwl-animated")&&c(this).addClass("ftinvwl-pulse"),(this.tinvwl_dialog?this.tinvwl_dialog.show_list:e.onActionProduct).call(this)},onPrepareDataAction:function(t,i){c("body").trigger("tinvwl_wishlist_button_clicked",[t,i])},filterProductAlreadyIn:function(t){var t=t||[],o={};return c("form.cart[method=post], .woocommerce-variation-add-to-cart, form.vtajaxform[method=post]").find("input, select").each(function(){var t=c(this).attr("name"),i=c(this).attr("type"),n=c(this).val();("checkbox"!==i&&"radio"!==i||c(this).is(":checked"))&&(o["form"+t]=n)}),o=o.formvariation_id,t.filter(function(t){var i;return"object"===_typeof(t.in)&&"string"==typeof o?(i=parseInt(o),0<=t.in.indexOf(i)):t.in})},onMultiProductAlreadyIn:function(t){var t=t||[],n=(t=e.onPrepareList.call(t)||t,t=e.filterProductAlreadyIn.call(this,t)||t,c(this).parent().parent().find(".already-in").remove(),"");0===t.length||(n=c("<ul>"),c.each(t,function(t,i){n.append(c("<li>").html(c("<a>").html(i.title).attr({href:i.url})).val(i.ID))})),n.length&&c(this).closest(".tinv-modal-inner").find("img").after(c("<div>").addClass("already-in").html(e.text_already_in+" ").append(n))},onAction:{redirect:function(t){e.redirectTimer&&clearTimeout(e.redirectTimer),e.redirectTimer=window.setTimeout(function(){window.location.href=t},4e3)},force_redirect:function(t){window.location.href=t},wishlists:function(t){},msg:function(t){if(!t)return!1;var i,n,o=c(t).eq(0);c("body > .tinv-wishlist").length||c("body").append(c("<div>").addClass("tinv-wishlist")),c("body > .tinv-wishlist").append(o),t=c(t="body > .tinv-wishlist").find("select, input, textarea, button, a").filter(":visible"),i=t.first(),n=t.last(),i.focus().blur(),n.on("keydown",function(t){9!==t.which||t.shiftKey||(t.preventDefault(),i.focus())}),i.on("keydown",function(t){9===t.which&&t.shiftKey&&(t.preventDefault(),n.focus())}),e.redirectTimer||(e.removeTimer=window.setTimeout(function(){o.remove(),e.redirectTimer&&clearTimeout(e.redirectTimer)},6e3)),o.on("click",".tinv-close-modal, .tinvwl_button_close, .tinv-overlay",function(t){t.preventDefault(),o.remove(),e.redirectTimer&&clearTimeout(e.redirectTimer),e.removeTimer&&clearTimeout(e.removeTimer)})},status:function(t){c("body").trigger("tinvwl_wishlist_added_status",[this,t])},removed:function(t){},make_remove:function(t){},wishlists_data:function(t){r(JSON.stringify(t))}}},e=(i.onActionProduct=function(t,i){var r={form:{},tinv_wishlist_id:t||"",tinv_wishlist_name:i||"",product_type:c(this).attr("data-tinv-wl-producttype"),product_id:c(this).attr("data-tinv-wl-product")||0,product_variation:c(this).attr("data-tinv-wl-productvariation")||0,product_action:c(this).attr("data-tinv-wl-action")||"addto",redirect:window.location.href},n=this,o=[],d=new FormData;tinvwl_add_to_wishlist.wpml&&(r.lang=tinvwl_add_to_wishlist.wpml),tinvwl_add_to_wishlist.wpml_default&&(r.lang_default=tinvwl_add_to_wishlist.wpml_default),c('form.cart[method=post][data-product_id="'+c(this).attr("data-tinv-wl-product")+'"], form.vtajaxform[method=post][data-product_id="'+c(this).attr("data-tinv-wl-product")+'"]').each(function(){o.push(c(this))}),o.length||(c(n).closest("form.cart[method=post], form.vtajaxform[method=post]").each(function(){o.push(c(this))}),o.length||o.push(c("form.cart[method=post]"))),c('.tinv-wraper[data-tinvwl_product_id="'+c(this).attr("data-tinv-wl-product")+'"]').each(function(){o.push(c(this))}),c.each(o,function(t,i){c(i).find("input:not(:disabled), select:not(:disabled), textarea:not(:disabled)").each(function(){function e(t,i){if("object"!==_typeof(i))return i;for(var n in void 0===t&&(t={}),i)if(""===n){var o=-1;for(o in t);t[o=parseInt(o)+1]=e(t[n],i[n])}else t[n]=e(t[n],i[n]);return t}var t,i=c(this).attr("name"),n=c(this).attr("type"),o=c(this).val(),l=10;if("button"!==n&&void 0!==i){for(;/^(.+)\[([^\[\]]*?)\]$/.test(i)&&0<l;){var a,s=i.match(/^(.+)\[([^\[\]]*?)\]$/);3===s.length&&((a={})[s[2]]=o,o=a),i=s[1],l--}"file"!==n||(t=c(this)[0].files)&&d.append(i,t[0]),"checkbox"===n||"radio"===n?c(this).is(":checked")&&(o.length||"object"===_typeof(o)||(o=!0),r.form[i]=e(r.form[i],o)):r.form[i]=e(r.form[i],o)}})}),r=e.onPrepareDataAction.call(n,n,r)||r,c.each(r,function(n,t){"form"===n?c.each(t,function(t,i){"object"===_typeof(i)&&(i=JSON.stringify(i)),d.append(n+"["+t+"]",i)}):d.append(n,t)}),c.ajax({url:e.api_url,method:"POST",contentType:!1,processData:!1,data:d}).done(function(t){if(e.onDialogHide.call(n.tinvwl_dialog,n),"object"===_typeof(t))for(var i in t)"function"==typeof e.onAction[i]&&e.onAction[i].call(n,t[i]);else"function"==typeof e.onAction.msg&&e.onAction.msg.call(n,t)})},c.extend(!0,{},i,t));return c(this).each(function(){if(!c(this).attr("data-tinv-wl-list"))return!1;var t,o;e.dialogbox&&e.dialogbox.length&&(this.tinvwl_dialog=e.dialogbox),this.tinvwl_dialog||(this.tinvwl_dialog=e.onGetDialogBox.call(this)),this.tinvwl_dialog||(t=c(this).nextAll(e.class.dialogbox).eq(0)).length&&(this.tinvwl_dialog=t),this.tinvwl_dialog&&(e.onPrepareDialogBox.call(this.tinvwl_dialog),"function"!=typeof this.tinvwl_dialog.update_list&&(this.tinvwl_dialog.update_list=function(t){var n=c(this).find(e.class.select).eq(0);c(this).find(e.class.newtitle).hide().val(""),n.html(""),c.each(t,function(t,i){e.onCreateWishList.call(n,i)}),e.text_create&&e.onCreateWishList.call(n,{ID:"",title:e.text_create,in:!1}),e.onMultiProductAlreadyIn.call(n,t),e.onSelectWishList.call(n,t),c(this).find(e.class.newtitle).toggle(""===n.val())}),"function"!=typeof this.tinvwl_dialog.show_list&&(this.tinvwl_dialog.show_list=function(){var t=JSON.parse(c(this).attr("data-tinv-wl-list"))||[];t.length?(t=e.onPrepareList.call(t)||t,this.tinvwl_dialog.update_list(t),e.onDialogShow.call(this.tinvwl_dialog,this)):e.onActionProduct.call(this)}),c((o=this).tinvwl_dialog).find(e.class.dialogbutton).off("click").on("click",function(){var t,i=c(o.tinvwl_dialog).find(e.class.select),n=c(o.tinvwl_dialog).find(e.class.newtitle);i.val()||n.val()?e.onActionProduct.call(o,i.val(),n.val()):((t=n.is(":visible")?n:i).addClass("empty-name-wishlist"),window.setTimeout(function(){t.removeClass("empty-name-wishlist")},1e3))})),c(this).off("click").on("click",e.onClick),e.onInited.call(this,e)})},c(document).ready(function(){c("body").on("click keydown",".tinvwl_add_to_wishlist_button",function(t){if("keydown"===t.type){var i=void 0!==t.key?t.key:t.keyCode;if(!("Enter"===i||13===i||0<=["Spacebar"," "].indexOf(i)||32===i))return;t.preventDefault()}if(c("body").trigger("tinvwl_add_to_wishlist_button_click",[this]),c(this).is(".disabled-add-wishlist"))return t.preventDefault(),void window.alert(tinvwl_add_to_wishlist.i18n_make_a_selection_text);c(this).is(".inited-add-wishlist")||c(this).tinvwl_to_wishlist({onInited:function(t){c(this).addClass("inited-add-wishlist"),t.onClick.call(this)}})}),c(document).on("hide_variation",".variations_form",function(t){var i=c('.tinvwl_add_to_wishlist_button:not(.tinvwl-loop)[data-tinv-wl-product="'+c(this).data("product_id")+'"]');if(i.attr("data-tinv-wl-productvariation",0),i.length&&i.attr("data-tinv-wl-list")){var n,o=JSON.parse(i.attr("data-tinv-wl-list")),e=!1,l="1"==window.tinvwl_add_to_wishlist.simple_flow;for(n in o)o[n].hasOwnProperty("in")&&Array.isArray(o[n].in)&&-1<(o[n].in||[]).indexOf(0)&&(e=!0);i.toggleClass("tinvwl-product-in-list",e).toggleClass("tinvwl-product-make-remove",e&&l).attr("data-tinv-wl-action",e&&l?"remove":"addto")}i.length&&!tinvwl_add_to_wishlist.allow_parent_variable&&(t.preventDefault(),i.addClass("disabled-add-wishlist"))}),c(document).on("show_variation",".variations_form",function(t,i,n){var o=c('.tinvwl_add_to_wishlist_button:not(.tinvwl-loop)[data-tinv-wl-product="'+c(this).data("product_id")+'"]');if(o.attr("data-tinv-wl-productvariation",i.variation_id),o.length&&o.attr("data-tinv-wl-list")){var e,l=JSON.parse(o.attr("data-tinv-wl-list")),a=!1,s="1"==window.tinvwl_add_to_wishlist.simple_flow;for(e in l)l[e].hasOwnProperty("in")&&Array.isArray(l[e].in)&&-1<(l[e].in||[]).indexOf(i.variation_id)&&(a=!0);o.toggleClass("tinvwl-product-in-list",a).toggleClass("tinvwl-product-make-remove",a&&s).attr("data-tinv-wl-action",a&&s?"remove":"addto")}t.preventDefault(),o.removeClass("disabled-add-wishlist")}),c(window).on("storage onstorage",function(t){a===t.originalEvent.key&&localStorage.getItem(a)!==sessionStorage.getItem(a)&&(!localStorage.getItem(a)||"object"===_typeof(t=JSON.parse(localStorage.getItem(a)))&&null!==t&&(t.hasOwnProperty("products")||t.hasOwnProperty("counter"))&&r(localStorage.getItem(a)))});function i(){var t;(n.length||o)&&(t={},tinvwl_add_to_wishlist.wpml&&(t.lang=tinvwl_add_to_wishlist.wpml),tinvwl_add_to_wishlist.wpml_default&&(t.lang_default=tinvwl_add_to_wishlist.wpml_default),c.ajax({url:tinvwl_add_to_wishlist.plugin_url+"includes/api/ajax.php",method:"POST",data:t,beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",tinvwl_add_to_wishlist.nonce)}}).done(function(t){r(JSON.stringify(t)),s(t)}).fail(function(){var t;(n.length||o)&&(t={ids:n,counter:o,tinvwl_request:!0},tinvwl_add_to_wishlist.wpml&&(t.lang=tinvwl_add_to_wishlist.wpml),tinvwl_add_to_wishlist.wpml_default&&(t.lang_default=tinvwl_add_to_wishlist.wpml_default),c.ajax({url:tinvwl_add_to_wishlist.rest_root+"wishlist/v1/products",method:"POST",data:t,beforeSend:function(t){t.setRequestHeader("X-WP-Nonce",tinvwl_add_to_wishlist.nonce)}}).done(function(t){r(JSON.stringify(t)),s(t)}))}))}var n=[],o=!1,t=(c("a.tinvwl_add_to_wishlist_button").each(function(){"undefined"!==c(this).data("tinv-wl-product")&&c(this).data("tinv-wl-product")&&n.push(c(this).data("tinv-wl-product"))}),c(".wishlist_products_counter_number").each(function(){o=!0}),c.fn.tinvwl_get_wishlist_data=function(){if(l&&(tinvwl_add_to_wishlist.update_wishlists_data&&localStorage.setItem(a,""),localStorage.getItem(a))){var t=JSON.parse(localStorage.getItem(a));if("object"===_typeof(t)&&null!==t&&(t.hasOwnProperty("products")||t.hasOwnProperty("counter"))&&(!t.hasOwnProperty("lang")&&!tinvwl_add_to_wishlist.wpml||tinvwl_add_to_wishlist.wpml&&t.lang===tinvwl_add_to_wishlist.wpml))return void s(t)}tinvwl_add_to_wishlist.block_ajax_wishlists_data||i()},c.fn.tinvwl_get_wishlist_data(),new MutationObserver(function(t){n=[],t.forEach(function(t){t=t.addedNodes;null!==t&&c(t).each(function(){var t=c(this).find(".tinvwl_add_to_wishlist_button");t.length&&t.each(function(){"undefined"!==c(this).data("tinv-wl-product")&&c(this).data("tinv-wl-product")&&n.push(c(this).data("tinv-wl-product"))})})}),n.length&&c.fn.tinvwl_get_wishlist_data()})),e=document.body;t.observe(e,{childList:!0,subtree:!0})});var l=!0,a=tinvwl_add_to_wishlist.hash_key;try{l="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("ti","test"),window.sessionStorage.removeItem("ti"),window.localStorage.setItem("ti","test"),window.localStorage.removeItem("ti")}catch(t){l=!1}function s(t){var a="1"==window.tinvwl_add_to_wishlist.simple_flow,t=(a&&c("a.tinvwl_add_to_wishlist_button").each(function(){c(this).removeClass("tinvwl-product-make-remove").removeClass("tinvwl-product-already-on-wishlist").removeClass("tinvwl-product-in-list").attr("data-tinv-wl-action","addto").attr("data-tinv-wl-list","[]")}),c("body").trigger("tinvwl_wishlist_mark_products",[t]),c.each(t.products,function(t,e){var l=t;c('a.tinvwl_add_to_wishlist_button[data-tinv-wl-product="'+l+'"]').each(function(){var i,t=parseInt(c(this).attr("data-tinv-wl-productvariation")),n=c(this).data("tinv-wl-productvariations")||[],o=!1;for(i in e)e[i].hasOwnProperty("in")&&Array.isArray(e[i].in)&&(-1<(e[i].in||[]).indexOf(l)||-1<(e[i].in||[]).indexOf(t)||n.some(function(t){return 0<=(e[i].in||[]).indexOf(t)}))&&(o=!0);c("body").trigger("tinvwl_wishlist_product_marked",[this,o]),c(this).attr("data-tinv-wl-list",JSON.stringify(e)).toggleClass("tinvwl-product-in-list",o).toggleClass("tinvwl-product-make-remove",o&&a).attr("data-tinv-wl-action",o&&a?"remove":"addto")})}),t.counter);"1"==window.tinvwl_add_to_wishlist.hide_zero_counter&&0===t&&(t="false"),jQuery("i.wishlist-icon").addClass("added"),"false"!==t?(jQuery(".wishlist_products_counter_number, body.theme-woostify .wishlist-item-count").html(t),jQuery("i.wishlist-icon").attr("data-icon-label",t)):(jQuery(".wishlist_products_counter_number, body.theme-woostify .wishlist-item-count").html("").closest("span.wishlist-counter-with-products").removeClass("wishlist-counter-with-products"),jQuery("i.wishlist-icon").removeAttr("data-icon-label")),t=!("0"==t||"false"==t),jQuery(".wishlist_products_counter").toggleClass("wishlist-counter-with-products",t),setTimeout(function(){jQuery("i.wishlist-icon").removeClass("added")},500)}function r(t){l&&(localStorage.setItem(a,t),sessionStorage.setItem(a,t),s(JSON.parse(t)))}}(jQuery),function(o){o(document).ready(function(){if(o("#tinvwl_manage_actions, #tinvwl_product_actions").addClass("form-control").parent().wrapInner('<div class="tinvwl-input-group tinvwl-no-full">').find("button").wrap('<span class="tinvwl-input-group-btn">'),o(".tinv-lists-nav").each(function(){o(this).html().trim().length||o(this).remove()}),o("body").on("click",".social-buttons .social:not(.social-email,.social-whatsapp,.social-clipboard)",function(t){var i=window.open(o(this).attr("href"),o(this).attr("title"),"width=420,height=320,resizable=yes,scrollbars=yes,status=yes");i&&(i.focus(),t.preventDefault())}),"undefined"!=typeof ClipboardJS){new ClipboardJS(".social-buttons .social.social-clipboard",{text:function(t){return t.getAttribute("href")}}).on("success",function(t){showTooltip(t.trigger,tinvwl_add_to_wishlist.tinvwl_clipboard)});for(var t=document.querySelectorAll(".social-buttons .social.social-clipboard"),i=0;i<t.length;i++)t[i].addEventListener("mouseleave",clearTooltip),t[i].addEventListener("blur",clearTooltip)}o("body").on("click",".social-buttons .social.social-clipboard",function(t){t.preventDefault()}),o("body").on("click",".tinv-wishlist .tinv-overlay, .tinv-wishlist .tinv-close-modal, .tinv-wishlist .tinvwl_button_close",function(t){t.preventDefault(),o(this).parents(".tinv-modal:first").removeClass("tinv-modal-open"),o("body").trigger("tinvwl_modal_closed",[this])}),o("body").on("click",".tinv-wishlist .tinvwl-btn-onclick",function(t){o(this).data("url")&&(t.preventDefault(),window.location=o(this).data("url"))});var n=o(".tinv-wishlist .navigation-button");n.length&&n.each(function(){var t=o(this).find("> li");t.length<5&&t.parent().addClass("tinvwl-btns-count-"+t.length)}),o(".tinv-login .showlogin").off("click").on("click",function(t){t.preventDefault(),o(this).closest(".tinv-login").find(".login").toggle()}),o(".tinv-wishlist table.tinvwl-table-manage-list tfoot td").each(function(){o(this).toggle(!!o(this).children().not(".look_in").length||!!o(this).children(".look_in").children().length)})})}(jQuery),function(o){o.fn.tinvwl_break_submit=function(t){var n=o.extend(!0,{},{selector:"input, select, textarea",ifempty:!0,invert:!1,validate:function(){return o(this).val()},rule:function(){var t=o(this).parents("form").eq(0).find(n.selector),i=n.invert;return 0===t.length?n.ifempty:(t.each(function(){i&&!n.invert||!i&&n.invert||(i=Boolean(n.validate.call(o(this))))}),i)}},t);return o(this).each(function(){o(this).on("click",function(t){var i=[];void 0!==o(this).attr("tinvwl_break_submit")&&(i=o(this).attr("tinvwl_break_submit").split(",")),-1!==jQuery.inArray(n.selector,i)&&(i=[]),n.rule.call(o(this))||0!==i.length||(alert(window.tinvwl_add_to_wishlist.tinvwl_break_submit),t.preventDefault()),i.push(n.selector),o(this).attr("tinvwl_break_submit",i),n.rule.call(o(this))&&o(this).removeAttr("tinvwl_break_submit")})})},o(document).ready(function(){o(".tinvwl-break-input").tinvwl_break_submit({selector:".tinvwl-break-input-filed"}),o(".tinvwl-break-checkbox").tinvwl_break_submit({selector:"table td input[type=checkbox]",validate:function(){return o(this).is(":checked")}}),o(".global-cb").on("click",function(){o(this).closest("table").eq(0).find(".product-cb input[type=checkbox], .wishlist-cb input[type=checkbox]").prop("checked",o(this).is(":checked"))})})}(jQuery);