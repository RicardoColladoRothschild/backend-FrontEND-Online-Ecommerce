/*Services will receive a password and created an encriptation hash, this is
the hash that will be save in the data base */

import * as bcrypt from 'bcryptjs';

class BCryptService{

    async hashPassword(password:string):Promise<string>{
        const cryptation = 7;
    
            const hash = await bcrypt.hash(password, cryptation);

            return hash;
    }
}


export default BCryptService;

