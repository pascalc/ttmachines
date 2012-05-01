goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__4932 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__4932,cljs.core.remove.call(null,(function (p1__4931_SHARP_){
return (max__4932 === p1__4931_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__4935 = (function (){
return cljs.core.set([]);
});
var union__4936 = (function (s1){
return s1;
});
var union__4937 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__4938 = (function() { 
var G__4940__delegate = function (s1,s2,sets){
var bubbled_sets__4934 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__4934),cljs.core.rest.call(null,bubbled_sets__4934));
};
var G__4940 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4940__delegate.call(this, s1, s2, sets);
};
G__4940.cljs$lang$maxFixedArity = 2;
G__4940.cljs$lang$applyTo = (function (arglist__4941){
var s1 = cljs.core.first(arglist__4941);
var s2 = cljs.core.first(cljs.core.next(arglist__4941));
var sets = cljs.core.rest(cljs.core.next(arglist__4941));
return G__4940__delegate.call(this, s1, s2, sets);
});
return G__4940;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__4935.call(this);
case  1 :
return union__4936.call(this,s1);
case  2 :
return union__4937.call(this,s1,s2);
default:
return union__4938.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__4938.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__4943 = (function (s1){
return s1;
});
var intersection__4944 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__4947 = s2;
var G__4948 = s1;
s1 = G__4947;
s2 = G__4948;
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
var intersection__4945 = (function() { 
var G__4949__delegate = function (s1,s2,sets){
var bubbled_sets__4942 = clojure.set.bubble_max_key.call(null,(function (p1__4933_SHARP_){
return (- cljs.core.count.call(null,p1__4933_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__4942),cljs.core.rest.call(null,bubbled_sets__4942));
};
var G__4949 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4949__delegate.call(this, s1, s2, sets);
};
G__4949.cljs$lang$maxFixedArity = 2;
G__4949.cljs$lang$applyTo = (function (arglist__4950){
var s1 = cljs.core.first(arglist__4950);
var s2 = cljs.core.first(cljs.core.next(arglist__4950));
var sets = cljs.core.rest(cljs.core.next(arglist__4950));
return G__4949__delegate.call(this, s1, s2, sets);
});
return G__4949;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__4943.call(this,s1);
case  2 :
return intersection__4944.call(this,s1,s2);
default:
return intersection__4945.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__4945.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__4951 = (function (s1){
return s1;
});
var difference__4952 = (function (s1,s2){
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
var difference__4953 = (function() { 
var G__4955__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__4955 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4955__delegate.call(this, s1, s2, sets);
};
G__4955.cljs$lang$maxFixedArity = 2;
G__4955.cljs$lang$applyTo = (function (arglist__4956){
var s1 = cljs.core.first(arglist__4956);
var s2 = cljs.core.first(cljs.core.next(arglist__4956));
var sets = cljs.core.rest(cljs.core.next(arglist__4956));
return G__4955__delegate.call(this, s1, s2, sets);
});
return G__4955;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__4951.call(this,s1);
case  2 :
return difference__4952.call(this,s1,s2);
default:
return difference__4953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__4953.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4957_SHARP_){
return cljs.core.select_keys.call(null,p1__4957_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__4959){
var vec__4960__4961 = p__4959;
var old__4962 = cljs.core.nth.call(null,vec__4960__4961,0,null);
var new$__4963 = cljs.core.nth.call(null,vec__4960__4961,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____4964 = cljs.core.not_EQ_.call(null,old__4962,new$__4963);

if(cljs.core.truth_(and__3546__auto____4964))
{return cljs.core.contains_QMARK_.call(null,m,old__4962);
} else
{return and__3546__auto____4964;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__4963,cljs.core.get.call(null,m,old__4962)),old__4962);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__4958_SHARP_){
return clojure.set.rename_keys.call(null,p1__4958_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__4965 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__4965,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__4965,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__4970){
var vec__4971__4972 = p__4970;
var k__4973 = cljs.core.nth.call(null,vec__4971__4972,0,null);
var v__4974 = cljs.core.nth.call(null,vec__4971__4972,1,null);

return cljs.core.assoc.call(null,m,v__4974,k__4973);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__4991 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____4976 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____4976))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____4976;
}
})()))
{var ks__4978 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__4977__4979 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel]):cljs.core.Vector.fromArray([yrel,xrel]));
var r__4980 = cljs.core.nth.call(null,vec__4977__4979,0,null);
var s__4981 = cljs.core.nth.call(null,vec__4977__4979,1,null);
var idx__4982 = clojure.set.index.call(null,r__4980,ks__4978);

return cljs.core.reduce.call(null,(function (ret,x){
var found__4983 = idx__4982.call(null,cljs.core.select_keys.call(null,x,ks__4978));

if(cljs.core.truth_(found__4983))
{return cljs.core.reduce.call(null,(function (p1__4966_SHARP_,p2__4967_SHARP_){
return cljs.core.conj.call(null,p1__4966_SHARP_,cljs.core.merge.call(null,p2__4967_SHARP_,x));
}),ret,found__4983);
} else
{return ret;
}
}),cljs.core.set([]),s__4981);
} else
{return cljs.core.set([]);
}
});
var join__4992 = (function (xrel,yrel,km){
var vec__4984__4985 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.Vector.fromArray([yrel,xrel,km]));
var r__4986 = cljs.core.nth.call(null,vec__4984__4985,0,null);
var s__4987 = cljs.core.nth.call(null,vec__4984__4985,1,null);
var k__4988 = cljs.core.nth.call(null,vec__4984__4985,2,null);
var idx__4989 = clojure.set.index.call(null,r__4986,cljs.core.vals.call(null,k__4988));

return cljs.core.reduce.call(null,(function (ret,x){
var found__4990 = idx__4989.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__4988)),k__4988));

if(cljs.core.truth_(found__4990))
{return cljs.core.reduce.call(null,(function (p1__4968_SHARP_,p2__4969_SHARP_){
return cljs.core.conj.call(null,p1__4968_SHARP_,cljs.core.merge.call(null,p2__4969_SHARP_,x));
}),ret,found__4990);
} else
{return ret;
}
}),cljs.core.set([]),s__4987);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__4991.call(this,xrel,yrel);
case  3 :
return join__4992.call(this,xrel,yrel,km);
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
var and__3546__auto____4995 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____4995))
{return cljs.core.every_QMARK_.call(null,(function (p1__4975_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__4975_SHARP_);
}),set1);
} else
{return and__3546__auto____4995;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____4996 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____4996))
{return cljs.core.every_QMARK_.call(null,(function (p1__4994_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__4994_SHARP_);
}),set2);
} else
{return and__3546__auto____4996;
}
});
