import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  preserveWhitespaces: true
})
export class ClientesComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal', {static: true}) deleteModal;

  clientes$!: Observable<Cliente[]>;
  error$ = new Subject<boolean>();

  constructor(
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private service: ClientesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.clientes$ = this.service.list()
      .pipe(
        catchError(error => {console.error
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(){
    this.router.navigate(['novo, id'], {relativeTo: this.route});
  }

  onDelete(){

  }


  onConfirmDelete(){

  }

  onDeclineDelete(){

  }

}
