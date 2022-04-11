var yourPrice = prompt("Qancha miqdorda pulingiz bor!").trim();
var price = 100;
document.body.style.backgroundColor = "blue";
var text = document.createElement("p");
text.style.color = "black";
text.style.fontWeight = "bold";
text.style.fontSize = "45px"
text.style.textAlign = "center";


if (+yourPrice > price) {
    text.textContent = `Qoyil pulingiz ${yourPrice - price}$ ga ko'p`;
    document.body.append(text);
} else if (+yourPrice == price) {
    text.textContent = `Sizning pul miqdoringiz yetarli☺`;
    document.body.append(text);
} else {
    text.textContent = `Sizning pul miqdoringiz afsuski ${price - yourPrice}$ ga yetarli emas`;
    document.body.append(text);
}