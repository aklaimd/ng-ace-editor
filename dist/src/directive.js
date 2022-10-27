import { Directive, EventEmitter, Output, Input } from "@angular/core";
import "brace";
import "brace/theme/monokai";
import * as i0 from "@angular/core";
var AceEditorDirective = /** @class */ (function () {
    function AceEditorDirective(elementRef, zone) {
        var _this = this;
        this.zone = zone;
        this.textChanged = new EventEmitter();
        this.textChange = new EventEmitter();
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
    AceEditorDirective.ɵfac = function AceEditorDirective_Factory(t) { return new (t || AceEditorDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    AceEditorDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: AceEditorDirective, selectors: [["", "ace-editor", ""]], inputs: { options: "options", readOnly: "readOnly", theme: "theme", mode: "mode", text: "text", autoUpdateContent: "autoUpdateContent", durationBeforeCallback: "durationBeforeCallback" }, outputs: { textChanged: "textChanged", textChange: "textChange" } });
    return AceEditorDirective;
}());
export { AceEditorDirective };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AceEditorDirective, [{
        type: Directive,
        args: [{
                selector: '[ace-editor]'
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, { textChanged: [{
            type: Output
        }], textChange: [{
            type: Output
        }], options: [{
            type: Input
        }], readOnly: [{
            type: Input
        }], theme: [{
            type: Input
        }], mode: [{
            type: Input
        }], text: [{
            type: Input
        }], autoUpdateContent: [{
            type: Input
        }], durationBeforeCallback: [{
            type: Input
        }] }); })();
//# sourceMappingURL=directive.js.map