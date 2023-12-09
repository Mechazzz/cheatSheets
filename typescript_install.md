Felállítom typescript környezetet:

Windows powershellre rákeresek és megnyitom

Odanavigálok cd-kkel ahova létre akarok hozni a könyvtárat

mkdir (mappanév, camelCase-vel írva) (ENTER)

ls (ENTER)

cd (mappanév amit létrehoztam hogy belépjek a mappába)

ls (ENTER)

npm init (ENTER) (ENTER addig amig ki nem jon ujra a sor ahova irhatok, is that ok? utani) ( ezzel package jsont csinalok)

ls (latom hogy letrehozott egy package json-t) (ENTER)

code . (Ezzel a paranccsal megnyitom a jelenlegi (jelenleg letrehozott) mappaban a VS kodot (ENTER)

npm install -D typescript (ENTER) ( a -D azt jelenti hogy ez egy dev dependency)

npx tsc --init (ENTER) ( ts confi fajlt letrehozza)

tsconfig: 59. soraban kikommentel és beir : "outDir": "./out",  
tsconfig . 29.sor kikommentel és beir : "rootDir": "./src",  
package json 6. soraban a scripts alatt: "build": "tsc" -re atir ami ott volt

package jsonbe 7 és 8 sorba beir/ átir:
"build": "tsc",
"start": "node out/index.js"

Létrehozok egy src mappát a mappában

index.ts file-t csinalok vs studioba az src mappába és beir bele valamit pl console.log("Hello World)

npm run build  
packae json ben latom hogy ottvan a build ami a typescript build (vagy js build)
package jsonbe rakjuk a scripteket amiket a projekttel tudunk csinalni
