import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ProfissionaisService } from './../service/profissionais.service';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { Profissional } from '../profissional';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-profissionais',
  templateUrl: './profissionais.component.html',
  styleUrls: ['./profissionais.component.css'],
  preserveWhitespaces: true
})
export class ProfissionaisComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  //@ViewChild('deleteModal', {static: true}) deleteModal;

  profissionais$!: Observable<Profissional[]>;
  error$ = new Subject<boolean>();

  constructor(
    private alertService: AlertModalService,
    private service: ProfissionaisService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.profissionais$ = this.service.findAll()
      .pipe(
        catchError(error => {console.error
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar a lista de profissionais. Tente novamente mais tarde.');
  }

  onEdit(){

  }

  onDelete(){
        // const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    // result$.asObservable()
    // .pipe(
    //   take(1),
    //   switchMap(result => result ? this.service.remove(curso.id) : EMPTY)
    // )
    // .subscribe(
    //   success => {
    //     this.onRefresh();
    //   },
    //   error => {
    //     this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
    //   }
    // );
  }

  onConfirmDelete(){

  }

  onDeclineDelete(){

  }

}
