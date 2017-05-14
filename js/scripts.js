function Telefon(marka, cena, kolor) {
    this.marka = marka;
    this.cena = cena;
    this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
    console.log("Marka telefonu to " + this.marka + ", kolor " + this.kolor + ", a jego cena to " + this.cena + ".");
}

var samsungGalaxyS6 = new Telefon("Samsung", 1798, "blue mist");
var iPhone6S = new Telefon("Apple", 2250, "gwiezdna szarość");
var onePlusOne = new Telefon("OnePlus", 1780, "czarny");

samsungGalaxyS6.printInfo();
iPhone6S.printInfo();
onePlusOne.printInfo();