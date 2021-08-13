import { AgendamentosService } from './../service/agendamgentos.service';
import { Agendamento } from './../agendamento';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.css'],
  preserveWhitespaces: true
})
export class AgendamentosComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  //@ViewChild('deleteModal', {static: true}) deleteModal;

  agendamentos$!: Observable<Agendamento[]>;
  error$ = new Subject<boolean>();

  constructor(
    private alertService: AlertModalService,
    private service: AgendamentosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.agendamentos$ = this.service.findAll()
      .pipe(
        catchError(error => {console.error
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar os Agendamentos. Tente novamente mais tarde.');
  }

  onEdit(){

  }

  onDelete(){

  }

  onConfirmDelete(){

  }

  onDeclineDelete(){

  }
}
