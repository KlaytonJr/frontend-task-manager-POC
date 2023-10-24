import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ResponseApp } from 'app/models/response';
import { Task, TaskFilterEnum } from 'app/models/task';
import { HttpClient } from '@angular/common/http';
import { idUserLogged } from 'app/app.component';
import { DefaultService } from './default.service';

@Injectable({
  providedIn: 'root',
})
export class DashService extends DefaultService {
  constructor(private http: HttpClient) {
    super('dash');
  }

  list(): Observable<ResponseApp<Task[]>> {
    return this.http.get<ResponseApp<Task[]>>(`${this.url}`);
  }
}
