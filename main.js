// Wróżba Noworoczna Main.js
    let war_1_plec = document.getElementById('plec');
    let war_2_stan = document.getElementById('stan');
    let war_3_status = document.getElementById('status')
    let zodiak = document.getElementById('zodiak')
    let wiek = document.getElementById('wiek')
    let wybor;

    if (war_1_plec == "kobieta" && war_2_stan == "wolna_wolny" && war_3_status == "student") wybor = "kw1";
    else if (war_1_plec == "kobieta" && war_2_stan == "wolna_wolny" && war_3_status == "pracuje") wybor = "kw2";
    else if (war_1_plec == "kobieta" && war_2_stan == "wolna_wolny" && war_3_status == "szuka_pracy") wybor = "kw3";
    
    else if (war_1_plec == "kobieta" && war_2_stan == "mezatka_zonaty" && war_3_status == "student") wybor = "kr1";
    else if (war_1_plec == "kobieta" && war_2_stan == "mezatka_zonaty" && war_3_status == "pracuje") wybor = "kr2";
    else if (war_1_plec == "kobieta" && war_2_stan == "mezatka_zonaty" && war_3_status == "szuka_pracy") wybor = "kr3";

    else if (war_1_plec == "kobieta" && war_2_stan == "nieformalny" && war_3_status == "student") wybor = "kn1";
    else if (war_1_plec == "kobieta" && war_2_stan == "nieformalny" && war_3_status == "pracuje") wybor = "kn2";
    else if (war_1_plec == "kobieta" && war_2_stan == "nieformalny" && war_3_status == "szuka_pracy") wybor = "kn3";


    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolna_wolny" && war_3_status == "student") wybor = "mw1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolna_wolny" && war_3_status == "pracuje") wybor = "mw2";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolna_wolny" && war_3_status == "szuka_pracy") wybor = "mw3";
    
    else if (war_1_plec == "mezczyzna" && war_2_stan == "mezatka_zonaty" && war_3_status == "student") wybor = "mr1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "mezatka_zonaty" && war_3_status == "pracuje") wybor = "mr2";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "mezatka_zonaty" && war_3_status == "szuka_pracy") wybor = "mr3";

    else if (war_1_plec == "mezczyzna" && war_2_stan == "nieformalny" && war_3_status == "student") wybor = "mn1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "nieformalny" && war_3_status == "pracuje") wybor = "m22";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "nieformalny" && war_3_status == "szuka_pracy") wybor = "m33";  

