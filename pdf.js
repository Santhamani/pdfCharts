var wkhtmltopdf = require('wkhtmltopdf');
var fs = require("fs");

wkhtmltopdf(fs.readFileSync("barchart.html", "utf8"), {
  javascriptDelay: 1000,
    output: 'demo.pdf',
    pageSize: 'letter'
});
