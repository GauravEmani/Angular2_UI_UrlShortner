import {Component} from '@angular/core';
import {DemoService} from './demo.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'demo-app',
  template:`
  <h1>Url Shortner Assignment</h1>
  <ul>
  <ul>
  <h2>Account Details</h2>  
  <li><h3>Success :</h3><span>{{success}}</span></li>
  <li><h3>Description :</h3><span>{{status}}</span></li>
  <li><h3>Password :</h3>{{password}}</li>
  <p>Create Account: <input type="text" name="account_name" [(ngModel)]="account_name"><button (click)="createAccount(account_name)">Save</button></p>
  </ul>
  <br/>
  <h2>Register Url</h2>
  <ul>
  <li><h3>Short Url :</h3><span>{{urlshort}}</span></li>  
  <p>Regsiter Url: <input type="text" name="url_name" [(ngModel)]="url_name"><button (click)="registerUrl(url_name)">Save</button></p>
  </ul>
  <br/>
  <h2>Retrieval of Statistics</h2>
  <ul>
    <li><h3>Url :</h3><span>{{urlStats}}</span></li>
    <p>Statistics: <input type="text" name="url_stats" [(ngModel)]="url_stats"><button (click)="getStatistics(url_stats)">Statistics</button></p>
  </ul>
  </ul>
  `
})
export class AppComponent {

  public password="none";
  public success="";
  public status="";

  public urlshort;
  public url_name;

  public authorization_token;

  public urlStats;

  constructor(private _demoService: DemoService) { }

  ngOnInit() {
  }

  getStatistics() {
    this._demoService.getStatistics().subscribe(
      // the first argument is a function which runs on success
      data => { this.urlStats = JSON.stringify(data);
        console.log(data)},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading foods')
    );
  }

  getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
      // No error or completion callbacks here. They are optional, but
      // you will get console errors if the Observable is in an error state.
    );
  }

  createAccount(id) {
    let account = {id: id};
    this._demoService.createAccount(account).subscribe(
       data => {
         console.log('data returned --- '+data.password);
         this.password = data.password;
         this.status = data.description;
         this.success = data.success;
         
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }

 registerUrl(urlName) {
    let url = {url: urlName, redirectType: 301};
    this._demoService.registerUrl(url).subscribe(
       data => {
         
         console.log('data returned --- '+data.shortUrl);
         this.urlshort = data.shortUrl;
        
         return true;
       },
       error => {
         console.error("Error saving food!");
         return Observable.throw(error);
       }
    );
  }
}
