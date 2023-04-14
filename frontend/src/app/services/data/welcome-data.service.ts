import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/app/app.constants';

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
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`, 
    // {headers}
    );
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string){
    // let basicAuthHttpHeaderString = this.basicAuthHttpHeader();

    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHttpHeaderString  
    // });

    return this.http.get<HelloWorldBean>(
      `${API_URL}/hello-world/path-variable/${name}`, 
      // 
    );
  }

  // basicAuthHttpHeader(){
  //   let username = 'moe';
  //   let password = 'moe1';
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
  //   return basicAuthHeaderString;
  // }
  
}
