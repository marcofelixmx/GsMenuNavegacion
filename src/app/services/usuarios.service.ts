import { computed, inject, Injectable, signal } from '@angular/core';
import { Usuario, UsuariosResponse } from '../interfaces/usuario-response';
import { HttpClient } from '@angular/common/http';

interface State{
  usuarios: Usuario[];
  loading: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

private http = inject(HttpClient);

  #state = signal<State>(
    {
      loading :true,
      usuarios:[],
    }
  )

  public usuarios = computed(()=> this.#state().usuarios)
  public loading =  computed(()=>this.#state().loading)

  constructor() {

     this.http.get<UsuariosResponse>("https://randomuser.me/api/")
     .subscribe(resp =>{
      this.#state.set({
        loading: false,
        usuarios : resp.results
      }) 
     })

   }
}
