import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/_core/services/phim.service';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chi-tiet-phim',
  templateUrl: './chi-tiet-phim.component.html',
  styleUrls: ['./chi-tiet-phim.component.css']
})
export class ChiTietPhimComponent implements OnInit, OnDestroy {

  subParam: Subscription;
  phim: any = {};
  constructor(private atvRoute: ActivatedRoute, private phimServce: PhimService, private titleService: Title) { }

  ngOnInit() {
    // Truyen 1 tham so
    // this.atvRoute.params.subscribe((thamso) => {
    //   this.layThongTinPhim(thamso.id);
    // })

    //Truyen nhieu tham so
    this.subParam = this.atvRoute.queryParams.subscribe((thamso) => {
      // console.log(thamso);
      this.layThongTinPhim(thamso.MaPhim);
      // Hien thi title
      this.titleService.setTitle(thamso.TenPhim);
    })

  }
  layThongTinPhim(maPhim) {
    this.phimServce.layThongTinPhim(maPhim).subscribe((data) => {
      console.log(data);
      this.phim = data;
    })
  }

  ngOnDestroy(): void {
    if (this.subParam) {
      this.subParam.unsubscribe;
    }
  }
}
