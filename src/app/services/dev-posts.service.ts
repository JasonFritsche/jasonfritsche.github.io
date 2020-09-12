import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevPostsService {
  private devApiUrl: string =
    'https://dev.to/api/articles?username=jasonfritsche';

  constructor(private http: HttpClient) {}

  public getPosts() {
    return this.http
      .get<Array<any>>(this.devApiUrl)
      .pipe(
        map((result) =>
          result.filter(
            (item) => item.tags.includes('angular') && item.id !== 449859
          )
        )
      );
  }
}
