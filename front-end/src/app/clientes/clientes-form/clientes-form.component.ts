import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';
import { ValidateBrService } from 'angular-validate-br';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent extends BaseFormDirective implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private validateBrService: ValidateBrService,

  ) {
    super();
  }

  ngOnInit() {
    const cliente = this.route.snapshot.data['clientes'];

    this.formulario = this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [cliente.email, [Validators.required, Validators.email]],
      dataNascimento: [cliente.dataNascimento, [Validators.required, CustomValidators.date]],
      cpf: [cliente.cpf, [Validators.required, this.validateBrService.cpf]],
    });
  }

  submit(){
    this.http.post(
      'http://httpbin.org/post', JSON.stringify(this.formulario.value))
        .pipe(
          map((res: any) => res))
          .subscribe((dados: any) => {
            console.log(dados);
            //this.resetar();
          },
          (error: any) => alert('erro')
        );
  }

  salvar(){
    
  }

  // validarEmail(formControl: FormControl) {
  //   return this.verificaEmailService.verificarEmail(formControl.value)
  //     .pipe(map(emailExiste => emailExiste ? { emailInvalido: true } : null));
  // }
}
