import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CounterComponent } from './counter/counter.component'; // Import CounterComponent
import { ProjectContainerComponent } from './project-container/project-container.component';
import { ResumeCardComponent } from './resume-card/resume-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProjectContainerComponent, ContactFormComponent, ResumeCardComponent], // Include CounterComponent in imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal_website';
}
