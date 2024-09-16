import { Component, Input } from '@angular/core';

export enum EducationalInstitution {
  FIAP = 'FIAP',
  ANHANGUERA = 'Anhanguera Educacional'
}

export interface EducationalBackground {
  institution: EducationalInstitution;
  name: string;
  period: {
    start: Date;
    end: Date | undefined;
  }
}

@Component({
  selector: 'app-academy',
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.scss'
})
export class AcademyComponent {
  @Input() educational: EducationalBackground;
}
