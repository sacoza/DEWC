const readline=require('readline-sync');

class ArtCientifico{
    constructor(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones){
        this.tituloCientifico=tituloCientifico;
        this.autores=autores;
        this.NumPaginas=NumPaginas;
        this.anyoPublicacion=anyoPublicacion;
        this.menciones=menciones;
    }
    gettituloCientifico(){
        return this.tituloCientifico;
    }
}

class artRevista extends ArtCientifico{
    constructor(tituloRevista, editorial, FactorImpacto){
        this.tituloRevista=tituloRevista;
        this.editorial=editorial;
        this.FactorImpacto=FactorImpacto;
    }
    gettituloRevista(){
        return this.tituloRevista;
    }
}
class ArtConferencia extends ArtCientifico{
    constructor(nombre, lugar){
        this.nombre=nombre;
        this.lugar=lugar;
    }
}
class PatentesCinetificas{
    constructor(autor, anyoPublicacion2, anyoVencimiento){
        this.autor=autor;
        this.anyoPublicacion2=anyoPublicacion2;
        this.anyoVencimiento=anyoVencimiento;
    }
}
let articulo = [];
let salir = false;
while(!salir){
    console.log('Bienvenidos...');
    console.log('1)Dar de alta...');
    console.log('2)Dar de baja...');
    console.log('3)Buscar articulo y info...');  
    console.log('-1)Salir del sistema');  
    let opcion=readline.questionInt('Por favor, seleccione una de estas opciones: ');  
    if (opcion===1) {
    /*Articulo Cientifico*/
        let tituloCientifico=readline.question('Por favor, introduce el titulo Cientifico ');  
        let autores=readline.question('Por favor, introduce el autor ');  
        let NumPaginas=readline.question('Por favor, introduce el número de páginas ');  
        let anyoPublicacion=readline.question('Por favor, introduce el año de publicación ');  
        let menciones=readline.questionFloat('Por favor, introduce las menciones ');  
    /*Articulo Revista*/
        let tituloRevista=readline.questionFloat('Por favor, introduce el titulo Revista '); 
        let editorial=readline.questionFloat('Por favor, introduce el editorial '); 
        let FactorImpacto=readline.questionFloat('Por favor, introduce el Factor Impacto '); 
    /*Articulo Conferencia*/
        let nombre=readline.questionFloat('Por favor, introduce el nombre del articulo Cientifico ');
        let lugar=readline.questionFloat('Por favor, introduce el lugar ');  
    /*Patentes Cientificas*/
        let autor=readline.questionFloat('Por favor, introduce el autor '); 
        let anyoPublicacion2=readline.questionFloat('Por favor, introduce el anyo de publicación '); 
        let anyoVencimiento=readline.questionFloat('Por favor, introduce el anyo de vencimiento '); 

        let newArticulo=readline.question(tituloCientifico, autores, NumPaginas, anyoPublicacion, menciones, 
            tituloRevista, editorial, FactorImpacto, nombre, lugar, autor, anyoPublicacion2, Vencimiento);
        articulo.push(newArticulo);
    }else if(opcion===2){
        let tituloCientifico=readline.question('Por favor, introduce matricula ');
        for(let i=0;i<articulo.length;i++){
            let coche=articulo[i];
            if(coche.tituloCientifico===tituloCientifico){
                articulo.splice(i);
                encontrado=true;
                break;
            }
        }
        if (encontrado) {
            console.log('Coche encontrado');
            console.log(listaCoches);
        }else{
            console.log('Coche NO encontrado');
        }
    }else if(opcion===3){
        let matricula=readline.question('Por favor, introduce matricula ');
        for(let coche of listaCoches){
            if (coche.matricula===matricula) {
                console.log(coche);
                break;
            }
        }
        /*
        let arrayCoche=listaCoche.filter(c => c.matricula===matricula);
        console.log(arrayCoche[0]);
        */
    }else if(opcion===-1){
        salir=true;
    }
}