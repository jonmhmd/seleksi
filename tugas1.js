let input = 1234567;
let juta = (input/1000000|0)*1000000;
let ratusRibu = ((input-juta)/100000|0)*100000;
let puluhRibu = ((input-juta-ratusRibu)/10000|0)*10000;
let ribu = ((input-juta-ratusRibu-puluhRibu)/1000|0)*1000;
let ratus = ((input-juta-ratusRibu-puluhRibu-ribu)/100|0)*100;
let puluh = ((input-juta-ratusRibu-puluhRibu-ribu-ratus)/10|0)*10;
let satuan = (input-juta-ratusRibu-puluhRibu-ribu-ratus-puluh);

console.log(juta); 
console.log(ratusRibu); 
console.log(puluhRibu); 
console.log(ribu); 
console.log(ratus); 
console.log(puluh); 
console.log(satuan);