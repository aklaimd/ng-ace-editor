'use strict';

var i0 = require('@angular/core');
require('brace');
require('brace/theme/monokai');
var forms = require('@angular/forms');

function _interopNamespaceDefault(e) {
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
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var AceEditorDirective = /** @class */ (function () {
    function AceEditorDirective(elementRef, zone) {
        var _this = this;
        this.zone = zone;
        this.textChanged = new i0.EventEmitter();
        this.textChange = new i0.EventEmitter();
        this._options = {};
        this._readOnly = false;
        this._theme = "monokai";
        this._mode = "html";
        this._autoUpdateContent = true;
        this._durationBeforeCallback = 0;
        this._text = "";
        var el = elementRef.nativeElement;
        this.zone.runOutsideAngular(function () {
            _this.editor = ace["edit"](el);
        });
        this.editor.$blockScrolling = Infinity;
    }
    AceEditorDirective.prototype.ngOnInit = function () {
        this.init();
        this.initEvents();
    };
    AceEditorDirective.prototype.ngOnDestroy = function () {
        this.editor.destroy();
    };
    AceEditorDirective.prototype.init = function () {
        this.editor.setOptions(this._options || {});
        this.editor.setTheme("ace/theme/".concat(this._theme));
        this.setMode(this._mode);
        this.editor.setReadOnly(this._readOnly);
    };
    AceEditorDirective.prototype.initEvents = function () {
        var _this = this;
        this.editor.on('change', function () { return _this.updateText(); });
        this.editor.on('paste', function () { return _this.updateText(); });
    };
    AceEditorDirective.prototype.updateText = function () {
        var _this = this;
        var newVal = this.editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        if (!this._durationBeforeCallback) {
            this._text = newVal;
            this.zone.run(function () {
                _this.textChange.emit(newVal);
                _this.textChanged.emit(newVal);
            });
        }
        else {
            if (this.timeoutSaving != null) {
                clearTimeout(this.timeoutSaving);
            }
            this.timeoutSaving = setTimeout(function () {
                _this._text = newVal;
                _this.zone.run(function () {
                    _this.textChange.emit(newVal);
                    _this.textChanged.emit(newVal);
                });
                _this.timeoutSaving = null;
            }, this._durationBeforeCallback);
        }
        this.oldText = newVal;
    };
    Object.defineProperty(AceEditorDirective.prototype, "options", {
        set: function (options) {
            this._options = options;
            this.editor.setOptions(options || {});
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "readOnly", {
        set: function (readOnly) {
            this._readOnly = readOnly;
            this.editor.setReadOnly(readOnly);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "theme", {
        set: function (theme) {
            this._theme = theme;
            this.editor.setTheme("ace/theme/".concat(theme));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "mode", {
        set: function (mode) {
            this.setMode(mode);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorDirective.prototype.setMode = function (mode) {
        this._mode = mode;
        if (typeof this._mode === 'object') {
            this.editor.getSession().setMode(this._mode);
        }
        else {
            this.editor.getSession().setMode("ace/mode/".concat(this._mode));
        }
    };
    Object.defineProperty(AceEditorDirective.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this.setText(text);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorDirective.prototype.setText = function (text) {
        if (this._text !== text) {
            if (text === null || text === undefined) {
                text = "";
            }
            if (this._autoUpdateContent === true) {
                this._text = text;
                this.editor.setValue(text);
                this.editor.clearSelection();
            }
        }
    };
    Object.defineProperty(AceEditorDirective.prototype, "autoUpdateContent", {
        set: function (status) {
            this._autoUpdateContent = status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AceEditorDirective.prototype, "durationBeforeCallback", {
        set: function (num) {
            this.setDurationBeforeCallback(num);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorDirective.prototype.setDurationBeforeCallback = function (num) {
        this._durationBeforeCallback = num;
    };
    Object.defineProperty(AceEditorDirective.prototype, "aceEditor", {
        get: function () {
            return this.editor;
        },
        enumerable: false,
        configurable: true
    });
    AceEditorDirective.ɵfac = function AceEditorDirective_Factory(t) { return new (t || AceEditorDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    AceEditorDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: AceEditorDirective, selectors: [["", "ace-editor", ""]], inputs: { options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" } });
    return AceEditorDirective;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AceEditorDirective, [{
        type: i0.Directive,
        args: [{
                selector: '[ace-editor]'
            }]
    }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }]; }, { textChanged: [{
            type: i0.Output
        }], textChange: [{
            type: i0.Output
        }], options: [{
            type: i0.Input
        }], readOnly: [{
            type: i0.Input
        }], theme: [{
            type: i0.Input
        }], mode: [{
            type: i0.Input
        }], text: [{
            type: i0.Input
        }], autoUpdateContent: [{
            type: i0.Input
        }], durationBeforeCallback: [{
            type: i0.Input
        }] }); })();

var AceEditorComponent = /** @class */ (function () {
    function AceEditorComponent(elementRef, zone) {
        var _this = this;
        this.zone = zone;
        this.textChanged = new i0.EventEmitter();
        this.textChange = new i0.EventEmitter();
        this.style = {};
        this._options = {};
        this._readOnly = false;
        this._theme = "monokai";
        this._mode = "html";
        this._autoUpdateContent = true;
        this._durationBeforeCallback = 0;
        this._text = "";
        this._onChange = function (_) {
        };
        this._onTouched = function () {
        };
        var el = elementRef.nativeElement;
        this.zone.runOutsideAngular(function () {
            _this._editor = ace['edit'](el);
        });
        this._editor.$blockScrolling = Infinity;
    }
    AceEditorComponent.prototype.ngOnInit = function () {
        this.init();
        this.initEvents();
    };
    AceEditorComponent.prototype.ngOnDestroy = function () {
        this._editor.destroy();
    };
    AceEditorComponent.prototype.init = function () {
        this.setOptions(this._options || {});
        this.setTheme(this._theme);
        this.setMode(this._mode);
        this.setReadOnly(this._readOnly);
    };
    AceEditorComponent.prototype.initEvents = function () {
        var _this = this;
        this._editor.on('change', function () { return _this.updateText(); });
        this._editor.on('paste', function () { return _this.updateText(); });
    };
    AceEditorComponent.prototype.updateText = function () {
        var _this = this;
        var newVal = this._editor.getValue();
        if (newVal === this.oldText) {
            return;
        }
        if (!this._durationBeforeCallback) {
            this._text = newVal;
            this.zone.run(function () {
                _this.textChange.emit(newVal);
                _this.textChanged.emit(newVal);
            });
            this._onChange(newVal);
        }
        else {
            if (this.timeoutSaving) {
                clearTimeout(this.timeoutSaving);
            }
            this.timeoutSaving = setTimeout(function () {
                _this._text = newVal;
                _this.zone.run(function () {
                    _this.textChange.emit(newVal);
                    _this.textChanged.emit(newVal);
                });
                _this.timeoutSaving = null;
            }, this._durationBeforeCallback);
        }
        this.oldText = newVal;
    };
    Object.defineProperty(AceEditorComponent.prototype, "options", {
        set: function (options) {
            this.setOptions(options);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setOptions = function (options) {
        this._options = options;
        this._editor.setOptions(options || {});
    };
    Object.defineProperty(AceEditorComponent.prototype, "readOnly", {
        set: function (readOnly) {
            this.setReadOnly(readOnly);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setReadOnly = function (readOnly) {
        this._readOnly = readOnly;
        this._editor.setReadOnly(readOnly);
    };
    Object.defineProperty(AceEditorComponent.prototype, "theme", {
        set: function (theme) {
            this.setTheme(theme);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setTheme = function (theme) {
        this._theme = theme;
        this._editor.setTheme("ace/theme/".concat(theme));
    };
    Object.defineProperty(AceEditorComponent.prototype, "mode", {
        set: function (mode) {
            this.setMode(mode);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setMode = function (mode) {
        this._mode = mode;
        if (typeof this._mode === 'object') {
            this._editor.getSession().setMode(this._mode);
        }
        else {
            this._editor.getSession().setMode("ace/mode/".concat(this._mode));
        }
    };
    Object.defineProperty(AceEditorComponent.prototype, "value", {
        get: function () {
            return this.text;
        },
        set: function (value) {
            this.setText(value);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.writeValue = function (value) {
        this.setText(value);
    };
    AceEditorComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    AceEditorComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    Object.defineProperty(AceEditorComponent.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (text) {
            this.setText(text);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setText = function (text) {
        if (text === null || text === undefined) {
            text = "";
        }
        if (this._text !== text && this._autoUpdateContent === true) {
            this._text = text;
            this._editor.setValue(text);
            this._onChange(text);
            this._editor.clearSelection();
        }
    };
    Object.defineProperty(AceEditorComponent.prototype, "autoUpdateContent", {
        set: function (status) {
            this.setAutoUpdateContent(status);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setAutoUpdateContent = function (status) {
        this._autoUpdateContent = status;
    };
    Object.defineProperty(AceEditorComponent.prototype, "durationBeforeCallback", {
        set: function (num) {
            this.setDurationBeforeCallback(num);
        },
        enumerable: false,
        configurable: true
    });
    AceEditorComponent.prototype.setDurationBeforeCallback = function (num) {
        this._durationBeforeCallback = num;
    };
    AceEditorComponent.prototype.getEditor = function () {
        return this._editor;
    };
    AceEditorComponent.ɵfac = function AceEditorComponent_Factory(t) { return new (t || AceEditorComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    AceEditorComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: AceEditorComponent, selectors: [["ace-editor"]], inputs: { style: "style", options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", value: "value", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" }, features: [i0__namespace.ɵɵProvidersFeature([{
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return AceEditorComponent; }),
                    multi: true
                }])], decls: 0, vars: 0, template: function AceEditorComponent_Template(rf, ctx) { }, styles: ["[_nghost-%COMP%] { display:block;width:100%; }"] });
    return AceEditorComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AceEditorComponent, [{
        type: i0.Component,
        args: [{ selector: 'ace-editor', template: '', providers: [{
                        provide: forms.NG_VALUE_ACCESSOR,
                        useExisting: i0.forwardRef(function () { return AceEditorComponent; }),
                        multi: true
                    }], styles: [":host { display:block;width:100%; }"] }]
    }], function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.NgZone }]; }, { textChanged: [{
            type: i0.Output
        }], textChange: [{
            type: i0.Output
        }], style: [{
            type: i0.Input
        }], options: [{
            type: i0.Input
        }], readOnly: [{
            type: i0.Input
        }], theme: [{
            type: i0.Input
        }], mode: [{
            type: i0.Input
        }], value: [{
            type: i0.Input
        }], text: [{
            type: i0.Input
        }], autoUpdateContent: [{
            type: i0.Input
        }], durationBeforeCallback: [{
            type: i0.Input
        }] }); })();

var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var list = [
    AceEditorComponent,
    AceEditorDirective
];
var AceEditorModule = /** @class */ (function () {
    function AceEditorModule() {
    }
    AceEditorModule.ɵfac = function AceEditorModule_Factory(t) { return new (t || AceEditorModule)(); };
    AceEditorModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: AceEditorModule });
    AceEditorModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({});
    return AceEditorModule;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(AceEditorModule, [{
        type: i0.NgModule,
        args: [{
                declarations: __spreadArray([], list, true),
                imports: [],
                providers: [],
                exports: list
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(AceEditorModule, { declarations: [AceEditorComponent,
        AceEditorDirective], exports: [AceEditorComponent,
        AceEditorDirective] }); })();

exports.AceEditorComponent = AceEditorComponent;
exports.AceEditorDirective = AceEditorDirective;
exports.AceEditorModule = AceEditorModule;
