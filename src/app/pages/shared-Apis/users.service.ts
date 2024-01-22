import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
  
}

// constructor(private http: HttpClient) { }
  
// private tokenKey = 'token';
// private adminIdKey = 'adminId';

// private baseUrl = 'http://localhost:8080/api/';

// login(username: any, password: any) {
//   return this.http.post<any>(this.baseUrl + 'loginAdmin', { username, password } ,
//   {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     }).pipe(map((res: any) => {
//       // localStorage.setItem(this.tokenKey, res.token);
//       // localStorage.setItem(this.adminIdKey, res.adminId.toString());
//       return res;
//     }));
// }


// // login(email: any, password: any) {
// //   return this.http.post<any>(this.baseUrl + 'loginAdmin', { email, password },
// //     {
// //       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// //     })
// //     .pipe(map((res: any) => {
// //       localStorage.setItem(this.tokenKey, res.token);
// //       localStorage.setItem(this.adminIdKey, res.adminId.toString());
// //       return res;
// //     }));
// // }

// logout() {
//   localStorage.removeItem(this.tokenKey);
//   localStorage.removeItem(this.adminIdKey);
// }

// isAuthenticated(): boolean {
//   // Check if the authentication token exists in localStorage
//   return !!localStorage.getItem(this.tokenKey);
// }

// getLoggedInAdminId(): number | undefined {
//   const adminIdString = localStorage.getItem(this.adminIdKey);
//   return adminIdString ? Number(adminIdString) : undefined;
// }

// ForgetPasswordEmail(email: string) {
//   return this.http.post<any>(`http://15.207.100.148:8080/admin/otp/{email}?email=${encodeURIComponent(email)}`,
//     {
//       headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//     })
//     .pipe(map((res: any) => {
//       return res;
//     }))
// }


/*
constructor(private http: HttpClient) {}

  private baseUrl = 'http://18.134.207.234:8080/lbpassivefire/admin/trainee/';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers':
    'Content-Type, Accept, X-Requested-With, remember-me',
    'X-XSS-Protection': '1;mode-block',
  });

  getEmployee() {
    return this.http
      .get<any>(this.baseUrl + 'getAllEmployee', {
        headers: this.headers,}).pipe(map((res: any) => {
          return res;
        }));
  }

  getData(employeeId: any) {
    return this.http.get<any>(this.baseUrl+'getEmployee/' +employeeId,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }

  postEmployee(data: any) {
    return this.http.post<any>(this.baseUrl+'register',data,
        {headers: this.headers})
      .pipe(
        map((res: any) => {
          return res;
        }));
  }

  deleteEmployee(employeeId: any) {
    return this.http.delete<any>(this.baseUrl + 'deleteEmployee/' + employeeId,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }

  updateEmployee(employeeId: any, data: any) {
    return this.http.put<any>(this.baseUrl +'updateEmployee/' +employeeId,data,
        {headers: this.headers})
      .pipe(map((res: any) => {
          return res;
        }));
  }

  */