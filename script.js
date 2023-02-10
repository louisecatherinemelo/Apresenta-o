
function carregar(){   
        var cab = window.document.getElementById("cab")
        dayName = new Array("Domingo","Segunda-feira", "Terça-feira","Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")
        monName = new Array("janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro")
        now = new Date()    
        var nomedia =  dayName[now.getDay() ]   
        var dia = now.getDate()
        var mes = monName[now.getMonth() ]
        var ano = now.getFullYear()

        cab.innerHTML = `<strong>${nomedia}, ${dia} de ${mes} de ${ano}.   </strong>`
}

 