var serverPath = "";
var bName = navigator.appName;
var bVer = parseInt(navigator.appVersion);
var NS4 = bName == "Netscape" && bVer >= 4;
var IE4 = bName == "Microsoft Internet Explorer" && bVer >= 4;
var OPR = bName == "Opera" && bVer >= 9;
var bSameDomain = false;
var bLocalDomain = location.href.substring(0, 5) == "file:";
var charset = "tc";
var q9win = 0;
var lastInitControl = 0;
var isQ9StrokeOpened = 0;
var isQ9Opened = 0;
var isPYOpened = 0;
var isCYOpened = 0;
var previousActTextBox = "";
var isQ9BorderOn = false;
var isQ9BackgroundOn = true;
var Q9BackgroundColor = "";
var curIME = "";
var curIMEBtn = "";
var releaseQ9 = true;
var curTextElement = "";
var prevScrollTop = 0;
jQuery(document).ready(function() {
    if (OPR) {
        NS4 = OPR;
    }
    jQuery("#q9StrokeButton").attr("src", serverPath + "btn/stroke1.gif");
    jQuery("#q9StrokeGBButton").attr("src", serverPath + "btn/GBstroke1.gif");
    jQuery("#q9Q9Button").attr("src", serverPath + "btn/q91.gif");
    jQuery("#q9CYButton").attr("src", serverPath + "btn/zy1.gif");
    jQuery("#q9PYButton").attr("src", serverPath + "btn/py1.gif");
    jQuery("#q9StrokeButton").mouseover(function() {
        Q9MouseOver("q9StrokeButton", "stroke");
    });
    jQuery("#q9StrokeButton").mouseout(function() {
        Q9MouseOut("q9StrokeButton", "stroke");
    });
    jQuery("#q9StrokeButton").mousedown(function() {
        Q9MouseDown("q9StrokeButton", "stroke");
    });
    jQuery("#q9StrokeGBButton").mouseover(function() {
        Q9MouseOver("q9StrokeGBButton", "strokeGB");
    });
    jQuery("#q9StrokeGBButton").mouseout(function() {
        Q9MouseOut("q9StrokeGBButton", "strokeGB");
    });
    jQuery("#q9StrokeGBButton").mousedown(function() {
        Q9MouseDown("q9StrokeGBButton", "strokeGB");
    });
    jQuery("#q9PYButton").mouseover(function() {
        Q9MouseOver("q9PYButton", "py");
    });
    jQuery("#q9PYButton").mouseout(function() {
        Q9MouseOut("q9PYButton", "py");
    });
    jQuery("#q9PYButton").mousedown(function() {
        Q9MouseDown("q9PYButton", "py");
    });
    jQuery("#q9CYButton").mouseover(function() {
        Q9MouseOver("q9CYButton", "cy");
    });
    jQuery("#q9CYButton").mouseout(function() {
        Q9MouseOut("q9CYButton", "cy");
    });
    jQuery("#q9CYButton").mousedown(function() {
        Q9MouseDown("q9CYButton", "cy");
    });
    jQuery("#q9Q9Button").mouseover(function() {
        Q9MouseOver("q9Q9Button", "q9");
    });
    jQuery("#q9Q9Button").mouseout(function() {
        Q9MouseOut("q9Q9Button", "q9");
    });
    jQuery("#q9Q9Button").mousedown(function() {
        Q9MouseDown("q9Q9Button", "q9");
    });
    ///*
    jQuery("input").focusin(function() {
        curTextElement = jQuery(this);
        if (!releaseQ9) {
            if (previousActTextBox != "") {
                textBoxEffectOff();
            }
            if (jQuery(this).attr("type") != "button") {
                var name = jQuery(this).attr("name");
                var id = "";
                var parent = jQuery(this).parent();
                if (jQuery(this).attr("id") == null || jQuery(this).attr("id") == "") {
                    while (parent.get(0) != null && parent.get(0).tagName != "body") {
                        if (parent.attr("name") != null) {
                            name = parent.attr("name") + "." + name;
                        } else if (
                            parent.get(0).tagName.toUpperCase() == "TD" ||
                            parent.get(0).tagName.toUpperCase() == "TR" ||
                            parent.get(0).tagName.toUpperCase() == "TABLE" ||
                            parent.get(0).tagName.toUpperCase() == "TBODY" ||
                            parent.get(0).tagName.toUpperCase() == "THEAD" ||
                            parent.get(0).tagName.toUpperCase() == "LI" ||
                            parent.get(0).tagName.toUpperCase() == "UL" ||
                            parent.get(0).tagName.toUpperCase() == "OL" ||
                            parent.get(0).tagName.toUpperCase() == "DIV" ||
                            parent.get(0).tagName.toUpperCase() == "CENTER" ||
                            parent.get(0).tagName.toUpperCase() == "P" ||
                            parent.get(0).tagName.toUpperCase() == "B" ||
                            parent.get(0).tagName.toUpperCase() == "SPAM"
                        ) {} else {
                            break;
                        }
                        var temp = parent.parent();
                        parent = temp;
                    }
                    if (name != null) {
                        SetQ9WWW(id, name);
                        if (NS4) {
                            if (
                                jQuery("#q9frame").css("visibility") == "visible" &&
                                isQ9BorderOn
                            ) {
                                textBoxBorderEffect(jQuery(this), 0);
                                //jQuery("#q9ime").focus()
                            }
                            if (
                                jQuery("#q9frame").css("visibility") == "visible" &&
                                isQ9BackgroundOn
                            ) {
                                textBoxBackgroundEffect(jQuery(this), 0);
                                //jQuery("#q9ime").focus()
                            }
                        } else {
                            if (
                                jQuery("#q9frame").css("visibility") == "visible" &&
                                isQ9BorderOn
                            ) {
                                textBoxBorderEffect(jQuery(this), 2);
                            }
                            if (
                                jQuery("#q9frame").css("visibility") == "visible" &&
                                isQ9BackgroundOn
                            ) {
                                textBoxBackgroundEffect(jQuery(this), 2);
                            }
                            setTimeout(function() {
                                if (jQuery("#q9frame").css("visibility") == "visible") {
                                    jQuery(this).disabled = true;
                                    var x = document.getElementById("q9ime");
                                    var y = x.contentWindow || x.contentDocument;
                                    if (y.document) {
                                        y = y.document;
                                    }
                                    //y.body.focus()
                                } else {
                                    jQuery(this).disabled = false;
                                }
                            }, 20);
                        }
                    }
                } else {
                    SetQ9WWW(jQuery(this).attr("id"), "");
                    if (NS4) {
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BorderOn
                        ) {
                            textBoxBorderEffect(jQuery(this), 0);
                            //jQuery("#q9ime").focus()
                        }
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BackgroundOn
                        ) {
                            textBoxBackgroundEffect(jQuery(this), 0);
                            //jQuery("#q9ime").focus()
                        }
                    } else {
                        var tempid = jQuery(this).attr("id");
                        setTimeout(function() {
                            if (jQuery("#q9frame").css("visibility") == "visible") {
                                if (isQ9BorderOn) {
                                    textBoxBorderEffect(tempid, 1);
                                }
                                if (isQ9BackgroundOn) {
                                    textBoxBackgroundEffect(tempid, 1);
                                }
                                jQuery(this).disabled = true;
                                var x = document.getElementById("q9ime");
                                var y = x.contentWindow || x.contentDocument;
                                if (y.document) {
                                    y = y.document;
                                }
                                //y.body.focus()
                            } else {
                                jQuery(this).disabled = false;
                            }
                        }, 20);
                    }
                }
            }
        }
    });
    jQuery("input").focusout(function() {
        if (!NS4 || !OPR) {
            jQuery(this).disabled = false;
        }
    });
    jQuery("textarea").focusin(function() {
        if (!releaseQ9) {
            if (previousActTextBox != "") {
                textBoxEffectOff();
            }
            var name = jQuery(this).attr("name");
            var id = "";
            var parent = jQuery(this).parent();
            if (jQuery(this).attr("id") == null || jQuery(this).attr("id") == "") {
                while (parent.get(0) != null && parent.get(0).tagName != "body") {
                    if (parent.attr("name") != null) {
                        name = parent.attr("name") + "." + name;
                    } else if (
                        parent.get(0).tagName.toUpperCase() == "TD" ||
                        parent.get(0).tagName.toUpperCase() == "TR" ||
                        parent.get(0).tagName.toUpperCase() == "TABLE" ||
                        parent.get(0).tagName.toUpperCase() == "TBODY" ||
                        parent.get(0).tagName.toUpperCase() == "THEAD" ||
                        parent.get(0).tagName.toUpperCase() == "LI" ||
                        parent.get(0).tagName.toUpperCase() == "UL" ||
                        parent.get(0).tagName.toUpperCase() == "OL" ||
                        parent.get(0).tagName.toUpperCase() == "DIV" ||
                        parent.get(0).tagName.toUpperCase() == "CENTER" ||
                        parent.get(0).tagName.toUpperCase() == "P" ||
                        parent.get(0).tagName.toUpperCase() == "B" ||
                        parent.get(0).tagName.toUpperCase() == "SPAM"
                    ) {} else {
                        break;
                    }
                    var temp = parent.parent();
                    parent = temp;
                }
                if (name != null) {
                    SetQ9WWW(id, name);
                    if (NS4) {
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BorderOn
                        ) {
                            textBoxBorderEffect(jQuery(this), 0);
                            //jQuery("#q9ime").focus()
                        }
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BackgroundOn
                        ) {
                            textBoxBackgroundEffect(jQuery(this), 0);
                            // jQuery("#q9ime").focus()
                        }
                    } else {
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BorderOn
                        ) {
                            textBoxBorderEffect(jQuery(this), 2);
                        }
                        if (
                            jQuery("#q9frame").css("visibility") == "visible" &&
                            isQ9BackgroundOn
                        ) {
                            textBoxBackgroundEffect(jQuery(this), 2);
                        }
                        setTimeout(function() {
                            if (jQuery("#q9frame").css("visibility") == "visible") {
                                jQuery(this).disabled = true;
                                var x = document.getElementById("q9ime");
                                var y = x.contentWindow || x.contentDocument;
                                if (y.document) {
                                    y = y.document;
                                }
                                //y.body.focus()
                            } else {
                                //jQuery(this).disabled = false
                            }
                        }, 20);
                    }
                }
            } else {
                SetQ9WWW(jQuery(this).attr("id"), "");
                if (NS4) {
                    if (
                        jQuery("#q9frame").css("visibility") == "visible" &&
                        isQ9BorderOn
                    ) {
                        textBoxBorderEffect(jQuery(this), 0);
                        jQuery("#q9ime").focus();
                    }
                    if (
                        jQuery("#q9frame").css("visibility") == "visible" &&
                        isQ9BackgroundOn
                    ) {
                        textBoxBackgroundEffect(jQuery(this), 0);
                        jQuery("#q9ime").focus();
                    }
                } else {
                    var tempid = jQuery(this).attr("id");
                    setTimeout(function() {
                        if (jQuery("#q9frame").css("visibility") == "visible") {
                            if (isQ9BorderOn) {
                                textBoxBorderEffect(tempid, 1);
                            }
                            if (isQ9BackgroundOn) {
                                textBoxBackgroundEffect(tempid, 1);
                            }
                            jQuery(this).disabled = true;
                            var x = document.getElementById("q9ime");
                            var y = x.contentWindow || x.contentDocument;
                            if (y.document) {
                                y = y.document;
                            }
                            //y.body.focus()
                        } else {
                            jQuery(this).disabled = false;
                        }
                    }, 20);
                }
            }
        }
    });
    jQuery("textarea").focusout(function() {
        if (!NS4 || !OPR) {
            // jQuery(this).disabled = false
        }
    });
    jQuery("#q9frame").hide().draggable({
        handle: "#q9drag",
    });
    //*/
    var windowLeft = (jQuery("body").width() - 300) / 2; //20180916 default left
    var temp =
        jQuery("#q9frame").attr("style") +
        "; left:" +
        windowLeft +
        "px; top:10px;position:absolute; z-index:65535; height:308px; width:216px;";
    jQuery("#q9frame").attr("style", temp);
    jQuery("#q9frame").append(
        "<div id='q9drag'><div id='q9close' value='X' onclick='closeQ9();'></div></div><div id='blank' style='display:block; position:absolute; top:10px; left:0px; width:216px; height:290px; z-index:65534; background:#000000; opacity:0.3; visibility:hidden;'></div><iframe id='q9ime' scrolling='no' frameBorder='0'></iframe>"
    );
    if (IE4) {
        jQuery("head").append(
            "<STYLE>#q9close{height:20px; width:20px; border-style:none; border-width:0px; margin-left:195px; cursor:pointer; background: url(grx/close.png); vertical-align:text-top; text-align: left; position:relative; top:0px; left:0px;}#q9ime {border: 0px solid #ffffff; height:288px; width:217px; margin: 0px 0px 0px 0px;} #q9drag{cursor:move; width:217px; height:20px; background: top left no-repeat url('" +
            serverPath +
            "grx/top.png'); position: relative; top:0px; left:0px; margin: 0px 0px 0px 0px;} #q9frame{background:#FFFFFF; width:217px; height:310px; visibility:hidden; margin: 0px 0px 0px 0px;}</STYLE>"
        );
    } else {
        jQuery("head").append(
            "<STYLE>#q9close{height:20px; width:20px; border-style:none; border-width:0px; margin-left:195px; cursor:pointer; background: url(grx/close.png); vertical-align:text-top; text-align: left; position:relative; top:0px; left:0px;}#q9ime {border: 0px solid #ffffff; height:288px; width:217px; margin: 0px 0px 0px 0px;} #q9drag{cursor:move; width:220px; height:20px; background: top left no-repeat url('" +
            serverPath +
            "grx/top.png'); position: relative; top:0px; left:0px; margin: 0px 0px 0px 0px;} #q9frame{background:#FFFFFF; width:220px; height:310px; visibility:hidden; margin: 0px 0px 0px 0px;}</STYLE>"
        );
    }
    if (NS4) {
        jQuery("#q9frame").click(function() {
            jQuery("#q9ime").focus();
        });
    } else {
        if (jQuery("#q9frame").css("visibility") == "visible") {
            jQuery("#q9frame").click(function() {
                window.frames[0].document.body.focus();
            });
        }
    }
    document.onkeydown = document.onkeypress = function(evt) {
        if (typeof evt == "undefined") {
            evt = window.event;
        }
        if (evt) {
            var keyCode = evt.keyCode ? evt.keyCode : evt.charCode;
            if (keyCode === evt.DOM_VK_BACK_SPACE || keyCode === evt.DOM_VK_DELETE) {
                if (q9win == 0) {
                    return true;
                } else if (q9win.getAttribute("src") == "") {
                    return true;
                } else {
                    return false;
                }
            }
            if (keyCode == 8) {
                /*201809160504 allow Backspace
                                if (q9win == 0) {
                                    return true
                                } else if (q9win.getAttribute("src") == "") {
                                    return true
                                } else {
                                    return false
                                }*/
            } else if (evt.shiftKey == 1) {
                if (releaseQ9 == false) {
                    releaseQ9 = !releaseQ9;
                    jQuery("#blank").css("visibility", "visible");
                    previousActTextBox.disable = false;
                    previousActTextBox.focus();
                    textBoxEffectOff();
                } else {
                    releaseQ9 = !releaseQ9;
                    jQuery("#blank").css("visibility", "hidden");
                    previousActTextBox.disable = true;
                    if (NS4) {
                        jQuery("#q9ime").focus();
                    } else {
                        window.frames[0].document.body.focus();
                    }
                    if (
                        jQuery("#q9frame").css("visibility") == "visible" &&
                        isQ9BorderOn
                    ) {
                        textBoxBorderEffect(previousActTextBox, 2);
                    }
                    if (
                        jQuery("#q9frame").css("visibility") == "visible" &&
                        isQ9BackgroundOn
                    ) {
                        textBoxBackgroundEffect(previousActTextBox, 2);
                    }
                }
            } else {
                return true;
            }
        }
        return true;
    };
    jQuery(window).scroll(function() {
        if (jQuery("#q9frame").css("visibility") == "visible") {
            var top = jQuery("#q9frame")
                .css("top")
                .substr(0, jQuery("#q9frame").css("top").indexOf("px"));
            if (
                top < document.body.scrollTop + 10 ||
                prevScrollTop > document.body.scrollTop
            ) {
                jQuery("#q9frame").css("top", document.body.scrollTop + 10 + "px");
                prevScrollTop = document.body.scrollTop;
            }
        }
    });
});

function Q9MouseOver(id, IMEType) {
    if (IMEType == "stroke" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/stroke2.gif");
    } else if (IMEType == "q9" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/q92.gif");
    } else if (IMEType == "py" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/py2.gif");
    } else if (IMEType == "cy" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/zy2.gif");
    } else if (IMEType == "strokeGB" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/GBstroke2.gif");
    }
}

function Q9MouseOut(id, IMEType) {
    if (IMEType == "stroke" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/stroke1.gif");
    } else if (IMEType == "q9" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/q91.gif");
    } else if (IMEType == "py" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/py1.gif");
    } else if (IMEType == "cy" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/zy1.gif");
    } else if (IMEType == "strokeGB" && IMEType != curIME) {
        $("#" + id).attr("src", serverPath + "btn/GBstroke1.gif");
    }
}

function Q9MouseDown(id, IMEType) {
    if (curIME == "stroke" || curIME == "strokeGB") {
        try {
            $("#" + cutIMEBtn).attr("src", serverPath + "btn/stroke1.gif");
            $("#" + "q9StrokeGBButton").attr("src", serverPath + "btn/GBstroke1.gif");
        } catch (error) {
            $("#" + "q9StrokeGBButton").attr("src", serverPath + "btn/GBstroke1.gif");
        }
    } else if (curIME == "q9") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/q91.gif");
    } else if (curIME == "py") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/py1.gif");
    } else if (curIME == "cy") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/zy1.gif");
    }
    if (IMEType == "stroke" || IMEType == "strokeGB") {
        try {
            $("#" + IMEType).attr("src", serverPath + "btn/stroke3.gif");
            $("#" + "q9StrokeGBButton").attr("src", serverPath + "btn/GBstroke3.gif");
        } catch (error) {
            $("#" + "q9StrokeGBButton").attr("src", serverPath + "btn/GBstroke3.gif");
            alert("");
        }
    } else if (IMEType == "q9") {
        $("#" + id).attr("src", serverPath + "btn/q93.gif");
    } else if (IMEType == "py") {
        $("#" + id).attr("src", serverPath + "btn/py3.gif");
    } else if (IMEType == "cy") {
        $("#" + id).attr("src", serverPath + "btn/zy3.gif");
    }
    curIME = IMEType;
    cutIMEBtn = id;
}

function textBoxBorderEffect(target, option) {
    if (option == 0 || option == 2) {
        temp = target.attr("style");
        if (temp == "undefined" || temp == null) {
            temp = "";
        }
        target.attr(
            "style",
            temp +
            "border-bottom: #4f8d97 1px solid; border-left: #3f7d97 1px solid; border-top: #324d66 1px solid; border-right: #3f7d97 1px solid; padding:2px;"
        );
        previousActTextBox = target;
    }
    if (option == 1) {
        if (target != "") {
            temp = jQuery("#" + target).attr("style");
            if (temp == "undefined" || temp == null) {
                temp = "";
            }
            jQuery("#" + target).attr(
                "style",
                temp +
                "border-bottom: #4f8d97 1px solid; border-left: #3f7d97 1px solid; border-top: #324d66 1px solid; border-right: #3f7d97 1px solid;"
            );
            previousActTextBox = jQuery("#" + target);
        }
    }
}

function textBoxBackgroundEffect(target, option) {
    if (option == 0 || option == 2) {
        temp = target.attr("style");
        if (temp == "undefined" || temp == null) {
            temp = "";
        }
        target.attr(
            "style",
            temp + ";background-color: " + Q9BackgroundColor + ";"
        );
        previousActTextBox = target;
    }
    if (option == 1) {
        if (target != "") {
            temp = jQuery("#" + target).attr("style");
            if (temp == "undefined" || temp == null) {
                temp = "";
            }
            jQuery("#" + target).attr(
                "style",
                temp + ";background-color: " + Q9BackgroundColor + ";"
            );
            previousActTextBox = jQuery("#" + target);
        }
    }
}

function textBoxEffectOff() {
    curTextElement = "";
    if (NS4) {
        previousActTextBox.attr("style", "");
    } else {
        if (previousActTextBox.attr("id") != "") {
            previousActTextBox.attr("style", "");
        } else {
            previousActTextBox.attr("style", "");
        }
    }
}

function closeQ9() {
    if (curIME == "stroke") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/stroke1.gif");
    } else if (curIME == "q9") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/q91.gif");
    } else if (curIME == "py") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/py1.gif");
    } else if (curIME == "cy") {
        $("#" + cutIMEBtn).attr("src", serverPath + "btn/zy1.gif");
    }
    textBoxEffectOff();
    jQuery("#q9ime").attr("src", "");
    jQuery("#q9frame").hide();
    jQuery("#q9frame").css("visibility", "hidden");
    if (!NS4 || !OPR) {
        jQuery("textarea").each(function() {
            jQuery(this).disabled = false;
        });
        jQuery("input").each(function() {
            jQuery(this).disabled = false;
        });
    }
    releaseQ9 = true;
}

function OpenQ9(targetControl, serverURL) {
    releaseQ9 = false;
    if (charset == "sc") {
        thePage = "q9.htm";
    } else {
        thePage = "q9.htm";
    }
    q9win = document.getElementById("q9ime");
    q9win.setAttribute("src", "");
    setTimeout(function() {
        q9win.setAttribute(
            "src",
            serverURL +
            thePage +
            "#charset=" +
            charset +
            "&targetControl=" +
            targetControl
        );
    }, 1);

    jQuery("#q9frame").show();
    jQuery("#q9frame").css("visibility", "visible");
    if (NS4 && bVer < 5) {
        layerref = 'layers["q9dataLayer"].document.layers["q9dataFrame"]';
    } else if (!NS4) {
        layerref = "q9dataFrame";
    }
}

function GetQ9WinTarget() {
    if (q9win != 0) {
        if (NS4) {
            if (bVer >= 5) {
                return q9win.contentWindow.document.q9form.targetcontrol.value;
            } else {
                return q9win.contentWindow.document.q9char.document.q9form.targetcontrol
                    .value;
            }
        } else {
            return q9win.contentWindow.document.all.q9form.targetcontrol.value;
        }
    } else {
        return null;
    }
}

function SetQ9WinTarget(targetControl) {
    if (q9win != 0) {
        if (GetQ9WinTarget() == "") {
            ForceSetQ9WinTarget(targetControl);
        }
    }
}

function ForceSetQ9WinTarget(targetControl) {
    if (NS4) {
        if (bVer >= 5) {
            q9win.contentWindow.document.q9form.targetcontrol.value = targetControl;
        } else {
            q9win.contentWindow.document.q9char.document.q9form.targetcontrol.value = targetControl;
        }
    } else {
        q9win.contentWindow.document.all.q9form.targetcontrol.value = targetControl;
    }
}

function OpenSpecialQ9Win(charsetName, inputType, targetControl) {
    OpenQ9WWW(charsetName, inputType, "", targetControl);
}

function OpenQ9WWW(charsetName, inputType, targetLayer, targetControl) {
    if (!(IE4 || NS4 || OPR)) {
        alert("This version need IE4 or NS4");
    } else {
        if (previousActTextBox != "") {
            textBoxEffectOff();
        }
        if (targetLayer != "" && isQ9BorderOn) {
            if (NS4) {
                textBoxBorderEffect(jQuery("#" + targetLayer), 0);
            } else {
                textBoxBorderEffect(jQuery("#" + targetLayer), 0);
                previousActTextBox = jQuery("#" + targetLayer);
            }
        }
        if (targetLayer != "" && isQ9BackgroundOn) {
            if (NS4) {
                textBoxBackgroundEffect(jQuery("#" + targetLayer), 0);
            } else {
                textBoxBackgroundEffect(jQuery("#" + targetLayer), 0);
                previousActTextBox = jQuery("#" + targetLayer);
            }
        }
        if (targetControl != "" && isQ9BorderOn) {
            eval(
                "document." +
                targetControl +
                ".style.borderBottom = '#4f8d97 1px solid'"
            );
            eval(
                "document." + targetControl + ".style.borderLeft = '#3f7d97 1px solid'"
            );
            eval(
                "document." + targetControl + ".style.borderRight = '#3f7d97 1px solid'"
            );
            eval(
                "document." + targetControl + ".style.borderTop = '#324d66 1px solid'"
            );
            eval("document." + targetControl + ".style.padding = '3px'");
            tempText = targetControl;
            tempPointer = targetControl.indexOf(".");
            if (tempPointer > 0 && tempPointer < tempText.length) {
                tempText = tempText.substr(tempPointer + 1);
                tempPointer = tempText.indexOf(".");
            }
            previousActTextBox = jQuery("[name=" + tempText + "]");
        }
        if (targetControl != "" && isQ9BackgroundOn) {
            eval(
                "document." +
                targetControl +
                ".style.backgroundColor = '" +
                Q9BackgroundColor +
                "';"
            );
            tempText = targetControl;
            tempPointer = targetControl.indexOf(".");
            if (tempPointer > 0 && tempPointer < tempText.length) {
                tempText = tempText.substr(tempPointer + 1);
                tempPointer = tempText.indexOf(".");
            }
            previousActTextBox = jQuery("[name=" + tempText + "]");
        }
        targetControl = SetTargetObject(targetLayer, targetControl);
        if (charsetName.toUpperCase() == "sc") {
            charset = "sc";
        } else {
            charset = "tc";
        }
        if (q9win != 0) {
            if (q9win.getAttribute("src") != "") {
                SetQ9WinTarget(targetControl);
            } else {
                q9win = 0;
                isQ9StrokeOpened = 0;
                isQ9Opened = 0;
                isPYOpened = 0;
                isCYOpened = 0;
            }
        }
        if (inputType.toUpperCase() == "PY") {
            if (isQ9Opened == 1 || isCYOpened == 1 || isQ9StrokeOpened == 1) {
                CloseQ9Win();
            }
            if (isPYOpened == 0) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "py/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "pysc/");
                }
            }
            if (isPYOpened == 1) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "py/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "pysc/");
                }
            }
            isQ9StrokeOpened = 0;
            isQ9Opened = 0;
            isPYOpened = 1;
            isCYOpened = 0;
        } else if (inputType.toUpperCase() == "Q9") {
            if (isPYOpened == 1 || isCYOpened == 1 || isQ9StrokeOpened == 1) {
                CloseQ9Win();
            }
            if (isQ9Opened == 0) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "q9/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "q9sc/");
                }
            }
            if (isQ9Opened == 1) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "q9/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "q9sc/");
                }
            }
            isQ9StrokeOpened = 0;
            isPYOpened = 0;
            isQ9Opened = 1;
            isCYOpened = 0;
        } else if (inputType.toUpperCase() == "Q9STROKE") {
            if (isPYOpened == 1 || isCYOpened == 1 || isQ9Opened == 1) {
                CloseQ9Win();
            }
            if (isQ9StrokeOpened == 0) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "q9stroke/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "q9strokesc/");
                }
            }
            if (isQ9StrokeOpened == 1) {
                if (charset == "tc") {
                    OpenQ9(targetControl, serverPath + "q9stroke/");
                } else if (charset == "sc") {
                    OpenQ9(targetControl, serverPath + "q9strokesc/");
                }
            }
            isQ9StrokeOpened = 1;
            isPYOpened = 0;
            isQ9Opened = 0;
            isCYOpened = 0;
        } else {
            if (isQ9Opened == 1 || isPYOpened == 1 || isQ9StrokeOpened == 1) {
                CloseQ9Win();
            }
            if (isQ9Opened == 0) {
                OpenQ9(targetControl, serverPath + "cy/");
            }
            if (isQ9Opened == 1) {
                OpenQ9(targetControl, serverPath + "cy/");
            }
            isQ9StrokeOpened = 0;
            isPYOpened = 0;
            isQ9Opened = 0;
            isCYOpened = 1;
        }
    }
    if (jQuery("#q9frame").css("visibility") == "visible") {
        jQuery("#q9frame").css("top", document.body.scrollTop + 120 + "px"); //20180916 default top
        setTimeout(function() {
            if (NS4) {
                jQuery("#q9ime").focus();
            } else {
                if (jQuery("#q9frame").css("visibility") == "visible") {
                    var x = document.getElementById("q9ime");
                    var y = x.contentWindow || x.contentDocument;
                    if (y.document) y = y.document;
                    y.body.focus();
                }
            }
        }, 700);
    }
}

function SetQ9Target(target) {
    targetObject = target.form.name + "." + target.name;
    SetQ9WWW("", targetObject);
}

function SetQ9WWW(targetLayer, targetObject) {
    if (q9win != 0) {
        if (q9win.getAttribute("src") != "") {
            targetObject = SetTargetObject(targetLayer, targetObject);
            ForceSetQ9WinTarget(targetObject);
        } else {
            q9win = 0;
            isQ9Opened = 0;
            isPYOpened = 0;
            isQ9StrokeOpened = 0;
            isCYOpened = 0;
        }
    }
}

function SetTargetObject(targetLayer, targetObject) {
    if (targetLayer != "") {
        if (NS4) {
            if (bVer >= 5) {
                if (targetLayer == "") {
                    targetObject = targetObject;
                } else {
                    targetObject = "#" + targetLayer;
                }
            } else {
                if (targetLayer == "") {
                    targetObject = "layers." + targetLayer + ".document." + targetObject;
                } else {
                    targetObject = "#" + targetLayer;
                }
            }
        } else {
            if (targetLayer == "") {
                targetObject = "all." + targetLayer + ".document." + targetObject;
            } else {
                targetObject = "#" + targetLayer;
            }
        }
    }
    return targetObject;
}

function CloseQ9Win() {
    if (q9win != 0) {
        if (NS4) {
            if (q9win.getAttribute("src") != "") {
                q9win.setAttribute("src", "");
            }
        } else {
            while (q9win.getAttribute("src") != "") {
                q9win.setAttribute("src", "");
            }
        }
        q9win = 0;
        isQ9StrokeOpened = 0;
        isPYOpened = 0;
        isQ9Opened = 0;
        isCYOpened = 0;
    }
}

function dobackspace() {
    var target = curTextElement;
    if (target != "") {
        tempText = target.value;
        var a = tempText.length;
        a = a - 1;
        if (tempText.charCodeAt(a) == 10 || tempText.charCodeAt(a) == 13) {
            a = a - 1;
        }
        tempText = tempText.substr(0, a);
        target.value = tempText;
    }
}