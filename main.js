function max(a,b) {
    
    if(a === b){
        alert("sonlar bir biriga teng")
    }else{
        let c;
        c = Math.max(a,b);
        alert("Kiritilgan sonlarning kattasi - " + c);
    }
}

let p = Number(prompt("Birinchi sonni kiriting "));
let p2 = Number(prompt("Ikkinchi sonni kiriting "));
max(p,p2);