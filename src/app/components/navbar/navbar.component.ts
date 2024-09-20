import { Component } from '@angular/core';
import {AppStateService} from "../../service/app-state.service";
import {LoadingService} from "../../service/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(public appState: AppStateService,
              public laodingService: LoadingService,
              private route:Router) {
  }

  actions : Array<any> = [
    {name: 'Home', url: '/admin/home', icon:"bi bi-house"},
    {name: 'Products', url: '/admin/products', icon:"bi bi-box-seam"},
    {name: 'Add Products', url: '/admin/add-product', icon:"bi bi-plus"},
  ];

  currentAction:any;
  setCurrentAction(action: any) {
    this.currentAction = action;
  }

  logout(){
    this.appState.authState = {};
    this.route.navigateByUrl("/login");
  }

  login(){
    this.route.navigateByUrl("/login");
  }
}
