import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/_core/models/nguoidung';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dang-ky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.css']
})
export class DangKyComponent implements OnInit {

  saveForm: boolean = false;

  constructor(private nguoiDungService: NguoiDungService) { }

  @ViewChild('formDangKy') formDangKy: NgForm;

  ngOnInit() {

  }

  soSanhMK(mk: string, mknhaplai: string): boolean {
    if (mknhaplai !== mk) {
      this.formDangKy.control.setErrors({ 'loiNhapLaiMauKhau': true });
      return true;
    }
    else {
      this.formDangKy.control.setErrors({ 'loiNhapLaiMauKhau': false });
      return false;
    }

  }

  DangKy(nguoiDung: NguoiDung) {
    nguoiDung.MaNhom = 'GP06';
    nguoiDung.MaLoaiNguoiDung = 'KhachHang';
    this.nguoiDungService.dangKy(nguoiDung).subscribe(
      (data) => {
        // console.log(data);
        if (typeof data === 'object') {
          Swal.fire('Thành công...', 'Chúc mừng bạn đăng ký thành công!', 'success')
        }
        else {
          Swal.fire('Oops...', data, 'warning')
        }
      }
    )
    this.saveForm = true;

    // console.log(nguoiDung);

  }

}
