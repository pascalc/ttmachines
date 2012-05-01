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
var or__3548__auto____3029 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____3029))
{return or__3548__auto____3029;
} else
{var or__3548__auto____3030 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____3030))
{return or__3548__auto____3030;
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
var _invoke__3094 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____3031 = this$;

if(cljs.core.truth_(and__3546__auto____3031))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3031;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____3032 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3032))
{return or__3548__auto____3032;
} else
{var or__3548__auto____3033 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3033))
{return or__3548__auto____3033;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__3095 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____3034 = this$;

if(cljs.core.truth_(and__3546__auto____3034))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3034;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____3035 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3035))
{return or__3548__auto____3035;
} else
{var or__3548__auto____3036 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3036))
{return or__3548__auto____3036;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__3096 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____3037 = this$;

if(cljs.core.truth_(and__3546__auto____3037))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3037;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____3038 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3038))
{return or__3548__auto____3038;
} else
{var or__3548__auto____3039 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3039))
{return or__3548__auto____3039;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__3097 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____3040 = this$;

if(cljs.core.truth_(and__3546__auto____3040))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3040;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____3041 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3041))
{return or__3548__auto____3041;
} else
{var or__3548__auto____3042 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3042))
{return or__3548__auto____3042;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__3098 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____3043 = this$;

if(cljs.core.truth_(and__3546__auto____3043))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3043;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____3044 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3044))
{return or__3548__auto____3044;
} else
{var or__3548__auto____3045 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3045))
{return or__3548__auto____3045;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__3099 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____3046 = this$;

if(cljs.core.truth_(and__3546__auto____3046))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3046;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____3047 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3047))
{return or__3548__auto____3047;
} else
{var or__3548__auto____3048 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3048))
{return or__3548__auto____3048;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__3100 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____3049 = this$;

if(cljs.core.truth_(and__3546__auto____3049))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3049;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____3050 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3050))
{return or__3548__auto____3050;
} else
{var or__3548__auto____3051 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3051))
{return or__3548__auto____3051;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__3101 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____3052 = this$;

if(cljs.core.truth_(and__3546__auto____3052))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3052;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____3053 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3053))
{return or__3548__auto____3053;
} else
{var or__3548__auto____3054 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3054))
{return or__3548__auto____3054;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__3102 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____3055 = this$;

if(cljs.core.truth_(and__3546__auto____3055))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3055;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____3056 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3056))
{return or__3548__auto____3056;
} else
{var or__3548__auto____3057 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3057))
{return or__3548__auto____3057;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__3103 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____3058 = this$;

if(cljs.core.truth_(and__3546__auto____3058))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3058;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____3059 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3059))
{return or__3548__auto____3059;
} else
{var or__3548__auto____3060 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3060))
{return or__3548__auto____3060;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__3104 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____3061 = this$;

if(cljs.core.truth_(and__3546__auto____3061))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3061;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____3062 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3062))
{return or__3548__auto____3062;
} else
{var or__3548__auto____3063 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3063))
{return or__3548__auto____3063;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__3105 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____3064 = this$;

if(cljs.core.truth_(and__3546__auto____3064))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3064;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____3065 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3065))
{return or__3548__auto____3065;
} else
{var or__3548__auto____3066 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3066))
{return or__3548__auto____3066;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__3106 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____3067 = this$;

if(cljs.core.truth_(and__3546__auto____3067))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3067;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____3068 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3068))
{return or__3548__auto____3068;
} else
{var or__3548__auto____3069 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3069))
{return or__3548__auto____3069;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__3107 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____3070 = this$;

if(cljs.core.truth_(and__3546__auto____3070))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3070;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____3071 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3071))
{return or__3548__auto____3071;
} else
{var or__3548__auto____3072 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3072))
{return or__3548__auto____3072;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__3108 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____3073 = this$;

if(cljs.core.truth_(and__3546__auto____3073))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3073;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____3074 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3074))
{return or__3548__auto____3074;
} else
{var or__3548__auto____3075 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3075))
{return or__3548__auto____3075;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__3109 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____3076 = this$;

if(cljs.core.truth_(and__3546__auto____3076))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3076;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____3077 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3077))
{return or__3548__auto____3077;
} else
{var or__3548__auto____3078 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3078))
{return or__3548__auto____3078;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__3110 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____3079 = this$;

if(cljs.core.truth_(and__3546__auto____3079))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3079;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____3080 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3080))
{return or__3548__auto____3080;
} else
{var or__3548__auto____3081 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3081))
{return or__3548__auto____3081;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__3111 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____3082 = this$;

if(cljs.core.truth_(and__3546__auto____3082))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3082;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____3083 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3083))
{return or__3548__auto____3083;
} else
{var or__3548__auto____3084 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3084))
{return or__3548__auto____3084;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__3112 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____3085 = this$;

if(cljs.core.truth_(and__3546__auto____3085))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3085;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____3086 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3086))
{return or__3548__auto____3086;
} else
{var or__3548__auto____3087 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3087))
{return or__3548__auto____3087;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__3113 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____3088 = this$;

if(cljs.core.truth_(and__3546__auto____3088))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3088;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____3089 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3089))
{return or__3548__auto____3089;
} else
{var or__3548__auto____3090 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3090))
{return or__3548__auto____3090;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__3114 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____3091 = this$;

if(cljs.core.truth_(and__3546__auto____3091))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____3091;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____3092 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3092))
{return or__3548__auto____3092;
} else
{var or__3548__auto____3093 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____3093))
{return or__3548__auto____3093;
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
return _invoke__3094.call(this,this$);
case  2 :
return _invoke__3095.call(this,this$,a);
case  3 :
return _invoke__3096.call(this,this$,a,b);
case  4 :
return _invoke__3097.call(this,this$,a,b,c);
case  5 :
return _invoke__3098.call(this,this$,a,b,c,d);
case  6 :
return _invoke__3099.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__3100.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__3101.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__3102.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__3103.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__3104.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__3105.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__3106.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__3107.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__3108.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__3109.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__3110.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__3111.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__3112.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__3113.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__3114.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3116 = coll;

if(cljs.core.truth_(and__3546__auto____3116))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____3116;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____3117 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3117))
{return or__3548__auto____3117;
} else
{var or__3548__auto____3118 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____3118))
{return or__3548__auto____3118;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3119 = coll;

if(cljs.core.truth_(and__3546__auto____3119))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____3119;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____3120 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3120))
{return or__3548__auto____3120;
} else
{var or__3548__auto____3121 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____3121))
{return or__3548__auto____3121;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____3122 = coll;

if(cljs.core.truth_(and__3546__auto____3122))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____3122;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____3123 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3123))
{return or__3548__auto____3123;
} else
{var or__3548__auto____3124 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____3124))
{return or__3548__auto____3124;
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
var _nth__3131 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____3125 = coll;

if(cljs.core.truth_(and__3546__auto____3125))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3125;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____3126 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3126))
{return or__3548__auto____3126;
} else
{var or__3548__auto____3127 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3127))
{return or__3548__auto____3127;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__3132 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3128 = coll;

if(cljs.core.truth_(and__3546__auto____3128))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____3128;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____3129 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3129))
{return or__3548__auto____3129;
} else
{var or__3548__auto____3130 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____3130))
{return or__3548__auto____3130;
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
return _nth__3131.call(this,coll,n);
case  3 :
return _nth__3132.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3134 = coll;

if(cljs.core.truth_(and__3546__auto____3134))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____3134;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____3135 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3135))
{return or__3548__auto____3135;
} else
{var or__3548__auto____3136 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____3136))
{return or__3548__auto____3136;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3137 = coll;

if(cljs.core.truth_(and__3546__auto____3137))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____3137;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____3138 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3138))
{return or__3548__auto____3138;
} else
{var or__3548__auto____3139 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____3139))
{return or__3548__auto____3139;
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
var _lookup__3146 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____3140 = o;

if(cljs.core.truth_(and__3546__auto____3140))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3140;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____3141 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3141))
{return or__3548__auto____3141;
} else
{var or__3548__auto____3142 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3142))
{return or__3548__auto____3142;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__3147 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____3143 = o;

if(cljs.core.truth_(and__3546__auto____3143))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____3143;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____3144 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3144))
{return or__3548__auto____3144;
} else
{var or__3548__auto____3145 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____3145))
{return or__3548__auto____3145;
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
return _lookup__3146.call(this,o,k);
case  3 :
return _lookup__3147.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3149 = coll;

if(cljs.core.truth_(and__3546__auto____3149))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____3149;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____3150 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3150))
{return or__3548__auto____3150;
} else
{var or__3548__auto____3151 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3151))
{return or__3548__auto____3151;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____3152 = coll;

if(cljs.core.truth_(and__3546__auto____3152))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____3152;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____3153 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3153))
{return or__3548__auto____3153;
} else
{var or__3548__auto____3154 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____3154))
{return or__3548__auto____3154;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____3155 = coll;

if(cljs.core.truth_(and__3546__auto____3155))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____3155;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____3156 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3156))
{return or__3548__auto____3156;
} else
{var or__3548__auto____3157 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____3157))
{return or__3548__auto____3157;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____3158 = coll;

if(cljs.core.truth_(and__3546__auto____3158))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____3158;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____3159 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3159))
{return or__3548__auto____3159;
} else
{var or__3548__auto____3160 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____3160))
{return or__3548__auto____3160;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3161 = coll;

if(cljs.core.truth_(and__3546__auto____3161))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____3161;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____3162 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3162))
{return or__3548__auto____3162;
} else
{var or__3548__auto____3163 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____3163))
{return or__3548__auto____3163;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____3164 = coll;

if(cljs.core.truth_(and__3546__auto____3164))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____3164;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____3165 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3165))
{return or__3548__auto____3165;
} else
{var or__3548__auto____3166 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____3166))
{return or__3548__auto____3166;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____3167 = coll;

if(cljs.core.truth_(and__3546__auto____3167))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____3167;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____3168 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3168))
{return or__3548__auto____3168;
} else
{var or__3548__auto____3169 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____3169))
{return or__3548__auto____3169;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____3170 = o;

if(cljs.core.truth_(and__3546__auto____3170))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____3170;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____3171 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3171))
{return or__3548__auto____3171;
} else
{var or__3548__auto____3172 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____3172))
{return or__3548__auto____3172;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____3173 = o;

if(cljs.core.truth_(and__3546__auto____3173))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____3173;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____3174 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3174))
{return or__3548__auto____3174;
} else
{var or__3548__auto____3175 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____3175))
{return or__3548__auto____3175;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____3176 = o;

if(cljs.core.truth_(and__3546__auto____3176))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____3176;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____3177 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3177))
{return or__3548__auto____3177;
} else
{var or__3548__auto____3178 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____3178))
{return or__3548__auto____3178;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____3179 = o;

if(cljs.core.truth_(and__3546__auto____3179))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____3179;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____3180 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3180))
{return or__3548__auto____3180;
} else
{var or__3548__auto____3181 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____3181))
{return or__3548__auto____3181;
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
var _reduce__3188 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____3182 = coll;

if(cljs.core.truth_(and__3546__auto____3182))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3182;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____3183 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3183))
{return or__3548__auto____3183;
} else
{var or__3548__auto____3184 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3184))
{return or__3548__auto____3184;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__3189 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____3185 = coll;

if(cljs.core.truth_(and__3546__auto____3185))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____3185;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____3186 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____3186))
{return or__3548__auto____3186;
} else
{var or__3548__auto____3187 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____3187))
{return or__3548__auto____3187;
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
return _reduce__3188.call(this,coll,f);
case  3 :
return _reduce__3189.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____3191 = o;

if(cljs.core.truth_(and__3546__auto____3191))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____3191;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____3192 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3192))
{return or__3548__auto____3192;
} else
{var or__3548__auto____3193 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____3193))
{return or__3548__auto____3193;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____3194 = o;

if(cljs.core.truth_(and__3546__auto____3194))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____3194;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____3195 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3195))
{return or__3548__auto____3195;
} else
{var or__3548__auto____3196 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____3196))
{return or__3548__auto____3196;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____3197 = o;

if(cljs.core.truth_(and__3546__auto____3197))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____3197;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____3198 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3198))
{return or__3548__auto____3198;
} else
{var or__3548__auto____3199 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____3199))
{return or__3548__auto____3199;
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
if(cljs.core.truth_((function (){var and__3546__auto____3200 = o;

if(cljs.core.truth_(and__3546__auto____3200))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____3200;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____3201 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____3201))
{return or__3548__auto____3201;
} else
{var or__3548__auto____3202 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____3202))
{return or__3548__auto____3202;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____3203 = d;

if(cljs.core.truth_(and__3546__auto____3203))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____3203;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____3204 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____3204))
{return or__3548__auto____3204;
} else
{var or__3548__auto____3205 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____3205))
{return or__3548__auto____3205;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____3206 = this$;

if(cljs.core.truth_(and__3546__auto____3206))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____3206;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____3207 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3207))
{return or__3548__auto____3207;
} else
{var or__3548__auto____3208 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____3208))
{return or__3548__auto____3208;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____3209 = this$;

if(cljs.core.truth_(and__3546__auto____3209))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____3209;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____3210 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3210))
{return or__3548__auto____3210;
} else
{var or__3548__auto____3211 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3211))
{return or__3548__auto____3211;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____3212 = this$;

if(cljs.core.truth_(and__3546__auto____3212))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____3212;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____3213 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____3213))
{return or__3548__auto____3213;
} else
{var or__3548__auto____3214 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____3214))
{return or__3548__auto____3214;
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
var G__3215 = null;
var G__3215__3216 = (function (o,k){
return null;
});
var G__3215__3217 = (function (o,k,not_found){
return not_found;
});
G__3215 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__3215__3216.call(this,o,k);
case  3 :
return G__3215__3217.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3215;
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
var G__3219 = null;
var G__3219__3220 = (function (_,f){
return f.call(null);
});
var G__3219__3221 = (function (_,f,start){
return start;
});
G__3219 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3219__3220.call(this,_,f);
case  3 :
return G__3219__3221.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3219;
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
var G__3223 = null;
var G__3223__3224 = (function (_,n){
return null;
});
var G__3223__3225 = (function (_,n,not_found){
return not_found;
});
G__3223 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__3223__3224.call(this,_,n);
case  3 :
return G__3223__3225.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3223;
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
var ci_reduce__3233 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__3227 = cljs.core._nth.call(null,cicoll,0);
var n__3228 = 1;

while(true){
if(cljs.core.truth_((n__3228 < cljs.core._count.call(null,cicoll))))
{{
var G__3237 = f.call(null,val__3227,cljs.core._nth.call(null,cicoll,n__3228));
var G__3238 = (n__3228 + 1);
val__3227 = G__3237;
n__3228 = G__3238;
continue;
}
} else
{return val__3227;
}
break;
}
}
});
var ci_reduce__3234 = (function (cicoll,f,val){
var val__3229 = val;
var n__3230 = 0;

while(true){
if(cljs.core.truth_((n__3230 < cljs.core._count.call(null,cicoll))))
{{
var G__3239 = f.call(null,val__3229,cljs.core._nth.call(null,cicoll,n__3230));
var G__3240 = (n__3230 + 1);
val__3229 = G__3239;
n__3230 = G__3240;
continue;
}
} else
{return val__3229;
}
break;
}
});
var ci_reduce__3235 = (function (cicoll,f,val,idx){
var val__3231 = val;
var n__3232 = idx;

while(true){
if(cljs.core.truth_((n__3232 < cljs.core._count.call(null,cicoll))))
{{
var G__3241 = f.call(null,val__3231,cljs.core._nth.call(null,cicoll,n__3232));
var G__3242 = (n__3232 + 1);
val__3231 = G__3241;
n__3232 = G__3242;
continue;
}
} else
{return val__3231;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__3233.call(this,cicoll,f);
case  3 :
return ci_reduce__3234.call(this,cicoll,f,val);
case  4 :
return ci_reduce__3235.call(this,cicoll,f,val,idx);
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
var this__3243 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3256 = null;
var G__3256__3257 = (function (_,f){
var this__3244 = this;
return cljs.core.ci_reduce.call(null,this__3244.a,f,(this__3244.a[this__3244.i]),(this__3244.i + 1));
});
var G__3256__3258 = (function (_,f,start){
var this__3245 = this;
return cljs.core.ci_reduce.call(null,this__3245.a,f,start,this__3245.i);
});
G__3256 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__3256__3257.call(this,_,f);
case  3 :
return G__3256__3258.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3256;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3246 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3247 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3260 = null;
var G__3260__3261 = (function (coll,n){
var this__3248 = this;
var i__3249 = (n + this__3248.i);

if(cljs.core.truth_((i__3249 < this__3248.a.length)))
{return (this__3248.a[i__3249]);
} else
{return null;
}
});
var G__3260__3262 = (function (coll,n,not_found){
var this__3250 = this;
var i__3251 = (n + this__3250.i);

if(cljs.core.truth_((i__3251 < this__3250.a.length)))
{return (this__3250.a[i__3251]);
} else
{return not_found;
}
});
G__3260 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3260__3261.call(this,coll,n);
case  3 :
return G__3260__3262.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3260;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__3252 = this;
return (this__3252.a.length - this__3252.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__3253 = this;
return (this__3253.a[this__3253.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__3254 = this;
if(cljs.core.truth_(((this__3254.i + 1) < this__3254.a.length)))
{return (new cljs.core.IndexedSeq(this__3254.a,(this__3254.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__3255 = this;
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
var G__3264 = null;
var G__3264__3265 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__3264__3266 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__3264 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__3264__3265.call(this,array,f);
case  3 :
return G__3264__3266.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3264;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__3268 = null;
var G__3268__3269 = (function (array,k){
return (array[k]);
});
var G__3268__3270 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__3268 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__3268__3269.call(this,array,k);
case  3 :
return G__3268__3270.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3268;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__3272 = null;
var G__3272__3273 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__3272__3274 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__3272 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__3272__3273.call(this,array,n);
case  3 :
return G__3272__3274.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3272;
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
var temp__3698__auto____3276 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3276))
{var s__3277 = temp__3698__auto____3276;

return cljs.core._first.call(null,s__3277);
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
var G__3278 = cljs.core.next.call(null,s);
s = G__3278;
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
var s__3279 = cljs.core.seq.call(null,x);
var n__3280 = 0;

while(true){
if(cljs.core.truth_(s__3279))
{{
var G__3281 = cljs.core.next.call(null,s__3279);
var G__3282 = (n__3280 + 1);
s__3279 = G__3281;
n__3280 = G__3282;
continue;
}
} else
{return n__3280;
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
var conj__3283 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__3284 = (function() { 
var G__3286__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__3287 = conj.call(null,coll,x);
var G__3288 = cljs.core.first.call(null,xs);
var G__3289 = cljs.core.next.call(null,xs);
coll = G__3287;
x = G__3288;
xs = G__3289;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__3286 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3286__delegate.call(this, coll, x, xs);
};
G__3286.cljs$lang$maxFixedArity = 2;
G__3286.cljs$lang$applyTo = (function (arglist__3290){
var coll = cljs.core.first(arglist__3290);
var x = cljs.core.first(cljs.core.next(arglist__3290));
var xs = cljs.core.rest(cljs.core.next(arglist__3290));
return G__3286__delegate.call(this, coll, x, xs);
});
return G__3286;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__3283.call(this,coll,x);
default:
return conj__3284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__3284.cljs$lang$applyTo;
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
var nth__3291 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__3292 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__3291.call(this,coll,n);
case  3 :
return nth__3292.call(this,coll,n,not_found);
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
var get__3294 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__3295 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__3294.call(this,o,k);
case  3 :
return get__3295.call(this,o,k,not_found);
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
var assoc__3298 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__3299 = (function() { 
var G__3301__delegate = function (coll,k,v,kvs){
while(true){
var ret__3297 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__3302 = ret__3297;
var G__3303 = cljs.core.first.call(null,kvs);
var G__3304 = cljs.core.second.call(null,kvs);
var G__3305 = cljs.core.nnext.call(null,kvs);
coll = G__3302;
k = G__3303;
v = G__3304;
kvs = G__3305;
continue;
}
} else
{return ret__3297;
}
break;
}
};
var G__3301 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3301__delegate.call(this, coll, k, v, kvs);
};
G__3301.cljs$lang$maxFixedArity = 3;
G__3301.cljs$lang$applyTo = (function (arglist__3306){
var coll = cljs.core.first(arglist__3306);
var k = cljs.core.first(cljs.core.next(arglist__3306));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3306)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3306)));
return G__3301__delegate.call(this, coll, k, v, kvs);
});
return G__3301;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__3298.call(this,coll,k,v);
default:
return assoc__3299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__3299.cljs$lang$applyTo;
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
var dissoc__3308 = (function (coll){
return coll;
});
var dissoc__3309 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__3310 = (function() { 
var G__3312__delegate = function (coll,k,ks){
while(true){
var ret__3307 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3313 = ret__3307;
var G__3314 = cljs.core.first.call(null,ks);
var G__3315 = cljs.core.next.call(null,ks);
coll = G__3313;
k = G__3314;
ks = G__3315;
continue;
}
} else
{return ret__3307;
}
break;
}
};
var G__3312 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3312__delegate.call(this, coll, k, ks);
};
G__3312.cljs$lang$maxFixedArity = 2;
G__3312.cljs$lang$applyTo = (function (arglist__3316){
var coll = cljs.core.first(arglist__3316);
var k = cljs.core.first(cljs.core.next(arglist__3316));
var ks = cljs.core.rest(cljs.core.next(arglist__3316));
return G__3312__delegate.call(this, coll, k, ks);
});
return G__3312;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__3308.call(this,coll);
case  2 :
return dissoc__3309.call(this,coll,k);
default:
return dissoc__3310.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__3310.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____3317 = o;

if(cljs.core.truth_((function (){var and__3546__auto____3318 = x__445__auto____3317;

if(cljs.core.truth_(and__3546__auto____3318))
{var and__3546__auto____3319 = x__445__auto____3317.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____3319))
{return cljs.core.not.call(null,x__445__auto____3317.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____3319;
}
} else
{return and__3546__auto____3318;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____3317);
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
var disj__3321 = (function (coll){
return coll;
});
var disj__3322 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__3323 = (function() { 
var G__3325__delegate = function (coll,k,ks){
while(true){
var ret__3320 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__3326 = ret__3320;
var G__3327 = cljs.core.first.call(null,ks);
var G__3328 = cljs.core.next.call(null,ks);
coll = G__3326;
k = G__3327;
ks = G__3328;
continue;
}
} else
{return ret__3320;
}
break;
}
};
var G__3325 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3325__delegate.call(this, coll, k, ks);
};
G__3325.cljs$lang$maxFixedArity = 2;
G__3325.cljs$lang$applyTo = (function (arglist__3329){
var coll = cljs.core.first(arglist__3329);
var k = cljs.core.first(cljs.core.next(arglist__3329));
var ks = cljs.core.rest(cljs.core.next(arglist__3329));
return G__3325__delegate.call(this, coll, k, ks);
});
return G__3325;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__3321.call(this,coll);
case  2 :
return disj__3322.call(this,coll,k);
default:
return disj__3323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__3323.cljs$lang$applyTo;
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
{var x__445__auto____3330 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3331 = x__445__auto____3330;

if(cljs.core.truth_(and__3546__auto____3331))
{var and__3546__auto____3332 = x__445__auto____3330.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____3332))
{return cljs.core.not.call(null,x__445__auto____3330.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____3332;
}
} else
{return and__3546__auto____3331;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____3330);
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
{var x__445__auto____3333 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3334 = x__445__auto____3333;

if(cljs.core.truth_(and__3546__auto____3334))
{var and__3546__auto____3335 = x__445__auto____3333.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____3335))
{return cljs.core.not.call(null,x__445__auto____3333.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____3335;
}
} else
{return and__3546__auto____3334;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____3333);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____3336 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3337 = x__445__auto____3336;

if(cljs.core.truth_(and__3546__auto____3337))
{var and__3546__auto____3338 = x__445__auto____3336.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____3338))
{return cljs.core.not.call(null,x__445__auto____3336.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____3338;
}
} else
{return and__3546__auto____3337;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____3336);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____3339 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3340 = x__445__auto____3339;

if(cljs.core.truth_(and__3546__auto____3340))
{var and__3546__auto____3341 = x__445__auto____3339.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____3341))
{return cljs.core.not.call(null,x__445__auto____3339.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____3341;
}
} else
{return and__3546__auto____3340;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____3339);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____3342 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3343 = x__445__auto____3342;

if(cljs.core.truth_(and__3546__auto____3343))
{var and__3546__auto____3344 = x__445__auto____3342.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____3344))
{return cljs.core.not.call(null,x__445__auto____3342.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____3344;
}
} else
{return and__3546__auto____3343;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____3342);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____3345 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3346 = x__445__auto____3345;

if(cljs.core.truth_(and__3546__auto____3346))
{var and__3546__auto____3347 = x__445__auto____3345.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____3347))
{return cljs.core.not.call(null,x__445__auto____3345.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____3347;
}
} else
{return and__3546__auto____3346;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____3345);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____3348 = x;

if(cljs.core.truth_((function (){var and__3546__auto____3349 = x__445__auto____3348;

if(cljs.core.truth_(and__3546__auto____3349))
{var and__3546__auto____3350 = x__445__auto____3348.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____3350))
{return cljs.core.not.call(null,x__445__auto____3348.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____3350;
}
} else
{return and__3546__auto____3349;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____3348);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__3351 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__3351.push(key);
}));
return keys__3351;
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
{var x__445__auto____3352 = s;

if(cljs.core.truth_((function (){var and__3546__auto____3353 = x__445__auto____3352;

if(cljs.core.truth_(and__3546__auto____3353))
{var and__3546__auto____3354 = x__445__auto____3352.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____3354))
{return cljs.core.not.call(null,x__445__auto____3352.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____3354;
}
} else
{return and__3546__auto____3353;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____3352);
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
var and__3546__auto____3355 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3355))
{return cljs.core.not.call(null,(function (){var or__3548__auto____3356 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____3356))
{return or__3548__auto____3356;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____3355;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____3357 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3357))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____3357;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____3358 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____3358))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____3358;
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
var and__3546__auto____3359 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____3359))
{return (n == n.toFixed());
} else
{return and__3546__auto____3359;
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
if(cljs.core.truth_((function (){var and__3546__auto____3360 = coll;

if(cljs.core.truth_(and__3546__auto____3360))
{var and__3546__auto____3361 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____3361))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____3361;
}
} else
{return and__3546__auto____3360;
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
var distinct_QMARK___3366 = (function (x){
return true;
});
var distinct_QMARK___3367 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___3368 = (function() { 
var G__3370__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__3362 = cljs.core.set([y,x]);
var xs__3363 = more;

while(true){
var x__3364 = cljs.core.first.call(null,xs__3363);
var etc__3365 = cljs.core.next.call(null,xs__3363);

if(cljs.core.truth_(xs__3363))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__3362,x__3364)))
{return false;
} else
{{
var G__3371 = cljs.core.conj.call(null,s__3362,x__3364);
var G__3372 = etc__3365;
s__3362 = G__3371;
xs__3363 = G__3372;
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
var G__3370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3370__delegate.call(this, x, y, more);
};
G__3370.cljs$lang$maxFixedArity = 2;
G__3370.cljs$lang$applyTo = (function (arglist__3373){
var x = cljs.core.first(arglist__3373);
var y = cljs.core.first(cljs.core.next(arglist__3373));
var more = cljs.core.rest(cljs.core.next(arglist__3373));
return G__3370__delegate.call(this, x, y, more);
});
return G__3370;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___3366.call(this,x);
case  2 :
return distinct_QMARK___3367.call(this,x,y);
default:
return distinct_QMARK___3368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___3368.cljs$lang$applyTo;
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
var r__3374 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__3374)))
{return r__3374;
} else
{if(cljs.core.truth_(r__3374))
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
var sort__3376 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__3377 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__3375 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__3375,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__3375);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__3376.call(this,comp);
case  2 :
return sort__3377.call(this,comp,coll);
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
var sort_by__3379 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__3380 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__3379.call(this,keyfn,comp);
case  3 :
return sort_by__3380.call(this,keyfn,comp,coll);
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
var reduce__3382 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__3383 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__3382.call(this,f,val);
case  3 :
return reduce__3383.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__3389 = (function (f,coll){
var temp__3695__auto____3385 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3385))
{var s__3386 = temp__3695__auto____3385;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__3386),cljs.core.next.call(null,s__3386));
} else
{return f.call(null);
}
});
var seq_reduce__3390 = (function (f,val,coll){
var val__3387 = val;
var coll__3388 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__3388))
{{
var G__3392 = f.call(null,val__3387,cljs.core.first.call(null,coll__3388));
var G__3393 = cljs.core.next.call(null,coll__3388);
val__3387 = G__3392;
coll__3388 = G__3393;
continue;
}
} else
{return val__3387;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__3389.call(this,f,val);
case  3 :
return seq_reduce__3390.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__3394 = null;
var G__3394__3395 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__3394__3396 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__3394 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__3394__3395.call(this,coll,f);
case  3 :
return G__3394__3396.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3394;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___3398 = (function (){
return 0;
});
var _PLUS___3399 = (function (x){
return x;
});
var _PLUS___3400 = (function (x,y){
return (x + y);
});
var _PLUS___3401 = (function() { 
var G__3403__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__3403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3403__delegate.call(this, x, y, more);
};
G__3403.cljs$lang$maxFixedArity = 2;
G__3403.cljs$lang$applyTo = (function (arglist__3404){
var x = cljs.core.first(arglist__3404);
var y = cljs.core.first(cljs.core.next(arglist__3404));
var more = cljs.core.rest(cljs.core.next(arglist__3404));
return G__3403__delegate.call(this, x, y, more);
});
return G__3403;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___3398.call(this);
case  1 :
return _PLUS___3399.call(this,x);
case  2 :
return _PLUS___3400.call(this,x,y);
default:
return _PLUS___3401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___3401.cljs$lang$applyTo;
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
var ___3405 = (function (x){
return (- x);
});
var ___3406 = (function (x,y){
return (x - y);
});
var ___3407 = (function() { 
var G__3409__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__3409 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3409__delegate.call(this, x, y, more);
};
G__3409.cljs$lang$maxFixedArity = 2;
G__3409.cljs$lang$applyTo = (function (arglist__3410){
var x = cljs.core.first(arglist__3410);
var y = cljs.core.first(cljs.core.next(arglist__3410));
var more = cljs.core.rest(cljs.core.next(arglist__3410));
return G__3409__delegate.call(this, x, y, more);
});
return G__3409;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___3405.call(this,x);
case  2 :
return ___3406.call(this,x,y);
default:
return ___3407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___3407.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___3411 = (function (){
return 1;
});
var _STAR___3412 = (function (x){
return x;
});
var _STAR___3413 = (function (x,y){
return (x * y);
});
var _STAR___3414 = (function() { 
var G__3416__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__3416 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3416__delegate.call(this, x, y, more);
};
G__3416.cljs$lang$maxFixedArity = 2;
G__3416.cljs$lang$applyTo = (function (arglist__3417){
var x = cljs.core.first(arglist__3417);
var y = cljs.core.first(cljs.core.next(arglist__3417));
var more = cljs.core.rest(cljs.core.next(arglist__3417));
return G__3416__delegate.call(this, x, y, more);
});
return G__3416;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___3411.call(this);
case  1 :
return _STAR___3412.call(this,x);
case  2 :
return _STAR___3413.call(this,x,y);
default:
return _STAR___3414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___3414.cljs$lang$applyTo;
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
var _SLASH___3418 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___3419 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___3420 = (function() { 
var G__3422__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__3422 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3422__delegate.call(this, x, y, more);
};
G__3422.cljs$lang$maxFixedArity = 2;
G__3422.cljs$lang$applyTo = (function (arglist__3423){
var x = cljs.core.first(arglist__3423);
var y = cljs.core.first(cljs.core.next(arglist__3423));
var more = cljs.core.rest(cljs.core.next(arglist__3423));
return G__3422__delegate.call(this, x, y, more);
});
return G__3422;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___3418.call(this,x);
case  2 :
return _SLASH___3419.call(this,x,y);
default:
return _SLASH___3420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___3420.cljs$lang$applyTo;
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
var _LT___3424 = (function (x){
return true;
});
var _LT___3425 = (function (x,y){
return (x < y);
});
var _LT___3426 = (function() { 
var G__3428__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3429 = y;
var G__3430 = cljs.core.first.call(null,more);
var G__3431 = cljs.core.next.call(null,more);
x = G__3429;
y = G__3430;
more = G__3431;
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
var G__3428 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3428__delegate.call(this, x, y, more);
};
G__3428.cljs$lang$maxFixedArity = 2;
G__3428.cljs$lang$applyTo = (function (arglist__3432){
var x = cljs.core.first(arglist__3432);
var y = cljs.core.first(cljs.core.next(arglist__3432));
var more = cljs.core.rest(cljs.core.next(arglist__3432));
return G__3428__delegate.call(this, x, y, more);
});
return G__3428;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___3424.call(this,x);
case  2 :
return _LT___3425.call(this,x,y);
default:
return _LT___3426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___3426.cljs$lang$applyTo;
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
var _LT__EQ___3433 = (function (x){
return true;
});
var _LT__EQ___3434 = (function (x,y){
return (x <= y);
});
var _LT__EQ___3435 = (function() { 
var G__3437__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3438 = y;
var G__3439 = cljs.core.first.call(null,more);
var G__3440 = cljs.core.next.call(null,more);
x = G__3438;
y = G__3439;
more = G__3440;
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
var G__3437 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3437__delegate.call(this, x, y, more);
};
G__3437.cljs$lang$maxFixedArity = 2;
G__3437.cljs$lang$applyTo = (function (arglist__3441){
var x = cljs.core.first(arglist__3441);
var y = cljs.core.first(cljs.core.next(arglist__3441));
var more = cljs.core.rest(cljs.core.next(arglist__3441));
return G__3437__delegate.call(this, x, y, more);
});
return G__3437;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___3433.call(this,x);
case  2 :
return _LT__EQ___3434.call(this,x,y);
default:
return _LT__EQ___3435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___3435.cljs$lang$applyTo;
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
var _GT___3442 = (function (x){
return true;
});
var _GT___3443 = (function (x,y){
return (x > y);
});
var _GT___3444 = (function() { 
var G__3446__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3447 = y;
var G__3448 = cljs.core.first.call(null,more);
var G__3449 = cljs.core.next.call(null,more);
x = G__3447;
y = G__3448;
more = G__3449;
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
var G__3446 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3446__delegate.call(this, x, y, more);
};
G__3446.cljs$lang$maxFixedArity = 2;
G__3446.cljs$lang$applyTo = (function (arglist__3450){
var x = cljs.core.first(arglist__3450);
var y = cljs.core.first(cljs.core.next(arglist__3450));
var more = cljs.core.rest(cljs.core.next(arglist__3450));
return G__3446__delegate.call(this, x, y, more);
});
return G__3446;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___3442.call(this,x);
case  2 :
return _GT___3443.call(this,x,y);
default:
return _GT___3444.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___3444.cljs$lang$applyTo;
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
var _GT__EQ___3451 = (function (x){
return true;
});
var _GT__EQ___3452 = (function (x,y){
return (x >= y);
});
var _GT__EQ___3453 = (function() { 
var G__3455__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3456 = y;
var G__3457 = cljs.core.first.call(null,more);
var G__3458 = cljs.core.next.call(null,more);
x = G__3456;
y = G__3457;
more = G__3458;
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
var G__3455 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3455__delegate.call(this, x, y, more);
};
G__3455.cljs$lang$maxFixedArity = 2;
G__3455.cljs$lang$applyTo = (function (arglist__3459){
var x = cljs.core.first(arglist__3459);
var y = cljs.core.first(cljs.core.next(arglist__3459));
var more = cljs.core.rest(cljs.core.next(arglist__3459));
return G__3455__delegate.call(this, x, y, more);
});
return G__3455;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___3451.call(this,x);
case  2 :
return _GT__EQ___3452.call(this,x,y);
default:
return _GT__EQ___3453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___3453.cljs$lang$applyTo;
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
var max__3460 = (function (x){
return x;
});
var max__3461 = (function (x,y){
return ((x > y) ? x : y);
});
var max__3462 = (function() { 
var G__3464__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__3464 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3464__delegate.call(this, x, y, more);
};
G__3464.cljs$lang$maxFixedArity = 2;
G__3464.cljs$lang$applyTo = (function (arglist__3465){
var x = cljs.core.first(arglist__3465);
var y = cljs.core.first(cljs.core.next(arglist__3465));
var more = cljs.core.rest(cljs.core.next(arglist__3465));
return G__3464__delegate.call(this, x, y, more);
});
return G__3464;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__3460.call(this,x);
case  2 :
return max__3461.call(this,x,y);
default:
return max__3462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__3462.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__3466 = (function (x){
return x;
});
var min__3467 = (function (x,y){
return ((x < y) ? x : y);
});
var min__3468 = (function() { 
var G__3470__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__3470 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3470__delegate.call(this, x, y, more);
};
G__3470.cljs$lang$maxFixedArity = 2;
G__3470.cljs$lang$applyTo = (function (arglist__3471){
var x = cljs.core.first(arglist__3471);
var y = cljs.core.first(cljs.core.next(arglist__3471));
var more = cljs.core.rest(cljs.core.next(arglist__3471));
return G__3470__delegate.call(this, x, y, more);
});
return G__3470;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__3466.call(this,x);
case  2 :
return min__3467.call(this,x,y);
default:
return min__3468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__3468.cljs$lang$applyTo;
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
var rem__3472 = (n % d);

return cljs.core.fix.call(null,((n - rem__3472) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__3473 = cljs.core.quot.call(null,n,d);

return (n - (d * q__3473));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3474 = (function (){
return Math.random.call(null);
});
var rand__3475 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3474.call(this);
case  1 :
return rand__3475.call(this,n);
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
var _EQ__EQ___3477 = (function (x){
return true;
});
var _EQ__EQ___3478 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___3479 = (function() { 
var G__3481__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__3482 = y;
var G__3483 = cljs.core.first.call(null,more);
var G__3484 = cljs.core.next.call(null,more);
x = G__3482;
y = G__3483;
more = G__3484;
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
var G__3481 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3481__delegate.call(this, x, y, more);
};
G__3481.cljs$lang$maxFixedArity = 2;
G__3481.cljs$lang$applyTo = (function (arglist__3485){
var x = cljs.core.first(arglist__3485);
var y = cljs.core.first(cljs.core.next(arglist__3485));
var more = cljs.core.rest(cljs.core.next(arglist__3485));
return G__3481__delegate.call(this, x, y, more);
});
return G__3481;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___3477.call(this,x);
case  2 :
return _EQ__EQ___3478.call(this,x,y);
default:
return _EQ__EQ___3479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___3479.cljs$lang$applyTo;
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
var n__3486 = n;
var xs__3487 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3488 = xs__3487;

if(cljs.core.truth_(and__3546__auto____3488))
{return (n__3486 > 0);
} else
{return and__3546__auto____3488;
}
})()))
{{
var G__3489 = (n__3486 - 1);
var G__3490 = cljs.core.next.call(null,xs__3487);
n__3486 = G__3489;
xs__3487 = G__3490;
continue;
}
} else
{return xs__3487;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__3495 = null;
var G__3495__3496 = (function (coll,n){
var temp__3695__auto____3491 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3491))
{var xs__3492 = temp__3695__auto____3491;

return cljs.core.first.call(null,xs__3492);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__3495__3497 = (function (coll,n,not_found){
var temp__3695__auto____3493 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____3493))
{var xs__3494 = temp__3695__auto____3493;

return cljs.core.first.call(null,xs__3494);
} else
{return not_found;
}
});
G__3495 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3495__3496.call(this,coll,n);
case  3 :
return G__3495__3497.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3495;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___3499 = (function (){
return "";
});
var str_STAR___3500 = (function (x){
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
var str_STAR___3501 = (function() { 
var G__3503__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__3504 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__3505 = cljs.core.next.call(null,more);
sb = G__3504;
more = G__3505;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__3503 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3503__delegate.call(this, x, ys);
};
G__3503.cljs$lang$maxFixedArity = 1;
G__3503.cljs$lang$applyTo = (function (arglist__3506){
var x = cljs.core.first(arglist__3506);
var ys = cljs.core.rest(arglist__3506);
return G__3503__delegate.call(this, x, ys);
});
return G__3503;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___3499.call(this);
case  1 :
return str_STAR___3500.call(this,x);
default:
return str_STAR___3501.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___3501.cljs$lang$applyTo;
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
var str__3507 = (function (){
return "";
});
var str__3508 = (function (x){
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
var str__3509 = (function() { 
var G__3511__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__3511 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3511__delegate.call(this, x, ys);
};
G__3511.cljs$lang$maxFixedArity = 1;
G__3511.cljs$lang$applyTo = (function (arglist__3512){
var x = cljs.core.first(arglist__3512);
var ys = cljs.core.rest(arglist__3512);
return G__3511__delegate.call(this, x, ys);
});
return G__3511;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__3507.call(this);
case  1 :
return str__3508.call(this,x);
default:
return str__3509.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__3509.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__3513 = (function (s,start){
return s.substring(start);
});
var subs__3514 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__3513.call(this,s,start);
case  3 :
return subs__3514.call(this,s,start,end);
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
var symbol__3516 = (function (name){
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
var symbol__3517 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__3516.call(this,ns);
case  2 :
return symbol__3517.call(this,ns,name);
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
var keyword__3519 = (function (name){
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
var keyword__3520 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__3519.call(this,ns);
case  2 :
return keyword__3520.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__3522 = cljs.core.seq.call(null,x);
var ys__3523 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__3522)))
{return cljs.core.nil_QMARK_.call(null,ys__3523);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__3523)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__3522),cljs.core.first.call(null,ys__3523))))
{{
var G__3524 = cljs.core.next.call(null,xs__3522);
var G__3525 = cljs.core.next.call(null,ys__3523);
xs__3522 = G__3524;
ys__3523 = G__3525;
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
return cljs.core.reduce.call(null,(function (p1__3526_SHARP_,p2__3527_SHARP_){
return cljs.core.hash_combine.call(null,p1__3526_SHARP_,cljs.core.hash.call(null,p2__3527_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__3528__3529 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__3528__3529))
{var G__3531__3533 = cljs.core.first.call(null,G__3528__3529);
var vec__3532__3534 = G__3531__3533;
var key_name__3535 = cljs.core.nth.call(null,vec__3532__3534,0,null);
var f__3536 = cljs.core.nth.call(null,vec__3532__3534,1,null);
var G__3528__3537 = G__3528__3529;

var G__3531__3538 = G__3531__3533;
var G__3528__3539 = G__3528__3537;

while(true){
var vec__3540__3541 = G__3531__3538;
var key_name__3542 = cljs.core.nth.call(null,vec__3540__3541,0,null);
var f__3543 = cljs.core.nth.call(null,vec__3540__3541,1,null);
var G__3528__3544 = G__3528__3539;

var str_name__3545 = cljs.core.name.call(null,key_name__3542);

obj[str_name__3545] = f__3543;
var temp__3698__auto____3546 = cljs.core.next.call(null,G__3528__3544);

if(cljs.core.truth_(temp__3698__auto____3546))
{var G__3528__3547 = temp__3698__auto____3546;

{
var G__3548 = cljs.core.first.call(null,G__3528__3547);
var G__3549 = G__3528__3547;
G__3531__3538 = G__3548;
G__3528__3539 = G__3549;
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
var this__3550 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3551 = this;
return (new cljs.core.List(this__3551.meta,o,coll,(this__3551.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3552 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3553 = this;
return this__3553.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3554 = this;
return this__3554.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3555 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3556 = this;
return this__3556.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3557 = this;
return this__3557.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3558 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3559 = this;
return (new cljs.core.List(meta,this__3559.first,this__3559.rest,this__3559.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3560 = this;
return this__3560.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3561 = this;
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
var this__3562 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3563 = this;
return (new cljs.core.List(this__3563.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3564 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3565 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3566 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3567 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3568 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3569 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3571 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3572 = this;
return this__3572.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3573 = this;
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
list.cljs$lang$applyTo = (function (arglist__3574){
var items = cljs.core.seq( arglist__3574 );;
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
var this__3575 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3576 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3577 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3578 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3578.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3579 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3580 = this;
return this__3580.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3581 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__3581.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__3581.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3582 = this;
return this__3582.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3583 = this;
return (new cljs.core.Cons(meta,this__3583.first,this__3583.rest));
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
var G__3584 = null;
var G__3584__3585 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__3584__3586 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__3584 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__3584__3585.call(this,string,f);
case  3 :
return G__3584__3586.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3584;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__3588 = null;
var G__3588__3589 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__3588__3590 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__3588 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__3588__3589.call(this,string,k);
case  3 :
return G__3588__3590.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3588;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__3592 = null;
var G__3592__3593 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__3592__3594 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__3592 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__3592__3593.call(this,string,n);
case  3 :
return G__3592__3594.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3592;
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
var G__3596 = null;
var G__3596__3597 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__3596__3598 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__3596 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__3596__3597.call(this,this$,coll);
case  3 :
return G__3596__3598.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3596;
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
var x__3600 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__3600;
} else
{lazy_seq.x = x__3600.call(null);
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
var this__3601 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3602 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3603 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3604 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3604.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3605 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__3606 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__3607 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3608 = this;
return this__3608.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3609 = this;
return (new cljs.core.LazySeq(meta,this__3609.realized,this__3609.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__3610 = cljs.core.array.call(null);

var s__3611 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3611)))
{ary__3610.push(cljs.core.first.call(null,s__3611));
{
var G__3612 = cljs.core.next.call(null,s__3611);
s__3611 = G__3612;
continue;
}
} else
{return ary__3610;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__3613 = s;
var i__3614 = n;
var sum__3615 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____3616 = (i__3614 > 0);

if(cljs.core.truth_(and__3546__auto____3616))
{return cljs.core.seq.call(null,s__3613);
} else
{return and__3546__auto____3616;
}
})()))
{{
var G__3617 = cljs.core.next.call(null,s__3613);
var G__3618 = (i__3614 - 1);
var G__3619 = (sum__3615 + 1);
s__3613 = G__3617;
i__3614 = G__3618;
sum__3615 = G__3619;
continue;
}
} else
{return sum__3615;
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
var concat__3623 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__3624 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__3625 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3620 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__3620))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3620),concat.call(null,cljs.core.rest.call(null,s__3620),y));
} else
{return y;
}
})));
});
var concat__3626 = (function() { 
var G__3628__delegate = function (x,y,zs){
var cat__3622 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__3621 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__3621))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__3621),cat.call(null,cljs.core.rest.call(null,xys__3621),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__3622.call(null,concat.call(null,x,y),zs);
};
var G__3628 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3628__delegate.call(this, x, y, zs);
};
G__3628.cljs$lang$maxFixedArity = 2;
G__3628.cljs$lang$applyTo = (function (arglist__3629){
var x = cljs.core.first(arglist__3629);
var y = cljs.core.first(cljs.core.next(arglist__3629));
var zs = cljs.core.rest(cljs.core.next(arglist__3629));
return G__3628__delegate.call(this, x, y, zs);
});
return G__3628;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__3623.call(this);
case  1 :
return concat__3624.call(this,x);
case  2 :
return concat__3625.call(this,x,y);
default:
return concat__3626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__3626.cljs$lang$applyTo;
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
var list_STAR___3630 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___3631 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___3632 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___3633 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___3634 = (function() { 
var G__3636__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__3636 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3636__delegate.call(this, a, b, c, d, more);
};
G__3636.cljs$lang$maxFixedArity = 4;
G__3636.cljs$lang$applyTo = (function (arglist__3637){
var a = cljs.core.first(arglist__3637);
var b = cljs.core.first(cljs.core.next(arglist__3637));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3637)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3637))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3637))));
return G__3636__delegate.call(this, a, b, c, d, more);
});
return G__3636;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___3630.call(this,a);
case  2 :
return list_STAR___3631.call(this,a,b);
case  3 :
return list_STAR___3632.call(this,a,b,c);
case  4 :
return list_STAR___3633.call(this,a,b,c,d);
default:
return list_STAR___3634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___3634.cljs$lang$applyTo;
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
var apply__3647 = (function (f,args){
var fixed_arity__3638 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__3638 + 1)) <= fixed_arity__3638)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__3648 = (function (f,x,args){
var arglist__3639 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__3640 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3639,fixed_arity__3640) <= fixed_arity__3640)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3639));
} else
{return f.cljs$lang$applyTo(arglist__3639);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3639));
}
});
var apply__3649 = (function (f,x,y,args){
var arglist__3641 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__3642 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3641,fixed_arity__3642) <= fixed_arity__3642)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3641));
} else
{return f.cljs$lang$applyTo(arglist__3641);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3641));
}
});
var apply__3650 = (function (f,x,y,z,args){
var arglist__3643 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__3644 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3643,fixed_arity__3644) <= fixed_arity__3644)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3643));
} else
{return f.cljs$lang$applyTo(arglist__3643);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3643));
}
});
var apply__3651 = (function() { 
var G__3653__delegate = function (f,a,b,c,d,args){
var arglist__3645 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__3646 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__3645,fixed_arity__3646) <= fixed_arity__3646)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__3645));
} else
{return f.cljs$lang$applyTo(arglist__3645);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__3645));
}
};
var G__3653 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3653__delegate.call(this, f, a, b, c, d, args);
};
G__3653.cljs$lang$maxFixedArity = 5;
G__3653.cljs$lang$applyTo = (function (arglist__3654){
var f = cljs.core.first(arglist__3654);
var a = cljs.core.first(cljs.core.next(arglist__3654));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3654)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3654))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3654)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3654)))));
return G__3653__delegate.call(this, f, a, b, c, d, args);
});
return G__3653;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__3647.call(this,f,a);
case  3 :
return apply__3648.call(this,f,a,b);
case  4 :
return apply__3649.call(this,f,a,b,c);
case  5 :
return apply__3650.call(this,f,a,b,c,d);
default:
return apply__3651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__3651.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__3655){
var obj = cljs.core.first(arglist__3655);
var f = cljs.core.first(cljs.core.next(arglist__3655));
var args = cljs.core.rest(cljs.core.next(arglist__3655));
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
var not_EQ___3656 = (function (x){
return false;
});
var not_EQ___3657 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___3658 = (function() { 
var G__3660__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__3660 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3660__delegate.call(this, x, y, more);
};
G__3660.cljs$lang$maxFixedArity = 2;
G__3660.cljs$lang$applyTo = (function (arglist__3661){
var x = cljs.core.first(arglist__3661);
var y = cljs.core.first(cljs.core.next(arglist__3661));
var more = cljs.core.rest(cljs.core.next(arglist__3661));
return G__3660__delegate.call(this, x, y, more);
});
return G__3660;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___3656.call(this,x);
case  2 :
return not_EQ___3657.call(this,x,y);
default:
return not_EQ___3658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___3658.cljs$lang$applyTo;
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
var G__3662 = pred;
var G__3663 = cljs.core.next.call(null,coll);
pred = G__3662;
coll = G__3663;
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
{var or__3548__auto____3664 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____3664))
{return or__3548__auto____3664;
} else
{{
var G__3665 = pred;
var G__3666 = cljs.core.next.call(null,coll);
pred = G__3665;
coll = G__3666;
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
var G__3667 = null;
var G__3667__3668 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__3667__3669 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__3667__3670 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__3667__3671 = (function() { 
var G__3673__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__3673 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3673__delegate.call(this, x, y, zs);
};
G__3673.cljs$lang$maxFixedArity = 2;
G__3673.cljs$lang$applyTo = (function (arglist__3674){
var x = cljs.core.first(arglist__3674);
var y = cljs.core.first(cljs.core.next(arglist__3674));
var zs = cljs.core.rest(cljs.core.next(arglist__3674));
return G__3673__delegate.call(this, x, y, zs);
});
return G__3673;
})()
;
G__3667 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__3667__3668.call(this);
case  1 :
return G__3667__3669.call(this,x);
case  2 :
return G__3667__3670.call(this,x,y);
default:
return G__3667__3671.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3667.cljs$lang$maxFixedArity = 2;
G__3667.cljs$lang$applyTo = G__3667__3671.cljs$lang$applyTo;
return G__3667;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__3675__delegate = function (args){
return x;
};
var G__3675 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3675__delegate.call(this, args);
};
G__3675.cljs$lang$maxFixedArity = 0;
G__3675.cljs$lang$applyTo = (function (arglist__3676){
var args = cljs.core.seq( arglist__3676 );;
return G__3675__delegate.call(this, args);
});
return G__3675;
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
var comp__3680 = (function (){
return cljs.core.identity;
});
var comp__3681 = (function (f){
return f;
});
var comp__3682 = (function (f,g){
return (function() {
var G__3686 = null;
var G__3686__3687 = (function (){
return f.call(null,g.call(null));
});
var G__3686__3688 = (function (x){
return f.call(null,g.call(null,x));
});
var G__3686__3689 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__3686__3690 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__3686__3691 = (function() { 
var G__3693__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3693 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3693__delegate.call(this, x, y, z, args);
};
G__3693.cljs$lang$maxFixedArity = 3;
G__3693.cljs$lang$applyTo = (function (arglist__3694){
var x = cljs.core.first(arglist__3694);
var y = cljs.core.first(cljs.core.next(arglist__3694));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3694)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3694)));
return G__3693__delegate.call(this, x, y, z, args);
});
return G__3693;
})()
;
G__3686 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3686__3687.call(this);
case  1 :
return G__3686__3688.call(this,x);
case  2 :
return G__3686__3689.call(this,x,y);
case  3 :
return G__3686__3690.call(this,x,y,z);
default:
return G__3686__3691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3686.cljs$lang$maxFixedArity = 3;
G__3686.cljs$lang$applyTo = G__3686__3691.cljs$lang$applyTo;
return G__3686;
})()
});
var comp__3683 = (function (f,g,h){
return (function() {
var G__3695 = null;
var G__3695__3696 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3695__3697 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3695__3698 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3695__3699 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3695__3700 = (function() { 
var G__3702__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3702 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3702__delegate.call(this, x, y, z, args);
};
G__3702.cljs$lang$maxFixedArity = 3;
G__3702.cljs$lang$applyTo = (function (arglist__3703){
var x = cljs.core.first(arglist__3703);
var y = cljs.core.first(cljs.core.next(arglist__3703));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3703)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3703)));
return G__3702__delegate.call(this, x, y, z, args);
});
return G__3702;
})()
;
G__3695 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3695__3696.call(this);
case  1 :
return G__3695__3697.call(this,x);
case  2 :
return G__3695__3698.call(this,x,y);
case  3 :
return G__3695__3699.call(this,x,y,z);
default:
return G__3695__3700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3695.cljs$lang$maxFixedArity = 3;
G__3695.cljs$lang$applyTo = G__3695__3700.cljs$lang$applyTo;
return G__3695;
})()
});
var comp__3684 = (function() { 
var G__3704__delegate = function (f1,f2,f3,fs){
var fs__3677 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3705__delegate = function (args){
var ret__3678 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__3677),args);
var fs__3679 = cljs.core.next.call(null,fs__3677);

while(true){
if(cljs.core.truth_(fs__3679))
{{
var G__3706 = cljs.core.first.call(null,fs__3679).call(null,ret__3678);
var G__3707 = cljs.core.next.call(null,fs__3679);
ret__3678 = G__3706;
fs__3679 = G__3707;
continue;
}
} else
{return ret__3678;
}
break;
}
};
var G__3705 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3705__delegate.call(this, args);
};
G__3705.cljs$lang$maxFixedArity = 0;
G__3705.cljs$lang$applyTo = (function (arglist__3708){
var args = cljs.core.seq( arglist__3708 );;
return G__3705__delegate.call(this, args);
});
return G__3705;
})()
;
};
var G__3704 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3704__delegate.call(this, f1, f2, f3, fs);
};
G__3704.cljs$lang$maxFixedArity = 3;
G__3704.cljs$lang$applyTo = (function (arglist__3709){
var f1 = cljs.core.first(arglist__3709);
var f2 = cljs.core.first(cljs.core.next(arglist__3709));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3709)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3709)));
return G__3704__delegate.call(this, f1, f2, f3, fs);
});
return G__3704;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__3680.call(this);
case  1 :
return comp__3681.call(this,f1);
case  2 :
return comp__3682.call(this,f1,f2);
case  3 :
return comp__3683.call(this,f1,f2,f3);
default:
return comp__3684.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__3684.cljs$lang$applyTo;
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
var partial__3710 = (function (f,arg1){
return (function() { 
var G__3715__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3715 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3715__delegate.call(this, args);
};
G__3715.cljs$lang$maxFixedArity = 0;
G__3715.cljs$lang$applyTo = (function (arglist__3716){
var args = cljs.core.seq( arglist__3716 );;
return G__3715__delegate.call(this, args);
});
return G__3715;
})()
;
});
var partial__3711 = (function (f,arg1,arg2){
return (function() { 
var G__3717__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3717 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3717__delegate.call(this, args);
};
G__3717.cljs$lang$maxFixedArity = 0;
G__3717.cljs$lang$applyTo = (function (arglist__3718){
var args = cljs.core.seq( arglist__3718 );;
return G__3717__delegate.call(this, args);
});
return G__3717;
})()
;
});
var partial__3712 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3719__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3719 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3719__delegate.call(this, args);
};
G__3719.cljs$lang$maxFixedArity = 0;
G__3719.cljs$lang$applyTo = (function (arglist__3720){
var args = cljs.core.seq( arglist__3720 );;
return G__3719__delegate.call(this, args);
});
return G__3719;
})()
;
});
var partial__3713 = (function() { 
var G__3721__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3722__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3722 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3722__delegate.call(this, args);
};
G__3722.cljs$lang$maxFixedArity = 0;
G__3722.cljs$lang$applyTo = (function (arglist__3723){
var args = cljs.core.seq( arglist__3723 );;
return G__3722__delegate.call(this, args);
});
return G__3722;
})()
;
};
var G__3721 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3721__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3721.cljs$lang$maxFixedArity = 4;
G__3721.cljs$lang$applyTo = (function (arglist__3724){
var f = cljs.core.first(arglist__3724);
var arg1 = cljs.core.first(cljs.core.next(arglist__3724));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3724)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3724))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3724))));
return G__3721__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3721;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3710.call(this,f,arg1);
case  3 :
return partial__3711.call(this,f,arg1,arg2);
case  4 :
return partial__3712.call(this,f,arg1,arg2,arg3);
default:
return partial__3713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3713.cljs$lang$applyTo;
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
var fnil__3725 = (function (f,x){
return (function() {
var G__3729 = null;
var G__3729__3730 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3729__3731 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3729__3732 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3729__3733 = (function() { 
var G__3735__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3735 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3735__delegate.call(this, a, b, c, ds);
};
G__3735.cljs$lang$maxFixedArity = 3;
G__3735.cljs$lang$applyTo = (function (arglist__3736){
var a = cljs.core.first(arglist__3736);
var b = cljs.core.first(cljs.core.next(arglist__3736));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3736)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3736)));
return G__3735__delegate.call(this, a, b, c, ds);
});
return G__3735;
})()
;
G__3729 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3729__3730.call(this,a);
case  2 :
return G__3729__3731.call(this,a,b);
case  3 :
return G__3729__3732.call(this,a,b,c);
default:
return G__3729__3733.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3729.cljs$lang$maxFixedArity = 3;
G__3729.cljs$lang$applyTo = G__3729__3733.cljs$lang$applyTo;
return G__3729;
})()
});
var fnil__3726 = (function (f,x,y){
return (function() {
var G__3737 = null;
var G__3737__3738 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3737__3739 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3737__3740 = (function() { 
var G__3742__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3742 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3742__delegate.call(this, a, b, c, ds);
};
G__3742.cljs$lang$maxFixedArity = 3;
G__3742.cljs$lang$applyTo = (function (arglist__3743){
var a = cljs.core.first(arglist__3743);
var b = cljs.core.first(cljs.core.next(arglist__3743));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3743)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3743)));
return G__3742__delegate.call(this, a, b, c, ds);
});
return G__3742;
})()
;
G__3737 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3737__3738.call(this,a,b);
case  3 :
return G__3737__3739.call(this,a,b,c);
default:
return G__3737__3740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3737.cljs$lang$maxFixedArity = 3;
G__3737.cljs$lang$applyTo = G__3737__3740.cljs$lang$applyTo;
return G__3737;
})()
});
var fnil__3727 = (function (f,x,y,z){
return (function() {
var G__3744 = null;
var G__3744__3745 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3744__3746 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3744__3747 = (function() { 
var G__3749__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3749 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3749__delegate.call(this, a, b, c, ds);
};
G__3749.cljs$lang$maxFixedArity = 3;
G__3749.cljs$lang$applyTo = (function (arglist__3750){
var a = cljs.core.first(arglist__3750);
var b = cljs.core.first(cljs.core.next(arglist__3750));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3750)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3750)));
return G__3749__delegate.call(this, a, b, c, ds);
});
return G__3749;
})()
;
G__3744 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3744__3745.call(this,a,b);
case  3 :
return G__3744__3746.call(this,a,b,c);
default:
return G__3744__3747.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3744.cljs$lang$maxFixedArity = 3;
G__3744.cljs$lang$applyTo = G__3744__3747.cljs$lang$applyTo;
return G__3744;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3725.call(this,f,x);
case  3 :
return fnil__3726.call(this,f,x,y);
case  4 :
return fnil__3727.call(this,f,x,y,z);
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
var mapi__3753 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3751 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3751))
{var s__3752 = temp__3698__auto____3751;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3752)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3752)));
} else
{return null;
}
})));
});

return mapi__3753.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3754))
{var s__3755 = temp__3698__auto____3754;

var x__3756 = f.call(null,cljs.core.first.call(null,s__3755));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3756)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3755));
} else
{return cljs.core.cons.call(null,x__3756,keep.call(null,f,cljs.core.rest.call(null,s__3755)));
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
var keepi__3766 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3763))
{var s__3764 = temp__3698__auto____3763;

var x__3765 = f.call(null,idx,cljs.core.first.call(null,s__3764));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3765)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3764));
} else
{return cljs.core.cons.call(null,x__3765,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__3764)));
}
} else
{return null;
}
})));
});

return keepi__3766.call(null,0,coll);
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
var every_pred__3811 = (function (p){
return (function() {
var ep1 = null;
var ep1__3816 = (function (){
return true;
});
var ep1__3817 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3818 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3773 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3773))
{return p.call(null,y);
} else
{return and__3546__auto____3773;
}
})());
});
var ep1__3819 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3774 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____3774))
{var and__3546__auto____3775 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____3775))
{return p.call(null,z);
} else
{return and__3546__auto____3775;
}
} else
{return and__3546__auto____3774;
}
})());
});
var ep1__3820 = (function() { 
var G__3822__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3776 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3776))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____3776;
}
})());
};
var G__3822 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3822__delegate.call(this, x, y, z, args);
};
G__3822.cljs$lang$maxFixedArity = 3;
G__3822.cljs$lang$applyTo = (function (arglist__3823){
var x = cljs.core.first(arglist__3823);
var y = cljs.core.first(cljs.core.next(arglist__3823));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3823)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3823)));
return G__3822__delegate.call(this, x, y, z, args);
});
return G__3822;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3816.call(this);
case  1 :
return ep1__3817.call(this,x);
case  2 :
return ep1__3818.call(this,x,y);
case  3 :
return ep1__3819.call(this,x,y,z);
default:
return ep1__3820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3820.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3812 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3824 = (function (){
return true;
});
var ep2__3825 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3777 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3777))
{return p2.call(null,x);
} else
{return and__3546__auto____3777;
}
})());
});
var ep2__3826 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3778 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3778))
{var and__3546__auto____3779 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3779))
{var and__3546__auto____3780 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3780))
{return p2.call(null,y);
} else
{return and__3546__auto____3780;
}
} else
{return and__3546__auto____3779;
}
} else
{return and__3546__auto____3778;
}
})());
});
var ep2__3827 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3781 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3781))
{var and__3546__auto____3782 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3782))
{var and__3546__auto____3783 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3783))
{var and__3546__auto____3784 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3784))
{var and__3546__auto____3785 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3785))
{return p2.call(null,z);
} else
{return and__3546__auto____3785;
}
} else
{return and__3546__auto____3784;
}
} else
{return and__3546__auto____3783;
}
} else
{return and__3546__auto____3782;
}
} else
{return and__3546__auto____3781;
}
})());
});
var ep2__3828 = (function() { 
var G__3830__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3786 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3786))
{return cljs.core.every_QMARK_.call(null,(function (p1__3757_SHARP_){
var and__3546__auto____3787 = p1.call(null,p1__3757_SHARP_);

if(cljs.core.truth_(and__3546__auto____3787))
{return p2.call(null,p1__3757_SHARP_);
} else
{return and__3546__auto____3787;
}
}),args);
} else
{return and__3546__auto____3786;
}
})());
};
var G__3830 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3830__delegate.call(this, x, y, z, args);
};
G__3830.cljs$lang$maxFixedArity = 3;
G__3830.cljs$lang$applyTo = (function (arglist__3831){
var x = cljs.core.first(arglist__3831);
var y = cljs.core.first(cljs.core.next(arglist__3831));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3831)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3831)));
return G__3830__delegate.call(this, x, y, z, args);
});
return G__3830;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3824.call(this);
case  1 :
return ep2__3825.call(this,x);
case  2 :
return ep2__3826.call(this,x,y);
case  3 :
return ep2__3827.call(this,x,y,z);
default:
return ep2__3828.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3828.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3813 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3832 = (function (){
return true;
});
var ep3__3833 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3788 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3788))
{var and__3546__auto____3789 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3789))
{return p3.call(null,x);
} else
{return and__3546__auto____3789;
}
} else
{return and__3546__auto____3788;
}
})());
});
var ep3__3834 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3790 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3790))
{var and__3546__auto____3791 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3791))
{var and__3546__auto____3792 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3792))
{var and__3546__auto____3793 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3793))
{var and__3546__auto____3794 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3794))
{return p3.call(null,y);
} else
{return and__3546__auto____3794;
}
} else
{return and__3546__auto____3793;
}
} else
{return and__3546__auto____3792;
}
} else
{return and__3546__auto____3791;
}
} else
{return and__3546__auto____3790;
}
})());
});
var ep3__3835 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3795 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____3795))
{var and__3546__auto____3796 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____3796))
{var and__3546__auto____3797 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____3797))
{var and__3546__auto____3798 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____3798))
{var and__3546__auto____3799 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____3799))
{var and__3546__auto____3800 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____3800))
{var and__3546__auto____3801 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____3801))
{var and__3546__auto____3802 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____3802))
{return p3.call(null,z);
} else
{return and__3546__auto____3802;
}
} else
{return and__3546__auto____3801;
}
} else
{return and__3546__auto____3800;
}
} else
{return and__3546__auto____3799;
}
} else
{return and__3546__auto____3798;
}
} else
{return and__3546__auto____3797;
}
} else
{return and__3546__auto____3796;
}
} else
{return and__3546__auto____3795;
}
})());
});
var ep3__3836 = (function() { 
var G__3838__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3803 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3803))
{return cljs.core.every_QMARK_.call(null,(function (p1__3758_SHARP_){
var and__3546__auto____3804 = p1.call(null,p1__3758_SHARP_);

if(cljs.core.truth_(and__3546__auto____3804))
{var and__3546__auto____3805 = p2.call(null,p1__3758_SHARP_);

if(cljs.core.truth_(and__3546__auto____3805))
{return p3.call(null,p1__3758_SHARP_);
} else
{return and__3546__auto____3805;
}
} else
{return and__3546__auto____3804;
}
}),args);
} else
{return and__3546__auto____3803;
}
})());
};
var G__3838 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3838__delegate.call(this, x, y, z, args);
};
G__3838.cljs$lang$maxFixedArity = 3;
G__3838.cljs$lang$applyTo = (function (arglist__3839){
var x = cljs.core.first(arglist__3839);
var y = cljs.core.first(cljs.core.next(arglist__3839));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3839)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3839)));
return G__3838__delegate.call(this, x, y, z, args);
});
return G__3838;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3832.call(this);
case  1 :
return ep3__3833.call(this,x);
case  2 :
return ep3__3834.call(this,x,y);
case  3 :
return ep3__3835.call(this,x,y,z);
default:
return ep3__3836.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3836.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3814 = (function() { 
var G__3840__delegate = function (p1,p2,p3,ps){
var ps__3806 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3841 = (function (){
return true;
});
var epn__3842 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3759_SHARP_){
return p1__3759_SHARP_.call(null,x);
}),ps__3806);
});
var epn__3843 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3760_SHARP_){
var and__3546__auto____3807 = p1__3760_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3807))
{return p1__3760_SHARP_.call(null,y);
} else
{return and__3546__auto____3807;
}
}),ps__3806);
});
var epn__3844 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3761_SHARP_){
var and__3546__auto____3808 = p1__3761_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____3808))
{var and__3546__auto____3809 = p1__3761_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____3809))
{return p1__3761_SHARP_.call(null,z);
} else
{return and__3546__auto____3809;
}
} else
{return and__3546__auto____3808;
}
}),ps__3806);
});
var epn__3845 = (function() { 
var G__3847__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____3810 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____3810))
{return cljs.core.every_QMARK_.call(null,(function (p1__3762_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3762_SHARP_,args);
}),ps__3806);
} else
{return and__3546__auto____3810;
}
})());
};
var G__3847 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3847__delegate.call(this, x, y, z, args);
};
G__3847.cljs$lang$maxFixedArity = 3;
G__3847.cljs$lang$applyTo = (function (arglist__3848){
var x = cljs.core.first(arglist__3848);
var y = cljs.core.first(cljs.core.next(arglist__3848));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3848)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3848)));
return G__3847__delegate.call(this, x, y, z, args);
});
return G__3847;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3841.call(this);
case  1 :
return epn__3842.call(this,x);
case  2 :
return epn__3843.call(this,x,y);
case  3 :
return epn__3844.call(this,x,y,z);
default:
return epn__3845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3845.cljs$lang$applyTo;
return epn;
})()
};
var G__3840 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3840__delegate.call(this, p1, p2, p3, ps);
};
G__3840.cljs$lang$maxFixedArity = 3;
G__3840.cljs$lang$applyTo = (function (arglist__3849){
var p1 = cljs.core.first(arglist__3849);
var p2 = cljs.core.first(cljs.core.next(arglist__3849));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3849)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3849)));
return G__3840__delegate.call(this, p1, p2, p3, ps);
});
return G__3840;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3811.call(this,p1);
case  2 :
return every_pred__3812.call(this,p1,p2);
case  3 :
return every_pred__3813.call(this,p1,p2,p3);
default:
return every_pred__3814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3814.cljs$lang$applyTo;
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
var some_fn__3889 = (function (p){
return (function() {
var sp1 = null;
var sp1__3894 = (function (){
return null;
});
var sp1__3895 = (function (x){
return p.call(null,x);
});
var sp1__3896 = (function (x,y){
var or__3548__auto____3851 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3851))
{return or__3548__auto____3851;
} else
{return p.call(null,y);
}
});
var sp1__3897 = (function (x,y,z){
var or__3548__auto____3852 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____3852))
{return or__3548__auto____3852;
} else
{var or__3548__auto____3853 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____3853))
{return or__3548__auto____3853;
} else
{return p.call(null,z);
}
}
});
var sp1__3898 = (function() { 
var G__3900__delegate = function (x,y,z,args){
var or__3548__auto____3854 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3854))
{return or__3548__auto____3854;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3900 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3900__delegate.call(this, x, y, z, args);
};
G__3900.cljs$lang$maxFixedArity = 3;
G__3900.cljs$lang$applyTo = (function (arglist__3901){
var x = cljs.core.first(arglist__3901);
var y = cljs.core.first(cljs.core.next(arglist__3901));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3901)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3901)));
return G__3900__delegate.call(this, x, y, z, args);
});
return G__3900;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3894.call(this);
case  1 :
return sp1__3895.call(this,x);
case  2 :
return sp1__3896.call(this,x,y);
case  3 :
return sp1__3897.call(this,x,y,z);
default:
return sp1__3898.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3898.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3890 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3902 = (function (){
return null;
});
var sp2__3903 = (function (x){
var or__3548__auto____3855 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3855))
{return or__3548__auto____3855;
} else
{return p2.call(null,x);
}
});
var sp2__3904 = (function (x,y){
var or__3548__auto____3856 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3856))
{return or__3548__auto____3856;
} else
{var or__3548__auto____3857 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3857))
{return or__3548__auto____3857;
} else
{var or__3548__auto____3858 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3858))
{return or__3548__auto____3858;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3905 = (function (x,y,z){
var or__3548__auto____3859 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3859))
{return or__3548__auto____3859;
} else
{var or__3548__auto____3860 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3860))
{return or__3548__auto____3860;
} else
{var or__3548__auto____3861 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3861))
{return or__3548__auto____3861;
} else
{var or__3548__auto____3862 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3862))
{return or__3548__auto____3862;
} else
{var or__3548__auto____3863 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3863))
{return or__3548__auto____3863;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3906 = (function() { 
var G__3908__delegate = function (x,y,z,args){
var or__3548__auto____3864 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3864))
{return or__3548__auto____3864;
} else
{return cljs.core.some.call(null,(function (p1__3767_SHARP_){
var or__3548__auto____3865 = p1.call(null,p1__3767_SHARP_);

if(cljs.core.truth_(or__3548__auto____3865))
{return or__3548__auto____3865;
} else
{return p2.call(null,p1__3767_SHARP_);
}
}),args);
}
};
var G__3908 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3908__delegate.call(this, x, y, z, args);
};
G__3908.cljs$lang$maxFixedArity = 3;
G__3908.cljs$lang$applyTo = (function (arglist__3909){
var x = cljs.core.first(arglist__3909);
var y = cljs.core.first(cljs.core.next(arglist__3909));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3909)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3909)));
return G__3908__delegate.call(this, x, y, z, args);
});
return G__3908;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3902.call(this);
case  1 :
return sp2__3903.call(this,x);
case  2 :
return sp2__3904.call(this,x,y);
case  3 :
return sp2__3905.call(this,x,y,z);
default:
return sp2__3906.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3906.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3891 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3910 = (function (){
return null;
});
var sp3__3911 = (function (x){
var or__3548__auto____3866 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3866))
{return or__3548__auto____3866;
} else
{var or__3548__auto____3867 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3867))
{return or__3548__auto____3867;
} else
{return p3.call(null,x);
}
}
});
var sp3__3912 = (function (x,y){
var or__3548__auto____3868 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3868))
{return or__3548__auto____3868;
} else
{var or__3548__auto____3869 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3869))
{return or__3548__auto____3869;
} else
{var or__3548__auto____3870 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3870))
{return or__3548__auto____3870;
} else
{var or__3548__auto____3871 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3871))
{return or__3548__auto____3871;
} else
{var or__3548__auto____3872 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3872))
{return or__3548__auto____3872;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3913 = (function (x,y,z){
var or__3548__auto____3873 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____3873))
{return or__3548__auto____3873;
} else
{var or__3548__auto____3874 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____3874))
{return or__3548__auto____3874;
} else
{var or__3548__auto____3875 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____3875))
{return or__3548__auto____3875;
} else
{var or__3548__auto____3876 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____3876))
{return or__3548__auto____3876;
} else
{var or__3548__auto____3877 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____3877))
{return or__3548__auto____3877;
} else
{var or__3548__auto____3878 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____3878))
{return or__3548__auto____3878;
} else
{var or__3548__auto____3879 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____3879))
{return or__3548__auto____3879;
} else
{var or__3548__auto____3880 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____3880))
{return or__3548__auto____3880;
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
var sp3__3914 = (function() { 
var G__3916__delegate = function (x,y,z,args){
var or__3548__auto____3881 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3881))
{return or__3548__auto____3881;
} else
{return cljs.core.some.call(null,(function (p1__3768_SHARP_){
var or__3548__auto____3882 = p1.call(null,p1__3768_SHARP_);

if(cljs.core.truth_(or__3548__auto____3882))
{return or__3548__auto____3882;
} else
{var or__3548__auto____3883 = p2.call(null,p1__3768_SHARP_);

if(cljs.core.truth_(or__3548__auto____3883))
{return or__3548__auto____3883;
} else
{return p3.call(null,p1__3768_SHARP_);
}
}
}),args);
}
};
var G__3916 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3916__delegate.call(this, x, y, z, args);
};
G__3916.cljs$lang$maxFixedArity = 3;
G__3916.cljs$lang$applyTo = (function (arglist__3917){
var x = cljs.core.first(arglist__3917);
var y = cljs.core.first(cljs.core.next(arglist__3917));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3917)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3917)));
return G__3916__delegate.call(this, x, y, z, args);
});
return G__3916;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3910.call(this);
case  1 :
return sp3__3911.call(this,x);
case  2 :
return sp3__3912.call(this,x,y);
case  3 :
return sp3__3913.call(this,x,y,z);
default:
return sp3__3914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3914.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3892 = (function() { 
var G__3918__delegate = function (p1,p2,p3,ps){
var ps__3884 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3919 = (function (){
return null;
});
var spn__3920 = (function (x){
return cljs.core.some.call(null,(function (p1__3769_SHARP_){
return p1__3769_SHARP_.call(null,x);
}),ps__3884);
});
var spn__3921 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3770_SHARP_){
var or__3548__auto____3885 = p1__3770_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3885))
{return or__3548__auto____3885;
} else
{return p1__3770_SHARP_.call(null,y);
}
}),ps__3884);
});
var spn__3922 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3771_SHARP_){
var or__3548__auto____3886 = p1__3771_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____3886))
{return or__3548__auto____3886;
} else
{var or__3548__auto____3887 = p1__3771_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____3887))
{return or__3548__auto____3887;
} else
{return p1__3771_SHARP_.call(null,z);
}
}
}),ps__3884);
});
var spn__3923 = (function() { 
var G__3925__delegate = function (x,y,z,args){
var or__3548__auto____3888 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____3888))
{return or__3548__auto____3888;
} else
{return cljs.core.some.call(null,(function (p1__3772_SHARP_){
return cljs.core.some.call(null,p1__3772_SHARP_,args);
}),ps__3884);
}
};
var G__3925 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3925__delegate.call(this, x, y, z, args);
};
G__3925.cljs$lang$maxFixedArity = 3;
G__3925.cljs$lang$applyTo = (function (arglist__3926){
var x = cljs.core.first(arglist__3926);
var y = cljs.core.first(cljs.core.next(arglist__3926));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3926)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3926)));
return G__3925__delegate.call(this, x, y, z, args);
});
return G__3925;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3919.call(this);
case  1 :
return spn__3920.call(this,x);
case  2 :
return spn__3921.call(this,x,y);
case  3 :
return spn__3922.call(this,x,y,z);
default:
return spn__3923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3923.cljs$lang$applyTo;
return spn;
})()
};
var G__3918 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3918__delegate.call(this, p1, p2, p3, ps);
};
G__3918.cljs$lang$maxFixedArity = 3;
G__3918.cljs$lang$applyTo = (function (arglist__3927){
var p1 = cljs.core.first(arglist__3927);
var p2 = cljs.core.first(cljs.core.next(arglist__3927));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3927)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3927)));
return G__3918__delegate.call(this, p1, p2, p3, ps);
});
return G__3918;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3889.call(this,p1);
case  2 :
return some_fn__3890.call(this,p1,p2);
case  3 :
return some_fn__3891.call(this,p1,p2,p3);
default:
return some_fn__3892.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3892.cljs$lang$applyTo;
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
var map__3940 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3928))
{var s__3929 = temp__3698__auto____3928;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3929)),map.call(null,f,cljs.core.rest.call(null,s__3929)));
} else
{return null;
}
})));
});
var map__3941 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3930 = cljs.core.seq.call(null,c1);
var s2__3931 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3932 = s1__3930;

if(cljs.core.truth_(and__3546__auto____3932))
{return s2__3931;
} else
{return and__3546__auto____3932;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3930),cljs.core.first.call(null,s2__3931)),map.call(null,f,cljs.core.rest.call(null,s1__3930),cljs.core.rest.call(null,s2__3931)));
} else
{return null;
}
})));
});
var map__3942 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3933 = cljs.core.seq.call(null,c1);
var s2__3934 = cljs.core.seq.call(null,c2);
var s3__3935 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____3936 = s1__3933;

if(cljs.core.truth_(and__3546__auto____3936))
{var and__3546__auto____3937 = s2__3934;

if(cljs.core.truth_(and__3546__auto____3937))
{return s3__3935;
} else
{return and__3546__auto____3937;
}
} else
{return and__3546__auto____3936;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3933),cljs.core.first.call(null,s2__3934),cljs.core.first.call(null,s3__3935)),map.call(null,f,cljs.core.rest.call(null,s1__3933),cljs.core.rest.call(null,s2__3934),cljs.core.rest.call(null,s3__3935)));
} else
{return null;
}
})));
});
var map__3943 = (function() { 
var G__3945__delegate = function (f,c1,c2,c3,colls){
var step__3939 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3938 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3938)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3938),step.call(null,map.call(null,cljs.core.rest,ss__3938)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3850_SHARP_){
return cljs.core.apply.call(null,f,p1__3850_SHARP_);
}),step__3939.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3945 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3945__delegate.call(this, f, c1, c2, c3, colls);
};
G__3945.cljs$lang$maxFixedArity = 4;
G__3945.cljs$lang$applyTo = (function (arglist__3946){
var f = cljs.core.first(arglist__3946);
var c1 = cljs.core.first(cljs.core.next(arglist__3946));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3946)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3946))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3946))));
return G__3945__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3945;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3940.call(this,f,c1);
case  3 :
return map__3941.call(this,f,c1,c2);
case  4 :
return map__3942.call(this,f,c1,c2,c3);
default:
return map__3943.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3943.cljs$lang$applyTo;
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
{var temp__3698__auto____3947 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3947))
{var s__3948 = temp__3698__auto____3947;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3948),take.call(null,(n - 1),cljs.core.rest.call(null,s__3948)));
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
var step__3951 = (function (n,coll){
while(true){
var s__3949 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3950 = (n > 0);

if(cljs.core.truth_(and__3546__auto____3950))
{return s__3949;
} else
{return and__3546__auto____3950;
}
})()))
{{
var G__3952 = (n - 1);
var G__3953 = cljs.core.rest.call(null,s__3949);
n = G__3952;
coll = G__3953;
continue;
}
} else
{return s__3949;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3951.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3954 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3955 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3954.call(this,n);
case  2 :
return drop_last__3955.call(this,n,s);
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
var s__3957 = cljs.core.seq.call(null,coll);
var lead__3958 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3958))
{{
var G__3959 = cljs.core.next.call(null,s__3957);
var G__3960 = cljs.core.next.call(null,lead__3958);
s__3957 = G__3959;
lead__3958 = G__3960;
continue;
}
} else
{return s__3957;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3963 = (function (pred,coll){
while(true){
var s__3961 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____3962 = s__3961;

if(cljs.core.truth_(and__3546__auto____3962))
{return pred.call(null,cljs.core.first.call(null,s__3961));
} else
{return and__3546__auto____3962;
}
})()))
{{
var G__3964 = pred;
var G__3965 = cljs.core.rest.call(null,s__3961);
pred = G__3964;
coll = G__3965;
continue;
}
} else
{return s__3961;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3963.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3966 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3966))
{var s__3967 = temp__3698__auto____3966;

return cljs.core.concat.call(null,s__3967,cycle.call(null,s__3967));
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
var repeat__3968 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3969 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3968.call(this,n);
case  2 :
return repeat__3969.call(this,n,x);
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
var repeatedly__3971 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3972 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3971.call(this,n);
case  2 :
return repeatedly__3972.call(this,n,f);
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
var interleave__3978 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3974 = cljs.core.seq.call(null,c1);
var s2__3975 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____3976 = s1__3974;

if(cljs.core.truth_(and__3546__auto____3976))
{return s2__3975;
} else
{return and__3546__auto____3976;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3974),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3975),interleave.call(null,cljs.core.rest.call(null,s1__3974),cljs.core.rest.call(null,s2__3975))));
} else
{return null;
}
})));
});
var interleave__3979 = (function() { 
var G__3981__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3977 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3977)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3977),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3977)));
} else
{return null;
}
})));
};
var G__3981 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3981__delegate.call(this, c1, c2, colls);
};
G__3981.cljs$lang$maxFixedArity = 2;
G__3981.cljs$lang$applyTo = (function (arglist__3982){
var c1 = cljs.core.first(arglist__3982);
var c2 = cljs.core.first(cljs.core.next(arglist__3982));
var colls = cljs.core.rest(cljs.core.next(arglist__3982));
return G__3981__delegate.call(this, c1, c2, colls);
});
return G__3981;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3978.call(this,c1,c2);
default:
return interleave__3979.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3979.cljs$lang$applyTo;
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
var cat__3985 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____3983 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____3983))
{var coll__3984 = temp__3695__auto____3983;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3984),cat.call(null,cljs.core.rest.call(null,coll__3984),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3985.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3986 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3987 = (function() { 
var G__3989__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3989 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3989__delegate.call(this, f, coll, colls);
};
G__3989.cljs$lang$maxFixedArity = 2;
G__3989.cljs$lang$applyTo = (function (arglist__3990){
var f = cljs.core.first(arglist__3990);
var coll = cljs.core.first(cljs.core.next(arglist__3990));
var colls = cljs.core.rest(cljs.core.next(arglist__3990));
return G__3989__delegate.call(this, f, coll, colls);
});
return G__3989;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3986.call(this,f,coll);
default:
return mapcat__3987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3987.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3991 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3991))
{var s__3992 = temp__3698__auto____3991;

var f__3993 = cljs.core.first.call(null,s__3992);
var r__3994 = cljs.core.rest.call(null,s__3992);

if(cljs.core.truth_(pred.call(null,f__3993)))
{return cljs.core.cons.call(null,f__3993,filter.call(null,pred,r__3994));
} else
{return filter.call(null,pred,r__3994);
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
var walk__3996 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3996.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3995_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3995_SHARP_));
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
var partition__4003 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__4004 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____3997 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____3997))
{var s__3998 = temp__3698__auto____3997;

var p__3999 = cljs.core.take.call(null,n,s__3998);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3999))))
{return cljs.core.cons.call(null,p__3999,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3998)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__4005 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4000 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4000))
{var s__4001 = temp__3698__auto____4000;

var p__4002 = cljs.core.take.call(null,n,s__4001);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__4002))))
{return cljs.core.cons.call(null,p__4002,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__4001)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__4002,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__4003.call(this,n,step);
case  3 :
return partition__4004.call(this,n,step,pad);
case  4 :
return partition__4005.call(this,n,step,pad,coll);
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
var get_in__4011 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__4012 = (function (m,ks,not_found){
var sentinel__4007 = cljs.core.lookup_sentinel;
var m__4008 = m;
var ks__4009 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__4009))
{var m__4010 = cljs.core.get.call(null,m__4008,cljs.core.first.call(null,ks__4009),sentinel__4007);

if(cljs.core.truth_((sentinel__4007 === m__4010)))
{return not_found;
} else
{{
var G__4014 = sentinel__4007;
var G__4015 = m__4010;
var G__4016 = cljs.core.next.call(null,ks__4009);
sentinel__4007 = G__4014;
m__4008 = G__4015;
ks__4009 = G__4016;
continue;
}
}
} else
{return m__4008;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__4011.call(this,m,ks);
case  3 :
return get_in__4012.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__4017,v){
var vec__4018__4019 = p__4017;
var k__4020 = cljs.core.nth.call(null,vec__4018__4019,0,null);
var ks__4021 = cljs.core.nthnext.call(null,vec__4018__4019,1);

if(cljs.core.truth_(ks__4021))
{return cljs.core.assoc.call(null,m,k__4020,assoc_in.call(null,cljs.core.get.call(null,m,k__4020),ks__4021,v));
} else
{return cljs.core.assoc.call(null,m,k__4020,v);
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
var update_in__delegate = function (m,p__4022,f,args){
var vec__4023__4024 = p__4022;
var k__4025 = cljs.core.nth.call(null,vec__4023__4024,0,null);
var ks__4026 = cljs.core.nthnext.call(null,vec__4023__4024,1);

if(cljs.core.truth_(ks__4026))
{return cljs.core.assoc.call(null,m,k__4025,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__4025),ks__4026,f,args));
} else
{return cljs.core.assoc.call(null,m,k__4025,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__4025),args));
}
};
var update_in = function (m,p__4022,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__4022, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__4027){
var m = cljs.core.first(arglist__4027);
var p__4022 = cljs.core.first(cljs.core.next(arglist__4027));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4027)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4027)));
return update_in__delegate.call(this, m, p__4022, f, args);
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
var this__4028 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4055 = null;
var G__4055__4056 = (function (coll,k){
var this__4029 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4055__4057 = (function (coll,k,not_found){
var this__4030 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4055 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4055__4056.call(this,coll,k);
case  3 :
return G__4055__4057.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4055;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4031 = this;
var new_array__4032 = cljs.core.aclone.call(null,this__4031.array);

(new_array__4032[k] = v);
return (new cljs.core.Vector(this__4031.meta,new_array__4032));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__4059 = null;
var G__4059__4060 = (function (coll,k){
var this__4033 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4059__4061 = (function (coll,k,not_found){
var this__4034 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4059 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4059__4060.call(this,coll,k);
case  3 :
return G__4059__4061.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4059;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4035 = this;
var new_array__4036 = cljs.core.aclone.call(null,this__4035.array);

new_array__4036.push(o);
return (new cljs.core.Vector(this__4035.meta,new_array__4036));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4063 = null;
var G__4063__4064 = (function (v,f){
var this__4037 = this;
return cljs.core.ci_reduce.call(null,this__4037.array,f);
});
var G__4063__4065 = (function (v,f,start){
var this__4038 = this;
return cljs.core.ci_reduce.call(null,this__4038.array,f,start);
});
G__4063 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__4063__4064.call(this,v,f);
case  3 :
return G__4063__4065.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4063;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4039 = this;
if(cljs.core.truth_((this__4039.array.length > 0)))
{var vector_seq__4040 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__4039.array.length)))
{return cljs.core.cons.call(null,(this__4039.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__4040.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4041 = this;
return this__4041.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4042 = this;
var count__4043 = this__4042.array.length;

if(cljs.core.truth_((count__4043 > 0)))
{return (this__4042.array[(count__4043 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4044 = this;
if(cljs.core.truth_((this__4044.array.length > 0)))
{var new_array__4045 = cljs.core.aclone.call(null,this__4044.array);

new_array__4045.pop();
return (new cljs.core.Vector(this__4044.meta,new_array__4045));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4046 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4047 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4048 = this;
return (new cljs.core.Vector(meta,this__4048.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4049 = this;
return this__4049.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4067 = null;
var G__4067__4068 = (function (coll,n){
var this__4050 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4051 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4051))
{return (n < this__4050.array.length);
} else
{return and__3546__auto____4051;
}
})()))
{return (this__4050.array[n]);
} else
{return null;
}
});
var G__4067__4069 = (function (coll,n,not_found){
var this__4052 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4053 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____4053))
{return (n < this__4052.array.length);
} else
{return and__3546__auto____4053;
}
})()))
{return (this__4052.array[n]);
} else
{return not_found;
}
});
G__4067 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4067__4068.call(this,coll,n);
case  3 :
return G__4067__4069.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4067;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4054 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4054.meta);
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
vector.cljs$lang$applyTo = (function (arglist__4071){
var args = cljs.core.seq( arglist__4071 );;
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
var this__4072 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4094 = null;
var G__4094__4095 = (function (coll,k){
var this__4073 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__4094__4096 = (function (coll,k,not_found){
var this__4074 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__4094 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4094__4095.call(this,coll,k);
case  3 :
return G__4094__4096.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4094;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__4075 = this;
var v_pos__4076 = (this__4075.start + key);

return (new cljs.core.Subvec(this__4075.meta,cljs.core._assoc.call(null,this__4075.v,v_pos__4076,val),this__4075.start,((this__4075.end > (v_pos__4076 + 1)) ? this__4075.end : (v_pos__4076 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__4098 = null;
var G__4098__4099 = (function (coll,k){
var this__4077 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4098__4100 = (function (coll,k,not_found){
var this__4078 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4098 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4098__4099.call(this,coll,k);
case  3 :
return G__4098__4100.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4098;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4079 = this;
return (new cljs.core.Subvec(this__4079.meta,cljs.core._assoc_n.call(null,this__4079.v,this__4079.end,o),this__4079.start,(this__4079.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4102 = null;
var G__4102__4103 = (function (coll,f){
var this__4080 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__4102__4104 = (function (coll,f,start){
var this__4081 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__4102 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__4102__4103.call(this,coll,f);
case  3 :
return G__4102__4104.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4102;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4082 = this;
var subvec_seq__4083 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__4082.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__4082.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__4083.call(null,this__4082.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4084 = this;
return (this__4084.end - this__4084.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4085 = this;
return cljs.core._nth.call(null,this__4085.v,(this__4085.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4086 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__4086.start,this__4086.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__4086.meta,this__4086.v,this__4086.start,(this__4086.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__4087 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4088 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4089 = this;
return (new cljs.core.Subvec(meta,this__4089.v,this__4089.start,this__4089.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4090 = this;
return this__4090.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4106 = null;
var G__4106__4107 = (function (coll,n){
var this__4091 = this;
return cljs.core._nth.call(null,this__4091.v,(this__4091.start + n));
});
var G__4106__4108 = (function (coll,n,not_found){
var this__4092 = this;
return cljs.core._nth.call(null,this__4092.v,(this__4092.start + n),not_found);
});
G__4106 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4106__4107.call(this,coll,n);
case  3 :
return G__4106__4108.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4106;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4093 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__4093.meta);
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
var subvec__4110 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__4111 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__4110.call(this,v,start);
case  3 :
return subvec__4111.call(this,v,start,end);
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
var this__4113 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__4114 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4115 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4116 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4116.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4117 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4118 = this;
return cljs.core._first.call(null,this__4118.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4119 = this;
var temp__3695__auto____4120 = cljs.core.next.call(null,this__4119.front);

if(cljs.core.truth_(temp__3695__auto____4120))
{var f1__4121 = temp__3695__auto____4120;

return (new cljs.core.PersistentQueueSeq(this__4119.meta,f1__4121,this__4119.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__4119.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__4119.meta,this__4119.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4122 = this;
return this__4122.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4123 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__4123.front,this__4123.rear));
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
var this__4124 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4125 = this;
if(cljs.core.truth_(this__4125.front))
{return (new cljs.core.PersistentQueue(this__4125.meta,(this__4125.count + 1),this__4125.front,cljs.core.conj.call(null,(function (){var or__3548__auto____4126 = this__4125.rear;

if(cljs.core.truth_(or__3548__auto____4126))
{return or__3548__auto____4126;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__4125.meta,(this__4125.count + 1),cljs.core.conj.call(null,this__4125.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4127 = this;
var rear__4128 = cljs.core.seq.call(null,this__4127.rear);

if(cljs.core.truth_((function (){var or__3548__auto____4129 = this__4127.front;

if(cljs.core.truth_(or__3548__auto____4129))
{return or__3548__auto____4129;
} else
{return rear__4128;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__4127.front,cljs.core.seq.call(null,rear__4128)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4130 = this;
return this__4130.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__4131 = this;
return cljs.core._first.call(null,this__4131.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__4132 = this;
if(cljs.core.truth_(this__4132.front))
{var temp__3695__auto____4133 = cljs.core.next.call(null,this__4132.front);

if(cljs.core.truth_(temp__3695__auto____4133))
{var f1__4134 = temp__3695__auto____4133;

return (new cljs.core.PersistentQueue(this__4132.meta,(this__4132.count - 1),f1__4134,this__4132.rear));
} else
{return (new cljs.core.PersistentQueue(this__4132.meta,(this__4132.count - 1),cljs.core.seq.call(null,this__4132.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__4135 = this;
return cljs.core.first.call(null,this__4135.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__4136 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4137 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4138 = this;
return (new cljs.core.PersistentQueue(meta,this__4138.count,this__4138.front,this__4138.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4139 = this;
return this__4139.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4140 = this;
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
var this__4141 = this;
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
var len__4142 = array.length;

var i__4143 = 0;

while(true){
if(cljs.core.truth_((i__4143 < len__4142)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__4143]))))
{return i__4143;
} else
{{
var G__4144 = (i__4143 + incr);
i__4143 = G__4144;
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
var obj_map_contains_key_QMARK___4146 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___4147 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____4145 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4145))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4145;
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
return obj_map_contains_key_QMARK___4146.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___4147.call(this,k,strobj,true_val,false_val);
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
var this__4150 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4171 = null;
var G__4171__4172 = (function (coll,k){
var this__4151 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4171__4173 = (function (coll,k,not_found){
var this__4152 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4152.strobj,(this__4152.strobj[k]),not_found);
});
G__4171 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4171__4172.call(this,coll,k);
case  3 :
return G__4171__4173.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4171;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4153 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__4154 = goog.object.clone.call(null,this__4153.strobj);
var overwrite_QMARK___4155 = new_strobj__4154.hasOwnProperty(k);

(new_strobj__4154[k] = v);
if(cljs.core.truth_(overwrite_QMARK___4155))
{return (new cljs.core.ObjMap(this__4153.meta,this__4153.keys,new_strobj__4154));
} else
{var new_keys__4156 = cljs.core.aclone.call(null,this__4153.keys);

new_keys__4156.push(k);
return (new cljs.core.ObjMap(this__4153.meta,new_keys__4156,new_strobj__4154));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__4153.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4157 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__4157.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__4175 = null;
var G__4175__4176 = (function (coll,k){
var this__4158 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4175__4177 = (function (coll,k,not_found){
var this__4159 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4175 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4175__4176.call(this,coll,k);
case  3 :
return G__4175__4177.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4175;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4160 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4161 = this;
if(cljs.core.truth_((this__4161.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__4149_SHARP_){
return cljs.core.vector.call(null,p1__4149_SHARP_,(this__4161.strobj[p1__4149_SHARP_]));
}),this__4161.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4162 = this;
return this__4162.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4163 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4164 = this;
return (new cljs.core.ObjMap(meta,this__4164.keys,this__4164.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4165 = this;
return this__4165.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4166 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__4166.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4167 = this;
if(cljs.core.truth_((function (){var and__3546__auto____4168 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____4168))
{return this__4167.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____4168;
}
})()))
{var new_keys__4169 = cljs.core.aclone.call(null,this__4167.keys);
var new_strobj__4170 = goog.object.clone.call(null,this__4167.strobj);

new_keys__4169.splice(cljs.core.scan_array.call(null,1,k,new_keys__4169),1);
cljs.core.js_delete.call(null,new_strobj__4170,k);
return (new cljs.core.ObjMap(this__4167.meta,new_keys__4169,new_strobj__4170));
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
var this__4180 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4212 = null;
var G__4212__4213 = (function (coll,k){
var this__4181 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__4212__4214 = (function (coll,k,not_found){
var this__4182 = this;
var bucket__4183 = (this__4182.hashobj[cljs.core.hash.call(null,k)]);
var i__4184 = (cljs.core.truth_(bucket__4183)?cljs.core.scan_array.call(null,2,k,bucket__4183):null);

if(cljs.core.truth_(i__4184))
{return (bucket__4183[(i__4184 + 1)]);
} else
{return not_found;
}
});
G__4212 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4212__4213.call(this,coll,k);
case  3 :
return G__4212__4214.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4212;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__4185 = this;
var h__4186 = cljs.core.hash.call(null,k);
var bucket__4187 = (this__4185.hashobj[h__4186]);

if(cljs.core.truth_(bucket__4187))
{var new_bucket__4188 = cljs.core.aclone.call(null,bucket__4187);
var new_hashobj__4189 = goog.object.clone.call(null,this__4185.hashobj);

(new_hashobj__4189[h__4186] = new_bucket__4188);
var temp__3695__auto____4190 = cljs.core.scan_array.call(null,2,k,new_bucket__4188);

if(cljs.core.truth_(temp__3695__auto____4190))
{var i__4191 = temp__3695__auto____4190;

(new_bucket__4188[(i__4191 + 1)] = v);
return (new cljs.core.HashMap(this__4185.meta,this__4185.count,new_hashobj__4189));
} else
{new_bucket__4188.push(k,v);
return (new cljs.core.HashMap(this__4185.meta,(this__4185.count + 1),new_hashobj__4189));
}
} else
{var new_hashobj__4192 = goog.object.clone.call(null,this__4185.hashobj);

(new_hashobj__4192[h__4186] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__4185.meta,(this__4185.count + 1),new_hashobj__4192));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__4193 = this;
var bucket__4194 = (this__4193.hashobj[cljs.core.hash.call(null,k)]);
var i__4195 = (cljs.core.truth_(bucket__4194)?cljs.core.scan_array.call(null,2,k,bucket__4194):null);

if(cljs.core.truth_(i__4195))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__4216 = null;
var G__4216__4217 = (function (coll,k){
var this__4196 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4216__4218 = (function (coll,k,not_found){
var this__4197 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4216 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4216__4217.call(this,coll,k);
case  3 :
return G__4216__4218.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4216;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__4198 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4199 = this;
if(cljs.core.truth_((this__4199.count > 0)))
{var hashes__4200 = cljs.core.js_keys.call(null,this__4199.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__4179_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__4199.hashobj[p1__4179_SHARP_])));
}),hashes__4200);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4201 = this;
return this__4201.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4202 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4203 = this;
return (new cljs.core.HashMap(meta,this__4203.count,this__4203.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4204 = this;
return this__4204.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4205 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__4205.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__4206 = this;
var h__4207 = cljs.core.hash.call(null,k);
var bucket__4208 = (this__4206.hashobj[h__4207]);
var i__4209 = (cljs.core.truth_(bucket__4208)?cljs.core.scan_array.call(null,2,k,bucket__4208):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__4209)))
{return coll;
} else
{var new_hashobj__4210 = goog.object.clone.call(null,this__4206.hashobj);

if(cljs.core.truth_((3 > bucket__4208.length)))
{cljs.core.js_delete.call(null,new_hashobj__4210,h__4207);
} else
{var new_bucket__4211 = cljs.core.aclone.call(null,bucket__4208);

new_bucket__4211.splice(i__4209,2);
(new_hashobj__4210[h__4207] = new_bucket__4211);
}
return (new cljs.core.HashMap(this__4206.meta,(this__4206.count - 1),new_hashobj__4210));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__4220 = ks.length;

var i__4221 = 0;
var out__4222 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__4221 < len__4220)))
{{
var G__4223 = (i__4221 + 1);
var G__4224 = cljs.core.assoc.call(null,out__4222,(ks[i__4221]),(vs[i__4221]));
i__4221 = G__4223;
out__4222 = G__4224;
continue;
}
} else
{return out__4222;
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
var in$__4225 = cljs.core.seq.call(null,keyvals);
var out__4226 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__4225))
{{
var G__4227 = cljs.core.nnext.call(null,in$__4225);
var G__4228 = cljs.core.assoc.call(null,out__4226,cljs.core.first.call(null,in$__4225),cljs.core.second.call(null,in$__4225));
in$__4225 = G__4227;
out__4226 = G__4228;
continue;
}
} else
{return out__4226;
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
hash_map.cljs$lang$applyTo = (function (arglist__4229){
var keyvals = cljs.core.seq( arglist__4229 );;
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
{return cljs.core.reduce.call(null,(function (p1__4230_SHARP_,p2__4231_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____4232 = p1__4230_SHARP_;

if(cljs.core.truth_(or__3548__auto____4232))
{return or__3548__auto____4232;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__4231_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__4233){
var maps = cljs.core.seq( arglist__4233 );;
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
{var merge_entry__4236 = (function (m,e){
var k__4234 = cljs.core.first.call(null,e);
var v__4235 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__4234)))
{return cljs.core.assoc.call(null,m,k__4234,f.call(null,cljs.core.get.call(null,m,k__4234),v__4235));
} else
{return cljs.core.assoc.call(null,m,k__4234,v__4235);
}
});
var merge2__4238 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__4236,(function (){var or__3548__auto____4237 = m1;

if(cljs.core.truth_(or__3548__auto____4237))
{return or__3548__auto____4237;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__4238,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__4239){
var f = cljs.core.first(arglist__4239);
var maps = cljs.core.rest(arglist__4239);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__4241 = cljs.core.ObjMap.fromObject([],{});
var keys__4242 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__4242))
{var key__4243 = cljs.core.first.call(null,keys__4242);
var entry__4244 = cljs.core.get.call(null,map,key__4243,"﷐'user/not-found");

{
var G__4245 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__4244,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__4241,key__4243,entry__4244):ret__4241);
var G__4246 = cljs.core.next.call(null,keys__4242);
ret__4241 = G__4245;
keys__4242 = G__4246;
continue;
}
} else
{return ret__4241;
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
var this__4247 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__4262 = null;
var G__4262__4263 = (function (coll,v){
var this__4248 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__4262__4264 = (function (coll,v,not_found){
var this__4249 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__4249.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__4262 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__4262__4263.call(this,coll,v);
case  3 :
return G__4262__4264.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4262;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__4266 = null;
var G__4266__4267 = (function (coll,k){
var this__4250 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__4266__4268 = (function (coll,k,not_found){
var this__4251 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4266 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__4266__4267.call(this,coll,k);
case  3 :
return G__4266__4268.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4266;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__4252 = this;
return (new cljs.core.Set(this__4252.meta,cljs.core.assoc.call(null,this__4252.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__4253 = this;
return cljs.core.keys.call(null,this__4253.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__4254 = this;
return (new cljs.core.Set(this__4254.meta,cljs.core.dissoc.call(null,this__4254.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__4255 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__4256 = this;
var and__3546__auto____4257 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____4257))
{var and__3546__auto____4258 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____4258))
{return cljs.core.every_QMARK_.call(null,(function (p1__4240_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__4240_SHARP_);
}),other);
} else
{return and__3546__auto____4258;
}
} else
{return and__3546__auto____4257;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__4259 = this;
return (new cljs.core.Set(meta,this__4259.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__4260 = this;
return this__4260.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__4261 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__4261.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__4271 = cljs.core.seq.call(null,coll);
var out__4272 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__4271))))
{{
var G__4273 = cljs.core.rest.call(null,in$__4271);
var G__4274 = cljs.core.conj.call(null,out__4272,cljs.core.first.call(null,in$__4271));
in$__4271 = G__4273;
out__4272 = G__4274;
continue;
}
} else
{return out__4272;
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
{var n__4275 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____4276 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____4276))
{var e__4277 = temp__3695__auto____4276;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__4277));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__4275,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__4270_SHARP_){
var temp__3695__auto____4278 = cljs.core.find.call(null,smap,p1__4270_SHARP_);

if(cljs.core.truth_(temp__3695__auto____4278))
{var e__4279 = temp__3695__auto____4278;

return cljs.core.second.call(null,e__4279);
} else
{return p1__4270_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__4287 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__4280,seen){
while(true){
var vec__4281__4282 = p__4280;
var f__4283 = cljs.core.nth.call(null,vec__4281__4282,0,null);
var xs__4284 = vec__4281__4282;

var temp__3698__auto____4285 = cljs.core.seq.call(null,xs__4284);

if(cljs.core.truth_(temp__3698__auto____4285))
{var s__4286 = temp__3698__auto____4285;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__4283)))
{{
var G__4288 = cljs.core.rest.call(null,s__4286);
var G__4289 = seen;
p__4280 = G__4288;
seen = G__4289;
continue;
}
} else
{return cljs.core.cons.call(null,f__4283,step.call(null,cljs.core.rest.call(null,s__4286),cljs.core.conj.call(null,seen,f__4283)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__4287.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__4290 = cljs.core.Vector.fromArray([]);
var s__4291 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__4291)))
{{
var G__4292 = cljs.core.conj.call(null,ret__4290,cljs.core.first.call(null,s__4291));
var G__4293 = cljs.core.next.call(null,s__4291);
ret__4290 = G__4292;
s__4291 = G__4293;
continue;
}
} else
{return cljs.core.seq.call(null,ret__4290);
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
{if(cljs.core.truth_((function (){var or__3548__auto____4294 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4294))
{return or__3548__auto____4294;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4295 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4295 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__4295 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____4296 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____4296))
{return or__3548__auto____4296;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__4297 = x.lastIndexOf("/");

if(cljs.core.truth_((i__4297 > -1)))
{return cljs.core.subs.call(null,x,2,i__4297);
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
var map__4300 = cljs.core.ObjMap.fromObject([],{});
var ks__4301 = cljs.core.seq.call(null,keys);
var vs__4302 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4303 = ks__4301;

if(cljs.core.truth_(and__3546__auto____4303))
{return vs__4302;
} else
{return and__3546__auto____4303;
}
})()))
{{
var G__4304 = cljs.core.assoc.call(null,map__4300,cljs.core.first.call(null,ks__4301),cljs.core.first.call(null,vs__4302));
var G__4305 = cljs.core.next.call(null,ks__4301);
var G__4306 = cljs.core.next.call(null,vs__4302);
map__4300 = G__4304;
ks__4301 = G__4305;
vs__4302 = G__4306;
continue;
}
} else
{return map__4300;
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
var max_key__4309 = (function (k,x){
return x;
});
var max_key__4310 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__4311 = (function() { 
var G__4313__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4298_SHARP_,p2__4299_SHARP_){
return max_key.call(null,k,p1__4298_SHARP_,p2__4299_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__4313 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4313__delegate.call(this, k, x, y, more);
};
G__4313.cljs$lang$maxFixedArity = 3;
G__4313.cljs$lang$applyTo = (function (arglist__4314){
var k = cljs.core.first(arglist__4314);
var x = cljs.core.first(cljs.core.next(arglist__4314));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4314)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4314)));
return G__4313__delegate.call(this, k, x, y, more);
});
return G__4313;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__4309.call(this,k,x);
case  3 :
return max_key__4310.call(this,k,x,y);
default:
return max_key__4311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__4311.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__4315 = (function (k,x){
return x;
});
var min_key__4316 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__4317 = (function() { 
var G__4319__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__4307_SHARP_,p2__4308_SHARP_){
return min_key.call(null,k,p1__4307_SHARP_,p2__4308_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__4319 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4319__delegate.call(this, k, x, y, more);
};
G__4319.cljs$lang$maxFixedArity = 3;
G__4319.cljs$lang$applyTo = (function (arglist__4320){
var k = cljs.core.first(arglist__4320);
var x = cljs.core.first(cljs.core.next(arglist__4320));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4320)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4320)));
return G__4319__delegate.call(this, k, x, y, more);
});
return G__4319;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__4315.call(this,k,x);
case  3 :
return min_key__4316.call(this,k,x,y);
default:
return min_key__4317.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__4317.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__4323 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__4324 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4321 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4321))
{var s__4322 = temp__3698__auto____4321;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__4322),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__4322)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__4323.call(this,n,step);
case  3 :
return partition_all__4324.call(this,n,step,coll);
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
var temp__3698__auto____4326 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4326))
{var s__4327 = temp__3698__auto____4326;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__4327))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__4327),take_while.call(null,pred,cljs.core.rest.call(null,s__4327)));
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
var this__4328 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__4329 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__4345 = null;
var G__4345__4346 = (function (rng,f){
var this__4330 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__4345__4347 = (function (rng,f,s){
var this__4331 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__4345 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__4345__4346.call(this,rng,f);
case  3 :
return G__4345__4347.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4345;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__4332 = this;
var comp__4333 = (cljs.core.truth_((this__4332.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__4333.call(null,this__4332.start,this__4332.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__4334 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__4334.end - this__4334.start) / this__4334.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__4335 = this;
return this__4335.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__4336 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__4336.meta,(this__4336.start + this__4336.step),this__4336.end,this__4336.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__4337 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__4338 = this;
return (new cljs.core.Range(meta,this__4338.start,this__4338.end,this__4338.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__4339 = this;
return this__4339.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4349 = null;
var G__4349__4350 = (function (rng,n){
var this__4340 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4340.start + (n * this__4340.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4341 = (this__4340.start > this__4340.end);

if(cljs.core.truth_(and__3546__auto____4341))
{return cljs.core._EQ_.call(null,this__4340.step,0);
} else
{return and__3546__auto____4341;
}
})()))
{return this__4340.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__4349__4351 = (function (rng,n,not_found){
var this__4342 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__4342.start + (n * this__4342.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____4343 = (this__4342.start > this__4342.end);

if(cljs.core.truth_(and__3546__auto____4343))
{return cljs.core._EQ_.call(null,this__4342.step,0);
} else
{return and__3546__auto____4343;
}
})()))
{return this__4342.start;
} else
{return not_found;
}
}
});
G__4349 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__4349__4350.call(this,rng,n);
case  3 :
return G__4349__4351.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4349;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__4344 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__4344.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__4353 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__4354 = (function (end){
return range.call(null,0,end,1);
});
var range__4355 = (function (start,end){
return range.call(null,start,end,1);
});
var range__4356 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__4353.call(this);
case  1 :
return range__4354.call(this,start);
case  2 :
return range__4355.call(this,start,end);
case  3 :
return range__4356.call(this,start,end,step);
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
var temp__3698__auto____4358 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4358))
{var s__4359 = temp__3698__auto____4358;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__4359),take_nth.call(null,n,cljs.core.drop.call(null,n,s__4359)));
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
var temp__3698__auto____4361 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4361))
{var s__4362 = temp__3698__auto____4361;

var fst__4363 = cljs.core.first.call(null,s__4362);
var fv__4364 = f.call(null,fst__4363);
var run__4365 = cljs.core.cons.call(null,fst__4363,cljs.core.take_while.call(null,(function (p1__4360_SHARP_){
return cljs.core._EQ_.call(null,fv__4364,f.call(null,p1__4360_SHARP_));
}),cljs.core.next.call(null,s__4362)));

return cljs.core.cons.call(null,run__4365,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__4365),s__4362))));
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
var reductions__4380 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____4376 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____4376))
{var s__4377 = temp__3695__auto____4376;

return reductions.call(null,f,cljs.core.first.call(null,s__4377),cljs.core.rest.call(null,s__4377));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__4381 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____4378 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____4378))
{var s__4379 = temp__3698__auto____4378;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__4379)),cljs.core.rest.call(null,s__4379));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__4380.call(this,f,init);
case  3 :
return reductions__4381.call(this,f,init,coll);
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
var juxt__4384 = (function (f){
return (function() {
var G__4389 = null;
var G__4389__4390 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__4389__4391 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__4389__4392 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__4389__4393 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__4389__4394 = (function() { 
var G__4396__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__4396 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4396__delegate.call(this, x, y, z, args);
};
G__4396.cljs$lang$maxFixedArity = 3;
G__4396.cljs$lang$applyTo = (function (arglist__4397){
var x = cljs.core.first(arglist__4397);
var y = cljs.core.first(cljs.core.next(arglist__4397));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4397)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4397)));
return G__4396__delegate.call(this, x, y, z, args);
});
return G__4396;
})()
;
G__4389 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4389__4390.call(this);
case  1 :
return G__4389__4391.call(this,x);
case  2 :
return G__4389__4392.call(this,x,y);
case  3 :
return G__4389__4393.call(this,x,y,z);
default:
return G__4389__4394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4389.cljs$lang$maxFixedArity = 3;
G__4389.cljs$lang$applyTo = G__4389__4394.cljs$lang$applyTo;
return G__4389;
})()
});
var juxt__4385 = (function (f,g){
return (function() {
var G__4398 = null;
var G__4398__4399 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__4398__4400 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__4398__4401 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__4398__4402 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__4398__4403 = (function() { 
var G__4405__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__4405 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4405__delegate.call(this, x, y, z, args);
};
G__4405.cljs$lang$maxFixedArity = 3;
G__4405.cljs$lang$applyTo = (function (arglist__4406){
var x = cljs.core.first(arglist__4406);
var y = cljs.core.first(cljs.core.next(arglist__4406));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4406)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4406)));
return G__4405__delegate.call(this, x, y, z, args);
});
return G__4405;
})()
;
G__4398 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4398__4399.call(this);
case  1 :
return G__4398__4400.call(this,x);
case  2 :
return G__4398__4401.call(this,x,y);
case  3 :
return G__4398__4402.call(this,x,y,z);
default:
return G__4398__4403.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4398.cljs$lang$maxFixedArity = 3;
G__4398.cljs$lang$applyTo = G__4398__4403.cljs$lang$applyTo;
return G__4398;
})()
});
var juxt__4386 = (function (f,g,h){
return (function() {
var G__4407 = null;
var G__4407__4408 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__4407__4409 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__4407__4410 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__4407__4411 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__4407__4412 = (function() { 
var G__4414__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__4414 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4414__delegate.call(this, x, y, z, args);
};
G__4414.cljs$lang$maxFixedArity = 3;
G__4414.cljs$lang$applyTo = (function (arglist__4415){
var x = cljs.core.first(arglist__4415);
var y = cljs.core.first(cljs.core.next(arglist__4415));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4415)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4415)));
return G__4414__delegate.call(this, x, y, z, args);
});
return G__4414;
})()
;
G__4407 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4407__4408.call(this);
case  1 :
return G__4407__4409.call(this,x);
case  2 :
return G__4407__4410.call(this,x,y);
case  3 :
return G__4407__4411.call(this,x,y,z);
default:
return G__4407__4412.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4407.cljs$lang$maxFixedArity = 3;
G__4407.cljs$lang$applyTo = G__4407__4412.cljs$lang$applyTo;
return G__4407;
})()
});
var juxt__4387 = (function() { 
var G__4416__delegate = function (f,g,h,fs){
var fs__4383 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__4417 = null;
var G__4417__4418 = (function (){
return cljs.core.reduce.call(null,(function (p1__4366_SHARP_,p2__4367_SHARP_){
return cljs.core.conj.call(null,p1__4366_SHARP_,p2__4367_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__4383);
});
var G__4417__4419 = (function (x){
return cljs.core.reduce.call(null,(function (p1__4368_SHARP_,p2__4369_SHARP_){
return cljs.core.conj.call(null,p1__4368_SHARP_,p2__4369_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__4383);
});
var G__4417__4420 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__4370_SHARP_,p2__4371_SHARP_){
return cljs.core.conj.call(null,p1__4370_SHARP_,p2__4371_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__4383);
});
var G__4417__4421 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__4372_SHARP_,p2__4373_SHARP_){
return cljs.core.conj.call(null,p1__4372_SHARP_,p2__4373_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__4383);
});
var G__4417__4422 = (function() { 
var G__4424__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__4374_SHARP_,p2__4375_SHARP_){
return cljs.core.conj.call(null,p1__4374_SHARP_,cljs.core.apply.call(null,p2__4375_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__4383);
};
var G__4424 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4424__delegate.call(this, x, y, z, args);
};
G__4424.cljs$lang$maxFixedArity = 3;
G__4424.cljs$lang$applyTo = (function (arglist__4425){
var x = cljs.core.first(arglist__4425);
var y = cljs.core.first(cljs.core.next(arglist__4425));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4425)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4425)));
return G__4424__delegate.call(this, x, y, z, args);
});
return G__4424;
})()
;
G__4417 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__4417__4418.call(this);
case  1 :
return G__4417__4419.call(this,x);
case  2 :
return G__4417__4420.call(this,x,y);
case  3 :
return G__4417__4421.call(this,x,y,z);
default:
return G__4417__4422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__4417.cljs$lang$maxFixedArity = 3;
G__4417.cljs$lang$applyTo = G__4417__4422.cljs$lang$applyTo;
return G__4417;
})()
};
var G__4416 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__4416__delegate.call(this, f, g, h, fs);
};
G__4416.cljs$lang$maxFixedArity = 3;
G__4416.cljs$lang$applyTo = (function (arglist__4426){
var f = cljs.core.first(arglist__4426);
var g = cljs.core.first(cljs.core.next(arglist__4426));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4426)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__4426)));
return G__4416__delegate.call(this, f, g, h, fs);
});
return G__4416;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__4384.call(this,f);
case  2 :
return juxt__4385.call(this,f,g);
case  3 :
return juxt__4386.call(this,f,g,h);
default:
return juxt__4387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__4387.cljs$lang$applyTo;
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
var dorun__4428 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__4431 = cljs.core.next.call(null,coll);
coll = G__4431;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__4429 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____4427 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____4427))
{return (n > 0);
} else
{return and__3546__auto____4427;
}
})()))
{{
var G__4432 = (n - 1);
var G__4433 = cljs.core.next.call(null,coll);
n = G__4432;
coll = G__4433;
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
return dorun__4428.call(this,n);
case  2 :
return dorun__4429.call(this,n,coll);
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
var doall__4434 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__4435 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__4434.call(this,n);
case  2 :
return doall__4435.call(this,n,coll);
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
var matches__4437 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__4437),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4437),1)))
{return cljs.core.first.call(null,matches__4437);
} else
{return cljs.core.vec.call(null,matches__4437);
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
var matches__4438 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__4438)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__4438),1)))
{return cljs.core.first.call(null,matches__4438);
} else
{return cljs.core.vec.call(null,matches__4438);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__4439 = cljs.core.re_find.call(null,re,s);
var match_idx__4440 = s.search(re);
var match_str__4441 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__4439))?cljs.core.first.call(null,match_data__4439):match_data__4439);
var post_match__4442 = cljs.core.subs.call(null,s,(match_idx__4440 + cljs.core.count.call(null,match_str__4441)));

if(cljs.core.truth_(match_data__4439))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__4439,re_seq.call(null,re,post_match__4442));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__4443_SHARP_){
return print_one.call(null,p1__4443_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____4444 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____4444))
{var and__3546__auto____4448 = (function (){var x__445__auto____4445 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4446 = x__445__auto____4445;

if(cljs.core.truth_(and__3546__auto____4446))
{var and__3546__auto____4447 = x__445__auto____4445.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____4447))
{return cljs.core.not.call(null,x__445__auto____4445.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____4447;
}
} else
{return and__3546__auto____4446;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____4445);
}
})();

if(cljs.core.truth_(and__3546__auto____4448))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____4448;
}
} else
{return and__3546__auto____4444;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____4449 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____4450 = x__445__auto____4449;

if(cljs.core.truth_(and__3546__auto____4450))
{var and__3546__auto____4451 = x__445__auto____4449.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____4451))
{return cljs.core.not.call(null,x__445__auto____4449.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____4451;
}
} else
{return and__3546__auto____4450;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____4449);
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
var first_obj__4452 = cljs.core.first.call(null,objs);
var sb__4453 = (new goog.string.StringBuffer());

var G__4454__4455 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4454__4455))
{var obj__4456 = cljs.core.first.call(null,G__4454__4455);
var G__4454__4457 = G__4454__4455;

while(true){
if(cljs.core.truth_((obj__4456 === first_obj__4452)))
{} else
{sb__4453.append(" ");
}
var G__4458__4459 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4456,opts));

if(cljs.core.truth_(G__4458__4459))
{var string__4460 = cljs.core.first.call(null,G__4458__4459);
var G__4458__4461 = G__4458__4459;

while(true){
sb__4453.append(string__4460);
var temp__3698__auto____4462 = cljs.core.next.call(null,G__4458__4461);

if(cljs.core.truth_(temp__3698__auto____4462))
{var G__4458__4463 = temp__3698__auto____4462;

{
var G__4466 = cljs.core.first.call(null,G__4458__4463);
var G__4467 = G__4458__4463;
string__4460 = G__4466;
G__4458__4461 = G__4467;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4464 = cljs.core.next.call(null,G__4454__4457);

if(cljs.core.truth_(temp__3698__auto____4464))
{var G__4454__4465 = temp__3698__auto____4464;

{
var G__4468 = cljs.core.first.call(null,G__4454__4465);
var G__4469 = G__4454__4465;
obj__4456 = G__4468;
G__4454__4457 = G__4469;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__4453);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__4470 = cljs.core.first.call(null,objs);

var G__4471__4472 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__4471__4472))
{var obj__4473 = cljs.core.first.call(null,G__4471__4472);
var G__4471__4474 = G__4471__4472;

while(true){
if(cljs.core.truth_((obj__4473 === first_obj__4470)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__4475__4476 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__4473,opts));

if(cljs.core.truth_(G__4475__4476))
{var string__4477 = cljs.core.first.call(null,G__4475__4476);
var G__4475__4478 = G__4475__4476;

while(true){
cljs.core.string_print.call(null,string__4477);
var temp__3698__auto____4479 = cljs.core.next.call(null,G__4475__4478);

if(cljs.core.truth_(temp__3698__auto____4479))
{var G__4475__4480 = temp__3698__auto____4479;

{
var G__4483 = cljs.core.first.call(null,G__4475__4480);
var G__4484 = G__4475__4480;
string__4477 = G__4483;
G__4475__4478 = G__4484;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4481 = cljs.core.next.call(null,G__4471__4474);

if(cljs.core.truth_(temp__3698__auto____4481))
{var G__4471__4482 = temp__3698__auto____4481;

{
var G__4485 = cljs.core.first.call(null,G__4471__4482);
var G__4486 = G__4471__4482;
obj__4473 = G__4485;
G__4471__4474 = G__4486;
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
pr_str.cljs$lang$applyTo = (function (arglist__4487){
var objs = cljs.core.seq( arglist__4487 );;
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
pr.cljs$lang$applyTo = (function (arglist__4488){
var objs = cljs.core.seq( arglist__4488 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__4489){
var objs = cljs.core.seq( arglist__4489 );;
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
println.cljs$lang$applyTo = (function (arglist__4490){
var objs = cljs.core.seq( arglist__4490 );;
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
prn.cljs$lang$applyTo = (function (arglist__4491){
var objs = cljs.core.seq( arglist__4491 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__4492 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4492,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____4493 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4493))
{var nspc__4494 = temp__3698__auto____4493;

return cljs.core.str.call(null,nspc__4494,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____4495 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____4495))
{var nspc__4496 = temp__3698__auto____4495;

return cljs.core.str.call(null,nspc__4496,"/");
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
var pr_pair__4497 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__4497,"{",", ","}",opts,coll);
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
var this__4498 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__4499 = this;
var G__4500__4501 = cljs.core.seq.call(null,this__4499.watches);

if(cljs.core.truth_(G__4500__4501))
{var G__4503__4505 = cljs.core.first.call(null,G__4500__4501);
var vec__4504__4506 = G__4503__4505;
var key__4507 = cljs.core.nth.call(null,vec__4504__4506,0,null);
var f__4508 = cljs.core.nth.call(null,vec__4504__4506,1,null);
var G__4500__4509 = G__4500__4501;

var G__4503__4510 = G__4503__4505;
var G__4500__4511 = G__4500__4509;

while(true){
var vec__4512__4513 = G__4503__4510;
var key__4514 = cljs.core.nth.call(null,vec__4512__4513,0,null);
var f__4515 = cljs.core.nth.call(null,vec__4512__4513,1,null);
var G__4500__4516 = G__4500__4511;

f__4515.call(null,key__4514,this$,oldval,newval);
var temp__3698__auto____4517 = cljs.core.next.call(null,G__4500__4516);

if(cljs.core.truth_(temp__3698__auto____4517))
{var G__4500__4518 = temp__3698__auto____4517;

{
var G__4525 = cljs.core.first.call(null,G__4500__4518);
var G__4526 = G__4500__4518;
G__4503__4510 = G__4525;
G__4500__4511 = G__4526;
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
var this__4519 = this;
return this$.watches = cljs.core.assoc.call(null,this__4519.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__4520 = this;
return this$.watches = cljs.core.dissoc.call(null,this__4520.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__4521 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__4521.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__4522 = this;
return this__4522.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4523 = this;
return this__4523.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__4524 = this;
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
var atom__4533 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__4534 = (function() { 
var G__4536__delegate = function (x,p__4527){
var map__4528__4529 = p__4527;
var map__4528__4530 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4528__4529))?cljs.core.apply.call(null,cljs.core.hash_map,map__4528__4529):map__4528__4529);
var validator__4531 = cljs.core.get.call(null,map__4528__4530,"﷐'validator");
var meta__4532 = cljs.core.get.call(null,map__4528__4530,"﷐'meta");

return (new cljs.core.Atom(x,meta__4532,validator__4531,null));
};
var G__4536 = function (x,var_args){
var p__4527 = null;
if (goog.isDef(var_args)) {
  p__4527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4536__delegate.call(this, x, p__4527);
};
G__4536.cljs$lang$maxFixedArity = 1;
G__4536.cljs$lang$applyTo = (function (arglist__4537){
var x = cljs.core.first(arglist__4537);
var p__4527 = cljs.core.rest(arglist__4537);
return G__4536__delegate.call(this, x, p__4527);
});
return G__4536;
})()
;
atom = function(x,var_args){
var p__4527 = var_args;
switch(arguments.length){
case  1 :
return atom__4533.call(this,x);
default:
return atom__4534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__4534.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____4538 = a.validator;

if(cljs.core.truth_(temp__3698__auto____4538))
{var validate__4539 = temp__3698__auto____4538;

if(cljs.core.truth_(validate__4539.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__4540 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__4540,new_value);
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
var swap_BANG___4541 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___4542 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___4543 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___4544 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___4545 = (function() { 
var G__4547__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__4547 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__4547__delegate.call(this, a, f, x, y, z, more);
};
G__4547.cljs$lang$maxFixedArity = 5;
G__4547.cljs$lang$applyTo = (function (arglist__4548){
var a = cljs.core.first(arglist__4548);
var f = cljs.core.first(cljs.core.next(arglist__4548));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__4548)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4548))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4548)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__4548)))));
return G__4547__delegate.call(this, a, f, x, y, z, more);
});
return G__4547;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___4541.call(this,a,f);
case  3 :
return swap_BANG___4542.call(this,a,f,x);
case  4 :
return swap_BANG___4543.call(this,a,f,x,y);
case  5 :
return swap_BANG___4544.call(this,a,f,x,y,z);
default:
return swap_BANG___4545.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___4545.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__4549){
var iref = cljs.core.first(arglist__4549);
var f = cljs.core.first(cljs.core.next(arglist__4549));
var args = cljs.core.rest(cljs.core.next(arglist__4549));
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
var gensym__4550 = (function (){
return gensym.call(null,"G__");
});
var gensym__4551 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__4550.call(this);
case  1 :
return gensym__4551.call(this,prefix_string);
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
var this__4553 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__4553.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__4554 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__4554.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__4554.state,this__4554.f);
}
return cljs.core.deref.call(null,this__4554.state);
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
delay.cljs$lang$applyTo = (function (arglist__4555){
var body = cljs.core.seq( arglist__4555 );;
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
var map__4556__4557 = options;
var map__4556__4558 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__4556__4557))?cljs.core.apply.call(null,cljs.core.hash_map,map__4556__4557):map__4556__4557);
var keywordize_keys__4559 = cljs.core.get.call(null,map__4556__4558,"﷐'keywordize-keys");
var keyfn__4560 = (cljs.core.truth_(keywordize_keys__4559)?cljs.core.keyword:cljs.core.str);
var f__4566 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____4565 = (function iter__4561(s__4562){
return (new cljs.core.LazySeq(null,false,(function (){
var s__4562__4563 = s__4562;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__4562__4563)))
{var k__4564 = cljs.core.first.call(null,s__4562__4563);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__4560.call(null,k__4564),thisfn.call(null,(x[k__4564]))]),iter__4561.call(null,cljs.core.rest.call(null,s__4562__4563)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____4565.call(null,cljs.core.js_keys.call(null,x));
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

return f__4566.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__4567){
var x = cljs.core.first(arglist__4567);
var options = cljs.core.rest(arglist__4567);
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
var mem__4568 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__4572__delegate = function (args){
var temp__3695__auto____4569 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__4568),args);

if(cljs.core.truth_(temp__3695__auto____4569))
{var v__4570 = temp__3695__auto____4569;

return v__4570;
} else
{var ret__4571 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__4568,cljs.core.assoc,args,ret__4571);
return ret__4571;
}
};
var G__4572 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__4572__delegate.call(this, args);
};
G__4572.cljs$lang$maxFixedArity = 0;
G__4572.cljs$lang$applyTo = (function (arglist__4573){
var args = cljs.core.seq( arglist__4573 );;
return G__4572__delegate.call(this, args);
});
return G__4572;
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
var trampoline__4575 = (function (f){
while(true){
var ret__4574 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__4574)))
{{
var G__4578 = ret__4574;
f = G__4578;
continue;
}
} else
{return ret__4574;
}
break;
}
});
var trampoline__4576 = (function() { 
var G__4579__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__4579 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4579__delegate.call(this, f, args);
};
G__4579.cljs$lang$maxFixedArity = 1;
G__4579.cljs$lang$applyTo = (function (arglist__4580){
var f = cljs.core.first(arglist__4580);
var args = cljs.core.rest(arglist__4580);
return G__4579__delegate.call(this, f, args);
});
return G__4579;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__4575.call(this,f);
default:
return trampoline__4576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__4576.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__4581 = (function (){
return rand.call(null,1);
});
var rand__4582 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__4581.call(this);
case  1 :
return rand__4582.call(this,n);
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
var k__4584 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__4584,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__4584,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___4593 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___4594 = (function (h,child,parent){
var or__3548__auto____4585 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____4585))
{return or__3548__auto____4585;
} else
{var or__3548__auto____4586 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____4586))
{return or__3548__auto____4586;
} else
{var and__3546__auto____4587 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____4587))
{var and__3546__auto____4588 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____4588))
{var and__3546__auto____4589 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____4589))
{var ret__4590 = true;
var i__4591 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____4592 = cljs.core.not.call(null,ret__4590);

if(cljs.core.truth_(or__3548__auto____4592))
{return or__3548__auto____4592;
} else
{return cljs.core._EQ_.call(null,i__4591,cljs.core.count.call(null,parent));
}
})()))
{return ret__4590;
} else
{{
var G__4596 = isa_QMARK_.call(null,h,child.call(null,i__4591),parent.call(null,i__4591));
var G__4597 = (i__4591 + 1);
ret__4590 = G__4596;
i__4591 = G__4597;
continue;
}
}
break;
}
} else
{return and__3546__auto____4589;
}
} else
{return and__3546__auto____4588;
}
} else
{return and__3546__auto____4587;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___4593.call(this,h,child);
case  3 :
return isa_QMARK___4594.call(this,h,child,parent);
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
var parents__4598 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__4599 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__4598.call(this,h);
case  2 :
return parents__4599.call(this,h,tag);
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
var ancestors__4601 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__4602 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__4601.call(this,h);
case  2 :
return ancestors__4602.call(this,h,tag);
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
var descendants__4604 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__4605 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__4604.call(this,h);
case  2 :
return descendants__4605.call(this,h,tag);
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
var derive__4615 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__4616 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__4610 = "﷐'parents".call(null,h);
var td__4611 = "﷐'descendants".call(null,h);
var ta__4612 = "﷐'ancestors".call(null,h);
var tf__4613 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____4614 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__4610.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4612.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__4612.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__4610,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__4613.call(null,"﷐'ancestors".call(null,h),tag,td__4611,parent,ta__4612),"﷐'descendants":tf__4613.call(null,"﷐'descendants".call(null,h),parent,ta__4612,tag,td__4611)});
})());

if(cljs.core.truth_(or__3548__auto____4614))
{return or__3548__auto____4614;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__4615.call(this,h,tag);
case  3 :
return derive__4616.call(this,h,tag,parent);
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
var underive__4622 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__4623 = (function (h,tag,parent){
var parentMap__4618 = "﷐'parents".call(null,h);
var childsParents__4619 = (cljs.core.truth_(parentMap__4618.call(null,tag))?cljs.core.disj.call(null,parentMap__4618.call(null,tag),parent):cljs.core.set([]));
var newParents__4620 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__4619))?cljs.core.assoc.call(null,parentMap__4618,tag,childsParents__4619):cljs.core.dissoc.call(null,parentMap__4618,tag));
var deriv_seq__4621 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__4607_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__4607_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__4607_SHARP_),cljs.core.second.call(null,p1__4607_SHARP_)));
}),cljs.core.seq.call(null,newParents__4620)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__4618.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__4608_SHARP_,p2__4609_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__4608_SHARP_,p2__4609_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__4621));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__4622.call(this,h,tag);
case  3 :
return underive__4623.call(this,h,tag,parent);
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
var xprefs__4625 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____4627 = (cljs.core.truth_((function (){var and__3546__auto____4626 = xprefs__4625;

if(cljs.core.truth_(and__3546__auto____4626))
{return xprefs__4625.call(null,y);
} else
{return and__3546__auto____4626;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____4627))
{return or__3548__auto____4627;
} else
{var or__3548__auto____4629 = (function (){var ps__4628 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4628) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__4628),prefer_table)))
{} else
{}
{
var G__4632 = cljs.core.rest.call(null,ps__4628);
ps__4628 = G__4632;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4629))
{return or__3548__auto____4629;
} else
{var or__3548__auto____4631 = (function (){var ps__4630 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__4630) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__4630),y,prefer_table)))
{} else
{}
{
var G__4633 = cljs.core.rest.call(null,ps__4630);
ps__4630 = G__4633;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____4631))
{return or__3548__auto____4631;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____4634 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____4634))
{return or__3548__auto____4634;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__4643 = cljs.core.reduce.call(null,(function (be,p__4635){
var vec__4636__4637 = p__4635;
var k__4638 = cljs.core.nth.call(null,vec__4636__4637,0,null);
var ___4639 = cljs.core.nth.call(null,vec__4636__4637,1,null);
var e__4640 = vec__4636__4637;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__4638)))
{var be2__4642 = (cljs.core.truth_((function (){var or__3548__auto____4641 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____4641))
{return or__3548__auto____4641;
} else
{return cljs.core.dominates.call(null,k__4638,cljs.core.first.call(null,be),prefer_table);
}
})())?e__4640:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__4642),k__4638,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__4638," and ",cljs.core.first.call(null,be2__4642),", and neither is preferred")));
}
return be2__4642;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__4643))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__4643));
return cljs.core.second.call(null,best_entry__4643);
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
if(cljs.core.truth_((function (){var and__3546__auto____4644 = mf;

if(cljs.core.truth_(and__3546__auto____4644))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____4644;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____4645 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4645))
{return or__3548__auto____4645;
} else
{var or__3548__auto____4646 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____4646))
{return or__3548__auto____4646;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____4647 = mf;

if(cljs.core.truth_(and__3546__auto____4647))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____4647;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____4648 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4648))
{return or__3548__auto____4648;
} else
{var or__3548__auto____4649 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____4649))
{return or__3548__auto____4649;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4650 = mf;

if(cljs.core.truth_(and__3546__auto____4650))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____4650;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4651 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4651))
{return or__3548__auto____4651;
} else
{var or__3548__auto____4652 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____4652))
{return or__3548__auto____4652;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____4653 = mf;

if(cljs.core.truth_(and__3546__auto____4653))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____4653;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____4654 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4654))
{return or__3548__auto____4654;
} else
{var or__3548__auto____4655 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____4655))
{return or__3548__auto____4655;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____4656 = mf;

if(cljs.core.truth_(and__3546__auto____4656))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____4656;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____4657 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4657))
{return or__3548__auto____4657;
} else
{var or__3548__auto____4658 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____4658))
{return or__3548__auto____4658;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4659 = mf;

if(cljs.core.truth_(and__3546__auto____4659))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____4659;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____4660 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4660))
{return or__3548__auto____4660;
} else
{var or__3548__auto____4661 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____4661))
{return or__3548__auto____4661;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____4662 = mf;

if(cljs.core.truth_(and__3546__auto____4662))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____4662;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____4663 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4663))
{return or__3548__auto____4663;
} else
{var or__3548__auto____4664 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____4664))
{return or__3548__auto____4664;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____4665 = mf;

if(cljs.core.truth_(and__3546__auto____4665))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____4665;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____4666 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____4666))
{return or__3548__auto____4666;
} else
{var or__3548__auto____4667 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____4667))
{return or__3548__auto____4667;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__4668 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__4669 = cljs.core._get_method.call(null,mf,dispatch_val__4668);

if(cljs.core.truth_(target_fn__4669))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__4668)));
}
return cljs.core.apply.call(null,target_fn__4669,args);
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
var this__4670 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__4671 = this;
cljs.core.swap_BANG_.call(null,this__4671.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4671.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4671.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__4671.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__4672 = this;
cljs.core.swap_BANG_.call(null,this__4672.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__4672.method_cache,this__4672.method_table,this__4672.cached_hierarchy,this__4672.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__4673 = this;
cljs.core.swap_BANG_.call(null,this__4673.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__4673.method_cache,this__4673.method_table,this__4673.cached_hierarchy,this__4673.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__4674 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__4674.cached_hierarchy),cljs.core.deref.call(null,this__4674.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__4674.method_cache,this__4674.method_table,this__4674.cached_hierarchy,this__4674.hierarchy);
}
var temp__3695__auto____4675 = cljs.core.deref.call(null,this__4674.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____4675))
{var target_fn__4676 = temp__3695__auto____4675;

return target_fn__4676;
} else
{var temp__3695__auto____4677 = cljs.core.find_and_cache_best_method.call(null,this__4674.name,dispatch_val,this__4674.hierarchy,this__4674.method_table,this__4674.prefer_table,this__4674.method_cache,this__4674.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____4677))
{var target_fn__4678 = temp__3695__auto____4677;

return target_fn__4678;
} else
{return cljs.core.deref.call(null,this__4674.method_table).call(null,this__4674.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__4679 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__4679.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__4679.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__4679.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__4679.method_cache,this__4679.method_table,this__4679.cached_hierarchy,this__4679.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__4680 = this;
return cljs.core.deref.call(null,this__4680.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__4681 = this;
return cljs.core.deref.call(null,this__4681.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__4682 = this;
return cljs.core.do_dispatch.call(null,mf,this__4682.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__4683__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__4683 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__4683__delegate.call(this, _, args);
};
G__4683.cljs$lang$maxFixedArity = 1;
G__4683.cljs$lang$applyTo = (function (arglist__4684){
var _ = cljs.core.first(arglist__4684);
var args = cljs.core.rest(arglist__4684);
return G__4683__delegate.call(this, _, args);
});
return G__4683;
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
