import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeService {

  @Output() ve = new EventEmitter();//output cho cac component cung theo doi

  constructor(private http: HttpClient) { }

  public chiTietPhongVe(malichchieu: string): Observable<any[]> {
    let response: any = this.http.get(`http://sv2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${malichchieu}`);
    return response;
  }

  public datVe(thongTinDatVe: any): Observable<any> {
    const linkApi = `http://sv2.myclass.vn/api/QuanLyDatVe/DatVe`;
    const header: HttpHeaders = new HttpHeaders(); //Cho biet dinh dang du lieu truyen di
    header.append('Content-Type', 'application/json;charset=UTF-8');
    const observable = this.http.post(linkApi, thongTinDatVe, { headers: header });
    return observable;
  }
}
