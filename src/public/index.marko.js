// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/aprendendo-node$1.0.0/src/public/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div style=\"\r&#10;  text-align: center;\r&#10;  margin: auto auto;\r&#10;  font-size:26px;\r&#10;  position: absolute;\r&#10;top: 50%;\r&#10;left: 50%;\r&#10;margin-right: -50%;\r&#10;transform: translate(-50%, -50%)\r&#10;  \">");

  var $for$0 = 0;

  marko_forEach(data.livros, function(livro) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<p>" +
      marko_escapeXml(livro.titulo) +
      "</p>");
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/aprendendo-node$1.0.0/src/public/index.marko"
  };
