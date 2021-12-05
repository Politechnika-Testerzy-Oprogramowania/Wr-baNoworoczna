// Wróżba Noworoczna Main.js
    let war_1_plec = document.getElementById('plec');
    let war_2_stan = document.getElementById('stan');
    let war_3_status = document.getElementById('status')
    let zodiak = document.getElementById('zodiak')
    let wiek = document.getElementById('wiek')

   /* 
   function ktora_wrozba(){
        let wybor
        let par1w = war_1_plec.value;
        let par2w = war_2_stan.value;
        let par3w = war_3_status.value;
        
            if (par1w == "kobieta" && par2w == "wolny" && par3w == "student") wybor = "kw1";
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
            else if (par1w == "mezczyzna" && par2w == "zwiazek" && par3w == "szuka_pracy") wybor = "mn3"; 
    
    return ....
    }
    */ 

    function opracuj_wrozbe(){
        let wynik;
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
