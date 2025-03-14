var Wi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Bi(T) {
  return T && T.__esModule && Object.prototype.hasOwnProperty.call(T, "default") ? T.default : T;
}
var Hn = { exports: {} };
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
(function(T) {
  (function(c, A) {
    T.exports = c.document ? A(c, !0) : function(y) {
      if (!y.document)
        throw new Error("jQuery requires a window with a document");
      return A(y);
    };
  })(typeof window < "u" ? window : Wi, function(c, A) {
    var y = [], w = Object.getPrototypeOf, H = y.slice, R = y.flat ? function(e) {
      return y.flat.call(e);
    } : function(e) {
      return y.concat.apply([], e);
    }, re = y.push, Q = y.indexOf, Y = {}, te = Y.toString, we = Y.hasOwnProperty, je = we.toString, Oe = je.call(Object), P = {}, j = function(t) {
      return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
    }, Z = function(t) {
      return t != null && t === t.window;
    }, O = c.document, st = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };
    function lt(e, t, n) {
      n = n || O;
      var i, u, a = n.createElement("script");
      if (a.text = e, t)
        for (i in st)
          u = t[i] || t.getAttribute && t.getAttribute(i), u && a.setAttribute(i, u);
      n.head.appendChild(a).parentNode.removeChild(a);
    }
    function Ee(e) {
      return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? Y[te.call(e)] || "object" : typeof e;
    }
    var Se = "3.7.1", Ue = /HTML$/i, r = function(e, t) {
      return new r.fn.init(e, t);
    };
    r.fn = r.prototype = {
      // The current version of jQuery being used
      jquery: Se,
      constructor: r,
      // The default length of a jQuery object is 0
      length: 0,
      toArray: function() {
        return H.call(this);
      },
      // Get the Nth element in the matched element set OR
      // Get the whole matched element set as a clean array
      get: function(e) {
        return e == null ? H.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      // Take an array of elements and push it onto the stack
      // (returning the new matched element set)
      pushStack: function(e) {
        var t = r.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      // Execute a callback for every element in the matched set.
      each: function(e) {
        return r.each(this, e);
      },
      map: function(e) {
        return this.pushStack(r.map(this, function(t, n) {
          return e.call(t, n, t);
        }));
      },
      slice: function() {
        return this.pushStack(H.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(r.grep(this, function(e, t) {
          return (t + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(r.grep(this, function(e, t) {
          return t % 2;
        }));
      },
      eq: function(e) {
        var t = this.length, n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      // For internal use only.
      // Behaves like an Array's method, not like a jQuery method.
      push: re,
      sort: y.sort,
      splice: y.splice
    }, r.extend = r.fn.extend = function() {
      var e, t, n, i, u, a, o = arguments[0] || {}, f = 1, l = arguments.length, d = !1;
      for (typeof o == "boolean" && (d = o, o = arguments[f] || {}, f++), typeof o != "object" && !j(o) && (o = {}), f === l && (o = this, f--); f < l; f++)
        if ((e = arguments[f]) != null)
          for (t in e)
            i = e[t], !(t === "__proto__" || o === i) && (d && i && (r.isPlainObject(i) || (u = Array.isArray(i))) ? (n = o[t], u && !Array.isArray(n) ? a = [] : !u && !r.isPlainObject(n) ? a = {} : a = n, u = !1, o[t] = r.extend(d, a, i)) : i !== void 0 && (o[t] = i));
      return o;
    }, r.extend({
      // Unique for each copy of jQuery on the page
      expando: "jQuery" + (Se + Math.random()).replace(/\D/g, ""),
      // Assume jQuery is ready without the ready module
      isReady: !0,
      error: function(e) {
        throw new Error(e);
      },
      noop: function() {
      },
      isPlainObject: function(e) {
        var t, n;
        return !e || te.call(e) !== "[object Object]" ? !1 : (t = w(e), t ? (n = we.call(t, "constructor") && t.constructor, typeof n == "function" && je.call(n) === Oe) : !0);
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e)
          return !1;
        return !0;
      },
      // Evaluates a script in a provided context; falls back to the global one
      // if not specified.
      globalEval: function(e, t, n) {
        lt(e, { nonce: t && t.nonce }, n);
      },
      each: function(e, t) {
        var n, i = 0;
        if (xt(e))
          for (n = e.length; i < n && t.call(e[i], i, e[i]) !== !1; i++)
            ;
        else
          for (i in e)
            if (t.call(e[i], i, e[i]) === !1)
              break;
        return e;
      },
      // Retrieve the text value of an array of DOM nodes
      text: function(e) {
        var t, n = "", i = 0, u = e.nodeType;
        if (!u)
          for (; t = e[i++]; )
            n += r.text(t);
        return u === 1 || u === 11 ? e.textContent : u === 9 ? e.documentElement.textContent : u === 3 || u === 4 ? e.nodeValue : n;
      },
      // results is for internal usage only
      makeArray: function(e, t) {
        var n = t || [];
        return e != null && (xt(Object(e)) ? r.merge(
          n,
          typeof e == "string" ? [e] : e
        ) : re.call(n, e)), n;
      },
      inArray: function(e, t, n) {
        return t == null ? -1 : Q.call(t, e, n);
      },
      isXMLDoc: function(e) {
        var t = e && e.namespaceURI, n = e && (e.ownerDocument || e).documentElement;
        return !Ue.test(t || n && n.nodeName || "HTML");
      },
      // Support: Android <=4.0 only, PhantomJS 1 only
      // push.apply(_, arraylike) throws on ancient WebKit
      merge: function(e, t) {
        for (var n = +t.length, i = 0, u = e.length; i < n; i++)
          e[u++] = t[i];
        return e.length = u, e;
      },
      grep: function(e, t, n) {
        for (var i, u = [], a = 0, o = e.length, f = !n; a < o; a++)
          i = !t(e[a], a), i !== f && u.push(e[a]);
        return u;
      },
      // arg is for internal usage only
      map: function(e, t, n) {
        var i, u, a = 0, o = [];
        if (xt(e))
          for (i = e.length; a < i; a++)
            u = t(e[a], a, n), u != null && o.push(u);
        else
          for (a in e)
            u = t(e[a], a, n), u != null && o.push(u);
        return R(o);
      },
      // A global GUID counter for objects
      guid: 1,
      // jQuery.support is not used in Core but other projects attach their
      // properties to it so it needs to exist.
      support: P
    }), typeof Symbol == "function" && (r.fn[Symbol.iterator] = y[Symbol.iterator]), r.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase();
      }
    );
    function xt(e) {
      var t = !!e && "length" in e && e.length, n = Ee(e);
      return j(e) || Z(e) ? !1 : n === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
    }
    function X(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var Un = y.pop, In = y.sort, Vn = y.splice, B = "[\\x20\\t\\r\\n\\f]", Qe = new RegExp(
      "^" + B + "+|((?:^|[^\\\\])(?:\\\\.)*)" + B + "+$",
      "g"
    );
    r.contains = function(e, t) {
      var n = t && t.parentNode;
      return e === n || !!(n && n.nodeType === 1 && // Support: IE 9 - 11+
      // IE doesn't have `contains` on SVG.
      (e.contains ? e.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16));
    };
    var Rn = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function Gn(e, t) {
      return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
    }
    r.escapeSelector = function(e) {
      return (e + "").replace(Rn, Gn);
    };
    var xe = O, _t = re;
    (function() {
      var e, t, n, i, u, a = _t, o, f, l, d, F, b = r.expando, g = 0, x = 0, q = yt(), G = yt(), M = yt(), ee = yt(), K = function(s, p) {
        return s === p && (u = !0), 0;
      }, me = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ye = "(?:\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", V = "\\[" + B + "*(" + ye + ")(?:" + B + // Operator (capture 2)
      "*([*^$|!~]?=)" + B + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
      `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + ye + "))|)" + B + "*\\]", Pe = ":(" + ye + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + V + ")*)|.*)\\)|)", $ = new RegExp(B + "+", "g"), J = new RegExp("^" + B + "*," + B + "*"), ut = new RegExp("^" + B + "*([>+~]|" + B + ")" + B + "*"), It = new RegExp(B + "|>"), Fe = new RegExp(Pe), at = new RegExp("^" + ye + "$"), ve = {
        ID: new RegExp("^#(" + ye + ")"),
        CLASS: new RegExp("^\\.(" + ye + ")"),
        TAG: new RegExp("^(" + ye + "|[*])"),
        ATTR: new RegExp("^" + V),
        PSEUDO: new RegExp("^" + Pe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + B + "*(even|odd|(([+-]|)(\\d*)n|)" + B + "*(?:([+-]|)" + B + "*(\\d+)|))" + B + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + me + ")$", "i"),
        // For use in libraries implementing .is()
        // We use this for POS matching in `select`
        needsContext: new RegExp("^" + B + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + B + "*((?:-\\d)?\\d*)" + B + "*\\)|)(?=[^-]|$)", "i")
      }, ke = /^(?:input|select|textarea|button)$/i, Ae = /^h\d$/i, ce = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, Vt = /[+~]/, Ce = new RegExp("\\\\[\\da-fA-F]{1,6}" + B + "?|\\\\([^\\r\\n\\f])", "g"), De = function(s, p) {
        var h = "0x" + s.slice(1) - 65536;
        return p || (h < 0 ? String.fromCharCode(h + 65536) : String.fromCharCode(h >> 10 | 55296, h & 1023 | 56320));
      }, Mi = function() {
        Ne();
      }, Ui = vt(
        function(s) {
          return s.disabled === !0 && X(s, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function Ii() {
        try {
          return o.activeElement;
        } catch {
        }
      }
      try {
        a.apply(
          y = H.call(xe.childNodes),
          xe.childNodes
        ), y[xe.childNodes.length].nodeType;
      } catch {
        a = {
          apply: function(p, h) {
            _t.apply(p, H.call(h));
          },
          call: function(p) {
            _t.apply(p, H.call(arguments, 1));
          }
        };
      }
      function W(s, p, h, m) {
        var v, _, C, E, D, U, N, L = p && p.ownerDocument, I = p ? p.nodeType : 9;
        if (h = h || [], typeof s != "string" || !s || I !== 1 && I !== 9 && I !== 11)
          return h;
        if (!m && (Ne(p), p = p || o, l)) {
          if (I !== 11 && (D = ce.exec(s)))
            if (v = D[1]) {
              if (I === 9)
                if (C = p.getElementById(v)) {
                  if (C.id === v)
                    return a.call(h, C), h;
                } else
                  return h;
              else if (L && (C = L.getElementById(v)) && W.contains(p, C) && C.id === v)
                return a.call(h, C), h;
            } else {
              if (D[2])
                return a.apply(h, p.getElementsByTagName(s)), h;
              if ((v = D[3]) && p.getElementsByClassName)
                return a.apply(h, p.getElementsByClassName(v)), h;
            }
          if (!ee[s + " "] && (!d || !d.test(s))) {
            if (N = s, L = p, I === 1 && (It.test(s) || ut.test(s))) {
              for (L = Vt.test(s) && Rt(p.parentNode) || p, (L != p || !P.scope) && ((E = p.getAttribute("id")) ? E = r.escapeSelector(E) : p.setAttribute("id", E = b)), U = ot(s), _ = U.length; _--; )
                U[_] = (E ? "#" + E : ":scope") + " " + Ft(U[_]);
              N = U.join(",");
            }
            try {
              return a.apply(
                h,
                L.querySelectorAll(N)
              ), h;
            } catch {
              ee(s, !0);
            } finally {
              E === b && p.removeAttribute("id");
            }
          }
        }
        return qn(s.replace(Qe, "$1"), p, h, m);
      }
      function yt() {
        var s = [];
        function p(h, m) {
          return s.push(h + " ") > t.cacheLength && delete p[s.shift()], p[h + " "] = m;
        }
        return p;
      }
      function de(s) {
        return s[b] = !0, s;
      }
      function Xe(s) {
        var p = o.createElement("fieldset");
        try {
          return !!s(p);
        } catch {
          return !1;
        } finally {
          p.parentNode && p.parentNode.removeChild(p), p = null;
        }
      }
      function Vi(s) {
        return function(p) {
          return X(p, "input") && p.type === s;
        };
      }
      function Ri(s) {
        return function(p) {
          return (X(p, "input") || X(p, "button")) && p.type === s;
        };
      }
      function jn(s) {
        return function(p) {
          return "form" in p ? p.parentNode && p.disabled === !1 ? "label" in p ? "label" in p.parentNode ? p.parentNode.disabled === s : p.disabled === s : p.isDisabled === s || // Where there is no isDisabled, check manually
          p.isDisabled !== !s && Ui(p) === s : p.disabled === s : "label" in p ? p.disabled === s : !1;
        };
      }
      function Me(s) {
        return de(function(p) {
          return p = +p, de(function(h, m) {
            for (var v, _ = s([], h.length, p), C = _.length; C--; )
              h[v = _[C]] && (h[v] = !(m[v] = h[v]));
          });
        });
      }
      function Rt(s) {
        return s && typeof s.getElementsByTagName < "u" && s;
      }
      function Ne(s) {
        var p, h = s ? s.ownerDocument || s : xe;
        return h == o || h.nodeType !== 9 || !h.documentElement || (o = h, f = o.documentElement, l = !r.isXMLDoc(o), F = f.matches || f.webkitMatchesSelector || f.msMatchesSelector, f.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
        // two documents; shallow comparisons work.
        // eslint-disable-next-line eqeqeq
        xe != o && (p = o.defaultView) && p.top !== p && p.addEventListener("unload", Mi), P.getById = Xe(function(m) {
          return f.appendChild(m).id = r.expando, !o.getElementsByName || !o.getElementsByName(r.expando).length;
        }), P.disconnectedMatch = Xe(function(m) {
          return F.call(m, "*");
        }), P.scope = Xe(function() {
          return o.querySelectorAll(":scope");
        }), P.cssHas = Xe(function() {
          try {
            return o.querySelector(":has(*,:jqfake)"), !1;
          } catch {
            return !0;
          }
        }), P.getById ? (t.filter.ID = function(m) {
          var v = m.replace(Ce, De);
          return function(_) {
            return _.getAttribute("id") === v;
          };
        }, t.find.ID = function(m, v) {
          if (typeof v.getElementById < "u" && l) {
            var _ = v.getElementById(m);
            return _ ? [_] : [];
          }
        }) : (t.filter.ID = function(m) {
          var v = m.replace(Ce, De);
          return function(_) {
            var C = typeof _.getAttributeNode < "u" && _.getAttributeNode("id");
            return C && C.value === v;
          };
        }, t.find.ID = function(m, v) {
          if (typeof v.getElementById < "u" && l) {
            var _, C, E, D = v.getElementById(m);
            if (D) {
              if (_ = D.getAttributeNode("id"), _ && _.value === m)
                return [D];
              for (E = v.getElementsByName(m), C = 0; D = E[C++]; )
                if (_ = D.getAttributeNode("id"), _ && _.value === m)
                  return [D];
            }
            return [];
          }
        }), t.find.TAG = function(m, v) {
          return typeof v.getElementsByTagName < "u" ? v.getElementsByTagName(m) : v.querySelectorAll(m);
        }, t.find.CLASS = function(m, v) {
          if (typeof v.getElementsByClassName < "u" && l)
            return v.getElementsByClassName(m);
        }, d = [], Xe(function(m) {
          var v;
          f.appendChild(m).innerHTML = "<a id='" + b + "' href='' disabled='disabled'></a><select id='" + b + "-\r\\' disabled='disabled'><option selected=''></option></select>", m.querySelectorAll("[selected]").length || d.push("\\[" + B + "*(?:value|" + me + ")"), m.querySelectorAll("[id~=" + b + "-]").length || d.push("~="), m.querySelectorAll("a#" + b + "+*").length || d.push(".#.+[+~]"), m.querySelectorAll(":checked").length || d.push(":checked"), v = o.createElement("input"), v.setAttribute("type", "hidden"), m.appendChild(v).setAttribute("name", "D"), f.appendChild(m).disabled = !0, m.querySelectorAll(":disabled").length !== 2 && d.push(":enabled", ":disabled"), v = o.createElement("input"), v.setAttribute("name", ""), m.appendChild(v), m.querySelectorAll("[name='']").length || d.push("\\[" + B + "*name" + B + "*=" + B + `*(?:''|"")`);
        }), P.cssHas || d.push(":has"), d = d.length && new RegExp(d.join("|")), K = function(m, v) {
          if (m === v)
            return u = !0, 0;
          var _ = !m.compareDocumentPosition - !v.compareDocumentPosition;
          return _ || (_ = (m.ownerDocument || m) == (v.ownerDocument || v) ? m.compareDocumentPosition(v) : (
            // Otherwise we know they are disconnected
            1
          ), _ & 1 || !P.sortDetached && v.compareDocumentPosition(m) === _ ? m === o || m.ownerDocument == xe && W.contains(xe, m) ? -1 : v === o || v.ownerDocument == xe && W.contains(xe, v) ? 1 : i ? Q.call(i, m) - Q.call(i, v) : 0 : _ & 4 ? -1 : 1);
        }), o;
      }
      W.matches = function(s, p) {
        return W(s, null, null, p);
      }, W.matchesSelector = function(s, p) {
        if (Ne(s), l && !ee[p + " "] && (!d || !d.test(p)))
          try {
            var h = F.call(s, p);
            if (h || P.disconnectedMatch || // As well, disconnected nodes are said to be in a document
            // fragment in IE 9
            s.document && s.document.nodeType !== 11)
              return h;
          } catch {
            ee(p, !0);
          }
        return W(p, o, null, [s]).length > 0;
      }, W.contains = function(s, p) {
        return (s.ownerDocument || s) != o && Ne(s), r.contains(s, p);
      }, W.attr = function(s, p) {
        (s.ownerDocument || s) != o && Ne(s);
        var h = t.attrHandle[p.toLowerCase()], m = h && we.call(t.attrHandle, p.toLowerCase()) ? h(s, p, !l) : void 0;
        return m !== void 0 ? m : s.getAttribute(p);
      }, W.error = function(s) {
        throw new Error("Syntax error, unrecognized expression: " + s);
      }, r.uniqueSort = function(s) {
        var p, h = [], m = 0, v = 0;
        if (u = !P.sortStable, i = !P.sortStable && H.call(s, 0), In.call(s, K), u) {
          for (; p = s[v++]; )
            p === s[v] && (m = h.push(v));
          for (; m--; )
            Vn.call(s, h[m], 1);
        }
        return i = null, s;
      }, r.fn.uniqueSort = function() {
        return this.pushStack(r.uniqueSort(H.apply(this)));
      }, t = r.expr = {
        // Can be adjusted by the user
        cacheLength: 50,
        createPseudo: de,
        match: ve,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(s) {
            return s[1] = s[1].replace(Ce, De), s[3] = (s[3] || s[4] || s[5] || "").replace(Ce, De), s[2] === "~=" && (s[3] = " " + s[3] + " "), s.slice(0, 4);
          },
          CHILD: function(s) {
            return s[1] = s[1].toLowerCase(), s[1].slice(0, 3) === "nth" ? (s[3] || W.error(s[0]), s[4] = +(s[4] ? s[5] + (s[6] || 1) : 2 * (s[3] === "even" || s[3] === "odd")), s[5] = +(s[7] + s[8] || s[3] === "odd")) : s[3] && W.error(s[0]), s;
          },
          PSEUDO: function(s) {
            var p, h = !s[6] && s[2];
            return ve.CHILD.test(s[0]) ? null : (s[3] ? s[2] = s[4] || s[5] || "" : h && Fe.test(h) && // Get excess from tokenize (recursively)
            (p = ot(h, !0)) && // advance to the next closing parenthesis
            (p = h.indexOf(")", h.length - p) - h.length) && (s[0] = s[0].slice(0, p), s[2] = h.slice(0, p)), s.slice(0, 3));
          }
        },
        filter: {
          TAG: function(s) {
            var p = s.replace(Ce, De).toLowerCase();
            return s === "*" ? function() {
              return !0;
            } : function(h) {
              return X(h, p);
            };
          },
          CLASS: function(s) {
            var p = q[s + " "];
            return p || (p = new RegExp("(^|" + B + ")" + s + "(" + B + "|$)")) && q(s, function(h) {
              return p.test(
                typeof h.className == "string" && h.className || typeof h.getAttribute < "u" && h.getAttribute("class") || ""
              );
            });
          },
          ATTR: function(s, p, h) {
            return function(m) {
              var v = W.attr(m, s);
              return v == null ? p === "!=" : p ? (v += "", p === "=" ? v === h : p === "!=" ? v !== h : p === "^=" ? h && v.indexOf(h) === 0 : p === "*=" ? h && v.indexOf(h) > -1 : p === "$=" ? h && v.slice(-h.length) === h : p === "~=" ? (" " + v.replace($, " ") + " ").indexOf(h) > -1 : p === "|=" ? v === h || v.slice(0, h.length + 1) === h + "-" : !1) : !0;
            };
          },
          CHILD: function(s, p, h, m, v) {
            var _ = s.slice(0, 3) !== "nth", C = s.slice(-4) !== "last", E = p === "of-type";
            return m === 1 && v === 0 ? (
              // Shortcut for :nth-*(n)
              function(D) {
                return !!D.parentNode;
              }
            ) : function(D, U, N) {
              var L, I, k, z, se, ne = _ !== C ? "nextSibling" : "previousSibling", fe = D.parentNode, be = E && D.nodeName.toLowerCase(), Je = !N && !E, ie = !1;
              if (fe) {
                if (_) {
                  for (; ne; ) {
                    for (k = D; k = k[ne]; )
                      if (E ? X(k, be) : k.nodeType === 1)
                        return !1;
                    se = ne = s === "only" && !se && "nextSibling";
                  }
                  return !0;
                }
                if (se = [C ? fe.firstChild : fe.lastChild], C && Je) {
                  for (I = fe[b] || (fe[b] = {}), L = I[s] || [], z = L[0] === g && L[1], ie = z && L[2], k = z && fe.childNodes[z]; k = ++z && k && k[ne] || // Fallback to seeking `elem` from the start
                  (ie = z = 0) || se.pop(); )
                    if (k.nodeType === 1 && ++ie && k === D) {
                      I[s] = [g, z, ie];
                      break;
                    }
                } else if (Je && (I = D[b] || (D[b] = {}), L = I[s] || [], z = L[0] === g && L[1], ie = z), ie === !1)
                  for (; (k = ++z && k && k[ne] || (ie = z = 0) || se.pop()) && !((E ? X(k, be) : k.nodeType === 1) && ++ie && (Je && (I = k[b] || (k[b] = {}), I[s] = [g, ie]), k === D)); )
                    ;
                return ie -= v, ie === m || ie % m === 0 && ie / m >= 0;
              }
            };
          },
          PSEUDO: function(s, p) {
            var h, m = t.pseudos[s] || t.setFilters[s.toLowerCase()] || W.error("unsupported pseudo: " + s);
            return m[b] ? m(p) : m.length > 1 ? (h = [s, s, "", p], t.setFilters.hasOwnProperty(s.toLowerCase()) ? de(function(v, _) {
              for (var C, E = m(v, p), D = E.length; D--; )
                C = Q.call(v, E[D]), v[C] = !(_[C] = E[D]);
            }) : function(v) {
              return m(v, 0, h);
            }) : m;
          }
        },
        pseudos: {
          // Potentially complex pseudos
          not: de(function(s) {
            var p = [], h = [], m = Bt(s.replace(Qe, "$1"));
            return m[b] ? de(function(v, _, C, E) {
              for (var D, U = m(v, null, E, []), N = v.length; N--; )
                (D = U[N]) && (v[N] = !(_[N] = D));
            }) : function(v, _, C) {
              return p[0] = v, m(p, null, C, h), p[0] = null, !h.pop();
            };
          }),
          has: de(function(s) {
            return function(p) {
              return W(s, p).length > 0;
            };
          }),
          contains: de(function(s) {
            return s = s.replace(Ce, De), function(p) {
              return (p.textContent || r.text(p)).indexOf(s) > -1;
            };
          }),
          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // https://www.w3.org/TR/selectors/#lang-pseudo
          lang: de(function(s) {
            return at.test(s || "") || W.error("unsupported lang: " + s), s = s.replace(Ce, De).toLowerCase(), function(p) {
              var h;
              do
                if (h = l ? p.lang : p.getAttribute("xml:lang") || p.getAttribute("lang"))
                  return h = h.toLowerCase(), h === s || h.indexOf(s + "-") === 0;
              while ((p = p.parentNode) && p.nodeType === 1);
              return !1;
            };
          }),
          // Miscellaneous
          target: function(s) {
            var p = c.location && c.location.hash;
            return p && p.slice(1) === s.id;
          },
          root: function(s) {
            return s === f;
          },
          focus: function(s) {
            return s === Ii() && o.hasFocus() && !!(s.type || s.href || ~s.tabIndex);
          },
          // Boolean properties
          enabled: jn(!1),
          disabled: jn(!0),
          checked: function(s) {
            return X(s, "input") && !!s.checked || X(s, "option") && !!s.selected;
          },
          selected: function(s) {
            return s.parentNode && s.parentNode.selectedIndex, s.selected === !0;
          },
          // Contents
          empty: function(s) {
            for (s = s.firstChild; s; s = s.nextSibling)
              if (s.nodeType < 6)
                return !1;
            return !0;
          },
          parent: function(s) {
            return !t.pseudos.empty(s);
          },
          // Element/input types
          header: function(s) {
            return Ae.test(s.nodeName);
          },
          input: function(s) {
            return ke.test(s.nodeName);
          },
          button: function(s) {
            return X(s, "input") && s.type === "button" || X(s, "button");
          },
          text: function(s) {
            var p;
            return X(s, "input") && s.type === "text" && // Support: IE <10 only
            // New HTML5 attribute values (e.g., "search") appear
            // with elem.type === "text"
            ((p = s.getAttribute("type")) == null || p.toLowerCase() === "text");
          },
          // Position-in-collection
          first: Me(function() {
            return [0];
          }),
          last: Me(function(s, p) {
            return [p - 1];
          }),
          eq: Me(function(s, p, h) {
            return [h < 0 ? h + p : h];
          }),
          even: Me(function(s, p) {
            for (var h = 0; h < p; h += 2)
              s.push(h);
            return s;
          }),
          odd: Me(function(s, p) {
            for (var h = 1; h < p; h += 2)
              s.push(h);
            return s;
          }),
          lt: Me(function(s, p, h) {
            var m;
            for (h < 0 ? m = h + p : h > p ? m = p : m = h; --m >= 0; )
              s.push(m);
            return s;
          }),
          gt: Me(function(s, p, h) {
            for (var m = h < 0 ? h + p : h; ++m < p; )
              s.push(m);
            return s;
          })
        }
      }, t.pseudos.nth = t.pseudos.eq;
      for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        t.pseudos[e] = Vi(e);
      for (e in { submit: !0, reset: !0 })
        t.pseudos[e] = Ri(e);
      function On() {
      }
      On.prototype = t.filters = t.pseudos, t.setFilters = new On();
      function ot(s, p) {
        var h, m, v, _, C, E, D, U = G[s + " "];
        if (U)
          return p ? 0 : U.slice(0);
        for (C = s, E = [], D = t.preFilter; C; ) {
          (!h || (m = J.exec(C))) && (m && (C = C.slice(m[0].length) || C), E.push(v = [])), h = !1, (m = ut.exec(C)) && (h = m.shift(), v.push({
            value: h,
            // Cast descendant combinators to space
            type: m[0].replace(Qe, " ")
          }), C = C.slice(h.length));
          for (_ in t.filter)
            (m = ve[_].exec(C)) && (!D[_] || (m = D[_](m))) && (h = m.shift(), v.push({
              value: h,
              type: _,
              matches: m
            }), C = C.slice(h.length));
          if (!h)
            break;
        }
        return p ? C.length : C ? W.error(s) : (
          // Cache the tokens
          G(s, E).slice(0)
        );
      }
      function Ft(s) {
        for (var p = 0, h = s.length, m = ""; p < h; p++)
          m += s[p].value;
        return m;
      }
      function vt(s, p, h) {
        var m = p.dir, v = p.next, _ = v || m, C = h && _ === "parentNode", E = x++;
        return p.first ? (
          // Check against closest ancestor/preceding element
          function(D, U, N) {
            for (; D = D[m]; )
              if (D.nodeType === 1 || C)
                return s(D, U, N);
            return !1;
          }
        ) : (
          // Check against all ancestor/preceding elements
          function(D, U, N) {
            var L, I, k = [g, E];
            if (N) {
              for (; D = D[m]; )
                if ((D.nodeType === 1 || C) && s(D, U, N))
                  return !0;
            } else
              for (; D = D[m]; )
                if (D.nodeType === 1 || C)
                  if (I = D[b] || (D[b] = {}), v && X(D, v))
                    D = D[m] || D;
                  else {
                    if ((L = I[_]) && L[0] === g && L[1] === E)
                      return k[2] = L[2];
                    if (I[_] = k, k[2] = s(D, U, N))
                      return !0;
                  }
            return !1;
          }
        );
      }
      function Gt(s) {
        return s.length > 1 ? function(p, h, m) {
          for (var v = s.length; v--; )
            if (!s[v](p, h, m))
              return !1;
          return !0;
        } : s[0];
      }
      function Gi(s, p, h) {
        for (var m = 0, v = p.length; m < v; m++)
          W(s, p[m], h);
        return h;
      }
      function bt(s, p, h, m, v) {
        for (var _, C = [], E = 0, D = s.length, U = p != null; E < D; E++)
          (_ = s[E]) && (!h || h(_, m, v)) && (C.push(_), U && p.push(E));
        return C;
      }
      function $t(s, p, h, m, v, _) {
        return m && !m[b] && (m = $t(m)), v && !v[b] && (v = $t(v, _)), de(function(C, E, D, U) {
          var N, L, I, k, z = [], se = [], ne = E.length, fe = C || Gi(
            p || "*",
            D.nodeType ? [D] : D,
            []
          ), be = s && (C || !p) ? bt(fe, z, s, D, U) : fe;
          if (h ? (k = v || (C ? s : ne || m) ? (
            // ...intermediate processing is necessary
            []
          ) : (
            // ...otherwise use results directly
            E
          ), h(be, k, D, U)) : k = be, m)
            for (N = bt(k, se), m(N, [], D, U), L = N.length; L--; )
              (I = N[L]) && (k[se[L]] = !(be[se[L]] = I));
          if (C) {
            if (v || s) {
              if (v) {
                for (N = [], L = k.length; L--; )
                  (I = k[L]) && N.push(be[L] = I);
                v(null, k = [], N, U);
              }
              for (L = k.length; L--; )
                (I = k[L]) && (N = v ? Q.call(C, I) : z[L]) > -1 && (C[N] = !(E[N] = I));
            }
          } else
            k = bt(
              k === E ? k.splice(ne, k.length) : k
            ), v ? v(null, E, k, U) : a.apply(E, k);
        });
      }
      function Wt(s) {
        for (var p, h, m, v = s.length, _ = t.relative[s[0].type], C = _ || t.relative[" "], E = _ ? 1 : 0, D = vt(function(L) {
          return L === p;
        }, C, !0), U = vt(function(L) {
          return Q.call(p, L) > -1;
        }, C, !0), N = [function(L, I, k) {
          var z = !_ && (k || I != n) || ((p = I).nodeType ? D(L, I, k) : U(L, I, k));
          return p = null, z;
        }]; E < v; E++)
          if (h = t.relative[s[E].type])
            N = [vt(Gt(N), h)];
          else {
            if (h = t.filter[s[E].type].apply(null, s[E].matches), h[b]) {
              for (m = ++E; m < v && !t.relative[s[m].type]; m++)
                ;
              return $t(
                E > 1 && Gt(N),
                E > 1 && Ft(
                  // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                  s.slice(0, E - 1).concat({ value: s[E - 2].type === " " ? "*" : "" })
                ).replace(Qe, "$1"),
                h,
                E < m && Wt(s.slice(E, m)),
                m < v && Wt(s = s.slice(m)),
                m < v && Ft(s)
              );
            }
            N.push(h);
          }
        return Gt(N);
      }
      function $i(s, p) {
        var h = p.length > 0, m = s.length > 0, v = function(_, C, E, D, U) {
          var N, L, I, k = 0, z = "0", se = _ && [], ne = [], fe = n, be = _ || m && t.find.TAG("*", U), Je = g += fe == null ? 1 : Math.random() || 0.1, ie = be.length;
          for (U && (n = C == o || C || U); z !== ie && (N = be[z]) != null; z++) {
            if (m && N) {
              for (L = 0, !C && N.ownerDocument != o && (Ne(N), E = !l); I = s[L++]; )
                if (I(N, C || o, E)) {
                  a.call(D, N);
                  break;
                }
              U && (g = Je);
            }
            h && ((N = !I && N) && k--, _ && se.push(N));
          }
          if (k += z, h && z !== k) {
            for (L = 0; I = p[L++]; )
              I(se, ne, C, E);
            if (_) {
              if (k > 0)
                for (; z--; )
                  se[z] || ne[z] || (ne[z] = Un.call(D));
              ne = bt(ne);
            }
            a.apply(D, ne), U && !_ && ne.length > 0 && k + p.length > 1 && r.uniqueSort(D);
          }
          return U && (g = Je, n = fe), se;
        };
        return h ? de(v) : v;
      }
      function Bt(s, p) {
        var h, m = [], v = [], _ = M[s + " "];
        if (!_) {
          for (p || (p = ot(s)), h = p.length; h--; )
            _ = Wt(p[h]), _[b] ? m.push(_) : v.push(_);
          _ = M(
            s,
            $i(v, m)
          ), _.selector = s;
        }
        return _;
      }
      function qn(s, p, h, m) {
        var v, _, C, E, D, U = typeof s == "function" && s, N = !m && ot(s = U.selector || s);
        if (h = h || [], N.length === 1) {
          if (_ = N[0] = N[0].slice(0), _.length > 2 && (C = _[0]).type === "ID" && p.nodeType === 9 && l && t.relative[_[1].type]) {
            if (p = (t.find.ID(
              C.matches[0].replace(Ce, De),
              p
            ) || [])[0], p)
              U && (p = p.parentNode);
            else
              return h;
            s = s.slice(_.shift().value.length);
          }
          for (v = ve.needsContext.test(s) ? 0 : _.length; v-- && (C = _[v], !t.relative[E = C.type]); )
            if ((D = t.find[E]) && (m = D(
              C.matches[0].replace(Ce, De),
              Vt.test(_[0].type) && Rt(p.parentNode) || p
            ))) {
              if (_.splice(v, 1), s = m.length && Ft(_), !s)
                return a.apply(h, m), h;
              break;
            }
        }
        return (U || Bt(s, N))(
          m,
          p,
          !l,
          h,
          !p || Vt.test(s) && Rt(p.parentNode) || p
        ), h;
      }
      P.sortStable = b.split("").sort(K).join("") === b, Ne(), P.sortDetached = Xe(function(s) {
        return s.compareDocumentPosition(o.createElement("fieldset")) & 1;
      }), r.find = W, r.expr[":"] = r.expr.pseudos, r.unique = r.uniqueSort, W.compile = Bt, W.select = qn, W.setDocument = Ne, W.tokenize = ot, W.escape = r.escapeSelector, W.getText = r.text, W.isXML = r.isXMLDoc, W.selectors = r.expr, W.support = r.support, W.uniqueSort = r.uniqueSort;
    })();
    var Ie = function(e, t, n) {
      for (var i = [], u = n !== void 0; (e = e[t]) && e.nodeType !== 9; )
        if (e.nodeType === 1) {
          if (u && r(e).is(n))
            break;
          i.push(e);
        }
      return i;
    }, Xt = function(e, t) {
      for (var n = []; e; e = e.nextSibling)
        e.nodeType === 1 && e !== t && n.push(e);
      return n;
    }, Jt = r.expr.match.needsContext, Qt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function Tt(e, t, n) {
      return j(t) ? r.grep(e, function(i, u) {
        return !!t.call(i, u, i) !== n;
      }) : t.nodeType ? r.grep(e, function(i) {
        return i === t !== n;
      }) : typeof t != "string" ? r.grep(e, function(i) {
        return Q.call(t, i) > -1 !== n;
      }) : r.filter(t, e, n);
    }
    r.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), t.length === 1 && i.nodeType === 1 ? r.find.matchesSelector(i, e) ? [i] : [] : r.find.matches(e, r.grep(t, function(u) {
        return u.nodeType === 1;
      }));
    }, r.fn.extend({
      find: function(e) {
        var t, n, i = this.length, u = this;
        if (typeof e != "string")
          return this.pushStack(r(e).filter(function() {
            for (t = 0; t < i; t++)
              if (r.contains(u[t], this))
                return !0;
          }));
        for (n = this.pushStack([]), t = 0; t < i; t++)
          r.find(e, u[t], n);
        return i > 1 ? r.uniqueSort(n) : n;
      },
      filter: function(e) {
        return this.pushStack(Tt(this, e || [], !1));
      },
      not: function(e) {
        return this.pushStack(Tt(this, e || [], !0));
      },
      is: function(e) {
        return !!Tt(
          this,
          // If this is a positional/relative selector, check membership in the returned set
          // so $("p:first").is("p:last") won't return true for a doc with two "p".
          typeof e == "string" && Jt.test(e) ? r(e) : e || [],
          !1
        ).length;
      }
    });
    var Yt, $n = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Wn = r.fn.init = function(e, t, n) {
      var i, u;
      if (!e)
        return this;
      if (n = n || Yt, typeof e == "string")
        if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? i = [null, e, null] : i = $n.exec(e), i && (i[1] || !t))
          if (i[1]) {
            if (t = t instanceof r ? t[0] : t, r.merge(this, r.parseHTML(
              i[1],
              t && t.nodeType ? t.ownerDocument || t : O,
              !0
            )), Qt.test(i[1]) && r.isPlainObject(t))
              for (i in t)
                j(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
          } else
            return u = O.getElementById(i[2]), u && (this[0] = u, this.length = 1), this;
        else
          return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      else {
        if (e.nodeType)
          return this[0] = e, this.length = 1, this;
        if (j(e))
          return n.ready !== void 0 ? n.ready(e) : (
            // Execute immediately if ready is not present
            e(r)
          );
      }
      return r.makeArray(e, this);
    };
    Wn.prototype = r.fn, Yt = r(O);
    var Bn = /^(?:parents|prev(?:Until|All))/, zn = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
    r.fn.extend({
      has: function(e) {
        var t = r(e, this), n = t.length;
        return this.filter(function() {
          for (var i = 0; i < n; i++)
            if (r.contains(this, t[i]))
              return !0;
        });
      },
      closest: function(e, t) {
        var n, i = 0, u = this.length, a = [], o = typeof e != "string" && r(e);
        if (!Jt.test(e)) {
          for (; i < u; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (n.nodeType < 11 && (o ? o.index(n) > -1 : (
                // Don't pass non-elements to jQuery#find
                n.nodeType === 1 && r.find.matchesSelector(n, e)
              ))) {
                a.push(n);
                break;
              }
        }
        return this.pushStack(a.length > 1 ? r.uniqueSort(a) : a);
      },
      // Determine the position of an element within the set
      index: function(e) {
        return e ? typeof e == "string" ? Q.call(r(e), this[0]) : Q.call(
          this,
          // If it receives a jQuery object, the first element is used
          e.jquery ? e[0] : e
        ) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function(e, t) {
        return this.pushStack(
          r.uniqueSort(
            r.merge(this.get(), r(e, t))
          )
        );
      },
      addBack: function(e) {
        return this.add(
          e == null ? this.prevObject : this.prevObject.filter(e)
        );
      }
    });
    function Kt(e, t) {
      for (; (e = e[t]) && e.nodeType !== 1; )
        ;
      return e;
    }
    r.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && t.nodeType !== 11 ? t : null;
      },
      parents: function(e) {
        return Ie(e, "parentNode");
      },
      parentsUntil: function(e, t, n) {
        return Ie(e, "parentNode", n);
      },
      next: function(e) {
        return Kt(e, "nextSibling");
      },
      prev: function(e) {
        return Kt(e, "previousSibling");
      },
      nextAll: function(e) {
        return Ie(e, "nextSibling");
      },
      prevAll: function(e) {
        return Ie(e, "previousSibling");
      },
      nextUntil: function(e, t, n) {
        return Ie(e, "nextSibling", n);
      },
      prevUntil: function(e, t, n) {
        return Ie(e, "previousSibling", n);
      },
      siblings: function(e) {
        return Xt((e.parentNode || {}).firstChild, e);
      },
      children: function(e) {
        return Xt(e.firstChild);
      },
      contents: function(e) {
        return e.contentDocument != null && // Support: IE 11+
        // <object> elements with no `data` attribute has an object
        // `contentDocument` with a `null` prototype.
        w(e.contentDocument) ? e.contentDocument : (X(e, "template") && (e = e.content || e), r.merge([], e.childNodes));
      }
    }, function(e, t) {
      r.fn[e] = function(n, i) {
        var u = r.map(this, t, n);
        return e.slice(-5) !== "Until" && (i = n), i && typeof i == "string" && (u = r.filter(i, u)), this.length > 1 && (zn[e] || r.uniqueSort(u), Bn.test(e) && u.reverse()), this.pushStack(u);
      };
    });
    var he = /[^\x20\t\r\n\f]+/g;
    function Xn(e) {
      var t = {};
      return r.each(e.match(he) || [], function(n, i) {
        t[i] = !0;
      }), t;
    }
    r.Callbacks = function(e) {
      e = typeof e == "string" ? Xn(e) : r.extend({}, e);
      var t, n, i, u, a = [], o = [], f = -1, l = function() {
        for (u = u || e.once, i = t = !0; o.length; f = -1)
          for (n = o.shift(); ++f < a.length; )
            a[f].apply(n[0], n[1]) === !1 && e.stopOnFalse && (f = a.length, n = !1);
        e.memory || (n = !1), t = !1, u && (n ? a = [] : a = "");
      }, d = {
        // Add a callback or a collection of callbacks to the list
        add: function() {
          return a && (n && !t && (f = a.length - 1, o.push(n)), function F(b) {
            r.each(b, function(g, x) {
              j(x) ? (!e.unique || !d.has(x)) && a.push(x) : x && x.length && Ee(x) !== "string" && F(x);
            });
          }(arguments), n && !t && l()), this;
        },
        // Remove a callback from the list
        remove: function() {
          return r.each(arguments, function(F, b) {
            for (var g; (g = r.inArray(b, a, g)) > -1; )
              a.splice(g, 1), g <= f && f--;
          }), this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function(F) {
          return F ? r.inArray(F, a) > -1 : a.length > 0;
        },
        // Remove all callbacks from the list
        empty: function() {
          return a && (a = []), this;
        },
        // Disable .fire and .add
        // Abort any current/pending executions
        // Clear all callbacks and values
        disable: function() {
          return u = o = [], a = n = "", this;
        },
        disabled: function() {
          return !a;
        },
        // Disable .fire
        // Also disable .add unless we have memory (since it would have no effect)
        // Abort any pending executions
        lock: function() {
          return u = o = [], !n && !t && (a = n = ""), this;
        },
        locked: function() {
          return !!u;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function(F, b) {
          return u || (b = b || [], b = [F, b.slice ? b.slice() : b], o.push(b), t || l()), this;
        },
        // Call all the callbacks with the given arguments
        fire: function() {
          return d.fireWith(this, arguments), this;
        },
        // To know if the callbacks have already been called at least once
        fired: function() {
          return !!i;
        }
      };
      return d;
    };
    function Ve(e) {
      return e;
    }
    function ct(e) {
      throw e;
    }
    function Zt(e, t, n, i) {
      var u;
      try {
        e && j(u = e.promise) ? u.call(e).done(t).fail(n) : e && j(u = e.then) ? u.call(e, t, n) : t.apply(void 0, [e].slice(i));
      } catch (a) {
        n.apply(void 0, [a]);
      }
    }
    r.extend({
      Deferred: function(e) {
        var t = [
          // action, add listener, callbacks,
          // ... .then handlers, argument index, [final state]
          [
            "notify",
            "progress",
            r.Callbacks("memory"),
            r.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            r.Callbacks("once memory"),
            r.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], n = "pending", i = {
          state: function() {
            return n;
          },
          always: function() {
            return u.done(arguments).fail(arguments), this;
          },
          catch: function(a) {
            return i.then(null, a);
          },
          // Keep pipe for back-compat
          pipe: function() {
            var a = arguments;
            return r.Deferred(function(o) {
              r.each(t, function(f, l) {
                var d = j(a[l[4]]) && a[l[4]];
                u[l[1]](function() {
                  var F = d && d.apply(this, arguments);
                  F && j(F.promise) ? F.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[l[0] + "With"](
                    this,
                    d ? [F] : arguments
                  );
                });
              }), a = null;
            }).promise();
          },
          then: function(a, o, f) {
            var l = 0;
            function d(F, b, g, x) {
              return function() {
                var q = this, G = arguments, M = function() {
                  var K, me;
                  if (!(F < l)) {
                    if (K = g.apply(q, G), K === b.promise())
                      throw new TypeError("Thenable self-resolution");
                    me = K && // Support: Promises/A+ section 2.3.4
                    // https://promisesaplus.com/#point-64
                    // Only check objects and functions for thenability
                    (typeof K == "object" || typeof K == "function") && K.then, j(me) ? x ? me.call(
                      K,
                      d(l, b, Ve, x),
                      d(l, b, ct, x)
                    ) : (l++, me.call(
                      K,
                      d(l, b, Ve, x),
                      d(l, b, ct, x),
                      d(
                        l,
                        b,
                        Ve,
                        b.notifyWith
                      )
                    )) : (g !== Ve && (q = void 0, G = [K]), (x || b.resolveWith)(q, G));
                  }
                }, ee = x ? M : function() {
                  try {
                    M();
                  } catch (K) {
                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(
                      K,
                      ee.error
                    ), F + 1 >= l && (g !== ct && (q = void 0, G = [K]), b.rejectWith(q, G));
                  }
                };
                F ? ee() : (r.Deferred.getErrorHook ? ee.error = r.Deferred.getErrorHook() : r.Deferred.getStackHook && (ee.error = r.Deferred.getStackHook()), c.setTimeout(ee));
              };
            }
            return r.Deferred(function(F) {
              t[0][3].add(
                d(
                  0,
                  F,
                  j(f) ? f : Ve,
                  F.notifyWith
                )
              ), t[1][3].add(
                d(
                  0,
                  F,
                  j(a) ? a : Ve
                )
              ), t[2][3].add(
                d(
                  0,
                  F,
                  j(o) ? o : ct
                )
              );
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function(a) {
            return a != null ? r.extend(a, i) : i;
          }
        }, u = {};
        return r.each(t, function(a, o) {
          var f = o[2], l = o[5];
          i[o[1]] = f.add, l && f.add(
            function() {
              n = l;
            },
            // rejected_callbacks.disable
            // fulfilled_callbacks.disable
            t[3 - a][2].disable,
            // rejected_handlers.disable
            // fulfilled_handlers.disable
            t[3 - a][3].disable,
            // progress_callbacks.lock
            t[0][2].lock,
            // progress_handlers.lock
            t[0][3].lock
          ), f.add(o[3].fire), u[o[0]] = function() {
            return u[o[0] + "With"](this === u ? void 0 : this, arguments), this;
          }, u[o[0] + "With"] = f.fireWith;
        }), i.promise(u), e && e.call(u, u), u;
      },
      // Deferred helper
      when: function(e) {
        var t = arguments.length, n = t, i = Array(n), u = H.call(arguments), a = r.Deferred(), o = function(f) {
          return function(l) {
            i[f] = this, u[f] = arguments.length > 1 ? H.call(arguments) : l, --t || a.resolveWith(i, u);
          };
        };
        if (t <= 1 && (Zt(
          e,
          a.done(o(n)).resolve,
          a.reject,
          !t
        ), a.state() === "pending" || j(u[n] && u[n].then)))
          return a.then();
        for (; n--; )
          Zt(u[n], o(n), a.reject);
        return a.promise();
      }
    });
    var Jn = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    r.Deferred.exceptionHook = function(e, t) {
      c.console && c.console.warn && e && Jn.test(e.name) && c.console.warn(
        "jQuery.Deferred exception: " + e.message,
        e.stack,
        t
      );
    }, r.readyException = function(e) {
      c.setTimeout(function() {
        throw e;
      });
    };
    var Ct = r.Deferred();
    r.fn.ready = function(e) {
      return Ct.then(e).catch(function(t) {
        r.readyException(t);
      }), this;
    }, r.extend({
      // Is the DOM ready to be used? Set to true once it occurs.
      isReady: !1,
      // A counter to track how many items to wait for before
      // the ready event fires. See trac-6781
      readyWait: 1,
      // Handle when the DOM is ready
      ready: function(e) {
        (e === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, !(e !== !0 && --r.readyWait > 0) && Ct.resolveWith(O, [r]));
      }
    }), r.ready.then = Ct.then;
    function ft() {
      O.removeEventListener("DOMContentLoaded", ft), c.removeEventListener("load", ft), r.ready();
    }
    O.readyState === "complete" || O.readyState !== "loading" && !O.documentElement.doScroll ? c.setTimeout(r.ready) : (O.addEventListener("DOMContentLoaded", ft), c.addEventListener("load", ft));
    var _e = function(e, t, n, i, u, a, o) {
      var f = 0, l = e.length, d = n == null;
      if (Ee(n) === "object") {
        u = !0;
        for (f in n)
          _e(e, t, f, n[f], !0, a, o);
      } else if (i !== void 0 && (u = !0, j(i) || (o = !0), d && (o ? (t.call(e, i), t = null) : (d = t, t = function(F, b, g) {
        return d.call(r(F), g);
      })), t))
        for (; f < l; f++)
          t(
            e[f],
            n,
            o ? i : i.call(e[f], f, t(e[f], n))
          );
      return u ? e : d ? t.call(e) : l ? t(e[0], n) : a;
    }, Qn = /^-ms-/, Yn = /-([a-z])/g;
    function Kn(e, t) {
      return t.toUpperCase();
    }
    function ge(e) {
      return e.replace(Qn, "ms-").replace(Yn, Kn);
    }
    var Ye = function(e) {
      return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType;
    };
    function Ke() {
      this.expando = r.expando + Ke.uid++;
    }
    Ke.uid = 1, Ke.prototype = {
      cache: function(e) {
        var t = e[this.expando];
        return t || (t = {}, Ye(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function(e, t, n) {
        var i, u = this.cache(e);
        if (typeof t == "string")
          u[ge(t)] = n;
        else
          for (i in t)
            u[ge(i)] = t[i];
        return u;
      },
      get: function(e, t) {
        return t === void 0 ? this.cache(e) : (
          // Always use camelCase key (gh-2257)
          e[this.expando] && e[this.expando][ge(t)]
        );
      },
      access: function(e, t, n) {
        return t === void 0 || t && typeof t == "string" && n === void 0 ? this.get(e, t) : (this.set(e, t, n), n !== void 0 ? n : t);
      },
      remove: function(e, t) {
        var n, i = e[this.expando];
        if (i !== void 0) {
          if (t !== void 0)
            for (Array.isArray(t) ? t = t.map(ge) : (t = ge(t), t = t in i ? [t] : t.match(he) || []), n = t.length; n--; )
              delete i[t[n]];
          (t === void 0 || r.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return t !== void 0 && !r.isEmptyObject(t);
      }
    };
    var S = new Ke(), ue = new Ke(), Zn = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ei = /[A-Z]/g;
    function ti(e) {
      return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Zn.test(e) ? JSON.parse(e) : e;
    }
    function en(e, t, n) {
      var i;
      if (n === void 0 && e.nodeType === 1)
        if (i = "data-" + t.replace(ei, "-$&").toLowerCase(), n = e.getAttribute(i), typeof n == "string") {
          try {
            n = ti(n);
          } catch {
          }
          ue.set(e, t, n);
        } else
          n = void 0;
      return n;
    }
    r.extend({
      hasData: function(e) {
        return ue.hasData(e) || S.hasData(e);
      },
      data: function(e, t, n) {
        return ue.access(e, t, n);
      },
      removeData: function(e, t) {
        ue.remove(e, t);
      },
      // TODO: Now that all calls to _data and _removeData have been replaced
      // with direct calls to dataPriv methods, these can be deprecated.
      _data: function(e, t, n) {
        return S.access(e, t, n);
      },
      _removeData: function(e, t) {
        S.remove(e, t);
      }
    }), r.fn.extend({
      data: function(e, t) {
        var n, i, u, a = this[0], o = a && a.attributes;
        if (e === void 0) {
          if (this.length && (u = ue.get(a), a.nodeType === 1 && !S.get(a, "hasDataAttrs"))) {
            for (n = o.length; n--; )
              o[n] && (i = o[n].name, i.indexOf("data-") === 0 && (i = ge(i.slice(5)), en(a, i, u[i])));
            S.set(a, "hasDataAttrs", !0);
          }
          return u;
        }
        return typeof e == "object" ? this.each(function() {
          ue.set(this, e);
        }) : _e(this, function(f) {
          var l;
          if (a && f === void 0)
            return l = ue.get(a, e), l !== void 0 || (l = en(a, e), l !== void 0) ? l : void 0;
          this.each(function() {
            ue.set(this, e, f);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function(e) {
        return this.each(function() {
          ue.remove(this, e);
        });
      }
    }), r.extend({
      queue: function(e, t, n) {
        var i;
        if (e)
          return t = (t || "fx") + "queue", i = S.get(e, t), n && (!i || Array.isArray(n) ? i = S.access(e, t, r.makeArray(n)) : i.push(n)), i || [];
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = r.queue(e, t), i = n.length, u = n.shift(), a = r._queueHooks(e, t), o = function() {
          r.dequeue(e, t);
        };
        u === "inprogress" && (u = n.shift(), i--), u && (t === "fx" && n.unshift("inprogress"), delete a.stop, u.call(e, o, a)), !i && a && a.empty.fire();
      },
      // Not public - generate a queueHooks object, or return the current one
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return S.get(e, n) || S.access(e, n, {
          empty: r.Callbacks("once memory").add(function() {
            S.remove(e, [t + "queue", n]);
          })
        });
      }
    }), r.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return typeof e != "string" && (t = e, e = "fx", n--), arguments.length < n ? r.queue(this[0], e) : t === void 0 ? this : this.each(function() {
          var i = r.queue(this, e, t);
          r._queueHooks(this, e), e === "fx" && i[0] !== "inprogress" && r.dequeue(this, e);
        });
      },
      dequeue: function(e) {
        return this.each(function() {
          r.dequeue(this, e);
        });
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", []);
      },
      // Get a promise resolved when queues of a certain type
      // are emptied (fx is the type by default)
      promise: function(e, t) {
        var n, i = 1, u = r.Deferred(), a = this, o = this.length, f = function() {
          --i || u.resolveWith(a, [a]);
        };
        for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; o--; )
          n = S.get(a[o], e + "queueHooks"), n && n.empty && (i++, n.empty.add(f));
        return f(), u.promise(t);
      }
    });
    var tn = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ze = new RegExp("^(?:([+-])=|)(" + tn + ")([a-z%]*)$", "i"), Te = ["Top", "Right", "Bottom", "Left"], qe = O.documentElement, Re = function(e) {
      return r.contains(e.ownerDocument, e);
    }, ni = { composed: !0 };
    qe.getRootNode && (Re = function(e) {
      return r.contains(e.ownerDocument, e) || e.getRootNode(ni) === e.ownerDocument;
    });
    var pt = function(e, t) {
      return e = t || e, e.style.display === "none" || e.style.display === "" && // Otherwise, check computed style
      // Support: Firefox <=43 - 45
      // Disconnected elements can have computed display: none, so first confirm that elem is
      // in the document.
      Re(e) && r.css(e, "display") === "none";
    };
    function nn(e, t, n, i) {
      var u, a, o = 20, f = i ? function() {
        return i.cur();
      } : function() {
        return r.css(e, t, "");
      }, l = f(), d = n && n[3] || (r.cssNumber[t] ? "" : "px"), F = e.nodeType && (r.cssNumber[t] || d !== "px" && +l) && Ze.exec(r.css(e, t));
      if (F && F[3] !== d) {
        for (l = l / 2, d = d || F[3], F = +l || 1; o--; )
          r.style(e, t, F + d), (1 - a) * (1 - (a = f() / l || 0.5)) <= 0 && (o = 0), F = F / a;
        F = F * 2, r.style(e, t, F + d), n = n || [];
      }
      return n && (F = +F || +l || 0, u = n[1] ? F + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = F, i.end = u)), u;
    }
    var rn = {};
    function ii(e) {
      var t, n = e.ownerDocument, i = e.nodeName, u = rn[i];
      return u || (t = n.body.appendChild(n.createElement(i)), u = r.css(t, "display"), t.parentNode.removeChild(t), u === "none" && (u = "block"), rn[i] = u, u);
    }
    function Ge(e, t) {
      for (var n, i, u = [], a = 0, o = e.length; a < o; a++)
        i = e[a], i.style && (n = i.style.display, t ? (n === "none" && (u[a] = S.get(i, "display") || null, u[a] || (i.style.display = "")), i.style.display === "" && pt(i) && (u[a] = ii(i))) : n !== "none" && (u[a] = "none", S.set(i, "display", n)));
      for (a = 0; a < o; a++)
        u[a] != null && (e[a].style.display = u[a]);
      return e;
    }
    r.fn.extend({
      show: function() {
        return Ge(this, !0);
      },
      hide: function() {
        return Ge(this);
      },
      toggle: function(e) {
        return typeof e == "boolean" ? e ? this.show() : this.hide() : this.each(function() {
          pt(this) ? r(this).show() : r(this).hide();
        });
      }
    });
    var et = /^(?:checkbox|radio)$/i, un = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, an = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var e = O.createDocumentFragment(), t = e.appendChild(O.createElement("div")), n = O.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), P.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", P.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", P.option = !!t.lastChild;
    })();
    var le = {
      // XHTML parsers do not magically insert elements in the
      // same way that tag soup parsers do. So we cannot shorten
      // this by omitting <tbody> or other required elements.
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    le.tbody = le.tfoot = le.colgroup = le.caption = le.thead, le.th = le.td, P.option || (le.optgroup = le.option = [1, "<select multiple='multiple'>", "</select>"]);
    function ae(e, t) {
      var n;
      return typeof e.getElementsByTagName < "u" ? n = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? n = e.querySelectorAll(t || "*") : n = [], t === void 0 || t && X(e, t) ? r.merge([e], n) : n;
    }
    function Dt(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        S.set(
          e[n],
          "globalEval",
          !t || S.get(t[n], "globalEval")
        );
    }
    var ri = /<|&#?\w+;/;
    function on(e, t, n, i, u) {
      for (var a, o, f, l, d, F, b = t.createDocumentFragment(), g = [], x = 0, q = e.length; x < q; x++)
        if (a = e[x], a || a === 0)
          if (Ee(a) === "object")
            r.merge(g, a.nodeType ? [a] : a);
          else if (!ri.test(a))
            g.push(t.createTextNode(a));
          else {
            for (o = o || b.appendChild(t.createElement("div")), f = (un.exec(a) || ["", ""])[1].toLowerCase(), l = le[f] || le._default, o.innerHTML = l[1] + r.htmlPrefilter(a) + l[2], F = l[0]; F--; )
              o = o.lastChild;
            r.merge(g, o.childNodes), o = b.firstChild, o.textContent = "";
          }
      for (b.textContent = "", x = 0; a = g[x++]; ) {
        if (i && r.inArray(a, i) > -1) {
          u && u.push(a);
          continue;
        }
        if (d = Re(a), o = ae(b.appendChild(a), "script"), d && Dt(o), n)
          for (F = 0; a = o[F++]; )
            an.test(a.type || "") && n.push(a);
      }
      return b;
    }
    var sn = /^([^.]*)(?:\.(.+)|)/;
    function $e() {
      return !0;
    }
    function We() {
      return !1;
    }
    function Et(e, t, n, i, u, a) {
      var o, f;
      if (typeof t == "object") {
        typeof n != "string" && (i = i || n, n = void 0);
        for (f in t)
          Et(e, f, n, i, t[f], a);
        return e;
      }
      if (i == null && u == null ? (u = n, i = n = void 0) : u == null && (typeof n == "string" ? (u = i, i = void 0) : (u = i, i = n, n = void 0)), u === !1)
        u = We;
      else if (!u)
        return e;
      return a === 1 && (o = u, u = function(l) {
        return r().off(l), o.apply(this, arguments);
      }, u.guid = o.guid || (o.guid = r.guid++)), e.each(function() {
        r.event.add(this, t, u, i, n);
      });
    }
    r.event = {
      global: {},
      add: function(e, t, n, i, u) {
        var a, o, f, l, d, F, b, g, x, q, G, M = S.get(e);
        if (Ye(e))
          for (n.handler && (a = n, n = a.handler, u = a.selector), u && r.find.matchesSelector(qe, u), n.guid || (n.guid = r.guid++), (l = M.events) || (l = M.events = /* @__PURE__ */ Object.create(null)), (o = M.handle) || (o = M.handle = function(ee) {
            return typeof r < "u" && r.event.triggered !== ee.type ? r.event.dispatch.apply(e, arguments) : void 0;
          }), t = (t || "").match(he) || [""], d = t.length; d--; )
            f = sn.exec(t[d]) || [], x = G = f[1], q = (f[2] || "").split(".").sort(), x && (b = r.event.special[x] || {}, x = (u ? b.delegateType : b.bindType) || x, b = r.event.special[x] || {}, F = r.extend({
              type: x,
              origType: G,
              data: i,
              handler: n,
              guid: n.guid,
              selector: u,
              needsContext: u && r.expr.match.needsContext.test(u),
              namespace: q.join(".")
            }, a), (g = l[x]) || (g = l[x] = [], g.delegateCount = 0, (!b.setup || b.setup.call(e, i, q, o) === !1) && e.addEventListener && e.addEventListener(x, o)), b.add && (b.add.call(e, F), F.handler.guid || (F.handler.guid = n.guid)), u ? g.splice(g.delegateCount++, 0, F) : g.push(F), r.event.global[x] = !0);
      },
      // Detach an event or set of events from an element
      remove: function(e, t, n, i, u) {
        var a, o, f, l, d, F, b, g, x, q, G, M = S.hasData(e) && S.get(e);
        if (!(!M || !(l = M.events))) {
          for (t = (t || "").match(he) || [""], d = t.length; d--; ) {
            if (f = sn.exec(t[d]) || [], x = G = f[1], q = (f[2] || "").split(".").sort(), !x) {
              for (x in l)
                r.event.remove(e, x + t[d], n, i, !0);
              continue;
            }
            for (b = r.event.special[x] || {}, x = (i ? b.delegateType : b.bindType) || x, g = l[x] || [], f = f[2] && new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = g.length; a--; )
              F = g[a], (u || G === F.origType) && (!n || n.guid === F.guid) && (!f || f.test(F.namespace)) && (!i || i === F.selector || i === "**" && F.selector) && (g.splice(a, 1), F.selector && g.delegateCount--, b.remove && b.remove.call(e, F));
            o && !g.length && ((!b.teardown || b.teardown.call(e, q, M.handle) === !1) && r.removeEvent(e, x, M.handle), delete l[x]);
          }
          r.isEmptyObject(l) && S.remove(e, "handle events");
        }
      },
      dispatch: function(e) {
        var t, n, i, u, a, o, f = new Array(arguments.length), l = r.event.fix(e), d = (S.get(this, "events") || /* @__PURE__ */ Object.create(null))[l.type] || [], F = r.event.special[l.type] || {};
        for (f[0] = l, t = 1; t < arguments.length; t++)
          f[t] = arguments[t];
        if (l.delegateTarget = this, !(F.preDispatch && F.preDispatch.call(this, l) === !1)) {
          for (o = r.event.handlers.call(this, l, d), t = 0; (u = o[t++]) && !l.isPropagationStopped(); )
            for (l.currentTarget = u.elem, n = 0; (a = u.handlers[n++]) && !l.isImmediatePropagationStopped(); )
              (!l.rnamespace || a.namespace === !1 || l.rnamespace.test(a.namespace)) && (l.handleObj = a, l.data = a.data, i = ((r.event.special[a.origType] || {}).handle || a.handler).apply(u.elem, f), i !== void 0 && (l.result = i) === !1 && (l.preventDefault(), l.stopPropagation()));
          return F.postDispatch && F.postDispatch.call(this, l), l.result;
        }
      },
      handlers: function(e, t) {
        var n, i, u, a, o, f = [], l = t.delegateCount, d = e.target;
        if (l && // Support: IE <=9
        // Black-hole SVG <use> instance trees (trac-13180)
        d.nodeType && // Support: Firefox <=42
        // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
        // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
        // Support: IE 11 only
        // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
        !(e.type === "click" && e.button >= 1)) {
          for (; d !== this; d = d.parentNode || this)
            if (d.nodeType === 1 && !(e.type === "click" && d.disabled === !0)) {
              for (a = [], o = {}, n = 0; n < l; n++)
                i = t[n], u = i.selector + " ", o[u] === void 0 && (o[u] = i.needsContext ? r(u, this).index(d) > -1 : r.find(u, this, null, [d]).length), o[u] && a.push(i);
              a.length && f.push({ elem: d, handlers: a });
            }
        }
        return d = this, l < t.length && f.push({ elem: d, handlers: t.slice(l) }), f;
      },
      addProp: function(e, t) {
        Object.defineProperty(r.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: j(t) ? function() {
            if (this.originalEvent)
              return t(this.originalEvent);
          } : function() {
            if (this.originalEvent)
              return this.originalEvent[e];
          },
          set: function(n) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n
            });
          }
        });
      },
      fix: function(e) {
        return e[r.expando] ? e : new r.Event(e);
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
            return et.test(t.type) && t.click && X(t, "input") && dt(t, "click", !0), !1;
          },
          trigger: function(e) {
            var t = this || e;
            return et.test(t.type) && t.click && X(t, "input") && dt(t, "click"), !0;
          },
          // For cross-browser consistency, suppress native .click() on links
          // Also prevent it if we're currently inside a leveraged native-event stack
          _default: function(e) {
            var t = e.target;
            return et.test(t.type) && t.click && X(t, "input") && S.get(t, "click") || X(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    };
    function dt(e, t, n) {
      if (!n) {
        S.get(e, t) === void 0 && r.event.add(e, t, $e);
        return;
      }
      S.set(e, t, !1), r.event.add(e, t, {
        namespace: !1,
        handler: function(i) {
          var u, a = S.get(this, t);
          if (i.isTrigger & 1 && this[t]) {
            if (a)
              (r.event.special[t] || {}).delegateType && i.stopPropagation();
            else if (a = H.call(arguments), S.set(this, t, a), this[t](), u = S.get(this, t), S.set(this, t, !1), a !== u)
              return i.stopImmediatePropagation(), i.preventDefault(), u;
          } else
            a && (S.set(this, t, r.event.trigger(
              a[0],
              a.slice(1),
              this
            )), i.stopPropagation(), i.isImmediatePropagationStopped = $e);
        }
      });
    }
    r.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }, r.Event = function(e, t) {
      if (!(this instanceof r.Event))
        return new r.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === void 0 && // Support: Android <=2.3 only
      e.returnValue === !1 ? $e : We, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && r.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[r.expando] = !0;
    }, r.Event.prototype = {
      constructor: r.Event,
      isDefaultPrevented: We,
      isPropagationStopped: We,
      isImmediatePropagationStopped: We,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = $e, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = $e, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = $e, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, r.each({
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
    }, r.event.addProp), r.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
      function n(i) {
        if (O.documentMode) {
          var u = S.get(this, "handle"), a = r.event.fix(i);
          a.type = i.type === "focusin" ? "focus" : "blur", a.isSimulated = !0, u(i), a.target === a.currentTarget && u(a);
        } else
          r.event.simulate(
            t,
            i.target,
            r.event.fix(i)
          );
      }
      r.event.special[e] = {
        // Utilize native event if possible so blur/focus sequence is correct
        setup: function() {
          var i;
          if (dt(this, e, !0), O.documentMode)
            i = S.get(this, t), i || this.addEventListener(t, n), S.set(this, t, (i || 0) + 1);
          else
            return !1;
        },
        trigger: function() {
          return dt(this, e), !0;
        },
        teardown: function() {
          var i;
          if (O.documentMode)
            i = S.get(this, t) - 1, i ? S.set(this, t, i) : (this.removeEventListener(t, n), S.remove(this, t));
          else
            return !1;
        },
        // Suppress native focus or blur if we're currently inside
        // a leveraged native-event stack
        _default: function(i) {
          return S.get(i.target, e);
        },
        delegateType: t
      }, r.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this.document || this, u = O.documentMode ? this : i, a = S.get(u, t);
          a || (O.documentMode ? this.addEventListener(t, n) : i.addEventListener(e, n, !0)), S.set(u, t, (a || 0) + 1);
        },
        teardown: function() {
          var i = this.ownerDocument || this.document || this, u = O.documentMode ? this : i, a = S.get(u, t) - 1;
          a ? S.set(u, t, a) : (O.documentMode ? this.removeEventListener(t, n) : i.removeEventListener(e, n, !0), S.remove(u, t));
        }
      };
    }), r.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      r.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(n) {
          var i, u = this, a = n.relatedTarget, o = n.handleObj;
          return (!a || a !== u && !r.contains(u, a)) && (n.type = o.origType, i = o.handler.apply(this, arguments), n.type = t), i;
        }
      };
    }), r.fn.extend({
      on: function(e, t, n, i) {
        return Et(this, e, t, n, i);
      },
      one: function(e, t, n, i) {
        return Et(this, e, t, n, i, 1);
      },
      off: function(e, t, n) {
        var i, u;
        if (e && e.preventDefault && e.handleObj)
          return i = e.handleObj, r(e.delegateTarget).off(
            i.namespace ? i.origType + "." + i.namespace : i.origType,
            i.selector,
            i.handler
          ), this;
        if (typeof e == "object") {
          for (u in e)
            this.off(u, t, e[u]);
          return this;
        }
        return (t === !1 || typeof t == "function") && (n = t, t = void 0), n === !1 && (n = We), this.each(function() {
          r.event.remove(this, e, n, t);
        });
      }
    });
    var ui = /<script|<style|<link/i, ai = /checked\s*(?:[^=]|=\s*.checked.)/i, oi = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function ln(e, t) {
      return X(e, "table") && X(t.nodeType !== 11 ? t : t.firstChild, "tr") && r(e).children("tbody")[0] || e;
    }
    function si(e) {
      return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
    }
    function li(e) {
      return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }
    function cn(e, t) {
      var n, i, u, a, o, f, l;
      if (t.nodeType === 1) {
        if (S.hasData(e) && (a = S.get(e), l = a.events, l)) {
          S.remove(t, "handle events");
          for (u in l)
            for (n = 0, i = l[u].length; n < i; n++)
              r.event.add(t, u, l[u][n]);
        }
        ue.hasData(e) && (o = ue.access(e), f = r.extend({}, o), ue.set(t, f));
      }
    }
    function ci(e, t) {
      var n = t.nodeName.toLowerCase();
      n === "input" && et.test(e.type) ? t.checked = e.checked : (n === "input" || n === "textarea") && (t.defaultValue = e.defaultValue);
    }
    function Be(e, t, n, i) {
      t = R(t);
      var u, a, o, f, l, d, F = 0, b = e.length, g = b - 1, x = t[0], q = j(x);
      if (q || b > 1 && typeof x == "string" && !P.checkClone && ai.test(x))
        return e.each(function(G) {
          var M = e.eq(G);
          q && (t[0] = x.call(this, G, M.html())), Be(M, t, n, i);
        });
      if (b && (u = on(t, e[0].ownerDocument, !1, e, i), a = u.firstChild, u.childNodes.length === 1 && (u = a), a || i)) {
        for (o = r.map(ae(u, "script"), si), f = o.length; F < b; F++)
          l = u, F !== g && (l = r.clone(l, !0, !0), f && r.merge(o, ae(l, "script"))), n.call(e[F], l, F);
        if (f)
          for (d = o[o.length - 1].ownerDocument, r.map(o, li), F = 0; F < f; F++)
            l = o[F], an.test(l.type || "") && !S.access(l, "globalEval") && r.contains(d, l) && (l.src && (l.type || "").toLowerCase() !== "module" ? r._evalUrl && !l.noModule && r._evalUrl(l.src, {
              nonce: l.nonce || l.getAttribute("nonce")
            }, d) : lt(l.textContent.replace(oi, ""), l, d));
      }
      return e;
    }
    function fn(e, t, n) {
      for (var i, u = t ? r.filter(t, e) : e, a = 0; (i = u[a]) != null; a++)
        !n && i.nodeType === 1 && r.cleanData(ae(i)), i.parentNode && (n && Re(i) && Dt(ae(i, "script")), i.parentNode.removeChild(i));
      return e;
    }
    r.extend({
      htmlPrefilter: function(e) {
        return e;
      },
      clone: function(e, t, n) {
        var i, u, a, o, f = e.cloneNode(!0), l = Re(e);
        if (!P.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !r.isXMLDoc(e))
          for (o = ae(f), a = ae(e), i = 0, u = a.length; i < u; i++)
            ci(a[i], o[i]);
        if (t)
          if (n)
            for (a = a || ae(e), o = o || ae(f), i = 0, u = a.length; i < u; i++)
              cn(a[i], o[i]);
          else
            cn(e, f);
        return o = ae(f, "script"), o.length > 0 && Dt(o, !l && ae(e, "script")), f;
      },
      cleanData: function(e) {
        for (var t, n, i, u = r.event.special, a = 0; (n = e[a]) !== void 0; a++)
          if (Ye(n)) {
            if (t = n[S.expando]) {
              if (t.events)
                for (i in t.events)
                  u[i] ? r.event.remove(n, i) : r.removeEvent(n, i, t.handle);
              n[S.expando] = void 0;
            }
            n[ue.expando] && (n[ue.expando] = void 0);
          }
      }
    }), r.fn.extend({
      detach: function(e) {
        return fn(this, e, !0);
      },
      remove: function(e) {
        return fn(this, e);
      },
      text: function(e) {
        return _e(this, function(t) {
          return t === void 0 ? r.text(this) : this.empty().each(function() {
            (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
          });
        }, null, e, arguments.length);
      },
      append: function() {
        return Be(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = ln(this, e);
            t.appendChild(e);
          }
        });
      },
      prepend: function() {
        return Be(this, arguments, function(e) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var t = ln(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function() {
        return Be(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function() {
        return Be(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function() {
        for (var e, t = 0; (e = this[t]) != null; t++)
          e.nodeType === 1 && (r.cleanData(ae(e, !1)), e.textContent = "");
        return this;
      },
      clone: function(e, t) {
        return e = e ?? !1, t = t ?? e, this.map(function() {
          return r.clone(this, e, t);
        });
      },
      html: function(e) {
        return _e(this, function(t) {
          var n = this[0] || {}, i = 0, u = this.length;
          if (t === void 0 && n.nodeType === 1)
            return n.innerHTML;
          if (typeof t == "string" && !ui.test(t) && !le[(un.exec(t) || ["", ""])[1].toLowerCase()]) {
            t = r.htmlPrefilter(t);
            try {
              for (; i < u; i++)
                n = this[i] || {}, n.nodeType === 1 && (r.cleanData(ae(n, !1)), n.innerHTML = t);
              n = 0;
            } catch {
            }
          }
          n && this.empty().append(t);
        }, null, e, arguments.length);
      },
      replaceWith: function() {
        var e = [];
        return Be(this, arguments, function(t) {
          var n = this.parentNode;
          r.inArray(this, e) < 0 && (r.cleanData(ae(this)), n && n.replaceChild(t, this));
        }, e);
      }
    }), r.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      r.fn[e] = function(n) {
        for (var i, u = [], a = r(n), o = a.length - 1, f = 0; f <= o; f++)
          i = f === o ? this : this.clone(!0), r(a[f])[t](i), re.apply(u, i.get());
        return this.pushStack(u);
      };
    });
    var St = new RegExp("^(" + tn + ")(?!px)[a-z%]+$", "i"), kt = /^--/, ht = function(e) {
      var t = e.ownerDocument.defaultView;
      return (!t || !t.opener) && (t = c), t.getComputedStyle(e);
    }, pn = function(e, t, n) {
      var i, u, a = {};
      for (u in t)
        a[u] = e.style[u], e.style[u] = t[u];
      i = n.call(e);
      for (u in t)
        e.style[u] = a[u];
      return i;
    }, fi = new RegExp(Te.join("|"), "i");
    (function() {
      function e() {
        if (d) {
          l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", qe.appendChild(l).appendChild(d);
          var F = c.getComputedStyle(d);
          n = F.top !== "1%", f = t(F.marginLeft) === 12, d.style.right = "60%", a = t(F.right) === 36, i = t(F.width) === 36, d.style.position = "absolute", u = t(d.offsetWidth / 3) === 12, qe.removeChild(l), d = null;
        }
      }
      function t(F) {
        return Math.round(parseFloat(F));
      }
      var n, i, u, a, o, f, l = O.createElement("div"), d = O.createElement("div");
      d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", P.clearCloneStyle = d.style.backgroundClip === "content-box", r.extend(P, {
        boxSizingReliable: function() {
          return e(), i;
        },
        pixelBoxStyles: function() {
          return e(), a;
        },
        pixelPosition: function() {
          return e(), n;
        },
        reliableMarginLeft: function() {
          return e(), f;
        },
        scrollboxSize: function() {
          return e(), u;
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
          var F, b, g, x;
          return o == null && (F = O.createElement("table"), b = O.createElement("tr"), g = O.createElement("div"), F.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", b.style.cssText = "box-sizing:content-box;border:1px solid", b.style.height = "1px", g.style.height = "9px", g.style.display = "block", qe.appendChild(F).appendChild(b).appendChild(g), x = c.getComputedStyle(b), o = parseInt(x.height, 10) + parseInt(x.borderTopWidth, 10) + parseInt(x.borderBottomWidth, 10) === b.offsetHeight, qe.removeChild(F)), o;
        }
      }));
    })();
    function tt(e, t, n) {
      var i, u, a, o, f = kt.test(t), l = e.style;
      return n = n || ht(e), n && (o = n.getPropertyValue(t) || n[t], f && o && (o = o.replace(Qe, "$1") || void 0), o === "" && !Re(e) && (o = r.style(e, t)), !P.pixelBoxStyles() && St.test(o) && fi.test(t) && (i = l.width, u = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = o, o = n.width, l.width = i, l.minWidth = u, l.maxWidth = a)), o !== void 0 ? (
        // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        o + ""
      ) : o;
    }
    function dn(e, t) {
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
    var hn = ["Webkit", "Moz", "ms"], gn = O.createElement("div").style, mn = {};
    function pi(e) {
      for (var t = e[0].toUpperCase() + e.slice(1), n = hn.length; n--; )
        if (e = hn[n] + t, e in gn)
          return e;
    }
    function At(e) {
      var t = r.cssProps[e] || mn[e];
      return t || (e in gn ? e : mn[e] = pi(e) || e);
    }
    var di = /^(none|table(?!-c[ea]).+)/, hi = { position: "absolute", visibility: "hidden", display: "block" }, yn = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function Fn(e, t, n) {
      var i = Ze.exec(t);
      return i ? (
        // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, i[2] - (n || 0)) + (i[3] || "px")
      ) : t;
    }
    function Nt(e, t, n, i, u, a) {
      var o = t === "width" ? 1 : 0, f = 0, l = 0, d = 0;
      if (n === (i ? "border" : "content"))
        return 0;
      for (; o < 4; o += 2)
        n === "margin" && (d += r.css(e, n + Te[o], !0, u)), i ? (n === "content" && (l -= r.css(e, "padding" + Te[o], !0, u)), n !== "margin" && (l -= r.css(e, "border" + Te[o] + "Width", !0, u))) : (l += r.css(e, "padding" + Te[o], !0, u), n !== "padding" ? l += r.css(e, "border" + Te[o] + "Width", !0, u) : f += r.css(e, "border" + Te[o] + "Width", !0, u));
      return !i && a >= 0 && (l += Math.max(0, Math.ceil(
        e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - f - 0.5
        // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
        // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0), l + d;
    }
    function vn(e, t, n) {
      var i = ht(e), u = !P.boxSizingReliable() || n, a = u && r.css(e, "boxSizing", !1, i) === "border-box", o = a, f = tt(e, t, i), l = "offset" + t[0].toUpperCase() + t.slice(1);
      if (St.test(f)) {
        if (!n)
          return f;
        f = "auto";
      }
      return (!P.boxSizingReliable() && a || // Support: IE 10 - 11+, Edge 15 - 18+
      // IE/Edge misreport `getComputedStyle` of table rows with width/height
      // set in CSS while `offset*` properties report correct values.
      // Interestingly, in some cases IE 9 doesn't suffer from this issue.
      !P.reliableTrDimensions() && X(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
      // This happens for inline elements with no explicit setting (gh-3571)
      f === "auto" || // Support: Android <=4.1 - 4.3 only
      // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
      !parseFloat(f) && r.css(e, "display", !1, i) === "inline") && // Make sure the element is visible & connected
      e.getClientRects().length && (a = r.css(e, "boxSizing", !1, i) === "border-box", o = l in e, o && (f = e[l])), f = parseFloat(f) || 0, f + Nt(
        e,
        t,
        n || (a ? "border" : "content"),
        o,
        i,
        // Provide the current computed size to request scroll gutter calculation (gh-3589)
        f
      ) + "px";
    }
    r.extend({
      // Add in style property hooks for overriding the default
      // behavior of getting and setting a style property
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = tt(e, "opacity");
              return n === "" ? "1" : n;
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
      style: function(e, t, n, i) {
        if (!(!e || e.nodeType === 3 || e.nodeType === 8 || !e.style)) {
          var u, a, o, f = ge(t), l = kt.test(t), d = e.style;
          if (l || (t = At(f)), o = r.cssHooks[t] || r.cssHooks[f], n !== void 0) {
            if (a = typeof n, a === "string" && (u = Ze.exec(n)) && u[1] && (n = nn(e, t, u), a = "number"), n == null || n !== n)
              return;
            a === "number" && !l && (n += u && u[3] || (r.cssNumber[f] ? "" : "px")), !P.clearCloneStyle && n === "" && t.indexOf("background") === 0 && (d[t] = "inherit"), (!o || !("set" in o) || (n = o.set(e, n, i)) !== void 0) && (l ? d.setProperty(t, n) : d[t] = n);
          } else
            return o && "get" in o && (u = o.get(e, !1, i)) !== void 0 ? u : d[t];
        }
      },
      css: function(e, t, n, i) {
        var u, a, o, f = ge(t), l = kt.test(t);
        return l || (t = At(f)), o = r.cssHooks[t] || r.cssHooks[f], o && "get" in o && (u = o.get(e, !0, n)), u === void 0 && (u = tt(e, t, i)), u === "normal" && t in yn && (u = yn[t]), n === "" || n ? (a = parseFloat(u), n === !0 || isFinite(a) ? a || 0 : u) : u;
      }
    }), r.each(["height", "width"], function(e, t) {
      r.cssHooks[t] = {
        get: function(n, i, u) {
          if (i)
            return di.test(r.css(n, "display")) && // Support: Safari 8+
            // Table columns in Safari have non-zero offsetWidth & zero
            // getBoundingClientRect().width unless display is changed.
            // Support: IE <=11 only
            // Running getBoundingClientRect on a disconnected node
            // in IE throws an error.
            (!n.getClientRects().length || !n.getBoundingClientRect().width) ? pn(n, hi, function() {
              return vn(n, t, u);
            }) : vn(n, t, u);
        },
        set: function(n, i, u) {
          var a, o = ht(n), f = !P.scrollboxSize() && o.position === "absolute", l = f || u, d = l && r.css(n, "boxSizing", !1, o) === "border-box", F = u ? Nt(
            n,
            t,
            u,
            d,
            o
          ) : 0;
          return d && f && (F -= Math.ceil(
            n["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Nt(n, t, "border", !1, o) - 0.5
          )), F && (a = Ze.exec(i)) && (a[3] || "px") !== "px" && (n.style[t] = i, i = r.css(n, t)), Fn(n, i, F);
        }
      };
    }), r.cssHooks.marginLeft = dn(
      P.reliableMarginLeft,
      function(e, t) {
        if (t)
          return (parseFloat(tt(e, "marginLeft")) || e.getBoundingClientRect().left - pn(e, { marginLeft: 0 }, function() {
            return e.getBoundingClientRect().left;
          })) + "px";
      }
    ), r.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      r.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, u = {}, a = typeof n == "string" ? n.split(" ") : [n]; i < 4; i++)
            u[e + Te[i] + t] = a[i] || a[i - 2] || a[0];
          return u;
        }
      }, e !== "margin" && (r.cssHooks[e + t].set = Fn);
    }), r.fn.extend({
      css: function(e, t) {
        return _e(this, function(n, i, u) {
          var a, o, f = {}, l = 0;
          if (Array.isArray(i)) {
            for (a = ht(n), o = i.length; l < o; l++)
              f[i[l]] = r.css(n, i[l], !1, a);
            return f;
          }
          return u !== void 0 ? r.style(n, i, u) : r.css(n, i);
        }, e, t, arguments.length > 1);
      }
    });
    function oe(e, t, n, i, u) {
      return new oe.prototype.init(e, t, n, i, u);
    }
    r.Tween = oe, oe.prototype = {
      constructor: oe,
      init: function(e, t, n, i, u, a) {
        this.elem = e, this.prop = n, this.easing = u || r.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (r.cssNumber[n] ? "" : "px");
      },
      cur: function() {
        var e = oe.propHooks[this.prop];
        return e && e.get ? e.get(this) : oe.propHooks._default.get(this);
      },
      run: function(e) {
        var t, n = oe.propHooks[this.prop];
        return this.options.duration ? this.pos = t = r.easing[this.easing](
          e,
          this.options.duration * e,
          0,
          1,
          this.options.duration
        ) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : oe.propHooks._default.set(this), this;
      }
    }, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null ? e.elem[e.prop] : (t = r.css(e.elem, e.prop, ""), !t || t === "auto" ? 0 : t);
        },
        set: function(e) {
          r.fx.step[e.prop] ? r.fx.step[e.prop](e) : e.elem.nodeType === 1 && (r.cssHooks[e.prop] || e.elem.style[At(e.prop)] != null) ? r.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
        }
      }
    }, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, r.easing = {
      linear: function(e) {
        return e;
      },
      swing: function(e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, r.fx = oe.prototype.init, r.fx.step = {};
    var ze, gt, gi = /^(?:toggle|show|hide)$/, mi = /queueHooks$/;
    function jt() {
      gt && (O.hidden === !1 && c.requestAnimationFrame ? c.requestAnimationFrame(jt) : c.setTimeout(jt, r.fx.interval), r.fx.tick());
    }
    function bn() {
      return c.setTimeout(function() {
        ze = void 0;
      }), ze = Date.now();
    }
    function mt(e, t) {
      var n, i = 0, u = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        n = Te[i], u["margin" + n] = u["padding" + n] = e;
      return t && (u.opacity = u.width = e), u;
    }
    function wn(e, t, n) {
      for (var i, u = (pe.tweeners[t] || []).concat(pe.tweeners["*"]), a = 0, o = u.length; a < o; a++)
        if (i = u[a].call(n, t, e))
          return i;
    }
    function yi(e, t, n) {
      var i, u, a, o, f, l, d, F, b = "width" in t || "height" in t, g = this, x = {}, q = e.style, G = e.nodeType && pt(e), M = S.get(e, "fxshow");
      n.queue || (o = r._queueHooks(e, "fx"), o.unqueued == null && (o.unqueued = 0, f = o.empty.fire, o.empty.fire = function() {
        o.unqueued || f();
      }), o.unqueued++, g.always(function() {
        g.always(function() {
          o.unqueued--, r.queue(e, "fx").length || o.empty.fire();
        });
      }));
      for (i in t)
        if (u = t[i], gi.test(u)) {
          if (delete t[i], a = a || u === "toggle", u === (G ? "hide" : "show"))
            if (u === "show" && M && M[i] !== void 0)
              G = !0;
            else
              continue;
          x[i] = M && M[i] || r.style(e, i);
        }
      if (l = !r.isEmptyObject(t), !(!l && r.isEmptyObject(x))) {
        b && e.nodeType === 1 && (n.overflow = [q.overflow, q.overflowX, q.overflowY], d = M && M.display, d == null && (d = S.get(e, "display")), F = r.css(e, "display"), F === "none" && (d ? F = d : (Ge([e], !0), d = e.style.display || d, F = r.css(e, "display"), Ge([e]))), (F === "inline" || F === "inline-block" && d != null) && r.css(e, "float") === "none" && (l || (g.done(function() {
          q.display = d;
        }), d == null && (F = q.display, d = F === "none" ? "" : F)), q.display = "inline-block")), n.overflow && (q.overflow = "hidden", g.always(function() {
          q.overflow = n.overflow[0], q.overflowX = n.overflow[1], q.overflowY = n.overflow[2];
        })), l = !1;
        for (i in x)
          l || (M ? "hidden" in M && (G = M.hidden) : M = S.access(e, "fxshow", { display: d }), a && (M.hidden = !G), G && Ge([e], !0), g.done(function() {
            G || Ge([e]), S.remove(e, "fxshow");
            for (i in x)
              r.style(e, i, x[i]);
          })), l = wn(G ? M[i] : 0, i, g), i in M || (M[i] = l.start, G && (l.end = l.start, l.start = 0));
      }
    }
    function Fi(e, t) {
      var n, i, u, a, o;
      for (n in e)
        if (i = ge(n), u = t[i], a = e[n], Array.isArray(a) && (u = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), o = r.cssHooks[i], o && "expand" in o) {
          a = o.expand(a), delete e[i];
          for (n in a)
            n in e || (e[n] = a[n], t[n] = u);
        } else
          t[i] = u;
    }
    function pe(e, t, n) {
      var i, u, a = 0, o = pe.prefilters.length, f = r.Deferred().always(function() {
        delete l.elem;
      }), l = function() {
        if (u)
          return !1;
        for (var b = ze || bn(), g = Math.max(0, d.startTime + d.duration - b), x = g / d.duration || 0, q = 1 - x, G = 0, M = d.tweens.length; G < M; G++)
          d.tweens[G].run(q);
        return f.notifyWith(e, [d, q, g]), q < 1 && M ? g : (M || f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d]), !1);
      }, d = f.promise({
        elem: e,
        props: r.extend({}, t),
        opts: r.extend(!0, {
          specialEasing: {},
          easing: r.easing._default
        }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: ze || bn(),
        duration: n.duration,
        tweens: [],
        createTween: function(b, g) {
          var x = r.Tween(
            e,
            d.opts,
            b,
            g,
            d.opts.specialEasing[b] || d.opts.easing
          );
          return d.tweens.push(x), x;
        },
        stop: function(b) {
          var g = 0, x = b ? d.tweens.length : 0;
          if (u)
            return this;
          for (u = !0; g < x; g++)
            d.tweens[g].run(1);
          return b ? (f.notifyWith(e, [d, 1, 0]), f.resolveWith(e, [d, b])) : f.rejectWith(e, [d, b]), this;
        }
      }), F = d.props;
      for (Fi(F, d.opts.specialEasing); a < o; a++)
        if (i = pe.prefilters[a].call(d, e, F, d.opts), i)
          return j(i.stop) && (r._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
      return r.map(F, wn, d), j(d.opts.start) && d.opts.start.call(e, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), r.fx.timer(
        r.extend(l, {
          elem: e,
          anim: d,
          queue: d.opts.queue
        })
      ), d;
    }
    r.Animation = r.extend(pe, {
      tweeners: {
        "*": [function(e, t) {
          var n = this.createTween(e, t);
          return nn(n.elem, e, Ze.exec(t), n), n;
        }]
      },
      tweener: function(e, t) {
        j(e) ? (t = e, e = ["*"]) : e = e.match(he);
        for (var n, i = 0, u = e.length; i < u; i++)
          n = e[i], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(t);
      },
      prefilters: [yi],
      prefilter: function(e, t) {
        t ? pe.prefilters.unshift(e) : pe.prefilters.push(e);
      }
    }), r.speed = function(e, t, n) {
      var i = e && typeof e == "object" ? r.extend({}, e) : {
        complete: n || !n && t || j(e) && e,
        duration: e,
        easing: n && t || t && !j(t) && t
      };
      return r.fx.off ? i.duration = 0 : typeof i.duration != "number" && (i.duration in r.fx.speeds ? i.duration = r.fx.speeds[i.duration] : i.duration = r.fx.speeds._default), (i.queue == null || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
        j(i.old) && i.old.call(this), i.queue && r.dequeue(this, i.queue);
      }, i;
    }, r.fn.extend({
      fadeTo: function(e, t, n, i) {
        return this.filter(pt).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
      },
      animate: function(e, t, n, i) {
        var u = r.isEmptyObject(e), a = r.speed(t, n, i), o = function() {
          var f = pe(this, r.extend({}, e), a);
          (u || S.get(this, "finish")) && f.stop(!0);
        };
        return o.finish = o, u || a.queue === !1 ? this.each(o) : this.queue(a.queue, o);
      },
      stop: function(e, t, n) {
        var i = function(u) {
          var a = u.stop;
          delete u.stop, a(n);
        };
        return typeof e != "string" && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
          var u = !0, a = e != null && e + "queueHooks", o = r.timers, f = S.get(this);
          if (a)
            f[a] && f[a].stop && i(f[a]);
          else
            for (a in f)
              f[a] && f[a].stop && mi.test(a) && i(f[a]);
          for (a = o.length; a--; )
            o[a].elem === this && (e == null || o[a].queue === e) && (o[a].anim.stop(n), u = !1, o.splice(a, 1));
          (u || !n) && r.dequeue(this, e);
        });
      },
      finish: function(e) {
        return e !== !1 && (e = e || "fx"), this.each(function() {
          var t, n = S.get(this), i = n[e + "queue"], u = n[e + "queueHooks"], a = r.timers, o = i ? i.length : 0;
          for (n.finish = !0, r.queue(this, e, []), u && u.stop && u.stop.call(this, !0), t = a.length; t--; )
            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
          for (t = 0; t < o; t++)
            i[t] && i[t].finish && i[t].finish.call(this);
          delete n.finish;
        });
      }
    }), r.each(["toggle", "show", "hide"], function(e, t) {
      var n = r.fn[t];
      r.fn[t] = function(i, u, a) {
        return i == null || typeof i == "boolean" ? n.apply(this, arguments) : this.animate(mt(t, !0), i, u, a);
      };
    }), r.each({
      slideDown: mt("show"),
      slideUp: mt("hide"),
      slideToggle: mt("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(e, t) {
      r.fn[e] = function(n, i, u) {
        return this.animate(t, n, i, u);
      };
    }), r.timers = [], r.fx.tick = function() {
      var e, t = 0, n = r.timers;
      for (ze = Date.now(); t < n.length; t++)
        e = n[t], !e() && n[t] === e && n.splice(t--, 1);
      n.length || r.fx.stop(), ze = void 0;
    }, r.fx.timer = function(e) {
      r.timers.push(e), r.fx.start();
    }, r.fx.interval = 13, r.fx.start = function() {
      gt || (gt = !0, jt());
    }, r.fx.stop = function() {
      gt = null;
    }, r.fx.speeds = {
      slow: 600,
      fast: 200,
      // Default speed
      _default: 400
    }, r.fn.delay = function(e, t) {
      return e = r.fx && r.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(n, i) {
        var u = c.setTimeout(n, e);
        i.stop = function() {
          c.clearTimeout(u);
        };
      });
    }, function() {
      var e = O.createElement("input"), t = O.createElement("select"), n = t.appendChild(O.createElement("option"));
      e.type = "checkbox", P.checkOn = e.value !== "", P.optSelected = n.selected, e = O.createElement("input"), e.value = "t", e.type = "radio", P.radioValue = e.value === "t";
    }();
    var xn, nt = r.expr.attrHandle;
    r.fn.extend({
      attr: function(e, t) {
        return _e(this, r.attr, e, t, arguments.length > 1);
      },
      removeAttr: function(e) {
        return this.each(function() {
          r.removeAttr(this, e);
        });
      }
    }), r.extend({
      attr: function(e, t, n) {
        var i, u, a = e.nodeType;
        if (!(a === 3 || a === 8 || a === 2)) {
          if (typeof e.getAttribute > "u")
            return r.prop(e, t, n);
          if ((a !== 1 || !r.isXMLDoc(e)) && (u = r.attrHooks[t.toLowerCase()] || (r.expr.match.bool.test(t) ? xn : void 0)), n !== void 0) {
            if (n === null) {
              r.removeAttr(e, t);
              return;
            }
            return u && "set" in u && (i = u.set(e, n, t)) !== void 0 ? i : (e.setAttribute(t, n + ""), n);
          }
          return u && "get" in u && (i = u.get(e, t)) !== null ? i : (i = r.find.attr(e, t), i ?? void 0);
        }
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!P.radioValue && t === "radio" && X(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i = 0, u = t && t.match(he);
        if (u && e.nodeType === 1)
          for (; n = u[i++]; )
            e.removeAttribute(n);
      }
    }), xn = {
      set: function(e, t, n) {
        return t === !1 ? r.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }, r.each(r.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = nt[t] || r.find.attr;
      nt[t] = function(i, u, a) {
        var o, f, l = u.toLowerCase();
        return a || (f = nt[l], nt[l] = o, o = n(i, u, a) != null ? l : null, nt[l] = f), o;
      };
    });
    var vi = /^(?:input|select|textarea|button)$/i, bi = /^(?:a|area)$/i;
    r.fn.extend({
      prop: function(e, t) {
        return _e(this, r.prop, e, t, arguments.length > 1);
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[r.propFix[e] || e];
        });
      }
    }), r.extend({
      prop: function(e, t, n) {
        var i, u, a = e.nodeType;
        if (!(a === 3 || a === 8 || a === 2))
          return (a !== 1 || !r.isXMLDoc(e)) && (t = r.propFix[t] || t, u = r.propHooks[t]), n !== void 0 ? u && "set" in u && (i = u.set(e, n, t)) !== void 0 ? i : e[t] = n : u && "get" in u && (i = u.get(e, t)) !== null ? i : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = r.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : vi.test(e.nodeName) || bi.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), P.optSelected || (r.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), r.each([
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
      r.propFix[this.toLowerCase()] = this;
    });
    function He(e) {
      var t = e.match(he) || [];
      return t.join(" ");
    }
    function Le(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }
    function Ot(e) {
      return Array.isArray(e) ? e : typeof e == "string" ? e.match(he) || [] : [];
    }
    r.fn.extend({
      addClass: function(e) {
        var t, n, i, u, a, o;
        return j(e) ? this.each(function(f) {
          r(this).addClass(e.call(this, f, Le(this)));
        }) : (t = Ot(e), t.length ? this.each(function() {
          if (i = Le(this), n = this.nodeType === 1 && " " + He(i) + " ", n) {
            for (a = 0; a < t.length; a++)
              u = t[a], n.indexOf(" " + u + " ") < 0 && (n += u + " ");
            o = He(n), i !== o && this.setAttribute("class", o);
          }
        }) : this);
      },
      removeClass: function(e) {
        var t, n, i, u, a, o;
        return j(e) ? this.each(function(f) {
          r(this).removeClass(e.call(this, f, Le(this)));
        }) : arguments.length ? (t = Ot(e), t.length ? this.each(function() {
          if (i = Le(this), n = this.nodeType === 1 && " " + He(i) + " ", n) {
            for (a = 0; a < t.length; a++)
              for (u = t[a]; n.indexOf(" " + u + " ") > -1; )
                n = n.replace(" " + u + " ", " ");
            o = He(n), i !== o && this.setAttribute("class", o);
          }
        }) : this) : this.attr("class", "");
      },
      toggleClass: function(e, t) {
        var n, i, u, a, o = typeof e, f = o === "string" || Array.isArray(e);
        return j(e) ? this.each(function(l) {
          r(this).toggleClass(
            e.call(this, l, Le(this), t),
            t
          );
        }) : typeof t == "boolean" && f ? t ? this.addClass(e) : this.removeClass(e) : (n = Ot(e), this.each(function() {
          if (f)
            for (a = r(this), u = 0; u < n.length; u++)
              i = n[u], a.hasClass(i) ? a.removeClass(i) : a.addClass(i);
          else
            (e === void 0 || o === "boolean") && (i = Le(this), i && S.set(this, "__className__", i), this.setAttribute && this.setAttribute(
              "class",
              i || e === !1 ? "" : S.get(this, "__className__") || ""
            ));
        }));
      },
      hasClass: function(e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++]; )
          if (n.nodeType === 1 && (" " + He(Le(n)) + " ").indexOf(t) > -1)
            return !0;
        return !1;
      }
    });
    var wi = /\r/g;
    r.fn.extend({
      val: function(e) {
        var t, n, i, u = this[0];
        return arguments.length ? (i = j(e), this.each(function(a) {
          var o;
          this.nodeType === 1 && (i ? o = e.call(this, a, r(this).val()) : o = e, o == null ? o = "" : typeof o == "number" ? o += "" : Array.isArray(o) && (o = r.map(o, function(f) {
            return f == null ? "" : f + "";
          })), t = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, o, "value") === void 0) && (this.value = o));
        })) : u ? (t = r.valHooks[u.type] || r.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (n = t.get(u, "value")) !== void 0 ? n : (n = u.value, typeof n == "string" ? n.replace(wi, "") : n ?? "")) : void 0;
      }
    }), r.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = r.find.attr(e, "value");
            return t ?? // Support: IE <=10 - 11 only
            // option.text throws exceptions (trac-14686, trac-14858)
            // Strip and collapse whitespace
            // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
            He(r.text(e));
          }
        },
        select: {
          get: function(e) {
            var t, n, i, u = e.options, a = e.selectedIndex, o = e.type === "select-one", f = o ? null : [], l = o ? a + 1 : u.length;
            for (a < 0 ? i = l : i = o ? a : 0; i < l; i++)
              if (n = u[i], (n.selected || i === a) && // Don't return options that are disabled or in a disabled optgroup
              !n.disabled && (!n.parentNode.disabled || !X(n.parentNode, "optgroup"))) {
                if (t = r(n).val(), o)
                  return t;
                f.push(t);
              }
            return f;
          },
          set: function(e, t) {
            for (var n, i, u = e.options, a = r.makeArray(t), o = u.length; o--; )
              i = u[o], (i.selected = r.inArray(r.valHooks.option.get(i), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a;
          }
        }
      }
    }), r.each(["radio", "checkbox"], function() {
      r.valHooks[this] = {
        set: function(e, t) {
          if (Array.isArray(t))
            return e.checked = r.inArray(r(e).val(), t) > -1;
        }
      }, P.checkOn || (r.valHooks[this].get = function(e) {
        return e.getAttribute("value") === null ? "on" : e.value;
      });
    });
    var it = c.location, _n = { guid: Date.now() }, qt = /\?/;
    r.parseXML = function(e) {
      var t, n;
      if (!e || typeof e != "string")
        return null;
      try {
        t = new c.DOMParser().parseFromString(e, "text/xml");
      } catch {
      }
      return n = t && t.getElementsByTagName("parsererror")[0], (!t || n) && r.error("Invalid XML: " + (n ? r.map(n.childNodes, function(i) {
        return i.textContent;
      }).join(`
`) : e)), t;
    };
    var Tn = /^(?:focusinfocus|focusoutblur)$/, Cn = function(e) {
      e.stopPropagation();
    };
    r.extend(r.event, {
      trigger: function(e, t, n, i) {
        var u, a, o, f, l, d, F, b, g = [n || O], x = we.call(e, "type") ? e.type : e, q = we.call(e, "namespace") ? e.namespace.split(".") : [];
        if (a = b = o = n = n || O, !(n.nodeType === 3 || n.nodeType === 8) && !Tn.test(x + r.event.triggered) && (x.indexOf(".") > -1 && (q = x.split("."), x = q.shift(), q.sort()), l = x.indexOf(":") < 0 && "on" + x, e = e[r.expando] ? e : new r.Event(x, typeof e == "object" && e), e.isTrigger = i ? 2 : 3, e.namespace = q.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = t == null ? [e] : r.makeArray(t, [e]), F = r.event.special[x] || {}, !(!i && F.trigger && F.trigger.apply(n, t) === !1))) {
          if (!i && !F.noBubble && !Z(n)) {
            for (f = F.delegateType || x, Tn.test(f + x) || (a = a.parentNode); a; a = a.parentNode)
              g.push(a), o = a;
            o === (n.ownerDocument || O) && g.push(o.defaultView || o.parentWindow || c);
          }
          for (u = 0; (a = g[u++]) && !e.isPropagationStopped(); )
            b = a, e.type = u > 1 ? f : F.bindType || x, d = (S.get(a, "events") || /* @__PURE__ */ Object.create(null))[e.type] && S.get(a, "handle"), d && d.apply(a, t), d = l && a[l], d && d.apply && Ye(a) && (e.result = d.apply(a, t), e.result === !1 && e.preventDefault());
          return e.type = x, !i && !e.isDefaultPrevented() && (!F._default || F._default.apply(g.pop(), t) === !1) && Ye(n) && l && j(n[x]) && !Z(n) && (o = n[l], o && (n[l] = null), r.event.triggered = x, e.isPropagationStopped() && b.addEventListener(x, Cn), n[x](), e.isPropagationStopped() && b.removeEventListener(x, Cn), r.event.triggered = void 0, o && (n[l] = o)), e.result;
        }
      },
      // Piggyback on a donor event to simulate a different one
      // Used only for `focus(in | out)` events
      simulate: function(e, t, n) {
        var i = r.extend(
          new r.Event(),
          n,
          {
            type: e,
            isSimulated: !0
          }
        );
        r.event.trigger(i, null, t);
      }
    }), r.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          r.event.trigger(e, t, this);
        });
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n)
          return r.event.trigger(e, t, n, !0);
      }
    });
    var xi = /\[\]$/, Dn = /\r?\n/g, _i = /^(?:submit|button|image|reset|file)$/i, Ti = /^(?:input|select|textarea|keygen)/i;
    function Ht(e, t, n, i) {
      var u;
      if (Array.isArray(t))
        r.each(t, function(a, o) {
          n || xi.test(e) ? i(e, o) : Ht(
            e + "[" + (typeof o == "object" && o != null ? a : "") + "]",
            o,
            n,
            i
          );
        });
      else if (!n && Ee(t) === "object")
        for (u in t)
          Ht(e + "[" + u + "]", t[u], n, i);
      else
        i(e, t);
    }
    r.param = function(e, t) {
      var n, i = [], u = function(a, o) {
        var f = j(o) ? o() : o;
        i[i.length] = encodeURIComponent(a) + "=" + encodeURIComponent(f ?? "");
      };
      if (e == null)
        return "";
      if (Array.isArray(e) || e.jquery && !r.isPlainObject(e))
        r.each(e, function() {
          u(this.name, this.value);
        });
      else
        for (n in e)
          Ht(n, e[n], t, u);
      return i.join("&");
    }, r.fn.extend({
      serialize: function() {
        return r.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var e = r.prop(this, "elements");
          return e ? r.makeArray(e) : this;
        }).filter(function() {
          var e = this.type;
          return this.name && !r(this).is(":disabled") && Ti.test(this.nodeName) && !_i.test(e) && (this.checked || !et.test(e));
        }).map(function(e, t) {
          var n = r(this).val();
          return n == null ? null : Array.isArray(n) ? r.map(n, function(i) {
            return { name: t.name, value: i.replace(Dn, `\r
`) };
          }) : { name: t.name, value: n.replace(Dn, `\r
`) };
        }).get();
      }
    });
    var Ci = /%20/g, Di = /#.*$/, Ei = /([?&])_=[^&]*/, Si = /^(.*?):[ \t]*([^\r\n]*)$/mg, ki = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ai = /^(?:GET|HEAD)$/, Ni = /^\/\//, En = {}, Lt = {}, Sn = "*/".concat("*"), Pt = O.createElement("a");
    Pt.href = it.href;
    function kn(e) {
      return function(t, n) {
        typeof t != "string" && (n = t, t = "*");
        var i, u = 0, a = t.toLowerCase().match(he) || [];
        if (j(n))
          for (; i = a[u++]; )
            i[0] === "+" ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
      };
    }
    function An(e, t, n, i) {
      var u = {}, a = e === Lt;
      function o(f) {
        var l;
        return u[f] = !0, r.each(e[f] || [], function(d, F) {
          var b = F(t, n, i);
          if (typeof b == "string" && !a && !u[b])
            return t.dataTypes.unshift(b), o(b), !1;
          if (a)
            return !(l = b);
        }), l;
      }
      return o(t.dataTypes[0]) || !u["*"] && o("*");
    }
    function Mt(e, t) {
      var n, i, u = r.ajaxSettings.flatOptions || {};
      for (n in t)
        t[n] !== void 0 && ((u[n] ? e : i || (i = {}))[n] = t[n]);
      return i && r.extend(!0, e, i), e;
    }
    function ji(e, t, n) {
      for (var i, u, a, o, f = e.contents, l = e.dataTypes; l[0] === "*"; )
        l.shift(), i === void 0 && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i) {
        for (u in f)
          if (f[u] && f[u].test(i)) {
            l.unshift(u);
            break;
          }
      }
      if (l[0] in n)
        a = l[0];
      else {
        for (u in n) {
          if (!l[0] || e.converters[u + " " + l[0]]) {
            a = u;
            break;
          }
          o || (o = u);
        }
        a = a || o;
      }
      if (a)
        return a !== l[0] && l.unshift(a), n[a];
    }
    function Oi(e, t, n, i) {
      var u, a, o, f, l, d = {}, F = e.dataTypes.slice();
      if (F[1])
        for (o in e.converters)
          d[o.toLowerCase()] = e.converters[o];
      for (a = F.shift(); a; )
        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = F.shift(), a) {
          if (a === "*")
            a = l;
          else if (l !== "*" && l !== a) {
            if (o = d[l + " " + a] || d["* " + a], !o) {
              for (u in d)
                if (f = u.split(" "), f[1] === a && (o = d[l + " " + f[0]] || d["* " + f[0]], o)) {
                  o === !0 ? o = d[u] : d[u] !== !0 && (a = f[0], F.unshift(f[1]));
                  break;
                }
            }
            if (o !== !0)
              if (o && e.throws)
                t = o(t);
              else
                try {
                  t = o(t);
                } catch (b) {
                  return {
                    state: "parsererror",
                    error: o ? b : "No conversion from " + l + " to " + a
                  };
                }
          }
        }
      return { state: "success", data: t };
    }
    r.extend({
      // Counter for holding the number of active queries
      active: 0,
      // Last-Modified header cache for next request
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: it.href,
        type: "GET",
        isLocal: ki.test(it.protocol),
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
          "*": Sn,
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
          "text xml": r.parseXML
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
          Mt(Mt(e, r.ajaxSettings), t)
        ) : (
          // Extending ajaxSettings
          Mt(r.ajaxSettings, e)
        );
      },
      ajaxPrefilter: kn(En),
      ajaxTransport: kn(Lt),
      // Main method
      ajax: function(e, t) {
        typeof e == "object" && (t = e, e = void 0), t = t || {};
        var n, i, u, a, o, f, l, d, F, b, g = r.ajaxSetup({}, t), x = g.context || g, q = g.context && (x.nodeType || x.jquery) ? r(x) : r.event, G = r.Deferred(), M = r.Callbacks("once memory"), ee = g.statusCode || {}, K = {}, me = {}, ye = "canceled", V = {
          readyState: 0,
          // Builds headers hashtable if needed
          getResponseHeader: function($) {
            var J;
            if (l) {
              if (!a)
                for (a = {}; J = Si.exec(u); )
                  a[J[1].toLowerCase() + " "] = (a[J[1].toLowerCase() + " "] || []).concat(J[2]);
              J = a[$.toLowerCase() + " "];
            }
            return J == null ? null : J.join(", ");
          },
          // Raw string
          getAllResponseHeaders: function() {
            return l ? u : null;
          },
          // Caches the header
          setRequestHeader: function($, J) {
            return l == null && ($ = me[$.toLowerCase()] = me[$.toLowerCase()] || $, K[$] = J), this;
          },
          // Overrides response content-type header
          overrideMimeType: function($) {
            return l == null && (g.mimeType = $), this;
          },
          // Status-dependent callbacks
          statusCode: function($) {
            var J;
            if ($)
              if (l)
                V.always($[V.status]);
              else
                for (J in $)
                  ee[J] = [ee[J], $[J]];
            return this;
          },
          // Cancel the request
          abort: function($) {
            var J = $ || ye;
            return n && n.abort(J), Pe(0, J), this;
          }
        };
        if (G.promise(V), g.url = ((e || g.url || it.href) + "").replace(Ni, it.protocol + "//"), g.type = t.method || t.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(he) || [""], g.crossDomain == null) {
          f = O.createElement("a");
          try {
            f.href = g.url, f.href = f.href, g.crossDomain = Pt.protocol + "//" + Pt.host != f.protocol + "//" + f.host;
          } catch {
            g.crossDomain = !0;
          }
        }
        if (g.data && g.processData && typeof g.data != "string" && (g.data = r.param(g.data, g.traditional)), An(En, g, t, V), l)
          return V;
        d = r.event && g.global, d && r.active++ === 0 && r.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ai.test(g.type), i = g.url.replace(Di, ""), g.hasContent ? g.data && g.processData && (g.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (g.data = g.data.replace(Ci, "+")) : (b = g.url.slice(i.length), g.data && (g.processData || typeof g.data == "string") && (i += (qt.test(i) ? "&" : "?") + g.data, delete g.data), g.cache === !1 && (i = i.replace(Ei, "$1"), b = (qt.test(i) ? "&" : "?") + "_=" + _n.guid++ + b), g.url = i + b), g.ifModified && (r.lastModified[i] && V.setRequestHeader("If-Modified-Since", r.lastModified[i]), r.etag[i] && V.setRequestHeader("If-None-Match", r.etag[i])), (g.data && g.hasContent && g.contentType !== !1 || t.contentType) && V.setRequestHeader("Content-Type", g.contentType), V.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + (g.dataTypes[0] !== "*" ? ", " + Sn + "; q=0.01" : "") : g.accepts["*"]
        );
        for (F in g.headers)
          V.setRequestHeader(F, g.headers[F]);
        if (g.beforeSend && (g.beforeSend.call(x, V, g) === !1 || l))
          return V.abort();
        if (ye = "abort", M.add(g.complete), V.done(g.success), V.fail(g.error), n = An(Lt, g, t, V), !n)
          Pe(-1, "No Transport");
        else {
          if (V.readyState = 1, d && q.trigger("ajaxSend", [V, g]), l)
            return V;
          g.async && g.timeout > 0 && (o = c.setTimeout(function() {
            V.abort("timeout");
          }, g.timeout));
          try {
            l = !1, n.send(K, Pe);
          } catch ($) {
            if (l)
              throw $;
            Pe(-1, $);
          }
        }
        function Pe($, J, ut, It) {
          var Fe, at, ve, ke, Ae, ce = J;
          l || (l = !0, o && c.clearTimeout(o), n = void 0, u = It || "", V.readyState = $ > 0 ? 4 : 0, Fe = $ >= 200 && $ < 300 || $ === 304, ut && (ke = ji(g, V, ut)), !Fe && r.inArray("script", g.dataTypes) > -1 && r.inArray("json", g.dataTypes) < 0 && (g.converters["text script"] = function() {
          }), ke = Oi(g, ke, V, Fe), Fe ? (g.ifModified && (Ae = V.getResponseHeader("Last-Modified"), Ae && (r.lastModified[i] = Ae), Ae = V.getResponseHeader("etag"), Ae && (r.etag[i] = Ae)), $ === 204 || g.type === "HEAD" ? ce = "nocontent" : $ === 304 ? ce = "notmodified" : (ce = ke.state, at = ke.data, ve = ke.error, Fe = !ve)) : (ve = ce, ($ || !ce) && (ce = "error", $ < 0 && ($ = 0))), V.status = $, V.statusText = (J || ce) + "", Fe ? G.resolveWith(x, [at, ce, V]) : G.rejectWith(x, [V, ce, ve]), V.statusCode(ee), ee = void 0, d && q.trigger(
            Fe ? "ajaxSuccess" : "ajaxError",
            [V, g, Fe ? at : ve]
          ), M.fireWith(x, [V, ce]), d && (q.trigger("ajaxComplete", [V, g]), --r.active || r.event.trigger("ajaxStop")));
        }
        return V;
      },
      getJSON: function(e, t, n) {
        return r.get(e, t, n, "json");
      },
      getScript: function(e, t) {
        return r.get(e, void 0, t, "script");
      }
    }), r.each(["get", "post"], function(e, t) {
      r[t] = function(n, i, u, a) {
        return j(i) && (a = a || u, u = i, i = void 0), r.ajax(r.extend({
          url: n,
          type: t,
          dataType: a,
          data: i,
          success: u
        }, r.isPlainObject(n) && n));
      };
    }), r.ajaxPrefilter(function(e) {
      var t;
      for (t in e.headers)
        t.toLowerCase() === "content-type" && (e.contentType = e.headers[t] || "");
    }), r._evalUrl = function(e, t, n) {
      return r.ajax({
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
        dataFilter: function(i) {
          r.globalEval(i, t, n);
        }
      });
    }, r.fn.extend({
      wrapAll: function(e) {
        var t;
        return this[0] && (j(e) && (e = e.call(this[0])), t = r(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var n = this; n.firstElementChild; )
            n = n.firstElementChild;
          return n;
        }).append(this)), this;
      },
      wrapInner: function(e) {
        return j(e) ? this.each(function(t) {
          r(this).wrapInner(e.call(this, t));
        }) : this.each(function() {
          var t = r(this), n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e);
        });
      },
      wrap: function(e) {
        var t = j(e);
        return this.each(function(n) {
          r(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function(e) {
        return this.parent(e).not("body").each(function() {
          r(this).replaceWith(this.childNodes);
        }), this;
      }
    }), r.expr.pseudos.hidden = function(e) {
      return !r.expr.pseudos.visible(e);
    }, r.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, r.ajaxSettings.xhr = function() {
      try {
        return new c.XMLHttpRequest();
      } catch {
      }
    };
    var qi = {
      // File protocol always yields status code 0, assume 200
      0: 200,
      // Support: IE <=9 only
      // trac-1450: sometimes IE returns 1223 when it should be 204
      1223: 204
    }, rt = r.ajaxSettings.xhr();
    P.cors = !!rt && "withCredentials" in rt, P.ajax = rt = !!rt, r.ajaxTransport(function(e) {
      var t, n;
      if (P.cors || rt && !e.crossDomain)
        return {
          send: function(i, u) {
            var a, o = e.xhr();
            if (o.open(
              e.type,
              e.url,
              e.async,
              e.username,
              e.password
            ), e.xhrFields)
              for (a in e.xhrFields)
                o[a] = e.xhrFields[a];
            e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), !e.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
            for (a in i)
              o.setRequestHeader(a, i[a]);
            t = function(f) {
              return function() {
                t && (t = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, f === "abort" ? o.abort() : f === "error" ? typeof o.status != "number" ? u(0, "error") : u(
                  // File: protocol always yields status 0; see trac-8605, trac-14207
                  o.status,
                  o.statusText
                ) : u(
                  qi[o.status] || o.status,
                  o.statusText,
                  // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (o.responseType || "text") !== "text" || typeof o.responseText != "string" ? { binary: o.response } : { text: o.responseText },
                  o.getAllResponseHeaders()
                ));
              };
            }, o.onload = t(), n = o.onerror = o.ontimeout = t("error"), o.onabort !== void 0 ? o.onabort = n : o.onreadystatechange = function() {
              o.readyState === 4 && c.setTimeout(function() {
                t && n();
              });
            }, t = t("abort");
            try {
              o.send(e.hasContent && e.data || null);
            } catch (f) {
              if (t)
                throw f;
            }
          },
          abort: function() {
            t && t();
          }
        };
    }), r.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }), r.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return r.globalEval(e), e;
        }
      }
    }), r.ajaxPrefilter("script", function(e) {
      e.cache === void 0 && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), r.ajaxTransport("script", function(e) {
      if (e.crossDomain || e.scriptAttrs) {
        var t, n;
        return {
          send: function(i, u) {
            t = r("<script>").attr(e.scriptAttrs || {}).prop({ charset: e.scriptCharset, src: e.url }).on("load error", n = function(a) {
              t.remove(), n = null, a && u(a.type === "error" ? 404 : 200, a.type);
            }), O.head.appendChild(t[0]);
          },
          abort: function() {
            n && n();
          }
        };
      }
    });
    var Nn = [], Ut = /(=)\?(?=&|$)|\?\?/;
    r.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Nn.pop() || r.expando + "_" + _n.guid++;
        return this[e] = !0, e;
      }
    }), r.ajaxPrefilter("json jsonp", function(e, t, n) {
      var i, u, a, o = e.jsonp !== !1 && (Ut.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Ut.test(e.data) && "data");
      if (o || e.dataTypes[0] === "jsonp")
        return i = e.jsonpCallback = j(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Ut, "$1" + i) : e.jsonp !== !1 && (e.url += (qt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
          return a || r.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", u = c[i], c[i] = function() {
          a = arguments;
        }, n.always(function() {
          u === void 0 ? r(c).removeProp(i) : c[i] = u, e[i] && (e.jsonpCallback = t.jsonpCallback, Nn.push(i)), a && j(u) && u(a[0]), a = u = void 0;
        }), "script";
    }), P.createHTMLDocument = function() {
      var e = O.implementation.createHTMLDocument("").body;
      return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
    }(), r.parseHTML = function(e, t, n) {
      if (typeof e != "string")
        return [];
      typeof t == "boolean" && (n = t, t = !1);
      var i, u, a;
      return t || (P.createHTMLDocument ? (t = O.implementation.createHTMLDocument(""), i = t.createElement("base"), i.href = O.location.href, t.head.appendChild(i)) : t = O), u = Qt.exec(e), a = !n && [], u ? [t.createElement(u[1])] : (u = on([e], t, a), a && a.length && r(a).remove(), r.merge([], u.childNodes));
    }, r.fn.load = function(e, t, n) {
      var i, u, a, o = this, f = e.indexOf(" ");
      return f > -1 && (i = He(e.slice(f)), e = e.slice(0, f)), j(t) ? (n = t, t = void 0) : t && typeof t == "object" && (u = "POST"), o.length > 0 && r.ajax({
        url: e,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: u || "GET",
        dataType: "html",
        data: t
      }).done(function(l) {
        a = arguments, o.html(i ? (
          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          r("<div>").append(r.parseHTML(l)).find(i)
        ) : (
          // Otherwise use the full result
          l
        ));
      }).always(n && function(l, d) {
        o.each(function() {
          n.apply(this, a || [l.responseText, d, l]);
        });
      }), this;
    }, r.expr.pseudos.animated = function(e) {
      return r.grep(r.timers, function(t) {
        return e === t.elem;
      }).length;
    }, r.offset = {
      setOffset: function(e, t, n) {
        var i, u, a, o, f, l, d, F = r.css(e, "position"), b = r(e), g = {};
        F === "static" && (e.style.position = "relative"), f = b.offset(), a = r.css(e, "top"), l = r.css(e, "left"), d = (F === "absolute" || F === "fixed") && (a + l).indexOf("auto") > -1, d ? (i = b.position(), o = i.top, u = i.left) : (o = parseFloat(a) || 0, u = parseFloat(l) || 0), j(t) && (t = t.call(e, n, r.extend({}, f))), t.top != null && (g.top = t.top - f.top + o), t.left != null && (g.left = t.left - f.left + u), "using" in t ? t.using.call(e, g) : b.css(g);
      }
    }, r.fn.extend({
      // offset() relates an element's border box to the document origin
      offset: function(e) {
        if (arguments.length)
          return e === void 0 ? this : this.each(function(u) {
            r.offset.setOffset(this, e, u);
          });
        var t, n, i = this[0];
        if (i)
          return i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
            top: t.top + n.pageYOffset,
            left: t.left + n.pageXOffset
          }) : { top: 0, left: 0 };
      },
      // position() relates an element's margin box to its offset parent's padding box
      // This corresponds to the behavior of CSS absolute positioning
      position: function() {
        if (this[0]) {
          var e, t, n, i = this[0], u = { top: 0, left: 0 };
          if (r.css(i, "position") === "fixed")
            t = i.getBoundingClientRect();
          else {
            for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && r.css(e, "position") === "static"; )
              e = e.parentNode;
            e && e !== i && e.nodeType === 1 && (u = r(e).offset(), u.top += r.css(e, "borderTopWidth", !0), u.left += r.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - u.top - r.css(i, "marginTop", !0),
            left: t.left - u.left - r.css(i, "marginLeft", !0)
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
          for (var e = this.offsetParent; e && r.css(e, "position") === "static"; )
            e = e.offsetParent;
          return e || qe;
        });
      }
    }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, t) {
      var n = t === "pageYOffset";
      r.fn[e] = function(i) {
        return _e(this, function(u, a, o) {
          var f;
          if (Z(u) ? f = u : u.nodeType === 9 && (f = u.defaultView), o === void 0)
            return f ? f[t] : u[a];
          f ? f.scrollTo(
            n ? f.pageXOffset : o,
            n ? o : f.pageYOffset
          ) : u[a] = o;
        }, e, i, arguments.length);
      };
    }), r.each(["top", "left"], function(e, t) {
      r.cssHooks[t] = dn(
        P.pixelPosition,
        function(n, i) {
          if (i)
            return i = tt(n, t), St.test(i) ? r(n).position()[t] + "px" : i;
        }
      );
    }), r.each({ Height: "height", Width: "width" }, function(e, t) {
      r.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        r.fn[i] = function(u, a) {
          var o = arguments.length && (n || typeof u != "boolean"), f = n || (u === !0 || a === !0 ? "margin" : "border");
          return _e(this, function(l, d, F) {
            var b;
            return Z(l) ? i.indexOf("outer") === 0 ? l["inner" + e] : l.document.documentElement["client" + e] : l.nodeType === 9 ? (b = l.documentElement, Math.max(
              l.body["scroll" + e],
              b["scroll" + e],
              l.body["offset" + e],
              b["offset" + e],
              b["client" + e]
            )) : F === void 0 ? (
              // Get width or height on the element, requesting but not forcing parseFloat
              r.css(l, d, f)
            ) : (
              // Set width or height on the element
              r.style(l, d, F, f)
            );
          }, t, o ? u : void 0, o);
        };
      });
    }), r.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(e, t) {
      r.fn[t] = function(n) {
        return this.on(t, n);
      };
    }), r.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function(e, t) {
        return this.off(e, null, t);
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i);
      },
      undelegate: function(e, t, n) {
        return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
      },
      hover: function(e, t) {
        return this.on("mouseenter", e).on("mouseleave", t || e);
      }
    }), r.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(e, t) {
        r.fn[t] = function(n, i) {
          return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t);
        };
      }
    );
    var Hi = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    r.proxy = function(e, t) {
      var n, i, u;
      if (typeof t == "string" && (n = e[t], t = e, e = n), !!j(e))
        return i = H.call(arguments, 2), u = function() {
          return e.apply(t || this, i.concat(H.call(arguments)));
        }, u.guid = e.guid = e.guid || r.guid++, u;
    }, r.holdReady = function(e) {
      e ? r.readyWait++ : r.ready(!0);
    }, r.isArray = Array.isArray, r.parseJSON = JSON.parse, r.nodeName = X, r.isFunction = j, r.isWindow = Z, r.camelCase = ge, r.type = Ee, r.now = Date.now, r.isNumeric = function(e) {
      var t = r.type(e);
      return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      !isNaN(e - parseFloat(e));
    }, r.trim = function(e) {
      return e == null ? "" : (e + "").replace(Hi, "$1");
    };
    var Li = c.jQuery, Pi = c.$;
    return r.noConflict = function(e) {
      return c.$ === r && (c.$ = Pi), e && c.jQuery === r && (c.jQuery = Li), r;
    }, typeof A > "u" && (c.jQuery = c.$ = r), r;
  });
})(Hn);
var zi = Hn.exports;
const wt = /* @__PURE__ */ Bi(zi), { Model: Xi } = girder.models;
Xi.extend({
  resourceName: "thumbnail"
});
const { Model: Ji } = girder.models;
var Qi = Ji.extend({
  resourceName: "chameleon"
});
function Yi(T) {
  var c = "" + T, A = Ki.exec(c);
  if (!A)
    return T;
  var y, w, H, R = "";
  for (y = A.index, w = 0; y < c.length; y++) {
    switch (c.charCodeAt(y)) {
      case 34:
        H = "&quot;";
        break;
      case 38:
        H = "&amp;";
        break;
      case 60:
        H = "&lt;";
        break;
      case 62:
        H = "&gt;";
        break;
      default:
        continue;
    }
    w !== y && (R += c.substring(w, y)), w = y + 1, R += H;
  }
  return w !== y ? R + c.substring(w, y) : R;
}
var Ki = /["&<>]/;
function Ln(T, c, A, y) {
  if (!(T instanceof Error))
    throw T;
  if (!(typeof window > "u" && c || y))
    throw T.message += " on line " + A, T;
  var w, H, R, re;
  try {
    y = y || require("fs").readFileSync(c, { encoding: "utf8" }), w = 3, H = y.split(`
`), R = Math.max(A - w, 0), re = Math.min(H.length, A + w);
  } catch (Q) {
    return T.message += " - could not read from " + c + " (" + Q.message + ")", void Ln(T, null, A);
  }
  w = H.slice(R, re).map(function(Q, Y) {
    var te = Y + R + 1;
    return (te == A ? "  > " : "    ") + te + "| " + Q;
  }).join(`
`), T.path = c;
  try {
    T.message = (c || "Pug") + ":" + A + `
` + w + `

` + T.message;
  } catch {
  }
  throw T;
}
function Zi(T) {
  var c = "", A, y, w;
  try {
    var H = T || {};
    (function(R) {
      w = 1, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="modal-dialog">', w = 2, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="modal-content">', w = 3, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<form class="modal-form" id="g-create-thumbnail-form" role="form">', w = 4, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="modal-header">', w = 5, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<button class="close" data-dismiss="modal" aria-hidden="true" type="button">', w = 5, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "&times;</button>", w = 6, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<h4 class="modal-title">', w = 6, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Converted with Chameleon</h4>", w = 7, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="g-dialog-subtitle">', w = 8, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<i class="icon-doc-inv"></i>', w = 9, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + " ", w = 9, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + Yi((A = R.get("name")) == null ? "" : A) + "</div></div>", w = 10, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="modal-body">', w = 11, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "<label>", w = 11, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Select an endpoint</label>", w = 12, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<select class="form-control" id="g-endpoint-options" name="dropdown-options">', w = 13, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option1">', w = 13, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "RHEED</option>", w = 14, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option2">', w = 14, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "PPMS/MPMS</option>", w = 15, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option3">', w = 15, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Bruker Raw</option>", w = 16, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option4">', w = 16, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Bruker Raw Background</option>", w = 17, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option5">', w = 17, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "4D STEM</option>", w = 18, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option6">', w = 18, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Non-4D STEM(File)</option>", w = 19, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option7">', w = 19, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "HS2</option>", w = 20, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option8">', w = 20, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "JEOL SEM</option>", w = 21, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option9">', w = 21, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Bruker BRML</option></select>", w = 22, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "<label>", w = 22, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Output Name</label>", w = 23, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<input class="form-control" id="g-output-name" type="text" placeholder="Enter output name here" name="text-input"/>', w = 24, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="g-validation-failed-message"></div>', w = 25, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "<label>", w = 25, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Select an input file extension</label>", w = 26, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<select class="form-control" id="g-input-extension-options" name="dropdown-options">', w = 27, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option1">', w = 27, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "None</option>", w = 28, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option2">', w = 28, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".raw</option>", w = 29, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option3">', w = 29, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".txt</option>", w = 30, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option4">', w = 30, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".uxd </option>", w = 31, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option5">', w = 31, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".dm4 </option>", w = 32, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option6">', w = 32, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".ser </option>", w = 33, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<option value="option7">', w = 33, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + ".emd</option></select>", w = 34, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "<label>", w = 34, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Add file (Bruker Background Only)</label>", w = 35, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="g-target-result-container">', w = 36, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="g-search-field-container">', w = 37, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<input class="form-control" id="g-second-file-search" type="search" placeholder="Search or enter file path" name="secondFile"/></div></div>', w = 38, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="g-validation-failed-message"></div></div>', w = 39, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<div class="modal-footer">', w = 40, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<a class="btn btn-small btn-default" data-dismiss="modal">', w = 40, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + "Close</a>", w = 41, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<button class="g-submit-create-chameleon btn btn-small btn-primary" type="submit">', w = 42, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + '<i class="icon-picture"></i>', w = 43, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", c = c + " Create</button></div></form></div></div>";
    }).call(this, "file" in H ? H.file : typeof file < "u" ? file : void 0);
  } catch (R) {
    Ln(R, y, w);
  }
  return c;
}
function er(T, c, A, y) {
  if (c === !1 || c == null || !c && (T === "class" || T === "style"))
    return "";
  if (c === !0)
    return " " + (y ? T : T + '="' + T + '"');
  var w = typeof c;
  return w !== "object" && w !== "function" || typeof c.toJSON != "function" || (c = c.toJSON()), typeof c == "string" || (c = JSON.stringify(c), A || c.indexOf('"') === -1) ? (A && (c = zt(c)), " " + T + '="' + c + '"') : " " + T + "='" + c.replace(/'/g, "&#39;") + "'";
}
function Pn(T, c) {
  return Array.isArray(T) ? tr(T, c) : T && typeof T == "object" ? nr(T) : T || "";
}
function tr(T, c) {
  for (var A, y = "", w = "", H = Array.isArray(c), R = 0; R < T.length; R++)
    (A = Pn(T[R])) && (H && c[R] && (A = zt(A)), y = y + w + A, w = " ");
  return y;
}
function nr(T) {
  var c = "", A = "";
  for (var y in T)
    y && T[y] && ir.call(T, y) && (c = c + A + y, A = " ");
  return c;
}
function zt(T) {
  var c = "" + T, A = rr.exec(c);
  if (!A)
    return T;
  var y, w, H, R = "";
  for (y = A.index, w = 0; y < c.length; y++) {
    switch (c.charCodeAt(y)) {
      case 34:
        H = "&quot;";
        break;
      case 38:
        H = "&amp;";
        break;
      case 60:
        H = "&lt;";
        break;
      case 62:
        H = "&gt;";
        break;
      default:
        continue;
    }
    w !== y && (R += c.substring(w, y)), w = y + 1, R += H;
  }
  return w !== y ? R + c.substring(w, y) : R;
}
var ir = Object.prototype.hasOwnProperty, rr = /["&<>]/;
function Mn(T, c, A, y) {
  if (!(T instanceof Error))
    throw T;
  if (!(typeof window > "u" && c || y))
    throw T.message += " on line " + A, T;
  var w, H, R, re;
  try {
    y = y || require("fs").readFileSync(c, { encoding: "utf8" }), w = 3, H = y.split(`
`), R = Math.max(A - w, 0), re = Math.min(H.length, A + w);
  } catch (Q) {
    return T.message += " - could not read from " + c + " (" + Q.message + ")", void Mn(T, null, A);
  }
  w = H.slice(R, re).map(function(Q, Y) {
    var te = Y + R + 1;
    return (te == A ? "  > " : "    ") + te + "| " + Q;
  }).join(`
`), T.path = c;
  try {
    T.message = (c || "Pug") + ":" + A + `
` + w + `

` + T.message;
  } catch {
  }
  throw T;
}
function ur(T) {
  var c = "", A, y, w;
  try {
    var H = T || {};
    (function(R, re) {
      w = 1, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", c = c + '<div class="g-target-result">', w = 2, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", c = c + "<i" + er("class", Pn([`icon-${R}`], [!0]), !1, !1) + "></i>", w = 3, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", c = c + " ", w = 3, y = "/Users/petercauchy/Documents/General/chameleon_plugin_v1/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", c = c + zt((A = re) == null ? "" : A) + "</div>";
    }).call(this, "icon" in H ? H.icon : typeof icon < "u" ? icon : void 0, "text" in H ? H.text : typeof text < "u" ? text : void 0);
  } catch (R) {
    Mn(R, y, w);
  }
  return c;
}
const { SearchFieldWidget: ar } = girder.views.widgets, { FileModel: or } = girder.models, { View: sr } = girder.views;
var lr = sr.extend({
  initialize: function() {
    console.log("Test");
  },
  events: {
    'change .g-thumbnail-attach-container input[type="radio"]': function() {
      this.$(".g-target-result-container").empty(), this.$(".g-thumbnail-attach-this-item").is(":checked") ? (this.attachToType = "item", this.attachToId = this.item.id, this.$(".g-thumbnail-custom-target-container").addClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!0)) : (this.attachToType = null, this.attachToId = null, this.$(".g-thumbnail-custom-target-container").removeClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!1));
    },
    "submit #g-create-thumbnail-form": function(T) {
      const c = this;
      T.preventDefault(), this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
      const A = new Qi({
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
      }), y = A.get("output_name") || "file.png", w = A.get("target_endpoint") || "option1";
      A.get("ppms_file_type"), A.get("fileId");
      const H = A.get("attachToId");
      A.get("secondFile"), A.get("input_type");
      const R = `http://localhost:8080/api/v1/item/${H}/download`, re = A.get("folderId"), Q = A.get("collectionId");
      let Y;
      switch (console.log(re), console.log(Q), w) {
        case "option1":
          Y = "http://localhost:5020/rheedconverter";
          break;
        case "option2":
          Y = "http://localhost:5020/ppmsmpms";
          break;
        case "option3":
          Y = "http://localhost:5020/brukerrawconverter";
          break;
        case "option4":
          Y = "http://localhost:5020/brukerrawbackground";
          break;
        case "option5":
          Y = "http://localhost:5020/stemarray4d";
          break;
        case "option6":
          Y = "http://localhost:5020/non4dstem_file";
          break;
        case "option7":
          Y = "http://localhost:5020/hs2converter";
          break;
        case "option8":
          Y = "http://localhost:5020/jeol_sem_converter";
          break;
        case "option9":
          Y = "http://localhost:5020/brukerbrmlconverter";
          break;
        default:
          Y = "http://localhost:5020/default";
      }
      wt.ajax({
        url: Y,
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify({
          input_url: R,
          output: y,
          output_type: "raw",
          output_dest: "caller"
        }),
        xhrFields: {
          responseType: "blob"
        },
        processData: !1
      }).done(function(te, we, je) {
        const Oe = je.getResponseHeader("Content-Type");
        if (Oe.includes("application/json")) {
          const j = new FileReader();
          j.onload = function() {
            try {
              const Z = JSON.parse(j.result);
              if (Z.file_data) {
                const O = atob(Z.file_data), st = new Array(O.length);
                for (let Ue = 0; Ue < O.length; Ue++)
                  st[Ue] = O.charCodeAt(Ue);
                const lt = new Uint8Array(st), Ee = new Blob([lt], { type: Oe }), Se = document.createElement("a");
                Se.href = URL.createObjectURL(Ee), Se.download = Z.file_name, document.body.appendChild(Se), Se.click(), document.body.removeChild(Se);
              } else
                console.log("JSON Response:", Z);
            } catch (Z) {
              console.error("Error parsing JSON response:", Z);
            }
          }, te.text().then((Z) => j.readAsText(new Blob([Z])));
        } else {
          const j = new Blob([te], { type: Oe });
          let Z;
          var P = new or();
          P.uploadToItem(c.item, j, y, Z), wt(".modal").girderModal("close"), location.reload();
        }
      }).fail(function(te, we, je) {
        console.error("AJAX Request Failed!"), console.error("Status:", we), console.error("Error:", je), console.error("Response Text:", te.responseText), console.error("HTTP Status Code:", te.status);
        let Oe = `
                    <div class="alert alert-danger">
                        <strong>Error:</strong> ${je} <br>
                        <strong>Status:</strong> ${we} <br>
                        <strong>HTTP Code:</strong> ${te.status} <br>
                        <strong>Response:</strong> ${te.responseText || "No response from server"} <br>
                        <strong>Possible Causes:</strong> Check if the API endpoint is correct, server is running, and request data is valid.
                    </div>`;
        wt(".g-validation-failed-message").html(Oe), wt(".g-submit-create-chameleon").girderEnable(!0);
      });
    }
  },
  initialize: function(T) {
    this.item = T.item, this.file = T.file, this.attachToType = "item", this.attachToId = this.item.id, this.folderId = this.item.get("folderId"), this.collectionId = this.item.get("baseParentId"), this.resultId = null, this.searchWidget = new ar({
      placeholder: "Start typing a name...",
      types: ["collection", "folder", "item", "user"],
      parentView: this
    }).on("g:resultClicked", function(c) {
      this.resultId = c.id;
    }, this);
  },
  render: function() {
    return this.$el.html(Zi({
      file: this.file,
      item: this.item
    })).girderModal(this).on("shown.bs.modal", () => {
      this.$("#g-endpoint-options").focus();
    }), this.$("#g-endpoint-options").focus(), this.searchWidget.setElement(this.$(".g-search-field-container")).render(), this;
  },
  pickTarget: function(T) {
    this.searchWidget.resetState(), this.attachToType = T.type, this.attachToId = T.id, this.$(".g-submit-create-chameleon").girderEnable(!0), this.$(".g-target-result-container").html(ur({
      text: T.text,
      icon: T.icon
    }));
  }
});
const { wrap: cr } = girder.utilities.PluginUtils, fr = girder.core.views.body.ItemView;
cr(fr, "render", function(T) {
  T.apply(this, arguments), this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>'), this.$(".g-open-chameleon").on("click", () => {
    new lr({
      item: this.model,
      // Pass the item model
      file: this.model.file
    }).render();
  });
});
//# sourceMappingURL=girder-plugin-chameleon.js.map
