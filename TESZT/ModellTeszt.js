import Model from "../PUBLIC/Model.js";
/*
Tesztelendő metódusok a Model osztályban
removeKosarItem(id): ellenőrizd, hogy el tudsz-e távolítani egy adott terméket a kosárból. Mi van akkor, ha nem létező ID-jú terméket akarsz eltávolítani?  
decreaseQuantity(id): Ellenőrizd, hogy a termék mennyisége csökken-e, és ha a mennyiség 1, akkor eltávolítja-e a terméket.
getKosarDarabszam(): Ellenőrizd, hogy a kosárban lévő összes termék mennyiségét helyesen számolja-e ki. (beleértve, ha újonnan teszünk bele egy terméket, ha már meglévő terméket teszünk a kosárba, illetve az increaseQuantity és a decreaseQuantity függvény meghívása után hogy változik az összes darabszám. (Vigyázz, mert lehet, hoyg hibásan működik a program!)

*/
function removeKosarItemHelyesEltavolitTeszt(){
    const model = new Model();
    const termek= {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    console.log("termek hozzaadva")
    model.removeKosarItem(0);
    const kosarbanLevoTermek= model.getKosarLista();
    console.assert(kosarbanLevoTermek.length===0,"Hiba az eltávolítás során")
    console.log("removeKosarItemHelyesEltavolitTeszt() lefutott")

}
removeKosarItemHelyesEltavolitTeszt();

function removeKosarItemNemLetezoIdTeszt(){
    const model = new Model();
    const termek= {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    console.log("termek hozzaadva");
    model.removeKosarItem(5);
    const kosarbanLevoTermek= model.getKosarLista();
    console.assert(kosarbanLevoTermek.id===0,"Hiba ,nem létező ID-t távolít el")
    console.log("removeKosarItemNemLetezoIdTeszt() lefutott")

}
removeKosarItemNemLetezoIdTeszt();

function decreaseQuantityTermekMennyisegCsokkenTeszt(){
    const model = new Model();
    const termek= {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    console.log("termek hozzaadva");
    model.increaseQuantity(0);
    console.log("termek novelve");
    model.decreaseQuantity(0);
    console.log("termek csokkentve");
    const kosarbanLevoTermek= model.getKosarLista();
    console.assert(kosarbanLevoTermek[0].mennyiseg===1,"Hiba ,nem megfelelő mennyiség csökkenés")
    console.log("decreaseQuantityTermekMennyisegCsokkenTeszt() lefutott")

}
decreaseQuantityTermekMennyisegCsokkenTeszt()

function decreaseQuantityMennyiseg1AkkorTorolTeszt(){
    const model = new Model();
    const termek= {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    console.log("termek hozzaadva");
    model.decreaseQuantity(0);
    console.log("termek csokkentve");
    const kosarbanLevoTermek= model.getKosarLista();
    console.assert(kosarbanLevoTermek.length===0,"Hiba , 1 alá csökkenésnél nem törlődik")
    console.log("decreaseQuantityMennyiseg1AkkorTorolTeszt() lefutott")

}
decreaseQuantityMennyiseg1AkkorTorolTeszt()

function getKosarDarabszamOsszesTermekHelyesMennyisegTeszt(){
    const model = new Model();
    const termek= {
        id: 0,
        nev: "Termék 1",
        ar: 1000,
        kep: "./kepek/placeholder.jpg",
        leiras: "Ez egy példa termék leírása.",
    }
    model.addKosar(termek);
    model.addKosar(termek);
    model.addKosar(termek);
    console.log("3db termek hozzaadva");
    model.getKosarDarabszam();
    console.log(model.getKosarDarabszam());
    const kosarbanLevoTermek= model.getKosarLista();
    const szamoltmenny= 0;
    for (let index = 0; index < kosarbanLevoTermek.length; index++) {
        szamoltmenny+=termek.mennyiseg
    }
    
    console.assert(szamoltmenny===3,"Hiba , nem megfelelően számol összes mennyiséget")
    console.log("getKosarDarabszamOsszesTermekHelyesMennyisegTeszt() lefutott")

}
getKosarDarabszamOsszesTermekHelyesMennyisegTeszt();

