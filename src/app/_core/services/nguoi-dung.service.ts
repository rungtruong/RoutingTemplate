import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NguoiDung } from '../models/nguoidung';


@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {

  constructor(private http: HttpClient) { }

  public layDanhSachNguoiDung(): Observable<any> {
    let response: any = this.http.get('http://sv2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP06');
    return response;
  }

  public dangNhap(taikhoan: string, matkhau: string): Observable<any> {
    const linkApi = `http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`;
    const header: Headers = new Headers(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, null);
    return observable;
  }
  public dangKy(nguoiDung: NguoiDung): Observable<any> {
    const linkApi = `http://sv2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, nguoiDung, { headers: header });
    return observable;
  }
  // public capNhatNguoiDung(): Observable<any>[]{
  //   let response: any=this.http.post('http://sv2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin');
  //   return response;
  // }

}

