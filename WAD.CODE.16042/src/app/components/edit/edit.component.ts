import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../post.service';
import { Post } from '../../Post';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  postForm: FormGroup;
  post: Post | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.postForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      content: ['', [Validators.required, Validators.minLength(10)]],
      categoryId: ['', [Validators.required]]
    });
  }

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
        this.postForm.patchValue(post);  // Pre-fill the form with current post data
      },
      error: (err) => {
        console.error('Error fetching post details:', err);
        this.error = 'Failed to load post details.';
      }
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      this.error = 'Please fill out all fields correctly!';
      return;
    }

    const updatedPost: Post = {
      ...this.postForm.value,
      id: this.post?.id || 0  // Use existing post ID
    };

    this.postService.updatePost(updatedPost).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');  // Redirect to the posts list after editing
      },
      error: (err) => {
        console.error('Error updating post:', err);
        this.error = 'Failed to update post.';
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/home');  // Navigate back to the posts list
  }
}
