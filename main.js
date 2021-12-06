// Wróżba Noworoczna Main.js

function plec(){
    let par1w = document.getElementById('plec').value;
    let wybor;
    
        if (par1w == "kobieta") wybor = "Super, jesteś kobietą.";
        else if (par1w == "mezczyzna") wybor = "Fajnie, jesteś facetem.";
    return wybor;
}
function stan(){
    let par2w = document.getElementById('stan').value;
    let wybor2;
        if (par2w == "zajety") wybor2 = "Brawo, przebywasz w formalnym związku.";
        else if (par2w == "wolny") wybor2 = "Cieszysz się życiem jako singiel.";
        else if (par2w == "zwiazek") wybor2 = "Jesteś w wolnym związku, papierek nie ma dla ciebie znaczenia.";
    return wybor2;
}
function status2(){
    let par3w = document.getElementById('status').value;
    let wybor3;
        if (par3w == "student") wybor3 = "Studenckie życie to jest to.";
        else if (par3w == "pracuje") wybor3 = "Pracujesz - prowadzisz stabilne życie.";
        else if (par3w == "szuka_pracy") wybor3 = "Spełniasz marzenia szukając nowych szans.";
    return wybor3;
}

function twojWiek(){
    let data_dzis = new Date();
    let d1 = data_dzis.getYear() + 1900;
    let data_uzytkownika = new Date(document.getElementById('urodziny').value);
    let d2 = data_uzytkownika.getYear() + 1900;
    let wiek = d1 - d2;
console.log(wiek);
return wiek;
}
function opracuj_wrozbe(){
    let war_1_plec = document.getElementById('plec').value;
    let war_2_stan = document.getElementById('stan').value;
    let war_3_status = document.getElementById('status').value;
    let zodiak = document.getElementById('zodiak').value;
    let wynik;
    if (war_1_plec == "" || war_2_stan == "" || war_3_status == "" || zodiak == "")  {wynik = "Nie podałeś wszystkich parametrów, spróbuj jeszcze raz"}
    else {wynik = "Drogi/a  " + zodiak + " masz już " + twojWiek() + " lat, a rok 2022 szykuje dla Ciebie masę niespodzianek. "+ "</br></br>" + plec()+ "</br></br>" + stan() + "</br></br>" + status2 ()};
    return wynik;
}

function wyswietl_wrozbe(){
    document.getElementById("wrozba").innerHTML = opracuj_wrozbe();
}
