TERMINAL: ----------------------------------------
cd 
change directory

cd ..
visszalepni directorybol

Tab - al kiegesziti a fajlnevet aminek beirom az elso betujet

mkdir mappanév 
mappát hozok létre --> ne legyen space a mappanevben mert kesobb maceras lesz vele dolgozni !!!!!!!!!!!!

ls 
kilistázom az adott mappa tartalmát

ni fájlnév 
új fájlt hozok létre  ne legyen space a mappanefájlnévben mert kesobb maceras lesz vele dolgozni !!!!!!!!!!!!

code . 
megnyitja VS code ban az adott fájlt

pwd
print working directory

ls -Force 
kilistaz minden fajlt, a rejtetteket is (macen : ls -A)

rm -Force .git
Mac-en valami : rm -RF .git
Ha nem akarjuk mar verziokovetni akkor csak torolni kell a git mappat
Ez mappa torlesere jo, hogy kitorolje a teljes tartalmat, almappakaat stb

rm
Fájlt törlök

GIT: --------------------------------------------------------

git status 
kiirja a verziokovetest vagy annak hianyat (nem változtat meg semmit)

git init
verziokovetove tesszuk, git mappat hoz letre a rendszer

A git mappaban van minden adat arra vonatkozoan hogy hogyan van verziokovetve a projektunk

git log
kiirja a committokat (verziokat), kiirja a valtozasokat és látom a metaadatokat (nem változtat meg semmit)

git add .
hozzáadja a filet a snapshothoz , commithez

 git commit -m ""  (idozojelbe szoveget irhatok)
 elkészitette az elso snapshotot, commitot ezzel a nevet

git checkout da7154d10ca8b994699550f5e354a92a0eb7b35b
ezzel a paranccsal tudok visszaallni a egy korabbi verziora ugy hogy beadom a git checkout-ot es utana egy korabban terminal altal kiirt commit szamot
Ez kesobb arra kell hogy egy branchen elore es hatra valtsunk

git switch -
Ha visszaallok korabbi verziora akkor ezzel tudok ujra a legujabbra visszaalni
Kesobb branchek kozott valtunk

A PROJEKTBEN A CHECKOUT ES SWITCH KÖZÖTT NE CSINALJUNK SEMMIT A FÁJL_AL SEMMIT MERT NAGYON MACERÁS LESZ UTÁNA.

git remote -v
csekkolom hogy tartozik-e hozza remote repository

git remote add origin https://github.com/Mechazzz/cheatSheets.git
itt megadom a githubon csinalt repository elereset hogy tudja hova toltse fel az adatokat

git branch -M main
ez csak atnevezi githubon a master branchet main branchra

git push --set-upstream origin master (itt talan main a master helyett)
Ezzel felpusholodik a master branchba
Atraktam hogy az alap ne master legyen a kovi repoknal hanem main talan ennel a push parancsnal is atkene rakni mainre ?

git removet -v
kilogolja hogy van-e remote repository

