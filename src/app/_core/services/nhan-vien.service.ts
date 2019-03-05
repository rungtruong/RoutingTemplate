import { Injectable } from '@angular/core';
import { NhanVien } from '../models/nhanvien';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NhanVienService {

  private dsNhanVien: Array<NhanVien> = [
    { MaNV: 1, HoTen: 'Rung Truong', NamSinh: 1994 },
    { MaNV: 2, HoTen: 'Rung Truong 2', NamSinh: 1993 },
    { MaNV: 3, HoTen: 'Rung Truong 3', NamSinh: 1992 },
    { MaNV: 4, HoTen: 'Rung Truong 4', NamSinh: 1991 },
    { MaNV: 5, HoTen: 'Rung Truong 5', NamSinh: 1990 },
  ]
  constructor() { }

  public layDanhSachNhanVien(): Observable<NhanVien[]> {
    return of(this.dsNhanVien);
  }

  public themNhanVien(nhanVienMoi: NhanVien): void {
    this.dsNhanVien.push(nhanVienMoi);
  }
}
