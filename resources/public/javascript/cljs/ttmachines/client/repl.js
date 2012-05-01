goog.provide('ttmachines.client.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.zip');
ttmachines.client.repl.map__GT_js = (function map__GT_js(m){
var out__19090 = cljs.core.js_obj.call(null);

var G__19091__19092 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__19091__19092))
{var G__19094__19096 = cljs.core.first.call(null,G__19091__19092);
var vec__19095__19097 = G__19094__19096;
var k__19098 = cljs.core.nth.call(null,vec__19095__19097,0,null);
var v__19099 = cljs.core.nth.call(null,vec__19095__19097,1,null);
var G__19091__19100 = G__19091__19092;

var G__19094__19101 = G__19094__19096;
var G__19091__19102 = G__19091__19100;

while(true){
var vec__19103__19104 = G__19094__19101;
var k__19105 = cljs.core.nth.call(null,vec__19103__19104,0,null);
var v__19106 = cljs.core.nth.call(null,vec__19103__19104,1,null);
var G__19091__19107 = G__19091__19102;

(out__19090[cljs.core.name.call(null,k__19105)] = v__19106);
var temp__3698__auto____19108 = cljs.core.next.call(null,G__19091__19107);

if(cljs.core.truth_(temp__3698__auto____19108))
{var G__19091__19109 = temp__3698__auto____19108;

{
var G__19110 = cljs.core.first.call(null,G__19091__19109);
var G__19111 = G__19091__19109;
G__19094__19101 = G__19110;
G__19091__19102 = G__19111;
continue;
}
} else
{}
break;
}
} else
{}
return out__19090;
});
ttmachines.client.repl.go_compile = (function go_compile(code){
var data__19112 = cljs.core.atom.call(null,null);
var params__19113 = ttmachines.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'url","﷐'data","﷐'contentType","﷐'async","﷐'type","﷐'dataType","﷐'success"],{"﷐'url":"/compile","﷐'data":cljs.core.str.call(null,"{:expr ",code,"}"),"﷐'contentType":"application/clojure; charset=utf-8","﷐'async":false,"﷐'type":"POST","﷐'dataType":"text","﷐'success":(function (p1__19089_SHARP_){
return cljs.core.reset_BANG_.call(null,data__19112,cljs.reader.read_string.call(null,p1__19089_SHARP_));
})}));

jQuery.ajax(params__19113);
return cljs.core.deref.call(null,data__19112);
});
ttmachines.client.repl.codemirrorify = (function codemirrorify(textarea_id,options){
return CodeMirror.fromTextArea(document.getElementById(textarea_id),ttmachines.client.repl.map__GT_js.call(null,options));
});
ttmachines.client.repl.make_editor = (function make_editor(){
return ttmachines.client.repl.codemirrorify.call(null,"editor-textarea",cljs.core.ObjMap.fromObject(["﷐'theme","﷐'lineNumbers","﷐'matchBrackets"],{"﷐'theme":"ambiance","﷐'lineNumbers":true,"﷐'matchBrackets":true}));
});
ttmachines.client.repl.make_result = (function make_result(){
return ttmachines.client.repl.codemirrorify.call(null,"result-textarea",cljs.core.ObjMap.fromObject(["﷐'theme","﷐'readOnly","﷐'lineWrapping"],{"﷐'theme":"ambiance","﷐'readOnly":true,"﷐'lineWrapping":true}));
});
ttmachines.client.repl.char_count = (function char_count(s,ch){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__19114_SHARP_){
return cljs.core._EQ_.call(null,p1__19114_SHARP_,ch);
}),s));
});
ttmachines.client.repl.valid_code = (function valid_code(code){
var code_char_count__19115 = cljs.core.partial.call(null,ttmachines.client.repl.char_count,code);

var and__3546__auto____19116 = cljs.core._EQ_.call(null,code_char_count__19115.call(null,"("),code_char_count__19115.call(null,")"));

if(cljs.core.truth_(and__3546__auto____19116))
{var and__3546__auto____19117 = cljs.core._EQ_.call(null,code_char_count__19115.call(null,"{"),code_char_count__19115.call(null,"}"));

if(cljs.core.truth_(and__3546__auto____19117))
{var and__3546__auto____19118 = cljs.core._EQ_.call(null,code_char_count__19115.call(null,"["),code_char_count__19115.call(null,"]"));

if(cljs.core.truth_(and__3546__auto____19118))
{return cljs.core.even_QMARK_.call(null,code_char_count__19115.call(null,"\""));
} else
{return and__3546__auto____19118;
}
} else
{return and__3546__auto____19117;
}
} else
{return and__3546__auto____19116;
}
});
ttmachines.client.repl.pre_compile = (function pre_compile(code){
return cljs.core.str.call(null,"(do ",code,")");
});
ttmachines.client.repl.evaluate = (function evaluate(code){
var compiled__19119 = ttmachines.client.repl.go_compile.call(null,code);

var temp__3695__auto____19121 = (function (){var and__3546__auto____19120 = compiled__19119;

if(cljs.core.truth_(and__3546__auto____19120))
{return "﷐'error".call(null,compiled__19119);
} else
{return and__3546__auto____19120;
}
})();

if(cljs.core.truth_(temp__3695__auto____19121))
{var err__19122 = temp__3695__auto____19121;

cljs.core.str.call(null,"Compilation error: ",err__19122);
} else
{}
try{return eval.call(null,"﷐'js".call(null,compiled__19119));
}catch (e19123){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e19123)))
{var e__19124 = e19123;

return cljs.core.str.call(null,"Compilation error: ",e__19124);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e19123;
} else
{return null;
}
}
}});
ttmachines.client.repl.show_result = (function show_result(result,res){
return result.setValue(cljs.core.pr_str.call(null,res));
});
ttmachines.client.repl.process = (function process(code,result){
var precompiled__19126 = ttmachines.client.repl.pre_compile.call(null,code);
var evaluated__19127 = ttmachines.client.repl.evaluate.call(null,precompiled__19126);

return ttmachines.client.repl.show_result.call(null,result,evaluated__19127);
});
ttmachines.client.repl.get_doc = (function get_doc(sym){
var data__19129 = cljs.core.atom.call(null,null);
var params__19130 = ttmachines.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'url","﷐'async","﷐'type","﷐'success"],{"﷐'url":cljs.core.str.call(null,"/doc/",sym),"﷐'async":true,"﷐'type":"GET","﷐'success":(function (p1__19125_SHARP_){
return ttmachines.client.repl.show_doc.call(null,p1__19125_SHARP_);
})}));

jQuery.ajax(params__19130);
return null;
});
ttmachines.client.repl.show_doc = (function show_doc(fun_doc){
var doc_name__19131 = jQuery.call(null,"#doc-name");
var doc_args__19132 = jQuery.call(null,"#doc-args");
var doc_body__19133 = jQuery.call(null,"#doc-body");

doc_name__19131.text(fun_doc.name);
doc_args__19132.html(clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__19128_SHARP_){
return cljs.core.str.call(null,"<li>",p1__19128_SHARP_,"</li>");
}),fun_doc.arglists)));
return doc_body__19133.text(fun_doc.doc);
});
ttmachines.client.repl.setup = (function setup(){
var editor__19134 = ttmachines.client.repl.make_editor.call(null);
var result__19135 = ttmachines.client.repl.make_result.call(null);
var code__19136 = cljs.core.atom.call(null,editor__19134.getValue());

cljs.core.set_validator_BANG_.call(null,code__19136,ttmachines.client.repl.valid_code);
cljs.core.add_watch.call(null,code__19136,"﷐'process",(function (key,a,old,new$){
return ttmachines.client.repl.process.call(null,new$,result__19135);
}));
editor__19134.setOption("onChange",(function (e,info){
result__19135.setValue("");
return cljs.core.reset_BANG_.call(null,code__19136,e.getValue());
}));
editor__19134.setOption("onCursorActivity",(function (e){
var selection__19137 = e.getSelection();

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",selection__19137)))
{return null;
} else
{return ttmachines.client.repl.get_doc.call(null,selection__19137);
}
}));
return cljs.core.reset_BANG_.call(null,code__19136,editor__19134.getValue());
});
goog.exportSymbol('ttmachines.client.repl.setup', ttmachines.client.repl.setup);
