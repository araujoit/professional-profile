import { Component, Input } from '@angular/core';

export interface Skill {
  name: string;
  description: string;
}

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent {
  @Input() skill: Skill;
}
