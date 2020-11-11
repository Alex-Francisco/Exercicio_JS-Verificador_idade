function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = document.getElementById('ano_nasc')
    var resultado = document.getElementById('resultado')
    var receber_img = document.getElementById('imagem')
    var imagem = document.getElementById('foto')
    
    if (anoNasc.value.length == 0 || anoNasc.value > anoAtual) {
        window.alert('Erro, verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radSex')
        var idade = anoAtual - anoNasc.value
        var genero = ""
        
        if (sex[0].checked) {
            genero = 'mulher'
            if (idade >= 18 && idade <= 50) {
                imagem.setAttribute('src', 'mulher25-35.jpeg')
            }
        } else if (sex[1].checked) {
            genero = 'homem'
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        receber_img.appendChild(imagem)
    }
}