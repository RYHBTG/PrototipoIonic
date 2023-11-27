import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor() { }
  private listmagias:any = [{name: "Mãos Flamejantes", conjuracao: "1 Ação", duracao: "Instantaneo",componentes:"V,S,M", circulo: 1 ,descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quod cupiditate voluptatem laboriosam iusto repudiandae officiis numquam magnam? Nisi debitis enim tempore cum harum similique magnam, vero laudantium repudiandae facere!" },
                              {name: "Misseis Magicos", conjuracao: "1 Ação", duracao: "Instantaneo", componentes: "V,S", circulo: 1, descricao: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, quod cupiditate voluptatem laboriosam iusto repudiandae officiis numquam magnam? Nisi debitis enim tempore cum harum similique magnam, vero laudantium repudiandae facere!"}];

  public getMagias():any[]{
    return this.listmagias;
  }
  public addMagias(novaMagia:any[]){
    this.listmagias.push(novaMagia) ;
  }
  delMagias(indice:number){
    this.listmagias.splice(indice,1);
  }
}
