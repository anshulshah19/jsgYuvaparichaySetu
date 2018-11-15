import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisteruserService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post('https://jsgmidtownsurendranagar.com/portal/api/users/register', user);
  }

}
