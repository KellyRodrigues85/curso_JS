function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.getElementById('res')
   var img = document.createElement('img')
   img.setAttribute('id','foto')

   if(fano.value.length == 0 || Number(fano.value) > ano ){
         window.alert('verifique os dados e tente novamente')
   } else {
        var fsex = document.getElementsByName ('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
                genero = 'Homem'
                if (idade >= 0 && idade <10 ) {
                    img.setAttribute('src', 'm_crianca.jpg')    
                } else if (idade < 21){
                        img.setAttribute('src', 'm_adolescente.jpg') 

                } else if (idade < 60){
                        img.setAttribute('src', 'm_adulto.jpg')

                } else {
                img.setAttribute('src', 'm_idoso.jpg')
                }
        }else if (fsex[1].checked) {
                genero = 'Mulher'

                if (idade >= 0 && idade <10 ) {
                        img.setAttribute('src', 'f_crianca.jpg')
                } else if (idade < 21){
                        img.setAttribute('src', 'f_adolescente.jpg')

                } else if (idade < 60){
                        img.setAttribute('src', 'f_adulto.jpg')  

                } else{
        
                        img.setAttribute('src', 'f_idosa.jpg')
                }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
   }
       

}