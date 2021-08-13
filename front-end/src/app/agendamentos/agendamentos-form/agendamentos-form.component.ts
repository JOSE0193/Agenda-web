import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { map } from 'rxjs/operators';
import { BaseFormDirective } from 'src/app/shared/base-form/base-form.directive';

@Component({
  selector: 'app-agendamentos-form',
  templateUrl: './agendamentos-form.component.html',
  styleUrls: ['./agendamentos-form.component.css']
})
export class AgendamentosFormComponent extends BaseFormDirective implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
  )
    {
    super();
    }

  ngOnInit() {
    const agendamento = this.route.snapshot.data['agendamentos'];

    this.formulario = this.fb.group({
      id: [agendamento.id],
      data: [agendamento.data, [Validators.required, CustomValidators.date]],
      observacoes: [agendamento.observacoes, [Validators.maxLength(200)]],
      cliente: [agendamento.cliente],
      servico: [agendamento.servico],
      profissional: [agendamento.profissional]
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
