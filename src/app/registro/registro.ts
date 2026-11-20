import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
  private formBuilder = inject(FormBuilder);

  registroForm = this.formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', Validators.required],
    direccion: this.formBuilder.group({
      calle: [''],
      ciudad: ['']
    })
  });

  onSubmit(): void {
    console.log('Valor del formulario de registro:', this.registroForm.value);
  }

  cargarDireccionPrueba(): void {
    this.registroForm.patchValue({
      direccion: {
        calle: 'Av. Colón 1234',
        ciudad: 'Córdoba'
      }
    });
  }
}
