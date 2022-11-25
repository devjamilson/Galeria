//para nomes
let filtro = document.getElementById('filtro-nome');
let btn = document.getElementById('btn');
let tag = document.querySelectorAll('.categoria')
let comp = document.querySelectorAll('.card')


filtro.addEventListener('keyup', () =>{
    let nomeFiltro = filtro.value;
    for(let j = 0; j < tag.length; j++){     
        let x = comp[j]
        let y = x.querySelector('.categoria').textContent.toUpperCase()
        let z = nomeFiltro.toUpperCase()
      
        for(let i = 0; i < y.length; i++){
            if( y == z){
                x.classList = 'aparecer'
            }

        }
       
    }
    
})


