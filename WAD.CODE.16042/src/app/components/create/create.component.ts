import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../post.service';
import { Post } from '../../Post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  postForm: FormGroup;
  error: string | null = null;

  constructor(
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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.postForm.invalid) {
      this.error = 'Please fill out all fields correctly!';
      return;
    }

    const newPost: Post = {
      ...this.postForm.value,
      id: 0  // ID will be assigned by the backend
    };

    this.postService.createPost(newPost).subscribe({
      next: () => {
        this.router.navigateByUrl('/home');  // Redirect to the posts list after creating
      },
      error: (err) => {
        console.error('Error creating post:', err);
        this.error = 'Failed to create post.';
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/home');  // Navigate back to the posts list
  }
}
