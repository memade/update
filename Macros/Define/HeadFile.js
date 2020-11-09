/// <reference path="C:\Users\k34ub\AppData\Local\Microsoft\VisualStudio\16.0_435cefda\Macros\dte.js" />

function uuid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010///!@Author : Martell
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "_";
    var uuid = s.join("");
    return uuid;
}

var id = uuid();
var date = new Date();

var doc = dte.ActiveDocument;
doc.Selection.Text = "#if !defined(AFX_SK_H__" + id.toString() + "__HEAD__)";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
doc.Selection.Text = "#define AFX_SK_H__" + id.toString() + "__HEAD__";

doc.Selection.EndOfLine();
doc.Selection.NewLine();

doc.Selection.NewLine();
doc.Selection.EndOfLine();
doc.Selection.Text = "//!@ /*新生联创®（上海）*/";
doc.Selection.NewLine();
doc.Selection.EndOfLine();
doc.Selection.Text = "//!@ /*" + date.toString() + "*/";
doc.Selection.NewLine();
doc.Selection.EndOfLine();
doc.Selection.Text = "//!@ /*" + "___www.skstu.com___" + "*/";
doc.Selection.NewLine();
doc.Selection.EndOfLine();
doc.Selection.Text = "#endif /*AFX_SK_H__" + id.toString() + "__HEAD__" + "*/";
