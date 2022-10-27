var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { NgModule } from "@angular/core";
import { AceEditorComponent } from "./component";
import { AceEditorDirective } from "./directive";
import * as i0 from "@angular/core";
var list = [
    AceEditorComponent,
    AceEditorDirective
];
var AceEditorModule = /** @class */ (function () {
    function AceEditorModule() {
    }
    AceEditorModule.ɵfac = function AceEditorModule_Factory(t) { return new (t || AceEditorModule)(); };
    AceEditorModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AceEditorModule });
    AceEditorModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
    return AceEditorModule;
}());
export { AceEditorModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AceEditorModule, [{
        type: NgModule,
        args: [{
                declarations: __spreadArray([], list, true),
                imports: [],
                providers: [],
                exports: list
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AceEditorModule, { declarations: [AceEditorComponent,
        AceEditorDirective], exports: [AceEditorComponent,
        AceEditorDirective] }); })();
//# sourceMappingURL=module.js.map