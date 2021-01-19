window.focus();

document.onkeydown = function(e) {
    var $a = document.querySelectorAll("a");
    for (var i = 0;i < $a.length;i++) {
        if (e.code == $a.getAttribute("code")) {
            window.location.href = $a.getAttribute("href");
        }
    }
}
