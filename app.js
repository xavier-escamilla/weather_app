window.addEventListener('load', ()=> {
    
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( posicion => {
            
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Queretaro,Mx&lang=es&units=metric&appid=46bf50dc6e9569c274cd426299d6e7c1'

            fetch(url)
                .then( response => {return response.json() })
                .then( data => {
                    let temp = Math.round(data.main.temp)
                    temperaturaValor.textContent = `${temp} °C`

                    let desc = data.weather[0].description
                    temperaturaDescripcion.textContent = desc.toUpperCase()

                    ubicacion.textContent = data.name

                    vientoVelocidad.textContent = `${data.wind.speed} m/s`

                    // Iconos Estaticos
                    console.log(data.weather[0].main)
                    switch (data.weather[0].main) {
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO')
                        break;
                        case 'Clear':
                            iconoAnimado.src = 'animated/day.svg'
                            console.log('LIMPIO')
                        break;
                    }


                    // Iconos Animados


                })
                .catch( error => {
                    console.log(error)
                })
        })
    }
})