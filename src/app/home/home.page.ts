import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loadedData: any[] = [];
  dataList: any[] = [];
  infiniteEnable: boolean = true;
  constructor(public homeService:HomeService) {
    this.homeService.getData().subscribe((datas) => {
      this.dataList = datas;
      this.loadedData = datas.slice(this.loadedData.length, this.loadedData.length + 75);
    });
  }

  loadData(event){
    setTimeout(() => {
      event.target.complete();
      if (this.loadedData.length === this.dataList.length) {
        event.target.disabled = true;
        this.infiniteEnable = false;
      }else{
        var tempVar = this.dataList.slice(this.loadedData.length, this.loadedData.length + 75);
        this.loadedData = this.loadedData.concat(tempVar);
      }
    }, 200);
  }

}
