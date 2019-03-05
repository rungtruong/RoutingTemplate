import { Component, OnInit } from '@angular/core';
import { VeService } from 'src/app/_core/services/ve.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-chi-tiet-phong-ve',
  templateUrl: './chi-tiet-phong-ve.component.html',
  styleUrls: ['./chi-tiet-phong-ve.component.css']
})
export class ChiTietPhongVeComponent implements OnInit {
  dsVe: any = [];
  danhSachGheDaDat: any[] = [];
  maLichChieu: any = 0;
  // ve: any = [];
  constructor(private veService: VeService, private actRoute: ActivatedRoute) { }

  ngOnInit() {
    //Truyen nhieu tham so
    this.actRoute.params.subscribe((thamso) => {
      // console.log(thamso.id);
      this.maLichChieu = thamso.id;//Lay thong tin ma lich chieu tu URL thoong qua activedRoute
      this.ChiTietPhongVe(thamso.id);
    });

    //theo doi tham so qua service
    this.veService.ve.subscribe(
      (gheDangDat: any) => {
        // console.log('data', gheDangDat);

        //ghe duoc lay tu moi lan emit ham chay
        if (gheDangDat.DangDat) {
          this.danhSachGheDaDat.push(gheDangDat);
        } else {
          for (let i = 0; i < this.danhSachGheDaDat.length; i++) {

            if (gheDangDat.MaGhe == this.danhSachGheDaDat[i].MaGhe) {
              this.danhSachGheDaDat.splice(i, 1);
            }
          }
        }
        // console.log(this.danhSachGheDaDat);

      })

  }

  ChiTietPhongVe(maLichChieu) {
    this.veService.chiTietPhongVe(maLichChieu).subscribe((data: any) => {
      if (typeof data == "object") {
        // console.log(data.DanhSachGhe);
        this.dsVe = data.DanhSachGhe;
      }
    })
  }
  DatVe() {
    //Load tai khoan nguoi dung tu localstorage
    let taiKhoanNguoiDung = '';
    if (localStorage.getItem('userLogin')) {
      const userLogin: any = JSON.parse(localStorage.getItem('userLogin'));
      taiKhoanNguoiDung = userLogin.TaiKhoan;
    }
    //so sanh tai khoan nguoi dung và danh sach dat ghe
    if (taiKhoanNguoiDung != '' && this.danhSachGheDaDat.length > 0) {

      let thongTinDatVe: any = {
        "MaLichChieu": this.maLichChieu,
        "TaiKhoanNguoiDung": taiKhoanNguoiDung,
        "DanhSachVe": this.danhSachGheDaDat
      }
      //đẩy dữ liệu đạt vé lên api
      this.veService.datVe(thongTinDatVe).subscribe(
        (data) => {
          if (typeof data == 'string') {
            Swal.fire('Thành công!', 'Chúc mừng bạn đã đặt ghế thành công!', 'success').then(() => {
              location.reload();
            });
          }
        }
      )
      // console.log(thongTinDatVe);

    }
    else {
      Swal.fire('Oops...', 'Something went wrong!', 'error')
    }
  }
  //object dua ve backend(Luuy: Dung dinh dang Model Backend cung cap)

}
