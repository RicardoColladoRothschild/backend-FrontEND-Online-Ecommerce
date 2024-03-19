const fs = require('fs');
export class Resources{

    _language;
    _data;
        constructor(language){
            this._language = language;
            this._loadData(language);
                
        }

    _loadData(){
        try{
            
            switch(this._language){
                case "sp":
                        this._data = fs.readFileSync('./Language/sp.json');
                    break;
            }    
        }catch(error){
            console.error('Error al cargar el');
            this._data={};
        }
    }  
    
    getResource(){
        return this._data;
    }


}