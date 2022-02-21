import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { City, IUser, userdata } from './IUser';
import { environment } from 'src/environments/environment';




@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public cities!:City[];
  public userDialog!:boolean;
  public userdata:userdata|any;
  public user:IUser|any;
  Response:any
  users:any;
  selectedCityName:any;
  onChangeCityValue:any;
  selectedHobbies:any=[];
  submitted:any;


  constructor(private http:HttpClient,private confirmationService:ConfirmationService) { }

  ngOnInit(): void {
    this.getUser();
    this.cities =[
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}];
    
  }

  getUser(){
      this.http.get(`${environment.apiProduct}/user/get`).subscribe((res:any)=>{
        this.users=res.data
        this.selectedCityName=this.users.City;
      })
  }

  getUserById(id:string | undefined){
        this.http.get(`${environment.apiProduct}user/get-user-by-id?id=${id}`).subscribe((res:any)=>{
       this.userdata= res.data
       this.selectedHobbies = (this.userdata.hobbies).split(',');
       this.selectedCityName=this.userdata.City;
        });
      }

  openDialog(){
      this.userDialog = true;
  
  }
  deleteUser(){

  }
  hideDialog(){
    this.userDialog = false;
    this.submitted = false;
  }
  saveUser(){
        
  }
  handleImageLoad(){

  }
  onimageUpload(){

  }
}
