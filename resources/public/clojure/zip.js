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
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3546__auto____4661 = children;

if(cljs.core.truth_(and__3546__auto____4661))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3546__auto____4661;
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
{var vec__4662__4664 = loc;
var node__4665 = cljs.core.nth.call(null,vec__4662__4664,0,null);
var path__4666 = cljs.core.nth.call(null,vec__4662__4664,1,null);
var vec__4663__4667 = clojure.zip.children.call(null,loc);
var c__4668 = cljs.core.nth.call(null,vec__4663__4667,0,null);
var cnext__4669 = cljs.core.nthnext.call(null,vec__4663__4667,1);
var cs__4670 = vec__4663__4667;

if(cljs.core.truth_(cs__4670))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__4668,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__4666)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__4666),node__4665):cljs.core.Vector.fromArray([node__4665])),"﷐'ppath":path__4666,"﷐'r":cnext__4669})]),cljs.core.meta.call(null,loc));
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
var vec__4671__4672 = loc;
var node__4673 = cljs.core.nth.call(null,vec__4671__4672,0,null);
var path__4674 = cljs.core.nth.call(null,vec__4671__4672,1,null);
var path__4675 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4674))?cljs.core.apply.call(null,cljs.core.hash_map,path__4674):path__4674);
var l__4676 = cljs.core.get.call(null,path__4675,"﷐'l");
var ppath__4677 = cljs.core.get.call(null,path__4675,"﷐'ppath");
var pnodes__4678 = cljs.core.get.call(null,path__4675,"﷐'pnodes");
var r__4679 = cljs.core.get.call(null,path__4675,"﷐'r");
var changed_QMARK___4680 = cljs.core.get.call(null,path__4675,"﷐'changed?");

if(cljs.core.truth_(pnodes__4678))
{var pnode__4681 = cljs.core.peek.call(null,pnodes__4678);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___4680)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__4681,cljs.core.concat.call(null,l__4676,cljs.core.cons.call(null,node__4673,r__4679))),(function (){var and__3546__auto____4682 = ppath__4677;

if(cljs.core.truth_(and__3546__auto____4682))
{return cljs.core.assoc.call(null,ppath__4677,"﷐'changed?",true);
} else
{return and__3546__auto____4682;
}
})()]):cljs.core.Vector.fromArray([pnode__4681,ppath__4677])),cljs.core.meta.call(null,loc));
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
{var p__4683 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__4683))
{{
var G__4684 = p__4683;
loc = G__4684;
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
var vec__4685__4687 = loc;
var node__4688 = cljs.core.nth.call(null,vec__4685__4687,0,null);
var path__4689 = cljs.core.nth.call(null,vec__4685__4687,1,null);
var path__4690 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4689))?cljs.core.apply.call(null,cljs.core.hash_map,path__4689):path__4689);
var l__4691 = cljs.core.get.call(null,path__4690,"﷐'l");
var vec__4686__4692 = cljs.core.get.call(null,path__4690,"﷐'r");
var r__4693 = cljs.core.nth.call(null,vec__4686__4692,0,null);
var rnext__4694 = cljs.core.nthnext.call(null,vec__4686__4692,1);
var rs__4695 = vec__4686__4692;

if(cljs.core.truth_((function (){var and__3546__auto____4696 = path__4690;

if(cljs.core.truth_(and__3546__auto____4696))
{return rs__4695;
} else
{return and__3546__auto____4696;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__4693,cljs.core.assoc.call(null,path__4690,"﷐'l",cljs.core.conj.call(null,l__4691,node__4688),"﷐'r",rnext__4694)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__4697__4698 = loc;
var node__4699 = cljs.core.nth.call(null,vec__4697__4698,0,null);
var path__4700 = cljs.core.nth.call(null,vec__4697__4698,1,null);
var path__4701 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4700))?cljs.core.apply.call(null,cljs.core.hash_map,path__4700):path__4700);
var l__4702 = cljs.core.get.call(null,path__4701,"﷐'l");
var r__4703 = cljs.core.get.call(null,path__4701,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4704 = path__4701;

if(cljs.core.truth_(and__3546__auto____4704))
{return r__4703;
} else
{return and__3546__auto____4704;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__4703),cljs.core.assoc.call(null,path__4701,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__4702,node__4699,cljs.core.butlast.call(null,r__4703)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__4705__4706 = loc;
var node__4707 = cljs.core.nth.call(null,vec__4705__4706,0,null);
var path__4708 = cljs.core.nth.call(null,vec__4705__4706,1,null);
var path__4709 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4708))?cljs.core.apply.call(null,cljs.core.hash_map,path__4708):path__4708);
var l__4710 = cljs.core.get.call(null,path__4709,"﷐'l");
var r__4711 = cljs.core.get.call(null,path__4709,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4712 = path__4709;

if(cljs.core.truth_(and__3546__auto____4712))
{return cljs.core.seq.call(null,l__4710);
} else
{return and__3546__auto____4712;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4710),cljs.core.assoc.call(null,path__4709,"﷐'l",cljs.core.pop.call(null,l__4710),"﷐'r",cljs.core.cons.call(null,node__4707,r__4711))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__4713__4714 = loc;
var node__4715 = cljs.core.nth.call(null,vec__4713__4714,0,null);
var path__4716 = cljs.core.nth.call(null,vec__4713__4714,1,null);
var path__4717 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4716))?cljs.core.apply.call(null,cljs.core.hash_map,path__4716):path__4716);
var l__4718 = cljs.core.get.call(null,path__4717,"﷐'l");
var r__4719 = cljs.core.get.call(null,path__4717,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4720 = path__4717;

if(cljs.core.truth_(and__3546__auto____4720))
{return cljs.core.seq.call(null,l__4718);
} else
{return and__3546__auto____4720;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__4718),cljs.core.assoc.call(null,path__4717,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__4718),cljs.core.Vector.fromArray([node__4715]),r__4719))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__4721__4722 = loc;
var node__4723 = cljs.core.nth.call(null,vec__4721__4722,0,null);
var path__4724 = cljs.core.nth.call(null,vec__4721__4722,1,null);
var path__4725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4724))?cljs.core.apply.call(null,cljs.core.hash_map,path__4724):path__4724);
var l__4726 = cljs.core.get.call(null,path__4725,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4725)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4723,cljs.core.assoc.call(null,path__4725,"﷐'l",cljs.core.conj.call(null,l__4726,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__4727__4728 = loc;
var node__4729 = cljs.core.nth.call(null,vec__4727__4728,0,null);
var path__4730 = cljs.core.nth.call(null,vec__4727__4728,1,null);
var path__4731 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4730))?cljs.core.apply.call(null,cljs.core.hash_map,path__4730):path__4730);
var r__4732 = cljs.core.get.call(null,path__4731,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4731)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4729,cljs.core.assoc.call(null,path__4731,"﷐'r",cljs.core.cons.call(null,item,r__4732),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__4733__4734 = loc;
var ___4735 = cljs.core.nth.call(null,vec__4733__4734,0,null);
var path__4736 = cljs.core.nth.call(null,vec__4733__4734,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__4736,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__4737){
var loc = cljs.core.first(arglist__4737);
var f = cljs.core.first(cljs.core.next(arglist__4737));
var args = cljs.core.rest(cljs.core.next(arglist__4737));
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
{var or__3548__auto____4739 = (function (){var and__3546__auto____4738 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3546__auto____4738))
{return clojure.zip.down.call(null,loc);
} else
{return and__3546__auto____4738;
}
})();

if(cljs.core.truth_(or__3548__auto____4739))
{return or__3548__auto____4739;
} else
{var or__3548__auto____4740 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3548__auto____4740))
{return or__3548__auto____4740;
} else
{var p__4741 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__4741)))
{var or__3548__auto____4742 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__4741));

if(cljs.core.truth_(or__3548__auto____4742))
{return or__3548__auto____4742;
} else
{{
var G__4743 = clojure.zip.up.call(null,p__4741);
p__4741 = G__4743;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__4741),"﷐'end"]);
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
var temp__3695__auto____4744 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3695__auto____4744))
{var lloc__4745 = temp__3695__auto____4744;

var loc__4746 = lloc__4745;

while(true){
var temp__3695__auto____4748 = (function (){var and__3546__auto____4747 = clojure.zip.branch_QMARK_.call(null,loc__4746);

if(cljs.core.truth_(and__3546__auto____4747))
{return clojure.zip.down.call(null,loc__4746);
} else
{return and__3546__auto____4747;
}
})();

if(cljs.core.truth_(temp__3695__auto____4748))
{var child__4749 = temp__3695__auto____4748;

{
var G__4750 = clojure.zip.rightmost.call(null,child__4749);
loc__4746 = G__4750;
continue;
}
} else
{return loc__4746;
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
var vec__4751__4752 = loc;
var node__4753 = cljs.core.nth.call(null,vec__4751__4752,0,null);
var path__4754 = cljs.core.nth.call(null,vec__4751__4752,1,null);
var path__4755 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4754))?cljs.core.apply.call(null,cljs.core.hash_map,path__4754):path__4754);
var l__4756 = cljs.core.get.call(null,path__4755,"﷐'l");
var ppath__4757 = cljs.core.get.call(null,path__4755,"﷐'ppath");
var pnodes__4758 = cljs.core.get.call(null,path__4755,"﷐'pnodes");
var rs__4759 = cljs.core.get.call(null,path__4755,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4755)))
{throw "Remove at top";
} else
{if(cljs.core.truth_((cljs.core.count.call(null,l__4756) > 0)))
{var loc__4760 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4756),cljs.core.assoc.call(null,path__4755,"﷐'l",cljs.core.pop.call(null,l__4756),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3695__auto____4762 = (function (){var and__3546__auto____4761 = clojure.zip.branch_QMARK_.call(null,loc__4760);

if(cljs.core.truth_(and__3546__auto____4761))
{return clojure.zip.down.call(null,loc__4760);
} else
{return and__3546__auto____4761;
}
})();

if(cljs.core.truth_(temp__3695__auto____4762))
{var child__4763 = temp__3695__auto____4762;

{
var G__4765 = clojure.zip.rightmost.call(null,child__4763);
loc__4760 = G__4765;
continue;
}
} else
{return loc__4760;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__4758),rs__4759),(function (){var and__3546__auto____4764 = ppath__4757;

if(cljs.core.truth_(and__3546__auto____4764))
{return cljs.core.assoc.call(null,ppath__4757,"﷐'changed?",true);
} else
{return and__3546__auto____4764;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
