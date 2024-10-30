import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/post.service'; // Adjust the path based on your project structure

@Component({
  selector: 'app-cotegories-form',
  templateUrl: './cotegories-form.component.html',
  styleUrls: ['./cotegories-form.component.scss']
})
export class CotegoriesFormComponent implements OnInit {
  itemForm!: FormGroup;
  categories: any[] = [];
  subCategories: any[] = [];
  selectedCategory: any;

  constructor(private fb: FormBuilder, private postService: PostService) {}

  ngOnInit() {
    this.itemForm = this.fb.group({
      category: ['', Validators.required],
      createdBy: [''],
      description: ['', Validators.required],
      image: [''],
      metaDescription: [''],
      metaImage: [''],
      metaTitle: [''],
      subCategory: [''],
      tags: [''],
      title: ['', Validators.required]
    });

    // Load categories on init
    this.loadCategories();
  }

  // Fetch categories from PostService
  loadCategories() {
    this.postService.getAllPosts('', 10, 1).subscribe((response: any) => {
      console.log('API Response:', response);
      this.categories = response?.data?.getAllPostWithSearch?.categories || [];
      console.log('Fetched Categories:', this.categories);
    });
  }

  // Load subcategories based on selected category
  onCategoryChange() {
    const selectedCategoryId = this.itemForm.get('category')?.value;
    console.log('Selected Category ID:', selectedCategoryId);
    if (selectedCategoryId) {
      const selectedCategory = this.categories.find(cat => cat._id === selectedCategoryId);
      this.subCategories = selectedCategory?.subCategories || [];
      console.log('Fetched SubCategories:', this.subCategories);
    }
  }

  onSubmit() {
    if (this.itemForm.valid) {
        const postData = {
            title: this.itemForm.get('title')?.value,
            description: this.itemForm.get('description')?.value,
            createdBy: this.itemForm.get('createdBy')?.value, // Adjust if needed
            category: this.itemForm.get('category')?.value,
            subCategory: this.itemForm.get('subCategory')?.value,
            image: this.itemForm.get('image')?.value,
            metaDescription: this.itemForm.get('metaDescription')?.value,
            metaImage: this.itemForm.get('metaImage')?.value,
            metaTitle: this.itemForm.get('metaTitle')?.value,
            tags: this.itemForm.get('tags')?.value,
        };

        // Handle file input
        const fileInput = document.querySelector<HTMLInputElement>('#fileInput');
        const file: File | undefined = fileInput?.files && fileInput.files.length > 0 ? fileInput.files[0] : undefined; // Use conditional to ensure undefined

        this.postService.createPost(postData, file).subscribe({
            next: (response) => {
                console.log('Post created successfully!', response);
                this.itemForm.reset(); // Optionally reset the form
            },
            error: (err) => {
                console.error('Error creating post:', err);
            }
        });
    } else {
        this.itemForm.markAllAsTouched();
        console.log('Form is not valid');
    }
}

}
