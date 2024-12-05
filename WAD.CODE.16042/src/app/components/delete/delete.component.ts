import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../Post';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  post: Post | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router  // Inject Router to navigate between views
  ) {}

  ngOnInit(): void {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(postId)) {
      this.getPostDetails(postId);
    } else {
      this.error = 'Invalid Post ID';
    }
  }

  getPostDetails(id: number): void {
    this.postService.getPostById(id).subscribe({
      next: (post) => {
        this.post = post;
        this.error = null;
      },
      error: (err) => {
        console.error('Error fetching post details:', err);
        this.error = 'Failed to load post details.';
      }
    });
  }

  goBack(): void {
    // Navigate back to the home page (posts list)
    this.router.navigateByUrl('/home');
  }

  onDelete(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: () => {
        // Navigate back to the home page after successful deletion
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('Error deleting post:', err);
        this.error = 'Failed to delete post.';
      }
    });
  }
}
