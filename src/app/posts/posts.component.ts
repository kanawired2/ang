import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import {IPosts} from "./posts";
 
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


     ngOnInit(): void {
         this.getPosts();
     }
 }