import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }

  getDetails(){
    let resultPromise: Promise<string> = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve('Data')
      }, 1500)
    })
    return resultPromise;
  }
}
