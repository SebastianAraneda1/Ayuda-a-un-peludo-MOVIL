import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  loadingControl = inject(LoadingController);
  toastControl = inject(ToastController);
  router = inject(Router);

  cargando(){
    return this.loadingControl.create({spinner:'bubbles'})
  }

  async presentarToast(opts?: ToastOptions){
    const toast = await this.toastControl.create(opts);
    toast.present();
  }
  
  routerLink(url:string){
    return this.router.navigateByUrl(url);
  }

  guardarEnLocalStorage(key:string, value:any){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  obtenerDatoLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key));
  }

}