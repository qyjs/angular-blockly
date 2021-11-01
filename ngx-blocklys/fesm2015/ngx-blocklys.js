import * as i0 from '@angular/core';
import { Component, NgModule, Injectable } from '@angular/core';

/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 15:02:21
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:28:19
 * @FilePath: /angular-blockly/projects/ngx-blocklys/src/lib/blocklys/ngx-blocklys.component.ts
 */
class NgxBlocklysComponent {
    constructor() { }
    ngOnInit() {
    }
}
NgxBlocklysComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxBlocklysComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.12", type: NgxBlocklysComponent, selector: "ngx-blocklys", ngImport: i0, template: "<!--\n * @Author: junsheng.liu\n * @Descripttion:\n * @Date: 2021-11-01 15:03:48\n * @LastEditors: junsheng\n * @LastEditTime: 2021-11-01 15:05:42\n * @FilePath: /Blockly/angular-blockly/projects/ngx-blocklys/src/lib/blockly-ebao/ngx-blocklys.component.html\n-->\n<p>\n  blockly works!\n</p>\n\n<div>\n  <img src=\"assets/bgzip.png\" alt=\"\">\n</div>\n", styles: ["img{width:30%}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-blocklys',
                    templateUrl: './ngx-blocklys.component.html',
                    styleUrls: ['./ngx-blocklys.component.scss']
                }]
        }], ctorParameters: function () { return []; } });

/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 15:02:21
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:55:48
 * @FilePath: /angular-blockly/projects/ngx-blocklys/src/lib/ngx-blocklys.module.ts
 */
class NgxBlocklysModule {
}
NgxBlocklysModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxBlocklysModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysModule, declarations: [NgxBlocklysComponent], exports: [NgxBlocklysComponent] });
NgxBlocklysModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxBlocklysComponent
                    ],
                    imports: [],
                    exports: [
                        NgxBlocklysComponent
                    ]
                }]
        }] });

/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 15:02:21
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:26:57
 * @FilePath: /angular-blockly/projects/ngx-blocklys/src/lib/ngx-blocklys.service.ts
 */
class NgxBlocklysService {
    constructor() { }
}
NgxBlocklysService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxBlocklysService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0, type: NgxBlocklysService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/*
 * @Author: junsheng.liu
 * @Descripttion:
 * @Date: 2021-11-01 15:02:21
 * @LastEditors: junsheng
 * @LastEditTime: 2021-11-01 15:27:11
 * @FilePath: /angular-blockly/projects/ngx-blocklys/src/public-api.ts
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxBlocklysComponent, NgxBlocklysModule, NgxBlocklysService };
//# sourceMappingURL=ngx-blocklys.js.map
