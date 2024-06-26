!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var i = [],
    n = Object.getPrototypeOf,
    o = i.slice,
    s = i.flat
      ? function (e) {
          return i.flat.call(e);
        }
      : function (e) {
          return i.concat.apply([], e);
        },
    r = i.push,
    a = i.indexOf,
    l = {},
    c = l.toString,
    d = l.hasOwnProperty,
    u = d.toString,
    h = u.call(Object),
    p = {},
    f = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    g = function (e) {
      return null != e && e === e.window;
    },
    m = e.document,
    v = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, i) {
    var n,
      o,
      s = (i = i || m).createElement("script");
    if (((s.text = e), t))
      for (n in v)
        (o = t[n] || (t.getAttribute && t.getAttribute(n))) &&
          s.setAttribute(n, o);
    i.head.appendChild(s).parentNode.removeChild(s);
  }
  function y(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? l[c.call(e)] || "object"
      : typeof e;
  }
  var w = "3.7.1",
    x = /HTML$/i,
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function T(e) {
    var t = !!e && "length" in e && e.length,
      i = y(e);
    return (
      !f(e) &&
      !g(e) &&
      ("array" === i ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function C(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  (S.fn = S.prototype =
    {
      jquery: w,
      constructor: S,
      length: 0,
      toArray: function () {
        return o.call(this);
      },
      get: function (e) {
        return null == e
          ? o.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (e) {
        return this.pushStack(
          S.map(this, function (t, i) {
            return e.call(t, i, t);
          })
        );
      },
      slice: function () {
        return this.pushStack(o.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: r,
      sort: i.sort,
      splice: i.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          i,
          n,
          o,
          s,
          r = arguments[0] || {},
          a = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++),
            "object" == typeof r || f(r) || (r = {}),
            a === l && ((r = this), a--);
          a < l;
          a++
        )
          if (null != (e = arguments[a]))
            for (t in e)
              (n = e[t]),
                "__proto__" !== t &&
                  r !== n &&
                  (c && n && (S.isPlainObject(n) || (o = Array.isArray(n)))
                    ? ((i = r[t]),
                      (s =
                        o && !Array.isArray(i)
                          ? []
                          : o || S.isPlainObject(i)
                          ? i
                          : {}),
                      (o = !1),
                      (r[t] = S.extend(c, s, n)))
                    : void 0 !== n && (r[t] = n));
        return r;
      }),
    S.extend({
      expando: "jQuery" + (w + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, i;
        return !(
          !e ||
          "[object Object]" !== c.call(e) ||
          ((t = n(e)) &&
            ("function" !=
              typeof (i = d.call(t, "constructor") && t.constructor) ||
              u.call(i) !== h))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, i) {
        b(e, { nonce: t && t.nonce }, i);
      },
      each: function (e, t) {
        var i,
          n = 0;
        if (T(e))
          for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
        else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
        return e;
      },
      text: function (e) {
        var t,
          i = "",
          n = 0,
          o = e.nodeType;
        if (!o) for (; (t = e[n++]); ) i += S.text(t);
        return 1 === o || 11 === o
          ? e.textContent
          : 9 === o
          ? e.documentElement.textContent
          : 3 === o || 4 === o
          ? e.nodeValue
          : i;
      },
      makeArray: function (e, t) {
        var i = t || [];
        return (
          null != e &&
            (T(Object(e))
              ? S.merge(i, "string" == typeof e ? [e] : e)
              : r.call(i, e)),
          i
        );
      },
      inArray: function (e, t, i) {
        return null == t ? -1 : a.call(t, e, i);
      },
      isXMLDoc: function (e) {
        var t = e && e.namespaceURI,
          i = e && (e.ownerDocument || e).documentElement;
        return !x.test(t || (i && i.nodeName) || "HTML");
      },
      merge: function (e, t) {
        for (var i = +t.length, n = 0, o = e.length; n < i; n++) e[o++] = t[n];
        return (e.length = o), e;
      },
      grep: function (e, t, i) {
        for (var n = [], o = 0, s = e.length, r = !i; o < s; o++)
          !t(e[o], o) !== r && n.push(e[o]);
        return n;
      },
      map: function (e, t, i) {
        var n,
          o,
          r = 0,
          a = [];
        if (T(e))
          for (n = e.length; r < n; r++)
            null != (o = t(e[r], r, i)) && a.push(o);
        else for (r in e) null != (o = t(e[r], r, i)) && a.push(o);
        return s(a);
      },
      guid: 1,
      support: p,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = i[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        l["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var k = i.pop,
    E = i.sort,
    P = i.splice,
    M = "[\\x20\\t\\r\\n\\f]",
    A = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g");
  S.contains = function (e, t) {
    var i = t && t.parentNode;
    return (
      e === i ||
      !(
        !i ||
        1 !== i.nodeType ||
        !(e.contains
          ? e.contains(i)
          : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))
      )
    );
  };
  var O = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function L(e, t) {
    return t
      ? "\0" === e
        ? "�"
        : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
      : "\\" + e;
  }
  S.escapeSelector = function (e) {
    return (e + "").replace(O, L);
  };
  var F = m,
    $ = r;
  !(function () {
    var t,
      n,
      s,
      r,
      l,
      c,
      u,
      h,
      f,
      g,
      m = $,
      v = S.expando,
      b = 0,
      y = 0,
      w = ee(),
      x = ee(),
      T = ee(),
      O = ee(),
      L = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      D =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      I =
        "\\[" +
        M +
        "*(" +
        D +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        D +
        "))|)" +
        M +
        "*\\]",
      z =
        ":(" +
        D +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        I +
        ")*)|.*)\\)|)",
      R = new RegExp(M + "+", "g"),
      H = new RegExp("^" + M + "*," + M + "*"),
      N = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      _ = new RegExp(M + "|>"),
      q = new RegExp(z),
      B = new RegExp("^" + D + "$"),
      W = {
        ID: new RegExp("^#(" + D + ")"),
        CLASS: new RegExp("^\\.(" + D + ")"),
        TAG: new RegExp("^(" + D + "|[*])"),
        ATTR: new RegExp("^" + I),
        PSEUDO: new RegExp("^" + z),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + j + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      X = /^(?:input|select|textarea|button)$/i,
      V = /^h\d$/i,
      Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      U = /[+~]/,
      G = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      Z = function (e, t) {
        var i = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320))
        );
      },
      K = function () {
        le();
      },
      J = he(
        function (e) {
          return !0 === e.disabled && C(e, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      m.apply((i = o.call(F.childNodes)), F.childNodes),
        i[F.childNodes.length].nodeType;
    } catch (t) {
      m = {
        apply: function (e, t) {
          $.apply(e, o.call(t));
        },
        call: function (e) {
          $.apply(e, o.call(arguments, 1));
        },
      };
    }
    function Q(e, t, i, n) {
      var o,
        s,
        r,
        a,
        l,
        d,
        u,
        g = t && t.ownerDocument,
        b = t ? t.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof e || !e || (1 !== b && 9 !== b && 11 !== b))
      )
        return i;
      if (!n && (le(t), (t = t || c), h)) {
        if (11 !== b && (l = Y.exec(e)))
          if ((o = l[1])) {
            if (9 === b) {
              if (!(r = t.getElementById(o))) return i;
              if (r.id === o) return m.call(i, r), i;
            } else if (
              g &&
              (r = g.getElementById(o)) &&
              Q.contains(t, r) &&
              r.id === o
            )
              return m.call(i, r), i;
          } else {
            if (l[2]) return m.apply(i, t.getElementsByTagName(e)), i;
            if ((o = l[3]) && t.getElementsByClassName)
              return m.apply(i, t.getElementsByClassName(o)), i;
          }
        if (!(O[e + " "] || (f && f.test(e)))) {
          if (((u = e), (g = t), 1 === b && (_.test(e) || N.test(e)))) {
            for (
              ((g = (U.test(e) && ae(t.parentNode)) || t) == t && p.scope) ||
                ((a = t.getAttribute("id"))
                  ? (a = S.escapeSelector(a))
                  : t.setAttribute("id", (a = v))),
                s = (d = de(e)).length;
              s--;

            )
              d[s] = (a ? "#" + a : ":scope") + " " + ue(d[s]);
            u = d.join(",");
          }
          try {
            return m.apply(i, g.querySelectorAll(u)), i;
          } catch (t) {
            O(e, !0);
          } finally {
            a === v && t.removeAttribute("id");
          }
        }
      }
      return be(e.replace(A, "$1"), t, i, n);
    }
    function ee() {
      var e = [];
      return function t(i, o) {
        return (
          e.push(i + " ") > n.cacheLength && delete t[e.shift()],
          (t[i + " "] = o)
        );
      };
    }
    function te(e) {
      return (e[v] = !0), e;
    }
    function ie(e) {
      var t = c.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function ne(e) {
      return function (t) {
        return C(t, "input") && t.type === e;
      };
    }
    function oe(e) {
      return function (t) {
        return (C(t, "input") || C(t, "button")) && t.type === e;
      };
    }
    function se(e) {
      return function (t) {
        return "form" in t
          ? t.parentNode && !1 === t.disabled
            ? "label" in t
              ? "label" in t.parentNode
                ? t.parentNode.disabled === e
                : t.disabled === e
              : t.isDisabled === e || (t.isDisabled !== !e && J(t) === e)
            : t.disabled === e
          : "label" in t && t.disabled === e;
      };
    }
    function re(e) {
      return te(function (t) {
        return (
          (t = +t),
          te(function (i, n) {
            for (var o, s = e([], i.length, t), r = s.length; r--; )
              i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
          })
        );
      });
    }
    function ae(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function le(e) {
      var t,
        i = e ? e.ownerDocument || e : F;
      return (
        i != c &&
          9 === i.nodeType &&
          i.documentElement &&
          ((u = (c = i).documentElement),
          (h = !S.isXMLDoc(c)),
          (g = u.matches || u.webkitMatchesSelector || u.msMatchesSelector),
          u.msMatchesSelector &&
            F != c &&
            (t = c.defaultView) &&
            t.top !== t &&
            t.addEventListener("unload", K),
          (p.getById = ie(function (e) {
            return (
              (u.appendChild(e).id = S.expando),
              !c.getElementsByName || !c.getElementsByName(S.expando).length
            );
          })),
          (p.disconnectedMatch = ie(function (e) {
            return g.call(e, "*");
          })),
          (p.scope = ie(function () {
            return c.querySelectorAll(":scope");
          })),
          (p.cssHas = ie(function () {
            try {
              return c.querySelector(":has(*,:jqfake)"), !1;
            } catch (e) {
              return !0;
            }
          })),
          p.getById
            ? ((n.filter.ID = function (e) {
                var t = e.replace(G, Z);
                return function (e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (n.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && h) {
                  var i = t.getElementById(e);
                  return i ? [i] : [];
                }
              }))
            : ((n.filter.ID = function (e) {
                var t = e.replace(G, Z);
                return function (e) {
                  var i =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return i && i.value === t;
                };
              }),
              (n.find.ID = function (e, t) {
                if (void 0 !== t.getElementById && h) {
                  var i,
                    n,
                    o,
                    s = t.getElementById(e);
                  if (s) {
                    if ((i = s.getAttributeNode("id")) && i.value === e)
                      return [s];
                    for (o = t.getElementsByName(e), n = 0; (s = o[n++]); )
                      if ((i = s.getAttributeNode("id")) && i.value === e)
                        return [s];
                  }
                  return [];
                }
              })),
          (n.find.TAG = function (e, t) {
            return void 0 !== t.getElementsByTagName
              ? t.getElementsByTagName(e)
              : t.querySelectorAll(e);
          }),
          (n.find.CLASS = function (e, t) {
            if (void 0 !== t.getElementsByClassName && h)
              return t.getElementsByClassName(e);
          }),
          (f = []),
          ie(function (e) {
            var t;
            (u.appendChild(e).innerHTML =
              "<a id='" +
              v +
              "' href='' disabled='disabled'></a><select id='" +
              v +
              "-\r\\' disabled='disabled'><option selected=''></option></select>"),
              e.querySelectorAll("[selected]").length ||
                f.push("\\[" + M + "*(?:value|" + j + ")"),
              e.querySelectorAll("[id~=" + v + "-]").length || f.push("~="),
              e.querySelectorAll("a#" + v + "+*").length || f.push(".#.+[+~]"),
              e.querySelectorAll(":checked").length || f.push(":checked"),
              (t = c.createElement("input")).setAttribute("type", "hidden"),
              e.appendChild(t).setAttribute("name", "D"),
              (u.appendChild(e).disabled = !0),
              2 !== e.querySelectorAll(":disabled").length &&
                f.push(":enabled", ":disabled"),
              (t = c.createElement("input")).setAttribute("name", ""),
              e.appendChild(t),
              e.querySelectorAll("[name='']").length ||
                f.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")");
          }),
          p.cssHas || f.push(":has"),
          (f = f.length && new RegExp(f.join("|"))),
          (L = function (e, t) {
            if (e === t) return (l = !0), 0;
            var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
            return (
              i ||
              (1 &
                (i =
                  (e.ownerDocument || e) == (t.ownerDocument || t)
                    ? e.compareDocumentPosition(t)
                    : 1) ||
              (!p.sortDetached && t.compareDocumentPosition(e) === i)
                ? e === c || (e.ownerDocument == F && Q.contains(F, e))
                  ? -1
                  : t === c || (t.ownerDocument == F && Q.contains(F, t))
                  ? 1
                  : r
                  ? a.call(r, e) - a.call(r, t)
                  : 0
                : 4 & i
                ? -1
                : 1)
            );
          })),
        c
      );
    }
    for (t in ((Q.matches = function (e, t) {
      return Q(e, null, null, t);
    }),
    (Q.matchesSelector = function (e, t) {
      if ((le(e), h && !O[t + " "] && (!f || !f.test(t))))
        try {
          var i = g.call(e, t);
          if (
            i ||
            p.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return i;
        } catch (e) {
          O(t, !0);
        }
      return 0 < Q(t, c, null, [e]).length;
    }),
    (Q.contains = function (e, t) {
      return (e.ownerDocument || e) != c && le(e), S.contains(e, t);
    }),
    (Q.attr = function (e, t) {
      (e.ownerDocument || e) != c && le(e);
      var i = n.attrHandle[t.toLowerCase()],
        o = i && d.call(n.attrHandle, t.toLowerCase()) ? i(e, t, !h) : void 0;
      return void 0 !== o ? o : e.getAttribute(t);
    }),
    (Q.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (S.uniqueSort = function (e) {
      var t,
        i = [],
        n = 0,
        s = 0;
      if (
        ((l = !p.sortStable),
        (r = !p.sortStable && o.call(e, 0)),
        E.call(e, L),
        l)
      ) {
        for (; (t = e[s++]); ) t === e[s] && (n = i.push(s));
        for (; n--; ) P.call(e, i[n], 1);
      }
      return (r = null), e;
    }),
    (S.fn.uniqueSort = function () {
      return this.pushStack(S.uniqueSort(o.apply(this)));
    }),
    ((n = S.expr =
      {
        cacheLength: 50,
        createPseudo: te,
        match: W,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(G, Z)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(G, Z)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || Q.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && Q.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              i = !e[6] && e[2];
            return W.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : i &&
                    q.test(i) &&
                    (t = de(i, !0)) &&
                    (t = i.indexOf(")", i.length - t) - i.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(G, Z).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return C(e, t);
                };
          },
          CLASS: function (e) {
            var t = w[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                w(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, i) {
            return function (n) {
              var o = Q.attr(n, e);
              return null == o
                ? "!=" === t
                : !t ||
                    ((o += ""),
                    "=" === t
                      ? o === i
                      : "!=" === t
                      ? o !== i
                      : "^=" === t
                      ? i && 0 === o.indexOf(i)
                      : "*=" === t
                      ? i && -1 < o.indexOf(i)
                      : "$=" === t
                      ? i && o.slice(-i.length) === i
                      : "~=" === t
                      ? -1 < (" " + o.replace(R, " ") + " ").indexOf(i)
                      : "|=" === t &&
                        (o === i || o.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (e, t, i, n, o) {
            var s = "nth" !== e.slice(0, 3),
              r = "last" !== e.slice(-4),
              a = "of-type" === t;
            return 1 === n && 0 === o
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, i, l) {
                  var c,
                    d,
                    u,
                    h,
                    p,
                    f = s !== r ? "nextSibling" : "previousSibling",
                    g = t.parentNode,
                    m = a && t.nodeName.toLowerCase(),
                    y = !l && !a,
                    w = !1;
                  if (g) {
                    if (s) {
                      for (; f; ) {
                        for (u = t; (u = u[f]); )
                          if (a ? C(u, m) : 1 === u.nodeType) return !1;
                        p = f = "only" === e && !p && "nextSibling";
                      }
                      return !0;
                    }
                    if (((p = [r ? g.firstChild : g.lastChild]), r && y)) {
                      for (
                        w =
                          (h =
                            (c = (d = g[v] || (g[v] = {}))[e] || [])[0] === b &&
                            c[1]) && c[2],
                          u = h && g.childNodes[h];
                        (u = (++h && u && u[f]) || (w = h = 0) || p.pop());

                      )
                        if (1 === u.nodeType && ++w && u === t) {
                          d[e] = [b, h, w];
                          break;
                        }
                    } else if (
                      (y &&
                        (w = h =
                          (c = (d = t[v] || (t[v] = {}))[e] || [])[0] === b &&
                          c[1]),
                      !1 === w)
                    )
                      for (
                        ;
                        (u = (++h && u && u[f]) || (w = h = 0) || p.pop()) &&
                        (!(a ? C(u, m) : 1 === u.nodeType) ||
                          !++w ||
                          (y && ((d = u[v] || (u[v] = {}))[e] = [b, w]),
                          u !== t));

                      );
                    return (w -= o) === n || (w % n == 0 && 0 <= w / n);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var i,
              o =
                n.pseudos[e] ||
                n.setFilters[e.toLowerCase()] ||
                Q.error("unsupported pseudo: " + e);
            return o[v]
              ? o(t)
              : 1 < o.length
              ? ((i = [e, e, "", t]),
                n.setFilters.hasOwnProperty(e.toLowerCase())
                  ? te(function (e, i) {
                      for (var n, s = o(e, t), r = s.length; r--; )
                        e[(n = a.call(e, s[r]))] = !(i[n] = s[r]);
                    })
                  : function (e) {
                      return o(e, 0, i);
                    })
              : o;
          },
        },
        pseudos: {
          not: te(function (e) {
            var t = [],
              i = [],
              n = ve(e.replace(A, "$1"));
            return n[v]
              ? te(function (e, t, i, o) {
                  for (var s, r = n(e, null, o, []), a = e.length; a--; )
                    (s = r[a]) && (e[a] = !(t[a] = s));
                })
              : function (e, o, s) {
                  return (t[0] = e), n(t, null, s, i), (t[0] = null), !i.pop();
                };
          }),
          has: te(function (e) {
            return function (t) {
              return 0 < Q(e, t).length;
            };
          }),
          contains: te(function (e) {
            return (
              (e = e.replace(G, Z)),
              function (t) {
                return -1 < (t.textContent || S.text(t)).indexOf(e);
              }
            );
          }),
          lang: te(function (e) {
            return (
              B.test(e || "") || Q.error("unsupported lang: " + e),
              (e = e.replace(G, Z).toLowerCase()),
              function (t) {
                var i;
                do {
                  if (
                    (i = h
                      ? t.lang
                      : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                  )
                    return (
                      (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                    );
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function (e) {
            return e === u;
          },
          focus: function (e) {
            return (
              e ===
                (function () {
                  try {
                    return c.activeElement;
                  } catch (e) {}
                })() &&
              c.hasFocus() &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: se(!1),
          disabled: se(!0),
          checked: function (e) {
            return (
              (C(e, "input") && !!e.checked) || (C(e, "option") && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !n.pseudos.empty(e);
          },
          header: function (e) {
            return V.test(e.nodeName);
          },
          input: function (e) {
            return X.test(e.nodeName);
          },
          button: function (e) {
            return (C(e, "input") && "button" === e.type) || C(e, "button");
          },
          text: function (e) {
            var t;
            return (
              C(e, "input") &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: re(function () {
            return [0];
          }),
          last: re(function (e, t) {
            return [t - 1];
          }),
          eq: re(function (e, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: re(function (e, t) {
            for (var i = 0; i < t; i += 2) e.push(i);
            return e;
          }),
          odd: re(function (e, t) {
            for (var i = 1; i < t; i += 2) e.push(i);
            return e;
          }),
          lt: re(function (e, t, i) {
            var n;
            for (n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; ) e.push(n);
            return e;
          }),
          gt: re(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
            return e;
          }),
        },
      }).pseudos.nth = n.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      n.pseudos[t] = ne(t);
    for (t in { submit: !0, reset: !0 }) n.pseudos[t] = oe(t);
    function ce() {}
    function de(e, t) {
      var i,
        o,
        s,
        r,
        a,
        l,
        c,
        d = x[e + " "];
      if (d) return t ? 0 : d.slice(0);
      for (a = e, l = [], c = n.preFilter; a; ) {
        for (r in ((i && !(o = H.exec(a))) ||
          (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
        (i = !1),
        (o = N.exec(a)) &&
          ((i = o.shift()),
          s.push({ value: i, type: o[0].replace(A, " ") }),
          (a = a.slice(i.length))),
        n.filter))
          !(o = W[r].exec(a)) ||
            (c[r] && !(o = c[r](o))) ||
            ((i = o.shift()),
            s.push({ value: i, type: r, matches: o }),
            (a = a.slice(i.length)));
        if (!i) break;
      }
      return t ? a.length : a ? Q.error(e) : x(e, l).slice(0);
    }
    function ue(e) {
      for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
      return n;
    }
    function he(e, t, i) {
      var n = t.dir,
        o = t.next,
        s = o || n,
        r = i && "parentNode" === s,
        a = y++;
      return t.first
        ? function (t, i, o) {
            for (; (t = t[n]); ) if (1 === t.nodeType || r) return e(t, i, o);
            return !1;
          }
        : function (t, i, l) {
            var c,
              d,
              u = [b, a];
            if (l) {
              for (; (t = t[n]); )
                if ((1 === t.nodeType || r) && e(t, i, l)) return !0;
            } else
              for (; (t = t[n]); )
                if (1 === t.nodeType || r)
                  if (((d = t[v] || (t[v] = {})), o && C(t, o))) t = t[n] || t;
                  else {
                    if ((c = d[s]) && c[0] === b && c[1] === a)
                      return (u[2] = c[2]);
                    if (((d[s] = u)[2] = e(t, i, l))) return !0;
                  }
            return !1;
          };
    }
    function pe(e) {
      return 1 < e.length
        ? function (t, i, n) {
            for (var o = e.length; o--; ) if (!e[o](t, i, n)) return !1;
            return !0;
          }
        : e[0];
    }
    function fe(e, t, i, n, o) {
      for (var s, r = [], a = 0, l = e.length, c = null != t; a < l; a++)
        (s = e[a]) && ((i && !i(s, n, o)) || (r.push(s), c && t.push(a)));
      return r;
    }
    function ge(e, t, i, n, o, s) {
      return (
        n && !n[v] && (n = ge(n)),
        o && !o[v] && (o = ge(o, s)),
        te(function (s, r, l, c) {
          var d,
            u,
            h,
            p,
            f = [],
            g = [],
            v = r.length,
            b =
              s ||
              (function (e, t, i) {
                for (var n = 0, o = t.length; n < o; n++) Q(e, t[n], i);
                return i;
              })(t || "*", l.nodeType ? [l] : l, []),
            y = !e || (!s && t) ? b : fe(b, f, e, l, c);
          if (
            (i ? i(y, (p = o || (s ? e : v || n) ? [] : r), l, c) : (p = y), n)
          )
            for (d = fe(p, g), n(d, [], l, c), u = d.length; u--; )
              (h = d[u]) && (p[g[u]] = !(y[g[u]] = h));
          if (s) {
            if (o || e) {
              if (o) {
                for (d = [], u = p.length; u--; )
                  (h = p[u]) && d.push((y[u] = h));
                o(null, (p = []), d, c);
              }
              for (u = p.length; u--; )
                (h = p[u]) &&
                  -1 < (d = o ? a.call(s, h) : f[u]) &&
                  (s[d] = !(r[d] = h));
            }
          } else (p = fe(p === r ? p.splice(v, p.length) : p)), o ? o(null, r, p, c) : m.apply(r, p);
        })
      );
    }
    function me(e) {
      for (
        var t,
          i,
          o,
          r = e.length,
          l = n.relative[e[0].type],
          c = l || n.relative[" "],
          d = l ? 1 : 0,
          u = he(
            function (e) {
              return e === t;
            },
            c,
            !0
          ),
          h = he(
            function (e) {
              return -1 < a.call(t, e);
            },
            c,
            !0
          ),
          p = [
            function (e, i, n) {
              var o =
                (!l && (n || i != s)) ||
                ((t = i).nodeType ? u(e, i, n) : h(e, i, n));
              return (t = null), o;
            },
          ];
        d < r;
        d++
      )
        if ((i = n.relative[e[d].type])) p = [he(pe(p), i)];
        else {
          if ((i = n.filter[e[d].type].apply(null, e[d].matches))[v]) {
            for (o = ++d; o < r && !n.relative[e[o].type]; o++);
            return ge(
              1 < d && pe(p),
              1 < d &&
                ue(
                  e
                    .slice(0, d - 1)
                    .concat({ value: " " === e[d - 2].type ? "*" : "" })
                ).replace(A, "$1"),
              i,
              d < o && me(e.slice(d, o)),
              o < r && me((e = e.slice(o))),
              o < r && ue(e)
            );
          }
          p.push(i);
        }
      return pe(p);
    }
    function ve(e, t) {
      var i,
        o,
        r,
        a,
        l,
        d,
        u = [],
        p = [],
        f = T[e + " "];
      if (!f) {
        for (t || (t = de(e)), i = t.length; i--; )
          (f = me(t[i]))[v] ? u.push(f) : p.push(f);
        (f = T(
          e,
          ((o = p),
          (a = 0 < (r = u).length),
          (l = 0 < o.length),
          (d = function (e, t, i, d, u) {
            var p,
              f,
              g,
              v = 0,
              y = "0",
              w = e && [],
              x = [],
              T = s,
              C = e || (l && n.find.TAG("*", u)),
              E = (b += null == T ? 1 : Math.random() || 0.1),
              P = C.length;
            for (
              u && (s = t == c || t || u);
              y !== P && null != (p = C[y]);
              y++
            ) {
              if (l && p) {
                for (
                  f = 0, t || p.ownerDocument == c || (le(p), (i = !h));
                  (g = o[f++]);

                )
                  if (g(p, t || c, i)) {
                    m.call(d, p);
                    break;
                  }
                u && (b = E);
              }
              a && ((p = !g && p) && v--, e && w.push(p));
            }
            if (((v += y), a && y !== v)) {
              for (f = 0; (g = r[f++]); ) g(w, x, t, i);
              if (e) {
                if (0 < v) for (; y--; ) w[y] || x[y] || (x[y] = k.call(d));
                x = fe(x);
              }
              m.apply(d, x),
                u && !e && 0 < x.length && 1 < v + r.length && S.uniqueSort(d);
            }
            return u && ((b = E), (s = T)), w;
          }),
          a ? te(d) : d)
        )).selector = e;
      }
      return f;
    }
    function be(e, t, i, o) {
      var s,
        r,
        a,
        l,
        c,
        d = "function" == typeof e && e,
        u = !o && de((e = d.selector || e));
      if (((i = i || []), 1 === u.length)) {
        if (
          2 < (r = u[0] = u[0].slice(0)).length &&
          "ID" === (a = r[0]).type &&
          9 === t.nodeType &&
          h &&
          n.relative[r[1].type]
        ) {
          if (!(t = (n.find.ID(a.matches[0].replace(G, Z), t) || [])[0]))
            return i;
          d && (t = t.parentNode), (e = e.slice(r.shift().value.length));
        }
        for (
          s = W.needsContext.test(e) ? 0 : r.length;
          s-- && ((a = r[s]), !n.relative[(l = a.type)]);

        )
          if (
            (c = n.find[l]) &&
            (o = c(
              a.matches[0].replace(G, Z),
              (U.test(r[0].type) && ae(t.parentNode)) || t
            ))
          ) {
            if ((r.splice(s, 1), !(e = o.length && ue(r))))
              return m.apply(i, o), i;
            break;
          }
      }
      return (
        (d || ve(e, u))(
          o,
          t,
          !h,
          i,
          !t || (U.test(e) && ae(t.parentNode)) || t
        ),
        i
      );
    }
    (ce.prototype = n.filters = n.pseudos),
      (n.setFilters = new ce()),
      (p.sortStable = v.split("").sort(L).join("") === v),
      le(),
      (p.sortDetached = ie(function (e) {
        return 1 & e.compareDocumentPosition(c.createElement("fieldset"));
      })),
      (S.find = Q),
      (S.expr[":"] = S.expr.pseudos),
      (S.unique = S.uniqueSort),
      (Q.compile = ve),
      (Q.select = be),
      (Q.setDocument = le),
      (Q.tokenize = de),
      (Q.escape = S.escapeSelector),
      (Q.getText = S.text),
      (Q.isXML = S.isXMLDoc),
      (Q.selectors = S.expr),
      (Q.support = S.support),
      (Q.uniqueSort = S.uniqueSort);
  })();
  var j = function (e, t, i) {
      for (var n = [], o = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (o && S(e).is(i)) break;
          n.push(e);
        }
      return n;
    },
    D = function (e, t) {
      for (var i = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && i.push(e);
      return i;
    },
    I = S.expr.match.needsContext,
    z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function R(e, t, i) {
    return f(t)
      ? S.grep(e, function (e, n) {
          return !!t.call(e, n, e) !== i;
        })
      : t.nodeType
      ? S.grep(e, function (e) {
          return (e === t) !== i;
        })
      : "string" != typeof t
      ? S.grep(e, function (e) {
          return -1 < a.call(t, e) !== i;
        })
      : S.filter(t, e, i);
  }
  (S.filter = function (e, t, i) {
    var n = t[0];
    return (
      i && (e = ":not(" + e + ")"),
      1 === t.length && 1 === n.nodeType
        ? S.find.matchesSelector(n, e)
          ? [n]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          i,
          n = this.length,
          o = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < n; t++) if (S.contains(o[t], this)) return !0;
            })
          );
        for (i = this.pushStack([]), t = 0; t < n; t++) S.find(e, o[t], i);
        return 1 < n ? S.uniqueSort(i) : i;
      },
      filter: function (e) {
        return this.pushStack(R(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(R(this, e || [], !0));
      },
      is: function (e) {
        return !!R(this, "string" == typeof e && I.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var H,
    N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, i) {
    var n, o;
    if (!e) return this;
    if (((i = i || H), "string" == typeof e)) {
      if (
        !(n =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : N.exec(e)) ||
        (!n[1] && t)
      )
        return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
      if (n[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)
          ),
          z.test(n[1]) && S.isPlainObject(t))
        )
          for (n in t) f(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this;
      }
      return (
        (o = m.getElementById(n[2])) && ((this[0] = o), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : f(e)
      ? void 0 !== i.ready
        ? i.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (H = S(m));
  var _ = /^(?:parents|prev(?:Until|All))/,
    q = { children: !0, contents: !0, next: !0, prev: !0 };
  function B(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        i = t.length;
      return this.filter(function () {
        for (var e = 0; e < i; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var i,
        n = 0,
        o = this.length,
        s = [],
        r = "string" != typeof e && S(e);
      if (!I.test(e))
        for (; n < o; n++)
          for (i = this[n]; i && i !== t; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (r
                ? -1 < r.index(i)
                : 1 === i.nodeType && S.find.matchesSelector(i, e))
            ) {
              s.push(i);
              break;
            }
      return this.pushStack(1 < s.length ? S.uniqueSort(s) : s);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? a.call(S(e), this[0])
          : a.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return j(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return j(e, "parentNode", i);
        },
        next: function (e) {
          return B(e, "nextSibling");
        },
        prev: function (e) {
          return B(e, "previousSibling");
        },
        nextAll: function (e) {
          return j(e, "nextSibling");
        },
        prevAll: function (e) {
          return j(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return j(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return j(e, "previousSibling", i);
        },
        siblings: function (e) {
          return D((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return D(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && n(e.contentDocument)
            ? e.contentDocument
            : (C(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (e, t) {
        S.fn[e] = function (i, n) {
          var o = S.map(this, t, i);
          return (
            "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (o = S.filter(n, o)),
            1 < this.length &&
              (q[e] || S.uniqueSort(o), _.test(e) && o.reverse()),
            this.pushStack(o)
          );
        };
      }
    );
  var W = /[^\x20\t\r\n\f]+/g;
  function X(e) {
    return e;
  }
  function V(e) {
    throw e;
  }
  function Y(e, t, i, n) {
    var o;
    try {
      e && f((o = e.promise))
        ? o.call(e).done(t).fail(i)
        : e && f((o = e.then))
        ? o.call(e, t, i)
        : t.apply(void 0, [e].slice(n));
    } catch (e) {
      i.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (e) {
    var t, i;
    e =
      "string" == typeof e
        ? ((t = e),
          (i = {}),
          S.each(t.match(W) || [], function (e, t) {
            i[t] = !0;
          }),
          i)
        : S.extend({}, e);
    var n,
      o,
      s,
      r,
      a = [],
      l = [],
      c = -1,
      d = function () {
        for (r = r || e.once, s = n = !0; l.length; c = -1)
          for (o = l.shift(); ++c < a.length; )
            !1 === a[c].apply(o[0], o[1]) &&
              e.stopOnFalse &&
              ((c = a.length), (o = !1));
        e.memory || (o = !1), (n = !1), r && (a = o ? [] : "");
      },
      u = {
        add: function () {
          return (
            a &&
              (o && !n && ((c = a.length - 1), l.push(o)),
              (function t(i) {
                S.each(i, function (i, n) {
                  f(n)
                    ? (e.unique && u.has(n)) || a.push(n)
                    : n && n.length && "string" !== y(n) && t(n);
                });
              })(arguments),
              o && !n && d()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              for (var i; -1 < (i = S.inArray(t, a, i)); )
                a.splice(i, 1), i <= c && c--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, a) : 0 < a.length;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (r = l = []), (a = o = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (r = l = []), o || n || (a = o = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (e, t) {
          return (
            r ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              l.push(t),
              n || d()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!s;
        },
      };
    return u;
  }),
    S.extend({
      Deferred: function (t) {
        var i = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          n = "pending",
          o = {
            state: function () {
              return n;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return o.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return S.Deferred(function (t) {
                S.each(i, function (i, n) {
                  var o = f(e[n[4]]) && e[n[4]];
                  s[n[1]](function () {
                    var e = o && o.apply(this, arguments);
                    e && f(e.promise)
                      ? e
                          .promise()
                          .progress(t.notify)
                          .done(t.resolve)
                          .fail(t.reject)
                      : t[n[0] + "With"](this, o ? [e] : arguments);
                  });
                }),
                  (e = null);
              }).promise();
            },
            then: function (t, n, o) {
              var s = 0;
              function r(t, i, n, o) {
                return function () {
                  var a = this,
                    l = arguments,
                    c = function () {
                      var e, c;
                      if (!(t < s)) {
                        if ((e = n.apply(a, l)) === i.promise())
                          throw new TypeError("Thenable self-resolution");
                        (c =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          f(c)
                            ? o
                              ? c.call(e, r(s, i, X, o), r(s, i, V, o))
                              : (s++,
                                c.call(
                                  e,
                                  r(s, i, X, o),
                                  r(s, i, V, o),
                                  r(s, i, X, i.notifyWith)
                                ))
                            : (n !== X && ((a = void 0), (l = [e])),
                              (o || i.resolveWith)(a, l));
                      }
                    },
                    d = o
                      ? c
                      : function () {
                          try {
                            c();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, d.error),
                              s <= t + 1 &&
                                (n !== V && ((a = void 0), (l = [e])),
                                i.rejectWith(a, l));
                          }
                        };
                  t
                    ? d()
                    : (S.Deferred.getErrorHook
                        ? (d.error = S.Deferred.getErrorHook())
                        : S.Deferred.getStackHook &&
                          (d.error = S.Deferred.getStackHook()),
                      e.setTimeout(d));
                };
              }
              return S.Deferred(function (e) {
                i[0][3].add(r(0, e, f(o) ? o : X, e.notifyWith)),
                  i[1][3].add(r(0, e, f(t) ? t : X)),
                  i[2][3].add(r(0, e, f(n) ? n : V));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, o) : o;
            },
          },
          s = {};
        return (
          S.each(i, function (e, t) {
            var r = t[2],
              a = t[5];
            (o[t[1]] = r.add),
              a &&
                r.add(
                  function () {
                    n = a;
                  },
                  i[3 - e][2].disable,
                  i[3 - e][3].disable,
                  i[0][2].lock,
                  i[0][3].lock
                ),
              r.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = r.fireWith);
          }),
          o.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function (e) {
        var t = arguments.length,
          i = t,
          n = Array(i),
          s = o.call(arguments),
          r = S.Deferred(),
          a = function (e) {
            return function (i) {
              (n[e] = this),
                (s[e] = 1 < arguments.length ? o.call(arguments) : i),
                --t || r.resolveWith(n, s);
            };
          };
        if (
          t <= 1 &&
          (Y(e, r.done(a(i)).resolve, r.reject, !t),
          "pending" === r.state() || f(s[i] && s[i].then))
        )
          return r.then();
        for (; i--; ) Y(s[i], a(i), r.reject);
        return r.promise();
      },
    });
  var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (t, i) {
    e.console &&
      e.console.warn &&
      t &&
      U.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i);
  }),
    (S.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var G = S.Deferred();
  function Z() {
    m.removeEventListener("DOMContentLoaded", Z),
      e.removeEventListener("load", Z),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      G.then(e).catch(function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          G.resolveWith(m, [S]);
      },
    }),
    (S.ready.then = G.then),
    "complete" === m.readyState ||
    ("loading" !== m.readyState && !m.documentElement.doScroll)
      ? e.setTimeout(S.ready)
      : (m.addEventListener("DOMContentLoaded", Z),
        e.addEventListener("load", Z));
  var K = function (e, t, i, n, o, s, r) {
      var a = 0,
        l = e.length,
        c = null == i;
      if ("object" === y(i))
        for (a in ((o = !0), i)) K(e, t, a, i[a], !0, s, r);
      else if (
        void 0 !== n &&
        ((o = !0),
        f(n) || (r = !0),
        c &&
          (r
            ? (t.call(e, n), (t = null))
            : ((c = t),
              (t = function (e, t, i) {
                return c.call(S(e), i);
              }))),
        t)
      )
        for (; a < l; a++) t(e[a], i, r ? n : n.call(e[a], a, t(e[a], i)));
      return o ? e : c ? t.call(e) : l ? t(e[0], i) : s;
    },
    J = /^-ms-/,
    Q = /-([a-z])/g;
  function ee(e, t) {
    return t.toUpperCase();
  }
  function te(e) {
    return e.replace(J, "ms-").replace(Q, ee);
  }
  var ie = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function ne() {
    this.expando = S.expando + ne.uid++;
  }
  (ne.uid = 1),
    (ne.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            ie(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, i) {
        var n,
          o = this.cache(e);
        if ("string" == typeof t) o[te(t)] = i;
        else for (n in t) o[te(n)] = t[n];
        return o;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][te(t)];
      },
      access: function (e, t, i) {
        return void 0 === t || (t && "string" == typeof t && void 0 === i)
          ? this.get(e, t)
          : (this.set(e, t, i), void 0 !== i ? i : t);
      },
      remove: function (e, t) {
        var i,
          n = e[this.expando];
        if (void 0 !== n) {
          if (void 0 !== t) {
            i = (t = Array.isArray(t)
              ? t.map(te)
              : (t = te(t)) in n
              ? [t]
              : t.match(W) || []).length;
            for (; i--; ) delete n[t[i]];
          }
          (void 0 === t || S.isEmptyObject(n)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var oe = new ne(),
    se = new ne(),
    re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ae = /[A-Z]/g;
  function le(e, t, i) {
    var n, o;
    if (void 0 === i && 1 === e.nodeType)
      if (
        ((n = "data-" + t.replace(ae, "-$&").toLowerCase()),
        "string" == typeof (i = e.getAttribute(n)))
      ) {
        try {
          i =
            "true" === (o = i) ||
            ("false" !== o &&
              ("null" === o
                ? null
                : o === +o + ""
                ? +o
                : re.test(o)
                ? JSON.parse(o)
                : o));
        } catch (e) {}
        se.set(e, t, i);
      } else i = void 0;
    return i;
  }
  S.extend({
    hasData: function (e) {
      return se.hasData(e) || oe.hasData(e);
    },
    data: function (e, t, i) {
      return se.access(e, t, i);
    },
    removeData: function (e, t) {
      se.remove(e, t);
    },
    _data: function (e, t, i) {
      return oe.access(e, t, i);
    },
    _removeData: function (e, t) {
      oe.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (e, t) {
        var i,
          n,
          o,
          s = this[0],
          r = s && s.attributes;
        if (void 0 === e) {
          if (
            this.length &&
            ((o = se.get(s)), 1 === s.nodeType && !oe.get(s, "hasDataAttrs"))
          ) {
            for (i = r.length; i--; )
              r[i] &&
                0 === (n = r[i].name).indexOf("data-") &&
                ((n = te(n.slice(5))), le(s, n, o[n]));
            oe.set(s, "hasDataAttrs", !0);
          }
          return o;
        }
        return "object" == typeof e
          ? this.each(function () {
              se.set(this, e);
            })
          : K(
              this,
              function (t) {
                var i;
                if (s && void 0 === t)
                  return void 0 !== (i = se.get(s, e)) ||
                    void 0 !== (i = le(s, e))
                    ? i
                    : void 0;
                this.each(function () {
                  se.set(this, e, t);
                });
              },
              null,
              t,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          se.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, i) {
        var n;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (n = oe.get(e, t)),
            i &&
              (!n || Array.isArray(i)
                ? (n = oe.access(e, t, S.makeArray(i)))
                : n.push(i)),
            n || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var i = S.queue(e, t),
          n = i.length,
          o = i.shift(),
          s = S._queueHooks(e, t);
        "inprogress" === o && ((o = i.shift()), n--),
          o &&
            ("fx" === t && i.unshift("inprogress"),
            delete s.stop,
            o.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              s
            )),
          !n && s && s.empty.fire();
      },
      _queueHooks: function (e, t) {
        var i = t + "queueHooks";
        return (
          oe.get(e, i) ||
          oe.access(e, i, {
            empty: S.Callbacks("once memory").add(function () {
              oe.remove(e, [t + "queue", i]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (e, t) {
        var i = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), i--),
          arguments.length < i
            ? S.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var i = S.queue(this, e, t);
                S._queueHooks(this, e),
                  "fx" === e && "inprogress" !== i[0] && S.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var i,
          n = 1,
          o = S.Deferred(),
          s = this,
          r = this.length,
          a = function () {
            --n || o.resolveWith(s, [s]);
          };
        for (
          "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
          r--;

        )
          (i = oe.get(s[r], e + "queueHooks")) &&
            i.empty &&
            (n++, i.empty.add(a));
        return a(), o.promise(t);
      },
    });
  var ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    de = new RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
    ue = ["Top", "Right", "Bottom", "Left"],
    he = m.documentElement,
    pe = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    fe = { composed: !0 };
  he.getRootNode &&
    (pe = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(fe) === e.ownerDocument
      );
    });
  var ge = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && pe(e) && "none" === S.css(e, "display"))
    );
  };
  function me(e, t, i, n) {
    var o,
      s,
      r = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      l = a(),
      c = (i && i[3]) || (S.cssNumber[t] ? "" : "px"),
      d =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== c && +l)) &&
        de.exec(S.css(e, t));
    if (d && d[3] !== c) {
      for (l /= 2, c = c || d[3], d = +l || 1; r--; )
        S.style(e, t, d + c),
          (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0),
          (d /= s);
      (d *= 2), S.style(e, t, d + c), (i = i || []);
    }
    return (
      i &&
        ((d = +d || +l || 0),
        (o = i[1] ? d + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = c), (n.start = d), (n.end = o))),
      o
    );
  }
  var ve = {};
  function be(e, t) {
    for (var i, n, o, s, r, a, l, c = [], d = 0, u = e.length; d < u; d++)
      (n = e[d]).style &&
        ((i = n.style.display),
        t
          ? ("none" === i &&
              ((c[d] = oe.get(n, "display") || null),
              c[d] || (n.style.display = "")),
            "" === n.style.display &&
              ge(n) &&
              (c[d] =
                ((l = r = s = void 0),
                (r = (o = n).ownerDocument),
                (a = o.nodeName),
                (l = ve[a]) ||
                  ((s = r.body.appendChild(r.createElement(a))),
                  (l = S.css(s, "display")),
                  s.parentNode.removeChild(s),
                  "none" === l && (l = "block"),
                  (ve[a] = l)))))
          : "none" !== i && ((c[d] = "none"), oe.set(n, "display", i)));
    for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return be(this, !0);
    },
    hide: function () {
      return be(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ge(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ye,
    we,
    xe = /^(?:checkbox|radio)$/i,
    Se = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    Te = /^$|^module$|\/(?:java|ecma)script/i;
  (ye = m.createDocumentFragment().appendChild(m.createElement("div"))),
    (we = m.createElement("input")).setAttribute("type", "radio"),
    we.setAttribute("checked", "checked"),
    we.setAttribute("name", "t"),
    ye.appendChild(we),
    (p.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ye.innerHTML = "<textarea>x</textarea>"),
    (p.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue),
    (ye.innerHTML = "<option></option>"),
    (p.option = !!ye.lastChild);
  var Ce = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ke(e, t) {
    var i;
    return (
      (i =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && C(e, t)) ? S.merge([e], i) : i
    );
  }
  function Ee(e, t) {
    for (var i = 0, n = e.length; i < n; i++)
      oe.set(e[i], "globalEval", !t || oe.get(t[i], "globalEval"));
  }
  (Ce.tbody = Ce.tfoot = Ce.colgroup = Ce.caption = Ce.thead),
    (Ce.th = Ce.td),
    p.option ||
      (Ce.optgroup = Ce.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var Pe = /<|&#?\w+;/;
  function Me(e, t, i, n, o) {
    for (
      var s,
        r,
        a,
        l,
        c,
        d,
        u = t.createDocumentFragment(),
        h = [],
        p = 0,
        f = e.length;
      p < f;
      p++
    )
      if ((s = e[p]) || 0 === s)
        if ("object" === y(s)) S.merge(h, s.nodeType ? [s] : s);
        else if (Pe.test(s)) {
          for (
            r = r || u.appendChild(t.createElement("div")),
              a = (Se.exec(s) || ["", ""])[1].toLowerCase(),
              l = Ce[a] || Ce._default,
              r.innerHTML = l[1] + S.htmlPrefilter(s) + l[2],
              d = l[0];
            d--;

          )
            r = r.lastChild;
          S.merge(h, r.childNodes), ((r = u.firstChild).textContent = "");
        } else h.push(t.createTextNode(s));
    for (u.textContent = "", p = 0; (s = h[p++]); )
      if (n && -1 < S.inArray(s, n)) o && o.push(s);
      else if (
        ((c = pe(s)), (r = ke(u.appendChild(s), "script")), c && Ee(r), i)
      )
        for (d = 0; (s = r[d++]); ) Te.test(s.type || "") && i.push(s);
    return u;
  }
  var Ae = /^([^.]*)(?:\.(.+)|)/;
  function Oe() {
    return !0;
  }
  function Le() {
    return !1;
  }
  function Fe(e, t, i, n, o, s) {
    var r, a;
    if ("object" == typeof t) {
      for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), t))
        Fe(e, a, i, n, t[a], s);
      return e;
    }
    if (
      (null == n && null == o
        ? ((o = i), (n = i = void 0))
        : null == o &&
          ("string" == typeof i
            ? ((o = n), (n = void 0))
            : ((o = n), (n = i), (i = void 0))),
      !1 === o)
    )
      o = Le;
    else if (!o) return e;
    return (
      1 === s &&
        ((r = o),
        ((o = function (e) {
          return S().off(e), r.apply(this, arguments);
        }).guid = r.guid || (r.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, o, n, i);
      })
    );
  }
  function $e(e, t, i) {
    i
      ? (oe.set(e, t, !1),
        S.event.add(e, t, {
          namespace: !1,
          handler: function (e) {
            var i,
              n = oe.get(this, t);
            if (1 & e.isTrigger && this[t]) {
              if (n)
                (S.event.special[t] || {}).delegateType && e.stopPropagation();
              else if (
                ((n = o.call(arguments)),
                oe.set(this, t, n),
                this[t](),
                (i = oe.get(this, t)),
                oe.set(this, t, !1),
                n !== i)
              )
                return e.stopImmediatePropagation(), e.preventDefault(), i;
            } else
              n &&
                (oe.set(this, t, S.event.trigger(n[0], n.slice(1), this)),
                e.stopPropagation(),
                (e.isImmediatePropagationStopped = Oe));
          },
        }))
      : void 0 === oe.get(e, t) && S.event.add(e, t, Oe);
  }
  (S.event = {
    global: {},
    add: function (e, t, i, n, o) {
      var s,
        r,
        a,
        l,
        c,
        d,
        u,
        h,
        p,
        f,
        g,
        m = oe.get(e);
      if (ie(e))
        for (
          i.handler && ((i = (s = i).handler), (o = s.selector)),
            o && S.find.matchesSelector(he, o),
            i.guid || (i.guid = S.guid++),
            (l = m.events) || (l = m.events = Object.create(null)),
            (r = m.handle) ||
              (r = m.handle =
                function (t) {
                  return void 0 !== S && S.event.triggered !== t.type
                    ? S.event.dispatch.apply(e, arguments)
                    : void 0;
                }),
            c = (t = (t || "").match(W) || [""]).length;
          c--;

        )
          (p = g = (a = Ae.exec(t[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p &&
              ((u = S.event.special[p] || {}),
              (p = (o ? u.delegateType : u.bindType) || p),
              (u = S.event.special[p] || {}),
              (d = S.extend(
                {
                  type: p,
                  origType: g,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: o,
                  needsContext: o && S.expr.match.needsContext.test(o),
                  namespace: f.join("."),
                },
                s
              )),
              (h = l[p]) ||
                (((h = l[p] = []).delegateCount = 0),
                (u.setup && !1 !== u.setup.call(e, n, f, r)) ||
                  (e.addEventListener && e.addEventListener(p, r))),
              u.add &&
                (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)),
              o ? h.splice(h.delegateCount++, 0, d) : h.push(d),
              (S.event.global[p] = !0));
    },
    remove: function (e, t, i, n, o) {
      var s,
        r,
        a,
        l,
        c,
        d,
        u,
        h,
        p,
        f,
        g,
        m = oe.hasData(e) && oe.get(e);
      if (m && (l = m.events)) {
        for (c = (t = (t || "").match(W) || [""]).length; c--; )
          if (
            ((p = g = (a = Ae.exec(t[c]) || [])[1]),
            (f = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              u = S.event.special[p] || {},
                h = l[(p = (n ? u.delegateType : u.bindType) || p)] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                r = s = h.length;
              s--;

            )
              (d = h[s]),
                (!o && g !== d.origType) ||
                  (i && i.guid !== d.guid) ||
                  (a && !a.test(d.namespace)) ||
                  (n && n !== d.selector && ("**" !== n || !d.selector)) ||
                  (h.splice(s, 1),
                  d.selector && h.delegateCount--,
                  u.remove && u.remove.call(e, d));
            r &&
              !h.length &&
              ((u.teardown && !1 !== u.teardown.call(e, f, m.handle)) ||
                S.removeEvent(e, p, m.handle),
              delete l[p]);
          } else for (p in l) S.event.remove(e, p + t[c], i, n, !0);
        S.isEmptyObject(l) && oe.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        i,
        n,
        o,
        s,
        r,
        a = new Array(arguments.length),
        l = S.event.fix(e),
        c = (oe.get(this, "events") || Object.create(null))[l.type] || [],
        d = S.event.special[l.type] || {};
      for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
      if (
        ((l.delegateTarget = this),
        !d.preDispatch || !1 !== d.preDispatch.call(this, l))
      ) {
        for (
          r = S.event.handlers.call(this, l, c), t = 0;
          (o = r[t++]) && !l.isPropagationStopped();

        )
          for (
            l.currentTarget = o.elem, i = 0;
            (s = o.handlers[i++]) && !l.isImmediatePropagationStopped();

          )
            (l.rnamespace &&
              !1 !== s.namespace &&
              !l.rnamespace.test(s.namespace)) ||
              ((l.handleObj = s),
              (l.data = s.data),
              void 0 !==
                (n = (
                  (S.event.special[s.origType] || {}).handle || s.handler
                ).apply(o.elem, a)) &&
                !1 === (l.result = n) &&
                (l.preventDefault(), l.stopPropagation()));
        return d.postDispatch && d.postDispatch.call(this, l), l.result;
      }
    },
    handlers: function (e, t) {
      var i,
        n,
        o,
        s,
        r,
        a = [],
        l = t.delegateCount,
        c = e.target;
      if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (s = [], r = {}, i = 0; i < l; i++)
              void 0 === r[(o = (n = t[i]).selector + " ")] &&
                (r[o] = n.needsContext
                  ? -1 < S(o, this).index(c)
                  : S.find(o, this, null, [c]).length),
                r[o] && s.push(n);
            s.length && a.push({ elem: c, handlers: s });
          }
      return (
        (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a
      );
    },
    addProp: function (e, t) {
      Object.defineProperty(S.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: f(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            xe.test(t.type) && t.click && C(t, "input") && $e(t, "click", !0),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            xe.test(t.type) && t.click && C(t, "input") && $e(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (xe.test(t.type) &&
              t.click &&
              C(t, "input") &&
              oe.get(t, "click")) ||
            C(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Oe
              : Le),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Le,
      isPropagationStopped: Le,
      isImmediatePropagationStopped: Le,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Oe),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Oe),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Oe),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      function i(e) {
        if (m.documentMode) {
          var i = oe.get(this, "handle"),
            n = S.event.fix(e);
          (n.type = "focusin" === e.type ? "focus" : "blur"),
            (n.isSimulated = !0),
            i(e),
            n.target === n.currentTarget && i(n);
        } else S.event.simulate(t, e.target, S.event.fix(e));
      }
      (S.event.special[e] = {
        setup: function () {
          var n;
          if (($e(this, e, !0), !m.documentMode)) return !1;
          (n = oe.get(this, t)) || this.addEventListener(t, i),
            oe.set(this, t, (n || 0) + 1);
        },
        trigger: function () {
          return $e(this, e), !0;
        },
        teardown: function () {
          var e;
          if (!m.documentMode) return !1;
          (e = oe.get(this, t) - 1)
            ? oe.set(this, t, e)
            : (this.removeEventListener(t, i), oe.remove(this, t));
        },
        _default: function (t) {
          return oe.get(t.target, e);
        },
        delegateType: t,
      }),
        (S.event.special[t] = {
          setup: function () {
            var n = this.ownerDocument || this.document || this,
              o = m.documentMode ? this : n,
              s = oe.get(o, t);
            s ||
              (m.documentMode
                ? this.addEventListener(t, i)
                : n.addEventListener(e, i, !0)),
              oe.set(o, t, (s || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this.document || this,
              o = m.documentMode ? this : n,
              s = oe.get(o, t) - 1;
            s
              ? oe.set(o, t, s)
              : (m.documentMode
                  ? this.removeEventListener(t, i)
                  : n.removeEventListener(e, i, !0),
                oe.remove(o, t));
          },
        });
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, t) {
        S.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var i,
              n = e.relatedTarget,
              o = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (e.type = t)),
              i
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, i, n) {
        return Fe(this, e, t, i, n);
      },
      one: function (e, t, i, n) {
        return Fe(this, e, t, i, n, 1);
      },
      off: function (e, t, i) {
        var n, o;
        if (e && e.preventDefault && e.handleObj)
          return (
            (n = e.handleObj),
            S(e.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (o in e) this.off(o, t, e[o]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
          !1 === i && (i = Le),
          this.each(function () {
            S.event.remove(this, e, i, t);
          })
        );
      },
    });
  var je = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ie = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function ze(e, t) {
    return (
      (C(e, "table") &&
        C(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Re(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Ne(e, t) {
    var i, n, o, s, r, a;
    if (1 === t.nodeType) {
      if (oe.hasData(e) && (a = oe.get(e).events))
        for (o in (oe.remove(t, "handle events"), a))
          for (i = 0, n = a[o].length; i < n; i++) S.event.add(t, o, a[o][i]);
      se.hasData(e) &&
        ((s = se.access(e)), (r = S.extend({}, s)), se.set(t, r));
    }
  }
  function _e(e, t, i, n) {
    t = s(t);
    var o,
      r,
      a,
      l,
      c,
      d,
      u = 0,
      h = e.length,
      g = h - 1,
      m = t[0],
      v = f(m);
    if (v || (1 < h && "string" == typeof m && !p.checkClone && De.test(m)))
      return e.each(function (o) {
        var s = e.eq(o);
        v && (t[0] = m.call(this, o, s.html())), _e(s, t, i, n);
      });
    if (
      h &&
      ((r = (o = Me(t, e[0].ownerDocument, !1, e, n)).firstChild),
      1 === o.childNodes.length && (o = r),
      r || n)
    ) {
      for (l = (a = S.map(ke(o, "script"), Re)).length; u < h; u++)
        (c = o),
          u !== g &&
            ((c = S.clone(c, !0, !0)), l && S.merge(a, ke(c, "script"))),
          i.call(e[u], c, u);
      if (l)
        for (d = a[a.length - 1].ownerDocument, S.map(a, He), u = 0; u < l; u++)
          (c = a[u]),
            Te.test(c.type || "") &&
              !oe.access(c, "globalEval") &&
              S.contains(d, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? S._evalUrl &&
                  !c.noModule &&
                  S._evalUrl(
                    c.src,
                    { nonce: c.nonce || c.getAttribute("nonce") },
                    d
                  )
                : b(c.textContent.replace(Ie, ""), c, d));
    }
    return e;
  }
  function qe(e, t, i) {
    for (var n, o = t ? S.filter(t, e) : e, s = 0; null != (n = o[s]); s++)
      i || 1 !== n.nodeType || S.cleanData(ke(n)),
        n.parentNode &&
          (i && pe(n) && Ee(ke(n, "script")), n.parentNode.removeChild(n));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, i) {
      var n,
        o,
        s,
        r,
        a,
        l,
        c,
        d = e.cloneNode(!0),
        u = pe(e);
      if (
        !(
          p.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (r = ke(d), n = 0, o = (s = ke(e)).length; n < o; n++)
          (a = s[n]),
            "input" === (c = (l = r[n]).nodeName.toLowerCase()) &&
            xe.test(a.type)
              ? (l.checked = a.checked)
              : ("input" !== c && "textarea" !== c) ||
                (l.defaultValue = a.defaultValue);
      if (t)
        if (i)
          for (s = s || ke(e), r = r || ke(d), n = 0, o = s.length; n < o; n++)
            Ne(s[n], r[n]);
        else Ne(e, d);
      return (
        0 < (r = ke(d, "script")).length && Ee(r, !u && ke(e, "script")), d
      );
    },
    cleanData: function (e) {
      for (var t, i, n, o = S.event.special, s = 0; void 0 !== (i = e[s]); s++)
        if (ie(i)) {
          if ((t = i[oe.expando])) {
            if (t.events)
              for (n in t.events)
                o[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
            i[oe.expando] = void 0;
          }
          i[se.expando] && (i[se.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return qe(this, e, !0);
      },
      remove: function (e) {
        return qe(this, e);
      },
      text: function (e) {
        return K(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return _e(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            ze(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return _e(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = ze(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return _e(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ke(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return K(
          this,
          function (e) {
            var t = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !je.test(e) &&
              !Ce[(Se.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; i < n; i++)
                  1 === (t = this[i] || {}).nodeType &&
                    (S.cleanData(ke(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return _e(
          this,
          arguments,
          function (t) {
            var i = this.parentNode;
            S.inArray(this, e) < 0 &&
              (S.cleanData(ke(this)), i && i.replaceChild(t, this));
          },
          e
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        S.fn[e] = function (e) {
          for (var i, n = [], o = S(e), s = o.length - 1, a = 0; a <= s; a++)
            (i = a === s ? this : this.clone(!0)),
              S(o[a])[t](i),
              r.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var Be = new RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
    We = /^--/,
    Xe = function (t) {
      var i = t.ownerDocument.defaultView;
      return (i && i.opener) || (i = e), i.getComputedStyle(t);
    },
    Ve = function (e, t, i) {
      var n,
        o,
        s = {};
      for (o in t) (s[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((n = i.call(e)), t)) e.style[o] = s[o];
      return n;
    },
    Ye = new RegExp(ue.join("|"), "i");
  function Ue(e, t, i) {
    var n,
      o,
      s,
      r,
      a = We.test(t),
      l = e.style;
    return (
      (i = i || Xe(e)) &&
        ((r = i.getPropertyValue(t) || i[t]),
        a && r && (r = r.replace(A, "$1") || void 0),
        "" !== r || pe(e) || (r = S.style(e, t)),
        !p.pixelBoxStyles() &&
          Be.test(r) &&
          Ye.test(t) &&
          ((n = l.width),
          (o = l.minWidth),
          (s = l.maxWidth),
          (l.minWidth = l.maxWidth = l.width = r),
          (r = i.width),
          (l.width = n),
          (l.minWidth = o),
          (l.maxWidth = s))),
      void 0 !== r ? r + "" : r
    );
  }
  function Ge(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (d) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (d.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          he.appendChild(c).appendChild(d);
        var t = e.getComputedStyle(d);
        (n = "1%" !== t.top),
          (l = 12 === i(t.marginLeft)),
          (d.style.right = "60%"),
          (r = 36 === i(t.right)),
          (o = 36 === i(t.width)),
          (d.style.position = "absolute"),
          (s = 12 === i(d.offsetWidth / 3)),
          he.removeChild(c),
          (d = null);
      }
    }
    function i(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      o,
      s,
      r,
      a,
      l,
      c = m.createElement("div"),
      d = m.createElement("div");
    d.style &&
      ((d.style.backgroundClip = "content-box"),
      (d.cloneNode(!0).style.backgroundClip = ""),
      (p.clearCloneStyle = "content-box" === d.style.backgroundClip),
      S.extend(p, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), r;
        },
        pixelPosition: function () {
          return t(), n;
        },
        reliableMarginLeft: function () {
          return t(), l;
        },
        scrollboxSize: function () {
          return t(), s;
        },
        reliableTrDimensions: function () {
          var t, i, n, o;
          return (
            null == a &&
              ((t = m.createElement("table")),
              (i = m.createElement("tr")),
              (n = m.createElement("div")),
              (t.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (i.style.cssText = "box-sizing:content-box;border:1px solid"),
              (i.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              he.appendChild(t).appendChild(i).appendChild(n),
              (o = e.getComputedStyle(i)),
              (a =
                parseInt(o.height, 10) +
                  parseInt(o.borderTopWidth, 10) +
                  parseInt(o.borderBottomWidth, 10) ===
                i.offsetHeight),
              he.removeChild(t)),
            a
          );
        },
      }));
  })();
  var Ze = ["Webkit", "Moz", "ms"],
    Ke = m.createElement("div").style,
    Je = {};
  function Qe(e) {
    return (
      S.cssProps[e] ||
      Je[e] ||
      (e in Ke
        ? e
        : (Je[e] =
            (function (e) {
              for (
                var t = e[0].toUpperCase() + e.slice(1), i = Ze.length;
                i--;

              )
                if ((e = Ze[i] + t) in Ke) return e;
            })(e) || e))
    );
  }
  var et = /^(none|table(?!-c[ea]).+)/,
    tt = { position: "absolute", visibility: "hidden", display: "block" },
    it = { letterSpacing: "0", fontWeight: "400" };
  function nt(e, t, i) {
    var n = de.exec(t);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
  }
  function ot(e, t, i, n, o, s) {
    var r = "width" === t ? 1 : 0,
      a = 0,
      l = 0,
      c = 0;
    if (i === (n ? "border" : "content")) return 0;
    for (; r < 4; r += 2)
      "margin" === i && (c += S.css(e, i + ue[r], !0, o)),
        n
          ? ("content" === i && (l -= S.css(e, "padding" + ue[r], !0, o)),
            "margin" !== i &&
              (l -= S.css(e, "border" + ue[r] + "Width", !0, o)))
          : ((l += S.css(e, "padding" + ue[r], !0, o)),
            "padding" !== i
              ? (l += S.css(e, "border" + ue[r] + "Width", !0, o))
              : (a += S.css(e, "border" + ue[r] + "Width", !0, o)));
    return (
      !n &&
        0 <= s &&
        (l +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - s - l - a - 0.5
            )
          ) || 0),
      l + c
    );
  }
  function st(e, t, i) {
    var n = Xe(e),
      o =
        (!p.boxSizingReliable() || i) &&
        "border-box" === S.css(e, "boxSizing", !1, n),
      s = o,
      r = Ue(e, t, n),
      a = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Be.test(r)) {
      if (!i) return r;
      r = "auto";
    }
    return (
      ((!p.boxSizingReliable() && o) ||
        (!p.reliableTrDimensions() && C(e, "tr")) ||
        "auto" === r ||
        (!parseFloat(r) && "inline" === S.css(e, "display", !1, n))) &&
        e.getClientRects().length &&
        ((o = "border-box" === S.css(e, "boxSizing", !1, n)),
        (s = a in e) && (r = e[a])),
      (r = parseFloat(r) || 0) +
        ot(e, t, i || (o ? "border" : "content"), s, n, r) +
        "px"
    );
  }
  function rt(e, t, i, n, o) {
    return new rt.prototype.init(e, t, i, n, o);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var i = Ue(e, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageSlice: !0,
      columnCount: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      scale: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
    },
    cssProps: {},
    style: function (e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
          s,
          r,
          a = te(t),
          l = We.test(t),
          c = e.style;
        if (
          (l || (t = Qe(a)), (r = S.cssHooks[t] || S.cssHooks[a]), void 0 === i)
        )
          return r && "get" in r && void 0 !== (o = r.get(e, !1, n)) ? o : c[t];
        "string" == (s = typeof i) &&
          (o = de.exec(i)) &&
          o[1] &&
          ((i = me(e, t, o)), (s = "number")),
          null != i &&
            i == i &&
            ("number" !== s ||
              l ||
              (i += (o && o[3]) || (S.cssNumber[a] ? "" : "px")),
            p.clearCloneStyle ||
              "" !== i ||
              0 !== t.indexOf("background") ||
              (c[t] = "inherit"),
            (r && "set" in r && void 0 === (i = r.set(e, i, n))) ||
              (l ? c.setProperty(t, i) : (c[t] = i)));
      }
    },
    css: function (e, t, i, n) {
      var o,
        s,
        r,
        a = te(t);
      return (
        We.test(t) || (t = Qe(a)),
        (r = S.cssHooks[t] || S.cssHooks[a]) &&
          "get" in r &&
          (o = r.get(e, !0, i)),
        void 0 === o && (o = Ue(e, t, n)),
        "normal" === o && t in it && (o = it[t]),
        "" === i || i
          ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o)
          : o
      );
    },
  }),
    S.each(["height", "width"], function (e, t) {
      S.cssHooks[t] = {
        get: function (e, i, n) {
          if (i)
            return !et.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? st(e, t, n)
              : Ve(e, tt, function () {
                  return st(e, t, n);
                });
        },
        set: function (e, i, n) {
          var o,
            s = Xe(e),
            r = !p.scrollboxSize() && "absolute" === s.position,
            a = (r || n) && "border-box" === S.css(e, "boxSizing", !1, s),
            l = n ? ot(e, t, n, a, s) : 0;
          return (
            a &&
              r &&
              (l -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] -
                  parseFloat(s[t]) -
                  ot(e, t, "border", !1, s) -
                  0.5
              )),
            l &&
              (o = de.exec(i)) &&
              "px" !== (o[3] || "px") &&
              ((e.style[t] = i), (i = S.css(e, t))),
            nt(0, i, l)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Ge(p.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Ue(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ve(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (S.cssHooks[e + t] = {
        expand: function (i) {
          for (
            var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i];
            n < 4;
            n++
          )
            o[e + ue[n] + t] = s[n] || s[n - 2] || s[0];
          return o;
        },
      }),
        "margin" !== e && (S.cssHooks[e + t].set = nt);
    }),
    S.fn.extend({
      css: function (e, t) {
        return K(
          this,
          function (e, t, i) {
            var n,
              o,
              s = {},
              r = 0;
            if (Array.isArray(t)) {
              for (n = Xe(e), o = t.length; r < o; r++)
                s[t[r]] = S.css(e, t[r], !1, n);
              return s;
            }
            return void 0 !== i ? S.style(e, t, i) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = rt).prototype = {
      constructor: rt,
      init: function (e, t, i, n, o, s) {
        (this.elem = e),
          (this.prop = i),
          (this.easing = o || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = s || (S.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var e = rt.propHooks[this.prop];
        return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          i = rt.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : rt.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = rt.prototype),
    ((rt.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = rt.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = rt.prototype.init),
    (S.fx.step = {});
  var at,
    lt,
    ct,
    dt,
    ut = /^(?:toggle|show|hide)$/,
    ht = /queueHooks$/;
  function pt() {
    lt &&
      (!1 === m.hidden && e.requestAnimationFrame
        ? e.requestAnimationFrame(pt)
        : e.setTimeout(pt, S.fx.interval),
      S.fx.tick());
  }
  function ft() {
    return (
      e.setTimeout(function () {
        at = void 0;
      }),
      (at = Date.now())
    );
  }
  function gt(e, t) {
    var i,
      n = 0,
      o = { height: e };
    for (t = t ? 1 : 0; n < 4; n += 2 - t)
      o["margin" + (i = ue[n])] = o["padding" + i] = e;
    return t && (o.opacity = o.width = e), o;
  }
  function mt(e, t, i) {
    for (
      var n,
        o = (vt.tweeners[t] || []).concat(vt.tweeners["*"]),
        s = 0,
        r = o.length;
      s < r;
      s++
    )
      if ((n = o[s].call(i, t, e))) return n;
  }
  function vt(e, t, i) {
    var n,
      o,
      s = 0,
      r = vt.prefilters.length,
      a = S.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (o) return !1;
        for (
          var t = at || ft(),
            i = Math.max(0, c.startTime + c.duration - t),
            n = 1 - (i / c.duration || 0),
            s = 0,
            r = c.tweens.length;
          s < r;
          s++
        )
          c.tweens[s].run(n);
        return (
          a.notifyWith(e, [c, n, i]),
          n < 1 && r
            ? i
            : (r || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
        );
      },
      c = a.promise({
        elem: e,
        props: S.extend({}, t),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: at || ft(),
        duration: i.duration,
        tweens: [],
        createTween: function (t, i) {
          var n = S.Tween(
            e,
            c.opts,
            t,
            i,
            c.opts.specialEasing[t] || c.opts.easing
          );
          return c.tweens.push(n), n;
        },
        stop: function (t) {
          var i = 0,
            n = t ? c.tweens.length : 0;
          if (o) return this;
          for (o = !0; i < n; i++) c.tweens[i].run(1);
          return (
            t
              ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t]))
              : a.rejectWith(e, [c, t]),
            this
          );
        },
      }),
      d = c.props;
    for (
      (function (e, t) {
        var i, n, o, s, r;
        for (i in e)
          if (
            ((o = t[(n = te(i))]),
            (s = e[i]),
            Array.isArray(s) && ((o = s[1]), (s = e[i] = s[0])),
            i !== n && ((e[n] = s), delete e[i]),
            (r = S.cssHooks[n]) && ("expand" in r))
          )
            for (i in ((s = r.expand(s)), delete e[n], s))
              (i in e) || ((e[i] = s[i]), (t[i] = o));
          else t[n] = o;
      })(d, c.opts.specialEasing);
      s < r;
      s++
    )
      if ((n = vt.prefilters[s].call(c, e, d, c.opts)))
        return (
          f(n.stop) &&
            (S._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(d, mt, c),
      f(c.opts.start) && c.opts.start.call(e, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      S.fx.timer(S.extend(l, { elem: e, anim: c, queue: c.opts.queue })),
      c
    );
  }
  (S.Animation = S.extend(vt, {
    tweeners: {
      "*": [
        function (e, t) {
          var i = this.createTween(e, t);
          return me(i.elem, e, de.exec(t), i), i;
        },
      ],
    },
    tweener: function (e, t) {
      f(e) ? ((t = e), (e = ["*"])) : (e = e.match(W));
      for (var i, n = 0, o = e.length; n < o; n++)
        (i = e[n]),
          (vt.tweeners[i] = vt.tweeners[i] || []),
          vt.tweeners[i].unshift(t);
    },
    prefilters: [
      function (e, t, i) {
        var n,
          o,
          s,
          r,
          a,
          l,
          c,
          d,
          u = "width" in t || "height" in t,
          h = this,
          p = {},
          f = e.style,
          g = e.nodeType && ge(e),
          m = oe.get(e, "fxshow");
        for (n in (i.queue ||
          (null == (r = S._queueHooks(e, "fx")).unqueued &&
            ((r.unqueued = 0),
            (a = r.empty.fire),
            (r.empty.fire = function () {
              r.unqueued || a();
            })),
          r.unqueued++,
          h.always(function () {
            h.always(function () {
              r.unqueued--, S.queue(e, "fx").length || r.empty.fire();
            });
          })),
        t))
          if (((o = t[n]), ut.test(o))) {
            if (
              (delete t[n],
              (s = s || "toggle" === o),
              o === (g ? "hide" : "show"))
            ) {
              if ("show" !== o || !m || void 0 === m[n]) continue;
              g = !0;
            }
            p[n] = (m && m[n]) || S.style(e, n);
          }
        if ((l = !S.isEmptyObject(t)) || !S.isEmptyObject(p))
          for (n in (u &&
            1 === e.nodeType &&
            ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
            null == (c = m && m.display) && (c = oe.get(e, "display")),
            "none" === (d = S.css(e, "display")) &&
              (c
                ? (d = c)
                : (be([e], !0),
                  (c = e.style.display || c),
                  (d = S.css(e, "display")),
                  be([e]))),
            ("inline" === d || ("inline-block" === d && null != c)) &&
              "none" === S.css(e, "float") &&
              (l ||
                (h.done(function () {
                  f.display = c;
                }),
                null == c && ((d = f.display), (c = "none" === d ? "" : d))),
              (f.display = "inline-block"))),
          i.overflow &&
            ((f.overflow = "hidden"),
            h.always(function () {
              (f.overflow = i.overflow[0]),
                (f.overflowX = i.overflow[1]),
                (f.overflowY = i.overflow[2]);
            })),
          (l = !1),
          p))
            l ||
              (m
                ? "hidden" in m && (g = m.hidden)
                : (m = oe.access(e, "fxshow", { display: c })),
              s && (m.hidden = !g),
              g && be([e], !0),
              h.done(function () {
                for (n in (g || be([e]), oe.remove(e, "fxshow"), p))
                  S.style(e, n, p[n]);
              })),
              (l = mt(g ? m[n] : 0, n, h)),
              n in m ||
                ((m[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, i) {
      var n =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: i || (!i && t) || (f(e) && e),
              duration: e,
              easing: (i && t) || (t && !f(t) && t),
            };
      return (
        S.fx.off
          ? (n.duration = 0)
          : "number" != typeof n.duration &&
            (n.duration in S.fx.speeds
              ? (n.duration = S.fx.speeds[n.duration])
              : (n.duration = S.fx.speeds._default)),
        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          f(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue);
        }),
        n
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, i, n) {
        return this.filter(ge)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, i, n);
      },
      animate: function (e, t, i, n) {
        var o = S.isEmptyObject(e),
          s = S.speed(t, i, n),
          r = function () {
            var t = vt(this, S.extend({}, e), s);
            (o || oe.get(this, "finish")) && t.stop(!0);
          };
        return (
          (r.finish = r),
          o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r)
        );
      },
      stop: function (e, t, i) {
        var n = function (e) {
          var t = e.stop;
          delete e.stop, t(i);
        };
        return (
          "string" != typeof e && ((i = t), (t = e), (e = void 0)),
          t && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              o = null != e && e + "queueHooks",
              s = S.timers,
              r = oe.get(this);
            if (o) r[o] && r[o].stop && n(r[o]);
            else for (o in r) r[o] && r[o].stop && ht.test(o) && n(r[o]);
            for (o = s.length; o--; )
              s[o].elem !== this ||
                (null != e && s[o].queue !== e) ||
                (s[o].anim.stop(i), (t = !1), s.splice(o, 1));
            (!t && i) || S.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              i = oe.get(this),
              n = i[e + "queue"],
              o = i[e + "queueHooks"],
              s = S.timers,
              r = n ? n.length : 0;
            for (
              i.finish = !0,
                S.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = s.length;
              t--;

            )
              s[t].elem === this &&
                s[t].queue === e &&
                (s[t].anim.stop(!0), s.splice(t, 1));
            for (t = 0; t < r; t++)
              n[t] && n[t].finish && n[t].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, t) {
      var i = S.fn[t];
      S.fn[t] = function (e, n, o) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(gt(t, !0), e, n, o);
      };
    }),
    S.each(
      {
        slideDown: gt("show"),
        slideUp: gt("hide"),
        slideToggle: gt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        S.fn[e] = function (e, i, n) {
          return this.animate(t, e, i, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        i = S.timers;
      for (at = Date.now(); t < i.length; t++)
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      i.length || S.fx.stop(), (at = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      lt || ((lt = !0), pt());
    }),
    (S.fx.stop = function () {
      lt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (t, i) {
      return (
        (t = (S.fx && S.fx.speeds[t]) || t),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var o = e.setTimeout(i, t);
          n.stop = function () {
            e.clearTimeout(o);
          };
        })
      );
    }),
    (ct = m.createElement("input")),
    (dt = m.createElement("select").appendChild(m.createElement("option"))),
    (ct.type = "checkbox"),
    (p.checkOn = "" !== ct.value),
    (p.optSelected = dt.selected),
    ((ct = m.createElement("input")).value = "t"),
    (ct.type = "radio"),
    (p.radioValue = "t" === ct.value);
  var bt,
    yt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return K(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, i) {
        var n,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return void 0 === e.getAttribute
            ? S.prop(e, t, i)
            : ((1 === s && S.isXMLDoc(e)) ||
                (o =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? bt : void 0)),
              void 0 !== i
                ? null === i
                  ? void S.removeAttr(e, t)
                  : o && "set" in o && void 0 !== (n = o.set(e, i, t))
                  ? n
                  : (e.setAttribute(t, i + ""), i)
                : o && "get" in o && null !== (n = o.get(e, t))
                ? n
                : null == (n = S.find.attr(e, t))
                ? void 0
                : n);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!p.radioValue && "radio" === t && C(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var i,
          n = 0,
          o = t && t.match(W);
        if (o && 1 === e.nodeType) for (; (i = o[n++]); ) e.removeAttribute(i);
      },
    }),
    (bt = {
      set: function (e, t, i) {
        return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = yt[t] || S.find.attr;
      yt[t] = function (e, t, n) {
        var o,
          s,
          r = t.toLowerCase();
        return (
          n ||
            ((s = yt[r]),
            (yt[r] = o),
            (o = null != i(e, t, n) ? r : null),
            (yt[r] = s)),
          o
        );
      };
    });
  var wt = /^(?:input|select|textarea|button)$/i,
    xt = /^(?:a|area)$/i;
  function St(e) {
    return (e.match(W) || []).join(" ");
  }
  function Tt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function Ct(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(W)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return K(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, i) {
        var n,
          o,
          s = e.nodeType;
        if (3 !== s && 8 !== s && 2 !== s)
          return (
            (1 === s && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (o = S.propHooks[t])),
            void 0 !== i
              ? o && "set" in o && void 0 !== (n = o.set(e, i, t))
                ? n
                : (e[t] = i)
              : o && "get" in o && null !== (n = o.get(e, t))
              ? n
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : wt.test(e.nodeName) || (xt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    p.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (e) {
        var t, i, n, o, s, r;
        return f(e)
          ? this.each(function (t) {
              S(this).addClass(e.call(this, t, Tt(this)));
            })
          : (t = Ct(e)).length
          ? this.each(function () {
              if (
                ((n = Tt(this)), (i = 1 === this.nodeType && " " + St(n) + " "))
              ) {
                for (s = 0; s < t.length; s++)
                  (o = t[s]), i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (r = St(i)), n !== r && this.setAttribute("class", r);
              }
            })
          : this;
      },
      removeClass: function (e) {
        var t, i, n, o, s, r;
        return f(e)
          ? this.each(function (t) {
              S(this).removeClass(e.call(this, t, Tt(this)));
            })
          : arguments.length
          ? (t = Ct(e)).length
            ? this.each(function () {
                if (
                  ((n = Tt(this)),
                  (i = 1 === this.nodeType && " " + St(n) + " "))
                ) {
                  for (s = 0; s < t.length; s++)
                    for (o = t[s]; -1 < i.indexOf(" " + o + " "); )
                      i = i.replace(" " + o + " ", " ");
                  (r = St(i)), n !== r && this.setAttribute("class", r);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (e, t) {
        var i,
          n,
          o,
          s,
          r = typeof e,
          a = "string" === r || Array.isArray(e);
        return f(e)
          ? this.each(function (i) {
              S(this).toggleClass(e.call(this, i, Tt(this), t), t);
            })
          : "boolean" == typeof t && a
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : ((i = Ct(e)),
            this.each(function () {
              if (a)
                for (s = S(this), o = 0; o < i.length; o++)
                  (n = i[o]), s.hasClass(n) ? s.removeClass(n) : s.addClass(n);
              else
                (void 0 !== e && "boolean" !== r) ||
                  ((n = Tt(this)) && oe.set(this, "__className__", n),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      n || !1 === e ? "" : oe.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          i,
          n = 0;
        for (t = " " + e + " "; (i = this[n++]); )
          if (1 === i.nodeType && -1 < (" " + St(Tt(i)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var kt = /\r/g;
  S.fn.extend({
    val: function (e) {
      var t,
        i,
        n,
        o = this[0];
      return arguments.length
        ? ((n = f(e)),
          this.each(function (i) {
            var o;
            1 === this.nodeType &&
              (null == (o = n ? e.call(this, i, S(this).val()) : e)
                ? (o = "")
                : "number" == typeof o
                ? (o += "")
                : Array.isArray(o) &&
                  (o = S.map(o, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, o, "value")) ||
                (this.value = o));
          }))
        : o
        ? (t = S.valHooks[o.type] || S.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (i = t.get(o, "value"))
          ? i
          : "string" == typeof (i = o.value)
          ? i.replace(kt, "")
          : null == i
          ? ""
          : i
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : St(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              i,
              n,
              o = e.options,
              s = e.selectedIndex,
              r = "select-one" === e.type,
              a = r ? null : [],
              l = r ? s + 1 : o.length;
            for (n = s < 0 ? l : r ? s : 0; n < l; n++)
              if (
                ((i = o[n]).selected || n === s) &&
                !i.disabled &&
                (!i.parentNode.disabled || !C(i.parentNode, "optgroup"))
              ) {
                if (((t = S(i).val()), r)) return t;
                a.push(t);
              }
            return a;
          },
          set: function (e, t) {
            for (
              var i, n, o = e.options, s = S.makeArray(t), r = o.length;
              r--;

            )
              ((n = o[r]).selected =
                -1 < S.inArray(S.valHooks.option.get(n), s)) && (i = !0);
            return i || (e.selectedIndex = -1), s;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        p.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Et = e.location,
    Pt = { guid: Date.now() },
    Mt = /\?/;
  S.parseXML = function (t) {
    var i, n;
    if (!t || "string" != typeof t) return null;
    try {
      i = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {}
    return (
      (n = i && i.getElementsByTagName("parsererror")[0]),
      (i && !n) ||
        S.error(
          "Invalid XML: " +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : t)
        ),
      i
    );
  };
  var At = /^(?:focusinfocus|focusoutblur)$/,
    Ot = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (t, i, n, o) {
      var s,
        r,
        a,
        l,
        c,
        u,
        h,
        p,
        v = [n || m],
        b = d.call(t, "type") ? t.type : t,
        y = d.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((r = p = a = n = n || m),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !At.test(b + S.event.triggered) &&
          (-1 < b.indexOf(".") && ((b = (y = b.split(".")).shift()), y.sort()),
          (c = b.indexOf(":") < 0 && "on" + b),
          ((t = t[S.expando]
            ? t
            : new S.Event(b, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = y.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = n),
          (i = null == i ? [t] : S.makeArray(i, [t])),
          (h = S.event.special[b] || {}),
          o || !h.trigger || !1 !== h.trigger.apply(n, i)))
      ) {
        if (!o && !h.noBubble && !g(n)) {
          for (
            l = h.delegateType || b, At.test(l + b) || (r = r.parentNode);
            r;
            r = r.parentNode
          )
            v.push(r), (a = r);
          a === (n.ownerDocument || m) &&
            v.push(a.defaultView || a.parentWindow || e);
        }
        for (s = 0; (r = v[s++]) && !t.isPropagationStopped(); )
          (p = r),
            (t.type = 1 < s ? l : h.bindType || b),
            (u =
              (oe.get(r, "events") || Object.create(null))[t.type] &&
              oe.get(r, "handle")) && u.apply(r, i),
            (u = c && r[c]) &&
              u.apply &&
              ie(r) &&
              ((t.result = u.apply(r, i)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = b),
          o ||
            t.isDefaultPrevented() ||
            (h._default && !1 !== h._default.apply(v.pop(), i)) ||
            !ie(n) ||
            (c &&
              f(n[b]) &&
              !g(n) &&
              ((a = n[c]) && (n[c] = null),
              (S.event.triggered = b),
              t.isPropagationStopped() && p.addEventListener(b, Ot),
              n[b](),
              t.isPropagationStopped() && p.removeEventListener(b, Ot),
              (S.event.triggered = void 0),
              a && (n[c] = a))),
          t.result
        );
      }
    },
    simulate: function (e, t, i) {
      var n = S.extend(new S.Event(), i, { type: e, isSimulated: !0 });
      S.event.trigger(n, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var i = this[0];
        if (i) return S.event.trigger(e, t, i, !0);
      },
    });
  var Lt = /\[\]$/,
    Ft = /\r?\n/g,
    $t = /^(?:submit|button|image|reset|file)$/i,
    jt = /^(?:input|select|textarea|keygen)/i;
  function Dt(e, t, i, n) {
    var o;
    if (Array.isArray(t))
      S.each(t, function (t, o) {
        i || Lt.test(e)
          ? n(e, o)
          : Dt(
              e + "[" + ("object" == typeof o && null != o ? t : "") + "]",
              o,
              i,
              n
            );
      });
    else if (i || "object" !== y(t)) n(e, t);
    else for (o in t) Dt(e + "[" + o + "]", t[o], i, n);
  }
  (S.param = function (e, t) {
    var i,
      n = [],
      o = function (e, t) {
        var i = f(t) ? t() : t;
        n[n.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        o(this.name, this.value);
      });
    else for (i in e) Dt(i, e[i], t, o);
    return n.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              jt.test(this.nodeName) &&
              !$t.test(e) &&
              (this.checked || !xe.test(e))
            );
          })
          .map(function (e, t) {
            var i = S(this).val();
            return null == i
              ? null
              : Array.isArray(i)
              ? S.map(i, function (e) {
                  return { name: t.name, value: e.replace(Ft, "\r\n") };
                })
              : { name: t.name, value: i.replace(Ft, "\r\n") };
          })
          .get();
      },
    });
  var It = /%20/g,
    zt = /#.*$/,
    Rt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Nt = /^(?:GET|HEAD)$/,
    _t = /^\/\//,
    qt = {},
    Bt = {},
    Wt = "*/".concat("*"),
    Xt = m.createElement("a");
  function Vt(e) {
    return function (t, i) {
      "string" != typeof t && ((i = t), (t = "*"));
      var n,
        o = 0,
        s = t.toLowerCase().match(W) || [];
      if (f(i))
        for (; (n = s[o++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (e[n] = e[n] || []).unshift(i))
            : (e[n] = e[n] || []).push(i);
    };
  }
  function Yt(e, t, i, n) {
    var o = {},
      s = e === Bt;
    function r(a) {
      var l;
      return (
        (o[a] = !0),
        S.each(e[a] || [], function (e, a) {
          var c = a(t, i, n);
          return "string" != typeof c || s || o[c]
            ? s
              ? !(l = c)
              : void 0
            : (t.dataTypes.unshift(c), r(c), !1);
        }),
        l
      );
    }
    return r(t.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function Ut(e, t) {
    var i,
      n,
      o = S.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
    return n && S.extend(!0, e, n), e;
  }
  (Xt.href = Et.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Et.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Et.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Wt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ut(Ut(e, S.ajaxSettings), t) : Ut(S.ajaxSettings, e);
      },
      ajaxPrefilter: Vt(qt),
      ajaxTransport: Vt(Bt),
      ajax: function (t, i) {
        "object" == typeof t && ((i = t), (t = void 0)), (i = i || {});
        var n,
          o,
          s,
          r,
          a,
          l,
          c,
          d,
          u,
          h,
          p = S.ajaxSetup({}, i),
          f = p.context || p,
          g = p.context && (f.nodeType || f.jquery) ? S(f) : S.event,
          v = S.Deferred(),
          b = S.Callbacks("once memory"),
          y = p.statusCode || {},
          w = {},
          x = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!r)
                  for (r = {}; (t = Ht.exec(s)); )
                    r[t[1].toLowerCase() + " "] = (
                      r[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                t = r[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return c ? s : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == c &&
                  ((e = x[e.toLowerCase()] = x[e.toLowerCase()] || e),
                  (w[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == c && (p.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) C.always(e[C.status]);
                else for (t in e) y[t] = [y[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || T;
              return n && n.abort(t), k(0, t), this;
            },
          };
        if (
          (v.promise(C),
          (p.url = ((t || p.url || Et.href) + "").replace(
            _t,
            Et.protocol + "//"
          )),
          (p.type = i.method || i.type || p.method || p.type),
          (p.dataTypes = (p.dataType || "*").toLowerCase().match(W) || [""]),
          null == p.crossDomain)
        ) {
          l = m.createElement("a");
          try {
            (l.href = p.url),
              (l.href = l.href),
              (p.crossDomain =
                Xt.protocol + "//" + Xt.host != l.protocol + "//" + l.host);
          } catch (t) {
            p.crossDomain = !0;
          }
        }
        if (
          (p.data &&
            p.processData &&
            "string" != typeof p.data &&
            (p.data = S.param(p.data, p.traditional)),
          Yt(qt, p, i, C),
          c)
        )
          return C;
        for (u in ((d = S.event && p.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (p.type = p.type.toUpperCase()),
        (p.hasContent = !Nt.test(p.type)),
        (o = p.url.replace(zt, "")),
        p.hasContent
          ? p.data &&
            p.processData &&
            0 ===
              (p.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (p.data = p.data.replace(It, "+"))
          : ((h = p.url.slice(o.length)),
            p.data &&
              (p.processData || "string" == typeof p.data) &&
              ((o += (Mt.test(o) ? "&" : "?") + p.data), delete p.data),
            !1 === p.cache &&
              ((o = o.replace(Rt, "$1")),
              (h = (Mt.test(o) ? "&" : "?") + "_=" + Pt.guid++ + h)),
            (p.url = o + h)),
        p.ifModified &&
          (S.lastModified[o] &&
            C.setRequestHeader("If-Modified-Since", S.lastModified[o]),
          S.etag[o] && C.setRequestHeader("If-None-Match", S.etag[o])),
        ((p.data && p.hasContent && !1 !== p.contentType) || i.contentType) &&
          C.setRequestHeader("Content-Type", p.contentType),
        C.setRequestHeader(
          "Accept",
          p.dataTypes[0] && p.accepts[p.dataTypes[0]]
            ? p.accepts[p.dataTypes[0]] +
                ("*" !== p.dataTypes[0] ? ", " + Wt + "; q=0.01" : "")
            : p.accepts["*"]
        ),
        p.headers))
          C.setRequestHeader(u, p.headers[u]);
        if (p.beforeSend && (!1 === p.beforeSend.call(f, C, p) || c))
          return C.abort();
        if (
          ((T = "abort"),
          b.add(p.complete),
          C.done(p.success),
          C.fail(p.error),
          (n = Yt(Bt, p, i, C)))
        ) {
          if (((C.readyState = 1), d && g.trigger("ajaxSend", [C, p]), c))
            return C;
          p.async &&
            0 < p.timeout &&
            (a = e.setTimeout(function () {
              C.abort("timeout");
            }, p.timeout));
          try {
            (c = !1), n.send(w, k);
          } catch (t) {
            if (c) throw t;
            k(-1, t);
          }
        } else k(-1, "No Transport");
        function k(t, i, r, l) {
          var u,
            h,
            m,
            w,
            x,
            T = i;
          c ||
            ((c = !0),
            a && e.clearTimeout(a),
            (n = void 0),
            (s = l || ""),
            (C.readyState = 0 < t ? 4 : 0),
            (u = (200 <= t && t < 300) || 304 === t),
            r &&
              (w = (function (e, t, i) {
                for (
                  var n, o, s, r, a = e.contents, l = e.dataTypes;
                  "*" === l[0];

                )
                  l.shift(),
                    void 0 === n &&
                      (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                  for (o in a)
                    if (a[o] && a[o].test(n)) {
                      l.unshift(o);
                      break;
                    }
                if (l[0] in i) s = l[0];
                else {
                  for (o in i) {
                    if (!l[0] || e.converters[o + " " + l[0]]) {
                      s = o;
                      break;
                    }
                    r || (r = o);
                  }
                  s = s || r;
                }
                if (s) return s !== l[0] && l.unshift(s), i[s];
              })(p, C, r)),
            !u &&
              -1 < S.inArray("script", p.dataTypes) &&
              S.inArray("json", p.dataTypes) < 0 &&
              (p.converters["text script"] = function () {}),
            (w = (function (e, t, i, n) {
              var o,
                s,
                r,
                a,
                l,
                c = {},
                d = e.dataTypes.slice();
              if (d[1])
                for (r in e.converters) c[r.toLowerCase()] = e.converters[r];
              for (s = d.shift(); s; )
                if (
                  (e.responseFields[s] && (i[e.responseFields[s]] = t),
                  !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (l = s),
                  (s = d.shift()))
                )
                  if ("*" === s) s = l;
                  else if ("*" !== l && l !== s) {
                    if (!(r = c[l + " " + s] || c["* " + s]))
                      for (o in c)
                        if (
                          (a = o.split(" "))[1] === s &&
                          (r = c[l + " " + a[0]] || c["* " + a[0]])
                        ) {
                          !0 === r
                            ? (r = c[o])
                            : !0 !== c[o] && ((s = a[0]), d.unshift(a[1]));
                          break;
                        }
                    if (!0 !== r)
                      if (r && e.throws) t = r(t);
                      else
                        try {
                          t = r(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: r
                              ? e
                              : "No conversion from " + l + " to " + s,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(p, w, C, u)),
            u
              ? (p.ifModified &&
                  ((x = C.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[o] = x),
                  (x = C.getResponseHeader("etag")) && (S.etag[o] = x)),
                204 === t || "HEAD" === p.type
                  ? (T = "nocontent")
                  : 304 === t
                  ? (T = "notmodified")
                  : ((T = w.state), (h = w.data), (u = !(m = w.error))))
              : ((m = T), (!t && T) || ((T = "error"), t < 0 && (t = 0))),
            (C.status = t),
            (C.statusText = (i || T) + ""),
            u ? v.resolveWith(f, [h, T, C]) : v.rejectWith(f, [C, T, m]),
            C.statusCode(y),
            (y = void 0),
            d && g.trigger(u ? "ajaxSuccess" : "ajaxError", [C, p, u ? h : m]),
            b.fireWith(f, [C, T]),
            d &&
              (g.trigger("ajaxComplete", [C, p]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return C;
      },
      getJSON: function (e, t, i) {
        return S.get(e, t, i, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, t) {
      S[t] = function (e, i, n, o) {
        return (
          f(i) && ((o = o || n), (n = i), (i = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: t, dataType: o, data: i, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, i) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, i);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (f(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return f(e)
          ? this.each(function (t) {
              S(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = S(this),
                i = t.contents();
              i.length ? i.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = f(e);
        return this.each(function (i) {
          S(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Gt = { 0: 200, 1223: 204 },
    Zt = S.ajaxSettings.xhr();
  (p.cors = !!Zt && "withCredentials" in Zt),
    (p.ajax = Zt = !!Zt),
    S.ajaxTransport(function (t) {
      var i, n;
      if (p.cors || (Zt && !t.crossDomain))
        return {
          send: function (o, s) {
            var r,
              a = t.xhr();
            if (
              (a.open(t.type, t.url, t.async, t.username, t.password),
              t.xhrFields)
            )
              for (r in t.xhrFields) a[r] = t.xhrFields[r];
            for (r in (t.mimeType &&
              a.overrideMimeType &&
              a.overrideMimeType(t.mimeType),
            t.crossDomain ||
              o["X-Requested-With"] ||
              (o["X-Requested-With"] = "XMLHttpRequest"),
            o))
              a.setRequestHeader(r, o[r]);
            (i = function (e) {
              return function () {
                i &&
                  ((i =
                    n =
                    a.onload =
                    a.onerror =
                    a.onabort =
                    a.ontimeout =
                    a.onreadystatechange =
                      null),
                  "abort" === e
                    ? a.abort()
                    : "error" === e
                    ? "number" != typeof a.status
                      ? s(0, "error")
                      : s(a.status, a.statusText)
                    : s(
                        Gt[a.status] || a.status,
                        a.statusText,
                        "text" !== (a.responseType || "text") ||
                          "string" != typeof a.responseText
                          ? { binary: a.response }
                          : { text: a.responseText },
                        a.getAllResponseHeaders()
                      ));
              };
            }),
              (a.onload = i()),
              (n = a.onerror = a.ontimeout = i("error")),
              void 0 !== a.onabort
                ? (a.onabort = n)
                : (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      e.setTimeout(function () {
                        i && n();
                      });
                  }),
              (i = i("abort"));
            try {
              a.send((t.hasContent && t.data) || null);
            } catch (o) {
              if (i) throw o;
            }
          },
          abort: function () {
            i && i();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (e) {
      var t, i;
      if (e.crossDomain || e.scriptAttrs)
        return {
          send: function (n, o) {
            (t = S("<script>")
              .attr(e.scriptAttrs || {})
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (i = function (e) {
                  t.remove(),
                    (i = null),
                    e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              m.head.appendChild(t[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Kt,
    Jt = [],
    Qt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Jt.pop() || S.expando + "_" + Pt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (t, i, n) {
      var o,
        s,
        r,
        a =
          !1 !== t.jsonp &&
          (Qt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 ===
                (t.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Qt.test(t.data) &&
              "data");
      if (a || "jsonp" === t.dataTypes[0])
        return (
          (o = t.jsonpCallback =
            f(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          a
            ? (t[a] = t[a].replace(Qt, "$1" + o))
            : !1 !== t.jsonp &&
              (t.url += (Mt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
          (t.converters["script json"] = function () {
            return r || S.error(o + " was not called"), r[0];
          }),
          (t.dataTypes[0] = "json"),
          (s = e[o]),
          (e[o] = function () {
            r = arguments;
          }),
          n.always(function () {
            void 0 === s ? S(e).removeProp(o) : (e[o] = s),
              t[o] && ((t.jsonpCallback = i.jsonpCallback), Jt.push(o)),
              r && f(s) && s(r[0]),
              (r = s = void 0);
          }),
          "script"
        );
    }),
    (p.createHTMLDocument =
      (((Kt = m.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Kt.childNodes.length)),
    (S.parseHTML = function (e, t, i) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((i = t), (t = !1)),
          t ||
            (p.createHTMLDocument
              ? (((n = (t =
                  m.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = m.location.href),
                t.head.appendChild(n))
              : (t = m)),
          (s = !i && []),
          (o = z.exec(e))
            ? [t.createElement(o[1])]
            : ((o = Me([e], t, s)),
              s && s.length && S(s).remove(),
              S.merge([], o.childNodes)));
      var n, o, s;
    }),
    (S.fn.load = function (e, t, i) {
      var n,
        o,
        s,
        r = this,
        a = e.indexOf(" ");
      return (
        -1 < a && ((n = St(e.slice(a))), (e = e.slice(0, a))),
        f(t)
          ? ((i = t), (t = void 0))
          : t && "object" == typeof t && (o = "POST"),
        0 < r.length &&
          S.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
            .done(function (e) {
              (s = arguments),
                r.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e);
            })
            .always(
              i &&
                function (e, t) {
                  r.each(function () {
                    i.apply(this, s || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (e) {
      return S.grep(S.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, i) {
        var n,
          o,
          s,
          r,
          a,
          l,
          c = S.css(e, "position"),
          d = S(e),
          u = {};
        "static" === c && (e.style.position = "relative"),
          (a = d.offset()),
          (s = S.css(e, "top")),
          (l = S.css(e, "left")),
          ("absolute" === c || "fixed" === c) && -1 < (s + l).indexOf("auto")
            ? ((r = (n = d.position()).top), (o = n.left))
            : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
          f(t) && (t = t.call(e, i, S.extend({}, a))),
          null != t.top && (u.top = t.top - a.top + r),
          null != t.left && (u.left = t.left - a.left + o),
          "using" in t ? t.using.call(e, u) : d.css(u);
      },
    }),
    S.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                S.offset.setOffset(this, e, t);
              });
        var t,
          i,
          n = this[0];
        return n
          ? n.getClientRects().length
            ? ((t = n.getBoundingClientRect()),
              (i = n.ownerDocument.defaultView),
              { top: t.top + i.pageYOffset, left: t.left + i.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            i,
            n = this[0],
            o = { top: 0, left: 0 };
          if ("fixed" === S.css(n, "position")) t = n.getBoundingClientRect();
          else {
            for (
              t = this.offset(),
                i = n.ownerDocument,
                e = n.offsetParent || i.documentElement;
              e &&
              (e === i.body || e === i.documentElement) &&
              "static" === S.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== n &&
              1 === e.nodeType &&
              (((o = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (o.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - o.top - S.css(n, "marginTop", !0),
            left: t.left - o.left - S.css(n, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var e = this.offsetParent;
            e && "static" === S.css(e, "position");

          )
            e = e.offsetParent;
          return e || he;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, t) {
        var i = "pageYOffset" === t;
        S.fn[e] = function (n) {
          return K(
            this,
            function (e, n, o) {
              var s;
              if (
                (g(e) ? (s = e) : 9 === e.nodeType && (s = e.defaultView),
                void 0 === o)
              )
                return s ? s[t] : e[n];
              s
                ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset)
                : (e[n] = o);
            },
            e,
            n,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, t) {
      S.cssHooks[t] = Ge(p.pixelPosition, function (e, i) {
        if (i)
          return (i = Ue(e, t)), Be.test(i) ? S(e).position()[t] + "px" : i;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (e, t) {
      S.each(
        { padding: "inner" + e, content: t, "": "outer" + e },
        function (i, n) {
          S.fn[n] = function (o, s) {
            var r = arguments.length && (i || "boolean" != typeof o),
              a = i || (!0 === o || !0 === s ? "margin" : "border");
            return K(
              this,
              function (t, i, o) {
                var s;
                return g(t)
                  ? 0 === n.indexOf("outer")
                    ? t["inner" + e]
                    : t.document.documentElement["client" + e]
                  : 9 === t.nodeType
                  ? ((s = t.documentElement),
                    Math.max(
                      t.body["scroll" + e],
                      s["scroll" + e],
                      t.body["offset" + e],
                      s["offset" + e],
                      s["client" + e]
                    ))
                  : void 0 === o
                  ? S.css(t, i, a)
                  : S.style(t, i, o, a);
              },
              t,
              r ? o : void 0,
              r
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function (e, t, i) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", i);
      },
      hover: function (e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        S.fn[t] = function (e, i) {
          return 0 < arguments.length
            ? this.on(t, null, e, i)
            : this.trigger(t);
        };
      }
    );
  var ei = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var i, n, s;
    if (("string" == typeof t && ((i = e[t]), (t = e), (e = i)), f(e)))
      return (
        (n = o.call(arguments, 2)),
        ((s = function () {
          return e.apply(t || this, n.concat(o.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        s
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = C),
    (S.isFunction = f),
    (S.isWindow = g),
    (S.camelCase = te),
    (S.type = y),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(ei, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var ti = e.jQuery,
    ii = e.$;
  return (
    (S.noConflict = function (t) {
      return e.$ === S && (e.$ = ii), t && e.jQuery === S && (e.jQuery = ti), S;
    }),
    void 0 === t && (e.jQuery = e.$ = S),
    S
  );
}),
  (function (e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "undefined" != typeof exports
      ? (module.exports = e(require("jquery")))
      : e(jQuery);
  })(function (e) {
    "use strict";
    var t = window.Slick || {};
    ((t = (function () {
      var t = 0;
      return function (i, n) {
        var o,
          s = this;
        (s.defaults = {
          accessibility: !0,
          adaptiveHeight: !1,
          appendArrows: e(i),
          appendDots: e(i),
          arrows: !0,
          asNavFor: null,
          prevArrow:
            '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
          nextArrow:
            '<button class="slick-next" aria-label="Next" type="button">Next</button>',
          autoplay: !1,
          autoplaySpeed: 3e3,
          centerMode: !1,
          centerPadding: "50px",
          cssEase: "ease",
          customPaging: function (t, i) {
            return e('<button type="button" />').text(i + 1);
          },
          dots: !1,
          dotsClass: "slick-dots",
          draggable: !0,
          easing: "linear",
          edgeFriction: 0.35,
          fade: !1,
          focusOnSelect: !1,
          focusOnChange: !1,
          infinite: !0,
          initialSlide: 0,
          lazyLoad: "ondemand",
          mobileFirst: !1,
          pauseOnHover: !0,
          pauseOnFocus: !0,
          pauseOnDotsHover: !1,
          respondTo: "window",
          responsive: null,
          rows: 1,
          rtl: !1,
          slide: "",
          slidesPerRow: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          swipe: !0,
          swipeToSlide: !1,
          touchMove: !0,
          touchThreshold: 5,
          useCSS: !0,
          useTransform: !0,
          variableWidth: !1,
          vertical: !1,
          verticalSwiping: !1,
          waitForAnimate: !0,
          zIndex: 1e3,
        }),
          (s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1,
          }),
          e.extend(s, s.initials),
          (s.activeBreakpoint = null),
          (s.animType = null),
          (s.animProp = null),
          (s.breakpoints = []),
          (s.breakpointSettings = []),
          (s.cssTransitions = !1),
          (s.focussed = !1),
          (s.interrupted = !1),
          (s.hidden = "hidden"),
          (s.paused = !0),
          (s.positionProp = null),
          (s.respondTo = null),
          (s.rowCount = 1),
          (s.shouldClick = !0),
          (s.$slider = e(i)),
          (s.$slidesCache = null),
          (s.transformType = null),
          (s.transitionType = null),
          (s.visibilityChange = "visibilitychange"),
          (s.windowWidth = 0),
          (s.windowTimer = null),
          (o = e(i).data("slick") || {}),
          (s.options = e.extend({}, s.defaults, n, o)),
          (s.currentSlide = s.options.initialSlide),
          (s.originalSettings = s.options),
          void 0 !== document.mozHidden
            ? ((s.hidden = "mozHidden"),
              (s.visibilityChange = "mozvisibilitychange"))
            : void 0 !== document.webkitHidden &&
              ((s.hidden = "webkitHidden"),
              (s.visibilityChange = "webkitvisibilitychange")),
          (s.autoPlay = e.proxy(s.autoPlay, s)),
          (s.autoPlayClear = e.proxy(s.autoPlayClear, s)),
          (s.autoPlayIterator = e.proxy(s.autoPlayIterator, s)),
          (s.changeSlide = e.proxy(s.changeSlide, s)),
          (s.clickHandler = e.proxy(s.clickHandler, s)),
          (s.selectHandler = e.proxy(s.selectHandler, s)),
          (s.setPosition = e.proxy(s.setPosition, s)),
          (s.swipeHandler = e.proxy(s.swipeHandler, s)),
          (s.dragHandler = e.proxy(s.dragHandler, s)),
          (s.keyHandler = e.proxy(s.keyHandler, s)),
          (s.instanceUid = t++),
          (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
          s.registerBreakpoints(),
          s.init(!0);
      };
    })()).prototype.activateADA = function () {
      this.$slideTrack
        .find(".slick-active")
        .attr({ "aria-hidden": "false" })
        .find("a, input, button, select")
        .attr({ tabindex: "0" });
    }),
      (t.prototype.addSlide = t.prototype.slickAdd =
        function (t, i, n) {
          var o = this;
          if ("boolean" == typeof i) (n = i), (i = null);
          else if (i < 0 || i >= o.slideCount) return !1;
          o.unload(),
            "number" == typeof i
              ? 0 === i && 0 === o.$slides.length
                ? e(t).appendTo(o.$slideTrack)
                : n
                ? e(t).insertBefore(o.$slides.eq(i))
                : e(t).insertAfter(o.$slides.eq(i))
              : !0 === n
              ? e(t).prependTo(o.$slideTrack)
              : e(t).appendTo(o.$slideTrack),
            (o.$slides = o.$slideTrack.children(this.options.slide)),
            o.$slideTrack.children(this.options.slide).detach(),
            o.$slideTrack.append(o.$slides),
            o.$slides.each(function (t, i) {
              e(i).attr("data-slick-index", t);
            }),
            (o.$slidesCache = o.$slides),
            o.reinit();
        }),
      (t.prototype.animateHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.animate({ height: t }, e.options.speed);
        }
      }),
      (t.prototype.animateSlide = function (t, i) {
        var n = {},
          o = this;
        o.animateHeight(),
          !0 === o.options.rtl && !1 === o.options.vertical && (t = -t),
          !1 === o.transformsEnabled
            ? !1 === o.options.vertical
              ? o.$slideTrack.animate(
                  { left: t },
                  o.options.speed,
                  o.options.easing,
                  i
                )
              : o.$slideTrack.animate(
                  { top: t },
                  o.options.speed,
                  o.options.easing,
                  i
                )
            : !1 === o.cssTransitions
            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
              e({ animStart: o.currentLeft }).animate(
                { animStart: t },
                {
                  duration: o.options.speed,
                  easing: o.options.easing,
                  step: function (e) {
                    (e = Math.ceil(e)),
                      !1 === o.options.vertical
                        ? ((n[o.animType] = "translate(" + e + "px, 0px)"),
                          o.$slideTrack.css(n))
                        : ((n[o.animType] = "translate(0px," + e + "px)"),
                          o.$slideTrack.css(n));
                  },
                  complete: function () {
                    i && i.call();
                  },
                }
              ))
            : (o.applyTransition(),
              (t = Math.ceil(t)),
              !1 === o.options.vertical
                ? (n[o.animType] = "translate3d(" + t + "px, 0px, 0px)")
                : (n[o.animType] = "translate3d(0px," + t + "px, 0px)"),
              o.$slideTrack.css(n),
              i &&
                setTimeout(function () {
                  o.disableTransition(), i.call();
                }, o.options.speed));
      }),
      (t.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = e(t).not(this.$slider)), t;
      }),
      (t.prototype.asNavFor = function (t) {
        var i = this.getNavTarget();
        null !== i &&
          "object" == typeof i &&
          i.each(function () {
            var i = e(this).slick("getSlick");
            i.unslicked || i.slideHandler(t, !0);
          });
      }),
      (t.prototype.applyTransition = function (e) {
        var t = this,
          i = {};
        !1 === t.options.fade
          ? (i[t.transitionType] =
              t.transformType +
              " " +
              t.options.speed +
              "ms " +
              t.options.cssEase)
          : (i[t.transitionType] =
              "opacity " + t.options.speed + "ms " + t.options.cssEase),
          !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }),
      (t.prototype.autoPlay = function () {
        var e = this;
        e.autoPlayClear(),
          e.slideCount > e.options.slidesToShow &&
            (e.autoPlayTimer = setInterval(
              e.autoPlayIterator,
              e.options.autoplaySpeed
            ));
      }),
      (t.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer);
      }),
      (t.prototype.autoPlayIterator = function () {
        var e = this,
          t = e.currentSlide + e.options.slidesToScroll;
        e.paused ||
          e.interrupted ||
          e.focussed ||
          (!1 === e.options.infinite &&
            (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1
              ? (e.direction = 0)
              : 0 === e.direction &&
                ((t = e.currentSlide - e.options.slidesToScroll),
                e.currentSlide - 1 == 0 && (e.direction = 1))),
          e.slideHandler(t));
      }),
      (t.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows &&
          ((t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow")),
          (t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow")),
          t.slideCount > t.options.slidesToShow
            ? (t.$prevArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.$nextArrow
                .removeClass("slick-hidden")
                .removeAttr("aria-hidden tabindex"),
              t.htmlExpr.test(t.options.prevArrow) &&
                t.$prevArrow.prependTo(t.options.appendArrows),
              t.htmlExpr.test(t.options.nextArrow) &&
                t.$nextArrow.appendTo(t.options.appendArrows),
              !0 !== t.options.infinite &&
                t.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"))
            : t.$prevArrow
                .add(t.$nextArrow)
                .addClass("slick-hidden")
                .attr({ "aria-disabled": "true", tabindex: "-1" }));
      }),
      (t.prototype.buildDots = function () {
        var t,
          i,
          n = this;
        if (!0 === n.options.dots) {
          for (
            n.$slider.addClass("slick-dotted"),
              i = e("<ul />").addClass(n.options.dotsClass),
              t = 0;
            t <= n.getDotCount();
            t += 1
          )
            i.append(
              e("<li />").append(n.options.customPaging.call(this, n, t))
            );
          (n.$dots = i.appendTo(n.options.appendDots)),
            n.$dots.find("li").first().addClass("slick-active");
        }
      }),
      (t.prototype.buildOut = function () {
        var t = this;
        (t.$slides = t.$slider
          .children(t.options.slide + ":not(.slick-cloned)")
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.$slides.each(function (t, i) {
            e(i)
              .attr("data-slick-index", t)
              .data("originalStyling", e(i).attr("style") || "");
          }),
          t.$slider.addClass("slick-slider"),
          (t.$slideTrack =
            0 === t.slideCount
              ? e('<div class="slick-track"/>').appendTo(t.$slider)
              : t.$slides.wrapAll('<div class="slick-track"/>').parent()),
          (t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent()),
          t.$slideTrack.css("opacity", 0),
          (!0 !== t.options.centerMode && !0 !== t.options.swipeToSlide) ||
            (t.options.slidesToScroll = 1),
          e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
          t.setupInfinite(),
          t.buildArrows(),
          t.buildDots(),
          t.updateDots(),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          !0 === t.options.draggable && t.$list.addClass("draggable");
      }),
      (t.prototype.buildRows = function () {
        var e,
          t,
          i,
          n,
          o,
          s,
          r,
          a = this;
        if (
          ((n = document.createDocumentFragment()),
          (s = a.$slider.children()),
          a.options.rows > 1)
        ) {
          for (
            r = a.options.slidesPerRow * a.options.rows,
              o = Math.ceil(s.length / r),
              e = 0;
            e < o;
            e++
          ) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
              var c = document.createElement("div");
              for (i = 0; i < a.options.slidesPerRow; i++) {
                var d = e * r + (t * a.options.slidesPerRow + i);
                s.get(d) && c.appendChild(s.get(d));
              }
              l.appendChild(c);
            }
            n.appendChild(l);
          }
          a.$slider.empty().append(n),
            a.$slider
              .children()
              .children()
              .children()
              .css({
                width: 100 / a.options.slidesPerRow + "%",
                display: "inline-block",
              });
        }
      }),
      (t.prototype.checkResponsive = function (t, i) {
        var n,
          o,
          s,
          r = this,
          a = !1,
          l = r.$slider.width(),
          c = window.innerWidth || e(window).width();
        if (
          ("window" === r.respondTo
            ? (s = c)
            : "slider" === r.respondTo
            ? (s = l)
            : "min" === r.respondTo && (s = Math.min(c, l)),
          r.options.responsive &&
            r.options.responsive.length &&
            null !== r.options.responsive)
        ) {
          for (n in ((o = null), r.breakpoints))
            r.breakpoints.hasOwnProperty(n) &&
              (!1 === r.originalSettings.mobileFirst
                ? s < r.breakpoints[n] && (o = r.breakpoints[n])
                : s > r.breakpoints[n] && (o = r.breakpoints[n]));
          null !== o
            ? null !== r.activeBreakpoint
              ? (o !== r.activeBreakpoint || i) &&
                ((r.activeBreakpoint = o),
                "unslick" === r.breakpointSettings[o]
                  ? r.unslick(o)
                  : ((r.options = e.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[o]
                    )),
                    !0 === t && (r.currentSlide = r.options.initialSlide),
                    r.refresh(t)),
                (a = o))
              : ((r.activeBreakpoint = o),
                "unslick" === r.breakpointSettings[o]
                  ? r.unslick(o)
                  : ((r.options = e.extend(
                      {},
                      r.originalSettings,
                      r.breakpointSettings[o]
                    )),
                    !0 === t && (r.currentSlide = r.options.initialSlide),
                    r.refresh(t)),
                (a = o))
            : null !== r.activeBreakpoint &&
              ((r.activeBreakpoint = null),
              (r.options = r.originalSettings),
              !0 === t && (r.currentSlide = r.options.initialSlide),
              r.refresh(t),
              (a = o)),
            t || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
        }
      }),
      (t.prototype.changeSlide = function (t, i) {
        var n,
          o,
          s = this,
          r = e(t.currentTarget);
        switch (
          (r.is("a") && t.preventDefault(),
          r.is("li") || (r = r.closest("li")),
          (n =
            s.slideCount % s.options.slidesToScroll != 0
              ? 0
              : (s.slideCount - s.currentSlide) % s.options.slidesToScroll),
          t.data.message)
        ) {
          case "previous":
            (o =
              0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide - o, !1, i);
            break;
          case "next":
            (o = 0 === n ? s.options.slidesToScroll : n),
              s.slideCount > s.options.slidesToShow &&
                s.slideHandler(s.currentSlide + o, !1, i);
            break;
          case "index":
            var a =
              0 === t.data.index
                ? 0
                : t.data.index || r.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(a), !1, i),
              r.children().trigger("focus");
            break;
          default:
            return;
        }
      }),
      (t.prototype.checkNavigable = function (e) {
        var t, i;
        if (((i = 0), e > (t = this.getNavigableIndexes())[t.length - 1]))
          e = t[t.length - 1];
        else
          for (var n in t) {
            if (e < t[n]) {
              e = i;
              break;
            }
            i = t[n];
          }
        return e;
      }),
      (t.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots &&
          null !== t.$dots &&
          (e("li", t.$dots)
            .off("click.slick", t.changeSlide)
            .off("mouseenter.slick", e.proxy(t.interrupt, t, !0))
            .off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
          !0 === t.options.accessibility &&
            t.$dots.off("keydown.slick", t.keyHandler)),
          t.$slider.off("focus.slick blur.slick"),
          !0 === t.options.arrows &&
            t.slideCount > t.options.slidesToShow &&
            (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
            t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
            !0 === t.options.accessibility &&
              (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
              t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
          t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
          t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
          t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
          t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
          t.$list.off("click.slick", t.clickHandler),
          e(document).off(t.visibilityChange, t.visibility),
          t.cleanUpSlideEvents(),
          !0 === t.options.accessibility &&
            t.$list.off("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().off("click.slick", t.selectHandler),
          e(window).off(
            "orientationchange.slick.slick-" + t.instanceUid,
            t.orientationChange
          ),
          e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
          e("[draggable!=true]", t.$slideTrack).off(
            "dragstart",
            t.preventDefault
          ),
          e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition);
      }),
      (t.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.cleanUpRows = function () {
        var e,
          t = this;
        t.options.rows > 1 &&
          ((e = t.$slides.children().children()).removeAttr("style"),
          t.$slider.empty().append(e));
      }),
      (t.prototype.clickHandler = function (e) {
        !1 === this.shouldClick &&
          (e.stopImmediatePropagation(),
          e.stopPropagation(),
          e.preventDefault());
      }),
      (t.prototype.destroy = function (t) {
        var i = this;
        i.autoPlayClear(),
          (i.touchObject = {}),
          i.cleanUpEvents(),
          e(".slick-cloned", i.$slider).detach(),
          i.$dots && i.$dots.remove(),
          i.$prevArrow &&
            i.$prevArrow.length &&
            (i.$prevArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
          i.$nextArrow &&
            i.$nextArrow.length &&
            (i.$nextArrow
              .removeClass("slick-disabled slick-arrow slick-hidden")
              .removeAttr("aria-hidden aria-disabled tabindex")
              .css("display", ""),
            i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
          i.$slides &&
            (i.$slides
              .removeClass(
                "slick-slide slick-active slick-center slick-visible slick-current"
              )
              .removeAttr("aria-hidden")
              .removeAttr("data-slick-index")
              .each(function () {
                e(this).attr("style", e(this).data("originalStyling"));
              }),
            i.$slideTrack.children(this.options.slide).detach(),
            i.$slideTrack.detach(),
            i.$list.detach(),
            i.$slider.append(i.$slides)),
          i.cleanUpRows(),
          i.$slider.removeClass("slick-slider"),
          i.$slider.removeClass("slick-initialized"),
          i.$slider.removeClass("slick-dotted"),
          (i.unslicked = !0),
          t || i.$slider.trigger("destroy", [i]);
      }),
      (t.prototype.disableTransition = function (e) {
        var t = this,
          i = {};
        (i[t.transitionType] = ""),
          !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i);
      }),
      (t.prototype.fadeSlide = function (e, t) {
        var i = this;
        !1 === i.cssTransitions
          ? (i.$slides.eq(e).css({ zIndex: i.options.zIndex }),
            i.$slides
              .eq(e)
              .animate({ opacity: 1 }, i.options.speed, i.options.easing, t))
          : (i.applyTransition(e),
            i.$slides.eq(e).css({ opacity: 1, zIndex: i.options.zIndex }),
            t &&
              setTimeout(function () {
                i.disableTransition(e), t.call();
              }, i.options.speed));
      }),
      (t.prototype.fadeSlideOut = function (e) {
        var t = this;
        !1 === t.cssTransitions
          ? t.$slides
              .eq(e)
              .animate(
                { opacity: 0, zIndex: t.options.zIndex - 2 },
                t.options.speed,
                t.options.easing
              )
          : (t.applyTransition(e),
            t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
      }),
      (t.prototype.filterSlides = t.prototype.slickFilter =
        function (e) {
          var t = this;
          null !== e &&
            ((t.$slidesCache = t.$slides),
            t.unload(),
            t.$slideTrack.children(this.options.slide).detach(),
            t.$slidesCache.filter(e).appendTo(t.$slideTrack),
            t.reinit());
        }),
      (t.prototype.focusHandler = function () {
        var t = this;
        t.$slider
          .off("focus.slick blur.slick")
          .on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var n = e(this);
            setTimeout(function () {
              t.options.pauseOnFocus &&
                ((t.focussed = n.is(":focus")), t.autoPlay());
            }, 0);
          });
      }),
      (t.prototype.getCurrent = t.prototype.slickCurrentSlide =
        function () {
          return this.currentSlide;
        }),
      (t.prototype.getDotCount = function () {
        var e = this,
          t = 0,
          i = 0,
          n = 0;
        if (!0 === e.options.infinite)
          if (e.slideCount <= e.options.slidesToShow) ++n;
          else
            for (; t < e.slideCount; )
              ++n,
                (t = i + e.options.slidesToScroll),
                (i +=
                  e.options.slidesToScroll <= e.options.slidesToShow
                    ? e.options.slidesToScroll
                    : e.options.slidesToShow);
        else if (!0 === e.options.centerMode) n = e.slideCount;
        else if (e.options.asNavFor)
          for (; t < e.slideCount; )
            ++n,
              (t = i + e.options.slidesToScroll),
              (i +=
                e.options.slidesToScroll <= e.options.slidesToShow
                  ? e.options.slidesToScroll
                  : e.options.slidesToShow);
        else
          n =
            1 +
            Math.ceil(
              (e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll
            );
        return n - 1;
      }),
      (t.prototype.getLeft = function (e) {
        var t,
          i,
          n,
          o,
          s = this,
          r = 0;
        return (
          (s.slideOffset = 0),
          (i = s.$slides.first().outerHeight(!0)),
          !0 === s.options.infinite
            ? (s.slideCount > s.options.slidesToShow &&
                ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                (o = -1),
                !0 === s.options.vertical &&
                  !0 === s.options.centerMode &&
                  (2 === s.options.slidesToShow
                    ? (o = -1.5)
                    : 1 === s.options.slidesToShow && (o = -2)),
                (r = i * s.options.slidesToShow * o)),
              s.slideCount % s.options.slidesToScroll != 0 &&
                e + s.options.slidesToScroll > s.slideCount &&
                s.slideCount > s.options.slidesToShow &&
                (e > s.slideCount
                  ? ((s.slideOffset =
                      (s.options.slidesToShow - (e - s.slideCount)) *
                      s.slideWidth *
                      -1),
                    (r =
                      (s.options.slidesToShow - (e - s.slideCount)) * i * -1))
                  : ((s.slideOffset =
                      (s.slideCount % s.options.slidesToScroll) *
                      s.slideWidth *
                      -1),
                    (r = (s.slideCount % s.options.slidesToScroll) * i * -1))))
            : e + s.options.slidesToShow > s.slideCount &&
              ((s.slideOffset =
                (e + s.options.slidesToShow - s.slideCount) * s.slideWidth),
              (r = (e + s.options.slidesToShow - s.slideCount) * i)),
          s.slideCount <= s.options.slidesToShow &&
            ((s.slideOffset = 0), (r = 0)),
          !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
            ? (s.slideOffset =
                (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 -
                (s.slideWidth * s.slideCount) / 2)
            : !0 === s.options.centerMode && !0 === s.options.infinite
            ? (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2) -
                s.slideWidth)
            : !0 === s.options.centerMode &&
              ((s.slideOffset = 0),
              (s.slideOffset +=
                s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
          (t =
            !1 === s.options.vertical
              ? e * s.slideWidth * -1 + s.slideOffset
              : e * i * -1 + r),
          !0 === s.options.variableWidth &&
            ((n =
              s.slideCount <= s.options.slidesToShow ||
              !1 === s.options.infinite
                ? s.$slideTrack.children(".slick-slide").eq(e)
                : s.$slideTrack
                    .children(".slick-slide")
                    .eq(e + s.options.slidesToShow)),
            (t =
              !0 === s.options.rtl
                ? n[0]
                  ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                  : 0
                : n[0]
                ? -1 * n[0].offsetLeft
                : 0),
            !0 === s.options.centerMode &&
              ((n =
                s.slideCount <= s.options.slidesToShow ||
                !1 === s.options.infinite
                  ? s.$slideTrack.children(".slick-slide").eq(e)
                  : s.$slideTrack
                      .children(".slick-slide")
                      .eq(e + s.options.slidesToShow + 1)),
              (t =
                !0 === s.options.rtl
                  ? n[0]
                    ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width())
                    : 0
                  : n[0]
                  ? -1 * n[0].offsetLeft
                  : 0),
              (t += (s.$list.width() - n.outerWidth()) / 2))),
          t
        );
      }),
      (t.prototype.getOption = t.prototype.slickGetOption =
        function (e) {
          return this.options[e];
        }),
      (t.prototype.getNavigableIndexes = function () {
        var e,
          t = this,
          i = 0,
          n = 0,
          o = [];
        for (
          !1 === t.options.infinite
            ? (e = t.slideCount)
            : ((i = -1 * t.options.slidesToScroll),
              (n = -1 * t.options.slidesToScroll),
              (e = 2 * t.slideCount));
          i < e;

        )
          o.push(i),
            (i = n + t.options.slidesToScroll),
            (n +=
              t.options.slidesToScroll <= t.options.slidesToShow
                ? t.options.slidesToScroll
                : t.options.slidesToShow);
        return o;
      }),
      (t.prototype.getSlick = function () {
        return this;
      }),
      (t.prototype.getSlideCount = function () {
        var t,
          i,
          n = this;
        return (
          (i =
            !0 === n.options.centerMode
              ? n.slideWidth * Math.floor(n.options.slidesToShow / 2)
              : 0),
          !0 === n.options.swipeToSlide
            ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
                if (s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft)
                  return (t = s), !1;
              }),
              Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1)
            : n.options.slidesToScroll
        );
      }),
      (t.prototype.goTo = t.prototype.slickGoTo =
        function (e, t) {
          this.changeSlide(
            { data: { message: "index", index: parseInt(e) } },
            t
          );
        }),
      (t.prototype.init = function (t) {
        var i = this;
        e(i.$slider).hasClass("slick-initialized") ||
          (e(i.$slider).addClass("slick-initialized"),
          i.buildRows(),
          i.buildOut(),
          i.setProps(),
          i.startLoad(),
          i.loadSlider(),
          i.initializeEvents(),
          i.updateArrows(),
          i.updateDots(),
          i.checkResponsive(!0),
          i.focusHandler()),
          t && i.$slider.trigger("init", [i]),
          !0 === i.options.accessibility && i.initADA(),
          i.options.autoplay && ((i.paused = !1), i.autoPlay());
      }),
      (t.prototype.initADA = function () {
        var t = this,
          i = Math.ceil(t.slideCount / t.options.slidesToShow),
          n = t.getNavigableIndexes().filter(function (e) {
            return e >= 0 && e < t.slideCount;
          });
        t.$slides
          .add(t.$slideTrack.find(".slick-cloned"))
          .attr({ "aria-hidden": "true", tabindex: "-1" })
          .find("a, input, button, select")
          .attr({ tabindex: "-1" }),
          null !== t.$dots &&
            (t.$slides
              .not(t.$slideTrack.find(".slick-cloned"))
              .each(function (i) {
                var o = n.indexOf(i);
                e(this).attr({
                  role: "tabpanel",
                  id: "slick-slide" + t.instanceUid + i,
                  tabindex: -1,
                }),
                  -1 !== o &&
                    e(this).attr({
                      "aria-describedby":
                        "slick-slide-control" + t.instanceUid + o,
                    });
              }),
            t.$dots
              .attr("role", "tablist")
              .find("li")
              .each(function (o) {
                var s = n[o];
                e(this).attr({ role: "presentation" }),
                  e(this)
                    .find("button")
                    .first()
                    .attr({
                      role: "tab",
                      id: "slick-slide-control" + t.instanceUid + o,
                      "aria-controls": "slick-slide" + t.instanceUid + s,
                      "aria-label": o + 1 + " of " + i,
                      "aria-selected": null,
                      tabindex: "-1",
                    });
              })
              .eq(t.currentSlide)
              .find("button")
              .attr({ "aria-selected": "true", tabindex: "0" })
              .end());
        for (var o = t.currentSlide, s = o + t.options.slidesToShow; o < s; o++)
          t.$slides.eq(o).attr("tabindex", 0);
        t.activateADA();
      }),
      (t.prototype.initArrowEvents = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow
            .off("click.slick")
            .on("click.slick", { message: "previous" }, e.changeSlide),
          e.$nextArrow
            .off("click.slick")
            .on("click.slick", { message: "next" }, e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow.on("keydown.slick", e.keyHandler),
            e.$nextArrow.on("keydown.slick", e.keyHandler)));
      }),
      (t.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots &&
          (e("li", t.$dots).on(
            "click.slick",
            { message: "index" },
            t.changeSlide
          ),
          !0 === t.options.accessibility &&
            t.$dots.on("keydown.slick", t.keyHandler)),
          !0 === t.options.dots &&
            !0 === t.options.pauseOnDotsHover &&
            e("li", t.$dots)
              .on("mouseenter.slick", e.proxy(t.interrupt, t, !0))
              .on("mouseleave.slick", e.proxy(t.interrupt, t, !1));
      }),
      (t.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover &&
          (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
          t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)));
      }),
      (t.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(),
          t.initDotEvents(),
          t.initSlideEvents(),
          t.$list.on(
            "touchstart.slick mousedown.slick",
            { action: "start" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchmove.slick mousemove.slick",
            { action: "move" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchend.slick mouseup.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on(
            "touchcancel.slick mouseleave.slick",
            { action: "end" },
            t.swipeHandler
          ),
          t.$list.on("click.slick", t.clickHandler),
          e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
          !0 === t.options.accessibility &&
            t.$list.on("keydown.slick", t.keyHandler),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          e(window).on(
            "orientationchange.slick.slick-" + t.instanceUid,
            e.proxy(t.orientationChange, t)
          ),
          e(window).on(
            "resize.slick.slick-" + t.instanceUid,
            e.proxy(t.resize, t)
          ),
          e("[draggable!=true]", t.$slideTrack).on(
            "dragstart",
            t.preventDefault
          ),
          e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
          e(t.setPosition);
      }),
      (t.prototype.initUI = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.show(), e.$nextArrow.show()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.show();
      }),
      (t.prototype.keyHandler = function (e) {
        var t = this;
        e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
          (37 === e.keyCode && !0 === t.options.accessibility
            ? t.changeSlide({
                data: { message: !0 === t.options.rtl ? "next" : "previous" },
              })
            : 39 === e.keyCode &&
              !0 === t.options.accessibility &&
              t.changeSlide({
                data: { message: !0 === t.options.rtl ? "previous" : "next" },
              }));
      }),
      (t.prototype.lazyLoad = function () {
        function t(t) {
          e("img[data-lazy]", t).each(function () {
            var t = e(this),
              i = e(this).attr("data-lazy"),
              n = e(this).attr("data-srcset"),
              o = e(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
              r = document.createElement("img");
            (r.onload = function () {
              t.animate({ opacity: 0 }, 100, function () {
                n && (t.attr("srcset", n), o && t.attr("sizes", o)),
                  t.attr("src", i).animate({ opacity: 1 }, 200, function () {
                    t.removeAttr(
                      "data-lazy data-srcset data-sizes"
                    ).removeClass("slick-loading");
                  }),
                  s.$slider.trigger("lazyLoaded", [s, t, i]);
              });
            }),
              (r.onerror = function () {
                t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                  s.$slider.trigger("lazyLoadError", [s, t, i]);
              }),
              (r.src = i);
          });
        }
        var i,
          n,
          o,
          s = this;
        if (
          (!0 === s.options.centerMode
            ? !0 === s.options.infinite
              ? (o =
                  (n = s.currentSlide + (s.options.slidesToShow / 2 + 1)) +
                  s.options.slidesToShow +
                  2)
              : ((n = Math.max(
                  0,
                  s.currentSlide - (s.options.slidesToShow / 2 + 1)
                )),
                (o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
            : ((n = s.options.infinite
                ? s.options.slidesToShow + s.currentSlide
                : s.currentSlide),
              (o = Math.ceil(n + s.options.slidesToShow)),
              !0 === s.options.fade &&
                (n > 0 && n--, o <= s.slideCount && o++)),
          (i = s.$slider.find(".slick-slide").slice(n, o)),
          "anticipated" === s.options.lazyLoad)
        )
          for (
            var r = n - 1, a = o, l = s.$slider.find(".slick-slide"), c = 0;
            c < s.options.slidesToScroll;
            c++
          )
            r < 0 && (r = s.slideCount - 1),
              (i = (i = i.add(l.eq(r))).add(l.eq(a))),
              r--,
              a++;
        t(i),
          s.slideCount <= s.options.slidesToShow
            ? t(s.$slider.find(".slick-slide"))
            : s.currentSlide >= s.slideCount - s.options.slidesToShow
            ? t(
                s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow)
              )
            : 0 === s.currentSlide &&
              t(
                s.$slider
                  .find(".slick-cloned")
                  .slice(-1 * s.options.slidesToShow)
              );
      }),
      (t.prototype.loadSlider = function () {
        var e = this;
        e.setPosition(),
          e.$slideTrack.css({ opacity: 1 }),
          e.$slider.removeClass("slick-loading"),
          e.initUI(),
          "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
      }),
      (t.prototype.next = t.prototype.slickNext =
        function () {
          this.changeSlide({ data: { message: "next" } });
        }),
      (t.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition();
      }),
      (t.prototype.pause = t.prototype.slickPause =
        function () {
          this.autoPlayClear(), (this.paused = !0);
        }),
      (t.prototype.play = t.prototype.slickPlay =
        function () {
          var e = this;
          e.autoPlay(),
            (e.options.autoplay = !0),
            (e.paused = !1),
            (e.focussed = !1),
            (e.interrupted = !1);
        }),
      (t.prototype.postSlide = function (t) {
        var i = this;
        i.unslicked ||
          (i.$slider.trigger("afterChange", [i, t]),
          (i.animating = !1),
          i.slideCount > i.options.slidesToShow && i.setPosition(),
          (i.swipeLeft = null),
          i.options.autoplay && i.autoPlay(),
          !0 === i.options.accessibility &&
            (i.initADA(),
            i.options.focusOnChange &&
              e(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
      }),
      (t.prototype.prev = t.prototype.slickPrev =
        function () {
          this.changeSlide({ data: { message: "previous" } });
        }),
      (t.prototype.preventDefault = function (e) {
        e.preventDefault();
      }),
      (t.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var i,
          n,
          o,
          s,
          r,
          a = this,
          l = e("img[data-lazy]", a.$slider);
        l.length
          ? ((i = l.first()),
            (n = i.attr("data-lazy")),
            (o = i.attr("data-srcset")),
            (s = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
            ((r = document.createElement("img")).onload = function () {
              o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                i
                  .attr("src", n)
                  .removeAttr("data-lazy data-srcset data-sizes")
                  .removeClass("slick-loading"),
                !0 === a.options.adaptiveHeight && a.setPosition(),
                a.$slider.trigger("lazyLoaded", [a, i, n]),
                a.progressiveLazyLoad();
            }),
            (r.onerror = function () {
              t < 3
                ? setTimeout(function () {
                    a.progressiveLazyLoad(t + 1);
                  }, 500)
                : (i
                    .removeAttr("data-lazy")
                    .removeClass("slick-loading")
                    .addClass("slick-lazyload-error"),
                  a.$slider.trigger("lazyLoadError", [a, i, n]),
                  a.progressiveLazyLoad());
            }),
            (r.src = n))
          : a.$slider.trigger("allImagesLoaded", [a]);
      }),
      (t.prototype.refresh = function (t) {
        var i,
          n,
          o = this;
        (n = o.slideCount - o.options.slidesToShow),
          !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
          o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
          (i = o.currentSlide),
          o.destroy(!0),
          e.extend(o, o.initials, { currentSlide: i }),
          o.init(),
          t || o.changeSlide({ data: { message: "index", index: i } }, !1);
      }),
      (t.prototype.registerBreakpoints = function () {
        var t,
          i,
          n,
          o = this,
          s = o.options.responsive || null;
        if ("array" === e.type(s) && s.length) {
          for (t in ((o.respondTo = o.options.respondTo || "window"), s))
            if (((n = o.breakpoints.length - 1), s.hasOwnProperty(t))) {
              for (i = s[t].breakpoint; n >= 0; )
                o.breakpoints[n] &&
                  o.breakpoints[n] === i &&
                  o.breakpoints.splice(n, 1),
                  n--;
              o.breakpoints.push(i), (o.breakpointSettings[i] = s[t].settings);
            }
          o.breakpoints.sort(function (e, t) {
            return o.options.mobileFirst ? e - t : t - e;
          });
        }
      }),
      (t.prototype.reinit = function () {
        var t = this;
        (t.$slides = t.$slideTrack
          .children(t.options.slide)
          .addClass("slick-slide")),
          (t.slideCount = t.$slides.length),
          t.currentSlide >= t.slideCount &&
            0 !== t.currentSlide &&
            (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
          t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
          t.registerBreakpoints(),
          t.setProps(),
          t.setupInfinite(),
          t.buildArrows(),
          t.updateArrows(),
          t.initArrowEvents(),
          t.buildDots(),
          t.updateDots(),
          t.initDotEvents(),
          t.cleanUpSlideEvents(),
          t.initSlideEvents(),
          t.checkResponsive(!1, !0),
          !0 === t.options.focusOnSelect &&
            e(t.$slideTrack).children().on("click.slick", t.selectHandler),
          t.setSlideClasses(
            "number" == typeof t.currentSlide ? t.currentSlide : 0
          ),
          t.setPosition(),
          t.focusHandler(),
          (t.paused = !t.options.autoplay),
          t.autoPlay(),
          t.$slider.trigger("reInit", [t]);
      }),
      (t.prototype.resize = function () {
        var t = this;
        e(window).width() !== t.windowWidth &&
          (clearTimeout(t.windowDelay),
          (t.windowDelay = window.setTimeout(function () {
            (t.windowWidth = e(window).width()),
              t.checkResponsive(),
              t.unslicked || t.setPosition();
          }, 50)));
      }),
      (t.prototype.removeSlide = t.prototype.slickRemove =
        function (e, t, i) {
          var n = this;
          if (
            ((e =
              "boolean" == typeof e
                ? !0 === (t = e)
                  ? 0
                  : n.slideCount - 1
                : !0 === t
                ? --e
                : e),
            n.slideCount < 1 || e < 0 || e > n.slideCount - 1)
          )
            return !1;
          n.unload(),
            !0 === i
              ? n.$slideTrack.children().remove()
              : n.$slideTrack.children(this.options.slide).eq(e).remove(),
            (n.$slides = n.$slideTrack.children(this.options.slide)),
            n.$slideTrack.children(this.options.slide).detach(),
            n.$slideTrack.append(n.$slides),
            (n.$slidesCache = n.$slides),
            n.reinit();
        }),
      (t.prototype.setCSS = function (e) {
        var t,
          i,
          n = this,
          o = {};
        !0 === n.options.rtl && (e = -e),
          (t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
          (i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px"),
          (o[n.positionProp] = e),
          !1 === n.transformsEnabled
            ? n.$slideTrack.css(o)
            : ((o = {}),
              !1 === n.cssTransitions
                ? ((o[n.animType] = "translate(" + t + ", " + i + ")"),
                  n.$slideTrack.css(o))
                : ((o[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"),
                  n.$slideTrack.css(o)));
      }),
      (t.prototype.setDimensions = function () {
        var e = this;
        !1 === e.options.vertical
          ? !0 === e.options.centerMode &&
            e.$list.css({ padding: "0px " + e.options.centerPadding })
          : (e.$list.height(
              e.$slides.first().outerHeight(!0) * e.options.slidesToShow
            ),
            !0 === e.options.centerMode &&
              e.$list.css({ padding: e.options.centerPadding + " 0px" })),
          (e.listWidth = e.$list.width()),
          (e.listHeight = e.$list.height()),
          !1 === e.options.vertical && !1 === e.options.variableWidth
            ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)),
              e.$slideTrack.width(
                Math.ceil(
                  e.slideWidth * e.$slideTrack.children(".slick-slide").length
                )
              ))
            : !0 === e.options.variableWidth
            ? e.$slideTrack.width(5e3 * e.slideCount)
            : ((e.slideWidth = Math.ceil(e.listWidth)),
              e.$slideTrack.height(
                Math.ceil(
                  e.$slides.first().outerHeight(!0) *
                    e.$slideTrack.children(".slick-slide").length
                )
              ));
        var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        !1 === e.options.variableWidth &&
          e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
      }),
      (t.prototype.setFade = function () {
        var t,
          i = this;
        i.$slides.each(function (n, o) {
          (t = i.slideWidth * n * -1),
            !0 === i.options.rtl
              ? e(o).css({
                  position: "relative",
                  right: t,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                })
              : e(o).css({
                  position: "relative",
                  left: t,
                  top: 0,
                  zIndex: i.options.zIndex - 2,
                  opacity: 0,
                });
        }),
          i.$slides
            .eq(i.currentSlide)
            .css({ zIndex: i.options.zIndex - 1, opacity: 1 });
      }),
      (t.prototype.setHeight = function () {
        var e = this;
        if (
          1 === e.options.slidesToShow &&
          !0 === e.options.adaptiveHeight &&
          !1 === e.options.vertical
        ) {
          var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
          e.$list.css("height", t);
        }
      }),
      (t.prototype.setOption = t.prototype.slickSetOption =
        function () {
          var t,
            i,
            n,
            o,
            s,
            r = this,
            a = !1;
          if (
            ("object" === e.type(arguments[0])
              ? ((n = arguments[0]), (a = arguments[1]), (s = "multiple"))
              : "string" === e.type(arguments[0]) &&
                ((n = arguments[0]),
                (o = arguments[1]),
                (a = arguments[2]),
                "responsive" === arguments[0] &&
                "array" === e.type(arguments[1])
                  ? (s = "responsive")
                  : void 0 !== arguments[1] && (s = "single")),
            "single" === s)
          )
            r.options[n] = o;
          else if ("multiple" === s)
            e.each(n, function (e, t) {
              r.options[e] = t;
            });
          else if ("responsive" === s)
            for (i in o)
              if ("array" !== e.type(r.options.responsive))
                r.options.responsive = [o[i]];
              else {
                for (t = r.options.responsive.length - 1; t >= 0; )
                  r.options.responsive[t].breakpoint === o[i].breakpoint &&
                    r.options.responsive.splice(t, 1),
                    t--;
                r.options.responsive.push(o[i]);
              }
          a && (r.unload(), r.reinit());
        }),
      (t.prototype.setPosition = function () {
        var e = this;
        e.setDimensions(),
          e.setHeight(),
          !1 === e.options.fade
            ? e.setCSS(e.getLeft(e.currentSlide))
            : e.setFade(),
          e.$slider.trigger("setPosition", [e]);
      }),
      (t.prototype.setProps = function () {
        var e = this,
          t = document.body.style;
        (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
          "top" === e.positionProp
            ? e.$slider.addClass("slick-vertical")
            : e.$slider.removeClass("slick-vertical"),
          (void 0 === t.WebkitTransition &&
            void 0 === t.MozTransition &&
            void 0 === t.msTransition) ||
            (!0 === e.options.useCSS && (e.cssTransitions = !0)),
          e.options.fade &&
            ("number" == typeof e.options.zIndex
              ? e.options.zIndex < 3 && (e.options.zIndex = 3)
              : (e.options.zIndex = e.defaults.zIndex)),
          void 0 !== t.OTransform &&
            ((e.animType = "OTransform"),
            (e.transformType = "-o-transform"),
            (e.transitionType = "OTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.MozTransform &&
            ((e.animType = "MozTransform"),
            (e.transformType = "-moz-transform"),
            (e.transitionType = "MozTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.MozPerspective &&
              (e.animType = !1)),
          void 0 !== t.webkitTransform &&
            ((e.animType = "webkitTransform"),
            (e.transformType = "-webkit-transform"),
            (e.transitionType = "webkitTransition"),
            void 0 === t.perspectiveProperty &&
              void 0 === t.webkitPerspective &&
              (e.animType = !1)),
          void 0 !== t.msTransform &&
            ((e.animType = "msTransform"),
            (e.transformType = "-ms-transform"),
            (e.transitionType = "msTransition"),
            void 0 === t.msTransform && (e.animType = !1)),
          void 0 !== t.transform &&
            !1 !== e.animType &&
            ((e.animType = "transform"),
            (e.transformType = "transform"),
            (e.transitionType = "transition")),
          (e.transformsEnabled =
            e.options.useTransform && null !== e.animType && !1 !== e.animType);
      }),
      (t.prototype.setSlideClasses = function (e) {
        var t,
          i,
          n,
          o,
          s = this;
        if (
          ((i = s.$slider
            .find(".slick-slide")
            .removeClass("slick-active slick-center slick-current")
            .attr("aria-hidden", "true")),
          s.$slides.eq(e).addClass("slick-current"),
          !0 === s.options.centerMode)
        ) {
          var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
          (t = Math.floor(s.options.slidesToShow / 2)),
            !0 === s.options.infinite &&
              (e >= t && e <= s.slideCount - 1 - t
                ? s.$slides
                    .slice(e - t + r, e + t + 1)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : ((n = s.options.slidesToShow + e),
                  i
                    .slice(n - t + 1 + r, n + t + 2)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")),
              0 === e
                ? i
                    .eq(i.length - 1 - s.options.slidesToShow)
                    .addClass("slick-center")
                : e === s.slideCount - 1 &&
                  i.eq(s.options.slidesToShow).addClass("slick-center")),
            s.$slides.eq(e).addClass("slick-center");
        } else
          e >= 0 && e <= s.slideCount - s.options.slidesToShow
            ? s.$slides
                .slice(e, e + s.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false")
            : i.length <= s.options.slidesToShow
            ? i.addClass("slick-active").attr("aria-hidden", "false")
            : ((o = s.slideCount % s.options.slidesToShow),
              (n = !0 === s.options.infinite ? s.options.slidesToShow + e : e),
              s.options.slidesToShow == s.options.slidesToScroll &&
              s.slideCount - e < s.options.slidesToShow
                ? i
                    .slice(n - (s.options.slidesToShow - o), n + o)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false")
                : i
                    .slice(n, n + s.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
        ("ondemand" !== s.options.lazyLoad &&
          "anticipated" !== s.options.lazyLoad) ||
          s.lazyLoad();
      }),
      (t.prototype.setupInfinite = function () {
        var t,
          i,
          n,
          o = this;
        if (
          (!0 === o.options.fade && (o.options.centerMode = !1),
          !0 === o.options.infinite &&
            !1 === o.options.fade &&
            ((i = null), o.slideCount > o.options.slidesToShow))
        ) {
          for (
            n =
              !0 === o.options.centerMode
                ? o.options.slidesToShow + 1
                : o.options.slidesToShow,
              t = o.slideCount;
            t > o.slideCount - n;
            t -= 1
          )
            (i = t - 1),
              e(o.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i - o.slideCount)
                .prependTo(o.$slideTrack)
                .addClass("slick-cloned");
          for (t = 0; t < n + o.slideCount; t += 1)
            (i = t),
              e(o.$slides[i])
                .clone(!0)
                .attr("id", "")
                .attr("data-slick-index", i + o.slideCount)
                .appendTo(o.$slideTrack)
                .addClass("slick-cloned");
          o.$slideTrack
            .find(".slick-cloned")
            .find("[id]")
            .each(function () {
              e(this).attr("id", "");
            });
        }
      }),
      (t.prototype.interrupt = function (e) {
        e || this.autoPlay(), (this.interrupted = e);
      }),
      (t.prototype.selectHandler = function (t) {
        var i = this,
          n = e(t.target).is(".slick-slide")
            ? e(t.target)
            : e(t.target).parents(".slick-slide"),
          o = parseInt(n.attr("data-slick-index"));
        o || (o = 0),
          i.slideCount <= i.options.slidesToShow
            ? i.slideHandler(o, !1, !0)
            : i.slideHandler(o);
      }),
      (t.prototype.slideHandler = function (e, t, i) {
        var n,
          o,
          s,
          r,
          a,
          l = null,
          c = this;
        if (
          ((t = t || !1),
          !(
            (!0 === c.animating && !0 === c.options.waitForAnimate) ||
            (!0 === c.options.fade && c.currentSlide === e)
          ))
        )
          if (
            (!1 === t && c.asNavFor(e),
            (n = e),
            (l = c.getLeft(n)),
            (r = c.getLeft(c.currentSlide)),
            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
            !1 === c.options.infinite &&
              !1 === c.options.centerMode &&
              (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else if (
            !1 === c.options.infinite &&
            !0 === c.options.centerMode &&
            (e < 0 || e > c.slideCount - c.options.slidesToScroll)
          )
            !1 === c.options.fade &&
              ((n = c.currentSlide),
              !0 !== i
                ? c.animateSlide(r, function () {
                    c.postSlide(n);
                  })
                : c.postSlide(n));
          else {
            if (
              (c.options.autoplay && clearInterval(c.autoPlayTimer),
              (o =
                n < 0
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                    : c.slideCount + n
                  : n >= c.slideCount
                  ? c.slideCount % c.options.slidesToScroll != 0
                    ? 0
                    : n - c.slideCount
                  : n),
              (c.animating = !0),
              c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
              (s = c.currentSlide),
              (c.currentSlide = o),
              c.setSlideClasses(c.currentSlide),
              c.options.asNavFor &&
                (a = (a = c.getNavTarget()).slick("getSlick")).slideCount <=
                  a.options.slidesToShow &&
                a.setSlideClasses(c.currentSlide),
              c.updateDots(),
              c.updateArrows(),
              !0 === c.options.fade)
            )
              return (
                !0 !== i
                  ? (c.fadeSlideOut(s),
                    c.fadeSlide(o, function () {
                      c.postSlide(o);
                    }))
                  : c.postSlide(o),
                void c.animateHeight()
              );
            !0 !== i
              ? c.animateSlide(l, function () {
                  c.postSlide(o);
                })
              : c.postSlide(o);
          }
      }),
      (t.prototype.startLoad = function () {
        var e = this;
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow.hide(), e.$nextArrow.hide()),
          !0 === e.options.dots &&
            e.slideCount > e.options.slidesToShow &&
            e.$dots.hide(),
          e.$slider.addClass("slick-loading");
      }),
      (t.prototype.swipeDirection = function () {
        var e,
          t,
          i,
          n,
          o = this;
        return (
          (e = o.touchObject.startX - o.touchObject.curX),
          (t = o.touchObject.startY - o.touchObject.curY),
          (i = Math.atan2(t, e)),
          (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
          (n <= 45 && n >= 0) || (n <= 360 && n >= 315)
            ? !1 === o.options.rtl
              ? "left"
              : "right"
            : n >= 135 && n <= 225
            ? !1 === o.options.rtl
              ? "right"
              : "left"
            : !0 === o.options.verticalSwiping
            ? n >= 35 && n <= 135
              ? "down"
              : "up"
            : "vertical"
        );
      }),
      (t.prototype.swipeEnd = function (e) {
        var t,
          i,
          n = this;
        if (((n.dragging = !1), (n.swiping = !1), n.scrolling))
          return (n.scrolling = !1), !1;
        if (
          ((n.interrupted = !1),
          (n.shouldClick = !(n.touchObject.swipeLength > 10)),
          void 0 === n.touchObject.curX)
        )
          return !1;
        if (
          (!0 === n.touchObject.edgeHit &&
            n.$slider.trigger("edge", [n, n.swipeDirection()]),
          n.touchObject.swipeLength >= n.touchObject.minSwipe)
        ) {
          switch ((i = n.swipeDirection())) {
            case "left":
            case "down":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide + n.getSlideCount())
                : n.currentSlide + n.getSlideCount()),
                (n.currentDirection = 0);
              break;
            case "right":
            case "up":
              (t = n.options.swipeToSlide
                ? n.checkNavigable(n.currentSlide - n.getSlideCount())
                : n.currentSlide - n.getSlideCount()),
                (n.currentDirection = 1);
          }
          "vertical" != i &&
            (n.slideHandler(t),
            (n.touchObject = {}),
            n.$slider.trigger("swipe", [n, i]));
        } else
          n.touchObject.startX !== n.touchObject.curX &&
            (n.slideHandler(n.currentSlide), (n.touchObject = {}));
      }),
      (t.prototype.swipeHandler = function (e) {
        var t = this;
        if (
          !(
            !1 === t.options.swipe ||
            ("ontouchend" in document && !1 === t.options.swipe) ||
            (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))
          )
        )
          switch (
            ((t.touchObject.fingerCount =
              e.originalEvent && void 0 !== e.originalEvent.touches
                ? e.originalEvent.touches.length
                : 1),
            (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
            !0 === t.options.verticalSwiping &&
              (t.touchObject.minSwipe =
                t.listHeight / t.options.touchThreshold),
            e.data.action)
          ) {
            case "start":
              t.swipeStart(e);
              break;
            case "move":
              t.swipeMove(e);
              break;
            case "end":
              t.swipeEnd(e);
          }
      }),
      (t.prototype.swipeMove = function (e) {
        var t,
          i,
          n,
          o,
          s,
          r,
          a = this;
        return (
          (s = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
          !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
            ((t = a.getLeft(a.currentSlide)),
            (a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX),
            (a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY),
            (a.touchObject.swipeLength = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))
            )),
            (r = Math.round(
              Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2))
            )),
            !a.options.verticalSwiping && !a.swiping && r > 4
              ? ((a.scrolling = !0), !1)
              : (!0 === a.options.verticalSwiping &&
                  (a.touchObject.swipeLength = r),
                (i = a.swipeDirection()),
                void 0 !== e.originalEvent &&
                  a.touchObject.swipeLength > 4 &&
                  ((a.swiping = !0), e.preventDefault()),
                (o =
                  (!1 === a.options.rtl ? 1 : -1) *
                  (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                !0 === a.options.verticalSwiping &&
                  (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                (n = a.touchObject.swipeLength),
                (a.touchObject.edgeHit = !1),
                !1 === a.options.infinite &&
                  ((0 === a.currentSlide && "right" === i) ||
                    (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                  ((n = a.touchObject.swipeLength * a.options.edgeFriction),
                  (a.touchObject.edgeHit = !0)),
                !1 === a.options.vertical
                  ? (a.swipeLeft = t + n * o)
                  : (a.swipeLeft =
                      t + n * (a.$list.height() / a.listWidth) * o),
                !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * o),
                !0 !== a.options.fade &&
                  !1 !== a.options.touchMove &&
                  (!0 === a.animating
                    ? ((a.swipeLeft = null), !1)
                    : void a.setCSS(a.swipeLeft))))
        );
      }),
      (t.prototype.swipeStart = function (e) {
        var t,
          i = this;
        if (
          ((i.interrupted = !0),
          1 !== i.touchObject.fingerCount ||
            i.slideCount <= i.options.slidesToShow)
        )
          return (i.touchObject = {}), !1;
        void 0 !== e.originalEvent &&
          void 0 !== e.originalEvent.touches &&
          (t = e.originalEvent.touches[0]),
          (i.touchObject.startX = i.touchObject.curX =
            void 0 !== t ? t.pageX : e.clientX),
          (i.touchObject.startY = i.touchObject.curY =
            void 0 !== t ? t.pageY : e.clientY),
          (i.dragging = !0);
      }),
      (t.prototype.unfilterSlides = t.prototype.slickUnfilter =
        function () {
          var e = this;
          null !== e.$slidesCache &&
            (e.unload(),
            e.$slideTrack.children(this.options.slide).detach(),
            e.$slidesCache.appendTo(e.$slideTrack),
            e.reinit());
        }),
      (t.prototype.unload = function () {
        var t = this;
        e(".slick-cloned", t.$slider).remove(),
          t.$dots && t.$dots.remove(),
          t.$prevArrow &&
            t.htmlExpr.test(t.options.prevArrow) &&
            t.$prevArrow.remove(),
          t.$nextArrow &&
            t.htmlExpr.test(t.options.nextArrow) &&
            t.$nextArrow.remove(),
          t.$slides
            .removeClass("slick-slide slick-active slick-visible slick-current")
            .attr("aria-hidden", "true")
            .css("width", "");
      }),
      (t.prototype.unslick = function (e) {
        var t = this;
        t.$slider.trigger("unslick", [t, e]), t.destroy();
      }),
      (t.prototype.updateArrows = function () {
        var e = this;
        Math.floor(e.options.slidesToShow / 2),
          !0 === e.options.arrows &&
            e.slideCount > e.options.slidesToShow &&
            !e.options.infinite &&
            (e.$prevArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            e.$nextArrow
              .removeClass("slick-disabled")
              .attr("aria-disabled", "false"),
            0 === e.currentSlide
              ? (e.$prevArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$nextArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false"))
              : ((e.currentSlide >= e.slideCount - e.options.slidesToShow &&
                  !1 === e.options.centerMode) ||
                  (e.currentSlide >= e.slideCount - 1 &&
                    !0 === e.options.centerMode)) &&
                (e.$nextArrow
                  .addClass("slick-disabled")
                  .attr("aria-disabled", "true"),
                e.$prevArrow
                  .removeClass("slick-disabled")
                  .attr("aria-disabled", "false")));
      }),
      (t.prototype.updateDots = function () {
        var e = this;
        null !== e.$dots &&
          (e.$dots.find("li").removeClass("slick-active").end(),
          e.$dots
            .find("li")
            .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
            .addClass("slick-active"));
      }),
      (t.prototype.visibility = function () {
        var e = this;
        e.options.autoplay &&
          (document[e.hidden] ? (e.interrupted = !0) : (e.interrupted = !1));
      }),
      (e.fn.slick = function () {
        var e,
          i,
          n = this,
          o = arguments[0],
          s = Array.prototype.slice.call(arguments, 1),
          r = n.length;
        for (e = 0; e < r; e++)
          if (
            ("object" == typeof o || void 0 === o
              ? (n[e].slick = new t(n[e], o))
              : (i = n[e].slick[o].apply(n[e].slick, s)),
            void 0 !== i)
          )
            return i;
        return n;
      });
  }),
  (function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t(exports)
      : "function" == typeof define && define.amd
      ? define(["exports"], t)
      : t(
          ((e =
            "undefined" != typeof globalThis ? globalThis : e || self).window =
            e.window || {})
        );
  })(this, function (e) {
    "use strict";
    const t = (e, t = 1e4) => (
        (e = parseFloat(e + "") || 0), Math.round((e + Number.EPSILON) * t) / t
      ),
      i = function (e) {
        if (!(e && e instanceof Element && e.offsetParent)) return !1;
        const t = e.scrollHeight > e.clientHeight,
          i = window.getComputedStyle(e).overflowY,
          n = -1 !== i.indexOf("hidden"),
          o = -1 !== i.indexOf("visible");
        return t && !n && !o;
      },
      n = function (e, t) {
        return (
          !(!e || e === document.body || (t && e === t)) &&
          (i(e) ? e : n(e.parentElement, t))
        );
      },
      o = function (e) {
        var t = new DOMParser().parseFromString(e, "text/html").body;
        if (t.childElementCount > 1) {
          for (var i = document.createElement("div"); t.firstChild; )
            i.appendChild(t.firstChild);
          return i;
        }
        return t.firstChild;
      },
      s = (e) => `${e || ""}`.split(" ").filter((e) => !!e),
      r = (e, t, i) => {
        e &&
          s(t).forEach((t) => {
            e.classList.toggle(t, i || !1);
          });
      };
    class a {
      constructor(e) {
        Object.defineProperty(this, "pageX", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "pageY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "clientY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "time", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "nativePointer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          (this.nativePointer = e),
          (this.pageX = e.pageX),
          (this.pageY = e.pageY),
          (this.clientX = e.clientX),
          (this.clientY = e.clientY),
          (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
          (this.time = Date.now());
      }
    }
    const l = { passive: !1 };
    class c {
      constructor(
        e,
        { start: t = () => !0, move: i = () => {}, end: n = () => {} }
      ) {
        Object.defineProperty(this, "element", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          Object.defineProperty(this, "startCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "moveCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "endCallback", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "currentPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "startPointers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          (this.element = e),
          (this.startCallback = t),
          (this.moveCallback = i),
          (this.endCallback = n);
        for (const e of [
          "onPointerStart",
          "onTouchStart",
          "onMove",
          "onTouchEnd",
          "onPointerEnd",
          "onWindowBlur",
        ])
          this[e] = this[e].bind(this);
        this.element.addEventListener("mousedown", this.onPointerStart, l),
          this.element.addEventListener("touchstart", this.onTouchStart, l),
          this.element.addEventListener("touchmove", this.onMove, l),
          this.element.addEventListener("touchend", this.onTouchEnd),
          this.element.addEventListener("touchcancel", this.onTouchEnd);
      }
      onPointerStart(e) {
        if (!e.buttons || 0 !== e.button) return;
        const t = new a(e);
        this.currentPointers.some((e) => e.id === t.id) ||
          (this.triggerPointerStart(t, e) &&
            (window.addEventListener("mousemove", this.onMove),
            window.addEventListener("mouseup", this.onPointerEnd),
            window.addEventListener("blur", this.onWindowBlur)));
      }
      onTouchStart(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerStart(new a(t), e);
        window.addEventListener("blur", this.onWindowBlur);
      }
      onMove(e) {
        const t = this.currentPointers.slice(),
          i =
            "changedTouches" in e
              ? Array.from(e.changedTouches || []).map((e) => new a(e))
              : [new a(e)],
          n = [];
        for (const e of i) {
          const t = this.currentPointers.findIndex((t) => t.id === e.id);
          t < 0 || (n.push(e), (this.currentPointers[t] = e));
        }
        n.length && this.moveCallback(e, this.currentPointers.slice(), t);
      }
      onPointerEnd(e) {
        (e.buttons > 0 && 0 !== e.button) ||
          (this.triggerPointerEnd(e, new a(e)),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur));
      }
      onTouchEnd(e) {
        for (const t of Array.from(e.changedTouches || []))
          this.triggerPointerEnd(e, new a(t));
      }
      triggerPointerStart(e, t) {
        return (
          !!this.startCallback(t, e, this.currentPointers.slice()) &&
          (this.currentPointers.push(e), this.startPointers.push(e), !0)
        );
      }
      triggerPointerEnd(e, t) {
        const i = this.currentPointers.findIndex((e) => e.id === t.id);
        i < 0 ||
          (this.currentPointers.splice(i, 1),
          this.startPointers.splice(i, 1),
          this.endCallback(e, t, this.currentPointers.slice()));
      }
      onWindowBlur() {
        this.clear();
      }
      clear() {
        for (; this.currentPointers.length; ) {
          const e = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1),
            this.startPointers.splice(this.currentPointers.length - 1, 1),
            this.endCallback(
              new Event("touchend", {
                bubbles: !0,
                cancelable: !0,
                clientX: e.clientX,
                clientY: e.clientY,
              }),
              e,
              this.currentPointers.slice()
            );
        }
      }
      stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, l),
          this.element.removeEventListener("touchstart", this.onTouchStart, l),
          this.element.removeEventListener("touchmove", this.onMove, l),
          this.element.removeEventListener("touchend", this.onTouchEnd),
          this.element.removeEventListener("touchcancel", this.onTouchEnd),
          window.removeEventListener("mousemove", this.onMove),
          window.removeEventListener("mouseup", this.onPointerEnd),
          window.removeEventListener("blur", this.onWindowBlur);
      }
    }
    function d(e, t) {
      return t
        ? Math.sqrt(
            Math.pow(t.clientX - e.clientX, 2) +
              Math.pow(t.clientY - e.clientY, 2)
          )
        : 0;
    }
    function u(e, t) {
      return t
        ? {
            clientX: (e.clientX + t.clientX) / 2,
            clientY: (e.clientY + t.clientY) / 2,
          }
        : e;
    }
    const h = (e) =>
        "object" == typeof e &&
        null !== e &&
        e.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(e),
      p = (e, ...t) => {
        const i = t.length;
        for (let n = 0; n < i; n++) {
          const i = t[n] || {};
          Object.entries(i).forEach(([t, i]) => {
            const n = Array.isArray(i) ? [] : {};
            e[t] || Object.assign(e, { [t]: n }),
              h(i)
                ? Object.assign(e[t], p(n, i))
                : Array.isArray(i)
                ? Object.assign(e, { [t]: [...i] })
                : Object.assign(e, { [t]: i });
          });
        }
        return e;
      },
      f = function (e, t) {
        return e
          .split(".")
          .reduce((e, t) => ("object" == typeof e ? e[t] : void 0), t);
      };
    class g {
      constructor(e = {}) {
        Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: e,
        }),
          Object.defineProperty(this, "events", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Map(),
          }),
          this.setOptions(e);
        for (const e of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
          e.startsWith("on") &&
            "function" == typeof this[e] &&
            (this[e] = this[e].bind(this));
      }
      setOptions(e) {
        this.options = e ? p({}, this.constructor.defaults, e) : {};
        for (const [e, t] of Object.entries(this.option("on") || {}))
          this.on(e, t);
      }
      option(e, ...t) {
        let i = f(e, this.options);
        return i && "function" == typeof i && (i = i.call(this, this, ...t)), i;
      }
      optionFor(e, t, i, ...n) {
        let o = f(t, e);
        var s;
        "string" != typeof (s = o) ||
          isNaN(s) ||
          isNaN(parseFloat(s)) ||
          (o = parseFloat(o)),
          "true" === o && (o = !0),
          "false" === o && (o = !1),
          o && "function" == typeof o && (o = o.call(this, this, e, ...n));
        let r = f(t, this.options);
        return (
          r && "function" == typeof r
            ? (o = r.call(this, this, e, ...n, o))
            : void 0 === o && (o = r),
          void 0 === o ? i : o
        );
      }
      cn(e) {
        const t = this.options.classes;
        return (t && t[e]) || "";
      }
      localize(e, t = []) {
        e = String(e).replace(/\{\{(\w+).?(\w+)?\}\}/g, (e, t, i) => {
          let n = "";
          return (
            i
              ? (n = this.option(
                  `${t[0] + t.toLowerCase().substring(1)}.l10n.${i}`
                ))
              : t && (n = this.option(`l10n.${t}`)),
            n || (n = e),
            n
          );
        });
        for (let i = 0; i < t.length; i++) e = e.split(t[i][0]).join(t[i][1]);
        return e.replace(/\{\{(.*?)\}\}/g, (e, t) => t);
      }
      on(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          this.events || (this.events = new Map()),
          i.forEach((e) => {
            let i = this.events.get(e);
            i || (this.events.set(e, []), (i = [])),
              i.includes(t) || i.push(t),
              this.events.set(e, i);
          });
      }
      off(e, t) {
        let i = [];
        "string" == typeof e ? (i = e.split(" ")) : Array.isArray(e) && (i = e),
          i.forEach((e) => {
            const i = this.events.get(e);
            if (Array.isArray(i)) {
              const e = i.indexOf(t);
              e > -1 && i.splice(e, 1);
            }
          });
      }
      emit(e, ...t) {
        [...(this.events.get(e) || [])].forEach((e) => e(this, ...t)),
          "*" !== e && this.emit("*", e, ...t);
      }
    }
    Object.defineProperty(g, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.33",
    }),
      Object.defineProperty(g, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    class m extends g {
      constructor(e = {}) {
        super(e),
          Object.defineProperty(this, "plugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          });
      }
      attachPlugins(e = {}) {
        const t = new Map();
        for (const [i, n] of Object.entries(e)) {
          const e = this.option(i),
            o = this.plugins[i];
          o || !1 === e
            ? o && !1 === e && (o.detach(), delete this.plugins[i])
            : t.set(i, new n(this, e || {}));
        }
        for (const [e, i] of t) (this.plugins[e] = i), i.attach();
      }
      detachPlugins(e) {
        e = e || Object.keys(this.plugins);
        for (const t of e) {
          const e = this.plugins[t];
          e && e.detach(), delete this.plugins[t];
        }
        return this.emit("detachPlugins"), this;
      }
    }
    var v;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Error = 1)] = "Error"),
        (e[(e.Ready = 2)] = "Ready"),
        (e[(e.Panning = 3)] = "Panning"),
        (e[(e.Mousemove = 4)] = "Mousemove"),
        (e[(e.Destroy = 5)] = "Destroy");
    })(v || (v = {}));
    const b = ["a", "b", "c", "d", "e", "f"],
      y = {
        PANUP: "Move up",
        PANDOWN: "Move down",
        PANLEFT: "Move left",
        PANRIGHT: "Move right",
        ZOOMIN: "Zoom in",
        ZOOMOUT: "Zoom out",
        TOGGLEZOOM: "Toggle zoom level",
        TOGGLE1TO1: "Toggle zoom level",
        ITERATEZOOM: "Toggle zoom level",
        ROTATECCW: "Rotate counterclockwise",
        ROTATECW: "Rotate clockwise",
        FLIPX: "Flip horizontally",
        FLIPY: "Flip vertically",
        FITX: "Fit horizontally",
        FITY: "Fit vertically",
        RESET: "Reset",
        TOGGLEFS: "Toggle fullscreen",
      },
      w = {
        content: null,
        width: "auto",
        height: "auto",
        panMode: "drag",
        touch: !0,
        dragMinThreshold: 3,
        lockAxis: !1,
        mouseMoveFactor: 1,
        mouseMoveFriction: 0.12,
        zoom: !0,
        pinchToZoom: !0,
        panOnlyZoomed: "auto",
        minScale: 1,
        maxScale: 2,
        friction: 0.25,
        dragFriction: 0.35,
        decelFriction: 0.05,
        click: "toggleZoom",
        dblClick: !1,
        wheel: "zoom",
        wheelLimit: 7,
        spinner: !0,
        bounds: "auto",
        infinite: !1,
        rubberband: !0,
        bounce: !0,
        maxVelocity: 75,
        transformParent: !1,
        classes: {
          content: "f-panzoom__content",
          isLoading: "is-loading",
          canZoomIn: "can-zoom_in",
          canZoomOut: "can-zoom_out",
          isDraggable: "is-draggable",
          isDragging: "is-dragging",
          inFullscreen: "in-fullscreen",
          htmlHasFullscreen: "with-panzoom-in-fullscreen",
        },
        l10n: y,
      },
      x = '<circle cx="25" cy="25" r="20"></circle>',
      S =
        '<div class="f-spinner"><svg viewBox="0 0 50 50">' +
        x +
        x +
        "</svg></div>",
      T = (e) => e && null !== e && e instanceof Element && "nodeType" in e,
      C = (e, t) => {
        e &&
          s(t).forEach((t) => {
            e.classList.remove(t);
          });
      },
      k = (e, t) => {
        e &&
          s(t).forEach((t) => {
            e.classList.add(t);
          });
      },
      E = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 },
      P = 1e4,
      M = "mousemove",
      A = "drag",
      O = "content";
    let L = null,
      F = null;
    class $ extends m {
      get fits() {
        return (
          this.contentRect.width - this.contentRect.fitWidth < 1 &&
          this.contentRect.height - this.contentRect.fitHeight < 1
        );
      }
      get isTouchDevice() {
        return (
          null === F && (F = window.matchMedia("(hover: none)").matches), F
        );
      }
      get isMobile() {
        return (
          null === L &&
            (L = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)),
          L
        );
      }
      get panMode() {
        return this.options.panMode !== M || this.isTouchDevice ? A : M;
      }
      get panOnlyZoomed() {
        const e = this.options.panOnlyZoomed;
        return "auto" === e ? this.isTouchDevice : e;
      }
      get isInfinite() {
        return this.option("infinite");
      }
      get angle() {
        return (
          (180 * Math.atan2(this.current.b, this.current.a)) / Math.PI || 0
        );
      }
      get targetAngle() {
        return (180 * Math.atan2(this.target.b, this.target.a)) / Math.PI || 0;
      }
      get scale() {
        const { a: e, b: t } = this.current;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get targetScale() {
        const { a: e, b: t } = this.target;
        return Math.sqrt(e * e + t * t) || 1;
      }
      get minScale() {
        return this.option("minScale") || 1;
      }
      get fullScale() {
        const { contentRect: e } = this;
        return e.fullWidth / e.fitWidth || 1;
      }
      get maxScale() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
      get coverScale() {
        const { containerRect: e, contentRect: t } = this,
          i = Math.max(e.height / t.fitHeight, e.width / t.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
      get isScaling() {
        return (
          Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        );
      }
      get isContentLoading() {
        const e = this.content;
        return !!(e && e instanceof HTMLImageElement) && !e.complete;
      }
      get isResting() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (const e of b) {
          const t = "e" == e || "f" === e ? 1e-4 : 1e-5;
          if (Math.abs(this.target[e] - this.current[e]) > t) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
      constructor(e, t = {}, i = {}) {
        var n;
        if (
          (super(t),
          Object.defineProperty(this, "pointerTracker", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "resizeObserver", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "updateTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "rAF", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isTicking", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "ignoreBounds", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingX", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "isBouncingY", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "clicks", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "trackingPoints", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "cwd", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "pmme", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "friction", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: v.Init,
          }),
          Object.defineProperty(this, "isDragging", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "content", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "spinner", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "containerRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 },
          }),
          Object.defineProperty(this, "contentRect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              fullWidth: 0,
              fullHeight: 0,
              fitWidth: 0,
              fitHeight: 0,
              width: 0,
              height: 0,
            },
          }),
          Object.defineProperty(this, "dragStart", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, top: 0, left: 0, time: 0 },
          }),
          Object.defineProperty(this, "dragOffset", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { x: 0, y: 0, time: 0 },
          }),
          Object.defineProperty(this, "current", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, E),
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Object.assign({}, E),
          }),
          Object.defineProperty(this, "velocity", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 },
          }),
          Object.defineProperty(this, "lockedAxis", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          !e)
        )
          throw new Error("Container Element Not Found");
        (this.container = e),
          this.initContent(),
          this.attachPlugins(Object.assign(Object.assign({}, $.Plugins), i)),
          this.emit("attachPlugins"),
          this.emit("init");
        const s = this.content;
        if (
          (s.addEventListener("load", this.onLoad),
          s.addEventListener("error", this.onError),
          this.isContentLoading)
        ) {
          if (this.option("spinner")) {
            e.classList.add(this.cn("isLoading"));
            const t = o(S);
            !e.contains(s) || s.parentElement instanceof HTMLPictureElement
              ? (this.spinner = e.appendChild(t))
              : (this.spinner =
                  (null === (n = s.parentElement) || void 0 === n
                    ? void 0
                    : n.insertBefore(t, s)) || null);
          }
          this.emit("beforeLoad");
        } else
          queueMicrotask(() => {
            this.enable();
          });
      }
      initContent() {
        const { container: e } = this,
          t = this.cn(O);
        let i = this.option(O) || e.querySelector(`.${t}`);
        if (
          (i ||
            ((i = e.querySelector("img,picture") || e.firstElementChild),
            i && k(i, t)),
          i instanceof HTMLPictureElement && (i = i.querySelector("img")),
          !i)
        )
          throw new Error("No content found");
        this.content = i;
      }
      onLoad() {
        const { spinner: e, container: t, state: i } = this;
        e && (e.remove(), (this.spinner = null)),
          this.option("spinner") && t.classList.remove(this.cn("isLoading")),
          this.emit("afterLoad"),
          i === v.Init ? this.enable() : this.updateMetrics();
      }
      onError() {
        this.state !== v.Destroy &&
          (this.spinner && (this.spinner.remove(), (this.spinner = null)),
          this.stop(),
          this.detachEvents(),
          (this.state = v.Error),
          this.emit("error"));
      }
      getNextScale(e) {
        const {
          fullScale: t,
          targetScale: i,
          coverScale: n,
          maxScale: o,
          minScale: s,
        } = this;
        let r = s;
        switch (e) {
          case "toggleMax":
            r = i - s < 0.5 * (o - s) ? o : s;
            break;
          case "toggleCover":
            r = i - s < 0.5 * (n - s) ? n : s;
            break;
          case "toggleZoom":
            r = i - s < 0.5 * (t - s) ? t : s;
            break;
          case "iterateZoom":
            let e = [1, t, o].sort((e, t) => e - t),
              a = e.findIndex((e) => e > i + 1e-5);
            r = e[a] || 1;
        }
        return r;
      }
      attachObserver() {
        var e;
        const t = () => {
          const { container: e, containerRect: t } = this;
          return (
            Math.abs(t.width - e.getBoundingClientRect().width) > 0.1 ||
            Math.abs(t.height - e.getBoundingClientRect().height) > 0.1
          );
        };
        this.resizeObserver ||
          void 0 === window.ResizeObserver ||
          (this.resizeObserver = new ResizeObserver(() => {
            this.updateTimer ||
              (t()
                ? (this.onResize(),
                  this.isMobile &&
                    (this.updateTimer = setTimeout(() => {
                      t() && this.onResize(), (this.updateTimer = null);
                    }, 500)))
                : this.updateTimer &&
                  (clearTimeout(this.updateTimer), (this.updateTimer = null)));
          })),
          null === (e = this.resizeObserver) ||
            void 0 === e ||
            e.observe(this.container);
      }
      detachObserver() {
        var e;
        null === (e = this.resizeObserver) || void 0 === e || e.disconnect();
      }
      attachEvents() {
        const { container: e } = this;
        e.addEventListener("click", this.onClick, { passive: !1, capture: !1 }),
          e.addEventListener("wheel", this.onWheel, { passive: !1 }),
          (this.pointerTracker = new c(e, {
            start: this.onPointerDown,
            move: this.onPointerMove,
            end: this.onPointerUp,
          })),
          document.addEventListener(M, this.onMouseMove);
      }
      detachEvents() {
        var e;
        const { container: t } = this;
        t.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          t.removeEventListener("wheel", this.onWheel, { passive: !1 }),
          null === (e = this.pointerTracker) || void 0 === e || e.stop(),
          (this.pointerTracker = null),
          document.removeEventListener(M, this.onMouseMove),
          document.removeEventListener("keydown", this.onKeydown, !0),
          this.clickTimer &&
            (clearTimeout(this.clickTimer), (this.clickTimer = null)),
          this.updateTimer &&
            (clearTimeout(this.updateTimer), (this.updateTimer = null));
      }
      animate() {
        this.setTargetForce();
        const e = this.friction,
          t = this.option("maxVelocity");
        for (const i of b)
          e
            ? ((this.velocity[i] *= 1 - e),
              t &&
                !this.isScaling &&
                (this.velocity[i] = Math.max(
                  Math.min(this.velocity[i], t),
                  -1 * t
                )),
              (this.current[i] += this.velocity[i]))
            : (this.current[i] = this.target[i]);
        this.setTransform(),
          this.setEdgeForce(),
          !this.isResting || this.isDragging
            ? (this.rAF = requestAnimationFrame(() => this.animate()))
            : this.stop("current");
      }
      setTargetForce() {
        for (const e of b)
          ("e" === e && this.isBouncingX) ||
            ("f" === e && this.isBouncingY) ||
            (this.velocity[e] =
              (1 / (1 - this.friction) - 1) *
              (this.target[e] - this.current[e]));
      }
      checkBounds(e = 0, t = 0) {
        const { current: i } = this,
          n = i.e + e,
          o = i.f + t,
          s = this.getBounds(),
          { x: r, y: a } = s,
          l = r.min,
          c = r.max,
          d = a.min,
          u = a.max;
        let h = 0,
          p = 0;
        return (
          l !== 1 / 0 && n < l
            ? (h = l - n)
            : c !== 1 / 0 && n > c && (h = c - n),
          d !== 1 / 0 && o < d
            ? (p = d - o)
            : u !== 1 / 0 && o > u && (p = u - o),
          Math.abs(h) < 1e-4 && (h = 0),
          Math.abs(p) < 1e-4 && (p = 0),
          Object.assign(Object.assign({}, s), {
            xDiff: h,
            yDiff: p,
            inBounds: !h && !p,
          })
        );
      }
      clampTargetBounds() {
        const { target: e } = this,
          { x: t, y: i } = this.getBounds();
        t.min !== 1 / 0 && (e.e = Math.max(e.e, t.min)),
          t.max !== 1 / 0 && (e.e = Math.min(e.e, t.max)),
          i.min !== 1 / 0 && (e.f = Math.max(e.f, i.min)),
          i.max !== 1 / 0 && (e.f = Math.min(e.f, i.max));
      }
      calculateContentDim(e = this.current) {
        const { content: t, contentRect: i } = this,
          { fitWidth: n, fitHeight: o, fullWidth: s, fullHeight: r } = i;
        let a = s,
          l = r;
        if (this.option("zoom") || 0 !== this.angle) {
          const i = !(
              t instanceof HTMLImageElement ||
              ("none" !== window.getComputedStyle(t).maxWidth &&
                "none" !== window.getComputedStyle(t).maxHeight)
            ),
            c = i ? s : n,
            d = i ? r : o,
            u = this.getMatrix(e),
            h = new DOMPoint(0, 0).matrixTransform(u),
            p = new DOMPoint(0 + c, 0).matrixTransform(u),
            f = new DOMPoint(0 + c, 0 + d).matrixTransform(u),
            g = new DOMPoint(0, 0 + d).matrixTransform(u),
            m = Math.abs(f.x - h.x),
            v = Math.abs(f.y - h.y),
            b = Math.abs(g.x - p.x),
            y = Math.abs(g.y - p.y);
          (a = Math.max(m, b)), (l = Math.max(v, y));
        }
        return { contentWidth: a, contentHeight: l };
      }
      setEdgeForce() {
        if (
          this.ignoreBounds ||
          this.isDragging ||
          this.panMode === M ||
          this.targetScale < this.scale
        )
          return (this.isBouncingX = !1), void (this.isBouncingY = !1);
        const { target: e } = this,
          { x: t, y: i, xDiff: n, yDiff: o } = this.checkBounds(),
          s = this.option("maxVelocity");
        let r = this.velocity.e,
          a = this.velocity.f;
        0 !== n
          ? ((this.isBouncingX = !0),
            n * r <= 0
              ? (r += 0.14 * n)
              : ((r = 0.14 * n),
                t.min !== 1 / 0 && (this.target.e = Math.max(e.e, t.min)),
                t.max !== 1 / 0 && (this.target.e = Math.min(e.e, t.max))),
            s && (r = Math.max(Math.min(r, s), -1 * s)))
          : (this.isBouncingX = !1),
          0 !== o
            ? ((this.isBouncingY = !0),
              o * a <= 0
                ? (a += 0.14 * o)
                : ((a = 0.14 * o),
                  i.min !== 1 / 0 && (this.target.f = Math.max(e.f, i.min)),
                  i.max !== 1 / 0 && (this.target.f = Math.min(e.f, i.max))),
              s && (a = Math.max(Math.min(a, s), -1 * s)))
            : (this.isBouncingY = !1),
          this.isBouncingX && (this.velocity.e = r),
          this.isBouncingY && (this.velocity.f = a);
      }
      enable() {
        const { content: e } = this,
          t = new DOMMatrixReadOnly(window.getComputedStyle(e).transform);
        for (const e of b) this.current[e] = this.target[e] = t[e];
        this.updateMetrics(),
          this.attachObserver(),
          this.attachEvents(),
          (this.state = v.Ready),
          this.emit("ready");
      }
      onClick(e) {
        var t;
        "click" === e.type &&
          0 === e.detail &&
          ((this.dragOffset.x = 0), (this.dragOffset.y = 0)),
          this.isDragging &&
            (null === (t = this.pointerTracker) || void 0 === t || t.clear(),
            (this.trackingPoints = []),
            this.startDecelAnim());
        const i = e.target;
        if (!i || e.defaultPrevented) return;
        if (i.hasAttribute("disabled"))
          return e.preventDefault(), void e.stopPropagation();
        if (
          (() => {
            const e = window.getSelection();
            return e && "Range" === e.type;
          })() &&
          !i.closest("button")
        )
          return;
        const n = i.closest("[data-panzoom-action]"),
          o = i.closest("[data-panzoom-change]"),
          s = n || o,
          r = s && T(s) ? s.dataset : null;
        if (r) {
          const t = r.panzoomChange,
            i = r.panzoomAction;
          if (((t || i) && e.preventDefault(), t)) {
            let i = {};
            try {
              i = JSON.parse(t);
            } catch (e) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(i);
          }
          if (i) return void (this[i] && this[i]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
          return e.preventDefault(), void e.stopPropagation();
        if (i.closest("[data-fancybox]")) return;
        const a = this.content.getBoundingClientRect(),
          l = this.dragStart;
        if (
          l.time &&
          !this.canZoomOut() &&
          (Math.abs(a.x - l.x) > 2 || Math.abs(a.y - l.y) > 2)
        )
          return;
        this.dragStart.time = 0;
        const c = (t) => {
            this.option("zoom", e) &&
              t &&
              "string" == typeof t &&
              /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(
                t
              ) &&
              "function" == typeof this[t] &&
              (e.preventDefault(), this[t]({ event: e }));
          },
          d = this.option("click", e),
          u = this.option("dblClick", e);
        u
          ? (this.clicks++,
            1 == this.clicks &&
              (this.clickTimer = setTimeout(() => {
                1 === this.clicks
                  ? (this.emit("click", e), !e.defaultPrevented && d && c(d))
                  : (this.emit("dblClick", e), e.defaultPrevented || c(u)),
                  (this.clicks = 0),
                  (this.clickTimer = null);
              }, 350)))
          : (this.emit("click", e), !e.defaultPrevented && d && c(d));
      }
      addTrackingPoint(e) {
        const t = this.trackingPoints.filter((e) => e.time > Date.now() - 100);
        t.push(e), (this.trackingPoints = t);
      }
      onPointerDown(e, t, i) {
        var n;
        if (!1 === this.option("touch", e)) return !1;
        (this.pwt = 0),
          (this.dragOffset = { x: 0, y: 0, time: 0 }),
          (this.trackingPoints = []);
        const o = this.content.getBoundingClientRect();
        if (
          ((this.dragStart = {
            x: o.x,
            y: o.y,
            top: o.top,
            left: o.left,
            time: Date.now(),
          }),
          this.clickTimer)
        )
          return !1;
        if (this.panMode === M && this.targetScale > 1)
          return e.preventDefault(), e.stopPropagation(), !1;
        const s = e.composedPath()[0];
        if (!i.length) {
          if (
            [
              "TEXTAREA",
              "OPTION",
              "INPUT",
              "SELECT",
              "VIDEO",
              "IFRAME",
            ].includes(s.nodeName) ||
            s.closest(
              "[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"
            )
          )
            return !1;
          null === (n = window.getSelection()) ||
            void 0 === n ||
            n.removeAllRanges();
        }
        if ("mousedown" === e.type)
          ["A", "BUTTON"].includes(s.nodeName) || e.preventDefault();
        else if (Math.abs(this.velocity.a) > 0.3) return !1;
        return (
          (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          this.stop(),
          this.isDragging ||
            ((this.isDragging = !0),
            this.addTrackingPoint(t),
            this.emit("touchStart", e)),
          !0
        );
      }
      onPointerMove(e, i, o) {
        if (!1 === this.option("touch", e)) return;
        if (!this.isDragging) return;
        if (
          i.length < 2 &&
          this.panOnlyZoomed &&
          t(this.targetScale) <= t(this.minScale)
        )
          return;
        if ((this.emit("touchMove", e), e.defaultPrevented)) return;
        this.addTrackingPoint(i[0]);
        const { content: s } = this,
          r = u(o[0], o[1]),
          a = u(i[0], i[1]);
        let l = 0,
          c = 0;
        if (i.length > 1) {
          const e = s.getBoundingClientRect();
          (l = r.clientX - e.left - 0.5 * e.width),
            (c = r.clientY - e.top - 0.5 * e.height);
        }
        const h = d(o[0], o[1]),
          p = d(i[0], i[1]);
        let f = h ? p / h : 1,
          g = a.clientX - r.clientX,
          m = a.clientY - r.clientY;
        (this.dragOffset.x += g),
          (this.dragOffset.y += m),
          (this.dragOffset.time = Date.now() - this.dragStart.time);
        let v =
          t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
        if (v && !this.lockedAxis)
          if ("xy" === v || "y" === v || "touchmove" === e.type) {
            if (
              Math.abs(this.dragOffset.x) < 6 &&
              Math.abs(this.dragOffset.y) < 6
            )
              return void e.preventDefault();
            const t = Math.abs(
              (180 * Math.atan2(this.dragOffset.y, this.dragOffset.x)) / Math.PI
            );
            (this.lockedAxis = t > 45 && t < 135 ? "y" : "x"),
              (this.dragOffset.x = 0),
              (this.dragOffset.y = 0),
              (g = 0),
              (m = 0);
          } else this.lockedAxis = v;
        if (
          (n(e.target, this.content) && ((v = "x"), (this.dragOffset.y = 0)),
          v &&
            "xy" !== v &&
            this.lockedAxis !== v &&
            t(this.targetScale) === t(this.minScale))
        )
          return;
        e.cancelable && e.preventDefault(),
          this.container.classList.add(this.cn("isDragging"));
        const b = this.checkBounds(g, m);
        this.option("rubberband")
          ? ("x" !== this.isInfinite &&
              ((b.xDiff > 0 && g < 0) || (b.xDiff < 0 && g > 0)) &&
              (g *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitWidth) * b.xDiff)
              )),
            "y" !== this.isInfinite &&
              ((b.yDiff > 0 && m < 0) || (b.yDiff < 0 && m > 0)) &&
              (m *= Math.max(
                0,
                0.5 - Math.abs((0.75 / this.contentRect.fitHeight) * b.yDiff)
              )))
          : (b.xDiff && (g = 0), b.yDiff && (m = 0));
        const y = this.targetScale,
          w = this.minScale,
          x = this.maxScale;
        y < 0.5 * w && (f = Math.max(f, w)),
          y > 1.5 * x && (f = Math.min(f, x)),
          "y" === this.lockedAxis && t(y) === t(w) && (g = 0),
          "x" === this.lockedAxis && t(y) === t(w) && (m = 0),
          this.applyChange({
            originX: l,
            originY: c,
            panX: g,
            panY: m,
            scale: f,
            friction: this.option("dragFriction"),
            ignoreBounds: !0,
          });
      }
      onPointerUp(e, t, i) {
        if (i.length)
          return (
            (this.dragOffset.x = 0),
            (this.dragOffset.y = 0),
            void (this.trackingPoints = [])
          );
        this.container.classList.remove(this.cn("isDragging")),
          this.isDragging &&
            (this.addTrackingPoint(t),
            this.panOnlyZoomed &&
              this.contentRect.width - this.contentRect.fitWidth < 1 &&
              this.contentRect.height - this.contentRect.fitHeight < 1 &&
              (this.trackingPoints = []),
            n(e.target, this.content) &&
              "y" === this.lockedAxis &&
              (this.trackingPoints = []),
            this.emit("touchEnd", e),
            (this.isDragging = !1),
            (this.lockedAxis = !1),
            this.state !== v.Destroy &&
              (e.defaultPrevented || this.startDecelAnim()));
      }
      startDecelAnim() {
        var e;
        const i = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const e of b) this.velocity[e] = 0;
        (this.target.e = this.current.e),
          (this.target.f = this.current.f),
          C(this.container, "is-scaling"),
          C(this.container, "is-animating"),
          (this.isTicking = !1);
        const { trackingPoints: n } = this,
          o = n[0],
          s = n[n.length - 1];
        let r = 0,
          a = 0,
          l = 0;
        s &&
          o &&
          ((r = s.clientX - o.clientX),
          (a = s.clientY - o.clientY),
          (l = s.time - o.time));
        const c =
          (null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1;
        1 !== c && ((r *= c), (a *= c));
        let d = 0,
          u = 0,
          h = 0,
          p = 0,
          f = this.option("decelFriction");
        const g = this.targetScale;
        if (l > 0) {
          (h = Math.abs(r) > 3 ? r / (l / 30) : 0),
            (p = Math.abs(a) > 3 ? a / (l / 30) : 0);
          const e = this.option("maxVelocity");
          e &&
            ((h = Math.max(Math.min(h, e), -1 * e)),
            (p = Math.max(Math.min(p, e), -1 * e)));
        }
        h && (d = h / (1 / (1 - f) - 1)),
          p && (u = p / (1 / (1 - f) - 1)),
          ("y" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "y" === this.lockedAxis &&
              t(g) === this.minScale)) &&
            (d = h = 0),
          ("x" === this.option("lockAxis") ||
            ("xy" === this.option("lockAxis") &&
              "x" === this.lockedAxis &&
              t(g) === this.minScale)) &&
            (u = p = 0);
        const m = this.dragOffset.x,
          v = this.dragOffset.y,
          y = this.option("dragMinThreshold") || 0;
        Math.abs(m) < y && Math.abs(v) < y && ((d = u = 0), (h = p = 0)),
          ((this.option("zoom") &&
            (g < this.minScale - 1e-5 || g > this.maxScale + 1e-5)) ||
            (i && !d && !u)) &&
            (f = 0.35),
          this.applyChange({ panX: d, panY: u, friction: f }),
          this.emit("decel", h, p, m, v);
      }
      onWheel(e) {
        var t = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const i = Math.max(-1, Math.min(1, t));
        if ((this.emit("wheel", e, i), this.panMode === M)) return;
        if (e.defaultPrevented) return;
        const n = this.option("wheel");
        "pan" === n
          ? (e.preventDefault(),
            (this.panOnlyZoomed && !this.canZoomOut()) ||
              this.applyChange({
                panX: 2 * -e.deltaX,
                panY: 2 * -e.deltaY,
                bounce: !1,
              }))
          : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(e);
      }
      onMouseMove(e) {
        this.panWithMouse(e);
      }
      onKeydown(e) {
        "Escape" === e.key && this.toggleFS();
      }
      onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
      setTransform() {
        this.emit("beforeTransform");
        const { current: e, target: i, content: n, contentRect: o } = this,
          s = Object.assign({}, E);
        for (const n of b) {
          const o = "e" == n || "f" === n ? P : 1e5;
          (s[n] = t(e[n], o)),
            Math.abs(i[n] - e[n]) < ("e" == n || "f" === n ? 0.51 : 0.001) &&
              (e[n] = i[n]);
        }
        let { a: r, b: a, c: l, d: c, e: d, f: u } = s,
          h = `matrix(${r}, ${a}, ${l}, ${c}, ${d}, ${u})`,
          p =
            n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        if (
          (this.option("transformParent") && (p = p.parentElement || p),
          p.style.transform === h)
        )
          return;
        p.style.transform = h;
        const { contentWidth: f, contentHeight: g } =
          this.calculateContentDim();
        (o.width = f), (o.height = g), this.emit("afterTransform");
      }
      updateMetrics(e = !1) {
        var i;
        if (!this || this.state === v.Destroy) return;
        if (this.isContentLoading) return;
        const n = Math.max(
            1,
            (null === (i = window.visualViewport) || void 0 === i
              ? void 0
              : i.scale) || 1
          ),
          { container: o, content: s } = this,
          r = s instanceof HTMLImageElement,
          a = o.getBoundingClientRect(),
          l = getComputedStyle(this.container);
        let c = a.width * n,
          d = a.height * n;
        const u = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
          h = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
          p = d - u;
        this.containerRect = {
          width: c,
          height: d,
          innerWidth: h,
          innerHeight: p,
        };
        let f = this.option("width") || "auto",
          g = this.option("height") || "auto";
        "auto" === f &&
          (f =
            parseFloat(s.dataset.width || "") ||
            ((e) => {
              let t = 0;
              return (
                (t =
                  e instanceof HTMLImageElement
                    ? e.naturalWidth
                    : e instanceof SVGElement
                    ? e.width.baseVal.value
                    : Math.max(e.offsetWidth, e.scrollWidth)),
                t || 0
              );
            })(s)),
          "auto" === g &&
            (g =
              parseFloat(s.dataset.height || "") ||
              ((e) => {
                let t = 0;
                return (
                  (t =
                    e instanceof HTMLImageElement
                      ? e.naturalHeight
                      : e instanceof SVGElement
                      ? e.height.baseVal.value
                      : Math.max(e.offsetHeight, e.scrollHeight)),
                  t || 0
                );
              })(s));
        let m =
          s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
        this.option("transformParent") && (m = m.parentElement || m);
        const b = m.getAttribute("style") || "";
        m.style.setProperty("transform", "none", "important"),
          r && ((m.style.width = ""), (m.style.height = "")),
          m.offsetHeight;
        const y = s.getBoundingClientRect();
        let w = y.width * n,
          x = y.height * n,
          S = 0,
          T = 0;
        r &&
          (Math.abs(f - w) > 1 || Math.abs(g - x) > 1) &&
          ({
            width: w,
            height: x,
            top: S,
            left: T,
          } = ((e, t, i, n) => {
            const o = i / n;
            return (
              o > e / t ? ((i = e), (n = e / o)) : ((i = t * o), (n = t)),
              { width: i, height: n, top: 0.5 * (t - n), left: 0.5 * (e - i) }
            );
          })(w, x, f, g)),
          (this.contentRect = Object.assign(
            Object.assign({}, this.contentRect),
            {
              top: y.top - a.top + S,
              bottom: a.bottom - y.bottom + S,
              left: y.left - a.left + T,
              right: a.right - y.right + T,
              fitWidth: w,
              fitHeight: x,
              width: w,
              height: x,
              fullWidth: f,
              fullHeight: g,
            }
          )),
          (m.style.cssText = b),
          r && ((m.style.width = `${w}px`), (m.style.height = `${x}px`)),
          this.setTransform(),
          !0 !== e && this.emit("refresh"),
          this.ignoreBounds ||
            (t(this.targetScale) < t(this.minScale)
              ? this.zoomTo(this.minScale, { friction: 0 })
              : this.targetScale > this.maxScale
              ? this.zoomTo(this.maxScale, { friction: 0 })
              : this.state === v.Init ||
                this.checkBounds().inBounds ||
                this.requestTick()),
          this.updateControls();
      }
      calculateBounds() {
        const { contentWidth: e, contentHeight: i } = this.calculateContentDim(
            this.target
          ),
          { targetScale: n, lockedAxis: o } = this,
          { fitWidth: s, fitHeight: r } = this.contentRect;
        let a = 0,
          l = 0,
          c = 0,
          d = 0;
        const u = this.option("infinite");
        if (!0 === u || (o && u === o))
          (a = -1 / 0), (c = 1 / 0), (l = -1 / 0), (d = 1 / 0);
        else {
          let { containerRect: o, contentRect: u } = this,
            h = t(s * n, P),
            p = t(r * n, P),
            { innerWidth: f, innerHeight: g } = o;
          if (
            (o.width === h && (f = o.width),
            o.width === p && (g = o.height),
            e > f)
          ) {
            (c = 0.5 * (e - f)), (a = -1 * c);
            let t = 0.5 * (u.right - u.left);
            (a += t), (c += t);
          }
          if (
            (s > f && e < f && ((a -= 0.5 * (s - f)), (c -= 0.5 * (s - f))),
            i > g)
          ) {
            (d = 0.5 * (i - g)), (l = -1 * d);
            let e = 0.5 * (u.bottom - u.top);
            (l += e), (d += e);
          }
          r > g && i < g && ((a -= 0.5 * (r - g)), (c -= 0.5 * (r - g)));
        }
        return { x: { min: a, max: c }, y: { min: l, max: d } };
      }
      getBounds() {
        const e = this.option("bounds");
        return "auto" !== e ? e : this.calculateBounds();
      }
      updateControls() {
        const e = this,
          i = e.container,
          { panMode: n, contentRect: o, targetScale: s, minScale: a } = e;
        let l = a,
          c = e.option("click") || !1;
        c && (l = e.getNextScale(c));
        let d = e.canZoomIn(),
          u = e.canZoomOut(),
          h = n === A && !!this.option("touch"),
          p = u && h;
        if (
          (h &&
            (t(s) < t(a) && !this.panOnlyZoomed && (p = !0),
            (t(o.width, 1) > t(o.fitWidth, 1) ||
              t(o.height, 1) > t(o.fitHeight, 1)) &&
              (p = !0)),
          t(o.width * s, 1) < t(o.fitWidth, 1) && (p = !1),
          n === M && (p = !1),
          r(i, this.cn("isDraggable"), p),
          !this.option("zoom"))
        )
          return;
        let f = d && t(l) > t(s),
          g = !f && !p && u && t(l) < t(s);
        r(i, this.cn("canZoomIn"), f), r(i, this.cn("canZoomOut"), g);
        for (const e of i.querySelectorAll("[data-panzoom-action]")) {
          let t = !1,
            i = !1;
          switch (e.dataset.panzoomAction) {
            case "zoomIn":
              d ? (t = !0) : (i = !0);
              break;
            case "zoomOut":
              u ? (t = !0) : (i = !0);
              break;
            case "toggleZoom":
            case "iterateZoom":
              d || u ? (t = !0) : (i = !0);
              const n = e.querySelector("g");
              n && (n.style.display = d ? "" : "none");
          }
          t
            ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex"))
            : i &&
              (e.setAttribute("disabled", ""),
              e.setAttribute("tabindex", "-1"));
        }
      }
      panTo({
        x: e = this.target.e,
        y: t = this.target.f,
        scale: i = this.targetScale,
        friction: n = this.option("friction"),
        angle: o = 0,
        originX: s = 0,
        originY: r = 0,
        flipX: a = !1,
        flipY: l = !1,
        ignoreBounds: c = !1,
      }) {
        this.state !== v.Destroy &&
          this.applyChange({
            panX: e - this.target.e,
            panY: t - this.target.f,
            scale: i / this.targetScale,
            angle: o,
            originX: s,
            originY: r,
            friction: n,
            flipX: a,
            flipY: l,
            ignoreBounds: c,
          });
      }
      applyChange({
        panX: e = 0,
        panY: i = 0,
        scale: n = 1,
        angle: o = 0,
        originX: s = -this.current.e,
        originY: r = -this.current.f,
        friction: a = this.option("friction"),
        flipX: l = !1,
        flipY: c = !1,
        ignoreBounds: d = !1,
        bounce: u = this.option("bounce"),
      }) {
        const h = this.state;
        if (h === v.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.friction = a || 0),
          (this.ignoreBounds = d);
        const { current: p } = this,
          f = p.e,
          g = p.f,
          m = this.getMatrix(this.target);
        let y = new DOMMatrix().translate(f, g).translate(s, r).translate(e, i);
        if (this.option("zoom")) {
          if (!d) {
            const e = this.targetScale,
              t = this.minScale,
              i = this.maxScale;
            e * n < t && (n = t / e), e * n > i && (n = i / e);
          }
          y = y.scale(n);
        }
        (y = y.translate(-s, -r).translate(-f, -g).multiply(m)),
          o && (y = y.rotate(o)),
          l && (y = y.scale(-1, 1)),
          c && (y = y.scale(1, -1));
        for (const e of b)
          "e" !== e &&
          "f" !== e &&
          (y[e] > this.minScale + 1e-5 || y[e] < this.minScale - 1e-5)
            ? (this.target[e] = y[e])
            : (this.target[e] = t(y[e], P));
        (this.targetScale < this.scale ||
          Math.abs(n - 1) > 0.1 ||
          this.panMode === M ||
          !1 === u) &&
          !d &&
          this.clampTargetBounds(),
          h === v.Init
            ? this.animate()
            : this.isResting || ((this.state = v.Panning), this.requestTick());
      }
      stop(e = !1) {
        if (this.state === v.Init || this.state === v.Destroy) return;
        const t = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), (this.rAF = null)),
          (this.isBouncingX = !1),
          (this.isBouncingY = !1);
        for (const t of b)
          (this.velocity[t] = 0),
            "current" === e
              ? (this.current[t] = this.target[t])
              : "target" === e && (this.target[t] = this.current[t]);
        this.setTransform(),
          C(this.container, "is-scaling"),
          C(this.container, "is-animating"),
          (this.isTicking = !1),
          (this.state = v.Ready),
          t && (this.emit("endAnimation"), this.updateControls());
      }
      requestTick() {
        this.isTicking ||
          (this.emit("startAnimation"),
          this.updateControls(),
          k(this.container, "is-animating"),
          this.isScaling && k(this.container, "is-scaling")),
          (this.isTicking = !0),
          this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
      }
      panWithMouse(e, i = this.option("mouseMoveFriction")) {
        if (((this.pmme = e), this.panMode !== M || !e)) return;
        if (t(this.targetScale) <= t(this.minScale)) return;
        this.emit("mouseMove", e);
        const { container: n, containerRect: o, contentRect: s } = this,
          r = o.width,
          a = o.height,
          l = n.getBoundingClientRect(),
          c = (e.clientX || 0) - l.left,
          d = (e.clientY || 0) - l.top;
        let { contentWidth: u, contentHeight: h } = this.calculateContentDim(
          this.target
        );
        const p = this.option("mouseMoveFactor");
        p > 1 && (u !== r && (u *= p), h !== a && (h *= p));
        let f = 0.5 * (u - r) - (((c / r) * 100) / 100) * (u - r);
        f += 0.5 * (s.right - s.left);
        let g = 0.5 * (h - a) - (((d / a) * 100) / 100) * (h - a);
        (g += 0.5 * (s.bottom - s.top)),
          this.applyChange({
            panX: f - this.target.e,
            panY: g - this.target.f,
            friction: i,
          });
      }
      zoomWithWheel(e) {
        if (this.state === v.Destroy || this.state === v.Init) return;
        const i = Date.now();
        if (i - this.pwt < 45) return void e.preventDefault();
        this.pwt = i;
        var n = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(
          function (e, t) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }
        );
        const o = Math.max(-1, Math.min(1, n)),
          { targetScale: s, maxScale: r, minScale: a } = this;
        let l = (s * (100 + 45 * o)) / 100;
        t(l) < t(a) && t(s) <= t(a)
          ? ((this.cwd += Math.abs(o)), (l = a))
          : t(l) > t(r) && t(s) >= t(r)
          ? ((this.cwd += Math.abs(o)), (l = r))
          : ((this.cwd = 0), (l = Math.max(Math.min(l, r), a))),
          this.cwd > this.option("wheelLimit") ||
            (e.preventDefault(), t(l) !== t(s) && this.zoomTo(l, { event: e }));
      }
      canZoomIn() {
        return (
          this.option("zoom") &&
          (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) ||
            t(this.targetScale) < t(this.maxScale))
        );
      }
      canZoomOut() {
        return this.option("zoom") && t(this.targetScale) > t(this.minScale);
      }
      zoomIn(e = 1.25, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomOut(e = 0.8, t) {
        this.zoomTo(this.targetScale * e, t);
      }
      zoomToFit(e) {
        this.zoomTo("fit", e);
      }
      zoomToCover(e) {
        this.zoomTo("cover", e);
      }
      zoomToFull(e) {
        this.zoomTo("full", e);
      }
      zoomToMax(e) {
        this.zoomTo("max", e);
      }
      toggleZoom(e) {
        this.zoomTo(this.getNextScale("toggleZoom"), e);
      }
      toggleMax(e) {
        this.zoomTo(this.getNextScale("toggleMax"), e);
      }
      toggleCover(e) {
        this.zoomTo(this.getNextScale("toggleCover"), e);
      }
      iterateZoom(e) {
        this.zoomTo("next", e);
      }
      zoomTo(
        e = 1,
        {
          friction: t = "auto",
          originX: i = "auto",
          originY: n = "auto",
          event: o,
        } = {}
      ) {
        if (this.isContentLoading || this.state === v.Destroy) return;
        const {
          targetScale: s,
          fullScale: r,
          maxScale: a,
          coverScale: l,
        } = this;
        if (
          (this.stop(),
          this.panMode === M && (o = this.pmme || o),
          o || "auto" === i || "auto" === n)
        ) {
          const e = this.content.getBoundingClientRect(),
            t = this.container.getBoundingClientRect(),
            s = o ? o.clientX : t.left + 0.5 * t.width,
            r = o ? o.clientY : t.top + 0.5 * t.height;
          (i = s - e.left - 0.5 * e.width), (n = r - e.top - 0.5 * e.height);
        }
        let c = 1;
        "number" == typeof e
          ? (c = e)
          : "full" === e
          ? (c = r)
          : "cover" === e
          ? (c = l)
          : "max" === e
          ? (c = a)
          : "fit" === e
          ? (c = 1)
          : "next" === e && (c = this.getNextScale("iterateZoom")),
          (c = c / s || 1),
          (t = "auto" === t ? (c > 1 ? 0.15 : 0.25) : t),
          this.applyChange({ scale: c, originX: i, originY: n, friction: t }),
          o && this.panMode === M && this.panWithMouse(o, t);
      }
      rotateCCW() {
        this.applyChange({ angle: -90 });
      }
      rotateCW() {
        this.applyChange({ angle: 90 });
      }
      flipX() {
        this.applyChange({ flipX: !0 });
      }
      flipY() {
        this.applyChange({ flipY: !0 });
      }
      fitX() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.height - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.width / t.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      fitY() {
        this.stop("target");
        const { containerRect: e, contentRect: t, target: i } = this;
        this.applyChange({
          panX: 0.5 * e.width - (t.left + 0.5 * t.fitWidth) - i.e,
          panY: 0.5 * e.innerHeight - (t.top + 0.5 * t.fitHeight) - i.f,
          scale: e.height / t.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0,
        });
      }
      toggleFS() {
        const { container: e } = this,
          t = this.cn("inFullscreen"),
          i = this.cn("htmlHasFullscreen");
        e.classList.toggle(t);
        const n = e.classList.contains(t);
        n
          ? (document.documentElement.classList.add(i),
            document.addEventListener("keydown", this.onKeydown, !0))
          : (document.documentElement.classList.remove(i),
            document.removeEventListener("keydown", this.onKeydown, !0)),
          this.updateMetrics(),
          this.emit(n ? "enterFS" : "exitFS");
      }
      getMatrix(e = this.current) {
        const { a: t, b: i, c: n, d: o, e: s, f: r } = e;
        return new DOMMatrix([t, i, n, o, s, r]);
      }
      reset(e) {
        if (this.state !== v.Init && this.state !== v.Destroy) {
          this.stop("current");
          for (const e of b) this.target[e] = E[e];
          (this.target.a = this.minScale),
            (this.target.d = this.minScale),
            this.clampTargetBounds(),
            this.isResting ||
              ((this.friction = void 0 === e ? this.option("friction") : e),
              (this.state = v.Panning),
              this.requestTick());
        }
      }
      destroy() {
        this.stop(),
          (this.state = v.Destroy),
          this.detachEvents(),
          this.detachObserver();
        const { container: e, content: t } = this,
          i = this.option("classes") || {};
        for (const t of Object.values(i)) e.classList.remove(t + "");
        t &&
          (t.removeEventListener("load", this.onLoad),
          t.removeEventListener("error", this.onError)),
          this.detachPlugins();
      }
    }
    Object.defineProperty($, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: w,
    }),
      Object.defineProperty($, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {},
      });
    const j = function (e, t) {
        let i = !0;
        return (...n) => {
          i &&
            ((i = !1),
            e(...n),
            setTimeout(() => {
              i = !0;
            }, t));
        };
      },
      D = (e, t) => {
        let i = [];
        return (
          e.childNodes.forEach((e) => {
            e.nodeType !== Node.ELEMENT_NODE ||
              (t && !e.matches(t)) ||
              i.push(e);
          }),
          i
        );
      };
    var I;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Destroy = 2)] = "Destroy");
    })(I || (I = {}));
    const z = (e) => {
        if ("string" == typeof e || e instanceof HTMLElement) e = { html: e };
        else {
          const t = e.thumb;
          void 0 !== t &&
            ("string" == typeof t && (e.thumbSrc = t),
            t instanceof HTMLImageElement &&
              ((e.thumbEl = t), (e.thumbElSrc = t.src), (e.thumbSrc = t.src)),
            delete e.thumb);
        }
        return Object.assign(
          {
            html: "",
            el: null,
            isDom: !1,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: !1,
          },
          e
        );
      },
      R = (e = {}) =>
        Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, e);
    class H extends g {
      constructor(e, t) {
        super(t),
          Object.defineProperty(this, "instance", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
      }
      attach() {}
      detach() {}
    }
    class N extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "isDynamic", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "list", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onRefresh() {
        this.refresh();
      }
      build() {
        let e = this.list;
        if (!e) {
          (e = document.createElement("ul")),
            k(e, this.cn("list")),
            e.setAttribute("role", "tablist");
          const t = this.instance.container;
          t.appendChild(e), k(t, this.cn("hasDots")), (this.list = e);
        }
        return e;
      }
      refresh() {
        var e;
        const t = this.instance.pages.length,
          i = Math.min(2, this.option("minCount")),
          n = Math.max(2e3, this.option("maxCount")),
          o = this.option("dynamicFrom");
        if (t < i || t > n) return void this.cleanup();
        const s = "number" == typeof o && t > 5 && t >= o,
          a =
            !this.list ||
            this.isDynamic !== s ||
            this.list.children.length !== t;
        a && this.cleanup();
        const l = this.build();
        if ((r(l, this.cn("isDynamic"), !!s), a))
          for (let e = 0; e < t; e++) l.append(this.createItem(e));
        let c,
          d = 0;
        for (const t of [...l.children]) {
          const i = d === this.instance.page;
          i && (c = t),
            r(t, this.cn("isCurrent"), i),
            null === (e = t.children[0]) ||
              void 0 === e ||
              e.setAttribute("aria-selected", i ? "true" : "false");
          for (const e of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
            C(t, this.cn(e));
          d++;
        }
        if (((c = c || l.firstChild), s && c)) {
          const e = c.previousElementSibling,
            t = e && e.previousElementSibling;
          k(e, this.cn("isPrev")), k(t, this.cn("isBeforePrev"));
          const i = c.nextElementSibling,
            n = i && i.nextElementSibling;
          k(i, this.cn("isNext")), k(n, this.cn("isAfterNext"));
        }
        this.isDynamic = s;
      }
      createItem(e = 0) {
        var t;
        const i = document.createElement("li");
        i.setAttribute("role", "presentation");
        const n = o(
          this.instance
            .localize(this.option("dotTpl"), [["%d", e + 1]])
            .replace(/\%i/g, e + "")
        );
        return (
          i.appendChild(n),
          null === (t = i.children[0]) ||
            void 0 === t ||
            t.setAttribute("role", "tab"),
          i
        );
      }
      cleanup() {
        this.list && (this.list.remove(), (this.list = null)),
          (this.isDynamic = !1),
          C(this.instance.container, this.cn("hasDots"));
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(N, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          list: "f-carousel__dots",
          isDynamic: "is-dynamic",
          hasDots: "has-dots",
          dot: "f-carousel__dot",
          isBeforePrev: "is-before-prev",
          isPrev: "is-prev",
          isCurrent: "is-current",
          isNext: "is-next",
          isAfterNext: "is-after-next",
        },
        dotTpl:
          '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
        dynamicFrom: 11,
        maxCount: 1 / 0,
        minCount: 2,
      },
    });
    const _ = "disabled",
      q = "next",
      B = "prev";
    class W extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prev", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "next", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "isDom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      onRefresh() {
        const e = this.instance,
          t = e.pages.length,
          i = e.page;
        if (t < 2) return void this.cleanup();
        this.build();
        let n = this.prev,
          o = this.next;
        n &&
          o &&
          (n.removeAttribute(_),
          o.removeAttribute(_),
          e.isInfinite ||
            (i <= 0 && n.setAttribute(_, ""),
            i >= t - 1 && o.setAttribute(_, "")));
      }
      addBtn(e) {
        var t;
        const i = this.instance,
          n = document.createElement("button");
        n.setAttribute("tabindex", "0"),
          n.setAttribute("title", i.localize(`{{${e.toUpperCase()}}}`)),
          k(
            n,
            this.cn("button") + " " + this.cn(e === q ? "isNext" : "isPrev")
          );
        const o = i.isRTL ? (e === q ? B : q) : e;
        var s;
        return (
          (n.innerHTML = i.localize(this.option(`${o}Tpl`))),
          (n.dataset[
            `carousel${
              ((s = e),
              s
                ? s.match("^[a-z]")
                  ? s.charAt(0).toUpperCase() + s.substring(1)
                  : s
                : "")
            }`
          ] = "true"),
          null === (t = this.container) || void 0 === t || t.appendChild(n),
          n
        );
      }
      build() {
        const e = this.instance.container,
          t = this.cn("container");
        let { container: i, prev: n, next: o } = this;
        i || ((i = e.querySelector("." + t)), (this.isDom = !!i)),
          i || ((i = document.createElement("div")), k(i, t), e.appendChild(i)),
          (this.container = i),
          o || (o = i.querySelector("[data-carousel-next]")),
          o || (o = this.addBtn(q)),
          (this.next = o),
          n || (n = i.querySelector("[data-carousel-prev]")),
          n || (n = this.addBtn(B)),
          (this.prev = n);
      }
      cleanup() {
        this.isDom ||
          (this.prev && this.prev.remove(),
          this.next && this.next.remove(),
          this.container && this.container.remove()),
          (this.prev = null),
          (this.next = null),
          (this.container = null),
          (this.isDom = !1);
      }
      attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
      detach() {
        this.instance.off(["refresh", "change"], this.onRefresh),
          this.cleanup();
      }
    }
    Object.defineProperty(W, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        classes: {
          container: "f-carousel__nav",
          button: "f-button",
          isNext: "is-next",
          isPrev: "is-prev",
        },
        nextTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
        prevTpl:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
      },
    });
    class X extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "selectedIndex", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "target", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "nav", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      addAsTargetFor(e) {
        (this.target = this.instance), (this.nav = e), this.attachEvents();
      }
      addAsNavFor(e) {
        (this.nav = this.instance), (this.target = e), this.attachEvents();
      }
      attachEvents() {
        const { nav: e, target: t } = this;
        e &&
          t &&
          ((e.options.initialSlide = t.options.initialPage),
          e.state === I.Ready
            ? this.onNavReady(e)
            : e.on("ready", this.onNavReady),
          t.state === I.Ready
            ? this.onTargetReady(t)
            : t.on("ready", this.onTargetReady));
      }
      onNavReady(e) {
        e.on("createSlide", this.onNavCreateSlide),
          e.on("Panzoom.click", this.onNavClick),
          e.on("Panzoom.touchEnd", this.onNavTouch),
          this.onTargetChange();
      }
      onTargetReady(e) {
        e.on("change", this.onTargetChange),
          e.on("Panzoom.refresh", this.onTargetChange),
          this.onTargetChange();
      }
      onNavClick(e, t, i) {
        this.onNavTouch(e, e.panzoom, i);
      }
      onNavTouch(e, t, i) {
        var n, o;
        if (Math.abs(t.dragOffset.x) > 3 || Math.abs(t.dragOffset.y) > 3)
          return;
        const s = i.target,
          { nav: r, target: a } = this;
        if (!r || !a || !s) return;
        const l = s.closest("[data-index]");
        if ((i.stopPropagation(), i.preventDefault(), !l)) return;
        const c = parseInt(l.dataset.index || "", 10) || 0,
          d = a.getPageForSlide(c),
          u = r.getPageForSlide(c);
        r.slideTo(u),
          a.slideTo(d, {
            friction:
              (null ===
                (o =
                  null === (n = this.nav) || void 0 === n
                    ? void 0
                    : n.plugins) || void 0 === o
                ? void 0
                : o.Sync.option("friction")) || 0,
          }),
          this.markSelectedSlide(c);
      }
      onNavCreateSlide(e, t) {
        t.index === this.selectedIndex && this.markSelectedSlide(t.index);
      }
      onTargetChange() {
        var e, t;
        const { target: i, nav: n } = this;
        if (!i || !n) return;
        if (n.state !== I.Ready || i.state !== I.Ready) return;
        const o =
            null ===
              (t =
                null === (e = i.pages[i.page]) || void 0 === e
                  ? void 0
                  : e.slides[0]) || void 0 === t
              ? void 0
              : t.index,
          s = n.getPageForSlide(o);
        this.markSelectedSlide(o),
          n.slideTo(
            s,
            null === n.prevPage && null === i.prevPage
              ? { friction: 0 }
              : void 0
          );
      }
      markSelectedSlide(e) {
        const t = this.nav;
        t &&
          t.state === I.Ready &&
          ((this.selectedIndex = e),
          [...t.slides].map((t) => {
            t.el &&
              t.el.classList[t.index === e ? "add" : "remove"](
                "is-nav-selected"
              );
          }));
      }
      attach() {
        const e = this;
        let t = e.options.target,
          i = e.options.nav;
        t ? e.addAsNavFor(t) : i && e.addAsTargetFor(i);
      }
      detach() {
        const e = this,
          t = e.nav,
          i = e.target;
        t &&
          (t.off("ready", e.onNavReady),
          t.off("createSlide", e.onNavCreateSlide),
          t.off("Panzoom.click", e.onNavClick),
          t.off("Panzoom.touchEnd", e.onNavTouch)),
          (e.nav = null),
          i &&
            (i.off("ready", e.onTargetReady),
            i.off("refresh", e.onTargetChange),
            i.off("change", e.onTargetChange)),
          (e.target = null);
      }
    }
    Object.defineProperty(X, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: { friction: 0.35 },
    });
    const V = { Navigation: W, Dots: N, Sync: X },
      Y = "animationend",
      U = "isSelected",
      G = "slide";
    class Z extends m {
      get axis() {
        return this.isHorizontal ? "e" : "f";
      }
      get isEnabled() {
        return this.state === I.Ready;
      }
      get isInfinite() {
        let e = !1;
        const { contentDim: t, viewportDim: i, pages: n, slides: o } = this,
          s = o[0];
        return (
          n.length >= 2 && s && t + s.dim >= i && (e = this.option("infinite")),
          e
        );
      }
      get isRTL() {
        return "rtl" === this.option("direction");
      }
      get isHorizontal() {
        return "x" === this.option("axis");
      }
      constructor(e, t = {}, i = {}) {
        if (
          (super(),
          Object.defineProperty(this, "bp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "",
          }),
          Object.defineProperty(this, "lp", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "userOptions", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I.Init,
          }),
          Object.defineProperty(this, "page", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "prevPage", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "viewport", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "slides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "pages", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "panzoom", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "inTransition", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: new Set(),
          }),
          Object.defineProperty(this, "contentDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "viewportDim", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          "string" == typeof e && (e = document.querySelector(e)),
          !e || !T(e))
        )
          throw new Error("No Element found");
        (this.container = e),
          (this.slideNext = j(this.slideNext.bind(this), 150)),
          (this.slidePrev = j(this.slidePrev.bind(this), 150)),
          (this.userOptions = t),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.processOptions();
          });
      }
      processOptions() {
        var e, t;
        const i = p({}, Z.defaults, this.userOptions);
        let n = "";
        const o = i.breakpoints;
        if (o && h(o))
          for (const [e, t] of Object.entries(o))
            window.matchMedia(e).matches && h(t) && ((n += e), p(i, t));
        (n === this.bp && this.state !== I.Init) ||
          ((this.bp = n),
          this.state === I.Ready &&
            (i.initialSlide =
              (null ===
                (t =
                  null === (e = this.pages[this.page]) || void 0 === e
                    ? void 0
                    : e.slides[0]) || void 0 === t
                ? void 0
                : t.index) || 0),
          this.state !== I.Init && this.destroy(),
          super.setOptions(i),
          !1 === this.option("enabled")
            ? this.attachEvents()
            : setTimeout(() => {
                this.init();
              }, 0));
      }
      init() {
        (this.state = I.Init),
          this.emit("init"),
          this.attachPlugins(
            Object.assign(Object.assign({}, Z.Plugins), this.userPlugins)
          ),
          this.emit("attachPlugins"),
          this.initLayout(),
          this.initSlides(),
          this.updateMetrics(),
          this.setInitialPosition(),
          this.initPanzoom(),
          this.attachEvents(),
          (this.state = I.Ready),
          this.emit("ready");
      }
      initLayout() {
        const { container: e } = this,
          t = this.option("classes");
        k(e, this.cn("container")),
          r(e, t.isLTR, !this.isRTL),
          r(e, t.isRTL, this.isRTL),
          r(e, t.isVertical, !this.isHorizontal),
          r(e, t.isHorizontal, this.isHorizontal);
        let i = this.option("viewport") || e.querySelector(`.${t.viewport}`);
        i ||
          ((i = document.createElement("div")),
          k(i, t.viewport),
          i.append(...D(e, `.${t.slide}`)),
          e.prepend(i)),
          i.addEventListener("scroll", this.onScroll);
        let n = this.option("track") || e.querySelector(`.${t.track}`);
        n ||
          ((n = document.createElement("div")),
          k(n, t.track),
          n.append(...Array.from(i.childNodes))),
          n.setAttribute("aria-live", "polite"),
          i.contains(n) || i.prepend(n),
          (this.viewport = i),
          (this.track = n),
          this.emit("initLayout");
      }
      initSlides() {
        const { track: e } = this;
        if (!e) return;
        const t = [...this.slides],
          i = [];
        [...D(e, `.${this.cn(G)}`)].forEach((e) => {
          if (T(e)) {
            const t = z({ el: e, isDom: !0, index: this.slides.length });
            i.push(t);
          }
        });
        for (let e of [...(this.option("slides", []) || []), ...t])
          i.push(z(e));
        this.slides = i;
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of i)
          this.emit("beforeInitSlide", e, e.index),
            this.emit("initSlide", e, e.index);
        this.emit("initSlides");
      }
      setInitialPage() {
        const e = this.option("initialSlide");
        this.page =
          "number" == typeof e
            ? this.getPageForSlide(e)
            : parseInt(this.option("initialPage", 0) + "", 10) || 0;
      }
      setInitialPosition() {
        const { track: e, pages: t, isHorizontal: i } = this;
        if (!e || !t.length) return;
        let n = this.page;
        t[n] || (this.page = n = 0);
        const o = (t[n].pos || 0) * (this.isRTL && i ? 1 : -1),
          s = i ? `${o}px` : "0",
          r = i ? "0" : `${o}px`;
        (e.style.transform = `translate3d(${s}, ${r}, 0) scale(1)`),
          this.option("adaptiveHeight") && this.setViewportHeight();
      }
      initPanzoom() {
        this.panzoom && (this.panzoom.destroy(), (this.panzoom = null));
        const e = this.option("Panzoom") || {};
        (this.panzoom = new $(
          this.viewport,
          p(
            {},
            {
              content: this.track,
              zoom: !1,
              panOnlyZoomed: !1,
              lockAxis: this.isHorizontal ? "x" : "y",
              infinite: this.isInfinite,
              click: !1,
              dblClick: !1,
              touch: (e) => !(this.pages.length < 2 && !e.options.infinite),
              bounds: () => this.getBounds(),
              maxVelocity: (e) =>
                Math.abs(e.target[this.axis] - e.current[this.axis]) <
                2 * this.viewportDim
                  ? 100
                  : 0,
            },
            e
          )
        )),
          this.panzoom.on("*", (e, t, ...i) => {
            this.emit(`Panzoom.${t}`, e, ...i);
          }),
          this.panzoom.on("decel", this.onDecel),
          this.panzoom.on("refresh", this.onRefresh),
          this.panzoom.on("beforeTransform", this.onBeforeTransform),
          this.panzoom.on("endAnimation", this.onEndAnimation);
      }
      attachEvents() {
        const e = this.container;
        e &&
          (e.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !1,
          }),
          e.addEventListener("slideTo", this.onSlideTo)),
          window.addEventListener("resize", this.onResize);
      }
      createPages() {
        let e = [];
        const { contentDim: t, viewportDim: i } = this;
        let n = this.option("slidesPerPage");
        n =
          ("auto" === n || t <= i) && !1 !== this.option("fill")
            ? 1 / 0
            : parseFloat(n + "");
        let o = 0,
          s = 0,
          r = 0;
        for (const t of this.slides)
          (!e.length || s + t.dim - i > 0.05 || r >= n) &&
            (e.push(R()), (o = e.length - 1), (s = 0), (r = 0)),
            e[o].slides.push(t),
            (s += t.dim + t.gap),
            r++;
        return e;
      }
      processPages() {
        const e = this.pages,
          { contentDim: i, viewportDim: n, isInfinite: o } = this,
          s = this.option("center"),
          r = this.option("fill"),
          a = r && s && i > n && !o;
        if (
          (e.forEach((e, t) => {
            var o;
            (e.index = t),
              (e.pos =
                (null === (o = e.slides[0]) || void 0 === o ? void 0 : o.pos) ||
                0),
              (e.dim = 0);
            for (const [t, i] of e.slides.entries())
              (e.dim += i.dim), t < e.slides.length - 1 && (e.dim += i.gap);
            a && e.pos + 0.5 * e.dim < 0.5 * n
              ? (e.pos = 0)
              : a && e.pos + 0.5 * e.dim >= i - 0.5 * n
              ? (e.pos = i - n)
              : s && (e.pos += -0.5 * (n - e.dim));
          }),
          e.forEach((e) => {
            r &&
              !o &&
              i > n &&
              ((e.pos = Math.max(e.pos, 0)), (e.pos = Math.min(e.pos, i - n))),
              (e.pos = t(e.pos, 1e3)),
              (e.dim = t(e.dim, 1e3)),
              Math.abs(e.pos) <= 0.1 && (e.pos = 0);
          }),
          o)
        )
          return e;
        const l = [];
        let c;
        return (
          e.forEach((e) => {
            const t = Object.assign({}, e);
            c && t.pos === c.pos
              ? ((c.dim += t.dim), (c.slides = [...c.slides, ...t.slides]))
              : ((t.index = l.length), (c = t), l.push(t));
          }),
          l
        );
      }
      getPageFromIndex(e = 0) {
        const t = this.pages.length;
        let i;
        return (
          (e = parseInt((e || 0).toString()) || 0),
          (i = this.isInfinite
            ? ((e % t) + t) % t
            : Math.max(Math.min(e, t - 1), 0)),
          i
        );
      }
      getSlideMetrics(e) {
        var i, n;
        const o = this.isHorizontal ? "width" : "height";
        let s = 0,
          r = 0,
          a = e.el;
        const l = !(!a || a.parentNode);
        if (
          (a
            ? (s = parseFloat(a.dataset[o] || "") || 0)
            : ((a = document.createElement("div")),
              (a.style.visibility = "hidden"),
              (this.track || document.body).prepend(a)),
          k(a, this.cn(G) + " " + e.class + " " + e.customClass),
          s)
        )
          (a.style[o] = `${s}px`),
            (a.style["width" === o ? "height" : "width"] = "");
        else {
          l && (this.track || document.body).prepend(a),
            (s =
              a.getBoundingClientRect()[o] *
              Math.max(
                1,
                (null === (i = window.visualViewport) || void 0 === i
                  ? void 0
                  : i.scale) || 1
              ));
          let e = a[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
          e - 1 > s && (s = e);
        }
        const c = getComputedStyle(a);
        return (
          "content-box" === c.boxSizing &&
            (this.isHorizontal
              ? ((s += parseFloat(c.paddingLeft) || 0),
                (s += parseFloat(c.paddingRight) || 0))
              : ((s += parseFloat(c.paddingTop) || 0),
                (s += parseFloat(c.paddingBottom) || 0))),
          (r =
            parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) ||
            0),
          l
            ? null === (n = a.parentElement) || void 0 === n || n.removeChild(a)
            : e.el || a.remove(),
          { dim: t(s, 1e3), gap: t(r, 1e3) }
        );
      }
      getBounds() {
        const { isInfinite: e, isRTL: t, isHorizontal: i, pages: n } = this;
        let o = { min: 0, max: 0 };
        if (e) o = { min: -1 / 0, max: 1 / 0 };
        else if (n.length) {
          const e = n[0].pos,
            s = n[n.length - 1].pos;
          o = t && i ? { min: e, max: s } : { min: -1 * s, max: -1 * e };
        }
        return { x: i ? o : { min: 0, max: 0 }, y: i ? { min: 0, max: 0 } : o };
      }
      repositionSlides() {
        let e,
          {
            isHorizontal: i,
            isRTL: n,
            isInfinite: o,
            viewport: s,
            viewportDim: r,
            contentDim: a,
            page: l,
            pages: c,
            slides: d,
            panzoom: u,
          } = this,
          h = 0,
          p = 0,
          f = 0,
          g = 0;
        u ? (g = -1 * u.current[this.axis]) : c[l] && (g = c[l].pos || 0),
          (e = i ? (n ? "right" : "left") : "top"),
          n && i && (g *= -1);
        for (const i of d) {
          const n = i.el;
          n
            ? ("top" === e
                ? ((n.style.right = ""), (n.style.left = ""))
                : (n.style.top = ""),
              i.index !== h
                ? (n.style[e] = 0 === p ? "" : `${t(p, 1e3)}px`)
                : (n.style[e] = ""),
              (f += i.dim + i.gap),
              h++)
            : (p += i.dim + i.gap);
        }
        if (o && f && s) {
          let n = getComputedStyle(s),
            o = "padding",
            l = i ? "Right" : "Bottom",
            c = parseFloat(n[o + (i ? "Left" : "Top")]);
          (g -= c), (r += c), (r += parseFloat(n[o + l]));
          for (const i of d)
            i.el &&
              (t(i.pos) < t(r) &&
                t(i.pos + i.dim + i.gap) < t(g) &&
                t(g) > t(a - r) &&
                (i.el.style[e] = `${t(p + f, 1e3)}px`),
              t(i.pos + i.gap) >= t(a - r) &&
                t(i.pos) > t(g + r) &&
                t(g) < t(r) &&
                (i.el.style[e] = `-${t(f, 1e3)}px`));
        }
        let m,
          v,
          b = [...this.inTransition];
        if ((b.length > 1 && ((m = c[b[0]]), (v = c[b[1]])), m && v)) {
          let i = 0;
          for (const n of d)
            n.el
              ? this.inTransition.has(n.index) &&
                m.slides.indexOf(n) < 0 &&
                (n.el.style[e] = `${t(i + (m.pos - v.pos), 1e3)}px`)
              : (i += n.dim + n.gap);
        }
      }
      createSlideEl(e) {
        const { track: t, slides: i } = this;
        if (!t || !e) return;
        if (e.el && e.el.parentNode) return;
        const n = e.el || document.createElement("div");
        k(n, this.cn(G)), k(n, e.class), k(n, e.customClass);
        const o = e.html;
        o &&
          (o instanceof HTMLElement
            ? n.appendChild(o)
            : (n.innerHTML = e.html + ""));
        const s = [];
        i.forEach((e, t) => {
          e.el && s.push(t);
        });
        const r = e.index;
        let a = null;
        s.length &&
          (a =
            i[s.reduce((e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e))]);
        const l =
          a && a.el && a.el.parentNode
            ? a.index < e.index
              ? a.el.nextSibling
              : a.el
            : null;
        t.insertBefore(n, t.contains(l) ? l : null),
          (e.el = n),
          this.emit("createSlide", e);
      }
      removeSlideEl(e, t = !1) {
        const i = null == e ? void 0 : e.el;
        if (!i || !i.parentNode) return;
        const n = this.cn(U);
        if (
          (i.classList.contains(n) && (C(i, n), this.emit("unselectSlide", e)),
          e.isDom && !t)
        )
          return (
            i.removeAttribute("aria-hidden"),
            i.removeAttribute("data-index"),
            void (i.style.left = "")
          );
        this.emit("removeSlide", e);
        const o = new CustomEvent(Y);
        i.dispatchEvent(o), e.el && (e.el.remove(), (e.el = null));
      }
      transitionTo(e = 0, t = this.option("transition")) {
        var i, n, o, s;
        if (!t) return !1;
        const r = this.page,
          { pages: a, panzoom: l } = this;
        e = parseInt((e || 0).toString()) || 0;
        const c = this.getPageFromIndex(e);
        if (
          !l ||
          !a[c] ||
          a.length < 2 ||
          Math.abs(
            ((null ===
              (n =
                null === (i = a[r]) || void 0 === i ? void 0 : i.slides[0]) ||
            void 0 === n
              ? void 0
              : n.dim) || 0) - this.viewportDim
          ) > 1
        )
          return !1;
        const d = e > r ? 1 : -1,
          u = a[c].pos * (this.isRTL ? 1 : -1);
        if (r === c && Math.abs(u - l.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        const h = l.isResting;
        k(this.container, this.cn("inTransition"));
        const p =
            (null === (o = a[r]) || void 0 === o ? void 0 : o.slides[0]) ||
            null,
          f =
            (null === (s = a[c]) || void 0 === s ? void 0 : s.slides[0]) ||
            null;
        this.inTransition.add(f.index), this.createSlideEl(f);
        let g = p.el,
          m = f.el;
        h || t === G || ((t = "fadeFast"), (g = null));
        const v = this.isRTL ? "next" : "prev",
          b = this.isRTL ? "prev" : "next";
        return (
          g &&
            (this.inTransition.add(p.index),
            (p.transition = t),
            g.addEventListener(Y, this.onAnimationEnd),
            g.classList.add(`f-${t}Out`, `to-${d > 0 ? b : v}`)),
          m &&
            ((f.transition = t),
            m.addEventListener(Y, this.onAnimationEnd),
            m.classList.add(`f-${t}In`, `from-${d > 0 ? v : b}`)),
          (l.current[this.axis] = u),
          (l.target[this.axis] = u),
          l.requestTick(),
          this.onChange(c),
          !0
        );
      }
      manageSlideVisiblity() {
        const e = new Set(),
          t = new Set(),
          i = this.getVisibleSlides(
            parseFloat(this.option("preload", 0) + "") || 0
          );
        for (const n of this.slides) i.has(n) ? e.add(n) : t.add(n);
        for (const t of this.inTransition) e.add(this.slides[t]);
        for (const t of e) this.createSlideEl(t), this.lazyLoadSlide(t);
        for (const i of t) e.has(i) || this.removeSlideEl(i);
        this.markSelectedSlides(), this.repositionSlides();
      }
      markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        const e = "aria-hidden";
        let t = this.cn(U);
        if (t)
          for (const i of this.slides) {
            const n = i.el;
            n &&
              ((n.dataset.index = `${i.index}`),
              n.classList.contains("f-thumbs__slide")
                ? this.getVisibleSlides(0).has(i)
                  ? n.removeAttribute(e)
                  : n.setAttribute(e, "true")
                : this.pages[this.page].slides.includes(i)
                ? (n.classList.contains(t) ||
                    (k(n, t), this.emit("selectSlide", i)),
                  n.removeAttribute(e))
                : (n.classList.contains(t) &&
                    (C(n, t), this.emit("unselectSlide", i)),
                  n.setAttribute(e, "true")));
          }
      }
      flipInfiniteTrack() {
        const {
            axis: e,
            isHorizontal: t,
            isInfinite: i,
            isRTL: n,
            viewportDim: o,
            contentDim: s,
          } = this,
          r = this.panzoom;
        if (!r || !i) return;
        let a = r.current[e],
          l = r.target[e] - a,
          c = 0,
          d = 0.5 * o;
        n && t
          ? (a < -d && ((c = -1), (a += s)), a > s - d && ((c = 1), (a -= s)))
          : (a > d && ((c = 1), (a -= s)), a < -s + d && ((c = -1), (a += s))),
          c && ((r.current[e] = a), (r.target[e] = a + l));
      }
      lazyLoadImg(e, t) {
        const i = this,
          n = "f-fadeIn",
          s = "is-preloading";
        let r = !1,
          a = null;
        const l = () => {
          r ||
            ((r = !0),
            a && (a.remove(), (a = null)),
            C(t, s),
            t.complete &&
              (k(t, n),
              setTimeout(() => {
                C(t, n);
              }, 350)),
            this.option("adaptiveHeight") &&
              e.el &&
              this.pages[this.page].slides.indexOf(e) > -1 &&
              (i.updateMetrics(), i.setViewportHeight()),
            this.emit("load", e));
        };
        k(t, s),
          (t.src = t.dataset.lazySrcset || t.dataset.lazySrc || ""),
          delete t.dataset.lazySrc,
          delete t.dataset.lazySrcset,
          t.addEventListener("error", () => {
            l();
          }),
          t.addEventListener("load", () => {
            l();
          }),
          setTimeout(() => {
            const i = t.parentNode;
            i &&
              e.el &&
              (t.complete ? l() : r || ((a = o(S)), i.insertBefore(a, t)));
          }, 300);
      }
      lazyLoadSlide(e) {
        const t = e && e.el;
        if (!t) return;
        const i = new Set();
        let n = Array.from(
          t.querySelectorAll("[data-lazy-src],[data-lazy-srcset]")
        );
        t.dataset.lazySrc && n.push(t),
          n.map((e) => {
            e instanceof HTMLImageElement
              ? i.add(e)
              : e instanceof HTMLElement &&
                e.dataset.lazySrc &&
                ((e.style.backgroundImage = `url('${e.dataset.lazySrc}')`),
                delete e.dataset.lazySrc);
          });
        for (const t of i) this.lazyLoadImg(e, t);
      }
      onAnimationEnd(e) {
        var t;
        const i = e.target,
          n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
          o = this.slides[n],
          s = e.animationName;
        if (!i || !o || !s) return;
        const r = !!this.inTransition.has(n) && o.transition;
        r &&
          s.substring(0, r.length + 2) === `f-${r}` &&
          this.inTransition.delete(n),
          this.inTransition.size || this.clearTransitions(),
          n === this.page &&
            (null === (t = this.panzoom) || void 0 === t
              ? void 0
              : t.isResting) &&
            this.emit("settle");
      }
      onDecel(e, t = 0, i = 0, n = 0, o = 0) {
        if (this.option("dragFree")) return void this.setPageFromPosition();
        const { isRTL: s, isHorizontal: r, axis: a, pages: l } = this,
          c = l.length,
          d = Math.abs(Math.atan2(i, t) / (Math.PI / 180));
        let u = 0;
        if (((u = d > 45 && d < 135 ? (r ? 0 : i) : r ? t : 0), !c)) return;
        let h = this.page,
          p = s && r ? 1 : -1;
        const f = e.current[a] * p;
        let { pageIndex: g } = this.getPageFromPosition(f);
        Math.abs(u) > 5
          ? (l[h].dim <
              document.documentElement[
                "client" + (this.isHorizontal ? "Width" : "Height")
              ] -
                1 && (h = g),
            (h = s && r ? (u < 0 ? h - 1 : h + 1) : u < 0 ? h + 1 : h - 1))
          : (h = 0 === n && 0 === o ? h : g),
          this.slideTo(h, {
            transition: !1,
            friction: e.option("decelFriction"),
          });
      }
      onClick(e) {
        const t = e.target,
          i = t && T(t) ? t.dataset : null;
        let n, o;
        i &&
          (void 0 !== i.carouselPage
            ? ((o = "slideTo"), (n = i.carouselPage))
            : void 0 !== i.carouselNext
            ? (o = "slideNext")
            : void 0 !== i.carouselPrev && (o = "slidePrev")),
          o
            ? (e.preventDefault(),
              e.stopPropagation(),
              t && !t.hasAttribute("disabled") && this[o](n))
            : this.emit("click", e);
      }
      onSlideTo(e) {
        const t = e.detail || 0;
        this.slideTo(this.getPageForSlide(t), { friction: 0 });
      }
      onChange(e, t = 0) {
        const i = this.page;
        (this.prevPage = i),
          (this.page = e),
          this.option("adaptiveHeight") && this.setViewportHeight(),
          e !== i && (this.markSelectedSlides(), this.emit("change", e, i, t));
      }
      onRefresh() {
        let e = this.contentDim,
          t = this.viewportDim;
        this.updateMetrics(),
          (this.contentDim === e && this.viewportDim === t) ||
            this.slideTo(this.page, { friction: 0, transition: !1 });
      }
      onScroll() {
        var e;
        null === (e = this.viewport) || void 0 === e || e.scroll(0, 0);
      }
      onResize() {
        this.option("breakpoints") && this.processOptions();
      }
      onBeforeTransform(e) {
        this.lp !== e.current[this.axis] &&
          (this.flipInfiniteTrack(), this.manageSlideVisiblity()),
          (this.lp = e.current.e);
      }
      onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
      reInit(e = null, t = null) {
        this.destroy(),
          (this.state = I.Init),
          (this.prevPage = null),
          (this.userOptions = e || this.userOptions),
          (this.userPlugins = t || this.userPlugins),
          this.processOptions();
      }
      slideTo(
        e = 0,
        {
          friction: t = this.option("friction"),
          transition: i = this.option("transition"),
        } = {}
      ) {
        if (this.state === I.Destroy) return;
        e = parseInt((e || 0).toString()) || 0;
        const n = this.getPageFromIndex(e),
          { axis: o, isHorizontal: s, isRTL: r, pages: a, panzoom: l } = this,
          c = a.length,
          d = r && s ? 1 : -1;
        if (!l || !c) return;
        if (this.page !== n) {
          const t = new Event("beforeChange", { bubbles: !0, cancelable: !0 });
          if ((this.emit("beforeChange", t, e), t.defaultPrevented)) return;
        }
        if (this.transitionTo(e, i)) return;
        let u = a[n].pos;
        if (this.isInfinite) {
          const t = this.contentDim,
            i = l.target[o] * d;
          2 === c
            ? (u += t * Math.floor(parseFloat(e + "") / 2))
            : (u = [u, u - t, u + t].reduce(function (e, t) {
                return Math.abs(t - i) < Math.abs(e - i) ? t : e;
              }));
        }
        (u *= d),
          Math.abs(l.target[o] - u) < 1 ||
            (l.panTo({ x: s ? u : 0, y: s ? 0 : u, friction: t }),
            this.onChange(n));
      }
      slideToClosest(e) {
        if (this.panzoom) {
          const { pageIndex: t } = this.getPageFromPosition();
          this.slideTo(t, e);
        }
      }
      slideNext() {
        this.slideTo(this.page + 1);
      }
      slidePrev() {
        this.slideTo(this.page - 1);
      }
      clearTransitions() {
        this.inTransition.clear(), C(this.container, this.cn("inTransition"));
        const e = ["to-prev", "to-next", "from-prev", "from-next"];
        for (const t of this.slides) {
          const i = t.el;
          if (i) {
            i.removeEventListener(Y, this.onAnimationEnd),
              i.classList.remove(...e);
            const n = t.transition;
            n && i.classList.remove(`f-${n}Out`, `f-${n}In`);
          }
        }
        this.manageSlideVisiblity();
      }
      addSlide(e, t) {
        var i, n, o, s;
        const r = this.panzoom,
          a =
            (null === (i = this.pages[this.page]) || void 0 === i
              ? void 0
              : i.pos) || 0,
          l =
            (null === (n = this.pages[this.page]) || void 0 === n
              ? void 0
              : n.dim) || 0,
          c = this.contentDim < this.viewportDim;
        let d = Array.isArray(t) ? t : [t];
        const u = [];
        for (const e of d) u.push(z(e));
        this.slides.splice(e, 0, ...u);
        for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
        for (const e of u) this.emit("beforeInitSlide", e, e.index);
        if (
          (this.page >= e && (this.page += u.length), this.updateMetrics(), r)
        ) {
          const t =
              (null === (o = this.pages[this.page]) || void 0 === o
                ? void 0
                : o.pos) || 0,
            i =
              (null === (s = this.pages[this.page]) || void 0 === s
                ? void 0
                : s.dim) || 0,
            n = this.pages.length || 1,
            d = this.isRTL ? l - i : i - l,
            u = this.isRTL ? a - t : t - a;
          c && 1 === n
            ? (e <= this.page &&
                ((r.current[this.axis] -= d), (r.target[this.axis] -= d)),
              r.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * t }))
            : u &&
              e <= this.page &&
              ((r.target[this.axis] -= u),
              (r.current[this.axis] -= u),
              r.requestTick());
        }
        for (const e of u) this.emit("initSlide", e, e.index);
      }
      prependSlide(e) {
        this.addSlide(0, e);
      }
      appendSlide(e) {
        this.addSlide(this.slides.length, e);
      }
      removeSlide(e) {
        const t = this.slides.length;
        e = ((e % t) + t) % t;
        const i = this.slides[e];
        if (i) {
          this.removeSlideEl(i, !0), this.slides.splice(e, 1);
          for (let e = 0; e < this.slides.length; e++) this.slides[e].index = e;
          this.updateMetrics(),
            this.slideTo(this.page, { friction: 0, transition: !1 }),
            this.emit("destroySlide", i);
        }
      }
      updateMetrics() {
        const {
          panzoom: e,
          viewport: i,
          track: n,
          slides: o,
          isHorizontal: s,
          isInfinite: r,
        } = this;
        if (!n) return;
        const a = s ? "width" : "height",
          l = s ? "offsetWidth" : "offsetHeight";
        if (i) {
          let e = Math.max(i[l], t(i.getBoundingClientRect()[a], 1e3)),
            n = getComputedStyle(i),
            o = "padding",
            r = s ? "Right" : "Bottom";
          (e -= parseFloat(n[o + (s ? "Left" : "Top")]) + parseFloat(n[o + r])),
            (this.viewportDim = e);
        }
        let c,
          d = 0;
        for (const [e, i] of o.entries()) {
          let n = 0,
            s = 0;
          !i.el && c
            ? ((n = c.dim), (s = c.gap))
            : (({ dim: n, gap: s } = this.getSlideMetrics(i)), (c = i)),
            (n = t(n, 1e3)),
            (s = t(s, 1e3)),
            (i.dim = n),
            (i.gap = s),
            (i.pos = d),
            (d += n),
            (r || e < o.length - 1) && (d += s);
        }
        (d = t(d, 1e3)),
          (this.contentDim = d),
          e &&
            ((e.contentRect[a] = d),
            (e.contentRect[s ? "fullWidth" : "fullHeight"] = d)),
          (this.pages = this.createPages()),
          (this.pages = this.processPages()),
          this.state === I.Init && this.setInitialPage(),
          (this.page = Math.max(0, Math.min(this.page, this.pages.length - 1))),
          this.manageSlideVisiblity(),
          this.emit("refresh");
      }
      getProgress(e, i = !1, n = !1) {
        void 0 === e && (e = this.page);
        const o = this,
          s = o.panzoom,
          r = o.contentDim,
          a = o.pages[e] || 0;
        if (!a || !s) return e > this.page ? -1 : 1;
        let l = -1 * s.current.e,
          c = t((l - a.pos) / (1 * a.dim), 1e3),
          d = c,
          u = c;
        this.isInfinite &&
          !0 !== n &&
          ((d = t((l - a.pos + r) / (1 * a.dim), 1e3)),
          (u = t((l - a.pos - r) / (1 * a.dim), 1e3)));
        let h = [c, d, u].reduce(function (e, t) {
          return Math.abs(t) < Math.abs(e) ? t : e;
        });
        return i ? h : h > 1 ? 1 : h < -1 ? -1 : h;
      }
      setViewportHeight() {
        const { page: e, pages: t, viewport: i, isHorizontal: n } = this;
        if (!i || !t[e]) return;
        let o = 0;
        n &&
          this.track &&
          ((this.track.style.height = "auto"),
          t[e].slides.forEach((e) => {
            e.el && (o = Math.max(o, e.el.offsetHeight));
          })),
          (i.style.height = o ? `${o}px` : "");
      }
      getPageForSlide(e) {
        for (const t of this.pages)
          for (const i of t.slides) if (i.index === e) return t.index;
        return -1;
      }
      getVisibleSlides(e = 0) {
        var t;
        const i = new Set();
        let {
          panzoom: n,
          contentDim: o,
          viewportDim: s,
          pages: r,
          page: a,
        } = this;
        if (s) {
          o =
            o +
              (null === (t = this.slides[this.slides.length - 1]) ||
              void 0 === t
                ? void 0
                : t.gap) || 0;
          let l = 0;
          (l =
            n && n.state !== v.Init && n.state !== v.Destroy
              ? -1 * n.current[this.axis]
              : (r[a] && r[a].pos) || 0),
            this.isInfinite && (l -= Math.floor(l / o) * o),
            this.isRTL && this.isHorizontal && (l *= -1);
          const c = l - s * e,
            d = l + s * (e + 1),
            u = this.isInfinite ? [-1, 0, 1] : [0];
          for (const e of this.slides)
            for (const t of u) {
              const n = e.pos + t * o,
                s = n + e.dim + e.gap;
              n < d && s > c && i.add(e);
            }
        }
        return i;
      }
      getPageFromPosition(e) {
        const {
            viewportDim: t,
            contentDim: i,
            slides: n,
            pages: o,
            panzoom: s,
          } = this,
          r = o.length,
          a = n.length,
          l = n[0],
          c = n[a - 1],
          d = this.option("center");
        let u = 0,
          h = 0,
          p = 0,
          f =
            void 0 === e
              ? -1 * ((null == s ? void 0 : s.target[this.axis]) || 0)
              : e;
        d && (f += 0.5 * t),
          this.isInfinite
            ? (f < l.pos - 0.5 * c.gap && ((f -= i), (p = -1)),
              f > c.pos + c.dim + 0.5 * c.gap && ((f -= i), (p = 1)))
            : (f = Math.max(l.pos || 0, Math.min(f, c.pos)));
        let g = c,
          m = n.find((e) => {
            const t = e.pos - 0.5 * g.gap,
              i = e.pos + e.dim + 0.5 * e.gap;
            return (g = e), f >= t && f < i;
          });
        return (
          m || (m = c),
          (h = this.getPageForSlide(m.index)),
          (u = h + p * r),
          { page: u, pageIndex: h }
        );
      }
      setPageFromPosition() {
        const { pageIndex: e } = this.getPageFromPosition();
        this.onChange(e);
      }
      destroy() {
        if ([I.Destroy].includes(this.state)) return;
        this.state = I.Destroy;
        const {
            container: e,
            viewport: t,
            track: i,
            slides: n,
            panzoom: o,
          } = this,
          s = this.option("classes");
        e.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1,
        }),
          e.removeEventListener("slideTo", this.onSlideTo),
          window.removeEventListener("resize", this.onResize),
          o && (o.destroy(), (this.panzoom = null)),
          n &&
            n.forEach((e) => {
              this.removeSlideEl(e);
            }),
          this.detachPlugins(),
          t &&
            (t.removeEventListener("scroll", this.onScroll),
            t.offsetParent &&
              i &&
              i.offsetParent &&
              t.replaceWith(...i.childNodes));
        for (const [t, i] of Object.entries(s))
          "container" !== t && i && e.classList.remove(i);
        (this.track = null),
          (this.viewport = null),
          (this.page = 0),
          (this.slides = []);
        const r = this.events.get("ready");
        (this.events = new Map()), r && this.events.set("ready", r);
      }
    }
    Object.defineProperty(Z, "Panzoom", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: $,
    }),
      Object.defineProperty(Z, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          viewport: null,
          track: null,
          enabled: !0,
          slides: [],
          axis: "x",
          transition: "fade",
          preload: 1,
          slidesPerPage: "auto",
          initialPage: 0,
          friction: 0.12,
          Panzoom: { decelFriction: 0.12 },
          center: !0,
          infinite: !0,
          fill: !0,
          dragFree: !1,
          adaptiveHeight: !1,
          direction: "ltr",
          classes: {
            container: "f-carousel",
            viewport: "f-carousel__viewport",
            track: "f-carousel__track",
            slide: "f-carousel__slide",
            isLTR: "is-ltr",
            isRTL: "is-rtl",
            isHorizontal: "is-horizontal",
            isVertical: "is-vertical",
            inTransition: "in-transition",
            isSelected: "is-selected",
          },
          l10n: {
            NEXT: "Next slide",
            PREV: "Previous slide",
            GOTO: "Go to slide #%d",
          },
        },
      }),
      Object.defineProperty(Z, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: V,
      });
    const K = function (e) {
        if (!T(e)) return 0;
        const t = window.scrollY,
          i = window.innerHeight,
          n = t + i,
          o = e.getBoundingClientRect(),
          s = o.y + t,
          r = o.height,
          a = s + r;
        if (t > a || n < s) return 0;
        if (t < s && n > a) return 100;
        if (s < t && a > n) return 100;
        let l = r;
        s < t && (l -= t - s), a > n && (l -= a - n);
        const c = (l / i) * 100;
        return Math.round(c);
      },
      J = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
    let Q;
    const ee = [
        "a[href]",
        "area[href]",
        'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
        "select:not([disabled]):not([aria-hidden])",
        "textarea:not([disabled]):not([aria-hidden])",
        "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)",
        "iframe",
        "object",
        "embed",
        "video",
        "audio",
        "[contenteditable]",
        '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
      ].join(","),
      te = (e) => {
        if (e && J) {
          void 0 === Q &&
            document.createElement("div").focus({
              get preventScroll() {
                return (Q = !0), !1;
              },
            });
          try {
            if (Q) e.focus({ preventScroll: !0 });
            else {
              const t = window.scrollY || document.body.scrollTop,
                i = window.scrollX || document.body.scrollLeft;
              e.focus(),
                document.body.scrollTo({ top: t, left: i, behavior: "auto" });
            }
          } catch (e) {}
        }
      },
      ie = () => {
        const e = document;
        let t,
          i = "",
          n = "",
          o = "";
        return (
          e.fullscreenEnabled
            ? ((i = "requestFullscreen"),
              (n = "exitFullscreen"),
              (o = "fullscreenElement"))
            : e.webkitFullscreenEnabled &&
              ((i = "webkitRequestFullscreen"),
              (n = "webkitExitFullscreen"),
              (o = "webkitFullscreenElement")),
          i &&
            (t = {
              request: function (t = e.documentElement) {
                return "webkitRequestFullscreen" === i
                  ? t[i](Element.ALLOW_KEYBOARD_INPUT)
                  : t[i]();
              },
              exit: function () {
                return e[o] && e[n]();
              },
              isFullscreen: function () {
                return e[o];
              },
            }),
          t
        );
      },
      ne = {
        dragToClose: !0,
        hideScrollbar: !0,
        Carousel: {
          classes: {
            container: "fancybox__carousel",
            viewport: "fancybox__viewport",
            track: "fancybox__track",
            slide: "fancybox__slide",
          },
        },
        contentClick: "toggleZoom",
        contentDblClick: !1,
        backdropClick: "close",
        animated: !0,
        idle: 3500,
        showClass: "f-zoomInUp",
        hideClass: "f-fadeOut",
        commonCaption: !1,
        parentEl: null,
        startIndex: 0,
        l10n: Object.assign(Object.assign({}, y), {
          CLOSE: "Close",
          NEXT: "Next",
          PREV: "Previous",
          MODAL: "You can close this modal content with the ESC key",
          ERROR: "Something Went Wrong, Please Try Again Later",
          IMAGE_ERROR: "Image Not Found",
          ELEMENT_NOT_FOUND: "HTML Element Not Found",
          AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
          AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
          IFRAME_ERROR: "Error Loading Page",
          TOGGLE_ZOOM: "Toggle zoom level",
          TOGGLE_THUMBS: "Toggle thumbnails",
          TOGGLE_SLIDESHOW: "Toggle slideshow",
          TOGGLE_FULLSCREEN: "Toggle full-screen mode",
          DOWNLOAD: "Download",
        }),
        tpl: {
          closeButton:
            '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
          main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>',
        },
        groupAll: !1,
        groupAttr: "data-fancybox",
        defaultType: "image",
        defaultDisplay: "block",
        autoFocus: !0,
        trapFocus: !0,
        placeFocusBack: !0,
        closeButton: "auto",
        keyboard: {
          Escape: "close",
          Delete: "close",
          Backspace: "close",
          PageUp: "next",
          PageDown: "prev",
          ArrowUp: "prev",
          ArrowDown: "next",
          ArrowRight: "next",
          ArrowLeft: "prev",
        },
        Fullscreen: { autoStart: !1 },
        compact: () =>
          window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
        wheel: "zoom",
      };
    var oe, se;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Closing = 2)] = "Closing"),
        (e[(e.CustomClosing = 3)] = "CustomClosing"),
        (e[(e.Destroy = 4)] = "Destroy");
    })(oe || (oe = {})),
      (function (e) {
        (e[(e.Loading = 0)] = "Loading"),
          (e[(e.Opening = 1)] = "Opening"),
          (e[(e.Ready = 2)] = "Ready"),
          (e[(e.Closing = 3)] = "Closing");
      })(se || (se = {}));
    let re = "",
      ae = !1,
      le = !1,
      ce = null;
    const de = () => {
        let e = "",
          t = "";
        const i = xt.getInstance();
        if (i) {
          const n = i.carousel,
            o = i.getSlide();
          if (n && o) {
            let s = o.slug || void 0,
              r = o.triggerEl || void 0;
            (t = s || i.option("slug") || ""),
              !t && r && r.dataset && (t = r.dataset.fancybox || ""),
              t &&
                "true" !== t &&
                (e =
                  "#" +
                  t +
                  (!s && n.slides.length > 1 ? "-" + (o.index + 1) : ""));
          }
        }
        return { hash: e, slug: t, index: 1 };
      },
      ue = () => {
        const e = new URL(document.URL).hash,
          t = e.slice(1).split("-"),
          i = t[t.length - 1],
          n = (i && /^\+?\d+$/.test(i) && parseInt(t.pop() || "1", 10)) || 1;
        return { hash: e, slug: t.join("-"), index: n };
      },
      he = () => {
        const { slug: e, index: t } = ue();
        if (!e) return;
        let i = document.querySelector(`[data-slug="${e}"]`);
        if (
          (i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ),
          xt.getInstance())
        )
          return;
        const n = document.querySelectorAll(`[data-fancybox="${e}"]`);
        n.length &&
          ((i = n[t - 1]),
          i &&
            i.dispatchEvent(
              new CustomEvent("click", { bubbles: !0, cancelable: !0 })
            ));
      },
      pe = () => {
        if (!1 === xt.defaults.Hash) return;
        const e = xt.getInstance();
        if (!1 === (null == e ? void 0 : e.options.Hash)) return;
        const { slug: t, index: i } = ue(),
          { slug: n } = de();
        e && (t === n ? e.jumpTo(i - 1) : ((ae = !0), e.close())), he();
      },
      fe = () => {
        ce && clearTimeout(ce),
          queueMicrotask(() => {
            pe();
          });
      },
      ge = () => {
        window.addEventListener("hashchange", fe, !1),
          setTimeout(() => {
            pe();
          }, 500);
      };
    J &&
      (/complete|interactive|loaded/.test(document.readyState)
        ? ge()
        : document.addEventListener("DOMContentLoaded", ge));
    const me = "is-zooming-in";
    class ve extends H {
      onCreateSlide(e, t, i) {
        const n = this.instance.optionFor(i, "src") || "";
        i.el &&
          "image" === i.type &&
          "string" == typeof n &&
          this.setImage(i, n);
      }
      onRemoveSlide(e, t, i) {
        i.panzoom && i.panzoom.destroy(),
          (i.panzoom = void 0),
          (i.imageEl = void 0);
      }
      onChange(e, t, i, n) {
        C(this.instance.container, me);
        for (const e of t.slides) {
          const t = e.panzoom;
          t && e.index !== i && t.reset(0.35);
        }
      }
      onClose() {
        var e;
        const t = this.instance,
          i = t.container,
          n = t.getSlide();
        if (!i || !i.parentElement || !n) return;
        const { el: o, contentEl: s, panzoom: r, thumbElSrc: a } = n;
        if (
          !o ||
          !a ||
          !s ||
          !r ||
          r.isContentLoading ||
          r.state === v.Init ||
          r.state === v.Destroy
        )
          return;
        r.updateMetrics();
        let l = this.getZoomInfo(n);
        if (!l) return;
        (this.instance.state = oe.CustomClosing),
          i.classList.remove(me),
          i.classList.add("is-zooming-out"),
          (s.style.backgroundImage = `url('${a}')`);
        const c = i.getBoundingClientRect();
        1 ===
          ((null === (e = window.visualViewport) || void 0 === e
            ? void 0
            : e.scale) || 1) &&
          Object.assign(i.style, {
            position: "absolute",
            top: `${i.offsetTop + window.scrollY}px`,
            left: `${i.offsetLeft + window.scrollX}px`,
            bottom: "auto",
            right: "auto",
            width: `${c.width}px`,
            height: `${c.height}px`,
            overflow: "hidden",
          });
        const { x: d, y: u, scale: h, opacity: p } = l;
        if (p) {
          const e = ((e, t, i, n) => {
            const o = t - e;
            return (t) => 1 + (((t - e) / o) * -1 || 0);
          })(r.scale, h);
          r.on("afterTransform", () => {
            s.style.opacity = e(r.scale) + "";
          });
        }
        r.on("endAnimation", () => {
          t.destroy();
        }),
          (r.target.a = h),
          (r.target.b = 0),
          (r.target.c = 0),
          (r.target.d = h),
          r.panTo({
            x: d,
            y: u,
            scale: h,
            friction: p ? 0.2 : 0.33,
            ignoreBounds: !0,
          }),
          r.isResting && t.destroy();
      }
      setImage(e, t) {
        const i = this.instance;
        (e.src = t),
          this.process(e, t).then(
            (t) => {
              const { contentEl: n, imageEl: o, thumbElSrc: s, el: r } = e;
              if (i.isClosing() || !n || !o) return;
              n.offsetHeight;
              const a = !!i.isOpeningSlide(e) && this.getZoomInfo(e);
              if (this.option("protected") && r) {
                r.addEventListener("contextmenu", (e) => {
                  e.preventDefault();
                });
                const e = document.createElement("div");
                k(e, "fancybox-protected"), n.appendChild(e);
              }
              if (s && a) {
                const o = t.contentRect,
                  r = Math.max(o.fullWidth, o.fullHeight);
                let c = null;
                !a.opacity &&
                  r > 1200 &&
                  ((c = document.createElement("img")),
                  k(c, "fancybox-ghost"),
                  (c.src = s),
                  n.appendChild(c));
                const d = () => {
                  c &&
                    (k(c, "f-fadeFastOut"),
                    setTimeout(() => {
                      c && (c.remove(), (c = null));
                    }, 200));
                };
                ((l = s),
                new Promise((e, t) => {
                  const i = new Image();
                  (i.onload = e), (i.onerror = t), (i.src = l);
                })).then(
                  () => {
                    i.hideLoading(e),
                      (e.state = se.Opening),
                      this.instance.emit("reveal", e),
                      this.zoomIn(e).then(
                        () => {
                          d(), this.instance.done(e);
                        },
                        () => {}
                      ),
                      c &&
                        setTimeout(
                          () => {
                            d();
                          },
                          r > 2500 ? 800 : 200
                        );
                  },
                  () => {
                    i.hideLoading(e), i.revealContent(e);
                  }
                );
              } else {
                const n = this.optionFor(e, "initialSize"),
                  o = this.optionFor(e, "zoom"),
                  s = {
                    event: i.prevMouseMoveEvent || i.options.event,
                    friction: o ? 0.12 : 0,
                  };
                let r = i.optionFor(e, "showClass") || void 0,
                  a = !0;
                i.isOpeningSlide(e) &&
                  ("full" === n
                    ? t.zoomToFull(s)
                    : "cover" === n
                    ? t.zoomToCover(s)
                    : "max" === n
                    ? t.zoomToMax(s)
                    : (a = !1),
                  t.stop("current")),
                  a && r && (r = t.isDragging ? "f-fadeIn" : ""),
                  i.hideLoading(e),
                  i.revealContent(e, r);
              }
              var l;
            },
            () => {
              i.setError(e, "{{IMAGE_ERROR}}");
            }
          );
      }
      process(e, t) {
        return new Promise((i, n) => {
          var s;
          const r = this.instance,
            a = e.el;
          r.clearContent(e), r.showLoading(e);
          let l = this.optionFor(e, "content");
          if (("string" == typeof l && (l = o(l)), !l || !T(l))) {
            if (
              ((l = document.createElement("img")),
              l instanceof HTMLImageElement)
            ) {
              let i = "",
                n = e.caption;
              (i =
                "string" == typeof n && n
                  ? n.replace(/<[^>]+>/gi, "").substring(0, 1e3)
                  : `Image ${e.index + 1} of ${
                      (null === (s = r.carousel) || void 0 === s
                        ? void 0
                        : s.pages.length) || 1
                    }`),
                (l.src = t || ""),
                (l.alt = i),
                (l.draggable = !1),
                e.srcset && l.setAttribute("srcset", e.srcset),
                this.instance.isOpeningSlide(e) && (l.fetchPriority = "high");
            }
            e.sizes && l.setAttribute("sizes", e.sizes);
          }
          k(l, "fancybox-image"),
            (e.imageEl = l),
            r.setContent(e, l, !1),
            (e.panzoom = new $(
              a,
              p({ transformParent: !0 }, this.option("Panzoom") || {}, {
                content: l,
                width: r.optionFor(e, "width", "auto"),
                height: r.optionFor(e, "height", "auto"),
                wheel: () => {
                  const e = r.option("wheel");
                  return ("zoom" === e || "pan" == e) && e;
                },
                click: (t, i) => {
                  var n, o;
                  if (r.isCompact || r.isClosing()) return !1;
                  if (
                    e.index !==
                    (null === (n = r.getSlide()) || void 0 === n
                      ? void 0
                      : n.index)
                  )
                    return !1;
                  if (i) {
                    const e = i.composedPath()[0];
                    if (
                      [
                        "A",
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO",
                      ].includes(e.nodeName)
                    )
                      return !1;
                  }
                  let s =
                    !i ||
                    (i.target &&
                      (null === (o = e.contentEl) || void 0 === o
                        ? void 0
                        : o.contains(i.target)));
                  return r.option(s ? "contentClick" : "backdropClick") || !1;
                },
                dblClick: () =>
                  r.isCompact
                    ? "toggleZoom"
                    : r.option("contentDblClick") || !1,
                spinner: !1,
                panOnlyZoomed: !0,
                wheelLimit: 1 / 0,
                on: {
                  ready: (e) => {
                    i(e);
                  },
                  error: () => {
                    n();
                  },
                  destroy: () => {
                    n();
                  },
                },
              })
            ));
        });
      }
      zoomIn(e) {
        return new Promise((t, i) => {
          const n = this.instance,
            o = n.container,
            { panzoom: s, contentEl: r, el: a } = e;
          s && s.updateMetrics();
          const l = this.getZoomInfo(e);
          if (!(l && a && r && s && o)) return void i();
          const { x: c, y: d, scale: u, opacity: h } = l,
            p = () => {
              e.state !== se.Closing &&
                (h &&
                  (r.style.opacity =
                    Math.max(Math.min(1, 1 - (1 - s.scale) / (1 - u)), 0) + ""),
                s.scale >= 1 && s.scale > s.targetScale - 0.1 && t(s));
            },
            f = (e) => {
              ((e.scale < 0.99 || e.scale > 1.01) && !e.isDragging) ||
                (C(o, me),
                (r.style.opacity = ""),
                e.off("endAnimation", f),
                e.off("touchStart", f),
                e.off("afterTransform", p),
                t(e));
            };
          s.on("endAnimation", f),
            s.on("touchStart", f),
            s.on("afterTransform", p),
            s.on(["error", "destroy"], () => {
              i();
            }),
            s.panTo({ x: c, y: d, scale: u, friction: 0, ignoreBounds: !0 }),
            s.stop("current");
          const g = {
              event:
                "mousemove" === s.panMode
                  ? n.prevMouseMoveEvent || n.options.event
                  : void 0,
            },
            m = this.optionFor(e, "initialSize");
          k(o, me),
            n.hideLoading(e),
            "full" === m
              ? s.zoomToFull(g)
              : "cover" === m
              ? s.zoomToCover(g)
              : "max" === m
              ? s.zoomToMax(g)
              : s.reset(0.172);
        });
      }
      getZoomInfo(e) {
        const { el: t, imageEl: i, thumbEl: n, panzoom: o } = e,
          s = this.instance,
          r = s.container;
        if (
          !t ||
          !i ||
          !n ||
          !o ||
          K(n) < 3 ||
          !this.optionFor(e, "zoom") ||
          !r ||
          s.state === oe.Destroy
        )
          return !1;
        if ("0" === getComputedStyle(r).getPropertyValue("--f-images-zoom"))
          return !1;
        const a = window.visualViewport || null;
        if (1 !== (a ? a.scale : 1)) return !1;
        let {
            top: l,
            left: c,
            width: d,
            height: u,
          } = n.getBoundingClientRect(),
          { top: h, left: p, fitWidth: f, fitHeight: g } = o.contentRect;
        if (!(d && u && f && g)) return !1;
        const m = o.container.getBoundingClientRect();
        (p += m.left), (h += m.top);
        const v = -1 * (p + 0.5 * f - (c + 0.5 * d)),
          b = -1 * (h + 0.5 * g - (l + 0.5 * u)),
          y = d / f;
        let w = this.option("zoomOpacity") || !1;
        return (
          "auto" === w && (w = Math.abs(d / u - f / g) > 0.1),
          { x: v, y: b, scale: y, opacity: w }
        );
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.change", e.onChange),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.removeSlide", e.onRemoveSlide),
          t.on("close", e.onClose);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.change", e.onChange),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.removeSlide", e.onRemoveSlide),
          t.off("close", e.onClose);
      }
    }
    Object.defineProperty(ve, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        initialSize: "fit",
        Panzoom: { maxScale: 1 },
        protected: !1,
        zoom: !0,
        zoomOpacity: "auto",
      },
    }),
      "function" == typeof SuppressedError && SuppressedError;
    const be = "html",
      ye = "image",
      we = "map",
      xe = "youtube",
      Se = "vimeo",
      Te = "html5video",
      Ce = (e, t = {}) => {
        const i = new URL(e),
          n = new URLSearchParams(i.search),
          o = new URLSearchParams();
        for (const [e, i] of [...n, ...Object.entries(t)]) {
          let t = i + "";
          if ("t" === e) {
            let e = t.match(/((\d*)m)?(\d*)s?/);
            e &&
              o.set(
                "start",
                60 * parseInt(e[2] || "0") + parseInt(e[3] || "0") + ""
              );
          } else o.set(e, t);
        }
        let s = o + "",
          r = e.match(/#t=((.*)?\d+s)/);
        return r && (s += `#t=${r[1]}`), s;
      },
      ke = [
        "image",
        "html",
        "ajax",
        "inline",
        "clone",
        "iframe",
        "map",
        "pdf",
        "html5video",
        "youtube",
        "vimeo",
      ];
    class Ee extends H {
      onBeforeInitSlide(e, t, i) {
        this.processType(i);
      }
      onCreateSlide(e, t, i) {
        this.setContent(i);
      }
      onClearContent(e, t) {
        t.xhr && (t.xhr.abort(), (t.xhr = null));
        const i = t.iframeEl;
        i &&
          ((i.onload = i.onerror = null),
          (i.src = "//about:blank"),
          (t.iframeEl = null));
        const n = t.contentEl,
          o = t.placeholderEl;
        if ("inline" === t.type && n && o)
          n.classList.remove("fancybox__content"),
            "none" !== n.style.display && (n.style.display = "none"),
            o.parentNode && o.parentNode.insertBefore(n, o),
            o.remove(),
            (t.contentEl = void 0),
            (t.placeholderEl = void 0);
        else
          for (; t.el && t.el.firstChild; ) t.el.removeChild(t.el.firstChild);
      }
      onSelectSlide(e, t, i) {
        i.state === se.Ready && this.playVideo();
      }
      onUnselectSlide(e, t, i) {
        var n, o;
        if (i.type === Te) {
          try {
            null ===
              (o =
                null === (n = i.el) || void 0 === n
                  ? void 0
                  : n.querySelector("video")) ||
              void 0 === o ||
              o.pause();
          } catch (e) {}
          return;
        }
        let s;
        i.type === Se
          ? (s = { method: "pause", value: "true" })
          : i.type === xe && (s = { event: "command", func: "pauseVideo" }),
          s &&
            i.iframeEl &&
            i.iframeEl.contentWindow &&
            i.iframeEl.contentWindow.postMessage(JSON.stringify(s), "*"),
          i.poller && clearTimeout(i.poller);
      }
      onDone(e, t) {
        e.isCurrentSlide(t) && !e.isClosing() && this.playVideo();
      }
      onRefresh(e, t) {
        t.slides.forEach((e) => {
          e.el && (this.resizeIframe(e), this.setAspectRatio(e));
        });
      }
      onMessage(e) {
        try {
          let t = JSON.parse(e.data);
          if ("https://player.vimeo.com" === e.origin) {
            if ("ready" === t.event)
              for (let t of Array.from(
                document.getElementsByClassName("fancybox__iframe")
              ))
                t instanceof HTMLIFrameElement &&
                  t.contentWindow === e.source &&
                  (t.dataset.ready = "true");
          } else if (
            e.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) &&
            "onReady" === t.event
          ) {
            const e = document.getElementById(t.id);
            e && (e.dataset.ready = "true");
          }
        } catch (e) {}
      }
      loadAjaxContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        this.instance.showLoading(e);
        const i = this.instance,
          n = new XMLHttpRequest();
        i.showLoading(e),
          (n.onreadystatechange = function () {
            n.readyState === XMLHttpRequest.DONE &&
              i.state === oe.Ready &&
              (i.hideLoading(e),
              200 === n.status
                ? i.setContent(e, n.responseText)
                : i.setError(
                    e,
                    404 === n.status
                      ? "{{AJAX_NOT_FOUND}}"
                      : "{{AJAX_FORBIDDEN}}"
                  ));
          });
        const o = e.ajax || null;
        n.open(o ? "POST" : "GET", t + ""),
          n.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          ),
          n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
          n.send(o),
          (e.xhr = n);
      }
      setInlineContent(e) {
        let t = null;
        if (T(e.src)) t = e.src;
        else if ("string" == typeof e.src) {
          const i = e.src.split("#", 2).pop();
          t = i ? document.getElementById(i) : null;
        }
        if (t) {
          if ("clone" === e.type || t.closest(".fancybox__slide")) {
            t = t.cloneNode(!0);
            const i = t.dataset.animationName;
            i && (t.classList.remove(i), delete t.dataset.animationName);
            let n = t.getAttribute("id");
            (n = n ? `${n}--clone` : `clone-${this.instance.id}-${e.index}`),
              t.setAttribute("id", n);
          } else if (t.parentNode) {
            const i = document.createElement("div");
            i.classList.add("fancybox-placeholder"),
              t.parentNode.insertBefore(i, t),
              (e.placeholderEl = i);
          }
          this.instance.setContent(e, t);
        } else this.instance.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      setIframeContent(e) {
        const { src: t, el: i } = e;
        if (!t || "string" != typeof t || !i) return;
        i.classList.add("is-loading");
        const n = this.instance,
          o = document.createElement("iframe");
        (o.className = "fancybox__iframe"),
          o.setAttribute("id", `fancybox__iframe_${n.id}_${e.index}`);
        for (const [t, i] of Object.entries(
          this.optionFor(e, "iframeAttr") || {}
        ))
          o.setAttribute(t, i);
        (o.onerror = () => {
          n.setError(e, "{{IFRAME_ERROR}}");
        }),
          (e.iframeEl = o);
        const s = this.optionFor(e, "preload");
        if ("iframe" !== e.type || !1 === s)
          return (
            o.setAttribute("src", e.src + ""),
            n.setContent(e, o, !1),
            this.resizeIframe(e),
            void n.revealContent(e)
          );
        n.showLoading(e),
          (o.onload = () => {
            if (!o.src.length) return;
            const t = "true" !== o.dataset.ready;
            (o.dataset.ready = "true"),
              this.resizeIframe(e),
              t ? n.revealContent(e) : n.hideLoading(e);
          }),
          o.setAttribute("src", t),
          n.setContent(e, o, !1);
      }
      resizeIframe(e) {
        const { type: t, iframeEl: i } = e;
        if (t === xe || t === Se) return;
        const n = null == i ? void 0 : i.parentElement;
        if (!i || !n) return;
        let o = e.autoSize;
        void 0 === o && (o = this.optionFor(e, "autoSize"));
        let s = e.width || 0,
          r = e.height || 0;
        s && r && (o = !1);
        const a = n && n.style;
        if (!1 !== e.preload && !1 !== o && a)
          try {
            const e = window.getComputedStyle(n),
              t = parseFloat(e.paddingLeft) + parseFloat(e.paddingRight),
              o = parseFloat(e.paddingTop) + parseFloat(e.paddingBottom),
              l = i.contentWindow;
            if (l) {
              const e = l.document,
                i = e.getElementsByTagName(be)[0],
                n = e.body;
              (a.width = ""),
                (n.style.overflow = "hidden"),
                (s = s || i.scrollWidth + t),
                (a.width = `${s}px`),
                (n.style.overflow = ""),
                (a.flex = "0 0 auto"),
                (a.height = `${n.scrollHeight}px`),
                (r = i.scrollHeight + o);
            }
          } catch (e) {}
        if (s || r) {
          const e = { flex: "0 1 auto", width: "", height: "" };
          s && "auto" !== s && (e.width = `${s}px`),
            r && "auto" !== r && (e.height = `${r}px`),
            Object.assign(a, e);
        }
      }
      playVideo() {
        const e = this.instance.getSlide();
        if (!e) return;
        const { el: t } = e;
        if (!t || !t.offsetParent) return;
        if (!this.optionFor(e, "videoAutoplay")) return;
        if (e.type === Te)
          try {
            const e = t.querySelector("video");
            if (e) {
              const t = e.play();
              void 0 !== t &&
                t
                  .then(() => {})
                  .catch((t) => {
                    (e.muted = !0), e.play();
                  });
            }
          } catch (e) {}
        if (e.type !== xe && e.type !== Se) return;
        const i = () => {
          if (e.iframeEl && e.iframeEl.contentWindow) {
            let t;
            if ("true" === e.iframeEl.dataset.ready)
              return (
                (t =
                  e.type === xe
                    ? { event: "command", func: "playVideo" }
                    : { method: "play", value: "true" }),
                t &&
                  e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"),
                void (e.poller = void 0)
              );
            e.type === xe &&
              ((t = { event: "listening", id: e.iframeEl.getAttribute("id") }),
              e.iframeEl.contentWindow.postMessage(JSON.stringify(t), "*"));
          }
          e.poller = setTimeout(i, 250);
        };
        i();
      }
      processType(e) {
        if (e.html) return (e.type = be), (e.src = e.html), void (e.html = "");
        const t = this.instance.optionFor(e, "src", "");
        if (!t || "string" != typeof t) return;
        let i = e.type,
          n = null;
        if (
          (n = t.match(
            /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
          ))
        ) {
          const o = this.optionFor(e, xe),
            { nocookie: s } = o,
            r = (function (e, t) {
              var i = {};
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) &&
                  t.indexOf(n) < 0 &&
                  (i[n] = e[n]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              ) {
                var o = 0;
                for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                  t.indexOf(n[o]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                    (i[n[o]] = e[n[o]]);
              }
              return i;
            })(o, ["nocookie"]),
            a = `www.youtube${s ? "-nocookie" : ""}.com`,
            l = Ce(t, r),
            c = encodeURIComponent(n[2]);
          (e.videoId = c),
            (e.src = `https://${a}/embed/${c}?${l}`),
            (e.thumbSrc =
              e.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`),
            (i = xe);
        } else if (
          (n = t.match(
            /^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/
          ))
        ) {
          const o = Ce(t, this.optionFor(e, Se)),
            s = encodeURIComponent(n[1]),
            r = n[4] || "";
          (e.videoId = s),
            (e.src = `https://player.vimeo.com/video/${s}?${
              r ? `h=${r}${o ? "&" : ""}` : ""
            }${o}`),
            (i = Se);
        }
        if (!i && e.triggerEl) {
          const t = e.triggerEl.dataset.type;
          ke.includes(t) && (i = t);
        }
        i ||
          ("string" == typeof t &&
            ("#" === t.charAt(0)
              ? (i = "inline")
              : (n = t.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
              ? ((i = Te),
                (e.videoFormat =
                  e.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
              : t.match(
                  /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                )
              ? (i = ye)
              : t.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf"))),
          (n = t.match(
            /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
          ))
            ? ((e.src = `https://maps.google.${n[1]}/?ll=${(n[2]
                ? n[2] +
                  "&z=" +
                  Math.floor(parseFloat(n[3])) +
                  (n[4] ? n[4].replace(/^\//, "&") : "")
                : n[4] + ""
              ).replace(/\?/, "&")}&output=${
                n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"
              }`),
              (i = we))
            : (n = t.match(
                /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
              )) &&
              ((e.src = `https://maps.google.${n[1]}/maps?q=${n[2]
                .replace("query=", "q=")
                .replace("api=1", "")}&output=embed`),
              (i = we)),
          (i = i || this.instance.option("defaultType")),
          (e.type = i),
          i === ye && (e.thumbSrc = e.thumbSrc || e.src);
      }
      setContent(e) {
        const t = this.instance.optionFor(e, "src") || "";
        if (e && e.type && t) {
          switch (e.type) {
            case be:
              this.instance.setContent(e, t);
              break;
            case Te:
              const i = this.option("videoTpl");
              i &&
                this.instance.setContent(
                  e,
                  i
                    .replace(/\{\{src\}\}/gi, t + "")
                    .replace(
                      /\{\{format\}\}/gi,
                      this.optionFor(e, "videoFormat") || ""
                    )
                    .replace(/\{\{poster\}\}/gi, e.poster || e.thumbSrc || "")
                );
              break;
            case "inline":
            case "clone":
              this.setInlineContent(e);
              break;
            case "ajax":
              this.loadAjaxContent(e);
              break;
            case "pdf":
            case we:
            case xe:
            case Se:
              e.preload = !1;
            case "iframe":
              this.setIframeContent(e);
          }
          this.setAspectRatio(e);
        }
      }
      setAspectRatio(e) {
        const t = e.contentEl;
        if (!(e.el && t && e.type && [xe, Se, Te].includes(e.type))) return;
        let i,
          n = e.width || "auto",
          o = e.height || "auto";
        if ("auto" === n || "auto" === o) {
          i = this.optionFor(e, "videoRatio");
          const t = (i + "").match(/(\d+)\s*\/\s?(\d+)/);
          i =
            t && t.length > 2
              ? parseFloat(t[1]) / parseFloat(t[2])
              : parseFloat(i + "");
        } else n && o && (i = n / o);
        if (!i) return;
        (t.style.aspectRatio = ""),
          (t.style.width = ""),
          (t.style.height = ""),
          t.offsetHeight;
        const s = t.getBoundingClientRect(),
          r = s.width || 1,
          a = s.height || 1;
        (t.style.aspectRatio = i + ""),
          i < r / a
            ? ((o = "auto" === o ? a : Math.min(a, o)),
              (t.style.width = "auto"),
              (t.style.height = `${o}px`))
            : ((n = "auto" === n ? r : Math.min(r, n)),
              (t.style.width = `${n}px`),
              (t.style.height = "auto"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.on("Carousel.createSlide", e.onCreateSlide),
          t.on("Carousel.selectSlide", e.onSelectSlide),
          t.on("Carousel.unselectSlide", e.onUnselectSlide),
          t.on("Carousel.Panzoom.refresh", e.onRefresh),
          t.on("done", e.onDone),
          t.on("clearContent", e.onClearContent),
          window.addEventListener("message", e.onMessage);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.beforeInitSlide", e.onBeforeInitSlide),
          t.off("Carousel.createSlide", e.onCreateSlide),
          t.off("Carousel.selectSlide", e.onSelectSlide),
          t.off("Carousel.unselectSlide", e.onUnselectSlide),
          t.off("Carousel.Panzoom.refresh", e.onRefresh),
          t.off("done", e.onDone),
          t.off("clearContent", e.onClearContent),
          window.removeEventListener("message", e.onMessage);
      }
    }
    Object.defineProperty(Ee, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        ajax: null,
        autoSize: !0,
        iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" },
        preload: !0,
        videoAutoplay: !0,
        videoRatio: 16 / 9,
        videoTpl:
          '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        videoFormat: "",
        vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 },
        youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 },
      },
    });
    const Pe = "play",
      Me = "pause",
      Ae = "ready";
    class Oe extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Ae,
          }),
          Object.defineProperty(this, "inHover", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "timer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "progressBar", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      get isActive() {
        return this.state !== Ae;
      }
      onReady(e) {
        this.option("autoStart") &&
          (e.isInfinite || e.page < e.pages.length - 1) &&
          this.start();
      }
      onChange() {
        this.removeProgressBar(), this.pause();
      }
      onSettle() {
        this.resume();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
      onMouseEnter() {
        (this.inHover = !0), this.pause();
      }
      onMouseLeave() {
        var e;
        (this.inHover = !1),
          (null === (e = this.instance.panzoom) || void 0 === e
            ? void 0
            : e.isResting) && this.resume();
      }
      onTimerEnd() {
        const e = this.instance;
        "play" === this.state &&
          (e.isInfinite || e.page !== e.pages.length - 1
            ? e.slideNext()
            : e.slideTo(0));
      }
      removeProgressBar() {
        this.progressBar &&
          (this.progressBar.remove(), (this.progressBar = null));
      }
      createProgressBar() {
        var e;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        const t = this.instance,
          i =
            (null === (e = t.pages[t.page]) || void 0 === e
              ? void 0
              : e.slides) || [];
        let n = this.option("progressParentEl");
        if ((n || (n = (1 === i.length ? i[0].el : null) || t.viewport), !n))
          return null;
        const o = document.createElement("div");
        return (
          k(o, "f-progress"),
          n.prepend(o),
          (this.progressBar = o),
          o.offsetHeight,
          o
        );
      }
      set() {
        const e = this,
          t = e.instance;
        if (t.pages.length < 2) return;
        if (e.timer) return;
        const i = e.option("timeout");
        (e.state = Pe), k(t.container, "has-autoplay");
        let n = e.createProgressBar();
        n &&
          ((n.style.transitionDuration = `${i}ms`),
          (n.style.transform = "scaleX(1)")),
          (e.timer = setTimeout(() => {
            (e.timer = null), e.inHover || e.onTimerEnd();
          }, i)),
          e.emit("set");
      }
      clear() {
        const e = this;
        e.timer && (clearTimeout(e.timer), (e.timer = null)),
          e.removeProgressBar();
      }
      start() {
        const e = this;
        if ((e.set(), e.state !== Ae)) {
          if (e.option("pauseOnHover")) {
            const t = e.instance.container;
            t.addEventListener("mouseenter", e.onMouseEnter, !1),
              t.addEventListener("mouseleave", e.onMouseLeave, !1);
          }
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
            e.emit("start");
        }
      }
      stop() {
        const e = this,
          t = e.state,
          i = e.instance.container;
        e.clear(),
          (e.state = Ae),
          i.removeEventListener("mouseenter", e.onMouseEnter, !1),
          i.removeEventListener("mouseleave", e.onMouseLeave, !1),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          C(i, "has-autoplay"),
          t !== Ae && e.emit("stop");
      }
      pause() {
        const e = this;
        e.state === Pe && ((e.state = Me), e.clear(), e.emit(Me));
      }
      resume() {
        const e = this,
          t = e.instance;
        if (t.isInfinite || t.page !== t.pages.length - 1)
          if (e.state !== Pe) {
            if (e.state === Me && !e.inHover) {
              const t = new Event("resume", { bubbles: !0, cancelable: !0 });
              e.emit("resume", t), t.defaultPrevented || e.set();
            }
          } else e.set();
        else e.stop();
      }
      toggle() {
        this.state === Pe || this.state === Me ? this.stop() : this.start();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("ready", e.onReady),
          t.on("Panzoom.startAnimation", e.onChange),
          t.on("Panzoom.endAnimation", e.onSettle),
          t.on("Panzoom.touchMove", e.onChange);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("ready", e.onReady),
          t.off("Panzoom.startAnimation", e.onChange),
          t.off("Panzoom.endAnimation", e.onSettle),
          t.off("Panzoom.touchMove", e.onChange),
          e.stop();
      }
    }
    Object.defineProperty(Oe, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        autoStart: !0,
        pauseOnHover: !0,
        progressParentEl: null,
        showProgress: !0,
        timeout: 3e3,
      },
    });
    class Le extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onPrepare(e) {
        const t = e.carousel;
        if (!t) return;
        const i = e.container;
        i &&
          ((t.options.Autoplay = p(
            { autoStart: !1 },
            this.option("Autoplay") || {},
            {
              pauseOnHover: !1,
              timeout: this.option("timeout"),
              progressParentEl: () => this.option("progressParentEl") || null,
              on: {
                start: () => {
                  e.emit("startSlideshow");
                },
                set: (t) => {
                  var n;
                  i.classList.add("has-slideshow"),
                    (null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) !== se.Ready && t.pause();
                },
                stop: () => {
                  i.classList.remove("has-slideshow"),
                    e.isCompact || e.endIdle(),
                    e.emit("endSlideshow");
                },
                resume: (t, i) => {
                  var n, o, s;
                  !i ||
                    !i.cancelable ||
                    ((null === (n = e.getSlide()) || void 0 === n
                      ? void 0
                      : n.state) === se.Ready &&
                      (null ===
                        (s =
                          null === (o = e.carousel) || void 0 === o
                            ? void 0
                            : o.panzoom) || void 0 === s
                        ? void 0
                        : s.isResting)) ||
                    i.preventDefault();
                },
              },
            }
          )),
          t.attachPlugins({ Autoplay: Oe }),
          (this.ref = t.plugins.Autoplay));
      }
      onReady(e) {
        const t = e.carousel,
          i = this.ref;
        i &&
          t &&
          this.option("playOnStart") &&
          (t.isInfinite || t.page < t.pages.length - 1) &&
          i.start();
      }
      onDone(e, t) {
        const i = this.ref,
          n = e.carousel;
        if (!i || !n) return;
        const o = t.panzoom;
        o &&
          o.on("startAnimation", () => {
            e.isCurrentSlide(t) && i.stop();
          }),
          e.isCurrentSlide(t) && i.resume();
      }
      onKeydown(e, t) {
        var i;
        const n = this.ref;
        n &&
          t === this.option("key") &&
          "BUTTON" !==
            (null === (i = document.activeElement) || void 0 === i
              ? void 0
              : i.nodeName) &&
          n.toggle();
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.init", e.onPrepare),
          t.on("Carousel.ready", e.onReady),
          t.on("done", e.onDone),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.init", e.onPrepare),
          t.off("Carousel.ready", e.onReady),
          t.off("done", e.onDone),
          t.off("keydown", e.onKeydown);
      }
    }
    Object.defineProperty(Le, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        key: " ",
        playOnStart: !1,
        progressParentEl: (e) => {
          var t;
          return (
            (null === (t = e.instance.container) || void 0 === t
              ? void 0
              : t.querySelector(
                  ".fancybox__toolbar [data-fancybox-toggle-slideshow]"
                )) || e.instance.container
          );
        },
        timeout: 3e3,
      },
    });
    const Fe = {
      classes: {
        container: "f-thumbs f-carousel__thumbs",
        viewport: "f-thumbs__viewport",
        track: "f-thumbs__track",
        slide: "f-thumbs__slide",
        isResting: "is-resting",
        isSelected: "is-selected",
        isLoading: "is-loading",
        hasThumbs: "has-thumbs",
      },
      minCount: 2,
      parentEl: null,
      thumbTpl:
        '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
      type: "modern",
    };
    var $e;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Hidden = 2)] = "Hidden");
    })($e || ($e = {}));
    const je = "isResting",
      De = "thumbWidth",
      Ie = "thumbHeight",
      ze = "thumbClipWidth";
    let Re = class extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "type", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: "modern",
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "track", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "thumbWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbClipWidth", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbHeight", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "thumbExtraGap", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: $e.Init,
          });
      }
      get isModern() {
        return "modern" === this.type;
      }
      onInitSlide(e, t) {
        const i = t.el ? t.el.dataset : void 0;
        i &&
          ((t.thumbSrc = i.thumbSrc || t.thumbSrc || ""),
          (t[ze] = parseFloat(i[ze] || "") || t[ze] || 0),
          (t[Ie] = parseFloat(i.thumbHeight || "") || t[Ie] || 0)),
          this.addSlide(t);
      }
      onInitSlides() {
        this.build();
      }
      onChange() {
        var e;
        if (!this.isModern) return;
        const t = this.container,
          i = this.instance,
          n = i.panzoom,
          o = this.carousel,
          s = o ? o.panzoom : null,
          a = i.page;
        if (n && o && s) {
          if (n.isDragging) {
            C(t, this.cn(je));
            let n =
              (null === (e = o.pages[a]) || void 0 === e ? void 0 : e.pos) || 0;
            n += i.getProgress(a) * (this[ze] + this.thumbGap);
            let r = s.getBounds();
            -1 * n > r.x.min &&
              -1 * n < r.x.max &&
              s.panTo({ x: -1 * n, friction: 0.12 });
          } else r(t, this.cn(je), n.isResting);
          this.shiftModern();
        }
      }
      onRefresh() {
        this.updateProps();
        for (const e of this.instance.slides || []) this.resizeModernSlide(e);
        this.shiftModern();
      }
      isDisabled() {
        const e = this.option("minCount") || 0;
        if (e) {
          const t = this.instance;
          let i = 0;
          for (const e of t.slides || []) e.thumbSrc && i++;
          if (i < e) return !0;
        }
        const t = this.option("type");
        return ["modern", "classic"].indexOf(t) < 0;
      }
      getThumb(e) {
        const t = this.option("thumbTpl") || "";
        return {
          html: this.instance.localize(t, [
            ["%i", e.index],
            ["%d", e.index + 1],
            [
              "%s",
              e.thumbSrc ||
                "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            ],
          ]),
        };
      }
      addSlide(e) {
        const t = this.carousel;
        t && t.addSlide(e.index, this.getThumb(e));
      }
      getSlides() {
        const e = [];
        for (const t of this.instance.slides || []) e.push(this.getThumb(t));
        return e;
      }
      resizeModernSlide(e) {
        this.isModern &&
          (e[De] =
            e[ze] && e[Ie] ? Math.round(this[Ie] * (e[ze] / e[Ie])) : this[De]);
      }
      updateProps() {
        const e = this.container;
        if (!e) return;
        const t = (t) =>
          parseFloat(getComputedStyle(e).getPropertyValue("--f-thumb-" + t)) ||
          0;
        (this.thumbGap = t("gap")),
          (this.thumbExtraGap = t("extra-gap")),
          (this[De] = t("width") || 40),
          (this[ze] = t("clip-width") || 40),
          (this[Ie] = t("height") || 40);
      }
      build() {
        const e = this;
        if (e.state !== $e.Init) return;
        if (e.isDisabled()) return void e.emit("disabled");
        const t = e.instance,
          i = t.container,
          n = e.getSlides(),
          o = e.option("type");
        e.type = o;
        const s = e.option("parentEl"),
          r = e.cn("container"),
          a = e.cn("track");
        let l = null == s ? void 0 : s.querySelector("." + r);
        l ||
          ((l = document.createElement("div")),
          k(l, r),
          s ? s.appendChild(l) : i.after(l)),
          k(l, `is-${o}`),
          k(i, e.cn("hasThumbs")),
          (e.container = l),
          e.updateProps();
        let c = l.querySelector("." + a);
        c ||
          ((c = document.createElement("div")),
          k(c, e.cn("track")),
          l.appendChild(c)),
          (e.track = c);
        const d = p(
            {},
            {
              track: c,
              infinite: !1,
              center: !0,
              fill: "classic" === o,
              dragFree: !0,
              slidesPerPage: 1,
              transition: !1,
              preload: 0.25,
              friction: 0.12,
              Panzoom: { maxVelocity: 0 },
              Dots: !1,
              Navigation: !1,
              classes: {
                container: "f-thumbs",
                viewport: "f-thumbs__viewport",
                track: "f-thumbs__track",
                slide: "f-thumbs__slide",
              },
            },
            e.option("Carousel") || {},
            { Sync: { target: t }, slides: n }
          ),
          u = new t.constructor(l, d);
        u.on("createSlide", (t, i) => {
          e.setProps(i.index), e.emit("createSlide", i, i.el);
        }),
          u.on("ready", () => {
            e.shiftModern(), e.emit("ready");
          }),
          u.on("refresh", () => {
            e.shiftModern();
          }),
          u.on("Panzoom.click", (t, i, n) => {
            e.onClick(n);
          }),
          (e.carousel = u),
          (e.state = $e.Ready);
      }
      onClick(e) {
        e.preventDefault(), e.stopPropagation();
        const t = this.instance,
          { pages: i, page: n } = t,
          o = (e) => {
            if (e) {
              const t = e.closest("[data-carousel-index]");
              if (t)
                return [parseInt(t.dataset.carouselIndex || "", 10) || 0, t];
            }
            return [-1, void 0];
          },
          s = (e, t) => {
            const i = document.elementFromPoint(e, t);
            return i ? o(i) : [-1, void 0];
          };
        let [r, a] = o(e.target);
        if (r > -1) return;
        const l = this[ze],
          c = e.clientX,
          d = e.clientY;
        let [u, h] = s(c - l, d),
          [p, f] = s(c + l, d);
        h && f
          ? ((r =
              Math.abs(c - h.getBoundingClientRect().right) <
              Math.abs(c - f.getBoundingClientRect().left)
                ? u
                : p),
            r === n && (r = r === u ? p : u))
          : h
          ? (r = u)
          : f && (r = p),
          r > -1 && i[r] && t.slideTo(r);
      }
      getShift(e) {
        var t;
        const i = this,
          { instance: n } = i,
          o = i.carousel;
        if (!n || !o) return 0;
        const s = i[De],
          r = i[ze],
          a = i.thumbGap,
          l = i.thumbExtraGap;
        if (!(null === (t = o.slides[e]) || void 0 === t ? void 0 : t.el))
          return 0;
        const c = 0.5 * (s - r),
          d = n.pages.length - 1;
        let u = n.getProgress(0),
          h = n.getProgress(d),
          p = n.getProgress(e, !1, !0),
          f = 0,
          g = c + l + a;
        const m = u < 0 && u > -1,
          v = h > 0 && h < 1;
        return (
          0 === e
            ? ((f = g * Math.abs(u)), v && 1 === u && (f -= g * Math.abs(h)))
            : e === d
            ? ((f = g * Math.abs(h) * -1),
              m && -1 === h && (f += g * Math.abs(u)))
            : m || v
            ? ((f = -1 * g),
              (f += g * Math.abs(u)),
              (f += g * (1 - Math.abs(h))))
            : (f = g * p),
          f
        );
      }
      setProps(e) {
        var i;
        const n = this;
        if (!n.isModern) return;
        const { instance: o } = n,
          s = n.carousel;
        if (o && s) {
          const r = null === (i = s.slides[e]) || void 0 === i ? void 0 : i.el;
          if (r && r.childNodes.length) {
            let i = t(1 - Math.abs(o.getProgress(e))),
              s = t(n.getShift(e));
            r.style.setProperty("--progress", i ? i + "" : ""),
              r.style.setProperty("--shift", s + "");
          }
        }
      }
      shiftModern() {
        const e = this;
        if (!e.isModern) return;
        const { instance: t, track: i } = e,
          n = t.panzoom,
          o = e.carousel;
        if (!(t && i && n && o)) return;
        if (n.state === v.Init || n.state === v.Destroy) return;
        for (const i of t.slides) e.setProps(i.index);
        let s = (e[ze] + e.thumbGap) * (o.slides.length || 0);
        i.style.setProperty("--width", s + "");
      }
      cleanup() {
        const e = this;
        e.carousel && e.carousel.destroy(),
          (e.carousel = null),
          e.container && e.container.remove(),
          (e.container = null),
          e.track && e.track.remove(),
          (e.track = null),
          (e.state = $e.Init),
          C(e.instance.container, e.cn("hasThumbs"));
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("initSlide", e.onInitSlide),
          t.state === I.Init
            ? t.on("initSlides", e.onInitSlides)
            : e.onInitSlides(),
          t.on(["change", "Panzoom.afterTransform"], e.onChange),
          t.on("Panzoom.refresh", e.onRefresh);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("initSlide", e.onInitSlide),
          t.off("initSlides", e.onInitSlides),
          t.off(["change", "Panzoom.afterTransform"], e.onChange),
          t.off("Panzoom.refresh", e.onRefresh),
          e.cleanup();
      }
    };
    Object.defineProperty(Re, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: Fe,
    });
    const He = Object.assign(Object.assign({}, Fe), {
        key: "t",
        showOnStart: !0,
        parentEl: null,
      }),
      Ne = "is-masked",
      _e = "aria-hidden";
    class qe extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "ref", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "hidden", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          });
      }
      get isEnabled() {
        const e = this.ref;
        return e && !e.isDisabled();
      }
      get isHidden() {
        return this.hidden;
      }
      onClick(e, t) {
        t.stopPropagation();
      }
      onCreateSlide(e, t) {
        var i, n, o;
        const s =
            (null ===
              (o =
                null ===
                  (n =
                    null === (i = this.instance) || void 0 === i
                      ? void 0
                      : i.carousel) || void 0 === n
                  ? void 0
                  : n.slides[t.index]) || void 0 === o
              ? void 0
              : o.type) || "",
          r = t.el;
        if (r && s) {
          let e = `for-${s}`;
          ["video", "youtube", "vimeo", "html5video"].includes(s) &&
            (e += " for-video"),
            k(r, e);
        }
      }
      onInit() {
        var e;
        const t = this,
          i = t.instance,
          n = i.carousel;
        if (t.ref || !n) return;
        const o = t.option("parentEl") || i.footer || i.container;
        if (!o) return;
        const s = p({}, t.options, {
          parentEl: o,
          classes: { container: "f-thumbs fancybox__thumbs" },
          Carousel: { Sync: { friction: i.option("Carousel.friction") || 0 } },
          on: {
            ready: (e) => {
              const i = e.container;
              i &&
                this.hidden &&
                (t.refresh(),
                (i.style.transition = "none"),
                t.hide(),
                i.offsetHeight,
                queueMicrotask(() => {
                  (i.style.transition = ""), t.show();
                }));
            },
          },
        });
        (s.Carousel = s.Carousel || {}),
          (s.Carousel.on = p(
            (null === (e = t.options.Carousel) || void 0 === e
              ? void 0
              : e.on) || {},
            { click: this.onClick, createSlide: this.onCreateSlide }
          )),
          (n.options.Thumbs = s),
          n.attachPlugins({ Thumbs: Re }),
          (t.ref = n.plugins.Thumbs),
          t.option("showOnStart") ||
            ((t.ref.state = $e.Hidden), (t.hidden = !0));
      }
      onResize() {
        var e;
        const t =
          null === (e = this.ref) || void 0 === e ? void 0 : e.container;
        t && (t.style.maxHeight = "");
      }
      onKeydown(e, t) {
        const i = this.option("key");
        i && i === t && this.toggle();
      }
      toggle() {
        const e = this.ref;
        if (e && !e.isDisabled())
          return e.state === $e.Hidden
            ? ((e.state = $e.Init), void e.build())
            : void (this.hidden ? this.show() : this.hide());
      }
      show() {
        const e = this.ref;
        if (!e || e.isDisabled()) return;
        const t = e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.removeAttribute(_e),
          t.classList.remove(Ne),
          (this.hidden = !1));
      }
      hide() {
        const e = this.ref,
          t = e && e.container;
        t &&
          (this.refresh(),
          t.offsetHeight,
          t.classList.add(Ne),
          t.setAttribute(_e, "true")),
          (this.hidden = !0);
      }
      refresh() {
        const e = this.ref;
        if (!e || !e.state) return;
        const t = e.container,
          i = (null == t ? void 0 : t.firstChild) || null;
        t &&
          i &&
          i.childNodes.length &&
          (t.style.maxHeight = `${i.getBoundingClientRect().height}px`);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.state === oe.Init ? t.on("Carousel.init", e.onInit) : e.onInit(),
          t.on("resize", e.onResize),
          t.on("keydown", e.onKeydown);
      }
      detach() {
        var e;
        const t = this,
          i = t.instance;
        i.off("Carousel.init", t.onInit),
          i.off("resize", t.onResize),
          i.off("keydown", t.onKeydown),
          null === (e = i.carousel) ||
            void 0 === e ||
            e.detachPlugins(["Thumbs"]),
          (t.ref = null);
      }
    }
    Object.defineProperty(qe, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: He,
    });
    const Be = {
      panLeft: {
        icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
        change: { panX: -100 },
      },
      panRight: {
        icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
        change: { panX: 100 },
      },
      panUp: {
        icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
        change: { panY: -100 },
      },
      panDown: {
        icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
        change: { panY: 100 },
      },
      zoomIn: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
        action: "zoomIn",
      },
      zoomOut: {
        icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "zoomOut",
      },
      toggle1to1: {
        icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
        action: "toggleZoom",
      },
      toggleZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "toggleZoom",
      },
      iterateZoom: {
        icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
        action: "iterateZoom",
      },
      rotateCCW: {
        icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
        action: "rotateCCW",
      },
      rotateCW: {
        icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
        action: "rotateCW",
      },
      flipX: {
        icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
        action: "flipX",
      },
      flipY: {
        icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
        action: "flipY",
      },
      fitX: {
        icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
        action: "fitX",
      },
      fitY: {
        icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
        action: "fitY",
      },
      reset: {
        icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
        action: "reset",
      },
      toggleFS: {
        icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
        action: "toggleFS",
      },
    };
    var We;
    !(function (e) {
      (e[(e.Init = 0)] = "Init"),
        (e[(e.Ready = 1)] = "Ready"),
        (e[(e.Disabled = 2)] = "Disabled");
    })(We || (We = {}));
    const Xe = {
        tabindex: "-1",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
      },
      Ve = "has-toolbar",
      Ye = "fancybox__toolbar";
    class Ue extends H {
      constructor() {
        super(...arguments),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: We.Init,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          });
      }
      onReady(e) {
        var t;
        if (!e.carousel) return;
        let i = this.option("display"),
          n = this.option("absolute"),
          o = this.option("enabled");
        if ("auto" === o) {
          const e = this.instance.carousel;
          let t = 0;
          if (e)
            for (const i of e.slides) (i.panzoom || "image" === i.type) && t++;
          t || (o = !1);
        }
        o || (i = void 0);
        let s = 0;
        const r = { left: [], middle: [], right: [] };
        if (i)
          for (const e of ["left", "middle", "right"])
            for (const n of i[e]) {
              const i = this.createEl(n);
              i && (null === (t = r[e]) || void 0 === t || t.push(i), s++);
            }
        let a = null;
        if ((s && (a = this.createContainer()), a)) {
          for (const [e, t] of Object.entries(r)) {
            const i = document.createElement("div");
            k(i, Ye + "__column is-" + e);
            for (const e of t) i.appendChild(e);
            "auto" !== n || "middle" !== e || t.length || (n = !0),
              a.appendChild(i);
          }
          !0 === n && k(a, "is-absolute"),
            (this.state = We.Ready),
            this.onRefresh();
        } else this.state = We.Disabled;
      }
      onClick(e) {
        var t, i;
        const n = this.instance,
          o = n.getSlide(),
          s = null == o ? void 0 : o.panzoom,
          r = e.target,
          a = r && T(r) ? r.dataset : null;
        if (!a) return;
        if (void 0 !== a.fancyboxToggleThumbs)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void (null === (t = n.plugins.Thumbs) || void 0 === t || t.toggle())
          );
        if (void 0 !== a.fancyboxToggleFullscreen)
          return (
            e.preventDefault(),
            e.stopPropagation(),
            void this.instance.toggleFullscreen()
          );
        if (void 0 !== a.fancyboxToggleSlideshow) {
          e.preventDefault(), e.stopPropagation();
          const t =
            null === (i = n.carousel) || void 0 === i
              ? void 0
              : i.plugins.Autoplay;
          let o = t.isActive;
          return (
            s && "mousemove" === s.panMode && !o && s.reset(),
            void (o ? t.stop() : t.start())
          );
        }
        const l = a.panzoomAction,
          c = a.panzoomChange;
        if (((c || l) && (e.preventDefault(), e.stopPropagation()), c)) {
          let t = {};
          try {
            t = JSON.parse(c);
          } catch (e) {}
          s && s.applyChange(t);
        } else l && s && s[l] && s[l]();
      }
      onChange() {
        this.onRefresh();
      }
      onRefresh() {
        if (this.instance.isClosing()) return;
        const e = this.container;
        if (!e) return;
        const t = this.instance.getSlide();
        if (!t || t.state !== se.Ready) return;
        const i = t && !t.error && t.panzoom;
        for (const t of e.querySelectorAll("[data-panzoom-action]"))
          i
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        let n = i && i.canZoomIn(),
          o = i && i.canZoomOut();
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]'))
          n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]'))
          o
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
        for (const t of e.querySelectorAll(
          '[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]'
        )) {
          o || n
            ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex"))
            : (t.setAttribute("disabled", ""),
              t.setAttribute("tabindex", "-1"));
          const e = t.querySelector("g");
          e && (e.style.display = n ? "" : "none");
        }
      }
      onDone(e, t) {
        var i;
        null === (i = t.panzoom) ||
          void 0 === i ||
          i.on("afterTransform", () => {
            this.instance.isCurrentSlide(t) && this.onRefresh();
          }),
          this.instance.isCurrentSlide(t) && this.onRefresh();
      }
      createContainer() {
        const e = this.instance.container;
        if (!e) return null;
        const t = this.option("parentEl") || e;
        let i = t.querySelector("." + Ye);
        return (
          i || ((i = document.createElement("div")), k(i, Ye), t.prepend(i)),
          i.addEventListener("click", this.onClick, {
            passive: !1,
            capture: !0,
          }),
          e && k(e, Ve),
          (this.container = i),
          i
        );
      }
      createEl(e) {
        const t = this.instance,
          i = t.carousel;
        if (!i) return null;
        if ("toggleFS" === e) return null;
        if ("fullscreen" === e && !ie()) return null;
        let n = null;
        const s = i.slides.length || 0;
        let r = 0,
          a = 0;
        for (const e of i.slides)
          (e.panzoom || "image" === e.type) && r++,
            ("image" === e.type || e.downloadSrc) && a++;
        if (s < 2 && ["infobar", "prev", "next"].includes(e)) return n;
        if (void 0 !== Be[e] && !r) return null;
        if ("download" === e && !a) return null;
        if ("thumbs" === e) {
          const e = t.plugins.Thumbs;
          if (!e || !e.isEnabled) return null;
        }
        if ("slideshow" === e && (!i.plugins.Autoplay || s < 2)) return null;
        if (void 0 !== Be[e]) {
          const t = Be[e];
          (n = document.createElement("button")),
            n.setAttribute(
              "title",
              this.instance.localize(`{{${e.toUpperCase()}}}`)
            ),
            k(n, "f-button"),
            t.action && (n.dataset.panzoomAction = t.action),
            t.change && (n.dataset.panzoomChange = JSON.stringify(t.change)),
            n.appendChild(o(this.instance.localize(t.icon)));
        } else {
          const t = (this.option("items") || [])[e];
          t &&
            ((n = o(this.instance.localize(t.tpl))),
            "function" == typeof t.click &&
              n.addEventListener("click", (e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  "function" == typeof t.click && t.click.call(this, this, e);
              }));
        }
        const l = null == n ? void 0 : n.querySelector("svg");
        if (l)
          for (const [e, t] of Object.entries(Xe))
            l.getAttribute(e) || l.setAttribute(e, String(t));
        return n;
      }
      removeContainer() {
        const e = this.container;
        e && e.remove(), (this.container = null), (this.state = We.Disabled);
        const t = this.instance.container;
        t && C(t, Ve);
      }
      attach() {
        const e = this,
          t = e.instance;
        t.on("Carousel.initSlides", e.onReady),
          t.on("done", e.onDone),
          t.on(["reveal", "Carousel.change"], e.onChange),
          e.onReady(e.instance);
      }
      detach() {
        const e = this,
          t = e.instance;
        t.off("Carousel.initSlides", e.onReady),
          t.off("done", e.onDone),
          t.off(["reveal", "Carousel.change"], e.onChange),
          e.removeContainer();
      }
    }
    Object.defineProperty(Ue, "defaults", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: {
        absolute: "auto",
        display: {
          left: ["infobar"],
          middle: [],
          right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"],
        },
        enabled: "auto",
        items: {
          infobar: {
            tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>',
          },
          download: {
            tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>',
          },
          prev: {
            tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>',
          },
          next: {
            tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>',
          },
          slideshow: {
            tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>',
          },
          fullscreen: {
            tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>',
          },
          thumbs: {
            tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>',
          },
          close: {
            tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>',
          },
        },
        parentEl: null,
      },
    });
    const Ge = {
        Hash: class extends H {
          onReady() {
            ae = !1;
          }
          onChange(e) {
            ce && clearTimeout(ce);
            const { hash: t } = de(),
              { hash: i } = ue(),
              n = e.isOpeningSlide(e.getSlide());
            n && (re = i === t ? "" : i),
              t &&
                t !== i &&
                (ce = setTimeout(() => {
                  try {
                    if (e.state === oe.Ready) {
                      let e = "replaceState";
                      n && !le && ((e = "pushState"), (le = !0)),
                        window.history[e](
                          {},
                          document.title,
                          window.location.pathname + window.location.search + t
                        );
                    }
                  } catch (e) {}
                }, 300));
          }
          onClose(e) {
            if ((ce && clearTimeout(ce), !ae && le))
              return (le = !1), (ae = !1), void window.history.back();
            if (!ae)
              try {
                window.history.replaceState(
                  {},
                  document.title,
                  window.location.pathname + window.location.search + (re || "")
                );
              } catch (e) {}
          }
          attach() {
            const e = this.instance;
            e.on("ready", this.onReady),
              e.on(["Carousel.ready", "Carousel.change"], this.onChange),
              e.on("close", this.onClose);
          }
          detach() {
            const e = this.instance;
            e.off("ready", this.onReady),
              e.off(["Carousel.ready", "Carousel.change"], this.onChange),
              e.off("close", this.onClose);
          }
          static parseURL() {
            return ue();
          }
          static startFromUrl() {
            he();
          }
          static destroy() {
            window.removeEventListener("hashchange", fe, !1);
          }
        },
        Html: Ee,
        Images: ve,
        Slideshow: Le,
        Thumbs: qe,
        Toolbar: Ue,
      },
      Ze = "with-fancybox",
      Ke = "hide-scrollbar",
      Je = "--fancybox-scrollbar-compensate",
      Qe = "--fancybox-body-margin",
      et = "aria-hidden",
      tt = "is-using-tab",
      it = "is-animated",
      nt = "is-compact",
      ot = "is-loading",
      st = "is-opening",
      rt = "has-caption",
      at = "disabled",
      lt = "tabindex",
      ct = "download",
      dt = "href",
      ut = "src",
      ht = (e) => "string" == typeof e,
      pt = function () {
        var e = window.getSelection();
        return !!e && "Range" === e.type;
      };
    let ft,
      gt = null,
      mt = null,
      vt = 0,
      bt = 0;
    const yt = new Map();
    let wt = 0;
    class xt extends m {
      get isIdle() {
        return this.idle;
      }
      get isCompact() {
        return this.option("compact");
      }
      constructor(e = [], t = {}, i = {}) {
        super(t),
          Object.defineProperty(this, "userSlides", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "userPlugins", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: {},
          }),
          Object.defineProperty(this, "idle", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "idleTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "clickTimer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "pwt", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "ignoreFocusChange", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "startedFs", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "state", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: oe.Init,
          }),
          Object.defineProperty(this, "id", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "caption", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "footer", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "carousel", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "lastFocus", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: null,
          }),
          Object.defineProperty(this, "prevMouseMoveEvent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          ft || (ft = ie()),
          (this.id = t.id || ++wt),
          yt.set(this.id, this),
          (this.userSlides = e),
          (this.userPlugins = i),
          queueMicrotask(() => {
            this.init();
          });
      }
      init() {
        if (this.state === oe.Destroy) return;
        (this.state = oe.Init),
          this.attachPlugins(
            Object.assign(Object.assign({}, xt.Plugins), this.userPlugins)
          ),
          this.emit("init"),
          this.emit("attachPlugins"),
          !0 === this.option("hideScrollbar") &&
            (() => {
              if (!J) return;
              const e = document,
                t = e.body,
                i = e.documentElement;
              if (t.classList.contains(Ke)) return;
              let n = window.innerWidth - i.getBoundingClientRect().width;
              const o = parseFloat(window.getComputedStyle(t).marginRight);
              n < 0 && (n = 0),
                i.style.setProperty(Je, `${n}px`),
                o && t.style.setProperty(Qe, `${o}px`),
                t.classList.add(Ke);
            })(),
          this.initLayout(),
          this.scale();
        const e = () => {
          this.initCarousel(this.userSlides),
            (this.state = oe.Ready),
            this.attachEvents(),
            this.emit("ready"),
            setTimeout(() => {
              this.container && this.container.setAttribute(et, "false");
            }, 16);
        };
        this.option("Fullscreen.autoStart") && ft && !ft.isFullscreen()
          ? ft
              .request()
              .then(() => {
                (this.startedFs = !0), e();
              })
              .catch(() => e())
          : e();
      }
      initLayout() {
        var e, t;
        const i = this.option("parentEl") || document.body,
          n = o(this.localize(this.option("tpl.main") || ""));
        n &&
          (n.setAttribute("id", `fancybox-${this.id}`),
          n.setAttribute("aria-label", this.localize("{{MODAL}}")),
          n.classList.toggle(nt, this.isCompact),
          k(n, this.option("mainClass") || ""),
          k(n, st),
          (this.container = n),
          (this.footer = n.querySelector(".fancybox__footer")),
          i.appendChild(n),
          k(document.documentElement, Ze),
          (gt && mt) ||
            ((gt = document.createElement("span")),
            k(gt, "fancybox-focus-guard"),
            gt.setAttribute(lt, "0"),
            gt.setAttribute(et, "true"),
            gt.setAttribute("aria-label", "Focus guard"),
            (mt = gt.cloneNode()),
            null === (e = n.parentElement) ||
              void 0 === e ||
              e.insertBefore(gt, n),
            null === (t = n.parentElement) || void 0 === t || t.append(mt)),
          n.addEventListener("mousedown", (e) => {
            (vt = e.pageX), (bt = e.pageY), C(n, tt);
          }),
          this.option("animated") &&
            (k(n, it),
            setTimeout(() => {
              this.isClosing() || C(n, it);
            }, 350)),
          this.emit("initLayout"));
      }
      initCarousel(e) {
        const t = this.container;
        if (!t) return;
        const n = t.querySelector(".fancybox__carousel");
        if (!n) return;
        const o = (this.carousel = new Z(
          n,
          p(
            {},
            {
              slides: e,
              transition: "fade",
              Panzoom: {
                lockAxis: this.option("dragToClose") ? "xy" : "x",
                infinite: !!this.option("dragToClose") && "y",
              },
              Dots: !1,
              Navigation: {
                classes: {
                  container: "fancybox__nav",
                  button: "f-button",
                  isNext: "is-next",
                  isPrev: "is-prev",
                },
              },
              initialPage: this.option("startIndex"),
              l10n: this.option("l10n"),
            },
            this.option("Carousel") || {}
          )
        ));
        o.on("*", (e, t, ...i) => {
          this.emit(`Carousel.${t}`, e, ...i);
        }),
          o.on(["ready", "change"], () => {
            this.manageCaption();
          }),
          this.on("Carousel.removeSlide", (e, t, i) => {
            this.clearContent(i), (i.state = void 0);
          }),
          o.on("Panzoom.touchStart", () => {
            var e, t;
            this.isCompact || this.endIdle(),
              (null === (e = document.activeElement) || void 0 === e
                ? void 0
                : e.closest(".f-thumbs")) &&
                (null === (t = this.container) || void 0 === t || t.focus());
          }),
          o.on("settle", () => {
            this.idleTimer ||
              this.isCompact ||
              !this.option("idle") ||
              this.setIdle(),
              this.option("autoFocus") && !this.isClosing && this.checkFocus();
          }),
          this.option("dragToClose") &&
            (o.on("Panzoom.afterTransform", (e, t) => {
              const n = this.getSlide();
              if (n && i(n.el)) return;
              const o = this.container;
              if (o) {
                const e = Math.abs(t.current.f),
                  i =
                    e < 1
                      ? ""
                      : Math.max(
                          0.5,
                          Math.min(1, 1 - (e / t.contentRect.fitHeight) * 1.5)
                        );
                o.style.setProperty("--fancybox-ts", i ? "0s" : ""),
                  o.style.setProperty("--fancybox-opacity", i + "");
              }
            }),
            o.on("Panzoom.touchEnd", (e, t, n) => {
              var o;
              const s = this.getSlide();
              if (s && i(s.el)) return;
              if (
                t.isMobile &&
                document.activeElement &&
                -1 !==
                  ["TEXTAREA", "INPUT"].indexOf(
                    null === (o = document.activeElement) || void 0 === o
                      ? void 0
                      : o.nodeName
                  )
              )
                return;
              const r = Math.abs(t.dragOffset.y);
              "y" === t.lockedAxis &&
                (r >= 200 || (r >= 50 && t.dragOffset.time < 300)) &&
                (n && n.cancelable && n.preventDefault(),
                this.close(
                  n,
                  "f-throwOut" + (t.current.f < 0 ? "Up" : "Down")
                ));
            })),
          o.on("change", (e) => {
            var t;
            let i =
              null === (t = this.getSlide()) || void 0 === t
                ? void 0
                : t.triggerEl;
            if (i) {
              const t = new CustomEvent("slideTo", {
                bubbles: !0,
                cancelable: !0,
                detail: e.page,
              });
              i.dispatchEvent(t);
            }
          }),
          o.on(["refresh", "change"], (e) => {
            const t = this.container;
            if (!t) return;
            for (const i of t.querySelectorAll("[data-fancybox-current-index]"))
              i.innerHTML = e.page + 1;
            for (const i of t.querySelectorAll("[data-fancybox-count]"))
              i.innerHTML = e.pages.length;
            if (!e.isInfinite) {
              for (const i of t.querySelectorAll("[data-fancybox-next]"))
                e.page < e.pages.length - 1
                  ? (i.removeAttribute(at), i.removeAttribute(lt))
                  : (i.setAttribute(at, ""), i.setAttribute(lt, "-1"));
              for (const i of t.querySelectorAll("[data-fancybox-prev]"))
                e.page > 0
                  ? (i.removeAttribute(at), i.removeAttribute(lt))
                  : (i.setAttribute(at, ""), i.setAttribute(lt, "-1"));
            }
            const i = this.getSlide();
            if (!i) return;
            let n = i.downloadSrc || "";
            n || "image" !== i.type || i.error || !ht(i.src) || (n = i.src);
            for (const e of t.querySelectorAll("[data-fancybox-download]")) {
              const t = i.downloadFilename;
              n
                ? (e.removeAttribute(at),
                  e.removeAttribute(lt),
                  e.setAttribute(dt, n),
                  e.setAttribute(ct, t || n),
                  e.setAttribute("target", "_blank"))
                : (e.setAttribute(at, ""),
                  e.setAttribute(lt, "-1"),
                  e.removeAttribute(dt),
                  e.removeAttribute(ct));
            }
          }),
          this.emit("initCarousel");
      }
      attachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        t.addEventListener("click", e.onClick, { passive: !1, capture: !1 }),
          t.addEventListener("wheel", e.onWheel, { passive: !1, capture: !1 }),
          document.addEventListener("keydown", e.onKeydown, {
            passive: !1,
            capture: !0,
          }),
          document.addEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.addEventListener("mousemove", e.onMousemove),
          e.option("trapFocus") &&
            document.addEventListener("focus", e.onFocus, !0),
          window.addEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.addEventListener("scroll", e.onResize),
          i.addEventListener("resize", e.onResize));
      }
      detachEvents() {
        const e = this,
          t = e.container;
        if (!t) return;
        document.removeEventListener("keydown", e.onKeydown, {
          passive: !1,
          capture: !0,
        }),
          t.removeEventListener("wheel", e.onWheel, {
            passive: !1,
            capture: !1,
          }),
          t.removeEventListener("click", e.onClick, {
            passive: !1,
            capture: !1,
          }),
          document.removeEventListener("mousemove", e.onMousemove),
          window.removeEventListener("resize", e.onResize);
        const i = window.visualViewport;
        i &&
          (i.removeEventListener("resize", e.onResize),
          i.removeEventListener("scroll", e.onResize)),
          document.removeEventListener(
            "visibilitychange",
            e.onVisibilityChange,
            !1
          ),
          document.removeEventListener("focus", e.onFocus, !0);
      }
      scale() {
        const e = this.container;
        if (!e) return;
        const t = window.visualViewport,
          i = Math.max(1, (null == t ? void 0 : t.scale) || 1);
        let n = "",
          o = "",
          s = "";
        if (t && i > 1) {
          let e = `${t.offsetLeft}px`,
            r = `${t.offsetTop}px`;
          (n = t.width * i + "px"),
            (o = t.height * i + "px"),
            (s = `translate3d(${e}, ${r}, 0) scale(${1 / i})`);
        }
        (e.style.transform = s), (e.style.width = n), (e.style.height = o);
      }
      onClick(e) {
        var t;
        const { container: i, isCompact: n } = this;
        if (!i || this.isClosing()) return;
        !n && this.option("idle") && this.resetIdle();
        const o = e.composedPath()[0];
        if (
          o.closest(".fancybox-spinner") ||
          o.closest("[data-fancybox-close]")
        )
          return e.preventDefault(), void this.close(e);
        if (o.closest("[data-fancybox-prev]"))
          return e.preventDefault(), void this.prev();
        if (o.closest("[data-fancybox-next]"))
          return e.preventDefault(), void this.next();
        if ("click" === e.type && 0 === e.detail) return;
        if (Math.abs(e.pageX - vt) > 30 || Math.abs(e.pageY - bt) > 30) return;
        const s = document.activeElement;
        if (pt() && s && i.contains(s)) return;
        if (
          n &&
          "image" ===
            (null === (t = this.getSlide()) || void 0 === t ? void 0 : t.type)
        )
          return void (this.clickTimer
            ? (clearTimeout(this.clickTimer), (this.clickTimer = null))
            : (this.clickTimer = setTimeout(() => {
                this.toggleIdle(), (this.clickTimer = null);
              }, 350)));
        if ((this.emit("click", e), e.defaultPrevented)) return;
        let r = !1;
        if (o.closest(".fancybox__content")) {
          if (s) {
            if (s.closest("[contenteditable]")) return;
            o.matches(ee) || s.blur();
          }
          if (pt()) return;
          r = this.option("contentClick");
        } else o.closest(".fancybox__carousel") && !o.matches(ee) && (r = this.option("backdropClick"));
        "close" === r
          ? (e.preventDefault(), this.close(e))
          : "next" === r
          ? (e.preventDefault(), this.next())
          : "prev" === r && (e.preventDefault(), this.prev());
      }
      onWheel(e) {
        const t = e.target;
        let i = this.option("wheel", e);
        t.closest(".fancybox__thumbs") && (i = "slide");
        const o = "slide" === i,
          s = [-e.deltaX || 0, -e.deltaY || 0, -e.detail || 0].reduce(function (
            e,
            t
          ) {
            return Math.abs(t) > Math.abs(e) ? t : e;
          }),
          r = Math.max(-1, Math.min(1, s)),
          a = Date.now();
        this.pwt && a - this.pwt < 300
          ? o && e.preventDefault()
          : ((this.pwt = a),
            this.emit("wheel", e, r),
            e.defaultPrevented ||
              ("close" === i
                ? (e.preventDefault(), this.close(e))
                : "slide" === i &&
                  (n(t) ||
                    (e.preventDefault(), this[r > 0 ? "prev" : "next"]()))));
      }
      onKeydown(e) {
        if (!this.isTopmost()) return;
        this.isCompact ||
          !this.option("idle") ||
          this.isClosing() ||
          this.resetIdle();
        const t = e.key,
          i = this.option("keyboard");
        if (!i) return;
        const n = e.composedPath()[0],
          o = document.activeElement && document.activeElement.classList,
          s =
            (o && o.contains("f-button")) ||
            n.dataset.carouselPage ||
            n.dataset.carouselIndex;
        if (
          "Escape" !== t &&
          !s &&
          T(n) &&
          (n.isContentEditable ||
            -1 !==
              ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(
                n.nodeName
              ))
        )
          return;
        if (
          ("Tab" === e.key ? k(this.container, tt) : C(this.container, tt),
          e.ctrlKey || e.altKey || e.shiftKey)
        )
          return;
        this.emit("keydown", t, e);
        const r = i[t];
        r && "function" == typeof this[r] && (e.preventDefault(), this[r]());
      }
      onResize() {
        const e = this.container;
        if (!e) return;
        const t = this.isCompact;
        e.classList.toggle(nt, t),
          this.manageCaption(this.getSlide()),
          this.isCompact ? this.clearIdle() : this.endIdle(),
          this.scale(),
          this.emit("resize");
      }
      onFocus(e) {
        this.isTopmost() && this.checkFocus(e);
      }
      onMousemove(e) {
        (this.prevMouseMoveEvent = e),
          !this.isCompact && this.option("idle") && this.resetIdle();
      }
      onVisibilityChange() {
        "visible" === document.visibilityState
          ? this.checkFocus()
          : this.endIdle();
      }
      manageCloseBtn(e) {
        const t = this.optionFor(e, "closeButton") || !1;
        if ("auto" === t) {
          const e = this.plugins.Toolbar;
          if (e && e.state === We.Ready) return;
        }
        if (!t) return;
        if (!e.contentEl || e.closeBtnEl) return;
        const i = this.option("tpl.closeButton");
        if (i) {
          const t = o(this.localize(i));
          (e.closeBtnEl = e.contentEl.appendChild(t)),
            e.el && k(e.el, "has-close-btn");
        }
      }
      manageCaption(e) {
        var t, i;
        const n = "fancybox__caption",
          o = this.container;
        if (!o) return;
        C(o, rt);
        const s = this.isCompact || this.option("commonCaption"),
          r = !s;
        if (
          (this.caption && this.stop(this.caption),
          r && this.caption && (this.caption.remove(), (this.caption = null)),
          s && !this.caption)
        )
          for (const e of (null === (t = this.carousel) || void 0 === t
            ? void 0
            : t.slides) || [])
            e.captionEl &&
              (e.captionEl.remove(),
              (e.captionEl = void 0),
              C(e.el, rt),
              null === (i = e.el) ||
                void 0 === i ||
                i.removeAttribute("aria-labelledby"));
        if ((e || (e = this.getSlide()), !e || (s && !this.isCurrentSlide(e))))
          return;
        const a = e.el;
        let l = this.optionFor(e, "caption", "");
        if (!l)
          return void (
            s &&
            this.caption &&
            this.animate(this.caption, "f-fadeOut", () => {
              this.caption && (this.caption.innerHTML = "");
            })
          );
        let c = null;
        if (r) {
          if (((c = e.captionEl || null), a && !c)) {
            const t = `fancybox__caption_${this.id}_${e.index}`;
            (c = document.createElement("div")),
              k(c, n),
              c.setAttribute("id", t),
              (e.captionEl = a.appendChild(c)),
              k(a, rt),
              a.setAttribute("aria-labelledby", t);
          }
        } else (c = this.caption), c || (c = o.querySelector("." + n)), c || ((c = document.createElement("div")), (c.dataset.fancyboxCaption = ""), k(c, n), (this.footer || o).prepend(c)), k(o, rt), (this.caption = c);
        c &&
          ((c.innerHTML = ""),
          ht(l) || "number" == typeof l
            ? (c.innerHTML = l + "")
            : l instanceof HTMLElement && c.appendChild(l));
      }
      checkFocus(e) {
        this.focus(e);
      }
      focus(e) {
        var t;
        if (this.ignoreFocusChange) return;
        const i = document.activeElement || null,
          n = (null == e ? void 0 : e.target) || null,
          o = this.container,
          s =
            null === (t = this.carousel) || void 0 === t ? void 0 : t.viewport;
        if (!o || !s) return;
        if (!e && i && o.contains(i)) return;
        const r = this.getSlide(),
          a = r && r.state === se.Ready ? r.el : null;
        if (!a || a.contains(i) || o === i) return;
        e && e.cancelable && e.preventDefault(), (this.ignoreFocusChange = !0);
        const l = Array.from(o.querySelectorAll(ee));
        let c = [],
          d = null;
        for (let e of l) {
          const t = !e.offsetParent || !!e.closest('[aria-hidden="true"]'),
            i = a && a.contains(e),
            n = !s.contains(e);
          if (e === o || ((i || n) && !t)) {
            c.push(e);
            const t = e.dataset.origTabindex;
            void 0 !== t && t && (e.tabIndex = parseFloat(t)),
              e.removeAttribute("data-orig-tabindex"),
              (!e.hasAttribute("autoFocus") && d) || (d = e);
          } else {
            const t =
              void 0 === e.dataset.origTabindex
                ? e.getAttribute("tabindex") || ""
                : e.dataset.origTabindex;
            t && (e.dataset.origTabindex = t), (e.tabIndex = -1);
          }
        }
        let u = null;
        e
          ? (!n || c.indexOf(n) < 0) &&
            ((u = d || o),
            c.length &&
              (i === mt
                ? (u = c[0])
                : (this.lastFocus !== o && i !== gt) || (u = c[c.length - 1])))
          : (u = r && "image" === r.type ? o : d || o),
          u && te(u),
          (this.lastFocus = document.activeElement),
          (this.ignoreFocusChange = !1);
      }
      next() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slideNext();
      }
      prev() {
        const e = this.carousel;
        e && e.pages.length > 1 && e.slidePrev();
      }
      jumpTo(...e) {
        this.carousel && this.carousel.slideTo(...e);
      }
      isTopmost() {
        var e;
        return (
          (null === (e = xt.getInstance()) || void 0 === e ? void 0 : e.id) ==
          this.id
        );
      }
      animate(e = null, t = "", i) {
        if (!e || !t) return void (i && i());
        this.stop(e);
        const n = (o) => {
          o.target === e &&
            e.dataset.animationName &&
            (e.removeEventListener("animationend", n),
            delete e.dataset.animationName,
            i && i(),
            C(e, t));
        };
        (e.dataset.animationName = t),
          e.addEventListener("animationend", n),
          k(e, t);
      }
      stop(e) {
        e &&
          e.dispatchEvent(
            new CustomEvent("animationend", {
              bubbles: !1,
              cancelable: !0,
              currentTarget: e,
            })
          );
      }
      setContent(e, t = "", i = !0) {
        if (this.isClosing()) return;
        const n = e.el;
        if (!n) return;
        let s = null;
        if (
          (T(t)
            ? (s = t)
            : ((s = o(t + "")),
              T(s) ||
                ((s = document.createElement("div")), (s.innerHTML = t + ""))),
          ["img", "picture", "iframe", "video", "audio"].includes(
            s.nodeName.toLowerCase()
          ))
        ) {
          const e = document.createElement("div");
          e.appendChild(s), (s = e);
        }
        T(s) && e.filter && !e.error && (s = s.querySelector(e.filter)),
          s && T(s)
            ? (k(s, "fancybox__content"),
              e.id && s.setAttribute("id", e.id),
              ("none" !== s.style.display &&
                "none" !== getComputedStyle(s).getPropertyValue("display")) ||
                (s.style.display =
                  e.display || this.option("defaultDisplay") || "flex"),
              n.classList.add(`has-${e.error ? "error" : e.type || "unknown"}`),
              n.prepend(s),
              (e.contentEl = s),
              i && this.revealContent(e),
              this.manageCloseBtn(e),
              this.manageCaption(e))
            : this.setError(e, "{{ELEMENT_NOT_FOUND}}");
      }
      revealContent(e, t) {
        const i = e.el,
          n = e.contentEl;
        i &&
          n &&
          (this.emit("reveal", e),
          this.hideLoading(e),
          (e.state = se.Opening),
          (t = this.isOpeningSlide(e)
            ? void 0 === t
              ? this.optionFor(e, "showClass")
              : t
            : "f-fadeIn")
            ? this.animate(n, t, () => {
                this.done(e);
              })
            : this.done(e));
      }
      done(e) {
        this.isClosing() ||
          ((e.state = se.Ready),
          this.emit("done", e),
          k(e.el, "is-done"),
          this.isCurrentSlide(e) &&
            this.option("autoFocus") &&
            queueMicrotask(() => {
              var t;
              null === (t = e.panzoom) || void 0 === t || t.updateControls(),
                this.option("autoFocus") && this.focus();
            }),
          this.isOpeningSlide(e) &&
            (C(this.container, st),
            !this.isCompact && this.option("idle") && this.setIdle()));
      }
      isCurrentSlide(e) {
        const t = this.getSlide();
        return !(!e || !t) && t.index === e.index;
      }
      isOpeningSlide(e) {
        var t, i;
        return (
          null ===
            (null === (t = this.carousel) || void 0 === t
              ? void 0
              : t.prevPage) &&
          e &&
          e.index ===
            (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index)
        );
      }
      showLoading(e) {
        e.state = se.Loading;
        const t = e.el;
        t &&
          (k(t, ot),
          this.emit("loading", e),
          e.spinnerEl ||
            setTimeout(() => {
              if (!this.isClosing() && !e.spinnerEl && e.state === se.Loading) {
                let i = o(S);
                k(i, "fancybox-spinner"),
                  (e.spinnerEl = i),
                  t.prepend(i),
                  this.animate(i, "f-fadeIn");
              }
            }, 250));
      }
      hideLoading(e) {
        const t = e.el;
        if (!t) return;
        const i = e.spinnerEl;
        this.isClosing()
          ? null == i || i.remove()
          : (C(t, ot),
            i &&
              this.animate(i, "f-fadeOut", () => {
                i.remove();
              }),
            e.state === se.Loading &&
              (this.emit("loaded", e), (e.state = se.Ready)));
      }
      setError(e, t) {
        if (this.isClosing()) return;
        const i = new Event("error", { bubbles: !0, cancelable: !0 });
        if ((this.emit("error", i, e), i.defaultPrevented)) return;
        (e.error = t), this.hideLoading(e), this.clearContent(e);
        const n = document.createElement("div");
        n.classList.add("fancybox-error"),
          (n.innerHTML = this.localize(t || "<p>{{ERROR}}</p>")),
          this.setContent(e, n);
      }
      clearContent(e) {
        if (void 0 === e.state) return;
        this.emit("clearContent", e),
          e.contentEl && (e.contentEl.remove(), (e.contentEl = void 0));
        const t = e.el;
        t &&
          (C(t, "has-error"),
          C(t, "has-unknown"),
          C(t, `has-${e.type || "unknown"}`)),
          e.closeBtnEl && e.closeBtnEl.remove(),
          (e.closeBtnEl = void 0),
          e.captionEl && e.captionEl.remove(),
          (e.captionEl = void 0),
          e.spinnerEl && e.spinnerEl.remove(),
          (e.spinnerEl = void 0);
      }
      getSlide() {
        var e;
        const t = this.carousel;
        return (
          (null ===
            (e = null == t ? void 0 : t.pages[null == t ? void 0 : t.page]) ||
          void 0 === e
            ? void 0
            : e.slides[0]) || void 0
        );
      }
      close(e, t) {
        if (this.isClosing()) return;
        const i = new Event("shouldClose", { bubbles: !0, cancelable: !0 });
        if ((this.emit("shouldClose", i, e), i.defaultPrevented)) return;
        e && e.cancelable && (e.preventDefault(), e.stopPropagation());
        const n = () => {
          this.proceedClose(e, t);
        };
        this.startedFs && ft && ft.isFullscreen()
          ? Promise.resolve(ft.exit()).then(() => n())
          : n();
      }
      clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), (this.idleTimer = null);
      }
      setIdle(e = !1) {
        const t = () => {
          this.clearIdle(),
            (this.idle = !0),
            k(this.container, "is-idle"),
            this.emit("setIdle");
        };
        if ((this.clearIdle(), !this.isClosing()))
          if (e) t();
          else {
            const e = this.option("idle");
            e && (this.idleTimer = setTimeout(t, e));
          }
      }
      endIdle() {
        this.clearIdle(),
          this.idle &&
            !this.isClosing() &&
            ((this.idle = !1),
            C(this.container, "is-idle"),
            this.emit("endIdle"));
      }
      resetIdle() {
        this.endIdle(), this.setIdle();
      }
      toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
      toggleFullscreen() {
        ft &&
          (ft.isFullscreen()
            ? ft.exit()
            : ft.request().then(() => {
                this.startedFs = !0;
              }));
      }
      isClosing() {
        return [oe.Closing, oe.CustomClosing, oe.Destroy].includes(this.state);
      }
      proceedClose(e, t) {
        var i, n;
        (this.state = oe.Closing), this.clearIdle(), this.detachEvents();
        const o = this.container,
          s = this.carousel,
          r = this.getSlide(),
          a =
            r && this.option("placeFocusBack")
              ? r.triggerEl || this.option("triggerEl")
              : null;
        if (
          (a && (K(a) ? te(a) : a.focus()),
          o &&
            (C(o, st),
            k(o, "is-closing"),
            o.setAttribute(et, "true"),
            this.option("animated") && k(o, it),
            (o.style.pointerEvents = "none")),
          s)
        ) {
          s.clearTransitions(),
            null === (i = s.panzoom) || void 0 === i || i.destroy(),
            null === (n = s.plugins.Navigation) || void 0 === n || n.detach();
          for (const e of s.slides) {
            (e.state = se.Closing), this.hideLoading(e);
            const t = e.contentEl;
            t && this.stop(t);
            const i = null == e ? void 0 : e.panzoom;
            i && (i.stop(), i.detachEvents(), i.detachObserver()),
              this.isCurrentSlide(e) || s.emit("removeSlide", e);
          }
        }
        this.emit("close", e),
          this.state !== oe.CustomClosing
            ? (void 0 === t && r && (t = this.optionFor(r, "hideClass")),
              t && r
                ? (this.animate(r.contentEl, t, () => {
                    s && s.emit("removeSlide", r);
                  }),
                  setTimeout(() => {
                    this.destroy();
                  }, 500))
                : this.destroy())
            : setTimeout(() => {
                this.destroy();
              }, 500);
      }
      destroy() {
        var e;
        if (this.state === oe.Destroy) return;
        (this.state = oe.Destroy),
          null === (e = this.carousel) || void 0 === e || e.destroy();
        const t = this.container;
        t && t.remove(), yt.delete(this.id);
        const i = xt.getInstance();
        i
          ? i.focus()
          : (gt && (gt.remove(), (gt = null)),
            mt && (mt.remove(), (mt = null)),
            C(document.documentElement, Ze),
            (() => {
              if (!J) return;
              const e = document,
                t = e.body;
              t.classList.remove(Ke),
                t.style.setProperty(Qe, ""),
                e.documentElement.style.setProperty(Je, "");
            })(),
            this.emit("destroy"));
      }
      static bind(e, t, i) {
        if (!J) return;
        let n,
          o = "",
          s = {};
        if (
          (void 0 === e
            ? (n = document.body)
            : ht(e)
            ? ((n = document.body),
              (o = e),
              "object" == typeof t && (s = t || {}))
            : ((n = e),
              ht(t) && (o = t),
              "object" == typeof i && (s = i || {})),
          !n || !T(n))
        )
          return;
        o = o || "[data-fancybox]";
        const r = xt.openers.get(n) || new Map();
        r.set(o, s),
          xt.openers.set(n, r),
          1 === r.size && n.addEventListener("click", xt.fromEvent);
      }
      static unbind(e, t) {
        let i,
          n = "";
        if (
          (ht(e) ? ((i = document.body), (n = e)) : ((i = e), ht(t) && (n = t)),
          !i)
        )
          return;
        const o = xt.openers.get(i);
        o && n && o.delete(n),
          (n && o) ||
            (xt.openers.delete(i),
            i.removeEventListener("click", xt.fromEvent));
      }
      static destroy() {
        let e;
        for (; (e = xt.getInstance()); ) e.destroy();
        for (const e of xt.openers.keys())
          e.removeEventListener("click", xt.fromEvent);
        xt.openers = new Map();
      }
      static fromEvent(e) {
        if (e.defaultPrevented) return;
        if (e.button && 0 !== e.button) return;
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        let t = e.composedPath()[0];
        const i = t.closest("[data-fancybox-trigger]");
        if (i) {
          const e = i.dataset.fancyboxTrigger || "",
            n = document.querySelectorAll(`[data-fancybox="${e}"]`),
            o = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
          t = n[o] || t;
        }
        if (!(t && t instanceof Element)) return;
        let n, o, s, r;
        if (
          ([...xt.openers].reverse().find(
            ([e, i]) =>
              !(
                !e.contains(t) ||
                ![...i].reverse().find(([i, a]) => {
                  let l = t.closest(i);
                  return !!l && ((n = e), (o = i), (s = l), (r = a), !0);
                })
              )
          ),
          !n || !o || !s)
        )
          return;
        (r = r || {}), e.preventDefault(), (t = s);
        let a = [],
          l = p({}, ne, r);
        (l.event = e), (l.triggerEl = t), (l.delegate = i);
        const c = l.groupAll,
          d = l.groupAttr,
          u = d && t ? t.getAttribute(`${d}`) : "";
        if (
          ((!t || u || c) && (a = [].slice.call(n.querySelectorAll(o))),
          t &&
            !c &&
            (a = u ? a.filter((e) => e.getAttribute(`${d}`) === u) : [t]),
          !a.length)
        )
          return;
        const h = xt.getInstance();
        return h && h.options.triggerEl && a.indexOf(h.options.triggerEl) > -1
          ? void 0
          : (t && (l.startIndex = a.indexOf(t)), xt.fromNodes(a, l));
      }
      static fromSelector(e, t, i) {
        let n = null,
          o = "",
          s = {};
        if (
          (ht(e)
            ? ((n = document.body),
              (o = e),
              "object" == typeof t && (s = t || {}))
            : e instanceof HTMLElement &&
              ht(t) &&
              ((n = e), (o = t), "object" == typeof i && (s = i || {})),
          !n || !o)
        )
          return !1;
        const r = xt.openers.get(n);
        return (
          !!r &&
          ((s = p({}, r.get(o) || {}, s)),
          !!s && xt.fromNodes(Array.from(n.querySelectorAll(o)), s))
        );
      }
      static fromNodes(e, t) {
        t = p({}, ne, t || {});
        const i = [];
        for (const n of e) {
          const e = n.dataset || {},
            o =
              e.src ||
              n.getAttribute(dt) ||
              n.getAttribute("currentSrc") ||
              n.getAttribute(ut) ||
              void 0;
          let s;
          const r = t.delegate;
          let a;
          r &&
            i.length === t.startIndex &&
            (s =
              r instanceof HTMLImageElement
                ? r
                : r.querySelector("img:not([aria-hidden])")),
            s ||
              (s =
                n instanceof HTMLImageElement
                  ? n
                  : n.querySelector("img:not([aria-hidden])")),
            s &&
              ((a = s.currentSrc || s.src || void 0),
              !a &&
                s.dataset &&
                (a = s.dataset.lazySrc || s.dataset.src || void 0));
          const l = {
            src: o,
            triggerEl: n,
            thumbEl: s,
            thumbElSrc: a,
            thumbSrc: a,
          };
          for (const t in e) {
            let i = e[t] + "";
            (i = "false" !== i && ("true" === i || i)), (l[t] = i);
          }
          i.push(l);
        }
        return new xt(i, t);
      }
      static getInstance(e) {
        return e
          ? yt.get(e)
          : Array.from(yt.values())
              .reverse()
              .find((e) => !e.isClosing() && e) || null;
      }
      static getSlide() {
        var e;
        return (
          (null === (e = xt.getInstance()) || void 0 === e
            ? void 0
            : e.getSlide()) || null
        );
      }
      static show(e = [], t = {}) {
        return new xt(e, t);
      }
      static next() {
        const e = xt.getInstance();
        e && e.next();
      }
      static prev() {
        const e = xt.getInstance();
        e && e.prev();
      }
      static close(e = !0, ...t) {
        if (e) for (const e of yt.values()) e.close(...t);
        else {
          const e = xt.getInstance();
          e && e.close(...t);
        }
      }
    }
    Object.defineProperty(xt, "version", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: "5.0.33",
    }),
      Object.defineProperty(xt, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ne,
      }),
      Object.defineProperty(xt, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ge,
      }),
      Object.defineProperty(xt, "openers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map(),
      }),
      (e.Carousel = Z),
      (e.Fancybox = xt),
      (e.Panzoom = $);
  }),
  (function (e) {
    "function" == typeof define && define.amd
      ? define([], e)
      : "undefined" != typeof module && null !== module && module.exports
      ? (module.exports = e)
      : e();
  })(function () {
    var e = Object.assign || (window.jQuery && jQuery.extend),
      t =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (e, t) {
          return window.setTimeout(function () {
            e();
          }, 25);
        };
    !(function () {
      if ("function" == typeof window.CustomEvent) return !1;
      function e(e, t) {
        t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
      }
      (e.prototype = window.Event.prototype), (window.CustomEvent = e);
    })();
    var i = { textarea: !0, input: !0, select: !0, button: !0 },
      n = "mousemove",
      o = "mouseup dragstart",
      s = "mouseup",
      r = "touchmove",
      a = "touchend",
      l = "touchend",
      c = /\s+/,
      d = { bubbles: !0, cancelable: !0 },
      u = "function" == typeof Symbol ? Symbol("events") : {};
    function h(e) {
      return e[u] || (e[u] = {});
    }
    function p(e, t, i, n, o) {
      t = t.split(c);
      var s,
        r = h(e),
        a = t.length;
      function l(e) {
        i(e, n);
      }
      for (; a--; )
        (r[(s = t[a])] || (r[s] = [])).push([i, l]), e.addEventListener(s, l);
    }
    function f(e, t, i, n) {
      t = t.split(c);
      var o,
        s,
        r,
        a = h(e),
        l = t.length;
      if (a)
        for (; l--; )
          if ((s = a[(o = t[l])]))
            for (r = s.length; r--; )
              s[r][0] === i &&
                (e.removeEventListener(o, s[r][1]), s.splice(r, 1));
    }
    function g(t, i, n) {
      var o = (function (e) {
        return new CustomEvent(e, d);
      })(i);
      n && e(o, n), t.dispatchEvent(o);
    }
    function m(e) {
      var i = e,
        n = !1,
        o = !1;
      function s(e) {
        n ? (i(), t(s), (o = !0), (n = !1)) : (o = !1);
      }
      (this.kick = function (e) {
        (n = !0), o || s();
      }),
        (this.end = function (e) {
          var t = i;
          e &&
            (o
              ? ((i = n
                  ? function () {
                      t(), e();
                    }
                  : e),
                (n = !0))
              : e());
        });
    }
    function v() {}
    function b(e) {
      e.preventDefault();
    }
    function y(e, t) {
      var i, n;
      if (e.identifiedTouch) return e.identifiedTouch(t);
      for (i = -1, n = e.length; ++i < n; )
        if (e[i].identifier === t) return e[i];
    }
    function w(e, t) {
      var i = y(e.changedTouches, t.identifier);
      if (i && (i.pageX !== t.pageX || i.pageY !== t.pageY)) return i;
    }
    function x(e, t) {
      k(e, t, e, T);
    }
    function S(e, t) {
      T();
    }
    function T() {
      f(document, n, x), f(document, o, S);
    }
    function C(e) {
      f(document, r, e.touchmove), f(document, a, e.touchend);
    }
    function k(e, t, i, n) {
      var o = i.pageX - t.pageX,
        s = i.pageY - t.pageY;
      o * o + s * s < 64 ||
        (function (e, t, i, n, o, s) {
          var r = e.targetTouches,
            a = e.timeStamp - t.timeStamp,
            l = {
              altKey: e.altKey,
              ctrlKey: e.ctrlKey,
              shiftKey: e.shiftKey,
              startX: t.pageX,
              startY: t.pageY,
              distX: n,
              distY: o,
              deltaX: n,
              deltaY: o,
              pageX: i.pageX,
              pageY: i.pageY,
              velocityX: n / a,
              velocityY: o / a,
              identifier: t.identifier,
              targetTouches: r,
              finger: r ? r.length : 1,
              enableMove: function () {
                (this.moveEnabled = !0),
                  (this.enableMove = v),
                  e.preventDefault();
              },
            };
          g(t.target, "movestart", l), s(t);
        })(e, t, i, o, s, n);
    }
    function E(e, t) {
      var i = t.timer;
      (t.touch = e), (t.timeStamp = e.timeStamp), i.kick();
    }
    function P(e, t) {
      var i = t.target,
        o = t.event,
        r = t.timer;
      f(document, n, E),
        f(document, s, P),
        A(i, o, r, function () {
          setTimeout(function () {
            f(i, "click", b);
          }, 0);
        });
    }
    function M(e, t) {
      var i = t.target,
        n = t.event,
        o = t.timer;
      y(e.changedTouches, n.identifier) &&
        (!(function (e) {
          f(document, r, e.activeTouchmove), f(document, l, e.activeTouchend);
        })(t),
        A(i, n, o));
    }
    function A(e, t, i, n) {
      i.end(function () {
        return g(e, "moveend", t), n && n();
      });
    }
    if (
      (p(document, "mousedown", function (e) {
        (function (e) {
          return 1 === e.which && !e.ctrlKey && !e.altKey;
        })(e) &&
          ((function (e) {
            return !!i[e.target.tagName.toLowerCase()];
          })(e) ||
            (p(document, n, x, e), p(document, o, S, e)));
      }),
      p(document, "touchstart", function (e) {
        if (!i[e.target.tagName.toLowerCase()]) {
          var t = e.changedTouches[0],
            n = {
              target: t.target,
              pageX: t.pageX,
              pageY: t.pageY,
              identifier: t.identifier,
              touchmove: function (e, t) {
                !(function (e, t) {
                  var i = w(e, t);
                  if (!i) return;
                  k(e, t, i, C);
                })(e, t);
              },
              touchend: function (e, t) {
                !(function (e, t) {
                  if (!y(e.changedTouches, t.identifier)) return;
                  C(t);
                })(e, t);
              },
            };
          p(document, r, n.touchmove, n), p(document, a, n.touchend, n);
        }
      }),
      p(document, "movestart", function (e) {
        if (!e.defaultPrevented && e.moveEnabled) {
          var t = {
              startX: e.startX,
              startY: e.startY,
              pageX: e.pageX,
              pageY: e.pageY,
              distX: e.distX,
              distY: e.distY,
              deltaX: e.deltaX,
              deltaY: e.deltaY,
              velocityX: e.velocityX,
              velocityY: e.velocityY,
              identifier: e.identifier,
              targetTouches: e.targetTouches,
              finger: e.finger,
            },
            i = {
              target: e.target,
              event: t,
              timer: new m(function (e) {
                (function (e, t, i) {
                  var n = i - e.timeStamp;
                  (e.distX = t.pageX - e.startX),
                    (e.distY = t.pageY - e.startY),
                    (e.deltaX = t.pageX - e.pageX),
                    (e.deltaY = t.pageY - e.pageY),
                    (e.velocityX = 0.3 * e.velocityX + (0.7 * e.deltaX) / n),
                    (e.velocityY = 0.3 * e.velocityY + (0.7 * e.deltaY) / n),
                    (e.pageX = t.pageX),
                    (e.pageY = t.pageY);
                })(t, i.touch, i.timeStamp),
                  g(i.target, "move", t);
              }),
              touch: void 0,
              timeStamp: e.timeStamp,
            };
          void 0 === e.identifier
            ? (p(e.target, "click", b),
              p(document, n, E, i),
              p(document, s, P, i))
            : ((i.activeTouchmove = function (e, t) {
                !(function (e, t) {
                  var i = t.event,
                    n = t.timer,
                    o = w(e, i);
                  o &&
                    (e.preventDefault(),
                    (i.targetTouches = e.targetTouches),
                    (t.touch = o),
                    (t.timeStamp = e.timeStamp),
                    n.kick());
                })(e, t);
              }),
              (i.activeTouchend = function (e, t) {
                M(e, t);
              }),
              p(document, r, i.activeTouchmove, i),
              p(document, l, i.activeTouchend, i));
        }
      }),
      window.jQuery)
    ) {
      var O =
        "startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY".split(
          " "
        );
      (jQuery.event.special.movestart = {
        setup: function () {
          return p(this, "movestart", L), !1;
        },
        teardown: function () {
          return f(this, "movestart", L), !1;
        },
        add: j,
      }),
        (jQuery.event.special.move = {
          setup: function () {
            return p(this, "movestart", F), !1;
          },
          teardown: function () {
            return f(this, "movestart", F), !1;
          },
          add: j,
        }),
        (jQuery.event.special.moveend = {
          setup: function () {
            return p(this, "movestart", $), !1;
          },
          teardown: function () {
            return f(this, "movestart", $), !1;
          },
          add: j,
        });
    }
    function L(e) {
      e.enableMove();
    }
    function F(e) {
      e.enableMove();
    }
    function $(e) {
      e.enableMove();
    }
    function j(e) {
      var t = e.handler;
      e.handler = function (e) {
        for (var i, n = O.length; n--; ) e[(i = O[n])] = e.originalEvent[i];
        t.apply(this, arguments);
      };
    }
  }),
  (function (e) {
    e.fn.twentytwenty = function (t) {
      t = e.extend(
        {
          default_offset_pct: 0.5,
          orientation: "horizontal",
          before_label: "Before",
          after_label: "After",
          no_overlay: !1,
          move_slider_on_hover: !1,
          move_with_handle_only: !0,
          click_to_move: !1,
        },
        t
      );
      return this.each(function () {
        var i = t.default_offset_pct,
          n = e(this),
          o = t.orientation,
          s = "vertical" === o ? "down" : "left",
          r = "vertical" === o ? "up" : "right";
        if (
          (n.wrap(
            "<div class='twentytwenty-wrapper twentytwenty-" + o + "'></div>"
          ),
          !t.no_overlay)
        ) {
          n.append("<div class='twentytwenty-overlay'></div>");
          var a = n.find(".twentytwenty-overlay");
          a.append(
            "<div class='twentytwenty-before-label' data-content='" +
              t.before_label +
              "'></div>"
          ),
            a.append(
              "<div class='twentytwenty-after-label' data-content='" +
                t.after_label +
                "'></div>"
            );
        }
        var l = n.find("img:first"),
          c = n.find("img:last");
        n.append("<div class='twentytwenty-handle'></div>");
        var d = n.find(".twentytwenty-handle");
        d.append("<span class='twentytwenty-" + s + "-arrow'></span>"),
          d.append("<span class='twentytwenty-" + r + "-arrow'></span>"),
          n.addClass("twentytwenty-container"),
          l.addClass("twentytwenty-before"),
          c.addClass("twentytwenty-after");
        var u = function (e) {
            var t,
              i,
              s,
              r =
                ((t = e),
                (i = l.width()),
                (s = l.height()),
                {
                  w: i + "px",
                  h: s + "px",
                  cw: t * i + "px",
                  ch: t * s + "px",
                });
            d.css(
              "vertical" === o ? "top" : "left",
              "vertical" === o ? r.ch : r.cw
            ),
              (function (e) {
                "vertical" === o
                  ? (l.css("clip", "rect(0," + e.w + "," + e.ch + ",0)"),
                    c.css(
                      "clip",
                      "rect(" + e.ch + "," + e.w + "," + e.h + ",0)"
                    ))
                  : (l.css("clip", "rect(0," + e.cw + "," + e.h + ",0)"),
                    c.css(
                      "clip",
                      "rect(0," + e.w + "," + e.h + "," + e.cw + ")"
                    )),
                  n.css("height", e.h);
              })(r);
          },
          h = function (e, t) {
            var i, n, s;
            return (
              (i = "vertical" === o ? (t - f) / m : (e - p) / g),
              (n = 0),
              (s = 1),
              Math.max(n, Math.min(s, i))
            );
          };
        e(window).on("resize.twentytwenty", function (e) {
          u(i);
        });
        var p = 0,
          f = 0,
          g = 0,
          m = 0,
          v = function (e) {
            ((((e.distX > e.distY && e.distX < -e.distY) ||
              (e.distX < e.distY && e.distX > -e.distY)) &&
              "vertical" !== o) ||
              (((e.distX < e.distY && e.distX < -e.distY) ||
                (e.distX > e.distY && e.distX > -e.distY)) &&
                "vertical" === o)) &&
              e.preventDefault(),
              n.addClass("active"),
              (p = n.offset().left),
              (f = n.offset().top),
              (g = l.width()),
              (m = l.height());
          },
          b = function (e) {
            n.hasClass("active") && ((i = h(e.pageX, e.pageY)), u(i));
          },
          y = function () {
            n.removeClass("active");
          },
          w = t.move_with_handle_only ? d : n;
        w.on("movestart", v),
          w.on("move", b),
          w.on("moveend", y),
          t.move_slider_on_hover &&
            (n.on("mouseenter", v),
            n.on("mousemove", b),
            n.on("mouseleave", y)),
          d.on("touchmove", function (e) {
            e.preventDefault();
          }),
          n.find("img").on("mousedown", function (e) {
            e.preventDefault();
          }),
          t.click_to_move &&
            n.on("click", function (e) {
              (p = n.offset().left),
                (f = n.offset().top),
                (g = l.width()),
                (m = l.height()),
                (i = h(e.pageX, e.pageY)),
                u(i);
            }),
          e(window).trigger("resize.twentytwenty");
      });
    };
  })(jQuery);
var __defProp = Object.defineProperty,
  __defNormalProp = (e, t, i) =>
    t in e
      ? __defProp(e, t, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: i,
        })
      : (e[t] = i),
  __publicField = (e, t, i) => (
    __defNormalProp(e, "symbol" != typeof t ? t + "" : t, i), i
  );
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).JustValidate = t());
})(this, function () {
  "use strict";
  const e =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    t = /^-?[0-9]\d*$/,
    i = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    n = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    o = (e) => "string" != typeof e || "" === e;
  var s = ((e) => (
      (e.Required = "required"),
      (e.Email = "email"),
      (e.MinLength = "minLength"),
      (e.MaxLength = "maxLength"),
      (e.Password = "password"),
      (e.Number = "number"),
      (e.Integer = "integer"),
      (e.MaxNumber = "maxNumber"),
      (e.MinNumber = "minNumber"),
      (e.StrongPassword = "strongPassword"),
      (e.CustomRegexp = "customRegexp"),
      (e.MinFilesCount = "minFilesCount"),
      (e.MaxFilesCount = "maxFilesCount"),
      (e.Files = "files"),
      e
    ))(s || {}),
    r = ((e) => ((e.Required = "required"), e))(r || {}),
    a = ((e) => ((e.Label = "label"), (e.LabelArrow = "labelArrow"), e))(
      a || {}
    );
  const l = [
      { key: s.Required, dict: { en: "The field is required" } },
      { key: s.Email, dict: { en: "Email has invalid format" } },
      {
        key: s.MaxLength,
        dict: { en: "The field must contain a maximum of :value characters" },
      },
      {
        key: s.MinLength,
        dict: { en: "The field must contain a minimum of :value characters" },
      },
      {
        key: s.Password,
        dict: {
          en: "Password must contain minimum eight characters, at least one letter and one number",
        },
      },
      {
        key: s.StrongPassword,
        dict: {
          en: "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
        },
      },
      { key: s.Number, dict: { en: "Value should be a number" } },
      {
        key: s.MaxNumber,
        dict: { en: "Number should be less or equal than :value" },
      },
      {
        key: s.MinNumber,
        dict: { en: "Number should be more or equal than :value" },
      },
      {
        key: s.MinFilesCount,
        dict: { en: "Files count should be more or equal than :value" },
      },
      {
        key: s.MaxFilesCount,
        dict: { en: "Files count should be less or equal than :value" },
      },
      {
        key: s.Files,
        dict: {
          en: "Uploaded files have one or several invalid properties (extension/size/type etc).",
        },
      },
    ],
    c = (e) =>
      "object" == typeof e &&
      null !== e &&
      "then" in e &&
      "function" == typeof e.then,
    d = (e) =>
      Array.isArray(e)
        ? e.filter((e) => e.length > 0)
        : "string" == typeof e && e.trim()
        ? [...e.split(" ").filter((e) => e.length > 0)]
        : [],
    u = (e) => e instanceof Element || e instanceof HTMLDocument,
    h = {
      errorFieldStyle: { color: "#b81111", border: "1px solid #B81111" },
      errorFieldCssClass: "just-validate-error-field",
      successFieldCssClass: "just-validate-success-field",
      errorLabelStyle: { color: "#b81111" },
      errorLabelCssClass: "just-validate-error-label",
      successLabelCssClass: "just-validate-success-label",
      focusInvalidField: !0,
      lockForm: !0,
      testingMode: !1,
      validateBeforeSubmitting: !1,
      submitFormAutomatically: !1,
    };
  return class {
    constructor(e, t, i) {
      __publicField(this, "form", null),
        __publicField(this, "fields", {}),
        __publicField(this, "groupFields", {}),
        __publicField(this, "errors", {}),
        __publicField(this, "isValid", !1),
        __publicField(this, "isSubmitted", !1),
        __publicField(this, "globalConfig", h),
        __publicField(this, "errorLabels", {}),
        __publicField(this, "successLabels", {}),
        __publicField(this, "eventListeners", []),
        __publicField(this, "dictLocale", l),
        __publicField(this, "currentLocale", "en"),
        __publicField(this, "customStyleTags", {}),
        __publicField(this, "onSuccessCallback"),
        __publicField(this, "onFailCallback"),
        __publicField(this, "onValidateCallback"),
        __publicField(this, "tooltips", []),
        __publicField(this, "lastScrollPosition"),
        __publicField(this, "isScrollTick"),
        __publicField(this, "fieldIds", new Map()),
        __publicField(this, "getKeyByFieldSelector", (e) =>
          this.fieldIds.get(e)
        ),
        __publicField(this, "getFieldSelectorByKey", (e) => {
          for (const [t, i] of this.fieldIds) if (e === i) return t;
        }),
        __publicField(this, "getCompatibleFields", () => {
          const e = {};
          return (
            Object.keys(this.fields).forEach((t) => {
              let i = t;
              const n = this.getFieldSelectorByKey(t);
              "string" == typeof n && (i = n), (e[i] = { ...this.fields[t] });
            }),
            e
          );
        }),
        __publicField(this, "setKeyByFieldSelector", (e) => {
          if (this.fieldIds.has(e)) return this.fieldIds.get(e);
          const t = String(this.fieldIds.size + 1);
          return this.fieldIds.set(e, t), t;
        }),
        __publicField(this, "refreshAllTooltips", () => {
          this.tooltips.forEach((e) => {
            e.refresh();
          });
        }),
        __publicField(this, "handleDocumentScroll", () => {
          (this.lastScrollPosition = window.scrollY),
            this.isScrollTick ||
              (window.requestAnimationFrame(() => {
                this.refreshAllTooltips(), (this.isScrollTick = !1);
              }),
              (this.isScrollTick = !0));
        }),
        __publicField(this, "formSubmitHandler", (e) => {
          e.preventDefault(), (this.isSubmitted = !0), this.validateHandler(e);
        }),
        __publicField(this, "handleFieldChange", (e) => {
          let t;
          for (const i in this.fields)
            if (this.fields[i].elem === e) {
              t = i;
              break;
            }
          t && ((this.fields[t].touched = !0), this.validateField(t, !0));
        }),
        __publicField(this, "handleGroupChange", (e) => {
          let t;
          for (const i in this.groupFields)
            if (this.groupFields[i].elems.find((t) => t === e)) {
              t = i;
              break;
            }
          t && ((this.groupFields[t].touched = !0), this.validateGroup(t, !0));
        }),
        __publicField(this, "handlerChange", (e) => {
          e.target &&
            (this.handleFieldChange(e.target),
            this.handleGroupChange(e.target),
            this.renderErrors());
        }),
        this.initialize(e, t, i);
    }
    initialize(e, t, i) {
      if (
        ((this.form = null),
        (this.errors = {}),
        (this.isValid = !1),
        (this.isSubmitted = !1),
        (this.globalConfig = h),
        (this.errorLabels = {}),
        (this.successLabels = {}),
        (this.eventListeners = []),
        (this.customStyleTags = {}),
        (this.tooltips = []),
        (this.currentLocale = "en"),
        "string" == typeof e)
      ) {
        const t = document.querySelector(e);
        if (!t)
          throw Error(
            `Form with ${e} selector not found! Please check the form selector`
          );
        this.setForm(t);
      } else {
        if (!(e instanceof HTMLFormElement))
          throw Error(
            "Form selector is not valid. Please specify a string selector or a DOM element."
          );
        this.setForm(e);
      }
      if (
        ((this.globalConfig = { ...h, ...t }),
        i && (this.dictLocale = [...i, ...l]),
        this.isTooltip())
      ) {
        const e = document.createElement("style");
        (e.textContent =
          ".just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}"),
          (this.customStyleTags[a.Label] = document.head.appendChild(e)),
          this.addListener("scroll", document, this.handleDocumentScroll);
      }
    }
    getLocalisedString(e, t, i) {
      var n;
      const o = null != i ? i : e;
      let r =
        null == (n = this.dictLocale.find((e) => e.key === o))
          ? void 0
          : n.dict[this.currentLocale];
      if ((r || (i && (r = i)), r && void 0 !== t))
        switch (e) {
          case s.MaxLength:
          case s.MinLength:
          case s.MaxNumber:
          case s.MinNumber:
          case s.MinFilesCount:
          case s.MaxFilesCount:
            r = r.replace(":value", String(t));
        }
      return r || i || "Value is incorrect";
    }
    getFieldErrorMessage(e, t) {
      const i =
        "function" == typeof e.errorMessage
          ? e.errorMessage(this.getElemValue(t), this.fields)
          : e.errorMessage;
      return this.getLocalisedString(e.rule, e.value, i);
    }
    getFieldSuccessMessage(e, t) {
      const i =
        "function" == typeof e ? e(this.getElemValue(t), this.fields) : e;
      return this.getLocalisedString(void 0, void 0, i);
    }
    getGroupErrorMessage(e) {
      return this.getLocalisedString(e.rule, void 0, e.errorMessage);
    }
    getGroupSuccessMessage(e) {
      if (e.successMessage)
        return this.getLocalisedString(void 0, void 0, e.successMessage);
    }
    setFieldInvalid(e, t) {
      (this.fields[e].isValid = !1),
        (this.fields[e].errorMessage = this.getFieldErrorMessage(
          t,
          this.fields[e].elem
        ));
    }
    setFieldValid(e, t) {
      (this.fields[e].isValid = !0),
        void 0 !== t &&
          (this.fields[e].successMessage = this.getFieldSuccessMessage(
            t,
            this.fields[e].elem
          ));
    }
    setGroupInvalid(e, t) {
      (this.groupFields[e].isValid = !1),
        (this.groupFields[e].errorMessage = this.getGroupErrorMessage(t));
    }
    setGroupValid(e, t) {
      (this.groupFields[e].isValid = !0),
        (this.groupFields[e].successMessage = this.getGroupSuccessMessage(t));
    }
    getElemValue(e) {
      switch (e.type) {
        case "checkbox":
          return e.checked;
        case "file":
          return e.files;
        default:
          return e.value;
      }
    }
    validateGroupRule(e, t, i) {
      i.rule === r.Required &&
        (t.every((e) => !e.checked)
          ? this.setGroupInvalid(e, i)
          : this.setGroupValid(e, i));
    }
    validateFieldRule(r, a, l, d = !1) {
      const u = l.value,
        h = this.getElemValue(a);
      var p;
      if (l.plugin)
        l.plugin(h, this.getCompatibleFields()) || this.setFieldInvalid(r, l);
      else
        switch (l.rule) {
          case s.Required:
            ((e) => {
              let t = e;
              return "string" == typeof e && (t = e.trim()), !t;
            })(h) && this.setFieldInvalid(r, l);
            break;
          case s.Email:
            if (o(h)) break;
            (p = h), e.test(p) || this.setFieldInvalid(r, l);
            break;
          case s.MaxLength:
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (o(h)) break;
            ((e, t) => e.length > t)(h, u) && this.setFieldInvalid(r, l);
            break;
          case s.MinLength:
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (o(h)) break;
            ((e, t) => e.length < t)(h, u) && this.setFieldInvalid(r, l);
            break;
          case s.Password:
            if (o(h)) break;
            ((e) => i.test(e))(h) || this.setFieldInvalid(r, l);
            break;
          case s.StrongPassword:
            if (o(h)) break;
            ((e) => n.test(e))(h) || this.setFieldInvalid(r, l);
            break;
          case s.Number:
            if (o(h)) break;
            ((e) =>
              "string" == typeof e && !isNaN(+e) && !isNaN(parseFloat(e)))(h) ||
              this.setFieldInvalid(r, l);
            break;
          case s.Integer:
            if (o(h)) break;
            ((e) => t.test(e))(h) || this.setFieldInvalid(r, l);
            break;
          case s.MaxNumber: {
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (o(h)) break;
            const e = +h;
            (Number.isNaN(e) || ((e, t) => e > t)(e, u)) &&
              this.setFieldInvalid(r, l);
            break;
          }
          case s.MinNumber: {
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (o(h)) break;
            const e = +h;
            (Number.isNaN(e) || ((e, t) => e < t)(e, u)) &&
              this.setFieldInvalid(r, l);
            break;
          }
          case s.CustomRegexp: {
            if (void 0 === u)
              return (
                console.error(
                  `Value for ${l.rule} rule for [${r}] field is not defined. This field will be always invalid.`
                ),
                void this.setFieldInvalid(r, l)
              );
            let e;
            try {
              e = new RegExp(u);
            } catch (e) {
              console.error(
                `Value for ${l.rule} rule for [${r}] should be a valid regexp. This field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            const t = String(h);
            "" === t || e.test(t) || this.setFieldInvalid(r, l);
            break;
          }
          case s.MinFilesCount:
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. This field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (
              Number.isFinite(null == h ? void 0 : h.length) &&
              h.length < u
            ) {
              this.setFieldInvalid(r, l);
              break;
            }
            break;
          case s.MaxFilesCount:
            if (void 0 === u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field is not defined. This field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if ("number" != typeof u) {
              console.error(
                `Value for ${l.rule} rule for [${r}] field should be a number. The field will be always invalid.`
              ),
                this.setFieldInvalid(r, l);
              break;
            }
            if (
              Number.isFinite(null == h ? void 0 : h.length) &&
              h.length > u
            ) {
              this.setFieldInvalid(r, l);
              break;
            }
            break;
          case s.Files: {
            if (void 0 === u)
              return (
                console.error(
                  `Value for ${l.rule} rule for [${r}] field is not defined. This field will be always invalid.`
                ),
                void this.setFieldInvalid(r, l)
              );
            if ("object" != typeof u)
              return (
                console.error(
                  `Value for ${l.rule} rule for [${r}] field should be an object. This field will be always invalid.`
                ),
                void this.setFieldInvalid(r, l)
              );
            const e = u.files;
            if ("object" != typeof e)
              return (
                console.error(
                  `Value for ${l.rule} rule for [${r}] field should be an object with files array. This field will be always invalid.`
                ),
                void this.setFieldInvalid(r, l)
              );
            const t = (e, t) => {
              const i = Number.isFinite(t.minSize) && e.size < t.minSize,
                n = Number.isFinite(t.maxSize) && e.size > t.maxSize,
                o = Array.isArray(t.names) && !t.names.includes(e.name),
                s =
                  Array.isArray(t.extensions) &&
                  !t.extensions.includes(
                    e.name.split(".")[e.name.split(".").length - 1]
                  ),
                r = Array.isArray(t.types) && !t.types.includes(e.type);
              return i || n || o || s || r;
            };
            if ("object" == typeof h && null !== h)
              for (let i = 0, n = h.length; i < n; ++i) {
                const n = h.item(i);
                if (!n) {
                  this.setFieldInvalid(r, l);
                  break;
                }
                if (t(n, e)) {
                  this.setFieldInvalid(r, l);
                  break;
                }
              }
            break;
          }
          default: {
            if ("function" != typeof l.validator)
              return (
                console.error(
                  `Validator for custom rule for [${r}] field should be a function. This field will be always invalid.`
                ),
                void this.setFieldInvalid(r, l)
              );
            const e = l.validator(h, this.getCompatibleFields());
            if (
              ("boolean" != typeof e &&
                "function" != typeof e &&
                console.error(
                  `Validator return value for [${r}] field should be boolean or function. It will be cast to boolean.`
                ),
              "function" == typeof e)
            ) {
              if (!d) {
                this.fields[r].asyncCheckPending = !1;
                const t = e();
                return c(t)
                  ? t
                      .then((e) => {
                        e || this.setFieldInvalid(r, l);
                      })
                      .catch(() => {
                        this.setFieldInvalid(r, l);
                      })
                  : (console.error(
                      `Validator function for custom rule for [${r}] field should return a Promise. This field will be always invalid.`
                    ),
                    void this.setFieldInvalid(r, l));
              }
              this.fields[r].asyncCheckPending = !0;
            }
            e || this.setFieldInvalid(r, l);
          }
        }
    }
    isFormValid() {
      let e = !0;
      for (let t = 0, i = Object.values(this.fields).length; t < i; ++t) {
        const i = Object.values(this.fields)[t];
        if (void 0 === i.isValid) {
          e = void 0;
          break;
        }
        if (!1 === i.isValid) {
          e = !1;
          break;
        }
      }
      for (let t = 0, i = Object.values(this.groupFields).length; t < i; ++t) {
        const i = Object.values(this.groupFields)[t];
        if (void 0 === i.isValid) {
          e = void 0;
          break;
        }
        if (!1 === i.isValid) {
          e = !1;
          break;
        }
      }
      return e;
    }
    validateField(e, t = !1) {
      var i;
      const n = this.fields[e];
      n.isValid = !0;
      const o = [];
      return (
        [...n.rules].reverse().forEach((i) => {
          const s = this.validateFieldRule(e, n.elem, i, t);
          c(s) && o.push(s);
        }),
        n.isValid &&
          this.setFieldValid(
            e,
            null == (i = n.config) ? void 0 : i.successMessage
          ),
        Promise.allSettled(o).finally(() => {
          var e;
          t &&
            (null == (e = this.onValidateCallback) ||
              e.call(this, {
                isValid: this.isFormValid(),
                isSubmitted: this.isSubmitted,
                fields: this.getCompatibleFields(),
                groups: { ...this.groupFields },
              }));
        })
      );
    }
    revalidateField(e) {
      if ("string" != typeof e && !u(e))
        throw Error(
          "Field selector is not valid. Please specify a string selector or a valid DOM element."
        );
      const t = this.getKeyByFieldSelector(e);
      return t && this.fields[t]
        ? new Promise((e) => {
            this.validateField(t, !0).finally(() => {
              this.clearFieldStyle(t),
                this.clearFieldLabel(t),
                this.renderFieldError(t, !0),
                e(!!this.fields[t].isValid);
            });
          })
        : (console.error("Field not found. Check the field selector."),
          Promise.reject());
    }
    revalidateGroup(e) {
      if ("string" != typeof e && !u(e))
        throw Error(
          "Group selector is not valid. Please specify a string selector or a valid DOM element."
        );
      const t = this.getKeyByFieldSelector(e);
      return t && this.groupFields[t]
        ? new Promise((e) => {
            this.validateGroup(t).finally(() => {
              this.clearFieldLabel(t),
                this.renderGroupError(t, !0),
                e(!!this.groupFields[t].isValid);
            });
          })
        : (console.error("Group not found. Check the group selector."),
          Promise.reject());
    }
    validateGroup(e, t = !1) {
      const i = this.groupFields[e],
        n = [];
      return (
        [...i.rules].reverse().forEach((t) => {
          const o = this.validateGroupRule(e, i.elems, t);
          c(o) && n.push(o);
        }),
        Promise.allSettled(n).finally(() => {
          var e;
          t &&
            (null == (e = this.onValidateCallback) ||
              e.call(this, {
                isValid: this.isFormValid(),
                isSubmitted: this.isSubmitted,
                fields: this.getCompatibleFields(),
                groups: { ...this.groupFields },
              }));
        })
      );
    }
    focusInvalidField() {
      for (const e in this.fields) {
        const t = this.fields[e];
        if (!t.isValid) {
          setTimeout(() => t.elem.focus(), 0);
          break;
        }
      }
    }
    afterSubmitValidation(e = !1) {
      this.renderErrors(e),
        this.globalConfig.focusInvalidField && this.focusInvalidField();
    }
    validate(e = !1) {
      return new Promise((t) => {
        const i = [];
        Object.keys(this.fields).forEach((e) => {
          const t = this.validateField(e);
          c(t) && i.push(t);
        }),
          Object.keys(this.groupFields).forEach((e) => {
            const t = this.validateGroup(e);
            c(t) && i.push(t);
          }),
          Promise.allSettled(i).then(() => {
            var n;
            this.afterSubmitValidation(e),
              null == (n = this.onValidateCallback) ||
                n.call(this, {
                  isValid: this.isFormValid(),
                  isSubmitted: this.isSubmitted,
                  fields: this.getCompatibleFields(),
                  groups: { ...this.groupFields },
                }),
              t(!!i.length);
          });
      });
    }
    revalidate() {
      return new Promise((e) => {
        this.validateHandler(void 0, !0).finally(() => {
          this.globalConfig.focusInvalidField && this.focusInvalidField(),
            e(this.isValid);
        });
      });
    }
    validateHandler(e, t = !1) {
      return (
        this.globalConfig.lockForm && this.lockForm(),
        this.validate(t).finally(() => {
          var t, i, n;
          this.globalConfig.lockForm && this.unlockForm(),
            this.isValid
              ? (null == (t = this.onSuccessCallback) || t.call(this, e),
                this.globalConfig.submitFormAutomatically &&
                  (null == (i = null == e ? void 0 : e.currentTarget) ||
                    i.submit()))
              : null == (n = this.onFailCallback) ||
                n.call(this, this.getCompatibleFields(), this.groupFields);
        })
      );
    }
    setForm(e) {
      (this.form = e),
        this.form.setAttribute("novalidate", "novalidate"),
        this.removeListener("submit", this.form, this.formSubmitHandler),
        this.addListener("submit", this.form, this.formSubmitHandler);
    }
    addListener(e, t, i) {
      t.addEventListener(e, i),
        this.eventListeners.push({ type: e, elem: t, func: i });
    }
    removeListener(e, t, i) {
      t.removeEventListener(e, i),
        (this.eventListeners = this.eventListeners.filter(
          (i) => i.type !== e || i.elem !== t
        ));
    }
    addField(e, t, i) {
      if ("string" != typeof e && !u(e))
        throw Error(
          "Field selector is not valid. Please specify a string selector or a valid DOM element."
        );
      let n;
      if (((n = "string" == typeof e ? this.form.querySelector(e) : e), !n))
        throw Error(
          "Field doesn't exist in the DOM! Please check the field selector."
        );
      if (!Array.isArray(t) || !t.length)
        throw Error(
          "Rules argument should be an array and should contain at least 1 element."
        );
      t.forEach((e) => {
        if (!("rule" in e || "validator" in e || "plugin" in e))
          throw Error(
            "Rules argument must contain at least one rule or validator property."
          );
        if (
          !(
            e.validator ||
            e.plugin ||
            (e.rule && Object.values(s).includes(e.rule))
          )
        )
          throw Error(
            `Rule should be one of these types: ${Object.values(s).join(
              ", "
            )}. Provided value: ${e.rule}`
          );
      });
      const o = this.setKeyByFieldSelector(e);
      return (
        (this.fields[o] = {
          elem: n,
          rules: t,
          isValid: void 0,
          touched: !1,
          config: i,
        }),
        this.setListeners(n),
        (this.isSubmitted || this.globalConfig.validateBeforeSubmitting) &&
          this.validateField(o),
        this
      );
    }
    removeField(e) {
      if ("string" != typeof e && !u(e))
        throw Error(
          "Field selector is not valid. Please specify a string selector or a valid DOM element."
        );
      const t = this.getKeyByFieldSelector(e);
      if (!t || !this.fields[t])
        return (
          console.error("Field not found. Check the field selector."), this
        );
      const i = this.getListenerType(this.fields[t].elem.type);
      return (
        this.removeListener(i, this.fields[t].elem, this.handlerChange),
        this.clearErrors(),
        delete this.fields[t],
        this
      );
    }
    removeGroup(e) {
      if ("string" != typeof e)
        throw Error(
          "Group selector is not valid. Please specify a string selector."
        );
      const t = this.getKeyByFieldSelector(e);
      return t && this.groupFields[t]
        ? (this.groupFields[t].elems.forEach((e) => {
            const t = this.getListenerType(e.type);
            this.removeListener(t, e, this.handlerChange);
          }),
          this.clearErrors(),
          delete this.groupFields[t],
          this)
        : (console.error("Group not found. Check the group selector."), this);
    }
    addRequiredGroup(e, t, i, n) {
      if ("string" != typeof e && !u(e))
        throw Error(
          "Group selector is not valid. Please specify a string selector or a valid DOM element."
        );
      let o;
      if (((o = "string" == typeof e ? this.form.querySelector(e) : e), !o))
        throw Error(
          "Group selector not found! Please check the group selector."
        );
      const s = o.querySelectorAll("input"),
        a = Array.from(s).filter((e) => {
          const t = ((e, t) => {
            const i = [...t].reverse();
            for (let t = 0, n = i.length; t < n; ++t) {
              const n = i[t];
              for (const t in e) {
                const i = e[t];
                if (i.groupElem === n) return [t, i];
              }
            }
            return null;
          })(
            this.groupFields,
            ((e) => {
              let t = e;
              const i = [];
              for (; t; ) i.unshift(t), (t = t.parentNode);
              return i;
            })(e)
          );
          return !t || t[1].elems.find((t) => t !== e);
        }),
        l = this.setKeyByFieldSelector(e);
      return (
        (this.groupFields[l] = {
          rules: [{ rule: r.Required, errorMessage: t, successMessage: n }],
          groupElem: o,
          elems: a,
          touched: !1,
          isValid: void 0,
          config: i,
        }),
        s.forEach((e) => {
          this.setListeners(e);
        }),
        this
      );
    }
    getListenerType(e) {
      switch (e) {
        case "checkbox":
        case "select-one":
        case "file":
        case "radio":
          return "change";
        default:
          return "input";
      }
    }
    setListeners(e) {
      const t = this.getListenerType(e.type);
      this.removeListener(t, e, this.handlerChange),
        this.addListener(t, e, this.handlerChange);
    }
    clearFieldLabel(e) {
      var t, i;
      null == (t = this.errorLabels[e]) || t.remove(),
        null == (i = this.successLabels[e]) || i.remove();
    }
    clearFieldStyle(e) {
      var t, i, n, o;
      const s = this.fields[e],
        r =
          (null == (t = s.config) ? void 0 : t.errorFieldStyle) ||
          this.globalConfig.errorFieldStyle;
      Object.keys(r).forEach((e) => {
        s.elem.style[e] = "";
      });
      const a =
        (null == (i = s.config) ? void 0 : i.successFieldStyle) ||
        this.globalConfig.successFieldStyle ||
        {};
      Object.keys(a).forEach((e) => {
        s.elem.style[e] = "";
      }),
        s.elem.classList.remove(
          ...d(
            (null == (n = s.config) ? void 0 : n.errorFieldCssClass) ||
              this.globalConfig.errorFieldCssClass
          ),
          ...d(
            (null == (o = s.config) ? void 0 : o.successFieldCssClass) ||
              this.globalConfig.successFieldCssClass
          )
        );
    }
    clearErrors() {
      var e, t;
      Object.keys(this.errorLabels).forEach((e) =>
        this.errorLabels[e].remove()
      ),
        Object.keys(this.successLabels).forEach((e) =>
          this.successLabels[e].remove()
        );
      for (const e in this.fields) this.clearFieldStyle(e);
      for (const i in this.groupFields) {
        const n = this.groupFields[i],
          o =
            (null == (e = n.config) ? void 0 : e.errorFieldStyle) ||
            this.globalConfig.errorFieldStyle;
        Object.keys(o).forEach((e) => {
          n.elems.forEach((t) => {
            var i;
            (t.style[e] = ""),
              t.classList.remove(
                ...d(
                  (null == (i = n.config) ? void 0 : i.errorFieldCssClass) ||
                    this.globalConfig.errorFieldCssClass
                )
              );
          });
        });
        const s =
          (null == (t = n.config) ? void 0 : t.successFieldStyle) ||
          this.globalConfig.successFieldStyle ||
          {};
        Object.keys(s).forEach((e) => {
          n.elems.forEach((t) => {
            var i;
            (t.style[e] = ""),
              t.classList.remove(
                ...d(
                  (null == (i = n.config) ? void 0 : i.successFieldCssClass) ||
                    this.globalConfig.successFieldCssClass
                )
              );
          });
        });
      }
      this.tooltips = [];
    }
    isTooltip() {
      return !!this.globalConfig.tooltip;
    }
    lockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");
      for (let t = 0, i = e.length; t < i; ++t)
        e[t].setAttribute(
          "data-just-validate-fallback-disabled",
          e[t].disabled ? "true" : "false"
        ),
          e[t].setAttribute("disabled", "disabled"),
          (e[t].style.pointerEvents = "none"),
          (e[t].style.webkitFilter = "grayscale(100%)"),
          (e[t].style.filter = "grayscale(100%)");
    }
    unlockForm() {
      const e = this.form.querySelectorAll("input, textarea, button, select");
      for (let t = 0, i = e.length; t < i; ++t)
        "true" !== e[t].getAttribute("data-just-validate-fallback-disabled") &&
          e[t].removeAttribute("disabled"),
          (e[t].style.pointerEvents = ""),
          (e[t].style.webkitFilter = ""),
          (e[t].style.filter = "");
    }
    renderTooltip(e, t, i) {
      var n;
      const {
          top: o,
          left: s,
          width: r,
          height: a,
        } = e.getBoundingClientRect(),
        l = t.getBoundingClientRect(),
        c =
          i || (null == (n = this.globalConfig.tooltip) ? void 0 : n.position);
      switch (c) {
        case "left":
          (t.style.top = o + a / 2 - l.height / 2 + "px"),
            (t.style.left = s - l.width - 5 + "px");
          break;
        case "top":
          (t.style.top = o - l.height - 5 + "px"),
            (t.style.left = s + r / 2 - l.width / 2 + "px");
          break;
        case "right":
          (t.style.top = o + a / 2 - l.height / 2 + "px"),
            (t.style.left = `${s + r + 5}px`);
          break;
        case "bottom":
          (t.style.top = `${o + a + 5}px`),
            (t.style.left = s + r / 2 - l.width / 2 + "px");
      }
      return (
        (t.dataset.direction = c),
        {
          refresh: () => {
            this.renderTooltip(e, t, i);
          },
        }
      );
    }
    createErrorLabelElem(e, t, i) {
      const n = document.createElement("div");
      n.innerHTML = t;
      const o = this.isTooltip()
        ? null == i
          ? void 0
          : i.errorLabelStyle
        : (null == i ? void 0 : i.errorLabelStyle) ||
          this.globalConfig.errorLabelStyle;
      return (
        Object.assign(n.style, o),
        n.classList.add(
          ...d(
            (null == i ? void 0 : i.errorLabelCssClass) ||
              this.globalConfig.errorLabelCssClass
          ),
          "just-validate-error-label"
        ),
        this.isTooltip() && (n.dataset.tooltip = "true"),
        this.globalConfig.testingMode &&
          (n.dataset.testId = `error-label-${e}`),
        (this.errorLabels[e] = n),
        n
      );
    }
    createSuccessLabelElem(e, t, i) {
      if (void 0 === t) return null;
      const n = document.createElement("div");
      n.innerHTML = t;
      const o =
        (null == i ? void 0 : i.successLabelStyle) ||
        this.globalConfig.successLabelStyle;
      return (
        Object.assign(n.style, o),
        n.classList.add(
          ...d(
            (null == i ? void 0 : i.successLabelCssClass) ||
              this.globalConfig.successLabelCssClass
          ),
          "just-validate-success-label"
        ),
        this.globalConfig.testingMode &&
          (n.dataset.testId = `success-label-${e}`),
        (this.successLabels[e] = n),
        n
      );
    }
    renderErrorsContainer(e, t) {
      const i = t || this.globalConfig.errorsContainer;
      if ("string" == typeof i) {
        const t = this.form.querySelector(i);
        if (t) return t.appendChild(e), !0;
        console.error(
          `Error container with ${i} selector not found. Errors will be rendered as usual`
        );
      }
      return i instanceof Element
        ? (i.appendChild(e), !0)
        : (void 0 !== i &&
            console.error(
              "Error container not found. It should be a string or existing Element. Errors will be rendered as usual"
            ),
          !1);
    }
    renderGroupLabel(e, t, i, n) {
      (!n && this.renderErrorsContainer(t, i)) || e.appendChild(t);
    }
    renderFieldLabel(e, t, i, n) {
      var o, s, r, a, l, c, d;
      if (n || !this.renderErrorsContainer(t, i))
        if ("checkbox" === e.type || "radio" === e.type) {
          const i = document.querySelector(
            `label[for="${e.getAttribute("id")}"]`
          );
          "label" ===
          (null == (s = null == (o = e.parentElement) ? void 0 : o.tagName)
            ? void 0
            : s.toLowerCase())
            ? null ==
                (a =
                  null == (r = e.parentElement) ? void 0 : r.parentElement) ||
              a.appendChild(t)
            : i
            ? null == (l = i.parentElement) || l.appendChild(t)
            : null == (c = e.parentElement) || c.appendChild(t);
        } else null == (d = e.parentElement) || d.appendChild(t);
    }
    showLabels(e, t) {
      Object.keys(e).forEach((i, n) => {
        const o = e[i],
          s = this.getKeyByFieldSelector(i);
        if (!s || !this.fields[s])
          return void console.error(
            "Field not found. Check the field selector."
          );
        const r = this.fields[s];
        (r.isValid = !t),
          this.clearFieldStyle(s),
          this.clearFieldLabel(s),
          this.renderFieldError(s, !1, o),
          0 === n &&
            this.globalConfig.focusInvalidField &&
            setTimeout(() => r.elem.focus(), 0);
      });
    }
    showErrors(e) {
      if ("object" != typeof e)
        throw Error(
          "[showErrors]: Errors should be an object with key: value format"
        );
      this.showLabels(e, !0);
    }
    showSuccessLabels(e) {
      if ("object" != typeof e)
        throw Error(
          "[showSuccessLabels]: Labels should be an object with key: value format"
        );
      this.showLabels(e, !1);
    }
    renderFieldError(e, t = !1, i) {
      var n, o, s, r, a, l;
      const c = this.fields[e];
      if (
        (!1 === c.isValid && (this.isValid = !1),
        void 0 === c.isValid ||
          (!t && !this.isSubmitted && !c.touched && void 0 === i))
      )
        return;
      if (c.isValid) {
        if (!c.asyncCheckPending) {
          const t = this.createSuccessLabelElem(
            e,
            void 0 !== i ? i : c.successMessage,
            c.config
          );
          t &&
            this.renderFieldLabel(
              c.elem,
              t,
              null == (n = c.config) ? void 0 : n.errorsContainer,
              !0
            ),
            c.elem.classList.add(
              ...d(
                (null == (o = c.config) ? void 0 : o.successFieldCssClass) ||
                  this.globalConfig.successFieldCssClass
              )
            );
        }
        return;
      }
      c.elem.classList.add(
        ...d(
          (null == (s = c.config) ? void 0 : s.errorFieldCssClass) ||
            this.globalConfig.errorFieldCssClass
        )
      );
      const u = this.createErrorLabelElem(
        e,
        void 0 !== i ? i : c.errorMessage,
        c.config
      );
      this.renderFieldLabel(
        c.elem,
        u,
        null == (r = c.config) ? void 0 : r.errorsContainer
      ),
        this.isTooltip() &&
          this.tooltips.push(
            this.renderTooltip(
              c.elem,
              u,
              null == (l = null == (a = c.config) ? void 0 : a.tooltip)
                ? void 0
                : l.position
            )
          );
    }
    renderGroupError(e, t = !0) {
      var i, n, o, s;
      const r = this.groupFields[e];
      if (
        (!1 === r.isValid && (this.isValid = !1),
        void 0 === r.isValid || (!t && !this.isSubmitted && !r.touched))
      )
        return;
      if (r.isValid) {
        r.elems.forEach((e) => {
          var t, i;
          Object.assign(
            e.style,
            (null == (t = r.config) ? void 0 : t.successFieldStyle) ||
              this.globalConfig.successFieldStyle
          ),
            e.classList.add(
              ...d(
                (null == (i = r.config) ? void 0 : i.successFieldCssClass) ||
                  this.globalConfig.successFieldCssClass
              )
            );
        });
        const t = this.createSuccessLabelElem(e, r.successMessage, r.config);
        return void (
          t &&
          this.renderGroupLabel(
            r.groupElem,
            t,
            null == (i = r.config) ? void 0 : i.errorsContainer,
            !0
          )
        );
      }
      (this.isValid = !1),
        r.elems.forEach((e) => {
          var t, i;
          Object.assign(
            e.style,
            (null == (t = r.config) ? void 0 : t.errorFieldStyle) ||
              this.globalConfig.errorFieldStyle
          ),
            e.classList.add(
              ...d(
                (null == (i = r.config) ? void 0 : i.errorFieldCssClass) ||
                  this.globalConfig.errorFieldCssClass
              )
            );
        });
      const a = this.createErrorLabelElem(e, r.errorMessage, r.config);
      this.renderGroupLabel(
        r.groupElem,
        a,
        null == (n = r.config) ? void 0 : n.errorsContainer
      ),
        this.isTooltip() &&
          this.tooltips.push(
            this.renderTooltip(
              r.groupElem,
              a,
              null == (s = null == (o = r.config) ? void 0 : o.tooltip)
                ? void 0
                : s.position
            )
          );
    }
    renderErrors(e = !1) {
      if (this.isSubmitted || e || this.globalConfig.validateBeforeSubmitting) {
        this.clearErrors(), (this.isValid = !0);
        for (const e in this.groupFields) this.renderGroupError(e);
        for (const e in this.fields) this.renderFieldError(e);
      }
    }
    destroy() {
      this.eventListeners.forEach((e) => {
        this.removeListener(e.type, e.elem, e.func);
      }),
        Object.keys(this.customStyleTags).forEach((e) => {
          this.customStyleTags[e].remove();
        }),
        this.clearErrors(),
        this.globalConfig.lockForm && this.unlockForm();
    }
    refresh() {
      this.destroy(),
        this.form
          ? (this.initialize(this.form, this.globalConfig),
            Object.keys(this.fields).forEach((e) => {
              const t = this.getFieldSelectorByKey(e);
              t &&
                this.addField(
                  t,
                  [...this.fields[e].rules],
                  this.fields[e].config
                );
            }))
          : console.error("Cannot initialize the library! Form is not defined");
    }
    setCurrentLocale(e) {
      "string" == typeof e || void 0 === e
        ? ((this.currentLocale = e), this.isSubmitted && this.validate())
        : console.error("Current locale should be a string");
    }
    onSuccess(e) {
      return (this.onSuccessCallback = e), this;
    }
    onFail(e) {
      return (this.onFailCallback = e), this;
    }
    onValidate(e) {
      return (this.onValidateCallback = e), this;
    }
  };
}),
  Fancybox.bind("[data-fancybox]", {}),
  $(document).ready(function () {
    $(".beforeAfter_content").twentytwenty();
  }),
  $(".header-burger").click(function (e) {
    $(".header-nav").toggleClass("active");
  }),
  $(".close-menu").click(function (e) {
    $(".header-nav").toggleClass("active");
  }),
  $(".nav-item").click(function (e) {
    $(this).find(".sub-menu").toggleClass("open");
  }),
  $(".beforeAfter  .slide").twentytwenty(),
  $(".faq-item").click(function (e) {
    $(this).toggleClass("open");
  }),
  $(window).scroll(function () {
    let e = $(".header");
    $(window).scrollTop() > 100
      ? e.addClass("header-scroll")
      : e.removeClass("header-scroll");
  }),
  $(".search_wrap form").click(function () {
    $(".search-list").toggleClass("open");
  }),
  $(document).on("click", function (e) {
    $(e.target).closest(".search_wrap").length ||
      $(".search-list").removeClass("open");
  }),
  $(".filter-item").click(function () {
    let e = $(this).data("index");
    "ALL" === e
      ? ($(this).closest(".filters").find(".filter-item").removeClass("open"),
        $(this).addClass("open"),
        $(this)
          .closest("section")
          .find(".filter_content-item")
          .addClass("open"))
      : ($(this).closest(".filters").find(".filter-item").removeClass("open"),
        $(this).addClass("open"),
        $(this)
          .closest("section")
          .find(".filter_content-item")
          .removeClass("open"),
        $('.filter_content-item[data-index="' + e + '"]').addClass("open")),
      $(window).width() < 1024 &&
        $(".filter_content-item .forms-list")
          .slick("unslick")
          .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            responsive: [
              {
                breakpoint: 744,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          }),
      $(window).width() < 1024 &&
        $(".prod_list")
          .slick("unslick")
          .slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            responsive: [
              {
                breakpoint: 744,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          });
  }),
  $(".faq-item").click(function (e) {
    let t = $(this).closest("li"),
      i = t.find(".plus").hasClass("open");
    $(".plus").removeClass("open"),
      $(".answer").removeClass("open"),
      $(".question").removeClass("open"),
      i
        ? t.find(".answer").removeClass("open")
        : (t.find(".answer").addClass("open"),
          t.find(".plus").addClass("open"),
          t.find(".question").addClass("open"));
  }),
  $(".category").click(function (e) {
    $(".categories-card").toggleClass("open");
  }),
  $(".categories-card .close").click(function (e) {
    $(".categories-card").toggleClass("open");
  }),
  $(".issues-slider").slick({
    slidesToShow: 3,
    prevArrow: $(".issues").find(".prev"),
    nextArrow: $(".issues").find(".next"),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $(".brands-list").slick({
    slidesToShow: 7,
    autoplay: !0,
    autoplaySpeed: 1e3,
    arrows: !1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 500, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  }),
  $(".services-slider").slick({
    slidesToShow: 3,
    autoplay: !0,
    autoplaySpeed: 2e3,
    prevArrow: $(".services-slider").closest("section").find(".prev"),
    nextArrow: $(".services-slider").closest("section").find(".next"),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }),
  $(".process-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !0,
    fade: !0,
  }),
  $(".projectInformation_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    dots: !0,
    fade: !0,
  }),
  $(".blogs-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    arrows: !1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerMode: !0, slidesToScroll: 1 },
      },
    ],
  }),
  $(".similar-product-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 2e3,
    arrows: !1,
    responsive: [
      { breakpoint: 1300, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ],
  }),
  $(window).on("resize", function () {
    $(window).width() < 768 &&
      $(".prod_list").each(function (e, t) {
        $(t).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: !1,
          dots: !0,
        });
      }),
      $(window).width() < 1024 &&
        $(".forms-list").each(function (e, t) {
          $(t).slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: !1,
            dots: !0,
            responsive: [
              {
                breakpoint: 744,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
              },
            ],
          });
        });
  }),
  $(window).trigger("resize"),
  $(document).ready(function () {
    var e = $("#tel");
    $("#myForm");
    e.on("input", function (e) {
      var t = e.target.value
        .replace(/\D/g, "")
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      e.target.value = t[2]
        ? "(" + t[1] + ") " + t[2] + (t[3] ? "-" + t[3] : "")
        : t[1];
    });
  });
const validation = new JustValidate(".form");
validation
  .addField(".inputName", [
    { rule: "required", errorMessage: "Name is required" },
    { rule: "minLength", value: 2 },
  ])
  .addField(".phoneInput", [
    { rule: "required", errorMessage: "Phone number is required" },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    { rule: "required", errorMessage: "Email is required" },
    { rule: "email", errorMessage: "Email is invalid!" },
  ])
  .addField(".inputLName", [
    { rule: "required", errorMessage: "Last name is required" },
    { rule: "minLength", value: 2 },
  ])
  .addField("select", [{ rule: "required", errorMessage: "Name is required" }])
  .addField(".file1", [
    { rule: "minFilesCount", value: 1, errorMessage: "File is required" },
  ])
  .addField(".file2", [
    { rule: "minFilesCount", value: 1, errorMessage: "File is required" },
  ])
  .addRequiredGroup(".radio-list1")
  .addRequiredGroup(".radio-list2")
  .addRequiredGroup(".radio-list3");
