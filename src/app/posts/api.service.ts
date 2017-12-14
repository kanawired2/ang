import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { IPosts } from "./posts";

@Injectable()
export class ApiService {

  	private URL = "http://local-drupal.com/dtutor/jcontent";

  	private LoginUrl = "http://local-drupal.com/dtutor/user/login?_format=json";

  	constructor(protected httpClient: HttpClient) {}
 
	public getPosts(): Observable<IPosts[]> {
		return this.httpClient
		.get<IPosts[]>(`${this.URL}`)
		.catch(this.handleError);
	}

  	private handleError(error: Response) {
    	return Observable.throw(error.statusText);
 	}
}