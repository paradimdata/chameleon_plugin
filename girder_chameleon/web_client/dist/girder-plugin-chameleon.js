var Yt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xi(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function bs(i) {
  if (i.__esModule)
    return i;
  var n = i.default;
  if (typeof n == "function") {
    var f = function s() {
      return this instanceof s ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    f.prototype = n.prototype;
  } else
    f = {};
  return Object.defineProperty(f, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var d = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(f, s, d.get ? d : {
      enumerable: !0,
      get: function() {
        return i[s];
      }
    });
  }), f;
}
var yr = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
var Vi;
function Qi() {
  return Vi || (Vi = 1, function(i) {
    (function(n, f) {
      i.exports = n.document ? f(n, !0) : function(s) {
        if (!s.document)
          throw new Error("jQuery requires a window with a document");
        return f(s);
      };
    })(typeof window < "u" ? window : Yt, function(n, f) {
      var s = [], d = Object.getPrototypeOf, m = s.slice, _ = s.flat ? function(e) {
        return s.flat.call(e);
      } : function(e) {
        return s.concat.apply([], e);
      }, D = s.push, M = s.indexOf, U = {}, G = U.toString, te = U.hasOwnProperty, Ke = te.toString, He = Ke.call(Object), R = {}, z = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, Ie = function(t) {
        return t != null && t === t.window;
      }, W = n.document, Ze = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function Te(e, t, r) {
        r = r || W;
        var u, o, l = r.createElement("script");
        if (l.text = e, t)
          for (u in Ze)
            o = t[u] || t.getAttribute && t.getAttribute(u), o && l.setAttribute(u, o);
        r.head.appendChild(l).parentNode.removeChild(l);
      }
      function Ne(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? U[G.call(e)] || "object" : typeof e;
      }
      var on = "3.7.1", ln = /HTML$/i, a = function(e, t) {
        return new a.fn.init(e, t);
      };
      a.fn = a.prototype = {
        // The current version of jQuery being used
        jquery: on,
        constructor: a,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return m.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(e) {
          return e == null ? m.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(e) {
          var t = a.merge(this.constructor(), e);
          return t.prevObject = this, t;
        },
        // Execute a callback for every element in the matched set.
        each: function(e) {
          return a.each(this, e);
        },
        map: function(e) {
          return this.pushStack(a.map(this, function(t, r) {
            return e.call(t, r, t);
          }));
        },
        slice: function() {
          return this.pushStack(m.apply(this, arguments));
        },
        first: function() {
          return this.eq(0);
        },
        last: function() {
          return this.eq(-1);
        },
        even: function() {
          return this.pushStack(a.grep(this, function(e, t) {
            return (t + 1) % 2;
          }));
        },
        odd: function() {
          return this.pushStack(a.grep(this, function(e, t) {
            return t % 2;
          }));
        },
        eq: function(e) {
          var t = this.length, r = +e + (e < 0 ? t : 0);
          return this.pushStack(r >= 0 && r < t ? [this[r]] : []);
        },
        end: function() {
          return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: D,
        sort: s.sort,
        splice: s.splice
      }, a.extend = a.fn.extend = function() {
        var e, t, r, u, o, l, h = arguments[0] || {}, F = 1, v = arguments.length, w = !1;
        for (typeof h == "boolean" && (w = h, h = arguments[F] || {}, F++), typeof h != "object" && !z(h) && (h = {}), F === v && (h = this, F--); F < v; F++)
          if ((e = arguments[F]) != null)
            for (t in e)
              u = e[t], !(t === "__proto__" || h === u) && (w && u && (a.isPlainObject(u) || (o = Array.isArray(u))) ? (r = h[t], o && !Array.isArray(r) ? l = [] : !o && !a.isPlainObject(r) ? l = {} : l = r, o = !1, h[t] = a.extend(w, l, u)) : u !== void 0 && (h[t] = u));
        return h;
      }, a.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (on + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, r;
          return !e || G.call(e) !== "[object Object]" ? !1 : (t = d(e), t ? (r = te.call(t, "constructor") && t.constructor, typeof r == "function" && Ke.call(r) === He) : !0);
        },
        isEmptyObject: function(e) {
          var t;
          for (t in e)
            return !1;
          return !0;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(e, t, r) {
          Te(e, { nonce: t && t.nonce }, r);
        },
        each: function(e, t) {
          var r, u = 0;
          if (et(e))
            for (r = e.length; u < r && t.call(e[u], u, e[u]) !== !1; u++)
              ;
          else
            for (u in e)
              if (t.call(e[u], u, e[u]) === !1)
                break;
          return e;
        },
        // Retrieve the text value of an array of DOM nodes
        text: function(e) {
          var t, r = "", u = 0, o = e.nodeType;
          if (!o)
            for (; t = e[u++]; )
              r += a.text(t);
          return o === 1 || o === 11 ? e.textContent : o === 9 ? e.documentElement.textContent : o === 3 || o === 4 ? e.nodeValue : r;
        },
        // results is for internal usage only
        makeArray: function(e, t) {
          var r = t || [];
          return e != null && (et(Object(e)) ? a.merge(
            r,
            typeof e == "string" ? [e] : e
          ) : D.call(r, e)), r;
        },
        inArray: function(e, t, r) {
          return t == null ? -1 : M.call(t, e, r);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, r = e && (e.ownerDocument || e).documentElement;
          return !ln.test(t || r && r.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(e, t) {
          for (var r = +t.length, u = 0, o = e.length; u < r; u++)
            e[o++] = t[u];
          return e.length = o, e;
        },
        grep: function(e, t, r) {
          for (var u, o = [], l = 0, h = e.length, F = !r; l < h; l++)
            u = !t(e[l], l), u !== F && o.push(e[l]);
          return o;
        },
        // arg is for internal usage only
        map: function(e, t, r) {
          var u, o, l = 0, h = [];
          if (et(e))
            for (u = e.length; l < u; l++)
              o = t(e[l], l, r), o != null && h.push(o);
          else
            for (l in e)
              o = t(e[l], l, r), o != null && h.push(o);
          return _(h);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: R
      }), typeof Symbol == "function" && (a.fn[Symbol.iterator] = s[Symbol.iterator]), a.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
          U["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function et(e) {
        var t = !!e && "length" in e && e.length, r = Ne(e);
        return z(e) || Ie(e) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function oe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var cn = s.pop, Gn = s.sort, fn = s.splice, ue = "[\\x20\\t\\r\\n\\f]", vt = new RegExp(
        "^" + ue + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ue + "+$",
        "g"
      );
      a.contains = function(e, t) {
        var r = t && t.parentNode;
        return e === r || !!(r && r.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (e.contains ? e.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
      };
      var jn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function hn(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      a.escapeSelector = function(e) {
        return (e + "").replace(jn, hn);
      };
      var Pe = W, Lt = D;
      (function() {
        var e, t, r, u, o, l = Lt, h, F, v, w, S, N = a.expando, C = 0, I = 0, J = _n(), ne = _n(), Q = _n(), ye = _n(), ge = function(g, b) {
          return g === b && (o = !0), 0;
        }, ze = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Je = "(?:\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ee = "\\[" + ue + "*(" + Je + ")(?:" + ue + // Operator (capture 2)
        "*([*^$|!~]?=)" + ue + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Je + "))|)" + ue + "*\\]", bt = ":(" + Je + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ee + ")*)|.*)\\)|)", re = new RegExp(ue + "+", "g"), fe = new RegExp("^" + ue + "*," + ue + "*"), Jt = new RegExp("^" + ue + "*([>+~]|" + ue + ")" + ue + "*"), fr = new RegExp(ue + "|>"), Xe = new RegExp(bt), Xt = new RegExp("^" + Je + "$"), Qe = {
          ID: new RegExp("^#(" + Je + ")"),
          CLASS: new RegExp("^\\.(" + Je + ")"),
          TAG: new RegExp("^(" + Je + "|[*])"),
          ATTR: new RegExp("^" + ee),
          PSEUDO: new RegExp("^" + bt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ue + "*(even|odd|(([+-]|)(\\d*)n|)" + ue + "*(?:([+-]|)" + ue + "*(\\d+)|))" + ue + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ze + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + ue + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ue + "*((?:-\\d)?\\d*)" + ue + "*\\)|)(?=[^-]|$)", "i")
        }, ct = /^(?:input|select|textarea|button)$/i, ft = /^h\d$/i, Ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, hr = /[+~]/, ut = new RegExp("\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\([^\\r\\n\\f])", "g"), at = function(g, b) {
          var T = "0x" + g.slice(1) - 65536;
          return b || (T < 0 ? String.fromCharCode(T + 65536) : String.fromCharCode(T >> 10 | 55296, T & 1023 | 56320));
        }, ds = function() {
          ht();
        }, ps = Tn(
          function(g) {
            return g.disabled === !0 && oe(g, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function gs() {
          try {
            return h.activeElement;
          } catch {
          }
        }
        try {
          l.apply(
            s = m.call(Pe.childNodes),
            Pe.childNodes
          ), s[Pe.childNodes.length].nodeType;
        } catch {
          l = {
            apply: function(b, T) {
              Lt.apply(b, m.call(T));
            },
            call: function(b) {
              Lt.apply(b, m.call(arguments, 1));
            }
          };
        }
        function se(g, b, T, E) {
          var H, P, k, q, V, Y, B, X = b && b.ownerDocument, K = b ? b.nodeType : 9;
          if (T = T || [], typeof g != "string" || !g || K !== 1 && K !== 9 && K !== 11)
            return T;
          if (!E && (ht(b), b = b || h, v)) {
            if (K !== 11 && (V = Ve.exec(g)))
              if (H = V[1]) {
                if (K === 9)
                  if (k = b.getElementById(H)) {
                    if (k.id === H)
                      return l.call(T, k), T;
                  } else
                    return T;
                else if (X && (k = X.getElementById(H)) && se.contains(b, k) && k.id === H)
                  return l.call(T, k), T;
              } else {
                if (V[2])
                  return l.apply(T, b.getElementsByTagName(g)), T;
                if ((H = V[3]) && b.getElementsByClassName)
                  return l.apply(T, b.getElementsByClassName(H)), T;
              }
            if (!ye[g + " "] && (!w || !w.test(g))) {
              if (B = g, X = b, K === 1 && (fr.test(g) || Jt.test(g))) {
                for (X = hr.test(g) && dr(b.parentNode) || b, (X != b || !R.scope) && ((q = b.getAttribute("id")) ? q = a.escapeSelector(q) : b.setAttribute("id", q = N)), Y = Qt(g), P = Y.length; P--; )
                  Y[P] = (q ? "#" + q : ":scope") + " " + xn(Y[P]);
                B = Y.join(",");
              }
              try {
                return l.apply(
                  T,
                  X.querySelectorAll(B)
                ), T;
              } catch {
                ye(g, !0);
              } finally {
                q === N && b.removeAttribute("id");
              }
            }
          }
          return ki(g.replace(vt, "$1"), b, T, E);
        }
        function _n() {
          var g = [];
          function b(T, E) {
            return g.push(T + " ") > t.cacheLength && delete b[g.shift()], b[T + " "] = E;
          }
          return b;
        }
        function Ge(g) {
          return g[N] = !0, g;
        }
        function Mt(g) {
          var b = h.createElement("fieldset");
          try {
            return !!g(b);
          } catch {
            return !1;
          } finally {
            b.parentNode && b.parentNode.removeChild(b), b = null;
          }
        }
        function ms(g) {
          return function(b) {
            return oe(b, "input") && b.type === g;
          };
        }
        function vs(g) {
          return function(b) {
            return (oe(b, "input") || oe(b, "button")) && b.type === g;
          };
        }
        function Ui(g) {
          return function(b) {
            return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === g : b.disabled === g : b.isDisabled === g || // Where there is no isDisabled, check manually
            b.isDisabled !== !g && ps(b) === g : b.disabled === g : "label" in b ? b.disabled === g : !1;
          };
        }
        function wt(g) {
          return Ge(function(b) {
            return b = +b, Ge(function(T, E) {
              for (var H, P = g([], T.length, b), k = P.length; k--; )
                T[H = P[k]] && (T[H] = !(E[H] = T[H]));
            });
          });
        }
        function dr(g) {
          return g && typeof g.getElementsByTagName < "u" && g;
        }
        function ht(g) {
          var b, T = g ? g.ownerDocument || g : Pe;
          return T == h || T.nodeType !== 9 || !T.documentElement || (h = T, F = h.documentElement, v = !a.isXMLDoc(h), S = F.matches || F.webkitMatchesSelector || F.msMatchesSelector, F.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          Pe != h && (b = h.defaultView) && b.top !== b && b.addEventListener("unload", ds), R.getById = Mt(function(E) {
            return F.appendChild(E).id = a.expando, !h.getElementsByName || !h.getElementsByName(a.expando).length;
          }), R.disconnectedMatch = Mt(function(E) {
            return S.call(E, "*");
          }), R.scope = Mt(function() {
            return h.querySelectorAll(":scope");
          }), R.cssHas = Mt(function() {
            try {
              return h.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), R.getById ? (t.filter.ID = function(E) {
            var H = E.replace(ut, at);
            return function(P) {
              return P.getAttribute("id") === H;
            };
          }, t.find.ID = function(E, H) {
            if (typeof H.getElementById < "u" && v) {
              var P = H.getElementById(E);
              return P ? [P] : [];
            }
          }) : (t.filter.ID = function(E) {
            var H = E.replace(ut, at);
            return function(P) {
              var k = typeof P.getAttributeNode < "u" && P.getAttributeNode("id");
              return k && k.value === H;
            };
          }, t.find.ID = function(E, H) {
            if (typeof H.getElementById < "u" && v) {
              var P, k, q, V = H.getElementById(E);
              if (V) {
                if (P = V.getAttributeNode("id"), P && P.value === E)
                  return [V];
                for (q = H.getElementsByName(E), k = 0; V = q[k++]; )
                  if (P = V.getAttributeNode("id"), P && P.value === E)
                    return [V];
              }
              return [];
            }
          }), t.find.TAG = function(E, H) {
            return typeof H.getElementsByTagName < "u" ? H.getElementsByTagName(E) : H.querySelectorAll(E);
          }, t.find.CLASS = function(E, H) {
            if (typeof H.getElementsByClassName < "u" && v)
              return H.getElementsByClassName(E);
          }, w = [], Mt(function(E) {
            var H;
            F.appendChild(E).innerHTML = "<a id='" + N + "' href='' disabled='disabled'></a><select id='" + N + "-\r\\' disabled='disabled'><option selected=''></option></select>", E.querySelectorAll("[selected]").length || w.push("\\[" + ue + "*(?:value|" + ze + ")"), E.querySelectorAll("[id~=" + N + "-]").length || w.push("~="), E.querySelectorAll("a#" + N + "+*").length || w.push(".#.+[+~]"), E.querySelectorAll(":checked").length || w.push(":checked"), H = h.createElement("input"), H.setAttribute("type", "hidden"), E.appendChild(H).setAttribute("name", "D"), F.appendChild(E).disabled = !0, E.querySelectorAll(":disabled").length !== 2 && w.push(":enabled", ":disabled"), H = h.createElement("input"), H.setAttribute("name", ""), E.appendChild(H), E.querySelectorAll("[name='']").length || w.push("\\[" + ue + "*name" + ue + "*=" + ue + `*(?:''|"")`);
          }), R.cssHas || w.push(":has"), w = w.length && new RegExp(w.join("|")), ge = function(E, H) {
            if (E === H)
              return o = !0, 0;
            var P = !E.compareDocumentPosition - !H.compareDocumentPosition;
            return P || (P = (E.ownerDocument || E) == (H.ownerDocument || H) ? E.compareDocumentPosition(H) : (
              // Otherwise we know they are disconnected
              1
            ), P & 1 || !R.sortDetached && H.compareDocumentPosition(E) === P ? E === h || E.ownerDocument == Pe && se.contains(Pe, E) ? -1 : H === h || H.ownerDocument == Pe && se.contains(Pe, H) ? 1 : u ? M.call(u, E) - M.call(u, H) : 0 : P & 4 ? -1 : 1);
          }), h;
        }
        se.matches = function(g, b) {
          return se(g, null, null, b);
        }, se.matchesSelector = function(g, b) {
          if (ht(g), v && !ye[b + " "] && (!w || !w.test(b)))
            try {
              var T = S.call(g, b);
              if (T || R.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              g.document && g.document.nodeType !== 11)
                return T;
            } catch {
              ye(b, !0);
            }
          return se(b, h, null, [g]).length > 0;
        }, se.contains = function(g, b) {
          return (g.ownerDocument || g) != h && ht(g), a.contains(g, b);
        }, se.attr = function(g, b) {
          (g.ownerDocument || g) != h && ht(g);
          var T = t.attrHandle[b.toLowerCase()], E = T && te.call(t.attrHandle, b.toLowerCase()) ? T(g, b, !v) : void 0;
          return E !== void 0 ? E : g.getAttribute(b);
        }, se.error = function(g) {
          throw new Error("Syntax error, unrecognized expression: " + g);
        }, a.uniqueSort = function(g) {
          var b, T = [], E = 0, H = 0;
          if (o = !R.sortStable, u = !R.sortStable && m.call(g, 0), Gn.call(g, ge), o) {
            for (; b = g[H++]; )
              b === g[H] && (E = T.push(H));
            for (; E--; )
              fn.call(g, T[E], 1);
          }
          return u = null, g;
        }, a.fn.uniqueSort = function() {
          return this.pushStack(a.uniqueSort(m.apply(this)));
        }, t = a.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: Ge,
          match: Qe,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(g) {
              return g[1] = g[1].replace(ut, at), g[3] = (g[3] || g[4] || g[5] || "").replace(ut, at), g[2] === "~=" && (g[3] = " " + g[3] + " "), g.slice(0, 4);
            },
            CHILD: function(g) {
              return g[1] = g[1].toLowerCase(), g[1].slice(0, 3) === "nth" ? (g[3] || se.error(g[0]), g[4] = +(g[4] ? g[5] + (g[6] || 1) : 2 * (g[3] === "even" || g[3] === "odd")), g[5] = +(g[7] + g[8] || g[3] === "odd")) : g[3] && se.error(g[0]), g;
            },
            PSEUDO: function(g) {
              var b, T = !g[6] && g[2];
              return Qe.CHILD.test(g[0]) ? null : (g[3] ? g[2] = g[4] || g[5] || "" : T && Xe.test(T) && // Get excess from tokenize (recursively)
              (b = Qt(T, !0)) && // advance to the next closing parenthesis
              (b = T.indexOf(")", T.length - b) - T.length) && (g[0] = g[0].slice(0, b), g[2] = T.slice(0, b)), g.slice(0, 3));
            }
          },
          filter: {
            TAG: function(g) {
              var b = g.replace(ut, at).toLowerCase();
              return g === "*" ? function() {
                return !0;
              } : function(T) {
                return oe(T, b);
              };
            },
            CLASS: function(g) {
              var b = J[g + " "];
              return b || (b = new RegExp("(^|" + ue + ")" + g + "(" + ue + "|$)")) && J(g, function(T) {
                return b.test(
                  typeof T.className == "string" && T.className || typeof T.getAttribute < "u" && T.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(g, b, T) {
              return function(E) {
                var H = se.attr(E, g);
                return H == null ? b === "!=" : b ? (H += "", b === "=" ? H === T : b === "!=" ? H !== T : b === "^=" ? T && H.indexOf(T) === 0 : b === "*=" ? T && H.indexOf(T) > -1 : b === "$=" ? T && H.slice(-T.length) === T : b === "~=" ? (" " + H.replace(re, " ") + " ").indexOf(T) > -1 : b === "|=" ? H === T || H.slice(0, T.length + 1) === T + "-" : !1) : !0;
              };
            },
            CHILD: function(g, b, T, E, H) {
              var P = g.slice(0, 3) !== "nth", k = g.slice(-4) !== "last", q = b === "of-type";
              return E === 1 && H === 0 ? (
                // Shortcut for :nth-*(n)
                function(V) {
                  return !!V.parentNode;
                }
              ) : function(V, Y, B) {
                var X, K, j, le, De, Fe = P !== k ? "nextSibling" : "previousSibling", Le = V.parentNode, Ye = q && V.nodeName.toLowerCase(), It = !B && !q, _e = !1;
                if (Le) {
                  if (P) {
                    for (; Fe; ) {
                      for (j = V; j = j[Fe]; )
                        if (q ? oe(j, Ye) : j.nodeType === 1)
                          return !1;
                      De = Fe = g === "only" && !De && "nextSibling";
                    }
                    return !0;
                  }
                  if (De = [k ? Le.firstChild : Le.lastChild], k && It) {
                    for (K = Le[N] || (Le[N] = {}), X = K[g] || [], le = X[0] === C && X[1], _e = le && X[2], j = le && Le.childNodes[le]; j = ++le && j && j[Fe] || // Fallback to seeking `elem` from the start
                    (_e = le = 0) || De.pop(); )
                      if (j.nodeType === 1 && ++_e && j === V) {
                        K[g] = [C, le, _e];
                        break;
                      }
                  } else if (It && (K = V[N] || (V[N] = {}), X = K[g] || [], le = X[0] === C && X[1], _e = le), _e === !1)
                    for (; (j = ++le && j && j[Fe] || (_e = le = 0) || De.pop()) && !((q ? oe(j, Ye) : j.nodeType === 1) && ++_e && (It && (K = j[N] || (j[N] = {}), K[g] = [C, _e]), j === V)); )
                      ;
                  return _e -= H, _e === E || _e % E === 0 && _e / E >= 0;
                }
              };
            },
            PSEUDO: function(g, b) {
              var T, E = t.pseudos[g] || t.setFilters[g.toLowerCase()] || se.error("unsupported pseudo: " + g);
              return E[N] ? E(b) : E.length > 1 ? (T = [g, g, "", b], t.setFilters.hasOwnProperty(g.toLowerCase()) ? Ge(function(H, P) {
                for (var k, q = E(H, b), V = q.length; V--; )
                  k = M.call(H, q[V]), H[k] = !(P[k] = q[V]);
              }) : function(H) {
                return E(H, 0, T);
              }) : E;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: Ge(function(g) {
              var b = [], T = [], E = vr(g.replace(vt, "$1"));
              return E[N] ? Ge(function(H, P, k, q) {
                for (var V, Y = E(H, null, q, []), B = H.length; B--; )
                  (V = Y[B]) && (H[B] = !(P[B] = V));
              }) : function(H, P, k) {
                return b[0] = H, E(b, null, k, T), b[0] = null, !T.pop();
              };
            }),
            has: Ge(function(g) {
              return function(b) {
                return se(g, b).length > 0;
              };
            }),
            contains: Ge(function(g) {
              return g = g.replace(ut, at), function(b) {
                return (b.textContent || a.text(b)).indexOf(g) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: Ge(function(g) {
              return Xt.test(g || "") || se.error("unsupported lang: " + g), g = g.replace(ut, at).toLowerCase(), function(b) {
                var T;
                do
                  if (T = v ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    return T = T.toLowerCase(), T === g || T.indexOf(g + "-") === 0;
                while ((b = b.parentNode) && b.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(g) {
              var b = n.location && n.location.hash;
              return b && b.slice(1) === g.id;
            },
            root: function(g) {
              return g === F;
            },
            focus: function(g) {
              return g === gs() && h.hasFocus() && !!(g.type || g.href || ~g.tabIndex);
            },
            // Boolean properties
            enabled: Ui(!1),
            disabled: Ui(!0),
            checked: function(g) {
              return oe(g, "input") && !!g.checked || oe(g, "option") && !!g.selected;
            },
            selected: function(g) {
              return g.parentNode && g.parentNode.selectedIndex, g.selected === !0;
            },
            // Contents
            empty: function(g) {
              for (g = g.firstChild; g; g = g.nextSibling)
                if (g.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(g) {
              return !t.pseudos.empty(g);
            },
            // Element/input types
            header: function(g) {
              return ft.test(g.nodeName);
            },
            input: function(g) {
              return ct.test(g.nodeName);
            },
            button: function(g) {
              return oe(g, "input") && g.type === "button" || oe(g, "button");
            },
            text: function(g) {
              var b;
              return oe(g, "input") && g.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((b = g.getAttribute("type")) == null || b.toLowerCase() === "text");
            },
            // Position-in-collection
            first: wt(function() {
              return [0];
            }),
            last: wt(function(g, b) {
              return [b - 1];
            }),
            eq: wt(function(g, b, T) {
              return [T < 0 ? T + b : T];
            }),
            even: wt(function(g, b) {
              for (var T = 0; T < b; T += 2)
                g.push(T);
              return g;
            }),
            odd: wt(function(g, b) {
              for (var T = 1; T < b; T += 2)
                g.push(T);
              return g;
            }),
            lt: wt(function(g, b, T) {
              var E;
              for (T < 0 ? E = T + b : T > b ? E = b : E = T; --E >= 0; )
                g.push(E);
              return g;
            }),
            gt: wt(function(g, b, T) {
              for (var E = T < 0 ? T + b : T; ++E < b; )
                g.push(E);
              return g;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = ms(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = vs(e);
        function $i() {
        }
        $i.prototype = t.filters = t.pseudos, t.setFilters = new $i();
        function Qt(g, b) {
          var T, E, H, P, k, q, V, Y = ne[g + " "];
          if (Y)
            return b ? 0 : Y.slice(0);
          for (k = g, q = [], V = t.preFilter; k; ) {
            (!T || (E = fe.exec(k))) && (E && (k = k.slice(E[0].length) || k), q.push(H = [])), T = !1, (E = Jt.exec(k)) && (T = E.shift(), H.push({
              value: T,
              // Cast descendant combinators to space
              type: E[0].replace(vt, " ")
            }), k = k.slice(T.length));
            for (P in t.filter)
              (E = Qe[P].exec(k)) && (!V[P] || (E = V[P](E))) && (T = E.shift(), H.push({
                value: T,
                type: P,
                matches: E
              }), k = k.slice(T.length));
            if (!T)
              break;
          }
          return b ? k.length : k ? se.error(g) : (
            // Cache the tokens
            ne(g, q).slice(0)
          );
        }
        function xn(g) {
          for (var b = 0, T = g.length, E = ""; b < T; b++)
            E += g[b].value;
          return E;
        }
        function Tn(g, b, T) {
          var E = b.dir, H = b.next, P = H || E, k = T && P === "parentNode", q = I++;
          return b.first ? (
            // Check against closest ancestor/preceding element
            function(V, Y, B) {
              for (; V = V[E]; )
                if (V.nodeType === 1 || k)
                  return g(V, Y, B);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(V, Y, B) {
              var X, K, j = [C, q];
              if (B) {
                for (; V = V[E]; )
                  if ((V.nodeType === 1 || k) && g(V, Y, B))
                    return !0;
              } else
                for (; V = V[E]; )
                  if (V.nodeType === 1 || k)
                    if (K = V[N] || (V[N] = {}), H && oe(V, H))
                      V = V[E] || V;
                    else {
                      if ((X = K[P]) && X[0] === C && X[1] === q)
                        return j[2] = X[2];
                      if (K[P] = j, j[2] = g(V, Y, B))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function pr(g) {
          return g.length > 1 ? function(b, T, E) {
            for (var H = g.length; H--; )
              if (!g[H](b, T, E))
                return !1;
            return !0;
          } : g[0];
        }
        function ys(g, b, T) {
          for (var E = 0, H = b.length; E < H; E++)
            se(g, b[E], T);
          return T;
        }
        function Cn(g, b, T, E, H) {
          for (var P, k = [], q = 0, V = g.length, Y = b != null; q < V; q++)
            (P = g[q]) && (!T || T(P, E, H)) && (k.push(P), Y && b.push(q));
          return k;
        }
        function gr(g, b, T, E, H, P) {
          return E && !E[N] && (E = gr(E)), H && !H[N] && (H = gr(H, P)), Ge(function(k, q, V, Y) {
            var B, X, K, j, le = [], De = [], Fe = q.length, Le = k || ys(
              b || "*",
              V.nodeType ? [V] : V,
              []
            ), Ye = g && (k || !b) ? Cn(Le, le, g, V, Y) : Le;
            if (T ? (j = H || (k ? g : Fe || E) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              q
            ), T(Ye, j, V, Y)) : j = Ye, E)
              for (B = Cn(j, De), E(B, [], V, Y), X = B.length; X--; )
                (K = B[X]) && (j[De[X]] = !(Ye[De[X]] = K));
            if (k) {
              if (H || g) {
                if (H) {
                  for (B = [], X = j.length; X--; )
                    (K = j[X]) && B.push(Ye[X] = K);
                  H(null, j = [], B, Y);
                }
                for (X = j.length; X--; )
                  (K = j[X]) && (B = H ? M.call(k, K) : le[X]) > -1 && (k[B] = !(q[B] = K));
              }
            } else
              j = Cn(
                j === q ? j.splice(Fe, j.length) : j
              ), H ? H(null, q, j, Y) : l.apply(q, j);
          });
        }
        function mr(g) {
          for (var b, T, E, H = g.length, P = t.relative[g[0].type], k = P || t.relative[" "], q = P ? 1 : 0, V = Tn(function(X) {
            return X === b;
          }, k, !0), Y = Tn(function(X) {
            return M.call(b, X) > -1;
          }, k, !0), B = [function(X, K, j) {
            var le = !P && (j || K != r) || ((b = K).nodeType ? V(X, K, j) : Y(X, K, j));
            return b = null, le;
          }]; q < H; q++)
            if (T = t.relative[g[q].type])
              B = [Tn(pr(B), T)];
            else {
              if (T = t.filter[g[q].type].apply(null, g[q].matches), T[N]) {
                for (E = ++q; E < H && !t.relative[g[E].type]; E++)
                  ;
                return gr(
                  q > 1 && pr(B),
                  q > 1 && xn(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    g.slice(0, q - 1).concat({ value: g[q - 2].type === " " ? "*" : "" })
                  ).replace(vt, "$1"),
                  T,
                  q < E && mr(g.slice(q, E)),
                  E < H && mr(g = g.slice(E)),
                  E < H && xn(g)
                );
              }
              B.push(T);
            }
          return pr(B);
        }
        function Fs(g, b) {
          var T = b.length > 0, E = g.length > 0, H = function(P, k, q, V, Y) {
            var B, X, K, j = 0, le = "0", De = P && [], Fe = [], Le = r, Ye = P || E && t.find.TAG("*", Y), It = C += Le == null ? 1 : Math.random() || 0.1, _e = Ye.length;
            for (Y && (r = k == h || k || Y); le !== _e && (B = Ye[le]) != null; le++) {
              if (E && B) {
                for (X = 0, !k && B.ownerDocument != h && (ht(B), q = !v); K = g[X++]; )
                  if (K(B, k || h, q)) {
                    l.call(V, B);
                    break;
                  }
                Y && (C = It);
              }
              T && ((B = !K && B) && j--, P && De.push(B));
            }
            if (j += le, T && le !== j) {
              for (X = 0; K = b[X++]; )
                K(De, Fe, k, q);
              if (P) {
                if (j > 0)
                  for (; le--; )
                    De[le] || Fe[le] || (Fe[le] = cn.call(V));
                Fe = Cn(Fe);
              }
              l.apply(V, Fe), Y && !P && Fe.length > 0 && j + b.length > 1 && a.uniqueSort(V);
            }
            return Y && (C = It, r = Le), De;
          };
          return T ? Ge(H) : H;
        }
        function vr(g, b) {
          var T, E = [], H = [], P = Q[g + " "];
          if (!P) {
            for (b || (b = Qt(g)), T = b.length; T--; )
              P = mr(b[T]), P[N] ? E.push(P) : H.push(P);
            P = Q(
              g,
              Fs(H, E)
            ), P.selector = g;
          }
          return P;
        }
        function ki(g, b, T, E) {
          var H, P, k, q, V, Y = typeof g == "function" && g, B = !E && Qt(g = Y.selector || g);
          if (T = T || [], B.length === 1) {
            if (P = B[0] = B[0].slice(0), P.length > 2 && (k = P[0]).type === "ID" && b.nodeType === 9 && v && t.relative[P[1].type]) {
              if (b = (t.find.ID(
                k.matches[0].replace(ut, at),
                b
              ) || [])[0], b)
                Y && (b = b.parentNode);
              else
                return T;
              g = g.slice(P.shift().value.length);
            }
            for (H = Qe.needsContext.test(g) ? 0 : P.length; H-- && (k = P[H], !t.relative[q = k.type]); )
              if ((V = t.find[q]) && (E = V(
                k.matches[0].replace(ut, at),
                hr.test(P[0].type) && dr(b.parentNode) || b
              ))) {
                if (P.splice(H, 1), g = E.length && xn(P), !g)
                  return l.apply(T, E), T;
                break;
              }
          }
          return (Y || vr(g, B))(
            E,
            b,
            !v,
            T,
            !b || hr.test(g) && dr(b.parentNode) || b
          ), T;
        }
        R.sortStable = N.split("").sort(ge).join("") === N, ht(), R.sortDetached = Mt(function(g) {
          return g.compareDocumentPosition(h.createElement("fieldset")) & 1;
        }), a.find = se, a.expr[":"] = a.expr.pseudos, a.unique = a.uniqueSort, se.compile = vr, se.select = ki, se.setDocument = ht, se.tokenize = Qt, se.escape = a.escapeSelector, se.getText = a.text, se.isXML = a.isXMLDoc, se.selectors = a.expr, se.support = a.support, se.uniqueSort = a.uniqueSort;
      })();
      var ot = function(e, t, r) {
        for (var u = [], o = r !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && a(e).is(r))
              break;
            u.push(e);
          }
        return u;
      }, dn = function(e, t) {
        for (var r = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && r.push(e);
        return r;
      }, pn = a.expr.match.needsContext, qt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Rt(e, t, r) {
        return z(t) ? a.grep(e, function(u, o) {
          return !!t.call(u, o, u) !== r;
        }) : t.nodeType ? a.grep(e, function(u) {
          return u === t !== r;
        }) : typeof t != "string" ? a.grep(e, function(u) {
          return M.call(t, u) > -1 !== r;
        }) : a.filter(t, e, r);
      }
      a.filter = function(e, t, r) {
        var u = t[0];
        return r && (e = ":not(" + e + ")"), t.length === 1 && u.nodeType === 1 ? a.find.matchesSelector(u, e) ? [u] : [] : a.find.matches(e, a.grep(t, function(o) {
          return o.nodeType === 1;
        }));
      }, a.fn.extend({
        find: function(e) {
          var t, r, u = this.length, o = this;
          if (typeof e != "string")
            return this.pushStack(a(e).filter(function() {
              for (t = 0; t < u; t++)
                if (a.contains(o[t], this))
                  return !0;
            }));
          for (r = this.pushStack([]), t = 0; t < u; t++)
            a.find(e, o[t], r);
          return u > 1 ? a.uniqueSort(r) : r;
        },
        filter: function(e) {
          return this.pushStack(Rt(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(Rt(this, e || [], !0));
        },
        is: function(e) {
          return !!Rt(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof e == "string" && pn.test(e) ? a(e) : e || [],
            !1
          ).length;
        }
      });
      var gn, Wn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Bn = a.fn.init = function(e, t, r) {
        var u, o;
        if (!e)
          return this;
        if (r = r || gn, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? u = [null, e, null] : u = Wn.exec(e), u && (u[1] || !t))
            if (u[1]) {
              if (t = t instanceof a ? t[0] : t, a.merge(this, a.parseHTML(
                u[1],
                t && t.nodeType ? t.ownerDocument || t : W,
                !0
              )), qt.test(u[1]) && a.isPlainObject(t))
                for (u in t)
                  z(this[u]) ? this[u](t[u]) : this.attr(u, t[u]);
              return this;
            } else
              return o = W.getElementById(u[2]), o && (this[0] = o, this.length = 1), this;
          else
            return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType)
            return this[0] = e, this.length = 1, this;
          if (z(e))
            return r.ready !== void 0 ? r.ready(e) : (
              // Execute immediately if ready is not present
              e(a)
            );
        }
        return a.makeArray(e, this);
      };
      Bn.prototype = a.fn, gn = a(W);
      var We = /^(?:parents|prev(?:Until|All))/, zn = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
      a.fn.extend({
        has: function(e) {
          var t = a(e, this), r = t.length;
          return this.filter(function() {
            for (var u = 0; u < r; u++)
              if (a.contains(this, t[u]))
                return !0;
          });
        },
        closest: function(e, t) {
          var r, u = 0, o = this.length, l = [], h = typeof e != "string" && a(e);
          if (!pn.test(e)) {
            for (; u < o; u++)
              for (r = this[u]; r && r !== t; r = r.parentNode)
                if (r.nodeType < 11 && (h ? h.index(r) > -1 : (
                  // Don't pass non-elements to jQuery#find
                  r.nodeType === 1 && a.find.matchesSelector(r, e)
                ))) {
                  l.push(r);
                  break;
                }
          }
          return this.pushStack(l.length > 1 ? a.uniqueSort(l) : l);
        },
        // Determine the position of an element within the set
        index: function(e) {
          return e ? typeof e == "string" ? M.call(a(e), this[0]) : M.call(
            this,
            // If it receives a jQuery object, the first element is used
            e.jquery ? e[0] : e
          ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
          return this.pushStack(
            a.uniqueSort(
              a.merge(this.get(), a(e, t))
            )
          );
        },
        addBack: function(e) {
          return this.add(
            e == null ? this.prevObject : this.prevObject.filter(e)
          );
        }
      });
      function mn(e, t) {
        for (; (e = e[t]) && e.nodeType !== 1; )
          ;
        return e;
      }
      a.each({
        parent: function(e) {
          var t = e.parentNode;
          return t && t.nodeType !== 11 ? t : null;
        },
        parents: function(e) {
          return ot(e, "parentNode");
        },
        parentsUntil: function(e, t, r) {
          return ot(e, "parentNode", r);
        },
        next: function(e) {
          return mn(e, "nextSibling");
        },
        prev: function(e) {
          return mn(e, "previousSibling");
        },
        nextAll: function(e) {
          return ot(e, "nextSibling");
        },
        prevAll: function(e) {
          return ot(e, "previousSibling");
        },
        nextUntil: function(e, t, r) {
          return ot(e, "nextSibling", r);
        },
        prevUntil: function(e, t, r) {
          return ot(e, "previousSibling", r);
        },
        siblings: function(e) {
          return dn((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return dn(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          d(e.contentDocument) ? e.contentDocument : (oe(e, "template") && (e = e.content || e), a.merge([], e.childNodes));
        }
      }, function(e, t) {
        a.fn[e] = function(r, u) {
          var o = a.map(this, t, r);
          return e.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (o = a.filter(u, o)), this.length > 1 && (zn[e] || a.uniqueSort(o), We.test(e) && o.reverse()), this.pushStack(o);
        };
      });
      var Ue = /[^\x20\t\r\n\f]+/g;
      function Jn(e) {
        var t = {};
        return a.each(e.match(Ue) || [], function(r, u) {
          t[u] = !0;
        }), t;
      }
      a.Callbacks = function(e) {
        e = typeof e == "string" ? Jn(e) : a.extend({}, e);
        var t, r, u, o, l = [], h = [], F = -1, v = function() {
          for (o = o || e.once, u = t = !0; h.length; F = -1)
            for (r = h.shift(); ++F < l.length; )
              l[F].apply(r[0], r[1]) === !1 && e.stopOnFalse && (F = l.length, r = !1);
          e.memory || (r = !1), t = !1, o && (r ? l = [] : l = "");
        }, w = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return l && (r && !t && (F = l.length - 1, h.push(r)), function S(N) {
              a.each(N, function(C, I) {
                z(I) ? (!e.unique || !w.has(I)) && l.push(I) : I && I.length && Ne(I) !== "string" && S(I);
              });
            }(arguments), r && !t && v()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return a.each(arguments, function(S, N) {
              for (var C; (C = a.inArray(N, l, C)) > -1; )
                l.splice(C, 1), C <= F && F--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(S) {
            return S ? a.inArray(S, l) > -1 : l.length > 0;
          },
          // Remove all callbacks from the list
          empty: function() {
            return l && (l = []), this;
          },
          // Disable .fire and .add
          // Abort any current/pending executions
          // Clear all callbacks and values
          disable: function() {
            return o = h = [], l = r = "", this;
          },
          disabled: function() {
            return !l;
          },
          // Disable .fire
          // Also disable .add unless we have memory (since it would have no effect)
          // Abort any pending executions
          lock: function() {
            return o = h = [], !r && !t && (l = r = ""), this;
          },
          locked: function() {
            return !!o;
          },
          // Call all callbacks with the given context and arguments
          fireWith: function(S, N) {
            return o || (N = N || [], N = [S, N.slice ? N.slice() : N], h.push(N), t || v()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return w.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!u;
          }
        };
        return w;
      };
      function tt(e) {
        return e;
      }
      function nt(e) {
        throw e;
      }
      function c(e, t, r, u) {
        var o;
        try {
          e && z(o = e.promise) ? o.call(e).done(t).fail(r) : e && z(o = e.then) ? o.call(e, t, r) : t.apply(void 0, [e].slice(u));
        } catch (l) {
          r.apply(void 0, [l]);
        }
      }
      a.extend({
        Deferred: function(e) {
          var t = [
            // action, add listener, callbacks,
            // ... .then handlers, argument index, [final state]
            [
              "notify",
              "progress",
              a.Callbacks("memory"),
              a.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              a.Callbacks("once memory"),
              a.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ], r = "pending", u = {
            state: function() {
              return r;
            },
            always: function() {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function(l) {
              return u.then(null, l);
            },
            // Keep pipe for back-compat
            pipe: function() {
              var l = arguments;
              return a.Deferred(function(h) {
                a.each(t, function(F, v) {
                  var w = z(l[v[4]]) && l[v[4]];
                  o[v[1]](function() {
                    var S = w && w.apply(this, arguments);
                    S && z(S.promise) ? S.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[v[0] + "With"](
                      this,
                      w ? [S] : arguments
                    );
                  });
                }), l = null;
              }).promise();
            },
            then: function(l, h, F) {
              var v = 0;
              function w(S, N, C, I) {
                return function() {
                  var J = this, ne = arguments, Q = function() {
                    var ge, ze;
                    if (!(S < v)) {
                      if (ge = C.apply(J, ne), ge === N.promise())
                        throw new TypeError("Thenable self-resolution");
                      ze = ge && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof ge == "object" || typeof ge == "function") && ge.then, z(ze) ? I ? ze.call(
                        ge,
                        w(v, N, tt, I),
                        w(v, N, nt, I)
                      ) : (v++, ze.call(
                        ge,
                        w(v, N, tt, I),
                        w(v, N, nt, I),
                        w(
                          v,
                          N,
                          tt,
                          N.notifyWith
                        )
                      )) : (C !== tt && (J = void 0, ne = [ge]), (I || N.resolveWith)(J, ne));
                    }
                  }, ye = I ? Q : function() {
                    try {
                      Q();
                    } catch (ge) {
                      a.Deferred.exceptionHook && a.Deferred.exceptionHook(
                        ge,
                        ye.error
                      ), S + 1 >= v && (C !== nt && (J = void 0, ne = [ge]), N.rejectWith(J, ne));
                    }
                  };
                  S ? ye() : (a.Deferred.getErrorHook ? ye.error = a.Deferred.getErrorHook() : a.Deferred.getStackHook && (ye.error = a.Deferred.getStackHook()), n.setTimeout(ye));
                };
              }
              return a.Deferred(function(S) {
                t[0][3].add(
                  w(
                    0,
                    S,
                    z(F) ? F : tt,
                    S.notifyWith
                  )
                ), t[1][3].add(
                  w(
                    0,
                    S,
                    z(l) ? l : tt
                  )
                ), t[2][3].add(
                  w(
                    0,
                    S,
                    z(h) ? h : nt
                  )
                );
              }).promise();
            },
            // Get a promise for this deferred
            // If obj is provided, the promise aspect is added to the object
            promise: function(l) {
              return l != null ? a.extend(l, u) : u;
            }
          }, o = {};
          return a.each(t, function(l, h) {
            var F = h[2], v = h[5];
            u[h[1]] = F.add, v && F.add(
              function() {
                r = v;
              },
              // rejected_callbacks.disable
              // fulfilled_callbacks.disable
              t[3 - l][2].disable,
              // rejected_handlers.disable
              // fulfilled_handlers.disable
              t[3 - l][3].disable,
              // progress_callbacks.lock
              t[0][2].lock,
              // progress_handlers.lock
              t[0][3].lock
            ), F.add(h[3].fire), o[h[0]] = function() {
              return o[h[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[h[0] + "With"] = F.fireWith;
          }), u.promise(o), e && e.call(o, o), o;
        },
        // Deferred helper
        when: function(e) {
          var t = arguments.length, r = t, u = Array(r), o = m.call(arguments), l = a.Deferred(), h = function(F) {
            return function(v) {
              u[F] = this, o[F] = arguments.length > 1 ? m.call(arguments) : v, --t || l.resolveWith(u, o);
            };
          };
          if (t <= 1 && (c(
            e,
            l.done(h(r)).resolve,
            l.reject,
            !t
          ), l.state() === "pending" || z(o[r] && o[r].then)))
            return l.then();
          for (; r--; )
            c(o[r], h(r), l.reject);
          return l.promise();
        }
      });
      var p = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      a.Deferred.exceptionHook = function(e, t) {
        n.console && n.console.warn && e && p.test(e.name) && n.console.warn(
          "jQuery.Deferred exception: " + e.message,
          e.stack,
          t
        );
      }, a.readyException = function(e) {
        n.setTimeout(function() {
          throw e;
        });
      };
      var y = a.Deferred();
      a.fn.ready = function(e) {
        return y.then(e).catch(function(t) {
          a.readyException(t);
        }), this;
      }, a.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: !1,
        // A counter to track how many items to wait for before
        // the ready event fires. See trac-6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(e) {
          (e === !0 ? --a.readyWait : a.isReady) || (a.isReady = !0, !(e !== !0 && --a.readyWait > 0) && y.resolveWith(W, [a]));
        }
      }), a.ready.then = y.then;
      function x() {
        W.removeEventListener("DOMContentLoaded", x), n.removeEventListener("load", x), a.ready();
      }
      W.readyState === "complete" || W.readyState !== "loading" && !W.documentElement.doScroll ? n.setTimeout(a.ready) : (W.addEventListener("DOMContentLoaded", x), n.addEventListener("load", x));
      var A = function(e, t, r, u, o, l, h) {
        var F = 0, v = e.length, w = r == null;
        if (Ne(r) === "object") {
          o = !0;
          for (F in r)
            A(e, t, F, r[F], !0, l, h);
        } else if (u !== void 0 && (o = !0, z(u) || (h = !0), w && (h ? (t.call(e, u), t = null) : (w = t, t = function(S, N, C) {
          return w.call(a(S), C);
        })), t))
          for (; F < v; F++)
            t(
              e[F],
              r,
              h ? u : u.call(e[F], F, t(e[F], r))
            );
        return o ? e : w ? t.call(e) : v ? t(e[0], r) : l;
      }, O = /^-ms-/, L = /-([a-z])/g;
      function Z(e, t) {
        return t.toUpperCase();
      }
      function ie(e) {
        return e.replace(O, "ms-").replace(L, Z);
      }
      var pe = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function he() {
        this.expando = a.expando + he.uid++;
      }
      he.uid = 1, he.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function(e, t, r) {
          var u, o = this.cache(e);
          if (typeof t == "string")
            o[ie(t)] = r;
          else
            for (u in t)
              o[ie(u)] = t[u];
          return o;
        },
        get: function(e, t) {
          return t === void 0 ? this.cache(e) : (
            // Always use camelCase key (gh-2257)
            e[this.expando] && e[this.expando][ie(t)]
          );
        },
        access: function(e, t, r) {
          return t === void 0 || t && typeof t == "string" && r === void 0 ? this.get(e, t) : (this.set(e, t, r), r !== void 0 ? r : t);
        },
        remove: function(e, t) {
          var r, u = e[this.expando];
          if (u !== void 0) {
            if (t !== void 0)
              for (Array.isArray(t) ? t = t.map(ie) : (t = ie(t), t = t in u ? [t] : t.match(Ue) || []), r = t.length; r--; )
                delete u[t[r]];
            (t === void 0 || a.isEmptyObject(u)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !a.isEmptyObject(t);
        }
      };
      var $ = new he(), ce = new he(), Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Xn = /[A-Z]/g;
      function de(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e;
      }
      function ve(e, t, r) {
        var u;
        if (r === void 0 && e.nodeType === 1)
          if (u = "data-" + t.replace(Xn, "-$&").toLowerCase(), r = e.getAttribute(u), typeof r == "string") {
            try {
              r = de(r);
            } catch {
            }
            ce.set(e, t, r);
          } else
            r = void 0;
        return r;
      }
      a.extend({
        hasData: function(e) {
          return ce.hasData(e) || $.hasData(e);
        },
        data: function(e, t, r) {
          return ce.access(e, t, r);
        },
        removeData: function(e, t) {
          ce.remove(e, t);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(e, t, r) {
          return $.access(e, t, r);
        },
        _removeData: function(e, t) {
          $.remove(e, t);
        }
      }), a.fn.extend({
        data: function(e, t) {
          var r, u, o, l = this[0], h = l && l.attributes;
          if (e === void 0) {
            if (this.length && (o = ce.get(l), l.nodeType === 1 && !$.get(l, "hasDataAttrs"))) {
              for (r = h.length; r--; )
                h[r] && (u = h[r].name, u.indexOf("data-") === 0 && (u = ie(u.slice(5)), ve(l, u, o[u])));
              $.set(l, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object" ? this.each(function() {
            ce.set(this, e);
          }) : A(this, function(F) {
            var v;
            if (l && F === void 0)
              return v = ce.get(l, e), v !== void 0 || (v = ve(l, e), v !== void 0) ? v : void 0;
            this.each(function() {
              ce.set(this, e, F);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
          return this.each(function() {
            ce.remove(this, e);
          });
        }
      }), a.extend({
        queue: function(e, t, r) {
          var u;
          if (e)
            return t = (t || "fx") + "queue", u = $.get(e, t), r && (!u || Array.isArray(r) ? u = $.access(e, t, a.makeArray(r)) : u.push(r)), u || [];
        },
        dequeue: function(e, t) {
          t = t || "fx";
          var r = a.queue(e, t), u = r.length, o = r.shift(), l = a._queueHooks(e, t), h = function() {
            a.dequeue(e, t);
          };
          o === "inprogress" && (o = r.shift(), u--), o && (t === "fx" && r.unshift("inprogress"), delete l.stop, o.call(e, h, l)), !u && l && l.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(e, t) {
          var r = t + "queueHooks";
          return $.get(e, r) || $.access(e, r, {
            empty: a.Callbacks("once memory").add(function() {
              $.remove(e, [t + "queue", r]);
            })
          });
        }
      }), a.fn.extend({
        queue: function(e, t) {
          var r = 2;
          return typeof e != "string" && (t = e, e = "fx", r--), arguments.length < r ? a.queue(this[0], e) : t === void 0 ? this : this.each(function() {
            var u = a.queue(this, e, t);
            a._queueHooks(this, e), e === "fx" && u[0] !== "inprogress" && a.dequeue(this, e);
          });
        },
        dequeue: function(e) {
          return this.each(function() {
            a.dequeue(this, e);
          });
        },
        clearQueue: function(e) {
          return this.queue(e || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(e, t) {
          var r, u = 1, o = a.Deferred(), l = this, h = this.length, F = function() {
            --u || o.resolveWith(l, [l]);
          };
          for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; h--; )
            r = $.get(l[h], e + "queueHooks"), r && r.empty && (u++, r.empty.add(F));
          return F(), o.promise(t);
        }
      });
      var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rt = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$", "i"), $e = ["Top", "Right", "Bottom", "Left"], it = W.documentElement, lt = function(e) {
        return a.contains(e.ownerDocument, e);
      }, Qn = { composed: !0 };
      it.getRootNode && (lt = function(e) {
        return a.contains(e.ownerDocument, e) || e.getRootNode(Qn) === e.ownerDocument;
      });
      var vn = function(e, t) {
        return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        lt(e) && a.css(e, "display") === "none";
      };
      function si(e, t, r, u) {
        var o, l, h = 20, F = u ? function() {
          return u.cur();
        } : function() {
          return a.css(e, t, "");
        }, v = F(), w = r && r[3] || (a.cssNumber[t] ? "" : "px"), S = e.nodeType && (a.cssNumber[t] || w !== "px" && +v) && rt.exec(a.css(e, t));
        if (S && S[3] !== w) {
          for (v = v / 2, w = w || S[3], S = +v || 1; h--; )
            a.style(e, t, S + w), (1 - l) * (1 - (l = F() / v || 0.5)) <= 0 && (h = 0), S = S / l;
          S = S * 2, a.style(e, t, S + w), r = r || [];
        }
        return r && (S = +S || +v || 0, o = r[1] ? S + (r[1] + 1) * r[2] : +r[2], u && (u.unit = w, u.start = S, u.end = o)), o;
      }
      var oi = {};
      function Oa(e) {
        var t, r = e.ownerDocument, u = e.nodeName, o = oi[u];
        return o || (t = r.body.appendChild(r.createElement(u)), o = a.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), oi[u] = o, o);
      }
      function St(e, t) {
        for (var r, u, o = [], l = 0, h = e.length; l < h; l++)
          u = e[l], u.style && (r = u.style.display, t ? (r === "none" && (o[l] = $.get(u, "display") || null, o[l] || (u.style.display = "")), u.style.display === "" && vn(u) && (o[l] = Oa(u))) : r !== "none" && (o[l] = "none", $.set(u, "display", r)));
        for (l = 0; l < h; l++)
          o[l] != null && (e[l].style.display = o[l]);
        return e;
      }
      a.fn.extend({
        show: function() {
          return St(this, !0);
        },
        hide: function() {
          return St(this);
        },
        toggle: function(e) {
          return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
            vn(this) ? a(this).show() : a(this).hide();
          });
        }
      });
      var Gt = /^(?:checkbox|radio)$/i, li = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ci = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = W.createDocumentFragment(), t = e.appendChild(W.createElement("div")), r = W.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), R.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", R.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", R.option = !!t.lastChild;
      })();
      var ke = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, R.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
      function Ce(e, t) {
        var r;
        return typeof e.getElementsByTagName < "u" ? r = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? r = e.querySelectorAll(t || "*") : r = [], t === void 0 || t && oe(e, t) ? a.merge([e], r) : r;
      }
      function Yn(e, t) {
        for (var r = 0, u = e.length; r < u; r++)
          $.set(
            e[r],
            "globalEval",
            !t || $.get(t[r], "globalEval")
          );
      }
      var Ma = /<|&#?\w+;/;
      function fi(e, t, r, u, o) {
        for (var l, h, F, v, w, S, N = t.createDocumentFragment(), C = [], I = 0, J = e.length; I < J; I++)
          if (l = e[I], l || l === 0)
            if (Ne(l) === "object")
              a.merge(C, l.nodeType ? [l] : l);
            else if (!Ma.test(l))
              C.push(t.createTextNode(l));
            else {
              for (h = h || N.appendChild(t.createElement("div")), F = (li.exec(l) || ["", ""])[1].toLowerCase(), v = ke[F] || ke._default, h.innerHTML = v[1] + a.htmlPrefilter(l) + v[2], S = v[0]; S--; )
                h = h.lastChild;
              a.merge(C, h.childNodes), h = N.firstChild, h.textContent = "";
            }
        for (N.textContent = "", I = 0; l = C[I++]; ) {
          if (u && a.inArray(l, u) > -1) {
            o && o.push(l);
            continue;
          }
          if (w = lt(l), h = Ce(N.appendChild(l), "script"), w && Yn(h), r)
            for (S = 0; l = h[S++]; )
              ci.test(l.type || "") && r.push(l);
        }
        return N;
      }
      var hi = /^([^.]*)(?:\.(.+)|)/;
      function At() {
        return !0;
      }
      function Ht() {
        return !1;
      }
      function Kn(e, t, r, u, o, l) {
        var h, F;
        if (typeof t == "object") {
          typeof r != "string" && (u = u || r, r = void 0);
          for (F in t)
            Kn(e, F, r, u, t[F], l);
          return e;
        }
        if (u == null && o == null ? (o = r, u = r = void 0) : o == null && (typeof r == "string" ? (o = u, u = void 0) : (o = u, u = r, r = void 0)), o === !1)
          o = Ht;
        else if (!o)
          return e;
        return l === 1 && (h = o, o = function(v) {
          return a().off(v), h.apply(this, arguments);
        }, o.guid = h.guid || (h.guid = a.guid++)), e.each(function() {
          a.event.add(this, t, o, u, r);
        });
      }
      a.event = {
        global: {},
        add: function(e, t, r, u, o) {
          var l, h, F, v, w, S, N, C, I, J, ne, Q = $.get(e);
          if (pe(e))
            for (r.handler && (l = r, r = l.handler, o = l.selector), o && a.find.matchesSelector(it, o), r.guid || (r.guid = a.guid++), (v = Q.events) || (v = Q.events = /* @__PURE__ */ Object.create(null)), (h = Q.handle) || (h = Q.handle = function(ye) {
              return typeof a < "u" && a.event.triggered !== ye.type ? a.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(Ue) || [""], w = t.length; w--; )
              F = hi.exec(t[w]) || [], I = ne = F[1], J = (F[2] || "").split(".").sort(), I && (N = a.event.special[I] || {}, I = (o ? N.delegateType : N.bindType) || I, N = a.event.special[I] || {}, S = a.extend({
                type: I,
                origType: ne,
                data: u,
                handler: r,
                guid: r.guid,
                selector: o,
                needsContext: o && a.expr.match.needsContext.test(o),
                namespace: J.join(".")
              }, l), (C = v[I]) || (C = v[I] = [], C.delegateCount = 0, (!N.setup || N.setup.call(e, u, J, h) === !1) && e.addEventListener && e.addEventListener(I, h)), N.add && (N.add.call(e, S), S.handler.guid || (S.handler.guid = r.guid)), o ? C.splice(C.delegateCount++, 0, S) : C.push(S), a.event.global[I] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, r, u, o) {
          var l, h, F, v, w, S, N, C, I, J, ne, Q = $.hasData(e) && $.get(e);
          if (!(!Q || !(v = Q.events))) {
            for (t = (t || "").match(Ue) || [""], w = t.length; w--; ) {
              if (F = hi.exec(t[w]) || [], I = ne = F[1], J = (F[2] || "").split(".").sort(), !I) {
                for (I in v)
                  a.event.remove(e, I + t[w], r, u, !0);
                continue;
              }
              for (N = a.event.special[I] || {}, I = (u ? N.delegateType : N.bindType) || I, C = v[I] || [], F = F[2] && new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = l = C.length; l--; )
                S = C[l], (o || ne === S.origType) && (!r || r.guid === S.guid) && (!F || F.test(S.namespace)) && (!u || u === S.selector || u === "**" && S.selector) && (C.splice(l, 1), S.selector && C.delegateCount--, N.remove && N.remove.call(e, S));
              h && !C.length && ((!N.teardown || N.teardown.call(e, J, Q.handle) === !1) && a.removeEvent(e, I, Q.handle), delete v[I]);
            }
            a.isEmptyObject(v) && $.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, r, u, o, l, h, F = new Array(arguments.length), v = a.event.fix(e), w = ($.get(this, "events") || /* @__PURE__ */ Object.create(null))[v.type] || [], S = a.event.special[v.type] || {};
          for (F[0] = v, t = 1; t < arguments.length; t++)
            F[t] = arguments[t];
          if (v.delegateTarget = this, !(S.preDispatch && S.preDispatch.call(this, v) === !1)) {
            for (h = a.event.handlers.call(this, v, w), t = 0; (o = h[t++]) && !v.isPropagationStopped(); )
              for (v.currentTarget = o.elem, r = 0; (l = o.handlers[r++]) && !v.isImmediatePropagationStopped(); )
                (!v.rnamespace || l.namespace === !1 || v.rnamespace.test(l.namespace)) && (v.handleObj = l, v.data = l.data, u = ((a.event.special[l.origType] || {}).handle || l.handler).apply(o.elem, F), u !== void 0 && (v.result = u) === !1 && (v.preventDefault(), v.stopPropagation()));
            return S.postDispatch && S.postDispatch.call(this, v), v.result;
          }
        },
        handlers: function(e, t) {
          var r, u, o, l, h, F = [], v = t.delegateCount, w = e.target;
          if (v && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          w.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(e.type === "click" && e.button >= 1)) {
            for (; w !== this; w = w.parentNode || this)
              if (w.nodeType === 1 && !(e.type === "click" && w.disabled === !0)) {
                for (l = [], h = {}, r = 0; r < v; r++)
                  u = t[r], o = u.selector + " ", h[o] === void 0 && (h[o] = u.needsContext ? a(o, this).index(w) > -1 : a.find(o, this, null, [w]).length), h[o] && l.push(u);
                l.length && F.push({ elem: w, handlers: l });
              }
          }
          return w = this, v < t.length && F.push({ elem: w, handlers: t.slice(v) }), F;
        },
        addProp: function(e, t) {
          Object.defineProperty(a.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: z(t) ? function() {
              if (this.originalEvent)
                return t(this.originalEvent);
            } : function() {
              if (this.originalEvent)
                return this.originalEvent[e];
            },
            set: function(r) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r
              });
            }
          });
        },
        fix: function(e) {
          return e[a.expando] ? e : new a.Event(e);
        },
        special: {
          load: {
            // Prevent triggered image.load events from bubbling to window.load
            noBubble: !0
          },
          click: {
            // Utilize native event to ensure correct state for checkable inputs
            setup: function(e) {
              var t = this || e;
              return Gt.test(t.type) && t.click && oe(t, "input") && yn(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return Gt.test(t.type) && t.click && oe(t, "input") && yn(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return Gt.test(t.type) && t.click && oe(t, "input") && $.get(t, "click") || oe(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function yn(e, t, r) {
        if (!r) {
          $.get(e, t) === void 0 && a.event.add(e, t, At);
          return;
        }
        $.set(e, t, !1), a.event.add(e, t, {
          namespace: !1,
          handler: function(u) {
            var o, l = $.get(this, t);
            if (u.isTrigger & 1 && this[t]) {
              if (l)
                (a.event.special[t] || {}).delegateType && u.stopPropagation();
              else if (l = m.call(arguments), $.set(this, t, l), this[t](), o = $.get(this, t), $.set(this, t, !1), l !== o)
                return u.stopImmediatePropagation(), u.preventDefault(), o;
            } else
              l && ($.set(this, t, a.event.trigger(
                l[0],
                l.slice(1),
                this
              )), u.stopPropagation(), u.isImmediatePropagationStopped = At);
          }
        });
      }
      a.removeEvent = function(e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r);
      }, a.Event = function(e, t) {
        if (!(this instanceof a.Event))
          return new a.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
        e.returnValue === !1 ? At : Ht, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && a.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[a.expando] = !0;
      }, a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: Ht,
        isPropagationStopped: Ht,
        isImmediatePropagationStopped: Ht,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = At, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = At, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = At, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
        }
      }, a.each({
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
        which: !0
      }, a.event.addProp), a.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
        function r(u) {
          if (W.documentMode) {
            var o = $.get(this, "handle"), l = a.event.fix(u);
            l.type = u.type === "focusin" ? "focus" : "blur", l.isSimulated = !0, o(u), l.target === l.currentTarget && o(l);
          } else
            a.event.simulate(
              t,
              u.target,
              a.event.fix(u)
            );
        }
        a.event.special[e] = {
          // Utilize native event if possible so blur/focus sequence is correct
          setup: function() {
            var u;
            if (yn(this, e, !0), W.documentMode)
              u = $.get(this, t), u || this.addEventListener(t, r), $.set(this, t, (u || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return yn(this, e), !0;
          },
          teardown: function() {
            var u;
            if (W.documentMode)
              u = $.get(this, t) - 1, u ? $.set(this, t, u) : (this.removeEventListener(t, r), $.remove(this, t));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(u) {
            return $.get(u.target, e);
          },
          delegateType: t
        }, a.event.special[t] = {
          setup: function() {
            var u = this.ownerDocument || this.document || this, o = W.documentMode ? this : u, l = $.get(o, t);
            l || (W.documentMode ? this.addEventListener(t, r) : u.addEventListener(e, r, !0)), $.set(o, t, (l || 0) + 1);
          },
          teardown: function() {
            var u = this.ownerDocument || this.document || this, o = W.documentMode ? this : u, l = $.get(o, t) - 1;
            l ? $.set(o, t, l) : (W.documentMode ? this.removeEventListener(t, r) : u.removeEventListener(e, r, !0), $.remove(o, t));
          }
        };
      }), a.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      }, function(e, t) {
        a.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function(r) {
            var u, o = this, l = r.relatedTarget, h = r.handleObj;
            return (!l || l !== o && !a.contains(o, l)) && (r.type = h.origType, u = h.handler.apply(this, arguments), r.type = t), u;
          }
        };
      }), a.fn.extend({
        on: function(e, t, r, u) {
          return Kn(this, e, t, r, u);
        },
        one: function(e, t, r, u) {
          return Kn(this, e, t, r, u, 1);
        },
        off: function(e, t, r) {
          var u, o;
          if (e && e.preventDefault && e.handleObj)
            return u = e.handleObj, a(e.delegateTarget).off(
              u.namespace ? u.origType + "." + u.namespace : u.origType,
              u.selector,
              u.handler
            ), this;
          if (typeof e == "object") {
            for (o in e)
              this.off(o, t, e[o]);
            return this;
          }
          return (t === !1 || typeof t == "function") && (r = t, t = void 0), r === !1 && (r = Ht), this.each(function() {
            a.event.remove(this, e, r, t);
          });
        }
      });
      var Ia = /<script|<style|<link/i, Pa = /checked\s*(?:[^=]|=\s*.checked.)/i, Ua = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function di(e, t) {
        return oe(e, "table") && oe(t.nodeType !== 11 ? t : t.firstChild, "tr") && a(e).children("tbody")[0] || e;
      }
      function $a(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function ka(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function pi(e, t) {
        var r, u, o, l, h, F, v;
        if (t.nodeType === 1) {
          if ($.hasData(e) && (l = $.get(e), v = l.events, v)) {
            $.remove(t, "handle events");
            for (o in v)
              for (r = 0, u = v[o].length; r < u; r++)
                a.event.add(t, o, v[o][r]);
          }
          ce.hasData(e) && (h = ce.access(e), F = a.extend({}, h), ce.set(t, F));
        }
      }
      function Va(e, t) {
        var r = t.nodeName.toLowerCase();
        r === "input" && Gt.test(e.type) ? t.checked = e.checked : (r === "input" || r === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Nt(e, t, r, u) {
        t = _(t);
        var o, l, h, F, v, w, S = 0, N = e.length, C = N - 1, I = t[0], J = z(I);
        if (J || N > 1 && typeof I == "string" && !R.checkClone && Pa.test(I))
          return e.each(function(ne) {
            var Q = e.eq(ne);
            J && (t[0] = I.call(this, ne, Q.html())), Nt(Q, t, r, u);
          });
        if (N && (o = fi(t, e[0].ownerDocument, !1, e, u), l = o.firstChild, o.childNodes.length === 1 && (o = l), l || u)) {
          for (h = a.map(Ce(o, "script"), $a), F = h.length; S < N; S++)
            v = o, S !== C && (v = a.clone(v, !0, !0), F && a.merge(h, Ce(v, "script"))), r.call(e[S], v, S);
          if (F)
            for (w = h[h.length - 1].ownerDocument, a.map(h, ka), S = 0; S < F; S++)
              v = h[S], ci.test(v.type || "") && !$.access(v, "globalEval") && a.contains(w, v) && (v.src && (v.type || "").toLowerCase() !== "module" ? a._evalUrl && !v.noModule && a._evalUrl(v.src, {
                nonce: v.nonce || v.getAttribute("nonce")
              }, w) : Te(v.textContent.replace(Ua, ""), v, w));
        }
        return e;
      }
      function gi(e, t, r) {
        for (var u, o = t ? a.filter(t, e) : e, l = 0; (u = o[l]) != null; l++)
          !r && u.nodeType === 1 && a.cleanData(Ce(u)), u.parentNode && (r && lt(u) && Yn(Ce(u, "script")), u.parentNode.removeChild(u));
        return e;
      }
      a.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, r) {
          var u, o, l, h, F = e.cloneNode(!0), v = lt(e);
          if (!R.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !a.isXMLDoc(e))
            for (h = Ce(F), l = Ce(e), u = 0, o = l.length; u < o; u++)
              Va(l[u], h[u]);
          if (t)
            if (r)
              for (l = l || Ce(e), h = h || Ce(F), u = 0, o = l.length; u < o; u++)
                pi(l[u], h[u]);
            else
              pi(e, F);
          return h = Ce(F, "script"), h.length > 0 && Yn(h, !v && Ce(e, "script")), F;
        },
        cleanData: function(e) {
          for (var t, r, u, o = a.event.special, l = 0; (r = e[l]) !== void 0; l++)
            if (pe(r)) {
              if (t = r[$.expando]) {
                if (t.events)
                  for (u in t.events)
                    o[u] ? a.event.remove(r, u) : a.removeEvent(r, u, t.handle);
                r[$.expando] = void 0;
              }
              r[ce.expando] && (r[ce.expando] = void 0);
            }
        }
      }), a.fn.extend({
        detach: function(e) {
          return gi(this, e, !0);
        },
        remove: function(e) {
          return gi(this, e);
        },
        text: function(e) {
          return A(this, function(t) {
            return t === void 0 ? a.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Nt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = di(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Nt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = di(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return Nt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return Nt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (a.cleanData(Ce(e, !1)), e.textContent = "");
          return this;
        },
        clone: function(e, t) {
          return e = e ?? !1, t = t ?? e, this.map(function() {
            return a.clone(this, e, t);
          });
        },
        html: function(e) {
          return A(this, function(t) {
            var r = this[0] || {}, u = 0, o = this.length;
            if (t === void 0 && r.nodeType === 1)
              return r.innerHTML;
            if (typeof t == "string" && !Ia.test(t) && !ke[(li.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = a.htmlPrefilter(t);
              try {
                for (; u < o; u++)
                  r = this[u] || {}, r.nodeType === 1 && (a.cleanData(Ce(r, !1)), r.innerHTML = t);
                r = 0;
              } catch {
              }
            }
            r && this.empty().append(t);
          }, null, e, arguments.length);
        },
        replaceWith: function() {
          var e = [];
          return Nt(this, arguments, function(t) {
            var r = this.parentNode;
            a.inArray(this, e) < 0 && (a.cleanData(Ce(this)), r && r.replaceChild(t, this));
          }, e);
        }
      }), a.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      }, function(e, t) {
        a.fn[e] = function(r) {
          for (var u, o = [], l = a(r), h = l.length - 1, F = 0; F <= h; F++)
            u = F === h ? this : this.clone(!0), a(l[F])[t](u), D.apply(o, u.get());
          return this.pushStack(o);
        };
      });
      var Zn = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$", "i"), er = /^--/, Fn = function(e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = n), t.getComputedStyle(e);
      }, mi = function(e, t, r) {
        var u, o, l = {};
        for (o in t)
          l[o] = e.style[o], e.style[o] = t[o];
        u = r.call(e);
        for (o in t)
          e.style[o] = l[o];
        return u;
      }, La = new RegExp($e.join("|"), "i");
      (function() {
        function e() {
          if (w) {
            v.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", w.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(v).appendChild(w);
            var S = n.getComputedStyle(w);
            r = S.top !== "1%", F = t(S.marginLeft) === 12, w.style.right = "60%", l = t(S.right) === 36, u = t(S.width) === 36, w.style.position = "absolute", o = t(w.offsetWidth / 3) === 12, it.removeChild(v), w = null;
          }
        }
        function t(S) {
          return Math.round(parseFloat(S));
        }
        var r, u, o, l, h, F, v = W.createElement("div"), w = W.createElement("div");
        w.style && (w.style.backgroundClip = "content-box", w.cloneNode(!0).style.backgroundClip = "", R.clearCloneStyle = w.style.backgroundClip === "content-box", a.extend(R, {
          boxSizingReliable: function() {
            return e(), u;
          },
          pixelBoxStyles: function() {
            return e(), l;
          },
          pixelPosition: function() {
            return e(), r;
          },
          reliableMarginLeft: function() {
            return e(), F;
          },
          scrollboxSize: function() {
            return e(), o;
          },
          // Support: IE 9 - 11+, Edge 15 - 18+
          // IE/Edge misreport `getComputedStyle` of table rows with width/height
          // set in CSS while `offset*` properties report correct values.
          // Behavior in IE 9 is more subtle than in newer versions & it passes
          // some versions of this test; make sure not to make it pass there!
          //
          // Support: Firefox 70+
          // Only Firefox includes border widths
          // in computed dimensions. (gh-4529)
          reliableTrDimensions: function() {
            var S, N, C, I;
            return h == null && (S = W.createElement("table"), N = W.createElement("tr"), C = W.createElement("div"), S.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", N.style.cssText = "box-sizing:content-box;border:1px solid", N.style.height = "1px", C.style.height = "9px", C.style.display = "block", it.appendChild(S).appendChild(N).appendChild(C), I = n.getComputedStyle(N), h = parseInt(I.height, 10) + parseInt(I.borderTopWidth, 10) + parseInt(I.borderBottomWidth, 10) === N.offsetHeight, it.removeChild(S)), h;
          }
        }));
      })();
      function jt(e, t, r) {
        var u, o, l, h, F = er.test(t), v = e.style;
        return r = r || Fn(e), r && (h = r.getPropertyValue(t) || r[t], F && h && (h = h.replace(vt, "$1") || void 0), h === "" && !lt(e) && (h = a.style(e, t)), !R.pixelBoxStyles() && Zn.test(h) && La.test(t) && (u = v.width, o = v.minWidth, l = v.maxWidth, v.minWidth = v.maxWidth = v.width = h, h = r.width, v.width = u, v.minWidth = o, v.maxWidth = l)), h !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          h + ""
        ) : h;
      }
      function vi(e, t) {
        return {
          get: function() {
            if (e()) {
              delete this.get;
              return;
            }
            return (this.get = t).apply(this, arguments);
          }
        };
      }
      var yi = ["Webkit", "Moz", "ms"], Fi = W.createElement("div").style, bi = {};
      function qa(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), r = yi.length; r--; )
          if (e = yi[r] + t, e in Fi)
            return e;
      }
      function tr(e) {
        var t = a.cssProps[e] || bi[e];
        return t || (e in Fi ? e : bi[e] = qa(e) || e);
      }
      var Ra = /^(none|table(?!-c[ea]).+)/, Ga = { position: "absolute", visibility: "hidden", display: "block" }, wi = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function _i(e, t, r) {
        var u = rt.exec(t);
        return u ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, u[2] - (r || 0)) + (u[3] || "px")
        ) : t;
      }
      function nr(e, t, r, u, o, l) {
        var h = t === "width" ? 1 : 0, F = 0, v = 0, w = 0;
        if (r === (u ? "border" : "content"))
          return 0;
        for (; h < 4; h += 2)
          r === "margin" && (w += a.css(e, r + $e[h], !0, o)), u ? (r === "content" && (v -= a.css(e, "padding" + $e[h], !0, o)), r !== "margin" && (v -= a.css(e, "border" + $e[h] + "Width", !0, o))) : (v += a.css(e, "padding" + $e[h], !0, o), r !== "padding" ? v += a.css(e, "border" + $e[h] + "Width", !0, o) : F += a.css(e, "border" + $e[h] + "Width", !0, o));
        return !u && l >= 0 && (v += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - l - v - F - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), v + w;
      }
      function xi(e, t, r) {
        var u = Fn(e), o = !R.boxSizingReliable() || r, l = o && a.css(e, "boxSizing", !1, u) === "border-box", h = l, F = jt(e, t, u), v = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Zn.test(F)) {
          if (!r)
            return F;
          F = "auto";
        }
        return (!R.boxSizingReliable() && l || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !R.reliableTrDimensions() && oe(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        F === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(F) && a.css(e, "display", !1, u) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (l = a.css(e, "boxSizing", !1, u) === "border-box", h = v in e, h && (F = e[v])), F = parseFloat(F) || 0, F + nr(
          e,
          t,
          r || (l ? "border" : "content"),
          h,
          u,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          F
        ) + "px";
      }
      a.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
          opacity: {
            get: function(e, t) {
              if (t) {
                var r = jt(e, "opacity");
                return r === "" ? "1" : r;
              }
            }
          }
        },
        // Don't automatically add "px" to these possibly-unitless properties
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
          // SVG-related
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},
        // Get and set the style property on a DOM Node
        style: function(e, t, r, u) {
          if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
            var o, l, h, F = ie(t), v = er.test(t), w = e.style;
            if (v || (t = tr(F)), h = a.cssHooks[t] || a.cssHooks[F], r !== void 0) {
              if (l = typeof r, l === "string" && (o = rt.exec(r)) && o[1] && (r = si(e, t, o), l = "number"), r == null || r !== r)
                return;
              l === "number" && !v && (r += o && o[3] || (a.cssNumber[F] ? "" : "px")), !R.clearCloneStyle && r === "" && t.indexOf("background") === 0 && (w[t] = "inherit"), (!h || !("set" in h) || (r = h.set(e, r, u)) !== void 0) && (v ? w.setProperty(t, r) : w[t] = r);
            } else
              return h && "get" in h && (o = h.get(e, !1, u)) !== void 0 ? o : w[t];
          }
        },
        css: function(e, t, r, u) {
          var o, l, h, F = ie(t), v = er.test(t);
          return v || (t = tr(F)), h = a.cssHooks[t] || a.cssHooks[F], h && "get" in h && (o = h.get(e, !0, r)), o === void 0 && (o = jt(e, t, u)), o === "normal" && t in wi && (o = wi[t]), r === "" || r ? (l = parseFloat(o), r === !0 || isFinite(l) ? l || 0 : o) : o;
        }
      }), a.each(["height", "width"], function(e, t) {
        a.cssHooks[t] = {
          get: function(r, u, o) {
            if (u)
              return Ra.test(a.css(r, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!r.getClientRects().length || !r.getBoundingClientRect().width) ? mi(r, Ga, function() {
                return xi(r, t, o);
              }) : xi(r, t, o);
          },
          set: function(r, u, o) {
            var l, h = Fn(r), F = !R.scrollboxSize() && h.position === "absolute", v = F || o, w = v && a.css(r, "boxSizing", !1, h) === "border-box", S = o ? nr(
              r,
              t,
              o,
              w,
              h
            ) : 0;
            return w && F && (S -= Math.ceil(
              r["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(h[t]) - nr(r, t, "border", !1, h) - 0.5
            )), S && (l = rt.exec(u)) && (l[3] || "px") !== "px" && (r.style[t] = u, u = a.css(r, t)), _i(r, u, S);
          }
        };
      }), a.cssHooks.marginLeft = vi(
        R.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(jt(e, "marginLeft")) || e.getBoundingClientRect().left - mi(e, { marginLeft: 0 }, function() {
              return e.getBoundingClientRect().left;
            })) + "px";
        }
      ), a.each({
        margin: "",
        padding: "",
        border: "Width"
      }, function(e, t) {
        a.cssHooks[e + t] = {
          expand: function(r) {
            for (var u = 0, o = {}, l = typeof r == "string" ? r.split(" ") : [r]; u < 4; u++)
              o[e + $e[u] + t] = l[u] || l[u - 2] || l[0];
            return o;
          }
        }, e !== "margin" && (a.cssHooks[e + t].set = _i);
      }), a.fn.extend({
        css: function(e, t) {
          return A(this, function(r, u, o) {
            var l, h, F = {}, v = 0;
            if (Array.isArray(u)) {
              for (l = Fn(r), h = u.length; v < h; v++)
                F[u[v]] = a.css(r, u[v], !1, l);
              return F;
            }
            return o !== void 0 ? a.style(r, u, o) : a.css(r, u);
          }, e, t, arguments.length > 1);
        }
      });
      function Ee(e, t, r, u, o) {
        return new Ee.prototype.init(e, t, r, u, o);
      }
      a.Tween = Ee, Ee.prototype = {
        constructor: Ee,
        init: function(e, t, r, u, o, l) {
          this.elem = e, this.prop = r, this.easing = o || a.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = l || (a.cssNumber[r] ? "" : "px");
        },
        cur: function() {
          var e = Ee.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ee.propHooks._default.get(this);
        },
        run: function(e) {
          var t, r = Ee.propHooks[this.prop];
          return this.options.duration ? this.pos = t = a.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ee.propHooks._default.set(this), this;
        }
      }, Ee.prototype.init.prototype = Ee.prototype, Ee.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = a.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
          },
          set: function(e) {
            a.fx.step[e.prop] ? a.fx.step[e.prop](e) : e.elem.nodeType === 1 && (a.cssHooks[e.prop] || e.elem.style[tr(e.prop)] != null) ? a.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          }
        }
      }, Ee.propHooks.scrollTop = Ee.propHooks.scrollLeft = {
        set: function(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }, a.easing = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
      }, a.fx = Ee.prototype.init, a.fx.step = {};
      var Ot, bn, ja = /^(?:toggle|show|hide)$/, Wa = /queueHooks$/;
      function rr() {
        bn && (W.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, a.fx.interval), a.fx.tick());
      }
      function Ti() {
        return n.setTimeout(function() {
          Ot = void 0;
        }), Ot = Date.now();
      }
      function wn(e, t) {
        var r, u = 0, o = { height: e };
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
          r = $e[u], o["margin" + r] = o["padding" + r] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function Ci(e, t, r) {
        for (var u, o = (Re.tweeners[t] || []).concat(Re.tweeners["*"]), l = 0, h = o.length; l < h; l++)
          if (u = o[l].call(r, t, e))
            return u;
      }
      function Ba(e, t, r) {
        var u, o, l, h, F, v, w, S, N = "width" in t || "height" in t, C = this, I = {}, J = e.style, ne = e.nodeType && vn(e), Q = $.get(e, "fxshow");
        r.queue || (h = a._queueHooks(e, "fx"), h.unqueued == null && (h.unqueued = 0, F = h.empty.fire, h.empty.fire = function() {
          h.unqueued || F();
        }), h.unqueued++, C.always(function() {
          C.always(function() {
            h.unqueued--, a.queue(e, "fx").length || h.empty.fire();
          });
        }));
        for (u in t)
          if (o = t[u], ja.test(o)) {
            if (delete t[u], l = l || o === "toggle", o === (ne ? "hide" : "show"))
              if (o === "show" && Q && Q[u] !== void 0)
                ne = !0;
              else
                continue;
            I[u] = Q && Q[u] || a.style(e, u);
          }
        if (v = !a.isEmptyObject(t), !(!v && a.isEmptyObject(I))) {
          N && e.nodeType === 1 && (r.overflow = [J.overflow, J.overflowX, J.overflowY], w = Q && Q.display, w == null && (w = $.get(e, "display")), S = a.css(e, "display"), S === "none" && (w ? S = w : (St([e], !0), w = e.style.display || w, S = a.css(e, "display"), St([e]))), (S === "inline" || S === "inline-block" && w != null) && a.css(e, "float") === "none" && (v || (C.done(function() {
            J.display = w;
          }), w == null && (S = J.display, w = S === "none" ? "" : S)), J.display = "inline-block")), r.overflow && (J.overflow = "hidden", C.always(function() {
            J.overflow = r.overflow[0], J.overflowX = r.overflow[1], J.overflowY = r.overflow[2];
          })), v = !1;
          for (u in I)
            v || (Q ? "hidden" in Q && (ne = Q.hidden) : Q = $.access(e, "fxshow", { display: w }), l && (Q.hidden = !ne), ne && St([e], !0), C.done(function() {
              ne || St([e]), $.remove(e, "fxshow");
              for (u in I)
                a.style(e, u, I[u]);
            })), v = Ci(ne ? Q[u] : 0, u, C), u in Q || (Q[u] = v.start, ne && (v.end = v.start, v.start = 0));
        }
      }
      function za(e, t) {
        var r, u, o, l, h;
        for (r in e)
          if (u = ie(r), o = t[u], l = e[r], Array.isArray(l) && (o = l[1], l = e[r] = l[0]), r !== u && (e[u] = l, delete e[r]), h = a.cssHooks[u], h && "expand" in h) {
            l = h.expand(l), delete e[u];
            for (r in l)
              r in e || (e[r] = l[r], t[r] = o);
          } else
            t[u] = o;
      }
      function Re(e, t, r) {
        var u, o, l = 0, h = Re.prefilters.length, F = a.Deferred().always(function() {
          delete v.elem;
        }), v = function() {
          if (o)
            return !1;
          for (var N = Ot || Ti(), C = Math.max(0, w.startTime + w.duration - N), I = C / w.duration || 0, J = 1 - I, ne = 0, Q = w.tweens.length; ne < Q; ne++)
            w.tweens[ne].run(J);
          return F.notifyWith(e, [w, J, C]), J < 1 && Q ? C : (Q || F.notifyWith(e, [w, 1, 0]), F.resolveWith(e, [w]), !1);
        }, w = F.promise({
          elem: e,
          props: a.extend({}, t),
          opts: a.extend(!0, {
            specialEasing: {},
            easing: a.easing._default
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: Ot || Ti(),
          duration: r.duration,
          tweens: [],
          createTween: function(N, C) {
            var I = a.Tween(
              e,
              w.opts,
              N,
              C,
              w.opts.specialEasing[N] || w.opts.easing
            );
            return w.tweens.push(I), I;
          },
          stop: function(N) {
            var C = 0, I = N ? w.tweens.length : 0;
            if (o)
              return this;
            for (o = !0; C < I; C++)
              w.tweens[C].run(1);
            return N ? (F.notifyWith(e, [w, 1, 0]), F.resolveWith(e, [w, N])) : F.rejectWith(e, [w, N]), this;
          }
        }), S = w.props;
        for (za(S, w.opts.specialEasing); l < h; l++)
          if (u = Re.prefilters[l].call(w, e, S, w.opts), u)
            return z(u.stop) && (a._queueHooks(w.elem, w.opts.queue).stop = u.stop.bind(u)), u;
        return a.map(S, Ci, w), z(w.opts.start) && w.opts.start.call(e, w), w.progress(w.opts.progress).done(w.opts.done, w.opts.complete).fail(w.opts.fail).always(w.opts.always), a.fx.timer(
          a.extend(v, {
            elem: e,
            anim: w,
            queue: w.opts.queue
          })
        ), w;
      }
      a.Animation = a.extend(Re, {
        tweeners: {
          "*": [function(e, t) {
            var r = this.createTween(e, t);
            return si(r.elem, e, rt.exec(t), r), r;
          }]
        },
        tweener: function(e, t) {
          z(e) ? (t = e, e = ["*"]) : e = e.match(Ue);
          for (var r, u = 0, o = e.length; u < o; u++)
            r = e[u], Re.tweeners[r] = Re.tweeners[r] || [], Re.tweeners[r].unshift(t);
        },
        prefilters: [Ba],
        prefilter: function(e, t) {
          t ? Re.prefilters.unshift(e) : Re.prefilters.push(e);
        }
      }), a.speed = function(e, t, r) {
        var u = e && typeof e == "object" ? a.extend({}, e) : {
          complete: r || !r && t || z(e) && e,
          duration: e,
          easing: r && t || t && !z(t) && t
        };
        return a.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration in a.fx.speeds ? u.duration = a.fx.speeds[u.duration] : u.duration = a.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
          z(u.old) && u.old.call(this), u.queue && a.dequeue(this, u.queue);
        }, u;
      }, a.fn.extend({
        fadeTo: function(e, t, r, u) {
          return this.filter(vn).css("opacity", 0).show().end().animate({ opacity: t }, e, r, u);
        },
        animate: function(e, t, r, u) {
          var o = a.isEmptyObject(e), l = a.speed(t, r, u), h = function() {
            var F = Re(this, a.extend({}, e), l);
            (o || $.get(this, "finish")) && F.stop(!0);
          };
          return h.finish = h, o || l.queue === !1 ? this.each(h) : this.queue(l.queue, h);
        },
        stop: function(e, t, r) {
          var u = function(o) {
            var l = o.stop;
            delete o.stop, l(r);
          };
          return typeof e != "string" && (r = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var o = !0, l = e != null && e + "queueHooks", h = a.timers, F = $.get(this);
            if (l)
              F[l] && F[l].stop && u(F[l]);
            else
              for (l in F)
                F[l] && F[l].stop && Wa.test(l) && u(F[l]);
            for (l = h.length; l--; )
              h[l].elem === this && (e == null || h[l].queue === e) && (h[l].anim.stop(r), o = !1, h.splice(l, 1));
            (o || !r) && a.dequeue(this, e);
          });
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, r = $.get(this), u = r[e + "queue"], o = r[e + "queueHooks"], l = a.timers, h = u ? u.length : 0;
            for (r.finish = !0, a.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = l.length; t--; )
              l[t].elem === this && l[t].queue === e && (l[t].anim.stop(!0), l.splice(t, 1));
            for (t = 0; t < h; t++)
              u[t] && u[t].finish && u[t].finish.call(this);
            delete r.finish;
          });
        }
      }), a.each(["toggle", "show", "hide"], function(e, t) {
        var r = a.fn[t];
        a.fn[t] = function(u, o, l) {
          return u == null || typeof u == "boolean" ? r.apply(this, arguments) : this.animate(wn(t, !0), u, o, l);
        };
      }), a.each({
        slideDown: wn("show"),
        slideUp: wn("hide"),
        slideToggle: wn("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(e, t) {
        a.fn[e] = function(r, u, o) {
          return this.animate(t, r, u, o);
        };
      }), a.timers = [], a.fx.tick = function() {
        var e, t = 0, r = a.timers;
        for (Ot = Date.now(); t < r.length; t++)
          e = r[t], !e() && r[t] === e && r.splice(t--, 1);
        r.length || a.fx.stop(), Ot = void 0;
      }, a.fx.timer = function(e) {
        a.timers.push(e), a.fx.start();
      }, a.fx.interval = 13, a.fx.start = function() {
        bn || (bn = !0, rr());
      }, a.fx.stop = function() {
        bn = null;
      }, a.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
      }, a.fn.delay = function(e, t) {
        return e = a.fx && a.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(r, u) {
          var o = n.setTimeout(r, e);
          u.stop = function() {
            n.clearTimeout(o);
          };
        });
      }, function() {
        var e = W.createElement("input"), t = W.createElement("select"), r = t.appendChild(W.createElement("option"));
        e.type = "checkbox", R.checkOn = e.value !== "", R.optSelected = r.selected, e = W.createElement("input"), e.value = "t", e.type = "radio", R.radioValue = e.value === "t";
      }();
      var Ei, Wt = a.expr.attrHandle;
      a.fn.extend({
        attr: function(e, t) {
          return A(this, a.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
          return this.each(function() {
            a.removeAttr(this, e);
          });
        }
      }), a.extend({
        attr: function(e, t, r) {
          var u, o, l = e.nodeType;
          if (!(l === 3 || l === 8 || l === 2)) {
            if (typeof e.getAttribute > "u")
              return a.prop(e, t, r);
            if ((l !== 1 || !a.isXMLDoc(e)) && (o = a.attrHooks[t.toLowerCase()] || (a.expr.match.bool.test(t) ? Ei : void 0)), r !== void 0) {
              if (r === null) {
                a.removeAttr(e, t);
                return;
              }
              return o && "set" in o && (u = o.set(e, r, t)) !== void 0 ? u : (e.setAttribute(t, r + ""), r);
            }
            return o && "get" in o && (u = o.get(e, t)) !== null ? u : (u = a.find.attr(e, t), u ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function(e, t) {
              if (!R.radioValue && t === "radio" && oe(e, "input")) {
                var r = e.value;
                return e.setAttribute("type", t), r && (e.value = r), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var r, u = 0, o = t && t.match(Ue);
          if (o && e.nodeType === 1)
            for (; r = o[u++]; )
              e.removeAttribute(r);
        }
      }), Ei = {
        set: function(e, t, r) {
          return t === !1 ? a.removeAttr(e, r) : e.setAttribute(r, r), r;
        }
      }, a.each(a.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = Wt[t] || a.find.attr;
        Wt[t] = function(u, o, l) {
          var h, F, v = o.toLowerCase();
          return l || (F = Wt[v], Wt[v] = h, h = r(u, o, l) != null ? v : null, Wt[v] = F), h;
        };
      });
      var Ja = /^(?:input|select|textarea|button)$/i, Xa = /^(?:a|area)$/i;
      a.fn.extend({
        prop: function(e, t) {
          return A(this, a.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
          return this.each(function() {
            delete this[a.propFix[e] || e];
          });
        }
      }), a.extend({
        prop: function(e, t, r) {
          var u, o, l = e.nodeType;
          if (!(l === 3 || l === 8 || l === 2))
            return (l !== 1 || !a.isXMLDoc(e)) && (t = a.propFix[t] || t, o = a.propHooks[t]), r !== void 0 ? o && "set" in o && (u = o.set(e, r, t)) !== void 0 ? u : e[t] = r : o && "get" in o && (u = o.get(e, t)) !== null ? u : e[t];
        },
        propHooks: {
          tabIndex: {
            get: function(e) {
              var t = a.find.attr(e, "tabindex");
              return t ? parseInt(t, 10) : Ja.test(e.nodeName) || Xa.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), R.optSelected || (a.propHooks.selected = {
        get: function(e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }), a.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ], function() {
        a.propFix[this.toLowerCase()] = this;
      });
      function yt(e) {
        var t = e.match(Ue) || [];
        return t.join(" ");
      }
      function Ft(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function ir(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(Ue) || [] : [];
      }
      a.fn.extend({
        addClass: function(e) {
          var t, r, u, o, l, h;
          return z(e) ? this.each(function(F) {
            a(this).addClass(e.call(this, F, Ft(this)));
          }) : (t = ir(e), t.length ? this.each(function() {
            if (u = Ft(this), r = this.nodeType === 1 && " " + yt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                o = t[l], r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              h = yt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, r, u, o, l, h;
          return z(e) ? this.each(function(F) {
            a(this).removeClass(e.call(this, F, Ft(this)));
          }) : arguments.length ? (t = ir(e), t.length ? this.each(function() {
            if (u = Ft(this), r = this.nodeType === 1 && " " + yt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                for (o = t[l]; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              h = yt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var r, u, o, l, h = typeof e, F = h === "string" || Array.isArray(e);
          return z(e) ? this.each(function(v) {
            a(this).toggleClass(
              e.call(this, v, Ft(this), t),
              t
            );
          }) : typeof t == "boolean" && F ? t ? this.addClass(e) : this.removeClass(e) : (r = ir(e), this.each(function() {
            if (F)
              for (l = a(this), o = 0; o < r.length; o++)
                u = r[o], l.hasClass(u) ? l.removeClass(u) : l.addClass(u);
            else
              (e === void 0 || h === "boolean") && (u = Ft(this), u && $.set(this, "__className__", u), this.setAttribute && this.setAttribute(
                "class",
                u || e === !1 ? "" : $.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, r, u = 0;
          for (t = " " + e + " "; r = this[u++]; )
            if (r.nodeType === 1 && (" " + yt(Ft(r)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var Qa = /\r/g;
      a.fn.extend({
        val: function(e) {
          var t, r, u, o = this[0];
          return arguments.length ? (u = z(e), this.each(function(l) {
            var h;
            this.nodeType === 1 && (u ? h = e.call(this, l, a(this).val()) : h = e, h == null ? h = "" : typeof h == "number" ? h += "" : Array.isArray(h) && (h = a.map(h, function(F) {
              return F == null ? "" : F + "";
            })), t = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, h, "value") === void 0) && (this.value = h));
          })) : o ? (t = a.valHooks[o.type] || a.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (r = t.get(o, "value")) !== void 0 ? r : (r = o.value, typeof r == "string" ? r.replace(Qa, "") : r ?? "")) : void 0;
        }
      }), a.extend({
        valHooks: {
          option: {
            get: function(e) {
              var t = a.find.attr(e, "value");
              return t ?? // Support: IE <=10 - 11 only
              // option.text throws exceptions (trac-14686, trac-14858)
              // Strip and collapse whitespace
              // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
              yt(a.text(e));
            }
          },
          select: {
            get: function(e) {
              var t, r, u, o = e.options, l = e.selectedIndex, h = e.type === "select-one", F = h ? null : [], v = h ? l + 1 : o.length;
              for (l < 0 ? u = v : u = h ? l : 0; u < v; u++)
                if (r = o[u], (r.selected || u === l) && // Don't return options that are disabled or in a disabled optgroup
                !r.disabled && (!r.parentNode.disabled || !oe(r.parentNode, "optgroup"))) {
                  if (t = a(r).val(), h)
                    return t;
                  F.push(t);
                }
              return F;
            },
            set: function(e, t) {
              for (var r, u, o = e.options, l = a.makeArray(t), h = o.length; h--; )
                u = o[h], (u.selected = a.inArray(a.valHooks.option.get(u), l) > -1) && (r = !0);
              return r || (e.selectedIndex = -1), l;
            }
          }
        }
      }), a.each(["radio", "checkbox"], function() {
        a.valHooks[this] = {
          set: function(e, t) {
            if (Array.isArray(t))
              return e.checked = a.inArray(a(e).val(), t) > -1;
          }
        }, R.checkOn || (a.valHooks[this].get = function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        });
      });
      var Bt = n.location, Di = { guid: Date.now() }, ur = /\?/;
      a.parseXML = function(e) {
        var t, r;
        if (!e || typeof e != "string")
          return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch {
        }
        return r = t && t.getElementsByTagName("parsererror")[0], (!t || r) && a.error("Invalid XML: " + (r ? a.map(r.childNodes, function(u) {
          return u.textContent;
        }).join(`
`) : e)), t;
      };
      var Si = /^(?:focusinfocus|focusoutblur)$/, Ai = function(e) {
        e.stopPropagation();
      };
      a.extend(a.event, {
        trigger: function(e, t, r, u) {
          var o, l, h, F, v, w, S, N, C = [r || W], I = te.call(e, "type") ? e.type : e, J = te.call(e, "namespace") ? e.namespace.split(".") : [];
          if (l = N = h = r = r || W, !(r.nodeType === 3 || r.nodeType === 8) && !Si.test(I + a.event.triggered) && (I.indexOf(".") > -1 && (J = I.split("."), I = J.shift(), J.sort()), v = I.indexOf(":") < 0 && "on" + I, e = e[a.expando] ? e : new a.Event(I, typeof e == "object" && e), e.isTrigger = u ? 2 : 3, e.namespace = J.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = t == null ? [e] : a.makeArray(t, [e]), S = a.event.special[I] || {}, !(!u && S.trigger && S.trigger.apply(r, t) === !1))) {
            if (!u && !S.noBubble && !Ie(r)) {
              for (F = S.delegateType || I, Si.test(F + I) || (l = l.parentNode); l; l = l.parentNode)
                C.push(l), h = l;
              h === (r.ownerDocument || W) && C.push(h.defaultView || h.parentWindow || n);
            }
            for (o = 0; (l = C[o++]) && !e.isPropagationStopped(); )
              N = l, e.type = o > 1 ? F : S.bindType || I, w = ($.get(l, "events") || /* @__PURE__ */ Object.create(null))[e.type] && $.get(l, "handle"), w && w.apply(l, t), w = v && l[v], w && w.apply && pe(l) && (e.result = w.apply(l, t), e.result === !1 && e.preventDefault());
            return e.type = I, !u && !e.isDefaultPrevented() && (!S._default || S._default.apply(C.pop(), t) === !1) && pe(r) && v && z(r[I]) && !Ie(r) && (h = r[v], h && (r[v] = null), a.event.triggered = I, e.isPropagationStopped() && N.addEventListener(I, Ai), r[I](), e.isPropagationStopped() && N.removeEventListener(I, Ai), a.event.triggered = void 0, h && (r[v] = h)), e.result;
          }
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(e, t, r) {
          var u = a.extend(
            new a.Event(),
            r,
            {
              type: e,
              isSimulated: !0
            }
          );
          a.event.trigger(u, null, t);
        }
      }), a.fn.extend({
        trigger: function(e, t) {
          return this.each(function() {
            a.event.trigger(e, t, this);
          });
        },
        triggerHandler: function(e, t) {
          var r = this[0];
          if (r)
            return a.event.trigger(e, t, r, !0);
        }
      });
      var Ya = /\[\]$/, Hi = /\r?\n/g, Ka = /^(?:submit|button|image|reset|file)$/i, Za = /^(?:input|select|textarea|keygen)/i;
      function ar(e, t, r, u) {
        var o;
        if (Array.isArray(t))
          a.each(t, function(l, h) {
            r || Ya.test(e) ? u(e, h) : ar(
              e + "[" + (typeof h == "object" && h != null ? l : "") + "]",
              h,
              r,
              u
            );
          });
        else if (!r && Ne(t) === "object")
          for (o in t)
            ar(e + "[" + o + "]", t[o], r, u);
        else
          u(e, t);
      }
      a.param = function(e, t) {
        var r, u = [], o = function(l, h) {
          var F = z(h) ? h() : h;
          u[u.length] = encodeURIComponent(l) + "=" + encodeURIComponent(F ?? "");
        };
        if (e == null)
          return "";
        if (Array.isArray(e) || e.jquery && !a.isPlainObject(e))
          a.each(e, function() {
            o(this.name, this.value);
          });
        else
          for (r in e)
            ar(r, e[r], t, o);
        return u.join("&");
      }, a.fn.extend({
        serialize: function() {
          return a.param(this.serializeArray());
        },
        serializeArray: function() {
          return this.map(function() {
            var e = a.prop(this, "elements");
            return e ? a.makeArray(e) : this;
          }).filter(function() {
            var e = this.type;
            return this.name && !a(this).is(":disabled") && Za.test(this.nodeName) && !Ka.test(e) && (this.checked || !Gt.test(e));
          }).map(function(e, t) {
            var r = a(this).val();
            return r == null ? null : Array.isArray(r) ? a.map(r, function(u) {
              return { name: t.name, value: u.replace(Hi, `\r
`) };
            }) : { name: t.name, value: r.replace(Hi, `\r
`) };
          }).get();
        }
      });
      var es = /%20/g, ts = /#.*$/, ns = /([?&])_=[^&]*/, rs = /^(.*?):[ \t]*([^\r\n]*)$/mg, is = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, us = /^(?:GET|HEAD)$/, as = /^\/\//, Ni = {}, sr = {}, Oi = "*/".concat("*"), or = W.createElement("a");
      or.href = Bt.href;
      function Mi(e) {
        return function(t, r) {
          typeof t != "string" && (r = t, t = "*");
          var u, o = 0, l = t.toLowerCase().match(Ue) || [];
          if (z(r))
            for (; u = l[o++]; )
              u[0] === "+" ? (u = u.slice(1) || "*", (e[u] = e[u] || []).unshift(r)) : (e[u] = e[u] || []).push(r);
        };
      }
      function Ii(e, t, r, u) {
        var o = {}, l = e === sr;
        function h(F) {
          var v;
          return o[F] = !0, a.each(e[F] || [], function(w, S) {
            var N = S(t, r, u);
            if (typeof N == "string" && !l && !o[N])
              return t.dataTypes.unshift(N), h(N), !1;
            if (l)
              return !(v = N);
          }), v;
        }
        return h(t.dataTypes[0]) || !o["*"] && h("*");
      }
      function lr(e, t) {
        var r, u, o = a.ajaxSettings.flatOptions || {};
        for (r in t)
          t[r] !== void 0 && ((o[r] ? e : u || (u = {}))[r] = t[r]);
        return u && a.extend(!0, e, u), e;
      }
      function ss(e, t, r) {
        for (var u, o, l, h, F = e.contents, v = e.dataTypes; v[0] === "*"; )
          v.shift(), u === void 0 && (u = e.mimeType || t.getResponseHeader("Content-Type"));
        if (u) {
          for (o in F)
            if (F[o] && F[o].test(u)) {
              v.unshift(o);
              break;
            }
        }
        if (v[0] in r)
          l = v[0];
        else {
          for (o in r) {
            if (!v[0] || e.converters[o + " " + v[0]]) {
              l = o;
              break;
            }
            h || (h = o);
          }
          l = l || h;
        }
        if (l)
          return l !== v[0] && v.unshift(l), r[l];
      }
      function os(e, t, r, u) {
        var o, l, h, F, v, w = {}, S = e.dataTypes.slice();
        if (S[1])
          for (h in e.converters)
            w[h.toLowerCase()] = e.converters[h];
        for (l = S.shift(); l; )
          if (e.responseFields[l] && (r[e.responseFields[l]] = t), !v && u && e.dataFilter && (t = e.dataFilter(t, e.dataType)), v = l, l = S.shift(), l) {
            if (l === "*")
              l = v;
            else if (v !== "*" && v !== l) {
              if (h = w[v + " " + l] || w["* " + l], !h) {
                for (o in w)
                  if (F = o.split(" "), F[1] === l && (h = w[v + " " + F[0]] || w["* " + F[0]], h)) {
                    h === !0 ? h = w[o] : w[o] !== !0 && (l = F[0], S.unshift(F[1]));
                    break;
                  }
              }
              if (h !== !0)
                if (h && e.throws)
                  t = h(t);
                else
                  try {
                    t = h(t);
                  } catch (N) {
                    return {
                      state: "parsererror",
                      error: h ? N : "No conversion from " + v + " to " + l
                    };
                  }
            }
          }
        return { state: "success", data: t };
      }
      a.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Bt.href,
          type: "GET",
          isLocal: is.test(Bt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          /*
          timeout: 0,
          data: null,
          dataType: null,
          username: null,
          password: null,
          cache: null,
          throws: false,
          traditional: false,
          headers: {},
          */
          accepts: {
            "*": Oi,
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
          // Data converters
          // Keys separate source (or catchall "*") and destination types with a single space
          converters: {
            // Convert anything to text
            "* text": String,
            // Text to html (true = no transformation)
            "text html": !0,
            // Evaluate text as a json expression
            "text json": JSON.parse,
            // Parse text as xml
            "text xml": a.parseXML
          },
          // For options that shouldn't be deep extended:
          // you can add your own custom options here if
          // and when you create one that shouldn't be
          // deep extended (see ajaxExtend)
          flatOptions: {
            url: !0,
            context: !0
          }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(e, t) {
          return t ? (
            // Building a settings object
            lr(lr(e, a.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            lr(a.ajaxSettings, e)
          );
        },
        ajaxPrefilter: Mi(Ni),
        ajaxTransport: Mi(sr),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var r, u, o, l, h, F, v, w, S, N, C = a.ajaxSetup({}, t), I = C.context || C, J = C.context && (I.nodeType || I.jquery) ? a(I) : a.event, ne = a.Deferred(), Q = a.Callbacks("once memory"), ye = C.statusCode || {}, ge = {}, ze = {}, Je = "canceled", ee = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(re) {
              var fe;
              if (v) {
                if (!l)
                  for (l = {}; fe = rs.exec(o); )
                    l[fe[1].toLowerCase() + " "] = (l[fe[1].toLowerCase() + " "] || []).concat(fe[2]);
                fe = l[re.toLowerCase() + " "];
              }
              return fe == null ? null : fe.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return v ? o : null;
            },
            // Caches the header
            setRequestHeader: function(re, fe) {
              return v == null && (re = ze[re.toLowerCase()] = ze[re.toLowerCase()] || re, ge[re] = fe), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(re) {
              return v == null && (C.mimeType = re), this;
            },
            // Status-dependent callbacks
            statusCode: function(re) {
              var fe;
              if (re)
                if (v)
                  ee.always(re[ee.status]);
                else
                  for (fe in re)
                    ye[fe] = [ye[fe], re[fe]];
              return this;
            },
            // Cancel the request
            abort: function(re) {
              var fe = re || Je;
              return r && r.abort(fe), bt(0, fe), this;
            }
          };
          if (ne.promise(ee), C.url = ((e || C.url || Bt.href) + "").replace(as, Bt.protocol + "//"), C.type = t.method || t.type || C.method || C.type, C.dataTypes = (C.dataType || "*").toLowerCase().match(Ue) || [""], C.crossDomain == null) {
            F = W.createElement("a");
            try {
              F.href = C.url, F.href = F.href, C.crossDomain = or.protocol + "//" + or.host != F.protocol + "//" + F.host;
            } catch {
              C.crossDomain = !0;
            }
          }
          if (C.data && C.processData && typeof C.data != "string" && (C.data = a.param(C.data, C.traditional)), Ii(Ni, C, t, ee), v)
            return ee;
          w = a.event && C.global, w && a.active++ === 0 && a.event.trigger("ajaxStart"), C.type = C.type.toUpperCase(), C.hasContent = !us.test(C.type), u = C.url.replace(ts, ""), C.hasContent ? C.data && C.processData && (C.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (C.data = C.data.replace(es, "+")) : (N = C.url.slice(u.length), C.data && (C.processData || typeof C.data == "string") && (u += (ur.test(u) ? "&" : "?") + C.data, delete C.data), C.cache === !1 && (u = u.replace(ns, "$1"), N = (ur.test(u) ? "&" : "?") + "_=" + Di.guid++ + N), C.url = u + N), C.ifModified && (a.lastModified[u] && ee.setRequestHeader("If-Modified-Since", a.lastModified[u]), a.etag[u] && ee.setRequestHeader("If-None-Match", a.etag[u])), (C.data && C.hasContent && C.contentType !== !1 || t.contentType) && ee.setRequestHeader("Content-Type", C.contentType), ee.setRequestHeader(
            "Accept",
            C.dataTypes[0] && C.accepts[C.dataTypes[0]] ? C.accepts[C.dataTypes[0]] + (C.dataTypes[0] !== "*" ? ", " + Oi + "; q=0.01" : "") : C.accepts["*"]
          );
          for (S in C.headers)
            ee.setRequestHeader(S, C.headers[S]);
          if (C.beforeSend && (C.beforeSend.call(I, ee, C) === !1 || v))
            return ee.abort();
          if (Je = "abort", Q.add(C.complete), ee.done(C.success), ee.fail(C.error), r = Ii(sr, C, t, ee), !r)
            bt(-1, "No Transport");
          else {
            if (ee.readyState = 1, w && J.trigger("ajaxSend", [ee, C]), v)
              return ee;
            C.async && C.timeout > 0 && (h = n.setTimeout(function() {
              ee.abort("timeout");
            }, C.timeout));
            try {
              v = !1, r.send(ge, bt);
            } catch (re) {
              if (v)
                throw re;
              bt(-1, re);
            }
          }
          function bt(re, fe, Jt, fr) {
            var Xe, Xt, Qe, ct, ft, Ve = fe;
            v || (v = !0, h && n.clearTimeout(h), r = void 0, o = fr || "", ee.readyState = re > 0 ? 4 : 0, Xe = re >= 200 && re < 300 || re === 304, Jt && (ct = ss(C, ee, Jt)), !Xe && a.inArray("script", C.dataTypes) > -1 && a.inArray("json", C.dataTypes) < 0 && (C.converters["text script"] = function() {
            }), ct = os(C, ct, ee, Xe), Xe ? (C.ifModified && (ft = ee.getResponseHeader("Last-Modified"), ft && (a.lastModified[u] = ft), ft = ee.getResponseHeader("etag"), ft && (a.etag[u] = ft)), re === 204 || C.type === "HEAD" ? Ve = "nocontent" : re === 304 ? Ve = "notmodified" : (Ve = ct.state, Xt = ct.data, Qe = ct.error, Xe = !Qe)) : (Qe = Ve, (re || !Ve) && (Ve = "error", re < 0 && (re = 0))), ee.status = re, ee.statusText = (fe || Ve) + "", Xe ? ne.resolveWith(I, [Xt, Ve, ee]) : ne.rejectWith(I, [ee, Ve, Qe]), ee.statusCode(ye), ye = void 0, w && J.trigger(
              Xe ? "ajaxSuccess" : "ajaxError",
              [ee, C, Xe ? Xt : Qe]
            ), Q.fireWith(I, [ee, Ve]), w && (J.trigger("ajaxComplete", [ee, C]), --a.active || a.event.trigger("ajaxStop")));
          }
          return ee;
        },
        getJSON: function(e, t, r) {
          return a.get(e, t, r, "json");
        },
        getScript: function(e, t) {
          return a.get(e, void 0, t, "script");
        }
      }), a.each(["get", "post"], function(e, t) {
        a[t] = function(r, u, o, l) {
          return z(u) && (l = l || o, o = u, u = void 0), a.ajax(a.extend({
            url: r,
            type: t,
            dataType: l,
            data: u,
            success: o
          }, a.isPlainObject(r) && r));
        };
      }), a.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers)
          t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
      }), a._evalUrl = function(e, t, r) {
        return a.ajax({
          url: e,
          // Make this explicit, since user can override this through ajaxSetup (trac-11264)
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          // Only evaluate the response if it is successful (gh-4126)
          // dataFilter is not invoked for failure responses, so using it instead
          // of the default converter is kludgy but it works.
          converters: {
            "text script": function() {
            }
          },
          dataFilter: function(u) {
            a.globalEval(u, t, r);
          }
        });
      }, a.fn.extend({
        wrapAll: function(e) {
          var t;
          return this[0] && (z(e) && (e = e.call(this[0])), t = a(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var r = this; r.firstElementChild; )
              r = r.firstElementChild;
            return r;
          }).append(this)), this;
        },
        wrapInner: function(e) {
          return z(e) ? this.each(function(t) {
            a(this).wrapInner(e.call(this, t));
          }) : this.each(function() {
            var t = a(this), r = t.contents();
            r.length ? r.wrapAll(e) : t.append(e);
          });
        },
        wrap: function(e) {
          var t = z(e);
          return this.each(function(r) {
            a(this).wrapAll(t ? e.call(this, r) : e);
          });
        },
        unwrap: function(e) {
          return this.parent(e).not("body").each(function() {
            a(this).replaceWith(this.childNodes);
          }), this;
        }
      }), a.expr.pseudos.hidden = function(e) {
        return !a.expr.pseudos.visible(e);
      }, a.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }, a.ajaxSettings.xhr = function() {
        try {
          return new n.XMLHttpRequest();
        } catch {
        }
      };
      var ls = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, zt = a.ajaxSettings.xhr();
      R.cors = !!zt && "withCredentials" in zt, R.ajax = zt = !!zt, a.ajaxTransport(function(e) {
        var t, r;
        if (R.cors || zt && !e.crossDomain)
          return {
            send: function(u, o) {
              var l, h = e.xhr();
              if (h.open(
                e.type,
                e.url,
                e.async,
                e.username,
                e.password
              ), e.xhrFields)
                for (l in e.xhrFields)
                  h[l] = e.xhrFields[l];
              e.mimeType && h.overrideMimeType && h.overrideMimeType(e.mimeType), !e.crossDomain && !u["X-Requested-With"] && (u["X-Requested-With"] = "XMLHttpRequest");
              for (l in u)
                h.setRequestHeader(l, u[l]);
              t = function(F) {
                return function() {
                  t && (t = r = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, F === "abort" ? h.abort() : F === "error" ? typeof h.status != "number" ? o(0, "error") : o(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    h.status,
                    h.statusText
                  ) : o(
                    ls[h.status] || h.status,
                    h.statusText,
                    // Support: IE <=9 only
                    // IE9 has no XHR2 but throws on binary (trac-11426)
                    // For XHR2 non-text, let the caller handle it (gh-2498)
                    (h.responseType || "text") !== "text" || typeof h.responseText != "string" ? { binary: h.response } : { text: h.responseText },
                    h.getAllResponseHeaders()
                  ));
                };
              }, h.onload = t(), r = h.onerror = h.ontimeout = t("error"), h.onabort !== void 0 ? h.onabort = r : h.onreadystatechange = function() {
                h.readyState === 4 && n.setTimeout(function() {
                  t && r();
                });
              }, t = t("abort");
              try {
                h.send(e.hasContent && e.data || null);
              } catch (F) {
                if (t)
                  throw F;
              }
            },
            abort: function() {
              t && t();
            }
          };
      }), a.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
      }), a.ajaxSetup({
        accepts: {
          script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
          script: /\b(?:java|ecma)script\b/
        },
        converters: {
          "text script": function(e) {
            return a.globalEval(e), e;
          }
        }
      }), a.ajaxPrefilter("script", function(e) {
        e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), a.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
          var t, r;
          return {
            send: function(u, o) {
              t = a("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", r = function(l) {
                t.remove(), r = null, l && o(l.type === "error" ? 404 : 200, l.type);
              }), W.head.appendChild(t[0]);
            },
            abort: function() {
              r && r();
            }
          };
        }
      });
      var Pi = [], cr = /(=)\?(?=&|$)|\?\?/;
      a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Pi.pop() || a.expando + "_" + Di.guid++;
          return this[e] = !0, e;
        }
      }), a.ajaxPrefilter("json jsonp", function(e, t, r) {
        var u, o, l, h = e.jsonp !== !1 && (cr.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && cr.test(e.data) && "data");
        if (h || e.dataTypes[0] === "jsonp")
          return u = e.jsonpCallback = z(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, h ? e[h] = e[h].replace(cr, "$1" + u) : e.jsonp !== !1 && (e.url += (ur.test(e.url) ? "&" : "?") + e.jsonp + "=" + u), e.converters["script json"] = function() {
            return l || a.error(u + " was not called"), l[0];
          }, e.dataTypes[0] = "json", o = n[u], n[u] = function() {
            l = arguments;
          }, r.always(function() {
            o === void 0 ? a(n).removeProp(u) : n[u] = o, e[u] && (e.jsonpCallback = t.jsonpCallback, Pi.push(u)), l && z(o) && o(l[0]), l = o = void 0;
          }), "script";
      }), R.createHTMLDocument = function() {
        var e = W.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), a.parseHTML = function(e, t, r) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (r = t, t = !1);
        var u, o, l;
        return t || (R.createHTMLDocument ? (t = W.implementation.createHTMLDocument(""), u = t.createElement("base"), u.href = W.location.href, t.head.appendChild(u)) : t = W), o = qt.exec(e), l = !r && [], o ? [t.createElement(o[1])] : (o = fi([e], t, l), l && l.length && a(l).remove(), a.merge([], o.childNodes));
      }, a.fn.load = function(e, t, r) {
        var u, o, l, h = this, F = e.indexOf(" ");
        return F > -1 && (u = yt(e.slice(F)), e = e.slice(0, F)), z(t) ? (r = t, t = void 0) : t && typeof t == "object" && (o = "POST"), h.length > 0 && a.ajax({
          url: e,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: o || "GET",
          dataType: "html",
          data: t
        }).done(function(v) {
          l = arguments, h.html(u ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            a("<div>").append(a.parseHTML(v)).find(u)
          ) : (
            // Otherwise use the full result
            v
          ));
        }).always(r && function(v, w) {
          h.each(function() {
            r.apply(this, l || [v.responseText, w, v]);
          });
        }), this;
      }, a.expr.pseudos.animated = function(e) {
        return a.grep(a.timers, function(t) {
          return e === t.elem;
        }).length;
      }, a.offset = {
        setOffset: function(e, t, r) {
          var u, o, l, h, F, v, w, S = a.css(e, "position"), N = a(e), C = {};
          S === "static" && (e.style.position = "relative"), F = N.offset(), l = a.css(e, "top"), v = a.css(e, "left"), w = (S === "absolute" || S === "fixed") && (l + v).indexOf("auto") > -1, w ? (u = N.position(), h = u.top, o = u.left) : (h = parseFloat(l) || 0, o = parseFloat(v) || 0), z(t) && (t = t.call(e, r, a.extend({}, F))), t.top != null && (C.top = t.top - F.top + h), t.left != null && (C.left = t.left - F.left + o), "using" in t ? t.using.call(e, C) : N.css(C);
        }
      }, a.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(e) {
          if (arguments.length)
            return e === void 0 ? this : this.each(function(o) {
              a.offset.setOffset(this, e, o);
            });
          var t, r, u = this[0];
          if (u)
            return u.getClientRects().length ? (t = u.getBoundingClientRect(), r = u.ownerDocument.defaultView, {
              top: t.top + r.pageYOffset,
              left: t.left + r.pageXOffset
            }) : { top: 0, left: 0 };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
          if (this[0]) {
            var e, t, r, u = this[0], o = { top: 0, left: 0 };
            if (a.css(u, "position") === "fixed")
              t = u.getBoundingClientRect();
            else {
              for (t = this.offset(), r = u.ownerDocument, e = u.offsetParent || r.documentElement; e && (e === r.body || e === r.documentElement) && a.css(e, "position") === "static"; )
                e = e.parentNode;
              e && e !== u && e.nodeType === 1 && (o = a(e).offset(), o.top += a.css(e, "borderTopWidth", !0), o.left += a.css(e, "borderLeftWidth", !0));
            }
            return {
              top: t.top - o.top - a.css(u, "marginTop", !0),
              left: t.left - o.left - a.css(u, "marginLeft", !0)
            };
          }
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
          return this.map(function() {
            for (var e = this.offsetParent; e && a.css(e, "position") === "static"; )
              e = e.offsetParent;
            return e || it;
          });
        }
      }), a.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var r = t === "pageYOffset";
        a.fn[e] = function(u) {
          return A(this, function(o, l, h) {
            var F;
            if (Ie(o) ? F = o : o.nodeType === 9 && (F = o.defaultView), h === void 0)
              return F ? F[t] : o[l];
            F ? F.scrollTo(
              r ? F.pageXOffset : h,
              r ? h : F.pageYOffset
            ) : o[l] = h;
          }, e, u, arguments.length);
        };
      }), a.each(["top", "left"], function(e, t) {
        a.cssHooks[t] = vi(
          R.pixelPosition,
          function(r, u) {
            if (u)
              return u = jt(r, t), Zn.test(u) ? a(r).position()[t] + "px" : u;
          }
        );
      }), a.each({ Height: "height", Width: "width" }, function(e, t) {
        a.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(r, u) {
          a.fn[u] = function(o, l) {
            var h = arguments.length && (r || typeof o != "boolean"), F = r || (o === !0 || l === !0 ? "margin" : "border");
            return A(this, function(v, w, S) {
              var N;
              return Ie(v) ? u.indexOf("outer") === 0 ? v["inner" + e] : v.document.documentElement["client" + e] : v.nodeType === 9 ? (N = v.documentElement, Math.max(
                v.body["scroll" + e],
                N["scroll" + e],
                v.body["offset" + e],
                N["offset" + e],
                N["client" + e]
              )) : S === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                a.css(v, w, F)
              ) : (
                // Set width or height on the element
                a.style(v, w, S, F)
              );
            }, t, h ? o : void 0, h);
          };
        });
      }), a.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ], function(e, t) {
        a.fn[t] = function(r) {
          return this.on(t, r);
        };
      }), a.fn.extend({
        bind: function(e, t, r) {
          return this.on(e, null, t, r);
        },
        unbind: function(e, t) {
          return this.off(e, null, t);
        },
        delegate: function(e, t, r, u) {
          return this.on(t, e, r, u);
        },
        undelegate: function(e, t, r) {
          return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", r);
        },
        hover: function(e, t) {
          return this.on("mouseenter", e).on("mouseleave", t || e);
        }
      }), a.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
        function(e, t) {
          a.fn[t] = function(r, u) {
            return arguments.length > 0 ? this.on(t, null, r, u) : this.trigger(t);
          };
        }
      );
      var cs = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      a.proxy = function(e, t) {
        var r, u, o;
        if (typeof t == "string" && (r = e[t], t = e, e = r), !!z(e))
          return u = m.call(arguments, 2), o = function() {
            return e.apply(t || this, u.concat(m.call(arguments)));
          }, o.guid = e.guid = e.guid || a.guid++, o;
      }, a.holdReady = function(e) {
        e ? a.readyWait++ : a.ready(!0);
      }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = oe, a.isFunction = z, a.isWindow = Ie, a.camelCase = ie, a.type = Ne, a.now = Date.now, a.isNumeric = function(e) {
        var t = a.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, a.trim = function(e) {
        return e == null ? "" : (e + "").replace(cs, "$1");
      };
      var fs = n.jQuery, hs = n.$;
      return a.noConflict = function(e) {
        return n.$ === a && (n.$ = hs), e && n.jQuery === a && (n.jQuery = fs), a;
      }, typeof f > "u" && (n.jQuery = n.$ = a), a;
    });
  }(yr)), yr.exports;
}
var ws = Qi();
const _t = /* @__PURE__ */ Xi(ws), { Model: _s } = girder.models;
_s.extend({
  resourceName: "thumbnail"
});
const { Model: xs } = girder.models;
var Ts = xs.extend({
  resourceName: "chameleon"
});
function Cs(i) {
  var n = "" + i, f = Es.exec(n);
  if (!f)
    return i;
  var s, d, m, _ = "";
  for (s = f.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        m = "&quot;";
        break;
      case 38:
        m = "&amp;";
        break;
      case 60:
        m = "&lt;";
        break;
      case 62:
        m = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (_ += n.substring(d, s)), d = s + 1, _ += m;
  }
  return d !== s ? _ + n.substring(d, s) : _;
}
var Es = /["&<>]/;
function Yi(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, m, _, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, m = s.split(`
`), _ = Math.max(f - d, 0), D = Math.min(m.length, f + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Yi(i, null, f);
  }
  d = m.slice(_, D).map(function(M, U) {
    var G = U + _ + 1;
    return (G == f ? "  > " : "    ") + G + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + f + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Ds(i) {
  var n = "", f, s, d;
  try {
    var m = i || {};
    (function(_) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-dialog">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-content">', d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<form class="modal-form" id="g-create-thumbnail-form" role="form">', d = 4, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-header">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="close" data-dismiss="modal" aria-hidden="true" type="button">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "&times;</button>", d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<h4 class="modal-title">', d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Converted with Chameleon</h4>", d = 7, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-dialog-subtitle">', d = 8, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-doc-inv"></i>', d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " ", d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + Cs((f = _.get("name")) == null ? "" : f) + "</div></div>", d = 10, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-body">', d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Select an endpoint</label>", d = 12, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<select class="form-control" id="g-endpoint-options" name="dropdown-options">', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option1">', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "RHEED</option>", d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option2">', d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "PPMS/MPMS</option>", d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option3">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Bruker Raw</option>", d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option4">', d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Bruker Raw Background</option>", d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option5">', d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "4D STEM</option>", d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option6">', d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Non-4D STEM(File)</option>", d = 19, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option7">', d = 19, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "HS2</option>", d = 20, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option8">', d = 20, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "JEOL SEM</option>", d = 21, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option9">', d = 21, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Bruker BRML</option></select>", d = 22, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 22, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Output Name</label>", d = 23, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<input class="form-control" id="g-output-name" type="text" placeholder="Enter output name here" name="text-input"/>', d = 24, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-validation-failed-message"></div>', d = 25, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 25, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Select an input file extension</label>", d = 26, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<select class="form-control" id="g-input-extension-options" name="dropdown-options">', d = 27, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option1">', d = 27, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "None</option>", d = 28, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option2">', d = 28, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".raw</option>", d = 29, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option3">', d = 29, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".txt</option>", d = 30, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option4">', d = 30, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".uxd </option>", d = 31, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option5">', d = 31, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".dm4 </option>", d = 32, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option6">', d = 32, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".ser </option>", d = 33, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option7">', d = 33, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + ".emd</option></select>", d = 34, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 34, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Add file (Bruker Background Only)</label>", d = 35, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-target-result-container">', d = 36, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-search-field-container">', d = 37, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<input class="form-control" id="g-second-file-search" type="search" placeholder="Search or enter file path" name="secondFile"/></div></div>', d = 38, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-validation-failed-message"></div></div>', d = 39, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-footer">', d = 40, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<a class="btn btn-small btn-default" data-dismiss="modal">', d = 40, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Close</a>", d = 41, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="g-submit-create-chameleon btn btn-small btn-primary" type="submit">', d = 42, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-picture"></i>', d = 43, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " Create</button></div></form></div></div>";
    }).call(this, "file" in m ? m.file : typeof file < "u" ? file : void 0);
  } catch (_) {
    Yi(_, s, d);
  }
  return n;
}
function Ss(i, n, f, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), f || n.indexOf('"') === -1) ? (f && (n = _r(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Ki(i, n) {
  return Array.isArray(i) ? As(i, n) : i && typeof i == "object" ? Hs(i) : i || "";
}
function As(i, n) {
  for (var f, s = "", d = "", m = Array.isArray(n), _ = 0; _ < i.length; _++)
    (f = Ki(i[_])) && (m && n[_] && (f = _r(f)), s = s + d + f, d = " ");
  return s;
}
function Hs(i) {
  var n = "", f = "";
  for (var s in i)
    s && i[s] && Ns.call(i, s) && (n = n + f + s, f = " ");
  return n;
}
function _r(i) {
  var n = "" + i, f = Os.exec(n);
  if (!f)
    return i;
  var s, d, m, _ = "";
  for (s = f.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        m = "&quot;";
        break;
      case 38:
        m = "&amp;";
        break;
      case 60:
        m = "&lt;";
        break;
      case 62:
        m = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (_ += n.substring(d, s)), d = s + 1, _ += m;
  }
  return d !== s ? _ + n.substring(d, s) : _;
}
var Ns = Object.prototype.hasOwnProperty, Os = /["&<>]/;
function Zi(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, m, _, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, m = s.split(`
`), _ = Math.max(f - d, 0), D = Math.min(m.length, f + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Zi(i, null, f);
  }
  d = m.slice(_, D).map(function(M, U) {
    var G = U + _ + 1;
    return (G == f ? "  > " : "    ") + G + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + f + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Ms(i) {
  var n = "", f, s, d;
  try {
    var m = i || {};
    (function(_, D) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + '<div class="g-target-result">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + "<i" + Ss("class", Ki([`icon-${_}`], [!0]), !1, !1) + "></i>", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + " ", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + _r((f = D) == null ? "" : f) + "</div>";
    }).call(this, "icon" in m ? m.icon : typeof icon < "u" ? icon : void 0, "text" in m ? m.text : typeof text < "u" ? text : void 0);
  } catch (_) {
    Zi(_, s, d);
  }
  return n;
}
const { SearchFieldWidget: Is } = girder.views.widgets, { FileModel: Ps } = girder.models, { View: Us } = girder.views;
girder.utilities.jquery.girderEnable;
girder.utilities.jquery.girderModal;
var eu = Us.extend({
  initialize: function() {
  },
  events: {
    'change .g-thumbnail-attach-container input[type="radio"]': function() {
      this.$(".g-target-result-container").empty(), this.$(".g-thumbnail-attach-this-item").is(":checked") ? (this.attachToType = "item", this.attachToId = this.item.id, this.$(".g-thumbnail-custom-target-container").addClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!0)) : (this.attachToType = null, this.attachToId = null, this.$(".g-thumbnail-custom-target-container").removeClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!1));
    },
    "submit #g-create-thumbnail-form": function(i) {
      const n = this;
      i.preventDefault(), this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
      const f = new Ts({
        output_name: String(this.$("#g-output-name").val()) || "",
        target_endpoint: String(this.$("#g-endpoint-options").val()) || "",
        output_type: String(this.$("#g-output-types").val()) || "",
        input_type: String(this.$("#g-input-extension-options").val()) || "",
        ppms_file_type: String(this.$("#g-ppms-file-options").val()) || "",
        secondFile: this.resultId,
        fileId: this.file.id,
        attachToId: this.attachToId,
        attachToType: this.attachToType,
        folderId: this.folderId,
        collectionId: this.collectionId
      }), s = f.get("output_name") || "file.png", d = f.get("target_endpoint") || "option1";
      f.get("ppms_file_type"), f.get("fileId");
      const m = f.get("attachToId");
      f.get("secondFile"), f.get("input_type");
      const _ = `http://localhost:8080/api/v1/item/${m}/download`;
      f.get("folderId"), f.get("collectionId");
      let D;
      switch (console.log(_), console.log(s), d) {
        case "option1":
          D = "http://localhost:5020/rheedconverter";
          break;
        case "option2":
          D = "http://localhost:5020/ppmsmpms";
          break;
        case "option3":
          D = "http://localhost:5020/brukerrawconverter";
          break;
        case "option4":
          D = "http://localhost:5020/brukerrawbackground";
          break;
        case "option5":
          D = "http://localhost:5020/stemarray4d";
          break;
        case "option6":
          D = "http://localhost:5020/non4dstem_file";
          break;
        case "option7":
          D = "http://localhost:5020/hs2converter";
          break;
        case "option8":
          D = "http://localhost:5020/jeol_sem_converter";
          break;
        case "option9":
          D = "http://localhost:5020/brukerbrmlconverter";
          break;
        default:
          D = "http://localhost:5020/default";
      }
      _t.ajax({
        url: D,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": "nschakJJdEsIQUfADFerH6aGjyz706f114C3c8leXhM"
        },
        data: JSON.stringify({
          input_url: _,
          output: s,
          output_type: "raw",
          output_dest: "caller"
        }),
        xhrFields: {
          responseType: "blob"
        },
        processData: !1
      }).done(function(M, U, G) {
        const te = G.getResponseHeader("Content-Type");
        if (te.includes("application/json")) {
          const He = new FileReader();
          He.onload = function() {
            try {
              const R = JSON.parse(He.result);
              if (R.file_data) {
                const z = atob(R.file_data), Ie = new Array(z.length);
                for (let Ne = 0; Ne < z.length; Ne++)
                  Ie[Ne] = z.charCodeAt(Ne);
                const W = new Uint8Array(Ie), Ze = new Blob([W], { type: te }), Te = document.createElement("a");
                Te.href = URL.createObjectURL(Ze), Te.download = R.file_name, document.body.appendChild(Te), Te.click(), document.body.removeChild(Te);
              } else
                console.log("JSON Response:", R);
            } catch (R) {
              console.error("Error parsing JSON response:", R);
            }
          }, M.text().then((R) => He.readAsText(new Blob([R])));
        } else {
          const He = new Blob([M], { type: te });
          let R;
          var Ke = new Ps();
          Ke.uploadToItem(n.item, He, s, R), _t(".modal").girderModal("close"), location.reload();
        }
      }).fail(function(M, U, G) {
        console.error("AJAX Request Failed!"), console.error("Status:", U), console.error("Error:", G), console.error("Response Text:", M.responseText), console.error("HTTP Status Code:", M.status);
        let te = `
                    <div class="alert alert-danger">
                        <strong>Error:</strong> ${G} <br>
                        <strong>Status:</strong> ${U} <br>
                        <strong>HTTP Code:</strong> ${M.status} <br>
                        <strong>Response:</strong> ${M.responseText || "No response from server"} <br>
                        <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                    </div>`;
        _t(".g-validation-failed-message").html(te), _t(".g-submit-create-chameleon").girderEnable(!0);
      });
    }
  },
  initialize: function(i) {
    this.item = i.item, this.file = i.file, this.attachToType = "item", this.attachToId = this.item.id, this.folderId = this.item.get("folderId"), this.collectionId = this.item.get("baseParentId"), this.resultId = null, this.searchWidget = new Is({
      placeholder: "Start typing a name...",
      types: ["collection", "folder", "item", "user"],
      parentView: this
    }).on("g:resultClicked", function(n) {
      this.resultId = n.id;
    }, this);
  },
  render: function() {
    return this.$el.html(Ds({
      file: this.file,
      item: this.item
    })).girderModal(this).on("shown.bs.modal", () => {
      this.$("#g-endpoint-options").focus();
    }), this.$("#g-endpoint-options").focus(), this.searchWidget.setElement(this.$(".g-search-field-container")).render(), this;
  },
  pickTarget: function(i) {
    this.searchWidget.resetState(), this.attachToType = i.type, this.attachToId = i.id, this.$(".g-submit-create-chameleon").girderEnable(!0), this.$(".g-target-result-container").html(Ms({
      text: i.text,
      icon: i.icon
    }));
  }
}), tu = {}, xr = "1.13.7", Li = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, Mn = Array.prototype, Tr = Object.prototype, qi = typeof Symbol < "u" ? Symbol.prototype : null, $s = Mn.push, un = Mn.slice, Kt = Tr.toString, ks = Tr.hasOwnProperty, nu = typeof ArrayBuffer < "u", Vs = typeof DataView < "u", Ls = Array.isArray, Ri = Object.keys, Gi = Object.create, ji = nu && ArrayBuffer.isView, qs = isNaN, Rs = isFinite, ru = !{ toString: null }.propertyIsEnumerable("toString"), Wi = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], Gs = Math.pow(2, 53) - 1;
function xe(i, n) {
  return n = n == null ? i.length - 1 : +n, function() {
    for (var f = Math.max(arguments.length - n, 0), s = Array(f), d = 0; d < f; d++)
      s[d] = arguments[d + n];
    switch (n) {
      case 0:
        return i.call(this, s);
      case 1:
        return i.call(this, arguments[0], s);
      case 2:
        return i.call(this, arguments[0], arguments[1], s);
    }
    var m = Array(n + 1);
    for (d = 0; d < n; d++)
      m[d] = arguments[d];
    return m[n] = s, i.apply(this, m);
  };
}
function pt(i) {
  var n = typeof i;
  return n === "function" || n === "object" && !!i;
}
function iu(i) {
  return i === null;
}
function Cr(i) {
  return i === void 0;
}
function Er(i) {
  return i === !0 || i === !1 || Kt.call(i) === "[object Boolean]";
}
function uu(i) {
  return !!(i && i.nodeType === 1);
}
function we(i) {
  var n = "[object " + i + "]";
  return function(f) {
    return Kt.call(f) === n;
  };
}
const In = we("String"), Dr = we("Number"), au = we("Date"), su = we("RegExp"), ou = we("Error"), Sr = we("Symbol"), Ar = we("ArrayBuffer");
var lu = we("Function"), js = Li.document && Li.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof js != "function" && (lu = function(i) {
  return typeof i == "function" || !1;
});
const be = lu, cu = we("Object");
var fu = Vs && (!/\[native code\]/.test(String(DataView)) || cu(new DataView(new ArrayBuffer(8)))), Hr = typeof Map < "u" && cu(/* @__PURE__ */ new Map()), Ws = we("DataView");
function Bs(i) {
  return i != null && be(i.getInt8) && Ar(i.buffer);
}
const Zt = fu ? Bs : Ws, gt = Ls || we("Array");
function mt(i, n) {
  return i != null && ks.call(i, n);
}
var br = we("Arguments");
(function() {
  br(arguments) || (br = function(i) {
    return mt(i, "callee");
  });
})();
const Pn = br;
function hu(i) {
  return !Sr(i) && Rs(i) && !isNaN(parseFloat(i));
}
function Nr(i) {
  return Dr(i) && qs(i);
}
function Or(i) {
  return function() {
    return i;
  };
}
function du(i) {
  return function(n) {
    var f = i(n);
    return typeof f == "number" && f >= 0 && f <= Gs;
  };
}
function pu(i) {
  return function(n) {
    return n == null ? void 0 : n[i];
  };
}
const Dn = pu("byteLength"), zs = du(Dn);
var Js = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function Xs(i) {
  return ji ? ji(i) && !Zt(i) : zs(i) && Js.test(Kt.call(i));
}
const Mr = nu ? Xs : Or(!1), Se = pu("length");
function Qs(i) {
  for (var n = {}, f = i.length, s = 0; s < f; ++s)
    n[i[s]] = !0;
  return {
    contains: function(d) {
      return n[d] === !0;
    },
    push: function(d) {
      return n[d] = !0, i.push(d);
    }
  };
}
function gu(i, n) {
  n = Qs(n);
  var f = Wi.length, s = i.constructor, d = be(s) && s.prototype || Tr, m = "constructor";
  for (mt(i, m) && !n.contains(m) && n.push(m); f--; )
    m = Wi[f], m in i && i[m] !== d[m] && !n.contains(m) && n.push(m);
}
function me(i) {
  if (!pt(i))
    return [];
  if (Ri)
    return Ri(i);
  var n = [];
  for (var f in i)
    mt(i, f) && n.push(f);
  return ru && gu(i, n), n;
}
function mu(i) {
  if (i == null)
    return !0;
  var n = Se(i);
  return typeof n == "number" && (gt(i) || In(i) || Pn(i)) ? n === 0 : Se(me(i)) === 0;
}
function Ir(i, n) {
  var f = me(n), s = f.length;
  if (i == null)
    return !s;
  for (var d = Object(i), m = 0; m < s; m++) {
    var _ = f[m];
    if (n[_] !== d[_] || !(_ in d))
      return !1;
  }
  return !0;
}
function ae(i) {
  if (i instanceof ae)
    return i;
  if (!(this instanceof ae))
    return new ae(i);
  this._wrapped = i;
}
ae.VERSION = xr;
ae.prototype.value = function() {
  return this._wrapped;
};
ae.prototype.valueOf = ae.prototype.toJSON = ae.prototype.value;
ae.prototype.toString = function() {
  return String(this._wrapped);
};
function Bi(i) {
  return new Uint8Array(
    i.buffer || i,
    i.byteOffset || 0,
    Dn(i)
  );
}
var zi = "[object DataView]";
function wr(i, n, f, s) {
  if (i === n)
    return i !== 0 || 1 / i === 1 / n;
  if (i == null || n == null)
    return !1;
  if (i !== i)
    return n !== n;
  var d = typeof i;
  return d !== "function" && d !== "object" && typeof n != "object" ? !1 : vu(i, n, f, s);
}
function vu(i, n, f, s) {
  i instanceof ae && (i = i._wrapped), n instanceof ae && (n = n._wrapped);
  var d = Kt.call(i);
  if (d !== Kt.call(n))
    return !1;
  if (fu && d == "[object Object]" && Zt(i)) {
    if (!Zt(n))
      return !1;
    d = zi;
  }
  switch (d) {
    case "[object RegExp]":
    case "[object String]":
      return "" + i == "" + n;
    case "[object Number]":
      return +i != +i ? +n != +n : +i == 0 ? 1 / +i === 1 / n : +i == +n;
    case "[object Date]":
    case "[object Boolean]":
      return +i == +n;
    case "[object Symbol]":
      return qi.valueOf.call(i) === qi.valueOf.call(n);
    case "[object ArrayBuffer]":
    case zi:
      return vu(Bi(i), Bi(n), f, s);
  }
  var m = d === "[object Array]";
  if (!m && Mr(i)) {
    var _ = Dn(i);
    if (_ !== Dn(n))
      return !1;
    if (i.buffer === n.buffer && i.byteOffset === n.byteOffset)
      return !0;
    m = !0;
  }
  if (!m) {
    if (typeof i != "object" || typeof n != "object")
      return !1;
    var D = i.constructor, M = n.constructor;
    if (D !== M && !(be(D) && D instanceof D && be(M) && M instanceof M) && "constructor" in i && "constructor" in n)
      return !1;
  }
  f = f || [], s = s || [];
  for (var U = f.length; U--; )
    if (f[U] === i)
      return s[U] === n;
  if (f.push(i), s.push(n), m) {
    if (U = i.length, U !== n.length)
      return !1;
    for (; U--; )
      if (!wr(i[U], n[U], f, s))
        return !1;
  } else {
    var G = me(i), te;
    if (U = G.length, me(n).length !== U)
      return !1;
    for (; U--; )
      if (te = G[U], !(mt(n, te) && wr(i[te], n[te], f, s)))
        return !1;
  }
  return f.pop(), s.pop(), !0;
}
function yu(i, n) {
  return wr(i, n);
}
function Vt(i) {
  if (!pt(i))
    return [];
  var n = [];
  for (var f in i)
    n.push(f);
  return ru && gu(i, n), n;
}
function Pr(i) {
  var n = Se(i);
  return function(f) {
    if (f == null)
      return !1;
    var s = Vt(f);
    if (Se(s))
      return !1;
    for (var d = 0; d < n; d++)
      if (!be(f[i[d]]))
        return !1;
    return i !== wu || !be(f[Ur]);
  };
}
var Ur = "forEach", Fu = "has", $r = ["clear", "delete"], bu = ["get", Fu, "set"], Ys = $r.concat(Ur, bu), wu = $r.concat(bu), Ks = ["add"].concat($r, Ur, Fu);
const _u = Hr ? Pr(Ys) : we("Map"), xu = Hr ? Pr(wu) : we("WeakMap"), Tu = Hr ? Pr(Ks) : we("Set"), Cu = we("WeakSet");
function Ct(i) {
  for (var n = me(i), f = n.length, s = Array(f), d = 0; d < f; d++)
    s[d] = i[n[d]];
  return s;
}
function Eu(i) {
  for (var n = me(i), f = n.length, s = Array(f), d = 0; d < f; d++)
    s[d] = [n[d], i[n[d]]];
  return s;
}
function kr(i) {
  for (var n = {}, f = me(i), s = 0, d = f.length; s < d; s++)
    n[i[f[s]]] = f[s];
  return n;
}
function en(i) {
  var n = [];
  for (var f in i)
    be(i[f]) && n.push(f);
  return n.sort();
}
function Vr(i, n) {
  return function(f) {
    var s = arguments.length;
    if (n && (f = Object(f)), s < 2 || f == null)
      return f;
    for (var d = 1; d < s; d++)
      for (var m = arguments[d], _ = i(m), D = _.length, M = 0; M < D; M++) {
        var U = _[M];
        (!n || f[U] === void 0) && (f[U] = m[U]);
      }
    return f;
  };
}
const Lr = Vr(Vt), $t = Vr(me), qr = Vr(Vt, !0);
function Zs() {
  return function() {
  };
}
function Du(i) {
  if (!pt(i))
    return {};
  if (Gi)
    return Gi(i);
  var n = Zs();
  n.prototype = i;
  var f = new n();
  return n.prototype = null, f;
}
function Su(i, n) {
  var f = Du(i);
  return n && $t(f, n), f;
}
function Au(i) {
  return pt(i) ? gt(i) ? i.slice() : Lr({}, i) : i;
}
function Hu(i, n) {
  return n(i), i;
}
function Rr(i) {
  return gt(i) ? i : [i];
}
ae.toPath = Rr;
function an(i) {
  return ae.toPath(i);
}
function Gr(i, n) {
  for (var f = n.length, s = 0; s < f; s++) {
    if (i == null)
      return;
    i = i[n[s]];
  }
  return f ? i : void 0;
}
function jr(i, n, f) {
  var s = Gr(i, an(n));
  return Cr(s) ? f : s;
}
function Nu(i, n) {
  n = an(n);
  for (var f = n.length, s = 0; s < f; s++) {
    var d = n[s];
    if (!mt(i, d))
      return !1;
    i = i[d];
  }
  return !!f;
}
function Un(i) {
  return i;
}
function Tt(i) {
  return i = $t({}, i), function(n) {
    return Ir(n, i);
  };
}
function $n(i) {
  return i = an(i), function(n) {
    return Gr(n, i);
  };
}
function sn(i, n, f) {
  if (n === void 0)
    return i;
  switch (f ?? 3) {
    case 1:
      return function(s) {
        return i.call(n, s);
      };
    case 3:
      return function(s, d, m) {
        return i.call(n, s, d, m);
      };
    case 4:
      return function(s, d, m, _) {
        return i.call(n, s, d, m, _);
      };
  }
  return function() {
    return i.apply(n, arguments);
  };
}
function Ou(i, n, f) {
  return i == null ? Un : be(i) ? sn(i, n, f) : pt(i) && !gt(i) ? Tt(i) : $n(i);
}
function kn(i, n) {
  return Ou(i, n, 1 / 0);
}
ae.iteratee = kn;
function Ae(i, n, f) {
  return ae.iteratee !== kn ? ae.iteratee(i, n) : Ou(i, n, f);
}
function Mu(i, n, f) {
  n = Ae(n, f);
  for (var s = me(i), d = s.length, m = {}, _ = 0; _ < d; _++) {
    var D = s[_];
    m[D] = n(i[D], D, i);
  }
  return m;
}
function Wr() {
}
function Iu(i) {
  return i == null ? Wr : function(n) {
    return jr(i, n);
  };
}
function Pu(i, n, f) {
  var s = Array(Math.max(0, i));
  n = sn(n, f, 1);
  for (var d = 0; d < i; d++)
    s[d] = n(d);
  return s;
}
function Sn(i, n) {
  return n == null && (n = i, i = 0), i + Math.floor(Math.random() * (n - i + 1));
}
const kt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function Uu(i) {
  var n = function(m) {
    return i[m];
  }, f = "(?:" + me(i).join("|") + ")", s = RegExp(f), d = RegExp(f, "g");
  return function(m) {
    return m = m == null ? "" : "" + m, s.test(m) ? m.replace(d, n) : m;
  };
}
const $u = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, ku = Uu($u), eo = kr($u), Vu = Uu(eo), Lu = ae.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var Fr = /(.)^/, to = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, no = /\\|'|\r|\n|\u2028|\u2029/g;
function ro(i) {
  return "\\" + to[i];
}
var io = /^\s*(\w|\$)+\s*$/;
function qu(i, n, f) {
  !n && f && (n = f), n = qr({}, n, ae.templateSettings);
  var s = RegExp([
    (n.escape || Fr).source,
    (n.interpolate || Fr).source,
    (n.evaluate || Fr).source
  ].join("|") + "|$", "g"), d = 0, m = "__p+='";
  i.replace(s, function(U, G, te, Ke, He) {
    return m += i.slice(d, He).replace(no, ro), d = He + U.length, G ? m += `'+
((__t=(` + G + `))==null?'':_.escape(__t))+
'` : te ? m += `'+
((__t=(` + te + `))==null?'':__t)+
'` : Ke && (m += `';
` + Ke + `
__p+='`), U;
  }), m += `';
`;
  var _ = n.variable;
  if (_) {
    if (!io.test(_))
      throw new Error(
        "variable is not a bare identifier: " + _
      );
  } else
    m = `with(obj||{}){
` + m + `}
`, _ = "obj";
  m = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + m + `return __p;
`;
  var D;
  try {
    D = new Function(_, "_", m);
  } catch (U) {
    throw U.source = m, U;
  }
  var M = function(U) {
    return D.call(this, U, ae);
  };
  return M.source = "function(" + _ + `){
` + m + "}", M;
}
function Ru(i, n, f) {
  n = an(n);
  var s = n.length;
  if (!s)
    return be(f) ? f.call(i) : f;
  for (var d = 0; d < s; d++) {
    var m = i == null ? void 0 : i[n[d]];
    m === void 0 && (m = f, d = s), i = be(m) ? m.call(i) : m;
  }
  return i;
}
var uo = 0;
function Gu(i) {
  var n = ++uo + "";
  return i ? i + n : n;
}
function ju(i) {
  var n = ae(i);
  return n._chain = !0, n;
}
function Wu(i, n, f, s, d) {
  if (!(s instanceof n))
    return i.apply(f, d);
  var m = Du(i.prototype), _ = i.apply(m, d);
  return pt(_) ? _ : m;
}
var Et = xe(function(i, n) {
  var f = Et.placeholder, s = function() {
    for (var d = 0, m = n.length, _ = Array(m), D = 0; D < m; D++)
      _[D] = n[D] === f ? arguments[d++] : n[D];
    for (; d < arguments.length; )
      _.push(arguments[d++]);
    return Wu(i, s, this, this, _);
  };
  return s;
});
Et.placeholder = ae;
const Br = xe(function(i, n, f) {
  if (!be(i))
    throw new TypeError("Bind must be called on a function");
  var s = xe(function(d) {
    return Wu(i, s, n, this, f.concat(d));
  });
  return s;
}), Me = du(Se);
function Dt(i, n, f, s) {
  if (s = s || [], !n && n !== 0)
    n = 1 / 0;
  else if (n <= 0)
    return s.concat(i);
  for (var d = s.length, m = 0, _ = Se(i); m < _; m++) {
    var D = i[m];
    if (Me(D) && (gt(D) || Pn(D)))
      if (n > 1)
        Dt(D, n - 1, f, s), d = s.length;
      else
        for (var M = 0, U = D.length; M < U; )
          s[d++] = D[M++];
    else
      f || (s[d++] = D);
  }
  return s;
}
const Bu = xe(function(i, n) {
  n = Dt(n, !1, !1);
  var f = n.length;
  if (f < 1)
    throw new Error("bindAll must be passed function names");
  for (; f--; ) {
    var s = n[f];
    i[s] = Br(i[s], i);
  }
  return i;
});
function zu(i, n) {
  var f = function(s) {
    var d = f.cache, m = "" + (n ? n.apply(this, arguments) : s);
    return mt(d, m) || (d[m] = i.apply(this, arguments)), d[m];
  };
  return f.cache = {}, f;
}
const zr = xe(function(i, n, f) {
  return setTimeout(function() {
    return i.apply(null, f);
  }, n);
}), Ju = Et(zr, ae, 1);
function Xu(i, n, f) {
  var s, d, m, _, D = 0;
  f || (f = {});
  var M = function() {
    D = f.leading === !1 ? 0 : kt(), s = null, _ = i.apply(d, m), s || (d = m = null);
  }, U = function() {
    var G = kt();
    !D && f.leading === !1 && (D = G);
    var te = n - (G - D);
    return d = this, m = arguments, te <= 0 || te > n ? (s && (clearTimeout(s), s = null), D = G, _ = i.apply(d, m), s || (d = m = null)) : !s && f.trailing !== !1 && (s = setTimeout(M, te)), _;
  };
  return U.cancel = function() {
    clearTimeout(s), D = 0, s = d = m = null;
  }, U;
}
function Qu(i, n, f) {
  var s, d, m, _, D, M = function() {
    var G = kt() - d;
    n > G ? s = setTimeout(M, n - G) : (s = null, f || (_ = i.apply(D, m)), s || (m = D = null));
  }, U = xe(function(G) {
    return D = this, m = G, d = kt(), s || (s = setTimeout(M, n), f && (_ = i.apply(D, m))), _;
  });
  return U.cancel = function() {
    clearTimeout(s), s = m = D = null;
  }, U;
}
function Yu(i, n) {
  return Et(n, i);
}
function Vn(i) {
  return function() {
    return !i.apply(this, arguments);
  };
}
function Ku() {
  var i = arguments, n = i.length - 1;
  return function() {
    for (var f = n, s = i[n].apply(this, arguments); f--; )
      s = i[f].call(this, s);
    return s;
  };
}
function Zu(i, n) {
  return function() {
    if (--i < 1)
      return n.apply(this, arguments);
  };
}
function Jr(i, n) {
  var f;
  return function() {
    return --i > 0 && (f = n.apply(this, arguments)), i <= 1 && (n = null), f;
  };
}
const ea = Et(Jr, 2);
function Xr(i, n, f) {
  n = Ae(n, f);
  for (var s = me(i), d, m = 0, _ = s.length; m < _; m++)
    if (d = s[m], n(i[d], d, i))
      return d;
}
function ta(i) {
  return function(n, f, s) {
    f = Ae(f, s);
    for (var d = Se(n), m = i > 0 ? 0 : d - 1; m >= 0 && m < d; m += i)
      if (f(n[m], m, n))
        return m;
    return -1;
  };
}
const Ln = ta(1), Qr = ta(-1);
function Yr(i, n, f, s) {
  f = Ae(f, s, 1);
  for (var d = f(n), m = 0, _ = Se(i); m < _; ) {
    var D = Math.floor((m + _) / 2);
    f(i[D]) < d ? m = D + 1 : _ = D;
  }
  return m;
}
function na(i, n, f) {
  return function(s, d, m) {
    var _ = 0, D = Se(s);
    if (typeof m == "number")
      i > 0 ? _ = m >= 0 ? m : Math.max(m + D, _) : D = m >= 0 ? Math.min(m + 1, D) : m + D + 1;
    else if (f && m && D)
      return m = f(s, d), s[m] === d ? m : -1;
    if (d !== d)
      return m = n(un.call(s, _, D), Nr), m >= 0 ? m + _ : -1;
    for (m = i > 0 ? _ : D - 1; m >= 0 && m < D; m += i)
      if (s[m] === d)
        return m;
    return -1;
  };
}
const Kr = na(1, Ln, Yr), ra = na(-1, Qr);
function tn(i, n, f) {
  var s = Me(i) ? Ln : Xr, d = s(i, n, f);
  if (d !== void 0 && d !== -1)
    return i[d];
}
function ia(i, n) {
  return tn(i, Tt(n));
}
function je(i, n, f) {
  n = sn(n, f);
  var s, d;
  if (Me(i))
    for (s = 0, d = i.length; s < d; s++)
      n(i[s], s, i);
  else {
    var m = me(i);
    for (s = 0, d = m.length; s < d; s++)
      n(i[m[s]], m[s], i);
  }
  return i;
}
function st(i, n, f) {
  n = Ae(n, f);
  for (var s = !Me(i) && me(i), d = (s || i).length, m = Array(d), _ = 0; _ < d; _++) {
    var D = s ? s[_] : _;
    m[_] = n(i[D], D, i);
  }
  return m;
}
function ua(i) {
  var n = function(f, s, d, m) {
    var _ = !Me(f) && me(f), D = (_ || f).length, M = i > 0 ? 0 : D - 1;
    for (m || (d = f[_ ? _[M] : M], M += i); M >= 0 && M < D; M += i) {
      var U = _ ? _[M] : M;
      d = s(d, f[U], U, f);
    }
    return d;
  };
  return function(f, s, d, m) {
    var _ = arguments.length >= 3;
    return n(f, sn(s, m, 4), d, _);
  };
}
const Pt = ua(1), An = ua(-1);
function dt(i, n, f) {
  var s = [];
  return n = Ae(n, f), je(i, function(d, m, _) {
    n(d, m, _) && s.push(d);
  }), s;
}
function aa(i, n, f) {
  return dt(i, Vn(Ae(n)), f);
}
function Hn(i, n, f) {
  n = Ae(n, f);
  for (var s = !Me(i) && me(i), d = (s || i).length, m = 0; m < d; m++) {
    var _ = s ? s[m] : m;
    if (!n(i[_], _, i))
      return !1;
  }
  return !0;
}
function Nn(i, n, f) {
  n = Ae(n, f);
  for (var s = !Me(i) && me(i), d = (s || i).length, m = 0; m < d; m++) {
    var _ = s ? s[m] : m;
    if (n(i[_], _, i))
      return !0;
  }
  return !1;
}
function qe(i, n, f, s) {
  return Me(i) || (i = Ct(i)), (typeof f != "number" || s) && (f = 0), Kr(i, n, f) >= 0;
}
const sa = xe(function(i, n, f) {
  var s, d;
  return be(n) ? d = n : (n = an(n), s = n.slice(0, -1), n = n[n.length - 1]), st(i, function(m) {
    var _ = d;
    if (!_) {
      if (s && s.length && (m = Gr(m, s)), m == null)
        return;
      _ = m[n];
    }
    return _ == null ? _ : _.apply(m, f);
  });
});
function qn(i, n) {
  return st(i, $n(n));
}
function oa(i, n) {
  return dt(i, Tt(n));
}
function Zr(i, n, f) {
  var s = -1 / 0, d = -1 / 0, m, _;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Me(i) ? i : Ct(i);
    for (var D = 0, M = i.length; D < M; D++)
      m = i[D], m != null && m > s && (s = m);
  } else
    n = Ae(n, f), je(i, function(U, G, te) {
      _ = n(U, G, te), (_ > d || _ === -1 / 0 && s === -1 / 0) && (s = U, d = _);
    });
  return s;
}
function la(i, n, f) {
  var s = 1 / 0, d = 1 / 0, m, _;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Me(i) ? i : Ct(i);
    for (var D = 0, M = i.length; D < M; D++)
      m = i[D], m != null && m < s && (s = m);
  } else
    n = Ae(n, f), je(i, function(U, G, te) {
      _ = n(U, G, te), (_ < d || _ === 1 / 0 && s === 1 / 0) && (s = U, d = _);
    });
  return s;
}
var ao = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function ei(i) {
  return i ? gt(i) ? un.call(i) : In(i) ? i.match(ao) : Me(i) ? st(i, Un) : Ct(i) : [];
}
function ti(i, n, f) {
  if (n == null || f)
    return Me(i) || (i = Ct(i)), i[Sn(i.length - 1)];
  var s = ei(i), d = Se(s);
  n = Math.max(Math.min(n, d), 0);
  for (var m = d - 1, _ = 0; _ < n; _++) {
    var D = Sn(_, m), M = s[_];
    s[_] = s[D], s[D] = M;
  }
  return s.slice(0, n);
}
function ca(i) {
  return ti(i, 1 / 0);
}
function fa(i, n, f) {
  var s = 0;
  return n = Ae(n, f), qn(st(i, function(d, m, _) {
    return {
      value: d,
      index: s++,
      criteria: n(d, m, _)
    };
  }).sort(function(d, m) {
    var _ = d.criteria, D = m.criteria;
    if (_ !== D) {
      if (_ > D || _ === void 0)
        return 1;
      if (_ < D || D === void 0)
        return -1;
    }
    return d.index - m.index;
  }), "value");
}
function Rn(i, n) {
  return function(f, s, d) {
    var m = n ? [[], []] : {};
    return s = Ae(s, d), je(f, function(_, D) {
      var M = s(_, D, f);
      i(m, _, M);
    }), m;
  };
}
const ha = Rn(function(i, n, f) {
  mt(i, f) ? i[f].push(n) : i[f] = [n];
}), da = Rn(function(i, n, f) {
  i[f] = n;
}), pa = Rn(function(i, n, f) {
  mt(i, f) ? i[f]++ : i[f] = 1;
}), ga = Rn(function(i, n, f) {
  i[f ? 0 : 1].push(n);
}, !0);
function ma(i) {
  return i == null ? 0 : Me(i) ? i.length : me(i).length;
}
function so(i, n, f) {
  return n in f;
}
const ni = xe(function(i, n) {
  var f = {}, s = n[0];
  if (i == null)
    return f;
  be(s) ? (n.length > 1 && (s = sn(s, n[1])), n = Vt(i)) : (s = so, n = Dt(n, !1, !1), i = Object(i));
  for (var d = 0, m = n.length; d < m; d++) {
    var _ = n[d], D = i[_];
    s(D, _, i) && (f[_] = D);
  }
  return f;
}), va = xe(function(i, n) {
  var f = n[0], s;
  return be(f) ? (f = Vn(f), n.length > 1 && (s = n[1])) : (n = st(Dt(n, !1, !1), String), f = function(d, m) {
    return !qe(n, m);
  }), ni(i, f, s);
});
function ri(i, n, f) {
  return un.call(i, 0, Math.max(0, i.length - (n == null || f ? 1 : n)));
}
function Ut(i, n, f) {
  return i == null || i.length < 1 ? n == null || f ? void 0 : [] : n == null || f ? i[0] : ri(i, i.length - n);
}
function xt(i, n, f) {
  return un.call(i, n == null || f ? 1 : n);
}
function ya(i, n, f) {
  return i == null || i.length < 1 ? n == null || f ? void 0 : [] : n == null || f ? i[i.length - 1] : xt(i, Math.max(0, i.length - n));
}
function Fa(i) {
  return dt(i, Boolean);
}
function ba(i, n) {
  return Dt(i, n, !1);
}
const ii = xe(function(i, n) {
  return n = Dt(n, !0, !0), dt(i, function(f) {
    return !qe(n, f);
  });
}), wa = xe(function(i, n) {
  return ii(i, n);
});
function nn(i, n, f, s) {
  Er(n) || (s = f, f = n, n = !1), f != null && (f = Ae(f, s));
  for (var d = [], m = [], _ = 0, D = Se(i); _ < D; _++) {
    var M = i[_], U = f ? f(M, _, i) : M;
    n && !f ? ((!_ || m !== U) && d.push(M), m = U) : f ? qe(m, U) || (m.push(U), d.push(M)) : qe(d, M) || d.push(M);
  }
  return d;
}
const _a = xe(function(i) {
  return nn(Dt(i, !0, !0));
});
function xa(i) {
  for (var n = [], f = arguments.length, s = 0, d = Se(i); s < d; s++) {
    var m = i[s];
    if (!qe(n, m)) {
      var _;
      for (_ = 1; _ < f && qe(arguments[_], m); _++)
        ;
      _ === f && n.push(m);
    }
  }
  return n;
}
function rn(i) {
  for (var n = i && Zr(i, Se).length || 0, f = Array(n), s = 0; s < n; s++)
    f[s] = qn(i, s);
  return f;
}
const Ta = xe(rn);
function Ca(i, n) {
  for (var f = {}, s = 0, d = Se(i); s < d; s++)
    n ? f[i[s]] = n[s] : f[i[s][0]] = i[s][1];
  return f;
}
function Ea(i, n, f) {
  n == null && (n = i || 0, i = 0), f || (f = n < i ? -1 : 1);
  for (var s = Math.max(Math.ceil((n - i) / f), 0), d = Array(s), m = 0; m < s; m++, i += f)
    d[m] = i;
  return d;
}
function Da(i, n) {
  if (n == null || n < 1)
    return [];
  for (var f = [], s = 0, d = i.length; s < d; )
    f.push(un.call(i, s, s += n));
  return f;
}
function ui(i, n) {
  return i._chain ? ae(n).chain() : n;
}
function ai(i) {
  return je(en(i), function(n) {
    var f = ae[n] = i[n];
    ae.prototype[n] = function() {
      var s = [this._wrapped];
      return $s.apply(s, arguments), ui(this, f.apply(ae, s));
    };
  }), ae;
}
je(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(i) {
  var n = Mn[i];
  ae.prototype[i] = function() {
    var f = this._wrapped;
    return f != null && (n.apply(f, arguments), (i === "shift" || i === "splice") && f.length === 0 && delete f[0]), ui(this, f);
  };
});
je(["concat", "join", "slice"], function(i) {
  var n = Mn[i];
  ae.prototype[i] = function() {
    var f = this._wrapped;
    return f != null && (f = n.apply(f, arguments)), ui(this, f);
  };
});
const oo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: xr,
  after: Zu,
  all: Hn,
  allKeys: Vt,
  any: Nn,
  assign: $t,
  before: Jr,
  bind: Br,
  bindAll: Bu,
  chain: ju,
  chunk: Da,
  clone: Au,
  collect: st,
  compact: Fa,
  compose: Ku,
  constant: Or,
  contains: qe,
  countBy: pa,
  create: Su,
  debounce: Qu,
  default: ae,
  defaults: qr,
  defer: Ju,
  delay: zr,
  detect: tn,
  difference: ii,
  drop: xt,
  each: je,
  escape: ku,
  every: Hn,
  extend: Lr,
  extendOwn: $t,
  filter: dt,
  find: tn,
  findIndex: Ln,
  findKey: Xr,
  findLastIndex: Qr,
  findWhere: ia,
  first: Ut,
  flatten: ba,
  foldl: Pt,
  foldr: An,
  forEach: je,
  functions: en,
  get: jr,
  groupBy: ha,
  has: Nu,
  head: Ut,
  identity: Un,
  include: qe,
  includes: qe,
  indexBy: da,
  indexOf: Kr,
  initial: ri,
  inject: Pt,
  intersection: xa,
  invert: kr,
  invoke: sa,
  isArguments: Pn,
  isArray: gt,
  isArrayBuffer: Ar,
  isBoolean: Er,
  isDataView: Zt,
  isDate: au,
  isElement: uu,
  isEmpty: mu,
  isEqual: yu,
  isError: ou,
  isFinite: hu,
  isFunction: be,
  isMap: _u,
  isMatch: Ir,
  isNaN: Nr,
  isNull: iu,
  isNumber: Dr,
  isObject: pt,
  isRegExp: su,
  isSet: Tu,
  isString: In,
  isSymbol: Sr,
  isTypedArray: Mr,
  isUndefined: Cr,
  isWeakMap: xu,
  isWeakSet: Cu,
  iteratee: kn,
  keys: me,
  last: ya,
  lastIndexOf: ra,
  map: st,
  mapObject: Mu,
  matcher: Tt,
  matches: Tt,
  max: Zr,
  memoize: zu,
  methods: en,
  min: la,
  mixin: ai,
  negate: Vn,
  noop: Wr,
  now: kt,
  object: Ca,
  omit: va,
  once: ea,
  pairs: Eu,
  partial: Et,
  partition: ga,
  pick: ni,
  pluck: qn,
  property: $n,
  propertyOf: Iu,
  random: Sn,
  range: Ea,
  reduce: Pt,
  reduceRight: An,
  reject: aa,
  rest: xt,
  restArguments: xe,
  result: Ru,
  sample: ti,
  select: dt,
  shuffle: ca,
  size: ma,
  some: Nn,
  sortBy: fa,
  sortedIndex: Yr,
  tail: xt,
  take: Ut,
  tap: Hu,
  template: qu,
  templateSettings: Lu,
  throttle: Xu,
  times: Pu,
  toArray: ei,
  toPath: Rr,
  transpose: rn,
  unescape: Vu,
  union: _a,
  uniq: nn,
  unique: nn,
  uniqueId: Gu,
  unzip: rn,
  values: Ct,
  where: oa,
  without: wa,
  wrap: Yu,
  zip: Ta
}, Symbol.toStringTag, { value: "Module" }));
var On = ai(oo);
On._ = On;
const lo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: xr,
  after: Zu,
  all: Hn,
  allKeys: Vt,
  any: Nn,
  assign: $t,
  before: Jr,
  bind: Br,
  bindAll: Bu,
  chain: ju,
  chunk: Da,
  clone: Au,
  collect: st,
  compact: Fa,
  compose: Ku,
  constant: Or,
  contains: qe,
  countBy: pa,
  create: Su,
  debounce: Qu,
  default: On,
  defaults: qr,
  defer: Ju,
  delay: zr,
  detect: tn,
  difference: ii,
  drop: xt,
  each: je,
  escape: ku,
  every: Hn,
  extend: Lr,
  extendOwn: $t,
  filter: dt,
  find: tn,
  findIndex: Ln,
  findKey: Xr,
  findLastIndex: Qr,
  findWhere: ia,
  first: Ut,
  flatten: ba,
  foldl: Pt,
  foldr: An,
  forEach: je,
  functions: en,
  get: jr,
  groupBy: ha,
  has: Nu,
  head: Ut,
  identity: Un,
  include: qe,
  includes: qe,
  indexBy: da,
  indexOf: Kr,
  initial: ri,
  inject: Pt,
  intersection: xa,
  invert: kr,
  invoke: sa,
  isArguments: Pn,
  isArray: gt,
  isArrayBuffer: Ar,
  isBoolean: Er,
  isDataView: Zt,
  isDate: au,
  isElement: uu,
  isEmpty: mu,
  isEqual: yu,
  isError: ou,
  isFinite: hu,
  isFunction: be,
  isMap: _u,
  isMatch: Ir,
  isNaN: Nr,
  isNull: iu,
  isNumber: Dr,
  isObject: pt,
  isRegExp: su,
  isSet: Tu,
  isString: In,
  isSymbol: Sr,
  isTypedArray: Mr,
  isUndefined: Cr,
  isWeakMap: xu,
  isWeakSet: Cu,
  iteratee: kn,
  keys: me,
  last: ya,
  lastIndexOf: ra,
  map: st,
  mapObject: Mu,
  matcher: Tt,
  matches: Tt,
  max: Zr,
  memoize: zu,
  methods: en,
  min: la,
  mixin: ai,
  negate: Vn,
  noop: Wr,
  now: kt,
  object: Ca,
  omit: va,
  once: ea,
  pairs: Eu,
  partial: Et,
  partition: ga,
  pick: ni,
  pluck: qn,
  property: $n,
  propertyOf: Iu,
  random: Sn,
  range: Ea,
  reduce: Pt,
  reduceRight: An,
  reject: aa,
  rest: xt,
  restArguments: xe,
  result: Ru,
  sample: ti,
  select: dt,
  shuffle: ca,
  size: ma,
  some: Nn,
  sortBy: fa,
  sortedIndex: Yr,
  tail: xt,
  take: Ut,
  tap: Hu,
  template: qu,
  templateSettings: Lu,
  throttle: Xu,
  times: Pu,
  toArray: ei,
  toPath: Rr,
  transpose: rn,
  unescape: Vu,
  union: _a,
  uniq: nn,
  unique: nn,
  uniqueId: Gu,
  unzip: rn,
  values: Ct,
  where: oa,
  without: wa,
  wrap: Yu,
  zip: Ta
}, Symbol.toStringTag, { value: "Module" })), co = /* @__PURE__ */ bs(lo);
(function(i) {
  (function(n) {
    var f = typeof self == "object" && self.self === self && self || typeof Yt == "object" && Yt.global === Yt && Yt;
    {
      var s = co, d;
      try {
        d = Qi();
      } catch {
      }
      n(f, i, s, d);
    }
  })(function(n, f, s, d) {
    var m = n.Backbone, _ = Array.prototype.slice;
    f.VERSION = "1.6.0", f.$ = d, f.noConflict = function() {
      return n.Backbone = m, this;
    }, f.emulateHTTP = !1, f.emulateJSON = !1;
    var D = f.Events = {}, M = /\s+/, U, G = function(c, p, y, x, A) {
      var O = 0, L;
      if (y && typeof y == "object")
        for (x !== void 0 && ("context" in A) && A.context === void 0 && (A.context = x), L = s.keys(y); O < L.length; O++)
          p = G(c, p, L[O], y[L[O]], A);
      else if (y && M.test(y))
        for (L = y.split(M); O < L.length; O++)
          p = c(p, L[O], x, A);
      else
        p = c(p, y, x, A);
      return p;
    };
    D.on = function(c, p, y) {
      if (this._events = G(te, this._events || {}, c, p, {
        context: y,
        ctx: this,
        listening: U
      }), U) {
        var x = this._listeners || (this._listeners = {});
        x[U.id] = U, U.interop = !1;
      }
      return this;
    }, D.listenTo = function(c, p, y) {
      if (!c)
        return this;
      var x = c._listenId || (c._listenId = s.uniqueId("l")), A = this._listeningTo || (this._listeningTo = {}), O = U = A[x];
      O || (this._listenId || (this._listenId = s.uniqueId("l")), O = U = A[x] = new W(this, c));
      var L = Ke(c, p, y, this);
      if (U = void 0, L)
        throw L;
      return O.interop && O.on(p, y), this;
    };
    var te = function(c, p, y, x) {
      if (y) {
        var A = c[p] || (c[p] = []), O = x.context, L = x.ctx, Z = x.listening;
        Z && Z.count++, A.push({ callback: y, context: O, ctx: O || L, listening: Z });
      }
      return c;
    }, Ke = function(c, p, y, x) {
      try {
        c.on(p, y, x);
      } catch (A) {
        return A;
      }
    };
    D.off = function(c, p, y) {
      return this._events ? (this._events = G(He, this._events, c, p, {
        context: y,
        listeners: this._listeners
      }), this) : this;
    }, D.stopListening = function(c, p, y) {
      var x = this._listeningTo;
      if (!x)
        return this;
      for (var A = c ? [c._listenId] : s.keys(x), O = 0; O < A.length; O++) {
        var L = x[A[O]];
        if (!L)
          break;
        L.obj.off(p, y, this), L.interop && L.off(p, y);
      }
      return s.isEmpty(x) && (this._listeningTo = void 0), this;
    };
    var He = function(c, p, y, x) {
      if (c) {
        var A = x.context, O = x.listeners, L = 0, Z;
        if (!p && !A && !y) {
          for (Z = s.keys(O); L < Z.length; L++)
            O[Z[L]].cleanup();
          return;
        }
        for (Z = p ? [p] : s.keys(c); L < Z.length; L++) {
          p = Z[L];
          var ie = c[p];
          if (!ie)
            break;
          for (var pe = [], he = 0; he < ie.length; he++) {
            var $ = ie[he];
            if (y && y !== $.callback && y !== $.callback._callback || A && A !== $.context)
              pe.push($);
            else {
              var ce = $.listening;
              ce && ce.off(p, y);
            }
          }
          pe.length ? c[p] = pe : delete c[p];
        }
        return c;
      }
    };
    D.once = function(c, p, y) {
      var x = G(R, {}, c, p, this.off.bind(this));
      return typeof c == "string" && y == null && (p = void 0), this.on(x, p, y);
    }, D.listenToOnce = function(c, p, y) {
      var x = G(R, {}, p, y, this.stopListening.bind(this, c));
      return this.listenTo(c, x);
    };
    var R = function(c, p, y, x) {
      if (y) {
        var A = c[p] = s.once(function() {
          x(p, A), y.apply(this, arguments);
        });
        A._callback = y;
      }
      return c;
    };
    D.trigger = function(c) {
      if (!this._events)
        return this;
      for (var p = Math.max(0, arguments.length - 1), y = Array(p), x = 0; x < p; x++)
        y[x] = arguments[x + 1];
      return G(z, this._events, c, void 0, y), this;
    };
    var z = function(c, p, y, x) {
      if (c) {
        var A = c[p], O = c.all;
        A && O && (O = O.slice()), A && Ie(A, x), O && Ie(O, [p].concat(x));
      }
      return c;
    }, Ie = function(c, p) {
      var y, x = -1, A = c.length, O = p[0], L = p[1], Z = p[2];
      switch (p.length) {
        case 0:
          for (; ++x < A; )
            (y = c[x]).callback.call(y.ctx);
          return;
        case 1:
          for (; ++x < A; )
            (y = c[x]).callback.call(y.ctx, O);
          return;
        case 2:
          for (; ++x < A; )
            (y = c[x]).callback.call(y.ctx, O, L);
          return;
        case 3:
          for (; ++x < A; )
            (y = c[x]).callback.call(y.ctx, O, L, Z);
          return;
        default:
          for (; ++x < A; )
            (y = c[x]).callback.apply(y.ctx, p);
          return;
      }
    }, W = function(c, p) {
      this.id = c._listenId, this.listener = c, this.obj = p, this.interop = !0, this.count = 0, this._events = void 0;
    };
    W.prototype.on = D.on, W.prototype.off = function(c, p) {
      var y;
      this.interop ? (this._events = G(He, this._events, c, p, {
        context: void 0,
        listeners: void 0
      }), y = !this._events) : (this.count--, y = this.count === 0), y && this.cleanup();
    }, W.prototype.cleanup = function() {
      delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
    }, D.bind = D.on, D.unbind = D.off, s.extend(f, D);
    var Ze = f.Model = function(c, p) {
      var y = c || {};
      p || (p = {}), this.preinitialize.apply(this, arguments), this.cid = s.uniqueId(this.cidPrefix), this.attributes = {}, p.collection && (this.collection = p.collection), p.parse && (y = this.parse(y, p) || {});
      var x = s.result(this, "defaults");
      y = s.defaults(s.extend({}, x, y), x), this.set(y, p), this.changed = {}, this.initialize.apply(this, arguments);
    };
    s.extend(Ze.prototype, D, {
      // A hash of attributes whose current and previous value differ.
      changed: null,
      // The value returned during the last failed validation.
      validationError: null,
      // The default name for the JSON `id` attribute is `"id"`. MongoDB and
      // CouchDB users may want to set this to `"_id"`.
      idAttribute: "id",
      // The prefix is used to create the client id which is used to identify models locally.
      // You may want to override this if you're experiencing name clashes with model ids.
      cidPrefix: "c",
      // preinitialize is an empty function by default. You can override it with a function
      // or object.  preinitialize will run before any instantiation logic is run in the Model.
      preinitialize: function() {
      },
      // Initialize is an empty function by default. Override it with your own
      // initialization logic.
      initialize: function() {
      },
      // Return a copy of the model's `attributes` object.
      toJSON: function(c) {
        return s.clone(this.attributes);
      },
      // Proxy `Backbone.sync` by default -- but override this if you need
      // custom syncing semantics for *this* particular model.
      sync: function() {
        return f.sync.apply(this, arguments);
      },
      // Get the value of an attribute.
      get: function(c) {
        return this.attributes[c];
      },
      // Get the HTML-escaped value of an attribute.
      escape: function(c) {
        return s.escape(this.get(c));
      },
      // Returns `true` if the attribute contains a value that is not null
      // or undefined.
      has: function(c) {
        return this.get(c) != null;
      },
      // Special-cased proxy to underscore's `_.matches` method.
      matches: function(c) {
        return !!s.iteratee(c, this)(this.attributes);
      },
      // Set a hash of model attributes on the object, firing `"change"`. This is
      // the core primitive operation of a model, updating the data and notifying
      // anyone who needs to know about the change in state. The heart of the beast.
      set: function(c, p, y) {
        if (c == null)
          return this;
        var x;
        if (typeof c == "object" ? (x = c, y = p) : (x = {})[c] = p, y || (y = {}), !this._validate(x, y))
          return !1;
        var A = y.unset, O = y.silent, L = [], Z = this._changing;
        this._changing = !0, Z || (this._previousAttributes = s.clone(this.attributes), this.changed = {});
        var ie = this.attributes, pe = this.changed, he = this._previousAttributes;
        for (var $ in x)
          p = x[$], s.isEqual(ie[$], p) || L.push($), s.isEqual(he[$], p) ? delete pe[$] : pe[$] = p, A ? delete ie[$] : ie[$] = p;
        if (this.idAttribute in x) {
          var ce = this.id;
          this.id = this.get(this.idAttribute), this.trigger("changeId", this, ce, y);
        }
        if (!O) {
          L.length && (this._pending = y);
          for (var Be = 0; Be < L.length; Be++)
            this.trigger("change:" + L[Be], this, ie[L[Be]], y);
        }
        if (Z)
          return this;
        if (!O)
          for (; this._pending; )
            y = this._pending, this._pending = !1, this.trigger("change", this, y);
        return this._pending = !1, this._changing = !1, this;
      },
      // Remove an attribute from the model, firing `"change"`. `unset` is a noop
      // if the attribute doesn't exist.
      unset: function(c, p) {
        return this.set(c, void 0, s.extend({}, p, { unset: !0 }));
      },
      // Clear all attributes on the model, firing `"change"`.
      clear: function(c) {
        var p = {};
        for (var y in this.attributes)
          p[y] = void 0;
        return this.set(p, s.extend({}, c, { unset: !0 }));
      },
      // Determine if the model has changed since the last `"change"` event.
      // If you specify an attribute name, determine if that attribute has changed.
      hasChanged: function(c) {
        return c == null ? !s.isEmpty(this.changed) : s.has(this.changed, c);
      },
      // Return an object containing all the attributes that have changed, or
      // false if there are no changed attributes. Useful for determining what
      // parts of a view need to be updated and/or what attributes need to be
      // persisted to the server. Unset attributes will be set to undefined.
      // You can also pass an attributes object to diff against the model,
      // determining if there *would be* a change.
      changedAttributes: function(c) {
        if (!c)
          return this.hasChanged() ? s.clone(this.changed) : !1;
        var p = this._changing ? this._previousAttributes : this.attributes, y = {}, x;
        for (var A in c) {
          var O = c[A];
          s.isEqual(p[A], O) || (y[A] = O, x = !0);
        }
        return x ? y : !1;
      },
      // Get the previous value of an attribute, recorded at the time the last
      // `"change"` event was fired.
      previous: function(c) {
        return c == null || !this._previousAttributes ? null : this._previousAttributes[c];
      },
      // Get all of the attributes of the model at the time of the previous
      // `"change"` event.
      previousAttributes: function() {
        return s.clone(this._previousAttributes);
      },
      // Fetch the model from the server, merging the response with the model's
      // local attributes. Any changed attributes will trigger a "change" event.
      fetch: function(c) {
        c = s.extend({ parse: !0 }, c);
        var p = this, y = c.success;
        return c.success = function(x) {
          var A = c.parse ? p.parse(x, c) : x;
          if (!p.set(A, c))
            return !1;
          y && y.call(c.context, p, x, c), p.trigger("sync", p, x, c);
        }, nt(this, c), this.sync("read", this, c);
      },
      // Set a hash of model attributes, and sync the model to the server.
      // If the server returns an attributes hash that differs, the model's
      // state will be `set` again.
      save: function(c, p, y) {
        var x;
        c == null || typeof c == "object" ? (x = c, y = p) : (x = {})[c] = p, y = s.extend({ validate: !0, parse: !0 }, y);
        var A = y.wait;
        if (x && !A) {
          if (!this.set(x, y))
            return !1;
        } else if (!this._validate(x, y))
          return !1;
        var O = this, L = y.success, Z = this.attributes;
        y.success = function(he) {
          O.attributes = Z;
          var $ = y.parse ? O.parse(he, y) : he;
          if (A && ($ = s.extend({}, x, $)), $ && !O.set($, y))
            return !1;
          L && L.call(y.context, O, he, y), O.trigger("sync", O, he, y);
        }, nt(this, y), x && A && (this.attributes = s.extend({}, Z, x));
        var ie = this.isNew() ? "create" : y.patch ? "patch" : "update";
        ie === "patch" && !y.attrs && (y.attrs = x);
        var pe = this.sync(ie, this, y);
        return this.attributes = Z, pe;
      },
      // Destroy this model on the server if it was already persisted.
      // Optimistically removes the model from its collection, if it has one.
      // If `wait: true` is passed, waits for the server to respond before removal.
      destroy: function(c) {
        c = c ? s.clone(c) : {};
        var p = this, y = c.success, x = c.wait, A = function() {
          p.stopListening(), p.trigger("destroy", p, p.collection, c);
        };
        c.success = function(L) {
          x && A(), y && y.call(c.context, p, L, c), p.isNew() || p.trigger("sync", p, L, c);
        };
        var O = !1;
        return this.isNew() ? s.defer(c.success) : (nt(this, c), O = this.sync("delete", this, c)), x || A(), O;
      },
      // Default URL for the model's representation on the server -- if you're
      // using Backbone's restful methods, override this to change the endpoint
      // that will be called.
      url: function() {
        var c = s.result(this, "urlRoot") || s.result(this.collection, "url") || tt();
        if (this.isNew())
          return c;
        var p = this.get(this.idAttribute);
        return c.replace(/[^\/]$/, "$&/") + encodeURIComponent(p);
      },
      // **parse** converts a response into the hash of attributes to be `set` on
      // the model. The default implementation is just to pass the response along.
      parse: function(c, p) {
        return c;
      },
      // Create a new model with identical attributes to this one.
      clone: function() {
        return new this.constructor(this.attributes);
      },
      // A model is new if it has never been saved to the server, and lacks an id.
      isNew: function() {
        return !this.has(this.idAttribute);
      },
      // Check if the model is currently in a valid state.
      isValid: function(c) {
        return this._validate({}, s.extend({}, c, { validate: !0 }));
      },
      // Run validation against the next complete set of model attributes,
      // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
      _validate: function(c, p) {
        if (!p.validate || !this.validate)
          return !0;
        c = s.extend({}, this.attributes, c);
        var y = this.validationError = this.validate(c, p) || null;
        return y ? (this.trigger("invalid", this, y, s.extend(p, { validationError: y })), !1) : !0;
      }
    });
    var Te = f.Collection = function(c, p) {
      p || (p = {}), this.preinitialize.apply(this, arguments), p.model && (this.model = p.model), p.comparator !== void 0 && (this.comparator = p.comparator), this._reset(), this.initialize.apply(this, arguments), c && this.reset(c, s.extend({ silent: !0 }, p));
    }, Ne = { add: !0, remove: !0, merge: !0 }, on = { add: !0, remove: !1 }, ln = function(c, p, y) {
      y = Math.min(Math.max(y, 0), c.length);
      var x = Array(c.length - y), A = p.length, O;
      for (O = 0; O < x.length; O++)
        x[O] = c[O + y];
      for (O = 0; O < A; O++)
        c[O + y] = p[O];
      for (O = 0; O < x.length; O++)
        c[O + A + y] = x[O];
    };
    s.extend(Te.prototype, D, {
      // The default model for a collection is just a **Backbone.Model**.
      // This should be overridden in most cases.
      model: Ze,
      // preinitialize is an empty function by default. You can override it with a function
      // or object.  preinitialize will run before any instantiation logic is run in the Collection.
      preinitialize: function() {
      },
      // Initialize is an empty function by default. Override it with your own
      // initialization logic.
      initialize: function() {
      },
      // The JSON representation of a Collection is an array of the
      // models' attributes.
      toJSON: function(c) {
        return this.map(function(p) {
          return p.toJSON(c);
        });
      },
      // Proxy `Backbone.sync` by default.
      sync: function() {
        return f.sync.apply(this, arguments);
      },
      // Add a model, or list of models to the set. `models` may be Backbone
      // Models or raw JavaScript objects to be converted to Models, or any
      // combination of the two.
      add: function(c, p) {
        return this.set(c, s.extend({ merge: !1 }, p, on));
      },
      // Remove a model, or a list of models from the set.
      remove: function(c, p) {
        p = s.extend({}, p);
        var y = !s.isArray(c);
        c = y ? [c] : c.slice();
        var x = this._removeModels(c, p);
        return !p.silent && x.length && (p.changes = { added: [], merged: [], removed: x }, this.trigger("update", this, p)), y ? x[0] : x;
      },
      // Update a collection by `set`-ing a new list of models, adding new ones,
      // removing models that are no longer present, and merging models that
      // already exist in the collection, as necessary. Similar to **Model#set**,
      // the core operation for updating the data contained by the collection.
      set: function(c, p) {
        if (c != null) {
          p = s.extend({}, Ne, p), p.parse && !this._isModel(c) && (c = this.parse(c, p) || []);
          var y = !s.isArray(c);
          c = y ? [c] : c.slice();
          var x = p.at;
          x != null && (x = +x), x > this.length && (x = this.length), x < 0 && (x += this.length + 1);
          var A = [], O = [], L = [], Z = [], ie = {}, pe = p.add, he = p.merge, $ = p.remove, ce = !1, Be = this.comparator && x == null && p.sort !== !1, Xn = s.isString(this.comparator) ? this.comparator : null, de, ve;
          for (ve = 0; ve < c.length; ve++) {
            de = c[ve];
            var Oe = this.get(de);
            if (Oe) {
              if (he && de !== Oe) {
                var rt = this._isModel(de) ? de.attributes : de;
                p.parse && (rt = Oe.parse(rt, p)), Oe.set(rt, p), L.push(Oe), Be && !ce && (ce = Oe.hasChanged(Xn));
              }
              ie[Oe.cid] || (ie[Oe.cid] = !0, A.push(Oe)), c[ve] = Oe;
            } else
              pe && (de = c[ve] = this._prepareModel(de, p), de && (O.push(de), this._addReference(de, p), ie[de.cid] = !0, A.push(de)));
          }
          if ($) {
            for (ve = 0; ve < this.length; ve++)
              de = this.models[ve], ie[de.cid] || Z.push(de);
            Z.length && this._removeModels(Z, p);
          }
          var $e = !1, it = !Be && pe && $;
          if (A.length && it ? ($e = this.length !== A.length || s.some(this.models, function(lt, Qn) {
            return lt !== A[Qn];
          }), this.models.length = 0, ln(this.models, A, 0), this.length = this.models.length) : O.length && (Be && (ce = !0), ln(this.models, O, x ?? this.length), this.length = this.models.length), ce && this.sort({ silent: !0 }), !p.silent) {
            for (ve = 0; ve < O.length; ve++)
              x != null && (p.index = x + ve), de = O[ve], de.trigger("add", de, this, p);
            (ce || $e) && this.trigger("sort", this, p), (O.length || Z.length || L.length) && (p.changes = {
              added: O,
              removed: Z,
              merged: L
            }, this.trigger("update", this, p));
          }
          return y ? c[0] : c;
        }
      },
      // When you have more items than you want to add or remove individually,
      // you can reset the entire set with a new list of models, without firing
      // any granular `add` or `remove` events. Fires `reset` when finished.
      // Useful for bulk operations and optimizations.
      reset: function(c, p) {
        p = p ? s.clone(p) : {};
        for (var y = 0; y < this.models.length; y++)
          this._removeReference(this.models[y], p);
        return p.previousModels = this.models, this._reset(), c = this.add(c, s.extend({ silent: !0 }, p)), p.silent || this.trigger("reset", this, p), c;
      },
      // Add a model to the end of the collection.
      push: function(c, p) {
        return this.add(c, s.extend({ at: this.length }, p));
      },
      // Remove a model from the end of the collection.
      pop: function(c) {
        var p = this.at(this.length - 1);
        return this.remove(p, c);
      },
      // Add a model to the beginning of the collection.
      unshift: function(c, p) {
        return this.add(c, s.extend({ at: 0 }, p));
      },
      // Remove a model from the beginning of the collection.
      shift: function(c) {
        var p = this.at(0);
        return this.remove(p, c);
      },
      // Slice out a sub-array of models from the collection.
      slice: function() {
        return _.apply(this.models, arguments);
      },
      // Get a model from the set by id, cid, model object with id or cid
      // properties, or an attributes object that is transformed through modelId.
      get: function(c) {
        if (c != null)
          return this._byId[c] || this._byId[this.modelId(this._isModel(c) ? c.attributes : c, c.idAttribute)] || c.cid && this._byId[c.cid];
      },
      // Returns `true` if the model is in the collection.
      has: function(c) {
        return this.get(c) != null;
      },
      // Get the model at the given index.
      at: function(c) {
        return c < 0 && (c += this.length), this.models[c];
      },
      // Return models with matching attributes. Useful for simple cases of
      // `filter`.
      where: function(c, p) {
        return this[p ? "find" : "filter"](c);
      },
      // Return the first model with matching attributes. Useful for simple cases
      // of `find`.
      findWhere: function(c) {
        return this.where(c, !0);
      },
      // Force the collection to re-sort itself. You don't need to call this under
      // normal circumstances, as the set will maintain sort order as each item
      // is added.
      sort: function(c) {
        var p = this.comparator;
        if (!p)
          throw new Error("Cannot sort a set without a comparator");
        c || (c = {});
        var y = p.length;
        return s.isFunction(p) && (p = p.bind(this)), y === 1 || s.isString(p) ? this.models = this.sortBy(p) : this.models.sort(p), c.silent || this.trigger("sort", this, c), this;
      },
      // Pluck an attribute from each model in the collection.
      pluck: function(c) {
        return this.map(c + "");
      },
      // Fetch the default set of models for this collection, resetting the
      // collection when they arrive. If `reset: true` is passed, the response
      // data will be passed through the `reset` method instead of `set`.
      fetch: function(c) {
        c = s.extend({ parse: !0 }, c);
        var p = c.success, y = this;
        return c.success = function(x) {
          var A = c.reset ? "reset" : "set";
          y[A](x, c), p && p.call(c.context, y, x, c), y.trigger("sync", y, x, c);
        }, nt(this, c), this.sync("read", this, c);
      },
      // Create a new instance of a model in this collection. Add the model to the
      // collection immediately, unless `wait: true` is passed, in which case we
      // wait for the server to agree.
      create: function(c, p) {
        p = p ? s.clone(p) : {};
        var y = p.wait;
        if (c = this._prepareModel(c, p), !c)
          return !1;
        y || this.add(c, p);
        var x = this, A = p.success;
        return p.success = function(O, L, Z) {
          y && (O.off("error", x._forwardPristineError, x), x.add(O, Z)), A && A.call(Z.context, O, L, Z);
        }, y && c.once("error", this._forwardPristineError, this), c.save(null, p), c;
      },
      // **parse** converts a response into a list of models to be added to the
      // collection. The default implementation is just to pass it through.
      parse: function(c, p) {
        return c;
      },
      // Create a new collection with an identical list of models as this one.
      clone: function() {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator
        });
      },
      // Define how to uniquely identify models in the collection.
      modelId: function(c, p) {
        return c[p || this.model.prototype.idAttribute || "id"];
      },
      // Get an iterator of all models in this collection.
      values: function() {
        return new et(this, oe);
      },
      // Get an iterator of all model IDs in this collection.
      keys: function() {
        return new et(this, cn);
      },
      // Get an iterator of all [ID, model] tuples in this collection.
      entries: function() {
        return new et(this, Gn);
      },
      // Private method to reset all internal state. Called when the collection
      // is first initialized or reset.
      _reset: function() {
        this.length = 0, this.models = [], this._byId = {};
      },
      // Prepare a hash of attributes (or other model) to be added to this
      // collection.
      _prepareModel: function(c, p) {
        if (this._isModel(c))
          return c.collection || (c.collection = this), c;
        p = p ? s.clone(p) : {}, p.collection = this;
        var y;
        return this.model.prototype ? y = new this.model(c, p) : y = this.model(c, p), y.validationError ? (this.trigger("invalid", this, y.validationError, p), !1) : y;
      },
      // Internal method called by both remove and set.
      _removeModels: function(c, p) {
        for (var y = [], x = 0; x < c.length; x++) {
          var A = this.get(c[x]);
          if (A) {
            var O = this.indexOf(A);
            this.models.splice(O, 1), this.length--, delete this._byId[A.cid];
            var L = this.modelId(A.attributes, A.idAttribute);
            L != null && delete this._byId[L], p.silent || (p.index = O, A.trigger("remove", A, this, p)), y.push(A), this._removeReference(A, p);
          }
        }
        return c.length > 0 && !p.silent && delete p.index, y;
      },
      // Method for checking whether an object should be considered a model for
      // the purposes of adding to the collection.
      _isModel: function(c) {
        return c instanceof Ze;
      },
      // Internal method to create a model's ties to a collection.
      _addReference: function(c, p) {
        this._byId[c.cid] = c;
        var y = this.modelId(c.attributes, c.idAttribute);
        y != null && (this._byId[y] = c), c.on("all", this._onModelEvent, this);
      },
      // Internal method to sever a model's ties to a collection.
      _removeReference: function(c, p) {
        delete this._byId[c.cid];
        var y = this.modelId(c.attributes, c.idAttribute);
        y != null && delete this._byId[y], this === c.collection && delete c.collection, c.off("all", this._onModelEvent, this);
      },
      // Internal method called every time a model in the set fires an event.
      // Sets need to update their indexes when models change ids. All other
      // events simply proxy through. "add" and "remove" events that originate
      // in other collections are ignored.
      _onModelEvent: function(c, p, y, x) {
        if (p) {
          if ((c === "add" || c === "remove") && y !== this)
            return;
          if (c === "destroy" && this.remove(p, x), c === "changeId") {
            var A = this.modelId(p.previousAttributes(), p.idAttribute), O = this.modelId(p.attributes, p.idAttribute);
            A != null && delete this._byId[A], O != null && (this._byId[O] = p);
          }
        }
        this.trigger.apply(this, arguments);
      },
      // Internal callback method used in `create`. It serves as a
      // stand-in for the `_onModelEvent` method, which is not yet bound
      // during the `wait` period of the `create` call. We still want to
      // forward any `'error'` event at the end of the `wait` period,
      // hence a customized callback.
      _forwardPristineError: function(c, p, y) {
        this.has(c) || this._onModelEvent("error", c, p, y);
      }
    });
    var a = typeof Symbol == "function" && Symbol.iterator;
    a && (Te.prototype[a] = Te.prototype.values);
    var et = function(c, p) {
      this._collection = c, this._kind = p, this._index = 0;
    }, oe = 1, cn = 2, Gn = 3;
    a && (et.prototype[a] = function() {
      return this;
    }), et.prototype.next = function() {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var c = this._collection.at(this._index);
          this._index++;
          var p;
          if (this._kind === oe)
            p = c;
          else {
            var y = this._collection.modelId(c.attributes, c.idAttribute);
            this._kind === cn ? p = y : p = [y, c];
          }
          return { value: p, done: !1 };
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    };
    var fn = f.View = function(c) {
      this.cid = s.uniqueId("view"), this.preinitialize.apply(this, arguments), s.extend(this, s.pick(c, vt)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, ue = /^(\S+)\s*(.*)$/, vt = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    s.extend(fn.prototype, D, {
      // The default `tagName` of a View's element is `"div"`.
      tagName: "div",
      // jQuery delegate for element lookup, scoped to DOM elements within the
      // current view. This should be preferred to global lookups where possible.
      $: function(c) {
        return this.$el.find(c);
      },
      // preinitialize is an empty function by default. You can override it with a function
      // or object.  preinitialize will run before any instantiation logic is run in the View
      preinitialize: function() {
      },
      // Initialize is an empty function by default. Override it with your own
      // initialization logic.
      initialize: function() {
      },
      // **render** is the core function that your view should override, in order
      // to populate its element (`this.el`), with the appropriate HTML. The
      // convention is for **render** to always return `this`.
      render: function() {
        return this;
      },
      // Remove this view by taking the element out of the DOM, and removing any
      // applicable Backbone.Events listeners.
      remove: function() {
        return this._removeElement(), this.stopListening(), this;
      },
      // Remove this view's element from the document and all event listeners
      // attached to it. Exposed for subclasses using an alternative DOM
      // manipulation API.
      _removeElement: function() {
        this.$el.remove();
      },
      // Change the view's element (`this.el` property) and re-delegate the
      // view's events on the new element.
      setElement: function(c) {
        return this.undelegateEvents(), this._setElement(c), this.delegateEvents(), this;
      },
      // Creates the `this.el` and `this.$el` references for this view using the
      // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
      // context or an element. Subclasses can override this to utilize an
      // alternative DOM manipulation API and are only required to set the
      // `this.el` property.
      _setElement: function(c) {
        this.$el = c instanceof f.$ ? c : f.$(c), this.el = this.$el[0];
      },
      // Set callbacks, where `this.events` is a hash of
      //
      // *{"event selector": "callback"}*
      //
      //     {
      //       'mousedown .title':  'edit',
      //       'click .button':     'save',
      //       'click .open':       function(e) { ... }
      //     }
      //
      // pairs. Callbacks will be bound to the view, with `this` set properly.
      // Uses event delegation for efficiency.
      // Omitting the selector binds the event to `this.el`.
      delegateEvents: function(c) {
        if (c || (c = s.result(this, "events")), !c)
          return this;
        this.undelegateEvents();
        for (var p in c) {
          var y = c[p];
          if (s.isFunction(y) || (y = this[y]), !!y) {
            var x = p.match(ue);
            this.delegate(x[1], x[2], y.bind(this));
          }
        }
        return this;
      },
      // Add a single event listener to the view's element (or a child element
      // using `selector`). This only works for delegate-able events: not `focus`,
      // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
      delegate: function(c, p, y) {
        return this.$el.on(c + ".delegateEvents" + this.cid, p, y), this;
      },
      // Clears all callbacks previously bound to the view by `delegateEvents`.
      // You usually don't need to use this, but may wish to if you have multiple
      // Backbone views attached to the same DOM element.
      undelegateEvents: function() {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
      },
      // A finer-grained `undelegateEvents` for removing a single delegated event.
      // `selector` and `listener` are both optional.
      undelegate: function(c, p, y) {
        return this.$el.off(c + ".delegateEvents" + this.cid, p, y), this;
      },
      // Produces a DOM element to be assigned to your view. Exposed for
      // subclasses using an alternative DOM manipulation API.
      _createElement: function(c) {
        return document.createElement(c);
      },
      // Ensure that the View has a DOM element to render into.
      // If `this.el` is a string, pass it through `$()`, take the first
      // matching element, and re-assign it to `el`. Otherwise, create
      // an element from the `id`, `className` and `tagName` properties.
      _ensureElement: function() {
        if (this.el)
          this.setElement(s.result(this, "el"));
        else {
          var c = s.extend({}, s.result(this, "attributes"));
          this.id && (c.id = s.result(this, "id")), this.className && (c.class = s.result(this, "className")), this.setElement(this._createElement(s.result(this, "tagName"))), this._setAttributes(c);
        }
      },
      // Set attributes from a hash on this view's element.  Exposed for
      // subclasses using an alternative DOM manipulation API.
      _setAttributes: function(c) {
        this.$el.attr(c);
      }
    });
    var jn = function(c, p, y, x) {
      switch (p) {
        case 1:
          return function() {
            return c[y](this[x]);
          };
        case 2:
          return function(A) {
            return c[y](this[x], A);
          };
        case 3:
          return function(A, O) {
            return c[y](this[x], Pe(A, this), O);
          };
        case 4:
          return function(A, O, L) {
            return c[y](this[x], Pe(A, this), O, L);
          };
        default:
          return function() {
            var A = _.call(arguments);
            return A.unshift(this[x]), c[y].apply(c, A);
          };
      }
    }, hn = function(c, p, y, x) {
      s.each(y, function(A, O) {
        p[O] && (c.prototype[O] = jn(p, A, O, x));
      });
    }, Pe = function(c, p) {
      return s.isFunction(c) ? c : s.isObject(c) && !p._isModel(c) ? Lt(c) : s.isString(c) ? function(y) {
        return y.get(c);
      } : c;
    }, Lt = function(c) {
      var p = s.matches(c);
      return function(y) {
        return p(y.attributes);
      };
    }, ot = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 0,
      foldl: 0,
      inject: 0,
      reduceRight: 0,
      foldr: 0,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 3,
      includes: 3,
      contains: 3,
      invoke: 0,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3,
      groupBy: 3,
      countBy: 3,
      sortBy: 3,
      indexBy: 3,
      findIndex: 3,
      findLastIndex: 3
    }, dn = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1
    };
    s.each([
      [Te, ot, "models"],
      [Ze, dn, "attributes"]
    ], function(c) {
      var p = c[0], y = c[1], x = c[2];
      p.mixin = function(A) {
        var O = s.reduce(s.functions(A), function(L, Z) {
          return L[Z] = 0, L;
        }, {});
        hn(p, A, O, x);
      }, hn(p, s, y, x);
    }), f.sync = function(c, p, y) {
      var x = pn[c];
      s.defaults(y || (y = {}), {
        emulateHTTP: f.emulateHTTP,
        emulateJSON: f.emulateJSON
      });
      var A = { type: x, dataType: "json" };
      if (y.url || (A.url = s.result(p, "url") || tt()), y.data == null && p && (c === "create" || c === "update" || c === "patch") && (A.contentType = "application/json", A.data = JSON.stringify(y.attrs || p.toJSON(y))), y.emulateJSON && (A.contentType = "application/x-www-form-urlencoded", A.data = A.data ? { model: A.data } : {}), y.emulateHTTP && (x === "PUT" || x === "DELETE" || x === "PATCH")) {
        A.type = "POST", y.emulateJSON && (A.data._method = x);
        var O = y.beforeSend;
        y.beforeSend = function(ie) {
          if (ie.setRequestHeader("X-HTTP-Method-Override", x), O)
            return O.apply(this, arguments);
        };
      }
      A.type !== "GET" && !y.emulateJSON && (A.processData = !1);
      var L = y.error;
      y.error = function(ie, pe, he) {
        y.textStatus = pe, y.errorThrown = he, L && L.call(y.context, ie, pe, he);
      };
      var Z = y.xhr = f.ajax(s.extend(A, y));
      return p.trigger("request", p, Z, y), Z;
    };
    var pn = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET"
    };
    f.ajax = function() {
      return f.$.ajax.apply(f.$, arguments);
    };
    var qt = f.Router = function(c) {
      c || (c = {}), this.preinitialize.apply(this, arguments), c.routes && (this.routes = c.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, Rt = /\((.*?)\)/g, gn = /(\(\?)?:\w+/g, Wn = /\*\w+/g, Bn = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(qt.prototype, D, {
      // preinitialize is an empty function by default. You can override it with a function
      // or object.  preinitialize will run before any instantiation logic is run in the Router.
      preinitialize: function() {
      },
      // Initialize is an empty function by default. Override it with your own
      // initialization logic.
      initialize: function() {
      },
      // Manually bind a single named route to a callback. For example:
      //
      //     this.route('search/:query/p:num', 'search', function(query, num) {
      //       ...
      //     });
      //
      route: function(c, p, y) {
        s.isRegExp(c) || (c = this._routeToRegExp(c)), s.isFunction(p) && (y = p, p = ""), y || (y = this[p]);
        var x = this;
        return f.history.route(c, function(A) {
          var O = x._extractParameters(c, A);
          x.execute(y, O, p) !== !1 && (x.trigger.apply(x, ["route:" + p].concat(O)), x.trigger("route", p, O), f.history.trigger("route", x, p, O));
        }), this;
      },
      // Execute a route handler with the provided parameters.  This is an
      // excellent place to do pre-route setup or post-route cleanup.
      execute: function(c, p, y) {
        c && c.apply(this, p);
      },
      // Simple proxy to `Backbone.history` to save a fragment into the history.
      navigate: function(c, p) {
        return f.history.navigate(c, p), this;
      },
      // Bind all defined routes to `Backbone.history`. We have to reverse the
      // order of the routes here to support behavior where the most general
      // routes can be defined at the bottom of the route map.
      _bindRoutes: function() {
        if (this.routes) {
          this.routes = s.result(this, "routes");
          for (var c, p = s.keys(this.routes); (c = p.pop()) != null; )
            this.route(c, this.routes[c]);
        }
      },
      // Convert a route string into a regular expression, suitable for matching
      // against the current location hash.
      _routeToRegExp: function(c) {
        return c = c.replace(Bn, "\\$&").replace(Rt, "(?:$1)?").replace(gn, function(p, y) {
          return y ? p : "([^/?]+)";
        }).replace(Wn, "([^?]*?)"), new RegExp("^" + c + "(?:\\?([\\s\\S]*))?$");
      },
      // Given a route, and a URL fragment that it matches, return the array of
      // extracted decoded parameters. Empty or unmatched parameters will be
      // treated as `null` to normalize cross-browser behavior.
      _extractParameters: function(c, p) {
        var y = c.exec(p).slice(1);
        return s.map(y, function(x, A) {
          return A === y.length - 1 ? x || null : x ? decodeURIComponent(x) : null;
        });
      }
    });
    var We = f.History = function() {
      this.handlers = [], this.checkUrl = this.checkUrl.bind(this), typeof window < "u" && (this.location = window.location, this.history = window.history);
    }, zn = /^[#\/]|\s+$/g, mn = /^\/+|\/+$/g, Ue = /#.*$/;
    We.started = !1, s.extend(We.prototype, D, {
      // The default interval to poll for hash changes, if necessary, is
      // twenty times a second.
      interval: 50,
      // Are we at the app root?
      atRoot: function() {
        var c = this.location.pathname.replace(/[^\/]$/, "$&/");
        return c === this.root && !this.getSearch();
      },
      // Does the pathname match the root?
      matchRoot: function() {
        var c = this.decodeFragment(this.location.pathname), p = c.slice(0, this.root.length - 1) + "/";
        return p === this.root;
      },
      // Unicode characters in `location.pathname` are percent encoded so they're
      // decoded for comparison. `%25` should not be decoded since it may be part
      // of an encoded parameter.
      decodeFragment: function(c) {
        return decodeURI(c.replace(/%25/g, "%2525"));
      },
      // In IE6, the hash fragment and search params are incorrect if the
      // fragment contains `?`.
      getSearch: function() {
        var c = this.location.href.replace(/#.*/, "").match(/\?.+/);
        return c ? c[0] : "";
      },
      // Gets the true hash value. Cannot use location.hash directly due to bug
      // in Firefox where location.hash will always be decoded.
      getHash: function(c) {
        var p = (c || this).location.href.match(/#(.*)$/);
        return p ? p[1] : "";
      },
      // Get the pathname and search params, without the root.
      getPath: function() {
        var c = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1);
        return c.charAt(0) === "/" ? c.slice(1) : c;
      },
      // Get the cross-browser normalized URL fragment from the path or hash.
      getFragment: function(c) {
        return c == null && (this._usePushState || !this._wantsHashChange ? c = this.getPath() : c = this.getHash()), c.replace(zn, "");
      },
      // Start the hash change handling, returning `true` if the current URL matches
      // an existing route, and `false` otherwise.
      start: function(c) {
        if (We.started)
          throw new Error("Backbone.history has already been started");
        if (We.started = !0, this.options = s.extend({ root: "/" }, this.options, c), this.root = this.options.root, this._trailingSlash = this.options.trailingSlash, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(mn, "/"), this._wantsHashChange && this._wantsPushState)
          if (!this._hasPushState && !this.atRoot()) {
            var p = this.root.slice(0, -1) || "/";
            return this.location.replace(p + "#" + this.getPath()), !0;
          } else
            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
          var y = document.body, x = y.insertBefore(this.iframe, y.firstChild).contentWindow;
          x.document.open(), x.document.close(), x.location.hash = "#" + this.fragment;
        }
        var A = window.addEventListener || function(O, L) {
          return attachEvent("on" + O, L);
        };
        if (this._usePushState ? A("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? A("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
          return this.loadUrl();
      },
      // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
      // but possibly useful for unit testing Routers.
      stop: function() {
        var c = window.removeEventListener || function(p, y) {
          return detachEvent("on" + p, y);
        };
        this._usePushState ? c("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && c("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), We.started = !1;
      },
      // Add a route to be tested when the fragment changes. Routes added later
      // may override previous routes.
      route: function(c, p) {
        this.handlers.unshift({ route: c, callback: p });
      },
      // Checks the current URL to see if it has changed, and if it has,
      // calls `loadUrl`, normalizing across the hidden iframe.
      checkUrl: function(c) {
        var p = this.getFragment();
        if (p === this.fragment && this.iframe && (p = this.getHash(this.iframe.contentWindow)), p === this.fragment)
          return this.matchRoot() ? !1 : this.notfound();
        this.iframe && this.navigate(p), this.loadUrl();
      },
      // Attempt to load the current URL fragment. If a route succeeds with a
      // match, returns `true`. If no defined routes matches the fragment,
      // returns `false`.
      loadUrl: function(c) {
        return this.matchRoot() ? (c = this.fragment = this.getFragment(c), s.some(this.handlers, function(p) {
          if (p.route.test(c))
            return p.callback(c), !0;
        }) || this.notfound()) : this.notfound();
      },
      // When no route could be matched, this method is called internally to
      // trigger the `'notfound'` event. It returns `false` so that it can be used
      // in tail position.
      notfound: function() {
        return this.trigger("notfound"), !1;
      },
      // Save a fragment into the hash history, or replace the URL state if the
      // 'replace' option is passed. You are responsible for properly URL-encoding
      // the fragment in advance.
      //
      // The options object can contain `trigger: true` if you wish to have the
      // route callback be fired (not usually desirable), or `replace: true`, if
      // you wish to modify the current URL without adding an entry to the history.
      navigate: function(c, p) {
        if (!We.started)
          return !1;
        (!p || p === !0) && (p = { trigger: !!p }), c = this.getFragment(c || "");
        var y = this.root;
        !this._trailingSlash && (c === "" || c.charAt(0) === "?") && (y = y.slice(0, -1) || "/");
        var x = y + c;
        c = c.replace(Ue, "");
        var A = this.decodeFragment(c);
        if (this.fragment !== A) {
          if (this.fragment = A, this._usePushState)
            this.history[p.replace ? "replaceState" : "pushState"]({}, document.title, x);
          else if (this._wantsHashChange) {
            if (this._updateHash(this.location, c, p.replace), this.iframe && c !== this.getHash(this.iframe.contentWindow)) {
              var O = this.iframe.contentWindow;
              p.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, c, p.replace);
            }
          } else
            return this.location.assign(x);
          if (p.trigger)
            return this.loadUrl(c);
        }
      },
      // Update the hash location, either replacing the current entry, or adding
      // a new one to the browser history.
      _updateHash: function(c, p, y) {
        if (y) {
          var x = c.href.replace(/(javascript:|#).*$/, "");
          c.replace(x + "#" + p);
        } else
          c.hash = "#" + p;
      }
    }), f.history = new We();
    var Jn = function(c, p) {
      var y = this, x;
      return c && s.has(c, "constructor") ? x = c.constructor : x = function() {
        return y.apply(this, arguments);
      }, s.extend(x, y, p), x.prototype = s.create(y.prototype, c), x.prototype.constructor = x, x.__super__ = y.prototype, x;
    };
    Ze.extend = Te.extend = qt.extend = fn.extend = We.extend = Jn;
    var tt = function() {
      throw new Error('A "url" property or function must be specified');
    }, nt = function(c, p) {
      var y = p.error;
      p.error = function(x) {
        y && y.call(p.context, c, x, p), c.trigger("error", c, x, p);
      };
    };
    return f._debug = function() {
      return { root: n, _: s };
    }, f;
  });
})(tu);
const fo = /* @__PURE__ */ Xi(tu);
function Sa(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, m, _, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, m = s.split(`
`), _ = Math.max(f - d, 0), D = Math.min(m.length, f + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Sa(i, null, f);
  }
  d = m.slice(_, D).map(function(M, U) {
    var G = U + _ + 1;
    return (G == f ? "  > " : "    ") + G + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + f + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function ho(i) {
  var n = "", f, s;
  try {
    s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<a class="g-create-thumbnail" title="Create chameleon conversion of this file">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
  } catch (d) {
    Sa(d, f, s);
  }
  return n;
}
const Aa = girder.views.widgets.FileListWidget, po = girder.router, { AccessType: go } = girder.constants, { wrap: mo } = girder.utilities.PluginUtils;
mo(Aa, "render", function(i) {
  return i.call(this), this.parentItem.getAccessLevel() >= go.WRITE && this.$(".g-file-actions-container").prepend(ho()), this;
});
Aa.prototype.events["click a.g-create-thumbnail"] = function(i) {
  var n = _t(i.currentTarget).parent().attr("file-cid");
  new eu({
    el: _t("#g-dialog-container"),
    parentView: this,
    item: this.parentItem,
    file: this.collection.get(n)
  }).once("g:created", function(f) {
    fo.history.fragment = null, po.navigate(f.attachedToType + "/" + f.attachedToId, { trigger: !0 });
  }, this).render();
};
function En(i, n, f, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), f || n.indexOf('"') === -1) ? (f && (n = vo(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function vo(i) {
  var n = "" + i, f = yo.exec(n);
  if (!f)
    return i;
  var s, d, m, _ = "";
  for (s = f.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        m = "&quot;";
        break;
      case 38:
        m = "&amp;";
        break;
      case 60:
        m = "&lt;";
        break;
      case 62:
        m = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (_ += n.substring(d, s)), d = s + 1, _ += m;
  }
  return d !== s ? _ + n.substring(d, s) : _;
}
var yo = /["&<>]/;
function Ha(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, m, _, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, m = s.split(`
`), _ = Math.max(f - d, 0), D = Math.min(m.length, f + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Ha(i, null, f);
  }
  d = m.slice(_, D).map(function(M, U) {
    var G = U + _ + 1;
    return (G == f ? "  > " : "    ") + G + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + f + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Fo(i) {
  var n = "", f, s;
  try {
    var d = i || {};
    (function(m, _, D) {
      s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-flow-container">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", (function() {
        var M = D;
        if (typeof M.length == "number")
          for (var U = 0, G = M.length; U < G; U++) {
            var te = M[U];
            s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + En("g-file-id", te.id, !0, !1)) + ">", s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", _ >= m.WRITE && (s = 5, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + En("src", te.downloadUrl(), !0, !1)) + "/></div>";
          }
        else {
          var G = 0;
          for (var U in M) {
            G++;
            var te = M[U];
            s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + En("g-file-id", te.id, !0, !1)) + ">", s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", _ >= m.WRITE && (s = 5, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + En("src", te.downloadUrl(), !0, !1)) + "/></div>";
          }
        }
      }).call(this), n = n + "</div>";
    }).call(this, "AccessType" in d ? d.AccessType : typeof AccessType < "u" ? AccessType : void 0, "accessLevel" in d ? d.accessLevel : typeof accessLevel < "u" ? accessLevel : void 0, "thumbnails" in d ? d.thumbnails : typeof thumbnails < "u" ? thumbnails : void 0);
  } catch (m) {
    Ha(m, f, s);
  }
  return n;
}
const bo = girder.models.FileModel, wo = girder.views.View, { AccessType: Ji } = girder.constants, { confirm: _o } = girder.dialog, xo = girder.events;
var To = wo.extend({
  events: {
    "click .g-thumbnail-delete": function(i) {
      var n = _t(i.currentTarget).parents(".g-thumbnail-container"), f = new bo({ _id: n.attr("g-file-id") });
      _o({
        text: "Are you sure you want to delete this thumbnail?",
        yesText: "Delete",
        confirmCallback: () => {
          f.on("g:deleted", function() {
            n.remove();
          }).on("g:error", function() {
            xo.trigger("g:alert", {
              icon: "cancel",
              text: "Failed to delete thumbnail.",
              type: "danger",
              timeout: 4e3
            });
          }).destroy();
        }
      });
    },
    "mouseenter .g-thumbnail-container": function() {
      this.$(".g-thumbnail-actions-container").addClass("g-show");
    },
    "mouseleave .g-thumbnail-container": function() {
      this.$(".g-thumbnail-actions-container").removeClass("g-show");
    }
  },
  initialize: function(i) {
    this.thumbnails = i.thumbnails, this.accessLevel = i.accessLevel || Ji.READ;
  },
  render: function() {
    return this.$el.html(Fo({
      thumbnails: this.thumbnails.toArray(),
      accessLevel: this.accessLevel,
      AccessType: Ji
    })), this;
  }
});
function Na(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, m, _, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, m = s.split(`
`), _ = Math.max(f - d, 0), D = Math.min(m.length, f + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Na(i, null, f);
  }
  d = m.slice(_, D).map(function(M, U) {
    var G = U + _ + 1;
    return (G == f ? "  > " : "    ") + G + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + f + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Co(i) {
  var n = "", f, s;
  try {
    s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-thumbnails-header-container">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-item-info-header">', s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<i class="icon-picture"></i>', s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + "Chameleon Conversions</div></div>";
  } catch (d) {
    Na(d, f, s);
  }
  return n;
}
const Eo = girder.collections.FileCollection, Do = girder.views.body.ItemView, { wrap: So } = girder.utilities.PluginUtils;
So(Do, "render", function(i) {
  this.once("g:rendered", function() {
    const n = new Eo(
      On.map(this.model.get("_thumbnails"), (f) => ({ _id: f }))
    );
    n && n.length && (this.$(".g-item-info").before(Co()), new To({
      className: "g-thumbnails-flow-view-container",
      parentView: this,
      thumbnails: n,
      accessLevel: this.model.getAccessLevel()
    }).render().$el.insertBefore(this.$(".g-item-info")));
  }, this), i.call(this);
});
const { wrap: Ao } = girder.utilities.PluginUtils, Ho = girder.views.body.ItemView;
Ao(Ho, "render", function(i) {
  i.apply(this, arguments), this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>'), this.$(".g-open-chameleon").on("click", () => {
    new eu({
      item: this.model,
      // Pass the item model
      file: this.model.file
    }).render();
  });
});
//# sourceMappingURL=girder-plugin-chameleon.js.map
