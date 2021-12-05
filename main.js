// Wróżba Noworoczna Main.js
    let war_1_plec = document.getElementById('plec');
    let war_2_stan = document.getElementById('stan');
    let war_3_status = document.getElementById('status')
    let zodiak = document.getElementById('zodiak')
    let wiek = document.getElementById('wiek')
    let wybor;

   /* 
   function ktora_wrozba(){
   let ....
    if (war_1_plec == "kobieta" && war_2_stan == "wolny" && war_3_status == "student") wybor = "kw1";
    else if (war_1_plec == "kobieta" && war_2_stan == "wolny" && war_3_status == "pracuje") wybor = "kw2";
    else if (war_1_plec == "kobieta" && war_2_stan == "wolny" && war_3_status == "szuka_pracy") wybor = "kw3";
    
    else if (war_1_plec == "kobieta" && war_2_stan == "zajety" && war_3_status == "student") wybor = "kr1";
    else if (war_1_plec == "kobieta" && war_2_stan == "zajety" && war_3_status == "pracuje") wybor = "kr2";
    else if (war_1_plec == "kobieta" && war_2_stan == "zajety" && war_3_status == "szuka_pracy") wybor = "kr3";

    else if (war_1_plec == "kobieta" && war_2_stan == "zwiazek" && war_3_status == "student") wybor = "kn1";
    else if (war_1_plec == "kobieta" && war_2_stan == "zwiazek" && war_3_status == "pracuje") wybor = "kn2";
    else if (war_1_plec == "kobieta" && war_2_stan == "zwiazek" && war_3_status == "szuka_pracy") wybor = "kn3";


    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolny" && war_3_status == "student") wybor = "mw1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolny" && war_3_status == "pracuje") wybor = "mw2";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "wolna_wolny" && war_3_status == "szuka_pracy") wybor = "mw3";
    
    else if (war_1_plec == "mezczyzna" && war_2_stan == "zajety" && war_3_status == "student") wybor = "mr1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "zajety" && war_3_status == "pracuje") wybor = "mr2";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "zajety" && war_3_status == "szuka_pracy") wybor = "mr3";

    else if (war_1_plec == "mezczyzna" && war_2_stan == "zwiazek" && war_3_status == "student") wybor = "mn1";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "zwiazek" && war_3_status == "pracuje") wybor = "mn2";
    else if (war_1_plec == "mezczyzna" && war_2_stan == "zwiazek" && war_3_status == "szuka_pracy") wybor = "mn3"; 
    
    return ....
    }
    */ 

    function opracuj_wrozbe(wynik){
        let par1 = war_1_plec.value;
        let par2 = war_2_stan.value;
        let par3 = war_3_status.value;
        if (par1 == "" || par2 == "" || par3 == "") wynik = "Nie podałeś istotnych parametrów";
         //else .... wynik = ktora_wrozba();
        return wynik;
    }

    function wyswietl_wrozbe(){
        document.getElementById("wrozba").innerHTML = opracuj_wrozbe();
    }
