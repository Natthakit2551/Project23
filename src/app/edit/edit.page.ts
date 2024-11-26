import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

member: any=[];
id_stu:any;
name:any;
nname:any;
age:any;
phone:any;
address:any;
status:any;

  constructor(public dataapi: DataapiService, private route:Router) { }

  ngOnInit() {
    this.member = this.dataapi.data_datailMen;
  }

editmember(){
  let dataEdit={
    id:this.member.id,
    id_stu:this.member.id_stu,
    name:this.member.id_stu,
    nname:this.member.id_stu,
    age:this.member.id_stu,
    phone:this.member.id_stu,
    address:this.member.id_stu,
    status:this.member.id_stu,
  };
  this.dataapi.editmember(dataEdit).subscribe({
    next: (res:any) =>{
      console.log("แก้ไขข้อมูลสำเร็จ",res);
      this.route.navigateByUrl('/show',);
    },
    error: (error:any) =>{
     console.log("เกิดข้อผิดพลาดในการแก้ไขข้อมูล")
    }

  });
}
}
