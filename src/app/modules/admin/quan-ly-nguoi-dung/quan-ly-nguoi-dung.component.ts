import { Component, OnInit, ViewChild } from '@angular/core';
import { NguoiDung } from 'src/app/_core/models/nguoidung';
import { NgForm } from '@angular/forms';
import { NguoiDungService } from 'src/app/_core/services/nguoi-dung.service';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.css']
})
export class QuanLyNguoiDungComponent implements OnInit {
  mangNguoiDung: NguoiDung[] = [];
  
  constructor(private nguoidungService: NguoiDungService) {
    

  }

  @ViewChild('formSua') formSua: NgForm;

  ngOnInit() {
    this.nguoidungService.layDanhSachNguoiDung().subscribe(
      (data) => {
        this.mangNguoiDung = data;
      });
  }

  soSanhMK(mk: string, mknhaplai: string): boolean {
    if (mknhaplai !== mk) {
      this.formSua.control.setErrors({ 'loiNhapLaiMauKhau': true });
      return true;
    }
    else {
      this.formSua.control.setErrors({ 'loiNhapLaiMauKhau': false });
      return false;
    }

  }
  Edit(nguoiDung: NguoiDung) {
    // nguoiDung.NhapLaiMK = nguoiDung.MatKhau;
    this.formSua.setValue(nguoiDung);
    console.log(nguoiDung);

  }
}
