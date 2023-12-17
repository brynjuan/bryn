const nama = "briant juan hamonangan";
let usia = 40;

const biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;

    if(usia > 10 && usia < 18){ 
      generasi = "generasi remaja";
    } 
    else if(usia> 20 && usia < 30){
    generasi= "generasi dewasa";
    }
     else if (usia>= 30 && usia< 80){
    generasi= "generasi tua";
    } else if (usia<10&& usia> 2){
    generasi= "generasi anak anak";
    }
     else {
     generasi= "generasi bayi";
    }

     return biodata.innerHTML = generasi;
}
console.log(nama);
console.log(usia);

generateBiodata();