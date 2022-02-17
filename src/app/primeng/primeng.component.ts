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
 public addShow!:boolean;
 public updateShow!:boolean;
 public hideShow!:boolean;
 

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

  getByProductId(id:string | undefined){
      
    this.http.get(`${environment.apiProduct}/product/get-product-by-id?id=${id}`).subscribe((res:any)=>{
      this.product.category=res.category;
      this.product.productName=res.productName;
      this.product.description=res.description;
      this.product.price=res.price;
      this.product.clothSize=res.clothSize;
      this.product.category=res.inStock;
      console.log(res);
    })
    
  }

  deleteProduct(id:string){
      this.http.delete(`${environment.apiProduct}/product/delete?=${id}`).subscribe((res:any)=>{
        if(res.success){
          alert('data successfully delete')
          this.getProduct();
          this.deleteProduct(id);
          this.product=[...this.product]
          // this.productDialog=true;
          this.product={}
        }else{
          alert(res.message)
        }
        // this.product={},
        // this.productDialog=true;
      })
  }

  openNew(id?:string){
    // this.products = {};
        // this.submitted = false;
        
       if(id){
         this.addShow=false;
         this.updateShow=true;
         this.hideShow=true;
        //  this.updateShow=true;
        this.getByProductId(id);
       }else{
         this.addShow=true;
         this.updateShow=false;
         this.hideShow=true;
       }
       this.productDialog = true;
       
        
  }


  addProduct(){
   
    this.http.post(`${environment.apiProduct}/product/add`,this.product.value).
    subscribe((res:any)=>{
      this.getProduct();
      // this.getByProductId();
      this.productDialog=true;
      this.product=true;
      this.hideShow=true;
      // if(res.isSuccess){
      //   this.editProductInfo=null
      //   alert('data added successfully')
      //   this.product.reset()
      //   this.getProduct()
      // }else{
      //   alert(res.message)
      // }
    });
    
  }

  updateProduct(product:product){
    this.http.post(`${environment.apiProduct}/product/update`,{

      // id:this.editProductInfo.id,
      ...this.product.value
     }).subscribe((res:any) =>{
       if(res.isSuccess){
        //  this.editProductInfo=null
         alert('data update successfully')
         this.product.reset()
         this.getProduct()
         this.openNew()
        //  this.editProduct(product)
      }else{
         alert(res.message)
       }
     })
   }

//    editProduct(product:product){
//      this.productDialog=true;
//      this.updateShow=true;
//      this.hideShow=true;
//     this.editProductInfo = product
//     this.product.patchValue({
//      category:product.category,
//      productName:product.productName,
//      description:product.description,
//      price:product.price,
//      clothSize:product.clothSize,
//      inStock:product.inStock,

//     })
//  }  

// editProduct(product:product){
//   this.productDialog=true;
//   this.openNew();
//   this.updateShow=true;
//   this.addShow=false;
//   this.hideShow=true;
//   this.getProduct();
//   this.productDialog=false;
// }

 hideDialog(){
    this.productDialog=false;
    this.submitted=false;
 }


}
