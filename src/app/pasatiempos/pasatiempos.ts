import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pasatiempos',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pasatiempos.html',
  styleUrl: './pasatiempos.css'
})
export class Pasatiempos {
  private formBuilder = inject(FormBuilder);

  pasatiemposForm = this.formBuilder.group({
    pasatiempos: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });

  get pasatiempos(): FormArray {
    return this.pasatiemposForm.get('pasatiempos') as FormArray;
  }

  agregarPasatiempo(): void {
    this.pasatiempos.push(this.formBuilder.control(''));
  }
}
