import { Component, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-question-modal',
  standalone: true,
  imports: [],
  templateUrl: './question-modal.component.html',
  styleUrl: './question-modal.component.css'
})
export class QuestionModalComponent {
  question = input.required<string>();
  answer = input.required<string>();
  showAnswer = false;

  activeModal = inject(NgbActiveModal);

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }
}
