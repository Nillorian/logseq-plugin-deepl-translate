"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/@logseq/libs/dist/lsplugin.user.js
  var require_lsplugin_user = __commonJS({
    "node_modules/@logseq/libs/dist/lsplugin.user.js"(exports, module) {
      !(function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.LSPluginEntry = t() : e.LSPluginEntry = t();
      })(self, (() => (() => {
        var e = { 227: (e2, t2, n2) => {
          var r2 = n2(155);
          t2.formatArgs = function(t3) {
            if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e2.exports.humanize(this.diff), !this.useColors) return;
            const n3 = "color: " + this.color;
            t3.splice(1, 0, n3, "color: inherit");
            let r3 = 0, o2 = 0;
            t3[0].replace(/%[a-zA-Z%]/g, ((e3) => {
              "%%" !== e3 && (r3++, "%c" === e3 && (o2 = r3));
            })), t3.splice(o2, 0, n3);
          }, t2.save = function(e3) {
            try {
              e3 ? t2.storage.setItem("debug", e3) : t2.storage.removeItem("debug");
            } catch (e4) {
            }
          }, t2.load = function() {
            let e3;
            try {
              e3 = t2.storage.getItem("debug");
            } catch (e4) {
            }
            !e3 && void 0 !== r2 && "env" in r2 && (e3 = r2.env.DEBUG);
            return e3;
          }, t2.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
          }, t2.storage = (function() {
            try {
              return localStorage;
            } catch (e3) {
            }
          })(), t2.destroy = /* @__PURE__ */ (() => {
            let e3 = false;
            return () => {
              e3 || (e3 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
            };
          })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
          }), e2.exports = n2(447)(t2);
          const { formatters: o } = e2.exports;
          o.j = function(e3) {
            try {
              return JSON.stringify(e3);
            } catch (e4) {
              return "[UnexpectedJSONParseError]: " + e4.message;
            }
          };
        }, 447: (e2, t2, n2) => {
          e2.exports = function(e3) {
            function t3(e4) {
              let n3, o2, i, s = null;
              function a(...e5) {
                if (!a.enabled) return;
                const r3 = a, o3 = Number(/* @__PURE__ */ new Date()), i2 = o3 - (n3 || o3);
                r3.diff = i2, r3.prev = n3, r3.curr = o3, n3 = o3, e5[0] = t3.coerce(e5[0]), "string" != typeof e5[0] && e5.unshift("%O");
                let s2 = 0;
                e5[0] = e5[0].replace(/%([a-zA-Z%])/g, ((n4, o4) => {
                  if ("%%" === n4) return "%";
                  s2++;
                  const i3 = t3.formatters[o4];
                  if ("function" == typeof i3) {
                    const t4 = e5[s2];
                    n4 = i3.call(r3, t4), e5.splice(s2, 1), s2--;
                  }
                  return n4;
                })), t3.formatArgs.call(r3, e5);
                (r3.log || t3.log).apply(r3, e5);
              }
              return a.namespace = e4, a.useColors = t3.useColors(), a.color = t3.selectColor(e4), a.extend = r2, a.destroy = t3.destroy, Object.defineProperty(a, "enabled", { enumerable: true, configurable: false, get: () => null !== s ? s : (o2 !== t3.namespaces && (o2 = t3.namespaces, i = t3.enabled(e4)), i), set: (e5) => {
                s = e5;
              } }), "function" == typeof t3.init && t3.init(a), a;
            }
            function r2(e4, n3) {
              const r3 = t3(this.namespace + (void 0 === n3 ? ":" : n3) + e4);
              return r3.log = this.log, r3;
            }
            function o(e4) {
              return e4.toString().substring(2, e4.toString().length - 2).replace(/\.\*\?$/, "*");
            }
            return t3.debug = t3, t3.default = t3, t3.coerce = function(e4) {
              if (e4 instanceof Error) return e4.stack || e4.message;
              return e4;
            }, t3.disable = function() {
              const e4 = [...t3.names.map(o), ...t3.skips.map(o).map(((e5) => "-" + e5))].join(",");
              return t3.enable(""), e4;
            }, t3.enable = function(e4) {
              let n3;
              t3.save(e4), t3.namespaces = e4, t3.names = [], t3.skips = [];
              const r3 = ("string" == typeof e4 ? e4 : "").split(/[\s,]+/), o2 = r3.length;
              for (n3 = 0; n3 < o2; n3++) r3[n3] && ("-" === (e4 = r3[n3].replace(/\*/g, ".*?"))[0] ? t3.skips.push(new RegExp("^" + e4.slice(1) + "$")) : t3.names.push(new RegExp("^" + e4 + "$")));
            }, t3.enabled = function(e4) {
              if ("*" === e4[e4.length - 1]) return true;
              let n3, r3;
              for (n3 = 0, r3 = t3.skips.length; n3 < r3; n3++) if (t3.skips[n3].test(e4)) return false;
              for (n3 = 0, r3 = t3.names.length; n3 < r3; n3++) if (t3.names[n3].test(e4)) return true;
              return false;
            }, t3.humanize = n2(824), t3.destroy = function() {
              console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
            }, Object.keys(e3).forEach(((n3) => {
              t3[n3] = e3[n3];
            })), t3.names = [], t3.skips = [], t3.formatters = {}, t3.selectColor = function(e4) {
              let n3 = 0;
              for (let t4 = 0; t4 < e4.length; t4++) n3 = (n3 << 5) - n3 + e4.charCodeAt(t4), n3 |= 0;
              return t3.colors[Math.abs(n3) % t3.colors.length];
            }, t3.enable(t3.load()), t3;
          };
        }, 996: (e2) => {
          "use strict";
          var t2 = function(e3) {
            return /* @__PURE__ */ (function(e4) {
              return !!e4 && "object" == typeof e4;
            })(e3) && !(function(e4) {
              var t3 = Object.prototype.toString.call(e4);
              return "[object RegExp]" === t3 || "[object Date]" === t3 || (function(e5) {
                return e5.$$typeof === n2;
              })(e4);
            })(e3);
          };
          var n2 = "function" == typeof Symbol && Symbol.for ? /* @__PURE__ */ Symbol.for("react.element") : 60103;
          function r2(e3, t3) {
            return false !== t3.clone && t3.isMergeableObject(e3) ? c((n3 = e3, Array.isArray(n3) ? [] : {}), e3, t3) : e3;
            var n3;
          }
          function o(e3, t3, n3) {
            return e3.concat(t3).map((function(e4) {
              return r2(e4, n3);
            }));
          }
          function i(e3) {
            return Object.keys(e3).concat((function(e4) {
              return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e4).filter((function(t3) {
                return Object.propertyIsEnumerable.call(e4, t3);
              })) : [];
            })(e3));
          }
          function s(e3, t3) {
            try {
              return t3 in e3;
            } catch (e4) {
              return false;
            }
          }
          function a(e3, t3, n3) {
            var o2 = {};
            return n3.isMergeableObject(e3) && i(e3).forEach((function(t4) {
              o2[t4] = r2(e3[t4], n3);
            })), i(t3).forEach((function(i2) {
              (function(e4, t4) {
                return s(e4, t4) && !(Object.hasOwnProperty.call(e4, t4) && Object.propertyIsEnumerable.call(e4, t4));
              })(e3, i2) || (s(e3, i2) && n3.isMergeableObject(t3[i2]) ? o2[i2] = (function(e4, t4) {
                if (!t4.customMerge) return c;
                var n4 = t4.customMerge(e4);
                return "function" == typeof n4 ? n4 : c;
              })(i2, n3)(e3[i2], t3[i2], n3) : o2[i2] = r2(t3[i2], n3));
            })), o2;
          }
          function c(e3, n3, i2) {
            (i2 = i2 || {}).arrayMerge = i2.arrayMerge || o, i2.isMergeableObject = i2.isMergeableObject || t2, i2.cloneUnlessOtherwiseSpecified = r2;
            var s2 = Array.isArray(n3);
            return s2 === Array.isArray(e3) ? s2 ? i2.arrayMerge(e3, n3, i2) : a(e3, n3, i2) : r2(n3, i2);
          }
          c.all = function(e3, t3) {
            if (!Array.isArray(e3)) throw new Error("first argument should be an array");
            return e3.reduce((function(e4, n3) {
              return c(e4, n3, t3);
            }), {});
          };
          var l = c;
          e2.exports = l;
        }, 856: function(e2) {
          e2.exports = (function() {
            "use strict";
            function e3(t3) {
              return e3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
                return typeof e4;
              } : function(e4) {
                return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
              }, e3(t3);
            }
            function t2(e4, n3) {
              return t2 = Object.setPrototypeOf || function(e5, t3) {
                return e5.__proto__ = t3, e5;
              }, t2(e4, n3);
            }
            function n2() {
              if ("undefined" == typeof Reflect || !Reflect.construct) return false;
              if (Reflect.construct.sham) return false;
              if ("function" == typeof Proxy) return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {
                }))), true;
              } catch (e4) {
                return false;
              }
            }
            function r2(e4, o2, i2) {
              return r2 = n2() ? Reflect.construct : function(e5, n3, r3) {
                var o3 = [null];
                o3.push.apply(o3, n3);
                var i3 = new (Function.bind.apply(e5, o3))();
                return r3 && t2(i3, r3.prototype), i3;
              }, r2.apply(null, arguments);
            }
            function o(e4) {
              return i(e4) || s(e4) || a(e4) || l();
            }
            function i(e4) {
              if (Array.isArray(e4)) return c(e4);
            }
            function s(e4) {
              if ("undefined" != typeof Symbol && null != e4[Symbol.iterator] || null != e4["@@iterator"]) return Array.from(e4);
            }
            function a(e4, t3) {
              if (e4) {
                if ("string" == typeof e4) return c(e4, t3);
                var n3 = Object.prototype.toString.call(e4).slice(8, -1);
                return "Object" === n3 && e4.constructor && (n3 = e4.constructor.name), "Map" === n3 || "Set" === n3 ? Array.from(e4) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? c(e4, t3) : void 0;
              }
            }
            function c(e4, t3) {
              (null == t3 || t3 > e4.length) && (t3 = e4.length);
              for (var n3 = 0, r3 = new Array(t3); n3 < t3; n3++) r3[n3] = e4[n3];
              return r3;
            }
            function l() {
              throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var u = Object.hasOwnProperty, f = Object.setPrototypeOf, p = Object.isFrozen, h = Object.getPrototypeOf, d = Object.getOwnPropertyDescriptor, m = Object.freeze, g = Object.seal, y = Object.create, v = "undefined" != typeof Reflect && Reflect, b = v.apply, _ = v.construct;
            b || (b = function(e4, t3, n3) {
              return e4.apply(t3, n3);
            }), m || (m = function(e4) {
              return e4;
            }), g || (g = function(e4) {
              return e4;
            }), _ || (_ = function(e4, t3) {
              return r2(e4, o(t3));
            });
            var w = L(Array.prototype.forEach), x = L(Array.prototype.pop), C = L(Array.prototype.push), S = L(String.prototype.toLowerCase), O = L(String.prototype.toString), E = L(String.prototype.match), A = L(String.prototype.replace), j = L(String.prototype.indexOf), k = L(String.prototype.trim), T = L(RegExp.prototype.test), I = N(TypeError);
            function M(e4) {
              return "number" == typeof e4 && isNaN(e4);
            }
            function L(e4) {
              return function(t3) {
                for (var n3 = arguments.length, r3 = new Array(n3 > 1 ? n3 - 1 : 0), o2 = 1; o2 < n3; o2++) r3[o2 - 1] = arguments[o2];
                return b(e4, t3, r3);
              };
            }
            function N(e4) {
              return function() {
                for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++) n3[r3] = arguments[r3];
                return _(e4, n3);
              };
            }
            function F(e4, t3, n3) {
              var r3;
              n3 = null !== (r3 = n3) && void 0 !== r3 ? r3 : S, f && f(e4, null);
              for (var o2 = t3.length; o2--; ) {
                var i2 = t3[o2];
                if ("string" == typeof i2) {
                  var s2 = n3(i2);
                  s2 !== i2 && (p(t3) || (t3[o2] = s2), i2 = s2);
                }
                e4[i2] = true;
              }
              return e4;
            }
            function R(e4) {
              var t3, n3 = y(null);
              for (t3 in e4) true === b(u, e4, [t3]) && (n3[t3] = e4[t3]);
              return n3;
            }
            function P(e4, t3) {
              for (; null !== e4; ) {
                var n3 = d(e4, t3);
                if (n3) {
                  if (n3.get) return L(n3.get);
                  if ("function" == typeof n3.value) return L(n3.value);
                }
                e4 = h(e4);
              }
              function r3(e5) {
                return console.warn("fallback value for", e5), null;
              }
              return r3;
            }
            var D = m(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), U = m(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), $ = m(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), z = m(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), H = m(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]), B = m(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), q = m(["#text"]), W = m(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), G = m(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), J = m(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Z = m(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), V = g(/\{\{[\w\W]*|[\w\W]*\}\}/gm), K = g(/<%[\w\W]*|[\w\W]*%>/gm), Y = g(/\${[\w\W]*}/gm), Q = g(/^data-[\-\w.\u00B7-\uFFFF]/), X = g(/^aria-[\-\w]+$/), ee = g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), te = g(/^(?:\w+script|data):/i), ne = g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), re = g(/^html$/i), oe = g(/^[a-z][.\w]*(-[.\w]+)+$/i), ie = function() {
              return "undefined" == typeof window ? null : window;
            }, se = function(t3, n3) {
              if ("object" !== e3(t3) || "function" != typeof t3.createPolicy) return null;
              var r3 = null, o2 = "data-tt-policy-suffix";
              n3.currentScript && n3.currentScript.hasAttribute(o2) && (r3 = n3.currentScript.getAttribute(o2));
              var i2 = "dompurify" + (r3 ? "#" + r3 : "");
              try {
                return t3.createPolicy(i2, { createHTML: function(e4) {
                  return e4;
                }, createScriptURL: function(e4) {
                  return e4;
                } });
              } catch (e4) {
                return console.warn("TrustedTypes policy " + i2 + " could not be created."), null;
              }
            };
            function ae() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie(), n3 = function(e4) {
                return ae(e4);
              };
              if (n3.version = "2.5.4", n3.removed = [], !t3 || !t3.document || 9 !== t3.document.nodeType) return n3.isSupported = false, n3;
              var r3 = t3.document, i2 = t3.document, s2 = t3.DocumentFragment, a2 = t3.HTMLTemplateElement, c2 = t3.Node, l2 = t3.Element, u2 = t3.NodeFilter, f2 = t3.NamedNodeMap, p2 = void 0 === f2 ? t3.NamedNodeMap || t3.MozNamedAttrMap : f2, h2 = t3.HTMLFormElement, d2 = t3.DOMParser, g2 = t3.trustedTypes, y2 = l2.prototype, v2 = P(y2, "cloneNode"), b2 = P(y2, "nextSibling"), _2 = P(y2, "childNodes"), L2 = P(y2, "parentNode");
              if ("function" == typeof a2) {
                var N2 = i2.createElement("template");
                N2.content && N2.content.ownerDocument && (i2 = N2.content.ownerDocument);
              }
              var ce = se(g2, r3), le = ce ? ce.createHTML("") : "", ue = i2, fe = ue.implementation, pe = ue.createNodeIterator, he = ue.createDocumentFragment, de = ue.getElementsByTagName, me = r3.importNode, ge = {};
              try {
                ge = R(i2).documentMode ? i2.documentMode : {};
              } catch (e4) {
              }
              var ye = {};
              n3.isSupported = "function" == typeof L2 && fe && void 0 !== fe.createHTMLDocument && 9 !== ge;
              var ve, be, _e = V, we = K, xe = Y, Ce = Q, Se = X, Oe = te, Ee = ne, Ae = oe, je = ee, ke = null, Te = F({}, [].concat(o(D), o(U), o($), o(H), o(q))), Ie = null, Me = F({}, [].concat(o(W), o(G), o(J), o(Z))), Le = Object.seal(Object.create(null, { tagNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, attributeNameCheck: { writable: true, configurable: false, enumerable: true, value: null }, allowCustomizedBuiltInElements: { writable: true, configurable: false, enumerable: true, value: false } })), Ne = null, Fe = null, Re = true, Pe = true, De = false, Ue = true, $e = false, ze = true, He = false, Be = false, qe = false, We = false, Ge = false, Je = false, Ze = true, Ve = false, Ke = "user-content-", Ye = true, Qe = false, Xe = {}, et = null, tt = F({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), nt = null, rt = F({}, ["audio", "video", "img", "source", "image", "track"]), ot = null, it = F({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), st = "http://www.w3.org/1998/Math/MathML", at = "http://www.w3.org/2000/svg", ct = "http://www.w3.org/1999/xhtml", lt = ct, ut = false, ft = null, pt = F({}, [st, at, ct], O), ht = ["application/xhtml+xml", "text/html"], dt = "text/html", mt = null, gt = 255, yt = i2.createElement("form"), vt = function(e4) {
                return e4 instanceof RegExp || e4 instanceof Function;
              }, bt = function(t4) {
                mt && mt === t4 || (t4 && "object" === e3(t4) || (t4 = {}), t4 = R(t4), ve = ve = -1 === ht.indexOf(t4.PARSER_MEDIA_TYPE) ? dt : t4.PARSER_MEDIA_TYPE, be = "application/xhtml+xml" === ve ? O : S, ke = "ALLOWED_TAGS" in t4 ? F({}, t4.ALLOWED_TAGS, be) : Te, Ie = "ALLOWED_ATTR" in t4 ? F({}, t4.ALLOWED_ATTR, be) : Me, ft = "ALLOWED_NAMESPACES" in t4 ? F({}, t4.ALLOWED_NAMESPACES, O) : pt, ot = "ADD_URI_SAFE_ATTR" in t4 ? F(R(it), t4.ADD_URI_SAFE_ATTR, be) : it, nt = "ADD_DATA_URI_TAGS" in t4 ? F(R(rt), t4.ADD_DATA_URI_TAGS, be) : rt, et = "FORBID_CONTENTS" in t4 ? F({}, t4.FORBID_CONTENTS, be) : tt, Ne = "FORBID_TAGS" in t4 ? F({}, t4.FORBID_TAGS, be) : {}, Fe = "FORBID_ATTR" in t4 ? F({}, t4.FORBID_ATTR, be) : {}, Xe = "USE_PROFILES" in t4 && t4.USE_PROFILES, Re = false !== t4.ALLOW_ARIA_ATTR, Pe = false !== t4.ALLOW_DATA_ATTR, De = t4.ALLOW_UNKNOWN_PROTOCOLS || false, Ue = false !== t4.ALLOW_SELF_CLOSE_IN_ATTR, $e = t4.SAFE_FOR_TEMPLATES || false, ze = false !== t4.SAFE_FOR_XML, He = t4.WHOLE_DOCUMENT || false, We = t4.RETURN_DOM || false, Ge = t4.RETURN_DOM_FRAGMENT || false, Je = t4.RETURN_TRUSTED_TYPE || false, qe = t4.FORCE_BODY || false, Ze = false !== t4.SANITIZE_DOM, Ve = t4.SANITIZE_NAMED_PROPS || false, Ye = false !== t4.KEEP_CONTENT, Qe = t4.IN_PLACE || false, je = t4.ALLOWED_URI_REGEXP || je, lt = t4.NAMESPACE || ct, Le = t4.CUSTOM_ELEMENT_HANDLING || {}, t4.CUSTOM_ELEMENT_HANDLING && vt(t4.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Le.tagNameCheck = t4.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t4.CUSTOM_ELEMENT_HANDLING && vt(t4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Le.attributeNameCheck = t4.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t4.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Le.allowCustomizedBuiltInElements = t4.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), $e && (Pe = false), Ge && (We = true), Xe && (ke = F({}, o(q)), Ie = [], true === Xe.html && (F(ke, D), F(Ie, W)), true === Xe.svg && (F(ke, U), F(Ie, G), F(Ie, Z)), true === Xe.svgFilters && (F(ke, $), F(Ie, G), F(Ie, Z)), true === Xe.mathMl && (F(ke, H), F(Ie, J), F(Ie, Z))), t4.ADD_TAGS && (ke === Te && (ke = R(ke)), F(ke, t4.ADD_TAGS, be)), t4.ADD_ATTR && (Ie === Me && (Ie = R(Ie)), F(Ie, t4.ADD_ATTR, be)), t4.ADD_URI_SAFE_ATTR && F(ot, t4.ADD_URI_SAFE_ATTR, be), t4.FORBID_CONTENTS && (et === tt && (et = R(et)), F(et, t4.FORBID_CONTENTS, be)), Ye && (ke["#text"] = true), He && F(ke, ["html", "head", "body"]), ke.table && (F(ke, ["tbody"]), delete Ne.tbody), m && m(t4), mt = t4);
              }, _t = F({}, ["mi", "mo", "mn", "ms", "mtext"]), wt = F({}, ["foreignobject", "annotation-xml"]), xt = F({}, ["title", "style", "font", "a", "script"]), Ct = F({}, U);
              F(Ct, $), F(Ct, z);
              var St = F({}, H);
              F(St, B);
              var Ot = function(e4) {
                var t4 = L2(e4);
                t4 && t4.tagName || (t4 = { namespaceURI: lt, tagName: "template" });
                var n4 = S(e4.tagName), r4 = S(t4.tagName);
                return !!ft[e4.namespaceURI] && (e4.namespaceURI === at ? t4.namespaceURI === ct ? "svg" === n4 : t4.namespaceURI === st ? "svg" === n4 && ("annotation-xml" === r4 || _t[r4]) : Boolean(Ct[n4]) : e4.namespaceURI === st ? t4.namespaceURI === ct ? "math" === n4 : t4.namespaceURI === at ? "math" === n4 && wt[r4] : Boolean(St[n4]) : e4.namespaceURI === ct ? !(t4.namespaceURI === at && !wt[r4]) && !(t4.namespaceURI === st && !_t[r4]) && !St[n4] && (xt[n4] || !Ct[n4]) : !("application/xhtml+xml" !== ve || !ft[e4.namespaceURI]));
              }, Et = function(e4) {
                C(n3.removed, { element: e4 });
                try {
                  e4.parentNode.removeChild(e4);
                } catch (t4) {
                  try {
                    e4.outerHTML = le;
                  } catch (t5) {
                    e4.remove();
                  }
                }
              }, At = function(e4, t4) {
                try {
                  C(n3.removed, { attribute: t4.getAttributeNode(e4), from: t4 });
                } catch (e5) {
                  C(n3.removed, { attribute: null, from: t4 });
                }
                if (t4.removeAttribute(e4), "is" === e4 && !Ie[e4]) if (We || Ge) try {
                  Et(t4);
                } catch (e5) {
                }
                else try {
                  t4.setAttribute(e4, "");
                } catch (e5) {
                }
              }, jt = function(e4) {
                var t4, n4;
                if (qe) e4 = "<remove></remove>" + e4;
                else {
                  var r4 = E(e4, /^[\r\n\t ]+/);
                  n4 = r4 && r4[0];
                }
                "application/xhtml+xml" === ve && lt === ct && (e4 = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e4 + "</body></html>");
                var o2 = ce ? ce.createHTML(e4) : e4;
                if (lt === ct) try {
                  t4 = new d2().parseFromString(o2, ve);
                } catch (e5) {
                }
                if (!t4 || !t4.documentElement) {
                  t4 = fe.createDocument(lt, "template", null);
                  try {
                    t4.documentElement.innerHTML = ut ? le : o2;
                  } catch (e5) {
                  }
                }
                var s3 = t4.body || t4.documentElement;
                return e4 && n4 && s3.insertBefore(i2.createTextNode(n4), s3.childNodes[0] || null), lt === ct ? de.call(t4, He ? "html" : "body")[0] : He ? t4.documentElement : s3;
              }, kt = function(e4) {
                return pe.call(e4.ownerDocument || e4, e4, u2.SHOW_ELEMENT | u2.SHOW_COMMENT | u2.SHOW_TEXT | u2.SHOW_PROCESSING_INSTRUCTION | u2.SHOW_CDATA_SECTION, null, false);
              }, Tt = function(e4) {
                return e4 instanceof h2 && (void 0 !== e4.__depth && "number" != typeof e4.__depth || void 0 !== e4.__removalCount && "number" != typeof e4.__removalCount || "string" != typeof e4.nodeName || "string" != typeof e4.textContent || "function" != typeof e4.removeChild || !(e4.attributes instanceof p2) || "function" != typeof e4.removeAttribute || "function" != typeof e4.setAttribute || "string" != typeof e4.namespaceURI || "function" != typeof e4.insertBefore || "function" != typeof e4.hasChildNodes);
              }, It = function(t4) {
                return "object" === e3(c2) ? t4 instanceof c2 : t4 && "object" === e3(t4) && "number" == typeof t4.nodeType && "string" == typeof t4.nodeName;
              }, Mt = function(e4, t4, r4) {
                ye[e4] && w(ye[e4], (function(e5) {
                  e5.call(n3, t4, r4, mt);
                }));
              }, Lt = function(e4) {
                var t4;
                if (Mt("beforeSanitizeElements", e4, null), Tt(e4)) return Et(e4), true;
                if (T(/[\u0080-\uFFFF]/, e4.nodeName)) return Et(e4), true;
                var r4 = be(e4.nodeName);
                if (Mt("uponSanitizeElement", e4, { tagName: r4, allowedTags: ke }), e4.hasChildNodes() && !It(e4.firstElementChild) && (!It(e4.content) || !It(e4.content.firstElementChild)) && T(/<[/\w]/g, e4.innerHTML) && T(/<[/\w]/g, e4.textContent)) return Et(e4), true;
                if ("select" === r4 && T(/<template/i, e4.innerHTML)) return Et(e4), true;
                if (7 === e4.nodeType) return Et(e4), true;
                if (ze && 8 === e4.nodeType && T(/<[/\w]/g, e4.data)) return Et(e4), true;
                if (!ke[r4] || Ne[r4]) {
                  if (!Ne[r4] && Ft(r4)) {
                    if (Le.tagNameCheck instanceof RegExp && T(Le.tagNameCheck, r4)) return false;
                    if (Le.tagNameCheck instanceof Function && Le.tagNameCheck(r4)) return false;
                  }
                  if (Ye && !et[r4]) {
                    var o2 = L2(e4) || e4.parentNode, i3 = _2(e4) || e4.childNodes;
                    if (i3 && o2) for (var s3 = i3.length - 1; s3 >= 0; --s3) {
                      var a3 = v2(i3[s3], true);
                      a3.__removalCount = (e4.__removalCount || 0) + 1, o2.insertBefore(a3, b2(e4));
                    }
                  }
                  return Et(e4), true;
                }
                return e4 instanceof l2 && !Ot(e4) ? (Et(e4), true) : "noscript" !== r4 && "noembed" !== r4 && "noframes" !== r4 || !T(/<\/no(script|embed|frames)/i, e4.innerHTML) ? ($e && 3 === e4.nodeType && (t4 = e4.textContent, t4 = A(t4, _e, " "), t4 = A(t4, we, " "), t4 = A(t4, xe, " "), e4.textContent !== t4 && (C(n3.removed, { element: e4.cloneNode() }), e4.textContent = t4)), Mt("afterSanitizeElements", e4, null), false) : (Et(e4), true);
              }, Nt = function(e4, t4, n4) {
                if (Ze && ("id" === t4 || "name" === t4) && (n4 in i2 || n4 in yt || "__depth" === n4 || "__removalCount" === n4)) return false;
                if (Pe && !Fe[t4] && T(Ce, t4)) ;
                else if (Re && T(Se, t4)) ;
                else if (!Ie[t4] || Fe[t4]) {
                  if (!(Ft(e4) && (Le.tagNameCheck instanceof RegExp && T(Le.tagNameCheck, e4) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(e4)) && (Le.attributeNameCheck instanceof RegExp && T(Le.attributeNameCheck, t4) || Le.attributeNameCheck instanceof Function && Le.attributeNameCheck(t4)) || "is" === t4 && Le.allowCustomizedBuiltInElements && (Le.tagNameCheck instanceof RegExp && T(Le.tagNameCheck, n4) || Le.tagNameCheck instanceof Function && Le.tagNameCheck(n4)))) return false;
                } else if (ot[t4]) ;
                else if (T(je, A(n4, Ee, ""))) ;
                else if ("src" !== t4 && "xlink:href" !== t4 && "href" !== t4 || "script" === e4 || 0 !== j(n4, "data:") || !nt[e4]) {
                  if (De && !T(Oe, A(n4, Ee, ""))) ;
                  else if (n4) return false;
                }
                return true;
              }, Ft = function(e4) {
                return "annotation-xml" !== e4 && E(e4, Ae);
              }, Rt = function(t4) {
                var r4, o2, i3, s3;
                Mt("beforeSanitizeAttributes", t4, null);
                var a3 = t4.attributes;
                if (a3) {
                  var c3 = { attrName: "", attrValue: "", keepAttr: true, allowedAttributes: Ie };
                  for (s3 = a3.length; s3--; ) {
                    var l3 = r4 = a3[s3], u3 = l3.name, f3 = l3.namespaceURI;
                    if (o2 = "value" === u3 ? r4.value : k(r4.value), i3 = be(u3), c3.attrName = i3, c3.attrValue = o2, c3.keepAttr = true, c3.forceKeepAttr = void 0, Mt("uponSanitizeAttribute", t4, c3), o2 = c3.attrValue, !c3.forceKeepAttr && (At(u3, t4), c3.keepAttr)) if (Ue || !T(/\/>/i, o2)) if (ze && T(/((--!?|])>)|<\/(style|title)/i, o2)) At(u3, t4);
                    else {
                      $e && (o2 = A(o2, _e, " "), o2 = A(o2, we, " "), o2 = A(o2, xe, " "));
                      var p3 = be(t4.nodeName);
                      if (Nt(p3, i3, o2)) {
                        if (!Ve || "id" !== i3 && "name" !== i3 || (At(u3, t4), o2 = Ke + o2), ce && "object" === e3(g2) && "function" == typeof g2.getAttributeType) if (f3) ;
                        else switch (g2.getAttributeType(p3, i3)) {
                          case "TrustedHTML":
                            o2 = ce.createHTML(o2);
                            break;
                          case "TrustedScriptURL":
                            o2 = ce.createScriptURL(o2);
                        }
                        try {
                          f3 ? t4.setAttributeNS(f3, u3, o2) : t4.setAttribute(u3, o2), Tt(t4) ? Et(t4) : x(n3.removed);
                        } catch (e4) {
                        }
                      }
                    }
                    else At(u3, t4);
                  }
                  Mt("afterSanitizeAttributes", t4, null);
                }
              }, Pt = function e4(t4) {
                var n4, r4 = kt(t4);
                for (Mt("beforeSanitizeShadowDOM", t4, null); n4 = r4.nextNode(); ) if (Mt("uponSanitizeShadowNode", n4, null), !Lt(n4)) {
                  var o2 = L2(n4);
                  1 === n4.nodeType && (o2 && o2.__depth ? n4.__depth = (n4.__removalCount || 0) + o2.__depth + 1 : n4.__depth = 1), (n4.__depth >= gt || M(n4.__depth)) && Et(n4), n4.content instanceof s2 && (n4.content.__depth = n4.__depth, e4(n4.content)), Rt(n4);
                }
                Mt("afterSanitizeShadowDOM", t4, null);
              };
              return n3.sanitize = function(o2) {
                var i3, a3, l3, u3, f3, p3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ((ut = !o2) && (o2 = "<!-->"), "string" != typeof o2 && !It(o2)) {
                  if ("function" != typeof o2.toString) throw I("toString is not a function");
                  if ("string" != typeof (o2 = o2.toString())) throw I("dirty is not a string, aborting");
                }
                if (!n3.isSupported) {
                  if ("object" === e3(t3.toStaticHTML) || "function" == typeof t3.toStaticHTML) {
                    if ("string" == typeof o2) return t3.toStaticHTML(o2);
                    if (It(o2)) return t3.toStaticHTML(o2.outerHTML);
                  }
                  return o2;
                }
                if (Be || bt(p3), n3.removed = [], "string" == typeof o2 && (Qe = false), Qe) {
                  if (o2.nodeName) {
                    var h3 = be(o2.nodeName);
                    if (!ke[h3] || Ne[h3]) throw I("root node is forbidden and cannot be sanitized in-place");
                  }
                } else if (o2 instanceof c2) 1 === (a3 = (i3 = jt("<!---->")).ownerDocument.importNode(o2, true)).nodeType && "BODY" === a3.nodeName || "HTML" === a3.nodeName ? i3 = a3 : i3.appendChild(a3);
                else {
                  if (!We && !$e && !He && -1 === o2.indexOf("<")) return ce && Je ? ce.createHTML(o2) : o2;
                  if (!(i3 = jt(o2))) return We ? null : Je ? le : "";
                }
                i3 && qe && Et(i3.firstChild);
                for (var d3 = kt(Qe ? o2 : i3); l3 = d3.nextNode(); ) if ((3 !== l3.nodeType || l3 !== u3) && !Lt(l3)) {
                  var m2 = L2(l3);
                  1 === l3.nodeType && (m2 && m2.__depth ? l3.__depth = (l3.__removalCount || 0) + m2.__depth + 1 : l3.__depth = 1), (l3.__depth >= gt || M(l3.__depth)) && Et(l3), l3.content instanceof s2 && (l3.content.__depth = l3.__depth, Pt(l3.content)), Rt(l3), u3 = l3;
                }
                if (u3 = null, Qe) return o2;
                if (We) {
                  if (Ge) for (f3 = he.call(i3.ownerDocument); i3.firstChild; ) f3.appendChild(i3.firstChild);
                  else f3 = i3;
                  return (Ie.shadowroot || Ie.shadowrootmod) && (f3 = me.call(r3, f3, true)), f3;
                }
                var g3 = He ? i3.outerHTML : i3.innerHTML;
                return He && ke["!doctype"] && i3.ownerDocument && i3.ownerDocument.doctype && i3.ownerDocument.doctype.name && T(re, i3.ownerDocument.doctype.name) && (g3 = "<!DOCTYPE " + i3.ownerDocument.doctype.name + ">\n" + g3), $e && (g3 = A(g3, _e, " "), g3 = A(g3, we, " "), g3 = A(g3, xe, " ")), ce && Je ? ce.createHTML(g3) : g3;
              }, n3.setConfig = function(e4) {
                bt(e4), Be = true;
              }, n3.clearConfig = function() {
                mt = null, Be = false;
              }, n3.isValidAttribute = function(e4, t4, n4) {
                mt || bt({});
                var r4 = be(e4), o2 = be(t4);
                return Nt(r4, o2, n4);
              }, n3.addHook = function(e4, t4) {
                "function" == typeof t4 && (ye[e4] = ye[e4] || [], C(ye[e4], t4));
              }, n3.removeHook = function(e4) {
                if (ye[e4]) return x(ye[e4]);
              }, n3.removeHooks = function(e4) {
                ye[e4] && (ye[e4] = []);
              }, n3.removeAllHooks = function() {
                ye = {};
              }, n3;
            }
            return ae();
          })();
        }, 729: (e2) => {
          "use strict";
          var t2 = Object.prototype.hasOwnProperty, n2 = "~";
          function r2() {
          }
          function o(e3, t3, n3) {
            this.fn = e3, this.context = t3, this.once = n3 || false;
          }
          function i(e3, t3, r3, i2, s2) {
            if ("function" != typeof r3) throw new TypeError("The listener must be a function");
            var a2 = new o(r3, i2 || e3, s2), c = n2 ? n2 + t3 : t3;
            return e3._events[c] ? e3._events[c].fn ? e3._events[c] = [e3._events[c], a2] : e3._events[c].push(a2) : (e3._events[c] = a2, e3._eventsCount++), e3;
          }
          function s(e3, t3) {
            0 == --e3._eventsCount ? e3._events = new r2() : delete e3._events[t3];
          }
          function a() {
            this._events = new r2(), this._eventsCount = 0;
          }
          Object.create && (r2.prototype = /* @__PURE__ */ Object.create(null), new r2().__proto__ || (n2 = false)), a.prototype.eventNames = function() {
            var e3, r3, o2 = [];
            if (0 === this._eventsCount) return o2;
            for (r3 in e3 = this._events) t2.call(e3, r3) && o2.push(n2 ? r3.slice(1) : r3);
            return Object.getOwnPropertySymbols ? o2.concat(Object.getOwnPropertySymbols(e3)) : o2;
          }, a.prototype.listeners = function(e3) {
            var t3 = n2 ? n2 + e3 : e3, r3 = this._events[t3];
            if (!r3) return [];
            if (r3.fn) return [r3.fn];
            for (var o2 = 0, i2 = r3.length, s2 = new Array(i2); o2 < i2; o2++) s2[o2] = r3[o2].fn;
            return s2;
          }, a.prototype.listenerCount = function(e3) {
            var t3 = n2 ? n2 + e3 : e3, r3 = this._events[t3];
            return r3 ? r3.fn ? 1 : r3.length : 0;
          }, a.prototype.emit = function(e3, t3, r3, o2, i2, s2) {
            var a2 = n2 ? n2 + e3 : e3;
            if (!this._events[a2]) return false;
            var c, l, u = this._events[a2], f = arguments.length;
            if (u.fn) {
              switch (u.once && this.removeListener(e3, u.fn, void 0, true), f) {
                case 1:
                  return u.fn.call(u.context), true;
                case 2:
                  return u.fn.call(u.context, t3), true;
                case 3:
                  return u.fn.call(u.context, t3, r3), true;
                case 4:
                  return u.fn.call(u.context, t3, r3, o2), true;
                case 5:
                  return u.fn.call(u.context, t3, r3, o2, i2), true;
                case 6:
                  return u.fn.call(u.context, t3, r3, o2, i2, s2), true;
              }
              for (l = 1, c = new Array(f - 1); l < f; l++) c[l - 1] = arguments[l];
              u.fn.apply(u.context, c);
            } else {
              var p, h = u.length;
              for (l = 0; l < h; l++) switch (u[l].once && this.removeListener(e3, u[l].fn, void 0, true), f) {
                case 1:
                  u[l].fn.call(u[l].context);
                  break;
                case 2:
                  u[l].fn.call(u[l].context, t3);
                  break;
                case 3:
                  u[l].fn.call(u[l].context, t3, r3);
                  break;
                case 4:
                  u[l].fn.call(u[l].context, t3, r3, o2);
                  break;
                default:
                  if (!c) for (p = 1, c = new Array(f - 1); p < f; p++) c[p - 1] = arguments[p];
                  u[l].fn.apply(u[l].context, c);
              }
            }
            return true;
          }, a.prototype.on = function(e3, t3, n3) {
            return i(this, e3, t3, n3, false);
          }, a.prototype.once = function(e3, t3, n3) {
            return i(this, e3, t3, n3, true);
          }, a.prototype.removeListener = function(e3, t3, r3, o2) {
            var i2 = n2 ? n2 + e3 : e3;
            if (!this._events[i2]) return this;
            if (!t3) return s(this, i2), this;
            var a2 = this._events[i2];
            if (a2.fn) a2.fn !== t3 || o2 && !a2.once || r3 && a2.context !== r3 || s(this, i2);
            else {
              for (var c = 0, l = [], u = a2.length; c < u; c++) (a2[c].fn !== t3 || o2 && !a2[c].once || r3 && a2[c].context !== r3) && l.push(a2[c]);
              l.length ? this._events[i2] = 1 === l.length ? l[0] : l : s(this, i2);
            }
            return this;
          }, a.prototype.removeAllListeners = function(e3) {
            var t3;
            return e3 ? (t3 = n2 ? n2 + e3 : e3, this._events[t3] && s(this, t3)) : (this._events = new r2(), this._eventsCount = 0), this;
          }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = n2, a.EventEmitter = a, e2.exports = a;
        }, 717: (e2) => {
          "function" == typeof Object.create ? e2.exports = function(e3, t2) {
            e3.super_ = t2, e3.prototype = Object.create(t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } });
          } : e2.exports = function(e3, t2) {
            e3.super_ = t2;
            var n2 = function() {
            };
            n2.prototype = t2.prototype, e3.prototype = new n2(), e3.prototype.constructor = e3;
          };
        }, 824: (e2) => {
          var t2 = 1e3, n2 = 60 * t2, r2 = 60 * n2, o = 24 * r2, i = 7 * o, s = 365.25 * o;
          function a(e3, t3, n3, r3) {
            var o2 = t3 >= 1.5 * n3;
            return Math.round(e3 / n3) + " " + r3 + (o2 ? "s" : "");
          }
          e2.exports = function(e3, c) {
            c = c || {};
            var l = typeof e3;
            if ("string" === l && e3.length > 0) return (function(e4) {
              if ((e4 = String(e4)).length > 100) return;
              var a2 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e4);
              if (!a2) return;
              var c2 = parseFloat(a2[1]);
              switch ((a2[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return c2 * s;
                case "weeks":
                case "week":
                case "w":
                  return c2 * i;
                case "days":
                case "day":
                case "d":
                  return c2 * o;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return c2 * r2;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return c2 * n2;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return c2 * t2;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return c2;
                default:
                  return;
              }
            })(e3);
            if ("number" === l && isFinite(e3)) return c.long ? (function(e4) {
              var i2 = Math.abs(e4);
              if (i2 >= o) return a(e4, i2, o, "day");
              if (i2 >= r2) return a(e4, i2, r2, "hour");
              if (i2 >= n2) return a(e4, i2, n2, "minute");
              if (i2 >= t2) return a(e4, i2, t2, "second");
              return e4 + " ms";
            })(e3) : (function(e4) {
              var i2 = Math.abs(e4);
              if (i2 >= o) return Math.round(e4 / o) + "d";
              if (i2 >= r2) return Math.round(e4 / r2) + "h";
              if (i2 >= n2) return Math.round(e4 / n2) + "m";
              if (i2 >= t2) return Math.round(e4 / t2) + "s";
              return e4 + "ms";
            })(e3);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e3));
          };
        }, 520: (e2, t2, n2) => {
          "use strict";
          var r2 = n2(155), o = "win32" === r2.platform, i = n2(539);
          function s(e3, t3) {
            for (var n3 = [], r3 = 0; r3 < e3.length; r3++) {
              var o2 = e3[r3];
              o2 && "." !== o2 && (".." === o2 ? n3.length && ".." !== n3[n3.length - 1] ? n3.pop() : t3 && n3.push("..") : n3.push(o2));
            }
            return n3;
          }
          function a(e3) {
            for (var t3 = e3.length - 1, n3 = 0; n3 <= t3 && !e3[n3]; n3++) ;
            for (var r3 = t3; r3 >= 0 && !e3[r3]; r3--) ;
            return 0 === n3 && r3 === t3 ? e3 : n3 > r3 ? [] : e3.slice(n3, r3 + 1);
          }
          var c = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/, l = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/, u = {};
          function f(e3) {
            var t3 = c.exec(e3), n3 = (t3[1] || "") + (t3[2] || ""), r3 = t3[3] || "", o2 = l.exec(r3);
            return [n3, o2[1], o2[2], o2[3]];
          }
          function p(e3) {
            var t3 = c.exec(e3), n3 = t3[1] || "", r3 = !!n3 && ":" !== n3[1];
            return { device: n3, isUnc: r3, isAbsolute: r3 || !!t3[2], tail: t3[3] };
          }
          function h(e3) {
            return "\\\\" + e3.replace(/^[\\\/]+/, "").replace(/[\\\/]+/g, "\\");
          }
          u.resolve = function() {
            for (var e3 = "", t3 = "", n3 = false, o2 = arguments.length - 1; o2 >= -1; o2--) {
              var a2;
              if (o2 >= 0 ? a2 = arguments[o2] : e3 ? (a2 = r2.env["=" + e3]) && a2.substr(0, 3).toLowerCase() === e3.toLowerCase() + "\\" || (a2 = e3 + "\\") : a2 = r2.cwd(), !i.isString(a2)) throw new TypeError("Arguments to path.resolve must be strings");
              if (a2) {
                var c2 = p(a2), l2 = c2.device, u2 = c2.isUnc, f2 = c2.isAbsolute, d2 = c2.tail;
                if ((!l2 || !e3 || l2.toLowerCase() === e3.toLowerCase()) && (e3 || (e3 = l2), n3 || (t3 = d2 + "\\" + t3, n3 = f2), e3 && n3)) break;
              }
            }
            return u2 && (e3 = h(e3)), e3 + (n3 ? "\\" : "") + (t3 = s(t3.split(/[\\\/]+/), !n3).join("\\")) || ".";
          }, u.normalize = function(e3) {
            var t3 = p(e3), n3 = t3.device, r3 = t3.isUnc, o2 = t3.isAbsolute, i2 = t3.tail, a2 = /[\\\/]$/.test(i2);
            return (i2 = s(i2.split(/[\\\/]+/), !o2).join("\\")) || o2 || (i2 = "."), i2 && a2 && (i2 += "\\"), r3 && (n3 = h(n3)), n3 + (o2 ? "\\" : "") + i2;
          }, u.isAbsolute = function(e3) {
            return p(e3).isAbsolute;
          }, u.join = function() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              if (!i.isString(n3)) throw new TypeError("Arguments to path.join must be strings");
              n3 && e3.push(n3);
            }
            var r3 = e3.join("\\");
            return /^[\\\/]{2}[^\\\/]/.test(e3[0]) || (r3 = r3.replace(/^[\\\/]{2,}/, "\\")), u.normalize(r3);
          }, u.relative = function(e3, t3) {
            e3 = u.resolve(e3), t3 = u.resolve(t3);
            for (var n3 = e3.toLowerCase(), r3 = t3.toLowerCase(), o2 = a(t3.split("\\")), i2 = a(n3.split("\\")), s2 = a(r3.split("\\")), c2 = Math.min(i2.length, s2.length), l2 = c2, f2 = 0; f2 < c2; f2++) if (i2[f2] !== s2[f2]) {
              l2 = f2;
              break;
            }
            if (0 == l2) return t3;
            var p2 = [];
            for (f2 = l2; f2 < i2.length; f2++) p2.push("..");
            return (p2 = p2.concat(o2.slice(l2))).join("\\");
          }, u._makeLong = function(e3) {
            if (!i.isString(e3)) return e3;
            if (!e3) return "";
            var t3 = u.resolve(e3);
            return /^[a-zA-Z]\:\\/.test(t3) ? "\\\\?\\" + t3 : /^\\\\[^?.]/.test(t3) ? "\\\\?\\UNC\\" + t3.substring(2) : e3;
          }, u.dirname = function(e3) {
            var t3 = f(e3), n3 = t3[0], r3 = t3[1];
            return n3 || r3 ? (r3 && (r3 = r3.substr(0, r3.length - 1)), n3 + r3) : ".";
          }, u.basename = function(e3, t3) {
            var n3 = f(e3)[2];
            return t3 && n3.substr(-1 * t3.length) === t3 && (n3 = n3.substr(0, n3.length - t3.length)), n3;
          }, u.extname = function(e3) {
            return f(e3)[3];
          }, u.format = function(e3) {
            if (!i.isObject(e3)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e3);
            var t3 = e3.root || "";
            if (!i.isString(t3)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e3.root);
            var n3 = e3.dir, r3 = e3.base || "";
            return n3 ? n3[n3.length - 1] === u.sep ? n3 + r3 : n3 + u.sep + r3 : r3;
          }, u.parse = function(e3) {
            if (!i.isString(e3)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e3);
            var t3 = f(e3);
            if (!t3 || 4 !== t3.length) throw new TypeError("Invalid path '" + e3 + "'");
            return { root: t3[0], dir: t3[0] + t3[1].slice(0, -1), base: t3[2], ext: t3[3], name: t3[2].slice(0, t3[2].length - t3[3].length) };
          }, u.sep = "\\", u.delimiter = ";";
          var d = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, m = {};
          function g(e3) {
            return d.exec(e3).slice(1);
          }
          m.resolve = function() {
            for (var e3 = "", t3 = false, n3 = arguments.length - 1; n3 >= -1 && !t3; n3--) {
              var o2 = n3 >= 0 ? arguments[n3] : r2.cwd();
              if (!i.isString(o2)) throw new TypeError("Arguments to path.resolve must be strings");
              o2 && (e3 = o2 + "/" + e3, t3 = "/" === o2[0]);
            }
            return (t3 ? "/" : "") + (e3 = s(e3.split("/"), !t3).join("/")) || ".";
          }, m.normalize = function(e3) {
            var t3 = m.isAbsolute(e3), n3 = e3 && "/" === e3[e3.length - 1];
            return (e3 = s(e3.split("/"), !t3).join("/")) || t3 || (e3 = "."), e3 && n3 && (e3 += "/"), (t3 ? "/" : "") + e3;
          }, m.isAbsolute = function(e3) {
            return "/" === e3.charAt(0);
          }, m.join = function() {
            for (var e3 = "", t3 = 0; t3 < arguments.length; t3++) {
              var n3 = arguments[t3];
              if (!i.isString(n3)) throw new TypeError("Arguments to path.join must be strings");
              n3 && (e3 += e3 ? "/" + n3 : n3);
            }
            return m.normalize(e3);
          }, m.relative = function(e3, t3) {
            e3 = m.resolve(e3).substr(1), t3 = m.resolve(t3).substr(1);
            for (var n3 = a(e3.split("/")), r3 = a(t3.split("/")), o2 = Math.min(n3.length, r3.length), i2 = o2, s2 = 0; s2 < o2; s2++) if (n3[s2] !== r3[s2]) {
              i2 = s2;
              break;
            }
            var c2 = [];
            for (s2 = i2; s2 < n3.length; s2++) c2.push("..");
            return (c2 = c2.concat(r3.slice(i2))).join("/");
          }, m._makeLong = function(e3) {
            return e3;
          }, m.dirname = function(e3) {
            var t3 = g(e3), n3 = t3[0], r3 = t3[1];
            return n3 || r3 ? (r3 && (r3 = r3.substr(0, r3.length - 1)), n3 + r3) : ".";
          }, m.basename = function(e3, t3) {
            var n3 = g(e3)[2];
            return t3 && n3.substr(-1 * t3.length) === t3 && (n3 = n3.substr(0, n3.length - t3.length)), n3;
          }, m.extname = function(e3) {
            return g(e3)[3];
          }, m.format = function(e3) {
            if (!i.isObject(e3)) throw new TypeError("Parameter 'pathObject' must be an object, not " + typeof e3);
            var t3 = e3.root || "";
            if (!i.isString(t3)) throw new TypeError("'pathObject.root' must be a string or undefined, not " + typeof e3.root);
            return (e3.dir ? e3.dir + m.sep : "") + (e3.base || "");
          }, m.parse = function(e3) {
            if (!i.isString(e3)) throw new TypeError("Parameter 'pathString' must be a string, not " + typeof e3);
            var t3 = g(e3);
            if (!t3 || 4 !== t3.length) throw new TypeError("Invalid path '" + e3 + "'");
            return t3[1] = t3[1] || "", t3[2] = t3[2] || "", t3[3] = t3[3] || "", { root: t3[0], dir: t3[0] + t3[1].slice(0, -1), base: t3[2], ext: t3[3], name: t3[2].slice(0, t3[2].length - t3[3].length) };
          }, m.sep = "/", m.delimiter = ":", e2.exports = o ? u : m, e2.exports.posix = m, e2.exports.win32 = u;
        }, 155: (e2) => {
          var t2, n2, r2 = e2.exports = {};
          function o() {
            throw new Error("setTimeout has not been defined");
          }
          function i() {
            throw new Error("clearTimeout has not been defined");
          }
          function s(e3) {
            if (t2 === setTimeout) return setTimeout(e3, 0);
            if ((t2 === o || !t2) && setTimeout) return t2 = setTimeout, setTimeout(e3, 0);
            try {
              return t2(e3, 0);
            } catch (n3) {
              try {
                return t2.call(null, e3, 0);
              } catch (n4) {
                return t2.call(this, e3, 0);
              }
            }
          }
          !(function() {
            try {
              t2 = "function" == typeof setTimeout ? setTimeout : o;
            } catch (e3) {
              t2 = o;
            }
            try {
              n2 = "function" == typeof clearTimeout ? clearTimeout : i;
            } catch (e3) {
              n2 = i;
            }
          })();
          var a, c = [], l = false, u = -1;
          function f() {
            l && a && (l = false, a.length ? c = a.concat(c) : u = -1, c.length && p());
          }
          function p() {
            if (!l) {
              var e3 = s(f);
              l = true;
              for (var t3 = c.length; t3; ) {
                for (a = c, c = []; ++u < t3; ) a && a[u].run();
                u = -1, t3 = c.length;
              }
              a = null, l = false, (function(e4) {
                if (n2 === clearTimeout) return clearTimeout(e4);
                if ((n2 === i || !n2) && clearTimeout) return n2 = clearTimeout, clearTimeout(e4);
                try {
                  n2(e4);
                } catch (t4) {
                  try {
                    return n2.call(null, e4);
                  } catch (t5) {
                    return n2.call(this, e4);
                  }
                }
              })(e3);
            }
          }
          function h(e3, t3) {
            this.fun = e3, this.array = t3;
          }
          function d() {
          }
          r2.nextTick = function(e3) {
            var t3 = new Array(arguments.length - 1);
            if (arguments.length > 1) for (var n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
            c.push(new h(e3, t3)), 1 !== c.length || l || s(p);
          }, h.prototype.run = function() {
            this.fun.apply(null, this.array);
          }, r2.title = "browser", r2.browser = true, r2.env = {}, r2.argv = [], r2.version = "", r2.versions = {}, r2.on = d, r2.addListener = d, r2.once = d, r2.off = d, r2.removeListener = d, r2.removeAllListeners = d, r2.emit = d, r2.prependListener = d, r2.prependOnceListener = d, r2.listeners = function(e3) {
            return [];
          }, r2.binding = function(e3) {
            throw new Error("process.binding is not supported");
          }, r2.cwd = function() {
            return "/";
          }, r2.chdir = function(e3) {
            throw new Error("process.chdir is not supported");
          }, r2.umask = function() {
            return 0;
          };
        }, 384: (e2) => {
          e2.exports = function(e3) {
            return e3 && "object" == typeof e3 && "function" == typeof e3.copy && "function" == typeof e3.fill && "function" == typeof e3.readUInt8;
          };
        }, 539: (e2, t2, n2) => {
          var r2 = n2(155), o = /%[sdj%]/g;
          t2.format = function(e3) {
            if (!y(e3)) {
              for (var t3 = [], n3 = 0; n3 < arguments.length; n3++) t3.push(a(arguments[n3]));
              return t3.join(" ");
            }
            n3 = 1;
            for (var r3 = arguments, i2 = r3.length, s2 = String(e3).replace(o, (function(e4) {
              if ("%%" === e4) return "%";
              if (n3 >= i2) return e4;
              switch (e4) {
                case "%s":
                  return String(r3[n3++]);
                case "%d":
                  return Number(r3[n3++]);
                case "%j":
                  try {
                    return JSON.stringify(r3[n3++]);
                  } catch (e5) {
                    return "[Circular]";
                  }
                default:
                  return e4;
              }
            })), c2 = r3[n3]; n3 < i2; c2 = r3[++n3]) m(c2) || !_(c2) ? s2 += " " + c2 : s2 += " " + a(c2);
            return s2;
          }, t2.deprecate = function(e3, o2) {
            if (v(n2.g.process)) return function() {
              return t2.deprecate(e3, o2).apply(this, arguments);
            };
            if (true === r2.noDeprecation) return e3;
            var i2 = false;
            return function() {
              if (!i2) {
                if (r2.throwDeprecation) throw new Error(o2);
                r2.traceDeprecation ? console.trace(o2) : console.error(o2), i2 = true;
              }
              return e3.apply(this, arguments);
            };
          };
          var i, s = {};
          function a(e3, n3) {
            var r3 = { seen: [], stylize: l };
            return arguments.length >= 3 && (r3.depth = arguments[2]), arguments.length >= 4 && (r3.colors = arguments[3]), d(n3) ? r3.showHidden = n3 : n3 && t2._extend(r3, n3), v(r3.showHidden) && (r3.showHidden = false), v(r3.depth) && (r3.depth = 2), v(r3.colors) && (r3.colors = false), v(r3.customInspect) && (r3.customInspect = true), r3.colors && (r3.stylize = c), u(r3, e3, r3.depth);
          }
          function c(e3, t3) {
            var n3 = a.styles[t3];
            return n3 ? "\x1B[" + a.colors[n3][0] + "m" + e3 + "\x1B[" + a.colors[n3][1] + "m" : e3;
          }
          function l(e3, t3) {
            return e3;
          }
          function u(e3, n3, r3) {
            if (e3.customInspect && n3 && C(n3.inspect) && n3.inspect !== t2.inspect && (!n3.constructor || n3.constructor.prototype !== n3)) {
              var o2 = n3.inspect(r3, e3);
              return y(o2) || (o2 = u(e3, o2, r3)), o2;
            }
            var i2 = (function(e4, t3) {
              if (v(t3)) return e4.stylize("undefined", "undefined");
              if (y(t3)) {
                var n4 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                return e4.stylize(n4, "string");
              }
              if (g(t3)) return e4.stylize("" + t3, "number");
              if (d(t3)) return e4.stylize("" + t3, "boolean");
              if (m(t3)) return e4.stylize("null", "null");
            })(e3, n3);
            if (i2) return i2;
            var s2 = Object.keys(n3), a2 = (function(e4) {
              var t3 = {};
              return e4.forEach((function(e5, n4) {
                t3[e5] = true;
              })), t3;
            })(s2);
            if (e3.showHidden && (s2 = Object.getOwnPropertyNames(n3)), x(n3) && (s2.indexOf("message") >= 0 || s2.indexOf("description") >= 0)) return f(n3);
            if (0 === s2.length) {
              if (C(n3)) {
                var c2 = n3.name ? ": " + n3.name : "";
                return e3.stylize("[Function" + c2 + "]", "special");
              }
              if (b(n3)) return e3.stylize(RegExp.prototype.toString.call(n3), "regexp");
              if (w(n3)) return e3.stylize(Date.prototype.toString.call(n3), "date");
              if (x(n3)) return f(n3);
            }
            var l2, _2 = "", S2 = false, O2 = ["{", "}"];
            (h(n3) && (S2 = true, O2 = ["[", "]"]), C(n3)) && (_2 = " [Function" + (n3.name ? ": " + n3.name : "") + "]");
            return b(n3) && (_2 = " " + RegExp.prototype.toString.call(n3)), w(n3) && (_2 = " " + Date.prototype.toUTCString.call(n3)), x(n3) && (_2 = " " + f(n3)), 0 !== s2.length || S2 && 0 != n3.length ? r3 < 0 ? b(n3) ? e3.stylize(RegExp.prototype.toString.call(n3), "regexp") : e3.stylize("[Object]", "special") : (e3.seen.push(n3), l2 = S2 ? (function(e4, t3, n4, r4, o3) {
              for (var i3 = [], s3 = 0, a3 = t3.length; s3 < a3; ++s3) j(t3, String(s3)) ? i3.push(p(e4, t3, n4, r4, String(s3), true)) : i3.push("");
              return o3.forEach((function(o4) {
                o4.match(/^\d+$/) || i3.push(p(e4, t3, n4, r4, o4, true));
              })), i3;
            })(e3, n3, r3, a2, s2) : s2.map((function(t3) {
              return p(e3, n3, r3, a2, t3, S2);
            })), e3.seen.pop(), (function(e4, t3, n4) {
              if (e4.reduce((function(e5, t4) {
                return t4.indexOf("\n") >= 0 && 0, e5 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
              }), 0) > 60) return n4[0] + ("" === t3 ? "" : t3 + "\n ") + " " + e4.join(",\n  ") + " " + n4[1];
              return n4[0] + t3 + " " + e4.join(", ") + " " + n4[1];
            })(l2, _2, O2)) : O2[0] + _2 + O2[1];
          }
          function f(e3) {
            return "[" + Error.prototype.toString.call(e3) + "]";
          }
          function p(e3, t3, n3, r3, o2, i2) {
            var s2, a2, c2;
            if ((c2 = Object.getOwnPropertyDescriptor(t3, o2) || { value: t3[o2] }).get ? a2 = c2.set ? e3.stylize("[Getter/Setter]", "special") : e3.stylize("[Getter]", "special") : c2.set && (a2 = e3.stylize("[Setter]", "special")), j(r3, o2) || (s2 = "[" + o2 + "]"), a2 || (e3.seen.indexOf(c2.value) < 0 ? (a2 = m(n3) ? u(e3, c2.value, null) : u(e3, c2.value, n3 - 1)).indexOf("\n") > -1 && (a2 = i2 ? a2.split("\n").map((function(e4) {
              return "  " + e4;
            })).join("\n").substr(2) : "\n" + a2.split("\n").map((function(e4) {
              return "   " + e4;
            })).join("\n")) : a2 = e3.stylize("[Circular]", "special")), v(s2)) {
              if (i2 && o2.match(/^\d+$/)) return a2;
              (s2 = JSON.stringify("" + o2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s2 = s2.substr(1, s2.length - 2), s2 = e3.stylize(s2, "name")) : (s2 = s2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s2 = e3.stylize(s2, "string"));
            }
            return s2 + ": " + a2;
          }
          function h(e3) {
            return Array.isArray(e3);
          }
          function d(e3) {
            return "boolean" == typeof e3;
          }
          function m(e3) {
            return null === e3;
          }
          function g(e3) {
            return "number" == typeof e3;
          }
          function y(e3) {
            return "string" == typeof e3;
          }
          function v(e3) {
            return void 0 === e3;
          }
          function b(e3) {
            return _(e3) && "[object RegExp]" === S(e3);
          }
          function _(e3) {
            return "object" == typeof e3 && null !== e3;
          }
          function w(e3) {
            return _(e3) && "[object Date]" === S(e3);
          }
          function x(e3) {
            return _(e3) && ("[object Error]" === S(e3) || e3 instanceof Error);
          }
          function C(e3) {
            return "function" == typeof e3;
          }
          function S(e3) {
            return Object.prototype.toString.call(e3);
          }
          function O(e3) {
            return e3 < 10 ? "0" + e3.toString(10) : e3.toString(10);
          }
          t2.debuglog = function(e3) {
            if (v(i) && (i = r2.env.NODE_DEBUG || ""), e3 = e3.toUpperCase(), !s[e3]) if (new RegExp("\\b" + e3 + "\\b", "i").test(i)) {
              var n3 = r2.pid;
              s[e3] = function() {
                var r3 = t2.format.apply(t2, arguments);
                console.error("%s %d: %s", e3, n3, r3);
              };
            } else s[e3] = function() {
            };
            return s[e3];
          }, t2.inspect = a, a.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, a.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" }, t2.isArray = h, t2.isBoolean = d, t2.isNull = m, t2.isNullOrUndefined = function(e3) {
            return null == e3;
          }, t2.isNumber = g, t2.isString = y, t2.isSymbol = function(e3) {
            return "symbol" == typeof e3;
          }, t2.isUndefined = v, t2.isRegExp = b, t2.isObject = _, t2.isDate = w, t2.isError = x, t2.isFunction = C, t2.isPrimitive = function(e3) {
            return null === e3 || "boolean" == typeof e3 || "number" == typeof e3 || "string" == typeof e3 || "symbol" == typeof e3 || void 0 === e3;
          }, t2.isBuffer = n2(384);
          var E = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          function A() {
            var e3 = /* @__PURE__ */ new Date(), t3 = [O(e3.getHours()), O(e3.getMinutes()), O(e3.getSeconds())].join(":");
            return [e3.getDate(), E[e3.getMonth()], t3].join(" ");
          }
          function j(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          }
          t2.log = function() {
            console.log("%s - %s", A(), t2.format.apply(t2, arguments));
          }, t2.inherits = n2(717), t2._extend = function(e3, t3) {
            if (!t3 || !_(t3)) return e3;
            for (var n3 = Object.keys(t3), r3 = n3.length; r3--; ) e3[n3[r3]] = t3[n3[r3]];
            return e3;
          };
        } }, t = {};
        function n(r2) {
          var o = t[r2];
          if (void 0 !== o) return o.exports;
          var i = t[r2] = { exports: {} };
          return e[r2].call(i.exports, i, i.exports, n), i.exports;
        }
        n.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return n.d(t2, { a: t2 }), t2;
        }, n.d = (e2, t2) => {
          for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, n.g = (function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window) return window;
          }
        })(), n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var r = {};
        return (() => {
          "use strict";
          n.r(r), n.d(r, { LSPluginUser: () => Wr, setupPluginUserInstance: () => Gr });
          var e2 = n(520), t2 = (n(856), n(996)), o = n.n(t2);
          var i = function() {
            return i = Object.assign || function(e3) {
              for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++) for (var o2 in t3 = arguments[n2]) Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
              return e3;
            }, i.apply(this, arguments);
          };
          Object.create;
          Object.create;
          function s(e3) {
            return e3.toLowerCase();
          }
          var a = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g], c = /[^A-Z0-9]+/gi;
          function l(e3, t3, n2) {
            return t3 instanceof RegExp ? e3.replace(t3, n2) : t3.reduce((function(e4, t4) {
              return e4.replace(t4, n2);
            }), e3);
          }
          function u(e3, t3) {
            return void 0 === t3 && (t3 = {}), (function(e4, t4) {
              void 0 === t4 && (t4 = {});
              for (var n2 = t4.splitRegexp, r2 = void 0 === n2 ? a : n2, o2 = t4.stripRegexp, i2 = void 0 === o2 ? c : o2, u2 = t4.transform, f2 = void 0 === u2 ? s : u2, p2 = t4.delimiter, h2 = void 0 === p2 ? " " : p2, d2 = l(l(e4, r2, "$1\0$2"), i2, "\0"), m2 = 0, g2 = d2.length; "\0" === d2.charAt(m2); ) m2++;
              for (; "\0" === d2.charAt(g2 - 1); ) g2--;
              return d2.slice(m2, g2).split("\0").map(f2).join(h2);
            })(e3, i({ delimiter: "." }, t3));
          }
          var f = n(729), p = n.n(f);
          function h(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const d = "win32" === navigator.platform.toLowerCase() ? e2.win32 : e2.posix;
          const m = function(e3, t3) {
            return void 0 === t3 && (t3 = {}), u(e3, i({ delimiter: "_" }, t3));
          };
          class g extends p() {
            constructor(e3, t3) {
              super(), h(this, "_tag", void 0), h(this, "_opts", void 0), h(this, "_logs", []), this._tag = e3, this._opts = t3;
            }
            write(e3, t3, n2) {
              var r2;
              null != t3 && t3.length && true === t3[t3.length - 1] && (n2 = true, t3.pop());
              const o2 = t3.reduce(((e4, t4) => (t4 && t4 instanceof Error ? e4 += `${t4.message} ${t4.stack}` : e4 += t4.toString(), e4)), `[${this._tag}][${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] `);
              var i2;
              (this._logs.push([e3, o2]), n2 || null !== (r2 = this._opts) && void 0 !== r2 && r2.console) && (null === (i2 = console) || void 0 === i2 || i2["ERROR" === e3 ? "error" : "debug"](`${e3}: ${o2}`));
              this.emit("change");
            }
            clear() {
              this._logs = [], this.emit("change");
            }
            info(...e3) {
              this.write("INFO", e3);
            }
            error(...e3) {
              this.write("ERROR", e3);
            }
            warn(...e3) {
              this.write("WARN", e3);
            }
            setTag(e3) {
              this._tag = e3;
            }
            toJSON() {
              return this._logs;
            }
          }
          function y(e3, ...t3) {
            try {
              const n2 = new URL(e3);
              if (!n2.origin) throw new Error(null);
              const r2 = d.join(e3.substr(n2.origin.length), ...t3);
              return n2.origin + r2;
            } catch (n2) {
              return d.join(e3, ...t3);
            }
          }
          function v(e3, t3) {
            let n2, r2, o2 = false;
            const i2 = (t4) => (n3) => {
              e3 && clearTimeout(e3), t4(n3), o2 = true;
            }, s2 = new Promise(((o3, s3) => {
              n2 = i2(o3), r2 = i2(s3), e3 && (e3 = setTimeout((() => r2(new Error(`[deferred timeout] ${t3}`))), e3));
            }));
            return { created: Date.now(), setTag: (e4) => t3 = e4, resolve: n2, reject: r2, promise: s2, get settled() {
              return o2;
            } };
          }
          const b = /* @__PURE__ */ new Map();
          window.__injectedUIEffects = b;
          var _ = n(227), w = n.n(_);
          function x(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const C = "application/x-postmate-v1+json";
          let S = 0;
          const O = { handshake: 1, "handshake-reply": 1, call: 1, emit: 1, reply: 1, request: 1 }, E = (e3, t3) => ("string" != typeof t3 || e3.origin === t3) && (!!e3.data && (("object" != typeof e3.data || "postmate" in e3.data) && (e3.data.type === C && !!O[e3.data.postmate])));
          class A {
            constructor(e3) {
              x(this, "parent", void 0), x(this, "frame", void 0), x(this, "child", void 0), x(this, "events", {}), x(this, "childOrigin", void 0), x(this, "listener", void 0), this.parent = e3.parent, this.frame = e3.frame, this.child = e3.child, this.childOrigin = e3.childOrigin, this.listener = (e4) => {
                if (!E(e4, this.childOrigin)) return false;
                const { data: t3, name: n2 } = ((e4 || {}).data || {}).value || {};
                "emit" === e4.data.postmate && n2 in this.events && this.events[n2].forEach(((e5) => {
                  e5.call(this, t3);
                }));
              }, this.parent.addEventListener("message", this.listener, false);
            }
            get(e3, ...t3) {
              return new Promise(((n2, r2) => {
                const o2 = ++S, i2 = (e4) => {
                  e4.data.uid === o2 && "reply" === e4.data.postmate && (this.parent.removeEventListener("message", i2, false), e4.data.error ? r2(e4.data.error) : n2(e4.data.value));
                };
                this.parent.addEventListener("message", i2, false), this.child.postMessage({ postmate: "request", type: C, property: e3, args: t3, uid: o2 }, this.childOrigin);
              }));
            }
            call(e3, t3) {
              this.child.postMessage({ postmate: "call", type: C, property: e3, data: t3 }, this.childOrigin);
            }
            on(e3, t3) {
              this.events[e3] || (this.events[e3] = []), this.events[e3].push(t3);
            }
            destroy() {
              window.removeEventListener("message", this.listener, false), this.frame.parentNode.removeChild(this.frame);
            }
          }
          class j {
            constructor(e3) {
              x(this, "model", void 0), x(this, "parent", void 0), x(this, "parentOrigin", void 0), x(this, "child", void 0), this.model = e3.model, this.parent = e3.parent, this.parentOrigin = e3.parentOrigin, this.child = e3.child, this.child.addEventListener("message", ((e4) => {
                if (!E(e4, this.parentOrigin)) return;
                const { property: t3, uid: n2, data: r2, args: o2 } = e4.data;
                "call" !== e4.data.postmate ? ((e5, t4, n3) => {
                  const r3 = "function" == typeof e5[t4] ? e5[t4].apply(null, n3) : e5[t4];
                  return Promise.resolve(r3);
                })(this.model, t3, o2).then(((r3) => {
                  e4.source.postMessage({ property: t3, postmate: "reply", type: C, uid: n2, value: r3 }, e4.origin);
                })).catch(((r3) => {
                  e4.source.postMessage({ property: t3, postmate: "reply", type: C, uid: n2, error: r3 }, e4.origin);
                })) : t3 in this.model && "function" == typeof this.model[t3] && this.model[t3](r2);
              }));
            }
            emit(e3, t3) {
              this.parent.postMessage({ postmate: "emit", type: C, value: { name: e3, data: t3 } }, this.parentOrigin);
            }
          }
          class k {
            constructor(e3) {
              x(this, "container", void 0), x(this, "parent", void 0), x(this, "frame", void 0), x(this, "child", void 0), x(this, "childOrigin", void 0), x(this, "url", void 0), x(this, "model", void 0), this.container = e3.container, this.url = e3.url, this.parent = window, this.frame = document.createElement("iframe"), e3.id && (this.frame.id = e3.id), e3.name && (this.frame.name = e3.name), e3.allow && (this.frame.allow = e3.allow), this.frame.classList.add.apply(this.frame.classList, e3.classListArray || []), this.container.appendChild(this.frame), this.child = this.frame.contentWindow, this.model = e3.model || {};
            }
            sendHandshake(e3) {
              const t3 = ((e4) => {
                const t4 = document.createElement("a");
                t4.href = e4;
                const n3 = t4.protocol.length > 4 ? t4.protocol : window.location.protocol, r3 = t4.host.length ? "80" === t4.port || "443" === t4.port ? t4.hostname : t4.host : window.location.host;
                return t4.origin || `${n3}//${r3}`;
              })(e3 = e3 || this.url);
              let n2, r2 = 0;
              return new Promise(((o2, i2) => {
                const s2 = (e4) => !!E(e4, t3) && ("handshake-reply" === e4.data.postmate ? (clearInterval(n2), this.parent.removeEventListener("message", s2, false), this.childOrigin = e4.origin, o2(new A(this))) : i2("Failed handshake"));
                this.parent.addEventListener("message", s2, false);
                const a2 = () => {
                  r2++, this.child.postMessage({ postmate: "handshake", type: C, model: this.model }, t3), 5 === r2 && clearInterval(n2);
                };
                this.frame.addEventListener("load", (() => {
                  a2(), n2 = setInterval(a2, 500);
                })), this.frame.src = e3;
              }));
            }
            destroy() {
              this.frame.parentNode.removeChild(this.frame);
            }
          }
          x(k, "debug", false), x(k, "Model", void 0);
          class T {
            constructor(e3) {
              x(this, "child", void 0), x(this, "model", void 0), x(this, "parent", void 0), x(this, "parentOrigin", void 0), this.child = window, this.model = e3, this.parent = this.child.parent;
            }
            sendHandshakeReply() {
              return new Promise(((e3, t3) => {
                const n2 = (r2) => {
                  if (r2.data.postmate) {
                    if ("handshake" === r2.data.postmate) {
                      0, this.child.removeEventListener("message", n2, false), r2.source.postMessage({ postmate: "handshake-reply", type: C }, r2.origin), this.parentOrigin = r2.origin;
                      const t4 = r2.data.model;
                      return t4 && Object.keys(t4).forEach(((e4) => {
                        this.model[e4] = t4[e4];
                      })), e3(new j(this));
                    }
                    return t3("Handshake Reply Failed");
                  }
                };
                this.child.addEventListener("message", n2, false);
              }));
            }
          }
          function I(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const { importHTML: M, createSandboxContainer: L } = window.QSandbox || {};
          function N(e3, t3) {
            return e3.startsWith("http") ? fetch(e3, t3) : (e3 = e3.replace("file://", ""), new Promise((async (t4, n2) => {
              try {
                const n3 = await window.apis.doAction(["readFile", e3]);
                t4({ text: () => n3 });
              } catch (e4) {
                console.error(e4), n2(e4);
              }
            })));
          }
          class F extends p() {
            constructor(e3) {
              super(), I(this, "_pluginLocal", void 0), I(this, "_frame", void 0), I(this, "_root", void 0), I(this, "_loaded", false), I(this, "_unmountFns", []), this._pluginLocal = e3, e3._dispose((() => {
                this._unmount();
              }));
            }
            async load() {
              const { name: e3, entry: t3 } = this._pluginLocal.options;
              if (this.loaded || !t3) return;
              const { template: n2, execScripts: r2 } = await M(t3, { fetch: N });
              this._mount(n2, document.body);
              const o2 = L(e3, { elementGetter: () => {
                var e4;
                return null === (e4 = this._root) || void 0 === e4 ? void 0 : e4.firstChild;
              } }).instance.proxy;
              o2.__shadow_mode__ = true, o2.LSPluginLocal = this._pluginLocal, o2.LSPluginShadow = this, o2.LSPluginUser = o2.logseq = new Wr(this._pluginLocal.toJSON(), this._pluginLocal.caller);
              const i2 = await r2(o2, true);
              this._unmountFns.push(i2.unmount), this._loaded = true;
            }
            _mount(e3, t3) {
              const n2 = this._frame = document.createElement("div");
              n2.classList.add("lsp-shadow-sandbox"), n2.id = this._pluginLocal.id, this._root = n2.attachShadow({ mode: "open" }), this._root.innerHTML = `<div>${e3}</div>`, t3.appendChild(n2), this.emit("mounted");
            }
            _unmount() {
              for (const e3 of this._unmountFns) e3 && e3.call(null);
            }
            destroy() {
              var e3, t3;
              null === (e3 = this.frame) || void 0 === e3 || null === (t3 = e3.parentNode) || void 0 === t3 || t3.removeChild(this.frame);
            }
            get loaded() {
              return this._loaded;
            }
            get document() {
              var e3;
              return null === (e3 = this._root) || void 0 === e3 ? void 0 : e3.firstChild;
            }
            get frame() {
              return this._frame;
            }
          }
          function R(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const P = w()("LSPlugin:caller"), D = "#await#response#", U = "#lspmsg#", $ = "#lspmsg#error#", z = (e3) => `#lspmsg#${e3}`;
          class H extends p() {
            constructor(e3) {
              super(), R(this, "_pluginLocal", void 0), R(this, "_connected", false), R(this, "_parent", void 0), R(this, "_child", void 0), R(this, "_shadow", void 0), R(this, "_status", void 0), R(this, "_userModel", {}), R(this, "_call", void 0), R(this, "_callUserModel", void 0), R(this, "_debugTag", ""), this._pluginLocal = e3, e3 && (this._debugTag = e3.debugTag);
            }
            async connectToChild() {
              if (this._connected) return;
              const { shadow: e3 } = this._pluginLocal;
              e3 ? await this._setupShadowSandbox() : await this._setupIframeSandbox();
            }
            async connectToParent(e3 = {}) {
              if (this._connected) return;
              const t3 = this, n2 = null != this._pluginLocal;
              let r2 = 0, o2 = 0;
              const i2 = /* @__PURE__ */ new Map(), s2 = v(6e4), a2 = this._extendUserModel({ "#lspmsg#ready#": async (e4) => {
                a2[z(null == e4 ? void 0 : e4.pid)] = ({ type: e5, payload: n3 }) => {
                  P(`[host (_call) -> *user] ${this._debugTag}`, e5, n3), t3.emit(e5, n3);
                }, await s2.resolve();
              }, "#lspmsg#beforeunload#": async (e4) => {
                const n3 = v(1e4);
                t3.emit("beforeunload", Object.assign({ actor: n3 }, e4)), await n3.promise;
              }, "#lspmsg#settings#": async ({ type: e4, payload: n3 }) => {
                t3.emit("settings:changed", n3);
              }, [U]: async ({ ns: e4, type: n3, payload: r3 }) => {
                P(`[host (async) -> *user] ${this._debugTag} ns=${e4} type=${n3}`, r3), e4 && e4.startsWith("hook") ? t3.emit(`${e4}:${n3}`, r3) : t3.emit(n3, r3);
              }, "#lspmsg#reply#": ({ _sync: e4, result: t4 }) => {
                if (P(`[sync host -> *user] #${e4}`, t4), i2.has(e4)) {
                  const n3 = i2.get(e4);
                  n3 && (null != t4 && t4.hasOwnProperty($) ? n3.reject(t4[$]) : n3.resolve(t4), i2.delete(e4));
                }
              }, ...e3 });
              var c2;
              if (n2) return await s2.promise, JSON.parse(JSON.stringify(null === (c2 = this._pluginLocal) || void 0 === c2 ? void 0 : c2.toJSON()));
              const l2 = new T(a2).sendHandshakeReply();
              return this._status = "pending", await l2.then(((e4) => {
                this._child = e4, this._connected = true, this._call = async (t4, n3 = {}, r3) => {
                  if (r3) {
                    const e5 = ++o2;
                    i2.set(e5, r3), n3._sync = e5, r3.setTag(`async call #${e5}`), P(`async call #${e5}`);
                  }
                  return e4.emit(z(a2.baseInfo.id), { type: t4, payload: n3 }), null == r3 ? void 0 : r3.promise;
                }, this._callUserModel = async (e5, t4) => {
                  try {
                    a2[e5](t4);
                  } catch (t5) {
                    P(`[model method] #${e5} not existed`);
                  }
                }, r2 = setInterval((() => {
                  if (i2.size > 100) for (const [e5, t4] of i2) t4.settled && i2.delete(e5);
                }), 18e5);
              })).finally((() => {
                this._status = void 0;
              })), await s2.promise, a2.baseInfo;
            }
            async call(e3, t3 = {}) {
              var n2;
              return null === (n2 = this._call) || void 0 === n2 ? void 0 : n2.call(this, e3, t3);
            }
            async callAsync(e3, t3 = {}) {
              var n2;
              const r2 = v(1e4);
              return null === (n2 = this._call) || void 0 === n2 ? void 0 : n2.call(this, e3, t3, r2);
            }
            async callUserModel(e3, ...t3) {
              var n2;
              return null === (n2 = this._callUserModel) || void 0 === n2 ? void 0 : n2.apply(this, [e3, ...t3]);
            }
            async callUserModelAsync(e3, ...t3) {
              var n2;
              return e3 = `${D}${e3}`, null === (n2 = this._callUserModel) || void 0 === n2 ? void 0 : n2.apply(this, [e3, ...t3]);
            }
            async _setupIframeSandbox() {
              const e3 = this._pluginLocal, t3 = e3.id, n2 = `${t3}_lsp_main`, r2 = new URL(e3.options.entry);
              r2.searchParams.set("__v__", e3.options.version);
              const o2 = document.querySelector(`#${n2}`);
              o2 && o2.parentElement.removeChild(o2);
              const i2 = document.createElement("div");
              i2.classList.add("lsp-iframe-sandbox-container"), i2.id = n2, i2.dataset.pid = t3;
              try {
                var s2;
                const e4 = null === (s2 = await this._pluginLocal._loadLayoutsData()) || void 0 === s2 ? void 0 : s2.$$0;
                if (e4) {
                  i2.dataset.inited_layout = "true";
                  let { width: t4, height: n3, left: r3, top: o3, vw: s3, vh: a3 } = e4;
                  r3 = Math.max(r3, 0), r3 = "number" == typeof s3 ? `${Math.min(100 * r3 / s3, 99)}%` : `${r3}px`, o3 = Math.max(o3, 45), o3 = "number" == typeof a3 ? `${Math.min(100 * o3 / a3, 99)}%` : `${o3}px`, Object.assign(i2.style, { width: t4 + "px", height: n3 + "px", left: r3, top: o3 });
                }
              } catch (e4) {
                console.error("[Restore Layout Error]", e4);
              }
              document.body.appendChild(i2);
              const a2 = new k({ id: t3 + "_iframe", container: i2, url: r2.href, classListArray: ["lsp-iframe-sandbox"], model: { baseInfo: JSON.parse(JSON.stringify(e3.toJSON())) }, allow: e3.options.allow });
              let c2, l2 = a2.sendHandshake();
              return this._status = "pending", new Promise(((t4, n3) => {
                c2 = setTimeout((() => {
                  n3(new Error("handshake Timeout")), a2.destroy();
                }), 8e3), l2.then(((n4) => {
                  this._parent = n4, this._connected = true, this.emit("connected"), n4.on(z(e3.id), (({ type: e4, payload: t5 }) => {
                    var n5, r3;
                    P("[user -> *host] ", e4, t5), null === (n5 = this._pluginLocal) || void 0 === n5 || n5.emit(e4, t5 || {}), null === (r3 = this._pluginLocal) || void 0 === r3 || r3.caller.emit(e4, t5 || {});
                  })), this._call = async (...t5) => {
                    n4.call(z(e3.id), { type: t5[0], payload: Object.assign(t5[1] || {}, { $$pid: e3.id }) });
                  }, this._callUserModel = async (e4, ...t5) => {
                    if (e4.startsWith(D)) return await n4.get(e4.replace(D, ""), ...t5);
                    n4.call(e4, null == t5 ? void 0 : t5[0]);
                  }, t4(null);
                })).catch(((e4) => {
                  n3(e4);
                })).finally((() => {
                  clearTimeout(c2);
                }));
              })).catch(((e4) => {
                throw P("[iframe sandbox] error", e4), e4;
              })).finally((() => {
                this._status = void 0;
              }));
            }
            async _setupShadowSandbox() {
              const e3 = this._pluginLocal, t3 = this._shadow = new F(e3);
              try {
                this._status = "pending", await t3.load(), this._connected = true, this.emit("connected"), this._call = async (t4, n2 = {}, r2) => {
                  var o2;
                  return r2 && (n2.actor = r2), null === (o2 = this._pluginLocal) || void 0 === o2 || o2.emit(t4, Object.assign(n2, { $$pid: e3.id })), null == r2 ? void 0 : r2.promise;
                }, this._callUserModel = async (...e4) => {
                  var t4;
                  let n2 = e4[0];
                  null !== (t4 = n2) && void 0 !== t4 && t4.startsWith(D) && (n2 = n2.replace(D, ""));
                  const r2 = e4[1] || {}, o2 = this._userModel[n2];
                  "function" == typeof o2 && await o2.call(null, r2);
                };
              } catch (e4) {
                throw P("[shadow sandbox] error", e4), e4;
              } finally {
                this._status = void 0;
              }
            }
            _extendUserModel(e3) {
              return Object.assign(this._userModel, e3);
            }
            _getSandboxIframeContainer() {
              var e3;
              return null === (e3 = this._parent) || void 0 === e3 ? void 0 : e3.frame.parentNode;
            }
            _getSandboxShadowContainer() {
              var e3;
              return null === (e3 = this._shadow) || void 0 === e3 ? void 0 : e3.frame.parentNode;
            }
            _getSandboxIframeRoot() {
              var e3;
              return null === (e3 = this._parent) || void 0 === e3 ? void 0 : e3.frame;
            }
            _getSandboxShadowRoot() {
              var e3;
              return null === (e3 = this._shadow) || void 0 === e3 ? void 0 : e3.frame;
            }
            set debugTag(e3) {
              this._debugTag = e3;
            }
            async destroy() {
              var e3;
              let t3 = null;
              this._parent && (t3 = this._getSandboxIframeContainer(), await this._parent.destroy()), this._shadow && (t3 = this._getSandboxShadowContainer(), this._shadow.destroy()), null === (e3 = t3) || void 0 === e3 || e3.parentNode.removeChild(t3);
            }
          }
          function B(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          class q {
            constructor(e3, t3) {
              B(this, "ctx", void 0), B(this, "opts", void 0), this.ctx = e3, this.opts = t3;
            }
            get ctxId() {
              return this.ctx.baseInfo.id;
            }
            setItem(e3, t3) {
              var n2;
              return this.ctx.caller.callAsync("api:call", { method: "write-plugin-storage-file", args: [this.ctxId, e3, t3, null === (n2 = this.opts) || void 0 === n2 ? void 0 : n2.assets] });
            }
            getItem(e3) {
              var t3;
              return this.ctx.caller.callAsync("api:call", { method: "read-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
            removeItem(e3) {
              var t3;
              return this.ctx.caller.call("api:call", { method: "unlink-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
            allKeys() {
              var e3;
              return this.ctx.caller.callAsync("api:call", { method: "list-plugin-storage-files", args: [this.ctxId, null === (e3 = this.opts) || void 0 === e3 ? void 0 : e3.assets] });
            }
            clear() {
              var e3;
              return this.ctx.caller.call("api:call", { method: "clear-plugin-storage-files", args: [this.ctxId, null === (e3 = this.opts) || void 0 === e3 ? void 0 : e3.assets] });
            }
            hasItem(e3) {
              var t3;
              return this.ctx.caller.callAsync("api:call", { method: "exist-plugin-storage-file", args: [this.ctxId, e3, null === (t3 = this.opts) || void 0 === t3 ? void 0 : t3.assets] });
            }
          }
          class W {
            constructor(e3) {
              var t3, n2, r2;
              r2 = void 0, (n2 = "ctx") in (t3 = this) ? Object.defineProperty(t3, n2, { value: r2, enumerable: true, configurable: true, writable: true }) : t3[n2] = r2, this.ctx = e3;
            }
            get React() {
              return this.ensureHostScope().React;
            }
            get ReactDOM() {
              return this.ensureHostScope().ReactDOM;
            }
            get Components() {
              return { Editor: this.ensureHostScope().logseq.sdk.experiments.cp_page_editor };
            }
            get Utils() {
              const e3 = this.ensureHostScope().logseq.sdk.utils, t3 = (t4) => e3[m(t4)];
              return { toClj: t3("toClj"), jsxToClj: t3("jsxToClj"), toJs: t3("toJs"), toKeyword: t3("toKeyword"), toSymbol: t3("toSymbol") };
            }
            get pluginLocal() {
              return this.ensureHostScope().LSPluginCore.ensurePlugin(this.ctx.baseInfo.id);
            }
            invokeExperMethod(e3, ...t3) {
              var n2;
              const r2 = this.ensureHostScope();
              e3 = null === (n2 = m(e3)) || void 0 === n2 ? void 0 : n2.toLowerCase();
              const o2 = r2.logseq.api["exper_" + e3] || r2.logseq.sdk.experiments[e3];
              return null == o2 ? void 0 : o2.apply(r2, t3);
            }
            async loadScripts(...e3) {
              (e3 = e3.map(((e4) => null != e4 && e4.startsWith("http") ? e4 : this.ctx.resolveResourceFullUrl(e4)))).unshift(this.ctx.baseInfo.id), await this.invokeExperMethod("loadScripts", ...e3);
            }
            registerFencedCodeRenderer(e3, t3) {
              return this.invokeExperMethod("registerFencedCodeRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerDaemonRenderer(e3, t3) {
              return this.invokeExperMethod("registerDaemonRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerRouteRenderer(e3, t3) {
              return this.invokeExperMethod("registerRouteRenderer", this.ctx.baseInfo.id, e3, t3);
            }
            registerExtensionsEnhancer(e3, t3) {
              const n2 = this.ensureHostScope();
              if ("katex" === e3) n2.katex && t3(n2.katex).catch(console.error);
              return this.invokeExperMethod("registerExtensionsEnhancer", this.ctx.baseInfo.id, e3, t3);
            }
            ensureHostScope() {
              try {
                var e3;
                null === (e3 = window.top) || void 0 === e3 || e3.document;
              } catch (e4) {
                console.error("Can not access host scope!");
              }
              return window.top;
            }
          }
          function G(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          const J = (e3) => `task_callback_${e3}`;
          class Z {
            constructor(e3, t3, n2 = {}) {
              G(this, "_client", void 0), G(this, "_requestId", void 0), G(this, "_requestOptions", void 0), G(this, "_promise", void 0), G(this, "_aborted", false), this._client = e3, this._requestId = t3, this._requestOptions = n2, this._promise = new Promise(((e4, t4) => {
                if (!this._requestId) return t4(null);
                this._client.once(J(this._requestId), ((n3) => {
                  n3 && n3 instanceof Error ? t4(n3) : e4(n3);
                }));
              }));
              const { success: r2, fail: o2, final: i2 } = this._requestOptions;
              this._promise.then(((e4) => {
                null == r2 || r2(e4);
              })).catch(((e4) => {
                null == o2 || o2(e4);
              })).finally((() => {
                null == i2 || i2();
              }));
            }
            abort() {
              this._requestOptions.abortable && !this._aborted && (this._client.ctx._execCallableAPI("http_request_abort", this._requestId), this._aborted = true);
            }
            get promise() {
              return this._promise;
            }
            get client() {
              return this._client;
            }
            get requestId() {
              return this._requestId;
            }
          }
          class V extends f.EventEmitter {
            constructor(e3) {
              super(), G(this, "_ctx", void 0), this._ctx = e3, this.ctx.caller.on("#lsp#request#callback", ((e4) => {
                const t3 = null == e4 ? void 0 : e4.requestId;
                t3 && this.emit(J(t3), null == e4 ? void 0 : e4.payload);
              }));
            }
            static createRequestTask(e3, t3, n2) {
              return new Z(e3, t3, n2);
            }
            async _request(e3) {
              const t3 = this.ctx.baseInfo.id, { success: n2, fail: r2, final: o2, ...i2 } = e3, s2 = this.ctx.Experiments.invokeExperMethod("request", t3, i2), a2 = V.createRequestTask(this.ctx.Request, s2, e3);
              return i2.abortable ? a2 : a2.promise;
            }
            get ctx() {
              return this._ctx;
            }
          }
          const K = Array.isArray;
          const Y = "object" == typeof global && global && global.Object === Object && global;
          var Q = "object" == typeof self && self && self.Object === Object && self;
          const X = Y || Q || Function("return this")();
          const ee = X.Symbol;
          var te = Object.prototype, ne = te.hasOwnProperty, re = te.toString, oe = ee ? ee.toStringTag : void 0;
          const ie = function(e3) {
            var t3 = ne.call(e3, oe), n2 = e3[oe];
            try {
              e3[oe] = void 0;
              var r2 = true;
            } catch (e4) {
            }
            var o2 = re.call(e3);
            return r2 && (t3 ? e3[oe] = n2 : delete e3[oe]), o2;
          };
          var se = Object.prototype.toString;
          const ae = function(e3) {
            return se.call(e3);
          };
          var ce = ee ? ee.toStringTag : void 0;
          const le = function(e3) {
            return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : ce && ce in Object(e3) ? ie(e3) : ae(e3);
          };
          const ue = function(e3) {
            var t3 = typeof e3;
            return null != e3 && ("object" == t3 || "function" == t3);
          };
          const fe = function(e3) {
            if (!ue(e3)) return false;
            var t3 = le(e3);
            return "[object Function]" == t3 || "[object GeneratorFunction]" == t3 || "[object AsyncFunction]" == t3 || "[object Proxy]" == t3;
          };
          const pe = X["__core-js_shared__"];
          var he, de = (he = /[^.]+$/.exec(pe && pe.keys && pe.keys.IE_PROTO || "")) ? "Symbol(src)_1." + he : "";
          const me = function(e3) {
            return !!de && de in e3;
          };
          var ge = Function.prototype.toString;
          const ye = function(e3) {
            if (null != e3) {
              try {
                return ge.call(e3);
              } catch (e4) {
              }
              try {
                return e3 + "";
              } catch (e4) {
              }
            }
            return "";
          };
          var ve = /^\[object .+?Constructor\]$/, be = Function.prototype, _e = Object.prototype, we = be.toString, xe = _e.hasOwnProperty, Ce = RegExp("^" + we.call(xe).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          const Se = function(e3) {
            return !(!ue(e3) || me(e3)) && (fe(e3) ? Ce : ve).test(ye(e3));
          };
          const Oe = function(e3, t3) {
            return null == e3 ? void 0 : e3[t3];
          };
          const Ee = function(e3, t3) {
            var n2 = Oe(e3, t3);
            return Se(n2) ? n2 : void 0;
          };
          const Ae = (function() {
            try {
              var e3 = Ee(Object, "defineProperty");
              return e3({}, "", {}), e3;
            } catch (e4) {
            }
          })();
          const je = function(e3, t3, n2) {
            "__proto__" == t3 && Ae ? Ae(e3, t3, { configurable: true, enumerable: true, value: n2, writable: true }) : e3[t3] = n2;
          };
          const ke = /* @__PURE__ */ (function(e3) {
            return function(t3, n2, r2) {
              for (var o2 = -1, i2 = Object(t3), s2 = r2(t3), a2 = s2.length; a2--; ) {
                var c2 = s2[e3 ? a2 : ++o2];
                if (false === n2(i2[c2], c2, i2)) break;
              }
              return t3;
            };
          })();
          const Te = function(e3, t3) {
            for (var n2 = -1, r2 = Array(e3); ++n2 < e3; ) r2[n2] = t3(n2);
            return r2;
          };
          const Ie = function(e3) {
            return null != e3 && "object" == typeof e3;
          };
          const Me = function(e3) {
            return Ie(e3) && "[object Arguments]" == le(e3);
          };
          var Le = Object.prototype, Ne = Le.hasOwnProperty, Fe = Le.propertyIsEnumerable;
          const Re = Me(/* @__PURE__ */ (function() {
            return arguments;
          })()) ? Me : function(e3) {
            return Ie(e3) && Ne.call(e3, "callee") && !Fe.call(e3, "callee");
          };
          const Pe = function() {
            return false;
          };
          var De = "object" == typeof exports && exports && !exports.nodeType && exports, Ue = De && "object" == typeof module && module && !module.nodeType && module, $e = Ue && Ue.exports === De ? X.Buffer : void 0;
          const ze = ($e ? $e.isBuffer : void 0) || Pe;
          var He = /^(?:0|[1-9]\d*)$/;
          const Be = function(e3, t3) {
            var n2 = typeof e3;
            return !!(t3 = null == t3 ? 9007199254740991 : t3) && ("number" == n2 || "symbol" != n2 && He.test(e3)) && e3 > -1 && e3 % 1 == 0 && e3 < t3;
          };
          const qe = function(e3) {
            return "number" == typeof e3 && e3 > -1 && e3 % 1 == 0 && e3 <= 9007199254740991;
          };
          var We = {};
          We["[object Float32Array]"] = We["[object Float64Array]"] = We["[object Int8Array]"] = We["[object Int16Array]"] = We["[object Int32Array]"] = We["[object Uint8Array]"] = We["[object Uint8ClampedArray]"] = We["[object Uint16Array]"] = We["[object Uint32Array]"] = true, We["[object Arguments]"] = We["[object Array]"] = We["[object ArrayBuffer]"] = We["[object Boolean]"] = We["[object DataView]"] = We["[object Date]"] = We["[object Error]"] = We["[object Function]"] = We["[object Map]"] = We["[object Number]"] = We["[object Object]"] = We["[object RegExp]"] = We["[object Set]"] = We["[object String]"] = We["[object WeakMap]"] = false;
          const Ge = function(e3) {
            return Ie(e3) && qe(e3.length) && !!We[le(e3)];
          };
          const Je = function(e3) {
            return function(t3) {
              return e3(t3);
            };
          };
          var Ze = "object" == typeof exports && exports && !exports.nodeType && exports, Ve = Ze && "object" == typeof module && module && !module.nodeType && module, Ke = Ve && Ve.exports === Ze && Y.process, Ye = (function() {
            try {
              var e3 = Ve && Ve.require && Ve.require("util").types;
              return e3 || Ke && Ke.binding && Ke.binding("util");
            } catch (e4) {
            }
          })();
          var Qe = Ye && Ye.isTypedArray;
          const Xe = Qe ? Je(Qe) : Ge;
          var et = Object.prototype.hasOwnProperty;
          const tt = function(e3, t3) {
            var n2 = K(e3), r2 = !n2 && Re(e3), o2 = !n2 && !r2 && ze(e3), i2 = !n2 && !r2 && !o2 && Xe(e3), s2 = n2 || r2 || o2 || i2, a2 = s2 ? Te(e3.length, String) : [], c2 = a2.length;
            for (var l2 in e3) !t3 && !et.call(e3, l2) || s2 && ("length" == l2 || o2 && ("offset" == l2 || "parent" == l2) || i2 && ("buffer" == l2 || "byteLength" == l2 || "byteOffset" == l2) || Be(l2, c2)) || a2.push(l2);
            return a2;
          };
          var nt = Object.prototype;
          const rt = function(e3) {
            var t3 = e3 && e3.constructor;
            return e3 === ("function" == typeof t3 && t3.prototype || nt);
          };
          const ot = /* @__PURE__ */ (function(e3, t3) {
            return function(n2) {
              return e3(t3(n2));
            };
          })(Object.keys, Object);
          var it = Object.prototype.hasOwnProperty;
          const st = function(e3) {
            if (!rt(e3)) return ot(e3);
            var t3 = [];
            for (var n2 in Object(e3)) it.call(e3, n2) && "constructor" != n2 && t3.push(n2);
            return t3;
          };
          const at = function(e3) {
            return null != e3 && qe(e3.length) && !fe(e3);
          };
          const ct = function(e3) {
            return at(e3) ? tt(e3) : st(e3);
          };
          const lt = function(e3, t3) {
            return e3 && ke(e3, t3, ct);
          };
          const ut = function() {
            this.__data__ = [], this.size = 0;
          };
          const ft = function(e3, t3) {
            return e3 === t3 || e3 != e3 && t3 != t3;
          };
          const pt = function(e3, t3) {
            for (var n2 = e3.length; n2--; ) if (ft(e3[n2][0], t3)) return n2;
            return -1;
          };
          var ht = Array.prototype.splice;
          const dt = function(e3) {
            var t3 = this.__data__, n2 = pt(t3, e3);
            return !(n2 < 0) && (n2 == t3.length - 1 ? t3.pop() : ht.call(t3, n2, 1), --this.size, true);
          };
          const mt = function(e3) {
            var t3 = this.__data__, n2 = pt(t3, e3);
            return n2 < 0 ? void 0 : t3[n2][1];
          };
          const gt = function(e3) {
            return pt(this.__data__, e3) > -1;
          };
          const yt = function(e3, t3) {
            var n2 = this.__data__, r2 = pt(n2, e3);
            return r2 < 0 ? (++this.size, n2.push([e3, t3])) : n2[r2][1] = t3, this;
          };
          function vt(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          vt.prototype.clear = ut, vt.prototype.delete = dt, vt.prototype.get = mt, vt.prototype.has = gt, vt.prototype.set = yt;
          const bt = vt;
          const _t = function() {
            this.__data__ = new bt(), this.size = 0;
          };
          const wt = function(e3) {
            var t3 = this.__data__, n2 = t3.delete(e3);
            return this.size = t3.size, n2;
          };
          const xt = function(e3) {
            return this.__data__.get(e3);
          };
          const Ct = function(e3) {
            return this.__data__.has(e3);
          };
          const St = Ee(X, "Map");
          const Ot = Ee(Object, "create");
          const Et = function() {
            this.__data__ = Ot ? Ot(null) : {}, this.size = 0;
          };
          const At = function(e3) {
            var t3 = this.has(e3) && delete this.__data__[e3];
            return this.size -= t3 ? 1 : 0, t3;
          };
          var jt = Object.prototype.hasOwnProperty;
          const kt = function(e3) {
            var t3 = this.__data__;
            if (Ot) {
              var n2 = t3[e3];
              return "__lodash_hash_undefined__" === n2 ? void 0 : n2;
            }
            return jt.call(t3, e3) ? t3[e3] : void 0;
          };
          var Tt = Object.prototype.hasOwnProperty;
          const It = function(e3) {
            var t3 = this.__data__;
            return Ot ? void 0 !== t3[e3] : Tt.call(t3, e3);
          };
          const Mt = function(e3, t3) {
            var n2 = this.__data__;
            return this.size += this.has(e3) ? 0 : 1, n2[e3] = Ot && void 0 === t3 ? "__lodash_hash_undefined__" : t3, this;
          };
          function Lt(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          Lt.prototype.clear = Et, Lt.prototype.delete = At, Lt.prototype.get = kt, Lt.prototype.has = It, Lt.prototype.set = Mt;
          const Nt = Lt;
          const Ft = function() {
            this.size = 0, this.__data__ = { hash: new Nt(), map: new (St || bt)(), string: new Nt() };
          };
          const Rt = function(e3) {
            var t3 = typeof e3;
            return "string" == t3 || "number" == t3 || "symbol" == t3 || "boolean" == t3 ? "__proto__" !== e3 : null === e3;
          };
          const Pt = function(e3, t3) {
            var n2 = e3.__data__;
            return Rt(t3) ? n2["string" == typeof t3 ? "string" : "hash"] : n2.map;
          };
          const Dt = function(e3) {
            var t3 = Pt(this, e3).delete(e3);
            return this.size -= t3 ? 1 : 0, t3;
          };
          const Ut = function(e3) {
            return Pt(this, e3).get(e3);
          };
          const $t = function(e3) {
            return Pt(this, e3).has(e3);
          };
          const zt = function(e3, t3) {
            var n2 = Pt(this, e3), r2 = n2.size;
            return n2.set(e3, t3), this.size += n2.size == r2 ? 0 : 1, this;
          };
          function Ht(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n2; ) {
              var r2 = e3[t3];
              this.set(r2[0], r2[1]);
            }
          }
          Ht.prototype.clear = Ft, Ht.prototype.delete = Dt, Ht.prototype.get = Ut, Ht.prototype.has = $t, Ht.prototype.set = zt;
          const Bt = Ht;
          const qt = function(e3, t3) {
            var n2 = this.__data__;
            if (n2 instanceof bt) {
              var r2 = n2.__data__;
              if (!St || r2.length < 199) return r2.push([e3, t3]), this.size = ++n2.size, this;
              n2 = this.__data__ = new Bt(r2);
            }
            return n2.set(e3, t3), this.size = n2.size, this;
          };
          function Wt(e3) {
            var t3 = this.__data__ = new bt(e3);
            this.size = t3.size;
          }
          Wt.prototype.clear = _t, Wt.prototype.delete = wt, Wt.prototype.get = xt, Wt.prototype.has = Ct, Wt.prototype.set = qt;
          const Gt = Wt;
          const Jt = function(e3) {
            return this.__data__.set(e3, "__lodash_hash_undefined__"), this;
          };
          const Zt = function(e3) {
            return this.__data__.has(e3);
          };
          function Vt(e3) {
            var t3 = -1, n2 = null == e3 ? 0 : e3.length;
            for (this.__data__ = new Bt(); ++t3 < n2; ) this.add(e3[t3]);
          }
          Vt.prototype.add = Vt.prototype.push = Jt, Vt.prototype.has = Zt;
          const Kt = Vt;
          const Yt = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length; ++n2 < r2; ) if (t3(e3[n2], n2, e3)) return true;
            return false;
          };
          const Qt = function(e3, t3) {
            return e3.has(t3);
          };
          const Xt = function(e3, t3, n2, r2, o2, i2) {
            var s2 = 1 & n2, a2 = e3.length, c2 = t3.length;
            if (a2 != c2 && !(s2 && c2 > a2)) return false;
            var l2 = i2.get(e3), u2 = i2.get(t3);
            if (l2 && u2) return l2 == t3 && u2 == e3;
            var f2 = -1, p2 = true, h2 = 2 & n2 ? new Kt() : void 0;
            for (i2.set(e3, t3), i2.set(t3, e3); ++f2 < a2; ) {
              var d2 = e3[f2], m2 = t3[f2];
              if (r2) var g2 = s2 ? r2(m2, d2, f2, t3, e3, i2) : r2(d2, m2, f2, e3, t3, i2);
              if (void 0 !== g2) {
                if (g2) continue;
                p2 = false;
                break;
              }
              if (h2) {
                if (!Yt(t3, (function(e4, t4) {
                  if (!Qt(h2, t4) && (d2 === e4 || o2(d2, e4, n2, r2, i2))) return h2.push(t4);
                }))) {
                  p2 = false;
                  break;
                }
              } else if (d2 !== m2 && !o2(d2, m2, n2, r2, i2)) {
                p2 = false;
                break;
              }
            }
            return i2.delete(e3), i2.delete(t3), p2;
          };
          const en = X.Uint8Array;
          const tn = function(e3) {
            var t3 = -1, n2 = Array(e3.size);
            return e3.forEach((function(e4, r2) {
              n2[++t3] = [r2, e4];
            })), n2;
          };
          const nn = function(e3) {
            var t3 = -1, n2 = Array(e3.size);
            return e3.forEach((function(e4) {
              n2[++t3] = e4;
            })), n2;
          };
          var rn = ee ? ee.prototype : void 0, on = rn ? rn.valueOf : void 0;
          const sn = function(e3, t3, n2, r2, o2, i2, s2) {
            switch (n2) {
              case "[object DataView]":
                if (e3.byteLength != t3.byteLength || e3.byteOffset != t3.byteOffset) return false;
                e3 = e3.buffer, t3 = t3.buffer;
              case "[object ArrayBuffer]":
                return !(e3.byteLength != t3.byteLength || !i2(new en(e3), new en(t3)));
              case "[object Boolean]":
              case "[object Date]":
              case "[object Number]":
                return ft(+e3, +t3);
              case "[object Error]":
                return e3.name == t3.name && e3.message == t3.message;
              case "[object RegExp]":
              case "[object String]":
                return e3 == t3 + "";
              case "[object Map]":
                var a2 = tn;
              case "[object Set]":
                var c2 = 1 & r2;
                if (a2 || (a2 = nn), e3.size != t3.size && !c2) return false;
                var l2 = s2.get(e3);
                if (l2) return l2 == t3;
                r2 |= 2, s2.set(e3, t3);
                var u2 = Xt(a2(e3), a2(t3), r2, o2, i2, s2);
                return s2.delete(e3), u2;
              case "[object Symbol]":
                if (on) return on.call(e3) == on.call(t3);
            }
            return false;
          };
          const an = function(e3, t3) {
            for (var n2 = -1, r2 = t3.length, o2 = e3.length; ++n2 < r2; ) e3[o2 + n2] = t3[n2];
            return e3;
          };
          const cn = function(e3, t3, n2) {
            var r2 = t3(e3);
            return K(e3) ? r2 : an(r2, n2(e3));
          };
          const ln = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length, o2 = 0, i2 = []; ++n2 < r2; ) {
              var s2 = e3[n2];
              t3(s2, n2, e3) && (i2[o2++] = s2);
            }
            return i2;
          };
          const un = function() {
            return [];
          };
          var fn = Object.prototype.propertyIsEnumerable, pn = Object.getOwnPropertySymbols;
          const hn = pn ? function(e3) {
            return null == e3 ? [] : (e3 = Object(e3), ln(pn(e3), (function(t3) {
              return fn.call(e3, t3);
            })));
          } : un;
          const dn = function(e3) {
            return cn(e3, ct, hn);
          };
          var mn = Object.prototype.hasOwnProperty;
          const gn = function(e3, t3, n2, r2, o2, i2) {
            var s2 = 1 & n2, a2 = dn(e3), c2 = a2.length;
            if (c2 != dn(t3).length && !s2) return false;
            for (var l2 = c2; l2--; ) {
              var u2 = a2[l2];
              if (!(s2 ? u2 in t3 : mn.call(t3, u2))) return false;
            }
            var f2 = i2.get(e3), p2 = i2.get(t3);
            if (f2 && p2) return f2 == t3 && p2 == e3;
            var h2 = true;
            i2.set(e3, t3), i2.set(t3, e3);
            for (var d2 = s2; ++l2 < c2; ) {
              var m2 = e3[u2 = a2[l2]], g2 = t3[u2];
              if (r2) var y2 = s2 ? r2(g2, m2, u2, t3, e3, i2) : r2(m2, g2, u2, e3, t3, i2);
              if (!(void 0 === y2 ? m2 === g2 || o2(m2, g2, n2, r2, i2) : y2)) {
                h2 = false;
                break;
              }
              d2 || (d2 = "constructor" == u2);
            }
            if (h2 && !d2) {
              var v2 = e3.constructor, b2 = t3.constructor;
              v2 == b2 || !("constructor" in e3) || !("constructor" in t3) || "function" == typeof v2 && v2 instanceof v2 && "function" == typeof b2 && b2 instanceof b2 || (h2 = false);
            }
            return i2.delete(e3), i2.delete(t3), h2;
          };
          const yn = Ee(X, "DataView");
          const vn = Ee(X, "Promise");
          const bn = Ee(X, "Set");
          const _n = Ee(X, "WeakMap");
          var wn = "[object Map]", xn = "[object Promise]", Cn = "[object Set]", Sn = "[object WeakMap]", On = "[object DataView]", En = ye(yn), An = ye(St), jn = ye(vn), kn = ye(bn), Tn = ye(_n), In = le;
          (yn && In(new yn(new ArrayBuffer(1))) != On || St && In(new St()) != wn || vn && In(vn.resolve()) != xn || bn && In(new bn()) != Cn || _n && In(new _n()) != Sn) && (In = function(e3) {
            var t3 = le(e3), n2 = "[object Object]" == t3 ? e3.constructor : void 0, r2 = n2 ? ye(n2) : "";
            if (r2) switch (r2) {
              case En:
                return On;
              case An:
                return wn;
              case jn:
                return xn;
              case kn:
                return Cn;
              case Tn:
                return Sn;
            }
            return t3;
          });
          const Mn = In;
          var Ln = "[object Arguments]", Nn = "[object Array]", Fn = "[object Object]", Rn = Object.prototype.hasOwnProperty;
          const Pn = function(e3, t3, n2, r2, o2, i2) {
            var s2 = K(e3), a2 = K(t3), c2 = s2 ? Nn : Mn(e3), l2 = a2 ? Nn : Mn(t3), u2 = (c2 = c2 == Ln ? Fn : c2) == Fn, f2 = (l2 = l2 == Ln ? Fn : l2) == Fn, p2 = c2 == l2;
            if (p2 && ze(e3)) {
              if (!ze(t3)) return false;
              s2 = true, u2 = false;
            }
            if (p2 && !u2) return i2 || (i2 = new Gt()), s2 || Xe(e3) ? Xt(e3, t3, n2, r2, o2, i2) : sn(e3, t3, c2, n2, r2, o2, i2);
            if (!(1 & n2)) {
              var h2 = u2 && Rn.call(e3, "__wrapped__"), d2 = f2 && Rn.call(t3, "__wrapped__");
              if (h2 || d2) {
                var m2 = h2 ? e3.value() : e3, g2 = d2 ? t3.value() : t3;
                return i2 || (i2 = new Gt()), o2(m2, g2, n2, r2, i2);
              }
            }
            return !!p2 && (i2 || (i2 = new Gt()), gn(e3, t3, n2, r2, o2, i2));
          };
          const Dn = function e3(t3, n2, r2, o2, i2) {
            return t3 === n2 || (null == t3 || null == n2 || !Ie(t3) && !Ie(n2) ? t3 != t3 && n2 != n2 : Pn(t3, n2, r2, o2, e3, i2));
          };
          const Un = function(e3, t3, n2, r2) {
            var o2 = n2.length, i2 = o2, s2 = !r2;
            if (null == e3) return !i2;
            for (e3 = Object(e3); o2--; ) {
              var a2 = n2[o2];
              if (s2 && a2[2] ? a2[1] !== e3[a2[0]] : !(a2[0] in e3)) return false;
            }
            for (; ++o2 < i2; ) {
              var c2 = (a2 = n2[o2])[0], l2 = e3[c2], u2 = a2[1];
              if (s2 && a2[2]) {
                if (void 0 === l2 && !(c2 in e3)) return false;
              } else {
                var f2 = new Gt();
                if (r2) var p2 = r2(l2, u2, c2, e3, t3, f2);
                if (!(void 0 === p2 ? Dn(u2, l2, 3, r2, f2) : p2)) return false;
              }
            }
            return true;
          };
          const $n = function(e3) {
            return e3 == e3 && !ue(e3);
          };
          const zn = function(e3) {
            for (var t3 = ct(e3), n2 = t3.length; n2--; ) {
              var r2 = t3[n2], o2 = e3[r2];
              t3[n2] = [r2, o2, $n(o2)];
            }
            return t3;
          };
          const Hn = function(e3, t3) {
            return function(n2) {
              return null != n2 && (n2[e3] === t3 && (void 0 !== t3 || e3 in Object(n2)));
            };
          };
          const Bn = function(e3) {
            var t3 = zn(e3);
            return 1 == t3.length && t3[0][2] ? Hn(t3[0][0], t3[0][1]) : function(n2) {
              return n2 === e3 || Un(n2, e3, t3);
            };
          };
          const qn = function(e3) {
            return "symbol" == typeof e3 || Ie(e3) && "[object Symbol]" == le(e3);
          };
          var Wn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Gn = /^\w*$/;
          const Jn = function(e3, t3) {
            if (K(e3)) return false;
            var n2 = typeof e3;
            return !("number" != n2 && "symbol" != n2 && "boolean" != n2 && null != e3 && !qn(e3)) || (Gn.test(e3) || !Wn.test(e3) || null != t3 && e3 in Object(t3));
          };
          function Zn(e3, t3) {
            if ("function" != typeof e3 || null != t3 && "function" != typeof t3) throw new TypeError("Expected a function");
            var n2 = function() {
              var r2 = arguments, o2 = t3 ? t3.apply(this, r2) : r2[0], i2 = n2.cache;
              if (i2.has(o2)) return i2.get(o2);
              var s2 = e3.apply(this, r2);
              return n2.cache = i2.set(o2, s2) || i2, s2;
            };
            return n2.cache = new (Zn.Cache || Bt)(), n2;
          }
          Zn.Cache = Bt;
          const Vn = Zn;
          var Kn = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yn = /\\(\\)?/g;
          const Qn = (function(e3) {
            var t3 = Vn(e3, (function(e4) {
              return 500 === n2.size && n2.clear(), e4;
            })), n2 = t3.cache;
            return t3;
          })((function(e3) {
            var t3 = [];
            return 46 === e3.charCodeAt(0) && t3.push(""), e3.replace(Kn, (function(e4, n2, r2, o2) {
              t3.push(r2 ? o2.replace(Yn, "$1") : n2 || e4);
            })), t3;
          }));
          const Xn = function(e3, t3) {
            for (var n2 = -1, r2 = null == e3 ? 0 : e3.length, o2 = Array(r2); ++n2 < r2; ) o2[n2] = t3(e3[n2], n2, e3);
            return o2;
          };
          var er = ee ? ee.prototype : void 0, tr = er ? er.toString : void 0;
          const nr = function e3(t3) {
            if ("string" == typeof t3) return t3;
            if (K(t3)) return Xn(t3, e3) + "";
            if (qn(t3)) return tr ? tr.call(t3) : "";
            var n2 = t3 + "";
            return "0" == n2 && 1 / t3 == -Infinity ? "-0" : n2;
          };
          const rr = function(e3) {
            return null == e3 ? "" : nr(e3);
          };
          const or = function(e3, t3) {
            return K(e3) ? e3 : Jn(e3, t3) ? [e3] : Qn(rr(e3));
          };
          const ir = function(e3) {
            if ("string" == typeof e3 || qn(e3)) return e3;
            var t3 = e3 + "";
            return "0" == t3 && 1 / e3 == -Infinity ? "-0" : t3;
          };
          const sr = function(e3, t3) {
            for (var n2 = 0, r2 = (t3 = or(t3, e3)).length; null != e3 && n2 < r2; ) e3 = e3[ir(t3[n2++])];
            return n2 && n2 == r2 ? e3 : void 0;
          };
          const ar = function(e3, t3, n2) {
            var r2 = null == e3 ? void 0 : sr(e3, t3);
            return void 0 === r2 ? n2 : r2;
          };
          const cr = function(e3, t3) {
            return null != e3 && t3 in Object(e3);
          };
          const lr = function(e3, t3, n2) {
            for (var r2 = -1, o2 = (t3 = or(t3, e3)).length, i2 = false; ++r2 < o2; ) {
              var s2 = ir(t3[r2]);
              if (!(i2 = null != e3 && n2(e3, s2))) break;
              e3 = e3[s2];
            }
            return i2 || ++r2 != o2 ? i2 : !!(o2 = null == e3 ? 0 : e3.length) && qe(o2) && Be(s2, o2) && (K(e3) || Re(e3));
          };
          const ur = function(e3, t3) {
            return null != e3 && lr(e3, t3, cr);
          };
          const fr = function(e3, t3) {
            return Jn(e3) && $n(t3) ? Hn(ir(e3), t3) : function(n2) {
              var r2 = ar(n2, e3);
              return void 0 === r2 && r2 === t3 ? ur(n2, e3) : Dn(t3, r2, 3);
            };
          };
          const pr = function(e3) {
            return e3;
          };
          const hr = function(e3) {
            return function(t3) {
              return null == t3 ? void 0 : t3[e3];
            };
          };
          const dr = function(e3) {
            return function(t3) {
              return sr(t3, e3);
            };
          };
          const mr = function(e3) {
            return Jn(e3) ? hr(ir(e3)) : dr(e3);
          };
          const gr = function(e3) {
            return "function" == typeof e3 ? e3 : null == e3 ? pr : "object" == typeof e3 ? K(e3) ? fr(e3[0], e3[1]) : Bn(e3) : mr(e3);
          };
          const yr = function(e3, t3) {
            var n2 = {};
            return t3 = gr(t3, 3), lt(e3, (function(e4, r2, o2) {
              je(n2, t3(e4, r2, o2), e4);
            })), n2;
          };
          function vr(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          class br {
            constructor(e3, t3) {
              vr(this, "ctx", void 0), vr(this, "serviceHooks", void 0), this.ctx = e3, this.serviceHooks = t3, e3._execCallableAPI("register-search-service", e3.baseInfo.id, t3.name, t3.options);
              Object.entries({ query: { f: "onQuery", args: ["graph", "q", true], reply: true, transformOutput: (e4) => (K(null == e4 ? void 0 : e4.blocks) && (e4.blocks = e4.blocks.map(((e5) => e5 && yr(e5, ((e6, t4) => `block/${t4}`))))), e4) }, rebuildBlocksIndice: { f: "onIndiceInit", args: ["graph", "blocks"] }, transactBlocks: { f: "onBlocksChanged", args: ["graph", "data"] }, truncateBlocks: { f: "onIndiceReset", args: ["graph"] }, removeDb: { f: "onGraph", args: ["graph"] } }).forEach((([n2, r2]) => {
                const o2 = ((e4) => `service:search:${e4}:${t3.name}`)(n2);
                e3.caller.on(o2, (async (n3) => {
                  if (fe(null == t3 ? void 0 : t3[r2.f])) {
                    let i2 = null;
                    try {
                      i2 = await t3[r2.f].apply(t3, (r2.args || []).map(((e4) => {
                        if (n3) {
                          if (true === e4) return n3;
                          if (n3.hasOwnProperty(e4)) {
                            const t4 = n3[e4];
                            return delete n3[e4], t4;
                          }
                        }
                      }))), r2.transformOutput && (i2 = r2.transformOutput(i2));
                    } catch (e4) {
                      console.error("[SearchService] ", e4), i2 = e4;
                    } finally {
                      r2.reply && e3.caller.call(`${o2}:reply`, i2);
                    }
                  }
                }));
              }));
            }
          }
          function _r(e3, t3, n2) {
            !(function(e4, t4) {
              if (t4.has(e4)) throw new TypeError("Cannot initialize the same private elements twice on an object");
            })(e3, t3), t3.set(e3, n2);
          }
          function wr(e3, t3, n2) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          function xr(e3, t3, n2) {
            return (function(e4, t4, n3) {
              if (t4.set) t4.set.call(e4, n3);
              else {
                if (!t4.writable) throw new TypeError("attempted to set read only private field");
                t4.value = n3;
              }
            })(e3, Sr(e3, t3, "set"), n2), n2;
          }
          function Cr(e3, t3) {
            return (function(e4, t4) {
              if (t4.get) return t4.get.call(e4);
              return t4.value;
            })(e3, Sr(e3, t3, "get"));
          }
          function Sr(e3, t3, n2) {
            if (!t3.has(e3)) throw new TypeError("attempted to " + n2 + " private field on non-instance");
            return t3.get(e3);
          }
          const Or = /* @__PURE__ */ Symbol.for("proxy-continue"), Er = w()("LSPlugin:user"), Ar = new g("", { console: true });
          function jr(e3, t3, n2) {
            var r2;
            const { key: o2, label: i2, desc: s2, palette: a2, keybinding: c2, extras: l2 } = t3;
            if ("function" != typeof n2) return this.logger.error(`${o2 || i2}: command action should be function.`), false;
            const u2 = (function(e4) {
              if ("string" == typeof e4) return e4.trim().replace(/\s/g, "_").toLowerCase();
            })(o2);
            if (!u2) return this.logger.error(`${i2}: command key is required.`), false;
            const f2 = `SimpleCommandHook${u2}${++Lr}`;
            this.Editor["on" + f2](n2), null === (r2 = this.caller) || void 0 === r2 || r2.call("api:call", { method: "register-plugin-simple-command", args: [this.baseInfo.id, [{ key: u2, label: i2, type: e3, desc: s2, keybinding: c2, extras: l2 }, ["editor/hook", f2]], a2] });
          }
          function kr(e3) {
            return !("string" != typeof (t3 = e3) || 36 !== t3.length || !/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(t3)) || (Ar.error(`#${e3} is not a valid UUID string.`), false);
            var t3;
          }
          let Tr = null, Ir = /* @__PURE__ */ new Map();
          const Mr = { async getInfo(e3) {
            return Tr || (Tr = await this._execCallableAPIAsync("get-app-info")), "string" == typeof e3 ? Tr[e3] : Tr;
          }, registerCommand: jr, registerSearchService(e3) {
            if (Ir.has(e3.name)) throw new Error(`SearchService: #${e3.name} has registered!`);
            Ir.set(e3.name, new br(this, e3));
          }, registerCommandPalette(e3, t3) {
            const { key: n2, label: r2, keybinding: o2 } = e3;
            return jr.call(this, "$palette$", { key: n2, label: r2, palette: true, keybinding: o2 }, t3);
          }, registerCommandShortcut(e3, t3, n2 = {}) {
            "string" == typeof e3 && (e3 = { mode: "global", binding: e3 });
            const { binding: r2 } = e3, o2 = "$shortcut$", i2 = n2.key || o2 + m(null == r2 ? void 0 : r2.toString());
            return jr.call(this, o2, { ...n2, key: i2, palette: false, keybinding: e3 }, t3);
          }, registerUIItem(e3, t3) {
            var n2;
            const r2 = this.baseInfo.id;
            null === (n2 = this.caller) || void 0 === n2 || n2.call("api:call", { method: "register-plugin-ui-item", args: [r2, e3, t3] });
          }, registerPageMenuItem(e3, t3) {
            if ("function" != typeof t3) return false;
            const n2 = e3 + "_" + this.baseInfo.id, r2 = e3;
            jr.call(this, "page-menu-item", { key: n2, label: r2 }, t3);
          }, onBlockRendererSlotted(e3, t3) {
            if (!kr(e3)) return;
            const n2 = this.baseInfo.id, r2 = `hook:editor:${m(`slot:${e3}`)}`;
            return this.caller.on(r2, t3), this.App._installPluginHook(n2, r2), () => {
              this.caller.off(r2, t3), this.App._uninstallPluginHook(n2, r2);
            };
          }, invokeExternalPlugin(e3, ...t3) {
            var n2;
            if (!(e3 = null === (n2 = e3) || void 0 === n2 ? void 0 : n2.trim())) return;
            let [r2, o2] = e3.split(".");
            if (!["models", "commands"].includes(null == o2 ? void 0 : o2.toLowerCase())) throw new Error("Type only support '.models' or '.commands' currently.");
            const i2 = e3.replace(`${r2}.${o2}.`, "");
            if (!r2 || !o2 || !i2) throw new Error(`Illegal type of #${e3} to invoke external plugin.`);
            return this._execCallableAPIAsync("invoke_external_plugin_cmd", r2, o2.toLowerCase(), i2, t3);
          }, setFullScreen(e3) {
            const t3 = (...e4) => this._callWin("setFullScreen", ...e4);
            "toggle" === e3 ? this._callWin("isFullScreen").then(((e4) => {
              e4 ? t3() : t3(true);
            })) : e3 ? t3(true) : t3();
          } };
          let Lr = 0;
          const Nr = { newBlockUUID() {
            return this._execCallableAPIAsync("new_block_uuid");
          }, isPageBlock: (e3) => e3.uuid && e3.hasOwnProperty("name"), registerSlashCommand(e3, t3) {
            var n2;
            Er("Register slash command #", this.baseInfo.id, e3, t3), "function" == typeof t3 && (t3 = [["editor/clear-current-slash", false], ["editor/restore-saved-cursor"], ["editor/hook", t3]]), t3 = t3.map(((e4) => {
              const [t4, ...n3] = e4;
              if ("editor/hook" === t4) {
                let r2 = n3[0], o2 = () => {
                  var e5;
                  null === (e5 = this.caller) || void 0 === e5 || e5.callUserModel(r2);
                };
                "function" == typeof r2 && (o2 = r2);
                const i2 = `SlashCommandHook${t4}${++Lr}`;
                e4[1] = i2, this.Editor["on" + i2](o2);
              }
              return e4;
            })), null === (n2 = this.caller) || void 0 === n2 || n2.call("api:call", { method: "register-plugin-slash-command", args: [this.baseInfo.id, [e3, t3]] });
          }, registerBlockContextMenuItem(e3, t3) {
            if ("function" != typeof t3) return false;
            const n2 = e3 + "_" + this.baseInfo.id;
            jr.call(this, "block-context-menu-item", { key: n2, label: e3 }, t3);
          }, registerHighlightContextMenuItem(e3, t3, n2) {
            if ("function" != typeof t3) return false;
            const r2 = e3 + "_" + this.baseInfo.id;
            jr.call(this, "highlight-context-menu-item", { key: r2, label: e3, extras: n2 }, t3);
          }, scrollToBlockInPage(e3, t3, n2) {
            const r2 = "block-content-" + t3;
            null != n2 && n2.replaceState ? this.App.replaceState("page", { name: e3 }, { anchor: r2 }) : this.App.pushState("page", { name: e3 }, { anchor: r2 });
          } }, Fr = { onBlockChanged(e3, t3) {
            if (!kr(e3)) return;
            const n2 = this.baseInfo.id, r2 = `hook:db:${m(`block:${e3}`)}`, o2 = ({ block: n3, txData: r3, txMeta: o3 }) => {
              n3.uuid === e3 && t3(n3, r3, o3);
            };
            return this.caller.on(r2, o2), this.App._installPluginHook(n2, r2), () => {
              this.caller.off(r2, o2), this.App._uninstallPluginHook(n2, r2);
            };
          }, datascriptQuery(e3, ...t3) {
            if (t3.pop(), null != t3 && t3.some(((e4) => "function" == typeof e4))) {
              return this.Experiments.ensureHostScope().logseq.api.datascript_query(e3, ...t3);
            }
            return this._execCallableAPIAsync("datascript_query", e3, ...t3);
          } }, Rr = {}, Pr = {}, Dr = {}, Ur = { makeSandboxStorage() {
            return new q(this, { assets: true });
          } };
          var $r = /* @__PURE__ */ new WeakMap(), zr = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
          class Wr extends p() {
            constructor(e3, t3) {
              super(), wr(this, "_baseInfo", void 0), wr(this, "_caller", void 0), wr(this, "_version", "0.2.9"), wr(this, "_debugTag", ""), wr(this, "_settingsSchema", void 0), wr(this, "_connected", false), wr(this, "_ui", /* @__PURE__ */ new Map()), wr(this, "_mFileStorage", void 0), wr(this, "_mRequest", void 0), wr(this, "_mExperiments", void 0), wr(this, "_beforeunloadCallback", void 0), _r(this, $r, { writable: true, value: void 0 }), _r(this, zr, { writable: true, value: void 0 }), _r(this, Hr, { writable: true, value: void 0 }), _r(this, Br, { writable: true, value: void 0 }), _r(this, qr, { writable: true, value: void 0 }), this._baseInfo = e3, this._caller = t3, t3.on("sys:ui:visible", ((e4) => {
                null != e4 && e4.toggle && this.toggleMainUI();
              })), t3.on("settings:changed", ((e4) => {
                const t4 = Object.assign({}, this.settings), n2 = Object.assign(this._baseInfo.settings, e4);
                this.emit("settings:changed", { ...n2 }, t4);
              })), t3.on("beforeunload", (async (e4) => {
                const { actor: t4, ...n2 } = e4, r2 = this._beforeunloadCallback;
                try {
                  r2 && await r2(n2), null == t4 || t4.resolve(null);
                } catch (e5) {
                  this.logger.error("[beforeunload] ", e5), null == t4 || t4.reject(e5);
                }
              }));
            }
            async ready(e3, t3) {
              var n2, r2;
              if (!this._connected) try {
                var i2;
                "function" == typeof e3 && (t3 = e3, e3 = {});
                let s2 = await this._caller.connectToParent(e3);
                this._connected = true, n2 = this._baseInfo, r2 = s2, s2 = o()(n2, r2, { arrayMerge: (e4, t4) => t4 }), this._baseInfo = s2, null !== (i2 = s2) && void 0 !== i2 && i2.id && (this._debugTag = this._caller.debugTag = `#${s2.id} [${s2.name}]`, this.logger.setTag(this._debugTag)), this._settingsSchema && (s2.settings = (function(e4, t4) {
                  const n3 = (t4 || []).reduce(((e5, t5) => ("default" in t5 && (e5[t5.key] = t5.default), e5)), {});
                  return Object.assign(n3, e4);
                })(s2.settings, this._settingsSchema), await this.useSettingsSchema(this._settingsSchema));
                try {
                  await this._execCallableAPIAsync("setSDKMetadata", { version: this._version, runtime: "js" });
                } catch (e4) {
                  console.warn(e4);
                }
                t3 && t3.call(this, s2);
              } catch (e4) {
                console.error(`${this._debugTag} [Ready Error]`, e4);
              }
            }
            ensureConnected() {
              if (!this._connected) throw new Error("not connected");
            }
            beforeunload(e3) {
              "function" == typeof e3 && (this._beforeunloadCallback = e3);
            }
            provideModel(e3) {
              return this.caller._extendUserModel(e3), this;
            }
            provideTheme(e3) {
              return this.caller.call("provider:theme", e3), this;
            }
            provideStyle(e3) {
              return this.caller.call("provider:style", e3), this;
            }
            provideUI(e3) {
              return this.caller.call("provider:ui", e3), this;
            }
            useSettingsSchema(e3) {
              return this.connected && this.caller.call("settings:schema", { schema: e3, isSync: true }), this._settingsSchema = e3, this;
            }
            updateSettings(e3) {
              this.caller.call("settings:update", e3);
            }
            onSettingsChanged(e3) {
              const t3 = "settings:changed";
              return this.on(t3, e3), () => this.off(t3, e3);
            }
            showSettingsUI() {
              this.caller.call("settings:visible:changed", { visible: true });
            }
            hideSettingsUI() {
              this.caller.call("settings:visible:changed", { visible: false });
            }
            setMainUIAttrs(e3) {
              this.caller.call("main-ui:attrs", e3);
            }
            setMainUIInlineStyle(e3) {
              this.caller.call("main-ui:style", e3);
            }
            hideMainUI(e3) {
              const t3 = { key: 0, visible: false, cursor: null == e3 ? void 0 : e3.restoreEditingCursor };
              this.caller.call("main-ui:visible", t3), this.emit("ui:visible:changed", t3), this._ui.set(t3.key, t3);
            }
            showMainUI(e3) {
              const t3 = { key: 0, visible: true, autoFocus: null == e3 ? void 0 : e3.autoFocus };
              this.caller.call("main-ui:visible", t3), this.emit("ui:visible:changed", t3), this._ui.set(t3.key, t3);
            }
            toggleMainUI() {
              const e3 = 0, t3 = this._ui.get(e3);
              t3 && t3.visible ? this.hideMainUI() : this.showMainUI();
            }
            get version() {
              return this._version;
            }
            get isMainUIVisible() {
              const e3 = this._ui.get(0);
              return Boolean(e3 && e3.visible);
            }
            get connected() {
              return this._connected;
            }
            get baseInfo() {
              return this._baseInfo;
            }
            get effect() {
              return (e3 = this) && ((null === (t3 = e3.baseInfo) || void 0 === t3 ? void 0 : t3.effect) || !(null !== (n2 = e3.baseInfo) && void 0 !== n2 && n2.iir));
              var e3, t3, n2;
            }
            get logger() {
              return Ar;
            }
            get settings() {
              var e3;
              return null === (e3 = this.baseInfo) || void 0 === e3 ? void 0 : e3.settings;
            }
            get caller() {
              return this._caller;
            }
            resolveResourceFullUrl(e3) {
              if (this.ensureConnected(), e3) return e3 = e3.replace(/^[.\\/]+/, ""), y(this._baseInfo.lsr, e3);
            }
            _makeUserProxy(e3, t3) {
              const n2 = this, r2 = this.caller;
              return new Proxy(e3, { get(e4, o2, i2) {
                const s2 = e4[o2];
                return function(...e5) {
                  if (s2) {
                    0 !== (null == e5 ? void 0 : e5.length) && e5.concat(t3);
                    const r3 = s2.apply(n2, e5);
                    if (r3 !== Or) return r3;
                  }
                  if (t3) {
                    const i4 = o2.toString().match(/^(once|off|on)/i);
                    if (null != i4) {
                      const o3 = i4[0].toLowerCase(), s3 = i4.input, a2 = "off" === o3, c2 = n2.baseInfo.id;
                      let l2 = s3.slice(o3.length), u2 = e5[0], f2 = e5[1];
                      "string" == typeof u2 && "function" == typeof f2 && (u2 = u2.replace(/^logseq./, ":"), l2 = `${l2}${u2}`, u2 = f2, f2 = e5[2]), l2 = `hook:${t3}:${m(l2)}`, r2[o3](l2, u2);
                      const p2 = () => {
                        r2.off(l2, u2), r2.listenerCount(l2) || n2.App._uninstallPluginHook(c2, l2);
                      };
                      return a2 ? void p2() : (n2.App._installPluginHook(c2, l2, f2), p2);
                    }
                  }
                  let i3 = o2;
                  return ["git", "ui", "assets", "utils"].includes(t3) && (i3 = t3 + "_" + i3), r2.callAsync("api:call", { tag: t3, method: i3, args: e5 });
                };
              } });
            }
            _execCallableAPIAsync(e3, ...t3) {
              return this._caller.callAsync("api:call", { method: e3, args: t3 });
            }
            _execCallableAPI(e3, ...t3) {
              this._caller.call("api:call", { method: e3, args: t3 });
            }
            _callWin(...e3) {
              return this._execCallableAPIAsync("_callMainWin", ...e3);
            }
            get App() {
              return Cr(this, $r) ? Cr(this, $r) : xr(this, $r, this._makeUserProxy(Mr, "app"));
            }
            get Editor() {
              return Cr(this, zr) ? Cr(this, zr) : xr(this, zr, this._makeUserProxy(Nr, "editor"));
            }
            get DB() {
              return Cr(this, Hr) ? Cr(this, Hr) : xr(this, Hr, this._makeUserProxy(Fr, "db"));
            }
            get UI() {
              return Cr(this, Br) ? Cr(this, Br) : xr(this, Br, this._makeUserProxy(Pr, "ui"));
            }
            get Utils() {
              return Cr(this, qr) ? Cr(this, qr) : xr(this, qr, this._makeUserProxy(Dr, "utils"));
            }
            get Git() {
              return this._makeUserProxy(Rr, "git");
            }
            get Assets() {
              return this._makeUserProxy(Ur, "assets");
            }
            get FileStorage() {
              let e3 = this._mFileStorage;
              return e3 || (e3 = this._mFileStorage = new q(this)), e3;
            }
            get Request() {
              let e3 = this._mRequest;
              return e3 || (e3 = this._mRequest = new V(this)), e3;
            }
            get Experiments() {
              let e3 = this._mExperiments;
              return e3 || (e3 = this._mExperiments = new W(this)), e3;
            }
          }
          function Gr(e3, t3) {
            return new Wr(e3, t3);
          }
          if (null == window.__LSP__HOST__) {
            const e3 = new H(null);
            window.logseq = Gr({}, e3);
          }
        })(), r;
      })()));
    }
  });

  // src/index.ts
  var import_libs = __toESM(require_lsplugin_user());

  // package.json
  var logseq2 = {
    id: "_deepl_translator_plugin",
    title: "DeepL Translator",
    icon: "logo.png"
  };

  // src/api/deepl.ts
  var DeepLClient = class {
    /**
     * Initialize DeepL client with API key
     * @param apiKey - DeepL API key
     * @param isPro - Whether to use Pro endpoint (default: false for free tier)
     */
    constructor(apiKey, isPro = false) {
      if (!apiKey) {
        throw new Error("DeepL API key is required");
      }
      this.apiKey = apiKey;
      this.apiUrl = isPro ? "https://api.deepl.com/v2/translate" : "https://api-free.deepl.com/v2/translate";
    }
    /**
     * Translate text using DeepL API
     * @param request - Translation request with text and target language
     * @returns Translation result with original and translated text
     */
    async translate(request) {
      try {
        const response = await fetch(this.apiUrl, {
          method: "POST",
          headers: {
            "Authorization": `DeepL-Auth-Key ${this.apiKey}`,
            "Content-Type": "application/json",
            "User-Agent": "logseq-deepl-translator/0.0.1"
          },
          body: JSON.stringify({
            text: [request.text],
            target_lang: this.normalizeLanguageCode(request.targetLang),
            ...request.sourceLang && { source_lang: request.sourceLang }
          })
        });
        if (!response.ok) {
          const error = await response.json();
          throw new Error(
            `DeepL API error ${response.status}: ${error.message || "Unknown error"}`
          );
        }
        const data = await response.json();
        if (!data.translations || data.translations.length === 0) {
          throw new Error("No translation returned from DeepL API");
        }
        return {
          original: request.text,
          translated: data.translations[0].text,
          sourceLang: data.translations[0].detected_source_language,
          targetLang: request.targetLang
        };
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Translation failed: ${error.message}`);
        }
        throw new Error("Translation failed: Unknown error");
      }
    }
    /**
     * Get available languages from DeepL
     * Note: This is a static list. DeepL API doesn't provide a language list endpoint.
     */
    static getSupportedLanguages() {
      return [
        { code: "AUTO", name: "Auto-detect" },
        { code: "BG", name: "Bulgarian" },
        { code: "CS", name: "Czech" },
        { code: "DA", name: "Danish" },
        { code: "DE", name: "German" },
        { code: "EL", name: "Greek" },
        { code: "EN", name: "English" },
        { code: "ES", name: "Spanish" },
        { code: "ET", name: "Estonian" },
        { code: "FI", name: "Finnish" },
        { code: "FR", name: "French" },
        { code: "HU", name: "Hungarian" },
        { code: "ID", name: "Indonesian" },
        { code: "IT", name: "Italian" },
        { code: "JA", name: "Japanese" },
        { code: "KO", name: "Korean" },
        { code: "LT", name: "Lithuanian" },
        { code: "LV", name: "Latvian" },
        { code: "NB", name: "Norwegian" },
        { code: "NL", name: "Dutch" },
        { code: "PL", name: "Polish" },
        { code: "PT", name: "Portuguese" },
        { code: "RO", name: "Romanian" },
        { code: "RU", name: "Russian" },
        { code: "SK", name: "Slovak" },
        { code: "SL", name: "Slovenian" },
        { code: "SV", name: "Swedish" },
        { code: "TR", name: "Turkish" },
        { code: "UK", name: "Ukrainian" },
        { code: "ZH", name: "Chinese" }
      ];
    }
    /**
     * Normalize language code for DeepL API
     * DeepL uses uppercase codes, sometimes with region (e.g., PT-BR, EN-US)
     * @param langCode - Language code to normalize
     * @returns Normalized language code
     */
    normalizeLanguageCode(langCode) {
      let normalized = langCode.trim().toUpperCase();
      const specialCases = {
        "ENGLISH": "EN",
        "SPANISH": "ES",
        "FRENCH": "FR",
        "GERMAN": "DE",
        "PORTUGUESE": "PT",
        "CHINESE": "ZH",
        "JAPANESE": "JA",
        "KOREAN": "KO"
      };
      if (specialCases[normalized]) {
        normalized = specialCases[normalized];
      }
      return normalized;
    }
  };

  // src/ui/dialog.ts
  var TranslationDialog = class {
    constructor() {
      this.dialogKey = "deepl-translation-dialog";
    }
    /**
     * Show translation result in a dialog
     * @param result - Translation result to display
     * @param position - Optional position {x, y} for the dialog
     */
    showTranslationDialog(result, position) {
      const template = this.buildTemplate(result);
      const dialogConfig = {
        key: this.dialogKey,
        close: "outside",
        template,
        style: {
          backgroundColor: "var(--ls-primary-background-color)",
          color: "var(--ls-primary-text-color)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          maxWidth: "600px",
          width: "90vw"
        },
        attrs: {
          title: "\u{1F310} DeepL Translator"
        }
      };
      if (position) {
        dialogConfig.style.left = `${position.x}px`;
        dialogConfig.style.top = `${position.y}px`;
      }
      logseq.provideUI(dialogConfig);
    }
    /**
     * Show loading state dialog
     * @param position - Optional position {x, y} for the dialog
     */
    showLoadingDialog(position) {
      const template = `
      <div style="padding: 20px; text-align: center;">
        <div style="display: inline-block; animation: spin 1s linear infinite; font-size: 24px;">\u23F3</div>
        <p style="margin-top: 10px; color: var(--ls-secondary-text-color);">Translating...</p>
      </div>
    `;
      const dialogConfig = {
        key: this.dialogKey,
        close: "outside",
        template,
        style: {
          backgroundColor: "var(--ls-primary-background-color)",
          color: "var(--ls-primary-text-color)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          minWidth: "250px"
        },
        attrs: {
          title: "\u{1F310} DeepL Translator"
        }
      };
      if (position) {
        dialogConfig.style.left = `${position.x}px`;
        dialogConfig.style.top = `${position.y}px`;
      }
      logseq.provideUI(dialogConfig);
    }
    /**
     * Show error dialog
     * @param errorMessage - Error message to display
     * @param position - Optional position {x, y} for the dialog
     */
    showErrorDialog(errorMessage, position) {
      const template = `
      <div style="padding: 20px;">
        <div style="font-size: 24px; margin-bottom: 10px;">\u26A0\uFE0F</div>
        <h3 style="margin: 0 0 10px 0; color: var(--ls-primary-text-color);">Translation Error</h3>
        <p style="margin: 0; color: var(--ls-secondary-text-color); font-size: 14px;">
          ${this.escapeHtml(errorMessage)}
        </p>
      </div>
    `;
      const dialogConfig = {
        key: this.dialogKey,
        close: "outside",
        template,
        style: {
          backgroundColor: "var(--ls-primary-background-color)",
          color: "var(--ls-primary-text-color)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          minWidth: "300px"
        },
        attrs: {
          title: "\u{1F310} DeepL Translator"
        }
      };
      if (position) {
        dialogConfig.style.left = `${position.x}px`;
        dialogConfig.style.top = `${position.y}px`;
      }
      logseq.provideUI(dialogConfig);
    }
    /**
     * Close the translation dialog
     */
    closeDialog() {
      logseq.hideMainUI();
    }
    /**
     * Build HTML template for translation result
     */
    buildTemplate(result) {
      return `
      <div style="padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <div style="margin-bottom: 15px;">
          <div style="font-size: 12px; color: var(--ls-secondary-text-color); margin-bottom: 5px; text-transform: uppercase; font-weight: 600;">
            Source Text
            ${result.sourceLang ? `<span style="margin-left: 10px;">(${result.sourceLang})</span>` : ""}
          </div>
          <div style="
            background: var(--ls-secondary-background-color);
            padding: 12px;
            border-radius: 4px;
            line-height: 1.6;
            word-wrap: break-word;
            max-height: 150px;
            overflow-y: auto;
          ">
            ${this.escapeHtml(result.original)}
          </div>
        </div>

        <div style="
          text-align: center;
          margin: 12px 0;
          padding: 8px 0;
          border-top: 1px solid var(--ls-border-color);
          border-bottom: 1px solid var(--ls-border-color);
        ">
          \u2B07\uFE0F
        </div>

        <div style="margin-bottom: 15px;">
          <div style="font-size: 12px; color: var(--ls-secondary-text-color); margin-bottom: 5px; text-transform: uppercase; font-weight: 600;">
            Translated Text (${result.targetLang})
          </div>
          <div style="
            background: var(--ls-secondary-background-color);
            padding: 12px;
            border-radius: 4px;
            line-height: 1.6;
            word-wrap: break-word;
            max-height: 150px;
            overflow-y: auto;
          ">
            ${this.escapeHtml(result.translated)}
          </div>
        </div>

        <div style="
          text-align: right;
          font-size: 11px;
          color: var(--ls-secondary-text-color);
          margin-top: 10px;
        ">
          Powered by DeepL
        </div>
      </div>
    `;
    }
    /**
     * Escape HTML special characters to prevent XSS
     */
    escapeHtml(text) {
      const div = document.createElement("div");
      div.textContent = text;
      return div.innerHTML;
    }
  };

  // src/index.ts
  var pluginId = logseq2.id;
  var settingsSchema = [
    {
      key: "apiKey",
      type: "string",
      default: "",
      title: "DeepL API Key",
      description: "Your DeepL API key from https://www.deepl.com/docs-api"
    },
    {
      key: "defaultTargetLang",
      type: "string",
      default: "EN",
      title: "Default Target Language",
      description: "Default target language for translations (e.g., EN, DE, FR, ZH)"
    },
    {
      key: "isPro",
      type: "boolean",
      default: false,
      title: "Use Pro API",
      description: "Enable if you have a DeepL Pro account"
    }
  ];
  var deepLClient = null;
  var translationDialog;
  var menuRegistered = false;
  function initializeDeepLClient() {
    const settings = logseq.settings;
    if (!settings?.apiKey) {
      logseq.UI.showMsg(
        "\u26A0\uFE0F Please set your DeepL API key in the plugin settings",
        "warning"
      );
      return false;
    }
    try {
      const isPro = settings.isPro || false;
      deepLClient = new DeepLClient(settings.apiKey, isPro);
      return true;
    } catch (error) {
      logseq.UI.showMsg(
        `\u274C Failed to initialize DeepL client: ${error instanceof Error ? error.message : "Unknown error"}`,
        "error"
      );
      return false;
    }
  }
  async function getBlockContent(blockId) {
    try {
      const block = await logseq.Editor.getBlock(blockId, { includeChildren: false });
      console.log("Block data:", { blockId, block, keys: Object.keys(block || {}) });
      if (!block) {
        console.error("Block not found:", blockId);
        return null;
      }
      let content = block.content;
      if (!content && block["string"]) {
        content = block["string"];
      }
      if (!content && block.title) {
        content = block.title;
      }
      if (!content && block.text) {
        content = block.text;
      }
      console.log("Extracted content:", { blockId, content, length: content?.length });
      if (!content || content.trim().length === 0) {
        console.error("Block has no readable content:", { blockId, block });
        return null;
      }
      return content;
    } catch (error) {
      console.error("Failed to get block content:", { blockId, error });
      return null;
    }
  }
  async function getSubBlocks(blockId) {
    try {
      const block = await logseq.Editor.getBlock(blockId, { includeChildren: true });
      if (!block) {
        console.warn("Block not found for sub-blocks:", blockId);
        return [];
      }
      const children = block.children || [];
      console.log("Sub-blocks found:", { blockId, count: children.length, children: children.map((c) => ({ id: c.id || c.uuid, content: (c.content || "").substring(0, 50) })) });
      return children;
    } catch (error) {
      console.error("Failed to get sub-blocks:", { blockId, error });
      return [];
    }
  }
  function getBlockId(block) {
    if (block.uuid) return block.uuid;
    if (block["block/uuid"]) return block["block/uuid"];
    if (block.id && typeof block.id === "string") return block.id;
    if (block["db/id"] && typeof block["db/id"] === "number") {
      return block["db/id"].toString();
    }
    if (block.id && typeof block.id === "number") {
      return block.id.toString();
    }
    return null;
  }
  async function collectAllBlockIds(blockId) {
    const blockIds = [blockId];
    const children = await getSubBlocks(blockId);
    for (const child of children) {
      const childId = getBlockId(child);
      console.log("Processing child:", { blockId, childId, childKeys: Object.keys(child || {}) });
      if (childId) {
        const subBlockIds = await collectAllBlockIds(childId);
        blockIds.push(...subBlockIds);
      } else {
        console.warn("Child has no valid ID:", { blockId, child });
      }
    }
    return blockIds;
  }
  async function handleTranslation(blockId) {
    if (!deepLClient) {
      if (!initializeDeepLClient()) {
        return;
      }
    }
    translationDialog.showLoadingDialog();
    try {
      const blockContent = await getBlockContent(blockId);
      if (!blockContent) {
        translationDialog.showErrorDialog("Could not retrieve block content");
        return;
      }
      const settings = logseq.settings;
      const targetLang = settings?.defaultTargetLang || "EN";
      const translationRequest = {
        text: blockContent,
        targetLang,
        sourceLang: void 0
        // Let DeepL auto-detect by not specifying source_lang
      };
      if (!deepLClient) {
        translationDialog.showErrorDialog("DeepL client not initialized");
        return;
      }
      const result = await deepLClient.translate(translationRequest);
      translationDialog.showTranslationDialog(result);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Translation error:", error);
      translationDialog.showErrorDialog(errorMessage);
    }
  }
  async function handleInlineTranslation(blockId) {
    if (!deepLClient) {
      if (!initializeDeepLClient()) {
        return;
      }
    }
    try {
      const blockContent = await getBlockContent(blockId);
      if (!blockContent) {
        logseq.UI.showMsg("\u26A0\uFE0F Could not retrieve block content", "warning");
        return;
      }
      const settings = logseq.settings;
      const targetLang = settings?.defaultTargetLang || "EN";
      logseq.UI.showMsg("\u23F3 Translating...", "info");
      const translationRequest = {
        text: blockContent,
        targetLang,
        sourceLang: void 0
      };
      if (!deepLClient) {
        logseq.UI.showMsg("\u274C DeepL client not initialized", "error");
        return;
      }
      const result = await deepLClient.translate(translationRequest);
      await logseq.Editor.updateBlock(blockId, result.translated);
      logseq.UI.showMsg("\u2705 Block translated successfully", "success");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Inline translation error:", error);
      logseq.UI.showMsg(`\u274C ${errorMessage}`, "error");
    }
  }
  async function handleInlineTranslationWithSubBlocks(blockId) {
    if (!deepLClient) {
      if (!initializeDeepLClient()) {
        return;
      }
    }
    try {
      logseq.UI.showMsg("\u{1F4E6} Collecting blocks...", "info");
      const allBlockIds = await collectAllBlockIds(blockId);
      if (allBlockIds.length === 0) {
        logseq.UI.showMsg("\u26A0\uFE0F No blocks found to translate", "warning");
        return;
      }
      const settings = logseq.settings;
      const targetLang = settings?.defaultTargetLang || "EN";
      logseq.UI.showMsg(`\u23F3 Translating ${allBlockIds.length} block(s)...`, "info");
      let successCount = 0;
      let failureCount = 0;
      const failedErrors = [];
      for (const currentBlockId of allBlockIds) {
        try {
          const blockContent = await getBlockContent(currentBlockId);
          if (!blockContent) {
            failureCount++;
            failedErrors.push(`\u2022 Block ${currentBlockId}: No content found`);
            continue;
          }
          const translationRequest = {
            text: blockContent,
            targetLang,
            sourceLang: void 0
          };
          if (!deepLClient) {
            failureCount++;
            failedErrors.push(`\u2022 Block ${currentBlockId}: DeepL client not initialized`);
            continue;
          }
          const result = await deepLClient.translate(translationRequest);
          await logseq.Editor.updateBlock(currentBlockId, result.translated);
          successCount++;
        } catch (error) {
          const errorMsg = error instanceof Error ? error.message : "Unknown error";
          failureCount++;
          failedErrors.push(`\u2022 Block ${currentBlockId}: ${errorMsg}`);
        }
      }
      if (failureCount === 0) {
        logseq.UI.showMsg(`\u2705 Successfully translated all ${successCount} block(s)!`, "success");
      } else if (successCount === 0) {
        await translationDialog.showErrorDialog(
          `Failed to translate all blocks:

${failedErrors.join("\n")}`
        );
      } else {
        await translationDialog.showErrorDialog(
          `Translated ${successCount}/${allBlockIds.length} block(s)

Failed blocks:
${failedErrors.join("\n")}`
        );
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
      logseq.UI.showMsg(`\u274C ${errorMessage}`, "error");
    }
  }
  async function main() {
    console.info(`#${pluginId}: MAIN`);
    logseq.App.showMsg(`\u2764\uFE0F  Message from Plugin : ${pluginId}`);
    if (!translationDialog) {
      translationDialog = new TranslationDialog();
    }
    logseq.useSettingsSchema(settingsSchema);
    if (!menuRegistered) {
      logseq.Editor.registerBlockContextMenuItem(
        "\u{1F310} Translate",
        async (e) => {
          const blockId = typeof e === "string" ? e : e.blockId || e.uuid || e["block/uuid"];
          console.info(`Translating block:`, { blockId, eventType: typeof e, eventKeys: Object.keys(e || {}) });
          await handleTranslation(blockId);
        }
      );
      logseq.Editor.registerBlockContextMenuItem(
        "\u{1F310} Replace with Translation",
        async (e) => {
          const blockId = typeof e === "string" ? e : e.blockId || e.uuid || e["block/uuid"];
          console.info(`Inline translating block:`, { blockId });
          await handleInlineTranslation(blockId);
        }
      );
      logseq.Editor.registerBlockContextMenuItem(
        "\u{1F310} Replace with Translation + Sub-blocks",
        async (e) => {
          const blockId = typeof e === "string" ? e : e.blockId || e.uuid || e["block/uuid"];
          console.info(`Inline translating block with sub-blocks:`, { blockId });
          await handleInlineTranslationWithSubBlocks(blockId);
        }
      );
      menuRegistered = true;
    }
    console.info(`#${pluginId}: Loaded successfully`);
  }
  logseq.ready(main).catch(console.error);
})();
/*! Bundled license information:

@logseq/libs/dist/lsplugin.user.js:
  (*! For license information please see lsplugin.user.js.LICENSE.txt *)
*/
