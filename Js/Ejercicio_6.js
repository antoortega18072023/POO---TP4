class libro {
    constructor (ISBN,titulo,autor,paginas){
        this._ISBN = ISBN;
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }

    //get y set para isbn

    get ISBN(){
        return this._ISBN;
    }

    set ISBN(ISBN){
        this._ISBN=ISBN;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo){
        this._titulo=titulo;
    }

    get autor(){
        return this._autor
    }
    set autor(autor){
        this._autor = autor;
    }

    get paginas(){
        return this._paginas;
    }

    set paginas(paginas){
        this._paginas=paginas
    }
}

//instancias

let libro1 = new libro ('123456', 'El señor de los anillos', 'J.R.R. Tolkien', 1000);
let libro2 = new libro ('789012', 'Cien años de soledad', 'Gabriel García Márquez', 500);

//mostrar

libro1.mostrarlibro();
libro2.mostrarlibro();

//determianr mayor pagina

if (libro1.paginas>libro2.paginas){
    alert(`${libro1.titulo} tiene más páginas que ${libro2.titulo}.`);
}else if(libro1.paginas<libro2.paginas){
    alert(`${libro2.titulo} tiene más páginas que ${libro1.titulo}.`);
}else{
    alert(`${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas.`);
}