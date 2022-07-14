class Nave {

    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision){

        this.nombre(nombre);
        this.altura(altura);
        this.peso(peso);
        this.pais(pais);
        this.velocidad(velocidad);
        this.reutilizable(reutilizable);
        this.mision(mision);

    }


    getFullCaracter(){
        return `${nombre} ${altura} ${peso} ${pais} ${velocidad} ${reutilizable} ${mision}`
    }

    encender(){
        return `Motor del  ${this.nombre}  encendido`
    }

    despegar(){
        return ` ${this.nombre}  despegando...`
    }
}

export default Nave;