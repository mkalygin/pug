function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), 
    "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), 
    " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
}

function pug_attrs(t, r) {
    var a = "";
    for (var s in t) if (pug_has_own_property.call(t, s)) {
        var u = t[s];
        if ("class" === s) {
            u = pug_classes(u), a = pug_attr(s, u, !1, r) + a;
            continue;
        }
        "style" === s && (u = pug_style(u)), a += pug_attr(s, u, !1, r);
    }
    return a;
}

function pug_classes(s, r) {
    return Array.isArray(s) ? pug_classes_array(s, r) : s && "object" == typeof s ? pug_classes_object(s) : s || "";
}

function pug_classes_array(r, a) {
    for (var s, e = "", u = "", c = Array.isArray(a), g = 0; g < r.length; g++) (s = pug_classes(r[g])) && (c && a[g] && (s = pug_escape(s)), 
    e = e + u + s, u = " ");
    return e;
}

function pug_classes_object(r) {
    var a = "", n = "";
    for (var o in r) o && r[o] && pug_has_own_property.call(r, o) && (a = a + n + o, 
    n = " ");
    return a;
}

function pug_escape(e) {
    var a = "" + e, t = pug_match_html.exec(a);
    if (!t) return e;
    var r, c, n, s = "";
    for (r = t.index, c = 0; r < a.length; r++) {
        switch (a.charCodeAt(r)) {
          case 34:
            n = "&quot;";
            break;

          case 38:
            n = "&amp;";
            break;

          case 60:
            n = "&lt;";
            break;

          case 62:
            n = "&gt;";
            break;

          default:
            continue;
        }
        c !== r && (s += a.substring(c, r)), c = r + 1, s += n;
    }
    return c !== r ? s + a.substring(c, r) : s;
}

var pug_has_own_property = Object.prototype.hasOwnProperty;

var pug_match_html = /["&<>]/;

function pug_style(r) {
    if (!r) return "";
    if ("object" == typeof r) {
        var t = "";
        for (var e in r) pug_has_own_property.call(r, e) && (t = t + e + ":" + r[e] + ";");
        return t;
    }
    return r + "";
}

function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    var locals_for_with = locals || {};
    (function(Date) {
        pug_html = pug_html + '<a href="/contact">contact</a><a class="button" href="/save">save</a><a' + (pug_attr("foo", true, true, false) + pug_attr("bar", true, true, false) + pug_attr("baz", true, true, false)) + '></a><a foo="foo, bar, baz" bar="1"></a><a foo="((foo))" bar="1"></a><select><option' + (' value="foo"' + pug_attr("selected", true, true, false)) + ">Foo</option><option" + (pug_attr("selected", true, true, false) + ' value="bar"') + '>Bar</option></select><a foo="class:"></a><input pattern="\\S+"/><a href="/contact">contact</a><a class="button" href="/save">save</a><a' + (pug_attr("foo", true, true, false) + pug_attr("bar", true, true, false) + pug_attr("baz", true, true, false)) + '></a><a foo="foo, bar, baz" bar="1"></a><a foo="((foo))" bar="1"></a><select><option' + (' value="foo"' + pug_attr("selected", true, true, false)) + ">Foo</option><option" + (pug_attr("selected", true, true, false) + ' value="bar"') + '>Bar</option></select><a foo="class:"></a><input pattern="\\S+"/><foo terse="true"></foo><foo' + pug_attr("date", new Date(0), true, false) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo><foo" + (pug_attr("abc", true, true, false) + pug_attr("def", true, true, false)) + "></foo>";
        var attrs = {
            foo: "bar",
            bar: "<baz>"
        };
        pug_html = pug_html + "<div" + pug_attrs(attrs, false) + '></div><a foo="foo" bar="bar"></a><a foo="foo" bar="bar"></a>';
    }).call(this, "Date" in locals_for_with ? locals_for_with.Date : typeof Date !== "undefined" ? Date : undefined);
    return pug_html;
}