import {HttpInterceptor} from '@angular/common/http';
import {AppStateService} from "./app-state.service";
import {LoadingService} from "./loading.service";
import {Injectable} from "@angular/core";

@Injectable()
export class appHttpInterceptor implements HttpInterceptor {

  constructor(private appState:AppStateService,
              private loadingService: LoadingService
              ) {
  }

  intercept(req: any, next: any): any {
    /*this.appState.setProductState({
        status:'LOADING'
    })*/
    this.loadingService.showLoading();

    let request = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + 'token')
      });


    return next.handle(request).pipe({
      finalize: () => {
        /*this.appState.setProductState({
          status:'LOADED'
        });*/
        this.loadingService.hideLoading();
      }
    });

  }
}
