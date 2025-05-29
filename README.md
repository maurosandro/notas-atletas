# Projeto de Certificação 2 – Dados dos Atletas

Este repositório faz parte do Curso **DEVStart**  e contém a implementação em JavaScript da classe `Atleta`, projetada para gerenciar dados de atletas, incluindo nome, idade, peso, altura e notas. A classe oferece métodos para calcular a categoria do atleta com base na idade, o Índice de Massa Corporal (IMC), a média válida das notas (excluindo a maior e a menor) e para obter informações específicas do atleta. Este projeto é ideal para aplicações que processam e analisam dados de desempenho de atletas.

## Sumário
- [Funcionalidades](#funcionalidades)
- [Instalação](#instalação)
- [Uso](#uso)
- [Métodos da Classe](#métodos-da-classe)
- [Exemplo de Saída](#exemplo-de-saída)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Funcionalidades
- **Gerenciamento de Dados do Atleta**: Armazena nome, idade, peso, altura e notas do atleta.
- **Cálculo de Categoria**: Determina a categoria com base na idade:
  - Infantil: 9 a 11 anos
  - Juvenil: 12 a 13 anos
  - Intermediário: 14 a 15 anos
  - Adulto: 16 a 30 anos
  - Sem categoria: Demais idades
- **Cálculo de IMC**: Calcula o Índice de Massa Corporal (IMC), arredondado para 3 casas decimais.
- **Média Válida das Notas**: Calcula a média das notas após excluir a maior e a menor, arredondada para 3 casas decimais.
- **Acesso a Dados Individuais**: Métodos para obter nome, idade, peso, altura, notas, categoria, IMC e média válida.
- **Formatação das Notas**: Exibe as notas como uma string separada por vírgulas para uma apresentação clara.
- **Cache Eficiente**: Armazena o IMC e a média válida calculados para evitar recomputações.

## Instalação
1. **Clonar o Repositório**:
   ```bash
   git clone https://github.com/seu-usuario/dados-atletas.git
   cd dados-atletas
   ```
2. **Verificar Node.js**:
   - Este projeto utiliza JavaScript e pode ser executado em ambientes que suportam JavaScript, ou o console de um navegador.
   - </> OneCompiler **javascript** [https://onecompiler.com/javascript] se desejar executar o código online em um navegador.
3. **Adicionar o Código**:
   - O código principal está em `atleta.js`. Copie o código fornecido para a área do OneCompiler e dê um click em RUN.

## Uso
1. **Cópie o código**:
   - Abra o navegador e digite o endereço ou dê um click no link: [https://onecompiler.com/javascript]. 
   - Cole o código na área reservada para o codigo javascript do OneCompiler.

2. **Criar uma Instância de Atleta**:
   - Instancie a classe `Atleta` com nome, idade, peso, altura e notas:
     ```javascript
     let atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
     ```
3. **Chamar Métodos**:
   - Use os métodos da classe para obter informações do atleta:
     ```javascript
     console.log("Nome:", atleta1.obtemNomeAtleta());
     console.log("Idade:", atleta1.obtemIdadeAtleta(), "Anos");
     console.log("Peso:", atleta1.obtemPesoAtleta(), "Kg");
     console.log("Altura:", atleta1.obtemAlturaAtleta(), "mts");
     console.log("Notas:", atleta1.obtemNotasAtleta());
     console.log("Categoria:", atleta1.obtemCategoria());
     console.log("IMC:", atleta1.obtemIMC());
     console.log("Média Válida:", atleta1.obtemMediaValida());
     ```

## Métodos da Classe
A classe `Atleta` inclui os seguintes métodos:

- **constructor(nome, idade, peso, altura, notas)**:
  - Inicializa um atleta com nome (string), idade (número), peso (número, em kg), altura (número, em metros) e notas (array de números).
- **calculaCategoria()**:
  - Retorna a categoria do atleta como string com base na idade.
- **calculaIMC()**:
  - Calcula o IMC usando a fórmula `peso / (altura * altura)`, arredondado para 3 casas decimais.
- **calculaMediaValida()**:
  - Calcula a média das notas após remover a maior e a menor, arredondada para 3 casas decimais. Retorna 0 se houver menos de 3 notas.
- **obtemNomeAtleta()**:
  - Retorna o nome do atleta.
- **obtemIdadeAtleta()**:
  - Retorna a idade do atleta.
- **obtemPesoAtleta()**:
  - Retorna o peso do atleta.
- **obtemAlturaAtleta()**:
  - Retorna a altura do atleta.
- **obtemCategoria()**:
  - Retorna o resultado de `calculaCategoria()`.
- **obtemIMC()**:
  - Retorna o IMC armazenado, calculando-o se ainda não foi computado.
- **obtemNotasAtleta()**:
  - Retorna as notas como uma string separada por vírgulas (ex.: `10, 9.34, 8.42, 10, 7.88`).
- **obtemMediaValida()**:
  - Retorna a média válida armazenada, calculando-a se ainda não foi computada.

## Exemplo de Saída
Executando o seguinte código:
```javascript
let atleta1 = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);
console.log("Nome:", atleta1.obtemNomeAtleta());
console.log("Idade:", atleta1.obtemIdadeAtleta(), "Anos");
console.log("Peso:", atleta1.obtemPesoAtleta(), "Kg");
console.log("Altura:", atleta1.obtemAlturaAtleta(), "mts");
console.log("Notas:", atleta1.obtemNotasAtleta());
console.log("Categoria:", atleta1.obtemCategoria());
console.log("IMC:", atleta1.obtemIMC());
console.log("Média Válida:", atleta1.obtemMediaValida());
```

Produz:
```
Nome: Cesar Abascal
Idade: 30 Anos
Peso: 80 Kg
Altura: 1.7 mts
Notas: 10, 9.34, 8.42, 10, 7.88
Categoria: Adulto
IMC: 27.682
Média Válida: 9.247
```

### Explicação dos Cálculos
- **Categoria**: Idade 30 → "Adulto" (16–30 anos).
- **IMC**: `80 / (1.70 * 1.70) ≈ 27.68166`, arredondado para `27.682`.
- **Notas**: Retornadas como string: `10, 9.34, 8.42, 10, 7.88`.
- **Média Válida**: Notas `[10, 9.34, 8.42, 10, 7.88]` são ordenadas (`[7.88, 8.42, 9.34, 10, 10]`), a maior (`10`) e a menor (`7.88`) são removidas, e a média de `[8.42, 9.34, 10]` é `(8.42 + 9.34 + 10) / 3 ≈ 9.246666666666666`, arredondada para `9.247`.

## Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.
