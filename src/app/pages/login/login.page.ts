import { Component, Input, OnInit, inject } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  firebaseSvc = inject(FirebaseService);
  utilSvc = inject(UtilsService);

  ngOnInit() {
  }

  async submit(){

    if(this.form.valid){

      const cargando = await this.utilSvc.cargando();
      
      await cargando.present();

      this.firebaseSvc.iniciarSesion(this.form.value as user).then(response => {
        console.log(response);
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
