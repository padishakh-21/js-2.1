alert("Musobaqaga xush kelibsiz!");
var yourAge = prompt("Yoshingizni kiriting");

var age = 15;
document.body.style.backgroundColor = "blue";
var text = document.createElement("p");
text.style.color = "black";
text.style.fontWeight = "bold";
text.style.fontSize = "45px"
text.style.textAlign = "center";

if (yourAge > age) {
    text.textContent = `Siz to'gri kelasiz`;
    document.body.append(text);
} else {
    text.textContent = `Sizni yoshingiz afsuski tog'ri kelmaydi`;
    document.body.append(text);
}