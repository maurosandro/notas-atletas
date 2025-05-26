// Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.
function competicaoGinastica(atletas){
  atletas.forEach(atleta => {
    // Organizar notas em Ordem Crescente
    let notas = atleta.notas.sort((a, b) => a - b);
    
    // Remove a menor e a maior nota
    let notasValidas = notas.slice(1, 4);
    
    // Calcula a média notas válidas
    let soma = notasValidas.reduce((total, nota) => total + nota, 0);
    let media = soma / notasValidas.length;
    
    // Formata a saída
    //console.log("COMPETIÇÃO DE GISNASTICA")
    
    console.log(`Atleta: ${atleta.nome}`);
    console.log("________________________")
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Notas Validas: ${notasValidas}`);
    console.log(`Média Válida: ${media.toFixed(2)}`);
    console.log('-------------------------');
    console.log();
    console.log();
  });
}

// Dados de entrada
let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

competicaoGinastica(atletas)