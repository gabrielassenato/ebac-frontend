class VideoGame {
    constructor(modelo, fabricante, armazenamento) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.armazenamento = armazenamento;
    }
}

class Xbox extends VideoGame {
    selecionar() {
        return "Precione A";
    }
}

class Playstation extends VideoGame {
    selecionar() {
        return "Precione X";
    }
}

const xbox = new Xbox("Series S", "Microsoft", 550);
const playstation = new Playstation("Playstation 5", "Sony", 1000);
const xbox2 = new Xbox("Series X", "Microsoft", 1000);
    
console.log(`${xbox.modelo} da fabricante ${xbox.fabricante} tem ${xbox.armazenamento}GB de armazenamento e para selecionar no controle ${xbox.selecionar()}`);
console.log(`${playstation.modelo} da fabricante ${playstation.fabricante} tem ${playstation.armazenamento}GB de armazenamento e para selecionar no controle ${playstation.selecionar()}`);
console.log(`${xbox2.modelo} da fabricante ${xbox2.fabricante} tem ${xbox2.armazenamento}GB de armazenamento e para selecionar no controle ${xbox2.selecionar()}`);