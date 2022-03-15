import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { product } from './product';
import { identifierName } from '@angular/compiler';


@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})
export class PrimengComponent implements OnInit {
  productdata: any;
  product: any;
  public productDialog!: boolean;
  public submitted!: boolean;
  editInfo:any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProduct()
    this.productdata = {}
  }

  getProduct() {
    this.http.get(`${environment.apiProduct}/product/get`).subscribe((res: any) => {
      this.product = res.data
    })
  }

  getByProductId(id: string | undefined) {

    this.http.get(`${environment.apiProduct}/product/get-product-by-id?id=${id}`).subscribe((res: any) => {
      this.product.category = res.category;
      this.product.productName = res.productName;
      this.product.description = res.description;
      this.product.price = res.price;
      this.product.clothSize = res.clothSize;
      this.product.category = res.inStock;
      console.log(res);
    })

  }

  openNew() {
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  addProduct() {
   if(this.editInfo){
      this.updateProduct()
      return
   }
    this.http.post(`${environment.apiProduct}/product/add`, this.productdata).subscribe((res: any) => {
        this.productDialog = false;

      if (res.isSuccess) {
        alert('Data added successfully')
        this.getProduct()
        this.productdata.reset()
      

      } else {
        alert(res.message)
      }
    });

  }

  updateProduct() {
    this.http.post(`${environment.apiProduct}/api/product/update`, {
     
      // ...this.product.value
    }).subscribe((res: any) => {
      if (res.isSuccess) {
        // this.editInfo = null
        alert('Data updated successfully')

        this.productdata.reset()
        this.getProduct()
      } else {
        alert(res.message)
      }
    });
    this.productDialog = false;

  }


  editProduct(product:any) {
    this.editInfo=this.productdata
    this.productDialog = true;
this.productdata=product;
    
    // this.productdata.patchvalue({
    //   category:payload.category,
    //   productName:payload.productName,
    //   description:payload.description,
    //   price:payload.price,
    //   clothSize:payload.clothSize,
    //   inStock:payload.inStock
    // });

  }
  // deleteProduct(id: string) {
  //   this.http.delete(`${environment.apiProduct}/api/product/delete?id=${id}`).subscribe((res: any) => {
  //     if (res.isSuccess) {
  //       alert('Data deleted successfully')
  //       this.getProduct()
  //     } else {
  //       alert(res.message)
  //     }
  //   })
  // }


  deleteProduct(id:string){

    this.http.delete(`${environment.apiProduct}/product/delete?id=${id}`)
      .subscribe((res:any)=>{
      if(res.isSuccess){
        alert('data successfully delete')
        this.getProduct();

      // this.getByProductId(id);
      console.log(res);
      }else{
        alert(res.message)
      }
      // this.product={},
      // this.productDialog=true;
    });

}

}
