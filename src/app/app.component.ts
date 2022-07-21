import { Component, OnInit } from '@angular/core';
import { ClientsService } from './services/clients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'padreTFrontend';
  clientsList: any = [];

  constructor(private clientsService: ClientsService) {
    console.log('El componente se ha creado');
  }
  ngOnInit(): void {
    console.log('El componente se ha inicializado');
    this.clientsService.getClients()
      .subscribe( clients => this.clientsList = clients );
  }
}
