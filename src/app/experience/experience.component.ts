import { Component, Input } from '@angular/core';

export interface Experience {
  business: string;
  profession: string;
  period: {
    start: number;
    end: number | undefined;
  },
  description: string;
  practices: string[]
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  @Input() experience: Experience;
}
