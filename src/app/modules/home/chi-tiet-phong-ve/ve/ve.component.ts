import { Component, OnInit, Input } from '@angular/core';
import { VeService } from 'src/app/_core/services/ve.service';

@Component({
  selector: 'app-ve',
  templateUrl: './ve.component.html',
  styleUrls: ['./ve.component.css']
})
export class VeComponent implements OnInit {
  @Input() ve: any = {};
  dangDat: boolean = false;

  constructor(private veService: VeService, ) { }

  datGhe() {
    this.dangDat = !this.dangDat;

    //theo doi thay doi ve thong qua service
    let gheDuocDat = {
      MaGhe: this.ve.MaGhe,
      GiaVe: this.ve.GiaVe,
      DangDat: this.dangDat
    }
    //day gia tri vao storeservice
    this.veService.ve.emit(gheDuocDat);
  }
  ngOnInit() {
  }

}
