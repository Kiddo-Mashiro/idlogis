window.onload = function() {
    window.onscroll = function() { progressBar() };
};

function progressBar() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById("myBar").style.width = scrollPercentage + "%";
}

