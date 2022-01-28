import {Injectable} from '@angular/core';
import { IUser } from '../api/iuser';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    constructor() {
    }

    public addUserConfigToLocalStorage(user: IUser) {
        console.log('userConfig needs saving to localstorage:', user);
        window.localStorage.setItem('userConfig', JSON.stringify(user));
        console.log('stored user config in local storage', localStorage.getItem('userConfig'));
    }

}
