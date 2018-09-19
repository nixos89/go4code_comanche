webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- <nav class=\"navbar navbar-inverse\">\n\t<div class=\"container\">\n\t  <div class=\"navbar-header\">\n\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n\t\t  <span class=\"sr-only\">Home</span>\n\t\t  <span class=\"icon-bar\"></span>\n\t\t  <span class=\"icon-bar\"></span>\n\t\t  <span class=\"icon-bar\"></span>\n\t\t</button>\n\t\t<a class=\"navbar-brand\" href=\"subjects\">Project name</a>\n\t  </div>\n\t  <div class=\"navbar-collapse collapse\">\n\t\t<ul class=\"nav navbar-nav\">\n\t\t  <li class=\"active\"><a href=\"subjects\">Predmeti</a></li>\n\t\t  <li><a href=\"subjects/add\">Dodaj predmet</a></li>\n\t\t  <li><a href=\"exams\">Ispiti</a></li>\n\t\t  <li><a href=\"exams/add\">Dodaj ispit</a></li>\n\t\t  <li><a href=\"students\">Studenti</a></li>\n\t\t  <li><a href=\"students/add\">Dodaj studenta</a></li>\n\t\t</ul>\n\t  </div>\n\t</div>\n  </nav> -->\n\n\t<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var authentication_service_1 = __webpack_require__("./src/app/security/authentication.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var page_not_found_component_1 = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
var http_3 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var list_of_posts_component_1 = __webpack_require__("./src/app/list-of-posts/list-of-posts.component.ts");
var posts_service_1 = __webpack_require__("./src/app/list-of-posts/posts.service.ts");
var one_post_component_1 = __webpack_require__("./src/app/one-post/one-post.component.ts");
var ngx_pagination_1 = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
var update_post_component_1 = __webpack_require__("./src/app/update-post/update-post.component.ts");
var token_interceptor_service_1 = __webpack_require__("./src/app/security/token-interceptor.service.ts");
var jwt_utils_service_1 = __webpack_require__("./src/app/security/jwt-utils.service.ts");
var can_activate_auth_guard_service_1 = __webpack_require__("./src/app/security/can-activate-auth-guard.service.ts");
var authentication_service_1 = __webpack_require__("./src/app/security/authentication.service.ts");
var login_component_1 = __webpack_require__("./src/app/login/login/login.component.ts");
var appRoutes = [
    /*{ path: 'record/:id', component: RecordDetailsComponent },
    { path: 'main', component: MainComponent },
    { path: '', redirectTo: 'main', pathMatch: 'full' },*/
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: list_of_posts_component_1.ListOfPostsComponent /*  , canActivate: [CanActivateAuthGuardService] */ },
    { path: 'post/:id', component: one_post_component_1.OnePostComponent /* , canActivate: [CanActivateAuthGuardService] */ },
    { path: '**', component: page_not_found_component_1.PageNotFoundComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                page_not_found_component_1.PageNotFoundComponent,
                list_of_posts_component_1.ListOfPostsComponent,
                one_post_component_1.OnePostComponent,
                update_post_component_1.UpdatePostComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                ngx_pagination_1.NgxPaginationModule,
                router_1.RouterModule.forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [
                {
                    provide: http_3.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_service_1.TokenInterceptorService,
                    multi: true
                },
                authentication_service_1.AuthenticationService,
                can_activate_auth_guard_service_1.CanActivateAuthGuardService,
                jwt_utils_service_1.JwtUtilsService,
                posts_service_1.PostsService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/list-of-posts/list-of-posts.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-of-posts/list-of-posts.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n    <div class=\"col-md-8 col-sm-offset-2\">\n      <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>User</th>\n              <th>Date & Time</th>\n              <th>Text</th>\n            </tr>\n          </thead>\n          <tbody>\n              <tr *ngFor = \"let post of posts | paginate: { itemsPerPage: 5, currentPage: p }\">\n                <td>{{post.user.firstName}}</td>\n                <td>{{post.date}}</td>\n                <td>{{post.text}}</td>\n                <td><button class=\"btn btn-success\" (click)=\"viewDetails(post.id)\" >Vidi detalje</button></td>\n              </tr>\n              <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n            </tbody>\n        </table>\n        <div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/list-of-posts/list-of-posts.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var posts_service_1 = __webpack_require__("./src/app/list-of-posts/posts.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ListOfPostsComponent = /** @class */ (function () {
    function ListOfPostsComponent(postsService, router) {
        this.postsService = postsService;
        this.router = router;
        this.posts = [];
        this.post2 = {
            id: 5,
            datum: "12.12.2012",
            user: {
                firstName: "aaaa",
                email: "email",
                lastName: "prezime",
                password: "",
                posts: [],
                securityAuthority: {
                    name: "sss"
                },
                username: "usserrr"
            },
            time: "",
            text: "komentarr",
            viewNumber: 5,
            comment: [],
            attachments: [],
            rating: 4
        };
        this.getAll();
    }
    ListOfPostsComponent.prototype.ngOnInit = function () {
    };
    ListOfPostsComponent.prototype.getAll = function () {
        var _this = this;
        this.postsService.findAll().subscribe(function (s) { _this.posts = s['content']; });
    };
    ListOfPostsComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.postsService.deletePost(id).subscribe(function (s) { return _this.getAll(); }, function (err) { return console.log("err"); });
    };
    ListOfPostsComponent.prototype.updatePost = function (id) {
        this.router.navigate(['posts/edit', id]);
    };
    ListOfPostsComponent.prototype.viewDetails = function (id) {
        this.router.navigate(['post/', id]);
    };
    ListOfPostsComponent = __decorate([
        core_1.Component({
            selector: 'app-list-of-posts',
            template: __webpack_require__("./src/app/list-of-posts/list-of-posts.component.html"),
            styles: [__webpack_require__("./src/app/list-of-posts/list-of-posts.component.css")]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.Router])
    ], ListOfPostsComponent);
    return ListOfPostsComponent;
}());
exports.ListOfPostsComponent = ListOfPostsComponent;


/***/ }),

/***/ "./src/app/list-of-posts/posts.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var PostsService = /** @class */ (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.addPost = function (newPost) {
        return this.http.post('/api/posts', JSON.stringify(newPost));
    };
    PostsService.prototype.findOne = function (id) {
        return this.http.get("/api/posts/" + id);
    };
    PostsService.prototype.findAll = function () {
        return this.http.get('/api/posts');
    };
    PostsService.prototype.deletePost = function (id) {
        console.log(id);
        return this.http.delete("/api/posts/" + id);
    };
    PostsService.prototype.updatePost = function (id, post) {
        return this.http.put("/api/posts/" + id, post);
    };
    PostsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;


/***/ }),

/***/ "./src/app/login/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "{{user.username}}\n\n\n<form class=\"form-signin\" (ngSubmit)=\"login()\">\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n  <label for=\"username\" class=\"sr-only\">Username</label>\n  <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\" required autofocus>\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\" required>\n  <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>\n<div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n  Wrong username or password.\n</div>"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var authentication_service_1 = __webpack_require__("./src/app/security/authentication.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = { username: 'String', password: '' };
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.user = new User(username: '',password: '' , firstname: '', lastname: '')
    };
    // login(): void {
    //   this.authenticationService.login(this.user.username, this.user.password).subscribe(
    //     (loggedIn: boolean) => {
    //       if (loggedIn) {
    //         this.router.navigate(['posts']);
    //       }
    //     }
    //   ,
    //   (err: Error) => {
    //     if ( err.toString() === 'Ilegal login') {
    //       this.wrongUsernameOrPass = true;
    //       console.log(err);
    //     } else {
    //       Observable.throw(err);
    //     }
    //   });
    // }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.wrongUsernameOrPass = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            _this.router.navigate(['posts']);
        }, function (error) {
            _this.router.navigate(['login']);
            alert('Failed to login');
            // this.alertService.error(error);
            // this.loading = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/one-post/one-post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/one-post/one-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\n.checked {\n    color: orange;\n}\n</style>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <div class=\"alert alert-info\" style=\"align-content: center\">\n          <h1 style=\"padding-left:46%\">Posts</h1>\n      </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8 col-sm-offset-2\">\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>Date & Time</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <td>{{post.user.firstName}}</td>\n              <td>{{post.datum}}</td>\n              <td><button class=\"btn btn-success\" (click)=\"updatePost(post.id)\" >Izmeni</button></td>\n              <td><button class=\"btn btn-danger\" (click)=\"deletePost(post.id)\" >Obrisi</button></td>\n            </tr>\n          </tbody>\n      </table>\n      <div>\n  </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-8 col-sm-offset-2\">\n      <textarea rows=\"8\" cols=\"120\" placeholder=\"Post text area...\"  [ngModel]=\"post.text\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8 col-sm-offset-2\">     \n      <textarea rows=\"8\" cols=\"120\" placeholder=\"Post attachment areaaaa...\"></textarea>               \n    </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-md-8 col-sm-offset-2\">     \n       <label>Number of views: </label > {{post.viewNumber}}\n        <span style=\"margin-left: 300px;\" >Post rating:</span>\n        <span [class]=\"value1\"></span>\n        <span [class]=\"value2\"></span>\n        <span [class]=\"value3\"></span>\n        <span [class]=\"value4\"></span>\n        <span [class]=\"value5\"></span>               \n      </div>\n    </div>\n  \n"

/***/ }),

/***/ "./src/app/one-post/one-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var posts_service_1 = __webpack_require__("./src/app/list-of-posts/posts.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var OnePostComponent = /** @class */ (function () {
    function OnePostComponent(postsService, route, router) {
        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.post = {
            datum: "",
            user: {
                firstName: "",
                email: "",
                lastName: "",
                password: "",
                posts: [],
                securityAuthority: {
                    name: ""
                },
                username: ""
            },
            time: "",
            text: "",
            viewNumber: 0,
            comment: [],
            attachments: [],
            rating: 0
        };
        this.value1 = "fa fa-star";
        this.value2 = "fa fa-star";
        this.value3 = "fa fa-star";
        this.value4 = "fa fa-star";
        this.value5 = "fa fa-star";
    }
    OnePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            if (params['id'] != null) {
                _this.id = +params['id']; // (+) konvertuje string 'id' u broj
                //id postavljamo kao path parametar pomocu interpolacije stringa
                if (_this.id != null) {
                    _this.postsService.findOne(_this.id).subscribe(function (e) {
                        _this.post = e;
                        _this.colorStars();
                    });
                }
            }
        });
    };
    OnePostComponent.prototype.colorStars = function () {
        if (this.post.rating >= 1) {
            this.value1 = "fa fa-star checked";
        }
        if (this.post.rating >= 2) {
            this.value2 = "fa fa-star checked";
        }
        if (this.post.rating >= 3) {
            this.value3 = "fa fa-star checked";
        }
        if (this.post.rating >= 4) {
            this.value4 = "fa fa-star checked";
        }
        if (this.post.rating >= 5) {
            this.value5 = "fa fa-star checked";
        }
    };
    OnePostComponent.prototype.updatePost = function (id) {
        this.postsService.updatePost(id, this.post);
    };
    OnePostComponent.prototype.deletePost = function (id) {
        var _this = this;
        this.postsService.deletePost(id).subscribe(function (s) {
            _this.router.navigate(['posts']);
        }, function (err) { return console.log("err"); });
    };
    OnePostComponent = __decorate([
        core_1.Component({
            selector: 'app-one-post',
            template: __webpack_require__("./src/app/one-post/one-post.component.html"),
            styles: [__webpack_require__("./src/app/one-post/one-post.component.css")]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.ActivatedRoute, router_1.Router])
    ], OnePostComponent);
    return OnePostComponent;
}());
exports.OnePostComponent = OnePostComponent;


/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  There is nothing here!\n</h1>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        core_1.Component({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
exports.PageNotFoundComponent = PageNotFoundComponent;


/***/ }),

/***/ "./src/app/security/authentication.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var jwt_utils_service_1 = __webpack_require__("./src/app/security/jwt-utils.service.ts");
var http_2 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    // login(username: String, password: String): Observable<boolean> {
    //     // const headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    //     return this.http.post(this.loginPath, JSON.stringify({ username, password }), /*{ headers }*/)
    //       .map((res: any) => {
    //         const token = res && res['token'];
    //         if (token) {
    //           localStorage.setItem('currentUser', JSON.stringify({
    //                                     username: username,
    //                                     roles: this.jwtUtilsService.getRoles(token),
    //                                     token: token
    //                                   }));
    //           return true;
    //         } else {
    //           return false;
    //         }
    //       })
    //       .catch((error: any) => {
    //         if (error.status === 400) {
    //           return Observable.throw('Ilegal login');
    //         } else {
    //           return Observable.throw(error.json().error || 'Server error');
    //         }
    //       });
    //   }
    AuthenticationService.prototype.login = function (username, password) {
        var headers = new http_2.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post('/api/login', JSON.stringify({ username: String, password: String }), { headers: headers })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        });
    };
    // login(username: string, password: string): Promise<any> {
    //   return this.http
    //     .post('/api/login', {username, password}, {responseType: 'text'})
    //     .toPromise()
    //     .then(res => localStorage.setItem('token', res))
    //     .catch(this.handleError);
    //   }
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : '';
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.currentUser) {
            return JSON.parse(localStorage.currentUser);
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, jwt_utils_service_1.JwtUtilsService])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;


/***/ }),

/***/ "./src/app/security/can-activate-auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var authentication_service_1 = __webpack_require__("./src/app/security/authentication.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var CanActivateAuthGuardService = /** @class */ (function () {
    function CanActivateAuthGuardService(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuardService.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuardService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService, router_1.Router])
    ], CanActivateAuthGuardService);
    return CanActivateAuthGuardService;
}());
exports.CanActivateAuthGuardService = CanActivateAuthGuardService;


/***/ }),

/***/ "./src/app/security/jwt-utils.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var JwtUtilsService = /** @class */ (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());
exports.JwtUtilsService = JwtUtilsService;


/***/ }),

/***/ "./src/app/security/token-interceptor.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var core_2 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var authentication_service_1 = __webpack_require__("./src/app/security/authentication.service.ts");
var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(authentication_service_1.AuthenticationService);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_2.Injector])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());
exports.TokenInterceptorService = TokenInterceptorService;


/***/ }),

/***/ "./src/app/update-post/update-post.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/update-post/update-post.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<style>\n.checked {\n    color: orange;\n}\n</style>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n      <div class=\"alert alert-info\" style=\"align-content: center\">\n          <h1 style=\"padding-left:46%\">Posts</h1>\n      </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-8 col-sm-offset-2\">\n    <table class=\"table table-striped\">\n        <thead>\n          <tr>\n            <th>User</th>\n            <th>Date & Time</th>\n            <th></th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n            <tr>\n              <td>{{post.user.firstName}}</td>\n              <td>{{post.datum}}</td>\n              <td><button class=\"btn btn-success\" (click)=\"updatePost(post.id)\" >Izmeni</button></td>\n              <td><button class=\"btn btn-danger\" (click)=\"deletePost(post.id)\" >Obrisi</button></td>\n            </tr>\n          </tbody>\n      </table>\n      <div>\n  </div>\n</div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-8 col-sm-offset-2\">\n      <textarea rows=\"8\" cols=\"120\" placeholder=\"Post text area...\"  [ngModel]=\"post.text\"></textarea>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-8 col-sm-offset-2\">     \n      <textarea rows=\"8\" cols=\"120\" placeholder=\"Post attachment areaaaa...\"></textarea>               \n    </div>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-md-8 col-sm-offset-2\">     \n       <label>Number of views: </label > {{post.viewNumber}}\n        <span style=\"margin-left: 300px;\" >Post rating:</span>\n        <span [class]=\"value1\"></span>\n        <span [class]=\"value2\"></span>\n        <span [class]=\"value3\"></span>\n        <span [class]=\"value4\"></span>\n        <span [class]=\"value5\"></span>               \n      </div>\n    </div>\n  \n"

/***/ }),

/***/ "./src/app/update-post/update-post.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var posts_service_1 = __webpack_require__("./src/app/list-of-posts/posts.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var UpdatePostComponent = /** @class */ (function () {
    function UpdatePostComponent(postsService, route, router) {
        this.postsService = postsService;
        this.route = route;
        this.router = router;
        this.post = {
            datum: "",
            user: {
                firstName: "",
                email: "",
                lastName: "",
                password: "",
                posts: [],
                securityAuthority: {
                    name: ""
                },
                username: ""
            },
            time: "",
            text: "",
            viewNumber: 0,
            comment: [],
            attachments: [],
            rating: 0
        };
        this.value1 = "fa fa-star";
        this.value2 = "fa fa-star";
        this.value3 = "fa fa-star";
        this.value4 = "fa fa-star";
        this.value5 = "fa fa-star";
    }
    UpdatePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.isDataAvailable = false;
            if (params['id'] != null) {
                _this.id = +params['id']; // (+) konvertuje string 'id' u broj
                //id postavljamo kao path parametar pomocu interpolacije stringa
                if (_this.id != null) {
                    _this.postsService.findOne(_this.id).subscribe(function (e) {
                        _this.post = e;
                        _this.colorStars();
                    });
                }
            }
        });
    };
    UpdatePostComponent.prototype.colorStars = function () {
        if (this.post.rating >= 1) {
            this.value1 = "fa fa-star checked";
        }
        if (this.post.rating >= 2) {
            this.value2 = "fa fa-star checked";
        }
        if (this.post.rating >= 3) {
            this.value3 = "fa fa-star checked";
        }
        if (this.post.rating >= 4) {
            this.value4 = "fa fa-star checked";
        }
        if (this.post.rating >= 5) {
            this.value5 = "fa fa-star checked";
        }
    };
    UpdatePostComponent.prototype.saveAfterChangePost = function () {
        this.postsService.updatePost(this.post.id, this.post);
    };
    UpdatePostComponent.prototype.goBackPost = function () {
        this.router.navigate(['posts/']);
    };
    UpdatePostComponent = __decorate([
        core_1.Component({
            selector: 'app-update-post',
            template: __webpack_require__("./src/app/update-post/update-post.component.html"),
            styles: [__webpack_require__("./src/app/update-post/update-post.component.css")]
        }),
        __metadata("design:paramtypes", [posts_service_1.PostsService, router_1.ActivatedRoute, router_1.Router])
    ], UpdatePostComponent);
    return UpdatePostComponent;
}());
exports.UpdatePostComponent = UpdatePostComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ "./src/polyfills.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
__webpack_require__("./node_modules/core-js/es6/symbol.js");
__webpack_require__("./node_modules/core-js/es6/object.js");
__webpack_require__("./node_modules/core-js/es6/function.js");
__webpack_require__("./node_modules/core-js/es6/parse-int.js");
__webpack_require__("./node_modules/core-js/es6/parse-float.js");
__webpack_require__("./node_modules/core-js/es6/number.js");
__webpack_require__("./node_modules/core-js/es6/math.js");
__webpack_require__("./node_modules/core-js/es6/string.js");
__webpack_require__("./node_modules/core-js/es6/date.js");
__webpack_require__("./node_modules/core-js/es6/array.js");
__webpack_require__("./node_modules/core-js/es6/regexp.js");
__webpack_require__("./node_modules/core-js/es6/map.js");
__webpack_require__("./node_modules/core-js/es6/set.js");
__webpack_require__("./node_modules/core-js/es6/reflect.js");
__webpack_require__("./node_modules/core-js/es7/reflect.js");
__webpack_require__("./node_modules/zone.js/dist/zone.js");


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map