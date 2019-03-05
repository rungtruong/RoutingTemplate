import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

import { RouterModule, Routes } from '@angular/router';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNhanVienModule } from './quan-ly-nhan-vien/quan-ly-nhan-vien.module';
import { FormsModule } from "@angular/forms";
const adminRoutes: Routes = [
  {
    path: '', component: AdminLayoutComponent, children: [
      // {path: '',component: QuanLyNguoiDungComponent},
      { path: 'quanlynguoidung', component: QuanLyNguoiDungComponent },
      { path: 'quanlyphim', component: QuanLyPhimComponent },
      { path: 'quanlynhanvien', loadChildren: () => QuanLyNhanVienModule },
    ]
  },

];



@NgModule({
  declarations: [AdminLayoutComponent, QuanLyNguoiDungComponent, QuanLyPhimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    FormsModule
  ]
})
export class AdminModule { }
