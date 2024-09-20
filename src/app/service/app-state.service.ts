import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor() { }

  public productState:any = {
    products:[],
    keyword:'',
    totalPages:0,
    pageSize:3,
    currentPage:1,
    totalProducts:0,
    status:'',
    errorMessage:'',
  }

  public authState:any = {
    username:undefined,
    isAuthenticated:false,
    roles:undefined,
    token:undefined,

  }

  public setProductState(state:any){
    this.productState = {...this.productState, ...state};
  }

  public setAuthState(state:any){
    this.authState = {...this.authState, ...state};
  }
}
