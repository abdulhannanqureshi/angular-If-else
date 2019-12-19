// import { Injectable } from '@angular/core';
// /*for getting response or sending use pacakge */
// import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import { Observable } from 'rxjs/Observable'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   constructor(private http: HttpClient) { }

//   login(email,password){
//       let data1 = {'email':email,'password':password};
// 	return this.http.post<Response>('http://kraftcellar.com/kraft_admin/api/'+'login',data1,{headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}).map(
// 				(response) => {
// 				  //const data = response.json();
// 					return response;
// 				}
// 			  ).catch( 
// 				(error) => {
// 				  return Observable.throw('Something went wrong');
// 				} 
// 			  ); 
//     }
// }

// interface Response {
// 	status 		:	number;
// 	msg			:	string;
// 	allrecord	:	string
// }
