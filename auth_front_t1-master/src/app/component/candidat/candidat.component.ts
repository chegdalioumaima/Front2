import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CandidatServiceService } from 'src/app/services/candidat-service.service';

@Component({
  selector: 'app-candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit{
  typecontrats:any
  niveaudexpertises:any
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  data7: any;

  constructor(private CandidatService:CandidatServiceService) {}


  ngOnInit(): void {
    this.typecontrats=this.CandidatService.getTypeContrats()
    this.niveaudexpertises=this.CandidatService.getNiveauDexpertises()

   /* this.CandidatService.getData()
    .subscribe(data => {
      this.data = data;
      console.log(this.data)
      this.dropdownSettings
    });

    this.CandidatService.getData2()
    .subscribe(data2 => {
      this.data2 = data2;
      this.dropdownSettings
    });*/ 

    this.CandidatService.getData3()
    .subscribe(data3 => {
      this.data3 = data3;
      this.dropdownSettings
    });

    this.CandidatService.getData4()
    .subscribe(data4 => {
      this.data4 = data4;
      this.dropdownSettings
    });

    this.CandidatService.getData5()
    .subscribe(data5 => {
      this.data5 = data5;
      this.dropdownSettings
    });

    this.CandidatService.getData6()
    .subscribe(data6 => {
      this.data6 = data6;
      this.dropdownSettings
    });

    this.CandidatService.getData7()
    .subscribe(data7 => {
      this.data7 = data7;
      this.dropdownSettings
    });
    
  }
 


    dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
    };



}
