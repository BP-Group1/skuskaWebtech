
// load xml file
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {    // IE 5/6
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xhttp.open("GET", "../xmlFiles/meniny.xml", false);
xhttp.send();
xmlDoc = xhttp.responseXML;
let slovakian = [];let czechia = [];let hungary = [];let poland = [];let austria = [];
let slovakianNames = [];let czechiaNames = [];let hungaryNames = [];let polandNames = [];let austriaNames = [];
let skTag=xmlDoc.getElementsByTagName("SK");let czTag=xmlDoc.getElementsByTagName("CZ");
let huTag=xmlDoc.getElementsByTagName("HU");
let plTag=xmlDoc.getElementsByTagName("PL");let atTag=xmlDoc.getElementsByTagName("AT");

let name;
let nameSplit;
let j,i;
let dateDiv = document.getElementById("dateDiv");
let nameDiv = document.getElementById("namesDiv");
let dateAfterChange;
let inputName,inputDate;
let choice=1;
let hi="čČďý"




nameDiv.style.display="block";
dateDiv.style.display="none";
//nacitanie do pola
loadArrays(skTag,slovakian,slovakianNames);
loadArrays(czTag,czechia,czechiaNames);
loadArrays(huTag,hungary,hungaryNames);
loadArrays(atTag,austria,austriaNames);
loadArrays(plTag,poland,polandNames);
let tag = "SK"
let arr=slovakian;
let names=slovakianNames;
autocomplete(document.getElementById("myInput"), arr);
function loadArrays(nameTag,arr,names){
    for(i=0;i<nameTag.length;i++){
        name = nameTag[i].childNodes[0].nodeValue;
        names.push(nameTag[i].childNodes[0].nodeValue);
        nameSplit = name.split(", ");
        if(nameSplit.length>1){
            for (j = 0; j<nameSplit.length;j++){
                arr.push(nameSplit[j]);
            }
        }else {
            arr.push(nameTag[i].childNodes[0].nodeValue);
        }
    }
}
$('input[type=radio][name=radios]').change(function() {
    if (this.value === 'option1') {
        nameDiv.style.display="block";
        dateDiv.style.display="none";
        choice=1;
    }
    else if (this.value === 'option2') {
        nameDiv.style.display="none";
        dateDiv.style.display="block";
        choice=2;
    }
});
$('input[type=radio][name=radios2]').change(function() {
    if (this.value === 'option1') {
        arr=slovakian;
        names=slovakianNames;
        tag="SK"
        autocomplete(document.getElementById("myInput"), arr);
    }
    else if (this.value === 'option2') {
        arr=czechia;
        names=czechiaNames;
        tag="CZ"
        autocomplete(document.getElementById("myInput"), arr);
    }
    else if (this.value === 'option3') {
        arr=hungary;
        names=hungaryNames;
        tag="HU"
        autocomplete(document.getElementById("myInput"), arr);
    }
    else if (this.value === 'option4') {
        arr=poland;
        names=polandNames;
        tag="PL"
        autocomplete(document.getElementById("myInput"), arr);
    }
    else if (this.value === 'option5') {
        arr=austria;
        names=austriaNames;
        tag="AT"
        autocomplete(document.getElementById("myInput"), arr);
    }
});


function afterClick(){
    let found;
    if(choice===1){
        let compareString1;
        let compareString2;
    inputName = document.getElementById("myInput").value;

    let firstName;
    inputName = inputName+"";
    for (i=0;i<names.length;i++){
        compareString1=names[i].split(",")
        compareString2=inputName.toLocaleLowerCase();
        compareString2=replace(compareString2);
        for (j = 0;j<compareString1.length;j++){
            compareString1[j]=compareString1[j].toLocaleLowerCase();
            compareString1[j]=replace(compareString1[j]);

            if(compareString1[j]===compareString2){
                inputName=names[i];
                firstName=names[i];
                found = 1;
                break;
            }
        }

    }
    if (found!==1){
        document.getElementById("myInput").style.background="red";
        document.getElementById("result").innerHTML = "<span class='alert'>"+'ZLÉ MENO'+"</span>";
        return 0;
    }
        document.getElementById("myInput").style.background="green";
    let dateBeforeChange=searchXML(inputName,1,tag);
    let first,second,third,forth;
    dateBeforeChange.split("");
    if(dateBeforeChange[0]==="0"){
        first="";
    }else {
        first=dateBeforeChange[0];
    }
    if(dateBeforeChange[2]==="0"){
        third="";
    }else {
        third=dateBeforeChange[2];
    }
    second=dateBeforeChange[1]
    forth=dateBeforeChange[3]
    dateAfterChange = third+forth+"."+first+second+".";
    document.getElementById("result").innerHTML = "<span class='bold'>"+firstName+"</span> má meniny "+
        "<span class='bold'>"+dateAfterChange+"</span>";
    }
    else{
        inputDate = document.getElementById("dateInput").value;
        if (!inputDate){
            document.getElementById("dateInput").style.background="red";
            document.getElementById("result").innerHTML = "<span class='alert'>"+'ZLÝ DÁTUM'+"</span>";
            return 0;
        }
        document.getElementById("dateInput").style.background="green";
        let date = inputDate.split("-");
        //console.log(date[1]); mesiac
        //console.log(date[2]); den
        let formattedDate = date[1]+date[2];
        let name = searchXML(formattedDate,3,tag);
        if(name==="Dnes nemá nikto meniny"){
            name="nikto";
        }
        document.getElementById("result").innerHTML = "<span class='bold'>"+date[2]+"."+date[1]+"."+"</span> má meniny "+
            "<span class='bold'>"+name+"</span>";

    }
}
function replace(string){
    string = string.replace(new RegExp(/\s/g),"");
    string = string.replace(new RegExp(/[àáâãäå]/g),"a");
    string = string.replace(new RegExp(/[šś]/g),"s");
    string = string.replace(new RegExp(/[ŕř]/g),"r");
    string = string.replace(new RegExp(/[ť]/g),"t");
    string = string.replace(new RegExp(/[ď]/g),"d");
    string = string.replace(new RegExp(/[ľĺ]/g),"l");
    string = string.replace(new RegExp(/[ňń]/g),"n");
    string = string.replace(new RegExp(/æ/g),"ae");
    string = string.replace(new RegExp(/çčć/g),"c");
    string = string.replace(new RegExp(/[èéêëě]/g),"e");
    string = string.replace(new RegExp(/[ìíîï]/g),"i");
    string = string.replace(new RegExp(/ñ/g),"n");
    string = string.replace(new RegExp(/[òóôõö]/g),"o");
    string = string.replace(new RegExp(/œ/g),"oe");
    string = string.replace(new RegExp(/[ùúûü]/g),"u");
    string = string.replace(new RegExp(/[ýÿ]/g),"y");
    string = string.replace(new RegExp(/[žź]/g),"z");
    string = string.replace(new RegExp(/\W/g),"");
    return string;
}
function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    let currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() === val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode === 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode === 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        let x = document.getElementsByClassName("autocomplete-items");
        for (let i = 0; i < x.length; i++) {
            if (elmnt !== x[i] && elmnt !== inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}
