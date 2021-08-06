import { AuthService } from 'src/app/shared/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  mostrarItensNav: boolean = false;

  constructor(private authService: AuthService){
  }

  ngOnInit(){
    this.authService.mostrarMenu.subscribe(
      mostrar => this.mostrarItensNav = mostrar
    );
  }
}
