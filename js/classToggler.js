!function(e) {
    var t = {};
    function n(o) {
        if (t[o])
            return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(e, t) {
        if (1 & t && (e = n(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var r in e)
                n.d(o, r, function(t) {
                    return e[t]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return n.d(t, "a", t),
        t
    }
    ,
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    n.p = "",
    n(n.s = 0)
}([function(e, t, n) {
    "use strict";
    function o(e) {
        this.node = e,
        this.top = e.offsetTop - window.screen.height,
        this.className = e.getAttribute("data-toggler");
        var t = e.getAttribute("data-toggler-delay");
        this.delay = t || !1,
        this.shortHandedTop = e.offsetTop - (window.screen.height - window.screen.height / 10),
        this.added = !1
        console.log(e.getBoundingClientRect().top);
    }
    n.r(t),
    o.prototype.addClass = function() {
        this.node.classList.add(this.className),
        this.added = !0
    }
    ,
    o.prototype.removeClass = function() {
        this.node.classList.remove(this.className),
        this.added = !1
    }
    ;
    var r = o;
    function s() {
        var e = this;
        this._nodes = document.querySelectorAll("[data-toggler]"),
        this._elements = [],
        this.addListeners(),
        this.scrollHandler(),
        document.addEventListener("scroll", function() {
            e.scrollHandler()
        })
    }
    s.prototype.addListeners = function() {
        var e = this;
        this._nodes && [].forEach.call(this._nodes, function(t) {
            e._elements.push(new r(t))
        })
    }
    ,
    s.prototype.scrollHandler = function() {
        var e = window.scrollY;
        this._elements.forEach(function(t) {
            if (e >= t.shortHandedTop && !t.added) {
                var n = Number(t.delay);
                !1 !== n && n > 0 ? setTimeout(function() {
                    t.addClass()
                }, 1e3 * n) : t.addClass()
            } else
                e < t.top && t.removeClass()
        })
    }
    ;
    new s
}
]);
