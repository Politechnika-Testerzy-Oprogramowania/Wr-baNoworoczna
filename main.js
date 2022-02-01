// Wróżba Noworoczna Main.js

function plec(){
    let par1w = document.getElementById('plec').value;
    let wybor;
        if (par1w == "kobieta") wybor = (baza_kobieta[Math.floor(Math.random()*4)]);
        else if (par1w == "mezczyzna") wybor = (baza_mezczyzna[Math.floor(Math.random()*4)]);
    return wybor;
}
function stan(){
    let par2w = document.getElementById('stan').value;
    let wybor2;
        if (par2w == "zajety") wybor2 = wybor = (baza_zajety[Math.floor(Math.random()*3)]);
        else if (par2w == "wolny") wybor2 = (baza_wolny[Math.floor(Math.random()*3)]);
        else if (par2w == "zwiazek") wybor2 = (baza_zwiazek[Math.floor(Math.random()*3)]);
    return wybor2;
}
function status(){
    let par3w = document.getElementById('status').value;
    let wybor3;
        if (par3w == "student") wybor3 = (baza_student[Math.floor(Math.random()*3)]);
        else if (par3w == "pracuje") wybor3 = (baza_pracuje[Math.floor(Math.random()*3)]);
        else if (par3w == "szuka_pracy") wybor3 = wybor3 = (baza_szuka_pracy[Math.floor(Math.random()*3)]);
    return wybor3;
}

function twojWiek(){
    let data_dzis = new Date();
    let d1 = data_dzis.getYear() +1900;
    let data_uzytkownika = new Date(document.getElementById('urodziny').value);
    let d2 = data_uzytkownika.getYear() + 1900;
    let wiek = d1 - d2;
    return wiek;
}
function opracuj_wrozbe(){
    let war_1_plec = document.getElementById('plec').value;
    let war_2_stan = document.getElementById('stan').value;
    let war_3_status = document.getElementById('status').value;
    let zodiak = document.getElementById('zodiak').value;
    let urodziny = document.getElementById('urodziny').value;
    let wynik;
    if (war_1_plec == "" || war_2_stan == "" || war_3_status == "" || zodiak == "" || urodziny == "")  {wynik = "Nie podałeś wszystkich parametrów, spróbuj jeszcze raz"}
    else if (twojWiek() < 5) {wynik = "Oszukujesz, nie masz jeszcze 5 lat. Poczekaj aż dorośniesz"}
    else {wynik = "Drogi(a)  " + zodiak + " masz już " + twojWiek() + " lat(a), a rok 2022 szykuje dla Ciebie masę niespodzianek. "+ "</br></br>" + plec()+ "</br></br>" + stan() + "</br></br>" + status ()};
    return wynik;
}

function wyswietl_wrozbe(){
    document.getElementById("wrozba").innerHTML = opracuj_wrozbe();
}
