window.focus();

document.onkeydown = function(e) {
    var $a = document.querySelectorAll("a");
    for (var i = 0;i < $a.length;i++) {
        if (e.key == $a.getAttribute("key")) {
            window.location.href = $a.getAttribute("href");
        }
    }
}
