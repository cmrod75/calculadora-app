import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  operandoA = 0;
  operandoB = 0;
  operandoC = 0;
  resultado = 0;

  sumar(): void {
    this.resultado = this.operandoA + this.operandoB;
  }
}
