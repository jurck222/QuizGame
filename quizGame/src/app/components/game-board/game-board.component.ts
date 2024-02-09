import { Component, inject, input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { category, question } from '../../models/category-model';
import { QuestionModalComponent } from '../question-modal/question-modal.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [GameBoardComponent],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.css'
})
export class GameBoardComponent{
  categories = input.required<category[]>();
  categoryNums = [0,1,2,3,4,5];
  questionNums = [0,1,2,3,4];
  
  readonly #modalService = inject(NgbModal);
  
  openQuestion(question: question) {
    const modalRef = this.#modalService.open(QuestionModalComponent);
    modalRef.componentInstance.question = input(question);
    
  }
}
