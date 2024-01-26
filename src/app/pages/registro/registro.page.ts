import { Component, Input, OnInit, inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor() { }

  ngOnInit() {
  }

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  async submit(){

    if(this.form.valid){

      const cargando = await this.utilSvc.cargando();
      
      await cargando.present();

      this.firebaseSvc.crearCuenta(this.form.value as user).then(async response => {

        await this.firebaseSvc.actualizarUsuario(this.form.value.name);
        let uid = response.user.uid;

        this.form.controls.uid.setValue(uid);

        this.setearInformacionUsuario(uid);

      }).catch(error =>{

        console.log(error);
        this.utilSvc.presentarToast({
          message: error.message,
          duration: 2000,
          color: 'danger',
          position: 'middle',
          icon: 'alert-circle-outline'
        });

      }).finally(() => {

        cargando.dismiss();

      })

    }
  }

  async setearInformacionUsuario(uid:string){

    if(this.form.valid){

      const cargando = await this.utilSvc.cargando();
      
      await cargando.present();

      let path = `users/${uid}`;
      delete this.form.value.password;

      this.firebaseSvc.setDocument(path, this.form.value).then(async response => {

        this.utilSvc.guardarEnLocalStorage('user', this.form.value);
        this.utilSvc.routerLink('/inicio');
        this.form.reset();

      }).catch(error =>{

        console.log(error);
        this.utilSvc.presentarToast({
          message: error.message,
          duration: 2000,
          color: 'danger',
          position: 'middle',
          icon: 'alert-circle-outline'
        });

      }).finally(() => {

        cargando.dismiss();

      })

    }
  }


}
