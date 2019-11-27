import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = "https://rb-br.github.io/API-Imagens.github.io/Site-Books-Hard/livros-up-down.json";
  

  constructor(private http: HttpClient) {   }


  listarLivros(): Observable<any> {
    return this.http.get<any[]>(this.API);
  }

}
