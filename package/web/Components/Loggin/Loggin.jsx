import { Resources } from '../../../TranslationResource/Resources';

let resource = new Resources();
function Loggin(){

    return(
        <form>
            <label>{resource.getResource().Loggin}</label>
        </form>
    );
}

export { Loggin };
