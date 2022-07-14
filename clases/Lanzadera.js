import Nave from "../Nave";


class Lanzadera extends Nave {

    #carga = 0;

    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision){
        super(nombre,altura,peso,pais,velocidad,reutilizable,mision);   
    }

    setCarga(carga){
        this.#carga=carga;
    }

}