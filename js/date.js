
window.onload = setInterval(currentDate, 1000);
function currentDate() {

    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();

    let montharr = ['Sausio', 'Vasario', 'Kovo', 'Balandžio', 'Gegužės', 'Birželio', 'Liepos', 'Rugpjūčio', 'Rugsėjo', 'Spalio', 'Lapkričio', 'Gruodžio'];
        month = montharr[month];
  
    let year = d.getFullYear();
  
    let day = d.getDay();
    let dayarr = ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Trečiadienis', 'Ketvirtadienis', 'Penktadienis', 'Šeštadienis'];
        day = dayarr[day];

    document.getElementById("data").innerHTML = day + ', ' + month + ' ' + date + ', ' + year;
}
currentDate();



