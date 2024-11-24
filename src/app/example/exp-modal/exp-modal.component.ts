import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { ModalComponent } from 'src/app/shared/ui/modal/modal.component';

@Component({
  selector: 'app-content',
  standalone: true,
  template: `Hello user {{ user }}`,
})
export class ContentComponent {
  user = 'foo';
}

@Component({
  selector: 'app-exp-modal',
  standalone: true,
  imports: [ContentComponent,ModalComponent,NgIf],
  templateUrl: './exp-modal.component.html',
  styleUrls: ['./exp-modal.component.scss']
})
export class ExpModalComponent {
  isModalOpened = false;
  openModal(): void {
    this.isModalOpened = true;
  }

  closeModal(): void {
    this.isModalOpened = false;
  }
}
