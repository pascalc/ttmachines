goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__4908 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__4908,cljs.core.remove.call(null,(function (p1__4907_SHARP_){
return (max__4908 === p1__4907_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__4911 = (function (){
return cljs.core.set([]);
});
var union__4912 = (function (s1){
return s1;
});
var union__4913 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__4914 = (function() { 
var G__4916__delegate = function (s1,s2,sets){
var bubbled_sets__4910 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__4910),cljs.core.rest.call(null,bubbled_sets__4910));
};
var G__4916 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4916__delegate.call(this, s1, s2, sets);
};
G__4916.cljs$lang$maxFixedArity = 2;
G__4916.cljs$lang$applyTo = (function (arglist__4917){
var s1 = cljs.core.first(arglist__4917);
var s2 = cljs.core.first(cljs.core.next(arglist__4917));
var sets = cljs.core.rest(cljs.core.next(arglist__4917));
return G__4916__delegate.call(this, s1, s2, sets);
});
return G__4916;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__4911.call(this);
case  1 :
return union__4912.call(this,s1);
case  2 :
return union__4913.call(this,s1,s2);
default:
return union__4914.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__4914.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__4919 = (function (s1){
return s1;
});
var intersection__4920 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__4923 = s2;
var G__4924 = s1;
s1 = G__4923;
s2 = G__4924;
continue;
}
} else
{return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return result;
} else
{return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});
var intersection__4921 = (function() { 
var G__4925__delegate = function (s1,s2,sets){
var bubbled_sets__4918 = clojure.set.bubble_max_key.call(null,(function (p1__4909_SHARP_){
return (- cljs.core.count.call(null,p1__4909_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__4918),cljs.core.rest.call(null,bubbled_sets__4918));
};
var G__4925 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4925__delegate.call(this, s1, s2, sets);
};
G__4925.cljs$lang$maxFixedArity = 2;
G__4925.cljs$lang$applyTo = (function (arglist__4926){
var s1 = cljs.core.first(arglist__4926);
var s2 = cljs.core.first(cljs.core.next(arglist__4926));
var sets = cljs.core.rest(cljs.core.next(arglist__4926));
return G__4925__delegate.call(this, s1, s2, sets);
});
return G__4925;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__4919.call(this,s1);
case  2 :
return intersection__4920.call(this,s1,s2);
default:
return intersection__4921.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__4921.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__4927 = (function (s1){
return s1;
});
var difference__4928 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s2,item)))
{return cljs.core.disj.call(null,result,item);
} else
{return result;
}
}),s1,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});
var difference__4929 = (function() { 
var G__4931__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__4931 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4931__delegate.call(this, s1, s2, sets);
};
G__4931.cljs$lang$maxFixedArity = 2;
G__4931.cljs$lang$applyTo = (function (arglist__4932){
var s1 = cljs.core.first(arglist__4932);
var s2 = cljs.core.first(cljs.core.next(arglist__4932));
var sets = cljs.core.rest(cljs.core.next(arglist__4932));
return G__4931__delegate.call(this, s1, s2, sets);
});
return G__4931;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__4927.call(this,s1);
case  2 :
return difference__4928.call(this,s1,s2);
default:
return difference__4929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__4929.cljs$lang$applyTo;
return difference;
})()
;
/**
* Returns a set of the elements for which pred is true
*/
clojure.set.select = (function select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k)))
{return s;
} else
{return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
* Returns a rel of the elements of xrel with only the keys in ks
*/
clojure.set.project = (function project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4933_SHARP_){
return cljs.core.select_keys.call(null,p1__4933_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__4935){
var vec__4936__4937 = p__4935;
var old__4938 = cljs.core.nth.call(null,vec__4936__4937,0,null);
var new$__4939 = cljs.core.nth.call(null,vec__4936__4937,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____4940 = cljs.core.not_EQ_.call(null,old__4938,new$__4939);

if(cljs.core.truth_(and__3546__auto____4940))
{return cljs.core.contains_QMARK_.call(null,m,old__4938);
} else
{return and__3546__auto____4940;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__4939,cljs.core.get.call(null,m,old__4938)),old__4938);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4934_SHARP_){
return clojure.set.rename_keys.call(null,p1__4934_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__4941 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__4941,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__4941,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__4946){
var vec__4947__4948 = p__4946;
var k__4949 = cljs.core.nth.call(null,vec__4947__4948,0,null);
var v__4950 = cljs.core.nth.call(null,vec__4947__4948,1,null);

return cljs.core.assoc.call(null,m,v__4950,k__4949);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__4967 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____4952 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____4952))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____4952;
}
})()))
{var ks__4954 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__4953__4955 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel]):cljs.core.Vector.fromArray([yrel,xrel]));
var r__4956 = cljs.core.nth.call(null,vec__4953__4955,0,null);
var s__4957 = cljs.core.nth.call(null,vec__4953__4955,1,null);
var idx__4958 = clojure.set.index.call(null,r__4956,ks__4954);

return cljs.core.reduce.call(null,(function (ret,x){
var found__4959 = idx__4958.call(null,cljs.core.select_keys.call(null,x,ks__4954));

if(cljs.core.truth_(found__4959))
{return cljs.core.reduce.call(null,(function (p1__4942_SHARP_,p2__4943_SHARP_){
return cljs.core.conj.call(null,p1__4942_SHARP_,cljs.core.merge.call(null,p2__4943_SHARP_,x));
}),ret,found__4959);
} else
{return ret;
}
}),cljs.core.set([]),s__4957);
} else
{return cljs.core.set([]);
}
});
var join__4968 = (function (xrel,yrel,km){
var vec__4960__4961 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.Vector.fromArray([yrel,xrel,km]));
var r__4962 = cljs.core.nth.call(null,vec__4960__4961,0,null);
var s__4963 = cljs.core.nth.call(null,vec__4960__4961,1,null);
var k__4964 = cljs.core.nth.call(null,vec__4960__4961,2,null);
var idx__4965 = clojure.set.index.call(null,r__4962,cljs.core.vals.call(null,k__4964));

return cljs.core.reduce.call(null,(function (ret,x){
var found__4966 = idx__4965.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__4964)),k__4964));

if(cljs.core.truth_(found__4966))
{return cljs.core.reduce.call(null,(function (p1__4944_SHARP_,p2__4945_SHARP_){
return cljs.core.conj.call(null,p1__4944_SHARP_,cljs.core.merge.call(null,p2__4945_SHARP_,x));
}),ret,found__4966);
} else
{return ret;
}
}),cljs.core.set([]),s__4963);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__4967.call(this,xrel,yrel);
case  3 :
return join__4968.call(this,xrel,yrel,km);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Is set1 a subset of set2?
*/
clojure.set.subset_QMARK_ = (function subset_QMARK_(set1,set2){
var and__3546__auto____4971 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____4971))
{return cljs.core.every_QMARK_.call(null,(function (p1__4951_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__4951_SHARP_);
}),set1);
} else
{return and__3546__auto____4971;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____4972 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____4972))
{return cljs.core.every_QMARK_.call(null,(function (p1__4970_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__4970_SHARP_);
}),set2);
} else
{return and__3546__auto____4972;
}
});
