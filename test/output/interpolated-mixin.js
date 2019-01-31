function pug_attr(t, e, n, r) {
    if (!1 === e || null == e || !e && ("class" === t || "style" === t)) return "";
    if (!0 === e) return " " + (r ? t : t + '="' + t + '"');
    var f = typeof e;
    return "object" !== f && "function" !== f || "function" != typeof e.toJSON || (e = e.toJSON()), 
    "string" == typeof e || (e = JSON.stringify(e), n || -1 === e.indexOf('"')) ? (n && (e = pug_escape(e)), 
    " " + t + '="' + e + '"') : " " + t + "='" + e.replace(/'/g, "&#39;") + "'";
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

var pug_match_html = /["&<>]/;

function template(locals) {
    var pug_html = "", pug_mixins = {}, pug_interp;
    pug_mixins["linkit"] = pug_interp = function(url) {
        var block = this && this.block, attributes = this && this.attributes || {};
        pug_html = pug_html + "<a" + pug_attr("href", url, true, false) + ">" + pug_escape(null == (pug_interp = url) ? "" : pug_interp) + "</a>";
    };
    pug_html = pug_html + "<p>This also works ";
    pug_mixins["linkit"]("http://www.bing.com");
    pug_html = pug_html + " so hurrah for Pug</p>";
    return pug_html;
}