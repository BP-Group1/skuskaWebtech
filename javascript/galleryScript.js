//vytvoreny kvoli errorom na nasich strankach
//lebo sa tam nepouzivaju funkcie co su v indexe a blbne to potom

document.getElementById("eGame").addEventListener('mousemove', function (){
    document.getElementById("stiloImg").style.display = "block";
});
document.getElementById("eGame").addEventListener('mouseleave', function (){
    document.getElementById("stiloImg").style.display = "none";
});
document.getElementById("lGame").addEventListener('mousemove', function (){
    document.getElementById("transformersImg").style.display = "block";
});
document.getElementById("lGame").addEventListener('mouseleave', function (){
    document.getElementById("transformersImg").style.display = "none";
});
document.getElementById("pGame").addEventListener('mousemove', function (){
    document.getElementById("peterRigo").style.display = "block";
});
document.getElementById("pGame").addEventListener('mouseleave', function (){
    document.getElementById("peterRigo").style.display = "none";
});



//kod nacitanie udajov pre profilovky
let lastWindow, actualWindow;
let source,name,about;
$.getJSON("../profilePictures.json", function (json) {
    console.log(json.profilePictures.length);
    for (let i=0; i<json.profilePictures.length; i++) {
        source = json.profilePictures[i].src;
        name = json.profilePictures[i].title;
        about = json.profilePictures[i].description;
        console.log(source);
        console.log(name);
        createPicture(source,name,i,about);
    }

});


function createPicture(source,name,id, about) {
    console.log(source);
    console.log(name);
    let x = document.createElement("img");
    let y = document.createElement("div");
    let heading = document.createElement("b");
    let line = document.createElement("br");
    heading.append(name);
    y.setAttribute("class","col-lg-4 meno");
    x.setAttribute("src", source);
    x.setAttribute("alt", name);
    x.setAttribute("class", "col-12 profileImage");
    originalWindow(source,name,about)

    x.onclick = function(){

        openWindow(name);
        lastWindow = name;
        actualWindow = id;


    };
    document.getElementById("profilePictures").appendChild(y).appendChild(heading).appendChild(line);
    document.getElementById("profilePictures").appendChild(y).appendChild(x);

}

function openWindow(name){
    document.getElementById("window").style.display="block";
    document.getElementById(name).style.display="block";
}
function closeWindow(){

    document.getElementById(lastWindow).style.display = "none";
    document.getElementById("window").style.display = "none";
}



function originalWindow(source,name,about){

    let div = document.createElement("div");
    let heading = document.createElement("h3");
    let contents = document.createElement("p");
    let original = document.createElement("img");
    div.setAttribute("id", name);
    original.setAttribute("src", source);
    original.setAttribute("alt", name);
    original.setAttribute("class", "obrazok");
    heading.innerHTML = name;
    contents.innerHTML = about;
    div.appendChild(heading);
    div.appendChild(contents);
    div.appendChild(original);
    document.getElementById("window").appendChild(div);
    document.getElementById(name).style.display="none";


}