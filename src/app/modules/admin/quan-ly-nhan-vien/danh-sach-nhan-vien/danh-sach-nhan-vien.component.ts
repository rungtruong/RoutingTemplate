import { Component, OnInit } from '@angular/core';
import { NhanVienService } from 'src/app/_core/services/nhan-vien.service';
import { NhanVien } from 'src/app/_core/models/nhanvien';

@Component({
  selector: 'app-danh-sach-nhan-vien',
  templateUrl: './danh-sach-nhan-vien.component.html',
  styleUrls: ['./danh-sach-nhan-vien.component.css']
})
export class DanhSachNhanVienComponent implements OnInit {

  public danhSachNhanVien: Array<NhanVien>;

  constructor(private nhanVienService: NhanVienService) {
    nhanVienService.layDanhSachNhanVien().subscribe(
      (data) => {
        this.danhSachNhanVien = data;
      }
    );
  }

  ngOnInit() {


  }

}
