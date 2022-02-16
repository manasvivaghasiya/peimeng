import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { product } from './product';


@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  public product: product|any;
  products:any;
  editProductInfo: any;
 public submitted!: boolean;
 public productDialog!:boolean;

  constructor(private http:HttpClient,) { }

  ngOnInit(): void {
     this.getProduct()
  }


  getProduct(){
   
     this.http.get(`${environment.apiProduct}/product/get`).subscribe((res:any)=>{
       this.product= res.data
      console.log(this.product);
     })
  }

  deleteProduct(id:number){
      this.http.delete(`${environment.apiProduct}/product/delete?=${id}`).subscribe((res:any)=>{
        if(res.success){
          alert('data successfully delete')
          this.getProduct()
        }else{
          alert(res.message)
        }
      })
  }

  openNew(){
    // this.products = {};
        // this.submitted = false;
        this.productDialog = true;
      
       
        
  }

  addProduct(){
    if(this.editProductInfo){
      this.updateProduct()
      return
    }
    this.http.post(`${environment.apiProduct}/product/add`,this.product.value).
    subscribe((res:any)=>{
      if(res.isSuccess){
        this.editProductInfo=null
        alert('data added successfully')
        this.product.reset()
        this.getProduct()
      }else{
        alert(res.message)
      }
    })
  }

  updateProduct(){
    this.http.post(`${environment.apiProduct}/product/update`,{
      ...this.editProductInfo,
      id:this.editProductInfo.id,
      ...this.product.value
     }).subscribe((res:any) =>{
       if(res.isSuccess){
         this.editProductInfo=null
         alert('data update successfully')
         this.product.reset()
         this.getProduct()
      }else{
         alert(res.message)
       }
     })
   }

   editProduct(product:any){
     this.productDialog=true;
    this.editProductInfo = product
    this.product.patchValue({
     category:product.category,
     productName:product.productName,
     description:product.description,
     price:product.price,
     clothSize:product.clothSize,
     inStock:product.inStock,

    })
 }  



}
