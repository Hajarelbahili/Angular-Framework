import { Component } from '@angular/core';
import {AppStateService} from "../../service/app-state.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(public appState:AppStateService) {
  }


  totalCheckedProducts() {
    let checkedProducts =  this.appState.productState.products.filter(
      (p:any)=>p.checked==true
    );

    return checkedProducts.length;
  }
}
