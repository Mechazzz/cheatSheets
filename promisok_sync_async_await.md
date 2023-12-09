LEGFONTOSABB:

// VÉGSŐOPCIÓK ÖSSZEGEZVE:

//felülre: import fileSystem from "fs/promises";

const path2 = `${__dirname}/../data.txt`

/_ const data = fileSystem.readFileSync(path2, "utf-8")
console.log(data) _/

/_
fileSystem.readFile(path2, "utf-8", (error,data) => {
console.log("cb" + data)
}) _/

const runX = async() =>{
const data = fileSystem.readFile(path2, "utf-8")
console.log(data)
data.then(text => console.log(text)) // ez nem annyira hasznalt
}
runX()

//ez a jobb mint az előző:
const runY = async() =>{
const data = await fileSystem.readFile(path2, "utf-8")
console.log(data)
}
runY()

Teljes oktatási anyag a 20231206-os mappában
OKTATÁSI ANYAG :
1 FILE:

import fileSystem from "fs";
import { text } from "stream/consumers";

// IDE BEIR ORAI ALAPJAN VISSZANEZVE

// itt quick fixel telepitetnunk kell a már megirt kódot

//const data = fileSystem.readFileSync(`${__dirname}/../data.txt`, "utf-8"); // a dirname utan a /../ ez az hogy a jelenlegi mappahoz kepest egyet visszalep, ha ugyanabban a mappaban lenne akkor csak / kellene
// ez a modszer jó, ezt hasznal !!!!
//
//
//

const path = `${__dirname}/../data.txt`;
const data = fileSystem.readFileSync(path, "utf-8");
console.log(data);
// a readfilesynch egy olyan function, ami visszaad egy stringet

const fnToCallWhenFileIsReadXX = (err: unknown, data: string) => {
if (err) return console.log(err);

console.log(data);
};

// ha van error , kilogolom az errort( megszakitom az errorral). Ennek most odaadhatok egy errort meg egy stringet

fileSystem.readFile(
`${__dirname}/../data.txt`,
"utf-8",
fnToCallWhenFileIsReadXX
);
// a filesystem.reafile egy olya nfunction ami nem ad vissza semmit, hanem megadhatunk neki egy functiont és majd ott fogom megadni a datat (adatot)

// a fent irt function fusson le majd akkor amikor a readFile befejezeodott
// fnToCallWhenFileIsReadXX: ez egy olyan function aminek odaadhatunk egy errort meg egy stringet és ezekkel csinal valamit. Most feldolgozza az errort meg a datat de nem csinal velük semmit

2 FILE:
import fileSystem from "fs";

const path = `${__dirname}/../data.txt`;

fileSystem.readFile(path, "utf-8", (error, data) => {
console.log("cb" + data);
});

const data = fileSystem.readFileSync(path, "utf-8");
console.log("sync" + data);

// ha futtatom akkor látom hogy a sync + data elobb jelenik meg
// mivel eloszor lefut a console.log("cb" + data) majd azt mondja hogy majd ha felolvastam a fajlt akkor fogom lefuttatni a function, de mar rohanok tovabb, lefut console.log("sync" + data); és utána ha ez lefutott tud lefutni a "fileSystem.readFile(path, "utf-8", (error, data) => {console.log("cb" + data);});"" function is .

3 FILE:

import fileSystem from "fs/promises";

const path = `${__dirname}/../data.txt`

// hasznalhatunk promisokat

/_ fileSystem.readFile(path, "utf-8", (error, data) => {
console.log("cb" + data);
});
_/
// ----------------------------
// egy promise
const myPromise = new Promise<string>((resolve => resolve("alma"));
// az igeretem egy uj igeret, egy szamnak az igerete és amikor beteljesedik, akkor a alma-t fogja visszaadni
// egy objectet ad vissza aminek vannak propertijei
myPromise.then((x) => console.log(x)); // then-el megadhatunk egy functiont hogy amikor sikeres mi fussson le, azzalé ami benne van a then-es dologban

//---------------------------------------
console.log("promise is not yet made")

const myPromise2 = new Promise<string>((resolve) => {
fileSystem.readFile(path, "utf-8", (error, data) => {
resolve(data)
// amint felolvastam, string lesz a databol és azt mondom hogy ezt az igéretet ezzel a stringgel váltsa be. Ez most piros mert felulre beirtam hogy promise
});
/_ setTimeout(()=>resolve("alma"), 3000) _/// ez a promise 3 másodperc mulva teljesedik be ezzel az almaval. a tényleges beteljesedése után 3 madsodperccel fut le az also console log. Ez az igeretem az hogy ez 3 másodperc mulva beteljesedik az almaval
});

console.log("reaction was not yet added")

myPromise2.then((resolvedPromise) => console.log(resolvedPromise))
// amint ezaz igeret beteljesul, akkor futtassa le az igeret targyaval ezt a konzol loggot

console.log("reaction was added")

// a felolvasasi sorrend: "promise is not yet made" / "reaction was not yet added" / "reaction was added" / myPromise2.then((resolvedPromise) => console.log(resolvedPromise))

// -------------------------------------------------

// feliratkozhatok még a promisra:

const run = async () =>{
const myPromise3 = new Promise<string>((resolve) => {
fileSystem.readFile(path, "utf-8", (error, data) => {
resolve(data)
});

})
// ez most piros mert felulra importba beraktam a promiset, de nem torlom ki hogy lassam afeladatot, további feladat alul

const resolvedPromise3 = await myPromise3 // ha beirom hogy await akkor bevárom azaz a string iréretéből lesz ténylgesen egy string tipusu dolog. Ezért már nem lesz a callbackes szintakszis. Mert kltrehozok egy ígéretet, azt bevárom, aztán kilogolom
console.log(resolvedPromise3)
}

// ha importnal felulra berakom a promiset az azért kell, hogy ne kelljen ezt igy megirni:
//fileSystem.readFile(path, "utf-8", (error, data) => {
// resolve(data)
//});
// hanem promisositva legyen

// ---------------------------------------------------------
//importba promise beirasa utan amilyen :

const run2 = async () =>{
const myPromise4 = fileSystem.readFile(path,"utf-8") // egy promist ad vissza a readfile,egy stringnek az igeretet
const resolvedPromise4 = await myPromise4 // a string igeretet bevarhatom, abbol lesz egy string
console.log(resolvedPromise4) // és utána logolom ki
}

const run3 = async () =>{
const data = await fileSystem.readFile(path,"utf-8") // ide irhatom az awaitet, akkor mára következő sorra nincs is szükség és átnevezem ezt a sort datara
// a readfile egy promiset ad vissza, én ezt az awaittel bevárom és ez a bevárt igéret lesz a data
console.log(data)
}
// ha ezt le akarom futtatni akkor a run3()-t kell hivnom
run3()

// tehat async functionba csomagoltam és sorrol sorra haladtam

// meg megoldási opcio:
const run4 = async () =>{
const myPromise = fileSystem.readFile(path,"utf-8")
myPromise.then(data => console.log(data)) // amint ez az igeret beteljesul, akkor fusson le ez a function es akkor ez emg fogja kapni bemeneti parameterkent a beteljesult igeret targyat,tehat azt a strignet amit felolvastunk // de a run3-as megoldast jobban szeretjuk !!!!!
}
run4()

// tehat fs-böl van readfileSynch meg a sima readfile . A readfile az async de egy callback functiont adunk neki és az fs/promises-nel tudjuk csinalni ezt az async await-es megoldást

// VÉGSŐOPCIÓK ÖSSZEGEZVE:

//felülre: import fileSystem from "fs/promises";

const path2 = `${__dirname}/../data.txt`

/_ const data = fileSystem.readFileSync(path2, "utf-8")
console.log(data) _/

/_
fileSystem.readFile(path2, "utf-8", (error,data) => {
console.log("cb" + data)
}) _/

const runX = async() =>{
const data = fileSystem.readFile(path2, "utf-8")
console.log(data)
data.then(text => console.log(text)) // ez nem annyira hasznalt
}
runX()

//ez a jobb mint az előző:
const runY = async() =>{
const data = await fileSystem.readFile(path2, "utf-8")
console.log(data)
}
runY()
