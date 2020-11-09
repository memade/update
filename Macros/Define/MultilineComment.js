// <reference path="C:\Users\k34ub\AppData\Local\Microsoft\VisualStudio\16.0_435cefda\Macros\dte.js" />

var date = new Date();

var doc = dte.ActiveDocument;
/*
doc.Selection.Text = "//!@Author : Martell";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
*/
doc.Selection.EndOfLine();
doc.Selection.NewLine();
doc.Selection.Text = "//!签名 : ";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
/*
doc.Selection.Text = "//!@Return : ";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
*/
doc.Selection.Text = "//!说明 : ";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
doc.Selection.Text = "//!注意 : ";
doc.Selection.EndOfLine();
doc.Selection.NewLine();
doc.Selection.Text = "//!日期 : " + date.toString();
