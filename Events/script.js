
var item=document.getElementById("img1");
var divname=document.querySelector("#img_cont");
function hide(){
    item.setAttribute("hidden",true);
}
function show(){
    item.removeAttribute("hidden",true);
}
function change(){
    divname.innerHTML=`<p>Your image disappeared</p>`;
}
function change_img(){
    item.removeAttribute("src","images/n1.jpg");
    item.setAttribute("src","images/n3.jpg");
}
function toggle(){
    item.removeAttribute("src","images/n3.jpg");
    item.setAttribute("src","images/n1.jpg");
}
