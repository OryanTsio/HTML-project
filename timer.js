function login()
{
    let x,y;
    x=document.getElementById("user").value;
    y=document.getElementById("pass").value;
    if(x=="oryants" && y=="123456")
    {
      alert("good job! welcome!")
     location.replace("tafrit.html");   
    }
    else
    alert(" incorrect username or password! try again!")
    
}
function result()
{
let ans=0;
if(document.getElementById("a1").checked)
{
    ans=ans+25;
}
if(document.getElementById("a5").checked)
{
    ans=ans+25;
}
if(document.getElementById("a9").checked)
{
    ans=ans+25;
}
if(document.getElementById("a13").checked)
{
    ans=ans+25;
}
if(ans==25)
document.getElementById("result").innerHTML="10$";
else if(ans==50)
document.getElementById("result").innerHTML="100$";
else if(ans==75)
document.getElementById("result").innerHTML="10,000$";
else if(ans==100)
document.getElementById("result").innerHTML="1,000,000$"+" "+"JackPot!";
 else
 document.getElementById("result").innerHTML="0$";


}