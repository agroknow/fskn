(function(wndw){var jadify=function(jade){return function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){var interp;buf.push('<li><ul><li class="active"><a'),buf.push(attrs({href:"courses?search="+searchString,"class":"internal-home"},{href:!0})),buf.push(">See all results...</a></li></ul></li>"),function(){if("number"==typeof suggestions.length)for(var e=0,t=suggestions.length;t>e;e++){var r=suggestions[e];r.items.length>0&&(buf.push("<li>"),r.label&&buf.push("<h5>"+escape(null==(interp=r.label)?"":interp)+"</h5>"),buf.push("<ul>"),function(){if("number"==typeof r.items.length)for(var e=0,t=r.items.length;t>e;e++){var n=r.items[e];buf.push("<li><a"),buf.push(attrs({href:n.url,tabindex:"-1","class":"coursera-autocomplete-match-"+n.id+" "+"internal-home"},{href:!0,tabindex:!0})),buf.push(">"+(null==(interp=n.nameHilighted)?"":interp)+"</a></li>")}else{var t=0;for(var e in r.items){t++;var n=r.items[e];buf.push("<li><a"),buf.push(attrs({href:n.url,tabindex:"-1","class":"coursera-autocomplete-match-"+n.id+" "+"internal-home"},{href:!0,tabindex:!0})),buf.push(">"+(null==(interp=n.nameHilighted)?"":interp)+"</a></li>")}}}.call(this),buf.push("</ul></li>"))}else{var t=0;for(var e in suggestions){t++;var r=suggestions[e];r.items.length>0&&(buf.push("<li>"),r.label&&buf.push("<h5>"+escape(null==(interp=r.label)?"":interp)+"</h5>"),buf.push("<ul>"),function(){if("number"==typeof r.items.length)for(var e=0,t=r.items.length;t>e;e++){var n=r.items[e];buf.push("<li><a"),buf.push(attrs({href:n.url,tabindex:"-1","class":"coursera-autocomplete-match-"+n.id+" "+"internal-home"},{href:!0,tabindex:!0})),buf.push(">"+(null==(interp=n.nameHilighted)?"":interp)+"</a></li>")}else{var t=0;for(var e in r.items){t++;var n=r.items[e];buf.push("<li><a"),buf.push(attrs({href:n.url,tabindex:"-1","class":"coursera-autocomplete-match-"+n.id+" "+"internal-home"},{href:!0,tabindex:!0})),buf.push(">"+(null==(interp=n.nameHilighted)?"":interp)+"</a></li>")}}}.call(this),buf.push("</ul></li>"))}}}.call(this)}return buf.join("")}};"function"==typeof define&&define.amd?define(["js/lib/jade"],function(e){return jadify(e)}):wndw.jade.templates.frontAutocompleteEntries=jadify(wndw.jade.helpers)})(window);