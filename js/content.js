window.onload = function()
{
    setTimeout(add, 2000);
    var jq = document.createElement('script');
    jq.src = "https://code.jquery.com/jquery-3.4.1.min.js";
    document.getElementsByTagName('head')[0].appendChild(jq);
};