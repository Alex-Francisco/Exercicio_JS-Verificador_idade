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
            if (idade >= 0 && idade <= 3) {
                imagem = imagem.setAttribute('src', 'bebe_mulher0-3.jpg')
            } else if (idade >= 4 && idade <= 9) {
                imagem = imagem.setAttribute('src', 'crianca_mulher04-09.jpg')
            } else if (idade >= 10 && idade <= 14) {
                imagem = imagem.setAttribute('src', 'crianca_mulher10-14.jpg')
            } else if (idade >= 15 && idade <= 20) {
                imagem = imagem.setAttribute('src', 'adolesc_mulher15-25.jpg')
            } else if (idade >= 21 && idade <= 35) {
                imagem = imagem.setAttribute('src', 'mulher25-35.jpeg')
            } else if (idade >= 36 && idade <= 45) {
                imagem = imagem.setAttribute('src', 'mulher36-45.jpg')
            } else if (idade >= 46 && idade <= 59) {
                imagem = imagem.setAttribute('src', 'mulher46-59.jpg')
            }  else {
                imagem = imagem.setAttribute('src', 'mulher60.jpg')
            }
        } else if (sex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 3) {
                imagem = imagem.setAttribute('src', 'bebe_homem0-3.jpg')
            } else if (idade >= 4 && idade <= 9) {
                imagem = imagem.setAttribute('src', 'crianca_homem04-09.jpg')
            } else if (idade >= 10 && idade <= 14) {
                imagem = imagem.setAttribute('src', 'crianca_homem10-14.jpg')
            } else if (idade >= 15 && idade <= 20) {
                imagem = imagem.setAttribute('src', 'adolesc_homem15-25.jpg')
            } else if (idade >= 21 && idade <= 35) {
                imagem = imagem.setAttribute('src', 'homem25-35.jpg')
            } else if (idade >= 36 && idade <= 45) {
                imagem = imagem.setAttribute('src', 'homem36-45.jpg')
            } else if (idade >= 46 && idade <= 59) {
                imagem = imagem.setAttribute('src', 'homem46-59.jpg')
            }  else {
                imagem = imagem.setAttribute('src', 'homem60.jpg')
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        receber_img.appendChild(imagem)
    }
}