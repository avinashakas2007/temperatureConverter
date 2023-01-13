var kelvinTemp=0;
var celciusTemp=0;
var faherneitTemp=0;

var kelvinInput=document.querySelector(".kel");
var celciusInput=document.querySelector(".cel");
var faherneitInput=document.querySelector(".fah");

celciusInput.addEventListener("input",function(){

celciusTemp=this.value;
if(celciusTemp>=100){
    $(".fire").attr("src","https://media2.giphy.com/media/26DNj3iQi58mrvTDW/giphy.gif?cid=ecf05e47hux9mqegqk0r972is0fdjrqkgimhm9tusdjapqrn&rid=giphy.gif&ct=s");
}
else if(celciusTemp<=0)
{
    $(".fire").attr("src","https://media1.giphy.com/media/l6Z4KbaFWeu1wSq98T/giphy.gif?cid=790b7611yz1ptvt3rwuoyqbcazcjtp3mtiwq94oycepa8n6r&rid=giphy.gif&ct=s");
    
}
else{
    $(".fire").attr("src","https://media0.giphy.com/media/QKUx6kHItu3ilaVMdn/giphy.gif?cid=790b7611zczny9dx5h4ijrzsvtxsufi0chg9l9gzontowvyj&rid=giphy.gif&ct=s");
}

kelvinTemp=celciusTemp*1+273.15;
faherneitTemp=(celciusTemp*(9/5))+32;
faherneitTemp=tempRound(faherneitTemp);
kelvinTemp=tempRound(kelvinTemp);
print(celciusTemp,faherneitTemp,kelvinTemp);

});


kelvinInput.addEventListener("input",function(){
    kelvinTemp=this.value;
    if(kelvinTemp>=373.15){
    $(".fire").attr("src","https://media2.giphy.com/media/26DNj3iQi58mrvTDW/giphy.gif?cid=ecf05e47hux9mqegqk0r972is0fdjrqkgimhm9tusdjapqrn&rid=giphy.gif&ct=s");
    }
    else if(kelvinTemp<=273.15)
    {
        $(".fire").attr("src","https://media1.giphy.com/media/l6Z4KbaFWeu1wSq98T/giphy.gif?cid=790b7611yz1ptvt3rwuoyqbcazcjtp3mtiwq94oycepa8n6r&rid=giphy.gif&ct=s");
        
    }
    else{
        $(".fire").attr("src","https://media0.giphy.com/media/QKUx6kHItu3ilaVMdn/giphy.gif?cid=790b7611zczny9dx5h4ijrzsvtxsufi0chg9l9gzontowvyj&rid=giphy.gif&ct=s");
    }

    celciusTemp=kelvinTemp*1-273.15;
    faherneitTemp=(celciusTemp*(9/5))+32;
    celciusTemp=tempRound(celciusTemp);
    faherneitTemp=tempRound(faherneitTemp);
    print(celciusTemp,faherneitTemp,kelvinTemp);    
});


    faherneitInput.addEventListener("input",function(){
        faherneitTemp=this.value;
        if(faherneitTemp>=212){
          $(".fire").attr("src","https://media2.giphy.com/media/26DNj3iQi58mrvTDW/giphy.gif?cid=ecf05e47hux9mqegqk0r972is0fdjrqkgimhm9tusdjapqrn&rid=giphy.gif&ct=s");  
        }
        else if(faherneitTemp<=32)
        {
            $(".fire").attr("src","https://media1.giphy.com/media/l6Z4KbaFWeu1wSq98T/giphy.gif?cid=790b7611yz1ptvt3rwuoyqbcazcjtp3mtiwq94oycepa8n6r&rid=giphy.gif&ct=s");
            $(".fire").css("opacity","1");
        }
        else{
            $(".fire").attr("src","https://media0.giphy.com/media/QKUx6kHItu3ilaVMdn/giphy.gif?cid=790b7611zczny9dx5h4ijrzsvtxsufi0chg9l9gzontowvyj&rid=giphy.gif&ct=s");
        }

        celciusTemp=(faherneitTemp*(5/9))-32;
        kelvinTemp=(celciusTemp*1+273.15);
        celciusTemp=tempRound(celciusTemp);
        kelvinTemp=tempRound(kelvinTemp);
        print(celciusTemp,faherneitTemp,kelvinTemp);
    });

    function tempRound(numb){
        return numb.toFixed(2);
    }

    function print(celciusTemp,faherneitTemp,kelvinTemp){
        celciusInput.value=celciusTemp;
        faherneitInput.value=faherneitTemp;
        kelvinInput.value=kelvinTemp;
    }





   