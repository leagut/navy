import Nave from "./Nave";

class Special extends Nave {
    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision,velocidadluz){
        super(nombre,altura,peso,pais,velocidad,reutilizable,mision);   
        this.velocidadluz=velocidadluz;        
    }

    ejecutarmision(){
        return `Mision en progreso..`
    }

    volveracasa(){
        return `Camino a casa..`
    }

    getfullinfo(){
        `${super.getfullinfo} velocidad luz : ${this.velocidadluz} `;
    }

}

export default Special;