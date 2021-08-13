import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidateBrService } from 'angular-validate-br';
import { map } from 'rxjs/operators';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';

@Component({
  selector: 'app-profissionais-form',
  templateUrl: './profissionais-form.component.html',
  styleUrls: ['./profissionais-form.component.css']
})
export class ProfissionaisFormComponent extends BaseFormDirective implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    const profissional = this.route.snapshot.data['profissionais'];

    this.formulario = this.fb.group({
      id: [profissional.id],
      nome: [profissional.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [profissional.email, [Validators.required, Validators.email]],
      servico: [profissional.servicos, [Validators.required]],
      agendamentos: [profissional.agendamentos, [Validators.required]]

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

