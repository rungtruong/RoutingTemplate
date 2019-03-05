import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyNhanVienComponent } from './quan-ly-nhan-vien/quan-ly-nhan-vien.component';
import { DanhSachNhanVienComponent } from './danh-sach-nhan-vien/danh-sach-nhan-vien.component';

import { RouterModule, Routes } from '@angular/router';
import { ThemMoiNhanVienComponent } from './them-moi-nhan-vien/them-moi-nhan-vien.component';

const quanLyNhanVienRoutes: Routes = [
  {
    path: '', component: QuanLyNhanVienComponent, children: [
      { path: '', component: DanhSachNhanVienComponent },
      { path: 'danhsach', component: DanhSachNhanVienComponent },
      { path: 'themmoi', component: ThemMoiNhanVienComponent },
    ]
  }];


@NgModule({
  declarations: [QuanLyNhanVienComponent, DanhSachNhanVienComponent, ThemMoiNhanVienComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(quanLyNhanVienRoutes)
  ],
  exports: [
    QuanLyNhanVienComponent, DanhSachNhanVienComponent, ThemMoiNhanVienComponent
  ]
})
export class QuanLyNhanVienModule { }
