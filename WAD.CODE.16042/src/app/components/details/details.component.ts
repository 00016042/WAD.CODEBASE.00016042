import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../Post';
import { PostService } from '../../post.service';
import { CategoryService } from '../../category.service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  post: Post | null = null;
  error: string | null = null;
  category: string | null = null;  // To store category name

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService, // Inject CategoryService to fetch category details
    private router: Router  // Inject Router to handle navigation
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
    this.postService.getById(id).subscribe({
      next: (post) => {
        this.post = post;
        // Fetch the category details by categoryId if it exists
        if (this.post.categoryId) {
          this.categoryService.getById(this.post.categoryId).subscribe({
            next: (category) => {
              this.category = category.name;  // Set category name
              this.error = null;
            },
            error: (err) => {
              console.error('Error fetching category details:', err);
              this.category = 'Unknown category';  // Set fallback category name
            }
          });
        } else {
          this.category = 'No category';  // If no categoryId, set fallback category
        }
        this.error = null;
      },
      error: (err) => {
        console.error('Error fetching post details:', err);
        this.error = 'Failed to load post details.';
      },
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);  // Navigates back to the HomeComponent
  }
}
