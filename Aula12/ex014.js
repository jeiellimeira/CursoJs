var agora = new Date()
var diaSem = agora.getDay()

/*
    Domingo
    Segunda
    Terça
    Quarta
    Quinta
    Sexta
    Sábado
*/

console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sábado')
        break
    
        default:
            console.log('[ERRO] Dia inválido!')
        break
}