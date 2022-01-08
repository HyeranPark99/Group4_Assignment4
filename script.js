
function myfunction(){
    document.getElementById("showText").innerHTML = "I'm right!";
}

function myfunction2(){
    document.getElementById("showText").innerHTML = "No, I'm right!";
}

let restrictEl = document.getElementById("dnotH");

restrictEl.addEventListener("mouseover",function(event){
    alert("Hey, I told you not to hover over me!");
});


function getInputValue(){
    let inputVal = document.getElementById("passWord").value;
    if(inputVal != "12345678"){
        alert("Incorrect PassWord:" + inputVal);
    }else{
        var display = document.getElementById("displayT");
        display.innerText="Correct Info";
    }

   
     
}

function getVolum(){
    let r = document.getElementById("r_box").value;
    let vol = (4/3)*Math.pow(r,3)*Math.PI;
    alert(vol + " inches³")
}
