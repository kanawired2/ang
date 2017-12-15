import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IPosts } from "./posts";
import { User } from "./user";

@Injectable()
export class ApiService {

  private URL = "http://local-drupal.com/dtutor/jcontent";

  private LoginUrl = "http://local-drupal.com/dtutor/user/login?_format=json";

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

  
	public create(hero: User): Observable<User> {
		return this.httpClient.post<User>(this.LoginUrl, hero);
	}

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}
}