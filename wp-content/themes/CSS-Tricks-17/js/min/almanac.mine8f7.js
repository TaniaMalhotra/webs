"use strict";$(".selector-list .page_item > a").each(function(l,a){var t=$(a),e=t.attr("href").split("/")[5];t.attr("id","almanac-selector-"+e)}),$("#almanac-sidebar-list > li > ul > li").each(function(l,a){0===$(a).find("ul").length&&$(a).hide()}),$("#almanac-sidebar-list > li > ul > li > a").on("click",function(l){l.preventDefault(),$(l.target).toggleClass("almanac-sidebar-link-open").closest("li").find("ul").toggle()});