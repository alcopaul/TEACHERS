var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//note: length of lib must be equal to the base
var wsh = new ActiveXObject("WScript.Shell");
//begin input values here
var word = "DI";
var bsx = 26;
//end input values here
var result = xres(word, bsx, lib);
wsh.Popup(result);
var fso = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("EngtoNum.txt", 2, true); 
fh.WriteLine(result); 
fh.Close(); 
//convert words to numbers
function xres(rts, bsx, lib)
{
var result = 0;
for (var i = 0; i < rts.length; i++)
{
result += lib.indexOf(rts.substr(i,1)) * Math.pow(bsx, ((rts.length - 1) - i));
}
return result;
}
// Your English Teacher BY VP70[NIHFEX] 04/11/2016
