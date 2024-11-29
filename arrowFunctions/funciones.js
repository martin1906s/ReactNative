ejecutarSumar=()=>{
    let valor_1=recuperarInt("txtValor1");
    let valor_2=recuperarInt("txtValor2");
    let resultadoSuma;
    console.log("Valor1>>>"+valor_1);
    console.log("Valor2>>><"+valor_2);
    resultadoSuma=sumar(valor_1,valor_2);
    console.log(valor_1+" + "+valor_2+" = "+resultadoSuma);   
} 
ejecutarResta=()=>{
    let valor_1=recuperarFloat("txtValor1");
    let valor_2=recuperarFloat("txtValor2");
    let resultadoResta;
    resultadoResta=restar(valor_1,valor_2);
    console.log(valor_1+" - "+valor_2+" = "+resultadoResta);
    
} 

sumar=(sum1,sum2)=>{
    let resutado = sum1+sum2;
    return resutado;
}

restar=(res1,res2)=>{
    let resutado = res1-res2;
    return resutado;
}