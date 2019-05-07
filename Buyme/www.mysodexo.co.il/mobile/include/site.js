function sumTable(cls,sum) {
    $(cls).each(function () {  sum += (1 * this.innerText);  });
    $(cls + "-sum").text(sum.toFixed(2));
}
var locked = false;
function toggleEllipsis(a) {
    if (locked) return locked = false;
    try { a = $(a).find(".plus")[0]; } catch (e) { }
    if (a.style.whiteSpace == "normal") {
        a.style.whiteSpace = "nowrap";
        a.innerHTML = a.innerHTML.replace("minus", "plus");
    }
    else {
        a.style.whiteSpace = "normal";
        a.innerHTML = a.innerHTML.replace("plus", "minus");
    }
}
function isEllipsisActive(a) {
    e = $(a).find(".plus")[0];
    if (e && e.offsetWidth > a.offsetWidth)
        if (e.innerHTML.indexOf("plus.html") < 0)
            e.innerHTML = "<img src='/images/plus.png' width='14' height='14' align='top' /> " + e.innerHTML;
}
var rowCnt, queryS, pageIndex = 1, path = location.pathname;
function showLoader() { $(".ui-loader").show(); }
function hideLoader() { $(".ui-loader").hide(); }
function sbmt() { showLoader(); document.forms[0].submit(); }
function sbmti(b) { showLoader(); b.form.submit(); }
function loadMore(b) {
    showLoader();
    if (b) b.disabled = true;
    var url = "?page=" + pageIndex + queryS;
    $(".lastRow").last().load(path + url + " #tblGrid", 0, function (html) { pageIndex++; $(".ui-loader").hide(); disableHref(); });
    if(b)b.disabled = (rowCnt <= $(".grid").length);
    return false;
}
function getCookieDef(cname, def) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return decodeURIComponent(c.substring(name.length, c.length)).replace(/\+/g, " ");
    }
    return def;
}
function getCookie(cname) { return getCookieDef(cname, ""); }
function setCookieExp(cname, value, d) { document.cookie = cname + "=" + value + ";expires=" + d; }
function setCookie(cname, value) { var d = new Date(); d.setFullYear("2030"); setCookieExp(cname, value, d); }
function cancelBubble(e) {
    var evt = e ? e : window.event;
    if (evt.stopPropagation) evt.stopPropagation();
    if (evt.cancelBubble != null) evt.cancelBubble = true;
    return false;
}
function isErrEmail(e) {
    var at = e.indexOf("@");
    var dt = e.lastIndexOf(".");
    return at < 1 || dt < at + 2 || dt + 2 >= e.length;
}
function isErrTZ(e,tz) { //or passport
    if (isNaN(e)) return true;
    if (e.length > 9 || e.length < 5) return true;
    while (e.length < 9) e = "0" + e;
    if (tz) tz.val(e);
    var mone = 0, incNum;
    for (var i = 0; i < 9; i++) {
        incNum = e.charAt(i);
        incNum *= (i % 2) + 1;
        if (incNum > 9) incNum -= 9;
        mone += incNum;
    }
    return mone % 5;
}
function fixAddr() { loadAutocomplete(); $(".radAddress label").each(function () { fixAddress($(this)); }); }
function fixHD() {
    var rads = $(".radAddress input");
    var lbls = $(".radAddress label");
    if (1 == rads.length) rads.click();
    if (!$("select.slct").length) return;
    var biz = $("select.slct-biz")[0];
    var hom = $("select.slct-hom")[0];
    for (h = 0, b = 0, i = 0; i < rads.length; i++)
        if (lbls[i].className.indexOf("home") < 0)
            biz.options[b++] = new Option($(lbls[i]).text(), rads[i].value, rads[i].checked, rads[i].checked);
        else
            hom.options[h++] = new Option($(lbls[i]).text(), rads[i].value, rads[i].checked, rads[i].checked);
    $("select.slct-biz").val(b = getCookie("biz_addr_id"));
    $("span.slct-biz").text($("select.slct-biz option[value='" + b + "']").text());
    $("select.slct-hom").val(h = getCookie("hom_addr_id"));
    $("span.slct-hom").text($("select.slct-hom option[value='" + h + "']").text());
    $(".popup .title,.radAddress,.sbmt").hide(); $(".popup .bike,select.mob-hid.hid").show();
    $("#switch_address,.switch_address-fancybox .fancybox-skin").css("padding", 0).css("margin", 0);
    $(".hd-btn .ui-btn").addClass("ui-disabled");
    if (h == getCookie("defaultAddress")) $('.frm img.hd').toggle();
}
function setAddr(isHD, ddl) { if (!(ddl = $(ddl).parents("tr").next().find("select")).find("option").length) return; showLoader(); location = '/mobile/ChangeAddress.aspx?addr=' + ddl.val() + "&address=" + encodeURIComponent(ddl.find("option:selected").text()) + (isHD ? ", HD_" : ""); }
function swapAddr(isHD, del) { showLoader(); location = '/mobile/ChangeAddress.aspx?del=' + del + '&addr=' + getCookie((isHD = (isHD ? "hom_addr" : "biz_addr") + del) + "_id") + "&address=" + encodeURIComponent(getCookie(isHD)); return false }
function setRads(obj) { $(".radAddress input[value=" + obj.value + "]").click(); }
function fixAddress(x, r) {
    if (x.text().indexOf(", HD_") > 0) x.addClass(r = "home");
    x.text(fixAddressText(x.text()));
    return r == "home";
}
function fixAddressText(x, t, a, b, i) {
    t = x.replace(/,\s+ישראל\s+/, " ").replace(/,\s+Israel\s*/, " ").replace("None", "").replace(", HD_", ", ").replace(/\s+,\s+/g, ", ");
    a = t.split(", "); b = a.pop(); a = a.join(", "); b = b.split(" ");
    for (i = 0; i < b.length - 1; i++) if (a.indexOf(b[i] + " " + b[i + 1]) >= 0) b[i] = b[i + 1] = "";
    if (!i && a.indexOf(b) >= 0) b[0] = "";
    return (a + ", " + b.join(" ")).replace(/,\s*$/, "").replace(/-\s*$/, "").replace(/^\s*,\s*/, "");
}
jQuery.extend({ getValues: function (url) { var result = null; $.ajax({ url: url, type: 'get', dataType: 'json', async: false, success: function (data) { result = data; } }); return result; } });
var ACSelector;
function loadAutocompleteSelector(acs, callback) { ACSelector = acs; $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyByPyZ2ghB0CQtmArdfKytnTADCX-MTWPg&libraries=places&language=he&callback=" + (callback || "initAutocomplete")); }
function loadAutocomplete() { loadAutocompleteSelector(".home-addr"); }
function initAutocomplete(callback) {
    new google.maps.places.Autocomplete($(ACSelector)[0]).changed = callback || function (v) {
        v = ($('.home-addr').val() + $('.home-addr-pop').val()).replace("undefined","");
        var r = $.getValues("https://maps.googleapis.com/maps/api/geocode/json?language=he&key=AIzaSyAuZpk0wMRAMRAGOdDQnE7Fnd2ExssAQu4&address=" + encodeURIComponent(v));
        if (r == null) return;
        var coords = r["results"][0].geometry.location;
        if (!/\d/.test(v) && !(r["results"][0].types[0] == "street_address" || r["results"][0].types[0] == "locality")) return;
        var a_c = r["results"][0].address_components;
        for (i = 0; i < a_c.length; i++)
            if (a_c[i].types[0] == "locality") { city = a_c[i].long_name; break }
        if (!/\d/.test(v))
            (new google.maps.places.AutocompleteService()).getPlacePredictions({ input: city + " רחוב" }, function (p, status) {
                if (status == "OK" && JSON.stringify(p).indexOf(city)>0) { $(".lat").val(""); $(".sbmt-addr").addClass("disabled"); $(".hd-btn .ui-btn").addClass("ui-disabled") } });
        $(".lat").val(coords.lat); $(".lng").val(coords.lng); $(".cty").val(city); $(".sbmt-addr").removeClass("disabled"); $(".hd-btn .ui-btn").removeClass("ui-disabled");
    }
}
function initZipcodeByAddress() { initAutocomplete(getZipByAddr); }
function getZipcodeByAddress(city, street, num, entrance) {
    $.ajax("https://www.israelpost.co.il/zip_data.nsf/SearchZip?OpenAgent&Location=" + city.trim() + "&Street=" + street.trim() + "&House=" + num.trim() + "&Entrance=" + (entrance || "").trim(), {
        success: function (x) {
            x = (x + "RES8").split(/RES\d/)[1].split("\n")[0];
            if (7 === x.length)
                $(".zipcode").val(x);
            else
                $(".entrance").focus();
        }
    });
}
function getZipByAddress(addr, entrance) { //המלאכה 5, נתניה, ישראל
    addr = addr.split(", ");
    var st = addr[0].split(" ");
    var num = st.pop();
    st = st.join(" ");
    getZipcodeByAddress(addr[1], st, num, entrance);
    $(".city").val(addr[1]);
    $(".street").val(st);
    $(".street-num").val(num);
}
function getZipByAddr() {
    getZipByAddress($(".addr").val(), $(".entrance").val());
}
function main() {
    sumTable(".oc", 0); sumTable(".ac", 0); sumTable(".bc", 0); sumTable(".cc", 0); sumTable(".dc", 0);
    $('.ui-btn').addClass('ui-shadow');
    $('.fixed-table').each(function (a) { isEllipsisActive(this); });
    //$('.loc').text(location.search);
    $('.CanCancel_True').text("בטל הזמנה").click(function () { showLoader(); location = 'lastorders.aspx?cancel=' + this.title; });
    //$('li .ui-btn').attr("class", "ui-btn ui-btn-icon-left ui-icon-carat-l ui-shadow");
    disableHref();
}
function disableHref() { $(".disabled a").removeAttr("href"); }
if (typeof Sys != 'undefined') Sys.Application.add_load(main);//for updatepanel onload
$(main); //for window onload
$(document).on("pageinit", main);
if (typeof confirm == 'undefined') confirm = function () { return true; }
$(document).on("scrollstart", function () { $("body").addClass("h100"); });
