
import { Injectable } from '@angular/core';
// to create the service
@Injectable({
    providedIn:'root'
})
export class UserService {
    // property :which is an array of user object(user array to be user component)
    users=[
        {
            name: 'raj',
            company:'infoTech'
        },

        {
            name: 'rao',
            company:'infosys'
        },
        {
            name: 'pawar',
            company:'USTGlobal'
        },
        {
            name: 'jadav',
            company:'Global'
        },
        {
            name: 'john',
            company:'UST'
        },
    ]
    // printDetails()
    // {
    //     console.log("printdeatails");
    // }

}

