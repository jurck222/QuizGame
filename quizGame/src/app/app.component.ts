import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { category } from './models/category-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameBoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'quizGame';
  categories : category[]

  ngOnInit(): void {
    this.categories = [
      {
        category: 'World',
        questions: [
          {
            clue: 'Whats the biggest country in the world?',
            answer: 'Russia',
            value: 200
          },
          {
            clue: 'What country has the famous pyramids?',
            answer: 'Egypt',
            value: 400
          },
          {
            clue: 'What country has a big wall spanning the length of the country?',
            answer: 'China',
            value: 600
          },
          {
            clue: 'What country has a festival with the running of the bulls?',
            answer: 'Spain',
            value: 800
          },
          {
            clue: 'What countrys capital is Addis Ababa?',
            answer: 'Ethiopia',
            value: 1000
          }
        ]
      },
      {
        category: 'Movies',
        questions: [
          {
            clue: 'What films feature the Jedi?',
            answer: 'Star Wars',
            value: 200
          },
          {
            clue: 'Name the two stars of Titanic.',
            answer: 'Kate & Leo',
            value: 400
          },
          {
            clue: 'Who directed ET, Jurassic Park, and Schindlers List?',
            answer: 'Spielburg',
            value: 600
          },
          {
            clue: 'What singer starred in the movie version of Selena?',
            answer: 'Jennifer Lopez',
            value: 800
          },
          {
            clue: 'What movie won best picture in 2001?',
            answer: 'A Beautiful Mind',
            value: 1000
          },
        ]
      },
      {
        category: 'Science',
        questions: [
          {
            clue: 'What is the smallest unit of matter?',
            answer: 'Atom',
            value: 200
          },
          {
            clue: 'What is the chemical symbol for gold?',
            answer: 'Au',
            value: 400
          },
          {
            clue: 'What is the formula for Einsteins theory of relativity?',
            answer: 'E=mc^2',
            value: 600
          },
          {
            clue: 'What is the study of fossils called?',
            answer: 'Paleontology',
            value: 800
          },
          {
            clue: 'What is the speed of light in a vacuum?',
            answer: '299,792,458 meters per second',
            value: 1000
          },
        ]
      },
      {
        category: 'Music',
        questions: [
          {
            clue: 'Who wrote the classical composition \"Symphony No. 5\"?',
            answer: 'Ludwig van Beethoven',
            value: 200
          },
          {
            clue: 'Who was the lead vocalist of the band Queen?',
            answer: 'Freddie Mercury',
            value: 400
          },
          {
            clue: 'What is the name of Michael Jacksons best-selling album?',
            answer: 'Thriller',
            value: 600
          },
          {
            clue: 'Which band released the album \"Dark Side of the Moon\"?',
            answer: 'Pink Floyd',
            value: 800
          },
          {
            clue: 'What is the name of Beyoncés debut solo album?',
            answer: 'Dangerously in Love',
            value: 1000
          },
        ]
      },
      {
        category: 'Pop',
        questions: [
          {
            clue: 'Who played the character Walter White in the TV series \"Breaking Bad\"?',
            answer: 'Bryan Cranston',
            value: 200
          },
          {
            clue: 'What is the highest-grossing video game franchise of all time?',
            answer: 'Pokemon',
            value: 400
          },
          {
            clue: 'Who wrote the novel "The Hunger Games"?',
            answer: 'Suzanne Collins',
            value: 600
          },
          {
            clue: 'In the TV series "Friends," what is Joey Tribbianis catchphrase?',
            answer: 'How you doin?',
            value: 800
          },
          {
            clue: 'Who is the creator of the animated TV series \"The Simpsons\"?',
            answer: 'Matt Groening',
            value: 1000
          },
        ]
      },
      {
        category: 'History',
        questions: [
          {
            clue: 'Who was the first female pharaoh of ancient Egypt?',
            answer: 'Cleopatra',
            value: 200
          },
          {
            clue: 'Who was the first President of the United States?',
            answer: 'George Washington',
            value: 400
          },
          {
            clue: 'Who discovered the law of gravity?',
            answer: 'Isaac Newton',
            value: 600
          },
          {
            clue: 'Which country was the birthplace of the Renaissance?',
            answer: 'Italy',
            value: 800
          },
          {
            clue: 'In what year did the Black Death pandemic ravage Europe?',
            answer: '1347',
            value: 1000
          },
        ]
      },
    ]
  }
}
