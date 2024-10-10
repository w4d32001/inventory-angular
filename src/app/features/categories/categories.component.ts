import { Component, EventEmitter, inject, Output } from '@angular/core';
import { DataTableComponent } from '../../shared/components/data-table/data-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from '../../core/services/api/category.service';
import { Category, CategoryResponse } from './model/category';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { FormControlComponent } from '../../shared/components/form-control/form-control.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { NotificationService } from '../../core/services/util/notification.service';
import { ModalComponent } from "../../shared/components/modal/modal.component";
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    DataTableComponent,
    LoaderComponent,
    FormControlComponent,
    ReactiveFormsModule,
    ModalComponent,
    FontAwesomeModule
],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  private categoryService = inject(CategoryService);
  private notificationService = inject(NotificationService);
  categories: Category[] = [];
  formCategory!: FormGroup;
  categoryFormUpdate!: FormGroup;

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Category>(this.categories);

  isLoading: boolean = false;
  isOpen: boolean = false;

  currentCategoryId?: string; 

  get nameFb() {
    return this.formCategory.controls['name'];
  }
  get descriptionFb() {
    return this.formCategory.controls['description'];
  }
  constructor(private fb: FormBuilder) {
    this.formCategory = this.fb.group({
      name: [''],
      description: [''],
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.isLoading = true;
    this.categoryService
      .getCategoriesWithMessages()
      .subscribe((response: CategoryResponse) => {
        this.categories = response.dto.listCategory;
        this.dataSource.data = this.categories;
        this.isLoading = false;
      });
  }

  saveData() {
    if (!this.formCategory.valid) {
      this.formCategory.markAllAsTouched();
      this.formCategory.markAsDirty();
      return;
    }
  
    let formData: FormData = new FormData();
    formData.append('name', this.nameFb.value);
    formData.append('description', this.descriptionFb.value);
  
    if (this.currentCategoryId) {
      formData.append('categoryId', this.currentCategoryId);
      this.categoryService.update(formData).subscribe(
        (response) => {
          response.listMessage.forEach((message) => {
            this.notificationService.showSuccess(message);
          });
          this.getAllCategories();
          this.clearForm();
          this.closeModal();
        },
        (error) => {
          error.error.listMessage.forEach((message: string) => {
            this.notificationService.showError(message);
          });
        }
      );
    } else {
      this.categoryService.save(formData).subscribe(
        (response) => {
          response.listMessage.forEach((message) => {
            this.notificationService.showSuccess(message);
          });
          this.getAllCategories();
          this.clearForm();
        },
        (error) => {
          error.error.listMessage.forEach((message: string) => {
            this.notificationService.showError(message);
          });
        }
      );
    }
  }
  

  onEdit(category: Category) {
    this.currentCategoryId = category.categoryId; 
    this.formCategory.patchValue(category);
    this.openModal();
  }

  onDelete(category: Category): void {
    if (!category.categoryId) {
      console.error('categoryId is undefined or null');
      return;
    }
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) { 
        this.categoryService.delete(category.categoryId).subscribe(
          (response) => {
            this.categories = this.categories.filter(c => c.categoryId !== category.categoryId);
            this.dataSource.data = this.categories;
            response.listMessage.forEach((message) => {
              this.notificationService.showSuccess(message);
            });
          },
          (error) => {
            error.error.listMessage.forEach((message: string) => {
              this.notificationService.showError(message);
            });
          }
        );
      } 
    });
  }

  clearForm() {
    this.formCategory.reset(); 
    this.currentCategoryId = undefined;
  }

  closeModal() {
    this.clearForm();
    this.isOpen = false;
  }
  
  icon: IconDefinition = faPlus;
  openModal() {
    this.isOpen = true;
  }

}
