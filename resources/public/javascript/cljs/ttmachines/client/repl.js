goog.provide('ttmachines.client.repl');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('clojure.zip');
ttmachines.client.repl.map__GT_js = (function map__GT_js(m){
var out__2980 = cljs.core.js_obj.call(null);

var G__2981__2982 = cljs.core.seq.call(null,m);

if(cljs.core.truth_(G__2981__2982))
{var G__2984__2986 = cljs.core.first.call(null,G__2981__2982);
var vec__2985__2987 = G__2984__2986;
var k__2988 = cljs.core.nth.call(null,vec__2985__2987,0,null);
var v__2989 = cljs.core.nth.call(null,vec__2985__2987,1,null);
var G__2981__2990 = G__2981__2982;

var G__2984__2991 = G__2984__2986;
var G__2981__2992 = G__2981__2990;

while(true){
var vec__2993__2994 = G__2984__2991;
var k__2995 = cljs.core.nth.call(null,vec__2993__2994,0,null);
var v__2996 = cljs.core.nth.call(null,vec__2993__2994,1,null);
var G__2981__2997 = G__2981__2992;

(out__2980[cljs.core.name.call(null,k__2995)] = v__2996);
var temp__3698__auto____2998 = cljs.core.next.call(null,G__2981__2997);

if(cljs.core.truth_(temp__3698__auto____2998))
{var G__2981__2999 = temp__3698__auto____2998;

{
var G__3000 = cljs.core.first.call(null,G__2981__2999);
var G__3001 = G__2981__2999;
G__2984__2991 = G__3000;
G__2981__2992 = G__3001;
continue;
}
} else
{}
break;
}
} else
{}
return out__2980;
});
ttmachines.client.repl.go_compile = (function go_compile(code){
var data__3002 = cljs.core.atom.call(null,null);
var params__3003 = ttmachines.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'url","﷐'data","﷐'contentType","﷐'async","﷐'type","﷐'dataType","﷐'success"],{"﷐'url":"/compile","﷐'data":cljs.core.str.call(null,"{:expr ",code,"}"),"﷐'contentType":"application/clojure; charset=utf-8","﷐'async":false,"﷐'type":"POST","﷐'dataType":"text","﷐'success":(function (p1__2979_SHARP_){
return cljs.core.reset_BANG_.call(null,data__3002,cljs.reader.read_string.call(null,p1__2979_SHARP_));
})}));

jQuery.ajax(params__3003);
return cljs.core.deref.call(null,data__3002);
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
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__3004_SHARP_){
return cljs.core._EQ_.call(null,p1__3004_SHARP_,ch);
}),s));
});
ttmachines.client.repl.valid_code = (function valid_code(code){
var code_char_count__3005 = cljs.core.partial.call(null,ttmachines.client.repl.char_count,code);

var and__3546__auto____3006 = cljs.core._EQ_.call(null,code_char_count__3005.call(null,"("),code_char_count__3005.call(null,")"));

if(cljs.core.truth_(and__3546__auto____3006))
{var and__3546__auto____3007 = cljs.core._EQ_.call(null,code_char_count__3005.call(null,"{"),code_char_count__3005.call(null,"}"));

if(cljs.core.truth_(and__3546__auto____3007))
{var and__3546__auto____3008 = cljs.core._EQ_.call(null,code_char_count__3005.call(null,"["),code_char_count__3005.call(null,"]"));

if(cljs.core.truth_(and__3546__auto____3008))
{return cljs.core.even_QMARK_.call(null,code_char_count__3005.call(null,"\""));
} else
{return and__3546__auto____3008;
}
} else
{return and__3546__auto____3007;
}
} else
{return and__3546__auto____3006;
}
});
ttmachines.client.repl.pre_compile = (function pre_compile(code){
return cljs.core.str.call(null,"(do ",code,")");
});
ttmachines.client.repl.evaluate = (function evaluate(code){
var compiled__3009 = ttmachines.client.repl.go_compile.call(null,code);

var temp__3695__auto____3011 = (function (){var and__3546__auto____3010 = compiled__3009;

if(cljs.core.truth_(and__3546__auto____3010))
{return "﷐'error".call(null,compiled__3009);
} else
{return and__3546__auto____3010;
}
})();

if(cljs.core.truth_(temp__3695__auto____3011))
{var err__3012 = temp__3695__auto____3011;

cljs.core.str.call(null,"Compilation error: ",err__3012);
} else
{}
try{return eval.call(null,"﷐'js".call(null,compiled__3009));
}catch (e3013){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Error,e3013)))
{var e__3014 = e3013;

return cljs.core.str.call(null,"Compilation error: ",e__3014);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e3013;
} else
{return null;
}
}
}});
ttmachines.client.repl.show_result = (function show_result(result,res){
return result.setValue(cljs.core.pr_str.call(null,res));
});
ttmachines.client.repl.process = (function process(code,result){
var precompiled__3016 = ttmachines.client.repl.pre_compile.call(null,code);
var evaluated__3017 = ttmachines.client.repl.evaluate.call(null,precompiled__3016);

return ttmachines.client.repl.show_result.call(null,result,evaluated__3017);
});
ttmachines.client.repl.get_doc = (function get_doc(sym){
var data__3019 = cljs.core.atom.call(null,null);
var params__3020 = ttmachines.client.repl.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["﷐'url","﷐'async","﷐'type","﷐'success"],{"﷐'url":cljs.core.str.call(null,"/doc/",sym),"﷐'async":true,"﷐'type":"GET","﷐'success":(function (p1__3015_SHARP_){
return ttmachines.client.repl.show_doc.call(null,p1__3015_SHARP_);
})}));

jQuery.ajax(params__3020);
return null;
});
ttmachines.client.repl.show_doc = (function show_doc(fun_doc){
var doc_name__3021 = jQuery.call(null,"#doc-name");
var doc_args__3022 = jQuery.call(null,"#doc-args");
var doc_body__3023 = jQuery.call(null,"#doc-body");

doc_name__3021.text(fun_doc.name);
doc_args__3022.html(clojure.string.join.call(null,cljs.core.map.call(null,(function (p1__3018_SHARP_){
return cljs.core.str.call(null,"<li>",p1__3018_SHARP_,"</li>");
}),fun_doc.arglists)));
return doc_body__3023.text(fun_doc.doc);
});
ttmachines.client.repl.setup = (function setup(){
var editor__3024 = ttmachines.client.repl.make_editor.call(null);
var result__3025 = ttmachines.client.repl.make_result.call(null);
var code__3026 = cljs.core.atom.call(null,editor__3024.getValue());

cljs.core.set_validator_BANG_.call(null,code__3026,ttmachines.client.repl.valid_code);
cljs.core.add_watch.call(null,code__3026,"﷐'process",(function (key,a,old,new$){
return ttmachines.client.repl.process.call(null,new$,result__3025);
}));
editor__3024.setOption("onChange",(function (e,info){
var editor_val__3027 = e.getValue();

return setTimeout.call(null,(function (){
if(cljs.core.truth_(cljs.core._EQ_.call(null,e.getValue(),editor_val__3027)))
{result__3025.setValue("");
return cljs.core.reset_BANG_.call(null,code__3026,editor_val__3027);
} else
{return null;
}
}),300);
}));
editor__3024.setOption("onCursorActivity",(function (e){
var selection__3028 = e.getSelection();

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",selection__3028)))
{return null;
} else
{return ttmachines.client.repl.get_doc.call(null,selection__3028);
}
}));
return cljs.core.reset_BANG_.call(null,code__3026,editor__3024.getValue());
});
goog.exportSymbol('ttmachines.client.repl.setup', ttmachines.client.repl.setup);
