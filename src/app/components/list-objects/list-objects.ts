import { Component, OnInit } from '@angular/core';
import {ObjectService} from '../../services/object'
import { MyObject } from '../../model/object';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-objects',
  imports: [CommonModule],
  templateUrl: './list-objects.html',
  styleUrl: './list-objects.css'
  
})
export class ListObjects implements OnInit {
  object: MyObject[] = [];
  cargando: boolean = true;
  error: string = '';

  constructor(private objectService: ObjectService){}

  ngOnInit(): void {
    this.cargando = true;
    this.objectService.getAll().subscribe({
      next: (datos) => {
        this.object = datos;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'Error al cargar los usuarios'
        this.cargando = false;
        console.error(err);
      }
    })
  }

  
  
}
