import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})
export class QuizlistComponent implements OnInit {

  constructor() { }

  quizzes = [{"_id": "5b31df8f4dcd230b07c8dcd3", "questions": [{"title": "TrueFalseTest", "points": 20,
      "description": "Is the sky blue?", "type": "tf"},
      {"title": "EssayTest", "points": 10, "description": "Write an essay on the Revolution", "type": "essay"}]},
      {"question": [],
        "_id": "5b31e1094dcd230b07c8dcd4", "questions": [{"title": "Test MultChoice", "type": "mc", "points": 15,
          "description": "Example of a multiple choice question.", "options": ["First choice", "Second choice", "Third choice"]},
          {"title": "Fill In The Blank", "type": "blank", "points": 25, "description":
              "Here is the description.", "body": "Fill in the blank: 2 + 2 = [4=4]"}]},
    {"_id": "5b31df8f4dcd230b07c8aa", "questions": [{"title": "test", "points": 15,
        "description": "Is the sky blue?", "type": "tf"},
        {"title": "second test", "points": 10, "description": "Write an essay on the Revolution, or something", "type": "essay"}]}];

  ngOnInit() {
  }
}
