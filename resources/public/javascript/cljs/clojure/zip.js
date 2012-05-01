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
return cljs.core.assoc.call(null,node,"﷐'content",(function (){var and__3546__auto____4685 = children;

if(cljs.core.truth_(and__3546__auto____4685))
{return cljs.core.apply.call(null,cljs.core.vector,children);
} else
{return and__3546__auto____4685;
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
{var vec__4686__4688 = loc;
var node__4689 = cljs.core.nth.call(null,vec__4686__4688,0,null);
var path__4690 = cljs.core.nth.call(null,vec__4686__4688,1,null);
var vec__4687__4691 = clojure.zip.children.call(null,loc);
var c__4692 = cljs.core.nth.call(null,vec__4687__4691,0,null);
var cnext__4693 = cljs.core.nthnext.call(null,vec__4687__4691,1);
var cs__4694 = vec__4687__4691;

if(cljs.core.truth_(cs__4694))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([c__4692,cljs.core.ObjMap.fromObject(["﷐'l","﷐'pnodes","﷐'ppath","﷐'r"],{"﷐'l":cljs.core.Vector.fromArray([]),"﷐'pnodes":(cljs.core.truth_(path__4690)?cljs.core.conj.call(null,"﷐'pnodes".call(null,path__4690),node__4689):cljs.core.Vector.fromArray([node__4689])),"﷐'ppath":path__4690,"﷐'r":cnext__4693})]),cljs.core.meta.call(null,loc));
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
var vec__4695__4696 = loc;
var node__4697 = cljs.core.nth.call(null,vec__4695__4696,0,null);
var path__4698 = cljs.core.nth.call(null,vec__4695__4696,1,null);
var path__4699 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4698))?cljs.core.apply.call(null,cljs.core.hash_map,path__4698):path__4698);
var l__4700 = cljs.core.get.call(null,path__4699,"﷐'l");
var ppath__4701 = cljs.core.get.call(null,path__4699,"﷐'ppath");
var pnodes__4702 = cljs.core.get.call(null,path__4699,"﷐'pnodes");
var r__4703 = cljs.core.get.call(null,path__4699,"﷐'r");
var changed_QMARK___4704 = cljs.core.get.call(null,path__4699,"﷐'changed?");

if(cljs.core.truth_(pnodes__4702))
{var pnode__4705 = cljs.core.peek.call(null,pnodes__4702);

return cljs.core.with_meta.call(null,(cljs.core.truth_(changed_QMARK___4704)?cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,pnode__4705,cljs.core.concat.call(null,l__4700,cljs.core.cons.call(null,node__4697,r__4703))),(function (){var and__3546__auto____4706 = ppath__4701;

if(cljs.core.truth_(and__3546__auto____4706))
{return cljs.core.assoc.call(null,ppath__4701,"﷐'changed?",true);
} else
{return and__3546__auto____4706;
}
})()]):cljs.core.Vector.fromArray([pnode__4705,ppath__4701])),cljs.core.meta.call(null,loc));
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
{var p__4707 = clojure.zip.up.call(null,loc);

if(cljs.core.truth_(p__4707))
{{
var G__4708 = p__4707;
loc = G__4708;
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
var vec__4709__4711 = loc;
var node__4712 = cljs.core.nth.call(null,vec__4709__4711,0,null);
var path__4713 = cljs.core.nth.call(null,vec__4709__4711,1,null);
var path__4714 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4713))?cljs.core.apply.call(null,cljs.core.hash_map,path__4713):path__4713);
var l__4715 = cljs.core.get.call(null,path__4714,"﷐'l");
var vec__4710__4716 = cljs.core.get.call(null,path__4714,"﷐'r");
var r__4717 = cljs.core.nth.call(null,vec__4710__4716,0,null);
var rnext__4718 = cljs.core.nthnext.call(null,vec__4710__4716,1);
var rs__4719 = vec__4710__4716;

if(cljs.core.truth_((function (){var and__3546__auto____4720 = path__4714;

if(cljs.core.truth_(and__3546__auto____4720))
{return rs__4719;
} else
{return and__3546__auto____4720;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([r__4717,cljs.core.assoc.call(null,path__4714,"﷐'l",cljs.core.conj.call(null,l__4715,node__4712),"﷐'r",rnext__4718)]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the rightmost sibling of the node at this loc, or self
*/
clojure.zip.rightmost = (function rightmost(loc){
var vec__4721__4722 = loc;
var node__4723 = cljs.core.nth.call(null,vec__4721__4722,0,null);
var path__4724 = cljs.core.nth.call(null,vec__4721__4722,1,null);
var path__4725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4724))?cljs.core.apply.call(null,cljs.core.hash_map,path__4724):path__4724);
var l__4726 = cljs.core.get.call(null,path__4725,"﷐'l");
var r__4727 = cljs.core.get.call(null,path__4725,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4728 = path__4725;

if(cljs.core.truth_(and__3546__auto____4728))
{return r__4727;
} else
{return and__3546__auto____4728;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.last.call(null,r__4727),cljs.core.assoc.call(null,path__4725,"﷐'l",cljs.core.apply.call(null,cljs.core.conj,l__4726,node__4723,cljs.core.butlast.call(null,r__4727)),"﷐'r",null)]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Returns the loc of the left sibling of the node at this loc, or nil
*/
clojure.zip.left = (function left(loc){
var vec__4729__4730 = loc;
var node__4731 = cljs.core.nth.call(null,vec__4729__4730,0,null);
var path__4732 = cljs.core.nth.call(null,vec__4729__4730,1,null);
var path__4733 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4732))?cljs.core.apply.call(null,cljs.core.hash_map,path__4732):path__4732);
var l__4734 = cljs.core.get.call(null,path__4733,"﷐'l");
var r__4735 = cljs.core.get.call(null,path__4733,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4736 = path__4733;

if(cljs.core.truth_(and__3546__auto____4736))
{return cljs.core.seq.call(null,l__4734);
} else
{return and__3546__auto____4736;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4734),cljs.core.assoc.call(null,path__4733,"﷐'l",cljs.core.pop.call(null,l__4734),"﷐'r",cljs.core.cons.call(null,node__4731,r__4735))]),cljs.core.meta.call(null,loc));
} else
{return null;
}
});
/**
* Returns the loc of the leftmost sibling of the node at this loc, or self
*/
clojure.zip.leftmost = (function leftmost(loc){
var vec__4737__4738 = loc;
var node__4739 = cljs.core.nth.call(null,vec__4737__4738,0,null);
var path__4740 = cljs.core.nth.call(null,vec__4737__4738,1,null);
var path__4741 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4740))?cljs.core.apply.call(null,cljs.core.hash_map,path__4740):path__4740);
var l__4742 = cljs.core.get.call(null,path__4741,"﷐'l");
var r__4743 = cljs.core.get.call(null,path__4741,"﷐'r");

if(cljs.core.truth_((function (){var and__3546__auto____4744 = path__4741;

if(cljs.core.truth_(and__3546__auto____4744))
{return cljs.core.seq.call(null,l__4742);
} else
{return and__3546__auto____4744;
}
})()))
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.first.call(null,l__4742),cljs.core.assoc.call(null,path__4741,"﷐'l",cljs.core.Vector.fromArray([]),"﷐'r",cljs.core.concat.call(null,cljs.core.rest.call(null,l__4742),cljs.core.Vector.fromArray([node__4739]),r__4743))]),cljs.core.meta.call(null,loc));
} else
{return loc;
}
});
/**
* Inserts the item as the left sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_left = (function insert_left(loc,item){
var vec__4745__4746 = loc;
var node__4747 = cljs.core.nth.call(null,vec__4745__4746,0,null);
var path__4748 = cljs.core.nth.call(null,vec__4745__4746,1,null);
var path__4749 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4748))?cljs.core.apply.call(null,cljs.core.hash_map,path__4748):path__4748);
var l__4750 = cljs.core.get.call(null,path__4749,"﷐'l");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4749)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4747,cljs.core.assoc.call(null,path__4749,"﷐'l",cljs.core.conj.call(null,l__4750,item),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Inserts the item as the right sibling of the node at this loc,
* without moving
*/
clojure.zip.insert_right = (function insert_right(loc,item){
var vec__4751__4752 = loc;
var node__4753 = cljs.core.nth.call(null,vec__4751__4752,0,null);
var path__4754 = cljs.core.nth.call(null,vec__4751__4752,1,null);
var path__4755 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4754))?cljs.core.apply.call(null,cljs.core.hash_map,path__4754):path__4754);
var r__4756 = cljs.core.get.call(null,path__4755,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4755)))
{throw "Insert at top";
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node__4753,cljs.core.assoc.call(null,path__4755,"﷐'r",cljs.core.cons.call(null,item,r__4756),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
}
});
/**
* Replaces the node at this loc, without moving
*/
clojure.zip.replace = (function replace(loc,node){
var vec__4757__4758 = loc;
var ___4759 = cljs.core.nth.call(null,vec__4757__4758,0,null);
var path__4760 = cljs.core.nth.call(null,vec__4757__4758,1,null);

return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([node,cljs.core.assoc.call(null,path__4760,"﷐'changed?",true)]),cljs.core.meta.call(null,loc));
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
edit.cljs$lang$applyTo = (function (arglist__4761){
var loc = cljs.core.first(arglist__4761);
var f = cljs.core.first(cljs.core.next(arglist__4761));
var args = cljs.core.rest(cljs.core.next(arglist__4761));
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
{var or__3548__auto____4763 = (function (){var and__3546__auto____4762 = clojure.zip.branch_QMARK_.call(null,loc);

if(cljs.core.truth_(and__3546__auto____4762))
{return clojure.zip.down.call(null,loc);
} else
{return and__3546__auto____4762;
}
})();

if(cljs.core.truth_(or__3548__auto____4763))
{return or__3548__auto____4763;
} else
{var or__3548__auto____4764 = clojure.zip.right.call(null,loc);

if(cljs.core.truth_(or__3548__auto____4764))
{return or__3548__auto____4764;
} else
{var p__4765 = loc;

while(true){
if(cljs.core.truth_(clojure.zip.up.call(null,p__4765)))
{var or__3548__auto____4766 = clojure.zip.right.call(null,clojure.zip.up.call(null,p__4765));

if(cljs.core.truth_(or__3548__auto____4766))
{return or__3548__auto____4766;
} else
{{
var G__4767 = clojure.zip.up.call(null,p__4765);
p__4765 = G__4767;
continue;
}
}
} else
{return cljs.core.Vector.fromArray([clojure.zip.node.call(null,p__4765),"﷐'end"]);
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
var temp__3695__auto____4768 = clojure.zip.left.call(null,loc);

if(cljs.core.truth_(temp__3695__auto____4768))
{var lloc__4769 = temp__3695__auto____4768;

var loc__4770 = lloc__4769;

while(true){
var temp__3695__auto____4772 = (function (){var and__3546__auto____4771 = clojure.zip.branch_QMARK_.call(null,loc__4770);

if(cljs.core.truth_(and__3546__auto____4771))
{return clojure.zip.down.call(null,loc__4770);
} else
{return and__3546__auto____4771;
}
})();

if(cljs.core.truth_(temp__3695__auto____4772))
{var child__4773 = temp__3695__auto____4772;

{
var G__4774 = clojure.zip.rightmost.call(null,child__4773);
loc__4770 = G__4774;
continue;
}
} else
{return loc__4770;
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
var vec__4775__4776 = loc;
var node__4777 = cljs.core.nth.call(null,vec__4775__4776,0,null);
var path__4778 = cljs.core.nth.call(null,vec__4775__4776,1,null);
var path__4779 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,path__4778))?cljs.core.apply.call(null,cljs.core.hash_map,path__4778):path__4778);
var l__4780 = cljs.core.get.call(null,path__4779,"﷐'l");
var ppath__4781 = cljs.core.get.call(null,path__4779,"﷐'ppath");
var pnodes__4782 = cljs.core.get.call(null,path__4779,"﷐'pnodes");
var rs__4783 = cljs.core.get.call(null,path__4779,"﷐'r");

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,path__4779)))
{throw "Remove at top";
} else
{if(cljs.core.truth_((cljs.core.count.call(null,l__4780) > 0)))
{var loc__4784 = cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([cljs.core.peek.call(null,l__4780),cljs.core.assoc.call(null,path__4779,"﷐'l",cljs.core.pop.call(null,l__4780),"﷐'changed?",true)]),cljs.core.meta.call(null,loc));

while(true){
var temp__3695__auto____4786 = (function (){var and__3546__auto____4785 = clojure.zip.branch_QMARK_.call(null,loc__4784);

if(cljs.core.truth_(and__3546__auto____4785))
{return clojure.zip.down.call(null,loc__4784);
} else
{return and__3546__auto____4785;
}
})();

if(cljs.core.truth_(temp__3695__auto____4786))
{var child__4787 = temp__3695__auto____4786;

{
var G__4789 = clojure.zip.rightmost.call(null,child__4787);
loc__4784 = G__4789;
continue;
}
} else
{return loc__4784;
}
break;
}
} else
{return cljs.core.with_meta.call(null,cljs.core.Vector.fromArray([clojure.zip.make_node.call(null,loc,cljs.core.peek.call(null,pnodes__4782),rs__4783),(function (){var and__3546__auto____4788 = ppath__4781;

if(cljs.core.truth_(and__3546__auto____4788))
{return cljs.core.assoc.call(null,ppath__4781,"﷐'changed?",true);
} else
{return and__3546__auto____4788;
}
})()]),cljs.core.meta.call(null,loc));
}
}
});
