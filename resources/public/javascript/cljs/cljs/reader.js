goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____20941 = reader;

if(cljs.core.truth_(and__3546__auto____20941))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____20941;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____20942 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____20942))
{return or__3548__auto____20942;
} else
{var or__3548__auto____20943 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____20943))
{return or__3548__auto____20943;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____20944 = reader;

if(cljs.core.truth_(and__3546__auto____20944))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____20944;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____20945 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____20945))
{return or__3548__auto____20945;
} else
{var or__3548__auto____20946 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____20946))
{return or__3548__auto____20946;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.unread",reader);
}
}
})().call(null,reader,ch);
}
});

/**
* @constructor
*/
cljs.reader.StringPushbackReader = (function (s,index_atom,buffer_atom){
this.s = s;
this.index_atom = index_atom;
this.buffer_atom = buffer_atom;
})
cljs.reader.StringPushbackReader.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.reader.StringPushbackReader");
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$ = true;
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$read_char = (function (reader){
var this__20947 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__20947.buffer_atom))))
{var idx__20948 = cljs.core.deref.call(null,this__20947.index_atom);

cljs.core.swap_BANG_.call(null,this__20947.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__20947.s,idx__20948);
} else
{var buf__20949 = cljs.core.deref.call(null,this__20947.buffer_atom);

cljs.core.swap_BANG_.call(null,this__20947.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__20949);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__20950 = this;
return cljs.core.swap_BANG_.call(null,this__20950.buffer_atom,(function (p1__20940_SHARP_){
return cljs.core.cons.call(null,ch,p1__20940_SHARP_);
}));
});
cljs.reader.StringPushbackReader;
cljs.reader.push_back_reader = (function push_back_reader(s){
return (new cljs.reader.StringPushbackReader(s,cljs.core.atom.call(null,0),cljs.core.atom.call(null,null)));
});
/**
* Checks whether a given character is whitespace
*/
cljs.reader.whitespace_QMARK_ = (function whitespace_QMARK_(ch){
var or__3548__auto____20951 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____20951))
{return or__3548__auto____20951;
} else
{return cljs.core._EQ_.call(null,",",ch);
}
});
/**
* Checks whether a given character is numeric
*/
cljs.reader.numeric_QMARK_ = (function numeric_QMARK_(ch){
return goog.string.isNumeric.call(null,ch);
});
/**
* Checks whether the character begins a comment.
*/
cljs.reader.comment_prefix_QMARK_ = (function comment_prefix_QMARK_(ch){
return cljs.core._EQ_.call(null,";",ch);
});
/**
* Checks whether the reader is at the start of a number literal
*/
cljs.reader.number_literal_QMARK_ = (function number_literal_QMARK_(reader,initch){
var or__3548__auto____20952 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____20952))
{return or__3548__auto____20952;
} else
{var and__3546__auto____20954 = (function (){var or__3548__auto____20953 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____20953))
{return or__3548__auto____20953;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____20954))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__20955 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__20955);
return next_ch__20955;
})());
} else
{return and__3546__auto____20954;
}
}
});
/**
* @param {...*} var_args
*/
cljs.reader.reader_error = (function() { 
var reader_error__delegate = function (rdr,msg){
throw cljs.core.apply.call(null,cljs.core.str,msg);
};
var reader_error = function (rdr,var_args){
var msg = null;
if (goog.isDef(var_args)) {
  msg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return reader_error__delegate.call(this, rdr, msg);
};
reader_error.cljs$lang$maxFixedArity = 1;
reader_error.cljs$lang$applyTo = (function (arglist__20956){
var rdr = cljs.core.first(arglist__20956);
var msg = cljs.core.rest(arglist__20956);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____20957 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____20957))
{var and__3546__auto____20958 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____20958))
{var and__3546__auto____20959 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____20959))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____20959;
}
} else
{return and__3546__auto____20958;
}
} else
{return and__3546__auto____20957;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__20960 = (new goog.string.StringBuffer(initch));
var ch__20961 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____20962 = cljs.core.nil_QMARK_.call(null,ch__20961);

if(cljs.core.truth_(or__3548__auto____20962))
{return or__3548__auto____20962;
} else
{var or__3548__auto____20963 = cljs.reader.whitespace_QMARK_.call(null,ch__20961);

if(cljs.core.truth_(or__3548__auto____20963))
{return or__3548__auto____20963;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__20961);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__20961);
return sb__20960.toString();
} else
{{
var G__20964 = (function (){sb__20960.append(ch__20961);
return sb__20960;
})();
var G__20965 = cljs.reader.read_char.call(null,rdr);
sb__20960 = G__20964;
ch__20961 = G__20965;
continue;
}
}
break;
}
});
/**
* Advances the reader to the end of a line. Returns the reader
*/
cljs.reader.skip_line = (function skip_line(reader,_){

while(true){
var ch__20966 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____20967 = cljs.core._EQ_.call(null,ch__20966,"n");

if(cljs.core.truth_(or__3548__auto____20967))
{return or__3548__auto____20967;
} else
{var or__3548__auto____20968 = cljs.core._EQ_.call(null,ch__20966,"r");

if(cljs.core.truth_(or__3548__auto____20968))
{return or__3548__auto____20968;
} else
{return cljs.core.nil_QMARK_.call(null,ch__20966);
}
}
})()))
{return reader;
} else
{{
continue;
}
}
break;
}
});
cljs.reader.int_pattern = cljs.core.re_pattern.call(null,"([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
cljs.reader.ratio_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+)/([0-9]+)");
cljs.reader.float_pattern = cljs.core.re_pattern.call(null,"([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
cljs.reader.symbol_pattern = cljs.core.re_pattern.call(null,"[:]?([^0-9/].*/)?([^0-9/][^/]*)");
cljs.reader.match_int = (function match_int(s){
var groups__20969 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__20970 = cljs.core.nth.call(null,groups__20969,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____20971 = (void 0 === group3__20970);

if(cljs.core.truth_(or__3548__auto____20971))
{return or__3548__auto____20971;
} else
{return (group3__20970.length < 1);
}
})())))
{return 0;
} else
{var negate__20973 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__20969,1)))?-1:1);
var vec__20972__20974 = (cljs.core.truth_(cljs.core.nth.call(null,groups__20969,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__20969,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__20969,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__20969,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__20969,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__20969,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__20969,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__20969,7),parseInt.call(null,cljs.core.nth.call(null,groups__20969,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__20975 = cljs.core.nth.call(null,vec__20972__20974,0,null);
var radix__20976 = cljs.core.nth.call(null,vec__20972__20974,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__20975)))
{return null;
} else
{return (negate__20973 * parseInt.call(null,n__20975,radix__20976));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__20977 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__20978 = cljs.core.nth.call(null,groups__20977,1);
var denominator__20979 = cljs.core.nth.call(null,groups__20977,2);

return (parseInt.call(null,numinator__20978) / parseInt.call(null,denominator__20979));
});
cljs.reader.match_float = (function match_float(s){
return parseFloat.call(null,s);
});
cljs.reader.match_number = (function match_number(s){
if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.int_pattern,s)))
{return cljs.reader.match_int.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.ratio_pattern,s)))
{return cljs.reader.match_ratio.call(null,s);
} else
{if(cljs.core.truth_(cljs.core.re_matches.call(null,cljs.reader.float_pattern,s)))
{return cljs.reader.match_float.call(null,s);
} else
{return null;
}
}
}
});
cljs.reader.escape_char_map = cljs.core.HashMap.fromArrays(["t","r","n","\\","\"","b","f"],["\t","\r","\n","\\","\"","\b","\f"]);
cljs.reader.read_unicode_char = (function read_unicode_char(reader,initch){
return cljs.reader.reader_error.call(null,reader,"Unicode characters not supported by reader (yet)");
});
cljs.reader.escape_char = (function escape_char(buffer,reader){
var ch__20980 = cljs.reader.read_char.call(null,reader);
var mapresult__20981 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__20980);

if(cljs.core.truth_(mapresult__20981))
{return mapresult__20981;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____20982 = cljs.core._EQ_.call(null,"u",ch__20980);

if(cljs.core.truth_(or__3548__auto____20982))
{return or__3548__auto____20982;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__20980);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__20980);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__20980);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__20983 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__20983)))
{{
var G__20984 = cljs.reader.read_char.call(null,rdr);
ch__20983 = G__20984;
continue;
}
} else
{return ch__20983;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__20985 = cljs.core.Vector.fromArray([]);

while(true){
var ch__20986 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__20986))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__20986)))
{return a__20985;
} else
{var temp__3695__auto____20987 = cljs.core.get.call(null,cljs.reader.macros,ch__20986);

if(cljs.core.truth_(temp__3695__auto____20987))
{var macrofn__20988 = temp__3695__auto____20987;

var mret__20989 = macrofn__20988.call(null,rdr,ch__20986);

{
var G__20991 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__20989,rdr))?a__20985:cljs.core.conj.call(null,a__20985,mret__20989));
a__20985 = G__20991;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__20986);
var o__20990 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__20992 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__20990,rdr))?a__20985:cljs.core.conj.call(null,a__20985,o__20990));
a__20985 = G__20992;
continue;
}
}
}
break;
}
});
cljs.reader.not_implemented = (function not_implemented(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Reader for ",ch," not implemented yet");
});
cljs.reader.read_dispatch = (function read_dispatch(rdr,_){
var ch__20993 = cljs.reader.read_char.call(null,rdr);
var dm__20994 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__20993);

if(cljs.core.truth_(dm__20994))
{return dm__20994.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__20993);
}
});
cljs.reader.read_unmatched_delimiter = (function read_unmatched_delimiter(rdr,ch){
return cljs.reader.reader_error.call(null,rdr,"Unmached delimiter ",ch);
});
cljs.reader.read_list = (function read_list(rdr,_){
return cljs.core.apply.call(null,cljs.core.list,cljs.reader.read_delimited_list.call(null,")",rdr,true));
});
cljs.reader.read_comment = cljs.reader.skip_line;
cljs.reader.read_vector = (function read_vector(rdr,_){
return cljs.reader.read_delimited_list.call(null,"]",rdr,true);
});
cljs.reader.read_map = (function read_map(rdr,_){
var l__20995 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__20995))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__20995);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__20996 = (new goog.string.StringBuffer(initch));
var ch__20997 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____20998 = cljs.core.nil_QMARK_.call(null,ch__20997);

if(cljs.core.truth_(or__3548__auto____20998))
{return or__3548__auto____20998;
} else
{var or__3548__auto____20999 = cljs.reader.whitespace_QMARK_.call(null,ch__20997);

if(cljs.core.truth_(or__3548__auto____20999))
{return or__3548__auto____20999;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__20997);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__20997);
var s__21000 = buffer__20996.toString();

var or__3548__auto____21001 = cljs.reader.match_number.call(null,s__21000);

if(cljs.core.truth_(or__3548__auto____21001))
{return or__3548__auto____21001;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__21000,"]");
}
} else
{{
var G__21002 = (function (){buffer__20996.append(ch__20997);
return buffer__20996;
})();
var G__21003 = cljs.reader.read_char.call(null,reader);
buffer__20996 = G__21002;
ch__20997 = G__21003;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__21004 = (new goog.string.StringBuffer());
var ch__21005 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__21005)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__21005)))
{{
var G__21006 = (function (){buffer__21004.append(cljs.reader.escape_char.call(null,buffer__21004,reader));
return buffer__21004;
})();
var G__21007 = cljs.reader.read_char.call(null,reader);
buffer__21004 = G__21006;
ch__21005 = G__21007;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__21005)))
{return buffer__21004.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__21008 = (function (){buffer__21004.append(ch__21005);
return buffer__21004;
})();
var G__21009 = cljs.reader.read_char.call(null,reader);
buffer__21004 = G__21008;
ch__21005 = G__21009;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
cljs.reader.special_symbols = cljs.core.ObjMap.fromObject(["nil","true","false"],{"nil":null,"true":true,"false":false});
cljs.reader.read_symbol = (function read_symbol(reader,initch){
var token__21010 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__21010,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__21010,0,token__21010.indexOf("/")),cljs.core.subs.call(null,token__21010,(token__21010.indexOf("/") + 1),token__21010.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__21010,cljs.core.symbol.call(null,token__21010));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__21012 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__21011__21013 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__21012);
var token__21014 = cljs.core.nth.call(null,vec__21011__21013,0,null);
var ns__21015 = cljs.core.nth.call(null,vec__21011__21013,1,null);
var name__21016 = cljs.core.nth.call(null,vec__21011__21013,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____21018 = (function (){var and__3546__auto____21017 = cljs.core.not.call(null,(void 0 === ns__21015));

if(cljs.core.truth_(and__3546__auto____21017))
{return (ns__21015.substring((ns__21015.length - 2),ns__21015.length) === ":/");
} else
{return and__3546__auto____21017;
}
})();

if(cljs.core.truth_(or__3548__auto____21018))
{return or__3548__auto____21018;
} else
{var or__3548__auto____21019 = ((name__21016[(name__21016.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____21019))
{return or__3548__auto____21019;
} else
{return cljs.core.not.call(null,(token__21014.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__21014);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__21015.substring(0,ns__21015.indexOf("/")),name__21016);
} else
{return cljs.core.keyword.call(null,token__21014);
}
}
});
cljs.reader.desugar_meta = (function desugar_meta(f){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,f)))
{return cljs.core.ObjMap.fromObject(["﷐'tag"],{"﷐'tag":f});
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,f)))
{return cljs.core.HashMap.fromArrays([f],[true]);
} else
{if(cljs.core.truth_("﷐'else"))
{return f;
} else
{return null;
}
}
}
}
});
cljs.reader.wrapping_reader = (function wrapping_reader(sym){
return (function (rdr,_){
return cljs.core.list.call(null,sym,cljs.reader.read.call(null,rdr,true,null,true));
});
});
cljs.reader.throwing_reader = (function throwing_reader(msg){
return (function (rdr,_){
return cljs.reader.reader_error.call(null,rdr,msg);
});
});
cljs.reader.read_meta = (function read_meta(rdr,_){
var m__21020 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__21020)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__21021 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__445__auto____21022 = o__21021;

if(cljs.core.truth_((function (){var and__3546__auto____21023 = x__445__auto____21022;

if(cljs.core.truth_(and__3546__auto____21023))
{var and__3546__auto____21024 = x__445__auto____21022.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____21024))
{return cljs.core.not.call(null,x__445__auto____21022.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____21024;
}
} else
{return and__3546__auto____21023;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__445__auto____21022);
}
})()))
{return cljs.core.with_meta.call(null,o__21021,cljs.core.merge.call(null,cljs.core.meta.call(null,o__21021),m__21020));
} else
{return cljs.reader.reader_error.call(null,rdr,"Metadata can only be applied to IWithMetas");
}
});
cljs.reader.read_set = (function read_set(rdr,_){
return cljs.core.set.call(null,cljs.reader.read_delimited_list.call(null,"}",rdr,true));
});
cljs.reader.read_regex = (function read_regex(rdr,ch){
return cljs.core.re_pattern.call(null,cljs.reader.read_string.call(null,rdr,ch));
});
cljs.reader.read_discard = (function read_discard(rdr,_){
cljs.reader.read.call(null,rdr,true,null,true);
return rdr;
});
cljs.reader.macros = cljs.core.HashMap.fromArrays(["@","`","\"","#","%","'","(",")",":",";","[","{","\\","]","}","^","~"],[cljs.reader.wrapping_reader.call(null,"﷑'deref"),cljs.reader.not_implemented,cljs.reader.read_string,cljs.reader.read_dispatch,cljs.reader.not_implemented,cljs.reader.wrapping_reader.call(null,"﷑'quote"),cljs.reader.read_list,cljs.reader.read_unmatched_delimiter,cljs.reader.read_keyword,cljs.reader.not_implemented,cljs.reader.read_vector,cljs.reader.read_map,cljs.reader.read_char,cljs.reader.read_unmatched_delimiter,cljs.reader.read_unmatched_delimiter,cljs.reader.read_meta,cljs.reader.not_implemented]);
cljs.reader.dispatch_macros = cljs.core.ObjMap.fromObject(["{","<","\"","!","_"],{"{":cljs.reader.read_set,"<":cljs.reader.throwing_reader.call(null,"Unreadable form"),"\"":cljs.reader.read_regex,"!":cljs.reader.read_comment,"_":cljs.reader.read_discard});
/**
* Reads the first object from a PushbackReader. Returns the object read.
* If EOF, throws if eof-is-error is true. Otherwise returns sentinel.
*/
cljs.reader.read = (function read(reader,eof_is_error,sentinel,is_recursive){
while(true){
var ch__21025 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__21025)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__21025)))
{{
var G__21027 = reader;
var G__21028 = eof_is_error;
var G__21029 = sentinel;
var G__21030 = is_recursive;
reader = G__21027;
eof_is_error = G__21028;
sentinel = G__21029;
is_recursive = G__21030;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__21025)))
{{
var G__21031 = cljs.reader.read_comment.call(null,reader,ch__21025);
var G__21032 = eof_is_error;
var G__21033 = sentinel;
var G__21034 = is_recursive;
reader = G__21031;
eof_is_error = G__21032;
sentinel = G__21033;
is_recursive = G__21034;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__21026 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__21025))?cljs.reader.macros.call(null,ch__21025).call(null,reader,ch__21025):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__21025))?cljs.reader.read_number.call(null,reader,ch__21025):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__21025):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__21026,reader)))
{{
var G__21035 = reader;
var G__21036 = eof_is_error;
var G__21037 = sentinel;
var G__21038 = is_recursive;
reader = G__21035;
eof_is_error = G__21036;
sentinel = G__21037;
is_recursive = G__21038;
continue;
}
} else
{return res__21026;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* Reads one object from the string s
*/
cljs.reader.read_string = (function read_string(s){
var r__21039 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__21039,true,null,false);
});
