import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './question';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public questions:any;
  constructor(public translate: TranslateService, private http: HttpClient ){
    translate.addLangs(['en', 'hn', 'sp']);
    translate.setDefaultLang('en');
    this.questions=[];
    this.currQuestions=[];
  }



  private url:string="http://localhost:8080/survey";
  public currQuestions:string[];
  getQuestions(): Observable<Question[]>{
    return this.http.get<Question[]>(this.url);
  }

  ngOnInit(){
    this.getQuestions().subscribe((data:any) => {
      this.questions=data;
      
    });
    
  }

  changeLang(){

  }
  

}
