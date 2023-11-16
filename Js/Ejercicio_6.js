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
}