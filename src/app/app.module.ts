/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 14:58:20
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:14:08
 * @FilePath: /Blockly/angular-blockly/src/app/app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxBlocklyEbaoModule } from 'ngx-blockly-ebao';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxBlocklyEbaoModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
