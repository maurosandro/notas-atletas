// Classe Atleta para receber parametros e exibir informações Processadas
class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
    this.resultIMC = null;
    this.resultMediaValida = null;
  }
  
  // Método para calcular a Categoria do atleta
  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return "Infantil";
    } else if (this.idade >= 12 && this.idade <= 13) {
      return "Juvenil";
    } else if (this.idade >= 14 && this.idade <= 15) {
      return "Intermediário";
    } else if (this.idade >= 16 && this.idade <= 30) {
      return "Adulto";
    } else {
      return "Sem categoria";
    }
  }

  // Método para Calcular o IMC do atleta
  calculaIMC() {
    //this.resultIMC = this.peso / (this.altura * this.altura);
    this.resultIMC = Number((this.peso / (this.altura * this.altura)).toFixed(3));
    return this.resultIMC;
  }
  
  // Método para calcular a Media Valida
  calculaMediaValida() {
    // Se tiver menos que 3 notas o resultado será 0
    if (!this.notas || this.notas.length < 3) {
      this.resultMediaValida = 0; 
      return this.resultMediaValida;
    }
    // Classificar notas em ordem crescent
    const sortedNotas = [...this.notas].sort((a, b) => a - b); 
    // Remover as notas mais baixas e as mais altas
    const validNotas = sortedNotas.slice(1, -1);
    this.resultMediaValida = Number((validNotas.reduce((sum, nota) => sum + nota, 0) / validNotas.length).toFixed(3));
    return this.resultMediaValida;
  }
  
  // Método para exibir o Nome do atleta
  obtemNomeAtleta(){
    return this.nome;
  }
  
  // Método para obter a Idade do atleta
  obtemIdadeAtleta(){
    return this.idade;
  }
  
  // Método para obter o Peso do atleta
  obtemPesoAtleta(){
    return this.peso;
  }
  
  // Método para obter a Altura do atleta
  obtemAlturaAtleta(){
    return this.altura;
  }
  
  // Método obter a Categoria do atleta
  obtemCategoria() {
    return this.calculaCategoria();
  }

  // Método obter o IMC do atleta
  obtemIMC() {
	// Verificar se o IMC é nulo
    if (this.resultIMC === null) {
      this.calculaIMC();
    }
    return this.resultIMC;
  }
  
  // Método para obter as Notas do Atleta
  obtemNotasAtleta() {
    return this.notas.join(", ");
  }
  
  // Método para obter a Media Valida de notas
  obtemMediaValida() {
	// Verficar se o resultado da Media Valida é nulo.
    if (this.resultMediaValida === null) {
      this.calculaMediaValida();
    }
    return this.resultMediaValida;
  }
}
// Instancia uma classe "atleta1" com nome, idade, peso, altura e notas
let atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: ", atleta1.obtemNomeAtleta())
console.log("Idade: ", atleta1.obtemIdadeAtleta(), "Anos")
console.log("Peso: ", atleta1.obtemPesoAtleta(), "Kg")
console.log("Altura: ", atleta1.obtemAlturaAtleta(), "mts")
console.log("Notas:", atleta1.obtemNotasAtleta());
console.log("Categoria:", atleta1.obtemCategoria());
console.log("IMC:", atleta1.obtemIMC());
console.log("Média Válida:", atleta1.obtemMediaValida());

//A classe deverá possuir os seguintes métodos:

//calculaCategoria(), para calcular a categoria do atleta;   OK
//calculaIMC(), para calcular o IMC do atleta;
//calculaMediaValida(), para calcular a média válida do atleta.
//obtemNomeAtleta(), que retorna o nome do atleta
//obtemIdadeAtleta(), que retorna a idade do atleta
//obtemPesoAtleta(), que retorna o peso do atleta
//obtemNotasAtleta(), que retorna as notas do atleta
//obtemCategoria(), que retorna a categoria do atleta  OK
//obtemIMC(), que retorna o IMC do atleta
//obtemMediaValida(), que retorna a média válida do atleta