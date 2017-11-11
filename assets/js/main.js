if (! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = st.type(t);
            return "function" === i || st.isWindow(t) ? !1 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (st.isFunction(e)) return st.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return st.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (mt.test(e)) return st.filter(e, t, i);
                e = st.filter(e, t)
            }
            return st.grep(t, function(t) {
                return J.call(e, t) > -1 !== i
            })
        }

        function o(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s(t) {
            var e = {};
            return st.each(t.match(xt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function r() {
            Q.removeEventListener("DOMContentLoaded", r), t.removeEventListener("load", r), st.ready()
        }

        function a() {
            this.expando = st.expando + a.uid++
        }

        function l(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace($t, "-$&").toLowerCase(), i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Et.test(i) ? st.parseJSON(i) : i
                    } catch (o) {}
                    It.set(t, e, i)
                } else i = void 0;
            return i
        }

        function c(t, e, i, n) {
            var o, s = 1,
                r = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return st.css(t, e, "")
                },
                l = a(),
                c = i && i[3] || (st.cssNumber[e] ? "" : "px"),
                h = (st.cssNumber[e] || "px" !== c && +l) && Pt.exec(st.css(t, e));
            if (h && h[3] !== c) {
                c = c || h[3], i = i || [], h = +l || 1;
                do s = s || ".5", h /= s, st.style(t, e, h + c); while (s !== (s = a() / l) && 1 !== s && --r)
            }
            return i && (h = +h || +l || 0, o = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = o)), o
        }

        function h(t, e) {
            var i = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && st.nodeName(t, e) ? st.merge([t], i) : i
        }

        function u(t, e) {
            for (var i = 0, n = t.length; n > i; i++) kt.set(t[i], "globalEval", !e || kt.get(e[i], "globalEval"))
        }

        function d(t, e, i, n, o) {
            for (var s, r, a, l, c, d, p = e.createDocumentFragment(), f = [], m = 0, g = t.length; g > m; m++)
                if (s = t[m], s || 0 === s)
                    if ("object" === st.type(s)) st.merge(f, s.nodeType ? [s] : s);
                    else if (Nt.test(s)) {
                for (r = r || p.appendChild(e.createElement("div")), a = (Dt.exec(s) || ["", ""])[1].toLowerCase(), l = zt[a] || zt._default, r.innerHTML = l[1] + st.htmlPrefilter(s) + l[2], d = l[0]; d--;) r = r.lastChild;
                st.merge(f, r.childNodes), r = p.firstChild, r.textContent = ""
            } else f.push(e.createTextNode(s));
            for (p.textContent = "", m = 0; s = f[m++];)
                if (n && st.inArray(s, n) > -1) o && o.push(s);
                else if (c = st.contains(s.ownerDocument, s), r = h(p.appendChild(s), "script"), c && u(r), i)
                for (d = 0; s = r[d++];) Mt.test(s.type || "") && i.push(s);
            return p
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function m() {
            try {
                return Q.activeElement
            } catch (t) {}
        }

        function g(t, e, i, n, o, s) {
            var r, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) g(t, a, i, n, e[a], s);
                return t
            }
            if (null == n && null == o ? (o = i, n = i = void 0) : null == o && ("string" == typeof i ? (o = n, n = void 0) : (o = n, n = i, i = void 0)), o === !1) o = f;
            else if (!o) return t;
            return 1 === s && (r = o, o = function(t) {
                return st().off(t), r.apply(this, arguments)
            }, o.guid = r.guid || (r.guid = st.guid++)), t.each(function() {
                st.event.add(this, e, o, n, i)
            })
        }

        function v(t, e) {
            return st.nodeName(t, "table") && st.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function y(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function b(t) {
            var e = Bt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            var i, n, o, s, r, a, l, c;
            if (1 === e.nodeType) {
                if (kt.hasData(t) && (s = kt.access(t), r = kt.set(e, s), c = s.events)) {
                    delete r.handle, r.events = {};
                    for (o in c)
                        for (i = 0, n = c[o].length; n > i; i++) st.event.add(e, o, c[o][i])
                }
                It.hasData(t) && (a = It.access(t), l = st.extend({}, a), It.set(e, l))
            }
        }

        function x(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && Ot.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function C(t, e, i, n) {
            e = Z.apply([], e);
            var o, s, r, a, l, c, u = 0,
                p = t.length,
                f = p - 1,
                m = e[0],
                g = st.isFunction(m);
            if (g || p > 1 && "string" == typeof m && !nt.checkClone && Ht.test(m)) return t.each(function(o) {
                var s = t.eq(o);
                g && (e[0] = m.call(this, o, s.html())), C(s, e, i, n)
            });
            if (p && (o = d(e, t[0].ownerDocument, !1, t, n), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || n)) {
                for (r = st.map(h(o, "script"), y), a = r.length; p > u; u++) l = o, u !== f && (l = st.clone(l, !0, !0), a && st.merge(r, h(l, "script"))), i.call(t[u], l, u);
                if (a)
                    for (c = r[r.length - 1].ownerDocument, st.map(r, b), u = 0; a > u; u++) l = r[u], Mt.test(l.type || "") && !kt.access(l, "globalEval") && st.contains(c, l) && (l.src ? st._evalUrl && st._evalUrl(l.src) : st.globalEval(l.textContent.replace(Ut, "")))
            }
            return t
        }

        function S(t, e, i) {
            for (var n, o = e ? st.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || st.cleanData(h(n)), n.parentNode && (i && st.contains(n.ownerDocument, n) && u(h(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function T(t, e) {
            var i = st(e.createElement(t)).appendTo(e.body),
                n = st.css(i[0], "display");
            return i.detach(), n
        }

        function k(t) {
            var e = Q,
                i = Yt[t];
            return i || (i = T(t, e), "none" !== i && i || (Xt = (Xt || st("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Xt[0].contentDocument, e.write(), e.close(), i = T(t, e), Xt.detach()), Yt[t] = i), i
        }

        function I(t, e, i) {
            var n, o, s, r, a = t.style;
            return i = i || Gt(t), r = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== r && void 0 !== r || st.contains(t.ownerDocument, t) || (r = st.style(t, e)), i && !nt.pixelMarginRight() && Qt.test(r) && Vt.test(e) && (n = a.width, o = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = i.width, a.width = n, a.minWidth = o, a.maxWidth = s), void 0 !== r ? r + "" : r
        }

        function E(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function $(t) {
            if (t in ne) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--;)
                if (t = ie[i] + e, t in ne) return t
        }

        function A(t, e, i) {
            var n = Pt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function P(t, e, i, n, o) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; 4 > s; s += 2) "margin" === i && (r += st.css(t, i + _t[s], !0, o)), n ? ("content" === i && (r -= st.css(t, "padding" + _t[s], !0, o)), "margin" !== i && (r -= st.css(t, "border" + _t[s] + "Width", !0, o))) : (r += st.css(t, "padding" + _t[s], !0, o), "padding" !== i && (r += st.css(t, "border" + _t[s] + "Width", !0, o)));
            return r
        }

        function _(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Gt(t),
                r = "border-box" === st.css(t, "boxSizing", !1, s);
            if (0 >= o || null == o) {
                if (o = I(t, e, s), (0 > o || null == o) && (o = t.style[e]), Qt.test(o)) return o;
                n = r && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + P(t, e, i || (r ? "border" : "content"), n, s) + "px"
        }

        function L(t, e) {
            for (var i, n, o, s = [], r = 0, a = t.length; a > r; r++) n = t[r], n.style && (s[r] = kt.get(n, "olddisplay"), i = n.style.display, e ? (s[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Lt(n) && (s[r] = kt.access(n, "olddisplay", k(n.nodeName)))) : (o = Lt(n), "none" === i && o || kt.set(n, "olddisplay", o ? i : st.css(n, "display"))));
            for (r = 0; a > r; r++) n = t[r], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[r] || "" : "none"));
            return t
        }

        function O(t, e, i, n, o) {
            return new O.prototype.init(t, e, i, n, o)
        }

        function D() {
            return t.setTimeout(function() {
                oe = void 0
            }), oe = st.now()
        }

        function M(t, e) {
            var i, n = 0,
                o = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = _t[n], o["margin" + i] = o["padding" + i] = t;
            return e && (o.opacity = o.width = t), o
        }

        function z(t, e, i) {
            for (var n, o = (W.tweeners[e] || []).concat(W.tweeners["*"]), s = 0, r = o.length; r > s; s++)
                if (n = o[s].call(i, e, t)) return n
        }

        function N(t, e, i) {
            var n, o, s, r, a, l, c, h, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && Lt(t),
                m = kt.get(t, "fxshow");
            i.queue || (a = st._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, st.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], c = st.css(t, "display"), h = "none" === c ? kt.get(t, "olddisplay") || k(t.nodeName) : c, "inline" === h && "none" === st.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], re.exec(o)) {
                    if (delete e[n], s = s || "toggle" === o, o === (f ? "hide" : "show")) {
                        if ("show" !== o || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    d[n] = m && m[n] || st.style(t, n)
                } else c = void 0;
            if (st.isEmptyObject(d)) "inline" === ("none" === c ? k(t.nodeName) : c) && (p.display = c);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = kt.access(t, "fxshow", {}), s && (m.hidden = !f), f ? st(t).show() : u.done(function() {
                    st(t).hide()
                }), u.done(function() {
                    var e;
                    kt.remove(t, "fxshow");
                    for (e in d) st.style(t, e, d[e])
                });
                for (n in d) r = z(f ? m[n] : 0, n, u), n in m || (m[n] = r.start, f && (r.end = r.start, r.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function R(t, e) {
            var i, n, o, s, r;
            for (i in t)
                if (n = st.camelCase(i), o = e[n], s = t[i], st.isArray(s) && (o = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), r = st.cssHooks[n], r && "expand" in r) {
                    s = r.expand(s), delete t[n];
                    for (i in s) i in t || (t[i] = s[i], e[i] = o)
                } else e[n] = o
        }

        function W(t, e, i) {
            var n, o, s = 0,
                r = W.prefilters.length,
                a = st.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = oe || D(), i = Math.max(0, c.startTime + c.duration - e), n = i / c.duration || 0, s = 1 - n, r = 0, l = c.tweens.length; l > r; r++) c.tweens[r].run(s);
                    return a.notifyWith(t, [c, s, i]), 1 > s && l ? i : (a.resolveWith(t, [c]), !1)
                },
                c = a.promise({
                    elem: t,
                    props: st.extend({}, e),
                    opts: st.extend(!0, {
                        specialEasing: {},
                        easing: st.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: oe || D(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = st.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) c.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                    }
                }),
                h = c.props;
            for (R(h, c.opts.specialEasing); r > s; s++)
                if (n = W.prefilters[s].call(c, t, h, c.opts)) return st.isFunction(n.stop) && (st._queueHooks(c.elem, c.opts.queue).stop = st.proxy(n.stop, n)), n;
            return st.map(h, z, c), st.isFunction(c.opts.start) && c.opts.start.call(t, c), st.fx.timer(st.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function j(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function F(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    s = e.toLowerCase().match(xt) || [];
                if (st.isFunction(i))
                    for (; n = s[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function q(t, e, i, n) {
            function o(a) {
                var l;
                return s[a] = !0, st.each(t[a] || [], function(t, a) {
                    var c = a(e, i, n);
                    return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var s = {},
                r = t === Ie;
            return o(e.dataTypes[0]) || !s["*"] && o("*")
        }

        function H(t, e) {
            var i, n, o = st.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && st.extend(!0, t, n), t
        }

        function B(t, e, i) {
            for (var n, o, s, r, a = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
            if (n)
                for (o in a)
                    if (a[o] && a[o].test(n)) {
                        l.unshift(o);
                        break
                    }
            if (l[0] in i) s = l[0];
            else {
                for (o in i) {
                    if (!l[0] || t.converters[o + " " + l[0]]) {
                        s = o;
                        break
                    }
                    r || (r = o)
                }
                s = s || r
            }
            return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }

        function U(t, e, i, n) {
            var o, s, r, a, l, c = {},
                h = t.dataTypes.slice();
            if (h[1])
                for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
            for (s = h.shift(); s;)
                if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = h.shift())
                    if ("*" === s) s = l;
                    else if ("*" !== l && l !== s) {
                if (r = c[l + " " + s] || c["* " + s], !r)
                    for (o in c)
                        if (a = o.split(" "), a[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                            r === !0 ? r = c[o] : c[o] !== !0 && (s = a[0], h.unshift(a[1]));
                            break
                        }
                if (r !== !0)
                    if (r && t["throws"]) e = r(e);
                    else try {
                        e = r(e)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: r ? u : "No conversion from " + l + " to " + s
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function X(t, e, i, n) {
            var o;
            if (st.isArray(e)) st.each(e, function(e, o) {
                i || Pe.test(t) ? n(t, o) : X(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== st.type(e)) n(t, e);
            else
                for (o in e) X(t + "[" + o + "]", e[o], i, n)
        }

        function Y(t) {
            return st.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var V = [],
            Q = t.document,
            G = V.slice,
            Z = V.concat,
            K = V.push,
            J = V.indexOf,
            tt = {},
            et = tt.toString,
            it = tt.hasOwnProperty,
            nt = {},
            ot = "2.2.4",
            st = function(t, e) {
                return new st.fn.init(t, e)
            },
            rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            at = /^-ms-/,
            lt = /-([\da-z])/gi,
            ct = function(t, e) {
                return e.toUpperCase()
            };
        st.fn = st.prototype = {
            jquery: ot,
            constructor: st,
            selector: "",
            length: 0,
            toArray: function() {
                return G.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
            },
            pushStack: function(t) {
                var e = st.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return st.each(this, t)
            },
            map: function(t) {
                return this.pushStack(st.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(G.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: K,
            sort: V.sort,
            splice: V.splice
        }, st.extend = st.fn.extend = function() {
            var t, e, i, n, o, s, r = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof r && (c = r, r = arguments[a] || {}, a++), "object" == typeof r || st.isFunction(r) || (r = {}), a === l && (r = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = r[e], n = t[e], r !== n && (c && n && (st.isPlainObject(n) || (o = st.isArray(n))) ? (o ? (o = !1, s = i && st.isArray(i) ? i : []) : s = i && st.isPlainObject(i) ? i : {}, r[e] = st.extend(c, s, n)) : void 0 !== n && (r[e] = n));
            return r
        }, st.extend({
            expando: "jQuery" + (ot + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === st.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !st.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== st.type(t) || t.nodeType || st.isWindow(t)) return !1;
                if (t.constructor && !it.call(t, "constructor") && !it.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || it.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                t = st.trim(t), t && (1 === t.indexOf("use strict") ? (e = Q.createElement("script"), e.text = t, Q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(at, "ms-").replace(lt, ct)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, o = 0;
                if (i(t))
                    for (n = t.length; n > o && e.call(t[o], o, t[o]) !== !1; o++);
                else
                    for (o in t)
                        if (e.call(t[o], o, t[o]) === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(rt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? st.merge(n, "string" == typeof t ? [t] : t) : K.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : J.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, o = t.length; i > n; n++) t[o++] = e[n];
                return t.length = o, t
            },
            grep: function(t, e, i) {
                for (var n, o = [], s = 0, r = t.length, a = !i; r > s; s++) n = !e(t[s], s), n !== a && o.push(t[s]);
                return o
            },
            map: function(t, e, n) {
                var o, s, r = 0,
                    a = [];
                if (i(t))
                    for (o = t.length; o > r; r++) s = e(t[r], r, n), null != s && a.push(s);
                else
                    for (r in t) s = e(t[r], r, n), null != s && a.push(s);
                return Z.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, o;
                return "string" == typeof e && (i = t[e], e = t, t = i), st.isFunction(t) ? (n = G.call(arguments, 2), o = function() {
                    return t.apply(e || this, n.concat(G.call(arguments)))
                }, o.guid = t.guid = t.guid || st.guid++, o) : void 0
            },
            now: Date.now,
            support: nt
        }), "function" == typeof Symbol && (st.fn[Symbol.iterator] = V[Symbol.iterator]), st.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            tt["[object " + e + "]"] = e.toLowerCase()
        });
        var ht = function(t) {
            function e(t, e, i, n) {
                var o, s, r, a, l, c, u, p, f = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
                if (!n && ((e ? e.ownerDocument || e : j) !== L && _(e), e = e || L, D)) {
                    if (11 !== m && (c = vt.exec(t)))
                        if (o = c[1]) {
                            if (9 === m) {
                                if (!(r = e.getElementById(o))) return i;
                                if (r.id === o) return i.push(r), i
                            } else if (f && (r = f.getElementById(o)) && R(e, r) && r.id === o) return i.push(r), i
                        } else {
                            if (c[2]) return K.apply(i, e.getElementsByTagName(t)), i;
                            if ((o = c[3]) && x.getElementsByClassName && e.getElementsByClassName) return K.apply(i, e.getElementsByClassName(o)), i
                        }
                    if (x.qsa && !U[t + " "] && (!M || !M.test(t))) {
                        if (1 !== m) f = e, p = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = W), u = k(t), s = u.length, l = dt.test(a) ? "#" + a : "[id='" + a + "']"; s--;) u[s] = l + " " + d(u[s]);
                            p = u.join(","), f = yt.test(t) && h(e.parentNode) || e
                        }
                        if (p) try {
                            return K.apply(i, f.querySelectorAll(p)), i
                        } catch (g) {} finally {
                            a === W && e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(at, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > C.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = L.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) C.attrHandle[i[n]] = e
            }

            function r(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function c(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var o, s = t([], i.length, e), r = s.length; r--;) i[o = s[r]] && (i[o] = !(n[o] = i[o]))
                    })
                })
            }

            function h(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function u() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    o = i && "parentNode" === n,
                    s = q++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || o) return t(e, i, s)
                } : function(e, i, r) {
                    var a, l, c, h = [F, s];
                    if (r) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || o) && t(e, i, r)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) {
                                if (c = e[W] || (e[W] = {}), l = c[e.uniqueID] || (c[e.uniqueID] = {}), (a = l[n]) && a[0] === F && a[1] === s) return h[2] = a[2];
                                if (l[n] = h, h[2] = t(e, i, r)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var o = t.length; o--;)
                        if (!t[o](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var o = 0, s = i.length; s > o; o++) e(t, i[o], n);
                return n
            }

            function g(t, e, i, n, o) {
                for (var s, r = [], a = 0, l = t.length, c = null != e; l > a; a++)(s = t[a]) && (i && !i(s, n, o) || (r.push(s), c && e.push(a)));
                return r
            }

            function v(t, e, i, o, s, r) {
                return o && !o[W] && (o = v(o)), s && !s[W] && (s = v(s, r)), n(function(n, r, a, l) {
                    var c, h, u, d = [],
                        p = [],
                        f = r.length,
                        v = n || m(e || "*", a.nodeType ? [a] : a, []),
                        y = !t || !n && e ? v : g(v, d, t, a, l),
                        b = i ? s || (n ? t : f || o) ? [] : r : y;
                    if (i && i(y, b, a, l), o)
                        for (c = g(b, p), o(c, [], a, l), h = c.length; h--;)(u = c[h]) && (b[p[h]] = !(y[p[h]] = u));
                    if (n) {
                        if (s || t) {
                            if (s) {
                                for (c = [], h = b.length; h--;)(u = b[h]) && c.push(y[h] = u);
                                s(null, b = [], c, l)
                            }
                            for (h = b.length; h--;)(u = b[h]) && (c = s ? tt(n, u) : d[h]) > -1 && (n[c] = !(r[c] = u))
                        }
                    } else b = g(b === r ? b.splice(f, b.length) : b), s ? s(null, r, b, l) : K.apply(r, b)
                })
            }

            function y(t) {
                for (var e, i, n, o = t.length, s = C.relative[t[0].type], r = s || C.relative[" "], a = s ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, r, !0), c = p(function(t) {
                        return tt(e, t) > -1
                    }, r, !0), h = [function(t, i, n) {
                        var o = !s && (n || i !== $) || ((e = i).nodeType ? l(t, i, n) : c(t, i, n));
                        return e = null, o
                    }]; o > a; a++)
                    if (i = C.relative[t[a].type]) h = [p(f(h), i)];
                    else {
                        if (i = C.filter[t[a].type].apply(null, t[a].matches), i[W]) {
                            for (n = ++a; o > n && !C.relative[t[n].type]; n++);
                            return v(a > 1 && f(h), a > 1 && d(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(at, "$1"), i, n > a && y(t.slice(a, n)), o > n && y(t = t.slice(n)), o > n && d(t))
                        }
                        h.push(i)
                    }
                return f(h)
            }

            function b(t, i) {
                var o = i.length > 0,
                    s = t.length > 0,
                    r = function(n, r, a, l, c) {
                        var h, u, d, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            y = $,
                            b = n || s && C.find.TAG("*", c),
                            w = F += null == y ? 1 : Math.random() || .1,
                            x = b.length;
                        for (c && ($ = r === L || r || c); f !== x && null != (h = b[f]); f++) {
                            if (s && h) {
                                for (u = 0, r || h.ownerDocument === L || (_(h), a = !D); d = t[u++];)
                                    if (d(h, r || L, a)) {
                                        l.push(h);
                                        break
                                    }
                                c && (F = w)
                            }
                            o && ((h = !d && h) && p--, n && m.push(h))
                        }
                        if (p += f, o && f !== p) {
                            for (u = 0; d = i[u++];) d(m, v, r, a);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                                v = g(v)
                            }
                            K.apply(l, v), c && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return c && (F = w, $ = y), m
                    };
                return o ? n(r) : r
            }
            var w, x, C, S, T, k, I, E, $, A, P, _, L, O, D, M, z, N, R, W = "sizzle" + 1 * new Date,
                j = t.document,
                F = 0,
                q = 0,
                H = i(),
                B = i(),
                U = i(),
                X = function(t, e) {
                    return t === e && (P = !0), 0
                },
                Y = 1 << 31,
                V = {}.hasOwnProperty,
                Q = [],
                G = Q.pop,
                Z = Q.push,
                K = Q.push,
                J = Q.slice,
                tt = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                it = "[\\x20\\t\\r\\n\\f]",
                nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ot = "\\[" + it + "*(" + nt + ")(?:" + it + "*([*^$|!~]?=)" + it + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + nt + "))|)" + it + "*\\]",
                st = ":(" + nt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)",
                rt = new RegExp(it + "+", "g"),
                at = new RegExp("^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$", "g"),
                lt = new RegExp("^" + it + "*," + it + "*"),
                ct = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
                ht = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
                ut = new RegExp(st),
                dt = new RegExp("^" + nt + "$"),
                pt = {
                    ID: new RegExp("^#(" + nt + ")"),
                    CLASS: new RegExp("^\\.(" + nt + ")"),
                    TAG: new RegExp("^(" + nt + "|[*])"),
                    ATTR: new RegExp("^" + ot),
                    PSEUDO: new RegExp("^" + st),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + it + "*(even|odd|(([+-]|)(\\d*)n|)" + it + "*(?:([+-]|)" + it + "*(\\d+)|))" + it + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + it + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + it + "*((?:-\\d)?\\d*)" + it + "*\\)|)(?=[^-]|$)", "i")
                },
                ft = /^(?:input|select|textarea|button)$/i,
                mt = /^h\d$/i,
                gt = /^[^{]+\{\s*\[native \w/,
                vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                yt = /[+~]/,
                bt = /'|\\/g,
                wt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
                xt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                Ct = function() {
                    _()
                };
            try {
                K.apply(Q = J.call(j.childNodes), j.childNodes), Q[j.childNodes.length].nodeType
            } catch (St) {
                K = {
                    apply: Q.length ? function(t, e) {
                        Z.apply(t, J.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            x = e.support = {}, T = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, _ = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : j;
                return n !== L && 9 === n.nodeType && n.documentElement ? (L = n, O = L.documentElement, D = !T(L), (i = L.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", Ct, !1) : i.attachEvent && i.attachEvent("onunload", Ct)), x.attributes = o(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function(t) {
                    return t.appendChild(L.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = gt.test(L.getElementsByClassName), x.getById = o(function(t) {
                    return O.appendChild(t).id = W, !L.getElementsByName || !L.getElementsByName(W).length
                }), x.getById ? (C.find.ID = function(t, e) {
                    if ("undefined" != typeof e.getElementById && D) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, C.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function(t) {
                    var e = t.replace(wt, xt);
                    return function(t) {
                        var i = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), C.find.TAG = x.getElementsByTagName ? function(t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        o = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[o++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, C.find.CLASS = x.getElementsByClassName && function(t, e) {
                    return "undefined" != typeof e.getElementsByClassName && D ? e.getElementsByClassName(t) : void 0
                }, z = [], M = [], (x.qsa = gt.test(L.querySelectorAll)) && (o(function(t) {
                    O.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + it + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + it + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + W + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || M.push(".#.+[+~]")
                }), o(function(t) {
                    var e = L.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + it + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (x.matchesSelector = gt.test(N = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && o(function(t) {
                    x.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), z.push("!=", st)
                }), M = M.length && new RegExp(M.join("|")), z = z.length && new RegExp(z.join("|")), e = gt.test(O.compareDocumentPosition), R = e || gt.test(O.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, X = e ? function(t, e) {
                    if (t === e) return P = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i ? i : (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !x.sortDetached && e.compareDocumentPosition(t) === i ? t === L || t.ownerDocument === j && R(j, t) ? -1 : e === L || e.ownerDocument === j && R(j, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return P = !0, 0;
                    var i, n = 0,
                        o = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!o || !s) return t === L ? -1 : e === L ? 1 : o ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (o === s) return r(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? r(a[n], l[n]) : a[n] === j ? -1 : l[n] === j ? 1 : 0
                }, L) : L
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== L && _(t), i = i.replace(ht, "='$1']"), x.matchesSelector && D && !U[i + " "] && (!z || !z.test(i)) && (!M || !M.test(i))) try {
                    var n = N.call(t, i);
                    if (n || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (o) {}
                return e(i, L, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== L && _(t), R(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== L && _(t);
                var i = C.attrHandle[e.toLowerCase()],
                    n = i && V.call(C.attrHandle, e.toLowerCase()) ? i(t, e, !D) : void 0;
                return void 0 !== n ? n : x.attributes || !D ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    o = 0;
                if (P = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(X), P) {
                    for (; e = t[o++];) e === t[o] && (n = i.push(o));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
            }, S = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += S(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[n++];) i += S(e);
                return i
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ut.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(wt, xt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) && H(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(o) {
                            var s = e.attr(o, t);
                            return null == s ? "!=" === i : i ? (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i ? s === n || s.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, o) {
                        var s = "nth" !== t.slice(0, 3),
                            r = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === o ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var c, h, u, d, p, f, m = s !== r ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = a && e.nodeName.toLowerCase(),
                                y = !l && !a,
                                b = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (d = e; d = d[m];)
                                            if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [r ? g.firstChild : g.lastChild], r && y) {
                                    for (d = g, u = d[W] || (d[W] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], b = p && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (b = p = 0) || f.pop();)
                                        if (1 === d.nodeType && ++b && d === e) {
                                            h[t] = [F, p, b];
                                            break
                                        }
                                } else if (y && (d = e, u = d[W] || (d[W] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), c = h[t] || [], p = c[0] === F && c[1], b = p), b === !1)
                                    for (;
                                        (d = ++p && d && d[m] || (b = p = 0) || f.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[W] || (d[W] = {}), h = u[d.uniqueID] || (u[d.uniqueID] = {}), h[t] = [F, b]), d !== e)););
                                return b -= o, b === n || b % n === 0 && b / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var o, s = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[W] ? s(i) : s.length > 1 ? (o = [t, t, "", i], C.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, o = s(t, i), r = o.length; r--;) n = tt(t, o[r]), t[n] = !(e[n] = o[r])
                        }) : function(t) {
                            return s(t, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            o = I(t.replace(at, "$1"));
                        return o[W] ? n(function(t, e, i, n) {
                            for (var s, r = o(t, null, n, []), a = t.length; a--;)(s = r[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, n, s) {
                            return e[0] = t, o(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(wt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || S(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === O
                    },
                    focus: function(t) {
                        return t === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !C.pseudos.empty(t)
                    },
                    header: function(t) {
                        return mt.test(t.nodeName)
                    },
                    input: function(t) {
                        return ft.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(t, e) {
                        return [e - 1]
                    }),
                    eq: c(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: c(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: c(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: c(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) C.pseudos[w] = a(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) C.pseudos[w] = l(w);
            return u.prototype = C.filters = C.pseudos, C.setFilters = new u, k = e.tokenize = function(t, i) {
                var n, o, s, r, a, l, c, h = B[t + " "];
                if (h) return i ? 0 : h.slice(0);
                for (a = t, l = [], c = C.preFilter; a;) {
                    n && !(o = lt.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(s = [])), n = !1, (o = ct.exec(a)) && (n = o.shift(), s.push({
                        value: n,
                        type: o[0].replace(at, " ")
                    }), a = a.slice(n.length));
                    for (r in C.filter) !(o = pt[r].exec(a)) || c[r] && !(o = c[r](o)) || (n = o.shift(), s.push({
                        value: n,
                        type: r,
                        matches: o
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : B(t, l).slice(0)
            }, I = e.compile = function(t, e) {
                var i, n = [],
                    o = [],
                    s = U[t + " "];
                if (!s) {
                    for (e || (e = k(t)), i = e.length; i--;) s = y(e[i]), s[W] ? n.push(s) : o.push(s);
                    s = U(t, b(o, n)), s.selector = t
                }
                return s
            }, E = e.select = function(t, e, i, n) {
                var o, s, r, a, l, c = "function" == typeof t && t,
                    u = !n && k(t = c.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (s = u[0] = u[0].slice(0), s.length > 2 && "ID" === (r = s[0]).type && x.getById && 9 === e.nodeType && D && C.relative[s[1].type]) {
                        if (e = (C.find.ID(r.matches[0].replace(wt, xt), e) || [])[0], !e) return i;
                        c && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (o = pt.needsContext.test(t) ? 0 : s.length; o-- && (r = s[o], !C.relative[a = r.type]);)
                        if ((l = C.find[a]) && (n = l(r.matches[0].replace(wt, xt), yt.test(s[0].type) && h(e.parentNode) || e))) {
                            if (s.splice(o, 1), t = n.length && d(s), !t) return K.apply(i, n), i;
                            break
                        }
                }
                return (c || I(t, u))(n, e, !D, i, !e || yt.test(t) && h(e.parentNode) || e), i
            }, x.sortStable = W.split("").sort(X).join("") === W, x.detectDuplicates = !!P, _(), x.sortDetached = o(function(t) {
                return 1 & t.compareDocumentPosition(L.createElement("div"))
            }), o(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), o(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(et, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        st.find = ht, st.expr = ht.selectors, st.expr[":"] = st.expr.pseudos, st.uniqueSort = st.unique = ht.uniqueSort, st.text = ht.getText, st.isXMLDoc = ht.isXML, st.contains = ht.contains;
        var ut = function(t, e, i) {
                for (var n = [], o = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (o && st(t).is(i)) break;
                        n.push(t)
                    }
                return n
            },
            dt = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            pt = st.expr.match.needsContext,
            ft = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^.[^:#\[\.,]*$/;
        st.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? st.find.matchesSelector(n, t) ? [n] : [] : st.find.matches(t, st.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, st.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    o = this;
                if ("string" != typeof t) return this.pushStack(st(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (st.contains(o[e], this)) return !0
                }));
                for (e = 0; i > e; e++) st.find(t, o[e], n);
                return n = this.pushStack(i > 1 ? st.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && pt.test(t) ? st(t) : t || [], !1).length
            }
        });
        var gt, vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            yt = st.fn.init = function(t, e, i) {
                var n, o;
                if (!t) return this;
                if (i = i || gt, "string" == typeof t) {
                    if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : vt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof st ? e[0] : e, st.merge(this, st.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : Q, !0)), ft.test(n[1]) && st.isPlainObject(e))
                            for (n in e) st.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return o = Q.getElementById(n[2]), o && o.parentNode && (this.length = 1, this[0] = o), this.context = Q, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : st.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(st) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), st.makeArray(t, this))
            };
        yt.prototype = st.fn, gt = st(Q);
        var bt = /^(?:parents|prev(?:Until|All))/,
            wt = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        st.fn.extend({
            has: function(t) {
                var e = st(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (st.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, s = [], r = pt.test(t) || "string" != typeof t ? st(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && st.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        }
                return this.pushStack(s.length > 1 ? st.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? J.call(st(t), this[0]) : J.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(st.uniqueSort(st.merge(this.get(), st(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), st.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return ut(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return ut(t, "parentNode", i)
            },
            next: function(t) {
                return o(t, "nextSibling")
            },
            prev: function(t) {
                return o(t, "previousSibling")
            },
            nextAll: function(t) {
                return ut(t, "nextSibling")
            },
            prevAll: function(t) {
                return ut(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return ut(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return ut(t, "previousSibling", i)
            },
            siblings: function(t) {
                return dt((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return dt(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || st.merge([], t.childNodes)
            }
        }, function(t, e) {
            st.fn[t] = function(i, n) {
                var o = st.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = st.filter(n, o)), this.length > 1 && (wt[t] || st.uniqueSort(o), bt.test(t) && o.reverse()), this.pushStack(o)
            }
        });
        var xt = /\S+/g;
        st.Callbacks = function(t) {
            t = "string" == typeof t ? s(t) : st.extend({}, t);
            var e, i, n, o, r = [],
                a = [],
                l = -1,
                c = function() {
                    for (o = t.once, n = e = !0; a.length; l = -1)
                        for (i = a.shift(); ++l < r.length;) r[l].apply(i[0], i[1]) === !1 && t.stopOnFalse && (l = r.length, i = !1);
                    t.memory || (i = !1), e = !1, o && (r = i ? [] : "")
                },
                h = {
                    add: function() {
                        return r && (i && !e && (l = r.length - 1, a.push(i)), function n(e) {
                            st.each(e, function(e, i) {
                                st.isFunction(i) ? t.unique && h.has(i) || r.push(i) : i && i.length && "string" !== st.type(i) && n(i)
                            })
                        }(arguments), i && !e && c()), this
                    },
                    remove: function() {
                        return st.each(arguments, function(t, e) {
                            for (var i;
                                (i = st.inArray(e, r, i)) > -1;) r.splice(i, 1), l >= i && l--
                        }), this
                    },
                    has: function(t) {
                        return t ? st.inArray(t, r) > -1 : r.length > 0
                    },
                    empty: function() {
                        return r && (r = []), this
                    },
                    disable: function() {
                        return o = a = [], r = i = "", this
                    },
                    disabled: function() {
                        return !r
                    },
                    lock: function() {
                        return o = a = [], i || (r = i = ""), this
                    },
                    locked: function() {
                        return !!o
                    },
                    fireWith: function(t, i) {
                        return o || (i = i || [], i = [t, i.slice ? i.slice() : i], a.push(i), e || c()), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return h
        }, st.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", st.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", st.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", st.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return st.Deferred(function(i) {
                                st.each(e, function(e, s) {
                                    var r = st.isFunction(t[e]) && t[e];
                                    o[s[1]](function() {
                                        var t = r && r.apply(this, arguments);
                                        t && st.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, r ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? st.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, st.each(e, function(t, s) {
                    var r = s[2],
                        a = s[3];
                    n[s[1]] = r.add, a && r.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[s[0]] = function() {
                        return o[s[0] + "With"](this === o ? n : this, arguments), this
                    }, o[s[0] + "With"] = r.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, o = 0,
                    s = G.call(arguments),
                    r = s.length,
                    a = 1 !== r || t && st.isFunction(t.promise) ? r : 0,
                    l = 1 === a ? t : st.Deferred(),
                    c = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? G.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (r > 1)
                    for (e = new Array(r), i = new Array(r), n = new Array(r); r > o; o++) s[o] && st.isFunction(s[o].promise) ? s[o].promise().progress(c(o, i, e)).done(c(o, n, s)).fail(l.reject) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var Ct;
        st.fn.ready = function(t) {
            return st.ready.promise().done(t), this
        }, st.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? st.readyWait++ : st.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --st.readyWait : st.isReady) || (st.isReady = !0, t !== !0 && --st.readyWait > 0 || (Ct.resolveWith(Q, [st]), st.fn.triggerHandler && (st(Q).triggerHandler("ready"), st(Q).off("ready"))))
            }
        }), st.ready.promise = function(e) {
            return Ct || (Ct = st.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? t.setTimeout(st.ready) : (Q.addEventListener("DOMContentLoaded", r), t.addEventListener("load", r))), Ct.promise(e)
        }, st.ready.promise();
        var St = function(t, e, i, n, o, s, r) {
                var a = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === st.type(i)) {
                    o = !0;
                    for (a in i) St(t, e, a, i[a], !0, s, r)
                } else if (void 0 !== n && (o = !0, st.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(st(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                return o ? t : c ? e.call(t) : l ? e(t[0], i) : s
            },
            Tt = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        a.uid = 1, a.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!Tt(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, Tt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, o = this.cache(t);
                if ("string" == typeof e) o[e] = i;
                else
                    for (n in e) o[n] = e[n];
                return o
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? (n = this.get(t, e), void 0 !== n ? n : this.get(t, st.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, o, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        st.isArray(e) ? n = e.concat(e.map(st.camelCase)) : (o = st.camelCase(e), e in s ? n = [e, o] : (n = o, n = n in s ? [n] : n.match(xt) || [])), i = n.length;
                        for (; i--;) delete s[n[i]]
                    }(void 0 === e || st.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !st.isEmptyObject(e)
            }
        };
        var kt = new a,
            It = new a,
            Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            $t = /[A-Z]/g;
        st.extend({
            hasData: function(t) {
                return It.hasData(t) || kt.hasData(t)
            },
            data: function(t, e, i) {
                return It.access(t, e, i)
            },
            removeData: function(t, e) {
                It.remove(t, e)
            },
            _data: function(t, e, i) {
                return kt.access(t, e, i)
            },
            _removeData: function(t, e) {
                kt.remove(t, e)
            }
        }), st.fn.extend({
            data: function(t, e) {
                var i, n, o, s = this[0],
                    r = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (o = It.get(s), 1 === s.nodeType && !kt.get(s, "hasDataAttrs"))) {
                        for (i = r.length; i--;) r[i] && (n = r[i].name, 0 === n.indexOf("data-") && (n = st.camelCase(n.slice(5)), l(s, n, o[n])));
                        kt.set(s, "hasDataAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function() {
                    It.set(this, t)
                }) : St(this, function(e) {
                    var i, n;
                    if (s && void 0 === e) {
                        if (i = It.get(s, t) || It.get(s, t.replace($t, "-$&").toLowerCase()), void 0 !== i) return i;
                        if (n = st.camelCase(t), i = It.get(s, n), void 0 !== i) return i;
                        if (i = l(s, n, void 0), void 0 !== i) return i
                    } else n = st.camelCase(t), this.each(function() {
                        var i = It.get(this, n);
                        It.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && It.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    It.remove(this, t)
                })
            }
        }), st.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = kt.get(t, e), i && (!n || st.isArray(i) ? n = kt.access(t, e, st.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = st.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    s = st._queueHooks(t, e),
                    r = function() {
                        st.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete s.stop, o.call(t, r, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return kt.get(t, i) || kt.access(t, i, {
                    empty: st.Callbacks("once memory").add(function() {
                        kt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), st.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? st.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = st.queue(this, t, e);
                    st._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && st.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    st.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    o = st.Deferred(),
                    s = this,
                    r = this.length,
                    a = function() {
                        --n || o.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; r--;) i = kt.get(s[r], t + "queueHooks"), i && i.empty && (n++, i.empty.add(a));
                return a(), o.promise(e)
            }
        });
        var At = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Pt = new RegExp("^(?:([+-])=|)(" + At + ")([a-z%]*)$", "i"),
            _t = ["Top", "Right", "Bottom", "Left"],
            Lt = function(t, e) {
                return t = e || t, "none" === st.css(t, "display") || !st.contains(t.ownerDocument, t)
            },
            Ot = /^(?:checkbox|radio)$/i,
            Dt = /<([\w:-]+)/,
            Mt = /^$|\/(?:java|ecma)script/i,
            zt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        zt.optgroup = zt.option, zt.tbody = zt.tfoot = zt.colgroup = zt.caption = zt.thead, zt.th = zt.td;
        var Nt = /<|&#?\w+;/;
        ! function() {
            var t = Q.createDocumentFragment(),
                e = t.appendChild(Q.createElement("div")),
                i = Q.createElement("input");
            i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var Rt = /^key/,
            Wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            jt = /^([^.]*)(?:\.(.+)|)/;
        st.event = {
            global: {},
            add: function(t, e, i, n, o) {
                var s, r, a, l, c, h, u, d, p, f, m, g = kt.get(t);
                if (g)
                    for (i.handler && (s = i, i = s.handler, o = s.selector), i.guid || (i.guid = st.guid++), (l = g.events) || (l = g.events = {}), (r = g.handle) || (r = g.handle = function(e) {
                            return "undefined" != typeof st && st.event.triggered !== e.type ? st.event.dispatch.apply(t, arguments) : void 0
                        }), e = (e || "").match(xt) || [""], c = e.length; c--;) a = jt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p && (u = st.event.special[p] || {}, p = (o ? u.delegateType : u.bindType) || p, u = st.event.special[p] || {}, h = st.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: o,
                        needsContext: o && st.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, s), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(t, n, f, r) !== !1 || t.addEventListener && t.addEventListener(p, r)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), o ? d.splice(d.delegateCount++, 0, h) : d.push(h), st.event.global[p] = !0)
            },
            remove: function(t, e, i, n, o) {
                var s, r, a, l, c, h, u, d, p, f, m, g = kt.hasData(t) && kt.get(t);
                if (g && (l = g.events)) {
                    for (e = (e || "").match(xt) || [""], c = e.length; c--;)
                        if (a = jt.exec(e[c]) || [], p = m = a[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = st.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = l[p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = d.length; s--;) h = d[s], !o && m !== h.origType || i && i.guid !== h.guid || a && !a.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(s, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                            r && !d.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || st.removeEvent(t, p, g.handle), delete l[p])
                        } else
                            for (p in l) st.event.remove(t, p + e[c], i, n, !0);
                    st.isEmptyObject(l) && kt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = st.event.fix(t);
                var e, i, n, o, s, r = [],
                    a = G.call(arguments),
                    l = (kt.get(this, "events") || {})[t.type] || [],
                    c = st.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (r = st.event.handlers.call(this, t, l), e = 0;
                        (o = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = o.elem, i = 0;
                            (s = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, n = ((st.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, a), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, o, s, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) s = e[i], o = s.selector + " ", void 0 === n[o] && (n[o] = s.needsContext ? st(o, this).index(l) > -1 : st.find(o, this, null, [l]).length), n[o] && n.push(s);
                            n.length && r.push({
                                elem: l,
                                handlers: n
                            })
                        }
                return a < e.length && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, o, s = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || Q, n = i.documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[st.expando]) return t;
                var e, i, n, o = t.type,
                    s = t,
                    r = this.fixHooks[o];
                for (r || (this.fixHooks[o] = r = Wt.test(o) ? this.mouseHooks : Rt.test(o) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new st.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = Q), 3 === t.target.nodeType && (t.target = t.target.parentNode), r.filter ? r.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== m() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === m() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && st.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return st.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, st.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, st.Event = function(t, e) {
            return this instanceof st.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? p : f) : this.type = t, e && st.extend(this, e), this.timeStamp = t && t.timeStamp || st.now(), void(this[st.expando] = !0)) : new st.Event(t, e)
        }, st.Event.prototype = {
            constructor: st.Event,
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, st.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            st.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        s = t.handleObj;
                    return o && (o === n || st.contains(n, o)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), st.fn.extend({
            on: function(t, e, i, n) {
                return g(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return g(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, o;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, st(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (i = e, e = void 0), i === !1 && (i = f), this.each(function() {
                    st.event.remove(this, t, i, e)
                })
            }
        });
        var Ft = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            qt = /<script|<style|<link/i,
            Ht = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Bt = /^true\/(.*)/,
            Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        st.extend({
            htmlPrefilter: function(t) {
                return t.replace(Ft, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, o, s, r, a = t.cloneNode(!0),
                    l = st.contains(t.ownerDocument, t);
                if (!(nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || st.isXMLDoc(t)))
                    for (r = h(a), s = h(t), n = 0, o = s.length; o > n; n++) x(s[n], r[n]);
                if (e)
                    if (i)
                        for (s = s || h(t), r = r || h(a), n = 0, o = s.length; o > n; n++) w(s[n], r[n]);
                    else w(t, a);
                return r = h(a, "script"), r.length > 0 && u(r, !l && h(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, o = st.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (Tt(i)) {
                        if (e = i[kt.expando]) {
                            if (e.events)
                                for (n in e.events) o[n] ? st.event.remove(i, n) : st.removeEvent(i, n, e.handle);
                            i[kt.expando] = void 0
                        }
                        i[It.expando] && (i[It.expando] = void 0)
                    }
            }
        }), st.fn.extend({
            domManip: C,
            detach: function(t) {
                return S(this, t, !0)
            },
            remove: function(t) {
                return S(this, t)
            },
            text: function(t) {
                return St(this, function(t) {
                    return void 0 === t ? st.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return C(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return C(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = v(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return C(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return C(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (st.cleanData(h(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return st.clone(this, t, e)
                })
            },
            html: function(t) {
                return St(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !qt.test(t) && !zt[(Dt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = st.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (st.cleanData(h(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (o) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return C(this, arguments, function(e) {
                    var i = this.parentNode;
                    st.inArray(this, t) < 0 && (st.cleanData(h(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), st.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            st.fn[t] = function(t) {
                for (var i, n = [], o = st(t), s = o.length - 1, r = 0; s >= r; r++) i = r === s ? this : this.clone(!0), st(o[r])[e](i), K.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Xt, Yt = {
                HTML: "block",
                BODY: "block"
            },
            Vt = /^margin/,
            Qt = new RegExp("^(" + At + ")(?!px)[a-z%]+$", "i"),
            Gt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            Zt = function(t, e, i, n) {
                var o, s, r = {};
                for (s in e) r[s] = t.style[s], t.style[s] = e[s];
                o = i.apply(t, n || []);
                for (s in e) t.style[s] = r[s];
                return o
            },
            Kt = Q.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(r);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", o = "4px" === e.marginRight, Kt.removeChild(r)
            }
            var i, n, o, s, r = Q.createElement("div"),
                a = Q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === a.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(a), st.extend(nt, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), o
                },
                reliableMarginLeft: function() {
                    return null == n && e(), s
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(Q.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Kt.appendChild(r), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(r), a.removeChild(i), e
                }
            }))
        }();
        var Jt = /^(none|table(?!-c[ea]).+)/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            ie = ["Webkit", "O", "Moz", "ms"],
            ne = Q.createElement("div").style;
        st.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = I(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, s, r, a = st.camelCase(e),
                        l = t.style;
                    return e = st.cssProps[a] || (st.cssProps[a] = $(a) || a), r = st.cssHooks[e] || st.cssHooks[a], void 0 === i ? r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : l[e] : (s = typeof i, "string" === s && (o = Pt.exec(i)) && o[1] && (i = c(t, e, o), s = "number"), void(null != i && i === i && ("number" === s && (i += o && o[3] || (st.cssNumber[a] ? "" : "px")), nt.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && void 0 === (i = r.set(t, i, n)) || (l[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var o, s, r, a = st.camelCase(e);
                return e = st.cssProps[a] || (st.cssProps[a] = $(a) || a), r = st.cssHooks[e] || st.cssHooks[a], r && "get" in r && (o = r.get(t, !0, i)), void 0 === o && (o = I(t, e, n)), "normal" === o && e in ee && (o = ee[e]), "" === i || i ? (s = parseFloat(o), i === !0 || isFinite(s) ? s || 0 : o) : o
            }
        }), st.each(["height", "width"], function(t, e) {
            st.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Jt.test(st.css(t, "display")) && 0 === t.offsetWidth ? Zt(t, te, function() {
                        return _(t, e, n)
                    }) : _(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var o, s = n && Gt(t),
                        r = n && P(t, e, n, "border-box" === st.css(t, "boxSizing", !1, s), s);
                    return r && (o = Pt.exec(i)) && "px" !== (o[3] || "px") && (t.style[e] = i, i = st.css(t, e)), A(t, i, r)
                }
            }
        }), st.cssHooks.marginLeft = E(nt.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(I(t, "marginLeft")) || t.getBoundingClientRect().left - Zt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), st.cssHooks.marginRight = E(nt.reliableMarginRight, function(t, e) {
            return e ? Zt(t, {
                display: "inline-block"
            }, I, [t, "marginRight"]) : void 0
        }), st.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            st.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + _t[n] + e] = s[n] || s[n - 2] || s[0];
                    return o
                }
            }, Vt.test(t) || (st.cssHooks[t + e].set = A)
        }), st.fn.extend({
            css: function(t, e) {
                return St(this, function(t, e, i) {
                    var n, o, s = {},
                        r = 0;
                    if (st.isArray(e)) {
                        for (n = Gt(t), o = e.length; o > r; r++) s[e[r]] = st.css(t, e[r], !1, n);
                        return s
                    }
                    return void 0 !== i ? st.style(t, e, i) : st.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return L(this, !0)
            },
            hide: function() {
                return L(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Lt(this) ? st(this).show() : st(this).hide()
                })
            }
        }), st.Tween = O, O.prototype = {
            constructor: O,
            init: function(t, e, i, n, o, s) {
                this.elem = t, this.prop = i, this.easing = o || st.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (st.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = O.propHooks[this.prop];
                return t && t.get ? t.get(this) : O.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = O.propHooks[this.prop];
                return this.options.duration ? this.pos = e = st.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : O.propHooks._default.set(this), this
            }
        }, O.prototype.init.prototype = O.prototype, O.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = st.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                },
                set: function(t) {
                    st.fx.step[t.prop] ? st.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[st.cssProps[t.prop]] && !st.cssHooks[t.prop] ? t.elem[t.prop] = t.now : st.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, O.propHooks.scrollTop = O.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, st.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, st.fx = O.prototype.init, st.fx.step = {};
        var oe, se, re = /^(?:toggle|show|hide)$/,
            ae = /queueHooks$/;
        st.Animation = st.extend(W, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return c(i.elem, t, Pt.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    st.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(xt);
                    for (var i, n = 0, o = t.length; o > n; n++) i = t[n], W.tweeners[i] = W.tweeners[i] || [], W.tweeners[i].unshift(e)
                },
                prefilters: [N],
                prefilter: function(t, e) {
                    e ? W.prefilters.unshift(t) : W.prefilters.push(t)
                }
            }), st.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? st.extend({}, t) : {
                    complete: i || !i && e || st.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !st.isFunction(e) && e
                };
                return n.duration = st.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in st.fx.speeds ? st.fx.speeds[n.duration] : st.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    st.isFunction(n.old) && n.old.call(this), n.queue && st.dequeue(this, n.queue)
                }, n
            }, st.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Lt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var o = st.isEmptyObject(t),
                        s = st.speed(e, i, n),
                        r = function() {
                            var e = W(this, st.extend({}, t), s);
                            (o || kt.get(this, "finish")) && e.stop(!0)
                        };
                    return r.finish = r, o || s.queue === !1 ? this.each(r) : this.queue(s.queue, r)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            o = null != t && t + "queueHooks",
                            s = st.timers,
                            r = kt.get(this);
                        if (o) r[o] && r[o].stop && n(r[o]);
                        else
                            for (o in r) r[o] && r[o].stop && ae.test(o) && n(r[o]);
                        for (o = s.length; o--;) s[o].elem !== this || null != t && s[o].queue !== t || (s[o].anim.stop(i), e = !1, s.splice(o, 1));
                        !e && i || st.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = kt.get(this),
                            n = i[t + "queue"],
                            o = i[t + "queueHooks"],
                            s = st.timers,
                            r = n ? n.length : 0;
                        for (i.finish = !0, st.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; r > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), st.each(["toggle", "show", "hide"], function(t, e) {
                var i = st.fn[e];
                st.fn[e] = function(t, n, o) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(M(e, !0), t, n, o)
                }
            }), st.each({
                slideDown: M("show"),
                slideUp: M("hide"),
                slideToggle: M("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                st.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), st.timers = [], st.fx.tick = function() {
                var t, e = 0,
                    i = st.timers;
                for (oe = st.now(); e < i.length; e++) t = i[e], t() || i[e] !== t || i.splice(e--, 1);
                i.length || st.fx.stop(), oe = void 0
            }, st.fx.timer = function(t) {
                st.timers.push(t), t() ? st.fx.start() : st.timers.pop()
            }, st.fx.interval = 13, st.fx.start = function() {
                se || (se = t.setInterval(st.fx.tick, st.fx.interval))
            }, st.fx.stop = function() {
                t.clearInterval(se), se = null
            }, st.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, st.fn.delay = function(e, i) {
                return e = st.fx ? st.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                    var o = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(o)
                    }
                })
            },
            function() {
                var t = Q.createElement("input"),
                    e = Q.createElement("select"),
                    i = e.appendChild(Q.createElement("option"));
                t.type = "checkbox", nt.checkOn = "" !== t.value, nt.optSelected = i.selected, e.disabled = !0, nt.optDisabled = !i.disabled, t = Q.createElement("input"), t.value = "t", t.type = "radio", nt.radioValue = "t" === t.value
            }();
        var le, ce = st.expr.attrHandle;
        st.fn.extend({
            attr: function(t, e) {
                return St(this, st.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    st.removeAttr(this, t)
                })
            }
        }), st.extend({
            attr: function(t, e, i) {
                var n, o, s = t.nodeType;
                return 3 !== s && 8 !== s && 2 !== s ? "undefined" == typeof t.getAttribute ? st.prop(t, e, i) : (1 === s && st.isXMLDoc(t) || (e = e.toLowerCase(), o = st.attrHooks[e] || (st.expr.match.bool.test(e) ? le : void 0)), void 0 !== i ? null === i ? void st.removeAttr(t, e) : o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : o && "get" in o && null !== (n = o.get(t, e)) ? n : (n = st.find.attr(t, e), null == n ? void 0 : n)) : void 0
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!nt.radioValue && "radio" === e && st.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    s = e && e.match(xt);
                if (s && 1 === t.nodeType)
                    for (; i = s[o++];) n = st.propFix[i] || i, st.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), le = {
            set: function(t, e, i) {
                return e === !1 ? st.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, st.each(st.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ce[e] || st.find.attr;
            ce[e] = function(t, e, n) {
                var o, s;
                return n || (s = ce[e], ce[e] = o, o = null != i(t, e, n) ? e.toLowerCase() : null, ce[e] = s), o
            }
        });
        var he = /^(?:input|select|textarea|button)$/i,
            ue = /^(?:a|area)$/i;
        st.fn.extend({
            prop: function(t, e) {
                return St(this, st.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[st.propFix[t] || t]
                })
            }
        }), st.extend({
            prop: function(t, e, i) {
                var n, o, s = t.nodeType;
                return 3 !== s && 8 !== s && 2 !== s ? (1 === s && st.isXMLDoc(t) || (e = st.propFix[e] || e, o = st.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = st.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : he.test(t.nodeName) || ue.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }), nt.optSelected || (st.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), st.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            st.propFix[this.toLowerCase()] = this
        });
        var de = /[\t\r\n\f]/g;
        st.fn.extend({
            addClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).addClass(t.call(this, e, j(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (o = j(i), n = 1 === i.nodeType && (" " + o + " ").replace(de, " ")) {
                            for (r = 0; s = e[r++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            a = st.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, s, r, a, l = 0;
                if (st.isFunction(t)) return this.each(function(e) {
                    st(this).removeClass(t.call(this, e, j(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(xt) || []; i = this[l++];)
                        if (o = j(i), n = 1 === i.nodeType && (" " + o + " ").replace(de, " ")) {
                            for (r = 0; s = e[r++];)
                                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                            a = st.trim(n), o !== a && i.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : st.isFunction(t) ? this.each(function(i) {
                    st(this).toggleClass(t.call(this, i, j(this), e), e)
                }) : this.each(function() {
                    var e, n, o, s;
                    if ("string" === i)
                        for (n = 0, o = st(this), s = t.match(xt) || []; e = s[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || (e = j(this), e && kt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : kt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + j(i) + " ").replace(de, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var pe = /\r/g,
            fe = /[\x20\t\r\n\f]+/g;
        st.fn.extend({
            val: function(t) {
                var e, i, n, o = this[0];
                return arguments.length ? (n = st.isFunction(t), this.each(function(i) {
                    var o;
                    1 === this.nodeType && (o = n ? t.call(this, i, st(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : st.isArray(o) && (o = st.map(o, function(t) {
                        return null == t ? "" : t + ""
                    })), e = st.valHooks[this.type] || st.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                })) : o ? (e = st.valHooks[o.type] || st.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(o, "value")) ? i : (i = o.value, "string" == typeof i ? i.replace(pe, "") : null == i ? "" : i)) : void 0
            }
        }), st.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = st.find.attr(t, "value");
                        return null != e ? e : st.trim(st.text(t)).replace(fe, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, s = "select-one" === t.type || 0 > o, r = s ? null : [], a = s ? o + 1 : n.length, l = 0 > o ? a : s ? o : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === o) && (nt.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !st.nodeName(i.parentNode, "optgroup"))) {
                                if (e = st(i).val(), s) return e;
                                r.push(e)
                            }
                        return r
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, s = st.makeArray(e), r = o.length; r--;) n = o[r], (n.selected = st.inArray(st.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), st.each(["radio", "checkbox"], function() {
            st.valHooks[this] = {
                set: function(t, e) {
                    return st.isArray(e) ? t.checked = st.inArray(st(t).val(), e) > -1 : void 0
                }
            }, nt.checkOn || (st.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var me = /^(?:focusinfocus|focusoutblur)$/;
        st.extend(st.event, {
            trigger: function(e, i, n, o) {
                var s, r, a, l, c, h, u, d = [n || Q],
                    p = it.call(e, "type") ? e.type : e,
                    f = it.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = a = n = n || Q, 3 !== n.nodeType && 8 !== n.nodeType && !me.test(p + st.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), c = p.indexOf(":") < 0 && "on" + p, e = e[st.expando] ? e : new st.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : st.makeArray(i, [e]), u = st.event.special[p] || {}, o || !u.trigger || u.trigger.apply(n, i) !== !1)) {
                    if (!o && !u.noBubble && !st.isWindow(n)) {
                        for (l = u.delegateType || p, me.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), a = r;
                        a === (n.ownerDocument || Q) && d.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (r = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || p, h = (kt.get(r, "events") || {})[e.type] && kt.get(r, "handle"), h && h.apply(r, i), h = c && r[c], h && h.apply && Tt(r) && (e.result = h.apply(r, i), e.result === !1 && e.preventDefault());
                    return e.type = p, o || e.isDefaultPrevented() || u._default && u._default.apply(d.pop(), i) !== !1 || !Tt(n) || c && st.isFunction(n[p]) && !st.isWindow(n) && (a = n[c], a && (n[c] = null), st.event.triggered = p, n[p](), st.event.triggered = void 0, a && (n[c] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = st.extend(new st.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                st.event.trigger(n, null, e)
            }
        }), st.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    st.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? st.event.trigger(t, e, i, !0) : void 0
            }
        }), st.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            st.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), st.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), nt.focusin = "onfocusin" in t, nt.focusin || st.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                st.event.simulate(e, t.target, st.event.fix(t))
            };
            st.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        o = kt.access(n, e);
                    o || n.addEventListener(t, i, !0), kt.access(n, e, (o || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        o = kt.access(n, e) - 1;
                    o ? kt.access(n, e, o) : (n.removeEventListener(t, i, !0), kt.remove(n, e))
                }
            }
        });
        var ge = t.location,
            ve = st.now(),
            ye = /\?/;
        st.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, st.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (n) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || st.error("Invalid XML: " + e), i
        };
        var be = /#.*$/,
            we = /([?&])_=[^&]*/,
            xe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Ce = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Se = /^(?:GET|HEAD)$/,
            Te = /^\/\//,
            ke = {},
            Ie = {},
            Ee = "*/".concat("*"),
            $e = Q.createElement("a");
        $e.href = ge.href, st.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ge.href,
                type: "GET",
                isLocal: Ce.test(ge.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ee,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": st.parseJSON,
                    "text xml": st.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? H(H(t, st.ajaxSettings), e) : H(st.ajaxSettings, t)
            },
            ajaxPrefilter: F(ke),
            ajaxTransport: F(Ie),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var c, u, y, b, x, S = i;
                    2 !== w && (w = 2, l && t.clearTimeout(l), o = void 0, r = a || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && (b = B(d, C, n)), b = U(d, b, C, c), c ? (d.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (st.lastModified[s] = x), x = C.getResponseHeader("etag"), x && (st.etag[s] = x)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, u = b.data, y = b.error, c = !y)) : (y = S, !e && S || (S = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (i || S) + "", c ? m.resolveWith(p, [u, S, C]) : m.rejectWith(p, [C, S, y]), C.statusCode(v), v = void 0, h && f.trigger(c ? "ajaxSuccess" : "ajaxError", [C, d, c ? u : y]), g.fireWith(p, [C, S]), h && (f.trigger("ajaxComplete", [C, d]), --st.active || st.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var o, s, r, a, l, c, h, u, d = st.ajaxSetup({}, i),
                    p = d.context || d,
                    f = d.context && (p.nodeType || p.jquery) ? st(p) : st.event,
                    m = st.Deferred(),
                    g = st.Callbacks("once memory"),
                    v = d.statusCode || {},
                    y = {},
                    b = {},
                    w = 0,
                    x = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === w) {
                                if (!a)
                                    for (a = {}; e = xe.exec(r);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === w ? r : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return w || (t = b[i] = b[i] || t, y[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return w || (d.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > w)
                                    for (e in t) v[e] = [v[e], t[e]];
                                else C.always(t[C.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || x;
                            return o && o.abort(e), n(0, e), this
                        }
                    };
                if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, d.url = ((e || d.url || ge.href) + "").replace(be, "").replace(Te, ge.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = st.trim(d.dataType || "*").toLowerCase().match(xt) || [""], null == d.crossDomain) {
                    c = Q.createElement("a");
                    try {
                        c.href = d.url, c.href = c.href, d.crossDomain = $e.protocol + "//" + $e.host != c.protocol + "//" + c.host
                    } catch (S) {
                        d.crossDomain = !0
                    }
                }
                if (d.data && d.processData && "string" != typeof d.data && (d.data = st.param(d.data, d.traditional)), q(ke, d, i, C), 2 === w) return C;
                h = st.event && d.global, h && 0 === st.active++ && st.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !Se.test(d.type), s = d.url, d.hasContent || (d.data && (s = d.url += (ye.test(s) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = we.test(s) ? s.replace(we, "$1_=" + ve++) : s + (ye.test(s) ? "&" : "?") + "_=" + ve++)), d.ifModified && (st.lastModified[s] && C.setRequestHeader("If-Modified-Since", st.lastModified[s]), st.etag[s] && C.setRequestHeader("If-None-Match", st.etag[s])), (d.data && d.hasContent && d.contentType !== !1 || i.contentType) && C.setRequestHeader("Content-Type", d.contentType), C.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ee + "; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers) C.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(p, C, d) === !1 || 2 === w)) return C.abort();
                x = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) C[u](d[u]);
                if (o = q(Ie, d, i, C)) {
                    if (C.readyState = 1, h && f.trigger("ajaxSend", [C, d]), 2 === w) return C;
                    d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                        C.abort("timeout")
                    }, d.timeout));
                    try {
                        w = 1, o.send(y, n)
                    } catch (S) {
                        if (!(2 > w)) throw S;
                        n(-1, S)
                    }
                } else n(-1, "No Transport");
                return C
            },
            getJSON: function(t, e, i) {
                return st.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return st.get(t, void 0, e, "script")
            }
        }), st.each(["get", "post"], function(t, e) {
            st[e] = function(t, i, n, o) {
                return st.isFunction(i) && (o = o || n, n = i, i = void 0), st.ajax(st.extend({
                    url: t,
                    type: e,
                    dataType: o,
                    data: i,
                    success: n
                }, st.isPlainObject(t) && t))
            }
        }), st._evalUrl = function(t) {
            return st.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, st.fn.extend({
            wrapAll: function(t) {
                var e;
                return st.isFunction(t) ? this.each(function(e) {
                    st(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = st(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return st.isFunction(t) ? this.each(function(e) {
                    st(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = st(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = st.isFunction(t);
                return this.each(function(i) {
                    st(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    st.nodeName(this, "body") || st(this).replaceWith(this.childNodes)
                }).end()
            }
        }), st.expr.filters.hidden = function(t) {
            return !st.expr.filters.visible(t)
        }, st.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var Ae = /%20/g,
            Pe = /\[\]$/,
            _e = /\r?\n/g,
            Le = /^(?:submit|button|image|reset|file)$/i,
            Oe = /^(?:input|select|textarea|keygen)/i;
        st.param = function(t, e) {
            var i, n = [],
                o = function(t, e) {
                    e = st.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = st.ajaxSettings && st.ajaxSettings.traditional), st.isArray(t) || t.jquery && !st.isPlainObject(t)) st.each(t, function() {
                o(this.name, this.value)
            });
            else
                for (i in t) X(i, t[i], e, o);
            return n.join("&").replace(Ae, "+")
        }, st.fn.extend({
            serialize: function() {
                return st.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = st.prop(this, "elements");
                    return t ? st.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !st(this).is(":disabled") && Oe.test(this.nodeName) && !Le.test(t) && (this.checked || !Ot.test(t))
                }).map(function(t, e) {
                    var i = st(this).val();
                    return null == i ? null : st.isArray(i) ? st.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(_e, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(_e, "\r\n")
                    }
                }).get()
            }
        }), st.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        };
        var De = {
                0: 200,
                1223: 204
            },
            Me = st.ajaxSettings.xhr();
        nt.cors = !!Me && "withCredentials" in Me, nt.ajax = Me = !!Me, st.ajaxTransport(function(e) {
            var i, n;
            return nt.cors || Me && !e.crossDomain ? {
                send: function(o, s) {
                    var r, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (r in e.xhrFields) a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                    for (r in o) a.setRequestHeader(r, o[r]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(De[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (i) throw l
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), st.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return st.globalEval(t), t
                }
            }
        }), st.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), st.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, o) {
                        e = st("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && o("error" === t.type ? 404 : 200, t.type)
                        }), Q.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var ze = [],
            Ne = /(=)\?(?=&|$)|\?\?/;
        st.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = ze.pop() || st.expando + "_" + ve++;
                return this[t] = !0, t
            }
        }), st.ajaxPrefilter("json jsonp", function(e, i, n) {
            var o, s, r, a = e.jsonp !== !1 && (Ne.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ne.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (o = e.jsonpCallback = st.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ne, "$1" + o) : e.jsonp !== !1 && (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
                return r || st.error(o + " was not called"), r[0]
            }, e.dataTypes[0] = "json", s = t[o], t[o] = function() {
                r = arguments
            }, n.always(function() {
                void 0 === s ? st(t).removeProp(o) : t[o] = s, e[o] && (e.jsonpCallback = i.jsonpCallback, ze.push(o)), r && st.isFunction(s) && s(r[0]), r = s = void 0
            }), "script") : void 0
        }), st.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || Q;
            var n = ft.exec(t),
                o = !i && [];
            return n ? [e.createElement(n[1])] : (n = d([t], e, o), o && o.length && st(o).remove(), st.merge([], n.childNodes))
        };
        var Re = st.fn.load;
        st.fn.load = function(t, e, i) {
            if ("string" != typeof t && Re) return Re.apply(this, arguments);
            var n, o, s, r = this,
                a = t.indexOf(" ");
            return a > -1 && (n = st.trim(t.slice(a)), t = t.slice(0, a)), st.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), r.length > 0 && st.ajax({
                url: t,
                type: o || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, r.html(n ? st("<div>").append(st.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                r.each(function() {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, st.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            st.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), st.expr.filters.animated = function(t) {
            return st.grep(st.timers, function(e) {
                return t === e.elem
            }).length
        }, st.offset = {
            setOffset: function(t, e, i) {
                var n, o, s, r, a, l, c, h = st.css(t, "position"),
                    u = st(t),
                    d = {};
                "static" === h && (t.style.position = "relative"), a = u.offset(), s = st.css(t, "top"), l = st.css(t, "left"), c = ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1, c ? (n = u.position(), r = n.top, o = n.left) : (r = parseFloat(s) || 0, o = parseFloat(l) || 0), st.isFunction(e) && (e = e.call(t, i, st.extend({}, a))), null != e.top && (d.top = e.top - a.top + r), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, st.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    st.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    o = {
                        top: 0,
                        left: 0
                    },
                    s = n && n.ownerDocument;
                return s ? (e = s.documentElement, st.contains(e, n) ? (o = n.getBoundingClientRect(), i = Y(s), {
                    top: o.top + i.pageYOffset - e.clientTop,
                    left: o.left + i.pageXOffset - e.clientLeft
                }) : o) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === st.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), st.nodeName(t[0], "html") || (n = t.offset()), n.top += st.css(t[0], "borderTopWidth", !0), n.left += st.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - st.css(i, "marginTop", !0),
                        left: e.left - n.left - st.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === st.css(t, "position");) t = t.offsetParent;
                    return t || Kt
                })
            }
        }), st.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            st.fn[t] = function(n) {
                return St(this, function(t, n, o) {
                    var s = Y(t);
                    return void 0 === o ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : t[n] = o)
                }, t, n, arguments.length)
            }
        }), st.each(["top", "left"], function(t, e) {
            st.cssHooks[e] = E(nt.pixelPosition, function(t, i) {
                return i ? (i = I(t, e), Qt.test(i) ? st(t).position()[e] + "px" : i) : void 0
            })
        }), st.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            st.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                st.fn[n] = function(n, o) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        r = i || (n === !0 || o === !0 ? "margin" : "border");
                    return St(this, function(e, i, n) {
                        var o;
                        return st.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === n ? st.css(e, i, r) : st.style(e, i, n, r)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), st.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), st.fn.andSelf = st.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return st
        });
        var We = t.jQuery,
            je = t.$;
        return st.noConflict = function(e) {
            return t.$ === st && (t.$ = je), e && t.jQuery === st && (t.jQuery = We), st
        }, e || (t.jQuery = t.$ = st), st
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            s = o.attr("data-target");
        s || (s = o.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var r = t("#" === s ? [] : s);
        e && e.preventDefault(), r.length || (r = o.closest(".alert")), r.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.button"),
                s = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, s)), "toggle" == e ? o.toggle() : e && o.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.7", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
            n[o](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i).prop(i, !1))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target).closest(".btn");
        e.call(n, "toggle"), t(i.target).is('input[type="radio"], input[type="checkbox"]') || (i.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                r = "string" == typeof e ? e : s.slide;
            o || n.data("bs.carousel", o = new i(this, s)), "number" == typeof e ? o.to(e) : r ? o[r]() : s.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            s = (i + o) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var o = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, o),
            r = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var c = s[0],
            h = t.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
        if (this.$element.trigger(h), !h.isDefaultPrevented()) {
            if (this.sliding = !0, r && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(s)]);
                u && u.addClass("active")
            }
            var d = t.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, o.addClass(a), s.addClass(a), o.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(d)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(d)), r && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var o = function(i) {
        var n, o = t(this),
            s = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var r = t.extend({}, s.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (r.interval = !1), e.call(s, r), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(s).each(function() {
            var n = t(this),
                o = e(n),
                s = {
                    relatedTarget: this
                };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new r(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        r = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    r.VERSION = "3.3.7", r.prototype.toggle = function(n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var s = e(o),
                r = s.hasClass("open");
            if (i(), !r) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, r.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n),
                    r = o.hasClass("open");
                if (!r && 27 != i.which || r && 27 == i.which) return 27 == i.which && o.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var c = l.index(i.target);
                    38 == i.which && c > 0 && c--, 40 == i.which && c < l.length - 1 && c++, ~c || (c = 0), l.eq(c).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, r.prototype.toggle).on("keydown.bs.dropdown.data-api", s, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var o = t(this),
                s = o.data("bs.modal"),
                r = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            s || o.data("bs.modal", s = new i(this, r)), "string" == typeof e ? s[e](n) : r.show && s.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e),
            this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var r = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : r()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            o = n.attr("href"),
            s = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            r = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, r, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.tooltip", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), s = o.length; s--;) {
            var r = o[s];
            if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != r) {
                var a = "hover" == r ? "mouseenter" : "focusin",
                    l = "hover" == r ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                s = this.tip(),
                r = this.getUID(this.type);
            this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(a);
            c && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var h = this.getPosition(),
                u = s[0].offsetWidth,
                d = s[0].offsetHeight;
            if (c) {
                var p = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && h.bottom + d > f.bottom ? "top" : "top" == a && h.top - d < f.top ? "bottom" : "right" == a && h.right + u > f.width ? "left" : "left" == a && h.left - u < f.left ? "right" : a, s.removeClass(p).addClass(a)
            }
            var m = this.getCalculatedOffset(a, h, u, d);
            this.applyPlacement(m, a);
            var g = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            s = n[0].offsetHeight,
            r = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(r) && (r = 0), isNaN(a) && (a = 0), e.top += r, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            c = n[0].offsetHeight;
        "top" == i && c != s && (e.top = e.top + s - c);
        var h = this.getViewportAdjustedDelta(i, e, l, c);
        h.left ? e.left += h.left : e.top += h.top;
        var u = /top|bottom/.test(i),
            d = u ? 2 * h.left - o + l : 2 * h.top - s + c,
            p = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(d, n[0][p], u)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != o.hoverState && s.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            s = t(this.$tip),
            r = t.Event("hide.bs." + this.type);
        return this.$element.trigger(r), r.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var s = window.SVGElement && i instanceof window.SVGElement,
            r = n ? {
                top: 0,
                left: 0
            } : s ? null : e.offset(),
            a = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            l = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, a, l, r)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            r = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - r.scroll,
                l = e.top + s - r.scroll + n;
            a < r.top ? o.top = r.top - a : l > r.top + r.height && (o.top = r.top + r.height - l)
        } else {
            var c = e.left - s,
                h = e.left + s + i;
            c < r.left ? o.left = r.left - c : h > r.right && (o.left = r.left + r.width - h)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.popover"),
                s = "object" == typeof e && e;
            !o && /destroy|hide/.test(e) || (o || n.data("bs.popover", o = new i(this, s)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.7", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                r = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, o) {
        function s() {
            r.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var r = n.find("> .active"),
            a = o && t.support.transition && (r.length && r.hasClass("fade") || !!n.find("> .fade").length);
        r.length && a ? r.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), r.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.affix"),
                s = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, s)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.7", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(),
            s = this.$element.offset(),
            r = this.$target.height();
        if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? o + this.unpin <= s.top ? !1 : "bottom" : t - n >= o + r ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? o : s.top,
            c = a ? r : e;
        return null != i && i >= o ? "top" : null != n && l + c >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                s = n.bottom,
                r = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(r, e, o, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    c = t.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: r - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && s.toggle && /show|hide/.test(e) && (s.toggle = !1), o || i.data("bs.collapse", o = new n(this, s)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[r](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", r].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[r](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var s = e(o),
            r = s.data("bs.collapse"),
            a = r ? "toggle" : o.data();
        i.call(s, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, s)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.7", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                s = /^#./.test(o) && t(o);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            s = this.targets,
            r = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return r != (t = s[s.length - 1]) && this.activate(t);
        if (r && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery),
function() {
    "use strict";
    var t = this,
        e = t.Chart,
        i = function(t) {
            return this.canvas = t.canvas, this.ctx = t, this.width = t.canvas.width, this.height = t.canvas.height, this.aspectRatio = this.width / this.height, n.retinaScale(this), this
        };
    i.defaults = {
        global: {
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            showScale: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleIntegersOnly: !0,
            scaleBeginAtZero: !1,
            scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            responsive: !1,
            maintainAspectRatio: !0,
            showTooltips: !0,
            tooltipEvents: ["mousemove", "touchstart", "touchmove", "mouseout"],
            tooltipFillColor: "rgba(0,0,0,0.8)",
            tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipFontSize: 14,
            tooltipFontStyle: "normal",
            tooltipFontColor: "#fff",
            tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            tooltipTitleFontSize: 14,
            tooltipTitleFontStyle: "bold",
            tooltipTitleFontColor: "#fff",
            tooltipYPadding: 6,
            tooltipXPadding: 6,
            tooltipCaretSize: 8,
            tooltipCornerRadius: 6,
            tooltipXOffset: 10,
            tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
            multiTooltipTemplate: "<%= value %>",
            multiTooltipKeyBackground: "#fff",
            onAnimationProgress: function() {},
            onAnimationComplete: function() {}
        }
    }, i.types = {};
    var n = i.helpers = {},
        o = n.each = function(t, e, i) {
            var n = Array.prototype.slice.call(arguments, 3);
            if (t)
                if (t.length === +t.length) {
                    var o;
                    for (o = 0; o < t.length; o++) e.apply(i, [t[o], o].concat(n))
                } else
                    for (var s in t) e.apply(i, [t[s], s].concat(n))
        },
        s = n.clone = function(t) {
            var e = {};
            return o(t, function(i, n) {
                t.hasOwnProperty(n) && (e[n] = i)
            }), e
        },
        r = n.extend = function(t) {
            return o(Array.prototype.slice.call(arguments, 1), function(e) {
                o(e, function(i, n) {
                    e.hasOwnProperty(n) && (t[n] = i)
                })
            }), t
        },
        a = n.merge = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return t.unshift({}), r.apply(null, t)
        },
        l = n.indexOf = function(t, e) {
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (var i = 0; i < t.length; i++)
                if (t[i] === e) return i;
            return -1
        },
        c = n.inherits = function(t) {
            var e = this,
                i = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    return e.apply(this, arguments)
                },
                n = function() {
                    this.constructor = i
                };
            return n.prototype = e.prototype, i.prototype = new n, i.extend = c, t && r(i.prototype, t), i.__super__ = e.prototype, i
        },
        h = n.noop = function() {},
        u = n.uid = function() {
            var t = 0;
            return function() {
                return "chart-" + t++
            }
        }(),
        d = n.warn = function(t) {
            window.console && "function" == typeof window.console.warn && console.warn(t)
        },
        p = n.amd = "function" == typeof t.define && t.define.amd,
        f = n.isNumber = function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        m = n.max = function(t) {
            return Math.max.apply(Math, t)
        },
        g = n.min = function(t) {
            return Math.min.apply(Math, t)
        },
        v = (n.cap = function(t, e, i) {
            if (f(e)) {
                if (t > e) return e
            } else if (f(i) && i > t) return i;
            return t
        }, n.getDecimalPlaces = function(t) {
            return t % 1 !== 0 && f(t) ? t.toString().split(".")[1].length : 0
        }),
        y = n.radians = function(t) {
            return t * (Math.PI / 180)
        },
        b = (n.getAngleFromPoint = function(t, e) {
            var i = e.x - t.x,
                n = e.y - t.y,
                o = Math.sqrt(i * i + n * n),
                s = 2 * Math.PI + Math.atan2(n, i);
            return 0 > i && 0 > n && (s += 2 * Math.PI), {
                angle: s,
                distance: o
            }
        }, n.aliasPixel = function(t) {
            return t % 2 === 0 ? 0 : .5
        }),
        w = (n.splineCurve = function(t, e, i, n) {
            var o = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                s = Math.sqrt(Math.pow(i.x - e.x, 2) + Math.pow(i.y - e.y, 2)),
                r = n * o / (o + s),
                a = n * s / (o + s);
            return {
                inner: {
                    x: e.x - r * (i.x - t.x),
                    y: e.y - r * (i.y - t.y)
                },
                outer: {
                    x: e.x + a * (i.x - t.x),
                    y: e.y + a * (i.y - t.y)
                }
            }
        }, n.calculateOrderOfMagnitude = function(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }),
        x = (n.calculateScaleRange = function(t, e, i, n, o) {
            var s = 2,
                r = Math.floor(e / (1.5 * i)),
                a = s >= r,
                l = m(t),
                c = g(t);
            l === c && (l += .5, c >= .5 && !n ? c -= .5 : l += .5);
            for (var h = Math.abs(l - c), u = w(h), d = Math.ceil(l / (1 * Math.pow(10, u))) * Math.pow(10, u), p = n ? 0 : Math.floor(c / (1 * Math.pow(10, u))) * Math.pow(10, u), f = d - p, v = Math.pow(10, u), y = Math.round(f / v);
                (y > r || r > 2 * y) && !a;)
                if (y > r) v *= 2, y = Math.round(f / v), y % 1 !== 0 && (a = !0);
                else if (o && u >= 0) {
                if (v / 2 % 1 !== 0) break;
                v /= 2, y = Math.round(f / v)
            } else v /= 2, y = Math.round(f / v);
            return a && (y = s, v = f / y), {
                steps: y,
                stepValue: v,
                min: p,
                max: p + y * v
            }
        }, n.template = function(t, e) {
            function i(t, e) {
                var i = /\W/.test(t) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + t.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : n[t] = n[t];
                return e ? i(e) : i
            }
            if (t instanceof Function) return t(e);
            var n = {};
            return i(t, e)
        }),
        C = (n.generateLabels = function(t, e, i, n) {
            var s = new Array(e);
            return labelTemplateString && o(s, function(e, o) {
                s[o] = x(t, {
                    value: i + n * (o + 1)
                })
            }), s
        }, n.easingEffects = {
            linear: function(t) {
                return t
            },
            easeInQuad: function(t) {
                return t * t
            },
            easeOutQuad: function(t) {
                return -1 * t * (t - 2)
            },
            easeInOutQuad: function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            },
            easeInCubic: function(t) {
                return t * t * t
            },
            easeOutCubic: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t + 1)
            },
            easeInOutCubic: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
            },
            easeInQuart: function(t) {
                return t * t * t * t
            },
            easeOutQuart: function(t) {
                return -1 * ((t = t / 1 - 1) * t * t * t - 1)
            },
            easeInOutQuart: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            },
            easeInQuint: function(t) {
                return 1 * (t /= 1) * t * t * t * t
            },
            easeOutQuint: function(t) {
                return 1 * ((t = t / 1 - 1) * t * t * t * t + 1)
            },
            easeInOutQuint: function(t) {
                return (t /= .5) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            },
            easeInSine: function(t) {
                return -1 * Math.cos(t / 1 * (Math.PI / 2)) + 1
            },
            easeOutSine: function(t) {
                return 1 * Math.sin(t / 1 * (Math.PI / 2))
            },
            easeInOutSine: function(t) {
                return -.5 * (Math.cos(Math.PI * t / 1) - 1)
            },
            easeInExpo: function(t) {
                return 0 === t ? 1 : 1 * Math.pow(2, 10 * (t / 1 - 1))
            },
            easeOutExpo: function(t) {
                return 1 === t ? 1 : 1 * (-Math.pow(2, -10 * t / 1) + 1)
            },
            easeInOutExpo: function(t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
            },
            easeInCirc: function(t) {
                return t >= 1 ? t : -1 * (Math.sqrt(1 - (t /= 1) * t) - 1)
            },
            easeOutCirc: function(t) {
                return 1 * Math.sqrt(1 - (t = t / 1 - 1) * t)
            },
            easeInOutCirc: function(t) {
                return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            },
            easeInElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i)))
            },
            easeOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 1 == (t /= 1) ? 1 : (i || (i = .3), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * t) * Math.sin(2 * (1 * t - e) * Math.PI / i) + 1)
            },
            easeInOutElastic: function(t) {
                var e = 1.70158,
                    i = 0,
                    n = 1;
                return 0 === t ? 0 : 2 == (t /= .5) ? 1 : (i || (i = .3 * 1.5), n < Math.abs(1) ? (n = 1, e = i / 4) : e = i / (2 * Math.PI) * Math.asin(1 / n), 1 > t ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (1 * t - e) * Math.PI / i) * .5 + 1)
            },
            easeInBack: function(t) {
                var e = 1.70158;
                return 1 * (t /= 1) * t * ((e + 1) * t - e)
            },
            easeOutBack: function(t) {
                var e = 1.70158;
                return 1 * ((t = t / 1 - 1) * t * ((e + 1) * t + e) + 1)
            },
            easeInOutBack: function(t) {
                var e = 1.70158;
                return (t /= .5) < 1 ? .5 * t * t * (((e *= 1.525) + 1) * t - e) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
            },
            easeInBounce: function(t) {
                return 1 - C.easeOutBounce(1 - t)
            },
            easeOutBounce: function(t) {
                return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : 2 / 2.75 > t ? 1 * (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 * (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            },
            easeInOutBounce: function(t) {
                return .5 > t ? .5 * C.easeInBounce(2 * t) : .5 * C.easeOutBounce(2 * t - 1) + .5
            }
        }),
        S = n.requestAnimFrame = function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                return window.setTimeout(t, 1e3 / 60)
            }
        }(),
        T = (n.cancelAnimFrame = function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(t) {
                return window.clearTimeout(t, 1e3 / 60)
            }
        }(), n.animationLoop = function(t, e, i, n, o, s) {
            var r = 0,
                a = C[i] || C.linear,
                l = function() {
                    r++;
                    var i = r / e,
                        c = a(i);
                    t.call(s, c, i, r), n.call(s, c, i), e > r ? s.animationFrame = S(l) : o.apply(s)
                };
            S(l)
        }, n.getRelativePosition = function(t) {
            var e, i, n = t.originalEvent || t,
                o = t.currentTarget || t.srcElement,
                s = o.getBoundingClientRect();
            return n.touches ? (e = n.touches[0].clientX - s.left, i = n.touches[0].clientY - s.top) : (e = n.clientX - s.left, i = n.clientY - s.top), {
                x: e,
                y: i
            }
        }, n.addEvent = function(t, e, i) {
            t.addEventListener ? t.addEventListener(e, i) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i
        }),
        k = n.removeEvent = function(t, e, i) {
            t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent ? t.detachEvent("on" + e, i) : t["on" + e] = h
        },
        I = (n.bindEvents = function(t, e, i) {
            t.events || (t.events = {}), o(e, function(e) {
                t.events[e] = function() {
                    i.apply(t, arguments)
                }, T(t.chart.canvas, e, t.events[e])
            })
        }, n.unbindEvents = function(t, e) {
            o(e, function(e, i) {
                k(t.chart.canvas, i, e)
            })
        }),
        E = n.getMaximumWidth = function(t) {
            var e = t.parentNode;
            return e.clientWidth
        },
        $ = n.getMaximumHeight = function(t) {
            var e = t.parentNode;
            return e.clientHeight
        },
        A = (n.getMaximumSize = n.getMaximumWidth, n.retinaScale = function(t) {
            var e = t.ctx,
                i = t.canvas.width,
                n = t.canvas.height;
            window.devicePixelRatio && (e.canvas.style.width = i + "px", e.canvas.style.height = n + "px", e.canvas.height = n * window.devicePixelRatio, e.canvas.width = i * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio))
        }),
        P = n.clear = function(t) {
            t.ctx.clearRect(0, 0, t.width, t.height)
        },
        _ = n.fontString = function(t, e, i) {
            return e + " " + t + "px " + i
        },
        L = n.longestText = function(t, e, i) {
            t.font = e;
            var n = 0;
            return o(i, function(e) {
                var i = t.measureText(e).width;
                n = i > n ? i : n
            }), n
        },
        O = n.drawRoundedRectangle = function(t, e, i, n, o, s) {
            t.beginPath(), t.moveTo(e + s, i), t.lineTo(e + n - s, i), t.quadraticCurveTo(e + n, i, e + n, i + s), t.lineTo(e + n, i + o - s), t.quadraticCurveTo(e + n, i + o, e + n - s, i + o), t.lineTo(e + s, i + o), t.quadraticCurveTo(e, i + o, e, i + o - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + s, i), t.closePath()
        };
    i.instances = {}, i.Type = function(t, e, n) {
        this.options = e, this.chart = n, this.id = u(), i.instances[this.id] = this, e.responsive && this.resize(), this.initialize.call(this, t)
    }, r(i.Type.prototype, {
        initialize: function() {
            return this
        },
        clear: function() {
            return P(this.chart), this
        },
        stop: function() {
            return n.cancelAnimFrame.call(t, this.animationFrame), this
        },
        resize: function(t) {
            this.stop();
            var e = this.chart.canvas,
                i = E(this.chart.canvas),
                n = this.options.maintainAspectRatio ? i / this.chart.aspectRatio : $(this.chart.canvas);
            return e.width = this.chart.width = i, e.height = this.chart.height = n, A(this.chart), "function" == typeof t && t.apply(this, Array.prototype.slice.call(arguments, 1)), this
        },
        reflow: h,
        render: function(t) {
            return t && this.reflow(), this.options.animation && !t ? n.animationLoop(this.draw, this.options.animationSteps, this.options.animationEasing, this.options.onAnimationProgress, this.options.onAnimationComplete, this) : (this.draw(), this.options.onAnimationComplete.call(this)), this
        },
        generateLegend: function() {
            return x(this.options.legendTemplate, this)
        },
        destroy: function() {
            this.clear(), I(this, this.events), delete i.instances[this.id]
        },
        showTooltip: function(t, e) {
            "undefined" == typeof this.activeElements && (this.activeElements = []);
            var s = function(t) {
                var e = !1;
                return t.length !== this.activeElements.length ? e = !0 : (o(t, function(t, i) {
                    t !== this.activeElements[i] && (e = !0)
                }, this), e)
            }.call(this, t);
            if (s || e) {
                if (this.activeElements = t, this.draw(), t.length > 0)
                    if (this.datasets && this.datasets.length > 1) {
                        for (var r, a, c = this.datasets.length - 1; c >= 0 && (r = this.datasets[c].points || this.datasets[c].bars || this.datasets[c].segments, a = l(r, t[0]), -1 === a); c--);
                        var h = [],
                            u = [],
                            d = function() {
                                var t, e, i, o, s, r = [],
                                    l = [],
                                    c = [];
                                return n.each(this.datasets, function(e) {
                                    t = e.points || e.bars || e.segments, t[a] && r.push(t[a])
                                }), n.each(r, function(t) {
                                    l.push(t.x), c.push(t.y), h.push(n.template(this.options.multiTooltipTemplate, t)), u.push({
                                        fill: t._saved.fillColor || t.fillColor,
                                        stroke: t._saved.strokeColor || t.strokeColor
                                    })
                                }, this), s = g(c), i = m(c), o = g(l), e = m(l), {
                                    x: o > this.chart.width / 2 ? o : e,
                                    y: (s + i) / 2
                                }
                            }.call(this, a);
                        new i.MultiTooltip({
                            x: d.x,
                            y: d.y,
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            xOffset: this.options.tooltipXOffset,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            titleTextColor: this.options.tooltipTitleFontColor,
                            titleFontFamily: this.options.tooltipTitleFontFamily,
                            titleFontStyle: this.options.tooltipTitleFontStyle,
                            titleFontSize: this.options.tooltipTitleFontSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            labels: h,
                            legendColors: u,
                            legendColorBackground: this.options.multiTooltipKeyBackground,
                            title: t[0].label,
                            chart: this.chart,
                            ctx: this.chart.ctx
                        }).draw()
                    } else o(t, function(t) {
                        var e = t.tooltipPosition();
                        new i.Tooltip({
                            x: Math.round(e.x),
                            y: Math.round(e.y),
                            xPadding: this.options.tooltipXPadding,
                            yPadding: this.options.tooltipYPadding,
                            fillColor: this.options.tooltipFillColor,
                            textColor: this.options.tooltipFontColor,
                            fontFamily: this.options.tooltipFontFamily,
                            fontStyle: this.options.tooltipFontStyle,
                            fontSize: this.options.tooltipFontSize,
                            caretHeight: this.options.tooltipCaretSize,
                            cornerRadius: this.options.tooltipCornerRadius,
                            text: x(this.options.tooltipTemplate, t),
                            chart: this.chart
                        }).draw()
                    }, this);
                return this
            }
        },
        toBase64Image: function() {
            return this.chart.canvas.toDataURL.apply(this.chart.canvas, arguments)
        }
    }), i.Type.extend = function(t) {
        var e = this,
            n = function() {
                return e.apply(this, arguments)
            };
        if (n.prototype = s(e.prototype), r(n.prototype, t), n.extend = i.Type.extend, t.name || e.prototype.name) {
            var o = t.name || e.prototype.name,
                l = i.defaults[e.prototype.name] ? s(i.defaults[e.prototype.name]) : {};
            i.defaults[o] = r(l, t.defaults), i.types[o] = n, i.prototype[o] = function(t, e) {
                var s = a(i.defaults.global, i.defaults[o], e || {});
                return new n(t, s, this)
            }
        } else d("Name not provided for this chart, so it hasn't been registered");
        return e
    }, i.Element = function(t) {
        r(this, t), this.initialize.apply(this, arguments), this.save()
    }, r(i.Element.prototype, {
        initialize: function() {},
        restore: function(t) {
            return t ? o(t, function(t) {
                this[t] = this._saved[t]
            }, this) : r(this, this._saved), this
        },
        save: function() {
            return this._saved = s(this), delete this._saved._saved, this
        },
        update: function(t) {
            return o(t, function(t, e) {
                this._saved[e] = this[e], this[e] = t
            }, this), this
        },
        transition: function(t, e) {
            return o(t, function(t, i) {
                this[i] = (t - this._saved[i]) * e + this._saved[i]
            }, this), this
        },
        tooltipPosition: function() {
            return {
                x: this.x,
                y: this.y
            }
        }
    }), i.Element.extend = c, i.Point = i.Element.extend({
        display: !0,
        inRange: function(t, e) {
            var i = this.hitDetectionRadius + this.radius;
            return Math.pow(t - this.x, 2) + Math.pow(e - this.y, 2) < Math.pow(i, 2)
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                t.beginPath(), t.arc(this.x, this.y, this.radius, 0, 2 * Math.PI), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.stroke()
            }
        }
    }), i.Arc = i.Element.extend({
        inRange: function(t, e) {
            var i = n.getAngleFromPoint(this, {
                    x: t,
                    y: e
                }),
                o = i.angle >= this.startAngle && i.angle <= this.endAngle,
                s = i.distance >= this.innerRadius && i.distance <= this.outerRadius;
            return o && s
        },
        tooltipPosition: function() {
            var t = this.startAngle + (this.endAngle - this.startAngle) / 2,
                e = (this.outerRadius - this.innerRadius) / 2 + this.innerRadius;
            return {
                x: this.x + Math.cos(t) * e,
                y: this.y + Math.sin(t) * e
            }
        },
        draw: function() {
            var t = this.ctx;
            t.beginPath(), t.arc(this.x, this.y, this.outerRadius, this.startAngle, this.endAngle), t.arc(this.x, this.y, this.innerRadius, this.endAngle, this.startAngle, !0), t.closePath(), t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.fillStyle = this.fillColor, t.fill(), t.lineJoin = "bevel", this.showStroke && t.stroke()
        }
    }), i.Rectangle = i.Element.extend({
        draw: function() {
            var t = this.ctx,
                e = this.width / 2,
                i = this.x - e,
                n = this.x + e,
                o = this.base - (this.base - this.y),
                s = this.strokeWidth / 2;
            this.showStroke && (i += s, n -= s, o += s), t.beginPath(), t.fillStyle = this.fillColor, t.strokeStyle = this.strokeColor, t.lineWidth = this.strokeWidth, t.moveTo(i, this.base), t.lineTo(i, o), t.lineTo(n, o), t.lineTo(n, this.base), t.fill(), this.showStroke && t.stroke()
        },
        height: function() {
            return this.base - this.y
        },
        inRange: function(t, e) {
            return t >= this.x - this.width / 2 && t <= this.x + this.width / 2 && e >= this.y && e <= this.base
        }
    }), i.Tooltip = i.Element.extend({
        draw: function() {
            var t = this.chart.ctx;
            t.font = _(this.fontSize, this.fontStyle, this.fontFamily), this.xAlign = "center", this.yAlign = "above";
            var e = 2,
                i = t.measureText(this.text).width + 2 * this.xPadding,
                n = this.fontSize + 2 * this.yPadding,
                o = n + this.caretHeight + e;
            this.x + i / 2 > this.chart.width ? this.xAlign = "left" : this.x - i / 2 < 0 && (this.xAlign = "right"), this.y - o < 0 && (this.yAlign = "below");
            var s = this.x - i / 2,
                r = this.y - o;
            switch (t.fillStyle = this.fillColor, this.yAlign) {
                case "above":
                    t.beginPath(), t.moveTo(this.x, this.y - e), t.lineTo(this.x + this.caretHeight, this.y - (e + this.caretHeight)), t.lineTo(this.x - this.caretHeight, this.y - (e + this.caretHeight)), t.closePath(), t.fill();
                    break;
                case "below":
                    r = this.y + e + this.caretHeight, t.beginPath(), t.moveTo(this.x, this.y + e), t.lineTo(this.x + this.caretHeight, this.y + e + this.caretHeight), t.lineTo(this.x - this.caretHeight, this.y + e + this.caretHeight), t.closePath(), t.fill()
            }
            switch (this.xAlign) {
                case "left":
                    s = this.x - i + (this.cornerRadius + this.caretHeight);
                    break;
                case "right":
                    s = this.x - (this.cornerRadius + this.caretHeight)
            }
            O(t, s, r, i, n, this.cornerRadius), t.fill(), t.fillStyle = this.textColor, t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.text, s + i / 2, r + n / 2)
        }
    }), i.MultiTooltip = i.Element.extend({
        initialize: function() {
            this.font = _(this.fontSize, this.fontStyle, this.fontFamily), this.titleFont = _(this.titleFontSize, this.titleFontStyle, this.titleFontFamily), this.height = this.labels.length * this.fontSize + (this.labels.length - 1) * (this.fontSize / 2) + 2 * this.yPadding + 1.5 * this.titleFontSize, this.ctx.font = this.titleFont;
            var t = this.ctx.measureText(this.title).width,
                e = L(this.ctx, this.font, this.labels) + this.fontSize + 3,
                i = m([e, t]);
            this.width = i + 2 * this.xPadding;
            var n = this.height / 2;
            this.y - n < 0 ? this.y = n : this.y + n > this.chart.height && (this.y = this.chart.height - n), this.x > this.chart.width / 2 ? this.x -= this.xOffset + this.width : this.x += this.xOffset
        },
        getLineHeight: function(t) {
            var e = this.y - this.height / 2 + this.yPadding,
                i = t - 1;
            return 0 === t ? e + this.titleFontSize / 2 : e + (1.5 * this.fontSize * i + this.fontSize / 2) + 1.5 * this.titleFontSize
        },
        draw: function() {
            O(this.ctx, this.x, this.y - this.height / 2, this.width, this.height, this.cornerRadius);
            var t = this.ctx;
            t.fillStyle = this.fillColor, t.fill(), t.closePath(), t.textAlign = "left", t.textBaseline = "middle", t.fillStyle = this.titleTextColor, t.font = this.titleFont, t.fillText(this.title, this.x + this.xPadding, this.getLineHeight(0)), t.font = this.font, n.each(this.labels, function(e, i) {
                t.fillStyle = this.textColor, t.fillText(e, this.x + this.xPadding + this.fontSize + 3, this.getLineHeight(i + 1)), t.fillStyle = this.legendColorBackground, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize), t.fillStyle = this.legendColors[i].fill, t.fillRect(this.x + this.xPadding, this.getLineHeight(i + 1) - this.fontSize / 2, this.fontSize, this.fontSize)
            }, this)
        }
    }), i.Scale = i.Element.extend({
        initialize: function() {
            this.fit()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }));
            this.yLabelWidth = this.display && this.showLabels ? L(this.ctx, this.font, this.yLabels) : 0
        },
        addXLabel: function(t) {
            this.xLabels.push(t), this.valuesCount++, this.fit()
        },
        removeXLabel: function() {
            this.xLabels.shift(), this.valuesCount--, this.fit()
        },
        fit: function() {
            this.startPoint = this.display ? this.fontSize : 0, this.endPoint = this.display ? this.height - 1.5 * this.fontSize - 5 : this.height, this.startPoint += this.padding, this.endPoint -= this.padding;
            var t, e = this.endPoint - this.startPoint;
            for (this.calculateYRange(e), this.buildYLabels(), this.calculateXLabelRotation(); e > this.endPoint - this.startPoint;) e = this.endPoint - this.startPoint, t = this.yLabelWidth, this.calculateYRange(e), this.buildYLabels(), t < this.yLabelWidth && this.calculateXLabelRotation()
        },
        calculateXLabelRotation: function() {
            this.ctx.font = this.font;
            var t, e, i = this.ctx.measureText(this.xLabels[0]).width,
                n = this.ctx.measureText(this.xLabels[this.xLabels.length - 1]).width;
            if (this.xScalePaddingRight = n / 2 + 3, this.xScalePaddingLeft = i / 2 > this.yLabelWidth + 10 ? i / 2 : this.yLabelWidth + 10, this.xLabelRotation = 0, this.display) {
                var o, s = L(this.ctx, this.font, this.xLabels);
                this.xLabelWidth = s;
                for (var r = Math.floor(this.calculateX(1) - this.calculateX(0)) - 6; this.xLabelWidth > r && 0 === this.xLabelRotation || this.xLabelWidth > r && this.xLabelRotation <= 90 && this.xLabelRotation > 0;) o = Math.cos(y(this.xLabelRotation)), t = o * i, e = o * n, t + this.fontSize / 2 > this.yLabelWidth + 8 && (this.xScalePaddingLeft = t + this.fontSize / 2), this.xScalePaddingRight = this.fontSize / 2, this.xLabelRotation++, this.xLabelWidth = o * s;
                this.xLabelRotation > 0 && (this.endPoint -= Math.sin(y(this.xLabelRotation)) * s + 3)
            } else this.xLabelWidth = 0, this.xScalePaddingRight = this.padding, this.xScalePaddingLeft = this.padding
        },
        calculateYRange: h,
        drawingArea: function() {
            return this.startPoint - this.endPoint
        },
        calculateY: function(t) {
            var e = this.drawingArea() / (this.min - this.max);
            return this.endPoint - e * (t - this.min)
        },
        calculateX: function(t) {
            var e = (this.xLabelRotation > 0, this.width - (this.xScalePaddingLeft + this.xScalePaddingRight)),
                i = e / (this.valuesCount - (this.offsetGridLines ? 0 : 1)),
                n = i * t + this.xScalePaddingLeft;
            return this.offsetGridLines && (n += i / 2), Math.round(n)
        },
        update: function(t) {
            n.extend(this, t), this.fit()
        },
        draw: function() {
            var t = this.ctx,
                e = (this.endPoint - this.startPoint) / this.steps,
                i = Math.round(this.xScalePaddingLeft);
            this.display && (t.fillStyle = this.textColor, t.font = this.font, o(this.yLabels, function(o, s) {
                var r = this.endPoint - e * s,
                    a = Math.round(r);
                t.textAlign = "right", t.textBaseline = "middle", this.showLabels && t.fillText(o, i - 10, r), t.beginPath(), s > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), a += n.aliasPixel(t.lineWidth), t.moveTo(i, a), t.lineTo(this.width, a), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(i - 5, a), t.lineTo(i, a), t.stroke(), t.closePath()
            }, this), o(this.xLabels, function(e, i) {
                var n = this.calculateX(i) + b(this.lineWidth),
                    o = this.calculateX(i - (this.offsetGridLines ? .5 : 0)) + b(this.lineWidth),
                    s = this.xLabelRotation > 0;
                t.beginPath(), i > 0 ? (t.lineWidth = this.gridLineWidth, t.strokeStyle = this.gridLineColor) : (t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor), t.moveTo(o, this.endPoint), t.lineTo(o, this.startPoint - 3), t.stroke(), t.closePath(), t.lineWidth = this.lineWidth, t.strokeStyle = this.lineColor, t.beginPath(), t.moveTo(o, this.endPoint), t.lineTo(o, this.endPoint + 5), t.stroke(), t.closePath(), t.save(), t.translate(n, s ? this.endPoint + 12 : this.endPoint + 8), t.rotate(-1 * y(this.xLabelRotation)), t.font = this.font, t.textAlign = s ? "right" : "center", t.textBaseline = s ? "middle" : "top", t.fillText(e, 0, 0), t.restore()
            }, this))
        }
    }), i.RadialScale = i.Element.extend({
        initialize: function() {
            this.size = g([this.height, this.width]), this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2
        },
        calculateCenterOffset: function(t) {
            var e = this.drawingArea / (this.max - this.min);
            return (t - this.min) * e
        },
        update: function() {
            this.lineArc ? this.drawingArea = this.display ? this.size / 2 - (this.fontSize / 2 + this.backdropPaddingY) : this.size / 2 : this.setScaleSize(), this.buildYLabels()
        },
        buildYLabels: function() {
            this.yLabels = [];
            for (var t = v(this.stepValue), e = 0; e <= this.steps; e++) this.yLabels.push(x(this.templateString, {
                value: (this.min + e * this.stepValue).toFixed(t)
            }))
        },
        getCircumference: function() {
            return 2 * Math.PI / this.valuesCount
        },
        setScaleSize: function() {
            var t, e, i, n, o, s, r, a, l, c, h, u, d = g([this.height / 2 - this.pointLabelFontSize - 5, this.width / 2]),
                p = this.width,
                m = 0;
            for (this.ctx.font = _(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), e = 0; e < this.valuesCount; e++) t = this.getPointPosition(e, d), i = this.ctx.measureText(x(this.templateString, {
                value: this.labels[e]
            })).width + 5, 0 === e || e === this.valuesCount / 2 ? (n = i / 2, t.x + n > p && (p = t.x + n, o = e), t.x - n < m && (m = t.x - n, r = e)) : e < this.valuesCount / 2 ? t.x + i > p && (p = t.x + i, o = e) : e > this.valuesCount / 2 && t.x - i < m && (m = t.x - i, r = e);
            l = m, c = Math.ceil(p - this.width), s = this.getIndexAngle(o), a = this.getIndexAngle(r), h = c / Math.sin(s + Math.PI / 2), u = l / Math.sin(a + Math.PI / 2), h = f(h) ? h : 0, u = f(u) ? u : 0, this.drawingArea = d - (u + h) / 2, this.setCenterPoint(u, h)
        },
        setCenterPoint: function(t, e) {
            var i = this.width - e - this.drawingArea,
                n = t + this.drawingArea;
            this.xCenter = (n + i) / 2, this.yCenter = this.height / 2
        },
        getIndexAngle: function(t) {
            var e = 2 * Math.PI / this.valuesCount;
            return t * e - Math.PI / 2
        },
        getPointPosition: function(t, e) {
            var i = this.getIndexAngle(t);
            return {
                x: Math.cos(i) * e + this.xCenter,
                y: Math.sin(i) * e + this.yCenter
            }
        },
        draw: function() {
            if (this.display) {
                var t = this.ctx;
                if (o(this.yLabels, function(e, i) {
                        if (i > 0) {
                            var n, o = i * (this.drawingArea / this.steps),
                                s = this.yCenter - o;
                            if (this.lineWidth > 0)
                                if (t.strokeStyle = this.lineColor, t.lineWidth = this.lineWidth, this.lineArc) t.beginPath(), t.arc(this.xCenter, this.yCenter, o, 0, 2 * Math.PI), t.closePath(), t.stroke();
                                else {
                                    t.beginPath();
                                    for (var r = 0; r < this.valuesCount; r++) n = this.getPointPosition(r, this.calculateCenterOffset(this.min + i * this.stepValue)), 0 === r ? t.moveTo(n.x, n.y) : t.lineTo(n.x, n.y);
                                    t.closePath(), t.stroke()
                                }
                            if (this.showLabels) {
                                if (t.font = _(this.fontSize, this.fontStyle, this.fontFamily), this.showLabelBackdrop) {
                                    var a = t.measureText(e).width;
                                    t.fillStyle = this.backdropColor, t.fillRect(this.xCenter - a / 2 - this.backdropPaddingX, s - this.fontSize / 2 - this.backdropPaddingY, a + 2 * this.backdropPaddingX, this.fontSize + 2 * this.backdropPaddingY)
                                }
                                t.textAlign = "center", t.textBaseline = "middle", t.fillStyle = this.fontColor, t.fillText(e, this.xCenter, s)
                            }
                        }
                    }, this), !this.lineArc) {
                    t.lineWidth = this.angleLineWidth, t.strokeStyle = this.angleLineColor;
                    for (var e = this.valuesCount - 1; e >= 0; e--) {
                        if (this.angleLineWidth > 0) {
                            var i = this.getPointPosition(e, this.calculateCenterOffset(this.max));
                            t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(i.x, i.y), t.stroke(), t.closePath()
                        }
                        var n = this.getPointPosition(e, this.calculateCenterOffset(this.max) + 5);
                        t.font = _(this.pointLabelFontSize, this.pointLabelFontStyle, this.pointLabelFontFamily), t.fillStyle = this.pointLabelFontColor;
                        var s = this.labels.length,
                            r = this.labels.length / 2,
                            a = r / 2,
                            l = a > e || e > s - a,
                            c = e === a || e === s - a;
                        t.textAlign = 0 === e ? "center" : e === r ? "center" : r > e ? "left" : "right", t.textBaseline = c ? "middle" : l ? "bottom" : "top", t.fillText(this.labels[e], n.x, n.y)
                    }
                }
            }
        }
    }), n.addEvent(window, "resize", function() {
        var t;
        return function() {
            clearTimeout(t), t = setTimeout(function() {
                o(i.instances, function(t) {
                    t.options.responsive && t.resize(t.render, !0)
                })
            }, 50)
        }
    }()), p ? define(function() {
        return i
    }) : "object" == typeof module && module.exports && (module.exports = i), t.Chart = i, i.noConflict = function() {
        return t.Chart = e, i
    }
}.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleBeginAtZero: !0,
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                barShowStroke: !0,
                barStrokeWidth: 2,
                barValueSpacing: 5,
                barDatasetSpacing: 1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].fillColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Bar",
            defaults: n,
            initialize: function(t) {
                var n = this.options;
                this.ScaleClass = e.Scale.extend({
                    offsetGridLines: !0,
                    calculateBarX: function(t, e, i) {
                        var o = this.calculateBaseWidth(),
                            s = this.calculateX(i) - o / 2,
                            r = this.calculateBarWidth(t);
                        return s + r * e + e * n.barDatasetSpacing + r / 2
                    },
                    calculateBaseWidth: function() {
                        return this.calculateX(1) - this.calculateX(0) - 2 * n.barValueSpacing
                    },
                    calculateBarWidth: function(t) {
                        var e = this.calculateBaseWidth() - (t - 1) * n.barDatasetSpacing;
                        return e / t
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getBarsAtEvent(t) : [];
                    this.eachBars(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), this.BarClass = e.Rectangle.extend({
                    strokeWidth: this.options.barStrokeWidth,
                    showStroke: this.options.barShowStroke,
                    ctx: this.chart.ctx
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        bars: []
                    };
                    this.datasets.push(n), i.each(e.data, function(o, s) {
                        i.isNumber(o) && n.bars.push(new this.BarClass({
                            value: o,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.strokeColor,
                            fillColor: e.fillColor,
                            highlightFill: e.highlightFill || e.fillColor,
                            highlightStroke: e.highlightStroke || e.strokeColor
                        }))
                    }, this)
                }, this), this.buildScale(t.labels), this.BarClass.prototype.base = this.scale.endPoint, this.eachBars(function(t, e, n) {
                    i.extend(t, {
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        x: this.scale.calculateBarX(this.datasets.length, n, e),
                        y: this.scale.endPoint
                    }), t.save()
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachBars(function(t) {
                    t.save()
                }), this.render()
            },
            eachBars: function(t) {
                i.each(this.datasets, function(e, n) {
                    i.each(e.bars, t, this, n)
                }, this)
            },
            getBarsAtEvent: function(t) {
                for (var e, n = [], o = i.getRelativePosition(t), s = function(t) {
                        n.push(t.bars[e])
                    }, r = 0; r < this.datasets.length; r++)
                    for (e = 0; e < this.datasets[r].bars.length; e++)
                        if (this.datasets[r].bars[e].inRange(o.x, o.y)) return i.each(this.datasets, s), n;
                return n
            },
            buildScale: function(t) {
                var e = this,
                    n = function() {
                        var t = [];
                        return e.eachBars(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    o = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(n(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.barShowStroke ? this.options.barStrokeWidth : 0,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(o, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new this.ScaleClass(o)
            },
            addData: function(t, e) {
                i.each(t, function(t, n) {
                    i.isNumber(t) && this.datasets[n].bars.push(new this.BarClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateBarX(this.datasets.length, n, this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        width: this.scale.calculateBarWidth(this.datasets.length),
                        base: this.scale.endPoint,
                        strokeColor: this.datasets[n].strokeColor,
                        fillColor: this.datasets[n].fillColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.bars.shift()
                }, this), this.update()
            },
            reflow: function() {
                i.extend(this.BarClass.prototype, {
                    y: this.scale.endPoint,
                    base: this.scale.endPoint
                });
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), this.chart.ctx, this.scale.draw(e), i.each(this.datasets, function(t, n) {
                    i.each(t.bars, function(t, i) {
                        t.base = this.scale.endPoint, t.transition({
                            x: this.scale.calculateBarX(this.datasets.length, n, i),
                            y: this.scale.calculateY(t.value),
                            width: this.scale.calculateBarWidth(this.datasets.length)
                        }, e).draw()
                    }, this)
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 50,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Doughnut",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, this.SegmentArc = e.Arc.extend({
                    ctx: this.chart.ctx,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.calculateTotal(t), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.outerRadius,
                    innerRadius: this.options.animateScale ? 0 : this.outerRadius / 100 * this.options.percentageInnerCutout,
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    startAngle: 1.5 * Math.PI,
                    circumference: this.options.animateRotate ? 0 : this.calculateCircumference(t.value),
                    label: t.label
                })), i || (this.reflow(), this.update())
            },
            calculateCircumference: function(t) {
                return 2 * Math.PI * (t / this.total)
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this)
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor"])
                }), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.outerRadius = (i.min([this.chart.width, this.chart.height]) - this.options.segmentStrokeWidth / 2) / 2, i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    })
                }, this)
            },
            draw: function(t) {
                var e = t ? t : 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.calculateCircumference(t.value),
                        outerRadius: this.outerRadius,
                        innerRadius: this.outerRadius / 100 * this.options.percentageInnerCutout
                    }, e), t.endAngle = t.startAngle + t.circumference, t.draw(), 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle)
                }, this)
            }
        }), e.types.Doughnut.extend({
            name: "Pie",
            defaults: i.merge(n, {
                percentageInnerCutout: 0
            })
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowGridLines: !0,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                bezierCurve: !0,
                bezierCurveTension: .4,
                pointDot: !0,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "Line",
            defaults: n,
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx,
                    inRange: function(t) {
                        return Math.pow(t - this.x, 2) < Math.pow(this.radius + this.hitDetectionRadius, 2)
                    }
                }), this.datasets = [], this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(o, s) {
                        i.isNumber(o) && n.points.push(new this.PointClass({
                            value: o,
                            label: t.labels[s],
                            datasetLabel: e.label,
                            strokeColor: e.pointStrokeColor,
                            fillColor: e.pointColor,
                            highlightFill: e.pointHighlightFill || e.pointColor,
                            highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                        }))
                    }, this), this.buildScale(t.labels), this.eachPoints(function(t, e) {
                        i.extend(t, {
                            x: this.scale.calculateX(e),
                            y: this.scale.endPoint
                        }), t.save()
                    }, this)
                }, this), this.render()
            },
            update: function() {
                this.scale.update(), i.each(this.activeElements, function(t) {
                    t.restore(["fillColor", "strokeColor"])
                }), this.eachPoints(function(t) {
                    t.save()
                }), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.datasets, function(t) {
                    i.each(t.points, function(t) {
                        t.inRange(n.x, n.y) && e.push(t)
                    })
                }, this), e
            },
            buildScale: function(t) {
                var n = this,
                    o = function() {
                        var t = [];
                        return n.eachPoints(function(e) {
                            t.push(e.value)
                        }), t
                    },
                    s = {
                        templateString: this.options.scaleLabel,
                        height: this.chart.height,
                        width: this.chart.width,
                        ctx: this.chart.ctx,
                        textColor: this.options.scaleFontColor,
                        fontSize: this.options.scaleFontSize,
                        fontStyle: this.options.scaleFontStyle,
                        fontFamily: this.options.scaleFontFamily,
                        valuesCount: t.length,
                        beginAtZero: this.options.scaleBeginAtZero,
                        integersOnly: this.options.scaleIntegersOnly,
                        calculateYRange: function(t) {
                            var e = i.calculateScaleRange(o(), t, this.fontSize, this.beginAtZero, this.integersOnly);
                            i.extend(this, e)
                        },
                        xLabels: t,
                        font: i.fontString(this.options.scaleFontSize, this.options.scaleFontStyle, this.options.scaleFontFamily),
                        lineWidth: this.options.scaleLineWidth,
                        lineColor: this.options.scaleLineColor,
                        gridLineWidth: this.options.scaleShowGridLines ? this.options.scaleGridLineWidth : 0,
                        gridLineColor: this.options.scaleShowGridLines ? this.options.scaleGridLineColor : "rgba(0,0,0,0)",
                        padding: this.options.showScale ? 0 : this.options.pointDotRadius + this.options.pointDotStrokeWidth,
                        showLabels: this.options.scaleShowLabels,
                        display: this.options.showScale
                    };
                this.options.scaleOverride && i.extend(s, {
                    calculateYRange: i.noop,
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                }), this.scale = new e.Scale(s)
            },
            addData: function(t, e) {
                i.each(t, function(t, n) {
                    i.isNumber(t) && this.datasets[n].points.push(new this.PointClass({
                        value: t,
                        label: e,
                        x: this.scale.calculateX(this.scale.valuesCount + 1),
                        y: this.scale.endPoint,
                        strokeColor: this.datasets[n].pointStrokeColor,
                        fillColor: this.datasets[n].pointColor
                    }))
                }, this), this.scale.addXLabel(e), this.update()
            },
            removeData: function() {
                this.scale.removeXLabel(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.update()
            },
            reflow: function() {
                var t = i.extend({
                    height: this.chart.height,
                    width: this.chart.width
                });
                this.scale.update(t)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear();
                var n = this.chart.ctx;
                this.scale.draw(e), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.transition({
                            y: this.scale.calculateY(t.value),
                            x: this.scale.calculateX(i)
                        }, e)
                    }, this), this.options.bezierCurve && i.each(t.points, function(e, n) {
                        e.controlPoints = 0 === n ? i.splineCurve(e, e, t.points[n + 1], 0) : n >= t.points.length - 1 ? i.splineCurve(t.points[n - 1], e, e, 0) : i.splineCurve(t.points[n - 1], e, t.points[n + 1], this.options.bezierCurveTension)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(e, i) {
                        i > 0 ? this.options.bezierCurve ? n.bezierCurveTo(t.points[i - 1].controlPoints.outer.x, t.points[i - 1].controlPoints.outer.y, e.controlPoints.inner.x, e.controlPoints.inner.y, e.x, e.y) : n.lineTo(e.x, e.y) : n.moveTo(e.x, e.y)
                    }, this), n.stroke(), this.options.datasetFill && (n.lineTo(t.points[t.points.length - 1].x, this.scale.endPoint), n.lineTo(this.scale.calculateX(0), this.scale.endPoint), n.fillStyle = t.fillColor, n.closePath(), n.fill()), i.each(t.points, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers,
            n = {
                scaleShowLabelBackdrop: !0,
                scaleBackdropColor: "rgba(255,255,255,0.75)",
                scaleBeginAtZero: !0,
                scaleBackdropPaddingY: 2,
                scaleBackdropPaddingX: 2,
                scaleShowLine: !0,
                segmentShowStroke: !0,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: !0,
                animateScale: !1,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
            };
        e.Type.extend({
            name: "PolarArea",
            defaults: n,
            initialize: function(t) {
                this.segments = [], this.SegmentArc = e.Arc.extend({
                    showStroke: this.options.segmentShowStroke,
                    strokeWidth: this.options.segmentStrokeWidth,
                    strokeColor: this.options.segmentStrokeColor,
                    ctx: this.chart.ctx,
                    innerRadius: 0,
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    lineArc: !0,
                    width: this.chart.width,
                    height: this.chart.height,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    valuesCount: t.length
                }), this.updateScaleRange(t), this.scale.update(), i.each(t, function(t, e) {
                    this.addData(t, e, !0)
                }, this), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getSegmentsAtEvent(t) : [];
                    i.each(this.segments, function(t) {
                        t.restore(["fillColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightColor
                    }), this.showTooltip(e)
                }), this.render()
            },
            getSegmentsAtEvent: function(t) {
                var e = [],
                    n = i.getRelativePosition(t);
                return i.each(this.segments, function(t) {
                    t.inRange(n.x, n.y) && e.push(t)
                }, this), e
            },
            addData: function(t, e, i) {
                var n = e || this.segments.length;
                this.segments.splice(n, 0, new this.SegmentArc({
                    fillColor: t.color,
                    highlightColor: t.highlight || t.color,
                    label: t.label,
                    value: t.value,
                    outerRadius: this.options.animateScale ? 0 : this.scale.calculateCenterOffset(t.value),
                    circumference: this.options.animateRotate ? 0 : this.scale.getCircumference(),
                    startAngle: 1.5 * Math.PI
                })), i || (this.reflow(), this.update())
            },
            removeData: function(t) {
                var e = i.isNumber(t) ? t : this.segments.length - 1;
                this.segments.splice(e, 1), this.reflow(), this.update()
            },
            calculateTotal: function(t) {
                this.total = 0, i.each(t, function(t) {
                    this.total += t.value
                }, this), this.scale.valuesCount = this.segments.length
            },
            updateScaleRange: function(t) {
                var e = [];
                i.each(t, function(t) {
                    e.push(t.value)
                });
                var n = this.options.scaleOverride ? {
                    steps: this.options.scaleSteps,
                    stepValue: this.options.scaleStepWidth,
                    min: this.options.scaleStartValue,
                    max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n, {
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                })
            },
            update: function() {
                this.calculateTotal(this.segments), i.each(this.segments, function(t) {
                    t.save()
                }), this.render()
            },
            reflow: function() {
                i.extend(this.SegmentArc.prototype, {
                    x: this.chart.width / 2,
                    y: this.chart.height / 2
                }), this.updateScaleRange(this.segments), this.scale.update(), i.extend(this.scale, {
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), i.each(this.segments, function(t) {
                    t.update({
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    })
                }, this)
            },
            draw: function(t) {
                var e = t || 1;
                this.clear(), i.each(this.segments, function(t, i) {
                    t.transition({
                        circumference: this.scale.getCircumference(),
                        outerRadius: this.scale.calculateCenterOffset(t.value)
                    }, e), t.endAngle = t.startAngle + t.circumference, 0 === i && (t.startAngle = 1.5 * Math.PI), i < this.segments.length - 1 && (this.segments[i + 1].startAngle = t.endAngle), t.draw()
                }, this), this.scale.draw()
            }
        })
    }.call(this),
    function() {
        "use strict";
        var t = this,
            e = t.Chart,
            i = e.helpers;
        e.Type.extend({
            name: "Radar",
            defaults: {
                scaleShowLine: !0,
                angleShowLineOut: !0,
                scaleShowLabels: !1,
                scaleBeginAtZero: !0,
                angleLineColor: "rgba(0,0,0,.1)",
                angleLineWidth: 1,
                pointLabelFontFamily: "'Arial'",
                pointLabelFontStyle: "normal",
                pointLabelFontSize: 10,
                pointLabelFontColor: "#666",
                pointDot: !0,
                pointDotRadius: 3,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: !0,
                datasetStrokeWidth: 2,
                datasetFill: !0,
                legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
            },
            initialize: function(t) {
                this.PointClass = e.Point.extend({
                    strokeWidth: this.options.pointDotStrokeWidth,
                    radius: this.options.pointDotRadius,
                    display: this.options.pointDot,
                    hitDetectionRadius: this.options.pointHitDetectionRadius,
                    ctx: this.chart.ctx
                }), this.datasets = [], this.buildScale(t), this.options.showTooltips && i.bindEvents(this, this.options.tooltipEvents, function(t) {
                    var e = "mouseout" !== t.type ? this.getPointsAtEvent(t) : [];
                    this.eachPoints(function(t) {
                        t.restore(["fillColor", "strokeColor"])
                    }), i.each(e, function(t) {
                        t.fillColor = t.highlightFill, t.strokeColor = t.highlightStroke
                    }), this.showTooltip(e)
                }), i.each(t.datasets, function(e) {
                    var n = {
                        label: e.label || null,
                        fillColor: e.fillColor,
                        strokeColor: e.strokeColor,
                        pointColor: e.pointColor,
                        pointStrokeColor: e.pointStrokeColor,
                        points: []
                    };
                    this.datasets.push(n), i.each(e.data, function(o, s) {
                        if (i.isNumber(o)) {
                            var r;
                            this.scale.animation || (r = this.scale.getPointPosition(s, this.scale.calculateCenterOffset(o))), n.points.push(new this.PointClass({
                                value: o,
                                label: t.labels[s],
                                datasetLabel: e.label,
                                x: this.options.animation ? this.scale.xCenter : r.x,
                                y: this.options.animation ? this.scale.yCenter : r.y,
                                strokeColor: e.pointStrokeColor,
                                fillColor: e.pointColor,
                                highlightFill: e.pointHighlightFill || e.pointColor,
                                highlightStroke: e.pointHighlightStroke || e.pointStrokeColor
                            }))
                        }
                    }, this)
                }, this), this.render()
            },
            eachPoints: function(t) {
                i.each(this.datasets, function(e) {
                    i.each(e.points, t, this)
                }, this)
            },
            getPointsAtEvent: function(t) {
                var e = i.getRelativePosition(t),
                    n = i.getAngleFromPoint({
                        x: this.scale.xCenter,
                        y: this.scale.yCenter
                    }, e),
                    o = 2 * Math.PI / this.scale.valuesCount,
                    s = Math.round((n.angle - 1.5 * Math.PI) / o),
                    r = [];
                return (s >= this.scale.valuesCount || 0 > s) && (s = 0), n.distance <= this.scale.drawingArea && i.each(this.datasets, function(t) {
                    r.push(t.points[s])
                }), r
            },
            buildScale: function(t) {
                this.scale = new e.RadialScale({
                    display: this.options.showScale,
                    fontStyle: this.options.scaleFontStyle,
                    fontSize: this.options.scaleFontSize,
                    fontFamily: this.options.scaleFontFamily,
                    fontColor: this.options.scaleFontColor,
                    showLabels: this.options.scaleShowLabels,
                    showLabelBackdrop: this.options.scaleShowLabelBackdrop,
                    backdropColor: this.options.scaleBackdropColor,
                    backdropPaddingY: this.options.scaleBackdropPaddingY,
                    backdropPaddingX: this.options.scaleBackdropPaddingX,
                    lineWidth: this.options.scaleShowLine ? this.options.scaleLineWidth : 0,
                    lineColor: this.options.scaleLineColor,
                    angleLineColor: this.options.angleLineColor,
                    angleLineWidth: this.options.angleShowLineOut ? this.options.angleLineWidth : 0,
                    pointLabelFontColor: this.options.pointLabelFontColor,
                    pointLabelFontSize: this.options.pointLabelFontSize,
                    pointLabelFontFamily: this.options.pointLabelFontFamily,
                    pointLabelFontStyle: this.options.pointLabelFontStyle,
                    height: this.chart.height,
                    width: this.chart.width,
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2,
                    ctx: this.chart.ctx,
                    templateString: this.options.scaleLabel,
                    labels: t.labels,
                    valuesCount: t.datasets[0].data.length
                }), this.scale.setScaleSize(), this.updateScaleRange(t.datasets), this.scale.buildYLabels()
            },
            updateScaleRange: function(t) {
                var e = function() {
                        var e = [];
                        return i.each(t, function(t) {
                            t.data ? e = e.concat(t.data) : i.each(t.points, function(t) {
                                e.push(t.value)
                            })
                        }), e
                    }(),
                    n = this.options.scaleOverride ? {
                        steps: this.options.scaleSteps,
                        stepValue: this.options.scaleStepWidth,
                        min: this.options.scaleStartValue,
                        max: this.options.scaleStartValue + this.options.scaleSteps * this.options.scaleStepWidth
                    } : i.calculateScaleRange(e, i.min([this.chart.width, this.chart.height]) / 2, this.options.scaleFontSize, this.options.scaleBeginAtZero, this.options.scaleIntegersOnly);
                i.extend(this.scale, n)
            },
            addData: function(t, e) {
                this.scale.valuesCount++, i.each(t, function(t, n) {
                    if (i.isNumber(t)) {
                        var o = this.scale.getPointPosition(this.scale.valuesCount, this.scale.calculateCenterOffset(t));
                        this.datasets[n].points.push(new this.PointClass({
                            value: t,
                            label: e,
                            x: o.x,
                            y: o.y,
                            strokeColor: this.datasets[n].pointStrokeColor,
                            fillColor: this.datasets[n].pointColor
                        }))
                    }
                }, this), this.scale.labels.push(e), this.reflow(), this.update()
            },
            removeData: function() {
                this.scale.valuesCount--, this.scale.labels.shift(), i.each(this.datasets, function(t) {
                    t.points.shift()
                }, this), this.reflow(), this.update()
            },
            update: function() {
                this.eachPoints(function(t) {
                    t.save()
                }), this.reflow(), this.render()
            },
            reflow: function() {
                i.extend(this.scale, {
                    width: this.chart.width,
                    height: this.chart.height,
                    size: i.min([this.chart.width, this.chart.height]),
                    xCenter: this.chart.width / 2,
                    yCenter: this.chart.height / 2
                }), this.updateScaleRange(this.datasets), this.scale.setScaleSize(), this.scale.buildYLabels()
            },
            draw: function(t) {
                var e = t || 1,
                    n = this.chart.ctx;
                this.clear(), this.scale.draw(), i.each(this.datasets, function(t) {
                    i.each(t.points, function(t, i) {
                        t.transition(this.scale.getPointPosition(i, this.scale.calculateCenterOffset(t.value)), e)
                    }, this), n.lineWidth = this.options.datasetStrokeWidth, n.strokeStyle = t.strokeColor, n.beginPath(), i.each(t.points, function(t, e) {
                        0 === e ? n.moveTo(t.x, t.y) : n.lineTo(t.x, t.y)
                    }, this), n.closePath(), n.stroke(), n.fillStyle = t.fillColor, n.fill(), i.each(t.points, function(t) {
                        t.draw()
                    })
                }, this)
            }
        })
    }.call(this), ! function(t) {
        var e = {},
            n = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                slideZIndex: 50,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {},
                onSliderResize: function() {}
            };
        t.fn.bxSlider = function(o) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                t(this).bxSlider(o)
            }), this;
            var s = {},
                r = this;
            e.el = this;
            var a = t(window).width(),
                l = t(window).height(),
                c = function() {
                    s.settings = t.extend({}, n, o), s.settings.slideWidth = parseInt(s.settings.slideWidth), s.children = r.children(s.settings.slideSelector), s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length), s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length), s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)), s.active = {
                        index: s.settings.startSlide
                    }, s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1, s.carousel && (s.settings.preloadImages = "all"), s.minThreshold = s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin, s.maxThreshold = s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin, s.working = !1, s.controls = {}, s.interval = null, s.animProp = "vertical" == s.settings.mode ? "top" : "left", s.usingCSS = s.settings.useCSS && "fade" != s.settings.mode && function() {
                        var t = document.createElement("div"),
                            e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return s.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), s.animProp = "-" + s.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == s.settings.mode && (s.settings.maxSlides = s.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(s.settings.slideSelector).each(function() {
                        t(this).data("origStyle", t(this).attr("style"))
                    }), h()
                },
                h = function() {
                    r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), s.viewport = r.parent(), s.loader = t('<div class="bx-loading" />'), s.viewport.prepend(s.loader), r.css({
                        width: "horizontal" == s.settings.mode ? 100 * s.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), s.usingCSS && s.settings.easing ? r.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing) : s.settings.easing || (s.settings.easing = "swing"), g(), s.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), s.viewport.parent().css({
                        maxWidth: f()
                    }), s.settings.pager || s.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), s.children.css({
                        "float": "horizontal" == s.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), s.children.css("width", m()), "horizontal" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginRight", s.settings.slideMargin), "vertical" == s.settings.mode && s.settings.slideMargin > 0 && s.children.css("marginBottom", s.settings.slideMargin), "fade" == s.settings.mode && (s.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), s.children.eq(s.settings.startSlide).css({
                        zIndex: s.settings.slideZIndex,
                        display: "block"
                    })), s.controls.el = t('<div class="bx-controls" />'), s.settings.captions && k(), s.active.last = s.settings.startSlide == v() - 1, s.settings.video && r.fitVids();
                    var e = s.children.eq(s.settings.startSlide);
                    "all" == s.settings.preloadImages && (e = s.children), s.settings.ticker ? s.settings.pager = !1 : (s.settings.pager && C(), s.settings.controls && S(), s.settings.auto && s.settings.autoControls && T(), (s.settings.controls || s.settings.autoControls || s.settings.pager) && s.viewport.after(s.controls.el)), u(e, d)
                },
                u = function(e, i) {
                    var n = e.find("img, iframe").length;
                    if (0 == n) return void i();
                    var o = 0;
                    e.find("img, iframe").each(function() {
                        t(this).one("load", function() {
                            ++o == n && i()
                        }).each(function() {
                            this.complete && t(this).load()
                        })
                    })
                },
                d = function() {
                    if (s.settings.infiniteLoop && "fade" != s.settings.mode && !s.settings.ticker) {
                        var e = "vertical" == s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
                            i = s.children.slice(0, e).clone().addClass("bx-clone"),
                            n = s.children.slice(-e).clone().addClass("bx-clone");
                        r.append(i).prepend(n)
                    }
                    s.loader.remove(), b(), "vertical" == s.settings.mode && (s.settings.adaptiveHeight = !0), s.viewport.height(p()), r.redrawSlider(), s.settings.onSliderLoad(s.active.index), s.initialized = !0, s.settings.responsive && t(window).bind("resize", q), s.settings.auto && s.settings.autoStart && M(), s.settings.ticker && z(), s.settings.pager && _(s.settings.startSlide), s.settings.controls && D(), s.settings.touchEnabled && !s.settings.ticker && R()
                },
                p = function() {
                    var e = 0,
                        n = t();
                    if ("vertical" == s.settings.mode || s.settings.adaptiveHeight)
                        if (s.carousel) {
                            var o = 1 == s.settings.moveSlides ? s.active.index : s.active.index * y();
                            for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++) n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i))
                        } else n = s.children.eq(s.active.index);
                    else n = s.children;
                    return "vertical" == s.settings.mode ? (n.each(function() {
                        e += t(this).outerHeight()
                    }), s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function() {
                        return t(this).outerHeight(!1)
                    }).get()), e
                },
                f = function() {
                    var t = "100%";
                    return s.settings.slideWidth > 0 && (t = "horizontal" == s.settings.mode ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin : s.settings.slideWidth), t
                },
                m = function() {
                    var t = s.settings.slideWidth,
                        e = s.viewport.width();
                    return 0 == s.settings.slideWidth || s.settings.slideWidth > e && !s.carousel || "vertical" == s.settings.mode ? t = e : s.settings.maxSlides > 1 && "horizontal" == s.settings.mode && (e > s.maxThreshold || e < s.minThreshold && (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)), t
                },
                g = function() {
                    var t = 1;
                    if ("horizontal" == s.settings.mode && s.settings.slideWidth > 0)
                        if (s.viewport.width() < s.minThreshold) t = s.settings.minSlides;
                        else if (s.viewport.width() > s.maxThreshold) t = s.settings.maxSlides;
                    else {
                        var e = s.children.first().width();
                        t = Math.floor(s.viewport.width() / e)
                    } else "vertical" == s.settings.mode && (t = s.settings.minSlides);
                    return t
                },
                v = function() {
                    var t = 0;
                    if (s.settings.moveSlides > 0)
                        if (s.settings.infiniteLoop) t = s.children.length / y();
                        else
                            for (var e = 0, i = 0; e < s.children.length;) ++t, e = i + g(), i += s.settings.moveSlides <= g() ? s.settings.moveSlides : g();
                    else t = Math.ceil(s.children.length / g());
                    return t
                },
                y = function() {
                    return s.settings.moveSlides > 0 && s.settings.moveSlides <= g() ? s.settings.moveSlides : g()
                },
                b = function() {
                    if (s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop) {
                        if ("horizontal" == s.settings.mode) {
                            var t = s.children.last(),
                                e = t.position();
                            w(-(e.left - (s.viewport.width() - t.width())), "reset", 0)
                        } else if ("vertical" == s.settings.mode) {
                            var i = s.children.length - s.settings.minSlides,
                                e = s.children.eq(i).position();
                            w(-e.top, "reset", 0)
                        }
                    } else {
                        var e = s.children.eq(s.active.index * y()).position();
                        s.active.index == v() - 1 && (s.active.last = !0), void 0 != e && ("horizontal" == s.settings.mode ? w(-e.left, "reset", 0) : "vertical" == s.settings.mode && w(-e.top, "reset", 0))
                    }
                },
                w = function(t, e, i, n) {
                    if (s.usingCSS) {
                        var o = "vertical" == s.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                        r.css("-" + s.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(s.animProp, o), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), L()
                        })) : "reset" == e ? r.css(s.animProp, o) : "ticker" == e && (r.css("-" + s.cssPrefix + "-transition-timing-function", "linear"), r.css(s.animProp, o), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), w(n.resetValue, "reset", 0), N()
                        }))
                    } else {
                        var a = {};
                        a[s.animProp] = t, "slide" == e ? r.animate(a, i, s.settings.easing, function() {
                            L()
                        }) : "reset" == e ? r.css(s.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function() {
                            w(n.resetValue, "reset", 0), N()
                        })
                    }
                },
                x = function() {
                    for (var e = "", i = v(), n = 0; i > n; n++) {
                        var o = "";
                        s.settings.buildPager && t.isFunction(s.settings.buildPager) ? (o = s.settings.buildPager(n), s.pagerEl.addClass("bx-custom-pager")) : (o = n + 1, s.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + n + '" class="bx-pager-link">' + o + "</a></div>"
                    }
                    s.pagerEl.html(e)
                },
                C = function() {
                    s.settings.pagerCustom ? s.pagerEl = t(s.settings.pagerCustom) : (s.pagerEl = t('<div class="bx-pager" />'), s.settings.pagerSelector ? t(s.settings.pagerSelector).html(s.pagerEl) : s.controls.el.addClass("bx-has-pager").append(s.pagerEl), x()), s.pagerEl.on("click", "a", P)
                },
                S = function() {
                    s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>"), s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>"), s.controls.next.bind("click", I), s.controls.prev.bind("click", E), s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next), s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev), s.settings.nextSelector || s.settings.prevSelector || (s.controls.directionEl = t('<div class="bx-controls-direction" />'), s.controls.directionEl.append(s.controls.prev).append(s.controls.next), s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl))
                },
                T = function() {
                    s.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>"), s.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>"), s.controls.autoEl = t('<div class="bx-controls-auto" />'), s.controls.autoEl.on("click", ".bx-start", $), s.controls.autoEl.on("click", ".bx-stop", A), s.settings.autoControlsCombine ? s.controls.autoEl.append(s.controls.start) : s.controls.autoEl.append(s.controls.start).append(s.controls.stop), s.settings.autoControlsSelector ? t(s.settings.autoControlsSelector).html(s.controls.autoEl) : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl), O(s.settings.autoStart ? "stop" : "start")
                },
                k = function() {
                    s.children.each(function() {
                        var e = t(this).find("img:first").attr("title");
                        void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                    })
                },
                I = function(t) {
                    s.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
                },
                E = function(t) {
                    s.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
                },
                $ = function(t) {
                    r.startAuto(), t.preventDefault()
                },
                A = function(t) {
                    r.stopAuto(), t.preventDefault()
                },
                P = function(e) {
                    s.settings.auto && r.stopAuto();
                    var i = t(e.currentTarget),
                        n = parseInt(i.attr("data-slide-index"));
                    n != s.active.index && r.goToSlide(n), e.preventDefault()
                },
                _ = function(e) {
                    var i = s.children.length;
                    return "short" == s.settings.pagerType ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)), void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i)) : (s.pagerEl.find("a").removeClass("active"), void s.pagerEl.each(function(i, n) {
                        t(n).find("a").eq(e).addClass("active")
                    }))
                },
                L = function() {
                    if (s.settings.infiniteLoop) {
                        var t = "";
                        0 == s.active.index ? t = s.children.eq(0).position() : s.active.index == v() - 1 && s.carousel ? t = s.children.eq((v() - 1) * y()).position() : s.active.index == s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()), t && ("horizontal" == s.settings.mode ? w(-t.left, "reset", 0) : "vertical" == s.settings.mode && w(-t.top, "reset", 0))
                    }
                    s.working = !1, s.settings.onSlideAfter(s.children.eq(s.active.index), s.oldIndex, s.active.index)
                },
                O = function(t) {
                    s.settings.autoControlsCombine ? s.controls.autoEl.html(s.controls[t]) : (s.controls.autoEl.find("a").removeClass("active"), s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
                },
                D = function() {
                    1 == v() ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled")) : !s.settings.infiniteLoop && s.settings.hideControlOnEnd && (0 == s.active.index ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled")) : s.active.index == v() - 1 ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled")) : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")))
                },
                M = function() {
                    s.settings.autoDelay > 0 ? setTimeout(r.startAuto, s.settings.autoDelay) : r.startAuto(), s.settings.autoHover && r.hover(function() {
                        s.interval && (r.stopAuto(!0), s.autoPaused = !0)
                    }, function() {
                        s.autoPaused && (r.startAuto(!0), s.autoPaused = null)
                    })
                },
                z = function() {
                    var e = 0;
                    if ("next" == s.settings.autoDirection) r.append(s.children.clone().addClass("bx-clone"));
                    else {
                        r.prepend(s.children.clone().addClass("bx-clone"));
                        var i = s.children.first().position();
                        e = "horizontal" == s.settings.mode ? -i.left : -i.top
                    }
                    w(e, "reset", 0), s.settings.pager = !1, s.settings.controls = !1, s.settings.autoControls = !1, s.settings.tickerHover && !s.usingCSS && s.viewport.hover(function() {
                        r.stop()
                    }, function() {
                        var e = 0;
                        s.children.each(function() {
                            e += "horizontal" == s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                        });
                        var i = s.settings.speed / e,
                            n = "horizontal" == s.settings.mode ? "left" : "top",
                            o = i * (e - Math.abs(parseInt(r.css(n))));
                        N(o)
                    }), N()
                },
                N = function(t) {
                    speed = t ? t : s.settings.speed;
                    var e = {
                            left: 0,
                            top: 0
                        },
                        i = {
                            left: 0,
                            top: 0
                        };
                    "next" == s.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = s.children.first().position();
                    var n = "horizontal" == s.settings.mode ? -e.left : -e.top,
                        o = "horizontal" == s.settings.mode ? -i.left : -i.top,
                        a = {
                            resetValue: o
                        };
                    w(n, "ticker", speed, a)
                },
                R = function() {
                    s.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, s.viewport.bind("touchstart", W)
                },
                W = function(t) {
                    if (s.working) t.preventDefault();
                    else {
                        s.touch.originalPos = r.position();
                        var e = t.originalEvent;
                        s.touch.start.x = e.changedTouches[0].pageX, s.touch.start.y = e.changedTouches[0].pageY, s.viewport.bind("touchmove", j), s.viewport.bind("touchend", F)
                    }
                },
                j = function(t) {
                    var e = t.originalEvent,
                        i = Math.abs(e.changedTouches[0].pageX - s.touch.start.x),
                        n = Math.abs(e.changedTouches[0].pageY - s.touch.start.y);
                    if (3 * i > n && s.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * n > i && s.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != s.settings.mode && s.settings.oneToOneTouch) {
                        var o = 0;
                        if ("horizontal" == s.settings.mode) {
                            var r = e.changedTouches[0].pageX - s.touch.start.x;
                            o = s.touch.originalPos.left + r
                        } else {
                            var r = e.changedTouches[0].pageY - s.touch.start.y;
                            o = s.touch.originalPos.top + r
                        }
                        w(o, "reset", 0)
                    }
                },
                F = function(t) {
                    s.viewport.unbind("touchmove", j);
                    var e = t.originalEvent,
                        i = 0;
                    if (s.touch.end.x = e.changedTouches[0].pageX, s.touch.end.y = e.changedTouches[0].pageY, "fade" == s.settings.mode) {
                        var n = Math.abs(s.touch.start.x - s.touch.end.x);
                        n >= s.settings.swipeThreshold && (s.touch.start.x > s.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                    } else {
                        var n = 0;
                        "horizontal" == s.settings.mode ? (n = s.touch.end.x - s.touch.start.x, i = s.touch.originalPos.left) : (n = s.touch.end.y - s.touch.start.y, i = s.touch.originalPos.top), !s.settings.infiniteLoop && (0 == s.active.index && n > 0 || s.active.last && 0 > n) ? w(i, "reset", 200) : Math.abs(n) >= s.settings.swipeThreshold ? (0 > n ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : w(i, "reset", 200)
                    }
                    s.viewport.unbind("touchend", F)
                },
                q = function() {
                    var e = t(window).width(),
                        i = t(window).height();
                    (a != e || l != i) && (a = e, l = i, r.redrawSlider(), s.settings.onSliderResize.call(r, s.active.index))
                };
            return r.goToSlide = function(e, i) {
                if (!s.working && s.active.index != e)
                    if (s.working = !0, s.oldIndex = s.active.index, s.active.index = 0 > e ? v() - 1 : e >= v() ? 0 : e, s.settings.onSlideBefore(s.children.eq(s.active.index), s.oldIndex, s.active.index), "next" == i ? s.settings.onSlideNext(s.children.eq(s.active.index), s.oldIndex, s.active.index) : "prev" == i && s.settings.onSlidePrev(s.children.eq(s.active.index), s.oldIndex, s.active.index), s.active.last = s.active.index >= v() - 1, s.settings.pager && _(s.active.index), s.settings.controls && D(), "fade" == s.settings.mode) s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                        height: p()
                    }, s.settings.adaptiveHeightSpeed), s.children.filter(":visible").fadeOut(s.settings.speed).css({
                        zIndex: 0
                    }), s.children.eq(s.active.index).css("zIndex", s.settings.slideZIndex + 1).fadeIn(s.settings.speed, function() {
                        t(this).css("zIndex", s.settings.slideZIndex), L()
                    });
                    else {
                        s.settings.adaptiveHeight && s.viewport.height() != p() && s.viewport.animate({
                            height: p()
                        }, s.settings.adaptiveHeightSpeed);
                        var n = 0,
                            o = {
                                left: 0,
                                top: 0
                            };
                        if (!s.settings.infiniteLoop && s.carousel && s.active.last)
                            if ("horizontal" == s.settings.mode) {
                                var a = s.children.eq(s.children.length - 1);
                                o = a.position(), n = s.viewport.width() - a.outerWidth()
                            } else {
                                var l = s.children.length - s.settings.minSlides;
                                o = s.children.eq(l).position()
                            } else if (s.carousel && s.active.last && "prev" == i) {
                            var c = 1 == s.settings.moveSlides ? s.settings.maxSlides - y() : (v() - 1) * y() - (s.children.length - s.settings.maxSlides),
                                a = r.children(".bx-clone").eq(c);
                            o = a.position()
                        } else if ("next" == i && 0 == s.active.index) o = r.find("> .bx-clone").eq(s.settings.maxSlides).position(), s.active.last = !1;
                        else if (e >= 0) {
                            var h = e * y();
                            o = s.children.eq(h).position()
                        }
                        if ("undefined" != typeof o) {
                            var u = "horizontal" == s.settings.mode ? -(o.left - n) : -o.top;
                            w(u, "slide", s.settings.speed)
                        }
                    }
            }, r.goToNextSlide = function() {
                if (s.settings.infiniteLoop || !s.active.last) {
                    var t = parseInt(s.active.index) + 1;
                    r.goToSlide(t, "next")
                }
            }, r.goToPrevSlide = function() {
                if (s.settings.infiniteLoop || 0 != s.active.index) {
                    var t = parseInt(s.active.index) - 1;
                    r.goToSlide(t, "prev")
                }
            }, r.startAuto = function(t) {
                s.interval || (s.interval = setInterval(function() {
                    "next" == s.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
                }, s.settings.pause), s.settings.autoControls && 1 != t && O("stop"))
            }, r.stopAuto = function(t) {
                s.interval && (clearInterval(s.interval), s.interval = null, s.settings.autoControls && 1 != t && O("start"))
            }, r.getCurrentSlide = function() {
                return s.active.index
            }, r.getCurrentSlideElement = function() {
                return s.children.eq(s.active.index)
            }, r.getSlideCount = function() {
                return s.children.length
            }, r.redrawSlider = function() {
                s.children.add(r.find(".bx-clone")).outerWidth(m()), s.viewport.css("height", p()), s.settings.ticker || b(), s.active.last && (s.active.index = v() - 1), s.active.index >= v() && (s.active.last = !0), s.settings.pager && !s.settings.pagerCustom && (x(), _(s.active.index))
            }, r.destroySlider = function() {
                s.initialized && (s.initialized = !1, t(".bx-clone", this).remove(), s.children.each(function() {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), s.controls.el && s.controls.el.remove(), s.controls.next && s.controls.next.remove(), s.controls.prev && s.controls.prev.remove(), s.pagerEl && s.settings.controls && s.pagerEl.remove(), t(".bx-caption", this).remove(), s.controls.autoEl && s.controls.autoEl.remove(), clearInterval(s.interval), s.settings.responsive && t(window).unbind("resize", q))
            }, r.reloadSlider = function(t) {
                void 0 != t && (o = t), r.destroySlider(), c()
            }, c(), this
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
    }(function(t) {
        "use strict";
        var e = {},
            i = Math.max,
            n = Math.min;
        e.c = {}, e.c.d = t(document), e.c.t = function(t) {
            return t.originalEvent.touches.length - 1
        }, e.o = function() {
            var i = this;
            this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
                var e = function(t, e) {
                    var n;
                    for (n in e) i.o[n] = e[n];
                    i._carve().init(), i._configure()._draw()
                };
                if (!this.$.data("kontroled")) {
                    if (this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                            min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                            max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                            stopper: !0,
                            readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                            cursor: this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
                            thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                            lineCap: this.$.data("linecap") || "butt",
                            width: this.$.data("width") || 200,
                            height: this.$.data("height") || 200,
                            displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                            displayPrevious: this.$.data("displayprevious"),
                            fgColor: this.$.data("fgcolor") || "#87CEEB",
                            inputColor: this.$.data("inputcolor"),
                            font: this.$.data("font") || "Arial",
                            fontWeight: this.$.data("font-weight") || "bold",
                            inline: !1,
                            step: this.$.data("step") || 1,
                            rotation: this.$.data("rotation"),
                            draw: null,
                            change: null,
                            cancel: null,
                            release: null,
                            format: function(t) {
                                return t
                            },
                            parse: function(t) {
                                return parseFloat(t)
                            }
                        }, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(e) {
                            var n = t(this);
                            i.i[e] = n, i.v[e] = i.o.parse(n.val()), n.bind("change blur", function() {
                                var t = {};
                                t[e] = n.val(), i.val(i._validate(t))
                            })
                        }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                            i.val(i._validate(i.o.parse(i.$.val())))
                        })), !this.o.displayInput && this.$.hide(), this.$c = t(document.createElement("canvas")).attr({
                            width: this.o.width,
                            height: this.o.height
                        }), this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c) throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    };
                    return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", e).parent().bind("configure", e), this._listen()._configure()._xy().init(), this.isInit = !0, this.$.val(this.o.format(this.v)), this._draw(), this
                }
            }, this._carve = function() {
                if (this.relative) {
                    var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                        e = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                    this.w = this.h = Math.min(t, e)
                } else this.w = this.o.width, this.h = this.o.height;
                return this.$div.css({
                    width: this.w + "px",
                    height: this.h + "px"
                }), this.$c.attr({
                    width: this.w,
                    height: this.h
                }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
            }, this._draw = function() {
                var t = !0;
                i.g = i.c, i.clear(), i.dH && (t = i.dH()), t !== !1 && i.draw()
            }, this._touch = function(t) {
                var n = function(t) {
                    var e = i.xy2val(t.originalEvent.touches[i.t].pageX, t.originalEvent.touches[i.t].pageY);
                    e != i.cv && (i.cH && i.cH(e) === !1 || (i.change(i._validate(e)), i._draw()))
                };
                return this.t = e.c.t(t), n(t), e.c.d.bind("touchmove.k", n).bind("touchend.k", function() {
                    e.c.d.unbind("touchmove.k touchend.k"), i.val(i.cv)
                }), this
            }, this._mouse = function(t) {
                var n = function(t) {
                    var e = i.xy2val(t.pageX, t.pageY);
                    e != i.cv && (i.cH && i.cH(e) === !1 || (i.change(i._validate(e)), i._draw()))
                };
                return n(t), e.c.d.bind("mousemove.k", n).bind("keyup.k", function(t) {
                    if (27 === t.keyCode) {
                        if (e.c.d.unbind("mouseup.k mousemove.k keyup.k"), i.eH && i.eH() === !1) return;
                        i.cancel()
                    }
                }).bind("mouseup.k", function() {
                    e.c.d.unbind("mousemove.k mouseup.k keyup.k"), i.val(i.cv)
                }), this
            }, this._xy = function() {
                var t = this.$c.offset();
                return this.x = t.left, this.y = t.top, this
            }, this._listen = function() {
                return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                    t.preventDefault(), i._xy()._mouse(t)
                }).bind("touchstart", function(t) {
                    t.preventDefault(), i._xy()._touch(t)
                }), this.listen()), this.relative && t(window).resize(function() {
                    i._carve().init(), i._draw()
                }), this
            }, this._configure = function() {
                return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
            }, this._clear = function() {
                this.$c[0].width = this.$c[0].width
            }, this._validate = function(t) {
                var e = ~~((0 > t ? -.5 : .5) + t / this.o.step) * this.o.step;
                return Math.round(100 * e) / 100
            }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function() {}, this.val = function() {}, this.xy2val = function() {}, this.draw = function() {}, this.clear = function() {
                this._clear()
            }, this.h2rgba = function(t, e) {
                var i;
                return t = t.substring(1, 7), i = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)], "rgba(" + i[0] + "," + i[1] + "," + i[2] + "," + e + ")"
            }, this.copy = function(t, e) {
                for (var i in t) e[i] = t[i]
            }
        }, e.Dial = function() {
            e.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
                this.o = t.extend({
                    bgColor: this.$.data("bgcolor") || "#EEEEEE",
                    angleOffset: this.$.data("angleoffset") || 0,
                    angleArc: this.$.data("anglearc") || 360,
                    inline: !0
                }, this.o)
            }, this.val = function(t, e) {
                return null == t ? this.v : (t = this.o.parse(t), void(e !== !1 && t != this.v && this.rH && this.rH(t) === !1 || (this.cv = this.o.stopper ? i(n(t, this.o.max), this.o.min) : t, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw())))
            }, this.xy2val = function(t, e) {
                var o, s;
                return o = Math.atan2(t - (this.x + this.w2), -(e - this.y - this.w2)) - this.angleOffset, this.o.flip && (o = this.angleArc - o - this.PI2), this.angleArc != this.PI2 && 0 > o && o > -.5 ? o = 0 : 0 > o && (o += this.PI2), s = o * (this.o.max - this.o.min) / this.angleArc + this.o.min, this.o.stopper && (s = i(n(s, this.o.max), this.o.min)), s
            }, this.listen = function() {
                var e, o, s, r, a = this,
                    l = function(t) {
                        t.preventDefault();
                        var s = t.originalEvent,
                            r = s.detail || s.wheelDeltaX,
                            l = s.detail || s.wheelDeltaY,
                            c = a._validate(a.o.parse(a.$.val())) + (r > 0 || l > 0 ? a.o.step : 0 > r || 0 > l ? -a.o.step : 0);
                        c = i(n(c, a.o.max), a.o.min), a.val(c, !1), a.rH && (clearTimeout(e), e = setTimeout(function() {
                            a.rH(c), e = null
                        }, 100), o || (o = setTimeout(function() {
                            e && a.rH(c), o = null
                        }, 200)))
                    },
                    c = 1,
                    h = {
                        37: -a.o.step,
                        38: a.o.step,
                        39: a.o.step,
                        40: -a.o.step
                    };
                this.$.bind("keydown", function(e) {
                    var o = e.keyCode;
                    if (o >= 96 && 105 >= o && (o = e.keyCode = o - 48), s = parseInt(String.fromCharCode(o)), isNaN(s) && (13 !== o && 8 !== o && 9 !== o && 189 !== o && (190 !== o || a.$.val().match(/\./)) && e.preventDefault(), t.inArray(o, [37, 38, 39, 40]) > -1)) {
                        e.preventDefault();
                        var l = a.o.parse(a.$.val()) + h[o] * c;
                        a.o.stopper && (l = i(n(l, a.o.max), a.o.min)), a.change(a._validate(l)), a._draw(), r = window.setTimeout(function() {
                            c *= 2
                        }, 30)
                    }
                }).bind("keyup", function() {
                    isNaN(s) ? r && (window.clearTimeout(r), r = null, c = 1, a.val(a.$.val())) : a.$.val() > a.o.max && a.$.val(a.o.max) || a.$.val() < a.o.min && a.$.val(a.o.min)
                }), this.$c.bind("mousewheel DOMMouseScroll", l), this.$.bind("mousewheel DOMMouseScroll", l)
            }, this.init = function() {
                (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                var t = i(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                this.o.displayInput && this.i.css({
                    width: (this.w / 2 + 4 >> 0) + "px",
                    height: (this.w / 3 >> 0) + "px",
                    position: "absolute",
                    "vertical-align": "middle",
                    "margin-top": (this.w / 3 >> 0) + "px",
                    "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                    border: 0,
                    background: "none",
                    font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                    "text-align": "center",
                    color: this.o.inputColor || this.o.fgColor,
                    padding: "0px",
                    "-webkit-appearance": "none"
                }) || this.i.css({
                    width: "0px",
                    visibility: "hidden"
                })
            }, this.change = function(t) {
                this.cv = t, this.$.val(this.o.format(t))
            }, this.angle = function(t) {
                return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
            }, this.arc = function(t) {
                var e, i;
                return t = this.angle(t), this.o.flip ? (e = this.endAngle + 1e-5, i = e - t - 1e-5) : (e = this.startAngle - 1e-5, i = e + t + 1e-5), this.o.cursor && (e = i - this.cursorExt) && (i += this.cursorExt), {
                    s: e,
                    e: i,
                    d: this.o.flip && !this.o.cursor
                }
            }, this.draw = function() {
                var t, e = this.g,
                    i = this.arc(this.cv),
                    n = 1;
                e.lineWidth = this.lineWidth, e.lineCap = this.lineCap, "none" !== this.o.bgColor && (e.beginPath(), e.strokeStyle = this.o.bgColor, e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), e.stroke()), this.o.displayPrevious && (t = this.arc(this.v), e.beginPath(), e.strokeStyle = this.pColor, e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d), e.stroke(), n = this.cv == this.v), e.beginPath(), e.strokeStyle = n ? this.o.fgColor : this.fgColor, e.arc(this.xy, this.xy, this.radius, i.s, i.e, i.d), e.stroke()
            }, this.cancel = function() {
                this.val(this.v)
            }
        }, t.fn.dial = t.fn.knob = function(i) {
            return this.each(function() {
                var n = new e.Dial;
                n.o = i, n.$ = t(this), n.run()
            }).parent()
        }
    })(function(t) {
        var e = new Array,
            i = new Array,
            n = function() {},
            o = 0,
            s = {
                splashVPos: "35%",
                loaderVPos: "75%",
                splashID: "#jpreContent",
                showSplash: !0,
                showPercentage: !0,
                autoClose: !0,
                closeBtnText: "Start!",
                onetimeLoad: !1,
                debugMode: !1,
                splashFunction: function() {}
            },
            r = function() {
                if (s.onetimeLoad) {
                    for (var t, e = document.cookie.split("; "), i = 0; t = e[i] && e[i].split("="); i++)
                        if ("jpreLoader" === t.shift()) return t.join("=");
                    return !1
                }
                return !1
            },
            a = function(t) {
                if (s.onetimeLoad) {
                    var e = new Date;
                    e.setDate(e.getDate() + t);
                    var i = null == t ? "" : "expires=" + e.toUTCString();
                    document.cookie = "jpreLoader=loaded; " + i
                }
            },
            l = function() {
                if (jOverlay = t("<div></div>").attr("id", "jpreOverlay").css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: 9999999
                    }).appendTo("body"), s.showSplash) {
                    jContent = t("<div></div>").attr("id", "jpreSlide").appendTo(jOverlay);
                    var e = t(window).width() - t(jContent).width();
                    t(jContent).css({
                        position: "absolute",
                        top: s.splashVPos,
                        left: Math.round(50 / t(window).width() * e) + "%"
                    }), t(jContent).html(t(s.splashID).wrap("<div/>").parent().html()), t(s.splashID).remove(), s.splashFunction()
                }
                jLoader = t("<div></div>").attr("id", "jpreLoader").appendTo(jOverlay);
                var i = t(window).width() - t(jLoader).width();
                t(jLoader).css({
                    position: "absolute",
                    top: s.loaderVPos,
                    left: Math.round(50 / t(window).width() * i) + "%"
                }), jBar = t("<div></div>").attr("id", "jpreBar").css({
                    width: "0%",
                    height: "100%"
                }).appendTo(jLoader), s.showPercentage && (jPer = t("<div></div>").attr("id", "jprePercentage").css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).html("Loading...")), s.autoclose || (jButton = t("<div></div>").attr("id", "jpreButton").on("click", function() {
                    p()
                }).css({
                    position: "relative",
                    height: "100%"
                }).appendTo(jLoader).text(s.closeBtnText).hide())
            },
            c = function(i) {
                t(i).find("*:not(script)").each(function() {
                    var i = "";
                    if (-1 == t(this).css("background-image").indexOf("none") && -1 == t(this).css("background-image").indexOf("-gradient")) {
                        if (i = t(this).css("background-image"), -1 != i.indexOf("url")) {
                            var n = i.match(/url\((.*?)\)/);
                            i = n[1].replace(/\"/g, "")
                        }
                    } else "img" == t(this).get(0).nodeName.toLowerCase() && "undefined" != typeof t(this).attr("src") && (i = t(this).attr("src"));
                    i.length > 0 && e.push(i)
                })
            },
            h = function() {
                for (var t = 0; t < e.length; t++) u(e[t])
            },
            u = function(e) {
                var n = new Image;
                t(n).load(function() {
                    d()
                }).error(function() {
                    i.push(t(this).attr("src")), d()
                }).attr("src", e)
            },
            d = function() {
                o++;
                var i = Math.round(o / e.length * 100);
                if (t(jBar).stop().animate({
                        width: i + "%"
                    }, 500, "linear"), s.showPercentage && t(jPer).text(i + "%"), o >= e.length) {
                    if (o = e.length, a(), s.showPercentage && t(jPer).text("100%"), s.debugMode) {
                        f()
                    }
                    t(jBar).stop().animate({
                        width: "100%"
                    }, 500, "linear", function() {
                        s.autoClose ? p() : t(jButton).fadeIn(1e3)
                    })
                }
            },
            p = function() {
                t(jOverlay).fadeOut(800, function() {
                    t(jOverlay).remove(), n()
                })
            },
            f = function() {
                if (i.length > 0) {
                    var t = "ERROR - IMAGE FILES MISSING!!!\n\r";
                    t += i.length + " image files cound not be found. \n\r", t += "Please check your image paths and filenames:\n\r";
                    for (var e = 0; e < i.length; e++) t += "- " + i[e] + "\n\r";
                    return !0
                }
                return !1
            };
        t.fn.jpreLoader = function(e, i) {
            return e && t.extend(s, e), "function" == typeof i && (n = i), t("body").css({
                display: "block"
            }), this.each(function() {
                r() ? (t(s.splashID).remove(), n()) : (l(), c(this), h())
            })
        }
    })(jQuery);
var debouncer = function(t, e, i, n) {
    var o = function(t, e, i) {
        var o;
        return function() {
            function s() {
                i || t.apply(r, a), o = null
            }
            var r = this,
                a = arguments;
            o ? clearTimeout(o) : i && t.apply(r, a), o = setTimeout(s, e || n)
        }
    };
    jQuery.fn[e] = function(t) {
        return t ? this.bind(i, o(t)) : this.trigger(e)
    }
};
debouncer(jQuery, "smartresize", "resize", 100), debouncer(jQuery, "smartload", "load", 100), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, i, n, o) {
            return jQuery.easing[jQuery.easing.def](t, e, i, n, o)
        },
        easeInQuad: function(t, e, i, n, o) {
            return n * (e /= o) * e + i
        },
        easeOutQuad: function(t, e, i, n, o) {
            return -n * (e /= o) * (e - 2) + i
        },
        easeInOutQuad: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e + i : -n / 2 * (--e * (e - 2) - 1) + i
        },
        easeInCubic: function(t, e, i, n, o) {
            return n * (e /= o) * e * e + i
        },
        easeOutCubic: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e + 1) + i
        },
        easeInOutCubic: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e + i : n / 2 * ((e -= 2) * e * e + 2) + i
        },
        easeInQuart: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e + i
        },
        easeOutQuart: function(t, e, i, n, o) {
            return -n * ((e = e / o - 1) * e * e * e - 1) + i
        },
        easeInOutQuart: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e + i : -n / 2 * ((e -= 2) * e * e * e - 2) + i
        },
        easeInQuint: function(t, e, i, n, o) {
            return n * (e /= o) * e * e * e * e + i
        },
        easeOutQuint: function(t, e, i, n, o) {
            return n * ((e = e / o - 1) * e * e * e * e + 1) + i
        },
        easeInOutQuint: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? n / 2 * e * e * e * e * e + i : n / 2 * ((e -= 2) * e * e * e * e + 2) + i
        },
        easeInSine: function(t, e, i, n, o) {
            return -n * Math.cos(e / o * (Math.PI / 2)) + n + i
        },
        easeOutSine: function(t, e, i, n, o) {
            return n * Math.sin(e / o * (Math.PI / 2)) + i
        },
        easeInOutSine: function(t, e, i, n, o) {
            return -n / 2 * (Math.cos(Math.PI * e / o) - 1) + i
        },
        easeInExpo: function(t, e, i, n, o) {
            return 0 == e ? i : n * Math.pow(2, 10 * (e / o - 1)) + i
        },
        easeOutExpo: function(t, e, i, n, o) {
            return e == o ? i + n : n * (-Math.pow(2, -10 * e / o) + 1) + i
        },
        easeInOutExpo: function(t, e, i, n, o) {
            return 0 == e ? i : e == o ? i + n : (e /= o / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
        },
        easeInCirc: function(t, e, i, n, o) {
            return -n * (Math.sqrt(1 - (e /= o) * e) - 1) + i
        },
        easeOutCirc: function(t, e, i, n, o) {
            return n * Math.sqrt(1 - (e = e / o - 1) * e) + i
        },
        easeInOutCirc: function(t, e, i, n, o) {
            return (e /= o / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + i : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + i
        },
        easeInElastic: function(t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), a < Math.abs(n)) {
                a = n;
                var s = r / 4
            } else var s = r / (2 * Math.PI) * Math.asin(n / a);
            return -(a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r)) + i
        },
        easeOutElastic: function(t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (1 == (e /= o)) return i + n;
            if (r || (r = .3 * o), a < Math.abs(n)) {
                a = n;
                var s = r / 4
            } else var s = r / (2 * Math.PI) * Math.asin(n / a);
            return a * Math.pow(2, -10 * e) * Math.sin((e * o - s) * (2 * Math.PI) / r) + n + i
        },
        easeInOutElastic: function(t, e, i, n, o) {
            var s = 1.70158,
                r = 0,
                a = n;
            if (0 == e) return i;
            if (2 == (e /= o / 2)) return i + n;
            if (r || (r = o * (.3 * 1.5)), a < Math.abs(n)) {
                a = n;
                var s = r / 4
            } else var s = r / (2 * Math.PI) * Math.asin(n / a);
            return 1 > e ? -.5 * (a * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r)) + i : a * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * o - s) * (2 * Math.PI) / r) * .5 + n + i
        },
        easeInBack: function(t, e, i, n, o, s) {
            return void 0 == s && (s = 1.70158), n * (e /= o) * e * ((s + 1) * e - s) + i
        },
        easeOutBack: function(t, e, i, n, o, s) {
            return void 0 == s && (s = 1.70158), n * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + i
        },
        easeInOutBack: function(t, e, i, n, o, s) {
            return void 0 == s && (s = 1.70158), (e /= o / 2) < 1 ? n / 2 * (e * e * (((s *= 1.525) + 1) * e - s)) + i : n / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + i
        },
        easeInBounce: function(t, e, i, n, o) {
            return n - jQuery.easing.easeOutBounce(t, o - e, 0, n, o) + i
        },
        easeOutBounce: function(t, e, i, n, o) {
            return (e /= o) < 1 / 2.75 ? n * (7.5625 * e * e) + i : 2 / 2.75 > e ? n * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + i : 2.5 / 2.75 > e ? n * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + i : n * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + i
        },
        easeInOutBounce: function(t, e, i, n, o) {
            return o / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, n, o) + i : .5 * jQuery.easing.easeOutBounce(t, 2 * e - o, 0, n, o) + .5 * n + i
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e = Array.prototype.slice,
            i = Array.prototype.splice,
            n = {
                topSpacing: 0,
                bottomSpacing: 0,
                className: "is-sticky",
                wrapperClassName: "sticky-wrapper",
                center: !1,
                getWidthFrom: "",
                widthFromWrapper: !0,
                responsiveWidth: !1,
                zIndex: "auto"
            },
            o = t(window),
            s = t(document),
            r = [],
            a = o.height(),
            l = function() {
                for (var e = o.scrollTop(), i = s.height(), n = i - a, l = e > n ? n - e : 0, c = 0, h = r.length; h > c; c++) {
                    var u = r[c],
                        d = u.stickyWrapper.offset().top,
                        p = d - u.topSpacing - l;
                    if (u.stickyWrapper.css("height", u.stickyElement.outerHeight()), p >= e) null !== u.currentTop && (u.stickyElement.css({
                        width: "",
                        position: "",
                        top: "",
                        "z-index": ""
                    }), u.stickyElement.parent().removeClass(u.className), u.stickyElement.trigger("sticky-end", [u]), u.currentTop = null);
                    else {
                        var f = i - u.stickyElement.outerHeight() - u.topSpacing - u.bottomSpacing - e - l;
                        if (0 > f ? f += u.topSpacing : f = u.topSpacing, u.currentTop !== f) {
                            var m;
                            u.getWidthFrom ? m = t(u.getWidthFrom).width() || null : u.widthFromWrapper && (m = u.stickyWrapper.width()), null == m && (m = u.stickyElement.width()), u.stickyElement.css("width", m).css("position", "fixed").css("top", f).css("z-index", u.zIndex), u.stickyElement.parent().addClass(u.className), null === u.currentTop ? u.stickyElement.trigger("sticky-start", [u]) : u.stickyElement.trigger("sticky-update", [u]), u.currentTop === u.topSpacing && u.currentTop > f || null === u.currentTop && f < u.topSpacing ? u.stickyElement.trigger("sticky-bottom-reached", [u]) : null !== u.currentTop && f === u.topSpacing && u.currentTop < f && u.stickyElement.trigger("sticky-bottom-unreached", [u]), u.currentTop = f
                        }
                        var g = u.stickyWrapper.parent(),
                            v = u.stickyElement.offset().top + u.stickyElement.outerHeight() >= g.offset().top + g.outerHeight() && u.stickyElement.offset().top <= u.topSpacing;
                        v ? u.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : u.stickyElement.css("position", "fixed").css("top", f).css("bottom", "").css("z-index", u.zIndex)
                    }
                }
            },
            c = function() {
                a = o.height();
                for (var e = 0, i = r.length; i > e; e++) {
                    var n = r[e],
                        s = null;
                    n.getWidthFrom ? n.responsiveWidth && (s = t(n.getWidthFrom).width()) : n.widthFromWrapper && (s = n.stickyWrapper.width()), null != s && n.stickyElement.css("width", s)
                }
            },
            h = {
                init: function(e) {
                    var i = t.extend({}, n, e);
                    return this.each(function() {
                        var e = t(this),
                            o = e.attr("id"),
                            s = o ? o + "-" + n.wrapperClassName : n.wrapperClassName,
                            a = t("<div></div>").attr("id", s).addClass(i.wrapperClassName);
                        e.wrapAll(a);
                        var l = e.parent();
                        i.center && l.css({
                            width: e.outerWidth(),
                            marginLeft: "auto",
                            marginRight: "auto"
                        }), "right" === e.css("float") && e.css({
                            "float": "none"
                        }).parent().css({
                            "float": "right"
                        }), i.stickyElement = e, i.stickyWrapper = l, i.currentTop = null, r.push(i), h.setWrapperHeight(this), h.setupChangeListeners(this)
                    })
                },
                setWrapperHeight: function(e) {
                    var i = t(e),
                        n = i.parent();
                    n && n.css("height", i.outerHeight())
                },
                setupChangeListeners: function(t) {
                    if (window.MutationObserver) {
                        var e = new window.MutationObserver(function(e) {
                            (e[0].addedNodes.length || e[0].removedNodes.length) && h.setWrapperHeight(t)
                        });
                        e.observe(t, {
                            subtree: !0,
                            childList: !0
                        })
                    } else t.addEventListener("DOMNodeInserted", function() {
                        h.setWrapperHeight(t)
                    }, !1), t.addEventListener("DOMNodeRemoved", function() {
                        h.setWrapperHeight(t)
                    }, !1)
                },
                update: l,
                unstick: function() {
                    return this.each(function() {
                        for (var e = this, n = t(e), o = -1, s = r.length; s-- > 0;) r[s].stickyElement.get(0) === e && (i.call(r, s, 1), o = s); - 1 !== o && (n.unwrap(), n.css({
                            width: "",
                            position: "",
                            top: "",
                            "float": "",
                            "z-index": ""
                        }))
                    })
                }
            };
        window.addEventListener ? (window.addEventListener("scroll", l, !1), window.addEventListener("resize", c, !1)) : window.attachEvent && (window.attachEvent("onscroll", l), window.attachEvent("onresize", c)), t.fn.sticky = function(i) {
            return h[i] ? h[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : h.init.apply(this, arguments)
        }, t.fn.unstick = function(i) {
            return h[i] ? h[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : h.unstick.apply(this, arguments)
        }, t(function() {
            setTimeout(l, 0)
        })
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        function e() {
            var e, i, n = {
                height: c.innerHeight,
                width: c.innerWidth
            };
            return n.height || (e = l.compatMode, (e || !t.support.boxModel) && (i = "CSS1Compat" === e ? h : l.body, n = {
                height: i.clientHeight,
                width: i.clientWidth
            })), n
        }

        function i() {
            return {
                top: c.pageYOffset || h.scrollTop || l.body.scrollTop,
                left: c.pageXOffset || h.scrollLeft || l.body.scrollLeft
            }
        }

        function n() {
            if (a.length) {
                var n = 0,
                    r = t.map(a, function(t) {
                        var e = t.data.selector,
                            i = t.$element;
                        return e ? i.find(e) : i
                    });
                for (o = o || e(), s = s || i(); n < a.length; n++)
                    if (t.contains(h, r[n][0])) {
                        var l = t(r[n]),
                            c = {
                                height: l[0].offsetHeight,
                                width: l[0].offsetWidth
                            },
                            u = l.offset(),
                            d = l.data("inview");
                        if (!s || !o) return;
                        u.top + c.height > s.top && u.top < s.top + o.height && u.left + c.width > s.left && u.left < s.left + o.width ? d || l.data("inview", !0).trigger("inview", [!0]) : d && l.data("inview", !1).trigger("inview", [!1])
                    }
            }
        }
        var o, s, r, a = [],
            l = document,
            c = window,
            h = l.documentElement;
        t.event.special.inview = {
            add: function(e) {
                a.push({
                    data: e,
                    $element: t(this),
                    element: this
                }), !r && a.length && (r = setInterval(n, 250))
            },
            remove: function(t) {
                for (var e = 0; e < a.length; e++) {
                    var i = a[e];
                    if (i.element === this && i.data.guid === t.guid) {
                        a.splice(e, 1);
                        break
                    }
                }
                a.length || (clearInterval(r), r = null)
            }
        }, t(c).on("scroll resize scrollstop", function() {
            o = s = null
        }), !h.addEventListener && h.attachEvent && h.attachEvent("onfocusin", function() {
            s = null
        })
    }), ! function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        var e = -1,
            i = -1,
            n = function(t) {
                return parseFloat(t) || 0
            },
            o = function(e) {
                var i = 1,
                    o = t(e),
                    s = null,
                    r = [];
                return o.each(function() {
                    var e = t(this),
                        o = e.offset().top - n(e.css("margin-top")),
                        a = r.length > 0 ? r[r.length - 1] : null;
                    null === a ? r.push(e) : Math.floor(Math.abs(s - o)) <= i ? r[r.length - 1] = a.add(e) : r.push(e), s = o
                }), r
            },
            s = function(e) {
                var i = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? t.extend(i, e) : ("boolean" == typeof e ? i.byRow = e : "remove" === e && (i.remove = !0), i)
            },
            r = t.fn.matchHeight = function(e) {
                var i = s(e);
                if (i.remove) {
                    var n = this;
                    return this.css(i.property, ""), t.each(r._groups, function(t, e) {
                        e.elements = e.elements.not(n)
                    }), this
                }
                return this.length <= 1 && !i.target ? this : (r._groups.push({
                    elements: this,
                    options: i
                }), r._apply(this, i), this)
            };
        r.version = "0.7.0", r._groups = [], r._throttle = 80, r._maintainScroll = !1, r._beforeUpdate = null, r._afterUpdate = null, r._rows = o, r._parse = n, r._parseOptions = s, r._apply = function(e, i) {
            var a = s(i),
                l = t(e),
                c = [l],
                h = t(window).scrollTop(),
                u = t("html").outerHeight(!0),
                d = l.parents().filter(":hidden");
            return d.each(function() {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), d.css("display", "block"), a.byRow && !a.target && (l.each(function() {
                var e = t(this),
                    i = e.css("display");
                "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block"), e.data("style-cache", e.attr("style")), e.css({
                    display: i,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px",
                    overflow: "hidden"
                })
            }), c = o(l), l.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(c, function(e, i) {
                var o = t(i),
                    s = 0;
                if (a.target) s = a.target.outerHeight(!1);
                else {
                    if (a.byRow && o.length <= 1) return void o.css(a.property, "");
                    o.each(function() {
                        var e = t(this),
                            i = e.attr("style"),
                            n = e.css("display");
                        "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                        var o = {
                            display: n
                        };
                        o[a.property] = "", e.css(o), e.outerHeight(!1) > s && (s = e.outerHeight(!1)), i ? e.attr("style", i) : e.css("display", "")
                    })
                }
                o.each(function() {
                    var e = t(this),
                        i = 0;
                    a.target && e.is(a.target) || ("border-box" !== e.css("box-sizing") && (i += n(e.css("border-top-width")) + n(e.css("border-bottom-width")), i += n(e.css("padding-top")) + n(e.css("padding-bottom"))), e.css(a.property, s - i + "px"))
                })
            }), d.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), r._maintainScroll && t(window).scrollTop(h / u * t("html").outerHeight(!0)), this
        }, r._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var i = t(this),
                    n = i.attr("data-mh") || i.attr("data-match-height");
                n in e ? e[n] = e[n].add(i) : e[n] = i
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
        var a = function(e) {
            r._beforeUpdate && r._beforeUpdate(e, r._groups), t.each(r._groups, function() {
                r._apply(this.elements, this.options)
            }), r._afterUpdate && r._afterUpdate(e, r._groups)
        };
        r._update = function(n, o) {
            if (o && "resize" === o.type) {
                var s = t(window).width();
                if (s === e) return;
                e = s
            }
            n ? -1 === i && (i = setTimeout(function() {
                a(o), i = -1
            }, r._throttle)) : a(o)
        }, t(r._applyDataApi), t(window).bind("load", function(t) {
            r._update(!1, t)
        }), t(window).bind("resize orientationchange", function(t) {
            r._update(!0, t)
        })
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
    }(function(t) {
        var e, i, n, o, s, r, a = "Close",
            l = "BeforeClose",
            c = "AfterClose",
            h = "BeforeAppend",
            u = "MarkupParse",
            d = "Open",
            p = "Change",
            f = "mfp",
            m = "." + f,
            g = "mfp-ready",
            v = "mfp-removing",
            y = "mfp-prevent-close",
            b = function() {},
            w = !!window.jQuery,
            x = t(window),
            C = function(t, i) {
                e.ev.on(f + t + m, i)
            },
            S = function(e, i, n, o) {
                var s = document.createElement("div");
                return s.className = "mfp-" + e, n && (s.innerHTML = n), o ? i && i.appendChild(s) : (s = t(s), i && s.appendTo(i)), s
            },
            T = function(i, n) {
                e.ev.triggerHandler(f + i, n), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(n) ? n : [n]))
            },
            k = function(i) {
                return i === r && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), r = i), e.currTemplate.closeBtn
            },
            I = function() {
                t.magnificPopup.instance || (e = new b, e.init(), t.magnificPopup.instance = e)
            },
            E = function() {
                var t = document.createElement("p").style,
                    e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;)
                    if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        b.prototype = {
            constructor: b,
            init: function() {
                var i = navigator.appVersion;
                e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = E(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = t(document), e.popupsCache = {}
            },
            open: function(i) {
                var o;
                if (i.isObj === !1) {
                    e.items = i.items.toArray(), e.index = 0;
                    var r, a = i.items;
                    for (o = 0; o < a.length; o++)
                        if (r = a[o], r.parsed && (r = r.el[0]), r === i.el[0]) {
                            e.index = o;
                            break
                        }
                } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], s = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = n, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + m, function() {
                    e.close()
                }), e.wrap = S("wrap").attr("tabindex", -1).on("click" + m, function(t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var c = l[o];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                T("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (C(u, function(t, e, i, n) {
                    i.close_replaceWith = k(n.type)
                }), s += " mfp-close-btn-in") : e.wrap.append(k())), e.st.alignTop && (s += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: x.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: n.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && n.on("keyup" + m, function(t) {
                    27 === t.keyCode && e.close()
                }), x.on("resize" + m, function() {
                    e.updateSize()
                }), e.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && e.wrap.addClass(s);
                var h = e.wH = x.height(),
                    p = {};
                if (e.fixedContentPos && e._hasScrollBar(h)) {
                    var f = e._getScrollbarSize();
                    f && (p.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : p.overflow = "hidden");
                var v = e.st.mainClass;
                return e.isIE7 && (v += " mfp-ie7"), v && e._addClassToMFP(v), e.updateItemHTML(), T("BuildControls"), t("html").css(p), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function() {
                    e.content ? (e._addClassToMFP(g), e._setFocus()) : e.bgOverlay.addClass(g), n.on("focusin" + m, e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(h), T(d), i
            },
            close: function() {
                e.isOpen && (T(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(v), setTimeout(function() {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            },
            _close: function() {
                T(a);
                var i = v + " " + g + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                    var o = {
                        marginRight: ""
                    };
                    e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
                }
                n.off("keyup" + m + " focusin" + m), e.ev.off(m), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, T(c)
            },
            updateSize: function(t) {
                if (e.isIOS) {
                    var i = document.documentElement.clientWidth / window.innerWidth,
                        n = window.innerHeight * i;
                    e.wrap.css("height", n), e.wH = n
                } else e.wH = t || x.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), T("Resize")
            },
            updateItemHTML: function() {
                var i = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
                var n = i.type;
                if (T("BeforeChange", [e.currItem ? e.currItem.type : "", n]), e.currItem = i, !e.currTemplate[n]) {
                    var s = e.st[n] ? e.st[n].markup : !1;
                    T("FirstMarkupParse", s), s ? e.currTemplate[n] = t(s) : e.currTemplate[n] = !0
                }
                o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
                var r = e["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, e.currTemplate[n]);
                e.appendContent(r, n), i.preloaded = !0, T(p, i), o = i.type, e.container.prepend(e.contentContainer), T("AfterChange")
            },
            appendContent: function(t, i) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[i] === !0 ? e.content.find(".mfp-close").length || e.content.append(k()) : e.content = t : e.content = "",
                    T(h), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
            },
            parseEl: function(i) {
                var n, o = e.items[i];
                if (o.tagName ? o = {
                        el: t(o)
                    } : (n = o.type, o = {
                        data: o,
                        src: o.src
                    }), o.el) {
                    for (var s = e.types, r = 0; r < s.length; r++)
                        if (o.el.hasClass("mfp-" + s[r])) {
                            n = s[r];
                            break
                        }
                    o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
                }
                return o.type = n || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, T("ElementParse", o), e.items[i]
            },
            addGroup: function(t, i) {
                var n = function(n) {
                    n.mfpEl = this, e._openClick(n, t, i)
                };
                i || (i = {});
                var o = "click.magnificPopup";
                i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, n)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, n) : (i.items = t, t.off(o).on(o, n)))
            },
            _openClick: function(i, n, o) {
                var s = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (s || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                    var r = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (r)
                        if (t.isFunction(r)) {
                            if (!r.call(e)) return !0
                        } else if (x.width() < r) return !0;
                    i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = n.find(o.delegate)), e.open(o)
                }
            },
            updateStatus: function(t, n) {
                if (e.preloader) {
                    i !== t && e.container.removeClass("mfp-s-" + i), n || "loading" !== t || (n = e.st.tLoading);
                    var o = {
                        status: t,
                        text: n
                    };
                    T("UpdateStatus", o), t = o.status, n = o.text, e.preloader.html(n), e.preloader.find("a").on("click", function(t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), i = t
                }
            },
            _checkIfClose: function(i) {
                if (!t(i).hasClass(y)) {
                    var n = e.st.closeOnContentClick,
                        o = e.st.closeOnBgClick;
                    if (n && o) return !0;
                    if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                    if (i === e.content[0] || t.contains(e.content[0], i)) {
                        if (n) return !0
                    } else if (o && t.contains(document, i)) return !0;
                    return !1
                }
            },
            _addClassToMFP: function(t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            },
            _removeClassFromMFP: function(t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            },
            _hasScrollBar: function(t) {
                return (e.isIE7 ? n.height() : document.body.scrollHeight) > (t || x.height())
            },
            _setFocus: function() {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            },
            _onFocusIn: function(i) {
                return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
            },
            _parseMarkup: function(e, i, n) {
                var o;
                n.data && (i = t.extend(n.data, i)), T(u, [e, i, n]), t.each(i, function(i, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (o = i.split("_"), o.length > 1) {
                        var s = e.find(m + "-" + o[0]);
                        if (s.length > 0) {
                            var r = o[1];
                            "replaceWith" === r ? s[0] !== n[0] && s.replaceWith(n) : "img" === r ? s.is("img") ? s.attr("src", n) : s.replaceWith(t("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(o[1], n)
                        }
                    } else e.find(m + "-" + i).html(n)
                })
            },
            _getScrollbarSize: function() {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: b.prototype,
            modules: [],
            open: function(e, i) {
                return I(), e = e ? t.extend(!0, {}, e) : {}, e.isObj = !0, e.index = i || 0, this.instance.open(e)
            },
            close: function() {
                return t.magnificPopup.instance && t.magnificPopup.instance.close()
            },
            registerModule: function(e, i) {
                i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                prependTo: null,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading...",
                autoFocusLast: !0
            }
        }, t.fn.magnificPopup = function(i) {
            I();
            var n = t(this);
            if ("string" == typeof i)
                if ("open" === i) {
                    var o, s = w ? n.data("magnificPopup") : n[0].magnificPopup,
                        r = parseInt(arguments[1], 10) || 0;
                    s.items ? o = s.items[r] : (o = n, s.delegate && (o = o.find(s.delegate)), o = o.eq(r)), e._openClick({
                        mfpEl: o
                    }, n, s)
                } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
            else i = t.extend(!0, {}, i), w ? n.data("magnificPopup", i) : n[0].magnificPopup = i, e.addGroup(n, i);
            return n
        };
        var $, A, P, _ = "inline",
            L = function() {
                P && (A.after(P.addClass($)).detach(), P = null)
            };
        t.magnificPopup.registerModule(_, {
            options: {
                hiddenClass: "hide",
                markup: "",
                tNotFound: "Content not found"
            },
            proto: {
                initInline: function() {
                    e.types.push(_), C(a + "." + _, function() {
                        L()
                    })
                },
                getInline: function(i, n) {
                    if (L(), i.src) {
                        var o = e.st.inline,
                            s = t(i.src);
                        if (s.length) {
                            var r = s[0].parentNode;
                            r && r.tagName && (A || ($ = o.hiddenClass, A = S($), $ = "mfp-" + $), P = s.after(A).detach().removeClass($)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), s = t("<div>");
                        return i.inlineElement = s, s
                    }
                    return e.updateStatus("ready"), e._parseMarkup(n, {}, i), n
                }
            }
        });
        var O, D = "ajax",
            M = function() {
                O && t(document.body).removeClass(O)
            },
            z = function() {
                M(), e.req && e.req.abort()
            };
        t.magnificPopup.registerModule(D, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            },
            proto: {
                initAjax: function() {
                    e.types.push(D), O = e.st.ajax.cursor, C(a + "." + D, z), C("BeforeChange." + D, z)
                },
                getAjax: function(i) {
                    O && t(document.body).addClass(O), e.updateStatus("loading");
                    var n = t.extend({
                        url: i.src,
                        success: function(n, o, s) {
                            var r = {
                                data: n,
                                xhr: s
                            };
                            T("ParseAjax", r), e.appendContent(t(r.data), D), i.finished = !0, M(), e._setFocus(), setTimeout(function() {
                                e.wrap.addClass(g)
                            }, 16), e.updateStatus("ready"), T("AjaxContentAdded")
                        },
                        error: function() {
                            M(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(n), ""
                }
            }
        });
        var N, R = function(i) {
            if (i.data && void 0 !== i.data.title) return i.data.title;
            var n = e.st.image.titleSrc;
            if (n) {
                if (t.isFunction(n)) return n.call(e, i);
                if (i.el) return i.el.attr(n) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            },
            proto: {
                initImage: function() {
                    var i = e.st.image,
                        n = ".image";
                    e.types.push("image"), C(d + n, function() {
                        "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                    }), C(a + n, function() {
                        i.cursor && t(document.body).removeClass(i.cursor), x.off("resize" + m)
                    }), C("Resize" + n, e.resizeImage), e.isLowIE && C("AfterChange", e.resizeImage)
                },
                resizeImage: function() {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var i = 0;
                        e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                    }
                },
                _onImageHasSize: function(t) {
                    t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, T("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                },
                findImageSize: function(t) {
                    var i = 0,
                        n = t.img[0],
                        o = function(s) {
                            N && clearInterval(N), N = setInterval(function() {
                                return n.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(N), i++, void(3 === i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                            }, s)
                        };
                    o(1)
                },
                getImage: function(i, n) {
                    var o = 0,
                        s = function() {
                            i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(s, 100) : r()))
                        },
                        r = function() {
                            i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", a.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                        },
                        a = e.st.image,
                        l = n.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", i.el && i.el.find("img").length && (c.alt = i.el.find("img").attr("alt")), i.img = t(c).on("load.mfploader", s).on("error.mfploader", r), c.src = i.src, l.is("img") && (i.img = i.img.clone()), c = i.img[0], c.naturalWidth > 0 ? i.hasSize = !0 : c.width || (i.hasSize = !1)
                    }
                    return e._parseMarkup(n, {
                        title: R(i),
                        img_replaceWith: i.img
                    }, i), e.resizeImage(), i.hasSize ? (N && clearInterval(N), i.loadError ? (n.addClass("mfp-loading"), e.updateStatus("error", a.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), e.updateStatus("ready")), n) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), e.findImageSize(i)), n)
                }
            }
        });
        var W, j = function() {
            return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1,
                easing: "ease-in-out",
                duration: 300,
                opener: function(t) {
                    return t.is("img") ? t : t.find("img")
                }
            },
            proto: {
                initZoom: function() {
                    var t, i = e.st.zoom,
                        n = ".zoom";
                    if (i.enabled && e.supportsTransition) {
                        var o, s, r = i.duration,
                            c = function(t) {
                                var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                    n = "all " + i.duration / 1e3 + "s " + i.easing,
                                    o = {
                                        position: "fixed",
                                        zIndex: 9999,
                                        left: 0,
                                        top: 0,
                                        "-webkit-backface-visibility": "hidden"
                                    },
                                    s = "transition";
                                return o["-webkit-" + s] = o["-moz-" + s] = o["-o-" + s] = o[s] = n, e.css(o), e
                            },
                            h = function() {
                                e.content.css("visibility", "visible")
                            };
                        C("BuildControls" + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.content.css("visibility", "hidden"), t = e._getItemToZoom(), !t) return void h();
                                s = c(t), s.css(e._getOffset()), e.wrap.append(s), o = setTimeout(function() {
                                    s.css(e._getOffset(!0)), o = setTimeout(function() {
                                        h(), setTimeout(function() {
                                            s.remove(), t = s = null, T("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), C(l + n, function() {
                            if (e._allowZoom()) {
                                if (clearTimeout(o), e.st.removalDelay = r, !t) {
                                    if (t = e._getItemToZoom(), !t) return;
                                    s = c(t)
                                }
                                s.css(e._getOffset(!0)), e.wrap.append(s), e.content.css("visibility", "hidden"), setTimeout(function() {
                                    s.css(e._getOffset())
                                }, 16)
                            }
                        }), C(a + n, function() {
                            e._allowZoom() && (h(), s && s.remove(), t = null)
                        })
                    }
                },
                _allowZoom: function() {
                    return "image" === e.currItem.type
                },
                _getItemToZoom: function() {
                    return e.currItem.hasSize ? e.currItem.img : !1
                },
                _getOffset: function(i) {
                    var n;
                    n = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = n.offset(),
                        s = parseInt(n.css("padding-top"), 10),
                        r = parseInt(n.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - s;
                    var a = {
                        width: n.width(),
                        height: (w ? n.innerHeight() : n[0].offsetHeight) - r - s
                    };
                    return j() ? a["-moz-transform"] = a.transform = "translate(" + o.left + "px," + o.top + "px)" : (a.left = o.left, a.top = o.top), a
                }
            }
        });
        var F = "iframe",
            q = "//about:blank",
            H = function(t) {
                if (e.currTemplate[F]) {
                    var i = e.currTemplate[F].find("iframe");
                    i.length && (t || (i[0].src = q), e.isIE8 && i.css("display", t ? "block" : "none"))
                }
            };
        t.magnificPopup.registerModule(F, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {
                        index: "youtube.com",
                        id: "v=",
                        src: "//www.youtube.com/embed/%id%?autoplay=1"
                    },
                    vimeo: {
                        index: "vimeo.com/",
                        id: "/",
                        src: "//player.vimeo.com/video/%id%?autoplay=1"
                    },
                    gmaps: {
                        index: "//maps.google.",
                        src: "%id%&output=embed"
                    }
                }
            },
            proto: {
                initIframe: function() {
                    e.types.push(F), C("BeforeChange", function(t, e, i) {
                        e !== i && (e === F ? H() : i === F && H(!0))
                    }), C(a + "." + F, function() {
                        H()
                    })
                },
                getIframe: function(i, n) {
                    var o = i.src,
                        s = e.st.iframe;
                    t.each(s.patterns, function() {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var r = {};
                    return s.srcAction && (r[s.srcAction] = o), e._parseMarkup(n, r, i), e.updateStatus("ready"), n
                }
            }
        });
        var B = function(t) {
                var i = e.items.length;
                return t > i - 1 ? t - i : 0 > t ? i + t : t
            },
            U = function(t, e, i) {
                return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
            };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            },
            proto: {
                initGallery: function() {
                    var i = e.st.gallery,
                        o = ".mfp-gallery";
                    return e.direction = !0, i && i.enabled ? (s += " mfp-gallery", C(d + o, function() {
                        i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function() {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), n.on("keydown" + o, function(t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), C("UpdateStatus" + o, function(t, i) {
                        i.text && (i.text = U(i.text, e.currItem.index, e.items.length))
                    }), C(u + o, function(t, n, o, s) {
                        var r = e.items.length;
                        o.counter = r > 1 ? U(i.tCounter, s.index, r) : ""
                    }), C("BuildControls" + o, function() {
                        if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                            var n = i.arrowMarkup,
                                o = e.arrowLeft = t(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                                s = e.arrowRight = t(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                            o.click(function() {
                                e.prev()
                            }), s.click(function() {
                                e.next()
                            }), e.container.append(o.add(s))
                        }
                    }), C(p + o, function() {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function() {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void C(a + o, function() {
                        n.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                    })) : !1
                },
                next: function() {
                    e.direction = !0, e.index = B(e.index + 1), e.updateItemHTML()
                },
                prev: function() {
                    e.direction = !1, e.index = B(e.index - 1), e.updateItemHTML()
                },
                goTo: function(t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                },
                preloadNearbyImages: function() {
                    var t, i = e.st.gallery.preload,
                        n = Math.min(i[0], e.items.length),
                        o = Math.min(i[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : n); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? n : o); t++) e._preloadItem(e.index - t)
                },
                _preloadItem: function(i) {
                    if (i = B(i), !e.items[i].preloaded) {
                        var n = e.items[i];
                        n.parsed || (n = e.parseEl(i)), T("LazyLoad", n), "image" === n.type && (n.img = t('<img class="mfp-img" />').on("load.mfploader", function() {
                            n.hasSize = !0
                        }).on("error.mfploader", function() {
                            n.hasSize = !0, n.loadError = !0, T("LazyLoadError", n)
                        }).attr("src", n.src)), n.preloaded = !0
                    }
                }
            }
        });
        var X = "retina";
        t.magnificPopup.registerModule(X, {
            options: {
                replaceSrc: function(t) {
                    return t.src.replace(/\.\w+$/, function(t) {
                        return "@2x" + t
                    })
                },
                ratio: 1
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina,
                            i = t.ratio;
                        i = isNaN(i) ? i() : i, i > 1 && (C("ImageHasSize." + X, function(t, e) {
                            e.img.css({
                                "max-width": e.img[0].naturalWidth / i,
                                width: "100%"
                            })
                        }), C("ElementParse." + X, function(e, n) {
                            n.src = t.replaceSrc(n, i)
                        }))
                    }
                }
            }
        }), I()
    }), ! function(t) {
        var e = !0;
        t.flexslider = function(i, n) {
            var o = t(i);
            o.vars = t.extend({}, t.flexslider.defaults, n);
            var s, r = o.vars.namespace,
                a = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
                l = ("ontouchstart" in window || a || window.DocumentTouch && document instanceof DocumentTouch) && o.vars.touch,
                c = "click touchend MSPointerUp keyup",
                h = "",
                u = "vertical" === o.vars.direction,
                d = o.vars.reverse,
                p = o.vars.itemWidth > 0,
                f = "fade" === o.vars.animation,
                m = "" !== o.vars.asNavFor,
                g = {};
            t.data(i, "flexslider", o), g = {
                init: function() {
                    o.animating = !1, o.currentSlide = parseInt(o.vars.startAt ? o.vars.startAt : 0, 10), isNaN(o.currentSlide) && (o.currentSlide = 0), o.animatingTo = o.currentSlide, o.atEnd = 0 === o.currentSlide || o.currentSlide === o.last, o.containerSelector = o.vars.selector.substr(0, o.vars.selector.search(" ")), o.slides = t(o.vars.selector, o), o.container = t(o.containerSelector, o), o.count = o.slides.length, o.syncExists = t(o.vars.sync).length > 0, "slide" === o.vars.animation && (o.vars.animation = "swing"), o.prop = u ? "top" : "marginLeft", o.args = {}, o.manualPause = !1, o.stopped = !1, o.started = !1, o.startTimeout = null, o.transitions = !o.vars.video && !f && o.vars.useCSS && function() {
                        var t = document.createElement("div"),
                            e = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var i in e)
                            if (void 0 !== t.style[e[i]]) return o.pfx = e[i].replace("Perspective", "").toLowerCase(), o.prop = "-" + o.pfx + "-transform", !0;
                        return !1
                    }(), o.ensureAnimationEnd = "", "" !== o.vars.controlsContainer && (o.controlsContainer = t(o.vars.controlsContainer).length > 0 && t(o.vars.controlsContainer)), "" !== o.vars.manualControls && (o.manualControls = t(o.vars.manualControls).length > 0 && t(o.vars.manualControls)), "" !== o.vars.customDirectionNav && (o.customDirectionNav = 2 === t(o.vars.customDirectionNav).length && t(o.vars.customDirectionNav)), o.vars.randomize && (o.slides.sort(function() {
                        return Math.round(Math.random()) - .5
                    }), o.container.empty().append(o.slides)), o.doMath(), o.setup("init"), o.vars.controlNav && g.controlNav.setup(), o.vars.directionNav && g.directionNav.setup(), o.vars.keyboard && (1 === t(o.containerSelector).length || o.vars.multipleKeyboard) && t(document).bind("keyup", function(t) {
                        var e = t.keyCode;
                        if (!o.animating && (39 === e || 37 === e)) {
                            var i = 39 === e ? o.getTarget("next") : 37 === e ? o.getTarget("prev") : !1;
                            o.flexAnimate(i, o.vars.pauseOnAction)
                        }
                    }), o.vars.mousewheel && o.bind("mousewheel", function(t, e) {
                        t.preventDefault();
                        var i = 0 > e ? o.getTarget("next") : o.getTarget("prev");
                        o.flexAnimate(i, o.vars.pauseOnAction)
                    }), o.vars.pausePlay && g.pausePlay.setup(), o.vars.slideshow && o.vars.pauseInvisible && g.pauseInvisible.init(), o.vars.slideshow && (o.vars.pauseOnHover && o.hover(function() {
                        o.manualPlay || o.manualPause || o.pause()
                    }, function() {
                        o.manualPause || o.manualPlay || o.stopped || o.play()
                    }), o.vars.pauseInvisible && g.pauseInvisible.isHidden() || (o.vars.initDelay > 0 ? o.startTimeout = setTimeout(o.play, o.vars.initDelay) : o.play())), m && g.asNav.setup(), l && o.vars.touch && g.touch(), (!f || f && o.vars.smoothHeight) && t(window).bind("resize orientationchange focus", g.resize), o.find("img").attr("draggable", "false"), setTimeout(function() {
                        o.vars.start(o)
                    }, 200)
                },
                asNav: {
                    setup: function() {
                        o.asNav = !0, o.animatingTo = Math.floor(o.currentSlide / o.move), o.currentItem = o.currentSlide, o.slides.removeClass(r + "active-slide").eq(o.currentItem).addClass(r + "active-slide"), a ? (i._slider = o, o.slides.each(function() {
                            var e = this;
                            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(t) {
                                t.preventDefault(), t.currentTarget._gesture && t.currentTarget._gesture.addPointer(t.pointerId)
                            }, !1), e.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var i = t(this),
                                    n = i.index();
                                t(o.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                            })
                        })) : o.slides.on(c, function(e) {
                            e.preventDefault();
                            var i = t(this),
                                n = i.index(),
                                s = i.offset().left - t(o).scrollLeft();
                            0 >= s && i.hasClass(r + "active-slide") ? o.flexAnimate(o.getTarget("prev"), !0) : t(o.vars.asNavFor).data("flexslider").animating || i.hasClass(r + "active-slide") || (o.direction = o.currentItem < n ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction, !1, !0, !0))
                        })
                    }
                },
                controlNav: {
                    setup: function() {
                        o.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                    },
                    setupPaging: function() {
                        var e, i, n = "thumbnails" === o.vars.controlNav ? "control-thumbs" : "control-paging",
                            s = 1;
                        if (o.controlNavScaffold = t('<ol class="' + r + "control-nav " + r + n + '"></ol>'), o.pagingCount > 1)
                            for (var a = 0; a < o.pagingCount; a++) {
                                i = o.slides.eq(a), void 0 === i.attr("data-thumb-alt") && i.attr("data-thumb-alt", "");
                                var l = "" !== i.attr("data-thumb-alt") ? l = ' alt="' + i.attr("data-thumb-alt") + '"' : "";
                                if (e = "thumbnails" === o.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + s + "</a>", "thumbnails" === o.vars.controlNav && !0 === o.vars.thumbCaptions) {
                                    var u = i.attr("data-thumbcaption");
                                    "" !== u && void 0 !== u && (e += '<span class="' + r + 'caption">' + u + "</span>")
                                }
                                o.controlNavScaffold.append("<li>" + e + "</li>"), s++
                            }
                        o.controlsContainer ? t(o.controlsContainer).append(o.controlNavScaffold) : o.append(o.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), o.controlNavScaffold.delegate("a, img", c, function(e) {
                            if (e.preventDefault(), "" === h || h === e.type) {
                                var i = t(this),
                                    n = o.controlNav.index(i);
                                i.hasClass(r + "active") || (o.direction = n > o.currentSlide ? "next" : "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                            }
                            "" === h && (h = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    setupManual: function() {
                        o.controlNav = o.manualControls, g.controlNav.active(), o.controlNav.bind(c, function(e) {
                            if (e.preventDefault(), "" === h || h === e.type) {
                                var i = t(this),
                                    n = o.controlNav.index(i);
                                i.hasClass(r + "active") || (n > o.currentSlide ? o.direction = "next" : o.direction = "prev", o.flexAnimate(n, o.vars.pauseOnAction))
                            }
                            "" === h && (h = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    set: function() {
                        var e = "thumbnails" === o.vars.controlNav ? "img" : "a";
                        o.controlNav = t("." + r + "control-nav li " + e, o.controlsContainer ? o.controlsContainer : o)
                    },
                    active: function() {
                        o.controlNav.removeClass(r + "active").eq(o.animatingTo).addClass(r + "active")
                    },
                    update: function(e, i) {
                        o.pagingCount > 1 && "add" === e ? o.controlNavScaffold.append(t('<li><a href="#">' + o.count + "</a></li>")) : 1 === o.pagingCount ? o.controlNavScaffold.find("li").remove() : o.controlNav.eq(i).closest("li").remove(), g.controlNav.set(), o.pagingCount > 1 && o.pagingCount !== o.controlNav.length ? o.update(i, e) : g.controlNav.active()
                    }
                },
                directionNav: {
                    setup: function() {
                        var e = t('<ul class="' + r + 'direction-nav"><li class="' + r + 'nav-prev"><a class="' + r + 'prev" href="#">' + o.vars.prevText + '</a></li><li class="' + r + 'nav-next"><a class="' + r + 'next" href="#">' + o.vars.nextText + "</a></li></ul>");
                        o.customDirectionNav ? o.directionNav = o.customDirectionNav : o.controlsContainer ? (t(o.controlsContainer).append(e), o.directionNav = t("." + r + "direction-nav li a", o.controlsContainer)) : (o.append(e), o.directionNav = t("." + r + "direction-nav li a", o)), g.directionNav.update(), o.directionNav.bind(c, function(e) {
                            e.preventDefault();
                            var i;
                            ("" === h || h === e.type) && (i = t(this).hasClass(r + "next") ? o.getTarget("next") : o.getTarget("prev"), o.flexAnimate(i, o.vars.pauseOnAction)), "" === h && (h = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    update: function() {
                        var t = r + "disabled";
                        1 === o.pagingCount ? o.directionNav.addClass(t).attr("tabindex", "-1") : o.vars.animationLoop ? o.directionNav.removeClass(t).removeAttr("tabindex") : 0 === o.animatingTo ? o.directionNav.removeClass(t).filter("." + r + "prev").addClass(t).attr("tabindex", "-1") : o.animatingTo === o.last ? o.directionNav.removeClass(t).filter("." + r + "next").addClass(t).attr("tabindex", "-1") : o.directionNav.removeClass(t).removeAttr("tabindex")
                    }
                },
                pausePlay: {
                    setup: function() {
                        var e = t('<div class="' + r + 'pauseplay"><a href="#"></a></div>');
                        o.controlsContainer ? (o.controlsContainer.append(e), o.pausePlay = t("." + r + "pauseplay a", o.controlsContainer)) : (o.append(e), o.pausePlay = t("." + r + "pauseplay a", o)), g.pausePlay.update(o.vars.slideshow ? r + "pause" : r + "play"), o.pausePlay.bind(c, function(e) {
                            e.preventDefault(), ("" === h || h === e.type) && (t(this).hasClass(r + "pause") ? (o.manualPause = !0, o.manualPlay = !1, o.pause()) : (o.manualPause = !1, o.manualPlay = !0, o.play())), "" === h && (h = e.type), g.setToClearWatchedEvent()
                        })
                    },
                    update: function(t) {
                        "play" === t ? o.pausePlay.removeClass(r + "pause").addClass(r + "play").html(o.vars.playText) : o.pausePlay.removeClass(r + "play").addClass(r + "pause").html(o.vars.pauseText)
                    }
                },
                touch: function() {
                    function t(t) {
                        t.stopPropagation(), o.animating ? t.preventDefault() : (o.pause(), i._gesture.addPointer(t.pointerId), C = 0, c = u ? o.h : o.w, m = Number(new Date), l = p && d && o.animatingTo === o.last ? 0 : p && d ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : p && o.currentSlide === o.last ? o.limit : p ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : d ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c)
                    }

                    function e(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            var n = -t.translationX,
                                o = -t.translationY;
                            return C += u ? o : n, h = C, b = u ? Math.abs(C) < Math.abs(-n) : Math.abs(C) < Math.abs(-o), t.detail === t.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                                i._gesture.stop()
                            }) : void((!b || Number(new Date) - m > 500) && (t.preventDefault(), !f && e.transitions && (e.vars.animationLoop || (h = C / (0 === e.currentSlide && 0 > C || e.currentSlide === e.last && C > 0 ? Math.abs(C) / c + 2 : 1)), e.setProps(l + h, "setTouch"))))
                        }
                    }

                    function n(t) {
                        t.stopPropagation();
                        var e = t.target._slider;
                        if (e) {
                            if (e.animatingTo === e.currentSlide && !b && null !== h) {
                                var i = d ? -h : h,
                                    n = i > 0 ? e.getTarget("next") : e.getTarget("prev");
                                e.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > c / 2) ? e.flexAnimate(n, e.vars.pauseOnAction) : f || e.flexAnimate(e.currentSlide, e.vars.pauseOnAction, !0)
                            }
                            s = null, r = null, h = null, l = null, C = 0
                        }
                    }
                    var s, r, l, c, h, m, g, v, y, b = !1,
                        w = 0,
                        x = 0,
                        C = 0;
                    a ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", t, !1), i._slider = o, i.addEventListener("MSGestureChange", e, !1), i.addEventListener("MSGestureEnd", n, !1)) : (g = function(t) {
                        o.animating ? t.preventDefault() : (window.navigator.msPointerEnabled || 1 === t.touches.length) && (o.pause(), c = u ? o.h : o.w, m = Number(new Date), w = t.touches[0].pageX, x = t.touches[0].pageY, l = p && d && o.animatingTo === o.last ? 0 : p && d ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : p && o.currentSlide === o.last ? o.limit : p ? (o.itemW + o.vars.itemMargin) * o.move * o.currentSlide : d ? (o.last - o.currentSlide + o.cloneOffset) * c : (o.currentSlide + o.cloneOffset) * c, s = u ? x : w, r = u ? w : x, i.addEventListener("touchmove", v, !1), i.addEventListener("touchend", y, !1))
                    }, v = function(t) {
                        w = t.touches[0].pageX, x = t.touches[0].pageY, h = u ? s - x : s - w, b = u ? Math.abs(h) < Math.abs(w - r) : Math.abs(h) < Math.abs(x - r);
                        var e = 500;
                        (!b || Number(new Date) - m > e) && (t.preventDefault(), !f && o.transitions && (o.vars.animationLoop || (h /= 0 === o.currentSlide && 0 > h || o.currentSlide === o.last && h > 0 ? Math.abs(h) / c + 2 : 1), o.setProps(l + h, "setTouch")))
                    }, y = function() {
                        if (i.removeEventListener("touchmove", v, !1), o.animatingTo === o.currentSlide && !b && null !== h) {
                            var t = d ? -h : h,
                                e = t > 0 ? o.getTarget("next") : o.getTarget("prev");
                            o.canAdvance(e) && (Number(new Date) - m < 550 && Math.abs(t) > 50 || Math.abs(t) > c / 2) ? o.flexAnimate(e, o.vars.pauseOnAction) : f || o.flexAnimate(o.currentSlide, o.vars.pauseOnAction, !0)
                        }
                        i.removeEventListener("touchend", y, !1), s = null, r = null, h = null, l = null
                    }, i.addEventListener("touchstart", g, !1))
                },
                resize: function() {
                    !o.animating && o.is(":visible") && (p || o.doMath(), f ? g.smoothHeight() : p ? (o.slides.width(o.computedW), o.update(o.pagingCount), o.setProps()) : u ? (o.viewport.height(o.h), o.setProps(o.h, "setTotal")) : (o.vars.smoothHeight && g.smoothHeight(), o.newSlides.width(o.computedW), o.setProps(o.computedW, "setTotal")))
                },
                smoothHeight: function(t) {
                    if (!u || f) {
                        var e = f ? o : o.viewport;
                        t ? e.animate({
                            height: o.slides.eq(o.animatingTo).innerHeight()
                        }, t) : e.innerHeight(o.slides.eq(o.animatingTo).innerHeight())
                    }
                },
                sync: function(e) {
                    var i = t(o.vars.sync).data("flexslider"),
                        n = o.animatingTo;
                    switch (e) {
                        case "animate":
                            i.flexAnimate(n, o.vars.pauseOnAction, !1, !0);
                            break;
                        case "play":
                            i.playing || i.asNav || i.play();
                            break;
                        case "pause":
                            i.pause()
                    }
                },
                uniqueID: function(e) {
                    return e.filter("[id]").add(e.find("[id]")).each(function() {
                        var e = t(this);
                        e.attr("id", e.attr("id") + "_clone")
                    }), e
                },
                pauseInvisible: {
                    visProp: null,
                    init: function() {
                        var t = g.pauseInvisible.getHiddenProp();
                        if (t) {
                            var e = t.replace(/[H|h]idden/, "") + "visibilitychange";
                            document.addEventListener(e, function() {
                                g.pauseInvisible.isHidden() ? o.startTimeout ? clearTimeout(o.startTimeout) : o.pause() : o.started ? o.play() : o.vars.initDelay > 0 ? setTimeout(o.play, o.vars.initDelay) : o.play()
                            })
                        }
                    },
                    isHidden: function() {
                        var t = g.pauseInvisible.getHiddenProp();
                        return t ? document[t] : !1
                    },
                    getHiddenProp: function() {
                        var t = ["webkit", "moz", "ms", "o"];
                        if ("hidden" in document) return "hidden";
                        for (var e = 0; e < t.length; e++)
                            if (t[e] + "Hidden" in document) return t[e] + "Hidden";
                        return null
                    }
                },
                setToClearWatchedEvent: function() {
                    clearTimeout(s), s = setTimeout(function() {
                        h = ""
                    }, 3e3)
                }
            }, o.flexAnimate = function(e, i, n, s, a) {
                if (o.vars.animationLoop || e === o.currentSlide || (o.direction = e > o.currentSlide ? "next" : "prev"), m && 1 === o.pagingCount && (o.direction = o.currentItem < e ? "next" : "prev"), !o.animating && (o.canAdvance(e, a) || n) && o.is(":visible")) {
                    if (m && s) {
                        var c = t(o.vars.asNavFor).data("flexslider");
                        if (o.atEnd = 0 === e || e === o.count - 1, c.flexAnimate(e, !0, !1, !0, a), o.direction = o.currentItem < e ? "next" : "prev", c.direction = o.direction, Math.ceil((e + 1) / o.visible) - 1 === o.currentSlide || 0 === e) return o.currentItem = e, o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), !1;
                        o.currentItem = e, o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), e = Math.floor(e / o.visible)
                    }
                    if (o.animating = !0, o.animatingTo = e, i && o.pause(), o.vars.before(o), o.syncExists && !a && g.sync("animate"), o.vars.controlNav && g.controlNav.active(), p || o.slides.removeClass(r + "active-slide").eq(e).addClass(r + "active-slide"), o.atEnd = 0 === e || e === o.last, o.vars.directionNav && g.directionNav.update(), e === o.last && (o.vars.end(o), o.vars.animationLoop || o.pause()), f) l ? (o.slides.eq(o.currentSlide).css({
                        opacity: 0,
                        zIndex: 1
                    }), o.slides.eq(e).css({
                        opacity: 1,
                        zIndex: 2
                    }), o.wrapup(b)) : (o.slides.eq(o.currentSlide).css({
                        zIndex: 1
                    }).animate({
                        opacity: 0
                    }, o.vars.animationSpeed, o.vars.easing), o.slides.eq(e).css({
                        zIndex: 2
                    }).animate({
                        opacity: 1
                    }, o.vars.animationSpeed, o.vars.easing, o.wrapup));
                    else {
                        var h, v, y, b = u ? o.slides.filter(":first").height() : o.computedW;
                        p ? (h = o.vars.itemMargin, y = (o.itemW + h) * o.move * o.animatingTo, v = y > o.limit && 1 !== o.visible ? o.limit : y) : v = 0 === o.currentSlide && e === o.count - 1 && o.vars.animationLoop && "next" !== o.direction ? d ? (o.count + o.cloneOffset) * b : 0 : o.currentSlide === o.last && 0 === e && o.vars.animationLoop && "prev" !== o.direction ? d ? 0 : (o.count + 1) * b : d ? (o.count - 1 - e + o.cloneOffset) * b : (e + o.cloneOffset) * b, o.setProps(v, "", o.vars.animationSpeed), o.transitions ? (o.vars.animationLoop && o.atEnd || (o.animating = !1, o.currentSlide = o.animatingTo), o.container.unbind("webkitTransitionEnd transitionend"), o.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(o.ensureAnimationEnd), o.wrapup(b)
                        }), clearTimeout(o.ensureAnimationEnd), o.ensureAnimationEnd = setTimeout(function() {
                            o.wrapup(b)
                        }, o.vars.animationSpeed + 100)) : o.container.animate(o.args, o.vars.animationSpeed, o.vars.easing, function() {
                            o.wrapup(b)
                        })
                    }
                    o.vars.smoothHeight && g.smoothHeight(o.vars.animationSpeed)
                }
            }, o.wrapup = function(t) {
                f || p || (0 === o.currentSlide && o.animatingTo === o.last && o.vars.animationLoop ? o.setProps(t, "jumpEnd") : o.currentSlide === o.last && 0 === o.animatingTo && o.vars.animationLoop && o.setProps(t, "jumpStart")), o.animating = !1, o.currentSlide = o.animatingTo, o.vars.after(o)
            }, o.animateSlides = function() {
                !o.animating && e && o.flexAnimate(o.getTarget("next"))
            }, o.pause = function() {
                clearInterval(o.animatedSlides), o.animatedSlides = null, o.playing = !1, o.vars.pausePlay && g.pausePlay.update("play"), o.syncExists && g.sync("pause")
            }, o.play = function() {
                o.playing && clearInterval(o.animatedSlides), o.animatedSlides = o.animatedSlides || setInterval(o.animateSlides, o.vars.slideshowSpeed), o.started = o.playing = !0, o.vars.pausePlay && g.pausePlay.update("pause"), o.syncExists && g.sync("play")
            }, o.stop = function() {
                o.pause(), o.stopped = !0
            }, o.canAdvance = function(t, e) {
                var i = m ? o.pagingCount - 1 : o.last;
                return e ? !0 : m && o.currentItem === o.count - 1 && 0 === t && "prev" === o.direction ? !0 : m && 0 === o.currentItem && t === o.pagingCount - 1 && "next" !== o.direction ? !1 : t !== o.currentSlide || m ? o.vars.animationLoop ? !0 : o.atEnd && 0 === o.currentSlide && t === i && "next" !== o.direction ? !1 : !o.atEnd || o.currentSlide !== i || 0 !== t || "next" !== o.direction : !1
            }, o.getTarget = function(t) {
                return o.direction = t, "next" === t ? o.currentSlide === o.last ? 0 : o.currentSlide + 1 : 0 === o.currentSlide ? o.last : o.currentSlide - 1
            }, o.setProps = function(t, e, i) {
                var n = function() {
                    var i = t ? t : (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo,
                        n = function() {
                            if (p) return "setTouch" === e ? t : d && o.animatingTo === o.last ? 0 : d ? o.limit - (o.itemW + o.vars.itemMargin) * o.move * o.animatingTo : o.animatingTo === o.last ? o.limit : i;
                            switch (e) {
                                case "setTotal":
                                    return d ? (o.count - 1 - o.currentSlide + o.cloneOffset) * t : (o.currentSlide + o.cloneOffset) * t;
                                case "setTouch":
                                    return d ? t : t;
                                case "jumpEnd":
                                    return d ? t : o.count * t;
                                case "jumpStart":
                                    return d ? o.count * t : t;
                                default:
                                    return t
                            }
                        }();
                    return -1 * n + "px"
                }();
                o.transitions && (n = u ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", o.container.css("-" + o.pfx + "-transition-duration", i), o.container.css("transition-duration", i)), o.args[o.prop] = n, (o.transitions || void 0 === i) && o.container.css(o.args), o.container.css("transform", n)
            }, o.setup = function(e) {
                if (f) o.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                }), "init" === e && (l ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    webkitTransition: "opacity " + o.vars.animationSpeed / 1e3 + "s ease",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    opacity: 1,
                    zIndex: 2
                }) : 0 == o.vars.fadeFirstSlide ? o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).css({
                    opacity: 1
                }) : o.slides.css({
                    opacity: 0,
                    display: "block",
                    zIndex: 1
                }).eq(o.currentSlide).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, o.vars.animationSpeed, o.vars.easing)), o.vars.smoothHeight && g.smoothHeight();
                else {
                    var i, n;
                    "init" === e && (o.viewport = t('<div class="' + r + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(o).append(o.container), o.cloneCount = 0, o.cloneOffset = 0, d && (n = t.makeArray(o.slides).reverse(),
                        o.slides = t(n), o.container.empty().append(o.slides))), o.vars.animationLoop && !p && (o.cloneCount = 2, o.cloneOffset = 1, "init" !== e && o.container.find(".clone").remove(), o.container.append(g.uniqueID(o.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(o.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), o.newSlides = t(o.vars.selector, o), i = d ? o.count - 1 - o.currentSlide + o.cloneOffset : o.currentSlide + o.cloneOffset, u && !p ? (o.container.height(200 * (o.count + o.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                        o.newSlides.css({
                            display: "block"
                        }), o.doMath(), o.viewport.height(o.h), o.setProps(i * o.h, "init")
                    }, "init" === e ? 100 : 0)) : (o.container.width(200 * (o.count + o.cloneCount) + "%"), o.setProps(i * o.computedW, "init"), setTimeout(function() {
                        o.doMath(), o.newSlides.css({
                            width: o.computedW,
                            marginRight: o.computedM,
                            "float": "left",
                            display: "block"
                        }), o.vars.smoothHeight && g.smoothHeight()
                    }, "init" === e ? 100 : 0))
                }
                p || o.slides.removeClass(r + "active-slide").eq(o.currentSlide).addClass(r + "active-slide"), o.vars.init(o)
            }, o.doMath = function() {
                var t = o.slides.first(),
                    e = o.vars.itemMargin,
                    i = o.vars.minItems,
                    n = o.vars.maxItems;
                o.w = void 0 === o.viewport ? o.width() : o.viewport.width(), o.h = t.height(), o.boxPadding = t.outerWidth() - t.width(), p ? (o.itemT = o.vars.itemWidth + e, o.itemM = e, o.minW = i ? i * o.itemT : o.w, o.maxW = n ? n * o.itemT - e : o.w, o.itemW = o.minW > o.w ? (o.w - e * (i - 1)) / i : o.maxW < o.w ? (o.w - e * (n - 1)) / n : o.vars.itemWidth > o.w ? o.w : o.vars.itemWidth, o.visible = Math.floor(o.w / o.itemW), o.move = o.vars.move > 0 && o.vars.move < o.visible ? o.vars.move : o.visible, o.pagingCount = Math.ceil((o.count - o.visible) / o.move + 1), o.last = o.pagingCount - 1, o.limit = 1 === o.pagingCount ? 0 : o.vars.itemWidth > o.w ? o.itemW * (o.count - 1) + e * (o.count - 1) : (o.itemW + e) * o.count - o.w - e) : (o.itemW = o.w, o.itemM = e, o.pagingCount = o.count, o.last = o.count - 1), o.computedW = o.itemW - o.boxPadding, o.computedM = o.itemM
            }, o.update = function(t, e) {
                o.doMath(), p || (t < o.currentSlide ? o.currentSlide += 1 : t <= o.currentSlide && 0 !== t && (o.currentSlide -= 1), o.animatingTo = o.currentSlide), o.vars.controlNav && !o.manualControls && ("add" === e && !p || o.pagingCount > o.controlNav.length ? g.controlNav.update("add") : ("remove" === e && !p || o.pagingCount < o.controlNav.length) && (p && o.currentSlide > o.last && (o.currentSlide -= 1, o.animatingTo -= 1), g.controlNav.update("remove", o.last))), o.vars.directionNav && g.directionNav.update()
            }, o.addSlide = function(e, i) {
                var n = t(e);
                o.count += 1, o.last = o.count - 1, u && d ? void 0 !== i ? o.slides.eq(o.count - i).after(n) : o.container.prepend(n) : void 0 !== i ? o.slides.eq(i).before(n) : o.container.append(n), o.update(i, "add"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.added(o)
            }, o.removeSlide = function(e) {
                var i = isNaN(e) ? o.slides.index(t(e)) : e;
                o.count -= 1, o.last = o.count - 1, isNaN(e) ? t(e, o.slides).remove() : u && d ? o.slides.eq(o.last).remove() : o.slides.eq(e).remove(), o.doMath(), o.update(i, "remove"), o.slides = t(o.vars.selector + ":not(.clone)", o), o.setup(), o.vars.removed(o)
            }, g.init()
        }, t(window).blur(function() {
            e = !1
        }).focus(function() {
            e = !0
        }), t.flexslider.defaults = {
            namespace: "flex-",
            selector: ".slides > li",
            animation: "fade",
            easing: "swing",
            direction: "horizontal",
            reverse: !1,
            animationLoop: !0,
            smoothHeight: !1,
            startAt: 0,
            slideshow: !0,
            slideshowSpeed: 7e3,
            animationSpeed: 600,
            initDelay: 0,
            randomize: !1,
            fadeFirstSlide: !0,
            thumbCaptions: !1,
            pauseOnAction: !0,
            pauseOnHover: !1,
            pauseInvisible: !0,
            useCSS: !0,
            touch: !0,
            video: !1,
            controlNav: !0,
            directionNav: !0,
            prevText: "Previous",
            nextText: "Next",
            keyboard: !0,
            multipleKeyboard: !1,
            mousewheel: !1,
            pausePlay: !1,
            pauseText: "Pause",
            playText: "Play",
            controlsContainer: "",
            manualControls: "",
            customDirectionNav: "",
            sync: "",
            asNavFor: "",
            itemWidth: 0,
            itemMargin: 0,
            minItems: 1,
            maxItems: 0,
            move: 0,
            allowOneSlide: !0,
            start: function() {},
            before: function() {},
            after: function() {},
            end: function() {},
            added: function() {},
            removed: function() {},
            init: function() {}
        }, t.fn.flexslider = function(e) {
            if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
                var i = t(this),
                    n = e.selector ? e.selector : ".slides > li",
                    o = i.find(n);
                1 === o.length && e.allowOneSlide === !1 || 0 === o.length ? (o.fadeIn(400), e.start && e.start(i)) : void 0 === i.data("flexslider") && new t.flexslider(this, e)
            });
            var i = t(this).data("flexslider");
            switch (e) {
                case "play":
                    i.play();
                    break;
                case "pause":
                    i.pause();
                    break;
                case "stop":
                    i.stop();
                    break;
                case "next":
                    i.flexAnimate(i.getTarget("next"), !0);
                    break;
                case "prev":
                case "previous":
                    i.flexAnimate(i.getTarget("prev"), !0);
                    break;
                default:
                    "number" == typeof e && i.flexAnimate(e, !0)
            }
        }
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        function e(t, e) {
            return t.toFixed(e.decimals)
        }
        var i = function(e, n) {
            this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, this.dataOptions(), n), this.init()
        };
        i.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: e,
            onUpdate: null,
            onComplete: null
        }, i.prototype.init = function() {
            this.value = this.options.from, this.loops = Math.ceil(this.options.speed / this.options.refreshInterval), this.loopCount = 0, this.increment = (this.options.to - this.options.from) / this.loops
        }, i.prototype.dataOptions = function() {
            var t = {
                    from: this.$element.data("from"),
                    to: this.$element.data("to"),
                    speed: this.$element.data("speed"),
                    refreshInterval: this.$element.data("refresh-interval"),
                    decimals: this.$element.data("decimals")
                },
                e = Object.keys(t);
            for (var i in e) {
                var n = e[i];
                "undefined" == typeof t[n] && delete t[n]
            }
            return t
        }, i.prototype.update = function() {
            this.value += this.increment, this.loopCount++, this.render(), "function" == typeof this.options.onUpdate && this.options.onUpdate.call(this.$element, this.value), this.loopCount >= this.loops && (clearInterval(this.interval), this.value = this.options.to, "function" == typeof this.options.onComplete && this.options.onComplete.call(this.$element, this.value))
        }, i.prototype.render = function() {
            var t = this.options.formatter.call(this.$element, this.value, this.options);
            this.$element.text(t)
        }, i.prototype.restart = function() {
            this.stop(), this.init(), this.start()
        }, i.prototype.start = function() {
            this.stop(), this.render(), this.interval = setInterval(this.update.bind(this), this.options.refreshInterval)
        }, i.prototype.stop = function() {
            this.interval && clearInterval(this.interval)
        }, i.prototype.toggle = function() {
            this.interval ? this.stop() : this.start()
        }, t.fn.countTo = function(e) {
            return this.each(function() {
                var n = t(this),
                    o = n.data("countTo"),
                    s = !o || "object" == typeof e,
                    r = "object" == typeof e ? e : {},
                    a = "string" == typeof e ? e : "start";
                s && (o && o.stop(), n.data("countTo", o = new i(this, r))), o[a].call(o)
            })
        }
    }), ! function(t) {
        "use strict";

        function e(e, i) {
            this.element = t(e), this.settings = t.extend({}, n, i), this._defaults = n, this._init()
        }
        var i = "Morphext",
            n = {
                animation: "bounceIn",
                separator: ",",
                speed: 2e3,
                complete: t.noop
            };
        e.prototype = {
            _init: function() {
                var e = this;
                this.phrases = [], this.element.addClass("morphext"), t.each(this.element.text().split(this.settings.separator), function(i, n) {
                    e.phrases.push(t.trim(n))
                }), this.index = -1, this.animate(), this.start()
            },
            animate: function() {
                this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", t.isFunction(this.settings.complete) && this.settings.complete.call(this)
            },
            start: function() {
                var t = this;
                this._interval = setInterval(function() {
                    t.animate()
                }, this.settings.speed)
            },
            stop: function() {
                this._interval = clearInterval(this._interval)
            }
        }, t.fn[i] = function(n) {
            return this.each(function() {
                t.data(this, "plugin_" + i) || t.data(this, "plugin_" + i, new e(this, n))
            })
        }
    }(jQuery), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i) {
        var n = {
            init: function(e, i) {
                this.$elem = t(i), this.options = t.extend({}, t.fn.owlCarousel.options, this.$elem.data(), e), this.userOptions = e, this.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, i = "";
                    if ("function" == typeof n.options.jsonSuccess) n.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (i += t.owl[e].item);
                        n.$elem.html(i)
                    }
                    n.logIn()
                }
                var i, n = this;
                "function" == typeof n.options.beforeInit && n.options.beforeInit.apply(this, [n.$elem]), "string" == typeof n.options.jsonPath ? (i = n.options.jsonPath, t.getJSON(i, e)) : n.logIn()
            },
            logIn: function() {
                this.$elem.data("owl-originalStyles", this.$elem.attr("style")), this.$elem.data("owl-originalClasses", this.$elem.attr("class")), this.$elem.css({
                    opacity: 0
                }), this.orignalItems = this.options.items, this.checkBrowser(), this.wrapperWidth = 0, this.checkVisible = null, this.setVars()
            },
            setVars: function() {
                return 0 === this.$elem.children().length ? !1 : (this.baseClass(), this.eventTypes(), this.$userItems = this.$elem.children(), this.itemsAmount = this.$userItems.length, this.wrapItems(), this.$owlItems = this.$elem.find(".owl-item"), this.$owlWrapper = this.$elem.find(".owl-wrapper"), this.playDirection = "next", this.prevItem = 0, this.prevArr = [0], this.currentItem = 0, this.customEvents(), void this.onStartup())
            },
            onStartup: function() {
                this.updateItems(), this.calculateAll(), this.buildControls(), this.updateControls(), this.response(), this.moveEvents(), this.stopOnHover(), this.owlStatus(), !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle), !0 === this.options.autoPlay && (this.options.autoPlay = 5e3), this.play(), this.$elem.find(".owl-wrapper").css("display", "block"), this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility(), this.onstartup = !1, this.eachMoveUpdate(), "function" == typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
            },
            eachMoveUpdate: function() {
                !0 === this.options.lazyLoad && this.lazyLoad(), !0 === this.options.autoHeight && this.autoHeight(), this.onVisibleItems(), "function" == typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
            },
            updateVars: function() {
                "function" == typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]), this.watchVisibility(), this.updateItems(), this.calculateAll(), this.updatePosition(), this.updateControls(), this.eachMoveUpdate(), "function" == typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return !1 !== t.$elem.is(":visible") ? !1 : (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), this.wrapperOuter = this.$elem.find(".owl-wrapper-outer"), this.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this.$elem.hasClass(this.options.baseClass),
                    e = this.$elem.hasClass(this.options.theme);
                t || this.$elem.addClass(this.options.baseClass), e || this.$elem.addClass(this.options.theme)
            },
            updateItems: function() {
                var e, i;
                if (!1 === this.options.responsive) return !1;
                if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
                if (e = t(this.options.responsiveBaseWidth).width(), e > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems), !1 !== this.options.itemsCustom)
                    for (this.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), i = 0; i < this.options.itemsCustom.length; i += 1) this.options.itemsCustom[i][0] <= e && (this.options.items = this.options.itemsCustom[i][1]);
                else e <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), e <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), e <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), e <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), e <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
                this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
            },
            response: function() {
                var i, n, o = this;
                return !0 !== o.options.responsive ? !1 : (n = t(e).width(), o.resizer = function() {
                    t(e).width() !== n && (!1 !== o.options.autoPlay && e.clearInterval(o.autoPlayInterval), e.clearTimeout(i), i = e.setTimeout(function() {
                        n = t(e).width(), o.updateVars()
                    }, o.options.responsiveRefreshRate))
                }, void t(e).resize(o.resizer))
            },
            updatePosition: function() {
                this.jumpTo(this.currentItem), !1 !== this.options.autoPlay && this.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    i = 0,
                    n = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(o) {
                    var s = t(this);
                    s.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(o)), 0 !== o % e.options.items && o !== n || o > n || (i += 1), s.data("owl-roundPages", i)
                })
            },
            appendWrapperSizes: function() {
                this.$owlWrapper.css({
                    width: this.$owlItems.length * this.itemWidth * 2,
                    left: 0
                }), this.appendItemsSizes()
            },
            calculateAll: function() {
                this.calculateWidth(), this.appendWrapperSizes(), this.loops(), this.max()
            },
            calculateWidth: function() {
                this.itemWidth = Math.round(this.$elem.width() / this.options.items)
            },
            max: function() {
                var t = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
                return this.options.items > this.itemsAmount ? this.maximumPixels = t = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = t), t
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, i, n = 0,
                    o = 0;
                for (this.positionsInArray = [0], this.pagesInArray = [], e = 0; e < this.itemsAmount; e += 1) o += this.itemWidth, this.positionsInArray.push(-o), !0 === this.options.scrollPerPage && (i = t(this.$owlItems[e]), i = i.data("owl-roundPages"), i !== n && (this.pagesInArray[n] = this.positionsInArray[e], n = i))
            },
            buildControls: function() {
                !0 !== this.options.navigation && !0 !== this.options.pagination || (this.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)), !0 === this.options.pagination && this.buildPagination(), !0 === this.options.navigation && this.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    i = t('<div class="owl-buttons"/>');
                e.owlControls.append(i), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), i.append(e.buttonPrev).append(e.buttonNext), i.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), i.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(i) {
                    i.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(i) {
                    i.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, i, n, o, s, r;
                if (!1 === this.options.pagination) return !1;
                for (this.paginationWrapper.html(""), e = 0, i = this.itemsAmount - this.itemsAmount % this.options.items, o = 0; o < this.itemsAmount; o += 1) 0 === o % this.options.items && (e += 1, i === o && (n = this.itemsAmount - this.options.items), s = t("<div/>", {
                    "class": "owl-page"
                }), r = t("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? e : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), s.append(r), s.data("owl-page", i === o ? n : o), s.data("owl-roundPages", e), this.paginationWrapper.append(s));
                this.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return !1 === e.options.pagination ? !1 : void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                return !1 === this.options.navigation ? !1 : void(!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                this.updatePagination(), this.checkNavigation(), this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
            },
            destroyControls: function() {
                this.owlControls && this.owlControls.remove()
            },
            next: function(t) {
                if (this.isTransition) return !1;
                if (this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1, this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = this.maximumItem, !1;
                    this.currentItem = 0, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            prev: function(t) {
                if (this.isTransition) return !1;
                if (this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1), 0 > this.currentItem) {
                    if (!0 !== this.options.rewindNav) return this.currentItem = 0, !1;
                    this.currentItem = this.maximumItem, t = "rewind"
                }
                this.goTo(this.currentItem, t)
            },
            goTo: function(t, i, n) {
                var o = this;
                return o.isTransition ? !1 : ("function" == typeof o.options.beforeMove && o.options.beforeMove.apply(this, [o.$elem]), t >= o.maximumItem ? t = o.maximumItem : 0 >= t && (t = 0), o.currentItem = o.owl.currentItem = t, !1 !== o.options.transitionStyle && "drag" !== n && 1 === o.options.items && !0 === o.browser.support3d ? (o.swapSpeed(0), !0 === o.browser.support3d ? o.transition3d(o.positionsInArray[t]) : o.css2slide(o.positionsInArray[t], 1), o.afterGo(), o.singleItemTransition(), !1) : (t = o.positionsInArray[t], !0 === o.browser.support3d ? (o.isCss3Finish = !1, !0 === i ? (o.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.paginationSpeed)) : "rewind" === i ? (o.swapSpeed(o.options.rewindSpeed), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.rewindSpeed)) : (o.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    o.isCss3Finish = !0
                }, o.options.slideSpeed)), o.transition3d(t)) : !0 === i ? o.css2slide(t, o.options.paginationSpeed) : "rewind" === i ? o.css2slide(t, o.options.rewindSpeed) : o.css2slide(t, o.options.slideSpeed), void o.afterGo()))
            },
            jumpTo: function(t) {
                "function" == typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]), t >= this.maximumItem || -1 === t ? t = this.maximumItem : 0 >= t && (t = 0), this.swapSpeed(0), !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[t]) : this.css2slide(this.positionsInArray[t], 1), this.currentItem = this.owl.currentItem = t, this.afterGo()
            },
            afterGo: function() {
                this.prevArr.push(this.currentItem), this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2], this.prevArr.shift(0), this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp()), "function" == typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
            },
            stop: function() {
                this.apStatus = "stop", e.clearInterval(this.autoPlayInterval)
            },
            checkAp: function() {
                "stop" !== this.apStatus && this.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", !1 === t.options.autoPlay ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                "slideSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === t ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" != typeof t && this.$owlWrapper.css(this.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                this.$owlWrapper.css(this.doTranslate(t))
            },
            css2move: function(t) {
                this.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var i = this;
                i.isCssFinish = !1, i.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || i.options.slideSpeed,
                    complete: function() {
                        i.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t = i.createElement("div");
                t.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)", t = t.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g), this.browser = {
                    support3d: null !== t && 1 === t.length,
                    isTouch: "ontouchstart" in e || e.navigator.msMaxTouchPoints
                }
            },
            moveEvents: function() {
                !1 === this.options.mouseDrag && !1 === this.options.touchDrag || (this.gestures(), this.disabledEvents())
            },
            eventTypes: function() {
                var t = ["s", "e", "x"];
                this.ev_types = {}, !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? t = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (t = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), this.ev_types.start = t[0], this.ev_types.move = t[1], this.ev_types.end = t[2]
            },
            disabledEvents: function() {
                this.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), this.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function n(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function o(e) {
                    "on" === e ? (t(i).on(a.ev_types.move, s), t(i).on(a.ev_types.end, r)) : "off" === e && (t(i).off(a.ev_types.move), t(i).off(a.ev_types.end))
                }

                function s(o) {
                    o = o.originalEvent || o || e.event, a.newPosX = n(o).x - l.offsetX, a.newPosY = n(o).y - l.offsetY, a.newRelativeX = a.newPosX - l.relativePos, "function" == typeof a.options.startDragging && !0 !== l.dragging && 0 !== a.newRelativeX && (l.dragging = !0, a.options.startDragging.apply(a, [a.$elem])), (8 < a.newRelativeX || -8 > a.newRelativeX) && !0 === a.browser.isTouch && (void 0 !== o.preventDefault ? o.preventDefault() : o.returnValue = !1, l.sliding = !0), (10 < a.newPosY || -10 > a.newPosY) && !1 === l.sliding && t(i).off("touchmove.owl"), a.newPosX = Math.max(Math.min(a.newPosX, a.newRelativeX / 5), a.maximumPixels + a.newRelativeX / 5), !0 === a.browser.support3d ? a.transition3d(a.newPosX) : a.css2move(a.newPosX)
                }

                function r(i) {
                    i = i.originalEvent || i || e.event;
                    var n;
                    i.target = i.target || i.srcElement, l.dragging = !1, !0 !== a.browser.isTouch && a.$owlWrapper.removeClass("grabbing"), a.dragDirection = 0 > a.newRelativeX ? a.owl.dragDirection = "left" : a.owl.dragDirection = "right", 0 !== a.newRelativeX && (n = a.getNewPosition(), a.goTo(n, !1, "drag"), l.targetElement === i.target && !0 !== a.browser.isTouch && (t(i.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), i = t._data(i.target, "events").click, n = i.pop(), i.splice(0, 0, n))), o("off")
                }
                var a = this,
                    l = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                a.isCssFinish = !0, a.$elem.on(a.ev_types.start, ".owl-wrapper", function(i) {
                    i = i.originalEvent || i || e.event;
                    var s;
                    if (3 === i.which) return !1;
                    if (!(a.itemsAmount <= a.options.items)) {
                        if (!1 === a.isCssFinish && !a.options.dragBeforeAnimFinish || !1 === a.isCss3Finish && !a.options.dragBeforeAnimFinish) return !1;
                        !1 !== a.options.autoPlay && e.clearInterval(a.autoPlayInterval), !0 === a.browser.isTouch || a.$owlWrapper.hasClass("grabbing") || a.$owlWrapper.addClass("grabbing"), a.newPosX = 0, a.newRelativeX = 0, t(this).css(a.removeTransition()), s = t(this).position(), l.relativePos = s.left, l.offsetX = n(i).x - s.left, l.offsetY = n(i).y - s.top, o("on"), l.sliding = !1, l.targetElement = i.target || i.srcElement
                    }
                })
            },
            getNewPosition: function() {
                var t = this.closestItem();
                return t > this.maximumItem ? t = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = t = 0), t
            },
            closestItem: function() {
                var e = this,
                    i = !0 === e.options.scrollPerPage ? e.pagesInArray : e.positionsInArray,
                    n = e.newPosX,
                    o = null;
                return t.each(i, function(s, r) {
                    n - e.itemWidth / 20 > i[s + 1] && n - e.itemWidth / 20 < r && "left" === e.moveDirection() ? (o = r, e.currentItem = !0 === e.options.scrollPerPage ? t.inArray(o, e.positionsInArray) : s) : n + e.itemWidth / 20 < r && n + e.itemWidth / 20 > (i[s + 1] || i[s] - e.itemWidth) && "right" === e.moveDirection() && (!0 === e.options.scrollPerPage ? (o = i[s + 1] || i[i.length - 1], e.currentItem = t.inArray(o, e.positionsInArray)) : (o = i[s + 1], e.currentItem = s + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t;
                return 0 > this.newRelativeX ? (t = "right", this.playDirection = "next") : (t = "left", this.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, i) {
                    t.options.autoPlay = i, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, i) {
                    t.goTo(i)
                }), t.$elem.on("owl.jumpTo", function(e, i) {
                    t.jumpTo(i)
                })
            },
            stopOnHover: function() {
                var t = this;
                !0 === t.options.stopOnHover && !0 !== t.browser.isTouch && !1 !== t.options.autoPlay && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, i, n, o, s;
                if (!1 === this.options.lazyLoad) return !1;
                for (e = 0; e < this.itemsAmount; e += 1) i = t(this.$owlItems[e]), "loaded" !== i.data("owl-loaded") && (n = i.data("owl-item"), o = i.find(".lazyOwl"), "string" != typeof o.data("src") ? i.data("owl-loaded", "loaded") : (void 0 === i.data("owl-loaded") && (o.hide(), i.addClass("loading").data("owl-loaded", "checked")), (s = !0 === this.options.lazyFollow ? n >= this.currentItem : !0) && n < this.currentItem + this.options.items && o.length && this.lazyPreload(i, o)))
            },
            lazyPreload: function(t, i) {
                function n() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), i.removeAttr("data-src"), "fade" === r.options.lazyEffect ? i.fadeIn(400) : i.show(), "function" == typeof r.options.afterLazyLoad && r.options.afterLazyLoad.apply(this, [r.$elem])
                }

                function o() {
                    a += 1, r.completeImg(i.get(0)) || !0 === s ? n() : 100 >= a ? e.setTimeout(o, 100) : n()
                }
                var s, r = this,
                    a = 0;
                "DIV" === i.prop("tagName") ? (i.css("background-image", "url(" + i.data("src") + ")"), s = !0) : i[0].src = i.data("src"), o()
            },
            autoHeight: function() {
                function i() {
                    var i = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", i + "px"), s.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        s.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function n() {
                    o += 1, s.completeImg(r.get(0)) ? i() : 100 >= o ? e.setTimeout(n, 100) : s.wrapperOuter.css("height", "")
                }
                var o, s = this,
                    r = t(s.$owlItems[s.currentItem]).find("img");
                void 0 !== r.get(0) ? (o = 0, n()) : i()
            },
            completeImg: function(t) {
                return t.complete && ("undefined" == typeof t.naturalWidth || 0 !== t.naturalWidth)
            },
            onVisibleItems: function() {
                var e;
                for (!0 === this.options.addClassActive && this.$owlItems.removeClass("active"), this.visibleItems = [], e = this.currentItem; e < this.currentItem + this.options.items; e += 1) this.visibleItems.push(e), !0 === this.options.addClassActive && t(this.$owlItems[e]).addClass("active");
                this.owl.visibleItems = this.visibleItems
            },
            transitionTypes: function(t) {
                this.outClass = "owl-" + t + "-out", this.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                var t = this,
                    e = t.outClass,
                    i = t.inClass,
                    n = t.$owlItems.eq(t.currentItem),
                    o = t.$owlItems.eq(t.prevItem),
                    s = Math.abs(t.positionsInArray[t.currentItem]) + t.positionsInArray[t.prevItem],
                    r = Math.abs(t.positionsInArray[t.currentItem]) + t.itemWidth / 2;
                t.isTransition = !0, t.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                }), o.css({
                    position: "relative",
                    left: s + "px"
                }).addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    t.endPrev = !0, o.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(o, e)
                }), n.addClass(i).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                    t.endCurrent = !0, n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend"), t.clearTransStyle(n, i)
                })
            },
            clearTransStyle: function(t, e) {
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
            },
            owlStatus: function() {
                this.owl = {
                    userOptions: this.userOptions,
                    baseElement: this.$elem,
                    userItems: this.$userItems,
                    owlItems: this.$owlItems,
                    currentItem: this.currentItem,
                    prevItem: this.prevItem,
                    visibleItems: this.visibleItems,
                    isTouch: this.browser.isTouch,
                    browser: this.browser,
                    dragDirection: this.dragDirection
                }
            },
            clearEvents: function() {
                this.$elem.off(".owl owl mousedown.disableTextSelect"), t(i).off(".owl owl"), t(e).off("resize", this.resizer)
            },
            unWrap: function() {
                0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove()), this.clearEvents(), this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                this.stop(), e.clearInterval(this.checkVisible), this.unWrap(), this.$elem.removeData()
            },
            reinit: function(e) {
                e = t.extend({}, this.userOptions, e), this.unWrap(), this.init(e, this.$elem)
            },
            addItem: function(t, e) {
                var i;
                return t ? 0 === this.$elem.children().length ? (this.$elem.append(t), this.setVars(), !1) : (this.unWrap(), i = void 0 === e || -1 === e ? -1 : e, i >= this.$userItems.length || -1 === i ? this.$userItems.eq(-1).after(t) : this.$userItems.eq(i).before(t), void this.setVars()) : !1
            },
            removeItem: function(t) {
                return 0 === this.$elem.children().length ? !1 : (t = void 0 === t || -1 === t ? -1 : t, this.unWrap(), this.$userItems.eq(t).remove(), void this.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (!0 === t(this).data("owl-init")) return !1;
                t(this).data("owl-init", !0);
                var i = Object.create(n);
                i.init(e, this), t.data(this, "owlCarousel", i)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document),
    function(t, e, i) {
        t.fn.backstretch = function(n, o) {
            return (n === i || 0 === n.length) && t.error("No images were supplied for Backstretch"), 0 === t(e).scrollTop() && e.scrollTo(0, 0), this.each(function() {
                var e = t(this),
                    i = e.data("backstretch");
                if (i) {
                    if ("string" == typeof n && "function" == typeof i[n]) return void i[n](o);
                    o = t.extend(i.options, o), i.destroy(!0)
                }
                i = new s(this, n, o), e.data("backstretch", i)
            })
        }, t.backstretch = function(e, i) {
            return t("body").backstretch(e, i).data("backstretch")
        }, t.expr[":"].backstretch = function(e) {
            return t(e).data("backstretch") !== i
        }, t.fn.backstretch.defaults = {
            centeredX: !0,
            centeredY: !0,
            duration: 5e3,
            fade: 0
        };
        var n = {
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999999
            },
            o = {
                position: "absolute",
                display: "none",
                margin: 0,
                padding: 0,
                border: "none",
                width: "auto",
                height: "auto",
                maxHeight: "none",
                maxWidth: "none",
                zIndex: -999999
            },
            s = function(i, o, s) {
                this.options = t.extend({}, t.fn.backstretch.defaults, s || {}), this.images = t.isArray(o) ? o : [o], t.each(this.images, function() {
                    t("<img />")[0].src = this
                }), this.isBody = i === document.body, this.$container = t(i), this.$root = this.isBody ? t(r ? e : document) : this.$container, i = this.$container.children(".backstretch").first(), this.$wrap = i.length ? i : t('<div class="backstretch"></div>').css(n).appendTo(this.$container), this.isBody || (i = this.$container.css("position"), o = this.$container.css("zIndex"), this.$container.css({
                    position: "static" === i ? "relative" : i,
                    zIndex: "auto" === o ? 0 : o,
                    background: "none"
                }), this.$wrap.css({
                    zIndex: -999998
                })), this.$wrap.css({
                    position: this.isBody && r ? "fixed" : "absolute"
                }), this.index = 0, this.show(this.index), t(e).on("resize.backstretch", t.proxy(this.resize, this)).on("orientationchange.backstretch", t.proxy(function() {
                    this.isBody && 0 === e.pageYOffset && (e.scrollTo(0, 1), this.resize())
                }, this))
            };
        s.prototype = {
            resize: function() {
                try {
                    var t, i = {
                            left: 0,
                            top: 0
                        },
                        n = this.isBody ? this.$root.width() : this.$root.innerWidth(),
                        o = n,
                        s = this.isBody ? e.innerHeight ? e.innerHeight : this.$root.height() : this.$root.innerHeight(),
                        r = o / this.$img.data("ratio");
                    r >= s ? (t = (r - s) / 2, this.options.centeredY && (i.top = "-" + t + "px")) : (r = s, o = r * this.$img.data("ratio"), t = (o - n) / 2, this.options.centeredX && (i.left = "-" + t + "px")), this.$wrap.css({
                        width: n,
                        height: s
                    }).find("img:not(.deleteable)").css({
                        width: o,
                        height: r
                    }).css(i)
                } catch (a) {}
                return this
            },
            show: function(e) {
                if (!(Math.abs(e) > this.images.length - 1)) {
                    var i = this,
                        n = i.$wrap.find("img").addClass("deleteable"),
                        s = {
                            relatedTarget: i.$container[0]
                        };
                    return i.$container.trigger(t.Event("backstretch.before", s), [i, e]), this.index = e, clearInterval(i.interval), i.$img = t("<img />").css(o).bind("load", function(o) {
                        var r = this.width || t(o.target).width();
                        o = this.height || t(o.target).height(), t(this).data("ratio", r / o), t(this).fadeIn(i.options.speed || i.options.fade, function() {
                            n.remove(), i.paused || i.cycle(), t(["after", "show"]).each(function() {
                                i.$container.trigger(t.Event("backstretch." + this, s), [i, e])
                            })
                        }), i.resize()
                    }).appendTo(i.$wrap), i.$img.attr("src", i.images[e]), i
                }
            },
            next: function() {
                return this.show(this.index < this.images.length - 1 ? this.index + 1 : 0)
            },
            prev: function() {
                return this.show(0 === this.index ? this.images.length - 1 : this.index - 1)
            },
            pause: function() {
                return this.paused = !0, this
            },
            resume: function() {
                return this.paused = !1, this.next(), this
            },
            cycle: function() {
                return 1 < this.images.length && (clearInterval(this.interval), this.interval = setInterval(t.proxy(function() {
                    this.paused || this.next()
                }, this), this.options.duration)), this
            },
            destroy: function(i) {
                t(e).off("resize.backstretch orientationchange.backstretch"), clearInterval(this.interval), i || this.$wrap.remove(), this.$container.removeData("backstretch")
            }
        };
        var r, a = navigator.userAgent,
            l = navigator.platform,
            c = a.match(/AppleWebKit\/([0-9]+)/),
            c = !!c && c[1],
            h = a.match(/Fennec\/([0-9]+)/),
            h = !!h && h[1],
            u = a.match(/Opera Mobi\/([0-9]+)/),
            d = !!u && u[1],
            p = a.match(/MSIE ([0-9]+)/),
            p = !!p && p[1];
        r = !((-1 < l.indexOf("iPhone") || -1 < l.indexOf("iPad") || -1 < l.indexOf("iPod")) && c && 534 > c || e.operamini && "[object OperaMini]" === {}.toString.call(e.operamini) || u && 7458 > d || -1 < a.indexOf("Android") && c && 533 > c || h && 6 > h || "palmGetResource" in e && c && 534 > c || -1 < a.indexOf("MeeGo") && -1 < a.indexOf("NokiaBrowser/8.5.0") || p && 6 >= p)
    }(jQuery, window), ! function(t, e, i) {
        "use strict";

        function n(i) {
            if (o = e.documentElement, s = e.body, U(), at = this, i = i || {}, dt = i.constants || {}, i.easing)
                for (var n in i.easing) V[n] = i.easing[n];
            bt = i.edgeStrategy || "set", ht = {
                beforerender: i.beforerender,
                render: i.render,
                keyframe: i.keyframe
            }, ut = i.forceHeight !== !1, ut && (zt = i.scale || 1), pt = i.mobileDeceleration || T, mt = i.smoothScrolling !== !1, gt = i.smoothScrollingDuration || I, vt = {
                targetTop: at.getScrollTop()
            }, Bt = (i.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
            })(), Bt ? (ct = e.getElementById(i.skrollrBody || k), ct && rt(), Q(), Pt(o, [y, x], [b])) : Pt(o, [y, w], [b]), at.refresh(), Ct(t, "resize orientationchange", function() {
                var t = o.clientWidth,
                    e = o.clientHeight;
                (e !== Ft || t !== jt) && (Ft = e, jt = t, qt = !0)
            });
            var r = X();
            return function a() {
                K(), xt = r(a)
            }(), at
        }
        var o, s, r = {
                get: function() {
                    return at
                },
                init: function(t) {
                    return at || new n(t)
                },
                VERSION: "0.6.30"
            },
            a = Object.prototype.hasOwnProperty,
            l = t.Math,
            c = t.getComputedStyle,
            h = "touchstart",
            u = "touchmove",
            d = "touchcancel",
            p = "touchend",
            f = "skrollable",
            m = f + "-before",
            g = f + "-between",
            v = f + "-after",
            y = "skrollr",
            b = "no-" + y,
            w = y + "-desktop",
            x = y + "-mobile",
            C = "linear",
            S = 1e3,
            T = .004,
            k = "skrollr-body",
            I = 200,
            E = "start",
            $ = "end",
            A = "center",
            P = "bottom",
            _ = "___skrollable_id",
            L = /^(?:input|textarea|button|select)$/i,
            O = /^\s+|\s+$/g,
            D = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            M = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            z = /^(@?[a-z\-]+)\[(\w+)\]$/,
            N = /-([a-z0-9_])/g,
            R = function(t, e) {
                return e.toUpperCase()
            },
            W = /[\-+]?[\d]*\.?[\d]+/g,
            j = /\{\?\}/g,
            F = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            q = /[a-z\-]+-gradient/g,
            H = "",
            B = "",
            U = function() {
                var t = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (c) {
                    var e = c(s, null);
                    for (var i in e)
                        if (H = i.match(t) || +i == i && e[i].match(t)) break;
                    if (!H) return void(H = B = "");
                    H = H[0], "-" === H.slice(0, 1) ? (B = H, H = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[H]) : B = "-" + H.toLowerCase() + "-"
                }
            },
            X = function() {
                var e = t.requestAnimationFrame || t[H.toLowerCase() + "RequestAnimationFrame"],
                    i = Ot();
                return (Bt || !e) && (e = function(e) {
                    var n = Ot() - i,
                        o = l.max(0, 1e3 / 60 - n);
                    return t.setTimeout(function() {
                        i = Ot(), e()
                    }, o)
                }), e
            },
            Y = function() {
                var e = t.cancelAnimationFrame || t[H.toLowerCase() + "CancelAnimationFrame"];
                return (Bt || !e) && (e = function(e) {
                    return t.clearTimeout(e)
                }), e
            },
            V = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(t) {
                    return t
                },
                quadratic: function(t) {
                    return t * t
                },
                cubic: function(t) {
                    return t * t * t
                },
                swing: function(t) {
                    return -l.cos(t * l.PI) / 2 + .5
                },
                sqrt: function(t) {
                    return l.sqrt(t)
                },
                outCubic: function(t) {
                    return l.pow(t - 1, 3) + 1
                },
                bounce: function(t) {
                    var e;
                    if (.5083 >= t) e = 3;
                    else if (.8489 >= t) e = 9;
                    else if (.96208 >= t) e = 27;
                    else {
                        if (!(.99981 >= t)) return 1;
                        e = 91
                    }
                    return 1 - l.abs(3 * l.cos(t * e * 1.028) / e)
                }
            };
        n.prototype.refresh = function(t) {
            var n, o, s = !1;
            for (t === i ? (s = !0, lt = [], Ht = 0, t = e.getElementsByTagName("*")) : t.length === i && (t = [t]), n = 0, o = t.length; o > n; n++) {
                var r = t[n],
                    a = r,
                    l = [],
                    c = mt,
                    h = bt,
                    u = !1;
                if (s && _ in r && delete r[_], r.attributes) {
                    for (var d = 0, p = r.attributes.length; p > d; d++) {
                        var m = r.attributes[d];
                        if ("data-anchor-target" !== m.name)
                            if ("data-smooth-scrolling" !== m.name)
                                if ("data-edge-strategy" !== m.name)
                                    if ("data-emit-events" !== m.name) {
                                        var g = m.name.match(D);
                                        if (null !== g) {
                                            var v = {
                                                props: m.value,
                                                element: r,
                                                eventType: m.name.replace(N, R)
                                            };
                                            l.push(v);
                                            var y = g[1];
                                            y && (v.constant = y.substr(1));
                                            var b = g[2];
                                            /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                                            var w = g[3],
                                                x = g[4] || w;
                                            w && w !== E && w !== $ ? (v.mode = "relative", v.anchors = [w, x]) : (v.mode = "absolute", w === $ ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * zt))
                                        }
                                    } else u = !0;
                        else h = m.value;
                        else c = "off" !== m.value;
                        else if (a = e.querySelector(m.value), null === a) throw 'Unable to find anchor target "' + m.value + '"'
                    }
                    if (l.length) {
                        var C, S, T;
                        !s && _ in r ? (T = r[_], C = lt[T].styleAttr, S = lt[T].classAttr) : (T = r[_] = Ht++, C = r.style.cssText, S = At(r)), lt[T] = {
                            element: r,
                            styleAttr: C,
                            classAttr: S,
                            anchorTarget: a,
                            keyFrames: l,
                            smoothScrolling: c,
                            edgeStrategy: h,
                            emitEvents: u,
                            lastFrameIndex: -1
                        }, Pt(r, [f], [])
                    }
                }
            }
            for (It(), n = 0, o = t.length; o > n; n++) {
                var k = lt[t[n][_]];
                k !== i && (J(k), et(k))
            }
            return at
        }, n.prototype.relativeToAbsolute = function(t, e, i) {
            var n = o.clientHeight,
                s = t.getBoundingClientRect(),
                r = s.top,
                a = s.bottom - s.top;
            return e === P ? r -= n : e === A && (r -= n / 2), i === P ? r += a : i === A && (r += a / 2), r += at.getScrollTop(), r + .5 | 0
        }, n.prototype.animateTo = function(t, e) {
            e = e || {};
            var n = Ot(),
                o = at.getScrollTop(),
                s = e.duration === i ? S : e.duration;
            return ft = {
                startTop: o,
                topDiff: t - o,
                targetTop: t,
                duration: s,
                startTime: n,
                endTime: n + s,
                easing: V[e.easing || C],
                done: e.done
            }, ft.topDiff || (ft.done && ft.done.call(at, !1), ft = i), at
        }, n.prototype.stopAnimateTo = function() {
            ft && ft.done && ft.done.call(at, !0), ft = i
        }, n.prototype.isAnimatingTo = function() {
            return !!ft
        }, n.prototype.isMobile = function() {
            return Bt
        }, n.prototype.setScrollTop = function(e, i) {
            return yt = i === !0, Bt ? Ut = l.min(l.max(e, 0), Mt) : t.scrollTo(0, e), at
        }, n.prototype.getScrollTop = function() {
            return Bt ? Ut : t.pageYOffset || o.scrollTop || s.scrollTop || 0
        }, n.prototype.getMaxScrollTop = function() {
            return Mt
        }, n.prototype.on = function(t, e) {
            return ht[t] = e, at
        }, n.prototype.off = function(t) {
            return delete ht[t], at
        }, n.prototype.destroy = function() {
            var t = Y();
            t(xt), Tt(), Pt(o, [b], [y, w, x]);
            for (var e = 0, n = lt.length; n > e; e++) st(lt[e].element);
            o.style.overflow = s.style.overflow = "", o.style.height = s.style.height = "", ct && r.setStyle(ct, "transform", "none"), at = i, ct = i, ht = i, ut = i, Mt = 0, zt = 1, dt = i, pt = i, Nt = "down", Rt = -1, jt = 0, Ft = 0, qt = !1, ft = i, mt = i, gt = i, vt = i, yt = i, Ht = 0, bt = i, Bt = !1, Ut = 0, wt = i
        };
        var Q = function() {
                var n, r, a, c, f, m, g, v, y, b, w, x;
                Ct(o, [h, u, d, p].join(" "), function(t) {
                    var o = t.changedTouches[0];
                    for (c = t.target; 3 === c.nodeType;) c = c.parentNode;
                    switch (f = o.clientY, m = o.clientX, b = t.timeStamp, L.test(c.tagName) || t.preventDefault(), t.type) {
                        case h:
                            n && n.blur(), at.stopAnimateTo(), n = c, r = g = f, a = m, y = b;
                            break;
                        case u:
                            L.test(c.tagName) && e.activeElement !== c && t.preventDefault(), v = f - g, x = b - w, at.setScrollTop(Ut - v, !0), g = f, w = b;
                            break;
                        default:
                        case d:
                        case p:
                            var s = r - f,
                                C = a - m,
                                S = C * C + s * s;
                            if (49 > S) {
                                if (!L.test(n.tagName)) {
                                    n.focus();
                                    var T = e.createEvent("MouseEvents");
                                    T.initMouseEvent("click", !0, !0, t.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), n.dispatchEvent(T)
                                }
                                return
                            }
                            n = i;
                            var k = v / x;
                            k = l.max(l.min(k, 3), -3);
                            var I = l.abs(k / pt),
                                E = k * I + .5 * pt * I * I,
                                $ = at.getScrollTop() - E,
                                A = 0;
                            $ > Mt ? (A = (Mt - $) / E, $ = Mt) : 0 > $ && (A = -$ / E, $ = 0), I *= 1 - A, at.animateTo($ + .5 | 0, {
                                easing: "outCubic",
                                duration: I
                            })
                    }
                }), t.scrollTo(0, 0), o.style.overflow = s.style.overflow = "hidden"
            },
            G = function() {
                var t, e, i, n, s, r, a, c, h, u, d, p = o.clientHeight,
                    f = Et();
                for (c = 0, h = lt.length; h > c; c++)
                    for (t = lt[c], e = t.element, i = t.anchorTarget, n = t.keyFrames, s = 0, r = n.length; r > s; s++) a = n[s], u = a.offset, d = f[a.constant] || 0, a.frame = u, a.isPercentage && (u *= p, a.frame = u), "relative" === a.mode && (st(e), a.frame = at.relativeToAbsolute(i, a.anchors[0], a.anchors[1]) - u, st(e, !0)), a.frame += d, ut && !a.isEnd && a.frame > Mt && (Mt = a.frame);
                for (Mt = l.max(Mt, $t()), c = 0, h = lt.length; h > c; c++) {
                    for (t = lt[c], n = t.keyFrames, s = 0, r = n.length; r > s; s++) a = n[s], d = f[a.constant] || 0, a.isEnd && (a.frame = Mt - a.offset + d);
                    t.keyFrames.sort(Dt)
                }
            },
            Z = function(t, e) {
                for (var i = 0, n = lt.length; n > i; i++) {
                    var o, s, l = lt[i],
                        c = l.element,
                        h = l.smoothScrolling ? t : e,
                        u = l.keyFrames,
                        d = u.length,
                        p = u[0],
                        y = u[u.length - 1],
                        b = h < p.frame,
                        w = h > y.frame,
                        x = b ? p : y,
                        C = l.emitEvents,
                        S = l.lastFrameIndex;
                    if (b || w) {
                        if (b && -1 === l.edge || w && 1 === l.edge) continue;
                        switch (b ? (Pt(c, [m], [v, g]), C && S > -1 && (kt(c, p.eventType, Nt), l.lastFrameIndex = -1)) : (Pt(c, [v], [m, g]), C && d > S && (kt(c, y.eventType, Nt), l.lastFrameIndex = d)), l.edge = b ? -1 : 1, l.edgeStrategy) {
                            case "reset":
                                st(c);
                                continue;
                            case "ease":
                                h = x.frame;
                                break;
                            default:
                            case "set":
                                var T = x.props;
                                for (o in T) a.call(T, o) && (s = ot(T[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), s) : r.setStyle(c, o, s));
                                continue
                        }
                    } else 0 !== l.edge && (Pt(c, [f, g], [m, v]), l.edge = 0);
                    for (var k = 0; d - 1 > k; k++)
                        if (h >= u[k].frame && h <= u[k + 1].frame) {
                            var I = u[k],
                                E = u[k + 1];
                            for (o in I.props)
                                if (a.call(I.props, o)) {
                                    var $ = (h - I.frame) / (E.frame - I.frame);
                                    $ = I.props[o].easing($), s = nt(I.props[o].value, E.props[o].value, $), s = ot(s), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), s) : r.setStyle(c, o, s)
                                }
                            C && S !== k && ("down" === Nt ? kt(c, I.eventType, Nt) : kt(c, E.eventType, Nt), l.lastFrameIndex = k);
                            break
                        }
                }
            },
            K = function() {
                qt && (qt = !1, It());
                var t, e, n = at.getScrollTop(),
                    o = Ot();
                if (ft) o >= ft.endTime ? (n = ft.targetTop, t = ft.done, ft = i) : (e = ft.easing((o - ft.startTime) / ft.duration), n = ft.startTop + e * ft.topDiff | 0), at.setScrollTop(n, !0);
                else if (!yt) {
                    var s = vt.targetTop - n;
                    s && (vt = {
                        startTop: Rt,
                        topDiff: n - Rt,
                        targetTop: n,
                        startTime: Wt,
                        endTime: Wt + gt
                    }), o <= vt.endTime && (e = V.sqrt((o - vt.startTime) / gt), n = vt.startTop + e * vt.topDiff | 0)
                }
                if (yt || Rt !== n) {
                    Nt = n > Rt ? "down" : Rt > n ? "up" : Nt, yt = !1;
                    var a = {
                            curTop: n,
                            lastTop: Rt,
                            maxTop: Mt,
                            direction: Nt
                        },
                        l = ht.beforerender && ht.beforerender.call(at, a);
                    l !== !1 && (Z(n, at.getScrollTop()), Bt && ct && r.setStyle(ct, "transform", "translate(0, " + -Ut + "px) " + wt), Rt = n, ht.render && ht.render.call(at, a)), t && t.call(at, !1)
                }
                Wt = o
            },
            J = function(t) {
                for (var e = 0, i = t.keyFrames.length; i > e; e++) {
                    for (var n, o, s, r, a = t.keyFrames[e], l = {}; null !== (r = M.exec(a.props));) s = r[1], o = r[2], n = s.match(z), null !== n ? (s = n[1], n = n[2]) : n = C, o = o.indexOf("!") ? tt(o) : [o.slice(1)], l[s] = {
                        value: o,
                        easing: V[n]
                    };
                    a.props = l
                }
            },
            tt = function(t) {
                var e = [];
                return F.lastIndex = 0, t = t.replace(F, function(t) {
                    return t.replace(W, function(t) {
                        return t / 255 * 100 + "%"
                    })
                }), B && (q.lastIndex = 0, t = t.replace(q, function(t) {
                    return B + t
                })), t = t.replace(W, function(t) {
                    return e.push(+t), "{?}"
                }), e.unshift(t), e
            },
            et = function(t) {
                var e, i, n = {};
                for (e = 0, i = t.keyFrames.length; i > e; e++) it(t.keyFrames[e], n);
                for (n = {}, e = t.keyFrames.length - 1; e >= 0; e--) it(t.keyFrames[e], n)
            },
            it = function(t, e) {
                var i;
                for (i in e) a.call(t.props, i) || (t.props[i] = e[i]);
                for (i in t.props) e[i] = t.props[i]
            },
            nt = function(t, e, i) {
                var n, o = t.length;
                if (o !== e.length) throw "Can't interpolate between \"" + t[0] + '" and "' + e[0] + '"';
                var s = [t[0]];
                for (n = 1; o > n; n++) s[n] = t[n] + (e[n] - t[n]) * i;
                return s
            },
            ot = function(t) {
                var e = 1;
                return j.lastIndex = 0, t[0].replace(j, function() {
                    return t[e++]
                })
            },
            st = function(t, e) {
                t = [].concat(t);
                for (var i, n, o = 0, s = t.length; s > o; o++) n = t[o], i = lt[n[_]], i && (e ? (n.style.cssText = i.dirtyStyleAttr, Pt(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = At(n), n.style.cssText = i.styleAttr, Pt(n, i.classAttr)))
            },
            rt = function() {
                wt = "translateZ(0)", r.setStyle(ct, "transform", wt);
                var t = c(ct),
                    e = t.getPropertyValue("transform"),
                    i = t.getPropertyValue(B + "transform"),
                    n = e && "none" !== e || i && "none" !== i;
                n || (wt = "")
            };
        r.setStyle = function(t, e, i) {
            var n = t.style;
            if (e = e.replace(N, R).replace("-", ""), "zIndex" === e) isNaN(i) ? n[e] = i : n[e] = "" + (0 | i);
            else if ("float" === e) n.styleFloat = n.cssFloat = i;
            else try {
                H && (n[H + e.slice(0, 1).toUpperCase() + e.slice(1)] = i), n[e] = i
            } catch (o) {}
        };
        var at, lt, ct, ht, ut, dt, pt, ft, mt, gt, vt, yt, bt, wt, xt, Ct = r.addEvent = function(e, i, n) {
                var o = function(e) {
                    return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1, e.defaultPrevented = !0
                    }), n.call(this, e)
                };
                i = i.split(" ");
                for (var s, r = 0, a = i.length; a > r; r++) s = i[r], e.addEventListener ? e.addEventListener(s, n, !1) : e.attachEvent("on" + s, o), Xt.push({
                    element: e,
                    name: s,
                    listener: n
                })
            },
            St = r.removeEvent = function(t, e, i) {
                e = e.split(" ");
                for (var n = 0, o = e.length; o > n; n++) t.removeEventListener ? t.removeEventListener(e[n], i, !1) : t.detachEvent("on" + e[n], i)
            },
            Tt = function() {
                for (var t, e = 0, i = Xt.length; i > e; e++) t = Xt[e], St(t.element, t.name, t.listener);
                Xt = []
            },
            kt = function(t, e, i) {
                ht.keyframe && ht.keyframe.call(at, t, e, i)
            },
            It = function() {
                var t = at.getScrollTop();
                Mt = 0, ut && !Bt && (s.style.height = ""), G(), ut && !Bt && (s.style.height = Mt + o.clientHeight + "px"), Bt ? at.setScrollTop(l.min(at.getScrollTop(), Mt)) : at.setScrollTop(t, !0), yt = !0
            },
            Et = function() {
                var t, e, i = o.clientHeight,
                    n = {};
                for (t in dt) e = dt[t], "function" == typeof e ? e = e.call(at) : /p$/.test(e) && (e = e.slice(0, -1) / 100 * i), n[t] = e;
                return n
            },
            $t = function() {
                var t, e = 0;
                return ct && (e = l.max(ct.offsetHeight, ct.scrollHeight)), t = l.max(e, s.scrollHeight, s.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), t - o.clientHeight
            },
            At = function(e) {
                var i = "className";
                return t.SVGElement && e instanceof t.SVGElement && (e = e[i], i = "baseVal"), e[i]
            },
            Pt = function(e, n, o) {
                var s = "className";
                if (t.SVGElement && e instanceof t.SVGElement && (e = e[s], s = "baseVal"), o === i) return void(e[s] = n);
                for (var r = e[s], a = 0, l = o.length; l > a; a++) r = Lt(r).replace(Lt(o[a]), " ");
                r = _t(r);
                for (var c = 0, h = n.length; h > c; c++) - 1 === Lt(r).indexOf(Lt(n[c])) && (r += " " + n[c]);
                e[s] = _t(r)
            },
            _t = function(t) {
                return t.replace(O, "")
            },
            Lt = function(t) {
                return " " + t + " "
            },
            Ot = Date.now || function() {
                return +new Date
            },
            Dt = function(t, e) {
                return t.frame - e.frame
            },
            Mt = 0,
            zt = 1,
            Nt = "down",
            Rt = -1,
            Wt = Ot(),
            jt = 0,
            Ft = 0,
            qt = !1,
            Ht = 0,
            Bt = !1,
            Ut = 0,
            Xt = [];
        "function" == typeof define && define.amd ? define([], function() {
            return r
        }) : "undefined" != typeof module && module.exports ? module.exports = r : t.skrollr = r
    }(window, document), ! function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
            e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
    }(window, function(t, e) {
        "use strict";

        function i(i, s, a) {
            function l(t, e, n) {
                var o, s = "$()." + i + '("' + e + '")';
                return t.each(function(t, l) {
                    var c = a.data(l, i);
                    if (!c) return void r(i + " not initialized. Cannot call methods, i.e. " + s);
                    var h = c[e];
                    if (!h || "_" == e.charAt(0)) return void r(s + " is not a valid method");
                    var u = h.apply(c, n);
                    o = void 0 === o ? u : o
                }), void 0 !== o ? o : t
            }

            function c(t, e) {
                t.each(function(t, n) {
                    var o = a.data(n, i);
                    o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o))
                })
            }
            a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function(t) {
                a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
            }), a.fn[i] = function(t) {
                if ("string" == typeof t) {
                    var e = o.call(arguments, 1);
                    return l(this, t, e)
                }
                return c(this, t), this
            }, n(a))
        }

        function n(t) {
            !t || t && t.bridget || (t.bridget = i)
        }
        var o = Array.prototype.slice,
            s = t.console,
            r = "undefined" == typeof s ? function() {} : function(t) {
                s.error(t)
            };
        return n(e || t.jQuery), i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
    }(this, function() {
        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {},
                    n = i[t] = i[t] || {};
                return n[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = 0,
                    o = i[n];
                e = e || [];
                for (var s = this._onceEvents && this._onceEvents[t]; o;) {
                    var r = s && s[o];
                    r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n]
                }
                return this
            }
        }, t
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("get-size/get-size", [], function() {
            return e()
        }) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
    }(window, function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t),
                i = -1 == t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function e() {}

        function i() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; c > e; e++) {
                var i = l[e];
                t[i] = 0
            }
            return t
        }

        function n(t) {
            var e = getComputedStyle(t);
            return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
        }

        function o() {
            if (!h) {
                h = !0;
                var e = document.createElement("div");
                e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                var i = document.body || document.documentElement;
                i.appendChild(e);
                var o = n(e);
                s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e)
            }
        }

        function s(e) {
            if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                var s = n(e);
                if ("none" == s.display) return i();
                var a = {};
                a.width = e.offsetWidth, a.height = e.offsetHeight;
                for (var h = a.isBorderBox = "border-box" == s.boxSizing, u = 0; c > u; u++) {
                    var d = l[u],
                        p = s[d],
                        f = parseFloat(p);
                    a[d] = isNaN(f) ? 0 : f
                }
                var m = a.paddingLeft + a.paddingRight,
                    g = a.paddingTop + a.paddingBottom,
                    v = a.marginLeft + a.marginRight,
                    y = a.marginTop + a.marginBottom,
                    b = a.borderLeftWidth + a.borderRightWidth,
                    w = a.borderTopWidth + a.borderBottomWidth,
                    x = h && r,
                    C = t(s.width);
                C !== !1 && (a.width = C + (x ? 0 : m + b));
                var S = t(s.height);
                return S !== !1 && (a.height = S + (x ? 0 : g + w)), a.innerWidth = a.width - (m + b), a.innerHeight = a.height - (g + w), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a
            }
        }
        var r, a = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            },
            l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            c = l.length,
            h = !1;
        return s
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
    }(window, function() {
        "use strict";
        var t = function() {
            var t = Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i],
                    o = n + "MatchesSelector";
                if (t[o]) return o
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
            return e(t, i)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
    }(window, function(t, e) {
        var i = {};
        i.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, i.modulo = function(t, e) {
            return (t % e + e) % e
        }, i.makeArray = function(t) {
            var e = [];
            if (Array.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0; i < t.length; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, i.removeFrom = function(t, e) {
            var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
        }, i.getParent = function(t, i) {
            for (; t != document.body;)
                if (t = t.parentNode, e(t, i)) return t
        }, i.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, i.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, i.filterFindElements = function(t, n) {
            t = i.makeArray(t);
            var o = [];
            return t.forEach(function(t) {
                if (t instanceof HTMLElement) {
                    if (!n) return void o.push(t);
                    e(t, n) && o.push(t);
                    for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) o.push(i[s])
                }
            }), o
        }, i.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                o = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[o];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[o] = setTimeout(function() {
                    n.apply(s, e), delete s[o]
                }, i || 100)
            }
        }, i.docReady = function(t) {
            "complete" == document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
        }, i.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var n = t.console;
        return i.htmlInit = function(e, o) {
            i.docReady(function() {
                var s = i.toDashed(o),
                    r = "data-" + s,
                    a = document.querySelectorAll("[" + r + "]"),
                    l = document.querySelectorAll(".js-" + s),
                    c = i.makeArray(a).concat(i.makeArray(l)),
                    h = r + "-options",
                    u = t.jQuery;
                c.forEach(function(t) {
                    var i, s = t.getAttribute(r) || t.getAttribute(h);
                    try {
                        i = s && JSON.parse(s)
                    } catch (a) {
                        return void(n && n.error("Error parsing " + r + " on " + t.className + ": " + a))
                    }
                    var l = new e(t, i);
                    u && u.data(t, o, l)
                })
            })
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function o(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var s = document.documentElement.style,
            r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
            a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
            l = {
                WebkitTransition: "webkitTransitionEnd",
                transition: "transitionend"
            }[r],
            c = {
                transform: a,
                transition: r,
                transitionDuration: r + "Duration",
                transitionProperty: r + "Property",
                transitionDelay: r + "Delay"
            },
            h = n.prototype = Object.create(t.prototype);
        h.constructor = n, h._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, h.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, h.getSize = function() {
            this.size = e(this.element)
        }, h.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = c[i] || i;
                e[n] = t[i]
            }
        }, h.getPosition = function() {
            var t = getComputedStyle(this.element),
                e = this.layout._getOption("originLeft"),
                i = this.layout._getOption("originTop"),
                n = t[e ? "left" : "right"],
                o = t[i ? "top" : "bottom"],
                s = this.layout.size,
                r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
                a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);
            r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a
        }, h.layoutPosition = function() {
            var t = this.layout.size,
                e = {},
                i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop"),
                o = i ? "paddingLeft" : "paddingRight",
                s = i ? "left" : "right",
                r = i ? "right" : "left",
                a = this.position.x + t[o];
            e[s] = this.getXValue(a), e[r] = "";
            var l = n ? "paddingTop" : "paddingBottom",
                c = n ? "top" : "bottom",
                h = n ? "bottom" : "top",
                u = this.position.y + t[l];
            e[c] = this.getYValue(u), e[h] = "", this.css(e), this.emitEvent("layout", [this])
        }, h.getXValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, h.getYValue = function(t) {
            var e = this.layout._getOption("horizontal");
            return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, h._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                o = parseInt(t, 10),
                s = parseInt(e, 10),
                r = o === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                c = {};
            c.transform = this.getTranslate(a, l), this.transition({
                to: c,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, h.getTranslate = function(t, e) {
            var i = this.layout._getOption("originLeft"),
                n = this.layout._getOption("originTop");
            return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)"
        }, h.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, h.moveTo = h._transitionTo, h.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, h._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, h.transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var u = "opacity," + o(a);
        h.enableTransition = function() {
            if (!this.isTransitioning) {
                var t = this.layout.options.transitionDuration;
                t = "number" == typeof t ? t + "ms" : t, this.css({
                    transitionProperty: u,
                    transitionDuration: t,
                    transitionDelay: this.staggerDelay || 0
                }), this.element.addEventListener(l, this, !1)
            }
        }, h.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, h.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var d = {
            "-webkit-transform": "transform"
        };
        h.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    n = d[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                    var o = e.onEnd[n];
                    o.call(this), delete e.onEnd[n]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, h.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
        }, h._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var p = {
            transitionProperty: "",
            transitionDuration: "",
            transitionDelay: ""
        };
        return h.removeTransitionStyles = function() {
            this.css(p)
        }, h.stagger = function(t) {
            t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
        }, h.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, h.remove = function() {
            return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
                this.removeElem()
            }), void this.hide()) : void this.removeElem()
        }, h.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, h.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, h.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, h.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, h.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, h.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, o, s) {
            return e(t, i, n, o, s)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, o) {
        "use strict";

        function s(t, e) {
            var i = n.getQueryElement(t);
            if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, c && (this.$element = c(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);
            var o = ++u;
            this.element.outlayerGUID = o, d[o] = this, this._create();
            var s = this._getOption("initLayout");
            s && this.layout()
        }

        function r(t) {
            function e() {
                t.apply(this, arguments)
            }
            return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
        }

        function a(t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                n = e && e[2];
            if (!i.length) return 0;
            i = parseFloat(i);
            var o = f[n] || 1;
            return i * o
        }
        var l = t.console,
            c = t.jQuery,
            h = function() {},
            u = 0,
            d = {};
        s.namespace = "outlayer", s.Item = o, s.defaults = {
            containerStyle: {
                position: "relative"
            },
            initLayout: !0,
            originLeft: !0,
            originTop: !0,
            resize: !0,
            resizeContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        };
        var p = s.prototype;
        n.extend(p, e.prototype), p.option = function(t) {
            n.extend(this.options, t)
        }, p._getOption = function(t) {
            var e = this.constructor.compatOptions[t];
            return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
        }, s.compatOptions = {
            initLayout: "isInitLayout",
            horizontal: "isHorizontal",
            layoutInstant: "isLayoutInstant",
            originLeft: "isOriginLeft",
            originTop: "isOriginTop",
            resize: "isResizeBound",
            resizeContainer: "isResizingContainer"
        }, p._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
            var t = this._getOption("resize");
            t && this.bindResize()
        }, p.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, p._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                var s = e[o],
                    r = new i(s, this);
                n.push(r)
            }
            return n
        }, p._filterFindItemElements = function(t) {
            return n.filterFindElements(t, this.options.itemSelector)
        }, p.getItemElements = function() {
            return this.items.map(function(t) {
                return t.element
            })
        }, p.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            this.layoutItems(this.items, e), this._isLayoutInited = !0
        }, p._init = p.layout, p._resetLayout = function() {
            this.getSize()
        }, p.getSize = function() {
            this.size = i(this.element)
        }, p._getMeasurement = function(t, e) {
            var n, o = this.options[t];
            o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0
        }, p.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, p._getItemsForLayout = function(t) {
            return t.filter(function(t) {
                return !t.isIgnored
            })
        }, p._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                var i = [];
                t.forEach(function(t) {
                    var n = this._getItemLayoutPosition(t);
                    n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n)
                }, this), this._processLayoutQueue(i)
            }
        }, p._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, p._processLayoutQueue = function(t) {
            this.updateStagger(), t.forEach(function(t, e) {
                this._positionItem(t.item, t.x, t.y, t.isInstant, e);
            }, this)
        }, p.updateStagger = function() {
            var t = this.options.stagger;
            return null === t || void 0 === t ? void(this.stagger = 0) : (this.stagger = a(t), this.stagger)
        }, p._positionItem = function(t, e, i, n, o) {
            n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
        }, p._postLayout = function() {
            this.resizeContainer()
        }, p.resizeContainer = function() {
            var t = this._getOption("resizeContainer");
            if (t) {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }
        }, p._getContainerSize = h, p._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, p._emitCompleteOnItems = function(t, e) {
            function i() {
                o.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                r++, r == s && i()
            }
            var o = this,
                s = e.length;
            if (!e || !s) return void i();
            var r = 0;
            e.forEach(function(e) {
                e.once(t, n)
            })
        }, p.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), c)
                if (this.$element = this.$element || c(this.element), e) {
                    var o = c.Event(e);
                    o.type = t, this.$element.trigger(o, i)
                } else this.$element.trigger(t, i)
        }, p.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, p.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, p.stamp = function(t) {
            t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
        }, p.unstamp = function(t) {
            t = this._find(t), t && t.forEach(function(t) {
                n.removeFrom(this.stamps, t), this.unignore(t)
            }, this)
        }, p._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0
        }, p._manageStamps = function() {
            this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
        }, p._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, p._manageStamp = h, p._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                n = this._boundingRect,
                o = i(t),
                s = {
                    left: e.left - n.left - o.marginLeft,
                    top: e.top - n.top - o.marginTop,
                    right: n.right - e.right - o.marginRight,
                    bottom: n.bottom - e.bottom - o.marginBottom
                };
            return s
        }, p.handleEvent = n.handleEvent, p.bindResize = function() {
            t.addEventListener("resize", this), this.isResizeBound = !0
        }, p.unbindResize = function() {
            t.removeEventListener("resize", this), this.isResizeBound = !1
        }, p.onresize = function() {
            this.resize()
        }, n.debounceMethod(s, "onresize", 100), p.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, p.needsResizeLayout = function() {
            var t = i(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, p.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, p.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, p.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, p.reveal = function(t) {
            if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.reveal()
                })
            }
        }, p.hide = function(t) {
            if (this._emitCompleteOnItems("hide", t), t && t.length) {
                var e = this.updateStagger();
                t.forEach(function(t, i) {
                    t.stagger(i * e), t.hide()
                })
            }
        }, p.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, p.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, p.getItem = function(t) {
            for (var e = 0; e < this.items.length; e++) {
                var i = this.items[e];
                if (i.element == t) return i
            }
        }, p.getItems = function(t) {
            t = n.makeArray(t);
            var e = [];
            return t.forEach(function(t) {
                var i = this.getItem(t);
                i && e.push(i)
            }, this), e
        }, p.remove = function(t) {
            var e = this.getItems(t);
            this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
                t.remove(), n.removeFrom(this.items, t)
            }, this)
        }, p.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
                t.destroy()
            }), this.unbindResize();
            var e = this.element.outlayerGUID;
            delete d[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
        }, s.data = function(t) {
            t = n.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && d[e]
        }, s.create = function(t, e) {
            var i = r(s);
            return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
        };
        var f = {
            ms: 1,
            s: 1e3
        };
        return s.Item = o, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        var i = e.prototype = Object.create(t.Item.prototype),
            n = i._create;
        i._create = function() {
            this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
        }, i.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var o = i.destroy;
        return i.destroy = function() {
            o.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        var n = i.prototype,
            o = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
        return o.forEach(function(t) {
            n[t] = function() {
                return e.prototype[t].apply(this.isotope, arguments)
            }
        }), n.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, n._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, n.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, n.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, n.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var o = this.getFirstItemSize();
                this[i] = o && o[n] || this.isotope.size["inner" + e]
            }
        }, n.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, n.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, n.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function o() {
                i.apply(this, arguments)
            }
            return o.prototype = Object.create(n), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window, function(t, e) {
        var i = t.create("masonry");
        return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
            for (var t = 0; t < this.cols; t++) this.colYs.push(0);
            this.maxY = 0
        }, i.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                o = this.containerWidth + this.gutter,
                s = o / n,
                r = n - o % n,
                a = r && 1 > r ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, i.prototype.getContainerWidth = function() {
            var t = this._getOption("fitWidth"),
                i = t ? this.element.parentNode : this.element,
                n = e(i);
            this.containerWidth = n && n.innerWidth
        }, i.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                i = e && 1 > e ? "round" : "ceil",
                n = Math[i](t.size.outerWidth / this.columnWidth);
            n = Math.min(n, this.cols);
            for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = {
                    x: this.columnWidth * r,
                    y: s
                }, l = s + t.size.outerHeight, c = this.cols + 1 - o.length, h = 0; c > h; h++) this.colYs[r + h] = l;
            return a
        }, i.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var o = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, o)
            }
            return e
        }, i.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                o = this._getOption("originLeft"),
                s = o ? n.left : n.right,
                r = s + i.outerWidth,
                a = Math.floor(s / this.columnWidth);
            a = Math.max(0, a);
            var l = Math.floor(r / this.columnWidth);
            l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
            for (var c = this._getOption("originTop"), h = (c ? n.top : n.bottom) + i.outerHeight, u = a; l >= u; u++) this.colYs[u] = Math.max(h, this.colYs[u])
        }, i.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
        }, i.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, i.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t != this.containerWidth
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";
        var i = t.create("masonry"),
            n = i.prototype,
            o = {
                _getElementOffset: !0,
                layout: !0,
                _getMeasurement: !0
            };
        for (var s in e.prototype) o[s] || (n[s] = e.prototype[s]);
        var r = n.measureColumns;
        n.measureColumns = function() {
            this.items = this.isotope.filteredItems, r.call(this)
        };
        var a = n._getOption;
        return n._getOption = function(t) {
            return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows"),
            i = e.prototype;
        return i._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, i._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("isotope/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
                horizontalAlignment: 0
            }),
            i = e.prototype;
        return i._resetLayout = function() {
            this.y = 0
        }, i._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, i._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "./item", "./layout-mode", "./layout-modes/masonry", "./layout-modes/fit-rows", "./layout-modes/vertical"], function(i, n, o, s, r, a) {
            return e(t, i, n, o, s, r, a)
        }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, o, s, r) {
        function a(t, e) {
            return function(i, n) {
                for (var o = 0; o < t.length; o++) {
                    var s = t[o],
                        r = i.sortData[s],
                        a = n.sortData[s];
                    if (r > a || a > r) {
                        var l = void 0 !== e[s] ? e[s] : e,
                            c = l ? 1 : -1;
                        return (r > a ? 1 : -1) * c
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            c = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            h = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        h.Item = s, h.LayoutMode = r;
        var u = h.prototype;
        u._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in r.modes) this._initLayoutMode(t)
        }, u.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, u._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
                var n = t[i];
                n.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, u._initLayoutMode = function(t) {
            var e = r.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, u.layout = function() {
            return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
        }, u._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, u.arrange = function(t) {
            this.option(t), this._getIsInstant();
            var e = this._filter(this.items);
            this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
        }, u._init = u.arrange, u._hideReveal = function(t) {
            this.reveal(t.needReveal), this.hide(t.needHide)
        }, u._getIsInstant = function() {
            var t = this._getOption("layoutInstant"),
                e = void 0 !== t ? t : !this._isLayoutInited;
            return this._isInstant = e, e
        }, u._bindArrangeComplete = function() {
            function t() {
                e && i && n && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
            }
            var e, i, n, o = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, u._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], o = [], s = this._getFilterTest(e), r = 0; r < t.length; r++) {
                var a = t[r];
                if (!a.isIgnored) {
                    var l = s(a);
                    l && i.push(a), l && a.isHidden ? n.push(a) : l || a.isHidden || o.push(a)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: o
            }
        }, u._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, u.updateSortData = function(t) {
            var e;
            t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, u._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = d(i)
            }
        }, u._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var d = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = c(t).split(" "),
                    n = i[0],
                    o = n.match(/^\[(.+)\]$/),
                    s = o && o[1],
                    r = e(s, n),
                    a = h.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(r(t))
                } : function(t) {
                    return t && r(t)
                }
            }

            function e(t, e) {
                return t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && i.textContent
                }
            }
            return t
        }();
        h.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, u._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, u._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, u._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, u._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, u._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, u._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, u.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, u.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, u.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, u._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, u.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, o = e.length;
                for (i = 0; o > i; i++) n = e[i], this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; o > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; o > i; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var p = u.remove;
        return u.remove = function(t) {
            t = o.makeArray(t);
            var e = this.getItems(t);
            p.call(this, t);
            for (var i = e && e.length, n = 0; i && i > n; n++) {
                var s = e[n];
                o.removeFrom(this.filteredItems, s)
            }
        }, u.shuffle = function() {
            for (var t = 0; t < this.items.length; t++) {
                var e = this.items[t];
                e.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, u._noTransition = function(t, e) {
            var i = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var n = t.apply(this, e);
            return this.options.transitionDuration = i, n
        }, u.getFilteredItemElements = function() {
            return this.filteredItems.map(function(t) {
                return t.element
            })
        }, h
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
    }(function(t) {
        t.extend(t.fn, {
            validate: function(e) {
                if (!this.length) return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var i = t.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new t.validator(e, this[0]), t.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.settings.submitHandler && (i.submitButton = e.target), t(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(e) {
                    function n() {
                        var n, o;
                        return i.settings.submitHandler ? (i.submitButton && (n = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)), o = i.settings.submitHandler.call(i, i.currentForm, e), i.submitButton && n.remove(), void 0 !== o ? o : !1) : !0
                    }
                    return i.settings.debug && e.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
                })), i)
            },
            valid: function() {
                var e, i, n;
                return t(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, i = t(this[0].form).validate(), this.each(function() {
                    e = i.element(this) && e, e || (n = n.concat(i.errorList))
                }), i.errorList = n), e
            },
            rules: function(e, i) {
                if (this.length) {
                    var n, o, s, r, a, l, c = this[0];
                    if (e) switch (n = t.data(c.form, "validator").settings, o = n.rules, s = t.validator.staticRules(c), e) {
                        case "add":
                            t.extend(s, t.validator.normalizeRule(i)), delete s.messages, o[c.name] = s, i.messages && (n.messages[c.name] = t.extend(n.messages[c.name], i.messages));
                            break;
                        case "remove":
                            return i ? (l = {}, t.each(i.split(/\s/), function(e, i) {
                                l[i] = s[i], delete s[i], "required" === i && t(c).removeAttr("aria-required")
                            }), l) : (delete o[c.name], s)
                    }
                    return r = t.validator.normalizeRules(t.extend({}, t.validator.classRules(c), t.validator.attributeRules(c), t.validator.dataRules(c), t.validator.staticRules(c)), c), r.required && (a = r.required, delete r.required, r = t.extend({
                        required: a
                    }, r), t(c).attr("aria-required", "true")), r.remote && (a = r.remote, delete r.remote, r = t.extend(r, {
                        remote: a
                    })), r
                }
            }
        }), t.extend(t.expr[":"], {
            blank: function(e) {
                return !t.trim("" + t(e).val())
            },
            filled: function(e) {
                var i = t(e).val();
                return null !== i && !!t.trim("" + i)
            },
            unchecked: function(e) {
                return !t(e).prop("checked")
            }
        }), t.validator = function(e, i) {
            this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = i, this.init()
        }, t.validator.format = function(e, i) {
            return 1 === arguments.length ? function() {
                var i = t.makeArray(arguments);
                return i.unshift(e), t.validator.format.apply(this, i)
            } : void 0 === i ? e : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), t.each(i, function(t, i) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                    return i
                })
            }), e)
        }, t.extend(t.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: t([]),
                errorLabelContainer: t([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(e, i) {
                    var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === i.which && "" === this.elementValue(e) || -1 !== t.inArray(i.keyCode, n) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(n) : t(e).addClass(i).removeClass(n)
                },
                unhighlight: function(e, i, n) {
                    "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(n) : t(e).removeClass(i).addClass(n)
                }
            },
            setDefaults: function(e) {
                t.extend(t.validator.defaults, e)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: t.validator.format("Please enter no more than {0} characters."),
                minlength: t.validator.format("Please enter at least {0} characters."),
                rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
                range: t.validator.format("Please enter a value between {0} and {1}."),
                max: t.validator.format("Please enter a value less than or equal to {0}."),
                min: t.validator.format("Please enter a value greater than or equal to {0}."),
                step: t.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function e(e) {
                        var i = t.data(this.form, "validator"),
                            n = "on" + e.type.replace(/^validate/, ""),
                            o = i.settings;
                        o[n] && !t(this).is(o.ignore) && o[n].call(i, this, e)
                    }
                    this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i, n = this.groups = {};
                    t.each(this.settings.groups, function(e, i) {
                        "string" == typeof i && (i = i.split(/\s/)), t.each(i, function(t, i) {
                            n[i] = e
                        })
                    }), i = this.settings.rules, t.each(i, function(e, n) {
                        i[e] = t.validator.normalizeRule(n)
                    }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(e) {
                    var i, n, o = this.clean(e),
                        s = this.validationTargetFor(o),
                        r = this,
                        a = !0;
                    return void 0 === s ? delete this.invalid[o.name] : (this.prepareElement(s), this.currentElements = t(s), n = this.groups[s.name], n && t.each(this.groups, function(t, e) {
                        e === n && t !== s.name && (o = r.validationTargetFor(r.clean(r.findByName(t))), o && o.name in r.invalid && (r.currentElements.push(o), a = a && r.check(o)))
                    }), i = this.check(s) !== !1, a = a && i, i ? this.invalid[s.name] = !1 : this.invalid[s.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !i)), a
                },
                showErrors: function(e) {
                    if (e) {
                        var i = this;
                        t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) {
                            return {
                                message: t,
                                element: i.findByName(e)[0]
                            }
                        }), this.successList = t.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                    var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(e)
                },
                resetElements: function(t) {
                    var e;
                    if (this.settings.unhighlight)
                        for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                    else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e, i = 0;
                    for (e in t) t[e] && i++;
                    return i
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(t) {
                    t.not(this.containers).text(""), this.addWrapper(t).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === t.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var e = this,
                        i = {};
                    return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var n = this.name || t(this).attr("name");
                        return !n && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = t(this).closest("form")[0]), n in i || !e.objectLength(t(this).rules()) ? !1 : (i[n] = !0, !0)
                    })
                },
                clean: function(e) {
                    return t(e)[0]
                },
                errors: function() {
                    var e = this.settings.errorClass.split(" ").join(".");
                    return t(this.settings.errorElement + "." + e, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
                },
                reset: function() {
                    this.resetInternals(), this.currentElements = t([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(e) {
                    var i, n, o = t(e),
                        s = e.type;
                    return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : o.val() : (i = e.hasAttribute("contenteditable") ? o.text() : o.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/"), n >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"), n >= 0 ? i.substr(n + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var i, n, o, s = t(e).rules(),
                        r = t.map(s, function(t, e) {
                            return e
                        }).length,
                        a = !1,
                        l = this.elementValue(e);
                    if ("function" == typeof s.normalizer) {
                        if (l = s.normalizer.call(e, l), "string" != typeof l) throw new TypeError("The normalizer should return a string value.");
                        delete s.normalizer
                    }
                    for (n in s) {
                        o = {
                            method: n,
                            parameters: s[n]
                        };
                        try {
                            if (i = t.validator.methods[n].call(this, l, e, o.parameters), "dependency-mismatch" === i && 1 === r) {
                                a = !0;
                                continue
                            }
                            if (a = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!i) return this.formatAndAdd(e, o), !1
                        } catch (c) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method."), c
                        }
                    }
                    return a ? void 0 : (this.objectLength(s) && this.successList.push(e), !0)
                },
                customDataMessage: function(e, i) {
                    return t(e).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || t(e).data("msg")
                },
                customMessage: function(t, e) {
                    var i = this.settings.messages[t];
                    return i && (i.constructor === String ? i : i[e])
                },
                findDefined: function() {
                    for (var t = 0; t < arguments.length; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(e, i) {
                    var n = this.findDefined(this.customMessage(e.name, i.method), this.customDataMessage(e, i.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                        o = /\$?\{(\d+)\}/g;
                    return "function" == typeof n ? n = n.call(this, i.parameters, e) : o.test(n) && (n = t.validator.format(n.replace(o, "{$1}"), i.parameters)), n
                },
                formatAndAdd: function(t, e) {
                    var i = this.defaultMessage(t, e);
                    this.errorList.push({
                        message: i,
                        element: t,
                        method: e.method
                    }), this.errorMap[t.name] = i, this.submitted[t.name] = i
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e, i;
                    for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return t(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(e, i) {
                    var n, o, s, r, a = this.errorsFor(e),
                        l = this.idOrName(e),
                        c = t(e).attr("aria-describedby");
                    a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(i)) : (a = t("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = a, this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement(n, t(e)) : n.insertAfter(e), a.is("label") ? a.attr("for", l) : 0 === a.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = a.attr("id"), c ? c.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (c += " " + s) : c = s,
                        t(e).attr("aria-describedby", c), o = this.groups[e.name], o && (r = this, t.each(r.groups, function(e, i) {
                            i === o && t("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", a.attr("id"))
                        })))), !i && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
                },
                errorsFor: function(e) {
                    var i = this.escapeCssMeta(this.idOrName(e)),
                        n = t(e).attr("aria-describedby"),
                        o = "label[for='" + i + "'], label[for='" + i + "'] *";
                    return n && (o = o + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(o)
                },
                escapeCssMeta: function(t) {
                    return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(e) {
                    return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                },
                getLength: function(e, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return t("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return e.length
                },
                depend: function(t, e) {
                    return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
                },
                dependTypes: {
                    "boolean": function(t) {
                        return t
                    },
                    string: function(e, i) {
                        return !!t(e, i.form).length
                    },
                    "function": function(t, e) {
                        return t(e)
                    }
                },
                optional: function(e) {
                    var i = this.elementValue(e);
                    return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
                },
                stopRequest: function(e, i) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(e, i) {
                    return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, {
                            method: i
                        })
                    })
                },
                destroy: function() {
                    this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(e, i) {
                e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
            },
            classRules: function(e) {
                var i = {},
                    n = t(e).attr("class");
                return n && t.each(n.split(" "), function() {
                    this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(t, e, i, n) {
                /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
            },
            attributeRules: function(e) {
                var i, n, o = {},
                    s = t(e),
                    r = e.getAttribute("type");
                for (i in t.validator.methods) "required" === i ? (n = e.getAttribute(i), "" === n && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(o, r, i, n);
                return o.maxlength && /-1|2147483647|524288/.test(o.maxlength) && delete o.maxlength, o
            },
            dataRules: function(e) {
                var i, n, o = {},
                    s = t(e),
                    r = e.getAttribute("type");
                for (i in t.validator.methods) n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(o, r, i, n);
                return o
            },
            staticRules: function(e) {
                var i = {},
                    n = t.data(e.form, "validator");
                return n.settings.rules && (i = t.validator.normalizeRule(n.settings.rules[e.name]) || {}), i
            },
            normalizeRules: function(e, i) {
                return t.each(e, function(n, o) {
                    if (o === !1) return void delete e[n];
                    if (o.param || o.depends) {
                        var s = !0;
                        switch (typeof o.depends) {
                            case "string":
                                s = !!t(o.depends, i.form).length;
                                break;
                            case "function":
                                s = o.depends.call(i, i)
                        }
                        s ? e[n] = void 0 !== o.param ? o.param : !0 : (t.data(i.form, "validator").resetElements(t(i)), delete e[n])
                    }
                }), t.each(e, function(n, o) {
                    e[n] = t.isFunction(o) && "normalizer" !== n ? o(i) : o
                }), t.each(["minlength", "maxlength"], function() {
                    e[this] && (e[this] = Number(e[this]))
                }), t.each(["rangelength", "range"], function() {
                    var i;
                    e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(i[0]), Number(i[1])]))
                }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
            },
            normalizeRule: function(e) {
                if ("string" == typeof e) {
                    var i = {};
                    t.each(e.split(/\s/), function() {
                        i[this] = !0
                    }), e = i
                }
                return e
            },
            addMethod: function(e, i, n) {
                t.validator.methods[e] = i, t.validator.messages[e] = void 0 !== n ? n : t.validator.messages[e], i.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
            },
            methods: {
                required: function(e, i, n) {
                    if (!this.depend(n, i)) return "dependency-mismatch";
                    if ("select" === i.nodeName.toLowerCase()) {
                        var o = t(i).val();
                        return o && o.length > 0
                    }
                    return this.checkable(i) ? this.getLength(e, i) > 0 : e.length > 0
                },
                email: function(t, e) {
                    return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                minlength: function(e, i, n) {
                    var o = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || o >= n
                },
                maxlength: function(e, i, n) {
                    var o = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || n >= o
                },
                rangelength: function(e, i, n) {
                    var o = t.isArray(e) ? e.length : this.getLength(e, i);
                    return this.optional(i) || o >= n[0] && o <= n[1]
                },
                min: function(t, e, i) {
                    return this.optional(e) || t >= i
                },
                max: function(t, e, i) {
                    return this.optional(e) || i >= t
                },
                range: function(t, e, i) {
                    return this.optional(e) || t >= i[0] && t <= i[1]
                },
                step: function(e, i, n) {
                    var o = t(i).attr("type"),
                        s = "Step attribute on input type " + o + " is not supported.",
                        r = ["text", "number", "range"],
                        a = new RegExp("\\b" + o + "\\b"),
                        l = o && !a.test(r.join());
                    if (l) throw new Error(s);
                    return this.optional(i) || e % n === 0
                },
                equalTo: function(e, i, n) {
                    var o = t(n);
                    return this.settings.onfocusout && o.not(".validate-equalTo-blur").length && o.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        t(i).valid()
                    }), e === o.val()
                },
                remote: function(e, i, n, o) {
                    if (this.optional(i)) return "dependency-mismatch";
                    o = "string" == typeof o && o || "remote";
                    var s, r, a, l = this.previousValue(i, o);
                    return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][o], this.settings.messages[i.name][o] = l.message, n = "string" == typeof n && {
                        url: n
                    } || n, a = t.param(t.extend({
                        data: e
                    }, n.data)), l.old === a ? l.valid : (l.old = a, s = this, this.startRequest(i), r = {}, r[i.name] = e, t.ajax(t.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: r,
                        context: s.currentForm,
                        success: function(t) {
                            var n, r, a, c = t === !0 || "true" === t;
                            s.settings.messages[i.name][o] = l.originalMessage, c ? (a = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = a, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, r = t || s.defaultMessage(i, {
                                method: o,
                                parameters: e
                            }), n[i.name] = l.message = r, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = c, s.stopRequest(i, c)
                        }
                    }, n)), "pending")
                }
            }
        });
        var e, i = {};
        t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, n) {
            var o = t.port;
            "abort" === t.mode && (i[o] && i[o].abort(), i[o] = n)
        }) : (e = t.ajax, t.ajax = function(n) {
            var o = ("mode" in n ? n : t.ajaxSettings).mode,
                s = ("port" in n ? n : t.ajaxSettings).port;
            return "abort" === o ? (i[s] && i[s].abort(), i[s] = e.apply(this, arguments), i[s]) : e.apply(this, arguments)
        })
    }), ! function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function(t) {
        var e = function() {
                if (t && t.fn && t.fn.select2 && t.fn.select2.amd) var e = t.fn.select2.amd;
                var e;
                return function() {
                        if (!e || !e.requirejs) {
                            e ? i = e : e = {};
                            var t, i, n;
                            ! function(e) {
                                function o(t, e) {
                                    return w.call(t, e)
                                }

                                function s(t, e) {
                                    var i, n, o, s, r, a, l, c, h, u, d, p = e && e.split("/"),
                                        f = y.map,
                                        m = f && f["*"] || {};
                                    if (t && "." === t.charAt(0))
                                        if (e) {
                                            for (t = t.split("/"), r = t.length - 1, y.nodeIdCompat && C.test(t[r]) && (t[r] = t[r].replace(C, "")), t = p.slice(0, p.length - 1).concat(t), h = 0; h < t.length; h += 1)
                                                if (d = t[h], "." === d) t.splice(h, 1), h -= 1;
                                                else if (".." === d) {
                                                if (1 === h && (".." === t[2] || ".." === t[0])) break;
                                                h > 0 && (t.splice(h - 1, 2), h -= 2)
                                            }
                                            t = t.join("/")
                                        } else 0 === t.indexOf("./") && (t = t.substring(2));
                                    if ((p || m) && f) {
                                        for (i = t.split("/"), h = i.length; h > 0; h -= 1) {
                                            if (n = i.slice(0, h).join("/"), p)
                                                for (u = p.length; u > 0; u -= 1)
                                                    if (o = f[p.slice(0, u).join("/")], o && (o = o[n])) {
                                                        s = o, a = h;
                                                        break
                                                    }
                                            if (s) break;
                                            !l && m && m[n] && (l = m[n], c = h)
                                        }!s && l && (s = l, a = c), s && (i.splice(0, a, s), t = i.join("/"))
                                    }
                                    return t
                                }

                                function r(t, i) {
                                    return function() {
                                        var n = x.call(arguments, 0);
                                        return "string" != typeof n[0] && 1 === n.length && n.push(null), p.apply(e, n.concat([t, i]))
                                    }
                                }

                                function a(t) {
                                    return function(e) {
                                        return s(e, t)
                                    }
                                }

                                function l(t) {
                                    return function(e) {
                                        g[t] = e
                                    }
                                }

                                function c(t) {
                                    if (o(v, t)) {
                                        var i = v[t];
                                        delete v[t], b[t] = !0, d.apply(e, i)
                                    }
                                    if (!o(g, t) && !o(b, t)) throw new Error("No " + t);
                                    return g[t]
                                }

                                function h(t) {
                                    var e, i = t ? t.indexOf("!") : -1;
                                    return i > -1 && (e = t.substring(0, i), t = t.substring(i + 1, t.length)), [e, t]
                                }

                                function u(t) {
                                    return function() {
                                        return y && y.config && y.config[t] || {}
                                    }
                                }
                                var d, p, f, m, g = {},
                                    v = {},
                                    y = {},
                                    b = {},
                                    w = Object.prototype.hasOwnProperty,
                                    x = [].slice,
                                    C = /\.js$/;
                                f = function(t, e) {
                                    var i, n = h(t),
                                        o = n[0];
                                    return t = n[1], o && (o = s(o, e), i = c(o)), o ? t = i && i.normalize ? i.normalize(t, a(e)) : s(t, e) : (t = s(t, e), n = h(t), o = n[0], t = n[1], o && (i = c(o))), {
                                        f: o ? o + "!" + t : t,
                                        n: t,
                                        pr: o,
                                        p: i
                                    }
                                }, m = {
                                    require: function(t) {
                                        return r(t)
                                    },
                                    exports: function(t) {
                                        var e = g[t];
                                        return "undefined" != typeof e ? e : g[t] = {}
                                    },
                                    module: function(t) {
                                        return {
                                            id: t,
                                            uri: "",
                                            exports: g[t],
                                            config: u(t)
                                        }
                                    }
                                }, d = function(t, i, n, s) {
                                    var a, h, u, d, p, y, w = [],
                                        x = typeof n;
                                    if (s = s || t, "undefined" === x || "function" === x) {
                                        for (i = !i.length && n.length ? ["require", "exports", "module"] : i, p = 0; p < i.length; p += 1)
                                            if (d = f(i[p], s), h = d.f, "require" === h) w[p] = m.require(t);
                                            else if ("exports" === h) w[p] = m.exports(t), y = !0;
                                        else if ("module" === h) a = w[p] = m.module(t);
                                        else if (o(g, h) || o(v, h) || o(b, h)) w[p] = c(h);
                                        else {
                                            if (!d.p) throw new Error(t + " missing " + h);
                                            d.p.load(d.n, r(s, !0), l(h), {}), w[p] = g[h]
                                        }
                                        u = n ? n.apply(g[t], w) : void 0, t && (a && a.exports !== e && a.exports !== g[t] ? g[t] = a.exports : u === e && y || (g[t] = u))
                                    } else t && (g[t] = n)
                                }, t = i = p = function(t, i, n, o, s) {
                                    if ("string" == typeof t) return m[t] ? m[t](i) : c(f(t, i).f);
                                    if (!t.splice) {
                                        if (y = t, y.deps && p(y.deps, y.callback), !i) return;
                                        i.splice ? (t = i, i = n, n = null) : t = e
                                    }
                                    return i = i || function() {}, "function" == typeof n && (n = o, o = s), o ? d(e, t, i, n) : setTimeout(function() {
                                        d(e, t, i, n)
                                    }, 4), p
                                }, p.config = function(t) {
                                    return p(t)
                                }, t._defined = g, n = function(t, e, i) {
                                    if ("string" != typeof t) throw new Error("See almond README: incorrect module build, no module name");
                                    e.splice || (i = e, e = []), o(g, t) || o(v, t) || (v[t] = [t, e, i])
                                }, n.amd = {
                                    jQuery: !0
                                }
                            }(), e.requirejs = t, e.require = i, e.define = n
                        }
                    }(), e.define("almond", function() {}), e.define("jquery", [], function() {
                        var e = t || $;
                        return null == e && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), e
                    }), e.define("select2/utils", ["jquery"], function(t) {
                        function e(t) {
                            var e = t.prototype,
                                i = [];
                            for (var n in e) {
                                var o = e[n];
                                "function" == typeof o && "constructor" !== n && i.push(n)
                            }
                            return i
                        }
                        var i = {};
                        i.Extend = function(t, e) {
                            function i() {
                                this.constructor = t
                            }
                            var n = {}.hasOwnProperty;
                            for (var o in e) n.call(e, o) && (t[o] = e[o]);
                            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
                        }, i.Decorate = function(t, i) {
                            function n() {
                                var e = Array.prototype.unshift,
                                    n = i.prototype.constructor.length,
                                    o = t.prototype.constructor;
                                n > 0 && (e.call(arguments, t.prototype.constructor), o = i.prototype.constructor), o.apply(this, arguments)
                            }

                            function o() {
                                this.constructor = n
                            }
                            var s = e(i),
                                r = e(t);
                            i.displayName = t.displayName, n.prototype = new o;
                            for (var a = 0; a < r.length; a++) {
                                var l = r[a];
                                n.prototype[l] = t.prototype[l]
                            }
                            for (var c = (function(t) {
                                    var e = function() {};
                                    t in n.prototype && (e = n.prototype[t]);
                                    var o = i.prototype[t];
                                    return function() {
                                        var t = Array.prototype.unshift;
                                        return t.call(arguments, e), o.apply(this, arguments)
                                    }
                                }), h = 0; h < s.length; h++) {
                                var u = s[h];
                                n.prototype[u] = c(u)
                            }
                            return n
                        };
                        var n = function() {
                            this.listeners = {}
                        };
                        return n.prototype.on = function(t, e) {
                            this.listeners = this.listeners || {}, t in this.listeners ? this.listeners[t].push(e) : this.listeners[t] = [e]
                        }, n.prototype.trigger = function(t) {
                            var e = Array.prototype.slice,
                                i = e.call(arguments, 1);
                            this.listeners = this.listeners || {}, null == i && (i = []), 0 === i.length && i.push({}), i[0]._type = t, t in this.listeners && this.invoke(this.listeners[t], e.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                        }, n.prototype.invoke = function(t, e) {
                            for (var i = 0, n = t.length; n > i; i++) t[i].apply(this, e)
                        }, i.Observable = n, i.generateChars = function(t) {
                            for (var e = "", i = 0; t > i; i++) {
                                var n = Math.floor(36 * Math.random());
                                e += n.toString(36)
                            }
                            return e
                        }, i.bind = function(t, e) {
                            return function() {
                                t.apply(e, arguments)
                            }
                        }, i._convertData = function(t) {
                            for (var e in t) {
                                var i = e.split("-"),
                                    n = t;
                                if (1 !== i.length) {
                                    for (var o = 0; o < i.length; o++) {
                                        var s = i[o];
                                        s = s.substring(0, 1).toLowerCase() + s.substring(1), s in n || (n[s] = {}), o == i.length - 1 && (n[s] = t[e]), n = n[s]
                                    }
                                    delete t[e]
                                }
                            }
                            return t
                        }, i.hasScroll = function(e, i) {
                            var n = t(i),
                                o = i.style.overflowX,
                                s = i.style.overflowY;
                            return o !== s || "hidden" !== s && "visible" !== s ? "scroll" === o || "scroll" === s ? !0 : n.innerHeight() < i.scrollHeight || n.innerWidth() < i.scrollWidth : !1
                        }, i.escapeMarkup = function(t) {
                            var e = {
                                "\\": "&#92;",
                                "&": "&amp;",
                                "<": "&lt;",
                                ">": "&gt;",
                                '"': "&quot;",
                                "'": "&#39;",
                                "/": "&#47;"
                            };
                            return "string" != typeof t ? t : String(t).replace(/[&<>"'\/\\]/g, function(t) {
                                return e[t]
                            })
                        }, i.appendMany = function(e, i) {
                            if ("1.7" === t.fn.jquery.substr(0, 3)) {
                                var n = t();
                                t.map(i, function(t) {
                                    n = n.add(t)
                                }), i = n
                            }
                            e.append(i)
                        }, i
                    }), e.define("select2/results", ["jquery", "./utils"], function(t, e) {
                        function i(t, e, n) {
                            this.$element = t, this.data = n, this.options = e, i.__super__.constructor.call(this)
                        }
                        return e.Extend(i, e.Observable), i.prototype.render = function() {
                            var e = t('<ul class="select2-results__options" role="tree"></ul>');
                            return this.options.get("multiple") && e.attr("aria-multiselectable", "true"), this.$results = e, e
                        }, i.prototype.clear = function() {
                            this.$results.empty()
                        }, i.prototype.displayMessage = function(e) {
                            var i = this.options.get("escapeMarkup");
                            this.clear(), this.hideLoading();
                            var n = t('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                                o = this.options.get("translations").get(e.message);
                            n.append(i(o(e.args))), n[0].className += " select2-results__message", this.$results.append(n)
                        }, i.prototype.hideMessages = function() {
                            this.$results.find(".select2-results__message").remove()
                        }, i.prototype.append = function(t) {
                            this.hideLoading();
                            var e = [];
                            if (null == t.results || 0 === t.results.length) return void(0 === this.$results.children().length && this.trigger("results:message", {
                                message: "noResults"
                            }));
                            t.results = this.sort(t.results);
                            for (var i = 0; i < t.results.length; i++) {
                                var n = t.results[i],
                                    o = this.option(n);
                                e.push(o)
                            }
                            this.$results.append(e)
                        }, i.prototype.position = function(t, e) {
                            var i = e.find(".select2-results");
                            i.append(t)
                        }, i.prototype.sort = function(t) {
                            var e = this.options.get("sorter");
                            return e(t)
                        }, i.prototype.highlightFirstItem = function() {
                            var t = this.$results.find(".select2-results__option[aria-selected]"),
                                e = t.filter("[aria-selected=true]");
                            e.length > 0 ? e.first().trigger("mouseenter") : t.first().trigger("mouseenter"), this.ensureHighlightVisible()
                        }, i.prototype.setClasses = function() {
                            var e = this;
                            this.data.current(function(i) {
                                var n = t.map(i, function(t) {
                                        return t.id.toString()
                                    }),
                                    o = e.$results.find(".select2-results__option[aria-selected]");
                                o.each(function() {
                                    var e = t(this),
                                        i = t.data(this, "data"),
                                        o = "" + i.id;
                                    null != i.element && i.element.selected || null == i.element && t.inArray(o, n) > -1 ? e.attr("aria-selected", "true") : e.attr("aria-selected", "false")
                                })
                            })
                        }, i.prototype.showLoading = function(t) {
                            this.hideLoading();
                            var e = this.options.get("translations").get("searching"),
                                i = {
                                    disabled: !0,
                                    loading: !0,
                                    text: e(t)
                                },
                                n = this.option(i);
                            n.className += " loading-results", this.$results.prepend(n)
                        }, i.prototype.hideLoading = function() {
                            this.$results.find(".loading-results").remove()
                        }, i.prototype.option = function(e) {
                            var i = document.createElement("li");
                            i.className = "select2-results__option";
                            var n = {
                                role: "treeitem",
                                "aria-selected": "false"
                            };
                            e.disabled && (delete n["aria-selected"], n["aria-disabled"] = "true"), null == e.id && delete n["aria-selected"], null != e._resultId && (i.id = e._resultId), e.title && (i.title = e.title), e.children && (n.role = "group", n["aria-label"] = e.text, delete n["aria-selected"]);
                            for (var o in n) {
                                var s = n[o];
                                i.setAttribute(o, s)
                            }
                            if (e.children) {
                                var r = t(i),
                                    a = document.createElement("strong");
                                a.className = "select2-results__group", t(a), this.template(e, a);
                                for (var l = [], c = 0; c < e.children.length; c++) {
                                    var h = e.children[c],
                                        u = this.option(h);
                                    l.push(u)
                                }
                                var d = t("<ul></ul>", {
                                    "class": "select2-results__options select2-results__options--nested"
                                });
                                d.append(l), r.append(a), r.append(d)
                            } else this.template(e, i);
                            return t.data(i, "data", e), i
                        }, i.prototype.bind = function(e) {
                            var i = this,
                                n = e.id + "-results";
                            this.$results.attr("id", n), e.on("results:all", function(t) {
                                i.clear(), i.append(t.data), e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("results:append", function(t) {
                                i.append(t.data), e.isOpen() && i.setClasses()
                            }), e.on("query", function(t) {
                                i.hideMessages(), i.showLoading(t)
                            }), e.on("select", function() {
                                e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("unselect", function() {
                                e.isOpen() && (i.setClasses(), i.highlightFirstItem())
                            }), e.on("open", function() {
                                i.$results.attr("aria-expanded", "true"), i.$results.attr("aria-hidden", "false"), i.setClasses(), i.ensureHighlightVisible()
                            }), e.on("close", function() {
                                i.$results.attr("aria-expanded", "false"), i.$results.attr("aria-hidden", "true"), i.$results.removeAttr("aria-activedescendant")
                            }), e.on("results:toggle", function() {
                                var t = i.getHighlightedResults();
                                0 !== t.length && t.trigger("mouseup")
                            }), e.on("results:select", function() {
                                var t = i.getHighlightedResults();
                                if (0 !== t.length) {
                                    var e = t.data("data");
                                    "true" == t.attr("aria-selected") ? i.trigger("close", {}) : i.trigger("select", {
                                        data: e
                                    })
                                }
                            }), e.on("results:previous", function() {
                                var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t);
                                if (0 !== n) {
                                    var o = n - 1;
                                    0 === t.length && (o = 0);
                                    var s = e.eq(o);
                                    s.trigger("mouseenter");
                                    var r = i.$results.offset().top,
                                        a = s.offset().top,
                                        l = i.$results.scrollTop() + (a - r);
                                    0 === o ? i.$results.scrollTop(0) : 0 > a - r && i.$results.scrollTop(l)
                                }
                            }), e.on("results:next", function() {
                                var t = i.getHighlightedResults(),
                                    e = i.$results.find("[aria-selected]"),
                                    n = e.index(t),
                                    o = n + 1;
                                if (!(o >= e.length)) {
                                    var s = e.eq(o);
                                    s.trigger("mouseenter");
                                    var r = i.$results.offset().top + i.$results.outerHeight(!1),
                                        a = s.offset().top + s.outerHeight(!1),
                                        l = i.$results.scrollTop() + a - r;
                                    0 === o ? i.$results.scrollTop(0) : a > r && i.$results.scrollTop(l)
                                }
                            }), e.on("results:focus", function(t) {
                                t.element.addClass("select2-results__option--highlighted")
                            }), e.on("results:message", function(t) {
                                i.displayMessage(t)
                            }), t.fn.mousewheel && this.$results.on("mousewheel", function(t) {
                                var e = i.$results.scrollTop(),
                                    n = i.$results.get(0).scrollHeight - e + t.deltaY,
                                    o = t.deltaY > 0 && e - t.deltaY <= 0,
                                    s = t.deltaY < 0 && n <= i.$results.height();
                                o ? (i.$results.scrollTop(0), t.preventDefault(), t.stopPropagation()) : s && (i.$results.scrollTop(i.$results.get(0).scrollHeight - i.$results.height()), t.preventDefault(), t.stopPropagation())
                            }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(e) {
                                var n = t(this),
                                    o = n.data("data");
                                return "true" === n.attr("aria-selected") ? void(i.options.get("multiple") ? i.trigger("unselect", {
                                    originalEvent: e,
                                    data: o
                                }) : i.trigger("close", {})) : void i.trigger("select", {
                                    originalEvent: e,
                                    data: o
                                })
                            }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                                var e = t(this).data("data");
                                i.getHighlightedResults().removeClass("select2-results__option--highlighted"), i.trigger("results:focus", {
                                    data: e,
                                    element: t(this)
                                })
                            })
                        }, i.prototype.getHighlightedResults = function() {
                            var t = this.$results.find(".select2-results__option--highlighted");
                            return t
                        }, i.prototype.destroy = function() {
                            this.$results.remove()
                        }, i.prototype.ensureHighlightVisible = function() {
                            var t = this.getHighlightedResults();
                            if (0 !== t.length) {
                                var e = this.$results.find("[aria-selected]"),
                                    i = e.index(t),
                                    n = this.$results.offset().top,
                                    o = t.offset().top,
                                    s = this.$results.scrollTop() + (o - n),
                                    r = o - n;
                                s -= 2 * t.outerHeight(!1), 2 >= i ? this.$results.scrollTop(0) : (r > this.$results.outerHeight() || 0 > r) && this.$results.scrollTop(s)
                            }
                        }, i.prototype.template = function(e, i) {
                            var n = this.options.get("templateResult"),
                                o = this.options.get("escapeMarkup"),
                                s = n(e, i);
                            null == s ? i.style.display = "none" : "string" == typeof s ? i.innerHTML = o(s) : t(i).append(s)
                        }, i
                    }), e.define("select2/keys", [], function() {
                        var t = {
                            BACKSPACE: 8,
                            TAB: 9,
                            ENTER: 13,
                            SHIFT: 16,
                            CTRL: 17,
                            ALT: 18,
                            ESC: 27,
                            SPACE: 32,
                            PAGE_UP: 33,
                            PAGE_DOWN: 34,
                            END: 35,
                            HOME: 36,
                            LEFT: 37,
                            UP: 38,
                            RIGHT: 39,
                            DOWN: 40,
                            DELETE: 46
                        };
                        return t
                    }), e.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(t, e, i) {
                        function n(t, e) {
                            this.$element = t, this.options = e, n.__super__.constructor.call(this)
                        }
                        return e.Extend(n, e.Observable), n.prototype.render = function() {
                            var e = t('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                            return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), e.attr("title", this.$element.attr("title")), e.attr("tabindex", this._tabindex), this.$selection = e, e
                        }, n.prototype.bind = function(t) {
                            var e = this,
                                n = (t.id + "-container", t.id + "-results");
                            this.container = t, this.$selection.on("focus", function(t) {
                                e.trigger("focus", t)
                            }), this.$selection.on("blur", function(t) {
                                e._handleBlur(t)
                            }), this.$selection.on("keydown", function(t) {
                                e.trigger("keypress", t), t.which === i.SPACE && t.preventDefault()
                            }), t.on("results:focus", function(t) {
                                e.$selection.attr("aria-activedescendant", t.data._resultId)
                            }), t.on("selection:update", function(t) {
                                e.update(t.data)
                            }), t.on("open", function() {
                                e.$selection.attr("aria-expanded", "true"), e.$selection.attr("aria-owns", n), e._attachCloseHandler(t)
                            }), t.on("close", function() {
                                e.$selection.attr("aria-expanded", "false"), e.$selection.removeAttr("aria-activedescendant"), e.$selection.removeAttr("aria-owns"), e.$selection.focus(), e._detachCloseHandler(t)
                            }), t.on("enable", function() {
                                e.$selection.attr("tabindex", e._tabindex)
                            }), t.on("disable", function() {
                                e.$selection.attr("tabindex", "-1")
                            })
                        }, n.prototype._handleBlur = function(e) {
                            var i = this;
                            window.setTimeout(function() {
                                document.activeElement == i.$selection[0] || t.contains(i.$selection[0], document.activeElement) || i.trigger("blur", e)
                            }, 1)
                        }, n.prototype._attachCloseHandler = function(e) {
                            t(document.body).on("mousedown.select2." + e.id, function(e) {
                                var i = t(e.target),
                                    n = i.closest(".select2"),
                                    o = t(".select2.select2-container--open");
                                o.each(function() {
                                    var e = t(this);
                                    if (this != n[0]) {
                                        var i = e.data("element");
                                        i.select2("close")
                                    }
                                })
                            })
                        }, n.prototype._detachCloseHandler = function(e) {
                            t(document.body).off("mousedown.select2." + e.id)
                        }, n.prototype.position = function(t, e) {
                            var i = e.find(".selection");
                            i.append(t)
                        }, n.prototype.destroy = function() {
                            this._detachCloseHandler(this.container)
                        }, n.prototype.update = function() {
                            throw new Error("The `update` method must be defined in child classes.")
                        }, n
                    }), e.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(t, e, i) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments)
                        }
                        return i.Extend(n, e), n.prototype.render = function() {
                            var t = n.__super__.render.call(this);
                            return t.addClass("select2-selection--single"), t.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), t
                        }, n.prototype.bind = function(t) {
                            var e = this;
                            n.__super__.bind.apply(this, arguments);
                            var i = t.id + "-container";
                            this.$selection.find(".select2-selection__rendered").attr("id", i), this.$selection.attr("aria-labelledby", i), this.$selection.on("mousedown", function(t) {
                                1 === t.which && e.trigger("toggle", {
                                    originalEvent: t
                                })
                            }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), t.on("focus", function() {
                                t.isOpen() || e.$selection.focus()
                            }), t.on("selection:update", function(t) {
                                e.update(t.data)
                            })
                        }, n.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, n.prototype.display = function(t, e) {
                            var i = this.options.get("templateSelection"),
                                n = this.options.get("escapeMarkup");
                            return n(i(t, e))
                        }, n.prototype.selectionContainer = function() {
                            return t("<span></span>")
                        }, n.prototype.update = function(t) {
                            if (0 === t.length) return void this.clear();
                            var e = t[0],
                                i = this.$selection.find(".select2-selection__rendered"),
                                n = this.display(e, i);
                            i.empty().append(n), i.prop("title", e.title || e.text)
                        }, n
                    }), e.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(t, e, i) {
                        function n() {
                            n.__super__.constructor.apply(this, arguments)
                        }
                        return i.Extend(n, e), n.prototype.render = function() {
                            var t = n.__super__.render.call(this);
                            return t.addClass("select2-selection--multiple"), t.html('<ul class="select2-selection__rendered"></ul>'), t
                        }, n.prototype.bind = function() {
                            var e = this;
                            n.__super__.bind.apply(this, arguments), this.$selection.on("click", function(t) {
                                e.trigger("toggle", {
                                    originalEvent: t
                                })
                            }), this.$selection.on("click", ".select2-selection__choice__remove", function(i) {
                                if (!e.options.get("disabled")) {
                                    var n = t(this),
                                        o = n.parent(),
                                        s = o.data("data");
                                    e.trigger("unselect", {
                                        originalEvent: i,
                                        data: s
                                    })
                                }
                            })
                        }, n.prototype.clear = function() {
                            this.$selection.find(".select2-selection__rendered").empty()
                        }, n.prototype.display = function(t, e) {
                            var i = this.options.get("templateSelection"),
                                n = this.options.get("escapeMarkup");
                            return n(i(t, e))
                        }, n.prototype.selectionContainer = function() {
                            var e = t('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');
                            return e
                        }, n.prototype.update = function(t) {
                            if (this.clear(), 0 !== t.length) {
                                for (var e = [], n = 0; n < t.length; n++) {
                                    var o = t[n],
                                        s = this.selectionContainer(),
                                        r = this.display(o, s);
                                    s.append(r), s.prop("title", o.title || o.text), s.data("data", o), e.push(s)
                                }
                                var a = this.$selection.find(".select2-selection__rendered");
                                i.appendMany(a, e)
                            }
                        }, n
                    }), e.define("select2/selection/placeholder", ["../utils"], function() {
                        function t(t, e, i) {
                            this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i)
                        }
                        return t.prototype.normalizePlaceholder = function(t, e) {
                            return "string" == typeof e && (e = {
                                id: "",
                                text: e
                            }), e
                        }, t.prototype.createPlaceholder = function(t, e) {
                            var i = this.selectionContainer();
                            return i.html(this.display(e)), i.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), i
                        }, t.prototype.update = function(t, e) {
                            var i = 1 == e.length && e[0].id != this.placeholder.id,
                                n = e.length > 1;
                            if (n || i) return t.call(this, e);
                            this.clear();
                            var o = this.createPlaceholder(this.placeholder);
                            this.$selection.find(".select2-selection__rendered").append(o)
                        }, t
                    }), e.define("select2/selection/allowClear", ["jquery", "../keys"], function(t, e) {
                        function i() {}
                        return i.prototype.bind = function(t, e, i) {
                            var n = this;
                            t.call(this, e, i), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(t) {
                                n._handleClear(t)
                            }), e.on("keypress", function(t) {
                                n._handleKeyboardClear(t, e)
                            })
                        }, i.prototype._handleClear = function(t, e) {
                            if (!this.options.get("disabled")) {
                                var i = this.$selection.find(".select2-selection__clear");
                                if (0 !== i.length) {
                                    e.stopPropagation();
                                    for (var n = i.data("data"), o = 0; o < n.length; o++) {
                                        var s = {
                                            data: n[o]
                                        };
                                        if (this.trigger("unselect", s), s.prevented) return
                                    }
                                    this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                                }
                            }
                        }, i.prototype._handleKeyboardClear = function(t, i, n) {
                            n.isOpen() || (i.which == e.DELETE || i.which == e.BACKSPACE) && this._handleClear(i)
                        }, i.prototype.update = function(e, i) {
                            if (e.call(this, i), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === i.length)) {
                                var n = t('<span class="select2-selection__clear">&times;</span>');
                                n.data("data", i), this.$selection.find(".select2-selection__rendered").prepend(n)
                            }
                        }, i
                    }), e.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(t, e, i) {
                        function n(t, e, i) {
                            t.call(this, e, i)
                        }
                        return n.prototype.render = function(e) {
                            var i = t('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                            this.$searchContainer = i, this.$search = i.find("input");
                            var n = e.call(this);
                            return this._transferTabIndex(), n
                        }, n.prototype.bind = function(t, e, n) {
                            var o = this;
                            t.call(this, e, n), e.on("open", function() {
                                o.$search.trigger("focus")
                            }), e.on("close", function() {
                                o.$search.val(""), o.$search.removeAttr("aria-activedescendant"), o.$search.trigger("focus")
                            }), e.on("enable", function() {
                                o.$search.prop("disabled", !1), o._transferTabIndex()
                            }), e.on("disable", function() {
                                o.$search.prop("disabled", !0)
                            }), e.on("focus", function() {
                                o.$search.trigger("focus")
                            }), e.on("results:focus", function(t) {
                                o.$search.attr("aria-activedescendant", t.id)
                            }), this.$selection.on("focusin", ".select2-search--inline", function(t) {
                                o.trigger("focus", t)
                            }), this.$selection.on("focusout", ".select2-search--inline", function(t) {
                                o._handleBlur(t)
                            }), this.$selection.on("keydown", ".select2-search--inline", function(t) {
                                t.stopPropagation(), o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented();
                                var e = t.which;
                                if (e === i.BACKSPACE && "" === o.$search.val()) {
                                    var n = o.$searchContainer.prev(".select2-selection__choice");
                                    if (n.length > 0) {
                                        var s = n.data("data");
                                        o.searchRemoveChoice(s), t.preventDefault()
                                    }
                                }
                            });
                            var s = document.documentMode,
                                r = s && 11 >= s;
                            this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                                return r ? void o.$selection.off("input.search input.searchcheck") : void o.$selection.off("keyup.search")
                            }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(t) {
                                if (r && "input" === t.type) return void o.$selection.off("input.search input.searchcheck");
                                var e = t.which;
                                e != i.SHIFT && e != i.CTRL && e != i.ALT && e != i.TAB && o.handleSearch(t)
                            })
                        }, n.prototype._transferTabIndex = function() {
                            this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                        }, n.prototype.createPlaceholder = function(t, e) {
                            this.$search.attr("placeholder", e.text)
                        }, n.prototype.update = function(t, e) {
                            var i = this.$search[0] == document.activeElement;
                            this.$search.attr("placeholder", ""), t.call(this, e), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), i && this.$search.focus()
                        }, n.prototype.handleSearch = function() {
                            if (this.resizeSearch(), !this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {
                                    term: t
                                })
                            }
                            this._keyUpPrevented = !1
                        }, n.prototype.searchRemoveChoice = function(t, e) {
                            this.trigger("unselect", {
                                data: e
                            }), this.$search.val(e.text), this.handleSearch()
                        }, n.prototype.resizeSearch = function() {
                            this.$search.css("width", "25px");
                            var t = "";
                            if ("" !== this.$search.attr("placeholder")) t = this.$selection.find(".select2-selection__rendered").innerWidth();
                            else {
                                var e = this.$search.val().length + 1;
                                t = .75 * e + "em"
                            }
                            this.$search.css("width", t)
                        }, n
                    }), e.define("select2/selection/eventRelay", ["jquery"], function(t) {
                        function e() {}
                        return e.prototype.bind = function(e, i, n) {
                            var o = this,
                                s = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                                r = ["opening", "closing", "selecting", "unselecting"];
                            e.call(this, i, n), i.on("*", function(e, i) {
                                if (-1 !== t.inArray(e, s)) {
                                    i = i || {};
                                    var n = t.Event("select2:" + e, {
                                        params: i
                                    });
                                    o.$element.trigger(n), -1 !== t.inArray(e, r) && (i.prevented = n.isDefaultPrevented())
                                }
                            })
                        }, e
                    }), e.define("select2/translation", ["jquery", "require"], function(t, e) {
                        function i(t) {
                            this.dict = t || {}
                        }
                        return i.prototype.all = function() {
                            return this.dict
                        }, i.prototype.get = function(t) {
                            return this.dict[t]
                        }, i.prototype.extend = function(e) {
                            this.dict = t.extend({}, e.all(), this.dict)
                        }, i._cache = {}, i.loadPath = function(t) {
                            if (!(t in i._cache)) {
                                var n = e(t);
                                i._cache[t] = n
                            }
                            return new i(i._cache[t])
                        }, i
                    }), e.define("select2/diacritics", [], function() {
                        var t = {
                            "Ⓐ": "A",
                            "Ａ": "A",
                            "À": "A",
                            "Á": "A",
                            "Â": "A",
                            "Ầ": "A",
                            "Ấ": "A",
                            "Ẫ": "A",
                            "Ẩ": "A",
                            "Ã": "A",
                            "Ā": "A",
                            "Ă": "A",
                            "Ằ": "A",
                            "Ắ": "A",
                            "Ẵ": "A",
                            "Ẳ": "A",
                            "Ȧ": "A",
                            "Ǡ": "A",
                            "Ä": "A",
                            "Ǟ": "A",
                            "Ả": "A",
                            "Å": "A",
                            "Ǻ": "A",
                            "Ǎ": "A",
                            "Ȁ": "A",
                            "Ȃ": "A",
                            "Ạ": "A",
                            "Ậ": "A",
                            "Ặ": "A",
                            "Ḁ": "A",
                            "Ą": "A",
                            "Ⱥ": "A",
                            "Ɐ": "A",
                            "Ꜳ": "AA",
                            "Æ": "AE",
                            "Ǽ": "AE",
                            "Ǣ": "AE",
                            "Ꜵ": "AO",
                            "Ꜷ": "AU",
                            "Ꜹ": "AV",
                            "Ꜻ": "AV",
                            "Ꜽ": "AY",
                            "Ⓑ": "B",
                            "Ｂ": "B",
                            "Ḃ": "B",
                            "Ḅ": "B",
                            "Ḇ": "B",
                            "Ƀ": "B",
                            "Ƃ": "B",
                            "Ɓ": "B",
                            "Ⓒ": "C",
                            "Ｃ": "C",
                            "Ć": "C",
                            "Ĉ": "C",
                            "Ċ": "C",
                            "Č": "C",
                            "Ç": "C",
                            "Ḉ": "C",
                            "Ƈ": "C",
                            "Ȼ": "C",
                            "Ꜿ": "C",
                            "Ⓓ": "D",
                            "Ｄ": "D",
                            "Ḋ": "D",
                            "Ď": "D",
                            "Ḍ": "D",
                            "Ḑ": "D",
                            "Ḓ": "D",
                            "Ḏ": "D",
                            "Đ": "D",
                            "Ƌ": "D",
                            "Ɗ": "D",
                            "Ɖ": "D",
                            "Ꝺ": "D",
                            "Ǳ": "DZ",
                            "Ǆ": "DZ",
                            "ǲ": "Dz",
                            "ǅ": "Dz",
                            "Ⓔ": "E",
                            "Ｅ": "E",
                            "È": "E",
                            "É": "E",
                            "Ê": "E",
                            "Ề": "E",
                            "Ế": "E",
                            "Ễ": "E",
                            "Ể": "E",
                            "Ẽ": "E",
                            "Ē": "E",
                            "Ḕ": "E",
                            "Ḗ": "E",
                            "Ĕ": "E",
                            "Ė": "E",
                            "Ë": "E",
                            "Ẻ": "E",
                            "Ě": "E",
                            "Ȅ": "E",
                            "Ȇ": "E",
                            "Ẹ": "E",
                            "Ệ": "E",
                            "Ȩ": "E",
                            "Ḝ": "E",
                            "Ę": "E",
                            "Ḙ": "E",
                            "Ḛ": "E",
                            "Ɛ": "E",
                            "Ǝ": "E",
                            "Ⓕ": "F",
                            "Ｆ": "F",
                            "Ḟ": "F",
                            "Ƒ": "F",
                            "Ꝼ": "F",
                            "Ⓖ": "G",
                            "Ｇ": "G",
                            "Ǵ": "G",
                            "Ĝ": "G",
                            "Ḡ": "G",
                            "Ğ": "G",
                            "Ġ": "G",
                            "Ǧ": "G",
                            "Ģ": "G",
                            "Ǥ": "G",
                            "Ɠ": "G",
                            "Ꞡ": "G",
                            "Ᵹ": "G",
                            "Ꝿ": "G",
                            "Ⓗ": "H",
                            "Ｈ": "H",
                            "Ĥ": "H",
                            "Ḣ": "H",
                            "Ḧ": "H",
                            "Ȟ": "H",
                            "Ḥ": "H",
                            "Ḩ": "H",
                            "Ḫ": "H",
                            "Ħ": "H",
                            "Ⱨ": "H",
                            "Ⱶ": "H",
                            "Ɥ": "H",
                            "Ⓘ": "I",
                            "Ｉ": "I",
                            "Ì": "I",
                            "Í": "I",
                            "Î": "I",
                            "Ĩ": "I",
                            "Ī": "I",
                            "Ĭ": "I",
                            "İ": "I",
                            "Ï": "I",
                            "Ḯ": "I",
                            "Ỉ": "I",
                            "Ǐ": "I",
                            "Ȉ": "I",
                            "Ȋ": "I",
                            "Ị": "I",
                            "Į": "I",
                            "Ḭ": "I",
                            "Ɨ": "I",
                            "Ⓙ": "J",
                            "Ｊ": "J",
                            "Ĵ": "J",
                            "Ɉ": "J",
                            "Ⓚ": "K",
                            "Ｋ": "K",
                            "Ḱ": "K",
                            "Ǩ": "K",
                            "Ḳ": "K",
                            "Ķ": "K",
                            "Ḵ": "K",
                            "Ƙ": "K",
                            "Ⱪ": "K",
                            "Ꝁ": "K",
                            "Ꝃ": "K",
                            "Ꝅ": "K",
                            "Ꞣ": "K",
                            "Ⓛ": "L",
                            "Ｌ": "L",
                            "Ŀ": "L",
                            "Ĺ": "L",
                            "Ľ": "L",
                            "Ḷ": "L",
                            "Ḹ": "L",
                            "Ļ": "L",
                            "Ḽ": "L",
                            "Ḻ": "L",
                            "Ł": "L",
                            "Ƚ": "L",
                            "Ɫ": "L",
                            "Ⱡ": "L",
                            "Ꝉ": "L",
                            "Ꝇ": "L",
                            "Ꞁ": "L",
                            "Ǉ": "LJ",
                            "ǈ": "Lj",
                            "Ⓜ": "M",
                            "Ｍ": "M",
                            "Ḿ": "M",
                            "Ṁ": "M",
                            "Ṃ": "M",
                            "Ɱ": "M",
                            "Ɯ": "M",
                            "Ⓝ": "N",
                            "Ｎ": "N",
                            "Ǹ": "N",
                            "Ń": "N",
                            "Ñ": "N",
                            "Ṅ": "N",
                            "Ň": "N",
                            "Ṇ": "N",
                            "Ņ": "N",
                            "Ṋ": "N",
                            "Ṉ": "N",
                            "Ƞ": "N",
                            "Ɲ": "N",
                            "Ꞑ": "N",
                            "Ꞥ": "N",
                            "Ǌ": "NJ",
                            "ǋ": "Nj",
                            "Ⓞ": "O",
                            "Ｏ": "O",
                            "Ò": "O",
                            "Ó": "O",
                            "Ô": "O",
                            "Ồ": "O",
                            "Ố": "O",
                            "Ỗ": "O",
                            "Ổ": "O",
                            "Õ": "O",
                            "Ṍ": "O",
                            "Ȭ": "O",
                            "Ṏ": "O",
                            "Ō": "O",
                            "Ṑ": "O",
                            "Ṓ": "O",
                            "Ŏ": "O",
                            "Ȯ": "O",
                            "Ȱ": "O",
                            "Ö": "O",
                            "Ȫ": "O",
                            "Ỏ": "O",
                            "Ő": "O",
                            "Ǒ": "O",
                            "Ȍ": "O",
                            "Ȏ": "O",
                            "Ơ": "O",
                            "Ờ": "O",
                            "Ớ": "O",
                            "Ỡ": "O",
                            "Ở": "O",
                            "Ợ": "O",
                            "Ọ": "O",
                            "Ộ": "O",
                            "Ǫ": "O",
                            "Ǭ": "O",
                            "Ø": "O",
                            "Ǿ": "O",
                            "Ɔ": "O",
                            "Ɵ": "O",
                            "Ꝋ": "O",
                            "Ꝍ": "O",
                            "Ƣ": "OI",
                            "Ꝏ": "OO",
                            "Ȣ": "OU",
                            "Ⓟ": "P",
                            "Ｐ": "P",
                            "Ṕ": "P",
                            "Ṗ": "P",
                            "Ƥ": "P",
                            "Ᵽ": "P",
                            "Ꝑ": "P",
                            "Ꝓ": "P",
                            "Ꝕ": "P",
                            "Ⓠ": "Q",
                            "Ｑ": "Q",
                            "Ꝗ": "Q",
                            "Ꝙ": "Q",
                            "Ɋ": "Q",
                            "Ⓡ": "R",
                            "Ｒ": "R",
                            "Ŕ": "R",
                            "Ṙ": "R",
                            "Ř": "R",
                            "Ȑ": "R",
                            "Ȓ": "R",
                            "Ṛ": "R",
                            "Ṝ": "R",
                            "Ŗ": "R",
                            "Ṟ": "R",
                            "Ɍ": "R",
                            "Ɽ": "R",
                            "Ꝛ": "R",
                            "Ꞧ": "R",
                            "Ꞃ": "R",
                            "Ⓢ": "S",
                            "Ｓ": "S",
                            "ẞ": "S",
                            "Ś": "S",
                            "Ṥ": "S",
                            "Ŝ": "S",
                            "Ṡ": "S",
                            "Š": "S",
                            "Ṧ": "S",
                            "Ṣ": "S",
                            "Ṩ": "S",
                            "Ș": "S",
                            "Ş": "S",
                            "Ȿ": "S",
                            "Ꞩ": "S",
                            "Ꞅ": "S",
                            "Ⓣ": "T",
                            "Ｔ": "T",
                            "Ṫ": "T",
                            "Ť": "T",
                            "Ṭ": "T",
                            "Ț": "T",
                            "Ţ": "T",
                            "Ṱ": "T",
                            "Ṯ": "T",
                            "Ŧ": "T",
                            "Ƭ": "T",
                            "Ʈ": "T",
                            "Ⱦ": "T",
                            "Ꞇ": "T",
                            "Ꜩ": "TZ",
                            "Ⓤ": "U",
                            "Ｕ": "U",
                            "Ù": "U",
                            "Ú": "U",
                            "Û": "U",
                            "Ũ": "U",
                            "Ṹ": "U",
                            "Ū": "U",
                            "Ṻ": "U",
                            "Ŭ": "U",
                            "Ü": "U",
                            "Ǜ": "U",
                            "Ǘ": "U",
                            "Ǖ": "U",
                            "Ǚ": "U",
                            "Ủ": "U",
                            "Ů": "U",
                            "Ű": "U",
                            "Ǔ": "U",
                            "Ȕ": "U",
                            "Ȗ": "U",
                            "Ư": "U",
                            "Ừ": "U",
                            "Ứ": "U",
                            "Ữ": "U",
                            "Ử": "U",
                            "Ự": "U",
                            "Ụ": "U",
                            "Ṳ": "U",
                            "Ų": "U",
                            "Ṷ": "U",
                            "Ṵ": "U",
                            "Ʉ": "U",
                            "Ⓥ": "V",
                            "Ｖ": "V",
                            "Ṽ": "V",
                            "Ṿ": "V",
                            "Ʋ": "V",
                            "Ꝟ": "V",
                            "Ʌ": "V",
                            "Ꝡ": "VY",
                            "Ⓦ": "W",
                            "Ｗ": "W",
                            "Ẁ": "W",
                            "Ẃ": "W",
                            "Ŵ": "W",
                            "Ẇ": "W",
                            "Ẅ": "W",
                            "Ẉ": "W",
                            "Ⱳ": "W",
                            "Ⓧ": "X",
                            "Ｘ": "X",
                            "Ẋ": "X",
                            "Ẍ": "X",
                            "Ⓨ": "Y",
                            "Ｙ": "Y",
                            "Ỳ": "Y",
                            "Ý": "Y",
                            "Ŷ": "Y",
                            "Ỹ": "Y",
                            "Ȳ": "Y",
                            "Ẏ": "Y",
                            "Ÿ": "Y",
                            "Ỷ": "Y",
                            "Ỵ": "Y",
                            "Ƴ": "Y",
                            "Ɏ": "Y",
                            "Ỿ": "Y",
                            "Ⓩ": "Z",
                            "Ｚ": "Z",
                            "Ź": "Z",
                            "Ẑ": "Z",
                            "Ż": "Z",
                            "Ž": "Z",
                            "Ẓ": "Z",
                            "Ẕ": "Z",
                            "Ƶ": "Z",
                            "Ȥ": "Z",
                            "Ɀ": "Z",
                            "Ⱬ": "Z",
                            "Ꝣ": "Z",
                            "ⓐ": "a",
                            "ａ": "a",
                            "ẚ": "a",
                            "à": "a",
                            "á": "a",
                            "â": "a",
                            "ầ": "a",
                            "ấ": "a",
                            "ẫ": "a",
                            "ẩ": "a",
                            "ã": "a",
                            "ā": "a",
                            "ă": "a",
                            "ằ": "a",
                            "ắ": "a",
                            "ẵ": "a",
                            "ẳ": "a",
                            "ȧ": "a",
                            "ǡ": "a",
                            "ä": "a",
                            "ǟ": "a",
                            "ả": "a",
                            "å": "a",
                            "ǻ": "a",
                            "ǎ": "a",
                            "ȁ": "a",
                            "ȃ": "a",
                            "ạ": "a",
                            "ậ": "a",
                            "ặ": "a",
                            "ḁ": "a",
                            "ą": "a",
                            "ⱥ": "a",
                            "ɐ": "a",
                            "ꜳ": "aa",
                            "æ": "ae",
                            "ǽ": "ae",
                            "ǣ": "ae",
                            "ꜵ": "ao",
                            "ꜷ": "au",
                            "ꜹ": "av",
                            "ꜻ": "av",
                            "ꜽ": "ay",
                            "ⓑ": "b",
                            "ｂ": "b",
                            "ḃ": "b",
                            "ḅ": "b",
                            "ḇ": "b",
                            "ƀ": "b",
                            "ƃ": "b",
                            "ɓ": "b",
                            "ⓒ": "c",
                            "ｃ": "c",
                            "ć": "c",
                            "ĉ": "c",
                            "ċ": "c",
                            "č": "c",
                            "ç": "c",
                            "ḉ": "c",
                            "ƈ": "c",
                            "ȼ": "c",
                            "ꜿ": "c",
                            "ↄ": "c",
                            "ⓓ": "d",
                            "ｄ": "d",
                            "ḋ": "d",
                            "ď": "d",
                            "ḍ": "d",
                            "ḑ": "d",
                            "ḓ": "d",
                            "ḏ": "d",
                            "đ": "d",
                            "ƌ": "d",
                            "ɖ": "d",
                            "ɗ": "d",
                            "ꝺ": "d",
                            "ǳ": "dz",
                            "ǆ": "dz",
                            "ⓔ": "e",
                            "ｅ": "e",
                            "è": "e",
                            "é": "e",
                            "ê": "e",
                            "ề": "e",
                            "ế": "e",
                            "ễ": "e",
                            "ể": "e",
                            "ẽ": "e",
                            "ē": "e",
                            "ḕ": "e",
                            "ḗ": "e",
                            "ĕ": "e",
                            "ė": "e",
                            "ë": "e",
                            "ẻ": "e",
                            "ě": "e",
                            "ȅ": "e",
                            "ȇ": "e",
                            "ẹ": "e",
                            "ệ": "e",
                            "ȩ": "e",
                            "ḝ": "e",
                            "ę": "e",
                            "ḙ": "e",
                            "ḛ": "e",
                            "ɇ": "e",
                            "ɛ": "e",
                            "ǝ": "e",
                            "ⓕ": "f",
                            "ｆ": "f",
                            "ḟ": "f",
                            "ƒ": "f",
                            "ꝼ": "f",
                            "ⓖ": "g",
                            "ｇ": "g",
                            "ǵ": "g",
                            "ĝ": "g",
                            "ḡ": "g",
                            "ğ": "g",
                            "ġ": "g",
                            "ǧ": "g",
                            "ģ": "g",
                            "ǥ": "g",
                            "ɠ": "g",
                            "ꞡ": "g",
                            "ᵹ": "g",
                            "ꝿ": "g",
                            "ⓗ": "h",
                            "ｈ": "h",
                            "ĥ": "h",
                            "ḣ": "h",
                            "ḧ": "h",
                            "ȟ": "h",
                            "ḥ": "h",
                            "ḩ": "h",
                            "ḫ": "h",
                            "ẖ": "h",
                            "ħ": "h",
                            "ⱨ": "h",
                            "ⱶ": "h",
                            "ɥ": "h",
                            "ƕ": "hv",
                            "ⓘ": "i",
                            "ｉ": "i",
                            "ì": "i",
                            "í": "i",
                            "î": "i",
                            "ĩ": "i",
                            "ī": "i",
                            "ĭ": "i",
                            "ï": "i",
                            "ḯ": "i",
                            "ỉ": "i",
                            "ǐ": "i",
                            "ȉ": "i",
                            "ȋ": "i",
                            "ị": "i",
                            "į": "i",
                            "ḭ": "i",
                            "ɨ": "i",
                            "ı": "i",
                            "ⓙ": "j",
                            "ｊ": "j",
                            "ĵ": "j",
                            "ǰ": "j",
                            "ɉ": "j",
                            "ⓚ": "k",
                            "ｋ": "k",
                            "ḱ": "k",
                            "ǩ": "k",
                            "ḳ": "k",
                            "ķ": "k",
                            "ḵ": "k",
                            "ƙ": "k",
                            "ⱪ": "k",
                            "ꝁ": "k",
                            "ꝃ": "k",
                            "ꝅ": "k",
                            "ꞣ": "k",
                            "ⓛ": "l",
                            "ｌ": "l",
                            "ŀ": "l",
                            "ĺ": "l",
                            "ľ": "l",
                            "ḷ": "l",
                            "ḹ": "l",
                            "ļ": "l",
                            "ḽ": "l",
                            "ḻ": "l",
                            "ſ": "l",
                            "ł": "l",
                            "ƚ": "l",
                            "ɫ": "l",
                            "ⱡ": "l",
                            "ꝉ": "l",
                            "ꞁ": "l",
                            "ꝇ": "l",
                            "ǉ": "lj",
                            "ⓜ": "m",
                            "ｍ": "m",
                            "ḿ": "m",
                            "ṁ": "m",
                            "ṃ": "m",
                            "ɱ": "m",
                            "ɯ": "m",
                            "ⓝ": "n",
                            "ｎ": "n",
                            "ǹ": "n",
                            "ń": "n",
                            "ñ": "n",
                            "ṅ": "n",
                            "ň": "n",
                            "ṇ": "n",
                            "ņ": "n",
                            "ṋ": "n",
                            "ṉ": "n",
                            "ƞ": "n",
                            "ɲ": "n",
                            "ŉ": "n",
                            "ꞑ": "n",
                            "ꞥ": "n",
                            "ǌ": "nj",
                            "ⓞ": "o",
                            "ｏ": "o",
                            "ò": "o",
                            "ó": "o",
                            "ô": "o",
                            "ồ": "o",
                            "ố": "o",
                            "ỗ": "o",
                            "ổ": "o",
                            "õ": "o",
                            "ṍ": "o",
                            "ȭ": "o",
                            "ṏ": "o",
                            "ō": "o",
                            "ṑ": "o",
                            "ṓ": "o",
                            "ŏ": "o",
                            "ȯ": "o",
                            "ȱ": "o",
                            "ö": "o",
                            "ȫ": "o",
                            "ỏ": "o",
                            "ő": "o",
                            "ǒ": "o",
                            "ȍ": "o",
                            "ȏ": "o",
                            "ơ": "o",
                            "ờ": "o",
                            "ớ": "o",
                            "ỡ": "o",
                            "ở": "o",
                            "ợ": "o",
                            "ọ": "o",
                            "ộ": "o",
                            "ǫ": "o",
                            "ǭ": "o",
                            "ø": "o",
                            "ǿ": "o",
                            "ɔ": "o",
                            "ꝋ": "o",
                            "ꝍ": "o",
                            "ɵ": "o",
                            "ƣ": "oi",
                            "ȣ": "ou",
                            "ꝏ": "oo",
                            "ⓟ": "p",
                            "ｐ": "p",
                            "ṕ": "p",
                            "ṗ": "p",
                            "ƥ": "p",
                            "ᵽ": "p",
                            "ꝑ": "p",
                            "ꝓ": "p",
                            "ꝕ": "p",
                            "ⓠ": "q",
                            "ｑ": "q",
                            "ɋ": "q",
                            "ꝗ": "q",
                            "ꝙ": "q",
                            "ⓡ": "r",
                            "ｒ": "r",
                            "ŕ": "r",
                            "ṙ": "r",
                            "ř": "r",
                            "ȑ": "r",
                            "ȓ": "r",
                            "ṛ": "r",
                            "ṝ": "r",
                            "ŗ": "r",
                            "ṟ": "r",
                            "ɍ": "r",
                            "ɽ": "r",
                            "ꝛ": "r",
                            "ꞧ": "r",
                            "ꞃ": "r",
                            "ⓢ": "s",
                            "ｓ": "s",
                            "ß": "s",
                            "ś": "s",
                            "ṥ": "s",
                            "ŝ": "s",
                            "ṡ": "s",
                            "š": "s",
                            "ṧ": "s",
                            "ṣ": "s",
                            "ṩ": "s",
                            "ș": "s",
                            "ş": "s",
                            "ȿ": "s",
                            "ꞩ": "s",
                            "ꞅ": "s",
                            "ẛ": "s",
                            "ⓣ": "t",
                            "ｔ": "t",
                            "ṫ": "t",
                            "ẗ": "t",
                            "ť": "t",
                            "ṭ": "t",
                            "ț": "t",
                            "ţ": "t",
                            "ṱ": "t",
                            "ṯ": "t",
                            "ŧ": "t",
                            "ƭ": "t",
                            "ʈ": "t",
                            "ⱦ": "t",
                            "ꞇ": "t",
                            "ꜩ": "tz",
                            "ⓤ": "u",
                            "ｕ": "u",
                            "ù": "u",
                            "ú": "u",
                            "û": "u",
                            "ũ": "u",
                            "ṹ": "u",
                            "ū": "u",
                            "ṻ": "u",
                            "ŭ": "u",
                            "ü": "u",
                            "ǜ": "u",
                            "ǘ": "u",
                            "ǖ": "u",
                            "ǚ": "u",
                            "ủ": "u",
                            "ů": "u",
                            "ű": "u",
                            "ǔ": "u",
                            "ȕ": "u",
                            "ȗ": "u",
                            "ư": "u",
                            "ừ": "u",
                            "ứ": "u",
                            "ữ": "u",
                            "ử": "u",
                            "ự": "u",
                            "ụ": "u",
                            "ṳ": "u",
                            "ų": "u",
                            "ṷ": "u",
                            "ṵ": "u",
                            "ʉ": "u",
                            "ⓥ": "v",
                            "ｖ": "v",
                            "ṽ": "v",
                            "ṿ": "v",
                            "ʋ": "v",
                            "ꝟ": "v",
                            "ʌ": "v",
                            "ꝡ": "vy",
                            "ⓦ": "w",
                            "ｗ": "w",
                            "ẁ": "w",
                            "ẃ": "w",
                            "ŵ": "w",
                            "ẇ": "w",
                            "ẅ": "w",
                            "ẘ": "w",
                            "ẉ": "w",
                            "ⱳ": "w",
                            "ⓧ": "x",
                            "ｘ": "x",
                            "ẋ": "x",
                            "ẍ": "x",
                            "ⓨ": "y",
                            "ｙ": "y",
                            "ỳ": "y",
                            "ý": "y",
                            "ŷ": "y",
                            "ỹ": "y",
                            "ȳ": "y",
                            "ẏ": "y",
                            "ÿ": "y",
                            "ỷ": "y",
                            "ẙ": "y",
                            "ỵ": "y",
                            "ƴ": "y",
                            "ɏ": "y",
                            "ỿ": "y",
                            "ⓩ": "z",
                            "ｚ": "z",
                            "ź": "z",
                            "ẑ": "z",
                            "ż": "z",
                            "ž": "z",
                            "ẓ": "z",
                            "ẕ": "z",
                            "ƶ": "z",
                            "ȥ": "z",
                            "ɀ": "z",
                            "ⱬ": "z",
                            "ꝣ": "z",
                            "Ά": "Α",
                            "Έ": "Ε",
                            "Ή": "Η",
                            "Ί": "Ι",
                            "Ϊ": "Ι",
                            "Ό": "Ο",
                            "Ύ": "Υ",
                            "Ϋ": "Υ",
                            "Ώ": "Ω",
                            "ά": "α",
                            "έ": "ε",
                            "ή": "η",
                            "ί": "ι",
                            "ϊ": "ι",
                            "ΐ": "ι",
                            "ό": "ο",
                            "ύ": "υ",
                            "ϋ": "υ",
                            "ΰ": "υ",
                            "ω": "ω",
                            "ς": "σ"
                        };
                        return t
                    }), e.define("select2/data/base", ["../utils"], function(t) {
                        function e() {
                            e.__super__.constructor.call(this)
                        }
                        return t.Extend(e, t.Observable), e.prototype.current = function() {
                            throw new Error("The `current` method must be defined in child classes.")
                        }, e.prototype.query = function() {
                            throw new Error("The `query` method must be defined in child classes.")
                        }, e.prototype.bind = function() {}, e.prototype.destroy = function() {}, e.prototype.generateResultId = function(e, i) {
                            var n = e.id + "-result-";
                            return n += t.generateChars(4), n += null != i.id ? "-" + i.id.toString() : "-" + t.generateChars(4)
                        }, e
                    }), e.define("select2/data/select", ["./base", "../utils", "jquery"], function(t, e, i) {
                        function n(t, e) {
                            this.$element = t, this.options = e, n.__super__.constructor.call(this)
                        }
                        return e.Extend(n, t), n.prototype.current = function(t) {
                            var e = [],
                                n = this;
                            this.$element.find(":selected").each(function() {
                                var t = i(this),
                                    o = n.item(t);
                                e.push(o)
                            }), t(e)
                        }, n.prototype.select = function(t) {
                            var e = this;
                            if (t.selected = !0, i(t.element).is("option")) return t.element.selected = !0, void this.$element.trigger("change");
                            if (this.$element.prop("multiple")) this.current(function(n) {
                                var o = [];
                                t = [t], t.push.apply(t, n);
                                for (var s = 0; s < t.length; s++) {
                                    var r = t[s].id; - 1 === i.inArray(r, o) && o.push(r)
                                }
                                e.$element.val(o), e.$element.trigger("change")
                            });
                            else {
                                var n = t.id;
                                this.$element.val(n), this.$element.trigger("change")
                            }
                        }, n.prototype.unselect = function(t) {
                            var e = this;
                            return this.$element.prop("multiple") ? (t.selected = !1, i(t.element).is("option") ? (t.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(n) {
                                for (var o = [], s = 0; s < n.length; s++) {
                                    var r = n[s].id;
                                    r !== t.id && -1 === i.inArray(r, o) && o.push(r)
                                }
                                e.$element.val(o), e.$element.trigger("change")
                            })) : void 0
                        }, n.prototype.bind = function(t) {
                            var e = this;
                            this.container = t, t.on("select", function(t) {
                                e.select(t.data)
                            }), t.on("unselect", function(t) {
                                e.unselect(t.data)
                            })
                        }, n.prototype.destroy = function() {
                            this.$element.find("*").each(function() {
                                i.removeData(this, "data")
                            })
                        }, n.prototype.query = function(t, e) {
                            var n = [],
                                o = this,
                                s = this.$element.children();
                            s.each(function() {
                                var e = i(this);
                                if (e.is("option") || e.is("optgroup")) {
                                    var s = o.item(e),
                                        r = o.matches(t, s);
                                    null !== r && n.push(r)
                                }
                            }), e({
                                results: n
                            })
                        }, n.prototype.addOptions = function(t) {
                            e.appendMany(this.$element, t)
                        }, n.prototype.option = function(t) {
                            var e;
                            t.children ? (e = document.createElement("optgroup"), e.label = t.text) : (e = document.createElement("option"), void 0 !== e.textContent ? e.textContent = t.text : e.innerText = t.text), t.id && (e.value = t.id), t.disabled && (e.disabled = !0), t.selected && (e.selected = !0), t.title && (e.title = t.title);
                            var n = i(e),
                                o = this._normalizeItem(t);
                            return o.element = e, i.data(e, "data", o), n
                        }, n.prototype.item = function(t) {
                            var e = {};
                            if (e = i.data(t[0], "data"), null != e) return e;
                            if (t.is("option")) e = {
                                id: t.val(),
                                text: t.text(),
                                disabled: t.prop("disabled"),
                                selected: t.prop("selected"),
                                title: t.prop("title")
                            };
                            else if (t.is("optgroup")) {
                                e = {
                                    text: t.prop("label"),
                                    children: [],
                                    title: t.prop("title")
                                };
                                for (var n = t.children("option"), o = [], s = 0; s < n.length; s++) {
                                    var r = i(n[s]),
                                        a = this.item(r);
                                    o.push(a)
                                }
                                e.children = o
                            }
                            return e = this._normalizeItem(e), e.element = t[0], i.data(t[0], "data", e), e
                        }, n.prototype._normalizeItem = function(t) {
                            i.isPlainObject(t) || (t = {
                                id: t,
                                text: t
                            }), t = i.extend({}, {
                                text: ""
                            }, t);
                            var e = {
                                selected: !1,
                                disabled: !1
                            };
                            return null != t.id && (t.id = t.id.toString()), null != t.text && (t.text = t.text.toString()), null == t._resultId && t.id && null != this.container && (t._resultId = this.generateResultId(this.container, t)), i.extend({}, e, t)
                        }, n.prototype.matches = function(t, e) {
                            var i = this.options.get("matcher");
                            return i(t, e)
                        }, n
                    }), e.define("select2/data/array", ["./select", "../utils", "jquery"], function(t, e, i) {
                        function n(t, e) {
                            var i = e.get("data") || [];
                            n.__super__.constructor.call(this, t, e), this.addOptions(this.convertToOptions(i))
                        }
                        return e.Extend(n, t), n.prototype.select = function(t) {
                            var e = this.$element.find("option").filter(function(e, i) {
                                return i.value == t.id.toString()
                            });
                            0 === e.length && (e = this.option(t), this.addOptions(e)), n.__super__.select.call(this, t)
                        }, n.prototype.convertToOptions = function(t) {
                            function n(t) {
                                return function() {
                                    return i(this).val() == t.id
                                }
                            }
                            for (var o = this, s = this.$element.find("option"), r = s.map(function() {
                                    return o.item(i(this)).id
                                }).get(), a = [], l = 0; l < t.length; l++) {
                                var c = this._normalizeItem(t[l]);
                                if (i.inArray(c.id, r) >= 0) {
                                    var h = s.filter(n(c)),
                                        u = this.item(h),
                                        d = i.extend(!0, {}, c, u),
                                        p = this.option(d);
                                    h.replaceWith(p)
                                } else {
                                    var f = this.option(c);
                                    if (c.children) {
                                        var m = this.convertToOptions(c.children);
                                        e.appendMany(f, m)
                                    }
                                    a.push(f)
                                }
                            }
                            return a
                        }, n
                    }), e.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(t, e, i) {
                        function n(t, e) {
                            this.ajaxOptions = this._applyDefaults(e.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), n.__super__.constructor.call(this, t, e)
                        }
                        return e.Extend(n, t), n.prototype._applyDefaults = function(t) {
                            var e = {
                                data: function(t) {
                                    return i.extend({}, t, {
                                        q: t.term
                                    })
                                },
                                transport: function(t, e, n) {
                                    var o = i.ajax(t);
                                    return o.then(e), o.fail(n), o
                                }
                            };
                            return i.extend({}, e, t, !0)
                        }, n.prototype.processResults = function(t) {
                            return t
                        }, n.prototype.query = function(t, e) {
                            function n() {
                                var n = s.transport(s, function(n) {
                                    var s = o.processResults(n, t);
                                    o.options.get("debug") && window.console && console.error && (s && s.results && i.isArray(s.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), e(s)
                                }, function() {
                                    n.status && "0" === n.status || o.trigger("results:message", {
                                        message: "errorLoading"
                                    })
                                });
                                o._request = n
                            }
                            var o = this;
                            null != this._request && (i.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                            var s = i.extend({
                                type: "GET"
                            }, this.ajaxOptions);
                            "function" == typeof s.url && (s.url = s.url.call(this.$element, t)), "function" == typeof s.data && (s.data = s.data.call(this.$element, t)), this.ajaxOptions.delay && null != t.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(n, this.ajaxOptions.delay)) : n()
                        }, n
                    }), e.define("select2/data/tags", ["jquery"], function(t) {
                        function e(e, i, n) {
                            var o = n.get("tags"),
                                s = n.get("createTag");
                            void 0 !== s && (this.createTag = s);
                            var r = n.get("insertTag");
                            if (void 0 !== r && (this.insertTag = r), e.call(this, i, n), t.isArray(o))
                                for (var a = 0; a < o.length; a++) {
                                    var l = o[a],
                                        c = this._normalizeItem(l),
                                        h = this.option(c);
                                    this.$element.append(h)
                                }
                        }
                        return e.prototype.query = function(t, e, i) {
                            function n(t, s) {
                                for (var r = t.results, a = 0; a < r.length; a++) {
                                    var l = r[a],
                                        c = null != l.children && !n({
                                            results: l.children
                                        }, !0),
                                        h = l.text === e.term;
                                    if (h || c) return s ? !1 : (t.data = r, void i(t))
                                }
                                if (s) return !0;
                                var u = o.createTag(e);
                                if (null != u) {
                                    var d = o.option(u);
                                    d.attr("data-select2-tag", !0), o.addOptions([d]), o.insertTag(r, u)
                                }
                                t.results = r, i(t)
                            }
                            var o = this;
                            return this._removeOldTags(), null == e.term || null != e.page ? void t.call(this, e, i) : void t.call(this, e, n)
                        }, e.prototype.createTag = function(e, i) {
                            var n = t.trim(i.term);
                            return "" === n ? null : {
                                id: n,
                                text: n
                            }
                        }, e.prototype.insertTag = function(t, e, i) {
                            e.unshift(i)
                        }, e.prototype._removeOldTags = function() {
                            var e = (this._lastTag, this.$element.find("option[data-select2-tag]"));
                            e.each(function() {
                                this.selected || t(this).remove()
                            })
                        }, e
                    }), e.define("select2/data/tokenizer", ["jquery"], function(t) {
                        function e(t, e, i) {
                            var n = i.get("tokenizer");
                            void 0 !== n && (this.tokenizer = n), t.call(this, e, i)
                        }
                        return e.prototype.bind = function(t, e, i) {
                            t.call(this, e, i), this.$search = e.dropdown.$search || e.selection.$search || i.find(".select2-search__field")
                        }, e.prototype.query = function(e, i, n) {
                            function o(e) {
                                var i = r._normalizeItem(e),
                                    n = r.$element.find("option").filter(function() {
                                        return t(this).val() === i.id
                                    });
                                if (!n.length) {
                                    var o = r.option(i);
                                    o.attr("data-select2-tag", !0), r._removeOldTags(), r.addOptions([o])
                                }
                                s(i)
                            }

                            function s(t) {
                                r.trigger("select", {
                                    data: t
                                })
                            }
                            var r = this;
                            i.term = i.term || "";
                            var a = this.tokenizer(i, this.options, o);
                            a.term !== i.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), i.term = a.term), e.call(this, i, n)
                        }, e.prototype.tokenizer = function(e, i, n, o) {
                            for (var s = n.get("tokenSeparators") || [], r = i.term, a = 0, l = this.createTag || function(t) {
                                    return {
                                        id: t.term,
                                        text: t.term
                                    }
                                }; a < r.length;) {
                                var c = r[a];
                                if (-1 !== t.inArray(c, s)) {
                                    var h = r.substr(0, a),
                                        u = t.extend({}, i, {
                                            term: h
                                        }),
                                        d = l(u);
                                    null != d ? (o(d), r = r.substr(a + 1) || "", a = 0) : a++
                                } else a++
                            }
                            return {
                                term: r
                            }
                        }, e
                    }), e.define("select2/data/minimumInputLength", [], function() {
                        function t(t, e, i) {
                            this.minimumInputLength = i.get("minimumInputLength"), t.call(this, e, i)
                        }
                        return t.prototype.query = function(t, e, i) {
                            return e.term = e.term || "", e.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                                message: "inputTooShort",
                                args: {
                                    minimum: this.minimumInputLength,
                                    input: e.term,
                                    params: e
                                }
                            }) : void t.call(this, e, i)
                        }, t
                    }), e.define("select2/data/maximumInputLength", [], function() {
                        function t(t, e, i) {
                            this.maximumInputLength = i.get("maximumInputLength"), t.call(this, e, i)
                        }
                        return t.prototype.query = function(t, e, i) {
                            return e.term = e.term || "", this.maximumInputLength > 0 && e.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                                message: "inputTooLong",
                                args: {
                                    maximum: this.maximumInputLength,
                                    input: e.term,
                                    params: e
                                }
                            }) : void t.call(this, e, i)
                        }, t
                    }), e.define("select2/data/maximumSelectionLength", [], function() {
                        function t(t, e, i) {
                            this.maximumSelectionLength = i.get("maximumSelectionLength"), t.call(this, e, i)
                        }
                        return t.prototype.query = function(t, e, i) {
                            var n = this;
                            this.current(function(o) {
                                var s = null != o ? o.length : 0;
                                return n.maximumSelectionLength > 0 && s >= n.maximumSelectionLength ? void n.trigger("results:message", {
                                    message: "maximumSelected",
                                    args: {
                                        maximum: n.maximumSelectionLength
                                    }
                                }) : void t.call(n, e, i)
                            })
                        }, t
                    }), e.define("select2/dropdown", ["jquery", "./utils"], function(t, e) {
                        function i(t, e) {
                            this.$element = t, this.options = e, i.__super__.constructor.call(this)
                        }
                        return e.Extend(i, e.Observable), i.prototype.render = function() {
                            var e = t('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                            return e.attr("dir", this.options.get("dir")), this.$dropdown = e, e
                        }, i.prototype.bind = function() {}, i.prototype.position = function() {}, i.prototype.destroy = function() {
                            this.$dropdown.remove()
                        }, i
                    }), e.define("select2/dropdown/search", ["jquery", "../utils"], function(t) {
                        function e() {}
                        return e.prototype.render = function(e) {
                            var i = e.call(this),
                                n = t('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                            return this.$searchContainer = n, this.$search = n.find("input"), i.prepend(n), i
                        }, e.prototype.bind = function(e, i, n) {
                            var o = this;
                            e.call(this, i, n), this.$search.on("keydown", function(t) {
                                o.trigger("keypress", t), o._keyUpPrevented = t.isDefaultPrevented()
                            }), this.$search.on("input", function() {
                                t(this).off("keyup")
                            }), this.$search.on("keyup input", function(t) {
                                o.handleSearch(t)
                            }), i.on("open", function() {
                                o.$search.attr("tabindex", 0), o.$search.focus(), window.setTimeout(function() {
                                    o.$search.focus()
                                }, 0)
                            }), i.on("close", function() {
                                o.$search.attr("tabindex", -1), o.$search.val("")
                            }), i.on("focus", function() {
                                i.isOpen() && o.$search.focus()
                            }), i.on("results:all", function(t) {
                                if (null == t.query.term || "" === t.query.term) {
                                    var e = o.showSearch(t);
                                    e ? o.$searchContainer.removeClass("select2-search--hide") : o.$searchContainer.addClass("select2-search--hide")
                                }
                            })
                        }, e.prototype.handleSearch = function() {
                            if (!this._keyUpPrevented) {
                                var t = this.$search.val();
                                this.trigger("query", {
                                    term: t
                                })
                            }
                            this._keyUpPrevented = !1
                        }, e.prototype.showSearch = function() {
                            return !0
                        }, e
                    }), e.define("select2/dropdown/hidePlaceholder", [], function() {
                        function t(t, e, i, n) {
                            this.placeholder = this.normalizePlaceholder(i.get("placeholder")), t.call(this, e, i, n)
                        }
                        return t.prototype.append = function(t, e) {
                            e.results = this.removePlaceholder(e.results), t.call(this, e)
                        }, t.prototype.normalizePlaceholder = function(t, e) {
                            return "string" == typeof e && (e = {
                                id: "",
                                text: e
                            }), e
                        }, t.prototype.removePlaceholder = function(t, e) {
                            for (var i = e.slice(0), n = e.length - 1; n >= 0; n--) {
                                var o = e[n];
                                this.placeholder.id === o.id && i.splice(n, 1)
                            }
                            return i
                        }, t
                    }), e.define("select2/dropdown/infiniteScroll", ["jquery"], function(t) {
                        function e(t, e, i, n) {
                            this.lastParams = {}, t.call(this, e, i, n), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                        }
                        return e.prototype.append = function(t, e) {
                            this.$loadingMore.remove(), this.loading = !1, t.call(this, e), this.showLoadingMore(e) && this.$results.append(this.$loadingMore)
                        }, e.prototype.bind = function(e, i, n) {
                            var o = this;
                            e.call(this, i, n), i.on("query", function(t) {
                                o.lastParams = t, o.loading = !0
                            }), i.on("query:append", function(t) {
                                o.lastParams = t, o.loading = !0
                            }), this.$results.on("scroll", function() {
                                var e = t.contains(document.documentElement, o.$loadingMore[0]);
                                if (!o.loading && e) {
                                    var i = o.$results.offset().top + o.$results.outerHeight(!1),
                                        n = o.$loadingMore.offset().top + o.$loadingMore.outerHeight(!1);
                                    i + 50 >= n && o.loadMore()
                                }
                            })
                        }, e.prototype.loadMore = function() {
                            this.loading = !0;
                            var e = t.extend({}, {
                                page: 1
                            }, this.lastParams);
                            e.page++, this.trigger("query:append", e)
                        }, e.prototype.showLoadingMore = function(t, e) {
                            return e.pagination && e.pagination.more
                        }, e.prototype.createLoadingMore = function() {
                            var e = t('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                                i = this.options.get("translations").get("loadingMore");
                            return e.html(i(this.lastParams)), e
                        }, e
                    }), e.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(t, e) {
                        function i(e, i, n) {
                            this.$dropdownParent = n.get("dropdownParent") || t(document.body), e.call(this, i, n)
                        }
                        return i.prototype.bind = function(t, e, i) {
                            var n = this,
                                o = !1;
                            t.call(this, e, i), e.on("open", function() {
                                n._showDropdown(), n._attachPositioningHandler(e), o || (o = !0, e.on("results:all", function() {
                                    n._positionDropdown(), n._resizeDropdown()
                                }), e.on("results:append", function() {
                                    n._positionDropdown(), n._resizeDropdown()
                                }))
                            }), e.on("close", function() {
                                n._hideDropdown(), n._detachPositioningHandler(e)
                            }), this.$dropdownContainer.on("mousedown", function(t) {
                                t.stopPropagation()
                            })
                        }, i.prototype.destroy = function(t) {
                            t.call(this), this.$dropdownContainer.remove()
                        }, i.prototype.position = function(t, e, i) {
                            e.attr("class", i.attr("class")), e.removeClass("select2"), e.addClass("select2-container--open"), e.css({
                                position: "absolute",
                                top: -999999
                            }), this.$container = i
                        }, i.prototype.render = function(e) {
                            var i = t("<span></span>"),
                                n = e.call(this);
                            return i.append(n), this.$dropdownContainer = i, i
                        }, i.prototype._hideDropdown = function() {
                            this.$dropdownContainer.detach()
                        }, i.prototype._attachPositioningHandler = function(i, n) {
                            var o = this,
                                s = "scroll.select2." + n.id,
                                r = "resize.select2." + n.id,
                                a = "orientationchange.select2." + n.id,
                                l = this.$container.parents().filter(e.hasScroll);
                            l.each(function() {
                                t(this).data("select2-scroll-position", {
                                    x: t(this).scrollLeft(),
                                    y: t(this).scrollTop()
                                })
                            }), l.on(s, function() {
                                var e = t(this).data("select2-scroll-position");
                                t(this).scrollTop(e.y)
                            }), t(window).on(s + " " + r + " " + a, function() {
                                o._positionDropdown(), o._resizeDropdown()
                            })
                        }, i.prototype._detachPositioningHandler = function(i, n) {
                            var o = "scroll.select2." + n.id,
                                s = "resize.select2." + n.id,
                                r = "orientationchange.select2." + n.id,
                                a = this.$container.parents().filter(e.hasScroll);
                            a.off(o), t(window).off(o + " " + s + " " + r)
                        }, i.prototype._positionDropdown = function() {
                            var e = t(window),
                                i = this.$dropdown.hasClass("select2-dropdown--above"),
                                n = this.$dropdown.hasClass("select2-dropdown--below"),
                                o = null,
                                s = this.$container.offset();
                            s.bottom = s.top + this.$container.outerHeight(!1);
                            var r = {
                                height: this.$container.outerHeight(!1)
                            };
                            r.top = s.top, r.bottom = s.top + r.height;
                            var a = {
                                    height: this.$dropdown.outerHeight(!1)
                                },
                                l = {
                                    top: e.scrollTop(),
                                    bottom: e.scrollTop() + e.height()
                                },
                                c = l.top < s.top - a.height,
                                h = l.bottom > s.bottom + a.height,
                                u = {
                                    left: s.left,
                                    top: r.bottom
                                },
                                d = this.$dropdownParent;
                            "static" === d.css("position") && (d = d.offsetParent());
                            var p = d.offset();
                            u.top -= p.top, u.left -= p.left, i || n || (o = "below"), h || !c || i ? !c && h && i && (o = "below") : o = "above", ("above" == o || i && "below" !== o) && (u.top = r.top - p.top - a.height), null != o && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + o), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + o)), this.$dropdownContainer.css(u)
                        }, i.prototype._resizeDropdown = function() {
                            var t = {
                                width: this.$container.outerWidth(!1) + "px"
                            };
                            this.options.get("dropdownAutoWidth") && (t.minWidth = t.width, t.position = "relative", t.width = "auto"), this.$dropdown.css(t)
                        }, i.prototype._showDropdown = function() {
                            this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                        }, i
                    }), e.define("select2/dropdown/minimumResultsForSearch", [], function() {
                        function t(e) {
                            for (var i = 0, n = 0; n < e.length; n++) {
                                var o = e[n];
                                o.children ? i += t(o.children) : i++
                            }
                            return i
                        }

                        function e(t, e, i, n) {
                            this.minimumResultsForSearch = i.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), t.call(this, e, i, n)
                        }
                        return e.prototype.showSearch = function(e, i) {
                            return t(i.data.results) < this.minimumResultsForSearch ? !1 : e.call(this, i)
                        }, e
                    }), e.define("select2/dropdown/selectOnClose", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, i) {
                            var n = this;
                            t.call(this, e, i), e.on("close", function(t) {
                                n._handleSelectOnClose(t)
                            })
                        }, t.prototype._handleSelectOnClose = function(t, e) {
                            if (e && null != e.originalSelect2Event) {
                                var i = e.originalSelect2Event;
                                if ("select" === i._type || "unselect" === i._type) return
                            }
                            var n = this.getHighlightedResults();
                            if (!(n.length < 1)) {
                                var o = n.data("data");
                                null != o.element && o.element.selected || null == o.element && o.selected || this.trigger("select", {
                                    data: o
                                })
                            }
                        }, t
                    }), e.define("select2/dropdown/closeOnSelect", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, i) {
                            var n = this;
                            t.call(this, e, i), e.on("select", function(t) {
                                n._selectTriggered(t)
                            }), e.on("unselect", function(t) {
                                n._selectTriggered(t)
                            })
                        }, t.prototype._selectTriggered = function(t, e) {
                            var i = e.originalEvent;
                            i && i.ctrlKey || this.trigger("close", {
                                originalEvent: i,
                                originalSelect2Event: e
                            })
                        }, t
                    }), e.define("select2/i18n/en", [], function() {
                        return {
                            errorLoading: function() {
                                return "The results could not be loaded."
                            },
                            inputTooLong: function(t) {
                                var e = t.input.length - t.maximum,
                                    i = "Please delete " + e + " character";
                                return 1 != e && (i += "s"), i
                            },
                            inputTooShort: function(t) {
                                var e = t.minimum - t.input.length,
                                    i = "Please enter " + e + " or more characters";
                                return i
                            },
                            loadingMore: function() {
                                return "Loading more results…"
                            },
                            maximumSelected: function(t) {
                                var e = "You can only select " + t.maximum + " item";
                                return 1 != t.maximum && (e += "s"), e
                            },
                            noResults: function() {
                                return "No results found"
                            },
                            searching: function() {
                                return "Searching…"
                            }
                        }
                    }), e.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(t, e, i, n, o, s, r, a, l, c, h, u, d, p, f, m, g, v, y, b, w, x, C, S, T, k, I, E, $) {
                        function A() {
                            this.reset()
                        }
                        A.prototype.apply = function(u) {
                            if (u = t.extend(!0, {}, this.defaults, u), null == u.dataAdapter) {
                                if (null != u.ajax ? u.dataAdapter = f : null != u.data ? u.dataAdapter = p : u.dataAdapter = d, u.minimumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, v)), u.maximumInputLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, y)), u.maximumSelectionLength > 0 && (u.dataAdapter = c.Decorate(u.dataAdapter, b)), u.tags && (u.dataAdapter = c.Decorate(u.dataAdapter, m)), (null != u.tokenSeparators || null != u.tokenizer) && (u.dataAdapter = c.Decorate(u.dataAdapter, g)), null != u.query) {
                                    var $ = e(u.amdBase + "compat/query");
                                    u.dataAdapter = c.Decorate(u.dataAdapter, $)
                                }
                                if (null != u.initSelection) {
                                    var A = e(u.amdBase + "compat/initSelection");
                                    u.dataAdapter = c.Decorate(u.dataAdapter, A)
                                }
                            }
                            if (null == u.resultsAdapter && (u.resultsAdapter = i, null != u.ajax && (u.resultsAdapter = c.Decorate(u.resultsAdapter, S)), null != u.placeholder && (u.resultsAdapter = c.Decorate(u.resultsAdapter, C)), u.selectOnClose && (u.resultsAdapter = c.Decorate(u.resultsAdapter, I))), null == u.dropdownAdapter) {
                                if (u.multiple) u.dropdownAdapter = w;
                                else {
                                    var P = c.Decorate(w, x);
                                    u.dropdownAdapter = P
                                }
                                if (0 !== u.minimumResultsForSearch && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, k)), u.closeOnSelect && (u.dropdownAdapter = c.Decorate(u.dropdownAdapter, E)), null != u.dropdownCssClass || null != u.dropdownCss || null != u.adaptDropdownCssClass) {
                                    var _ = e(u.amdBase + "compat/dropdownCss");
                                    u.dropdownAdapter = c.Decorate(u.dropdownAdapter, _)
                                }
                                u.dropdownAdapter = c.Decorate(u.dropdownAdapter, T)
                            }
                            if (null == u.selectionAdapter) {
                                if (u.multiple ? u.selectionAdapter = o : u.selectionAdapter = n, null != u.placeholder && (u.selectionAdapter = c.Decorate(u.selectionAdapter, s)), u.allowClear && (u.selectionAdapter = c.Decorate(u.selectionAdapter, r)), u.multiple && (u.selectionAdapter = c.Decorate(u.selectionAdapter, a)), null != u.containerCssClass || null != u.containerCss || null != u.adaptContainerCssClass) {
                                    var L = e(u.amdBase + "compat/containerCss");
                                    u.selectionAdapter = c.Decorate(u.selectionAdapter, L)
                                }
                                u.selectionAdapter = c.Decorate(u.selectionAdapter, l)
                            }
                            if ("string" == typeof u.language)
                                if (u.language.indexOf("-") > 0) {
                                    var O = u.language.split("-"),
                                        D = O[0];
                                    u.language = [u.language, D]
                                } else u.language = [u.language];
                            if (t.isArray(u.language)) {
                                var M = new h;
                                u.language.push("en");
                                for (var z = u.language, N = 0; N < z.length; N++) {
                                    var R = z[N],
                                        W = {};
                                    try {
                                        W = h.loadPath(R)
                                    } catch (j) {
                                        try {
                                            R = this.defaults.amdLanguageBase + R, W = h.loadPath(R)
                                        } catch (F) {
                                            u.debug && window.console && console.warn && console.warn('Select2: The language file for "' + R + '" could not be automatically loaded. A fallback will be used instead.');
                                            continue
                                        }
                                    }
                                    M.extend(W)
                                }
                                u.translations = M
                            } else {
                                var q = h.loadPath(this.defaults.amdLanguageBase + "en"),
                                    H = new h(u.language);
                                H.extend(q), u.translations = H
                            }
                            return u
                        }, A.prototype.reset = function() {
                            function e(t) {
                                function e(t) {
                                    return u[t] || t
                                }
                                return t.replace(/[^\u0000-\u007E]/g, e)
                            }

                            function i(n, o) {
                                if ("" === t.trim(n.term)) return o;
                                if (o.children && o.children.length > 0) {
                                    for (var s = t.extend(!0, {}, o), r = o.children.length - 1; r >= 0; r--) {
                                        var a = o.children[r],
                                            l = i(n, a);
                                        null == l && s.children.splice(r, 1)
                                    }
                                    return s.children.length > 0 ? s : i(n, s)
                                }
                                var c = e(o.text).toUpperCase(),
                                    h = e(n.term).toUpperCase();
                                return c.indexOf(h) > -1 ? o : null
                            }
                            this.defaults = {
                                amdBase: "./",
                                amdLanguageBase: "./i18n/",
                                closeOnSelect: !0,
                                debug: !1,
                                dropdownAutoWidth: !1,
                                escapeMarkup: c.escapeMarkup,
                                language: $,
                                matcher: i,
                                minimumInputLength: 0,
                                maximumInputLength: 0,
                                maximumSelectionLength: 0,
                                minimumResultsForSearch: 0,
                                selectOnClose: !1,
                                sorter: function(t) {
                                    return t
                                },
                                templateResult: function(t) {
                                    return t.text
                                },
                                templateSelection: function(t) {
                                    return t.text
                                },
                                theme: "default",
                                width: "resolve"
                            }
                        }, A.prototype.set = function(e, i) {
                            var n = t.camelCase(e),
                                o = {};
                            o[n] = i;
                            var s = c._convertData(o);
                            t.extend(this.defaults, s)
                        };
                        var P = new A;
                        return P
                    }), e.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(t, e, i, n) {
                        function o(e, o) {
                            if (this.options = e, null != o && this.fromElement(o), this.options = i.apply(this.options), o && o.is("input")) {
                                var s = t(this.get("amdBase") + "compat/inputData");
                                this.options.dataAdapter = n.Decorate(this.options.dataAdapter, s)
                            }
                        }
                        return o.prototype.fromElement = function(t) {
                            var i = ["select2"];
                            null == this.options.multiple && (this.options.multiple = t.prop("multiple")), null == this.options.disabled && (this.options.disabled = t.prop("disabled")), null == this.options.language && (t.prop("lang") ? this.options.language = t.prop("lang").toLowerCase() : t.closest("[lang]").prop("lang") && (this.options.language = t.closest("[lang]").prop("lang"))), null == this.options.dir && (t.prop("dir") ? this.options.dir = t.prop("dir") : t.closest("[dir]").prop("dir") ? this.options.dir = t.closest("[dir]").prop("dir") : this.options.dir = "ltr"), t.prop("disabled", this.options.disabled), t.prop("multiple", this.options.multiple), t.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), t.data("data", t.data("select2Tags")), t.data("tags", !0)), t.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), t.attr("ajax--url", t.data("ajaxUrl")), t.data("ajax--url", t.data("ajaxUrl")));
                            var o = {};
                            o = e.fn.jquery && "1." == e.fn.jquery.substr(0, 2) && t[0].dataset ? e.extend(!0, {}, t[0].dataset, t.data()) : t.data();
                            var s = e.extend(!0, {}, o);
                            s = n._convertData(s);
                            for (var r in s) e.inArray(r, i) > -1 || (e.isPlainObject(this.options[r]) ? e.extend(this.options[r], s[r]) : this.options[r] = s[r]);
                            return this
                        }, o.prototype.get = function(t) {
                            return this.options[t]
                        }, o.prototype.set = function(t, e) {
                            this.options[t] = e;
                        }, o
                    }), e.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(t, e, i, n) {
                        var o = function(t, i) {
                            null != t.data("select2") && t.data("select2").destroy(), this.$element = t, this.id = this._generateId(t), i = i || {}, this.options = new e(i, t), o.__super__.constructor.call(this);
                            var n = t.attr("tabindex") || 0;
                            t.data("old-tabindex", n), t.attr("tabindex", "-1");
                            var s = this.options.get("dataAdapter");
                            this.dataAdapter = new s(t, this.options);
                            var r = this.render();
                            this._placeContainer(r);
                            var a = this.options.get("selectionAdapter");
                            this.selection = new a(t, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, r);
                            var l = this.options.get("dropdownAdapter");
                            this.dropdown = new l(t, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, r);
                            var c = this.options.get("resultsAdapter");
                            this.results = new c(t, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                            var h = this;
                            this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(t) {
                                h.trigger("selection:update", {
                                    data: t
                                })
                            }), t.addClass("select2-hidden-accessible"), t.attr("aria-hidden", "true"), this._syncAttributes(), t.data("select2", this)
                        };
                        return i.Extend(o, i.Observable), o.prototype._generateId = function(t) {
                            var e = "";
                            return e = null != t.attr("id") ? t.attr("id") : null != t.attr("name") ? t.attr("name") + "-" + i.generateChars(2) : i.generateChars(4), e = e.replace(/(:|\.|\[|\]|,)/g, ""), e = "select2-" + e
                        }, o.prototype._placeContainer = function(t) {
                            t.insertAfter(this.$element);
                            var e = this._resolveWidth(this.$element, this.options.get("width"));
                            null != e && t.css("width", e)
                        }, o.prototype._resolveWidth = function(t, e) {
                            var i = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                            if ("resolve" == e) {
                                var n = this._resolveWidth(t, "style");
                                return null != n ? n : this._resolveWidth(t, "element")
                            }
                            if ("element" == e) {
                                var o = t.outerWidth(!1);
                                return 0 >= o ? "auto" : o + "px"
                            }
                            if ("style" == e) {
                                var s = t.attr("style");
                                if ("string" != typeof s) return null;
                                for (var r = s.split(";"), a = 0, l = r.length; l > a; a += 1) {
                                    var c = r[a].replace(/\s/g, ""),
                                        h = c.match(i);
                                    if (null !== h && h.length >= 1) return h[1]
                                }
                                return null
                            }
                            return e
                        }, o.prototype._bindAdapters = function() {
                            this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                        }, o.prototype._registerDomEvents = function() {
                            var e = this;
                            this.$element.on("change.select2", function() {
                                e.dataAdapter.current(function(t) {
                                    e.trigger("selection:update", {
                                        data: t
                                    })
                                })
                            }), this.$element.on("focus.select2", function(t) {
                                e.trigger("focus", t)
                            }), this._sync = i.bind(this._syncAttributes, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._sync);
                            var n = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                            null != n ? (this._observer = new n(function(i) {
                                t.each(i, e._sync)
                            }), this._observer.observe(this.$element[0], {
                                attributes: !0,
                                subtree: !1
                            })) : this.$element[0].addEventListener && this.$element[0].addEventListener("DOMAttrModified", e._sync, !1)
                        }, o.prototype._registerDataEvents = function() {
                            var t = this;
                            this.dataAdapter.on("*", function(e, i) {
                                t.trigger(e, i)
                            })
                        }, o.prototype._registerSelectionEvents = function() {
                            var e = this,
                                i = ["toggle", "focus"];
                            this.selection.on("toggle", function() {
                                e.toggleDropdown()
                            }), this.selection.on("focus", function(t) {
                                e.focus(t)
                            }), this.selection.on("*", function(n, o) {
                                -1 === t.inArray(n, i) && e.trigger(n, o)
                            })
                        }, o.prototype._registerDropdownEvents = function() {
                            var t = this;
                            this.dropdown.on("*", function(e, i) {
                                t.trigger(e, i)
                            })
                        }, o.prototype._registerResultsEvents = function() {
                            var t = this;
                            this.results.on("*", function(e, i) {
                                t.trigger(e, i)
                            })
                        }, o.prototype._registerEvents = function() {
                            var t = this;
                            this.on("open", function() {
                                t.$container.addClass("select2-container--open")
                            }), this.on("close", function() {
                                t.$container.removeClass("select2-container--open")
                            }), this.on("enable", function() {
                                t.$container.removeClass("select2-container--disabled")
                            }), this.on("disable", function() {
                                t.$container.addClass("select2-container--disabled")
                            }), this.on("blur", function() {
                                t.$container.removeClass("select2-container--focus")
                            }), this.on("query", function(e) {
                                t.isOpen() || t.trigger("open", {}), this.dataAdapter.query(e, function(i) {
                                    t.trigger("results:all", {
                                        data: i,
                                        query: e
                                    })
                                })
                            }), this.on("query:append", function(e) {
                                this.dataAdapter.query(e, function(i) {
                                    t.trigger("results:append", {
                                        data: i,
                                        query: e
                                    })
                                })
                            }), this.on("keypress", function(e) {
                                var i = e.which;
                                t.isOpen() ? i === n.ESC || i === n.TAB || i === n.UP && e.altKey ? (t.close(), e.preventDefault()) : i === n.ENTER ? (t.trigger("results:select", {}), e.preventDefault()) : i === n.SPACE && e.ctrlKey ? (t.trigger("results:toggle", {}), e.preventDefault()) : i === n.UP ? (t.trigger("results:previous", {}), e.preventDefault()) : i === n.DOWN && (t.trigger("results:next", {}), e.preventDefault()) : (i === n.ENTER || i === n.SPACE || i === n.DOWN && e.altKey) && (t.open(), e.preventDefault())
                            })
                        }, o.prototype._syncAttributes = function() {
                            this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                        }, o.prototype.trigger = function(t, e) {
                            var i = o.__super__.trigger,
                                n = {
                                    open: "opening",
                                    close: "closing",
                                    select: "selecting",
                                    unselect: "unselecting"
                                };
                            if (void 0 === e && (e = {}), t in n) {
                                var s = n[t],
                                    r = {
                                        prevented: !1,
                                        name: t,
                                        args: e
                                    };
                                if (i.call(this, s, r), r.prevented) return void(e.prevented = !0)
                            }
                            i.call(this, t, e)
                        }, o.prototype.toggleDropdown = function() {
                            this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                        }, o.prototype.open = function() {
                            this.isOpen() || this.trigger("query", {})
                        }, o.prototype.close = function() {
                            this.isOpen() && this.trigger("close", {})
                        }, o.prototype.isOpen = function() {
                            return this.$container.hasClass("select2-container--open")
                        }, o.prototype.hasFocus = function() {
                            return this.$container.hasClass("select2-container--focus")
                        }, o.prototype.focus = function() {
                            this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                        }, o.prototype.enable = function(t) {
                            this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == t || 0 === t.length) && (t = [!0]);
                            var e = !t[0];
                            this.$element.prop("disabled", e)
                        }, o.prototype.data = function() {
                            this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                            var t = [];
                            return this.dataAdapter.current(function(e) {
                                t = e
                            }), t
                        }, o.prototype.val = function(e) {
                            if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == e || 0 === e.length) return this.$element.val();
                            var i = e[0];
                            t.isArray(i) && (i = t.map(i, function(t) {
                                return t.toString()
                            })), this.$element.val(i).trigger("change")
                        }, o.prototype.destroy = function() {
                            this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._sync), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && this.$element[0].removeEventListener("DOMAttrModified", this._sync, !1), this._sync = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                        }, o.prototype.render = function() {
                            var e = t('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                            return e.attr("dir", this.options.get("dir")), this.$container = e, this.$container.addClass("select2-container--" + this.options.get("theme")), e.data("element", this.$element), e
                        }, o
                    }), e.define("select2/compat/utils", ["jquery"], function(t) {
                        function e(e, i, n) {
                            var o, s, r = [];
                            o = t.trim(e.attr("class")), o && (o = "" + o, t(o.split(/\s+/)).each(function() {
                                0 === this.indexOf("select2-") && r.push(this)
                            })), o = t.trim(i.attr("class")), o && (o = "" + o, t(o.split(/\s+/)).each(function() {
                                0 !== this.indexOf("select2-") && (s = n(this), null != s && r.push(s))
                            })), e.attr("class", r.join(" "))
                        }
                        return {
                            syncCssClasses: e
                        }
                    }), e.define("select2/compat/containerCss", ["jquery", "./utils"], function(t, e) {
                        function i() {
                            return null
                        }

                        function n() {}
                        return n.prototype.render = function(n) {
                            var o = n.call(this),
                                s = this.options.get("containerCssClass") || "";
                            t.isFunction(s) && (s = s(this.$element));
                            var r = this.options.get("adaptContainerCssClass");
                            if (r = r || i, -1 !== s.indexOf(":all:")) {
                                s = s.replace(":all:", "");
                                var a = r;
                                r = function(t) {
                                    var e = a(t);
                                    return null != e ? e + " " + t : t
                                }
                            }
                            var l = this.options.get("containerCss") || {};
                            return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
                        }, n
                    }), e.define("select2/compat/dropdownCss", ["jquery", "./utils"], function(t, e) {
                        function i() {
                            return null
                        }

                        function n() {}
                        return n.prototype.render = function(n) {
                            var o = n.call(this),
                                s = this.options.get("dropdownCssClass") || "";
                            t.isFunction(s) && (s = s(this.$element));
                            var r = this.options.get("adaptDropdownCssClass");
                            if (r = r || i, -1 !== s.indexOf(":all:")) {
                                s = s.replace(":all:", "");
                                var a = r;
                                r = function(t) {
                                    var e = a(t);
                                    return null != e ? e + " " + t : t
                                }
                            }
                            var l = this.options.get("dropdownCss") || {};
                            return t.isFunction(l) && (l = l(this.$element)), e.syncCssClasses(o, this.$element, r), o.css(l), o.addClass(s), o
                        }, n
                    }), e.define("select2/compat/initSelection", ["jquery"], function(t) {
                        function e(t, e, i) {
                            i.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = i.get("initSelection"), this._isInitialized = !1, t.call(this, e, i)
                        }
                        return e.prototype.current = function(e, i) {
                            var n = this;
                            return this._isInitialized ? void e.call(this, i) : void this.initSelection.call(null, this.$element, function(e) {
                                n._isInitialized = !0, t.isArray(e) || (e = [e]), i(e)
                            })
                        }, e
                    }), e.define("select2/compat/inputData", ["jquery"], function(t) {
                        function e(t, e, i) {
                            this._currentData = [], this._valueSeparator = i.get("valueSeparator") || ",", "hidden" === e.prop("type") && i.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), t.call(this, e, i)
                        }
                        return e.prototype.current = function(e, i) {
                            function n(e, i) {
                                var o = [];
                                return e.selected || -1 !== t.inArray(e.id, i) ? (e.selected = !0, o.push(e)) : e.selected = !1, e.children && o.push.apply(o, n(e.children, i)), o
                            }
                            for (var o = [], s = 0; s < this._currentData.length; s++) {
                                var r = this._currentData[s];
                                o.push.apply(o, n(r, this.$element.val().split(this._valueSeparator)))
                            }
                            i(o)
                        }, e.prototype.select = function(e, i) {
                            if (this.options.get("multiple")) {
                                var n = this.$element.val();
                                n += this._valueSeparator + i.id, this.$element.val(n), this.$element.trigger("change")
                            } else this.current(function(e) {
                                t.map(e, function(t) {
                                    t.selected = !1
                                })
                            }), this.$element.val(i.id), this.$element.trigger("change")
                        }, e.prototype.unselect = function(t, e) {
                            var i = this;
                            e.selected = !1, this.current(function(t) {
                                for (var n = [], o = 0; o < t.length; o++) {
                                    var s = t[o];
                                    e.id != s.id && n.push(s.id)
                                }
                                i.$element.val(n.join(i._valueSeparator)), i.$element.trigger("change")
                            })
                        }, e.prototype.query = function(t, e, i) {
                            for (var n = [], o = 0; o < this._currentData.length; o++) {
                                var s = this._currentData[o],
                                    r = this.matches(e, s);
                                null !== r && n.push(r)
                            }
                            i({
                                results: n
                            })
                        }, e.prototype.addOptions = function(e, i) {
                            var n = t.map(i, function(e) {
                                return t.data(e[0], "data")
                            });
                            this._currentData.push.apply(this._currentData, n)
                        }, e
                    }), e.define("select2/compat/matcher", ["jquery"], function(t) {
                        function e(e) {
                            function i(i, n) {
                                var o = t.extend(!0, {}, n);
                                if (null == i.term || "" === t.trim(i.term)) return o;
                                if (n.children) {
                                    for (var s = n.children.length - 1; s >= 0; s--) {
                                        var r = n.children[s],
                                            a = e(i.term, r.text, r);
                                        a || o.children.splice(s, 1)
                                    }
                                    if (o.children.length > 0) return o
                                }
                                return e(i.term, n.text, n) ? o : null
                            }
                            return i
                        }
                        return e
                    }), e.define("select2/compat/query", [], function() {
                        function t(t, e, i) {
                            i.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), t.call(this, e, i)
                        }
                        return t.prototype.query = function(t, e, i) {
                            e.callback = i;
                            var n = this.options.get("query");
                            n.call(null, e)
                        }, t
                    }), e.define("select2/dropdown/attachContainer", [], function() {
                        function t(t, e, i) {
                            t.call(this, e, i)
                        }
                        return t.prototype.position = function(t, e, i) {
                            var n = i.find(".dropdown-wrapper");
                            n.append(e), e.addClass("select2-dropdown--below"), i.addClass("select2-container--below")
                        }, t
                    }), e.define("select2/dropdown/stopPropagation", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, i) {
                            t.call(this, e, i);
                            var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$dropdown.on(n.join(" "), function(t) {
                                t.stopPropagation()
                            })
                        }, t
                    }), e.define("select2/selection/stopPropagation", [], function() {
                        function t() {}
                        return t.prototype.bind = function(t, e, i) {
                            t.call(this, e, i);
                            var n = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];
                            this.$selection.on(n.join(" "), function(t) {
                                t.stopPropagation()
                            })
                        }, t
                    }),
                    function(i) {
                        "function" == typeof e.define && e.define.amd ? e.define("jquery-mousewheel", ["jquery"], i) : "object" == typeof exports ? module.exports = i : i(t)
                    }(function(t) {
                        function e(e) {
                            var r = e || window.event,
                                a = l.call(arguments, 1),
                                c = 0,
                                u = 0,
                                d = 0,
                                p = 0,
                                f = 0,
                                m = 0;
                            if (e = t.event.fix(r), e.type = "mousewheel", "detail" in r && (d = -1 * r.detail), "wheelDelta" in r && (d = r.wheelDelta), "wheelDeltaY" in r && (d = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * d, d = 0), c = 0 === d ? u : d, "deltaY" in r && (d = -1 * r.deltaY, c = d), "deltaX" in r && (u = r.deltaX, 0 === d && (c = -1 * u)), 0 !== d || 0 !== u) {
                                if (1 === r.deltaMode) {
                                    var g = t.data(this, "mousewheel-line-height");
                                    c *= g, d *= g, u *= g
                                } else if (2 === r.deltaMode) {
                                    var v = t.data(this, "mousewheel-page-height");
                                    c *= v, d *= v, u *= v
                                }
                                if (p = Math.max(Math.abs(d), Math.abs(u)), (!s || s > p) && (s = p, n(r, p) && (s /= 40)), n(r, p) && (c /= 40, u /= 40, d /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / s), u = Math[u >= 1 ? "floor" : "ceil"](u / s), d = Math[d >= 1 ? "floor" : "ceil"](d / s), h.settings.normalizeOffset && this.getBoundingClientRect) {
                                    var y = this.getBoundingClientRect();
                                    f = e.clientX - y.left, m = e.clientY - y.top
                                }
                                return e.deltaX = u, e.deltaY = d, e.deltaFactor = s, e.offsetX = f, e.offsetY = m, e.deltaMode = 0, a.unshift(e, c, u, d), o && clearTimeout(o), o = setTimeout(i, 200), (t.event.dispatch || t.event.handle).apply(this, a)
                            }
                        }

                        function i() {
                            s = null
                        }

                        function n(t, e) {
                            return h.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
                        }
                        var o, s, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                            a = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                            l = Array.prototype.slice;
                        if (t.event.fixHooks)
                            for (var c = r.length; c;) t.event.fixHooks[r[--c]] = t.event.mouseHooks;
                        var h = t.event.special.mousewheel = {
                            version: "3.1.12",
                            setup: function() {
                                if (this.addEventListener)
                                    for (var i = a.length; i;) this.addEventListener(a[--i], e, !1);
                                else this.onmousewheel = e;
                                t.data(this, "mousewheel-line-height", h.getLineHeight(this)), t.data(this, "mousewheel-page-height", h.getPageHeight(this))
                            },
                            teardown: function() {
                                if (this.removeEventListener)
                                    for (var i = a.length; i;) this.removeEventListener(a[--i], e, !1);
                                else this.onmousewheel = null;
                                t.removeData(this, "mousewheel-line-height"), t.removeData(this, "mousewheel-page-height")
                            },
                            getLineHeight: function(e) {
                                var i = t(e),
                                    n = i["offsetParent" in t.fn ? "offsetParent" : "parent"]();
                                return n.length || (n = t("body")), parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
                            },
                            getPageHeight: function(e) {
                                return t(e).height()
                            },
                            settings: {
                                adjustOldDeltas: !0,
                                normalizeOffset: !0
                            }
                        };
                        t.fn.extend({
                            mousewheel: function(t) {
                                return t ? this.bind("mousewheel", t) : this.trigger("mousewheel")
                            },
                            unmousewheel: function(t) {
                                return this.unbind("mousewheel", t)
                            }
                        })
                    }), e.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(t, e, i, n) {
                        if (null == t.fn.select2) {
                            var o = ["open", "close", "destroy"];
                            t.fn.select2 = function(e) {
                                if (e = e || {}, "object" == typeof e) return this.each(function() {
                                    var n = t.extend(!0, {}, e);
                                    new i(t(this), n)
                                }), this;
                                if ("string" == typeof e) {
                                    var n, s = Array.prototype.slice.call(arguments, 1);
                                    return this.each(function() {
                                        var i = t(this).data("select2");
                                        null == i && window.console && console.error && console.error("The select2('" + e + "') method was called on an element that is not using Select2."), n = i[e].apply(i, s)
                                    }), t.inArray(e, o) > -1 ? this : n
                                }
                                throw new Error("Invalid arguments for Select2: " + e)
                            }
                        }
                        return null == t.fn.select2.defaults && (t.fn.select2.defaults = n), i
                    }), {
                        define: e.define,
                        require: e.require
                    }
            }(),
            i = e.require("jquery.select2");
        return t.fn.select2.amd = e, i
    }), window.jQuery || alert("The jQuery library must be included before the smoothscroll.js file.  The plugin will not work propery."),
    function(t) {
        function e(t) {
            return "object" == typeof t ? t : {
                top: t,
                left: t
            }
        }
        var i = t.scrollTo = function(e, i, n) {
            t(window).scrollTo(e, i, n)
        };
        i.defaults = {
            axis: "xy",
            duration: parseFloat(t.fn.jquery) >= 1.3 ? 0 : 1,
            limit: !0
        }, i.window = function() {
            return t(window)._scrollable()
        }, t.fn._scrollable = function() {
            return this.map(function() {
                var e = this,
                    i = !e.nodeName || -1 != t.inArray(e.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
                if (!i) return e;
                var n = (e.contentWindow || e).document || e.ownerDocument || e;
                return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
            })
        }, t.fn.scrollTo = function(n, o, s) {
            return "object" == typeof o && (s = o, o = 0), "function" == typeof s && (s = {
                onAfter: s
            }), "max" == n && (n = 9e9), s = t.extend({}, i.defaults, s), o = o || s.duration, s.queue = s.queue && s.axis.length > 1, s.queue && (o /= 2), s.offset = e(s.offset), s.over = e(s.over), this._scrollable().each(function() {
                function r(t) {
                    c.animate(u, o, s.easing, t && function() {
                        t.call(this, n, s)
                    })
                }
                if (null != n) {
                    var a, l = this,
                        c = t(l),
                        h = n,
                        u = {},
                        d = c.is("html,body");
                    switch (typeof h) {
                        case "number":
                        case "string":
                            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(h)) {
                                h = e(h);
                                break
                            }
                            if (h = t(h, this), !h.length) return;
                        case "object":
                            (h.is || h.style) && (a = (h = t(h)).offset())
                    }
                    t.each(s.axis.split(""), function(t, e) {
                        var n = "x" == e ? "Left" : "Top",
                            o = n.toLowerCase(),
                            p = "scroll" + n,
                            f = l[p],
                            m = i.max(l, e);
                        if (a) u[p] = a[o] + (d ? 0 : f - c.offset()[o]), s.margin && (u[p] -= parseInt(h.css("margin" + n)) || 0, u[p] -= parseInt(h.css("border" + n + "Width")) || 0), u[p] += s.offset[o] || 0, s.over[o] && (u[p] += h["x" == e ? "width" : "height"]() * s.over[o]);
                        else {
                            var g = h[o];
                            u[p] = g.slice && "%" == g.slice(-1) ? parseFloat(g) / 100 * m : g
                        }
                        s.limit && /^\d+$/.test(u[p]) && (u[p] = u[p] <= 0 ? 0 : Math.min(u[p], m)), !t && s.queue && (f != u[p] && r(s.onAfterFirst), delete u[p])
                    }), r(s.onAfter)
                }
            }).end()
        }, i.max = function(e, i) {
            var n = "x" == i ? "Width" : "Height",
                o = "scroll" + n;
            if (!t(e).is("html,body")) return e[o] - t(e)[n.toLowerCase()]();
            var s = "client" + n,
                r = e.ownerDocument.documentElement,
                a = e.ownerDocument.body;
            return Math.max(r[o], a[o]) - Math.min(r[s], a[s])
        }
    }(jQuery),
    function(t) {
        function e(e, i, n) {
            var o = i.hash.slice(1),
                s = document.getElementById(o) || document.getElementsByName(o)[0];
            if (s) {
                e && e.preventDefault();
                var r = t(n.target);
                if (!(n.lock && r.is(":animated") || n.onBefore && !1 === n.onBefore(e, s, r))) {
                    if (n.stop && r._scrollable().stop(!0), n.hash) {
                        var e = s.id == o ? "id" : "name",
                            a = t("<a> </a>").attr(e, o).css({
                                position: "absolute",
                                top: t(window).scrollTop(),
                                left: t(window).scrollLeft()
                            });
                        s[e] = "", t("body").prepend(a), location = i.hash, a.remove(), s[e] = o
                    }
                    r.scrollTo(s, n).trigger("notify.serialScroll", [s])
                }
            }
        }
        var i = location.href.replace(/#.*/, ""),
            n = t.localScroll = function(e) {
                t("body").localScroll(e)
            };
        n.defaults = {
            duration: 1e3,
            axis: "y",
            event: "click",
            stop: !0,
            target: window,
            reset: !0
        }, n.hash = function(i) {
            if (location.hash) {
                if (i = t.extend({}, n.defaults, i), i.hash = !1, i.reset) {
                    var o = i.duration;
                    delete i.duration, t(i.target).scrollTo(0, i), i.duration = o
                }
                e(0, location, i)
            }
        }, t.fn.localScroll = function(o) {
            function s() {
                return !!this.href && !!this.hash && this.href.replace(this.hash, "") == i && (!o.filter || t(this).is(o.filter))
            }
            return o = t.extend({}, n.defaults, o), o.lazy ? this.bind(o.event, function(i) {
                var n = t([i.target, i.target.parentNode]).filter(s)[0];
                n && e(i, n, o)
            }) : this.find("a,area").filter(s).bind(o.event, function(t) {
                e(t, this, o)
            }).end().end()
        }
    }(jQuery), jQuery(function(t) {
        t.localScroll({
            filter: ".smoothScroll"
        })
    }), jQuery(document).ready(function(t) {
        function e(e, i) {
            e.each(function() {
                t(this).offset().top > t(window).scrollTop() + t(window).height() * i && t(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")
            })
        }

        function i(e, i) {
            e.each(function() {
                t(this).offset().top <= t(window).scrollTop() + t(window).height() * i && t(this).find(".cd-timeline-img").hasClass("is-hidden") && t(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")
            })
        }
        var n = t(".cd-timeline-block"),
            o = .8;
        e(n, o), t(window).on("scroll", function() {
            window.requestAnimationFrame ? window.requestAnimationFrame(function() {
                i(n, o)
            }) : setTimeout(function() {
                i(n, o)
            }, 100)
        })
    }), $(function() {
        $(document).ready(function() {
            $.fn.jpreLoader && $("body").jpreLoader({
                showPercentage: !1,
                loaderVPos: "50%"
            })
        }), $(window).width() > 1e3 ? ($("#slider1").bxSlider(), $("#slider2").hide()) : ($("#slider2").bxSlider(), $("#slider1").hide());
        var t = function() {
            $(".page-scroll > a").bind("click", function(t) {
                t.preventDefault();
                var e = $(this),
                    i = e.attr("href"),
                    n = $("body").attr("data-offset");
                $("html, body").stop().animate({
                    scrollTop: $(i).offset().top - (n - 1)
                }, 1500, "easeInOutExpo"), $(this).parent().hasClass("dropdown") || $(".berg-collapse").collapse("hide")
            })
        };
        t();
        var e = function() {
            var t = Math.max($(window).width(), window.innerWidth),
                e = $(".navbar.navbar-fixed-top");
            $.fn.unstick && e.unstick(), $.fn.sticky && t >= 992 && e.sticky({
                topSpacing: 0
            })
        };
        e(), $(window).smartresize(function() {
            e()
        });
        var i = function() {
            var t = Math.max($(window).width(), window.innerWidth),
                e = $(".navbar .dropdown");
            t >= 992 ? e.on("mouseover", function() {
                $(this).hasClass("open") || $(this).addClass("open")
            }).on("mouseout", function() {
                $(this).hasClass("open") && $(this).removeClass("open")
            }) : e.off("mouseover").off("mouseout")
        };
        i(), $(window).smartresize(function() {
            i()
        }), $(".dropdown-menu").click(function(t) {
            t.stopPropagation()
        });
        var n = function() {
            var t = Math.max($(window).width(), window.innerWidth),
                e = $(".collapse:not(:first)", "#work"),
                i = $(".collapse:not(:first)", "#education");
            768 > t ? (e.collapse("show"), i.collapse("show")) : (e.collapse("hide"), i.collapse("hide"))
        };
        $(window).smartload(function() {
            n()
        }), $(window).smartresize(function() {
            n()
        });
        var o = [{
                value: 250,
                color: "#F7464A",
                highlight: "#FF5A5E",
                label: "Web Dev"
            }, {
                value: 150,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Systèmes Intelligents"
            }, {
                value: 120,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Développement Logiciel"
            }, {
                value: 20,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Admin BDD / réseaux"
            }, {
                value: 120,
                color: "#4D5360",
                highlight: "#616774",
                label: "Management"
            }],
            s = document.getElementById("designing-skills").getContext("2d");
        window.designSkill = new Chart(s).Doughnut(o, {
            legendTemplate: '<ul class="<%=name.toLowerCase()%>-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
        });
        var r = designSkill.generateLegend();
        $(".designing-legend").html(r), $(function() {
            $(".dial").knob({
                draw: function() {
                    if ("tron" == this.$.data("skin")) {
                        var t, e = this.angle(this.cv),
                            i = this.startAngle,
                            n = this.startAngle,
                            o = n + e,
                            s = !0;
                        return this.g.lineWidth = this.lineWidth, this.o.cursor && (n = o - .3) && (o += .3), this.o.displayPrevious && (t = this.startAngle + this.angle(this.value), this.o.cursor && (i = t - .3) && (t += .3), this.g.beginPath(), this.g.strokeStyle = this.previousColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, i, t, !1), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = s ? this.o.fgColor : this.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, n, o, !1), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
                    }
                }
            })
        });
        var a = function() {
            $(".item-skills").each(function() {
                newWidth = $(this).parent().width() * $(this).data("percent"), $(this).width(0), $(this).animate({
                    width: newWidth
                }, 2e3)
            }), $(".icons-red").each(function() {
                height = $(this).height(), $(this).animate({
                    height: 14
                }, 2e3)
            })
        };
        $(document).ready(a);
        var l;
        window.onresize = function() {
            clearTimeout(l), l = setTimeout(function() {
                a()
            }, 100)
        }
    });