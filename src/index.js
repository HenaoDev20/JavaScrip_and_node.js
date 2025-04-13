const args=process.argv.slice(2);

let min=1;
let max=100;

if (args.length >=2){
  const parsedMin =parseInt(args[0],10);
  const parsedMax =parseInt(args[1],10);
  
  if(!isNaN(parsedMin) && !isNaN(parsedMax) && parsedMin<parsedMax){
    min=parsedMin;
    max =parsedMax;
  }else{
    console.log("Rango invalido.Usando valores por defecto")
  }
}

const randomNumber=Math.floor(Math.random()*(max-min+1))+min

console.log(`Número aleatorio generado entre ${min} y ${max}: ${randomNumber}`);