import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RandomOrgData } from "../models/randomOrgObjData";

@Injectable()
export class HttpService {
    private randomOrgData: RandomOrgData = new RandomOrgData();

    constructor(private http: HttpClient) {}

    postRandomNumbers(minRange: number, maxRange: number, amountNumbers: number): Observable<any> {
        const data = {
            jsonrpc: this.randomOrgData.jsonrpc,
            method: this.randomOrgData.methodGI,
            params: {
                apiKey: this.randomOrgData.apiKey,
                n: amountNumbers,
                min: minRange,
                max: maxRange,
                replacement: true
            },
            id: 42
        };

        return this.http.post('https://api.random.org/json-rpc/2/invoke', data);
    }
}