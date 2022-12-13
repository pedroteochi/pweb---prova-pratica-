import { Component, OnInit } from '@angular/core';
import { AService } from '../service';
import { ServiceLink } from '../service.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  service: AService[]=[]; //criando uma propriedade que pode ou não ser obrigatório que trás a nossa interface

  constructor(private ServiceLink: ServiceLink) { } //injetando no construtor o nosso serviço

  ngOnInit(): void {
    this.ServiceLink.ObserTodos()
      .subscribe(inter => this.service = inter);
  }
}


