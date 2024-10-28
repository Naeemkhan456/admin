// src/app/components/cotegories-list/cotegories-list.component.ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/post';
import { PostService } from 'src/app/post.service';
declare var bootstrap: any;

@Component({
  selector: 'app-cotegories-list',
  templateUrl: './cotegories-list.component.html',
  styleUrls: ['./cotegories-list.component.scss']
})
export class CotegoriesListComponent implements OnInit {
  @ViewChild('deleteModalRef', { static: false }) deleteModalRef!: ElementRef;
  selectedItem: Post | null = null; 
  itemsPerPage = 5;
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  paginatedItems: Post[] = [];
  posts: Post[] = [];

  constructor(private router: Router, private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    const search = '';
    const limit = 10;
    const page = this.currentPage; 

    this.postService.getAllPosts(search, limit, page).subscribe((result: any) => {
      const data = result.data.getAllPostWithSearch;
      this.posts = data.posts; // Array of posts
      this.calculateTotalPages();
      this.updatePaginatedItems();
    });
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.posts.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updatePaginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.posts.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedItems();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedItems();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedItems();
    }
  }

  removeItem(post: Post) {
    this.selectedItem = post;
    const modalElement = this.deleteModalRef.nativeElement; 
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }

  confirmDelete() {
    if (this.selectedItem) {
      
      console.log(`Item with IP Address ${this.selectedItem.ipAddress} deleted`); 
      this.selectedItem = null;
    }
  }
}
