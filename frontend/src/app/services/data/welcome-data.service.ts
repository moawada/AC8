import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    let basicAuthHttpHeaderString = this.basicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHttpHeaderString  
    });
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean', {headers})
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string){
    let basicAuthHttpHeaderString = this.basicAuthHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHttpHeaderString  
    });

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`, {headers});
  }

  basicAuthHttpHeader(){
    let username = 'moe';
    let password = 'moe1';
    let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
    return basicAuthHeaderString;
  }
  
}
