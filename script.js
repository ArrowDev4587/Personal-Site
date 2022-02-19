var ayem = document.getElementById("ayem");
var see_pro = document.getElementById("see-pro");
var see_pro_a = document.getElementById("see-pro-a");
var istiklal_bot = document.getElementById("istiklal-bot");
var istiklal_site = document.getElementById("istiklal-site");
var overwatch_bot = document.getElementById("overwatch-bot");
var ture_web = document.getElementById("ture-web");


var icon = document.getElementById("dil");

dil.onclick = function(){
    ayem.innerHTML = "Ben";
    see_pro.innerHTML = "Projelerimi";
    see_pro_a.innerHTML = "gör.";
    istiklal_bot.innerHTML = "İstiklal Gaming CS 1.6 Sunucusu için yapılmış discord botu.";
    istiklal_site.innerHTML = "İstiklal Gaming CS 1.6 Sunucusu için yapılmış websitesi.";
    overwatch_bot.innerHTML = "Eğlence için yapılmış bir discord botu.";
    ture_web.innerHTML = "Ture Software için yapılmış destek ve bilgi sitesi. ";
}


var icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme")
}

