import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Post } from './Post';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'post-app'; // Updated app title to reflect posts

  // Example posts to simulate initial data
  posts: Post[] = [
    {
      id: 1,
      title: 'Angular Basics',
      content: 'Learn the fundamentals of Angular.',
      categoryId: 3
    },
    {
      id: 2,
      title: 'API Integration',
      content: 'Understand how to integrate APIs in Angular.',
      categoryId: 2
    },
    {
      id: 3,
      title: 'Material Design',
      content: 'Implement Material Design in your projects.',
      categoryId: 1
    },
    {
      id: 4,
      title: 'Routing in Angular',
      content: 'Explore how routing works in Angular apps.',
      categoryId: 3
    },
    {
      id: 5,
      title: 'Debugging Tips',
      content: 'Learn tips and tricks for debugging Angular apps.',
      categoryId: 2
    }
  ];
}
