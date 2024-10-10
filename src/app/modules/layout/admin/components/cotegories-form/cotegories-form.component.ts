import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotegories-form',
  templateUrl: './cotegories-form.component.html',
  styleUrls: ['./cotegories-form.component.scss']
})
export class CotegoriesFormComponent implements OnInit {
  itemForm!: FormGroup;
  categories = [
    { label: 'Category 1', value: 'category1' },
    { label: 'Category 2', value: 'category2' },
    { label: 'Category 3', value: 'category3' }
  ];

  constructor(private fb: FormBuilder) {}

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
  }

  onSubmit() {
    if (this.itemForm.valid) {
      console.log('Form Submitted!', this.itemForm.value);
    } else {
      this.itemForm.markAllAsTouched();
      console.log('Form is not valid');
    }
  }
}
