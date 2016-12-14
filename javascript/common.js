function play(numS, numE) {
    audio.currectTime = 0;
    //audio.defaultPlaybackRate = 0.1;
    audio.play();
    numS = numS + 1;
    if (numS < numE) {
        setTimeout("play(" + numS + "," + numE + ")", 1500);
    }
}

function playHint() {
    audioHint.currectTime = 0;
    //alert(audioHint.readyState);
    if (audioHint.readyState != 0) {
        audioHint.play();

        audioHint.addEventListener('ended', function () {
            $("a.btn2").show();
        }, false);
    } else {
        $("a.btn2").show();
    }
}

function getValue(str) {
    var url = location.href;
    var theRequest = new Object();
    var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
    if (url.indexOf("?") != -1) {
        for (var i = 0; i < paraString.length; i++) {
            theRequest[paraString[i].split("=")[0]] = unescape(paraString[i].split("=")[1]);
        }
    }

    return theRequest[str];
}

function usual_search(data, key) {

    var m = data.length;
    for (i = 0; i < m; i++) {
        if (data[i].ID == key) {
            return i
        }
    }
}

function usual_search2(data, key) {
    var m = data.length;
    for (i = 0; i < m; i++) {
        if (data[i].id == key) {
            return i
        }
    }
}

function printSize(data, pid, callback) {
    var comments = [];
    for (var i = 0,
    len = newsJSON.length; i < len; i++) {
        if (newsJSON[i].categoryId == pid) {
            comments.push(newsJSON[i]);
        }
    }

    var xx = comments.length;
    if (callback) callback(xx);
}

function f_control_num2(num, comments, testSize) {
    if (num > 0) {
        var comments2 = [];
        for (i = 0; i <= testSize - 1; i++) {
            comments2.push(comments[i]);
        }
        comments = comments2;
    }
    return comments;
}

//alert(sliptEn("English"));
function sliptEn(str) {
    //var str = "English";
    var temp = "";
    for (var i = 0; i < str.length - 2; i++) {
        temp += " _ ";
    }
    return str.replace(/(\w)[\s\S]*(\w)/g, "$1" + temp + "$2");
    //alert(str);
}

$(".f_showBtn").click(function () {
    $("#btnPart").show();
});

function onbeforeunload_handler() {
    var warning = "Warning:";
    return warning;
}

$(function () {
    $(document).keydown(function (event) {
        if ((event.altKey && event.keyCode == 83)) {
            //在这里接收的是Alt+S事件,S的ASCII码为83。
            //alert( $("#btnPart a:not(:hidden)").length );
            if ($("#btnPart a:not(:hidden)").length == 1) {
                $("#btnPart a:not(:hidden)").click();
            }
        }
    });
});