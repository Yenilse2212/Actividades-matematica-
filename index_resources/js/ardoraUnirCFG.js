//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=0;
var successes=0; successesMax=6; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=2; scoreDec=-2
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";colorLeave="#000000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Muchas Felicidades "; messageTime="30 minutos "; messageError="Vuelva a intertarlo "; messageErrorG="Vuelva a intertarlo "; messageAttempts="3"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="aW5kZXg="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Mm0gKyA1bSAtOA==", "VHJpbm9taW8="],["NXg=", "TW9ub21pbw=="],["M3ggKyA3", "Qmlub21pbw=="],["eCArIDR4ICs1", "VHJpbm9taW8="],["OWEgLSAyYg==", "Qmlub21pbw=="],["Nnk=", "TW9ub21pbw=="]];
var c=[[10,8],[2,7],[6,7],[9,8],[7,7],[2,7]];
var con1=["2m + 5m -8","5x","3x + 7","x + 4x +5","9a - 2b","6y"];
var con2=["Monomio","Binomio","Trinomio"];
var sel1=""; join1=[]; join2=[];
