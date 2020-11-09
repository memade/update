/// <reference path="C:\Users\k34ub\AppData\Local\Microsoft\VisualStudio\16.0_435cefda\Macros\dte.js" />

var date = new Date();

var doc = dte.ActiveDocument;
doc.Selection.Text = "//!说明 : \n";
doc.Selection.Text = "//!注意 : \n";
doc.Selection.Text = "//!日期 : " + date.toString();
for (var i = 0; i < 2; i++) {
    doc.Selection.LineUp();
}
doc.Selection.EndOfLine();
