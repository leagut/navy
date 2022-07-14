class Nave {
    #nombre;
    #altura;
    #peso;
    #pais;
    #velocidad;
    #reutilizable;
    #mision;

    constructor(nombre,altura,peso,pais,velocidad,reutilizable,mision){

        this.setNombre(nombre);
        this.setAltura(altura);
        this.setPeso(peso);
        this.setPais(pais);
        this.setVelocidad(velocidad);
        this.setReutilizable(reutilizable);
        this.setMision(mision);

    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }
    setAltura(altura){
        this.#altura=altura;
    }
    setPeso(peso){
        this.#peso=peso;
    }
    setPais(pais){
        this.#pais=pais;
    }
    setVelocidad(velocidad){
        this.#velocidad=velocidad;
    }
    setReutilizable(reutilizable){
        this.#reutilizable=reutilizable;
    }
    setMision(mision){
        this.#mision=mision;        
    }

    getFullCaracter(){
        return `${this.#nombre} ${this.#altura} ${this.#peso} ${this.#pais} ${this.#velocidad} ${this.#reutilizable} ${this.#mision}`
    }

    encender(){
        return 'Motor encendido'
    }

    despegar(){
        return 'despegando..'
    }
}

export default Nave;