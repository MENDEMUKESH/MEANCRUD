import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
  console.log("STEP 1: Clicked");

  const data = {
    title: this.tutorial.title,
    description: this.tutorial.description
  };

  console.log("STEP 2: Data =", data);

  this.tutorialService.create(data)
    .subscribe({
      next: (res) => {
        console.log("STEP 3: Success", res);
        this.submitted = true;
      },
      error: (e) => {
        console.error("STEP 3: Error", e);
      }
    });
}

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}