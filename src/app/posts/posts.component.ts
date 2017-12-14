import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {IPosts} from "./posts";
import { HttpClient } from '@angular/common/http';
 
 @Component({
	selector: 'app-posts',
	templateUrl: './posts.component.html',
	providers: [ApiService]
 })
 
 export class PostsComponent implements OnInit {
     _postsArray: IPosts[];
 
     constructor(private apiSerivce: ApiService) {
     }
 
     getPosts(): void {
         this.apiSerivce.getPosts()
             .subscribe(
                 resultArray => this._postsArray = resultArray,
                 error => console.log("Error :: " + error)
             )
     }


     /*constructor(private httpClient:HttpClient){  }
      getPosts(){
        this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`)
        .subscribe(
          (data:any[]) => {
            console.log(data);
          }
        )
      }*/
 
     ngOnInit(): void {
         this.getPosts();
     }
 }