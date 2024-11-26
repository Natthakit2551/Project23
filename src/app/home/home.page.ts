import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {



//ประกาศตัวแปรเพื่อรับค้าจากหน้า home.page.html
dataMemmber:any={};
txtidstu:any;
txtname:any;
txtnname:any;
txtage:any;
txtphone:any;
txtaddress:any;
txtstatus:any;

//ตัวแปรที่ส่งไปยังapi
id_stu:any;
name:any;
nname:any;
age:any;
phone:any;
address:any;
status:any;

 constructor(public dataapi: DataapiService,
  private route:Router
 ) {}

//ฟังก์ชั่นสำหรับเพิ่มข้อมูล
addmember() {
  let data = {
    id_stu: this.txtidstu,
    name: this.txtname,
    nname: this.txtnname,
    age: this.txtage,
    phone: this.txtphone,
    address: this.txtaddress,
    status: this.txtstatus
  };

  this.dataapi.addMember(data).subscribe({
    next: (res: any) => {
      console.log("ข้อมูลถูกเพิ่ม", res);
    },
    error: (err: any) => {
      console.log("ข้อมูลไม่ถูกเพิ่ม", err);
    }
  });
  this.clearForm(); // เคลียร์ข้อมูลหลังจากเพิ่มเสร็จ
}

// ฟังก์ชันสำหรับเคลียร์ฟอร์ม
clearForm() {
  this.txtidstu = '';
  this.txtname = '';
  this.txtnname = '';
  this.txtage = '';
  this.txtphone = '';
  this.txtaddress = '';
  this.txtstatus = '';
}

// ฟังก์ชันสำหรับการนำทางไปยังหน้าแสดงข้อมูล
showdata() {
  this.route.navigate(['/show']);
}

}

