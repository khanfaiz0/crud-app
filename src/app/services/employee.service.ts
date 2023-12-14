import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //  baseUrl = 'http://localhost:3000/posts';
  // baseUrl = 'https://raw.githubusercontent.com/khanfaiz0/crud-app/master/db.json';
  baseUrl = 'https://foodmine-x98d.onrender.com/api/employees';

  constructor(private http: HttpClient) { }

    getEmployees():Observable<any>{
      return this.http.get<Employee[]>(this.baseUrl)
    }

    postEmployee(employee: Employee){
      return this.http.post<Employee>(this.baseUrl, employee);
    }

    deleteEmployee(id: string){
      return this.http.delete(this.baseUrl + '/' + id);
    }
}
