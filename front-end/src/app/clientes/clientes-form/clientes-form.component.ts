import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const cliente = this.route.snapshot.data['curso'];

    this.form = this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [cliente.email, [Validators.required, Validators.email]],
      dataNascimento: [cliente.dataNascimento, [Validators.required]],
      cpf: [cliente.cpf, [Validators.required]],
    });
  }

  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
    'has-error': this.verificaValidTouched(campo),
    'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
