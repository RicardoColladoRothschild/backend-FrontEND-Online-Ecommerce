import { useEffect, useState } from 'react';

export function useResources(language){
    const [data, setData] = useState(null);

        useEffect(()=>{
            async function readFile(){
                try{
                    const response = await fetch('../../TranslationResource/Language/sp.json');
                }catch(error){setData(null)}
            }
        });
}