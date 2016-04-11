var lib = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//note: length of lib must be equal to the base
var wsh = new ActiveXObject("WScript.Shell");
//begin input values here
var num = 86;
var bsx = 26;
//end input values here
var resx = reverse(erx(num, bsx, lib));
wsh.Popup(resx);
var fso = new ActiveXObject("Scripting.FileSystemObject"); 
var fh = fso.CreateTextFile("NumtoEng.txt", 2, true); 
fh.WriteLine(resx); 
fh.Close();
//convert decimal to any base
function erx(str, bac, lib)
{
var res = "";
if (str == 0)
{
return "0";
}
for (var i = str; 0 < i; i = Math.floor(i / bac)) 
{
res += lib.substr((i % bac), 1);
}
return res;
}
function reverse(s)
{
return s.split("").reverse().join("");
}
// Your Math Teacher BY VP70[NIHFEX] 04/11/2016
