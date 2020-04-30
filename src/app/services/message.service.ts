import {Injectable, Inject} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Message} from '../models/message';
import {Global} from './global.service';

@Injectable()
export class MessageService {
    public urlSaveMessage: string;
    public urlGetMessages: string;

    constructor(
        private _http: HttpClient
    ){
        this.urlSaveMessage = Global.newMessageUrl;
        this.urlGetMessages = Global.getMessagesUrl;
    }

    saveMessage(message: Message): Observable<any>{
        // let params = JSON.stringify(message);
        let params = {
            name: message.name,
            message: message.message
        };
        
        console.log(params);
        // let headers = new HttpHeaders().set('Content-Type', 'application/json');
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.urlSaveMessage, params, {headers: headers});

    }

    getMessages(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.urlGetMessages, {headers:headers});
    }

}