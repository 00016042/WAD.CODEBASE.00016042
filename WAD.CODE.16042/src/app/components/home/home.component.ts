import { Component, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { Post } from '../../Post';
import { PostService } from '../../post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule], // Add CommonModule
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  router = inject(Router);
  posts: Post[] = [];
  postService = inject(PostService);

  displayedColumns: string[] = ['id', 'title', 'content', 'categoryId', 'actions'];

  ngOnInit() {
    this.postService.getAll().subscribe({
      next: (result) => {
        console.log('Posts fetched from API:', result);
        this.posts = result;
      },
      error: (err) => {
        console.error('Error fetching posts:', err);
      }
    });
  }

  onCreate() {
    this.router.navigateByUrl('/create');
  }

  onEdit(id: number) {
    this.router.navigateByUrl('/edit/' + id);
  }

  onDetails(id: number) {
    this.router.navigateByUrl('/details/' + id);
  }

  onDelete(id: number) {
    this.router.navigateByUrl('/delete/' + id);
  }

  onCreateCategory() {
    this.router.navigateByUrl('/create-category'); // Navigate to the Create Category page
  }
}
