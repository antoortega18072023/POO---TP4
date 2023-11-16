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