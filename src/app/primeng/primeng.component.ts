import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  productdata:product|any;
  editProductInfo: any;
 public submitted!: boolean;
 public productDialog!:boolean;
 public addShow!:boolean;
 public updateShow!:boolean;
 public hideShow!:boolean;
 

  constructor(private http:HttpClient,private  changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
     this.getProduct()
     this.productdata={}
  }


  getProduct(){
   
     this.http.get(`${environment.apiProduct}/product/get`).subscribe((res:any)=>{
       this.product= res.data
       this.changeDetectorRef.detectChanges();
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

      this.http.delete(`${environment.apiProduct}/product/delete?id=${id}`)
        .subscribe((res:any)=>{
        if(res.isSuccess){
          alert('data successfully delete')
          this.getProduct();
       this.changeDetectorRef.detectChanges();

        // this.getByProductId(id);
        console.log(res);
        }else{
          alert(res.message)
        }
        // this.product={},
        // this.productDialog=true;
      });

  }

  openNew(){
    // this.products = {};
        // this.submitted = false;
        this.addShow=true;
        this.updateShow=false;
        this.hideShow=true;
        this.productDialog = true;
       
        
  }


  addProduct(){
    // if(this.editProductInfo){
    //     this.updateProduct()
    //   return
    // }
   
    this.http.post(`${environment.apiProduct}/product/add`,this.productdata).
    subscribe((res:any)=>{
      this.getProduct();
      // this.getByProductId();
      // this.productDialog=true;
      this.product=true;
      this.hideShow=true;
      this.productDialog=false;
      if(res.isSuccess){
        this.editProductInfo=null
        alert('data added successfully')
        this.productdata.reset()
        // this.getProduct()
        
      }else{
        alert(res.message)
      }
    });
    this.hideDialog();
  }

  updateProduct(id:string){
    debugger
    this.product;
    this.http.post(`${environment.apiProduct}/product/update?id=${id}`,this.productdata)
.subscribe((res:any) =>{
  this.getProduct();
  

       if(res.isSuccess){
        this.product.reset()
        //  this.editProductInfo=null
        // this.editProduct(this.productdata);
         alert('data update successfully')
        this.changeDetectorRef.detectChanges();
         
        
      }else{
         alert(res.message)
      
       }
     });
     this.productDialog=false;
    //  this.product;

// this.productdata;
    
          
   }


editProduct(product:product){
  

  this.getProduct();
  
  this.productDialog=true;
  this.updateShow=true;
  this.addShow=false;
  this.hideShow=true;
// this.editProductInfo = product

this.productdata=product;
// this.editProductInfo = this.productdata

}

 hideDialog(){
    this.productDialog=false;
    this.submitted=false;
 }


}


