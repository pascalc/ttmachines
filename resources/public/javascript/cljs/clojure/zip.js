goog.provide('clojure.zip');
goog.require('cljs.core');
/**
* Creates a new zipper structure.
* 
* branch? is a fn that, given a node, returns true if can have
* children, even if it currently doesn't.
* 
* children is a fn that, given a branch node, returns a seq of its
* children.
* 
* make-node is a fn that, given an existing node and a seq of
* children, returns a new branch node with the supplied children.
* root is the root node.
*/
clojure.zip.zipper = (function zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(cljs.core.Vector.fromArray([root,null]),cljs.core.ObjMap.fromObject(["﷐'zip/make-node","﷐'zip/children","﷐'zip/branch?"],{"﷐'zip/make-node":make_node,"﷐'zip/children":children,"﷐'zip/branch?":branch_QMARK_}));
});
/**
* Returns a zipper for nested sequences, given a root sequence
*/
clojure.zip.seq_zip = (function seq_zip(root){
return clojure.zip.zipper.call(null,cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta.call(null,children,cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for nested vectors, given a root vector
*/
clojure.zip.vector_zip = (function vector_zip(root){
return clojure.zip.zipper.call(null,cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta.call(null,cljs.core.vec.call(null,children),cljs.core.meta.call(null,node));
}),root);
});
/**
* Returns a zipper for xml elements (as from xml/parse),
* given a root element
*/
clojure.zip.xml_zip = (function xml_zip(root){
return clojure.zip.zipper.call(null,cljs.core.complement.call(null,cljs.core.string_QMARK_),cljs.core.comp.call(null,cljs.core.seq,"﷐'content"),(function (node,children){
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3546__auto____20794 = children;

if(cljs.core.truth_(and__3546__auto____20794))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3546__auto____20794;
}
})());
}),root);
});
/**
* Returns the node at loc
*/
clojure.zip.node = (function node(loc){
return loc.call(null,0);
});
/**
* Returns true if the node at loc is a branch
*/
clojure.zip.branch_QMARK_ = (function branch_QMARK_(loc){
return "﷐'zip/branch?".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
});
/**
* Returns a seq of the children of node at loc, which must be a branch
*/
clojure.zip.children = (function children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{return "﷐'zip/children".call(null,cljs.core.meta.call(null,loc)).call(null,clojure.zip.node.call(null,loc));
} else
{throw "called children on a leaf node";
}
});
/**
* Returns a new branch node, given an existing node and new
* children. The loc is only used to supply the constructor.
*/
clojure.zip.make_node = (function make_node(loc,node,children){
return "﷐'zip/make-node".call(null,cljs.core.meta.call(null,loc)).call(null,node,children);
});
/**
* Returns a seq of nodes leading to this loc
*/
clojure.zip.path = (function path(loc){
return "﷐'pnodes".call(null,loc.call(null,1));
});
/**
* Returns a seq of the left siblings of this loc
*/
clojure.zip.lefts = (function lefts(loc){
return cljs.core.seq.call(null,"﷐'l".call(null,loc.call(null,1)));
});
/**
* Returns a seq of the right siblings of this loc
*/
clojure.zip.rights = (function rights(loc){
return "﷐'r".call(null,loc.call(null,1));
});
/**
* Returns the loc of the leftmost child of the node at this loc, or
* nil if no children
*/
clojure.zip.down = (function down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc)))
{var vec__20795__20797 = loc;
var node__20798 = cljs.core.nth.call(null,vec__20795__20797,0,null);
var path__20799 = cljs.core.nth.call(null,vec__20795__20797,1,null);
var vec__20796__20800 = clojure.zip.children.call(null,loc);
var c__20801 = cljs.core.nth.call(null,vec__20796__20800,0,null);
var cnext__20802 = cljs.core.nthnext.call(null,vec__20796__20800,1);
var cs__20803 = vec__20796__20800;

if(cljs.core.truth_(cs__20803))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__20801,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__20799)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__20799),node__20798):cljs.core.Vector.fromArray([node__20798])),"﷐'ppath":path__20799,"﷐'r":cnext__20802})]),cljs.core.meta.call(null,loc));
} else
{return null;
}
} else
{return null;
}
});
/**
* Returns the loc of the parent of the node at this loc, or nil if at
* the top
*/
clojure.zip.up = (function up(loc){
var vec__20804__20805 = loc;
var node__20806 = cljs.core.nth.call(null,vec__20804__20805,0,null);
var path__20807 = cljs.core.nth.call(null,vec__20804__20805,1,null);
var path__20808 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20807))?cljs.core.apply.call(null,cljs.core.hash_map,path__20807):path__20807);
var l__20809 = cljs.core.get.call(null,path__20808,"﷐'l");
var ppath__20810 = cljs.core.get.call(null,path__20808,"﷐'ppath");
var pnodes__20811 = cljs.core.get.call(null,path__20808,"﷐'pnodes");
var r__20812 = cljs.core.get.call(null,path__20808,"﷐'r");
var changed_QMARK___20813 = cljs.core.get.call(null,path__20808,"﷐'changed?");

if(cljs.core.truth_(pnodes__20811))
{var pnode__20814 = cljs.core.peek.call(null,pnodes__20811);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___20813)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__20814,cljs.core.concat.call(null,l__20809,cljs.core.cons.call(null,node__20806,r__20812))),(function (){var and__3546__auto____20815 = ppath__20810;

if(cljs.core.truth_(and__3546__auto____20815))
{return cljs.core.assoc.call(null,ppath__20810,"﷐'changed?",true);
} else
{return and__3546__auto____20815;
}
})()]):cljs.core.Vector.fromArray([pnode__20814,ppath__20810])),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* zips all the way up and returns the root node, reflecting any
* changes.
*/
clojure.zip.root = (function root(loc){
while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return clojure.zip.node.call(null,loc);
} else
{var p__20816 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__20816))
{{
var G__20817 = p__20816;
loc = G__20817;
continue;
}
} else
{return clojure.zip.node.call(null,loc);
}
}
break;
}
});
/**
* Returns the loc of the right sibling of the node at this loc, or nil
*/
clojure.zip.right = (function right(loc){
var vec__20818__20820 = loc;
var node__20821 = cljs.core.nth.call(null,vec__20818__20820,0,null);
var path__20822 = cljs.core.nth.call(null,vec__20818__20820,1,null);
var path__20823 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20822))?cljs.core.apply.call(null,cljs.core.hash_map,path__20822):path__20822);
var l__20824 = cljs.core.get.call(null,path__20823,"﷐'l");
var vec__20819__20825 = cljs.core.get.call(null,path__20823,"﷐'r");
var r__20826 = cljs.core.nth.call(null,vec__20819__20825,0,null);
var rnext__20827 = cljs.core.nthnext.call(null,vec__20819__20825,1);
var rs__20828 = vec__20819__20825;

if(cljs.core.truth_((function (){var and__3546__auto____20829 = path__20823;

if(cljs.core.truth_(and__3546__auto____20829))
{return rs__20828;
} else
{return and__3546__auto____20829;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__20826,cljs.core.assoc.call(null,path__20823,"﷐'l",cljs.core.conj.call(null,l__20824,node__20821),"﷐'r",rnext__20827)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__20830__20831 = loc;
var node__20832 = cljs.core.nth.call(null,vec__20830__20831,0,null);
var path__20833 = cljs.core.nth.call(null,vec__20830__20831,1,null);
var path__20834 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20833))?cljs.core.apply.call(null,cljs.core.hash_map,path__20833):path__20833);
var l__20835 = cljs.core.get.call(null,path__20834,"﷐'l");
var r__20836 = cljs.core.get.call(null,path__20834,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____20837 = path__20834;

if(cljs.core.truth_(and__3546__auto____20837))
{return r__20836;
} else
{return and__3546__auto____20837;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__20836),cljs.core.assoc.call(null,path__20834,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__20835,node__20832,cljs.core.butlast.call(null,r__20836)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__20838__20839 = loc;
var node__20840 = cljs.core.nth.call(null,vec__20838__20839,0,null);
var path__20841 = cljs.core.nth.call(null,vec__20838__20839,1,null);
var path__20842 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20841))?cljs.core.apply.call(null,cljs.core.hash_map,path__20841):path__20841);
var l__20843 = cljs.core.get.call(null,path__20842,"﷐'l");
var r__20844 = cljs.core.get.call(null,path__20842,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____20845 = path__20842;

if(cljs.core.truth_(and__3546__auto____20845))
{return cljs.core.seq.call(null,l__20843);
} else
{return and__3546__auto____20845;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__20843),cljs.core.assoc.call(null,path__20842,"﷐'l",cljs.core.pop.call(null,l__20843),"﷐'r",cljs.core.cons.call(null,node__20840,r__20844))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__20846__20847 = loc;
var node__20848 = cljs.core.nth.call(null,vec__20846__20847,0,null);
var path__20849 = cljs.core.nth.call(null,vec__20846__20847,1,null);
var path__20850 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20849))?cljs.core.apply.call(null,cljs.core.hash_map,path__20849):path__20849);
var l__20851 = cljs.core.get.call(null,path__20850,"﷐'l");
var r__20852 = cljs.core.get.call(null,path__20850,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____20853 = path__20850;

if(cljs.core.truth_(and__3546__auto____20853))
{return cljs.core.seq.call(null,l__20851);
} else
{return and__3546__auto____20853;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__20851),cljs.core.assoc.call(null,path__20850,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__20851),cljs.core.Vector.fromArray([node__20848]),r__20852))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__20854__20855 = loc;
var node__20856 = cljs.core.nth.call(null,vec__20854__20855,0,null);
var path__20857 = cljs.core.nth.call(null,vec__20854__20855,1,null);
var path__20858 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20857))?cljs.core.apply.call(null,cljs.core.hash_map,path__20857):path__20857);
var l__20859 = cljs.core.get.call(null,path__20858,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__20858)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__20856,cljs.core.assoc.call(null,path__20858,"﷐'l",cljs.core.conj.call(null,l__20859,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__20860__20861 = loc;
var node__20862 = cljs.core.nth.call(null,vec__20860__20861,0,null);
var path__20863 = cljs.core.nth.call(null,vec__20860__20861,1,null);
var path__20864 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20863))?cljs.core.apply.call(null,cljs.core.hash_map,path__20863):path__20863);
var r__20865 = cljs.core.get.call(null,path__20864,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__20864)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__20862,cljs.core.assoc.call(null,path__20864,"﷐'r",cljs.core.cons.call(null,item,r__20865),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__20866__20867 = loc;
var ___20868 = cljs.core.nth.call(null,vec__20866__20867,0,null);
var path__20869 = cljs.core.nth.call(null,vec__20866__20867,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__20869,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
});
/**
* Replaces the node at this loc with the value of (f node args)
* @param {...*} var_args
*/
clojure.zip.edit = (function() { 
var edit__delegate = function (loc,f,args){
return clojure.zip.replace.call(null,loc,cljs.core.apply.call(null,f,clojure.zip.node.call(null,loc),args));
};
var edit = function (loc,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return edit__delegate.call(this, loc, f, args);
};
edit.cljs$lang$maxFixedArity = 2;
edit.cljs$lang$applyTo = (function (arglist__20870){
var loc = cljs.core.first(arglist__20870);
var f = cljs.core.first(cljs.core.next(arglist__20870));
var args = cljs.core.rest(cljs.core.next(arglist__20870));
return edit__delegate.call(this, loc, f, args);
});
return edit;
})()
;
/**
* Inserts the item as the leftmost child of the node at this loc,
* without moving
*/
clojure.zip.insert_child = (function insert_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.cons.call(null,item,clojure.zip.children.call(null,loc))));
});
/**
* Inserts the item as the rightmost child of the node at this loc,
* without moving
*/
clojure.zip.append_child = (function append_child(loc,item){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),cljs.core.concat.call(null,clojure.zip.children.call(null,loc),cljs.core.Vector.fromArray([item]))));
});
/**
* Moves to the next loc in the hierarchy, depth-first. When reaching
* the end, returns a distinguished loc detectable via end?. If already
* at the end, stays there.
*/
clojure.zip.next = (function next(loc){
if(cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1))))
{return loc;
} else
{var or__3548__auto____20872 = (function (){var and__3546__auto____20871 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3546__auto____20871))
{return clojure.zip.down.call(null,loc);
} else
{return and__3546__auto____20871;
}
})();

if(cljs.core.truth_(or__3548__auto____20872))
{return or__3548__auto____20872;
} else
{var or__3548__auto____20873 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3548__auto____20873))
{return or__3548__auto____20873;
} else
{var p__20874 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__20874)))
{var or__3548__auto____20875 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__20874));

if(cljs.core.truth_(or__3548__auto____20875))
{return or__3548__auto____20875;
} else
{{
var G__20876 = clojure.zip.up.call(null,p__20874);
p__20874 = G__20876;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__20874),"﷐'end"]);
}
break;
}
}
}
}
});
/**
* Moves to the previous loc in the hierarchy, depth-first. If already
* at the root, returns nil.
*/
clojure.zip.prev = (function prev(loc){
var temp__3695__auto____20877 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3695__auto____20877))
{var lloc__20878 = temp__3695__auto____20877;

var loc__20879 = lloc__20878;

while(true){
var temp__3695__auto____20881 = (function (){var and__3546__auto____20880 = clojure.zip.branch_QMARK_.call(null,loc__20879);

if(cljs.core.truth_(and__3546__auto____20880))
{return clojure.zip.down.call(null,loc__20879);
} else
{return and__3546__auto____20880;
}
})();

if(cljs.core.truth_(temp__3695__auto____20881))
{var child__20882 = temp__3695__auto____20881;

{
var G__20883 = clojure.zip.rightmost.call(null,child__20882);
loc__20879 = G__20883;
continue;
}
} else
{return loc__20879;
}
break;
}
} else
{return clojure.zip.up.call(null,loc);
}
});
/**
* Returns true if loc represents the end of a depth-first walk
*/
clojure.zip.end_QMARK_ = (function end_QMARK_(loc){
return cljs.core._EQ_.call(null,"﷐'end",loc.call(null,1));
});
/**
* Removes the node at loc, returning the loc that would have preceded
* it in a depth-first walk.
*/
clojure.zip.remove = (function remove(loc){
var vec__20884__20885 = loc;
var node__20886 = cljs.core.nth.call(null,vec__20884__20885,0,null);
var path__20887 = cljs.core.nth.call(null,vec__20884__20885,1,null);
var path__20888 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__20887))?cljs.core.apply.call(null,cljs.core.hash_map,path__20887):path__20887);
var l__20889 = cljs.core.get.call(null,path__20888,"﷐'l");
var ppath__20890 = cljs.core.get.call(null,path__20888,"﷐'ppath");
var pnodes__20891 = cljs.core.get.call(null,path__20888,"﷐'pnodes");
var rs__20892 = cljs.core.get.call(null,path__20888,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__20888)))
{throw "Remove at top";
} else
{if(cljs.core.truth_((cljs.core.count.call(null,l__20889) > 0)))
{var loc__20893 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__20889),cljs.core.assoc.call(null,path__20888,"﷐'l",cljs.core.pop.call(null,l__20889),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3695__auto____20895 = (function (){var and__3546__auto____20894 = clojure.zip.branch_QMARK_.call(null,loc__20893);

if(cljs.core.truth_(and__3546__auto____20894))
{return clojure.zip.down.call(null,loc__20893);
} else
{return and__3546__auto____20894;
}
})();

if(cljs.core.truth_(temp__3695__auto____20895))
{var child__20896 = temp__3695__auto____20895;

{
var G__20898 = clojure.zip.rightmost.call(null,child__20896);
loc__20893 = G__20898;
continue;
}
} else
{return loc__20893;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__20891),rs__20892),(function (){var and__3546__auto____20897 = ppath__20890;

if(cljs.core.truth_(and__3546__auto____20897))
{return cljs.core.assoc.call(null,ppath__20890,"﷐'changed?",true);
} else
{return and__3546__auto____20897;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
