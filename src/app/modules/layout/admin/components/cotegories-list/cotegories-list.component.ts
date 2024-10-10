import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-cotegories-list',
  templateUrl: './cotegories-list.component.html',
  styleUrls: ['./cotegories-list.component.scss']
})
export class CotegoriesListComponent implements OnInit {
  @ViewChild('deleteModalRef', { static: false }) deleteModalRef!: ElementRef;
  selectedItem: any = null;
  itemsPerPage = 5; // Number of items per page
  currentPage = 1;
  totalPages = 0;
  pages: number[] = [];
  paginatedItems: any[] = [];
  items = [
    { day: 1, articleName: 'Bootstrap 4 CDN and Starter Template', author: 'Cristina', shares: 2846 },
    { day: 2, articleName: 'Angular Tutorial', author: 'John', shares: 1546 },
    { day: 3, articleName: 'React Basics', author: 'Mary', shares: 1986 },
    { day: 4, articleName: 'Vue.js Guide', author: 'Doe', shares: 2300 },
    { day: 5, articleName: 'Node.js Best Practices', author: 'Smith', shares: 3100 },
    { day: 6, articleName: 'Python Tips and Tricks', author: 'Emily', shares: 5000 },
    // Add more items as needed
  ];


  constructor( private router: Router) {}

  ngOnInit(): void {
    this.calculateTotalPages();
    this.updatePaginatedItems();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.items.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  updatePaginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedItems = this.items.slice(startIndex, endIndex);
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

  removeItem(item: any) {
    this.selectedItem = item;
    const modalElement = this.deleteModalRef?.nativeElement; // Safely access nativeElement
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show(); // Show the modal
    } else {
      console.error("Modal element not found");
    }
  }

  confirmDelete() {
    if (this.selectedItem) {
      // Perform delete logic
      console.log(`Item with ID ${this.selectedItem.id} deleted`);
      this.selectedItem = null;
    }
  }

  // Modal
}
