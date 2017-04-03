System.register(["@angular/core", "./demo.service", "rxjs/Rx"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, demo_service_1, Rx_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                // public food_name;
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                    this.password = "none";
                    this.success = "";
                    this.status = "";
                }
                AppComponent.prototype.ngOnInit = function () {
                    // this.getFoods();
                    // this.getBooksAndMovies();
                };
                AppComponent.prototype.getStatistics = function () {
                    var _this = this;
                    this._demoService.getStatistics().subscribe(
                    // the first argument is a function which runs on success
                    function (data) {
                        _this.urlStats = JSON.stringify(data);
                        console.log(data);
                    }, 
                    // the second argument is a function which runs on error
                    function (err) { return console.error(err); }, 
                    // the third argument is a function which runs on completion
                    function () { return console.log('done loading foods'); });
                };
                AppComponent.prototype.getBooksAndMovies = function () {
                    var _this = this;
                    this._demoService.getBooksAndMovies().subscribe(function (data) {
                        _this.books = data[0];
                        _this.movies = data[1];
                    }
                    // No error or completion callbacks here. They are optional, but
                    // you will get console errors if the Observable is in an error state.
                    );
                };
                AppComponent.prototype.createAccount = function (id) {
                    var _this = this;
                    var account = { id: id };
                    this._demoService.createFood(account).subscribe(function (data) {
                        console.log('data returned --- ' + data.password);
                        _this.password = data.password;
                        _this.status = data.description;
                        _this.success = data.success;
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                AppComponent.prototype.registerUrl = function (urlName) {
                    var _this = this;
                    var url = { url: urlName, redirectType: 301 };
                    this._demoService.registerUrl(url).subscribe(function (data) {
                        console.log('data returned --- ' + data.shortUrl);
                        _this.urlshort = data.shortUrl;
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                AppComponent.prototype.updateFood = function (food) {
                    var _this = this;
                    this._demoService.updateFood(food).subscribe(function (data) {
                        // refresh the list
                        _this.getFoods();
                        return true;
                    }, function (error) {
                        console.error("Error saving food!");
                        return Rx_1.Observable.throw(error);
                    });
                };
                AppComponent.prototype.deleteFood = function (food) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + food.name + "?")) {
                        this._demoService.deleteFood(food).subscribe(function (data) {
                            // refresh the list
                            _this.getFoods();
                            return true;
                        }, function (error) {
                            console.error("Error deleting food!");
                            return Rx_1.Observable.throw(error);
                        });
                    }
                };
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'demo-app',
                    template: "\n  <h1>Url Shortner Assignment</h1>\n  <ul>\n  <ul>\n  <h2>Account Details</h2>  \n  <li><h3>Success :</h3><span>{{success}}</span></li>\n  <li><h3>Description :</h3><span>{{status}}</span></li>\n  <li><h3>Password :</h3>{{password}}</li>\n  <p>Create Account: <input type=\"text\" name=\"account_name\" [(ngModel)]=\"account_name\"><button (click)=\"createAccount(account_name)\">Save</button></p>\n  </ul>\n  <br/>\n  <h2>Register Url</h2>\n  <ul>\n  <li><h3>Short Url :</h3><span>{{urlshort}}</span></li>  \n  <p>Regsiter Url: <input type=\"text\" name=\"url_name\" [(ngModel)]=\"url_name\"><button (click)=\"registerUrl(url_name)\">Save</button></p>\n  </ul>\n  <br/>\n  <h2>Retrieval of Statistics</h2>\n  <ul>\n    <li><h3>Url :</h3><span>{{urlStats}}</span></li>\n    <p>Statistics: <input type=\"text\" name=\"url_stats\" [(ngModel)]=\"url_stats\"><button (click)=\"getStatistics(url_stats)\">Statistics</button></p>\n  </ul>\n  </ul>\n  "
                }),
                __metadata("design:paramtypes", [demo_service_1.DemoService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});
//# sourceMappingURL=app.component.js.map