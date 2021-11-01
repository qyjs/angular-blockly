/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 14:58:20
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:43:37
 * @FilePath: /angular-blockly/src/app/app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBlocklysModule } from 'ngx-blocklys';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxBlocklysModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
