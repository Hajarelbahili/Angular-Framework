import { Component } from '@angular/core';
import {AppStateService} from "../../service/app-state.service";

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrl: './error-handler.component.css'
})
export class ErrorHandlerComponent {

  constructor(public appState: AppStateService) {
  }
}
