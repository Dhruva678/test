'use strict';
var ba, ca, ea, fa, ga, ha, ia, ja, la, ma, na, oa, pa, qa, ra, ua, va, wa, xa, ya, za, Aa, Ca, A, Da, Ea, Fa, Ga, Ha, D, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Ta, Ua, Va, Wa, Ya, Za, $a, ab, bb, cb, db, eb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac, bc, cc, dc, ec, fc, gc, hc, ic, jc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(h) {
    return h.__proto__
} : function(h) {
    return h.constructor.prototype
});
(function() {
    function h(a, b, e, d) {
        this.set(a, b, e, d)
    }

    function g() {
        this.hb = this.gb = this.jb = this.ib = this.pb = this.ob = this.Oa = this.Na = 0
    }

    function c(a, b, e, d) {
        a < b ? e < d ? (w = a < e ? a : e, N = b > d ? b : d) : (w = a < d ? a : d, N = b > e ? b : e) : e < d ? (w = b < e ? b : e, N = a > d ? a : d) : (w = b < d ? b : d, N = a > e ? a : e)
    }

    function k() {
        this.items = this.Ac = null;
        this.Si = 0;
        x && (this.Ac = new Set);
        this.Wh = [];
        this.wf = !0
    }

    function m(a) {
        B[L++] = a
    }

    function r() {
        this.ta = this.Qh = this.y = this.ii = 0
    }

    function p(a) {
        this.Lb = [];
        this.rk = this.tk = this.uk = this.sk = 0;
        this.Aj(a)
    }

    function b(a, b) {
        this.mn = a;
        this.ln = b;
        this.cells = {}
    }

    function d(a, b) {
        this.mn = a;
        this.ln = b;
        this.cells = {}
    }

    function f(a, b, e) {
        var d;
        return u.length ? (d = u.pop(), d.Zn = a, d.x = b, d.y = e, d) : new ca(a, b, e)
    }

    function a(a, b, e) {
        this.Zn = a;
        this.x = b;
        this.y = e;
        this.Ob = new ea
    }

    function e(a, b, e) {
        var d;
        return v.length ? (d = v.pop(), d.Zn = a, d.x = b, d.y = e, d) : new fa(a, b, e)
    }

    function l(a, b, e) {
        this.Zn = a;
        this.x = b;
        this.y = e;
        this.Ob = [];
        this.kh = !0;
        this.me = new ea;
        this.fi = !1
    }

    function q(a, b) {
        return a.Rd - b.Rd
    }
    ga = function(a) {
        window.console && window.console.log && window.console.log(a)
    };
    ha = function(a) {
        window.console && window.console.error && window.console.error(a)
    };
    ba = function(a) {
        return a
    };
    ia = function(a) {
        return "undefined" === typeof a
    };
    ja = function(a) {
        return "number" === typeof a
    };
    la = function(a) {
        return "string" === typeof a
    };
    ma = function(a) {
        return 0 < a && 0 === (a - 1 & a)
    };
    na = function(a) {
        --a;
        for (var b = 1; 32 > b; b <<= 1) a = a | a >> b;
        return a + 1
    };
    oa = function(a) {
        return 0 > a ? -a : a
    };
    pa = function(a, b) {
        return a > b ? a : b
    };
    qa = function(a, b) {
        return a < b ? a : b
    };
    ra = Math.PI;
    ua = function(a) {
        return 0 <= a ? a | 0 : (a | 0) - 1
    };
    va = function(a) {
        var b = a | 0;
        return b === a ? b : b + 1
    };
    wa = function(a, b, e, d, f, n, l, t) {
        var y, q, c, w;
        a < e ? (q = a, y = e) : (q = e, y = a);
        f < l ? (w = f, c = l) : (w = l, c = f);
        if (y < w || q > c) return !1;
        b < d ? (q = b, y = d) : (q = d, y = b);
        n < t ? (w = n, c = t) : (w = t, c = n);
        if (y < w || q > c) return !1;
        y = f - a + l - e;
        q = n - b + t - d;
        a = e - a;
        b = d - b;
        f = l - f;
        n = t - n;
        t = oa(b * f - n * a);
        return oa(f * q - n * y) > t ? !1 : oa(a * q - b * y) <= t
    };
    h.prototype.set = function(a, b, e, d) {
        this.left = a;
        this.top = b;
        this.right = e;
        this.bottom = d
    };
    h.prototype.ki = function(a) {
        this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom
    };
    h.prototype.width = function() {
        return this.right - this.left
    };
    h.prototype.height = function() {
        return this.bottom - this.top
    };
    h.prototype.offset = function(a, b) {
        this.left += a;
        this.top += b;
        this.right += a;
        this.bottom += b;
        return this
    };
    h.prototype.normalize = function() {
        var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a)
    };
    h.prototype.wy = function(a) {
        return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom)
    };
    h.prototype.xy = function(a, b, e) {
        return !(a.right + b < this.left || a.bottom + e < this.top || a.left + b > this.right || a.top + e > this.bottom)
    };
    h.prototype.$b = function(a, b) {
        return a >= this.left && a <= this.right && b >= this.top && b <= this.bottom
    };
    h.prototype.pi = function(a) {
        return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom
    };
    xa = h;
    g.prototype.zj = function(a) {
        this.Na = a.left;
        this.Oa = a.top;
        this.ob = a.right;
        this.pb = a.top;
        this.ib = a.right;
        this.jb = a.bottom;
        this.gb = a.left;
        this.hb = a.bottom
    };
    g.prototype.Ct = function(a, b) {
        if (0 === b) this.zj(a);
        else {
            var e = Math.sin(b),
                d = Math.cos(b),
                f = a.left * e,
                n = a.top * e,
                l = a.right * e,
                e = a.bottom * e,
                t = a.left * d,
                y = a.top * d,
                q = a.right * d,
                d = a.bottom * d;
            this.Na = t - n;
            this.Oa = y + f;
            this.ob = q - n;
            this.pb = y + l;
            this.ib = q - e;
            this.jb = d + l;
            this.gb = t - e;
            this.hb = d + f
        }
    };
    g.prototype.offset = function(a, b) {
        this.Na += a;
        this.Oa += b;
        this.ob += a;
        this.pb += b;
        this.ib += a;
        this.jb += b;
        this.gb += a;
        this.hb += b;
        return this
    };
    var w = 0,
        N = 0;
    g.prototype.Mq = function(a) {
        c(this.Na, this.ob, this.ib, this.gb);
        a.left = w;
        a.right = N;
        c(this.Oa, this.pb, this.jb, this.hb);
        a.top = w;
        a.bottom = N
    };
    g.prototype.$b = function(a, b) {
        var e = this.Na,
            d = this.Oa,
            f = this.ob - e,
            n = this.pb - d,
            l = this.ib - e,
            t = this.jb - d,
            y = a - e,
            q = b - d,
            c = f * f + n * n,
            w = f * l + n * t,
            n = f * y + n * q,
            m = l * l + t * t,
            k = l * y + t * q,
            h = 1 / (c * m - w * w),
            f = (m * n - w * k) * h,
            c = (c * k - w * n) * h;
        if (0 <= f && 0 < c && 1 > f + c) return !0;
        f = this.gb - e;
        n = this.hb - d;
        c = f * f + n * n;
        w = f * l + n * t;
        n = f * y + n * q;
        h = 1 / (c * m - w * w);
        f = (m * n - w * k) * h;
        c = (c * k - w * n) * h;
        return 0 <= f && 0 < c && 1 > f + c
    };
    g.prototype.Xd = function(a, b) {
        if (b) switch (a) {
            case 0:
                return this.Na;
            case 1:
                return this.ob;
            case 2:
                return this.ib;
            case 3:
                return this.gb;
            case 4:
                return this.Na;
            default:
                return this.Na
        } else switch (a) {
            case 0:
                return this.Oa;
            case 1:
                return this.pb;
            case 2:
                return this.jb;
            case 3:
                return this.hb;
            case 4:
                return this.Oa;
            default:
                return this.Oa
        }
    };
    g.prototype.ws = function() {
        return (this.Na + this.ob + this.ib + this.gb) / 4
    };
    g.prototype.xs = function() {
        return (this.Oa + this.pb + this.jb + this.hb) / 4
    };
    g.prototype.Jr = function(a) {
        var b = a.ws(),
            e = a.xs();
        if (this.$b(b, e)) return !0;
        b = this.ws();
        e = this.xs();
        if (a.$b(b, e)) return !0;
        var d, f, n, l, t, y, q, c;
        for (q = 0; 4 > q; q++)
            for (c = 0; 4 > c; c++)
                if (b = this.Xd(q, !0), e = this.Xd(q, !1), d = this.Xd(q + 1, !0), f = this.Xd(q + 1, !1), n = a.Xd(c, !0), l = a.Xd(c, !1), t = a.Xd(c + 1, !0), y = a.Xd(c + 1, !1), wa(b, e, d, f, n, l, t, y)) return !0;
        return !1
    };
    ya = g;
    za = function(a, b) {
        for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
        return a
    };
    Aa = function(a, b) {
        var e, d;
        b = ua(b);
        if (!(0 > b || b >= a.length)) {
            e = b;
            for (d = a.length - 1; e < d; e++) a[e] = a[e + 1];
            Ca(a, d)
        }
    };
    Ca = function(a, b) {
        a.length = b
    };
    A = function(a) {
        Ca(a, 0)
    };
    Da = function(a, b) {
        A(a);
        var e, d;
        e = 0;
        for (d = b.length; e < d; ++e) a[e] = b[e]
    };
    Ea = function(a, b) {
        a.push.apply(a, b)
    };
    Fa = function(a, b) {
        var e, d;
        e = 0;
        for (d = a.length; e < d; ++e)
            if (a[e] === b) return e;
        return -1
    };
    Ga = function(a, b) {
        var e = Fa(a, b); - 1 !== e && Aa(a, e)
    };
    Ha = function(a, b, e) {
        return a < b ? b : a > e ? e : a
    };
    D = function(a) {
        return a / (180 / ra)
    };
    Ja = function(a) {
        return 180 / ra * a
    };
    Ka = function(a) {
        a %= 360;
        0 > a && (a += 360);
        return a
    };
    La = function(a) {
        a %= 2 * ra;
        0 > a && (a += 2 * ra);
        return a
    };
    Ma = function(a) {
        return Ka(Ja(a))
    };
    Na = function(a) {
        return La(D(a))
    };
    Oa = function(a, b, e, d) {
        return Math.atan2(d - b, e - a)
    };
    Pa = function(a, b) {
        if (a === b) return 0;
        var e = Math.sin(a),
            d = Math.cos(a),
            f = Math.sin(b),
            n = Math.cos(b),
            e = e * f + d * n;
        return 1 <= e ? 0 : -1 >= e ? ra : Math.acos(e)
    };
    Qa = function(a, b, e) {
        var d = Math.sin(a),
            f = Math.cos(a),
            n = Math.sin(b),
            l = Math.cos(b);
        return Math.acos(d * n + f * l) > e ? 0 < f * n - d * l ? La(a + e) : La(a - e) : La(b)
    };
    Ra = function(a, b) {
        var e = Math.sin(a),
            d = Math.cos(a),
            f = Math.sin(b),
            n = Math.cos(b);
        return 0 >= d * f - e * n
    };
    Ta = function(a, b, e, d, f, n) {
        if (0 === e) return n ? a : b;
        var l = Math.sin(e);
        e = Math.cos(e);
        a -= d;
        b -= f;
        var t = a * l;
        a = a * e - b * l;
        b = b * e + t;
        return n ? a + d : b + f
    };
    Ua = function(a, b, e, d) {
        a = e - a;
        b = d - b;
        return Math.sqrt(a * a + b * b)
    };
    Va = function(a, b) {
        return !a !== !b
    };
    Wa = function(a) {
        for (var b in a)
            if (a.hasOwnProperty(b)) return !0;
        return !1
    };
    Ya = function(a) {
        for (var b in a) a.hasOwnProperty(b) && delete a[b]
    };
    var C = +new Date;
    Za = function() {
        if ("undefined" !== typeof window.performance) {
            var a = window.performance;
            if ("undefined" !== typeof a.now) return a.now();
            if ("undefined" !== typeof a.webkitNow) return a.webkitNow();
            if ("undefined" !== typeof a.mozNow) return a.mozNow();
            if ("undefined" !== typeof a.msNow) return a.msNow()
        }
        return Date.now() - C
    };
    var n = !1,
        t = n = !1,
        F = !1;
    "undefined" !== typeof window && (n = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), n = !n && /safari/i.test(navigator.userAgent), t = /(iphone|ipod|ipad)/i.test(navigator.userAgent), F = window.c2ejecta);
    var x = !n && !F && !t && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    k.prototype.contains = function(a) {
        return this.Oe() ? !1 : x ? this.Ac.has(a) : this.items && this.items.hasOwnProperty(a)
    };
    k.prototype.add = function(a) {
        if (x) this.Ac.has(a) || (this.Ac.add(a), this.wf = !1);
        else {
            var b = a.toString(),
                e = this.items;
            e ? e.hasOwnProperty(b) || (e[b] = a, this.Si++, this.wf = !1) : (this.items = {}, this.items[b] = a, this.Si = 1, this.wf = !1)
        }
    };
    k.prototype.remove = function(a) {
        if (!this.Oe())
            if (x) this.Ac.has(a) && (this.Ac["delete"](a), this.wf = !1);
            else if (this.items) {
            a = a.toString();
            var b = this.items;
            b.hasOwnProperty(a) && (delete b[a], this.Si--, this.wf = !1)
        }
    };
    k.prototype.clear = function() {
        this.Oe() || (x ? this.Ac.clear() : (this.items = null, this.Si = 0), A(this.Wh), this.wf = !0)
    };
    k.prototype.Oe = function() {
        return 0 === this.count()
    };
    k.prototype.count = function() {
        return x ? this.Ac.size : this.Si
    };
    var B = null,
        L = 0;
    k.prototype.cA = function() {
        if (!this.wf) {
            if (x) A(this.Wh), B = this.Wh, L = 0, this.Ac.forEach(m), B = null, L = 0;
            else {
                var a = this.Wh;
                A(a);
                var b, e = 0,
                    d = this.items;
                if (d)
                    for (b in d) d.hasOwnProperty(b) && (a[e++] = d[b])
            }
            this.wf = !0
        }
    };
    k.prototype.Xf = function() {
        this.cA();
        return this.Wh
    };
    ea = k;
    new ea;
    $a = function(a, b) {
        x ? ab(a, b.Ac) : bb(a, b.Xf())
    };
    ab = function(a, b) {
        var e, d, f, n;
        d = e = 0;
        for (f = a.length; e < f; ++e) n = a[e], b.has(n) || (a[d++] = n);
        Ca(a, d)
    };
    bb = function(a, b) {
        var e, d, f, n;
        d = e = 0;
        for (f = a.length; e < f; ++e) n = a[e], -1 === Fa(b, n) && (a[d++] = n);
        Ca(a, d)
    };
    r.prototype.add = function(a) {
        this.y = a - this.ii;
        this.Qh = this.ta + this.y;
        this.ii = this.Qh - this.ta - this.y;
        this.ta = this.Qh
    };
    r.prototype.reset = function() {
        this.ta = this.Qh = this.y = this.ii = 0
    };
    cb = r;
    db = function(a) {
        return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    };
    p.prototype.Aj = function(a) {
        this.dt = a;
        this.Md = a.length / 2;
        this.Lb.length = a.length;
        this.wk = this.xk = -1;
        this.Pq = 0
    };
    p.prototype.gh = function() {
        return !this.dt.length
    };
    p.prototype.Ka = function() {
        for (var a = this.Lb, b = a[0], e = b, d = a[1], f = d, n, l, t = 1, y = this.Md; t < y; ++t) l = 2 * t, n = a[l], l = a[l + 1], n < b && (b = n), n > e && (e = n), l < d && (d = l), l > f && (f = l);
        this.sk = b;
        this.tk = e;
        this.uk = d;
        this.rk = f
    };
    p.prototype.zj = function(a, b, e) {
        this.Lb.length = 8;
        this.Md = 4;
        var d = this.Lb;
        d[0] = a.left - b;
        d[1] = a.top - e;
        d[2] = a.right - b;
        d[3] = a.top - e;
        d[4] = a.right - b;
        d[5] = a.bottom - e;
        d[6] = a.left - b;
        d[7] = a.bottom - e;
        this.xk = a.right - a.left;
        this.wk = a.bottom - a.top;
        this.Ka()
    };
    p.prototype.Mh = function(a, b, e, d, f) {
        this.Lb.length = 8;
        this.Md = 4;
        var n = this.Lb;
        n[0] = a.Na - b;
        n[1] = a.Oa - e;
        n[2] = a.ob - b;
        n[3] = a.pb - e;
        n[4] = a.ib - b;
        n[5] = a.jb - e;
        n[6] = a.gb - b;
        n[7] = a.hb - e;
        this.xk = d;
        this.wk = f;
        this.Ka()
    };
    p.prototype.Bt = function(a) {
        this.Md = a.Md;
        Da(this.Lb, a.Lb);
        this.sk = a.sk;
        this.uk - a.uk;
        this.tk = a.tk;
        this.rk = a.rk
    };
    p.prototype.Sg = function(a, b, e) {
        if (this.xk !== a || this.wk !== b || this.Pq !== e) {
            this.xk = a;
            this.wk = b;
            this.Pq = e;
            var d, f, n, l, t, y = 0,
                q = 1,
                c = this.dt,
                w = this.Lb;
            0 !== e && (y = Math.sin(e), q = Math.cos(e));
            e = 0;
            for (n = this.Md; e < n; e++) d = 2 * e, f = d + 1, l = c[d] * a, t = c[f] * b, w[d] = l * q - t * y, w[f] = t * q + l * y;
            this.Ka()
        }
    };
    p.prototype.$b = function(a, b) {
        var e = this.Lb;
        if (a === e[0] && b === e[1]) return !0;
        var d, f, n, l = this.Md,
            t = this.sk - 110,
            y = this.uk - 101,
            q = this.tk + 131,
            c = this.rk + 120,
            w, m, k = 0,
            h = 0;
        for (d = 0; d < l; d++) f = 2 * d, n = (d + 1) % l * 2, w = e[f], f = e[f + 1], m = e[n], n = e[n + 1], wa(t, y, a, b, w, f, m, n) && k++, wa(q, c, a, b, w, f, m, n) && h++;
        return 1 === k % 2 || 1 === h % 2
    };
    p.prototype.Ii = function(a, b, e) {
        var d = a.Lb,
            f = this.Lb;
        if (this.$b(d[0] + b, d[1] + e) || a.$b(f[0] - b, f[1] - e)) return !0;
        var n, l, t, y, q, c, w, m, k, h, g, F;
        n = 0;
        for (y = this.Md; n < y; n++)
            for (l = 2 * n, t = (n + 1) % y * 2, m = f[l], l = f[l + 1], k = f[t], h = f[t + 1], t = 0, w = a.Md; t < w; t++)
                if (q = 2 * t, c = (t + 1) % w * 2, g = d[q] + b, q = d[q + 1] + e, F = d[c] + b, c = d[c + 1] + e, wa(m, l, k, h, g, q, F, c)) return !0;
        return !1
    };
    eb = p;
    b.prototype.Hf = function(a, b, e) {
        var d;
        d = this.cells[a];
        return d ? (d = d[b]) ? d : e ? (d = f(this, a, b), this.cells[a][b] = d) : null : e ? (d = f(this, a, b), this.cells[a] = {}, this.cells[a][b] = d) : null
    };
    b.prototype.uc = function(a) {
        return ua(a / this.mn)
    };
    b.prototype.vc = function(a) {
        return ua(a / this.ln)
    };
    b.prototype.update = function(a, b, e) {
        var d, f, n, l, t;
        if (b)
            for (d = b.left, f = b.right; d <= f; ++d)
                for (n = b.top, l = b.bottom; n <= l; ++n)
                    if (!e || !e.$b(d, n))
                        if (t = this.Hf(d, n, !1)) t.remove(a), t.Oe() && (t.Ob.clear(), 1E3 > u.length && u.push(t), this.cells[d][n] = null);
        if (e)
            for (d = e.left, f = e.right; d <= f; ++d)
                for (n = e.top, l = e.bottom; n <= l; ++n) b && b.$b(d, n) || this.Hf(d, n, !0).io(a)
    };
    b.prototype.Zl = function(a, b) {
        var e, d, f, n, l, t;
        e = this.uc(a.left);
        f = this.vc(a.top);
        d = this.uc(a.right);
        for (l = this.vc(a.bottom); e <= d; ++e)
            for (n = f; n <= l; ++n)(t = this.Hf(e, n, !1)) && t.dump(b)
    };
    hb = b;
    d.prototype.Hf = function(a, b, d) {
        var f;
        f = this.cells[a];
        return f ? (f = f[b]) ? f : d ? (f = e(this, a, b), this.cells[a][b] = f) : null : d ? (f = e(this, a, b), this.cells[a] = {}, this.cells[a][b] = f) : null
    };
    d.prototype.uc = function(a) {
        return ua(a / this.mn)
    };
    d.prototype.vc = function(a) {
        return ua(a / this.ln)
    };
    d.prototype.update = function(a, b, e) {
        var d, f, n, l, t;
        if (b)
            for (d = b.left, f = b.right; d <= f; ++d)
                for (n = b.top, l = b.bottom; n <= l; ++n)
                    if (!e || !e.$b(d, n))
                        if (t = this.Hf(d, n, !1)) t.remove(a), t.Oe() && (t.reset(), 1E3 > v.length && v.push(t), this.cells[d][n] = null);
        if (e)
            for (d = e.left, f = e.right; d <= f; ++d)
                for (n = e.top, l = e.bottom; n <= l; ++n) b && b.$b(d, n) || this.Hf(d, n, !0).io(a)
    };
    d.prototype.Zl = function(a, b, e, d, f) {
        var n, l;
        a = this.uc(a);
        b = this.vc(b);
        e = this.uc(e);
        for (n = this.vc(d); a <= e; ++a)
            for (d = b; d <= n; ++d)(l = this.Hf(a, d, !1)) && l.dump(f)
    };
    d.prototype.Oy = function(a) {
        var b, e, d, f, n;
        b = a.left;
        d = a.top;
        e = a.right;
        for (f = a.bottom; b <= e; ++b)
            for (a = d; a <= f; ++a)
                if (n = this.Hf(b, a, !1)) n.kh = !1
    };
    ib = d;
    var u = [];
    a.prototype.Oe = function() {
        return this.Ob.Oe()
    };
    a.prototype.io = function(a) {
        this.Ob.add(a)
    };
    a.prototype.remove = function(a) {
        this.Ob.remove(a)
    };
    a.prototype.dump = function(a) {
        Ea(a, this.Ob.Xf())
    };
    ca = a;
    var v = [];
    l.prototype.Oe = function() {
        if (!this.Ob.length) return !0;
        if (this.Ob.length > this.me.count()) return !1;
        this.Jn();
        return !0
    };
    l.prototype.io = function(a) {
        this.me.contains(a) ? (this.me.remove(a), this.me.Oe() && (this.fi = !1)) : this.Ob.length ? (this.Ob[this.Ob.length - 1].ee() > a.ee() && (this.kh = !1), this.Ob.push(a)) : (this.Ob.push(a), this.kh = !0)
    };
    l.prototype.remove = function(a) {
        this.me.add(a);
        this.fi = !0;
        30 <= this.me.count() && this.Jn()
    };
    l.prototype.Jn = function() {
        this.fi && (this.me.count() === this.Ob.length ? this.reset() : ($a(this.Ob, this.me), this.me.clear(), this.fi = !1))
    };
    l.prototype.Xw = function() {
        this.kh || (this.Ob.sort(q), this.kh = !0)
    };
    l.prototype.reset = function() {
        A(this.Ob);
        this.kh = !0;
        this.me.clear();
        this.fi = !1
    };
    l.prototype.dump = function(a) {
        this.Jn();
        this.Xw();
        this.Ob.length && a.push(this.Ob)
    };
    fa = l;
    var G = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    jb = function(a) {
        return 0 >= a || 11 <= a ? "source-over" : G[a - 1]
    };
    kb = function(a, b, e) {
        if (e) switch (a.mc = e.ONE, a.ac = e.ONE_MINUS_SRC_ALPHA, b) {
            case 1:
                a.mc = e.ONE;
                a.ac = e.ONE;
                break;
            case 3:
                a.mc = e.ONE;
                a.ac = e.ZERO;
                break;
            case 4:
                a.mc = e.ONE_MINUS_DST_ALPHA;
                a.ac = e.ONE;
                break;
            case 5:
                a.mc = e.DST_ALPHA;
                a.ac = e.ZERO;
                break;
            case 6:
                a.mc = e.ZERO;
                a.ac = e.SRC_ALPHA;
                break;
            case 7:
                a.mc = e.ONE_MINUS_DST_ALPHA;
                a.ac = e.ZERO;
                break;
            case 8:
                a.mc = e.ZERO;
                a.ac = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.mc = e.DST_ALPHA;
                a.ac = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.mc = e.ONE_MINUS_DST_ALPHA, a.ac = e.SRC_ALPHA
        }
    };
    lb = function(a) {
        return Math.round(1E6 * a) / 1E6
    };
    mb = function(a, b) {
        return "string" !== typeof a || "string" !== typeof b || a.length !== b.length ? !1 : a === b ? !0 : a.toLowerCase() === b.toLowerCase()
    };
    nb = function(a) {
        a = a.target;
        return !a || a === document || a === window || document && document.body && a === document.body || mb(a.tagName, "canvas") ? !0 : !1
    }
})();
var kc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function lc(h) {
    var g = new kc(3);
    h && (g[0] = h[0], g[1] = h[1], g[2] = h[2]);
    return g
}

function mc(h) {
    var g = new kc(16);
    h && (g[0] = h[0], g[1] = h[1], g[2] = h[2], g[3] = h[3], g[4] = h[4], g[5] = h[5], g[6] = h[6], g[7] = h[7], g[8] = h[8], g[9] = h[9], g[10] = h[10], g[11] = h[11], g[12] = h[12], g[13] = h[13], g[14] = h[14], g[15] = h[15]);
    return g
}

function nc(h, g) {
    g[0] = h[0];
    g[1] = h[1];
    g[2] = h[2];
    g[3] = h[3];
    g[4] = h[4];
    g[5] = h[5];
    g[6] = h[6];
    g[7] = h[7];
    g[8] = h[8];
    g[9] = h[9];
    g[10] = h[10];
    g[11] = h[11];
    g[12] = h[12];
    g[13] = h[13];
    g[14] = h[14];
    g[15] = h[15]
}

function oc(h, g) {
    var c = g[0],
        k = g[1];
    g = g[2];
    h[0] *= c;
    h[1] *= c;
    h[2] *= c;
    h[3] *= c;
    h[4] *= k;
    h[5] *= k;
    h[6] *= k;
    h[7] *= k;
    h[8] *= g;
    h[9] *= g;
    h[10] *= g;
    h[11] *= g
}

function pc(h, g, c, k) {
    k || (k = mc());
    var m, r, p, b, d, f, a, e, l = h[0],
        q = h[1];
    h = h[2];
    r = c[0];
    p = c[1];
    m = c[2];
    c = g[1];
    f = g[2];
    l === g[0] && q === c && h === f ? (h = k, h[0] = 1, h[1] = 0, h[2] = 0, h[3] = 0, h[4] = 0, h[5] = 1, h[6] = 0, h[7] = 0, h[8] = 0, h[9] = 0, h[10] = 1, h[11] = 0, h[12] = 0, h[13] = 0, h[14] = 0, h[15] = 1) : (c = l - g[0], f = q - g[1], a = h - g[2], e = 1 / Math.sqrt(c * c + f * f + a * a), c *= e, f *= e, a *= e, g = p * a - m * f, m = m * c - r * a, r = r * f - p * c, (e = Math.sqrt(g * g + m * m + r * r)) ? (e = 1 / e, g *= e, m *= e, r *= e) : r = m = g = 0, p = f * r - a * m, b = a * g - c * r, d = c * m - f * g, (e = Math.sqrt(p * p + b * b + d * d)) ? (e = 1 / e, p *= e, b *= e, d *= e) : d = b = p = 0, k[0] = g, k[1] = p, k[2] = c, k[3] = 0, k[4] = m, k[5] = b, k[6] = f, k[7] = 0, k[8] = r, k[9] = d, k[10] = a, k[11] = 0, k[12] = -(g * l + m * q + r * h), k[13] = -(p * l + b * q + d * h), k[14] = -(c * l + f * q + a * h), k[15] = 1)
}
(function() {
    function h(b, d, f) {
        this.Pe = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.Qa = !!f;
        this.il = this.Ji = !1;
        this.vn = 0;
        this.Hm = 1;
        this.Xp = 1E3;
        this.jA = (this.Xp - this.Hm) / 32768;
        this.jn = lc([0, 0, 100]);
        this.bs = lc([0, 0, 0]);
        this.Xt = lc([0, 1, 0]);
        this.$j = lc([1, 1, 1]);
        this.$q = !0;
        this.Dl = mc();
        this.Zc = mc();
        this.wo = mc();
        this.un = mc();
        this.G = b;
        this.version = 0 === this.G.getParameter(this.G.VERSION).indexOf("WebGL 2") ? 2 : 1;
        this.Fr()
    }

    function g(b, d, f) {
        this.G = b;
        this.Bj = d;
        this.name = f;
        this.md = b.getAttribLocation(d, "aPos");
        this.Rf = b.getAttribLocation(d, "aTex");
        this.$r = b.getUniformLocation(d, "matP");
        this.zl = b.getUniformLocation(d, "matMV");
        this.vh = b.getUniformLocation(d, "opacity");
        this.Go = b.getUniformLocation(d, "colorFill");
        this.as = b.getUniformLocation(d, "samplerFront");
        this.Zi = b.getUniformLocation(d, "samplerBack");
        this.Ag = b.getUniformLocation(d, "destStart");
        this.zg = b.getUniformLocation(d, "destEnd");
        this.aj = b.getUniformLocation(d, "seconds");
        this.Io = b.getUniformLocation(d, "pixelWidth");
        this.Ho = b.getUniformLocation(d, "pixelHeight");
        this.Yi = b.getUniformLocation(d, "layerScale");
        this.Xi = b.getUniformLocation(d, "layerAngle");
        this.bj = b.getUniformLocation(d, "viewOrigin");
        this.$i = b.getUniformLocation(d, "scrollPos");
        this.qy = !!(this.Io || this.Ho || this.aj || this.Zi || this.Ag || this.zg || this.Yi || this.Xi || this.bj || this.$i);
        this.ls = this.ms = -999;
        this.Cl = 1;
        this.gs = this.es = 0;
        this.js = this.ds = this.cs = 1;
        this.qs = this.os = this.ns = this.ss = this.rs = this.hs = 0;
        this.vo = [];
        this.ks = mc();
        this.vh && b.uniform1f(this.vh, 1);
        this.Go && b.uniform4f(this.Go, 1, 1, 1, 1);
        this.as && b.uniform1i(this.as, 0);
        this.Zi && b.uniform1i(this.Zi, 1);
        this.Ag && b.uniform2f(this.Ag, 0, 0);
        this.zg && b.uniform2f(this.zg, 1, 1);
        this.Yi && b.uniform1f(this.Yi, 1);
        this.Xi && b.uniform1f(this.Xi, 0);
        this.bj && b.uniform2f(this.bj, 0, 0);
        this.$i && b.uniform2f(this.$i, 0, 0);
        this.aj && b.uniform1f(this.aj, 0);
        this.pg = !1
    }

    function c(b, d) {
        return b[0] === d[0] && b[1] === d[1] && b[2] === d[2] && b[3] === d[3] && b[4] === d[4] && b[5] === d[5] && b[6] === d[6] && b[7] === d[7] && b[8] === d[8] && b[9] === d[9] && b[10] === d[10] && b[11] === d[11] && b[12] === d[12] && b[13] === d[13] && b[14] === d[14] && b[15] === d[15]
    }

    function k(b, d) {
        this.type = b;
        this.u = d;
        this.G = d.G;
        this.fe = this.tc = this.Qs = 0;
        this.ca = this.yd = null;
        this.Dt = []
    }
    var m = mc();
    h.prototype.Fr = function() {
        var b = this.G,
            d;
        this.Ur = 1;
        this.ug = this.Of = null;
        this.Ik = 1;
        b.clearColor(0, 0, 0, 0);
        b.clear(b.COLOR_BUFFER_BIT);
        b.enable(b.BLEND);
        b.blendFunc(b.ONE, b.ONE_MINUS_SRC_ALPHA);
        b.disable(b.CULL_FACE);
        b.disable(b.STENCIL_TEST);
        b.disable(b.DITHER);
        this.Qa ? (b.enable(b.DEPTH_TEST), b.depthFunc(b.LEQUAL)) : b.disable(b.DEPTH_TEST);
        this.Vr = b.ONE;
        this.Tr = b.ONE_MINUS_SRC_ALPHA;
        this.Em = new Float32Array(8E3 * (this.Qa ? 3 : 2));
        this.tm = new Float32Array(16E3);
        this.$s = new Float32Array(32E3);
        this.dp = b.createBuffer();
        b.bindBuffer(b.ARRAY_BUFFER, this.dp);
        b.bufferData(b.ARRAY_BUFFER, this.$s.byteLength, b.DYNAMIC_DRAW);
        this.Vj = Array(4);
        this.Ij = Array(4);
        for (d = 0; 4 > d; d++) this.Vj[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Vj[d]), b.bufferData(b.ARRAY_BUFFER, this.Em.byteLength, b.DYNAMIC_DRAW), this.Ij[d] = b.createBuffer(), b.bindBuffer(b.ARRAY_BUFFER, this.Ij[d]), b.bufferData(b.ARRAY_BUFFER, this.tm.byteLength, b.DYNAMIC_DRAW);
        this.Ce = 0;
        this.uy = b.createBuffer();
        b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, this.uy);
        for (var f = new Uint16Array(12E3), a = d = 0; 12E3 > d;) f[d++] = a, f[d++] = a + 1, f[d++] = a + 2, f[d++] = a, f[d++] = a + 2, f[d++] = a + 3, a += 4;
        b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, b.STATIC_DRAW);
        this.ep = this.Rh = this.lf = 0;
        this.cb = [];
        d = this.Qa ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" : "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        f = this.li({
            src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
        }, d, "<default>");
        this.cb.push(f);
        f = this.li({
            src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
        }, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.cb.push(f);
        f = this.li({
            src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}"
        }, d, "<earlyz>");
        this.cb.push(f);
        f = this.li({
            src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}"
        }, d, "<fill>");
        this.cb.push(f);
        for (var e in qc) qc.hasOwnProperty(e) && this.cb.push(this.li(qc[e], d, e));
        b.activeTexture(b.TEXTURE0);
        b.bindTexture(b.TEXTURE_2D, null);
        this.vf = [];
        this.Ae = 0;
        this.fc = !1;
        this.Vq = this.Ti = -1;
        this.Vg = null;
        this.Gn = b.createFramebuffer();
        this.Mk = this.am = null;
        this.Jq = !1;
        this.Qa && (this.Mk = b.createRenderbuffer());
        this.Wf = lc([0, 0, 0]);
        this.ts = b.getParameter(b.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.ts && (this.ts = 2048);
        this.Bc(0)
    };
    g.prototype.Qp = function(b) {
        c(this.ks, b) || (nc(b, this.ks), this.G.uniformMatrix4fv(this.zl, !1, b))
    };
    h.prototype.li = function(b, d, f) {
        var a = this.G,
            e = a.createShader(a.FRAGMENT_SHADER);
        a.shaderSource(e, b.src);
        a.compileShader(e);
        if (!a.getShaderParameter(e, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(e), a.deleteShader(e), Error("error compiling fragment shader: " + b);
        var l = a.createShader(a.VERTEX_SHADER);
        a.shaderSource(l, d);
        a.compileShader(l);
        if (!a.getShaderParameter(l, a.COMPILE_STATUS)) throw b = a.getShaderInfoLog(l), a.deleteShader(e), a.deleteShader(l), Error("error compiling vertex shader: " + b);
        d = a.createProgram();
        a.attachShader(d, e);
        a.attachShader(d, l);
        a.linkProgram(d);
        if (!a.getProgramParameter(d, a.LINK_STATUS)) throw b = a.getProgramInfoLog(d), a.deleteShader(e), a.deleteShader(l), a.deleteProgram(d), Error("error linking shader program: " + b);
        a.useProgram(d);
        a.deleteShader(e);
        a.deleteShader(l);
        e = new g(a, d, f);
        e.si = b.si || 0;
        e.ti = b.ti || 0;
        e.Fk = !!b.Fk;
        e.$c = !!b.$c;
        e.ok = !!b.ok;
        e.W = b.W || [];
        b = 0;
        for (l = e.W.length; b < l; b++) e.W[b][1] = a.getUniformLocation(d, e.W[b][0]), e.vo.push(0), a.uniform1f(e.W[b][1], 0);
        return e
    };
    h.prototype.Xn = function(b) {
        var d, f;
        d = 0;
        for (f = this.cb.length; d < f; d++)
            if (this.cb[d].name === b) return d;
        return -1
    };
    h.prototype.ct = function(b, d, f) {
        var a = this.Zc,
            e = this.Dl,
            l = [0, 0, 0, 0, 0, 0, 0, 0];
        l[0] = a[0] * b + a[4] * d + a[12];
        l[1] = a[1] * b + a[5] * d + a[13];
        l[2] = a[2] * b + a[6] * d + a[14];
        l[3] = a[3] * b + a[7] * d + a[15];
        l[4] = e[0] * l[0] + e[4] * l[1] + e[8] * l[2] + e[12] * l[3];
        l[5] = e[1] * l[0] + e[5] * l[1] + e[9] * l[2] + e[13] * l[3];
        l[6] = e[2] * l[0] + e[6] * l[1] + e[10] * l[2] + e[14] * l[3];
        l[7] = -l[2];
        0 !== l[7] && (l[7] = 1 / l[7], l[4] *= l[7], l[5] *= l[7], l[6] *= l[7], f[0] = (.5 * l[4] +
            .5) * this.width, f[1] = (.5 * l[5] + .5) * this.height)
    };
    h.prototype.bf = function(b, d, f) {
        if (this.width !== b || this.height !== d || f) {
            this.Ff();
            f = this.G;
            this.width = b;
            this.height = d;
            f.viewport(0, 0, b, d);
            pc(this.jn, this.bs, this.Xt, this.Zc);
            if (this.Qa) {
                var a = -b / 2;
                b = b / 2;
                var e = d / 2;
                d = -d / 2;
                var l = this.Hm,
                    q = this.Xp,
                    c = this.Dl;
                c || (c = mc());
                var m = b - a,
                    k = d - e,
                    n = q - l;
                c[0] = 2 / m;
                c[1] = 0;
                c[2] = 0;
                c[3] = 0;
                c[4] = 0;
                c[5] = 2 / k;
                c[6] = 0;
                c[7] = 0;
                c[8] = 0;
                c[9] = 0;
                c[10] = -2 / n;
                c[11] = 0;
                c[12] = -(a + b) / m;
                c[13] = -(d + e) / k;
                c[14] = -(q + l) / n;
                c[15] = 1;
                this.$j[0] = 1;
                this.$j[1] = 1
            } else d = b / d, a = this.Hm, b = this.Xp, c = this.Dl, q = a * Math.tan(45 * Math.PI / 360), d *= q, e = -d, l = -q, c || (c = mc()), m = d - e, k = q - l, n = b - a, c[0] = 2 * a / m, c[1] = 0, c[2] = 0, c[3] = 0, c[4] = 0, c[5] = 2 * a / k, c[6] = 0, c[7] = 0, c[8] = (d + e) / m, c[9] = (q + l) / k, c[10] = -(b + a) / n, c[11] = -1, c[12] = 0, c[13] = 0, c[14] = -(b * a * 2) / n, c[15] = 0, a = [0, 0], b = [0, 0], this.ct(0, 0, a), this.ct(1, 1, b), this.$j[0] = 1 / (b[0] - a[0]), this.$j[1] = -1 / (b[1] - a[1]);
            a = 0;
            for (b = this.cb.length; a < b; a++) e = this.cb[a], e.pg = !1, e.$r && (f.useProgram(e.Bj), f.uniformMatrix4fv(e.$r, !1, this.Dl));
            f.useProgram(this.cb[this.Ti].Bj);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE1);
            f.bindTexture(f.TEXTURE_2D, null);
            f.activeTexture(f.TEXTURE0);
            this.ug = this.Of = null;
            this.Mk && (f.bindFramebuffer(f.FRAMEBUFFER, this.Gn), f.bindRenderbuffer(f.RENDERBUFFER, this.Mk), f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_COMPONENT16, this.width, this.height), this.Jq || (f.framebufferRenderbuffer(f.FRAMEBUFFER, f.DEPTH_ATTACHMENT, f.RENDERBUFFER, this.Mk), this.Jq = !0), f.bindRenderbuffer(f.RENDERBUFFER, null), f.bindFramebuffer(f.FRAMEBUFFER, null), this.am = null)
        }
    };
    h.prototype.vd = function() {
        pc(this.jn, this.bs, this.Xt, this.Zc);
        oc(this.Zc, this.$j)
    };
    h.prototype.translate = function(b, d) {
        if (0 !== b || 0 !== d) {
            this.Wf[0] = b;
            this.Wf[1] = d;
            this.Wf[2] = 0;
            var f = this.Zc,
                a = this.Wf,
                e = a[0],
                l = a[1],
                a = a[2];
            f[12] = f[0] * e + f[4] * l + f[8] * a + f[12];
            f[13] = f[1] * e + f[5] * l + f[9] * a + f[13];
            f[14] = f[2] * e + f[6] * l + f[10] * a + f[14];
            f[15] = f[3] * e + f[7] * l + f[11] * a + f[15]
        }
    };
    h.prototype.scale = function(b, d) {
        if (1 !== b || 1 !== d) this.Wf[0] = b, this.Wf[1] = d, this.Wf[2] = 1, oc(this.Zc, this.Wf)
    };
    h.prototype.dm = function(b) {
        if (0 !== b) {
            var d = this.Zc,
                f, a = Math.sin(b);
            b = Math.cos(b);
            var e = d[0],
                l = d[1],
                q = d[2],
                c = d[3],
                m = d[4],
                k = d[5],
                n = d[6],
                t = d[7];
            f ? d !== f && (f[8] = d[8], f[9] = d[9], f[10] = d[10], f[11] = d[11], f[12] = d[12], f[13] = d[13], f[14] = d[14], f[15] = d[15]) : f = d;
            f[0] = e * b + m * a;
            f[1] = l * b + k * a;
            f[2] = q * b + n * a;
            f[3] = c * b + t * a;
            f[4] = e * -a + m * b;
            f[5] = l * -a + k * b;
            f[6] = q * -a + n * b;
            f[7] = c * -a + t * b
        }
    };
    h.prototype.dd = function() {
        if (!c(this.wo, this.Zc)) {
            var b = this.Nc();
            b.type = 5;
            b.ca ? nc(this.Zc, b.ca) : b.ca = mc(this.Zc);
            nc(this.Zc, this.wo);
            this.fc = !1
        }
    };
    h.prototype.im = function(b) {
        this.Qa && (32760 < b && (b = 32760), this.vn = this.jn[2] - this.Hm - b * this.jA)
    };
    k.prototype.Hw = function() {
        var b = this.G,
            d = this.u;
        0 !== this.tc ? (b.depthMask(!0), b.colorMask(!1, !1, !1, !1), b.disable(b.BLEND), b.bindFramebuffer(b.FRAMEBUFFER, d.Gn), b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.clear(b.DEPTH_BUFFER_BIT), b.bindFramebuffer(b.FRAMEBUFFER, null), d.il = !0) : (b.depthMask(!1), b.colorMask(!0, !0, !0, !0), b.enable(b.BLEND), d.il = !1)
    };
    k.prototype.Lw = function() {
        this.G.bindTexture(this.G.TEXTURE_2D, this.yd)
    };
    k.prototype.Mw = function() {
        var b = this.G;
        b.activeTexture(b.TEXTURE1);
        b.bindTexture(b.TEXTURE_2D, this.yd);
        b.activeTexture(b.TEXTURE0)
    };
    k.prototype.Iw = function() {
        var b = this.Qs,
            d = this.u;
        d.Ik = b;
        d = d.Vg;
        d.vh && d.Cl !== b && (d.Cl = b, this.G.uniform1f(d.vh, b))
    };
    k.prototype.Cw = function() {
        this.G.drawElements(this.G.TRIANGLES, this.fe, this.G.UNSIGNED_SHORT, this.tc)
    };
    k.prototype.Ew = function() {
        this.G.blendFunc(this.tc, this.fe)
    };
    k.prototype.Nw = function() {
        var b, d, f, a = this.u.cb,
            e = this.u.Vq;
        b = 0;
        for (d = a.length; b < d; b++) f = a[b], b === e && f.zl ? (f.Qp(this.ca), f.pg = !0) : f.pg = !1;
        nc(this.ca, this.u.un)
    };
    k.prototype.Dw = function() {
        var b = this.G,
            d = this.u;
        this.yd ? (d.ug === this.yd && (b.activeTexture(b.TEXTURE1), b.bindTexture(b.TEXTURE_2D, null), d.ug = null, b.activeTexture(b.TEXTURE0)), b.bindFramebuffer(b.FRAMEBUFFER, d.Gn), d.il || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, this.yd, 0)) : (d.Qa || b.framebufferTexture2D(b.FRAMEBUFFER, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0), b.bindFramebuffer(b.FRAMEBUFFER, null))
    };
    k.prototype.zw = function() {
        var b = this.G,
            d = this.tc;
        0 === d ? (b.clearColor(this.ca[0], this.ca[1], this.ca[2], this.ca[3]), b.clear(b.COLOR_BUFFER_BIT)) : 1 === d ? (b.enable(b.SCISSOR_TEST), b.scissor(this.ca[0], this.ca[1], this.ca[2], this.ca[3]), b.clearColor(0, 0, 0, 0), b.clear(b.COLOR_BUFFER_BIT), b.disable(b.SCISSOR_TEST)) : b.clear(b.DEPTH_BUFFER_BIT)
    };
    k.prototype.Gw = function() {
        var b = this.G;
        0 !== this.tc ? b.enable(b.DEPTH_TEST) : b.disable(b.DEPTH_TEST)
    };
    k.prototype.Bw = function() {
        var b = this.G,
            d = this.u;
        d.Qa && b.disable(b.DEPTH_TEST);
        var f = d.cb[1];
        b.useProgram(f.Bj);
        !f.pg && f.zl && (f.Qp(d.un), f.pg = !0);
        b.enableVertexAttribArray(f.md);
        b.bindBuffer(b.ARRAY_BUFFER, d.dp);
        b.vertexAttribPointer(f.md, 4, b.FLOAT, !1, 0, 0);
        b.drawArrays(b.POINTS, this.tc / 4, this.fe);
        f = d.Vg;
        b.useProgram(f.Bj);
        0 <= f.md && (b.enableVertexAttribArray(f.md), b.bindBuffer(b.ARRAY_BUFFER, d.Vj[d.Ce]), b.vertexAttribPointer(f.md, d.Qa ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= f.Rf && (b.enableVertexAttribArray(f.Rf), b.bindBuffer(b.ARRAY_BUFFER, d.Ij[d.Ce]), b.vertexAttribPointer(f.Rf, 2, b.FLOAT, !1, 0, 0));
        d.Qa && b.enable(b.DEPTH_TEST)
    };
    k.prototype.Jw = function() {
        var b = this.G,
            d = this.u,
            f = d.cb[this.tc];
        d.Vq = this.tc;
        d.Vg = f;
        b.useProgram(f.Bj);
        !f.pg && f.zl && (f.Qp(d.un), f.pg = !0);
        f.vh && f.Cl !== d.Ik && (f.Cl = d.Ik, b.uniform1f(f.vh, d.Ik));
        0 <= f.md && (b.enableVertexAttribArray(f.md), b.bindBuffer(b.ARRAY_BUFFER, d.Vj[d.Ce]), b.vertexAttribPointer(f.md, d.Qa ? 3 : 2, b.FLOAT, !1, 0, 0));
        0 <= f.Rf && (b.enableVertexAttribArray(f.Rf), b.bindBuffer(b.ARRAY_BUFFER, d.Ij[d.Ce]), b.vertexAttribPointer(f.Rf, 2, b.FLOAT, !1, 0, 0))
    };
    k.prototype.Fw = function() {
        var b = this.ca;
        this.G.uniform4f(this.u.Vg.Go, b[0], b[1], b[2], b[3])
    };
    k.prototype.Kw = function() {
        var b, d, f = this.u.Vg,
            a = this.G;
        b = this.ca;
        f.Zi && this.u.ug !== this.yd && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.yd), this.u.ug = this.yd, a.activeTexture(a.TEXTURE0));
        var e = b[0];
        f.Io && e !== f.ms && (f.ms = e, a.uniform1f(f.Io, e));
        e = b[1];
        f.Ho && e !== f.ls && (f.ls = e, a.uniform1f(f.Ho, e));
        e = b[2];
        d = b[3];
        !f.Ag || e === f.es && d === f.gs || (f.es = e, f.gs = d, a.uniform2f(f.Ag, e, d));
        e = b[4];
        d = b[5];
        !f.zg || e === f.cs && d === f.ds || (f.cs = e, f.ds = d, a.uniform2f(f.zg, e, d));
        e = b[6];
        f.Yi && e !== f.js && (f.js = e, a.uniform1f(f.Yi, e));
        e = b[7];
        f.Xi && e !== f.hs && (f.hs = e, a.uniform1f(f.Xi, e));
        e = b[8];
        d = b[9];
        !f.bj || e === f.rs && d === f.ss || (f.rs = e, f.ss = d, a.uniform2f(f.bj, e, d));
        e = b[10];
        d = b[11];
        !f.$i || e === f.ns && d === f.os || (f.ns = e, f.os = d, a.uniform2f(f.$i, e, d));
        e = b[12];
        f.aj && e !== f.qs && (f.qs = e, a.uniform1f(f.aj, e));
        if (f.W.length)
            for (b = 0, d = f.W.length; b < d; b++) e = this.Dt[b], e !== f.vo[b] && (f.vo[b] = e, a.uniform1f(f.W[b][1], e))
    };
    h.prototype.Nc = function() {
        this.Ae === this.vf.length && this.vf.push(new k(0, this));
        return this.vf[this.Ae++]
    };
    h.prototype.Ff = function() {
        if (0 !== this.Ae && !this.G.isContextLost()) {
            var b = this.G;
            0 < this.ep && (b.bindBuffer(b.ARRAY_BUFFER, this.dp), b.bufferSubData(b.ARRAY_BUFFER, 0, this.$s.subarray(0, this.ep)), d && 0 <= d.md && "<point>" === d.name && b.vertexAttribPointer(d.md, 4, b.FLOAT, !1, 0, 0));
            if (0 < this.lf) {
                var d = this.Vg;
                b.bindBuffer(b.ARRAY_BUFFER, this.Vj[this.Ce]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.Em.subarray(0, this.lf));
                d && 0 <= d.md && "<point>" !== d.name && b.vertexAttribPointer(d.md, this.Qa ? 3 : 2, b.FLOAT, !1, 0, 0);
                b.bindBuffer(b.ARRAY_BUFFER, this.Ij[this.Ce]);
                b.bufferSubData(b.ARRAY_BUFFER, 0, this.tm.subarray(0, this.Rh));
                d && 0 <= d.Rf && "<point>" !== d.name && b.vertexAttribPointer(d.Rf, 2, b.FLOAT, !1, 0, 0)
            }
            for (var f, b = 0, d = this.Ae; b < d; b++) switch (f = this.vf[b], f.type) {
                case 1:
                    f.Cw();
                    break;
                case 2:
                    f.Lw();
                    break;
                case 3:
                    f.Iw();
                    break;
                case 4:
                    f.Ew();
                    break;
                case 5:
                    f.Nw();
                    break;
                case 6:
                    f.Dw();
                    break;
                case 7:
                    f.zw();
                    break;
                case 8:
                    f.Bw();
                    break;
                case 9:
                    f.Jw();
                    break;
                case 10:
                    f.Kw();
                    break;
                case 11:
                    f.Mw();
                    break;
                case 12:
                    f.Fw();
                    break;
                case 13:
                    f.Gw();
                    break;
                case 14:
                    f.Hw()
            }
            this.ep = this.Rh = this.lf = this.Ae = 0;
            this.il = this.fc = !1;
            this.Ce++;
            4 <= this.Ce && (this.Ce = 0)
        }
    };
    h.prototype.$e = function(b) {
        if (b !== this.Ur && !this.Ji) {
            var d = this.Nc();
            d.type = 3;
            this.Ur = d.Qs = b;
            this.fc = !1
        }
    };
    h.prototype.kc = function(b) {
        if (b !== this.Of) {
            var d = this.Nc();
            d.type = 2;
            this.Of = d.yd = b;
            this.fc = !1
        }
    };
    h.prototype.Tf = function(b, d) {
        if ((b !== this.Vr || d !== this.Tr) && !this.Ji) {
            var f = this.Nc();
            f.type = 4;
            f.tc = b;
            f.fe = d;
            this.Vr = b;
            this.Tr = d;
            this.fc = !1
        }
    };
    h.prototype.pt = function() {
        this.Tf(this.G.ONE, this.G.ONE_MINUS_SRC_ALPHA)
    };
    h.prototype.sj = function(b, d, f, a, e, l, q, c) {
        15992 <= this.lf && this.Ff();
        var m = this.lf,
            k = this.Rh,
            n = this.Em,
            t = this.tm,
            h = this.vn;
        if (this.fc) this.vf[this.Ae - 1].fe += 6;
        else {
            var g = this.Nc();
            g.type = 1;
            g.tc = this.Qa ? m : m / 2 * 3;
            g.fe = 6;
            this.fc = !0
        }
        this.Qa ? (n[m++] = b, n[m++] = d, n[m++] = h, n[m++] = f, n[m++] = a, n[m++] = h, n[m++] = e, n[m++] = l, n[m++] = h, n[m++] = q, n[m++] = c, n[m++] = h) : (n[m++] = b, n[m++] = d, n[m++] = f, n[m++] = a, n[m++] = e, n[m++] = l, n[m++] = q, n[m++] = c);
        t[k++] = 0;
        t[k++] = 0;
        t[k++] = 1;
        t[k++] = 0;
        t[k++] = 1;
        t[k++] = 1;
        t[k++] = 0;
        t[k++] = 1;
        this.lf = m;
        this.Rh = k
    };
    h.prototype.ad = function(b, d, f, a, e, l, q, c, m) {
        15992 <= this.lf && this.Ff();
        var k = this.lf,
            n = this.Rh,
            t = this.Em,
            h = this.tm,
            g = this.vn;
        if (this.fc) this.vf[this.Ae - 1].fe += 6;
        else {
            var p = this.Nc();
            p.type = 1;
            p.tc = this.Qa ? k : k / 2 * 3;
            p.fe = 6;
            this.fc = !0
        }
        var p = m.left,
            r = m.top,
            u = m.right;
        m = m.bottom;
        this.Qa ? (t[k++] = b, t[k++] = d, t[k++] = g, t[k++] = f, t[k++] = a, t[k++] = g, t[k++] = e, t[k++] = l, t[k++] = g, t[k++] = q, t[k++] = c, t[k++] = g) : (t[k++] = b, t[k++] = d, t[k++] = f, t[k++] = a, t[k++] = e, t[k++] = l, t[k++] = q, t[k++] = c);
        h[n++] = p;
        h[n++] = r;
        h[n++] = u;
        h[n++] = r;
        h[n++] = u;
        h[n++] = m;
        h[n++] = p;
        h[n++] = m;
        this.lf = k;
        this.Rh = n
    };
    h.prototype.Bc = function(b) {
        if (this.Ti !== b) {
            if (!this.cb[b]) {
                if (0 === this.Ti) return;
                b = 0
            }
            var d = this.Nc();
            d.type = 9;
            this.Ti = d.tc = b;
            this.fc = !1
        }
    };
    h.prototype.pj = function(b) {
        b = this.cb[b];
        return !(!b.Ag && !b.zg)
    };
    h.prototype.ip = function(b) {
        b = this.cb[b];
        return !!(b.Ag || b.zg || b.Fk)
    };
    h.prototype.hp = function(b) {
        return this.cb[b].$c
    };
    h.prototype.oz = function(b) {
        b = this.cb[b];
        return 0 !== b.si || 0 !== b.ti
    };
    h.prototype.Vx = function(b) {
        return this.cb[b].si
    };
    h.prototype.Wx = function(b) {
        return this.cb[b].ti
    };
    h.prototype.Xx = function(b, d) {
        return this.cb[b].W[d][2]
    };
    h.prototype.Xl = function(b) {
        return this.cb[b].ok
    };
    h.prototype.Lh = function(b, d, f, a, e, l, q, c, m, k, n, t, h, g, p) {
        var r = this.cb[this.Ti],
            u, v;
        if (r.qy || p.length) {
            u = this.Nc();
            u.type = 10;
            u.ca ? nc(this.Zc, u.ca) : u.ca = mc();
            v = u.ca;
            v[0] = d;
            v[1] = f;
            v[2] = a;
            v[3] = e;
            v[4] = l;
            v[5] = q;
            v[6] = c;
            v[7] = m;
            v[8] = k;
            v[9] = n;
            v[10] = t;
            v[11] = h;
            v[12] = g;
            r.Zi ? u.yd = b : u.yd = null;
            if (p.length)
                for (f = u.Dt, f.length = p.length, b = 0, d = p.length; b < d; b++) f[b] = p[b];
            this.fc = !1
        }
    };
    h.prototype.clear = function(b, d, f, a) {
        var e = this.Nc();
        e.type = 7;
        e.tc = 0;
        e.ca || (e.ca = mc());
        e.ca[0] = b;
        e.ca[1] = d;
        e.ca[2] = f;
        e.ca[3] = a;
        this.fc = !1
    };
    h.prototype.clearRect = function(b, d, f, a) {
        if (!(0 > f || 0 > a)) {
            var e = this.Nc();
            e.type = 7;
            e.tc = 1;
            e.ca || (e.ca = mc());
            e.ca[0] = b;
            e.ca[1] = d;
            e.ca[2] = f;
            e.ca[3] = a;
            this.fc = !1
        }
    };
    h.prototype.wt = function(b) {
        if (this.Qa && (b = !!b, this.Ji !== b)) {
            var d = this.Nc();
            d.type = 14;
            d.tc = b ? 1 : 0;
            this.fc = !1;
            this.Ji = b;
            this.am = null;
            this.Ji ? this.Bc(2) : this.Bc(0)
        }
    };
    h.prototype.tt = function(b) {
        if (this.Qa) {
            var d = this.Nc();
            d.type = 13;
            d.tc = b ? 1 : 0;
            this.fc = !1
        }
    };
    h.prototype.lr = function() {
        nc(this.wo, m);
        this.vd();
        this.dd();
        var b = this.width / 2,
            d = this.height / 2;
        this.sj(-b, d, b, d, b, -d, -b, -d);
        nc(m, this.Zc);
        this.dd()
    };
    h.prototype.qt = function(b, d, f) {
        this.Bc(3);
        var a = this.Nc();
        a.type = 12;
        a.ca || (a.ca = mc());
        a.ca[0] = b;
        a.ca[1] = d;
        a.ca[2] = f;
        a.ca[3] = 1;
        this.fc = !1
    };
    h.prototype.Qz = function() {
        this.Bc(0)
    };
    h.prototype.zz = function() {
        this.Bc(2)
    };
    h.prototype.nz = function() {
        this.Ff();
        this.G.flush()
    };
    var r = [],
        p = {};
    h.prototype.ow = function() {
        A(r);
        p = {}
    };
    h.prototype.Yc = function(b, d, f, a, e) {
        d = !!d;
        f = !!f;
        var l = b.src + "," + d + "," + f + (d ? "," + e : ""),
            q = null;
        if ("undefined" !== typeof b.src && p.hasOwnProperty(l)) return q = p[l], q.vk++, q;
        this.Ff();
        var c = this.G,
            m = ma(b.width) && ma(b.height),
            q = c.createTexture();
        c.bindTexture(c.TEXTURE_2D, q);
        c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var k = c.RGBA,
            n = c.RGBA,
            t = c.UNSIGNED_BYTE;
        if (a && !this.Pe) switch (a) {
            case 1:
                n = k = c.RGB;
                break;
            case 2:
                t = c.UNSIGNED_SHORT_4_4_4_4;
                break;
            case 3:
                t = c.UNSIGNED_SHORT_5_5_5_1;
                break;
            case 4:
                n = k = c.RGB, t = c.UNSIGNED_SHORT_5_6_5
        }
        if (1 === this.version && !m && d) {
            a = document.createElement("canvas");
            a.width = na(b.width);
            a.height = na(b.height);
            var h = a.getContext("2d");
            "undefined" !== typeof h.imageSmoothingEnabled ? h.imageSmoothingEnabled = f : (h.webkitImageSmoothingEnabled = f, h.mozImageSmoothingEnabled = f, h.msImageSmoothingEnabled = f);
            h.drawImage(b, 0, 0, b.width, b.height, 0, 0, a.width, a.height);
            c.texImage2D(c.TEXTURE_2D, 0, k, n, t, a)
        } else c.texImage2D(c.TEXTURE_2D, 0, k, n, t, b);
        d ? "repeat-x" === e ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE)) : ("repeat-y" === e ? c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE) : c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.REPEAT), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.REPEAT)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE));
        f ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.LINEAR), (m || 2 <= this.version) && this.$q ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR_MIPMAP_LINEAR), c.generateMipmap(c.TEXTURE_2D)) : c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.LINEAR)) : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST), c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST));
        c.bindTexture(c.TEXTURE_2D, null);
        this.Of = null;
        q.Gd = b.width;
        q.Fd = b.height;
        q.vk = 1;
        q.Oq = l;
        r.push(q);
        return p[l] = q
    };
    h.prototype.Qc = function(b, d, f, a) {
        this.Ff();
        var e = this.G;
        this.Pe && (a = !1);
        var c = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, c);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, b, d, 0, e.RGBA, a ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, f ? e.LINEAR : e.NEAREST);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, f ? e.LINEAR : e.NEAREST);
        e.bindTexture(e.TEXTURE_2D, null);
        this.Of = null;
        c.Gd = b;
        c.Fd = d;
        r.push(c);
        return c
    };
    h.prototype.hA = function(b, d, f) {
        this.Ff();
        var a = this.G;
        this.Pe && (f = !1);
        a.bindTexture(a.TEXTURE_2D, d);
        a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        try {
            a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, f ? a.UNSIGNED_SHORT_4_4_4_4 : a.UNSIGNED_BYTE, b)
        } catch (e) {
            console && console.error && console.error("Error updating WebGL texture: ", e)
        }
        a.bindTexture(a.TEXTURE_2D, null);
        this.Of = null
    };
    h.prototype.deleteTexture = function(b) {
        b && ("undefined" !== typeof b.vk && 1 < b.vk ? b.vk-- : (this.Ff(), b === this.Of && (this.G.bindTexture(this.G.TEXTURE_2D, null), this.Of = null), b === this.ug && (this.G.activeTexture(this.G.TEXTURE1), this.G.bindTexture(this.G.TEXTURE_2D, null), this.G.activeTexture(this.G.TEXTURE0), this.ug = null), Ga(r, b), "undefined" !== typeof b.Oq && delete p[b.Oq], this.G.deleteTexture(b)))
    };
    h.prototype.wd = function(b) {
        if (b !== this.am) {
            var d = this.Nc();
            d.type = 6;
            this.am = d.yd = b;
            this.fc = !1
        }
    };
    ob = h
})();
(function() {
    function h(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var b = this;
            this.Wc = (this.jl = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.ic = !!a.dc;
            this.Lr = "undefined" !== typeof window.AppMobi || this.ic;
            this.ld = !!window.c2cocoonjs;
            this.Jd = !!window.c2ejecta;
            this.ld && (CocoonJS.App.onSuspended.addEventListener(function() {
                b.setSuspended(!0)
            }), CocoonJS.App.onActivated.addEventListener(function() {
                b.setSuspended(!1)
            }));
            this.Jd && (document.addEventListener("pagehide", function() {
                b.setSuspended(!0)
            }), document.addEventListener("pageshow", function() {
                b.setSuspended(!1)
            }), document.addEventListener("resize", function() {
                b.setSize(window.innerWidth, window.innerHeight)
            }));
            this.lb = this.ic || this.ld || this.Jd;
            this.Li = /edge\//i.test(navigator.userAgent);
            this.Pe = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Li;
            this.Nr = /tizen/i.test(navigator.userAgent);
            this.gl = /android/i.test(navigator.userAgent) && !this.Nr && !this.Pe && !this.Li;
            this.Rr = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Pe && !this.Li;
            this.Jy = /ipad/i.test(navigator.userAgent);
            this.nh = this.Rr || this.Jy || this.Jd;
            this.lo = (/chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent)) && !this.Pe && !this.Li;
            this.Kr = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Ay = /firefox/i.test(navigator.userAgent);
            this.Dy = /safari/i.test(navigator.userAgent) && !this.lo && !this.Pe && !this.Li;
            this.Ey = /windows/i.test(navigator.userAgent);
            this.kl = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Pr = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Gy = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.Oi = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.so = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.ml = !!window.cr_windows10;
            this.Or = this.Pr || this.Gy || this.so || this.ml;
            this.zy = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.hl = this.gl && !this.lo && !this.jl && !this.Ay && !this.Kr && !this.lb;
            this.devicePixelRatio = 1;
            this.Lf = this.Wc || this.jl || this.Lr || this.ld || this.gl || this.nh || this.Oi || this.so || this.zy || this.Nr || this.Jd;
            this.Lf || (this.Lf = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.ll = !!(this.nh && this.Wc && window.webkit);
            "undefined" === typeof cr_is_preview || this.kl || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.kl = !0);
            this.canvas = a;
            this.Qq = document.getElementById("c2canvasdiv");
            this.u = this.G = null;
            this.Yn = "(unavailable)";
            this.Qa = !1;
            this.hg = 0;
            this.Sa = null;
            this.Wk = !1;
            this.Is = this.Js = 0;
            this.canvas.oncontextmenu = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.onselectstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.canvas.ontouchstart = function(a) {
                a.preventDefault && a.preventDefault();
                return !1
            };
            this.ic && (window.c2runtime = this);
            this.kl && (window.ondragover = function(a) {
                a.preventDefault();
                return !1
            }, window.ondrop = function(a) {
                a.preventDefault();
                return !1
            }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.hl && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.N = this.width;
            this.M = this.height;
            this.Gk = this.width;
            this.ni = this.height;
            this.sh = window.innerWidth;
            this.rh = window.innerHeight;
            this.ja = !0;
            this.Ni = !1;
            Date.now || (Date.now = function() {
                return +new Date
            });
            this.plugins = [];
            this.types = {};
            this.B = [];
            this.$a = [];
            this.Co = {};
            this.Ld = [];
            this.Fn = {};
            this.Ie = [];
            this.Yh = [];
            this.Am = [];
            this.$v = [];
            this.aw = [];
            this.Jt = null;
            this.fg = {};
            this.no = this.Jf = !1;
            this.Kd = 0;
            this.mo = this.qo = !1;
            this.Hd = [];
            this.Ki = !1;
            this.ul = this.vp = "";
            this.Hb = null;
            this.Qe = "";
            this.Fj = this.Gt = !1;
            this.Vk = [];
            this.gg = this.He = 0;
            this.ys = 30;
            this.rn = this.cj = 0;
            this.Th = 1;
            this.Ub = new cb;
            this.mf = new cb;
            this.Fl = this.$k = this.ri = this.cd = this.wg = this.Kn = this.pl = 0;
            this.dg = null;
            this.Ok = [];
            this.En = [];
            this.Rk = -1;
            this.Jo = [
                []
            ];
            this.Mp = this.Al = 0;
            this.Yl(null);
            this.dj = [];
            this.wh = -1;
            this.vi = this.Ds = this.hj = 0;
            this.Gj = [];
            this.Ip = this.lp = -1;
            this.oh = !0;
            this.yl = 0;
            this.Mi = !1;
            this.Sz = 0;
            this.Rg = null;
            this.Xc = this.Ar = !1;
            this.Hs = new ea;
            this.Ro = new ea;
            this.So = new ea;
            this.Hg = [];
            this.Od = new eb([]);
            this.Hp = new eb([]);
            this.tf = [];
            this.Ei = {};
            this.zf = {};
            this.sf = {};
            this.Xh = {};
            this.Kq = {};
            this.Yr = this.tl = this.ub = this.Fb = this.Xr = this.sl = this.Ia = null;
            this.Vh = this.to = !1;
            this.Ln = [null, null];
            this.lg = 0;
            this.Hn = "";
            this.Te = {};
            this.Cj = this.Pf = null;
            this.It = "";
            this.El = [];
            this.yz()
        }
    }

    function g(a, b) {
        return 128 >= b ? a[3] : 256 >= b ? a[2] : 512 >= b ? a[1] : a[0]
    }

    function c() {
        try {
            return !!window.indexedDB
        } catch (a) {
            return !1
        }
    }

    function k(a) {
        a.target.result.createObjectStore("saves", {
            keyPath: "slot"
        })
    }

    function m(a, b, e, d) {
        try {
            var f = indexedDB.open("_C2SaveStates");
            f.onupgradeneeded = k;
            f.onerror = d;
            f.onsuccess = function(f) {
                f = f.target.result;
                f.onerror = d;
                f.transaction(["saves"], "readwrite").objectStore("saves").put({
                    slot: a,
                    data: b
                }).onsuccess = e
            }
        } catch (n) {
            d(n)
        }
    }

    function r(a, b, e) {
        try {
            var d = indexedDB.open("_C2SaveStates");
            d.onupgradeneeded = k;
            d.onerror = e;
            d.onsuccess = function(d) {
                d = d.target.result;
                d.onerror = e;
                var f = d.transaction(["saves"]).objectStore("saves").get(a);
                f.onsuccess = function() {
                    f.result ? b(f.result.data) : b(null)
                }
            }
        } catch (f) {
            e(f)
        }
    }

    function p() {
        ga("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous"
    }

    function b(a) {
        var b, e = {};
        for (b in a) !a.hasOwnProperty(b) || a[b] instanceof ea || a[b] && "undefined" !== typeof a[b].wB || "spriteCreatedDestroyCallback" !== b && (e[b] = a[b]);
        return e
    }
    var d = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    h.prototype.yz = function() {
        var a = this;
        if (this.ll) this.Gx(function(b) {
            a.Wi(JSON.parse(b))
        }, function() {
            alert("Error fetching data.js")
        });
        else {
            var b;
            this.Oi ? b = new ActiveXObject("Microsoft.XMLHTTP") : b = new XMLHttpRequest;
            var e = "data.js";
            if (this.Pr || this.Oi || this.so || this.ml) e = "data.json";
            b.open("GET", e, !0);
            var d = !1;
            if (!this.lb && "response" in b && "responseType" in b) try {
                b.responseType = "json", d = "json" === b.responseType
            } catch (f) {
                d = !1
            }
            if (!d && "responseType" in b) try {
                b.responseType = "text"
            } catch (n) {}
            if ("overrideMimeType" in b) try {
                b.overrideMimeType("application/json; charset=utf-8")
            } catch (c) {}
            this.Oi ? b.onreadystatechange = function() {
                4 === b.readyState && a.Wi(JSON.parse(b.responseText))
            } : (b.onload = function() {
                if (d) a.Wi(b.response);
                else if (a.Jd) {
                    var e = b.responseText,
                        e = e.substr(e.indexOf("{"));
                    a.Wi(JSON.parse(e))
                } else a.Wi(JSON.parse(b.responseText))
            }, b.onerror = function(a) {
                ha("Error requesting " + e + ":");
                ha(a)
            });
            b.send()
        }
    };
    h.prototype.vy = function() {
        var a = this,
            b, e, d, f, n, c, l, t, q;
        this.tg = (!this.lb || this.Jd || this.Wc) && this.eA && !this.hl;
        0 === this.wc && this.nh && (this.tg = !1);
        this.devicePixelRatio = this.tg ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.Yb();
        0 < this.wc && this.setSize(window.innerWidth, window.innerHeight, !0);
        this.canvas.addEventListener("webglcontextlost", function(b) {
            b.preventDefault();
            a.Vy();
            ga("[Construct 2] WebGL context lost");
            window.cr_setSuspended(!0)
        }, !1);
        this.canvas.addEventListener("webglcontextrestored", function() {
            a.u.Fr();
            a.u.bf(a.u.width, a.u.height, !0);
            a.Fb = null;
            a.ub = null;
            a.Ln[0] = null;
            a.Ln[1] = null;
            a.Wy();
            a.ja = !0;
            ga("[Construct 2] WebGL context restored");
            window.cr_setSuspended(!1)
        }, !1);
        try {
            this.Vw && (this.ld || this.Jd || !this.lb) && (b = {
                alpha: !0,
                depth: !1,
                antialias: !1,
                powerPreference: "high-performance",
                failIfMajorPerformanceCaveat: !0
            }, this.G = this.canvas.getContext("webgl2", b) || this.canvas.getContext("webgl", b) || this.canvas.getContext("experimental-webgl", b))
        } catch (m) {}
        if (this.G) {
            if (b = this.G.getExtension("WEBGL_debug_renderer_info")) this.Yn = this.G.getParameter(b.UNMASKED_RENDERER_WEBGL) + " [" + this.G.getParameter(b.UNMASKED_VENDOR_WEBGL) + "]";
            this.Qa && (this.Yn += " [front-to-back enabled]");
            this.lb || (this.Wb = document.createElement("canvas"), jQuery(this.Wb).appendTo(this.canvas.parentNode), this.Wb.oncontextmenu = function() {
                return !1
            }, this.Wb.onselectstart = function() {
                return !1
            }, this.Wb.width = Math.round(this.Gk * this.devicePixelRatio), this.Wb.height = Math.round(this.ni * this.devicePixelRatio), jQuery(this.Wb).css({
                width: this.Gk + "px",
                height: this.ni + "px"
            }), this.bt(), this.bp = this.Wb.getContext("2d"));
            this.u = new ob(this.G, this.Lf, this.Qa);
            this.u.bf(this.canvas.width, this.canvas.height);
            this.u.$q = 0 !== this.Ow;
            this.Sa = null;
            b = 0;
            for (e = this.B.length; b < e; b++)
                for (n = this.B[b], d = 0, f = n.V.length; d < f; d++) l = n.V[d], l.zb = this.u.Xn(l.id), l.$c = this.u.hp(l.zb), this.Vh = this.Vh || this.u.pj(l.zb);
            b = 0;
            for (e = this.Ld.length; b < e; b++) {
                t = this.Ld[b];
                d = 0;
                for (f = t.V.length; d < f; d++) l = t.V[d], l.zb = this.u.Xn(l.id), l.$c = this.u.hp(l.zb);
                t.Qd();
                d = 0;
                for (f = t.Y.length; d < f; d++) {
                    q = t.Y[d];
                    n = 0;
                    for (c = q.V.length; n < c; n++) l = q.V[n], l.zb = this.u.Xn(l.id), l.$c = this.u.hp(l.zb), this.Vh = this.Vh || this.u.pj(l.zb);
                    q.Qd()
                }
            }
        } else {
            if (0 < this.wc && this.ic) {
                this.canvas = null;
                document.oncontextmenu = function() {
                    return !1
                };
                document.onselectstart = function() {
                    return !1
                };
                this.Sa = AppMobi.canvas.getContext("2d");
                try {
                    this.Sa.samplingMode = this.Ja ? "smooth" : "sharp", this.Sa.globalScale = 1, this.Sa.HTML5CompatibilityMode = !0, this.Sa.imageSmoothingEnabled = this.Ja
                } catch (k) {}
                0 !== this.width && 0 !== this.height && (this.Sa.width = this.width, this.Sa.height = this.height)
            }
            this.Sa || (this.ld ? (b = {
                antialias: !!this.Ja,
                alpha: !0
            }, this.Sa = this.canvas.getContext("2d", b)) : (b = {
                alpha: !0
            }, this.Sa = this.canvas.getContext("2d", b)), this.hm(this.Sa, this.Ja));
            this.bp = this.Wb = null
        }
        this.Pt = function(b) {
            a.fb(!1, b)
        };
        window == window.top || this.lb || this.Or || this.Oi || (document.addEventListener("mousedown", function() {
            window.focus()
        }, !0), document.addEventListener("touchstart", function() {
            window.focus()
        }, !0));
        "undefined" !== typeof cr_is_preview && (this.ld && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ga("Reloading for continuous preview"), this.ul = "__c2_continuouspreview", this.Fj = !0), this.ez && !this.Lf && (jQuery(window).focus(function() {
            a.setSuspended(!1)
        }), jQuery(window).blur(function() {
            var b = window.parent;
            b && b.document.hasFocus() || a.setSuspended(!0)
        })));
        window.addEventListener("blur", function() {
            a.Gg()
        });
        this.lb || (b = function(a) {
            if (nb(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try {
                document.activeElement.blur()
            } catch (b) {}
        }, "undefined" !== typeof PointerEvent ? document.addEventListener("pointerdown", b) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", b) : document.addEventListener("touchstart", b), document.addEventListener("mousedown", b));
        0 === this.wc && this.tg && 1 < this.devicePixelRatio && this.setSize(this.Jb, this.Ib, !0);
        this.Ut();
        this.my();
        this.go();
        this.ga = {}
    };
    h.prototype.setSize = function(a, b, e) {
        var d = 0,
            f = 0,
            n = 0,
            c = 0,
            c = 0;
        if (this.sh !== a || this.rh !== b || e) {
            this.sh = a;
            this.rh = b;
            var l = this.wc;
            if ((n = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.Mi) && !this.Wc) || 0 !== this.wc || e) n && 0 < this.lg && (l = this.lg), e = this.devicePixelRatio, 4 <= l ? (n = this.Jb / this.Ib, a / b > n ? (n *= b, 5 === l ? (c = n * e / this.Jb, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), n = this.Jb * c / e, c = this.Ib * c / e, d = (a - n) / 2, f = (b - c) / 2, a = n, b = c) : (d = (a - n) / 2, a = n)) : (c = a / n, 5 === l ? (c = c * e / this.Ib, 1 < c ? c = Math.floor(c) : 1 > c && (c = 1 / Math.ceil(1 / c)), n = this.Jb * c / e, c = this.Ib * c / e, d = (a - n) / 2, f = (b - c) / 2, a = n) : f = (b - c) / 2, b = c)) : this.kl && this.Mi && 0 === this.mr && (d = Math.floor((a - this.Jb) / 2), f = Math.floor((b - this.Ib) / 2), a = this.Jb, b = this.Ib), 2 > l && (this.hi = e), this.Gk = Math.round(a), this.ni = Math.round(b), this.width = Math.round(a * e), this.height = Math.round(b * e), this.ja = !0, this.eu ? (this.N = this.width, this.M = this.height, this.Tc = !0) : this.width < this.Jb && this.height < this.Ib || 1 === l ? (this.N = this.width, this.M = this.height, this.Tc = !0) : (this.N = this.Jb, this.M = this.Ib, this.Tc = !1, 2 === l ? (n = this.Jb / this.Ib, l = this.sh / this.rh, l < n ? this.N = this.M * l : l > n && (this.M = this.N / l)) : 3 === l && (n = this.Jb / this.Ib, l = this.sh / this.rh, l > n ? this.N = this.M * l : l < n && (this.M = this.N / l))), this.Qq && !this.lb && (jQuery(this.Qq).css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px",
                "margin-left": Math.floor(d) + "px",
                "margin-top": Math.floor(f) + "px"
            }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
                width: Math.round(a) + "px",
                height: Math.round(b) + "px"
            })), this.canvas && (this.canvas.width = Math.round(a * e), this.canvas.height = Math.round(b * e), this.Jd ? (this.canvas.style.left = Math.floor(d) + "px", this.canvas.style.top = Math.floor(f) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px") : this.tg && !this.lb && (this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(b) + "px")), this.Wb && (this.Wb.width = Math.round(a * e), this.Wb.height = Math.round(b * e), this.Wb.style.width = this.Gk + "px", this.Wb.style.height = this.ni + "px"), this.u && this.u.bf(Math.round(a * e), Math.round(b * e)), this.ic && this.Sa && (this.Sa.width = Math.round(a), this.Sa.height = Math.round(b)), this.Sa && this.hm(this.Sa, this.Ja), this.Ut(), this.Rr && !this.Wc && window.scrollTo(0, 0)
        }
    };
    h.prototype.Ut = function() {
        if (this.ew && 0 !== this.$o) {
            var a = "portrait";
            2 === this.$o && (a = "landscape");
            try {
                screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a)
            } catch (b) {
                console && console.warn && console.warn("Failed to lock orientation: ", b)
            }
        }
    };
    h.prototype.Vy = function() {
        this.u.ow();
        this.to = !0;
        var a, b, e;
        a = 0;
        for (b = this.B.length; a < b; a++) e = this.B[a], e.Dh && e.Dh()
    };
    h.prototype.Wy = function() {
        this.to = !1;
        var a, b, e;
        a = 0;
        for (b = this.B.length; a < b; a++) e = this.B[a], e.kj && e.kj()
    };
    h.prototype.bt = function() {
        if (!this.lb) {
            var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Mi) && !this.Wc ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Wb).css(a)
        }
    };
    var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    h.prototype.setSuspended = function(a) {
        var b;
        if (a && !this.Ni)
            for (ga("[Construct 2] Suspending"), this.Ni = !0, -1 !== this.lp && f && f(this.lp), -1 !== this.Ip && clearTimeout(this.Ip), a = 0, b = this.Gj.length; a < b; a++) this.Gj[a](!0);
        else if (!a && this.Ni) {
            ga("[Construct 2] Resuming");
            this.Ni = !1;
            this.pl = Za();
            this.wg = Za();
            a = this.cj = this.$k = 0;
            for (b = this.Gj.length; a < b; a++) this.Gj[a](!1);
            this.fb(!1)
        }
    };
    h.prototype.Fq = function(a) {
        this.Gj.push(a)
    };
    h.prototype.of = function(a) {
        return this.El[a]
    };
    h.prototype.Wi = function(a) {
        a && a.project || ha("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.hr = a[1];
        this.wc = a[12];
        this.mr = a[12];
        this.Jb = a[10];
        this.Ib = a[11];
        this.Xs = this.Jb / 2;
        this.Ys = this.Ib / 2;
        this.lb && !this.Jd && (4 <= a[12] || 0 === a[12]) && (ga("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.mr = this.wc = 3);
        this.Tp = a[18];
        this.Qf = a[19];
        if (0 === this.Qf) {
            var b = new Image;
            b.crossOrigin = "anonymous";
            this.yt(b, "loading-logo.png");
            this.Pf = {
                Bl: b
            }
        } else if (4 === this.Qf) {
            b = new Image;
            b.src = "";
            var e = new Image;
            e.src = "";
            var d = new Image;
            d.src = "";
            var f = new Image;
            f.src = "";
            var n = new Image;
            n.src = "";
            var c = new Image;
            c.src = "";
            var l = new Image;
            l.src = "";
            var t = new Image;
            t.src = "";
            var q = new Image;
            q.src = "";
            var m = new Image;
            m.src = "";
            var k = new Image;
            k.src = "";
            var h = new Image;
            h.src = "";
            this.Pf = {
                Bl: [b, e, d, f],
                kz: [n, c, l, t],
                iA: [q, m, k, h]
            }
        }
        this.hj = a[21];
        this.El = rc();
        this.re = new S(this);
        b = 0;
        for (e = a[2].length; b < e; b++) l = a[2][b], d = this.of(l[0]), pb(l, d.prototype), t = new d(this), t.mm = l[1], t.Nf = l[2], t.Hy = l[5], t.zs = l[9], t.H && t.H(), this.plugins.push(t);
        this.El = rc();
        b = 0;
        for (e = a[3].length; b < e; b++) {
            l = a[3][b];
            n = this.of(l[1]);
            t = null;
            d = 0;
            for (f = this.plugins.length; d < f; d++)
                if (this.plugins[d] instanceof n) {
                    t = this.plugins[d];
                    break
                }
            q = new t.P(t);
            q.name = l[0];
            q.J = l[2];
            q.jo = l[3].slice(0);
            q.gA = l[3].length;
            q.fw = l[4];
            q.Kx = l[5];
            q.ka = l[11];
            q.J ? (q.Cg = [], q.Je = this.vi++, q.Ua = null) : (q.Cg = null, q.Je = -1, q.Ua = []);
            q.Tk = null;
            q.$g = null;
            q.br = null;
            q.jc = !1;
            q.Fc = null;
            l[6] ? (q.Jj = l[6][0], q.um = l[6][1], q.Vf = l[6][2]) : (q.Jj = null, q.um = 0, q.Vf = 0);
            l[7] ? q.Ec = l[7] : q.Ec = null;
            q.index = b;
            q.e = [];
            q.Kk = [];
            q.ff = [new qb(q)];
            q.Zd = 0;
            q.jd = null;
            q.vw = 0;
            q.Ph = !0;
            q.Bm = rb;
            q.tr = sb;
            q.Tx = tb;
            q.O = ub;
            q.rj = vb;
            q.Ye = wb;
            q.td = zb;
            q.bl = Ab;
            q.Mn = Bb;
            q.Rn = Cb;
            q.fd = Db;
            q.Tn = Eb;
            q.Ck = new hb(this.Jb, this.Ib);
            q.pk = !0;
            q.qk = !1;
            q.ga = {};
            q.toString = Fb;
            q.$a = [];
            d = 0;
            for (f = l[8].length; d < f; d++) {
                m = l[8][d];
                k = this.of(m[1]);
                h = null;
                n = 0;
                for (c = this.$a.length; n < c; n++)
                    if (this.$a[n] instanceof k) {
                        h = this.$a[n];
                        break
                    }
                h || (h = new k(this), h.Po = [], h.Oo = new ea, h.H && h.H(), this.$a.push(h), sc && h instanceof sc && (this.Jt = h)); - 1 === h.Po.indexOf(q) && h.Po.push(q);
                n = new h.P(h, q);
                n.name = m[0];
                n.ka = m[2];
                n.H();
                q.$a.push(n)
            }
            q.global = l[9];
            q.po = l[10];
            q.V = [];
            d = 0;
            for (f = l[12].length; d < f; d++) q.V.push({
                id: l[12][d][0],
                name: l[12][d][1],
                zb: -1,
                $c: !1,
                Ya: !0,
                index: d
            });
            q.UB = l[13];
            this.Tp && !q.J && !q.po && t.Nf || q.H();
            q.name && (this.types[q.name] = q);
            this.B.push(q);
            t.mm && (d = new t.L(q), d.uid = this.hj++, d.et = this.Ds++, d.rg = 0, d.Ci = Gb, d.toString = Hb, d.q = l[14], d.H(), q.e.push(d), this.Te[d.uid.toString()] = d)
        }
        b = 0;
        for (e = a[4].length; b < e; b++)
            for (n = a[4][b], c = this.B[n[0]], d = 1, f = n.length; d < f; d++) l = this.B[n[d]], l.Ua.push(c), c.Cg.push(l);
        b = 0;
        for (e = a[28].length; b < e; b++) {
            n = a[28][b];
            c = [];
            d = 0;
            for (f = n.length; d < f; d++) c.push(this.B[n[d]]);
            d = 0;
            for (f = c.length; d < f; d++) c[d].jc = !0, c[d].Fc = c
        }
        if (0 < this.vi)
            for (b = 0, e = this.B.length; b < e; b++)
                if (l = this.B[b], !l.J && l.Ua.length) {
                    l.Tk = Array(this.vi);
                    l.$g = Array(this.vi);
                    l.br = Array(this.vi);
                    q = [];
                    d = h = k = m = 0;
                    for (f = l.Ua.length; d < f; d++)
                        for (t = l.Ua[d], l.Tk[t.Je] = m, m += t.gA, l.$g[t.Je] = k, k += t.fw, l.br[t.Je] = h, h += t.Kx, n = 0, c = t.V.length; n < c; n++) q.push(za({}, t.V[n]));
                    l.V = q.concat(l.V);
                    d = 0;
                    for (f = l.V.length; d < f; d++) l.V[d].index = d
                }
        b = 0;
        for (e = a[5].length; b < e; b++) l = a[5][b], d = new Ib(this, l), this.Co[d.name] = d, this.Ld.push(d);
        b = 0;
        for (e = a[6].length; b < e; b++) l = a[6][b], d = new Jb(this, l), this.Fn[d.name] = d, this.Ie.push(d);
        b = 0;
        for (e = this.Ie.length; b < e; b++) this.Ie[b].mb();
        b = 0;
        for (e = this.Ie.length; b < e; b++) this.Ie[b].Pp();
        b = 0;
        for (e = this.Am.length; b < e; b++) this.Am[b].mb();
        A(this.Am);
        this.dw = a[7];
        this.Hn = a[8];
        this.xc = a[9];
        this.hi = 1;
        this.Vw = a[13];
        this.Ja = a[14];
        this.Sq = a[15];
        this.eA = a[17];
        this.$o = a[20];
        this.ew = 0 < this.$o;
        this.ez = a[22];
        this.Tc = this.eu = a[23];
        this.Ow = a[24];
        this.lz = a[25];
        this.Qa = a[27] && !this.Pe;
        this.nm = Date.now();
        A(this.El);
        this.vy()
    };
    var a = !1,
        e = 0,
        l = [];
    h.prototype.sz = function(a, b) {
        function d() {
            e--;
            f.us()
        }
        var f = this;
        a.addEventListener("load", d);
        a.addEventListener("error", d);
        l.push([a, b]);
        this.us()
    };
    h.prototype.us = function() {
        for (var a; l.length && 100 > e;) e++, a = l.shift(), this.yt(a[0], a[1])
    };
    h.prototype.Fm = function(b, e) {
        b.cocoonLazyLoad = !0;
        b.onerror = function(e) {
            a = b.Nq = !0;
            console && console.error && console.error("Error loading image '" +
                b.src + "': ", e)
        };
        this.Jd ? b.src = e : b.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(e, function(a) {
            b.src = a
        }, function(d) {
            a = b.Nq = !0;
            console && console.error && console.error("Error extracting image '" + e + "' from expansion file: ", d)
        }) : (b.crossOrigin = "anonymous", this.sz(b, e)));
        this.Yh.push(b)
    };
    h.prototype.Ix = function(a) {
        var b, e;
        b = 0;
        for (e = this.Yh.length; b < e; b++)
            if (this.Yh[b].pw === a) return this.Yh[b];
        return null
    };
    var q = 0,
        w = !1;
    h.prototype.my = function() {
        this.Rg && (q = this.Rg.Nz(this.dw))
    };
    h.prototype.Iq = function() {
        var a = q,
            b = 0,
            e = 0,
            d = !0,
            f, n, e = 0;
        for (f = this.Yh.length; e < f; e++) {
            n = this.Yh[e];
            var l = n.sn;
            if (!l || 0 >= l) l = 5E4;
            a += l;
            n.src && (n.complete || n.loaded) && !n.Nq ? b += l : d = !1
        }
        d && this.lz && this.Rg && (w || (this.Rg.Tz(), w = !0), e = this.Rg.Ux(), b += e, e < q && (d = !1));
        this.da = 0 == a ? 1 : b / a;
        return d
    };
    var N = !1;
    h.prototype.go = function() {
        if (this.Sa || this.u) {
            var b = this.Sa || this.bp;
            this.Wb && this.bt();
            var e = window.innerWidth,
                f = window.innerHeight;
            this.sh === e && this.rh === f || this.setSize(e, f);
            this.da = 0;
            this.Wr = -1;
            var n = this;
            if (this.Iq() && (4 !== this.Qf || N)) this.ny();
            else {
                f = Date.now() - this.nm;
                if (b) {
                    var l = this.width,
                        c = this.height,
                        e = this.devicePixelRatio;
                    if (3 > this.Qf && (this.ld || 500 <= f && this.Wr != this.da)) {
                        b.clearRect(0, 0, l, c);
                        var f = l / 2,
                            c = c / 2,
                            l = 0 === this.Qf && this.Pf.Bl.complete,
                            q = 40 * e,
                            t = 0,
                            m = 80 * e,
                            k;
                        if (l) {
                            var h = this.Pf.Bl,
                                m = h.width * e;
                            k = h.height * e;
                            q = m / 2;
                            t = k / 2;
                            b.drawImage(h, ua(f - q), ua(c - t), m, k)
                        }
                        1 >= this.Qf ? (f = ua(f - q) + .5, c = ua(c + (t + (l ? 12 * e : 0))) + .5, b.fillStyle = a ? "red" : "DodgerBlue", b.fillRect(f, c, Math.floor(m * this.da), 6 * e), b.strokeStyle = "black", b.strokeRect(f, c, m, 6 * e), b.strokeStyle = "white", b.strokeRect(f - 1 * e, c - 1 * e, m + 2 * e, 8 * e)) : 2 === this.Qf && (b.font = this.Jd ? "12pt ArialMT" : "12pt Arial", b.fillStyle = a ? "#f00" : "#999", b.TB = "middle", e = Math.round(100 * this.da) + "%", l = b.measureText ? b.measureText(e) : null, b.fillText(e, f - (l ? l.width : 0) / 2, c));
                        this.Wr = this.da
                    } else if (4 === this.Qf) {
                        this.Tw(b);
                        d ? d(function() {
                            n.go()
                        }) : setTimeout(function() {
                            n.go()
                        }, 16);
                        return
                    }
                }
                setTimeout(function() {
                    n.go()
                }, this.ld ? 10 : 100)
            }
        }
    };
    var C = -1,
        n = "undefined" === typeof cr_is_preview ? 200 : 0,
        t = !0,
        F = !1,
        x = 0,
        B = 0,
        L = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        u = null,
        v = null,
        G = 0;
    h.prototype.Tw = function(b) {
        if (!N) {
            for (var e = Math.ceil(this.width), d = Math.ceil(this.height), f = this.Pf.Bl, l = this.Pf.kz, c = this.Pf.iA, q = 0; 4 > q; ++q)
                if (!f[q].complete || !l[q].complete || !c[q].complete) return;
            0 === G && (C = Date.now());
            var q = Date.now(),
                m = !1,
                k = b,
                h, p;
            t || F ? (b.clearRect(0, 0, e, d), u && u.width === e && u.height === d || (u = document.createElement("canvas"), u.width = e, u.height = d, v = u.getContext("2d")), k = v, m = !0, t && 1 === G && (C = Date.now())) : b.globalAlpha = 1;
            k.fillStyle = "#333333";
            k.fillRect(0, 0, e, d);
            256 < this.ni ? (h = Ha(.22 * d, 105, .6 * e), p = .25 * h, k.drawImage(g(l, h), .5 * e - h / 2, .2 * d - p / 2, h, p), p = h = Math.min(.395 * d, .95 * e), k.drawImage(g(f, h), .5 * e - h / 2, .485 * d - p / 2, h, p), h = Ha(.22 * d, 105, .6 * e), p = .25 * h, k.drawImage(g(c, h), .5 * e - h / 2, .868 * d - p / 2, h, p), k.fillStyle = "#3C3C3C", h = e, p = Math.max(.005 * d, 2), k.fillRect(0, .8 * d - p / 2, h, p), k.fillStyle = a ? "red" : "#E0FF65", h = e * this.da, k.fillRect(.5 * e - h / 2, .8 * d - p / 2, h, p)) : (p = h = .55 * d, k.drawImage(g(f, h), .5 * e - h / 2, .45 * d - p / 2, h, p), k.fillStyle = "#3C3C3C", h = e, p = Math.max(.005 * d, 2), k.fillRect(0, .85 * d -
                p / 2, h, p), k.fillStyle = a ? "red" : "#E0FF65", h = e * this.da, k.fillRect(.5 * e - h / 2, .85 * d - p / 2, h, p));
            m && (t ? b.globalAlpha = 0 === G ? 0 : Math.min((q - C) / 300, 1) : F && (b.globalAlpha = Math.max(1 - (q - B) / 300, 0)), b.drawImage(u, 0, 0, e, d));
            t && 300 <= q - C && 2 <= G && (t = !1, x = q);
            !t && q - x >= L && !F && 1 <= this.da && (F = !0, B = q);
            if (F && q - B >= 300 + n || "undefined" !== typeof cr_is_preview && 1 <= this.da && 500 > Date.now() - C) N = !0, F = t = !1, this.Pf = v = u = null;
            ++G
        }
    };
    h.prototype.ny = function() {
        this.Wb && (this.canvas.parentNode.removeChild(this.Wb), this.Wb = this.bp = null);
        this.nm = Date.now();
        this.wg = Za();
        var a, b, e;
        if (this.Tp)
            for (a = 0, b = this.B.length; a < b; a++) e = this.B[a], e.J || e.po || !e.ra.Nf || e.H();
        else this.oh = !1;
        a = 0;
        for (b = this.Ld.length; a < b; a++) this.Ld[a].qw();
        2 <= this.wc && (a = this.Jb / this.Ib, b = this.width / this.height, this.hi = 2 !== this.wc && b > a || 2 === this.wc && b < a ? this.height / this.Ib : this.width / this.Jb);
        this.hr ? this.Co[this.hr].Fp() : this.Ld[0].Fp();
        this.Tp || (this.yl = 1, this.trigger(S.prototype.g.gq, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (b = this.B.length; a < b; a++) e = this.B[a], e.Ks && e.Ks();
        document.hidden || document.webkitHidden || document.mozHidden || document.msHidden ? window.cr_setSuspended(!0) : this.fb(!1);
        this.ic && AppMobi.webview.execute("onGameReady();")
    };
    h.prototype.fb = function(a, b, e) {
        if (this.Ia) {
            var f = Za();
            if (e || !this.Ni || a) {
                a || (d ? this.lp = d(this.Pt) : this.Ip = setTimeout(this.Pt, this.Lf ? 1 : 16));
                b = b || f;
                var n = this.wc;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Wc) || this.Mi) && 0 < this.lg && (n = this.lg);
                if (0 < n) {
                    var n = window.innerWidth,
                        l = window.innerHeight;
                    this.sh === n && this.rh === l || this.setSize(n, l)
                }
                this.lb || (e ? this.Wk || (this.Wk = !0) : this.Wk ? (this.Wk = !1, 0 === this.wc && this.setSize(Math.round(this.Js / this.devicePixelRatio), Math.round(this.Is / this.devicePixelRatio), !0)) : (this.Js = this.width, this.Is = this.height));
                this.oh && (e = this.Iq(), this.yl = this.da, e && (this.oh = !1, this.da = 1, this.trigger(S.prototype.g.gq, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.My(b);
                !this.ja && !this.ld || this.to || this.Fj || a || (this.ja = !1, this.u ? this.cc() : this.Rc(), this.Cj && (this.canvas && this.canvas.toDataURL && (this.It = this.canvas.toDataURL(this.Cj[0], this.Cj[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.It), this.trigger(S.prototype.g.Ru, null)), this.Cj = null));
                this.BB || (this.cd++, this.ri++, this.$k++);
                this.cj += Za() - f
            }
        }
    };
    h.prototype.My = function(a) {
        var b, e, d, f, n, l, c, q;
        1E3 <= a - this.wg && (this.wg += 1E3, 1E3 <= a - this.wg && (this.wg = a), this.Kn = this.$k, this.$k = 0, this.rn = this.cj, this.cj = 0);
        b = 0;
        0 !== this.pl && (b = a - this.pl, 0 > b && (b = 0), this.gg = b /= 1E3, .5 < this.gg ? this.gg = 0 : this.gg > 1 / this.ys && (this.gg = 1 / this.ys));
        this.pl = a;
        this.He = this.gg * this.Th;
        this.Ub.add(this.He);
        this.mf.add(b);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Mi) && !this.Wc;
        2 <= this.wc || a && 0 < this.lg ? (b = this.Jb / this.Ib, e = this.width / this.height, d = this.wc, a && 0 < this.lg && (d = this.lg), this.hi = 2 !== d && e > b || 2 === d && e < b ? this.height / this.Ib : this.width / this.Jb, this.Ia && (this.Ia.mt(this.Ia.scrollX), this.Ia.nt(this.Ia.scrollY))) : this.hi = this.tg ? this.devicePixelRatio : 1;
        this.Yb();
        this.Kd++;
        this.re.Dz();
        this.Kd--;
        this.Yb();
        this.Kd++;
        e = this.Hs.Xf();
        a = 0;
        for (b = e.length; a < b; a++) e[a].MB();
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (l = this.B[a], !l.J && (l.$a.length || l.Ua.length))
                for (e = 0, d = l.e.length; e < d; e++)
                    for (c = l.e[e], f = 0, n = c.U.length; f < n; f++) c.U[f].fb();
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (l = this.B[a], !l.J && (l.$a.length || l.Ua.length))
                for (e = 0, d = l.e.length; e < d; e++)
                    for (c = l.e[e], f = 0, n = c.U.length; f < n; f++) q = c.U[f], q.jz && q.jz();
        e = this.Ro.Xf();
        a = 0;
        for (b = e.length; a < b; a++) e[a].fb();
        this.Kd--;
        this.oy();
        for (a = 0; this.dg && 10 > a++;) this.Zq(this.dg);
        a = 0;
        for (b = this.Ie.length; a < b; a++) this.Ie[a].ao = !1;
        this.Ia.jg && this.Ia.jg.yb();
        A(this.Hg);
        this.Kd++;
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (l = this.B[a], !l.J && (l.$a.length || l.Ua.length))
                for (e = 0, d = l.e.length; e < d; e++)
                    for (c = l.e[e], f = 0, n = c.U.length; f < n; f++) q = c.U[f], q.Lj && q.Lj();
        e = this.So.Xf();
        a = 0;
        for (b = e.length; a < b; a++) e[a].Lj();
        this.Kd--
    };
    h.prototype.Gg = function() {
        var a, b, e, d, f, n, l, c, q;
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (l = this.B[a], !l.J)
                for (e = 0, d = l.e.length; e < d; e++)
                    if (c = l.e[e], c.Gg && c.Gg(), c.U)
                        for (f = 0, n = c.U.length; f < n; f++) q = c.U[f], q.Gg && q.Gg()
    };
    h.prototype.Zq = function(a) {
        var b = this.Ia;
        this.Ia.Uz();
        var e, d, f;
        if (this.u)
            for (e = 0, d = this.B.length; e < d; e++) f = this.B[e], f.J || !f.Oj || f.global && 0 !== f.e.length || -1 !== a.Hi.indexOf(f) || f.Oj();
        b == a && A(this.re.Cc);
        A(this.Hg);
        this.jt(!0);
        a.Fp();
        this.jt(!1);
        this.ja = !0;
        this.Yb()
    };
    h.prototype.jt = function(a) {
        var b, e, d, f, n, l, c, q, t;
        b = 0;
        for (e = this.$a.length; b < e; b++) d = this.$a[b], a ? d.ij && d.ij() : d.jj && d.jj();
        b = 0;
        for (e = this.B.length; b < e; b++)
            if (d = this.B[b], d.global || d.ra.mm)
                for (f = 0, n = d.e.length; f < n; f++)
                    if (l = d.e[f], a ? l.ij && l.ij() : l.jj && l.jj(), l.U)
                        for (c = 0, q = l.U.length; c < q; c++) t = l.U[c], a ? t.ij && t.ij() : t.jj && t.jj()
    };
    h.prototype.xm = function(a) {
        this.Ro.add(a)
    };
    h.prototype.Xz = function(a) {
        this.So.add(a)
    };
    h.prototype.mg = function(a) {
        return a && -1 !== a.gj ? this.gg * a.gj : this.He
    };
    h.prototype.Rc = function() {
        this.Ia.Rc(this.Sa);
        this.ic && this.Sa.present()
    };
    h.prototype.cc = function() {
        this.Qa && (this.hg = 1, this.Ia.Ef(this.u));
        this.Ia.cc(this.u);
        this.u.nz()
    };
    h.prototype.$m = function(a) {
        a && this.Ok.push(a)
    };
    h.prototype.xz = function(a) {
        Ga(this.Ok, a)
    };
    h.prototype.Ai = function(a) {
        a = a.toString();
        return this.Te.hasOwnProperty(a) ? this.Te[a] : null
    };
    var P = [];
    h.prototype.Yf = function(a) {
        var b, e;
        b = a.type.name;
        var d = null;
        if (this.fg.hasOwnProperty(b)) {
            if (d = this.fg[b], d.contains(a)) return
        } else d = P.length ? P.pop() : new ea, this.fg[b] = d;
        d.add(a);
        this.Jf = !0;
        if (a.jc)
            for (b = 0, e = a.siblings.length; b < e; b++) this.Yf(a.siblings[b]);
        this.no && d.Wh.push(a);
        this.mo || (this.Kd++, this.trigger(Object.getPrototypeOf(a.type.ra).g.Tu, a), this.Kd--)
    };
    h.prototype.Yb = function() {
        if (this.Jf) {
            var a, b, e, d, f, n;
            this.no = !0;
            e = 0;
            for (f = this.Hd.length; e < f; ++e)
                for (a = this.Hd[e], b = a.type, b.e.push(a), d = 0, n = b.Ua.length; d < n; ++d) b.Ua[d].e.push(a), b.Ua[d].Ph = !0;
            A(this.Hd);
            this.Hu();
            Ya(this.fg);
            this.Jf = this.no = !1
        }
    };
    h.prototype.Hu = function() {
        for (var a in this.fg) this.fg.hasOwnProperty(a) && this.lu(this.fg[a])
    };
    h.prototype.lu = function(a) {
        var b = a.Xf(),
            e = b[0].type,
            d, f, n, l, c, q;
        $a(e.e, a);
        e.Ph = !0;
        0 === e.e.length && (e.qk = !1);
        d = 0;
        for (f = e.Ua.length; d < f; ++d) q = e.Ua[d], $a(q.e, a), q.Ph = !0;
        d = 0;
        for (f = this.re.Cc.length; d < f; ++d)
            if (c = this.re.Cc[d], c.sc.hasOwnProperty(e.index) && $a(c.sc[e.index].Ne, a), !e.J)
                for (n = 0, l = e.Ua.length; n < l; ++n) q = e.Ua[n], c.sc.hasOwnProperty(q.index) && $a(c.sc[q.index].Ne, a);
        if (c = b[0].k) {
            if (c.ed)
                for (n = c.e, d = 0, f = n.length; d < f; ++d) l = n[d], a.contains(l) && (l.Ka(), c.Xb.update(l, l.yc, null), l.yc.set(0, 0, -1, -1));
            $a(c.e, a);
            c.yj(0)
        }
        for (d = 0; d < b.length; ++d) this.ku(b[d], e);
        a.clear();
        P.push(a);
        this.ja = !0
    };
    h.prototype.ku = function(a, b) {
        var e, d, f;
        e = 0;
        for (d = this.Ok.length; e < d; ++e) this.Ok[e](a);
        a.Af && b.Ck.update(a, a.Af, null);
        (e = a.k) && e.Ih(a, !0);
        if (a.U)
            for (e = 0, d = a.U.length; e < d; ++e) f = a.U[e], f.Ue && f.Ue(), f.behavior.Oo.remove(a);
        this.Hs.remove(a);
        this.Ro.remove(a);
        this.So.remove(a);
        a.Ue && a.Ue();
        this.Te.hasOwnProperty(a.uid.toString()) && delete this.Te[a.uid.toString()];
        this.Fl--;
        100 > b.Kk.length && b.Kk.push(a)
    };
    h.prototype.tn = function(a, b, e, d) {
        if (a.J) {
            var f = ua(Math.random() * a.Cg.length);
            return this.tn(a.Cg[f], b, e, d)
        }
        return a.jd ? this.Bf(a.jd, b, !1, e, d, !1) : null
    };
    var U = [];
    h.prototype.Bf = function(a, b, e, d, f, n) {
        var l, c, q, t;
        if (!a) return null;
        var k = this.B[a[1]],
            m = k.ra.Nf;
        if (this.oh && m && !k.po || m && !this.u && 11 === a[0][11]) return null;
        var h = b;
        m || (b = null);
        var g;
        k.Kk.length ? (g = k.Kk.pop(), g.rc = !0, k.ra.L.call(g, k)) : (g = new k.ra.L(k), g.rc = !1);
        !e || n || this.Te.hasOwnProperty(a[2].toString()) ? g.uid = this.hj++ : g.uid = a[2];
        this.Te[g.uid.toString()] = g;
        g.et = this.Ds++;
        g.rg = k.e.length;
        l = 0;
        for (c = this.Hd.length; l < c; ++l) this.Hd[l].type === k && g.rg++;
        g.Ci = Gb;
        g.toString = Hb;
        q = a[3];
        if (g.rc) Ya(g.ga);
        else {
            g.ga = {};
            if ("undefined" !== typeof cr_is_preview)
                for (g.Ir = [], g.Ir.length = q.length, l = 0, c = q.length; l < c; l++) g.Ir[l] = q[l][1];
            g.Eb = [];
            g.Eb.length = q.length
        }
        l = 0;
        for (c = q.length; l < c; l++) g.Eb[l] = q[l][0];
        if (m) {
            var p = a[0];
            g.x = ia(d) ? p[0] : d;
            g.y = ia(f) ? p[1] : f;
            g.z = p[2];
            g.width = p[3];
            g.height = p[4];
            g.depth = p[5];
            g.j = p[6];
            g.opacity = p[7];
            g.gc = p[8];
            g.hc = p[9];
            g.Zb = p[10];
            l = p[11];
            !this.u && k.V.length && (g.Zb = l);
            g.ji = jb(g.Zb);
            this.G && kb(g, g.Zb, this.G);
            if (g.rc) {
                l = 0;
                for (c = p[12].length; l < c; l++)
                    for (q = 0, t = p[12][l].length; q < t; q++) g.ab[l][q] = p[12][l][q];
                g.Za.set(0, 0, 0, 0);
                g.Af.set(0, 0, -1, -1);
                g.yc.set(0, 0, -1, -1);
                g.Qb.zj(g.Za);
                A(g.gn)
            } else {
                g.ab = p[12].slice(0);
                l = 0;
                for (c = g.ab.length; l < c; l++) g.ab[l] = p[12][l].slice(0);
                g.Ba = [];
                g.rf = [];
                g.rf.length = k.V.length;
                g.Za = new xa(0, 0, 0, 0);
                g.Af = new xa(0, 0, -1, -1);
                g.yc = new xa(0, 0, -1, -1);
                g.Qb = new ya;
                g.gn = [];
                g.aa = Kb;
                g.tB = Lb;
                g.$b = Mb;
                g.Ka = Nb;
                g.dA = Ob;
                g.au = Tb;
                g.ee = Ub
            }
            g.Sh = !1;
            g.$z = 0;
            g.Zz = 0;
            g.Yz = null;
            14 === p.length && (g.Sh = !0, g.$z = p[13][0], g.Zz = p[13][1], g.Yz = p[13][2]);
            l = 0;
            for (c = k.V.length; l < c; l++) g.rf[l] = !0;
            g.df = !0;
            g.Qd = Vb;
            g.Qd();
            g.bu = !!g.Ba.length;
            g.dn = !0;
            g.kn = !0;
            k.pk = !0;
            g.visible = !0;
            g.gj = -1;
            g.k = b;
            g.Rd = b.e.length;
            g.hg = 0;
            "undefined" === typeof g.Da && (g.Da = null);
            this.ja = g.Be = !0
        }
        var w;
        A(U);
        l = 0;
        for (c = k.Ua.length; l < c; l++) U.push.apply(U, k.Ua[l].$a);
        U.push.apply(U, k.$a);
        if (g.rc)
            for (l = 0, c = U.length; l < c; l++) {
                var r = U[l];
                w = g.U[l];
                w.rc = !0;
                r.behavior.L.call(w, r, g);
                p = a[4][l];
                q = 0;
                for (t = p.length; q < t; q++) w.q[q] = p[q];
                w.H();
                r.behavior.Oo.add(g)
            } else
                for (g.U = [], l = 0, c = U.length; l < c; l++) r = U[l], w = new r.behavior.L(r, g), w.rc = !1, w.q = a[4][l].slice(0), w.H(), g.U.push(w), r.behavior.Oo.add(g);
        p = a[5];
        if (g.rc)
            for (l = 0, c = p.length; l < c; l++) g.q[l] = p[l];
        else g.q = p.slice(0);
        this.Hd.push(g);
        this.Jf = !0;
        b && (b.gi(g, !0), 1 !== b.qd || 1 !== b.sd) && (k.qk = !0);
        this.Fl++;
        if (k.jc) {
            if (g.jc = !0, g.rc ? A(g.siblings) : g.siblings = [], !e && !n) {
                l = 0;
                for (c = k.Fc.length; l < c; l++)
                    if (k.Fc[l] !== k) {
                        if (!k.Fc[l].jd) return null;
                        g.siblings.push(this.Bf(k.Fc[l].jd, h, !1, m ? g.x : d, m ? g.y : f, !0))
                    }
                l = 0;
                for (c = g.siblings.length; l < c; l++)
                    for (g.siblings[l].siblings.push(g), q = 0; q < c; q++) l !== q && g.siblings[l].siblings.push(g.siblings[q])
            }
        } else g.jc = !1, g.siblings = null;
        g.H();
        l = 0;
        for (c = g.U.length; l < c; l++) g.U[l].iz && g.U[l].iz();
        return g
    };
    h.prototype.Un = function(a) {
        var b, e;
        b = 0;
        for (e = this.Ia.Y.length; b < e; b++) {
            var d = this.Ia.Y[b];
            if (mb(d.name, a)) return d
        }
        return null
    };
    h.prototype.yi = function(a) {
        a = ua(a);
        0 > a && (a = 0);
        a >= this.Ia.Y.length && (a = this.Ia.Y.length - 1);
        return this.Ia.Y[a]
    };
    h.prototype.pn = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].O().Z = !0
    };
    h.prototype.rj = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].rj()
    };
    h.prototype.Ye = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].Ye()
    };
    h.prototype.td = function(a) {
        var b, e;
        b = 0;
        for (e = a.length; b < e; b++) a[b].td()
    };
    h.prototype.Zt = function(a) {
        if (a.pk) {
            var b, e, d = a.e;
            b = 0;
            for (e = d.length; b < e; ++b) d[b].au();
            d = this.Hd;
            b = 0;
            for (e = d.length; b < e; ++b) d[b].type === a && d[b].au();
            a.pk = !1
        }
    };
    h.prototype.pr = function(a, b, e, d) {
        var f, l, n = a ? 1 !== a.qd || 1 !== a.sd : !1;
        if (b.J)
            for (a = 0, f = b.Cg.length; a < f; ++a) l = b.Cg[a], n || l.qk ? Ea(d, l.e) : (this.Zt(l), l.Ck.Zl(e, d));
        else n || b.qk ? Ea(d, b.e) : (this.Zt(b), b.Ck.Zl(e, d))
    };
    h.prototype.Zx = function(a, b, e, d) {
        var f, l;
        f = 0;
        for (l = b.length; f < l; ++f) this.pr(a, b[f], e, d)
    };
    h.prototype.Yx = function(a, b, e) {
        var d = this.Jt;
        d && this.Zx(a, d.Po, b, e)
    };
    h.prototype.rm = function(a, b, e) {
        var d = a.O(),
            f, l, n, c, q = this.sb().qb.nd,
            t, k, m;
        if (d.Z)
            for (d.Z = !1, A(d.e), f = 0, c = a.e.length; f < c; f++) n = a.e[f], n.Ka(), t = n.k.Rb(b, e, !0), k = n.k.Rb(b, e, !1), n.$b(t, k) ? d.e.push(n) : q && d.la.push(n);
        else {
            l = 0;
            m = q ? d.la : d.e;
            f = 0;
            for (c = m.length; f < c; f++) n = m[f], n.Ka(), t = n.k.Rb(b, e, !0), k = n.k.Rb(b, e, !1), n.$b(t, k) && (q ? d.e.push(n) : (d.e[l] = d.e[f], l++));
            m.length = l
        }
        a.fd();
        return d.$n()
    };
    h.prototype.Hj = function(a, b) {
        if (!(a && b && a !== b && a.Be && b.Be)) return !1;
        a.Ka();
        b.Ka();
        var e = a.k,
            d = b.k,
            f, l, n, c, q, t, k, m;
        if (e === d || e.qd === d.qd && d.sd === d.sd && e.scale === d.scale && e.j === d.j && e.Sd === d.Sd) {
            if (!a.Za.wy(b.Za) || !a.Qb.Jr(b.Qb) || a.Sh && b.Sh) return !1;
            if (a.Sh) return this.Nt(a, b);
            if (b.Sh) return this.Nt(b, a);
            k = a.Da && !a.Da.gh();
            f = b.Da && !b.Da.gh();
            if (!k && !f) return !0;
            k ? (a.Da.Sg(a.width, a.height, a.j), k = a.Da) : (this.Od.Mh(a.Qb, a.x, a.y, a.width, a.height), k = this.Od);
            f ? (b.Da.Sg(b.width, b.height, b.j), m = b.Da) : (this.Od.Mh(b.Qb, b.x, b.y, b.width, b.height), m = this.Od);
            return k.Ii(m, b.x - a.x, b.y - a.y)
        }
        k = a.Da && !a.Da.gh();
        f = b.Da && !b.Da.gh();
        k ? (a.Da.Sg(a.width, a.height, a.j), this.Od.Bt(a.Da)) : this.Od.Mh(a.Qb, a.x, a.y, a.width, a.height);
        k = this.Od;
        f ? (b.Da.Sg(b.width, b.height, b.j), this.Hp.Bt(b.Da)) : this.Hp.Mh(b.Qb, b.x, b.y, b.width, b.height);
        m = this.Hp;
        f = 0;
        for (l = k.Md; f < l; f++) n = 2 * f, c = n + 1, q = k.Lb[n], t = k.Lb[c], k.Lb[n] = e.Wa(q + a.x, t + a.y, !0), k.Lb[c] = e.Wa(q + a.x, t + a.y, !1);
        k.Ka();
        f = 0;
        for (l = m.Md; f < l; f++) n = 2 * f, c = n + 1, q = m.Lb[n], t = m.Lb[c], m.Lb[n] = d.Wa(q + b.x, t + b.y, !0), m.Lb[c] = d.Wa(q + b.x, t + b.y, !1);
        m.Ka();
        return k.Ii(m, 0, 0)
    };
    var T = new ya;
    new xa(0, 0, 0, 0);
    var Q = [];
    h.prototype.Nt = function(a, b) {
        var e, d, f, l, n = b.Za,
            c = a.x,
            q = a.y;
        a.zB(n, Q);
        var t = b.Da && !b.Da.gh();
        e = 0;
        for (d = Q.length; e < d; ++e)
            if (f = Q[e], l = f.PB, n.xy(l, c, q) && (T.zj(l), T.offset(c, q), T.Jr(b.Qb)))
                if (t)
                    if (b.Da.Sg(b.width, b.height, b.j), f.fp) {
                        if (f.fp.Ii(b.Da, b.x - (c + l.left), b.y - (q + l.top))) return A(Q), !0
                    } else {
                        if (this.Od.Mh(T, 0, 0, l.right - l.left, l.bottom - l.top), this.Od.Ii(b.Da, b.x, b.y)) return A(Q), !0
                    }
        else if (f.fp) {
            if (this.Od.Mh(b.Qb, 0, 0, b.width, b.height), f.fp.Ii(this.Od, -(c + l.left), -(q + l.top))) return A(Q), !0
        } else return A(Q), !0;
        A(Q);
        return !1
    };
    h.prototype.Vt = function(a, b) {
        if (!b) return !1;
        var e, d, f, l, n;
        e = 0;
        for (d = a.$a.length; e < d; e++)
            if (a.$a[e].behavior instanceof b) return !0;
        if (!a.J)
            for (e = 0, d = a.Ua.length; e < d; e++)
                for (n = a.Ua[e], f = 0, l = n.$a.length; f < l; f++)
                    if (n.$a[f].behavior instanceof b) return !0;
        return !1
    };
    h.prototype.Np = function(a) {
        return this.Vt(a, jc.IA)
    };
    h.prototype.Op = function(a) {
        return this.Vt(a, jc.KA)
    };
    var M = [];
    h.prototype.Lg = function(a) {
        var b, e, d;
        a.Ka();
        this.Yx(a.k, a.Za, M);
        b = 0;
        for (e = M.length; b < e; ++b)
            if (d = M[b], d.ga.solidEnabled && this.Hj(a, d)) return A(M), d;
        A(M);
        return null
    };
    h.prototype.ft = function(a, b, e, d) {
        d = d || 50;
        var f = a.x,
            l = a.y,
            n, c = null,
            q = null;
        for (n = 0; n < d; n++)
            if (a.x = f + b * n, a.y = l + e * n, a.aa(), !this.Hj(a, c) && ((c = this.Lg(a)) && (q = c), !c && !c)) return q && this.pz(a, b, e, q), !0;
        a.x = f;
        a.y = l;
        a.aa();
        return !1
    };
    h.prototype.pz = function(a, b, e, d) {
        var f = 2,
            l, n = !1;
        l = !1;
        for (var c = a.x, q = a.y; 16 >= f;) l = 1 / f, f *= 2, a.x += b * l * (n ? 1 : -1), a.y += e * l * (n ? 1 : -1), a.aa(), this.Hj(a, d) ? l = n = !0 : (l = n = !1, c = a.x, q = a.y);
        l && (a.x = c, a.y = q, a.aa())
    };
    h.prototype.rz = function(a) {
        var b = ia(void 0) ? 100 : void 0,
            e = 0,
            d = a.x,
            f = a.y,
            l = 0,
            n = 0,
            c = 0,
            q = this.Lg(a);
        if (!q) return !0;
        for (; e <= b;) {
            switch (l) {
                case 0:
                    n = 0;
                    c = -1;
                    e++;
                    break;
                case 1:
                    n = 1;
                    c = -1;
                    break;
                case 2:
                    n = 1;
                    c = 0;
                    break;
                case 3:
                    c = n = 1;
                    break;
                case 4:
                    n = 0;
                    c = 1;
                    break;
                case 5:
                    n = -1;
                    c = 1;
                    break;
                case 6:
                    n = -1;
                    c = 0;
                    break;
                case 7:
                    c = n = -1
            }
            l = (l + 1) % 8;
            a.x = ua(d + n * e);
            a.y = ua(f + c * e);
            a.aa();
            if (!this.Hj(a, q) && (q = this.Lg(a), !q)) return !0
        }
        a.x = d;
        a.y = f;
        a.aa();
        return !1
    };
    h.prototype.$l = function(a, b) {
        a.Be && b.Be && this.Hg.push([a, b])
    };
    h.prototype.Zv = function(a, b, e) {
        var d, f, l;
        d = 0;
        for (f = this.Hg.length; d < f; ++d) {
            l = this.Hg[d];
            if (l[0] === a) l = l[1];
            else if (l[1] === a) l = l[0];
            else continue;
            if (b.J) {
                if (-1 === b.Cg.indexOf(b)) continue
            } else if (l.type !== b) continue; - 1 === e.indexOf(l) && e.push(l)
        }
    };
    h.prototype.lw = function(a, b) {
        var e, d, f;
        e = 0;
        for (d = this.Hg.length; e < d; e++)
            if (f = this.Hg[e], f[0] === a && f[1] === b || f[0] === b && f[1] === a) return !0;
        return !1
    };
    var R = -1;
    h.prototype.trigger = function(a, b, e) {
        if (!this.Ia) return !1;
        var d = this.Ia.jg;
        if (!d) return !1;
        var f = !1,
            l, n, c;
        R++;
        var q = d.yn;
        n = 0;
        for (c = q.length; n < c; ++n) l = this.St(a, b, q[n], e), f = f || l;
        l = this.St(a, b, d, e);
        R--;
        return f || l
    };
    h.prototype.St = function(a, b, e, d) {
        var f = !1,
            l, n, c, q;
        if (b)
            for (c = this.Lp(a, b, b.type.name, e, d), f = f || c, q = b.type.Ua, l = 0, n = q.length; l < n; ++l) c = this.Lp(a, b, q[l].name, e, d), f = f || c;
        else c = this.Lp(a, b, "system", e, d), f = f || c;
        return f
    };
    h.prototype.Lp = function(a, b, e, d, f) {
        var l, n = !1,
            c = !1,
            c = "undefined" !== typeof f,
            q = (c ? d.dr : d.Tt)[e];
        if (!q) return n;
        var t = null;
        d = 0;
        for (l = q.length; d < l; ++d)
            if (q[d].method == a) {
                t = q[d].qi;
                break
            }
        if (!t) return n;
        var k;
        c ? k = t[f] : k = t;
        if (!k) return null;
        d = 0;
        for (l = k.length; d < l; d++) a = k[d][0], f = k[d][1], c = this.Fx(b, e, a, f), n = n || c;
        return n
    };
    h.prototype.Fx = function(a, b, e, d) {
        var f, l, n = !1;
        this.Mp++;
        var c = this.sb().qb;
        c && this.rj(c.Uf);
        var q = 1 < this.Mp;
        this.rj(e.Uf);
        q && this.qz();
        var t = this.Yl(e);
        t.qb = e;
        a && (f = this.types[b].O(), f.Z = !1, A(f.e), f.e[0] = a, this.types[b].fd());
        a = !0;
        if (e.parent) {
            b = t.Mt;
            for (f = e.parent; f;) b.push(f), f = f.parent;
            b.reverse();
            f = 0;
            for (l = b.length; f < l; f++)
                if (!b[f].Fz()) {
                    a = !1;
                    break
                }
        }
        a && (this.ri++, e.nd ? e.Ez(d) : e.yb(), n = n || t.vg);
        this.Tl();
        q && this.hz();
        this.td(e.Uf);
        c && this.td(c.Uf);
        this.Jf && 0 === this.Kd && 0 === R && !this.qo && this.Yb();
        this.Mp--;
        return n
    };
    h.prototype.On = function() {
        var a = this.sb();
        return a.qb.Bb[a.Ab]
    };
    h.prototype.qz = function() {
        this.Al++;
        this.Al >= this.Jo.length && this.Jo.push([])
    };
    h.prototype.hz = function() {
        this.Al--
    };
    h.prototype.qr = function() {
        return this.Jo[this.Al]
    };
    h.prototype.Yl = function(a) {
        this.Rk++;
        this.Rk >= this.En.length && this.En.push(new Wb);
        var b = this.sb();
        b.reset(a);
        return b
    };
    h.prototype.Tl = function() {
        this.Rk--
    };
    h.prototype.sb = function() {
        return this.En[this.Rk]
    };
    h.prototype.jp = function(a) {
        this.wh++;
        this.wh >= this.dj.length && this.dj.push(ba({
            name: a,
            index: 0,
            Ra: !1
        }));
        var b = this.Pn();
        b.name = a;
        b.index = 0;
        b.Ra = !1;
        return b
    };
    h.prototype.gp = function() {
        this.wh--
    };
    h.prototype.Pn = function() {
        return this.dj[this.wh]
    };
    h.prototype.sr = function(a, b) {
        for (var e, d, f, l, n, c; b;) {
            e = 0;
            for (d = b.xd.length; e < d; e++)
                if (c = b.xd[e], c instanceof Xb && mb(a, c.name)) return c;
            b = b.parent
        }
        e = 0;
        for (d = this.Ie.length; e < d; e++)
            for (n = this.Ie[e], f = 0, l = n.Gf.length; f < l; f++)
                if (c = n.Gf[f], c instanceof Xb && mb(a, c.name)) return c;
        return null
    };
    h.prototype.ur = function(a) {
        var b, e;
        b = 0;
        for (e = this.Ld.length; b < e; b++)
            if (this.Ld[b].ka === a) return this.Ld[b];
        return null
    };
    h.prototype.dl = function(a) {
        var b, e;
        b = 0;
        for (e = this.B.length; b < e; b++)
            if (this.B[b].ka === a) return this.B[b];
        return null
    };
    h.prototype.Px = function(a) {
        var b, e;
        b = 0;
        for (e = this.tf.length; b < e; b++)
            if (this.tf[b].ka === a) return this.tf[b];
        return null
    };
    h.prototype.xw = function(a, b) {
        this.Cj = [a, b];
        this.ja = !0
    };
    h.prototype.oy = function() {
        var a = this,
            b = this.vp,
            e = this.Qe,
            d = this.ul,
            f = !1;
        this.Gt && (f = !0, b = "__c2_continuouspreview", this.Gt = !1);
        if (b.length) {
            this.Yb();
            e = this.Jz();
            if (c() && !this.ld) m(b, e, function() {
                ga("Saved state to IndexedDB storage (" + e.length + " bytes)");
                a.Qe = e;
                a.trigger(S.prototype.g.Lm, null);
                a.Qe = "";
                f && p()
            }, function(d) {
                try {
                    localStorage.setItem("__c2save_" +
                        b, e), ga("Saved state to WebStorage (" + e.length + " bytes)"), a.Qe = e, a.trigger(S.prototype.g.Lm, null), a.Qe = "", f && p()
                } catch (l) {
                    ga("Failed to save game state: " + d + "; " + l), a.trigger(S.prototype.g.kq, null)
                }
            });
            else try {
                localStorage.setItem("__c2save_" + b, e), ga("Saved state to WebStorage (" + e.length + " bytes)"), a.Qe = e, this.trigger(S.prototype.g.Lm, null), a.Qe = "", f && p()
            } catch (l) {
                ga("Error saving to WebStorage: " + l), a.trigger(S.prototype.g.kq, null)
            }
            this.ul = this.vp = "";
            this.Hb = null
        }
        if (d.length) {
            if (c() && !this.ld) r(d, function(b) {
                b ? (a.Hb = b, ga("Loaded state from IndexedDB storage (" + a.Hb.length + " bytes)")) : (a.Hb = localStorage.getItem("__c2save_" + d) || "", ga("Loaded state from WebStorage (" + a.Hb.length + " bytes)"));
                a.Fj = !1;
                a.Hb || (a.Hb = null, a.trigger(S.prototype.g.gk, null))
            }, function() {
                a.Hb = localStorage.getItem("__c2save_" + d) || "";
                ga("Loaded state from WebStorage (" + a.Hb.length + " bytes)");
                a.Fj = !1;
                a.Hb || (a.Hb = null, a.trigger(S.prototype.g.gk, null))
            });
            else {
                try {
                    this.Hb = localStorage.getItem("__c2save_" + d) || "", ga("Loaded state from WebStorage (" +
                        this.Hb.length + " bytes)")
                } catch (n) {
                    this.Hb = null
                }
                this.Fj = !1;
                a.Hb || (a.Hb = null, a.trigger(S.prototype.g.gk, null))
            }
            this.vp = this.ul = ""
        }
        null !== this.Hb && (this.Yb(), this.Ly(this.Hb) ? (this.Qe = this.Hb, this.trigger(S.prototype.g.hv, null), this.Qe = "") : a.trigger(S.prototype.g.gk, null), this.Hb = null)
    };
    h.prototype.Jz = function() {
        var a, e, d, f, l, n, c, q = {
            c2save: !0,
            version: 1,
            rt: {
                time: this.Ub.ta,
                walltime: this.mf.ta,
                timescale: this.Th,
                tickcount: this.cd,
                execcount: this.ri,
                next_uid: this.hj,
                running_layout: this.Ia.ka,
                start_time_offset: Date.now() -
                    this.nm
            },
            types: {},
            layouts: {},
            events: {
                groups: {},
                cnds: {},
                acts: {},
                vars: {}
            }
        };
        a = 0;
        for (e = this.B.length; a < e; a++)
            if (l = this.B[a], !l.J && !this.Np(l)) {
                n = {
                    instances: []
                };
                Wa(l.ga) && (n.ex = b(l.ga));
                d = 0;
                for (f = l.e.length; d < f; d++) n.instances.push(this.up(l.e[d]));
                q.types[l.ka.toString()] = n
            }
        a = 0;
        for (e = this.Ld.length; a < e; a++) d = this.Ld[a], q.layouts[d.ka.toString()] = d.nb();
        f = q.events.groups;
        a = 0;
        for (e = this.tf.length; a < e; a++) d = this.tf[a], f[d.ka.toString()] = this.Ei[d.Di].dh;
        e = q.events.cnds;
        for (c in this.zf) this.zf.hasOwnProperty(c) && (a = this.zf[c], Wa(a.ga) && (e[c] = {
            ex: b(a.ga)
        }));
        e = q.events.acts;
        for (c in this.sf) this.sf.hasOwnProperty(c) && (a = this.sf[c], Wa(a.ga) && (e[c] = {
            ex: b(a.ga)
        }));
        e = q.events.vars;
        for (c in this.Xh) this.Xh.hasOwnProperty(c) && (a = this.Xh[c], a.nl || a.parent && !a.Ri || (e[c] = a.data));
        q.system = this.re.nb();
        return JSON.stringify(q)
    };
    h.prototype.ht = function() {
        var a, b, e, d, f, l;
        this.Te = {};
        a = 0;
        for (b = this.B.length; a < b; a++)
            if (e = this.B[a], !e.J)
                for (d = 0, f = e.e.length; d < f; d++) l = e.e[d], this.Te[l.uid.toString()] = l
    };
    h.prototype.Ly = function(a) {
        var b;
        try {
            b = JSON.parse(a)
        } catch (e) {
            return !1
        }
        if (!b.c2save || 1 < b.version) return !1;
        this.Ki = !0;
        a = b.rt;
        this.Ub.reset();
        this.Ub.ta = a.time;
        this.mf.reset();
        this.mf.ta = a.walltime || 0;
        this.Th = a.timescale;
        this.cd = a.tickcount;
        this.ri = a.execcount;
        this.nm = Date.now() - a.start_time_offset;
        var d = a.running_layout;
        if (d !== this.Ia.ka)
            if (d = this.ur(d)) this.Zq(d);
            else return;
        var f, l, n, c, q, t, k;
        t = b.types;
        for (l in t)
            if (t.hasOwnProperty(l) && (c = this.dl(parseInt(l, 10))) && !c.J && !this.Np(c)) {
                t[l].ex ? c.ga = t[l].ex : Ya(c.ga);
                q = c.e;
                n = t[l].instances;
                d = 0;
                for (f = qa(q.length, n.length); d < f; d++) this.wl(q[d], n[d]);
                d = n.length;
                for (f = q.length; d < f; d++) this.Yf(q[d]);
                d = q.length;
                for (f = n.length; d < f; d++) {
                    q = null;
                    if (c.ra.Nf && (q = this.Ia.cl(n[d].w.l), !q)) continue;
                    q = this.Bf(c.jd, q, !1, 0, 0, !0);
                    this.wl(q, n[d])
                }
                c.Ph = !0
            }
        this.Yb();
        this.ht();
        f = b.layouts;
        for (l in f) f.hasOwnProperty(l) && (d = this.ur(parseInt(l, 10))) && d.Gb(f[l]);
        f = b.events.groups;
        for (l in f) f.hasOwnProperty(l) && (d = this.Px(parseInt(l, 10))) && this.Ei[d.Di] && this.Ei[d.Di].xt(f[l]);
        d = b.events.cnds;
        for (l in this.zf) this.zf.hasOwnProperty(l) && (d.hasOwnProperty(l) ? this.zf[l].ga = d[l].ex : this.zf[l].ga = {});
        d = b.events.acts;
        for (l in this.sf) this.sf.hasOwnProperty(l) && (d.hasOwnProperty(l) ? this.sf[l].ga = d[l].ex : this.sf[l].ga = {});
        d = b.events.vars;
        for (l in d) d.hasOwnProperty(l) && this.Xh.hasOwnProperty(l) && (this.Xh[l].data = d[l]);
        this.hj = a.next_uid;
        this.Ki = !1;
        d = 0;
        for (f = this.Vk.length; d < f; ++d) q = this.Vk[d], this.trigger(Object.getPrototypeOf(q.type.ra).g.ck, q);
        A(this.Vk);
        this.re.Gb(b.system);
        d = 0;
        for (f = this.B.length; d < f; d++)
            if (c = this.B[d], !c.J && !this.Np(c))
                for (b = 0, l = c.e.length; b < l; b++) {
                    q = c.e[b];
                    if (c.jc)
                        for (t = q.Ci(), A(q.siblings), a = 0, n = c.Fc.length; a < n; a++) k = c.Fc[a], c !== k && q.siblings.push(k.e[t]);
                    q.Vd && q.Vd();
                    if (q.U)
                        for (a = 0, n = q.U.length; a < n; a++) t = q.U[a], t.Vd && t.Vd()
                }
        return this.ja = !0
    };
    h.prototype.up = function(a, e) {
        var d, f, l, n, c;
        n = a.type;
        l = n.ra;
        var q = {};
        e ? q.c2 = !0 : q.uid = a.uid;
        Wa(a.ga) && (q.ex = b(a.ga));
        if (a.Eb && a.Eb.length)
            for (q.ivs = {}, d = 0, f = a.Eb.length; d < f; d++) q.ivs[a.type.jo[d].toString()] = a.Eb[d];
        if (l.Nf) {
            l = {
                x: a.x,
                y: a.y,
                w: a.width,
                h: a.height,
                l: a.k.ka,
                zi: a.ee()
            };
            0 !== a.j && (l.a = a.j);
            1 !== a.opacity && (l.o = a.opacity);
            .5 !== a.gc && (l.hX = a.gc);
            .5 !== a.hc && (l.hY = a.hc);
            0 !== a.Zb && (l.bm = a.Zb);
            a.visible || (l.v = a.visible);
            a.Be || (l.ce = a.Be); - 1 !== a.gj && (l.mts = a.gj);
            if (n.V.length)
                for (l.fx = [], d = 0, f = n.V.length; d < f; d++) c = n.V[d], l.fx.push({
                    name: c.name,
                    active: a.rf[c.index],
                    params: a.ab[c.index]
                });
            q.w = l
        }
        if (a.U && a.U.length)
            for (q.behs = {}, d = 0, f = a.U.length; d < f; d++) n = a.U[d], n.nb && (q.behs[n.type.ka.toString()] = n.nb());
        a.nb && (q.data = a.nb());
        return q
    };
    h.prototype.Rx = function(a, b) {
        var e, d;
        e = 0;
        for (d = a.jo.length; e < d; e++)
            if (a.jo[e] === b) return e;
        return -1
    };
    h.prototype.Ox = function(a, b) {
        var e, d;
        e = 0;
        for (d = a.U.length; e < d; e++)
            if (a.U[e].type.ka === b) return e;
        return -1
    };
    h.prototype.wl = function(a, b, e) {
        var d, f, l, n, c;
        c = a.type;
        var q = c.ra;
        if (e) {
            if (!b.c2) return
        } else a.uid = b.uid;
        b.ex ? a.ga = b.ex : Ya(a.ga);
        if (f = b.ivs)
            for (d in f) f.hasOwnProperty(d) && (l = this.Rx(c, parseInt(d, 10)), 0 > l || l >= a.Eb.length || (n = f[d], null === n && (n = NaN), a.Eb[l] = n));
        if (q.Nf) {
            l = b.w;
            a.k.ka !== l.l && (f = a.k, a.k = this.Ia.cl(l.l), a.k ? (f.Ih(a, !0), a.k.gi(a, !0), a.aa(), a.k.yj(0)) : (a.k = f, e || this.Yf(a)));
            a.x = l.x;
            a.y = l.y;
            a.width = l.w;
            a.height = l.h;
            a.Rd = l.zi;
            a.j = l.hasOwnProperty("a") ? l.a : 0;
            a.opacity = l.hasOwnProperty("o") ? l.o : 1;
            a.gc = l.hasOwnProperty("hX") ? l.hX : .5;
            a.hc = l.hasOwnProperty("hY") ? l.hY : .5;
            a.visible = l.hasOwnProperty("v") ? l.v : !0;
            a.Be = l.hasOwnProperty("ce") ? l.ce : !0;
            a.gj = l.hasOwnProperty("mts") ? l.mts : -1;
            a.Zb = l.hasOwnProperty("bm") ? l.bm : 0;
            a.ji = jb(a.Zb);
            this.G && kb(a, a.Zb, this.G);
            a.aa();
            if (l.hasOwnProperty("fx"))
                for (e = 0, f = l.fx.length; e < f; e++) n = c.Rn(l.fx[e].name), 0 > n || (a.rf[n] = l.fx[e].active, a.ab[n] = l.fx[e].params);
            a.Qd()
        }
        if (c = b.behs)
            for (d in c) c.hasOwnProperty(d) && (e = this.Ox(a, parseInt(d, 10)), 0 > e || a.U[e].Gb(c[d]));
        b.data && a.Gb(b.data)
    };
    h.prototype.er = function(a, b, e) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory + "www/" + a, function(a) {
            a.file(b, e)
        }, e)
    };
    h.prototype.Gx = function(a, b) {
        this.er("data.js", function(e) {
            var d = new FileReader;
            d.onload = function(b) {
                a(b.target.result)
            };
            d.onerror = b;
            d.readAsText(e)
        }, b)
    };
    var I = [],
        J = 0;
    h.prototype.Lo = function() {
        if (I.length && !(8 <= J)) {
            J++;
            var a = I.shift();
            this.Aw(a.filename, a.Wz, a.Yw)
        }
    };
    h.prototype.fr = function(a, b, e) {
        var d = this;
        I.push({
            filename: a,
            Wz: function(a) {
                J--;
                d.Lo();
                b(a)
            },
            Yw: function(a) {
                J--;
                d.Lo();
                e(a)
            }
        });
        this.Lo()
    };
    h.prototype.Aw = function(a, b, e) {
        this.er(a, function(a) {
            var e = new FileReader;
            e.onload = function(a) {
                b(a.target.result)
            };
            e.readAsArrayBuffer(a)
        }, e)
    };
    h.prototype.Hx = function(a, b, e) {
        var d = "",
            f = a.toLowerCase(),
            l = f.substr(f.length - 4),
            f = f.substr(f.length - 5);
        ".mp4" === l ? d = "video/mp4" : ".webm" === f ? d = "video/webm" : ".m4a" === l ? d = "audio/mp4" : ".mp3" === l && (d = "audio/mpeg");
        this.fr(a, function(a) {
            a = URL.createObjectURL(new Blob([a], {
                type: d
            }));
            b(a)
        }, e)
    };
    h.prototype.yy = function(a) {
        return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    };
    h.prototype.yt = function(a, b) {
        this.ll && !this.yy(b) ? this.Hx(b, function(b) {
            a.src = b
        }, function(a) {
            alert("Failed to load image: " + a)
        }) : a.src = b
    };
    h.prototype.hm = function(a, b) {
        "undefined" !== typeof a.imageSmoothingEnabled ? a.imageSmoothingEnabled = b : (a.webkitImageSmoothingEnabled = b, a.mozImageSmoothingEnabled = b, a.msImageSmoothingEnabled = b)
    };
    Yb = function(a) {
        return new h(document.getElementById(a))
    };
    Zb = function(a, b) {
        return new h({
            dc: !0,
            width: a,
            height: b
        })
    };
    window.cr_createRuntime = Yb;
    window.cr_createDCRuntime = Zb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.uf = !0;
        document.body.appendChild(a);
        a = new h(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange", function() {
            window.c2runtime.setSize(window.innerWidth, window.innerHeight)
        });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() {
        var a = new h(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    }
})();
window.cr_getC2Runtime = function() {
    var h = document.getElementById("c2canvas");
    return h ? h.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_getSnapshot = function(h, g) {
    var c = window.cr_getC2Runtime();
    c && c.xw(h, g)
};
window.cr_sizeCanvas = function(h, g) {
    if (0 !== h && 0 !== g) {
        var c = window.cr_getC2Runtime();
        c && c.setSize(h, g)
    }
};
window.cr_setSuspended = function(h) {
    var g = window.cr_getC2Runtime();
    g && g.setSuspended(h)
};
(function() {
    function h(a, b) {
        this.b = a;
        this.jg = null;
        this.scrollX = this.b.Jb / 2;
        this.scrollY = this.b.Ib / 2;
        this.scale = 1;
        this.j = 0;
        this.ah = !0;
        this.name = b[0];
        this.cz = b[1];
        this.bz = b[2];
        this.width = b[1];
        this.height = b[2];
        this.Wt = b[3];
        this.Et = b[4];
        this.ka = b[5];
        var d = b[6],
            f, c;
        this.Y = [];
        this.Hi = [];
        f = 0;
        for (c = d.length; f < c; f++) {
            var k = new $b(this, d[f]);
            k.Fs = f;
            this.Y.push(k)
        }
        d = b[7];
        this.Kf = [];
        f = 0;
        for (c = d.length; f < c; f++) {
            var k = d[f],
                m = this.b.B[k[1]];
            m.jd || (m.jd = k);
            this.Kf.push(k); - 1 === this.Hi.indexOf(m) && this.Hi.push(m)
        }
        this.V = [];
        this.Ba = [];
        this.df = !0;
        this.ab = [];
        f = 0;
        for (c = b[8].length; f < c; f++) this.V.push({
            id: b[8][f][0],
            name: b[8][f][1],
            zb: -1,
            $c: !1,
            Ya: !0,
            index: f
        }), this.ab.push(b[8][f][2].slice(0));
        this.Qd();
        this.ud = new xa(0, 0, 1, 1);
        this.mp = new xa(0, 0, 1, 1);
        this.Sf = {}
    }

    function g(a, b) {
        return a.Rd - b.Rd
    }

    function c(a, b) {
        this.Nb = a;
        this.b = a.b;
        this.e = [];
        this.scale = 1;
        this.j = 0;
        this.Fe = !1;
        this.hf = new xa(0, 0, 0, 0);
        this.Qt = new ya;
        this.La = this.Ha = this.Ma = this.Ga = 0;
        this.Mg = !1;
        this.nf = -1;
        this.qn = 0;
        this.name = b[0];
        this.index = b[1];
        this.ka = b[2];
        this.visible = b[3];
        this.Dd = b[4];
        this.Pd = b[5];
        this.qd = b[6];
        this.sd = b[7];
        this.opacity = b[8];
        this.Zk = b[9];
        this.ed = b[10];
        this.Sd = b[11];
        this.Zb = b[12];
        this.Uw = b[13];
        this.ji = "source-over";
        this.ac = this.mc = 0;
        this.Xb = null;
        this.Re = k();
        this.Nd = !0;
        this.uh = new xa(0, 0, -1, -1);
        this.Sb = new xa(0, 0, -1, -1);
        this.ed && (this.Xb = new ib(this.b.Jb, this.b.Ib));
        this.ne = !1;
        var d = b[14],
            f, c;
        this.Kt = [];
        this.Vc = [];
        this.mi = [];
        f = 0;
        for (c = d.length; f < c; f++) {
            var m = d[f],
                g = this.b.B[m[1]];
            g.jd || (g.jd = m, g.vw = this.index);
            this.Vc.push(m); - 1 === this.Nb.Hi.indexOf(g) && this.Nb.Hi.push(g)
        }
        Da(this.Kt, this.Vc);
        this.V = [];
        this.Ba = [];
        this.df = !0;
        this.ab = [];
        f = 0;
        for (c = b[15].length; f < c; f++) this.V.push({
            id: b[15][f][0],
            name: b[15][f][1],
            zb: -1,
            $c: !1,
            Ya: !0,
            index: f
        }), this.ab.push(b[15][f][2].slice(0));
        this.Qd();
        this.ud = new xa(0, 0, 1, 1);
        this.mp = new xa(0, 0, 1, 1)
    }

    function k() {
        return b.length ? b.pop() : []
    }

    function m(a) {
        A(a);
        b.push(a)
    }
    h.prototype.Iz = function(a) {
        var b = a.type.ka.toString();
        this.Sf.hasOwnProperty(b) || (this.Sf[b] = []);
        this.Sf[b].push(this.b.up(a))
    };
    h.prototype.Br = function() {
        var a = this.Y[0];
        return !a.Pd && 1 === a.opacity && !a.Zk && a.visible
    };
    h.prototype.Qd = function() {
        A(this.Ba);
        this.df = !0;
        var a, b, d;
        a = 0;
        for (b = this.V.length; a < b; a++) d = this.V[a], d.Ya && (this.Ba.push(d), d.$c || (this.df = !1))
    };
    h.prototype.Qn = function(a) {
        var b, d, f;
        b = 0;
        for (d = this.V.length; b < d; b++)
            if (f = this.V[b], f.name === a) return f;
        return null
    };
    var r = [],
        p = !0;
    h.prototype.Fp = function() {
        this.Et && (this.jg = this.b.Fn[this.Et], this.jg.Pp());
        this.b.Ia = this;
        this.width = this.cz;
        this.height = this.bz;
        this.scrollX = this.b.Jb / 2;
        this.scrollY = this.b.Ib / 2;
        var a, b, d, f, c, k, m;
        a = 0;
        for (d = this.b.B.length; a < d; a++)
            if (b = this.b.B[a], !b.J)
                for (c = b.e, b = 0, f = c.length; b < f; b++)
                    if (k = c[b], k.k) {
                        var n = k.k.Fs;
                        n >= this.Y.length && (n = this.Y.length - 1);
                        k.k = this.Y[n]; - 1 === k.k.e.indexOf(k) && k.k.e.push(k);
                        k.k.Mg = !0
                    }
        if (!p)
            for (a = 0, d = this.Y.length; a < d; ++a) this.Y[a].e.sort(g);
        A(r);
        this.gw();
        a = 0;
        for (d = this.Y.length; a < d; a++) k = this.Y[a], k.rw(), k.Cm();
        c = !1;
        if (!this.ah) {
            for (m in this.Sf)
                if (this.Sf.hasOwnProperty(m) && (b = this.b.dl(parseInt(m, 10))) && !b.J && this.b.Op(b)) {
                    f = this.Sf[m];
                    a = 0;
                    for (d = f.length; a < d; a++) {
                        k = null;
                        if (b.ra.Nf && (k = this.cl(f[a].w.l), !k)) continue;
                        k = this.b.Bf(b.jd, k, !1, 0, 0, !0);
                        this.b.wl(k, f[a]);
                        c = !0;
                        r.push(k)
                    }
                    A(f)
                }
            a = 0;
            for (d = this.Y.length; a < d; a++) this.Y[a].e.sort(g), this.Y[a].Mg = !0
        }
        c && (this.b.Yb(), this.b.ht());
        for (a = 0; a < r.length; a++)
            if (k = r[a], k.type.jc)
                for (d = k.Ci(), b = 0, f = k.type.Fc.length; b < f; b++) m = k.type.Fc[b], k.type !== m && (m.e.length > d ? k.siblings.push(m.e[d]) : m.jd && (c = this.b.Bf(m.jd, k.k, !0, k.x, k.y, !0), this.b.Yb(), m.Bm(), k.siblings.push(c), r.push(c)));
        a = 0;
        for (d = this.Kf.length; a < d; a++) k = this.Kf[a], b = this.b.B[k[1]], b.jc || this.b.Bf(this.Kf[a], null, !0);
        this.b.dg = null;
        this.b.Yb();
        if (this.b.Sa && !this.b.lb)
            for (a = 0, d = this.b.B.length; a < d; a++) m = this.b.B[a], !m.J && m.e.length && m.Wl && m.Wl(this.b.Sa);
        if (this.b.Ki) Da(this.b.Vk, r);
        else
            for (a = 0, d = r.length; a < d; a++) k = r[a], this.b.trigger(Object.getPrototypeOf(k.type.ra).g.ck, k);
        A(r);
        this.b.Ki || this.b.trigger(S.prototype.g.fq, null);
        this.ah = !1
    };
    h.prototype.qw = function() {
        var a, b, d, f, c;
        b = a = 0;
        for (d = this.Kf.length; a < d; a++) f = this.Kf[a], c = this.b.B[f[1]], c.global ? c.jc || this.b.Bf(f, null, !0) : (this.Kf[b] = f, b++);
        Ca(this.Kf, b)
    };
    h.prototype.Uz = function() {
        this.b.Ki || this.b.trigger(S.prototype.g.gv, null);
        this.b.mo = !0;
        A(this.b.re.Cc);
        var a, b, d, f, c, k;
        if (!this.ah)
            for (a = 0, b = this.Y.length; a < b; a++)
                for (this.Y[a].Sp(), c = this.Y[a].e, d = 0, f = c.length; d < f; d++) k = c[d], k.type.global || this.b.Op(k.type) && this.Iz(k);
        a = 0;
        for (b = this.Y.length; a < b; a++) {
            c = this.Y[a].e;
            d = 0;
            for (f = c.length; d < f; d++) k = c[d], k.type.global || this.b.Yf(k);
            this.b.Yb();
            A(c);
            this.Y[a].Mg = !0
        }
        a = 0;
        for (b = this.b.B.length; a < b; a++)
            if (c = this.b.B[a], !(c.global || c.ra.Nf || c.ra.mm || c.J)) {
                d = 0;
                for (f = c.e.length; d < f; d++) this.b.Yf(c.e[d]);
                this.b.Yb()
            }
        p = !1;
        this.b.mo = !1
    };
    new xa(0, 0, 0, 0);
    h.prototype.Rc = function(a) {
        var b, d = a,
            f = !1,
            c = !this.b.Tc;
        c && (this.b.tl || (this.b.tl = document.createElement("canvas"), b = this.b.tl, b.width = this.b.N, b.height = this.b.M, this.b.Yr = b.getContext("2d"), f = !0), b = this.b.tl, d = this.b.Yr, b.width !== this.b.N && (b.width = this.b.N, f = !0), b.height !== this.b.M && (b.height = this.b.M, f = !0), f && this.b.hm(d, this.b.Ja));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.b.Sq && !this.Br() && d.clearRect(0, 0, this.b.N, this.b.M);
        var k, m, f = 0;
        for (k = this.Y.length; f < k; f++) m = this.Y[f], m.visible && 0 < m.opacity && 11 !== m.Zb && (m.e.length || !m.Pd) ? m.Rc(d) : m.Cm();
        c && a.drawImage(b, 0, 0, this.b.width, this.b.height)
    };
    h.prototype.Ef = function(a) {
        a.wt(!0);
        this.b.ub || (this.b.ub = a.Qc(this.b.N, this.b.M, this.b.Ja));
        if (this.b.ub.Gd !== this.b.N || this.b.ub.Fd !== this.b.M) a.deleteTexture(this.b.ub), this.b.ub = a.Qc(this.b.N, this.b.M, this.b.Ja);
        a.wd(this.b.ub);
        this.b.Tc || a.bf(this.b.N, this.b.M);
        var b, d;
        for (b = this.Y.length - 1; 0 <= b; --b) d = this.Y[b], d.visible && 1 === d.opacity && d.df && 0 === d.Zb && (d.e.length || !d.Pd) ? d.Ef(a) : d.Cm();
        a.wt(!1)
    };
    h.prototype.cc = function(a) {
        var b = 0 < this.Ba.length || this.b.Vh || !this.b.Tc || this.b.Qa;
        if (b) {
            this.b.ub || (this.b.ub = a.Qc(this.b.N, this.b.M, this.b.Ja));
            if (this.b.ub.Gd !== this.b.N || this.b.ub.Fd !== this.b.M) a.deleteTexture(this.b.ub), this.b.ub = a.Qc(this.b.N, this.b.M, this.b.Ja);
            a.wd(this.b.ub);
            this.b.Tc || a.bf(this.b.N, this.b.M)
        } else this.b.ub && (a.wd(null), a.deleteTexture(this.b.ub), this.b.ub = null);
        this.b.Sq && !this.Br() && a.clear(0, 0, 0, 0);
        var d, f, c;
        d = 0;
        for (f = this.Y.length; d < f; d++) c = this.Y[d], c.visible && 0 < c.opacity && (c.e.length || !c.Pd) ? c.cc(a) : c.Cm();
        b && (0 === this.Ba.length || 1 === this.Ba.length && this.b.Tc ? (1 === this.Ba.length ? (b = this.Ba[0].index, a.Bc(this.Ba[0].zb), a.Lh(null, 1 / this.b.N, 1 / this.b.M, 0, 0, 1, 1, this.scale, this.j, 0, 0, this.b.N / 2, this.b.M / 2, this.b.Ub.ta, this.ab[b]), a.Xl(this.Ba[0].zb) && (this.b.ja = !0)) : a.Bc(0), this.b.Tc || a.bf(this.b.width, this.b.height), a.wd(null), a.tt(!1), a.$e(1), a.kc(this.b.ub), a.pt(), a.vd(), a.dd(), b = this.b.width / 2, d = this.b.height / 2, a.sj(-b, d, b, d, b, -d, -b, -d), a.kc(null), a.tt(!0)) : this.np(a, null, null, null))
    };
    h.prototype.Bi = function() {
        return 0 < this.Ba.length || this.b.Vh || !this.b.Tc || this.b.Qa ? this.b.ub : null
    };
    h.prototype.xr = function() {
        var a = this.Y[0].Hc(),
            b, d, f;
        b = 1;
        for (d = this.Y.length; b < d; b++) f = this.Y[b], (0 !== f.qd || 0 !== f.sd) && f.Hc() < a && (a = f.Hc());
        return a
    };
    h.prototype.mt = function(a) {
        if (!this.Wt) {
            var b = 1 / this.xr() * this.b.N / 2;
            a > this.width - b && (a = this.width - b);
            a < b && (a = b)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.ja = !0)
    };
    h.prototype.nt = function(a) {
        if (!this.Wt) {
            var b = 1 / this.xr() * this.b.M / 2;
            a > this.height - b && (a = this.height - b);
            a < b && (a = b)
        }
        this.scrollY !== a && (this.scrollY = a, this.b.ja = !0)
    };
    h.prototype.gw = function() {
        this.mt(this.scrollX);
        this.nt(this.scrollY)
    };
    h.prototype.np = function(a, b, d, f) {
        var c = d ? d.Ba : b ? b.Ba : this.Ba,
            k = 1,
            m = 0,
            n = 0,
            t = 0,
            g = this.b.N,
            h = this.b.M;
        d ? (k = d.k.Hc(), m = d.k.Db(), n = d.k.Ga, t = d.k.Ha, g = d.k.Ma, h = d.k.La) : b && (k = b.Hc(), m = b.Db(), n = b.Ga, t = b.Ha, g = b.Ma, h = b.La);
        var p = this.b.Ln,
            r, u, v, G, P = 0,
            U = 1,
            T, Q, M = this.b.N,
            R = this.b.M,
            I = M / 2,
            J = R / 2,
            y = b ? b.ud : this.ud,
            H = b ? b.mp : this.mp,
            O = 0,
            z = 0,
            K = 0,
            E = 0,
            V = M,
            sa = M,
            W = R,
            ka = R,
            aa = v = 0;
        G = d ? d.k.Db() : 0;
        if (d) {
            r = 0;
            for (u = c.length; r < u; r++) v += a.Vx(c[r].zb), aa += a.Wx(c[r].zb);
            E = d.Za;
            O = b.Wa(E.left, E.top, !0, !0);
            K = b.Wa(E.left, E.top, !1, !0);
            V = b.Wa(E.right, E.bottom, !0, !0);
            W = b.Wa(E.right, E.bottom, !1, !0);
            0 !== G && (r = b.Wa(E.right, E.top, !0, !0), u = b.Wa(E.right, E.top, !1, !0), z = b.Wa(E.left, E.bottom, !0, !0), E = b.Wa(E.left, E.bottom, !1, !0), G = Math.min(O, V, r, z), V = Math.max(O, V, r, z), O = G, G = Math.min(K, W, u, E), W = Math.max(K, W, u, E), K = G);
            O -= v;
            K -= aa;
            V += v;
            W += aa;
            H.left = O / M;
            H.top = 1 - K / R;
            H.right = V / M;
            H.bottom = 1 - W / R;
            z = O = ua(O);
            E = K = ua(K);
            sa = V = va(V);
            ka = W = va(W);
            z -= v;
            E -= aa;
            sa += v;
            ka += aa;
            0 > O && (O = 0);
            0 > K && (K = 0);
            V > M && (V = M);
            W > R && (W = R);
            0 > z && (z = 0);
            0 > E && (E = 0);
            sa > M && (sa = M);
            ka > R && (ka = R);
            y.left = O / M;
            y.top = 1 - K / R;
            y.right = V / M;
            y.bottom = 1 - W / R
        } else y.left = H.left = 0, y.top = H.top = 0, y.right = H.right = 1, y.bottom = H.bottom = 1;
        aa = d && (a.pj(c[0].zb) || 0 !== v || 0 !== aa || 1 !== d.opacity || d.type.ra.zs) || b && !d && 1 !== b.opacity;
        a.pt();
        if (aa) {
            p[P] || (p[P] = a.Qc(M, R, this.b.Ja));
            if (p[P].Gd !== M || p[P].Fd !== R) a.deleteTexture(p[P]), p[P] = a.Qc(M, R, this.b.Ja);
            a.Bc(0);
            a.wd(p[P]);
            Q = ka - E;
            a.clearRect(z, R - E - Q, sa - z, Q);
            d ? d.cc(a) : (a.kc(this.b.Fb), a.$e(b.opacity), a.vd(), a.translate(-I, -J), a.dd(), a.ad(O, W, V, W, V, K, O, K, y));
            H.left = H.top = 0;
            H.right = H.bottom = 1;
            d && (G = y.top, y.top = y.bottom, y.bottom = G);
            P = 1;
            U = 0
        }
        a.$e(1);
        v = c.length - 1;
        var Ia = a.ip(c[v].zb) || !b && !d && !this.b.Tc;
        r = G = 0;
        for (u = c.length; r < u; r++) {
            p[P] || (p[P] = a.Qc(M, R, this.b.Ja));
            if (p[P].Gd !== M || p[P].Fd !== R) a.deleteTexture(p[P]), p[P] = a.Qc(M, R, this.b.Ja);
            a.Bc(c[r].zb);
            G = c[r].index;
            a.Xl(c[r].zb) && (this.b.ja = !0);
            0 != r || aa ? (a.Lh(f, 1 / M, 1 / R, H.left, H.top, H.right, H.bottom, k, m, n, t, (n + g) / 2, (t + h) / 2, this.b.Ub.ta, d ? d.ab[G] : b ? b.ab[G] : this.ab[G]), a.kc(null), r !== v || Ia ? (a.wd(p[P]), Q = ka - E, T = R - E - Q, a.clearRect(z, T, sa - z, Q)) : (d ? a.Tf(d.mc, d.ac) : b && a.Tf(b.mc, b.ac), a.wd(f)), a.kc(p[U]), a.vd(), a.translate(-I, -J), a.dd(), a.ad(O, W, V, W, V, K, O, K, y), r !== v || Ia || a.kc(null)) : (a.wd(p[P]), Q = ka - E, T = R - E - Q, a.clearRect(z, T, sa - z, Q), d ? (d.Ta && d.Ta.D ? (T = d.Ta.D, U = 1 / T.width, T = 1 / T.height) : (U = 1 / d.width, T = 1 / d.height), a.Lh(f, U, T, H.left, H.top, H.right, H.bottom, k, m, n, t, (n + g) / 2, (t + h) / 2, this.b.Ub.ta, d.ab[G]), d.cc(a)) : (a.Lh(f, 1 / M, 1 / R, 0, 0, 1, 1, k, m, n, t, (n + g) / 2, (t + h) / 2, this.b.Ub.ta, b ? b.ab[G] : this.ab[G]), a.kc(b ? this.b.Fb : this.b.ub), a.vd(), a.translate(-I, -J), a.dd(), a.ad(O, W, V, W, V, K, O, K, y)), H.left = H.top = 0, H.right = H.bottom = 1, d && !Ia && (G = W, W = K, K = G));
            P = 0 === P ? 1 : 0;
            U = 0 === P ? 1 : 0
        }
        Ia && (a.Bc(0), d ? a.Tf(d.mc, d.ac) : b ? a.Tf(b.mc, b.ac) : this.b.Tc || (a.bf(this.b.width, this.b.height), I = this.b.width / 2, J = this.b.height / 2, K = O = 0, V = this.b.width, W = this.b.height), a.wd(f), a.kc(p[U]), a.vd(), a.translate(-I, -J), a.dd(), d && 1 === c.length && !aa ? a.ad(O, K, V, K, V, W, O, W, y) : a.ad(O, W, V, W, V, K, O, K, y), a.kc(null))
    };
    h.prototype.cl = function(a) {
        var b, d;
        b = 0;
        for (d = this.Y.length; b < d; b++)
            if (this.Y[b].ka === a) return this.Y[b];
        return null
    };
    h.prototype.nb = function() {
        var a, b, d, f = {
            sx: this.scrollX,
            sy: this.scrollY,
            s: this.scale,
            a: this.j,
            w: this.width,
            h: this.height,
            fv: this.ah,
            persist: this.Sf,
            fx: [],
            layers: {}
        };
        a = 0;
        for (b = this.V.length; a < b; a++) d = this.V[a], f.fx.push({
            name: d.name,
            active: d.Ya,
            params: this.ab[d.index]
        });
        a = 0;
        for (b = this.Y.length; a < b; a++) d = this.Y[a], f.layers[d.ka.toString()] = d.nb();
        return f
    };
    h.prototype.Gb = function(a) {
        var b, d, f, c;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.j = a.a;
        this.width = a.w;
        this.height = a.h;
        this.Sf = a.persist;
        "undefined" !== typeof a.fv && (this.ah = a.fv);
        var k = a.fx;
        b = 0;
        for (d = k.length; b < d; b++)
            if (f = this.Qn(k[b].name)) f.Ya = k[b].active, this.ab[f.index] = k[b].params;
        this.Qd();
        b = a.layers;
        for (c in b) b.hasOwnProperty(c) && (a = this.cl(parseInt(c, 10))) && a.Gb(b[c])
    };
    Ib = h;
    c.prototype.Qd = function() {
        A(this.Ba);
        this.df = !0;
        var a, b, d;
        a = 0;
        for (b = this.V.length; a < b; a++) d = this.V[a], d.Ya && (this.Ba.push(d), d.$c || (this.df = !1))
    };
    c.prototype.Qn = function(a) {
        var b, d, f;
        b = 0;
        for (d = this.V.length; b < d; b++)
            if (f = this.V[b], f.name === a) return f;
        return null
    };
    c.prototype.rw = function() {
        var a, b, d, f, c, k;
        b = a = 0;
        for (d = this.Vc.length; a < d; a++) {
            f = this.Vc[a];
            c = this.b.B[f[1]];
            k = this.b.Op(c);
            c = !0;
            if (!k || this.Nb.ah) {
                f = this.b.Bf(f, this, !0);
                if (!f) continue;
                r.push(f);
                f.type.global && (c = !1, this.mi.push(f.uid))
            }
            c && (this.Vc[b] = this.Vc[a], b++)
        }
        this.Vc.length = b;
        this.b.Yb();
        !this.b.u && this.V.length && (this.Zb = this.Uw);
        this.ji = jb(this.Zb);
        this.b.G && kb(this, this.Zb, this.b.G);
        this.Nd = !0
    };
    c.prototype.Ih = function(a, b) {
        var d = Fa(this.e, a);
        0 > d || (b && this.ed && a.yc && a.yc.right >= a.yc.left && (a.Ka(), this.Xb.update(a, a.yc, null), a.yc.set(0, 0, -1, -1)), d === this.e.length - 1 ? this.e.pop() : (Aa(this.e, d), this.yj(d)), this.Nd = !0)
    };
    c.prototype.gi = function(a, b) {
        a.Rd = this.e.length;
        this.e.push(a);
        b && this.ed && a.yc && a.aa();
        this.Nd = !0
    };
    c.prototype.mz = function(a) {
        this.e.unshift(a);
        this.yj(0)
    };
    c.prototype.Ry = function(a, b, d) {
        var f = a.ee();
        b = b.ee();
        Aa(this.e, f);
        f < b && b--;
        d && b++;
        b === this.e.length ? this.e.push(a) : this.e.splice(b, 0, a);
        this.yj(f < b ? f : b)
    };
    c.prototype.yj = function(a) {
        -1 === this.nf ? this.nf = a : a < this.nf && (this.nf = a);
        this.Nd = this.Mg = !0
    };
    c.prototype.Sp = function() {
        if (this.Mg) {
            -1 === this.nf && (this.nf = 0);
            var a, b, d;
            if (this.ed)
                for (a = this.nf, b = this.e.length; a < b; ++a) d = this.e[a], d.Rd = a, this.Xb.Oy(d.yc);
            else
                for (a = this.nf, b = this.e.length; a < b; ++a) this.e[a].Rd = a;
            this.Mg = !1;
            this.nf = -1
        }
    };
    c.prototype.Hc = function(a) {
        return this.Sx() * (this.b.Tc || a ? this.b.hi : 1)
    };
    c.prototype.Sx = function() {
        return (this.scale * this.Nb.scale - 1) * this.Sd + 1
    };
    c.prototype.Db = function() {
        return this.Fe ? 0 : La(this.Nb.j + this.j)
    };
    var b = [],
        d = [],
        f = [];
    c.prototype.Wn = function() {
        this.Sp();
        this.Xb.Zl(this.Ga, this.Ha, this.Ma, this.La, f);
        if (!f.length) return k();
        if (1 === f.length) {
            var a = k();
            Da(a, f[0]);
            A(f);
            return a
        }
        for (var b = !0; 1 < f.length;) {
            for (var a = f, c = void 0, q = void 0, g = void 0, h = void 0, p = void 0, c = 0, q = a.length; c < q - 1; c += 2) {
                var g = a[c],
                    h = a[c + 1],
                    p = k(),
                    n = g,
                    t = h,
                    r = p,
                    x = 0,
                    B = 0,
                    L = 0,
                    u = n.length,
                    v = t.length,
                    G = void 0,
                    P = void 0;
                for (r.length = u + v; x < u && B < v; ++L) G = n[x], P = t[B], G.Rd < P.Rd ? (r[L] = G, ++x) : (r[L] = P, ++B);
                for (; x < u; ++x, ++L) r[L] = n[x];
                for (; B < v; ++B, ++L) r[L] = t[B];
                b || (m(g), m(h));
                d.push(p)
            }
            1 === q % 2 && (b ? (g = k(), Da(g, a[q - 1]), d.push(g)) : d.push(a[q - 1]));
            Da(a, d);
            A(d);
            b = !1
        }
        a = f[0];
        A(f);
        return a
    };
    c.prototype.Rc = function(a) {
        this.ne = this.Zk || 1 !== this.opacity || 0 !== this.Zb;
        var b = this.b.canvas,
            d = a,
            f = !1;
        this.ne && (this.b.sl || (this.b.sl = document.createElement("canvas"), b = this.b.sl, b.width = this.b.N, b.height = this.b.M, this.b.Xr = b.getContext("2d"), f = !0), b = this.b.sl, d = this.b.Xr, b.width !== this.b.N && (b.width = this.b.N, f = !0), b.height !== this.b.M && (b.height = this.b.M, f = !0), f && this.b.hm(d, this.b.Ja), this.Pd && d.clearRect(0, 0, this.b.N, this.b.M));
        d.globalAlpha = 1;
        d.globalCompositeOperation = "source-over";
        this.Pd || (d.fillStyle = "rgb(" +
            this.Dd[0] + "," + this.Dd[1] + "," + this.Dd[2] + ")", d.fillRect(0, 0, this.b.N, this.b.M));
        d.save();
        this.Fe = !0;
        var f = this.Rb(0, 0, !0, !0),
            c = this.Rb(0, 0, !1, !0);
        this.Fe = !1;
        this.b.xc && (f = Math.round(f), c = Math.round(c));
        this.cm(f, c, d);
        var k = this.Hc();
        d.scale(k, k);
        d.translate(-f, -c);
        this.ed ? (this.Sb.left = this.Xb.uc(this.Ga), this.Sb.top = this.Xb.vc(this.Ha), this.Sb.right = this.Xb.uc(this.Ma), this.Sb.bottom = this.Xb.vc(this.La), this.Nd || !this.Sb.pi(this.uh) ? (m(this.Re), f = this.Wn(), this.Nd = !1, this.uh.ki(this.Sb)) : f = this.Re) : f = this.e;
        for (var g, n = null, c = 0, k = f.length; c < k; ++c) g = f[c], g !== n && (this.Pw(g, d), n = g);
        this.ed && (this.Re = f);
        d.restore();
        this.ne && (a.globalCompositeOperation = this.ji, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    c.prototype.Pw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ka();
            var d = a.Za;
            d.right < this.Ga || d.bottom < this.Ha || d.left > this.Ma || d.top > this.La || (b.globalCompositeOperation = a.ji, a.Rc(b))
        }
    };
    c.prototype.Cm = function() {
        this.Fe = !0;
        var a = this.Rb(0, 0, !0, !0),
            b = this.Rb(0, 0, !1, !0);
        this.Fe = !1;
        this.b.xc && (a = Math.round(a), b = Math.round(b));
        this.cm(a, b, null)
    };
    c.prototype.cm = function(a, b, d) {
        var f = this.Hc();
        this.Ga = a;
        this.Ha = b;
        this.Ma = a + 1 / f * this.b.N;
        this.La = b + 1 / f * this.b.M;
        this.Ga > this.Ma && (a = this.Ga, this.Ga = this.Ma, this.Ma = a);
        this.Ha > this.La && (a = this.Ha, this.Ha = this.La, this.La = a);
        a = this.Db();
        0 !== a && (d && (d.translate(this.b.N / 2, this.b.M / 2), d.rotate(-a), d.translate(this.b.N / -2, this.b.M / -2)), this.hf.set(this.Ga, this.Ha, this.Ma, this.La), this.hf.offset((this.Ga + this.Ma) / -2, (this.Ha + this.La) / -2), this.Qt.Ct(this.hf, a), this.Qt.Mq(this.hf), this.hf.offset((this.Ga + this.Ma) / 2, (this.Ha + this.La) / 2), this.Ga = this.hf.left, this.Ha = this.hf.top, this.Ma = this.hf.right, this.La = this.hf.bottom)
    };
    c.prototype.Ef = function(a) {
        if (this.ne = this.Zk) {
            this.b.Fb || (this.b.Fb = a.Qc(this.b.N, this.b.M, this.b.Ja));
            if (this.b.Fb.Gd !== this.b.N || this.b.Fb.Fd !== this.b.M) a.deleteTexture(this.b.Fb), this.b.Fb = a.Qc(this.b.N, this.b.M, this.b.Ja);
            a.wd(this.b.Fb)
        }
        this.Fe = !0;
        var b = this.Rb(0, 0, !0, !0),
            d = this.Rb(0, 0, !1, !0);
        this.Fe = !1;
        this.b.xc && (b = Math.round(b), d = Math.round(d));
        this.cm(b, d, null);
        b = this.Hc();
        a.vd();
        a.scale(b, b);
        a.dm(-this.Db());
        a.translate((this.Ga + this.Ma) / -2, (this.Ha + this.La) / -2);
        a.dd();
        this.ed ? (this.Sb.left = this.Xb.uc(this.Ga), this.Sb.top = this.Xb.vc(this.Ha), this.Sb.right = this.Xb.uc(this.Ma), this.Sb.bottom = this.Xb.vc(this.La), this.Nd || !this.Sb.pi(this.uh) ? (m(this.Re), b = this.Wn(), this.Nd = !1, this.uh.ki(this.Sb)) : b = this.Re) : b = this.e;
        for (var f, c = null, d = b.length - 1; 0 <= d; --d) f = b[d], f !== c && (this.Rw(b[d], a), c = f);
        this.ed && (this.Re = b);
        this.Pd || (this.qn = this.b.hg++, a.im(this.qn), a.qt(1, 1, 1), a.lr(), a.zz())
    };
    c.prototype.cc = function(a) {
        var b = 0,
            d = 0;
        if (this.ne = this.Zk || 1 !== this.opacity || 0 < this.Ba.length || 0 !== this.Zb) {
            this.b.Fb || (this.b.Fb = a.Qc(this.b.N, this.b.M, this.b.Ja));
            if (this.b.Fb.Gd !== this.b.N || this.b.Fb.Fd !== this.b.M) a.deleteTexture(this.b.Fb), this.b.Fb = a.Qc(this.b.N, this.b.M, this.b.Ja);
            a.wd(this.b.Fb);
            this.Pd && a.clear(0, 0, 0, 0)
        }
        this.Pd || (this.b.Qa ? (a.im(this.qn), a.qt(this.Dd[0] / 255, this.Dd[1] / 255, this.Dd[2] / 255), a.lr(), a.Qz()) : a.clear(this.Dd[0] / 255, this.Dd[1] / 255, this.Dd[2] / 255, 1));
        this.Fe = !0;
        var f = this.Rb(0, 0, !0, !0),
            b = this.Rb(0, 0, !1, !0);
        this.Fe = !1;
        this.b.xc && (f = Math.round(f), b = Math.round(b));
        this.cm(f, b, null);
        f = this.Hc();
        a.vd();
        a.scale(f, f);
        a.dm(-this.Db());
        a.translate((this.Ga + this.Ma) / -2, (this.Ha + this.La) / -2);
        a.dd();
        this.ed ? (this.Sb.left = this.Xb.uc(this.Ga), this.Sb.top = this.Xb.vc(this.Ha), this.Sb.right = this.Xb.uc(this.Ma), this.Sb.bottom = this.Xb.vc(this.La), this.Nd || !this.Sb.pi(this.uh) ? (m(this.Re), b = this.Wn(), this.Nd = !1, this.uh.ki(this.Sb)) : b = this.Re) : b = this.e;
        var c, k, g = null,
            d = 0;
        for (c = b.length; d < c; ++d) k = b[d], k !== g && (this.Qw(b[d], a), g = k);
        this.ed && (this.Re = b);
        this.ne && (b = this.Ba.length ? this.Ba[0].zb : 0, d = this.Ba.length ? this.Ba[0].index : 0, 0 === this.Ba.length || 1 === this.Ba.length && !a.ip(b) && 1 === this.opacity ? (1 === this.Ba.length ? (a.Bc(b), a.Lh(this.Nb.Bi(), 1 / this.b.N, 1 / this.b.M, 0, 0, 1, 1, f, this.Db(), this.Ga, this.Ha, (this.Ga + this.Ma) / 2, (this.Ha + this.La) / 2, this.b.Ub.ta, this.ab[d]), a.Xl(b) && (this.b.ja = !0)) : a.Bc(0), a.wd(this.Nb.Bi()), a.$e(this.opacity), a.kc(this.b.Fb), a.Tf(this.mc, this.ac), a.vd(), a.dd(), f = this.b.N / 2, b = this.b.M / 2, a.sj(-f, b, f, b, f, -b, -f, -b), a.kc(null)) : this.Nb.np(a, this, null, this.Nb.Bi()))
    };
    c.prototype.Qw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ka();
            var d = a.Za;
            d.right < this.Ga || d.bottom < this.Ha || d.left > this.Ma || d.top > this.La || (b.im(a.hg), a.bu ? this.Sw(a, b) : (b.Bc(0), b.Tf(a.mc, a.ac), a.cc(b)))
        }
    };
    c.prototype.Rw = function(a, b) {
        if (a.visible && 0 !== a.width && 0 !== a.height) {
            a.Ka();
            var d = a.Za;
            d.right < this.Ga || d.bottom < this.Ha || d.left > this.Ma || d.top > this.La || (a.hg = this.b.hg++, 0 === a.Zb && 1 === a.opacity && a.df && a.Ef && (b.im(a.hg), a.Ef(b)))
        }
    };
    c.prototype.Sw = function(a, b) {
        var d = a.Ba[0].zb,
            f = a.Ba[0].index,
            c = this.Hc();
        if (1 !== a.Ba.length || b.ip(d) || b.oz(d) || (a.j || a.k.Db()) && b.pj(d) || 1 !== a.opacity || a.type.ra.zs) this.Nb.np(b, this, a, this.ne ? this.b.Fb : this.Nb.Bi()), b.vd(), b.scale(c, c), b.dm(-this.Db()), b.translate((this.Ga + this.Ma) / -2, (this.Ha + this.La) / -2), b.dd();
        else {
            b.Bc(d);
            b.Tf(a.mc, a.ac);
            b.Xl(d) && (this.b.ja = !0);
            var k = 0,
                m = 0,
                n = 0,
                t = 0;
            b.pj(d) && (t = a.Za, k = this.Wa(t.left, t.top, !0, !0), m = this.Wa(t.left, t.top, !1, !0), n = this.Wa(t.right, t.bottom, !0, !0), t = this.Wa(t.right, t.bottom, !1, !0), k = k / windowWidth, m = 1 - m / windowHeight, n = n / windowWidth, t = 1 - t / windowHeight);
            var g;
            a.Ta && a.Ta.D ? (g = a.Ta.D, d = 1 / g.width, g = 1 / g.height) : (d = 1 / a.width, g = 1 / a.height);
            b.Lh(this.ne ? this.b.Fb : this.Nb.Bi(), d, g, k, m, n, t, c, this.Db(), this.Ga, this.Ha, (this.Ga + this.Ma) / 2, (this.Ha + this.La) / 2, this.b.Ub.ta, a.ab[f]);
            a.cc(b)
        }
    };
    c.prototype.Rb = function(a, b, d, f) {
        var c = this.b.devicePixelRatio;
        this.b.tg && (a *= c, b *= c);
        var c = this.b.Xs,
            k = this.b.Ys,
            c = (this.Nb.scrollX - c) * this.qd + c,
            k = (this.Nb.scrollY - k) * this.sd + k,
            m = c,
            n = k,
            t = 1 / this.Hc(!f);
        f ? (m -= this.b.N * t / 2, n -= this.b.M * t / 2) : (m -= this.b.width * t / 2, n -= this.b.height * t / 2);
        m += a * t;
        n += b * t;
        b = this.Db();
        0 !== b && (m -= c, n -= k, a = Math.cos(b), b = Math.sin(b), f = m * a - n * b, n = n * a + m * b, m = f + c, n += k);
        return d ? m : n
    };
    c.prototype.Wa = function(a, b, d, f) {
        var c = this.b.Xs,
            k = this.b.Ys,
            m = (this.Nb.scrollX - c) * this.qd + c,
            n = (this.Nb.scrollY - k) * this.sd + k,
            k = m,
            c = n,
            t = this.Db();
        if (0 !== t) {
            a -= m;
            b -= n;
            var g = Math.cos(-t),
                t = Math.sin(-t),
                h = a * g - b * t;
            b = b * g + a * t;
            a = h + m;
            b += n
        }
        m = 1 / this.Hc(!f);
        f ? (k -= this.b.N * m / 2, c -= this.b.M * m / 2) : (k -= this.b.width * m / 2, c -= this.b.height * m / 2);
        k = (a - k) / m;
        c = (b - c) / m;
        a = this.b.devicePixelRatio;
        this.b.tg && !f && (k /= a, c /= a);
        return d ? k : c
    };
    c.prototype.nb = function() {
        var a, b, d, f = {
            s: this.scale,
            a: this.j,
            vl: this.Ga,
            vt: this.Ha,
            vr: this.Ma,
            vb: this.La,
            v: this.visible,
            bc: this.Dd,
            t: this.Pd,
            px: this.qd,
            py: this.sd,
            o: this.opacity,
            zr: this.Sd,
            fx: [],
            cg: this.mi,
            instances: []
        };
        a = 0;
        for (b = this.V.length; a < b; a++) d = this.V[a], f.fx.push({
            name: d.name,
            active: d.Ya,
            params: this.ab[d.index]
        });
        return f
    };
    c.prototype.Gb = function(a) {
        var b, d, f;
        this.scale = a.s;
        this.j = a.a;
        this.Ga = a.vl;
        this.Ha = a.vt;
        this.Ma = a.vr;
        this.La = a.vb;
        this.visible = a.v;
        this.Dd = a.bc;
        this.Pd = a.t;
        this.qd = a.px;
        this.sd = a.py;
        this.opacity = a.o;
        this.Sd = a.zr;
        this.mi = a.cg || [];
        Da(this.Vc, this.Kt);
        var c = new ea;
        b = 0;
        for (f = this.mi.length; b < f; ++b) c.add(this.mi[b]);
        d = b = 0;
        for (f = this.Vc.length; b < f; ++b) c.contains(this.Vc[b][2]) || (this.Vc[d] = this.Vc[b], ++d);
        Ca(this.Vc, d);
        d = a.fx;
        b = 0;
        for (f = d.length; b < f; b++)
            if (a = this.Qn(d[b].name)) a.Ya = d[b].active, this.ab[a.index] = d[b].params;
        this.Qd();
        this.e.sort(g);
        this.Mg = !0
    };
    $b = c
})();
(function() {
    function h(a, b) {
        var d, f = a.length;
        switch (f) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (d = 0; d < f; d++)
                    if (a[d] !== b[d]) return !1;
                return !0
        }
    }

    function g(a, b) {
        return a.index - b.index
    }

    function c(a) {
        var b, d, f, e;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(g);
        a.length >= w.length && (w.length = a.length + 1);
        w[a.length] || (w[a.length] = []);
        e = w[a.length];
        b = 0;
        for (d = e.length; b < d; b++)
            if (f = e[b], h(a, f)) return f;
        e.push(a);
        return a
    }

    function k(a, b) {
        this.b = a;
        this.Tt = {};
        this.dr = {};
        this.ao = !1;
        this.Er = new ea;
        this.yn = [];
        this.an = [];
        this.name = b[0];
        var d = b[1];
        this.Gf = [];
        var f, e;
        f = 0;
        for (e = d.length; f < e; f++) this.Gr(d[f], null, this.Gf)
    }

    function m(a) {
        this.type = a;
        this.e = [];
        this.la = [];
        this.Z = !0
    }

    function r(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ba = [];
        this.Uf = [];
        this.Cr = this.ym = this.Kp = this.fl = this.group = this.Ep = !1;
        this.Bb = [];
        this.Ad = [];
        this.xd = [];
        this.Di = "";
        this.dh = this.fl = this.group = !1;
        this.Dk = null;
        d[1] && (this.Di = d[1][1].toLowerCase(), this.group = !0, this.fl = !!d[1][0], this.Dk = [], this.dh = this.fl, this.b.tf.push(this), this.b.Ei[this.Di] = this);
        this.nd = d[2];
        this.ka = d[4];
        this.group || (this.b.Kq[this.ka.toString()] = this);
        var f = d[5];
        a = 0;
        for (b = f.length; a < b; a++) {
            var e = new ac(this, f[a]);
            e.index = a;
            this.Bb.push(e);
            this.Eq(e.type)
        }
        f = d[6];
        a = 0;
        for (b = f.length; a < b; a++) e = new bc(this, f[a]), e.index = a, this.Ad.push(e);
        if (8 === d.length)
            for (d = d[7], a = 0, b = d.length; a < b; a++) this.sheet.Gr(d[a], this, this.xd);
        this.ol = !1;
        this.Bb.length && (this.ol = null == this.Bb[0].type && this.Bb[0].Tb == S.prototype.g.Zp)
    }

    function p(a, b) {
        var d, f, e;
        if (a && (-1 === b.indexOf(a) && b.push(a), a.jc))
            for (d = 0, f = a.Fc.length; d < f; d++) e = a.Fc[d], a !== e && -1 === b.indexOf(e) && b.push(e)
    }

    function b(a, b) {
        this.Pc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.W = [];
        this.bb = [];
        this.ga = {};
        this.index = -1;
        this.ei = !1;
        this.Tb = this.b.of(b[1]);
        this.trigger = 0 < b[3];
        this.cr = 2 === b[3];
        this.ie = b[4];
        this.ko = b[5];
        this.Ky = b[6];
        this.ka = b[7];
        this.b.zf[this.ka.toString()] = this; - 1 === b[0] ? (this.type = null, this.yb = this.tp, this.bg = null, this.Ed = -1) : (this.type = this.b.B[b[0]], this.yb = this.Ky ? this.Gz : this.sp, b[2] ? (this.bg = this.type.bl(b[2]), this.Ed = this.type.Mn(b[2])) : (this.bg = null, this.Ed = -1), this.Pc.parent && this.Pc.parent.jm());
        this.cr && (this.yb = this.Hz);
        if (10 === b.length) {
            var d, f, e = b[9];
            d = 0;
            for (f = e.length; d < f; d++) {
                var c = new cc(this, e[d]);
                this.W.push(c)
            }
            this.bb.length = e.length
        }
    }

    function d(a, b) {
        this.Pc = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.W = [];
        this.bb = [];
        this.ga = {};
        this.index = -1;
        this.ei = !1;
        this.Tb = this.b.of(b[1]); - 1 === b[0] ? (this.type = null, this.yb = this.tp, this.bg = null, this.Ed = -1) : (this.type = this.b.B[b[0]], this.yb = this.sp, b[2] ? (this.bg = this.type.bl(b[2]), this.Ed = this.type.Mn(b[2])) : (this.bg = null, this.Ed = -1));
        this.ka = b[3];
        this.b.sf[this.ka.toString()] = this;
        if (6 === b.length) {
            var d, f, e = b[5];
            d = 0;
            for (f = e.length; d < f; d++) {
                var c = new cc(this, e[d]);
                this.W.push(c)
            }
            this.bb.length = e.length
        }
    }

    function f() {
        C++;
        N.length === C && N.push(new dc);
        return N[C]
    }

    function a(a, b) {
        this.od = a;
        this.Pc = a.Pc;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.be = null;
        this.ef = 0;
        this.get = null;
        this.Tq = 0;
        this.Nb = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Sj = this.Kg = this.Sj = this.Kg = this.gr = this.kg = this.Tj = null;
        this.zd = !1;
        var d, f, e;
        switch (b[0]) {
            case 0:
            case 7:
                this.be = new ec(this, b[1]);
                this.ef = 0;
                this.get = this.cy;
                break;
            case 1:
                this.be = new ec(this, b[1]);
                this.ef = 0;
                this.get = this.ey;
                break;
            case 5:
                this.be = new ec(this, b[1]);
                this.ef = 0;
                this.get = this.iy;
                break;
            case 3:
            case 8:
                this.Tq = b[1];
                this.get = this.ay;
                break;
            case 6:
                this.Nb = this.b.Co[b[1]];
                this.get = this.jy;
                break;
            case 9:
                this.key = b[1];
                this.get = this.hy;
                break;
            case 4:
                this.object = this.b.B[b[1]];
                this.get = this.ky;
                this.Pc.Eq(this.object);
                this.od instanceof bc ? this.Pc.jm() : this.Pc.parent && this.Pc.parent.jm();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.J ? (this.get = this.fy, this.zd = !0) : this.get = this.gy;
                break;
            case 11:
                this.Tj = b[1];
                this.kg = null;
                this.get = this.by;
                break;
            case 2:
            case 12:
                this.gr = b[1];
                this.get = this.$x;
                break;
            case 13:
                for (this.get = this.ly, this.Kg = [], this.Sj = [], d = 1, f = b.length; d < f; d++) e = new cc(this.od, b[d]), this.Kg.push(e), this.Sj.push(0)
        }
    }

    function e(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ba = [];
        this.name = d[1];
        this.Uj = d[2];
        this.ho = d[3];
        this.Ri = !!d[4];
        this.nl = !!d[5];
        this.ka = d[6];
        this.b.Xh[this.ka.toString()] = this;
        this.data = this.ho;
        this.parent ? (this.Bg = this.Ri || this.nl ? -1 : this.b.Sz++, this.b.aw.push(this)) : (this.Bg = -1, this.b.$v.push(this))
    }

    function l(a, b, d) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.ba = [];
        this.Gi = null;
        this.ty = d[1];
        this.Ya = !0
    }

    function q() {
        this.Mt = [];
        this.reset(null)
    }
    var w = [];
    k.prototype.toString = function() {
        return this.name
    };
    k.prototype.Gr = function(a, b, d) {
        switch (a[0]) {
            case 0:
                a = new fc(this, b, a);
                if (a.nd)
                    for (d.push(a), d = 0, b = a.Bb.length; d < b; d++) a.Bb[d].trigger && this.Hr(a, d);
                else a.Qr() ? this.Hr(a, 0) : d.push(a);
                break;
            case 1:
                a = new Xb(this, b, a);
                d.push(a);
                break;
            case 2:
                a = new gc(this, b, a), d.push(a)
        }
    };
    k.prototype.mb = function() {
        var a, b;
        a = 0;
        for (b = this.Gf.length; a < b; a++) this.Gf[a].mb(a < b - 1 && this.Gf[a + 1].ol)
    };
    k.prototype.Pp = function() {
        A(this.yn);
        A(this.an);
        this.Dq(this);
        A(this.an)
    };
    k.prototype.Dq = function(a) {
        var b, d, f, e, c = a.yn,
            l = a.an,
            k = this.Er.Xf();
        b = 0;
        for (d = k.length; b < d; ++b) f = k[b], e = f.Gi, !f.Ya || a === e || -1 < l.indexOf(e) || (l.push(e), e.Dq(a), c.push(e))
    };
    k.prototype.yb = function(a) {
        this.b.QB || (this.ao = !0, a || (this.b.qo = !0));
        var b, d;
        b = 0;
        for (d = this.Gf.length; b < d; b++) {
            var f = this.Gf[b];
            f.yb();
            this.b.pn(f.ba);
            this.b.Jf && this.b.Yb()
        }
        a || (this.b.qo = !1)
    };
    k.prototype.Hr = function(a, b) {
        a.nd || this.b.Am.push(a);
        var d, f, e = a.Bb[b],
            c;
        e.type ? c = e.type.name : c = "system";
        var l = (d = e.cr) ? this.dr : this.Tt;
        l[c] || (l[c] = []);
        c = l[c];
        l = e.Tb;
        if (d) {
            if (e.W.length && (e = e.W[0], 1 === e.type && 2 === e.be.type)) {
                e = e.be.value.toLowerCase();
                d = 0;
                for (f = c.length; d < f; d++)
                    if (c[d].method == l) {
                        d = c[d].qi;
                        d[e] ? d[e].push([a, b]) : d[e] = [
                            [a, b]
                        ];
                        return
                    }
                d = {};
                d[e] = [
                    [a, b]
                ];
                c.push({
                    method: l,
                    qi: d
                })
            }
        } else {
            d = 0;
            for (f = c.length; d < f; d++)
                if (c[d].method == l) {
                    c[d].qi.push([a, b]);
                    return
                }
            X && l === X.prototype.g.Pg ? c.unshift({
                method: l,
                qi: [
                    [a, b]
                ]
            }) : c.push({
                method: l,
                qi: [
                    [a, b]
                ]
            })
        }
    };
    Jb = k;
    m.prototype.$n = function() {
        return this.Z ? this.type.e.length : this.e.length
    };
    m.prototype.oc = function() {
        return this.Z ? this.type.e : this.e
    };
    m.prototype.nj = function(a) {
        a && (a.b.sb().qb.nd ? (this.Z && (A(this.e), Da(this.la, a.type.e), this.Z = !1), a = this.la.indexOf(a), -1 !== a && (this.e.push(this.la[a]), this.la.splice(a, 1))) : (this.Z = !1, A(this.e), this.e[0] = a))
    };
    qb = m;
    window._c2hh_ = "B53719B1A9AE2372B2E9B5A0BEE97DB145F6C5E4";
    r.prototype.mb = function(a) {
        var b, d = this.parent;
        if (this.group)
            for (this.ym = !0; d;) {
                if (!d.group) {
                    this.ym = !1;
                    break
                }
                d = d.parent
            }
        this.Kp = !this.Qr() && (!this.parent || this.parent.group && this.parent.ym);
        this.Cr = !!a;
        this.Uf = this.ba.slice(0);
        for (d = this.parent; d;) {
            a = 0;
            for (b = d.ba.length; a < b; a++) this.Yv(d.ba[a]);
            d = d.parent
        }
        this.ba = c(this.ba);
        this.Uf = c(this.Uf);
        a = 0;
        for (b = this.Bb.length; a < b; a++) this.Bb[a].mb();
        a = 0;
        for (b = this.Ad.length; a < b; a++) this.Ad[a].mb();
        a = 0;
        for (b = this.xd.length; a < b; a++) this.xd[a].mb(a < b - 1 && this.xd[a + 1].ol)
    };
    r.prototype.xt = function(a) {
        if (this.dh !== !!a) {
            this.dh = !!a;
            var b;
            a = 0;
            for (b = this.Dk.length; a < b; ++a) this.Dk[a].Yt();
            0 < b && this.b.Ia.jg && this.b.Ia.jg.Pp()
        }
    };
    r.prototype.Eq = function(a) {
        p(a, this.ba)
    };
    r.prototype.Yv = function(a) {
        p(a, this.Uf)
    };
    r.prototype.jm = function() {
        this.Ep = !0;
        this.parent && this.parent.jm()
    };
    r.prototype.Qr = function() {
        return this.Bb.length ? this.Bb[0].trigger : !1
    };
    r.prototype.yb = function() {
        var a, b, d = !1,
            f = this.b,
            e = this.b.sb();
        e.qb = this;
        var c = this.Bb;
        this.ol || (e.Dn = !1);
        if (this.nd) {
            0 === c.length && (d = !0);
            e.Ab = 0;
            for (a = c.length; e.Ab < a; e.Ab++) b = c[e.Ab], b.trigger || (b = b.yb()) && (d = !0);
            (e.vg = d) && this.em()
        } else {
            e.Ab = 0;
            for (a = c.length; e.Ab < a; e.Ab++)
                if (b = c[e.Ab].yb(), !b) {
                    e.vg = !1;
                    this.Kp && f.Jf && f.Yb();
                    return
                }
            e.vg = !0;
            this.em()
        }
        this.Ww(e)
    };
    r.prototype.Ww = function(a) {
        a.vg && this.Cr && (a.Dn = !0);
        this.Kp && this.b.Jf && this.b.Yb()
    };
    r.prototype.Ez = function(a) {
        this.b.sb().qb = this;
        this.Bb[a].yb() && (this.em(), this.b.sb().vg = !0)
    };
    r.prototype.em = function() {
        var a = this.b.sb(),
            b;
        a.Dc = 0;
        for (b = this.Ad.length; a.Dc < b; a.Dc++)
            if (this.Ad[a.Dc].yb()) return;
        this.kt()
    };
    r.prototype.Bz = function() {
        var a = this.b.sb(),
            b;
        for (b = this.Ad.length; a.Dc < b; a.Dc++)
            if (this.Ad[a.Dc].yb()) return;
        this.kt()
    };
    r.prototype.kt = function() {
        if (this.xd.length) {
            var a, b, d, f, e = this.xd.length -
                1;
            this.b.Yl(this);
            if (this.Ep)
                for (a = 0, b = this.xd.length; a < b; a++) d = this.xd[a], (f = !this.ym || !this.group && a < e) && this.b.Ye(d.ba), d.yb(), f ? this.b.td(d.ba) : this.b.pn(d.ba);
            else
                for (a = 0, b = this.xd.length; a < b; a++) this.xd[a].yb();
            this.b.Tl()
        }
    };
    r.prototype.Fz = function() {
        var a = this.b.sb();
        a.qb = this;
        var b = !1,
            d;
        a.Ab = 0;
        for (d = this.Bb.length; a.Ab < d; a.Ab++)
            if (this.Bb[a.Ab].yb()) b = !0;
            else if (!this.nd) return !1;
        return this.nd ? b : !0
    };
    r.prototype.oe = function() {
        this.b.ri++;
        var a = this.b.sb().Ab,
            b = this.b.Yl(this);
        if (!this.nd)
            for (b.Ab = a + 1, a = this.Bb.length; b.Ab < a; b.Ab++)
                if (!this.Bb[b.Ab].yb()) {
                    this.b.Tl();
                    return
                }
        this.em();
        this.b.Tl()
    };
    r.prototype.By = function(a) {
        var b = a.index;
        if (0 === b) return !0;
        for (--b; 0 <= b; --b)
            if (this.Bb[b].type === a.type) return !1;
        return !0
    };
    fc = r;
    b.prototype.mb = function() {
        var a, b, d;
        a = 0;
        for (b = this.W.length; a < b; a++) d = this.W[a], d.mb(), d.zd && (this.ei = !0)
    };
    b.prototype.Hz = function() {
        return !0
    };
    b.prototype.tp = function() {
        var a, b;
        a = 0;
        for (b = this.W.length; a < b; a++) this.bb[a] = this.W[a].get();
        return Va(this.Tb.apply(this.b.re, this.bb), this.ko)
    };
    b.prototype.Gz = function() {
        var a, b;
        a = 0;
        for (b = this.W.length; a < b; a++) this.bb[a] = this.W[a].get();
        a = this.Tb.apply(this.bg ? this.bg : this.type, this.bb);
        this.type.fd();
        return a
    };
    b.prototype.sp = function() {
        var a, b, d, f, e, c, l, k, q = this.type,
            m = q.O(),
            g = this.Pc.nd && !this.trigger;
        b = 0;
        var h = q.jc,
            p = q.J,
            r = q.Je,
            w = this.Ed,
            N = -1 < w,
            C = this.ei,
            y = this.W,
            H = this.bb,
            O = this.ko,
            z = this.Tb,
            K;
        if (C)
            for (b = 0, e = y.length; b < e; ++b) c = y[b], c.zd || (H[b] = c.get(0));
        else
            for (b = 0, e = y.length; b < e; ++b) H[b] = y[b].get(0);
        if (m.Z) {
            A(m.e);
            A(m.la);
            K = q.e;
            a = 0;
            for (f = K.length; a < f; ++a) {
                k = K[a];
                if (C)
                    for (b = 0, e = y.length; b < e; ++b) c = y[b], c.zd && (H[b] = c.get(a));
                N ? (b = 0, p && (b = k.type.$g[r]), b = z.apply(k.U[w + b], H)) : b = z.apply(k, H);
                (l = Va(b, O)) ? m.e.push(k): g && m.la.push(k)
            }
            q.finish && q.finish(!0);
            m.Z = !1;
            q.fd();
            return m.$n()
        }
        d = 0;
        K = (l = g && !this.Pc.By(this)) ? m.la : m.e;
        var E = !1;
        a = 0;
        for (f = K.length; a < f; ++a) {
            k = K[a];
            if (C)
                for (b = 0, e = y.length; b < e; ++b) c = y[b], c.zd && (H[b] = c.get(a));
            N ? (b = 0, p && (b = k.type.$g[r]), b = z.apply(k.U[w + b], H)) : b = z.apply(k, H);
            if (Va(b, O))
                if (E = !0, l) {
                    if (m.e.push(k), h)
                        for (b = 0, e = k.siblings.length; b < e; b++) c = k.siblings[b], c.type.O().e.push(c)
                } else {
                    K[d] = k;
                    if (h)
                        for (b = 0, e = k.siblings.length; b < e; b++) c = k.siblings[b], c.type.O().e[d] = c;
                    d++
                }
            else if (l) {
                K[d] = k;
                if (h)
                    for (b = 0, e = k.siblings.length; b < e; b++) c = k.siblings[b], c.type.O().la[d] = c;
                d++
            } else if (g && (m.la.push(k), h))
                for (b = 0, e = k.siblings.length; b < e; b++) c = k.siblings[b], c.type.O().la.push(c)
        }
        Ca(K, d);
        if (h)
            for (p = q.Fc, a = 0, f = p.length; a < f; a++) k = p[a].O(), l ? Ca(k.la, d) : Ca(k.e, d);
        d = E;
        if (l && !E)
            for (a = 0, f = m.e.length; a < f; a++) {
                k = m.e[a];
                if (C)
                    for (b = 0, e = y.length; b < e; b++) c = y[b], c.zd && (H[b] = c.get(a));
                b = N ? z.apply(k.U[w], H) : z.apply(k, H);
                if (Va(b, O)) {
                    E = !0;
                    break
                }
            }
        q.finish && q.finish(d || g);
        return g ? E : m.$n()
    };
    ac = b;
    d.prototype.mb = function() {
        var a, b, d;
        a = 0;
        for (b = this.W.length; a < b; a++) d = this.W[a], d.mb(), d.zd && (this.ei = !0)
    };
    d.prototype.tp = function() {
        var a = this.b,
            b, d, f = this.W,
            e = this.bb;
        b = 0;
        for (d = f.length; b < d; ++b) e[b] = f[b].get();
        return this.Tb.apply(a.re, e)
    };
    d.prototype.sp = function() {
        var a = this.type,
            b = this.Ed,
            d = a.Je,
            f = this.ei,
            e = this.W,
            c = this.bb,
            l = this.Tb,
            k = a.O().oc(),
            a = a.J,
            q = -1 < b,
            m, g, h, p, r, w;
        if (f)
            for (g = 0, p = e.length; g < p; ++g) r = e[g], r.zd || (c[g] = r.get(0));
        else
            for (g = 0, p = e.length; g < p; ++g) c[g] = e[g].get(0);
        m = 0;
        for (h = k.length; m < h; ++m) {
            w = k[m];
            if (f)
                for (g = 0, p = e.length; g < p; ++g) r = e[g], r.zd && (c[g] = r.get(m));
            q ? (g = 0, a && (g = w.type.$g[d]), l.apply(w.U[b + g], c)) : l.apply(w, c)
        }
        return !1
    };
    bc = d;
    var N = [],
        C = -1;
    a.prototype.mb = function() {
        var a, b;
        if (11 === this.type) this.kg = this.b.sr(this.Tj, this.Pc.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Kg.length; a < b; a++) this.Kg[a].mb();
        this.be && this.be.mb()
    };
    a.prototype.Qy = function(a) {
        this.zd || !a || a.ra.mm || (this.zd = !0)
    };
    a.prototype.At = function() {
        this.zd = !0
    };
    a.prototype.cy = function(a) {
        this.ef = a || 0;
        a = f();
        this.be.get(a);
        C--;
        return a.data
    };
    a.prototype.ey = function(a) {
        this.ef = a || 0;
        a = f();
        this.be.get(a);
        C--;
        return la(a.data) ? a.data : ""
    };
    a.prototype.ky = function() {
        return this.object
    };
    a.prototype.ay = function() {
        return this.Tq
    };
    a.prototype.iy = function(a) {
        this.ef = a || 0;
        a = f();
        this.be.get(a);
        C--;
        return a.Mb() ? this.b.yi(a.data) : this.b.Un(a.data)
    };
    a.prototype.jy = function() {
        return this.Nb
    };
    a.prototype.hy = function() {
        return this.key
    };
    a.prototype.gy = function() {
        return this.index
    };
    a.prototype.fy = function(a) {
        a = a || 0;
        var b = this.od.type,
            d = null,
            d = b.O(),
            f = d.oc();
        if (f.length) d = f[a % f.length].type;
        else if (d.la.length) d = d.la[a % d.la.length].type;
        else if (b.e.length) d = b.e[a % b.e.length].type;
        else return 0;
        return this.index + d.Tk[b.Je]
    };
    a.prototype.by = function() {
        return this.kg
    };
    a.prototype.$x = function() {
        return this.gr
    };
    a.prototype.ly = function() {
        var a, b;
        a = 0;
        for (b = this.Kg.length; a < b; a++) this.Sj[a] = this.Kg[a].get();
        return this.Sj
    };
    cc = a;
    e.prototype.mb = function() {
        this.ba = c(this.ba)
    };
    e.prototype.cf = function(a) {
        var b = this.b.qr();
        this.parent && !this.Ri && b ? (this.Bg >= b.length && (b.length = this.Bg + 1), b[this.Bg] = a) : this.data = a
    };
    e.prototype.ng = function() {
        var a = this.b.qr();
        return !this.parent || this.Ri || !a || this.nl ? this.data : this.Bg >= a.length || "undefined" === typeof a[this.Bg] ? this.ho : a[this.Bg]
    };
    e.prototype.yb = function() {
        !this.parent || this.Ri || this.nl || this.cf(this.ho)
    };
    Xb = e;
    l.prototype.toString = function() {
        return "include:" +
            this.Gi.toString()
    };
    l.prototype.mb = function() {
        this.Gi = this.b.Fn[this.ty];
        this.sheet.Er.add(this);
        this.ba = c(this.ba);
        for (var a = this.parent; a;) a.group && a.Dk.push(this), a = a.parent;
        this.Yt()
    };
    l.prototype.yb = function() {
        this.parent && this.b.rj(this.b.B);
        this.Gi.ao || this.Gi.yb(!0);
        this.parent && this.b.td(this.b.B)
    };
    l.prototype.Yt = function() {
        for (var a = this.parent; a;) {
            if (a.group && !a.dh) {
                this.Ya = !1;
                return
            }
            a = a.parent
        }
        this.Ya = !0
    };
    gc = l;
    q.prototype.reset = function(a) {
        this.qb = a;
        this.Dc = this.Ab = 0;
        A(this.Mt);
        this.Dn = this.vg = !1
    };
    q.prototype.oo = function() {
        return this.qb.Ep ? !0 : this.Ab < this.qb.Bb.length - 1 ? !!this.qb.ba.length : !1
    };
    Wb = q
})();
(function() {
    function h(c, b) {
        this.od = c;
        this.b = c.b;
        this.type = b[0];
        this.get = [this.rx, this.mx, this.Bx, this.Ex, this.Zw, this.Cx, this.wx, this.jx, this.vx, this.Ax, this.$w, this.zx, this.kx, this.xx, this.tx, this.ux, this.nx, this.ox, this.ix, this.Dx, this.yx, this.qx, this.hx, this.lx][this.type];
        var d = null;
        this.Se = this.W = this.bb = this.Tb = this.wm = this.second = this.first = this.value = null;
        this.Ed = -1;
        this.Id = null;
        this.cu = -1;
        this.kg = this.Tj = null;
        this.Jh = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = b[1];
                break;
            case 3:
                this.first = new ec(c, b[1]);
                break;
            case 18:
                this.first = new ec(c, b[1]);
                this.second = new ec(c, b[2]);
                this.wm = new ec(c, b[3]);
                break;
            case 19:
                this.Tb = this.b.of(b[1]);
                this.Tb !== S.prototype.S.random && this.Tb !== S.prototype.S.Rq || this.od.At();
                this.bb = [];
                this.W = [];
                3 === b.length ? (d = b[2], this.bb.length = d.length + 1) : this.bb.length = 1;
                break;
            case 20:
                this.Se = this.b.B[b[1]];
                this.Ed = -1;
                this.Tb = this.b.of(b[2]);
                this.Jh = b[3];
                tc && this.Tb === tc.prototype.S.iu && this.od.At();
                b[4] ? this.Id = new ec(c, b[4]) : this.Id = null;
                this.bb = [];
                this.W = [];
                6 === b.length ? (d = b[5], this.bb.length = d.length + 1) : this.bb.length = 1;
                break;
            case 21:
                this.Se = this.b.B[b[1]];
                this.Jh = b[2];
                b[3] ? this.Id = new ec(c, b[3]) : this.Id = null;
                this.cu = b[4];
                break;
            case 22:
                this.Se = this.b.B[b[1]];
                this.Se.bl(b[2]);
                this.Ed = this.Se.Mn(b[2]);
                this.Tb = this.b.of(b[3]);
                this.Jh = b[4];
                b[5] ? this.Id = new ec(c, b[5]) : this.Id = null;
                this.bb = [];
                this.W = [];
                7 === b.length ? (d = b[6], this.bb.length = d.length + 1) : this.bb.length = 1;
                break;
            case 23:
                this.Tj = b[1], this.kg = null
        }
        this.od.Qy(this.Se);
        4 <= this.type && 17 >= this.type && (this.first = new ec(c, b[1]), this.second = new ec(c, b[2]));
        if (d) {
            var f, a;
            f = 0;
            for (a = d.length; f < a; f++) this.W.push(new ec(c, d[f]))
        }
    }

    function g() {
        ++r;
        m.length === r && m.push(new dc);
        return m[r]
    }

    function c(c, b, d) {
        var f, a;
        f = 0;
        for (a = c.length; f < a; ++f) c[f].get(d), b[f + 1] = d.data
    }

    function k(c, b) {
        this.type = c || hc.Og;
        this.data = b || 0;
        this.Fg = null;
        this.type == hc.Og && (this.data = Math.floor(this.data))
    }
    h.prototype.mb = function() {
        23 === this.type && (this.kg = this.od.b.sr(this.Tj, this.od.Pc.parent));
        this.first && this.first.mb();
        this.second && this.second.mb();
        this.wm && this.wm.mb();
        this.Id && this.Id.mb();
        if (this.W) {
            var c, b;
            c = 0;
            for (b = this.W.length; c < b; c++) this.W[c].mb()
        }
    };
    var m = [],
        r = -1;
    h.prototype.Dx = function(k) {
        var b = this.W,
            d = this.bb;
        d[0] = k;
        k = g();
        c(b, d, k);
        --r;
        this.Tb.apply(this.b.re, d)
    };
    h.prototype.yx = function(k) {
        var b = this.Se,
            d = this.bb,
            f = this.W,
            a = this.Id,
            e = this.Tb,
            l = this.od.ef,
            q = b.O(),
            m = q.oc();
        if (!m.length)
            if (q.la.length) m = q.la;
            else {
                this.Jh ? k.lc("") : k.ea(0);
                return
            }
        d[0] = k;
        k.Fg = b;
        k = g();
        c(f, d, k);
        a && (a.get(k), k.Mb() && (l = k.data, m = b.e));
        --r;
        b = m.length;
        if (l >= b || l <= -b) l %= b;
        0 > l && (l += b);
        e.apply(m[l], d)
    };
    h.prototype.hx = function(k) {
        var b = this.Se,
            d = this.bb,
            f = this.W,
            a = this.Id,
            e = this.Ed,
            l = this.Tb,
            q = this.od.ef,
            m = b.O(),
            h = m.oc();
        if (!h.length)
            if (m.la.length) h = m.la;
            else {
                this.Jh ? k.lc("") : k.ea(0);
                return
            }
        d[0] = k;
        k.Fg = b;
        k = g();
        c(f, d, k);
        a && (a.get(k), k.Mb() && (q = k.data, h = b.e));
        --r;
        f = h.length;
        if (q >= f || q <= -f) q %= f;
        0 > q && (q += f);
        q = h[q];
        h = 0;
        b.J && (h = q.type.$g[b.Je]);
        l.apply(q.U[e + h], d)
    };
    h.prototype.qx = function(c) {
        var b = this.Id,
            d = this.Se,
            f = this.cu,
            a = this.od.ef,
            e = d.O(),
            l = e.oc();
        if (!l.length)
            if (e.la.length) l = e.la;
            else {
                this.Jh ? c.lc("") : c.ea(0);
                return
            }
        if (b) {
            e = g();
            b.get(e);
            if (e.Mb()) {
                a = e.data;
                l = d.e;
                0 !== l.length && (a %= l.length, 0 > a && (a += l.length));
                a = d.Tn(a);
                d = a.Eb[f];
                la(d) ? c.lc(d) : c.I(d);
                --r;
                return
            }--r
        }
        b = l.length;
        if (a >= b || a <= -b) a %= b;
        0 > a && (a += b);
        a = l[a];
        l = 0;
        d.J && (l = a.type.Tk[d.Je]);
        d = a.Eb[f + l];
        la(d) ? c.lc(d) : c.I(d)
    };
    h.prototype.rx = function(c) {
        c.type = hc.Og;
        c.data = this.value
    };
    h.prototype.mx = function(c) {
        c.type = hc.Ng;
        c.data = this.value
    };
    h.prototype.Bx = function(c) {
        c.type = hc.String;
        c.data = this.value
    };
    h.prototype.Ex = function(c) {
        this.first.get(c);
        c.Mb() && (c.data = -c.data)
    };
    h.prototype.Zw = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data += b.data, b.hh() && c.xh());
        --r
    };
    h.prototype.Cx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data -= b.data, b.hh() && c.xh());
        --r
    };
    h.prototype.wx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data *= b.data, b.hh() && c.xh());
        --r
    };
    h.prototype.jx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data /= b.data, c.xh());
        --r
    };
    h.prototype.vx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data %= b.data, b.hh() && c.xh());
        --r
    };
    h.prototype.Ax = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data = Math.pow(c.data, b.data), b.hh() && c.xh());
        --r
    };
    h.prototype.$w = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        b.mh() || c.mh() ? this.bx(c, b) : this.ax(c, b);
        --r
    };
    h.prototype.bx = function(c, b) {
        c.mh() && b.mh() ? this.gx(c, b) : this.cx(c, b)
    };
    h.prototype.gx = function(c, b) {
        c.data += b.data
    };
    h.prototype.cx = function(c, b) {
        c.mh() ? c.data += (Math.round(1E10 * b.data) / 1E10).toString() : c.lc(c.data.toString() + b.data)
    };
    h.prototype.ax = function(c, b) {
        c.ea(c.data && b.data ? 1 : 0)
    };
    h.prototype.zx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.Mb() && b.Mb() && (c.data || b.data ? c.ea(1) : c.ea(0));
        --r
    };
    h.prototype.ix = function(c) {
        this.first.get(c);
        c.data ? this.second.get(c) : this.wm.get(c)
    };
    h.prototype.kx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data === b.data ? 1 : 0);
        --r
    };
    h.prototype.xx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data !== b.data ? 1 : 0);
        --r
    };
    h.prototype.tx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data < b.data ? 1 : 0);
        --r
    };
    h.prototype.ux = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data <= b.data ? 1 : 0);
        --r
    };
    h.prototype.nx = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data > b.data ? 1 : 0);
        --r
    };
    h.prototype.ox = function(c) {
        this.first.get(c);
        var b = g();
        this.second.get(b);
        c.ea(c.data >= b.data ? 1 : 0);
        --r
    };
    h.prototype.lx = function(c) {
        var b = this.kg.ng();
        ja(b) ? c.I(b) : c.lc(b)
    };
    ec = h;
    k.prototype.hh = function() {
        return this.type === hc.Ng
    };
    k.prototype.Mb = function() {
        return this.type === hc.Og || this.type === hc.Ng
    };
    k.prototype.mh = function() {
        return this.type === hc.String
    };
    k.prototype.xh = function() {
        this.hh() || (this.mh() && (this.data = parseFloat(this.data)), this.type = hc.Ng)
    };
    k.prototype.ea = function(c) {
        this.type = hc.Og;
        this.data = Math.floor(c)
    };
    k.prototype.I = function(c) {
        this.type = hc.Ng;
        this.data = c
    };
    k.prototype.lc = function(c) {
        this.type = hc.String;
        this.data = c
    };
    k.prototype.lm = function(c) {
        ja(c) ? (this.type = hc.Ng, this.data = c) : la(c) ? (this.type = hc.String, this.data = c.toString()) : (this.type = hc.Og, this.data = 0)
    };
    dc = k;
    hc = {
        Og: 0,
        Ng: 1,
        String: 2
    }
})();

function S(h) {
    this.b = h;
    this.Cc = []
}
S.prototype.nb = function() {
    var h = {},
        g, c, k, m, r, p, b, d;
    h.waits = [];
    var f = h.waits,
        a;
    g = 0;
    for (c = this.Cc.length; g < c; g++) {
        p = this.Cc[g];
        a = {
            t: p.time,
            st: p.Ht,
            s: p.zp,
            ev: p.Yg.ka,
            sm: [],
            sols: {}
        };
        p.Yg.Ad[p.Dc] && (a.act = p.Yg.Ad[p.Dc].ka);
        k = 0;
        for (m = p.ba.length; k < m; k++) a.sm.push(p.ba[k].ka);
        for (r in p.sc)
            if (p.sc.hasOwnProperty(r)) {
                b = this.b.B[parseInt(r, 10)];
                d = {
                    sa: p.sc[r].fm,
                    insts: []
                };
                k = 0;
                for (m = p.sc[r].Ne.length; k < m; k++) d.insts.push(p.sc[r].Ne[k].uid);
                a.sols[b.ka.toString()] = d
            }
        f.push(a)
    }
    return h
};
S.prototype.Gb = function(h) {
    h = h.waits;
    var g, c, k, m, r, p, b, d, f, a, e;
    A(this.Cc);
    g = 0;
    for (c = h.length; g < c; g++)
        if (p = h[g], d = this.b.Kq[p.ev.toString()]) {
            f = -1;
            k = 0;
            for (m = d.Ad.length; k < m; k++)
                if (d.Ad[k].ka === p.act) {
                    f = k;
                    break
                }
            if (-1 !== f) {
                b = {
                    sc: {},
                    ba: [],
                    zn: !1
                };
                b.time = p.t;
                b.Ht = p.st || "";
                b.zp = !!p.s;
                b.Yg = d;
                b.Dc = f;
                k = 0;
                for (m = p.sm.length; k < m; k++)(d = this.b.dl(p.sm[k])) && b.ba.push(d);
                for (r in p.sols)
                    if (p.sols.hasOwnProperty(r) && (d = this.b.dl(parseInt(r, 10)))) {
                        f = p.sols[r];
                        a = {
                            fm: f.sa,
                            Ne: []
                        };
                        k = 0;
                        for (m = f.insts.length; k < m; k++)(e = this.b.Ai(f.insts[k])) && a.Ne.push(e);
                        b.sc[d.index.toString()] = a
                    }
                this.Cc.push(b)
            }
        }
};
(function() {
    function h() {}

    function g(b, a) {
        var d = b.ga.c2_feo_val,
            c = a.ga.c2_feo_val;
        if (ja(d) && ja(c)) return d - c;
        d = "" + d;
        c = "" + c;
        return d < c ? -1 : d > c ? 1 : 0
    }

    function c() {}

    function k() {}
    var m = S.prototype;
    h.prototype.su = function() {
        return !0
    };
    h.prototype.fq = function() {
        return !0
    };
    h.prototype.gv = function() {
        return !0
    };
    h.prototype.mu = function(b, a, d) {
        return ic(b, a, d)
    };
    h.prototype.vu = function(b, a, d) {
        var c = this.b.sb(),
            k = c.qb,
            c = c.oo();
        b = this.b.jp(b);
        if (d < a)
            if (c)
                for (; a >= d && !b.Ra; --a) this.b.Ye(k.ba), b.index = a, k.oe(), this.b.td(k.ba);
            else
                for (; a >= d && !b.Ra; --a) b.index = a, k.oe();
        else if (c)
            for (; a <= d && !b.Ra; ++a) this.b.Ye(k.ba), b.index = a, k.oe(), this.b.td(k.ba);
        else
            for (; a <= d && !b.Ra; ++a) b.index = a, k.oe();
        this.b.gp();
        return !1
    };
    var r = [],
        p = -1;
    h.prototype.wu = function(b) {
        var a = b.O();
        p++;
        r.length === p && r.push([]);
        var d = r[p];
        Da(d, a.oc());
        var c = this.b.sb(),
            k = c.qb,
            m = c.oo(),
            c = this.b.jp(),
            g, h, n, t, F, x, B = b.jc;
        if (m)
            for (m = 0, g = d.length; m < g && !c.Ra; m++) {
                this.b.Ye(k.ba);
                t = d[m];
                a = b.O();
                a.Z = !1;
                A(a.e);
                a.e[0] = t;
                if (B)
                    for (h = 0, n = t.siblings.length; h < n; h++) F = t.siblings[h], x = F.type.O(), x.Z = !1, A(x.e), x.e[0] = F;
                c.index = m;
                k.oe();
                this.b.td(k.ba)
            } else
                for (a.Z = !1, A(a.e), m = 0, g = d.length; m < g && !c.Ra; m++) {
                    t = d[m];
                    a.e[0] = t;
                    if (B)
                        for (h = 0, n = t.siblings.length; h < n; h++) F = t.siblings[h], x = F.type.O(), x.Z = !1, A(x.e), x.e[0] = F;
                    c.index = m;
                    k.oe()
                }
        A(d);
        this.b.gp();
        p--;
        return !1
    };
    h.prototype.xu = function(b, a, d) {
        a = b.O();
        p++;
        r.length === p && r.push([]);
        var c = r[p];
        Da(c, a.oc());
        var k = this.b.sb(),
            m = k.qb,
            h = this.b.On(),
            C = k.oo(),
            k = this.b.jp(),
            n, t, F, x, B;
        n = 0;
        for (t = c.length; n < t; n++) c[n].ga.c2_feo_val = h.W[1].get(n);
        c.sort(g);
        1 === d && c.reverse();
        d = b.jc;
        if (C)
            for (n = 0, t = c.length; n < t && !k.Ra; n++) {
                this.b.Ye(m.ba);
                F = c[n];
                a = b.O();
                a.Z = !1;
                A(a.e);
                a.e[0] = F;
                if (d)
                    for (h = 0, C = F.siblings.length; h < C; h++) x = F.siblings[h], B = x.type.O(), B.Z = !1, A(B.e), B.e[0] = x;
                k.index = n;
                m.oe();
                this.b.td(m.ba)
            } else
                for (a.Z = !1, A(a.e), n = 0, t = c.length; n < t && !k.Ra; n++) {
                    F = c[n];
                    a.e[0] = F;
                    if (d)
                        for (h = 0, C = F.siblings.length; h < C; h++) x = F.siblings[h], B = x.type.O(), B.Z = !1, A(B.e), B.e[0] = x;
                    k.index = n;
                    m.oe()
                }
        A(c);
        this.b.gp();
        p--;
        return !1
    };
    h.prototype.ou = function(b, a, d) {
        return ic(b.ng(), a, d)
    };
    h.prototype.Cu = function(b) {
        return (b = this.b.Ei[b.toLowerCase()]) && b.dh
    };
    h.prototype.Zp = function() {
        var b = this.b.sb();
        return b.Dn ? !1 : !b.vg
    };
    h.prototype.gq = function() {
        return !0
    };
    h.prototype.Ru = function() {
        return !0
    };
    h.prototype.Lm = function() {
        return !0
    };
    h.prototype.kq = function() {
        return !0
    };
    h.prototype.hv = function() {
        return !0
    };
    h.prototype.gk = function() {
        return !0
    };
    h.prototype.gu = function(b, a, d) {
        return Pa(D(b), D(d)) <= D(a)
    };
    h.prototype.Bu = function(b, a) {
        return Ra(D(b), D(a))
    };
    h.prototype.$p = function(b, a, d) {
        b = Na(b);
        a = Na(a);
        d = Na(d);
        return Ra(d, a) ? Ra(b, a) && !Ra(b, d) : !(!Ra(b, a) && Ra(b, d))
    };
    m.g = new h;
    c.prototype.yu = function(b) {
        this.b.oh || this.b.dg || (this.b.dg = b)
    };
    c.prototype.pu = function(b, a, d, c) {
        if (a && b && (a = this.b.tn(b, a, d, c))) {
            this.b.Kd++;
            var k;
            this.b.trigger(Object.getPrototypeOf(b.ra).g.ck, a);
            if (a.jc)
                for (d = 0, c = a.siblings.length; d < c; d++) k = a.siblings[d], this.b.trigger(Object.getPrototypeOf(k.type.ra).g.ck, k);
            this.b.Kd--;
            b = b.O();
            b.Z = !1;
            A(b.e);
            b.e[0] = a;
            if (a.jc)
                for (d = 0, c = a.siblings.length; d < c; d++) k = a.siblings[d], b = k.type.O(), b.Z = !1, A(b.e), b.e[0] = k
        }
    };
    c.prototype.Jv = function(b, a) {
        0 === b.Uj ? ja(a) ? b.cf(a) : b.cf(parseFloat(a)) : 1 === b.Uj && b.cf(a.toString())
    };
    c.prototype.fu = function(b, a) {
        0 === b.Uj ? ja(a) ? b.cf(b.ng() + a) : b.cf(b.ng() + parseFloat(a)) : 1 === b.Uj && b.cf(b.ng() + a.toString())
    };
    c.prototype.Pv = function(b, a) {
        0 === b.Uj && (ja(a) ? b.cf(b.ng() - a) : b.cf(b.ng() - parseFloat(a)))
    };
    var b = [],
        d = [];
    c.prototype.Rv = function(c) {
        if (!(0 > c)) {
            var a, e, k, m = this.b.sb(),
                g;
            b.length ? g = b.pop() : g = {
                sc: {},
                ba: []
            };
            g.zn = !1;
            g.time = this.b.Ub.ta + c;
            g.Ht = "";
            g.zp = !1;
            g.Yg = m.qb;
            g.Dc = m.Dc + 1;
            c = 0;
            for (a = this.b.B.length; c < a; c++) k = this.b.B[c], e = k.O(), e.Z && -1 === m.qb.ba.indexOf(k) || (g.ba.push(k), k = void 0, d.length ? k = d.pop() : k = {
                Ne: []
            }, k.fm = !1, k.fm = e.Z, Da(k.Ne, e.e), g.sc[c.toString()] = k);
            this.Cc.push(g);
            return !0
        }
    };
    c.prototype.Ov = function() {
        0 > this.b.wh || (this.b.Pn().Ra = !0)
    };
    c.prototype.Av = function() {
        if (!this.b.oh && !this.b.dg && this.b.Ia) {
            this.b.dg = this.b.Ia;
            var b, a, d;
            b = 0;
            for (a = this.b.tf.length; b < a; b++) d = this.b.tf[b], d.xt(d.fl)
        }
    };
    m.A = new c;
    k.prototype["int"] = function(b, a) {
        la(a) ? (b.ea(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.ea(a)
    };
    k.prototype["float"] = function(b, a) {
        la(a) ? (b.I(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.I(a)
    };
    k.prototype.random = function(b, a, d) {
        void 0 === d ? b.I(Math.random() * a) : b.I(Math.random() * (d - a) + a)
    };
    k.prototype.sqrt = function(b, a) {
        b.I(Math.sqrt(a))
    };
    k.prototype.abs = function(b, a) {
        b.I(Math.abs(a))
    };
    k.prototype.round = function(b, a) {
        b.ea(Math.round(a))
    };
    k.prototype.floor = function(b, a) {
        b.ea(Math.floor(a))
    };
    k.prototype.ceil = function(b, a) {
        b.ea(Math.ceil(a))
    };
    k.prototype.sin = function(b, a) {
        b.I(Math.sin(D(a)))
    };
    k.prototype.cos = function(b, a) {
        b.I(Math.cos(D(a)))
    };
    k.prototype.tan = function(b, a) {
        b.I(Math.tan(D(a)))
    };
    k.prototype.asin = function(b, a) {
        b.I(Ja(Math.asin(a)))
    };
    k.prototype.acos = function(b, a) {
        b.I(Ja(Math.acos(a)))
    };
    k.prototype.atan = function(b, a) {
        b.I(Ja(Math.atan(a)))
    };
    k.prototype.exp = function(b, a) {
        b.I(Math.exp(a))
    };
    k.prototype.log10 = function(b, a) {
        b.I(Math.log(a) / Math.LN10)
    };
    k.prototype.max = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var d, c, k;
        d = 2;
        for (c = arguments.length; d < c; d++) k = arguments[d], "number" === typeof k && a < k && (a = k);
        b.I(a)
    };
    k.prototype.min = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var d, c, k;
        d = 2;
        for (c = arguments.length; d < c; d++) k = arguments[d], "number" === typeof k && a > k && (a = k);
        b.I(a)
    };
    k.prototype.He = function(b) {
        b.I(this.b.He)
    };
    k.prototype.Th = function(b) {
        b.I(this.b.Th)
    };
    k.prototype.time = function(b) {
        b.I(this.b.Ub.ta)
    };
    k.prototype.cd = function(b) {
        b.ea(this.b.cd)
    };
    k.prototype.Fl = function(b) {
        b.ea(this.b.Fl)
    };
    k.prototype.Kn = function(b) {
        b.ea(this.b.Kn)
    };
    k.prototype.Ny = function(b, a) {
        var d, c;
        if (this.b.dj.length)
            if (a) {
                for (c = this.b.wh; 0 <= c; --c)
                    if (d = this.b.dj[c], d.name === a) {
                        b.ea(d.index);
                        return
                    }
                b.ea(0)
            } else d = this.b.Pn(), b.ea(d ? d.index : -1);
        else b.ea(0)
    };
    k.prototype.j = function(b, a, d, c, k) {
        b.I(Ja(Oa(a, d, c, k)))
    };
    k.prototype.left = function(b, a, d) {
        b.lc(la(a) ? a.substr(0, d) : "")
    };
    k.prototype.right = function(b, a, d) {
        b.lc(la(a) ? a.substr(a.length - d) : "")
    };
    k.prototype.replace = function(b, a, d, c) {
        la(a) && la(d) && la(c) ? b.lc(a.replace(new RegExp(db(d), "gi"), c)) : b.lc(la(a) ? a : "")
    };
    k.prototype.trim = function(b, a) {
        b.lc(la(a) ? a.trim() : "")
    };
    k.prototype.Rq = function(b) {
        var a = ua(Math.random() * (arguments.length - 1));
        b.lm(arguments[a + 1])
    };
    k.prototype.rn = function(b) {
        b.I(this.b.rn / 1E3)
    };
    k.prototype.yl = function(b) {
        b.I(this.b.yl)
    };
    m.S = new k;
    m.Dz = function() {
        var c, a, e, k, m, g, h = this.b.sb();
        c = 0;
        for (e = this.Cc.length; c < e; c++) {
            k = this.Cc[c];
            if (-1 === k.time) {
                if (!k.zp) continue
            } else if (k.time > this.b.Ub.ta) continue;
            h.qb = k.Yg;
            h.Dc = k.Dc;
            h.Ab = 0;
            for (a in k.sc) k.sc.hasOwnProperty(a) && (m = this.b.B[parseInt(a, 10)].O(), g = k.sc[a], m.Z = g.fm, Da(m.e, g.Ne), m = g, A(m.Ne), d.push(m));
            k.Yg.Bz();
            this.b.pn(k.ba);
            k.zn = !0
        }
        a = c = 0;
        for (e = this.Cc.length; c < e; c++) k = this.Cc[c], this.Cc[a] = k, k.zn ? (Ya(k.sc), A(k.ba), b.push(k)) : a++;
        Ca(this.Cc, a)
    }
})();
(function() {
    pb = function(g, c) {
        var k = g[1],
            m = g[3],
            h = g[4],
            p = g[5],
            b = g[6],
            d = g[7],
            f = g[8];
        c.g || (c.g = {});
        c.A || (c.A = {});
        c.S || (c.S = {});
        var a = c.g,
            e = c.A,
            l = c.S;
        m && (a.Jm = function(a, b) {
            return ic(this.x, a, b)
        }, a.Yp = function(a, b) {
            return ic(this.y, a, b)
        }, a.yA = function() {
            var a = this.k;
            this.Ka();
            var b = this.Za;
            return !(b.right < a.Ga || b.bottom < a.Ha || b.left > a.Ma || b.top > a.La)
        }, a.zA = function() {
            this.Ka();
            var a = this.Za,
                b = this.b.Ia;
            return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
        }, a.MA = function(a, b, d) {
            var c = this.O(),
                f = c.oc();
            if (!f.length) return !1;
            var e = f[0],
                k = e,
                l = Ua(e.x, e.y, b, d),
                m, g, h;
            m = 1;
            for (g = f.length; m < g; m++)
                if (e = f[m], h = Ua(e.x, e.y, b, d), 0 === a && h < l || 1 === a && h > l) l = h, k = e;
            c.nj(k);
            return !0
        }, e.Qm = function(a) {
            this.x !== a && (this.x = a, this.aa())
        }, e.Rm = function(a) {
            this.y !== a && (this.y = a, this.aa())
        }, e.pq = function(a, b) {
            if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.aa()
        }, e.fB = function(a, b) {
            var d = a.Tx(this);
            if (d) {
                var c;
                d.Sn ? (c = d.Sn(b, !0), d = d.Sn(b, !1)) : (c = d.x, d = d.y);
                if (this.x !== c || this.y !== d) this.x = c, this.y = d, this.aa()
            }
        }, e.FA = function(a) {
            0 !== a && (this.x += Math.cos(this.j) * a, this.y += Math.sin(this.j) * a, this.aa())
        }, e.EA = function(a, b) {
            0 !== b && (this.x += Math.cos(D(a)) * b, this.y += Math.sin(D(a)) * b, this.aa())
        }, l.vq = function(a) {
            a.I(this.x)
        }, l.Vm = function(a) {
            a.I(this.y)
        }, l.He = function(a) {
            a.I(this.b.mg(this))
        });
        h && (a.tA = function(a, b) {
            return ic(this.width, a, b)
        }, a.qA = function(a, b) {
            return ic(this.height, a, b)
        }, e.Kv = function(a) {
            this.width !== a && (this.width = a, this.aa())
        }, e.dB = function(a) {
            this.height !== a && (this.height = a, this.aa())
        }, e.rq = function(a, b) {
            if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.aa()
        }, l.Sv = function(a) {
            a.I(this.width)
        }, l.zu = function(a) {
            a.I(this.height)
        }, l.nA = function(a) {
            this.Ka();
            a.I(this.Za.left)
        }, l.pA = function(a) {
            this.Ka();
            a.I(this.Za.top)
        }, l.oA = function(a) {
            this.Ka();
            a.I(this.Za.right)
        }, l.mA = function(a) {
            this.Ka();
            a.I(this.Za.bottom)
        });
        p && (a.gu = function(a, b) {
            return Pa(this.j, D(b)) <= D(a)
        }, a.Bu = function(a) {
            return Ra(this.j, D(a))
        }, a.$p = function(a, b) {
            var d = Na(a),
                c = Na(b),
                f = La(this.j);
            return Ra(c, d) ? Ra(f, d) && !Ra(f, c) : !(!Ra(f, d) && Ra(f, c))
        }, e.XA = function(a) {
            a = D(Ka(a));
            isNaN(a) || this.j === a || (this.j = a, this.aa())
        }, e.UA = function(a) {
            0 === a || isNaN(a) || (this.j += D(a), this.j = La(this.j), this.aa())
        }, e.VA = function(a) {
            0 === a || isNaN(a) || (this.j -= D(a), this.j = La(this.j), this.aa())
        }, e.Bv = function(a, b) {
            var d = Qa(this.j, D(b), D(a));
            isNaN(d) || this.j === d || (this.j = d, this.aa())
        }, e.WA = function(a, b, d) {
            a = Qa(this.j, Math.atan2(d - this.y, b - this.x), D(a));
            isNaN(a) || this.j === a || (this.j = a, this.aa())
        }, e.hB = function(a, b) {
            var d = Math.atan2(b - this.y, a - this.x);
            isNaN(d) || this.j === d || (this.j = d, this.aa())
        }, l.lA = function(a) {
            a.I(Ma(this.j))
        });
        k || (a.nu = function(a, b, d) {
            return ic(this.Eb[a], b, d)
        }, a.wA = function(a) {
            return this.Eb[a]
        }, a.NA = function(a, b) {
            var d = this.O(),
                c = d.oc();
            if (!c.length) return !1;
            var f = c[0],
                e = f,
                k = f.Eb[b],
                l, m, g;
            l = 1;
            for (m = c.length; l < m; l++)
                if (f = c[l], g = f.Eb[b], 0 === a && g < k || 1 === a && g > k) k = g, e = f;
            d.nj(e);
            return !0
        }, a.LA = function(a) {
            var b, d, c, f, e;
            if (this.b.On().ko) {
                e = this.O();
                if (e.Z)
                    for (e.Z = !1, A(e.e), A(e.la), c = this.e, b = 0, d = c.length; b < d; b++) f = c[b], f.uid === a ? e.la.push(f) : e.e.push(f);
                else {
                    c = b = 0;
                    for (d = e.e.length; b < d; b++) f = e.e[b], e.e[c] = f, f.uid === a ? e.la.push(f) : c++;
                    Ca(e.e, c)
                }
                this.fd();
                return !!e.e.length
            }
            f = this.b.Ai(a);
            if (!f) return !1;
            e = this.O();
            if (!e.Z && -1 === e.e.indexOf(f)) return !1;
            if (this.J)
                for (a = f.type.Ua, b = 0, d = a.length; b < d; b++) {
                    if (a[b] === this) return e.nj(f), this.fd(), !0
                } else if (f.type === this) return e.nj(f), this.fd(), !0;
            return !1
        }, a.ck = function() {
            return !0
        }, a.Tu = function() {
            return !0
        }, e.Fv = function(a, b) {
            var d = this.Eb;
            ja(d[a]) ? d[a] = ja(b) ? b : parseFloat(b) : la(d[a]) && (d[a] = la(b) ? b : b.toString())
        }, e.kA = function(a, b) {
            var d = this.Eb;
            ja(d[a]) ? d[a] = ja(b) ? d[a] + b : d[a] + parseFloat(b) : la(d[a]) && (d[a] = la(b) ? d[a] + b : d[a] + b.toString())
        }, e.lB = function(a, b) {
            var d = this.Eb;
            ja(d[a]) && (d[a] = ja(b) ? d[a] - b : d[a] - parseFloat(b))
        }, e.YA = function(a, b) {
            this.Eb[a] = b ? 1 : 0
        }, e.nB = function(a) {
            this.Eb[a] = 1 - this.Eb[a]
        }, e.qu = function() {
            this.b.Yf(this)
        }, e.Ku || (e.Ku = function(a) {
            var b, d;
            try {
                b = JSON.parse(a)
            } catch (c) {
                return
            }
            this.b.wl(this, b, !0);
            this.Vd && this.Vd();
            if (this.U)
                for (a = 0, b = this.U.length; a < b; ++a) d = this.U[a], d.Vd && d.Vd()
        }), l.uA = function(a) {
            var b = a.Fg.e.length,
                d, c, f;
            d = 0;
            for (c = this.b.Hd.length; d < c; d++) f = this.b.Hd[d], a.Fg.J ? 0 <= f.type.Ua.indexOf(a.Fg) && b++ : f.type === a.Fg && b++;
            a.ea(b)
        }, l.PA = function(a) {
            a.ea(a.Fg.O().oc().length)
        }, l.pB = function(a) {
            a.ea(this.uid)
        }, l.vA = function(a) {
            a.ea(this.Ci())
        }, l.Im || (l.Im = function(a) {
            a.lc(JSON.stringify(this.b.up(this, !0)))
        }));
        b && (a.BA = function() {
            return this.visible
        }, e.uq = function(a) {
            !a !== !this.visible && (this.visible = !!a, this.b.ja = !0)
        }, a.rA = function(a, b) {
            return ic(lb(100 * this.opacity), a, b)
        }, e.oq = function(a) {
            a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.ja = !0)
        }, l.Opacity = function(a) {
            a.I(lb(100 * this.opacity))
        });
        d && (a.xA = function(a) {
            return a ? this.k === a : !1
        }, a.OA = function(a) {
            var b = this.O(),
                d = b.oc();
            if (!d.length) return !1;
            var c = d[0],
                f = c,
                e, k;
            e = 1;
            for (k = d.length; e < k; e++)
                if (c = d[e], 0 === a) {
                    if (c.k.index > f.k.index || c.k.index === f.k.index && c.ee() > f.ee()) f = c
                } else if (c.k.index < f.k.index || c.k.index === f.k.index && c.ee() < f.ee()) f = c;
            b.nj(f);
            return !0
        }, e.HA = function() {
            var a = this.k,
                b = a.e;
            b.length && b[b.length - 1] === this || (a.Ih(this, !1), a.gi(this, !1), this.b.ja = !0)
        }, e.Lu = function() {
            var a = this.k,
                b = a.e;
            b.length && b[0] === this || (a.Ih(this, !1), a.mz(this), this.b.ja = !0)
        }, e.GA = function(a) {
            a && a != this.k && (this.k.Ih(this, !0), this.k = a, a.gi(this, !0), this.b.ja = !0)
        }, e.rB = function(a, b) {
            var d = 0 === a;
            if (b) {
                var c = b.tr(this);
                c && c.uid !== this.uid && (this.k.index !== c.k.index && (this.k.Ih(this, !0), this.k = c.k, c.k.gi(this, !0)), this.k.Ry(this, c, d), this.b.ja = !0)
            }
        }, l.DA = function(a) {
            a.ea(this.k.Fs)
        }, l.CA = function(a) {
            a.lc(this.k.name)
        }, l.qB = function(a) {
            a.ea(this.ee())
        });
        f && (e.bB = function(a, b) {
            if (this.b.u) {
                var d = this.type.Rn(b);
                if (!(0 > d)) {
                    var c = 1 === a;
                    this.rf[d] !== c && (this.rf[d] = c, this.Qd(), this.b.ja = !0)
                }
            }
        }, e.Ev = function(a, b, d) {
            if (this.b.u) {
                var c = this.type.Rn(a);
                0 > c || (a = this.type.V[c], c = this.ab[c], b = Math.floor(b), 0 > b || b >= c.length || (1 === this.b.u.Xx(a.zb, b) && (d /= 100), c[b] !== d && (c[b] = d, a.Ya && (this.b.ja = !0))))
            }
        })
    };
    Kb = function() {
        this.kn = this.dn = !0;
        this.type.pk = !0;
        this.b.ja = !0;
        var g, c, k = this.gn;
        g = 0;
        for (c = k.length; g < c; ++g) k[g](this);
        this.k.ed && this.Ka()
    };
    Lb = function(g) {
        g && this.gn.push(g)
    };
    Nb = function() {
        if (this.dn) {
            var g = this.Za,
                c = this.Qb;
            g.set(this.x, this.y, this.x + this.width, this.y + this.height);
            g.offset(-this.gc * this.width, -this.hc * this.height);
            this.j ? (g.offset(-this.x, -this.y), c.Ct(g, this.j), c.offset(this.x, this.y), c.Mq(g)) : c.zj(g);
            g.normalize();
            this.dn = !1;
            this.dA()
        }
    };
    var h = new xa(0, 0, 0, 0);
    Ob = function() {
        if (this.k.ed) {
            var g = this.k.Xb,
                c = this.Za;
            h.set(g.uc(c.left), g.vc(c.top), g.uc(c.right), g.vc(c.bottom));
            this.yc.pi(h) || (this.yc.right < this.yc.left ? g.update(this, null, h) : g.update(this, this.yc, h), this.yc.ki(h), this.k.Nd = !0)
        }
    };
    Tb = function() {
        if (this.kn && this.Be) {
            this.Ka();
            var g = this.type.Ck,
                c = this.Za;
            h.set(g.uc(c.left), g.vc(c.top), g.uc(c.right), g.vc(c.bottom));
            this.Af.pi(h) || (this.Af.right < this.Af.left ? g.update(this, null, h) : g.update(this, this.Af, h), this.Af.ki(h), this.kn = !1)
        }
    };
    Mb = function(g, c) {
        return this.Za.$b(g, c) && this.Qb.$b(g, c) ? this.Sh ? this.SB(g, c) : this.Da && !this.Da.gh() ? (this.Da.Sg(this.width, this.height, this.j), this.Da.$b(g - this.x, c - this.y)) : !0 : !1
    };
    Gb = function() {
        this.type.Bm();
        return this.rg
    };
    Ub = function() {
        this.k.Sp();
        return this.Rd
    };
    Vb = function() {
        A(this.Ba);
        var g, c, k, m = !0;
        g = 0;
        for (c = this.rf.length; g < c; g++) this.rf[g] && (k = this.type.V[g], this.Ba.push(k), k.$c || (m = !1));
        this.bu = !!this.Ba.length;
        this.df = m
    };
    Hb = function() {
        return "Inst" + this.et
    };
    sb = function(g) {
        if (g && g.jc && g.type != this) {
            var c, k, m;
            c = 0;
            for (k = g.siblings.length; c < k; c++)
                if (m = g.siblings[c], m.type == this) return m
        }
        g = this.O().oc();
        return g.length ? g[0] : null
    };
    tb = function(g) {
        var c = this.O().oc();
        return c.length ? c[g.Ci() % c.length] : null
    };
    rb = function() {
        if (this.Ph && !this.J) {
            var g, c;
            g = 0;
            for (c = this.e.length; g < c; g++) this.e[g].rg = g;
            var k = g,
                m = this.b.Hd;
            g = 0;
            for (c = m.length; g < c; ++g) m[g].type === this && (m[g].rg = k++);
            this.Ph = !1
        }
    };
    Eb = function(g) {
        if (g < this.e.length) return this.e[g];
        g -= this.e.length;
        var c = this.b.Hd,
            k, m;
        k = 0;
        for (m = c.length; k < m; ++k)
            if (c[k].type === this) {
                if (0 === g) return c[k];
                --g
            }
        return null
    };
    ub = function() {
        return this.ff[this.Zd]
    };
    vb = function() {
        this.Zd++;
        this.Zd === this.ff.length ? this.ff.push(new qb(this)) : (this.ff[this.Zd].Z = !0, A(this.ff[this.Zd].la))
    };
    wb = function() {
        this.Zd++;
        this.Zd === this.ff.length && this.ff.push(new qb(this));
        var g = this.ff[this.Zd],
            c = this.ff[this.Zd - 1];
        c.Z ? g.Z = !0 : (g.Z = !1, Da(g.e, c.e));
        A(g.la)
    };
    zb = function() {
        this.Zd--
    };
    Ab = function(g) {
        var c, k, m, h, p, b = 0;
        if (!this.J)
            for (c = 0, k = this.Ua.length; c < k; c++)
                for (p = this.Ua[c], m = 0, h = p.$a.length; m < h; m++) {
                    if (g === p.$a[m].name) return this.ga.lastBehIndex = b, p.$a[m];
                    b++
                }
        c = 0;
        for (k = this.$a.length; c < k; c++) {
            if (g === this.$a[c].name) return this.ga.lastBehIndex = b, this.$a[c];
            b++
        }
        return null
    };
    Bb = function(g) {
        return this.bl(g) ? this.ga.lastBehIndex : -1
    };
    Cb = function(g) {
        var c, k;
        c = 0;
        for (k = this.V.length; c < k; c++)
            if (this.V[c].name === g) return c;
        return -1
    };
    Db = function() {
        if (this.jc && !this.J) {
            var g, c, k, m, h, p, b;
            this.Bm();
            p = this.O();
            var d = p.Z,
                f = (g = this.b.sb()) && g.qb && g.qb.nd;
            g = 0;
            for (c = this.Fc.length; g < c; g++)
                if (h = this.Fc[g], h !== this && (h.Bm(), b = h.O(), b.Z = d, !d)) {
                    A(b.e);
                    k = 0;
                    for (m = p.e.length; k < m; ++k) b.e[k] = h.Tn(p.e[k].rg);
                    if (f)
                        for (A(b.la), k = 0, m = p.la.length; k < m; ++k) b.la[k] = h.Tn(p.la[k].rg)
                }
        }
    };
    Fb = function() {
        return "Type" + this.ka
    };
    ic = function(g, c, k) {
        if ("undefined" === typeof g || "undefined" === typeof k) return !1;
        switch (c) {
            case 0:
                return g === k;
            case 1:
                return g !== k;
            case 2:
                return g < k;
            case 3:
                return g <= k;
            case 4:
                return g > k;
            case 5:
                return g >= k;
            default:
                return !1
        }
    }
})();
var qc = {
    brightness: {
        src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float brightness;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\nlowp float a = front.a;\nif (a != 0.0)\nfront.rgb /= front.a;\nfront.rgb += (brightness - 1.0);\nfront.rgb *= a;\ngl_FragColor = front;\n}",
        si: 0,
        ti: 0,
        Fk: !1,
        $c: !0,
        ok: !1,
        W: [
            ["brightness", 0, 1]
        ]
    },
    tint: {
        src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nuniform lowp float red;\nuniform lowp float green;\nuniform lowp float blue;\nvoid main(void)\n{\nlowp vec4 front = texture2D(samplerFront, vTex);\ngl_FragColor = front * vec4(red, green, blue, 1.0);\n}",
        si: 0,
        ti: 0,
        Fk: !1,
        $c: !0,
        ok: !1,
        W: [
            ["red", 0, 1],
            ["green", 0, 1],
            ["blue", 0, 1]
        ]
    }
};

function uc(h) {
    this.b = h
}
(function() {
    function h() {
        return b.length ? b.pop() : []
    }

    function g(d) {
        var c, a;
        c = 0;
        for (a = d.length; c < a; c++) Array.isArray(d[c]) && g(d[c]);
        A(d);
        b.push(d)
    }

    function c() {}

    function k() {}

    function m() {}
    var r = uc.prototype;
    r.P = function(b) {
        this.ra = b;
        this.b = b.b
    };
    r.P.prototype.H = function() {};
    r.L = function(b) {
        this.type = b;
        this.b = b.b
    };
    var p = r.L.prototype,
        b = [];
    Array.isArray || (Array.isArray = function(b) {
        return "[object Array]" === Object.prototype.toString.call(b)
    });
    p.H = function() {
        this.nc = this.q[0];
        this.Gc = this.q[1];
        this.hd = this.q[2];
        this.rc || (this.Cd = h());
        var b = this.Cd;
        b.length = this.nc;
        var c, a, e;
        for (c = 0; c < this.nc; c++)
            for (b[c] || (b[c] = h()), b[c].length = this.Gc, a = 0; a < this.Gc; a++)
                for (b[c][a] || (b[c][a] = h()), b[c][a].length = this.hd, e = 0; e < this.hd; e++) b[c][a][e] = 0;
        this.ir = [];
        this.jr = [];
        this.kr = [];
        this.Ke = -1
    };
    p.Ue = function() {
        var b;
        for (b = 0; b < this.nc; b++) g(this.Cd[b]);
        A(this.Cd)
    };
    p.Xd = function(b, c, a) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        return isNaN(b) || 0 > b || b > this.nc - 1 || isNaN(c) || 0 > c || c > this.Gc - 1 || isNaN(a) || 0 > a || a > this.hd - 1 ? 0 : this.Cd[b][c][a]
    };
    p.set = function(b, c, a, e) {
        b = Math.floor(b);
        c = Math.floor(c);
        a = Math.floor(a);
        isNaN(b) || 0 > b || b > this.nc - 1 || isNaN(c) || 0 > c || c > this.Gc - 1 || isNaN(a) || 0 > a || a > this.hd - 1 || (this.Cd[b][c][a] = e)
    };
    p.Nx = function() {
        return JSON.stringify({
            c2array: !0,
            size: [this.nc, this.Gc, this.hd],
            data: this.Cd
        })
    };
    p.nb = function() {
        return {
            size: [this.nc, this.Gc, this.hd],
            data: this.Cd
        }
    };
    p.Gb = function(b) {
        var c = b.size;
        this.nc = c[0];
        this.Gc = c[1];
        this.hd = c[2];
        this.Cd = b.data
    };
    p.bf = function(b, c, a) {
        0 > b && (b = 0);
        0 > c && (c = 0);
        0 > a && (a = 0);
        if (this.nc !== b || this.Gc !== c || this.hd !== a) {
            this.nc = b;
            this.Gc = c;
            this.hd = a;
            var e, k, m = this.Cd;
            m.length = b;
            for (b = 0; b < this.nc; b++)
                for (ia(m[b]) && (m[b] = h()), m[b].length = c, e = 0; e < this.Gc; e++)
                    for (ia(m[b][e]) && (m[b][e] = h()), m[b][e].length = a, k = 0; k < this.hd; k++) ia(m[b][e][k]) && (m[b][e][k] = 0)
        }
    };
    p.wn = function() {
        return 0 <= this.Ke && this.Ke < this.ir.length ? this.ir[this.Ke] : 0
    };
    p.Bn = function() {
        return 0 <= this.Ke && this.Ke < this.jr.length ? this.jr[this.Ke] : 0
    };
    p.yB = function() {
        return 0 <= this.Ke && this.Ke < this.kr.length ? this.kr[this.Ke] : 0
    };
    c.prototype.Jm = function(b, c, a) {
        return ic(this.Xd(b, 0, 0), c, a)
    };
    p.uf = function(b) {
        this.b.Ye(b.ba);
        b.oe();
        this.b.td(b.ba)
    };
    r.g = new c;
    k.prototype.rq = function(b, c, a) {
        this.bf(b, c, a)
    };
    k.prototype.Qm = function(b, c) {
        this.set(b, 0, 0, c)
    };
    k.prototype.nq = function(b) {
        var c = 0,
            a = 0,
            e = this.Cd;
        if (0 !== this.nc && 0 !== this.Gc && 0 !== this.hd) switch (b) {
            case 0:
                e.reverse();
                break;
            case 1:
                for (; c < this.nc; c++) e[c].reverse();
                break;
            case 2:
                for (; c < this.nc; c++)
                    for (a = 0; a < this.Gc; a++) e[c][a].reverse()
        }
    };
    k.prototype.Iu = function(b) {
        var c;
        try {
            c = JSON.parse(b)
        } catch (a) {
            return
        }
        c.c2array && (b = c.size, this.nc = b[0], this.Gc = b[1], this.hd = b[2], this.Cd = c.data)
    };
    r.A = new k;
    m.prototype.Sv = function(b) {
        b.ea(this.nc)
    };
    m.prototype.zu = function(b) {
        b.ea(this.Gc)
    };
    m.prototype.Im = function(b) {
        b.lc(this.Nx())
    };
    r.S = new m
})();

function vc(h) {
    this.b = h
}
(function() {
    function h(a) {
        -1 === xb.indexOf(a) && xb.push(a)
    }

    function g(a) {
        var b = a.n,
            d;
        try {
            d = b.play()
        } catch (c) {
            h(a);
            return
        }
        d ? d.catch(function() {
            h(a)
        }) : Uc && !I.Xc && h(a)
    }

    function c() {
        var a, b, d, c;
        Vc || Pb || !z || (k(), "running" === z.state && (Vc = !0));
        var f = xb.slice(0);
        A(xb);
        if (!ka)
            for (a = 0, b = f.length; a < b; ++a) d = f[a], d.Ra || d.Ic || (c = d.n.play()) && c.catch(function() {
                h(d)
            })
    }

    function k() {
        "suspended" === z.state && z.resume && z.resume();
        if (z.createBuffer) {
            var a = z.createBuffer(1, 220, 22050),
                b = z.createBufferSource();
            b.buffer = a;
            b.connect(z.destination);
            d(b)
        }
    }

    function m(a) {
        0 > a && (a = 0);
        1 < a && (a = 1);
        return Math.log(a) / Math.log(10) * 20
    }

    function r(a) {
        a = a.toLowerCase();
        return da.hasOwnProperty(a) && da[a].length ? da[a][0].Uc() : z.destination
    }

    function p() {
        return z.createGain ? z.createGain() : z.createGainNode()
    }

    function b(a) {
        return z.createDelay ? z.createDelay(a) : z.createDelayNode(a)
    }

    function d(a, b) {
        a.start ? a.start(b || 0) : a.noteOn(b || 0)
    }

    function f(a, b, d, c) {
        a.start ? a.start(c || 0, b) : a.noteGrainOn(c || 0, b, d - b)
    }

    function a(a) {
        try {
            a.stop ? a.stop(0) : a.noteOff(0)
        } catch (b) {}
    }

    function e(a, b, d, c, f, e) {
        this.type = "filter";
        this.xb = [a, b, d, c, f, e];
        this.qa = p();
        this.T = p();
        this.T.gain.value = e;
        this.R = p();
        this.R.gain.value = 1 - e;
        this.rb = z.createBiquadFilter();
        this.rb.type = "number" === typeof this.rb.type ? a : jd[a];
        this.rb.frequency.value = b;
        this.rb.detune && (this.rb.detune.value = d);
        this.rb.Q.value = c;
        this.rb.gain.value = f;
        this.qa.connect(this.rb);
        this.qa.connect(this.R);
        this.rb.connect(this.T)
    }

    function l(a, d, c) {
        this.type = "delay";
        this.xb = [a, d, c];
        this.qa = p();
        this.T = p();
        this.T.gain.value = c;
        this.R = p();
        this.R.gain.value = 1 - c;
        this.ej = p();
        this.kd = b(a);
        this.kd.delayTime.value = a;
        this.Lk = p();
        this.Lk.gain.value = d;
        this.qa.connect(this.ej);
        this.qa.connect(this.R);
        this.ej.connect(this.T);
        this.ej.connect(this.kd);
        this.kd.connect(this.Lk);
        this.Lk.connect(this.ej)
    }

    function q(a, b, d, c) {
        this.type = "convolve";
        this.xb = [b, d, c];
        this.qa = p();
        this.T = p();
        this.T.gain.value = d;
        this.R = p();
        this.R.gain.value = 1 - d;
        this.eg = z.createConvolver();
        a && (this.eg.normalize = b, this.eg.buffer = a);
        this.qa.connect(this.eg);
        this.qa.connect(this.R);
        this.eg.connect(this.T)
    }

    function w(a, c, f, e, k) {
        this.type = "flanger";
        this.xb = [a, c, f, e, k];
        this.qa = p();
        this.R = p();
        this.R.gain.value = 1 - k / 2;
        this.T = p();
        this.T.gain.value = k / 2;
        this.Uk = p();
        this.Uk.gain.value = e;
        this.kd = b(a + c);
        this.kd.delayTime.value = a;
        this.Pb = z.createOscillator();
        this.Pb.frequency.value = f;
        this.Mc = p();
        this.Mc.gain.value = c;
        this.qa.connect(this.kd);
        this.qa.connect(this.R);
        this.kd.connect(this.T);
        this.kd.connect(this.Uk);
        this.Uk.connect(this.kd);
        this.Pb.connect(this.Mc);
        this.Mc.connect(this.kd.delayTime);
        d(this.Pb)
    }

    function N(a, b, c, f, e, k) {
        this.type = "phaser";
        this.xb = [a, b, c, f, e, k];
        this.qa = p();
        this.R = p();
        this.R.gain.value = 1 - k / 2;
        this.T = p();
        this.T.gain.value = k / 2;
        this.rb = z.createBiquadFilter();
        this.rb.type = "number" === typeof this.rb.type ? 7 : "allpass";
        this.rb.frequency.value = a;
        this.rb.detune && (this.rb.detune.value = b);
        this.rb.Q.value = c;
        this.Pb = z.createOscillator();
        this.Pb.frequency.value = e;
        this.Mc = p();
        this.Mc.gain.value = f;
        this.qa.connect(this.rb);
        this.qa.connect(this.R);
        this.rb.connect(this.T);
        this.Pb.connect(this.Mc);
        this.Mc.connect(this.rb.frequency);
        d(this.Pb)
    }

    function C(a) {
        this.type = "gain";
        this.xb = [a];
        this.Aa = p();
        this.Aa.gain.value = a
    }

    function n(a, b) {
        this.type = "tremolo";
        this.xb = [a, b];
        this.Aa = p();
        this.Aa.gain.value = 1 - b / 2;
        this.Pb = z.createOscillator();
        this.Pb.frequency.value = a;
        this.Mc = p();
        this.Mc.gain.value = b / 2;
        this.Pb.connect(this.Mc);
        this.Mc.connect(this.Aa.gain);
        d(this.Pb)
    }

    function t(a, b) {
        this.type = "ringmod";
        this.xb = [a, b];
        this.qa = p();
        this.T = p();
        this.T.gain.value = b;
        this.R = p();
        this.R.gain.value = 1 - b;
        this.wj = p();
        this.wj.gain.value = 0;
        this.Pb = z.createOscillator();
        this.Pb.frequency.value = a;
        this.Pb.connect(this.wj.gain);
        d(this.Pb);
        this.qa.connect(this.wj);
        this.qa.connect(this.R);
        this.wj.connect(this.T)
    }

    function F(a, b, d, c, f) {
        this.type = "distortion";
        this.xb = [a, b, d, c, f];
        this.qa = p();
        this.Vl = p();
        this.Ul = p();
        this.Kz(d, Math.pow(10, c / 20));
        this.T = p();
        this.T.gain.value = f;
        this.R = p();
        this.R.gain.value = 1 - f;
        this.Gm = z.createWaveShaper();
        this.Jk = new Float32Array(65536);
        this.Lx(a, b);
        this.Gm.Jk = this.Jk;
        this.qa.connect(this.Vl);
        this.qa.connect(this.R);
        this.Vl.connect(this.Gm);
        this.Gm.connect(this.Ul);
        this.Ul.connect(this.T)
    }

    function x(a, b, d, c, f) {
        this.type = "compressor";
        this.xb = [a, b, d, c, f];
        this.Aa = z.createDynamicsCompressor();
        try {
            this.Aa.threshold.value = a, this.Aa.knee.value = b, this.Aa.ratio.value = d, this.Aa.attack.value = c, this.Aa.release.value = f
        } catch (e) {}
    }

    function B(a, b) {
        this.type = "analyser";
        this.xb = [a, b];
        this.Aa = z.createAnalyser();
        this.Aa.fftSize = a;
        this.Aa.smoothingTimeConstant = b;
        this.Jx = new Float32Array(this.Aa.frequencyBinCount);
        this.Ft = new Uint8Array(a);
        this.mj = 0
    }

    function L() {
        this.Ea = null;
        this.xl = 0
    }

    function u(a, b) {
        this.src = a;
        this.fa = O;
        this.ge = b;
        this.nk = !1;
        var d = this;
        this.yh = this.Fh = null;
        this.Gh = [];
        this.gm = 0;
        this.Vp = this.Sk = this.Lt = this.Pl = !1;
        1 === O && b && !yb && (this.fa = 0, this.Fh = p());
        this.ze = this.wa = null;
        var c;
        switch (this.fa) {
            case 0:
                this.wa = new Audio;
                this.wa.crossOrigin = "anonymous";
                this.wa.addEventListener("canplaythrough", function() {
                    d.Vp = !0
                });
                1 === O && z.createMediaElementSource && !/wiiu/i.test(navigator.userAgent) && (this.Lt = !0, this.wa.addEventListener("canplay", function() {
                    !d.yh && d.wa && (d.yh = z.createMediaElementSource(d.wa), d.yh.connect(d.Fh))
                }));
                this.wa.autoplay = !1;
                this.wa.LB = "auto";
                this.wa.src = a;
                break;
            case 1:
                I.ll ? I.fr(a, function(a) {
                    d.ze = a;
                    d.Wq()
                }, function() {
                    d.Sk = !0
                }) : (c = new XMLHttpRequest, c.open("GET", a, !0), c.responseType = "arraybuffer", c.onload = function() {
                    d.ze = c.response;
                    d.Wq()
                }, c.onerror = function() {
                    d.Sk = !0
                }, c.send());
                break;
            case 2:
                this.wa = !0;
                break;
            case 3:
                this.wa = !0
        }
    }

    function v(a, b) {
        var d = this;
        this.tag = b;
        this.Ra = this.de = !0;
        this.src = a.src;
        this.buffer = a;
        this.fa = O;
        this.ge = a.ge;
        this.playbackRate = 1;
        this.eh = !0;
        this.Ic = this.bd = !1;
        this.zc = 0;
        this.Qi = this.jh = this.ie = !1;
        this.volume = 1;
        this.Zo = function(a) {
            if (!d.Ic && !d.bd) {
                var b = this;
                b || (b = a.target);
                b === d.mk && (d.eh = !0, d.Ra = !0, y = d.tag, I.trigger(vc.prototype.g.dk, J))
            }
        };
        this.mk = null;
        this.fh = 1 === W && !this.ge || 2 === W;
        this.zh = 1;
        this.startTime = this.fh ? I.Ub.ta : I.mf.ta;
        this.wb = this.Cb = null;
        this.ke = !1;
        this.Vb = null;
        this.Us = this.Ts = this.Ss = this.Rs = this.Ws = this.Vs = 0;
        this.n = null;
        var c = !1;
        1 !== this.fa || 0 !== this.buffer.fa || this.buffer.Lt || (this.fa = 0);
        switch (this.fa) {
            case 0:
                this.ge ? (this.n = a.wa, c = !a.nk, a.nk = !0) : (this.n = new Audio, this.n.crossOrigin = "anonymous", this.n.autoplay = !1, this.n.src = a.wa.src, c = !0);
                c && this.n.addEventListener("ended", function() {
                    y = d.tag;
                    d.Ra = !0;
                    I.trigger(vc.prototype.g.dk, J)
                });
                break;
            case 1:
                this.Cb = p();
                this.Cb.connect(r(b));
                1 === this.buffer.fa ? a.wa && (this.n = z.createBufferSource(), this.n.buffer = a.wa, this.n.connect(this.Cb)) : (this.n = this.buffer.wa, this.buffer.Fh.connect(this.Cb), this.buffer.nk || (this.buffer.nk = !0, this.buffer.wa.addEventListener("ended", function() {
                    y = d.tag;
                    d.Ra = !0;
                    I.trigger(vc.prototype.g.dk, J)
                })));
                break;
            case 2:
                this.n = new window.Media(H + this.src, null, null, function(a) {
                    a === window.Media.MEDIA_STOPPED && (d.eh = !0, d.Ra = !0, y = d.tag, I.trigger(vc.prototype.g.dk, J))
                });
                break;
            case 3:
                this.n = !0
        }
    }

    function G(a, b) {
        var d = a.Mf() ? 1 : 0,
            c = b.Mf() ? 1 : 0;
        return d === c ? 0 : d < c ? 1 : -1
    }

    function P(a, b) {
        A(ta);
        if (a.length) {
            var d, c, f;
            d = 0;
            for (c = E.length; d < c; d++) f = E[d], mb(a, f.tag) && ta.push(f);
            b && ta.sort(G)
        } else V && !V.qg() && (A(ta), ta[0] = V)
    }

    function U(a, b) {
        da.hasOwnProperty(a) ? da[a].push(b) : da[a] = [b];
        var d, c, f, e, k = z.destination;
        if (da.hasOwnProperty(a) && (f = da[a], f.length))
            for (k = f[0].Uc(), d = 0, c = f.length; d < c; d++) e = f[d], d + 1 === c ? e.gd(z.destination) : e.gd(f[d + 1].Uc());
        P(a);
        d = 0;
        for (c = ta.length; d < c; d++) ta[d].uz(k);
        Sa && Sb === a && (Sa.disconnect(), Sa.connect(k))
    }

    function T() {}

    function Q() {}

    function M() {}
    var R = vc.prototype;
    R.P = function(a) {
        this.ra = a;
        this.b = a.b
    };
    R.P.prototype.H = function() {};
    var I = null,
        J = null,
        y = "",
        H = "",
        O = 0,
        z = null,
        K = [],
        E = [],
        V = null,
        sa = !1,
        W = 0,
        ka = !1,
        aa = 1,
        Ia = 0,
        Xa = 0,
        Pb = !1,
        Qb = 1,
        Rb = 1,
        Tc = 10,
        Wc = 1E4,
        Xc = 1,
        Sa = null,
        Sb = "",
        Uc = !1,
        xb = [],
        yb = !1,
        Vc = !1;
    document.addEventListener("pointerup", c, !0);
    document.addEventListener("touchend", c, !0);
    document.addEventListener("click", c, !0);
    document.addEventListener("keydown", c, !0);
    document.addEventListener("gamepadconnected", c, !0);
    var da = {},
        jd = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
    e.prototype.gd = function(a) {
        this.T.disconnect();
        this.T.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    e.prototype.remove = function() {
        this.qa.disconnect();
        this.rb.disconnect();
        this.T.disconnect();
        this.R.disconnect()
    };
    e.prototype.Uc = function() {
        return this.qa
    };
    l.prototype.gd = function(a) {
        this.T.disconnect();
        this.T.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    l.prototype.remove = function() {
        this.qa.disconnect();
        this.ej.disconnect();
        this.kd.disconnect();
        this.Lk.disconnect();
        this.T.disconnect();
        this.R.disconnect()
    };
    l.prototype.Uc = function() {
        return this.qa
    };
    q.prototype.gd = function(a) {
        this.T.disconnect();
        this.T.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    q.prototype.remove = function() {
        this.qa.disconnect();
        this.eg.disconnect();
        this.T.disconnect();
        this.R.disconnect()
    };
    q.prototype.Uc = function() {
        return this.qa
    };
    w.prototype.gd = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.T.disconnect();
        this.T.connect(a)
    };
    w.prototype.remove = function() {
        this.qa.disconnect();
        this.kd.disconnect();
        this.Pb.disconnect();
        this.Mc.disconnect();
        this.R.disconnect();
        this.T.disconnect();
        this.Uk.disconnect()
    };
    w.prototype.Uc = function() {
        return this.qa
    };
    N.prototype.gd = function(a) {
        this.R.disconnect();
        this.R.connect(a);
        this.T.disconnect();
        this.T.connect(a)
    };
    N.prototype.remove = function() {
        this.qa.disconnect();
        this.rb.disconnect();
        this.Pb.disconnect();
        this.Mc.disconnect();
        this.R.disconnect();
        this.T.disconnect()
    };
    N.prototype.Uc = function() {
        return this.qa
    };
    C.prototype.gd = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    C.prototype.remove = function() {
        this.Aa.disconnect()
    };
    C.prototype.Uc = function() {
        return this.Aa
    };
    n.prototype.gd = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    n.prototype.remove = function() {
        this.Pb.disconnect();
        this.Mc.disconnect();
        this.Aa.disconnect()
    };
    n.prototype.Uc = function() {
        return this.Aa
    };
    t.prototype.gd = function(a) {
        this.T.disconnect();
        this.T.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    t.prototype.remove = function() {
        this.Pb.disconnect();
        this.wj.disconnect();
        this.qa.disconnect();
        this.T.disconnect();
        this.R.disconnect()
    };
    t.prototype.Uc = function() {
        return this.qa
    };
    F.prototype.Kz = function(a, b) {
        .01 > a && (a = .01);
        this.Vl.gain.value = a;
        this.Ul.gain.value = Math.pow(1 / a, .6) * b
    };
    F.prototype.shape = function(a, b, d) {
        var c = 1.05 * d * b - b;
        d = 0 > a ? -1 : 1;
        a = 0 > a ? -a : a;
        b = a < b ? a : b + c * (1 - Math.exp(-(1 / c) * (a - b)));
        return b * d
    };
    F.prototype.Lx = function(a, b) {
        for (var d = Math.pow(10, a / 20), c = Math.pow(10, b / 20), f = 0, e = 0; 32768 > e; ++e) f = e / 32768, f = this.shape(f, d, c), this.Jk[32768 + e] = f, this.Jk[32768 - e - 1] = -f
    };
    F.prototype.gd = function(a) {
        this.T.disconnect();
        this.T.connect(a);
        this.R.disconnect();
        this.R.connect(a)
    };
    F.prototype.remove = function() {
        this.qa.disconnect();
        this.Vl.disconnect();
        this.Gm.disconnect();
        this.Ul.disconnect();
        this.T.disconnect();
        this.R.disconnect()
    };
    F.prototype.Uc = function() {
        return this.qa
    };
    x.prototype.gd = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    x.prototype.remove = function() {
        this.Aa.disconnect()
    };
    x.prototype.Uc = function() {
        return this.Aa
    };
    B.prototype.fb = function() {
        this.Aa.getFloatFrequencyData(this.Jx);
        this.Aa.getByteTimeDomainData(this.Ft);
        for (var a = this.Aa.fftSize, b = 0, d = this.mj = 0, c = 0; b < a; b++) c = (this.Ft[b] - 128) / 128, 0 > c && (c = -c), this.mj < c && (this.mj = c), d += c * c;
        this.mj = m(this.mj);
        m(Math.sqrt(d / a))
    };
    B.prototype.gd = function(a) {
        this.Aa.disconnect();
        this.Aa.connect(a)
    };
    B.prototype.remove = function() {
        this.Aa.disconnect()
    };
    B.prototype.Uc = function() {
        return this.Aa
    };
    L.prototype.xj = function(a) {
        this.Ea = a
    };
    L.prototype.el = function() {
        return !!this.Ea
    };
    L.prototype.fb = function() {};
    u.prototype.vz = function() {
        var a, b, d, c;
        d = a = 0;
        for (b = E.length; a < b; ++a) c = E[a], E[d] = c, c.buffer === this ? c.stop() : ++d;
        E.length = d;
        this.yh && (this.yh.disconnect(), this.yh = null);
        this.Fh && (this.Fh.disconnect(), this.Fh = null);
        this.ze = this.wa = null
    };
    u.prototype.Wq = function() {
        if (!this.wa && this.ze) {
            var a = this;
            if (z.decodeAudioData) z.decodeAudioData(this.ze, function(b) {
                a.wa = b;
                a.ze = null;
                var d, c, f;
                if (ia(a.Rl) || ka) ia(a.Ek) || (d = a.Ek.eg, d.normalize = a.Es, d.buffer = b);
                else if (a.Gh.length) {
                    d = 0;
                    for (c = a.Gh.length; d < c; d++) {
                        b = a.Gh[d];
                        f = new v(a, b.Ot);
                        f.xp(!0);
                        if ("undefined" !== typeof b.Gs && (b.Ea = I.Ai(b.Gs), !b.Ea)) continue;
                        if (b.Ea) {
                            var e = Ta(b.Ea.x, b.Ea.y, -b.Ea.k.Db(), Ia, Xa, !0),
                                k = Ta(b.Ea.x, b.Ea.y, -b.Ea.k.Db(), Ia, Xa, !1);
                            f.wp(e, k, Ja(b.Ea.j - b.Ea.k.Db()), b.bo, b.Qo, b.To);
                            f.xj(b.Ea)
                        } else f.wp(b.x, b.y, b.Qg, b.bo, b.Qo, b.To);
                        f.play(a.Ko, a.Up, a.gm);
                        a.Pl && f.pause();
                        E.push(f)
                    }
                    A(a.Gh)
                } else f = new v(a, a.Rl || ""), f.play(a.Ko, a.Up, a.gm), a.Pl && f.pause(), E.push(f)
            }, function() {
                a.Sk = !0
            });
            else if (this.wa = z.createBuffer(this.ze, !1), this.ze = null, ia(this.Rl) || ka) ia(this.Ek) || (b = this.Ek.eg, b.normalize = this.Es, b.buffer = this.wa);
            else {
                var b = new v(this, this.Rl);
                b.play(this.Ko, this.Up, this.gm);
                this.Pl && b.pause();
                E.push(b)
            }
        }
    };
    u.prototype.Mr = function() {
        switch (this.fa) {
            case 0:
                var a = 4 <= this.wa.readyState;
                a && (this.Vp = !0);
                return a || this.Vp;
            case 1:
                return !!this.ze || !!this.wa;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    u.prototype.Cy = function() {
        switch (this.fa) {
            case 0:
                return this.Mr();
            case 1:
                return !!this.wa;
            case 2:
                return !0;
            case 3:
                return !0
        }
        return !1
    };
    u.prototype.ry = function() {
        switch (this.fa) {
            case 0:
                return !!this.wa.error;
            case 1:
                return this.Sk
        }
        return !1
    };
    v.prototype.qg = function() {
        switch (this.fa) {
            case 0:
                return this.n.ended;
            case 1:
                return 1 === this.buffer.fa ? !this.de && !this.Ra && this.n.loop || this.Ic ? !1 : this.eh : this.n.ended;
            case 2:
                return this.eh;
            case 3:
                !0
        }
        return !0
    };
    v.prototype.jw = function() {
        return this.de || this.Ra ? !0 : this.qg()
    };
    v.prototype.xp = function(a) {
        1 === O && (!this.ke && a ? this.Cb && (this.wb || (this.wb = z.createPanner(), this.wb.panningModel = "number" === typeof this.wb.panningModel ? Qb : ["equalpower", "HRTF", "soundfield"][Qb], this.wb.distanceModel = "number" === typeof this.wb.distanceModel ? Rb : ["linear", "inverse", "exponential"][Rb], this.wb.refDistance = Tc, this.wb.maxDistance = Wc, this.wb.rolloffFactor = Xc), this.Cb.disconnect(), this.Cb.connect(this.wb), this.wb.connect(r(this.tag)), this.ke = !0) : this.ke && !a && this.Cb && (this.wb.disconnect(), this.Cb.disconnect(), this.Cb.connect(r(this.tag)), this.ke = !1))
    };
    v.prototype.wp = function(a, b, d, c, f, e) {
        this.ke && 1 === O && (this.wb.setPosition(a, b, 0), this.wb.setOrientation(Math.cos(D(d)), Math.sin(D(d)), 0), this.wb.coneInnerAngle = c, this.wb.coneOuterAngle = f, this.wb.coneOuterGain = e, this.Vs = a, this.Ws = b, this.Rs = d, this.Ss = c, this.Ts = f, this.Us = e)
    };
    v.prototype.xj = function(a) {
        this.ke && 1 === O && (this.Vb || (this.Vb = new L), this.Vb.xj(a))
    };
    v.prototype.fb = function(a) {
        if (this.ke && 1 === O && this.Vb && this.Vb.el() && this.Mf()) {
            this.Vb.fb(a);
            a = this.Vb.Ea;
            var b = Ta(a.x, a.y, -a.k.Db(), Ia, Xa, !0),
                d = Ta(a.x, a.y, -a.k.Db(), Ia, Xa, !1);
            this.wb.setPosition(b, d, 0);
            b = 0;
            "undefined" !== typeof this.Vb.Ea.j && (b = a.j - a.k.Db(), this.wb.setOrientation(Math.cos(b), Math.sin(b), 0))
        }
    };
    v.prototype.play = function(a, b, c, e) {
        var k = this.n;
        this.ie = a;
        this.volume = b;
        c = c || 0;
        e = e || 0;
        switch (this.fa) {
            case 0:
                1 !== k.playbackRate && (k.playbackRate = 1);
                k.volume !== b * aa && (k.volume = b * aa);
                k.loop !== a && (k.loop = a);
                k.muted && (k.muted = !1);
                if (k.currentTime !== c) try {
                    k.currentTime = c
                } catch (l) {}
                g(this);
                break;
            case 1:
                this.muted = !1;
                this.zh = 1;
                if (1 === this.buffer.fa) this.Cb.gain.value = b * aa, this.de || (this.n = z.createBufferSource(), this.n.buffer = this.buffer.wa, this.n.connect(this.Cb)), this.n.onended = this.Zo, this.mk = this.n, this.n.loop = a, this.eh = !1, 0 === c ? d(this.n, e) : f(this.n, c, this.If(), e);
                else {
                    1 !== k.playbackRate && (k.playbackRate = 1);
                    k.loop !== a && (k.loop = a);
                    k.volume = b * aa;
                    if (k.currentTime !== c) try {
                        k.currentTime = c
                    } catch (m) {}
                    g(this)
                }
                break;
            case 2:
                (!this.de && this.Ra || 0 !== c) && k.seekTo(c);
                k.play();
                this.eh = !1;
                break;
            case 3:
                I.ic ? AppMobi.context.playSound(this.src, a) : AppMobi.player.playSound(this.src, a)
        }
        this.playbackRate = 1;
        this.startTime = (this.fh ? I.Ub.ta : I.mf.ta) - c;
        this.Ic = this.Ra = this.de = !1
    };
    v.prototype.stop = function() {
        switch (this.fa) {
            case 0:
                this.n.paused || this.n.pause();
                break;
            case 1:
                1 === this.buffer.fa ? a(this.n) : this.n.paused || this.n.pause();
                break;
            case 2:
                this.n.stop();
                break;
            case 3:
                I.ic && AppMobi.context.stopSound(this.src)
        }
        this.Ra = !0;
        this.Ic = !1
    };
    v.prototype.pause = function() {
        if (!(this.de || this.Ra || this.qg() || this.Ic)) {
            switch (this.fa) {
                case 0:
                    this.n.paused || this.n.pause();
                    break;
                case 1:
                    1 === this.buffer.fa ? (this.zc = this.Vn(!0), this.ie && (this.zc = this.zc % this.If()), this.Ic = !0, a(this.n)) : this.n.paused || this.n.pause();
                    break;
                case 2:
                    this.n.pause();
                    break;
                case 3:
                    I.ic && AppMobi.context.stopSound(this.src)
            }
            this.Ic = !0
        }
    };
    v.prototype.Az = function() {
        if (!(this.de || this.Ra || this.qg()) && this.Ic) {
            switch (this.fa) {
                case 0:
                    g(this);
                    break;
                case 1:
                    1 === this.buffer.fa ? (this.n = z.createBufferSource(), this.n.buffer = this.buffer.wa, this.n.connect(this.Cb), this.n.onended = this.Zo, this.mk = this.n, this.n.loop = this.ie, this.Cb.gain.value = aa * this.volume * this.zh, this.Pj(), this.startTime = (this.fh ? I.Ub.ta : I.mf.ta) - this.zc / (this.playbackRate || .001), f(this.n, this.zc, this.If())) : g(this);
                    break;
                case 2:
                    this.n.play();
                    break;
                case 3:
                    I.ic && AppMobi.context.resumeSound(this.src)
            }
            this.Ic = !1
        }
    };
    v.prototype.seek = function(a) {
        if (!(this.de || this.Ra || this.qg())) switch (this.fa) {
            case 0:
                try {
                    this.n.currentTime = a
                } catch (b) {}
                break;
            case 1:
                if (1 === this.buffer.fa) this.Ic ? this.zc = a : (this.pause(), this.zc = a, this.Az());
                else try {
                    this.n.currentTime = a
                } catch (d) {}
                break;
            case 3:
                I.ic && AppMobi.context.seekSound(this.src, a)
        }
    };
    v.prototype.uz = function(a) {
        1 === this.fa && (this.ke ? (this.wb.disconnect(), this.wb.connect(a)) : (this.Cb.disconnect(), this.Cb.connect(a)))
    };
    v.prototype.If = function() {
        var a = 0;
        switch (this.fa) {
            case 0:
                "undefined" !== typeof this.n.duration && (a = this.n.duration);
                break;
            case 1:
                a = this.buffer.wa.duration;
                break;
            case 2:
                a = this.n.getDuration();
                break;
            case 3:
                I.ic && (a = AppMobi.context.getDurationSound(this.src))
        }
        return a
    };
    v.prototype.Vn = function(a) {
        var b = this.If(),
            d = 0;
        switch (this.fa) {
            case 0:
                "undefined" !== typeof this.n.currentTime && (d = this.n.currentTime);
                break;
            case 1:
                if (1 === this.buffer.fa) {
                    if (this.Ic) return this.zc;
                    d = (this.fh ? I.Ub.ta : I.mf.ta) - this.startTime
                } else "undefined" !== typeof this.n.currentTime && (d = this.n.currentTime);
                break;
            case 3:
                I.ic && (d = AppMobi.context.getPlaybackTimeSound(this.src))
        }
        a && (d *= this.playbackRate);
        !this.ie && d > b && (d = b);
        return d
    };
    v.prototype.Mf = function() {
        return !this.Ic && !this.de && !this.Ra && !this.qg()
    };
    v.prototype.Rz = function() {
        return !this.de && !this.Ra && !this.qg()
    };
    v.prototype.bA = function() {
        var a = this.volume * aa;
        isFinite(a) || (a = 0);
        switch (this.fa) {
            case 0:
                "undefined" !== typeof this.n.volume && this.n.volume !== a && (this.n.volume = a);
                break;
            case 1:
                1 === this.buffer.fa ? this.Cb.gain.value = a * this.zh : "undefined" !== typeof this.n.volume && this.n.volume !== a && (this.n.volume = a)
        }
    };
    v.prototype.Pk = function(a) {
        switch (this.fa) {
            case 0:
                this.n.muted !== !!a && (this.n.muted = !!a);
                break;
            case 1:
                1 === this.buffer.fa ? (this.zh = a ? 0 : 1, this.Cb.gain.value = aa * this.volume * this.zh) : this.n.muted !== !!a && (this.n.muted = !!a)
        }
    };
    v.prototype.Lz = function() {
        this.jh = !0;
        this.Pk(this.jh || this.Qi)
    };
    v.prototype.zt = function(a) {
        this.Qi = !!a;
        this.Pk(this.jh || this.Qi)
    };
    v.prototype.Mz = function(a) {
        this.playbackRate = a;
        this.Pj()
    };
    v.prototype.Pj = function() {
        var a = this.playbackRate;
        this.fh && (a *= I.Th);
        switch (this.fa) {
            case 0:
                this.n.playbackRate !== a && (this.n.playbackRate = a);
                break;
            case 1:
                1 === this.buffer.fa ? this.n.playbackRate.value !== a && (this.n.playbackRate.value = a) : this.n.playbackRate !== a && (this.n.playbackRate = a)
        }
    };
    v.prototype.Pz = function(b) {
        switch (this.fa) {
            case 0:
                b ? this.Mf() ? (this.bd = !0, this.n.pause()) : this.bd = !1 : this.bd && (this.n.play(), this.bd = !1);
                break;
            case 1:
                b ? this.Mf() ? (this.bd = !0, 1 === this.buffer.fa ? (this.zc = this.Vn(!0), this.ie && (this.zc = this.zc % this.If()), a(this.n)) : this.n.pause()) : this.bd = !1 : this.bd && (1 === this.buffer.fa ? (this.n = z.createBufferSource(), this.n.buffer = this.buffer.wa, this.n.connect(this.Cb), this.n.onended = this.Zo, this.mk = this.n, this.n.loop = this.ie, this.Cb.gain.value = aa * this.volume * this.zh, this.Pj(), this.startTime = (this.fh ? I.Ub.ta : I.mf.ta) - this.zc / (this.playbackRate || .001), f(this.n, this.zc, this.If())) : this.n.play(), this.bd = !1);
                break;
            case 2:
                b ? this.Mf() ? (this.n.pause(), this.bd = !0) : this.bd = !1 : this.bd && (this.bd = !1, this.n.play())
        }
    };
    R.L = function(a) {
        this.type = a;
        I = this.b = a.b;
        J = this;
        this.Jc = null;
        this.Vi = -600;
        this.b.ll && (yb = !0);
        !(this.b.nh || this.b.gl && (this.b.lo || this.b.hl)) || this.b.jl || this.b.lb || this.b.Kr || yb || (Uc = !0);
        z = null;
        "undefined" !== typeof AudioContext ? (O = 1, z = new AudioContext) : "undefined" !== typeof webkitAudioContext && (O = 1, z = new webkitAudioContext);
        this.b.nh && z && (z.close && z.close(), "undefined" !== typeof AudioContext ? z = new AudioContext : "undefined" !== typeof webkitAudioContext && (z = new webkitAudioContext));
        1 !== O && (this.b.Wc && "undefined" !== typeof window.Media ? O = 2 : this.b.Lr && (O = 3));
        2 === O && (H = location.href, a = H.lastIndexOf("/"), -1 < a && (H = H.substr(0, a + 1)), H = H.replace("file://", ""));
        if (this.b.Dy && this.b.Ey && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.Yf(this);
        else {
            if (this.b.ic) sa = this.b.gl;
            else try {
                sa = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"') && !this.b.ml
            } catch (b) {
                sa = !1
            }
            this.b.xm(this)
        }
    };
    var Ba = R.L.prototype;
    Ba.H = function() {
        this.b.Rg = this;
        W = this.q[0];
        this.Ze = this.q[1];
        this.fz = 0 !== this.q[2];
        this.Cs = 0;
        Qb = this.q[3];
        Rb = this.q[4];
        this.Vi = -this.q[5];
        Tc = this.q[6];
        Wc = this.q[7];
        Xc = this.q[8];
        this.Jc = new L;
        var a = this.b.N || this.b.width,
            b = this.b.M || this.b.height;
        1 === O && (z.listener.setPosition(a / 2, b / 2, this.Vi), z.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
            Sa && Sa.disconnect();
            Sb = b.toLowerCase();
            Sa = z.createMediaStreamSource(a);
            Sa.connect(r(Sb))
        });
        this.b.Fq(function(a) {
            J.az(a)
        });
        var d = this;
        this.b.$m(function(a) {
            d.Vo(a)
        })
    };
    Ba.Vo = function(a) {
        var b, d, c;
        b = 0;
        for (d = E.length; b < d; b++) c = E[b], c.Vb && c.Vb.Ea === a && (c.Vb.Ea = null, c.ke && c.Mf() && c.ie && c.stop());
        this.Jc.Ea === a && (this.Jc.Ea = null)
    };
    Ba.nb = function() {
        var a = {
                silent: ka,
                masterVolume: aa,
                listenerZ: this.Vi,
                listenerUid: this.Jc.el() ? this.Jc.Ea.uid : -1,
                playing: [],
                effects: {}
            },
            b = a.playing,
            d, c, f, e, k, l;
        d = 0;
        for (c = E.length; d < c; d++) f = E[d], !f.Rz() || 3 === this.Ze || f.ge && 1 === this.Ze || !f.ge && 2 === this.Ze || (e = f.Vn(), f.ie && (e = e % f.If()), e = {
            tag: f.tag,
            buffersrc: f.buffer.src,
            is_music: f.ge,
            playbackTime: e,
            volume: f.volume,
            looping: f.ie,
            muted: f.jh,
            playbackRate: f.playbackRate,
            paused: f.Ic,
            resume_position: f.zc
        }, f.ke && (e.pan = {}, l = e.pan, f.Vb && f.Vb.el() ? l.objUid = f.Vb.Ea.uid : (l.x = f.Vs, l.y = f.Ws, l.a = f.Rs), l.ia = f.Ss, l.oa = f.Ts, l.og = f.Us), b.push(e));
        b = a.effects;
        for (k in da)
            if (da.hasOwnProperty(k)) {
                f = [];
                d = 0;
                for (c = da[k].length; d < c; d++) f.push({
                    type: da[k][d].type,
                    params: da[k][d].xb
                });
                b[k] = f
            }
        return a
    };
    var fb = [];
    Ba.Gb = function(a) {
        var b = a.silent;
        aa = a.masterVolume;
        this.Vi = a.listenerZ;
        this.Jc.xj(null);
        var d = a.listenerUid; - 1 !== d && (this.Jc.xl = d, fb.push(this.Jc));
        var d = a.playing,
            c, f, k, m, g, h, r, p, v, u, Q;
        if (3 !== this.Ze)
            for (c = 0, f = E.length; c < f; c++) v = E[c], v.ge && 1 === this.Ze || (v.ge || 2 !== this.Ze) && v.stop();
        for (g in da)
            if (da.hasOwnProperty(g))
                for (c = 0, f = da[g].length; c < f; c++) da[g][c].remove();
        Ya(da);
        for (g in a.effects)
            if (a.effects.hasOwnProperty(g))
                for (h = a.effects[g], c = 0, f = h.length; c < f; c++) switch (k = h[c].type, u = h[c].params, k) {
                    case "filter":
                        U(g, new e(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "delay":
                        U(g, new l(u[0], u[1], u[2]));
                        break;
                    case "convolve":
                        k = u[2];
                        v = this.al(k, !1);
                        v.wa ? k = new q(v.wa, u[0], u[1], k) : (k = new q(null, u[0], u[1], k), v.Es = u[0], v.Ek = k);
                        U(g, k);
                        break;
                    case "flanger":
                        U(g, new w(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "phaser":
                        U(g, new N(u[0], u[1], u[2], u[3], u[4], u[5]));
                        break;
                    case "gain":
                        U(g, new C(u[0]));
                        break;
                    case "tremolo":
                        U(g, new n(u[0], u[1]));
                        break;
                    case "ringmod":
                        U(g, new t(u[0], u[1]));
                        break;
                    case "distortion":
                        U(g, new F(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "compressor":
                        U(g, new x(u[0], u[1], u[2], u[3], u[4]));
                        break;
                    case "analyser":
                        U(g, new B(u[0], u[1]))
                }
        c = 0;
        for (f = d.length; c < f; c++) 3 === this.Ze || (a = d[c], k = a.buffersrc, m = a.is_music, g = a.tag, h = a.playbackTime, r = a.looping, p = a.volume, Q = (u = a.pan) && u.hasOwnProperty("objUid") ? u.objUid : -1, m && 1 === this.Ze) || !m && 2 === this.Ze || ((v = this.or(k, g, m, r, p)) ? (v.zc = a.resume_position, v.xp(!!u), v.play(r, p, h), v.Pj(), v.bA(), v.Pk(v.jh || v.Qi), a.paused && v.pause(), a.muted && v.Lz(), v.Pk(v.jh || v.Qi), u && (-1 !== Q ? (v.Vb = v.Vb || new L, v.Vb.xl = Q, fb.push(v.Vb)) : v.wp(u.x, u.y, u.a, u.ia, u.oa, u.og))) : (v = this.al(k, m), v.gm = h, v.Pl = a.paused, u && (-1 !== Q ? v.Gh.push({
            Gs: Q,
            bo: u.ia,
            Qo: u.oa,
            To: u.og,
            Ot: g
        }) : v.Gh.push({
            x: u.x,
            y: u.y,
            Qg: u.a,
            bo: u.ia,
            Qo: u.oa,
            To: u.og,
            Ot: g
        }))));
        if (b && !ka) {
            c = 0;
            for (f = E.length; c < f; c++) E[c].zt(!0);
            ka = !0
        } else if (!b && ka) {
            c = 0;
            for (f = E.length; c < f; c++) E[c].zt(!1);
            ka = !1
        }
    };
    Ba.Vd = function() {
        var a, b, d, c;
        a = 0;
        for (b = fb.length; a < b; a++) d = fb[a], c = this.b.Ai(d.xl), d.xj(c), d.xl = -1, c && (Ia = c.x, Xa = c.y);
        A(fb)
    };
    Ba.az = function(a) {
        if (!this.fz) {
            !a && z && z.resume && (z.resume(), Pb = !1);
            var b, d;
            b = 0;
            for (d = E.length; b < d; b++) E[b].Pz(a);
            a && z && z.suspend && (z.suspend(), Pb = !0)
        }
    };
    Ba.fb = function() {
        var a = this.b.He,
            b, d, c;
        b = 0;
        for (d = E.length; b < d; b++) c = E[b], c.fb(a), 0 !== W && c.Pj();
        var f, e;
        for (f in da)
            if (da.hasOwnProperty(f))
                for (c = da[f], b = 0, d = c.length; b < d; b++) e = c[b], e.fb && e.fb();
        1 === O && this.Jc.el() && (this.Jc.fb(a), Ia = this.Jc.Ea.x, Xa = this.Jc.Ea.y, z.listener.setPosition(this.Jc.Ea.x, this.Jc.Ea.y, this.Vi))
    };
    var gb = [];
    Ba.Nz = function(a) {
        var b, d, c, f, e, k = 0;
        b = 0;
        for (d = a.length; b < d; ++b)
            if (c = a[b], f = c[0], c = 2 * c[1], (e = 4 < f.length && ".ogg" === f.substr(f.length - 4)) && sa || !e && !sa) gb.push({
                filename: f,
                size: c,
                Ea: null
            }), k += c;
        return k
    };
    Ba.Tz = function() {
        var a, b, d, c;
        a = 0;
        for (b = gb.length; a < b; ++a) d = gb[a], c = this.b.Hn + d.filename, d.Ea = this.al(c, !1)
    };
    Ba.Ux = function() {
        var a = 0,
            b, d, c;
        b = 0;
        for (d = gb.length; b < d; ++b) c = gb[b], c.Ea.Cy() || c.Ea.ry() || this.b.lb || this.b.hl ? a += c.size : c.Ea.Mr() && (a += Math.floor(c.size / 2));
        return a
    };
    Ba.wz = function() {
        var a, b, d, c;
        d = a = 0;
        for (b = K.length; a < b; ++a) c = K[a], K[d] = c, c.ge ? c.vz() : ++d;
        K.length = d
    };
    Ba.al = function(a, b) {
        var d, c, f, e = null;
        d = 0;
        for (c = K.length; d < c; d++)
            if (f = K[d], f.src === a) {
                e = f;
                break
            }
        e || (yb && b && this.wz(), e = new u(a, b), K.push(e));
        return e
    };
    Ba.or = function(a, b, d, c, f) {
        var e, k, l;
        e = 0;
        for (k = E.length; e < k; e++)
            if (l = E[e], l.src === a && (l.jw() || d)) return l.tag = b, l;
        a = this.al(a, d);
        if (!a.wa) return "<preload>" !== b && (a.Rl = b, a.Ko = c, a.Up = f), null;
        l = new v(a, b);
        E.push(l);
        return l
    };
    var ta = [];
    T.prototype.dk = function(a) {
        return mb(y, a)
    };
    T.prototype.Eu = function(a) {
        P(a);
        var b;
        a = 0;
        for (b = ta.length; a < b; a++)
            if (ta[a].Mf()) return !0;
        return !1
    };
    R.g = new T;
    Q.prototype.zv = function(a, b, d, c, f) {
        !ka && (c = Math.pow(10, c / 20), isFinite(c) || (c = 0), 0 > c && (c = 0), 1 < c && (c = 1), V = this.or(this.b.Hn +
            b.toLowerCase() + (sa ? ".ogg" : ".m4a"), f, 1 === a, 0 !== d, c)) && (V.xp(!1), V.play(0 !== d, c, 0, this.Cs), this.Cs = 0)
    };
    Q.prototype.Iv = function(a, b) {
        P(a);
        0 > b && (b = 0);
        var d, c;
        d = 0;
        for (c = ta.length; d < c; d++) ta[d].Mz(b)
    };
    Q.prototype.hk = function(a) {
        P(a);
        var b;
        a = 0;
        for (b = ta.length; a < b; a++) ta[a].stop()
    };
    Q.prototype.Nv = function() {
        var a, b;
        a = 0;
        for (b = E.length; a < b; a++) E[a].stop()
    };
    R.A = new Q;
    M.prototype.ru = function(a, b) {
        P(b, !0);
        ta.length ? a.I(ta[0].If()) : a.I(0)
    };
    R.S = new M
})();

function wc(h) {
    this.b = h
}
(function() {
    function h() {
        m && r && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(function(b) {
            p.$y(b)
        })
    }

    function g() {}
    var c = wc.prototype;
    c.P = function(b) {
        this.ra = b;
        this.b = b.b
    };
    var k = c.P.prototype;
    k.H = function() {};
    var m = !1,
        r = !1;
    document.addEventListener("DOMContentLoaded", function() {
        if (window.C2_RegisterSW && navigator.serviceWorker) {
            var b = document.createElement("script");
            b.onload = function() {
                m = !0;
                h()
            };
            b.src = "offlineClient.js";
            document.head.appendChild(b)
        }
    });
    var p = null;
    k.Ks = function() {
        r = !0;
        h()
    };
    c.L = function(b) {
        this.type = b;
        this.b = b.b
    };
    k = c.L.prototype;
    k.H = function() {
        var b = this;
        window.addEventListener("resize", function() {
            b.b.trigger(wc.prototype.g.pv, b)
        });
        p = this;
        "undefined" !== typeof navigator.onLine && (window.addEventListener("online", function() {
            b.b.trigger(wc.prototype.g.lv, b)
        }), window.addEventListener("offline", function() {
            b.b.trigger(wc.prototype.g.jv, b)
        }));
        this.b.ic || (document.addEventListener("appMobi.device.update.available", function() {
            b.b.trigger(wc.prototype.g.Pm, b)
        }), document.addEventListener("backbutton", function() {
            b.b.trigger(wc.prototype.g.bk, b)
        }), document.addEventListener("menubutton", function() {
            b.b.trigger(wc.prototype.g.hq, b)
        }), document.addEventListener("searchbutton", function() {
            b.b.trigger(wc.prototype.g.sv, b)
        }), document.addEventListener("tizenhwkey", function(d) {
            var c;
            switch (d.keyName) {
                case "back":
                    c = b.b.trigger(wc.prototype.g.bk, b);
                    !c && window.tizen && window.tizen.application.getCurrentApplication().exit();
                    break;
                case "menu":
                    (c = b.b.trigger(wc.prototype.g.hq, b)) || d.preventDefault()
            }
        }));
        this.b.ml && "undefined" !== typeof Windows ? Windows.UI.Core.SystemNavigationManager.getForCurrentView().addEventListener("backrequested", function(d) {
            b.b.trigger(wc.prototype.g.bk, b) && (d.handled = !0)
        }) : this.b.Or && WinJS.Application && (WinJS.Application.onbackclick = function() {
            return !!b.b.trigger(wc.prototype.g.bk, b)
        });
        this.b.Fq(function(d) {
            d ? b.b.trigger(wc.prototype.g.nv, b) : b.b.trigger(wc.prototype.g.ov, b)
        })
    };
    k.$y = function(b) {
        b = b.data.type;
        "downloading-update" === b ? this.b.trigger(wc.prototype.g.vv, this) : "update-ready" === b || "update-pending" === b ? this.b.trigger(wc.prototype.g.Pm, this) : "offline-ready" === b && this.b.trigger(wc.prototype.g.kv, this)
    };
    g.prototype.lv = function() {
        return !0
    };
    g.prototype.jv = function() {
        return !0
    };
    g.prototype.Pm = function() {
        return !0
    };
    g.prototype.ov = function() {
        return !0
    };
    g.prototype.nv = function() {
        return !0
    };
    g.prototype.pv = function() {
        return !0
    };
    g.prototype.bk = function() {
        return !0
    };
    g.prototype.hq = function() {
        return !0
    };
    g.prototype.sv = function() {
        return !0
    };
    g.prototype.vv = function() {
        return !0
    };
    g.prototype.Pm = function() {
        return !0
    };
    g.prototype.kv = function() {
        return !0
    };
    c.g = new g;
    c.A = new function() {};
    c.S = new function() {}
})();

function tc(h) {
    this.b = h
}
(function() {
    function h() {
        this.name = "";
        this.uj = 0;
        this.xb = []
    }

    function g() {
        b++;
        b === p.length && p.push(new h);
        return p[b]
    }

    function c() {}

    function k() {}

    function m() {}
    var r = tc.prototype;
    r.P = function(b) {
        this.ra = b;
        this.b = b.b
    };
    r.P.prototype.H = function() {};
    r.L = function(b) {
        this.type = b;
        this.b = b.b
    };
    var p = [],
        b = -1;
    r.L.prototype.H = function() {
        var d = this;
        window.c2_callFunction = function(c, a) {
            var e, k, m, h = g();
            h.name = c.toLowerCase();
            h.uj = 0;
            if (a)
                for (h.xb.length = a.length, e = 0, k = a.length; e < k; ++e) m = a[e], h.xb[e] = "number" === typeof m || "string" === typeof m ? m : "boolean" === typeof m ? m ? 1 : 0 : 0;
            else A(h.xb);
            d.b.trigger(tc.prototype.g.fk, d, h.name);
            b--;
            return h.uj
        }
    };
    c.prototype.fk = function(d) {
        var c = 0 > b ? null : p[b];
        return c ? mb(d, c.name) : !1
    };
    r.g = new c;
    k.prototype.CallFunction = function(d, c) {
        var a = g();
        a.name = d.toLowerCase();
        a.uj = 0;
        Da(a.xb, c);
        this.b.trigger(tc.prototype.g.fk, this, a.name);
        b--
    };
    r.A = new k;
    m.prototype.xv = function(d) {
        var c = 0 > b ? null : p[b];
        c ? d.ea(c.xb.length) : d.ea(0)
    };
    m.prototype.wv = function(d, c) {
        c = ua(c);
        var a = 0 > b ? null : p[b];
        a ? 0 <= c && c < a.xb.length ? d.lm(a.xb[c]) : d.ea(0) : d.ea(0)
    };
    m.prototype.iu = function(d, c) {
        var a = g();
        a.name = c.toLowerCase();
        a.uj = 0;
        A(a.xb);
        var e, k;
        e = 2;
        for (k = arguments.length; e < k; e++) a.xb.push(arguments[e]);
        this.b.trigger(tc.prototype.g.fk, this, a.name);
        b--;
        d.lm(a.uj)
    };
    r.S = new m
})();

function xc(h) {
    this.b = h
}
(function() {
    function h() {}
    var g = xc.prototype;
    g.P = function(c) {
        this.ra = c;
        this.b = c.b
    };
    g.P.prototype.H = function() {};
    g.L = function(c) {
        this.type = c;
        this.b = c.b;
        this.ph = Array(256);
        this.Rj = Array(256);
        this.jf = 0
    };
    var c = g.L.prototype;
    c.H = function() {
        var c = this;
        this.b.lb || (jQuery(document).keydown(function(k) {
            c.Wo(k)
        }), jQuery(document).keyup(function(k) {
            c.Xo(k)
        }))
    };
    var k = [32, 33, 34, 35, 36, 37, 38, 39, 40, 44];
    c.Wo = function(c) {
        var g = !1;
        window != window.top && -1 < k.indexOf(c.which) && (c.preventDefault(), g = !0, c.stopPropagation());
        if (this.ph[c.which]) this.Rj[c.which] && !g && c.preventDefault();
        else {
            this.ph[c.which] = !0;
            this.jf = c.which;
            this.b.Xc = !0;
            this.b.trigger(xc.prototype.g.Qu, this);
            var h = this.b.trigger(xc.prototype.g.cv, this),
                b = this.b.trigger(xc.prototype.g.dv, this);
            this.b.Xc = !1;
            if (h || b) this.Rj[c.which] = !0, g || c.preventDefault()
        }
    };
    c.Xo = function(c) {
        this.ph[c.which] = !1;
        this.jf = c.which;
        this.b.Xc = !0;
        this.b.trigger(xc.prototype.g.aq, this);
        var k = this.b.trigger(xc.prototype.g.Km, this),
            g = this.b.trigger(xc.prototype.g.dq, this);
        this.b.Xc = !1;
        if (k || g || this.Rj[c.which]) this.Rj[c.which] = !0, c.preventDefault()
    };
    c.Gg = function() {
        var c;
        for (c = 0; 256 > c; ++c)
            if (this.ph[c]) {
                this.ph[c] = !1;
                this.jf = c;
                this.b.trigger(xc.prototype.g.aq, this);
                var k = this.b.trigger(xc.prototype.g.Km, this),
                    g = this.b.trigger(xc.prototype.g.dq, this);
                if (k || g) this.Rj[c] = !0
            }
    };
    c.nb = function() {
        return {
            triggerKey: this.jf
        }
    };
    c.Gb = function(c) {
        this.jf = c.triggerKey
    };
    h.prototype.Du = function(c) {
        return this.ph[c]
    };
    h.prototype.cv = function(c) {
        return c === this.jf
    };
    h.prototype.Qu = function() {
        return !0
    };
    h.prototype.aq = function() {
        return !0
    };
    h.prototype.Km = function(c) {
        return c === this.jf
    };
    h.prototype.dv = function(c) {
        return c === this.jf
    };
    h.prototype.dq = function(c) {
        return c === this.jf
    };
    g.g = new h;
    g.A = new function() {};
    g.S = new function() {}
})();
var yc = !1;
try {
    ! function() {
        var h, g, c;
        ! function() {
            var k = {},
                m = {};
            h = function(c, m, b) {
                k[c] = {
                    ww: m,
                    iw: b
                }
            };
            c = g = function(h) {
                function p(a) {
                    if ("." !== a.charAt(0)) return a;
                    a = a.split("/");
                    for (var b = h.split("/").slice(0, -1), d = 0, c = a.length; c > d; d++) {
                        var f = a[d];
                        ".." === f ? b.pop() : "." !== f && b.push(f)
                    }
                    return b.join("/")
                }
                if (c.sB = k, m[h]) return m[h];
                if (m[h] = {}, !k[h]) throw Error("Could not find module " + h);
                for (var b, d = k[h], f = d.ww, d = d.iw, a = [], e = 0, l = f.length; l > e; e++) "exports" === f[e] ? a.push(b = {}) : a.push(g(p(f[e])));
                f = d.apply(this, a);
                return m[h] = b || f
            }
        }();
        h("promise/all", ["./utils", "exports"], function(c, m) {
            var g = c.isArray,
                h = c.isFunction;
            m.all = function(b) {
                if (!g(b)) throw new TypeError("You must pass an array to all.");
                return new this(function(d, c) {
                    function a(a) {
                        return function(b) {
                            k[a] = b;
                            0 === --m && d(k)
                        }
                    }
                    var e, k = [],
                        m = b.length;
                    0 === m && d([]);
                    for (var g = 0; g < b.length; g++)(e = b[g]) && h(e.then) ? e.then(a(g), c) : (k[g] = e, 0 === --m && d(k))
                })
            }
        });
        h("promise/asap", ["exports"], function(c) {
            function m() {
                return function() {
                    process.KB(b)
                }
            }

            function g() {
                var d = 0,
                    c = new a(b),
                    f = document.createTextNode("");
                return c.observe(f, {
                        characterData: !0
                    }),
                    function() {
                        f.data = d = ++d % 2
                    }
            }

            function h() {
                return function() {
                    e.setTimeout(b, 1)
                }
            }

            function b() {
                for (var a = 0; a < l.length; a++) {
                    var b = l[a];
                    (0, b[0])(b[1])
                }
                l = []
            }
            var d, f = "undefined" != typeof window ? window : {},
                a = f.MutationObserver || f.WebKitMutationObserver,
                e = "undefined" != typeof global ? global : void 0 === this ? window : this,
                l = [];
            d = "undefined" != typeof process && "[object process]" === {}.toString.call(process) ? m() : a ? g() : h();
            c.bw = function(a, b) {
                1 === l.push([a, b]) && d()
            }
        });
        h("promise/config", ["exports"], function(c) {
            var m = {
                CB: !1
            };
            c.Uq = m;
            c.mw = function(c, k) {
                return 2 !== arguments.length ? m[c] : void(m[c] = k)
            }
        });
        h("promise/polyfill", ["./promise", "./utils", "exports"], function(c, m, g) {
            var h = c.Promise,
                b = m.isFunction;
            g.gz = function() {
                var d;
                d = "undefined" != typeof global ? global : "undefined" != typeof window && window.document ? window : self;
                "Promise" in d && "resolve" in d.Promise && "reject" in d.Promise && "all" in d.Promise && "race" in d.Promise && function() {
                    var c;
                    return new d.Promise(function(a) {
                        c = a
                    }), b(c)
                }() || (d.Promise = h)
            }
        });
        h("promise/promise", "./config ./utils ./all ./race ./resolve ./reject ./asap exports".split(" "), function(c, m, g, h, b, d, f, a) {
            function e(a) {
                if (!v(a)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                if (!(this instanceof e)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                this.lk = [];
                l(a, this)
            }

            function l(a, b) {
                function d(a) {
                    n(b, a)
                }

                function c(a) {
                    F(b, a)
                }
                try {
                    a(d, c)
                } catch (f) {
                    c(f)
                }
            }

            function q(a, b, d, c) {
                var f, e, k, l, m = v(d);
                if (m) try {
                    f = d(c), k = !0
                } catch (g) {
                    l = !0, e = g
                } else f = c, k = !0;
                C(b, f) || (m && k ? n(b, f) : l ? F(b, e) : a === U ? n(b, f) : a === T && F(b, f))
            }

            function w(a, b, d, c) {
                a = a.lk;
                var f = a.length;
                a[f] = b;
                a[f + U] = d;
                a[f + T] = c
            }

            function N(a, b) {
                for (var d, c, f = a.lk, e = a.jk, k = 0; k < f.length; k += 3) d = f[k], c = f[k + b], q(b, d, c, e);
                a.lk = null
            }

            function C(a, b) {
                var d, c = null;
                try {
                    if (a === b) throw new TypeError("A promises callback cannot return that same promise.");
                    if (u(b) && (c = b.then, v(c))) return c.call(b, function(c) {
                        return d ? !0 : (d = !0, void(b !== c ? n(a, c) : t(a, c)))
                    }, function(b) {
                        return d ? !0 : (d = !0, void F(a, b))
                    }), !0
                } catch (f) {
                    return d ? !0 : (F(a, f), !0)
                }
                return !1
            }

            function n(a, b) {
                a === b ? t(a, b) : C(a, b) || t(a, b)
            }

            function t(a, b) {
                a.xe === G && (a.xe = P, a.jk = b, L.async(x, a))
            }

            function F(a, b) {
                a.xe === G && (a.xe = P, a.jk = b, L.async(B, a))
            }

            function x(a) {
                N(a, a.xe = U)
            }

            function B(a) {
                N(a, a.xe = T)
            }
            var L = c.Uq,
                u = (c.mw, m.Uy),
                v = m.isFunction;
            c = (m.now, g.all);
            h = h.race;
            b = b.resolve;
            d = d.reject;
            L.async = f.bw;
            var G = void 0,
                P = 0,
                U = 1,
                T = 2;
            e.prototype = {
                constructor: e,
                xe: void 0,
                jk: void 0,
                lk: void 0,
                then: function(a, b) {
                    var d = this,
                        c = new this.constructor(function() {});
                    if (this.xe) {
                        var f = arguments;
                        L.async(function() {
                            q(d.xe, c, f[d.xe - 1], d.jk)
                        })
                    } else w(this, c, a, b);
                    return c
                },
                "catch": function(a) {
                    return this.then(null, a)
                }
            };
            e.all = c;
            e.race = h;
            e.resolve = b;
            e.reject = d;
            a.Promise = e
        });
        h("promise/race", ["./utils", "exports"], function(c, m) {
            var g = c.isArray;
            m.race = function(c) {
                if (!g(c)) throw new TypeError("You must pass an array to race.");
                return new this(function(b, d) {
                    for (var f, a = 0; a < c.length; a++)(f = c[a]) && "function" == typeof f.then ? f.then(b, d) : b(f)
                })
            }
        });
        h("promise/reject", ["exports"], function(c) {
            c.reject = function(c) {
                return new this(function(k, g) {
                    g(c)
                })
            }
        });
        h("promise/resolve", ["exports"], function(c) {
            c.resolve = function(c) {
                return c && "object" == typeof c && c.constructor === this ? c : new this(function(k) {
                    k(c)
                })
            }
        });
        h("promise/utils", ["exports"], function(c) {
            function g(c) {
                return "function" == typeof c
            }
            var h = Date.now || function() {
                return (new Date).getTime()
            };
            c.Uy = function(c) {
                return g(c) || "object" == typeof c && null !== c
            };
            c.isFunction = g;
            c.isArray = function(c) {
                return "[object Array]" === Object.prototype.toString.call(c)
            };
            c.now = h
        });
        g("promise/polyfill").gz()
    }();
    var zc = function() {
        return function(h) {
            function g(k) {
                if (c[k]) return c[k].ae;
                var m = c[k] = {
                    ae: {},
                    id: k,
                    loaded: !1
                };
                return h[k].call(m.ae, m, m.ae, g), m.loaded = !0, m.ae
            }
            var c = {};
            return g.uf = h, g.ii = c, g.lj = "", g(0)
        }([function(h, g, c) {
            g.ik = !0;
            var k = function(k) {
                function g(a, b) {
                    a[b] = function() {
                        var d = arguments;
                        return a.ready().then(function() {
                            return a[b].apply(a, d)
                        })
                    }
                }

                function h() {
                    for (var a = 1; a < arguments.length; a++) {
                        var b = arguments[a];
                        if (b)
                            for (var d in b) b.hasOwnProperty(d) && (q(b[d]) ? arguments[0][d] = b[d].slice() : arguments[0][d] = b[d])
                    }
                    return arguments[0]
                }

                function b(a) {
                    for (var b in f)
                        if (f.hasOwnProperty(b) && f[b] === a) return !0;
                    return !1
                }
                var d = {},
                    f = {
                        $h: "asyncStorage",
                        ai: "localStorageWrapper",
                        ci: "webSQLStorage"
                    },
                    a = "clear getItem iterate key keys length removeItem setItem".split(" "),
                    e = {
                        description: "",
                        Xg: [f.$h, f.ci, f.ai].slice(),
                        name: "localforage",
                        size: 4980736,
                        Fa: "keyvaluepairs",
                        version: 1
                    },
                    l = function(a) {
                        var b = {},
                            d;
                        try {
                            var c = c || a.indexedDB || a.webkitIndexedDB || a.mozIndexedDB || a.Bn || a.msIndexedDB;
                            d = "undefined" != typeof a.openDatabase && a.navigator && a.navigator.userAgent && /Safari/.test(a.navigator.userAgent) && !/Chrome/.test(a.navigator.userAgent) ? !1 : c && "function" == typeof c.open && "undefined" != typeof a.IDBKeyRange
                        } catch (e) {
                            d = !1
                        }
                        b[f.$h] = !!d;
                        var k;
                        try {
                            k = a.openDatabase
                        } catch (l) {
                            k = !1
                        }
                        b[f.ci] = !!k;
                        var g;
                        try {
                            g = a.localStorage && "setItem" in a.localStorage && a.localStorage.setItem
                        } catch (m) {
                            g = !1
                        }
                        return b[f.ai] = !!g, b
                    }(k),
                    q = Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a)
                    };
                return new(function() {
                    function k(a) {
                        if (!(this instanceof k)) throw new TypeError("Cannot call a class as a function");
                        this.$h = f.$h;
                        this.ai = f.ai;
                        this.ci = f.ci;
                        this.Wm = h({}, e);
                        this.Zf = h({}, this.Wm, a);
                        this.xq = this.Td = null;
                        this.qf = !1;
                        this.Ca = null;
                        this.zq();
                        this.ut(this.Zf.Xg)
                    }
                    return k.prototype.Uq = function(a) {
                        if ("object" == typeof a) {
                            if (this.qf) return Error("Can't call config() after localforage has been used.");
                            for (var b in a) "storeName" === b && (a[b] = a[b].replace(/\W/g, "_")), this.Zf[b] = a[b];
                            return "driver" in a && a.Xg && this.ut(this.Zf.Xg), !0
                        }
                        return "string" == typeof a ? this.Zf[a] : this.Zf
                    }, k.prototype.Xg = function() {
                        return this.di || null
                    }, k.prototype.rr = function(a, f, e) {
                        var k = this,
                            l = function() {
                                if (b(a)) switch (a) {
                                    case k.$h:
                                        return new Promise(function(a) {
                                            a(c(1))
                                        });
                                    case k.ai:
                                        return new Promise(function(a) {
                                            a(c(2))
                                        });
                                    case k.ci:
                                        return new Promise(function(a) {
                                            a(c(4))
                                        })
                                } else if (d[a]) return Promise.resolve(d[a]);
                                return Promise.reject(Error("Driver not found."))
                            }();
                        return l.then(f, e), l
                    }, k.prototype.ready = function(a) {
                        var b = this,
                            d = b.Td.then(function() {
                                return null === b.qf && (b.qf = b.xq()), b.qf
                            });
                        return d.then(a, a), d
                    }, k.prototype.ut = function(a, b, d) {
                        function c() {
                            e.Zf.Xg = e.Xg()
                        }

                        function f(a) {
                            return function() {
                                function b() {
                                    for (; d < a.length;) {
                                        var f = a[d];
                                        return d++, e.Ca = null, e.qf = null, e.rr(f).then(function(a) {
                                            return e.Tv(a), c(), e.qf = e.Ym(e.Zf), e.qf
                                        })["catch"](b)
                                    }
                                    c();
                                    return e.Td = Promise.reject(Error("No available storage method found.")), e.Td
                                }
                                var d = 0;
                                return b()
                            }
                        }
                        var e = this;
                        q(a) || (a = [a]);
                        var k = this.Uv(a);
                        return this.Td = (null !== this.Td ? this.Td["catch"](function() {
                            return Promise.resolve()
                        }) : Promise.resolve()).then(function() {
                            var a = k[0];
                            return e.Ca = null, e.qf = null, e.rr(a).then(function(a) {
                                e.di = a.di;
                                c();
                                e.zq();
                                e.xq = f(k)
                            })
                        })["catch"](function() {
                            c();
                            return e.Td = Promise.reject(Error("No available storage method found.")), e.Td
                        }), this.Td.then(b, d), this.Td
                    }, k.prototype.supports = function(a) {
                        return !!l[a]
                    }, k.prototype.Tv = function(a) {
                        h(this, a)
                    }, k.prototype.Uv = function(a) {
                        for (var b = [], d = 0, c = a.length; c > d; d++) {
                            var f = a[d];
                            this.supports(f) && b.push(f)
                        }
                        return b
                    }, k.prototype.zq = function() {
                        for (var b = 0; b < a.length; b++) g(this, a[b])
                    }, k.prototype.tn = function(a) {
                        return new k(a)
                    }, k
                }())
            }("undefined" != typeof window ? window : self);
            g["default"] = k;
            h.ae = g["default"]
        }, function(h, g) {
            g.ik = !0;
            g["default"] = function(c) {
                function k(a, b) {
                    a = a || [];
                    b = b || {};
                    try {
                        return new Blob(a, b)
                    } catch (d) {
                        if ("TypeError" !== d.name) throw d;
                        for (var f = new(c.BlobBuilder || c.uf || c.wn || c.WebKitBlobBuilder), e = 0; e < a.length; e += 1) f.append(a[e]);
                        return f.getBlob(b.type)
                    }
                }

                function g(a) {
                    return new Promise(function(b, d) {
                        var c = new XMLHttpRequest;
                        c.open("GET", a);
                        c.withCredentials = !0;
                        c.responseType = "arraybuffer";
                        c.onreadystatechange = function() {
                            return 4 === c.readyState ? 200 === c.status ? b({
                                response: c.response,
                                type: c.getResponseHeader("Content-Type")
                            }) : void d({
                                status: c.status,
                                response: c.response
                            }) : void 0
                        };
                        c.send()
                    })
                }

                function h(a) {
                    return (new Promise(function(b, d) {
                        var c = k([""], {
                                type: "image/png"
                            }),
                            f = a.transaction([G], "readwrite");
                        f.objectStore(G).put(c, "key");
                        f.oncomplete = function() {
                            var c = a.transaction([G], "readwrite").objectStore(G).get("key");
                            c.onerror = d;
                            c.onsuccess = function(a) {
                                var d = URL.createObjectURL(a.target.result);
                                g(d).then(function(a) {
                                    b(!(!a || "image/png" !== a.type))
                                }, function() {
                                    b(!1)
                                }).then(function() {
                                    URL.revokeObjectURL(d)
                                })
                            }
                        };
                        f.onerror = f.onabort = d
                    }))["catch"](function() {
                        return !1
                    })
                }

                function p(a) {
                    return "boolean" == typeof u ? Promise.resolve(u) : h(a).then(function(a) {
                        return u = a
                    })
                }

                function b(a) {
                    return new Promise(function(b, d) {
                        var c = new FileReader;
                        c.onerror = d;
                        c.onloadend = function(d) {
                            b({
                                wq: !0,
                                data: btoa(d.target.result || ""),
                                type: a.type
                            })
                        };
                        c.readAsBinaryString(a)
                    })
                }

                function d(a) {
                    for (var b = atob(a.data), d = b.length, c = new ArrayBuffer(d), f = new Uint8Array(c), e = 0; d > e; e++) f[e] = b.charCodeAt(e);
                    return k([c], {
                        type: a.type
                    })
                }

                function f(a) {
                    var b = this,
                        d = b.Xm().then(function() {
                            var a = v[b.Ca.name];
                            return a && a.Wg ? a.Wg : void 0
                        });
                    return d.then(a, a), d
                }

                function a(a) {
                    a = v[a.name];
                    var b = {};
                    b.promise = new Promise(function(a) {
                        b.resolve = a
                    });
                    a.Xq.push(b);
                    a.Wg ? a.Wg = a.Wg.then(function() {
                        return b.promise
                    }) : a.Wg = b.promise
                }

                function e(a) {
                    function b() {
                        return Promise.resolve()
                    }
                    var d = this,
                        e = {
                            db: null
                        };
                    if (a)
                        for (var k in a) e[k] = a[k];
                    v || (v = {});
                    var g = v[e.name];
                    g || (g = {
                        Yk: [],
                        db: null,
                        Wg: null,
                        Xq: []
                    }, v[e.name] = g);
                    g.Yk.push(d);
                    d.Xm || (d.Xm = d.ready, d.ready = f);
                    a = [];
                    for (k = 0; k < g.Yk.length; k++) {
                        var m = g.Yk[k];
                        m !== d && a.push(m.Xm()["catch"](b))
                    }
                    var h = g.Yk.slice(0);
                    return Promise.all(a).then(function() {
                        return e.db = g.db, l(e, !1)
                    }).then(function(a) {
                        e.db = a;
                        var b;
                        b = d.Wm.version;
                        if (e.db) {
                            var f = !e.db.objectStoreNames.contains(e.Fa),
                                k = e.version > e.db.version;
                            (e.version < e.db.version && (e.version !== b && c.console.warn('The database "' + e.name + "\" can't be downgraded from version " + e.db.version + " to version " + e.version + "."), e.version = e.db.version), k || f) ? (f && (b = e.db.version + 1, b > e.version && (e.version = b)), b = !0) : b = !1
                        } else b = !0;
                        return b ? l(e, !0) : a
                    }).then(function(a) {
                        e.db = g.db = a;
                        d.Ca = e;
                        for (a = 0; a < h.length; a++) {
                            var b = h[a];
                            b !== d && (b.Ca.db = e.db, b.Ca.version = e.version)
                        }
                    })
                }

                function l(b, d) {
                    return new Promise(function(f, e) {
                        if (b.db) {
                            if (!d) return f(b.db);
                            a(b);
                            b.db.close()
                        }
                        var k = [b.name];
                        d && k.push(b.version);
                        var l = L.open.apply(L, k);
                        d && (l.onupgradeneeded = function(a) {
                            var d = l.result;
                            try {
                                d.createObjectStore(b.Fa), 1 >= a.oldVersion && d.createObjectStore(G)
                            } catch (f) {
                                if ("ConstraintError" !== f.name) throw f;
                                c.console.warn('The database "' + b.name + '" has been upgraded from version ' + a.oldVersion + " to version " + a.newVersion + ', but the storage "' + b.Fa + '" already exists.')
                            }
                        });
                        l.onerror = function() {
                            e(l.error)
                        };
                        l.onsuccess = function() {
                            f(l.result);
                            var a = v[b.name].Xq.pop();
                            a && a.resolve()
                        }
                    })
                }

                function q(a, b) {
                    var f = this;
                    "string" != typeof a && (c.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var e = new Promise(function(b, c) {
                        f.ready().then(function() {
                            var e = f.Ca,
                                k = e.db.transaction(e.Fa, "readonly").objectStore(e.Fa).get(a);
                            k.onsuccess = function() {
                                var a = k.result;
                                void 0 === a && (a = null);
                                a && a.wq && (a = d(a));
                                b(a)
                            };
                            k.onerror = function() {
                                c(k.error)
                            }
                        })["catch"](c)
                    });
                    return B(e, b), e
                }

                function w(a, b) {
                    var c = this,
                        f = new Promise(function(b, f) {
                            c.ready().then(function() {
                                var e = c.Ca,
                                    k = e.db.transaction(e.Fa, "readonly").objectStore(e.Fa).openCursor(),
                                    l = 1;
                                k.onsuccess = function() {
                                    var c = k.result;
                                    if (c) {
                                        var f = c.value;
                                        f && f.wq && (f = d(f));
                                        f = a(f, c.key, l++);
                                        void 0 !== f ? b(f) : c["continue"]()
                                    } else b()
                                };
                                k.onerror = function() {
                                    f(k.error)
                                }
                            })["catch"](f)
                        });
                    return B(f, b), f
                }

                function N(a, d, f) {
                    var e = this;
                    "string" != typeof a && (c.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var k = new Promise(function(c, f) {
                        var k;
                        e.ready().then(function() {
                            return k = e.Ca, d instanceof Blob ? p(k.db).then(function(a) {
                                return a ? d : b(d)
                            }) : d
                        }).then(function(b) {
                            var d = k.db.transaction(k.Fa, "readwrite"),
                                e = d.objectStore(k.Fa);
                            null === b && (b = void 0);
                            d.oncomplete = function() {
                                void 0 === b && (b = null);
                                c(b)
                            };
                            d.onabort = d.onerror = function() {
                                f(l.error ? l.error : l.transaction.error)
                            };
                            var l = e.put(b, a)
                        })["catch"](f)
                    });
                    return B(k, f), k
                }

                function C(a, b) {
                    var d = this;
                    "string" != typeof a && (c.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var f = new Promise(function(b, c) {
                        d.ready().then(function() {
                            var f = d.Ca,
                                e = f.db.transaction(f.Fa, "readwrite"),
                                k = e.objectStore(f.Fa)["delete"](a);
                            e.oncomplete = function() {
                                b()
                            };
                            e.onerror = function() {
                                c(k.error)
                            };
                            e.onabort = function() {
                                c(k.error ? k.error : k.transaction.error)
                            }
                        })["catch"](c)
                    });
                    return B(f, b), f
                }

                function n(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca,
                                    f = c.db.transaction(c.Fa, "readwrite"),
                                    e = f.objectStore(c.Fa).clear();
                                f.oncomplete = function() {
                                    a()
                                };
                                f.onabort = f.onerror = function() {
                                    d(e.error ? e.error : e.transaction.error)
                                }
                            })["catch"](d)
                        });
                    return B(d, a), d
                }

                function t(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca,
                                    f = c.db.transaction(c.Fa, "readonly").objectStore(c.Fa).count();
                                f.onsuccess = function() {
                                    a(f.result)
                                };
                                f.onerror = function() {
                                    d(f.error)
                                }
                            })["catch"](d)
                        });
                    return B(d, a), d
                }

                function F(a, b) {
                    var d = this,
                        c = new Promise(function(b, c) {
                            return 0 > a ? void b(null) : void d.ready().then(function() {
                                var f = d.Ca,
                                    e = !1,
                                    k = f.db.transaction(f.Fa, "readonly").objectStore(f.Fa).openCursor();
                                k.onsuccess = function() {
                                    var d = k.result;
                                    return d ? void(0 === a ? b(d.key) : e ? b(d.key) : (e = !0, d.advance(a))) : void b(null)
                                };
                                k.onerror = function() {
                                    c(k.error)
                                }
                            })["catch"](c)
                        });
                    return B(c, b), c
                }

                function x(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca,
                                    f = c.db.transaction(c.Fa, "readonly").objectStore(c.Fa).openCursor(),
                                    e = [];
                                f.onsuccess = function() {
                                    var b = f.result;
                                    return b ? (e.push(b.key), void b["continue"]()) : void a(e)
                                };
                                f.onerror = function() {
                                    d(f.error)
                                }
                            })["catch"](d)
                        });
                    return B(d, a), d
                }

                function B(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var L = L || c.indexedDB || c.webkitIndexedDB || c.mozIndexedDB || c.Bn || c.msIndexedDB;
                if (L) {
                    var u, v, G = "local-forage-detect-blob-support";
                    return {
                        di: "asyncStorage",
                        Ym: e,
                        Sr: w,
                        getItem: q,
                        setItem: N,
                        removeItem: C,
                        clear: n,
                        length: t,
                        key: F,
                        keys: x
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.ae = g["default"]
        }, function(h, g, c) {
            g.ik = !0;
            g["default"] = function(k) {
                function g(b, d) {
                    d && b.then(function(b) {
                        d(null, b)
                    }, function(b) {
                        d(b)
                    })
                }
                var h = null;
                try {
                    if (!(k.localStorage && "setItem" in k.localStorage)) return;
                    h = k.localStorage
                } catch (p) {
                    return
                }
                return {
                    di: "localStorageWrapper",
                    Ym: function(b) {
                        var d = {};
                        if (b)
                            for (var f in b) d[f] = b[f];
                        return d.he = d.name + "/", d.Fa !== this.Wm.Fa && (d.he += d.Fa + "/"), this.Ca = d, (new Promise(function(a) {
                            a(c(3))
                        })).then(function(a) {
                            return d.Jg = a, Promise.resolve()
                        })
                    },
                    Sr: function(b, d) {
                        var c = this,
                            a = c.ready().then(function() {
                                for (var a = c.Ca, d = a.he, k = d.length, g = h.length, m = 1, p = 0; g > p; p++) {
                                    var n = h.key(p);
                                    if (0 === n.indexOf(d)) {
                                        var t = h.getItem(n);
                                        if (t && (t = a.Jg.Nk(t)), t = b(t, n.substring(k), m++), void 0 !== t) return t
                                    }
                                }
                            });
                        return g(a, d), a
                    },
                    getItem: function(b, d) {
                        var c = this;
                        "string" != typeof b && (k.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = c.ready().then(function() {
                            var a = c.Ca,
                                d = h.getItem(a.he + b);
                            return d && (d = a.Jg.Nk(d)), d
                        });
                        return g(a, d), a
                    },
                    setItem: function(b, d, c) {
                        var a = this;
                        "string" != typeof b && (k.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var e = a.ready().then(function() {
                            void 0 === d && (d = null);
                            var c = d;
                            return new Promise(function(f, e) {
                                var k = a.Ca;
                                k.Jg.serialize(d, function(a, d) {
                                    if (d) e(d);
                                    else try {
                                        h.setItem(k.he +
                                            b, a), f(c)
                                    } catch (g) {
                                        "QuotaExceededError" !== g.name && "NS_ERROR_DOM_QUOTA_REACHED" !== g.name || e(g), e(g)
                                    }
                                })
                            })
                        });
                        return g(e, c), e
                    },
                    removeItem: function(b, d) {
                        var c = this;
                        "string" != typeof b && (k.console.warn(b + " used as a key, but it is not a string."), b = String(b));
                        var a = c.ready().then(function() {
                            h.removeItem(c.Ca.he + b)
                        });
                        return g(a, d), a
                    },
                    clear: function(b) {
                        var d = this,
                            c = d.ready().then(function() {
                                for (var a = d.Ca.he, b = h.length - 1; 0 <= b; b--) {
                                    var c = h.key(b);
                                    0 === c.indexOf(a) && h.removeItem(c)
                                }
                            });
                        return g(c, b), c
                    },
                    length: function(b) {
                        var d = this.keys().then(function(b) {
                            return b.length
                        });
                        return g(d, b), d
                    },
                    key: function(b, d) {
                        var c = this,
                            a = c.ready().then(function() {
                                var a, d = c.Ca;
                                try {
                                    a = h.key(b)
                                } catch (k) {
                                    a = null
                                }
                                return a && (a = a.substring(d.he.length)), a
                            });
                        return g(a, d), a
                    },
                    keys: function(b) {
                        var d = this,
                            c = d.ready().then(function() {
                                for (var a = d.Ca, b = h.length, c = [], f = 0; b > f; f++) 0 === h.key(f).indexOf(a.he) && c.push(h.key(f).substring(a.he.length));
                                return c
                            });
                        return g(c, b), c
                    }
                }
            }("undefined" != typeof window ? window : self);
            h.ae = g["default"]
        }, function(h, g) {
            g.ik = !0;
            g["default"] = function(c) {
                function k(b) {
                    var d, c, a, e, k;
                    d = .75 * b.length;
                    var g = b.length,
                        m = 0;
                    "=" === b[b.length - 1] && (d--, "=" === b[b.length - 2] && d--);
                    var p = new ArrayBuffer(d),
                        C = new Uint8Array(p);
                    for (d = 0; g > d; d += 4) c = h.indexOf(b[d]), a = h.indexOf(b[d + 1]), e = h.indexOf(b[d + 2]), k = h.indexOf(b[d + 3]), C[m++] = c << 2 | a >> 4, C[m++] = (15 & a) << 4 | e >> 2, C[m++] = (3 & e) << 6 | 63 & k;
                    return p
                }

                function g(b) {
                    var d = new Uint8Array(b),
                        c = "";
                    for (b = 0; b < d.length; b += 3) c += h[d[b] >> 2], c += h[(3 & d[b]) << 4 | d[b + 1] >> 4], c += h[(15 & d[b + 1]) << 2 | d[b + 2] >> 6], c += h[63 & d[b + 2]];
                    return 2 === d.length % 3 ? c = c.substring(0, c.length - 1) + "=" : 1 === d.length % 3 && (c = c.substring(0, c.length - 2) + "=="), c
                }
                var h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    p = /^~~local_forage_type~([^~]+)~/;
                return {
                    serialize: function(b, d) {
                        var c = "";
                        if (b && (c = b.toString()), b && ("[object ArrayBuffer]" === b.toString() || b.buffer && "[object ArrayBuffer]" === b.buffer.toString())) {
                            var a, e = "__lfsc__:";
                            b instanceof ArrayBuffer ? (a = b, e += "arbf") : (a = b.buffer, "[object Int8Array]" === c ? e += "si08" : "[object Uint8Array]" === c ? e += "ui08" : "[object Uint8ClampedArray]" === c ? e += "uic8" : "[object Int16Array]" === c ? e += "si16" : "[object Uint16Array]" === c ? e += "ur16" : "[object Int32Array]" === c ? e += "si32" : "[object Uint32Array]" === c ? e += "ui32" : "[object Float32Array]" === c ? e += "fl32" : "[object Float64Array]" === c ? e += "fl64" : d(Error("Failed to get type for BinaryArray")));
                            d(e + g(a))
                        } else if ("[object Blob]" === c) c = new FileReader, c.onload = function() {
                            var a = "~~local_forage_type~" + b.type + "~" + g(this.result);
                            d("__lfsc__:blob" + a)
                        }, c.readAsArrayBuffer(b);
                        else try {
                            d(JSON.stringify(b))
                        } catch (k) {
                            console.error("Couldn't convert value into a JSON string: ", b), d(null, k)
                        }
                    },
                    Nk: function(b) {
                        if ("__lfsc__:" !== b.substring(0, 9)) return JSON.parse(b);
                        var d, f = b.substring(13);
                        b = b.substring(9, 13);
                        if ("blob" === b && p.test(f)) {
                            var a = f.match(p);
                            d = a[1];
                            f = f.substring(a[0].length)
                        }
                        f = k(f);
                        switch (b) {
                            case "arbf":
                                return f;
                            case "blob":
                                var e;
                                f = [f];
                                d = {
                                    type: d
                                };
                                f = f || [];
                                d = d || {};
                                try {
                                    e = new Blob(f, d)
                                } catch (l) {
                                    if ("TypeError" !== l.name) throw l;
                                    e = new(c.BlobBuilder || c.uf || c.wn || c.WebKitBlobBuilder);
                                    for (b = 0; b < f.length; b += 1) e.append(f[b]);
                                    e = e.getBlob(d.type)
                                }
                                return e;
                            case "si08":
                                return new Int8Array(f);
                            case "ui08":
                                return new Uint8Array(f);
                            case "uic8":
                                return new Uint8ClampedArray(f);
                            case "si16":
                                return new Int16Array(f);
                            case "ur16":
                                return new Uint16Array(f);
                            case "si32":
                                return new Int32Array(f);
                            case "ui32":
                                return new Uint32Array(f);
                            case "fl32":
                                return new Float32Array(f);
                            case "fl64":
                                return new Float64Array(f);
                            default:
                                throw Error("Unkown type: " + b);
                        }
                    },
                    RB: k,
                    vB: g
                }
            }("undefined" != typeof window ? window : self);
            h.ae = g["default"]
        }, function(h, g, c) {
            g.ik = !0;
            g["default"] = function(k) {
                function g(a) {
                    var b = this,
                        d = {
                            db: null
                        };
                    if (a)
                        for (var f in a) d[f] = "string" != typeof a[f] ? a[f].toString() : a[f];
                    var e = new Promise(function(a, c) {
                        try {
                            d.db = w(d.name, String(d.version), d.description, d.size)
                        } catch (f) {
                            return c(f)
                        }
                        d.db.transaction(function(f) {
                            f.executeSql("CREATE TABLE IF NOT EXISTS " + d.Fa + " (id INTEGER PRIMARY KEY, key unique, value)", [], function() {
                                b.Ca = d;
                                a()
                            }, function(a, b) {
                                c(b)
                            })
                        })
                    });
                    return (new Promise(function(a) {
                        a(c(3))
                    })).then(function(a) {
                        return d.Jg = a, e
                    })
                }

                function h(a, b) {
                    var d = this;
                    "string" != typeof a && (k.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var c = new Promise(function(b, c) {
                        d.ready().then(function() {
                            var f = d.Ca;
                            f.db.transaction(function(d) {
                                d.executeSql("SELECT * FROM " + f.Fa + " WHERE key = ? LIMIT 1", [a], function(a, d) {
                                    var c = d.rows.length ? d.rows.item(0).value : null;
                                    c && (c = f.Jg.Nk(c));
                                    b(c)
                                }, function(a, b) {
                                    c(b)
                                })
                            })
                        })["catch"](c)
                    });
                    return q(c, b), c
                }

                function p(a, b) {
                    var d = this,
                        c = new Promise(function(b, c) {
                            d.ready().then(function() {
                                var f = d.Ca;
                                f.db.transaction(function(d) {
                                    d.executeSql("SELECT * FROM " + f.Fa, [], function(d, c) {
                                        for (var e = c.rows, k = e.length, l = 0; k > l; l++) {
                                            var g = e.item(l),
                                                h = g.value;
                                            if (h && (h = f.Jg.Nk(h)), h = a(h, g.key, l + 1), void 0 !== h) return void b(h)
                                        }
                                        b()
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return q(c, b), c
                }

                function b(a, b, d) {
                    var c = this;
                    "string" != typeof a && (k.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var f = new Promise(function(d, f) {
                        c.ready().then(function() {
                            void 0 === b && (b = null);
                            var e = b,
                                k = c.Ca;
                            k.Jg.serialize(b, function(b, c) {
                                c ? f(c) : k.db.transaction(function(c) {
                                    c.executeSql("INSERT OR REPLACE INTO " + k.Fa +
                                        " (key, value) VALUES (?, ?)", [a, b],
                                        function() {
                                            d(e)
                                        },
                                        function(a, b) {
                                            f(b)
                                        })
                                }, function(a) {
                                    a.code === a.QUOTA_ERR && f(a)
                                })
                            })
                        })["catch"](f)
                    });
                    return q(f, d), f
                }

                function d(a, b) {
                    var d = this;
                    "string" != typeof a && (k.console.warn(a + " used as a key, but it is not a string."), a = String(a));
                    var c = new Promise(function(b, c) {
                        d.ready().then(function() {
                            var f = d.Ca;
                            f.db.transaction(function(d) {
                                d.executeSql("DELETE FROM " + f.Fa + " WHERE key = ?", [a], function() {
                                    b()
                                }, function(a, b) {
                                    c(b)
                                })
                            })
                        })["catch"](c)
                    });
                    return q(c, b), c
                }

                function f(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca;
                                c.db.transaction(function(b) {
                                    b.executeSql("DELETE FROM " + c.Fa, [], function() {
                                        a()
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return q(d, a), d
                }

                function a(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca;
                                c.db.transaction(function(b) {
                                    b.executeSql("SELECT COUNT(key) as c FROM " + c.Fa, [], function(b, d) {
                                        var c = d.rows.item(0).ii;
                                        a(c)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return q(d, a), d
                }

                function e(a, b) {
                    var d = this,
                        c = new Promise(function(b, c) {
                            d.ready().then(function() {
                                var f = d.Ca;
                                f.db.transaction(function(d) {
                                    d.executeSql("SELECT key FROM " + f.Fa + " WHERE id = ? LIMIT 1", [a + 1], function(a, d) {
                                        var c = d.rows.length ? d.rows.item(0).key : null;
                                        b(c)
                                    }, function(a, b) {
                                        c(b)
                                    })
                                })
                            })["catch"](c)
                        });
                    return q(c, b), c
                }

                function l(a) {
                    var b = this,
                        d = new Promise(function(a, d) {
                            b.ready().then(function() {
                                var c = b.Ca;
                                c.db.transaction(function(b) {
                                    b.executeSql("SELECT key FROM " + c.Fa, [], function(b, d) {
                                        for (var c = [], f = 0; f < d.rows.length; f++) c.push(d.rows.item(f).key);
                                        a(c)
                                    }, function(a, b) {
                                        d(b)
                                    })
                                })
                            })["catch"](d)
                        });
                    return q(d, a), d
                }

                function q(a, b) {
                    b && a.then(function(a) {
                        b(null, a)
                    }, function(a) {
                        b(a)
                    })
                }
                var w = k.openDatabase;
                if (w) return {
                    di: "webSQLStorage",
                    Ym: g,
                    Sr: p,
                    getItem: h,
                    setItem: b,
                    removeItem: d,
                    clear: f,
                    length: a,
                    key: e,
                    keys: l
                }
            }("undefined" != typeof window ? window : self);
            h.ae = g["default"]
        }])
    };
    "object" == typeof exports && "object" == typeof module ? module.ae = zc() : "function" == typeof define && define.uB ? define([], zc) : "object" == typeof exports ? exports.localforage = zc() : this.localforage = zc()
} catch (Ac) {
    yc = !0
}

function Bc(h) {
    this.b = h
}
(function() {
    function h() {}

    function g() {}

    function c() {}
    var k = "",
        m = "",
        r = "";
    "undefined" !== typeof window.is_scirra_arcade && (r = "sa" + window.scirra_arcade_id + "_");
    var p = Bc.prototype;
    p.P = function(b) {
        this.ra = b;
        this.b = b.b
    };
    p.P.prototype.H = function() {};
    p.L = function(b) {
        this.type = b;
        this.b = b.b
    };
    var b = p.L.prototype;
    b.H = function() {
        this.cp = 0
    };
    b.Ue = function() {};
    b.nb = function() {
        return {}
    };
    b.Gb = function() {};
    h.prototype.bv = function(b) {
        return k === b
    };
    h.prototype.Pu = function() {
        return !0
    };
    h.prototype.av = function(b) {
        return k === b
    };
    h.prototype.ek = function() {
        return !0
    };
    h.prototype.bq = function(b) {
        return k === b
    };
    h.prototype.cq = function(b) {
        return k === b
    };
    h.prototype.Mu = function() {
        return !0
    };
    p.g = new h;
    g.prototype.Gv = function(b, c) {
        if (yc) this.b.trigger(Bc.prototype.g.ek, this);
        else {
            var a = r + b;
            this.cp++;
            var e = this;
            localforage.setItem(a, c, function(a, c) {
                e.cp--;
                a ? e.b.trigger(Bc.prototype.g.ek, e) : (k = b, m = c, e.b.trigger(Bc.prototype.g.Pu, e), e.b.trigger(Bc.prototype.g.bv, e), m = k = "");
                0 === e.cp && e.b.trigger(Bc.prototype.g.Mu, e)
            })
        }
    };
    g.prototype.ju = function(b) {
        if (yc) this.b.trigger(Bc.prototype.g.ek, this);
        else {
            var c = this;
            localforage.getItem(r + b, function(a, e) {
                a ? c.b.trigger(Bc.prototype.g.ek, c) : (k = b, null === e ? (m = "", c.b.trigger(Bc.prototype.g.cq, c)) : (m = e, c.b.trigger(Bc.prototype.g.bq, c)), m = k = "")
            })
        }
    };
    p.A = new g;
    c.prototype.Gu = function(b) {
        b.lm(m)
    };
    p.S = new c
})();

function Cc(h) {
    this.b = h
}
(function() {
    function h(c, g, h, p, b, d, f, a, e, l) {
        c.save();
        c.fillStyle = g;
        g = b % h;
        var q = d % p;
        0 > g && (g += h);
        0 > q && (q += p);
        c.translate(g + e, q + l);
        c.fillRect(b - g - e, d - q - l, f, a);
        c.restore()
    }
    var g = Cc.prototype;
    g.P = function(c) {
        this.ra = c;
        this.b = c.b
    };
    var c = g.P.prototype;
    c.H = function() {
        this.J || (this.D = new Image, this.D.sn = this.um, this.b.Fm(this.D, this.Jj), this.Wj = this.Zj = this.Yj = this.Xj = this.Zh = this.F = this.Lq = this.Rt = this.it = this.Zr = this.In = null)
    };
    c.Dh = function() {
        this.J || (this.Wj = this.Zj = this.Yj = this.Xj = this.Zh = this.F = null)
    };
    c.kj = function() {
        this.J || !this.e.length || this.F || (this.F = this.b.u.Yc(this.D, !0, this.b.Ja, this.Vf))
    };
    c.Oj = function() {
        this.J || this.e.length || !this.b.u || (this.b.u.deleteTexture(this.F), this.b.u.deleteTexture(this.Zh), this.b.u.deleteTexture(this.Xj), this.b.u.deleteTexture(this.Yj), this.b.u.deleteTexture(this.Zj), this.b.u.deleteTexture(this.Wj), this.Wj = this.Zj = this.Yj = this.Xj = this.Zh = this.F = null)
    };
    c.pe = function(c, g, h, p) {
        var b = document.createElement("canvas");
        h = h - c;
        p = p - g;
        b.width = h;
        b.height = p;
        b.getContext("2d").drawImage(this.D, c, g, h, p, 0, 0, h, p);
        return b
    };
    c.sw = function(c, g, h, p) {
        var b = this.D.width,
            d = this.D.height,
            f = b - g,
            a = d - p;
        if (this.b.u) {
            if (!this.Zh) {
                var e = this.b.u,
                    l = this.b.Ja,
                    q = this.Vf;
                f > c && a > h && (this.Zh = e.Yc(this.pe(c, h, f, a), !0, l, q));
                0 < c && a > h && (this.Xj = e.Yc(this.pe(0, h, c, a), !0, l, q, "repeat-y"));
                0 < g && a > h && (this.Yj = e.Yc(this.pe(f, h, b, a), !0, l, q, "repeat-y"));
                0 < h && f > c && (this.Zj = e.Yc(this.pe(c, 0, f, h), !0, l, q, "repeat-x"));
                0 < p && f > c && (this.Wj = e.Yc(this.pe(c, a, f, d), !0, l, q, "repeat-x"))
            }
        } else this.In || (e = this.b.Sa, f > c && a > h && (this.In = e.createPattern(this.pe(c, h, f, a), "repeat")), 0 < c && a > h && (this.Zr = e.createPattern(this.pe(0, h, c, a), "repeat")), 0 < g && a > h && (this.it = e.createPattern(this.pe(f, h, b, a), "repeat")), 0 < h && f > c && (this.Rt = e.createPattern(this.pe(c, 0, f, h), "repeat")), 0 < p && f > c && (this.Lq = e.createPattern(this.pe(c, a, f, d), "repeat")))
    };
    g.L = function(c) {
        this.type = c;
        this.b = c.b
    };
    c = g.L.prototype;
    c.H = function() {
        this.Do = this.q[0];
        this.rp = this.q[1];
        this.Jp = this.q[2];
        this.hn = this.q[3];
        this.Qk = this.q[4];
        this.fill = this.q[5];
        this.visible = 0 === this.q[6];
        this.ot = 0 !== this.q[8];
        this.rc ? this.ud.set(0, 0, 0, 0) : this.ud = new xa(0, 0, 0, 0);
        this.b.u && !this.type.F && (this.type.F = this.b.u.Yc(this.type.D, !1, this.b.Ja, this.type.Vf));
        this.type.sw(this.Do, this.rp, this.Jp, this.hn)
    };
    c.Rc = function(c) {
        var g = this.type.D,
            r = this.Do,
            p = this.rp,
            b = this.Jp,
            d = this.hn,
            f = g.width,
            a = g.height,
            e = f - p,
            l = a - d;
        c.globalAlpha = this.opacity;
        c.save();
        var q = this.x,
            w = this.y,
            N = this.width,
            C = this.height;
        this.b.xc && (q = Math.round(q), w = Math.round(w));
        var n = -(this.gc * this.width),
            t = -(this.hc * this.height),
            F = n % f,
            x = t % a;
        0 > F && (F += f);
        0 > x && (x += a);
        c.translate(q + F, w + x);
        f = n - F;
        t -= x;
        x = this.ot ? 1 : 0;
        0 < r && 0 < b && c.drawImage(g, 0, 0, r + x, b + x, f, t, r + x, b + x);
        0 < p && 0 < b && c.drawImage(g, e - x, 0, p + x, b + x, f + N - p - x, t, p + x, b + x);
        0 < p && 0 < d && c.drawImage(g, e - x, l - x, p + x, d + x, f + N - p - x, t + C - d - x, p + x, d + x);
        0 < r && 0 < d && c.drawImage(g, 0, l - x, r + x, d + x, f, t + C - d - x, r + x, d + x);
        0 === this.Qk ? (x = 2 === this.fill ? 0 : x, 0 < r && l > b && h(c, this.type.Zr, r, l - b, f, t + b, r + x, C - b - d, 0, 0), 0 < p && l > b && h(c, this.type.it, p, l - b, f + N - p - x, t + b, p + x, C - b - d, x, 0), 0 < b && e > r && h(c, this.type.Rt, e - r, b, f + r, t, N - r - p, b + x, 0, 0), 0 < d && e > r && h(c, this.type.Lq, e - r, d, f + r, t + C - d - x, N - r - p, d + x, 0, x)) : 1 === this.Qk && (0 < r && l > b && 0 < C - b - d && c.drawImage(g, 0, b, r, l - b, f, t + b, r, C - b - d), 0 < p && l > b && 0 < C - b - d && c.drawImage(g, e, b, p, l - b, f + N - p, t + b, p, C - b - d), 0 < b && e > r && 0 < N - r - p && c.drawImage(g, r, 0, e - r, b, f + r, t, N - r - p, b), 0 < d && e > r && 0 < N - r - p && c.drawImage(g, r, l, e - r, d, f + r, t + C - d, N - r - p, d));
        l > b && e > r && (0 === this.fill ? h(c, this.type.In, e - r, l - b, f + r, t + b, N - r - p, C - b - d, 0, 0) : 1 === this.fill && 0 < N - r - p && 0 < C - b - d && c.drawImage(g, r, b, e - r, l - b, f + r, t + b, N - r - p, C - b - d));
        c.restore()
    };
    c.Ge = function(c, g, h, p, b, d, f, a, e, l) {
        c.kc(g);
        var q = this.ud;
        q.left = h / g.Gd;
        q.top = p / g.Fd;
        q.right = (h + b) / g.Gd;
        q.bottom = (p + d) / g.Fd;
        c.ad(f, a, f + e, a, f + e, a + l, f, a + l, q)
    };
    c.Mj = function(c, g, h, p, b, d, f, a) {
        c.kc(g);
        var e = this.ud;
        e.left = -f / g.Gd;
        e.top = -a / g.Fd;
        e.right = (b - f) / g.Gd;
        e.bottom = (d - a) / g.Fd;
        c.ad(h, p, h + b, p, h + b, p + d, h, p + d, e)
    };
    c.Ef = function(c) {
        this.cc(c)
    };
    c.cc = function(c) {
        var g = this.Do,
            h = this.rp,
            p = this.Jp,
            b = this.hn,
            d = this.type.D.width - h,
            f = this.type.D.height - b;
        c.$e(this.opacity);
        var a = this.Qb,
            e = a.Na,
            a = a.Oa,
            l = this.width,
            q = this.height;
        this.b.xc && (e = Math.round(e), a = Math.round(a));
        var w = this.ot ? 1 : 0;
        0 < g && 0 < p && this.Ge(c, this.type.F, 0, 0, g + w, p + w, e, a, g + w, p + w);
        0 < h && 0 < p && this.Ge(c, this.type.F, d - w, 0, h + w, p + w, e + l - h - w, a, h + w, p + w);
        0 < h && 0 < b && this.Ge(c, this.type.F, d - w, f - w, h + w, b + w, e + l - h - w, a + q - b - w, h + w, b + w);
        0 < g && 0 < b && this.Ge(c, this.type.F, 0, f - w, g + w, b + w, e, a + q - b - w, g + w, b + w);
        0 === this.Qk ? (w = 2 === this.fill ? 0 : w, 0 < g && f > p && this.Mj(c, this.type.Xj, e, a + p, g + w, q - p - b, 0, 0), 0 < h && f > p && this.Mj(c, this.type.Yj, e + l - h - w, a + p, h + w, q - p - b, w, 0), 0 < p && d > g && this.Mj(c, this.type.Zj, e + g, a, l - g - h, p + w, 0, 0), 0 < b && d > g && this.Mj(c, this.type.Wj, e + g, a + q - b - w, l - g - h, b + w, 0, w)) : 1 === this.Qk && (0 < g && f > p && this.Ge(c, this.type.F, 0, p, g, f - p, e, a + p, g, q - p - b), 0 < h && f > p && this.Ge(c, this.type.F, d, p, h, f - p, e + l - h, a + p, h, q - p - b), 0 < p && d > g && this.Ge(c, this.type.F, g, 0, d - g, p, e + g, a, l - g - h, p), 0 < b && d > g && this.Ge(c, this.type.F, g, f, d - g, b, e + g, a + q - b, l - g - h, b));
        f > p && d > g && (0 === this.fill ? this.Mj(c, this.type.Zh, e + g, a + p, l - g - h, q - p - b, 0, 0) : 1 === this.fill && this.Ge(c, this.type.F, g, p, d - g, f - p, e + g, a + p, l - g - h, q - p - b))
    };
    g.g = new function() {};
    g.A = new function() {};
    g.S = new function() {}
})();

function X(h) {
    this.b = h
}
(function() {
    function h() {
        if (0 === this.xn.length) {
            var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height;
            var b = a.getContext("2d");
            this.Nh ? b.drawImage(this.D, this.Bh, this.Ch, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.D, 0, 0, this.width, this.height);
            this.xn = a.toDataURL("image/png")
        }
        return this.xn
    }

    function g() {}

    function c(a) {
        a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        q.push(a)
    }

    function k(a, b) {
        return a < b ? "" + a + "," + b : "" + b + "," + a
    }

    function m(a, b, d, c) {
        b = b.uid;
        d = d.uid;
        var f = k(b, d);
        if (a.hasOwnProperty(f)) a[f][2] = c;
        else {
            var e = q.length ? q.pop() : [0, 0, 0];
            e[0] = b;
            e[1] = d;
            e[2] = c;
            a[f] = e
        }
    }

    function r(a, b, d) {
        b = k(b.uid, d.uid);
        a.hasOwnProperty(b) && (c(a[b]), delete a[b])
    }

    function p(a, b, d) {
        b = k(b.uid, d.uid);
        if (a.hasOwnProperty(b)) return w = a[b][2], !0;
        w = -2;
        return !1
    }

    function b() {}

    function d() {}
    var f = X.prototype;
    f.P = function(a) {
        this.ra = a;
        this.b = a.b
    };
    var a = f.P.prototype;
    a.H = function() {
        if (!this.J) {
            var a, b, d, c, f, e, k, g, l;
            this.Bd = [];
            this.Fi = !1;
            a = 0;
            for (b = this.Ec.length; a < b; a++) {
                f = this.Ec[a];
                k = {};
                k.name = f[0];
                k.speed = f[1];
                k.loop = f[2];
                k.op = f[3];
                k.qp = f[4];
                k.Xe = f[5];
                k.ka = f[6];
                k.frames = [];
                d = 0;
                for (c = f[7].length; d < c; d++) e = f[7][d], g = {}, g.Jj = e[0], g.um = e[1], g.Bh = e[2], g.Ch = e[3], g.width = e[4], g.height = e[5], g.duration = e[6], g.gc = e[7], g.hc = e[8], g.eo = e[9], g.Sl = e[10], g.Zs = e[11], g.Nh = 0 !== g.width, g.xn = "", g.AB = h, l = {
                    left: 0,
                    top: 0,
                    right: 1,
                    bottom: 1
                }, g.yp = l, g.F = null, (l = this.b.Ix(e[0])) ? g.D = l : (g.D = new Image, g.D.pw = e[0], g.D.sn = e[1], g.D.hw = null, this.b.Fm(g.D, e[0])), k.frames.push(g), this.Bd.push(g);
                this.Ec[a] = k
            }
        }
    };
    a.$t = function() {
        var a, b, d;
        a = 0;
        for (b = this.e.length; a < b; a++) d = this.e[a], d.Hk = d.Ta.F
    };
    a.Dh = function() {
        if (!this.J) {
            var a, b, d;
            a = 0;
            for (b = this.Bd.length; a < b; ++a) d = this.Bd[a], d.D.hw = null, d.F = null;
            this.Fi = !1;
            this.$t()
        }
    };
    a.kj = function() {
        if (!this.J && this.e.length) {
            var a, b, d;
            a = 0;
            for (b = this.Bd.length; a < b; ++a) d = this.Bd[a], d.F = this.b.u.Yc(d.D, !1, this.b.Ja, d.Zs);
            this.$t()
        }
    };
    a.Fo = function() {
        if (!this.J && !this.Fi && this.b.u) {
            var a, b, d;
            a = 0;
            for (b = this.Bd.length; a < b; ++a) d = this.Bd[a], d.F = this.b.u.Yc(d.D, !1, this.b.Ja, d.Zs);
            this.Fi = !0
        }
    };
    a.Oj = function() {
        if (!this.J && !this.e.length && this.Fi) {
            var a, b, d;
            a = 0;
            for (b = this.Bd.length; a < b; ++a) d = this.Bd[a], this.b.u.deleteTexture(d.F), d.F = null;
            this.Fi = !1
        }
    };
    var e = [];
    a.Wl = function(a) {
        var b, d, c;
        A(e);
        b = 0;
        for (d = this.Bd.length; b < d; ++b) c = this.Bd[b].D, -1 === e.indexOf(c) && (a.drawImage(c, 0, 0), e.push(c))
    };
    f.L = function(a) {
        this.type = a;
        this.b = a.b;
        a = this.type.Ec[0].frames[0].Sl;
        this.rc ? this.Da.Aj(a) : this.Da = new eb(a)
    };
    var l = f.L.prototype;
    l.H = function() {
        this.visible = 0 === this.q[0];
        this.fo = this.ro = !1;
        this.Be = 0 !== this.q[3];
        this.Pa = this.nr(this.q[1]) || this.type.Ec[0];
        this.K = this.q[2];
        0 > this.K && (this.K = 0);
        this.K >= this.Pa.frames.length && (this.K = this.Pa.frames.length - 1);
        var a = this.Pa.frames[this.K];
        this.Da.Aj(a.Sl);
        this.gc = a.gc;
        this.hc = a.hc;
        this.Ug = this.Pa.speed;
        this.Cf = this.Pa.qp;
        1 === this.type.Ec.length && 1 === this.type.Ec[0].frames.length || 0 === this.Ug || (this.b.xm(this), this.ro = !0);
        this.rc ? this.Wd.reset() : this.Wd = new cb;
        this.Le = this.Wd.ta;
        this.ag = !0;
        this.ye = 0;
        this.$f = !0;
        this.nn = this.Hq = "";
        this.kw = 0;
        this.yk = -1;
        this.type.Fo();
        var b, d, c, f, e, k, g, a = 0;
        for (b = this.type.Ec.length; a < b; a++)
            for (f = this.type.Ec[a], d = 0, c = f.frames.length; d < c; d++) e = f.frames[d], 0 === e.width && (e.width = e.D.width, e.height = e.D.height), e.Nh && (g = e.D, k = e.yp, k.left = e.Bh / g.width, k.top = e.Ch / g.height, k.right = (e.Bh + e.width) / g.width, k.bottom = (e.Ch + e.height) / g.height, 0 === e.Bh && 0 === e.Ch && e.width === g.width && e.height === g.height && (e.Nh = !1));
        this.Ta = this.Pa.frames[this.K];
        this.Hk = this.Ta.F
    };
    l.nb = function() {
        var a = {
            a: this.Pa.ka,
            f: this.K,
            cas: this.Ug,
            fs: this.Le,
            ar: this.ye,
            at: this.Wd.ta,
            rt: this.Cf
        };
        this.ag || (a.ap = this.ag);
        this.$f || (a.af = this.$f);
        return a
    };
    l.Gb = function(a) {
        var b = this.Mx(a.a);
        b && (this.Pa = b);
        this.K = a.f;
        0 > this.K && (this.K = 0);
        this.K >= this.Pa.frames.length && (this.K = this.Pa.frames.length - 1);
        this.Ug = a.cas;
        this.Le = a.fs;
        this.ye = a.ar;
        this.Wd.reset();
        this.Wd.ta = a.at;
        this.ag = a.hasOwnProperty("ap") ? a.ap : !0;
        this.$f = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Cf = a.rt : this.Cf = this.Pa.qp;
        this.Ta = this.Pa.frames[this.K];
        this.Hk = this.Ta.F;
        this.Da.Aj(this.Ta.Sl);
        this.gc = this.Ta.gc;
        this.hc = this.Ta.hc
    };
    l.cn = function(a) {
        this.K = a ? 0 : this.Pa.frames.length - 1;
        this.ag = !1;
        this.Hq = this.Pa.name;
        this.fo = !0;
        this.b.trigger(X.prototype.g.Ou, this);
        this.b.trigger(X.prototype.g.Nu, this);
        this.fo = !1;
        this.ye = 0
    };
    l.uf = function() {
        return this.Wd.ta
    };
    l.fb = function() {
        this.Wd.add(this.b.mg(this));
        this.nn.length && this.yw();
        0 <= this.yk && this.Yq();
        var a = this.Wd.ta,
            b = this.Pa,
            d = b.frames[this.K],
            c = d.duration / this.Ug;
        this.ag && a >= this.Le + c && (this.$f ? this.K++ : this.K--, this.Le += c, this.K >= b.frames.length && (b.Xe ? (this.$f = !1, this.K = b.frames.length - 2) : b.loop ? this.K = this.Cf : (this.ye++, this.ye >= b.op ? this.cn(!1) : this.K = this.Cf)), 0 > this.K && (b.Xe ? (this.K = 1, this.$f = !0, b.loop || (this.ye++, this.ye >= b.op && this.cn(!0))) : b.loop ? this.K = this.Cf : (this.ye++, this.ye >= b.op ? this.cn(!0) : this.K = this.Cf)), 0 > this.K ? this.K = 0 : this.K >= b.frames.length && (this.K = b.frames.length - 1), a > this.Le + b.frames[this.K].duration / this.Ug && (this.Le = a), a = b.frames[this.K], this.Pg(d, a), this.b.ja = !0)
    };
    l.nr = function(a) {
        var b, d, c;
        b = 0;
        for (d = this.type.Ec.length; b < d; b++)
            if (c = this.type.Ec[b], mb(c.name, a)) return c;
        return null
    };
    l.Mx = function(a) {
        var b, d, c;
        b = 0;
        for (d = this.type.Ec.length; b < d; b++)
            if (c = this.type.Ec[b], c.ka === a) return c;
        return null
    };
    l.yw = function() {
        var a = this.Pa.frames[this.K],
            b = this.nr(this.nn);
        this.nn = "";
        !b || mb(b.name, this.Pa.name) && this.ag || (this.Pa = b, this.Ug = b.speed, this.Cf = b.qp, 0 > this.K && (this.K = 0), this.K >= this.Pa.frames.length && (this.K = this.Pa.frames.length - 1), 1 === this.kw && (this.K = 0), this.ag = !0, this.Le = this.Wd.ta, this.$f = !0, this.Pg(a, this.Pa.frames[this.K]), this.b.ja = !0)
    };
    l.Yq = function() {
        var a = this.Pa.frames[this.K],
            b = this.K;
        this.K = ua(this.yk);
        0 > this.K && (this.K = 0);
        this.K >= this.Pa.frames.length && (this.K = this.Pa.frames.length - 1);
        b !== this.K && (this.Pg(a, this.Pa.frames[this.K]), this.Le = this.Wd.ta, this.b.ja = !0);
        this.yk = -1
    };
    l.Pg = function(a, b) {
        var d = a.width,
            c = a.height,
            f = b.width,
            e = b.height;
        d != f && (this.width *= f / d);
        c != e && (this.height *= e / c);
        this.gc = b.gc;
        this.hc = b.hc;
        this.Da.Aj(b.Sl);
        this.aa();
        this.Ta = b;
        this.Hk = b.F;
        d = 0;
        for (c = this.U.length; d < c; d++) f = this.U[d], f.Ns && f.Ns(a, b);
        this.b.trigger(X.prototype.g.Pg, this)
    };
    l.Rc = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Ta,
            d = b.Nh,
            c = b.D,
            f = this.x,
            e = this.y,
            k = this.width,
            g = this.height;
        if (0 === this.j && 0 <= k && 0 <= g) f -= this.gc * k, e -= this.hc * g, this.b.xc && (f = Math.round(f), e = Math.round(e)), d ? a.drawImage(c, b.Bh, b.Ch, b.width, b.height, f, e, k, g) : a.drawImage(c, f, e, k, g);
        else {
            this.b.xc && (f = Math.round(f), e = Math.round(e));
            a.save();
            var l = 0 < k ? 1 : -1,
                h = 0 < g ? 1 : -1;
            a.translate(f, e);
            1 === l && 1 === h || a.scale(l, h);
            a.rotate(this.j * l * h);
            f = 0 - this.gc * oa(k);
            e = 0 - this.hc * oa(g);
            d ? a.drawImage(c, b.Bh, b.Ch, b.width, b.height, f, e, oa(k), oa(g)) : a.drawImage(c, f, e, oa(k), oa(g));
            a.restore()
        }
    };
    l.Ef = function(a) {
        this.cc(a)
    };
    l.cc = function(a) {
        a.kc(this.Hk);
        a.$e(this.opacity);
        var b = this.Ta,
            d = this.Qb;
        if (this.b.xc) {
            var c = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Nh ? a.ad(d.Na + c, d.Oa + f, d.ob + c, d.pb + f, d.ib + c, d.jb + f, d.gb + c, d.hb + f, b.yp) : a.sj(d.Na + c, d.Oa + f, d.ob + c, d.pb + f, d.ib + c, d.jb + f, d.gb + c, d.hb + f)
        } else b.Nh ? a.ad(d.Na, d.Oa, d.ob, d.pb, d.ib, d.jb, d.gb, d.hb, b.yp) : a.sj(d.Na, d.Oa, d.ob, d.pb, d.ib, d.jb, d.gb, d.hb)
    };
    l.Qx = function(a) {
        var b = this.Ta,
            d, c;
        d = 0;
        for (c = b.eo.length; d < c; d++)
            if (mb(a, b.eo[d][0])) return d;
        return -1
    };
    l.Sn = function(a, b) {
        var d = this.Ta,
            c = d.eo,
            f;
        la(a) ? f = this.Qx(a) : f = a - 1;
        f = ua(f);
        if (0 > f || f >= c.length) return b ? this.x : this.y;
        var e = (c[f][1] - d.gc) * this.width,
            c = c[f][2],
            c = (c - d.hc) * this.height,
            d = Math.cos(this.j);
        f = Math.sin(this.j);
        var k = e * d - c * f,
            c = c * d + e * f,
            e = k + this.x,
            c = c + this.y;
        return b ? e : c
    };
    var q = [],
        w = -2,
        N = [];
    g.prototype.Su = function(a) {
        if (!a) return !1;
        var b = this.b,
            d = b.On(),
            f = d.type,
            e = null;
        d.ga.collmemory ? e = d.ga.collmemory : (e = {}, d.ga.collmemory = e);
        d.ga.spriteCreatedDestroyCallback || (d.ga.spriteCreatedDestroyCallback = !0, b.$m(function(a) {
            var b = d.ga.collmemory;
            a = a.uid;
            var f, e;
            for (f in b) b.hasOwnProperty(f) && (e = b[f], e[0] === a || e[1] === a) && (c(b[f]), delete b[f])
        }));
        var k = f.O(),
            g = a.O(),
            k = k.oc(),
            l, h, n, q, C, M, R, I = this.b.cd,
            J = I - 1,
            y = b.sb().qb;
        for (h = 0; h < k.length; h++) {
            n = k[h];
            g.Z ? (n.Ka(), this.b.pr(n.k, a, n.Za, N), l = N, this.b.Zv(n, a, l)) : l = g.oc();
            for (q = 0; q < l.length; q++) C = l[q], b.Hj(n, C) || b.lw(n, C) ? (M = p(e, n, C), M = !M || w < J, m(e, n, C, I), M && (b.Ye(y.ba), M = f.O(), R = a.O(), M.Z = !1, R.Z = !1, f === a ? (M.e.length = 2, M.e[0] = n, M.e[1] = C, f.fd()) : (M.e.length = 1, R.e.length = 1, M.e[0] = n, R.e[0] = C, f.fd(), a.fd()), y.oe(), b.td(y.ba))) : r(e, n, C);
            A(N)
        }
        return !1
    };
    var C = new ea,
        n = !1;
    new xa(0, 0, 0, 0);
    a.finish = function(a) {
        if (n) {
            if (a) {
                var b = this.b.sb().qb.nd;
                a = null.O();
                var d = C.Xf(),
                    c, f;
                if (a.Z) {
                    a.Z = !1;
                    A(a.e);
                    c = 0;
                    for (f = d.length; c < f; ++c) a.e[c] = d[c];
                    if (b)
                        for (A(a.la), c = 0, f = null.e.length; c < f; ++c) d = null.e[c], C.contains(d) || a.la.push(d)
                } else if (b)
                    for (b = a.e.length, c = 0, f = d.length; c < f; ++c) a.e[b + c] = d[c], Ga(a.la, d[c]);
                else Da(a.e, d);
                null.fd()
            }
            C.clear();
            n = !1
        }
    };
    g.prototype.Nu = function(a) {
        return mb(this.Hq, a)
    };
    g.prototype.Ou = function() {
        return !0
    };
    g.prototype.Pg = function() {
        return !0
    };
    f.g = new g;
    b.prototype.Dv = function(a) {
        this.yk = a;
        this.ro || (this.b.xm(this), this.ro = !0);
        this.fo || this.Yq()
    };
    b.prototype.qq = function(a) {
        var b = this.Ta,
            d = b.width * a * (0 > this.width ? -1 : 1);
        a = b.height * a * (0 > this.height ? -1 : 1);
        if (this.width !== d || this.height !== a) this.width = d, this.height = a, this.aa()
    };
    f.A = new b;
    d.prototype.hu = function(a) {
        a.ea(this.Pa.frames.length)
    };
    f.S = new d
})();

function Dc(h) {
    this.b = h
}
(function() {
    function h(a, b) {
        return a.length ? a.pop() : new b
    }

    function g(a, b, d) {
        if (d) {
            var c;
            d = 0;
            for (c = b.length; d < c; d++) a.length < p && a.push(b[d]);
            A(b)
        } else
            for (c in b) Object.prototype.hasOwnProperty.call(b, c) && (a.length < p && a.push(b[c]), delete b[c])
    }

    function c(a, d, c) {
        var f = a.pc;
        c = c.replace(/\s\s*$/, "");
        d >= f.length && f.push(h(b, Object));
        d = f[d];
        d.text = c;
        d.width = a.Mo(c);
        a.gf = pa(a.gf, d.width)
    }

    function k() {}
    var m = Dc.prototype;
    m.H = function() {};
    m.P = function(a) {
        this.ra = a;
        this.b = a.b
    };
    var r = m.P.prototype;
    r.H = function() {
        this.J || (this.D = new Image, this.b.Fm(this.D, this.Jj), this.F = null)
    };
    r.Dh = function() {
        this.J || (this.F = null)
    };
    r.kj = function() {
        if (!this.J && this.e.length) {
            this.F || (this.F = this.b.u.Yc(this.D, !1, this.b.Ja, this.Vf));
            var a, b;
            a = 0;
            for (b = this.e.length; a < b; a++) this.e[a].F = this.F
        }
    };
    r.Oj = function() {
        this.J || this.e.length || !this.F || (this.b.u.deleteTexture(this.F), this.F = null)
    };
    r.Wl = function(a) {
        a.drawImage(this.D, 0, 0)
    };
    m.L = function(a) {
        this.type = a;
        this.b = a.b
    };
    r = m.L.prototype;
    r.Ue = function() {
        g(b, this.pc, !0);
        g(d, this.Ak, !1);
        g(f, this.Bk, !1);
        Ya(this.yf)
    };
    r.H = function() {
        this.D = this.type.D;
        this.zk = this.q[0];
        this.xf = this.q[1];
        this.characterSet = this.q[2];
        this.text = this.q[3];
        this.Yd = this.q[4];
        this.visible = 0 === this.q[5];
        this.Me = this.q[6] / 2;
        this.kf = this.q[7] / 2;
        this.ak = 0 === this.q[9];
        this.Tg = this.q[10];
        this.lineHeight = this.q[11];
        this.se = this.gf = 0;
        this.rc ? (A(this.pc), Ya(this.Ak), Ya(this.Bk), Ya(this.yf)) : (this.pc = [], this.Ak = {}, this.Bk = {}, this.yf = {});
        this.Oc = !0;
        this.yg = this.width;
        this.b.u && (this.type.F || (this.type.F = this.b.u.Yc(this.type.D, !1, this.b.Ja, this.type.Vf)), this.F = this.type.F);
        this.Lv()
    };
    r.nb = function() {
        var a = {
                t: this.text,
                csc: this.Yd,
                csp: this.Tg,
                lh: this.lineHeight,
                tw: this.gf,
                th: this.se,
                lrt: this.xg,
                ha: this.Me,
                va: this.kf,
                cw: {}
            },
            b;
        for (b in this.yf) a.cw[b] = this.yf[b];
        return a
    };
    r.Gb = function(a) {
        this.text = a.t;
        this.Yd = a.csc;
        this.Tg = a.csp;
        this.lineHeight = a.lh;
        this.gf = a.tw;
        this.se = a.th;
        this.xg = a.lrt;
        a.hasOwnProperty("ha") && (this.Me = a.ha);
        a.hasOwnProperty("va") && (this.kf = a.va);
        for (var b in a.cw) this.yf[b] = a.cw[b];
        this.Oc = !0;
        this.yg = this.width
    };
    var p = 1E3,
        b = [],
        d = [],
        f = [];
    r.Lv = function() {
        for (var a = this.D, b = a.width, c = a.height, a = this.zk, e = this.xf, k = a / b, g = e / c, m = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / e), p = 0; p < m.length && !(p >= b * c); p++) {
            var r = p % b,
                B = Math.floor(p / b),
                L = m.charAt(p);
            if (this.b.u) {
                var u = this.Bk,
                    v = r * k,
                    G = B * g,
                    r = (r + 1) * k,
                    B = (B + 1) * g;
                void 0 === u[L] && (u[L] = h(f, xa));
                u[L].left = v;
                u[L].top = G;
                u[L].right = r;
                u[L].bottom = B
            } else u = this.Ak, r = r * a, B = B * e, v = a, G = e, void 0 === u[L] && (u[L] = h(d, Object)), u[L].x = r, u[L].y = B, u[L].du = v, u[L].yr = G
        }
    };
    var a = [];
    m.Sm = function(b) {
        A(a);
        for (var d = "", c, f = 0; f < b.length;)
            if (c = b.charAt(f), "\n" === c) d.length && (a.push(d), d = ""), a.push("\n"), ++f;
            else if (" " === c || "\t" === c || "-" === c) {
            do d += b.charAt(f), f++; while (f < b.length && (" " === b.charAt(f) || "\t" === b.charAt(f)));
            a.push(d);
            d = ""
        } else f < b.length && (d += c, f++);
        d.length && a.push(d)
    };
    m.Tm = function(a) {
        var d = a.text,
            c = a.pc;
        if (d && d.length) {
            var f = a.width;
            if (2 >= f) g(b, c, !0);
            else {
                var e = a.Yd,
                    k = a.Tg;
                if (d.length * (a.zk * e + k) - k <= f && -1 === d.indexOf("\n") && (k = a.Mo(d), k <= f)) {
                    g(b, c, !0);
                    c.push(h(b, Object));
                    c[0].text = d;
                    c[0].width = k;
                    a.gf = k;
                    a.se = a.xf * e + a.lineHeight;
                    return
                }
                this.Um(a);
                a.se = c.length * (a.xf * e + a.lineHeight)
            }
        } else g(b, c, !0)
    };
    m.Um = function(d) {
        var f = d.ak,
            e = d.text,
            k = d.pc,
            g = d.width;
        f && (this.Sm(e), e = a);
        var h = "",
            m, r, x, B = 0,
            L = !1;
        for (x = 0; x < e.length; x++) "\n" === e[x] ? (!0 === L ? L = !1 : (c(d, B, h), B++), h = "") : (L = !1, m = h, h += e[x], r = d.Mo(h.replace(/\s\s*$/, "")), r > g && ("" === m ? (c(d, B, h), h = "", L = !0) : (c(d, B, m), h = e[x]), B++, f || " " !== h || (h = "")));
        h.replace(/\s\s*$/, "").length && (c(d, B, h), B++);
        for (x = B; x < k.length; x++) b.length < p && b.push(k[x]);
        k.length = B
    };
    r.Mo = function(a) {
        for (var b = this.Tg, d = a.length, c = 0, f = 0; f < d; f++) c += this.Nn(a.charAt(f)) * this.Yd + b;
        return c - (0 < c ? b : 0)
    };
    r.Nn = function(a) {
        var b = this.yf;
        return void 0 !== b[a] ? b[a] : this.zk
    };
    r.gt = function() {
        if (this.Oc || this.width !== this.yg) this.se = this.gf = 0, this.type.ra.Tm(this), this.Oc = !1, this.yg = this.width
    };
    r.Rc = function(a) {
        var b = this.D;
        if ("" !== this.text && null != b && (this.gt(), !(this.height < this.xf * this.Yd + this.lineHeight))) {
            a.globalAlpha = this.opacity;
            var b = this.x,
                d = this.y;
            this.b.xc && (b = Math.round(b), d = Math.round(d));
            var c = this.k.Ga,
                f = this.k.Ha,
                e = this.k.Ma,
                k = this.k.La;
            a.save();
            a.translate(b, d);
            a.rotate(this.j);
            for (var g = this.j, h = this.Me, m = this.Yd, r = this.xf * m, p = this.lineHeight, v = this.Tg, G = this.pc, P, U = -(this.gc * this.width), T = -(this.hc * this.height), T = T + this.kf * pa(0, this.height - this.se), Q, M, R, I = 0; I < G.length; I++) {
                var J = G[I].text;
                P = h * pa(0, this.width - G[I].width);
                Q = U + P;
                T += p;
                if (0 === g && d + T + r < f) T += r;
                else {
                    for (var y = 0; y < J.length; y++) {
                        M = J.charAt(y);
                        P = this.Nn(M);
                        var H = this.Ak[M];
                        if (0 === g && b +
                            Q + P * m + v < c) Q += P * m + v;
                        else {
                            if (Q + P * m > this.width + 1E-5) break;
                            void 0 !== H && (M = Q, R = T, 0 === g && 1 === m && (M = Math.round(M), R = Math.round(R)), a.drawImage(this.D, H.x, H.y, H.du, H.yr, M, R, H.du * m, H.yr * m));
                            Q += P * m + v;
                            if (0 === g && b + Q > e) break
                        }
                    }
                    T += r;
                    if (0 === g && (T + r + p > this.height || d + T > k)) break
                }
            }
            a.restore()
        }
    };
    var e = new ya;
    r.cc = function(a) {
        a.kc(this.F);
        a.$e(this.opacity);
        if (this.text && (this.gt(), !(this.height < this.xf * this.Yd + this.lineHeight))) {
            this.Ka();
            var b = this.Qb,
                d = 0,
                c = 0;
            this.b.xc && (d = Math.round(this.x) - this.x, c = Math.round(this.y) -
                this.y);
            var f = this.k.Ga,
                k = this.k.Ha,
                g = this.k.Ma,
                h = this.k.La,
                m = this.j,
                r = this.Me,
                p = this.kf,
                u = this.Yd,
                v = this.xf * u,
                G = this.lineHeight,
                P = this.Tg,
                U = this.pc,
                T = this.se,
                Q, M, R;
            0 !== m && (M = Math.cos(m), R = Math.sin(m));
            for (var d = b.Na + d, b = b.Oa + c, I, p = p * pa(0, this.height - T), J, y, T = 0; T < U.length; T++)
                if (c = U[T].text, I = Q = r * pa(0, this.width - U[T].width), p += G, 0 === m && b + p + v < k) p += v;
                else {
                    for (var H = 0; H < c.length; H++) {
                        var O = c.charAt(H);
                        Q = this.Nn(O);
                        O = this.Bk[O];
                        if (0 === m && d + I + Q * u + P < f) I += Q * u + P;
                        else {
                            if (I + Q * u > this.width + 1E-5) break;
                            if (void 0 !== O) {
                                var z = this.zk * u,
                                    K = this.xf * u;
                                J = I;
                                y = p;
                                0 === m && 1 === u && (J = Math.round(J), y = Math.round(y));
                                e.Na = J;
                                e.Oa = y;
                                e.ob = J + z;
                                e.pb = y;
                                e.gb = J;
                                e.hb = y + K;
                                e.ib = J + z;
                                e.jb = y + K;
                                0 !== m && (J = e, y = M, z = R, K = void 0, K = J.Na * y - J.Oa * z, J.Oa = J.Oa * y + J.Na * z, J.Na = K, K = J.ob * y - J.pb * z, J.pb = J.pb * y + J.ob * z, J.ob = K, K = J.gb * y - J.hb * z, J.hb = J.hb * y + J.gb * z, J.gb = K, K = J.ib * y - J.jb * z, J.jb = J.jb * y + J.ib * z, J.ib = K);
                                e.offset(d, b);
                                a.ad(e.Na, e.Oa, e.ob, e.pb, e.ib, e.jb, e.gb, e.hb, O)
                            }
                            I += Q * u + P;
                            if (0 === m && d + I > g) break
                        }
                    }
                    p += v;
                    if (0 === m && (p + v + G > this.height || b + p > h)) break
                }
        }
    };
    m.g = new function() {};
    k.prototype.tq = function(a) {
        ja(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Oc = !0, this.b.ja = !0)
    };
    k.prototype.qq = function(a) {
        a !== this.Yd && (this.Yd = a, this.Oc = !0, this.b.ja = !0)
    };
    r.uf = function(a, b) {
        var d = parseInt(b, 10);
        this.yf[a] !== d && (this.yf[a] = d, this.Oc = !0, this.b.ja = !0)
    };
    m.A = new k;
    m.S = new function() {}
})();

function Ec(h) {
    this.b = h
}
(function() {
    function h() {
        return b.length ? b.pop() : {}
    }

    function g(d) {
        var c, a;
        c = 0;
        for (a = d.length; c < a; c++) b.push(d[c]);
        A(d)
    }

    function c(b) {
        return b.length && " " === b.charAt(b.length - 1) ? b.substring(0, b.length - 1) : b
    }

    function k() {}
    var m = Ec.prototype;
    m.H = function() {
        m.A.Kv = function(b) {
            this.width !== b && (this.width = b, this.Oc = !0, this.aa())
        }
    };
    m.P = function(b) {
        this.ra = b;
        this.b = b.b
    };
    var r = m.P.prototype;
    r.H = function() {};
    r.Dh = function() {
        if (!this.J) {
            var b, c, a;
            b = 0;
            for (c = this.e.length; b < c; b++) a = this.e[b], a.je = null, a.Eg = null, a.Kc = null
        }
    };
    m.L = function(b) {
        this.type = b;
        this.b = b.b;
        this.rc ? A(this.pc) : this.pc = [];
        this.Oc = !0
    };
    r = m.L.prototype;
    r.H = function() {
        this.text = this.q[0];
        this.visible = 0 === this.q[1];
        this.font = this.q[2];
        this.color = this.q[3];
        this.Me = this.q[4];
        this.kf = this.q[5];
        this.ak = 0 === this.q[7];
        this.yg = this.rl = this.width;
        this.ql = this.height;
        this.Eo = this.q[8];
        this.Xk = this.Zg = "";
        this.se = this.gf = this.qj = 0;
        this.dz();
        this.Kc = this.Eg = this.je = null;
        this.Bs = !1;
        this.xg = this.b.cd;
        this.rc ? this.ud.set(0, 0, 1, 1) : this.ud = new xa(0, 0, 1, 1);
        this.b.u && this.b.xm(this)
    };
    r.dz = function() {
        var b = this.font.split(" "),
            c;
        for (c = 0; c < b.length; c++)
            if ("pt" === b[c].substr(b[c].length - 2, 2)) {
                this.qj = parseInt(b[c].substr(0, b[c].length - 2));
                this.kp = Math.ceil(this.qj / 72 * 96) + 4;
                0 < c && (this.Xk = b[c - 1]);
                this.Zg = b[c + 1];
                for (c += 2; c < b.length; c++) this.Zg += " " + b[c];
                break
            }
    };
    r.nb = function() {
        return {
            t: this.text,
            f: this.font,
            c: this.color,
            ha: this.Me,
            va: this.kf,
            wr: this.ak,
            lho: this.Eo,
            fn: this.Zg,
            fs: this.Xk,
            ps: this.qj,
            pxh: this.kp,
            tw: this.gf,
            th: this.se,
            lrt: this.xg
        }
    };
    r.Gb = function(b) {
        this.text = b.t;
        this.font = b.f;
        this.color = b.c;
        this.Me = b.ha;
        this.kf = b.va;
        this.ak = b.wr;
        this.Eo = b.lho;
        this.Zg = b.fn;
        this.Xk = b.fs;
        this.qj = b.ps;
        this.kp = b.pxh;
        this.gf = b.tw;
        this.se = b.th;
        this.xg = b.lrt;
        this.Oc = !0;
        this.yg = this.rl = this.width;
        this.ql = this.height
    };
    r.fb = function() {
        if (this.b.u && this.Kc && 300 <= this.b.cd - this.xg) {
            var b = this.k;
            this.Ka();
            var c = this.Za;
            if (c.right < b.Ga || c.bottom < b.Ha || c.left > b.Ma || c.top > b.La) this.b.u.deleteTexture(this.Kc), this.je = this.Eg = this.Kc = null
        }
    };
    r.Ue = function() {
        this.je = this.Eg = null;
        this.b.u && this.Kc && this.b.u.deleteTexture(this.Kc);
        this.Kc = null
    };
    r.uf = function() {
        this.font = this.Xk + " " + this.qj.toString() + "pt " + this.Zg;
        this.Oc = !0;
        this.b.ja = !0
    };
    r.Rc = function(b, c) {
        b.font = this.font;
        b.textBaseline = "top";
        b.fillStyle = this.color;
        b.globalAlpha = c ? 1 : this.opacity;
        var a = 1;
        c && (a = Math.abs(this.k.Hc()), b.save(), b.scale(a, a));
        if (this.Oc || this.width !== this.yg) this.type.ra.Tm(this.text, this.pc, b, this.width, this.ak), this.Oc = !1, this.yg = this.width;
        this.Ka();
        var a = c ? 0 : this.Qb.Na,
            e = c ? 0 : this.Qb.Oa;
        this.b.xc && (a = a + .5 | 0, e = e + .5 | 0);
        0 === this.j || c || (b.save(), b.translate(a, e), b.rotate(this.j), e = a = 0);
        var k = e + this.height,
            g = this.kp,
            g = g + this.Eo,
            h, m;
        1 === this.kf ? e += Math.max(this.height / 2 - this.pc.length * g / 2, 0) : 2 === this.kf && (e += Math.max(this.height - this.pc.length * g - 2, 0));
        for (m = 0; m < this.pc.length && !(h = a, 1 === this.Me ? h = a + (this.width - this.pc[m].width) / 2 : 2 === this.Me && (h = a + (this.width - this.pc[m].width)), b.fillText(this.pc[m].text, h, e), e += g, e >= k - g); m++);
        (0 !== this.j || c) && b.restore();
        this.xg = this.b.cd
    };
    r.cc = function(b) {
        if (!(1 > this.width || 1 > this.height)) {
            var c = this.Oc || this.Bs;
            this.Bs = !1;
            var a = this.k.Hc(),
                e = this.k.Db(),
                k = this.ud,
                g = a * this.width,
                h = a * this.height,
                m = Math.ceil(g),
                p = Math.ceil(h),
                n = Math.abs(m),
                r = Math.abs(p),
                F = this.b.N / 2,
                x = this.b.M / 2;
            this.Eg || (this.je = document.createElement("canvas"), this.je.width = n, this.je.height = r, this.rl = n, this.ql = r, c = !0, this.Eg = this.je.getContext("2d"));
            if (n !== this.rl || r !== this.ql) this.je.width = n, this.je.height = r, this.Kc && (b.deleteTexture(this.Kc), this.Kc = null), c = !0;
            c && (this.Eg.clearRect(0, 0, n, r), this.Rc(this.Eg, !0), this.Kc || (this.Kc = b.Qc(n, r, this.b.Ja, this.b.Lf)), b.hA(this.je, this.Kc, this.b.Lf));
            this.rl = n;
            this.ql = r;
            b.kc(this.Kc);
            b.$e(this.opacity);
            b.vd();
            b.translate(-F, -x);
            b.dd();
            var B = this.Qb,
                c = this.k.Wa(B.Na, B.Oa, !0, !0),
                n = this.k.Wa(B.Na, B.Oa, !1, !0),
                r = this.k.Wa(B.ob, B.pb, !0, !0),
                F = this.k.Wa(B.ob, B.pb, !1, !0),
                x = this.k.Wa(B.ib, B.jb, !0, !0),
                L = this.k.Wa(B.ib, B.jb, !1, !0),
                u = this.k.Wa(B.gb, B.hb, !0, !0),
                B = this.k.Wa(B.gb, B.hb, !1, !0);
            if (this.b.xc || 0 === this.j && 0 === e) var v = (c + .5 | 0) - c,
                G = (n + .5 | 0) -
                n,
                c = c + v,
                n = n + G,
                r = r + v,
                F = F + G,
                x = x + v,
                L = L + G,
                u = u + v,
                B = B + G;
            0 === this.j && 0 === e ? (r = c + m, F = n, x = r, L = n + p, u = c, B = L, k.right = 1, k.bottom = 1) : (k.right = g / m, k.bottom = h / p);
            b.ad(c, n, r, F, x, L, u, B, k);
            b.vd();
            b.scale(a, a);
            b.dm(-this.k.Db());
            b.translate((this.k.Ga + this.k.Ma) / -2, (this.k.Ha + this.k.La) / -2);
            b.dd();
            this.xg = this.b.cd
        }
    };
    var p = [];
    m.Sm = function(b) {
        A(p);
        for (var c = "", a, e = 0; e < b.length;)
            if (a = b.charAt(e), "\n" === a) c.length && (p.push(c), c = ""), p.push("\n"), ++e;
            else if (" " === a || "\t" === a || "-" === a) {
            do c += b.charAt(e), e++; while (e < b.length && (" " === b.charAt(e) || "\t" === b.charAt(e)));
            p.push(c);
            c = ""
        } else e < b.length && (c += a, e++);
        c.length && p.push(c)
    };
    var b = [];
    m.Tm = function(b, c, a, e, k) {
        if (b && b.length)
            if (2 >= e) g(c);
            else {
                if (100 >= b.length && -1 === b.indexOf("\n")) {
                    var m = a.measureText(b).width;
                    if (m <= e) {
                        g(c);
                        c.push(h());
                        c[0].text = b;
                        c[0].width = m;
                        return
                    }
                }
                this.Um(b, c, a, e, k)
            }
        else g(c)
    };
    m.Um = function(d, f, a, e, k) {
        k && (this.Sm(d), d = p);
        var g = "",
            m, r, C, n = 0;
        for (C = 0; C < d.length; C++) "\n" === d[C] ? (n >= f.length && f.push(h()), g = c(g), r = f[n], r.text = g, r.width = a.measureText(g).width, n++, g = "") : (m = g, g += d[C], r = a.measureText(g).width, r >= e && (n >= f.length && f.push(h()), m = c(m), r = f[n], r.text = m, r.width = a.measureText(m).width, n++, g = d[C], k || " " !== g || (g = "")));
        g.length && (n >= f.length && f.push(h()), g = c(g), r = f[n], r.text = g, r.width = a.measureText(g).width, n++);
        for (C = n; C < f.length; C++) b.push(f[C]);
        f.length = n
    };
    m.g = new function() {};
    k.prototype.tq = function(b) {
        ja(b) && 1E9 > b && (b = Math.round(1E10 * b) / 1E10);
        b = b.toString();
        this.text !== b && (this.text = b, this.Oc = !0, this.b.ja = !0)
    };
    m.A = new k;
    m.S = new function() {}
})();

function Fc(h) {
    this.b = h
}
(function() {
    var h = Fc.prototype;
    h.P = function(c) {
        this.ra = c;
        this.b = c.b
    };
    var g = h.P.prototype;
    g.H = function() {
        this.J || (this.D = new Image, this.D.sn = this.um, this.b.Fm(this.D, this.Jj), this.F = this.pattern = null)
    };
    g.Dh = function() {
        this.J || (this.F = null)
    };
    g.kj = function() {
        if (!this.J && this.e.length) {
            this.F || (this.F = this.b.u.Yc(this.D, !0, this.b.Ja, this.Vf));
            var c, k;
            c = 0;
            for (k = this.e.length; c < k; c++) this.e[c].F = this.F
        }
    };
    g.Fo = function() {
        this.J || this.F || !this.b.u || (this.F = this.b.u.Yc(this.D, !0, this.b.Ja, this.Vf))
    };
    g.Oj = function() {
        this.J || this.e.length || !this.F || (this.b.u.deleteTexture(this.F), this.F = null)
    };
    g.Wl = function(c) {
        c.drawImage(this.D, 0, 0)
    };
    h.L = function(c) {
        this.type = c;
        this.b = c.b
    };
    g = h.L.prototype;
    g.H = function() {
        this.visible = 0 === this.q[0];
        this.ud = new xa(0, 0, 0, 0);
        this.Dr = !1;
        this.D = this.type.D;
        this.b.u ? (this.type.Fo(), this.F = this.type.F) : (this.type.pattern || (this.type.pattern = this.b.Sa.createPattern(this.type.D, "repeat")), this.pattern = this.type.pattern)
    };
    g.Vd = function() {
        this.Dr = !1;
        this.D = this.type.D
    };
    g.Ue = function() {
        this.b.u && this.Dr && this.F && (this.b.u.deleteTexture(this.F), this.F = null)
    };
    g.Rc = function(c) {
        c.globalAlpha = this.opacity;
        c.save();
        c.fillStyle = this.pattern;
        var k = this.x,
            g = this.y;
        this.b.xc && (k = Math.round(k), g = Math.round(g));
        var h = -(this.gc * this.width),
            p = -(this.hc * this.height),
            b = h % this.D.width,
            d = p % this.D.height;
        0 > b && (b += this.D.width);
        0 > d && (d += this.D.height);
        c.translate(k, g);
        c.rotate(this.j);
        c.translate(b, d);
        c.fillRect(h - b, p - d, this.width, this.height);
        c.restore()
    };
    g.Ef = function(c) {
        this.cc(c)
    };
    g.cc = function(c) {
        c.kc(this.F);
        c.$e(this.opacity);
        var k = this.ud;
        k.right = this.width / this.D.width;
        k.bottom = this.height / this.D.height;
        var g = this.Qb;
        if (this.b.xc) {
            var h = Math.round(this.x) - this.x,
                p = Math.round(this.y) - this.y;
            c.ad(g.Na + h, g.Oa + p, g.ob + h, g.pb + p, g.ib + h, g.jb + p, g.gb + h, g.hb + p, k)
        } else c.ad(g.Na, g.Oa, g.ob, g.pb, g.ib, g.jb, g.gb, g.hb, k)
    };
    h.g = new function() {};
    h.A = new function() {};
    h.S = new function() {}
})();

function Gc(h) {
    this.b = h
}
(function() {
    function h(b) {
        f = b.x;
        a = b.y;
        e = b.z
    }

    function g(a, b, d, f) {
        var e;
        e = l.length ? l.pop() : new c;
        e.init(a, b, d, f);
        return e
    }

    function c() {
        this.Ej = this.id = this.y = this.x = this.pm = this.om = this.Ao = this.time = this.Gp = 0;
        this.Nj = this.zm = !1
    }

    function k(a) {
        return a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents || a.originalEvent && a.originalEvent.sourceCapabilities && a.originalEvent.sourceCapabilities.firesTouchEvents
    }

    function m() {}

    function r() {}
    var p = Gc.prototype;
    p.P = function(a) {
        this.ra = a;
        this.b = a.b
    };
    p.P.prototype.H = function() {};
    p.L = function(a) {
        this.type = a;
        this.b = a.b;
        this.touches = [];
        this.No = !1
    };
    var b = p.L.prototype,
        d = {
            left: 0,
            top: 0
        };
    b.wi = function(a) {
        var b, c;
        b = 0;
        for (c = this.touches.length; b < c; b++)
            if (this.touches[b].id === a) return b;
        return -1
    };
    var f = 0,
        a = 0,
        e = 0,
        l = [];
    c.prototype.init = function(a, b, c, d) {
        var f = Za();
        this.Gp = this.Ao = this.time = f;
        this.om = a;
        this.pm = b;
        this.x = a;
        this.y = b;
        this.pressure = this.height = this.width = 0;
        this.id = c;
        this.Ej = d;
        this.Nj = this.zm = !1
    };
    c.prototype.update = function(a, b, c, d, f, e) {
        this.Ao = this.time;
        this.time = a;
        this.x = b;
        this.y = c;
        this.width = d;
        this.height = f;
        this.pressure = e;
        !this.Nj && 15 <= Ua(this.om, this.pm, this.x, this.y) && (this.Nj = !0)
    };
    c.prototype.Py = function(a, b) {
        !this.zm && 500 <= Za() - this.Gp && !this.Nj && 15 > Ua(this.om, this.pm, this.x, this.y) && (this.zm = !0, a.ue = this.Ej, a.Uh = this.id, a.bh = b, a.b.trigger(Gc.prototype.g.Zu, a), a.De = this.x, a.Ee = this.y, a.b.trigger(Gc.prototype.g.$u, a), a.bh = 0)
    };
    var q = -1E3,
        w = -1E3,
        N = -1E4;
    c.prototype.vs = function(a, b) {
        if (!this.zm) {
            var c = Za();
            333 >= c - this.Gp && !this.Nj && 15 > Ua(this.om, this.pm, this.x, this.y) && (a.ue = this.Ej, a.Uh = this.id, a.bh = b, 666 >= c - N && 25 > Ua(q, w, this.x, this.y) ? (a.b.trigger(Gc.prototype.g.Uu, a), a.De = this.x, a.Ee = this.y, a.b.trigger(Gc.prototype.g.Vu, a), w = q = -1E3, N = -1E4) : (a.b.trigger(Gc.prototype.g.uv, a), a.De = this.x, a.Ee = this.y, a.b.trigger(Gc.prototype.g.lq, a), q = this.x, w = this.y, N = c), a.bh = 0)
        }
    };
    b.H = function() {
        this.Fy = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
        this.bh = this.Uh = this.ue = this.Ee = this.De = this.Cq = this.Bq = this.Aq = this.Xv = this.Wv = this.Vv = this.Ol = this.Nl = this.Ml = 0;
        this.fA = 0 !== this.q[0];
        var a = 0 < this.b.wc ? document : this.b.canvas,
            b = document;
        this.b.ic ? b = a = window.Canvas : this.b.ld && (b = a = window);
        var c = this;
        "undefined" !== typeof PointerEvent ? (a.addEventListener("pointerdown", function(a) {
            c.Ms(a)
        }, !1), a.addEventListener("pointermove", function(a) {
            c.Ls(a)
        }, !1), b.addEventListener("pointerup", function(a) {
            c.Il(a, !1)
        }, !1), b.addEventListener("pointercancel", function(a) {
            c.Il(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("gesturehold", function(a) {
            a.preventDefault()
        }, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
            c.Ms(a)
        }, !1), a.addEventListener("MSPointerMove", function(a) {
            c.Ls(a)
        }, !1), b.addEventListener("MSPointerUp", function(a) {
            c.Il(a, !1)
        }, !1), b.addEventListener("MSPointerCancel", function(a) {
            c.Il(a, !0)
        }, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1), document.addEventListener("MSGestureHold", function(a) {
            a.preventDefault()
        }, !1))) : (a.addEventListener("touchstart", function(a) {
            c.Ps(a)
        }, !1), a.addEventListener("touchmove", function(a) {
            c.Os(a)
        }, !1), b.addEventListener("touchend", function(a) {
            c.Yo(a, !1)
        }, !1), b.addEventListener("touchcancel", function(a) {
            c.Yo(a, !0)
        }, !1));
        if (this.Fy) {
            var d = function(a) {
                    a = a.reading;
                    c.Aq = a.accelerationX;
                    c.Bq = a.accelerationY;
                    c.Cq = a.accelerationZ
                },
                f = function(a) {
                    a = a.reading;
                    c.Ml = a.yawDegrees;
                    c.Nl = a.pitchDegrees;
                    c.Ol = a.rollDegrees
                },
                e = Windows.Devices.Sensors.Accelerometer.getDefault();
            e && (e.reportInterval = Math.max(e.minimumReportInterval, 16), e.addEventListener("readingchanged", d));
            var k = Windows.Devices.Sensors.Inclinometer.getDefault();
            k && (k.reportInterval = Math.max(k.minimumReportInterval, 16), k.addEventListener("readingchanged", f));
            document.addEventListener("visibilitychange", function() {
                document.hidden || document.msHidden ? (e && e.removeEventListener("readingchanged", d), k && k.removeEventListener("readingchanged", f)) : (e && e.addEventListener("readingchanged", d), k && k.addEventListener("readingchanged", f))
            }, !1)
        } else window.addEventListener("deviceorientation", function(a) {
            c.Ml = a.alpha || 0;
            c.Nl = a.beta || 0;
            c.Ol = a.gamma || 0
        }, !1), window.addEventListener("devicemotion", function(a) {
            a.accelerationIncludingGravity && (c.Vv = a.accelerationIncludingGravity.x || 0, c.Wv = a.accelerationIncludingGravity.y || 0, c.Xv = a.accelerationIncludingGravity.z || 0);
            a.acceleration && (c.Aq = a.acceleration.x || 0, c.Bq = a.acceleration.y || 0, c.Cq = a.acceleration.z || 0)
        }, !1);
        this.fA && !this.b.lb && (jQuery(document).mousemove(function(a) {
            c.Yy(a)
        }), jQuery(document).mousedown(function(a) {
            c.Xy(a)
        }), jQuery(document).mouseup(function(a) {
            c.Zy(a)
        }));
        !this.b.nh && this.b.Wc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(h, null, {
            frequency: 40
        });
        this.b.Xz(this)
    };
    b.Ls = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && a.preventDefault();
            var b = this.wi(a.pointerId),
                c = Za();
            if (0 <= b) {
                var f = this.b.lb ? d : jQuery(this.b.canvas).offset(),
                    b = this.touches[b];
                2 > c - b.time || b.update(c, a.pageX - f.left, a.pageY - f.top, a.width || 0, a.height || 0, a.pressure || 0)
            }
        }
    };
    b.Ms = function(a) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && nb(a) && a.preventDefault();
            var b = this.b.lb ? d : jQuery(this.b.canvas).offset(),
                c = a.pageX - b.left,
                b = a.pageY - b.top;
            Za();
            this.ue = this.touches.length;
            this.Uh = a.pointerId;
            this.touches.push(g(c, b, a.pointerId, this.ue));
            this.b.Xc = !0;
            this.b.trigger(Gc.prototype.g.jq, this);
            this.b.trigger(Gc.prototype.g.mq, this);
            this.De = c;
            this.Ee = b;
            this.b.trigger(Gc.prototype.g.Om, this);
            this.b.Xc = !1
        }
    };
    b.Il = function(a, b) {
        if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
            a.preventDefault && nb(a) && a.preventDefault();
            var c = this.wi(a.pointerId);
            this.ue = 0 <= c ? this.touches[c].Ej : -1;
            this.Uh = 0 <= c ? this.touches[c].id : -1;
            this.b.Xc = !0;
            this.b.trigger(Gc.prototype.g.iq, this);
            this.b.trigger(Gc.prototype.g.Nm, this);
            0 <= c && (b || this.touches[c].vs(this, c), 100 > l.length && l.push(this.touches[c]), this.touches.splice(c, 1));
            this.b.Xc = !1
        }
    };
    b.Os = function(a) {
        a.preventDefault && a.preventDefault();
        var b = Za(),
            c, f, e, k;
        c = 0;
        for (f = a.changedTouches.length; c < f; c++)
            if (e = a.changedTouches[c], k = this.wi(e.identifier), 0 <= k) {
                var g = this.b.lb ? d : jQuery(this.b.canvas).offset();
                k = this.touches[k];
                2 > b - k.time || k.update(b, e.pageX - g.left, e.pageY - g.top, 2 * (e.NB || e.WB || e.EB || e.IB || 0), 2 * (e.OB || e.XB || e.GB || e.JB || 0), e.xB || e.VB || e.DB || e.HB || 0)
            }
    };
    b.Ps = function(a) {
        a.preventDefault && nb(a) && a.preventDefault();
        var b = this.b.lb ? d : jQuery(this.b.canvas).offset();
        Za();
        this.b.Xc = !0;
        var c, e, f, k;
        c = 0;
        for (e = a.changedTouches.length; c < e; c++)
            if (f = a.changedTouches[c], k = this.wi(f.identifier), -1 === k) {
                k = f.pageX - b.left;
                var h = f.pageY - b.top;
                this.ue = this.touches.length;
                this.Uh = f.identifier;
                this.touches.push(g(k, h, f.identifier, this.ue));
                this.b.trigger(Gc.prototype.g.jq, this);
                this.b.trigger(Gc.prototype.g.mq, this);
                this.De = k;
                this.Ee = h;
                this.b.trigger(Gc.prototype.g.Om, this)
            }
        this.b.Xc = !1
    };
    b.Yo = function(a, b) {
        a.preventDefault && nb(a) && a.preventDefault();
        this.b.Xc = !0;
        var c, d, e;
        c = 0;
        for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.wi(e.identifier), 0 <= e && (this.ue = this.touches[e].Ej, this.Uh = this.touches[e].id, this.b.trigger(Gc.prototype.g.iq, this), this.b.trigger(Gc.prototype.g.Nm, this), b || this.touches[e].vs(this, e), 100 > l.length && l.push(this.touches[e]), this.touches.splice(e, 1));
        this.b.Xc = !1
    };
    b.uf = function() {
        return this.b.Wc && 0 === this.Ml && 0 !== e ? 90 * e : this.Ml
    };
    b.wn = function() {
        return this.b.Wc && 0 === this.Nl && 0 !== a ? 90 * a : this.Nl
    };
    b.Bn = function() {
        return this.b.Wc && 0 === this.Ol && 0 !== f ? 90 * f : this.Ol
    };
    b.Xy = function(a) {
        k(a) || (this.Ps({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.No = !0)
    };
    b.Yy = function(a) {
        this.No && !k(a) && this.Os({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        })
    };
    b.Zy = function(a) {
        a.preventDefault && this.b.Ar && !this.b.Lf && a.preventDefault();
        this.b.Ar = !0;
        k(a) || (this.Yo({
            changedTouches: [{
                pageX: a.pageX,
                pageY: a.pageY,
                identifier: 0
            }]
        }), this.No = !1)
    };
    b.Lj = function() {
        var a, b, c, d = Za();
        a = 0;
        for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.Ao = d), c.Py(this, a)
    };
    m.prototype.mq = function() {
        return !0
    };
    m.prototype.Nm = function() {
        return !0
    };
    m.prototype.Om = function(a) {
        return a ? this.b.rm(a, this.De, this.Ee) : !1
    };
    var C = [];
    m.prototype.Fu = function(a) {
        if (!a) return !1;
        var b = a.O(),
            c = b.oc(),
            d, e, f, k, g, h;
        f = 0;
        for (k = c.length; f < k; f++) {
            var l = c[f];
            l.Ka();
            g = 0;
            for (h = this.touches.length; g < h; g++)
                if (e = this.touches[g], d = l.k.Rb(e.x, e.y, !0), e = l.k.Rb(e.x, e.y, !1), l.$b(d, e)) {
                    C.push(l);
                    break
                }
        }
        return C.length ? (b.Z = !1, Da(b.e, C), a.fd(), A(C), !0) : !1
    };
    m.prototype.jq = function(a) {
        a = Math.floor(a);
        return a === this.ue
    };
    m.prototype.iq = function(a) {
        a = Math.floor(a);
        return a === this.ue
    };
    m.prototype.Zu = function() {
        return !0
    };
    m.prototype.uv = function() {
        return !0
    };
    m.prototype.Uu = function() {
        return !0
    };
    m.prototype.$u = function(a) {
        return a ? this.b.rm(a, this.De, this.Ee) : !1
    };
    m.prototype.lq = function(a) {
        return a ? this.b.rm(a, this.De, this.Ee) : !1
    };
    m.prototype.Vu = function(a) {
        return a ? this.b.rm(a, this.De, this.Ee) : !1
    };
    p.g = new m;
    r.prototype.vq = function(a, b) {
        var c = this.bh;
        if (0 > c || c >= this.touches.length) a.I(0);
        else {
            var d, e, f, k, g;
            ia(b) ? (d = this.b.yi(0), e = d.scale, f = d.Sd, k = d.qd, g = d.j, d.scale = 1, d.Sd = 1, d.qd = 1, d.j = 0, a.I(d.Rb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.Sd = f, d.qd = k, d.j = g) : (d = ja(b) ? this.b.yi(b) : this.b.Un(b)) ? a.I(d.Rb(this.touches[c].x, this.touches[c].y, !0)) : a.I(0)
        }
    };
    r.prototype.Vm = function(a, b) {
        var c = this.bh;
        if (0 > c || c >= this.touches.length) a.I(0);
        else {
            var d, e, f, k, g;
            ia(b) ? (d = this.b.yi(0), e = d.scale, f = d.Sd, k = d.sd, g = d.j, d.scale = 1, d.Sd = 1, d.sd = 1, d.j = 0, a.I(d.Rb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.Sd = f, d.sd = k, d.j = g) : (d = ja(b) ? this.b.yi(b) : this.b.Un(b)) ? a.I(d.Rb(this.touches[c].x, this.touches[c].y, !1)) : a.I(0)
        }
    };
    p.S = new r
})();

function Hc(h) {
    this.b = h
}
(function() {
    var h = Hc.prototype;
    h.P = function(c) {
        this.ra = c;
        this.b = c.b
    };
    h.P.prototype.H = function() {};
    h.L = function(c) {
        this.type = c;
        this.b = c.b
    };
    var g = h.L.prototype;
    g.H = function() {
        this.Ty = this.q[0];
        this.returnValue = "";
        var c = document.createElement("script");
        c.setAttribute("type", "text/javascript");
        c.setAttribute("src", this.Ty);
        "undefined" != typeof c && document.getElementsByTagName("head")[0].appendChild(c)
    };
    g.Rc = function() {};
    h.g = {};
    h.A = {};
    h.A.tu = function(c) {
        this.returnValue = "";
        try {
            this.returnValue = eval(c)
        } catch (k) {
            this.returnValue = k
        }
    };
    h.S = {};
    h.S.SA = function(c) {
        c.lc(this.returnValue)
    }
})();

function Ic(h) {
    this.b = h
}
(function() {
    function h() {}
    var g = Ic.prototype;
    g.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    g.P.prototype.H = function() {};
    g.L = function(c, g) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = g;
        this.b = c.b;
        this.Cp = this.Bp = this.Ap = this.Dp = this.co = this.vj = this.Ui = this.oi = this.Qj = !1;
        this.zo = this.yo = this.xo = this.Bo = -1;
        this.ya = this.xa = 0
    };
    var c = g.L.prototype;
    c.H = function() {
        this.fj = this.q[0];
        this.Ud = this.q[1];
        this.$d = this.q[2];
        this.An = this.q[3];
        this.bn = this.q[4];
        this.uw = 1 === this.q[5];
        this.enabled = 0 !== this.q[6];
        this.uw && !this.b.lb && (jQuery(document).keydown(function(c) {
            return function(g) {
                c.Wo(g)
            }
        }(this)), jQuery(document).keyup(function(c) {
            return function(g) {
                c.Xo(g)
            }
        }(this)))
    };
    c.nb = function() {
        return {
            dx: this.xa,
            dy: this.ya,
            enabled: this.enabled,
            maxspeed: this.fj,
            acc: this.Ud,
            dec: this.$d,
            ignoreInput: this.co
        }
    };
    c.Gb = function(c) {
        this.xa = c.dx;
        this.ya = c.dy;
        this.enabled = c.enabled;
        this.fj = c.maxspeed;
        this.Ud = c.acc;
        this.$d = c.dec;
        this.co = c.ignoreInput;
        this.Cp = this.Bp = this.Ap = this.Dp = this.vj = this.Ui = this.oi = this.Qj = !1;
        this.zo = this.yo = this.xo = this.Bo = -1
    };
    c.Wo = function(c) {
        var g = this.b.cd;
        switch (c.which) {
            case 37:
                c.preventDefault();
                this.yo < g && (this.Ui = !0);
                break;
            case 38:
                c.preventDefault();
                this.Bo < g && (this.Qj = !0);
                break;
            case 39:
                c.preventDefault();
                this.zo < g && (this.vj = !0);
                break;
            case 40:
                c.preventDefault(), this.xo < g && (this.oi = !0)
        }
    };
    c.Xo = function(c) {
        var g = this.b.cd;
        switch (c.which) {
            case 37:
                c.preventDefault();
                this.Ui = !1;
                this.yo = g;
                break;
            case 38:
                c.preventDefault();
                this.Qj = !1;
                this.Bo = g;
                break;
            case 39:
                c.preventDefault();
                this.vj = !1;
                this.zo = g;
                break;
            case 40:
                c.preventDefault(), this.oi = !1, this.xo = g
        }
    };
    c.Gg = function() {
        this.vj = this.Ui = this.oi = this.Qj = !1
    };
    c.fb = function() {
        var c = this.b.mg(this.d),
            g = this.Ui || this.Bp,
            h = this.vj || this.Cp,
            p = this.Qj || this.Dp,
            b = this.oi || this.Ap;
        this.Ap = this.Dp = this.Cp = this.Bp = !1;
        if (this.enabled) {
            var d = this.b.Lg(this.d);
            if (d && (this.b.$l(this.d, d), !this.b.rz(this.d))) return;
            this.co && (b = p = h = g = !1);
            0 === this.An ? h = g = !1 : 1 === this.An && (b = p = !1);
            2 === this.An && (p || b) && (h = g = !1);
            g == h && (0 > this.xa ? (this.xa += this.$d * c, 0 < this.xa && (this.xa = 0)) : 0 < this.xa && (this.xa -= this.$d * c, 0 > this.xa && (this.xa = 0)));
            p == b && (0 > this.ya ? (this.ya += this.$d * c, 0 < this.ya && (this.ya = 0)) : 0 < this.ya && (this.ya -= this.$d * c, 0 > this.ya && (this.ya = 0)));
            g && !h && (this.xa = 0 < this.xa ? this.xa - (this.Ud + this.$d) * c : this.xa - this.Ud * c);
            h && !g && (this.xa = 0 > this.xa ? this.xa + (this.Ud + this.$d) * c : this.xa + this.Ud * c);
            p && !b && (this.ya = 0 < this.ya ? this.ya - (this.Ud + this.$d) * c : this.ya - this.Ud * c);
            b && !p && (this.ya = 0 > this.ya ? this.ya + (this.Ud + this.$d) * c : this.ya + this.Ud * c);
            if (0 !== this.xa || 0 !== this.ya) {
                Math.sqrt(this.xa * this.xa + this.ya * this.ya) > this.fj && (d = Math.atan2(this.ya, this.xa), this.xa = this.fj * Math.cos(d), this.ya = this.fj * Math.sin(d));
                h = this.d.x;
                p = this.d.y;
                g = this.d.j;
                this.d.x += this.xa * c;
                this.d.aa();
                if (d = this.b.Lg(this.d)) this.b.ft(this.d, 0 > this.xa ? 1 : -1, 0, Math.abs(Math.floor(this.xa * c))) || (this.d.x = h), this.xa = 0, this.d.aa(), this.b.$l(this.d, d);
                this.d.y += this.ya * c;
                this.d.aa();
                if (d = this.b.Lg(this.d)) this.b.ft(this.d, 0, 0 > this.ya ? 1 : -1, Math.abs(Math.floor(this.ya * c))) || (this.d.y = p), this.ya = 0, this.d.aa(), this.b.$l(this.d, d);
                c = lb(this.xa);
                d = lb(this.ya);
                0 === c && 0 === d || !this.d.type.ra.Hy || (1 === this.bn ? this.d.j = Na(90 * Math.round(Ja(Math.atan2(d, c)) / 90)) : 2 === this.bn ? this.d.j = Na(45 * Math.round(Ja(Math.atan2(d, c)) / 45)) : 3 === this.bn && (this.d.j = Math.atan2(d, c)));
                this.d.aa();
                this.d.j != g && (d = this.b.Lg(this.d)) && (this.d.j = g, this.d.aa(), this.b.$l(this.d, d))
            }
        }
    };
    g.g = new function() {};
    h.prototype.hk = function() {
        this.ya = this.xa = 0
    };
    h.prototype.nq = function() {
        this.xa *= -1;
        this.ya *= -1
    };
    g.A = new h;
    g.S = new function() {}
})();

function Jc(h) {
    this.b = h
}
(function() {
    function h() {}

    function g() {}
    var c = Jc.prototype;
    c.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    c.P.prototype.H = function() {};
    c.L = function(c, k) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = k;
        this.b = c.b
    };
    var k = c.L.prototype;
    k.H = function() {
        this.te = this.qe = this.Oh = this.Gl = this.Ll = 0
    };
    k.nb = function() {
        return {
            ontime: this.Ll,
            offtime: this.Gl,
            stage: this.Oh,
            stagetimeleft: this.qe,
            timeleft: this.te
        }
    };
    k.Gb = function(c) {
        this.Ll = c.ontime;
        this.Gl = c.offtime;
        this.Oh = c.stage;
        this.qe = c.stagetimeleft;
        this.te = c.timeleft;
        null === this.te && (this.te = Infinity)
    };
    k.fb = function() {
        if (!(0 >= this.te)) {
            var c = this.b.mg(this.d);
            this.te -= c;
            0 >= this.te ? (this.te = 0, this.d.visible = !0, this.b.ja = !0, this.b.trigger(Jc.prototype.g.Xu, this.d)) : (this.qe -= c, 0 >= this.qe && (0 === this.Oh ? (this.d.visible = !1, this.Oh = 1, this.qe += this.Gl) : (this.d.visible = !0, this.Oh = 0, this.qe += this.Ll), this.b.ja = !0))
        }
    };
    h.prototype.Xu = function() {
        return !0
    };
    c.g = new h;
    g.prototype.uu = function(c, k, g) {
        this.Ll = c;
        this.Gl = k;
        this.Oh = 1;
        this.qe = k;
        this.te = g;
        this.d.visible = !1;
        this.b.ja = !0
    };
    c.A = new g;
    c.S = new function() {}
})();

function Kc(h) {
    this.b = h
}
(function() {
    function h() {}
    var g = Kc.prototype;
    g.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    g.P.prototype.H = function() {};
    g.L = function(c, g) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = g;
        this.b = c.b
    };
    var c = g.L.prototype;
    c.H = function() {
        this.Kb = null;
        this.Ql = -1;
        this.mode = this.qh = this.vm = this.Ah = this.We = this.oj = 0;
        var c = this;
        this.rc || (this.As = function(g) {
            c.Vo(g)
        });
        this.b.$m(this.As)
    };
    c.nb = function() {
        return {
            uid: this.Kb ? this.Kb.uid : -1,
            pa: this.oj,
            pd: this.We,
            msa: this.Ah,
            tsa: this.vm,
            lka: this.qh,
            m: this.mode
        }
    };
    c.Gb = function(c) {
        this.Ql = c.uid;
        this.oj = c.pa;
        this.We = c.pd;
        this.Ah = c.msa;
        this.vm = c.tsa;
        this.qh = c.lka;
        this.mode = c.m
    };
    c.Vd = function() {
        -1 === this.Ql ? this.Kb = null : this.Kb = this.b.Ai(this.Ql);
        this.Ql = -1
    };
    c.Vo = function(c) {
        this.Kb == c && (this.Kb = null)
    };
    c.Ue = function() {
        this.Kb = null;
        this.b.xz(this.As)
    };
    c.fb = function() {};
    c.Lj = function() {
        if (this.Kb) {
            this.qh !== this.d.j && (this.Ah = La(this.Ah + (this.d.j - this.qh)));
            var c = this.d.x,
                g = this.d.y;
            if (3 === this.mode || 4 === this.mode) {
                var h = Ua(this.d.x, this.d.y, this.Kb.x, this.Kb.y);
                if (h > this.We || 4 === this.mode && h < this.We) g = Oa(this.Kb.x, this.Kb.y, this.d.x, this.d.y), c = this.Kb.x + Math.cos(g) * this.We, g = this.Kb.y + Math.sin(g) * this.We
            } else c = this.Kb.x + Math.cos(this.Kb.j + this.oj) * this.We, g = this.Kb.y + Math.sin(this.Kb.j + this.oj) * this.We;
            this.qh = h = La(this.Ah + (this.Kb.j - this.vm));
            0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.d.x === c && this.d.y === g || (this.d.x = c, this.d.y = g, this.d.aa());
            0 !== this.mode && 2 !== this.mode || this.d.j === h || (this.d.j = h, this.d.aa())
        }
    };
    g.g = new function() {};
    h.prototype.yv = function(c, g) {
        if (c) {
            var h = c.tr(this.d);
            h && (this.Kb = h, this.oj = Oa(h.x, h.y, this.d.x, this.d.y) - h.j, this.We = Ua(h.x, h.y, this.d.x, this.d.y), this.qh = this.Ah = this.d.j, this.vm = h.j, this.mode = g)
        }
    };
    g.A = new h;
    g.S = new function() {}
})();

function Lc(h) {
    this.b = h
}
(function() {
    function h() {}

    function g() {}
    var c = Lc.prototype;
    c.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    c.P.prototype.H = function() {};
    c.L = function(c, g) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = g;
        this.b = c.b
    };
    var k = c.L.prototype;
    k.H = function() {
        this.Zm = 1 == this.q[0];
        this.move = {
            max: this.q[1],
            acc: this.q[2],
            dec: this.q[3]
        };
        this.target = {
            x: 0,
            y: 0,
            a: 0
        };
        this.ih = !1;
        this.Ig = this.Df = 0;
        this.Pi = !1;
        this.pf = {
            x: 0,
            y: 0
        };
        this.we = {
            x: 0,
            y: 0,
            a: -1
        };
        this.kk = null;
        this.uo = !1
    };
    k.fb = function() {
        this.Pi && (this.uo = !0, this.b.trigger(Lc.prototype.g.Yu, this.d), this.Pi = this.uo = !1);
        if (this.Zm && this.ih) {
            var c = this.b.mg(this.d);
            if (0 != c) {
                this.pf.x == this.d.x && this.pf.y == this.d.y || this.yq();
                var g = !1;
                0 != this.move.dec && (g = this.Df, g = g * g / (2 * this.move.dec) >= this.Ig);
                g = g ? -this.move.dec : this.move.acc;
                0 != g && this.bi(this.Df + g * c);
                c = this.Df * c;
                this.Ig -= c;
                0 >= this.Ig || 0 >= this.Df ? (this.ih = !1, this.d.x = this.target.x, this.d.y = this.target.y, this.bi(0), this.Sy(), this.Pi = !0) : (g = this.target.a, this.d.x += c * Math.cos(g), this.d.y += c * Math.sin(g));
                this.d.aa();
                this.pf.x = this.d.x;
                this.pf.y = this.d.y
            }
        }
    };
    k.Lj = function() {
        this.we.x = this.d.x;
        this.we.y = this.d.y
    };
    k.bi = function(c) {
        null != c ? this.Df = c > this.move.max ? this.move.max : c : 0 == this.move.acc && (this.Df = this.move.max)
    };
    k.yq = function() {
        var c = this.target.x - this.d.x,
            g = this.target.y - this.d.y;
        this.target.a = Math.atan2(g, c);
        this.Ig = Math.sqrt(c * c + g * g);
        this.pf.x = this.d.x;
        this.pf.y = this.d.y
    };
    k.sq = function(c, g) {
        this.ih = !0;
        this.target.x = c;
        this.target.y = g;
        this.yq();
        this.bi(null);
        this.we.x = this.d.x;
        this.we.y = this.d.y
    };
    k.Iy = function() {
        var c = this.b.cd,
            g = this.kk != c;
        this.kk = c;
        return g
    };
    k.Sy = function() {
        if (this.Iy()) {
            var c = this.d.x - this.we.x,
                g = this.d.y - this.we.y;
            if (0 != c || 0 != g) this.we.a = Ma(Math.atan2(g, c))
        }
    };
    k.nb = function() {
        return {
            en: this.Zm,
            v: this.move,
            t: this.target,
            is_m: this.ih,
            c_spd: this.Df,
            rd: this.Ig,
            is_ht: this.Pi,
            pp: this.pf,
            ma: this.we,
            lt: this.kk
        }
    };
    k.Gb = function(c) {
        this.Zm = c.en;
        this.move = c.v;
        this.target = c.t;
        this.ih = c.is_m;
        this.Df = c.c_spd;
        this.Ig = c.rd;
        this.Pi = c.is_ht;
        this.pf = c.pp;
        this.we = c.ma;
        this.kk = c.lt
    };
    c.g = new h;
    h.prototype.Yu = function() {
        return this.uo
    };
    c.A = new g;
    g.prototype.sq = function(c, g) {
        this.sq(c, g)
    };
    g.prototype.bi = function(c) {
        this.bi(c)
    };
    g.prototype.hk = function() {
        this.ih = !1
    };
    c.S = new function() {}
})();

function Mc(h) {
    this.b = h
}
(function() {
    function h() {}

    function g() {}

    function c() {}
    var k = Mc.prototype;
    k.P = function(b) {
        this.behavior = b;
        this.b = b.b
    };
    k.P.prototype.H = function() {};
    k.L = function(b, c) {
        this.type = b;
        this.behavior = b.behavior;
        this.d = c;
        this.b = b.b;
        this.kb = 0
    };
    var m = k.L.prototype,
        r = 2 * Math.PI,
        p = Math.PI / 2,
        b = 3 * Math.PI / 2;
    m.H = function() {
        this.Ya = 1 === this.q[0];
        this.Dg = this.q[1];
        this.Wp = this.q[2];
        this.Ve = this.q[3];
        this.Ve += Math.random() * this.q[4];
        0 === this.Ve ? this.kb = 0 : (this.kb = this.q[5] / this.Ve * r, this.kb += Math.random() * this.q[6] / this.Ve * r);
        this.qc = this.q[7];
        this.qc += Math.random() * this.q[8];
        this.tj = this.sg = this.na = 0;
        5 === this.Dg && (this.qc = D(this.qc));
        this.init()
    };
    m.nb = function() {
        return {
            i: this.kb,
            a: this.Ya,
            mv: this.Dg,
            w: this.Wp,
            p: this.Ve,
            mag: this.qc,
            iv: this.na,
            iv2: this.sg,
            r: this.tj,
            lkv: this.X,
            lkv2: this.Va
        }
    };
    m.Gb = function(b) {
        this.kb = b.i;
        this.Ya = b.a;
        this.Dg = b.mv;
        this.Wp = b.w;
        this.Ve = b.p;
        this.qc = b.mag;
        this.na = b.iv;
        this.sg = b.iv2 || 0;
        this.tj = b.r;
        this.X = b.lkv;
        this.Va = b.lkv2 || 0
    };
    m.init = function() {
        switch (this.Dg) {
            case 0:
                this.na = this.d.x;
                break;
            case 1:
                this.na = this.d.y;
                break;
            case 2:
                this.na = this.d.width;
                this.tj = this.d.height / this.d.width;
                break;
            case 3:
                this.na = this.d.width;
                break;
            case 4:
                this.na = this.d.height;
                break;
            case 5:
                this.na = this.d.j;
                break;
            case 6:
                this.na = this.d.opacity;
                break;
            case 7:
                this.na = 0;
                break;
            case 8:
                this.na = this.d.x, this.sg = this.d.y
        }
        this.X = this.na;
        this.Va = this.sg
    };
    m.ve = function(c) {
        c = c % r;
        switch (this.Wp) {
            case 0:
                return Math.sin(c);
            case 1:
                return c <= p ? c / p : c <= b ? 1 - 2 * (c - p) / Math.PI : (c - b) / p - 1;
            case 2:
                return 2 * c / r - 1;
            case 3:
                return -2 * c / r + 1;
            case 4:
                return c < Math.PI ? -1 : 1
        }
        return 0
    };
    m.fb = function() {
        var b = this.b.mg(this.d);
        this.Ya && 0 !== b && (0 === this.Ve ? this.kb = 0 : (this.kb += b / this.Ve * r, this.kb = this.kb % r), this.aA())
    };
    m.aA = function() {
        switch (this.Dg) {
            case 0:
                this.d.x !== this.X && (this.na += this.d.x - this.X);
                this.d.x = this.na + this.ve(this.kb) * this.qc;
                this.X = this.d.x;
                break;
            case 1:
                this.d.y !== this.X && (this.na += this.d.y - this.X);
                this.d.y = this.na + this.ve(this.kb) * this.qc;
                this.X = this.d.y;
                break;
            case 2:
                this.d.width = this.na + this.ve(this.kb) * this.qc;
                this.d.height = this.d.width * this.tj;
                break;
            case 3:
                this.d.width = this.na + this.ve(this.kb) * this.qc;
                break;
            case 4:
                this.d.height = this.na + this.ve(this.kb) * this.qc;
                break;
            case 5:
                this.d.j !== this.X && (this.na = La(this.na + (this.d.j - this.X)));
                this.d.j = La(this.na + this.ve(this.kb) * this.qc);
                this.X = this.d.j;
                break;
            case 6:
                this.d.opacity = this.na + this.ve(this.kb) * this.qc / 100;
                0 > this.d.opacity ? this.d.opacity = 0 : 1 < this.d.opacity && (this.d.opacity = 1);
                break;
            case 8:
                this.d.x !== this.X && (this.na += this.d.x - this.X), this.d.y !== this.Va && (this.sg += this.d.y - this.Va), this.d.x = this.na + Math.cos(this.d.j) * this.ve(this.kb) * this.qc, this.d.y = this.sg + Math.sin(this.d.j) * this.ve(this.kb) * this.qc, this.X = this.d.x, this.Va = this.d.y
        }
        this.d.aa()
    };
    m.Ns = function(b, c) {
        switch (this.Dg) {
            case 2:
                this.na *= c.width / b.width;
                this.tj = c.height / c.width;
                break;
            case 3:
                this.na *= c.width / b.width;
                break;
            case 4:
                this.na *= c.height / b.height
        }
    };
    h.prototype.Au = function() {
        return this.Ya
    };
    k.g = new h;
    g.prototype.Cv = function(b) {
        this.Ya = 1 === b
    };
    k.A = new g;
    c.prototype.Qv = function(b) {
        b.I(this.ve(this.kb) * this.qc)
    };
    k.S = new c
})();
var Nc = [],
    Oc = [],
    Pc = [],
    Qc = [],
    Rc = [],
    Sc = [],
    Yc = [],
    Zc = [],
    $c = [],
    ad = [];

function bd(h) {
    return result = (h /= 1) < 1 / 2.75 ? 7.5625 * h * h + 0 : h < 2 / 2.75 ? 1 * (7.5625 * (h -= 1.5 / 2.75) * h + .75) + 0 : h < 2.5 / 2.75 ? 1 * (7.5625 * (h -= 2.25 / 2.75) * h + .9375) + 0 : 1 * (7.5625 * (h -= 2.625 / 2.75) * h + .984375) + 0
}

function cd(h, g) {
    return Math.round(h / g * 1E4)
}

function dd(h, g, c, k, m) {
    var r = 0;
    switch (h) {
        case 0:
            r = 1 * g / c + 0;
            break;
        case 1:
            r = 1 * (g /= c) * g + 0;
            break;
        case 2:
            r = -1 * (g /= c) * (g - 2) + 0;
            break;
        case 3:
            r = 1 > (g /= c / 2) ? .5 * g * g + 0 : -.5 * (--g * (g - 2) - 1) + 0;
            break;
        case 4:
            r = 1 * (g /= c) * g * g + 0;
            break;
        case 5:
            r = 1 * ((g = g / c - 1) * g * g + 1) + 0;
            break;
        case 6:
            r = 1 > (g /= c / 2) ? .5 * g * g * g + 0 : .5 * ((g -= 2) * g * g + 2) + 0;
            break;
        case 7:
            r = 1 * (g /= c) * g * g * g + 0;
            break;
        case 8:
            r = -1 * ((g = g / c - 1) * g * g * g - 1) + 0;
            break;
        case 9:
            r = 1 > (g /= c / 2) ? .5 * g * g * g * g + 0 : -.5 * ((g -= 2) * g * g * g - 2) + 0;
            break;
        case 10:
            r = 1 * (g /= c) * g * g * g * g + 0;
            break;
        case 11:
            r = 1 * ((g = g / c - 1) * g * g * g * g + 1) + 0;
            break;
        case 12:
            r = 1 > (g /= c / 2) ? .5 * g * g * g * g * g + 0 : .5 * ((g -= 2) * g * g * g * g + 2) + 0;
            break;
        case 13:
            m.Lc ? r = Rc[cd(g, c)] : r = -(Math.sqrt(1 - g * g) - 1);
            break;
        case 14:
            m.Lc ? r = Sc[cd(g, c)] : r = Math.sqrt(1 - (g - 1) * (g - 1));
            break;
        case 15:
            r = m.Lc ? Yc[cd(g, c)] : 1 > (g /= c / 2) ? -.5 * (Math.sqrt(1 - g * g) - 1) + 0 : .5 * (Math.sqrt(1 - (g -= 2) * g) + 1) + 0;
            break;
        case 16:
            m.Lc ? r = Zc[cd(g, c)] : (m = m.Ac, r = 1 * (g /= c) * g * ((m + 1) * g - m) + 0);
            break;
        case 17:
            m.Lc ? r = $c[cd(g, c)] : (m = m.Ac, r = 1 * ((g = g / c - 1) * g * ((m + 1) * g + m) + 1) + 0);
            break;
        case 18:
            m.Lc ? r = ad[cd(g, c)] : (m = m.Ac, r = 1 > (g /= c / 2) ? .5 * g * g * (((m *= 1.525) + 1) * g - m) + 0 : .5 * ((g -= 2) * g * (((m *= 1.525) + 1) * g + m) + 2) + 0);
            break;
        case 19:
            m.Lc ? r = Oc[cd(g, c)] : (r = m.Qg, h = m.lj, g /= c, 0 == h && (h = .3 * c), 0 == r || r < Math.abs(1) ? (r = 1, m = h / 4) : m = h / (2 * Math.PI) * Math.asin(1 / r), r = -(r * Math.pow(2, 10 * --g) * Math.sin(2 * (g * c - m) * Math.PI / h)) + 0);
            break;
        case 20:
            m.Lc ? r = Pc[cd(g, c)] : (r = m.Qg, h = m.lj, g /= c, 0 == h && (h = .3 * c), 0 == r || r < Math.abs(1) ? (r = 1, m = h / 4) : m = h / (2 * Math.PI) * Math.asin(1 / r), r = r * Math.pow(2, -10 * g) * Math.sin(2 * (g * c - m) * Math.PI / h) + 1);
            break;
        case 21:
            m.Lc ? r = Qc[cd(g, c)] : (r = m.Qg, h = m.lj, g /= c / 2, 0 == h && (h = .3 * c * 1.5), 0 == r || r < Math.abs(1) ? (r = 1, m = h / 4) : m = h / (2 * Math.PI) * Math.asin(1 / r), r = 1 > g ? -.5 * r * Math.pow(2, 10 * --g) * Math.sin(2 * (g * c - m) * Math.PI / h) + 0 : r * Math.pow(2, -10 * --g) * Math.sin(2 * (g * c - m) * Math.PI / h) * .5 + 1);
            break;
        case 22:
            r = m.Lc ? 1 - Nc[cd(c - g, c)] + 0 : 1 - bd(c - g / c) + 0;
            break;
        case 23:
            r = m.Lc ? Nc[cd(g, c)] : bd(g / c);
            break;
        case 24:
            r = m.Lc ? g < c / 2 ? .5 * (1 - Nc[cd(c - 2 * g, c)] + 0) + 0 : .5 * Nc[cd(2 * g - c, c)] + .5 : g < c / 2 ? .5 * (1 - bd(c - 2 * g) + 0) + 0 : .5 * bd((2 * g - c) / c) + .5;
            break;
        case 25:
            g = g / c / 2;
            r = 2 * g * g * (3 - 2 * g);
            break;
        case 26:
            g = (g / c + 1) / 2;
            r = 2 * g * g * (3 - 2 * g) - 1;
            break;
        case 27:
            g = g / c, r = g * g * (3 - 2 * g)
    }
    return k ? 1 - r : r
}
for (var ed = 0, fd = 0, gd = 0, Y = 0, Z = 0, hd = 0; 1E4 >= hd; hd++) Y = hd / 1E4, ed = (Y /= 1) < 1 / 2.75 ? 7.5625 * Y * Y + 0 : Y < 2 / 2.75 ? 1 * (7.5625 * (Y -= 1.5 / 2.75) * Y + .75) + 0 : Y < 2.5 / 2.75 ? 1 * (7.5625 * (Y -= 2.25 / 2.75) * Y + .9375) + 0 : 1 * (7.5625 * (Y -= 2.625 / 2.75) * Y + .984375) + 0, Nc[hd] = ed, Y = hd / 1E4, gd = fd = 0, Y /= 1, 0 == gd && (gd = .3), 0 == fd || fd < Math.abs(1) ? (fd = 1, Z = gd / 4) : Z = gd / (2 * Math.PI) * Math.asin(1 / fd), ed = -(fd * Math.pow(2, 10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / gd)) + 0, Oc[hd] = ed, Y = hd / 1E4, gd = fd = 0, Y /= 1, 0 == gd && (gd = .3), 0 == fd || fd < Math.abs(1) ? (fd = 1, Z = gd / 4) : Z = gd / (2 * Math.PI) * Math.asin(1 / fd), ed = fd * Math.pow(2, -10 * Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / gd) + 1, Pc[hd] = ed, Y = hd / 1E4, gd = fd = 0, Y /= .5, 0 == gd && (gd = .3 * 1.5), 0 == fd || fd < Math.abs(1) ? (fd = 1, Z = gd / 4) : Z = gd / (2 * Math.PI) * Math.asin(1 / fd), ed = 1 > Y ? -.5 * fd * Math.pow(2, 10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / gd) + 0 : fd * Math.pow(2, -10 * --Y) * Math.sin(2 * (1 * Y - Z) * Math.PI / gd) * .5 + 1, Qc[hd] = ed, Y = hd / 1E4, Rc[hd] = -(Math.sqrt(1 - Y * Y) - 1), Y = hd / 1E4, Sc[hd] = Math.sqrt(1 - (Y - 1) * (Y - 1)), Y = hd / 1E4, ed = 1 > (Y /= .5) ? -.5 * (Math.sqrt(1 - Y * Y) - 1) + 0 : .5 * (Math.sqrt(1 - (Y -= 2) * Y) + 1) + 0, Yc[hd] = ed, Y = hd / 1E4, Z = 0, 0 == Z && (Z = 1.70158), ed = 1 * (Y /= 1) * Y * ((Z + 1) * Y - Z) + 0, Zc[hd] = ed, Y = hd / 1E4, Z = 0, 0 == Z && (Z = 1.70158), ed = 1 * ((Y = Y / 1 - 1) * Y * ((Z + 1) * Y + Z) + 1) + 0, $c[hd] = ed, Y = hd / 1E4, Z = 0, 0 == Z && (Z = 1.70158), ed = 1 > (Y /= .5) ? .5 * Y * Y * (((Z *= 1.525) + 1) * Y - Z) + 0 : .5 * ((Y -= 2) * Y * (((Z *= 1.525) + 1) * Y + Z) + 2) + 0, ad[hd] = ed;

function id(h, g, c, k, m, r, p) {
    this.name = h;
    this.value = 0;
    this.Kh(k);
    this.km(m);
    this.ig = c;
    this.Xa = g;
    this.duration = r;
    this.state = this.da = 0;
    this.Jl = this.Kl = this.Hl = this.Eh = !1;
    this.Va = this.X = 0;
    this.ec = p;
    this.Xe = 1;
    this.xi = !1;
    this.Sc = [];
    for (h = 0; 28 > h; h++) this.Sc[h] = {}, this.Sc[h].Qg = 0, this.Sc[h].lj = 0, this.Sc[h].Qh = 0, this.Sc[h].Ac = 0, this.Sc[h].Lc = !0
}
id.prototype = {};
id.prototype.Kh = function(h) {
    this.za = parseFloat(h.split(",")[0]);
    this.tb = parseFloat(h.split(",")[1]);
    this.Va = this.X = 0
};
id.prototype.km = function(h) {
    this.ua = parseFloat(h.split(",")[0]);
    this.eb = parseFloat(h.split(",")[1]);
    isNaN(this.eb) && (this.eb = this.ua)
};
id.prototype.Mm = function(h) {
    if (0 === this.state) return -1;
    1 === this.state && (this.da += h);
    2 === this.state && (this.da -= h);
    3 === this.state && (this.state = 0);
    if (4 === this.state || 6 === this.state) this.da += h * this.Xe;
    5 === this.state && (this.da += h * this.Xe);
    return 0 > this.da ? (this.da = 0, 4 === this.state ? this.Xe = 1 : 6 === this.state ? (this.Xe = 1, this.xi = !1) : this.state = 0, this.Jl = !0, 0) : this.da > this.duration ? (this.da = this.duration, 4 === this.state ? this.Xe = -1 : 6 === this.state ? (this.Xe = -1, this.xi = !0) : 5 === this.state ? this.da = 0 : this.state = 0, this.Hl = !0, 1) : this.xi ? dd(this.ig, this.duration - this.da, this.duration, this.xi, this.Sc[this.ig]) : dd(this.ig, this.da, this.duration, this.xi, this.Sc[this.ig])
};

function kd(h) {
    this.b = h
}
(function() {
    var h = kd.prototype;
    h.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    h.P.prototype.H = function() {};
    h.L = function(c, g) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = g;
        this.b = c.b;
        this.kb = 0
    };
    var g = h.L.prototype;
    g.H = function() {
        this.Hh = this.q[0];
        this.Ya = 1 == this.Hh || 2 == this.Hh || 3 == this.Hh || 4 == this.Hh;
        this.Xa = this.q[1];
        this.Cn = this.q[2];
        this.target = this.q[3];
        this.qm = this.q[4];
        this.Dm = !1;
        1 === this.qm && (this.target = "relative(" + this.target + ")");
        this.duration = this.q[5];
        this.ec = 1 === this.q[6];
        this.value = 0;
        this.C = {};
        this.Gq(this.Xa, this.Cn, "current", this.target, this.duration, this.ec);
        1 === this.q[0] && this.Dj(0);
        2 === this.q[0] && this.Dj(2);
        3 === this.q[0] && this.Dj(3);
        4 === this.q[0] && this.Dj(4)
    };
    g.le = function(c, g) {
        void 0 === g && (g = "current");
        var h = g.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        g = g.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
        var r = this.value;
        if ("current" === g) switch (c) {
            case 0:
                h = this.d.x + "," + this.d.y;
                break;
            case 1:
                h = this.d.width + "," + this.d.height;
                break;
            case 2:
                h = this.d.width + "," + this.d.height;
                break;
            case 3:
                h = this.d.width +
                    "," + this.d.height;
                break;
            case 4:
                h = Ja(this.d.j) + "," + Ja(this.d.j);
                break;
            case 5:
                h = 100 * this.d.opacity + "," + 100 * this.d.opacity;
                break;
            case 6:
                h = r + "," + r;
                break;
            case 7:
                h = this.d.x + "," + this.d.y;
                break;
            case 8:
                h = this.d.x + "," + this.d.y;
                break;
            case 9:
                h = void 0 !== this.d.Ta ? this.d.width / this.d.Ta.width + "," + this.d.height / this.d.Ta.height : "1,1"
        }
        if ("relative" === g.substring(0, 8)) {
            var p = g.match(/\((.*?)\)/);
            if (p) var b = parseFloat(p[1].split(",")[0]),
                d = parseFloat(p[1].split(",")[1]);
            isNaN(b) && (b = 0);
            isNaN(d) && (d = 0);
            switch (c) {
                case 0:
                    h = this.d.x + b + "," + (this.d.y + d);
                    break;
                case 1:
                    h = this.d.width + b + "," + (this.d.height + d);
                    break;
                case 2:
                    h = this.d.width + b + "," + (this.d.height + d);
                    break;
                case 3:
                    h = this.d.width + b + "," + (this.d.height + d);
                    break;
                case 4:
                    h = Ja(this.d.j) + b + "," + (Ja(this.d.j) + d);
                    break;
                case 5:
                    h = 100 * this.d.opacity + b + "," + (100 * this.d.opacity + d);
                    break;
                case 6:
                    h = r + b + "," + r + b;
                    break;
                case 7:
                    h = this.d.x + b + "," + this.d.y;
                    break;
                case 8:
                    h = this.d.x + "," + (this.d.y + b);
                    break;
                case 9:
                    h = b + "," + d
            }
        }
        return h
    };
    g.Gq = function(c, g, h, r, p, b) {
        h = this.le(c, h);
        r = this.le(c, r);
        void 0 !== this.C["default"] && delete this.C["default"];
        this.C["default"] = new id("default", c, g, h, r, p, b);
        this.C["default"].He = 0
    };
    g.nb = function() {
        JSON.stringify(this.C["default"]);
        return {
            playmode: this.Hh,
            active: this.Ya,
            tweened: this.Xa,
            easing: this.Cn,
            target: this.target,
            targetmode: this.qm,
            useCurrent: this.Dm,
            duration: this.duration,
            enforce: this.ec,
            value: this.value,
            tweenlist: JSON.stringify(this.C["default"])
        }
    };
    id.Ju = function(c, g, h, r, p, b, d, f) {
        g = new id(g, h, r, p, b, d, f);
        for (var a in c) g[a] = c[a];
        return g
    };
    g.Gb = function(c) {
        var g = JSON.parse(c.tweenlist),
            g = id.Ju(g, g.name, g.Xa, g.ig, g.za + "," + g.tb, g.ua + "," + g.eb, g.duration, g.ec);
        console.log(g);
        this.C["default"] = g;
        this.Hh = c.playmode;
        this.Ya = c.active;
        this.Dg = c.tweened;
        this.Cn = c.easing;
        this.target = c.target;
        this.qm = c.targetmode;
        this.Dm = c.useCurrent;
        this.duration = c.duration;
        this.ec = c.enforce;
        this.value = c.value
    };
    g.Oz = function(c) {
        1 < c && (c = 1);
        0 > c && (c = 0);
        for (var g in this.C) {
            var h = this.C[g];
            h.X = 0;
            h.Va = 0;
            h.state = 3;
            h.da = c * h.duration;
            var r = h.Mm(0);
            this.Rp(h, r)
        }
    };
    g.Dj = function(c) {
        for (var g in this.C) {
            var h = this.C[g];
            if (this.Dm) {
                var r = this.le(h.Xa, "current"),
                    p = this.le(h.Xa, this.target);
                h.Kh(r);
                h.km(p)
            }
            0 === c && (h.da = 1E-6, h.X = 0, h.Va = 0, h.Eh = !0, h.state = 1);
            1 === c && (h.state = 1);
            if (2 === c || 4 === c) h.da = 1E-6, h.X = 0, h.Va = 0, h.Eh = !0, 2 == c && (h.state = 4), 4 == c && (h.state = 6);
            3 === c && (h.da = 1E-6, h.X = 0, h.Va = 0, h.Eh = !0, h.state = 5)
        }
    };
    g.Vz = function(c) {
        for (var g in this.C) {
            var h = this.C[g];
            1 === c && (h.da = 0);
            2 === c && (h.da = h.duration);
            h.state = 3;
            var r = h.Mm(0);
            this.Rp(h, r)
        }
    };
    g.Cz = function(c) {
        for (var g in this.C) {
            var h = this.C[g];
            1 === c && (h.da = h.duration, h.X = 0, h.Va = 0, h.Kl = !0);
            h.state = 2
        }
    };
    g.Rp = function(c, g) {
        if (0 === c.Xa) c.ec ? (this.d.x = c.za + (c.ua - c.za) * g, this.d.y = c.tb + (c.eb - c.tb) * g) : (this.d.x += (c.ua - c.za) * g - c.X, this.d.y += (c.eb - c.tb) * g - c.Va, c.X = (c.ua - c.za) * g, c.Va = (c.eb - c.tb) * g);
        else if (1 === c.Xa) c.ec ? (this.d.width = c.za + (c.ua - c.za) * g, this.d.height = c.tb + (c.eb - c.tb) * g) : (this.d.width += (c.ua - c.za) * g - c.X, this.d.height += (c.eb - c.tb) * g - c.Va, c.X = (c.ua - c.za) * g, c.Va = (c.eb - c.tb) * g);
        else if (2 === c.Xa) c.ec ? this.d.width = c.za + (c.ua - c.za) * g : (this.d.width += (c.ua -
            c.za) * g - c.X, c.X = (c.ua - c.za) * g);
        else if (3 === c.Xa) c.ec ? this.d.height = c.tb + (c.eb - c.tb) * g : (this.d.height += (c.eb - c.tb) * g - c.Va, c.Va = (c.eb - c.tb) * g);
        else if (4 === c.Xa)
            if (c.ec) {
                var h = c.za + (c.ua - c.za) * g;
                this.d.j = La(D(h))
            } else h = (c.ua - c.za) * g - c.X, this.d.j = La(this.d.j + D(h)), c.X = (c.ua - c.za) * g;
        else if (5 === c.Xa) c.ec ? this.d.opacity = (c.za + (c.ua - c.za) * g) / 100 : (this.d.opacity += ((c.ua - c.za) * g - c.X) / 100, c.X = (c.ua - c.za) * g);
        else if (6 === c.Xa) c.ec ? this.value = c.za + (c.ua - c.za) * g : (this.value += (c.ua - c.za) * g - c.X, c.X = (c.ua - c.za) * g);
        else if (7 === c.Xa) c.ec ? this.d.x = c.za + (c.ua - c.za) * g : (this.d.x += (c.ua - c.za) * g - c.X, c.X = (c.ua - c.za) * g);
        else if (8 === c.Xa) c.ec ? this.d.y = c.tb + (c.eb - c.tb) * g : (this.d.y += (c.eb - c.tb) * g - c.Va, c.Va = (c.eb - c.tb) * g);
        else if (9 === c.Xa) {
            var h = c.za + (c.ua - c.za) * g,
                r = c.tb + (c.eb - c.tb) * g;
            0 > this.d.width && (h = c.za + (c.ua + c.za) * -g);
            0 > this.d.height && (r = c.tb + (c.eb + c.tb) * -g);
            c.ec ? (this.d.width = this.d.Ta.width * h, this.d.height = this.d.Ta.height * r) : (0 > this.d.width ? (this.d.width = this.d.width / (-1 + c.X) * h, c.X = h + 1) : (this.d.width = this.d.width / (1 + c.X) * h, c.X = h - 1), 0 > this.d.height ? (this.d.height = this.d.height / (-1 + c.Va) * r, c.Va = r + 1) : (this.d.height = this.d.height / (1 + c.Va) * r, c.Va = r - 1))
        }
        this.d.aa()
    };
    g.fb = function() {
        var c = this.b.mg(this.d),
            g = this.C["default"];
        0 !== g.state && (g.Eh && (this.b.trigger(kd.prototype.g.tv, this.d), g.Eh = !1), g.Kl && (this.b.trigger(kd.prototype.g.rv, this.d), g.Kl = !1), this.Ya = 1 == g.state || 2 == g.state || 4 == g.state || 5 == g.state || 6 == g.state, c = g.Mm(c), this.Rp(g, c), g.Hl && (this.b.trigger(kd.prototype.g.Wu, this.d), g.Hl = !1), g.Jl && (this.b.trigger(kd.prototype.g.qv, this.d), g.Jl = !1))
    };
    h.g = {};
    g = h.g;
    g.Au = function() {
        return 0 !== this.C["default"].state
    };
    g.AA = function() {
        return 2 == this.C["default"].state
    };
    g.sA = function(c, g) {
        var h = this.C["default"];
        return ic(h.da / h.duration, c, g)
    };
    g.JA = function(c, g) {
        var h = this.C["default"];
        this.Kj = ic(h.da / h.duration, c, g);
        if (h = this.Uo != this.Kj && this.Kj) this.Uo = this.Kj;
        return h
    };
    g.tv = function() {
        return void 0 === this.C["default"] ? !1 : this.C["default"].Eh
    };
    g.rv = function() {
        return void 0 === this.C["default"] ? !1 : this.C["default"].Kl
    };
    g.Wu = function() {
        return void 0 === this.C["default"] ? !1 : this.C["default"].Hl
    };
    g.qv = function() {
        return void 0 === this.C["default"] ? !1 : this.C["default"].Jl
    };
    h.A = {};
    g = h.A;
    g.Mv = function(c, g) {
        this.Uo = this.Kj = !1;
        this.Dm = 1 == g;
        this.Dj(c)
    };
    g.hk = function(c) {
        this.Vz(c)
    };
    g.nq = function(c) {
        this.Uo = this.Kj = !1;
        this.Cz(c)
    };
    g.RA = function(c) {
        this.Oz(c)
    };
    g.ZA = function(c) {
        isNaN(c) || 0 > c || void 0 === this.C["default"] || (this.C["default"].duration = c)
    };
    g.cB = function(c) {
        void 0 !== this.C["default"] && (this.C["default"].ec = 1 === c)
    };
    g.eB = function(c) {
        void 0 !== this.C["default"] && (c = this.le(this.C["default"].Xa, c), this.C["default"].Kh(c))
    };
    g.gB = function(c, g, h) {
        if (void 0 !== this.C["default"] && !isNaN(h)) {
            var r = this.C["default"],
                p = h + "";
            this.qm = g;
            var b = "",
                d = "";
            if (1 === g) {
                this.target = "relative(" + p + ")";
                switch (c) {
                    case 0:
                        b = this.d.x + h;
                        d = r.eb;
                        break;
                    case 1:
                        b = r.ua;
                        d = this.d.y + h;
                        break;
                    case 2:
                        d = b = "" + Ja(this.d.j + D(h));
                        break;
                    case 3:
                        d = b = "" + 100 * this.d.opacity + h;
                        break;
                    case 4:
                        b = this.d.width + h;
                        d = r.eb;
                        break;
                    case 5:
                        b = r.ua;
                        d = this.d.height + h;
                        break;
                    case 6:
                        d = b = h
                }
                p = b + "," + d
            } else {
                switch (c) {
                    case 0:
                        b = h;
                        d = r.eb;
                        break;
                    case 1:
                        b = r.ua;
                        d = h;
                        break;
                    case 2:
                        d = b = h;
                        break;
                    case 3:
                        d = b = h;
                        break;
                    case 4:
                        b = h;
                        d = r.eb;
                        break;
                    case 5:
                        b = r.ua;
                        d = h;
                        break;
                    case 6:
                        d = b = h
                }
                this.target = p = b + "," + d
            }
            c = this.le(this.C["default"].Xa, "current");
            p = this.le(this.C["default"].Xa, p);
            r.Kh(c);
            r.km(p)
        }
    };
    g.iB = function(c) {
        void 0 !== this.C["default"] && (this.C["default"].Xa = c)
    };
    g.$A = function(c) {
        void 0 !== this.C["default"] && (this.C["default"].ig = c)
    };
    g.aB = function(c, g, h, r, p) {
        void 0 !== this.C["default"] && (this.C["default"].Sc[c].Lc = !1, this.C["default"].Sc[c].Qg = g, this.C["default"].Sc[c].lj = h, this.C["default"].Sc[c].Qh = r, this.C["default"].Sc[c].Ac = p)
    };
    g.TA = function() {
        void 0 !== this.C["default"] && (this.C["default"].Lc = !0)
    };
    g.jB = function(c) {
        var g = this.C["default"];
        this.value = c;
        6 === g.Xa && g.Kh(this.le(g.Xa, "current"))
    };
    g.Hv = function(c, g, h, r, p) {
        if (void 0 === this.C["default"]) this.Gq(c, g, initial, h, r, p);
        else {
            var b = this.C["default"];
            b.Xa = c;
            b.ig = g;
            b.Kh(this.le(c, "current"));
            b.km(this.le(c, h));
            b.duration = r;
            b.ec = 1 === p
        }
    };
    h.S = {};
    h = h.S;
    h.kB = function(c) {
        var g = "N/A";
        switch (this.C["default"].state) {
            case 0:
                g = "paused";
                break;
            case 1:
                g = "playing";
                break;
            case 2:
                g = "reversing";
                break;
            case 3:
                g = "seeking"
        }
        c.lc(g)
    };
    h.QA = function(c) {
        c.I(this.C["default"].da / this.C["default"].duration)
    };
    h.ru = function(c) {
        c.I(this.C["default"].duration)
    };
    h.mB = function(c) {
        var g = this.C["default"],
            h = "N/A";
        switch (g.Xa) {
            case 0:
                h = g.ua;
                break;
            case 1:
                h = g.eb;
                break;
            case 2:
                h = g.ua;
                break;
            case 3:
                h = g.ua;
                break;
            case 4:
                h = g.ua;
                break;
            case 5:
                h = g.eb;
                break;
            case 6:
                h = g.ua
        }
        c.I(h)
    };
    h.Qv = function(c) {
        c.I(this.value)
    };
    h.oB = function(c, g, h, r, p) {
        r = 1 < r ? 1 : r;
        p = dd(p, 0 > r ? 0 : r, 1, !1, !1);
        c.I(g + p * (h - g))
    }
})();

function sc(h) {
    this.b = h
}(function() {
    var h = sc.prototype;
    h.P = function(c) {
        this.behavior = c;
        this.b = c.b
    };
    h.P.prototype.H = function() {};
    h.L = function(c, g) {
        this.type = c;
        this.behavior = c.behavior;
        this.d = g;
        this.b = c.b
    };
    var g = h.L.prototype;
    g.H = function() {
        this.d.ga.solidEnabled = 0 !== this.q[0]
    };
    g.fb = function() {};
    h.g = new function() {};
    h.A = new function() {}
})();

function rc() {
    return [Cc, vc, uc, wc, Hc, tc, Bc, xc, Ec, Dc, X, Fc, Gc, Lc, Jc, Ic, sc, Kc, kd, Mc, S.prototype.g.fq, tc.prototype.A.CallFunction, S.prototype.g.ou, S.prototype.A.Rv, S.prototype.g.Zp, S.prototype.g.Cu, S.prototype.g.su, X.prototype.g.nu, X.prototype.A.Rm, X.prototype.S.Vm, S.prototype.S.He, X.prototype.A.Qm, X.prototype.S.vq, X.prototype.g.Jm, X.prototype.A.Fv, X.prototype.g.Su, S.prototype.A.pu, X.prototype.A.qu, S.prototype.S.random, Fc.prototype.A.Rm, Fc.prototype.S.Vm, S.prototype.A.Pv, S.prototype.A.fu, S.prototype.S["int"], Dc.prototype.A.tq, Fc.prototype.g.Yp, S.prototype.A.Jv, Gc.prototype.g.lq, xc.prototype.g.Du, Gc.prototype.g.Fu, X.prototype.A.Bv, X.prototype.g.$p, xc.prototype.g.Km, S.prototype.A.yu, tc.prototype.g.fk, Kc.prototype.A.yv, X.prototype.A.pq, X.prototype.A.rq, Fc.prototype.A.uq, X.prototype.A.oq, X.prototype.A.uq, X.prototype.A.Dv, S.prototype.g.mu, tc.prototype.S.wv, S.prototype.g.xu, S.prototype.A.Ov, S.prototype.g.vu, S.prototype.S.Ny, kd.prototype.A.Hv, kd.prototype.A.Mv, Bc.prototype.A.Gv, S.prototype.A.Av, Fc.prototype.A.pq, Gc.prototype.g.Nm, Hc.prototype.A.tu, tc.prototype.S.xv, vc.prototype.A.Nv, vc.prototype.A.zv, vc.prototype.A.Iv, vc.prototype.A.hk, vc.prototype.g.Eu, S.prototype.S.Rq, Jc.prototype.A.uu, X.prototype.g.Yp, Mc.prototype.A.Cv, X.prototype.A.qq, uc.prototype.A.Iu, Gc.prototype.g.Om, X.prototype.S.hu, S.prototype.S.floor, X.prototype.A.Lu, uc.prototype.g.Jm, X.prototype.A.Ev, S.prototype.g.wu, uc.prototype.A.Qm, uc.prototype.S.Im, Dc.prototype.A.Rm, Dc.prototype.A.oq, Bc.prototype.A.ju, Bc.prototype.g.av, Bc.prototype.S.Gu, Bc.prototype.g.bq, Bc.prototype.g.cq]
};