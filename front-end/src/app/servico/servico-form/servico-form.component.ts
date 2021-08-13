import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';

@Component({
  selector: 'app-servico-form',
  templateUrl: './servico-form.component.html',
  styleUrls: ['./servico-form.component.css']
})
export class ServicoFormComponent extends BaseFormDirective implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    super();
  }

  ngOnInit() {
    const servico = this.route.snapshot.data['profissionais'];

    this.formulario = this.fb.group({
      id: [servico.id],
      nome: [servico.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      profissionais: [servico.profissional, [Validators.required]],
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
