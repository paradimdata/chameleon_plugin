var tn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function tu(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function Ss(i) {
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
var wr = { exports: {} };
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
function nu() {
  return Vi || (Vi = 1, function(i) {
    (function(n, c) {
      i.exports = n.document ? c(n, !0) : function(s) {
        if (!s.document)
          throw new Error("jQuery requires a window with a document");
        return c(s);
      };
    })(typeof window < "u" ? window : tn, function(n, c) {
      var s = [], d = Object.getPrototypeOf, g = s.slice, F = s.flat ? function(e) {
        return s.flat.call(e);
      } : function(e) {
        return s.concat.apply([], e);
      }, S = s.push, H = s.indexOf, M = {}, R = M.toString, Q = M.hasOwnProperty, he = Q.toString, fe = he.call(Object), G = {}, W = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, Te = function(t) {
        return t != null && t === t.window;
      }, j = n.document, ye = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function pe(e, t, r) {
        r = r || j;
        var u, o, l = r.createElement("script");
        if (l.text = e, t)
          for (u in ye)
            o = t[u] || t.getAttribute && t.getAttribute(u), o && l.setAttribute(u, o);
        r.head.appendChild(l).parentNode.removeChild(l);
      }
      function be(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? M[R.call(e)] || "object" : typeof e;
      }
      var Be = "3.7.1", it = /HTML$/i, a = function(e, t) {
        return new a.fn.init(e, t);
      };
      a.fn = a.prototype = {
        // The current version of jQuery being used
        jquery: Be,
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
        push: S,
        sort: s.sort,
        splice: s.splice
      }, a.extend = a.fn.extend = function() {
        var e, t, r, u, o, l, h = arguments[0] || {}, b = 1, m = arguments.length, x = !1;
        for (typeof h == "boolean" && (x = h, h = arguments[b] || {}, b++), typeof h != "object" && !W(h) && (h = {}), b === m && (h = this, b--); b < m; b++)
          if ((e = arguments[b]) != null)
            for (t in e)
              u = e[t], !(t === "__proto__" || h === u) && (x && u && (a.isPlainObject(u) || (o = Array.isArray(u))) ? (r = h[t], o && !Array.isArray(r) ? l = [] : !o && !a.isPlainObject(r) ? l = {} : l = r, o = !1, h[t] = a.extend(x, l, u)) : u !== void 0 && (h[t] = u));
        return h;
      }, a.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (Be + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, r;
          return !e || R.call(e) !== "[object Object]" ? !1 : (t = d(e), t ? (r = Q.call(t, "constructor") && t.constructor, typeof r == "function" && he.call(r) === fe) : !0);
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
          pe(e, { nonce: t && t.nonce }, r);
        },
        each: function(e, t) {
          var r, u = 0;
          if ($e(e))
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
          return e != null && ($e(Object(e)) ? a.merge(
            r,
            typeof e == "string" ? [e] : e
          ) : S.call(r, e)), r;
        },
        inArray: function(e, t, r) {
          return t == null ? -1 : H.call(t, e, r);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, r = e && (e.ownerDocument || e).documentElement;
          return !it.test(t || r && r.nodeName || "HTML");
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(e, t) {
          for (var r = +t.length, u = 0, o = e.length; u < r; u++)
            e[o++] = t[u];
          return e.length = o, e;
        },
        grep: function(e, t, r) {
          for (var u, o = [], l = 0, h = e.length, b = !r; l < h; l++)
            u = !t(e[l], l), u !== b && o.push(e[l]);
          return o;
        },
        // arg is for internal usage only
        map: function(e, t, r) {
          var u, o, l = 0, h = [];
          if ($e(e))
            for (u = e.length; l < u; l++)
              o = t(e[l], l, r), o != null && h.push(o);
          else
            for (l in e)
              o = t(e[l], l, r), o != null && h.push(o);
          return F(h);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: G
      }), typeof Symbol == "function" && (a.fn[Symbol.iterator] = s[Symbol.iterator]), a.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function(e, t) {
          M["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function $e(e) {
        var t = !!e && "length" in e && e.length, r = be(e);
        return W(e) || Te(e) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function ne(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var ut = s.pop, Gn = s.sort, hn = s.splice, ae = "[\\x20\\t\\r\\n\\f]", xt = new RegExp(
        "^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$",
        "g"
      );
      a.contains = function(e, t) {
        var r = t && t.parentNode;
        return e === r || !!(r && r.nodeType === 1 && // Support: IE 9 - 11+
        // IE doesn't have `contains` on SVG.
        (e.contains ? e.contains(r) : e.compareDocumentPosition && e.compareDocumentPosition(r) & 16));
      };
      var Bn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      function dn(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      a.escapeSelector = function(e) {
        return (e + "").replace(Bn, dn);
      };
      var qe = j, Wt = S;
      (function() {
        var e, t, r, u, o, l = Wt, h, b, m, x, A, O = a.expando, C = 0, P = 0, J = Tn(), re = Tn(), Y = Tn(), _e = Tn(), we = function(v, w) {
          return v === w && (o = !0), 0;
        }, Ze = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", et = "(?:\\\\[\\da-fA-F]{1,6}" + ae + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", te = "\\[" + ae + "*(" + et + ")(?:" + ae + // Operator (capture 2)
        "*([*^$|!~]?=)" + ae + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + et + "))|)" + ae + "*\\]", Ct = ":(" + et + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + te + ")*)|.*)\\)|)", ie = new RegExp(ae + "+", "g"), de = new RegExp("^" + ae + "*," + ae + "*"), Kt = new RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"), dr = new RegExp(ae + "|>"), tt = new RegExp(Ct), Zt = new RegExp("^" + et + "$"), nt = {
          ID: new RegExp("^#(" + et + ")"),
          CLASS: new RegExp("^\\.(" + et + ")"),
          TAG: new RegExp("^(" + et + "|[*])"),
          ATTR: new RegExp("^" + te),
          PSEUDO: new RegExp("^" + Ct),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Ze + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i")
        }, gt = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, je = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, pr = /[+~]/, ct = new RegExp("\\\\[\\da-fA-F]{1,6}" + ae + "?|\\\\([^\\r\\n\\f])", "g"), ft = function(v, w) {
          var _ = "0x" + v.slice(1) - 65536;
          return w || (_ < 0 ? String.fromCharCode(_ + 65536) : String.fromCharCode(_ >> 10 | 55296, _ & 1023 | 56320));
        }, ws = function() {
          mt();
        }, Fs = Cn(
          function(v) {
            return v.disabled === !0 && ne(v, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function xs() {
          try {
            return h.activeElement;
          } catch {
          }
        }
        try {
          l.apply(
            s = g.call(qe.childNodes),
            qe.childNodes
          ), s[qe.childNodes.length].nodeType;
        } catch {
          l = {
            apply: function(w, _) {
              Wt.apply(w, g.call(_));
            },
            call: function(w) {
              Wt.apply(w, g.call(arguments, 1));
            }
          };
        }
        function oe(v, w, _, E) {
          var N, $, L, V, q, K, z, X = w && w.ownerDocument, Z = w ? w.nodeType : 9;
          if (_ = _ || [], typeof v != "string" || !v || Z !== 1 && Z !== 9 && Z !== 11)
            return _;
          if (!E && (mt(w), w = w || h, m)) {
            if (Z !== 11 && (q = je.exec(v)))
              if (N = q[1]) {
                if (Z === 9)
                  if (L = w.getElementById(N)) {
                    if (L.id === N)
                      return l.call(_, L), _;
                  } else
                    return _;
                else if (X && (L = X.getElementById(N)) && oe.contains(w, L) && L.id === N)
                  return l.call(_, L), _;
              } else {
                if (q[2])
                  return l.apply(_, w.getElementsByTagName(v)), _;
                if ((N = q[3]) && w.getElementsByClassName)
                  return l.apply(_, w.getElementsByClassName(N)), _;
              }
            if (!_e[v + " "] && (!x || !x.test(v))) {
              if (z = v, X = w, Z === 1 && (dr.test(v) || Kt.test(v))) {
                for (X = pr.test(v) && gr(w.parentNode) || w, (X != w || !G.scope) && ((V = w.getAttribute("id")) ? V = a.escapeSelector(V) : w.setAttribute("id", V = O)), K = en(v), $ = K.length; $--; )
                  K[$] = (V ? "#" + V : ":scope") + " " + _n(K[$]);
                z = K.join(",");
              }
              try {
                return l.apply(
                  _,
                  X.querySelectorAll(z)
                ), _;
              } catch {
                _e(v, !0);
              } finally {
                V === O && w.removeAttribute("id");
              }
            }
          }
          return Ui(v.replace(xt, "$1"), w, _, E);
        }
        function Tn() {
          var v = [];
          function w(_, E) {
            return v.push(_ + " ") > t.cacheLength && delete w[v.shift()], w[_ + " "] = E;
          }
          return w;
        }
        function Je(v) {
          return v[O] = !0, v;
        }
        function kt(v) {
          var w = h.createElement("fieldset");
          try {
            return !!v(w);
          } catch {
            return !1;
          } finally {
            w.parentNode && w.parentNode.removeChild(w), w = null;
          }
        }
        function Ts(v) {
          return function(w) {
            return ne(w, "input") && w.type === v;
          };
        }
        function _s(v) {
          return function(w) {
            return (ne(w, "input") || ne(w, "button")) && w.type === v;
          };
        }
        function qi(v) {
          return function(w) {
            return "form" in w ? w.parentNode && w.disabled === !1 ? "label" in w ? "label" in w.parentNode ? w.parentNode.disabled === v : w.disabled === v : w.isDisabled === v || // Where there is no isDisabled, check manually
            w.isDisabled !== !v && Fs(w) === v : w.disabled === v : "label" in w ? w.disabled === v : !1;
          };
        }
        function Et(v) {
          return Je(function(w) {
            return w = +w, Je(function(_, E) {
              for (var N, $ = v([], _.length, w), L = $.length; L--; )
                _[N = $[L]] && (_[N] = !(E[N] = _[N]));
            });
          });
        }
        function gr(v) {
          return v && typeof v.getElementsByTagName < "u" && v;
        }
        function mt(v) {
          var w, _ = v ? v.ownerDocument || v : qe;
          return _ == h || _.nodeType !== 9 || !_.documentElement || (h = _, b = h.documentElement, m = !a.isXMLDoc(h), A = b.matches || b.webkitMatchesSelector || b.msMatchesSelector, b.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          qe != h && (w = h.defaultView) && w.top !== w && w.addEventListener("unload", ws), G.getById = kt(function(E) {
            return b.appendChild(E).id = a.expando, !h.getElementsByName || !h.getElementsByName(a.expando).length;
          }), G.disconnectedMatch = kt(function(E) {
            return A.call(E, "*");
          }), G.scope = kt(function() {
            return h.querySelectorAll(":scope");
          }), G.cssHas = kt(function() {
            try {
              return h.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), G.getById ? (t.filter.ID = function(E) {
            var N = E.replace(ct, ft);
            return function($) {
              return $.getAttribute("id") === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var $ = N.getElementById(E);
              return $ ? [$] : [];
            }
          }) : (t.filter.ID = function(E) {
            var N = E.replace(ct, ft);
            return function($) {
              var L = typeof $.getAttributeNode < "u" && $.getAttributeNode("id");
              return L && L.value === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var $, L, V, q = N.getElementById(E);
              if (q) {
                if ($ = q.getAttributeNode("id"), $ && $.value === E)
                  return [q];
                for (V = N.getElementsByName(E), L = 0; q = V[L++]; )
                  if ($ = q.getAttributeNode("id"), $ && $.value === E)
                    return [q];
              }
              return [];
            }
          }), t.find.TAG = function(E, N) {
            return typeof N.getElementsByTagName < "u" ? N.getElementsByTagName(E) : N.querySelectorAll(E);
          }, t.find.CLASS = function(E, N) {
            if (typeof N.getElementsByClassName < "u" && m)
              return N.getElementsByClassName(E);
          }, x = [], kt(function(E) {
            var N;
            b.appendChild(E).innerHTML = "<a id='" + O + "' href='' disabled='disabled'></a><select id='" + O + "-\r\\' disabled='disabled'><option selected=''></option></select>", E.querySelectorAll("[selected]").length || x.push("\\[" + ae + "*(?:value|" + Ze + ")"), E.querySelectorAll("[id~=" + O + "-]").length || x.push("~="), E.querySelectorAll("a#" + O + "+*").length || x.push(".#.+[+~]"), E.querySelectorAll(":checked").length || x.push(":checked"), N = h.createElement("input"), N.setAttribute("type", "hidden"), E.appendChild(N).setAttribute("name", "D"), b.appendChild(E).disabled = !0, E.querySelectorAll(":disabled").length !== 2 && x.push(":enabled", ":disabled"), N = h.createElement("input"), N.setAttribute("name", ""), E.appendChild(N), E.querySelectorAll("[name='']").length || x.push("\\[" + ae + "*name" + ae + "*=" + ae + `*(?:''|"")`);
          }), G.cssHas || x.push(":has"), x = x.length && new RegExp(x.join("|")), we = function(E, N) {
            if (E === N)
              return o = !0, 0;
            var $ = !E.compareDocumentPosition - !N.compareDocumentPosition;
            return $ || ($ = (E.ownerDocument || E) == (N.ownerDocument || N) ? E.compareDocumentPosition(N) : (
              // Otherwise we know they are disconnected
              1
            ), $ & 1 || !G.sortDetached && N.compareDocumentPosition(E) === $ ? E === h || E.ownerDocument == qe && oe.contains(qe, E) ? -1 : N === h || N.ownerDocument == qe && oe.contains(qe, N) ? 1 : u ? H.call(u, E) - H.call(u, N) : 0 : $ & 4 ? -1 : 1);
          }), h;
        }
        oe.matches = function(v, w) {
          return oe(v, null, null, w);
        }, oe.matchesSelector = function(v, w) {
          if (mt(v), m && !_e[w + " "] && (!x || !x.test(w)))
            try {
              var _ = A.call(v, w);
              if (_ || G.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              v.document && v.document.nodeType !== 11)
                return _;
            } catch {
              _e(w, !0);
            }
          return oe(w, h, null, [v]).length > 0;
        }, oe.contains = function(v, w) {
          return (v.ownerDocument || v) != h && mt(v), a.contains(v, w);
        }, oe.attr = function(v, w) {
          (v.ownerDocument || v) != h && mt(v);
          var _ = t.attrHandle[w.toLowerCase()], E = _ && Q.call(t.attrHandle, w.toLowerCase()) ? _(v, w, !m) : void 0;
          return E !== void 0 ? E : v.getAttribute(w);
        }, oe.error = function(v) {
          throw new Error("Syntax error, unrecognized expression: " + v);
        }, a.uniqueSort = function(v) {
          var w, _ = [], E = 0, N = 0;
          if (o = !G.sortStable, u = !G.sortStable && g.call(v, 0), Gn.call(v, we), o) {
            for (; w = v[N++]; )
              w === v[N] && (E = _.push(N));
            for (; E--; )
              hn.call(v, _[E], 1);
          }
          return u = null, v;
        }, a.fn.uniqueSort = function() {
          return this.pushStack(a.uniqueSort(g.apply(this)));
        }, t = a.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: Je,
          match: nt,
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
              return v[1] = v[1].replace(ct, ft), v[3] = (v[3] || v[4] || v[5] || "").replace(ct, ft), v[2] === "~=" && (v[3] = " " + v[3] + " "), v.slice(0, 4);
            },
            CHILD: function(v) {
              return v[1] = v[1].toLowerCase(), v[1].slice(0, 3) === "nth" ? (v[3] || oe.error(v[0]), v[4] = +(v[4] ? v[5] + (v[6] || 1) : 2 * (v[3] === "even" || v[3] === "odd")), v[5] = +(v[7] + v[8] || v[3] === "odd")) : v[3] && oe.error(v[0]), v;
            },
            PSEUDO: function(v) {
              var w, _ = !v[6] && v[2];
              return nt.CHILD.test(v[0]) ? null : (v[3] ? v[2] = v[4] || v[5] || "" : _ && tt.test(_) && // Get excess from tokenize (recursively)
              (w = en(_, !0)) && // advance to the next closing parenthesis
              (w = _.indexOf(")", _.length - w) - _.length) && (v[0] = v[0].slice(0, w), v[2] = _.slice(0, w)), v.slice(0, 3));
            }
          },
          filter: {
            TAG: function(v) {
              var w = v.replace(ct, ft).toLowerCase();
              return v === "*" ? function() {
                return !0;
              } : function(_) {
                return ne(_, w);
              };
            },
            CLASS: function(v) {
              var w = J[v + " "];
              return w || (w = new RegExp("(^|" + ae + ")" + v + "(" + ae + "|$)")) && J(v, function(_) {
                return w.test(
                  typeof _.className == "string" && _.className || typeof _.getAttribute < "u" && _.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(v, w, _) {
              return function(E) {
                var N = oe.attr(E, v);
                return N == null ? w === "!=" : w ? (N += "", w === "=" ? N === _ : w === "!=" ? N !== _ : w === "^=" ? _ && N.indexOf(_) === 0 : w === "*=" ? _ && N.indexOf(_) > -1 : w === "$=" ? _ && N.slice(-_.length) === _ : w === "~=" ? (" " + N.replace(ie, " ") + " ").indexOf(_) > -1 : w === "|=" ? N === _ || N.slice(0, _.length + 1) === _ + "-" : !1) : !0;
              };
            },
            CHILD: function(v, w, _, E, N) {
              var $ = v.slice(0, 3) !== "nth", L = v.slice(-4) !== "last", V = w === "of-type";
              return E === 1 && N === 0 ? (
                // Shortcut for :nth-*(n)
                function(q) {
                  return !!q.parentNode;
                }
              ) : function(q, K, z) {
                var X, Z, B, le, He, Ce = $ !== L ? "nextSibling" : "previousSibling", We = q.parentNode, rt = V && q.nodeName.toLowerCase(), Lt = !z && !V, De = !1;
                if (We) {
                  if ($) {
                    for (; Ce; ) {
                      for (B = q; B = B[Ce]; )
                        if (V ? ne(B, rt) : B.nodeType === 1)
                          return !1;
                      He = Ce = v === "only" && !He && "nextSibling";
                    }
                    return !0;
                  }
                  if (He = [L ? We.firstChild : We.lastChild], L && Lt) {
                    for (Z = We[O] || (We[O] = {}), X = Z[v] || [], le = X[0] === C && X[1], De = le && X[2], B = le && We.childNodes[le]; B = ++le && B && B[Ce] || // Fallback to seeking `elem` from the start
                    (De = le = 0) || He.pop(); )
                      if (B.nodeType === 1 && ++De && B === q) {
                        Z[v] = [C, le, De];
                        break;
                      }
                  } else if (Lt && (Z = q[O] || (q[O] = {}), X = Z[v] || [], le = X[0] === C && X[1], De = le), De === !1)
                    for (; (B = ++le && B && B[Ce] || (De = le = 0) || He.pop()) && !((V ? ne(B, rt) : B.nodeType === 1) && ++De && (Lt && (Z = B[O] || (B[O] = {}), Z[v] = [C, De]), B === q)); )
                      ;
                  return De -= N, De === E || De % E === 0 && De / E >= 0;
                }
              };
            },
            PSEUDO: function(v, w) {
              var _, E = t.pseudos[v] || t.setFilters[v.toLowerCase()] || oe.error("unsupported pseudo: " + v);
              return E[O] ? E(w) : E.length > 1 ? (_ = [v, v, "", w], t.setFilters.hasOwnProperty(v.toLowerCase()) ? Je(function(N, $) {
                for (var L, V = E(N, w), q = V.length; q--; )
                  L = H.call(N, V[q]), N[L] = !($[L] = V[q]);
              }) : function(N) {
                return E(N, 0, _);
              }) : E;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: Je(function(v) {
              var w = [], _ = [], E = br(v.replace(xt, "$1"));
              return E[O] ? Je(function(N, $, L, V) {
                for (var q, K = E(N, null, V, []), z = N.length; z--; )
                  (q = K[z]) && (N[z] = !($[z] = q));
              }) : function(N, $, L) {
                return w[0] = N, E(w, null, L, _), w[0] = null, !_.pop();
              };
            }),
            has: Je(function(v) {
              return function(w) {
                return oe(v, w).length > 0;
              };
            }),
            contains: Je(function(v) {
              return v = v.replace(ct, ft), function(w) {
                return (w.textContent || a.text(w)).indexOf(v) > -1;
              };
            }),
            // "Whether an element is represented by a :lang() selector
            // is based solely on the element's language value
            // being equal to the identifier C,
            // or beginning with the identifier C immediately followed by "-".
            // The matching of C against the element's language value is performed case-insensitively.
            // The identifier C does not have to be a valid language name."
            // https://www.w3.org/TR/selectors/#lang-pseudo
            lang: Je(function(v) {
              return Zt.test(v || "") || oe.error("unsupported lang: " + v), v = v.replace(ct, ft).toLowerCase(), function(w) {
                var _;
                do
                  if (_ = m ? w.lang : w.getAttribute("xml:lang") || w.getAttribute("lang"))
                    return _ = _.toLowerCase(), _ === v || _.indexOf(v + "-") === 0;
                while ((w = w.parentNode) && w.nodeType === 1);
                return !1;
              };
            }),
            // Miscellaneous
            target: function(v) {
              var w = n.location && n.location.hash;
              return w && w.slice(1) === v.id;
            },
            root: function(v) {
              return v === b;
            },
            focus: function(v) {
              return v === xs() && h.hasFocus() && !!(v.type || v.href || ~v.tabIndex);
            },
            // Boolean properties
            enabled: qi(!1),
            disabled: qi(!0),
            checked: function(v) {
              return ne(v, "input") && !!v.checked || ne(v, "option") && !!v.selected;
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
              return vt.test(v.nodeName);
            },
            input: function(v) {
              return gt.test(v.nodeName);
            },
            button: function(v) {
              return ne(v, "input") && v.type === "button" || ne(v, "button");
            },
            text: function(v) {
              var w;
              return ne(v, "input") && v.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((w = v.getAttribute("type")) == null || w.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Et(function() {
              return [0];
            }),
            last: Et(function(v, w) {
              return [w - 1];
            }),
            eq: Et(function(v, w, _) {
              return [_ < 0 ? _ + w : _];
            }),
            even: Et(function(v, w) {
              for (var _ = 0; _ < w; _ += 2)
                v.push(_);
              return v;
            }),
            odd: Et(function(v, w) {
              for (var _ = 1; _ < w; _ += 2)
                v.push(_);
              return v;
            }),
            lt: Et(function(v, w, _) {
              var E;
              for (_ < 0 ? E = _ + w : _ > w ? E = w : E = _; --E >= 0; )
                v.push(E);
              return v;
            }),
            gt: Et(function(v, w, _) {
              for (var E = _ < 0 ? _ + w : _; ++E < w; )
                v.push(E);
              return v;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = Ts(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = _s(e);
        function Ri() {
        }
        Ri.prototype = t.filters = t.pseudos, t.setFilters = new Ri();
        function en(v, w) {
          var _, E, N, $, L, V, q, K = re[v + " "];
          if (K)
            return w ? 0 : K.slice(0);
          for (L = v, V = [], q = t.preFilter; L; ) {
            (!_ || (E = de.exec(L))) && (E && (L = L.slice(E[0].length) || L), V.push(N = [])), _ = !1, (E = Kt.exec(L)) && (_ = E.shift(), N.push({
              value: _,
              // Cast descendant combinators to space
              type: E[0].replace(xt, " ")
            }), L = L.slice(_.length));
            for ($ in t.filter)
              (E = nt[$].exec(L)) && (!q[$] || (E = q[$](E))) && (_ = E.shift(), N.push({
                value: _,
                type: $,
                matches: E
              }), L = L.slice(_.length));
            if (!_)
              break;
          }
          return w ? L.length : L ? oe.error(v) : (
            // Cache the tokens
            re(v, V).slice(0)
          );
        }
        function _n(v) {
          for (var w = 0, _ = v.length, E = ""; w < _; w++)
            E += v[w].value;
          return E;
        }
        function Cn(v, w, _) {
          var E = w.dir, N = w.next, $ = N || E, L = _ && $ === "parentNode", V = P++;
          return w.first ? (
            // Check against closest ancestor/preceding element
            function(q, K, z) {
              for (; q = q[E]; )
                if (q.nodeType === 1 || L)
                  return v(q, K, z);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(q, K, z) {
              var X, Z, B = [C, V];
              if (z) {
                for (; q = q[E]; )
                  if ((q.nodeType === 1 || L) && v(q, K, z))
                    return !0;
              } else
                for (; q = q[E]; )
                  if (q.nodeType === 1 || L)
                    if (Z = q[O] || (q[O] = {}), N && ne(q, N))
                      q = q[E] || q;
                    else {
                      if ((X = Z[$]) && X[0] === C && X[1] === V)
                        return B[2] = X[2];
                      if (Z[$] = B, B[2] = v(q, K, z))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function vr(v) {
          return v.length > 1 ? function(w, _, E) {
            for (var N = v.length; N--; )
              if (!v[N](w, _, E))
                return !1;
            return !0;
          } : v[0];
        }
        function Cs(v, w, _) {
          for (var E = 0, N = w.length; E < N; E++)
            oe(v, w[E], _);
          return _;
        }
        function En(v, w, _, E, N) {
          for (var $, L = [], V = 0, q = v.length, K = w != null; V < q; V++)
            ($ = v[V]) && (!_ || _($, E, N)) && (L.push($), K && w.push(V));
          return L;
        }
        function mr(v, w, _, E, N, $) {
          return E && !E[O] && (E = mr(E)), N && !N[O] && (N = mr(N, $)), Je(function(L, V, q, K) {
            var z, X, Z, B, le = [], He = [], Ce = V.length, We = L || Cs(
              w || "*",
              q.nodeType ? [q] : q,
              []
            ), rt = v && (L || !w) ? En(We, le, v, q, K) : We;
            if (_ ? (B = N || (L ? v : Ce || E) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              V
            ), _(rt, B, q, K)) : B = rt, E)
              for (z = En(B, He), E(z, [], q, K), X = z.length; X--; )
                (Z = z[X]) && (B[He[X]] = !(rt[He[X]] = Z));
            if (L) {
              if (N || v) {
                if (N) {
                  for (z = [], X = B.length; X--; )
                    (Z = B[X]) && z.push(rt[X] = Z);
                  N(null, B = [], z, K);
                }
                for (X = B.length; X--; )
                  (Z = B[X]) && (z = N ? H.call(L, Z) : le[X]) > -1 && (L[z] = !(V[z] = Z));
              }
            } else
              B = En(
                B === V ? B.splice(Ce, B.length) : B
              ), N ? N(null, V, B, K) : l.apply(V, B);
          });
        }
        function yr(v) {
          for (var w, _, E, N = v.length, $ = t.relative[v[0].type], L = $ || t.relative[" "], V = $ ? 1 : 0, q = Cn(function(X) {
            return X === w;
          }, L, !0), K = Cn(function(X) {
            return H.call(w, X) > -1;
          }, L, !0), z = [function(X, Z, B) {
            var le = !$ && (B || Z != r) || ((w = Z).nodeType ? q(X, Z, B) : K(X, Z, B));
            return w = null, le;
          }]; V < N; V++)
            if (_ = t.relative[v[V].type])
              z = [Cn(vr(z), _)];
            else {
              if (_ = t.filter[v[V].type].apply(null, v[V].matches), _[O]) {
                for (E = ++V; E < N && !t.relative[v[E].type]; E++)
                  ;
                return mr(
                  V > 1 && vr(z),
                  V > 1 && _n(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    v.slice(0, V - 1).concat({ value: v[V - 2].type === " " ? "*" : "" })
                  ).replace(xt, "$1"),
                  _,
                  V < E && yr(v.slice(V, E)),
                  E < N && yr(v = v.slice(E)),
                  E < N && _n(v)
                );
              }
              z.push(_);
            }
          return vr(z);
        }
        function Es(v, w) {
          var _ = w.length > 0, E = v.length > 0, N = function($, L, V, q, K) {
            var z, X, Z, B = 0, le = "0", He = $ && [], Ce = [], We = r, rt = $ || E && t.find.TAG("*", K), Lt = C += We == null ? 1 : Math.random() || 0.1, De = rt.length;
            for (K && (r = L == h || L || K); le !== De && (z = rt[le]) != null; le++) {
              if (E && z) {
                for (X = 0, !L && z.ownerDocument != h && (mt(z), V = !m); Z = v[X++]; )
                  if (Z(z, L || h, V)) {
                    l.call(q, z);
                    break;
                  }
                K && (C = Lt);
              }
              _ && ((z = !Z && z) && B--, $ && He.push(z));
            }
            if (B += le, _ && le !== B) {
              for (X = 0; Z = w[X++]; )
                Z(He, Ce, L, V);
              if ($) {
                if (B > 0)
                  for (; le--; )
                    He[le] || Ce[le] || (Ce[le] = ut.call(q));
                Ce = En(Ce);
              }
              l.apply(q, Ce), K && !$ && Ce.length > 0 && B + w.length > 1 && a.uniqueSort(q);
            }
            return K && (C = Lt, r = We), He;
          };
          return _ ? Je(N) : N;
        }
        function br(v, w) {
          var _, E = [], N = [], $ = Y[v + " "];
          if (!$) {
            for (w || (w = en(v)), _ = w.length; _--; )
              $ = yr(w[_]), $[O] ? E.push($) : N.push($);
            $ = Y(
              v,
              Es(N, E)
            ), $.selector = v;
          }
          return $;
        }
        function Ui(v, w, _, E) {
          var N, $, L, V, q, K = typeof v == "function" && v, z = !E && en(v = K.selector || v);
          if (_ = _ || [], z.length === 1) {
            if ($ = z[0] = z[0].slice(0), $.length > 2 && (L = $[0]).type === "ID" && w.nodeType === 9 && m && t.relative[$[1].type]) {
              if (w = (t.find.ID(
                L.matches[0].replace(ct, ft),
                w
              ) || [])[0], w)
                K && (w = w.parentNode);
              else
                return _;
              v = v.slice($.shift().value.length);
            }
            for (N = nt.needsContext.test(v) ? 0 : $.length; N-- && (L = $[N], !t.relative[V = L.type]); )
              if ((q = t.find[V]) && (E = q(
                L.matches[0].replace(ct, ft),
                pr.test($[0].type) && gr(w.parentNode) || w
              ))) {
                if ($.splice(N, 1), v = E.length && _n($), !v)
                  return l.apply(_, E), _;
                break;
              }
          }
          return (K || br(v, z))(
            E,
            w,
            !m,
            _,
            !w || pr.test(v) && gr(w.parentNode) || w
          ), _;
        }
        G.sortStable = O.split("").sort(we).join("") === O, mt(), G.sortDetached = kt(function(v) {
          return v.compareDocumentPosition(h.createElement("fieldset")) & 1;
        }), a.find = oe, a.expr[":"] = a.expr.pseudos, a.unique = a.uniqueSort, oe.compile = br, oe.select = Ui, oe.setDocument = mt, oe.tokenize = en, oe.escape = a.escapeSelector, oe.getText = a.text, oe.isXML = a.isXMLDoc, oe.selectors = a.expr, oe.support = a.support, oe.uniqueSort = a.uniqueSort;
      })();
      var dt = function(e, t, r) {
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
      }, gn = a.expr.match.needsContext, Gt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Bt(e, t, r) {
        return W(t) ? a.grep(e, function(u, o) {
          return !!t.call(u, o, u) !== r;
        }) : t.nodeType ? a.grep(e, function(u) {
          return u === t !== r;
        }) : typeof t != "string" ? a.grep(e, function(u) {
          return H.call(t, u) > -1 !== r;
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
      var vn, zn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Jn = a.fn.init = function(e, t, r) {
        var u, o;
        if (!e)
          return this;
        if (r = r || vn, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? u = [null, e, null] : u = zn.exec(e), u && (u[1] || !t))
            if (u[1]) {
              if (t = t instanceof a ? t[0] : t, a.merge(this, a.parseHTML(
                u[1],
                t && t.nodeType ? t.ownerDocument || t : j,
                !0
              )), Gt.test(u[1]) && a.isPlainObject(t))
                for (u in t)
                  W(this[u]) ? this[u](t[u]) : this.attr(u, t[u]);
              return this;
            } else
              return o = j.getElementById(u[2]), o && (this[0] = o, this.length = 1), this;
          else
            return !t || t.jquery ? (t || r).find(e) : this.constructor(t).find(e);
        else {
          if (e.nodeType)
            return this[0] = e, this.length = 1, this;
          if (W(e))
            return r.ready !== void 0 ? r.ready(e) : (
              // Execute immediately if ready is not present
              e(a)
            );
        }
        return a.makeArray(e, this);
      };
      Jn.prototype = a.fn, vn = a(j);
      var Ye = /^(?:parents|prev(?:Until|All))/, Xn = {
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
          return e ? typeof e == "string" ? H.call(a(e), this[0]) : H.call(
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
          return dt(e, "parentNode");
        },
        parentsUntil: function(e, t, r) {
          return dt(e, "parentNode", r);
        },
        next: function(e) {
          return mn(e, "nextSibling");
        },
        prev: function(e) {
          return mn(e, "previousSibling");
        },
        nextAll: function(e) {
          return dt(e, "nextSibling");
        },
        prevAll: function(e) {
          return dt(e, "previousSibling");
        },
        nextUntil: function(e, t, r) {
          return dt(e, "nextSibling", r);
        },
        prevUntil: function(e, t, r) {
          return dt(e, "previousSibling", r);
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
          d(e.contentDocument) ? e.contentDocument : (ne(e, "template") && (e = e.content || e), a.merge([], e.childNodes));
        }
      }, function(e, t) {
        a.fn[e] = function(r, u) {
          var o = a.map(this, t, r);
          return e.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (o = a.filter(u, o)), this.length > 1 && (Xn[e] || a.uniqueSort(o), Ye.test(e) && o.reverse()), this.pushStack(o);
        };
      });
      var Re = /[^\x20\t\r\n\f]+/g;
      function Qn(e) {
        var t = {};
        return a.each(e.match(Re) || [], function(r, u) {
          t[u] = !0;
        }), t;
      }
      a.Callbacks = function(e) {
        e = typeof e == "string" ? Qn(e) : a.extend({}, e);
        var t, r, u, o, l = [], h = [], b = -1, m = function() {
          for (o = o || e.once, u = t = !0; h.length; b = -1)
            for (r = h.shift(); ++b < l.length; )
              l[b].apply(r[0], r[1]) === !1 && e.stopOnFalse && (b = l.length, r = !1);
          e.memory || (r = !1), t = !1, o && (r ? l = [] : l = "");
        }, x = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return l && (r && !t && (b = l.length - 1, h.push(r)), function A(O) {
              a.each(O, function(C, P) {
                W(P) ? (!e.unique || !x.has(P)) && l.push(P) : P && P.length && be(P) !== "string" && A(P);
              });
            }(arguments), r && !t && m()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return a.each(arguments, function(A, O) {
              for (var C; (C = a.inArray(O, l, C)) > -1; )
                l.splice(C, 1), C <= b && b--;
            }), this;
          },
          // Check if a given callback is in the list.
          // If no argument is given, return whether or not list has callbacks attached.
          has: function(A) {
            return A ? a.inArray(A, l) > -1 : l.length > 0;
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
          fireWith: function(A, O) {
            return o || (O = O || [], O = [A, O.slice ? O.slice() : O], h.push(O), t || m()), this;
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
      function at(e) {
        return e;
      }
      function st(e) {
        throw e;
      }
      function f(e, t, r, u) {
        var o;
        try {
          e && W(o = e.promise) ? o.call(e).done(t).fail(r) : e && W(o = e.then) ? o.call(e, t, r) : t.apply(void 0, [e].slice(u));
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
                a.each(t, function(b, m) {
                  var x = W(l[m[4]]) && l[m[4]];
                  o[m[1]](function() {
                    var A = x && x.apply(this, arguments);
                    A && W(A.promise) ? A.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[m[0] + "With"](
                      this,
                      x ? [A] : arguments
                    );
                  });
                }), l = null;
              }).promise();
            },
            then: function(l, h, b) {
              var m = 0;
              function x(A, O, C, P) {
                return function() {
                  var J = this, re = arguments, Y = function() {
                    var we, Ze;
                    if (!(A < m)) {
                      if (we = C.apply(J, re), we === O.promise())
                        throw new TypeError("Thenable self-resolution");
                      Ze = we && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof we == "object" || typeof we == "function") && we.then, W(Ze) ? P ? Ze.call(
                        we,
                        x(m, O, at, P),
                        x(m, O, st, P)
                      ) : (m++, Ze.call(
                        we,
                        x(m, O, at, P),
                        x(m, O, st, P),
                        x(
                          m,
                          O,
                          at,
                          O.notifyWith
                        )
                      )) : (C !== at && (J = void 0, re = [we]), (P || O.resolveWith)(J, re));
                    }
                  }, _e = P ? Y : function() {
                    try {
                      Y();
                    } catch (we) {
                      a.Deferred.exceptionHook && a.Deferred.exceptionHook(
                        we,
                        _e.error
                      ), A + 1 >= m && (C !== st && (J = void 0, re = [we]), O.rejectWith(J, re));
                    }
                  };
                  A ? _e() : (a.Deferred.getErrorHook ? _e.error = a.Deferred.getErrorHook() : a.Deferred.getStackHook && (_e.error = a.Deferred.getStackHook()), n.setTimeout(_e));
                };
              }
              return a.Deferred(function(A) {
                t[0][3].add(
                  x(
                    0,
                    A,
                    W(b) ? b : at,
                    A.notifyWith
                  )
                ), t[1][3].add(
                  x(
                    0,
                    A,
                    W(l) ? l : at
                  )
                ), t[2][3].add(
                  x(
                    0,
                    A,
                    W(h) ? h : st
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
            var b = h[2], m = h[5];
            u[h[1]] = b.add, m && b.add(
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
            ), b.add(h[3].fire), o[h[0]] = function() {
              return o[h[0] + "With"](this === o ? void 0 : this, arguments), this;
            }, o[h[0] + "With"] = b.fireWith;
          }), u.promise(o), e && e.call(o, o), o;
        },
        // Deferred helper
        when: function(e) {
          var t = arguments.length, r = t, u = Array(r), o = g.call(arguments), l = a.Deferred(), h = function(b) {
            return function(m) {
              u[b] = this, o[b] = arguments.length > 1 ? g.call(arguments) : m, --t || l.resolveWith(u, o);
            };
          };
          if (t <= 1 && (f(
            e,
            l.done(h(r)).resolve,
            l.reject,
            !t
          ), l.state() === "pending" || W(o[r] && o[r].then)))
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
          (e === !0 ? --a.readyWait : a.isReady) || (a.isReady = !0, !(e !== !0 && --a.readyWait > 0) && y.resolveWith(j, [a]));
        }
      }), a.ready.then = y.then;
      function T() {
        j.removeEventListener("DOMContentLoaded", T), n.removeEventListener("load", T), a.ready();
      }
      j.readyState === "complete" || j.readyState !== "loading" && !j.documentElement.doScroll ? n.setTimeout(a.ready) : (j.addEventListener("DOMContentLoaded", T), n.addEventListener("load", T));
      var D = function(e, t, r, u, o, l, h) {
        var b = 0, m = e.length, x = r == null;
        if (be(r) === "object") {
          o = !0;
          for (b in r)
            D(e, t, b, r[b], !0, l, h);
        } else if (u !== void 0 && (o = !0, W(u) || (h = !0), x && (h ? (t.call(e, u), t = null) : (x = t, t = function(A, O, C) {
          return x.call(a(A), C);
        })), t))
          for (; b < m; b++)
            t(
              e[b],
              r,
              h ? u : u.call(e[b], b, t(e[b], r))
            );
        return o ? e : x ? t.call(e) : m ? t(e[0], r) : l;
      }, I = /^-ms-/, U = /-([a-z])/g;
      function ee(e, t) {
        return t.toUpperCase();
      }
      function ue(e) {
        return e.replace(I, "ms-").replace(U, ee);
      }
      var me = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
      };
      function ge() {
        this.expando = a.expando + ge.uid++;
      }
      ge.uid = 1, ge.prototype = {
        cache: function(e) {
          var t = e[this.expando];
          return t || (t = {}, me(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
          }))), t;
        },
        set: function(e, t, r) {
          var u, o = this.cache(e);
          if (typeof t == "string")
            o[ue(t)] = r;
          else
            for (u in t)
              o[ue(u)] = t[u];
          return o;
        },
        get: function(e, t) {
          return t === void 0 ? this.cache(e) : (
            // Always use camelCase key (gh-2257)
            e[this.expando] && e[this.expando][ue(t)]
          );
        },
        access: function(e, t, r) {
          return t === void 0 || t && typeof t == "string" && r === void 0 ? this.get(e, t) : (this.set(e, t, r), r !== void 0 ? r : t);
        },
        remove: function(e, t) {
          var r, u = e[this.expando];
          if (u !== void 0) {
            if (t !== void 0)
              for (Array.isArray(t) ? t = t.map(ue) : (t = ue(t), t = t in u ? [t] : t.match(Re) || []), r = t.length; r--; )
                delete u[t[r]];
            (t === void 0 || a.isEmptyObject(u)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !a.isEmptyObject(t);
        }
      };
      var k = new ge(), ce = new ge(), Ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Yn = /[A-Z]/g;
      function ve(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Ke.test(e) ? JSON.parse(e) : e;
      }
      function xe(e, t, r) {
        var u;
        if (r === void 0 && e.nodeType === 1)
          if (u = "data-" + t.replace(Yn, "-$&").toLowerCase(), r = e.getAttribute(u), typeof r == "string") {
            try {
              r = ve(r);
            } catch {
            }
            ce.set(e, t, r);
          } else
            r = void 0;
        return r;
      }
      a.extend({
        hasData: function(e) {
          return ce.hasData(e) || k.hasData(e);
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
          return k.access(e, t, r);
        },
        _removeData: function(e, t) {
          k.remove(e, t);
        }
      }), a.fn.extend({
        data: function(e, t) {
          var r, u, o, l = this[0], h = l && l.attributes;
          if (e === void 0) {
            if (this.length && (o = ce.get(l), l.nodeType === 1 && !k.get(l, "hasDataAttrs"))) {
              for (r = h.length; r--; )
                h[r] && (u = h[r].name, u.indexOf("data-") === 0 && (u = ue(u.slice(5)), xe(l, u, o[u])));
              k.set(l, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object" ? this.each(function() {
            ce.set(this, e);
          }) : D(this, function(b) {
            var m;
            if (l && b === void 0)
              return m = ce.get(l, e), m !== void 0 || (m = xe(l, e), m !== void 0) ? m : void 0;
            this.each(function() {
              ce.set(this, e, b);
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
            return t = (t || "fx") + "queue", u = k.get(e, t), r && (!u || Array.isArray(r) ? u = k.access(e, t, a.makeArray(r)) : u.push(r)), u || [];
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
          return k.get(e, r) || k.access(e, r, {
            empty: a.Callbacks("once memory").add(function() {
              k.remove(e, [t + "queue", r]);
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
          var r, u = 1, o = a.Deferred(), l = this, h = this.length, b = function() {
            --u || o.resolveWith(l, [l]);
          };
          for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; h--; )
            r = k.get(l[h], e + "queueHooks"), r && r.empty && (u++, r.empty.add(b));
          return b(), o.promise(t);
        }
      });
      var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ot = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$", "i"), Ue = ["Top", "Right", "Bottom", "Left"], lt = j.documentElement, pt = function(e) {
        return a.contains(e.ownerDocument, e);
      }, Kn = { composed: !0 };
      lt.getRootNode && (pt = function(e) {
        return a.contains(e.ownerDocument, e) || e.getRootNode(Kn) === e.ownerDocument;
      });
      var yn = function(e, t) {
        return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        pt(e) && a.css(e, "display") === "none";
      };
      function ci(e, t, r, u) {
        var o, l, h = 20, b = u ? function() {
          return u.cur();
        } : function() {
          return a.css(e, t, "");
        }, m = b(), x = r && r[3] || (a.cssNumber[t] ? "" : "px"), A = e.nodeType && (a.cssNumber[t] || x !== "px" && +m) && ot.exec(a.css(e, t));
        if (A && A[3] !== x) {
          for (m = m / 2, x = x || A[3], A = +m || 1; h--; )
            a.style(e, t, A + x), (1 - l) * (1 - (l = b() / m || 0.5)) <= 0 && (h = 0), A = A / l;
          A = A * 2, a.style(e, t, A + x), r = r || [];
        }
        return r && (A = +A || +m || 0, o = r[1] ? A + (r[1] + 1) * r[2] : +r[2], u && (u.unit = x, u.start = A, u.end = o)), o;
      }
      var fi = {};
      function qa(e) {
        var t, r = e.ownerDocument, u = e.nodeName, o = fi[u];
        return o || (t = r.body.appendChild(r.createElement(u)), o = a.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), fi[u] = o, o);
      }
      function It(e, t) {
        for (var r, u, o = [], l = 0, h = e.length; l < h; l++)
          u = e[l], u.style && (r = u.style.display, t ? (r === "none" && (o[l] = k.get(u, "display") || null, o[l] || (u.style.display = "")), u.style.display === "" && yn(u) && (o[l] = qa(u))) : r !== "none" && (o[l] = "none", k.set(u, "display", r)));
        for (l = 0; l < h; l++)
          o[l] != null && (e[l].style.display = o[l]);
        return e;
      }
      a.fn.extend({
        show: function() {
          return It(this, !0);
        },
        hide: function() {
          return It(this);
        },
        toggle: function(e) {
          return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
            yn(this) ? a(this).show() : a(this).hide();
          });
        }
      });
      var zt = /^(?:checkbox|radio)$/i, hi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, di = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = j.createDocumentFragment(), t = e.appendChild(j.createElement("div")), r = j.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", G.option = !!t.lastChild;
      })();
      var Ve = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      Ve.tbody = Ve.tfoot = Ve.colgroup = Ve.caption = Ve.thead, Ve.th = Ve.td, G.option || (Ve.optgroup = Ve.option = [1, "<select multiple='multiple'>", "</select>"]);
      function Oe(e, t) {
        var r;
        return typeof e.getElementsByTagName < "u" ? r = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? r = e.querySelectorAll(t || "*") : r = [], t === void 0 || t && ne(e, t) ? a.merge([e], r) : r;
      }
      function Zn(e, t) {
        for (var r = 0, u = e.length; r < u; r++)
          k.set(
            e[r],
            "globalEval",
            !t || k.get(t[r], "globalEval")
          );
      }
      var Ra = /<|&#?\w+;/;
      function pi(e, t, r, u, o) {
        for (var l, h, b, m, x, A, O = t.createDocumentFragment(), C = [], P = 0, J = e.length; P < J; P++)
          if (l = e[P], l || l === 0)
            if (be(l) === "object")
              a.merge(C, l.nodeType ? [l] : l);
            else if (!Ra.test(l))
              C.push(t.createTextNode(l));
            else {
              for (h = h || O.appendChild(t.createElement("div")), b = (hi.exec(l) || ["", ""])[1].toLowerCase(), m = Ve[b] || Ve._default, h.innerHTML = m[1] + a.htmlPrefilter(l) + m[2], A = m[0]; A--; )
                h = h.lastChild;
              a.merge(C, h.childNodes), h = O.firstChild, h.textContent = "";
            }
        for (O.textContent = "", P = 0; l = C[P++]; ) {
          if (u && a.inArray(l, u) > -1) {
            o && o.push(l);
            continue;
          }
          if (x = pt(l), h = Oe(O.appendChild(l), "script"), x && Zn(h), r)
            for (A = 0; l = h[A++]; )
              di.test(l.type || "") && r.push(l);
        }
        return O;
      }
      var gi = /^([^.]*)(?:\.(.+)|)/;
      function Ht() {
        return !0;
      }
      function Pt() {
        return !1;
      }
      function er(e, t, r, u, o, l) {
        var h, b;
        if (typeof t == "object") {
          typeof r != "string" && (u = u || r, r = void 0);
          for (b in t)
            er(e, b, r, u, t[b], l);
          return e;
        }
        if (u == null && o == null ? (o = r, u = r = void 0) : o == null && (typeof r == "string" ? (o = u, u = void 0) : (o = u, u = r, r = void 0)), o === !1)
          o = Pt;
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
          var l, h, b, m, x, A, O, C, P, J, re, Y = k.get(e);
          if (me(e))
            for (r.handler && (l = r, r = l.handler, o = l.selector), o && a.find.matchesSelector(lt, o), r.guid || (r.guid = a.guid++), (m = Y.events) || (m = Y.events = /* @__PURE__ */ Object.create(null)), (h = Y.handle) || (h = Y.handle = function(_e) {
              return typeof a < "u" && a.event.triggered !== _e.type ? a.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(Re) || [""], x = t.length; x--; )
              b = gi.exec(t[x]) || [], P = re = b[1], J = (b[2] || "").split(".").sort(), P && (O = a.event.special[P] || {}, P = (o ? O.delegateType : O.bindType) || P, O = a.event.special[P] || {}, A = a.extend({
                type: P,
                origType: re,
                data: u,
                handler: r,
                guid: r.guid,
                selector: o,
                needsContext: o && a.expr.match.needsContext.test(o),
                namespace: J.join(".")
              }, l), (C = m[P]) || (C = m[P] = [], C.delegateCount = 0, (!O.setup || O.setup.call(e, u, J, h) === !1) && e.addEventListener && e.addEventListener(P, h)), O.add && (O.add.call(e, A), A.handler.guid || (A.handler.guid = r.guid)), o ? C.splice(C.delegateCount++, 0, A) : C.push(A), a.event.global[P] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, r, u, o) {
          var l, h, b, m, x, A, O, C, P, J, re, Y = k.hasData(e) && k.get(e);
          if (!(!Y || !(m = Y.events))) {
            for (t = (t || "").match(Re) || [""], x = t.length; x--; ) {
              if (b = gi.exec(t[x]) || [], P = re = b[1], J = (b[2] || "").split(".").sort(), !P) {
                for (P in m)
                  a.event.remove(e, P + t[x], r, u, !0);
                continue;
              }
              for (O = a.event.special[P] || {}, P = (u ? O.delegateType : O.bindType) || P, C = m[P] || [], b = b[2] && new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = l = C.length; l--; )
                A = C[l], (o || re === A.origType) && (!r || r.guid === A.guid) && (!b || b.test(A.namespace)) && (!u || u === A.selector || u === "**" && A.selector) && (C.splice(l, 1), A.selector && C.delegateCount--, O.remove && O.remove.call(e, A));
              h && !C.length && ((!O.teardown || O.teardown.call(e, J, Y.handle) === !1) && a.removeEvent(e, P, Y.handle), delete m[P]);
            }
            a.isEmptyObject(m) && k.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, r, u, o, l, h, b = new Array(arguments.length), m = a.event.fix(e), x = (k.get(this, "events") || /* @__PURE__ */ Object.create(null))[m.type] || [], A = a.event.special[m.type] || {};
          for (b[0] = m, t = 1; t < arguments.length; t++)
            b[t] = arguments[t];
          if (m.delegateTarget = this, !(A.preDispatch && A.preDispatch.call(this, m) === !1)) {
            for (h = a.event.handlers.call(this, m, x), t = 0; (o = h[t++]) && !m.isPropagationStopped(); )
              for (m.currentTarget = o.elem, r = 0; (l = o.handlers[r++]) && !m.isImmediatePropagationStopped(); )
                (!m.rnamespace || l.namespace === !1 || m.rnamespace.test(l.namespace)) && (m.handleObj = l, m.data = l.data, u = ((a.event.special[l.origType] || {}).handle || l.handler).apply(o.elem, b), u !== void 0 && (m.result = u) === !1 && (m.preventDefault(), m.stopPropagation()));
            return A.postDispatch && A.postDispatch.call(this, m), m.result;
          }
        },
        handlers: function(e, t) {
          var r, u, o, l, h, b = [], m = t.delegateCount, x = e.target;
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
                l.length && b.push({ elem: x, handlers: l });
              }
          }
          return x = this, m < t.length && b.push({ elem: x, handlers: t.slice(m) }), b;
        },
        addProp: function(e, t) {
          Object.defineProperty(a.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: W(t) ? function() {
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
              return zt.test(t.type) && t.click && ne(t, "input") && bn(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return zt.test(t.type) && t.click && ne(t, "input") && bn(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return zt.test(t.type) && t.click && ne(t, "input") && k.get(t, "click") || ne(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function bn(e, t, r) {
        if (!r) {
          k.get(e, t) === void 0 && a.event.add(e, t, Ht);
          return;
        }
        k.set(e, t, !1), a.event.add(e, t, {
          namespace: !1,
          handler: function(u) {
            var o, l = k.get(this, t);
            if (u.isTrigger & 1 && this[t]) {
              if (l)
                (a.event.special[t] || {}).delegateType && u.stopPropagation();
              else if (l = g.call(arguments), k.set(this, t, l), this[t](), o = k.get(this, t), k.set(this, t, !1), l !== o)
                return u.stopImmediatePropagation(), u.preventDefault(), o;
            } else
              l && (k.set(this, t, a.event.trigger(
                l[0],
                l.slice(1),
                this
              )), u.stopPropagation(), u.isImmediatePropagationStopped = Ht);
          }
        });
      }
      a.removeEvent = function(e, t, r) {
        e.removeEventListener && e.removeEventListener(t, r);
      }, a.Event = function(e, t) {
        if (!(this instanceof a.Event))
          return new a.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
        e.returnValue === !1 ? Ht : Pt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && a.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[a.expando] = !0;
      }, a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: Pt,
        isPropagationStopped: Pt,
        isImmediatePropagationStopped: Pt,
        isSimulated: !1,
        preventDefault: function() {
          var e = this.originalEvent;
          this.isDefaultPrevented = Ht, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
          var e = this.originalEvent;
          this.isPropagationStopped = Ht, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
          var e = this.originalEvent;
          this.isImmediatePropagationStopped = Ht, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
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
          if (j.documentMode) {
            var o = k.get(this, "handle"), l = a.event.fix(u);
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
            if (bn(this, e, !0), j.documentMode)
              u = k.get(this, t), u || this.addEventListener(t, r), k.set(this, t, (u || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return bn(this, e), !0;
          },
          teardown: function() {
            var u;
            if (j.documentMode)
              u = k.get(this, t) - 1, u ? k.set(this, t, u) : (this.removeEventListener(t, r), k.remove(this, t));
            else
              return !1;
          },
          // Suppress native focus or blur if we're currently inside
          // a leveraged native-event stack
          _default: function(u) {
            return k.get(u.target, e);
          },
          delegateType: t
        }, a.event.special[t] = {
          setup: function() {
            var u = this.ownerDocument || this.document || this, o = j.documentMode ? this : u, l = k.get(o, t);
            l || (j.documentMode ? this.addEventListener(t, r) : u.addEventListener(e, r, !0)), k.set(o, t, (l || 0) + 1);
          },
          teardown: function() {
            var u = this.ownerDocument || this.document || this, o = j.documentMode ? this : u, l = k.get(o, t) - 1;
            l ? k.set(o, t, l) : (j.documentMode ? this.removeEventListener(t, r) : u.removeEventListener(e, r, !0), k.remove(o, t));
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
          return er(this, e, t, r, u);
        },
        one: function(e, t, r, u) {
          return er(this, e, t, r, u, 1);
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
          return (t === !1 || typeof t == "function") && (r = t, t = void 0), r === !1 && (r = Pt), this.each(function() {
            a.event.remove(this, e, r, t);
          });
        }
      });
      var Ua = /<script|<style|<link/i, Va = /checked\s*(?:[^=]|=\s*.checked.)/i, ja = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function vi(e, t) {
        return ne(e, "table") && ne(t.nodeType !== 11 ? t : t.firstChild, "tr") && a(e).children("tbody")[0] || e;
      }
      function Wa(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function Ga(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function mi(e, t) {
        var r, u, o, l, h, b, m;
        if (t.nodeType === 1) {
          if (k.hasData(e) && (l = k.get(e), m = l.events, m)) {
            k.remove(t, "handle events");
            for (o in m)
              for (r = 0, u = m[o].length; r < u; r++)
                a.event.add(t, o, m[o][r]);
          }
          ce.hasData(e) && (h = ce.access(e), b = a.extend({}, h), ce.set(t, b));
        }
      }
      function Ba(e, t) {
        var r = t.nodeName.toLowerCase();
        r === "input" && zt.test(e.type) ? t.checked = e.checked : (r === "input" || r === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Mt(e, t, r, u) {
        t = F(t);
        var o, l, h, b, m, x, A = 0, O = e.length, C = O - 1, P = t[0], J = W(P);
        if (J || O > 1 && typeof P == "string" && !G.checkClone && Va.test(P))
          return e.each(function(re) {
            var Y = e.eq(re);
            J && (t[0] = P.call(this, re, Y.html())), Mt(Y, t, r, u);
          });
        if (O && (o = pi(t, e[0].ownerDocument, !1, e, u), l = o.firstChild, o.childNodes.length === 1 && (o = l), l || u)) {
          for (h = a.map(Oe(o, "script"), Wa), b = h.length; A < O; A++)
            m = o, A !== C && (m = a.clone(m, !0, !0), b && a.merge(h, Oe(m, "script"))), r.call(e[A], m, A);
          if (b)
            for (x = h[h.length - 1].ownerDocument, a.map(h, Ga), A = 0; A < b; A++)
              m = h[A], di.test(m.type || "") && !k.access(m, "globalEval") && a.contains(x, m) && (m.src && (m.type || "").toLowerCase() !== "module" ? a._evalUrl && !m.noModule && a._evalUrl(m.src, {
                nonce: m.nonce || m.getAttribute("nonce")
              }, x) : pe(m.textContent.replace(ja, ""), m, x));
        }
        return e;
      }
      function yi(e, t, r) {
        for (var u, o = t ? a.filter(t, e) : e, l = 0; (u = o[l]) != null; l++)
          !r && u.nodeType === 1 && a.cleanData(Oe(u)), u.parentNode && (r && pt(u) && Zn(Oe(u, "script")), u.parentNode.removeChild(u));
        return e;
      }
      a.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, r) {
          var u, o, l, h, b = e.cloneNode(!0), m = pt(e);
          if (!G.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !a.isXMLDoc(e))
            for (h = Oe(b), l = Oe(e), u = 0, o = l.length; u < o; u++)
              Ba(l[u], h[u]);
          if (t)
            if (r)
              for (l = l || Oe(e), h = h || Oe(b), u = 0, o = l.length; u < o; u++)
                mi(l[u], h[u]);
            else
              mi(e, b);
          return h = Oe(b, "script"), h.length > 0 && Zn(h, !m && Oe(e, "script")), b;
        },
        cleanData: function(e) {
          for (var t, r, u, o = a.event.special, l = 0; (r = e[l]) !== void 0; l++)
            if (me(r)) {
              if (t = r[k.expando]) {
                if (t.events)
                  for (u in t.events)
                    o[u] ? a.event.remove(r, u) : a.removeEvent(r, u, t.handle);
                r[k.expando] = void 0;
              }
              r[ce.expando] && (r[ce.expando] = void 0);
            }
        }
      }), a.fn.extend({
        detach: function(e) {
          return yi(this, e, !0);
        },
        remove: function(e) {
          return yi(this, e);
        },
        text: function(e) {
          return D(this, function(t) {
            return t === void 0 ? a.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Mt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = vi(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Mt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = vi(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function() {
          return Mt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function() {
          return Mt(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function() {
          for (var e, t = 0; (e = this[t]) != null; t++)
            e.nodeType === 1 && (a.cleanData(Oe(e, !1)), e.textContent = "");
          return this;
        },
        clone: function(e, t) {
          return e = e ?? !1, t = t ?? e, this.map(function() {
            return a.clone(this, e, t);
          });
        },
        html: function(e) {
          return D(this, function(t) {
            var r = this[0] || {}, u = 0, o = this.length;
            if (t === void 0 && r.nodeType === 1)
              return r.innerHTML;
            if (typeof t == "string" && !Ua.test(t) && !Ve[(hi.exec(t) || ["", ""])[1].toLowerCase()]) {
              t = a.htmlPrefilter(t);
              try {
                for (; u < o; u++)
                  r = this[u] || {}, r.nodeType === 1 && (a.cleanData(Oe(r, !1)), r.innerHTML = t);
                r = 0;
              } catch {
              }
            }
            r && this.empty().append(t);
          }, null, e, arguments.length);
        },
        replaceWith: function() {
          var e = [];
          return Mt(this, arguments, function(t) {
            var r = this.parentNode;
            a.inArray(this, e) < 0 && (a.cleanData(Oe(this)), r && r.replaceChild(t, this));
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
          for (var u, o = [], l = a(r), h = l.length - 1, b = 0; b <= h; b++)
            u = b === h ? this : this.clone(!0), a(l[b])[t](u), S.apply(o, u.get());
          return this.pushStack(o);
        };
      });
      var tr = new RegExp("^(" + ke + ")(?!px)[a-z%]+$", "i"), nr = /^--/, wn = function(e) {
        var t = e.ownerDocument.defaultView;
        return (!t || !t.opener) && (t = n), t.getComputedStyle(e);
      }, bi = function(e, t, r) {
        var u, o, l = {};
        for (o in t)
          l[o] = e.style[o], e.style[o] = t[o];
        u = r.call(e);
        for (o in t)
          e.style[o] = l[o];
        return u;
      }, za = new RegExp(Ue.join("|"), "i");
      (function() {
        function e() {
          if (x) {
            m.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", x.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", lt.appendChild(m).appendChild(x);
            var A = n.getComputedStyle(x);
            r = A.top !== "1%", b = t(A.marginLeft) === 12, x.style.right = "60%", l = t(A.right) === 36, u = t(A.width) === 36, x.style.position = "absolute", o = t(x.offsetWidth / 3) === 12, lt.removeChild(m), x = null;
          }
        }
        function t(A) {
          return Math.round(parseFloat(A));
        }
        var r, u, o, l, h, b, m = j.createElement("div"), x = j.createElement("div");
        x.style && (x.style.backgroundClip = "content-box", x.cloneNode(!0).style.backgroundClip = "", G.clearCloneStyle = x.style.backgroundClip === "content-box", a.extend(G, {
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
            return e(), b;
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
            var A, O, C, P;
            return h == null && (A = j.createElement("table"), O = j.createElement("tr"), C = j.createElement("div"), A.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", O.style.cssText = "box-sizing:content-box;border:1px solid", O.style.height = "1px", C.style.height = "9px", C.style.display = "block", lt.appendChild(A).appendChild(O).appendChild(C), P = n.getComputedStyle(O), h = parseInt(P.height, 10) + parseInt(P.borderTopWidth, 10) + parseInt(P.borderBottomWidth, 10) === O.offsetHeight, lt.removeChild(A)), h;
          }
        }));
      })();
      function Jt(e, t, r) {
        var u, o, l, h, b = nr.test(t), m = e.style;
        return r = r || wn(e), r && (h = r.getPropertyValue(t) || r[t], b && h && (h = h.replace(xt, "$1") || void 0), h === "" && !pt(e) && (h = a.style(e, t)), !G.pixelBoxStyles() && tr.test(h) && za.test(t) && (u = m.width, o = m.minWidth, l = m.maxWidth, m.minWidth = m.maxWidth = m.width = h, h = r.width, m.width = u, m.minWidth = o, m.maxWidth = l)), h !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          h + ""
        ) : h;
      }
      function wi(e, t) {
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
      var Fi = ["Webkit", "Moz", "ms"], xi = j.createElement("div").style, Ti = {};
      function Ja(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), r = Fi.length; r--; )
          if (e = Fi[r] + t, e in xi)
            return e;
      }
      function rr(e) {
        var t = a.cssProps[e] || Ti[e];
        return t || (e in xi ? e : Ti[e] = Ja(e) || e);
      }
      var Xa = /^(none|table(?!-c[ea]).+)/, Qa = { position: "absolute", visibility: "hidden", display: "block" }, _i = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function Ci(e, t, r) {
        var u = ot.exec(t);
        return u ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, u[2] - (r || 0)) + (u[3] || "px")
        ) : t;
      }
      function ir(e, t, r, u, o, l) {
        var h = t === "width" ? 1 : 0, b = 0, m = 0, x = 0;
        if (r === (u ? "border" : "content"))
          return 0;
        for (; h < 4; h += 2)
          r === "margin" && (x += a.css(e, r + Ue[h], !0, o)), u ? (r === "content" && (m -= a.css(e, "padding" + Ue[h], !0, o)), r !== "margin" && (m -= a.css(e, "border" + Ue[h] + "Width", !0, o))) : (m += a.css(e, "padding" + Ue[h], !0, o), r !== "padding" ? m += a.css(e, "border" + Ue[h] + "Width", !0, o) : b += a.css(e, "border" + Ue[h] + "Width", !0, o));
        return !u && l >= 0 && (m += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - l - m - b - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), m + x;
      }
      function Ei(e, t, r) {
        var u = wn(e), o = !G.boxSizingReliable() || r, l = o && a.css(e, "boxSizing", !1, u) === "border-box", h = l, b = Jt(e, t, u), m = "offset" + t[0].toUpperCase() + t.slice(1);
        if (tr.test(b)) {
          if (!r)
            return b;
          b = "auto";
        }
        return (!G.boxSizingReliable() && l || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !G.reliableTrDimensions() && ne(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        b === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(b) && a.css(e, "display", !1, u) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (l = a.css(e, "boxSizing", !1, u) === "border-box", h = m in e, h && (b = e[m])), b = parseFloat(b) || 0, b + ir(
          e,
          t,
          r || (l ? "border" : "content"),
          h,
          u,
          // Provide the current computed size to request scroll gutter calculation (gh-3589)
          b
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
            var o, l, h, b = ue(t), m = nr.test(t), x = e.style;
            if (m || (t = rr(b)), h = a.cssHooks[t] || a.cssHooks[b], r !== void 0) {
              if (l = typeof r, l === "string" && (o = ot.exec(r)) && o[1] && (r = ci(e, t, o), l = "number"), r == null || r !== r)
                return;
              l === "number" && !m && (r += o && o[3] || (a.cssNumber[b] ? "" : "px")), !G.clearCloneStyle && r === "" && t.indexOf("background") === 0 && (x[t] = "inherit"), (!h || !("set" in h) || (r = h.set(e, r, u)) !== void 0) && (m ? x.setProperty(t, r) : x[t] = r);
            } else
              return h && "get" in h && (o = h.get(e, !1, u)) !== void 0 ? o : x[t];
          }
        },
        css: function(e, t, r, u) {
          var o, l, h, b = ue(t), m = nr.test(t);
          return m || (t = rr(b)), h = a.cssHooks[t] || a.cssHooks[b], h && "get" in h && (o = h.get(e, !0, r)), o === void 0 && (o = Jt(e, t, u)), o === "normal" && t in _i && (o = _i[t]), r === "" || r ? (l = parseFloat(o), r === !0 || isFinite(l) ? l || 0 : o) : o;
        }
      }), a.each(["height", "width"], function(e, t) {
        a.cssHooks[t] = {
          get: function(r, u, o) {
            if (u)
              return Xa.test(a.css(r, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!r.getClientRects().length || !r.getBoundingClientRect().width) ? bi(r, Qa, function() {
                return Ei(r, t, o);
              }) : Ei(r, t, o);
          },
          set: function(r, u, o) {
            var l, h = wn(r), b = !G.scrollboxSize() && h.position === "absolute", m = b || o, x = m && a.css(r, "boxSizing", !1, h) === "border-box", A = o ? ir(
              r,
              t,
              o,
              x,
              h
            ) : 0;
            return x && b && (A -= Math.ceil(
              r["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(h[t]) - ir(r, t, "border", !1, h) - 0.5
            )), A && (l = ot.exec(u)) && (l[3] || "px") !== "px" && (r.style[t] = u, u = a.css(r, t)), Ci(r, u, A);
          }
        };
      }), a.cssHooks.marginLeft = wi(
        G.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(Jt(e, "marginLeft")) || e.getBoundingClientRect().left - bi(e, { marginLeft: 0 }, function() {
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
              o[e + Ue[u] + t] = l[u] || l[u - 2] || l[0];
            return o;
          }
        }, e !== "margin" && (a.cssHooks[e + t].set = Ci);
      }), a.fn.extend({
        css: function(e, t) {
          return D(this, function(r, u, o) {
            var l, h, b = {}, m = 0;
            if (Array.isArray(u)) {
              for (l = wn(r), h = u.length; m < h; m++)
                b[u[m]] = a.css(r, u[m], !1, l);
              return b;
            }
            return o !== void 0 ? a.style(r, u, o) : a.css(r, u);
          }, e, t, arguments.length > 1);
        }
      });
      function Ie(e, t, r, u, o) {
        return new Ie.prototype.init(e, t, r, u, o);
      }
      a.Tween = Ie, Ie.prototype = {
        constructor: Ie,
        init: function(e, t, r, u, o, l) {
          this.elem = e, this.prop = r, this.easing = o || a.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = u, this.unit = l || (a.cssNumber[r] ? "" : "px");
        },
        cur: function() {
          var e = Ie.propHooks[this.prop];
          return e && e.get ? e.get(this) : Ie.propHooks._default.get(this);
        },
        run: function(e) {
          var t, r = Ie.propHooks[this.prop];
          return this.options.duration ? this.pos = t = a.easing[this.easing](
            e,
            this.options.duration * e,
            0,
            1,
            this.options.duration
          ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : Ie.propHooks._default.set(this), this;
        }
      }, Ie.prototype.init.prototype = Ie.prototype, Ie.propHooks = {
        _default: {
          get: function(e) {
            var t;
            return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = a.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
          },
          set: function(e) {
            a.fx.step[e.prop] ? a.fx.step[e.prop](e) : e.elem.nodeType === 1 && (a.cssHooks[e.prop] || e.elem.style[rr(e.prop)] != null) ? a.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          }
        }
      }, Ie.propHooks.scrollTop = Ie.propHooks.scrollLeft = {
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
      }, a.fx = Ie.prototype.init, a.fx.step = {};
      var $t, Fn, Ya = /^(?:toggle|show|hide)$/, Ka = /queueHooks$/;
      function ur() {
        Fn && (j.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ur) : n.setTimeout(ur, a.fx.interval), a.fx.tick());
      }
      function Si() {
        return n.setTimeout(function() {
          $t = void 0;
        }), $t = Date.now();
      }
      function xn(e, t) {
        var r, u = 0, o = { height: e };
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
          r = Ue[u], o["margin" + r] = o["padding" + r] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function Ai(e, t, r) {
        for (var u, o = (ze.tweeners[t] || []).concat(ze.tweeners["*"]), l = 0, h = o.length; l < h; l++)
          if (u = o[l].call(r, t, e))
            return u;
      }
      function Za(e, t, r) {
        var u, o, l, h, b, m, x, A, O = "width" in t || "height" in t, C = this, P = {}, J = e.style, re = e.nodeType && yn(e), Y = k.get(e, "fxshow");
        r.queue || (h = a._queueHooks(e, "fx"), h.unqueued == null && (h.unqueued = 0, b = h.empty.fire, h.empty.fire = function() {
          h.unqueued || b();
        }), h.unqueued++, C.always(function() {
          C.always(function() {
            h.unqueued--, a.queue(e, "fx").length || h.empty.fire();
          });
        }));
        for (u in t)
          if (o = t[u], Ya.test(o)) {
            if (delete t[u], l = l || o === "toggle", o === (re ? "hide" : "show"))
              if (o === "show" && Y && Y[u] !== void 0)
                re = !0;
              else
                continue;
            P[u] = Y && Y[u] || a.style(e, u);
          }
        if (m = !a.isEmptyObject(t), !(!m && a.isEmptyObject(P))) {
          O && e.nodeType === 1 && (r.overflow = [J.overflow, J.overflowX, J.overflowY], x = Y && Y.display, x == null && (x = k.get(e, "display")), A = a.css(e, "display"), A === "none" && (x ? A = x : (It([e], !0), x = e.style.display || x, A = a.css(e, "display"), It([e]))), (A === "inline" || A === "inline-block" && x != null) && a.css(e, "float") === "none" && (m || (C.done(function() {
            J.display = x;
          }), x == null && (A = J.display, x = A === "none" ? "" : A)), J.display = "inline-block")), r.overflow && (J.overflow = "hidden", C.always(function() {
            J.overflow = r.overflow[0], J.overflowX = r.overflow[1], J.overflowY = r.overflow[2];
          })), m = !1;
          for (u in P)
            m || (Y ? "hidden" in Y && (re = Y.hidden) : Y = k.access(e, "fxshow", { display: x }), l && (Y.hidden = !re), re && It([e], !0), C.done(function() {
              re || It([e]), k.remove(e, "fxshow");
              for (u in P)
                a.style(e, u, P[u]);
            })), m = Ai(re ? Y[u] : 0, u, C), u in Y || (Y[u] = m.start, re && (m.end = m.start, m.start = 0));
        }
      }
      function es(e, t) {
        var r, u, o, l, h;
        for (r in e)
          if (u = ue(r), o = t[u], l = e[r], Array.isArray(l) && (o = l[1], l = e[r] = l[0]), r !== u && (e[u] = l, delete e[r]), h = a.cssHooks[u], h && "expand" in h) {
            l = h.expand(l), delete e[u];
            for (r in l)
              r in e || (e[r] = l[r], t[r] = o);
          } else
            t[u] = o;
      }
      function ze(e, t, r) {
        var u, o, l = 0, h = ze.prefilters.length, b = a.Deferred().always(function() {
          delete m.elem;
        }), m = function() {
          if (o)
            return !1;
          for (var O = $t || Si(), C = Math.max(0, x.startTime + x.duration - O), P = C / x.duration || 0, J = 1 - P, re = 0, Y = x.tweens.length; re < Y; re++)
            x.tweens[re].run(J);
          return b.notifyWith(e, [x, J, C]), J < 1 && Y ? C : (Y || b.notifyWith(e, [x, 1, 0]), b.resolveWith(e, [x]), !1);
        }, x = b.promise({
          elem: e,
          props: a.extend({}, t),
          opts: a.extend(!0, {
            specialEasing: {},
            easing: a.easing._default
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: $t || Si(),
          duration: r.duration,
          tweens: [],
          createTween: function(O, C) {
            var P = a.Tween(
              e,
              x.opts,
              O,
              C,
              x.opts.specialEasing[O] || x.opts.easing
            );
            return x.tweens.push(P), P;
          },
          stop: function(O) {
            var C = 0, P = O ? x.tweens.length : 0;
            if (o)
              return this;
            for (o = !0; C < P; C++)
              x.tweens[C].run(1);
            return O ? (b.notifyWith(e, [x, 1, 0]), b.resolveWith(e, [x, O])) : b.rejectWith(e, [x, O]), this;
          }
        }), A = x.props;
        for (es(A, x.opts.specialEasing); l < h; l++)
          if (u = ze.prefilters[l].call(x, e, A, x.opts), u)
            return W(u.stop) && (a._queueHooks(x.elem, x.opts.queue).stop = u.stop.bind(u)), u;
        return a.map(A, Ai, x), W(x.opts.start) && x.opts.start.call(e, x), x.progress(x.opts.progress).done(x.opts.done, x.opts.complete).fail(x.opts.fail).always(x.opts.always), a.fx.timer(
          a.extend(m, {
            elem: e,
            anim: x,
            queue: x.opts.queue
          })
        ), x;
      }
      a.Animation = a.extend(ze, {
        tweeners: {
          "*": [function(e, t) {
            var r = this.createTween(e, t);
            return ci(r.elem, e, ot.exec(t), r), r;
          }]
        },
        tweener: function(e, t) {
          W(e) ? (t = e, e = ["*"]) : e = e.match(Re);
          for (var r, u = 0, o = e.length; u < o; u++)
            r = e[u], ze.tweeners[r] = ze.tweeners[r] || [], ze.tweeners[r].unshift(t);
        },
        prefilters: [Za],
        prefilter: function(e, t) {
          t ? ze.prefilters.unshift(e) : ze.prefilters.push(e);
        }
      }), a.speed = function(e, t, r) {
        var u = e && typeof e == "object" ? a.extend({}, e) : {
          complete: r || !r && t || W(e) && e,
          duration: e,
          easing: r && t || t && !W(t) && t
        };
        return a.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration in a.fx.speeds ? u.duration = a.fx.speeds[u.duration] : u.duration = a.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
          W(u.old) && u.old.call(this), u.queue && a.dequeue(this, u.queue);
        }, u;
      }, a.fn.extend({
        fadeTo: function(e, t, r, u) {
          return this.filter(yn).css("opacity", 0).show().end().animate({ opacity: t }, e, r, u);
        },
        animate: function(e, t, r, u) {
          var o = a.isEmptyObject(e), l = a.speed(t, r, u), h = function() {
            var b = ze(this, a.extend({}, e), l);
            (o || k.get(this, "finish")) && b.stop(!0);
          };
          return h.finish = h, o || l.queue === !1 ? this.each(h) : this.queue(l.queue, h);
        },
        stop: function(e, t, r) {
          var u = function(o) {
            var l = o.stop;
            delete o.stop, l(r);
          };
          return typeof e != "string" && (r = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var o = !0, l = e != null && e + "queueHooks", h = a.timers, b = k.get(this);
            if (l)
              b[l] && b[l].stop && u(b[l]);
            else
              for (l in b)
                b[l] && b[l].stop && Ka.test(l) && u(b[l]);
            for (l = h.length; l--; )
              h[l].elem === this && (e == null || h[l].queue === e) && (h[l].anim.stop(r), o = !1, h.splice(l, 1));
            (o || !r) && a.dequeue(this, e);
          });
        },
        finish: function(e) {
          return e !== !1 && (e = e || "fx"), this.each(function() {
            var t, r = k.get(this), u = r[e + "queue"], o = r[e + "queueHooks"], l = a.timers, h = u ? u.length : 0;
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
        Fn || (Fn = !0, ur());
      }, a.fx.stop = function() {
        Fn = null;
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
        var e = j.createElement("input"), t = j.createElement("select"), r = t.appendChild(j.createElement("option"));
        e.type = "checkbox", G.checkOn = e.value !== "", G.optSelected = r.selected, e = j.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = e.value === "t";
      }();
      var Di, Xt = a.expr.attrHandle;
      a.fn.extend({
        attr: function(e, t) {
          return D(this, a.attr, e, t, arguments.length > 1);
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
              if (!G.radioValue && t === "radio" && ne(e, "input")) {
                var r = e.value;
                return e.setAttribute("type", t), r && (e.value = r), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var r, u = 0, o = t && t.match(Re);
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
          var h, b, m = o.toLowerCase();
          return l || (b = Xt[m], Xt[m] = h, h = r(u, o, l) != null ? m : null, Xt[m] = b), h;
        };
      });
      var ts = /^(?:input|select|textarea|button)$/i, ns = /^(?:a|area)$/i;
      a.fn.extend({
        prop: function(e, t) {
          return D(this, a.prop, e, t, arguments.length > 1);
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
              return t ? parseInt(t, 10) : ts.test(e.nodeName) || ns.test(e.nodeName) && e.href ? 0 : -1;
            }
          }
        },
        propFix: {
          for: "htmlFor",
          class: "className"
        }
      }), G.optSelected || (a.propHooks.selected = {
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
      function Tt(e) {
        var t = e.match(Re) || [];
        return t.join(" ");
      }
      function _t(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function ar(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(Re) || [] : [];
      }
      a.fn.extend({
        addClass: function(e) {
          var t, r, u, o, l, h;
          return W(e) ? this.each(function(b) {
            a(this).addClass(e.call(this, b, _t(this)));
          }) : (t = ar(e), t.length ? this.each(function() {
            if (u = _t(this), r = this.nodeType === 1 && " " + Tt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                o = t[l], r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              h = Tt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, r, u, o, l, h;
          return W(e) ? this.each(function(b) {
            a(this).removeClass(e.call(this, b, _t(this)));
          }) : arguments.length ? (t = ar(e), t.length ? this.each(function() {
            if (u = _t(this), r = this.nodeType === 1 && " " + Tt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                for (o = t[l]; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              h = Tt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var r, u, o, l, h = typeof e, b = h === "string" || Array.isArray(e);
          return W(e) ? this.each(function(m) {
            a(this).toggleClass(
              e.call(this, m, _t(this), t),
              t
            );
          }) : typeof t == "boolean" && b ? t ? this.addClass(e) : this.removeClass(e) : (r = ar(e), this.each(function() {
            if (b)
              for (l = a(this), o = 0; o < r.length; o++)
                u = r[o], l.hasClass(u) ? l.removeClass(u) : l.addClass(u);
            else
              (e === void 0 || h === "boolean") && (u = _t(this), u && k.set(this, "__className__", u), this.setAttribute && this.setAttribute(
                "class",
                u || e === !1 ? "" : k.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, r, u = 0;
          for (t = " " + e + " "; r = this[u++]; )
            if (r.nodeType === 1 && (" " + Tt(_t(r)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var rs = /\r/g;
      a.fn.extend({
        val: function(e) {
          var t, r, u, o = this[0];
          return arguments.length ? (u = W(e), this.each(function(l) {
            var h;
            this.nodeType === 1 && (u ? h = e.call(this, l, a(this).val()) : h = e, h == null ? h = "" : typeof h == "number" ? h += "" : Array.isArray(h) && (h = a.map(h, function(b) {
              return b == null ? "" : b + "";
            })), t = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, h, "value") === void 0) && (this.value = h));
          })) : o ? (t = a.valHooks[o.type] || a.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (r = t.get(o, "value")) !== void 0 ? r : (r = o.value, typeof r == "string" ? r.replace(rs, "") : r ?? "")) : void 0;
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
              Tt(a.text(e));
            }
          },
          select: {
            get: function(e) {
              var t, r, u, o = e.options, l = e.selectedIndex, h = e.type === "select-one", b = h ? null : [], m = h ? l + 1 : o.length;
              for (l < 0 ? u = m : u = h ? l : 0; u < m; u++)
                if (r = o[u], (r.selected || u === l) && // Don't return options that are disabled or in a disabled optgroup
                !r.disabled && (!r.parentNode.disabled || !ne(r.parentNode, "optgroup"))) {
                  if (t = a(r).val(), h)
                    return t;
                  b.push(t);
                }
              return b;
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
        }, G.checkOn || (a.valHooks[this].get = function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        });
      });
      var Qt = n.location, Ni = { guid: Date.now() }, sr = /\?/;
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
      var Oi = /^(?:focusinfocus|focusoutblur)$/, Ii = function(e) {
        e.stopPropagation();
      };
      a.extend(a.event, {
        trigger: function(e, t, r, u) {
          var o, l, h, b, m, x, A, O, C = [r || j], P = Q.call(e, "type") ? e.type : e, J = Q.call(e, "namespace") ? e.namespace.split(".") : [];
          if (l = O = h = r = r || j, !(r.nodeType === 3 || r.nodeType === 8) && !Oi.test(P + a.event.triggered) && (P.indexOf(".") > -1 && (J = P.split("."), P = J.shift(), J.sort()), m = P.indexOf(":") < 0 && "on" + P, e = e[a.expando] ? e : new a.Event(P, typeof e == "object" && e), e.isTrigger = u ? 2 : 3, e.namespace = J.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = t == null ? [e] : a.makeArray(t, [e]), A = a.event.special[P] || {}, !(!u && A.trigger && A.trigger.apply(r, t) === !1))) {
            if (!u && !A.noBubble && !Te(r)) {
              for (b = A.delegateType || P, Oi.test(b + P) || (l = l.parentNode); l; l = l.parentNode)
                C.push(l), h = l;
              h === (r.ownerDocument || j) && C.push(h.defaultView || h.parentWindow || n);
            }
            for (o = 0; (l = C[o++]) && !e.isPropagationStopped(); )
              O = l, e.type = o > 1 ? b : A.bindType || P, x = (k.get(l, "events") || /* @__PURE__ */ Object.create(null))[e.type] && k.get(l, "handle"), x && x.apply(l, t), x = m && l[m], x && x.apply && me(l) && (e.result = x.apply(l, t), e.result === !1 && e.preventDefault());
            return e.type = P, !u && !e.isDefaultPrevented() && (!A._default || A._default.apply(C.pop(), t) === !1) && me(r) && m && W(r[P]) && !Te(r) && (h = r[m], h && (r[m] = null), a.event.triggered = P, e.isPropagationStopped() && O.addEventListener(P, Ii), r[P](), e.isPropagationStopped() && O.removeEventListener(P, Ii), a.event.triggered = void 0, h && (r[m] = h)), e.result;
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
      var is = /\[\]$/, Hi = /\r?\n/g, us = /^(?:submit|button|image|reset|file)$/i, as = /^(?:input|select|textarea|keygen)/i;
      function or(e, t, r, u) {
        var o;
        if (Array.isArray(t))
          a.each(t, function(l, h) {
            r || is.test(e) ? u(e, h) : or(
              e + "[" + (typeof h == "object" && h != null ? l : "") + "]",
              h,
              r,
              u
            );
          });
        else if (!r && be(t) === "object")
          for (o in t)
            or(e + "[" + o + "]", t[o], r, u);
        else
          u(e, t);
      }
      a.param = function(e, t) {
        var r, u = [], o = function(l, h) {
          var b = W(h) ? h() : h;
          u[u.length] = encodeURIComponent(l) + "=" + encodeURIComponent(b ?? "");
        };
        if (e == null)
          return "";
        if (Array.isArray(e) || e.jquery && !a.isPlainObject(e))
          a.each(e, function() {
            o(this.name, this.value);
          });
        else
          for (r in e)
            or(r, e[r], t, o);
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
            return this.name && !a(this).is(":disabled") && as.test(this.nodeName) && !us.test(e) && (this.checked || !zt.test(e));
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
      var ss = /%20/g, os = /#.*$/, ls = /([?&])_=[^&]*/, cs = /^(.*?):[ \t]*([^\r\n]*)$/mg, fs = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, hs = /^(?:GET|HEAD)$/, ds = /^\/\//, Pi = {}, lr = {}, Mi = "*/".concat("*"), cr = j.createElement("a");
      cr.href = Qt.href;
      function $i(e) {
        return function(t, r) {
          typeof t != "string" && (r = t, t = "*");
          var u, o = 0, l = t.toLowerCase().match(Re) || [];
          if (W(r))
            for (; u = l[o++]; )
              u[0] === "+" ? (u = u.slice(1) || "*", (e[u] = e[u] || []).unshift(r)) : (e[u] = e[u] || []).push(r);
        };
      }
      function ki(e, t, r, u) {
        var o = {}, l = e === lr;
        function h(b) {
          var m;
          return o[b] = !0, a.each(e[b] || [], function(x, A) {
            var O = A(t, r, u);
            if (typeof O == "string" && !l && !o[O])
              return t.dataTypes.unshift(O), h(O), !1;
            if (l)
              return !(m = O);
          }), m;
        }
        return h(t.dataTypes[0]) || !o["*"] && h("*");
      }
      function fr(e, t) {
        var r, u, o = a.ajaxSettings.flatOptions || {};
        for (r in t)
          t[r] !== void 0 && ((o[r] ? e : u || (u = {}))[r] = t[r]);
        return u && a.extend(!0, e, u), e;
      }
      function ps(e, t, r) {
        for (var u, o, l, h, b = e.contents, m = e.dataTypes; m[0] === "*"; )
          m.shift(), u === void 0 && (u = e.mimeType || t.getResponseHeader("Content-Type"));
        if (u) {
          for (o in b)
            if (b[o] && b[o].test(u)) {
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
      function gs(e, t, r, u) {
        var o, l, h, b, m, x = {}, A = e.dataTypes.slice();
        if (A[1])
          for (h in e.converters)
            x[h.toLowerCase()] = e.converters[h];
        for (l = A.shift(); l; )
          if (e.responseFields[l] && (r[e.responseFields[l]] = t), !m && u && e.dataFilter && (t = e.dataFilter(t, e.dataType)), m = l, l = A.shift(), l) {
            if (l === "*")
              l = m;
            else if (m !== "*" && m !== l) {
              if (h = x[m + " " + l] || x["* " + l], !h) {
                for (o in x)
                  if (b = o.split(" "), b[1] === l && (h = x[m + " " + b[0]] || x["* " + b[0]], h)) {
                    h === !0 ? h = x[o] : x[o] !== !0 && (l = b[0], A.unshift(b[1]));
                    break;
                  }
              }
              if (h !== !0)
                if (h && e.throws)
                  t = h(t);
                else
                  try {
                    t = h(t);
                  } catch (O) {
                    return {
                      state: "parsererror",
                      error: h ? O : "No conversion from " + m + " to " + l
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
          isLocal: fs.test(Qt.protocol),
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
            "*": Mi,
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
            fr(fr(e, a.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            fr(a.ajaxSettings, e)
          );
        },
        ajaxPrefilter: $i(Pi),
        ajaxTransport: $i(lr),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var r, u, o, l, h, b, m, x, A, O, C = a.ajaxSetup({}, t), P = C.context || C, J = C.context && (P.nodeType || P.jquery) ? a(P) : a.event, re = a.Deferred(), Y = a.Callbacks("once memory"), _e = C.statusCode || {}, we = {}, Ze = {}, et = "canceled", te = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(ie) {
              var de;
              if (m) {
                if (!l)
                  for (l = {}; de = cs.exec(o); )
                    l[de[1].toLowerCase() + " "] = (l[de[1].toLowerCase() + " "] || []).concat(de[2]);
                de = l[ie.toLowerCase() + " "];
              }
              return de == null ? null : de.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return m ? o : null;
            },
            // Caches the header
            setRequestHeader: function(ie, de) {
              return m == null && (ie = Ze[ie.toLowerCase()] = Ze[ie.toLowerCase()] || ie, we[ie] = de), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(ie) {
              return m == null && (C.mimeType = ie), this;
            },
            // Status-dependent callbacks
            statusCode: function(ie) {
              var de;
              if (ie)
                if (m)
                  te.always(ie[te.status]);
                else
                  for (de in ie)
                    _e[de] = [_e[de], ie[de]];
              return this;
            },
            // Cancel the request
            abort: function(ie) {
              var de = ie || et;
              return r && r.abort(de), Ct(0, de), this;
            }
          };
          if (re.promise(te), C.url = ((e || C.url || Qt.href) + "").replace(ds, Qt.protocol + "//"), C.type = t.method || t.type || C.method || C.type, C.dataTypes = (C.dataType || "*").toLowerCase().match(Re) || [""], C.crossDomain == null) {
            b = j.createElement("a");
            try {
              b.href = C.url, b.href = b.href, C.crossDomain = cr.protocol + "//" + cr.host != b.protocol + "//" + b.host;
            } catch {
              C.crossDomain = !0;
            }
          }
          if (C.data && C.processData && typeof C.data != "string" && (C.data = a.param(C.data, C.traditional)), ki(Pi, C, t, te), m)
            return te;
          x = a.event && C.global, x && a.active++ === 0 && a.event.trigger("ajaxStart"), C.type = C.type.toUpperCase(), C.hasContent = !hs.test(C.type), u = C.url.replace(os, ""), C.hasContent ? C.data && C.processData && (C.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (C.data = C.data.replace(ss, "+")) : (O = C.url.slice(u.length), C.data && (C.processData || typeof C.data == "string") && (u += (sr.test(u) ? "&" : "?") + C.data, delete C.data), C.cache === !1 && (u = u.replace(ls, "$1"), O = (sr.test(u) ? "&" : "?") + "_=" + Ni.guid++ + O), C.url = u + O), C.ifModified && (a.lastModified[u] && te.setRequestHeader("If-Modified-Since", a.lastModified[u]), a.etag[u] && te.setRequestHeader("If-None-Match", a.etag[u])), (C.data && C.hasContent && C.contentType !== !1 || t.contentType) && te.setRequestHeader("Content-Type", C.contentType), te.setRequestHeader(
            "Accept",
            C.dataTypes[0] && C.accepts[C.dataTypes[0]] ? C.accepts[C.dataTypes[0]] + (C.dataTypes[0] !== "*" ? ", " + Mi + "; q=0.01" : "") : C.accepts["*"]
          );
          for (A in C.headers)
            te.setRequestHeader(A, C.headers[A]);
          if (C.beforeSend && (C.beforeSend.call(P, te, C) === !1 || m))
            return te.abort();
          if (et = "abort", Y.add(C.complete), te.done(C.success), te.fail(C.error), r = ki(lr, C, t, te), !r)
            Ct(-1, "No Transport");
          else {
            if (te.readyState = 1, x && J.trigger("ajaxSend", [te, C]), m)
              return te;
            C.async && C.timeout > 0 && (h = n.setTimeout(function() {
              te.abort("timeout");
            }, C.timeout));
            try {
              m = !1, r.send(we, Ct);
            } catch (ie) {
              if (m)
                throw ie;
              Ct(-1, ie);
            }
          }
          function Ct(ie, de, Kt, dr) {
            var tt, Zt, nt, gt, vt, je = de;
            m || (m = !0, h && n.clearTimeout(h), r = void 0, o = dr || "", te.readyState = ie > 0 ? 4 : 0, tt = ie >= 200 && ie < 300 || ie === 304, Kt && (gt = ps(C, te, Kt)), !tt && a.inArray("script", C.dataTypes) > -1 && a.inArray("json", C.dataTypes) < 0 && (C.converters["text script"] = function() {
            }), gt = gs(C, gt, te, tt), tt ? (C.ifModified && (vt = te.getResponseHeader("Last-Modified"), vt && (a.lastModified[u] = vt), vt = te.getResponseHeader("etag"), vt && (a.etag[u] = vt)), ie === 204 || C.type === "HEAD" ? je = "nocontent" : ie === 304 ? je = "notmodified" : (je = gt.state, Zt = gt.data, nt = gt.error, tt = !nt)) : (nt = je, (ie || !je) && (je = "error", ie < 0 && (ie = 0))), te.status = ie, te.statusText = (de || je) + "", tt ? re.resolveWith(P, [Zt, je, te]) : re.rejectWith(P, [te, je, nt]), te.statusCode(_e), _e = void 0, x && J.trigger(
              tt ? "ajaxSuccess" : "ajaxError",
              [te, C, tt ? Zt : nt]
            ), Y.fireWith(P, [te, je]), x && (J.trigger("ajaxComplete", [te, C]), --a.active || a.event.trigger("ajaxStop")));
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
          return W(u) && (l = l || o, o = u, u = void 0), a.ajax(a.extend({
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
          return this[0] && (W(e) && (e = e.call(this[0])), t = a(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
            for (var r = this; r.firstElementChild; )
              r = r.firstElementChild;
            return r;
          }).append(this)), this;
        },
        wrapInner: function(e) {
          return W(e) ? this.each(function(t) {
            a(this).wrapInner(e.call(this, t));
          }) : this.each(function() {
            var t = a(this), r = t.contents();
            r.length ? r.wrapAll(e) : t.append(e);
          });
        },
        wrap: function(e) {
          var t = W(e);
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
      var vs = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, Yt = a.ajaxSettings.xhr();
      G.cors = !!Yt && "withCredentials" in Yt, G.ajax = Yt = !!Yt, a.ajaxTransport(function(e) {
        var t, r;
        if (G.cors || Yt && !e.crossDomain)
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
              t = function(b) {
                return function() {
                  t && (t = r = h.onload = h.onerror = h.onabort = h.ontimeout = h.onreadystatechange = null, b === "abort" ? h.abort() : b === "error" ? typeof h.status != "number" ? o(0, "error") : o(
                    // File: protocol always yields status 0; see trac-8605, trac-14207
                    h.status,
                    h.statusText
                  ) : o(
                    vs[h.status] || h.status,
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
              } catch (b) {
                if (t)
                  throw b;
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
              }), j.head.appendChild(t[0]);
            },
            abort: function() {
              r && r();
            }
          };
        }
      });
      var Li = [], hr = /(=)\?(?=&|$)|\?\?/;
      a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = Li.pop() || a.expando + "_" + Ni.guid++;
          return this[e] = !0, e;
        }
      }), a.ajaxPrefilter("json jsonp", function(e, t, r) {
        var u, o, l, h = e.jsonp !== !1 && (hr.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && hr.test(e.data) && "data");
        if (h || e.dataTypes[0] === "jsonp")
          return u = e.jsonpCallback = W(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, h ? e[h] = e[h].replace(hr, "$1" + u) : e.jsonp !== !1 && (e.url += (sr.test(e.url) ? "&" : "?") + e.jsonp + "=" + u), e.converters["script json"] = function() {
            return l || a.error(u + " was not called"), l[0];
          }, e.dataTypes[0] = "json", o = n[u], n[u] = function() {
            l = arguments;
          }, r.always(function() {
            o === void 0 ? a(n).removeProp(u) : n[u] = o, e[u] && (e.jsonpCallback = t.jsonpCallback, Li.push(u)), l && W(o) && o(l[0]), l = o = void 0;
          }), "script";
      }), G.createHTMLDocument = function() {
        var e = j.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), a.parseHTML = function(e, t, r) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (r = t, t = !1);
        var u, o, l;
        return t || (G.createHTMLDocument ? (t = j.implementation.createHTMLDocument(""), u = t.createElement("base"), u.href = j.location.href, t.head.appendChild(u)) : t = j), o = Gt.exec(e), l = !r && [], o ? [t.createElement(o[1])] : (o = pi([e], t, l), l && l.length && a(l).remove(), a.merge([], o.childNodes));
      }, a.fn.load = function(e, t, r) {
        var u, o, l, h = this, b = e.indexOf(" ");
        return b > -1 && (u = Tt(e.slice(b)), e = e.slice(0, b)), W(t) ? (r = t, t = void 0) : t && typeof t == "object" && (o = "POST"), h.length > 0 && a.ajax({
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
          var u, o, l, h, b, m, x, A = a.css(e, "position"), O = a(e), C = {};
          A === "static" && (e.style.position = "relative"), b = O.offset(), l = a.css(e, "top"), m = a.css(e, "left"), x = (A === "absolute" || A === "fixed") && (l + m).indexOf("auto") > -1, x ? (u = O.position(), h = u.top, o = u.left) : (h = parseFloat(l) || 0, o = parseFloat(m) || 0), W(t) && (t = t.call(e, r, a.extend({}, b))), t.top != null && (C.top = t.top - b.top + h), t.left != null && (C.left = t.left - b.left + o), "using" in t ? t.using.call(e, C) : O.css(C);
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
            return e || lt;
          });
        }
      }), a.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
        var r = t === "pageYOffset";
        a.fn[e] = function(u) {
          return D(this, function(o, l, h) {
            var b;
            if (Te(o) ? b = o : o.nodeType === 9 && (b = o.defaultView), h === void 0)
              return b ? b[t] : o[l];
            b ? b.scrollTo(
              r ? b.pageXOffset : h,
              r ? h : b.pageYOffset
            ) : o[l] = h;
          }, e, u, arguments.length);
        };
      }), a.each(["top", "left"], function(e, t) {
        a.cssHooks[t] = wi(
          G.pixelPosition,
          function(r, u) {
            if (u)
              return u = Jt(r, t), tr.test(u) ? a(r).position()[t] + "px" : u;
          }
        );
      }), a.each({ Height: "height", Width: "width" }, function(e, t) {
        a.each({
          padding: "inner" + e,
          content: t,
          "": "outer" + e
        }, function(r, u) {
          a.fn[u] = function(o, l) {
            var h = arguments.length && (r || typeof o != "boolean"), b = r || (o === !0 || l === !0 ? "margin" : "border");
            return D(this, function(m, x, A) {
              var O;
              return Te(m) ? u.indexOf("outer") === 0 ? m["inner" + e] : m.document.documentElement["client" + e] : m.nodeType === 9 ? (O = m.documentElement, Math.max(
                m.body["scroll" + e],
                O["scroll" + e],
                m.body["offset" + e],
                O["offset" + e],
                O["client" + e]
              )) : A === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                a.css(m, x, b)
              ) : (
                // Set width or height on the element
                a.style(m, x, A, b)
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
      var ms = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
      a.proxy = function(e, t) {
        var r, u, o;
        if (typeof t == "string" && (r = e[t], t = e, e = r), !!W(e))
          return u = g.call(arguments, 2), o = function() {
            return e.apply(t || this, u.concat(g.call(arguments)));
          }, o.guid = e.guid = e.guid || a.guid++, o;
      }, a.holdReady = function(e) {
        e ? a.readyWait++ : a.ready(!0);
      }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = ne, a.isFunction = W, a.isWindow = Te, a.camelCase = ue, a.type = be, a.now = Date.now, a.isNumeric = function(e) {
        var t = a.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, a.trim = function(e) {
        return e == null ? "" : (e + "").replace(ms, "$1");
      };
      var ys = n.jQuery, bs = n.$;
      return a.noConflict = function(e) {
        return n.$ === a && (n.$ = bs), e && n.jQuery === a && (n.jQuery = ys), a;
      }, typeof c > "u" && (n.jQuery = n.$ = a), a;
    });
  }(wr)), wr.exports;
}
var As = nu();
const Xe = /* @__PURE__ */ tu(As), { Model: Ds } = girder.models;
var ji = Ds.extend({
  resourceName: "chameleon"
});
function Ns(i) {
  var n = "" + i, c = Os.exec(n);
  if (!c)
    return i;
  var s, d, g, F = "";
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
    d !== s && (F += n.substring(d, s)), d = s + 1, F += g;
  }
  return d !== s ? F + n.substring(d, s) : F;
}
var Os = /["&<>]/;
function ru(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void ru(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
function Is(i) {
  var n = "", c, s, d;
  try {
    var g = i || {};
    (function(F) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-dialog">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-content">', d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<form class="modal-form" id="g-create-thumbnail-form" role="form">', d = 4, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-header">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="close" data-dismiss="modal" aria-hidden="true" type="button">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "&times;</button>", d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<h4 class="modal-title">', d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Convert with Chameleon</h4>", d = 7, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-dialog-subtitle">', d = 8, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-doc-inv"></i>', d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " ", d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + Ns((c = F.get("name")) == null ? "" : c) + "</div></div>", d = 10, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-body">', d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Output Name</label>", d = 12, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<input class="form-control" id="g-output-name" type="text" placeholder="Enter output name here" name="text-input"/>', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-validation-failed-message"></div></div>', d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-footer">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<a class="btn btn-small btn-default" data-dismiss="modal">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Close</a>", d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="g-submit-create-chameleon btn btn-small btn-primary" type="submit">', d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-picture"></i>', d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " Create</button></div></form></div></div>";
    }).call(this, "file" in g ? g.file : typeof file < "u" ? file : void 0);
  } catch (F) {
    ru(F, s, d);
  }
  return n;
}
function Hs(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = _r(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function iu(i, n) {
  return Array.isArray(i) ? Ps(i, n) : i && typeof i == "object" ? Ms(i) : i || "";
}
function Ps(i, n) {
  for (var c, s = "", d = "", g = Array.isArray(n), F = 0; F < i.length; F++)
    (c = iu(i[F])) && (g && n[F] && (c = _r(c)), s = s + d + c, d = " ");
  return s;
}
function Ms(i) {
  var n = "", c = "";
  for (var s in i)
    s && i[s] && $s.call(i, s) && (n = n + c + s, c = " ");
  return n;
}
function _r(i) {
  var n = "" + i, c = ks.exec(n);
  if (!c)
    return i;
  var s, d, g, F = "";
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
    d !== s && (F += n.substring(d, s)), d = s + 1, F += g;
  }
  return d !== s ? F + n.substring(d, s) : F;
}
var $s = Object.prototype.hasOwnProperty, ks = /["&<>]/;
function uu(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void uu(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
    (function(F, S) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + '<div class="g-target-result">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + "<i" + Hs("class", iu([`icon-${F}`], [!0]), !1, !1) + "></i>", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + " ", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + _r((c = S) == null ? "" : c) + "</div>";
    }).call(this, "icon" in g ? g.icon : typeof icon < "u" ? icon : void 0, "text" in g ? g.text : typeof text < "u" ? text : void 0);
  } catch (F) {
    uu(F, s, d);
  }
  return n;
}
const { SearchFieldWidget: qs } = girder.views.widgets, { FileModel: Sn } = girder.models, { View: Rs } = girder.views, { getCurrentToken: Wi } = girder.auth, Ee = "http://localhost:5020", Gi = "http://localhost:8080";
var Cr = Rs.extend({
  initialize: function() {
  },
  events: {
    'change .g-thumbnail-attach-container input[type="radio"]': function() {
      this.$(".g-target-result-container").empty(), this.$(".g-thumbnail-attach-this-item").is(":checked") ? (this.attachToType = "item", this.attachToId = this.item.id, this.$(".g-thumbnail-custom-target-container").addClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!0)) : (this.attachToType = null, this.attachToId = null, this.$(".g-thumbnail-custom-target-container").removeClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!1));
    },
    "submit #g-create-thumbnail-form": function(i) {
      const n = this;
      i.preventDefault(), this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
      const c = new ji({
        output_name: String(this.$("#g-output-name").val()) || "",
        /*target_endpoint: String(this.$('#g-endpoint-options').val()) || '',*/
        output_type: String(this.$("#g-output-types").val()) || "",
        secondFile: this.resultId,
        attachToId: this.attachToId,
        attachToType: this.attachToType,
        folderId: this.folderId,
        collectionId: this.collectionId,
        mimeType: this.file.get("mimeType")
      }), s = document.querySelector(".g-dialog-subtitle"), d = s ? s.textContent.trim() : "", g = c.get("attachToId"), F = Gi + `/api/v1/item/${g}/download`, S = c.get("mimeType");
      let H = c.get("output_name") || "", M = Wi() || window.localStorage.getItem("girderToken"), R, Q;
      switch (console.log(S), S) {
        case "application/vnd.paradim.img":
          R = Ee + "/rheedconverter", Q = ".png";
          break;
        case "application/vnd.paradim.dat":
          R = Ee + "/ppmsmpms", Q = ".csv";
          break;
        case "application/vnd.paradim.raw":
          R = Ee + "/brukerrawconverter", Q = ".csv";
          break;
        case "application/vnd.paradim.non4d":
          R = Ee + "/non4dstem_file", Q = ".png";
          break;
        case "application/vnd.paradim.hs2":
          R = Ee + "/hs2converter", Q = ".png";
          break;
        case "application/vnd.paradim.sem":
          R = Ee + "/jeol_sem_converter", Q = ".png";
          break;
        case "application/vnd.paradim.brml":
          R = Ee + "/brukerbrmlconverter", Q = ".txt";
          break;
        default:
          R = Ee + "/default";
      }
      H == "" && (H = d.split(".")[0] + Q);
      let he = {};
      if (S == "application/vnd.paradim.non4d") {
        let fe = d.split(".")[1];
        fe = "." + fe, he = { input_ext: fe };
      }
      Xe.ajax({
        url: R,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "access-token": "nschakJJdEsIQUfADFerH6aGjyz706f114C3c8leXhM"
        },
        data: JSON.stringify({
          girderToken: M,
          input_url: F,
          output: H,
          output_type: "raw",
          output_dest: "caller",
          ...he
        }),
        xhrFields: {
          responseType: "blob"
        },
        processData: !1
      }).done(function(fe, G, W) {
        const Te = W.getResponseHeader("Content-Type");
        if (Te.includes("application/json")) {
          const ye = new FileReader();
          ye.onload = function() {
            try {
              const be = JSON.parse(ye.result);
              if (be.file_data) {
                const Be = atob(be.file_data), it = new Array(Be.length);
                for (let ut = 0; ut < Be.length; ut++)
                  it[ut] = Be.charCodeAt(ut);
                const a = new Uint8Array(it), $e = new Blob([a], { type: Te });
                let ne;
                var pe = new Sn();
                pe.uploadToItem(n.item, $e, be.file_name, ne), n.$el.modal("hide"), location.reload();
              } else
                console.log("JSON Response:", be);
            } catch (be) {
              console.error("Error parsing JSON response:", be);
            }
          }, fe.text().then((pe) => ye.readAsText(new Blob([pe])));
        } else {
          const ye = new Blob([fe], { type: Te });
          let pe;
          var j = new Sn();
          j.uploadToItem(n.item, ye, H, pe), n.$el.modal("hide"), setTimeout(() => location.reload(), 500);
        }
      }).fail(function(fe, G, W) {
        console.error("AJAX Request Failed!"), console.error("Status:", G), console.error("Error:", W), console.error("Response Text:", fe.responseText), console.error("HTTP Status Code:", fe.status);
        let Te = `
                    <div class="alert alert-danger">
                        <strong>Error:</strong> ${W} <br>
                        <strong>Status:</strong> ${G} <br>
                        <strong>HTTP Code:</strong> ${fe.status} <br>
                        <strong>Response:</strong> ${fe.responseText || "No response from server"} <br>
                        <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                    </div>`;
        Xe(".g-validation-failed-message").html(Te), Xe(".g-submit-create-chameleon").girderEnable(!0);
      });
    }
  },
  initialize: function(i) {
    this.item = i.item, this.file = i.file, this.attachToType = "item", this.attachToId = this.item.id, this.folderId = this.item.get("folderId"), this.collectionId = this.item.get("baseParentId"), this.resultId = null, this.searchWidget = new qs({
      placeholder: "Start typing a name...",
      types: ["collection", "folder", "item", "user"],
      parentView: this
    }).on("g:resultClicked", function(n) {
      this.resultId = n.id;
    }, this);
  },
  render: function() {
    return this.$el.html(Is({
      file: this.file,
      item: this.item
    })), this.$el.girderModal(this).on("shown.bs.modal", () => {
      console.log("Modal shown event triggered"), this.$("#g-endpoint-options").focus();
    }), this.$el.modal("show"), this.searchWidget || (this.searchWidget = new SearchWidget()), this.searchWidget.setElement(this.$(".g-search-field-container")).render(), this;
  },
  pickTarget: function(i) {
    this.searchWidget.resetState(), this.attachToType = i.type, this.attachToId = i.id, this.$(".g-submit-create-chameleon").girderEnable(!0), this.$(".g-target-result-container").html(Ls({
      text: i.text,
      icon: i.icon
    }));
  },
  executeChameleonJob: function() {
    const i = this;
    this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
    const n = new ji({
      output_name: String(this.$("#g-output-name").val()) || "",
      output_type: String(this.$("#g-output-types").val()) || "",
      secondFile: this.resultId,
      attachToId: this.attachToId,
      attachToType: this.attachToType,
      folderId: this.folderId,
      collectionId: this.collectionId,
      mimeType: this.file.get("mimeType")
    }), c = document.querySelector(".g-dialog-subtitle"), s = c ? c.textContent.trim() : "", d = n.get("attachToId"), g = Gi + `/api/v1/item/${d}/download`, F = n.get("mimeType");
    let S = n.get("output_name") || "", H = Wi() || window.localStorage.getItem("girderToken"), M, R;
    switch (console.log(F), F) {
      case "application/vnd.paradim.img":
        M = Ee + "/rheedconverter", R = ".png";
        break;
      case "application/vnd.paradim.dat":
        M = Ee + "/ppmsmpms", R = ".csv";
        break;
      case "application/vnd.paradim.raw":
        M = Ee + "/brukerrawconverter", R = ".csv";
        break;
      case "application/vnd.paradim.non4d":
        M = Ee + "/non4dstem_file", R = ".png";
        break;
      case "application/vnd.paradim.hs2":
        M = Ee + "/hs2converter", R = ".png";
        break;
      case "application/vnd.paradim.sem":
        M = Ee + "/jeol_sem_converter", R = ".png";
        break;
      case "application/vnd.paradim.brml":
        M = Ee + "/brukerbrmlconverter", R = ".txt";
        break;
      default:
        M = Ee + "/default";
    }
    S == "" && (S = s.split(".")[0] + R);
    let Q = {};
    if (F == "application/vnd.paradim.non4d") {
      let he = s.split(".")[1];
      he = "." + he, Q = { input_ext: he };
    }
    Xe.ajax({
      url: M,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "access-token": "nschakJJdEsIQUfADFerH6aGjyz706f114C3c8leXhM"
      },
      data: JSON.stringify({
        girderToken: H,
        input_url: g,
        output: S,
        output_type: "raw",
        output_dest: "caller",
        ...Q
      }),
      xhrFields: {
        responseType: "blob"
      },
      processData: !1
    }).done(function(he, fe, G) {
      const W = G.getResponseHeader("Content-Type");
      if (W.includes("application/json")) {
        const j = new FileReader();
        j.onload = function() {
          try {
            const pe = JSON.parse(j.result);
            if (pe.file_data) {
              const be = atob(pe.file_data), Be = new Array(be.length);
              for (let ne = 0; ne < be.length; ne++)
                Be[ne] = be.charCodeAt(ne);
              const it = new Uint8Array(Be), a = new Blob([it], { type: W });
              let $e;
              var ye = new Sn();
              ye.uploadToItem(i.item, a, pe.file_name, $e), i.$el.modal("hide"), location.reload();
            } else
              console.log("JSON Response:", pe);
          } catch (pe) {
            console.error("Error parsing JSON response:", pe);
          }
        }, he.text().then((ye) => j.readAsText(new Blob([ye])));
      } else {
        const j = new Blob([he], { type: W });
        let ye;
        var Te = new Sn();
        Te.uploadToItem(i.item, j, S, ye), i.$el.modal("hide"), setTimeout(() => location.reload(), 500);
      }
    }).fail(function(he, fe, G) {
      console.error("AJAX Request Failed!", fe, G, he.responseText);
      let W = `
                <div class="alert alert-danger">
                    <strong>Error:</strong> ${G} <br>
                    <strong>Status:</strong> ${fe} <br>
                    <strong>HTTP Code:</strong> ${he.status} <br>
                    <strong>Response:</strong> ${he.responseText || "No response from server"} <br>
                    <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                </div>`;
      Xe(".g-validation-failed-message").html(W), Xe(".g-submit-create-chameleon").girderEnable(!0);
    });
  }
}), au = {}, Er = "1.13.7", Bi = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, Mn = Array.prototype, Sr = Object.prototype, zi = typeof Symbol < "u" ? Symbol.prototype : null, Us = Mn.push, ln = Mn.slice, nn = Sr.toString, Vs = Sr.hasOwnProperty, su = typeof ArrayBuffer < "u", js = typeof DataView < "u", Ws = Array.isArray, Ji = Object.keys, Xi = Object.create, Qi = su && ArrayBuffer.isView, Gs = isNaN, Bs = isFinite, ou = !{ toString: null }.propertyIsEnumerable("toString"), Yi = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], zs = Math.pow(2, 53) - 1;
function Ne(i, n) {
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
function bt(i) {
  var n = typeof i;
  return n === "function" || n === "object" && !!i;
}
function lu(i) {
  return i === null;
}
function Ar(i) {
  return i === void 0;
}
function Dr(i) {
  return i === !0 || i === !1 || nn.call(i) === "[object Boolean]";
}
function cu(i) {
  return !!(i && i.nodeType === 1);
}
function Ae(i) {
  var n = "[object " + i + "]";
  return function(c) {
    return nn.call(c) === n;
  };
}
const $n = Ae("String"), Nr = Ae("Number"), fu = Ae("Date"), hu = Ae("RegExp"), du = Ae("Error"), Or = Ae("Symbol"), Ir = Ae("ArrayBuffer");
var pu = Ae("Function"), Js = Bi.document && Bi.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof Js != "function" && (pu = function(i) {
  return typeof i == "function" || !1;
});
const Se = pu, gu = Ae("Object");
var vu = js && (!/\[native code\]/.test(String(DataView)) || gu(new DataView(new ArrayBuffer(8)))), Hr = typeof Map < "u" && gu(/* @__PURE__ */ new Map()), Xs = Ae("DataView");
function Qs(i) {
  return i != null && Se(i.getInt8) && Ir(i.buffer);
}
const rn = vu ? Qs : Xs, wt = Ws || Ae("Array");
function Ft(i, n) {
  return i != null && Vs.call(i, n);
}
var xr = Ae("Arguments");
(function() {
  xr(arguments) || (xr = function(i) {
    return Ft(i, "callee");
  });
})();
const kn = xr;
function mu(i) {
  return !Or(i) && Bs(i) && !isNaN(parseFloat(i));
}
function Pr(i) {
  return Nr(i) && Gs(i);
}
function Mr(i) {
  return function() {
    return i;
  };
}
function yu(i) {
  return function(n) {
    var c = i(n);
    return typeof c == "number" && c >= 0 && c <= zs;
  };
}
function bu(i) {
  return function(n) {
    return n == null ? void 0 : n[i];
  };
}
const Dn = bu("byteLength"), Ys = yu(Dn);
var Ks = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function Zs(i) {
  return Qi ? Qi(i) && !rn(i) : Ys(i) && Ks.test(nn.call(i));
}
const $r = su ? Zs : Mr(!1), Pe = bu("length");
function eo(i) {
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
function wu(i, n) {
  n = eo(n);
  var c = Yi.length, s = i.constructor, d = Se(s) && s.prototype || Sr, g = "constructor";
  for (Ft(i, g) && !n.contains(g) && n.push(g); c--; )
    g = Yi[c], g in i && i[g] !== d[g] && !n.contains(g) && n.push(g);
}
function Fe(i) {
  if (!bt(i))
    return [];
  if (Ji)
    return Ji(i);
  var n = [];
  for (var c in i)
    Ft(i, c) && n.push(c);
  return ou && wu(i, n), n;
}
function Fu(i) {
  if (i == null)
    return !0;
  var n = Pe(i);
  return typeof n == "number" && (wt(i) || $n(i) || kn(i)) ? n === 0 : Pe(Fe(i)) === 0;
}
function kr(i, n) {
  var c = Fe(n), s = c.length;
  if (i == null)
    return !s;
  for (var d = Object(i), g = 0; g < s; g++) {
    var F = c[g];
    if (n[F] !== d[F] || !(F in d))
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
se.VERSION = Er;
se.prototype.value = function() {
  return this._wrapped;
};
se.prototype.valueOf = se.prototype.toJSON = se.prototype.value;
se.prototype.toString = function() {
  return String(this._wrapped);
};
function Ki(i) {
  return new Uint8Array(
    i.buffer || i,
    i.byteOffset || 0,
    Dn(i)
  );
}
var Zi = "[object DataView]";
function Tr(i, n, c, s) {
  if (i === n)
    return i !== 0 || 1 / i === 1 / n;
  if (i == null || n == null)
    return !1;
  if (i !== i)
    return n !== n;
  var d = typeof i;
  return d !== "function" && d !== "object" && typeof n != "object" ? !1 : xu(i, n, c, s);
}
function xu(i, n, c, s) {
  i instanceof se && (i = i._wrapped), n instanceof se && (n = n._wrapped);
  var d = nn.call(i);
  if (d !== nn.call(n))
    return !1;
  if (vu && d == "[object Object]" && rn(i)) {
    if (!rn(n))
      return !1;
    d = Zi;
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
      return zi.valueOf.call(i) === zi.valueOf.call(n);
    case "[object ArrayBuffer]":
    case Zi:
      return xu(Ki(i), Ki(n), c, s);
  }
  var g = d === "[object Array]";
  if (!g && $r(i)) {
    var F = Dn(i);
    if (F !== Dn(n))
      return !1;
    if (i.buffer === n.buffer && i.byteOffset === n.byteOffset)
      return !0;
    g = !0;
  }
  if (!g) {
    if (typeof i != "object" || typeof n != "object")
      return !1;
    var S = i.constructor, H = n.constructor;
    if (S !== H && !(Se(S) && S instanceof S && Se(H) && H instanceof H) && "constructor" in i && "constructor" in n)
      return !1;
  }
  c = c || [], s = s || [];
  for (var M = c.length; M--; )
    if (c[M] === i)
      return s[M] === n;
  if (c.push(i), s.push(n), g) {
    if (M = i.length, M !== n.length)
      return !1;
    for (; M--; )
      if (!Tr(i[M], n[M], c, s))
        return !1;
  } else {
    var R = Fe(i), Q;
    if (M = R.length, Fe(n).length !== M)
      return !1;
    for (; M--; )
      if (Q = R[M], !(Ft(n, Q) && Tr(i[Q], n[Q], c, s)))
        return !1;
  }
  return c.pop(), s.pop(), !0;
}
function Tu(i, n) {
  return Tr(i, n);
}
function jt(i) {
  if (!bt(i))
    return [];
  var n = [];
  for (var c in i)
    n.push(c);
  return ou && wu(i, n), n;
}
function Lr(i) {
  var n = Pe(i);
  return function(c) {
    if (c == null)
      return !1;
    var s = jt(c);
    if (Pe(s))
      return !1;
    for (var d = 0; d < n; d++)
      if (!Se(c[i[d]]))
        return !1;
    return i !== Eu || !Se(c[qr]);
  };
}
var qr = "forEach", _u = "has", Rr = ["clear", "delete"], Cu = ["get", _u, "set"], to = Rr.concat(qr, Cu), Eu = Rr.concat(Cu), no = ["add"].concat(Rr, qr, _u);
const Su = Hr ? Lr(to) : Ae("Map"), Au = Hr ? Lr(Eu) : Ae("WeakMap"), Du = Hr ? Lr(no) : Ae("Set"), Nu = Ae("WeakSet");
function Dt(i) {
  for (var n = Fe(i), c = n.length, s = Array(c), d = 0; d < c; d++)
    s[d] = i[n[d]];
  return s;
}
function Ou(i) {
  for (var n = Fe(i), c = n.length, s = Array(c), d = 0; d < c; d++)
    s[d] = [n[d], i[n[d]]];
  return s;
}
function Ur(i) {
  for (var n = {}, c = Fe(i), s = 0, d = c.length; s < d; s++)
    n[i[c[s]]] = c[s];
  return n;
}
function un(i) {
  var n = [];
  for (var c in i)
    Se(i[c]) && n.push(c);
  return n.sort();
}
function Vr(i, n) {
  return function(c) {
    var s = arguments.length;
    if (n && (c = Object(c)), s < 2 || c == null)
      return c;
    for (var d = 1; d < s; d++)
      for (var g = arguments[d], F = i(g), S = F.length, H = 0; H < S; H++) {
        var M = F[H];
        (!n || c[M] === void 0) && (c[M] = g[M]);
      }
    return c;
  };
}
const jr = Vr(jt), Ut = Vr(Fe), Wr = Vr(jt, !0);
function ro() {
  return function() {
  };
}
function Iu(i) {
  if (!bt(i))
    return {};
  if (Xi)
    return Xi(i);
  var n = ro();
  n.prototype = i;
  var c = new n();
  return n.prototype = null, c;
}
function Hu(i, n) {
  var c = Iu(i);
  return n && Ut(c, n), c;
}
function Pu(i) {
  return bt(i) ? wt(i) ? i.slice() : jr({}, i) : i;
}
function Mu(i, n) {
  return n(i), i;
}
function Gr(i) {
  return wt(i) ? i : [i];
}
se.toPath = Gr;
function cn(i) {
  return se.toPath(i);
}
function Br(i, n) {
  for (var c = n.length, s = 0; s < c; s++) {
    if (i == null)
      return;
    i = i[n[s]];
  }
  return c ? i : void 0;
}
function zr(i, n, c) {
  var s = Br(i, cn(n));
  return Ar(s) ? c : s;
}
function $u(i, n) {
  n = cn(n);
  for (var c = n.length, s = 0; s < c; s++) {
    var d = n[s];
    if (!Ft(i, d))
      return !1;
    i = i[d];
  }
  return !!c;
}
function Ln(i) {
  return i;
}
function At(i) {
  return i = Ut({}, i), function(n) {
    return kr(n, i);
  };
}
function qn(i) {
  return i = cn(i), function(n) {
    return Br(n, i);
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
      return function(s, d, g, F) {
        return i.call(n, s, d, g, F);
      };
  }
  return function() {
    return i.apply(n, arguments);
  };
}
function ku(i, n, c) {
  return i == null ? Ln : Se(i) ? fn(i, n, c) : bt(i) && !wt(i) ? At(i) : qn(i);
}
function Rn(i, n) {
  return ku(i, n, 1 / 0);
}
se.iteratee = Rn;
function Me(i, n, c) {
  return se.iteratee !== Rn ? se.iteratee(i, n) : ku(i, n, c);
}
function Lu(i, n, c) {
  n = Me(n, c);
  for (var s = Fe(i), d = s.length, g = {}, F = 0; F < d; F++) {
    var S = s[F];
    g[S] = n(i[S], S, i);
  }
  return g;
}
function Jr() {
}
function qu(i) {
  return i == null ? Jr : function(n) {
    return zr(i, n);
  };
}
function Ru(i, n, c) {
  var s = Array(Math.max(0, i));
  n = fn(n, c, 1);
  for (var d = 0; d < i; d++)
    s[d] = n(d);
  return s;
}
function Nn(i, n) {
  return n == null && (n = i, i = 0), i + Math.floor(Math.random() * (n - i + 1));
}
const Vt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function Uu(i) {
  var n = function(g) {
    return i[g];
  }, c = "(?:" + Fe(i).join("|") + ")", s = RegExp(c), d = RegExp(c, "g");
  return function(g) {
    return g = g == null ? "" : "" + g, s.test(g) ? g.replace(d, n) : g;
  };
}
const Vu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, ju = Uu(Vu), io = Ur(Vu), Wu = Uu(io), Gu = se.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var Fr = /(.)^/, uo = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, ao = /\\|'|\r|\n|\u2028|\u2029/g;
function so(i) {
  return "\\" + uo[i];
}
var oo = /^\s*(\w|\$)+\s*$/;
function Bu(i, n, c) {
  !n && c && (n = c), n = Wr({}, n, se.templateSettings);
  var s = RegExp([
    (n.escape || Fr).source,
    (n.interpolate || Fr).source,
    (n.evaluate || Fr).source
  ].join("|") + "|$", "g"), d = 0, g = "__p+='";
  i.replace(s, function(M, R, Q, he, fe) {
    return g += i.slice(d, fe).replace(ao, so), d = fe + M.length, R ? g += `'+
((__t=(` + R + `))==null?'':_.escape(__t))+
'` : Q ? g += `'+
((__t=(` + Q + `))==null?'':__t)+
'` : he && (g += `';
` + he + `
__p+='`), M;
  }), g += `';
`;
  var F = n.variable;
  if (F) {
    if (!oo.test(F))
      throw new Error(
        "variable is not a bare identifier: " + F
      );
  } else
    g = `with(obj||{}){
` + g + `}
`, F = "obj";
  g = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + g + `return __p;
`;
  var S;
  try {
    S = new Function(F, "_", g);
  } catch (M) {
    throw M.source = g, M;
  }
  var H = function(M) {
    return S.call(this, M, se);
  };
  return H.source = "function(" + F + `){
` + g + "}", H;
}
function zu(i, n, c) {
  n = cn(n);
  var s = n.length;
  if (!s)
    return Se(c) ? c.call(i) : c;
  for (var d = 0; d < s; d++) {
    var g = i == null ? void 0 : i[n[d]];
    g === void 0 && (g = c, d = s), i = Se(g) ? g.call(i) : g;
  }
  return i;
}
var lo = 0;
function Ju(i) {
  var n = ++lo + "";
  return i ? i + n : n;
}
function Xu(i) {
  var n = se(i);
  return n._chain = !0, n;
}
function Qu(i, n, c, s, d) {
  if (!(s instanceof n))
    return i.apply(c, d);
  var g = Iu(i.prototype), F = i.apply(g, d);
  return bt(F) ? F : g;
}
var Nt = Ne(function(i, n) {
  var c = Nt.placeholder, s = function() {
    for (var d = 0, g = n.length, F = Array(g), S = 0; S < g; S++)
      F[S] = n[S] === c ? arguments[d++] : n[S];
    for (; d < arguments.length; )
      F.push(arguments[d++]);
    return Qu(i, s, this, this, F);
  };
  return s;
});
Nt.placeholder = se;
const Xr = Ne(function(i, n, c) {
  if (!Se(i))
    throw new TypeError("Bind must be called on a function");
  var s = Ne(function(d) {
    return Qu(i, s, n, this, c.concat(d));
  });
  return s;
}), Le = yu(Pe);
function Ot(i, n, c, s) {
  if (s = s || [], !n && n !== 0)
    n = 1 / 0;
  else if (n <= 0)
    return s.concat(i);
  for (var d = s.length, g = 0, F = Pe(i); g < F; g++) {
    var S = i[g];
    if (Le(S) && (wt(S) || kn(S)))
      if (n > 1)
        Ot(S, n - 1, c, s), d = s.length;
      else
        for (var H = 0, M = S.length; H < M; )
          s[d++] = S[H++];
    else
      c || (s[d++] = S);
  }
  return s;
}
const Yu = Ne(function(i, n) {
  n = Ot(n, !1, !1);
  var c = n.length;
  if (c < 1)
    throw new Error("bindAll must be passed function names");
  for (; c--; ) {
    var s = n[c];
    i[s] = Xr(i[s], i);
  }
  return i;
});
function Ku(i, n) {
  var c = function(s) {
    var d = c.cache, g = "" + (n ? n.apply(this, arguments) : s);
    return Ft(d, g) || (d[g] = i.apply(this, arguments)), d[g];
  };
  return c.cache = {}, c;
}
const Qr = Ne(function(i, n, c) {
  return setTimeout(function() {
    return i.apply(null, c);
  }, n);
}), Zu = Nt(Qr, se, 1);
function ea(i, n, c) {
  var s, d, g, F, S = 0;
  c || (c = {});
  var H = function() {
    S = c.leading === !1 ? 0 : Vt(), s = null, F = i.apply(d, g), s || (d = g = null);
  }, M = function() {
    var R = Vt();
    !S && c.leading === !1 && (S = R);
    var Q = n - (R - S);
    return d = this, g = arguments, Q <= 0 || Q > n ? (s && (clearTimeout(s), s = null), S = R, F = i.apply(d, g), s || (d = g = null)) : !s && c.trailing !== !1 && (s = setTimeout(H, Q)), F;
  };
  return M.cancel = function() {
    clearTimeout(s), S = 0, s = d = g = null;
  }, M;
}
function ta(i, n, c) {
  var s, d, g, F, S, H = function() {
    var R = Vt() - d;
    n > R ? s = setTimeout(H, n - R) : (s = null, c || (F = i.apply(S, g)), s || (g = S = null));
  }, M = Ne(function(R) {
    return S = this, g = R, d = Vt(), s || (s = setTimeout(H, n), c && (F = i.apply(S, g))), F;
  });
  return M.cancel = function() {
    clearTimeout(s), s = g = S = null;
  }, M;
}
function na(i, n) {
  return Nt(n, i);
}
function Un(i) {
  return function() {
    return !i.apply(this, arguments);
  };
}
function ra() {
  var i = arguments, n = i.length - 1;
  return function() {
    for (var c = n, s = i[n].apply(this, arguments); c--; )
      s = i[c].call(this, s);
    return s;
  };
}
function ia(i, n) {
  return function() {
    if (--i < 1)
      return n.apply(this, arguments);
  };
}
function Yr(i, n) {
  var c;
  return function() {
    return --i > 0 && (c = n.apply(this, arguments)), i <= 1 && (n = null), c;
  };
}
const ua = Nt(Yr, 2);
function Kr(i, n, c) {
  n = Me(n, c);
  for (var s = Fe(i), d, g = 0, F = s.length; g < F; g++)
    if (d = s[g], n(i[d], d, i))
      return d;
}
function aa(i) {
  return function(n, c, s) {
    c = Me(c, s);
    for (var d = Pe(n), g = i > 0 ? 0 : d - 1; g >= 0 && g < d; g += i)
      if (c(n[g], g, n))
        return g;
    return -1;
  };
}
const Vn = aa(1), Zr = aa(-1);
function ei(i, n, c, s) {
  c = Me(c, s, 1);
  for (var d = c(n), g = 0, F = Pe(i); g < F; ) {
    var S = Math.floor((g + F) / 2);
    c(i[S]) < d ? g = S + 1 : F = S;
  }
  return g;
}
function sa(i, n, c) {
  return function(s, d, g) {
    var F = 0, S = Pe(s);
    if (typeof g == "number")
      i > 0 ? F = g >= 0 ? g : Math.max(g + S, F) : S = g >= 0 ? Math.min(g + 1, S) : g + S + 1;
    else if (c && g && S)
      return g = c(s, d), s[g] === d ? g : -1;
    if (d !== d)
      return g = n(ln.call(s, F, S), Pr), g >= 0 ? g + F : -1;
    for (g = i > 0 ? F : S - 1; g >= 0 && g < S; g += i)
      if (s[g] === d)
        return g;
    return -1;
  };
}
const ti = sa(1, Vn, ei), oa = sa(-1, Zr);
function an(i, n, c) {
  var s = Le(i) ? Vn : Kr, d = s(i, n, c);
  if (d !== void 0 && d !== -1)
    return i[d];
}
function la(i, n) {
  return an(i, At(n));
}
function Qe(i, n, c) {
  n = fn(n, c);
  var s, d;
  if (Le(i))
    for (s = 0, d = i.length; s < d; s++)
      n(i[s], s, i);
  else {
    var g = Fe(i);
    for (s = 0, d = g.length; s < d; s++)
      n(i[g[s]], g[s], i);
  }
  return i;
}
function ht(i, n, c) {
  n = Me(n, c);
  for (var s = !Le(i) && Fe(i), d = (s || i).length, g = Array(d), F = 0; F < d; F++) {
    var S = s ? s[F] : F;
    g[F] = n(i[S], S, i);
  }
  return g;
}
function ca(i) {
  var n = function(c, s, d, g) {
    var F = !Le(c) && Fe(c), S = (F || c).length, H = i > 0 ? 0 : S - 1;
    for (g || (d = c[F ? F[H] : H], H += i); H >= 0 && H < S; H += i) {
      var M = F ? F[H] : H;
      d = s(d, c[M], M, c);
    }
    return d;
  };
  return function(c, s, d, g) {
    var F = arguments.length >= 3;
    return n(c, fn(s, g, 4), d, F);
  };
}
const qt = ca(1), On = ca(-1);
function yt(i, n, c) {
  var s = [];
  return n = Me(n, c), Qe(i, function(d, g, F) {
    n(d, g, F) && s.push(d);
  }), s;
}
function fa(i, n, c) {
  return yt(i, Un(Me(n)), c);
}
function In(i, n, c) {
  n = Me(n, c);
  for (var s = !Le(i) && Fe(i), d = (s || i).length, g = 0; g < d; g++) {
    var F = s ? s[g] : g;
    if (!n(i[F], F, i))
      return !1;
  }
  return !0;
}
function Hn(i, n, c) {
  n = Me(n, c);
  for (var s = !Le(i) && Fe(i), d = (s || i).length, g = 0; g < d; g++) {
    var F = s ? s[g] : g;
    if (n(i[F], F, i))
      return !0;
  }
  return !1;
}
function Ge(i, n, c, s) {
  return Le(i) || (i = Dt(i)), (typeof c != "number" || s) && (c = 0), ti(i, n, c) >= 0;
}
const ha = Ne(function(i, n, c) {
  var s, d;
  return Se(n) ? d = n : (n = cn(n), s = n.slice(0, -1), n = n[n.length - 1]), ht(i, function(g) {
    var F = d;
    if (!F) {
      if (s && s.length && (g = Br(g, s)), g == null)
        return;
      F = g[n];
    }
    return F == null ? F : F.apply(g, c);
  });
});
function jn(i, n) {
  return ht(i, qn(n));
}
function da(i, n) {
  return yt(i, At(n));
}
function ni(i, n, c) {
  var s = -1 / 0, d = -1 / 0, g, F;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Le(i) ? i : Dt(i);
    for (var S = 0, H = i.length; S < H; S++)
      g = i[S], g != null && g > s && (s = g);
  } else
    n = Me(n, c), Qe(i, function(M, R, Q) {
      F = n(M, R, Q), (F > d || F === -1 / 0 && s === -1 / 0) && (s = M, d = F);
    });
  return s;
}
function pa(i, n, c) {
  var s = 1 / 0, d = 1 / 0, g, F;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Le(i) ? i : Dt(i);
    for (var S = 0, H = i.length; S < H; S++)
      g = i[S], g != null && g < s && (s = g);
  } else
    n = Me(n, c), Qe(i, function(M, R, Q) {
      F = n(M, R, Q), (F < d || F === 1 / 0 && s === 1 / 0) && (s = M, d = F);
    });
  return s;
}
var co = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function ri(i) {
  return i ? wt(i) ? ln.call(i) : $n(i) ? i.match(co) : Le(i) ? ht(i, Ln) : Dt(i) : [];
}
function ii(i, n, c) {
  if (n == null || c)
    return Le(i) || (i = Dt(i)), i[Nn(i.length - 1)];
  var s = ri(i), d = Pe(s);
  n = Math.max(Math.min(n, d), 0);
  for (var g = d - 1, F = 0; F < n; F++) {
    var S = Nn(F, g), H = s[F];
    s[F] = s[S], s[S] = H;
  }
  return s.slice(0, n);
}
function ga(i) {
  return ii(i, 1 / 0);
}
function va(i, n, c) {
  var s = 0;
  return n = Me(n, c), jn(ht(i, function(d, g, F) {
    return {
      value: d,
      index: s++,
      criteria: n(d, g, F)
    };
  }).sort(function(d, g) {
    var F = d.criteria, S = g.criteria;
    if (F !== S) {
      if (F > S || F === void 0)
        return 1;
      if (F < S || S === void 0)
        return -1;
    }
    return d.index - g.index;
  }), "value");
}
function Wn(i, n) {
  return function(c, s, d) {
    var g = n ? [[], []] : {};
    return s = Me(s, d), Qe(c, function(F, S) {
      var H = s(F, S, c);
      i(g, F, H);
    }), g;
  };
}
const ma = Wn(function(i, n, c) {
  Ft(i, c) ? i[c].push(n) : i[c] = [n];
}), ya = Wn(function(i, n, c) {
  i[c] = n;
}), ba = Wn(function(i, n, c) {
  Ft(i, c) ? i[c]++ : i[c] = 1;
}), wa = Wn(function(i, n, c) {
  i[c ? 0 : 1].push(n);
}, !0);
function Fa(i) {
  return i == null ? 0 : Le(i) ? i.length : Fe(i).length;
}
function fo(i, n, c) {
  return n in c;
}
const ui = Ne(function(i, n) {
  var c = {}, s = n[0];
  if (i == null)
    return c;
  Se(s) ? (n.length > 1 && (s = fn(s, n[1])), n = jt(i)) : (s = fo, n = Ot(n, !1, !1), i = Object(i));
  for (var d = 0, g = n.length; d < g; d++) {
    var F = n[d], S = i[F];
    s(S, F, i) && (c[F] = S);
  }
  return c;
}), xa = Ne(function(i, n) {
  var c = n[0], s;
  return Se(c) ? (c = Un(c), n.length > 1 && (s = n[1])) : (n = ht(Ot(n, !1, !1), String), c = function(d, g) {
    return !Ge(n, g);
  }), ui(i, c, s);
});
function ai(i, n, c) {
  return ln.call(i, 0, Math.max(0, i.length - (n == null || c ? 1 : n)));
}
function Rt(i, n, c) {
  return i == null || i.length < 1 ? n == null || c ? void 0 : [] : n == null || c ? i[0] : ai(i, i.length - n);
}
function St(i, n, c) {
  return ln.call(i, n == null || c ? 1 : n);
}
function Ta(i, n, c) {
  return i == null || i.length < 1 ? n == null || c ? void 0 : [] : n == null || c ? i[i.length - 1] : St(i, Math.max(0, i.length - n));
}
function _a(i) {
  return yt(i, Boolean);
}
function Ca(i, n) {
  return Ot(i, n, !1);
}
const si = Ne(function(i, n) {
  return n = Ot(n, !0, !0), yt(i, function(c) {
    return !Ge(n, c);
  });
}), Ea = Ne(function(i, n) {
  return si(i, n);
});
function sn(i, n, c, s) {
  Dr(n) || (s = c, c = n, n = !1), c != null && (c = Me(c, s));
  for (var d = [], g = [], F = 0, S = Pe(i); F < S; F++) {
    var H = i[F], M = c ? c(H, F, i) : H;
    n && !c ? ((!F || g !== M) && d.push(H), g = M) : c ? Ge(g, M) || (g.push(M), d.push(H)) : Ge(d, H) || d.push(H);
  }
  return d;
}
const Sa = Ne(function(i) {
  return sn(Ot(i, !0, !0));
});
function Aa(i) {
  for (var n = [], c = arguments.length, s = 0, d = Pe(i); s < d; s++) {
    var g = i[s];
    if (!Ge(n, g)) {
      var F;
      for (F = 1; F < c && Ge(arguments[F], g); F++)
        ;
      F === c && n.push(g);
    }
  }
  return n;
}
function on(i) {
  for (var n = i && ni(i, Pe).length || 0, c = Array(n), s = 0; s < n; s++)
    c[s] = jn(i, s);
  return c;
}
const Da = Ne(on);
function Na(i, n) {
  for (var c = {}, s = 0, d = Pe(i); s < d; s++)
    n ? c[i[s]] = n[s] : c[i[s][0]] = i[s][1];
  return c;
}
function Oa(i, n, c) {
  n == null && (n = i || 0, i = 0), c || (c = n < i ? -1 : 1);
  for (var s = Math.max(Math.ceil((n - i) / c), 0), d = Array(s), g = 0; g < s; g++, i += c)
    d[g] = i;
  return d;
}
function Ia(i, n) {
  if (n == null || n < 1)
    return [];
  for (var c = [], s = 0, d = i.length; s < d; )
    c.push(ln.call(i, s, s += n));
  return c;
}
function oi(i, n) {
  return i._chain ? se(n).chain() : n;
}
function li(i) {
  return Qe(un(i), function(n) {
    var c = se[n] = i[n];
    se.prototype[n] = function() {
      var s = [this._wrapped];
      return Us.apply(s, arguments), oi(this, c.apply(se, s));
    };
  }), se;
}
Qe(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(i) {
  var n = Mn[i];
  se.prototype[i] = function() {
    var c = this._wrapped;
    return c != null && (n.apply(c, arguments), (i === "shift" || i === "splice") && c.length === 0 && delete c[0]), oi(this, c);
  };
});
Qe(["concat", "join", "slice"], function(i) {
  var n = Mn[i];
  se.prototype[i] = function() {
    var c = this._wrapped;
    return c != null && (c = n.apply(c, arguments)), oi(this, c);
  };
});
const ho = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Er,
  after: ia,
  all: In,
  allKeys: jt,
  any: Hn,
  assign: Ut,
  before: Yr,
  bind: Xr,
  bindAll: Yu,
  chain: Xu,
  chunk: Ia,
  clone: Pu,
  collect: ht,
  compact: _a,
  compose: ra,
  constant: Mr,
  contains: Ge,
  countBy: ba,
  create: Hu,
  debounce: ta,
  default: se,
  defaults: Wr,
  defer: Zu,
  delay: Qr,
  detect: an,
  difference: si,
  drop: St,
  each: Qe,
  escape: ju,
  every: In,
  extend: jr,
  extendOwn: Ut,
  filter: yt,
  find: an,
  findIndex: Vn,
  findKey: Kr,
  findLastIndex: Zr,
  findWhere: la,
  first: Rt,
  flatten: Ca,
  foldl: qt,
  foldr: On,
  forEach: Qe,
  functions: un,
  get: zr,
  groupBy: ma,
  has: $u,
  head: Rt,
  identity: Ln,
  include: Ge,
  includes: Ge,
  indexBy: ya,
  indexOf: ti,
  initial: ai,
  inject: qt,
  intersection: Aa,
  invert: Ur,
  invoke: ha,
  isArguments: kn,
  isArray: wt,
  isArrayBuffer: Ir,
  isBoolean: Dr,
  isDataView: rn,
  isDate: fu,
  isElement: cu,
  isEmpty: Fu,
  isEqual: Tu,
  isError: du,
  isFinite: mu,
  isFunction: Se,
  isMap: Su,
  isMatch: kr,
  isNaN: Pr,
  isNull: lu,
  isNumber: Nr,
  isObject: bt,
  isRegExp: hu,
  isSet: Du,
  isString: $n,
  isSymbol: Or,
  isTypedArray: $r,
  isUndefined: Ar,
  isWeakMap: Au,
  isWeakSet: Nu,
  iteratee: Rn,
  keys: Fe,
  last: Ta,
  lastIndexOf: oa,
  map: ht,
  mapObject: Lu,
  matcher: At,
  matches: At,
  max: ni,
  memoize: Ku,
  methods: un,
  min: pa,
  mixin: li,
  negate: Un,
  noop: Jr,
  now: Vt,
  object: Na,
  omit: xa,
  once: ua,
  pairs: Ou,
  partial: Nt,
  partition: wa,
  pick: ui,
  pluck: jn,
  property: qn,
  propertyOf: qu,
  random: Nn,
  range: Oa,
  reduce: qt,
  reduceRight: On,
  reject: fa,
  rest: St,
  restArguments: Ne,
  result: zu,
  sample: ii,
  select: yt,
  shuffle: ga,
  size: Fa,
  some: Hn,
  sortBy: va,
  sortedIndex: ei,
  tail: St,
  take: Rt,
  tap: Mu,
  template: Bu,
  templateSettings: Gu,
  throttle: ea,
  times: Ru,
  toArray: ri,
  toPath: Gr,
  transpose: on,
  unescape: Wu,
  union: Sa,
  uniq: sn,
  unique: sn,
  uniqueId: Ju,
  unzip: on,
  values: Dt,
  where: da,
  without: Ea,
  wrap: na,
  zip: Da
}, Symbol.toStringTag, { value: "Module" }));
var Pn = li(ho);
Pn._ = Pn;
const po = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: Er,
  after: ia,
  all: In,
  allKeys: jt,
  any: Hn,
  assign: Ut,
  before: Yr,
  bind: Xr,
  bindAll: Yu,
  chain: Xu,
  chunk: Ia,
  clone: Pu,
  collect: ht,
  compact: _a,
  compose: ra,
  constant: Mr,
  contains: Ge,
  countBy: ba,
  create: Hu,
  debounce: ta,
  default: Pn,
  defaults: Wr,
  defer: Zu,
  delay: Qr,
  detect: an,
  difference: si,
  drop: St,
  each: Qe,
  escape: ju,
  every: In,
  extend: jr,
  extendOwn: Ut,
  filter: yt,
  find: an,
  findIndex: Vn,
  findKey: Kr,
  findLastIndex: Zr,
  findWhere: la,
  first: Rt,
  flatten: Ca,
  foldl: qt,
  foldr: On,
  forEach: Qe,
  functions: un,
  get: zr,
  groupBy: ma,
  has: $u,
  head: Rt,
  identity: Ln,
  include: Ge,
  includes: Ge,
  indexBy: ya,
  indexOf: ti,
  initial: ai,
  inject: qt,
  intersection: Aa,
  invert: Ur,
  invoke: ha,
  isArguments: kn,
  isArray: wt,
  isArrayBuffer: Ir,
  isBoolean: Dr,
  isDataView: rn,
  isDate: fu,
  isElement: cu,
  isEmpty: Fu,
  isEqual: Tu,
  isError: du,
  isFinite: mu,
  isFunction: Se,
  isMap: Su,
  isMatch: kr,
  isNaN: Pr,
  isNull: lu,
  isNumber: Nr,
  isObject: bt,
  isRegExp: hu,
  isSet: Du,
  isString: $n,
  isSymbol: Or,
  isTypedArray: $r,
  isUndefined: Ar,
  isWeakMap: Au,
  isWeakSet: Nu,
  iteratee: Rn,
  keys: Fe,
  last: Ta,
  lastIndexOf: oa,
  map: ht,
  mapObject: Lu,
  matcher: At,
  matches: At,
  max: ni,
  memoize: Ku,
  methods: un,
  min: pa,
  mixin: li,
  negate: Un,
  noop: Jr,
  now: Vt,
  object: Na,
  omit: xa,
  once: ua,
  pairs: Ou,
  partial: Nt,
  partition: wa,
  pick: ui,
  pluck: jn,
  property: qn,
  propertyOf: qu,
  random: Nn,
  range: Oa,
  reduce: qt,
  reduceRight: On,
  reject: fa,
  rest: St,
  restArguments: Ne,
  result: zu,
  sample: ii,
  select: yt,
  shuffle: ga,
  size: Fa,
  some: Hn,
  sortBy: va,
  sortedIndex: ei,
  tail: St,
  take: Rt,
  tap: Mu,
  template: Bu,
  templateSettings: Gu,
  throttle: ea,
  times: Ru,
  toArray: ri,
  toPath: Gr,
  transpose: on,
  unescape: Wu,
  union: Sa,
  uniq: sn,
  unique: sn,
  uniqueId: Ju,
  unzip: on,
  values: Dt,
  where: da,
  without: Ea,
  wrap: na,
  zip: Da
}, Symbol.toStringTag, { value: "Module" })), go = /* @__PURE__ */ Ss(po);
(function(i) {
  (function(n) {
    var c = typeof self == "object" && self.self === self && self || typeof tn == "object" && tn.global === tn && tn;
    {
      var s = go, d;
      try {
        d = nu();
      } catch {
      }
      n(c, i, s, d);
    }
  })(function(n, c, s, d) {
    var g = n.Backbone, F = Array.prototype.slice;
    c.VERSION = "1.6.0", c.$ = d, c.noConflict = function() {
      return n.Backbone = g, this;
    }, c.emulateHTTP = !1, c.emulateJSON = !1;
    var S = c.Events = {}, H = /\s+/, M, R = function(f, p, y, T, D) {
      var I = 0, U;
      if (y && typeof y == "object")
        for (T !== void 0 && ("context" in D) && D.context === void 0 && (D.context = T), U = s.keys(y); I < U.length; I++)
          p = R(f, p, U[I], y[U[I]], D);
      else if (y && H.test(y))
        for (U = y.split(H); I < U.length; I++)
          p = f(p, U[I], T, D);
      else
        p = f(p, y, T, D);
      return p;
    };
    S.on = function(f, p, y) {
      if (this._events = R(Q, this._events || {}, f, p, {
        context: y,
        ctx: this,
        listening: M
      }), M) {
        var T = this._listeners || (this._listeners = {});
        T[M.id] = M, M.interop = !1;
      }
      return this;
    }, S.listenTo = function(f, p, y) {
      if (!f)
        return this;
      var T = f._listenId || (f._listenId = s.uniqueId("l")), D = this._listeningTo || (this._listeningTo = {}), I = M = D[T];
      I || (this._listenId || (this._listenId = s.uniqueId("l")), I = M = D[T] = new j(this, f));
      var U = he(f, p, y, this);
      if (M = void 0, U)
        throw U;
      return I.interop && I.on(p, y), this;
    };
    var Q = function(f, p, y, T) {
      if (y) {
        var D = f[p] || (f[p] = []), I = T.context, U = T.ctx, ee = T.listening;
        ee && ee.count++, D.push({ callback: y, context: I, ctx: I || U, listening: ee });
      }
      return f;
    }, he = function(f, p, y, T) {
      try {
        f.on(p, y, T);
      } catch (D) {
        return D;
      }
    };
    S.off = function(f, p, y) {
      return this._events ? (this._events = R(fe, this._events, f, p, {
        context: y,
        listeners: this._listeners
      }), this) : this;
    }, S.stopListening = function(f, p, y) {
      var T = this._listeningTo;
      if (!T)
        return this;
      for (var D = f ? [f._listenId] : s.keys(T), I = 0; I < D.length; I++) {
        var U = T[D[I]];
        if (!U)
          break;
        U.obj.off(p, y, this), U.interop && U.off(p, y);
      }
      return s.isEmpty(T) && (this._listeningTo = void 0), this;
    };
    var fe = function(f, p, y, T) {
      if (f) {
        var D = T.context, I = T.listeners, U = 0, ee;
        if (!p && !D && !y) {
          for (ee = s.keys(I); U < ee.length; U++)
            I[ee[U]].cleanup();
          return;
        }
        for (ee = p ? [p] : s.keys(f); U < ee.length; U++) {
          p = ee[U];
          var ue = f[p];
          if (!ue)
            break;
          for (var me = [], ge = 0; ge < ue.length; ge++) {
            var k = ue[ge];
            if (y && y !== k.callback && y !== k.callback._callback || D && D !== k.context)
              me.push(k);
            else {
              var ce = k.listening;
              ce && ce.off(p, y);
            }
          }
          me.length ? f[p] = me : delete f[p];
        }
        return f;
      }
    };
    S.once = function(f, p, y) {
      var T = R(G, {}, f, p, this.off.bind(this));
      return typeof f == "string" && y == null && (p = void 0), this.on(T, p, y);
    }, S.listenToOnce = function(f, p, y) {
      var T = R(G, {}, p, y, this.stopListening.bind(this, f));
      return this.listenTo(f, T);
    };
    var G = function(f, p, y, T) {
      if (y) {
        var D = f[p] = s.once(function() {
          T(p, D), y.apply(this, arguments);
        });
        D._callback = y;
      }
      return f;
    };
    S.trigger = function(f) {
      if (!this._events)
        return this;
      for (var p = Math.max(0, arguments.length - 1), y = Array(p), T = 0; T < p; T++)
        y[T] = arguments[T + 1];
      return R(W, this._events, f, void 0, y), this;
    };
    var W = function(f, p, y, T) {
      if (f) {
        var D = f[p], I = f.all;
        D && I && (I = I.slice()), D && Te(D, T), I && Te(I, [p].concat(T));
      }
      return f;
    }, Te = function(f, p) {
      var y, T = -1, D = f.length, I = p[0], U = p[1], ee = p[2];
      switch (p.length) {
        case 0:
          for (; ++T < D; )
            (y = f[T]).callback.call(y.ctx);
          return;
        case 1:
          for (; ++T < D; )
            (y = f[T]).callback.call(y.ctx, I);
          return;
        case 2:
          for (; ++T < D; )
            (y = f[T]).callback.call(y.ctx, I, U);
          return;
        case 3:
          for (; ++T < D; )
            (y = f[T]).callback.call(y.ctx, I, U, ee);
          return;
        default:
          for (; ++T < D; )
            (y = f[T]).callback.apply(y.ctx, p);
          return;
      }
    }, j = function(f, p) {
      this.id = f._listenId, this.listener = f, this.obj = p, this.interop = !0, this.count = 0, this._events = void 0;
    };
    j.prototype.on = S.on, j.prototype.off = function(f, p) {
      var y;
      this.interop ? (this._events = R(fe, this._events, f, p, {
        context: void 0,
        listeners: void 0
      }), y = !this._events) : (this.count--, y = this.count === 0), y && this.cleanup();
    }, j.prototype.cleanup = function() {
      delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
    }, S.bind = S.on, S.unbind = S.off, s.extend(c, S);
    var ye = c.Model = function(f, p) {
      var y = f || {};
      p || (p = {}), this.preinitialize.apply(this, arguments), this.cid = s.uniqueId(this.cidPrefix), this.attributes = {}, p.collection && (this.collection = p.collection), p.parse && (y = this.parse(y, p) || {});
      var T = s.result(this, "defaults");
      y = s.defaults(s.extend({}, T, y), T), this.set(y, p), this.changed = {}, this.initialize.apply(this, arguments);
    };
    s.extend(ye.prototype, S, {
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
        var T;
        if (typeof f == "object" ? (T = f, y = p) : (T = {})[f] = p, y || (y = {}), !this._validate(T, y))
          return !1;
        var D = y.unset, I = y.silent, U = [], ee = this._changing;
        this._changing = !0, ee || (this._previousAttributes = s.clone(this.attributes), this.changed = {});
        var ue = this.attributes, me = this.changed, ge = this._previousAttributes;
        for (var k in T)
          p = T[k], s.isEqual(ue[k], p) || U.push(k), s.isEqual(ge[k], p) ? delete me[k] : me[k] = p, D ? delete ue[k] : ue[k] = p;
        if (this.idAttribute in T) {
          var ce = this.id;
          this.id = this.get(this.idAttribute), this.trigger("changeId", this, ce, y);
        }
        if (!I) {
          U.length && (this._pending = y);
          for (var Ke = 0; Ke < U.length; Ke++)
            this.trigger("change:" + U[Ke], this, ue[U[Ke]], y);
        }
        if (ee)
          return this;
        if (!I)
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
        var p = this._changing ? this._previousAttributes : this.attributes, y = {}, T;
        for (var D in f) {
          var I = f[D];
          s.isEqual(p[D], I) || (y[D] = I, T = !0);
        }
        return T ? y : !1;
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
        return f.success = function(T) {
          var D = f.parse ? p.parse(T, f) : T;
          if (!p.set(D, f))
            return !1;
          y && y.call(f.context, p, T, f), p.trigger("sync", p, T, f);
        }, st(this, f), this.sync("read", this, f);
      },
      // Set a hash of model attributes, and sync the model to the server.
      // If the server returns an attributes hash that differs, the model's
      // state will be `set` again.
      save: function(f, p, y) {
        var T;
        f == null || typeof f == "object" ? (T = f, y = p) : (T = {})[f] = p, y = s.extend({ validate: !0, parse: !0 }, y);
        var D = y.wait;
        if (T && !D) {
          if (!this.set(T, y))
            return !1;
        } else if (!this._validate(T, y))
          return !1;
        var I = this, U = y.success, ee = this.attributes;
        y.success = function(ge) {
          I.attributes = ee;
          var k = y.parse ? I.parse(ge, y) : ge;
          if (D && (k = s.extend({}, T, k)), k && !I.set(k, y))
            return !1;
          U && U.call(y.context, I, ge, y), I.trigger("sync", I, ge, y);
        }, st(this, y), T && D && (this.attributes = s.extend({}, ee, T));
        var ue = this.isNew() ? "create" : y.patch ? "patch" : "update";
        ue === "patch" && !y.attrs && (y.attrs = T);
        var me = this.sync(ue, this, y);
        return this.attributes = ee, me;
      },
      // Destroy this model on the server if it was already persisted.
      // Optimistically removes the model from its collection, if it has one.
      // If `wait: true` is passed, waits for the server to respond before removal.
      destroy: function(f) {
        f = f ? s.clone(f) : {};
        var p = this, y = f.success, T = f.wait, D = function() {
          p.stopListening(), p.trigger("destroy", p, p.collection, f);
        };
        f.success = function(U) {
          T && D(), y && y.call(f.context, p, U, f), p.isNew() || p.trigger("sync", p, U, f);
        };
        var I = !1;
        return this.isNew() ? s.defer(f.success) : (st(this, f), I = this.sync("delete", this, f)), T || D(), I;
      },
      // Default URL for the model's representation on the server -- if you're
      // using Backbone's restful methods, override this to change the endpoint
      // that will be called.
      url: function() {
        var f = s.result(this, "urlRoot") || s.result(this.collection, "url") || at();
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
    var pe = c.Collection = function(f, p) {
      p || (p = {}), this.preinitialize.apply(this, arguments), p.model && (this.model = p.model), p.comparator !== void 0 && (this.comparator = p.comparator), this._reset(), this.initialize.apply(this, arguments), f && this.reset(f, s.extend({ silent: !0 }, p));
    }, be = { add: !0, remove: !0, merge: !0 }, Be = { add: !0, remove: !1 }, it = function(f, p, y) {
      y = Math.min(Math.max(y, 0), f.length);
      var T = Array(f.length - y), D = p.length, I;
      for (I = 0; I < T.length; I++)
        T[I] = f[I + y];
      for (I = 0; I < D; I++)
        f[I + y] = p[I];
      for (I = 0; I < T.length; I++)
        f[I + D + y] = T[I];
    };
    s.extend(pe.prototype, S, {
      // The default model for a collection is just a **Backbone.Model**.
      // This should be overridden in most cases.
      model: ye,
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
        return this.set(f, s.extend({ merge: !1 }, p, Be));
      },
      // Remove a model, or a list of models from the set.
      remove: function(f, p) {
        p = s.extend({}, p);
        var y = !s.isArray(f);
        f = y ? [f] : f.slice();
        var T = this._removeModels(f, p);
        return !p.silent && T.length && (p.changes = { added: [], merged: [], removed: T }, this.trigger("update", this, p)), y ? T[0] : T;
      },
      // Update a collection by `set`-ing a new list of models, adding new ones,
      // removing models that are no longer present, and merging models that
      // already exist in the collection, as necessary. Similar to **Model#set**,
      // the core operation for updating the data contained by the collection.
      set: function(f, p) {
        if (f != null) {
          p = s.extend({}, be, p), p.parse && !this._isModel(f) && (f = this.parse(f, p) || []);
          var y = !s.isArray(f);
          f = y ? [f] : f.slice();
          var T = p.at;
          T != null && (T = +T), T > this.length && (T = this.length), T < 0 && (T += this.length + 1);
          var D = [], I = [], U = [], ee = [], ue = {}, me = p.add, ge = p.merge, k = p.remove, ce = !1, Ke = this.comparator && T == null && p.sort !== !1, Yn = s.isString(this.comparator) ? this.comparator : null, ve, xe;
          for (xe = 0; xe < f.length; xe++) {
            ve = f[xe];
            var ke = this.get(ve);
            if (ke) {
              if (ge && ve !== ke) {
                var ot = this._isModel(ve) ? ve.attributes : ve;
                p.parse && (ot = ke.parse(ot, p)), ke.set(ot, p), U.push(ke), Ke && !ce && (ce = ke.hasChanged(Yn));
              }
              ue[ke.cid] || (ue[ke.cid] = !0, D.push(ke)), f[xe] = ke;
            } else
              me && (ve = f[xe] = this._prepareModel(ve, p), ve && (I.push(ve), this._addReference(ve, p), ue[ve.cid] = !0, D.push(ve)));
          }
          if (k) {
            for (xe = 0; xe < this.length; xe++)
              ve = this.models[xe], ue[ve.cid] || ee.push(ve);
            ee.length && this._removeModels(ee, p);
          }
          var Ue = !1, lt = !Ke && me && k;
          if (D.length && lt ? (Ue = this.length !== D.length || s.some(this.models, function(pt, Kn) {
            return pt !== D[Kn];
          }), this.models.length = 0, it(this.models, D, 0), this.length = this.models.length) : I.length && (Ke && (ce = !0), it(this.models, I, T ?? this.length), this.length = this.models.length), ce && this.sort({ silent: !0 }), !p.silent) {
            for (xe = 0; xe < I.length; xe++)
              T != null && (p.index = T + xe), ve = I[xe], ve.trigger("add", ve, this, p);
            (ce || Ue) && this.trigger("sort", this, p), (I.length || ee.length || U.length) && (p.changes = {
              added: I,
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
        return F.apply(this.models, arguments);
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
        return f.success = function(T) {
          var D = f.reset ? "reset" : "set";
          y[D](T, f), p && p.call(f.context, y, T, f), y.trigger("sync", y, T, f);
        }, st(this, f), this.sync("read", this, f);
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
        var T = this, D = p.success;
        return p.success = function(I, U, ee) {
          y && (I.off("error", T._forwardPristineError, T), T.add(I, ee)), D && D.call(ee.context, I, U, ee);
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
        return new $e(this, ne);
      },
      // Get an iterator of all model IDs in this collection.
      keys: function() {
        return new $e(this, ut);
      },
      // Get an iterator of all [ID, model] tuples in this collection.
      entries: function() {
        return new $e(this, Gn);
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
        for (var y = [], T = 0; T < f.length; T++) {
          var D = this.get(f[T]);
          if (D) {
            var I = this.indexOf(D);
            this.models.splice(I, 1), this.length--, delete this._byId[D.cid];
            var U = this.modelId(D.attributes, D.idAttribute);
            U != null && delete this._byId[U], p.silent || (p.index = I, D.trigger("remove", D, this, p)), y.push(D), this._removeReference(D, p);
          }
        }
        return f.length > 0 && !p.silent && delete p.index, y;
      },
      // Method for checking whether an object should be considered a model for
      // the purposes of adding to the collection.
      _isModel: function(f) {
        return f instanceof ye;
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
      _onModelEvent: function(f, p, y, T) {
        if (p) {
          if ((f === "add" || f === "remove") && y !== this)
            return;
          if (f === "destroy" && this.remove(p, T), f === "changeId") {
            var D = this.modelId(p.previousAttributes(), p.idAttribute), I = this.modelId(p.attributes, p.idAttribute);
            D != null && delete this._byId[D], I != null && (this._byId[I] = p);
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
    a && (pe.prototype[a] = pe.prototype.values);
    var $e = function(f, p) {
      this._collection = f, this._kind = p, this._index = 0;
    }, ne = 1, ut = 2, Gn = 3;
    a && ($e.prototype[a] = function() {
      return this;
    }), $e.prototype.next = function() {
      if (this._collection) {
        if (this._index < this._collection.length) {
          var f = this._collection.at(this._index);
          this._index++;
          var p;
          if (this._kind === ne)
            p = f;
          else {
            var y = this._collection.modelId(f.attributes, f.idAttribute);
            this._kind === ut ? p = y : p = [y, f];
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
    s.extend(hn.prototype, S, {
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
            var T = p.match(ae);
            this.delegate(T[1], T[2], y.bind(this));
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
    var Bn = function(f, p, y, T) {
      switch (p) {
        case 1:
          return function() {
            return f[y](this[T]);
          };
        case 2:
          return function(D) {
            return f[y](this[T], D);
          };
        case 3:
          return function(D, I) {
            return f[y](this[T], qe(D, this), I);
          };
        case 4:
          return function(D, I, U) {
            return f[y](this[T], qe(D, this), I, U);
          };
        default:
          return function() {
            var D = F.call(arguments);
            return D.unshift(this[T]), f[y].apply(f, D);
          };
      }
    }, dn = function(f, p, y, T) {
      s.each(y, function(D, I) {
        p[I] && (f.prototype[I] = Bn(p, D, I, T));
      });
    }, qe = function(f, p) {
      return s.isFunction(f) ? f : s.isObject(f) && !p._isModel(f) ? Wt(f) : s.isString(f) ? function(y) {
        return y.get(f);
      } : f;
    }, Wt = function(f) {
      var p = s.matches(f);
      return function(y) {
        return p(y.attributes);
      };
    }, dt = {
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
      [pe, dt, "models"],
      [ye, pn, "attributes"]
    ], function(f) {
      var p = f[0], y = f[1], T = f[2];
      p.mixin = function(D) {
        var I = s.reduce(s.functions(D), function(U, ee) {
          return U[ee] = 0, U;
        }, {});
        dn(p, D, I, T);
      }, dn(p, s, y, T);
    }), c.sync = function(f, p, y) {
      var T = gn[f];
      s.defaults(y || (y = {}), {
        emulateHTTP: c.emulateHTTP,
        emulateJSON: c.emulateJSON
      });
      var D = { type: T, dataType: "json" };
      if (y.url || (D.url = s.result(p, "url") || at()), y.data == null && p && (f === "create" || f === "update" || f === "patch") && (D.contentType = "application/json", D.data = JSON.stringify(y.attrs || p.toJSON(y))), y.emulateJSON && (D.contentType = "application/x-www-form-urlencoded", D.data = D.data ? { model: D.data } : {}), y.emulateHTTP && (T === "PUT" || T === "DELETE" || T === "PATCH")) {
        D.type = "POST", y.emulateJSON && (D.data._method = T);
        var I = y.beforeSend;
        y.beforeSend = function(ue) {
          if (ue.setRequestHeader("X-HTTP-Method-Override", T), I)
            return I.apply(this, arguments);
        };
      }
      D.type !== "GET" && !y.emulateJSON && (D.processData = !1);
      var U = y.error;
      y.error = function(ue, me, ge) {
        y.textStatus = me, y.errorThrown = ge, U && U.call(y.context, ue, me, ge);
      };
      var ee = y.xhr = c.ajax(s.extend(D, y));
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
    var Gt = c.Router = function(f) {
      f || (f = {}), this.preinitialize.apply(this, arguments), f.routes && (this.routes = f.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, Bt = /\((.*?)\)/g, vn = /(\(\?)?:\w+/g, zn = /\*\w+/g, Jn = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(Gt.prototype, S, {
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
        var T = this;
        return c.history.route(f, function(D) {
          var I = T._extractParameters(f, D);
          T.execute(y, I, p) !== !1 && (T.trigger.apply(T, ["route:" + p].concat(I)), T.trigger("route", p, I), c.history.trigger("route", T, p, I));
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
        return f = f.replace(Jn, "\\$&").replace(Bt, "(?:$1)?").replace(vn, function(p, y) {
          return y ? p : "([^/?]+)";
        }).replace(zn, "([^?]*?)"), new RegExp("^" + f + "(?:\\?([\\s\\S]*))?$");
      },
      // Given a route, and a URL fragment that it matches, return the array of
      // extracted decoded parameters. Empty or unmatched parameters will be
      // treated as `null` to normalize cross-browser behavior.
      _extractParameters: function(f, p) {
        var y = f.exec(p).slice(1);
        return s.map(y, function(T, D) {
          return D === y.length - 1 ? T || null : T ? decodeURIComponent(T) : null;
        });
      }
    });
    var Ye = c.History = function() {
      this.handlers = [], this.checkUrl = this.checkUrl.bind(this), typeof window < "u" && (this.location = window.location, this.history = window.history);
    }, Xn = /^[#\/]|\s+$/g, mn = /^\/+|\/+$/g, Re = /#.*$/;
    Ye.started = !1, s.extend(Ye.prototype, S, {
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
        return f == null && (this._usePushState || !this._wantsHashChange ? f = this.getPath() : f = this.getHash()), f.replace(Xn, "");
      },
      // Start the hash change handling, returning `true` if the current URL matches
      // an existing route, and `false` otherwise.
      start: function(f) {
        if (Ye.started)
          throw new Error("Backbone.history has already been started");
        if (Ye.started = !0, this.options = s.extend({ root: "/" }, this.options, f), this.root = this.options.root, this._trailingSlash = this.options.trailingSlash, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(mn, "/"), this._wantsHashChange && this._wantsPushState)
          if (!this._hasPushState && !this.atRoot()) {
            var p = this.root.slice(0, -1) || "/";
            return this.location.replace(p + "#" + this.getPath()), !0;
          } else
            this._hasPushState && this.atRoot() && this.navigate(this.getHash(), { replace: !0 });
        if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
          this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", this.iframe.tabIndex = -1;
          var y = document.body, T = y.insertBefore(this.iframe, y.firstChild).contentWindow;
          T.document.open(), T.document.close(), T.location.hash = "#" + this.fragment;
        }
        var D = window.addEventListener || function(I, U) {
          return attachEvent("on" + I, U);
        };
        if (this._usePushState ? D("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? D("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
          return this.loadUrl();
      },
      // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
      // but possibly useful for unit testing Routers.
      stop: function() {
        var f = window.removeEventListener || function(p, y) {
          return detachEvent("on" + p, y);
        };
        this._usePushState ? f("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && f("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Ye.started = !1;
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
        if (!Ye.started)
          return !1;
        (!p || p === !0) && (p = { trigger: !!p }), f = this.getFragment(f || "");
        var y = this.root;
        !this._trailingSlash && (f === "" || f.charAt(0) === "?") && (y = y.slice(0, -1) || "/");
        var T = y + f;
        f = f.replace(Re, "");
        var D = this.decodeFragment(f);
        if (this.fragment !== D) {
          if (this.fragment = D, this._usePushState)
            this.history[p.replace ? "replaceState" : "pushState"]({}, document.title, T);
          else if (this._wantsHashChange) {
            if (this._updateHash(this.location, f, p.replace), this.iframe && f !== this.getHash(this.iframe.contentWindow)) {
              var I = this.iframe.contentWindow;
              p.replace || (I.document.open(), I.document.close()), this._updateHash(I.location, f, p.replace);
            }
          } else
            return this.location.assign(T);
          if (p.trigger)
            return this.loadUrl(f);
        }
      },
      // Update the hash location, either replacing the current entry, or adding
      // a new one to the browser history.
      _updateHash: function(f, p, y) {
        if (y) {
          var T = f.href.replace(/(javascript:|#).*$/, "");
          f.replace(T + "#" + p);
        } else
          f.hash = "#" + p;
      }
    }), c.history = new Ye();
    var Qn = function(f, p) {
      var y = this, T;
      return f && s.has(f, "constructor") ? T = f.constructor : T = function() {
        return y.apply(this, arguments);
      }, s.extend(T, y, p), T.prototype = s.create(y.prototype, f), T.prototype.constructor = T, T.__super__ = y.prototype, T;
    };
    ye.extend = pe.extend = Gt.extend = hn.extend = Ye.extend = Qn;
    var at = function() {
      throw new Error('A "url" property or function must be specified');
    }, st = function(f, p) {
      var y = p.error;
      p.error = function(T) {
        y && y.call(p.context, f, T, p), f.trigger("error", f, T, p);
      };
    };
    return c._debug = function() {
      return { root: n, _: s };
    }, c;
  });
})(au);
const vo = /* @__PURE__ */ tu(au);
function Ha(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void Ha(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
const Pa = girder.views.widgets.FileListWidget, yo = girder.router, { wrap: bo } = girder.utilities.PluginUtils;
bo(Pa, "render", function(i) {
  return i.call(this), this.$(".g-file-actions-container").prepend(mo()), this;
});
Pa.prototype.events["click a.g-create-thumbnail"] = function(i) {
  var n = Xe(i.currentTarget).parent().attr("file-cid");
  new Cr({
    el: Xe("#g-dialog-container"),
    parentView: this,
    item: this.parentItem,
    file: this.collection.get(n)
  }).once("submit #g-create-thumbnail-form", function(c) {
    vo.history.fragment = null, yo.navigate(c.attachedToType + "/" + c.attachedToId, { trigger: !0 });
  }, this).render();
};
function An(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = wo(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function wo(i) {
  var n = "" + i, c = Fo.exec(n);
  if (!c)
    return i;
  var s, d, g, F = "";
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
    d !== s && (F += n.substring(d, s)), d = s + 1, F += g;
  }
  return d !== s ? F + n.substring(d, s) : F;
}
var Fo = /["&<>]/;
function Ma(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void Ma(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
    (function(g, F, S) {
      s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-flow-container">', s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", (function() {
        var H = S;
        if (typeof H.length == "number")
          for (var M = 0, R = H.length; M < R; M++) {
            var Q = H[M];
            s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + An("g-file-id", Q.id, !0, !1)) + ">", s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", F >= g.WRITE && (s = 5, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + An("src", Q.downloadUrl(), !0, !1)) + "/></div>";
          }
        else {
          var R = 0;
          for (var M in H) {
            R++;
            var Q = H[M];
            s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + An("g-file-id", Q.id, !0, !1)) + ">", s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", F >= g.WRITE && (s = 5, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + An("src", Q.downloadUrl(), !0, !1)) + "/></div>";
          }
        }
      }).call(this), n = n + "</div>";
    }).call(this, "AccessType" in d ? d.AccessType : typeof AccessType < "u" ? AccessType : void 0, "accessLevel" in d ? d.accessLevel : typeof accessLevel < "u" ? accessLevel : void 0, "thumbnails" in d ? d.thumbnails : typeof thumbnails < "u" ? thumbnails : void 0);
  } catch (g) {
    Ma(g, c, s);
  }
  return n;
}
const To = girder.models.FileModel, _o = girder.views.View, { AccessType: eu } = girder.constants, { confirm: Co } = girder.dialog, Eo = girder.events;
var So = _o.extend({
  events: {
    "click .g-thumbnail-delete": function(i) {
      var n = Xe(i.currentTarget).parents(".g-thumbnail-container"), c = new To({ _id: n.attr("g-file-id") });
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
    this.thumbnails = i.thumbnails, this.accessLevel = i.accessLevel || eu.READ;
  },
  render: function() {
    return this.$el.html(xo({
      thumbnails: this.thumbnails.toArray(),
      accessLevel: this.accessLevel,
      AccessType: eu
    })), this;
  }
});
function $a(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void $a(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
function Ao(i) {
  var n = "", c, s;
  try {
    s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-thumbnails-header-container">', s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-item-info-header">', s = 3, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<i class="icon-picture"></i>', s = 4, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + "Chameleon Conversions</div></div>";
  } catch (d) {
    $a(d, c, s);
  }
  return n;
}
const Do = girder.collections.FileCollection, No = girder.views.body.ItemView, { wrap: Oo } = girder.utilities.PluginUtils;
Oo(No, "render", function(i) {
  this.once("g:rendered", function() {
    const n = new Do(
      Pn.map(this.model.get("_thumbnails"), (c) => ({ _id: c }))
    );
    n && n.length && (this.$(".g-item-info").before(Ao()), new So({
      className: "g-thumbnails-flow-view-container",
      parentView: this,
      thumbnails: n,
      accessLevel: this.model.getAccessLevel()
    }).render().$el.insertBefore(this.$(".g-item-info")));
  }, this), i.call(this);
});
function Io(i, n, c, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), c || n.indexOf('"') === -1) ? (c && (n = Ho(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Ho(i) {
  var n = "" + i, c = Po.exec(n);
  if (!c)
    return i;
  var s, d, g, F = "";
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
    d !== s && (F += n.substring(d, s)), d = s + 1, F += g;
  }
  return d !== s ? F + n.substring(d, s) : F;
}
var Po = /["&<>]/;
function ka(i, n, c, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + c, i;
  var d, g, F, S;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(c - d, 0), S = Math.min(g.length, c + d);
  } catch (H) {
    return i.message += " - could not read from " + n + " (" + H.message + ")", void ka(i, null, c);
  }
  d = g.slice(F, S).map(function(H, M) {
    var R = M + F + 1;
    return (R == c ? "  > " : "    ") + R + "| " + H;
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
function Mo(i) {
  var n = "", c, s;
  try {
    var d = i || {};
    (function(g) {
      s = 1, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + "<a" + (' class="g-create-thumbnail"' + Io("data-item-id", `${g ? g.id : ""}`, !0, !1) + ' title="Create chameleon conversion of this file"') + ">", s = 2, c = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
    }).call(this, "item" in d ? d.item : typeof item < "u" ? item : void 0);
  } catch (g) {
    ka(g, c, s);
  }
  return n;
}
const La = girder.views.widgets.ItemListWidget;
girder.router;
const { wrap: $o } = girder.utilities.PluginUtils;
$o(La, "render", function(i) {
  return i.call(this), this.$("li.g-item-list-entry").each((n, c) => {
    let s = this.collection.at(n);
    s && Xe(c).append(Mo({ item: s }));
  }), this;
});
La.prototype.events["click a.g-create-thumbnail"] = function(i) {
  i.preventDefault();
  let n = Xe(i.currentTarget).attr("data-item-id"), c = this.collection.find((d) => d.id === n);
  new Cr({
    parentView: this,
    item: c,
    file: this.collection.get(c.cid)
    // Assuming file is associated
  }).executeChameleonJob();
};
const { wrap: ko } = girder.utilities.PluginUtils, Lo = girder.views.body.ItemView;
ko(Lo, "render", function(i) {
  i.apply(this, arguments), this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>'), this.$(".g-open-chameleon").on("click", () => {
    new Cr({
      item: this.model,
      // Pass the item model
      file: this.model.file
    }).render();
  });
});
//# sourceMappingURL=girder-plugin-chameleon.js.map
