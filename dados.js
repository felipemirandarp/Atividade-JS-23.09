let option = confirm("Você deseja continuar? ")
let maioridade 
let menoridade 
let i = 0
let media = 0 
while(option){
        
    let altura = parseFloat (prompt("Digite sua altura: "))
    let peso = parseFloat (prompt("Digite seu peso: "))
    let idade = parseFloat (prompt("Digite sua idade: "))

    if(i == 0){
        maioridade = idade
        menoridade = idade
        alturajovem = altura
        pesovelho = peso

    }


    var alturajovem 

     if(idade < menoridade ){

        menoridade = idade 
        alturajovem = altura
   

       
    
    }

    var pesovelho 
    

     if(idade >  maioridade ){

        maioridade = idade 
        pesovelho = peso 
    

       
    
     
    }

    
    i++ 

    media = media +idade

    option = confirm("Você deseja continuar? ")
}
media = media/i
console.log(` A  altura da pessoa mais jovem é: ${alturajovem}\nO peso  da pessoa mais velha   é: ${pesovelho}\n A média é:  ${media}`)

