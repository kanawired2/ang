import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from "@angular/router";

import { AppComponent }  from './app.component';
import { ArticleComponent }  from './article.component';
import { PostsComponent }  from './posts/posts.component';
import { ArticleService } from './article.service';
import { ApiService } from './posts/api.service';

@NgModule({
  imports: [     
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        HttpClientModule,
  ],
  declarations: [
        AppComponent,
        ArticleComponent,
        PostsComponent       
  ],
  providers: [
        ArticleService,
        ApiService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { } 