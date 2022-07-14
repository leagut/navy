import Nave from "./Nave";

class NoTripulada extends Nave {
    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision,diasdeprovision,tripulantes){
        super(nombre,altura,peso,pais,velocidad,reutilizable,mision);   
        this.diasdeprovision=diasdeprovision;
        this.tripulantes=tripulantes;
    }

    ahorrodeenergia(){
        return `Se activo el modo energia`
    }

    purificao2(){
        return `purificando el Oxigeno de la nave`
    }
}

export default NoTripulada;