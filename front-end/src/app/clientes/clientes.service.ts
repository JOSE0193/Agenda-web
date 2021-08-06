import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private readonly API = `${environment.API}clientes`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Cliente[]>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }


}
