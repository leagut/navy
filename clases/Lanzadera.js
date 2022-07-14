import Nave from "./Nave";


class Lanzadera extends Nave {

    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision,carga){
        super(nombre,altura,peso,pais,velocidad,reutilizable,mision);   
        this.carga=carga;
    }

    soltarCarga(){
        return `Soltando carga`
    }
    enganchandoCarga(){
        return `Enganchando carga`
    }

    getfullinfo(){
        `${super.getfullinfo} carga en kilos ${this.carga} `;
    }
}

export default Lanzadera;