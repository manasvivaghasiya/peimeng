import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { City, IUser, userdata } from './IUser';
import { environment } from 'src/environments/environment';
import { identifierName } from '@angular/compiler';




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
  public imageLoad!:boolean;
  public upload:boolean=true;
  Response:any
  users:any;
  selectedCityName:any;
  selectedHobbies:any=[];
  submitted:any;
  selectedValue: any;
  imageData: any;


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
        this.http.get(`${environment.apiProduct}/user/get-user-by-id?id=${id}`).subscribe((res:any)=>{
       this.userdata= res.data
       this.selectedHobbies = (this.userdata.hobbies).split(',');
       this.selectedCityName=this.userdata.City;
        });
      }

  openDialog(id?:string){
    if(id)
    {
       
        this.getUserById(id);
      
    }
    else{
      this.selectedHobbies=[];
      this.userdata={};
    }
      this.userDialog = true;
  
  }
  deleteUser(id:string){
   this.http.delete(`${environment.apiProduct}/user/delete?id=${id}`)
   .subscribe((res:any)=>{
     if(res.isSuccess){
       alert('data successfully delete')
       this.getUser();
     }else{
       alert(res.message)
     }
   });
  }
  hideDialog(){
    this.userDialog = false;
    // this.submitted = false;
  }
  saveUser(){
    debugger
    const formData = new FormData();
    this.userdata.hobbies = (this.selectedHobbies).toString();
    this.userdata.City=this.selectedCityName;
     
    formData.append('firstName',this.userdata.firstName);
    formData.append('lastName',this.userdata.lastName);
    formData.append('hobbies',this.userdata.hobbies);
    formData.append('gender',this.userdata.gender);
    formData.append('city',this.userdata.city);
    formData.append('age',this.userdata.age);
    formData.append('usersImage',this.userdata.usersImage);
    
if(this.userdata._id){
     formData.append('id',this.userdata._id);
     this.http.post(`${environment.apiProduct}/user/update?id=${this.userdata._id}`,formData)
     .subscribe((res:any)=>{
       this.getUser();
     })

}else
           this.http.post(`${environment.apiProduct}/user/add`,formData).
           subscribe((res:any)=>{
             this.getUser();
              
    });
    this.userDialog=false;
  }

  onimageUpload(event:any){
    this.imageData = event.target.files[0];
    var file = event.target.files.length;
    for(let i=0;i<file;i++)
    {
       var reader = new FileReader();
       reader.onload = (event:any) => 
       {
           this.userdata.image = event.target.result;
          //  this.changeDetector.detectChanges();
       }
       reader.readAsDataURL(event.target.files[i]);
    }
  }

  handleImageLoad(){
         this.imageLoad= true;
  }
 

  onChangeCityValue(event:any,dd:any){
      this.selectedCityName=event.value;
      this.selectedValue = dd.selectedOption.name;

  }
}
