var post=[{title:"one",body:"politics"},{title:"two",body:"films"}];
var output="";
function displaypost(){
    setTimeout(function(){
        post.forEach(function(i){
         output += i.title;
        })
        var print=document.getElementById("print");
        print.innerHTML=output;
    },3000)
}
displaypost();