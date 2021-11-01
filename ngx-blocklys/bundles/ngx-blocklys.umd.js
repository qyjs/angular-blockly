(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-blocklys', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-blocklys"] = {}, global.ng.core));
})(this, (function (exports, i0) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    /*
     * @Author: junsheng.liu
     * @Descripttion:
     * @Date: 2021-11-01 15:02:21
     * @LastEditors: junsheng
     * @LastEditTime: 2021-11-01 15:28:19
     * @FilePath: /angular-blockly/projects/ngx-blocklys/src/lib/blocklys/ngx-blocklys.component.ts
     */
    var NgxBlocklysComponent = /** @class */ (function () {
        function NgxBlocklysComponent() {
        }
        NgxBlocklysComponent.prototype.ngOnInit = function () {
        };
        return NgxBlocklysComponent;
    }());
    NgxBlocklysComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgxBlocklysComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.12", type: NgxBlocklysComponent, selector: "ngx-blocklys", ngImport: i0__namespace, template: "<!--\n * @Author: junsheng.liu\n * @Descripttion:\n * @Date: 2021-11-01 15:03:48\n * @LastEditors: junsheng\n * @LastEditTime: 2021-11-01 15:05:42\n * @FilePath: /Blockly/angular-blockly/projects/ngx-blocklys/src/lib/blockly-ebao/ngx-blocklys.component.html\n-->\n<p>\n  blockly works!\n</p>\n\n<div>\n  <img src=\"assets/bgzip.png\" alt=\"\">\n</div>\n", styles: ["img{width:30%}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysComponent, decorators: [{
                type: i0.Component,
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
    var NgxBlocklysModule = /** @class */ (function () {
        function NgxBlocklysModule() {
        }
        return NgxBlocklysModule;
    }());
    NgxBlocklysModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgxBlocklysModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysModule, declarations: [NgxBlocklysComponent], exports: [NgxBlocklysComponent] });
    NgxBlocklysModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysModule, imports: [[]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysModule, decorators: [{
                type: i0.NgModule,
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
    var NgxBlocklysService = /** @class */ (function () {
        function NgxBlocklysService() {
        }
        return NgxBlocklysService;
    }());
    NgxBlocklysService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NgxBlocklysService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.12", ngImport: i0__namespace, type: NgxBlocklysService, decorators: [{
                type: i0.Injectable,
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

    exports.NgxBlocklysComponent = NgxBlocklysComponent;
    exports.NgxBlocklysModule = NgxBlocklysModule;
    exports.NgxBlocklysService = NgxBlocklysService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-blocklys.umd.js.map
