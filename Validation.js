// JAVASCRIPTBEN

const filesystem = require("fs/promises");

//const schema = z.object : ide jon a tobb soros zod sema

const myFunction = (person) => {};

const demo = async () => {
  const input = await FileSystem.readfile("./akarmi.txt", "utf-8");

  const data = JSON.parse(input); // ez a stringből csinál bármit. Parsoltam egy adatstrukturaba

  const result = schema.safeParse(data); // az előbbi bármit alakitom át egy ilyen tipusu (result) dologgá. Megnezem hogy megfelelő e az adatstruktura
  // a safeparse biztosan nem fog errort dobni, odaadhatok neki barmit és vissza fog adni egy olyan objektumot amin rajta les zegy success property vagy true vagy false és hogyha false akkor rajta lesz egy errors property, ha pedig true akkor rajta lesz az adat,de ez biztos hogy nem fog errort dobni a safeparse miatt. Azért Safeparse mert ebből soha semmilyen körülmények között nem lehet error

  if (!result.success) return console.log(result.errors); // itt a return kell hogy ne fusson tovabb ezesetben

  const validatedData = result.data; // ha sikeres a resulton rajta volt a adata, ezt odaadhatom a kovetkezo fuggvenyemnek
  // sefaparse, az a sema megfelel-e annak a semanak

  const res1 = myFunction(validatedData);
};

demo();

// typescritpben : megirjuk, validaljuk és megmondjuk annal a functionnal ami ezzel dolgozik hogy ez egy ilyen tipusu dolgot vár

// error oka lehet hogy nem létezik az adat vagy nem javascriptnek megfelelő strukturában van megirva

// a JSON.parse utani részen már nem try,catch-elünk hanem annál a résznél

// ------------------------------------- TRY, CATCH:

const filesystem = require("fs/promises");

//const schema = z.object : ide jon a tobb soros zod sema

const myFunctionX = (person) => {};

const demoX = async () => {
  try {
    const input = await FileSystem.readfile("./akarmi.txt", "utf-8");
    const data = JSON.parse(input);
    // a try utani felso két sor ami errort dobhat !!! a cont input meg const data-s sorok !!!
    // ha ezek nem sikerulnek akkor akarjuk kiirni az errort hogy mi nem sikerült

    const result = schema.safeParse(data); // itt már nem kérjük hgoy próbálja meg, nem fut hibára. Ezt már úgy kezeltük, hogy lehetséges hogy odaadunk valamit ami nem felel meg ennek a sémának de akkor visszaadunk egy oléyan objektumot amin rajta lesznek a hibák. ITt már nem dob errort

    if (!result.success) return console.log(result.errors);
    const validatedData = result.data;

    const res1 = myFunction(validatedData);
  } catch (error) {
    console.log(error);
  }
};

demoX();

// ----------------- ahogy szebb . Csak azt akarjuk a try ba rakni ami tényleg elhasalhat.

const filesystem = require("fs/promises");

//const schema = z.object : ide jon a tobb soros zod sema

const myFunctionY = (person) => {};

const safeReadfile = async () => {
  // itt csináltam egy uj functiont, ez egy olyan function ami megpróbálja megcsinálni a következő két sort és lehet hogy ez nem sikerül, lesz valami error és akkor console.log(err) és visszatérünk null-al. Ha nincs error akkor meg visszatérünk a datával
  try {
    const input = await FileSystem.readfile("./akarmi.txt", "utf-8");
    const data = JSON.parse(input);
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};
// itt csak azt kezeltm le a try-ban ami összedölhet mert nem rajtam mulik hogy van e benne adat meg mi van benne

// ezt beépítve:
const demoY = async () => {
  const data = await safeReadfile(); // itt van ez a safereadfile ami visszaad nekem valamit. Vagy visszaad egy null-t vagy visszaad egy parsolt adatstruktúrát
  if (!data) return; // ha nincs data, akkor álljon meg. Vagy kapok valamit vagy semmit, ha semmit akkor már volt egy error
  // ez a demoY már bizotnságos function mert nem dobhat errort

  const result = schema.safeParse(data);

  if (!result.success) return console.log(result.errors);

  const validatedData = result.data;

  const res1 = myFunction(validatedData);
};

demoY();
