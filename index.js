const filmes = require('./database/catalogo.json');

function adcionarFilme(filme){
    filmes.push(filme)
}

 // function buscarFilme(codigo){

    function buscarFilme(codigo){
        return filmes.find((filme) => {
            return filme.codigo === codigo
        });
    };

    // listar todos os filmes

    filmes.forEach ((todosOsFilmes) => {
        console.log(todosOsFilmes);
    });

    // status dos filmes
    
    filmes[i].emCartaz ? 'Filme esta em cartaz' : 'Filme nao esta em cartaz'


// alterar status de filmes (codigo)  

 function aterarStatusEmCartaz(codigo, callbackBuscarFilme) {
    const filmeEncontrado = callbackBuscarFilme(codigo);

    filmeEncontrado.emCartaz = !filmeEncontrado.emCartaz;
    console.log(filmeEncontrado);
}

alterarStatusEmCartaz(2, buscarFilme)

// filtrar filmes (codigo)

const listaFilmesDeLongaDuracao =() => {
return filmes.filter((filme) => {
    return filme.duracao >= 2;
})
}   
const filmesFiltradosDuracaoLonga = listaFilmesDeLongaDuracao ();

console.log(filmesFiltradosDuracaoLonga);



        
//--------------------------------------

adicionarFilme({
    codigo: 3,
    titulo: 'Homem Aranha 3',
    duracao: 3.5,
    atores: ['fulano 1', 'fulano 2', 'fulano 3'],
    anoLancamento: 2021,
    emCartaz: false
});

