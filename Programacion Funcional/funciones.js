
ejecutarOperacion=(operador)=>{
    let valor_1=recuperarInt("txtValor1");
    let valor_2=recuperarInt("txtValor2");
    let resultado=operador(valor_1,valor_2);
    console.log(resultado);    
}

sumar=(sum1,sum2)=>{
    let resutado = sum1+sum2;
    return resutado;
}

restar=(res1,res2)=>{
    let resutado = res1-res2;
    return resutado;
}

ejecutar=(fn)=>{
    console.log("ejecuta funcion....");
    fn();
}
imprimir=()=>{
    console.log("Estoy imorimiendo....");
}
saludar=()=>{
    alert("Hola Master");
}
testEjecutar=()=>{
    ejecutar(imprimir);
    ejecutar(saludar);
}