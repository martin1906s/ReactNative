recuperar=()=>{
    let frutas=["pera","manzana","sandia"];
    frutas.push("mandarina");
    return frutas;
}
testRecuperar=()=>{
    let misFrutas=recuperar();
    let fruta1=misFrutas[0];
    let fruta2=misFrutas[1];

    console.log("1>>>>"+fruta1);
    console.log("2>>>>"+fruta2);
}

testRecuperarDes=()=>{
    let [fruta1,fruta2,fruta3,fruta4]=recuperar();
    console.log("1>>>>"+fruta1);
    console.log("2>>>>"+fruta2);
    console.log("3>>>>"+fruta3);
    console.log("4>>>>"+fruta4);
    
}