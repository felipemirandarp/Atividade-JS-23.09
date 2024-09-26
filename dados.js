let option = confirm("Você deseja continuar? ")
let maioridade = 0
let menoridade = 1500
let i 
while(option){
        
    let altura = parseFloat (prompt("Digite sua altura: "))
    let peso = parseFloat (prompt("Digite seu peso: "))
    let idade = parseFloat (prompt("Digite sua idade: "))


    let alturajovem = 0

     if(menoridade > idade ){

        menoridade = idade 
        alturajovem = altura
        i++

        console.log(` A  altura da pessoa mais jovem é: ${alturajovem}`)
    
    }

    let pesoidoso = 0 
    

     if(maioridade < idade ){

        maioridade = idade 
        pesoidoso = peso 
        i++

        console.log(` O peso  da pessoa mais velha   é: ${pesoidoso}`)
    
    }
    media = media +idade
    media = media/i







    option = confirm("Você deseja continuar? ")
}