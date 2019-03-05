import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/_core/services/phim.service';

@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.css']
})
export class QuanLyPhimComponent implements OnInit {
  dsPhim: any = [];
  constructor(private phimService: PhimService) {
    phimService.layDanhSachPhim().subscribe(
      (data) => {
        this.dsPhim = data;
      }
    )

  }

  ngOnInit() {

  }

}
