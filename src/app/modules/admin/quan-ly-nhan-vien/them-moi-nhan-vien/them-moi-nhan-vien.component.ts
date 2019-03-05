import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/_core/models/nhanvien';
import { NhanVienService } from 'src/app/_core/services/nhan-vien.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-them-moi-nhan-vien',
  templateUrl: './them-moi-nhan-vien.component.html',
  styleUrls: ['./them-moi-nhan-vien.component.css']
})
export class ThemMoiNhanVienComponent implements OnInit {

  constructor(
    private nhanVienService: NhanVienService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  ThemNhanVien(manv: number, hoten: string, namsinh: number) {
    let nhanVienMoi: NhanVien = { MaNV: manv, HoTen: hoten, NamSinh: namsinh };

    this.nhanVienService.themNhanVien(nhanVienMoi);
    //  Quay lại trang trước
    this.location.back();
  }

}
