import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';
import { ServicoService } from '../service/servico.service';
import { Servico } from '../servico';

@Component({
  selector: 'app-servico-lista',
  templateUrl: './servico-lista.component.html',
  styleUrls: ['./servico-lista.component.css']
})
export class ServicoListaComponent implements OnInit {

  deleteModalRef!: BsModalRef;
  //@ViewChild('deleteModal', {static: true}) deleteModal;

  servicos$!: Observable<Servico[]>;
  error$ = new Subject<boolean>();

  constructor(
    private alertService: AlertModalService,
    private service: ServicoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh(){
    this.servicos$ = this.service.findAll()
      .pipe(
        catchError(error => {console.error
          this.handleError();
          return EMPTY;
        })
      );
  }

  handleError(){
    this.alertService.showAlertDanger('Erro ao carregar a lista de serviços. Tente novamente mais tarde.');
  }

  onEdit(){
    this.router.navigate(['edit, id'], {relativeTo: this.route});
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
