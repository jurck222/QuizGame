import { Component, inject, input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { question } from '../../models/category-model';

@Component({
  selector: 'app-question-modal',
  standalone: true,
  imports: [],
  templateUrl: './question-modal.component.html'
})
export class QuestionModalComponent {
  question = input.required<question>();
  showAnswer = 'unanswered';

  activeModal = inject(NgbActiveModal);

  submitAnswer(answer: string) {
    if(answer === this.question().answer){
      this.question().answered = true;
      this.showAnswer = 'correct'
    }
    else{
      this.showAnswer = 'wrong'
    }
  }
}
