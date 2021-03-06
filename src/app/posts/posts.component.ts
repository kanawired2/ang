import {Component, OnInit} from "@angular/core";
import {ApiService} from "./api.service";
import { Observable } from "rxjs/Observable";
import {IPosts} from "./posts";
import { HttpClient } from '@angular/common/http';
 
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    providers: [ApiService]
})
 
export class PostsComponent implements OnInit {
    _postsArray: IPosts[];
     
    private Url = '';

    constructor(private apiSerivce: ApiService, protected httpClient: HttpClient) {
    }

    getPosts(): void {
        this.apiSerivce.getPosts()
        .subscribe(
            resultArray => this._postsArray = resultArray,
            error => console.log("Error :: " + error)
        )
    }

    viewContent(e){ 
        e.preventDefault();        
        console.log(e.target.href);
        this.Url = e.target.href;

        this.httpClient.get(this.Url).subscribe(data => {
            console.log(data['title'][0]['value']);            
            alert(data['title'][0]['value']);            
        });          
         
    }

      
    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }


    ngOnInit(): void {
        this.getPosts();
    }
 }