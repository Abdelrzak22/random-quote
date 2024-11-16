var student = [
    {name:`"You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth."`, author:`--William W. Purkey`},
    {name:`"You know you're in love when you can't fall asleep because reality is finally better than your dreams."`,author:` --Dr. Seuss`},
    {name:`"It's not what happens to you, but how you react to it that matters."`,author:`--Epictetus`},
    {name:`"You miss 100% of the shots you don't take."`,author:`--Wayne Gretzy`},
    {name:`"Do not take life too seriously. You will not get out alive."`,author:`--Elbert Hubbard`}

]
var btn = document.getElementById('click');
var prevName = '';

btn.onclick = getquote;
function getquote() {
    var x;
    var y;
    do {
        y=Math.floor(Math.random() * student.length);
        x = student[y].name;
        z=student[y].author;
    } while (x === prevName);
    prevName = x;
   document.getElementById('demo').innerHTML=x
   document.getElementById('koko').innerHTML=z
}
