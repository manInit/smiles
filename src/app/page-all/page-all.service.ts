import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class PageAllService {
    url: string = 'https://api.github.com/emojis'

    constructor(private http: HttpClient) { }

    fetchEmojis(): Observable<Object> {
      return this.http.get(this.url)
    }
}
