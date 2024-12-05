import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../category.service';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms'; // Assuming you have a CategoryService

@Component({
  selector: 'app-create-category',
  standalone:true,
  imports:[CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {
  categoryName: string = '';
  error: string | null = null;

  constructor(
    private categoryService: CategoryService,
    public router: Router
  ) {}

  onSubmit(): void {
    if (this.categoryName.trim() === '') {
      this.error = 'Category name cannot be empty.';
      return;
    }

    this.categoryService.createCategory({ name: this.categoryName }).subscribe({
      next: (category) => {
        this.router.navigate(['/home']);  // Redirect to Home after creating the category
      },
      error: (err) => {
        console.error('Error creating category:', err);
        this.error = 'Failed to create category.';
      }
    });
  }

  goBack() {
    this.router.navigate(['/home']); // Now accessible in the template
  }
}
