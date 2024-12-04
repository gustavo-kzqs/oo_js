// • Crie uma classe de uma abstração;

// • Crie pelo menos duas classes que sejam herdeiras da classe criada anteriormente;

// • Crie pelo menos três instâncias de objetos;


// Classe abstrata de Carro;
function Carro(nome, fabricante, ano){
    this.nome = nome;
    this.fabricante = fabricante;
    this.ano = ano;
}

Carro.prototype.displayInfo = function(){
    console.log(`nome: ${this.nome}, fabricante: ${this.fabricante}, ano: ${this.ano}`);
}

// Classe Motor, herança de Carro;
function Motor(nome, fabricante, ano, motor){
    Carro.call(this, nome, fabricante, ano);
    this.motor = motor;
}

Motor.prototype = Object.create(Carro.prototype);
Motor.prototype.constructor = Motor;

Motor.prototype.displayInfo = function(){
    Carro.prototype.displayInfo.call(this);
    console.log(`Motor: ${this.motor}`);
}

// Classe tamanhoAro,herança de Carro;
function tamanhoAro(nome,fabricante,ano, TamanhoAro){
    Carro.call(this, nome, fabricante, ano);
    this.TamanhoAro = TamanhoAro;
}

tamanhoAro.prototype = Object.create(Carro.prototype);
tamanhoAro.prototype.constructor = tamanhoAro;

tamanhoAro.prototype.displayInfo = function(){
    Carro.prototype.displayInfo.call(this);
    console.log(`Tamanho do Aro: ${this.TamanhoAro}`);
}

// Classe Potencia, herança de Carro;
function potencia(nome, fabricante, ano, potencia){
    Carro.call(this, nome, fabricante, ano);
    this.potencia = potencia;
}

potencia.prototype = Object.create(Carro.prototype);
potencia.prototype.constructor = potencia;

potencia.prototype.displayInfo = function(){
    Carro.prototype.displayInfo.call(this);
    console.log(`Potência: ${this.potencia}`);
}

//Criação das três instancias de objetos;

const carro1 = new Carro("Parati", "Volkswagen","1988");
const motor1 = new Motor("Gol", "Volkswagen", "1995", "AP 1.8");
const tamanhoaro1 = new tamanhoAro("Voyage", "Volkswagen", "1990", "AP 1.6", "17pol ");
const potencia1 = new potencia("Escort", "Ford", "1996", "AP 1.8", "13pol", "83cv");

// Exibição da informação dos objetos;

carro1.displayInfo();
motor1.displayInfo();
tamanhoaro1.displayInfo();
potencia1.displayInfo();

