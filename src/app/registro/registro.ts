import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {
  registerForm: FormGroup = new FormGroup({});

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      telefono: [''],
      email: ['', [Validators.required, Validators.email]],
      clave: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  submitRegistroForm() {
    let control = this.registerForm.controls;
    console.log(`Nombre: ${control['nombre'].value} - Correo: ${control['email'].value} - Clave: ${control['clave'].value}`);
  }
}
