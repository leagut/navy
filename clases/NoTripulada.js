import Nave from "./Nave";

class NoTripulada extends Nave {
    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision,tipo){
        super(nombre,altura,peso,pais,velocidad,reutilizable,mision);   
        this.tipo=tipo;
        
    }

    desplegarequipamento(){
        return `Desacoplando equipo e iniciando instalacion`
    }

    testearlugar(){
        return `Testeando el sitio`
    }

    getfullinfo(){
        `${super.getfullinfo} tipo: ${this.tipo} `;
    }

}

export default NoTripulada;