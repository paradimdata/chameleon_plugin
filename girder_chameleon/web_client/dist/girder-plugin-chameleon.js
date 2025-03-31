var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ki(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Cs(i) {
  if (i.__esModule)
    return i;
  var n = i.default;
  if (typeof n == "function") {
    var c = function s() {
      return this instanceof s ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    c.prototype = n.prototype;
  } else
    c = {};
  return Object.defineProperty(c, "__esModule", { value: !0 }), Object.keys(i).forEach(function(s) {
    var d = Object.getOwnPropertyDescriptor(i, s);
    Object.defineProperty(c, s, d.get ? d : {
      enumerable: !0,
      get: function() {
        return i[s];
      }
    });
  }), c;
}
var Fr = { exports: {} };
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
var Ui;
function Zi() {
  return Ui || (Ui = 1, function(i) {
    (function(n, c) {
      i.exports = n.document ? c(n, !0) : function(s) {
        if (!s.document)
          throw new Error("jQuery requires a window with a document");
        return c(s);
      };
    })(typeof window < "u" ? window : tn, function(n, c) {
      var s = [], d = Object.getPrototypeOf, g = s.slice, w = s.flat ? function(e) {
        return s.flat.call(e);
      } : function(e) {
        return s.concat.apply([], e);
      }, D = s.push, M = s.indexOf, $ = {}, R = $.toString, Y = $.hasOwnProperty, ze = Y.toString, pe = ze.call(Object), j = {}, B = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, _e = function(t) {
        return t != null && t === t.window;
      }, W = n.document, Me = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function Se(e, t, r) {
        r = r || W;
        var u, o, l = r.createElement("script");
        if (l.text = e, t)
          for (u in Me)
            o = t[u] || t.getAttribute && t.getAttribute(u), o && l.setAttribute(u, o);
        r.head.appendChild(l).parentNode.removeChild(l);
      }
      function Te(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? $[R.call(e)] || "object" : typeof e;
      }
      var ct = "3.7.1", wt = /HTML$/i, a = function(e, t) {
        return new a.fn.init(e, t);
      };
      a.fn = a.prototype = {
        // The current version of jQuery being used
        jquery: ct,
        constructor: a,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
          return g.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(e) {
          return e == null ? g.call(this) : e < 0 ? this[e + this.length] : this[e];
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
          return this.pushStack(g.apply(this, arguments));
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
        var e, t, r, u, o, l, h = arguments[0] || {}, F = 1, m = arguments.length, x = !1;
        for (typeof h == "boolean" && (x = h, h = arguments[F] || {}, F++), typeof h != "object" && !B(h) && (h = {}), F === m && (h = this, F--); F < m; F++)
          if ((e = arguments[F]) != null)
            for (t in e)
              u = e[t], !(t === "__proto__" || h === u) && (x && u && (a.isPlainObject(u) || (o = Array.isArray(u))) ? (r = h[t], o && !Array.isArray(r) ? l = [] : !o && !a.isPlainObject(r) ? l = {} : l = r, o = !1, h[t] = a.extend(x, l, u)) : u !== void 0 && (h[t] = u));
        return h;
      }, a.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (ct + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, r;
          return !e || R.call(e) !== "[object Object]" ? !1 : (t = d(e), t ? (r = Y.call(t, "constructor") && t.constructor, typeof r == "function" && ze.call(r) === pe) : !0);
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
          Se(e, { nonce: t && t.nonce }, r);
        },
        each: function(e, t) {
          var r, u = 0;
          if (Ge(e))
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
          return e != null && (Ge(Object(e)) ? a.merge(
            r,
            typeof e == "string" ? [e] : e
          ) : D.call(r, e)), r;
        },
        inArray: function(e, t, r) {
          return t == null ? -1 : M.call(t, e, r);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, r = e && (e.ownerDocument || e).documentElement;
          return !wt.test(t || r && r.nodeName || "HTML");
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
          if (Ge(e))
            for (u = e.length; l < u; l++)
              o = t(e[l], l, r), o != null && h.push(o);
          else
            for (l in e)
              o = t(e[l], l, r), o != null && h.push(o);
          return w(h);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: j
      }), typeof Symbol == "function" && (a.fn[Symbol.iterator] = s[Symbol.iterator]), a.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
          $["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function Ge(e) {
        var t = !!e && "length" in e && e.length, r = Te(e);
        return B(e) || _e(e) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function ue(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var tt = s.pop, Wn = s.sort, hn = s.splice, ae = "[\\x20\\t\\r\\n\\f]", xt = new RegExp(
        "^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$",
        "g"
      );
      a.contains = function(e, t) {
        var r = t && t.parentNode;
        return e === r || !!(r && r.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (e.contains ? e.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
      };
      var jn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function dn(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      a.escapeSelector = function(e) {
        return (e + "").replace(jn, dn);
      };
      var $e = W, Wt = D;
      (function() {
        var e, t, r, u, o, l = Wt, h, F, m, x, S, H = a.expando, C = 0, I = 0, J = _n(), ne = _n(), Q = _n(), Fe = _n(), ve = function(v, b) {
          return v === b && (o = !0), 0;
        }, Qe = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Ye = "(?:\\\\[\\da-fA-F]{1,6}" + ae + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", te = "\\[" + ae + "*(" + Ye + ")(?:" + ae + // Operator (capture 2)
        "*([*^$|!~]?=)" + ae + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Ye + "))|)" + ae + "*\\]", Ct = ":(" + Ye + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + te + ")*)|.*)\\)|)", re = new RegExp(ae + "+", "g"), fe = new RegExp("^" + ae + "*," + ae + "*"), Kt = new RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"), hr = new RegExp(ae + "|>"), Ke = new RegExp(Ct), Zt = new RegExp("^" + Ye + "$"), Ze = {
          ID: new RegExp("^#(" + Ye + ")"),
          CLASS: new RegExp("^\\.(" + Ye + ")"),
          TAG: new RegExp("^(" + Ye + "|[*])"),
          ATTR: new RegExp("^" + te),
          PSEUDO: new RegExp("^" + Ct),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Qe + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /^(?:input|select|textarea|button)$/i, pt = /^h\d$/i, Re = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, dr = /[+~]/, at = new RegExp("\\\\[\\da-fA-F]{1,6}" + ae + "?|\\\\([^\\r\\n\\f])", "g"), st = function(v, b) {
          var T = "0x" + v.slice(1) - 65536;
          return b || (T < 0 ? String.fromCharCode(T + 65536) : String.fromCharCode(T >> 10 | 55296, T & 1023 | 56320));
        }, ys = function() {
          gt();
        }, Fs = Cn(
          function(v) {
            return v.disabled === !0 && ue(v, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function bs() {
          try {
            return h.activeElement;
          } catch {
          }
        }
        try {
          l.apply(
            s = g.call($e.childNodes),
            $e.childNodes
          ), s[$e.childNodes.length].nodeType;
        } catch {
          l = {
            apply: function(b, T) {
              Wt.apply(b, g.call(T));
            },
            call: function(b) {
              Wt.apply(b, g.call(arguments, 1));
            }
          };
        }
        function oe(v, b, T, E) {
          var N, P, k, V, q, K, z, X = b && b.ownerDocument, Z = b ? b.nodeType : 9;
          if (T = T || [], typeof v != "string" || !v || Z !== 1 && Z !== 9 && Z !== 11)
            return T;
          if (!E && (gt(b), b = b || h, m)) {
            if (Z !== 11 && (q = Re.exec(v)))
              if (N = q[1]) {
                if (Z === 9)
                  if (k = b.getElementById(N)) {
                    if (k.id === N)
                      return l.call(T, k), T;
                  } else
                    return T;
                else if (X && (k = X.getElementById(N)) && oe.contains(b, k) && k.id === N)
                  return l.call(T, k), T;
              } else {
                if (q[2])
                  return l.apply(T, b.getElementsByTagName(v)), T;
                if ((N = q[3]) && b.getElementsByClassName)
                  return l.apply(T, b.getElementsByClassName(N)), T;
              }
            if (!Fe[v + " "] && (!x || !x.test(v))) {
              if (z = v, X = b, Z === 1 && (hr.test(v) || Kt.test(v))) {
                for (X = dr.test(v) && pr(b.parentNode) || b, (X != b || !j.scope) && ((V = b.getAttribute("id")) ? V = a.escapeSelector(V) : b.setAttribute("id", V = H)), K = en(v), P = K.length; P--; )
                  K[P] = (V ? "#" + V : ":scope") + " " + Tn(K[P]);
                z = K.join(",");
              }
              try {
                return l.apply(
                  T,
                  X.querySelectorAll(z)
                ), T;
              } catch {
                Fe(v, !0);
              } finally {
                V === H && b.removeAttribute("id");
              }
            }
          }
          return Ri(v.replace(xt, "$1"), b, T, E);
        }
        function _n() {
          var v = [];
          function b(T, E) {
            return v.push(T + " ") > t.cacheLength && delete b[v.shift()], b[T + " "] = E;
          }
          return b;
        }
        function je(v) {
          return v[H] = !0, v;
        }
        function Lt(v) {
          var b = h.createElement("fieldset");
          try {
            return !!v(b);
          } catch {
            return !1;
          } finally {
            b.parentNode && b.parentNode.removeChild(b), b = null;
          }
        }
        function ws(v) {
          return function(b) {
            return ue(b, "input") && b.type === v;
          };
        }
        function xs(v) {
          return function(b) {
            return (ue(b, "input") || ue(b, "button")) && b.type === v;
          };
        }
        function ki(v) {
          return function(b) {
            return "form" in b ? b.parentNode && b.disabled === !1 ? "label" in b ? "label" in b.parentNode ? b.parentNode.disabled === v : b.disabled === v : b.isDisabled === v || // Where there is no isDisabled, check manually
            b.isDisabled !== !v && Fs(b) === v : b.disabled === v : "label" in b ? b.disabled === v : !1;
          };
        }
        function Et(v) {
          return je(function(b) {
            return b = +b, je(function(T, E) {
              for (var N, P = v([], T.length, b), k = P.length; k--; )
                T[N = P[k]] && (T[N] = !(E[N] = T[N]));
            });
          });
        }
        function pr(v) {
          return v && typeof v.getElementsByTagName < "u" && v;
        }
        function gt(v) {
          var b, T = v ? v.ownerDocument || v : $e;
          return T == h || T.nodeType !== 9 || !T.documentElement || (h = T, F = h.documentElement, m = !a.isXMLDoc(h), S = F.matches || F.webkitMatchesSelector || F.msMatchesSelector, F.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          $e != h && (b = h.defaultView) && b.top !== b && b.addEventListener("unload", ys), j.getById = Lt(function(E) {
            return F.appendChild(E).id = a.expando, !h.getElementsByName || !h.getElementsByName(a.expando).length;
          }), j.disconnectedMatch = Lt(function(E) {
            return S.call(E, "*");
          }), j.scope = Lt(function() {
            return h.querySelectorAll(":scope");
          }), j.cssHas = Lt(function() {
            try {
              return h.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), j.getById ? (t.filter.ID = function(E) {
            var N = E.replace(at, st);
            return function(P) {
              return P.getAttribute("id") === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var P = N.getElementById(E);
              return P ? [P] : [];
            }
          }) : (t.filter.ID = function(E) {
            var N = E.replace(at, st);
            return function(P) {
              var k = typeof P.getAttributeNode < "u" && P.getAttributeNode("id");
              return k && k.value === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var P, k, V, q = N.getElementById(E);
              if (q) {
                if (P = q.getAttributeNode("id"), P && P.value === E)
                  return [q];
                for (V = N.getElementsByName(E), k = 0; q = V[k++]; )
                  if (P = q.getAttributeNode("id"), P && P.value === E)
                    return [q];
              }
              return [];
            }
          }), t.find.TAG = function(E, N) {
            return typeof N.getElementsByTagName < "u" ? N.getElementsByTagName(E) : N.querySelectorAll(E);
          }, t.find.CLASS = function(E, N) {
            if (typeof N.getElementsByClassName < "u" && m)
              return N.getElementsByClassName(E);
          }, x = [], Lt(function(E) {
            var N;
            F.appendChild(E).innerHTML = "<a id='" + H + "' href='' disabled='disabled'></a><select id='" + H + "-\r\\' disabled='disabled'><option selected=''></option></select>", E.querySelectorAll("[selected]").length || x.push("\\[" + ae + "*(?:value|" + Qe + ")"), E.querySelectorAll("[id~=" + H + "-]").length || x.push("~="), E.querySelectorAll("a#" + H + "+*").length || x.push(".#.+[+~]"), E.querySelectorAll(":checked").length || x.push(":checked"), N = h.createElement("input"), N.setAttribute("type", "hidden"), E.appendChild(N).setAttribute("name", "D"), F.appendChild(E).disabled = !0, E.querySelectorAll(":disabled").length !== 2 && x.push(":enabled", ":disabled"), N = h.createElement("input"), N.setAttribute("name", ""), E.appendChild(N), E.querySelectorAll("[name='']").length || x.push("\\[" + ae + "*name" + ae + "*=" + ae + `*(?:''|"")`);
          }), j.cssHas || x.push(":has"), x = x.length && new RegExp(x.join("|")), ve = function(E, N) {
            if (E === N)
              return o = !0, 0;
            var P = !E.compareDocumentPosition - !N.compareDocumentPosition;
            return P || (P = (E.ownerDocument || E) == (N.ownerDocument || N) ? E.compareDocumentPosition(N) : (
              // Otherwise we know they are disconnected
              1
            ), P & 1 || !j.sortDetached && N.compareDocumentPosition(E) === P ? E === h || E.ownerDocument == $e && oe.contains($e, E) ? -1 : N === h || N.ownerDocument == $e && oe.contains($e, N) ? 1 : u ? M.call(u, E) - M.call(u, N) : 0 : P & 4 ? -1 : 1);
          }), h;
        }
        oe.matches = function(v, b) {
          return oe(v, null, null, b);
        }, oe.matchesSelector = function(v, b) {
          if (gt(v), m && !Fe[b + " "] && (!x || !x.test(b)))
            try {
              var T = S.call(v, b);
              if (T || j.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              v.document && v.document.nodeType !== 11)
                return T;
            } catch {
              Fe(b, !0);
            }
          return oe(b, h, null, [v]).length > 0;
        }, oe.contains = function(v, b) {
          return (v.ownerDocument || v) != h && gt(v), a.contains(v, b);
        }, oe.attr = function(v, b) {
          (v.ownerDocument || v) != h && gt(v);
          var T = t.attrHandle[b.toLowerCase()], E = T && Y.call(t.attrHandle, b.toLowerCase()) ? T(v, b, !m) : void 0;
          return E !== void 0 ? E : v.getAttribute(b);
        }, oe.error = function(v) {
          throw new Error("Syntax error, unrecognized expression: " + v);
        }, a.uniqueSort = function(v) {
          var b, T = [], E = 0, N = 0;
          if (o = !j.sortStable, u = !j.sortStable && g.call(v, 0), Wn.call(v, ve), o) {
            for (; b = v[N++]; )
              b === v[N] && (E = T.push(N));
            for (; E--; )
              hn.call(v, T[E], 1);
          }
          return u = null, v;
        }, a.fn.uniqueSort = function() {
          return this.pushStack(a.uniqueSort(g.apply(this)));
        }, t = a.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: je,
          match: Ze,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" }
          },
          preFilter: {
            ATTR: function(v) {
              return v[1] = v[1].replace(at, st), v[3] = (v[3] || v[4] || v[5] || "").replace(at, st), v[2] === "~=" && (v[3] = " " + v[3] + " "), v.slice(0, 4);
            },
            CHILD: function(v) {
              return v[1] = v[1].toLowerCase(), v[1].slice(0, 3) === "nth" ? (v[3] || oe.error(v[0]), v[4] = +(v[4] ? v[5] + (v[6] || 1) : 2 * (v[3] === "even" || v[3] === "odd")), v[5] = +(v[7] + v[8] || v[3] === "odd")) : v[3] && oe.error(v[0]), v;
            },
            PSEUDO: function(v) {
              var b, T = !v[6] && v[2];
              return Ze.CHILD.test(v[0]) ? null : (v[3] ? v[2] = v[4] || v[5] || "" : T && Ke.test(T) && // Get excess from tokenize (recursively)
              (b = en(T, !0)) && // advance to the next closing parenthesis
              (b = T.indexOf(")", T.length - b) - T.length) && (v[0] = v[0].slice(0, b), v[2] = T.slice(0, b)), v.slice(0, 3));
            }
          },
          filter: {
            TAG: function(v) {
              var b = v.replace(at, st).toLowerCase();
              return v === "*" ? function() {
                return !0;
              } : function(T) {
                return ue(T, b);
              };
            },
            CLASS: function(v) {
              var b = J[v + " "];
              return b || (b = new RegExp("(^|" + ae + ")" + v + "(" + ae + "|$)")) && J(v, function(T) {
                return b.test(
                  typeof T.className == "string" && T.className || typeof T.getAttribute < "u" && T.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(v, b, T) {
              return function(E) {
                var N = oe.attr(E, v);
                return N == null ? b === "!=" : b ? (N += "", b === "=" ? N === T : b === "!=" ? N !== T : b === "^=" ? T && N.indexOf(T) === 0 : b === "*=" ? T && N.indexOf(T) > -1 : b === "$=" ? T && N.slice(-T.length) === T : b === "~=" ? (" " + N.replace(re, " ") + " ").indexOf(T) > -1 : b === "|=" ? N === T || N.slice(0, T.length + 1) === T + "-" : !1) : !0;
              };
            },
            CHILD: function(v, b, T, E, N) {
              var P = v.slice(0, 3) !== "nth", k = v.slice(-4) !== "last", V = b === "of-type";
              return E === 1 && N === 0 ? (
                // Shortcut for :nth-*(n)
                function(q) {
                  return !!q.parentNode;
                }
              ) : function(q, K, z) {
                var X, Z, G, le, Ne, be = P !== k ? "nextSibling" : "previousSibling", Ue = q.parentNode, et = V && q.nodeName.toLowerCase(), kt = !z && !V, Ce = !1;
                if (Ue) {
                  if (P) {
                    for (; be; ) {
                      for (G = q; G = G[be]; )
                        if (V ? ue(G, et) : G.nodeType === 1)
                          return !1;
                      Ne = be = v === "only" && !Ne && "nextSibling";
                    }
                    return !0;
                  }
                  if (Ne = [k ? Ue.firstChild : Ue.lastChild], k && kt) {
                    for (Z = Ue[H] || (Ue[H] = {}), X = Z[v] || [], le = X[0] === C && X[1], Ce = le && X[2], G = le && Ue.childNodes[le]; G = ++le && G && G[be] || // Fallback to seeking `elem` from the start
                    (Ce = le = 0) || Ne.pop(); )
                      if (G.nodeType === 1 && ++Ce && G === q) {
                        Z[v] = [C, le, Ce];
                        break;
                      }
                  } else if (kt && (Z = q[H] || (q[H] = {}), X = Z[v] || [], le = X[0] === C && X[1], Ce = le), Ce === !1)
                    for (; (G = ++le && G && G[be] || (Ce = le = 0) || Ne.pop()) && !((V ? ue(G, et) : G.nodeType === 1) && ++Ce && (kt && (Z = G[H] || (G[H] = {}), Z[v] = [C, Ce]), G === q)); )
                      ;
                  return Ce -= N, Ce === E || Ce % E === 0 && Ce / E >= 0;
                }
              };
            },
            PSEUDO: function(v, b) {
              var T, E = t.pseudos[v] || t.setFilters[v.toLowerCase()] || oe.error("unsupported pseudo: " + v);
              return E[H] ? E(b) : E.length > 1 ? (T = [v, v, "", b], t.setFilters.hasOwnProperty(v.toLowerCase()) ? je(function(N, P) {
                for (var k, V = E(N, b), q = V.length; q--; )
                  k = M.call(N, V[q]), N[k] = !(P[k] = V[q]);
              }) : function(N) {
                return E(N, 0, T);
              }) : E;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: je(function(v) {
              var b = [], T = [], E = yr(v.replace(xt, "$1"));
              return E[H] ? je(function(N, P, k, V) {
                for (var q, K = E(N, null, V, []), z = N.length; z--; )
                  (q = K[z]) && (N[z] = !(P[z] = q));
              }) : function(N, P, k) {
                return b[0] = N, E(b, null, k, T), b[0] = null, !T.pop();
              };
            }),
            has: je(function(v) {
              return function(b) {
                return oe(v, b).length > 0;
              };
            }),
            contains: je(function(v) {
              return v = v.replace(at, st), function(b) {
                return (b.textContent || a.text(b)).indexOf(v) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: je(function(v) {
              return Zt.test(v || "") || oe.error("unsupported lang: " + v), v = v.replace(at, st).toLowerCase(), function(b) {
                var T;
                do
                  if (T = m ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                    return T = T.toLowerCase(), T === v || T.indexOf(v + "-") === 0;
                while ((b = b.parentNode) && b.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(v) {
              var b = n.location && n.location.hash;
              return b && b.slice(1) === v.id;
            },
            root: function(v) {
              return v === F;
            },
            focus: function(v) {
              return v === bs() && h.hasFocus() && !!(v.type || v.href || ~v.tabIndex);
            },
            // Boolean properties
            enabled: ki(!1),
            disabled: ki(!0),
            checked: function(v) {
              return ue(v, "input") && !!v.checked || ue(v, "option") && !!v.selected;
            },
            selected: function(v) {
              return v.parentNode && v.parentNode.selectedIndex, v.selected === !0;
            },
            // Contents
            empty: function(v) {
              for (v = v.firstChild; v; v = v.nextSibling)
                if (v.nodeType < 6)
                  return !1;
              return !0;
            },
            parent: function(v) {
              return !t.pseudos.empty(v);
            },
            // Element/input types
            header: function(v) {
              return pt.test(v.nodeName);
            },
            input: function(v) {
              return dt.test(v.nodeName);
            },
            button: function(v) {
              return ue(v, "input") && v.type === "button" || ue(v, "button");
            },
            text: function(v) {
              var b;
              return ue(v, "input") && v.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((b = v.getAttribute("type")) == null || b.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Et(function() {
              return [0];
            }),
            last: Et(function(v, b) {
              return [b - 1];
            }),
            eq: Et(function(v, b, T) {
              return [T < 0 ? T + b : T];
            }),
            even: Et(function(v, b) {
              for (var T = 0; T < b; T += 2)
                v.push(T);
              return v;
            }),
            odd: Et(function(v, b) {
              for (var T = 1; T < b; T += 2)
                v.push(T);
              return v;
            }),
            lt: Et(function(v, b, T) {
              var E;
              for (T < 0 ? E = T + b : T > b ? E = b : E = T; --E >= 0; )
                v.push(E);
              return v;
            }),
            gt: Et(function(v, b, T) {
              for (var E = T < 0 ? T + b : T; ++E < b; )
                v.push(E);
              return v;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = ws(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = xs(e);
        function qi() {
        }
        qi.prototype = t.filters = t.pseudos, t.setFilters = new qi();
        function en(v, b) {
          var T, E, N, P, k, V, q, K = ne[v + " "];
          if (K)
            return b ? 0 : K.slice(0);
          for (k = v, V = [], q = t.preFilter; k; ) {
            (!T || (E = fe.exec(k))) && (E && (k = k.slice(E[0].length) || k), V.push(N = [])), T = !1, (E = Kt.exec(k)) && (T = E.shift(), N.push({
              value: T,
              // Cast descendant combinators to space
              type: E[0].replace(xt, " ")
            }), k = k.slice(T.length));
            for (P in t.filter)
              (E = Ze[P].exec(k)) && (!q[P] || (E = q[P](E))) && (T = E.shift(), N.push({
                value: T,
                type: P,
                matches: E
              }), k = k.slice(T.length));
            if (!T)
              break;
          }
          return b ? k.length : k ? oe.error(v) : (
            // Cache the tokens
            ne(v, V).slice(0)
          );
        }
        function Tn(v) {
          for (var b = 0, T = v.length, E = ""; b < T; b++)
            E += v[b].value;
          return E;
        }
        function Cn(v, b, T) {
          var E = b.dir, N = b.next, P = N || E, k = T && P === "parentNode", V = I++;
          return b.first ? (
            // Check against closest ancestor/preceding element
            function(q, K, z) {
              for (; q = q[E]; )
                if (q.nodeType === 1 || k)
                  return v(q, K, z);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(q, K, z) {
              var X, Z, G = [C, V];
              if (z) {
                for (; q = q[E]; )
                  if ((q.nodeType === 1 || k) && v(q, K, z))
                    return !0;
              } else
                for (; q = q[E]; )
                  if (q.nodeType === 1 || k)
                    if (Z = q[H] || (q[H] = {}), N && ue(q, N))
                      q = q[E] || q;
                    else {
                      if ((X = Z[P]) && X[0] === C && X[1] === V)
                        return G[2] = X[2];
                      if (Z[P] = G, G[2] = v(q, K, z))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function gr(v) {
          return v.length > 1 ? function(b, T, E) {
            for (var N = v.length; N--; )
              if (!v[N](b, T, E))
                return !1;
            return !0;
          } : v[0];
        }
        function _s(v, b, T) {
          for (var E = 0, N = b.length; E < N; E++)
            oe(v, b[E], T);
          return T;
        }
        function En(v, b, T, E, N) {
          for (var P, k = [], V = 0, q = v.length, K = b != null; V < q; V++)
            (P = v[V]) && (!T || T(P, E, N)) && (k.push(P), K && b.push(V));
          return k;
        }
        function vr(v, b, T, E, N, P) {
          return E && !E[H] && (E = vr(E)), N && !N[H] && (N = vr(N, P)), je(function(k, V, q, K) {
            var z, X, Z, G, le = [], Ne = [], be = V.length, Ue = k || _s(
              b || "*",
              q.nodeType ? [q] : q,
              []
            ), et = v && (k || !b) ? En(Ue, le, v, q, K) : Ue;
            if (T ? (G = N || (k ? v : be || E) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              V
            ), T(et, G, q, K)) : G = et, E)
              for (z = En(G, Ne), E(z, [], q, K), X = z.length; X--; )
                (Z = z[X]) && (G[Ne[X]] = !(et[Ne[X]] = Z));
            if (k) {
              if (N || v) {
                if (N) {
                  for (z = [], X = G.length; X--; )
                    (Z = G[X]) && z.push(et[X] = Z);
                  N(null, G = [], z, K);
                }
                for (X = G.length; X--; )
                  (Z = G[X]) && (z = N ? M.call(k, Z) : le[X]) > -1 && (k[z] = !(V[z] = Z));
              }
            } else
              G = En(
                G === V ? G.splice(be, G.length) : G
              ), N ? N(null, V, G, K) : l.apply(V, G);
          });
        }
        function mr(v) {
          for (var b, T, E, N = v.length, P = t.relative[v[0].type], k = P || t.relative[" "], V = P ? 1 : 0, q = Cn(function(X) {
            return X === b;
          }, k, !0), K = Cn(function(X) {
            return M.call(b, X) > -1;
          }, k, !0), z = [function(X, Z, G) {
            var le = !P && (G || Z != r) || ((b = Z).nodeType ? q(X, Z, G) : K(X, Z, G));
            return b = null, le;
          }]; V < N; V++)
            if (T = t.relative[v[V].type])
              z = [Cn(gr(z), T)];
            else {
              if (T = t.filter[v[V].type].apply(null, v[V].matches), T[H]) {
                for (E = ++V; E < N && !t.relative[v[E].type]; E++)
                  ;
                return vr(
                  V > 1 && gr(z),
                  V > 1 && Tn(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    v.slice(0, V - 1).concat({ value: v[V - 2].type === " " ? "*" : "" })
                  ).replace(xt, "$1"),
                  T,
                  V < E && mr(v.slice(V, E)),
                  E < N && mr(v = v.slice(E)),
                  E < N && Tn(v)
                );
              }
              z.push(T);
            }
          return gr(z);
        }
        function Ts(v, b) {
          var T = b.length > 0, E = v.length > 0, N = function(P, k, V, q, K) {
            var z, X, Z, G = 0, le = "0", Ne = P && [], be = [], Ue = r, et = P || E && t.find.TAG("*", K), kt = C += Ue == null ? 1 : Math.random() || 0.1, Ce = et.length;
            for (K && (r = k == h || k || K); le !== Ce && (z = et[le]) != null; le++) {
              if (E && z) {
                for (X = 0, !k && z.ownerDocument != h && (gt(z), V = !m); Z = v[X++]; )
                  if (Z(z, k || h, V)) {
                    l.call(q, z);
                    break;
                  }
                K && (C = kt);
              }
              T && ((z = !Z && z) && G--, P && Ne.push(z));
            }
            if (G += le, T && le !== G) {
              for (X = 0; Z = b[X++]; )
                Z(Ne, be, k, V);
              if (P) {
                if (G > 0)
                  for (; le--; )
                    Ne[le] || be[le] || (be[le] = tt.call(q));
                be = En(be);
              }
              l.apply(q, be), K && !P && be.length > 0 && G + b.length > 1 && a.uniqueSort(q);
            }
            return K && (C = kt, r = Ue), Ne;
          };
          return T ? je(N) : N;
        }
        function yr(v, b) {
          var T, E = [], N = [], P = Q[v + " "];
          if (!P) {
            for (b || (b = en(v)), T = b.length; T--; )
              P = mr(b[T]), P[H] ? E.push(P) : N.push(P);
            P = Q(
              v,
              Ts(N, E)
            ), P.selector = v;
          }
          return P;
        }
        function Ri(v, b, T, E) {
          var N, P, k, V, q, K = typeof v == "function" && v, z = !E && en(v = K.selector || v);
          if (T = T || [], z.length === 1) {
            if (P = z[0] = z[0].slice(0), P.length > 2 && (k = P[0]).type === "ID" && b.nodeType === 9 && m && t.relative[P[1].type]) {
              if (b = (t.find.ID(
                k.matches[0].replace(at, st),
                b
              ) || [])[0], b)
                K && (b = b.parentNode);
              else
                return T;
              v = v.slice(P.shift().value.length);
            }
            for (N = Ze.needsContext.test(v) ? 0 : P.length; N-- && (k = P[N], !t.relative[V = k.type]); )
              if ((q = t.find[V]) && (E = q(
                k.matches[0].replace(at, st),
                dr.test(P[0].type) && pr(b.parentNode) || b
              ))) {
                if (P.splice(N, 1), v = E.length && Tn(P), !v)
                  return l.apply(T, E), T;
                break;
              }
          }
          return (K || yr(v, z))(
            E,
            b,
            !m,
            T,
            !b || dr.test(v) && pr(b.parentNode) || b
          ), T;
        }
        j.sortStable = H.split("").sort(ve).join("") === H, gt(), j.sortDetached = Lt(function(v) {
          return v.compareDocumentPosition(h.createElement("fieldset")) & 1;
        }), a.find = oe, a.expr[":"] = a.expr.pseudos, a.unique = a.uniqueSort, oe.compile = yr, oe.select = Ri, oe.setDocument = gt, oe.tokenize = en, oe.escape = a.escapeSelector, oe.getText = a.text, oe.isXML = a.isXMLDoc, oe.selectors = a.expr, oe.support = a.support, oe.uniqueSort = a.uniqueSort;
      })();
      var ft = function(e, t, r) {
        for (var u = [], o = r !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && a(e).is(r))
              break;
            u.push(e);
          }
        return u;
      }, pn = function(e, t) {
        for (var r = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && r.push(e);
        return r;
      }, gn = a.expr.match.needsContext, jt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Bt(e, t, r) {
        return B(t) ? a.grep(e, function(u, o) {
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
          return this.pushStack(Bt(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(Bt(this, e || [], !0));
        },
        is: function(e) {
          return !!Bt(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof e == "string" && gn.test(e) ? a(e) : e || [],
            !1
          ).length;
        }
      });
      var vn, Bn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, zn = a.fn.init = function(e, t, r) {
        var u, o;
        if (!e)
          return this;
        if (r = r || vn, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? u = [null, e, null] : u = Bn.exec(e), u && (u[1] || !t))
            if (u[1]) {
              if (t = t instanceof a ? t[0] : t, a.merge(this, a.parseHTML(
                u[1],
                t && t.nodeType ? t.ownerDocument || t : W,
                !0
              )), jt.test(u[1]) && a.isPlainObject(t))
                for (u in t)
                  B(this[u]) ? this[u](t[u]) : this.attr(u, t[u]);
              return this;
            } else
              return o = W.getElementById(u[2]), o && (this[0] = o, this.length = 1), this;
          else
            return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType)
            return this[0] = e, this.length = 1, this;
          if (B(e))
            return r.ready !== void 0 ? r.ready(e) : (
              // Execute immediately if ready is not present
              e(a)
            );
        }
        return a.makeArray(e, this);
      };
      zn.prototype = a.fn, vn = a(W);
      var Je = /^(?:parents|prev(?:Until|All))/, Jn = {
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
          if (!gn.test(e)) {
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
          return ft(e, "parentNode");
        },
        parentsUntil: function(e, t, r) {
          return ft(e, "parentNode", r);
        },
        next: function(e) {
          return mn(e, "nextSibling");
        },
        prev: function(e) {
          return mn(e, "previousSibling");
        },
        nextAll: function(e) {
          return ft(e, "nextSibling");
        },
        prevAll: function(e) {
          return ft(e, "previousSibling");
        },
        nextUntil: function(e, t, r) {
          return ft(e, "nextSibling", r);
        },
        prevUntil: function(e, t, r) {
          return ft(e, "previousSibling", r);
        },
        siblings: function(e) {
          return pn((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return pn(e.firstChild);
        },
        contents: function(e) {
          return e.contentDocument != null && // Support: IE 11+
          // <object> elements with no `data` attribute has an object
          // `contentDocument` with a `null` prototype.
          d(e.contentDocument) ? e.contentDocument : (ue(e, "template") && (e = e.content || e), a.merge([], e.childNodes));
        }
      }, function(e, t) {
        a.fn[e] = function(r, u) {
          var o = a.map(this, t, r);
          return e.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (o = a.filter(u, o)), this.length > 1 && (Jn[e] || a.uniqueSort(o), Je.test(e) && o.reverse()), this.pushStack(o);
        };
      });
      var Le = /[^\x20\t\r\n\f]+/g;
      function Xn(e) {
        var t = {};
        return a.each(e.match(Le) || [], function(r, u) {
          t[u] = !0;
        }), t;
      }
      a.Callbacks = function(e) {
        e = typeof e == "string" ? Xn(e) : a.extend({}, e);
        var t, r, u, o, l = [], h = [], F = -1, m = function() {
          for (o = o || e.once, u = t = !0; h.length; F = -1)
            for (r = h.shift(); ++F < l.length; )
              l[F].apply(r[0], r[1]) === !1 && e.stopOnFalse && (F = l.length, r = !1);
          e.memory || (r = !1), t = !1, o && (r ? l = [] : l = "");
        }, x = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return l && (r && !t && (F = l.length - 1, h.push(r)), function S(H) {
              a.each(H, function(C, I) {
                B(I) ? (!e.unique || !x.has(I)) && l.push(I) : I && I.length && Te(I) !== "string" && S(I);
              });
            }(arguments), r && !t && m()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return a.each(arguments, function(S, H) {
              for (var C; (C = a.inArray(H, l, C)) > -1; )
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
          fireWith: function(S, H) {
            return o || (H = H || [], H = [S, H.slice ? H.slice() : H], h.push(H), t || m()), this;
          },
          // Call all the callbacks with the given arguments
          fire: function() {
            return x.fireWith(this, arguments), this;
          },
          // To know if the callbacks have already been called at least once
          fired: function() {
            return !!u;
          }
        };
        return x;
      };
      function nt(e) {
        return e;
      }
      function rt(e) {
        throw e;
      }
      function f(e, t, r, u) {
        var o;
        try {
          e && B(o = e.promise) ? o.call(e).done(t).fail(r) : e && B(o = e.then) ? o.call(e, t, r) : t.apply(void 0, [e].slice(u));
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
                a.each(t, function(F, m) {
                  var x = B(l[m[4]]) && l[m[4]];
                  o[m[1]](function() {
                    var S = x && x.apply(this, arguments);
                    S && B(S.promise) ? S.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[m[0] + "With"](
                      this,
                      x ? [S] : arguments
                    );
                  });
                }), l = null;
              }).promise();
            },
            then: function(l, h, F) {
              var m = 0;
              function x(S, H, C, I) {
                return function() {
                  var J = this, ne = arguments, Q = function() {
                    var ve, Qe;
                    if (!(S < m)) {
                      if (ve = C.apply(J, ne), ve === H.promise())
                        throw new TypeError("Thenable self-resolution");
                      Qe = ve && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof ve == "object" || typeof ve == "function") && ve.then, B(Qe) ? I ? Qe.call(
                        ve,
                        x(m, H, nt, I),
                        x(m, H, rt, I)
                      ) : (m++, Qe.call(
                        ve,
                        x(m, H, nt, I),
                        x(m, H, rt, I),
                        x(
                          m,
                          H,
                          nt,
                          H.notifyWith
                        )
                      )) : (C !== nt && (J = void 0, ne = [ve]), (I || H.resolveWith)(J, ne));
                    }
                  }, Fe = I ? Q : function() {
                    try {
                      Q();
                    } catch (ve) {
                      a.Deferred.exceptionHook && a.Deferred.exceptionHook(
                        ve,
                        Fe.error
                      ), S + 1 >= m && (C !== rt && (J = void 0, ne = [ve]), H.rejectWith(J, ne));
                    }
                  };
                  S ? Fe() : (a.Deferred.getErrorHook ? Fe.error = a.Deferred.getErrorHook() : a.Deferred.getStackHook && (Fe.error = a.Deferred.getStackHook()), n.setTimeout(Fe));
                };
              }
              return a.Deferred(function(S) {
                t[0][3].add(
                  x(
                    0,
                    S,
                    B(F) ? F : nt,
                    S.notifyWith
                  )
                ), t[1][3].add(
                  x(
                    0,
                    S,
                    B(l) ? l : nt
                  )
                ), t[2][3].add(
                  x(
                    0,
                    S,
                    B(h) ? h : rt
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
            var F = h[2], m = h[5];
            u[h[1]] = F.add, m && F.add(
              function() {
                r = m;
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
          var t = arguments.length, r = t, u = Array(r), o = g.call(arguments), l = a.Deferred(), h = function(F) {
            return function(m) {
              u[F] = this, o[F] = arguments.length > 1 ? g.call(arguments) : m, --t || l.resolveWith(u, o);
            };
          };
          if (t <= 1 && (f(
            e,
            l.done(h(r)).resolve,
            l.reject,
            !t
          ), l.state() === "pending" || B(o[r] && o[r].then)))
            return l.then();
          for (; r--; )
            f(o[r], h(r), l.reject);
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
      function _() {
        W.removeEventListener("DOMContentLoaded", _), n.removeEventListener("load", _), a.ready();
      }
      W.readyState === "complete" || W.readyState !== "loading" && !W.documentElement.doScroll ? n.setTimeout(a.ready) : (W.addEventListener("DOMContentLoaded", _), n.addEventListener("load", _));
      var A = function(e, t, r, u, o, l, h) {
        var F = 0, m = e.length, x = r == null;
        if (Te(r) === "object") {
          o = !0;
          for (F in r)
            A(e, t, F, r[F], !0, l, h);
        } else if (u !== void 0 && (o = !0, B(u) || (h = !0), x && (h ? (t.call(e, u), t = null) : (x = t, t = function(S, H, C) {
          return x.call(a(S), C);
        })), t))
          for (; F < m; F++)
            t(
              e[F],
              r,
              h ? u : u.call(e[F], F, t(e[F], r))
            );
        return o ? e : x ? t.call(e) : m ? t(e[0], r) : l;
      }, O = /^-ms-/, U = /-([a-z])/g;
      function ee(e, t) {
        return t.toUpperCase();
      }
      function ie(e) {
        return e.replace(O, "ms-").replace(U, ee);
      }
      var ge = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function he() {
        this.expando = a.expando + he.uid++;
      }
      he.uid = 1, he.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, ge(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
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
              for (Array.isArray(t) ? t = t.map(ie) : (t = ie(t), t = t in u ? [t] : t.match(Le) || []), r = t.length; r--; )
                delete u[t[r]];
            (t === void 0 || a.isEmptyObject(u)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !a.isEmptyObject(t);
        }
      };
      var L = new he(), ce = new he(), Xe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Qn = /[A-Z]/g;
      function de(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Xe.test(e) ? JSON.parse(e) : e;
      }
      function ye(e, t, r) {
        var u;
        if (r === void 0 && e.nodeType === 1)
          if (u = "data-" + t.replace(Qn, "-$&").toLowerCase(), r = e.getAttribute(u), typeof r == "string") {
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
          return ce.hasData(e) || L.hasData(e);
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
          return L.access(e, t, r);
        },
        _removeData: function(e, t) {
          L.remove(e, t);
        }
      }), a.fn.extend({
        data: function(e, t) {
          var r, u, o, l = this[0], h = l && l.attributes;
          if (e === void 0) {
            if (this.length && (o = ce.get(l), l.nodeType === 1 && !L.get(l, "hasDataAttrs"))) {
              for (r = h.length; r--; )
                h[r] && (u = h[r].name, u.indexOf("data-") === 0 && (u = ie(u.slice(5)), ye(l, u, o[u])));
              L.set(l, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object" ? this.each(function() {
            ce.set(this, e);
          }) : A(this, function(F) {
            var m;
            if (l && F === void 0)
              return m = ce.get(l, e), m !== void 0 || (m = ye(l, e), m !== void 0) ? m : void 0;
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
            return t = (t || "fx") + "queue", u = L.get(e, t), r && (!u || Array.isArray(r) ? u = L.access(e, t, a.makeArray(r)) : u.push(r)), u || [];
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
          return L.get(e, r) || L.access(e, r, {
            empty: a.Callbacks("once memory").add(function() {
              L.remove(e, [t + "queue", r]);
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
            r = L.get(l[h], e + "queueHooks"), r && r.empty && (u++, r.empty.add(F));
          return F(), o.promise(t);
        }
      });
      var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, it = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"), ke = ["Top", "Right", "Bottom", "Left"], ut = W.documentElement, ht = function(e) {
        return a.contains(e.ownerDocument, e);
      }, Yn = { composed: !0 };
      ut.getRootNode && (ht = function(e) {
        return a.contains(e.ownerDocument, e) || e.getRootNode(Yn) === e.ownerDocument;
      });
      var yn = function(e, t) {
        return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        ht(e) && a.css(e, "display") === "none";
      };
      function li(e, t, r, u) {
        var o, l, h = 20, F = u ? function() {
          return u.cur();
        } : function() {
          return a.css(e, t, "");
        }, m = F(), x = r && r[3] || (a.cssNumber[t] ? "" : "px"), S = e.nodeType && (a.cssNumber[t] || x !== "px" && +m) && it.exec(a.css(e, t));
        if (S && S[3] !== x) {
          for (m = m / 2, x = x || S[3], S = +m || 1; h--; )
            a.style(e, t, S + x), (1 - l) * (1 - (l = F() / m || 0.5)) <= 0 && (h = 0), S = S / l;
          S = S * 2, a.style(e, t, S + x), r = r || [];
        }
        return r && (S = +S || +m || 0, o = r[1] ? S + (r[1] + 1) * r[2] : +r[2], u && (u.unit = x, u.start = S, u.end = o)), o;
      }
      var ci = {};
      function La(e) {
        var t, r = e.ownerDocument, u = e.nodeName, o = ci[u];
        return o || (t = r.body.appendChild(r.createElement(u)), o = a.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), ci[u] = o, o);
      }
      function Ot(e, t) {
        for (var r, u, o = [], l = 0, h = e.length; l < h; l++)
          u = e[l], u.style && (r = u.style.display, t ? (r === "none" && (o[l] = L.get(u, "display") || null, o[l] || (u.style.display = "")), u.style.display === "" && yn(u) && (o[l] = La(u))) : r !== "none" && (o[l] = "none", L.set(u, "display", r)));
        for (l = 0; l < h; l++)
          o[l] != null && (e[l].style.display = o[l]);
        return e;
      }
      a.fn.extend({
        show: function() {
          return Ot(this, !0);
        },
        hide: function() {
          return Ot(this);
        },
        toggle: function(e) {
          return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
            yn(this) ? a(this).show() : a(this).hide();
          });
        }
      });
      var zt = /^(?:checkbox|radio)$/i, fi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, hi = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = W.createDocumentFragment(), t = e.appendChild(W.createElement("div")), r = W.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), j.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", j.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", j.option = !!t.lastChild;
      })();
      var qe = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      qe.tbody = qe.tfoot = qe.colgroup = qe.caption = qe.thead, qe.th = qe.td, j.option || (qe.optgroup = qe.option = [1, "<select multiple='multiple'>", "</select>"]);
      function De(e, t) {
        var r;
        return typeof e.getElementsByTagName < "u" ? r = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? r = e.querySelectorAll(t || "*") : r = [], t === void 0 || t && ue(e, t) ? a.merge([e], r) : r;
      }
      function Kn(e, t) {
        for (var r = 0, u = e.length; r < u; r++)
          L.set(
            e[r],
            "globalEval",
            !t || L.get(t[r], "globalEval")
          );
      }
      var ka = /<|&#?\w+;/;
      function di(e, t, r, u, o) {
        for (var l, h, F, m, x, S, H = t.createDocumentFragment(), C = [], I = 0, J = e.length; I < J; I++)
          if (l = e[I], l || l === 0)
            if (Te(l) === "object")
              a.merge(C, l.nodeType ? [l] : l);
            else if (!ka.test(l))
              C.push(t.createTextNode(l));
            else {
              for (h = h || H.appendChild(t.createElement("div")), F = (fi.exec(l) || ["", ""])[1].toLowerCase(), m = qe[F] || qe._default, h.innerHTML = m[1] + a.htmlPrefilter(l) + m[2], S = m[0]; S--; )
                h = h.lastChild;
              a.merge(C, h.childNodes), h = H.firstChild, h.textContent = "";
            }
        for (H.textContent = "", I = 0; l = C[I++]; ) {
          if (u && a.inArray(l, u) > -1) {
            o && o.push(l);
            continue;
          }
          if (x = ht(l), h = De(H.appendChild(l), "script"), x && Kn(h), r)
            for (S = 0; l = h[S++]; )
              hi.test(l.type || "") && r.push(l);
        }
        return H;
      }
      var pi = /^([^.]*)(?:\.(.+)|)/;
      function Mt() {
        return !0;
      }
      function It() {
        return !1;
      }
      function Zn(e, t, r, u, o, l) {
        var h, F;
        if (typeof t == "object") {
          typeof r != "string" && (u = u || r, r = void 0);
          for (F in t)
            Zn(e, F, r, u, t[F], l);
          return e;
        }
        if (u == null && o == null ? (o = r, u = r = void 0) : o == null && (typeof r == "string" ? (o = u, u = void 0) : (o = u, u = r, r = void 0)), o === !1)
          o = It;
        else if (!o)
          return e;
        return l === 1 && (h = o, o = function(m) {
          return a().off(m), h.apply(this, arguments);
        }, o.guid = h.guid || (h.guid = a.guid++)), e.each(function() {
          a.event.add(this, t, o, u, r);
        });
      }
      a.event = {
        global: {},
        add: function(e, t, r, u, o) {
          var l, h, F, m, x, S, H, C, I, J, ne, Q = L.get(e);
          if (ge(e))
            for (r.handler && (l = r, r = l.handler, o = l.selector), o && a.find.matchesSelector(ut, o), r.guid || (r.guid = a.guid++), (m = Q.events) || (m = Q.events = /* @__PURE__ */ Object.create(null)), (h = Q.handle) || (h = Q.handle = function(Fe) {
              return typeof a < "u" && a.event.triggered !== Fe.type ? a.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(Le) || [""], x = t.length; x--; )
              F = pi.exec(t[x]) || [], I = ne = F[1], J = (F[2] || "").split(".").sort(), I && (H = a.event.special[I] || {}, I = (o ? H.delegateType : H.bindType) || I, H = a.event.special[I] || {}, S = a.extend({
                type: I,
                origType: ne,
                data: u,
                handler: r,
                guid: r.guid,
                selector: o,
                needsContext: o && a.expr.match.needsContext.test(o),
                namespace: J.join(".")
              }, l), (C = m[I]) || (C = m[I] = [], C.delegateCount = 0, (!H.setup || H.setup.call(e, u, J, h) === !1) && e.addEventListener && e.addEventListener(I, h)), H.add && (H.add.call(e, S), S.handler.guid || (S.handler.guid = r.guid)), o ? C.splice(C.delegateCount++, 0, S) : C.push(S), a.event.global[I] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, r, u, o) {
          var l, h, F, m, x, S, H, C, I, J, ne, Q = L.hasData(e) && L.get(e);
          if (!(!Q || !(m = Q.events))) {
            for (t = (t || "").match(Le) || [""], x = t.length; x--; ) {
              if (F = pi.exec(t[x]) || [], I = ne = F[1], J = (F[2] || "").split(".").sort(), !I) {
                for (I in m)
                  a.event.remove(e, I + t[x], r, u, !0);
                continue;
              }
              for (H = a.event.special[I] || {}, I = (u ? H.delegateType : H.bindType) || I, C = m[I] || [], F = F[2] && new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = l = C.length; l--; )
                S = C[l], (o || ne === S.origType) && (!r || r.guid === S.guid) && (!F || F.test(S.namespace)) && (!u || u === S.selector || u === "**" && S.selector) && (C.splice(l, 1), S.selector && C.delegateCount--, H.remove && H.remove.call(e, S));
              h && !C.length && ((!H.teardown || H.teardown.call(e, J, Q.handle) === !1) && a.removeEvent(e, I, Q.handle), delete m[I]);
            }
            a.isEmptyObject(m) && L.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, r, u, o, l, h, F = new Array(arguments.length), m = a.event.fix(e), x = (L.get(this, "events") || /* @__PURE__ */ Object.create(null))[m.type] || [], S = a.event.special[m.type] || {};
          for (F[0] = m, t = 1; t < arguments.length; t++)
            F[t] = arguments[t];
          if (m.delegateTarget = this, !(S.preDispatch && S.preDispatch.call(this, m) === !1)) {
            for (h = a.event.handlers.call(this, m, x), t = 0; (o = h[t++]) && !m.isPropagationStopped(); )
              for (m.currentTarget = o.elem, r = 0; (l = o.handlers[r++]) && !m.isImmediatePropagationStopped(); )
                (!m.rnamespace || l.namespace === !1 || m.rnamespace.test(l.namespace)) && (m.handleObj = l, m.data = l.data, u = ((a.event.special[l.origType] || {}).handle || l.handler).apply(o.elem, F), u !== void 0 && (m.result = u) === !1 && (m.preventDefault(), m.stopPropagation()));
            return S.postDispatch && S.postDispatch.call(this, m), m.result;
          }
        },
        handlers: function(e, t) {
          var r, u, o, l, h, F = [], m = t.delegateCount, x = e.target;
          if (m && // Support: IE <=9
          // Black-hole SVG <use> instance trees (trac-13180)
          x.nodeType && // Support: Firefox <=42
          // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
          // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
          // Support: IE 11 only
          // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
          !(e.type === "click" && e.button >= 1)) {
            for (; x !== this; x = x.parentNode || this)
              if (x.nodeType === 1 && !(e.type === "click" && x.disabled === !0)) {
                for (l = [], h = {}, r = 0; r < m; r++)
                  u = t[r], o = u.selector + " ", h[o] === void 0 && (h[o] = u.needsContext ? a(o, this).index(x) > -1 : a.find(o, this, null, [x]).length), h[o] && l.push(u);
                l.length && F.push({ elem: x, handlers: l });
              }
          }
          return x = this, m < t.length && F.push({ elem: x, handlers: t.slice(m) }), F;
        },
        addProp: function(e, t) {
          Object.defineProperty(a.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: B(t) ? function() {
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
              return zt.test(t.type) && t.click && ue(t, "input") && Fn(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return zt.test(t.type) && t.click && ue(t, "input") && Fn(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return zt.test(t.type) && t.click && ue(t, "input") && L.get(t, "click") || ue(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function Fn(e, t, r) {
        if (!r) {
          L.get(e, t) === void 0 && a.event.add(e, t, Mt);
          return;
        }
        L.set(e, t, !1), a.event.add(e, t, {
          namespace: !1,
          handler: function(u) {
            var o, l = L.get(this, t);
            if (u.isTrigger & 1 && this[t]) {
              if (l)
                (a.event.special[t] || {}).delegateType && u.stopPropagation();
              else if (l = g.call(arguments), L.set(this, t, l), this[t](), o = L.get(this, t), L.set(this, t, !1), l !== o)
                return u.stopImmediatePropagation(), u.preventDefault(), o;
            } else
              l && (L.set(this, t, a.event.trigger(
                l[0],
                l.slice(1),
                this
              )), u.stopPropagation(), u.isImmediatePropagationStopped = Mt);
          }
        });
      }
      a.removeEvent = function(e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r);
      }, a.Event = function(e, t) {
        if (!(this instanceof a.Event))
          return new a.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
        e.returnValue === !1 ? Mt : It, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && a.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[a.expando] = !0;
      }, a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: It,
        isPropagationStopped: It,
        isImmediatePropagationStopped: It,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Mt, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Mt, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Mt, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
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
            var o = L.get(this, "handle"), l = a.event.fix(u);
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
            if (Fn(this, e, !0), W.documentMode)
              u = L.get(this, t), u || this.addEventListener(t, r), L.set(this, t, (u || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return Fn(this, e), !0;
          },
          teardown: function() {
            var u;
            if (W.documentMode)
              u = L.get(this, t) - 1, u ? L.set(this, t, u) : (this.removeEventListener(t, r), L.remove(this, t));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(u) {
            return L.get(u.target, e);
          },
          delegateType: t
        }, a.event.special[t] = {
          setup: function() {
            var u = this.ownerDocument || this.document || this, o = W.documentMode ? this : u, l = L.get(o, t);
            l || (W.documentMode ? this.addEventListener(t, r) : u.addEventListener(e, r, !0)), L.set(o, t, (l || 0) + 1);
          },
          teardown: function() {
            var u = this.ownerDocument || this.document || this, o = W.documentMode ? this : u, l = L.get(o, t) - 1;
            l ? L.set(o, t, l) : (W.documentMode ? this.removeEventListener(t, r) : u.removeEventListener(e, r, !0), L.remove(o, t));
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
          return Zn(this, e, t, r, u);
        },
        one: function(e, t, r, u) {
          return Zn(this, e, t, r, u, 1);
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
          return (t === !1 || typeof t == "function") && (r = t, t = void 0), r === !1 && (r = It), this.each(function() {
            a.event.remove(this, e, r, t);
          });
        }
      });
      var qa = /<script|<style|<link/i, Ra = /checked\s*(?:[^=]|=\s*.checked.)/i, Ua = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function gi(e, t) {
        return ue(e, "table") && ue(t.nodeType !== 11 ? t : t.firstChild, "tr") && a(e).children("tbody")[0] || e;
      }
      function Va(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function Ga(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function vi(e, t) {
        var r, u, o, l, h, F, m;
        if (t.nodeType === 1) {
          if (L.hasData(e) && (l = L.get(e), m = l.events, m)) {
            L.remove(t, "handle events");
            for (o in m)
              for (r = 0, u = m[o].length; r < u; r++)
                a.event.add(t, o, m[o][r]);
          }
          ce.hasData(e) && (h = ce.access(e), F = a.extend({}, h), ce.set(t, F));
        }
      }
      function Wa(e, t) {
        var r = t.nodeName.toLowerCase();
        r === "input" && zt.test(e.type) ? t.checked = e.checked : (r === "input" || r === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Pt(e, t, r, u) {
        t = w(t);
        var o, l, h, F, m, x, S = 0, H = e.length, C = H - 1, I = t[0], J = B(I);
        if (J || H > 1 && typeof I == "string" && !j.checkClone && Ra.test(I))
          return e.each(function(ne) {
            var Q = e.eq(ne);
            J && (t[0] = I.call(this, ne, Q.html())), Pt(Q, t, r, u);
          });
        if (H && (o = di(t, e[0].ownerDocument, !1, e, u), l = o.firstChild, o.childNodes.length === 1 && (o = l), l || u)) {
          for (h = a.map(De(o, "script"), Va), F = h.length; S < H; S++)
            m = o, S !== C && (m = a.clone(m, !0, !0), F && a.merge(h, De(m, "script"))), r.call(e[S], m, S);
          if (F)
            for (x = h[h.length - 1].ownerDocument, a.map(h, Ga), S = 0; S < F; S++)
              m = h[S], hi.test(m.type || "") && !L.access(m, "globalEval") && a.contains(x, m) && (m.src && (m.type || "").toLowerCase() !== "module" ? a._evalUrl && !m.noModule && a._evalUrl(m.src, {
                nonce: m.nonce || m.getAttribute("nonce")
              }, x) : Se(m.textContent.replace(Ua, ""), m, x));
        }
        return e;
      }
      function mi(e, t, r) {
        for (var u, o = t ? a.filter(t, e) : e, l = 0; (u = o[l]) != null; l++)
          !r && u.nodeType === 1 && a.cleanData(De(u)), u.parentNode && (r && ht(u) && Kn(De(u, "script")), u.parentNode.removeChild(u));
        return e;
      }
      a.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, r) {
          var u, o, l, h, F = e.cloneNode(!0), m = ht(e);
          if (!j.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !a.isXMLDoc(e))
            for (h = De(F), l = De(e), u = 0, o = l.length; u < o; u++)
              Wa(l[u], h[u]);
          if (t)
            if (r)
              for (l = l || De(e), h = h || De(F), u = 0, o = l.length; u < o; u++)
                vi(l[u], h[u]);
            else
              vi(e, F);
          return h = De(F, "script"), h.length > 0 && Kn(h, !m && De(e, "script")), F;
        },
        cleanData: function(e) {
          for (var t, r, u, o = a.event.special, l = 0; (r = e[l]) !== void 0; l++)
            if (ge(r)) {
              if (t = r[L.expando]) {
                if (t.events)
                  for (u in t.events)
                    o[u] ? a.event.remove(r, u) : a.removeEvent(r, u, t.handle);
                r[L.expando] = void 0;
              }
              r[ce.expando] && (r[ce.expando] = void 0);
            }
        }
      }), a.fn.extend({
        detach: function(e) {
          return mi(this, e, !0);
        },
        remove: function(e) {
          return mi(this, e);
        },
        text: function(e) {
          return A(this, function(t) {
            return t === void 0 ? a.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Pt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = gi(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Pt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = gi(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return Pt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return Pt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (a.cleanData(De(e, !1)), e.textContent = "");
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
            if (typeof t == "string" && !qa.test(t) && !qe[(fi.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = a.htmlPrefilter(t);
              try {
                for (; u < o; u++)
                  r = this[u] || {}, r.nodeType === 1 && (a.cleanData(De(r, !1)), r.innerHTML = t);
                r = 0;
              } catch {
              }
            }
            r && this.empty().append(t);
          }, null, e, arguments.length);
        },
        replaceWith: function() {
          var e = [];
          return Pt(this, arguments, function(t) {
            var r = this.parentNode;
            a.inArray(this, e) < 0 && (a.cleanData(De(this)), r && r.replaceChild(t, this));
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
      var er = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"), tr = /^--/, bn = function(e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = n), t.getComputedStyle(e);
      }, yi = function(e, t, r) {
        var u, o, l = {};
        for (o in t)
          l[o] = e.style[o], e.style[o] = t[o];
        u = r.call(e);
        for (o in t)
          e.style[o] = l[o];
        return u;
      }, ja = new RegExp(ke.join("|"), "i");
      (function() {
        function e() {
          if (x) {
            m.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", x.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ut.appendChild(m).appendChild(x);
            var S = n.getComputedStyle(x);
            r = S.top !== "1%", F = t(S.marginLeft) === 12, x.style.right = "60%", l = t(S.right) === 36, u = t(S.width) === 36, x.style.position = "absolute", o = t(x.offsetWidth / 3) === 12, ut.removeChild(m), x = null;
          }
        }
        function t(S) {
          return Math.round(parseFloat(S));
        }
        var r, u, o, l, h, F, m = W.createElement("div"), x = W.createElement("div");
        x.style && (x.style.backgroundClip = "content-box", x.cloneNode(!0).style.backgroundClip = "", j.clearCloneStyle = x.style.backgroundClip === "content-box", a.extend(j, {
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
            var S, H, C, I;
            return h == null && (S = W.createElement("table"), H = W.createElement("tr"), C = W.createElement("div"), S.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", H.style.cssText = "box-sizing:content-box;border:1px solid", H.style.height = "1px", C.style.height = "9px", C.style.display = "block", ut.appendChild(S).appendChild(H).appendChild(C), I = n.getComputedStyle(H), h = parseInt(I.height, 10) + parseInt(I.borderTopWidth, 10) + parseInt(I.borderBottomWidth, 10) === H.offsetHeight, ut.removeChild(S)), h;
          }
        }));
      })();
      function Jt(e, t, r) {
        var u, o, l, h, F = tr.test(t), m = e.style;
        return r = r || bn(e), r && (h = r.getPropertyValue(t) || r[t], F && h && (h = h.replace(xt, "$1") || void 0), h === "" && !ht(e) && (h = a.style(e, t)), !j.pixelBoxStyles() && er.test(h) && ja.test(t) && (u = m.width, o = m.minWidth, l = m.maxWidth, m.minWidth = m.maxWidth = m.width = h, h = r.width, m.width = u, m.minWidth = o, m.maxWidth = l)), h !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          h + ""
        ) : h;
      }
      function Fi(e, t) {
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
      var bi = ["Webkit", "Moz", "ms"], wi = W.createElement("div").style, xi = {};
      function Ba(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), r = bi.length; r--; )
          if (e = bi[r] + t, e in wi)
            return e;
      }
      function nr(e) {
        var t = a.cssProps[e] || xi[e];
        return t || (e in wi ? e : xi[e] = Ba(e) || e);
      }
      var za = /^(none|table(?!-c[ea]).+)/, Ja = { position: "absolute", visibility: "hidden", display: "block" }, _i = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function Ti(e, t, r) {
        var u = it.exec(t);
        return u ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, u[2] - (r || 0)) + (u[3] || "px")
        ) : t;
      }
      function rr(e, t, r, u, o, l) {
        var h = t === "width" ? 1 : 0, F = 0, m = 0, x = 0;
        if (r === (u ? "border" : "content"))
          return 0;
        for (; h < 4; h += 2)
          r === "margin" && (x += a.css(e, r + ke[h], !0, o)), u ? (r === "content" && (m -= a.css(e, "padding" + ke[h], !0, o)), r !== "margin" && (m -= a.css(e, "border" + ke[h] + "Width", !0, o))) : (m += a.css(e, "padding" + ke[h], !0, o), r !== "padding" ? m += a.css(e, "border" + ke[h] + "Width", !0, o) : F += a.css(e, "border" + ke[h] + "Width", !0, o));
        return !u && l >= 0 && (m += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - l - m - F - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), m + x;
      }
      function Ci(e, t, r) {
        var u = bn(e), o = !j.boxSizingReliable() || r, l = o && a.css(e, "boxSizing", !1, u) === "border-box", h = l, F = Jt(e, t, u), m = "offset" + t[0].toUpperCase() + t.slice(1);
        if (er.test(F)) {
          if (!r)
            return F;
          F = "auto";
        }
        return (!j.boxSizingReliable() && l || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !j.reliableTrDimensions() && ue(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        F === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(F) && a.css(e, "display", !1, u) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (l = a.css(e, "boxSizing", !1, u) === "border-box", h = m in e, h && (F = e[m])), F = parseFloat(F) || 0, F + rr(
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
                var r = Jt(e, "opacity");
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
            var o, l, h, F = ie(t), m = tr.test(t), x = e.style;
            if (m || (t = nr(F)), h = a.cssHooks[t] || a.cssHooks[F], r !== void 0) {
              if (l = typeof r, l === "string" && (o = it.exec(r)) && o[1] && (r = li(e, t, o), l = "number"), r == null || r !== r)
                return;
              l === "number" && !m && (r += o && o[3] || (a.cssNumber[F] ? "" : "px")), !j.clearCloneStyle && r === "" && t.indexOf("background") === 0 && (x[t] = "inherit"), (!h || !("set" in h) || (r = h.set(e, r, u)) !== void 0) && (m ? x.setProperty(t, r) : x[t] = r);
            } else
              return h && "get" in h && (o = h.get(e, !1, u)) !== void 0 ? o : x[t];
          }
        },
        css: function(e, t, r, u) {
          var o, l, h, F = ie(t), m = tr.test(t);
          return m || (t = nr(F)), h = a.cssHooks[t] || a.cssHooks[F], h && "get" in h && (o = h.get(e, !0, r)), o === void 0 && (o = Jt(e, t, u)), o === "normal" && t in _i && (o = _i[t]), r === "" || r ? (l = parseFloat(o), r === !0 || isFinite(l) ? l || 0 : o) : o;
        }
      }), a.each(["height", "width"], function(e, t) {
        a.cssHooks[t] = {
          get: function(r, u, o) {
            if (u)
              return za.test(a.css(r, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!r.getClientRects().length || !r.getBoundingClientRect().width) ? yi(r, Ja, function() {
                return Ci(r, t, o);
              }) : Ci(r, t, o);
          },
          set: function(r, u, o) {
            var l, h = bn(r), F = !j.scrollboxSize() && h.position === "absolute", m = F || o, x = m && a.css(r, "boxSizing", !1, h) === "border-box", S = o ? rr(
              r,
              t,
              o,
              x,
              h
            ) : 0;
            return x && F && (S -= Math.ceil(
              r["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(h[t]) - rr(r, t, "border", !1, h) - 0.5
            )), S && (l = it.exec(u)) && (l[3] || "px") !== "px" && (r.style[t] = u, u = a.css(r, t)), Ti(r, u, S);
          }
        };
      }), a.cssHooks.marginLeft = Fi(
        j.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(Jt(e, "marginLeft")) || e.getBoundingClientRect().left - yi(e, { marginLeft: 0 }, function() {
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
              o[e + ke[u] + t] = l[u] || l[u - 2] || l[0];
            return o;
          }
        }, e !== "margin" && (a.cssHooks[e + t].set = Ti);
      }), a.fn.extend({
        css: function(e, t) {
          return A(this, function(r, u, o) {
            var l, h, F = {}, m = 0;
            if (Array.isArray(u)) {
              for (l = bn(r), h = u.length; m < h; m++)
                F[u[m]] = a.css(r, u[m], !1, l);
              return F;
            }
            return o !== void 0 ? a.style(r, u, o) : a.css(r, u);
          }, e, t, arguments.length > 1);
        }
      });
      function Ae(e, t, r, u, o) {
        return new Ae.prototype.init(e, t, r, u, o);
      }
      a.Tween = Ae, Ae.prototype = {
        constructor: Ae,
        init: function(e, t, r, u, o, l) {
          this.elem = e, this.prop = r, this.easing = o || a.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = l || (a.cssNumber[r] ? "" : "px");
        },
        cur: function() {
          var e = Ae.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ae.propHooks._default.get(this);
        },
        run: function(e) {
          var t, r = Ae.propHooks[this.prop];
          return this.options.duration ? this.pos = t = a.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ae.propHooks._default.set(this), this;
        }
      }, Ae.prototype.init.prototype = Ae.prototype, Ae.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = a.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
          },
          set: function(e) {
            a.fx.step[e.prop] ? a.fx.step[e.prop](e) : e.elem.nodeType === 1 && (a.cssHooks[e.prop] || e.elem.style[nr(e.prop)] != null) ? a.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          }
        }
      }, Ae.propHooks.scrollTop = Ae.propHooks.scrollLeft = {
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
      }, a.fx = Ae.prototype.init, a.fx.step = {};
      var $t, wn, Xa = /^(?:toggle|show|hide)$/, Qa = /queueHooks$/;
      function ir() {
        wn && (W.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ir) : n.setTimeout(ir, a.fx.interval), a.fx.tick());
      }
      function Ei() {
        return n.setTimeout(function() {
          $t = void 0;
        }), $t = Date.now();
      }
      function xn(e, t) {
        var r, u = 0, o = { height: e };
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
          r = ke[u], o["margin" + r] = o["padding" + r] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function Si(e, t, r) {
        for (var u, o = (We.tweeners[t] || []).concat(We.tweeners["*"]), l = 0, h = o.length; l < h; l++)
          if (u = o[l].call(r, t, e))
            return u;
      }
      function Ya(e, t, r) {
        var u, o, l, h, F, m, x, S, H = "width" in t || "height" in t, C = this, I = {}, J = e.style, ne = e.nodeType && yn(e), Q = L.get(e, "fxshow");
        r.queue || (h = a._queueHooks(e, "fx"), h.unqueued == null && (h.unqueued = 0, F = h.empty.fire, h.empty.fire = function() {
          h.unqueued || F();
        }), h.unqueued++, C.always(function() {
          C.always(function() {
            h.unqueued--, a.queue(e, "fx").length || h.empty.fire();
          });
        }));
        for (u in t)
          if (o = t[u], Xa.test(o)) {
            if (delete t[u], l = l || o === "toggle", o === (ne ? "hide" : "show"))
              if (o === "show" && Q && Q[u] !== void 0)
                ne = !0;
              else
                continue;
            I[u] = Q && Q[u] || a.style(e, u);
          }
        if (m = !a.isEmptyObject(t), !(!m && a.isEmptyObject(I))) {
          H && e.nodeType === 1 && (r.overflow = [J.overflow, J.overflowX, J.overflowY], x = Q && Q.display, x == null && (x = L.get(e, "display")), S = a.css(e, "display"), S === "none" && (x ? S = x : (Ot([e], !0), x = e.style.display || x, S = a.css(e, "display"), Ot([e]))), (S === "inline" || S === "inline-block" && x != null) && a.css(e, "float") === "none" && (m || (C.done(function() {
            J.display = x;
          }), x == null && (S = J.display, x = S === "none" ? "" : S)), J.display = "inline-block")), r.overflow && (J.overflow = "hidden", C.always(function() {
            J.overflow = r.overflow[0], J.overflowX = r.overflow[1], J.overflowY = r.overflow[2];
          })), m = !1;
          for (u in I)
            m || (Q ? "hidden" in Q && (ne = Q.hidden) : Q = L.access(e, "fxshow", { display: x }), l && (Q.hidden = !ne), ne && Ot([e], !0), C.done(function() {
              ne || Ot([e]), L.remove(e, "fxshow");
              for (u in I)
                a.style(e, u, I[u]);
            })), m = Si(ne ? Q[u] : 0, u, C), u in Q || (Q[u] = m.start, ne && (m.end = m.start, m.start = 0));
        }
      }
      function Ka(e, t) {
        var r, u, o, l, h;
        for (r in e)
          if (u = ie(r), o = t[u], l = e[r], Array.isArray(l) && (o = l[1], l = e[r] = l[0]), r !== u && (e[u] = l, delete e[r]), h = a.cssHooks[u], h && "expand" in h) {
            l = h.expand(l), delete e[u];
            for (r in l)
              r in e || (e[r] = l[r], t[r] = o);
          } else
            t[u] = o;
      }
      function We(e, t, r) {
        var u, o, l = 0, h = We.prefilters.length, F = a.Deferred().always(function() {
          delete m.elem;
        }), m = function() {
          if (o)
            return !1;
          for (var H = $t || Ei(), C = Math.max(0, x.startTime + x.duration - H), I = C / x.duration || 0, J = 1 - I, ne = 0, Q = x.tweens.length; ne < Q; ne++)
            x.tweens[ne].run(J);
          return F.notifyWith(e, [x, J, C]), J < 1 && Q ? C : (Q || F.notifyWith(e, [x, 1, 0]), F.resolveWith(e, [x]), !1);
        }, x = F.promise({
          elem: e,
          props: a.extend({}, t),
          opts: a.extend(!0, {
            specialEasing: {},
            easing: a.easing._default
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: $t || Ei(),
          duration: r.duration,
          tweens: [],
          createTween: function(H, C) {
            var I = a.Tween(
              e,
              x.opts,
              H,
              C,
              x.opts.specialEasing[H] || x.opts.easing
            );
            return x.tweens.push(I), I;
          },
          stop: function(H) {
            var C = 0, I = H ? x.tweens.length : 0;
            if (o)
              return this;
            for (o = !0; C < I; C++)
              x.tweens[C].run(1);
            return H ? (F.notifyWith(e, [x, 1, 0]), F.resolveWith(e, [x, H])) : F.rejectWith(e, [x, H]), this;
          }
        }), S = x.props;
        for (Ka(S, x.opts.specialEasing); l < h; l++)
          if (u = We.prefilters[l].call(x, e, S, x.opts), u)
            return B(u.stop) && (a._queueHooks(x.elem, x.opts.queue).stop = u.stop.bind(u)), u;
        return a.map(S, Si, x), B(x.opts.start) && x.opts.start.call(e, x), x.progress(x.opts.progress).done(x.opts.done, x.opts.complete).fail(x.opts.fail).always(x.opts.always), a.fx.timer(
          a.extend(m, {
            elem: e,
            anim: x,
            queue: x.opts.queue
          })
        ), x;
      }
      a.Animation = a.extend(We, {
        tweeners: {
          "*": [function(e, t) {
            var r = this.createTween(e, t);
            return li(r.elem, e, it.exec(t), r), r;
          }]
        },
        tweener: function(e, t) {
          B(e) ? (t = e, e = ["*"]) : e = e.match(Le);
          for (var r, u = 0, o = e.length; u < o; u++)
            r = e[u], We.tweeners[r] = We.tweeners[r] || [], We.tweeners[r].unshift(t);
        },
        prefilters: [Ya],
        prefilter: function(e, t) {
          t ? We.prefilters.unshift(e) : We.prefilters.push(e);
        }
      }), a.speed = function(e, t, r) {
        var u = e && typeof e == "object" ? a.extend({}, e) : {
          complete: r || !r && t || B(e) && e,
          duration: e,
          easing: r && t || t && !B(t) && t
        };
        return a.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration in a.fx.speeds ? u.duration = a.fx.speeds[u.duration] : u.duration = a.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
          B(u.old) && u.old.call(this), u.queue && a.dequeue(this, u.queue);
        }, u;
      }, a.fn.extend({
        fadeTo: function(e, t, r, u) {
          return this.filter(yn).css("opacity", 0).show().end().animate({ opacity: t }, e, r, u);
        },
        animate: function(e, t, r, u) {
          var o = a.isEmptyObject(e), l = a.speed(t, r, u), h = function() {
            var F = We(this, a.extend({}, e), l);
            (o || L.get(this, "finish")) && F.stop(!0);
          };
          return h.finish = h, o || l.queue === !1 ? this.each(h) : this.queue(l.queue, h);
        },
        stop: function(e, t, r) {
          var u = function(o) {
            var l = o.stop;
            delete o.stop, l(r);
          };
          return typeof e != "string" && (r = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var o = !0, l = e != null && e + "queueHooks", h = a.timers, F = L.get(this);
            if (l)
              F[l] && F[l].stop && u(F[l]);
            else
              for (l in F)
                F[l] && F[l].stop && Qa.test(l) && u(F[l]);
            for (l = h.length; l--; )
              h[l].elem === this && (e == null || h[l].queue === e) && (h[l].anim.stop(r), o = !1, h.splice(l, 1));
            (o || !r) && a.dequeue(this, e);
          });
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, r = L.get(this), u = r[e + "queue"], o = r[e + "queueHooks"], l = a.timers, h = u ? u.length : 0;
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
          return u == null || typeof u == "boolean" ? r.apply(this, arguments) : this.animate(xn(t, !0), u, o, l);
        };
      }), a.each({
        slideDown: xn("show"),
        slideUp: xn("hide"),
        slideToggle: xn("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      }, function(e, t) {
        a.fn[e] = function(r, u, o) {
          return this.animate(t, r, u, o);
        };
      }), a.timers = [], a.fx.tick = function() {
        var e, t = 0, r = a.timers;
        for ($t = Date.now(); t < r.length; t++)
          e = r[t], !e() && r[t] === e && r.splice(t--, 1);
        r.length || a.fx.stop(), $t = void 0;
      }, a.fx.timer = function(e) {
        a.timers.push(e), a.fx.start();
      }, a.fx.interval = 13, a.fx.start = function() {
        wn || (wn = !0, ir());
      }, a.fx.stop = function() {
        wn = null;
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
        e.type = "checkbox", j.checkOn = e.value !== "", j.optSelected = r.selected, e = W.createElement("input"), e.value = "t", e.type = "radio", j.radioValue = e.value === "t";
      }();
      var Di, Xt = a.expr.attrHandle;
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
            if ((l !== 1 || !a.isXMLDoc(e)) && (o = a.attrHooks[t.toLowerCase()] || (a.expr.match.bool.test(t) ? Di : void 0)), r !== void 0) {
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
              if (!j.radioValue && t === "radio" && ue(e, "input")) {
                var r = e.value;
                return e.setAttribute("type", t), r && (e.value = r), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var r, u = 0, o = t && t.match(Le);
          if (o && e.nodeType === 1)
            for (; r = o[u++]; )
              e.removeAttribute(r);
        }
      }), Di = {
        set: function(e, t, r) {
          return t === !1 ? a.removeAttr(e, r) : e.setAttribute(r, r), r;
        }
      }, a.each(a.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = Xt[t] || a.find.attr;
        Xt[t] = function(u, o, l) {
          var h, F, m = o.toLowerCase();
          return l || (F = Xt[m], Xt[m] = h, h = r(u, o, l) != null ? m : null, Xt[m] = F), h;
        };
      });
      var Za = /^(?:input|select|textarea|button)$/i, es = /^(?:a|area)$/i;
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
              return t ? parseInt(t, 10) : Za.test(e.nodeName) || es.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), j.optSelected || (a.propHooks.selected = {
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
      function _t(e) {
        var t = e.match(Le) || [];
        return t.join(" ");
      }
      function Tt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function ur(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(Le) || [] : [];
      }
      a.fn.extend({
        addClass: function(e) {
          var t, r, u, o, l, h;
          return B(e) ? this.each(function(F) {
            a(this).addClass(e.call(this, F, Tt(this)));
          }) : (t = ur(e), t.length ? this.each(function() {
            if (u = Tt(this), r = this.nodeType === 1 && " " + _t(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                o = t[l], r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              h = _t(r), u !== h && this.setAttribute("class", h);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, r, u, o, l, h;
          return B(e) ? this.each(function(F) {
            a(this).removeClass(e.call(this, F, Tt(this)));
          }) : arguments.length ? (t = ur(e), t.length ? this.each(function() {
            if (u = Tt(this), r = this.nodeType === 1 && " " + _t(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                for (o = t[l]; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              h = _t(r), u !== h && this.setAttribute("class", h);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var r, u, o, l, h = typeof e, F = h === "string" || Array.isArray(e);
          return B(e) ? this.each(function(m) {
            a(this).toggleClass(
              e.call(this, m, Tt(this), t),
              t
            );
          }) : typeof t == "boolean" && F ? t ? this.addClass(e) : this.removeClass(e) : (r = ur(e), this.each(function() {
            if (F)
              for (l = a(this), o = 0; o < r.length; o++)
                u = r[o], l.hasClass(u) ? l.removeClass(u) : l.addClass(u);
            else
              (e === void 0 || h === "boolean") && (u = Tt(this), u && L.set(this, "__className__", u), this.setAttribute && this.setAttribute(
                "class",
                u || e === !1 ? "" : L.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, r, u = 0;
          for (t = " " + e + " "; r = this[u++]; )
            if (r.nodeType === 1 && (" " + _t(Tt(r)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var ts = /\r/g;
      a.fn.extend({
        val: function(e) {
          var t, r, u, o = this[0];
          return arguments.length ? (u = B(e), this.each(function(l) {
            var h;
            this.nodeType === 1 && (u ? h = e.call(this, l, a(this).val()) : h = e, h == null ? h = "" : typeof h == "number" ? h += "" : Array.isArray(h) && (h = a.map(h, function(F) {
              return F == null ? "" : F + "";
            })), t = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, h, "value") === void 0) && (this.value = h));
          })) : o ? (t = a.valHooks[o.type] || a.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (r = t.get(o, "value")) !== void 0 ? r : (r = o.value, typeof r == "string" ? r.replace(ts, "") : r ?? "")) : void 0;
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
              _t(a.text(e));
            }
          },
          select: {
            get: function(e) {
              var t, r, u, o = e.options, l = e.selectedIndex, h = e.type === "select-one", F = h ? null : [], m = h ? l + 1 : o.length;
              for (l < 0 ? u = m : u = h ? l : 0; u < m; u++)
                if (r = o[u], (r.selected || u === l) && // Don't return options that are disabled or in a disabled optgroup
                !r.disabled && (!r.parentNode.disabled || !ue(r.parentNode, "optgroup"))) {
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
        }, j.checkOn || (a.valHooks[this].get = function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        });
      });
      var Qt = n.location, Ai = { guid: Date.now() }, ar = /\?/;
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
      var Ni = /^(?:focusinfocus|focusoutblur)$/, Hi = function(e) {
        e.stopPropagation();
      };
      a.extend(a.event, {
        trigger: function(e, t, r, u) {
          var o, l, h, F, m, x, S, H, C = [r || W], I = Y.call(e, "type") ? e.type : e, J = Y.call(e, "namespace") ? e.namespace.split(".") : [];
          if (l = H = h = r = r || W, !(r.nodeType === 3 || r.nodeType === 8) && !Ni.test(I + a.event.triggered) && (I.indexOf(".") > -1 && (J = I.split("."), I = J.shift(), J.sort()), m = I.indexOf(":") < 0 && "on" + I, e = e[a.expando] ? e : new a.Event(I, typeof e == "object" && e), e.isTrigger = u ? 2 : 3, e.namespace = J.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = t == null ? [e] : a.makeArray(t, [e]), S = a.event.special[I] || {}, !(!u && S.trigger && S.trigger.apply(r, t) === !1))) {
            if (!u && !S.noBubble && !_e(r)) {
              for (F = S.delegateType || I, Ni.test(F + I) || (l = l.parentNode); l; l = l.parentNode)
                C.push(l), h = l;
              h === (r.ownerDocument || W) && C.push(h.defaultView || h.parentWindow || n);
            }
            for (o = 0; (l = C[o++]) && !e.isPropagationStopped(); )
              H = l, e.type = o > 1 ? F : S.bindType || I, x = (L.get(l, "events") || /* @__PURE__ */ Object.create(null))[e.type] && L.get(l, "handle"), x && x.apply(l, t), x = m && l[m], x && x.apply && ge(l) && (e.result = x.apply(l, t), e.result === !1 && e.preventDefault());
            return e.type = I, !u && !e.isDefaultPrevented() && (!S._default || S._default.apply(C.pop(), t) === !1) && ge(r) && m && B(r[I]) && !_e(r) && (h = r[m], h && (r[m] = null), a.event.triggered = I, e.isPropagationStopped() && H.addEventListener(I, Hi), r[I](), e.isPropagationStopped() && H.removeEventListener(I, Hi), a.event.triggered = void 0, h && (r[m] = h)), e.result;
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
      var ns = /\[\]$/, Oi = /\r?\n/g, rs = /^(?:submit|button|image|reset|file)$/i, is = /^(?:input|select|textarea|keygen)/i;
      function sr(e, t, r, u) {
        var o;
        if (Array.isArray(t))
          a.each(t, function(l, h) {
            r || ns.test(e) ? u(e, h) : sr(
              e + "[" + (typeof h == "object" && h != null ? l : "") + "]",
              h,
              r,
              u
            );
          });
        else if (!r && Te(t) === "object")
          for (o in t)
            sr(e + "[" + o + "]", t[o], r, u);
        else
          u(e, t);
      }
      a.param = function(e, t) {
        var r, u = [], o = function(l, h) {
          var F = B(h) ? h() : h;
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
            sr(r, e[r], t, o);
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
            return this.name && !a(this).is(":disabled") && is.test(this.nodeName) && !rs.test(e) && (this.checked || !zt.test(e));
          }).map(function(e, t) {
            var r = a(this).val();
            return r == null ? null : Array.isArray(r) ? a.map(r, function(u) {
              return { name: t.name, value: u.replace(Oi, `\r
`) };
            }) : { name: t.name, value: r.replace(Oi, `\r
`) };
          }).get();
        }
      });
      var us = /%20/g, as = /#.*$/, ss = /([?&])_=[^&]*/, os = /^(.*?):[ \t]*([^\r\n]*)$/mg, ls = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, cs = /^(?:GET|HEAD)$/, fs = /^\/\//, Mi = {}, or = {}, Ii = "*/".concat("*"), lr = W.createElement("a");
      lr.href = Qt.href;
      function Pi(e) {
        return function(t, r) {
          typeof t != "string" && (r = t, t = "*");
          var u, o = 0, l = t.toLowerCase().match(Le) || [];
          if (B(r))
            for (; u = l[o++]; )
              u[0] === "+" ? (u = u.slice(1) || "*", (e[u] = e[u] || []).unshift(r)) : (e[u] = e[u] || []).push(r);
        };
      }
      function $i(e, t, r, u) {
        var o = {}, l = e === or;
        function h(F) {
          var m;
          return o[F] = !0, a.each(e[F] || [], function(x, S) {
            var H = S(t, r, u);
            if (typeof H == "string" && !l && !o[H])
              return t.dataTypes.unshift(H), h(H), !1;
            if (l)
              return !(m = H);
          }), m;
        }
        return h(t.dataTypes[0]) || !o["*"] && h("*");
      }
      function cr(e, t) {
        var r, u, o = a.ajaxSettings.flatOptions || {};
        for (r in t)
          t[r] !== void 0 && ((o[r] ? e : u || (u = {}))[r] = t[r]);
        return u && a.extend(!0, e, u), e;
      }
      function hs(e, t, r) {
        for (var u, o, l, h, F = e.contents, m = e.dataTypes; m[0] === "*"; )
          m.shift(), u === void 0 && (u = e.mimeType || t.getResponseHeader("Content-Type"));
        if (u) {
          for (o in F)
            if (F[o] && F[o].test(u)) {
              m.unshift(o);
              break;
            }
        }
        if (m[0] in r)
          l = m[0];
        else {
          for (o in r) {
            if (!m[0] || e.converters[o + " " + m[0]]) {
              l = o;
              break;
            }
            h || (h = o);
          }
          l = l || h;
        }
        if (l)
          return l !== m[0] && m.unshift(l), r[l];
      }
      function ds(e, t, r, u) {
        var o, l, h, F, m, x = {}, S = e.dataTypes.slice();
        if (S[1])
          for (h in e.converters)
            x[h.toLowerCase()] = e.converters[h];
        for (l = S.shift(); l; )
          if (e.responseFields[l] && (r[e.responseFields[l]] = t), !m && u && e.dataFilter && (t = e.dataFilter(t, e.dataType)), m = l, l = S.shift(), l) {
            if (l === "*")
              l = m;
            else if (m !== "*" && m !== l) {
              if (h = x[m + " " + l] || x["* " + l], !h) {
                for (o in x)
                  if (F = o.split(" "), F[1] === l && (h = x[m + " " + F[0]] || x["* " + F[0]], h)) {
                    h === !0 ? h = x[o] : x[o] !== !0 && (l = F[0], S.unshift(F[1]));
                    break;
                  }
              }
              if (h !== !0)
                if (h && e.throws)
                  t = h(t);
                else
                  try {
                    t = h(t);
                  } catch (H) {
                    return {
                      state: "parsererror",
                      error: h ? H : "No conversion from " + m + " to " + l
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
          url: Qt.href,
          type: "GET",
          isLocal: ls.test(Qt.protocol),
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
            "*": Ii,
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
            cr(cr(e, a.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            cr(a.ajaxSettings, e)
          );
        },
        ajaxPrefilter: Pi(Mi),
        ajaxTransport: Pi(or),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var r, u, o, l, h, F, m, x, S, H, C = a.ajaxSetup({}, t), I = C.context || C, J = C.context && (I.nodeType || I.jquery) ? a(I) : a.event, ne = a.Deferred(), Q = a.Callbacks("once memory"), Fe = C.statusCode || {}, ve = {}, Qe = {}, Ye = "canceled", te = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(re) {
              var fe;
              if (m) {
                if (!l)
                  for (l = {}; fe = os.exec(o); )
                    l[fe[1].toLowerCase() + " "] = (l[fe[1].toLowerCase() + " "] || []).concat(fe[2]);
                fe = l[re.toLowerCase() + " "];
              }
              return fe == null ? null : fe.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return m ? o : null;
            },
            // Caches the header
            setRequestHeader: function(re, fe) {
              return m == null && (re = Qe[re.toLowerCase()] = Qe[re.toLowerCase()] || re, ve[re] = fe), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(re) {
              return m == null && (C.mimeType = re), this;
            },
            // Status-dependent callbacks
            statusCode: function(re) {
              var fe;
              if (re)
                if (m)
                  te.always(re[te.status]);
                else
                  for (fe in re)
                    Fe[fe] = [Fe[fe], re[fe]];
              return this;
            },
            // Cancel the request
            abort: function(re) {
              var fe = re || Ye;
              return r && r.abort(fe), Ct(0, fe), this;
            }
          };
          if (ne.promise(te), C.url = ((e || C.url || Qt.href) + "").replace(fs, Qt.protocol + "//"), C.type = t.method || t.type || C.method || C.type, C.dataTypes = (C.dataType || "*").toLowerCase().match(Le) || [""], C.crossDomain == null) {
            F = W.createElement("a");
            try {
              F.href = C.url, F.href = F.href, C.crossDomain = lr.protocol + "//" + lr.host != F.protocol + "//" + F.host;
            } catch {
              C.crossDomain = !0;
            }
          }
          if (C.data && C.processData && typeof C.data != "string" && (C.data = a.param(C.data, C.traditional)), $i(Mi, C, t, te), m)
            return te;
          x = a.event && C.global, x && a.active++ === 0 && a.event.trigger("ajaxStart"), C.type = C.type.toUpperCase(), C.hasContent = !cs.test(C.type), u = C.url.replace(as, ""), C.hasContent ? C.data && C.processData && (C.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (C.data = C.data.replace(us, "+")) : (H = C.url.slice(u.length), C.data && (C.processData || typeof C.data == "string") && (u += (ar.test(u) ? "&" : "?") + C.data, delete C.data), C.cache === !1 && (u = u.replace(ss, "$1"), H = (ar.test(u) ? "&" : "?") + "_=" + Ai.guid++ + H), C.url = u + H), C.ifModified && (a.lastModified[u] && te.setRequestHeader("If-Modified-Since", a.lastModified[u]), a.etag[u] && te.setRequestHeader("If-None-Match", a.etag[u])), (C.data && C.hasContent && C.contentType !== !1 || t.contentType) && te.setRequestHeader("Content-Type", C.contentType), te.setRequestHeader(
            "Accept",
            C.dataTypes[0] && C.accepts[C.dataTypes[0]] ? C.accepts[C.dataTypes[0]] + (C.dataTypes[0] !== "*" ? ", " + Ii + "; q=0.01" : "") : C.accepts["*"]
          );
          for (S in C.headers)
            te.setRequestHeader(S, C.headers[S]);
          if (C.beforeSend && (C.beforeSend.call(I, te, C) === !1 || m))
            return te.abort();
          if (Ye = "abort", Q.add(C.complete), te.done(C.success), te.fail(C.error), r = $i(or, C, t, te), !r)
            Ct(-1, "No Transport");
          else {
            if (te.readyState = 1, x && J.trigger("ajaxSend", [te, C]), m)
              return te;
            C.async && C.timeout > 0 && (h = n.setTimeout(function() {
              te.abort("timeout");
            }, C.timeout));
            try {
              m = !1, r.send(ve, Ct);
            } catch (re) {
              if (m)
                throw re;
              Ct(-1, re);
            }
          }
          function Ct(re, fe, Kt, hr) {
            var Ke, Zt, Ze, dt, pt, Re = fe;
            m || (m = !0, h && n.clearTimeout(h), r = void 0, o = hr || "", te.readyState = re > 0 ? 4 : 0, Ke = re >= 200 && re < 300 || re === 304, Kt && (dt = hs(C, te, Kt)), !Ke && a.inArray("script", C.dataTypes) > -1 && a.inArray("json", C.dataTypes) < 0 && (C.converters["text script"] = function() {
            }), dt = ds(C, dt, te, Ke), Ke ? (C.ifModified && (pt = te.getResponseHeader("Last-Modified"), pt && (a.lastModified[u] = pt), pt = te.getResponseHeader("etag"), pt && (a.etag[u] = pt)), re === 204 || C.type === "HEAD" ? Re = "nocontent" : re === 304 ? Re = "notmodified" : (Re = dt.state, Zt = dt.data, Ze = dt.error, Ke = !Ze)) : (Ze = Re, (re || !Re) && (Re = "error", re < 0 && (re = 0))), te.status = re, te.statusText = (fe || Re) + "", Ke ? ne.resolveWith(I, [Zt, Re, te]) : ne.rejectWith(I, [te, Re, Ze]), te.statusCode(Fe), Fe = void 0, x && J.trigger(
              Ke ? "ajaxSuccess" : "ajaxError",
              [te, C, Ke ? Zt : Ze]
            ), Q.fireWith(I, [te, Re]), x && (J.trigger("ajaxComplete", [te, C]), --a.active || a.event.trigger("ajaxStop")));
          }
          return te;
        },
        getJSON: function(e, t, r) {
          return a.get(e, t, r, "json");
        },
        getScript: function(e, t) {
          return a.get(e, void 0, t, "script");
        }
      }), a.each(["get", "post"], function(e, t) {
        a[t] = function(r, u, o, l) {
          return B(u) && (l = l || o, o = u, u = void 0), a.ajax(a.extend({
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
          return this[0] && (B(e) && (e = e.call(this[0])), t = a(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var r = this; r.firstElementChild; )
              r = r.firstElementChild;
            return r;
          }).append(this)), this;
        },
        wrapInner: function(e) {
          return B(e) ? this.each(function(t) {
            a(this).wrapInner(e.call(this, t));
          }) : this.each(function() {
            var t = a(this), r = t.contents();
            r.length ? r.wrapAll(e) : t.append(e);
          });
        },
        wrap: function(e) {
          var t = B(e);
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
      var ps = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, Yt = a.ajaxSettings.xhr();
      j.cors = !!Yt && "withCredentials" in Yt, j.ajax = Yt = !!Yt, a.ajaxTransport(function(e) {
        var t, r;
        if (j.cors || Yt && !e.crossDomain)
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
                    ps[h.status] || h.status,
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
      var Li = [], fr = /(=)\?(?=&|$)|\?\?/;
      a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Li.pop() || a.expando + "_" + Ai.guid++;
          return this[e] = !0, e;
        }
      }), a.ajaxPrefilter("json jsonp", function(e, t, r) {
        var u, o, l, h = e.jsonp !== !1 && (fr.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && fr.test(e.data) && "data");
        if (h || e.dataTypes[0] === "jsonp")
          return u = e.jsonpCallback = B(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, h ? e[h] = e[h].replace(fr, "$1" + u) : e.jsonp !== !1 && (e.url += (ar.test(e.url) ? "&" : "?") + e.jsonp + "=" + u), e.converters["script json"] = function() {
            return l || a.error(u + " was not called"), l[0];
          }, e.dataTypes[0] = "json", o = n[u], n[u] = function() {
            l = arguments;
          }, r.always(function() {
            o === void 0 ? a(n).removeProp(u) : n[u] = o, e[u] && (e.jsonpCallback = t.jsonpCallback, Li.push(u)), l && B(o) && o(l[0]), l = o = void 0;
          }), "script";
      }), j.createHTMLDocument = function() {
        var e = W.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), a.parseHTML = function(e, t, r) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (r = t, t = !1);
        var u, o, l;
        return t || (j.createHTMLDocument ? (t = W.implementation.createHTMLDocument(""), u = t.createElement("base"), u.href = W.location.href, t.head.appendChild(u)) : t = W), o = jt.exec(e), l = !r && [], o ? [t.createElement(o[1])] : (o = di([e], t, l), l && l.length && a(l).remove(), a.merge([], o.childNodes));
      }, a.fn.load = function(e, t, r) {
        var u, o, l, h = this, F = e.indexOf(" ");
        return F > -1 && (u = _t(e.slice(F)), e = e.slice(0, F)), B(t) ? (r = t, t = void 0) : t && typeof t == "object" && (o = "POST"), h.length > 0 && a.ajax({
          url: e,
          // If "type" variable is undefined, then "GET" method will be used.
          // Make value of this field explicit since
          // user can override it through ajaxSetup method
          type: o || "GET",
          dataType: "html",
          data: t
        }).done(function(m) {
          l = arguments, h.html(u ? (
            // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            a("<div>").append(a.parseHTML(m)).find(u)
          ) : (
            // Otherwise use the full result
            m
          ));
        }).always(r && function(m, x) {
          h.each(function() {
            r.apply(this, l || [m.responseText, x, m]);
          });
        }), this;
      }, a.expr.pseudos.animated = function(e) {
        return a.grep(a.timers, function(t) {
          return e === t.elem;
        }).length;
      }, a.offset = {
        setOffset: function(e, t, r) {
          var u, o, l, h, F, m, x, S = a.css(e, "position"), H = a(e), C = {};
          S === "static" && (e.style.position = "relative"), F = H.offset(), l = a.css(e, "top"), m = a.css(e, "left"), x = (S === "absolute" || S === "fixed") && (l + m).indexOf("auto") > -1, x ? (u = H.position(), h = u.top, o = u.left) : (h = parseFloat(l) || 0, o = parseFloat(m) || 0), B(t) && (t = t.call(e, r, a.extend({}, F))), t.top != null && (C.top = t.top - F.top + h), t.left != null && (C.left = t.left - F.left + o), "using" in t ? t.using.call(e, C) : H.css(C);
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
            return e || ut;
          });
        }
      }), a.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var r = t === "pageYOffset";
        a.fn[e] = function(u) {
          return A(this, function(o, l, h) {
            var F;
            if (_e(o) ? F = o : o.nodeType === 9 && (F = o.defaultView), h === void 0)
              return F ? F[t] : o[l];
            F ? F.scrollTo(
              r ? F.pageXOffset : h,
              r ? h : F.pageYOffset
            ) : o[l] = h;
          }, e, u, arguments.length);
        };
      }), a.each(["top", "left"], function(e, t) {
        a.cssHooks[t] = Fi(
          j.pixelPosition,
          function(r, u) {
            if (u)
              return u = Jt(r, t), er.test(u) ? a(r).position()[t] + "px" : u;
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
            return A(this, function(m, x, S) {
              var H;
              return _e(m) ? u.indexOf("outer") === 0 ? m["inner" + e] : m.document.documentElement["client" + e] : m.nodeType === 9 ? (H = m.documentElement, Math.max(
                m.body["scroll" + e],
                H["scroll" + e],
                m.body["offset" + e],
                H["offset" + e],
                H["client" + e]
              )) : S === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                a.css(m, x, F)
              ) : (
                // Set width or height on the element
                a.style(m, x, S, F)
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
      var gs = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      a.proxy = function(e, t) {
        var r, u, o;
        if (typeof t == "string" && (r = e[t], t = e, e = r), !!B(e))
          return u = g.call(arguments, 2), o = function() {
            return e.apply(t || this, u.concat(g.call(arguments)));
          }, o.guid = e.guid = e.guid || a.guid++, o;
      }, a.holdReady = function(e) {
        e ? a.readyWait++ : a.ready(!0);
      }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = ue, a.isFunction = B, a.isWindow = _e, a.camelCase = ie, a.type = Te, a.now = Date.now, a.isNumeric = function(e) {
        var t = a.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, a.trim = function(e) {
        return e == null ? "" : (e + "").replace(gs, "$1");
      };
      var vs = n.jQuery, ms = n.$;
      return a.noConflict = function(e) {
        return n.$ === a && (n.$ = ms), e && n.jQuery === a && (n.jQuery = vs), a;
      }, typeof c > "u" && (n.jQuery = n.$ = a), a;
    });
  }(Fr)), Fr.exports;
}
var Es = Zi();
const ot = /* @__PURE__ */ Ki(Es), { Model: Ss } = girder.models;
var Ds = Ss.extend({
  resourceName: "chameleon"
});
function As(i) {
  var n = "" + i, c = Ns.exec(n);
  if (!c)
    return i;
  var s, d, g, w = "";
  for (s = c.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        g = "&quot;";
        break;
      case 38:
        g = "&amp;";
        break;
      case 60:
        g = "&lt;";
        break;
      case 62:
        g = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (w += n.substring(d, s)), d = s + 1, w += g;
  }
  return d !== s ? w + n.substring(d, s) : w;
}
var Ns = /["&<>]/;
function eu(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void eu(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Hs(i) {
  var n = "", c, s, d;
  try {
    var g = i || {};
    (function(w) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-dialog">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-content">', d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<form class="modal-form" id="g-create-thumbnail-form" role="form">', d = 4, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-header">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="close" data-dismiss="modal" aria-hidden="true" type="button">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "&times;</button>", d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<h4 class="modal-title">', d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Convert with Chameleon</h4>", d = 7, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-dialog-subtitle">', d = 8, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-doc-inv"></i>', d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " ", d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + As((c = w.get("name")) == null ? "" : c) + "</div></div>", d = 10, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-body">', d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Select an endpoint</label>", d = 12, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<select class="form-control" id="g-endpoint-options" name="dropdown-options">', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option1">', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "RHEED</option>", d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option2">', d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "PPMS/MPMS</option>", d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option3">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Bruker Raw</option>", d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option4">', d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Non-4D STEM</option>", d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option5">', d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "HS2</option>", d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option6">', d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "JEOL SEM</option>", d = 19, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<option value="option7">', d = 19, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Bruker BRML</option></select>", d = 20, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 20, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Output Name</label>", d = 21, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<input class="form-control" id="g-output-name" type="text" placeholder="Enter output name here" name="text-input"/>', d = 22, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-validation-failed-message"></div></div>', d = 23, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-footer">', d = 24, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<a class="btn btn-small btn-default" data-dismiss="modal">', d = 24, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Close</a>", d = 25, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="g-submit-create-chameleon btn btn-small btn-primary" type="submit">', d = 26, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-picture"></i>', d = 27, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " Create</button></div></form></div></div>";
    }).call(this, "file" in g ? g.file : typeof file < "u" ? file : void 0);
  } catch (w) {
    eu(w, s, d);
  }
  return n;
}
function Os(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = _r(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function tu(i, n) {
  return Array.isArray(i) ? Ms(i, n) : i && typeof i == "object" ? Is(i) : i || "";
}
function Ms(i, n) {
  for (var c, s = "", d = "", g = Array.isArray(n), w = 0; w < i.length; w++)
    (c = tu(i[w])) && (g && n[w] && (c = _r(c)), s = s + d + c, d = " ");
  return s;
}
function Is(i) {
  var n = "", c = "";
  for (var s in i)
    s && i[s] && Ps.call(i, s) && (n = n + c + s, c = " ");
  return n;
}
function _r(i) {
  var n = "" + i, c = $s.exec(n);
  if (!c)
    return i;
  var s, d, g, w = "";
  for (s = c.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        g = "&quot;";
        break;
      case 38:
        g = "&amp;";
        break;
      case 60:
        g = "&lt;";
        break;
      case 62:
        g = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (w += n.substring(d, s)), d = s + 1, w += g;
  }
  return d !== s ? w + n.substring(d, s) : w;
}
var Ps = Object.prototype.hasOwnProperty, $s = /["&<>]/;
function nu(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void nu(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Ls(i) {
  var n = "", c, s, d;
  try {
    var g = i || {};
    (function(w, D) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + '<div class="g-target-result">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + "<i" + Os("class", tu([`icon-${w}`], [!0]), !1, !1) + "></i>", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + " ", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + _r((c = D) == null ? "" : c) + "</div>";
    }).call(this, "icon" in g ? g.icon : typeof icon < "u" ? icon : void 0, "text" in g ? g.text : typeof text < "u" ? text : void 0);
  } catch (w) {
    nu(w, s, d);
  }
  return n;
}
const { SearchFieldWidget: ks } = girder.views.widgets, { FileModel: Vi } = girder.models, { View: qs } = girder.views, { getCurrentToken: Rs } = girder.auth, vt = "http://localhost:5020", Us = "http://localhost:8080";
var Tr = qs.extend({
  initialize: function() {
  },
  events: {
    'change .g-thumbnail-attach-container input[type="radio"]': function() {
      this.$(".g-target-result-container").empty(), this.$(".g-thumbnail-attach-this-item").is(":checked") ? (this.attachToType = "item", this.attachToId = this.item.id, this.$(".g-thumbnail-custom-target-container").addClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!0)) : (this.attachToType = null, this.attachToId = null, this.$(".g-thumbnail-custom-target-container").removeClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!1));
    },
    "submit #g-create-thumbnail-form": function(i) {
      const n = this;
      i.preventDefault(), this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
      const c = new Ds({
        output_name: String(this.$("#g-output-name").val()) || "",
        target_endpoint: String(this.$("#g-endpoint-options").val()) || "",
        output_type: String(this.$("#g-output-types").val()) || "",
        secondFile: this.resultId,
        attachToId: this.attachToId,
        attachToType: this.attachToType,
        folderId: this.folderId,
        collectionId: this.collectionId
      }), s = c.get("target_endpoint") || "option1", d = document.querySelector(".g-dialog-subtitle"), g = d ? d.textContent.trim() : "", w = c.get("attachToId"), D = Us + `/api/v1/item/${w}/download`;
      let M = c.get("output_name") || "", $ = Rs() || window.localStorage.getItem("girderToken"), R, Y;
      switch (s) {
        case "option1":
          R = vt + "/rheedconverter", Y = ".png";
          break;
        case "option2":
          R = vt + "/ppmsmpms", Y = ".csv";
          break;
        case "option3":
          R = vt + "/brukerrawconverter", Y = ".csv";
          break;
        case "option4":
          R = vt + "/non4dstem_file", Y = ".png";
          break;
        case "option5":
          R = vt + "/hs2converter", Y = ".png";
          break;
        case "option6":
          R = vt + "/jeol_sem_converter", Y = ".png";
          break;
        case "option7":
          R = vt + "/brukerbrmlconverter", Y = ".txt";
          break;
        default:
          R = vt + "/default";
      }
      M == "" && (M = g.split(".")[0] + Y);
      let ze = {};
      if (s == "option4") {
        let pe = g.split(".")[1];
        pe = "." + pe, ze = { input_ext: pe };
      }
      ot.ajax({
        url: R,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": "nschakJJdEsIQUfADFerH6aGjyz706f114C3c8leXhM"
        },
        data: JSON.stringify({
          girderToken: $,
          input_url: D,
          output: M,
          output_type: "raw",
          output_dest: "caller",
          ...ze
        }),
        xhrFields: {
          responseType: "blob"
        },
        processData: !1
      }).done(function(pe, j, B) {
        const _e = B.getResponseHeader("Content-Type");
        if (_e.includes("application/json")) {
          const Me = new FileReader();
          Me.onload = function() {
            try {
              const Te = JSON.parse(Me.result);
              if (Te.file_data) {
                const ct = atob(Te.file_data), wt = new Array(ct.length);
                for (let tt = 0; tt < ct.length; tt++)
                  wt[tt] = ct.charCodeAt(tt);
                const a = new Uint8Array(wt), Ge = new Blob([a], { type: _e });
                let ue;
                var Se = new Vi();
                Se.uploadToItem(n.item, Ge, Te.file_name, ue), n.$el.modal("hide"), location.reload();
              } else
                console.log("JSON Response:", Te);
            } catch (Te) {
              console.error("Error parsing JSON response:", Te);
            }
          }, pe.text().then((Se) => Me.readAsText(new Blob([Se])));
        } else {
          const Me = new Blob([pe], { type: _e });
          let Se;
          var W = new Vi();
          W.uploadToItem(n.item, Me, M, Se), n.$el.modal("hide"), setTimeout(() => location.reload(), 500);
        }
      }).fail(function(pe, j, B) {
        console.error("AJAX Request Failed!"), console.error("Status:", j), console.error("Error:", B), console.error("Response Text:", pe.responseText), console.error("HTTP Status Code:", pe.status);
        let _e = `
                    <div class="alert alert-danger">
                        <strong>Error:</strong> ${B} <br>
                        <strong>Status:</strong> ${j} <br>
                        <strong>HTTP Code:</strong> ${pe.status} <br>
                        <strong>Response:</strong> ${pe.responseText || "No response from server"} <br>
                        <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                    </div>`;
        ot(".g-validation-failed-message").html(_e), ot(".g-submit-create-chameleon").girderEnable(!0);
      });
    }
  },
  initialize: function(i) {
    this.item = i.item, this.file = i.file, this.attachToType = "item", this.attachToId = this.item.id, this.folderId = this.item.get("folderId"), this.collectionId = this.item.get("baseParentId"), this.resultId = null, this.searchWidget = new ks({
      placeholder: "Start typing a name...",
      types: ["collection", "folder", "item", "user"],
      parentView: this
    }).on("g:resultClicked", function(n) {
      this.resultId = n.id;
    }, this);
  },
  render: function() {
    return console.log("Rendering CreateThumbnailView..."), this.$el.html(Hs({
      file: this.file,
      item: this.item
    })), console.log("Modal content set:", this.$el.html()), this.$el.girderModal(this).on("shown.bs.modal", () => {
      console.log("Modal shown event triggered"), this.$("#g-endpoint-options").focus();
    }), this.$el.modal("show"), this.searchWidget || (this.searchWidget = new SearchWidget()), this.searchWidget.setElement(this.$(".g-search-field-container")).render(), this;
  },
  pickTarget: function(i) {
    this.searchWidget.resetState(), this.attachToType = i.type, this.attachToId = i.id, this.$(".g-submit-create-chameleon").girderEnable(!0), this.$(".g-target-result-container").html(Ls({
      text: i.text,
      icon: i.icon
    }));
  }
}), ru = {}, Cr = "1.13.7", Gi = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, In = Array.prototype, Er = Object.prototype, Wi = typeof Symbol < "u" ? Symbol.prototype : null, Vs = In.push, ln = In.slice, nn = Er.toString, Gs = Er.hasOwnProperty, iu = typeof ArrayBuffer < "u", Ws = typeof DataView < "u", js = Array.isArray, ji = Object.keys, Bi = Object.create, zi = iu && ArrayBuffer.isView, Bs = isNaN, zs = isFinite, uu = !{ toString: null }.propertyIsEnumerable("toString"), Ji = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], Js = Math.pow(2, 53) - 1;
function Ee(i, n) {
  return n = n == null ? i.length - 1 : +n, function() {
    for (var c = Math.max(arguments.length - n, 0), s = Array(c), d = 0; d < c; d++)
      s[d] = arguments[d + n];
    switch (n) {
      case 0:
        return i.call(this, s);
      case 1:
        return i.call(this, arguments[0], s);
      case 2:
        return i.call(this, arguments[0], arguments[1], s);
    }
    var g = Array(n + 1);
    for (d = 0; d < n; d++)
      g[d] = arguments[d];
    return g[n] = s, i.apply(this, g);
  };
}
function yt(i) {
  var n = typeof i;
  return n === "function" || n === "object" && !!i;
}
function au(i) {
  return i === null;
}
function Sr(i) {
  return i === void 0;
}
function Dr(i) {
  return i === !0 || i === !1 || nn.call(i) === "[object Boolean]";
}
function su(i) {
  return !!(i && i.nodeType === 1);
}
function xe(i) {
  var n = "[object " + i + "]";
  return function(c) {
    return nn.call(c) === n;
  };
}
const Pn = xe("String"), Ar = xe("Number"), ou = xe("Date"), lu = xe("RegExp"), cu = xe("Error"), Nr = xe("Symbol"), Hr = xe("ArrayBuffer");
var fu = xe("Function"), Xs = Gi.document && Gi.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof Xs != "function" && (fu = function(i) {
  return typeof i == "function" || !1;
});
const we = fu, hu = xe("Object");
var du = Ws && (!/\[native code\]/.test(String(DataView)) || hu(new DataView(new ArrayBuffer(8)))), Or = typeof Map < "u" && hu(/* @__PURE__ */ new Map()), Qs = xe("DataView");
function Ys(i) {
  return i != null && we(i.getInt8) && Hr(i.buffer);
}
const rn = du ? Ys : Qs, Ft = js || xe("Array");
function bt(i, n) {
  return i != null && Gs.call(i, n);
}
var wr = xe("Arguments");
(function() {
  wr(arguments) || (wr = function(i) {
    return bt(i, "callee");
  });
})();
const $n = wr;
function pu(i) {
  return !Nr(i) && zs(i) && !isNaN(parseFloat(i));
}
function Mr(i) {
  return Ar(i) && Bs(i);
}
function Ir(i) {
  return function() {
    return i;
  };
}
function gu(i) {
  return function(n) {
    var c = i(n);
    return typeof c == "number" && c >= 0 && c <= Js;
  };
}
function vu(i) {
  return function(n) {
    return n == null ? void 0 : n[i];
  };
}
const Dn = vu("byteLength"), Ks = gu(Dn);
var Zs = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function eo(i) {
  return zi ? zi(i) && !rn(i) : Ks(i) && Zs.test(nn.call(i));
}
const Pr = iu ? eo : Ir(!1), He = vu("length");
function to(i) {
  for (var n = {}, c = i.length, s = 0; s < c; ++s)
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
function mu(i, n) {
  n = to(n);
  var c = Ji.length, s = i.constructor, d = we(s) && s.prototype || Er, g = "constructor";
  for (bt(i, g) && !n.contains(g) && n.push(g); c--; )
    g = Ji[c], g in i && i[g] !== d[g] && !n.contains(g) && n.push(g);
}
function me(i) {
  if (!yt(i))
    return [];
  if (ji)
    return ji(i);
  var n = [];
  for (var c in i)
    bt(i, c) && n.push(c);
  return uu && mu(i, n), n;
}
function yu(i) {
  if (i == null)
    return !0;
  var n = He(i);
  return typeof n == "number" && (Ft(i) || Pn(i) || $n(i)) ? n === 0 : He(me(i)) === 0;
}
function $r(i, n) {
  var c = me(n), s = c.length;
  if (i == null)
    return !s;
  for (var d = Object(i), g = 0; g < s; g++) {
    var w = c[g];
    if (n[w] !== d[w] || !(w in d))
      return !1;
  }
  return !0;
}
function se(i) {
  if (i instanceof se)
    return i;
  if (!(this instanceof se))
    return new se(i);
  this._wrapped = i;
}
se.VERSION = Cr;
se.prototype.value = function() {
  return this._wrapped;
};
se.prototype.valueOf = se.prototype.toJSON = se.prototype.value;
se.prototype.toString = function() {
  return String(this._wrapped);
};
function Xi(i) {
  return new Uint8Array(
    i.buffer || i,
    i.byteOffset || 0,
    Dn(i)
  );
}
var Qi = "[object DataView]";
function xr(i, n, c, s) {
  if (i === n)
    return i !== 0 || 1 / i === 1 / n;
  if (i == null || n == null)
    return !1;
  if (i !== i)
    return n !== n;
  var d = typeof i;
  return d !== "function" && d !== "object" && typeof n != "object" ? !1 : Fu(i, n, c, s);
}
function Fu(i, n, c, s) {
  i instanceof se && (i = i._wrapped), n instanceof se && (n = n._wrapped);
  var d = nn.call(i);
  if (d !== nn.call(n))
    return !1;
  if (du && d == "[object Object]" && rn(i)) {
    if (!rn(n))
      return !1;
    d = Qi;
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
      return Wi.valueOf.call(i) === Wi.valueOf.call(n);
    case "[object ArrayBuffer]":
    case Qi:
      return Fu(Xi(i), Xi(n), c, s);
  }
  var g = d === "[object Array]";
  if (!g && Pr(i)) {
    var w = Dn(i);
    if (w !== Dn(n))
      return !1;
    if (i.buffer === n.buffer && i.byteOffset === n.byteOffset)
      return !0;
    g = !0;
  }
  if (!g) {
    if (typeof i != "object" || typeof n != "object")
      return !1;
    var D = i.constructor, M = n.constructor;
    if (D !== M && !(we(D) && D instanceof D && we(M) && M instanceof M) && "constructor" in i && "constructor" in n)
      return !1;
  }
  c = c || [], s = s || [];
  for (var $ = c.length; $--; )
    if (c[$] === i)
      return s[$] === n;
  if (c.push(i), s.push(n), g) {
    if ($ = i.length, $ !== n.length)
      return !1;
    for (; $--; )
      if (!xr(i[$], n[$], c, s))
        return !1;
  } else {
    var R = me(i), Y;
    if ($ = R.length, me(n).length !== $)
      return !1;
    for (; $--; )
      if (Y = R[$], !(bt(n, Y) && xr(i[Y], n[Y], c, s)))
        return !1;
  }
  return c.pop(), s.pop(), !0;
}
function bu(i, n) {
  return xr(i, n);
}
function Gt(i) {
  if (!yt(i))
    return [];
  var n = [];
  for (var c in i)
    n.push(c);
  return uu && mu(i, n), n;
}
function Lr(i) {
  var n = He(i);
  return function(c) {
    if (c == null)
      return !1;
    var s = Gt(c);
    if (He(s))
      return !1;
    for (var d = 0; d < n; d++)
      if (!we(c[i[d]]))
        return !1;
    return i !== _u || !we(c[kr]);
  };
}
var kr = "forEach", wu = "has", qr = ["clear", "delete"], xu = ["get", wu, "set"], no = qr.concat(kr, xu), _u = qr.concat(xu), ro = ["add"].concat(qr, kr, wu);
const Tu = Or ? Lr(no) : xe("Map"), Cu = Or ? Lr(_u) : xe("WeakMap"), Eu = Or ? Lr(ro) : xe("Set"), Su = xe("WeakSet");
function At(i) {
  for (var n = me(i), c = n.length, s = Array(c), d = 0; d < c; d++)
    s[d] = i[n[d]];
  return s;
}
function Du(i) {
  for (var n = me(i), c = n.length, s = Array(c), d = 0; d < c; d++)
    s[d] = [n[d], i[n[d]]];
  return s;
}
function Rr(i) {
  for (var n = {}, c = me(i), s = 0, d = c.length; s < d; s++)
    n[i[c[s]]] = c[s];
  return n;
}
function un(i) {
  var n = [];
  for (var c in i)
    we(i[c]) && n.push(c);
  return n.sort();
}
function Ur(i, n) {
  return function(c) {
    var s = arguments.length;
    if (n && (c = Object(c)), s < 2 || c == null)
      return c;
    for (var d = 1; d < s; d++)
      for (var g = arguments[d], w = i(g), D = w.length, M = 0; M < D; M++) {
        var $ = w[M];
        (!n || c[$] === void 0) && (c[$] = g[$]);
      }
    return c;
  };
}
const Vr = Ur(Gt), Ut = Ur(me), Gr = Ur(Gt, !0);
function io() {
  return function() {
  };
}
function Au(i) {
  if (!yt(i))
    return {};
  if (Bi)
    return Bi(i);
  var n = io();
  n.prototype = i;
  var c = new n();
  return n.prototype = null, c;
}
function Nu(i, n) {
  var c = Au(i);
  return n && Ut(c, n), c;
}
function Hu(i) {
  return yt(i) ? Ft(i) ? i.slice() : Vr({}, i) : i;
}
function Ou(i, n) {
  return n(i), i;
}
function Wr(i) {
  return Ft(i) ? i : [i];
}
se.toPath = Wr;
function cn(i) {
  return se.toPath(i);
}
function jr(i, n) {
  for (var c = n.length, s = 0; s < c; s++) {
    if (i == null)
      return;
    i = i[n[s]];
  }
  return c ? i : void 0;
}
function Br(i, n, c) {
  var s = jr(i, cn(n));
  return Sr(s) ? c : s;
}
function Mu(i, n) {
  n = cn(n);
  for (var c = n.length, s = 0; s < c; s++) {
    var d = n[s];
    if (!bt(i, d))
      return !1;
    i = i[d];
  }
  return !!c;
}
function Ln(i) {
  return i;
}
function Dt(i) {
  return i = Ut({}, i), function(n) {
    return $r(n, i);
  };
}
function kn(i) {
  return i = cn(i), function(n) {
    return jr(n, i);
  };
}
function fn(i, n, c) {
  if (n === void 0)
    return i;
  switch (c ?? 3) {
    case 1:
      return function(s) {
        return i.call(n, s);
      };
    case 3:
      return function(s, d, g) {
        return i.call(n, s, d, g);
      };
    case 4:
      return function(s, d, g, w) {
        return i.call(n, s, d, g, w);
      };
  }
  return function() {
    return i.apply(n, arguments);
  };
}
function Iu(i, n, c) {
  return i == null ? Ln : we(i) ? fn(i, n, c) : yt(i) && !Ft(i) ? Dt(i) : kn(i);
}
function qn(i, n) {
  return Iu(i, n, 1 / 0);
}
se.iteratee = qn;
function Oe(i, n, c) {
  return se.iteratee !== qn ? se.iteratee(i, n) : Iu(i, n, c);
}
function Pu(i, n, c) {
  n = Oe(n, c);
  for (var s = me(i), d = s.length, g = {}, w = 0; w < d; w++) {
    var D = s[w];
    g[D] = n(i[D], D, i);
  }
  return g;
}
function zr() {
}
function $u(i) {
  return i == null ? zr : function(n) {
    return Br(i, n);
  };
}
function Lu(i, n, c) {
  var s = Array(Math.max(0, i));
  n = fn(n, c, 1);
  for (var d = 0; d < i; d++)
    s[d] = n(d);
  return s;
}
function An(i, n) {
  return n == null && (n = i, i = 0), i + Math.floor(Math.random() * (n - i + 1));
}
const Vt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function ku(i) {
  var n = function(g) {
    return i[g];
  }, c = "(?:" + me(i).join("|") + ")", s = RegExp(c), d = RegExp(c, "g");
  return function(g) {
    return g = g == null ? "" : "" + g, s.test(g) ? g.replace(d, n) : g;
  };
}
const qu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, Ru = ku(qu), uo = Rr(qu), Uu = ku(uo), Vu = se.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var br = /(.)^/, ao = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, so = /\\|'|\r|\n|\u2028|\u2029/g;
function oo(i) {
  return "\\" + ao[i];
}
var lo = /^\s*(\w|\$)+\s*$/;
function Gu(i, n, c) {
  !n && c && (n = c), n = Gr({}, n, se.templateSettings);
  var s = RegExp([
    (n.escape || br).source,
    (n.interpolate || br).source,
    (n.evaluate || br).source
  ].join("|") + "|$", "g"), d = 0, g = "__p+='";
  i.replace(s, function($, R, Y, ze, pe) {
    return g += i.slice(d, pe).replace(so, oo), d = pe + $.length, R ? g += `'+
((__t=(` + R + `))==null?'':_.escape(__t))+
'` : Y ? g += `'+
((__t=(` + Y + `))==null?'':__t)+
'` : ze && (g += `';
` + ze + `
__p+='`), $;
  }), g += `';
`;
  var w = n.variable;
  if (w) {
    if (!lo.test(w))
      throw new Error(
        "variable is not a bare identifier: " + w
      );
  } else
    g = `with(obj||{}){
` + g + `}
`, w = "obj";
  g = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + g + `return __p;
`;
  var D;
  try {
    D = new Function(w, "_", g);
  } catch ($) {
    throw $.source = g, $;
  }
  var M = function($) {
    return D.call(this, $, se);
  };
  return M.source = "function(" + w + `){
` + g + "}", M;
}
function Wu(i, n, c) {
  n = cn(n);
  var s = n.length;
  if (!s)
    return we(c) ? c.call(i) : c;
  for (var d = 0; d < s; d++) {
    var g = i == null ? void 0 : i[n[d]];
    g === void 0 && (g = c, d = s), i = we(g) ? g.call(i) : g;
  }
  return i;
}
var co = 0;
function ju(i) {
  var n = ++co + "";
  return i ? i + n : n;
}
function Bu(i) {
  var n = se(i);
  return n._chain = !0, n;
}
function zu(i, n, c, s, d) {
  if (!(s instanceof n))
    return i.apply(c, d);
  var g = Au(i.prototype), w = i.apply(g, d);
  return yt(w) ? w : g;
}
var Nt = Ee(function(i, n) {
  var c = Nt.placeholder, s = function() {
    for (var d = 0, g = n.length, w = Array(g), D = 0; D < g; D++)
      w[D] = n[D] === c ? arguments[d++] : n[D];
    for (; d < arguments.length; )
      w.push(arguments[d++]);
    return zu(i, s, this, this, w);
  };
  return s;
});
Nt.placeholder = se;
const Jr = Ee(function(i, n, c) {
  if (!we(i))
    throw new TypeError("Bind must be called on a function");
  var s = Ee(function(d) {
    return zu(i, s, n, this, c.concat(d));
  });
  return s;
}), Pe = gu(He);
function Ht(i, n, c, s) {
  if (s = s || [], !n && n !== 0)
    n = 1 / 0;
  else if (n <= 0)
    return s.concat(i);
  for (var d = s.length, g = 0, w = He(i); g < w; g++) {
    var D = i[g];
    if (Pe(D) && (Ft(D) || $n(D)))
      if (n > 1)
        Ht(D, n - 1, c, s), d = s.length;
      else
        for (var M = 0, $ = D.length; M < $; )
          s[d++] = D[M++];
    else
      c || (s[d++] = D);
  }
  return s;
}
const Ju = Ee(function(i, n) {
  n = Ht(n, !1, !1);
  var c = n.length;
  if (c < 1)
    throw new Error("bindAll must be passed function names");
  for (; c--; ) {
    var s = n[c];
    i[s] = Jr(i[s], i);
  }
  return i;
});
function Xu(i, n) {
  var c = function(s) {
    var d = c.cache, g = "" + (n ? n.apply(this, arguments) : s);
    return bt(d, g) || (d[g] = i.apply(this, arguments)), d[g];
  };
  return c.cache = {}, c;
}
const Xr = Ee(function(i, n, c) {
  return setTimeout(function() {
    return i.apply(null, c);
  }, n);
}), Qu = Nt(Xr, se, 1);
function Yu(i, n, c) {
  var s, d, g, w, D = 0;
  c || (c = {});
  var M = function() {
    D = c.leading === !1 ? 0 : Vt(), s = null, w = i.apply(d, g), s || (d = g = null);
  }, $ = function() {
    var R = Vt();
    !D && c.leading === !1 && (D = R);
    var Y = n - (R - D);
    return d = this, g = arguments, Y <= 0 || Y > n ? (s && (clearTimeout(s), s = null), D = R, w = i.apply(d, g), s || (d = g = null)) : !s && c.trailing !== !1 && (s = setTimeout(M, Y)), w;
  };
  return $.cancel = function() {
    clearTimeout(s), D = 0, s = d = g = null;
  }, $;
}
function Ku(i, n, c) {
  var s, d, g, w, D, M = function() {
    var R = Vt() - d;
    n > R ? s = setTimeout(M, n - R) : (s = null, c || (w = i.apply(D, g)), s || (g = D = null));
  }, $ = Ee(function(R) {
    return D = this, g = R, d = Vt(), s || (s = setTimeout(M, n), c && (w = i.apply(D, g))), w;
  });
  return $.cancel = function() {
    clearTimeout(s), s = g = D = null;
  }, $;
}
function Zu(i, n) {
  return Nt(n, i);
}
function Rn(i) {
  return function() {
    return !i.apply(this, arguments);
  };
}
function ea() {
  var i = arguments, n = i.length - 1;
  return function() {
    for (var c = n, s = i[n].apply(this, arguments); c--; )
      s = i[c].call(this, s);
    return s;
  };
}
function ta(i, n) {
  return function() {
    if (--i < 1)
      return n.apply(this, arguments);
  };
}
function Qr(i, n) {
  var c;
  return function() {
    return --i > 0 && (c = n.apply(this, arguments)), i <= 1 && (n = null), c;
  };
}
const na = Nt(Qr, 2);
function Yr(i, n, c) {
  n = Oe(n, c);
  for (var s = me(i), d, g = 0, w = s.length; g < w; g++)
    if (d = s[g], n(i[d], d, i))
      return d;
}
function ra(i) {
  return function(n, c, s) {
    c = Oe(c, s);
    for (var d = He(n), g = i > 0 ? 0 : d - 1; g >= 0 && g < d; g += i)
      if (c(n[g], g, n))
        return g;
    return -1;
  };
}
const Un = ra(1), Kr = ra(-1);
function Zr(i, n, c, s) {
  c = Oe(c, s, 1);
  for (var d = c(n), g = 0, w = He(i); g < w; ) {
    var D = Math.floor((g + w) / 2);
    c(i[D]) < d ? g = D + 1 : w = D;
  }
  return g;
}
function ia(i, n, c) {
  return function(s, d, g) {
    var w = 0, D = He(s);
    if (typeof g == "number")
      i > 0 ? w = g >= 0 ? g : Math.max(g + D, w) : D = g >= 0 ? Math.min(g + 1, D) : g + D + 1;
    else if (c && g && D)
      return g = c(s, d), s[g] === d ? g : -1;
    if (d !== d)
      return g = n(ln.call(s, w, D), Mr), g >= 0 ? g + w : -1;
    for (g = i > 0 ? w : D - 1; g >= 0 && g < D; g += i)
      if (s[g] === d)
        return g;
    return -1;
  };
}
const ei = ia(1, Un, Zr), ua = ia(-1, Kr);
function an(i, n, c) {
  var s = Pe(i) ? Un : Yr, d = s(i, n, c);
  if (d !== void 0 && d !== -1)
    return i[d];
}
function aa(i, n) {
  return an(i, Dt(n));
}
function Be(i, n, c) {
  n = fn(n, c);
  var s, d;
  if (Pe(i))
    for (s = 0, d = i.length; s < d; s++)
      n(i[s], s, i);
  else {
    var g = me(i);
    for (s = 0, d = g.length; s < d; s++)
      n(i[g[s]], g[s], i);
  }
  return i;
}
function lt(i, n, c) {
  n = Oe(n, c);
  for (var s = !Pe(i) && me(i), d = (s || i).length, g = Array(d), w = 0; w < d; w++) {
    var D = s ? s[w] : w;
    g[w] = n(i[D], D, i);
  }
  return g;
}
function sa(i) {
  var n = function(c, s, d, g) {
    var w = !Pe(c) && me(c), D = (w || c).length, M = i > 0 ? 0 : D - 1;
    for (g || (d = c[w ? w[M] : M], M += i); M >= 0 && M < D; M += i) {
      var $ = w ? w[M] : M;
      d = s(d, c[$], $, c);
    }
    return d;
  };
  return function(c, s, d, g) {
    var w = arguments.length >= 3;
    return n(c, fn(s, g, 4), d, w);
  };
}
const qt = sa(1), Nn = sa(-1);
function mt(i, n, c) {
  var s = [];
  return n = Oe(n, c), Be(i, function(d, g, w) {
    n(d, g, w) && s.push(d);
  }), s;
}
function oa(i, n, c) {
  return mt(i, Rn(Oe(n)), c);
}
function Hn(i, n, c) {
  n = Oe(n, c);
  for (var s = !Pe(i) && me(i), d = (s || i).length, g = 0; g < d; g++) {
    var w = s ? s[g] : g;
    if (!n(i[w], w, i))
      return !1;
  }
  return !0;
}
function On(i, n, c) {
  n = Oe(n, c);
  for (var s = !Pe(i) && me(i), d = (s || i).length, g = 0; g < d; g++) {
    var w = s ? s[g] : g;
    if (n(i[w], w, i))
      return !0;
  }
  return !1;
}
function Ve(i, n, c, s) {
  return Pe(i) || (i = At(i)), (typeof c != "number" || s) && (c = 0), ei(i, n, c) >= 0;
}
const la = Ee(function(i, n, c) {
  var s, d;
  return we(n) ? d = n : (n = cn(n), s = n.slice(0, -1), n = n[n.length - 1]), lt(i, function(g) {
    var w = d;
    if (!w) {
      if (s && s.length && (g = jr(g, s)), g == null)
        return;
      w = g[n];
    }
    return w == null ? w : w.apply(g, c);
  });
});
function Vn(i, n) {
  return lt(i, kn(n));
}
function ca(i, n) {
  return mt(i, Dt(n));
}
function ti(i, n, c) {
  var s = -1 / 0, d = -1 / 0, g, w;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Pe(i) ? i : At(i);
    for (var D = 0, M = i.length; D < M; D++)
      g = i[D], g != null && g > s && (s = g);
  } else
    n = Oe(n, c), Be(i, function($, R, Y) {
      w = n($, R, Y), (w > d || w === -1 / 0 && s === -1 / 0) && (s = $, d = w);
    });
  return s;
}
function fa(i, n, c) {
  var s = 1 / 0, d = 1 / 0, g, w;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Pe(i) ? i : At(i);
    for (var D = 0, M = i.length; D < M; D++)
      g = i[D], g != null && g < s && (s = g);
  } else
    n = Oe(n, c), Be(i, function($, R, Y) {
      w = n($, R, Y), (w < d || w === 1 / 0 && s === 1 / 0) && (s = $, d = w);
    });
  return s;
}
var fo = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function ni(i) {
  return i ? Ft(i) ? ln.call(i) : Pn(i) ? i.match(fo) : Pe(i) ? lt(i, Ln) : At(i) : [];
}
function ri(i, n, c) {
  if (n == null || c)
    return Pe(i) || (i = At(i)), i[An(i.length - 1)];
  var s = ni(i), d = He(s);
  n = Math.max(Math.min(n, d), 0);
  for (var g = d - 1, w = 0; w < n; w++) {
    var D = An(w, g), M = s[w];
    s[w] = s[D], s[D] = M;
  }
  return s.slice(0, n);
}
function ha(i) {
  return ri(i, 1 / 0);
}
function da(i, n, c) {
  var s = 0;
  return n = Oe(n, c), Vn(lt(i, function(d, g, w) {
    return {
      value: d,
      index: s++,
      criteria: n(d, g, w)
    };
  }).sort(function(d, g) {
    var w = d.criteria, D = g.criteria;
    if (w !== D) {
      if (w > D || w === void 0)
        return 1;
      if (w < D || D === void 0)
        return -1;
    }
    return d.index - g.index;
  }), "value");
}
function Gn(i, n) {
  return function(c, s, d) {
    var g = n ? [[], []] : {};
    return s = Oe(s, d), Be(c, function(w, D) {
      var M = s(w, D, c);
      i(g, w, M);
    }), g;
  };
}
const pa = Gn(function(i, n, c) {
  bt(i, c) ? i[c].push(n) : i[c] = [n];
}), ga = Gn(function(i, n, c) {
  i[c] = n;
}), va = Gn(function(i, n, c) {
  bt(i, c) ? i[c]++ : i[c] = 1;
}), ma = Gn(function(i, n, c) {
  i[c ? 0 : 1].push(n);
}, !0);
function ya(i) {
  return i == null ? 0 : Pe(i) ? i.length : me(i).length;
}
function ho(i, n, c) {
  return n in c;
}
const ii = Ee(function(i, n) {
  var c = {}, s = n[0];
  if (i == null)
    return c;
  we(s) ? (n.length > 1 && (s = fn(s, n[1])), n = Gt(i)) : (s = ho, n = Ht(n, !1, !1), i = Object(i));
  for (var d = 0, g = n.length; d < g; d++) {
    var w = n[d], D = i[w];
    s(D, w, i) && (c[w] = D);
  }
  return c;
}), Fa = Ee(function(i, n) {
  var c = n[0], s;
  return we(c) ? (c = Rn(c), n.length > 1 && (s = n[1])) : (n = lt(Ht(n, !1, !1), String), c = function(d, g) {
    return !Ve(n, g);
  }), ii(i, c, s);
});
function ui(i, n, c) {
  return ln.call(i, 0, Math.max(0, i.length - (n == null || c ? 1 : n)));
}
function Rt(i, n, c) {
  return i == null || i.length < 1 ? n == null || c ? void 0 : [] : n == null || c ? i[0] : ui(i, i.length - n);
}
function St(i, n, c) {
  return ln.call(i, n == null || c ? 1 : n);
}
function ba(i, n, c) {
  return i == null || i.length < 1 ? n == null || c ? void 0 : [] : n == null || c ? i[i.length - 1] : St(i, Math.max(0, i.length - n));
}
function wa(i) {
  return mt(i, Boolean);
}
function xa(i, n) {
  return Ht(i, n, !1);
}
const ai = Ee(function(i, n) {
  return n = Ht(n, !0, !0), mt(i, function(c) {
    return !Ve(n, c);
  });
}), _a = Ee(function(i, n) {
  return ai(i, n);
});
function sn(i, n, c, s) {
  Dr(n) || (s = c, c = n, n = !1), c != null && (c = Oe(c, s));
  for (var d = [], g = [], w = 0, D = He(i); w < D; w++) {
    var M = i[w], $ = c ? c(M, w, i) : M;
    n && !c ? ((!w || g !== $) && d.push(M), g = $) : c ? Ve(g, $) || (g.push($), d.push(M)) : Ve(d, M) || d.push(M);
  }
  return d;
}
const Ta = Ee(function(i) {
  return sn(Ht(i, !0, !0));
});
function Ca(i) {
  for (var n = [], c = arguments.length, s = 0, d = He(i); s < d; s++) {
    var g = i[s];
    if (!Ve(n, g)) {
      var w;
      for (w = 1; w < c && Ve(arguments[w], g); w++)
        ;
      w === c && n.push(g);
    }
  }
  return n;
}
function on(i) {
  for (var n = i && ti(i, He).length || 0, c = Array(n), s = 0; s < n; s++)
    c[s] = Vn(i, s);
  return c;
}
const Ea = Ee(on);
function Sa(i, n) {
  for (var c = {}, s = 0, d = He(i); s < d; s++)
    n ? c[i[s]] = n[s] : c[i[s][0]] = i[s][1];
  return c;
}
function Da(i, n, c) {
  n == null && (n = i || 0, i = 0), c || (c = n < i ? -1 : 1);
  for (var s = Math.max(Math.ceil((n - i) / c), 0), d = Array(s), g = 0; g < s; g++, i += c)
    d[g] = i;
  return d;
}
function Aa(i, n) {
  if (n == null || n < 1)
    return [];
  for (var c = [], s = 0, d = i.length; s < d; )
    c.push(ln.call(i, s, s += n));
  return c;
}
function si(i, n) {
  return i._chain ? se(n).chain() : n;
}
function oi(i) {
  return Be(un(i), function(n) {
    var c = se[n] = i[n];
    se.prototype[n] = function() {
      var s = [this._wrapped];
      return Vs.apply(s, arguments), si(this, c.apply(se, s));
    };
  }), se;
}
Be(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(i) {
  var n = In[i];
  se.prototype[i] = function() {
    var c = this._wrapped;
    return c != null && (n.apply(c, arguments), (i === "shift" || i === "splice") && c.length === 0 && delete c[0]), si(this, c);
  };
});
Be(["concat", "join", "slice"], function(i) {
  var n = In[i];
  se.prototype[i] = function() {
    var c = this._wrapped;
    return c != null && (c = n.apply(c, arguments)), si(this, c);
  };
});
const po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Cr,
  after: ta,
  all: Hn,
  allKeys: Gt,
  any: On,
  assign: Ut,
  before: Qr,
  bind: Jr,
  bindAll: Ju,
  chain: Bu,
  chunk: Aa,
  clone: Hu,
  collect: lt,
  compact: wa,
  compose: ea,
  constant: Ir,
  contains: Ve,
  countBy: va,
  create: Nu,
  debounce: Ku,
  default: se,
  defaults: Gr,
  defer: Qu,
  delay: Xr,
  detect: an,
  difference: ai,
  drop: St,
  each: Be,
  escape: Ru,
  every: Hn,
  extend: Vr,
  extendOwn: Ut,
  filter: mt,
  find: an,
  findIndex: Un,
  findKey: Yr,
  findLastIndex: Kr,
  findWhere: aa,
  first: Rt,
  flatten: xa,
  foldl: qt,
  foldr: Nn,
  forEach: Be,
  functions: un,
  get: Br,
  groupBy: pa,
  has: Mu,
  head: Rt,
  identity: Ln,
  include: Ve,
  includes: Ve,
  indexBy: ga,
  indexOf: ei,
  initial: ui,
  inject: qt,
  intersection: Ca,
  invert: Rr,
  invoke: la,
  isArguments: $n,
  isArray: Ft,
  isArrayBuffer: Hr,
  isBoolean: Dr,
  isDataView: rn,
  isDate: ou,
  isElement: su,
  isEmpty: yu,
  isEqual: bu,
  isError: cu,
  isFinite: pu,
  isFunction: we,
  isMap: Tu,
  isMatch: $r,
  isNaN: Mr,
  isNull: au,
  isNumber: Ar,
  isObject: yt,
  isRegExp: lu,
  isSet: Eu,
  isString: Pn,
  isSymbol: Nr,
  isTypedArray: Pr,
  isUndefined: Sr,
  isWeakMap: Cu,
  isWeakSet: Su,
  iteratee: qn,
  keys: me,
  last: ba,
  lastIndexOf: ua,
  map: lt,
  mapObject: Pu,
  matcher: Dt,
  matches: Dt,
  max: ti,
  memoize: Xu,
  methods: un,
  min: fa,
  mixin: oi,
  negate: Rn,
  noop: zr,
  now: Vt,
  object: Sa,
  omit: Fa,
  once: na,
  pairs: Du,
  partial: Nt,
  partition: ma,
  pick: ii,
  pluck: Vn,
  property: kn,
  propertyOf: $u,
  random: An,
  range: Da,
  reduce: qt,
  reduceRight: Nn,
  reject: oa,
  rest: St,
  restArguments: Ee,
  result: Wu,
  sample: ri,
  select: mt,
  shuffle: ha,
  size: ya,
  some: On,
  sortBy: da,
  sortedIndex: Zr,
  tail: St,
  take: Rt,
  tap: Ou,
  template: Gu,
  templateSettings: Vu,
  throttle: Yu,
  times: Lu,
  toArray: ni,
  toPath: Wr,
  transpose: on,
  unescape: Uu,
  union: Ta,
  uniq: sn,
  unique: sn,
  uniqueId: ju,
  unzip: on,
  values: At,
  where: ca,
  without: _a,
  wrap: Zu,
  zip: Ea
}, Symbol.toStringTag, { value: "Module" }));
var Mn = oi(po);
Mn._ = Mn;
const go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Cr,
  after: ta,
  all: Hn,
  allKeys: Gt,
  any: On,
  assign: Ut,
  before: Qr,
  bind: Jr,
  bindAll: Ju,
  chain: Bu,
  chunk: Aa,
  clone: Hu,
  collect: lt,
  compact: wa,
  compose: ea,
  constant: Ir,
  contains: Ve,
  countBy: va,
  create: Nu,
  debounce: Ku,
  default: Mn,
  defaults: Gr,
  defer: Qu,
  delay: Xr,
  detect: an,
  difference: ai,
  drop: St,
  each: Be,
  escape: Ru,
  every: Hn,
  extend: Vr,
  extendOwn: Ut,
  filter: mt,
  find: an,
  findIndex: Un,
  findKey: Yr,
  findLastIndex: Kr,
  findWhere: aa,
  first: Rt,
  flatten: xa,
  foldl: qt,
  foldr: Nn,
  forEach: Be,
  functions: un,
  get: Br,
  groupBy: pa,
  has: Mu,
  head: Rt,
  identity: Ln,
  include: Ve,
  includes: Ve,
  indexBy: ga,
  indexOf: ei,
  initial: ui,
  inject: qt,
  intersection: Ca,
  invert: Rr,
  invoke: la,
  isArguments: $n,
  isArray: Ft,
  isArrayBuffer: Hr,
  isBoolean: Dr,
  isDataView: rn,
  isDate: ou,
  isElement: su,
  isEmpty: yu,
  isEqual: bu,
  isError: cu,
  isFinite: pu,
  isFunction: we,
  isMap: Tu,
  isMatch: $r,
  isNaN: Mr,
  isNull: au,
  isNumber: Ar,
  isObject: yt,
  isRegExp: lu,
  isSet: Eu,
  isString: Pn,
  isSymbol: Nr,
  isTypedArray: Pr,
  isUndefined: Sr,
  isWeakMap: Cu,
  isWeakSet: Su,
  iteratee: qn,
  keys: me,
  last: ba,
  lastIndexOf: ua,
  map: lt,
  mapObject: Pu,
  matcher: Dt,
  matches: Dt,
  max: ti,
  memoize: Xu,
  methods: un,
  min: fa,
  mixin: oi,
  negate: Rn,
  noop: zr,
  now: Vt,
  object: Sa,
  omit: Fa,
  once: na,
  pairs: Du,
  partial: Nt,
  partition: ma,
  pick: ii,
  pluck: Vn,
  property: kn,
  propertyOf: $u,
  random: An,
  range: Da,
  reduce: qt,
  reduceRight: Nn,
  reject: oa,
  rest: St,
  restArguments: Ee,
  result: Wu,
  sample: ri,
  select: mt,
  shuffle: ha,
  size: ya,
  some: On,
  sortBy: da,
  sortedIndex: Zr,
  tail: St,
  take: Rt,
  tap: Ou,
  template: Gu,
  templateSettings: Vu,
  throttle: Yu,
  times: Lu,
  toArray: ni,
  toPath: Wr,
  transpose: on,
  unescape: Uu,
  union: Ta,
  uniq: sn,
  unique: sn,
  uniqueId: ju,
  unzip: on,
  values: At,
  where: ca,
  without: _a,
  wrap: Zu,
  zip: Ea
}, Symbol.toStringTag, { value: "Module" })), vo = /* @__PURE__ */ Cs(go);
(function(i) {
  (function(n) {
    var c = typeof self == "object" && self.self === self && self || typeof tn == "object" && tn.global === tn && tn;
    {
      var s = vo, d;
      try {
        d = Zi();
      } catch {
      }
      n(c, i, s, d);
    }
  })(function(n, c, s, d) {
    var g = n.Backbone, w = Array.prototype.slice;
    c.VERSION = "1.6.0", c.$ = d, c.noConflict = function() {
      return n.Backbone = g, this;
    }, c.emulateHTTP = !1, c.emulateJSON = !1;
    var D = c.Events = {}, M = /\s+/, $, R = function(f, p, y, _, A) {
      var O = 0, U;
      if (y && typeof y == "object")
        for (_ !== void 0 && ("context" in A) && A.context === void 0 && (A.context = _), U = s.keys(y); O < U.length; O++)
          p = R(f, p, U[O], y[U[O]], A);
      else if (y && M.test(y))
        for (U = y.split(M); O < U.length; O++)
          p = f(p, U[O], _, A);
      else
        p = f(p, y, _, A);
      return p;
    };
    D.on = function(f, p, y) {
      if (this._events = R(Y, this._events || {}, f, p, {
        context: y,
        ctx: this,
        listening: $
      }), $) {
        var _ = this._listeners || (this._listeners = {});
        _[$.id] = $, $.interop = !1;
      }
      return this;
    }, D.listenTo = function(f, p, y) {
      if (!f)
        return this;
      var _ = f._listenId || (f._listenId = s.uniqueId("l")), A = this._listeningTo || (this._listeningTo = {}), O = $ = A[_];
      O || (this._listenId || (this._listenId = s.uniqueId("l")), O = $ = A[_] = new W(this, f));
      var U = ze(f, p, y, this);
      if ($ = void 0, U)
        throw U;
      return O.interop && O.on(p, y), this;
    };
    var Y = function(f, p, y, _) {
      if (y) {
        var A = f[p] || (f[p] = []), O = _.context, U = _.ctx, ee = _.listening;
        ee && ee.count++, A.push({ callback: y, context: O, ctx: O || U, listening: ee });
      }
      return f;
    }, ze = function(f, p, y, _) {
      try {
        f.on(p, y, _);
      } catch (A) {
        return A;
      }
    };
    D.off = function(f, p, y) {
      return this._events ? (this._events = R(pe, this._events, f, p, {
        context: y,
        listeners: this._listeners
      }), this) : this;
    }, D.stopListening = function(f, p, y) {
      var _ = this._listeningTo;
      if (!_)
        return this;
      for (var A = f ? [f._listenId] : s.keys(_), O = 0; O < A.length; O++) {
        var U = _[A[O]];
        if (!U)
          break;
        U.obj.off(p, y, this), U.interop && U.off(p, y);
      }
      return s.isEmpty(_) && (this._listeningTo = void 0), this;
    };
    var pe = function(f, p, y, _) {
      if (f) {
        var A = _.context, O = _.listeners, U = 0, ee;
        if (!p && !A && !y) {
          for (ee = s.keys(O); U < ee.length; U++)
            O[ee[U]].cleanup();
          return;
        }
        for (ee = p ? [p] : s.keys(f); U < ee.length; U++) {
          p = ee[U];
          var ie = f[p];
          if (!ie)
            break;
          for (var ge = [], he = 0; he < ie.length; he++) {
            var L = ie[he];
            if (y && y !== L.callback && y !== L.callback._callback || A && A !== L.context)
              ge.push(L);
            else {
              var ce = L.listening;
              ce && ce.off(p, y);
            }
          }
          ge.length ? f[p] = ge : delete f[p];
        }
        return f;
      }
    };
    D.once = function(f, p, y) {
      var _ = R(j, {}, f, p, this.off.bind(this));
      return typeof f == "string" && y == null && (p = void 0), this.on(_, p, y);
    }, D.listenToOnce = function(f, p, y) {
      var _ = R(j, {}, p, y, this.stopListening.bind(this, f));
      return this.listenTo(f, _);
    };
    var j = function(f, p, y, _) {
      if (y) {
        var A = f[p] = s.once(function() {
          _(p, A), y.apply(this, arguments);
        });
        A._callback = y;
      }
      return f;
    };
    D.trigger = function(f) {
      if (!this._events)
        return this;
      for (var p = Math.max(0, arguments.length - 1), y = Array(p), _ = 0; _ < p; _++)
        y[_] = arguments[_ + 1];
      return R(B, this._events, f, void 0, y), this;
    };
    var B = function(f, p, y, _) {
      if (f) {
        var A = f[p], O = f.all;
        A && O && (O = O.slice()), A && _e(A, _), O && _e(O, [p].concat(_));
      }
      return f;
    }, _e = function(f, p) {
      var y, _ = -1, A = f.length, O = p[0], U = p[1], ee = p[2];
      switch (p.length) {
        case 0:
          for (; ++_ < A; )
            (y = f[_]).callback.call(y.ctx);
          return;
        case 1:
          for (; ++_ < A; )
            (y = f[_]).callback.call(y.ctx, O);
          return;
        case 2:
          for (; ++_ < A; )
            (y = f[_]).callback.call(y.ctx, O, U);
          return;
        case 3:
          for (; ++_ < A; )
            (y = f[_]).callback.call(y.ctx, O, U, ee);
          return;
        default:
          for (; ++_ < A; )
            (y = f[_]).callback.apply(y.ctx, p);
          return;
      }
    }, W = function(f, p) {
      this.id = f._listenId, this.listener = f, this.obj = p, this.interop = !0, this.count = 0, this._events = void 0;
    };
    W.prototype.on = D.on, W.prototype.off = function(f, p) {
      var y;
      this.interop ? (this._events = R(pe, this._events, f, p, {
        context: void 0,
        listeners: void 0
      }), y = !this._events) : (this.count--, y = this.count === 0), y && this.cleanup();
    }, W.prototype.cleanup = function() {
      delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
    }, D.bind = D.on, D.unbind = D.off, s.extend(c, D);
    var Me = c.Model = function(f, p) {
      var y = f || {};
      p || (p = {}), this.preinitialize.apply(this, arguments), this.cid = s.uniqueId(this.cidPrefix), this.attributes = {}, p.collection && (this.collection = p.collection), p.parse && (y = this.parse(y, p) || {});
      var _ = s.result(this, "defaults");
      y = s.defaults(s.extend({}, _, y), _), this.set(y, p), this.changed = {}, this.initialize.apply(this, arguments);
    };
    s.extend(Me.prototype, D, {
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
      toJSON: function(f) {
        return s.clone(this.attributes);
      },
      // Proxy `Backbone.sync` by default -- but override this if you need
      // custom syncing semantics for *this* particular model.
      sync: function() {
        return c.sync.apply(this, arguments);
      },
      // Get the value of an attribute.
      get: function(f) {
        return this.attributes[f];
      },
      // Get the HTML-escaped value of an attribute.
      escape: function(f) {
        return s.escape(this.get(f));
      },
      // Returns `true` if the attribute contains a value that is not null
      // or undefined.
      has: function(f) {
        return this.get(f) != null;
      },
      // Special-cased proxy to underscore's `_.matches` method.
      matches: function(f) {
        return !!s.iteratee(f, this)(this.attributes);
      },
      // Set a hash of model attributes on the object, firing `"change"`. This is
      // the core primitive operation of a model, updating the data and notifying
      // anyone who needs to know about the change in state. The heart of the beast.
      set: function(f, p, y) {
        if (f == null)
          return this;
        var _;
        if (typeof f == "object" ? (_ = f, y = p) : (_ = {})[f] = p, y || (y = {}), !this._validate(_, y))
          return !1;
        var A = y.unset, O = y.silent, U = [], ee = this._changing;
        this._changing = !0, ee || (this._previousAttributes = s.clone(this.attributes), this.changed = {});
        var ie = this.attributes, ge = this.changed, he = this._previousAttributes;
        for (var L in _)
          p = _[L], s.isEqual(ie[L], p) || U.push(L), s.isEqual(he[L], p) ? delete ge[L] : ge[L] = p, A ? delete ie[L] : ie[L] = p;
        if (this.idAttribute in _) {
          var ce = this.id;
          this.id = this.get(this.idAttribute), this.trigger("changeId", this, ce, y);
        }
        if (!O) {
          U.length && (this._pending = y);
          for (var Xe = 0; Xe < U.length; Xe++)
            this.trigger("change:" + U[Xe], this, ie[U[Xe]], y);
        }
        if (ee)
          return this;
        if (!O)
          for (; this._pending; )
            y = this._pending, this._pending = !1, this.trigger("change", this, y);
        return this._pending = !1, this._changing = !1, this;
      },
      // Remove an attribute from the model, firing `"change"`. `unset` is a noop
      // if the attribute doesn't exist.
      unset: function(f, p) {
        return this.set(f, void 0, s.extend({}, p, { unset: !0 }));
      },
      // Clear all attributes on the model, firing `"change"`.
      clear: function(f) {
        var p = {};
        for (var y in this.attributes)
          p[y] = void 0;
        return this.set(p, s.extend({}, f, { unset: !0 }));
      },
      // Determine if the model has changed since the last `"change"` event.
      // If you specify an attribute name, determine if that attribute has changed.
      hasChanged: function(f) {
        return f == null ? !s.isEmpty(this.changed) : s.has(this.changed, f);
      },
      // Return an object containing all the attributes that have changed, or
      // false if there are no changed attributes. Useful for determining what
      // parts of a view need to be updated and/or what attributes need to be
      // persisted to the server. Unset attributes will be set to undefined.
      // You can also pass an attributes object to diff against the model,
      // determining if there *would be* a change.
      changedAttributes: function(f) {
        if (!f)
          return this.hasChanged() ? s.clone(this.changed) : !1;
        var p = this._changing ? this._previousAttributes : this.attributes, y = {}, _;
        for (var A in f) {
          var O = f[A];
          s.isEqual(p[A], O) || (y[A] = O, _ = !0);
        }
        return _ ? y : !1;
      },
      // Get the previous value of an attribute, recorded at the time the last
      // `"change"` event was fired.
      previous: function(f) {
        return f == null || !this._previousAttributes ? null : this._previousAttributes[f];
      },
      // Get all of the attributes of the model at the time of the previous
      // `"change"` event.
      previousAttributes: function() {
        return s.clone(this._previousAttributes);
      },
      // Fetch the model from the server, merging the response with the model's
      // local attributes. Any changed attributes will trigger a "change" event.
      fetch: function(f) {
        f = s.extend({ parse: !0 }, f);
        var p = this, y = f.success;
        return f.success = function(_) {
          var A = f.parse ? p.parse(_, f) : _;
          if (!p.set(A, f))
            return !1;
          y && y.call(f.context, p, _, f), p.trigger("sync", p, _, f);
        }, rt(this, f), this.sync("read", this, f);
      },
      // Set a hash of model attributes, and sync the model to the server.
      // If the server returns an attributes hash that differs, the model's
      // state will be `set` again.
      save: function(f, p, y) {
        var _;
        f == null || typeof f == "object" ? (_ = f, y = p) : (_ = {})[f] = p, y = s.extend({ validate: !0, parse: !0 }, y);
        var A = y.wait;
        if (_ && !A) {
          if (!this.set(_, y))
            return !1;
        } else if (!this._validate(_, y))
          return !1;
        var O = this, U = y.success, ee = this.attributes;
        y.success = function(he) {
          O.attributes = ee;
          var L = y.parse ? O.parse(he, y) : he;
          if (A && (L = s.extend({}, _, L)), L && !O.set(L, y))
            return !1;
          U && U.call(y.context, O, he, y), O.trigger("sync", O, he, y);
        }, rt(this, y), _ && A && (this.attributes = s.extend({}, ee, _));
        var ie = this.isNew() ? "create" : y.patch ? "patch" : "update";
        ie === "patch" && !y.attrs && (y.attrs = _);
        var ge = this.sync(ie, this, y);
        return this.attributes = ee, ge;
      },
      // Destroy this model on the server if it was already persisted.
      // Optimistically removes the model from its collection, if it has one.
      // If `wait: true` is passed, waits for the server to respond before removal.
      destroy: function(f) {
        f = f ? s.clone(f) : {};
        var p = this, y = f.success, _ = f.wait, A = function() {
          p.stopListening(), p.trigger("destroy", p, p.collection, f);
        };
        f.success = function(U) {
          _ && A(), y && y.call(f.context, p, U, f), p.isNew() || p.trigger("sync", p, U, f);
        };
        var O = !1;
        return this.isNew() ? s.defer(f.success) : (rt(this, f), O = this.sync("delete", this, f)), _ || A(), O;
      },
      // Default URL for the model's representation on the server -- if you're
      // using Backbone's restful methods, override this to change the endpoint
      // that will be called.
      url: function() {
        var f = s.result(this, "urlRoot") || s.result(this.collection, "url") || nt();
        if (this.isNew())
          return f;
        var p = this.get(this.idAttribute);
        return f.replace(/[^\/]$/, "$&/") + encodeURIComponent(p);
      },
      // **parse** converts a response into the hash of attributes to be `set` on
      // the model. The default implementation is just to pass the response along.
      parse: function(f, p) {
        return f;
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
      isValid: function(f) {
        return this._validate({}, s.extend({}, f, { validate: !0 }));
      },
      // Run validation against the next complete set of model attributes,
      // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
      _validate: function(f, p) {
        if (!p.validate || !this.validate)
          return !0;
        f = s.extend({}, this.attributes, f);
        var y = this.validationError = this.validate(f, p) || null;
        return y ? (this.trigger("invalid", this, y, s.extend(p, { validationError: y })), !1) : !0;
      }
    });
    var Se = c.Collection = function(f, p) {
      p || (p = {}), this.preinitialize.apply(this, arguments), p.model && (this.model = p.model), p.comparator !== void 0 && (this.comparator = p.comparator), this._reset(), this.initialize.apply(this, arguments), f && this.reset(f, s.extend({ silent: !0 }, p));
    }, Te = { add: !0, remove: !0, merge: !0 }, ct = { add: !0, remove: !1 }, wt = function(f, p, y) {
      y = Math.min(Math.max(y, 0), f.length);
      var _ = Array(f.length - y), A = p.length, O;
      for (O = 0; O < _.length; O++)
        _[O] = f[O + y];
      for (O = 0; O < A; O++)
        f[O + y] = p[O];
      for (O = 0; O < _.length; O++)
        f[O + A + y] = _[O];
    };
    s.extend(Se.prototype, D, {
      // The default model for a collection is just a **Backbone.Model**.
      // This should be overridden in most cases.
      model: Me,
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
      toJSON: function(f) {
        return this.map(function(p) {
          return p.toJSON(f);
        });
      },
      // Proxy `Backbone.sync` by default.
      sync: function() {
        return c.sync.apply(this, arguments);
      },
      // Add a model, or list of models to the set. `models` may be Backbone
      // Models or raw JavaScript objects to be converted to Models, or any
      // combination of the two.
      add: function(f, p) {
        return this.set(f, s.extend({ merge: !1 }, p, ct));
      },
      // Remove a model, or a list of models from the set.
      remove: function(f, p) {
        p = s.extend({}, p);
        var y = !s.isArray(f);
        f = y ? [f] : f.slice();
        var _ = this._removeModels(f, p);
        return !p.silent && _.length && (p.changes = { added: [], merged: [], removed: _ }, this.trigger("update", this, p)), y ? _[0] : _;
      },
      // Update a collection by `set`-ing a new list of models, adding new ones,
      // removing models that are no longer present, and merging models that
      // already exist in the collection, as necessary. Similar to **Model#set**,
      // the core operation for updating the data contained by the collection.
      set: function(f, p) {
        if (f != null) {
          p = s.extend({}, Te, p), p.parse && !this._isModel(f) && (f = this.parse(f, p) || []);
          var y = !s.isArray(f);
          f = y ? [f] : f.slice();
          var _ = p.at;
          _ != null && (_ = +_), _ > this.length && (_ = this.length), _ < 0 && (_ += this.length + 1);
          var A = [], O = [], U = [], ee = [], ie = {}, ge = p.add, he = p.merge, L = p.remove, ce = !1, Xe = this.comparator && _ == null && p.sort !== !1, Qn = s.isString(this.comparator) ? this.comparator : null, de, ye;
          for (ye = 0; ye < f.length; ye++) {
            de = f[ye];
            var Ie = this.get(de);
            if (Ie) {
              if (he && de !== Ie) {
                var it = this._isModel(de) ? de.attributes : de;
                p.parse && (it = Ie.parse(it, p)), Ie.set(it, p), U.push(Ie), Xe && !ce && (ce = Ie.hasChanged(Qn));
              }
              ie[Ie.cid] || (ie[Ie.cid] = !0, A.push(Ie)), f[ye] = Ie;
            } else
              ge && (de = f[ye] = this._prepareModel(de, p), de && (O.push(de), this._addReference(de, p), ie[de.cid] = !0, A.push(de)));
          }
          if (L) {
            for (ye = 0; ye < this.length; ye++)
              de = this.models[ye], ie[de.cid] || ee.push(de);
            ee.length && this._removeModels(ee, p);
          }
          var ke = !1, ut = !Xe && ge && L;
          if (A.length && ut ? (ke = this.length !== A.length || s.some(this.models, function(ht, Yn) {
            return ht !== A[Yn];
          }), this.models.length = 0, wt(this.models, A, 0), this.length = this.models.length) : O.length && (Xe && (ce = !0), wt(this.models, O, _ ?? this.length), this.length = this.models.length), ce && this.sort({ silent: !0 }), !p.silent) {
            for (ye = 0; ye < O.length; ye++)
              _ != null && (p.index = _ + ye), de = O[ye], de.trigger("add", de, this, p);
            (ce || ke) && this.trigger("sort", this, p), (O.length || ee.length || U.length) && (p.changes = {
              added: O,
              removed: ee,
              merged: U
            }, this.trigger("update", this, p));
          }
          return y ? f[0] : f;
        }
      },
      // When you have more items than you want to add or remove individually,
      // you can reset the entire set with a new list of models, without firing
      // any granular `add` or `remove` events. Fires `reset` when finished.
      // Useful for bulk operations and optimizations.
      reset: function(f, p) {
        p = p ? s.clone(p) : {};
        for (var y = 0; y < this.models.length; y++)
          this._removeReference(this.models[y], p);
        return p.previousModels = this.models, this._reset(), f = this.add(f, s.extend({ silent: !0 }, p)), p.silent || this.trigger("reset", this, p), f;
      },
      // Add a model to the end of the collection.
      push: function(f, p) {
        return this.add(f, s.extend({ at: this.length }, p));
      },
      // Remove a model from the end of the collection.
      pop: function(f) {
        var p = this.at(this.length - 1);
        return this.remove(p, f);
      },
      // Add a model to the beginning of the collection.
      unshift: function(f, p) {
        return this.add(f, s.extend({ at: 0 }, p));
      },
      // Remove a model from the beginning of the collection.
      shift: function(f) {
        var p = this.at(0);
        return this.remove(p, f);
      },
      // Slice out a sub-array of models from the collection.
      slice: function() {
        return w.apply(this.models, arguments);
      },
      // Get a model from the set by id, cid, model object with id or cid
      // properties, or an attributes object that is transformed through modelId.
      get: function(f) {
        if (f != null)
          return this._byId[f] || this._byId[this.modelId(this._isModel(f) ? f.attributes : f, f.idAttribute)] || f.cid && this._byId[f.cid];
      },
      // Returns `true` if the model is in the collection.
      has: function(f) {
        return this.get(f) != null;
      },
      // Get the model at the given index.
      at: function(f) {
        return f < 0 && (f += this.length), this.models[f];
      },
      // Return models with matching attributes. Useful for simple cases of
      // `filter`.
      where: function(f, p) {
        return this[p ? "find" : "filter"](f);
      },
      // Return the first model with matching attributes. Useful for simple cases
      // of `find`.
      findWhere: function(f) {
        return this.where(f, !0);
      },
      // Force the collection to re-sort itself. You don't need to call this under
      // normal circumstances, as the set will maintain sort order as each item
      // is added.
      sort: function(f) {
        var p = this.comparator;
        if (!p)
          throw new Error("Cannot sort a set without a comparator");
        f || (f = {});
        var y = p.length;
        return s.isFunction(p) && (p = p.bind(this)), y === 1 || s.isString(p) ? this.models = this.sortBy(p) : this.models.sort(p), f.silent || this.trigger("sort", this, f), this;
      },
      // Pluck an attribute from each model in the collection.
      pluck: function(f) {
        return this.map(f + "");
      },
      // Fetch the default set of models for this collection, resetting the
      // collection when they arrive. If `reset: true` is passed, the response
      // data will be passed through the `reset` method instead of `set`.
      fetch: function(f) {
        f = s.extend({ parse: !0 }, f);
        var p = f.success, y = this;
        return f.success = function(_) {
          var A = f.reset ? "reset" : "set";
          y[A](_, f), p && p.call(f.context, y, _, f), y.trigger("sync", y, _, f);
        }, rt(this, f), this.sync("read", this, f);
      },
      // Create a new instance of a model in this collection. Add the model to the
      // collection immediately, unless `wait: true` is passed, in which case we
      // wait for the server to agree.
      create: function(f, p) {
        p = p ? s.clone(p) : {};
        var y = p.wait;
        if (f = this._prepareModel(f, p), !f)
          return !1;
        y || this.add(f, p);
        var _ = this, A = p.success;
        return p.success = function(O, U, ee) {
          y && (O.off("error", _._forwardPristineError, _), _.add(O, ee)), A && A.call(ee.context, O, U, ee);
        }, y && f.once("error", this._forwardPristineError, this), f.save(null, p), f;
      },
      // **parse** converts a response into a list of models to be added to the
      // collection. The default implementation is just to pass it through.
      parse: function(f, p) {
        return f;
      },
      // Create a new collection with an identical list of models as this one.
      clone: function() {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator
        });
      },
      // Define how to uniquely identify models in the collection.
      modelId: function(f, p) {
        return f[p || this.model.prototype.idAttribute || "id"];
      },
      // Get an iterator of all models in this collection.
      values: function() {
        return new Ge(this, ue);
      },
      // Get an iterator of all model IDs in this collection.
      keys: function() {
        return new Ge(this, tt);
      },
      // Get an iterator of all [ID, model] tuples in this collection.
      entries: function() {
        return new Ge(this, Wn);
      },
      // Private method to reset all internal state. Called when the collection
      // is first initialized or reset.
      _reset: function() {
        this.length = 0, this.models = [], this._byId = {};
      },
      // Prepare a hash of attributes (or other model) to be added to this
      // collection.
      _prepareModel: function(f, p) {
        if (this._isModel(f))
          return f.collection || (f.collection = this), f;
        p = p ? s.clone(p) : {}, p.collection = this;
        var y;
        return this.model.prototype ? y = new this.model(f, p) : y = this.model(f, p), y.validationError ? (this.trigger("invalid", this, y.validationError, p), !1) : y;
      },
      // Internal method called by both remove and set.
      _removeModels: function(f, p) {
        for (var y = [], _ = 0; _ < f.length; _++) {
          var A = this.get(f[_]);
          if (A) {
            var O = this.indexOf(A);
            this.models.splice(O, 1), this.length--, delete this._byId[A.cid];
            var U = this.modelId(A.attributes, A.idAttribute);
            U != null && delete this._byId[U], p.silent || (p.index = O, A.trigger("remove", A, this, p)), y.push(A), this._removeReference(A, p);
          }
        }
        return f.length > 0 && !p.silent && delete p.index, y;
      },
      // Method for checking whether an object should be considered a model for
      // the purposes of adding to the collection.
      _isModel: function(f) {
        return f instanceof Me;
      },
      // Internal method to create a model's ties to a collection.
      _addReference: function(f, p) {
        this._byId[f.cid] = f;
        var y = this.modelId(f.attributes, f.idAttribute);
        y != null && (this._byId[y] = f), f.on("all", this._onModelEvent, this);
      },
      // Internal method to sever a model's ties to a collection.
      _removeReference: function(f, p) {
        delete this._byId[f.cid];
        var y = this.modelId(f.attributes, f.idAttribute);
        y != null && delete this._byId[y], this === f.collection && delete f.collection, f.off("all", this._onModelEvent, this);
      },
      // Internal method called every time a model in the set fires an event.
      // Sets need to update their indexes when models change ids. All other
      // events simply proxy through. "add" and "remove" events that originate
      // in other collections are ignored.
      _onModelEvent: function(f, p, y, _) {
        if (p) {
          if ((f === "add" || f === "remove") && y !== this)
            return;
          if (f === "destroy" && this.remove(p, _), f === "changeId") {
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
      _forwardPristineError: function(f, p, y) {
        this.has(f) || this._onModelEvent("error", f, p, y);
      }
    });
    var a = typeof Symbol == "function" && Symbol.iterator;
    a && (Se.prototype[a] = Se.prototype.values);
    var Ge = function(f, p) {
      this._collection = f, this._kind = p, this._index = 0;
    }, ue = 1, tt = 2, Wn = 3;
    a && (Ge.prototype[a] = function() {
      return this;
    }), Ge.prototype.next = function() {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var f = this._collection.at(this._index);
          this._index++;
          var p;
          if (this._kind === ue)
            p = f;
          else {
            var y = this._collection.modelId(f.attributes, f.idAttribute);
            this._kind === tt ? p = y : p = [y, f];
          }
          return { value: p, done: !1 };
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    };
    var hn = c.View = function(f) {
      this.cid = s.uniqueId("view"), this.preinitialize.apply(this, arguments), s.extend(this, s.pick(f, xt)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, ae = /^(\S+)\s*(.*)$/, xt = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    s.extend(hn.prototype, D, {
      // The default `tagName` of a View's element is `"div"`.
      tagName: "div",
      // jQuery delegate for element lookup, scoped to DOM elements within the
      // current view. This should be preferred to global lookups where possible.
      $: function(f) {
        return this.$el.find(f);
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
      setElement: function(f) {
        return this.undelegateEvents(), this._setElement(f), this.delegateEvents(), this;
      },
      // Creates the `this.el` and `this.$el` references for this view using the
      // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
      // context or an element. Subclasses can override this to utilize an
      // alternative DOM manipulation API and are only required to set the
      // `this.el` property.
      _setElement: function(f) {
        this.$el = f instanceof c.$ ? f : c.$(f), this.el = this.$el[0];
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
      delegateEvents: function(f) {
        if (f || (f = s.result(this, "events")), !f)
          return this;
        this.undelegateEvents();
        for (var p in f) {
          var y = f[p];
          if (s.isFunction(y) || (y = this[y]), !!y) {
            var _ = p.match(ae);
            this.delegate(_[1], _[2], y.bind(this));
          }
        }
        return this;
      },
      // Add a single event listener to the view's element (or a child element
      // using `selector`). This only works for delegate-able events: not `focus`,
      // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
      delegate: function(f, p, y) {
        return this.$el.on(f + ".delegateEvents" + this.cid, p, y), this;
      },
      // Clears all callbacks previously bound to the view by `delegateEvents`.
      // You usually don't need to use this, but may wish to if you have multiple
      // Backbone views attached to the same DOM element.
      undelegateEvents: function() {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
      },
      // A finer-grained `undelegateEvents` for removing a single delegated event.
      // `selector` and `listener` are both optional.
      undelegate: function(f, p, y) {
        return this.$el.off(f + ".delegateEvents" + this.cid, p, y), this;
      },
      // Produces a DOM element to be assigned to your view. Exposed for
      // subclasses using an alternative DOM manipulation API.
      _createElement: function(f) {
        return document.createElement(f);
      },
      // Ensure that the View has a DOM element to render into.
      // If `this.el` is a string, pass it through `$()`, take the first
      // matching element, and re-assign it to `el`. Otherwise, create
      // an element from the `id`, `className` and `tagName` properties.
      _ensureElement: function() {
        if (this.el)
          this.setElement(s.result(this, "el"));
        else {
          var f = s.extend({}, s.result(this, "attributes"));
          this.id && (f.id = s.result(this, "id")), this.className && (f.class = s.result(this, "className")), this.setElement(this._createElement(s.result(this, "tagName"))), this._setAttributes(f);
        }
      },
      // Set attributes from a hash on this view's element.  Exposed for
      // subclasses using an alternative DOM manipulation API.
      _setAttributes: function(f) {
        this.$el.attr(f);
      }
    });
    var jn = function(f, p, y, _) {
      switch (p) {
        case 1:
          return function() {
            return f[y](this[_]);
          };
        case 2:
          return function(A) {
            return f[y](this[_], A);
          };
        case 3:
          return function(A, O) {
            return f[y](this[_], $e(A, this), O);
          };
        case 4:
          return function(A, O, U) {
            return f[y](this[_], $e(A, this), O, U);
          };
        default:
          return function() {
            var A = w.call(arguments);
            return A.unshift(this[_]), f[y].apply(f, A);
          };
      }
    }, dn = function(f, p, y, _) {
      s.each(y, function(A, O) {
        p[O] && (f.prototype[O] = jn(p, A, O, _));
      });
    }, $e = function(f, p) {
      return s.isFunction(f) ? f : s.isObject(f) && !p._isModel(f) ? Wt(f) : s.isString(f) ? function(y) {
        return y.get(f);
      } : f;
    }, Wt = function(f) {
      var p = s.matches(f);
      return function(y) {
        return p(y.attributes);
      };
    }, ft = {
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
    }, pn = {
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
      [Se, ft, "models"],
      [Me, pn, "attributes"]
    ], function(f) {
      var p = f[0], y = f[1], _ = f[2];
      p.mixin = function(A) {
        var O = s.reduce(s.functions(A), function(U, ee) {
          return U[ee] = 0, U;
        }, {});
        dn(p, A, O, _);
      }, dn(p, s, y, _);
    }), c.sync = function(f, p, y) {
      var _ = gn[f];
      s.defaults(y || (y = {}), {
        emulateHTTP: c.emulateHTTP,
        emulateJSON: c.emulateJSON
      });
      var A = { type: _, dataType: "json" };
      if (y.url || (A.url = s.result(p, "url") || nt()), y.data == null && p && (f === "create" || f === "update" || f === "patch") && (A.contentType = "application/json", A.data = JSON.stringify(y.attrs || p.toJSON(y))), y.emulateJSON && (A.contentType = "application/x-www-form-urlencoded", A.data = A.data ? { model: A.data } : {}), y.emulateHTTP && (_ === "PUT" || _ === "DELETE" || _ === "PATCH")) {
        A.type = "POST", y.emulateJSON && (A.data._method = _);
        var O = y.beforeSend;
        y.beforeSend = function(ie) {
          if (ie.setRequestHeader("X-HTTP-Method-Override", _), O)
            return O.apply(this, arguments);
        };
      }
      A.type !== "GET" && !y.emulateJSON && (A.processData = !1);
      var U = y.error;
      y.error = function(ie, ge, he) {
        y.textStatus = ge, y.errorThrown = he, U && U.call(y.context, ie, ge, he);
      };
      var ee = y.xhr = c.ajax(s.extend(A, y));
      return p.trigger("request", p, ee, y), ee;
    };
    var gn = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET"
    };
    c.ajax = function() {
      return c.$.ajax.apply(c.$, arguments);
    };
    var jt = c.Router = function(f) {
      f || (f = {}), this.preinitialize.apply(this, arguments), f.routes && (this.routes = f.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, Bt = /\((.*?)\)/g, vn = /(\(\?)?:\w+/g, Bn = /\*\w+/g, zn = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(jt.prototype, D, {
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
      route: function(f, p, y) {
        s.isRegExp(f) || (f = this._routeToRegExp(f)), s.isFunction(p) && (y = p, p = ""), y || (y = this[p]);
        var _ = this;
        return c.history.route(f, function(A) {
          var O = _._extractParameters(f, A);
          _.execute(y, O, p) !== !1 && (_.trigger.apply(_, ["route:" + p].concat(O)), _.trigger("route", p, O), c.history.trigger("route", _, p, O));
        }), this;
      },
      // Execute a route handler with the provided parameters.  This is an
      // excellent place to do pre-route setup or post-route cleanup.
      execute: function(f, p, y) {
        f && f.apply(this, p);
      },
      // Simple proxy to `Backbone.history` to save a fragment into the history.
      navigate: function(f, p) {
        return c.history.navigate(f, p), this;
      },
      // Bind all defined routes to `Backbone.history`. We have to reverse the
      // order of the routes here to support behavior where the most general
      // routes can be defined at the bottom of the route map.
      _bindRoutes: function() {
        if (this.routes) {
          this.routes = s.result(this, "routes");
          for (var f, p = s.keys(this.routes); (f = p.pop()) != null; )
            this.route(f, this.routes[f]);
        }
      },
      // Convert a route string into a regular expression, suitable for matching
      // against the current location hash.
      _routeToRegExp: function(f) {
        return f = f.replace(zn, "\\$&").replace(Bt, "(?:$1)?").replace(vn, function(p, y) {
          return y ? p : "([^/?]+)";
        }).replace(Bn, "([^?]*?)"), new RegExp("^" + f + "(?:\\?([\\s\\S]*))?$");
      },
      // Given a route, and a URL fragment that it matches, return the array of
      // extracted decoded parameters. Empty or unmatched parameters will be
      // treated as `null` to normalize cross-browser behavior.
      _extractParameters: function(f, p) {
        var y = f.exec(p).slice(1);
        return s.map(y, function(_, A) {
          return A === y.length - 1 ? _ || null : _ ? decodeURIComponent(_) : null;
        });
      }
    });
    var Je = c.History = function() {
      this.handlers = [], this.checkUrl = this.checkUrl.bind(this), typeof window < "u" && (this.location = window.location, this.history = window.history);
    }, Jn = /^[#\/]|\s+$/g, mn = /^\/+|\/+$/g, Le = /#.*$/;
    Je.started = !1, s.extend(Je.prototype, D, {
      // The default interval to poll for hash changes, if necessary, is
      // twenty times a second.
      interval: 50,
      // Are we at the app root?
      atRoot: function() {
        var f = this.location.pathname.replace(/[^\/]$/, "$&/");
        return f === this.root && !this.getSearch();
      },
      // Does the pathname match the root?
      matchRoot: function() {
        var f = this.decodeFragment(this.location.pathname), p = f.slice(0, this.root.length - 1) + "/";
        return p === this.root;
      },
      // Unicode characters in `location.pathname` are percent encoded so they're
      // decoded for comparison. `%25` should not be decoded since it may be part
      // of an encoded parameter.
      decodeFragment: function(f) {
        return decodeURI(f.replace(/%25/g, "%2525"));
      },
      // In IE6, the hash fragment and search params are incorrect if the
      // fragment contains `?`.
      getSearch: function() {
        var f = this.location.href.replace(/#.*/, "").match(/\?.+/);
        return f ? f[0] : "";
      },
      // Gets the true hash value. Cannot use location.hash directly due to bug
      // in Firefox where location.hash will always be decoded.
      getHash: function(f) {
        var p = (f || this).location.href.match(/#(.*)$/);
        return p ? p[1] : "";
      },
      // Get the pathname and search params, without the root.
      getPath: function() {
        var f = this.decodeFragment(
          this.location.pathname + this.getSearch()
        ).slice(this.root.length - 1);
        return f.charAt(0) === "/" ? f.slice(1) : f;
      },
      // Get the cross-browser normalized URL fragment from the path or hash.
      getFragment: function(f) {
        return f == null && (this._usePushState || !this._wantsHashChange ? f = this.getPath() : f = this.getHash()), f.replace(Jn, "");
      },
      // Start the hash change handling, returning `true` if the current URL matches
      // an existing route, and `false` otherwise.
      start: function(f) {
        if (Je.started)
          throw new Error("Backbone.history has already been started");
        if (Je.started = !0, this.options = s.extend({ root: "/" }, this.options, f), this.root = this.options.root, this._trailingSlash = this.options.trailingSlash, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(mn, "/"), this._wantsHashChange && this._wantsPushState)
          if (!this._hasPushState && !this.atRoot()) {
            var p = this.root.slice(0, -1) || "/";
            return this.location.replace(p + "#" + this.getPath()), !0;
          } else
            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
          var y = document.body, _ = y.insertBefore(this.iframe, y.firstChild).contentWindow;
          _.document.open(), _.document.close(), _.location.hash = "#" + this.fragment;
        }
        var A = window.addEventListener || function(O, U) {
          return attachEvent("on" + O, U);
        };
        if (this._usePushState ? A("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? A("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
          return this.loadUrl();
      },
      // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
      // but possibly useful for unit testing Routers.
      stop: function() {
        var f = window.removeEventListener || function(p, y) {
          return detachEvent("on" + p, y);
        };
        this._usePushState ? f("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && f("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Je.started = !1;
      },
      // Add a route to be tested when the fragment changes. Routes added later
      // may override previous routes.
      route: function(f, p) {
        this.handlers.unshift({ route: f, callback: p });
      },
      // Checks the current URL to see if it has changed, and if it has,
      // calls `loadUrl`, normalizing across the hidden iframe.
      checkUrl: function(f) {
        var p = this.getFragment();
        if (p === this.fragment && this.iframe && (p = this.getHash(this.iframe.contentWindow)), p === this.fragment)
          return this.matchRoot() ? !1 : this.notfound();
        this.iframe && this.navigate(p), this.loadUrl();
      },
      // Attempt to load the current URL fragment. If a route succeeds with a
      // match, returns `true`. If no defined routes matches the fragment,
      // returns `false`.
      loadUrl: function(f) {
        return this.matchRoot() ? (f = this.fragment = this.getFragment(f), s.some(this.handlers, function(p) {
          if (p.route.test(f))
            return p.callback(f), !0;
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
      navigate: function(f, p) {
        if (!Je.started)
          return !1;
        (!p || p === !0) && (p = { trigger: !!p }), f = this.getFragment(f || "");
        var y = this.root;
        !this._trailingSlash && (f === "" || f.charAt(0) === "?") && (y = y.slice(0, -1) || "/");
        var _ = y + f;
        f = f.replace(Le, "");
        var A = this.decodeFragment(f);
        if (this.fragment !== A) {
          if (this.fragment = A, this._usePushState)
            this.history[p.replace ? "replaceState" : "pushState"]({}, document.title, _);
          else if (this._wantsHashChange) {
            if (this._updateHash(this.location, f, p.replace), this.iframe && f !== this.getHash(this.iframe.contentWindow)) {
              var O = this.iframe.contentWindow;
              p.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, f, p.replace);
            }
          } else
            return this.location.assign(_);
          if (p.trigger)
            return this.loadUrl(f);
        }
      },
      // Update the hash location, either replacing the current entry, or adding
      // a new one to the browser history.
      _updateHash: function(f, p, y) {
        if (y) {
          var _ = f.href.replace(/(javascript:|#).*$/, "");
          f.replace(_ + "#" + p);
        } else
          f.hash = "#" + p;
      }
    }), c.history = new Je();
    var Xn = function(f, p) {
      var y = this, _;
      return f && s.has(f, "constructor") ? _ = f.constructor : _ = function() {
        return y.apply(this, arguments);
      }, s.extend(_, y, p), _.prototype = s.create(y.prototype, f), _.prototype.constructor = _, _.__super__ = y.prototype, _;
    };
    Me.extend = Se.extend = jt.extend = hn.extend = Je.extend = Xn;
    var nt = function() {
      throw new Error('A "url" property or function must be specified');
    }, rt = function(f, p) {
      var y = p.error;
      p.error = function(_) {
        y && y.call(p.context, f, _, p), f.trigger("error", f, _, p);
      };
    };
    return c._debug = function() {
      return { root: n, _: s };
    }, c;
  });
})(ru);
const Na = /* @__PURE__ */ Ki(ru);
function Ha(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Ha(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function mo(i) {
  var n = "", c, s;
  try {
    s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<a class="g-create-thumbnail" title="Create chameleon conversion of this file">', s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
  } catch (d) {
    Ha(d, c, s);
  }
  return n;
}
const Oa = girder.views.widgets.FileListWidget, yo = girder.router, { wrap: Fo } = girder.utilities.PluginUtils;
Fo(Oa, "render", function(i) {
  return i.call(this), this.$(".g-file-actions-container").prepend(mo()), this;
});
Oa.prototype.events["click a.g-create-thumbnail"] = function(i) {
  var n = ot(i.currentTarget).parent().attr("file-cid");
  console.log(n), new Tr({
    el: ot("#g-dialog-container"),
    parentView: this,
    item: this.parentItem,
    file: this.collection.get(n)
  }).once("submit #g-create-thumbnail-form", function(c) {
    Na.history.fragment = null, yo.navigate(c.attachedToType + "/" + c.attachedToId, { trigger: !0 });
  }, this).render();
};
function Sn(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = bo(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function bo(i) {
  var n = "" + i, c = wo.exec(n);
  if (!c)
    return i;
  var s, d, g, w = "";
  for (s = c.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        g = "&quot;";
        break;
      case 38:
        g = "&amp;";
        break;
      case 60:
        g = "&lt;";
        break;
      case 62:
        g = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (w += n.substring(d, s)), d = s + 1, w += g;
  }
  return d !== s ? w + n.substring(d, s) : w;
}
var wo = /["&<>]/;
function Ma(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Ma(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function xo(i) {
  var n = "", c, s;
  try {
    var d = i || {};
    (function(g, w, D) {
      s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-flow-container">', s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", (function() {
        var M = D;
        if (typeof M.length == "number")
          for (var $ = 0, R = M.length; $ < R; $++) {
            var Y = M[$];
            s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + Sn("g-file-id", Y.id, !0, !1)) + ">", s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", w >= g.WRITE && (s = 5, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + Sn("src", Y.downloadUrl(), !0, !1)) + "/></div>";
          }
        else {
          var R = 0;
          for (var $ in M) {
            R++;
            var Y = M[$];
            s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + Sn("g-file-id", Y.id, !0, !1)) + ">", s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", w >= g.WRITE && (s = 5, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + Sn("src", Y.downloadUrl(), !0, !1)) + "/></div>";
          }
        }
      }).call(this), n = n + "</div>";
    }).call(this, "AccessType" in d ? d.AccessType : typeof AccessType < "u" ? AccessType : void 0, "accessLevel" in d ? d.accessLevel : typeof accessLevel < "u" ? accessLevel : void 0, "thumbnails" in d ? d.thumbnails : typeof thumbnails < "u" ? thumbnails : void 0);
  } catch (g) {
    Ma(g, c, s);
  }
  return n;
}
const _o = girder.models.FileModel, To = girder.views.View, { AccessType: Yi } = girder.constants, { confirm: Co } = girder.dialog, Eo = girder.events;
var So = To.extend({
  events: {
    "click .g-thumbnail-delete": function(i) {
      var n = ot(i.currentTarget).parents(".g-thumbnail-container"), c = new _o({ _id: n.attr("g-file-id") });
      Co({
        text: "Are you sure you want to delete this thumbnail?",
        yesText: "Delete",
        confirmCallback: () => {
          c.on("g:deleted", function() {
            n.remove();
          }).on("g:error", function() {
            Eo.trigger("g:alert", {
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
    this.thumbnails = i.thumbnails, this.accessLevel = i.accessLevel || Yi.READ;
  },
  render: function() {
    return this.$el.html(xo({
      thumbnails: this.thumbnails.toArray(),
      accessLevel: this.accessLevel,
      AccessType: Yi
    })), this;
  }
});
function Ia(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Ia(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Do(i) {
  var n = "", c, s;
  try {
    s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-thumbnails-header-container">', s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-item-info-header">', s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<i class="icon-picture"></i>', s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + "Chameleon Conversions</div></div>";
  } catch (d) {
    Ia(d, c, s);
  }
  return n;
}
const Ao = girder.collections.FileCollection, No = girder.views.body.ItemView, { wrap: Ho } = girder.utilities.PluginUtils;
Ho(No, "render", function(i) {
  this.once("g:rendered", function() {
    const n = new Ao(
      Mn.map(this.model.get("_thumbnails"), (c) => ({ _id: c }))
    );
    n && n.length && (this.$(".g-item-info").before(Do()), new So({
      className: "g-thumbnails-flow-view-container",
      parentView: this,
      thumbnails: n,
      accessLevel: this.model.getAccessLevel()
    }).render().$el.insertBefore(this.$(".g-item-info")));
  }, this), i.call(this);
});
function Oo(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = Mo(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Mo(i) {
  var n = "" + i, c = Io.exec(n);
  if (!c)
    return i;
  var s, d, g, w = "";
  for (s = c.index, d = 0; s < n.length; s++) {
    switch (n.charCodeAt(s)) {
      case 34:
        g = "&quot;";
        break;
      case 38:
        g = "&amp;";
        break;
      case 60:
        g = "&lt;";
        break;
      case 62:
        g = "&gt;";
        break;
      default:
        continue;
    }
    d !== s && (w += n.substring(d, s)), d = s + 1, w += g;
  }
  return d !== s ? w + n.substring(d, s) : w;
}
var Io = /["&<>]/;
function Pa(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, w, D;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), w = Math.max(c - d, 0), D = Math.min(g.length, c + d);
  } catch (M) {
    return i.message += " - could not read from " + n + " (" + M.message + ")", void Pa(i, null, c);
  }
  d = g.slice(w, D).map(function(M, $) {
    var R = $ + w + 1;
    return (R == c ? "  > " : "    ") + R + "| " + M;
  }).join(`
`), i.path = n;
  try {
    i.message = (n || "Pug") + ":" + c + `
` + d + `

` + i.message;
  } catch {
  }
  throw i;
}
function Po(i) {
  var n = "", c, s;
  try {
    var d = i || {};
    (function(g) {
      s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + "<a" + (' class="g-create-thumbnail"' + Oo("data-item-id", `${g ? g.id : ""}`, !0, !1) + ' title="Create chameleon conversion of this file"') + ">", s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
    }).call(this, "item" in d ? d.item : typeof item < "u" ? item : void 0);
  } catch (g) {
    Pa(g, c, s);
  }
  return n;
}
const $a = girder.views.widgets.ItemListWidget, $o = girder.router, { wrap: Lo } = girder.utilities.PluginUtils;
Lo($a, "render", function(i) {
  return i.call(this), this.$("li.g-item-list-entry").each((n, c) => {
    let s = this.collection.at(n);
    s && ot(c).append(Po({ item: s }));
  }), this;
});
$a.prototype.events["click a.g-create-thumbnail"] = function(i) {
  i.preventDefault();
  let n = ot(i.currentTarget).attr("data-item-id"), c = this.collection.find((s) => s.id === n);
  console.log(c), console.log(this.collection.get(c.cid)), new Tr({
    el: ot("#g-dialog-container"),
    parentView: this,
    item: c,
    file: this.collection.get(c.cid)
    // Assuming 'file' is an attribute of the item
  }).once("submit #g-create-thumbnail-form", function(s) {
    Na.history.fragment = null, $o.navigate(s.attachedToType + "/" + s.attachedToId, { trigger: !0 });
  }, this).render();
};
const { wrap: ko } = girder.utilities.PluginUtils, qo = girder.views.body.ItemView;
ko(qo, "render", function(i) {
  i.apply(this, arguments), this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>'), this.$(".g-open-chameleon").on("click", () => {
    new Tr({
      item: this.model,
      // Pass the item model
      file: this.model.file
    }).render();
  });
});
//# sourceMappingURL=girder-plugin-chameleon.js.map
