goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____19138 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____19138))
{return or__3548__auto____19138;
} else
{var or__3548__auto____19139 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____19139))
{return or__3548__auto____19139;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__19203 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____19140 = this$;

if(cljs.core.truth_(and__3546__auto____19140))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19140;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____19141 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19141))
{return or__3548__auto____19141;
} else
{var or__3548__auto____19142 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19142))
{return or__3548__auto____19142;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__19204 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____19143 = this$;

if(cljs.core.truth_(and__3546__auto____19143))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19143;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____19144 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19144))
{return or__3548__auto____19144;
} else
{var or__3548__auto____19145 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19145))
{return or__3548__auto____19145;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__19205 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____19146 = this$;

if(cljs.core.truth_(and__3546__auto____19146))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19146;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____19147 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19147))
{return or__3548__auto____19147;
} else
{var or__3548__auto____19148 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19148))
{return or__3548__auto____19148;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__19206 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____19149 = this$;

if(cljs.core.truth_(and__3546__auto____19149))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19149;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____19150 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19150))
{return or__3548__auto____19150;
} else
{var or__3548__auto____19151 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19151))
{return or__3548__auto____19151;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__19207 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____19152 = this$;

if(cljs.core.truth_(and__3546__auto____19152))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19152;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____19153 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19153))
{return or__3548__auto____19153;
} else
{var or__3548__auto____19154 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19154))
{return or__3548__auto____19154;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__19208 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____19155 = this$;

if(cljs.core.truth_(and__3546__auto____19155))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19155;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____19156 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19156))
{return or__3548__auto____19156;
} else
{var or__3548__auto____19157 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19157))
{return or__3548__auto____19157;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__19209 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____19158 = this$;

if(cljs.core.truth_(and__3546__auto____19158))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19158;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____19159 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19159))
{return or__3548__auto____19159;
} else
{var or__3548__auto____19160 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19160))
{return or__3548__auto____19160;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__19210 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____19161 = this$;

if(cljs.core.truth_(and__3546__auto____19161))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19161;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____19162 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19162))
{return or__3548__auto____19162;
} else
{var or__3548__auto____19163 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19163))
{return or__3548__auto____19163;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__19211 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____19164 = this$;

if(cljs.core.truth_(and__3546__auto____19164))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19164;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____19165 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19165))
{return or__3548__auto____19165;
} else
{var or__3548__auto____19166 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19166))
{return or__3548__auto____19166;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__19212 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____19167 = this$;

if(cljs.core.truth_(and__3546__auto____19167))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19167;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____19168 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19168))
{return or__3548__auto____19168;
} else
{var or__3548__auto____19169 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19169))
{return or__3548__auto____19169;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__19213 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____19170 = this$;

if(cljs.core.truth_(and__3546__auto____19170))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19170;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____19171 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19171))
{return or__3548__auto____19171;
} else
{var or__3548__auto____19172 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19172))
{return or__3548__auto____19172;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__19214 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____19173 = this$;

if(cljs.core.truth_(and__3546__auto____19173))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19173;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____19174 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19174))
{return or__3548__auto____19174;
} else
{var or__3548__auto____19175 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19175))
{return or__3548__auto____19175;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__19215 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____19176 = this$;

if(cljs.core.truth_(and__3546__auto____19176))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19176;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____19177 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19177))
{return or__3548__auto____19177;
} else
{var or__3548__auto____19178 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19178))
{return or__3548__auto____19178;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__19216 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____19179 = this$;

if(cljs.core.truth_(and__3546__auto____19179))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19179;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____19180 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19180))
{return or__3548__auto____19180;
} else
{var or__3548__auto____19181 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19181))
{return or__3548__auto____19181;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__19217 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____19182 = this$;

if(cljs.core.truth_(and__3546__auto____19182))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19182;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____19183 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19183))
{return or__3548__auto____19183;
} else
{var or__3548__auto____19184 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19184))
{return or__3548__auto____19184;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__19218 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____19185 = this$;

if(cljs.core.truth_(and__3546__auto____19185))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19185;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____19186 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19186))
{return or__3548__auto____19186;
} else
{var or__3548__auto____19187 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19187))
{return or__3548__auto____19187;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__19219 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____19188 = this$;

if(cljs.core.truth_(and__3546__auto____19188))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19188;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____19189 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19189))
{return or__3548__auto____19189;
} else
{var or__3548__auto____19190 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19190))
{return or__3548__auto____19190;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__19220 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____19191 = this$;

if(cljs.core.truth_(and__3546__auto____19191))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19191;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____19192 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19192))
{return or__3548__auto____19192;
} else
{var or__3548__auto____19193 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19193))
{return or__3548__auto____19193;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__19221 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____19194 = this$;

if(cljs.core.truth_(and__3546__auto____19194))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19194;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____19195 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19195))
{return or__3548__auto____19195;
} else
{var or__3548__auto____19196 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19196))
{return or__3548__auto____19196;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__19222 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____19197 = this$;

if(cljs.core.truth_(and__3546__auto____19197))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19197;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____19198 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19198))
{return or__3548__auto____19198;
} else
{var or__3548__auto____19199 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19199))
{return or__3548__auto____19199;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__19223 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____19200 = this$;

if(cljs.core.truth_(and__3546__auto____19200))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____19200;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____19201 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19201))
{return or__3548__auto____19201;
} else
{var or__3548__auto____19202 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____19202))
{return or__3548__auto____19202;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__19203.call(this,this$);
case  2 :
return _invoke__19204.call(this,this$,a);
case  3 :
return _invoke__19205.call(this,this$,a,b);
case  4 :
return _invoke__19206.call(this,this$,a,b,c);
case  5 :
return _invoke__19207.call(this,this$,a,b,c,d);
case  6 :
return _invoke__19208.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__19209.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__19210.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__19211.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__19212.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__19213.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__19214.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__19215.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__19216.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__19217.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__19218.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__19219.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__19220.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__19221.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__19222.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__19223.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19225 = coll;

if(cljs.core.truth_(and__3546__auto____19225))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____19225;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____19226 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19226))
{return or__3548__auto____19226;
} else
{var or__3548__auto____19227 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____19227))
{return or__3548__auto____19227;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19228 = coll;

if(cljs.core.truth_(and__3546__auto____19228))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____19228;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____19229 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19229))
{return or__3548__auto____19229;
} else
{var or__3548__auto____19230 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____19230))
{return or__3548__auto____19230;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____19231 = coll;

if(cljs.core.truth_(and__3546__auto____19231))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____19231;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____19232 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19232))
{return or__3548__auto____19232;
} else
{var or__3548__auto____19233 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____19233))
{return or__3548__auto____19233;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__19240 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____19234 = coll;

if(cljs.core.truth_(and__3546__auto____19234))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19234;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____19235 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19235))
{return or__3548__auto____19235;
} else
{var or__3548__auto____19236 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19236))
{return or__3548__auto____19236;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__19241 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19237 = coll;

if(cljs.core.truth_(and__3546__auto____19237))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____19237;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____19238 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19238))
{return or__3548__auto____19238;
} else
{var or__3548__auto____19239 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____19239))
{return or__3548__auto____19239;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__19240.call(this,coll,n);
case  3 :
return _nth__19241.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19243 = coll;

if(cljs.core.truth_(and__3546__auto____19243))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____19243;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____19244 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19244))
{return or__3548__auto____19244;
} else
{var or__3548__auto____19245 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____19245))
{return or__3548__auto____19245;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19246 = coll;

if(cljs.core.truth_(and__3546__auto____19246))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____19246;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____19247 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19247))
{return or__3548__auto____19247;
} else
{var or__3548__auto____19248 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____19248))
{return or__3548__auto____19248;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__19255 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____19249 = o;

if(cljs.core.truth_(and__3546__auto____19249))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19249;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____19250 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19250))
{return or__3548__auto____19250;
} else
{var or__3548__auto____19251 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19251))
{return or__3548__auto____19251;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__19256 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____19252 = o;

if(cljs.core.truth_(and__3546__auto____19252))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____19252;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____19253 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19253))
{return or__3548__auto____19253;
} else
{var or__3548__auto____19254 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____19254))
{return or__3548__auto____19254;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__19255.call(this,o,k);
case  3 :
return _lookup__19256.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19258 = coll;

if(cljs.core.truth_(and__3546__auto____19258))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____19258;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____19259 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19259))
{return or__3548__auto____19259;
} else
{var or__3548__auto____19260 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19260))
{return or__3548__auto____19260;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____19261 = coll;

if(cljs.core.truth_(and__3546__auto____19261))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____19261;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____19262 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19262))
{return or__3548__auto____19262;
} else
{var or__3548__auto____19263 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____19263))
{return or__3548__auto____19263;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19264 = coll;

if(cljs.core.truth_(and__3546__auto____19264))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____19264;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____19265 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19265))
{return or__3548__auto____19265;
} else
{var or__3548__auto____19266 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____19266))
{return or__3548__auto____19266;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____19267 = coll;

if(cljs.core.truth_(and__3546__auto____19267))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____19267;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____19268 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19268))
{return or__3548__auto____19268;
} else
{var or__3548__auto____19269 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____19269))
{return or__3548__auto____19269;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19270 = coll;

if(cljs.core.truth_(and__3546__auto____19270))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____19270;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____19271 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19271))
{return or__3548__auto____19271;
} else
{var or__3548__auto____19272 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____19272))
{return or__3548__auto____19272;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____19273 = coll;

if(cljs.core.truth_(and__3546__auto____19273))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____19273;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____19274 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19274))
{return or__3548__auto____19274;
} else
{var or__3548__auto____19275 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____19275))
{return or__3548__auto____19275;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____19276 = coll;

if(cljs.core.truth_(and__3546__auto____19276))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____19276;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____19277 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19277))
{return or__3548__auto____19277;
} else
{var or__3548__auto____19278 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____19278))
{return or__3548__auto____19278;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____19279 = o;

if(cljs.core.truth_(and__3546__auto____19279))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____19279;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____19280 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19280))
{return or__3548__auto____19280;
} else
{var or__3548__auto____19281 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____19281))
{return or__3548__auto____19281;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____19282 = o;

if(cljs.core.truth_(and__3546__auto____19282))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____19282;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____19283 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19283))
{return or__3548__auto____19283;
} else
{var or__3548__auto____19284 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____19284))
{return or__3548__auto____19284;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____19285 = o;

if(cljs.core.truth_(and__3546__auto____19285))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____19285;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____19286 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19286))
{return or__3548__auto____19286;
} else
{var or__3548__auto____19287 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____19287))
{return or__3548__auto____19287;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____19288 = o;

if(cljs.core.truth_(and__3546__auto____19288))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____19288;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____19289 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19289))
{return or__3548__auto____19289;
} else
{var or__3548__auto____19290 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____19290))
{return or__3548__auto____19290;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__19297 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____19291 = coll;

if(cljs.core.truth_(and__3546__auto____19291))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19291;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____19292 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19292))
{return or__3548__auto____19292;
} else
{var or__3548__auto____19293 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19293))
{return or__3548__auto____19293;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__19298 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____19294 = coll;

if(cljs.core.truth_(and__3546__auto____19294))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____19294;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____19295 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____19295))
{return or__3548__auto____19295;
} else
{var or__3548__auto____19296 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____19296))
{return or__3548__auto____19296;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__19297.call(this,coll,f);
case  3 :
return _reduce__19298.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____19300 = o;

if(cljs.core.truth_(and__3546__auto____19300))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____19300;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____19301 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19301))
{return or__3548__auto____19301;
} else
{var or__3548__auto____19302 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____19302))
{return or__3548__auto____19302;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____19303 = o;

if(cljs.core.truth_(and__3546__auto____19303))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____19303;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____19304 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19304))
{return or__3548__auto____19304;
} else
{var or__3548__auto____19305 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____19305))
{return or__3548__auto____19305;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____19306 = o;

if(cljs.core.truth_(and__3546__auto____19306))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____19306;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____19307 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19307))
{return or__3548__auto____19307;
} else
{var or__3548__auto____19308 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____19308))
{return or__3548__auto____19308;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____19309 = o;

if(cljs.core.truth_(and__3546__auto____19309))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____19309;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____19310 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____19310))
{return or__3548__auto____19310;
} else
{var or__3548__auto____19311 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____19311))
{return or__3548__auto____19311;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____19312 = d;

if(cljs.core.truth_(and__3546__auto____19312))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____19312;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____19313 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____19313))
{return or__3548__auto____19313;
} else
{var or__3548__auto____19314 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____19314))
{return or__3548__auto____19314;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____19315 = this$;

if(cljs.core.truth_(and__3546__auto____19315))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____19315;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____19316 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19316))
{return or__3548__auto____19316;
} else
{var or__3548__auto____19317 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____19317))
{return or__3548__auto____19317;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____19318 = this$;

if(cljs.core.truth_(and__3546__auto____19318))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____19318;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____19319 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19319))
{return or__3548__auto____19319;
} else
{var or__3548__auto____19320 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19320))
{return or__3548__auto____19320;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____19321 = this$;

if(cljs.core.truth_(and__3546__auto____19321))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____19321;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____19322 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____19322))
{return or__3548__auto____19322;
} else
{var or__3548__auto____19323 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____19323))
{return or__3548__auto____19323;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__19324 = null;
var G__19324__19325 = (function (o,k){
return null;
});
var G__19324__19326 = (function (o,k,not_found){
return not_found;
});
G__19324 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__19324__19325.call(this,o,k);
case  3 :
return G__19324__19326.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19324;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__19328 = null;
var G__19328__19329 = (function (_,f){
return f.call(null);
});
var G__19328__19330 = (function (_,f,start){
return start;
});
G__19328 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19328__19329.call(this,_,f);
case  3 :
return G__19328__19330.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19328;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__19332 = null;
var G__19332__19333 = (function (_,n){
return null;
});
var G__19332__19334 = (function (_,n,not_found){
return not_found;
});
G__19332 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__19332__19333.call(this,_,n);
case  3 :
return G__19332__19334.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19332;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__19342 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__19336 = cljs.core._nth.call(null,cicoll,0);
var n__19337 = 1;

while(true){
if(cljs.core.truth_((n__19337 < cljs.core._count.call(null,cicoll))))
{{
var G__19346 = f.call(null,val__19336,cljs.core._nth.call(null,cicoll,n__19337));
var G__19347 = (n__19337 + 1);
val__19336 = G__19346;
n__19337 = G__19347;
continue;
}
} else
{return val__19336;
}
break;
}
}
});
var ci_reduce__19343 = (function (cicoll,f,val){
var val__19338 = val;
var n__19339 = 0;

while(true){
if(cljs.core.truth_((n__19339 < cljs.core._count.call(null,cicoll))))
{{
var G__19348 = f.call(null,val__19338,cljs.core._nth.call(null,cicoll,n__19339));
var G__19349 = (n__19339 + 1);
val__19338 = G__19348;
n__19339 = G__19349;
continue;
}
} else
{return val__19338;
}
break;
}
});
var ci_reduce__19344 = (function (cicoll,f,val,idx){
var val__19340 = val;
var n__19341 = idx;

while(true){
if(cljs.core.truth_((n__19341 < cljs.core._count.call(null,cicoll))))
{{
var G__19350 = f.call(null,val__19340,cljs.core._nth.call(null,cicoll,n__19341));
var G__19351 = (n__19341 + 1);
val__19340 = G__19350;
n__19341 = G__19351;
continue;
}
} else
{return val__19340;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__19342.call(this,cicoll,f);
case  3 :
return ci_reduce__19343.call(this,cicoll,f,val);
case  4 :
return ci_reduce__19344.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19352 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__19365 = null;
var G__19365__19366 = (function (_,f){
var this__19353 = this;
return cljs.core.ci_reduce.call(null,this__19353.a,f,(this__19353.a[this__19353.i]),(this__19353.i + 1));
});
var G__19365__19367 = (function (_,f,start){
var this__19354 = this;
return cljs.core.ci_reduce.call(null,this__19354.a,f,start,this__19354.i);
});
G__19365 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__19365__19366.call(this,_,f);
case  3 :
return G__19365__19367.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19365;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19355 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19356 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__19369 = null;
var G__19369__19370 = (function (coll,n){
var this__19357 = this;
var i__19358 = (n + this__19357.i);

if(cljs.core.truth_((i__19358 < this__19357.a.length)))
{return (this__19357.a[i__19358]);
} else
{return null;
}
});
var G__19369__19371 = (function (coll,n,not_found){
var this__19359 = this;
var i__19360 = (n + this__19359.i);

if(cljs.core.truth_((i__19360 < this__19359.a.length)))
{return (this__19359.a[i__19360]);
} else
{return not_found;
}
});
G__19369 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19369__19370.call(this,coll,n);
case  3 :
return G__19369__19371.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19369;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__19361 = this;
return (this__19361.a.length - this__19361.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__19362 = this;
return (this__19362.a[this__19362.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__19363 = this;
if(cljs.core.truth_(((this__19363.i + 1) < this__19363.a.length)))
{return (new cljs.core.IndexedSeq(this__19363.a,(this__19363.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__19364 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__19373 = null;
var G__19373__19374 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__19373__19375 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__19373 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__19373__19374.call(this,array,f);
case  3 :
return G__19373__19375.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19373;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__19377 = null;
var G__19377__19378 = (function (array,k){
return (array[k]);
});
var G__19377__19379 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__19377 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__19377__19378.call(this,array,k);
case  3 :
return G__19377__19379.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19377;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__19381 = null;
var G__19381__19382 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__19381__19383 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__19381 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__19381__19382.call(this,array,n);
case  3 :
return G__19381__19383.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19381;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____19385 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19385))
{var s__19386 = temp__3698__auto____19385;

return cljs.core._first.call(null,s__19386);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__19387 = cljs.core.next.call(null,s);
s = G__19387;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__19388 = cljs.core.seq.call(null,x);
var n__19389 = 0;

while(true){
if(cljs.core.truth_(s__19388))
{{
var G__19390 = cljs.core.next.call(null,s__19388);
var G__19391 = (n__19389 + 1);
s__19388 = G__19390;
n__19389 = G__19391;
continue;
}
} else
{return n__19389;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__19392 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__19393 = (function() { 
var G__19395__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__19396 = conj.call(null,coll,x);
var G__19397 = cljs.core.first.call(null,xs);
var G__19398 = cljs.core.next.call(null,xs);
coll = G__19396;
x = G__19397;
xs = G__19398;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__19395 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19395__delegate.call(this, coll, x, xs);
};
G__19395.cljs$lang$maxFixedArity = 2;
G__19395.cljs$lang$applyTo = (function (arglist__19399){
var coll = cljs.core.first(arglist__19399);
var x = cljs.core.first(cljs.core.next(arglist__19399));
var xs = cljs.core.rest(cljs.core.next(arglist__19399));
return G__19395__delegate.call(this, coll, x, xs);
});
return G__19395;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__19392.call(this,coll,x);
default:
return conj__19393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__19393.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__19400 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__19401 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__19400.call(this,coll,n);
case  3 :
return nth__19401.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__19403 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__19404 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__19403.call(this,o,k);
case  3 :
return get__19404.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__19407 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__19408 = (function() { 
var G__19410__delegate = function (coll,k,v,kvs){
while(true){
var ret__19406 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__19411 = ret__19406;
var G__19412 = cljs.core.first.call(null,kvs);
var G__19413 = cljs.core.second.call(null,kvs);
var G__19414 = cljs.core.nnext.call(null,kvs);
coll = G__19411;
k = G__19412;
v = G__19413;
kvs = G__19414;
continue;
}
} else
{return ret__19406;
}
break;
}
};
var G__19410 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19410__delegate.call(this, coll, k, v, kvs);
};
G__19410.cljs$lang$maxFixedArity = 3;
G__19410.cljs$lang$applyTo = (function (arglist__19415){
var coll = cljs.core.first(arglist__19415);
var k = cljs.core.first(cljs.core.next(arglist__19415));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19415)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19415)));
return G__19410__delegate.call(this, coll, k, v, kvs);
});
return G__19410;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__19407.call(this,coll,k,v);
default:
return assoc__19408.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__19408.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__19417 = (function (coll){
return coll;
});
var dissoc__19418 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__19419 = (function() { 
var G__19421__delegate = function (coll,k,ks){
while(true){
var ret__19416 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19422 = ret__19416;
var G__19423 = cljs.core.first.call(null,ks);
var G__19424 = cljs.core.next.call(null,ks);
coll = G__19422;
k = G__19423;
ks = G__19424;
continue;
}
} else
{return ret__19416;
}
break;
}
};
var G__19421 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19421__delegate.call(this, coll, k, ks);
};
G__19421.cljs$lang$maxFixedArity = 2;
G__19421.cljs$lang$applyTo = (function (arglist__19425){
var coll = cljs.core.first(arglist__19425);
var k = cljs.core.first(cljs.core.next(arglist__19425));
var ks = cljs.core.rest(cljs.core.next(arglist__19425));
return G__19421__delegate.call(this, coll, k, ks);
});
return G__19421;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__19417.call(this,coll);
case  2 :
return dissoc__19418.call(this,coll,k);
default:
return dissoc__19419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__19419.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____19426 = o;

if(cljs.core.truth_((function (){var and__3546__auto____19427 = x__445__auto____19426;

if(cljs.core.truth_(and__3546__auto____19427))
{var and__3546__auto____19428 = x__445__auto____19426.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____19428))
{return cljs.core.not.call(null,x__445__auto____19426.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____19428;
}
} else
{return and__3546__auto____19427;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____19426);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__19430 = (function (coll){
return coll;
});
var disj__19431 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__19432 = (function() { 
var G__19434__delegate = function (coll,k,ks){
while(true){
var ret__19429 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__19435 = ret__19429;
var G__19436 = cljs.core.first.call(null,ks);
var G__19437 = cljs.core.next.call(null,ks);
coll = G__19435;
k = G__19436;
ks = G__19437;
continue;
}
} else
{return ret__19429;
}
break;
}
};
var G__19434 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19434__delegate.call(this, coll, k, ks);
};
G__19434.cljs$lang$maxFixedArity = 2;
G__19434.cljs$lang$applyTo = (function (arglist__19438){
var coll = cljs.core.first(arglist__19438);
var k = cljs.core.first(cljs.core.next(arglist__19438));
var ks = cljs.core.rest(cljs.core.next(arglist__19438));
return G__19434__delegate.call(this, coll, k, ks);
});
return G__19434;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__19430.call(this,coll);
case  2 :
return disj__19431.call(this,coll,k);
default:
return disj__19432.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__19432.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19439 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19440 = x__445__auto____19439;

if(cljs.core.truth_(and__3546__auto____19440))
{var and__3546__auto____19441 = x__445__auto____19439.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____19441))
{return cljs.core.not.call(null,x__445__auto____19439.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____19441;
}
} else
{return and__3546__auto____19440;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____19439);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19442 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19443 = x__445__auto____19442;

if(cljs.core.truth_(and__3546__auto____19443))
{var and__3546__auto____19444 = x__445__auto____19442.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____19444))
{return cljs.core.not.call(null,x__445__auto____19442.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____19444;
}
} else
{return and__3546__auto____19443;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____19442);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____19445 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19446 = x__445__auto____19445;

if(cljs.core.truth_(and__3546__auto____19446))
{var and__3546__auto____19447 = x__445__auto____19445.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____19447))
{return cljs.core.not.call(null,x__445__auto____19445.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____19447;
}
} else
{return and__3546__auto____19446;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____19445);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____19448 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19449 = x__445__auto____19448;

if(cljs.core.truth_(and__3546__auto____19449))
{var and__3546__auto____19450 = x__445__auto____19448.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____19450))
{return cljs.core.not.call(null,x__445__auto____19448.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____19450;
}
} else
{return and__3546__auto____19449;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____19448);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____19451 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19452 = x__445__auto____19451;

if(cljs.core.truth_(and__3546__auto____19452))
{var and__3546__auto____19453 = x__445__auto____19451.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____19453))
{return cljs.core.not.call(null,x__445__auto____19451.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____19453;
}
} else
{return and__3546__auto____19452;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____19451);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____19454 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19455 = x__445__auto____19454;

if(cljs.core.truth_(and__3546__auto____19455))
{var and__3546__auto____19456 = x__445__auto____19454.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____19456))
{return cljs.core.not.call(null,x__445__auto____19454.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____19456;
}
} else
{return and__3546__auto____19455;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____19454);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____19457 = x;

if(cljs.core.truth_((function (){var and__3546__auto____19458 = x__445__auto____19457;

if(cljs.core.truth_(and__3546__auto____19458))
{var and__3546__auto____19459 = x__445__auto____19457.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____19459))
{return cljs.core.not.call(null,x__445__auto____19457.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____19459;
}
} else
{return and__3546__auto____19458;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____19457);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__19460 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__19460.push(key);
}));
return keys__19460;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____19461 = s;

if(cljs.core.truth_((function (){var and__3546__auto____19462 = x__445__auto____19461;

if(cljs.core.truth_(and__3546__auto____19462))
{var and__3546__auto____19463 = x__445__auto____19461.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____19463))
{return cljs.core.not.call(null,x__445__auto____19461.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____19463;
}
} else
{return and__3546__auto____19462;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____19461);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____19464 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19464))
{return cljs.core.not.call(null,(function (){var or__3548__auto____19465 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____19465))
{return or__3548__auto____19465;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____19464;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____19466 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19466))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____19466;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____19467 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____19467))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____19467;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____19468 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____19468))
{return (n == n.toFixed());
} else
{return and__3546__auto____19468;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____19469 = coll;

if(cljs.core.truth_(and__3546__auto____19469))
{var and__3546__auto____19470 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____19470))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____19470;
}
} else
{return and__3546__auto____19469;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___19475 = (function (x){
return true;
});
var distinct_QMARK___19476 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___19477 = (function() { 
var G__19479__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__19471 = cljs.core.set([y,x]);
var xs__19472 = more;

while(true){
var x__19473 = cljs.core.first.call(null,xs__19472);
var etc__19474 = cljs.core.next.call(null,xs__19472);

if(cljs.core.truth_(xs__19472))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__19471,x__19473)))
{return false;
} else
{{
var G__19480 = cljs.core.conj.call(null,s__19471,x__19473);
var G__19481 = etc__19474;
s__19471 = G__19480;
xs__19472 = G__19481;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__19479 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19479__delegate.call(this, x, y, more);
};
G__19479.cljs$lang$maxFixedArity = 2;
G__19479.cljs$lang$applyTo = (function (arglist__19482){
var x = cljs.core.first(arglist__19482);
var y = cljs.core.first(cljs.core.next(arglist__19482));
var more = cljs.core.rest(cljs.core.next(arglist__19482));
return G__19479__delegate.call(this, x, y, more);
});
return G__19479;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___19475.call(this,x);
case  2 :
return distinct_QMARK___19476.call(this,x,y);
default:
return distinct_QMARK___19477.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___19477.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__19483 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__19483)))
{return r__19483;
} else
{if(cljs.core.truth_(r__19483))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__19485 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__19486 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__19484 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__19484,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__19484);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__19485.call(this,comp);
case  2 :
return sort__19486.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__19488 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__19489 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__19488.call(this,keyfn,comp);
case  3 :
return sort_by__19489.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__19491 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__19492 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__19491.call(this,f,val);
case  3 :
return reduce__19492.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__19498 = (function (f,coll){
var temp__3695__auto____19494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____19494))
{var s__19495 = temp__3695__auto____19494;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__19495),cljs.core.next.call(null,s__19495));
} else
{return f.call(null);
}
});
var seq_reduce__19499 = (function (f,val,coll){
var val__19496 = val;
var coll__19497 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__19497))
{{
var G__19501 = f.call(null,val__19496,cljs.core.first.call(null,coll__19497));
var G__19502 = cljs.core.next.call(null,coll__19497);
val__19496 = G__19501;
coll__19497 = G__19502;
continue;
}
} else
{return val__19496;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__19498.call(this,f,val);
case  3 :
return seq_reduce__19499.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__19503 = null;
var G__19503__19504 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__19503__19505 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__19503 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__19503__19504.call(this,coll,f);
case  3 :
return G__19503__19505.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19503;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___19507 = (function (){
return 0;
});
var _PLUS___19508 = (function (x){
return x;
});
var _PLUS___19509 = (function (x,y){
return (x + y);
});
var _PLUS___19510 = (function() { 
var G__19512__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__19512 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19512__delegate.call(this, x, y, more);
};
G__19512.cljs$lang$maxFixedArity = 2;
G__19512.cljs$lang$applyTo = (function (arglist__19513){
var x = cljs.core.first(arglist__19513);
var y = cljs.core.first(cljs.core.next(arglist__19513));
var more = cljs.core.rest(cljs.core.next(arglist__19513));
return G__19512__delegate.call(this, x, y, more);
});
return G__19512;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___19507.call(this);
case  1 :
return _PLUS___19508.call(this,x);
case  2 :
return _PLUS___19509.call(this,x,y);
default:
return _PLUS___19510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___19510.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___19514 = (function (x){
return (- x);
});
var ___19515 = (function (x,y){
return (x - y);
});
var ___19516 = (function() { 
var G__19518__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__19518 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19518__delegate.call(this, x, y, more);
};
G__19518.cljs$lang$maxFixedArity = 2;
G__19518.cljs$lang$applyTo = (function (arglist__19519){
var x = cljs.core.first(arglist__19519);
var y = cljs.core.first(cljs.core.next(arglist__19519));
var more = cljs.core.rest(cljs.core.next(arglist__19519));
return G__19518__delegate.call(this, x, y, more);
});
return G__19518;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___19514.call(this,x);
case  2 :
return ___19515.call(this,x,y);
default:
return ___19516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___19516.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___19520 = (function (){
return 1;
});
var _STAR___19521 = (function (x){
return x;
});
var _STAR___19522 = (function (x,y){
return (x * y);
});
var _STAR___19523 = (function() { 
var G__19525__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__19525 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19525__delegate.call(this, x, y, more);
};
G__19525.cljs$lang$maxFixedArity = 2;
G__19525.cljs$lang$applyTo = (function (arglist__19526){
var x = cljs.core.first(arglist__19526);
var y = cljs.core.first(cljs.core.next(arglist__19526));
var more = cljs.core.rest(cljs.core.next(arglist__19526));
return G__19525__delegate.call(this, x, y, more);
});
return G__19525;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___19520.call(this);
case  1 :
return _STAR___19521.call(this,x);
case  2 :
return _STAR___19522.call(this,x,y);
default:
return _STAR___19523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___19523.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___19527 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___19528 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___19529 = (function() { 
var G__19531__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__19531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19531__delegate.call(this, x, y, more);
};
G__19531.cljs$lang$maxFixedArity = 2;
G__19531.cljs$lang$applyTo = (function (arglist__19532){
var x = cljs.core.first(arglist__19532);
var y = cljs.core.first(cljs.core.next(arglist__19532));
var more = cljs.core.rest(cljs.core.next(arglist__19532));
return G__19531__delegate.call(this, x, y, more);
});
return G__19531;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___19527.call(this,x);
case  2 :
return _SLASH___19528.call(this,x,y);
default:
return _SLASH___19529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___19529.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___19533 = (function (x){
return true;
});
var _LT___19534 = (function (x,y){
return (x < y);
});
var _LT___19535 = (function() { 
var G__19537__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19538 = y;
var G__19539 = cljs.core.first.call(null,more);
var G__19540 = cljs.core.next.call(null,more);
x = G__19538;
y = G__19539;
more = G__19540;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19537 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19537__delegate.call(this, x, y, more);
};
G__19537.cljs$lang$maxFixedArity = 2;
G__19537.cljs$lang$applyTo = (function (arglist__19541){
var x = cljs.core.first(arglist__19541);
var y = cljs.core.first(cljs.core.next(arglist__19541));
var more = cljs.core.rest(cljs.core.next(arglist__19541));
return G__19537__delegate.call(this, x, y, more);
});
return G__19537;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___19533.call(this,x);
case  2 :
return _LT___19534.call(this,x,y);
default:
return _LT___19535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___19535.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___19542 = (function (x){
return true;
});
var _LT__EQ___19543 = (function (x,y){
return (x <= y);
});
var _LT__EQ___19544 = (function() { 
var G__19546__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19547 = y;
var G__19548 = cljs.core.first.call(null,more);
var G__19549 = cljs.core.next.call(null,more);
x = G__19547;
y = G__19548;
more = G__19549;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19546 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19546__delegate.call(this, x, y, more);
};
G__19546.cljs$lang$maxFixedArity = 2;
G__19546.cljs$lang$applyTo = (function (arglist__19550){
var x = cljs.core.first(arglist__19550);
var y = cljs.core.first(cljs.core.next(arglist__19550));
var more = cljs.core.rest(cljs.core.next(arglist__19550));
return G__19546__delegate.call(this, x, y, more);
});
return G__19546;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___19542.call(this,x);
case  2 :
return _LT__EQ___19543.call(this,x,y);
default:
return _LT__EQ___19544.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___19544.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___19551 = (function (x){
return true;
});
var _GT___19552 = (function (x,y){
return (x > y);
});
var _GT___19553 = (function() { 
var G__19555__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19556 = y;
var G__19557 = cljs.core.first.call(null,more);
var G__19558 = cljs.core.next.call(null,more);
x = G__19556;
y = G__19557;
more = G__19558;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19555 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19555__delegate.call(this, x, y, more);
};
G__19555.cljs$lang$maxFixedArity = 2;
G__19555.cljs$lang$applyTo = (function (arglist__19559){
var x = cljs.core.first(arglist__19559);
var y = cljs.core.first(cljs.core.next(arglist__19559));
var more = cljs.core.rest(cljs.core.next(arglist__19559));
return G__19555__delegate.call(this, x, y, more);
});
return G__19555;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___19551.call(this,x);
case  2 :
return _GT___19552.call(this,x,y);
default:
return _GT___19553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___19553.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___19560 = (function (x){
return true;
});
var _GT__EQ___19561 = (function (x,y){
return (x >= y);
});
var _GT__EQ___19562 = (function() { 
var G__19564__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19565 = y;
var G__19566 = cljs.core.first.call(null,more);
var G__19567 = cljs.core.next.call(null,more);
x = G__19565;
y = G__19566;
more = G__19567;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19564 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19564__delegate.call(this, x, y, more);
};
G__19564.cljs$lang$maxFixedArity = 2;
G__19564.cljs$lang$applyTo = (function (arglist__19568){
var x = cljs.core.first(arglist__19568);
var y = cljs.core.first(cljs.core.next(arglist__19568));
var more = cljs.core.rest(cljs.core.next(arglist__19568));
return G__19564__delegate.call(this, x, y, more);
});
return G__19564;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___19560.call(this,x);
case  2 :
return _GT__EQ___19561.call(this,x,y);
default:
return _GT__EQ___19562.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___19562.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__19569 = (function (x){
return x;
});
var max__19570 = (function (x,y){
return ((x > y) ? x : y);
});
var max__19571 = (function() { 
var G__19573__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__19573 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19573__delegate.call(this, x, y, more);
};
G__19573.cljs$lang$maxFixedArity = 2;
G__19573.cljs$lang$applyTo = (function (arglist__19574){
var x = cljs.core.first(arglist__19574);
var y = cljs.core.first(cljs.core.next(arglist__19574));
var more = cljs.core.rest(cljs.core.next(arglist__19574));
return G__19573__delegate.call(this, x, y, more);
});
return G__19573;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__19569.call(this,x);
case  2 :
return max__19570.call(this,x,y);
default:
return max__19571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__19571.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__19575 = (function (x){
return x;
});
var min__19576 = (function (x,y){
return ((x < y) ? x : y);
});
var min__19577 = (function() { 
var G__19579__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__19579 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19579__delegate.call(this, x, y, more);
};
G__19579.cljs$lang$maxFixedArity = 2;
G__19579.cljs$lang$applyTo = (function (arglist__19580){
var x = cljs.core.first(arglist__19580);
var y = cljs.core.first(cljs.core.next(arglist__19580));
var more = cljs.core.rest(cljs.core.next(arglist__19580));
return G__19579__delegate.call(this, x, y, more);
});
return G__19579;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__19575.call(this,x);
case  2 :
return min__19576.call(this,x,y);
default:
return min__19577.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__19577.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__19581 = (n % d);

return cljs.core.fix.call(null,((n - rem__19581) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__19582 = cljs.core.quot.call(null,n,d);

return (n - (d * q__19582));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__19583 = (function (){
return Math.random.call(null);
});
var rand__19584 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__19583.call(this);
case  1 :
return rand__19584.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___19586 = (function (x){
return true;
});
var _EQ__EQ___19587 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___19588 = (function() { 
var G__19590__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__19591 = y;
var G__19592 = cljs.core.first.call(null,more);
var G__19593 = cljs.core.next.call(null,more);
x = G__19591;
y = G__19592;
more = G__19593;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__19590 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19590__delegate.call(this, x, y, more);
};
G__19590.cljs$lang$maxFixedArity = 2;
G__19590.cljs$lang$applyTo = (function (arglist__19594){
var x = cljs.core.first(arglist__19594);
var y = cljs.core.first(cljs.core.next(arglist__19594));
var more = cljs.core.rest(cljs.core.next(arglist__19594));
return G__19590__delegate.call(this, x, y, more);
});
return G__19590;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___19586.call(this,x);
case  2 :
return _EQ__EQ___19587.call(this,x,y);
default:
return _EQ__EQ___19588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___19588.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__19595 = n;
var xs__19596 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19597 = xs__19596;

if(cljs.core.truth_(and__3546__auto____19597))
{return (n__19595 > 0);
} else
{return and__3546__auto____19597;
}
})()))
{{
var G__19598 = (n__19595 - 1);
var G__19599 = cljs.core.next.call(null,xs__19596);
n__19595 = G__19598;
xs__19596 = G__19599;
continue;
}
} else
{return xs__19596;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__19604 = null;
var G__19604__19605 = (function (coll,n){
var temp__3695__auto____19600 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19600))
{var xs__19601 = temp__3695__auto____19600;

return cljs.core.first.call(null,xs__19601);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__19604__19606 = (function (coll,n,not_found){
var temp__3695__auto____19602 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____19602))
{var xs__19603 = temp__3695__auto____19602;

return cljs.core.first.call(null,xs__19603);
} else
{return not_found;
}
});
G__19604 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__19604__19605.call(this,coll,n);
case  3 :
return G__19604__19606.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19604;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___19608 = (function (){
return "";
});
var str_STAR___19609 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___19610 = (function() { 
var G__19612__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__19613 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__19614 = cljs.core.next.call(null,more);
sb = G__19613;
more = G__19614;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__19612 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19612__delegate.call(this, x, ys);
};
G__19612.cljs$lang$maxFixedArity = 1;
G__19612.cljs$lang$applyTo = (function (arglist__19615){
var x = cljs.core.first(arglist__19615);
var ys = cljs.core.rest(arglist__19615);
return G__19612__delegate.call(this, x, ys);
});
return G__19612;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___19608.call(this);
case  1 :
return str_STAR___19609.call(this,x);
default:
return str_STAR___19610.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___19610.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__19616 = (function (){
return "";
});
var str__19617 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__19618 = (function() { 
var G__19620__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__19620 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__19620__delegate.call(this, x, ys);
};
G__19620.cljs$lang$maxFixedArity = 1;
G__19620.cljs$lang$applyTo = (function (arglist__19621){
var x = cljs.core.first(arglist__19621);
var ys = cljs.core.rest(arglist__19621);
return G__19620__delegate.call(this, x, ys);
});
return G__19620;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__19616.call(this);
case  1 :
return str__19617.call(this,x);
default:
return str__19618.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__19618.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__19622 = (function (s,start){
return s.substring(start);
});
var subs__19623 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__19622.call(this,s,start);
case  3 :
return subs__19623.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__19625 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__19626 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__19625.call(this,ns);
case  2 :
return symbol__19626.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__19628 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__19629 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__19628.call(this,ns);
case  2 :
return keyword__19629.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__19631 = cljs.core.seq.call(null,x);
var ys__19632 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__19631)))
{return cljs.core.nil_QMARK_.call(null,ys__19632);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__19632)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__19631),cljs.core.first.call(null,ys__19632))))
{{
var G__19633 = cljs.core.next.call(null,xs__19631);
var G__19634 = cljs.core.next.call(null,ys__19632);
xs__19631 = G__19633;
ys__19632 = G__19634;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__19635_SHARP_,p2__19636_SHARP_){
return cljs.core.hash_combine.call(null,p1__19635_SHARP_,cljs.core.hash.call(null,p2__19636_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__19637__19638 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__19637__19638))
{var G__19640__19642 = cljs.core.first.call(null,G__19637__19638);
var vec__19641__19643 = G__19640__19642;
var key_name__19644 = cljs.core.nth.call(null,vec__19641__19643,0,null);
var f__19645 = cljs.core.nth.call(null,vec__19641__19643,1,null);
var G__19637__19646 = G__19637__19638;

var G__19640__19647 = G__19640__19642;
var G__19637__19648 = G__19637__19646;

while(true){
var vec__19649__19650 = G__19640__19647;
var key_name__19651 = cljs.core.nth.call(null,vec__19649__19650,0,null);
var f__19652 = cljs.core.nth.call(null,vec__19649__19650,1,null);
var G__19637__19653 = G__19637__19648;

var str_name__19654 = cljs.core.name.call(null,key_name__19651);

obj[str_name__19654] = f__19652;
var temp__3698__auto____19655 = cljs.core.next.call(null,G__19637__19653);

if(cljs.core.truth_(temp__3698__auto____19655))
{var G__19637__19656 = temp__3698__auto____19655;

{
var G__19657 = cljs.core.first.call(null,G__19637__19656);
var G__19658 = G__19637__19656;
G__19640__19647 = G__19657;
G__19637__19648 = G__19658;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19659 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19660 = this;
return (new cljs.core.List(this__19660.meta,o,coll,(this__19660.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19661 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19662 = this;
return this__19662.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19663 = this;
return this__19663.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19664 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19665 = this;
return this__19665.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19666 = this;
return this__19666.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19667 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19668 = this;
return (new cljs.core.List(meta,this__19668.first,this__19668.rest,this__19668.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19669 = this;
return this__19669.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19670 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19671 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19672 = this;
return (new cljs.core.List(this__19672.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19673 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__19674 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__19675 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__19676 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19677 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19678 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19680 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19681 = this;
return this__19681.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19682 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__19683){
var items = cljs.core.seq( arglist__19683 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19684 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19685 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19687 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19687.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19688 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19689 = this;
return this__19689.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19690 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__19690.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__19690.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19691 = this;
return this__19691.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19692 = this;
return (new cljs.core.Cons(meta,this__19692.first,this__19692.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__19693 = null;
var G__19693__19694 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__19693__19695 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__19693 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__19693__19694.call(this,string,f);
case  3 :
return G__19693__19695.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19693;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__19697 = null;
var G__19697__19698 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__19697__19699 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__19697 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__19697__19698.call(this,string,k);
case  3 :
return G__19697__19699.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19697;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__19701 = null;
var G__19701__19702 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__19701__19703 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__19701 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__19701__19702.call(this,string,n);
case  3 :
return G__19701__19703.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19701;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__19705 = null;
var G__19705__19706 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__19705__19707 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__19705 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__19705__19706.call(this,this$,coll);
case  3 :
return G__19705__19707.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__19705;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__19709 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__19709;
} else
{lazy_seq.x = x__19709.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__19710 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__19711 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__19712 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__19713 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__19713.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__19714 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__19715 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__19716 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__19717 = this;
return this__19717.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__19718 = this;
return (new cljs.core.LazySeq(meta,this__19718.realized,this__19718.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__19719 = cljs.core.array.call(null);

var s__19720 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__19720)))
{ary__19719.push(cljs.core.first.call(null,s__19720));
{
var G__19721 = cljs.core.next.call(null,s__19720);
s__19720 = G__19721;
continue;
}
} else
{return ary__19719;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__19722 = s;
var i__19723 = n;
var sum__19724 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____19725 = (i__19723 > 0);

if(cljs.core.truth_(and__3546__auto____19725))
{return cljs.core.seq.call(null,s__19722);
} else
{return and__3546__auto____19725;
}
})()))
{{
var G__19726 = cljs.core.next.call(null,s__19722);
var G__19727 = (i__19723 - 1);
var G__19728 = (sum__19724 + 1);
s__19722 = G__19726;
i__19723 = G__19727;
sum__19724 = G__19728;
continue;
}
} else
{return sum__19724;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__19732 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__19733 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__19734 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__19729 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__19729))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__19729),concat.call(null,cljs.core.rest.call(null,s__19729),y));
} else
{return y;
}
})));
});
var concat__19735 = (function() { 
var G__19737__delegate = function (x,y,zs){
var cat__19731 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__19730 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__19730))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__19730),cat.call(null,cljs.core.rest.call(null,xys__19730),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__19731.call(null,concat.call(null,x,y),zs);
};
var G__19737 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19737__delegate.call(this, x, y, zs);
};
G__19737.cljs$lang$maxFixedArity = 2;
G__19737.cljs$lang$applyTo = (function (arglist__19738){
var x = cljs.core.first(arglist__19738);
var y = cljs.core.first(cljs.core.next(arglist__19738));
var zs = cljs.core.rest(cljs.core.next(arglist__19738));
return G__19737__delegate.call(this, x, y, zs);
});
return G__19737;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__19732.call(this);
case  1 :
return concat__19733.call(this,x);
case  2 :
return concat__19734.call(this,x,y);
default:
return concat__19735.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__19735.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___19739 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___19740 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___19741 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___19742 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___19743 = (function() { 
var G__19745__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__19745 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19745__delegate.call(this, a, b, c, d, more);
};
G__19745.cljs$lang$maxFixedArity = 4;
G__19745.cljs$lang$applyTo = (function (arglist__19746){
var a = cljs.core.first(arglist__19746);
var b = cljs.core.first(cljs.core.next(arglist__19746));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19746)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19746))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19746))));
return G__19745__delegate.call(this, a, b, c, d, more);
});
return G__19745;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___19739.call(this,a);
case  2 :
return list_STAR___19740.call(this,a,b);
case  3 :
return list_STAR___19741.call(this,a,b,c);
case  4 :
return list_STAR___19742.call(this,a,b,c,d);
default:
return list_STAR___19743.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___19743.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__19756 = (function (f,args){
var fixed_arity__19747 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__19747 + 1)) <= fixed_arity__19747)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__19757 = (function (f,x,args){
var arglist__19748 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__19749 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19748,fixed_arity__19749) <= fixed_arity__19749)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19748));
} else
{return f.cljs$lang$applyTo(arglist__19748);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19748));
}
});
var apply__19758 = (function (f,x,y,args){
var arglist__19750 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__19751 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19750,fixed_arity__19751) <= fixed_arity__19751)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19750));
} else
{return f.cljs$lang$applyTo(arglist__19750);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19750));
}
});
var apply__19759 = (function (f,x,y,z,args){
var arglist__19752 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__19753 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19752,fixed_arity__19753) <= fixed_arity__19753)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19752));
} else
{return f.cljs$lang$applyTo(arglist__19752);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19752));
}
});
var apply__19760 = (function() { 
var G__19762__delegate = function (f,a,b,c,d,args){
var arglist__19754 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__19755 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__19754,fixed_arity__19755) <= fixed_arity__19755)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__19754));
} else
{return f.cljs$lang$applyTo(arglist__19754);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__19754));
}
};
var G__19762 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__19762__delegate.call(this, f, a, b, c, d, args);
};
G__19762.cljs$lang$maxFixedArity = 5;
G__19762.cljs$lang$applyTo = (function (arglist__19763){
var f = cljs.core.first(arglist__19763);
var a = cljs.core.first(cljs.core.next(arglist__19763));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19763)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19763))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19763)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19763)))));
return G__19762__delegate.call(this, f, a, b, c, d, args);
});
return G__19762;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__19756.call(this,f,a);
case  3 :
return apply__19757.call(this,f,a,b);
case  4 :
return apply__19758.call(this,f,a,b,c);
case  5 :
return apply__19759.call(this,f,a,b,c,d);
default:
return apply__19760.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__19760.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__19764){
var obj = cljs.core.first(arglist__19764);
var f = cljs.core.first(cljs.core.next(arglist__19764));
var args = cljs.core.rest(cljs.core.next(arglist__19764));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___19765 = (function (x){
return false;
});
var not_EQ___19766 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___19767 = (function() { 
var G__19769__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__19769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19769__delegate.call(this, x, y, more);
};
G__19769.cljs$lang$maxFixedArity = 2;
G__19769.cljs$lang$applyTo = (function (arglist__19770){
var x = cljs.core.first(arglist__19770);
var y = cljs.core.first(cljs.core.next(arglist__19770));
var more = cljs.core.rest(cljs.core.next(arglist__19770));
return G__19769__delegate.call(this, x, y, more);
});
return G__19769;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___19765.call(this,x);
case  2 :
return not_EQ___19766.call(this,x,y);
default:
return not_EQ___19767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___19767.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__19771 = pred;
var G__19772 = cljs.core.next.call(null,coll);
pred = G__19771;
coll = G__19772;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____19773 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____19773))
{return or__3548__auto____19773;
} else
{{
var G__19774 = pred;
var G__19775 = cljs.core.next.call(null,coll);
pred = G__19774;
coll = G__19775;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__19776 = null;
var G__19776__19777 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__19776__19778 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__19776__19779 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__19776__19780 = (function() { 
var G__19782__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__19782 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__19782__delegate.call(this, x, y, zs);
};
G__19782.cljs$lang$maxFixedArity = 2;
G__19782.cljs$lang$applyTo = (function (arglist__19783){
var x = cljs.core.first(arglist__19783);
var y = cljs.core.first(cljs.core.next(arglist__19783));
var zs = cljs.core.rest(cljs.core.next(arglist__19783));
return G__19782__delegate.call(this, x, y, zs);
});
return G__19782;
})()
;
G__19776 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__19776__19777.call(this);
case  1 :
return G__19776__19778.call(this,x);
case  2 :
return G__19776__19779.call(this,x,y);
default:
return G__19776__19780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19776.cljs$lang$maxFixedArity = 2;
G__19776.cljs$lang$applyTo = G__19776__19780.cljs$lang$applyTo;
return G__19776;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__19784__delegate = function (args){
return x;
};
var G__19784 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19784__delegate.call(this, args);
};
G__19784.cljs$lang$maxFixedArity = 0;
G__19784.cljs$lang$applyTo = (function (arglist__19785){
var args = cljs.core.seq( arglist__19785 );;
return G__19784__delegate.call(this, args);
});
return G__19784;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__19789 = (function (){
return cljs.core.identity;
});
var comp__19790 = (function (f){
return f;
});
var comp__19791 = (function (f,g){
return (function() {
var G__19795 = null;
var G__19795__19796 = (function (){
return f.call(null,g.call(null));
});
var G__19795__19797 = (function (x){
return f.call(null,g.call(null,x));
});
var G__19795__19798 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__19795__19799 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__19795__19800 = (function() { 
var G__19802__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__19802 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19802__delegate.call(this, x, y, z, args);
};
G__19802.cljs$lang$maxFixedArity = 3;
G__19802.cljs$lang$applyTo = (function (arglist__19803){
var x = cljs.core.first(arglist__19803);
var y = cljs.core.first(cljs.core.next(arglist__19803));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19803)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19803)));
return G__19802__delegate.call(this, x, y, z, args);
});
return G__19802;
})()
;
G__19795 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19795__19796.call(this);
case  1 :
return G__19795__19797.call(this,x);
case  2 :
return G__19795__19798.call(this,x,y);
case  3 :
return G__19795__19799.call(this,x,y,z);
default:
return G__19795__19800.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19795.cljs$lang$maxFixedArity = 3;
G__19795.cljs$lang$applyTo = G__19795__19800.cljs$lang$applyTo;
return G__19795;
})()
});
var comp__19792 = (function (f,g,h){
return (function() {
var G__19804 = null;
var G__19804__19805 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__19804__19806 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__19804__19807 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__19804__19808 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__19804__19809 = (function() { 
var G__19811__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__19811 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19811__delegate.call(this, x, y, z, args);
};
G__19811.cljs$lang$maxFixedArity = 3;
G__19811.cljs$lang$applyTo = (function (arglist__19812){
var x = cljs.core.first(arglist__19812);
var y = cljs.core.first(cljs.core.next(arglist__19812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19812)));
return G__19811__delegate.call(this, x, y, z, args);
});
return G__19811;
})()
;
G__19804 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__19804__19805.call(this);
case  1 :
return G__19804__19806.call(this,x);
case  2 :
return G__19804__19807.call(this,x,y);
case  3 :
return G__19804__19808.call(this,x,y,z);
default:
return G__19804__19809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19804.cljs$lang$maxFixedArity = 3;
G__19804.cljs$lang$applyTo = G__19804__19809.cljs$lang$applyTo;
return G__19804;
})()
});
var comp__19793 = (function() { 
var G__19813__delegate = function (f1,f2,f3,fs){
var fs__19786 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__19814__delegate = function (args){
var ret__19787 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__19786),args);
var fs__19788 = cljs.core.next.call(null,fs__19786);

while(true){
if(cljs.core.truth_(fs__19788))
{{
var G__19815 = cljs.core.first.call(null,fs__19788).call(null,ret__19787);
var G__19816 = cljs.core.next.call(null,fs__19788);
ret__19787 = G__19815;
fs__19788 = G__19816;
continue;
}
} else
{return ret__19787;
}
break;
}
};
var G__19814 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19814__delegate.call(this, args);
};
G__19814.cljs$lang$maxFixedArity = 0;
G__19814.cljs$lang$applyTo = (function (arglist__19817){
var args = cljs.core.seq( arglist__19817 );;
return G__19814__delegate.call(this, args);
});
return G__19814;
})()
;
};
var G__19813 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19813__delegate.call(this, f1, f2, f3, fs);
};
G__19813.cljs$lang$maxFixedArity = 3;
G__19813.cljs$lang$applyTo = (function (arglist__19818){
var f1 = cljs.core.first(arglist__19818);
var f2 = cljs.core.first(cljs.core.next(arglist__19818));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19818)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19818)));
return G__19813__delegate.call(this, f1, f2, f3, fs);
});
return G__19813;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__19789.call(this);
case  1 :
return comp__19790.call(this,f1);
case  2 :
return comp__19791.call(this,f1,f2);
case  3 :
return comp__19792.call(this,f1,f2,f3);
default:
return comp__19793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__19793.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__19819 = (function (f,arg1){
return (function() { 
var G__19824__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__19824 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19824__delegate.call(this, args);
};
G__19824.cljs$lang$maxFixedArity = 0;
G__19824.cljs$lang$applyTo = (function (arglist__19825){
var args = cljs.core.seq( arglist__19825 );;
return G__19824__delegate.call(this, args);
});
return G__19824;
})()
;
});
var partial__19820 = (function (f,arg1,arg2){
return (function() { 
var G__19826__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__19826 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19826__delegate.call(this, args);
};
G__19826.cljs$lang$maxFixedArity = 0;
G__19826.cljs$lang$applyTo = (function (arglist__19827){
var args = cljs.core.seq( arglist__19827 );;
return G__19826__delegate.call(this, args);
});
return G__19826;
})()
;
});
var partial__19821 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__19828__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__19828 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19828__delegate.call(this, args);
};
G__19828.cljs$lang$maxFixedArity = 0;
G__19828.cljs$lang$applyTo = (function (arglist__19829){
var args = cljs.core.seq( arglist__19829 );;
return G__19828__delegate.call(this, args);
});
return G__19828;
})()
;
});
var partial__19822 = (function() { 
var G__19830__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__19831__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__19831 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__19831__delegate.call(this, args);
};
G__19831.cljs$lang$maxFixedArity = 0;
G__19831.cljs$lang$applyTo = (function (arglist__19832){
var args = cljs.core.seq( arglist__19832 );;
return G__19831__delegate.call(this, args);
});
return G__19831;
})()
;
};
var G__19830 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__19830__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__19830.cljs$lang$maxFixedArity = 4;
G__19830.cljs$lang$applyTo = (function (arglist__19833){
var f = cljs.core.first(arglist__19833);
var arg1 = cljs.core.first(cljs.core.next(arglist__19833));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19833)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19833))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__19833))));
return G__19830__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__19830;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__19819.call(this,f,arg1);
case  3 :
return partial__19820.call(this,f,arg1,arg2);
case  4 :
return partial__19821.call(this,f,arg1,arg2,arg3);
default:
return partial__19822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__19822.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__19834 = (function (f,x){
return (function() {
var G__19838 = null;
var G__19838__19839 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__19838__19840 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__19838__19841 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__19838__19842 = (function() { 
var G__19844__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__19844 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19844__delegate.call(this, a, b, c, ds);
};
G__19844.cljs$lang$maxFixedArity = 3;
G__19844.cljs$lang$applyTo = (function (arglist__19845){
var a = cljs.core.first(arglist__19845);
var b = cljs.core.first(cljs.core.next(arglist__19845));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19845)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19845)));
return G__19844__delegate.call(this, a, b, c, ds);
});
return G__19844;
})()
;
G__19838 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__19838__19839.call(this,a);
case  2 :
return G__19838__19840.call(this,a,b);
case  3 :
return G__19838__19841.call(this,a,b,c);
default:
return G__19838__19842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19838.cljs$lang$maxFixedArity = 3;
G__19838.cljs$lang$applyTo = G__19838__19842.cljs$lang$applyTo;
return G__19838;
})()
});
var fnil__19835 = (function (f,x,y){
return (function() {
var G__19846 = null;
var G__19846__19847 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19846__19848 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__19846__19849 = (function() { 
var G__19851__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__19851 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19851__delegate.call(this, a, b, c, ds);
};
G__19851.cljs$lang$maxFixedArity = 3;
G__19851.cljs$lang$applyTo = (function (arglist__19852){
var a = cljs.core.first(arglist__19852);
var b = cljs.core.first(cljs.core.next(arglist__19852));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19852)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19852)));
return G__19851__delegate.call(this, a, b, c, ds);
});
return G__19851;
})()
;
G__19846 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19846__19847.call(this,a,b);
case  3 :
return G__19846__19848.call(this,a,b,c);
default:
return G__19846__19849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19846.cljs$lang$maxFixedArity = 3;
G__19846.cljs$lang$applyTo = G__19846__19849.cljs$lang$applyTo;
return G__19846;
})()
});
var fnil__19836 = (function (f,x,y,z){
return (function() {
var G__19853 = null;
var G__19853__19854 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__19853__19855 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__19853__19856 = (function() { 
var G__19858__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__19858 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19858__delegate.call(this, a, b, c, ds);
};
G__19858.cljs$lang$maxFixedArity = 3;
G__19858.cljs$lang$applyTo = (function (arglist__19859){
var a = cljs.core.first(arglist__19859);
var b = cljs.core.first(cljs.core.next(arglist__19859));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19859)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19859)));
return G__19858__delegate.call(this, a, b, c, ds);
});
return G__19858;
})()
;
G__19853 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__19853__19854.call(this,a,b);
case  3 :
return G__19853__19855.call(this,a,b,c);
default:
return G__19853__19856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__19853.cljs$lang$maxFixedArity = 3;
G__19853.cljs$lang$applyTo = G__19853__19856.cljs$lang$applyTo;
return G__19853;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__19834.call(this,f,x);
case  3 :
return fnil__19835.call(this,f,x,y);
case  4 :
return fnil__19836.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__19862 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19860))
{var s__19861 = temp__3698__auto____19860;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__19861)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19861)));
} else
{return null;
}
})));
});

return mapi__19862.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19863 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19863))
{var s__19864 = temp__3698__auto____19863;

var x__19865 = f.call(null,cljs.core.first.call(null,s__19864));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19865)))
{return keep.call(null,f,cljs.core.rest.call(null,s__19864));
} else
{return cljs.core.cons.call(null,x__19865,keep.call(null,f,cljs.core.rest.call(null,s__19864)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__19875 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____19872 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____19872))
{var s__19873 = temp__3698__auto____19872;

var x__19874 = f.call(null,idx,cljs.core.first.call(null,s__19873));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__19874)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19873));
} else
{return cljs.core.cons.call(null,x__19874,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__19873)));
}
} else
{return null;
}
})));
});

return keepi__19875.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__19920 = (function (p){
return (function() {
var ep1 = null;
var ep1__19925 = (function (){
return true;
});
var ep1__19926 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__19927 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19882 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19882))
{return p.call(null,y);
} else
{return and__3546__auto____19882;
}
})());
});
var ep1__19928 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19883 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____19883))
{var and__3546__auto____19884 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____19884))
{return p.call(null,z);
} else
{return and__3546__auto____19884;
}
} else
{return and__3546__auto____19883;
}
})());
});
var ep1__19929 = (function() { 
var G__19931__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19885 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19885))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____19885;
}
})());
};
var G__19931 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19931__delegate.call(this, x, y, z, args);
};
G__19931.cljs$lang$maxFixedArity = 3;
G__19931.cljs$lang$applyTo = (function (arglist__19932){
var x = cljs.core.first(arglist__19932);
var y = cljs.core.first(cljs.core.next(arglist__19932));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19932)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19932)));
return G__19931__delegate.call(this, x, y, z, args);
});
return G__19931;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__19925.call(this);
case  1 :
return ep1__19926.call(this,x);
case  2 :
return ep1__19927.call(this,x,y);
case  3 :
return ep1__19928.call(this,x,y,z);
default:
return ep1__19929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__19929.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__19921 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__19933 = (function (){
return true;
});
var ep2__19934 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19886 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19886))
{return p2.call(null,x);
} else
{return and__3546__auto____19886;
}
})());
});
var ep2__19935 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19887 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19887))
{var and__3546__auto____19888 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19888))
{var and__3546__auto____19889 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19889))
{return p2.call(null,y);
} else
{return and__3546__auto____19889;
}
} else
{return and__3546__auto____19888;
}
} else
{return and__3546__auto____19887;
}
})());
});
var ep2__19936 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19890 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19890))
{var and__3546__auto____19891 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19891))
{var and__3546__auto____19892 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____19892))
{var and__3546__auto____19893 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19893))
{var and__3546__auto____19894 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19894))
{return p2.call(null,z);
} else
{return and__3546__auto____19894;
}
} else
{return and__3546__auto____19893;
}
} else
{return and__3546__auto____19892;
}
} else
{return and__3546__auto____19891;
}
} else
{return and__3546__auto____19890;
}
})());
});
var ep2__19937 = (function() { 
var G__19939__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19895 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19895))
{return cljs.core.every_QMARK_.call(null,(function (p1__19866_SHARP_){
var and__3546__auto____19896 = p1.call(null,p1__19866_SHARP_);

if(cljs.core.truth_(and__3546__auto____19896))
{return p2.call(null,p1__19866_SHARP_);
} else
{return and__3546__auto____19896;
}
}),args);
} else
{return and__3546__auto____19895;
}
})());
};
var G__19939 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19939__delegate.call(this, x, y, z, args);
};
G__19939.cljs$lang$maxFixedArity = 3;
G__19939.cljs$lang$applyTo = (function (arglist__19940){
var x = cljs.core.first(arglist__19940);
var y = cljs.core.first(cljs.core.next(arglist__19940));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19940)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19940)));
return G__19939__delegate.call(this, x, y, z, args);
});
return G__19939;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__19933.call(this);
case  1 :
return ep2__19934.call(this,x);
case  2 :
return ep2__19935.call(this,x,y);
case  3 :
return ep2__19936.call(this,x,y,z);
default:
return ep2__19937.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__19937.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__19922 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__19941 = (function (){
return true;
});
var ep3__19942 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19897 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19897))
{var and__3546__auto____19898 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19898))
{return p3.call(null,x);
} else
{return and__3546__auto____19898;
}
} else
{return and__3546__auto____19897;
}
})());
});
var ep3__19943 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19899 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19899))
{var and__3546__auto____19900 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19900))
{var and__3546__auto____19901 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____19901))
{var and__3546__auto____19902 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19902))
{var and__3546__auto____19903 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19903))
{return p3.call(null,y);
} else
{return and__3546__auto____19903;
}
} else
{return and__3546__auto____19902;
}
} else
{return and__3546__auto____19901;
}
} else
{return and__3546__auto____19900;
}
} else
{return and__3546__auto____19899;
}
})());
});
var ep3__19944 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19904 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____19904))
{var and__3546__auto____19905 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____19905))
{var and__3546__auto____19906 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____19906))
{var and__3546__auto____19907 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____19907))
{var and__3546__auto____19908 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____19908))
{var and__3546__auto____19909 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____19909))
{var and__3546__auto____19910 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____19910))
{var and__3546__auto____19911 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____19911))
{return p3.call(null,z);
} else
{return and__3546__auto____19911;
}
} else
{return and__3546__auto____19910;
}
} else
{return and__3546__auto____19909;
}
} else
{return and__3546__auto____19908;
}
} else
{return and__3546__auto____19907;
}
} else
{return and__3546__auto____19906;
}
} else
{return and__3546__auto____19905;
}
} else
{return and__3546__auto____19904;
}
})());
});
var ep3__19945 = (function() { 
var G__19947__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19912 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19912))
{return cljs.core.every_QMARK_.call(null,(function (p1__19867_SHARP_){
var and__3546__auto____19913 = p1.call(null,p1__19867_SHARP_);

if(cljs.core.truth_(and__3546__auto____19913))
{var and__3546__auto____19914 = p2.call(null,p1__19867_SHARP_);

if(cljs.core.truth_(and__3546__auto____19914))
{return p3.call(null,p1__19867_SHARP_);
} else
{return and__3546__auto____19914;
}
} else
{return and__3546__auto____19913;
}
}),args);
} else
{return and__3546__auto____19912;
}
})());
};
var G__19947 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19947__delegate.call(this, x, y, z, args);
};
G__19947.cljs$lang$maxFixedArity = 3;
G__19947.cljs$lang$applyTo = (function (arglist__19948){
var x = cljs.core.first(arglist__19948);
var y = cljs.core.first(cljs.core.next(arglist__19948));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19948)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19948)));
return G__19947__delegate.call(this, x, y, z, args);
});
return G__19947;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__19941.call(this);
case  1 :
return ep3__19942.call(this,x);
case  2 :
return ep3__19943.call(this,x,y);
case  3 :
return ep3__19944.call(this,x,y,z);
default:
return ep3__19945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__19945.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__19923 = (function() { 
var G__19949__delegate = function (p1,p2,p3,ps){
var ps__19915 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__19950 = (function (){
return true;
});
var epn__19951 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__19868_SHARP_){
return p1__19868_SHARP_.call(null,x);
}),ps__19915);
});
var epn__19952 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__19869_SHARP_){
var and__3546__auto____19916 = p1__19869_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____19916))
{return p1__19869_SHARP_.call(null,y);
} else
{return and__3546__auto____19916;
}
}),ps__19915);
});
var epn__19953 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__19870_SHARP_){
var and__3546__auto____19917 = p1__19870_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____19917))
{var and__3546__auto____19918 = p1__19870_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____19918))
{return p1__19870_SHARP_.call(null,z);
} else
{return and__3546__auto____19918;
}
} else
{return and__3546__auto____19917;
}
}),ps__19915);
});
var epn__19954 = (function() { 
var G__19956__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____19919 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____19919))
{return cljs.core.every_QMARK_.call(null,(function (p1__19871_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__19871_SHARP_,args);
}),ps__19915);
} else
{return and__3546__auto____19919;
}
})());
};
var G__19956 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19956__delegate.call(this, x, y, z, args);
};
G__19956.cljs$lang$maxFixedArity = 3;
G__19956.cljs$lang$applyTo = (function (arglist__19957){
var x = cljs.core.first(arglist__19957);
var y = cljs.core.first(cljs.core.next(arglist__19957));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19957)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19957)));
return G__19956__delegate.call(this, x, y, z, args);
});
return G__19956;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__19950.call(this);
case  1 :
return epn__19951.call(this,x);
case  2 :
return epn__19952.call(this,x,y);
case  3 :
return epn__19953.call(this,x,y,z);
default:
return epn__19954.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__19954.cljs$lang$applyTo;
return epn;
})()
};
var G__19949 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__19949__delegate.call(this, p1, p2, p3, ps);
};
G__19949.cljs$lang$maxFixedArity = 3;
G__19949.cljs$lang$applyTo = (function (arglist__19958){
var p1 = cljs.core.first(arglist__19958);
var p2 = cljs.core.first(cljs.core.next(arglist__19958));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__19958)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__19958)));
return G__19949__delegate.call(this, p1, p2, p3, ps);
});
return G__19949;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__19920.call(this,p1);
case  2 :
return every_pred__19921.call(this,p1,p2);
case  3 :
return every_pred__19922.call(this,p1,p2,p3);
default:
return every_pred__19923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__19923.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__19998 = (function (p){
return (function() {
var sp1 = null;
var sp1__20003 = (function (){
return null;
});
var sp1__20004 = (function (x){
return p.call(null,x);
});
var sp1__20005 = (function (x,y){
var or__3548__auto____19960 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____19960))
{return or__3548__auto____19960;
} else
{return p.call(null,y);
}
});
var sp1__20006 = (function (x,y,z){
var or__3548__auto____19961 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____19961))
{return or__3548__auto____19961;
} else
{var or__3548__auto____19962 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____19962))
{return or__3548__auto____19962;
} else
{return p.call(null,z);
}
}
});
var sp1__20007 = (function() { 
var G__20009__delegate = function (x,y,z,args){
var or__3548__auto____19963 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19963))
{return or__3548__auto____19963;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__20009 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20009__delegate.call(this, x, y, z, args);
};
G__20009.cljs$lang$maxFixedArity = 3;
G__20009.cljs$lang$applyTo = (function (arglist__20010){
var x = cljs.core.first(arglist__20010);
var y = cljs.core.first(cljs.core.next(arglist__20010));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20010)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20010)));
return G__20009__delegate.call(this, x, y, z, args);
});
return G__20009;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__20003.call(this);
case  1 :
return sp1__20004.call(this,x);
case  2 :
return sp1__20005.call(this,x,y);
case  3 :
return sp1__20006.call(this,x,y,z);
default:
return sp1__20007.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__20007.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__19999 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__20011 = (function (){
return null;
});
var sp2__20012 = (function (x){
var or__3548__auto____19964 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19964))
{return or__3548__auto____19964;
} else
{return p2.call(null,x);
}
});
var sp2__20013 = (function (x,y){
var or__3548__auto____19965 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19965))
{return or__3548__auto____19965;
} else
{var or__3548__auto____19966 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19966))
{return or__3548__auto____19966;
} else
{var or__3548__auto____19967 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19967))
{return or__3548__auto____19967;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__20014 = (function (x,y,z){
var or__3548__auto____19968 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19968))
{return or__3548__auto____19968;
} else
{var or__3548__auto____19969 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19969))
{return or__3548__auto____19969;
} else
{var or__3548__auto____19970 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____19970))
{return or__3548__auto____19970;
} else
{var or__3548__auto____19971 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19971))
{return or__3548__auto____19971;
} else
{var or__3548__auto____19972 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19972))
{return or__3548__auto____19972;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__20015 = (function() { 
var G__20017__delegate = function (x,y,z,args){
var or__3548__auto____19973 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19973))
{return or__3548__auto____19973;
} else
{return cljs.core.some.call(null,(function (p1__19876_SHARP_){
var or__3548__auto____19974 = p1.call(null,p1__19876_SHARP_);

if(cljs.core.truth_(or__3548__auto____19974))
{return or__3548__auto____19974;
} else
{return p2.call(null,p1__19876_SHARP_);
}
}),args);
}
};
var G__20017 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20017__delegate.call(this, x, y, z, args);
};
G__20017.cljs$lang$maxFixedArity = 3;
G__20017.cljs$lang$applyTo = (function (arglist__20018){
var x = cljs.core.first(arglist__20018);
var y = cljs.core.first(cljs.core.next(arglist__20018));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20018)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20018)));
return G__20017__delegate.call(this, x, y, z, args);
});
return G__20017;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__20011.call(this);
case  1 :
return sp2__20012.call(this,x);
case  2 :
return sp2__20013.call(this,x,y);
case  3 :
return sp2__20014.call(this,x,y,z);
default:
return sp2__20015.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__20015.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__20000 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__20019 = (function (){
return null;
});
var sp3__20020 = (function (x){
var or__3548__auto____19975 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19975))
{return or__3548__auto____19975;
} else
{var or__3548__auto____19976 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19976))
{return or__3548__auto____19976;
} else
{return p3.call(null,x);
}
}
});
var sp3__20021 = (function (x,y){
var or__3548__auto____19977 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19977))
{return or__3548__auto____19977;
} else
{var or__3548__auto____19978 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19978))
{return or__3548__auto____19978;
} else
{var or__3548__auto____19979 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____19979))
{return or__3548__auto____19979;
} else
{var or__3548__auto____19980 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19980))
{return or__3548__auto____19980;
} else
{var or__3548__auto____19981 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19981))
{return or__3548__auto____19981;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__20022 = (function (x,y,z){
var or__3548__auto____19982 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____19982))
{return or__3548__auto____19982;
} else
{var or__3548__auto____19983 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____19983))
{return or__3548__auto____19983;
} else
{var or__3548__auto____19984 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____19984))
{return or__3548__auto____19984;
} else
{var or__3548__auto____19985 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____19985))
{return or__3548__auto____19985;
} else
{var or__3548__auto____19986 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____19986))
{return or__3548__auto____19986;
} else
{var or__3548__auto____19987 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____19987))
{return or__3548__auto____19987;
} else
{var or__3548__auto____19988 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____19988))
{return or__3548__auto____19988;
} else
{var or__3548__auto____19989 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____19989))
{return or__3548__auto____19989;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__20023 = (function() { 
var G__20025__delegate = function (x,y,z,args){
var or__3548__auto____19990 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19990))
{return or__3548__auto____19990;
} else
{return cljs.core.some.call(null,(function (p1__19877_SHARP_){
var or__3548__auto____19991 = p1.call(null,p1__19877_SHARP_);

if(cljs.core.truth_(or__3548__auto____19991))
{return or__3548__auto____19991;
} else
{var or__3548__auto____19992 = p2.call(null,p1__19877_SHARP_);

if(cljs.core.truth_(or__3548__auto____19992))
{return or__3548__auto____19992;
} else
{return p3.call(null,p1__19877_SHARP_);
}
}
}),args);
}
};
var G__20025 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20025__delegate.call(this, x, y, z, args);
};
G__20025.cljs$lang$maxFixedArity = 3;
G__20025.cljs$lang$applyTo = (function (arglist__20026){
var x = cljs.core.first(arglist__20026);
var y = cljs.core.first(cljs.core.next(arglist__20026));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20026)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20026)));
return G__20025__delegate.call(this, x, y, z, args);
});
return G__20025;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__20019.call(this);
case  1 :
return sp3__20020.call(this,x);
case  2 :
return sp3__20021.call(this,x,y);
case  3 :
return sp3__20022.call(this,x,y,z);
default:
return sp3__20023.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__20023.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__20001 = (function() { 
var G__20027__delegate = function (p1,p2,p3,ps){
var ps__19993 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__20028 = (function (){
return null;
});
var spn__20029 = (function (x){
return cljs.core.some.call(null,(function (p1__19878_SHARP_){
return p1__19878_SHARP_.call(null,x);
}),ps__19993);
});
var spn__20030 = (function (x,y){
return cljs.core.some.call(null,(function (p1__19879_SHARP_){
var or__3548__auto____19994 = p1__19879_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____19994))
{return or__3548__auto____19994;
} else
{return p1__19879_SHARP_.call(null,y);
}
}),ps__19993);
});
var spn__20031 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__19880_SHARP_){
var or__3548__auto____19995 = p1__19880_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____19995))
{return or__3548__auto____19995;
} else
{var or__3548__auto____19996 = p1__19880_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____19996))
{return or__3548__auto____19996;
} else
{return p1__19880_SHARP_.call(null,z);
}
}
}),ps__19993);
});
var spn__20032 = (function() { 
var G__20034__delegate = function (x,y,z,args){
var or__3548__auto____19997 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____19997))
{return or__3548__auto____19997;
} else
{return cljs.core.some.call(null,(function (p1__19881_SHARP_){
return cljs.core.some.call(null,p1__19881_SHARP_,args);
}),ps__19993);
}
};
var G__20034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20034__delegate.call(this, x, y, z, args);
};
G__20034.cljs$lang$maxFixedArity = 3;
G__20034.cljs$lang$applyTo = (function (arglist__20035){
var x = cljs.core.first(arglist__20035);
var y = cljs.core.first(cljs.core.next(arglist__20035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20035)));
return G__20034__delegate.call(this, x, y, z, args);
});
return G__20034;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__20028.call(this);
case  1 :
return spn__20029.call(this,x);
case  2 :
return spn__20030.call(this,x,y);
case  3 :
return spn__20031.call(this,x,y,z);
default:
return spn__20032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__20032.cljs$lang$applyTo;
return spn;
})()
};
var G__20027 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20027__delegate.call(this, p1, p2, p3, ps);
};
G__20027.cljs$lang$maxFixedArity = 3;
G__20027.cljs$lang$applyTo = (function (arglist__20036){
var p1 = cljs.core.first(arglist__20036);
var p2 = cljs.core.first(cljs.core.next(arglist__20036));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20036)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20036)));
return G__20027__delegate.call(this, p1, p2, p3, ps);
});
return G__20027;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__19998.call(this,p1);
case  2 :
return some_fn__19999.call(this,p1,p2);
case  3 :
return some_fn__20000.call(this,p1,p2,p3);
default:
return some_fn__20001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__20001.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__20049 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20037 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20037))
{var s__20038 = temp__3698__auto____20037;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__20038)),map.call(null,f,cljs.core.rest.call(null,s__20038)));
} else
{return null;
}
})));
});
var map__20050 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20039 = cljs.core.seq.call(null,c1);
var s2__20040 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20041 = s1__20039;

if(cljs.core.truth_(and__3546__auto____20041))
{return s2__20040;
} else
{return and__3546__auto____20041;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20039),cljs.core.first.call(null,s2__20040)),map.call(null,f,cljs.core.rest.call(null,s1__20039),cljs.core.rest.call(null,s2__20040)));
} else
{return null;
}
})));
});
var map__20051 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20042 = cljs.core.seq.call(null,c1);
var s2__20043 = cljs.core.seq.call(null,c2);
var s3__20044 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____20045 = s1__20042;

if(cljs.core.truth_(and__3546__auto____20045))
{var and__3546__auto____20046 = s2__20043;

if(cljs.core.truth_(and__3546__auto____20046))
{return s3__20044;
} else
{return and__3546__auto____20046;
}
} else
{return and__3546__auto____20045;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__20042),cljs.core.first.call(null,s2__20043),cljs.core.first.call(null,s3__20044)),map.call(null,f,cljs.core.rest.call(null,s1__20042),cljs.core.rest.call(null,s2__20043),cljs.core.rest.call(null,s3__20044)));
} else
{return null;
}
})));
});
var map__20052 = (function() { 
var G__20054__delegate = function (f,c1,c2,c3,colls){
var step__20048 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20047 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20047)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__20047),step.call(null,map.call(null,cljs.core.rest,ss__20047)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__19959_SHARP_){
return cljs.core.apply.call(null,f,p1__19959_SHARP_);
}),step__20048.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__20054 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__20054__delegate.call(this, f, c1, c2, c3, colls);
};
G__20054.cljs$lang$maxFixedArity = 4;
G__20054.cljs$lang$applyTo = (function (arglist__20055){
var f = cljs.core.first(arglist__20055);
var c1 = cljs.core.first(cljs.core.next(arglist__20055));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20055)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20055))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20055))));
return G__20054__delegate.call(this, f, c1, c2, c3, colls);
});
return G__20054;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__20049.call(this,f,c1);
case  3 :
return map__20050.call(this,f,c1,c2);
case  4 :
return map__20051.call(this,f,c1,c2,c3);
default:
return map__20052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__20052.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____20056 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20056))
{var s__20057 = temp__3698__auto____20056;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20057),take.call(null,(n - 1),cljs.core.rest.call(null,s__20057)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__20060 = (function (n,coll){
while(true){
var s__20058 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20059 = (n > 0);

if(cljs.core.truth_(and__3546__auto____20059))
{return s__20058;
} else
{return and__3546__auto____20059;
}
})()))
{{
var G__20061 = (n - 1);
var G__20062 = cljs.core.rest.call(null,s__20058);
n = G__20061;
coll = G__20062;
continue;
}
} else
{return s__20058;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20060.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__20063 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__20064 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__20063.call(this,n);
case  2 :
return drop_last__20064.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__20066 = cljs.core.seq.call(null,coll);
var lead__20067 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__20067))
{{
var G__20068 = cljs.core.next.call(null,s__20066);
var G__20069 = cljs.core.next.call(null,lead__20067);
s__20066 = G__20068;
lead__20067 = G__20069;
continue;
}
} else
{return s__20066;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__20072 = (function (pred,coll){
while(true){
var s__20070 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____20071 = s__20070;

if(cljs.core.truth_(and__3546__auto____20071))
{return pred.call(null,cljs.core.first.call(null,s__20070));
} else
{return and__3546__auto____20071;
}
})()))
{{
var G__20073 = pred;
var G__20074 = cljs.core.rest.call(null,s__20070);
pred = G__20073;
coll = G__20074;
continue;
}
} else
{return s__20070;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__20072.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20075 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20075))
{var s__20076 = temp__3698__auto____20075;

return cljs.core.concat.call(null,s__20076,cycle.call(null,s__20076));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__20077 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__20078 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__20077.call(this,n);
case  2 :
return repeat__20078.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__20080 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__20081 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__20080.call(this,n);
case  2 :
return repeatedly__20081.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__20087 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__20083 = cljs.core.seq.call(null,c1);
var s2__20084 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____20085 = s1__20083;

if(cljs.core.truth_(and__3546__auto____20085))
{return s2__20084;
} else
{return and__3546__auto____20085;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__20083),cljs.core.cons.call(null,cljs.core.first.call(null,s2__20084),interleave.call(null,cljs.core.rest.call(null,s1__20083),cljs.core.rest.call(null,s2__20084))));
} else
{return null;
}
})));
});
var interleave__20088 = (function() { 
var G__20090__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__20086 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__20086)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__20086),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__20086)));
} else
{return null;
}
})));
};
var G__20090 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20090__delegate.call(this, c1, c2, colls);
};
G__20090.cljs$lang$maxFixedArity = 2;
G__20090.cljs$lang$applyTo = (function (arglist__20091){
var c1 = cljs.core.first(arglist__20091);
var c2 = cljs.core.first(cljs.core.next(arglist__20091));
var colls = cljs.core.rest(cljs.core.next(arglist__20091));
return G__20090__delegate.call(this, c1, c2, colls);
});
return G__20090;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__20087.call(this,c1,c2);
default:
return interleave__20088.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__20088.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__20094 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20092 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20092))
{var coll__20093 = temp__3695__auto____20092;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__20093),cat.call(null,cljs.core.rest.call(null,coll__20093),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__20094.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__20095 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__20096 = (function() { 
var G__20098__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__20098 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__20098__delegate.call(this, f, coll, colls);
};
G__20098.cljs$lang$maxFixedArity = 2;
G__20098.cljs$lang$applyTo = (function (arglist__20099){
var f = cljs.core.first(arglist__20099);
var coll = cljs.core.first(cljs.core.next(arglist__20099));
var colls = cljs.core.rest(cljs.core.next(arglist__20099));
return G__20098__delegate.call(this, f, coll, colls);
});
return G__20098;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__20095.call(this,f,coll);
default:
return mapcat__20096.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__20096.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20100 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20100))
{var s__20101 = temp__3698__auto____20100;

var f__20102 = cljs.core.first.call(null,s__20101);
var r__20103 = cljs.core.rest.call(null,s__20101);

if(cljs.core.truth_(pred.call(null,f__20102)))
{return cljs.core.cons.call(null,f__20102,filter.call(null,pred,r__20103));
} else
{return filter.call(null,pred,r__20103);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__20105 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__20105.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__20104_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__20104_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__20112 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__20113 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20106 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20106))
{var s__20107 = temp__3698__auto____20106;

var p__20108 = cljs.core.take.call(null,n,s__20107);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20108))))
{return cljs.core.cons.call(null,p__20108,partition.call(null,n,step,cljs.core.drop.call(null,step,s__20107)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__20114 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20109))
{var s__20110 = temp__3698__auto____20109;

var p__20111 = cljs.core.take.call(null,n,s__20110);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__20111))))
{return cljs.core.cons.call(null,p__20111,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__20110)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__20111,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__20112.call(this,n,step);
case  3 :
return partition__20113.call(this,n,step,pad);
case  4 :
return partition__20114.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__20120 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__20121 = (function (m,ks,not_found){
var sentinel__20116 = cljs.core.lookup_sentinel;
var m__20117 = m;
var ks__20118 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__20118))
{var m__20119 = cljs.core.get.call(null,m__20117,cljs.core.first.call(null,ks__20118),sentinel__20116);

if(cljs.core.truth_((sentinel__20116 === m__20119)))
{return not_found;
} else
{{
var G__20123 = sentinel__20116;
var G__20124 = m__20119;
var G__20125 = cljs.core.next.call(null,ks__20118);
sentinel__20116 = G__20123;
m__20117 = G__20124;
ks__20118 = G__20125;
continue;
}
}
} else
{return m__20117;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__20120.call(this,m,ks);
case  3 :
return get_in__20121.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__20126,v){
var vec__20127__20128 = p__20126;
var k__20129 = cljs.core.nth.call(null,vec__20127__20128,0,null);
var ks__20130 = cljs.core.nthnext.call(null,vec__20127__20128,1);

if(cljs.core.truth_(ks__20130))
{return cljs.core.assoc.call(null,m,k__20129,assoc_in.call(null,cljs.core.get.call(null,m,k__20129),ks__20130,v));
} else
{return cljs.core.assoc.call(null,m,k__20129,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__20131,f,args){
var vec__20132__20133 = p__20131;
var k__20134 = cljs.core.nth.call(null,vec__20132__20133,0,null);
var ks__20135 = cljs.core.nthnext.call(null,vec__20132__20133,1);

if(cljs.core.truth_(ks__20135))
{return cljs.core.assoc.call(null,m,k__20134,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__20134),ks__20135,f,args));
} else
{return cljs.core.assoc.call(null,m,k__20134,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__20134),args));
}
};
var update_in = function (m,p__20131,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__20131, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__20136){
var m = cljs.core.first(arglist__20136);
var p__20131 = cljs.core.first(cljs.core.next(arglist__20136));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20136)));
return update_in__delegate.call(this, m, p__20131, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20137 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20164 = null;
var G__20164__20165 = (function (coll,k){
var this__20138 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20164__20166 = (function (coll,k,not_found){
var this__20139 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20164 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20164__20165.call(this,coll,k);
case  3 :
return G__20164__20166.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20164;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20140 = this;
var new_array__20141 = cljs.core.aclone.call(null,this__20140.array);

(new_array__20141[k] = v);
return (new cljs.core.Vector(this__20140.meta,new_array__20141));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__20168 = null;
var G__20168__20169 = (function (coll,k){
var this__20142 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20168__20170 = (function (coll,k,not_found){
var this__20143 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20168 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20168__20169.call(this,coll,k);
case  3 :
return G__20168__20170.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20168;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20144 = this;
var new_array__20145 = cljs.core.aclone.call(null,this__20144.array);

new_array__20145.push(o);
return (new cljs.core.Vector(this__20144.meta,new_array__20145));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20172 = null;
var G__20172__20173 = (function (v,f){
var this__20146 = this;
return cljs.core.ci_reduce.call(null,this__20146.array,f);
});
var G__20172__20174 = (function (v,f,start){
var this__20147 = this;
return cljs.core.ci_reduce.call(null,this__20147.array,f,start);
});
G__20172 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__20172__20173.call(this,v,f);
case  3 :
return G__20172__20174.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20172;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20148 = this;
if(cljs.core.truth_((this__20148.array.length > 0)))
{var vector_seq__20149 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__20148.array.length)))
{return cljs.core.cons.call(null,(this__20148.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__20149.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20150 = this;
return this__20150.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20151 = this;
var count__20152 = this__20151.array.length;

if(cljs.core.truth_((count__20152 > 0)))
{return (this__20151.array[(count__20152 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20153 = this;
if(cljs.core.truth_((this__20153.array.length > 0)))
{var new_array__20154 = cljs.core.aclone.call(null,this__20153.array);

new_array__20154.pop();
return (new cljs.core.Vector(this__20153.meta,new_array__20154));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20155 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20156 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20157 = this;
return (new cljs.core.Vector(meta,this__20157.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20158 = this;
return this__20158.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20176 = null;
var G__20176__20177 = (function (coll,n){
var this__20159 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20160 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20160))
{return (n < this__20159.array.length);
} else
{return and__3546__auto____20160;
}
})()))
{return (this__20159.array[n]);
} else
{return null;
}
});
var G__20176__20178 = (function (coll,n,not_found){
var this__20161 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20162 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____20162))
{return (n < this__20161.array.length);
} else
{return and__3546__auto____20162;
}
})()))
{return (this__20161.array[n]);
} else
{return not_found;
}
});
G__20176 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20176__20177.call(this,coll,n);
case  3 :
return G__20176__20178.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20176;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20163 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20163.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__20180){
var args = cljs.core.seq( arglist__20180 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20181 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20203 = null;
var G__20203__20204 = (function (coll,k){
var this__20182 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__20203__20205 = (function (coll,k,not_found){
var this__20183 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__20203 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20203__20204.call(this,coll,k);
case  3 :
return G__20203__20205.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20203;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__20184 = this;
var v_pos__20185 = (this__20184.start + key);

return (new cljs.core.Subvec(this__20184.meta,cljs.core._assoc.call(null,this__20184.v,v_pos__20185,val),this__20184.start,((this__20184.end > (v_pos__20185 + 1)) ? this__20184.end : (v_pos__20185 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__20207 = null;
var G__20207__20208 = (function (coll,k){
var this__20186 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20207__20209 = (function (coll,k,not_found){
var this__20187 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20207 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20207__20208.call(this,coll,k);
case  3 :
return G__20207__20209.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20207;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20188 = this;
return (new cljs.core.Subvec(this__20188.meta,cljs.core._assoc_n.call(null,this__20188.v,this__20188.end,o),this__20188.start,(this__20188.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20211 = null;
var G__20211__20212 = (function (coll,f){
var this__20189 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__20211__20213 = (function (coll,f,start){
var this__20190 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__20211 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__20211__20212.call(this,coll,f);
case  3 :
return G__20211__20213.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20211;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20191 = this;
var subvec_seq__20192 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__20191.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__20191.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__20192.call(null,this__20191.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20193 = this;
return (this__20193.end - this__20193.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20194 = this;
return cljs.core._nth.call(null,this__20194.v,(this__20194.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20195 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__20195.start,this__20195.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__20195.meta,this__20195.v,this__20195.start,(this__20195.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__20196 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20198 = this;
return (new cljs.core.Subvec(meta,this__20198.v,this__20198.start,this__20198.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20199 = this;
return this__20199.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20215 = null;
var G__20215__20216 = (function (coll,n){
var this__20200 = this;
return cljs.core._nth.call(null,this__20200.v,(this__20200.start + n));
});
var G__20215__20217 = (function (coll,n,not_found){
var this__20201 = this;
return cljs.core._nth.call(null,this__20201.v,(this__20201.start + n),not_found);
});
G__20215 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__20215__20216.call(this,coll,n);
case  3 :
return G__20215__20217.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20215;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20202 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__20202.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__20219 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__20220 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__20219.call(this,v,start);
case  3 :
return subvec__20220.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20222 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20223 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20224 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20225 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20225.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20226 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20227 = this;
return cljs.core._first.call(null,this__20227.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20228 = this;
var temp__3695__auto____20229 = cljs.core.next.call(null,this__20228.front);

if(cljs.core.truth_(temp__3695__auto____20229))
{var f1__20230 = temp__3695__auto____20229;

return (new cljs.core.PersistentQueueSeq(this__20228.meta,f1__20230,this__20228.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__20228.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__20228.meta,this__20228.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20231 = this;
return this__20231.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20232 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__20232.front,this__20232.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20233 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20234 = this;
if(cljs.core.truth_(this__20234.front))
{return (new cljs.core.PersistentQueue(this__20234.meta,(this__20234.count + 1),this__20234.front,cljs.core.conj.call(null,(function (){var or__3548__auto____20235 = this__20234.rear;

if(cljs.core.truth_(or__3548__auto____20235))
{return or__3548__auto____20235;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__20234.meta,(this__20234.count + 1),cljs.core.conj.call(null,this__20234.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20236 = this;
var rear__20237 = cljs.core.seq.call(null,this__20236.rear);

if(cljs.core.truth_((function (){var or__3548__auto____20238 = this__20236.front;

if(cljs.core.truth_(or__3548__auto____20238))
{return or__3548__auto____20238;
} else
{return rear__20237;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__20236.front,cljs.core.seq.call(null,rear__20237)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20239 = this;
return this__20239.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__20240 = this;
return cljs.core._first.call(null,this__20240.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__20241 = this;
if(cljs.core.truth_(this__20241.front))
{var temp__3695__auto____20242 = cljs.core.next.call(null,this__20241.front);

if(cljs.core.truth_(temp__3695__auto____20242))
{var f1__20243 = temp__3695__auto____20242;

return (new cljs.core.PersistentQueue(this__20241.meta,(this__20241.count - 1),f1__20243,this__20241.rear));
} else
{return (new cljs.core.PersistentQueue(this__20241.meta,(this__20241.count - 1),cljs.core.seq.call(null,this__20241.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__20244 = this;
return cljs.core.first.call(null,this__20244.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__20245 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20246 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20247 = this;
return (new cljs.core.PersistentQueue(meta,this__20247.count,this__20247.front,this__20247.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20248 = this;
return this__20248.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20249 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__20250 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__20251 = array.length;

var i__20252 = 0;

while(true){
if(cljs.core.truth_((i__20252 < len__20251)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__20252]))))
{return i__20252;
} else
{{
var G__20253 = (i__20252 + incr);
i__20252 = G__20253;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___20255 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___20256 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____20254 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20254))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20254;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___20255.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___20256.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20259 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20280 = null;
var G__20280__20281 = (function (coll,k){
var this__20260 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20280__20282 = (function (coll,k,not_found){
var this__20261 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20261.strobj,(this__20261.strobj[k]),not_found);
});
G__20280 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20280__20281.call(this,coll,k);
case  3 :
return G__20280__20282.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20280;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20262 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__20263 = goog.object.clone.call(null,this__20262.strobj);
var overwrite_QMARK___20264 = new_strobj__20263.hasOwnProperty(k);

(new_strobj__20263[k] = v);
if(cljs.core.truth_(overwrite_QMARK___20264))
{return (new cljs.core.ObjMap(this__20262.meta,this__20262.keys,new_strobj__20263));
} else
{var new_keys__20265 = cljs.core.aclone.call(null,this__20262.keys);

new_keys__20265.push(k);
return (new cljs.core.ObjMap(this__20262.meta,new_keys__20265,new_strobj__20263));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__20262.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20266 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__20266.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__20284 = null;
var G__20284__20285 = (function (coll,k){
var this__20267 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20284__20286 = (function (coll,k,not_found){
var this__20268 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20284 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20284__20285.call(this,coll,k);
case  3 :
return G__20284__20286.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20284;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20269 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20270 = this;
if(cljs.core.truth_((this__20270.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__20258_SHARP_){
return cljs.core.vector.call(null,p1__20258_SHARP_,(this__20270.strobj[p1__20258_SHARP_]));
}),this__20270.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20271 = this;
return this__20271.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20272 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20273 = this;
return (new cljs.core.ObjMap(meta,this__20273.keys,this__20273.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20274 = this;
return this__20274.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20275 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__20275.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20276 = this;
if(cljs.core.truth_((function (){var and__3546__auto____20277 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____20277))
{return this__20276.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____20277;
}
})()))
{var new_keys__20278 = cljs.core.aclone.call(null,this__20276.keys);
var new_strobj__20279 = goog.object.clone.call(null,this__20276.strobj);

new_keys__20278.splice(cljs.core.scan_array.call(null,1,k,new_keys__20278),1);
cljs.core.js_delete.call(null,new_strobj__20279,k);
return (new cljs.core.ObjMap(this__20276.meta,new_keys__20278,new_strobj__20279));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20289 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20321 = null;
var G__20321__20322 = (function (coll,k){
var this__20290 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__20321__20323 = (function (coll,k,not_found){
var this__20291 = this;
var bucket__20292 = (this__20291.hashobj[cljs.core.hash.call(null,k)]);
var i__20293 = (cljs.core.truth_(bucket__20292)?cljs.core.scan_array.call(null,2,k,bucket__20292):null);

if(cljs.core.truth_(i__20293))
{return (bucket__20292[(i__20293 + 1)]);
} else
{return not_found;
}
});
G__20321 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20321__20322.call(this,coll,k);
case  3 :
return G__20321__20323.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20321;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__20294 = this;
var h__20295 = cljs.core.hash.call(null,k);
var bucket__20296 = (this__20294.hashobj[h__20295]);

if(cljs.core.truth_(bucket__20296))
{var new_bucket__20297 = cljs.core.aclone.call(null,bucket__20296);
var new_hashobj__20298 = goog.object.clone.call(null,this__20294.hashobj);

(new_hashobj__20298[h__20295] = new_bucket__20297);
var temp__3695__auto____20299 = cljs.core.scan_array.call(null,2,k,new_bucket__20297);

if(cljs.core.truth_(temp__3695__auto____20299))
{var i__20300 = temp__3695__auto____20299;

(new_bucket__20297[(i__20300 + 1)] = v);
return (new cljs.core.HashMap(this__20294.meta,this__20294.count,new_hashobj__20298));
} else
{new_bucket__20297.push(k,v);
return (new cljs.core.HashMap(this__20294.meta,(this__20294.count + 1),new_hashobj__20298));
}
} else
{var new_hashobj__20301 = goog.object.clone.call(null,this__20294.hashobj);

(new_hashobj__20301[h__20295] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__20294.meta,(this__20294.count + 1),new_hashobj__20301));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__20302 = this;
var bucket__20303 = (this__20302.hashobj[cljs.core.hash.call(null,k)]);
var i__20304 = (cljs.core.truth_(bucket__20303)?cljs.core.scan_array.call(null,2,k,bucket__20303):null);

if(cljs.core.truth_(i__20304))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__20325 = null;
var G__20325__20326 = (function (coll,k){
var this__20305 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20325__20327 = (function (coll,k,not_found){
var this__20306 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20325 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20325__20326.call(this,coll,k);
case  3 :
return G__20325__20327.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20325;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__20307 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20308 = this;
if(cljs.core.truth_((this__20308.count > 0)))
{var hashes__20309 = cljs.core.js_keys.call(null,this__20308.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__20288_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__20308.hashobj[p1__20288_SHARP_])));
}),hashes__20309);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20310 = this;
return this__20310.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20311 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20312 = this;
return (new cljs.core.HashMap(meta,this__20312.count,this__20312.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20313 = this;
return this__20313.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20314 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__20314.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__20315 = this;
var h__20316 = cljs.core.hash.call(null,k);
var bucket__20317 = (this__20315.hashobj[h__20316]);
var i__20318 = (cljs.core.truth_(bucket__20317)?cljs.core.scan_array.call(null,2,k,bucket__20317):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__20318)))
{return coll;
} else
{var new_hashobj__20319 = goog.object.clone.call(null,this__20315.hashobj);

if(cljs.core.truth_((3 > bucket__20317.length)))
{cljs.core.js_delete.call(null,new_hashobj__20319,h__20316);
} else
{var new_bucket__20320 = cljs.core.aclone.call(null,bucket__20317);

new_bucket__20320.splice(i__20318,2);
(new_hashobj__20319[h__20316] = new_bucket__20320);
}
return (new cljs.core.HashMap(this__20315.meta,(this__20315.count - 1),new_hashobj__20319));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__20329 = ks.length;

var i__20330 = 0;
var out__20331 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__20330 < len__20329)))
{{
var G__20332 = (i__20330 + 1);
var G__20333 = cljs.core.assoc.call(null,out__20331,(ks[i__20330]),(vs[i__20330]));
i__20330 = G__20332;
out__20331 = G__20333;
continue;
}
} else
{return out__20331;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__20334 = cljs.core.seq.call(null,keyvals);
var out__20335 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__20334))
{{
var G__20336 = cljs.core.nnext.call(null,in$__20334);
var G__20337 = cljs.core.assoc.call(null,out__20335,cljs.core.first.call(null,in$__20334),cljs.core.second.call(null,in$__20334));
in$__20334 = G__20336;
out__20335 = G__20337;
continue;
}
} else
{return out__20335;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__20338){
var keyvals = cljs.core.seq( arglist__20338 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__20339_SHARP_,p2__20340_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____20341 = p1__20339_SHARP_;

if(cljs.core.truth_(or__3548__auto____20341))
{return or__3548__auto____20341;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__20340_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__20342){
var maps = cljs.core.seq( arglist__20342 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__20345 = (function (m,e){
var k__20343 = cljs.core.first.call(null,e);
var v__20344 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__20343)))
{return cljs.core.assoc.call(null,m,k__20343,f.call(null,cljs.core.get.call(null,m,k__20343),v__20344));
} else
{return cljs.core.assoc.call(null,m,k__20343,v__20344);
}
});
var merge2__20347 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__20345,(function (){var or__3548__auto____20346 = m1;

if(cljs.core.truth_(or__3548__auto____20346))
{return or__3548__auto____20346;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__20347,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__20348){
var f = cljs.core.first(arglist__20348);
var maps = cljs.core.rest(arglist__20348);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__20350 = cljs.core.ObjMap.fromObject([],{});
var keys__20351 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__20351))
{var key__20352 = cljs.core.first.call(null,keys__20351);
var entry__20353 = cljs.core.get.call(null,map,key__20352,"﷐'user/not-found");

{
var G__20354 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__20353,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__20350,key__20352,entry__20353):ret__20350);
var G__20355 = cljs.core.next.call(null,keys__20351);
ret__20350 = G__20354;
keys__20351 = G__20355;
continue;
}
} else
{return ret__20350;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__20356 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__20371 = null;
var G__20371__20372 = (function (coll,v){
var this__20357 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__20371__20373 = (function (coll,v,not_found){
var this__20358 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__20358.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__20371 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__20371__20372.call(this,coll,v);
case  3 :
return G__20371__20373.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20371;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__20375 = null;
var G__20375__20376 = (function (coll,k){
var this__20359 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__20375__20377 = (function (coll,k,not_found){
var this__20360 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__20375 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__20375__20376.call(this,coll,k);
case  3 :
return G__20375__20377.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20375;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__20361 = this;
return (new cljs.core.Set(this__20361.meta,cljs.core.assoc.call(null,this__20361.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__20362 = this;
return cljs.core.keys.call(null,this__20362.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__20363 = this;
return (new cljs.core.Set(this__20363.meta,cljs.core.dissoc.call(null,this__20363.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__20364 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__20365 = this;
var and__3546__auto____20366 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____20366))
{var and__3546__auto____20367 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____20367))
{return cljs.core.every_QMARK_.call(null,(function (p1__20349_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__20349_SHARP_);
}),other);
} else
{return and__3546__auto____20367;
}
} else
{return and__3546__auto____20366;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__20368 = this;
return (new cljs.core.Set(meta,this__20368.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__20369 = this;
return this__20369.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__20370 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__20370.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__20380 = cljs.core.seq.call(null,coll);
var out__20381 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__20380))))
{{
var G__20382 = cljs.core.rest.call(null,in$__20380);
var G__20383 = cljs.core.conj.call(null,out__20381,cljs.core.first.call(null,in$__20380));
in$__20380 = G__20382;
out__20381 = G__20383;
continue;
}
} else
{return out__20381;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__20384 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____20385 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____20385))
{var e__20386 = temp__3695__auto____20385;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__20386));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__20384,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__20379_SHARP_){
var temp__3695__auto____20387 = cljs.core.find.call(null,smap,p1__20379_SHARP_);

if(cljs.core.truth_(temp__3695__auto____20387))
{var e__20388 = temp__3695__auto____20387;

return cljs.core.second.call(null,e__20388);
} else
{return p1__20379_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__20396 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__20389,seen){
while(true){
var vec__20390__20391 = p__20389;
var f__20392 = cljs.core.nth.call(null,vec__20390__20391,0,null);
var xs__20393 = vec__20390__20391;

var temp__3698__auto____20394 = cljs.core.seq.call(null,xs__20393);

if(cljs.core.truth_(temp__3698__auto____20394))
{var s__20395 = temp__3698__auto____20394;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__20392)))
{{
var G__20397 = cljs.core.rest.call(null,s__20395);
var G__20398 = seen;
p__20389 = G__20397;
seen = G__20398;
continue;
}
} else
{return cljs.core.cons.call(null,f__20392,step.call(null,cljs.core.rest.call(null,s__20395),cljs.core.conj.call(null,seen,f__20392)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__20396.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__20399 = cljs.core.Vector.fromArray([]);
var s__20400 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__20400)))
{{
var G__20401 = cljs.core.conj.call(null,ret__20399,cljs.core.first.call(null,s__20400));
var G__20402 = cljs.core.next.call(null,s__20400);
ret__20399 = G__20401;
s__20400 = G__20402;
continue;
}
} else
{return cljs.core.seq.call(null,ret__20399);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____20403 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20403))
{return or__3548__auto____20403;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20404 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20404 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__20404 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____20405 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____20405))
{return or__3548__auto____20405;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__20406 = x.lastIndexOf("/");

if(cljs.core.truth_((i__20406 > -1)))
{return cljs.core.subs.call(null,x,2,i__20406);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__20409 = cljs.core.ObjMap.fromObject([],{});
var ks__20410 = cljs.core.seq.call(null,keys);
var vs__20411 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20412 = ks__20410;

if(cljs.core.truth_(and__3546__auto____20412))
{return vs__20411;
} else
{return and__3546__auto____20412;
}
})()))
{{
var G__20413 = cljs.core.assoc.call(null,map__20409,cljs.core.first.call(null,ks__20410),cljs.core.first.call(null,vs__20411));
var G__20414 = cljs.core.next.call(null,ks__20410);
var G__20415 = cljs.core.next.call(null,vs__20411);
map__20409 = G__20413;
ks__20410 = G__20414;
vs__20411 = G__20415;
continue;
}
} else
{return map__20409;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__20418 = (function (k,x){
return x;
});
var max_key__20419 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__20420 = (function() { 
var G__20422__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20407_SHARP_,p2__20408_SHARP_){
return max_key.call(null,k,p1__20407_SHARP_,p2__20408_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__20422 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20422__delegate.call(this, k, x, y, more);
};
G__20422.cljs$lang$maxFixedArity = 3;
G__20422.cljs$lang$applyTo = (function (arglist__20423){
var k = cljs.core.first(arglist__20423);
var x = cljs.core.first(cljs.core.next(arglist__20423));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20423)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20423)));
return G__20422__delegate.call(this, k, x, y, more);
});
return G__20422;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__20418.call(this,k,x);
case  3 :
return max_key__20419.call(this,k,x,y);
default:
return max_key__20420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__20420.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__20424 = (function (k,x){
return x;
});
var min_key__20425 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__20426 = (function() { 
var G__20428__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__20416_SHARP_,p2__20417_SHARP_){
return min_key.call(null,k,p1__20416_SHARP_,p2__20417_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__20428 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20428__delegate.call(this, k, x, y, more);
};
G__20428.cljs$lang$maxFixedArity = 3;
G__20428.cljs$lang$applyTo = (function (arglist__20429){
var k = cljs.core.first(arglist__20429);
var x = cljs.core.first(cljs.core.next(arglist__20429));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20429)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20429)));
return G__20428__delegate.call(this, k, x, y, more);
});
return G__20428;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__20424.call(this,k,x);
case  3 :
return min_key__20425.call(this,k,x,y);
default:
return min_key__20426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__20426.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__20432 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__20433 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20430 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20430))
{var s__20431 = temp__3698__auto____20430;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__20431),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__20431)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__20432.call(this,n,step);
case  3 :
return partition_all__20433.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20435 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20435))
{var s__20436 = temp__3698__auto____20435;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__20436))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__20436),take_while.call(null,pred,cljs.core.rest.call(null,s__20436)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__20437 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__20438 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__20454 = null;
var G__20454__20455 = (function (rng,f){
var this__20439 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__20454__20456 = (function (rng,f,s){
var this__20440 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__20454 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__20454__20455.call(this,rng,f);
case  3 :
return G__20454__20456.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20454;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__20441 = this;
var comp__20442 = (cljs.core.truth_((this__20441.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__20442.call(null,this__20441.start,this__20441.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__20443 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__20443.end - this__20443.start) / this__20443.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__20444 = this;
return this__20444.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__20445 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__20445.meta,(this__20445.start + this__20445.step),this__20445.end,this__20445.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__20446 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__20447 = this;
return (new cljs.core.Range(meta,this__20447.start,this__20447.end,this__20447.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__20448 = this;
return this__20448.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__20458 = null;
var G__20458__20459 = (function (rng,n){
var this__20449 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20449.start + (n * this__20449.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20450 = (this__20449.start > this__20449.end);

if(cljs.core.truth_(and__3546__auto____20450))
{return cljs.core._EQ_.call(null,this__20449.step,0);
} else
{return and__3546__auto____20450;
}
})()))
{return this__20449.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__20458__20460 = (function (rng,n,not_found){
var this__20451 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__20451.start + (n * this__20451.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____20452 = (this__20451.start > this__20451.end);

if(cljs.core.truth_(and__3546__auto____20452))
{return cljs.core._EQ_.call(null,this__20451.step,0);
} else
{return and__3546__auto____20452;
}
})()))
{return this__20451.start;
} else
{return not_found;
}
}
});
G__20458 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__20458__20459.call(this,rng,n);
case  3 :
return G__20458__20460.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__20458;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__20453 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__20453.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__20462 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__20463 = (function (end){
return range.call(null,0,end,1);
});
var range__20464 = (function (start,end){
return range.call(null,start,end,1);
});
var range__20465 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__20462.call(this);
case  1 :
return range__20463.call(this,start);
case  2 :
return range__20464.call(this,start,end);
case  3 :
return range__20465.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20467 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20467))
{var s__20468 = temp__3698__auto____20467;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__20468),take_nth.call(null,n,cljs.core.drop.call(null,n,s__20468)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20470 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20470))
{var s__20471 = temp__3698__auto____20470;

var fst__20472 = cljs.core.first.call(null,s__20471);
var fv__20473 = f.call(null,fst__20472);
var run__20474 = cljs.core.cons.call(null,fst__20472,cljs.core.take_while.call(null,(function (p1__20469_SHARP_){
return cljs.core._EQ_.call(null,fv__20473,f.call(null,p1__20469_SHARP_));
}),cljs.core.next.call(null,s__20471)));

return cljs.core.cons.call(null,run__20474,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__20474),s__20471))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__20489 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____20485 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____20485))
{var s__20486 = temp__3695__auto____20485;

return reductions.call(null,f,cljs.core.first.call(null,s__20486),cljs.core.rest.call(null,s__20486));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__20490 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____20487 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____20487))
{var s__20488 = temp__3698__auto____20487;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__20488)),cljs.core.rest.call(null,s__20488));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__20489.call(this,f,init);
case  3 :
return reductions__20490.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__20493 = (function (f){
return (function() {
var G__20498 = null;
var G__20498__20499 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__20498__20500 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__20498__20501 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__20498__20502 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__20498__20503 = (function() { 
var G__20505__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__20505 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20505__delegate.call(this, x, y, z, args);
};
G__20505.cljs$lang$maxFixedArity = 3;
G__20505.cljs$lang$applyTo = (function (arglist__20506){
var x = cljs.core.first(arglist__20506);
var y = cljs.core.first(cljs.core.next(arglist__20506));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20506)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20506)));
return G__20505__delegate.call(this, x, y, z, args);
});
return G__20505;
})()
;
G__20498 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20498__20499.call(this);
case  1 :
return G__20498__20500.call(this,x);
case  2 :
return G__20498__20501.call(this,x,y);
case  3 :
return G__20498__20502.call(this,x,y,z);
default:
return G__20498__20503.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20498.cljs$lang$maxFixedArity = 3;
G__20498.cljs$lang$applyTo = G__20498__20503.cljs$lang$applyTo;
return G__20498;
})()
});
var juxt__20494 = (function (f,g){
return (function() {
var G__20507 = null;
var G__20507__20508 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__20507__20509 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__20507__20510 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__20507__20511 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__20507__20512 = (function() { 
var G__20514__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__20514 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20514__delegate.call(this, x, y, z, args);
};
G__20514.cljs$lang$maxFixedArity = 3;
G__20514.cljs$lang$applyTo = (function (arglist__20515){
var x = cljs.core.first(arglist__20515);
var y = cljs.core.first(cljs.core.next(arglist__20515));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20515)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20515)));
return G__20514__delegate.call(this, x, y, z, args);
});
return G__20514;
})()
;
G__20507 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20507__20508.call(this);
case  1 :
return G__20507__20509.call(this,x);
case  2 :
return G__20507__20510.call(this,x,y);
case  3 :
return G__20507__20511.call(this,x,y,z);
default:
return G__20507__20512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20507.cljs$lang$maxFixedArity = 3;
G__20507.cljs$lang$applyTo = G__20507__20512.cljs$lang$applyTo;
return G__20507;
})()
});
var juxt__20495 = (function (f,g,h){
return (function() {
var G__20516 = null;
var G__20516__20517 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__20516__20518 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__20516__20519 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__20516__20520 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__20516__20521 = (function() { 
var G__20523__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__20523 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20523__delegate.call(this, x, y, z, args);
};
G__20523.cljs$lang$maxFixedArity = 3;
G__20523.cljs$lang$applyTo = (function (arglist__20524){
var x = cljs.core.first(arglist__20524);
var y = cljs.core.first(cljs.core.next(arglist__20524));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20524)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20524)));
return G__20523__delegate.call(this, x, y, z, args);
});
return G__20523;
})()
;
G__20516 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20516__20517.call(this);
case  1 :
return G__20516__20518.call(this,x);
case  2 :
return G__20516__20519.call(this,x,y);
case  3 :
return G__20516__20520.call(this,x,y,z);
default:
return G__20516__20521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20516.cljs$lang$maxFixedArity = 3;
G__20516.cljs$lang$applyTo = G__20516__20521.cljs$lang$applyTo;
return G__20516;
})()
});
var juxt__20496 = (function() { 
var G__20525__delegate = function (f,g,h,fs){
var fs__20492 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__20526 = null;
var G__20526__20527 = (function (){
return cljs.core.reduce.call(null,(function (p1__20475_SHARP_,p2__20476_SHARP_){
return cljs.core.conj.call(null,p1__20475_SHARP_,p2__20476_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__20492);
});
var G__20526__20528 = (function (x){
return cljs.core.reduce.call(null,(function (p1__20477_SHARP_,p2__20478_SHARP_){
return cljs.core.conj.call(null,p1__20477_SHARP_,p2__20478_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__20492);
});
var G__20526__20529 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__20479_SHARP_,p2__20480_SHARP_){
return cljs.core.conj.call(null,p1__20479_SHARP_,p2__20480_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__20492);
});
var G__20526__20530 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__20481_SHARP_,p2__20482_SHARP_){
return cljs.core.conj.call(null,p1__20481_SHARP_,p2__20482_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__20492);
});
var G__20526__20531 = (function() { 
var G__20533__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__20483_SHARP_,p2__20484_SHARP_){
return cljs.core.conj.call(null,p1__20483_SHARP_,cljs.core.apply.call(null,p2__20484_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__20492);
};
var G__20533 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20533__delegate.call(this, x, y, z, args);
};
G__20533.cljs$lang$maxFixedArity = 3;
G__20533.cljs$lang$applyTo = (function (arglist__20534){
var x = cljs.core.first(arglist__20534);
var y = cljs.core.first(cljs.core.next(arglist__20534));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20534)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20534)));
return G__20533__delegate.call(this, x, y, z, args);
});
return G__20533;
})()
;
G__20526 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__20526__20527.call(this);
case  1 :
return G__20526__20528.call(this,x);
case  2 :
return G__20526__20529.call(this,x,y);
case  3 :
return G__20526__20530.call(this,x,y,z);
default:
return G__20526__20531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__20526.cljs$lang$maxFixedArity = 3;
G__20526.cljs$lang$applyTo = G__20526__20531.cljs$lang$applyTo;
return G__20526;
})()
};
var G__20525 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__20525__delegate.call(this, f, g, h, fs);
};
G__20525.cljs$lang$maxFixedArity = 3;
G__20525.cljs$lang$applyTo = (function (arglist__20535){
var f = cljs.core.first(arglist__20535);
var g = cljs.core.first(cljs.core.next(arglist__20535));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20535)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__20535)));
return G__20525__delegate.call(this, f, g, h, fs);
});
return G__20525;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__20493.call(this,f);
case  2 :
return juxt__20494.call(this,f,g);
case  3 :
return juxt__20495.call(this,f,g,h);
default:
return juxt__20496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__20496.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__20537 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__20540 = cljs.core.next.call(null,coll);
coll = G__20540;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__20538 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____20536 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____20536))
{return (n > 0);
} else
{return and__3546__auto____20536;
}
})()))
{{
var G__20541 = (n - 1);
var G__20542 = cljs.core.next.call(null,coll);
n = G__20541;
coll = G__20542;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__20537.call(this,n);
case  2 :
return dorun__20538.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__20543 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__20544 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__20543.call(this,n);
case  2 :
return doall__20544.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__20546 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__20546),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20546),1)))
{return cljs.core.first.call(null,matches__20546);
} else
{return cljs.core.vec.call(null,matches__20546);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__20547 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__20547)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__20547),1)))
{return cljs.core.first.call(null,matches__20547);
} else
{return cljs.core.vec.call(null,matches__20547);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__20548 = cljs.core.re_find.call(null,re,s);
var match_idx__20549 = s.search(re);
var match_str__20550 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__20548))?cljs.core.first.call(null,match_data__20548):match_data__20548);
var post_match__20551 = cljs.core.subs.call(null,s,(match_idx__20549 + cljs.core.count.call(null,match_str__20550)));

if(cljs.core.truth_(match_data__20548))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__20548,re_seq.call(null,re,post_match__20551));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__20552_SHARP_){
return print_one.call(null,p1__20552_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____20553 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____20553))
{var and__3546__auto____20557 = (function (){var x__445__auto____20554 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20555 = x__445__auto____20554;

if(cljs.core.truth_(and__3546__auto____20555))
{var and__3546__auto____20556 = x__445__auto____20554.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____20556))
{return cljs.core.not.call(null,x__445__auto____20554.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____20556;
}
} else
{return and__3546__auto____20555;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____20554);
}
})();

if(cljs.core.truth_(and__3546__auto____20557))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____20557;
}
} else
{return and__3546__auto____20553;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____20558 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____20559 = x__445__auto____20558;

if(cljs.core.truth_(and__3546__auto____20559))
{var and__3546__auto____20560 = x__445__auto____20558.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____20560))
{return cljs.core.not.call(null,x__445__auto____20558.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____20560;
}
} else
{return and__3546__auto____20559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____20558);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__20561 = cljs.core.first.call(null,objs);
var sb__20562 = (new goog.string.StringBuffer());

var G__20563__20564 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20563__20564))
{var obj__20565 = cljs.core.first.call(null,G__20563__20564);
var G__20563__20566 = G__20563__20564;

while(true){
if(cljs.core.truth_((obj__20565 === first_obj__20561)))
{} else
{sb__20562.append(" ");
}
var G__20567__20568 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20565,opts));

if(cljs.core.truth_(G__20567__20568))
{var string__20569 = cljs.core.first.call(null,G__20567__20568);
var G__20567__20570 = G__20567__20568;

while(true){
sb__20562.append(string__20569);
var temp__3698__auto____20571 = cljs.core.next.call(null,G__20567__20570);

if(cljs.core.truth_(temp__3698__auto____20571))
{var G__20567__20572 = temp__3698__auto____20571;

{
var G__20575 = cljs.core.first.call(null,G__20567__20572);
var G__20576 = G__20567__20572;
string__20569 = G__20575;
G__20567__20570 = G__20576;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20573 = cljs.core.next.call(null,G__20563__20566);

if(cljs.core.truth_(temp__3698__auto____20573))
{var G__20563__20574 = temp__3698__auto____20573;

{
var G__20577 = cljs.core.first.call(null,G__20563__20574);
var G__20578 = G__20563__20574;
obj__20565 = G__20577;
G__20563__20566 = G__20578;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__20562);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__20579 = cljs.core.first.call(null,objs);

var G__20580__20581 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__20580__20581))
{var obj__20582 = cljs.core.first.call(null,G__20580__20581);
var G__20580__20583 = G__20580__20581;

while(true){
if(cljs.core.truth_((obj__20582 === first_obj__20579)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__20584__20585 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__20582,opts));

if(cljs.core.truth_(G__20584__20585))
{var string__20586 = cljs.core.first.call(null,G__20584__20585);
var G__20584__20587 = G__20584__20585;

while(true){
cljs.core.string_print.call(null,string__20586);
var temp__3698__auto____20588 = cljs.core.next.call(null,G__20584__20587);

if(cljs.core.truth_(temp__3698__auto____20588))
{var G__20584__20589 = temp__3698__auto____20588;

{
var G__20592 = cljs.core.first.call(null,G__20584__20589);
var G__20593 = G__20584__20589;
string__20586 = G__20592;
G__20584__20587 = G__20593;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____20590 = cljs.core.next.call(null,G__20580__20583);

if(cljs.core.truth_(temp__3698__auto____20590))
{var G__20580__20591 = temp__3698__auto____20590;

{
var G__20594 = cljs.core.first.call(null,G__20580__20591);
var G__20595 = G__20580__20591;
obj__20582 = G__20594;
G__20580__20583 = G__20595;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__20596){
var objs = cljs.core.seq( arglist__20596 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__20597){
var objs = cljs.core.seq( arglist__20597 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__20598){
var objs = cljs.core.seq( arglist__20598 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__20599){
var objs = cljs.core.seq( arglist__20599 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__20600){
var objs = cljs.core.seq( arglist__20600 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__20601 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20601,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____20602 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20602))
{var nspc__20603 = temp__3698__auto____20602;

return cljs.core.str.call(null,nspc__20603,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____20604 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____20604))
{var nspc__20605 = temp__3698__auto____20604;

return cljs.core.str.call(null,nspc__20605,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__20606 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__20606,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__20607 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__20608 = this;
var G__20609__20610 = cljs.core.seq.call(null,this__20608.watches);

if(cljs.core.truth_(G__20609__20610))
{var G__20612__20614 = cljs.core.first.call(null,G__20609__20610);
var vec__20613__20615 = G__20612__20614;
var key__20616 = cljs.core.nth.call(null,vec__20613__20615,0,null);
var f__20617 = cljs.core.nth.call(null,vec__20613__20615,1,null);
var G__20609__20618 = G__20609__20610;

var G__20612__20619 = G__20612__20614;
var G__20609__20620 = G__20609__20618;

while(true){
var vec__20621__20622 = G__20612__20619;
var key__20623 = cljs.core.nth.call(null,vec__20621__20622,0,null);
var f__20624 = cljs.core.nth.call(null,vec__20621__20622,1,null);
var G__20609__20625 = G__20609__20620;

f__20624.call(null,key__20623,this$,oldval,newval);
var temp__3698__auto____20626 = cljs.core.next.call(null,G__20609__20625);

if(cljs.core.truth_(temp__3698__auto____20626))
{var G__20609__20627 = temp__3698__auto____20626;

{
var G__20634 = cljs.core.first.call(null,G__20609__20627);
var G__20635 = G__20609__20627;
G__20612__20619 = G__20634;
G__20609__20620 = G__20635;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__20628 = this;
return this$.watches = cljs.core.assoc.call(null,this__20628.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__20629 = this;
return this$.watches = cljs.core.dissoc.call(null,this__20629.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__20630 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__20630.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__20631 = this;
return this__20631.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20632 = this;
return this__20632.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__20633 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__20642 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__20643 = (function() { 
var G__20645__delegate = function (x,p__20636){
var map__20637__20638 = p__20636;
var map__20637__20639 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20637__20638))?cljs.core.apply.call(null,cljs.core.hash_map,map__20637__20638):map__20637__20638);
var validator__20640 = cljs.core.get.call(null,map__20637__20639,"﷐'validator");
var meta__20641 = cljs.core.get.call(null,map__20637__20639,"﷐'meta");

return (new cljs.core.Atom(x,meta__20641,validator__20640,null));
};
var G__20645 = function (x,var_args){
var p__20636 = null;
if (goog.isDef(var_args)) {
  p__20636 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20645__delegate.call(this, x, p__20636);
};
G__20645.cljs$lang$maxFixedArity = 1;
G__20645.cljs$lang$applyTo = (function (arglist__20646){
var x = cljs.core.first(arglist__20646);
var p__20636 = cljs.core.rest(arglist__20646);
return G__20645__delegate.call(this, x, p__20636);
});
return G__20645;
})()
;
atom = function(x,var_args){
var p__20636 = var_args;
switch(arguments.length){
case  1 :
return atom__20642.call(this,x);
default:
return atom__20643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__20643.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____20647 = a.validator;

if(cljs.core.truth_(temp__3698__auto____20647))
{var validate__20648 = temp__3698__auto____20647;

if(cljs.core.truth_(validate__20648.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__20649 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__20649,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___20650 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___20651 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___20652 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___20653 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___20654 = (function() { 
var G__20656__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__20656 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__20656__delegate.call(this, a, f, x, y, z, more);
};
G__20656.cljs$lang$maxFixedArity = 5;
G__20656.cljs$lang$applyTo = (function (arglist__20657){
var a = cljs.core.first(arglist__20657);
var f = cljs.core.first(cljs.core.next(arglist__20657));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__20657)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20657))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20657)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__20657)))));
return G__20656__delegate.call(this, a, f, x, y, z, more);
});
return G__20656;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___20650.call(this,a,f);
case  3 :
return swap_BANG___20651.call(this,a,f,x);
case  4 :
return swap_BANG___20652.call(this,a,f,x,y);
case  5 :
return swap_BANG___20653.call(this,a,f,x,y,z);
default:
return swap_BANG___20654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___20654.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__20658){
var iref = cljs.core.first(arglist__20658);
var f = cljs.core.first(cljs.core.next(arglist__20658));
var args = cljs.core.rest(cljs.core.next(arglist__20658));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__20659 = (function (){
return gensym.call(null,"G__");
});
var gensym__20660 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__20659.call(this);
case  1 :
return gensym__20660.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__20662 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__20662.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__20663 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__20663.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__20663.state,this__20663.f);
}
return cljs.core.deref.call(null,this__20663.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__20664){
var body = cljs.core.seq( arglist__20664 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__20665__20666 = options;
var map__20665__20667 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__20665__20666))?cljs.core.apply.call(null,cljs.core.hash_map,map__20665__20666):map__20665__20666);
var keywordize_keys__20668 = cljs.core.get.call(null,map__20665__20667,"﷐'keywordize-keys");
var keyfn__20669 = (cljs.core.truth_(keywordize_keys__20668)?cljs.core.keyword:cljs.core.str);
var f__20675 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____20674 = (function iter__20670(s__20671){
return (new cljs.core.LazySeq(null,false,(function (){
var s__20671__20672 = s__20671;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__20671__20672)))
{var k__20673 = cljs.core.first.call(null,s__20671__20672);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__20669.call(null,k__20673),thisfn.call(null,(x[k__20673]))]),iter__20670.call(null,cljs.core.rest.call(null,s__20671__20672)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____20674.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__20675.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__20676){
var x = cljs.core.first(arglist__20676);
var options = cljs.core.rest(arglist__20676);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__20677 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__20681__delegate = function (args){
var temp__3695__auto____20678 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__20677),args);

if(cljs.core.truth_(temp__3695__auto____20678))
{var v__20679 = temp__3695__auto____20678;

return v__20679;
} else
{var ret__20680 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__20677,cljs.core.assoc,args,ret__20680);
return ret__20680;
}
};
var G__20681 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__20681__delegate.call(this, args);
};
G__20681.cljs$lang$maxFixedArity = 0;
G__20681.cljs$lang$applyTo = (function (arglist__20682){
var args = cljs.core.seq( arglist__20682 );;
return G__20681__delegate.call(this, args);
});
return G__20681;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__20684 = (function (f){
while(true){
var ret__20683 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__20683)))
{{
var G__20687 = ret__20683;
f = G__20687;
continue;
}
} else
{return ret__20683;
}
break;
}
});
var trampoline__20685 = (function() { 
var G__20688__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__20688 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20688__delegate.call(this, f, args);
};
G__20688.cljs$lang$maxFixedArity = 1;
G__20688.cljs$lang$applyTo = (function (arglist__20689){
var f = cljs.core.first(arglist__20689);
var args = cljs.core.rest(arglist__20689);
return G__20688__delegate.call(this, f, args);
});
return G__20688;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__20684.call(this,f);
default:
return trampoline__20685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__20685.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__20690 = (function (){
return rand.call(null,1);
});
var rand__20691 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__20690.call(this);
case  1 :
return rand__20691.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__20693 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__20693,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__20693,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___20702 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___20703 = (function (h,child,parent){
var or__3548__auto____20694 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____20694))
{return or__3548__auto____20694;
} else
{var or__3548__auto____20695 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____20695))
{return or__3548__auto____20695;
} else
{var and__3546__auto____20696 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____20696))
{var and__3546__auto____20697 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____20697))
{var and__3546__auto____20698 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____20698))
{var ret__20699 = true;
var i__20700 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____20701 = cljs.core.not.call(null,ret__20699);

if(cljs.core.truth_(or__3548__auto____20701))
{return or__3548__auto____20701;
} else
{return cljs.core._EQ_.call(null,i__20700,cljs.core.count.call(null,parent));
}
})()))
{return ret__20699;
} else
{{
var G__20705 = isa_QMARK_.call(null,h,child.call(null,i__20700),parent.call(null,i__20700));
var G__20706 = (i__20700 + 1);
ret__20699 = G__20705;
i__20700 = G__20706;
continue;
}
}
break;
}
} else
{return and__3546__auto____20698;
}
} else
{return and__3546__auto____20697;
}
} else
{return and__3546__auto____20696;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___20702.call(this,h,child);
case  3 :
return isa_QMARK___20703.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__20707 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__20708 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__20707.call(this,h);
case  2 :
return parents__20708.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__20710 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__20711 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__20710.call(this,h);
case  2 :
return ancestors__20711.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__20713 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__20714 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__20713.call(this,h);
case  2 :
return descendants__20714.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__20724 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__20725 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__20719 = "﷐'parents".call(null,h);
var td__20720 = "﷐'descendants".call(null,h);
var ta__20721 = "﷐'ancestors".call(null,h);
var tf__20722 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____20723 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__20719.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20721.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__20721.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__20719,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__20722.call(null,"﷐'ancestors".call(null,h),tag,td__20720,parent,ta__20721),"﷐'descendants":tf__20722.call(null,"﷐'descendants".call(null,h),parent,ta__20721,tag,td__20720)});
})());

if(cljs.core.truth_(or__3548__auto____20723))
{return or__3548__auto____20723;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__20724.call(this,h,tag);
case  3 :
return derive__20725.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__20731 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__20732 = (function (h,tag,parent){
var parentMap__20727 = "﷐'parents".call(null,h);
var childsParents__20728 = (cljs.core.truth_(parentMap__20727.call(null,tag))?cljs.core.disj.call(null,parentMap__20727.call(null,tag),parent):cljs.core.set([]));
var newParents__20729 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__20728))?cljs.core.assoc.call(null,parentMap__20727,tag,childsParents__20728):cljs.core.dissoc.call(null,parentMap__20727,tag));
var deriv_seq__20730 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__20716_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__20716_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__20716_SHARP_),cljs.core.second.call(null,p1__20716_SHARP_)));
}),cljs.core.seq.call(null,newParents__20729)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__20727.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__20717_SHARP_,p2__20718_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__20717_SHARP_,p2__20718_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__20730));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__20731.call(this,h,tag);
case  3 :
return underive__20732.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__20734 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____20736 = (cljs.core.truth_((function (){var and__3546__auto____20735 = xprefs__20734;

if(cljs.core.truth_(and__3546__auto____20735))
{return xprefs__20734.call(null,y);
} else
{return and__3546__auto____20735;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____20736))
{return or__3548__auto____20736;
} else
{var or__3548__auto____20738 = (function (){var ps__20737 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20737) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__20737),prefer_table)))
{} else
{}
{
var G__20741 = cljs.core.rest.call(null,ps__20737);
ps__20737 = G__20741;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20738))
{return or__3548__auto____20738;
} else
{var or__3548__auto____20740 = (function (){var ps__20739 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__20739) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__20739),y,prefer_table)))
{} else
{}
{
var G__20742 = cljs.core.rest.call(null,ps__20739);
ps__20739 = G__20742;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____20740))
{return or__3548__auto____20740;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____20743 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____20743))
{return or__3548__auto____20743;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__20752 = cljs.core.reduce.call(null,(function (be,p__20744){
var vec__20745__20746 = p__20744;
var k__20747 = cljs.core.nth.call(null,vec__20745__20746,0,null);
var ___20748 = cljs.core.nth.call(null,vec__20745__20746,1,null);
var e__20749 = vec__20745__20746;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__20747)))
{var be2__20751 = (cljs.core.truth_((function (){var or__3548__auto____20750 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____20750))
{return or__3548__auto____20750;
} else
{return cljs.core.dominates.call(null,k__20747,cljs.core.first.call(null,be),prefer_table);
}
})())?e__20749:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__20751),k__20747,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__20747," and ",cljs.core.first.call(null,be2__20751),", and neither is preferred")));
}
return be2__20751;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__20752))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__20752));
return cljs.core.second.call(null,best_entry__20752);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20753 = mf;

if(cljs.core.truth_(and__3546__auto____20753))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____20753;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____20754 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20754))
{return or__3548__auto____20754;
} else
{var or__3548__auto____20755 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____20755))
{return or__3548__auto____20755;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____20756 = mf;

if(cljs.core.truth_(and__3546__auto____20756))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____20756;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____20757 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20757))
{return or__3548__auto____20757;
} else
{var or__3548__auto____20758 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____20758))
{return or__3548__auto____20758;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20759 = mf;

if(cljs.core.truth_(and__3546__auto____20759))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____20759;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20760 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20760))
{return or__3548__auto____20760;
} else
{var or__3548__auto____20761 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____20761))
{return or__3548__auto____20761;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____20762 = mf;

if(cljs.core.truth_(and__3546__auto____20762))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____20762;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____20763 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20763))
{return or__3548__auto____20763;
} else
{var or__3548__auto____20764 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____20764))
{return or__3548__auto____20764;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____20765 = mf;

if(cljs.core.truth_(and__3546__auto____20765))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____20765;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____20766 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20766))
{return or__3548__auto____20766;
} else
{var or__3548__auto____20767 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____20767))
{return or__3548__auto____20767;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20768 = mf;

if(cljs.core.truth_(and__3546__auto____20768))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____20768;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____20769 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20769))
{return or__3548__auto____20769;
} else
{var or__3548__auto____20770 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____20770))
{return or__3548__auto____20770;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____20771 = mf;

if(cljs.core.truth_(and__3546__auto____20771))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____20771;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____20772 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20772))
{return or__3548__auto____20772;
} else
{var or__3548__auto____20773 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____20773))
{return or__3548__auto____20773;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____20774 = mf;

if(cljs.core.truth_(and__3546__auto____20774))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____20774;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____20775 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____20775))
{return or__3548__auto____20775;
} else
{var or__3548__auto____20776 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____20776))
{return or__3548__auto____20776;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__20777 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__20778 = cljs.core._get_method.call(null,mf,dispatch_val__20777);

if(cljs.core.truth_(target_fn__20778))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__20777)));
}
return cljs.core.apply.call(null,target_fn__20778,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__20779 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__20780 = this;
cljs.core.swap_BANG_.call(null,this__20780.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20780.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20780.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__20780.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__20781 = this;
cljs.core.swap_BANG_.call(null,this__20781.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__20781.method_cache,this__20781.method_table,this__20781.cached_hierarchy,this__20781.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__20782 = this;
cljs.core.swap_BANG_.call(null,this__20782.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__20782.method_cache,this__20782.method_table,this__20782.cached_hierarchy,this__20782.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__20783 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__20783.cached_hierarchy),cljs.core.deref.call(null,this__20783.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__20783.method_cache,this__20783.method_table,this__20783.cached_hierarchy,this__20783.hierarchy);
}
var temp__3695__auto____20784 = cljs.core.deref.call(null,this__20783.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____20784))
{var target_fn__20785 = temp__3695__auto____20784;

return target_fn__20785;
} else
{var temp__3695__auto____20786 = cljs.core.find_and_cache_best_method.call(null,this__20783.name,dispatch_val,this__20783.hierarchy,this__20783.method_table,this__20783.prefer_table,this__20783.method_cache,this__20783.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____20786))
{var target_fn__20787 = temp__3695__auto____20786;

return target_fn__20787;
} else
{return cljs.core.deref.call(null,this__20783.method_table).call(null,this__20783.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__20788 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__20788.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__20788.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__20788.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__20788.method_cache,this__20788.method_table,this__20788.cached_hierarchy,this__20788.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__20789 = this;
return cljs.core.deref.call(null,this__20789.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__20790 = this;
return cljs.core.deref.call(null,this__20790.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__20791 = this;
return cljs.core.do_dispatch.call(null,mf,this__20791.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__20792__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__20792 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__20792__delegate.call(this, _, args);
};
G__20792.cljs$lang$maxFixedArity = 1;
G__20792.cljs$lang$applyTo = (function (arglist__20793){
var _ = cljs.core.first(arglist__20793);
var args = cljs.core.rest(arglist__20793);
return G__20792__delegate.call(this, _, args);
});
return G__20792;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
