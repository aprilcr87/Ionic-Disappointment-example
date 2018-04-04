import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MagicBall {
url = "/Users/aprilrivera/Dev/April/Ionic-Disappointment-example/src/manifest.json";

constructor(private http: HttpClient) {}

 getData() {
   const req = new HttpRequest('GET', this.url, {
     reportProgress: true
   });
   return this.http.request(req);
 };
 
}