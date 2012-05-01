goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.string');
cljs.reader.PushbackReader = {};
cljs.reader.read_char = (function read_char(reader){
if(cljs.core.truth_((function (){var and__3546__auto____4832 = reader;

if(cljs.core.truth_(and__3546__auto____4832))
{return reader.cljs$reader$PushbackReader$read_char;
} else
{return and__3546__auto____4832;
}
})()))
{return reader.cljs$reader$PushbackReader$read_char(reader);
} else
{return (function (){var or__3548__auto____4833 = (cljs.reader.read_char[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4833))
{return or__3548__auto____4833;
} else
{var or__3548__auto____4834 = (cljs.reader.read_char["_"]);

if(cljs.core.truth_(or__3548__auto____4834))
{return or__3548__auto____4834;
} else
{throw cljs.core.missing_protocol.call(null,"PushbackReader.read-char",reader);
}
}
})().call(null,reader);
}
});
cljs.reader.unread = (function unread(reader,ch){
if(cljs.core.truth_((function (){var and__3546__auto____4835 = reader;

if(cljs.core.truth_(and__3546__auto____4835))
{return reader.cljs$reader$PushbackReader$unread;
} else
{return and__3546__auto____4835;
}
})()))
{return reader.cljs$reader$PushbackReader$unread(reader,ch);
} else
{return (function (){var or__3548__auto____4836 = (cljs.reader.unread[goog.typeOf.call(null,reader)]);

if(cljs.core.truth_(or__3548__auto____4836))
{return or__3548__auto____4836;
} else
{var or__3548__auto____4837 = (cljs.reader.unread["_"]);

if(cljs.core.truth_(or__3548__auto____4837))
{return or__3548__auto____4837;
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
var this__4838 = this;
if(cljs.core.truth_(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,this__4838.buffer_atom))))
{var idx__4839 = cljs.core.deref.call(null,this__4838.index_atom);

cljs.core.swap_BANG_.call(null,this__4838.index_atom,cljs.core.inc);
return cljs.core.nth.call(null,this__4838.s,idx__4839);
} else
{var buf__4840 = cljs.core.deref.call(null,this__4838.buffer_atom);

cljs.core.swap_BANG_.call(null,this__4838.buffer_atom,cljs.core.rest);
return cljs.core.first.call(null,buf__4840);
}
});
cljs.reader.StringPushbackReader.prototype.cljs$reader$PushbackReader$unread = (function (reader,ch){
var this__4841 = this;
return cljs.core.swap_BANG_.call(null,this__4841.buffer_atom,(function (p1__4831_SHARP_){
return cljs.core.cons.call(null,ch,p1__4831_SHARP_);
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
var or__3548__auto____4842 = goog.string.isBreakingWhitespace.call(null,ch);

if(cljs.core.truth_(or__3548__auto____4842))
{return or__3548__auto____4842;
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
var or__3548__auto____4843 = cljs.reader.numeric_QMARK_.call(null,initch);

if(cljs.core.truth_(or__3548__auto____4843))
{return or__3548__auto____4843;
} else
{var and__3546__auto____4845 = (function (){var or__3548__auto____4844 = cljs.core._EQ_.call(null,"+",initch);

if(cljs.core.truth_(or__3548__auto____4844))
{return or__3548__auto____4844;
} else
{return cljs.core._EQ_.call(null,"-",initch);
}
})();

if(cljs.core.truth_(and__3546__auto____4845))
{return cljs.reader.numeric_QMARK_.call(null,(function (){var next_ch__4846 = cljs.reader.read_char.call(null,reader);

cljs.reader.unread.call(null,reader,next_ch__4846);
return next_ch__4846;
})());
} else
{return and__3546__auto____4845;
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
reader_error.cljs$lang$applyTo = (function (arglist__4847){
var rdr = cljs.core.first(arglist__4847);
var msg = cljs.core.rest(arglist__4847);
return reader_error__delegate.call(this, rdr, msg);
});
return reader_error;
})()
;
cljs.reader.macro_terminating_QMARK_ = (function macro_terminating_QMARK_(ch){
var and__3546__auto____4848 = cljs.core.not_EQ_.call(null,ch,"#");

if(cljs.core.truth_(and__3546__auto____4848))
{var and__3546__auto____4849 = cljs.core.not_EQ_.call(null,ch,"'");

if(cljs.core.truth_(and__3546__auto____4849))
{var and__3546__auto____4850 = cljs.core.not_EQ_.call(null,ch,":");

if(cljs.core.truth_(and__3546__auto____4850))
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch);
} else
{return and__3546__auto____4850;
}
} else
{return and__3546__auto____4849;
}
} else
{return and__3546__auto____4848;
}
});
cljs.reader.read_token = (function read_token(rdr,initch){
var sb__4851 = (new goog.string.StringBuffer(initch));
var ch__4852 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4853 = cljs.core.nil_QMARK_.call(null,ch__4852);

if(cljs.core.truth_(or__3548__auto____4853))
{return or__3548__auto____4853;
} else
{var or__3548__auto____4854 = cljs.reader.whitespace_QMARK_.call(null,ch__4852);

if(cljs.core.truth_(or__3548__auto____4854))
{return or__3548__auto____4854;
} else
{return cljs.reader.macro_terminating_QMARK_.call(null,ch__4852);
}
}
})()))
{cljs.reader.unread.call(null,rdr,ch__4852);
return sb__4851.toString();
} else
{{
var G__4855 = (function (){sb__4851.append(ch__4852);
return sb__4851;
})();
var G__4856 = cljs.reader.read_char.call(null,rdr);
sb__4851 = G__4855;
ch__4852 = G__4856;
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
var ch__4857 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_((function (){var or__3548__auto____4858 = cljs.core._EQ_.call(null,ch__4857,"n");

if(cljs.core.truth_(or__3548__auto____4858))
{return or__3548__auto____4858;
} else
{var or__3548__auto____4859 = cljs.core._EQ_.call(null,ch__4857,"r");

if(cljs.core.truth_(or__3548__auto____4859))
{return or__3548__auto____4859;
} else
{return cljs.core.nil_QMARK_.call(null,ch__4857);
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
var groups__4860 = cljs.core.re_find.call(null,cljs.reader.int_pattern,s);
var group3__4861 = cljs.core.nth.call(null,groups__4860,2);

if(cljs.core.truth_(cljs.core.not.call(null,(function (){var or__3548__auto____4862 = (void 0 === group3__4861);

if(cljs.core.truth_(or__3548__auto____4862))
{return or__3548__auto____4862;
} else
{return (group3__4861.length < 1);
}
})())))
{return 0;
} else
{var negate__4864 = (cljs.core.truth_(cljs.core._EQ_.call(null,"-",cljs.core.nth.call(null,groups__4860,1)))?-1:1);
var vec__4863__4865 = (cljs.core.truth_(cljs.core.nth.call(null,groups__4860,3))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4860,3),10]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4860,4))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4860,4),16]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4860,5))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4860,5),8]):(cljs.core.truth_(cljs.core.nth.call(null,groups__4860,7))?cljs.core.Vector.fromArray([cljs.core.nth.call(null,groups__4860,7),parseInt.call(null,cljs.core.nth.call(null,groups__4860,7))]):(cljs.core.truth_("﷐'default")?cljs.core.Vector.fromArray([null,null]):null)))));
var n__4866 = cljs.core.nth.call(null,vec__4863__4865,0,null);
var radix__4867 = cljs.core.nth.call(null,vec__4863__4865,1,null);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,n__4866)))
{return null;
} else
{return (negate__4864 * parseInt.call(null,n__4866,radix__4867));
}
}
});
cljs.reader.match_ratio = (function match_ratio(s){
var groups__4868 = cljs.core.re_find.call(null,cljs.reader.ratio_pattern,s);
var numinator__4869 = cljs.core.nth.call(null,groups__4868,1);
var denominator__4870 = cljs.core.nth.call(null,groups__4868,2);

return (parseInt.call(null,numinator__4869) / parseInt.call(null,denominator__4870));
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
var ch__4871 = cljs.reader.read_char.call(null,reader);
var mapresult__4872 = cljs.core.get.call(null,cljs.reader.escape_char_map,ch__4871);

if(cljs.core.truth_(mapresult__4872))
{return mapresult__4872;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____4873 = cljs.core._EQ_.call(null,"u",ch__4871);

if(cljs.core.truth_(or__3548__auto____4873))
{return or__3548__auto____4873;
} else
{return cljs.reader.numeric_QMARK_.call(null,ch__4871);
}
})()))
{return cljs.reader.read_unicode_char.call(null,reader,ch__4871);
} else
{return cljs.reader.reader_error.call(null,reader,"Unsupported escape charater: \\",ch__4871);
}
}
});
/**
* Read until first character that doesn't match pred, returning
* char.
*/
cljs.reader.read_past = (function read_past(pred,rdr){
var ch__4874 = cljs.reader.read_char.call(null,rdr);

while(true){
if(cljs.core.truth_(pred.call(null,ch__4874)))
{{
var G__4875 = cljs.reader.read_char.call(null,rdr);
ch__4874 = G__4875;
continue;
}
} else
{return ch__4874;
}
break;
}
});
cljs.reader.read_delimited_list = (function read_delimited_list(delim,rdr,recursive_QMARK_){
var a__4876 = cljs.core.Vector.fromArray([]);

while(true){
var ch__4877 = cljs.reader.read_past.call(null,cljs.reader.whitespace_QMARK_,rdr);

if(cljs.core.truth_(ch__4877))
{} else
{cljs.reader.reader_error.call(null,rdr,"EOF");
}
if(cljs.core.truth_(cljs.core._EQ_.call(null,delim,ch__4877)))
{return a__4876;
} else
{var temp__3695__auto____4878 = cljs.core.get.call(null,cljs.reader.macros,ch__4877);

if(cljs.core.truth_(temp__3695__auto____4878))
{var macrofn__4879 = temp__3695__auto____4878;

var mret__4880 = macrofn__4879.call(null,rdr,ch__4877);

{
var G__4882 = (cljs.core.truth_(cljs.core._EQ_.call(null,mret__4880,rdr))?a__4876:cljs.core.conj.call(null,a__4876,mret__4880));
a__4876 = G__4882;
continue;
}
} else
{cljs.reader.unread.call(null,rdr,ch__4877);
var o__4881 = cljs.reader.read.call(null,rdr,true,null,recursive_QMARK_);

{
var G__4883 = (cljs.core.truth_(cljs.core._EQ_.call(null,o__4881,rdr))?a__4876:cljs.core.conj.call(null,a__4876,o__4881));
a__4876 = G__4883;
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
var ch__4884 = cljs.reader.read_char.call(null,rdr);
var dm__4885 = cljs.core.get.call(null,cljs.reader.dispatch_macros,ch__4884);

if(cljs.core.truth_(dm__4885))
{return dm__4885.call(null,rdr,_);
} else
{return cljs.reader.reader_error.call(null,rdr,"No dispatch macro for ",ch__4884);
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
var l__4886 = cljs.reader.read_delimited_list.call(null,"}",rdr,true);

if(cljs.core.truth_(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,l__4886))))
{cljs.reader.reader_error.call(null,rdr,"Map literal must contain an even number of forms");
} else
{}
return cljs.core.apply.call(null,cljs.core.hash_map,l__4886);
});
cljs.reader.read_number = (function read_number(reader,initch){
var buffer__4887 = (new goog.string.StringBuffer(initch));
var ch__4888 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4889 = cljs.core.nil_QMARK_.call(null,ch__4888);

if(cljs.core.truth_(or__3548__auto____4889))
{return or__3548__auto____4889;
} else
{var or__3548__auto____4890 = cljs.reader.whitespace_QMARK_.call(null,ch__4888);

if(cljs.core.truth_(or__3548__auto____4890))
{return or__3548__auto____4890;
} else
{return cljs.core.contains_QMARK_.call(null,cljs.reader.macros,ch__4888);
}
}
})()))
{cljs.reader.unread.call(null,reader,ch__4888);
var s__4891 = buffer__4887.toString();

var or__3548__auto____4892 = cljs.reader.match_number.call(null,s__4891);

if(cljs.core.truth_(or__3548__auto____4892))
{return or__3548__auto____4892;
} else
{return cljs.reader.reader_error.call(null,reader,"Invalid number format [",s__4891,"]");
}
} else
{{
var G__4893 = (function (){buffer__4887.append(ch__4888);
return buffer__4887;
})();
var G__4894 = cljs.reader.read_char.call(null,reader);
buffer__4887 = G__4893;
ch__4888 = G__4894;
continue;
}
}
break;
}
});
cljs.reader.read_string = (function read_string(reader,_){
var buffer__4895 = (new goog.string.StringBuffer());
var ch__4896 = cljs.reader.read_char.call(null,reader);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4896)))
{return cljs.reader.reader_error.call(null,reader,"EOF while reading string");
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\\",ch__4896)))
{{
var G__4897 = (function (){buffer__4895.append(cljs.reader.escape_char.call(null,buffer__4895,reader));
return buffer__4895;
})();
var G__4898 = cljs.reader.read_char.call(null,reader);
buffer__4895 = G__4897;
ch__4896 = G__4898;
continue;
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,"\"",ch__4896)))
{return buffer__4895.toString();
} else
{if(cljs.core.truth_("﷐'default"))
{{
var G__4899 = (function (){buffer__4895.append(ch__4896);
return buffer__4895;
})();
var G__4900 = cljs.reader.read_char.call(null,reader);
buffer__4895 = G__4899;
ch__4896 = G__4900;
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
var token__4901 = cljs.reader.read_token.call(null,reader,initch);

if(cljs.core.truth_(goog.string.contains.call(null,token__4901,"/")))
{return cljs.core.symbol.call(null,cljs.core.subs.call(null,token__4901,0,token__4901.indexOf("/")),cljs.core.subs.call(null,token__4901,(token__4901.indexOf("/") + 1),token__4901.length));
} else
{return cljs.core.get.call(null,cljs.reader.special_symbols,token__4901,cljs.core.symbol.call(null,token__4901));
}
});
cljs.reader.read_keyword = (function read_keyword(reader,initch){
var token__4903 = cljs.reader.read_token.call(null,reader,cljs.reader.read_char.call(null,reader));
var vec__4902__4904 = cljs.core.re_matches.call(null,cljs.reader.symbol_pattern,token__4903);
var token__4905 = cljs.core.nth.call(null,vec__4902__4904,0,null);
var ns__4906 = cljs.core.nth.call(null,vec__4902__4904,1,null);
var name__4907 = cljs.core.nth.call(null,vec__4902__4904,2,null);

if(cljs.core.truth_((function (){var or__3548__auto____4909 = (function (){var and__3546__auto____4908 = cljs.core.not.call(null,(void 0 === ns__4906));

if(cljs.core.truth_(and__3546__auto____4908))
{return (ns__4906.substring((ns__4906.length - 2),ns__4906.length) === ":/");
} else
{return and__3546__auto____4908;
}
})();

if(cljs.core.truth_(or__3548__auto____4909))
{return or__3548__auto____4909;
} else
{var or__3548__auto____4910 = ((name__4907[(name__4907.length - 1)]) === ":");

if(cljs.core.truth_(or__3548__auto____4910))
{return or__3548__auto____4910;
} else
{return cljs.core.not.call(null,(token__4905.indexOf("::",1) === -1));
}
}
})()))
{return cljs.reader.reader_error.call(null,reader,"Invalid token: ",token__4905);
} else
{if(cljs.core.truth_(cljs.reader.ns_QMARK_))
{return cljs.core.keyword.call(null,ns__4906.substring(0,ns__4906.indexOf("/")),name__4907);
} else
{return cljs.core.keyword.call(null,token__4905);
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
var m__4911 = cljs.reader.desugar_meta.call(null,cljs.reader.read.call(null,rdr,true,null,true));

if(cljs.core.truth_(cljs.core.map_QMARK_.call(null,m__4911)))
{} else
{cljs.reader.reader_error.call(null,rdr,"Metadata must be Symbol,Keyword,String or Map");
}
var o__4912 = cljs.reader.read.call(null,rdr,true,null,true);

if(cljs.core.truth_((function (){var x__445__auto____4913 = o__4912;

if(cljs.core.truth_((function (){var and__3546__auto____4914 = x__445__auto____4913;

if(cljs.core.truth_(and__3546__auto____4914))
{var and__3546__auto____4915 = x__445__auto____4913.cljs$core$IWithMeta$;

if(cljs.core.truth_(and__3546__auto____4915))
{return cljs.core.not.call(null,x__445__auto____4913.hasOwnProperty("cljs$core$IWithMeta$"));
} else
{return and__3546__auto____4915;
}
} else
{return and__3546__auto____4914;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IWithMeta,x__445__auto____4913);
}
})()))
{return cljs.core.with_meta.call(null,o__4912,cljs.core.merge.call(null,cljs.core.meta.call(null,o__4912),m__4911));
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
var ch__4916 = cljs.reader.read_char.call(null,reader);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ch__4916)))
{if(cljs.core.truth_(eof_is_error))
{return cljs.reader.reader_error.call(null,reader,"EOF");
} else
{return sentinel;
}
} else
{if(cljs.core.truth_(cljs.reader.whitespace_QMARK_.call(null,ch__4916)))
{{
var G__4918 = reader;
var G__4919 = eof_is_error;
var G__4920 = sentinel;
var G__4921 = is_recursive;
reader = G__4918;
eof_is_error = G__4919;
sentinel = G__4920;
is_recursive = G__4921;
continue;
}
} else
{if(cljs.core.truth_(cljs.reader.comment_prefix_QMARK_.call(null,ch__4916)))
{{
var G__4922 = cljs.reader.read_comment.call(null,reader,ch__4916);
var G__4923 = eof_is_error;
var G__4924 = sentinel;
var G__4925 = is_recursive;
reader = G__4922;
eof_is_error = G__4923;
sentinel = G__4924;
is_recursive = G__4925;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{var res__4917 = (cljs.core.truth_(cljs.reader.macros.call(null,ch__4916))?cljs.reader.macros.call(null,ch__4916).call(null,reader,ch__4916):(cljs.core.truth_(cljs.reader.number_literal_QMARK_.call(null,reader,ch__4916))?cljs.reader.read_number.call(null,reader,ch__4916):(cljs.core.truth_("﷐'else")?cljs.reader.read_symbol.call(null,reader,ch__4916):null)));

if(cljs.core.truth_(cljs.core._EQ_.call(null,res__4917,reader)))
{{
var G__4926 = reader;
var G__4927 = eof_is_error;
var G__4928 = sentinel;
var G__4929 = is_recursive;
reader = G__4926;
eof_is_error = G__4927;
sentinel = G__4928;
is_recursive = G__4929;
continue;
}
} else
{return res__4917;
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
var r__4930 = cljs.reader.push_back_reader.call(null,s);

return cljs.reader.read.call(null,r__4930,true,null,false);
});
