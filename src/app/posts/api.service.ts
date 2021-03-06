import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IPosts } from "./posts";
import { User } from "./user";

@Injectable()
export class ApiService {

  private URL = "http://local-drupal.com/dtutor/jcontent";

  private ContentUrl = "";

  	/*Hero = [{
  		name:'admin',
  		pass:'admin123'
  	}];*/

  constructor(protected httpClient: HttpClient) {}
 
	public getPosts(): Observable<IPosts[]> {
		return this.httpClient
		.get<IPosts[]>(`${this.URL}`)
		.catch(this.handleError);
	}


  viewContent(e){ 
   
    this.ContentUrl = e.target.href;

    return this.httpClient.get(this.ContentUrl).subscribe(data => {
      console.log(data);
    });     
  }

  
	

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}
}