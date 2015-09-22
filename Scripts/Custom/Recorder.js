﻿
//! version : 2.0.0
//! author  : Tal Ater @TalAter
//! license : MIT
//! https://www.TalAter.com/annyang/
(function (a) { "use strict"; var b = this, c = b.SpeechRecognition || b.webkitSpeechRecognition || b.mozSpeechRecognition || b.msSpeechRecognition || b.oSpeechRecognition; if (!c) return b.annyang = null, a; var d, e, f = [], g = { start: [], error: [], end: [], result: [], resultMatch: [], resultNoMatch: [], errorNetwork: [], errorPermissionBlocked: [], errorPermissionDenied: [] }, h = 0, i = !1, j = "font-weight: bold; color: #00f;", k = !1, l = /\s*\((.*?)\)\s*/g, m = /(\(\?:[^)]+\))\?/g, n = /(\(\?)?:\w+/g, o = /\*\w+/g, p = /[\-{}\[\]+?.,\\\^$|#]/g, q = function (a) { return a = a.replace(p, "\\$&").replace(l, "(?:$1)?").replace(n, function (a, b) { return b ? a : "([^\\s]+)" }).replace(o, "(.*?)").replace(m, "\\s*$1?\\s*"), new RegExp("^" + a + "$", "i") }, r = function (a) { var b = Array.prototype.slice.call(arguments, 1); a.forEach(function (a) { a.callback.apply(a.context, b) }) }, s = function () { t() || b.annyang.init({}, !1) }, t = function () { return d !== a }, u = function (a, c, d) { f.push({ command: a, callback: c, originalPhrase: d }), i && b.console.log("Command successfully loaded: %c" + d, j) }; b.annyang = { init: function (l, m) { m = m === a ? !0 : !!m, d && d.abort && d.abort(), d = new c, d.maxAlternatives = 5, d.continuous = "http:" === b.location.protocol, d.lang = "en-US", d.onstart = function () { r(g.start) }, d.onerror = function (a) { switch (r(g.error), a.error) { case "network": r(g.errorNetwork); break; case "not-allowed": case "service-not-allowed": e = !1, r((new Date).getTime() - h < 200 ? g.errorPermissionBlocked : g.errorPermissionDenied) } }, d.onend = function () { if (r(g.end), e) { var a = (new Date).getTime() - h; 1e3 > a ? setTimeout(b.annyang.start, 1e3 - a) : b.annyang.start() } }, d.onresult = function (a) { if (k) return i && b.console.log("Speech heard, but annyang is paused"), !1; for (var c = a.results[a.resultIndex], d = [], e = 0; e < c.length; e++) d[e] = c[e].transcript; r(g.result, d); for (var h, l = 0; l < d.length; l++) { h = d[l].trim(), i && b.console.log("Speech recognized: %c" + h, j); for (var m = 0, n = f.length; n > m; m++) { var o = f[m].command.exec(h); if (o) { var p = o.slice(1); return i && (b.console.log("command matched: %c" + f[m].originalPhrase, j), p.length && b.console.log("with parameters", p)), f[m].callback.apply(this, p), r(g.resultMatch, h, f[m].originalPhrase, d), !0 } } } return r(g.resultNoMatch, d), !1 }, m && (f = []), l.length && this.addCommands(l) }, start: function (c) { k = !1, s(), c = c || {}, e = c.autoRestart !== a ? !!c.autoRestart : !0, c.continuous !== a && (d.continuous = !!c.continuous), h = (new Date).getTime(); try { d.start() } catch (f) { i && b.console.log(f.message) } }, abort: function () { e = !1, t && d.abort() }, pause: function () { k = !0 }, resume: function () { b.annyang.start() }, debug: function (a) { i = arguments.length > 0 ? !!a : !0 }, setLanguage: function (a) { s(), d.lang = a }, addCommands: function (a) { var c; s(); for (var d in a) if (a.hasOwnProperty(d)) if (c = b[a[d]] || a[d], "function" == typeof c) u(q(d), c, d); else { if (!("object" == typeof c && c.regexp instanceof RegExp)) { i && b.console.log("Can not register command: %c" + d, j); continue } u(new RegExp(c.regexp.source, "i"), c.callback, d) } }, removeCommands: function (b) { return b === a ? void (f = []) : (b = Array.isArray(b) ? b : [b], void (f = f.filter(function (a) { for (var c = 0; c < b.length; c++) if (b[c] === a.originalPhrase) return !1; return !0 }))) }, addCallback: function (c, d, e) { if (g[c] !== a) { var f = b[d] || d; "function" == typeof f && g[c].push({ callback: f, context: e || this }) } } } }).call(this);