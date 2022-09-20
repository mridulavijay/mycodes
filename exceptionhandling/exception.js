
var text=document.getElementById("text1");
var text_v=document.getElementById("text2");
var err=document.getElementById("mssg");
function changetext(){
    text.innerText='I have changed';
    
    try{
    print.log("Success");}
    catch(e){
        console.log("Error found",+e.description);
    }

}
function validate(){
    var x=text_v.value;
    err.innerText="";
    try{
        if(x=="")throw "The field cannot be empty"
        if(isNaN(x))throw "Please enter numbers"
    }
    catch(error){
     err.innerText="Error message"+error;
    }
    finally{
        text_v.value="";
    }
}


















// var para=document.getElementById("text1");
// var nam=document.getElementById("name");
// var err=document.getElementById("error1");
// function show(){
// para.innerText='I have changed';
// try{
// print.log('Success');
// }
// catch(e){
//     console.log('Error:found',+e.description);
// }

// }
// function check(){
//     var x=nam.value;
//     err.innerHTML="";
//     try{
//         if(x=="") throw "Please enter value";
//         if(isNaN(x))throw "Please input digit";
//     }
//     catch(error){
//       err.innerHTML="Error message"+error;
//     }
//     finally{
//         nam.value="";
//     }
// }