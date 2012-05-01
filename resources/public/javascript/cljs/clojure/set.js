goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function bubble_max_key(k,coll){
var max__21041 = cljs.core.apply.call(null,cljs.core.max_key,k,coll);

return cljs.core.cons.call(null,max__21041,cljs.core.remove.call(null,(function (p1__21040_SHARP_){
return (max__21041 === p1__21040_SHARP_);
}),coll));
});
/**
* Return a set that is the union of the input sets
* @param {...*} var_args
*/
clojure.set.union = (function() {
var union = null;
var union__21044 = (function (){
return cljs.core.set([]);
});
var union__21045 = (function (s1){
return s1;
});
var union__21046 = (function (s1,s2){
if(cljs.core.truth_((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))))
{return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else
{return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});
var union__21047 = (function() { 
var G__21049__delegate = function (s1,s2,sets){
var bubbled_sets__21043 = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets__21043),cljs.core.rest.call(null,bubbled_sets__21043));
};
var G__21049 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21049__delegate.call(this, s1, s2, sets);
};
G__21049.cljs$lang$maxFixedArity = 2;
G__21049.cljs$lang$applyTo = (function (arglist__21050){
var s1 = cljs.core.first(arglist__21050);
var s2 = cljs.core.first(cljs.core.next(arglist__21050));
var sets = cljs.core.rest(cljs.core.next(arglist__21050));
return G__21049__delegate.call(this, s1, s2, sets);
});
return G__21049;
})()
;
union = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  0 :
return union__21044.call(this);
case  1 :
return union__21045.call(this,s1);
case  2 :
return union__21046.call(this,s1,s2);
default:
return union__21047.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
union.cljs$lang$maxFixedArity = 2;
union.cljs$lang$applyTo = union__21047.cljs$lang$applyTo;
return union;
})()
;
/**
* Return a set that is the intersection of the input sets
* @param {...*} var_args
*/
clojure.set.intersection = (function() {
var intersection = null;
var intersection__21052 = (function (s1){
return s1;
});
var intersection__21053 = (function (s1,s2){
while(true){
if(cljs.core.truth_((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))))
{{
var G__21056 = s2;
var G__21057 = s1;
s1 = G__21056;
s2 = G__21057;
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
var intersection__21054 = (function() { 
var G__21058__delegate = function (s1,s2,sets){
var bubbled_sets__21051 = clojure.set.bubble_max_key.call(null,(function (p1__21042_SHARP_){
return (- cljs.core.count.call(null,p1__21042_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));

return cljs.core.reduce.call(null,intersection,cljs.core.first.call(null,bubbled_sets__21051),cljs.core.rest.call(null,bubbled_sets__21051));
};
var G__21058 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21058__delegate.call(this, s1, s2, sets);
};
G__21058.cljs$lang$maxFixedArity = 2;
G__21058.cljs$lang$applyTo = (function (arglist__21059){
var s1 = cljs.core.first(arglist__21059);
var s2 = cljs.core.first(cljs.core.next(arglist__21059));
var sets = cljs.core.rest(cljs.core.next(arglist__21059));
return G__21058__delegate.call(this, s1, s2, sets);
});
return G__21058;
})()
;
intersection = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return intersection__21052.call(this,s1);
case  2 :
return intersection__21053.call(this,s1,s2);
default:
return intersection__21054.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
intersection.cljs$lang$maxFixedArity = 2;
intersection.cljs$lang$applyTo = intersection__21054.cljs$lang$applyTo;
return intersection;
})()
;
/**
* Return a set that is the first set without elements of the remaining sets
* @param {...*} var_args
*/
clojure.set.difference = (function() {
var difference = null;
var difference__21060 = (function (s1){
return s1;
});
var difference__21061 = (function (s1,s2){
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
var difference__21062 = (function() { 
var G__21064__delegate = function (s1,s2,sets){
return cljs.core.reduce.call(null,difference,s1,cljs.core.conj.call(null,sets,s2));
};
var G__21064 = function (s1,s2,var_args){
var sets = null;
if (goog.isDef(var_args)) {
  sets = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__21064__delegate.call(this, s1, s2, sets);
};
G__21064.cljs$lang$maxFixedArity = 2;
G__21064.cljs$lang$applyTo = (function (arglist__21065){
var s1 = cljs.core.first(arglist__21065);
var s2 = cljs.core.first(cljs.core.next(arglist__21065));
var sets = cljs.core.rest(cljs.core.next(arglist__21065));
return G__21064__delegate.call(this, s1, s2, sets);
});
return G__21064;
})()
;
difference = function(s1,s2,var_args){
var sets = var_args;
switch(arguments.length){
case  1 :
return difference__21060.call(this,s1);
case  2 :
return difference__21061.call(this,s1,s2);
default:
return difference__21062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
difference.cljs$lang$maxFixedArity = 2;
difference.cljs$lang$applyTo = difference__21062.cljs$lang$applyTo;
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
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__21066_SHARP_){
return cljs.core.select_keys.call(null,p1__21066_SHARP_,ks);
}),xrel));
});
/**
* Returns the map with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename_keys = (function rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__21068){
var vec__21069__21070 = p__21068;
var old__21071 = cljs.core.nth.call(null,vec__21069__21070,0,null);
var new$__21072 = cljs.core.nth.call(null,vec__21069__21070,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____21073 = cljs.core.not_EQ_.call(null,old__21071,new$__21072);

if(cljs.core.truth_(and__3546__auto____21073))
{return cljs.core.contains_QMARK_.call(null,m,old__21071);
} else
{return and__3546__auto____21073;
}
})()))
{return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,m,new$__21072,cljs.core.get.call(null,m,old__21071)),old__21071);
} else
{return m;
}
}),map,kmap);
});
/**
* Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
*/
clojure.set.rename = (function rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__21067_SHARP_){
return clojure.set.rename_keys.call(null,p1__21067_SHARP_,kmap);
}),xrel));
});
/**
* Returns a map of the distinct values of ks in the xrel mapped to a
* set of the maps in xrel with the corresponding values of ks.
*/
clojure.set.index = (function index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik__21074 = cljs.core.select_keys.call(null,x,ks);

return cljs.core.assoc.call(null,m,ik__21074,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik__21074,cljs.core.set([])),x));
}),cljs.core.ObjMap.fromObject([],{}),xrel);
});
/**
* Returns the map with the vals mapped to the keys.
*/
clojure.set.map_invert = (function map_invert(m){
return cljs.core.reduce.call(null,(function (m,p__21079){
var vec__21080__21081 = p__21079;
var k__21082 = cljs.core.nth.call(null,vec__21080__21081,0,null);
var v__21083 = cljs.core.nth.call(null,vec__21080__21081,1,null);

return cljs.core.assoc.call(null,m,v__21083,k__21082);
}),cljs.core.ObjMap.fromObject([],{}),m);
});
/**
* When passed 2 rels, returns the rel corresponding to the natural
* join. When passed an additional keymap, joins on the corresponding
* keys.
*/
clojure.set.join = (function() {
var join = null;
var join__21100 = (function (xrel,yrel){
if(cljs.core.truth_((function (){var and__3546__auto____21085 = cljs.core.seq.call(null,xrel);

if(cljs.core.truth_(and__3546__auto____21085))
{return cljs.core.seq.call(null,yrel);
} else
{return and__3546__auto____21085;
}
})()))
{var ks__21087 = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__21086__21088 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel]):cljs.core.Vector.fromArray([yrel,xrel]));
var r__21089 = cljs.core.nth.call(null,vec__21086__21088,0,null);
var s__21090 = cljs.core.nth.call(null,vec__21086__21088,1,null);
var idx__21091 = clojure.set.index.call(null,r__21089,ks__21087);

return cljs.core.reduce.call(null,(function (ret,x){
var found__21092 = idx__21091.call(null,cljs.core.select_keys.call(null,x,ks__21087));

if(cljs.core.truth_(found__21092))
{return cljs.core.reduce.call(null,(function (p1__21075_SHARP_,p2__21076_SHARP_){
return cljs.core.conj.call(null,p1__21075_SHARP_,cljs.core.merge.call(null,p2__21076_SHARP_,x));
}),ret,found__21092);
} else
{return ret;
}
}),cljs.core.set([]),s__21090);
} else
{return cljs.core.set([]);
}
});
var join__21101 = (function (xrel,yrel,km){
var vec__21093__21094 = (cljs.core.truth_((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?cljs.core.Vector.fromArray([xrel,yrel,clojure.set.map_invert.call(null,km)]):cljs.core.Vector.fromArray([yrel,xrel,km]));
var r__21095 = cljs.core.nth.call(null,vec__21093__21094,0,null);
var s__21096 = cljs.core.nth.call(null,vec__21093__21094,1,null);
var k__21097 = cljs.core.nth.call(null,vec__21093__21094,2,null);
var idx__21098 = clojure.set.index.call(null,r__21095,cljs.core.vals.call(null,k__21097));

return cljs.core.reduce.call(null,(function (ret,x){
var found__21099 = idx__21098.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k__21097)),k__21097));

if(cljs.core.truth_(found__21099))
{return cljs.core.reduce.call(null,(function (p1__21077_SHARP_,p2__21078_SHARP_){
return cljs.core.conj.call(null,p1__21077_SHARP_,cljs.core.merge.call(null,p2__21078_SHARP_,x));
}),ret,found__21099);
} else
{return ret;
}
}),cljs.core.set([]),s__21096);
});
join = function(xrel,yrel,km){
switch(arguments.length){
case  2 :
return join__21100.call(this,xrel,yrel);
case  3 :
return join__21101.call(this,xrel,yrel,km);
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
var and__3546__auto____21104 = (cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____21104))
{return cljs.core.every_QMARK_.call(null,(function (p1__21084_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__21084_SHARP_);
}),set1);
} else
{return and__3546__auto____21104;
}
});
/**
* Is set1 a superset of set2?
*/
clojure.set.superset_QMARK_ = (function superset_QMARK_(set1,set2){
var and__3546__auto____21105 = (cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2));

if(cljs.core.truth_(and__3546__auto____21105))
{return cljs.core.every_QMARK_.call(null,(function (p1__21103_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__21103_SHARP_);
}),set2);
} else
{return and__3546__auto____21105;
}
});
