const { Model: Fs } = girder.models;
var xs = Fs.extend({
  resourceName: "chameleon"
});
function Ts(i) {
  var n = "" + i, f = _s.exec(n);
  if (!f)
    return i;
  var s, d, g, F = "";
  for (s = f.index, d = 0; s < n.length; s++) {
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
var _s = /["&<>]/;
function Qi(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Qi(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function Cs(i) {
  var n = "", f, s, d;
  try {
    var g = i || {};
    (function(F) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-dialog">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-content">', d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<form class="modal-form" id="g-create-thumbnail-form" role="form">', d = 4, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-header">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="close" data-dismiss="modal" aria-hidden="true" type="button">', d = 5, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "&times;</button>", d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<h4 class="modal-title">', d = 6, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Convert with Chameleon</h4>", d = 7, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-dialog-subtitle">', d = 8, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-doc-inv"></i>', d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " ", d = 9, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + Ts((f = F.get("name")) == null ? "" : f) + "</div></div>", d = 10, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-body">', d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "<label>", d = 11, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Output Name</label>", d = 12, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<input class="form-control" id="g-output-name" type="text" placeholder="Enter output name here" name="text-input"/>', d = 13, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="g-validation-failed-message"></div></div>', d = 14, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<div class="modal-footer">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<a class="btn btn-small btn-default" data-dismiss="modal">', d = 15, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + "Close</a>", d = 16, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<button class="g-submit-create-chameleon btn btn-small btn-primary" type="submit">', d = 17, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + '<i class="icon-picture"></i>', d = 18, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewDialog.pug", n = n + " Create</button></div></form></div></div>";
    }).call(this, "file" in g ? g.file : typeof file < "u" ? file : void 0);
  } catch (F) {
    Qi(F, s, d);
  }
  return n;
}
function Es(i, n, f, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), f || n.indexOf('"') === -1) ? (f && (n = xr(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Yi(i, n) {
  return Array.isArray(i) ? Ss(i, n) : i && typeof i == "object" ? As(i) : i || "";
}
function Ss(i, n) {
  for (var f, s = "", d = "", g = Array.isArray(n), F = 0; F < i.length; F++)
    (f = Yi(i[F])) && (g && n[F] && (f = xr(f)), s = s + d + f, d = " ");
  return s;
}
function As(i) {
  var n = "", f = "";
  for (var s in i)
    s && i[s] && Ds.call(i, s) && (n = n + f + s, f = " ");
  return n;
}
function xr(i) {
  var n = "" + i, f = Ns.exec(n);
  if (!f)
    return i;
  var s, d, g, F = "";
  for (s = f.index, d = 0; s < n.length; s++) {
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
var Ds = Object.prototype.hasOwnProperty, Ns = /["&<>]/;
function Ki(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Ki(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function Hs(i) {
  var n = "", f, s, d;
  try {
    var g = i || {};
    (function(F, A) {
      d = 1, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + '<div class="g-target-result">', d = 2, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + "<i" + Es("class", Yi([`icon-${F}`], [!0]), !1, !1) + "></i>", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + " ", d = 3, s = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/createThumbnailViewTargetDescription.pug", n = n + xr((f = A) == null ? "" : f) + "</div>";
    }).call(this, "icon" in g ? g.icon : typeof icon < "u" ? icon : void 0, "text" in g ? g.text : typeof text < "u" ? text : void 0);
  } catch (F) {
    Ki(F, s, d);
  }
  return n;
}
const { SearchFieldWidget: Os } = girder.views.widgets, { FileModel: Ms } = girder.models, { View: Is } = girder.views, { getCurrentToken: Ps } = girder.auth, { restRequest: $s } = girder.rest, Ls = "https://data.paradim.org/api/v1/chameleon", qs = "http://localhost:8080";
var Tr = Is.extend({
  initialize: function() {
  },
  events: {
    'change .g-thumbnail-attach-container input[type="radio"]': function() {
      this.$(".g-target-result-container").empty(), this.$(".g-thumbnail-attach-this-item").is(":checked") ? (this.attachToType = "item", this.attachToId = this.item.id, this.$(".g-thumbnail-custom-target-container").addClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!0)) : (this.attachToType = null, this.attachToId = null, this.$(".g-thumbnail-custom-target-container").removeClass("hide"), this.$(".g-submit-create-chameleon").girderEnable(!1));
    }
  },
  initialize: function(i) {
    this.item = i.item, this.file = i.file, this.attachToType = "item", this.attachToId = this.item.id, this.folderId = this.item.get("folderId"), this.collectionId = this.item.get("baseParentId"), this.resultId = null, this.searchWidget = new Os({
      placeholder: "Start typing a name...",
      types: ["collection", "folder", "item", "user"],
      parentView: this
    }).on("g:resultClicked", function(n) {
      this.resultId = n.id;
    }, this);
  },
  render: function() {
    return this.$el.html(Cs({
      file: this.file,
      item: this.item
    })), this.$el.girderModal(this).on("shown.bs.modal", () => {
      console.log("Modal shown event triggered"), this.$("#g-endpoint-options").focus();
    }), this.$el.modal("show"), this.searchWidget || (this.searchWidget = new SearchWidget()), this.searchWidget.setElement(this.$(".g-search-field-container")).render(), this;
  },
  pickTarget: function(i) {
    this.searchWidget.resetState(), this.attachToType = i.type, this.attachToId = i.id, this.$(".g-submit-create-chameleon").girderEnable(!0), this.$(".g-target-result-container").html(Hs({
      text: i.text,
      icon: i.icon
    }));
  },
  executeChameleonJob: function() {
    const i = this;
    this.$(".g-validation-failed-message").empty(), this.$(".g-submit-create-chameleon").girderEnable(!1);
    const n = new xs({
      attachToId: this.attachToId,
      attachToType: this.attachToType,
      folderId: this.folderId,
      collectionId: this.collectionId,
      mimeType: this.file.get("mimeType")
    }), f = this.file.get("name"), s = n.get("attachToId"), d = qs + `/api/v1/item/${s}/download`, g = n.get("mimeType");
    let F = Ps() || window.localStorage.getItem("girderToken");
    const A = /* @__PURE__ */ new Map([
      ["application/vnd.paradim.img", { endpoint: "/rheedconverter", ext: ".png" }],
      ["application/vnd.paradim.dat", { endpoint: "/ppmsmpms", ext: ".csv" }],
      ["application/vnd.paradim.raw", { endpoint: "/brukerrawconverter", ext: ".csv" }],
      ["application/vnd.paradim.non4d", { endpoint: "/non4dstem_file", ext: ".png" }],
      ["application/vnd.paradim.hs2", { endpoint: "/hs2converter", ext: ".png" }],
      ["application/vnd.paradim.emsa", { endpoint: "/jeol_sem_converter", ext: ".png" }],
      ["application/vnd.paradim.brml", { endpoint: "/brukerbrmlconverter", ext: ".txt" }]
    ]), { endpoint: I, ext: $ } = A.get(g) || { endpoint: "/default", ext: "" }, V = Ls + I, re = f.split(".")[0] + $, Ke = g === "application/vnd.paradim.non4d" ? "." + (f.split(".").pop() || "") : "";
    $s({
      url: "chameleonAuth",
      method: "GET",
      data: {
        "chameleon-url": V,
        "Content-Type": "application/json",
        girderToken: F,
        input_url: d,
        output: re,
        input_ext: Ke
      }
    }).then((xe) => {
      console.log("Response received:", xe);
      const G = atob(xe.file_data), z = new Array(G.length);
      for (let Ne = 0; Ne < G.length; Ne++)
        z[Ne] = G.charCodeAt(Ne);
      const ke = new Uint8Array(z), j = new Blob([ke], { type: xe.content_type });
      let Ze = xe.content_type;
      var je = new Ms();
      je.uploadToItem(i.item, j, xe.file_name, Ze), setTimeout(() => location.reload(), 50);
    }).catch((xe) => {
      console.error("REST request error:", xe);
    });
  }
}), Qt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Rs(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
function ks(i) {
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
var ki;
function Zi() {
  return ki || (ki = 1, function(i) {
    (function(n, f) {
      i.exports = n.document ? f(n, !0) : function(s) {
        if (!s.document)
          throw new Error("jQuery requires a window with a document");
        return f(s);
      };
    })(typeof window < "u" ? window : Qt, function(n, f) {
      var s = [], d = Object.getPrototypeOf, g = s.slice, F = s.flat ? function(e) {
        return s.flat.call(e);
      } : function(e) {
        return s.concat.apply([], e);
      }, A = s.push, I = s.indexOf, $ = {}, V = $.toString, re = $.hasOwnProperty, Ke = re.toString, xe = Ke.call(Object), G = {}, z = function(t) {
        return typeof t == "function" && typeof t.nodeType != "number" && typeof t.item != "function";
      }, ke = function(t) {
        return t != null && t === t.window;
      }, j = n.document, Ze = {
        type: !0,
        src: !0,
        nonce: !0,
        noModule: !0
      };
      function je(e, t, r) {
        r = r || j;
        var u, o, l = r.createElement("script");
        if (l.text = e, t)
          for (u in Ze)
            o = t[u] || t.getAttribute && t.getAttribute(u), o && l.setAttribute(u, o);
        r.head.appendChild(l).parentNode.removeChild(l);
      }
      function Ne(e) {
        return e == null ? e + "" : typeof e == "object" || typeof e == "function" ? $[V.call(e)] || "object" : typeof e;
      }
      var sn = "3.7.1", on = /HTML$/i, a = function(e, t) {
        return new a.fn.init(e, t);
      };
      a.fn = a.prototype = {
        // The current version of jQuery being used
        jquery: sn,
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
        push: A,
        sort: s.sort,
        splice: s.splice
      }, a.extend = a.fn.extend = function() {
        var e, t, r, u, o, l, h = arguments[0] || {}, b = 1, m = arguments.length, x = !1;
        for (typeof h == "boolean" && (x = h, h = arguments[b] || {}, b++), typeof h != "object" && !z(h) && (h = {}), b === m && (h = this, b--); b < m; b++)
          if ((e = arguments[b]) != null)
            for (t in e)
              u = e[t], !(t === "__proto__" || h === u) && (x && u && (a.isPlainObject(u) || (o = Array.isArray(u))) ? (r = h[t], o && !Array.isArray(r) ? l = [] : !o && !a.isPlainObject(r) ? l = {} : l = r, o = !1, h[t] = a.extend(x, l, u)) : u !== void 0 && (h[t] = u));
        return h;
      }, a.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (sn + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: !0,
        error: function(e) {
          throw new Error(e);
        },
        noop: function() {
        },
        isPlainObject: function(e) {
          var t, r;
          return !e || V.call(e) !== "[object Object]" ? !1 : (t = d(e), t ? (r = re.call(t, "constructor") && t.constructor, typeof r == "function" && Ke.call(r) === xe) : !0);
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
          je(e, { nonce: t && t.nonce }, r);
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
          ) : A.call(r, e)), r;
        },
        inArray: function(e, t, r) {
          return t == null ? -1 : I.call(t, e, r);
        },
        isXMLDoc: function(e) {
          var t = e && e.namespaceURI, r = e && (e.ownerDocument || e).documentElement;
          return !on.test(t || r && r.nodeName || "HTML");
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
          if (et(e))
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
          $["[object " + t + "]"] = t.toLowerCase();
        }
      );
      function et(e) {
        var t = !!e && "length" in e && e.length, r = Ne(e);
        return z(e) || ke(e) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in e;
      }
      function oe(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var ln = s.pop, Wn = s.sort, fn = s.splice, ue = "[\\x20\\t\\r\\n\\f]", mt = new RegExp(
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
      function cn(e, t) {
        return t ? e === "\0" ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      }
      a.escapeSelector = function(e) {
        return (e + "").replace(jn, cn);
      };
      var Me = j, Rt = A;
      (function() {
        var e, t, r, u, o, l = Rt, h, b, m, x, S, H = a.expando, C = 0, M = 0, J = Fn(), te = Fn(), Q = Fn(), ye = Fn(), ge = function(v, w) {
          return v === w && (o = !0), 0;
        }, ze = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", Je = "(?:\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", ee = "\\[" + ue + "*(" + Je + ")(?:" + ue + // Operator (capture 2)
        "*([*^$|!~]?=)" + ue + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
        `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + Je + "))|)" + ue + "*\\]", wt = ":(" + Je + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + ee + ")*)|.*)\\)|)", ne = new RegExp(ue + "+", "g"), ce = new RegExp("^" + ue + "*," + ue + "*"), zt = new RegExp("^" + ue + "*([>+~]|" + ue + ")" + ue + "*"), cr = new RegExp(ue + "|>"), Xe = new RegExp(wt), Jt = new RegExp("^" + Je + "$"), Qe = {
          ID: new RegExp("^#(" + Je + ")"),
          CLASS: new RegExp("^\\.(" + Je + ")"),
          TAG: new RegExp("^(" + Je + "|[*])"),
          ATTR: new RegExp("^" + ee),
          PSEUDO: new RegExp("^" + wt),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ue + "*(even|odd|(([+-]|)(\\d*)n|)" + ue + "*(?:([+-]|)" + ue + "*(\\d+)|))" + ue + "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + ze + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          needsContext: new RegExp("^" + ue + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ue + "*((?:-\\d)?\\d*)" + ue + "*\\)|)(?=[^-]|$)", "i")
        }, ft = /^(?:input|select|textarea|button)$/i, ct = /^h\d$/i, Le = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, hr = /[+~]/, ut = new RegExp("\\\\[\\da-fA-F]{1,6}" + ue + "?|\\\\([^\\r\\n\\f])", "g"), at = function(v, w) {
          var _ = "0x" + v.slice(1) - 65536;
          return w || (_ < 0 ? String.fromCharCode(_ + 65536) : String.fromCharCode(_ >> 10 | 55296, _ & 1023 | 56320));
        }, ps = function() {
          ht();
        }, gs = Tn(
          function(v) {
            return v.disabled === !0 && oe(v, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
        function vs() {
          try {
            return h.activeElement;
          } catch {
          }
        }
        try {
          l.apply(
            s = g.call(Me.childNodes),
            Me.childNodes
          ), s[Me.childNodes.length].nodeType;
        } catch {
          l = {
            apply: function(w, _) {
              Rt.apply(w, g.call(_));
            },
            call: function(w) {
              Rt.apply(w, g.call(arguments, 1));
            }
          };
        }
        function se(v, w, _, E) {
          var N, P, q, U, R, Y, B, X = w && w.ownerDocument, K = w ? w.nodeType : 9;
          if (_ = _ || [], typeof v != "string" || !v || K !== 1 && K !== 9 && K !== 11)
            return _;
          if (!E && (ht(w), w = w || h, m)) {
            if (K !== 11 && (R = Le.exec(v)))
              if (N = R[1]) {
                if (K === 9)
                  if (q = w.getElementById(N)) {
                    if (q.id === N)
                      return l.call(_, q), _;
                  } else
                    return _;
                else if (X && (q = X.getElementById(N)) && se.contains(w, q) && q.id === N)
                  return l.call(_, q), _;
              } else {
                if (R[2])
                  return l.apply(_, w.getElementsByTagName(v)), _;
                if ((N = R[3]) && w.getElementsByClassName)
                  return l.apply(_, w.getElementsByClassName(N)), _;
              }
            if (!ye[v + " "] && (!x || !x.test(v))) {
              if (B = v, X = w, K === 1 && (cr.test(v) || zt.test(v))) {
                for (X = hr.test(v) && dr(w.parentNode) || w, (X != w || !G.scope) && ((U = w.getAttribute("id")) ? U = a.escapeSelector(U) : w.setAttribute("id", U = H)), Y = Xt(v), P = Y.length; P--; )
                  Y[P] = (U ? "#" + U : ":scope") + " " + xn(Y[P]);
                B = Y.join(",");
              }
              try {
                return l.apply(
                  _,
                  X.querySelectorAll(B)
                ), _;
              } catch {
                ye(v, !0);
              } finally {
                U === H && w.removeAttribute("id");
              }
            }
          }
          return Ri(v.replace(mt, "$1"), w, _, E);
        }
        function Fn() {
          var v = [];
          function w(_, E) {
            return v.push(_ + " ") > t.cacheLength && delete w[v.shift()], w[_ + " "] = E;
          }
          return w;
        }
        function Ve(v) {
          return v[H] = !0, v;
        }
        function Ot(v) {
          var w = h.createElement("fieldset");
          try {
            return !!v(w);
          } catch {
            return !1;
          } finally {
            w.parentNode && w.parentNode.removeChild(w), w = null;
          }
        }
        function ms(v) {
          return function(w) {
            return oe(w, "input") && w.type === v;
          };
        }
        function ys(v) {
          return function(w) {
            return (oe(w, "input") || oe(w, "button")) && w.type === v;
          };
        }
        function Li(v) {
          return function(w) {
            return "form" in w ? w.parentNode && w.disabled === !1 ? "label" in w ? "label" in w.parentNode ? w.parentNode.disabled === v : w.disabled === v : w.isDisabled === v || // Where there is no isDisabled, check manually
            w.isDisabled !== !v && gs(w) === v : w.disabled === v : "label" in w ? w.disabled === v : !1;
          };
        }
        function Ft(v) {
          return Ve(function(w) {
            return w = +w, Ve(function(_, E) {
              for (var N, P = v([], _.length, w), q = P.length; q--; )
                _[N = P[q]] && (_[N] = !(E[N] = _[N]));
            });
          });
        }
        function dr(v) {
          return v && typeof v.getElementsByTagName < "u" && v;
        }
        function ht(v) {
          var w, _ = v ? v.ownerDocument || v : Me;
          return _ == h || _.nodeType !== 9 || !_.documentElement || (h = _, b = h.documentElement, m = !a.isXMLDoc(h), S = b.matches || b.webkitMatchesSelector || b.msMatchesSelector, b.msMatchesSelector && // Support: IE 11+, Edge 17 - 18+
          // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
          // two documents; shallow comparisons work.
          // eslint-disable-next-line eqeqeq
          Me != h && (w = h.defaultView) && w.top !== w && w.addEventListener("unload", ps), G.getById = Ot(function(E) {
            return b.appendChild(E).id = a.expando, !h.getElementsByName || !h.getElementsByName(a.expando).length;
          }), G.disconnectedMatch = Ot(function(E) {
            return S.call(E, "*");
          }), G.scope = Ot(function() {
            return h.querySelectorAll(":scope");
          }), G.cssHas = Ot(function() {
            try {
              return h.querySelector(":has(*,:jqfake)"), !1;
            } catch {
              return !0;
            }
          }), G.getById ? (t.filter.ID = function(E) {
            var N = E.replace(ut, at);
            return function(P) {
              return P.getAttribute("id") === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var P = N.getElementById(E);
              return P ? [P] : [];
            }
          }) : (t.filter.ID = function(E) {
            var N = E.replace(ut, at);
            return function(P) {
              var q = typeof P.getAttributeNode < "u" && P.getAttributeNode("id");
              return q && q.value === N;
            };
          }, t.find.ID = function(E, N) {
            if (typeof N.getElementById < "u" && m) {
              var P, q, U, R = N.getElementById(E);
              if (R) {
                if (P = R.getAttributeNode("id"), P && P.value === E)
                  return [R];
                for (U = N.getElementsByName(E), q = 0; R = U[q++]; )
                  if (P = R.getAttributeNode("id"), P && P.value === E)
                    return [R];
              }
              return [];
            }
          }), t.find.TAG = function(E, N) {
            return typeof N.getElementsByTagName < "u" ? N.getElementsByTagName(E) : N.querySelectorAll(E);
          }, t.find.CLASS = function(E, N) {
            if (typeof N.getElementsByClassName < "u" && m)
              return N.getElementsByClassName(E);
          }, x = [], Ot(function(E) {
            var N;
            b.appendChild(E).innerHTML = "<a id='" + H + "' href='' disabled='disabled'></a><select id='" + H + "-\r\\' disabled='disabled'><option selected=''></option></select>", E.querySelectorAll("[selected]").length || x.push("\\[" + ue + "*(?:value|" + ze + ")"), E.querySelectorAll("[id~=" + H + "-]").length || x.push("~="), E.querySelectorAll("a#" + H + "+*").length || x.push(".#.+[+~]"), E.querySelectorAll(":checked").length || x.push(":checked"), N = h.createElement("input"), N.setAttribute("type", "hidden"), E.appendChild(N).setAttribute("name", "D"), b.appendChild(E).disabled = !0, E.querySelectorAll(":disabled").length !== 2 && x.push(":enabled", ":disabled"), N = h.createElement("input"), N.setAttribute("name", ""), E.appendChild(N), E.querySelectorAll("[name='']").length || x.push("\\[" + ue + "*name" + ue + "*=" + ue + `*(?:''|"")`);
          }), G.cssHas || x.push(":has"), x = x.length && new RegExp(x.join("|")), ge = function(E, N) {
            if (E === N)
              return o = !0, 0;
            var P = !E.compareDocumentPosition - !N.compareDocumentPosition;
            return P || (P = (E.ownerDocument || E) == (N.ownerDocument || N) ? E.compareDocumentPosition(N) : (
              // Otherwise we know they are disconnected
              1
            ), P & 1 || !G.sortDetached && N.compareDocumentPosition(E) === P ? E === h || E.ownerDocument == Me && se.contains(Me, E) ? -1 : N === h || N.ownerDocument == Me && se.contains(Me, N) ? 1 : u ? I.call(u, E) - I.call(u, N) : 0 : P & 4 ? -1 : 1);
          }), h;
        }
        se.matches = function(v, w) {
          return se(v, null, null, w);
        }, se.matchesSelector = function(v, w) {
          if (ht(v), m && !ye[w + " "] && (!x || !x.test(w)))
            try {
              var _ = S.call(v, w);
              if (_ || G.disconnectedMatch || // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              v.document && v.document.nodeType !== 11)
                return _;
            } catch {
              ye(w, !0);
            }
          return se(w, h, null, [v]).length > 0;
        }, se.contains = function(v, w) {
          return (v.ownerDocument || v) != h && ht(v), a.contains(v, w);
        }, se.attr = function(v, w) {
          (v.ownerDocument || v) != h && ht(v);
          var _ = t.attrHandle[w.toLowerCase()], E = _ && re.call(t.attrHandle, w.toLowerCase()) ? _(v, w, !m) : void 0;
          return E !== void 0 ? E : v.getAttribute(w);
        }, se.error = function(v) {
          throw new Error("Syntax error, unrecognized expression: " + v);
        }, a.uniqueSort = function(v) {
          var w, _ = [], E = 0, N = 0;
          if (o = !G.sortStable, u = !G.sortStable && g.call(v, 0), Wn.call(v, ge), o) {
            for (; w = v[N++]; )
              w === v[N] && (E = _.push(N));
            for (; E--; )
              fn.call(v, _[E], 1);
          }
          return u = null, v;
        }, a.fn.uniqueSort = function() {
          return this.pushStack(a.uniqueSort(g.apply(this)));
        }, t = a.expr = {
          // Can be adjusted by the user
          cacheLength: 50,
          createPseudo: Ve,
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
            ATTR: function(v) {
              return v[1] = v[1].replace(ut, at), v[3] = (v[3] || v[4] || v[5] || "").replace(ut, at), v[2] === "~=" && (v[3] = " " + v[3] + " "), v.slice(0, 4);
            },
            CHILD: function(v) {
              return v[1] = v[1].toLowerCase(), v[1].slice(0, 3) === "nth" ? (v[3] || se.error(v[0]), v[4] = +(v[4] ? v[5] + (v[6] || 1) : 2 * (v[3] === "even" || v[3] === "odd")), v[5] = +(v[7] + v[8] || v[3] === "odd")) : v[3] && se.error(v[0]), v;
            },
            PSEUDO: function(v) {
              var w, _ = !v[6] && v[2];
              return Qe.CHILD.test(v[0]) ? null : (v[3] ? v[2] = v[4] || v[5] || "" : _ && Xe.test(_) && // Get excess from tokenize (recursively)
              (w = Xt(_, !0)) && // advance to the next closing parenthesis
              (w = _.indexOf(")", _.length - w) - _.length) && (v[0] = v[0].slice(0, w), v[2] = _.slice(0, w)), v.slice(0, 3));
            }
          },
          filter: {
            TAG: function(v) {
              var w = v.replace(ut, at).toLowerCase();
              return v === "*" ? function() {
                return !0;
              } : function(_) {
                return oe(_, w);
              };
            },
            CLASS: function(v) {
              var w = J[v + " "];
              return w || (w = new RegExp("(^|" + ue + ")" + v + "(" + ue + "|$)")) && J(v, function(_) {
                return w.test(
                  typeof _.className == "string" && _.className || typeof _.getAttribute < "u" && _.getAttribute("class") || ""
                );
              });
            },
            ATTR: function(v, w, _) {
              return function(E) {
                var N = se.attr(E, v);
                return N == null ? w === "!=" : w ? (N += "", w === "=" ? N === _ : w === "!=" ? N !== _ : w === "^=" ? _ && N.indexOf(_) === 0 : w === "*=" ? _ && N.indexOf(_) > -1 : w === "$=" ? _ && N.slice(-_.length) === _ : w === "~=" ? (" " + N.replace(ne, " ") + " ").indexOf(_) > -1 : w === "|=" ? N === _ || N.slice(0, _.length + 1) === _ + "-" : !1) : !0;
              };
            },
            CHILD: function(v, w, _, E, N) {
              var P = v.slice(0, 3) !== "nth", q = v.slice(-4) !== "last", U = w === "of-type";
              return E === 1 && N === 0 ? (
                // Shortcut for :nth-*(n)
                function(R) {
                  return !!R.parentNode;
                }
              ) : function(R, Y, B) {
                var X, K, W, le, Se, be = P !== q ? "nextSibling" : "previousSibling", qe = R.parentNode, Ye = U && R.nodeName.toLowerCase(), Mt = !B && !U, Te = !1;
                if (qe) {
                  if (P) {
                    for (; be; ) {
                      for (W = R; W = W[be]; )
                        if (U ? oe(W, Ye) : W.nodeType === 1)
                          return !1;
                      Se = be = v === "only" && !Se && "nextSibling";
                    }
                    return !0;
                  }
                  if (Se = [q ? qe.firstChild : qe.lastChild], q && Mt) {
                    for (K = qe[H] || (qe[H] = {}), X = K[v] || [], le = X[0] === C && X[1], Te = le && X[2], W = le && qe.childNodes[le]; W = ++le && W && W[be] || // Fallback to seeking `elem` from the start
                    (Te = le = 0) || Se.pop(); )
                      if (W.nodeType === 1 && ++Te && W === R) {
                        K[v] = [C, le, Te];
                        break;
                      }
                  } else if (Mt && (K = R[H] || (R[H] = {}), X = K[v] || [], le = X[0] === C && X[1], Te = le), Te === !1)
                    for (; (W = ++le && W && W[be] || (Te = le = 0) || Se.pop()) && !((U ? oe(W, Ye) : W.nodeType === 1) && ++Te && (Mt && (K = W[H] || (W[H] = {}), K[v] = [C, Te]), W === R)); )
                      ;
                  return Te -= N, Te === E || Te % E === 0 && Te / E >= 0;
                }
              };
            },
            PSEUDO: function(v, w) {
              var _, E = t.pseudos[v] || t.setFilters[v.toLowerCase()] || se.error("unsupported pseudo: " + v);
              return E[H] ? E(w) : E.length > 1 ? (_ = [v, v, "", w], t.setFilters.hasOwnProperty(v.toLowerCase()) ? Ve(function(N, P) {
                for (var q, U = E(N, w), R = U.length; R--; )
                  q = I.call(N, U[R]), N[q] = !(P[q] = U[R]);
              }) : function(N) {
                return E(N, 0, _);
              }) : E;
            }
          },
          pseudos: {
            // Potentially complex pseudos
            not: Ve(function(v) {
              var w = [], _ = [], E = mr(v.replace(mt, "$1"));
              return E[H] ? Ve(function(N, P, q, U) {
                for (var R, Y = E(N, null, U, []), B = N.length; B--; )
                  (R = Y[B]) && (N[B] = !(P[B] = R));
              }) : function(N, P, q) {
                return w[0] = N, E(w, null, q, _), w[0] = null, !_.pop();
              };
            }),
            has: Ve(function(v) {
              return function(w) {
                return se(v, w).length > 0;
              };
            }),
            contains: Ve(function(v) {
              return v = v.replace(ut, at), function(w) {
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
            lang: Ve(function(v) {
              return Jt.test(v || "") || se.error("unsupported lang: " + v), v = v.replace(ut, at).toLowerCase(), function(w) {
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
              return v === vs() && h.hasFocus() && !!(v.type || v.href || ~v.tabIndex);
            },
            // Boolean properties
            enabled: Li(!1),
            disabled: Li(!0),
            checked: function(v) {
              return oe(v, "input") && !!v.checked || oe(v, "option") && !!v.selected;
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
              return ct.test(v.nodeName);
            },
            input: function(v) {
              return ft.test(v.nodeName);
            },
            button: function(v) {
              return oe(v, "input") && v.type === "button" || oe(v, "button");
            },
            text: function(v) {
              var w;
              return oe(v, "input") && v.type === "text" && // Support: IE <10 only
              // New HTML5 attribute values (e.g., "search") appear
              // with elem.type === "text"
              ((w = v.getAttribute("type")) == null || w.toLowerCase() === "text");
            },
            // Position-in-collection
            first: Ft(function() {
              return [0];
            }),
            last: Ft(function(v, w) {
              return [w - 1];
            }),
            eq: Ft(function(v, w, _) {
              return [_ < 0 ? _ + w : _];
            }),
            even: Ft(function(v, w) {
              for (var _ = 0; _ < w; _ += 2)
                v.push(_);
              return v;
            }),
            odd: Ft(function(v, w) {
              for (var _ = 1; _ < w; _ += 2)
                v.push(_);
              return v;
            }),
            lt: Ft(function(v, w, _) {
              var E;
              for (_ < 0 ? E = _ + w : _ > w ? E = w : E = _; --E >= 0; )
                v.push(E);
              return v;
            }),
            gt: Ft(function(v, w, _) {
              for (var E = _ < 0 ? _ + w : _; ++E < w; )
                v.push(E);
              return v;
            })
          }
        }, t.pseudos.nth = t.pseudos.eq;
        for (e in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
          t.pseudos[e] = ms(e);
        for (e in { submit: !0, reset: !0 })
          t.pseudos[e] = ys(e);
        function qi() {
        }
        qi.prototype = t.filters = t.pseudos, t.setFilters = new qi();
        function Xt(v, w) {
          var _, E, N, P, q, U, R, Y = te[v + " "];
          if (Y)
            return w ? 0 : Y.slice(0);
          for (q = v, U = [], R = t.preFilter; q; ) {
            (!_ || (E = ce.exec(q))) && (E && (q = q.slice(E[0].length) || q), U.push(N = [])), _ = !1, (E = zt.exec(q)) && (_ = E.shift(), N.push({
              value: _,
              // Cast descendant combinators to space
              type: E[0].replace(mt, " ")
            }), q = q.slice(_.length));
            for (P in t.filter)
              (E = Qe[P].exec(q)) && (!R[P] || (E = R[P](E))) && (_ = E.shift(), N.push({
                value: _,
                type: P,
                matches: E
              }), q = q.slice(_.length));
            if (!_)
              break;
          }
          return w ? q.length : q ? se.error(v) : (
            // Cache the tokens
            te(v, U).slice(0)
          );
        }
        function xn(v) {
          for (var w = 0, _ = v.length, E = ""; w < _; w++)
            E += v[w].value;
          return E;
        }
        function Tn(v, w, _) {
          var E = w.dir, N = w.next, P = N || E, q = _ && P === "parentNode", U = M++;
          return w.first ? (
            // Check against closest ancestor/preceding element
            function(R, Y, B) {
              for (; R = R[E]; )
                if (R.nodeType === 1 || q)
                  return v(R, Y, B);
              return !1;
            }
          ) : (
            // Check against all ancestor/preceding elements
            function(R, Y, B) {
              var X, K, W = [C, U];
              if (B) {
                for (; R = R[E]; )
                  if ((R.nodeType === 1 || q) && v(R, Y, B))
                    return !0;
              } else
                for (; R = R[E]; )
                  if (R.nodeType === 1 || q)
                    if (K = R[H] || (R[H] = {}), N && oe(R, N))
                      R = R[E] || R;
                    else {
                      if ((X = K[P]) && X[0] === C && X[1] === U)
                        return W[2] = X[2];
                      if (K[P] = W, W[2] = v(R, Y, B))
                        return !0;
                    }
              return !1;
            }
          );
        }
        function pr(v) {
          return v.length > 1 ? function(w, _, E) {
            for (var N = v.length; N--; )
              if (!v[N](w, _, E))
                return !1;
            return !0;
          } : v[0];
        }
        function bs(v, w, _) {
          for (var E = 0, N = w.length; E < N; E++)
            se(v, w[E], _);
          return _;
        }
        function _n(v, w, _, E, N) {
          for (var P, q = [], U = 0, R = v.length, Y = w != null; U < R; U++)
            (P = v[U]) && (!_ || _(P, E, N)) && (q.push(P), Y && w.push(U));
          return q;
        }
        function gr(v, w, _, E, N, P) {
          return E && !E[H] && (E = gr(E)), N && !N[H] && (N = gr(N, P)), Ve(function(q, U, R, Y) {
            var B, X, K, W, le = [], Se = [], be = U.length, qe = q || bs(
              w || "*",
              R.nodeType ? [R] : R,
              []
            ), Ye = v && (q || !w) ? _n(qe, le, v, R, Y) : qe;
            if (_ ? (W = N || (q ? v : be || E) ? (
              // ...intermediate processing is necessary
              []
            ) : (
              // ...otherwise use results directly
              U
            ), _(Ye, W, R, Y)) : W = Ye, E)
              for (B = _n(W, Se), E(B, [], R, Y), X = B.length; X--; )
                (K = B[X]) && (W[Se[X]] = !(Ye[Se[X]] = K));
            if (q) {
              if (N || v) {
                if (N) {
                  for (B = [], X = W.length; X--; )
                    (K = W[X]) && B.push(Ye[X] = K);
                  N(null, W = [], B, Y);
                }
                for (X = W.length; X--; )
                  (K = W[X]) && (B = N ? I.call(q, K) : le[X]) > -1 && (q[B] = !(U[B] = K));
              }
            } else
              W = _n(
                W === U ? W.splice(be, W.length) : W
              ), N ? N(null, U, W, Y) : l.apply(U, W);
          });
        }
        function vr(v) {
          for (var w, _, E, N = v.length, P = t.relative[v[0].type], q = P || t.relative[" "], U = P ? 1 : 0, R = Tn(function(X) {
            return X === w;
          }, q, !0), Y = Tn(function(X) {
            return I.call(w, X) > -1;
          }, q, !0), B = [function(X, K, W) {
            var le = !P && (W || K != r) || ((w = K).nodeType ? R(X, K, W) : Y(X, K, W));
            return w = null, le;
          }]; U < N; U++)
            if (_ = t.relative[v[U].type])
              B = [Tn(pr(B), _)];
            else {
              if (_ = t.filter[v[U].type].apply(null, v[U].matches), _[H]) {
                for (E = ++U; E < N && !t.relative[v[E].type]; E++)
                  ;
                return gr(
                  U > 1 && pr(B),
                  U > 1 && xn(
                    // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    v.slice(0, U - 1).concat({ value: v[U - 2].type === " " ? "*" : "" })
                  ).replace(mt, "$1"),
                  _,
                  U < E && vr(v.slice(U, E)),
                  E < N && vr(v = v.slice(E)),
                  E < N && xn(v)
                );
              }
              B.push(_);
            }
          return pr(B);
        }
        function ws(v, w) {
          var _ = w.length > 0, E = v.length > 0, N = function(P, q, U, R, Y) {
            var B, X, K, W = 0, le = "0", Se = P && [], be = [], qe = r, Ye = P || E && t.find.TAG("*", Y), Mt = C += qe == null ? 1 : Math.random() || 0.1, Te = Ye.length;
            for (Y && (r = q == h || q || Y); le !== Te && (B = Ye[le]) != null; le++) {
              if (E && B) {
                for (X = 0, !q && B.ownerDocument != h && (ht(B), U = !m); K = v[X++]; )
                  if (K(B, q || h, U)) {
                    l.call(R, B);
                    break;
                  }
                Y && (C = Mt);
              }
              _ && ((B = !K && B) && W--, P && Se.push(B));
            }
            if (W += le, _ && le !== W) {
              for (X = 0; K = w[X++]; )
                K(Se, be, q, U);
              if (P) {
                if (W > 0)
                  for (; le--; )
                    Se[le] || be[le] || (be[le] = ln.call(R));
                be = _n(be);
              }
              l.apply(R, be), Y && !P && be.length > 0 && W + w.length > 1 && a.uniqueSort(R);
            }
            return Y && (C = Mt, r = qe), Se;
          };
          return _ ? Ve(N) : N;
        }
        function mr(v, w) {
          var _, E = [], N = [], P = Q[v + " "];
          if (!P) {
            for (w || (w = Xt(v)), _ = w.length; _--; )
              P = vr(w[_]), P[H] ? E.push(P) : N.push(P);
            P = Q(
              v,
              ws(N, E)
            ), P.selector = v;
          }
          return P;
        }
        function Ri(v, w, _, E) {
          var N, P, q, U, R, Y = typeof v == "function" && v, B = !E && Xt(v = Y.selector || v);
          if (_ = _ || [], B.length === 1) {
            if (P = B[0] = B[0].slice(0), P.length > 2 && (q = P[0]).type === "ID" && w.nodeType === 9 && m && t.relative[P[1].type]) {
              if (w = (t.find.ID(
                q.matches[0].replace(ut, at),
                w
              ) || [])[0], w)
                Y && (w = w.parentNode);
              else
                return _;
              v = v.slice(P.shift().value.length);
            }
            for (N = Qe.needsContext.test(v) ? 0 : P.length; N-- && (q = P[N], !t.relative[U = q.type]); )
              if ((R = t.find[U]) && (E = R(
                q.matches[0].replace(ut, at),
                hr.test(P[0].type) && dr(w.parentNode) || w
              ))) {
                if (P.splice(N, 1), v = E.length && xn(P), !v)
                  return l.apply(_, E), _;
                break;
              }
          }
          return (Y || mr(v, B))(
            E,
            w,
            !m,
            _,
            !w || hr.test(v) && dr(w.parentNode) || w
          ), _;
        }
        G.sortStable = H.split("").sort(ge).join("") === H, ht(), G.sortDetached = Ot(function(v) {
          return v.compareDocumentPosition(h.createElement("fieldset")) & 1;
        }), a.find = se, a.expr[":"] = a.expr.pseudos, a.unique = a.uniqueSort, se.compile = mr, se.select = Ri, se.setDocument = ht, se.tokenize = Xt, se.escape = a.escapeSelector, se.getText = a.text, se.isXML = a.isXMLDoc, se.selectors = a.expr, se.support = a.support, se.uniqueSort = a.uniqueSort;
      })();
      var ot = function(e, t, r) {
        for (var u = [], o = r !== void 0; (e = e[t]) && e.nodeType !== 9; )
          if (e.nodeType === 1) {
            if (o && a(e).is(r))
              break;
            u.push(e);
          }
        return u;
      }, hn = function(e, t) {
        for (var r = []; e; e = e.nextSibling)
          e.nodeType === 1 && e !== t && r.push(e);
        return r;
      }, dn = a.expr.match.needsContext, kt = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function Ut(e, t, r) {
        return z(t) ? a.grep(e, function(u, o) {
          return !!t.call(u, o, u) !== r;
        }) : t.nodeType ? a.grep(e, function(u) {
          return u === t !== r;
        }) : typeof t != "string" ? a.grep(e, function(u) {
          return I.call(t, u) > -1 !== r;
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
          return this.pushStack(Ut(this, e || [], !1));
        },
        not: function(e) {
          return this.pushStack(Ut(this, e || [], !0));
        },
        is: function(e) {
          return !!Ut(
            this,
            // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof e == "string" && dn.test(e) ? a(e) : e || [],
            !1
          ).length;
        }
      });
      var pn, Gn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, Bn = a.fn.init = function(e, t, r) {
        var u, o;
        if (!e)
          return this;
        if (r = r || pn, typeof e == "string")
          if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3 ? u = [null, e, null] : u = Gn.exec(e), u && (u[1] || !t))
            if (u[1]) {
              if (t = t instanceof a ? t[0] : t, a.merge(this, a.parseHTML(
                u[1],
                t && t.nodeType ? t.ownerDocument || t : j,
                !0
              )), kt.test(u[1]) && a.isPlainObject(t))
                for (u in t)
                  z(this[u]) ? this[u](t[u]) : this.attr(u, t[u]);
              return this;
            } else
              return o = j.getElementById(u[2]), o && (this[0] = o, this.length = 1), this;
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
      Bn.prototype = a.fn, pn = a(j);
      var Ge = /^(?:parents|prev(?:Until|All))/, zn = {
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
          if (!dn.test(e)) {
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
          return e ? typeof e == "string" ? I.call(a(e), this[0]) : I.call(
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
      function gn(e, t) {
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
          return gn(e, "nextSibling");
        },
        prev: function(e) {
          return gn(e, "previousSibling");
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
          return hn((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
          return hn(e.firstChild);
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
          return e.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (o = a.filter(u, o)), this.length > 1 && (zn[e] || a.uniqueSort(o), Ge.test(e) && o.reverse()), this.pushStack(o);
        };
      });
      var Ie = /[^\x20\t\r\n\f]+/g;
      function Jn(e) {
        var t = {};
        return a.each(e.match(Ie) || [], function(r, u) {
          t[u] = !0;
        }), t;
      }
      a.Callbacks = function(e) {
        e = typeof e == "string" ? Jn(e) : a.extend({}, e);
        var t, r, u, o, l = [], h = [], b = -1, m = function() {
          for (o = o || e.once, u = t = !0; h.length; b = -1)
            for (r = h.shift(); ++b < l.length; )
              l[b].apply(r[0], r[1]) === !1 && e.stopOnFalse && (b = l.length, r = !1);
          e.memory || (r = !1), t = !1, o && (r ? l = [] : l = "");
        }, x = {
          // Add a callback or a collection of callbacks to the list
          add: function() {
            return l && (r && !t && (b = l.length - 1, h.push(r)), function S(H) {
              a.each(H, function(C, M) {
                z(M) ? (!e.unique || !x.has(M)) && l.push(M) : M && M.length && Ne(M) !== "string" && S(M);
              });
            }(arguments), r && !t && m()), this;
          },
          // Remove a callback from the list
          remove: function() {
            return a.each(arguments, function(S, H) {
              for (var C; (C = a.inArray(H, l, C)) > -1; )
                l.splice(C, 1), C <= b && b--;
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
                a.each(t, function(b, m) {
                  var x = z(l[m[4]]) && l[m[4]];
                  o[m[1]](function() {
                    var S = x && x.apply(this, arguments);
                    S && z(S.promise) ? S.promise().progress(h.notify).done(h.resolve).fail(h.reject) : h[m[0] + "With"](
                      this,
                      x ? [S] : arguments
                    );
                  });
                }), l = null;
              }).promise();
            },
            then: function(l, h, b) {
              var m = 0;
              function x(S, H, C, M) {
                return function() {
                  var J = this, te = arguments, Q = function() {
                    var ge, ze;
                    if (!(S < m)) {
                      if (ge = C.apply(J, te), ge === H.promise())
                        throw new TypeError("Thenable self-resolution");
                      ze = ge && // Support: Promises/A+ section 2.3.4
                      // https://promisesaplus.com/#point-64
                      // Only check objects and functions for thenability
                      (typeof ge == "object" || typeof ge == "function") && ge.then, z(ze) ? M ? ze.call(
                        ge,
                        x(m, H, tt, M),
                        x(m, H, nt, M)
                      ) : (m++, ze.call(
                        ge,
                        x(m, H, tt, M),
                        x(m, H, nt, M),
                        x(
                          m,
                          H,
                          tt,
                          H.notifyWith
                        )
                      )) : (C !== tt && (J = void 0, te = [ge]), (M || H.resolveWith)(J, te));
                    }
                  }, ye = M ? Q : function() {
                    try {
                      Q();
                    } catch (ge) {
                      a.Deferred.exceptionHook && a.Deferred.exceptionHook(
                        ge,
                        ye.error
                      ), S + 1 >= m && (C !== nt && (J = void 0, te = [ge]), H.rejectWith(J, te));
                    }
                  };
                  S ? ye() : (a.Deferred.getErrorHook ? ye.error = a.Deferred.getErrorHook() : a.Deferred.getStackHook && (ye.error = a.Deferred.getStackHook()), n.setTimeout(ye));
                };
              }
              return a.Deferred(function(S) {
                t[0][3].add(
                  x(
                    0,
                    S,
                    z(b) ? b : tt,
                    S.notifyWith
                  )
                ), t[1][3].add(
                  x(
                    0,
                    S,
                    z(l) ? l : tt
                  )
                ), t[2][3].add(
                  x(
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
          (e === !0 ? --a.readyWait : a.isReady) || (a.isReady = !0, !(e !== !0 && --a.readyWait > 0) && y.resolveWith(j, [a]));
        }
      }), a.ready.then = y.then;
      function T() {
        j.removeEventListener("DOMContentLoaded", T), n.removeEventListener("load", T), a.ready();
      }
      j.readyState === "complete" || j.readyState !== "loading" && !j.documentElement.doScroll ? n.setTimeout(a.ready) : (j.addEventListener("DOMContentLoaded", T), n.addEventListener("load", T));
      var D = function(e, t, r, u, o, l, h) {
        var b = 0, m = e.length, x = r == null;
        if (Ne(r) === "object") {
          o = !0;
          for (b in r)
            D(e, t, b, r[b], !0, l, h);
        } else if (u !== void 0 && (o = !0, z(u) || (h = !0), x && (h ? (t.call(e, u), t = null) : (x = t, t = function(S, H, C) {
          return x.call(a(S), C);
        })), t))
          for (; b < m; b++)
            t(
              e[b],
              r,
              h ? u : u.call(e[b], b, t(e[b], r))
            );
        return o ? e : x ? t.call(e) : m ? t(e[0], r) : l;
      }, O = /^-ms-/, k = /-([a-z])/g;
      function Z(e, t) {
        return t.toUpperCase();
      }
      function ie(e) {
        return e.replace(O, "ms-").replace(k, Z);
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
              for (Array.isArray(t) ? t = t.map(ie) : (t = ie(t), t = t in u ? [t] : t.match(Ie) || []), r = t.length; r--; )
                delete u[t[r]];
            (t === void 0 || a.isEmptyObject(u)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
          }
        },
        hasData: function(e) {
          var t = e[this.expando];
          return t !== void 0 && !a.isEmptyObject(t);
        }
      };
      var L = new he(), fe = new he(), Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Xn = /[A-Z]/g;
      function de(e) {
        return e === "true" ? !0 : e === "false" ? !1 : e === "null" ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e;
      }
      function me(e, t, r) {
        var u;
        if (r === void 0 && e.nodeType === 1)
          if (u = "data-" + t.replace(Xn, "-$&").toLowerCase(), r = e.getAttribute(u), typeof r == "string") {
            try {
              r = de(r);
            } catch {
            }
            fe.set(e, t, r);
          } else
            r = void 0;
        return r;
      }
      a.extend({
        hasData: function(e) {
          return fe.hasData(e) || L.hasData(e);
        },
        data: function(e, t, r) {
          return fe.access(e, t, r);
        },
        removeData: function(e, t) {
          fe.remove(e, t);
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
            if (this.length && (o = fe.get(l), l.nodeType === 1 && !L.get(l, "hasDataAttrs"))) {
              for (r = h.length; r--; )
                h[r] && (u = h[r].name, u.indexOf("data-") === 0 && (u = ie(u.slice(5)), me(l, u, o[u])));
              L.set(l, "hasDataAttrs", !0);
            }
            return o;
          }
          return typeof e == "object" ? this.each(function() {
            fe.set(this, e);
          }) : D(this, function(b) {
            var m;
            if (l && b === void 0)
              return m = fe.get(l, e), m !== void 0 || (m = me(l, e), m !== void 0) ? m : void 0;
            this.each(function() {
              fe.set(this, e, b);
            });
          }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
          return this.each(function() {
            fe.remove(this, e);
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
          var r, u = 1, o = a.Deferred(), l = this, h = this.length, b = function() {
            --u || o.resolveWith(l, [l]);
          };
          for (typeof e != "string" && (t = e, e = void 0), e = e || "fx"; h--; )
            r = L.get(l[h], e + "queueHooks"), r && r.empty && (u++, r.empty.add(b));
          return b(), o.promise(t);
        }
      });
      var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, rt = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"), Pe = ["Top", "Right", "Bottom", "Left"], it = j.documentElement, lt = function(e) {
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
      function oi(e, t, r, u) {
        var o, l, h = 20, b = u ? function() {
          return u.cur();
        } : function() {
          return a.css(e, t, "");
        }, m = b(), x = r && r[3] || (a.cssNumber[t] ? "" : "px"), S = e.nodeType && (a.cssNumber[t] || x !== "px" && +m) && rt.exec(a.css(e, t));
        if (S && S[3] !== x) {
          for (m = m / 2, x = x || S[3], S = +m || 1; h--; )
            a.style(e, t, S + x), (1 - l) * (1 - (l = b() / m || 0.5)) <= 0 && (h = 0), S = S / l;
          S = S * 2, a.style(e, t, S + x), r = r || [];
        }
        return r && (S = +S || +m || 0, o = r[1] ? S + (r[1] + 1) * r[2] : +r[2], u && (u.unit = x, u.start = S, u.end = o)), o;
      }
      var li = {};
      function Ma(e) {
        var t, r = e.ownerDocument, u = e.nodeName, o = li[u];
        return o || (t = r.body.appendChild(r.createElement(u)), o = a.css(t, "display"), t.parentNode.removeChild(t), o === "none" && (o = "block"), li[u] = o, o);
      }
      function St(e, t) {
        for (var r, u, o = [], l = 0, h = e.length; l < h; l++)
          u = e[l], u.style && (r = u.style.display, t ? (r === "none" && (o[l] = L.get(u, "display") || null, o[l] || (u.style.display = "")), u.style.display === "" && vn(u) && (o[l] = Ma(u))) : r !== "none" && (o[l] = "none", L.set(u, "display", r)));
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
      var Vt = /^(?:checkbox|radio)$/i, fi = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, ci = /^$|^module$|\/(?:java|ecma)script/i;
      (function() {
        var e = j.createDocumentFragment(), t = e.appendChild(j.createElement("div")), r = j.createElement("input");
        r.setAttribute("type", "radio"), r.setAttribute("checked", "checked"), r.setAttribute("name", "t"), t.appendChild(r), G.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", G.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", G.option = !!t.lastChild;
      })();
      var $e = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
      $e.tbody = $e.tfoot = $e.colgroup = $e.caption = $e.thead, $e.th = $e.td, G.option || ($e.optgroup = $e.option = [1, "<select multiple='multiple'>", "</select>"]);
      function Ce(e, t) {
        var r;
        return typeof e.getElementsByTagName < "u" ? r = e.getElementsByTagName(t || "*") : typeof e.querySelectorAll < "u" ? r = e.querySelectorAll(t || "*") : r = [], t === void 0 || t && oe(e, t) ? a.merge([e], r) : r;
      }
      function Yn(e, t) {
        for (var r = 0, u = e.length; r < u; r++)
          L.set(
            e[r],
            "globalEval",
            !t || L.get(t[r], "globalEval")
          );
      }
      var Ia = /<|&#?\w+;/;
      function hi(e, t, r, u, o) {
        for (var l, h, b, m, x, S, H = t.createDocumentFragment(), C = [], M = 0, J = e.length; M < J; M++)
          if (l = e[M], l || l === 0)
            if (Ne(l) === "object")
              a.merge(C, l.nodeType ? [l] : l);
            else if (!Ia.test(l))
              C.push(t.createTextNode(l));
            else {
              for (h = h || H.appendChild(t.createElement("div")), b = (fi.exec(l) || ["", ""])[1].toLowerCase(), m = $e[b] || $e._default, h.innerHTML = m[1] + a.htmlPrefilter(l) + m[2], S = m[0]; S--; )
                h = h.lastChild;
              a.merge(C, h.childNodes), h = H.firstChild, h.textContent = "";
            }
        for (H.textContent = "", M = 0; l = C[M++]; ) {
          if (u && a.inArray(l, u) > -1) {
            o && o.push(l);
            continue;
          }
          if (x = lt(l), h = Ce(H.appendChild(l), "script"), x && Yn(h), r)
            for (S = 0; l = h[S++]; )
              ci.test(l.type || "") && r.push(l);
        }
        return H;
      }
      var di = /^([^.]*)(?:\.(.+)|)/;
      function At() {
        return !0;
      }
      function Dt() {
        return !1;
      }
      function Kn(e, t, r, u, o, l) {
        var h, b;
        if (typeof t == "object") {
          typeof r != "string" && (u = u || r, r = void 0);
          for (b in t)
            Kn(e, b, r, u, t[b], l);
          return e;
        }
        if (u == null && o == null ? (o = r, u = r = void 0) : o == null && (typeof r == "string" ? (o = u, u = void 0) : (o = u, u = r, r = void 0)), o === !1)
          o = Dt;
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
          var l, h, b, m, x, S, H, C, M, J, te, Q = L.get(e);
          if (pe(e))
            for (r.handler && (l = r, r = l.handler, o = l.selector), o && a.find.matchesSelector(it, o), r.guid || (r.guid = a.guid++), (m = Q.events) || (m = Q.events = /* @__PURE__ */ Object.create(null)), (h = Q.handle) || (h = Q.handle = function(ye) {
              return typeof a < "u" && a.event.triggered !== ye.type ? a.event.dispatch.apply(e, arguments) : void 0;
            }), t = (t || "").match(Ie) || [""], x = t.length; x--; )
              b = di.exec(t[x]) || [], M = te = b[1], J = (b[2] || "").split(".").sort(), M && (H = a.event.special[M] || {}, M = (o ? H.delegateType : H.bindType) || M, H = a.event.special[M] || {}, S = a.extend({
                type: M,
                origType: te,
                data: u,
                handler: r,
                guid: r.guid,
                selector: o,
                needsContext: o && a.expr.match.needsContext.test(o),
                namespace: J.join(".")
              }, l), (C = m[M]) || (C = m[M] = [], C.delegateCount = 0, (!H.setup || H.setup.call(e, u, J, h) === !1) && e.addEventListener && e.addEventListener(M, h)), H.add && (H.add.call(e, S), S.handler.guid || (S.handler.guid = r.guid)), o ? C.splice(C.delegateCount++, 0, S) : C.push(S), a.event.global[M] = !0);
        },
        // Detach an event or set of events from an element
        remove: function(e, t, r, u, o) {
          var l, h, b, m, x, S, H, C, M, J, te, Q = L.hasData(e) && L.get(e);
          if (!(!Q || !(m = Q.events))) {
            for (t = (t || "").match(Ie) || [""], x = t.length; x--; ) {
              if (b = di.exec(t[x]) || [], M = te = b[1], J = (b[2] || "").split(".").sort(), !M) {
                for (M in m)
                  a.event.remove(e, M + t[x], r, u, !0);
                continue;
              }
              for (H = a.event.special[M] || {}, M = (u ? H.delegateType : H.bindType) || M, C = m[M] || [], b = b[2] && new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)"), h = l = C.length; l--; )
                S = C[l], (o || te === S.origType) && (!r || r.guid === S.guid) && (!b || b.test(S.namespace)) && (!u || u === S.selector || u === "**" && S.selector) && (C.splice(l, 1), S.selector && C.delegateCount--, H.remove && H.remove.call(e, S));
              h && !C.length && ((!H.teardown || H.teardown.call(e, J, Q.handle) === !1) && a.removeEvent(e, M, Q.handle), delete m[M]);
            }
            a.isEmptyObject(m) && L.remove(e, "handle events");
          }
        },
        dispatch: function(e) {
          var t, r, u, o, l, h, b = new Array(arguments.length), m = a.event.fix(e), x = (L.get(this, "events") || /* @__PURE__ */ Object.create(null))[m.type] || [], S = a.event.special[m.type] || {};
          for (b[0] = m, t = 1; t < arguments.length; t++)
            b[t] = arguments[t];
          if (m.delegateTarget = this, !(S.preDispatch && S.preDispatch.call(this, m) === !1)) {
            for (h = a.event.handlers.call(this, m, x), t = 0; (o = h[t++]) && !m.isPropagationStopped(); )
              for (m.currentTarget = o.elem, r = 0; (l = o.handlers[r++]) && !m.isImmediatePropagationStopped(); )
                (!m.rnamespace || l.namespace === !1 || m.rnamespace.test(l.namespace)) && (m.handleObj = l, m.data = l.data, u = ((a.event.special[l.origType] || {}).handle || l.handler).apply(o.elem, b), u !== void 0 && (m.result = u) === !1 && (m.preventDefault(), m.stopPropagation()));
            return S.postDispatch && S.postDispatch.call(this, m), m.result;
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
              return Vt.test(t.type) && t.click && oe(t, "input") && mn(t, "click", !0), !1;
            },
            trigger: function(e) {
              var t = this || e;
              return Vt.test(t.type) && t.click && oe(t, "input") && mn(t, "click"), !0;
            },
            // For cross-browser consistency, suppress native .click() on links
            // Also prevent it if we're currently inside a leveraged native-event stack
            _default: function(e) {
              var t = e.target;
              return Vt.test(t.type) && t.click && oe(t, "input") && L.get(t, "click") || oe(t, "a");
            }
          },
          beforeunload: {
            postDispatch: function(e) {
              e.result !== void 0 && e.originalEvent && (e.originalEvent.returnValue = e.result);
            }
          }
        }
      };
      function mn(e, t, r) {
        if (!r) {
          L.get(e, t) === void 0 && a.event.add(e, t, At);
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
        e.returnValue === !1 ? At : Dt, this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && a.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[a.expando] = !0;
      }, a.Event.prototype = {
        constructor: a.Event,
        isDefaultPrevented: Dt,
        isPropagationStopped: Dt,
        isImmediatePropagationStopped: Dt,
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
          if (j.documentMode) {
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
            if (mn(this, e, !0), j.documentMode)
              u = L.get(this, t), u || this.addEventListener(t, r), L.set(this, t, (u || 0) + 1);
            else
              return !1;
          },
          trigger: function() {
            return mn(this, e), !0;
          },
          teardown: function() {
            var u;
            if (j.documentMode)
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
            var u = this.ownerDocument || this.document || this, o = j.documentMode ? this : u, l = L.get(o, t);
            l || (j.documentMode ? this.addEventListener(t, r) : u.addEventListener(e, r, !0)), L.set(o, t, (l || 0) + 1);
          },
          teardown: function() {
            var u = this.ownerDocument || this.document || this, o = j.documentMode ? this : u, l = L.get(o, t) - 1;
            l ? L.set(o, t, l) : (j.documentMode ? this.removeEventListener(t, r) : u.removeEventListener(e, r, !0), L.remove(o, t));
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
          return (t === !1 || typeof t == "function") && (r = t, t = void 0), r === !1 && (r = Dt), this.each(function() {
            a.event.remove(this, e, r, t);
          });
        }
      });
      var Pa = /<script|<style|<link/i, $a = /checked\s*(?:[^=]|=\s*.checked.)/i, La = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
      function pi(e, t) {
        return oe(e, "table") && oe(t.nodeType !== 11 ? t : t.firstChild, "tr") && a(e).children("tbody")[0] || e;
      }
      function qa(e) {
        return e.type = (e.getAttribute("type") !== null) + "/" + e.type, e;
      }
      function Ra(e) {
        return (e.type || "").slice(0, 5) === "true/" ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
      }
      function gi(e, t) {
        var r, u, o, l, h, b, m;
        if (t.nodeType === 1) {
          if (L.hasData(e) && (l = L.get(e), m = l.events, m)) {
            L.remove(t, "handle events");
            for (o in m)
              for (r = 0, u = m[o].length; r < u; r++)
                a.event.add(t, o, m[o][r]);
          }
          fe.hasData(e) && (h = fe.access(e), b = a.extend({}, h), fe.set(t, b));
        }
      }
      function ka(e, t) {
        var r = t.nodeName.toLowerCase();
        r === "input" && Vt.test(e.type) ? t.checked = e.checked : (r === "input" || r === "textarea") && (t.defaultValue = e.defaultValue);
      }
      function Nt(e, t, r, u) {
        t = F(t);
        var o, l, h, b, m, x, S = 0, H = e.length, C = H - 1, M = t[0], J = z(M);
        if (J || H > 1 && typeof M == "string" && !G.checkClone && $a.test(M))
          return e.each(function(te) {
            var Q = e.eq(te);
            J && (t[0] = M.call(this, te, Q.html())), Nt(Q, t, r, u);
          });
        if (H && (o = hi(t, e[0].ownerDocument, !1, e, u), l = o.firstChild, o.childNodes.length === 1 && (o = l), l || u)) {
          for (h = a.map(Ce(o, "script"), qa), b = h.length; S < H; S++)
            m = o, S !== C && (m = a.clone(m, !0, !0), b && a.merge(h, Ce(m, "script"))), r.call(e[S], m, S);
          if (b)
            for (x = h[h.length - 1].ownerDocument, a.map(h, Ra), S = 0; S < b; S++)
              m = h[S], ci.test(m.type || "") && !L.access(m, "globalEval") && a.contains(x, m) && (m.src && (m.type || "").toLowerCase() !== "module" ? a._evalUrl && !m.noModule && a._evalUrl(m.src, {
                nonce: m.nonce || m.getAttribute("nonce")
              }, x) : je(m.textContent.replace(La, ""), m, x));
        }
        return e;
      }
      function vi(e, t, r) {
        for (var u, o = t ? a.filter(t, e) : e, l = 0; (u = o[l]) != null; l++)
          !r && u.nodeType === 1 && a.cleanData(Ce(u)), u.parentNode && (r && lt(u) && Yn(Ce(u, "script")), u.parentNode.removeChild(u));
        return e;
      }
      a.extend({
        htmlPrefilter: function(e) {
          return e;
        },
        clone: function(e, t, r) {
          var u, o, l, h, b = e.cloneNode(!0), m = lt(e);
          if (!G.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !a.isXMLDoc(e))
            for (h = Ce(b), l = Ce(e), u = 0, o = l.length; u < o; u++)
              ka(l[u], h[u]);
          if (t)
            if (r)
              for (l = l || Ce(e), h = h || Ce(b), u = 0, o = l.length; u < o; u++)
                gi(l[u], h[u]);
            else
              gi(e, b);
          return h = Ce(b, "script"), h.length > 0 && Yn(h, !m && Ce(e, "script")), b;
        },
        cleanData: function(e) {
          for (var t, r, u, o = a.event.special, l = 0; (r = e[l]) !== void 0; l++)
            if (pe(r)) {
              if (t = r[L.expando]) {
                if (t.events)
                  for (u in t.events)
                    o[u] ? a.event.remove(r, u) : a.removeEvent(r, u, t.handle);
                r[L.expando] = void 0;
              }
              r[fe.expando] && (r[fe.expando] = void 0);
            }
        }
      }), a.fn.extend({
        detach: function(e) {
          return vi(this, e, !0);
        },
        remove: function(e) {
          return vi(this, e);
        },
        text: function(e) {
          return D(this, function(t) {
            return t === void 0 ? a.text(this) : this.empty().each(function() {
              (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = t);
            });
          }, null, e, arguments.length);
        },
        append: function() {
          return Nt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = pi(this, e);
              t.appendChild(e);
            }
          });
        },
        prepend: function() {
          return Nt(this, arguments, function(e) {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              var t = pi(this, e);
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
          return D(this, function(t) {
            var r = this[0] || {}, u = 0, o = this.length;
            if (t === void 0 && r.nodeType === 1)
              return r.innerHTML;
            if (typeof t == "string" && !Pa.test(t) && !$e[(fi.exec(t) || ["", ""])[1].toLowerCase()]) {
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
          for (var u, o = [], l = a(r), h = l.length - 1, b = 0; b <= h; b++)
            u = b === h ? this : this.clone(!0), a(l[b])[t](u), A.apply(o, u.get());
          return this.pushStack(o);
        };
      });
      var Zn = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"), er = /^--/, yn = function(e) {
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
      }, Ua = new RegExp(Pe.join("|"), "i");
      (function() {
        function e() {
          if (x) {
            m.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", x.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", it.appendChild(m).appendChild(x);
            var S = n.getComputedStyle(x);
            r = S.top !== "1%", b = t(S.marginLeft) === 12, x.style.right = "60%", l = t(S.right) === 36, u = t(S.width) === 36, x.style.position = "absolute", o = t(x.offsetWidth / 3) === 12, it.removeChild(m), x = null;
          }
        }
        function t(S) {
          return Math.round(parseFloat(S));
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
            var S, H, C, M;
            return h == null && (S = j.createElement("table"), H = j.createElement("tr"), C = j.createElement("div"), S.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", H.style.cssText = "box-sizing:content-box;border:1px solid", H.style.height = "1px", C.style.height = "9px", C.style.display = "block", it.appendChild(S).appendChild(H).appendChild(C), M = n.getComputedStyle(H), h = parseInt(M.height, 10) + parseInt(M.borderTopWidth, 10) + parseInt(M.borderBottomWidth, 10) === H.offsetHeight, it.removeChild(S)), h;
          }
        }));
      })();
      function Wt(e, t, r) {
        var u, o, l, h, b = er.test(t), m = e.style;
        return r = r || yn(e), r && (h = r.getPropertyValue(t) || r[t], b && h && (h = h.replace(mt, "$1") || void 0), h === "" && !lt(e) && (h = a.style(e, t)), !G.pixelBoxStyles() && Zn.test(h) && Ua.test(t) && (u = m.width, o = m.minWidth, l = m.maxWidth, m.minWidth = m.maxWidth = m.width = h, h = r.width, m.width = u, m.minWidth = o, m.maxWidth = l)), h !== void 0 ? (
          // Support: IE <=9 - 11 only
          // IE returns zIndex value as an integer.
          h + ""
        ) : h;
      }
      function yi(e, t) {
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
      var bi = ["Webkit", "Moz", "ms"], wi = j.createElement("div").style, Fi = {};
      function Va(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), r = bi.length; r--; )
          if (e = bi[r] + t, e in wi)
            return e;
      }
      function tr(e) {
        var t = a.cssProps[e] || Fi[e];
        return t || (e in wi ? e : Fi[e] = Va(e) || e);
      }
      var Wa = /^(none|table(?!-c[ea]).+)/, ja = { position: "absolute", visibility: "hidden", display: "block" }, xi = {
        letterSpacing: "0",
        fontWeight: "400"
      };
      function Ti(e, t, r) {
        var u = rt.exec(t);
        return u ? (
          // Guard against undefined "subtract", e.g., when used as in cssHooks
          Math.max(0, u[2] - (r || 0)) + (u[3] || "px")
        ) : t;
      }
      function nr(e, t, r, u, o, l) {
        var h = t === "width" ? 1 : 0, b = 0, m = 0, x = 0;
        if (r === (u ? "border" : "content"))
          return 0;
        for (; h < 4; h += 2)
          r === "margin" && (x += a.css(e, r + Pe[h], !0, o)), u ? (r === "content" && (m -= a.css(e, "padding" + Pe[h], !0, o)), r !== "margin" && (m -= a.css(e, "border" + Pe[h] + "Width", !0, o))) : (m += a.css(e, "padding" + Pe[h], !0, o), r !== "padding" ? m += a.css(e, "border" + Pe[h] + "Width", !0, o) : b += a.css(e, "border" + Pe[h] + "Width", !0, o));
        return !u && l >= 0 && (m += Math.max(0, Math.ceil(
          e["offset" + t[0].toUpperCase() + t.slice(1)] - l - m - b - 0.5
          // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
          // Use an explicit zero to avoid NaN (gh-3964)
        )) || 0), m + x;
      }
      function _i(e, t, r) {
        var u = yn(e), o = !G.boxSizingReliable() || r, l = o && a.css(e, "boxSizing", !1, u) === "border-box", h = l, b = Wt(e, t, u), m = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Zn.test(b)) {
          if (!r)
            return b;
          b = "auto";
        }
        return (!G.boxSizingReliable() && l || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !G.reliableTrDimensions() && oe(e, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        b === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(b) && a.css(e, "display", !1, u) === "inline") && // Make sure the element is visible & connected
        e.getClientRects().length && (l = a.css(e, "boxSizing", !1, u) === "border-box", h = m in e, h && (b = e[m])), b = parseFloat(b) || 0, b + nr(
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
                var r = Wt(e, "opacity");
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
            var o, l, h, b = ie(t), m = er.test(t), x = e.style;
            if (m || (t = tr(b)), h = a.cssHooks[t] || a.cssHooks[b], r !== void 0) {
              if (l = typeof r, l === "string" && (o = rt.exec(r)) && o[1] && (r = oi(e, t, o), l = "number"), r == null || r !== r)
                return;
              l === "number" && !m && (r += o && o[3] || (a.cssNumber[b] ? "" : "px")), !G.clearCloneStyle && r === "" && t.indexOf("background") === 0 && (x[t] = "inherit"), (!h || !("set" in h) || (r = h.set(e, r, u)) !== void 0) && (m ? x.setProperty(t, r) : x[t] = r);
            } else
              return h && "get" in h && (o = h.get(e, !1, u)) !== void 0 ? o : x[t];
          }
        },
        css: function(e, t, r, u) {
          var o, l, h, b = ie(t), m = er.test(t);
          return m || (t = tr(b)), h = a.cssHooks[t] || a.cssHooks[b], h && "get" in h && (o = h.get(e, !0, r)), o === void 0 && (o = Wt(e, t, u)), o === "normal" && t in xi && (o = xi[t]), r === "" || r ? (l = parseFloat(o), r === !0 || isFinite(l) ? l || 0 : o) : o;
        }
      }), a.each(["height", "width"], function(e, t) {
        a.cssHooks[t] = {
          get: function(r, u, o) {
            if (u)
              return Wa.test(a.css(r, "display")) && // Support: Safari 8+
              // Table columns in Safari have non-zero offsetWidth & zero
              // getBoundingClientRect().width unless display is changed.
              // Support: IE <=11 only
              // Running getBoundingClientRect on a disconnected node
              // in IE throws an error.
              (!r.getClientRects().length || !r.getBoundingClientRect().width) ? mi(r, ja, function() {
                return _i(r, t, o);
              }) : _i(r, t, o);
          },
          set: function(r, u, o) {
            var l, h = yn(r), b = !G.scrollboxSize() && h.position === "absolute", m = b || o, x = m && a.css(r, "boxSizing", !1, h) === "border-box", S = o ? nr(
              r,
              t,
              o,
              x,
              h
            ) : 0;
            return x && b && (S -= Math.ceil(
              r["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(h[t]) - nr(r, t, "border", !1, h) - 0.5
            )), S && (l = rt.exec(u)) && (l[3] || "px") !== "px" && (r.style[t] = u, u = a.css(r, t)), Ti(r, u, S);
          }
        };
      }), a.cssHooks.marginLeft = yi(
        G.reliableMarginLeft,
        function(e, t) {
          if (t)
            return (parseFloat(Wt(e, "marginLeft")) || e.getBoundingClientRect().left - mi(e, { marginLeft: 0 }, function() {
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
              o[e + Pe[u] + t] = l[u] || l[u - 2] || l[0];
            return o;
          }
        }, e !== "margin" && (a.cssHooks[e + t].set = Ti);
      }), a.fn.extend({
        css: function(e, t) {
          return D(this, function(r, u, o) {
            var l, h, b = {}, m = 0;
            if (Array.isArray(u)) {
              for (l = yn(r), h = u.length; m < h; m++)
                b[u[m]] = a.css(r, u[m], !1, l);
              return b;
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
      var Ht, bn, Ga = /^(?:toggle|show|hide)$/, Ba = /queueHooks$/;
      function rr() {
        bn && (j.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(rr) : n.setTimeout(rr, a.fx.interval), a.fx.tick());
      }
      function Ci() {
        return n.setTimeout(function() {
          Ht = void 0;
        }), Ht = Date.now();
      }
      function wn(e, t) {
        var r, u = 0, o = { height: e };
        for (t = t ? 1 : 0; u < 4; u += 2 - t)
          r = Pe[u], o["margin" + r] = o["padding" + r] = e;
        return t && (o.opacity = o.width = e), o;
      }
      function Ei(e, t, r) {
        for (var u, o = (Ue.tweeners[t] || []).concat(Ue.tweeners["*"]), l = 0, h = o.length; l < h; l++)
          if (u = o[l].call(r, t, e))
            return u;
      }
      function za(e, t, r) {
        var u, o, l, h, b, m, x, S, H = "width" in t || "height" in t, C = this, M = {}, J = e.style, te = e.nodeType && vn(e), Q = L.get(e, "fxshow");
        r.queue || (h = a._queueHooks(e, "fx"), h.unqueued == null && (h.unqueued = 0, b = h.empty.fire, h.empty.fire = function() {
          h.unqueued || b();
        }), h.unqueued++, C.always(function() {
          C.always(function() {
            h.unqueued--, a.queue(e, "fx").length || h.empty.fire();
          });
        }));
        for (u in t)
          if (o = t[u], Ga.test(o)) {
            if (delete t[u], l = l || o === "toggle", o === (te ? "hide" : "show"))
              if (o === "show" && Q && Q[u] !== void 0)
                te = !0;
              else
                continue;
            M[u] = Q && Q[u] || a.style(e, u);
          }
        if (m = !a.isEmptyObject(t), !(!m && a.isEmptyObject(M))) {
          H && e.nodeType === 1 && (r.overflow = [J.overflow, J.overflowX, J.overflowY], x = Q && Q.display, x == null && (x = L.get(e, "display")), S = a.css(e, "display"), S === "none" && (x ? S = x : (St([e], !0), x = e.style.display || x, S = a.css(e, "display"), St([e]))), (S === "inline" || S === "inline-block" && x != null) && a.css(e, "float") === "none" && (m || (C.done(function() {
            J.display = x;
          }), x == null && (S = J.display, x = S === "none" ? "" : S)), J.display = "inline-block")), r.overflow && (J.overflow = "hidden", C.always(function() {
            J.overflow = r.overflow[0], J.overflowX = r.overflow[1], J.overflowY = r.overflow[2];
          })), m = !1;
          for (u in M)
            m || (Q ? "hidden" in Q && (te = Q.hidden) : Q = L.access(e, "fxshow", { display: x }), l && (Q.hidden = !te), te && St([e], !0), C.done(function() {
              te || St([e]), L.remove(e, "fxshow");
              for (u in M)
                a.style(e, u, M[u]);
            })), m = Ei(te ? Q[u] : 0, u, C), u in Q || (Q[u] = m.start, te && (m.end = m.start, m.start = 0));
        }
      }
      function Ja(e, t) {
        var r, u, o, l, h;
        for (r in e)
          if (u = ie(r), o = t[u], l = e[r], Array.isArray(l) && (o = l[1], l = e[r] = l[0]), r !== u && (e[u] = l, delete e[r]), h = a.cssHooks[u], h && "expand" in h) {
            l = h.expand(l), delete e[u];
            for (r in l)
              r in e || (e[r] = l[r], t[r] = o);
          } else
            t[u] = o;
      }
      function Ue(e, t, r) {
        var u, o, l = 0, h = Ue.prefilters.length, b = a.Deferred().always(function() {
          delete m.elem;
        }), m = function() {
          if (o)
            return !1;
          for (var H = Ht || Ci(), C = Math.max(0, x.startTime + x.duration - H), M = C / x.duration || 0, J = 1 - M, te = 0, Q = x.tweens.length; te < Q; te++)
            x.tweens[te].run(J);
          return b.notifyWith(e, [x, J, C]), J < 1 && Q ? C : (Q || b.notifyWith(e, [x, 1, 0]), b.resolveWith(e, [x]), !1);
        }, x = b.promise({
          elem: e,
          props: a.extend({}, t),
          opts: a.extend(!0, {
            specialEasing: {},
            easing: a.easing._default
          }, r),
          originalProperties: t,
          originalOptions: r,
          startTime: Ht || Ci(),
          duration: r.duration,
          tweens: [],
          createTween: function(H, C) {
            var M = a.Tween(
              e,
              x.opts,
              H,
              C,
              x.opts.specialEasing[H] || x.opts.easing
            );
            return x.tweens.push(M), M;
          },
          stop: function(H) {
            var C = 0, M = H ? x.tweens.length : 0;
            if (o)
              return this;
            for (o = !0; C < M; C++)
              x.tweens[C].run(1);
            return H ? (b.notifyWith(e, [x, 1, 0]), b.resolveWith(e, [x, H])) : b.rejectWith(e, [x, H]), this;
          }
        }), S = x.props;
        for (Ja(S, x.opts.specialEasing); l < h; l++)
          if (u = Ue.prefilters[l].call(x, e, S, x.opts), u)
            return z(u.stop) && (a._queueHooks(x.elem, x.opts.queue).stop = u.stop.bind(u)), u;
        return a.map(S, Ei, x), z(x.opts.start) && x.opts.start.call(e, x), x.progress(x.opts.progress).done(x.opts.done, x.opts.complete).fail(x.opts.fail).always(x.opts.always), a.fx.timer(
          a.extend(m, {
            elem: e,
            anim: x,
            queue: x.opts.queue
          })
        ), x;
      }
      a.Animation = a.extend(Ue, {
        tweeners: {
          "*": [function(e, t) {
            var r = this.createTween(e, t);
            return oi(r.elem, e, rt.exec(t), r), r;
          }]
        },
        tweener: function(e, t) {
          z(e) ? (t = e, e = ["*"]) : e = e.match(Ie);
          for (var r, u = 0, o = e.length; u < o; u++)
            r = e[u], Ue.tweeners[r] = Ue.tweeners[r] || [], Ue.tweeners[r].unshift(t);
        },
        prefilters: [za],
        prefilter: function(e, t) {
          t ? Ue.prefilters.unshift(e) : Ue.prefilters.push(e);
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
            var b = Ue(this, a.extend({}, e), l);
            (o || L.get(this, "finish")) && b.stop(!0);
          };
          return h.finish = h, o || l.queue === !1 ? this.each(h) : this.queue(l.queue, h);
        },
        stop: function(e, t, r) {
          var u = function(o) {
            var l = o.stop;
            delete o.stop, l(r);
          };
          return typeof e != "string" && (r = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
            var o = !0, l = e != null && e + "queueHooks", h = a.timers, b = L.get(this);
            if (l)
              b[l] && b[l].stop && u(b[l]);
            else
              for (l in b)
                b[l] && b[l].stop && Ba.test(l) && u(b[l]);
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
        for (Ht = Date.now(); t < r.length; t++)
          e = r[t], !e() && r[t] === e && r.splice(t--, 1);
        r.length || a.fx.stop(), Ht = void 0;
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
        var e = j.createElement("input"), t = j.createElement("select"), r = t.appendChild(j.createElement("option"));
        e.type = "checkbox", G.checkOn = e.value !== "", G.optSelected = r.selected, e = j.createElement("input"), e.value = "t", e.type = "radio", G.radioValue = e.value === "t";
      }();
      var Si, jt = a.expr.attrHandle;
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
            if ((l !== 1 || !a.isXMLDoc(e)) && (o = a.attrHooks[t.toLowerCase()] || (a.expr.match.bool.test(t) ? Si : void 0)), r !== void 0) {
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
              if (!G.radioValue && t === "radio" && oe(e, "input")) {
                var r = e.value;
                return e.setAttribute("type", t), r && (e.value = r), t;
              }
            }
          }
        },
        removeAttr: function(e, t) {
          var r, u = 0, o = t && t.match(Ie);
          if (o && e.nodeType === 1)
            for (; r = o[u++]; )
              e.removeAttribute(r);
        }
      }), Si = {
        set: function(e, t, r) {
          return t === !1 ? a.removeAttr(e, r) : e.setAttribute(r, r), r;
        }
      }, a.each(a.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var r = jt[t] || a.find.attr;
        jt[t] = function(u, o, l) {
          var h, b, m = o.toLowerCase();
          return l || (b = jt[m], jt[m] = h, h = r(u, o, l) != null ? m : null, jt[m] = b), h;
        };
      });
      var Xa = /^(?:input|select|textarea|button)$/i, Qa = /^(?:a|area)$/i;
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
              return t ? parseInt(t, 10) : Xa.test(e.nodeName) || Qa.test(e.nodeName) && e.href ? 0 : -1;
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
      function yt(e) {
        var t = e.match(Ie) || [];
        return t.join(" ");
      }
      function bt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
      }
      function ir(e) {
        return Array.isArray(e) ? e : typeof e == "string" ? e.match(Ie) || [] : [];
      }
      a.fn.extend({
        addClass: function(e) {
          var t, r, u, o, l, h;
          return z(e) ? this.each(function(b) {
            a(this).addClass(e.call(this, b, bt(this)));
          }) : (t = ir(e), t.length ? this.each(function() {
            if (u = bt(this), r = this.nodeType === 1 && " " + yt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                o = t[l], r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              h = yt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this);
        },
        removeClass: function(e) {
          var t, r, u, o, l, h;
          return z(e) ? this.each(function(b) {
            a(this).removeClass(e.call(this, b, bt(this)));
          }) : arguments.length ? (t = ir(e), t.length ? this.each(function() {
            if (u = bt(this), r = this.nodeType === 1 && " " + yt(u) + " ", r) {
              for (l = 0; l < t.length; l++)
                for (o = t[l]; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              h = yt(r), u !== h && this.setAttribute("class", h);
            }
          }) : this) : this.attr("class", "");
        },
        toggleClass: function(e, t) {
          var r, u, o, l, h = typeof e, b = h === "string" || Array.isArray(e);
          return z(e) ? this.each(function(m) {
            a(this).toggleClass(
              e.call(this, m, bt(this), t),
              t
            );
          }) : typeof t == "boolean" && b ? t ? this.addClass(e) : this.removeClass(e) : (r = ir(e), this.each(function() {
            if (b)
              for (l = a(this), o = 0; o < r.length; o++)
                u = r[o], l.hasClass(u) ? l.removeClass(u) : l.addClass(u);
            else
              (e === void 0 || h === "boolean") && (u = bt(this), u && L.set(this, "__className__", u), this.setAttribute && this.setAttribute(
                "class",
                u || e === !1 ? "" : L.get(this, "__className__") || ""
              ));
          }));
        },
        hasClass: function(e) {
          var t, r, u = 0;
          for (t = " " + e + " "; r = this[u++]; )
            if (r.nodeType === 1 && (" " + yt(bt(r)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        }
      });
      var Ya = /\r/g;
      a.fn.extend({
        val: function(e) {
          var t, r, u, o = this[0];
          return arguments.length ? (u = z(e), this.each(function(l) {
            var h;
            this.nodeType === 1 && (u ? h = e.call(this, l, a(this).val()) : h = e, h == null ? h = "" : typeof h == "number" ? h += "" : Array.isArray(h) && (h = a.map(h, function(b) {
              return b == null ? "" : b + "";
            })), t = a.valHooks[this.type] || a.valHooks[this.nodeName.toLowerCase()], (!t || !("set" in t) || t.set(this, h, "value") === void 0) && (this.value = h));
          })) : o ? (t = a.valHooks[o.type] || a.valHooks[o.nodeName.toLowerCase()], t && "get" in t && (r = t.get(o, "value")) !== void 0 ? r : (r = o.value, typeof r == "string" ? r.replace(Ya, "") : r ?? "")) : void 0;
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
              var t, r, u, o = e.options, l = e.selectedIndex, h = e.type === "select-one", b = h ? null : [], m = h ? l + 1 : o.length;
              for (l < 0 ? u = m : u = h ? l : 0; u < m; u++)
                if (r = o[u], (r.selected || u === l) && // Don't return options that are disabled or in a disabled optgroup
                !r.disabled && (!r.parentNode.disabled || !oe(r.parentNode, "optgroup"))) {
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
      var Gt = n.location, Ai = { guid: Date.now() }, ur = /\?/;
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
      var Di = /^(?:focusinfocus|focusoutblur)$/, Ni = function(e) {
        e.stopPropagation();
      };
      a.extend(a.event, {
        trigger: function(e, t, r, u) {
          var o, l, h, b, m, x, S, H, C = [r || j], M = re.call(e, "type") ? e.type : e, J = re.call(e, "namespace") ? e.namespace.split(".") : [];
          if (l = H = h = r = r || j, !(r.nodeType === 3 || r.nodeType === 8) && !Di.test(M + a.event.triggered) && (M.indexOf(".") > -1 && (J = M.split("."), M = J.shift(), J.sort()), m = M.indexOf(":") < 0 && "on" + M, e = e[a.expando] ? e : new a.Event(M, typeof e == "object" && e), e.isTrigger = u ? 2 : 3, e.namespace = J.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + J.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = t == null ? [e] : a.makeArray(t, [e]), S = a.event.special[M] || {}, !(!u && S.trigger && S.trigger.apply(r, t) === !1))) {
            if (!u && !S.noBubble && !ke(r)) {
              for (b = S.delegateType || M, Di.test(b + M) || (l = l.parentNode); l; l = l.parentNode)
                C.push(l), h = l;
              h === (r.ownerDocument || j) && C.push(h.defaultView || h.parentWindow || n);
            }
            for (o = 0; (l = C[o++]) && !e.isPropagationStopped(); )
              H = l, e.type = o > 1 ? b : S.bindType || M, x = (L.get(l, "events") || /* @__PURE__ */ Object.create(null))[e.type] && L.get(l, "handle"), x && x.apply(l, t), x = m && l[m], x && x.apply && pe(l) && (e.result = x.apply(l, t), e.result === !1 && e.preventDefault());
            return e.type = M, !u && !e.isDefaultPrevented() && (!S._default || S._default.apply(C.pop(), t) === !1) && pe(r) && m && z(r[M]) && !ke(r) && (h = r[m], h && (r[m] = null), a.event.triggered = M, e.isPropagationStopped() && H.addEventListener(M, Ni), r[M](), e.isPropagationStopped() && H.removeEventListener(M, Ni), a.event.triggered = void 0, h && (r[m] = h)), e.result;
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
      var Ka = /\[\]$/, Hi = /\r?\n/g, Za = /^(?:submit|button|image|reset|file)$/i, es = /^(?:input|select|textarea|keygen)/i;
      function ar(e, t, r, u) {
        var o;
        if (Array.isArray(t))
          a.each(t, function(l, h) {
            r || Ka.test(e) ? u(e, h) : ar(
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
          var b = z(h) ? h() : h;
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
            return this.name && !a(this).is(":disabled") && es.test(this.nodeName) && !Za.test(e) && (this.checked || !Vt.test(e));
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
      var ts = /%20/g, ns = /#.*$/, rs = /([?&])_=[^&]*/, is = /^(.*?):[ \t]*([^\r\n]*)$/mg, us = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, as = /^(?:GET|HEAD)$/, ss = /^\/\//, Oi = {}, sr = {}, Mi = "*/".concat("*"), or = j.createElement("a");
      or.href = Gt.href;
      function Ii(e) {
        return function(t, r) {
          typeof t != "string" && (r = t, t = "*");
          var u, o = 0, l = t.toLowerCase().match(Ie) || [];
          if (z(r))
            for (; u = l[o++]; )
              u[0] === "+" ? (u = u.slice(1) || "*", (e[u] = e[u] || []).unshift(r)) : (e[u] = e[u] || []).push(r);
        };
      }
      function Pi(e, t, r, u) {
        var o = {}, l = e === sr;
        function h(b) {
          var m;
          return o[b] = !0, a.each(e[b] || [], function(x, S) {
            var H = S(t, r, u);
            if (typeof H == "string" && !l && !o[H])
              return t.dataTypes.unshift(H), h(H), !1;
            if (l)
              return !(m = H);
          }), m;
        }
        return h(t.dataTypes[0]) || !o["*"] && h("*");
      }
      function lr(e, t) {
        var r, u, o = a.ajaxSettings.flatOptions || {};
        for (r in t)
          t[r] !== void 0 && ((o[r] ? e : u || (u = {}))[r] = t[r]);
        return u && a.extend(!0, e, u), e;
      }
      function os(e, t, r) {
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
      function ls(e, t, r, u) {
        var o, l, h, b, m, x = {}, S = e.dataTypes.slice();
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
                  if (b = o.split(" "), b[1] === l && (h = x[m + " " + b[0]] || x["* " + b[0]], h)) {
                    h === !0 ? h = x[o] : x[o] !== !0 && (l = b[0], S.unshift(b[1]));
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
          url: Gt.href,
          type: "GET",
          isLocal: us.test(Gt.protocol),
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
            lr(lr(e, a.ajaxSettings), t)
          ) : (
            // Extending ajaxSettings
            lr(a.ajaxSettings, e)
          );
        },
        ajaxPrefilter: Ii(Oi),
        ajaxTransport: Ii(sr),
        // Main method
        ajax: function(e, t) {
          typeof e == "object" && (t = e, e = void 0), t = t || {};
          var r, u, o, l, h, b, m, x, S, H, C = a.ajaxSetup({}, t), M = C.context || C, J = C.context && (M.nodeType || M.jquery) ? a(M) : a.event, te = a.Deferred(), Q = a.Callbacks("once memory"), ye = C.statusCode || {}, ge = {}, ze = {}, Je = "canceled", ee = {
            readyState: 0,
            // Builds headers hashtable if needed
            getResponseHeader: function(ne) {
              var ce;
              if (m) {
                if (!l)
                  for (l = {}; ce = is.exec(o); )
                    l[ce[1].toLowerCase() + " "] = (l[ce[1].toLowerCase() + " "] || []).concat(ce[2]);
                ce = l[ne.toLowerCase() + " "];
              }
              return ce == null ? null : ce.join(", ");
            },
            // Raw string
            getAllResponseHeaders: function() {
              return m ? o : null;
            },
            // Caches the header
            setRequestHeader: function(ne, ce) {
              return m == null && (ne = ze[ne.toLowerCase()] = ze[ne.toLowerCase()] || ne, ge[ne] = ce), this;
            },
            // Overrides response content-type header
            overrideMimeType: function(ne) {
              return m == null && (C.mimeType = ne), this;
            },
            // Status-dependent callbacks
            statusCode: function(ne) {
              var ce;
              if (ne)
                if (m)
                  ee.always(ne[ee.status]);
                else
                  for (ce in ne)
                    ye[ce] = [ye[ce], ne[ce]];
              return this;
            },
            // Cancel the request
            abort: function(ne) {
              var ce = ne || Je;
              return r && r.abort(ce), wt(0, ce), this;
            }
          };
          if (te.promise(ee), C.url = ((e || C.url || Gt.href) + "").replace(ss, Gt.protocol + "//"), C.type = t.method || t.type || C.method || C.type, C.dataTypes = (C.dataType || "*").toLowerCase().match(Ie) || [""], C.crossDomain == null) {
            b = j.createElement("a");
            try {
              b.href = C.url, b.href = b.href, C.crossDomain = or.protocol + "//" + or.host != b.protocol + "//" + b.host;
            } catch {
              C.crossDomain = !0;
            }
          }
          if (C.data && C.processData && typeof C.data != "string" && (C.data = a.param(C.data, C.traditional)), Pi(Oi, C, t, ee), m)
            return ee;
          x = a.event && C.global, x && a.active++ === 0 && a.event.trigger("ajaxStart"), C.type = C.type.toUpperCase(), C.hasContent = !as.test(C.type), u = C.url.replace(ns, ""), C.hasContent ? C.data && C.processData && (C.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (C.data = C.data.replace(ts, "+")) : (H = C.url.slice(u.length), C.data && (C.processData || typeof C.data == "string") && (u += (ur.test(u) ? "&" : "?") + C.data, delete C.data), C.cache === !1 && (u = u.replace(rs, "$1"), H = (ur.test(u) ? "&" : "?") + "_=" + Ai.guid++ + H), C.url = u + H), C.ifModified && (a.lastModified[u] && ee.setRequestHeader("If-Modified-Since", a.lastModified[u]), a.etag[u] && ee.setRequestHeader("If-None-Match", a.etag[u])), (C.data && C.hasContent && C.contentType !== !1 || t.contentType) && ee.setRequestHeader("Content-Type", C.contentType), ee.setRequestHeader(
            "Accept",
            C.dataTypes[0] && C.accepts[C.dataTypes[0]] ? C.accepts[C.dataTypes[0]] + (C.dataTypes[0] !== "*" ? ", " + Mi + "; q=0.01" : "") : C.accepts["*"]
          );
          for (S in C.headers)
            ee.setRequestHeader(S, C.headers[S]);
          if (C.beforeSend && (C.beforeSend.call(M, ee, C) === !1 || m))
            return ee.abort();
          if (Je = "abort", Q.add(C.complete), ee.done(C.success), ee.fail(C.error), r = Pi(sr, C, t, ee), !r)
            wt(-1, "No Transport");
          else {
            if (ee.readyState = 1, x && J.trigger("ajaxSend", [ee, C]), m)
              return ee;
            C.async && C.timeout > 0 && (h = n.setTimeout(function() {
              ee.abort("timeout");
            }, C.timeout));
            try {
              m = !1, r.send(ge, wt);
            } catch (ne) {
              if (m)
                throw ne;
              wt(-1, ne);
            }
          }
          function wt(ne, ce, zt, cr) {
            var Xe, Jt, Qe, ft, ct, Le = ce;
            m || (m = !0, h && n.clearTimeout(h), r = void 0, o = cr || "", ee.readyState = ne > 0 ? 4 : 0, Xe = ne >= 200 && ne < 300 || ne === 304, zt && (ft = os(C, ee, zt)), !Xe && a.inArray("script", C.dataTypes) > -1 && a.inArray("json", C.dataTypes) < 0 && (C.converters["text script"] = function() {
            }), ft = ls(C, ft, ee, Xe), Xe ? (C.ifModified && (ct = ee.getResponseHeader("Last-Modified"), ct && (a.lastModified[u] = ct), ct = ee.getResponseHeader("etag"), ct && (a.etag[u] = ct)), ne === 204 || C.type === "HEAD" ? Le = "nocontent" : ne === 304 ? Le = "notmodified" : (Le = ft.state, Jt = ft.data, Qe = ft.error, Xe = !Qe)) : (Qe = Le, (ne || !Le) && (Le = "error", ne < 0 && (ne = 0))), ee.status = ne, ee.statusText = (ce || Le) + "", Xe ? te.resolveWith(M, [Jt, Le, ee]) : te.rejectWith(M, [ee, Le, Qe]), ee.statusCode(ye), ye = void 0, x && J.trigger(
              Xe ? "ajaxSuccess" : "ajaxError",
              [ee, C, Xe ? Jt : Qe]
            ), Q.fireWith(M, [ee, Le]), x && (J.trigger("ajaxComplete", [ee, C]), --a.active || a.event.trigger("ajaxStop")));
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
      var fs = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // trac-1450: sometimes IE returns 1223 when it should be 204
        1223: 204
      }, Bt = a.ajaxSettings.xhr();
      G.cors = !!Bt && "withCredentials" in Bt, G.ajax = Bt = !!Bt, a.ajaxTransport(function(e) {
        var t, r;
        if (G.cors || Bt && !e.crossDomain)
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
                    fs[h.status] || h.status,
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
      var $i = [], fr = /(=)\?(?=&|$)|\?\?/;
      a.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
          var e = $i.pop() || a.expando + "_" + Ai.guid++;
          return this[e] = !0, e;
        }
      }), a.ajaxPrefilter("json jsonp", function(e, t, r) {
        var u, o, l, h = e.jsonp !== !1 && (fr.test(e.url) ? "url" : typeof e.data == "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && fr.test(e.data) && "data");
        if (h || e.dataTypes[0] === "jsonp")
          return u = e.jsonpCallback = z(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, h ? e[h] = e[h].replace(fr, "$1" + u) : e.jsonp !== !1 && (e.url += (ur.test(e.url) ? "&" : "?") + e.jsonp + "=" + u), e.converters["script json"] = function() {
            return l || a.error(u + " was not called"), l[0];
          }, e.dataTypes[0] = "json", o = n[u], n[u] = function() {
            l = arguments;
          }, r.always(function() {
            o === void 0 ? a(n).removeProp(u) : n[u] = o, e[u] && (e.jsonpCallback = t.jsonpCallback, $i.push(u)), l && z(o) && o(l[0]), l = o = void 0;
          }), "script";
      }), G.createHTMLDocument = function() {
        var e = j.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", e.childNodes.length === 2;
      }(), a.parseHTML = function(e, t, r) {
        if (typeof e != "string")
          return [];
        typeof t == "boolean" && (r = t, t = !1);
        var u, o, l;
        return t || (G.createHTMLDocument ? (t = j.implementation.createHTMLDocument(""), u = t.createElement("base"), u.href = j.location.href, t.head.appendChild(u)) : t = j), o = kt.exec(e), l = !r && [], o ? [t.createElement(o[1])] : (o = hi([e], t, l), l && l.length && a(l).remove(), a.merge([], o.childNodes));
      }, a.fn.load = function(e, t, r) {
        var u, o, l, h = this, b = e.indexOf(" ");
        return b > -1 && (u = yt(e.slice(b)), e = e.slice(0, b)), z(t) ? (r = t, t = void 0) : t && typeof t == "object" && (o = "POST"), h.length > 0 && a.ajax({
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
          var u, o, l, h, b, m, x, S = a.css(e, "position"), H = a(e), C = {};
          S === "static" && (e.style.position = "relative"), b = H.offset(), l = a.css(e, "top"), m = a.css(e, "left"), x = (S === "absolute" || S === "fixed") && (l + m).indexOf("auto") > -1, x ? (u = H.position(), h = u.top, o = u.left) : (h = parseFloat(l) || 0, o = parseFloat(m) || 0), z(t) && (t = t.call(e, r, a.extend({}, b))), t.top != null && (C.top = t.top - b.top + h), t.left != null && (C.left = t.left - b.left + o), "using" in t ? t.using.call(e, C) : H.css(C);
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
          return D(this, function(o, l, h) {
            var b;
            if (ke(o) ? b = o : o.nodeType === 9 && (b = o.defaultView), h === void 0)
              return b ? b[t] : o[l];
            b ? b.scrollTo(
              r ? b.pageXOffset : h,
              r ? h : b.pageYOffset
            ) : o[l] = h;
          }, e, u, arguments.length);
        };
      }), a.each(["top", "left"], function(e, t) {
        a.cssHooks[t] = yi(
          G.pixelPosition,
          function(r, u) {
            if (u)
              return u = Wt(r, t), Zn.test(u) ? a(r).position()[t] + "px" : u;
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
            return D(this, function(m, x, S) {
              var H;
              return ke(m) ? u.indexOf("outer") === 0 ? m["inner" + e] : m.document.documentElement["client" + e] : m.nodeType === 9 ? (H = m.documentElement, Math.max(
                m.body["scroll" + e],
                H["scroll" + e],
                m.body["offset" + e],
                H["offset" + e],
                H["client" + e]
              )) : S === void 0 ? (
                // Get width or height on the element, requesting but not forcing parseFloat
                a.css(m, x, b)
              ) : (
                // Set width or height on the element
                a.style(m, x, S, b)
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
          return u = g.call(arguments, 2), o = function() {
            return e.apply(t || this, u.concat(g.call(arguments)));
          }, o.guid = e.guid = e.guid || a.guid++, o;
      }, a.holdReady = function(e) {
        e ? a.readyWait++ : a.ready(!0);
      }, a.isArray = Array.isArray, a.parseJSON = JSON.parse, a.nodeName = oe, a.isFunction = z, a.isWindow = ke, a.camelCase = ie, a.type = Ne, a.now = Date.now, a.isNumeric = function(e) {
        var t = a.type(e);
        return (t === "number" || t === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(e - parseFloat(e));
      }, a.trim = function(e) {
        return e == null ? "" : (e + "").replace(cs, "$1");
      };
      var hs = n.jQuery, ds = n.$;
      return a.noConflict = function(e) {
        return n.$ === a && (n.$ = ds), e && n.jQuery === a && (n.jQuery = hs), a;
      }, typeof f > "u" && (n.jQuery = n.$ = a), a;
    });
  }(yr)), yr.exports;
}
var Us = Zi();
const On = /* @__PURE__ */ Rs(Us);
var Vs = {}, _r = "1.13.7", Ui = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || Function("return this")() || {}, Mn = Array.prototype, Cr = Object.prototype, Vi = typeof Symbol < "u" ? Symbol.prototype : null, Ws = Mn.push, rn = Mn.slice, Yt = Cr.toString, js = Cr.hasOwnProperty, eu = typeof ArrayBuffer < "u", Gs = typeof DataView < "u", Bs = Array.isArray, Wi = Object.keys, ji = Object.create, Gi = eu && ArrayBuffer.isView, zs = isNaN, Js = isFinite, tu = !{ toString: null }.propertyIsEnumerable("toString"), Bi = [
  "valueOf",
  "isPrototypeOf",
  "toString",
  "propertyIsEnumerable",
  "hasOwnProperty",
  "toLocaleString"
], Xs = Math.pow(2, 53) - 1;
function _e(i, n) {
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
    var g = Array(n + 1);
    for (d = 0; d < n; d++)
      g[d] = arguments[d];
    return g[n] = s, i.apply(this, g);
  };
}
function pt(i) {
  var n = typeof i;
  return n === "function" || n === "object" && !!i;
}
function nu(i) {
  return i === null;
}
function Er(i) {
  return i === void 0;
}
function Sr(i) {
  return i === !0 || i === !1 || Yt.call(i) === "[object Boolean]";
}
function ru(i) {
  return !!(i && i.nodeType === 1);
}
function Fe(i) {
  var n = "[object " + i + "]";
  return function(f) {
    return Yt.call(f) === n;
  };
}
const In = Fe("String"), Ar = Fe("Number"), iu = Fe("Date"), uu = Fe("RegExp"), au = Fe("Error"), Dr = Fe("Symbol"), Nr = Fe("ArrayBuffer");
var su = Fe("Function"), Qs = Ui.document && Ui.document.childNodes;
typeof /./ != "function" && typeof Int8Array != "object" && typeof Qs != "function" && (su = function(i) {
  return typeof i == "function" || !1;
});
const we = su, ou = Fe("Object");
var lu = Gs && (!/\[native code\]/.test(String(DataView)) || ou(new DataView(new ArrayBuffer(8)))), Hr = typeof Map < "u" && ou(/* @__PURE__ */ new Map()), Ys = Fe("DataView");
function Ks(i) {
  return i != null && we(i.getInt8) && Nr(i.buffer);
}
const Kt = lu ? Ks : Ys, gt = Bs || Fe("Array");
function vt(i, n) {
  return i != null && js.call(i, n);
}
var wr = Fe("Arguments");
(function() {
  wr(arguments) || (wr = function(i) {
    return vt(i, "callee");
  });
})();
const Pn = wr;
function fu(i) {
  return !Dr(i) && Js(i) && !isNaN(parseFloat(i));
}
function Or(i) {
  return Ar(i) && zs(i);
}
function Mr(i) {
  return function() {
    return i;
  };
}
function cu(i) {
  return function(n) {
    var f = i(n);
    return typeof f == "number" && f >= 0 && f <= Xs;
  };
}
function hu(i) {
  return function(n) {
    return n == null ? void 0 : n[i];
  };
}
const En = hu("byteLength"), Zs = cu(En);
var eo = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
function to(i) {
  return Gi ? Gi(i) && !Kt(i) : Zs(i) && eo.test(Yt.call(i));
}
const Ir = eu ? to : Mr(!1), Ae = hu("length");
function no(i) {
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
function du(i, n) {
  n = no(n);
  var f = Bi.length, s = i.constructor, d = we(s) && s.prototype || Cr, g = "constructor";
  for (vt(i, g) && !n.contains(g) && n.push(g); f--; )
    g = Bi[f], g in i && i[g] !== d[g] && !n.contains(g) && n.push(g);
}
function ve(i) {
  if (!pt(i))
    return [];
  if (Wi)
    return Wi(i);
  var n = [];
  for (var f in i)
    vt(i, f) && n.push(f);
  return tu && du(i, n), n;
}
function pu(i) {
  if (i == null)
    return !0;
  var n = Ae(i);
  return typeof n == "number" && (gt(i) || In(i) || Pn(i)) ? n === 0 : Ae(ve(i)) === 0;
}
function Pr(i, n) {
  var f = ve(n), s = f.length;
  if (i == null)
    return !s;
  for (var d = Object(i), g = 0; g < s; g++) {
    var F = f[g];
    if (n[F] !== d[F] || !(F in d))
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
ae.VERSION = _r;
ae.prototype.value = function() {
  return this._wrapped;
};
ae.prototype.valueOf = ae.prototype.toJSON = ae.prototype.value;
ae.prototype.toString = function() {
  return String(this._wrapped);
};
function zi(i) {
  return new Uint8Array(
    i.buffer || i,
    i.byteOffset || 0,
    En(i)
  );
}
var Ji = "[object DataView]";
function Fr(i, n, f, s) {
  if (i === n)
    return i !== 0 || 1 / i === 1 / n;
  if (i == null || n == null)
    return !1;
  if (i !== i)
    return n !== n;
  var d = typeof i;
  return d !== "function" && d !== "object" && typeof n != "object" ? !1 : gu(i, n, f, s);
}
function gu(i, n, f, s) {
  i instanceof ae && (i = i._wrapped), n instanceof ae && (n = n._wrapped);
  var d = Yt.call(i);
  if (d !== Yt.call(n))
    return !1;
  if (lu && d == "[object Object]" && Kt(i)) {
    if (!Kt(n))
      return !1;
    d = Ji;
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
      return Vi.valueOf.call(i) === Vi.valueOf.call(n);
    case "[object ArrayBuffer]":
    case Ji:
      return gu(zi(i), zi(n), f, s);
  }
  var g = d === "[object Array]";
  if (!g && Ir(i)) {
    var F = En(i);
    if (F !== En(n))
      return !1;
    if (i.buffer === n.buffer && i.byteOffset === n.byteOffset)
      return !0;
    g = !0;
  }
  if (!g) {
    if (typeof i != "object" || typeof n != "object")
      return !1;
    var A = i.constructor, I = n.constructor;
    if (A !== I && !(we(A) && A instanceof A && we(I) && I instanceof I) && "constructor" in i && "constructor" in n)
      return !1;
  }
  f = f || [], s = s || [];
  for (var $ = f.length; $--; )
    if (f[$] === i)
      return s[$] === n;
  if (f.push(i), s.push(n), g) {
    if ($ = i.length, $ !== n.length)
      return !1;
    for (; $--; )
      if (!Fr(i[$], n[$], f, s))
        return !1;
  } else {
    var V = ve(i), re;
    if ($ = V.length, ve(n).length !== $)
      return !1;
    for (; $--; )
      if (re = V[$], !(vt(n, re) && Fr(i[re], n[re], f, s)))
        return !1;
  }
  return f.pop(), s.pop(), !0;
}
function vu(i, n) {
  return Fr(i, n);
}
function qt(i) {
  if (!pt(i))
    return [];
  var n = [];
  for (var f in i)
    n.push(f);
  return tu && du(i, n), n;
}
function $r(i) {
  var n = Ae(i);
  return function(f) {
    if (f == null)
      return !1;
    var s = qt(f);
    if (Ae(s))
      return !1;
    for (var d = 0; d < n; d++)
      if (!we(f[i[d]]))
        return !1;
    return i !== bu || !we(f[Lr]);
  };
}
var Lr = "forEach", mu = "has", qr = ["clear", "delete"], yu = ["get", mu, "set"], ro = qr.concat(Lr, yu), bu = qr.concat(yu), io = ["add"].concat(qr, Lr, mu);
const wu = Hr ? $r(ro) : Fe("Map"), Fu = Hr ? $r(bu) : Fe("WeakMap"), xu = Hr ? $r(io) : Fe("Set"), Tu = Fe("WeakSet");
function _t(i) {
  for (var n = ve(i), f = n.length, s = Array(f), d = 0; d < f; d++)
    s[d] = i[n[d]];
  return s;
}
function _u(i) {
  for (var n = ve(i), f = n.length, s = Array(f), d = 0; d < f; d++)
    s[d] = [n[d], i[n[d]]];
  return s;
}
function Rr(i) {
  for (var n = {}, f = ve(i), s = 0, d = f.length; s < d; s++)
    n[i[f[s]]] = f[s];
  return n;
}
function Zt(i) {
  var n = [];
  for (var f in i)
    we(i[f]) && n.push(f);
  return n.sort();
}
function kr(i, n) {
  return function(f) {
    var s = arguments.length;
    if (n && (f = Object(f)), s < 2 || f == null)
      return f;
    for (var d = 1; d < s; d++)
      for (var g = arguments[d], F = i(g), A = F.length, I = 0; I < A; I++) {
        var $ = F[I];
        (!n || f[$] === void 0) && (f[$] = g[$]);
      }
    return f;
  };
}
const Ur = kr(qt), $t = kr(ve), Vr = kr(qt, !0);
function uo() {
  return function() {
  };
}
function Cu(i) {
  if (!pt(i))
    return {};
  if (ji)
    return ji(i);
  var n = uo();
  n.prototype = i;
  var f = new n();
  return n.prototype = null, f;
}
function Eu(i, n) {
  var f = Cu(i);
  return n && $t(f, n), f;
}
function Su(i) {
  return pt(i) ? gt(i) ? i.slice() : Ur({}, i) : i;
}
function Au(i, n) {
  return n(i), i;
}
function Wr(i) {
  return gt(i) ? i : [i];
}
ae.toPath = Wr;
function un(i) {
  return ae.toPath(i);
}
function jr(i, n) {
  for (var f = n.length, s = 0; s < f; s++) {
    if (i == null)
      return;
    i = i[n[s]];
  }
  return f ? i : void 0;
}
function Gr(i, n, f) {
  var s = jr(i, un(n));
  return Er(s) ? f : s;
}
function Du(i, n) {
  n = un(n);
  for (var f = n.length, s = 0; s < f; s++) {
    var d = n[s];
    if (!vt(i, d))
      return !1;
    i = i[d];
  }
  return !!f;
}
function $n(i) {
  return i;
}
function Tt(i) {
  return i = $t({}, i), function(n) {
    return Pr(n, i);
  };
}
function Ln(i) {
  return i = un(i), function(n) {
    return jr(n, i);
  };
}
function an(i, n, f) {
  if (n === void 0)
    return i;
  switch (f ?? 3) {
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
function Nu(i, n, f) {
  return i == null ? $n : we(i) ? an(i, n, f) : pt(i) && !gt(i) ? Tt(i) : Ln(i);
}
function qn(i, n) {
  return Nu(i, n, 1 / 0);
}
ae.iteratee = qn;
function De(i, n, f) {
  return ae.iteratee !== qn ? ae.iteratee(i, n) : Nu(i, n, f);
}
function Hu(i, n, f) {
  n = De(n, f);
  for (var s = ve(i), d = s.length, g = {}, F = 0; F < d; F++) {
    var A = s[F];
    g[A] = n(i[A], A, i);
  }
  return g;
}
function Br() {
}
function Ou(i) {
  return i == null ? Br : function(n) {
    return Gr(i, n);
  };
}
function Mu(i, n, f) {
  var s = Array(Math.max(0, i));
  n = an(n, f, 1);
  for (var d = 0; d < i; d++)
    s[d] = n(d);
  return s;
}
function Sn(i, n) {
  return n == null && (n = i, i = 0), i + Math.floor(Math.random() * (n - i + 1));
}
const Lt = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
function Iu(i) {
  var n = function(g) {
    return i[g];
  }, f = "(?:" + ve(i).join("|") + ")", s = RegExp(f), d = RegExp(f, "g");
  return function(g) {
    return g = g == null ? "" : "" + g, s.test(g) ? g.replace(d, n) : g;
  };
}
const Pu = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#x27;",
  "`": "&#x60;"
}, $u = Iu(Pu), ao = Rr(Pu), Lu = Iu(ao), qu = ae.templateSettings = {
  evaluate: /<%([\s\S]+?)%>/g,
  interpolate: /<%=([\s\S]+?)%>/g,
  escape: /<%-([\s\S]+?)%>/g
};
var br = /(.)^/, so = {
  "'": "'",
  "\\": "\\",
  "\r": "r",
  "\n": "n",
  "\u2028": "u2028",
  "\u2029": "u2029"
}, oo = /\\|'|\r|\n|\u2028|\u2029/g;
function lo(i) {
  return "\\" + so[i];
}
var fo = /^\s*(\w|\$)+\s*$/;
function Ru(i, n, f) {
  !n && f && (n = f), n = Vr({}, n, ae.templateSettings);
  var s = RegExp([
    (n.escape || br).source,
    (n.interpolate || br).source,
    (n.evaluate || br).source
  ].join("|") + "|$", "g"), d = 0, g = "__p+='";
  i.replace(s, function($, V, re, Ke, xe) {
    return g += i.slice(d, xe).replace(oo, lo), d = xe + $.length, V ? g += `'+
((__t=(` + V + `))==null?'':_.escape(__t))+
'` : re ? g += `'+
((__t=(` + re + `))==null?'':__t)+
'` : Ke && (g += `';
` + Ke + `
__p+='`), $;
  }), g += `';
`;
  var F = n.variable;
  if (F) {
    if (!fo.test(F))
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
  var A;
  try {
    A = new Function(F, "_", g);
  } catch ($) {
    throw $.source = g, $;
  }
  var I = function($) {
    return A.call(this, $, ae);
  };
  return I.source = "function(" + F + `){
` + g + "}", I;
}
function ku(i, n, f) {
  n = un(n);
  var s = n.length;
  if (!s)
    return we(f) ? f.call(i) : f;
  for (var d = 0; d < s; d++) {
    var g = i == null ? void 0 : i[n[d]];
    g === void 0 && (g = f, d = s), i = we(g) ? g.call(i) : g;
  }
  return i;
}
var co = 0;
function Uu(i) {
  var n = ++co + "";
  return i ? i + n : n;
}
function Vu(i) {
  var n = ae(i);
  return n._chain = !0, n;
}
function Wu(i, n, f, s, d) {
  if (!(s instanceof n))
    return i.apply(f, d);
  var g = Cu(i.prototype), F = i.apply(g, d);
  return pt(F) ? F : g;
}
var Ct = _e(function(i, n) {
  var f = Ct.placeholder, s = function() {
    for (var d = 0, g = n.length, F = Array(g), A = 0; A < g; A++)
      F[A] = n[A] === f ? arguments[d++] : n[A];
    for (; d < arguments.length; )
      F.push(arguments[d++]);
    return Wu(i, s, this, this, F);
  };
  return s;
});
Ct.placeholder = ae;
const zr = _e(function(i, n, f) {
  if (!we(i))
    throw new TypeError("Bind must be called on a function");
  var s = _e(function(d) {
    return Wu(i, s, n, this, f.concat(d));
  });
  return s;
}), Oe = cu(Ae);
function Et(i, n, f, s) {
  if (s = s || [], !n && n !== 0)
    n = 1 / 0;
  else if (n <= 0)
    return s.concat(i);
  for (var d = s.length, g = 0, F = Ae(i); g < F; g++) {
    var A = i[g];
    if (Oe(A) && (gt(A) || Pn(A)))
      if (n > 1)
        Et(A, n - 1, f, s), d = s.length;
      else
        for (var I = 0, $ = A.length; I < $; )
          s[d++] = A[I++];
    else
      f || (s[d++] = A);
  }
  return s;
}
const ju = _e(function(i, n) {
  n = Et(n, !1, !1);
  var f = n.length;
  if (f < 1)
    throw new Error("bindAll must be passed function names");
  for (; f--; ) {
    var s = n[f];
    i[s] = zr(i[s], i);
  }
  return i;
});
function Gu(i, n) {
  var f = function(s) {
    var d = f.cache, g = "" + (n ? n.apply(this, arguments) : s);
    return vt(d, g) || (d[g] = i.apply(this, arguments)), d[g];
  };
  return f.cache = {}, f;
}
const Jr = _e(function(i, n, f) {
  return setTimeout(function() {
    return i.apply(null, f);
  }, n);
}), Bu = Ct(Jr, ae, 1);
function zu(i, n, f) {
  var s, d, g, F, A = 0;
  f || (f = {});
  var I = function() {
    A = f.leading === !1 ? 0 : Lt(), s = null, F = i.apply(d, g), s || (d = g = null);
  }, $ = function() {
    var V = Lt();
    !A && f.leading === !1 && (A = V);
    var re = n - (V - A);
    return d = this, g = arguments, re <= 0 || re > n ? (s && (clearTimeout(s), s = null), A = V, F = i.apply(d, g), s || (d = g = null)) : !s && f.trailing !== !1 && (s = setTimeout(I, re)), F;
  };
  return $.cancel = function() {
    clearTimeout(s), A = 0, s = d = g = null;
  }, $;
}
function Ju(i, n, f) {
  var s, d, g, F, A, I = function() {
    var V = Lt() - d;
    n > V ? s = setTimeout(I, n - V) : (s = null, f || (F = i.apply(A, g)), s || (g = A = null));
  }, $ = _e(function(V) {
    return A = this, g = V, d = Lt(), s || (s = setTimeout(I, n), f && (F = i.apply(A, g))), F;
  });
  return $.cancel = function() {
    clearTimeout(s), s = g = A = null;
  }, $;
}
function Xu(i, n) {
  return Ct(n, i);
}
function Rn(i) {
  return function() {
    return !i.apply(this, arguments);
  };
}
function Qu() {
  var i = arguments, n = i.length - 1;
  return function() {
    for (var f = n, s = i[n].apply(this, arguments); f--; )
      s = i[f].call(this, s);
    return s;
  };
}
function Yu(i, n) {
  return function() {
    if (--i < 1)
      return n.apply(this, arguments);
  };
}
function Xr(i, n) {
  var f;
  return function() {
    return --i > 0 && (f = n.apply(this, arguments)), i <= 1 && (n = null), f;
  };
}
const Ku = Ct(Xr, 2);
function Qr(i, n, f) {
  n = De(n, f);
  for (var s = ve(i), d, g = 0, F = s.length; g < F; g++)
    if (d = s[g], n(i[d], d, i))
      return d;
}
function Zu(i) {
  return function(n, f, s) {
    f = De(f, s);
    for (var d = Ae(n), g = i > 0 ? 0 : d - 1; g >= 0 && g < d; g += i)
      if (f(n[g], g, n))
        return g;
    return -1;
  };
}
const kn = Zu(1), Yr = Zu(-1);
function Kr(i, n, f, s) {
  f = De(f, s, 1);
  for (var d = f(n), g = 0, F = Ae(i); g < F; ) {
    var A = Math.floor((g + F) / 2);
    f(i[A]) < d ? g = A + 1 : F = A;
  }
  return g;
}
function ea(i, n, f) {
  return function(s, d, g) {
    var F = 0, A = Ae(s);
    if (typeof g == "number")
      i > 0 ? F = g >= 0 ? g : Math.max(g + A, F) : A = g >= 0 ? Math.min(g + 1, A) : g + A + 1;
    else if (f && g && A)
      return g = f(s, d), s[g] === d ? g : -1;
    if (d !== d)
      return g = n(rn.call(s, F, A), Or), g >= 0 ? g + F : -1;
    for (g = i > 0 ? F : A - 1; g >= 0 && g < A; g += i)
      if (s[g] === d)
        return g;
    return -1;
  };
}
const Zr = ea(1, kn, Kr), ta = ea(-1, Yr);
function en(i, n, f) {
  var s = Oe(i) ? kn : Qr, d = s(i, n, f);
  if (d !== void 0 && d !== -1)
    return i[d];
}
function na(i, n) {
  return en(i, Tt(n));
}
function We(i, n, f) {
  n = an(n, f);
  var s, d;
  if (Oe(i))
    for (s = 0, d = i.length; s < d; s++)
      n(i[s], s, i);
  else {
    var g = ve(i);
    for (s = 0, d = g.length; s < d; s++)
      n(i[g[s]], g[s], i);
  }
  return i;
}
function st(i, n, f) {
  n = De(n, f);
  for (var s = !Oe(i) && ve(i), d = (s || i).length, g = Array(d), F = 0; F < d; F++) {
    var A = s ? s[F] : F;
    g[F] = n(i[A], A, i);
  }
  return g;
}
function ra(i) {
  var n = function(f, s, d, g) {
    var F = !Oe(f) && ve(f), A = (F || f).length, I = i > 0 ? 0 : A - 1;
    for (g || (d = f[F ? F[I] : I], I += i); I >= 0 && I < A; I += i) {
      var $ = F ? F[I] : I;
      d = s(d, f[$], $, f);
    }
    return d;
  };
  return function(f, s, d, g) {
    var F = arguments.length >= 3;
    return n(f, an(s, g, 4), d, F);
  };
}
const It = ra(1), An = ra(-1);
function dt(i, n, f) {
  var s = [];
  return n = De(n, f), We(i, function(d, g, F) {
    n(d, g, F) && s.push(d);
  }), s;
}
function ia(i, n, f) {
  return dt(i, Rn(De(n)), f);
}
function Dn(i, n, f) {
  n = De(n, f);
  for (var s = !Oe(i) && ve(i), d = (s || i).length, g = 0; g < d; g++) {
    var F = s ? s[g] : g;
    if (!n(i[F], F, i))
      return !1;
  }
  return !0;
}
function Nn(i, n, f) {
  n = De(n, f);
  for (var s = !Oe(i) && ve(i), d = (s || i).length, g = 0; g < d; g++) {
    var F = s ? s[g] : g;
    if (n(i[F], F, i))
      return !0;
  }
  return !1;
}
function Re(i, n, f, s) {
  return Oe(i) || (i = _t(i)), (typeof f != "number" || s) && (f = 0), Zr(i, n, f) >= 0;
}
const ua = _e(function(i, n, f) {
  var s, d;
  return we(n) ? d = n : (n = un(n), s = n.slice(0, -1), n = n[n.length - 1]), st(i, function(g) {
    var F = d;
    if (!F) {
      if (s && s.length && (g = jr(g, s)), g == null)
        return;
      F = g[n];
    }
    return F == null ? F : F.apply(g, f);
  });
});
function Un(i, n) {
  return st(i, Ln(n));
}
function aa(i, n) {
  return dt(i, Tt(n));
}
function ei(i, n, f) {
  var s = -1 / 0, d = -1 / 0, g, F;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Oe(i) ? i : _t(i);
    for (var A = 0, I = i.length; A < I; A++)
      g = i[A], g != null && g > s && (s = g);
  } else
    n = De(n, f), We(i, function($, V, re) {
      F = n($, V, re), (F > d || F === -1 / 0 && s === -1 / 0) && (s = $, d = F);
    });
  return s;
}
function sa(i, n, f) {
  var s = 1 / 0, d = 1 / 0, g, F;
  if (n == null || typeof n == "number" && typeof i[0] != "object" && i != null) {
    i = Oe(i) ? i : _t(i);
    for (var A = 0, I = i.length; A < I; A++)
      g = i[A], g != null && g < s && (s = g);
  } else
    n = De(n, f), We(i, function($, V, re) {
      F = n($, V, re), (F < d || F === 1 / 0 && s === 1 / 0) && (s = $, d = F);
    });
  return s;
}
var ho = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
function ti(i) {
  return i ? gt(i) ? rn.call(i) : In(i) ? i.match(ho) : Oe(i) ? st(i, $n) : _t(i) : [];
}
function ni(i, n, f) {
  if (n == null || f)
    return Oe(i) || (i = _t(i)), i[Sn(i.length - 1)];
  var s = ti(i), d = Ae(s);
  n = Math.max(Math.min(n, d), 0);
  for (var g = d - 1, F = 0; F < n; F++) {
    var A = Sn(F, g), I = s[F];
    s[F] = s[A], s[A] = I;
  }
  return s.slice(0, n);
}
function oa(i) {
  return ni(i, 1 / 0);
}
function la(i, n, f) {
  var s = 0;
  return n = De(n, f), Un(st(i, function(d, g, F) {
    return {
      value: d,
      index: s++,
      criteria: n(d, g, F)
    };
  }).sort(function(d, g) {
    var F = d.criteria, A = g.criteria;
    if (F !== A) {
      if (F > A || F === void 0)
        return 1;
      if (F < A || A === void 0)
        return -1;
    }
    return d.index - g.index;
  }), "value");
}
function Vn(i, n) {
  return function(f, s, d) {
    var g = n ? [[], []] : {};
    return s = De(s, d), We(f, function(F, A) {
      var I = s(F, A, f);
      i(g, F, I);
    }), g;
  };
}
const fa = Vn(function(i, n, f) {
  vt(i, f) ? i[f].push(n) : i[f] = [n];
}), ca = Vn(function(i, n, f) {
  i[f] = n;
}), ha = Vn(function(i, n, f) {
  vt(i, f) ? i[f]++ : i[f] = 1;
}), da = Vn(function(i, n, f) {
  i[f ? 0 : 1].push(n);
}, !0);
function pa(i) {
  return i == null ? 0 : Oe(i) ? i.length : ve(i).length;
}
function po(i, n, f) {
  return n in f;
}
const ri = _e(function(i, n) {
  var f = {}, s = n[0];
  if (i == null)
    return f;
  we(s) ? (n.length > 1 && (s = an(s, n[1])), n = qt(i)) : (s = po, n = Et(n, !1, !1), i = Object(i));
  for (var d = 0, g = n.length; d < g; d++) {
    var F = n[d], A = i[F];
    s(A, F, i) && (f[F] = A);
  }
  return f;
}), ga = _e(function(i, n) {
  var f = n[0], s;
  return we(f) ? (f = Rn(f), n.length > 1 && (s = n[1])) : (n = st(Et(n, !1, !1), String), f = function(d, g) {
    return !Re(n, g);
  }), ri(i, f, s);
});
function ii(i, n, f) {
  return rn.call(i, 0, Math.max(0, i.length - (n == null || f ? 1 : n)));
}
function Pt(i, n, f) {
  return i == null || i.length < 1 ? n == null || f ? void 0 : [] : n == null || f ? i[0] : ii(i, i.length - n);
}
function xt(i, n, f) {
  return rn.call(i, n == null || f ? 1 : n);
}
function va(i, n, f) {
  return i == null || i.length < 1 ? n == null || f ? void 0 : [] : n == null || f ? i[i.length - 1] : xt(i, Math.max(0, i.length - n));
}
function ma(i) {
  return dt(i, Boolean);
}
function ya(i, n) {
  return Et(i, n, !1);
}
const ui = _e(function(i, n) {
  return n = Et(n, !0, !0), dt(i, function(f) {
    return !Re(n, f);
  });
}), ba = _e(function(i, n) {
  return ui(i, n);
});
function tn(i, n, f, s) {
  Sr(n) || (s = f, f = n, n = !1), f != null && (f = De(f, s));
  for (var d = [], g = [], F = 0, A = Ae(i); F < A; F++) {
    var I = i[F], $ = f ? f(I, F, i) : I;
    n && !f ? ((!F || g !== $) && d.push(I), g = $) : f ? Re(g, $) || (g.push($), d.push(I)) : Re(d, I) || d.push(I);
  }
  return d;
}
const wa = _e(function(i) {
  return tn(Et(i, !0, !0));
});
function Fa(i) {
  for (var n = [], f = arguments.length, s = 0, d = Ae(i); s < d; s++) {
    var g = i[s];
    if (!Re(n, g)) {
      var F;
      for (F = 1; F < f && Re(arguments[F], g); F++)
        ;
      F === f && n.push(g);
    }
  }
  return n;
}
function nn(i) {
  for (var n = i && ei(i, Ae).length || 0, f = Array(n), s = 0; s < n; s++)
    f[s] = Un(i, s);
  return f;
}
const xa = _e(nn);
function Ta(i, n) {
  for (var f = {}, s = 0, d = Ae(i); s < d; s++)
    n ? f[i[s]] = n[s] : f[i[s][0]] = i[s][1];
  return f;
}
function _a(i, n, f) {
  n == null && (n = i || 0, i = 0), f || (f = n < i ? -1 : 1);
  for (var s = Math.max(Math.ceil((n - i) / f), 0), d = Array(s), g = 0; g < s; g++, i += f)
    d[g] = i;
  return d;
}
function Ca(i, n) {
  if (n == null || n < 1)
    return [];
  for (var f = [], s = 0, d = i.length; s < d; )
    f.push(rn.call(i, s, s += n));
  return f;
}
function ai(i, n) {
  return i._chain ? ae(n).chain() : n;
}
function si(i) {
  return We(Zt(i), function(n) {
    var f = ae[n] = i[n];
    ae.prototype[n] = function() {
      var s = [this._wrapped];
      return Ws.apply(s, arguments), ai(this, f.apply(ae, s));
    };
  }), ae;
}
We(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(i) {
  var n = Mn[i];
  ae.prototype[i] = function() {
    var f = this._wrapped;
    return f != null && (n.apply(f, arguments), (i === "shift" || i === "splice") && f.length === 0 && delete f[0]), ai(this, f);
  };
});
We(["concat", "join", "slice"], function(i) {
  var n = Mn[i];
  ae.prototype[i] = function() {
    var f = this._wrapped;
    return f != null && (f = n.apply(f, arguments)), ai(this, f);
  };
});
const go = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: _r,
  after: Yu,
  all: Dn,
  allKeys: qt,
  any: Nn,
  assign: $t,
  before: Xr,
  bind: zr,
  bindAll: ju,
  chain: Vu,
  chunk: Ca,
  clone: Su,
  collect: st,
  compact: ma,
  compose: Qu,
  constant: Mr,
  contains: Re,
  countBy: ha,
  create: Eu,
  debounce: Ju,
  default: ae,
  defaults: Vr,
  defer: Bu,
  delay: Jr,
  detect: en,
  difference: ui,
  drop: xt,
  each: We,
  escape: $u,
  every: Dn,
  extend: Ur,
  extendOwn: $t,
  filter: dt,
  find: en,
  findIndex: kn,
  findKey: Qr,
  findLastIndex: Yr,
  findWhere: na,
  first: Pt,
  flatten: ya,
  foldl: It,
  foldr: An,
  forEach: We,
  functions: Zt,
  get: Gr,
  groupBy: fa,
  has: Du,
  head: Pt,
  identity: $n,
  include: Re,
  includes: Re,
  indexBy: ca,
  indexOf: Zr,
  initial: ii,
  inject: It,
  intersection: Fa,
  invert: Rr,
  invoke: ua,
  isArguments: Pn,
  isArray: gt,
  isArrayBuffer: Nr,
  isBoolean: Sr,
  isDataView: Kt,
  isDate: iu,
  isElement: ru,
  isEmpty: pu,
  isEqual: vu,
  isError: au,
  isFinite: fu,
  isFunction: we,
  isMap: wu,
  isMatch: Pr,
  isNaN: Or,
  isNull: nu,
  isNumber: Ar,
  isObject: pt,
  isRegExp: uu,
  isSet: xu,
  isString: In,
  isSymbol: Dr,
  isTypedArray: Ir,
  isUndefined: Er,
  isWeakMap: Fu,
  isWeakSet: Tu,
  iteratee: qn,
  keys: ve,
  last: va,
  lastIndexOf: ta,
  map: st,
  mapObject: Hu,
  matcher: Tt,
  matches: Tt,
  max: ei,
  memoize: Gu,
  methods: Zt,
  min: sa,
  mixin: si,
  negate: Rn,
  noop: Br,
  now: Lt,
  object: Ta,
  omit: ga,
  once: Ku,
  pairs: _u,
  partial: Ct,
  partition: da,
  pick: ri,
  pluck: Un,
  property: Ln,
  propertyOf: Ou,
  random: Sn,
  range: _a,
  reduce: It,
  reduceRight: An,
  reject: ia,
  rest: xt,
  restArguments: _e,
  result: ku,
  sample: ni,
  select: dt,
  shuffle: oa,
  size: pa,
  some: Nn,
  sortBy: la,
  sortedIndex: Kr,
  tail: xt,
  take: Pt,
  tap: Au,
  template: Ru,
  templateSettings: qu,
  throttle: zu,
  times: Mu,
  toArray: ti,
  toPath: Wr,
  transpose: nn,
  unescape: Lu,
  union: wa,
  uniq: tn,
  unique: tn,
  uniqueId: Uu,
  unzip: nn,
  values: _t,
  where: aa,
  without: ba,
  wrap: Xu,
  zip: xa
}, Symbol.toStringTag, { value: "Module" }));
var Hn = si(go);
Hn._ = Hn;
const vo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VERSION: _r,
  after: Yu,
  all: Dn,
  allKeys: qt,
  any: Nn,
  assign: $t,
  before: Xr,
  bind: zr,
  bindAll: ju,
  chain: Vu,
  chunk: Ca,
  clone: Su,
  collect: st,
  compact: ma,
  compose: Qu,
  constant: Mr,
  contains: Re,
  countBy: ha,
  create: Eu,
  debounce: Ju,
  default: Hn,
  defaults: Vr,
  defer: Bu,
  delay: Jr,
  detect: en,
  difference: ui,
  drop: xt,
  each: We,
  escape: $u,
  every: Dn,
  extend: Ur,
  extendOwn: $t,
  filter: dt,
  find: en,
  findIndex: kn,
  findKey: Qr,
  findLastIndex: Yr,
  findWhere: na,
  first: Pt,
  flatten: ya,
  foldl: It,
  foldr: An,
  forEach: We,
  functions: Zt,
  get: Gr,
  groupBy: fa,
  has: Du,
  head: Pt,
  identity: $n,
  include: Re,
  includes: Re,
  indexBy: ca,
  indexOf: Zr,
  initial: ii,
  inject: It,
  intersection: Fa,
  invert: Rr,
  invoke: ua,
  isArguments: Pn,
  isArray: gt,
  isArrayBuffer: Nr,
  isBoolean: Sr,
  isDataView: Kt,
  isDate: iu,
  isElement: ru,
  isEmpty: pu,
  isEqual: vu,
  isError: au,
  isFinite: fu,
  isFunction: we,
  isMap: wu,
  isMatch: Pr,
  isNaN: Or,
  isNull: nu,
  isNumber: Ar,
  isObject: pt,
  isRegExp: uu,
  isSet: xu,
  isString: In,
  isSymbol: Dr,
  isTypedArray: Ir,
  isUndefined: Er,
  isWeakMap: Fu,
  isWeakSet: Tu,
  iteratee: qn,
  keys: ve,
  last: va,
  lastIndexOf: ta,
  map: st,
  mapObject: Hu,
  matcher: Tt,
  matches: Tt,
  max: ei,
  memoize: Gu,
  methods: Zt,
  min: sa,
  mixin: si,
  negate: Rn,
  noop: Br,
  now: Lt,
  object: Ta,
  omit: ga,
  once: Ku,
  pairs: _u,
  partial: Ct,
  partition: da,
  pick: ri,
  pluck: Un,
  property: Ln,
  propertyOf: Ou,
  random: Sn,
  range: _a,
  reduce: It,
  reduceRight: An,
  reject: ia,
  rest: xt,
  restArguments: _e,
  result: ku,
  sample: ni,
  select: dt,
  shuffle: oa,
  size: pa,
  some: Nn,
  sortBy: la,
  sortedIndex: Kr,
  tail: xt,
  take: Pt,
  tap: Au,
  template: Ru,
  templateSettings: qu,
  throttle: zu,
  times: Mu,
  toArray: ti,
  toPath: Wr,
  transpose: nn,
  unescape: Lu,
  union: wa,
  uniq: tn,
  unique: tn,
  uniqueId: Uu,
  unzip: nn,
  values: _t,
  where: aa,
  without: ba,
  wrap: Xu,
  zip: xa
}, Symbol.toStringTag, { value: "Module" })), mo = /* @__PURE__ */ ks(vo);
(function(i) {
  (function(n) {
    var f = typeof self == "object" && self.self === self && self || typeof Qt == "object" && Qt.global === Qt && Qt;
    {
      var s = mo, d;
      try {
        d = Zi();
      } catch {
      }
      n(f, i, s, d);
    }
  })(function(n, f, s, d) {
    var g = n.Backbone, F = Array.prototype.slice;
    f.VERSION = "1.6.0", f.$ = d, f.noConflict = function() {
      return n.Backbone = g, this;
    }, f.emulateHTTP = !1, f.emulateJSON = !1;
    var A = f.Events = {}, I = /\s+/, $, V = function(c, p, y, T, D) {
      var O = 0, k;
      if (y && typeof y == "object")
        for (T !== void 0 && ("context" in D) && D.context === void 0 && (D.context = T), k = s.keys(y); O < k.length; O++)
          p = V(c, p, k[O], y[k[O]], D);
      else if (y && I.test(y))
        for (k = y.split(I); O < k.length; O++)
          p = c(p, k[O], T, D);
      else
        p = c(p, y, T, D);
      return p;
    };
    A.on = function(c, p, y) {
      if (this._events = V(re, this._events || {}, c, p, {
        context: y,
        ctx: this,
        listening: $
      }), $) {
        var T = this._listeners || (this._listeners = {});
        T[$.id] = $, $.interop = !1;
      }
      return this;
    }, A.listenTo = function(c, p, y) {
      if (!c)
        return this;
      var T = c._listenId || (c._listenId = s.uniqueId("l")), D = this._listeningTo || (this._listeningTo = {}), O = $ = D[T];
      O || (this._listenId || (this._listenId = s.uniqueId("l")), O = $ = D[T] = new j(this, c));
      var k = Ke(c, p, y, this);
      if ($ = void 0, k)
        throw k;
      return O.interop && O.on(p, y), this;
    };
    var re = function(c, p, y, T) {
      if (y) {
        var D = c[p] || (c[p] = []), O = T.context, k = T.ctx, Z = T.listening;
        Z && Z.count++, D.push({ callback: y, context: O, ctx: O || k, listening: Z });
      }
      return c;
    }, Ke = function(c, p, y, T) {
      try {
        c.on(p, y, T);
      } catch (D) {
        return D;
      }
    };
    A.off = function(c, p, y) {
      return this._events ? (this._events = V(xe, this._events, c, p, {
        context: y,
        listeners: this._listeners
      }), this) : this;
    }, A.stopListening = function(c, p, y) {
      var T = this._listeningTo;
      if (!T)
        return this;
      for (var D = c ? [c._listenId] : s.keys(T), O = 0; O < D.length; O++) {
        var k = T[D[O]];
        if (!k)
          break;
        k.obj.off(p, y, this), k.interop && k.off(p, y);
      }
      return s.isEmpty(T) && (this._listeningTo = void 0), this;
    };
    var xe = function(c, p, y, T) {
      if (c) {
        var D = T.context, O = T.listeners, k = 0, Z;
        if (!p && !D && !y) {
          for (Z = s.keys(O); k < Z.length; k++)
            O[Z[k]].cleanup();
          return;
        }
        for (Z = p ? [p] : s.keys(c); k < Z.length; k++) {
          p = Z[k];
          var ie = c[p];
          if (!ie)
            break;
          for (var pe = [], he = 0; he < ie.length; he++) {
            var L = ie[he];
            if (y && y !== L.callback && y !== L.callback._callback || D && D !== L.context)
              pe.push(L);
            else {
              var fe = L.listening;
              fe && fe.off(p, y);
            }
          }
          pe.length ? c[p] = pe : delete c[p];
        }
        return c;
      }
    };
    A.once = function(c, p, y) {
      var T = V(G, {}, c, p, this.off.bind(this));
      return typeof c == "string" && y == null && (p = void 0), this.on(T, p, y);
    }, A.listenToOnce = function(c, p, y) {
      var T = V(G, {}, p, y, this.stopListening.bind(this, c));
      return this.listenTo(c, T);
    };
    var G = function(c, p, y, T) {
      if (y) {
        var D = c[p] = s.once(function() {
          T(p, D), y.apply(this, arguments);
        });
        D._callback = y;
      }
      return c;
    };
    A.trigger = function(c) {
      if (!this._events)
        return this;
      for (var p = Math.max(0, arguments.length - 1), y = Array(p), T = 0; T < p; T++)
        y[T] = arguments[T + 1];
      return V(z, this._events, c, void 0, y), this;
    };
    var z = function(c, p, y, T) {
      if (c) {
        var D = c[p], O = c.all;
        D && O && (O = O.slice()), D && ke(D, T), O && ke(O, [p].concat(T));
      }
      return c;
    }, ke = function(c, p) {
      var y, T = -1, D = c.length, O = p[0], k = p[1], Z = p[2];
      switch (p.length) {
        case 0:
          for (; ++T < D; )
            (y = c[T]).callback.call(y.ctx);
          return;
        case 1:
          for (; ++T < D; )
            (y = c[T]).callback.call(y.ctx, O);
          return;
        case 2:
          for (; ++T < D; )
            (y = c[T]).callback.call(y.ctx, O, k);
          return;
        case 3:
          for (; ++T < D; )
            (y = c[T]).callback.call(y.ctx, O, k, Z);
          return;
        default:
          for (; ++T < D; )
            (y = c[T]).callback.apply(y.ctx, p);
          return;
      }
    }, j = function(c, p) {
      this.id = c._listenId, this.listener = c, this.obj = p, this.interop = !0, this.count = 0, this._events = void 0;
    };
    j.prototype.on = A.on, j.prototype.off = function(c, p) {
      var y;
      this.interop ? (this._events = V(xe, this._events, c, p, {
        context: void 0,
        listeners: void 0
      }), y = !this._events) : (this.count--, y = this.count === 0), y && this.cleanup();
    }, j.prototype.cleanup = function() {
      delete this.listener._listeningTo[this.obj._listenId], this.interop || delete this.obj._listeners[this.id];
    }, A.bind = A.on, A.unbind = A.off, s.extend(f, A);
    var Ze = f.Model = function(c, p) {
      var y = c || {};
      p || (p = {}), this.preinitialize.apply(this, arguments), this.cid = s.uniqueId(this.cidPrefix), this.attributes = {}, p.collection && (this.collection = p.collection), p.parse && (y = this.parse(y, p) || {});
      var T = s.result(this, "defaults");
      y = s.defaults(s.extend({}, T, y), T), this.set(y, p), this.changed = {}, this.initialize.apply(this, arguments);
    };
    s.extend(Ze.prototype, A, {
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
        var T;
        if (typeof c == "object" ? (T = c, y = p) : (T = {})[c] = p, y || (y = {}), !this._validate(T, y))
          return !1;
        var D = y.unset, O = y.silent, k = [], Z = this._changing;
        this._changing = !0, Z || (this._previousAttributes = s.clone(this.attributes), this.changed = {});
        var ie = this.attributes, pe = this.changed, he = this._previousAttributes;
        for (var L in T)
          p = T[L], s.isEqual(ie[L], p) || k.push(L), s.isEqual(he[L], p) ? delete pe[L] : pe[L] = p, D ? delete ie[L] : ie[L] = p;
        if (this.idAttribute in T) {
          var fe = this.id;
          this.id = this.get(this.idAttribute), this.trigger("changeId", this, fe, y);
        }
        if (!O) {
          k.length && (this._pending = y);
          for (var Be = 0; Be < k.length; Be++)
            this.trigger("change:" + k[Be], this, ie[k[Be]], y);
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
        var p = this._changing ? this._previousAttributes : this.attributes, y = {}, T;
        for (var D in c) {
          var O = c[D];
          s.isEqual(p[D], O) || (y[D] = O, T = !0);
        }
        return T ? y : !1;
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
        return c.success = function(T) {
          var D = c.parse ? p.parse(T, c) : T;
          if (!p.set(D, c))
            return !1;
          y && y.call(c.context, p, T, c), p.trigger("sync", p, T, c);
        }, nt(this, c), this.sync("read", this, c);
      },
      // Set a hash of model attributes, and sync the model to the server.
      // If the server returns an attributes hash that differs, the model's
      // state will be `set` again.
      save: function(c, p, y) {
        var T;
        c == null || typeof c == "object" ? (T = c, y = p) : (T = {})[c] = p, y = s.extend({ validate: !0, parse: !0 }, y);
        var D = y.wait;
        if (T && !D) {
          if (!this.set(T, y))
            return !1;
        } else if (!this._validate(T, y))
          return !1;
        var O = this, k = y.success, Z = this.attributes;
        y.success = function(he) {
          O.attributes = Z;
          var L = y.parse ? O.parse(he, y) : he;
          if (D && (L = s.extend({}, T, L)), L && !O.set(L, y))
            return !1;
          k && k.call(y.context, O, he, y), O.trigger("sync", O, he, y);
        }, nt(this, y), T && D && (this.attributes = s.extend({}, Z, T));
        var ie = this.isNew() ? "create" : y.patch ? "patch" : "update";
        ie === "patch" && !y.attrs && (y.attrs = T);
        var pe = this.sync(ie, this, y);
        return this.attributes = Z, pe;
      },
      // Destroy this model on the server if it was already persisted.
      // Optimistically removes the model from its collection, if it has one.
      // If `wait: true` is passed, waits for the server to respond before removal.
      destroy: function(c) {
        c = c ? s.clone(c) : {};
        var p = this, y = c.success, T = c.wait, D = function() {
          p.stopListening(), p.trigger("destroy", p, p.collection, c);
        };
        c.success = function(k) {
          T && D(), y && y.call(c.context, p, k, c), p.isNew() || p.trigger("sync", p, k, c);
        };
        var O = !1;
        return this.isNew() ? s.defer(c.success) : (nt(this, c), O = this.sync("delete", this, c)), T || D(), O;
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
    var je = f.Collection = function(c, p) {
      p || (p = {}), this.preinitialize.apply(this, arguments), p.model && (this.model = p.model), p.comparator !== void 0 && (this.comparator = p.comparator), this._reset(), this.initialize.apply(this, arguments), c && this.reset(c, s.extend({ silent: !0 }, p));
    }, Ne = { add: !0, remove: !0, merge: !0 }, sn = { add: !0, remove: !1 }, on = function(c, p, y) {
      y = Math.min(Math.max(y, 0), c.length);
      var T = Array(c.length - y), D = p.length, O;
      for (O = 0; O < T.length; O++)
        T[O] = c[O + y];
      for (O = 0; O < D; O++)
        c[O + y] = p[O];
      for (O = 0; O < T.length; O++)
        c[O + D + y] = T[O];
    };
    s.extend(je.prototype, A, {
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
        return this.set(c, s.extend({ merge: !1 }, p, sn));
      },
      // Remove a model, or a list of models from the set.
      remove: function(c, p) {
        p = s.extend({}, p);
        var y = !s.isArray(c);
        c = y ? [c] : c.slice();
        var T = this._removeModels(c, p);
        return !p.silent && T.length && (p.changes = { added: [], merged: [], removed: T }, this.trigger("update", this, p)), y ? T[0] : T;
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
          var T = p.at;
          T != null && (T = +T), T > this.length && (T = this.length), T < 0 && (T += this.length + 1);
          var D = [], O = [], k = [], Z = [], ie = {}, pe = p.add, he = p.merge, L = p.remove, fe = !1, Be = this.comparator && T == null && p.sort !== !1, Xn = s.isString(this.comparator) ? this.comparator : null, de, me;
          for (me = 0; me < c.length; me++) {
            de = c[me];
            var He = this.get(de);
            if (He) {
              if (he && de !== He) {
                var rt = this._isModel(de) ? de.attributes : de;
                p.parse && (rt = He.parse(rt, p)), He.set(rt, p), k.push(He), Be && !fe && (fe = He.hasChanged(Xn));
              }
              ie[He.cid] || (ie[He.cid] = !0, D.push(He)), c[me] = He;
            } else
              pe && (de = c[me] = this._prepareModel(de, p), de && (O.push(de), this._addReference(de, p), ie[de.cid] = !0, D.push(de)));
          }
          if (L) {
            for (me = 0; me < this.length; me++)
              de = this.models[me], ie[de.cid] || Z.push(de);
            Z.length && this._removeModels(Z, p);
          }
          var Pe = !1, it = !Be && pe && L;
          if (D.length && it ? (Pe = this.length !== D.length || s.some(this.models, function(lt, Qn) {
            return lt !== D[Qn];
          }), this.models.length = 0, on(this.models, D, 0), this.length = this.models.length) : O.length && (Be && (fe = !0), on(this.models, O, T ?? this.length), this.length = this.models.length), fe && this.sort({ silent: !0 }), !p.silent) {
            for (me = 0; me < O.length; me++)
              T != null && (p.index = T + me), de = O[me], de.trigger("add", de, this, p);
            (fe || Pe) && this.trigger("sort", this, p), (O.length || Z.length || k.length) && (p.changes = {
              added: O,
              removed: Z,
              merged: k
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
        return F.apply(this.models, arguments);
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
        return c.success = function(T) {
          var D = c.reset ? "reset" : "set";
          y[D](T, c), p && p.call(c.context, y, T, c), y.trigger("sync", y, T, c);
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
        var T = this, D = p.success;
        return p.success = function(O, k, Z) {
          y && (O.off("error", T._forwardPristineError, T), T.add(O, Z)), D && D.call(Z.context, O, k, Z);
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
        return new et(this, ln);
      },
      // Get an iterator of all [ID, model] tuples in this collection.
      entries: function() {
        return new et(this, Wn);
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
        for (var y = [], T = 0; T < c.length; T++) {
          var D = this.get(c[T]);
          if (D) {
            var O = this.indexOf(D);
            this.models.splice(O, 1), this.length--, delete this._byId[D.cid];
            var k = this.modelId(D.attributes, D.idAttribute);
            k != null && delete this._byId[k], p.silent || (p.index = O, D.trigger("remove", D, this, p)), y.push(D), this._removeReference(D, p);
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
      _onModelEvent: function(c, p, y, T) {
        if (p) {
          if ((c === "add" || c === "remove") && y !== this)
            return;
          if (c === "destroy" && this.remove(p, T), c === "changeId") {
            var D = this.modelId(p.previousAttributes(), p.idAttribute), O = this.modelId(p.attributes, p.idAttribute);
            D != null && delete this._byId[D], O != null && (this._byId[O] = p);
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
    a && (je.prototype[a] = je.prototype.values);
    var et = function(c, p) {
      this._collection = c, this._kind = p, this._index = 0;
    }, oe = 1, ln = 2, Wn = 3;
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
            this._kind === ln ? p = y : p = [y, c];
          }
          return { value: p, done: !1 };
        }
        this._collection = void 0;
      }
      return { value: void 0, done: !0 };
    };
    var fn = f.View = function(c) {
      this.cid = s.uniqueId("view"), this.preinitialize.apply(this, arguments), s.extend(this, s.pick(c, mt)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, ue = /^(\S+)\s*(.*)$/, mt = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    s.extend(fn.prototype, A, {
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
            var T = p.match(ue);
            this.delegate(T[1], T[2], y.bind(this));
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
    var jn = function(c, p, y, T) {
      switch (p) {
        case 1:
          return function() {
            return c[y](this[T]);
          };
        case 2:
          return function(D) {
            return c[y](this[T], D);
          };
        case 3:
          return function(D, O) {
            return c[y](this[T], Me(D, this), O);
          };
        case 4:
          return function(D, O, k) {
            return c[y](this[T], Me(D, this), O, k);
          };
        default:
          return function() {
            var D = F.call(arguments);
            return D.unshift(this[T]), c[y].apply(c, D);
          };
      }
    }, cn = function(c, p, y, T) {
      s.each(y, function(D, O) {
        p[O] && (c.prototype[O] = jn(p, D, O, T));
      });
    }, Me = function(c, p) {
      return s.isFunction(c) ? c : s.isObject(c) && !p._isModel(c) ? Rt(c) : s.isString(c) ? function(y) {
        return y.get(c);
      } : c;
    }, Rt = function(c) {
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
    }, hn = {
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
      [je, ot, "models"],
      [Ze, hn, "attributes"]
    ], function(c) {
      var p = c[0], y = c[1], T = c[2];
      p.mixin = function(D) {
        var O = s.reduce(s.functions(D), function(k, Z) {
          return k[Z] = 0, k;
        }, {});
        cn(p, D, O, T);
      }, cn(p, s, y, T);
    }), f.sync = function(c, p, y) {
      var T = dn[c];
      s.defaults(y || (y = {}), {
        emulateHTTP: f.emulateHTTP,
        emulateJSON: f.emulateJSON
      });
      var D = { type: T, dataType: "json" };
      if (y.url || (D.url = s.result(p, "url") || tt()), y.data == null && p && (c === "create" || c === "update" || c === "patch") && (D.contentType = "application/json", D.data = JSON.stringify(y.attrs || p.toJSON(y))), y.emulateJSON && (D.contentType = "application/x-www-form-urlencoded", D.data = D.data ? { model: D.data } : {}), y.emulateHTTP && (T === "PUT" || T === "DELETE" || T === "PATCH")) {
        D.type = "POST", y.emulateJSON && (D.data._method = T);
        var O = y.beforeSend;
        y.beforeSend = function(ie) {
          if (ie.setRequestHeader("X-HTTP-Method-Override", T), O)
            return O.apply(this, arguments);
        };
      }
      D.type !== "GET" && !y.emulateJSON && (D.processData = !1);
      var k = y.error;
      y.error = function(ie, pe, he) {
        y.textStatus = pe, y.errorThrown = he, k && k.call(y.context, ie, pe, he);
      };
      var Z = y.xhr = f.ajax(s.extend(D, y));
      return p.trigger("request", p, Z, y), Z;
    };
    var dn = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET"
    };
    f.ajax = function() {
      return f.$.ajax.apply(f.$, arguments);
    };
    var kt = f.Router = function(c) {
      c || (c = {}), this.preinitialize.apply(this, arguments), c.routes && (this.routes = c.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, Ut = /\((.*?)\)/g, pn = /(\(\?)?:\w+/g, Gn = /\*\w+/g, Bn = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    s.extend(kt.prototype, A, {
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
        var T = this;
        return f.history.route(c, function(D) {
          var O = T._extractParameters(c, D);
          T.execute(y, O, p) !== !1 && (T.trigger.apply(T, ["route:" + p].concat(O)), T.trigger("route", p, O), f.history.trigger("route", T, p, O));
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
        return c = c.replace(Bn, "\\$&").replace(Ut, "(?:$1)?").replace(pn, function(p, y) {
          return y ? p : "([^/?]+)";
        }).replace(Gn, "([^?]*?)"), new RegExp("^" + c + "(?:\\?([\\s\\S]*))?$");
      },
      // Given a route, and a URL fragment that it matches, return the array of
      // extracted decoded parameters. Empty or unmatched parameters will be
      // treated as `null` to normalize cross-browser behavior.
      _extractParameters: function(c, p) {
        var y = c.exec(p).slice(1);
        return s.map(y, function(T, D) {
          return D === y.length - 1 ? T || null : T ? decodeURIComponent(T) : null;
        });
      }
    });
    var Ge = f.History = function() {
      this.handlers = [], this.checkUrl = this.checkUrl.bind(this), typeof window < "u" && (this.location = window.location, this.history = window.history);
    }, zn = /^[#\/]|\s+$/g, gn = /^\/+|\/+$/g, Ie = /#.*$/;
    Ge.started = !1, s.extend(Ge.prototype, A, {
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
        if (Ge.started)
          throw new Error("Backbone.history has already been started");
        if (Ge.started = !0, this.options = s.extend({ root: "/" }, this.options, c), this.root = this.options.root, this._trailingSlash = this.options.trailingSlash, this._wantsHashChange = this.options.hashChange !== !1, this._hasHashChange = "onhashchange" in window && (document.documentMode === void 0 || document.documentMode > 7), this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.history && this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(gn, "/"), this._wantsHashChange && this._wantsPushState)
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
        var D = window.addEventListener || function(O, k) {
          return attachEvent("on" + O, k);
        };
        if (this._usePushState ? D("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? D("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), !this.options.silent)
          return this.loadUrl();
      },
      // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
      // but possibly useful for unit testing Routers.
      stop: function() {
        var c = window.removeEventListener || function(p, y) {
          return detachEvent("on" + p, y);
        };
        this._usePushState ? c("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && c("hashchange", this.checkUrl, !1), this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), Ge.started = !1;
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
        if (!Ge.started)
          return !1;
        (!p || p === !0) && (p = { trigger: !!p }), c = this.getFragment(c || "");
        var y = this.root;
        !this._trailingSlash && (c === "" || c.charAt(0) === "?") && (y = y.slice(0, -1) || "/");
        var T = y + c;
        c = c.replace(Ie, "");
        var D = this.decodeFragment(c);
        if (this.fragment !== D) {
          if (this.fragment = D, this._usePushState)
            this.history[p.replace ? "replaceState" : "pushState"]({}, document.title, T);
          else if (this._wantsHashChange) {
            if (this._updateHash(this.location, c, p.replace), this.iframe && c !== this.getHash(this.iframe.contentWindow)) {
              var O = this.iframe.contentWindow;
              p.replace || (O.document.open(), O.document.close()), this._updateHash(O.location, c, p.replace);
            }
          } else
            return this.location.assign(T);
          if (p.trigger)
            return this.loadUrl(c);
        }
      },
      // Update the hash location, either replacing the current entry, or adding
      // a new one to the browser history.
      _updateHash: function(c, p, y) {
        if (y) {
          var T = c.href.replace(/(javascript:|#).*$/, "");
          c.replace(T + "#" + p);
        } else
          c.hash = "#" + p;
      }
    }), f.history = new Ge();
    var Jn = function(c, p) {
      var y = this, T;
      return c && s.has(c, "constructor") ? T = c.constructor : T = function() {
        return y.apply(this, arguments);
      }, s.extend(T, y, p), T.prototype = s.create(y.prototype, c), T.prototype.constructor = T, T.__super__ = y.prototype, T;
    };
    Ze.extend = je.extend = kt.extend = fn.extend = Ge.extend = Jn;
    var tt = function() {
      throw new Error('A "url" property or function must be specified');
    }, nt = function(c, p) {
      var y = p.error;
      p.error = function(T) {
        y && y.call(p.context, c, T, p), c.trigger("error", c, T, p);
      };
    };
    return f._debug = function() {
      return { root: n, _: s };
    }, f;
  });
})(Vs);
function Ea(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Ea(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function yo(i) {
  var n = "", f, s;
  try {
    s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<a class="g-create-thumbnail" title="Create chameleon conversion of this file">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/fileListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
  } catch (d) {
    Ea(d, f, s);
  }
  return n;
}
const Sa = girder.views.widgets.FileListWidget;
girder.router;
const { wrap: bo } = girder.utilities.PluginUtils, wo = ["application/vnd.paradim.img", "application/vnd.paradim.dat", "application/vnd.paradim.raw", "application/vnd.paradim.non4d", "application/vnd.paradim.hs2", "application/vnd.paradim.emsa", "application/vnd.paradim.brml"];
bo(Sa, "render", function(i) {
  return i.call(this), this.collection.each((n) => {
    if (wo.includes(n.get("mimeType"))) {
      const f = this.$(`.g-file-actions-container[file-cid="${n.cid}"]`);
      f.length && f.prepend(yo());
    }
  }), this;
});
Sa.prototype.events["click a.g-create-thumbnail"] = function(i) {
  i.preventDefault();
  const n = On(i.currentTarget).parent().attr("file-cid"), f = this.collection.get(n);
  new Tr({
    parentView: this,
    item: this.parentItem,
    file: f
  }).executeChameleonJob();
};
function Cn(i, n, f, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), f || n.indexOf('"') === -1) ? (f && (n = Fo(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Fo(i) {
  var n = "" + i, f = xo.exec(n);
  if (!f)
    return i;
  var s, d, g, F = "";
  for (s = f.index, d = 0; s < n.length; s++) {
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
var xo = /["&<>]/;
function Aa(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Aa(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function To(i) {
  var n = "", f, s;
  try {
    var d = i || {};
    (function(g, F, A) {
      s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-flow-container">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", (function() {
        var I = A;
        if (typeof I.length == "number")
          for (var $ = 0, V = I.length; $ < V; $++) {
            var re = I[$];
            s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + Cn("g-file-id", re.id, !0, !1)) + ">", s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", F >= g.WRITE && (s = 5, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + Cn("src", re.downloadUrl(), !0, !1)) + "/></div>";
          }
        else {
          var V = 0;
          for (var $ in I) {
            V++;
            var re = I[$];
            s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<div" + (' class="g-thumbnail-container"' + Cn("g-file-id", re.id, !0, !1)) + ">", s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", F >= g.WRITE && (s = 5, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<div class="g-thumbnail-actions-container">', s = 6, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<a class="g-thumbnail-delete" title="Delete">', s = 7, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + '<i class="icon-cancel"></i></a></div>'), s = 8, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/flowView.pug", n = n + "<img" + (' class="g-thumbnail"' + Cn("src", re.downloadUrl(), !0, !1)) + "/></div>";
          }
        }
      }).call(this), n = n + "</div>";
    }).call(this, "AccessType" in d ? d.AccessType : typeof AccessType < "u" ? AccessType : void 0, "accessLevel" in d ? d.accessLevel : typeof accessLevel < "u" ? accessLevel : void 0, "thumbnails" in d ? d.thumbnails : typeof thumbnails < "u" ? thumbnails : void 0);
  } catch (g) {
    Aa(g, f, s);
  }
  return n;
}
const _o = girder.models.FileModel, Co = girder.views.View, { AccessType: Xi } = girder.constants, { confirm: Eo } = girder.dialog, So = girder.events;
var Ao = Co.extend({
  events: {
    "click .g-thumbnail-delete": function(i) {
      var n = On(i.currentTarget).parents(".g-thumbnail-container"), f = new _o({ _id: n.attr("g-file-id") });
      Eo({
        text: "Are you sure you want to delete this thumbnail?",
        yesText: "Delete",
        confirmCallback: () => {
          f.on("g:deleted", function() {
            n.remove();
          }).on("g:error", function() {
            So.trigger("g:alert", {
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
    this.thumbnails = i.thumbnails, this.accessLevel = i.accessLevel || Xi.READ;
  },
  render: function() {
    return this.$el.html(To({
      thumbnails: this.thumbnails.toArray(),
      accessLevel: this.accessLevel,
      AccessType: Xi
    })), this;
  }
});
function Da(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Da(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function Do(i) {
  var n = "", f, s;
  try {
    s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-thumbnails-header-container">', s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<div class="g-item-info-header">', s = 3, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + '<i class="icon-picture"></i>', s = 4, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemView.pug", n = n + "Chameleon Conversions</div></div>";
  } catch (d) {
    Da(d, f, s);
  }
  return n;
}
const No = girder.collections.FileCollection, Ho = girder.views.body.ItemView, { wrap: Oo } = girder.utilities.PluginUtils;
Oo(Ho, "render", function(i) {
  this.once("g:rendered", function() {
    const n = new No(
      Hn.map(this.model.get("_thumbnails"), (f) => ({ _id: f }))
    );
    n && n.length && (this.$(".g-item-info").before(Do()), new Ao({
      className: "g-thumbnails-flow-view-container",
      parentView: this,
      thumbnails: n,
      accessLevel: this.model.getAccessLevel()
    }).render().$el.insertBefore(this.$(".g-item-info")));
  }, this), i.call(this);
});
function Mo(i, n, f, s) {
  if (n === !1 || n == null || !n && (i === "class" || i === "style"))
    return "";
  if (n === !0)
    return " " + (s ? i : i + '="' + i + '"');
  var d = typeof n;
  return d !== "object" && d !== "function" || typeof n.toJSON != "function" || (n = n.toJSON()), typeof n == "string" || (n = JSON.stringify(n), f || n.indexOf('"') === -1) ? (f && (n = Io(n)), " " + i + '="' + n + '"') : " " + i + "='" + n.replace(/'/g, "&#39;") + "'";
}
function Io(i) {
  var n = "" + i, f = Po.exec(n);
  if (!f)
    return i;
  var s, d, g, F = "";
  for (s = f.index, d = 0; s < n.length; s++) {
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
function Na(i, n, f, s) {
  if (!(i instanceof Error))
    throw i;
  if (!(typeof window > "u" && n || s))
    throw i.message += " on line " + f, i;
  var d, g, F, A;
  try {
    s = s || require("fs").readFileSync(n, { encoding: "utf8" }), d = 3, g = s.split(`
`), F = Math.max(f - d, 0), A = Math.min(g.length, f + d);
  } catch (I) {
    return i.message += " - could not read from " + n + " (" + I.message + ")", void Na(i, null, f);
  }
  d = g.slice(F, A).map(function(I, $) {
    var V = $ + F + 1;
    return (V == f ? "  > " : "    ") + V + "| " + I;
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
function $o(i) {
  var n = "", f, s;
  try {
    var d = i || {};
    (function(g) {
      s = 1, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + "<a" + (' class="g-create-thumbnail"' + Mo("data-item-id", `${g ? g.id : ""}`, !0, !1) + ' title="Create chameleon conversion of this file"') + ">", s = 2, f = "/Users/petercauchy/Documents/GitHub/chameleon_plugin/girder_chameleon/web_client/templates/itemListWidgetCreateButton.pug", n = n + '<i class="icon-picture"></i></a>';
    }).call(this, "item" in d ? d.item : typeof item < "u" ? item : void 0);
  } catch (g) {
    Na(g, f, s);
  }
  return n;
}
const Ha = girder.views.widgets.ItemListWidget;
girder.router;
const { wrap: Lo } = girder.utilities.PluginUtils, Oa = girder.rest.restRequest, { FileModel: qo } = girder.models, Ro = ["application/vnd.paradim.img", "application/vnd.paradim.dat", "application/vnd.paradim.raw", "application/vnd.paradim.non4d", "application/vnd.paradim.hs2", "application/vnd.paradim.emsa", "application/vnd.paradim.brml"];
Lo(Ha, "render", function(i) {
  return i.call(this), this.$("li.g-item-list-entry").each((n, f) => {
    const s = this.collection.at(n);
    s && Oa({
      url: `item/${s.id}/files`,
      method: "GET"
    }).done((d) => {
      d.some((F) => Ro.includes(F.mimeType)) && On(f).append($o({ item: s }));
    });
  }), this;
});
Ha.prototype.events["click a.g-create-thumbnail"] = function(i) {
  i.preventDefault();
  const n = On(i.currentTarget).attr("data-item-id"), f = this.collection.find((s) => s.id === n);
  if (!f) {
    console.warn("Item not found");
    return;
  }
  Oa({
    url: `item/${n}/files`,
    method: "GET"
  }).done((s) => {
    if (!s.length) {
      console.warn("No files found for item");
      return;
    }
    const d = new qo(s[0]);
    new Tr({
      parentView: this,
      item: f,
      file: d
    }).executeChameleonJob();
  });
};
const { wrap: ko } = girder.utilities.PluginUtils, Uo = girder.views.body.ItemView;
ko(Uo, "render", function(i) {
  i.apply(this, arguments), this.$el.append('<button class="g-open-chameleon">Open Chameleon</button>'), this.$(".g-open-chameleon").on("click", () => {
    new Tr({
      item: this.model,
      // Pass the item model
      file: this.model.file
    }).render();
  });
});
//# sourceMappingURL=girder-plugin-chameleon.js.map
