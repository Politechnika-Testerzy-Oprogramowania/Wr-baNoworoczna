// Wróżba Noworoczna Main.js

   function ktora_wrozba(){

        let par1w = document.getElementById('plec').value;
        let par2w = document.getElementById('stan').value;
        let par3w = document.getElementById('status').value;
        let wybor, wybor2, wybor3;
        
            if (par1w == "kobieta") wybor = "kw1";
            else  (par1w == "mezczyzna") wybor = "kw2";
           
            if (par2w == "zajety") wybor2 = "kr1";
            else if (par2w == "wolny") wybor2 = "kr2";
            else if (par2w == "zwiazek") wybor2 = "kr3";

            if (par3w == "student") wybor3 = "kn1";
            else if (par3w == "pracuje") wybor3 = "kn2";
            else if (par3w == "szuka_pracy") wybor3 = "kn3";
      
            /* if (par1w == "kobieta" && par2w == "wolny" && par3w == "student") wybor = "kw1";
            else if (par1w == "kobieta" && par2w == "wolny" && par3w == "pracuje") wybor = "kw2";
            else if (par1w == "kobieta" && par2w == "wolny" && par3w == "szuka_pracy") wybor = "kw3";

            else if (par1w == "kobieta" && par2w == "zajety" && par3w == "student") wybor = "kr1";
            else if (par1w == "kobieta" && par2w == "zajety" && par3w == "pracuje") wybor = "kr2";
            else if (par1w == "kobieta" && par2w == "zajety" && par3w == "szuka_pracy") wybor = "kr3";

            else if (par1w == "kobieta" && par2w == "zwiazek" && par3w == "student") wybor = "kn1";
            else if (par1w == "kobieta" && par2w == "zwiazek" && par3w == "pracuje") wybor = "kn2";
            else if (par1w == "kobieta" && par2w == "zwiazek" && par3w == "szuka_pracy") wybor = "kn3";


            else if (par1w == "mezczyzna" && par2w == "wolny" && par3w == "student") wybor = "mw1";
            else if (par1w == "mezczyzna" && par2w == "wolny" && par3w == "pracuje") wybor = "mw2";
            else if (par1w == "mezczyzna" && par2w == "wolny" && par3w == "szuka_pracy") wybor = "mw3";

            else if (par1w == "mezczyzna" && par2w == "zajety" && par3w == "student") wybor = "mr1";
            else if (par1w == "mezczyzna" && par2w == "zajety" && par3w == "pracuje") wybor = "mr2";
            else if (par1w == "mezczyzna" && par2w == "zajety" && par3w == "szuka_pracy") wybor = "mr3";

            else if (par1w == "mezczyzna" && par2w == "zwiazek" && par3w == "student") wybor = "mn1";
            else if (par1w == "mezczyzna" && par2w == "zwiazek" && par3w == "pracuje") wybor = "mn2";
            else if (par1w == "mezczyzna" && par2w == "zwiazek" && par3w == "szuka_pracy") wybor = "mn3"; */ 
    
    return wybor, wybor2, wybor3;
    }
    
    function twojWiek(){
        let data_dzis=new Date();
        let data_uzytkownika= document.getElementById('urodziny').value;
        let wiek = data_dzis - data_uzytkownika;
        wiek = Math.floor(wiek/(1000*360*60*60*24));
    }
    function opracuj_wrozbe(){
        let war_1_plec = document.getElementById('plec').value;
        let war_2_stan = document.getElementById('stan').value;
        let war_3_status = document.getElementById('status').value;
        let zodiak = document.getElementById('zodiak').value;
        let wiek = document.getElementById('wiek').value;
        let wynik;
        if (war_1_plec == "" || war_2_stan == "" || war_3_status == "" || zodiak == "")  {wynik = "Nie podałeś wszystkich parametrów, spróbuj jeszcze raz"}
        else {wynik = "Drogi/a  " + zodiak + " masz już " + twojWiek + " lat, a rok 2022 szykuje dla Ciebie masę niespodzianek. " + ktora_wrozba()};
        return wynik;
    }

    function wyswietl_wrozbe(){
        document.getElementById("wrozba").innerHTML = opracuj_wrozbe();
    }
