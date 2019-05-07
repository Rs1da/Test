/**
 * Created by DRUMSLAVE on 24.10.2014.
 */
var bgImgs = [];
var sliderAbout;
function mainAbout() {
    if ($('.bxslider-about li').length > 1 && !$(".bx-viewport").length) {
        sliderAbout = $('.bxslider-about ul').bxSlider({
            mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
            activateKeyboard: false,
            controls: true,
            auto: true,
            pager: false,
            adaptiveHeight: false,
            width: '100%'
        });
    }
    return sliderAbout;
}
var linkFlag = true;
function imageAntiClick() { linkFlag = false; setTimeout("linkFlag=true",100); }
function imageClick() {
    if (linkFlag){
        var a = $("#image img");
        if (a.length)
            a = a[0].src.split("?")[1];
        else
            a = ($("#image").css("background-image") + "?").split("?")[1].replace("\").html", "");
        if (a.indexOf("mysodexo.co.il") > 0 || 0 == a.indexOf("index.html")) location = a;
        else if (a.length > 3) window.open(a);
    }
}
function mainGallery() {
    if (!$(".mbBgndGallery").length){
        if (bgImgs.length > 1)
            var myGallery = new mbBgndGallery({
                containment: "#image", // or "#myGalleryElement"
                timer: screen.availWidth > 640 ? 4000 : 35000,
                effTimer: 2000,
                images: bgImgs,
                activateKeyboard: false,
                //preserveTop:($('.filter').length > 0 ? false : true)
                preserveTop: true,
                onChange: function (opt, idx) { $("#image,.round_buttons,.rest-links").css("cursor", "" == opt.images[idx].split("?")[1] ? "default" : "pointer"); }
            });
        else if (bgImgs.length == 1) {
            $("#image").css("background-image", "url('" + bgImgs[0] + "')");
            if ("" != bgImgs[0].split("?")[1]) $("#image,.round_buttons,.rest-links").css("cursor", "pointer");
        }
    }
    //if ($('.bxslider ul').length > 0) {
        $('.bxslider ul').each(function () {
            var bxslider = $(this);
            if (bxslider.find('li').length > 1) {
                bxslider.bxSlider({
                    mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
                    activateKeyboard: false,
                    controls: false,
                    auto: true,
                    onSliderLoad: function () {
                        if (window.PIE) {
                            $('.bx-wrapper .bx-default-pager.bx-pager a').each(function () {
                                PIE.attach(this);
                            });
                        }
                    }
                });
            }
        })
    //}
    mainAbout();
    if ($('.bxslider-products ul').length > 0) {
        bxProducts = $('.bxslider-products ul').bxSlider({
            mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
            activateKeyboard: false,
            controls: false,
            auto: true,
            pager: false
        });

        $('.sidebar_left .bxslider-products .arrow-left').on('click', function () {
            bxProducts.goToPrevSlide();
        })
        $('.sidebar_left .bxslider-products .arrow-right').on('click', function () {
            bxProducts.goToNextSlide();
        })
    }
    //if ($('.bxslider-summary-main ul').length > 0) {
        $('.bxslider-summary-main ul').each(function () {
            var bxslider = $(this);
            if (bxslider.find('li').length > 1) {
                bxslider.bxSlider({
                    mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
                    controls: false,
                    auto: false,
                    adaptiveHeight: true
                });
            }
        })
    //}
    if (!$('.bxslider-summary-tickets .bx-wrapper ul').length) {
        bxtickets = $('.bxslider-summary-tickets ul').each(function () {
            var bxslider = $(this);
            if (bxslider.find('li').length > 1) {
                bxslider.bxSlider({
                    mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
                    controls: true,
                    auto: false,
                    onSliderLoad: function () {
                        if (window.PIE) {
                            $('.bx-wrapper .bx-default-pager.bx-pager a').each(function () {
                                PIE.attach(this);
                            });
                        }
                    }
                });
            }
        })
    }
    //if ($('.bxslider-summary-new ul').length > 0) {
        $('.bxslider-summary-new ul').each(function () {
            var bxslider = $(this);
            if (bxslider.find('li').length > 1) {
                bxslider.bxSlider({
                    mode: 'fade', pause: screen.availWidth > 640 ? 4000 : 35000,
                    controls: false,
                    auto: false,
                    onSliderLoad: function () {
                        if (window.PIE) {
                            $('.bx-wrapper .bx-default-pager.bx-pager a').each(function () {
                                PIE.attach(this);
                            });
                        }
                    }
                });
            }
        })
    //}
    $('.menu .content .t_table .t_body .text .arrow-more').on('click', function () {
        $(this).parents('.text').find('.full-text').slideDown();
        $(this).parents('.text').find('.intro-text').slideUp();
    })
    $('.menu .content .t_table .t_body .text .arrow-less').on('click', function () {
        $(this).parents('.text').find('.full-text').slideUp();
        $(this).parents('.text').find('.intro-text').slideDown();
    })
    
    if (!$('.sidebar_left .dark-blocks .title .arrow').hasClass("click"))
    $('.sidebar_left .dark-blocks .title .arrow').addClass("click").click(function () {
        var arrow = $(this);
        var currentBlock = arrow.parents('.block');
        if (currentBlock.hasClass('active')) {
            currentBlock.removeClass('active')
            return;
        } else {
            currentBlock.addClass('active');
            return
        }
    });

    $('.food .food-is-hear .panel-title > a:first-child').on('click', function () {
        var arrow = $(this);
        //	console.log(arrow);
        var currentBlock = arrow.parents('.panel-group');
        if (currentBlock.hasClass('active')) {
            currentBlock.removeClass('active')
            return;
        } else {
            currentBlock.addClass('active');
            return
        }
    });

    $('.admin.reports.summary .sidebar_left .accordion .arrow ').on('click', function () {
        var arrow = $(this);
        var currentBlock = arrow.parents('.employees-lovely');
        if (currentBlock.hasClass('active')) {
            currentBlock.removeClass('active');
            return;
        } else {
            $('.admin.reports.summary .sidebar_left .employees-lovely').removeClass('active');
            currentBlock.addClass('active');
            return
        }
    });
    $(window).resize(function () {
        if (window.plot !== undefined) {
            plot.replot();
        }
        if (window.plot2 !== undefined) {
            plot2.replot();
        }
    })
    try { fancybox() } catch (e) { }
    if ($('.customScroll').length > 0) {
        $('.customScroll').each(function (index, elem) {
            if ($(elem).parents('.popup').length < 1) {
                $(elem).customScrollbar({
                    skin: 'default-skin',
                    updateOnWindowResize: true,
                    preventDefaultScroll: true
                });
            }
            setTimeout(function () { //Fix for chrome
                $('.customScroll').customScrollbar("resize", true)
            }, 1000)
        })
    }
    try { if ($("input.time").length) $("input.time").mask("00:00");
    if ($('.datepicker').length) $('.datepicker').mask('00/00/0000');
    if ($('.card-name').length) $('.card-name').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', { 'translation': { A: { pattern: /[A-Za-zא-ת '"\-]/ } } });
    $(".max-long").mask("000000000000000000000000");
    $(".max").mask("0000");
    $(".cell").mask("zf0-0000000", { translation: { 'z': { pattern: /[0]/ }, 'f': { pattern: /[5]/ } } });} catch (e) { ; }
    try { if ($(".datepicker.all").length) $(".datepicker.all").datepicker();//.datepicker("setDate", (d = new Date()).setDate(1));
    if ($(".datepicker.past").length) $(".datepicker.past").datepicker({ 'maxDate': 0, 'minDate':-364 });//.datepicker("setDate", (d = new Date()).setDate(1));
    if ($(".datepicker.future").length) $(".datepicker.future").datepicker({ 'minDate': 0 });}catch(e){} //.datepicker("setDate", (d = new Date()).setDate(1));
    //if ($(".timepicker").length) $(".timepicker").timepicker({ 'timeFormat': 'H:i' });
    //$(".datepicker.1st").datepicker("setDate", d);
    $(".ui-loader").hide();
    $('.pager:has(a)').show();
    $(".admin-rep-list").each(function (i, ddl) { $(".ttl").text(ddl.options[ddl.selectedIndex].text); });
    if ($(".cmp option").length) $(".filter,.rst").hide(); else $(".cmp").hide();
    if ($(".rst option").length) $(".filter,.cmp").hide(); else $(".rst").hide();
    $(".extras input").click(function () { testCBL(this, false); });
    $(".list .title .h1").text($(".tabs .active").text());
    $(".disabled a").removeAttr("href");
    if ($(".pager a").length) $(".pager a[href]").click(showLoader);
    $('.Cancelable_True').attr("title", "בטל הזמנה");
    $('.grp').each(function () { $(this).html($('.grps').html().replace("selected", "x").replace(this.value, this.value + "\" selected=\"selected")); });
    $('.hour option').each(function () { this.innerHTML = (this.innerHTML < 10 ? "0" + this.innerHTML : this.innerHTML) + ":00"; });
    $('.hour').removeClass('hour');
    $('.bxslider li, .bxslider-summary-main li').show();
    $('.bxslider li .text0').show();
    loadAC();
    setTimeout(function () { $('.bxslider li .text').show() }, 5000);
    try{$('input, textarea').placeholder();}catch(e){}
    $('.cnt').each(function () {
        if (this.value >= 500) {
            $(".msg").text("הדוח שביקשת מופק ברגעים אלו ומיד יוצג בפורמט אקסל");
            $('.xlsx').click();
        }
    });
}
function loadAC() {if ($('.ac').length) $('.rest-name').autocomplete({ position: { my: "right top", at: "right bottom" }, source: $('.ac').val().split(','), close: function () { if ("" != $('.rest-name').val()) submitV(); } }); }
var current, lastClickTime = 0;
function testCBL(chk, force) { //grd_ctrl1_cblst_0
    if (!force && !$(chk).is(":visible")) return chk.checked = false;
    current = new Date().getTime();
    lastClickTime = current;
    var i = chk.name.split("$")[1].replace("ctrl", "");
    var h1 = $(".max" + i);
    var x = h1.val();
    var h2 = h1.next();
    var y = -1; $(chk).parents(".cblst").find("input").each(function (i, inp) { if (inp.checked) y++; $(inp).next().css("font-weight", inp.checked ? "bold" : ""); });
    if (x > 0 && x == y)
        if (chk.type == 'radio')
            $(chk).parents(".cblst").find("input:checked").each(function (i, inp) { inp.checked = inp === chk; $(inp).next().css("font-weight", inp.checked ? "bold" : ""); });
        else if (chk.checked) {
            chk.checked = false;
            blinkLimit(h2.next());
            $(chk).next().css("font-weight", "");
        }
        else h2.val(y - 1).next().css("color", "");
    else h2.val(y + (chk.checked ? 1 : -1));
    validateAdd(false, ".fancybox-inner .row");
}
var bgI = 1;
function main() {
    try { mainGallery() } catch (e) { }
    if (window.PIE) {
        $('.header,' +
			' .login_form,' +
			' .number,' +
			' .menu .tabs .count,' +
			' .menu .content .main .t_title' +
			', .menu .content .top_part .desc a.button' +
			', #add_recommendation .text .deliveries' +
			', #add_recommendation .text .rating').each(function() {
			    PIE.attach(this);
			});
    }
    /*if($('.time').length > 0) {
        $('input.time').each(function(index, element){
            $(element).timepicker({
                'timeFormat': 'H:i',
                'scrollDefault': 'now',
                appendTo: $(element).parent()
            });
            $(element).next('img.icon').on('click', function(){
                $(element).click();
            })
        })
    }*/
    try { mainTooltip(); } catch (e) { }
    try { if (!rateIt && $('.rateit').length) {
        try { $('.rateit').rateit(); } catch(e){}
        if ($(".tims").length)
            setLast(Math.max(getCookieDef("dlvr_time", 0), $(".tims")[0].selectedIndex));
    } } catch (e) { }
    $(".ui-loader").hide();
}
function setCheckbox4Edit() {
	$("#hidChecked").each(function () {
	    var chk, v = $(this).val().split(",");
	    for (i = v.length - 2; i > 0; --i) {
	        v[i] = v[i].split("-");
	        (chk = $(".grp" + v[i][0] + " input[value=" + v[i][1] + "]")[0]).checked = true;
	        testCBL(chk, true);
	    }
	});
    $(".radios [type='checkbox']").prop('type', 'radio');
    validateAdd(false, ".popups .row");
    addCnt = 0;
}
function setBudget() {
    var cycle = getCookie("cycle");
    $(".bdgt").html(getCookie("bdgt").replace(":", ":<br>") + (cycle > 1 ? " עד " + (cycle - 1) + " לחודש" : ""));
    $(".scard").html(getCookie("scard"));
    $(".last_login").html(getCookie("last_login"));
}
var tooltipOpts = { contentAsHTML: true, theme: "tooltipster-light" };
function mainTooltip() {
    if ($(".tooltipstered").length < 2) {
        $('.tooltip:not(.tooltipstered)').tooltipster(tooltipOpts);
        var b,a = $('.tooltip-login:not(.tooltipstered)').tooltipster({ contentAsHTML: true, theme: "tooltipster-light tooltipster-login"/*, trigger: "click"*/, functionReady: setBudget })
        //try { if ((b = getCookie("pop_bdgt")) > 0 /*&& getCookie("budget") > 0*/) { a.tooltipster('show'); setTimeout("$('.tooltip-login').tooltipster('hide')", 5000); var d = new Date(); d.setFullYear("2030"); document.cookie = "pop_bdgt=" + (b - b) + ";expires=" + d; }} catch (e) { }
        $('.tooltip-click:not(.tooltipstered)').tooltipster($.extend({ trigger: "click" }, tooltipOpts));
        $('.tooltip-bottom:not(.tooltipstered)').tooltipster($.extend({ position: "bottom" }, tooltipOpts));
        $('.tooltip-right:not(.tooltipstered)').tooltipster($.extend({ position: "right" }, tooltipOpts));
        $('.tooltip-left:not(.tooltipstered)').tooltipster($.extend({ position: "left" }, tooltipOpts));
        $('.tooltip-times0:not(.tooltipstered)').tooltipster($.extend({ position: "left",
            content: '<img src="/mobile/include/images/ajax-loader.gif" height="27" width="27" />', updateAnimation: false
            , functionBefore: function (origin, f) {
                f(); $.ajax("/new_rest_times.aspx?restid=" + origin.data("id") + "&addr=" + getCookie("defaultAddress"), {
                    success: function (html) {
                        origin.tooltipster("content", (html=$(html)).filter(".times")); hideLoader();
                        if (html.find(".cur0").length)
                            $(".r" + origin.data("id") + ".t" + (f = html.find(".cur0")).data("tim")).text(f.text()).css('color', '#2a295c');
                        else
                            $(".r" + origin.data("id")).parents(".line").addClass("disabled");
                    }
                });
            }
        }, tooltipOpts));
    }
}
function blinkLimit(div) { div.css("color", "red").fadeOut(200).fadeIn(200); }
function fancybox() {
    $('a.fancybox').each(function () {
        var link = $(this);
        link.fancybox({
            //scrolling: 'yes',
            autoDimensions: false,
            padding: [5, 15, 5, 15],
            wrapCSS: link.attr('href').replace("#", "") + '-fancybox',
            beforeShow: function () {
                var clss = link.attr('href').replace("#", ".") + '-fancybox';
                if ($(clss + ' .customScroll').length > 0)
                    $(clss + ' .customScroll').customScrollbar({ skin: 'default-skin' });
            }
        })
    });
}
function LoginPopup(visible){ $('.popup-login').toggle(); }
function addFav(a, r) {
    var b = a.attr('class').indexOf('active') < 0 ? ["enable", "add_fav_rest", a.addClass('active')] : ["disable", "del_fav_rest", a.removeClass('active')];
    a.tooltipster(b[0]); $.ajax("/new_addfav.aspx?req=" + b[1] + "&rest=" + r);
    args["s"] = Math.floor(Math.random() * 1000);
}
function restRate(rest, rate) { $.ajax("/new_addfav.aspx?req=rest_rate&rest=" + rest + "&rate=" + Math.min(rate,5)); }
function loadAddressesPopup() {
    $("[value='" + getCookie("defaultAddress") + "']").attr("checked", true);
    $("input[type=radio]").change(function () { sbmti(this); });
    $(".frm")[0].action = "/mobile/ChangeAddress.aspx?ref=/new_rests.aspx?" + (location.href.indexOf("prev=1") > 0 ? "prev=1" : (location.href.indexOf("ta=1") > 0 ? "ta=1" : "ta=0"));
    $(".radAddress input").click(function () { tga('משלוחים', 'change address', 'בחירת כתובת'); });
    hideLoader();return false;
}
function go2prev(rest, fav, deal, note, lnk, ta) {
    if ($(lnk).parents(".disabled").length) return; $(lnk).attr("onclick", "");
    if (lnk.className.indexOf("Cancelable_True") >= 0) { $(".id").val(deal); aec('refund', deal); tga('cancel order', 'click cancel order','previous orders'); return submitV(); }
    showLoader(); location = '/rest.aspx?pc=1&prev=1&fav=1&edit=1&RestID=' + rest + '&favId=' + fav + '&ta=' + ta + '&comm=' + encodeURIComponent(note);
}
function go2menu(rest, ta, lnk) {
    var coms = "";
    if ($(lnk).attr("class") == "hand") coms = "&coms=1";
    else if ($(lnk).parents(".disabled").length) return;
    showLoader();
    var val, tim = ""; if ((val = $('.rest-tim').val()) > 0) tim = "&time=" + val;
    var p = ""; if ((val = $(".p").val()) > 0) p = "&p=" + val ;
    var min = ""; if ((val = $('.rest-min option:selected').index()) > 0) min = "&min=" + val;
    var food = ""; if ((val = $('.rest-food').val()) > 0) food = "&food=" + val;
    var city = ""; if ((val = $('.rest-city').val()) > 0) city = "&city=" + val;
    var name = ""; //if ($('.rest-name').length && (val = $('.rest-name').val()) != '') name = "&name=" + encodeURI(val);
    var dish = ""; if ($('.rest-dish').length && (val = $('.rest-dish').val()) != '') dish = "&dish=" + encodeURI(val);
    var sort = ""; if ($('.rest-sort-default:selected').length == 0 && $('.rest-sort').length) sort = "&sort=" + $('.rest-sort option:selected').index();
    var dist = ""; if ($('.rest-dist-default:selected').length == 0 && $('.rest-dist').length) dist = "&dist=" + $('.rest-dist option:selected').index();
    var price = ""; if ($('.rest-price').length) dist = "&price=" + $('.rest-price option:selected').index();
    var kosher = ""; if ($('.rest-kosher input:checked').length > 0) kosher = "&kosher=1";
    var events = ""; if ($('.events-ppl').length && (val = $('.events-ppl').val()) != '') events = "&ppl=" + val;
    var eventFlags = "fav,park,waiters,wifi,dish,hadap,criple,equip,out,cafe,free,smoke,tv,projector,scrn".split(",");
    for (i = 0; i < eventFlags.length; i++) if ($('.events-' + eventFlags[i] + ' input:checked').length > 0) events += "&" + eventFlags[i] + "=1";
    var active = ""; if ($('.rest-active input:not(:checked)').length > 0) active = "&active=0";
    url = "/new_menu.aspx?restId=" + rest + "&cmp=" + getCookie("company_id") + getQarg("fav") + getQarg("fv") + getQarg("h") + getQarg("m") + getQarg("s") + getQarg("xl") + getQarg("mt") + getQarg("weekend") + getQarg("deals") + "&ta=" + ta + p + tim + food + city + min + name + dish + kosher + active + dist + sort + coms + events + price;
    try { window.history.replaceState({}, "", url.replace(/new_menu.aspx\?restId=\d+&cmp=\d+&/, location.pathname + "?")); } catch (e) { ; }
    tec(rest); aec("click", rest);
    if ((typeof event != "undefined" && (event.ctrlKey || event.shiftKey)) || ta == 5) { window.open(url, "ee"); hideLoader(); }
    else location = url;
    return false;
}
var args = {}; try { args = eval("({" + location.search.substr(1).toLowerCase().replace(/&/g, "',").replace(/=/g, ":'") + "'})"); } catch (e) { ; }
function getQarg(key) { return getQarg2(key, "&", "=", ""); }
function getQarg2(key, pre, mid, def) { return key.toLowerCase() in args ? pre + key + mid + args[key.toLowerCase()] : def; }
//cart region:
function addDish2cart(d,success) { //id, name, cat, price, type, mode, cnt
    $.ajax("/mobile/add2cart.aspx?sdId=-1&sdName=&sdPrice=-1&group=-1&dishId=" + d[0] + "&dishName=" + encodeURIComponent(d[1]) + "&cat=" + d[2] + "&price=" + d[3] + "&typ=" + d[4] + "&cnt=" + d[6] + "&user=" + d[7] + "&amount=" + $(".amount").val() + getQarg("restId"), { success: success || function (x) { if ("" == x) submitForm(); else location = "/"; }});
    return false;
}
var addCnt = 0;
function addSide2cart() {
    if (dish[5]) // edit dish mode:
    { if (!addCnt) $.ajax("/mobile/add2cart.aspx?del=1&typ=" + dish[4], { success: addSide2cartAdd }); }
    else //new dish
        addSide2cartAdd();
    return addCnt++ < 0;
}
var ttl, cnt = 0, dish;
function validateAdd(msg, selector) {
    if (!$(".cblst input[type='checkbox'], .cblst input[type='radio']").is(":visible")) return true;
    if ($(".valid").is(":visible")) return $(".valid").hide();
    $(".validMin").hide();
    cnt = ttl = 0;
    var ok = true;
    $(selector).each(function (i, row) {
        ttl++; cnt++;
        ok &= validateAddI(i, msg);
    });
    if (!ok) $(".validMin").show();
    else if (msg && ttl > cnt) $(".valid").show();
    hideLoader();
    return ok && ttl == cnt;
}
function validateAddI(i, msg) {
    var b0 = 0 < $(".pl" + i).html().indexOf('"0.0') || 0 < $(".title" + i).html().indexOf('ללא חיוב');
    var min = $("input[type='hidden'].min" + i).val();
    if (!msg || b0 || min > 0) {
        var tgl = $(".title" + i).css("color", min > 0 ? "red" : "#ff5e58");
        var inps = $(".cbl" + i).find("input:visible:checked");
        if (inps.length < min) return false;
        if (inps.length) tgl.css("color", "green");
        else cnt--;
    }
    return true;
}
var addDone = false;
function addSide2cartAdd() {
    if (addDone || !validateAdd(true, ".fancybox-inner .row")) return addCnt = 0;
    showLoader();
    cnt = ttl = 0;
    var url = "dishId=" + dish[0] + "&dishName=" + encodeURI(dish[1]) + "&cat=" + dish[2] + "&price=" + dish[3] + "&typ=" + dish[4] + "&cnt=" + dish[6] + "&user=" + dish[7] + "&amount=" + $(".amount").val() + getQarg("restId");
    $(".fancybox-inner .row").each(function (i, row) {
        var free = $("input.free" + i).val();
        if (-1 == free) free = 999;
        $(".cbl" + i).find("[type='checkbox'],[type='radio']").each(function (j, inp) {
            if (inp.checked) {
                cnt++; ttl++;
                var name = encodeURI($(inp).next().html().replace(/<\/?[^>]+>/g, ""));
                var id = $(".vl" + i + " label")[j].innerHTML.replace(/<\/?[^>]+>/g, "");
                var price = 1 * $(".pl" + i + " label")[j].innerHTML.replace(/<\/?[^>]+>/g, "");
                url += "&sdId=" + id + "&sdName=" + name.replace(/,/g, ";").replace(/\+/g, "~") + "&sdPrice=" + (--free >= 0 ? 0 : price) + "&group=" + $(row).val();
            }
        });
    });
    if (addDone) return;
    if (ttl) $.ajax("/mobile/add2cart.aspx", { type:'POST', data:url, success:submitForm });
    else addDish2cart(dish);
    addDone = true;
}
function submitV() { $('.v input').click(); return false; }
function submitForm() { $.fancybox.close(); loadCart(); hideLoader(); addDone = false; try { tec(); aec("add"); tga('add to cart', ["משלוחים", "איסוף ממסעדה", , , , "אירועים"][args["ta"]], $(".filter .info .name").text()); } catch (e) { } }
//function doneAdd() { if (--cnt == 0) submitForm(); }
function delDish(typ, success) { showLoader(); $.ajax("/mobile/add2cart.aspx?del=1&typ=" + typ + "&rnd=" + Math.random(), { success: success }); tec(); aec(""); tga('cart', 'click delete dish icon'); }
function editDish(typ, val, success) { showLoader(); $.ajax("/mobile/add2cart.aspx?edit=1&typ=" + typ + "&amount=" + (0 + val), { success: success }); tga('cart', 'change quantity', val); }
var elm = 0;
function loadMenu2(a, eid, cnt, cat, price, typ, skip, ta, amount, owner, token) {
    if ("" != token) return document.getElementById("up").contentWindow.update(eid);
    if (skip) return false;
    showLoader();
    dish = [eid, $(".nam" + eid).val(), cat, 1 * price, typ ? typ : Math.ceil(Math.random() * 10000), typ, cnt, owner];
    if (!cnt) return addDish2cart(dish);
    if (!elm) $(".popups").load("new_menu2.aspx?d=2&eid=" + eid + "&type=" + typ + "&ta=" + ta + getQarg("xl") + "&amount=" + amount + "&rnd=" + Math.random() * typ + " .popup", 0, function (r, s, m) { if ("error" == s) location = "index.html"; else { main(); setCheckbox4Edit(); initSortableSideDishes(); $(a).click(); hideLoader(); } }); else return elm = 0; elm = eid; return false;
}
//end cart region.

rateIt = true; //for rateit plot bug
if (typeof Sys != 'undefined') { //for updatepanel onload:
    $(function () { rateIt = false; Sys.Application.add_load(main); });
    try { Sys.Application.add_load(mainGallery); } catch (e) { }
    try { Sys.Application.add_load(mainTooltip); } catch (e) { }
    setLast(getCookieDef("dlvr_time", 0));
}
else
    $(function () { rateIt = false; main(); });
function toggleRestTab(tab, selector) { $(".content").hide(); $(selector).show(); $(".button").removeClass("active"); $(tab).addClass("active"); return false; }
function setMins(i, a, b) {
    $(".mins").text((a = Math.round(10 * ($(".min")[0].options[i].value - $(".mis")[0].options[i].value)) / 10) > 0 ? "₪" + a : "אין הגבלה").css("color", (b = $(".order-sum").text()) < a ? "red" : "");
    $(".minim")[a > b ? "show" : "hide"]();
    if (a > b) tga('order summary', 'minimum order', a);
    $(".urge,.urge input").prop("disabled", i > 0).prop("checked", false)[i > 0 ? "addClass" : "removeClass"]("disabled");
    if (i) tga('order summary', 'delivery hour selected', getDDLText($(".wit .tim")[0]));
}
function setLast(i,t) {
    if (!$(".tims").length) return;
    if (location.search.indexOf("ta=1") >= 0) $(".pak").text(1800); //take away = 30 mins
    if ($(".tims")[0].options.length > i) {
        $(".tims")[0].selectedIndex = i;
        $(".tim").prop('selectedIndex', i);
        var d = new Date("1/1/1 " + (t = $(".tims")[0].options[i]).text);
        document.cookie = "dlvr_time=" + i;
        d.setMinutes(d.getMinutes() - $(".pack")[0].options[i].value / 60);
        $(".last").text(d.getHours() + ":" + ((d = d.getMinutes()) > 9 ? d : "0" + d));
        $(".curr").text(Math.max(0, t.value));
        if (i > 0) tga('rest info', 'delivery hour selected', t.text);
    }
}
function add_friend(a, user) { $(a).parents(".Xtr").hide(); $(".add").val(user); tga('my account', 'friends permissions', '+'); submitV(); return false; }
function del_friend(a, user) { $(a).parents(".Xtr").hide(); $(".del").val(user); tga('my account', 'friends permissions', 'X'); submitV(); return false; }
function del_me(a, user) { $(a).parents(".Xtr").hide(); $(".me").val(user); submitV(); return false; }
function setSelectedLi(i) { $(".submenu li")[i].className = "active"; $($(".submenu li a")[i]).removeAttr("href"); }
function setAdminUserRepFilter(x) { $('.rpts')[0].value = x; showLoader(); }
function updateCoOwner(dish, typ, user) { showLoader(); $.ajax("/mobile/add2cart.aspx?frnd=1&dishId=" + dish + "&typ=" + typ + "&user=" + user, { success: hideLoader }); if (user > 0) tga('cart','click add friend icon'); }
//start new_ajax_service region
function delUser(user, act) { showLoader(); $.ajax("/new_ajax_service.aspx?delUser=1&user=" + user + "&act=" + act, { success: function (msg) { if (msg == "") $(".usr" + user).attr("class", "usr" + user + " del" + act).find("[type=checkbox]").prop("checked", act); else alert(msg); hideLoader(); } }); return false; }

function updateGroup(user, grp) { showLoader(); $.ajax("/new_ajax_service.aspx?setGrp=1&user=" + user + "&grp=" + grp, { success: function (msg) { if (msg != "") alert(msg); hideLoader(); } }); return false; }
function loginAs(login, cmp) { showLoader(); $.ajax("/new_ajax_service.aspx?loginAs=1&user=" + encodeURI(login) + "&cmp=" + encodeURI(cmp), { success: function (msg) { if (msg != "") alert(msg); else location = "indexcbd8.html?js=1"; hideLoader(); } }); return false; }
//end new_ajax_service region

function resetPass(user, lnk) { $.ajax("/new_ajax_service.aspx?resetPass=1&user=" + user, { success: function (msg) { $(lnk).tooltipster('content', '<table><tr><td><blue>' + msg.replace(', ', '<br/>') + '</blue></td></tr></table>'); } }); return false; } //$(lnk).tooltipster();
function loadEditUser(a, user) { showLoader(); if (!elm) $(".popups").load("/new_admin/new_admin_users_ifrm.aspx?act=" + (user > 0 ? "edit" : "add") + "&user_id=" + user, 0, function () { a.click(); hideLoader(); }); else return elm = 0; elm = user; return false; }
function invalid(f, msg) {
    if ($(".msg").length) $(".msg").text(msg).css("color", "red"); else alert(msg);
    f.css("border-color", "red").fadeOut(200).fadeIn(200).focus().change(function () { $(this).css("border-color", ""); });
    return false;
}
function getBlogPosts(lnk, catid) {
    if ("button active" == lnk.className) return false;
    showLoader();
    $(".products").load("/new_blog_posts.aspx" + (location.search == "" ? "?" : location.search) + "&catid=" + catid, 0, function (a) { fancybox(); hideLoader(); try { FB.XFBML.parse($(".products")[0]); } catch (e) { }; if (a = getQarg2("blog", "#", "", 0)) $('[href="' + a + '"]').click(); args["blog"] = 0; });
    $(".button.active").removeClass("active");
    $(lnk).addClass("active");
    return false;
}
var userId = 0;
var bound = false;
function decode(uri) { return decodeURIComponent(uri).replace(/\+/g,' '); }
if (typeof Sys != "undefined")
Sys.Application.add_load(function (a) {
    bound = false;
    loadCart();
    $(".full-name").html(decode(getCookie("fullname")));
    if ("" != (a = getCookie("scard"))){ $(".s-card").html(" [" + a + "]"); $(".scard-img").attr("title", "מספר כרטיס: " + getCookie("scard") + "").show(); }
    if ("N" != getCookieDef("budget_type", "N")) { $(".bdg").html(decode(getCookie("bdgt"))).attr("title", ((a = getCookie("cycle")) > 1 ? "עד " + (a - 1) + " לחודש" : "")); $.ajax("/new_ajax_service.aspx?getBdgt=1", { success: function (a) { if (isNaN(a)) location = "index.html"; else $(".bdg").html(a); } }); }
    $(".user .logo img").attr("src", decode(getCookie("companyLogo", "/images/company_logo/1.1")).replace("/1.1", "blank.html"));
    if (2 > getCookie("user_type")) $(".admin").hide();
    if (1 > getCookie("events_type")) $(".events").hide();
    if (!("ta" in args) || args["ta"] < 5)
        $("ul.topx").load("/new_sidebar/new_top_rests.aspx?req=get_top_x_rests&topx=5&addr=" + getCookie("defaultAddress") + "&cmp=" + getCookie("company_id") + getQarg("h") + getQarg("m") + getQarg("s") + getQarg("ta") + " .top-rest", 0, function () { if ($("ul.topx li").length) $(".block").show('slide', { direction: 'up' }); });
    $("ul.topx_cmp").load("/new_sidebar/new_top_rests.aspx?req=get_top_x_rests_cmp&topx=10&cmp=" + getCookie("company_id") + " .top-rest");
    if (!("token" in args)) $(".menu_prev").load("/new_menu_prev.aspx" + location.search + "&token=" + getCookie("token"), 0, function () { if (cnt = $(".reorder").length) { $(".prev .cnt").text("(" + cnt + ")"); $(".prev").show(); } });
    if (!("token" in args)) $(".menu_coms").load("/new_menu_recommend.aspx" + location.search + "&cnt=" + getCookieDef("added_comm",0)*Math.random(), 0, function () { if (cnt = $(".menu_coms .comment").length) { $(".coms .cnt").text("(" + cnt + ")"); }; main(); });
    if (3 < getCookie("events_type")) $(".menu_lows").load("/new_menu_lows.aspx" + location.search + "&cnt=" + $(".lowsCnt").val(), 0, function () { if (cnt = $(".menu_lows .comment").length) { $(".lows .cnt").text("(" + cnt + ")"); $(".lows").show(); }; main(); });
    if (!("token" in args)) $(".menu_disco").load("/new_sidebar/new_rest_discounts.aspx" + location.search);
    if (!("token" in args)) $(".menu_about").load("/new_menu_about.aspx" + location.search, 0, function () {
        if ($(".map-src").val().indexOf("q=-1,-1") > 0) $(".t2 .map").hide();
        else try { $(".map").attr("src", $(".map-src").val()); } catch (e) { }
        mainAbout();
    });
    if (!("token" in args)) $.ajax('/new_rest_favs.aspx?u=' + getCookie("token"), { success: function (html) { eval(html); loadFavs(); } });
    markedRests = ",";
    if (0 < getCookie("hom_addr_id")) {
        $(".swap-hom-biz").show();
        $(".hd.hom.off").attr("title", fixAddressText(decode(getCookie("hom_addr"))));
        $(".hd.biz.off").attr("title", fixAddressText(decode(getCookie("biz_addr"))));
    }
    eval($(".no-res").val());
    $("#glassix-widget-launcher").click(function () { tga('chat', 'click chat button', 'agent'); });
});
function loadFavs() {
    var favs = getCookie("favs").split(",");
    for (i = 1; i < favs.length - 1; i++)
        if (favs[i] > 0) $('.heart' + favs[i]).addClass("active");
        else $('.heart' + -favs[i]).removeClass("active");
}
function loadCart() {
    $('.cart-icon').toggle();
    $('.cart-count').html('');
    $(".menu_cart").load("/new_sidebar/new_cart.aspx" + location.search + "&rnd=" + Math.random() + " .all-cart", 0, function () {
        $(".cart_amount").mask("0000");
        $('.user').each(function () { if (this.title != "") this.value = this.title; this.title = ""; });
        $('.cart-count').html(cnt = $('.cart-row').length);
        if (!cnt) $('.all-cart').hide();
        $('.cart-icon').toggle();
        $(".menu .sidebar_right li:not(.mndt0)").each(function (cat) {
            cat = $(this).find(".cat").val();
            $(this).find(".mndt").val(cat = ($(this).find(".orig").val() - $(".cart-row." + cat).length));
            if (0 < cat) $(this).removeClass("mndtOK"); else $(this).addClass("mndtOK");
        });
    });
}
function ifActiveOrders(func) {
    //var i = document.cookie.indexOf('hasOrders=');
    //if (i < 0) {
        $.ajax("/new_ajax_service.aspx?hasOrders=1", {
            success: function (msg) {
                //var d = new Date();
                //d.setTime(d.getTime() + 30000); // 30sec
                //document.cookie = "hasOrders=" + msg + ";expires=" + d.toUTCString() + ";path=/";
                if (msg == 1) func();
            }
        });
    //}
    //else if (document.cookie.charAt(i + 10) == '1') func();
}
$(function () {
    if (0 < getCookieDef("kosher", 0)) $('.rest-kosher input[type=checkbox]:not(:checked)').click();
    ifActiveOrders(function () {
        $("#notification").
            html('יש לך הזמנה פעילה<br/><a style="letter-spacing:.03em" href="/new_my/new_my_orders.aspx" onclick="tga(\'active order\',\'click active order\')">לפרטים לחץ כאן</a>').
            on('click', function () { $("#notification").html('') });
    });
});
function validOrder(a, b) {
    if (a && (a = $(".ttl-sum")).text() * 1 < (b = $(".curr").text() * 1)) return invalid(a, "מינימום הזמנה ₪" + b);
    if ((a = $(".menu .sidebar_right li:not(.mndt0):not(.mndtOK)").click()).length) return invalid(a, "תפריט זה מכיל מנות חובה");
    a = 0; $(".cart_amount").each(function () { a += (1 * this.value); });
    if (a < (b = $(".min").val())) return invalid($(".cart_amount"), "יש לבחור לפחות " + b + " מנות");
    if (a > (b = $(".max").val()) && b > 0) return confirm("במסעדה זו יש הגבלה של עד " + b + " משתתפים. האם להמשיך?");
    return true;
}
function go2order() { showLoader(); tec(); aec('checkout',0,1); tga('cart', 'click continue to payment button'); location = getQarg2("ref", 0, 0, 0) ? decodeURIComponent(args["ref"]) : location.href.replace('menu.aspx', 'order.aspx'); return false; }
$("body").keyup(function (e) { if (e.keyCode == 27) { parent.$.fancybox.close(); hideLoader(); } });
if (typeof showLoader == "undefined") showLoader = function () { $(".ui-loader").show(); }
if (typeof hideLoader == "undefined") hideLoader = function () { $(".ui-loader").hide(); }
if (typeof getCookie == "undefined") getCookie = function () { return ""; }
function clearPlaceHolder() { $(".filter input,.filter textarea").each(function () { if (this.outerHTML.indexOf(" placeholder=\"" + this.value + "\"") > 0) this.value = ""; }); }
function filter(filterSelector,expr) {
    expr = $(".fltr").val().toLowerCase().split(" ");
    $(filterSelector).removeClass("hid");
    for (i = expr.length - 1; i >= 0; i--)
        $(filterSelector + ":contains(" + expr[i] + ")").show();
    for (i = expr.length - 1; i >= 0; i--)
        $(filterSelector + ":not(:contains(" + expr[i] + "))").hide().addClass("hid");
}
var markedRests = ",";
function markRest(r, t) {
    if ($(".rst" + r).data("tim") < t)
        if (markedRests.indexOf("," + r + ",") < 0) {
            $.ajax("/new_rest_currs.aspx?restId=" + r + "&addr=" + getCookie("defaultAddress"), { success: function (html) { if (html != "") $(".list.rest .line .price .line1.rst" + r).html(html); } });
            markedRests += r + ",";
        } return r;
}
function updtCom(id) { showLoader(); $.ajax("/new_ajax_service.aspx?updtCom=1&id=" + id + "&txt=" + encodeURI($(".com" + id).val()), { success: function (msg) { if (msg != "") alert(msg); else location = location + "&s=0"; } }); return false; }
function fixDDCL() { $(".ui-dropdownchecklist-dropcontainer-wrapper").css("left", 0); }
function round(dec, val) { return Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec); }
function isOverflown(element) { return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth; }
function tga(cat, act, lbl, val) { try { ga('send', { 'hitType': 'event', 'eventCategory': cat, 'eventAction': act, 'eventLabel': lbl || '', 'eventValue': val || 0 }); } catch (e) { ; } return true; }
function tec(rid, vrb) {
    try {
        ga(vrb || 'ec:addProduct', {
            'id': rid || args["restid"]
            , 'name': $(".filter .info .name,.id" + rid + " .name").text()
            , 'category': $(".filter .kitchen,.id" + rid + " .info .text .plus").text().replace("מטבח: ", "")
            , 'brand': ($(".filter .info .address").text() + ",").split(",")[1].trim() + $(".id" + rid + " .location .plus").text()
            , 'variant': getListName()
            , 'list': getListName() + " " + getSubListName()
            , 'position': Math.max(args["restid"] > 0, $(".pager > span > * + span").text()) * 20 - $(".id" + rid + " ~ div.line").length
            , 'price': $("span.sum").text()
            , 'quantity': $(".dish-tbl .dish").length
        });
    } catch (e) { ; } return true;
}
function aec(act,id,step,sum) {
    ga('ec:setAction', act, {
        'step': step || 0
        ,'list': getListName() + " " + getSubListName()
        , 'id': id || $(".order-id").text()
        , 'revenue': sum || '0'
        , 'delivery fee': '0'
    }); return true;
}
function spv() { ga('send', 'pageview'); }
function getListName() { return $(".round_buttons a.active span").data("text"); }
function getSubListName(a) { if (undefined == (a = $(".rest-links .button.active").data("text"))) return getCookie("sublist"); else setCookie("sublist", a); return a; }
function getDDLText(ddl) { return ddl.options[ddl.selectedIndex].text; } var slctr1 = 'input:checked';
$.fn.extend({ blink: function (a) { return $(this).fadeOut().fadeIn(); } });
function validateEmail(email) { return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(String(email).toLowerCase()); }
