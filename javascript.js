//body

document.body.style.margin="0"
//header start
let header=document.createElement("header");
header.id="main-header";
header.style.cssText="      font-family: monospace; background-color: #f2f1f1;padding: 4px 10px; display: flex; flex-direction: row; justify-content: space-between;    align-items: center;font-size: 19px;"
//left div
let header_divL=document.createElement("div");
let textForLD=document.createTextNode("ABD99");
header_divL.appendChild(textForLD);
header_divL.style.cssText="color: #10d510;font-weight:bold"
//right div
let header_divR=document.createElement("div");
header_divR.style.cssText="    display: flex;width: 50%;justify-content: space-between;"
//lis
let myLi1=document.createElement("li");
let myLi1T=document.createTextNode("main");
myLi1.appendChild(myLi1T);
myLi1.className="main-inputs";
myLi1.style.cssText="display:block"
header_divR.appendChild(myLi1)

//2
let myLi2=document.createElement("li");
let myLi2T=document.createTextNode("body");
myLi2.appendChild(myLi2T);
myLi2.className="main-inputs";
myLi2.style.cssText="display:block"
header_divR.appendChild(myLi2)
//3
let myLi3=document.createElement("li");
let myLi3T=document.createTextNode("other");
myLi3.appendChild(myLi3T);
myLi3.className="main-inputs";
myLi3.style.cssText="display:block"

header_divR.appendChild(myLi3)
//4
let myLi4=document.createElement("li");
let myLi4T=document.createTextNode("footer");
myLi4.appendChild(myLi4T);
myLi4.className="main-inputs";
header_divR.appendChild(myLi4)
myLi4.style.cssText="display:block"

//append
header.appendChild(header_divL);
header.appendChild(header_divR);
//the last
document.body.appendChild(header)