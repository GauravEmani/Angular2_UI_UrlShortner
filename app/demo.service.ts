import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class DemoService {

    constructor(private http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getStatistics() {
        return this.http.get('http://localhost:8080/statistic/121').map((res:Response) => res.json());
    }

    createAccount(account) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(account);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('http://localhost:8080/accounts/', body, options).map((res:Response) => res.json());
    }

    registerUrl(url) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        let body = JSON.stringify(url);
        // Note: This is only an example. The following API call will fail because there is no actual API to talk to.
        return this.http.post('http://localhost:8080/register/', body, options).map((res:Response) => res.json());
    }
}
