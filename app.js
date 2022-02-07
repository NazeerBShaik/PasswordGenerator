function getPassword(){
    var copyIcon = document.getElementById("copyIcon")
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]";
    var passwordLength = 16;
    var password = "";
    for(var i=0; i<passwordLength; i++){                                              
        var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber,randomNumber+1);
    }
    document.getElementById("password").value = password ;
    var copyStatus = document.getElementById("copyStatus");
    copyStatus.innerText = ""
    copyIcon.style.opacity = "0.5"

}

copyIcon.addEventListener("click",function(){
    var copyStatus = document.getElementById("copyStatus");
    var copyIcon = document.getElementById("copyIcon")
    
    var c = document.getElementById("password")
    c.select()
    document.execCommand("copy")
    if(c.value.trim() === ""){

        copyStatus.innerText = "password is empty"
    }else{
        copyIcon.style.opacity = "1"
        copyStatus.innerText = "copied!"
        
    }
    console.log(document.getElementById("password").value)
})

var clearBtn = document.getElementById("clear_btn")

clearBtn.addEventListener('click', function() {
    document.getElementById("password").value = ""
})