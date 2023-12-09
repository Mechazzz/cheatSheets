import { z } from "zod";

const DataSchema = z.object({
  breeds: z.record(z.array(z.string())),
  // breeds: z.record(z.string().array()),
});

// ez jelenti azt hogy a breedshez tartozik egy olyan record lista ahol stringekhez fognak string arrayek tartozni.
// a record igazabol egy objectet jelent  ahol nem tudjuk hogy milyen stringekhez, milyen kulcsokhoz, de tudjuk hoyg milyen tipusu dolog tartozik
// a z. record az mar egy z.object csak nem tudjuk hogy hany key-e van, csak azt tudjuk hogy mi tartozi majd mindegyik key-hez

export type Data = z.infer<typeof DataSchema>;

let dataRead = (err: unknown, data: string) => {
  if (err) {
    console.error("Data can not be read", err);
    return;
  }
  try {
    const breedsData: unknown = JSON.parse(data); // unknown-ak adjuk meg de nem tudjuk biztosan milyen fajlt kapunk ezert unknown tipusnak adjuk meg. Ezért validálnunk kell
    const validatedBreedsData = DataSchema.safeParse(breedsData); // a már javascriptté parsolt adatot (breedsdatat adjuk meg). Ez már valamilyen javascriptes adatstruktura amit odaadok. És ez már biztosan javascriptes adatstruktura mert nem szálltunk el a catch ágba, de nem tudjuk hogy milyen javascriptes adatstruktura mert nem mi irtuk a fajlt, bármilyen fájllal dolgozhatunk. Ezt parsoljuk.
    // a json parse altal már korábban megfelelt a szintakszisnak
    // most megnézi hogy az elrendezés megfelel-e a dataschemának és
    // ezzel ha sikeres, rákerül a succes amit ha  leirom hogy validatedBreedsData.  akkor feladja mint opcio. Ha a rajta levő success true akkor data van rajta, ha false, akkor error van rajta
    if ((validatedBreedsData, success === true)) {
      console.log(convertBreeds(validatedBreedsData.data)); // itt van data mer succesasban van
    } else {
      console.log(validatedBreedsData.error.issues);
    }
  } catch {
    console.log("Invalid json file");
  }
};
// ezután a csekk után már biztos hogy olyan tipusu adattal dolgozok és meglesz benne hogy tipusos

fs.readFile(`${__dirname}/../data.json`, "utf-8", dataRead);
