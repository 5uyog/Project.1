function lightheme() {
    document.getElementById("theme").style.backgroundColor="white"
    document.getElementById("light").style.display='none'
    document.getElementById("dark").style.display='block'
    
}
function darktheme() {
    document.getElementById("theme").style.backgroundColor="black"
    document.getElementById("dark").style.display='none'
    document.getElementById("light").style.display='block'
}
   
function btn0(){
    document.getElementById("btn0").style.display='none'

    document.getElementById("btn1").style.display='block'

    document.getElementById("btn2").style.display='block'

    document.getElementById("btn3").style.display='block'

    document.getElementById("btn4").style.display='block'
    
    document.getElementById("btn5").style.display='block'
}

function btn1(){
    document.getElementById("btn0").style.display='block'

    document.getElementById("btn1").style.display='none'

    document.getElementById("btn2").style.display='none'

    document.getElementById("btn3").style.display='none'

    document.getElementById("btn4").style.display='none'
    
    document.getElementById("btn5").style.display='none'
}


