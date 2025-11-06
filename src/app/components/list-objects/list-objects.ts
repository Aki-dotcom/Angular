import {Component, OnInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { MyObject } from '../../model/object';
import { ObjectService } from '../../services/object';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-objects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-objects.html',
  styleUrl: './list-objects.css',
})
export class ListObjects implements OnInit {

  object: MyObject[] = [];
  error: string = '';

  @ViewChild('modalAdd') modalAdd!: ElementRef;
  @ViewChild('modalEdit') modalEdit!: ElementRef;

  selectedObject: MyObject = {
    id: 0, name: '', email: '', phone: '', username: '', website: ''
  };

  constructor(
    private objectService: ObjectService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.objectService.getAll().subscribe({
      next: (datos) => {
        this.object = datos;
      },
      error: () => {
        this.error = 'Error al cargar';
        this.object = [];
      }
    });
  }


  
  openAddModal() {
    this.selectedObject = { id: 0, name: '', email: '', phone: '', username: '', website: '' };
    this.renderer.setStyle(this.modalAdd.nativeElement, 'display', 'block');
    this.modalAdd.nativeElement.classList.add('show');
  }

  closeAddModal() {
    this.renderer.setStyle(this.modalAdd.nativeElement, 'display', 'none');
    this.modalAdd.nativeElement.classList.remove('show');
  }

  saveObject() {
    if (!this.selectedObject.name || !this.selectedObject.email) {
      alert('Complete al menos Nombre y Email');
      return;
    }

    this.objectService.addObject(this.selectedObject).subscribe({
      next: (res) => {
        this.object.push(res);
        this.closeAddModal();
      },
      error: () => alert('Error guardando usuario')
    });
  }

  openEditModal(item: MyObject) {
    this.selectedObject = { ...item };
    this.renderer.setStyle(this.modalEdit.nativeElement, 'display', 'block');
    this.modalEdit.nativeElement.classList.add('show');
  }

  closeEditModal() {
    this.renderer.setStyle(this.modalEdit.nativeElement, 'display', 'none');
    this.modalEdit.nativeElement.classList.remove('show');
  }

  modifyObject() {
    this.objectService.putObject(this.selectedObject).subscribe({
      next: (res) => {
        const index = this.object.findIndex(u => u.id === res.id);
        if (index !== -1) {
          this.object[index] = res;
        }
        this.closeEditModal();
      },
      error: () => alert('Error editando usuario')
    });
  }

  removeObject(id: number) {
    this.object = this.object.filter(u => u.id !== id);
  }


}
