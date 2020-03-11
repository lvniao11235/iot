var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'选择城市'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[[2,'+'],[1,'top:'],[1,0]],[1,';']],[[2,'+'],[[2,'+'],[1,'padding-top:'],[[2,'+'],[[7],[3,'paddingTop']],[1,'px']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'background']]],[1,';']]],[[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']]])
Z([[2,'&&'],[[7],[3,'showAddress']],[[2,'!='],[[7],[3,'currentAddress']],[1,null]]])
Z([[7],[3,'back']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__l'])
Z([3,'创建家庭'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'address-list'])
Z([1,true])
Z([3,'__l'])
Z([3,'家庭列表'])
Z([3,'1'])
Z([3,'__i0__'])
Z([3,'addr'])
Z([[7],[3,'address']])
Z([3,'id'])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'icon-list-item']],[[2,'?:'],[[2,'=='],[[6],[[7],[3,'currentAddress']],[3,'id']],[[6],[[7],[3,'addr']],[3,'id']]],[1,'selected'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'selectAddress']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'address']],[1,'id']],[[6],[[7],[3,'addr']],[3,'id']]]]]]]]]]]]]]]])
Z([[2,'=='],[[6],[[7],[3,'currentAddress']],[3,'id']],[[6],[[7],[3,'addr']],[3,'id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'添加家庭'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'管理家庭'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'修改家庭'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'添加设备'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'__l'])
Z([3,'服务订阅'])
Z([3,'device'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'config-device'])
Z([1,true])
Z([3,'__l'])
Z([3,'设置设备'])
Z([3,'1'])
Z([[7],[3,'showDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备配网'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备配网'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([1,true])
Z([3,'智能设备'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'device-detail'])
Z([1,true])
Z([3,'__l'])
Z([[6],[[7],[3,'selectDevice']],[3,'NickName']])
Z([3,'1'])
Z([3,'title-left'])
Z([[6],[[7],[3,'deviceStatus']],[3,'PM25']])
Z([[6],[[7],[3,'deviceStatus']],[3,'CurrentTemperature']])
Z([[6],[[7],[3,'deviceStatus']],[3,'CurrentHumidity']])
Z([[6],[[7],[3,'deviceStatus']],[3,'CO2']])
Z([[6],[[7],[3,'deviceStatus']],[3,'HCHO']])
Z([3,'__i0__'])
Z([3,'row'])
Z([[6],[[7],[3,'deviceStatus']],[3,'dispParametersRow']])
Z([3,'*this'])
Z([[2,'>'],[[6],[[6],[[7],[3,'deviceStatus']],[3,'dispParameters']],[3,'length']],[[2,'+'],[[2,'*'],[[7],[3,'row']],[1,2]],[1,1]]])
Z([3,'btns'])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'WorkMode']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'WindSpeed']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'SleepMode']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'LocalTimer']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'ChildLockSwitch']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'Humidified']],[1,null]])
Z([[2,'!='],[[6],[[7],[3,'deviceStatus']],[3,'IonsSwitch']],[1,null]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'定时开机'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'搜索设备'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z(z[0])
Z([3,'服务订阅'])
Z([[7],[3,'back']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'set-timer'])
Z([1,true])
Z([3,'__l'])
Z([3,'设置定时'])
Z([3,'1'])
Z([[7],[3,'startTime']])
Z([[7],[3,'shutdownTime']])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备配置'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([[7],[3,'title']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备配网'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备共享'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'share-device-page'])
Z([1,true])
Z([3,'__l'])
Z([3,'设备共享'])
Z([3,'1'])
Z([[7],[3,'showDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'服务订阅'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index-page'])
Z([3,'#10AB6C'])
Z([3,'__l'])
Z([3,'#fff'])
Z([1,true])
Z(z[4])
Z([3,'首页'])
Z([3,'1'])
Z([[2,'&&'],[[7],[3,'devices']],[[2,'>'],[[6],[[7],[3,'devices']],[3,'length']],[1,0]]])
Z([[7],[3,'showDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'手机号登录'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'关于'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设置'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'帮助中心'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'消息提醒'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'modify-user-page'])
Z([1,true])
Z([3,'__l'])
Z([3,'个人信息'])
Z([3,'1'])
Z([[7],[3,'showDialog']])
Z([[7],[3,'showNameDialog']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'我的'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'意见反馈'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'订阅服务'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,true])
Z([3,'__l'])
Z([3,'设备共享'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/CitySelect.wxml','./components/address.wxml','./components/navbar.wxml','./pages/address/addAddress.wxml','./pages/address/addressList.wxml','./pages/address/createAddress.wxml','./pages/address/managerAddress.wxml','./pages/address/modifyAddress.wxml','./pages/device/addDevice.wxml','./pages/device/buy.wxml','./pages/device/configDevice.wxml','./pages/device/connectStatus.wxml','./pages/device/connectWifi.wxml','./pages/device/device.wxml','./pages/device/deviceDetail.wxml','./pages/device/repeat.wxml','./pages/device/searchDevice.wxml','./pages/device/serviceDetail.wxml','./pages/device/setTimer.wxml','./pages/device/settingDevice.wxml','./pages/device/settingTime.wxml','./pages/device/settingWifi.wxml','./pages/device/shareDevice.wxml','./pages/device/shareManage.wxml','./pages/device/subscribe.wxml','./pages/index/index.wxml','./pages/login/clause.wxml','./pages/login/index.wxml','./pages/login/login.wxml','./pages/login/phoneLogin.wxml','./pages/my/about.wxml','./pages/my/config.wxml','./pages/my/help.wxml','./pages/my/message.wxml','./pages/my/modifyUser.wxml','./pages/my/my.wxml','./pages/my/opinion.wxml','./pages/my/service.wxml','./pages/my/share.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var fE=_n('view')
_rz(z,fE,'style',0,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,1,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,2,e,s,gg)){hG.wxVkey=1
}
cF.wxXCkey=1
hG.wxXCkey=1
_(r,fE)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var cI=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,cI)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var lK=_n('view')
_rz(z,lK,'class',0,e,s,gg)
var aL=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(lK,aL)
var tM=_v()
_(lK,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'view',['bindtap',9,'class',1,'data-event-opts',2],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,12,oP,bO,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(xQ,fS)
return xQ
}
tM.wxXCkey=2
_2z(z,7,eN,e,s,gg,tM,'addr','__i0__','id')
_(r,lK)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var oV=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oV)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oX=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oX)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var aZ=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,aZ)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var e2=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,e2)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var o4=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'url',2,'vueId',3],[],e,s,gg)
_(r,o4)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o6=_n('view')
_rz(z,o6,'class',0,e,s,gg)
var c8=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(o6,c8)
var f7=_v()
_(o6,f7)
if(_oz(z,5,e,s,gg)){f7.wxVkey=1
}
f7.wxXCkey=1
_(r,o6)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var o0=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,o0)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var oBB=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oBB)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var aDB=_mz(z,'navbar',['bind:__l',0,'showAddress',1,'title',1,'vueId',2],[],e,s,gg)
_(r,aDB)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var eFB=_n('view')
_rz(z,eFB,'class',0,e,s,gg)
var bGB=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(eFB,bGB)
var oHB=_n('view')
_rz(z,oHB,'class',5,e,s,gg)
var xIB=_v()
_(oHB,xIB)
if(_oz(z,6,e,s,gg)){xIB.wxVkey=1
}
var cLB=_n('view')
var hMB=_v()
_(cLB,hMB)
if(_oz(z,7,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,8,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(oHB,cLB)
var oJB=_v()
_(oHB,oJB)
if(_oz(z,9,e,s,gg)){oJB.wxVkey=1
}
var fKB=_v()
_(oHB,fKB)
if(_oz(z,10,e,s,gg)){fKB.wxVkey=1
}
xIB.wxXCkey=1
oJB.wxXCkey=1
fKB.wxXCkey=1
_(eFB,oHB)
var cOB=_v()
_(eFB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_v()
_(tSB,bUB)
if(_oz(z,15,aRB,lQB,gg)){bUB.wxVkey=1
}
bUB.wxXCkey=1
return tSB
}
cOB.wxXCkey=2
_2z(z,13,oPB,e,s,gg,cOB,'row','__i0__','*this')
var oVB=_n('view')
_rz(z,oVB,'class',16,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,17,e,s,gg)){xWB.wxVkey=1
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,18,e,s,gg)){oXB.wxVkey=1
}
var fYB=_v()
_(oVB,fYB)
if(_oz(z,19,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(oVB,cZB)
if(_oz(z,20,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(oVB,h1B)
if(_oz(z,21,e,s,gg)){h1B.wxVkey=1
}
var o2B=_v()
_(oVB,o2B)
if(_oz(z,22,e,s,gg)){o2B.wxVkey=1
}
var c3B=_v()
_(oVB,c3B)
if(_oz(z,23,e,s,gg)){c3B.wxVkey=1
}
xWB.wxXCkey=1
oXB.wxXCkey=1
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
o2B.wxXCkey=1
c3B.wxXCkey=1
_(eFB,oVB)
_(r,eFB)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var l5B=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,l5B)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var t7B=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,t7B)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var b9B=_mz(z,'navbar',['back',0,'bind:__l',1,'isTabPage',1,'title',2,'url',3,'vueId',4],[],e,s,gg)
_(r,b9B)
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var xAC=_n('view')
_rz(z,xAC,'class',0,e,s,gg)
var cDC=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(xAC,cDC)
var oBC=_v()
_(xAC,oBC)
if(_oz(z,5,e,s,gg)){oBC.wxVkey=1
}
var fCC=_v()
_(xAC,fCC)
if(_oz(z,6,e,s,gg)){fCC.wxVkey=1
}
oBC.wxXCkey=1
fCC.wxXCkey=1
_(r,xAC)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var oFC=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oFC)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var oHC=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oHC)
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var aJC=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,aJC)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var eLC=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,eLC)
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oNC=_n('view')
_rz(z,oNC,'class',0,e,s,gg)
var oPC=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(oNC,oPC)
var xOC=_v()
_(oNC,xOC)
if(_oz(z,5,e,s,gg)){xOC.wxVkey=1
}
xOC.wxXCkey=1
_(r,oNC)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var cRC=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,cRC)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var oTC=_n('view')
_rz(z,oTC,'class',0,e,s,gg)
var lWC=_mz(z,'navbar',['bgColor',1,'bind:__l',1,'fgColor',2,'isHome',3,'showAddress',4,'title',5,'vueId',6],[],e,s,gg)
_(oTC,lWC)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,8,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,9,e,s,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(r,oTC)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var tYC=_mz(z,'navbar',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,tYC)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var b1C=_mz(z,'navbar',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,b1C)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var x3C=_mz(z,'navbar',['bind:__l',0,'vueId',1],[],e,s,gg)
_(r,x3C)
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var f5C=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,f5C)
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var h7C=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,h7C)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var c9C=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,c9C)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var lAD=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,lAD)
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var tCD=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,tCD)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var xGD=_mz(z,'navbar',['back',1,'bind:__l',1,'title',2,'vueId',3],[],e,s,gg)
_(bED,xGD)
var oFD=_v()
_(bED,oFD)
if(_oz(z,5,e,s,gg)){oFD.wxVkey=1
var oHD=_v()
_(oFD,oHD)
if(_oz(z,6,e,s,gg)){oHD.wxVkey=1
}
oHD.wxXCkey=1
}
oFD.wxXCkey=1
_(r,bED)
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var cJD=_mz(z,'navbar',['bind:__l',0,'title',1,'vueId',1],[],e,s,gg)
_(r,cJD)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var oLD=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oLD)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var oND=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,oND)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var aPD=_mz(z,'navbar',['back',0,'bind:__l',1,'title',1,'vueId',2],[],e,s,gg)
_(r,aPD)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/address/addAddress","pages/login/index","pages/device/addDevice","pages/device/device","pages/device/connectWifi","pages/login/phoneLogin","pages/login/clause","pages/device/searchDevice","pages/device/settingDevice","pages/device/settingWifi","pages/device/deviceDetail","pages/device/setTimer","pages/device/settingTime","pages/device/connectStatus","pages/device/configDevice","pages/device/repeat","pages/device/subscribe","pages/device/shareDevice","pages/device/shareManage","pages/device/serviceDetail","pages/device/buy","pages/my/my","pages/my/about","pages/my/config","pages/my/help","pages/my/message","pages/my/service","pages/my/share","pages/my/opinion","pages/my/modifyUser","pages/address/addressList","pages/address/managerAddress","pages/address/modifyAddress","pages/address/createAddress","components/CitySelect"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"健康生活","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","navigationStyle":"custom"},"tabBar":{"color":"#585858","selectedColor":"#10AB6C","list":[{"pagePath":"pages/index/index","iconPath":"static/images/home.png","selectedIconPath":"static/images/homeactive.png","text":"首页"},{"pagePath":"pages/device/device","iconPath":"static/images/device.png","selectedIconPath":"static/images/deviceactive.png","text":"设备"},{"pagePath":"pages/my/my","iconPath":"static/images/my.png","selectedIconPath":"static/images/myactive.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo","compilerVersion":"2.4.6","usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/address.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/address.wxml']=$gwx('./components/address.wxml');

__wxAppCode__['components/CitySelect.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['components/CitySelect.wxml']=$gwx('./components/CitySelect.wxml');

__wxAppCode__['components/navbar.json']={"usingComponents":{"address":"/components/address"},"component":true};
__wxAppCode__['components/navbar.wxml']=$gwx('./components/navbar.wxml');

__wxAppCode__['pages/address/addAddress.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/address/addAddress.wxml']=$gwx('./pages/address/addAddress.wxml');

__wxAppCode__['pages/address/addressList.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/address/addressList.wxml']=$gwx('./pages/address/addressList.wxml');

__wxAppCode__['pages/address/createAddress.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/address/createAddress.wxml']=$gwx('./pages/address/createAddress.wxml');

__wxAppCode__['pages/address/managerAddress.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/address/managerAddress.wxml']=$gwx('./pages/address/managerAddress.wxml');

__wxAppCode__['pages/address/modifyAddress.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/address/modifyAddress.wxml']=$gwx('./pages/address/modifyAddress.wxml');

__wxAppCode__['pages/device/addDevice.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/addDevice.wxml']=$gwx('./pages/device/addDevice.wxml');

__wxAppCode__['pages/device/buy.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/buy.wxml']=$gwx('./pages/device/buy.wxml');

__wxAppCode__['pages/device/configDevice.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/configDevice.wxml']=$gwx('./pages/device/configDevice.wxml');

__wxAppCode__['pages/device/connectStatus.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/connectStatus.wxml']=$gwx('./pages/device/connectStatus.wxml');

__wxAppCode__['pages/device/connectWifi.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/connectWifi.wxml']=$gwx('./pages/device/connectWifi.wxml');

__wxAppCode__['pages/device/device.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/device.wxml']=$gwx('./pages/device/device.wxml');

__wxAppCode__['pages/device/deviceDetail.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/deviceDetail.wxml']=$gwx('./pages/device/deviceDetail.wxml');

__wxAppCode__['pages/device/repeat.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/repeat.wxml']=$gwx('./pages/device/repeat.wxml');

__wxAppCode__['pages/device/searchDevice.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/searchDevice.wxml']=$gwx('./pages/device/searchDevice.wxml');

__wxAppCode__['pages/device/serviceDetail.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/serviceDetail.wxml']=$gwx('./pages/device/serviceDetail.wxml');

__wxAppCode__['pages/device/setTimer.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/setTimer.wxml']=$gwx('./pages/device/setTimer.wxml');

__wxAppCode__['pages/device/settingDevice.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/settingDevice.wxml']=$gwx('./pages/device/settingDevice.wxml');

__wxAppCode__['pages/device/settingTime.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/settingTime.wxml']=$gwx('./pages/device/settingTime.wxml');

__wxAppCode__['pages/device/settingWifi.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/settingWifi.wxml']=$gwx('./pages/device/settingWifi.wxml');

__wxAppCode__['pages/device/shareDevice.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/shareDevice.wxml']=$gwx('./pages/device/shareDevice.wxml');

__wxAppCode__['pages/device/shareManage.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/shareManage.wxml']=$gwx('./pages/device/shareManage.wxml');

__wxAppCode__['pages/device/subscribe.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/device/subscribe.wxml']=$gwx('./pages/device/subscribe.wxml');

__wxAppCode__['pages/index/index.json']={"navigationBarBackgroundColor":"#10AB6C","navigationBarTextStyle":"white","usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/clause.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/login/clause.wxml']=$gwx('./pages/login/clause.wxml');

__wxAppCode__['pages/login/index.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/phoneLogin.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/login/phoneLogin.wxml']=$gwx('./pages/login/phoneLogin.wxml');

__wxAppCode__['pages/my/about.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/about.wxml']=$gwx('./pages/my/about.wxml');

__wxAppCode__['pages/my/config.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/config.wxml']=$gwx('./pages/my/config.wxml');

__wxAppCode__['pages/my/help.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/help.wxml']=$gwx('./pages/my/help.wxml');

__wxAppCode__['pages/my/message.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/message.wxml']=$gwx('./pages/my/message.wxml');

__wxAppCode__['pages/my/modifyUser.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/modifyUser.wxml']=$gwx('./pages/my/modifyUser.wxml');

__wxAppCode__['pages/my/my.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');

__wxAppCode__['pages/my/opinion.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/opinion.wxml']=$gwx('./pages/my/opinion.wxml');

__wxAppCode__['pages/my/service.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/service.wxml']=$gwx('./pages/my/service.wxml');

__wxAppCode__['pages/my/share.json']={"usingComponents":{"navbar":"/components/navbar"}};
__wxAppCode__['pages/my/share.wxml']=$gwx('./pages/my/share.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2dab":function(n,e,t){"use strict";t.r(e);var o=t("f4f8");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("356a");var a,r,c=t("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);e["default"]=f.exports},"356a":function(n,e,t){"use strict";var o=t("bdba"),u=t.n(o);u.a},"539b":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onLaunch:function(){console.log(n("App Launch"," at App.vue:4"))},onShow:function(){console.log(n("App Show"," at App.vue:7"))},onHide:function(){console.log(n("App Hide"," at App.vue:10"))}};e.default=t}).call(this,t("0de9")["default"])},"9ea8":function(n,e,t){"use strict";(function(n){t("b52e"),t("921b");var e=r(t("66fd")),o=r(t("2dab")),u=r(t("d595"));t("293f"),t("2de7");var a=r(t("1234"));function r(n){return n&&n.__esModule?n:{default:n}}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),o.forEach(function(e){f(n,e,t[e])})}return n}function f(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}e.default.config.productionTip=!1,o.default.mpType="app",e.default.prototype.$store=u.default,e.default.prototype.$moment=a.default;var l=function(){return t.e("components/navbar").then(t.bind(null,"36a4"))};e.default.component("navbar",l);var i=new e.default(c({},o.default));n(i).$mount()}).call(this,t("6e42")["createApp"])},bdba:function(n,e,t){},f4f8:function(n,e,t){"use strict";t.r(e);var o=t("539b"),u=t.n(o);for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);e["default"]=u.a}},[["9ea8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var n, o, i = t[0], l = t[1], c = t[2], s = 0, f = []; s < i.length; s++) {
      o = i[s], a[o] && f.push(a[o][0]), a[o] = 0;
    }

    for (n in l) {
      Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
    }

    p && p(t);

    while (f.length) {
      f.shift()();
    }

    return u.push.apply(u, c || []), r();
  }

  function r() {
    for (var e, t = 0; t < u.length; t++) {
      for (var r = u[t], n = !0, o = 1; o < r.length; o++) {
        var i = r[o];
        0 !== a[i] && (n = !1);
      }

      n && (u.splice(t--, 1), e = l(l.s = r[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function i(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (n[t]) return n[t].exports;
    var r = n[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(r.exports, r, r.exports, l), r.l = !0, r.exports;
  }

  l.e = function (e) {
    var t = [],
        r = {
      "components/navbar": 1,
      "components/address": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && r[e] && t.push(o[e] = new Promise(function (t, r) {
      for (var n = ({
        "components/navbar": "components/navbar",
        "components/address": "components/address"
      }[e] || e) + ".wxss", a = l.p + n, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var c = u[i],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === n || s === a)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (i = 0; i < f.length; i++) {
        c = f[i], s = c.getAttribute("data-href");
        if (s === n || s === a) return t();
      }

      var p = document.createElement("link");
      p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function (t) {
        var n = t && t.target && t.target.src || a,
            u = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
        u.request = n, delete o[e], p.parentNode.removeChild(p), r(u);
      }, p.href = a;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(p);
    }).then(function () {
      o[e] = 0;
    }));
    var n = a[e];
    if (0 !== n) if (n) t.push(n[2]);else {
      var u = new Promise(function (t, r) {
        n = a[e] = [t, r];
      });
      t.push(n[2] = u);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = i(e), c = function c(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var r = a[e];

        if (0 !== r) {
          if (r) {
            var n = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                u = new Error("Loading chunk " + e + " failed.\n(" + n + ": " + o + ")");
            u.type = n, u.request = o, r[1](u);
          }

          a[e] = void 0;
        }
      };
      var f = setTimeout(function () {
        c({
          type: "timeout",
          target: s
        });
      }, 12e4);
      s.onerror = s.onload = c, document.head.appendChild(s);
    }
    return Promise.all(t);
  }, l.m = e, l.c = n, l.d = function (e, t, r) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, t) {
    if (1 & t && (e = l(e)), 8 & t) return e;
    if (4 & t && "object" === typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (l.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var n in e) {
      l.d(r, n, function (t) {
        return e[t];
      }.bind(null, n));
    }
    return r;
  }, l.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(t, "a", t), t;
  }, l.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, l.p = "/", l.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      s = c.push.bind(c);
  c.push = t, c = c.slice();

  for (var f = 0; f < c.length; f++) {
    t(c[f]);
  }

  var p = s;
  r();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(r.length>1){var o=r.pop();a=r.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=r[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},1234:function(t,e,n){"use strict";(function(t,e){(function(t,n){e.exports=n()})(0,function(){var n,i;function r(){return n.apply(null,arguments)}function a(t){n=t}function o(t){return t instanceof Array||"[object Array]"===Object.prototype.toString.call(t)}function s(t){return null!=t&&"[object Object]"===Object.prototype.toString.call(t)}function l(t){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(t).length;var e;for(e in t)if(t.hasOwnProperty(e))return!1;return!0}function c(t){return void 0===t}function u(t){return"number"===typeof t||"[object Number]"===Object.prototype.toString.call(t)}function h(t){return t instanceof Date||"[object Date]"===Object.prototype.toString.call(t)}function d(t,e){var n,i=[];for(n=0;n<t.length;++n)i.push(e(t[n],n));return i}function f(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function p(t,e){for(var n in e)f(e,n)&&(t[n]=e[n]);return f(e,"toString")&&(t.toString=e.toString),f(e,"valueOf")&&(t.valueOf=e.valueOf),t}function v(t,e,n,i){return qn(t,e,n,i,!0).utc()}function g(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function y(t){return null==t._pf&&(t._pf=g()),t._pf}function m(t){if(null==t._isValid){var e=y(t),n=i.call(e.parsedDateParts,function(t){return null!=t}),r=!isNaN(t._d.getTime())&&e.overflow<0&&!e.empty&&!e.invalidMonth&&!e.invalidWeekday&&!e.weekdayMismatch&&!e.nullInput&&!e.invalidFormat&&!e.userInvalidated&&(!e.meridiem||e.meridiem&&n);if(t._strict&&(r=r&&0===e.charsLeftOver&&0===e.unusedTokens.length&&void 0===e.bigHour),null!=Object.isFrozen&&Object.isFrozen(t))return r;t._isValid=r}return t._isValid}function _(t){var e=v(NaN);return null!=t?p(y(e),t):y(e).userInvalidated=!0,e}i=Array.prototype.some?Array.prototype.some:function(t){for(var e=Object(this),n=e.length>>>0,i=0;i<n;i++)if(i in e&&t.call(this,e[i],i,e))return!0;return!1};var x=r.momentProperties=[];function b(t,e){var n,i,r;if(c(e._isAMomentObject)||(t._isAMomentObject=e._isAMomentObject),c(e._i)||(t._i=e._i),c(e._f)||(t._f=e._f),c(e._l)||(t._l=e._l),c(e._strict)||(t._strict=e._strict),c(e._tzm)||(t._tzm=e._tzm),c(e._isUTC)||(t._isUTC=e._isUTC),c(e._offset)||(t._offset=e._offset),c(e._pf)||(t._pf=y(e)),c(e._locale)||(t._locale=e._locale),x.length>0)for(n=0;n<x.length;n++)i=x[n],r=e[i],c(r)||(t[i]=r);return t}var w=!1;function S(t){b(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,r.updateOffset(this),w=!1)}function D(t){return t instanceof S||null!=t&&null!=t._isAMomentObject}function k(t){return t<0?Math.ceil(t)||0:Math.floor(t)}function T(t){var e=+t,n=0;return 0!==e&&isFinite(e)&&(n=k(e)),n}function P(t,e,n){var i,r=Math.min(t.length,e.length),a=Math.abs(t.length-e.length),o=0;for(i=0;i<r;i++)(n&&t[i]!==e[i]||!n&&T(t[i])!==T(e[i]))&&o++;return o+a}function A(e){!1===r.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn&&console.warn(t("Deprecation warning: "+e," at utils\\moment.js:293"))}function O(t,e){var n=!0;return p(function(){if(null!=r.deprecationHandler&&r.deprecationHandler(null,t),n){for(var i,a=[],o=0;o<arguments.length;o++){if(i="","object"===typeof arguments[o]){for(var s in i+="\n["+o+"] ",arguments[0])i+=s+": "+arguments[0][s]+", ";i=i.slice(0,-2)}else i=arguments[o];a.push(i)}A(t+"\nArguments: "+Array.prototype.slice.call(a).join("")+"\n"+(new Error).stack),n=!1}return e.apply(this,arguments)},e)}var M,C={};function R(t,e){null!=r.deprecationHandler&&r.deprecationHandler(t,e),C[t]||(A(e),C[t]=!0)}function $(t){return t instanceof Function||"[object Function]"===Object.prototype.toString.call(t)}function F(t){var e,n;for(n in t)e=t[n],$(e)?this[n]=e:this["_"+n]=e;this._config=t,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function E(t,e){var n,i=p({},t);for(n in e)f(e,n)&&(s(t[n])&&s(e[n])?(i[n]={},p(i[n],t[n]),p(i[n],e[n])):null!=e[n]?i[n]=e[n]:delete i[n]);for(n in t)f(t,n)&&!f(e,n)&&s(t[n])&&(i[n]=p({},i[n]));return i}function L(t){null!=t&&this.set(t)}r.suppressDeprecationWarnings=!1,r.deprecationHandler=null,M=Object.keys?Object.keys:function(t){var e,n=[];for(e in t)f(t,e)&&n.push(e);return n};var I={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function j(t,e,n){var i=this._calendar[t]||this._calendar["sameElse"];return $(i)?i.call(e,n):i}var Y={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function W(t){var e=this._longDateFormat[t],n=this._longDateFormat[t.toUpperCase()];return e||!n?e:(this._longDateFormat[t]=n.replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t])}var N="Invalid date";function U(){return this._invalidDate}var z="%d",H=/\d{1,2}/;function V(t){return this._ordinal.replace("%d",t)}var B={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function G(t,e,n,i){var r=this._relativeTime[n];return $(r)?r(t,e,n,i):r.replace(/%d/i,t)}function q(t,e){var n=this._relativeTime[t>0?"future":"past"];return $(n)?n(e):n.replace(/%s/i,e)}var J={};function X(t,e){var n=t.toLowerCase();J[n]=J[n+"s"]=J[e]=t}function Z(t){return"string"===typeof t?J[t]||J[t.toLowerCase()]:void 0}function K(t){var e,n,i={};for(n in t)f(t,n)&&(e=Z(n),e&&(i[e]=t[n]));return i}var Q={};function tt(t,e){Q[t]=e}function et(t){var e=[];for(var n in t)e.push({unit:n,priority:Q[n]});return e.sort(function(t,e){return t.priority-e.priority}),e}function nt(t,e,n){var i=""+Math.abs(t),r=e-i.length,a=t>=0;return(a?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+i}var it=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,rt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,at={},ot={};function st(t,e,n,i){var r=i;"string"===typeof i&&(r=function(){return this[i]()}),t&&(ot[t]=r),e&&(ot[e[0]]=function(){return nt(r.apply(this,arguments),e[1],e[2])}),n&&(ot[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),t)})}function lt(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function ct(t){var e,n,i=t.match(it);for(e=0,n=i.length;e<n;e++)ot[i[e]]?i[e]=ot[i[e]]:i[e]=lt(i[e]);return function(e){var r,a="";for(r=0;r<n;r++)a+=$(i[r])?i[r].call(e,t):i[r];return a}}function ut(t,e){return t.isValid()?(e=ht(e,t.localeData()),at[e]=at[e]||ct(e),at[e](t)):t.localeData().invalidDate()}function ht(t,e){var n=5;function i(t){return e.longDateFormat(t)||t}rt.lastIndex=0;while(n>=0&&rt.test(t))t=t.replace(rt,i),rt.lastIndex=0,n-=1;return t}var dt=/\d/,ft=/\d\d/,pt=/\d{3}/,vt=/\d{4}/,gt=/[+-]?\d{6}/,yt=/\d\d?/,mt=/\d\d\d\d?/,_t=/\d\d\d\d\d\d?/,xt=/\d{1,3}/,bt=/\d{1,4}/,wt=/[+-]?\d{1,6}/,St=/\d+/,Dt=/[+-]?\d+/,kt=/Z|[+-]\d\d:?\d\d/gi,Tt=/Z|[+-]\d\d(?::?\d\d)?/gi,Pt=/[+-]?\d+(\.\d{1,3})?/,At=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ot={};function Mt(t,e,n){Ot[t]=$(e)?e:function(t,i){return t&&n?n:e}}function Ct(t,e){return f(Ot,t)?Ot[t](e._strict,e._locale):new RegExp(Rt(t))}function Rt(t){return $t(t.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,r){return e||n||i||r}))}function $t(t){return t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Ft={};function Et(t,e){var n,i=e;for("string"===typeof t&&(t=[t]),u(e)&&(i=function(t,n){n[e]=T(t)}),n=0;n<t.length;n++)Ft[t[n]]=i}function Lt(t,e){Et(t,function(t,n,i,r){i._w=i._w||{},e(t,i._w,i,r)})}function It(t,e,n){null!=e&&f(Ft,t)&&Ft[t](e,n._a,n,t)}var jt=0,Yt=1,Wt=2,Nt=3,Ut=4,zt=5,Ht=6,Vt=7,Bt=8;function Gt(t){return qt(t)?366:365}function qt(t){return t%4===0&&t%100!==0||t%400===0}st("Y",0,0,function(){var t=this.year();return t<=9999?""+t:"+"+t}),st(0,["YY",2],0,function(){return this.year()%100}),st(0,["YYYY",4],0,"year"),st(0,["YYYYY",5],0,"year"),st(0,["YYYYYY",6,!0],0,"year"),X("year","y"),tt("year",1),Mt("Y",Dt),Mt("YY",yt,ft),Mt("YYYY",bt,vt),Mt("YYYYY",wt,gt),Mt("YYYYYY",wt,gt),Et(["YYYYY","YYYYYY"],jt),Et("YYYY",function(t,e){e[jt]=2===t.length?r.parseTwoDigitYear(t):T(t)}),Et("YY",function(t,e){e[jt]=r.parseTwoDigitYear(t)}),Et("Y",function(t,e){e[jt]=parseInt(t,10)}),r.parseTwoDigitYear=function(t){return T(t)+(T(t)>68?1900:2e3)};var Jt,Xt=Kt("FullYear",!0);function Zt(){return qt(this.year())}function Kt(t,e){return function(n){return null!=n?(te(this,t,n),r.updateOffset(this,e),this):Qt(this,t)}}function Qt(t,e){return t.isValid()?t._d["get"+(t._isUTC?"UTC":"")+e]():NaN}function te(t,e,n){t.isValid()&&!isNaN(n)&&("FullYear"===e&&qt(t.year())&&1===t.month()&&29===t.date()?t._d["set"+(t._isUTC?"UTC":"")+e](n,t.month(),re(n,t.month())):t._d["set"+(t._isUTC?"UTC":"")+e](n))}function ee(t){return t=Z(t),$(this[t])?this[t]():this}function ne(t,e){if("object"===typeof t){t=K(t);for(var n=et(t),i=0;i<n.length;i++)this[n[i].unit](t[n[i].unit])}else if(t=Z(t),$(this[t]))return this[t](e);return this}function ie(t,e){return(t%e+e)%e}function re(t,e){if(isNaN(t)||isNaN(e))return NaN;var n=ie(e,12);return t+=(e-n)/12,1===n?qt(t)?29:28:31-n%7%2}Jt=Array.prototype.indexOf?Array.prototype.indexOf:function(t){var e;for(e=0;e<this.length;++e)if(this[e]===t)return e;return-1},st("M",["MM",2],"Mo",function(){return this.month()+1}),st("MMM",0,0,function(t){return this.localeData().monthsShort(this,t)}),st("MMMM",0,0,function(t){return this.localeData().months(this,t)}),X("month","M"),tt("month",8),Mt("M",yt),Mt("MM",yt,ft),Mt("MMM",function(t,e){return e.monthsShortRegex(t)}),Mt("MMMM",function(t,e){return e.monthsRegex(t)}),Et(["M","MM"],function(t,e){e[Yt]=T(t)-1}),Et(["MMM","MMMM"],function(t,e,n,i){var r=n._locale.monthsParse(t,i,n._strict);null!=r?e[Yt]=r:y(n).invalidMonth=t});var ae=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,oe="January_February_March_April_May_June_July_August_September_October_November_December".split("_");function se(t,e){return t?o(this._months)?this._months[t.month()]:this._months[(this._months.isFormat||ae).test(e)?"format":"standalone"][t.month()]:o(this._months)?this._months:this._months["standalone"]}var le="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function ce(t,e){return t?o(this._monthsShort)?this._monthsShort[t.month()]:this._monthsShort[ae.test(e)?"format":"standalone"][t.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort["standalone"]}function ue(t,e,n){var i,r,a,o=t.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)a=v([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(a,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(a,"").toLocaleLowerCase();return n?"MMM"===e?(r=Jt.call(this._shortMonthsParse,o),-1!==r?r:null):(r=Jt.call(this._longMonthsParse,o),-1!==r?r:null):"MMM"===e?(r=Jt.call(this._shortMonthsParse,o),-1!==r?r:(r=Jt.call(this._longMonthsParse,o),-1!==r?r:null)):(r=Jt.call(this._longMonthsParse,o),-1!==r?r:(r=Jt.call(this._shortMonthsParse,o),-1!==r?r:null))}function he(t,e,n){var i,r,a;if(this._monthsParseExact)return ue.call(this,t,e,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(r=v([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(a="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[i]=new RegExp(a.replace(".",""),"i")),n&&"MMMM"===e&&this._longMonthsParse[i].test(t))return i;if(n&&"MMM"===e&&this._shortMonthsParse[i].test(t))return i;if(!n&&this._monthsParse[i].test(t))return i}}function de(t,e){var n;if(!t.isValid())return t;if("string"===typeof e)if(/^\d+$/.test(e))e=T(e);else if(e=t.localeData().monthsParse(e),!u(e))return t;return n=Math.min(t.date(),re(t.year(),e)),t._d["set"+(t._isUTC?"UTC":"")+"Month"](e,n),t}function fe(t){return null!=t?(de(this,t),r.updateOffset(this,!0),this):Qt(this,"Month")}function pe(){return re(this.year(),this.month())}var ve=At;function ge(t){return this._monthsParseExact?(f(this,"_monthsRegex")||_e.call(this),t?this._monthsShortStrictRegex:this._monthsShortRegex):(f(this,"_monthsShortRegex")||(this._monthsShortRegex=ve),this._monthsShortStrictRegex&&t?this._monthsShortStrictRegex:this._monthsShortRegex)}var ye=At;function me(t){return this._monthsParseExact?(f(this,"_monthsRegex")||_e.call(this),t?this._monthsStrictRegex:this._monthsRegex):(f(this,"_monthsRegex")||(this._monthsRegex=ye),this._monthsStrictRegex&&t?this._monthsStrictRegex:this._monthsRegex)}function _e(){function t(t,e){return e.length-t.length}var e,n,i=[],r=[],a=[];for(e=0;e<12;e++)n=v([2e3,e]),i.push(this.monthsShort(n,"")),r.push(this.months(n,"")),a.push(this.months(n,"")),a.push(this.monthsShort(n,""));for(i.sort(t),r.sort(t),a.sort(t),e=0;e<12;e++)i[e]=$t(i[e]),r[e]=$t(r[e]);for(e=0;e<24;e++)a[e]=$t(a[e]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function xe(t,e,n,i,r,a,o){var s;return t<100&&t>=0?(s=new Date(t+400,e,n,i,r,a,o),isFinite(s.getFullYear())&&s.setFullYear(t)):s=new Date(t,e,n,i,r,a,o),s}function be(t){var e;if(t<100&&t>=0){var n=Array.prototype.slice.call(arguments);n[0]=t+400,e=new Date(Date.UTC.apply(null,n)),isFinite(e.getUTCFullYear())&&e.setUTCFullYear(t)}else e=new Date(Date.UTC.apply(null,arguments));return e}function we(t,e,n){var i=7+e-n,r=(7+be(t,0,i).getUTCDay()-e)%7;return-r+i-1}function Se(t,e,n,i,r){var a,o,s=(7+n-i)%7,l=we(t,i,r),c=1+7*(e-1)+s+l;return c<=0?(a=t-1,o=Gt(a)+c):c>Gt(t)?(a=t+1,o=c-Gt(t)):(a=t,o=c),{year:a,dayOfYear:o}}function De(t,e,n){var i,r,a=we(t.year(),e,n),o=Math.floor((t.dayOfYear()-a-1)/7)+1;return o<1?(r=t.year()-1,i=o+ke(r,e,n)):o>ke(t.year(),e,n)?(i=o-ke(t.year(),e,n),r=t.year()+1):(r=t.year(),i=o),{week:i,year:r}}function ke(t,e,n){var i=we(t,e,n),r=we(t+1,e,n);return(Gt(t)-i+r)/7}function Te(t){return De(t,this._week.dow,this._week.doy).week}st("w",["ww",2],"wo","week"),st("W",["WW",2],"Wo","isoWeek"),X("week","w"),X("isoWeek","W"),tt("week",5),tt("isoWeek",5),Mt("w",yt),Mt("ww",yt,ft),Mt("W",yt),Mt("WW",yt,ft),Lt(["w","ww","W","WW"],function(t,e,n,i){e[i.substr(0,1)]=T(t)});var Pe={dow:0,doy:6};function Ae(){return this._week.dow}function Oe(){return this._week.doy}function Me(t){var e=this.localeData().week(this);return null==t?e:this.add(7*(t-e),"d")}function Ce(t){var e=De(this,1,4).week;return null==t?e:this.add(7*(t-e),"d")}function Re(t,e){return"string"!==typeof t?t:isNaN(t)?(t=e.weekdaysParse(t),"number"===typeof t?t:null):parseInt(t,10)}function $e(t,e){return"string"===typeof t?e.weekdaysParse(t)%7||7:isNaN(t)?null:t}function Fe(t,e){return t.slice(e,7).concat(t.slice(0,e))}st("d",0,"do","day"),st("dd",0,0,function(t){return this.localeData().weekdaysMin(this,t)}),st("ddd",0,0,function(t){return this.localeData().weekdaysShort(this,t)}),st("dddd",0,0,function(t){return this.localeData().weekdays(this,t)}),st("e",0,0,"weekday"),st("E",0,0,"isoWeekday"),X("day","d"),X("weekday","e"),X("isoWeekday","E"),tt("day",11),tt("weekday",11),tt("isoWeekday",11),Mt("d",yt),Mt("e",yt),Mt("E",yt),Mt("dd",function(t,e){return e.weekdaysMinRegex(t)}),Mt("ddd",function(t,e){return e.weekdaysShortRegex(t)}),Mt("dddd",function(t,e){return e.weekdaysRegex(t)}),Lt(["dd","ddd","dddd"],function(t,e,n,i){var r=n._locale.weekdaysParse(t,i,n._strict);null!=r?e.d=r:y(n).invalidWeekday=t}),Lt(["d","e","E"],function(t,e,n,i){e[i]=T(t)});var Ee="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");function Le(t,e){var n=o(this._weekdays)?this._weekdays:this._weekdays[t&&!0!==t&&this._weekdays.isFormat.test(e)?"format":"standalone"];return!0===t?Fe(n,this._week.dow):t?n[t.day()]:n}var Ie="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");function je(t){return!0===t?Fe(this._weekdaysShort,this._week.dow):t?this._weekdaysShort[t.day()]:this._weekdaysShort}var Ye="Su_Mo_Tu_We_Th_Fr_Sa".split("_");function We(t){return!0===t?Fe(this._weekdaysMin,this._week.dow):t?this._weekdaysMin[t.day()]:this._weekdaysMin}function Ne(t,e,n){var i,r,a,o=t.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)a=v([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(a,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(a,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(a,"").toLocaleLowerCase();return n?"dddd"===e?(r=Jt.call(this._weekdaysParse,o),-1!==r?r:null):"ddd"===e?(r=Jt.call(this._shortWeekdaysParse,o),-1!==r?r:null):(r=Jt.call(this._minWeekdaysParse,o),-1!==r?r:null):"dddd"===e?(r=Jt.call(this._weekdaysParse,o),-1!==r?r:(r=Jt.call(this._shortWeekdaysParse,o),-1!==r?r:(r=Jt.call(this._minWeekdaysParse,o),-1!==r?r:null))):"ddd"===e?(r=Jt.call(this._shortWeekdaysParse,o),-1!==r?r:(r=Jt.call(this._weekdaysParse,o),-1!==r?r:(r=Jt.call(this._minWeekdaysParse,o),-1!==r?r:null))):(r=Jt.call(this._minWeekdaysParse,o),-1!==r?r:(r=Jt.call(this._weekdaysParse,o),-1!==r?r:(r=Jt.call(this._shortWeekdaysParse,o),-1!==r?r:null)))}function Ue(t,e,n){var i,r,a;if(this._weekdaysParseExact)return Ne.call(this,t,e,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(r=v([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(a="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[i]=new RegExp(a.replace(".",""),"i")),n&&"dddd"===e&&this._fullWeekdaysParse[i].test(t))return i;if(n&&"ddd"===e&&this._shortWeekdaysParse[i].test(t))return i;if(n&&"dd"===e&&this._minWeekdaysParse[i].test(t))return i;if(!n&&this._weekdaysParse[i].test(t))return i}}function ze(t){if(!this.isValid())return null!=t?this:NaN;var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=Re(t,this.localeData()),this.add(t-e,"d")):e}function He(t){if(!this.isValid())return null!=t?this:NaN;var e=(this.day()+7-this.localeData()._week.dow)%7;return null==t?e:this.add(t-e,"d")}function Ve(t){if(!this.isValid())return null!=t?this:NaN;if(null!=t){var e=$e(t,this.localeData());return this.day(this.day()%7?e:e-7)}return this.day()||7}var Be=At;function Ge(t){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||Ke.call(this),t?this._weekdaysStrictRegex:this._weekdaysRegex):(f(this,"_weekdaysRegex")||(this._weekdaysRegex=Be),this._weekdaysStrictRegex&&t?this._weekdaysStrictRegex:this._weekdaysRegex)}var qe=At;function Je(t){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||Ke.call(this),t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(f(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&t?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}var Xe=At;function Ze(t){return this._weekdaysParseExact?(f(this,"_weekdaysRegex")||Ke.call(this),t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(f(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Xe),this._weekdaysMinStrictRegex&&t?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ke(){function t(t,e){return e.length-t.length}var e,n,i,r,a,o=[],s=[],l=[],c=[];for(e=0;e<7;e++)n=v([2e3,1]).day(e),i=this.weekdaysMin(n,""),r=this.weekdaysShort(n,""),a=this.weekdays(n,""),o.push(i),s.push(r),l.push(a),c.push(i),c.push(r),c.push(a);for(o.sort(t),s.sort(t),l.sort(t),c.sort(t),e=0;e<7;e++)s[e]=$t(s[e]),l[e]=$t(l[e]),c[e]=$t(c[e]);this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Qe(){return this.hours()%12||12}function tn(){return this.hours()||24}function en(t,e){st(t,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),e)})}function nn(t,e){return e._meridiemParse}function rn(t){return"p"===(t+"").toLowerCase().charAt(0)}st("H",["HH",2],0,"hour"),st("h",["hh",2],0,Qe),st("k",["kk",2],0,tn),st("hmm",0,0,function(){return""+Qe.apply(this)+nt(this.minutes(),2)}),st("hmmss",0,0,function(){return""+Qe.apply(this)+nt(this.minutes(),2)+nt(this.seconds(),2)}),st("Hmm",0,0,function(){return""+this.hours()+nt(this.minutes(),2)}),st("Hmmss",0,0,function(){return""+this.hours()+nt(this.minutes(),2)+nt(this.seconds(),2)}),en("a",!0),en("A",!1),X("hour","h"),tt("hour",13),Mt("a",nn),Mt("A",nn),Mt("H",yt),Mt("h",yt),Mt("k",yt),Mt("HH",yt,ft),Mt("hh",yt,ft),Mt("kk",yt,ft),Mt("hmm",mt),Mt("hmmss",_t),Mt("Hmm",mt),Mt("Hmmss",_t),Et(["H","HH"],Nt),Et(["k","kk"],function(t,e,n){var i=T(t);e[Nt]=24===i?0:i}),Et(["a","A"],function(t,e,n){n._isPm=n._locale.isPM(t),n._meridiem=t}),Et(["h","hh"],function(t,e,n){e[Nt]=T(t),y(n).bigHour=!0}),Et("hmm",function(t,e,n){var i=t.length-2;e[Nt]=T(t.substr(0,i)),e[Ut]=T(t.substr(i)),y(n).bigHour=!0}),Et("hmmss",function(t,e,n){var i=t.length-4,r=t.length-2;e[Nt]=T(t.substr(0,i)),e[Ut]=T(t.substr(i,2)),e[zt]=T(t.substr(r)),y(n).bigHour=!0}),Et("Hmm",function(t,e,n){var i=t.length-2;e[Nt]=T(t.substr(0,i)),e[Ut]=T(t.substr(i))}),Et("Hmmss",function(t,e,n){var i=t.length-4,r=t.length-2;e[Nt]=T(t.substr(0,i)),e[Ut]=T(t.substr(i,2)),e[zt]=T(t.substr(r))});var an=/[ap]\.?m?\.?/i;function on(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"}var sn,ln=Kt("Hours",!0),cn={calendar:I,longDateFormat:Y,invalidDate:N,ordinal:z,dayOfMonthOrdinalParse:H,relativeTime:B,months:oe,monthsShort:le,week:Pe,weekdays:Ee,weekdaysMin:Ye,weekdaysShort:Ie,meridiemParse:an},un={},hn={};function dn(t){return t?t.toLowerCase().replace("_","-"):t}function fn(t){var e,n,i,r,a=0;while(a<t.length){r=dn(t[a]).split("-"),e=r.length,n=dn(t[a+1]),n=n?n.split("-"):null;while(e>0){if(i=pn(r.slice(0,e).join("-")),i)return i;if(n&&n.length>=e&&P(r,n,!0)>=e-1)break;e--}a++}return sn}function pn(t){var n=null;if(!un[t]&&"undefined"!==typeof e&&e&&e.exports)try{n=sn._abbr;!function(){var t=new Error("Cannot find module 'undefined'");throw t.code="MODULE_NOT_FOUND",t}(),vn(n)}catch(i){}return un[t]}function vn(e,n){var i;return e&&(i=c(n)?mn(e):gn(e,n),i?sn=i:"undefined"!==typeof console&&console.warn&&console.warn(t("Locale "+e+" not found. Did you forget to load it?"," at utils\\moment.js:1880"))),sn._abbr}function gn(t,e){if(null!==e){var n,i=cn;if(e.abbr=t,null!=un[t])R("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=un[t]._config;else if(null!=e.parentLocale)if(null!=un[e.parentLocale])i=un[e.parentLocale]._config;else{if(n=pn(e.parentLocale),null==n)return hn[e.parentLocale]||(hn[e.parentLocale]=[]),hn[e.parentLocale].push({name:t,config:e}),null;i=n._config}return un[t]=new L(E(i,e)),hn[t]&&hn[t].forEach(function(t){gn(t.name,t.config)}),vn(t),un[t]}return delete un[t],null}function yn(t,e){if(null!=e){var n,i,r=cn;i=pn(t),null!=i&&(r=i._config),e=E(r,e),n=new L(e),n.parentLocale=un[t],un[t]=n,vn(t)}else null!=un[t]&&(null!=un[t].parentLocale?un[t]=un[t].parentLocale:null!=un[t]&&delete un[t]);return un[t]}function mn(t){var e;if(t&&t._locale&&t._locale._abbr&&(t=t._locale._abbr),!t)return sn;if(!o(t)){if(e=pn(t),e)return e;t=[t]}return fn(t)}function _n(){return M(un)}function xn(t){var e,n=t._a;return n&&-2===y(t).overflow&&(e=n[Yt]<0||n[Yt]>11?Yt:n[Wt]<1||n[Wt]>re(n[jt],n[Yt])?Wt:n[Nt]<0||n[Nt]>24||24===n[Nt]&&(0!==n[Ut]||0!==n[zt]||0!==n[Ht])?Nt:n[Ut]<0||n[Ut]>59?Ut:n[zt]<0||n[zt]>59?zt:n[Ht]<0||n[Ht]>999?Ht:-1,y(t)._overflowDayOfYear&&(e<jt||e>Wt)&&(e=Wt),y(t)._overflowWeeks&&-1===e&&(e=Vt),y(t)._overflowWeekday&&-1===e&&(e=Bt),y(t).overflow=e),t}function bn(t,e,n){return null!=t?t:null!=e?e:n}function wn(t){var e=new Date(r.now());return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function Sn(t){var e,n,i,r,a,o=[];if(!t._d){for(i=wn(t),t._w&&null==t._a[Wt]&&null==t._a[Yt]&&Dn(t),null!=t._dayOfYear&&(a=bn(t._a[jt],i[jt]),(t._dayOfYear>Gt(a)||0===t._dayOfYear)&&(y(t)._overflowDayOfYear=!0),n=be(a,0,t._dayOfYear),t._a[Yt]=n.getUTCMonth(),t._a[Wt]=n.getUTCDate()),e=0;e<3&&null==t._a[e];++e)t._a[e]=o[e]=i[e];for(;e<7;e++)t._a[e]=o[e]=null==t._a[e]?2===e?1:0:t._a[e];24===t._a[Nt]&&0===t._a[Ut]&&0===t._a[zt]&&0===t._a[Ht]&&(t._nextDay=!0,t._a[Nt]=0),t._d=(t._useUTC?be:xe).apply(null,o),r=t._useUTC?t._d.getUTCDay():t._d.getDay(),null!=t._tzm&&t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),t._nextDay&&(t._a[Nt]=24),t._w&&"undefined"!==typeof t._w.d&&t._w.d!==r&&(y(t).weekdayMismatch=!0)}}function Dn(t){var e,n,i,r,a,o,s,l;if(e=t._w,null!=e.GG||null!=e.W||null!=e.E)a=1,o=4,n=bn(e.GG,t._a[jt],De(Jn(),1,4).year),i=bn(e.W,1),r=bn(e.E,1),(r<1||r>7)&&(l=!0);else{a=t._locale._week.dow,o=t._locale._week.doy;var c=De(Jn(),a,o);n=bn(e.gg,t._a[jt],c.year),i=bn(e.w,c.week),null!=e.d?(r=e.d,(r<0||r>6)&&(l=!0)):null!=e.e?(r=e.e+a,(e.e<0||e.e>6)&&(l=!0)):r=a}i<1||i>ke(n,a,o)?y(t)._overflowWeeks=!0:null!=l?y(t)._overflowWeekday=!0:(s=Se(n,i,r,a,o),t._a[jt]=s.year,t._dayOfYear=s.dayOfYear)}var kn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Tn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Pn=/Z|[+-]\d\d(?::?\d\d)?/,An=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],On=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Mn=/^\/?Date\((\-?\d+)/i;function Cn(t){var e,n,i,r,a,o,s=t._i,l=kn.exec(s)||Tn.exec(s);if(l){for(y(t).iso=!0,e=0,n=An.length;e<n;e++)if(An[e][1].exec(l[1])){r=An[e][0],i=!1!==An[e][2];break}if(null==r)return void(t._isValid=!1);if(l[3]){for(e=0,n=On.length;e<n;e++)if(On[e][1].exec(l[3])){a=(l[2]||" ")+On[e][0];break}if(null==a)return void(t._isValid=!1)}if(!i&&null!=a)return void(t._isValid=!1);if(l[4]){if(!Pn.exec(l[4]))return void(t._isValid=!1);o="Z"}t._f=r+(a||"")+(o||""),Nn(t)}else t._isValid=!1}var Rn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function $n(t,e,n,i,r,a){var o=[Fn(t),le.indexOf(e),parseInt(n,10),parseInt(i,10),parseInt(r,10)];return a&&o.push(parseInt(a,10)),o}function Fn(t){var e=parseInt(t,10);return e<=49?2e3+e:e<=999?1900+e:e}function En(t){return t.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Ln(t,e,n){if(t){var i=Ie.indexOf(t),r=new Date(e[0],e[1],e[2]).getDay();if(i!==r)return y(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}var In={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function jn(t,e,n){if(t)return In[t];if(e)return 0;var i=parseInt(n,10),r=i%100,a=(i-r)/100;return 60*a+r}function Yn(t){var e=Rn.exec(En(t._i));if(e){var n=$n(e[4],e[3],e[2],e[5],e[6],e[7]);if(!Ln(e[1],n,t))return;t._a=n,t._tzm=jn(e[8],e[9],e[10]),t._d=be.apply(null,t._a),t._d.setUTCMinutes(t._d.getUTCMinutes()-t._tzm),y(t).rfc2822=!0}else t._isValid=!1}function Wn(t){var e=Mn.exec(t._i);null===e?(Cn(t),!1===t._isValid&&(delete t._isValid,Yn(t),!1===t._isValid&&(delete t._isValid,r.createFromInputFallback(t)))):t._d=new Date(+e[1])}function Nn(t){if(t._f!==r.ISO_8601)if(t._f!==r.RFC_2822){t._a=[],y(t).empty=!0;var e,n,i,a,o,s=""+t._i,l=s.length,c=0;for(i=ht(t._f,t._locale).match(it)||[],e=0;e<i.length;e++)a=i[e],n=(s.match(Ct(a,t))||[])[0],n&&(o=s.substr(0,s.indexOf(n)),o.length>0&&y(t).unusedInput.push(o),s=s.slice(s.indexOf(n)+n.length),c+=n.length),ot[a]?(n?y(t).empty=!1:y(t).unusedTokens.push(a),It(a,n,t)):t._strict&&!n&&y(t).unusedTokens.push(a);y(t).charsLeftOver=l-c,s.length>0&&y(t).unusedInput.push(s),t._a[Nt]<=12&&!0===y(t).bigHour&&t._a[Nt]>0&&(y(t).bigHour=void 0),y(t).parsedDateParts=t._a.slice(0),y(t).meridiem=t._meridiem,t._a[Nt]=Un(t._locale,t._a[Nt],t._meridiem),Sn(t),xn(t)}else Yn(t);else Cn(t)}function Un(t,e,n){var i;return null==n?e:null!=t.meridiemHour?t.meridiemHour(e,n):null!=t.isPM?(i=t.isPM(n),i&&e<12&&(e+=12),i||12!==e||(e=0),e):e}function zn(t){var e,n,i,r,a;if(0===t._f.length)return y(t).invalidFormat=!0,void(t._d=new Date(NaN));for(r=0;r<t._f.length;r++)a=0,e=b({},t),null!=t._useUTC&&(e._useUTC=t._useUTC),e._f=t._f[r],Nn(e),m(e)&&(a+=y(e).charsLeftOver,a+=10*y(e).unusedTokens.length,y(e).score=a,(null==i||a<i)&&(i=a,n=e));p(t,n||e)}function Hn(t){if(!t._d){var e=K(t._i);t._a=d([e.year,e.month,e.day||e.date,e.hour,e.minute,e.second,e.millisecond],function(t){return t&&parseInt(t,10)}),Sn(t)}}function Vn(t){var e=new S(xn(Bn(t)));return e._nextDay&&(e.add(1,"d"),e._nextDay=void 0),e}function Bn(t){var e=t._i,n=t._f;return t._locale=t._locale||mn(t._l),null===e||void 0===n&&""===e?_({nullInput:!0}):("string"===typeof e&&(t._i=e=t._locale.preparse(e)),D(e)?new S(xn(e)):(h(e)?t._d=e:o(n)?zn(t):n?Nn(t):Gn(t),m(t)||(t._d=null),t))}function Gn(t){var e=t._i;c(e)?t._d=new Date(r.now()):h(e)?t._d=new Date(e.valueOf()):"string"===typeof e?Wn(t):o(e)?(t._a=d(e.slice(0),function(t){return parseInt(t,10)}),Sn(t)):s(e)?Hn(t):u(e)?t._d=new Date(e):r.createFromInputFallback(t)}function qn(t,e,n,i,r){var a={};return!0!==n&&!1!==n||(i=n,n=void 0),(s(t)&&l(t)||o(t)&&0===t.length)&&(t=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=r,a._l=n,a._i=t,a._f=e,a._strict=i,Vn(a)}function Jn(t,e,n,i){return qn(t,e,n,i,!1)}r.createFromInputFallback=O("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(t){t._d=new Date(t._i+(t._useUTC?" UTC":""))}),r.ISO_8601=function(){},r.RFC_2822=function(){};var Xn=O("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Jn.apply(null,arguments);return this.isValid()&&t.isValid()?t<this?this:t:_()}),Zn=O("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var t=Jn.apply(null,arguments);return this.isValid()&&t.isValid()?t>this?this:t:_()});function Kn(t,e){var n,i;if(1===e.length&&o(e[0])&&(e=e[0]),!e.length)return Jn();for(n=e[0],i=1;i<e.length;++i)e[i].isValid()&&!e[i][t](n)||(n=e[i]);return n}function Qn(){var t=[].slice.call(arguments,0);return Kn("isBefore",t)}function ti(){var t=[].slice.call(arguments,0);return Kn("isAfter",t)}var ei=function(){return Date.now?Date.now():+new Date},ni=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ii(t){for(var e in t)if(-1===Jt.call(ni,e)||null!=t[e]&&isNaN(t[e]))return!1;for(var n=!1,i=0;i<ni.length;++i)if(t[ni[i]]){if(n)return!1;parseFloat(t[ni[i]])!==T(t[ni[i]])&&(n=!0)}return!0}function ri(){return this._isValid}function ai(){return Pi(NaN)}function oi(t){var e=K(t),n=e.year||0,i=e.quarter||0,r=e.month||0,a=e.week||e.isoWeek||0,o=e.day||0,s=e.hour||0,l=e.minute||0,c=e.second||0,u=e.millisecond||0;this._isValid=ii(e),this._milliseconds=+u+1e3*c+6e4*l+1e3*s*60*60,this._days=+o+7*a,this._months=+r+3*i+12*n,this._data={},this._locale=mn(),this._bubble()}function si(t){return t instanceof oi}function li(t){return t<0?-1*Math.round(-1*t):Math.round(t)}function ci(t,e){st(t,0,0,function(){var t=this.utcOffset(),n="+";return t<0&&(t=-t,n="-"),n+nt(~~(t/60),2)+e+nt(~~t%60,2)})}ci("Z",":"),ci("ZZ",""),Mt("Z",Tt),Mt("ZZ",Tt),Et(["Z","ZZ"],function(t,e,n){n._useUTC=!0,n._tzm=hi(Tt,t)});var ui=/([\+\-]|\d\d)/gi;function hi(t,e){var n=(e||"").match(t);if(null===n)return null;var i=n[n.length-1]||[],r=(i+"").match(ui)||["-",0,0],a=60*r[1]+T(r[2]);return 0===a?0:"+"===r[0]?a:-a}function di(t,e){var n,i;return e._isUTC?(n=e.clone(),i=(D(t)||h(t)?t.valueOf():Jn(t).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+i),r.updateOffset(n,!1),n):Jn(t).local()}function fi(t){return 15*-Math.round(t._d.getTimezoneOffset()/15)}function pi(t,e,n){var i,a=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"===typeof t){if(t=hi(Tt,t),null===t)return this}else Math.abs(t)<16&&!n&&(t*=60);return!this._isUTC&&e&&(i=fi(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),a!==t&&(!e||this._changeInProgress?Ri(this,Pi(t-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,r.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?a:fi(this)}function vi(t,e){return null!=t?("string"!==typeof t&&(t=-t),this.utcOffset(t,e),this):-this.utcOffset()}function gi(t){return this.utcOffset(0,t)}function yi(t){return this._isUTC&&(this.utcOffset(0,t),this._isUTC=!1,t&&this.subtract(fi(this),"m")),this}function mi(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"===typeof this._i){var t=hi(kt,this._i);null!=t?this.utcOffset(t):this.utcOffset(0,!0)}return this}function _i(t){return!!this.isValid()&&(t=t?Jn(t).utcOffset():0,(this.utcOffset()-t)%60===0)}function xi(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function bi(){if(!c(this._isDSTShifted))return this._isDSTShifted;var t={};if(b(t,this),t=Bn(t),t._a){var e=t._isUTC?v(t._a):Jn(t._a);this._isDSTShifted=this.isValid()&&P(t._a,e.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function wi(){return!!this.isValid()&&!this._isUTC}function Si(){return!!this.isValid()&&this._isUTC}function Di(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}r.updateOffset=function(){};var ki=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ti=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Pi(t,e){var n,i,r,a=t,o=null;return si(t)?a={ms:t._milliseconds,d:t._days,M:t._months}:u(t)?(a={},e?a[e]=t:a.milliseconds=t):(o=ki.exec(t))?(n="-"===o[1]?-1:1,a={y:0,d:T(o[Wt])*n,h:T(o[Nt])*n,m:T(o[Ut])*n,s:T(o[zt])*n,ms:T(li(1e3*o[Ht]))*n}):(o=Ti.exec(t))?(n="-"===o[1]?-1:1,a={y:Ai(o[2],n),M:Ai(o[3],n),w:Ai(o[4],n),d:Ai(o[5],n),h:Ai(o[6],n),m:Ai(o[7],n),s:Ai(o[8],n)}):null==a?a={}:"object"===typeof a&&("from"in a||"to"in a)&&(r=Mi(Jn(a.from),Jn(a.to)),a={},a.ms=r.milliseconds,a.M=r.months),i=new oi(a),si(t)&&f(t,"_locale")&&(i._locale=t._locale),i}function Ai(t,e){var n=t&&parseFloat(t.replace(",","."));return(isNaN(n)?0:n)*e}function Oi(t,e){var n={};return n.months=e.month()-t.month()+12*(e.year()-t.year()),t.clone().add(n.months,"M").isAfter(e)&&--n.months,n.milliseconds=+e-+t.clone().add(n.months,"M"),n}function Mi(t,e){var n;return t.isValid()&&e.isValid()?(e=di(e,t),t.isBefore(e)?n=Oi(t,e):(n=Oi(e,t),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ci(t,e){return function(n,i){var r,a;return null===i||isNaN(+i)||(R(e,"moment()."+e+"(period, number) is deprecated. Please use moment()."+e+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=i,i=a),n="string"===typeof n?+n:n,r=Pi(n,i),Ri(this,r,t),this}}function Ri(t,e,n,i){var a=e._milliseconds,o=li(e._days),s=li(e._months);t.isValid()&&(i=null==i||i,s&&de(t,Qt(t,"Month")+s*n),o&&te(t,"Date",Qt(t,"Date")+o*n),a&&t._d.setTime(t._d.valueOf()+a*n),i&&r.updateOffset(t,o||s))}Pi.fn=oi.prototype,Pi.invalid=ai;var $i=Ci(1,"add"),Fi=Ci(-1,"subtract");function Ei(t,e){var n=t.diff(e,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Li(t,e){var n=t||Jn(),i=di(n,this).startOf("day"),a=r.calendarFormat(this,i)||"sameElse",o=e&&($(e[a])?e[a].call(this,n):e[a]);return this.format(o||this.localeData().calendar(a,this,Jn(n)))}function Ii(){return new S(this)}function ji(t,e){var n=D(t)?t:Jn(t);return!(!this.isValid()||!n.isValid())&&(e=Z(e)||"millisecond","millisecond"===e?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(e).valueOf())}function Yi(t,e){var n=D(t)?t:Jn(t);return!(!this.isValid()||!n.isValid())&&(e=Z(e)||"millisecond","millisecond"===e?this.valueOf()<n.valueOf():this.clone().endOf(e).valueOf()<n.valueOf())}function Wi(t,e,n,i){var r=D(t)?t:Jn(t),a=D(e)?e:Jn(e);return!!(this.isValid()&&r.isValid()&&a.isValid())&&(i=i||"()",("("===i[0]?this.isAfter(r,n):!this.isBefore(r,n))&&(")"===i[1]?this.isBefore(a,n):!this.isAfter(a,n)))}function Ni(t,e){var n,i=D(t)?t:Jn(t);return!(!this.isValid()||!i.isValid())&&(e=Z(e)||"millisecond","millisecond"===e?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(e).valueOf()<=n&&n<=this.clone().endOf(e).valueOf()))}function Ui(t,e){return this.isSame(t,e)||this.isAfter(t,e)}function zi(t,e){return this.isSame(t,e)||this.isBefore(t,e)}function Hi(t,e,n){var i,r,a;if(!this.isValid())return NaN;if(i=di(t,this),!i.isValid())return NaN;switch(r=6e4*(i.utcOffset()-this.utcOffset()),e=Z(e),e){case"year":a=Vi(this,i)/12;break;case"month":a=Vi(this,i);break;case"quarter":a=Vi(this,i)/3;break;case"second":a=(this-i)/1e3;break;case"minute":a=(this-i)/6e4;break;case"hour":a=(this-i)/36e5;break;case"day":a=(this-i-r)/864e5;break;case"week":a=(this-i-r)/6048e5;break;default:a=this-i}return n?a:k(a)}function Vi(t,e){var n,i,r=12*(e.year()-t.year())+(e.month()-t.month()),a=t.clone().add(r,"months");return e-a<0?(n=t.clone().add(r-1,"months"),i=(e-a)/(a-n)):(n=t.clone().add(r+1,"months"),i=(e-a)/(n-a)),-(r+i)||0}function Bi(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Gi(t){if(!this.isValid())return null;var e=!0!==t,n=e?this.clone().utc():this;return n.year()<0||n.year()>9999?ut(n,e?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):$(Date.prototype.toISOString)?e?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",ut(n,"Z")):ut(n,e?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function qi(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var t="moment",e="";this.isLocal()||(t=0===this.utcOffset()?"moment.utc":"moment.parseZone",e="Z");var n="["+t+'("]',i=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",a=e+'[")]';return this.format(n+i+r+a)}function Ji(t){t||(t=this.isUtc()?r.defaultFormatUtc:r.defaultFormat);var e=ut(this,t);return this.localeData().postformat(e)}function Xi(t,e){return this.isValid()&&(D(t)&&t.isValid()||Jn(t).isValid())?Pi({to:this,from:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Zi(t){return this.from(Jn(),t)}function Ki(t,e){return this.isValid()&&(D(t)&&t.isValid()||Jn(t).isValid())?Pi({from:this,to:t}).locale(this.locale()).humanize(!e):this.localeData().invalidDate()}function Qi(t){return this.to(Jn(),t)}function tr(t){var e;return void 0===t?this._locale._abbr:(e=mn(t),null!=e&&(this._locale=e),this)}r.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",r.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var er=O("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(t){return void 0===t?this.localeData():this.locale(t)});function nr(){return this._locale}var ir=1e3,rr=60*ir,ar=60*rr,or=3506328*ar;function sr(t,e){return(t%e+e)%e}function lr(t,e,n){return t<100&&t>=0?new Date(t+400,e,n)-or:new Date(t,e,n).valueOf()}function cr(t,e,n){return t<100&&t>=0?Date.UTC(t+400,e,n)-or:Date.UTC(t,e,n)}function ur(t){var e;if(t=Z(t),void 0===t||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?cr:lr;switch(t){case"year":e=n(this.year(),0,1);break;case"quarter":e=n(this.year(),this.month()-this.month()%3,1);break;case"month":e=n(this.year(),this.month(),1);break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":e=n(this.year(),this.month(),this.date());break;case"hour":e=this._d.valueOf(),e-=sr(e+(this._isUTC?0:this.utcOffset()*rr),ar);break;case"minute":e=this._d.valueOf(),e-=sr(e,rr);break;case"second":e=this._d.valueOf(),e-=sr(e,ir);break}return this._d.setTime(e),r.updateOffset(this,!0),this}function hr(t){var e;if(t=Z(t),void 0===t||"millisecond"===t||!this.isValid())return this;var n=this._isUTC?cr:lr;switch(t){case"year":e=n(this.year()+1,0,1)-1;break;case"quarter":e=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":e=n(this.year(),this.month()+1,1)-1;break;case"week":e=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":e=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":e=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":e=this._d.valueOf(),e+=ar-sr(e+(this._isUTC?0:this.utcOffset()*rr),ar)-1;break;case"minute":e=this._d.valueOf(),e+=rr-sr(e,rr)-1;break;case"second":e=this._d.valueOf(),e+=ir-sr(e,ir)-1;break}return this._d.setTime(e),r.updateOffset(this,!0),this}function dr(){return this._d.valueOf()-6e4*(this._offset||0)}function fr(){return Math.floor(this.valueOf()/1e3)}function pr(){return new Date(this.valueOf())}function vr(){var t=this;return[t.year(),t.month(),t.date(),t.hour(),t.minute(),t.second(),t.millisecond()]}function gr(){var t=this;return{years:t.year(),months:t.month(),date:t.date(),hours:t.hours(),minutes:t.minutes(),seconds:t.seconds(),milliseconds:t.milliseconds()}}function yr(){return this.isValid()?this.toISOString():null}function mr(){return m(this)}function _r(){return p({},y(this))}function xr(){return y(this).overflow}function br(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function wr(t,e){st(0,[t,t.length],0,e)}function Sr(t){return Pr.call(this,t,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Dr(t){return Pr.call(this,t,this.isoWeek(),this.isoWeekday(),1,4)}function kr(){return ke(this.year(),1,4)}function Tr(){var t=this.localeData()._week;return ke(this.year(),t.dow,t.doy)}function Pr(t,e,n,i,r){var a;return null==t?De(this,i,r).year:(a=ke(t,i,r),e>a&&(e=a),Ar.call(this,t,e,n,i,r))}function Ar(t,e,n,i,r){var a=Se(t,e,n,i,r),o=be(a.year,0,a.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Or(t){return null==t?Math.ceil((this.month()+1)/3):this.month(3*(t-1)+this.month()%3)}st(0,["gg",2],0,function(){return this.weekYear()%100}),st(0,["GG",2],0,function(){return this.isoWeekYear()%100}),wr("gggg","weekYear"),wr("ggggg","weekYear"),wr("GGGG","isoWeekYear"),wr("GGGGG","isoWeekYear"),X("weekYear","gg"),X("isoWeekYear","GG"),tt("weekYear",1),tt("isoWeekYear",1),Mt("G",Dt),Mt("g",Dt),Mt("GG",yt,ft),Mt("gg",yt,ft),Mt("GGGG",bt,vt),Mt("gggg",bt,vt),Mt("GGGGG",wt,gt),Mt("ggggg",wt,gt),Lt(["gggg","ggggg","GGGG","GGGGG"],function(t,e,n,i){e[i.substr(0,2)]=T(t)}),Lt(["gg","GG"],function(t,e,n,i){e[i]=r.parseTwoDigitYear(t)}),st("Q",0,"Qo","quarter"),X("quarter","Q"),tt("quarter",7),Mt("Q",dt),Et("Q",function(t,e){e[Yt]=3*(T(t)-1)}),st("D",["DD",2],"Do","date"),X("date","D"),tt("date",9),Mt("D",yt),Mt("DD",yt,ft),Mt("Do",function(t,e){return t?e._dayOfMonthOrdinalParse||e._ordinalParse:e._dayOfMonthOrdinalParseLenient}),Et(["D","DD"],Wt),Et("Do",function(t,e){e[Wt]=T(t.match(yt)[0])});var Mr=Kt("Date",!0);function Cr(t){var e=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==t?e:this.add(t-e,"d")}st("DDD",["DDDD",3],"DDDo","dayOfYear"),X("dayOfYear","DDD"),tt("dayOfYear",4),Mt("DDD",xt),Mt("DDDD",pt),Et(["DDD","DDDD"],function(t,e,n){n._dayOfYear=T(t)}),st("m",["mm",2],0,"minute"),X("minute","m"),tt("minute",14),Mt("m",yt),Mt("mm",yt,ft),Et(["m","mm"],Ut);var Rr=Kt("Minutes",!1);st("s",["ss",2],0,"second"),X("second","s"),tt("second",15),Mt("s",yt),Mt("ss",yt,ft),Et(["s","ss"],zt);var $r,Fr=Kt("Seconds",!1);for(st("S",0,0,function(){return~~(this.millisecond()/100)}),st(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),st(0,["SSS",3],0,"millisecond"),st(0,["SSSS",4],0,function(){return 10*this.millisecond()}),st(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),st(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),st(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),st(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),st(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),X("millisecond","ms"),tt("millisecond",16),Mt("S",xt,dt),Mt("SS",xt,ft),Mt("SSS",xt,pt),$r="SSSS";$r.length<=9;$r+="S")Mt($r,St);function Er(t,e){e[Ht]=T(1e3*("0."+t))}for($r="S";$r.length<=9;$r+="S")Et($r,Er);var Lr=Kt("Milliseconds",!1);function Ir(){return this._isUTC?"UTC":""}function jr(){return this._isUTC?"Coordinated Universal Time":""}st("z",0,0,"zoneAbbr"),st("zz",0,0,"zoneName");var Yr=S.prototype;function Wr(t){return Jn(1e3*t)}function Nr(){return Jn.apply(null,arguments).parseZone()}function Ur(t){return t}Yr.add=$i,Yr.calendar=Li,Yr.clone=Ii,Yr.diff=Hi,Yr.endOf=hr,Yr.format=Ji,Yr.from=Xi,Yr.fromNow=Zi,Yr.to=Ki,Yr.toNow=Qi,Yr.get=ee,Yr.invalidAt=xr,Yr.isAfter=ji,Yr.isBefore=Yi,Yr.isBetween=Wi,Yr.isSame=Ni,Yr.isSameOrAfter=Ui,Yr.isSameOrBefore=zi,Yr.isValid=mr,Yr.lang=er,Yr.locale=tr,Yr.localeData=nr,Yr.max=Zn,Yr.min=Xn,Yr.parsingFlags=_r,Yr.set=ne,Yr.startOf=ur,Yr.subtract=Fi,Yr.toArray=vr,Yr.toObject=gr,Yr.toDate=pr,Yr.toISOString=Gi,Yr.inspect=qi,Yr.toJSON=yr,Yr.toString=Bi,Yr.unix=fr,Yr.valueOf=dr,Yr.creationData=br,Yr.year=Xt,Yr.isLeapYear=Zt,Yr.weekYear=Sr,Yr.isoWeekYear=Dr,Yr.quarter=Yr.quarters=Or,Yr.month=fe,Yr.daysInMonth=pe,Yr.week=Yr.weeks=Me,Yr.isoWeek=Yr.isoWeeks=Ce,Yr.weeksInYear=Tr,Yr.isoWeeksInYear=kr,Yr.date=Mr,Yr.day=Yr.days=ze,Yr.weekday=He,Yr.isoWeekday=Ve,Yr.dayOfYear=Cr,Yr.hour=Yr.hours=ln,Yr.minute=Yr.minutes=Rr,Yr.second=Yr.seconds=Fr,Yr.millisecond=Yr.milliseconds=Lr,Yr.utcOffset=pi,Yr.utc=gi,Yr.local=yi,Yr.parseZone=mi,Yr.hasAlignedHourOffset=_i,Yr.isDST=xi,Yr.isLocal=wi,Yr.isUtcOffset=Si,Yr.isUtc=Di,Yr.isUTC=Di,Yr.zoneAbbr=Ir,Yr.zoneName=jr,Yr.dates=O("dates accessor is deprecated. Use date instead.",Mr),Yr.months=O("months accessor is deprecated. Use month instead",fe),Yr.years=O("years accessor is deprecated. Use year instead",Xt),Yr.zone=O("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",vi),Yr.isDSTShifted=O("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",bi);var zr=L.prototype;function Hr(t,e,n,i){var r=mn(),a=v().set(i,e);return r[n](a,t)}function Vr(t,e,n){if(u(t)&&(e=t,t=void 0),t=t||"",null!=e)return Hr(t,e,n,"month");var i,r=[];for(i=0;i<12;i++)r[i]=Hr(t,i,n,"month");return r}function Br(t,e,n,i){"boolean"===typeof t?(u(e)&&(n=e,e=void 0),e=e||""):(e=t,n=e,t=!1,u(e)&&(n=e,e=void 0),e=e||"");var r,a=mn(),o=t?a._week.dow:0;if(null!=n)return Hr(e,(n+o)%7,i,"day");var s=[];for(r=0;r<7;r++)s[r]=Hr(e,(r+o)%7,i,"day");return s}function Gr(t,e){return Vr(t,e,"months")}function qr(t,e){return Vr(t,e,"monthsShort")}function Jr(t,e,n){return Br(t,e,n,"weekdays")}function Xr(t,e,n){return Br(t,e,n,"weekdaysShort")}function Zr(t,e,n){return Br(t,e,n,"weekdaysMin")}zr.calendar=j,zr.longDateFormat=W,zr.invalidDate=U,zr.ordinal=V,zr.preparse=Ur,zr.postformat=Ur,zr.relativeTime=G,zr.pastFuture=q,zr.set=F,zr.months=se,zr.monthsShort=ce,zr.monthsParse=he,zr.monthsRegex=me,zr.monthsShortRegex=ge,zr.week=Te,zr.firstDayOfYear=Oe,zr.firstDayOfWeek=Ae,zr.weekdays=Le,zr.weekdaysMin=We,zr.weekdaysShort=je,zr.weekdaysParse=Ue,zr.weekdaysRegex=Ge,zr.weekdaysShortRegex=Je,zr.weekdaysMinRegex=Ze,zr.isPM=rn,zr.meridiem=on,vn("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(t){var e=t%10,n=1===T(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+n}}),r.lang=O("moment.lang is deprecated. Use moment.locale instead.",vn),r.langData=O("moment.langData is deprecated. Use moment.localeData instead.",mn);var Kr=Math.abs;function Qr(){var t=this._data;return this._milliseconds=Kr(this._milliseconds),this._days=Kr(this._days),this._months=Kr(this._months),t.milliseconds=Kr(t.milliseconds),t.seconds=Kr(t.seconds),t.minutes=Kr(t.minutes),t.hours=Kr(t.hours),t.months=Kr(t.months),t.years=Kr(t.years),this}function ta(t,e,n,i){var r=Pi(e,n);return t._milliseconds+=i*r._milliseconds,t._days+=i*r._days,t._months+=i*r._months,t._bubble()}function ea(t,e){return ta(this,t,e,1)}function na(t,e){return ta(this,t,e,-1)}function ia(t){return t<0?Math.floor(t):Math.ceil(t)}function ra(){var t,e,n,i,r,a=this._milliseconds,o=this._days,s=this._months,l=this._data;return a>=0&&o>=0&&s>=0||a<=0&&o<=0&&s<=0||(a+=864e5*ia(oa(s)+o),o=0,s=0),l.milliseconds=a%1e3,t=k(a/1e3),l.seconds=t%60,e=k(t/60),l.minutes=e%60,n=k(e/60),l.hours=n%24,o+=k(n/24),r=k(aa(o)),s+=r,o-=ia(oa(r)),i=k(s/12),s%=12,l.days=o,l.months=s,l.years=i,this}function aa(t){return 4800*t/146097}function oa(t){return 146097*t/4800}function sa(t){if(!this.isValid())return NaN;var e,n,i=this._milliseconds;if(t=Z(t),"month"===t||"quarter"===t||"year"===t)switch(e=this._days+i/864e5,n=this._months+aa(e),t){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(e=this._days+Math.round(oa(this._months)),t){case"week":return e/7+i/6048e5;case"day":return e+i/864e5;case"hour":return 24*e+i/36e5;case"minute":return 1440*e+i/6e4;case"second":return 86400*e+i/1e3;case"millisecond":return Math.floor(864e5*e)+i;default:throw new Error("Unknown unit "+t)}}function la(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*T(this._months/12):NaN}function ca(t){return function(){return this.as(t)}}var ua=ca("ms"),ha=ca("s"),da=ca("m"),fa=ca("h"),pa=ca("d"),va=ca("w"),ga=ca("M"),ya=ca("Q"),ma=ca("y");function _a(){return Pi(this)}function xa(t){return t=Z(t),this.isValid()?this[t+"s"]():NaN}function ba(t){return function(){return this.isValid()?this._data[t]:NaN}}var wa=ba("milliseconds"),Sa=ba("seconds"),Da=ba("minutes"),ka=ba("hours"),Ta=ba("days"),Pa=ba("months"),Aa=ba("years");function Oa(){return k(this.days()/7)}var Ma=Math.round,Ca={ss:44,s:45,m:45,h:22,d:26,M:11};function Ra(t,e,n,i,r){return r.relativeTime(e||1,!!n,t,i)}function $a(t,e,n){var i=Pi(t).abs(),r=Ma(i.as("s")),a=Ma(i.as("m")),o=Ma(i.as("h")),s=Ma(i.as("d")),l=Ma(i.as("M")),c=Ma(i.as("y")),u=r<=Ca.ss&&["s",r]||r<Ca.s&&["ss",r]||a<=1&&["m"]||a<Ca.m&&["mm",a]||o<=1&&["h"]||o<Ca.h&&["hh",o]||s<=1&&["d"]||s<Ca.d&&["dd",s]||l<=1&&["M"]||l<Ca.M&&["MM",l]||c<=1&&["y"]||["yy",c];return u[2]=e,u[3]=+t>0,u[4]=n,Ra.apply(null,u)}function Fa(t){return void 0===t?Ma:"function"===typeof t&&(Ma=t,!0)}function Ea(t,e){return void 0!==Ca[t]&&(void 0===e?Ca[t]:(Ca[t]=e,"s"===t&&(Ca.ss=e-1),!0))}function La(t){if(!this.isValid())return this.localeData().invalidDate();var e=this.localeData(),n=$a(this,!t,e);return t&&(n=e.pastFuture(+this,n)),e.postformat(n)}var Ia=Math.abs;function ja(t){return(t>0)-(t<0)||+t}function Ya(){if(!this.isValid())return this.localeData().invalidDate();var t,e,n,i=Ia(this._milliseconds)/1e3,r=Ia(this._days),a=Ia(this._months);t=k(i/60),e=k(t/60),i%=60,t%=60,n=k(a/12),a%=12;var o=n,s=a,l=r,c=e,u=t,h=i?i.toFixed(3).replace(/\.?0+$/,""):"",d=this.asSeconds();if(!d)return"P0D";var f=d<0?"-":"",p=ja(this._months)!==ja(d)?"-":"",v=ja(this._days)!==ja(d)?"-":"",g=ja(this._milliseconds)!==ja(d)?"-":"";return f+"P"+(o?p+o+"Y":"")+(s?p+s+"M":"")+(l?v+l+"D":"")+(c||u||h?"T":"")+(c?g+c+"H":"")+(u?g+u+"M":"")+(h?g+h+"S":"")}var Wa=oi.prototype;return Wa.isValid=ri,Wa.abs=Qr,Wa.add=ea,Wa.subtract=na,Wa.as=sa,Wa.asMilliseconds=ua,Wa.asSeconds=ha,Wa.asMinutes=da,Wa.asHours=fa,Wa.asDays=pa,Wa.asWeeks=va,Wa.asMonths=ga,Wa.asQuarters=ya,Wa.asYears=ma,Wa.valueOf=la,Wa._bubble=ra,Wa.clone=_a,Wa.get=xa,Wa.milliseconds=wa,Wa.seconds=Sa,Wa.minutes=Da,Wa.hours=ka,Wa.days=Ta,Wa.weeks=Oa,Wa.months=Pa,Wa.years=Aa,Wa.humanize=La,Wa.toISOString=Ya,Wa.toString=Ya,Wa.toJSON=Ya,Wa.locale=tr,Wa.localeData=nr,Wa.toIsoString=O("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Ya),Wa.lang=er,st("X",0,0,"unix"),st("x",0,0,"valueOf"),Mt("x",Dt),Mt("X",Pt),Et("X",function(t,e,n){n._d=new Date(1e3*parseFloat(t,10))}),Et("x",function(t,e,n){n._d=new Date(T(t))}),r.version="2.24.0",a(Jn),r.fn=Yr,r.min=Qn,r.max=ti,r.now=ei,r.utc=v,r.unix=Wr,r.months=Gr,r.isDate=h,r.locale=vn,r.invalid=_,r.duration=Pi,r.isMoment=D,r.weekdays=Jr,r.parseZone=Nr,r.localeData=mn,r.isDuration=si,r.monthsShort=qr,r.weekdaysMin=Zr,r.defineLocale=gn,r.updateLocale=yn,r.locales=_n,r.weekdaysShort=Xr,r.normalizeUnits=Z,r.relativeTimeRounding=Fa,r.relativeTimeThreshold=Ea,r.calendarFormat=Ei,r.prototype=Yr,r.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},r})}).call(this,n("0de9")["default"],n("62e4")(t))},2877:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):r&&(l=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(t,e){return l.call(e),u(t,e)}}else{var h=c.beforeCreate;c.beforeCreate=h?[].concat(h,l):[l]}return{exports:t,options:c}}n.d(e,"a",function(){return i})},"293f":function(t,e,n){},"2de7":function(t,e,n){},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return p}),n.d(e,"install",function(){return A}),n.d(e,"mapState",function(){return O}),n.d(e,"mapMutations",function(){return M}),n.d(e,"mapGetters",function(){return C}),n.d(e,"mapActions",function(){return R}),n.d(e,"createNamespacedHelpers",function(){return $});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){o(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function d(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;d(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){d([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new c(e,n);if(0===t.length)this.root=r;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],r)}e.modules&&o(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var p=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!==typeof window&&window.Vue&&A(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var o=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(o,t,e)},this.commit=function(t,e,n){return c.call(o,t,e,n)},this.strict=i,_(this,r,[],this._modules.root),m(this,r),n.forEach(function(t){return t(e)}),f.config.devtools&&a(this)},v={state:{configurable:!0}};function g(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;_(t,n,[],t._modules.root,!0),m(t,n,e)}function m(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,a={};o(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:a}),f.config.silent=s,t.strict&&k(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),f.nextTick(function(){return i.$destroy()}))}function _(t,e,n,i,r){var a=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o]=i),!a&&!r){var s=T(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){f.set(s,l,i.state)})}var c=i.context=x(t,o,n);i.forEachMutation(function(e,n){var i=o+n;w(t,i,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:o+n,r=e.handler||e;S(t,i,r,c)}),i.forEachGetter(function(e,n){var i=o+n;D(t,i,e,c)}),i.forEachChild(function(i,a){_(t,e,n.concat(a),i,r)})}function x(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var a=P(n,i,r),o=a.payload,s=a.options,l=a.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:i?t.commit:function(n,i,r){var a=P(n,i,r),o=a.payload,s=a.options,l=a.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return T(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var a=r.slice(i);Object.defineProperty(n,a,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function w(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function S(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function D(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function k(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function T(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function P(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function A(t){f&&t===f||(f=t,i(f))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},p.prototype.commit=function(t,e,n){var i=this,r=P(t,e,n),a=r.type,o=r.payload,s=(r.options,{type:a,payload:o}),l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},p.prototype.dispatch=function(t,e){var n=this,i=P(t,e),r=i.type,a=i.payload,o={type:r,payload:a},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(o,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(a)})):s[0](a)},p.prototype.subscribe=function(t){return g(t,this._subscribers)},p.prototype.subscribeAction=function(t){return g(t,this._actionSubscribers)},p.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},p.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},p.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),_(this,this.state,t,this._modules.get(t),n.preserveState),m(this,this.state)},p.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=T(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])}),y(this)},p.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},p.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(p.prototype,v);var O=E(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=L(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),M=E(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var a=L(this.$store,"mapMutations",t);if(!a)return;i=a.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),C=E(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||L(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),R=E(function(t,e){var n={};return F(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var a=L(this.$store,"mapActions",t);if(!a)return;i=a.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),$=function(t){return{mapState:O.bind(null,t),mapGetters:C.bind(null,t),mapMutations:M.bind(null,t),mapActions:R.bind(null,t)}};function F(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function E(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function L(t,e,n){var i=t._modulesNamespaceMap[n];return i}var I={Store:p,install:A,version:"3.0.1",mapState:O,mapMutations:M,mapGetters:C,mapActions:R,createNamespacedHelpers:$};e["default"]=I},"355e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.decodeUserInfo=e.updateUser=e.getUser=e.getOpenId=e.loginWechat=e.getUserInfoWechat=e.login=void 0;var i=n("820e");function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o=function(){var t=null,e={};return new Promise(function(n,i){s().then(function(n){return t=n.userInfo,e={},e.encryptedData=n.encryptedData,e.iv=n.iv,t.phoneData=e,l()}).then(function(t){return c(t)}).then(function(e){if(e.data.data.unionid)return t.OpenId=e.data.data.unionid,u(t.OpenId)}).then(function(e){e.data.data&&(t.firstLogin=null==e.data.data.avatarUrl&&null==e.data.data.nickName,t=r({},e.data.data,t),n(t))}).catch(function(t){i(t)})})};e.login=o;var s=function(){return new Promise(function(e,n){t.getUserInfo({provider:"weixin",withCredentials:!0,success:function(t){e(t)},fail:function(t){n(t)}})})};e.getUserInfoWechat=s;var l=function(){return new Promise(function(e,n){t.login({provider:"weixin",success:function(t){t.code&&t.code.length>0?e(t.code):n(t)},fail:function(t){n(t)}})})};e.loginWechat=l;var c=function(t){return(0,i.request)({url:"user/getOpenId?code=".concat(t),method:"GET"})};e.getOpenId=c;var u=function(t){return(0,i.request)({url:"user/getUserInfo?unionId=".concat(t),method:"GET"})};e.getUser=u;var h=function(t){return(0,i.request)({url:"user/updateUserInfo",method:"POST",data:t})};e.updateUser=h;var d=function(t,e,n){return(0,i.request)({url:"user/decodeUserInfo",method:"POST",data:{encryptedData:t,iv:e,unionId:n}})};e.decodeUserInfo=d}).call(this,n("6e42")["default"])},"3be5":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.updateDeviceComment=e.getOrders=e.getOrderDetailByDeviceId=e.getOrderDetail=e.registerDevice=e.getDeviceName=e.services=e.products=e.buyService=e.addDevice=e.removeDevice=e.getDevice=e.devices=e.product=void 0;var i=n("820e"),r=function(e){return console.log(t(e," at api\\device.js:4")),(0,i.request)({url:"device/listDeviceTypes?brandId=".concat(e),method:"GET"})};e.product=r;var a=function(t){return(0,i.request)({url:"device/listUserBindDevices?unionId=".concat(t),method:"GET"})};e.devices=a;var o=function(t){return(0,i.request)({url:"device/getDeviceDetail1?deviceName=".concat(t),method:"GET"})};e.getDevice=o;var s=function(t,e){return(0,i.request)({url:"device/deleteUserBindDevice?deviceId=".concat(t,"&unionId=").concat(e),method:"DELETE"})};e.removeDevice=s;var l=function(t){return(0,i.request)({url:"device/bindDevice",method:"POST",data:t})};e.addDevice=l;var c=function(t){return(0,i.request)({url:"service/createOrder",method:"POST",data:t})};e.buyService=c;var u=function(){return(0,i.request)({url:"device/listBrands",method:"GET"})};e.products=u;var h=function(t){return(0,i.request)({url:"service/listServiceConfigs?productKey=".concat(t),method:"GET"})};e.services=h;var d=function(t){return(0,i.request)({url:"device/getDeviceName?productKey=".concat(t),method:"GET"})};e.getDeviceName=d;var f=function(t){return(0,i.request)({url:"device/registerDevice?productKey=".concat(t),method:"GET"})};e.registerDevice=f;var p=function(t){return(0,i.request)({url:"service/getOrderDetail?orderId=".concat(t),method:"GET"})};e.getOrderDetail=p;var v=function(t){return(0,i.request)({url:"service/getOrderDetailByDeviceId?deviceId=".concat(t),method:"GET"})};e.getOrderDetailByDeviceId=v;var g=function(t){return(0,i.request)({url:"service/listOrders?unionId=".concat(t),method:"GET"})};e.getOrders=g;var y=function(t,e){return(0,i.request)({url:"device/updateDeviceComment",data:{deviceComment:t,deviceId:e},method:"post"})};e.updateDeviceComment=y}).call(this,n("0de9")["default"])},"62e4":function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function d(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function g(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}g("slot,component",!0);var y=g("key,ref,slot,slot-scope,is");function m(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var _=Object.prototype.hasOwnProperty;function x(t,e){return _.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),D=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),k=/\B([A-Z])/g,T=b(function(t){return t.replace(k,"-$1").toLowerCase()});function P(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function A(t,e){return t.bind(e)}var O=Function.prototype.bind?A:P;function M(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function C(t,e){for(var n in e)t[n]=e[n];return t}function R(t){for(var e={},n=0;n<t.length;n++)t[n]&&C(e,t[n]);return e}function $(t,e,n){}var F=function(t,e,n){return!1},E=function(t){return t};function L(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,n){return L(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return L(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(L(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var Y=["component","directive","filter"],W=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],N={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:F,isReservedAttr:F,isUnknownElement:F,getTagNamespace:$,parsePlatformTagName:E,mustUseProp:F,async:!0,_lifecycleHooks:W},U=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function z(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+U.source+".$_\\d]");function B(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,q="__proto__"in{},J="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Z=X&&WXEnvironment.platform.toLowerCase(),K=J&&window.navigator.userAgent.toLowerCase(),Q=K&&/msie|trident/.test(K),tt=(K&&K.indexOf("msie 9.0"),K&&K.indexOf("edge/")>0),et=(K&&K.indexOf("android"),K&&/iphone|ipad|ipod|ios/.test(K)||"ios"===Z),nt=(K&&/chrome\/\d+/.test(K),K&&/phantomjs/.test(K),K&&K.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(er){}var rt=function(){return void 0===G&&(G=!J&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=$,ut=0,ht=function(){this.id=ut++,this.subs=[]};function dt(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function ft(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){m(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var pt=function(t,e,n,i,r,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(pt.prototype,vt);var gt=function(t){void 0===t&&(t="");var e=new pt;return e.text=t,e.isComment=!0,e};function yt(t){return new pt(void 0,void 0,void 0,String(t))}function mt(t){var e=new pt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var _t=Array.prototype,xt=Object.create(_t),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=_t[t];H(xt,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var wt=Object.getOwnPropertyNames(xt),St=!0;function Dt(t){St=t}var kt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(q?t.push!==t.__proto__.push?Pt(t,xt,wt):Tt(t,xt):Pt(t,xt,wt),this.observeArray(t)):this.walk(t)};function Tt(t,e){t.__proto__=e}function Pt(t,e,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];H(t,a,e[a])}}function At(t,e){var n;if(l(t)&&!(t instanceof pt))return x(t,"__ob__")&&t.__ob__ instanceof kt?n=t.__ob__:St&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new kt(t)),e&&n&&n.vmCount++,n}function Ot(t,e,n,i,r){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&At(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Rt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&At(e),a.notify())}})}}function Mt(t,e,n){if(Array.isArray(t)&&d(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Ot(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Ct(t,e){if(Array.isArray(t)&&d(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||x(t,e)&&(delete t[e],n&&n.dep.notify())}}function Rt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Rt(e)}kt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ot(t,e[n])},kt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)At(t[e])};var $t=N.optionMergeStrategies;function Ft(t,e){if(!e)return t;for(var n,i,r,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=t[n],r=e[n],x(t,n)?i!==r&&u(i)&&u(r)&&Ft(i,r):Mt(t,n,r));return t}function Et(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?Ft(i,r):r}:e?t?function(){return Ft("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Lt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function jt(t,e,n,i){var r=Object.create(t||null);return e?C(r,e):r}$t.data=function(t,e,n){return n?Et(t,e,n):e&&"function"!==typeof e?t:Et(t,e)},W.forEach(function(t){$t[t]=Lt}),Y.forEach(function(t){$t[t+"s"]=jt}),$t.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in C(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},$t.props=$t.methods=$t.inject=$t.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return C(r,t),e&&C(r,e),r},$t.provide=Et;var Yt=function(t,e){return void 0===e?t:e};function Wt(t,e){var n=t.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=S(r),o[a]={type:null})}else if(u(n))for(var s in n)r=n[s],a=S(s),o[a]=u(r)?r:{type:r};else 0;t.props=o}}function Nt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var a in n){var o=n[a];i[a]=u(o)?C({from:a},o):{from:o}}else 0}}function Ut(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function zt(t,e,n){if("function"===typeof e&&(e=e.options),Wt(e,n),Nt(e,n),Ut(e),!e._base&&(e.extends&&(t=zt(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=zt(t,e.mixins[i],n);var a,o={};for(a in t)s(a);for(a in e)x(t,a)||s(a);function s(i){var r=$t[i]||Yt;o[i]=r(t[i],e[i],n,i)}return o}function Ht(t,e,n,i){if("string"===typeof n){var r=t[e];if(x(r,n))return r[n];var a=S(n);if(x(r,a))return r[a];var o=D(a);if(x(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Vt(t,e,n,i){var r=e[t],a=!x(n,t),o=n[t],s=Jt(Boolean,r.type);if(s>-1)if(a&&!x(r,"default"))o=!1;else if(""===o||o===T(t)){var l=Jt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Bt(i,r,t);var c=St;Dt(!0),At(o),Dt(c)}return o}function Bt(t,e,n){if(x(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Gt(e.type)?i.call(t):i}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function qt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return qt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(qt(e[n],t))return n;return-1}function Xt(t,e,n){dt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,t,e,n);if(o)return}catch(er){Kt(er,i,"errorCaptured hook")}}}Kt(t,e,n)}finally{ft()}}function Zt(t,e,n,i,r){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&f(a)&&!a._handled&&(a.catch(function(t){return Xt(t,i,r+" (Promise/async)")}),a._handled=!0)}catch(er){Xt(er,i,r)}return a}function Kt(t,e,n){if(N.errorHandler)try{return N.errorHandler.call(null,t,e,n)}catch(er){er!==t&&Qt(er,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!J&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout($)}}else if(Q||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,oe=new MutationObserver(ie),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(er){Xt(er,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof pt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var de=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Zt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)Zt(r[a],null,t,e,"v-on handler")}return n.fns=t,n}function pe(t,e,n,r,o,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=de(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),a(h.once)&&(c=t[l]=o(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=de(l),r(h.name,e[l],h.capture))}function ve(t,e,n){var a=e.options.props;if(!i(a)){var o={},s=t.attrs,l=t.props;if(r(s)||r(l))for(var c in a){var u=T(c);ge(o,l,c,u,!0)||ge(o,s,c,u,!1)}return o}}function ge(t,e,n,i,a){if(r(e)){if(x(e,n))return t[n]=e[n],a||delete e[n],!0;if(x(e,i))return t[n]=e[i],a||delete e[i],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?xe(t):void 0}function _e(t){return r(t)&&r(t.text)&&o(t.isComment)}function xe(t,e){var n,o,l,c,u=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=xe(o,(e||"")+"_"+n),_e(o[0])&&_e(c)&&(u[l]=yt(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?_e(c)?u[l]=yt(c.text+o):""!==o&&u.push(yt(o)):_e(o)&&_e(c)?u[l]=yt(c.text+o.text):(a(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(Dt(!1),Object.keys(e).forEach(function(n){Ot(t,n,e[n])}),Dt(!0))}function Se(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&x(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;n[a]="function"===typeof l?l.call(e):l}else 0}}return n}}function De(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var a=t[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(ke)&&delete n[c];return n}function ke(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Te(t,e,i){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=Pe(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Ae(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),H(r,"$stable",o),H(r,"$key",s),H(r,"$hasNormal",a),r}function Pe(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ae(t,e){return function(){return t[e]}}function Oe(t,e){var n,i,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,a=t.length;i<a;i++)n[i]=e(t[i],i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length)),u=c.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=e(t[s],s,i);return r(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var r,a=this.$scopedSlots[t];a?(n=n||{},i&&(n=C(C({},i),n)),r=a(n)||e):r=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Ce(t){return Ht(this.$options,"filters",t,!0)||E}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,i,r){var a=N.keyCodes[e]||n;return r&&i&&!N.keyCodes[e]?Re(r,i):a?Re(a,t):i?T(i)!==e:void 0}function Fe(t,e,n,i,r){if(n)if(l(n)){var a;Array.isArray(n)&&(n=R(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=i||N.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(o),c=T(o);if(!(l in a)&&!(c in a)&&(a[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Ee(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ie(i,"__static__"+t,!1),i)}function Le(t,e,n){return Ie(t,"__once__"+e+(n?"_"+n:""),!0),t}function Ie(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&je(t[i],e+"_"+i,n);else je(t,e,n)}function je(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ye(t,e){if(e)if(u(e)){var n=t.on=t.on?C({},t.on):{};for(var i in e){var r=n[i],a=e[i];n[i]=r?[].concat(r,a):a}}else;return t}function We(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?We(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return i&&(e.$key=i),e}function Ne(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function Ue(t,e){return"string"===typeof t?e+t:t}function ze(t){t._o=Le,t._n=v,t._s=p,t._l=Oe,t._t=Me,t._q=L,t._i=I,t._m=Ee,t._f=Ce,t._k=$e,t._b=Fe,t._v=yt,t._e=gt,t._u=We,t._g=Ye,t._d=Ne,t._p=Ue}function He(t,e,i,r,o){var s,l=this,c=o.options;x(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Se(c.inject,r),this.slots=function(){return l.$slots||Te(t.scopedSlots,l.$slots=De(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Te(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Te(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var a=rn(s,t,e,n,i,h);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=r),a}:this._c=function(t,e,n,i){return rn(s,t,e,n,i,h)}}function Ve(t,e,i,a,o){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Ge(l,i.attrs),r(i.props)&&Ge(l,i.props);var h=new He(i,l,o,a,t),d=s.render.call(null,h._c,h);if(d instanceof pt)return Be(d,i,h.parent,s,h);if(Array.isArray(d)){for(var f=me(d)||[],p=new Array(f.length),v=0;v<f.length;v++)p[v]=Be(f[v],i,h.parent,s,h);return p}}function Be(t,e,n,i,r){var a=mt(t);return a.fnContext=n,a.fnOptions=i,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Ge(t,e){for(var n in e)t[S(n)]=e[n]}ze(He.prototype);var qe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;qe.prepatch(n,n)}else{var i=t.componentInstance=Ze(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Pn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Cn(n,"mounted")),t.data.keepAlive&&(e._isMounted?zn(n):On(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Je=Object.keys(qe);function Xe(t,e,n,o,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=pn(u,c),void 0===t))return fn(u,e,n,o,s);e=e||{},di(t),r(e.model)&&tn(t.options,e);var h=ve(e,t,s);if(a(t.options.functional))return Ve(t,h,e,n,o);var d=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ke(e);var p=t.options.name||s,v=new pt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:d,tag:s,children:o},u);return v}}}function Ze(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ke(t){for(var e=t.hook||(t.hook={}),n=0;n<Je.length;n++){var i=Je[n],r=e[i],a=qe[i];r===a||r&&r._merged||(e[i]=r?Qe(a,r):a)}}function Qe(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[i],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var en=1,nn=2;function rn(t,e,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=nn),an(t,e,n,i,r)}function an(t,e,n,i,a){if(r(n)&&r(n.__ob__))return gt();if(r(n)&&r(n.is)&&(e=n.is),!e)return gt();var o,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===nn?i=me(i):a===en&&(i=ye(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||N.getTagNamespace(e),o=N.isReservedTag(e)?new pt(N.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ht(t.$options,"components",e))?new pt(e,n,i,void 0,void 0,t):Xe(l,n,t,i,e)):o=Xe(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(s)&&on(o,s),r(n)&&sn(n),o):gt()}function on(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];r(l.tag)&&(i(l.ns)||a(n)&&"svg"!==l.tag)&&on(l,e,n)}}function sn(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function ln(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=De(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return rn(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return rn(t,e,n,i,r,!0)};var a=i&&i.data;Ot(t,"$attrs",a&&a.attrs||n,null,!0),Ot(t,"$listeners",e._parentListeners||n,null,!0)}var cn,un=null;function hn(t){ze(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=Te(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{un=e,t=i.call(e._renderProxy,e.$createElement)}catch(er){Xt(er,e,"render"),t=e._vnode}finally{un=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof pt||(t=gt()),t.parent=r,t}}function dn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function fn(t,e,n,i,r){var a=gt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:i,tag:r},a}function pn(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=un;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return m(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=j(function(n){t.resolved=dn(n,e),s?o.length=0:h(!0)}),p=j(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),v=t(d,p);return l(v)&&(f(v)?i(t.resolved)&&v.then(d,p):f(v.component)&&(v.component.then(d,p),r(v.error)&&(t.errorComp=dn(v.error,e)),r(v.loading)&&(t.loadingComp=dn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},v.delay||200)),r(v.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&p(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&bn(t,e)}function mn(t,e){cn.$on(t,e)}function _n(t,e){cn.$off(t,e)}function xn(t,e){var n=cn;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function bn(t,e,n){cn=t,pe(e,n||{},mn,_n,xn,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?M(n):n;for(var i=M(arguments,1),r='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Zt(n[a],e,i,e,r)}return e}}var Sn=null;function Dn(t){var e=Sn;return Sn=t,function(){Sn=e}}function kn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Tn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,a=Dn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Cn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||m(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Cn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pn(t,e,i,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){Dt(!1);for(var u=t._props,h=t.$options._propKeys||[],d=0;d<h.length;d++){var f=h[d],p=t.$options.props;u[f]=Vt(f,p,e,t)}Dt(!0),t.$options.propsData=e}i=i||n;var v=t.$options._parentListeners;t.$options._parentListeners=i,bn(t,i,v),c&&(t.$slots=De(a,r.context),t.$forceUpdate())}function An(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function On(t,e){if(e){if(t._directInactive=!1,An(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Cn(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!An(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Cn(t,"deactivated")}}function Cn(t,e){dt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,a=n.length;r<a;r++)Zt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Rn=[],$n=[],Fn={},En=!1,Ln=!1,In=0;function jn(){In=Rn.length=$n.length=0,Fn={},En=Ln=!1}var Yn=Date.now;if(J&&!Q){var Wn=window.performance;Wn&&"function"===typeof Wn.now&&Yn()>document.createEvent("Event").timeStamp&&(Yn=function(){return Wn.now()})}function Nn(){var t,e;for(Yn(),Ln=!0,Rn.sort(function(t,e){return t.id-e.id}),In=0;In<Rn.length;In++)t=Rn[In],t.before&&t.before(),e=t.id,Fn[e]=null,t.run();var n=$n.slice(),i=Rn.slice();jn(),Hn(n),Un(i),at&&N.devtools&&at.emit("flush")}function Un(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Cn(i,"updated")}}function zn(t){t._inactive=!1,$n.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,On(t[e],!0)}function Vn(t){var e=t.id;if(null==Fn[e]){if(Fn[e]=!0,Ln){var n=Rn.length-1;while(n>In&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);En||(En=!0,le(Nn))}}var Bn=0,Gn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Bn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=B(e),this.getter||(this.getter=$)),this.value=this.lazy?void 0:this.get()};Gn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(er){if(!this.user)throw er;Xt(er,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},Gn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Gn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Gn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vn(this)},Gn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(er){Xt(er,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Gn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Gn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Gn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||m(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var qn={enumerable:!0,configurable:!0,get:$,set:$};function Jn(t,e,n){qn.get=function(){return this[e][n]},qn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,qn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Zn(t,e.props),e.methods&&ai(t,e.methods),e.data?Kn(t):At(t._data={},!0),e.computed&&ei(t,e.computed),e.watch&&e.watch!==nt&&oi(t,e.watch)}function Zn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||Dt(!1);var o=function(a){r.push(a);var o=Vt(a,e,n,t);Ot(i,a,o),a in t||Jn(t,"_props",a)};for(var s in e)o(s);Dt(!0)}function Kn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var a=n[r];0,i&&x(i,a)||z(a)||Jn(t,"_data",a)}At(e,!0)}function Qn(t,e){dt();try{return t.call(e,e)}catch(er){return Xt(er,e,"data()"),{}}finally{ft()}}var ti={lazy:!0};function ei(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new Gn(t,o||$,$,ti)),r in t||ni(t,r,a)}}function ni(t,e,n){var i=!rt();"function"===typeof n?(qn.get=i?ii(e):ri(n),qn.set=$):(qn.get=n.get?i&&!1!==n.cache?ii(e):ri(n.get):$,qn.set=n.set||$),Object.defineProperty(t,e,qn)}function ii(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ri(t){return function(){return t.call(this,this)}}function ai(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?$:O(e[n],t)}function oi(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)si(t,n,i[r]);else si(t,n,i)}}function si(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function li(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Mt,t.prototype.$delete=Ct,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return si(i,t,e,n);n=n||{},n.user=!0;var r=new Gn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(a){Xt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ci=0;function ui(t){t.prototype._init=function(t){var e=this;e._uid=ci++,e._isVue=!0,t&&t._isComponent?hi(e,t):e.$options=zt(di(e.constructor),t||{},e),e._renderProxy=e,e._self=e,kn(e),yn(e),ln(e),Cn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Xn(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&Cn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function di(t){var e=t.options;if(t.super){var n=di(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=fi(t);r&&C(t.extendOptions,r),e=t.options=zt(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fi(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function pi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=M(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gi(t){t.mixin=function(t){return this.options=zt(this.options,t),this}}function yi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=zt(n.options,t),o["super"]=n,o.options.props&&mi(o),o.options.computed&&_i(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,Y.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=C({},o.options),r[i]=o,o}}function mi(t){var e=t.options.props;for(var n in e)Jn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ni(t.prototype,n,e[n])}function xi(t){Y.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function bi(t){return t&&(t.Ctor.options.name||t.tag)}function wi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Si(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var a in n){var o=n[a];if(o){var s=bi(o.componentOptions);s&&!e(s)&&Di(n,a,i,r)}}}function Di(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,m(n,e)}ui(pi),li(pi),wn(pi),Tn(pi),hn(pi);var ki=[String,RegExp,Array],Ti={name:"keep-alive",abstract:!0,props:{include:ki,exclude:ki,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Di(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Si(t,function(t){return wi(e,t)})}),this.$watch("exclude",function(e){Si(t,function(t){return!wi(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var i=bi(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!wi(a,i))||o&&i&&wi(o,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,m(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Di(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Pi={KeepAlive:Ti};function Ai(t){var e={get:function(){return N}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:C,mergeOptions:zt,defineReactive:Ot},t.set=Mt,t.delete=Ct,t.nextTick=le,t.observable=function(t){return At(t),t},t.options=Object.create(null),Y.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,C(t.options.components,Pi),vi(t),gi(t),yi(t),xi(t)}Ai(pi),Object.defineProperty(pi.prototype,"$isServer",{get:rt}),Object.defineProperty(pi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(pi,"FunctionalRenderContext",{value:He}),pi.version="2.6.10";var Oi="[object Array]",Mi="[object Object]";function Ci(t,e){var n={};return Ri(t,e),$i(t,e,"",n),n}function Ri(t,e){if(t!==e){var n=Ei(t),i=Ei(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ri(a,e[r])}}else n==Oi&&i==Oi&&t.length>=e.length&&e.forEach(function(e,n){Ri(t[n],e)})}}function $i(t,e,n,i){if(t!==e){var r=Ei(t),a=Ei(e);if(r==Mi)if(a!=Mi||Object.keys(t).length<Object.keys(e).length)Fi(i,n,t);else{var o=function(r){var a=t[r],o=e[r],s=Ei(a),l=Ei(o);if(s!=Oi&&s!=Mi)a!=e[r]&&Fi(i,(""==n?"":n+".")+r,a);else if(s==Oi)l!=Oi?Fi(i,(""==n?"":n+".")+r,a):a.length<o.length?Fi(i,(""==n?"":n+".")+r,a):a.forEach(function(t,e){$i(t,o[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Mi)if(l!=Mi||Object.keys(a).length<Object.keys(o).length)Fi(i,(""==n?"":n+".")+r,a);else for(var c in a)$i(a[c],o[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)o(s)}else r==Oi?a!=Oi?Fi(i,n,t):t.length<e.length?Fi(i,n,t):t.forEach(function(t,r){$i(t,e[r],n+"["+r+"]",i)}):Fi(i,n,t)}}function Fi(t,e,n){t[e]=n}function Ei(t){return Object.prototype.toString.call(t)}function Li(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function Ii(t){return Rn.find(function(e){return t._watcher===e})}function ji(t,e){if(!t.__next_tick_pending&&!Ii(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(er){Xt(er,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Yi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Wi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Yi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=i.data[t]});var o=Ci(r,a);Object.keys(o).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,i.setData(o,function(){n.__next_tick_pending=!1,Li(n)})):Li(this)}};function Ni(){}function Ui(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Ni),t.$options.render||(t.$options.render=Ni),"mp-toutiao"!==t.mpHost&&Cn(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Gn(t,i,$,{before:function(){t._isMounted&&!t._isDestroyed&&Cn(t,"beforeUpdate")}},!0),n=!1,t}function zi(t,e){return r(t)||r(e)?Hi(t,Vi(e)):""}function Hi(t,e){return t?e?t+" "+e:t:e||""}function Vi(t){return Array.isArray(t)?Bi(t):l(t)?Gi(t):"string"===typeof t?t:""}function Bi(t){for(var e,n="",i=0,a=t.length;i<a;i++)r(e=Vi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Gi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var qi=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ji(t){return Array.isArray(t)?R(t):"string"===typeof t?qi(t):t}var Xi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Zi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Zi(t[i],n.slice(1).join("."))}function Ki(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:M(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return ji(this,t)},Xi.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;dt();var i,r=n.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)i=Zt(r[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Zi(e||this,t)},t.prototype.__get_class=function(t,e){return zi(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ji(t),i=e?C(e,n):n;return Object.keys(i).map(function(t){return T(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,a,o;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(a=Object.keys(t),n=Object.create(null),i=0,r=a.length;i<r;i++)o=a[i],n[o]=e(t[o],o,i);return n}return[]}}var Qi=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function tr(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qi.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;Qi.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=Qi}pi.prototype.__patch__=Wi,pi.prototype.$mount=function(t,e){return Ui(this,t,e)},tr(pi),Ki(pi),e["default"]=pi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=De,e.createPage=Se,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){r=!0,a=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return f(t)||d(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function d(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var p=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function g(t){return"function"===typeof t}function y(t){return"string"===typeof t}function m(t){return"[object Object]"===p.call(t)}function _(t,e){return v.call(t,e)}function x(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),D=["invoke","success","fail","complete","returnValue"],k={},T={};function P(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?A(n):n}function A(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function O(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function M(t,e){Object.keys(e).forEach(function(n){-1!==D.indexOf(n)&&g(e[n])&&(t[n]=P(t[n],e[n]))})}function C(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==D.indexOf(n)&&g(e[n])&&O(t[n],e[n])})}function R(t,e){"string"===typeof t&&m(e)?M(T[t]||(T[t]={}),e):m(t)&&M(k,t)}function $(t,e){"string"===typeof t?m(e)?C(T[t],e):delete T[t]:m(t)&&C(k,t)}function F(t){return function(e){return t(e)||e}}function E(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function L(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then(F(r));else{var a=r(e);if(E(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){L(t[n],e).then(function(t){return g(i)&&i(t)||t})}}}),e}function j(t,e){var n=[];Array.isArray(k.returnValue)&&n.push.apply(n,u(k.returnValue));var i=T[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function Y(t){var e=Object.create(null);Object.keys(k).forEach(function(t){"returnValue"!==t&&(e[t]=k[t].slice())});var n=T[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function W(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),a=3;a<i;a++)r[a-3]=arguments[a];var o=Y(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=L(o.invoke,n);return s.then(function(t){return e.apply(void 0,[I(o,t)].concat(r))})}return e.apply(void 0,[I(o,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var N={returnValue:function(t){return E(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},U=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,z=/^create|Manager$/,H=/^on/;function V(t){return z.test(t)}function B(t){return U.test(t)}function G(t){return H.test(t)&&"onPush"!==t}function q(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||B(t)||G(t))}function X(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return g(n.success)||g(n.fail)||g(n.complete)?j(t,W.apply(void 0,[t,e,n].concat(r))):j(t,q(new Promise(function(i,a){W.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Z=1e-4,K=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Q="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/K*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Z),0===n?1!==et&&Q?.5:1:t<0?-n:n}var rt={promiseInterceptor:N},at=Object.freeze({upx2px:it,interceptors:rt,addInterceptor:R,removeInterceptor:$}),ot={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(dt(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(m(e)){var a=!0===r?e:{};for(var o in g(n)&&(n=n(e,a)||{}),e)if(_(n,o)){var s=n[o];g(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:m(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ut(t,e[o],i):r||(a[o]=e[o]);return a}return g(e)&&(e=ut(t,e,i)),e}function dt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return g(ot.returnValue)&&(e=ot.returnValue(t,e)),ht(t,e,n,{},i)}function ft(t,e){if(_(ot,t)){var n=ot[t];return n?function(e,i){var r=n;g(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof i&&a.push(i);var o=wx[r.name||t].apply(wx,a);return B(t)?dt(t,o,r.returnValue,V(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function gt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};g(n)&&n(r),g(i)&&i(r)}}vt.forEach(function(t){pt[t]=gt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function mt(t,e,n){return t[e].apply(t,n)}function _t(){return mt(yt(),"$on",Array.prototype.slice.call(arguments))}function xt(){return mt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return mt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return mt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:_t,$off:xt,$once:bt,$emit:wt});function Dt(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function kt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;Dt("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o.apply(t,i)}}}function Tt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&kt(e),e}var Pt=Object.freeze({getSubNVueById:Tt,requireNativePlugin:Dt}),At=Page,Ot=Component,Mt=/:/g,Ct=b(function(t){return S(t.replace(Mt,"-"))});function Rt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return e.apply(t,[Ct(n)].concat(r))}}}function $t(t,e){var n=e[t];e[t]=n?function(){Rt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Rt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return $t("onLoad",t),At(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return $t("created",t),Ot(t)};var Ft=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Et(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){_(n,e)&&(t[e]=n[e])})}function Lt(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,g(e))return!!g(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(g(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Lt(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Lt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function jt(t,e){var n;return e=e.default||e,g(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Yt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Wt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Nt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return m(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||_(n,t)||(n[t]=i[t])}),n}var Ut=[String,Number,Boolean,Object,Array,null];function zt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),m(i)&&i.props&&o.push(e({properties:Bt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){m(t)&&t.props&&o.push(e({properties:Bt(t.props,!0)}))}),o}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function Bt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:zt(t)}}):m(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(m(i)){var r=i["default"];g(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==Ut.indexOf(i.type)?i.type:null,value:r,observer:zt(e)}}else{var a=Vt(e,i);n[e]={type:-1!==Ut.indexOf(a)?a:null,observer:zt(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=x,t.preventDefault=x,t.target=t.target||{},_(t,"detail")||(t.detail={}),m(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function qt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var a=e[1],o=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===r}):m(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],o&&(n=t.__get_value(o,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=qt(t,e)}),i}function Xt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Zt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Xt(t)):"string"===typeof t&&_(s,t)?l.push(s[t]):l.push(t)}),l}var Kt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,a=[];return i.forEach(function(n){var i=n[0],o=n[1],s=i.charAt(0)===Qt;i=s?i.slice(1):i;var l=i.charAt(0)===Kt;i=l?i.slice(1):i,o&&te(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;if(r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent),"$emit"===i)return void r.$emit.apply(r,Zt(e.$vm,t,n[1],n[2],s,i));var o=r[i];if(!g(o))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(r,Zt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Et(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};a.globalData=t.$options.globalData||{};var o=t.$options.methods;return o&&Object.keys(o).forEach(function(t){a[t]=o[t]}),It(a,ne),a}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,i=n.find(function(t){return t.$scope._$vueId===e});if(i)return i;for(var r=n.length-1;r>=0;r--)if(i=ae(n[r],e),i)return i}function oe(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=ae(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ce})}var de=["onUniNViewMessage"];function fe(t){var e=he(t);return It(e,de),e}function pe(t){return App(fe(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,o=jt(i.default,t),s=a(o,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},h={options:u,data:Nt(c,i.default.prototype),behaviors:Ht(c,oe),properties:Bt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Wt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Yt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){h.methods[t]=function(e){return this.$vm[t](e)}}),n?h:[h,l]}function ge(t){return ve(t,{isPage:se,initRelation:le})}function ye(t){var e=ge(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var me=["onShow","onHide","onUnload"];function _e(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,me,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function xe(t){return _e(t,{isPage:se,initRelation:le})}me.push.apply(me,Ft);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=xe(t);return It(e.methods,be),e}function Se(t){return Component(we(t))}function De(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),lt.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var ke={};Object.keys(at).forEach(function(t){ke[t]=at[t]}),Object.keys(St).forEach(function(t){ke[t]=St[t]}),Object.keys(Pt).forEach(function(t){ke[t]=X(t,Pt[t])}),Object.keys(wx).forEach(function(t){(_(wx,t)||_(ot,t))&&(ke[t]=X(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=ke,t.UniEmitter=St),wx.createApp=pe,wx.createPage=Se,wx.createComponent=De;var Te=ke,Pe=Te;e.default=Pe}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"820e":function(t,e,n){"use strict";(function(t){function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.request=e.baseUrl=void 0;var r="http://139.217.3.16:9012/api/";e.baseUrl=r;var a=function(e){var i=n({},e);return i.url.startsWith("http")||i.url.startsWith("https")||(i.url="".concat(r).concat(i.url)),new Promise(function(e,r){t.request(n({},i,{success:function(t){e(t)},fail:function(t){r(t)}}))})};e.request=a}).call(this,n("6e42")["default"])},"880c":function(t,e,n){"use strict";(function(e,n){var i,r={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarGridCount:3,radarLabelTextMargin:15,gaugeLabelTextMargin:15};i=Object.assign?Object.assign:function(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),i=1;i<arguments.length;i++){var r=arguments[i];if(null!=r)for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(n[a]=r[a])}return n};var a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),a=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:n[a]},s=0,l=i.length;s<l;s++)if(s<t[a])o.data.push(null);else{for(var c=0,u=0;u<t[a];u++)c+=i[s-u][1];o.data.push(+(c/t[a]).toFixed(3))}r.push(o)}return r}function c(t,e,n,i){var r=i.width-i.area[1]-i.area[3],a=e.eachSpacing*(i.chartData.xAxisData.xAxisPoints.length-1),o=t;return t>=0?o=0:Math.abs(t)>=a-r&&(o=r-a),o}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,a=i+(n-r-i)/Math.sqrt(2);a*=-1;var o=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:a,transY:o}}function d(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,a=null,o=null,s=null,l=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*i,o=t[0].y+(t[1].y-t[0].y)*i):(a=t[e].x+(t[e+1].x-t[e-1].x)*i,o=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(o=t[e].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function p(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function v(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function g(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.fontSize;t=String(t);t=t.split("");for(var n=0,i=0;i<t.length;i++){var a=t[i];/[a-zA-Z]/.test(a)?n+=7:/[0-9]/.test(a)?n+=5.5:/\./.test(a)?n+=2.7:/-/.test(a)?n+=3.25:/[\u4e00-\u9fa5]/.test(a)?n+=10:/\(|\)/.test(a)?n+=3.73:/\s/.test(a)?n+=2.5:/%/.test(a)?n+=8:n+=10}return n*e/10}function m(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function _(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function x(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function b(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var a={};a.color=r.color,a.type=r.type,a.style=r.style,a.pointShape=r.pointShape,a.disableLegend=r.disableLegend,a.name=r.name,a.show=r.show,a.data=r.format?r.format(r.data[e]):r.data[e],n.push(a)}}return n}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function S(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function D(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function k(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function T(t,e,n,i,r,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,l=[o,o,s,o],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=o),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},a={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,a,u)});for(var h=[],d={x:0,y:0},f=0;f<n.length;f++){var p=n[f];"undefined"!==typeof p[i]&&null!==p[i]&&h.push(p[i])}return d.x=Math.round(h[0][0].x),{textList:c,offset:d}}function P(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function A(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0;return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(o=n.chartData.eachSpacing/2),C(t,n,i)&&e.forEach(function(e,n){t.x+r+o>e&&(a=n)}),a}function O(t,e,n){var i=-1;if(M(t,e.area)){for(var r=e.points,a=-1,o=0,s=r.length;o<s;o++)for(var l=r[o],c=0;c<l.length;c++){a+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=a;break}}return i}return i}function M(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function C(t,e,n){return t.x<e.width-e.area[1]+10&&t.x>e.area[3]-10&&t.y>e.area[0]&&t.y<e.height-e.area[2]}function R(t,e,n){var i=2*Math.PI/n,r=-1;if(I(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var n=a(t-i/2),s=a(t+i/2);s<n&&(s+=2*Math.PI),(o>=n&&o<=s||o+2*Math.PI>=n&&o+2*Math.PI<=s)&&(r=e)})}return r}function $(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var a=e.series[i];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){n=i;break}}return n}function F(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var a=e[i];if(t.x>a.area[0]&&t.x<a.area[2]&&t.y>a.area[1]&&t.y<a.area[3]){n=i;break}}return n}function E(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,a=jt(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),o=[a.x,a.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(Wt(o,c)){n=s;break}}return n}function L(t,e){var n=-1;if(I(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,a=e.series.length;r<a;r++){var o=e.series[r];if(u(i,o._start_,o._start_+2*o._proportion_*Math.PI)){n=r;break}}}return n}function I(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function j(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function Y(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],d=0,f=[],p=[],v=0;v<t.length;v++){var g=t[v],m=l+c+y(g.name||"undefined",s)+e.legend.itemGap;d+m>e.width-e.padding[1]-e.padding[3]?(h.push(p),f.push(d-e.legend.itemGap),d=m,p=[g]):(d+=m,p.push(g))}if(p.length){h.push(p),f.push(d-e.legend.itemGap),r.widthArr=f;var _=Math.max.apply(null,f);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*a;break;case"right":r.area.start.x=e.width-e.padding[1]-_-2*a,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-_)/2-a,r.area.end.x=(e.width+_)/2+a}r.area.width=_+2*a,r.area.wholeWidth=_+2*a,r.area.height=h.length*u+2*a,r.area.wholeHeight=h.length*u+2*a+2*o,r.points=h}}else{var x=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*a,w=Math.min(Math.floor(b/u),x);switch(r.area.height=w*u+2*a,r.area.wholeHeight=w*u+2*a,e.legend.float){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-o-r.area.height,r.area.end.y=e.height-e.padding[2]-o;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var S=x%w===0?x/w:Math.floor(x/w+1),D=[],k=0;k<S;k++){var T=t.slice(k*w,k*w+w);D.push(T)}if(r.points=D,D.length){for(var P=0;P<D.length;P++){for(var A=D[P],O=0,M=0;M<A.length;M++){var C=l+c+y(A[M].name||"undefined",s)+e.legend.itemGap;C>O&&(O=C)}r.widthArr.push(O),r.heightArr.push(A.length*u+2*a)}for(var R=0,$=0;$<r.widthArr.length;$++)R+=r.widthArr[$];r.area.width=R-e.legend.itemGap+2*a,r.area.wholeWidth=r.area.width+a}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-o,r.area.end.y=e.height-e.padding[2]-o;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function W(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(r.angle)),r}function N(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=r.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,m(i))),l=[],c=function(r){var o=i[r],c={};c.color=o.color,c.data=[],o.data.forEach(function(i,r){var o={};o.angle=t[r],o.proportion=i/s,o.position=f(n*o.proportion*a*Math.cos(o.angle),n*o.proportion*a*Math.sin(o.angle),e),c.data.push(o)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function U(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,i+=o.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function z(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function H(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,a+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),d=i-n,f=0;f<t.length;f++){var p=t[f];p.data=null===p.data?0:p.data,0===a||"area"==e?(p._proportion_=p.data/a*r,p._rose_proportion_=1/t.length*r):(p._proportion_=p.data/a*r,p._rose_proportion_=p.data/a*r),p._radius_=n+d*((p.data-u)/(h-u))}for(var v=0;v<t.length;v++){var g=t[v];g._start_=o,o+=2*g._rose_proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var a=void 0;a="default"==e.type?e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle:2,r._proportion_=a*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function B(t,e,n){for(var i=e-n+1,r=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=r,t[a]._endAngle_=i*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),r=t[a]._endAngle_;return t}function G(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var a=t[r];if(a.data=null===a.data?0:a.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;a._endAngle_=s*a.data+n.startAngle,a._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(a._oldAngle_+=2),a.data>=n.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*i+n.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*i,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function q(t){t=U(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):a.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function J(t,e,n,i,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function X(t,e,n,i,r,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),i>0&&(t.width-=2*o),t)})}function Z(t,e,n,i,r,a,o){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function K(t,e,n){n.yAxisWidth,n.yAxisTitleWidth;var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var a=i/r,o=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(l)),{xAxisPoints:o,startX:s,endX:l,eachSpacing:a}}function Q(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=i[o]+Math.round(r/2);var d=t.value||t,f=c*(d-e)/(n-e);f*=s,h.y=a.height-Math.round(f)-a.area[2],u.push(h)}),l.push(u)}}),l}function tt(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=a.type&&"area"!=a.type||(l=a.xAxis.boundaryGap);var c=[],u=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)c.push(null);else{var h={};h.color=t.color,h.x=i[o],"center"==l&&(h.x+=Math.round(r/2));var d=t;"object"===typeof t&&null!==t&&(d=t.value);var f=u*(d-e)/(n-e);f*=s,h.y=a.height-Math.round(f)-a.area[2],c.push(h)}}),c}function et(t,e,n,i,r,a,o,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var d={};if(d.color=t.color,d.x=i[o]+Math.round(r/2),s>0){for(var f=0,p=0;p<=s;p++)f+=l[p].data[o];var v=f-t,g=h*(f-e)/(n-e),y=h*(v-e)/(n-e)}else f=t,g=h*(f-e)/(n-e),y=0;var m=y;g*=c,m*=c,d.y=a.height-Math.round(g)-a.area[2],d.y0=a.height-Math.round(m)-a.area[2],u.push(d)}}),u}function nt(t,e,n,i){var r;r="stack"==i?_(t,e.categories.length):m(t);var a=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?Array.isArray(t)?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?Array.isArray(t)?t.map(function(t){a.push(t)}):a.push(t.value):a.push(t)});var o=0,s=0;if(a.length>0&&(o=Math.min.apply(this,a),s=Math.max.apply(this,a)),"number"===typeof e.yAxis.min&&(o=Math.min(e.yAxis.min,o)),"number"===typeof e.yAxis.max&&(s=Math.max(e.yAxis.max,s)),o===s){var l=s||10;s+=l}for(var c=g(o,s),u=c.minRange,h=c.maxRange,d=[],f=(h-u)/n.yAxisSplit,p=0;p<=n.yAxisSplit;p++)d.push(u+f*p);return d.reverse()}function it(t,e,n){var r=i({},{type:""},e.extra.column),o=nt(t,e,n,r.type),s=n.yAxisWidth,l=e.yAxis.fontSize||n.fontSize,c=o.map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,s=Math.max(s,y(t,l)+5),t});return!0===e.yAxis.disabled&&(s=0),{rangesFormat:c,ranges:o,yAxisWidth:s}}function rt(t,e,n,i,r){var a=nt(e,n,i),o=n.height-n.area[0]-n.area[2],s=a[0],l=a[a.length-1],c=n.padding[3],u=n.padding[1]+o,h=s-(s-l)*(t-c)/(u-c);return h=n.yAxis.format?n.yAxis.format(Number(h)):h,h}function at(t,e,n,i){for(var r=i.height-i.area[0]-i.area[2],a=0;a<n.length;a++){var o=r*(n[a].value-t)/(e-t);n[a].y=i.height-Math.round(o)-i.area[2]}return n}function ot(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function st(t,e,n,i,r){i.beginPath(),i.setStrokeStyle("#ffffff"),i.setLineWidth(1*r.pixelRatio),i.setFillStyle(e),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+3.5*r.pixelRatio,t.y),i.arc(t.x,t.y,4*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function lt(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=o?r:0,h=s?a:0,d=5;if(s){var f=y(s,a),p=i.x-f/2+(t.subtitle.offsetX||0),v=i.y+a/2+(t.subtitle.offsetY||0);o&&(v+=(u+d)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(c),n.fillText(s,p,v),n.closePath(),n.stroke()}if(o){var g=y(o,r),m=i.x-g/2+(t.title.offsetX||0),_=i.y+r/2+(t.title.offsetY||0);s&&(_-=(h+d)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(o,m,_),n.closePath(),n.stroke()}}function ct(t,e,n,i){var r=e.data;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var o=r[a];"object"===typeof r[a]&&null!==r[a]&&(o=r[a].value);var s=e.format?e.format(o):o;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-2),i.closePath(),i.stroke()}})}function ut(t,e,n,i,r,a){e-=t.width/2+r.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,d=0;d<t.splitLine.splitNumber+1;d++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},p=t.labelFormat?t.labelFormat(h):h;f.x+=n.x-y(p)/2,f.y+=n.y;var v=f.x,g=f.y;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(p,v,g+r.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ht(t,e,n,i,r,o){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,d=u.y;a.approximatelyEqual(c.x,0)?h-=y(i.categories[l]||"")/2:c.x<0&&(h-=y(i.categories[l]||"")),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(i.categories[l]||"",h,d+r.fontSize/2),o.closePath(),o.stroke()})}function dt(t,e,n,i,r,o){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var d=u[h],v=Math.cos(d.arc)*(d.radius+s),g=Math.sin(d.arc)*(d.radius+s),m=Math.cos(d.arc)*d.radius,_=Math.sin(d.arc)*d.radius,x=v>=0?v+n.pieChartTextPadding:v-n.pieChartTextPadding,b=g,w=y(d.text),S=b;c&&a.isSameXCoordinateArea(c.start,{x:x})&&(S=x>0?Math.min(b,c.start.y):v<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),x<0&&(x-=w);var D={lineStart:{x:m,y:_},lineEnd:{x:v,y:g},start:{x:x,y:S},width:w,height:n.fontSize,text:d.text,color:d.color,textColor:d.textColor,textSize:d.textSize};c=p(D,c),l.push(c)}for(var k=0;k<l.length;k++){var T=l[k],P=f(T.lineStart.x,T.lineStart.y,o),A=f(T.lineEnd.x,T.lineEnd.y,o),O=f(T.start.x,T.start.y,o);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(T.color),i.setFillStyle(T.color),i.moveTo(P.x,P.y);var M=T.start.x<0?O.x+T.width:O.x,C=T.start.x<0?O.x-5:O.x+5;i.quadraticCurveTo(A.x,A.y,M,O.y),i.moveTo(P.x,P.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(O.x+T.width,O.y),i.arc(M,O.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(T.textSize||n.fontSize),i.setFillStyle(T.textColor||"#666666"),i.fillText(T.text,C,O.y+3),i.closePath(),i.stroke(),i.closePath()}}function ft(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,a),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;i.beginPath(),i.setFillStyle(o(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function pt(t,e,n,r,a){for(var s=i({},{type:"solid",dashLength:4,data:[]},n.extra.markLine),l=n.area[3],c=n.width-n.padding[1],u=at(t,e,s.data,n),h=0;h<u.length;h++){var d=i({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},u[h]);if("dash"==s.type&&a.setLineDash([s.dashLength,s.dashLength]),a.setStrokeStyle(d.lineColor),a.setLineWidth(1*n.pixelRatio),a.beginPath(),a.moveTo(l,d.y),a.lineTo(c,d.y),a.stroke(),a.setLineDash([]),d.showLabel){var f=n.yAxis.format?n.yAxis.format(Number(d.value)):d.value;a.setFontSize(r.fontSize);var p=y(f,r.fontSize),v=n.padding[3]+r.yAxisTitleWidth-r.toolTipPadding,g=Math.max(n.area[3],p+2*r.toolTipPadding),m=g-v,_=v+(m-p)/2,x=d.y;a.setFillStyle(o(d.labelBgColor,d.labelBgOpacity)),a.setStrokeStyle(d.labelBgColor),a.setLineWidth(1*n.pixelRatio),a.beginPath(),a.rect(v,x-.5*r.fontSize-r.toolTipPadding,m,r.fontSize+2*r.toolTipPadding),a.closePath(),a.stroke(),a.fill(),a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(d.labelFontColor),a.fillText(String(f),_,x+.5*r.fontSize),a.stroke()}}}function vt(t,e,n,r,a){var s=i({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.padding[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel){var u=rt(t.tooltip.offset.y,t.series,t,e,r);n.setFontSize(e.fontSize);var h=y(u,e.fontSize),d=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,f=Math.max(t.area[3],h+2*e.toolTipPadding),p=f-d,v=d+(p-h)/2,g=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(d,g-.5*e.fontSize-e.toolTipPadding,p,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u,v,g+.5*e.fontSize),n.closePath(),n.stroke()}}function gt(t,e,n,r,a){var s=i({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];r.beginPath(),r.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),r.rect(t-a/2,l,a,c-l),r.closePath(),r.fill()}function yt(t,e,n,r,a,s,l){var c=i({},{bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,d=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||ft(n.tooltip.offset.x,n,r,a),e=i({x:0,y:0},e),e.y-=8*n.pixelRatio;var p=t.map(function(t){return y(t.text,r.fontSize)}),v=u+h+4*r.toolTipPadding+Math.max.apply(null,p),g=2*r.toolTipPadding+t.length*r.toolTipLineHeight;e.x-Math.abs(n._scrollDistance_)+d+v>n.width&&(f=!0),g+e.y>n.height&&(e.y=n.height-g),a.beginPath(),a.setFillStyle(o(c.bgColor||r.toolTipBackground,c.bgOpacity||r.toolTipOpacity)),f?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-d,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-d,e.y),a.lineTo(e.x-d-Math.round(v),e.y),a.lineTo(e.x-d-Math.round(v),e.y+g),a.lineTo(e.x-d,e.y+g),a.lineTo(e.x-d,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+d,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+d,e.y),a.lineTo(e.x+d+Math.round(v),e.y),a.lineTo(e.x+d+Math.round(v),e.y+g),a.lineTo(e.x+d,e.y+g),a.lineTo(e.x+d,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var i=e.x+d+2*r.toolTipPadding,o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding+1;f&&(i=e.x-v-d+2*r.toolTipPadding),a.fillRect(i,o,u,r.fontSize),a.closePath()}}),t.forEach(function(t,n){var i=e.x+d+2*r.toolTipPadding+u+h;f&&(i=e.x-v-d+2*r.toolTipPadding+ +u+h);var o=e.y+(r.toolTipLineHeight-r.fontSize)/2+r.toolTipLineHeight*n+r.toolTipPadding;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(c.fontColor),a.fillText(t.text,i,o+r.fontSize),a.closePath(),a.stroke()})}function mt(t,e,n,i){var r=n.xAxisHeight+(e.height-n.xAxisHeight-y(t))/2;i.save(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(e.yAxis.titleFontColor||"#333333"),i.translate(0,e.height),i.rotate(-90*Math.PI/180),i.fillText(t,r,e.padding[3]+.5*n.fontSize),i.closePath(),i.stroke(),i.restore()}function _t(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=i({},{type:"group",width:c/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),h=o.pop(),d=o.shift(),f=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&gt(e.tooltip.offset.x,e,n,r,c),t.forEach(function(i,o){var s=i.data;switch(u.type){case"group":var p=tt(s,h,d,l,c,e,n,a),v=et(s,h,d,l,c,e,n,o,t,a);f.push(v),p=J(p,c,t.length,o,n,e),p.forEach(function(t,n){if(null!==t){r.beginPath(),r.setStrokeStyle(t.color||i.color),r.setLineWidth(1),r.setFillStyle(t.color||i.color);var a=t.x-t.width/2;e.height,t.y,e.area[2];r.moveTo(a-1,t.y),r.lineTo(a+t.width-2,t.y),r.lineTo(a+t.width-2,e.height-e.area[2]),r.lineTo(a,e.height-e.area[2]),r.lineTo(a,t.y),r.closePath(),r.stroke(),r.fill()}});break;case"stack":p=et(s,h,d,l,c,e,n,o,t,a);f.push(p),p=Z(p,c,t.length,o,n,e,t),p.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var a=t.x-t.width/2+1,s=e.height-t.y-e.area[2],l=e.height-t.y0-e.area[2];o>0&&(s-=l),r.moveTo(a,t.y),r.fillRect(a,t.y,t.width-2,s),r.closePath(),r.fill()}});break;case"meter":p=tt(s,h,d,l,c,e,n,a);f.push(p),p=X(p,c,t.length,o,n,e,u.meter.border),0==o?p.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(u.meter.fillColor);var a=t.x-t.width/2,o=e.height-t.y-e.area[2];r.moveTo(a,t.y),r.fillRect(a,t.y,t.width,o),r.closePath(),r.fill(),u.meter.border>0&&(r.beginPath(),r.setStrokeStyle(i.color),r.setLineWidth(u.meter.border*e.pixelRatio),r.moveTo(a+.5*u.meter.border,t.y+o),r.lineTo(a+.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(a+t.width-.5*u.meter.border,t.y+.5*u.meter.border),r.lineTo(a+t.width-.5*u.meter.border,t.y+o),r.stroke())}}):p.forEach(function(t,n){if(null!==t){r.beginPath(),r.setFillStyle(t.color||i.color);var a=t.x-t.width/2,o=e.height-t.y-e.area[2];r.moveTo(a,t.y),r.fillRect(a,t.y,t.width,o),r.closePath(),r.fill()}});break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(i,o){var s=i.data;switch(u.type){case"group":var f=tt(s,h,d,l,c,e,n,a);f=J(f,c,t.length,o,n,e),ct(f,i,n,r);break;case"stack":f=et(s,h,d,l,c,e,n,o,t,a);ct(f,i,n,r);break;case"meter":f=tt(s,h,d,l,c,e,n,a);ct(f,i,n,r);break}}),r.restore(),{xAxisPoints:l,calPoints:f,eachSpacing:c,minRange:h,maxRange:d}}function xt(t,e,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{color:{},average:{}},n.extra.candle);s.color=i({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=i({},{show:!1,name:[],day:[],color:r.colors},s.average),n.extra.candle=s;var l=[].concat(n.chartData.yAxisData.ranges),c=n.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),p=l.shift(),v=[];return a.save(),n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&a.translate(n._scrollDistance_,0),s.average.show&&e.forEach(function(t,e){var i=t.data,s=tt(i,f,p,u,h,n,r,o),l=j(s);l.forEach(function(e,n){a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===e.length?(a.moveTo(e[0].x,e[0].y),a.arc(e[0].x,e[0].y,1,0,2*Math.PI)):(a.moveTo(e[0].x,e[0].y),e.forEach(function(t,n){if(n>0){var i=d(e,n-1);a.bezierCurveTo(i.ctrA.x,i.ctrA.y,i.ctrB.x,i.ctrB.y,t.x,t.y)}}),a.moveTo(e[0].x,e[0].y)),a.closePath(),a.stroke()})}),t.forEach(function(t,e){var i=t.data,l=Q(i,f,p,u,h,n,r,o);v.push(l);var c=j(l);c=c[0],c.forEach(function(t,e){a.beginPath(),i[e][1]-i[e][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(t[3].x,t[3].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[1].x-h/4,t[1].y),a.lineTo(t[0].x-h/4,t[0].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[2].x,t[2].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[0].x+h/4,t[0].y),a.lineTo(t[1].x+h/4,t[1].y),a.lineTo(t[1].x,t[1].y),a.moveTo(t[3].x,t[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(t[3].x,t[3].y),a.lineTo(t[0].x,t[0].y),a.lineTo(t[0].x-h/4,t[0].y),a.lineTo(t[1].x-h/4,t[1].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[2].x,t[2].y),a.lineTo(t[1].x,t[1].y),a.lineTo(t[1].x+h/4,t[1].y),a.lineTo(t[0].x+h/4,t[0].y),a.lineTo(t[0].x,t[0].y),a.moveTo(t[3].x,t[3].y)),a.closePath(),a.fill(),a.stroke()})}),a.restore(),{xAxisPoints:u,calPoints:v,eachSpacing:h,minRange:f,maxRange:p}}function bt(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"straight",opacity:.2,addLine:!1,width:2},e.extra.area),l=[].concat(e.chartData.yAxisData.ranges),c=e.chartData.xAxisData,u=c.xAxisPoints,h=c.eachSpacing,f=l.pop(),p=l.shift(),v=e.height-e.area[2],g=[];return r.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&r.translate(e._scrollDistance_,0),t.forEach(function(t,i){var l=t.data,c=tt(l,f,p,u,h,e,n,a);g.push(c);for(var y=j(c),m=function(n){var i=y[n];if(r.beginPath(),r.setStrokeStyle(o(t.color,s.opacity)),r.setFillStyle(o(t.color,s.opacity)),r.setLineWidth(s.width*e.pixelRatio),i.length>1){var a=i[0],l=i[i.length-1];r.moveTo(a.x,a.y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=d(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.lineTo(l.x,v),r.lineTo(a.x,v),r.lineTo(a.x,a.y)}else{var c=i[0];r.moveTo(c.x-h/2,c.y),r.lineTo(c.x+h/2,c.y),r.lineTo(c.x+h/2,v),r.lineTo(c.x-h/2,v),r.moveTo(c.x-h/2,c.y)}r.closePath(),r.fill(),s.addLine&&(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(s.width*e.pixelRatio),1===i.length?(r.moveTo(i[0].x,i[0].y),r.arc(i[0].x,i[0].y,1,0,2*Math.PI)):(r.moveTo(i[0].x,i[0].y),"curve"===s.type?i.forEach(function(t,e){if(e>0){var n=d(i,e-1);r.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):i.forEach(function(t,e){e>0&&r.lineTo(t.x,t.y)}),r.moveTo(i[0].x,i[0].y)),r.closePath(),r.stroke())},_=0;_<y.length;_++)m(_);if(!1!==e.dataPointShape){var x=n.dataPointShape[i%n.dataPointShape.length];st(c,t.color,x,r,e)}}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,i){var o=t.data,s=tt(o,f,p,u,h,e,n,a);ct(s,t,n,r)}),r.restore(),{xAxisPoints:u,calPoints:g,eachSpacing:h,minRange:f,maxRange:p}}function wt(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.extra.line||{type:"straight",width:2};a.type=a.type?a.type:"straight",a.width=a.width?a.width:2;var o=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=o.pop(),h=o.shift(),f=[];return i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,o){var s=t.data,p=tt(s,u,h,l,c,e,n,r);f.push(p);var v=j(p);if(v.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(a.width*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"===a.type?n.forEach(function(t,e){if(e>0){var r=d(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()}),!1!==e.dataPointShape){var g=n.dataPointShape[o%n.dataPointShape.length];st(p,t.color,g,i,e)}}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,a){var o=t.data,s=tt(o,u,h,l,c,e,n,r);ct(s,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:f,eachSpacing:c,minRange:u,maxRange:h}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=[].concat(e.chartData.yAxisData.ranges),s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=a.pop(),h=a.shift(),f=e.height-e.area[2],p=[],v=0,g=0;if(t.forEach(function(t,e){"column"==t.type&&(g+=1)}),i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&i.translate(e._scrollDistance_,0),t.forEach(function(t,a){var s=t.data,y=tt(s,u,h,l,c,e,n,r);if(p.push(y),"column"==t.type&&(y=J(y,c,g,v,n,e),y.forEach(function(n,r){if(null!==n){i.beginPath(),i.setStrokeStyle(n.color||t.color),i.setLineWidth(1),i.setFillStyle(n.color||t.color);var a=n.x-n.width/2;e.height,n.y,e.area[2];i.moveTo(a,n.y),i.moveTo(a-1,n.y),i.lineTo(a+n.width-2,n.y),i.lineTo(a+n.width-2,e.height-e.area[2]),i.lineTo(a,e.height-e.area[2]),i.lineTo(a,n.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}),v+=1),"area"==t.type)for(var m=j(y),_=function(n){var r=m[n];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(o(t.color,.2)),i.setLineWidth(2*e.pixelRatio),r.length>1){b=r[0];var a=r[r.length-1];i.moveTo(b.x,b.y),"curve"===t.style?r.forEach(function(t,e){if(e>0){var n=d(r,e-1);i.bezierCurveTo(n.ctrA.x,n.ctrA.y,n.ctrB.x,n.ctrB.y,t.x,t.y)}}):r.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.lineTo(a.x,f),i.lineTo(b.x,f),i.lineTo(b.x,b.y)}else{var s=r[0];i.moveTo(s.x-c/2,s.y),i.lineTo(s.x+c/2,s.y),i.lineTo(s.x+c/2,f),i.lineTo(s.x-c/2,f),i.moveTo(s.x-c/2,s.y)}i.closePath(),i.fill()},x=0;x<m.length;x++){var b;_(x)}if("line"==t.type){var w=j(y);w.forEach(function(n,r){i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length?(i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI)):(i.moveTo(n[0].x,n[0].y),"curve"==t.style?n.forEach(function(t,e){if(e>0){var r=d(n,e-1);i.bezierCurveTo(r.ctrA.x,r.ctrA.y,r.ctrB.x,r.ctrB.y,t.x,t.y)}}):n.forEach(function(t,e){e>0&&i.lineTo(t.x,t.y)}),i.moveTo(n[0].x,n[0].y)),i.closePath(),i.stroke()})}if("point"==t.type&&y.forEach(function(n,r){n&&(i.beginPath(),i.setFillStyle(t.color),i.setStrokeStyle("#FFFFFF"),i.setLineWidth(1*e.pixelRatio),i.moveTo(n.x+3.5*e.pixelRatio,n.y),i.arc(n.x,n.y,4*e.pixelRatio,0,2*Math.PI),i.closePath(),i.fill(),i.stroke())}),1==t.addPoint&&"column"!==t.type){var S=n.dataPointShape[a%n.dataPointShape.length];st(y,t.color,S,i,e)}}),!1!==e.dataLabel&&1===r){v=0;t.forEach(function(t,a){var o=t.data,s=tt(o,u,h,l,c,e,n,r);"column"!==t.type?ct(s,t,n,i):(s=J(s,c,g,v,n,e),ct(s,t,n,i),v+=1)})}return i.restore(),{xAxisPoints:l,calPoints:p,eachSpacing:c,minRange:u,maxRange:h}}function Dt(t,e,n,i,r,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&vt(t,e,n,r,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&yt(t.tooltip.textList,t.tooltip.offset,t,e,n,r,a),n.restore()}function kt(t,e,n,i){var r=e.chartData.xAxisData,a=r.xAxisPoints,o=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],d=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+n.xAxisHeight,p=s-o,v=l*(a.length-1),g=p*p/v,m=0;e._scrollDistance_&&(m=-e._scrollDistance_*p/v),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(o,f),i.lineTo(s,f),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(o+m,f),i.lineTo(o+m+g,f),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),"calibration"===e.xAxis.type?a.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+4*e.pixelRatio),i.closePath(),i.stroke())}):(e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,d),i.stroke())})),i.setLineDash([])),!0!==e.xAxis.disabled){e.width,e.padding[1],e.padding[3],n.yAxisWidth,n.yAxisTitleWidth;var _=t.length;e.xAxis.labelCount&&(_=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,_-=1);for(var x=Math.ceil(t.length/_),b=[],w=t.length,S=0;S<w;S++)S%x!==0?b.push(""):b.push(t[S]);b[w-1]=t[w-1];var D=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,r){var o=-y(t,D)/2;"center"==c&&(o+=l/2),i.beginPath(),i.setFontSize(D),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(t,a[r]+o,u+D+(n.xAxisHeight-D)/2),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(D),i.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(t),s=-o;"center"==c&&(s+=l/2);var d=h(a[r]+l/2,u+D/2+5,e.height),f=d.transX,p=d.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(f,p),i.fillText(t,a[r]+s,u+D+5),i.closePath(),i.stroke(),i.restore()})}i.restore()}function Tt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],a=r/n.yAxisSplit,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=o+c,h=[],d=0;d<n.yAxisSplit+1;d++)h.push(e.height-e.area[2]-a*d);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){i.beginPath(),i.moveTo(o,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function Pt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.chartData.yAxisData.rangesFormat,a=e.height-e.area[0]-e.area[2],o=Math.floor(a/n.yAxisSplit),s=e.area[3],l=e.width-e.area[1],c=e.height-e.area[2],u=c+n.xAxisHeight;e.xAxis.scrollShow&&(u-=3*e.pixelRatio),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,s,u),1==e.enableScroll&&i.fillRect(l,0,e.width,u),i.closePath(),i.stroke();for(var h=[],d=0;d<=n.yAxisSplit;d++)h.push(e.area[0]+o*d);var f=e.yAxis.fontSize||n.fontSize;r.forEach(function(t,r){var a=h[r]?h[r]:c;i.beginPath(),i.setFontSize(f),i.setFillStyle(e.yAxis.fontColor||"#666666"),i.fillText(String(t),e.area[3]-n.yAxisWidth,a+f/2),i.closePath(),i.stroke()}),e.yAxis.title&&mt(e.yAxis.title,e,n,i)}}function At(t,e,n,i,r){if(!1!==e.legend.show){var a=r.legendData,o=a.points,s=a.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,d=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,c);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),o.forEach(function(t,r){var o=0,p=0;o=a.widthArr[r],p=a.heightArr[r];var v=0,g=0;"top"==e.legend.position||"bottom"==e.legend.position?(v=s.start.x+(s.width-o)/2,g=s.start.y+l+r*f):(o=0==r?0:a.widthArr[r-1],v=s.start.x+l+o,g=s.start.y+l+(s.height-p)/2),i.setFontSize(n.fontSize);for(var m=0;m<t.length;m++){var _=t[m];switch(_.area=[0,0,0,0],_.area[0]=v,_.area[1]=g,_.area[3]=g+f,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(_.show?_.color:e.legend.hiddenColor),i.setFillStyle(_.show?_.color:e.legend.hiddenColor),_.legendShape){case"line":i.moveTo(v,g+.5*f-2*e.pixelRatio),i.fillRect(v,g+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"diamond":i.moveTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio),i.lineTo(v+2.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f+5*e.pixelRatio),i.lineTo(v+12.5*e.pixelRatio,g+.5*f),i.lineTo(v+7.5*e.pixelRatio,g+.5*f-5*e.pixelRatio);break;case"circle":i.moveTo(v+7.5*e.pixelRatio,g+.5*f),i.arc(v+7.5*e.pixelRatio,g+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(v,g+.5*f-5*e.pixelRatio),i.fillRect(v,g+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),v+=u+h;var x=.5*f+.5*c-2;i.beginPath(),i.setFontSize(c),i.setFillStyle(_.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(_.name,v,g+x),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(v+=y(_.name,c)+d,_.area[2]=v):(_.area[2]=v+y(_.name,c)+d,v-=u+h,g+=f)}})}}function Ot(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=U(t,c,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),r.beginPath(),r.setFillStyle(e.background||"#ffffff"),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h,0,2*Math.PI),r.closePath(),r.fill()}if(!1!==e.dataLabel&&1===a){for(var d=!1,f=0,p=t.length;f<p;f++)if(t[f].data>0){d=!0;break}d&&dt(t,e,n,r,c,l)}return 1===a&&"ring"===e.type&&lt(e,n,r,l),{center:l,radius:c,series:t}}function Mt(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=H(t,s.type,u,c,a);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(r.beginPath(),r.setFillStyle(o(t.color,s.activeOpacity||.5)),r.moveTo(l.x,l.y),r.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill()),r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.lineJoin="round",r.setStrokeStyle(s.borderColor),r.setFillStyle(t.color),r.moveTo(l.x,l.y),r.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),r.closePath(),r.fill(),1==s.border&&r.stroke()}),!1!==e.dataLabel&&1===a){for(var d=!1,f=0,p=t.length;f<p;f++)if(t[f].data>0){d=!0;break}d&&dt(t,e,n,r,c,l)}return{center:l,radius:c,series:t}}function Ct(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=i({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio},e.extra.arcbar);t=V(t,o,a);var s={x:e.width/2,y:e.height/2},l=Math.min(s.x,s.y);l-=5*e.pixelRatio,l-=o.width/2,r.setLineWidth(o.width),r.setStrokeStyle(o.backgroundColor||"#E9E9E9"),r.setLineCap("round"),r.beginPath(),"default"==o.type?r.arc(s.x,s.y,l,o.startAngle*Math.PI,o.endAngle*Math.PI,!1):r.arc(s.x,s.y,l,0,2*Math.PI,!1),r.stroke();for(var c=0;c<t.length;c++){var u=t[c];r.setLineWidth(o.width),r.setStrokeStyle(u.color),r.setLineCap("round"),r.beginPath(),r.arc(s.x,s.y,l,o.startAngle*Math.PI,u._proportion_*Math.PI,!1),r.stroke()}return lt(e,n,r,s),{center:s,radius:l,series:t}}function Rt(t,e,n,r,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=i({},{startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==s.oldAngle&&(s.oldAngle=s.startAngle),void 0==s.oldData&&(s.oldData=0),t=B(t,s.startAngle,s.endAngle);var l={x:n.width/2,y:n.height/2},c=Math.min(l.x,l.y);c-=5*n.pixelRatio,c-=s.width/2;var u=c-s.width;a.setLineWidth(s.width),a.setLineCap("butt");for(var h=0;h<t.length;h++){var d=t[h];a.beginPath(),a.setStrokeStyle(d.color),a.arc(l.x,l.y,c,d._startAngle_*Math.PI,d._endAngle_*Math.PI,!1),a.stroke()}a.save();var f=s.startAngle-s.endAngle+1,p=f/s.splitLine.splitNumber,v=f/s.splitLine.splitNumber/s.splitLine.childNumber,g=-c-.5*s.width-s.splitLine.fixRadius,y=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.width,m=-c-.5*s.width-s.splitLine.fixRadius+s.splitLine.childWidth;a.translate(l.x,l.y),a.rotate((s.startAngle-1)*Math.PI);for(var _=0;_<s.splitLine.splitNumber+1;_++)a.beginPath(),a.setStrokeStyle(s.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(g,0),a.lineTo(y,0),a.stroke(),a.rotate(p*Math.PI);a.restore(),a.save(),a.translate(l.x,l.y),a.rotate((s.startAngle-1)*Math.PI);for(var x=0;x<s.splitLine.splitNumber*s.splitLine.childNumber+1;x++)a.beginPath(),a.setStrokeStyle(s.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(g,0),a.lineTo(m,0),a.stroke(),a.rotate(v*Math.PI);a.restore(),e=G(e,t,s,o);for(var b=0;b<e.length;b++){var w=e[b];a.save(),a.translate(l.x,l.y),a.rotate((w._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle(w.color),a.moveTo(s.pointer.width,0),a.lineTo(0,-s.pointer.width/2),a.lineTo(-u,0),a.lineTo(0,s.pointer.width/2),a.lineTo(s.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,s.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}return!1!==n.dataLabel&&ut(s,c,l,n,r,a),lt(n,r,a,l),1===o&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:l,radius:c,innerRadius:u,categories:t,totalAngle:f}}function $t(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2},e.extra.radar),l=S(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(w(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=f(u*Math.cos(t),u*Math.sin(t),c);r.moveTo(c.x,c.y),r.lineTo(e.x,e.y)}),r.stroke(),r.closePath();for(var h=function(t){var i={};r.beginPath(),r.setLineWidth(1*e.pixelRatio),r.setStrokeStyle(s.gridColor),l.forEach(function(e,a){var o=f(u/n.radarGridCount*t*Math.cos(e),u/n.radarGridCount*t*Math.sin(e),c);0===a?(i=o,r.moveTo(o.x,o.y)):r.lineTo(o.x,o.y)}),r.lineTo(i.x,i.y),r.stroke(),r.closePath()},d=1;d<=n.radarGridCount;d++)h(d);var p=N(l,c,u,t,e,a);return p.forEach(function(t,i){if(r.beginPath(),r.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?r.moveTo(t.position.x,t.position.y):r.lineTo(t.position.x,t.position.y)}),r.closePath(),r.fill(),!1!==e.dataPointShape){var a=n.dataPointShape[i%n.dataPointShape.length],l=t.data.map(function(t){return t.position});st(l,t.color,a,r,e)}}),ht(l,u,c,e,n,r),{center:c,radius:u,angleList:l}}function Ft(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function Et(t,e,n,i){for(var r=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function Lt(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,a=0;a<r.length;a++){e=r[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function It(t,e,n,i,r,a){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+a}}function jt(t,e,n,i,r,a){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-a)/i}}function Yt(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function Wt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var a=0;a<r.length-1;a++){var o=r[a],s=r[a+1];Yt(t,o,s)&&(n+=1)}}return n%2==1}function Nt(t,e,n,r){var a,s,l=i({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=Lt(c),h=e.width/Math.abs(u.xMax-u.xMin),d=e.height/Math.abs(u.yMax-u.yMin),f=h<d?h:d,p=e.width/2-Math.abs(u.xMax-u.xMin)/2*f,v=e.height/2-Math.abs(u.yMax-u.yMin)/2*f;r.beginPath(),r.clearRect(0,0,e.width,e.height),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill();for(var g=0;g<c.length;g++){r.beginPath(),r.setLineWidth(l.borderWidth*e.pixelRatio),r.setStrokeStyle(l.borderColor),r.setFillStyle(o(t[g].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==g&&(r.setStrokeStyle(l.activeBorderColor),r.setFillStyle(o(l.activeFillColor,l.activeFillOpacity)));for(var m=c[g].geometry.coordinates,_=0;_<m.length;_++){a=m[_],1==a.length&&(a=a[0]);for(var x=0;x<a.length;x++)s=It(a[x][1],a[x][0],u,f,p,v),0===x?(r.beginPath(),r.moveTo(s.x,s.y)):r.lineTo(s.x,s.y);r.fill(),1==l.border&&r.stroke()}if(1==e.dataLabel){var b=c[g].properties.centroid;if(b){s=It(b[1],b[0],u,f,p,v);var w=c[g].textSize||n.fontSize,S=c[g].properties.name;r.beginPath(),r.setFontSize(w),r.setFillStyle(c[g].textColor||"#666666"),r.fillText(S,s.x-y(S,w)/2,s.y+w/2),r.closePath(),r.stroke()}}}e.chartData.mapData={bounds:u,scale:f,xoffset:p,yoffset:v},Dt(e,n,r,1),r.draw()}function Ut(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,a=n[i].textSize,o=y(r,a),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Ft(-t.width/2,t.width/2,5)-o/2,l=Ft(-t.height/2,t.height/2,5)+a/2,c=[s-5+t.width/2,l-5-a+t.height/2,s+o+5+t.width/2,l+5+t.height/2];var h=Et(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[i].area=c}break;case"vertical":for(var d=function(){return Math.random()>.7},f=0;f<n.length;f++){var p=n[f].name,v=n[f].textSize,g=y(p,v),m=d(),_=void 0,x=void 0,b=void 0,w=void 0,S=0;while(1){S++;var D=void 0;if(m?(_=Ft(-t.width/2,t.width/2,5)-g/2,x=Ft(-t.height/2,t.height/2,5)+v/2,b=[x-5-g+t.width/2,-_-5+t.height/2,x+5+t.width/2,-_+v+5+t.height/2],w=[t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)-5,t.height/2-t.width/2+(x-5-g+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-_+v+5+t.height/2)+v,t.height/2-t.width/2+(x-5-g+t.width/2)+g+5],D=Et(w,n,t.height,t.width)):(_=Ft(-t.width/2,t.width/2,5)-g/2,x=Ft(-t.height/2,t.height/2,5)+v/2,b=[_-5+t.width/2,x-5-v+t.height/2,_+g+5+t.width/2,x+5+t.height/2],D=Et(b,n,t.width,t.height)),!D)break;if(1e3==S){b=[-1e3,-1e3,-1e3,-1e3];break}}m?(n[f].area=w,n[f].areav=b):n[f].area=b,n[f].rotate=m}break}return n}function zt(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;i({},{type:"normal",autoColors:!0},e.extra.word);r.beginPath(),r.setFillStyle(e.background||"#FFFFFF"),r.rect(0,0,e.width,e.height),r.fill(),r.save();var o=e.chartData.wordCloudData;r.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){r.save(),o[s].rotate&&r.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,u=y(l,c);r.beginPath(),r.setStrokeStyle(o[s].color),r.setFillStyle(o[s].color),r.setFontSize(c),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a):r.fillText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?r.strokeText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a):r.fillText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a)),r.stroke(),r.restore()}r.restore()}function Ht(t,e,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=i({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=z(t,h,a),r.save(),r.translate(c.x,c.y);for(var d=0;d<t.length;d++)0==d?(e.tooltip&&e.tooltip.index==d&&(r.beginPath(),r.setFillStyle(o(t[d].color,s.activeOpacity)),r.moveTo(-u,0),r.lineTo(-t[d].radius-u,-l),r.lineTo(t[d].radius+u,-l),r.lineTo(u,0),r.lineTo(-u,0),r.closePath(),r.fill()),t[d].funnelArea=[c.x-t[d].radius,c.y-l,c.x+t[d].radius,c.y],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(o(t[d].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[d].radius,-l),r.lineTo(t[d].radius,-l),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()):(e.tooltip&&e.tooltip.index==d&&(r.beginPath(),r.setFillStyle(o(t[d].color,s.activeOpacity)),r.moveTo(0,0),r.lineTo(-t[d-1].radius-u,0),r.lineTo(-t[d].radius-u,-l),r.lineTo(t[d].radius+u,-l),r.lineTo(t[d-1].radius+u,0),r.lineTo(0,0),r.closePath(),r.fill(),r.closePath(),r.fill()),t[d].funnelArea=[c.x-t[d].radius,c.y-l*(d+1),c.x+t[d].radius,c.y-l*d],r.beginPath(),r.setLineWidth(s.borderWidth*e.pixelRatio),r.setStrokeStyle(s.borderColor),r.setFillStyle(o(t[d].color,s.fillOpacity)),r.moveTo(0,0),r.lineTo(-t[d-1].radius,0),r.lineTo(-t[d].radius,-l),r.lineTo(t[d].radius,-l),r.lineTo(t[d-1].radius,0),r.lineTo(0,0),r.closePath(),r.fill(),1==s.border&&r.stroke()),r.translate(0,-l);return r.restore(),!1!==e.dataLabel&&1===a&&Vt(t,e,r,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function Vt(t,e,n,i,r,o,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,d=void 0,f=void 0,p=c.format?c.format(+c._proportion_.toFixed(2)):a.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*o,d=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,d),n.lineTo(h,d),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,d),n.arc(h,d,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(p,h+5,d+f/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*o,d=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,d),n.lineTo(h,d),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,d),n.arc(h,d,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(p,h-5-y(p),d+f/2-2),n.closePath(),n.stroke(),n.closePath())}}function Bt(t,e){e.draw()}var Gt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function qt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,a=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var o=(n-r)/t.duration,s=Gt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),i(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),i(a,e)}function Jt(t,e,n,r){var a=this,o=e.series,s=e.categories;o=v(o,e,n);var c=e.animation?e.duration:0;this.animationInstance&&this.animationInstance.stop();var u=null;if("candle"==t){var h=i({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,o[0].data),u=v(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=v(e.seriesMA,e,n):o}else u=o;e._series_=o=P(o),e.area=new Array(4);for(var d=0;d<4;d++)e.area[d]=e.padding[d];var f=Y(u,e,n,e.chartData),p=f.area.wholeHeight,g=f.area.wholeWidth;switch(n.legendHeight=p,e.legend.position){case"top":e.area[0]+=p;break;case"bottom":e.area[2]+=p;break;case"left":e.area[3]+=g;break;case"right":e.area[1]+=g;break}var y={},m=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type?(y=it(o,e,n),m=y.yAxisWidth,n.yAxisWidth=m,e.area[3]+=m):n.yAxisWidth=m,e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=K(e.categories,e,n);var _=W(e.categories,e,n,e.chartData.xAxisData.eachSpacing),x=_.xAxisHeight,b=_.angle;n.xAxisHeight=x,n._xAxisTextAngle_=b,e.area[2]+=x,e.chartData.categoriesData=_}if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var w=0,S=e.chartData.xAxisData.xAxisPoints,D=e.chartData.xAxisData.startX,k=e.chartData.xAxisData.endX,T=e.chartData.xAxisData.eachSpacing,A=T*(S.length-1),O=k-D;w=O-A,a.scrollOption={currentOffset:w,startTouchX:w,distance:0,lastMoveTime:0},e._scrollDistance_=w}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:q(u)),t){case"word":var M=i({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Ut(e,M.type)),this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),zt(o,e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":r.clearRect(0,0,e.width,e.height),Nt(o,e,n,r);break;case"funnel":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.funnelData=Ht(o,e,n,r,t),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new qt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),Tt(s,e,n,r),kt(s,e,n,r);var i=wt(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(o,e,n,r),!1!==e.enableMarkLine&&1===t&&pt(u,h,e,n,r),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t,c,a),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new qt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),Tt(s,e,n,r),kt(s,e,n,r);var i=St(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(o,e,n,r),!1!==e.enableMarkLine&&1===t&&pt(u,h,e,n,r),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t,c,a),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new qt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),Tt(s,e,n,r),kt(s,e,n,r);var i=_t(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(o,e,n,r),!1!==e.enableMarkLine&&1===t&&pt(u,h,e,n,r),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t,c,a),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new qt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),Tt(s,e,n,r),kt(s,e,n,r);var i=bt(o,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,u=i.minRange,h=i.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(o,e,n,r),!1!==e.enableMarkLine&&1===t&&pt(u,h,e,n,r),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t,c,a),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.pieData=Ot(o,e,n,r,t),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.pieData=Mt(o,e,n,r,t),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.radarData=$t(o,e,n,r,t),At(e.series,e,n,r,e.chartData),Dt(e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.arcbarData=Ct(o,e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new qt({timing:"easeInOut",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),e.chartData.gaugeData=Rt(s,o,e,n,r,t),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new qt({timing:"easeIn",duration:c,onProcess:function(t){r.clearRect(0,0,e.width,e.height),e.rotate&&ot(r,e),Tt(s,e,n,r),kt(s,e,n,r);var i=xt(o,u,e,n,r,t),a=i.xAxisPoints,l=i.calPoints,c=i.eachSpacing,h=i.minRange,d=i.maxRange;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Pt(o,e,n,r),!1!==e.enableMarkLine&&1===t&&pt(h,d,e,n,r),At(u||e.series,e,n,r,e.chartData),Dt(e,n,r,t,c,a),Bt(e,r)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function Xt(){this.events={}}qt.prototype.stop=function(){this.isStop=!0},Xt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Xt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],a=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,a)}catch(n){console.error(e(n," at u-charts\\u-charts.js:4518"))}})};var Zt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=i({},t.title),t.subtitle=i({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=i({},{gridType:"solid",dashLength:4*t.pixelRatio},t.yAxis),t.xAxis=i({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4*t.pixelRatio,scrollAlign:"left",boundaryGap:"center"},t.xAxis),t.legend=i({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=i({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation;var e=JSON.parse(JSON.stringify(r));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:r.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=r.yAxisWidth*t.pixelRatio,e.xAxisHeight=r.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=r.xAxisLineHeight*t.pixelRatio,e.legendHeight=r.legendHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=r.titleFontSize*t.pixelRatio,e.subtitleFontSize=r.subtitleFontSize*t.pixelRatio,e.toolTipPadding=r.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=r.toolTipLineHeight*t.pixelRatio,e.columePadding=r.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Xt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Jt.call(this,t.type,t,e,this.context)};Zt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=i({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=it(this.opts.series,this.opts,this.config),r=n.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=K(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*(s.length-1),d=c-l;a=d-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Jt.call(this,this.opts.type,this.opts,this.config,this.context)},Zt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=it(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=K(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*n,d=c-l,f=d-u*(s.length-1);a=d/2-h,a>0&&(a=0),a<f&&(a=f),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Jt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at u-charts\\u-charts.js:4679"))},Zt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Zt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Zt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=x(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?$({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?E({x:n.x,y:n.y},this.opts):"word"===this.opts.type?F({x:n.x,y:n.y},this.opts.chartData.wordCloudData):A({x:n.x,y:n.y},this.opts.chartData.xAxisPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Zt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=x(e,this.opts,t);return O({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Zt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){x(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,Jt.call(this,this.opts.type,this.opts,this.config,this.context))}},Zt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=null;r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r||console.log(e("touchError"," at u-charts\\u-charts.js:4815"));var a=x(r,this.opts,t),o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=D(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,d=u.offset;d.y=a.y,s.tooltip={textList:h,offset:d,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var f=k(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=f.textList,d=f.offset;d.y=a.y,s.tooltip={textList:h,offset:d,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=T(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,d=u.offset;d.y=a.y,s.tooltip={textList:h,offset:d,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],d={x:a.x,y:a.y};s.tooltip={textList:h,offset:d,option:n,index:l}}Jt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],d={x:a.x,y:a.y};s.tooltip={textList:h,offset:d,option:n,index:l}}s.updateData=!1,Jt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=i({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),d={x:a.x,y:a.y};s.tooltip={textList:h,offset:d,option:n,index:l}}}Jt.call(this,s.type,s,this.config,this.context)}},Zt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=i({},this.opts,{_scrollDistance_:t,animation:!1});Jt.call(this,this.opts.type,e,this.config,this.context)},Zt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=x(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Zt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),r=n-this.scrollOption.lastMoveTime;if(!(r<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=x(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-l;var h=i({},this.opts,{_scrollDistance_:l+o,animation:!1});return Jt.call(this,h.type,h,this.config,this.context),l+o}}},Zt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Zt)}).call(this,n("0de9")["default"],n("6e42")["default"])},9122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.updateFamily=e.unBindDevice=e.listFamilys=e.listFamilyBindDevices=e.familyBindDevice=e.createFamily=void 0;var i=n("820e"),r=function(t,e,n){return(0,i.request)({url:"family/createFamily",data:{city:t,familyName:e,unionId:n},method:"POST"})};e.createFamily=r;var a=function(t,e){return(0,i.request)({url:"family/familyBindDevice",data:{deviceName:t,familyId:e},method:"POST"})};e.familyBindDevice=a;var o=function(t){return(0,i.request)({url:"family/listFamilyBindDevices?familyId=".concat(t),method:"GET"})};e.listFamilyBindDevices=o;var s=function(t){return(0,i.request)({url:"family/listFamilys?unionId=".concat(t),method:"GET"})};e.listFamilys=s;var l=function(t){return(0,i.request)({url:"family/unBindDevice?deviceId=".concat(t),method:"DELETE"})};e.unBindDevice=l;var c=function(t,e,n){return(0,i.request)({url:"family/updateFamily",data:{city:t,familyId:e,familyName:n},method:"PUT"})};e.updateFamily=c},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,d="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",p=1800,v=300,g=10,y="__DC_STAT_UUID",m="__DC_UUID_VALUE";function _(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=m}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,m)}}return e}var x=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var a in n)i[n[a]]=t[n[a]],r+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},D=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},k=function(){return"n"===S()?plus.runtime.version:""},T=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},P=function(e){var n=S(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},A="First__Visit__Time",O="Last__Visit__Time",M=function(){var e=t.getStorageSync(A),n=0;return e?n=e:(n=w(),t.setStorageSync(A,n),t.removeStorageSync(O)),n},C=function(){var e=t.getStorageSync(O),n=0;return n=e||"",t.setStorageSync(O,w()),n},R="__page__residence__time",$=0,F=0,E=function(){return $=w(),"n"===S()&&t.setStorageSync(R,w()),$},L=function(){return F=w(),"n"===S()&&($=t.getStorageSync(R)),F-$},I="Total__Visit__Count",j=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},Y=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},W=0,N=0,U=function(){var t=(new Date).getTime();return W=t,N=0,t},z=function(){var t=(new Date).getTime();return N=t,t},H=function(t){var e=0;if(0!==W&&(e=N-W),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>p;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===S()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},B=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===S()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},q=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("dfc8").default,X=n("b6f7").default||n("b6f7"),Z=t.getSystemInfoSync(),K=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:_(),ut:S(),mpn:D(),ak:X.appid,usv:h,v:k(),ch:T(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Z.platform?"a":"i",brand:Z.brand||"",md:Z.model,sv:Z.system.replace(/(Android|iOS)\s/,""),mpsdk:Z.SDKVersion||"",mpv:Z.version||"",lang:Z.language,pr:Z.pixelRatio,ww:Z.windowWidth,wh:Z.windowHeight,sw:Z.screenWidth,sh:Z.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){z();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,z();var n=H();U();var i=B(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=B(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return U(),this.__licationShow=!1,void(this._lastPageRoute=t);z(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}U()}},{key:"_pageHide",value:function(){if(!this.__licationHide){z();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=P(t.scene),this.statData.fvts=M(),this.statData.lvts=C(),this.statData.tvc=j(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=w(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===S()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",o),!(L()<g)||n){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),E();var l=[],c=[],u=[],d=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)d(f);l.push.apply(l,c.concat(u));var p={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(p):setTimeout(function(){i._sendRequest(p)},200):this.imageRequest(p)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:d,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=x(Y(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){q(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return l(this,n),e=i(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(K),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},b52e:function(t,e,n){},b6f7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__9E1D7FE"};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},d595:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("66fd")),r=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var o=new r.default.Store({state:{appName:"健康生活",code:null,address:[],currentAddress:null,modifyAddress:null,brands:[{id:1,name:"美的",products:[{id:1,name:"V2空气净化器",img:"/static/images/v2.png"},{id:2,name:"V3空气净化器",img:"/static/images/v3.png"}]},{id:2,name:"沁园",products:[{id:1,name:"V2空气净化器",img:"/static/images/v2.png"},{id:2,name:"V3空气净化器",img:"/static/images/v3.png"}]},{id:3,name:"海尔",products:[{id:1,name:"V2空气净化器",img:"/static/images/v2.png"},{id:2,name:"V3空气净化器",img:"/static/images/v3.png"}]},{id:4,name:"Blue air",products:[{id:1,name:"V2空气净化器",img:"/static/images/v2.png"},{id:2,name:"V3空气净化器",img:"/static/images/v3.png"}]},{id:5,name:"华为",products:[{id:1,name:"V2空气净化器",img:"/static/images/v2.png"},{id:2,name:"V3空气净化器",img:"/static/images/v3.png"}]}],selectBrand:null,selectProduct:null,devices:[],selectDevice:null,currentUser:null,services:[{type:"一年期服务",price:230,oldprice:199},{type:"二年期服务",price:478,oldprice:399},{type:"三年期服务",price:770,oldprice:599}],currentService:null,startTime:null,shutdownTime:null},mutations:{setAddress:function(t,e){t.address=e,t.address&&t.address.length>0&&(t.currentAddress=t.address[0])},setStartTime:function(t,e){t.startTime=e},setShutdownTime:function(t,e){t.shutdownTime=e},setcurrentAddress:function(t,e){if(t.currentAddress=e,t.address&&t.address.length>0){var n=t.address.findIndex(function(t){return t.id==e.id});-1==n&&t.address.push(e)}else t.address=[],t.address.push(e)},setCurrentService:function(t,e){t.currentService=e},setSelectDeviceProperty:function(t,e){t.selectDevice[e.property]=e.value;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setDevices:function(t,e){t.devices=e},setCurrentUser:function(t,e){t.currentUser=e},setSelectDeviceStart:function(t,e){t.selectDevice.start=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceTurnOnTime:function(t,e){t.selectDevice.turnOnTime=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceTurnOffTime:function(t,e){t.selectDevice.turnOffTime=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceRepeat:function(t,e){1==e.type?t.selectDevice.turnOnRepeat=e.value:t.selectDevice.turnOffRepeat=e.value;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceTurnOn:function(t,e){t.selectDevice.turnOn=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceTurnOff:function(t,e){t.selectDevice.turnOff=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceClock:function(t,e){t.selectDevice.clock=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceSpeed:function(t,e){t.selectDevice.speed=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceAuto:function(t,e){t.selectDevice.auto=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDeviceSleep:function(t,e){t.selectDevice.sleep=e;var n=t.selectDevice;t.selectDevice=null,t.selectDevice=n},setSelectDevice:function(t,e){t.selectDevice=e},setSelectProduct:function(t,e){t.selectProduct=e},setSelectBrand:function(t,e){t.selectBrand=e},createAddress:function(t,e){null==t.currentAddress&&(t.currentAddress=e),t.address&&t.address.length>0?t.address.push(e):(t.address=[],t.address.push(e))},removeAddress:function(t,e){var n=t.address.indexOf(function(t){return t.id==e});t.address.splice(n,1)},changeAddress:function(t,e){var n=t.address.find(function(t){return t.id==e.id});n.familyName=e.familyName,n.id=e.id,n.city=e.city},setModifyAddress:function(t,e){t.modifyAddress=e},setAppName:function(t,e){t.appName=e},setCode:function(t,e){t.code=e}}}),s=o;e.default=s},dfc8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/index":{navigationBarBackgroundColor:"#10AB6C",navigationBarTextStyle:"white"},"pages/login/login":{},"pages/address/addAddress":{},"pages/login/index":{},"pages/device/addDevice":{},"pages/device/device":{},"pages/device/connectWifi":{},"pages/login/phoneLogin":{},"pages/login/clause":{},"pages/device/searchDevice":{},"pages/device/settingDevice":{},"pages/device/settingWifi":{},"pages/device/deviceDetail":{},"pages/device/setTimer":{},"pages/device/settingTime":{},"pages/device/connectStatus":{},"pages/device/configDevice":{},"pages/device/repeat":{},"pages/device/subscribe":{},"pages/device/shareDevice":{},"pages/device/shareManage":{},"pages/device/serviceDetail":{},"pages/device/buy":{},"pages/my/my":{},"pages/my/about":{},"pages/my/config":{},"pages/my/help":{},"pages/my/message":{},"pages/my/service":{},"pages/my/share":{},"pages/my/opinion":{},"pages/my/modifyUser":{},"pages/address/addressList":{},"pages/address/managerAddress":{},"pages/address/modifyAddress":{},"pages/address/createAddress":{},"components/CitySelect":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"健康生活",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"}};e.default=i}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/address.js';

define('components/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/address"], {
  3905: function _(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("6126"),
        r = e("d1df");

    for (var a in r) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return r[n];
        });
      }(a);
    }

    e("63b2");
    var c = e("2877"),
        f = Object(c["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = f.exports;
  },
  6126: function _(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        r = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return r;
    });
  },
  "63b2": function b2(n, t, e) {
    "use strict";

    var u = e("90be"),
        r = e.n(u);
    r.a;
  },
  "90be": function be(n, t, e) {},
  "98ce": function ce(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {};
    t.default = u;
  },
  d1df: function d1df(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("98ce"),
        r = e.n(u);

    for (var a in u) {
      "default" !== a && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(a);
    }

    t["default"] = r.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/address-create-component', {
  'components/address-create-component': function componentsAddressCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("3905"));
  }
}, [['components/address-create-component']]]);
});
require('components/address.js');
__wxRoute = 'components/navbar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/navbar.js';

define('components/navbar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/navbar"], {
  "2cc5": function cc5(t, n, e) {
    "use strict";

    (function (t, r) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var o = e("2f62");

      function a(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
              r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          }))), r.forEach(function (n) {
            u(t, n, e[n]);
          });
        }

        return t;
      }

      function u(t, n, e) {
        return n in t ? Object.defineProperty(t, n, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[n] = e, t;
      }

      var i = function i() {
        return e.e("components/address").then(e.bind(null, "3905"));
      },
          c = {
        name: "navbar",
        components: {
          address: i
        },
        props: ["bgColor", "fgColor", "showAddress", "title", "back", "isHome", "url", "isTabPage"],
        data: function data() {
          return {
            paddingTop: t.getSystemInfoSync().statusBarHeight,
            backgroundColor: "#fff",
            foregroudColor: "#000"
          };
        },
        computed: a({}, (0, o.mapState)(["appName", "currentAddress"]), {
          background: function background() {
            return this.bgColor ? this.bgColor : this.backgroundColor;
          },
          color: function color() {
            return this.fgColor ? this.fgColor : this.foregroudColor;
          },
          dispTitle: function dispTitle() {
            return this.title ? this.title : this.appName;
          },
          addressColor: function addressColor() {
            return this.isHome ? "#fff" : "#585858";
          }
        }),
        methods: {
          switchAddress: function switchAddress() {
            t.navigateTo({
              url: "/pages/address/addressList",
              success: function success(t) {
                console.log(r(t, " at components\\navbar.vue:52"));
              },
              fail: function fail(t) {
                console.log(r(t, " at components\\navbar.vue:55"));
              }
            });
          },
          navigateBack: function navigateBack() {
            this.url && this.url.length > 0 ? this.isTabPage ? t.switchTab({
              url: this.url
            }) : t.navigateTo({
              url: this.url
            }) : t.navigateBack({});
          }
        }
      };

      n.default = c;
    }).call(this, e("6e42")["default"], e("0de9")["default"]);
  },
  "36a4": function a4(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("ba25"),
        o = e("972f");

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    e("c723");
    var u = e("2877"),
        i = Object(u["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  "8ee4": function ee4(t, n, e) {},
  "972f": function f(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("2cc5"),
        o = e.n(r);

    for (var a in r) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(a);
    }

    n["default"] = o.a;
  },
  ba25: function ba25(t, n, e) {
    "use strict";

    var r = function r() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return r;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  c723: function c723(t, n, e) {
    "use strict";

    var r = e("8ee4"),
        o = e.n(r);
    o.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/navbar-create-component', {
  'components/navbar-create-component': function componentsNavbarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("36a4"));
  }
}, [['components/navbar-create-component']]]);
});
require('components/navbar.js');

__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1387:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},"19df":function(e,t,n){"use strict";n.r(t);var a=n("1387"),i=n("f55e");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("54d2");var o=n("2877"),c=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"3d9f":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");a(n("66fd"));var t=a(n("19df"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"517b":function(e,t,n){},"54d2":function(e,t,n){"use strict";var a=n("517b"),i=n.n(a);i.a},"80d4":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,i,r=n("2f62"),o=d(n("880c")),c=n("9122"),s=n("355e");n("3be5");function d(e){return e&&e.__esModule?e:{default:e}}function u(e){return h(e)||f(e)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function h(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p={},m=(a={data:function(){return{showDialog:!1,cWidth:"",cHeight:"",tips:"",pixelRatio:1,serverData:"",itemCount:10,sliderMax:50,devices:[]}},computed:g({},(0,r.mapState)(["currentAddress","devices","currentUser"])),onLoad:function(){var t=this;e.showLoading({}),e.setNavigationBarTitle({title:"首页"}),(0,s.login)().then(function(e){return t.$store.commit("setCurrentUser",e),(0,c.listFamilys)(e.OpenId)}).then(function(n){if(n){if(!n.data.data||0!=n.data.data.length)return t.$store.commit("setAddress",n.data.data),(0,c.listFamilyBindDevices)(n.data.data[0].id);e.navigateTo({url:"../address/addAddress"})}}).then(function(n){if(n){var a;if(n.data.data&&n.data.data.length>0)t.$store.commit("setDevices",n.data.data),t.devices=[],(a=t.devices).push.apply(a,u(n.data.data));else t.$store.commit("setDevices",[]),t.devices=[];e.hideLoading()}}).catch(function(t){"getUserInfo:fail scope unauthorized"==t.errMsg&&e.navigateTo({url:"../login/index",success:function(t){e.hideLoading()}})}),i=this,e.createSelectorQuery().select(".index-page").boundingClientRect(function(e){t.cWidth=e.width,t.cHeight=200,t.fillData()}).exec()},onShow:function(){var e=this;this.showDialog=!1,this.currentAddress&&(0,c.listFamilyBindDevices)(this.currentAddress.id).then(function(t){var n;t.data.data&&t.data.data.length>0?(e.$store.commit("setDevices",t.data.data),e.devices=[],(n=e.devices).push.apply(n,u(t.data.data))):(e.$store.commit("setDevices",[]),e.devices=[])})},onReady:function(){},methods:g({},(0,r.mapMutations)(["setCurrentUser","setAddress"]),{OnWechatAuthorized:function(){e.navigateTo({url:"../login/login"})},onGetUserInfo:function(){e.navigateTo({url:"../login/login"})},switchAddress:function(){e.navigateTo({url:"../address/addressList"})},addDevice:function(){e.navigateTo({url:"../device/addDevice"})},fillData:function(){var e={categories:[],series:[]};e.categories=[0,3,6,9,12,15,18,21,23],e.series=[{name:"mine",data:[20,25,25,30,20,25,25,30,20],color:"#1890ff",type:"line",show:!0,pointShape:"circle",legendShape:"line"},{name:"average",data:[15,20,21,19,15,20,21,19,15],color:"#2fc25b",type:"line",show:!0,pointShape:"circle",legendShape:"line"},{name:"out_door",data:[10,15,17,8,10,15,17,8,10],color:"#facc14",type:"line",show:!0,pointShape:"circle",legendShape:"line"}],this.showLineA("canvasLineA",e)},showLineA:function(e,t){var n;p[e]=new o.default((n={$this:i,canvasId:e,type:"line",fontSize:11,padding:[15,15,15,15],legend:{show:!0,padding:5,lineHeight:11,margin:5,format:function(e){return e+"μg/m³"}},dataLabel:!1,dataPointShape:!1,background:"#FFFFFF",pixelRatio:i.pixelRatio,categories:t.categories,series:t.series,animation:!1,enableScroll:!0,xAxis:{itemCount:30,scrollAlign:"left"},yAxis:{min:10,max:60,format:function(e){return Math.floor(e)}},width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio},v(n,"dataLabel",!0),v(n,"dataPointShape",!0),n))},touchLineA:function(e){p["canvasLineA"].scrollStart(e)},moveLineA:function(e){p["canvasLineA"].scroll(e)},touchEndLineA:function(e){p["canvasLineA"].scrollEnd(e),p["canvasLineA"].showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}})},v(a,"computed",g({},(0,r.mapState)(["currentAddress","currentUser"]))),v(a,"mounted",function(){e.setNavigationBarTitle({title:"首页"})}),a);t.default=m}).call(this,n("6e42")["default"])},f55e:function(e,t,n){"use strict";n.r(t);var a=n("80d4"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a}},[["3d9f","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0ca1":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),i=n("355e"),o=n("9122");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={computed:s({},(0,a.mapState)(["code"])),mounted:function(){e.setNavigationBarTitle({title:"健康生活"})},onLoad:function(){},data:function(){return{showDialog:!1,currentUser:{},encrypt:null,first:!1}},methods:s({},(0,a.mapMutations)(["setCode","setCurrentUser","setAddress"]),{addAddress:function(e){this.$store.commit("setAddress",e)},OnWechatAuthorized:function(){this.showDialog=!1},getPhoneNumber:function(t){var n=this;console.log(r(t," at pages\\login\\login.vue:52")),this.encrypt=t.detail,t.detail&&t.detail.errMsg&&"getPhoneNumber:ok"!=t.detail.errMsg?e.showModal({title:"授权失败",content:t.detail.errMsg,showCancel:!1}):(0,i.getUserInfoWechat)().then(function(t){return e.showLoading({}),n.currentUser=t.userInfo,n.$store.commit("setCurrentUser",n.currentUser),(0,i.loginWechat)()}).then(function(e){return(0,i.getOpenId)(e)}).then(function(e){if(e.data.data.unionid)return n.currentUser.OpenId=e.data.data.unionid,n.currentUser.sessionKey=e.data.data.sessionKey,n.$store.commit("setCurrentUser",n.currentUser),(0,i.decodeUserInfo)(n.encrypt.encryptedData,n.encrypt.iv,n.currentUser.OpenId)}).then(function(t){if(t.data.data&&t.data.data.phoneNumber)return n.currentUser.phone=t.data.data.phoneNumber,n.$store.commit("setCurrentUser",n.currentUser),(0,i.getUser)(n.currentUser.OpenId);e.hideLoading(),e.showModal({title:"授权失败",content:"获取电话失败",showCancel:!1})}).then(function(t){t&&(n.first=null==t.data.data.avatarUrl&&null==t.data.data.nickName,n.currentUser=s({},t.data.data,n.currentUser),console.log(r(JSON.stringify(n.currentUser)," at pages\\login\\login.vue:96")),n.$store.commit("setCurrentUser",n.currentUser),n.first,(0,i.updateUser)({avatarUrl:n.currentUser.avatarUrl,nickName:n.currentUser.nickName,phone:n.currentUser.phone,unionId:n.currentUser.OpenId}).then(function(e){if(e)return(0,o.listFamilys)(n.currentUser.OpenId)}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))}))}).catch(function(t){e.hideLoading(),"getUserInfo:fail scope unauthorized"==t.errMsg&&(n.showDialog=!0)})},phone_login:function(){e.navigateTo({url:"./phoneLogin"})},onGetUserInfo:function(t){var n=this;t.detail&&t.detail.userInfo&&(this.currentUser=t.detail.userInfo,this.$store.commit("setCurrentUser",this.currentUser),e.showLoading({}),(0,i.loginWechat)().then(function(e){return(0,i.getOpenId)(e)}).then(function(e){if(e.data.data.unionid)return n.currentUser.OpenId=e.data.data.unionid,n.$store.commit("setCurrentUser",n.currentUser),(0,i.getUser)(n.currentUser.OpenId)}).then(function(t){if(t){if(n.first=null==t.data.data.avatarUrl&&null==t.data.data.nickName,n.currentUser=s({},t.data.data,n.currentUser),console.log(r(JSON.stringify(n.currentUser)," at pages\\login\\login.vue:186")),n.$store.commit("setCurrentUser",n.currentUser),!n.first)return(0,o.listFamilys)(n.currentUser.OpenId);(0,i.updateUser)({avatarUrl:n.currentUser.avatarUrl,nickName:n.currentUser.nickName,phone:null,unionId:n.currentUser.OpenId}).then(function(e){if(e)return(0,o.listFamilys)(n.currentUser.OpenId)}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))})}}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))}).catch(function(t){e.hideLoading()}))}})};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},"727c":function(e,t,n){"use strict";var r=n("ef23"),a=n.n(r);a.a},"79f6":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("a59c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7f16":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},a59c:function(e,t,n){"use strict";n.r(t);var r=n("7f16"),a=n("c7d0");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("727c");var o=n("2877"),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=s.exports},c7d0:function(e,t,n){"use strict";n.r(t);var r=n("0ca1"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},ef23:function(e,t,n){}},[["79f6","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/address/addAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addAddress.js';

define('pages/address/addAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addAddress"],{"0566":function(e,t,r){"use strict";(function(e){r("b52e"),r("921b");n(r("66fd"));var t=n(r("98b6"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},"32ef":function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r("2f62"),s=r("9122");function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={data:function(){return{addressName:"",currentAddress:{id:0,familyName:"",city:""}}},computed:d({},(0,n.mapState)(["modifyAddress","currentUser"])),onLoad:function(e){this.$store.commit("setModifyAddress",this.currentAddress)},onShow:function(){this.modifyAddress&&this.modifyAddress.id==this.currentAddress.id&&(this.currentAddress=this.modifyAddress)},methods:d({},(0,n.mapMutations)(["setModifyAddress","changeAddress"]),{selectCity:function(){e.navigateTo({url:"../../components/CitySelect"})},createAddress:function(){var t=this;null==this.addressName||0==this.addressName.length||null==this.currentAddress||0==this.currentAddress.city.length?e.showModal({title:"提示",content:"家庭名称和城市不能为空",showCancel:!1}):(this.currentAddress.addr=this.addressName,(0,s.createFamily)(this.currentAddress.city,this.addressName,this.currentUser.OpenId).then(function(r){"家庭创建成功"==r.data.msg&&(t.$store.commit("createAddress",r.data.data),e.switchTab({url:"../index/index"}))}))}})};t.default=a}).call(this,r("6e42")["default"])},6917:function(e,t,r){},"7ccd":function(e,t,r){"use strict";var n=r("6917"),s=r.n(n);s.a},"98b6":function(e,t,r){"use strict";r.r(t);var n=r("ed93"),s=r("f622");for(var d in s)"default"!==d&&function(e){r.d(t,e,function(){return s[e]})}(d);r("7ccd");var i=r("2877"),a=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=a.exports},ed93:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];r.d(t,"a",function(){return n}),r.d(t,"b",function(){return s})},f622:function(e,t,r){"use strict";r.r(t);var n=r("32ef"),s=r.n(n);for(var d in n)"default"!==d&&function(e){r.d(t,e,function(){return n[e]})}(d);t["default"]=s.a}},[["0566","common/runtime","common/vendor"]]]);
});
require('pages/address/addAddress.js');
__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"0071":function(e,t,n){},"0119":function(e,t,n){"use strict";n.r(t);var r=n("a6bb"),a=n("e0ac");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("f867");var d=n("2877"),o=Object(d["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},"284d":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),i=n("355e"),d=n("9122");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={computed:o({},(0,a.mapState)(["code"])),mounted:function(){e.setNavigationBarTitle({title:"健康生活"})},onLoad:function(){},data:function(){return{showDialog:!1,currentUser:{},encrypt:null,first:!1}},methods:o({},(0,a.mapMutations)(["setCode","setCurrentUser","setAddress"]),{addAddress:function(e){this.$store.commit("setAddress",e)},OnWechatAuthorized:function(){e.navigateTo({url:"login"})},getPhoneNumber:function(t){var n=this;console.log(r(t," at pages\\login\\index.vue:50")),this.encrypt=t.detail,t.detail&&t.detail.errMsg&&"getPhoneNumber:ok"!=t.detail.errMsg?e.showModal({title:"授权失败",content:t.detail.errMsg,showCancel:!1}):(0,i.getUserInfoWechat)().then(function(t){return e.showLoading({}),n.currentUser=t.userInfo,n.$store.commit("setCurrentUser",n.currentUser),(0,i.loginWechat)()}).then(function(e){return(0,i.getOpenId)(e)}).then(function(e){if(e.data.data.unionid)return n.currentUser.OpenId=e.data.data.unionid,n.currentUser.sessionKey=e.data.data.sessionKey,n.$store.commit("setCurrentUser",n.currentUser),(0,i.decodeUserInfo)(n.encrypt.encryptedData,n.encrypt.iv,n.currentUser.OpenId)}).then(function(t){if(t.data.data&&t.data.data.phoneNumber)return n.currentUser.phone=t.data.data.phoneNumber,n.$store.commit("setCurrentUser",n.currentUser),(0,i.getUser)(n.currentUser.OpenId);e.hideLoading(),e.showModal({title:"授权失败",content:"获取电话失败",showCancel:!1})}).then(function(t){t&&(n.first=null==t.data.data.avatarUrl&&null==t.data.data.nickName,n.currentUser=o({},t.data.data,n.currentUser),console.log(r(JSON.stringify(n.currentUser)," at pages\\login\\index.vue:94")),n.$store.commit("setCurrentUser",n.currentUser),n.first,(0,i.updateUser)({avatarUrl:n.currentUser.avatarUrl,nickName:n.currentUser.nickName,phone:n.currentUser.phone,unionId:n.currentUser.OpenId}).then(function(e){if(e)return(0,d.listFamilys)(n.currentUser.OpenId)}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))}))}).catch(function(t){e.hideLoading(),"getUserInfo:fail scope unauthorized"==t.errMsg&&(n.showDialog=!0)})},phone_login:function(){e.navigateTo({url:"./phoneLogin"})},onGetUserInfo:function(t){var n=this;t.detail&&t.detail.userInfo&&(this.currentUser=t.detail.userInfo,this.$store.commit("setCurrentUser",this.currentUser),e.showLoading({}),(0,i.loginWechat)().then(function(e){return(0,i.getOpenId)(e)}).then(function(e){if(e.data.data.unionid)return n.currentUser.OpenId=e.data.data.unionid,n.$store.commit("setCurrentUser",n.currentUser),(0,i.getUser)(n.currentUser.OpenId)}).then(function(t){if(t){if(n.first=null==t.data.data.avatarUrl&&null==t.data.data.nickName,n.currentUser=o({},t.data.data,n.currentUser),console.log(r(JSON.stringify(n.currentUser)," at pages\\login\\index.vue:184")),n.$store.commit("setCurrentUser",n.currentUser),!n.first)return(0,d.listFamilys)(n.currentUser.OpenId);(0,i.updateUser)({avatarUrl:n.currentUser.avatarUrl,nickName:n.currentUser.nickName,phone:null,unionId:n.currentUser.OpenId}).then(function(e){if(e)return(0,d.listFamilys)(n.currentUser.OpenId)}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))})}}).then(function(t){e.hideLoading(),t.data.data&&0==t.data.data.length?e.navigateTo({url:"../address/addAddress"}):(n.addAddress(t.data.data),e.switchTab({url:"../index/index"}))}).catch(function(t){e.hideLoading()}))}})};t.default=u}).call(this,n("6e42")["default"],n("0de9")["default"])},5082:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("0119"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a6bb:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},e0ac:function(e,t,n){"use strict";n.r(t);var r=n("284d"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},f867:function(e,t,n){"use strict";var r=n("0071"),a=n.n(r);a.a}},[["5082","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/device/addDevice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/addDevice.js';

define('pages/device/addDevice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/addDevice"],{"194c":function(t,e,n){"use strict";var r=n("7d67"),a=n.n(r);a.a},"236a":function(t,e,n){"use strict";n.r(e);var r=n("51ca"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=a.a},"51ca":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),a=n("3be5");function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var o={data:function(){return{currentBrand:null,brands:[],products:[]}},onLoad:function(){var t=this;(0,a.products)().then(function(e){e.data.data&&e.data.data.length>0?(t.brands=e.data.data,t.currentBrand=t.brands[0],t.$store.commit("setSelectBrand",t.brands[0])):(t.brands=[],t.currentBrand=null,t.$store.commit("setSelectBrand",null))})},watch:{currentBrand:function(e){var n=this;t.showLoading({title:"数据加载中"}),(0,a.product)(e.id).then(function(e){n.products=[],e.data.data&&e.data.data.length>0?(e.data.data.forEach(function(t){n.products.push(t)}),t.hideLoading()):t.hideLoading()})}},methods:c({},(0,r.mapMutations)(["setSelectBrand","setSelectProduct"]),{selectItem:function(t){this.currentBrand=t,this.$store.commit("setSelectBrand",t)},search:function(){t.navigateTo({url:"./searchDevice?brandid="+this.currentBrand.id})},selectProduct:function(e){this.$store.commit("setSelectProduct",e),t.navigateTo({url:"./settingDevice"})}})};e.default=o}).call(this,n("6e42")["default"])},"7d67":function(t,e,n){},a6c5:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},bde6:function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("bedf"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bedf:function(t,e,n){"use strict";n.r(e);var r=n("a6c5"),a=n("236a");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("194c");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports}},[["bde6","common/runtime","common/vendor"]]]);
});
require('pages/device/addDevice.js');
__wxRoute = 'pages/device/device';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/device.js';

define('pages/device/device.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/device"],{"4e0c":function(e,t,n){"use strict";n.r(t);var o=n("72af"),c=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=c.a},"72af":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("2f62"),a=(n("3be5"),n("9122"));function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{quality:["优","良","轻度污染","中度污染","重度污染","严重污染"]}},computed:i({},(0,c.mapState)(["currentAddress","devices","currentUser"])),onLoad:function(){console.log(e("onLoad"," at pages\\device\\device.vue:48")),o.setNavigationBarTitle({title:"智能硬件"})},onHide:function(){console.log(e("onHide"," at pages\\device\\device.vue:55"))},onShow:function(){var e=this;(0,a.listFamilyBindDevices)(this.currentAddress.id).then(function(t){t.data.data&&t.data.data.length>0?e.$store.commit("setDevices",t.data.data):e.$store.commit("setDevices",[])})},mounted:function(){console.log(e("mounted"," at pages\\device\\device.vue:67"))},created:function(){console.log(e("created"," at pages\\device\\device.vue:70"))},beforeCreate:function(){console.log(e("beforeCreate"," at pages\\device\\device.vue:73"))},beforeMount:function(){console.log(e("beforeMount"," at pages\\device\\device.vue:76"))},destroyed:function(){console.log(e("destroyed"," at pages\\device\\device.vue:79"))},methods:i({shortName:function(e){return e&&e.length>4?e.substr(0,4)+"...":e}},(0,c.mapMutations)(["setSelectDevice","setDevices"]),{switchAddress:function(){o.navigateTo({url:"../address/addressList"})},addDevice:function(){o.navigateTo({url:"./addDevice"})},selectDevice:function(e){this.$store.commit("setSelectDevice",e),o.navigateTo({url:"./deviceDetail"})},configDevice:function(e){this.$store.commit("setSelectDevice",e),o.navigateTo({url:"./configDevice?id=".concat(e.Id)})}})};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},7884:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");o(n("66fd"));var t=o(n("7ec1"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7ec1":function(e,t,n){"use strict";n.r(t);var o=n("a8a7"),c=n("4e0c");for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);n("f68e");var i=n("2877"),r=Object(i["a"])(c["default"],o["a"],o["b"],!1,null,null,null);t["default"]=r.exports},a85a:function(e,t,n){},a8a7:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=(e._self._c,e.__map(e.devices,function(t,n){var o=e.shortName(t.productName);return{$orig:e.__get_orig(t),m0:o}}));e.$mp.data=Object.assign({},{$root:{l0:n}})},c=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return c})},f68e:function(e,t,n){"use strict";var o=n("a85a"),c=n.n(o);c.a}},[["7884","common/runtime","common/vendor"]]]);
});
require('pages/device/device.js');
__wxRoute = 'pages/device/connectWifi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/connectWifi.js';

define('pages/device/connectWifi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/connectWifi"],{"438c":function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return u})},"527c":function(t,n,e){"use strict";var c=e("fc58"),u=e.n(c);u.a},c156:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={methods:{next:function(){t.navigateTo({url:"./settingWifi"})}}};n.default=e}).call(this,e("6e42")["default"])},d1c8:function(t,n,e){"use strict";e.r(n);var c=e("438c"),u=e("f22b");for(var f in u)"default"!==f&&function(t){e.d(n,t,function(){return u[t]})}(f);e("527c");var i=e("2877"),a=Object(i["a"])(u["default"],c["a"],c["b"],!1,null,null,null);n["default"]=a.exports},f22b:function(t,n,e){"use strict";e.r(n);var c=e("c156"),u=e.n(c);for(var f in c)"default"!==f&&function(t){e.d(n,t,function(){return c[t]})}(f);n["default"]=u.a},fc58:function(t,n,e){},fd0d:function(t,n,e){"use strict";(function(t){e("b52e"),e("921b");c(e("66fd"));var n=c(e("d1c8"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["fd0d","common/runtime","common/vendor"]]]);
});
require('pages/device/connectWifi.js');
__wxRoute = 'pages/login/phoneLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/phoneLogin.js';

define('pages/login/phoneLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/phoneLogin"],{"017b":function(t,e,n){"use strict";n.r(e);var o=n("08fe"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"08fe":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("2f62");function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{phoneClass:"",codeClass:""}},computed:u({},(0,o.mapState)(["currentUser"])),mounted:function(){t.setNavigationBarTitle({title:"手机登录"})},methods:{phoneFocus:function(t){this.phoneClass="focus"},phoneBlur:function(t){this.phoneClass=""},codeFocus:function(t){this.codeClass="focus"},codeBlur:function(t){this.codeClass=""},login:function(){t.showToast({title:"请输入正确的手机号",duration:2e3})}}};e.default=c}).call(this,n("6e42")["default"])},"2a25":function(t,e,n){"use strict";var o=n("e61d"),u=n.n(o);u.a},"327f":function(t,e,n){"use strict";n.r(e);var o=n("5954"),u=n("017b");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("2a25");var c=n("2877"),a=Object(c["a"])(u["default"],o["a"],o["b"],!1,null,null,null);e["default"]=a.exports},4229:function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");o(n("66fd"));var e=o(n("327f"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5954:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return u})},e61d:function(t,e,n){}},[["4229","common/runtime","common/vendor"]]]);
});
require('pages/login/phoneLogin.js');
__wxRoute = 'pages/login/clause';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/clause.js';

define('pages/login/clause.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/clause"],{"4ad7":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");u(n("66fd"));var e=u(n("aeb4"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5108:function(t,e,n){"use strict";n.r(e);var u=n("b58a"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},"7f22":function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},aeb4:function(t,e,n){"use strict";n.r(e);var u=n("7f22"),a=n("5108");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},b58a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={mounted:function(){t.setNavigationBarTitle({title:"用户协议"})}};e.default=n}).call(this,n("6e42")["default"])}},[["4ad7","common/runtime","common/vendor"]]]);
});
require('pages/login/clause.js');
__wxRoute = 'pages/device/searchDevice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/searchDevice.js';

define('pages/device/searchDevice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/searchDevice"],{"1eae":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},"32a0":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),u=n("3be5");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={data:function(){return{product:null,products:null}},computed:a({},(0,r.mapState)(["selectProduct"])),onLoad:function(e){var n=this;e.brandid?(this.products=[],(0,u.product)(e.brandid).then(function(e){n.products=[],e.data.data&&e.data.data.length>0?(e.data.data.forEach(function(t){n.products.push(t)}),t.hideLoading()):t.hideLoading()})):this.products=null},methods:a({},(0,r.mapMutations)(["setSelectProduct"]),{settingDevice:function(e){this.$store.commit("setSelectProduct",e),t.navigateTo({url:"./settingDevice"})}})};e.default=c}).call(this,n("6e42")["default"])},6637:function(t,e,n){},7474:function(t,e,n){"use strict";var r=n("6637"),u=n.n(r);u.a},"9f7b":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("f9da"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bdd5:function(t,e,n){"use strict";n.r(e);var r=n("32a0"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=u.a},f9da:function(t,e,n){"use strict";n.r(e);var r=n("1eae"),u=n("bdd5");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("7474");var o=n("2877"),c=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports}},[["9f7b","common/runtime","common/vendor"]]]);
});
require('pages/device/searchDevice.js');
__wxRoute = 'pages/device/settingDevice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/settingDevice.js';

define('pages/device/settingDevice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/settingDevice"],{"14f9":function(t,n,e){},"1b35":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=e("2f62");function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},c=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(c=c.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.forEach(function(n){u(t,n,e[n])})}return t}function u(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var o={data:function(){return{confirm:!1}},computed:r({},(0,c.mapState)(["selectProduct"])),onLoad:function(){t.setNavigationBarTitle({title:"设备配置"})},methods:{change:function(){this.confirm=!0},next:function(){this.confirm&&t.navigateTo({url:"./connectWifi"})}}};n.default=o}).call(this,e("6e42")["default"])},"20c8":function(t,n,e){"use strict";(function(t){e("b52e"),e("921b");c(e("66fd"));var n=c(e("5df1"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"4f45":function(t,n,e){"use strict";var c=e("14f9"),r=e.n(c);r.a},"5df1":function(t,n,e){"use strict";e.r(n);var c=e("c0cc"),r=e("a903");for(var u in r)"default"!==u&&function(t){e.d(n,t,function(){return r[t]})}(u);e("4f45");var o=e("2877"),i=Object(o["a"])(r["default"],c["a"],c["b"],!1,null,null,null);n["default"]=i.exports},a903:function(t,n,e){"use strict";e.r(n);var c=e("1b35"),r=e.n(c);for(var u in c)"default"!==u&&function(t){e.d(n,t,function(){return c[t]})}(u);n["default"]=r.a},c0cc:function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},r=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return r})}},[["20c8","common/runtime","common/vendor"]]]);
});
require('pages/device/settingDevice.js');
__wxRoute = 'pages/device/settingWifi';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/settingWifi.js';

define('pages/device/settingWifi.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/settingWifi"],{"09ac":function(t,n,e){"use strict";(function(t,e){function i(t){return o(t)||r(t)||a()}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function o(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={data:function(){return{wifis:[],index:0}},onLoad:function(){t.setNavigationBarTitle({title:"设备配网"});var n=this;wx.startWifi({success:function(t){console.log(e(t," at pages\\device\\settingWifi.vue:30")),wx.getWifiList({success:function(t){console.log(e(t," at pages\\device\\settingWifi.vue:33")),wx.onGetWifiList(function(t){var e;(e=n.wifis).push.apply(e,i(t.wifiList))})},fail:function(t){console.log(e(t," at pages\\device\\settingWifi.vue:39"))}})}})},methods:{bindPickerChange:function(t){this.index=parseInt(t.detail.value)},next:function(){t.navigateTo({url:"./connectStatus"})}}};n.default=u}).call(this,e("6e42")["default"],e("0de9")["default"])},"1fa8":function(t,n,e){"use strict";var i=e("435c"),a=e.n(i);a.a},"435c":function(t,n,e){},"47dd":function(t,n,e){"use strict";(function(t){e("b52e"),e("921b");i(e("66fd"));var n=i(e("d462"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},4815:function(t,n,e){"use strict";e.r(n);var i=e("09ac"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);n["default"]=a.a},"53e1":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},d462:function(t,n,e){"use strict";e.r(n);var i=e("53e1"),a=e("4815");for(var r in a)"default"!==r&&function(t){e.d(n,t,function(){return a[t]})}(r);e("1fa8");var o=e("2877"),u=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=u.exports}},[["47dd","common/runtime","common/vendor"]]]);
});
require('pages/device/settingWifi.js');
__wxRoute = 'pages/device/deviceDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/deviceDetail.js';

define('pages/device/deviceDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/deviceDetail"],{"62f8":function(e,t,i){"use strict";i.r(t);var a=i("77f6"),s=i("c920");for(var u in s)"default"!==u&&function(e){i.d(t,e,function(){return s[e]})}(u);i("876b");var c=i("2877"),n=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=n.exports},7374:function(e,t,i){"use strict";(function(e){i("b52e"),i("921b");a(i("66fd"));var t=a(i("62f8"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"77f6":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})},7830:function(e,t,i){},"876b":function(e,t,i){"use strict";var a=i("7830"),s=i.n(a);s.a},8969:function(e,t,i){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,u=i("2f62"),c=i("3be5");function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){r(e,t,i[t])})}return e}function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var d=(s={data:function(){return{quality:["优","良","轻度污染","中度污染","重度污染","严重污染"],deviceStatus:{},paramWidth:40,LifeparamWidth:60,Runtimeleft:0,LifeTimeleft:0,paramLength:4,RuntimeparamLength:4,LifeTimeLength:4,paramDispLength:4,LifeTimeparamDispLength:4,width:0,parameterWidth:0,arguementWidth:0,left:{FilterLifeTimePercent:0,Runtime:0,LifeTime:0}}},computed:n({},(0,u.mapState)(["selectDevice"])),mounted:function(){},onLoad:function(){var e=this;(0,c.getDevice)(this.selectDevice.deviceName).then(function(t){if(e.deviceStatus={},t.data.data&&t.data.data.datas&&t.data.data.datas.length>0)for(var i=0;i<t.data.data.datas.length;i++){var a=t.data.data.datas[i];e.deviceStatus[a.identifier]=a.value}var s={isArray:!0,name:"FilterLifeTimePercent",unit:"%",title:"滤芯剩余",left:0,value:[]};for(var u in e.deviceStatus)u.indexOf("FilterLifeTimePercent")>-1&&s.value.push(e.deviceStatus[u]);s.length=s.value.length,s.value.length>0&&(e.deviceStatus.FilterLifeTimePercent=s);var c={name:"Runtime",isArray:!0,unit:"h",title:"运行时间",left:0,value:[]};for(var n in e.deviceStatus)n.indexOf("Runtime")>-1&&c.value.push(e.deviceStatus[n]);c.length=c.value.length,c.value.length>0&&(e.deviceStatus.Runtime=c);var r={name:"LifeTime",unit:"h",left:0,title:"滤芯剩余时间",isArray:!0,value:[]};for(var d in e.deviceStatus)d.indexOf("FilterLifeTimeDays")>-1&&r.value.push(e.deviceStatus[d]);r.length=r.value.length,r.value.length>0&&(e.deviceStatus.LifeTime=r),e.deviceStatus.hasOwnProperty("TVOC")&&(e.deviceStatus.dispTVOC={value:parseFloat(e.deviceStatus.TVOC).toFixed(4),isArray:!1,title:"TVOC_VOC浓度",unit:"mg/m³"}),e.deviceStatus.hasOwnProperty("WaterShortageStatus")&&(e.deviceStatus.dispWaterShortageStatus={value:(e.deviceStatus.WaterShortageStatus,"缺水"),isArray:!1,title:"加湿缺水状态",unit:""});var o=[];if(e.deviceStatus.hasOwnProperty("FilterLifeTimePercent")&&o.push("FilterLifeTimePercent"),e.deviceStatus.hasOwnProperty("dispTVOC")&&o.push("dispTVOC"),e.deviceStatus.hasOwnProperty("Runtime")&&o.push("Runtime"),e.deviceStatus.hasOwnProperty("dispWaterShortageStatus")&&o.push("dispWaterShortageStatus"),e.deviceStatus.hasOwnProperty("LifeTime")&&o.push("LifeTime"),o.length>0){e.deviceStatus.dispParameters=o,e.deviceStatus.dispParametersRow=[];for(var h=0;h<e.deviceStatus.dispParameters.length/2;h++)e.deviceStatus.dispParametersRow.push(h)}e.deviceStatus.HCHO=e.deviceStatus.hasOwnProperty("HCHO")?parseFloat(e.deviceStatus.HCHO).toFixed(4):null,e.deviceStatus.hasOwnProperty("PowerSwitch")?e.deviceStatus.PowerSwitch=!!e.deviceStatus.PowerSwitch:e.deviceStatus.PowerSwitch=null,e.deviceStatus.hasOwnProperty("WindSpeed")?e.deviceStatus.WindSpeed=e.deviceStatus.WindSpeed?e.deviceStatus.WindSpeed:0:e.deviceStatus.WindSpeed=null,e.deviceStatus.hasOwnProperty("WorkMode")?e.deviceStatus.WorkMode=!!e.deviceStatus.WorkMode:e.deviceStatus.WorkMode=null,e.deviceStatus.hasOwnProperty("IonsSwitch")?e.deviceStatus.IonsSwitch=!!e.deviceStatus.IonsSwitch:e.deviceStatus.IonsSwitch=null,e.deviceStatus.hasOwnProperty("ChildLockSwitch")?e.deviceStatus.ChildLockSwitch=!!e.deviceStatus.ChildLockSwitch:e.deviceStatus.ChildLockSwitch=null,e.deviceStatus.hasOwnProperty("LocalTimer")?e.deviceStatus.LocalTimer=!!e.deviceStatus.LocalTimer:e.deviceStatus.LocalTimer=null,e.deviceStatus.hasOwnProperty("SleepMode")?e.deviceStatus.SleepMode=!!e.deviceStatus.SleepMode:e.deviceStatus.SleepMode=null,e.deviceStatus.hasOwnProperty("Humidified")?e.deviceStatus.Humidified=!!e.deviceStatus.Humidified:e.deviceStatus.Humidified=null,e.$store.commit("setSelectDeviceProperty",{deviceStatus:e.deviceStatus})})}},r(s,"mounted",function(){var t=this;e.createSelectorQuery().select(".device-detail").boundingClientRect(function(e){t.parameterWidth=e.width/2-10,t.arguementWidth=(t.parameterWidth-10-10)/2}).exec()}),r(s,"onUnload",function(){console.log(a("onUnload"," at pages\\device\\deviceDetail.vue:365"))}),r(s,"methods",n({moveToLeft:function(e,t){var i=this.left[e.name];i<0&&(console.log(a(i," at pages\\device\\deviceDetail.vue:371")),i+=this.arguementWidth),0==i&&(i=0),this.left[e.name]=i},moveToRight:function(e,t){var i=this.left[e.name];i<=-1*(e.value.length-2)*this.arguementWidth?i=-1*(e.value.length-2)*this.arguementWidth:i-=this.arguementWidth,this.left[e.name]=i},RuntimemoveToLeft:function(){this.Runtimeleft<0&&(this.Runtimeleft+=this.paramWidth),0==this.Runtimeleft&&(this.Runtimeleft=0)},RuntimemoveToRight:function(){this.Runtimeleft<=-1*(this.RuntimeparamLength-this.paramDispLength)*this.paramWidth?this.Runtimeleft=-1*(this.RuntimeparamLength-this.paramDispLength)*this.paramWidth:this.Runtimeleft-=this.paramWidth},LifeTimemoveToLeft:function(){this.LifeTimeleft<0&&(this.LifeTimeleft+=this.LifeparamWidth),0==this.LifeTimeleft&&(this.LifeTimeleft=0)},LifeTimemoveToRight:function(){this.LifeTimeleft<=-1*(this.LifeTimeparamLength-this.LifeTimeparamDispLength)*this.LifeparamWidth?this.LifeTimeleft=-1*(this.LifeTimeparamLength-this.LifeTimeparamDispLength)*this.LifeparamWidth:this.LifeTimeleft-=this.LifeparamWidth},saveDevice:function(){e.request({url:"http://39.98.107.68:8000/Api/AirPurifierDetails",dataType:"json",method:"PUT",data:this.selectDevice,success:function(e){}})}},(0,u.mapMutations)(["setSelectDeviceProperty"]),{switchWorkMode:function(){this.deviceStatus.WorkMode=1!=this.deviceStatus.WorkMode,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchSpeed:function(){var e=this.deviceStatus.WindSpeed;this.deviceStatus.WindSpeed=(e+1)%6,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchIonsSwitch:function(){this.deviceStatus.IonsSwitch=!this.deviceStatus.IonsSwitch,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchHumidified:function(){this.deviceStatus.Humidified=!this.deviceStatus.Humidified,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchChildLock:function(){this.deviceStatus.ChildLockSwitch=!this.deviceStatus.ChildLockSwitch,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchSleep:function(){this.deviceStatus.SleepMode=!this.deviceStatus.SleepMode,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},switchClock:function(){this.deviceStatus.LocalTimer=!0,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus}),e.navigateTo({url:"./setTimer"})},shutdown:function(){this.deviceStatus.PowerSwitch=!this.deviceStatus.PowerSwitch,this.$store.commit("setSelectDeviceProperty",{deviceStatus:this.deviceStatus})},goToSubscribe:function(){e.navigateTo({url:"./subscribe"})}})),s);t.default=d}).call(this,i("6e42")["default"],i("0de9")["default"])},c920:function(e,t,i){"use strict";i.r(t);var a=i("8969"),s=i.n(a);for(var u in a)"default"!==u&&function(e){i.d(t,e,function(){return a[e]})}(u);t["default"]=s.a}},[["7374","common/runtime","common/vendor"]]]);
});
require('pages/device/deviceDetail.js');
__wxRoute = 'pages/device/setTimer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/setTimer.js';

define('pages/device/setTimer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/setTimer"],{4730:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return r})},"708c":function(e,t,n){"use strict";var u=n("9b59"),r=n.n(u);r.a},"8a7f":function(e,t,n){"use strict";n.r(t);var u=n("4730"),r=n("c35d");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("708c");var c=n("2877"),a=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},"8ded":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");u(n("66fd"));var t=u(n("8a7f"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"9b59":function(e,t,n){},c35d:function(e,t,n){"use strict";n.r(t);var u=n("e994"),r=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=r.a},e994:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("2f62");function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{turnofftime:null}},computed:r({},(0,u.mapState)(["selectDevice","startTime","shutdownTime"])),onLoad:function(){e.setNavigationBarTitle({title:"设置定时"})},methods:r({},(0,u.mapMutations)(["setSelectDeviceTurnOn","setSelectDeviceTurnOff","setSelectDeviceTurnOnTime"]),{switchTurnOn:function(t){e.navigateTo({url:"./settingTime?type=1"})},switchTurnOff:function(t){e.navigateTo({url:"./settingTime?type=0"})},turnOnRepeat:function(){e.navigateTo({url:"./repeat?type=1"})},turnOffRepeat:function(){e.navigateTo({url:"./repeat?type=0"})},setTurnOnTime:function(e){this.$store.commit("setSelectDeviceTurnOnTime",e.detail.value)},setTurnOffTime:function(e){this.$store.commit("setSelectDeviceTurnOffTime",e.detail.value)}})};t.default=c}).call(this,n("6e42")["default"])}},[["8ded","common/runtime","common/vendor"]]]);
});
require('pages/device/setTimer.js');
__wxRoute = 'pages/device/settingTime';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/settingTime.js';

define('pages/device/settingTime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/settingTime"],{"0df1":function(e,t,n){},2995:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var r={data:function(){for(var t=new Date,n=[],i=0;i<24;i++)n.push(i);for(var s=[],u=0;u<59;u++)s.push(u);return{title:"",type:0,hours:n,minutes:s,value:[t.getHours(),t.getMinutes()],indicatorStyle:"height: ".concat(Math.round(e.getSystemInfoSync().screenWidth/7.5),"px;"),weeks:[{text:"一",id:1,selected:!1},{text:"二",id:2,selected:!1},{text:"三",id:3,selected:!1},{text:"四",id:4,selected:!1},{text:"五",id:5,selected:!1},{text:"六",id:6,selected:!1},{text:"日",id:7,selected:!1}]}},computed:s({},(0,i.mapState)(["startTime","shutdownTime"])),onLoad:function(e){this.type=e.type,this.title=1==e.type?"定时开机":"定时关机"},mounted:function(){var e=null;e=1==this.type?this.startTime:this.shutdownTime;for(var t=0;t<e.weeks.length;t++)this.weeks[e.weeks[t].id-1].selected=!0;var n=e.time.split(":");this.value=[],this.value.push(parseInt(n[0])),this.value.push(parseInt(n[1]))},methods:s({},(0,i.mapMutations)(["setStartTime","setShutdownTime"]),{bindChange:function(e){e&&(this.value=e.detail.value)},selectDay:function(e){e.selected=!e.selected},ok:function(){var t={};t.time="".concat(this.value[0],":").concat(this.value[1]),t.weeks=[];for(var n=0;n<this.weeks.length;n++)this.weeks[n].selected&&t.weeks.push(this.weeks[n]);1==this.type?this.$store.commit("setStartTime",t):this.$store.commit("setShutdownTime",t),e.navigateBack({})}})};t.default=r}).call(this,n("6e42")["default"])},"728c":function(e,t,n){"use strict";n.r(t);var i=n("2995"),s=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=s.a},b6f5:function(e,t,n){"use strict";var i=n("0df1"),s=n.n(i);s.a},beb9:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s})},ca9c:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");i(n("66fd"));var t=i(n("e9bb"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e9bb:function(e,t,n){"use strict";n.r(t);var i=n("beb9"),s=n("728c");for(var u in s)"default"!==u&&function(e){n.d(t,e,function(){return s[e]})}(u);n("b6f5");var r=n("2877"),a=Object(r["a"])(s["default"],i["a"],i["b"],!1,null,null,null);t["default"]=a.exports}},[["ca9c","common/runtime","common/vendor"]]]);
});
require('pages/device/settingTime.js');
__wxRoute = 'pages/device/connectStatus';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/connectStatus.js';

define('pages/device/connectStatus.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/connectStatus"],{"116f":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),c=n("3be5"),u=n("9122");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={data:function(){return{connected:!0}},computed:a({},(0,r.mapState)(["currentUser","selectProduct","currentAddress"])),methods:{next:function(){var e=this;(0,c.registerDevice)(this.selectProduct.productKey).then(function(t){if(t)return(0,u.familyBindDevice)(t.data.data,e.currentAddress.id)}).then(function(e){e.data.data?t.switchTab({url:"./device"}):t.showModal({title:"提示",content:e.data.msg,success:function(e){e.confirm&&t.switchTab({url:"./device"})}})})}}};e.default=i}).call(this,n("6e42")["default"])},"404a":function(t,e,n){},8654:function(t,e,n){"use strict";n.r(e);var r=n("116f"),c=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e["default"]=c.a},"8d94":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("b96e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b96e:function(t,e,n){"use strict";n.r(e);var r=n("cda4"),c=n("8654");for(var u in c)"default"!==u&&function(t){n.d(e,t,function(){return c[t]})}(u);n("dcbb");var a=n("2877"),o=Object(a["a"])(c["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},cda4:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return c})},dcbb:function(t,e,n){"use strict";var r=n("404a"),c=n.n(r);c.a}},[["8d94","common/runtime","common/vendor"]]]);
});
require('pages/device/connectStatus.js');
__wxRoute = 'pages/device/configDevice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/configDevice.js';

define('pages/device/configDevice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/configDevice"],{"051e":function(e,t,n){"use strict";(function(e,i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("2f62"),o=n("3be5"),a=n("9122");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{showDialog:!1,newDeviceName:""}},computed:u({},(0,c.mapState)(["selectDevice","currentUser"])),onLoad:function(t){e.setNavigationBarTitle({title:"设备设置"}),(0,o.getDevice)(t.id).then(function(e){console.log(i(e.data," at pages\\device\\configDevice.vue:68"))})},mounted:function(){},methods:u({},(0,c.mapMutations)(["setSelectDevice"]),{shareDevice:function(){e.navigateTo({url:"./shareDevice"})},modifyDeviceName:function(){this.showDialog=!0,this.newDeviceName=this.selectDevice.deviceComment},modifyDeviceNameCancel:function(){this.showDialog=!1},modifyDeviceNameOk:function(){this.showDialog=!1,this.newDeviceName&&this.newDeviceName.trim().length>=0?(this.selectDevice.deviceComment=this.newDeviceName,(0,o.updateDeviceComment)(this.selectDevice.deviceComment,this.selectDevice.deviceId).then(function(e){})):e.showModal({title:"提示",content:"请输入新的设备名",showCancel:!1})},goToSubscribe:function(){e.navigateTo({url:"./subscribe"})},removeDevice:function(){(0,a.unBindDevice)(this.selectDevice.deviceId).then(function(t){"删除成功"==t.data.msg?e.switchTab({url:"./device"}):e.showModal({title:"提示",content:"解除失败",success:function(e){e.confirm?console.log(i("用户点击确定"," at pages\\device\\configDevice.vue:122")):e.cancel&&console.log(i("用户点击取消"," at pages\\device\\configDevice.vue:124"))}})})}})};t.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},2220:function(e,t,n){"use strict";n.r(t);var i=n("d779"),c=n("79a3");for(var o in c)"default"!==o&&function(e){n.d(t,e,function(){return c[e]})}(o);n("b47a");var a=n("2877"),u=Object(a["a"])(c["default"],i["a"],i["b"],!1,null,null,null);t["default"]=u.exports},"6ab1":function(e,t,n){},"79a3":function(e,t,n){"use strict";n.r(t);var i=n("051e"),c=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=c.a},ab38:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");i(n("66fd"));var t=i(n("2220"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b47a:function(e,t,n){"use strict";var i=n("6ab1"),c=n.n(i);c.a},d779:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return c})}},[["ab38","common/runtime","common/vendor"]]]);
});
require('pages/device/configDevice.js');
__wxRoute = 'pages/device/repeat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/repeat.js';

define('pages/device/repeat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/repeat"],{1599:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");u(n("66fd"));var t=u(n("2652"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},2652:function(e,t,n){"use strict";n.r(t);var u=n("c125"),a=n("6910");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("cec7");var c=n("2877"),r=Object(c["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},"61e5":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},u=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(u=u.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),u.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{type:-1,value:-1,values:["执行一次","每天","工作日","自定义"]}},computed:a({},(0,u.mapState)(["selectDevice"])),onLoad:function(t){e.setNavigationBarTitle({title:"重复"}),this.type=parseInt(t.type),1==this.type?this.selectDevice.turnOnRepeat?this.value=this.values.indexOf(this.selectDevice.turnOnRepeat):this.value=-1:this.selectDevice.turnOffRepeat?this.value=this.values.indexOf(this.selectDevice.turnOffRepeat):this.value=-1},methods:a({},(0,u.mapMutations)(["setSelectDeviceRepeat"]),{selected:function(e){this.value=parseInt(e.detail.value)},ok:function(){-1!=this.value&&(this.$store.commit("setSelectDeviceRepeat",{type:this.type,value:this.values[this.value]}),e.navigateBack({}))}})};t.default=c}).call(this,n("6e42")["default"])},6910:function(e,t,n){"use strict";n.r(t);var u=n("61e5"),a=n.n(u);for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);t["default"]=a.a},"9edd":function(e,t,n){},c125:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},cec7:function(e,t,n){"use strict";var u=n("9edd"),a=n.n(u);a.a}},[["1599","common/runtime","common/vendor"]]]);
});
require('pages/device/repeat.js');
__wxRoute = 'pages/device/subscribe';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/subscribe.js';

define('pages/device/subscribe.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/subscribe"],{"269b":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("6718"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3f2a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"464b":function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("2f62"),c=n("3be5");function i(e){return s(e)||u(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function u(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function s(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d={data:function(){return{services:[],price:0}},computed:l({},(0,a.mapState)(["currentService","selectDevice"])),onLoad:function(){var t=this;this.$store.commit("setCurrentService",null),e.setNavigationBarTitle({title:"服务订阅"}),(0,c.getOrderDetailByDeviceId)(this.selectDevice.deviceId).then(function(n){if(!(n.data&&n.data.data&&n.data.data.orderId))return(0,c.services)(t.selectDevice.productKey);var r=n.data.data.orderId;e.showModal({title:"提示",content:"已购买服务",showCancel:!1,success:function(t){e.navigateTo({url:"./serviceDetail?orderId=".concat(r)})}})}).then(function(e){var n;(t.services=[],e.data.data&&e.data.data.length>0)&&(n=t.services).push.apply(n,i(e.data.data))}).catch(function(e){console.log(r(e," at pages\\device\\subscribe.vue:68"))})},mounted:function(){},methods:l({},(0,a.mapMutations)(["setSelectDevice","setCurrentService"]),{selectService:function(e){var t=this.services.find(function(t){return t.serviceConfigId==e.detail.value});t&&this.$store.commit("setCurrentService",t)},goToServiceDetail:function(){this.currentService&&e.navigateTo({url:"./buy"})}})};t.default=d}).call(this,n("6e42")["default"],n("0de9")["default"])},6718:function(e,t,n){"use strict";n.r(t);var r=n("3f2a"),a=n("7463");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("90b4");var i=n("2877"),o=Object(i["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},7463:function(e,t,n){"use strict";n.r(t);var r=n("464b"),a=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t["default"]=a.a},"90b4":function(e,t,n){"use strict";var r=n("b953"),a=n.n(r);a.a},b953:function(e,t,n){}},[["269b","common/runtime","common/vendor"]]]);
});
require('pages/device/subscribe.js');
__wxRoute = 'pages/device/shareDevice';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/shareDevice.js';

define('pages/device/shareDevice.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/shareDevice"],{"1fc2":function(e,n,t){"use strict";t.r(n);var a=t("7023"),u=t("2490");for(var r in u)"default"!==r&&function(e){t.d(n,e,function(){return u[e]})}(r);var c=t("2877"),o=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=o.exports},2490:function(e,n,t){"use strict";t.r(n);var a=t("800f"),u=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(n,e,function(){return a[e]})}(r);n["default"]=u.a},"25ad":function(e,n,t){"use strict";(function(e){t("b52e"),t("921b");a(t("66fd"));var n=a(t("1fc2"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},7023:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},"800f":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={methods:{goToShareManage:function(){e.navigateTo({url:"./shareManage"})}}};n.default=t}).call(this,t("6e42")["default"])}},[["25ad","common/runtime","common/vendor"]]]);
});
require('pages/device/shareDevice.js');
__wxRoute = 'pages/device/shareManage';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/shareManage.js';

define('pages/device/shareManage.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/shareManage"],{"1cfd":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},"448b":function(n,t,e){"use strict";e.r(t);var a=e("1cfd"),u=e("f7c2");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);var c=e("2877"),r=Object(c["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=r.exports},"6f91":function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");a(e("66fd"));var t=a(e("448b"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},d3c8:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{showDialog:!1}},methods:{addShareName:function(){this.showDialog=!0},addShareCancel:function(){this.showDialog=!1},addShareOk:function(){this.showDialog=!1}}};t.default=a},f7c2:function(n,t,e){"use strict";e.r(t);var a=e("d3c8"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a}},[["6f91","common/runtime","common/vendor"]]]);
});
require('pages/device/shareManage.js');
__wxRoute = 'pages/device/serviceDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/serviceDetail.js';

define('pages/device/serviceDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/serviceDetail"],{"1bb5":function(e,t,n){"use strict";n.r(t);var r=n("2069"),i=n("f0eb");for(var c in i)"default"!==c&&function(e){n.d(t,e,function(){return i[e]})}(c);n("c623");var a=n("2877"),o=Object(a["a"])(i["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},2069:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.$moment(e.currentService.createTime).format("YYYY-MM-DD HH:mm:ss")),r=e.$moment(e.currentService.createTime).format("YYYY-MM-DD"),i=e.$moment(e.currentService.endTime).format("YYYY-MM-DD");e.$mp.data=Object.assign({},{$root:{g0:n,g1:r,g2:i}})},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},3370:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),i=n("3be5");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={data:function(){return{type:0,price:0,back:null}},computed:c({},(0,r.mapState)(["currentService"])),onLoad:function(t){var n=this;this.type=t.type,e.setNavigationBarTitle({title:"服务订阅"}),(0,i.getOrderDetail)(t.orderId).then(function(e){e.data.data&&n.$store.commit("setCurrentService",e.data.data)})},mounted:function(){1==this.type?this.back=null:this.back="./device"},methods:c({},(0,r.mapMutations)(["setSelectDevice","setCurrentService"]),{selectService:function(e){var t=this.services.find(function(t){return t.type==e.detail.value});t&&this.$store.commit("setCurrentService",t)},goToServiceDetail:function(){e.navigateTo({url:"./serviceDetail"})},goToDevices:function(){}})};t.default=o}).call(this,n("6e42")["default"])},"7e7e":function(e,t,n){},"89d2":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("1bb5"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c623:function(e,t,n){"use strict";var r=n("7e7e"),i=n.n(r);i.a},f0eb:function(e,t,n){"use strict";n.r(t);var r=n("3370"),i=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t["default"]=i.a}},[["89d2","common/runtime","common/vendor"]]]);
});
require('pages/device/serviceDetail.js');
__wxRoute = 'pages/device/buy';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/buy.js';

define('pages/device/buy.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/buy"],{"23d8":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("e430"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},7426:function(e,t,n){},"840a":function(e,t,n){"use strict";n.r(t);var r=n("e68f"),c=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=c.a},"92a5":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return c})},a544:function(e,t,n){"use strict";var r=n("7426"),c=n.n(r);c.a},e430:function(e,t,n){"use strict";n.r(t);var r=n("92a5"),c=n("840a");for(var i in c)"default"!==i&&function(e){n.d(t,e,function(){return c[e]})}(i);n("a544");var a=n("2877"),u=Object(a["a"])(c["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports},e68f:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n("2f62"),i=n("3be5");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={data:function(){return{flag:!1,orderId:null}},computed:a({},(0,c.mapState)(["currentService","currentUser","selectDevice"])),onLoad:function(t){var n=this;(0,i.buyService)({price:this.currentService.presentPrice,serviceConfigId:this.currentService.serviceConfigId,unionId:this.currentUser.OpenId,deviceName:this.selectDevice.deviceName}).then(function(t){t.data.data?(console.log(e(t," at pages\\device\\buy.vue:32")),n.flag=!0,n.orderId=t.data.data):r.showModal({title:"提示",content:t.data.msg,showCancel:!1,success:function(e){r.switchTab({url:"./device"})}})}).catch(function(t){console.log(e(t," at pages\\device\\buy.vue:49"))})},methods:{goToServiceDetail:function(){var e=this;r.request({url:"http://qingyun.kiwihealthcare123.com/mp/SendMessage",method:"POST",data:{unionid:this.currentUser.OpenId,cost:this.currentService.presentPrice,name:this.currentService.description,orderid:this.orderId},success:function(t){e.flag&&r.navigateTo({url:"./serviceDetail?orderId=".concat(e.orderId)})}})}}};t.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])}},[["23d8","common/runtime","common/vendor"]]]);
});
require('pages/device/buy.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{2963:function(e,t,n){"use strict";var r=n("c0c2"),u=n.n(r);u.a},"332b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},"6c1f":function(e,t,n){"use strict";n.r(t);var r=n("332b"),u=n("9e59");for(var o in u)"default"!==o&&function(e){n.d(t,e,function(){return u[e]})}(o);n("2963");var c=n("2877"),a=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"90ee":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){o(e,t,n[t])})}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{urls:["./service","./share","./help","./opinion","./message","./about","./config","./modifyUser"]}},computed:u({},(0,r.mapState)(["currentUser"])),onLoad:function(){e.setNavigationBarTitle({title:"我的"})},methods:{jumpTo:function(t){e.navigateTo({url:this.urls[t]})}}};t.default=c}).call(this,n("6e42")["default"])},"9e59":function(e,t,n){"use strict";n.r(t);var r=n("90ee"),u=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=u.a},a1d0:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("6c1f"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c0c2:function(e,t,n){}},[["a1d0","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/my/about';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/about.js';

define('pages/my/about.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/about"],{"51ac":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"5bc9":function(n,t,e){"use strict";e.r(t);var u=e("d67c"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},d00a:function(n,t,e){"use strict";e.r(t);var u=e("51ac"),a=e("5bc9");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},d67c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLoad:function(){}};t.default=u},efd3:function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("d00a"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["efd3","common/runtime","common/vendor"]]]);
});
require('pages/my/about.js');
__wxRoute = 'pages/my/config';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/config.js';

define('pages/my/config.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/config"],{"528f":function(n,t,e){"use strict";e.r(t);var u=e("6f4b"),f=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=f.a},"5d83":function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("7801"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"6f4b":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLoad:function(){}};t.default=u},7801:function(n,t,e){"use strict";e.r(t);var u=e("f52b"),f=e("528f");for(var r in f)"default"!==r&&function(n){e.d(t,n,function(){return f[n]})}(r);var o=e("2877"),a=Object(o["a"])(f["default"],u["a"],u["b"],!1,null,null,null);t["default"]=a.exports},f52b:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},f=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return f})}},[["5d83","common/runtime","common/vendor"]]]);
});
require('pages/my/config.js');
__wxRoute = 'pages/my/help';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/help.js';

define('pages/my/help.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/help"],{"0c06":function(n,t,e){"use strict";var u=e("cd14"),c=e.n(u);c.a},"6c89":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLoad:function(){}};t.default=u},ac8b:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},c=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return c})},b026:function(n,t,e){"use strict";e.r(t);var u=e("6c89"),c=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=c.a},cd14:function(n,t,e){},e6d3:function(n,t,e){"use strict";e.r(t);var u=e("ac8b"),c=e("b026");for(var a in c)"default"!==a&&function(n){e.d(t,n,function(){return c[n]})}(a);e("0c06");var r=e("2877"),o=Object(r["a"])(c["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},fd0b:function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("e6d3"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["fd0b","common/runtime","common/vendor"]]]);
});
require('pages/my/help.js');
__wxRoute = 'pages/my/message';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/message.js';

define('pages/my/message.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/message"],{1848:function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("a04b"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},4047:function(n,t,e){"use strict";e.r(t);var u=e("7d3a"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},7240:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},"7d3a":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={onLoad:function(){}};t.default=u},"98a7":function(n,t,e){"use strict";var u=e("fa44"),a=e.n(u);a.a},a04b:function(n,t,e){"use strict";e.r(t);var u=e("7240"),a=e("4047");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("98a7");var o=e("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},fa44:function(n,t,e){}},[["1848","common/runtime","common/vendor"]]]);
});
require('pages/my/message.js');
__wxRoute = 'pages/my/service';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/service.js';

define('pages/my/service.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/service"],{"0bef":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("b406"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"3fb2":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("3be5"),a=n("2f62");function o(e){return i(e)||c(e)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{services:[]}},computed:f({},(0,a.mapState)(["currentUser"])),onLoad:function(){var e=this;(0,r.getOrders)(this.currentUser.OpenId).then(function(t){var n;t.data.data&&t.data.data.length>0?(n=e.services).push.apply(n,o(t.data.data)):e.services=[]})},methods:{goToServiceDetail:function(t){e.navigateTo({url:"../device/serviceDetail?orderId=".concat(t,"&type=1")})}}};t.default=s}).call(this,n("6e42")["default"])},"6ff9":function(e,t,n){"use strict";var r=n("d6a7"),a=n.n(r);a.a},7969:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},a38e:function(e,t,n){"use strict";n.r(t);var r=n("3fb2"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},b406:function(e,t,n){"use strict";n.r(t);var r=n("7969"),a=n("a38e");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("6ff9");var u=n("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},d6a7:function(e,t,n){}},[["0bef","common/runtime","common/vendor"]]]);
});
require('pages/my/service.js');
__wxRoute = 'pages/my/share';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/share.js';

define('pages/my/share.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/share"],{2441:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("3be5"),a=n("2f62");function u(e){return i(e)||c(e)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function i(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{devices:[]}},computed:f({},(0,a.mapState)(["currentUser"])),onLoad:function(){var e=this;(0,r.devices)(this.currentUser.OpenId).then(function(t){var n;t.data&&t.data.length>0?(n=e.devices).push.apply(n,u(t.data)):e.devices=[]})}};t.default=s},"2bc4":function(e,t,n){"use strict";n.r(t);var r=n("2441"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},"4af3":function(e,t,n){},"4e1f":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("a832"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},a832:function(e,t,n){"use strict";n.r(t);var r=n("c7b2"),a=n("2bc4");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("feee");var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},c7b2:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},feee:function(e,t,n){"use strict";var r=n("4af3"),a=n.n(r);a.a}},[["4e1f","common/runtime","common/vendor"]]]);
});
require('pages/my/share.js');
__wxRoute = 'pages/my/opinion';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/opinion.js';

define('pages/my/opinion.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/opinion"],{"28c7":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{hasFocus:!1}},onLoad:function(){},methods:{focus:function(){this.hasFocus=!0},blur:function(){this.hasFocus=!1}}};t.default=u},"683e":function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("bed1"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},"7d42":function(n,t,e){"use strict";e.r(t);var u=e("28c7"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},"810b":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},"97de":function(n,t,e){"use strict";var u=e("d556"),o=e.n(u);o.a},bed1:function(n,t,e){"use strict";e.r(t);var u=e("810b"),o=e("7d42");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("97de");var a=e("2877"),r=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=r.exports},d556:function(n,t,e){}},[["683e","common/runtime","common/vendor"]]]);
});
require('pages/my/opinion.js');
__wxRoute = 'pages/my/modifyUser';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/modifyUser.js';

define('pages/my/modifyUser.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/modifyUser"],{"147c":function(e,t,a){"use strict";(function(e){a("b52e"),a("921b");n(a("66fd"));var t=n(a("b20d"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"3f3c":function(e,t,a){"use strict";a.r(t);var n=a("841a"),r=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=r.a},"49a9":function(e,t,a){},"841a":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("2f62");function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.forEach(function(t){i(e,t,a[t])})}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={data:function(){return{showDialog:!1,showImageDialog:!1,showNameDialog:!1,showGenderDialog:!1,showBirthdayDialog:!1,avatarUrl:"",nickName:"",gender:1,birthday:""}},computed:r({},(0,n.mapState)(["currentUser"])),onLoad:function(){this.avatarUrl=this.currentUser.avatarUrl,this.nickName=this.currentUser.nickName,this.gender=this.currentUser.gender,this.birthday=this.currentUser.birthday},methods:{jumpTo:function(e){switch(this.showDialog=!0,e){case 1:this.showImageDialog=!0;break;case 2:this.showNameDialog=!0;break;case 3:this.showGenderDialog=!0;break;case 4:this.showBirthdayDialog=!0;break}},modifyNameCancel:function(){this.showDialog=!1,this.showNameDialog=!1,this.nickName=this.currentUser.nickName},modifyNameOk:function(){this.showDialog=!1,this.showNameDialog=!1}}};t.default=o},abc2:function(e,t,a){"use strict";var n=a("49a9"),r=a.n(n);r.a},b20d:function(e,t,a){"use strict";a.r(t);var n=a("ef85"),r=a("3f3c");for(var i in r)"default"!==i&&function(e){a.d(t,e,function(){return r[e]})}(i);a("abc2");var o=a("2877"),c=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);t["default"]=c.exports},ef85:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},r=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return r})}},[["147c","common/runtime","common/vendor"]]]);
});
require('pages/my/modifyUser.js');
__wxRoute = 'pages/address/addressList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressList.js';

define('pages/address/addressList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressList"],{"2a91":function(t,e,n){"use strict";n.r(e);var r=n("dd23"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);e["default"]=u.a},"2cd2":function(t,e,n){},"61bf":function(t,e,n){"use strict";var r=n("2cd2"),u=n.n(r);u.a},"74fa":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("814c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"814c":function(t,e,n){"use strict";n.r(e);var r=n("f992"),u=n("2a91");for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);n("61bf");var c=n("2877"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},dd23:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){a(t,e,n[e])})}return t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={computed:u({},(0,r.mapState)(["address","currentAddress"])),mounted:function(){},methods:u({},(0,r.mapMutations)(["setcurrentAddress"]),{gotoManager:function(){t.navigateTo({url:"./managerAddress"})},selectAddress:function(t){this.$store.commit("setcurrentAddress",t)}})};e.default=c}).call(this,n("6e42")["default"])},f992:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})}},[["74fa","common/runtime","common/vendor"]]]);
});
require('pages/address/addressList.js');
__wxRoute = 'pages/address/managerAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/managerAddress.js';

define('pages/address/managerAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/managerAddress"],{"03e8":function(e,t,n){"use strict";var r=n("b997"),a=n.n(r);a.a},"30f1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),a=n("9122");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={computed:o({},(0,r.mapState)(["address"])),mounted:function(){},methods:{modify:function(t){e.navigateTo({url:"./modifyAddress?id="+t})},remove:function(e){var t=this;(0,a.listFamilyBindDevices)(e).then(function(n){n.data.data&&n.data.data.length>0?t.$store.commit("removeAddress",e):t.$store.commit("setDevices",[])})},create:function(){e.navigateTo({url:"./addAddress"})}}};t.default=c}).call(this,n("6e42")["default"])},"324a":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},"5e8c":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("7b35"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7b35":function(e,t,n){"use strict";n.r(t);var r=n("324a"),a=n("a5b2");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("03e8");var u=n("2877"),c=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},a5b2:function(e,t,n){"use strict";n.r(t);var r=n("30f1"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},b997:function(e,t,n){}},[["5e8c","common/runtime","common/vendor"]]]);
});
require('pages/address/managerAddress.js');
__wxRoute = 'pages/address/modifyAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/modifyAddress.js';

define('pages/address/modifyAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/modifyAddress"],{"09a3":function(e,t,r){},"2ff5":function(e,t,r){"use strict";r.r(t);var s=r("6368"),n=r("fc3d");for(var d in n)"default"!==d&&function(e){r.d(t,e,function(){return n[e]})}(d);r("d14e");var i=r("2877"),a=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);t["default"]=a.exports},"5cb3":function(e,t,r){"use strict";(function(e){r("b52e"),r("921b");s(r("66fd"));var t=s(r("2ff5"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("6e42")["createPage"])},6368:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},n=[];r.d(t,"a",function(){return s}),r.d(t,"b",function(){return n})},d14e:function(e,t,r){"use strict";var s=r("09a3"),n=r.n(s);n.a},fc3d:function(e,t,r){"use strict";r.r(t);var s=r("fd9b"),n=r.n(s);for(var d in s)"default"!==d&&function(e){r.d(t,e,function(){return s[e]})}(d);t["default"]=n.a},fd9b:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r("2f62"),n=r("9122");function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},s=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),s.forEach(function(t){i(e,t,r[t])})}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a={data:function(){return{addressName:"",familyId:"",currentAddress:{id:0,familyName:"",city:""}}},computed:d({},(0,s.mapState)(["address","currentUser","modifyAddress"])),onLoad:function(e){this.currentAddress=this.address.find(function(t){return t.id==e.id}),this.familyId=this.currentAddress.id,this.$store.commit("setModifyAddress",this.currentAddress),this.addressName=this.currentAddress.familyName,this.id=this.currentAddress.id},onShow:function(){this.modifyAddress&&this.modifyAddress.id==this.currentAddress.id&&(this.currentAddress=this.modifyAddress)},methods:d({},(0,s.mapMutations)(["setModifyAddress","changeAddress"]),{selectCity:function(){e.navigateTo({url:"../../components/CitySelect"})},createAddress:function(){null==this.addressName||0==this.addressName.length||null==this.currentAddress||0==this.currentAddress.city.length?e.showModal({title:"提示",content:"家庭名称和城市不能为空",showCancel:!1}):(this.currentAddress.familyName=this.addressName,this.currentAddress.id=this.id,this.$store.commit("changeAddress",this.currentAddress),(0,n.updateFamily)(this.currentAddress.city,this.familyId,this.addressName).then(function(t){"编辑成功"==t.data.msg&&e.navigateBack({})}))}})};t.default=a}).call(this,r("6e42")["default"])}},[["5cb3","common/runtime","common/vendor"]]]);
});
require('pages/address/modifyAddress.js');
__wxRoute = 'pages/address/createAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/createAddress.js';

define('pages/address/createAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/createAddress"],{"03ce":function(e,t,n){"use strict";n.r(t);var r=n("8ed5"),i=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,function(){return r[e]})}(s);t["default"]=i.a},"0e52":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("8f45"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"1fd0":function(e,t,n){"use strict";var r=n("85a9"),i=n.n(r);i.a},"77ad":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i})},"85a9":function(e,t,n){},"8ed5":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62"),i=n("9122");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u={data:function(){return{currentAddress:{id:0,familyName:"",city:""}}},computed:s({},(0,r.mapState)(["modifyAddress","currentUser"])),mounted:function(){},onLoad:function(e){this.$store.commit("setModifyAddress",this.currentAddress)},onShow:function(){this.modifyAddress&&this.modifyAddress.id==this.currentAddress.id&&(this.currentAddress.city=this.modifyAddress.city)},methods:s({},(0,r.mapMutations)(["setModifyAddress","changeAddress"]),{selectCity:function(){e.navigateTo({url:"../../components/CitySelect"})},save:function(){this.$store.commit("createAddress",this.currentAddress),(0,i.createFamily)(this.currentAddress.city,this.currentAddress.familyName,this.currentUser.OpenId).then(function(t){t&&e.navigateBack()})}})};t.default=u}).call(this,n("6e42")["default"])},"8f45":function(e,t,n){"use strict";n.r(t);var r=n("77ad"),i=n("03ce");for(var s in i)"default"!==s&&function(e){n.d(t,e,function(){return i[e]})}(s);n("1fd0");var c=n("2877"),u=Object(c["a"])(i["default"],r["a"],r["b"],!1,null,null,null);t["default"]=u.exports}},[["0e52","common/runtime","common/vendor"]]]);
});
require('pages/address/createAddress.js');
__wxRoute = 'components/CitySelect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/CitySelect.js';

define('components/CitySelect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/CitySelect"],{1884:function(n,i,a){"use strict";var e=a("3c22"),l=a.n(e);l.a},3990:function(n,i,a){"use strict";(function(n,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=a("2f62");function p(n){return z(n)||y(n)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function y(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function z(n){if(Array.isArray(n)){for(var i=0,a=new Array(n.length);i<n.length;i++)a[i]=n[i];return a}}function u(n){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.forEach(function(i){m(n,i,a[i])})}return n}function m(n,i,a){return i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}var b={data:function(){return{cities:[{group:"a",cities:[{label:"阿坝Aba0837",name:"阿坝",pinyin:"aba",zip:"0837"},{label:"阿克苏Akesu0997",name:"阿克苏",pinyin:"akesu",zip:"0997"},{label:"阿拉善盟Alashanmeng0483",name:"阿拉善盟",pinyin:"alashanmeng",zip:"0483"},{label:"阿勒泰Aletai0906",name:"阿勒泰",pinyin:"aletai",zip:"0906"},{label:"阿里Ali0897",name:"阿里",pinyin:"ali",zip:"0897"},{label:"安康Ankang0915",name:"安康",pinyin:"ankang",zip:"0915"},{label:"安庆Anqing0556",name:"安庆",pinyin:"anqing",zip:"0556"},{label:"鞍山Anshan0412",name:"鞍山",pinyin:"anshan",zip:"0412"},{label:"安顺Anshun0853",name:"安顺",pinyin:"anshun",zip:"0853"},{label:"安阳Anyang0372",name:"安阳",pinyin:"anyang",zip:"0372"},{label:"阿城Acheng0451",name:"阿城",pinyin:"acheng",zip:"0451"},{label:"安福Anfu0796",name:"安福",pinyin:"anfu",zip:"0796"},{label:"安吉Anji0572",name:"安吉",pinyin:"anji",zip:"0572"},{label:"安宁Anning0871",name:"安宁",pinyin:"anning",zip:"0871"},{label:"安丘Anqiu0536",name:"安丘",pinyin:"anqiu",zip:"0536"},{label:"安溪Anxi0595",name:"安溪",pinyin:"anxi",zip:"0595"},{label:"安义Anyi0791",name:"安义",pinyin:"anyi",zip:"0791"},{label:"安远Anyuan0797",name:"安远",pinyin:"anyuan",zip:"0797"}]},{group:"b",cities:[{label:"北京Beijing010",name:"北京",pinyin:"beijing",zip:"010"},{label:"白城Baicheng0436",name:"白城",pinyin:"baicheng",zip:"0436"},{label:"百色Baise0776",name:"百色",pinyin:"baise",zip:"0776"},{label:"白山Baishan0439",name:"白山",pinyin:"baishan",zip:"0439"},{label:"白银Baiyin0943",name:"白银",pinyin:"baiyin",zip:"0943"},{label:"蚌埠Bangbu0552",name:"蚌埠",pinyin:"bangbu",zip:"0552"},{label:"保定Baoding0312",name:"保定",pinyin:"baoding",zip:"0312"},{label:"宝鸡Baoji0917",name:"宝鸡",pinyin:"baoji",zip:"0917"},{label:"保山Baoshan0875",name:"保山",pinyin:"baoshan",zip:"0875"},{label:"包头Baotou0472",name:"包头",pinyin:"baotou",zip:"0472"},{label:"巴彦淖尔Bayannaoer0478",name:"巴彦淖尔",pinyin:"bayannaoer",zip:"0478"},{label:"巴音郭楞Bayinguoleng0996",name:"巴音郭楞",pinyin:"bayinguoleng",zip:"0996"},{label:"巴中Bazhong0827",name:"巴中",pinyin:"bazhong",zip:"0827"},{label:"北海Beihai0779",name:"北海",pinyin:"beihai",zip:"0779"},{label:"本溪Benxi0414",name:"本溪",pinyin:"benxi",zip:"0414"},{label:"毕节Bijie0857",name:"毕节",pinyin:"bijie",zip:"0857"},{label:"滨州Binzhou0543",name:"滨州",pinyin:"binzhou",zip:"0543"},{label:"博尔塔拉Boertala0909",name:"博尔塔拉",pinyin:"boertala",zip:"0909"},{label:"亳州Bozhou0558",name:"亳州",pinyin:"bozhou",zip:"0558"},{label:"宝应Baoying0514",name:"宝应",pinyin:"baoying",zip:"0514"},{label:"巴彦Bayan0451",name:"巴彦",pinyin:"bayan",zip:"0451"},{label:"滨海Binhai0515",name:"滨海",pinyin:"binhai",zip:"0515"},{label:"宾县Binxian0451",name:"宾县",pinyin:"binxian",zip:"0451"},{label:"宾阳Binyang0771",name:"宾阳",pinyin:"binyang",zip:"0771"},{label:"璧山Bishan023",name:"璧山",pinyin:"bishan",zip:"023"},{label:"博爱Boai0391",name:"博爱",pinyin:"boai",zip:"0391"},{label:"博罗Boluo0752",name:"博罗",pinyin:"boluo",zip:"0752"},{label:"博兴Boxing0543",name:"博兴",pinyin:"boxing",zip:"0543"}]},{group:"c",cities:[{label:"重庆Chongqing023",name:"重庆",pinyin:"chongqing",zip:"023"},{label:"长春Changchun0431",name:"长春",pinyin:"changchun",zip:"0431"},{label:"长沙Changsha0731",name:"长沙",pinyin:"changsha",zip:"0731"},{label:"常州Changzhou0519",name:"常州",pinyin:"changzhou",zip:"0519"},{label:"成都Chengdu028",name:"成都",pinyin:"chengdu",zip:"028"},{label:"沧州Cangzhou0317",name:"沧州",pinyin:"cangzhou",zip:"0317"},{label:"常德Changde0736",name:"常德",pinyin:"changde",zip:"0736"},{label:"昌都Changdu0895",name:"昌都",pinyin:"changdu",zip:"0895"},{label:"昌吉Changji0997",name:"昌吉",pinyin:"changji",zip:"0997"},{label:"长治Changzhi0355",name:"长治",pinyin:"changzhi",zip:"0355"},{label:"巢湖Chaohu0565",name:"巢湖",pinyin:"chaohu",zip:"0565"},{label:"朝阳Chaoyang0421",name:"朝阳",pinyin:"chaoyang",zip:"0421"},{label:"潮州Chaozhou0768",name:"潮州",pinyin:"chaozhou",zip:"0768"},{label:"承德Chengde0314",name:"承德",pinyin:"chengde",zip:"0314"},{label:"郴州Chenzhou0735",name:"郴州",pinyin:"chenzhou",zip:"0735"},{label:"赤峰Chifeng0476",name:"赤峰",pinyin:"chifeng",zip:"0476"},{label:"池州Chizhou0566",name:"池州",pinyin:"chizhou",zip:"0566"},{label:"崇左Chongzuo0771",name:"崇左",pinyin:"chongzuo",zip:"0771"},{label:"楚雄Chuxiong0875",name:"楚雄",pinyin:"chuxiong",zip:"0875"},{label:"滁州Chuzhou0550",name:"滁州",pinyin:"chuzhou",zip:"0550"},{label:"苍南Cangnan0577",name:"苍南",pinyin:"cangnan",zip:"0577"},{label:"苍山Cangshan0539",name:"苍山",pinyin:"cangshan",zip:"0539"},{label:"曹县Caoxian0530",name:"曹县",pinyin:"caoxian",zip:"0530"},{label:"长岛Changdao0535",name:"长岛",pinyin:"changdao",zip:"0535"},{label:"长丰Changfeng0551",name:"长丰",pinyin:"changfeng",zip:"0551"},{label:"长海Changhai0411",name:"长海",pinyin:"changhai",zip:"0411"},{label:"长乐Changle0591",name:"长乐",pinyin:"changle",zip:"0591"},{label:"昌乐Changle0536",name:"昌乐",pinyin:"changle",zip:"0536"},{label:"常山Changshan0570",name:"常山",pinyin:"changshan",zip:"0570"},{label:"常熟Changshu0512",name:"常熟",pinyin:"changshu",zip:"0512"},{label:"长泰Changtai0596",name:"长泰",pinyin:"changtai",zip:"0596"},{label:"长汀Changting0597",name:"长汀",pinyin:"changting",zip:"0597"},{label:"长兴Changxing0572",name:"长兴",pinyin:"changxing",zip:"0572"},{label:"昌邑Changyi0536",name:"昌邑",pinyin:"changyi",zip:"0536"},{label:"潮安Chaoan0768",name:"潮安",pinyin:"chaoan",zip:"0768"},{label:"呈贡Chenggong0871",name:"呈贡",pinyin:"chenggong",zip:"0871"},{label:"城口Chengkou023",name:"城口",pinyin:"chengkou",zip:"023"},{label:"成武Chengwu0530",name:"成武",pinyin:"chengwu",zip:"0530"},{label:"茌平Chiping0635",name:"茌平",pinyin:"chiping",zip:"0635"},{label:"崇仁Chongren0794",name:"崇仁",pinyin:"chongren",zip:"0794"},{label:"崇义Chongyi0797",name:"崇义",pinyin:"chongyi",zip:"0797"},{label:"崇州Chongzhou028",name:"崇州",pinyin:"chongzhou",zip:"028"},{label:"淳安Chunan0571",name:"淳安",pinyin:"chunan",zip:"0571"},{label:"慈溪Cixi0574",name:"慈溪",pinyin:"cixi",zip:"0574"},{label:"从化Conghua020",name:"从化",pinyin:"conghua",zip:"020"},{label:"枞阳Congyang0556",name:"枞阳",pinyin:"congyang",zip:"0556"}]},{group:"d",cities:[{label:"大连Dalian0411",name:"大连",pinyin:"dalian",zip:"0411"},{label:"东莞Dongguan0769",name:"东莞",pinyin:"dongguan",zip:"0769"},{label:"大理Dali0872",name:"大理",pinyin:"dali",zip:"0872"},{label:"丹东Dandong0415",name:"丹东",pinyin:"dandong",zip:"0415"},{label:"大庆Daqing0459",name:"大庆",pinyin:"daqing",zip:"0459"},{label:"大同Datong0352",name:"大同",pinyin:"datong",zip:"0352"},{label:"大兴安岭Daxinganling0457",name:"大兴安岭",pinyin:"daxinganling",zip:"0457"},{label:"达州Dazhou0818",name:"达州",pinyin:"dazhou",zip:"0818"},{label:"德宏Dehong0692",name:"德宏",pinyin:"dehong",zip:"0692"},{label:"德阳Deyang0838",name:"德阳",pinyin:"deyang",zip:"0838"},{label:"德州Dezhou0534",name:"德州",pinyin:"dezhou",zip:"0534"},{label:"定西Dingxi0932",name:"定西",pinyin:"dingxi",zip:"0932"},{label:"迪庆Diqing0887",name:"迪庆",pinyin:"diqing",zip:"0887"},{label:"东营Dongying0546",name:"东营",pinyin:"dongying",zip:"0546"},{label:"大丰Dafeng0515",name:"大丰",pinyin:"dafeng",zip:"0515"},{label:"岱山Daishan0580",name:"岱山",pinyin:"daishan",zip:"0580"},{label:"砀山Dangshan0557",name:"砀山",pinyin:"dangshan",zip:"0557"},{label:"当涂Dangtu0555",name:"当涂",pinyin:"dangtu",zip:"0555"},{label:"单县Danxian0530",name:"单县",pinyin:"danxian",zip:"0530"},{label:"丹阳Danyang0511",name:"丹阳",pinyin:"danyang",zip:"0511"},{label:"大埔Dapu0753",name:"大埔",pinyin:"dapu",zip:"0753"},{label:"大田Datian0598",name:"大田",pinyin:"datian",zip:"0598"},{label:"大邑Dayi028",name:"大邑",pinyin:"dayi",zip:"028"},{label:"大余Dayu0797",name:"大余",pinyin:"dayu",zip:"0797"},{label:"大足Dazu023",name:"大足",pinyin:"dazu",zip:"023"},{label:"德安Dean0792",name:"德安",pinyin:"dean",zip:"0792"},{label:"德化Dehua0595",name:"德化",pinyin:"dehua",zip:"0595"},{label:"德惠Dehui0431",name:"德惠",pinyin:"dehui",zip:"0431"},{label:"登封Dengfeng0371",name:"登封",pinyin:"dengfeng",zip:"0371"},{label:"德清Deqing0572",name:"德清",pinyin:"deqing",zip:"0572"},{label:"德庆Deqing0758",name:"德庆",pinyin:"deqing",zip:"0758"},{label:"德兴Dexing0793",name:"德兴",pinyin:"dexing",zip:"0793"},{label:"电白Dianbai0668",name:"电白",pinyin:"dianbai",zip:"0668"},{label:"垫江Dianjiang023",name:"垫江",pinyin:"dianjiang",zip:"023"},{label:"定南Dingnan0797",name:"定南",pinyin:"dingnan",zip:"0797"},{label:"定陶Dingtao0530",name:"定陶",pinyin:"dingtao",zip:"0530"},{label:"定远Dingyuan0550",name:"定远",pinyin:"dingyuan",zip:"0550"},{label:"东阿Donga0635",name:"东阿",pinyin:"donga",zip:"0635"},{label:"东海Donghai0518",name:"东海",pinyin:"donghai",zip:"0518"},{label:"东明Dongming0530",name:"东明",pinyin:"dongming",zip:"0530"},{label:"东平Dongping0538",name:"东平",pinyin:"dongping",zip:"0538"},{label:"东山Dongshan0596",name:"东山",pinyin:"dongshan",zip:"0596"},{label:"东台Dongtai0515",name:"东台",pinyin:"dongtai",zip:"0515"},{label:"洞头Dongtou0577",name:"洞头",pinyin:"dongtou",zip:"0577"},{label:"东乡Dongxiang0794",name:"东乡",pinyin:"dongxiang",zip:"0794"},{label:"东阳Dongyang0579",name:"东阳",pinyin:"dongyang",zip:"0579"},{label:"东源Dongyuan0762",name:"东源",pinyin:"dongyuan",zip:"0762"},{label:"东至Dongzhi0566",name:"东至",pinyin:"dongzhi",zip:"0566"},{label:"都昌Duchang0792",name:"都昌",pinyin:"duchang",zip:"0792"},{label:"都江堰Dujiangyan028",name:"都江堰",pinyin:"dujiangyan",zip:"028"}]},{group:"e",cities:[{label:"鄂尔多斯Eerduosi0477",name:"鄂尔多斯",pinyin:"eerduosi",zip:"0477"},{label:"恩施Enshi0718",name:"恩施",pinyin:"enshi",zip:"0718"},{label:"鄂州Ezhou0711",name:"鄂州",pinyin:"ezhou",zip:"0711"},{label:"恩平Enping0750",name:"恩平",pinyin:"enping",zip:"0750"}]},{group:"f",cities:[{label:"佛山Foshan0757",name:"佛山",pinyin:"foshan",zip:"0757"},{label:"福州Fuzhou0591",name:"福州",pinyin:"fuzhou",zip:"0591"},{label:"防城港Fangchenggang0770",name:"防城港",pinyin:"fangchenggang",zip:"0770"},{label:"抚顺Fushun0413",name:"抚顺",pinyin:"fushun",zip:"0413"},{label:"阜新Fuxin0418",name:"阜新",pinyin:"fuxin",zip:"0418"},{label:"阜阳Fuyang0558",name:"阜阳",pinyin:"fuyang",zip:"0558"},{label:"抚州Fuzhou0794",name:"抚州",pinyin:"fuzhou",zip:"0794"},{label:"法库Faku024",name:"法库",pinyin:"faku",zip:"024"},{label:"繁昌Fanchang0553",name:"繁昌",pinyin:"fanchang",zip:"0553"},{label:"方正Fangzheng0451",name:"方正",pinyin:"fangzheng",zip:"0451"},{label:"肥城Feicheng0538",name:"肥城",pinyin:"feicheng",zip:"0538"},{label:"肥东Feidong0551",name:"肥东",pinyin:"feidong",zip:"0551"},{label:"肥西Feixi0551",name:"肥西",pinyin:"feixi",zip:"0551"},{label:"费县Feixian0539",name:"费县",pinyin:"feixian",zip:"0539"},{label:"丰城Fengcheng0795",name:"丰城",pinyin:"fengcheng",zip:"0795"},{label:"丰都Fengdu023",name:"丰都",pinyin:"fengdu",zip:"023"},{label:"奉化Fenghua0574",name:"奉化",pinyin:"fenghua",zip:"0574"},{label:"奉节Fengjie023",name:"奉节",pinyin:"fengjie",zip:"023"},{label:"封开Fengkai0758",name:"封开",pinyin:"fengkai",zip:"0758"},{label:"丰顺Fengshun0753",name:"丰顺",pinyin:"fengshun",zip:"0753"},{label:"凤台Fengtai0554",name:"凤台",pinyin:"fengtai",zip:"0554"},{label:"丰县Fengxian0516",name:"丰县",pinyin:"fengxian",zip:"0516"},{label:"奉新Fengxin0795",name:"奉新",pinyin:"fengxin",zip:"0795"},{label:"凤阳Fengyang0550",name:"凤阳",pinyin:"fengyang",zip:"0550"},{label:"分宜Fenyi0790",name:"分宜",pinyin:"fenyi",zip:"0790"},{label:"佛冈Fogang0763",name:"佛冈",pinyin:"fogang",zip:"0763"},{label:"福安Fuan0593",name:"福安",pinyin:"fuan",zip:"0593"},{label:"福鼎Fuding0593",name:"福鼎",pinyin:"fuding",zip:"0593"},{label:"浮梁Fuliang0798",name:"浮梁",pinyin:"fuliang",zip:"0798"},{label:"富民Fumin0871",name:"富民",pinyin:"fumin",zip:"0871"},{label:"阜南Funan0558",name:"阜南",pinyin:"funan",zip:"0558"},{label:"阜宁Funing0515",name:"阜宁",pinyin:"funing",zip:"0515"},{label:"福清Fuqing0591",name:"福清",pinyin:"fuqing",zip:"0591"},{label:"富阳Fuyang0571",name:"富阳",pinyin:"fuyang",zip:"0571"}]},{group:"g",cities:[{label:"广州Guangzhou020",name:"广州",pinyin:"guangzhou",zip:"020"},{label:"贵阳Guiyang0851",name:"贵阳",pinyin:"guiyang",zip:"0851"},{label:"甘南Gannan0941",name:"甘南",pinyin:"gannan",zip:"0941"},{label:"赣州Ganzhou0797",name:"赣州",pinyin:"ganzhou",zip:"0797"},{label:"甘孜Ganzi0836",name:"甘孜",pinyin:"ganzi",zip:"0836"},{label:"广安Guangan0826",name:"广安",pinyin:"guangan",zip:"0826"},{label:"广元Guangyuan0839",name:"广元",pinyin:"guangyuan",zip:"0839"},{label:"贵港Guigang0775",name:"贵港",pinyin:"guigang",zip:"0775"},{label:"桂林Guilin0773",name:"桂林",pinyin:"guilin",zip:"0773"},{label:"果洛Guoluo0975",name:"果洛",pinyin:"guoluo",zip:"0975"},{label:"固原Guyuan0954",name:"固原",pinyin:"guyuan",zip:"0954"},{label:"赣县Ganxian0797",name:"赣县",pinyin:"ganxian",zip:"0797"},{label:"赣榆Ganyu0518",name:"赣榆",pinyin:"ganyu",zip:"0518"},{label:"高安Gaoan0795",name:"高安",pinyin:"gaoan",zip:"0795"},{label:"藁城Gaocheng0311",name:"藁城",pinyin:"gaocheng",zip:"0311"},{label:"高淳Gaochun025",name:"高淳",pinyin:"gaochun",zip:"025"},{label:"皋兰Gaolan0931",name:"皋兰",pinyin:"gaolan",zip:"0931"},{label:"高陵Gaoling029",name:"高陵",pinyin:"gaoling",zip:"029"},{label:"高密Gaomi0536",name:"高密",pinyin:"gaomi",zip:"0536"},{label:"高青Gaoqing0533",name:"高青",pinyin:"gaoqing",zip:"0533"},{label:"高唐Gaotang0635",name:"高唐",pinyin:"gaotang",zip:"0635"},{label:"高要Gaoyao0758",name:"高要",pinyin:"gaoyao",zip:"0758"},{label:"高邑Gaoyi0311",name:"高邑",pinyin:"gaoyi",zip:"0311"},{label:"高邮Gaoyou0514",name:"高邮",pinyin:"gaoyou",zip:"0514"},{label:"高州Gaozhou0668",name:"高州",pinyin:"gaozhou",zip:"0668"},{label:"巩义Gongyi0371",name:"巩义",pinyin:"gongyi",zip:"0371"},{label:"广昌Guangchang0794",name:"广昌",pinyin:"guangchang",zip:"0794"},{label:"广德Guangde0563",name:"广德",pinyin:"guangde",zip:"0563"},{label:"广丰Guangfeng0793",name:"广丰",pinyin:"guangfeng",zip:"0793"},{label:"广宁Guangning0758",name:"广宁",pinyin:"guangning",zip:"0758"},{label:"广饶Guangrao0546",name:"广饶",pinyin:"guangrao",zip:"0546"},{label:"光泽Guangze0599",name:"光泽",pinyin:"guangze",zip:"0599"},{label:"灌南Guannan0518",name:"灌南",pinyin:"guannan",zip:"0518"},{label:"冠县Guanxian0635",name:"冠县",pinyin:"guanxian",zip:"0635"},{label:"灌云Guanyun0518",name:"灌云",pinyin:"guanyun",zip:"0518"},{label:"贵溪Guixi0701",name:"贵溪",pinyin:"guixi",zip:"0701"},{label:"古田Gutian0593",name:"古田",pinyin:"gutian",zip:"0593"},{label:"固镇Guzhen0552",name:"固镇",pinyin:"guzhen",zip:"0552"}]},{group:"h",cities:[{label:"哈尔滨Haerbin0451",name:"哈尔滨",pinyin:"haerbin",zip:"0451"},{label:"海口Haikou0898",name:"海口",pinyin:"haikou",zip:"0898"},{label:"邯郸Handan0310",name:"邯郸",pinyin:"handan",zip:"0310"},{label:"杭州Hangzhou0571",name:"杭州",pinyin:"hangzhou",zip:"0571"},{label:"合肥Hefei0551",name:"合肥",pinyin:"hefei",zip:"0551"},{label:"惠州Huizhou0752",name:"惠州",pinyin:"huizhou",zip:"0752"},{label:"海北Haibei0970",name:"海北",pinyin:"haibei",zip:"0970"},{label:"海东Haidong0972",name:"海东",pinyin:"haidong",zip:"0972"},{label:"海南Hainan0974",name:"海南",pinyin:"hainan",zip:"0974"},{label:"海西Haixi0977",name:"海西",pinyin:"haixi",zip:"0977"},{label:"哈密Hami0902",name:"哈密",pinyin:"hami",zip:"0902"},{label:"汉中Hanzhong0916",name:"汉中",pinyin:"hanzhong",zip:"0916"},{label:"鹤壁Hebi0392",name:"鹤壁",pinyin:"hebi",zip:"0392"},{label:"河池Hechi0778",name:"河池",pinyin:"hechi",zip:"0778"},{label:"鹤岗Hegang0468",name:"鹤岗",pinyin:"hegang",zip:"0468"},{label:"黑河Heihe0456",name:"黑河",pinyin:"heihe",zip:"0456"},{label:"衡水Hengshui0318",name:"衡水",pinyin:"hengshui",zip:"0318"},{label:"衡阳Hengyang0734",name:"衡阳",pinyin:"hengyang",zip:"0734"},{label:"和田地Hetiandi0903",name:"和田地",pinyin:"hetiandi",zip:"0903"},{label:"河源Heyuan0762",name:"河源",pinyin:"heyuan",zip:"0762"},{label:"菏泽Heze0530",name:"菏泽",pinyin:"heze",zip:"0530"},{label:"贺州Hezhou0774",name:"贺州",pinyin:"hezhou",zip:"0774"},{label:"红河Honghe0873",name:"红河",pinyin:"honghe",zip:"0873"},{label:"淮安Huaian0517",name:"淮安",pinyin:"huaian",zip:"0517"},{label:"淮北Huaibei0561",name:"淮北",pinyin:"huaibei",zip:"0561"},{label:"怀化Huaihua0745",name:"怀化",pinyin:"huaihua",zip:"0745"},{label:"淮南Huainan0554",name:"淮南",pinyin:"huainan",zip:"0554"},{label:"黄冈Huanggang0713",name:"黄冈",pinyin:"huanggang",zip:"0713"},{label:"黄南Huangnan0973",name:"黄南",pinyin:"huangnan",zip:"0973"},{label:"黄山Huangshan0559",name:"黄山",pinyin:"huangshan",zip:"0559"},{label:"黄石Huangshi0714",name:"黄石",pinyin:"huangshi",zip:"0714"},{label:"呼和浩特Huhehaote0471",name:"呼和浩特",pinyin:"huhehaote",zip:"0471"},{label:"葫芦岛Huludao0429",name:"葫芦岛",pinyin:"huludao",zip:"0429"},{label:"呼伦贝尔Hulunbeier0470",name:"呼伦贝尔",pinyin:"hulunbeier",zip:"0470"},{label:"湖州Huzhou0572",name:"湖州",pinyin:"huzhou",zip:"0572"},{label:"海安Haian0513",name:"海安",pinyin:"haian",zip:"0513"},{label:"海丰Haifeng0660",name:"海丰",pinyin:"haifeng",zip:"0660"},{label:"海门Haimen0513",name:"海门",pinyin:"haimen",zip:"0513"},{label:"海宁Haining0573",name:"海宁",pinyin:"haining",zip:"0573"},{label:"海盐Haiyan0573",name:"海盐",pinyin:"haiyan",zip:"0573"},{label:"海阳Haiyang0535",name:"海阳",pinyin:"haiyang",zip:"0535"},{label:"含山Hanshan0565",name:"含山",pinyin:"hanshan",zip:"0565"},{label:"合川Hechuan023",name:"合川",pinyin:"hechuan",zip:"023"},{label:"横峰Hengfeng0793",name:"横峰",pinyin:"hengfeng",zip:"0793"},{label:"横县Hengxian0771",name:"横县",pinyin:"hengxian",zip:"0771"},{label:"和平Heping0762",name:"和平",pinyin:"heping",zip:"0762"},{label:"鹤山Heshan0750",name:"鹤山",pinyin:"heshan",zip:"0750"},{label:"和县Hexian0565",name:"和县",pinyin:"hexian",zip:"0565"},{label:"洪泽Hongze0517",name:"洪泽",pinyin:"hongze",zip:"0517"},{label:"华安Huaan0596",name:"华安",pinyin:"huaan",zip:"0596"},{label:"桦甸Huadian0423",name:"桦甸",pinyin:"huadian",zip:"0423"},{label:"怀集Huaiji0758",name:"怀集",pinyin:"huaiji",zip:"0758"},{label:"怀宁Huaining0556",name:"怀宁",pinyin:"huaining",zip:"0556"},{label:"怀远Huaiyuan0552",name:"怀远",pinyin:"huaiyuan",zip:"0552"},{label:"桓台Huantai0533",name:"桓台",pinyin:"huantai",zip:"0533"},{label:"化州Huazhou0668",name:"化州",pinyin:"huazhou",zip:"0668"},{label:"惠安Huian0595",name:"惠安",pinyin:"huian",zip:"0595"},{label:"会昌Huichang0797",name:"会昌",pinyin:"huichang",zip:"0797"},{label:"惠东Huidong0752",name:"惠东",pinyin:"huidong",zip:"0752"},{label:"惠来Huilai0663",name:"惠来",pinyin:"huilai",zip:"0663"},{label:"惠民Huimin0543",name:"惠民",pinyin:"huimin",zip:"0543"},{label:"湖口Hukou0792",name:"湖口",pinyin:"hukou",zip:"0792"},{label:"呼兰Hulan0451",name:"呼兰",pinyin:"hulan",zip:"0451"},{label:"霍邱Huoqiu0564",name:"霍邱",pinyin:"huoqiu",zip:"0564"},{label:"霍山Huoshan0564",name:"霍山",pinyin:"huoshan",zip:"0564"},{label:"户县Huxian029",name:"户县",pinyin:"huxian",zip:"029"}]},{group:"j",cities:[{label:"焦作Jiaozuo0391",name:"焦作",pinyin:"jiaozuo",zip:"0391"},{label:"嘉兴Jiaxing0573",name:"嘉兴",pinyin:"jiaxing",zip:"0573"},{label:"吉林Jilin0423",name:"吉林",pinyin:"jilin",zip:"0423"},{label:"济南Jinan0531",name:"济南",pinyin:"jinan",zip:"0531"},{label:"佳木斯Jiamusi0454",name:"佳木斯",pinyin:"jiamusi",zip:"0454"},{label:"江门Jiangmen0750",name:"江门",pinyin:"jiangmen",zip:"0750"},{label:"吉安Jian0796",name:"吉安",pinyin:"jian",zip:"0796"},{label:"嘉峪关Jiayuguan0937",name:"嘉峪关",pinyin:"jiayuguan",zip:"0937"},{label:"揭阳Jieyang0663",name:"揭阳",pinyin:"jieyang",zip:"0663"},{label:"金昌Jinchang0935",name:"金昌",pinyin:"jinchang",zip:"0935"},{label:"晋城Jincheng0356",name:"晋城",pinyin:"jincheng",zip:"0356"},{label:"景德镇Jingdezhen0798",name:"景德镇",pinyin:"jingdezhen",zip:"0798"},{label:"荆门Jingmen0724",name:"荆门",pinyin:"jingmen",zip:"0724"},{label:"荆州Jingzhou0716",name:"荆州",pinyin:"jingzhou",zip:"0716"},{label:"金华Jinhua0579",name:"金华",pinyin:"jinhua",zip:"0579"},{label:"济宁Jining0537",name:"济宁",pinyin:"jining",zip:"0537"},{label:"晋中Jinzhong0354",name:"晋中",pinyin:"jinzhong",zip:"0354"},{label:"锦州Jinzhou0416",name:"锦州",pinyin:"jinzhou",zip:"0416"},{label:"九江Jiujiang0792",name:"九江",pinyin:"jiujiang",zip:"0792"},{label:"酒泉Jiuquan0937",name:"酒泉",pinyin:"jiuquan",zip:"0937"},{label:"鸡西Jixi0467",name:"鸡西",pinyin:"jixi",zip:"0467"},{label:"建德Jiande0571",name:"建德",pinyin:"jiande",zip:"0571"},{label:"江都Jiangdu0514",name:"江都",pinyin:"jiangdu",zip:"0514"},{label:"江津Jiangjin023",name:"江津",pinyin:"jiangjin",zip:"023"},{label:"将乐Jiangle0598",name:"将乐",pinyin:"jiangle",zip:"0598"},{label:"江山Jiangshan0570",name:"江山",pinyin:"jiangshan",zip:"0570"},{label:"姜堰Jiangyan0523",name:"姜堰",pinyin:"jiangyan",zip:"0523"},{label:"江阴Jiangyin0510",name:"江阴",pinyin:"jiangyin",zip:"0510"},{label:"建湖Jianhu0515",name:"建湖",pinyin:"jianhu",zip:"0515"},{label:"建宁Jianning0598",name:"建宁",pinyin:"jianning",zip:"0598"},{label:"建瓯Jianou0599",name:"建瓯",pinyin:"jianou",zip:"0599"},{label:"建阳Jianyang0599",name:"建阳",pinyin:"jianyang",zip:"0599"},{label:"吉安Jian0796",name:"吉安",pinyin:"jian",zip:"0796"},{label:"蛟河Jiaohe0423",name:"蛟河",pinyin:"jiaohe",zip:"0423"},{label:"蕉岭Jiaoling0753",name:"蕉岭",pinyin:"jiaoling",zip:"0753"},{label:"胶南Jiaonan0532",name:"胶南",pinyin:"jiaonan",zip:"0532"},{label:"胶州Jiaozhou0532",name:"胶州",pinyin:"jiaozhou",zip:"0532"},{label:"嘉善Jiashan0573",name:"嘉善",pinyin:"jiashan",zip:"0573"},{label:"嘉祥Jiaxiang0537",name:"嘉祥",pinyin:"jiaxiang",zip:"0537"},{label:"揭东Jiedong0663",name:"揭东",pinyin:"jiedong",zip:"0663"},{label:"界首Jieshou0558",name:"界首",pinyin:"jieshou",zip:"0558"},{label:"揭西Jiexi0663",name:"揭西",pinyin:"jiexi",zip:"0663"},{label:"即墨Jimo0532",name:"即墨",pinyin:"jimo",zip:"0532"},{label:"靖安Jingan0795",name:"靖安",pinyin:"jingan",zip:"0795"},{label:"旌德Jingde0563",name:"旌德",pinyin:"jingde",zip:"0563"},{label:"井冈山Jinggangshan0796",name:"井冈山",pinyin:"jinggangshan",zip:"0796"},{label:"靖江Jingjiang0523",name:"靖江",pinyin:"jingjiang",zip:"0523"},{label:"景宁Jingning0578",name:"景宁",pinyin:"jingning",zip:"0578"},{label:"泾县Jingxian0563",name:"泾县",pinyin:"jingxian",zip:"0563"},{label:"井陉Jingxing0311",name:"井陉",pinyin:"jingxing",zip:"0311"},{label:"金湖Jinhu0517",name:"金湖",pinyin:"jinhu",zip:"0517"},{label:"晋江Jinjiang0595",name:"晋江",pinyin:"jinjiang",zip:"0595"},{label:"金门Jinmen0595",name:"金门",pinyin:"jinmen",zip:"0595"},{label:"晋宁Jinning0871",name:"晋宁",pinyin:"jinning",zip:"0871"},{label:"金坛Jintan0519",name:"金坛",pinyin:"jintan",zip:"0519"},{label:"金堂Jintang028",name:"金堂",pinyin:"jintang",zip:"028"},{label:"进贤Jinxian0791",name:"进贤",pinyin:"jinxian",zip:"0791"},{label:"金溪Jinxi0794",name:"金溪",pinyin:"jinxi",zip:"0794"},{label:"金乡Jinxiang0537",name:"金乡",pinyin:"jinxiang",zip:"0537"},{label:"缙云Jinyun0578",name:"缙云",pinyin:"jinyun",zip:"0578"},{label:"金寨Jinzhai0564",name:"金寨",pinyin:"jinzhai",zip:"0564"},{label:"晋州Jinzhou0311",name:"晋州",pinyin:"jinzhou",zip:"0311"},{label:"吉水Jishui0796",name:"吉水",pinyin:"jishui",zip:"0796"},{label:"九江Jiujiang0792",name:"九江",pinyin:"jiujiang",zip:"0792"},{label:"九台Jiutai0431",name:"九台",pinyin:"jiutai",zip:"0431"},{label:"绩溪Jixi0563",name:"绩溪",pinyin:"jixi",zip:"0563"},{label:"济阳Jiyang0531",name:"济阳",pinyin:"jiyang",zip:"0531"},{label:"济源Jiyuan0391",name:"济源",pinyin:"jiyuan",zip:"0391"},{label:"鄄城Juancheng0530",name:"鄄城",pinyin:"juancheng",zip:"0530"},{label:"莒南Junan0539",name:"莒南",pinyin:"junan",zip:"0539"},{label:"句容Jurong0511",name:"句容",pinyin:"jurong",zip:"0511"},{label:"莒县Juxian0633",name:"莒县",pinyin:"juxian",zip:"0633"},{label:"巨野Juye0530",name:"巨野",pinyin:"juye",zip:"0530"}]},{group:"k",cities:[{label:"昆明Kunming0871",name:"昆明",pinyin:"kunming",zip:"0871"},{label:"开封Kaifeng0378",name:"开封",pinyin:"kaifeng",zip:"0378"},{label:"喀什地Kashidi0998",name:"喀什地",pinyin:"kashidi",zip:"0998"},{label:"克拉玛依Kelamayi0990",name:"克拉玛依",pinyin:"kelamayi",zip:"0990"},{label:"克孜勒Kezile0908",name:"克孜勒",pinyin:"kezile",zip:"0908"},{label:"开化Kaihua0570",name:"开化",pinyin:"kaihua",zip:"0570"},{label:"开平Kaiping0750",name:"开平",pinyin:"kaiping",zip:"0750"},{label:"开县Kaixian023",name:"开县",pinyin:"kaixian",zip:"023"},{label:"开阳Kaiyang0851",name:"开阳",pinyin:"kaiyang",zip:"0851"},{label:"康平Kangping024",name:"康平",pinyin:"kangping",zip:"024"},{label:"垦利Kenli0546",name:"垦利",pinyin:"kenli",zip:"0546"},{label:"昆山Kunshan0512",name:"昆山",pinyin:"kunshan",zip:"0512"}]},{group:"l",cities:[{label:"兰州Lanzhou0931",name:"兰州",pinyin:"lanzhou",zip:"0931"},{label:"柳州Liuzhou0772",name:"柳州",pinyin:"liuzhou",zip:"0772"},{label:"洛阳Luoyang0379",name:"洛阳",pinyin:"luoyang",zip:"0379"},{label:"来宾Laibin0772",name:"来宾",pinyin:"laibin",zip:"0772"},{label:"莱芜Laiwu0634",name:"莱芜",pinyin:"laiwu",zip:"0634"},{label:"廊坊Langfang0316",name:"廊坊",pinyin:"langfang",zip:"0316"},{label:"拉萨Lasa0891",name:"拉萨",pinyin:"lasa",zip:"0891"},{label:"乐山Leshan0833",name:"乐山",pinyin:"leshan",zip:"0833"},{label:"凉山Liangshan0834",name:"凉山",pinyin:"liangshan",zip:"0834"},{label:"连云港Lianyungang0518",name:"连云港",pinyin:"lianyungang",zip:"0518"},{label:"聊城Liaocheng0635",name:"聊城",pinyin:"liaocheng",zip:"0635"},{label:"辽阳Liaoyang0419",name:"辽阳",pinyin:"liaoyang",zip:"0419"},{label:"辽源Liaoyuan0437",name:"辽源",pinyin:"liaoyuan",zip:"0437"},{label:"丽江Lijiang0888",name:"丽江",pinyin:"lijiang",zip:"0888"},{label:"临沧Lincang0883",name:"临沧",pinyin:"lincang",zip:"0883"},{label:"临汾Linfen0357",name:"临汾",pinyin:"linfen",zip:"0357"},{label:"临夏Linxia0930",name:"临夏",pinyin:"linxia",zip:"0930"},{label:"临沂Linyi0539",name:"临沂",pinyin:"linyi",zip:"0539"},{label:"林芝Linzhi0894",name:"林芝",pinyin:"linzhi",zip:"0894"},{label:"丽水Lishui0578",name:"丽水",pinyin:"lishui",zip:"0578"},{label:"六安Liuan0564",name:"六安",pinyin:"liuan",zip:"0564"},{label:"六盘水Liupanshui0858",name:"六盘水",pinyin:"liupanshui",zip:"0858"},{label:"陇南Longnan0939",name:"陇南",pinyin:"longnan",zip:"0939"},{label:"龙岩Longyan0597",name:"龙岩",pinyin:"longyan",zip:"0597"},{label:"娄底Loudi0738",name:"娄底",pinyin:"loudi",zip:"0738"},{label:"漯河Luohe0395",name:"漯河",pinyin:"luohe",zip:"0395"},{label:"泸州Luzhou0830",name:"泸州",pinyin:"luzhou",zip:"0830"},{label:"吕梁Lvliang0358",name:"吕梁",pinyin:"lvliang",zip:"0358"},{label:"来安Laian0550",name:"来安",pinyin:"laian",zip:"0550"},{label:"莱西Laixi0532",name:"莱西",pinyin:"laixi",zip:"0532"},{label:"莱阳Laiyang0535",name:"莱阳",pinyin:"laiyang",zip:"0535"},{label:"莱州Laizhou0535",name:"莱州",pinyin:"laizhou",zip:"0535"},{label:"郎溪Langxi0563",name:"郎溪",pinyin:"langxi",zip:"0563"},{label:"蓝田Lantian029",name:"蓝田",pinyin:"lantian",zip:"029"},{label:"兰溪Lanxi0579",name:"兰溪",pinyin:"lanxi",zip:"0579"},{label:"乐安Lean0794",name:"乐安",pinyin:"lean",zip:"0794"},{label:"乐昌Lechang0751",name:"乐昌",pinyin:"lechang",zip:"0751"},{label:"雷州Leizhou0759",name:"雷州",pinyin:"leizhou",zip:"0759"},{label:"乐陵Leling0534",name:"乐陵",pinyin:"leling",zip:"0534"},{label:"乐平Leping0798",name:"乐平",pinyin:"leping",zip:"0798"},{label:"乐清Leqing0577",name:"乐清",pinyin:"leqing",zip:"0577"},{label:"乐亭Leting0315",name:"乐亭",pinyin:"leting",zip:"0315"},{label:"连城Liancheng0597",name:"连城",pinyin:"liancheng",zip:"0597"},{label:"梁平Liangping023",name:"梁平",pinyin:"liangping",zip:"023"},{label:"梁山Liangshan0537",name:"梁山",pinyin:"liangshan",zip:"0537"},{label:"莲花Lianhua0799",name:"莲花",pinyin:"lianhua",zip:"0799"},{label:"连江Lianjiang0591",name:"连江",pinyin:"lianjiang",zip:"0591"},{label:"廉江Lianjiang0759",name:"廉江",pinyin:"lianjiang",zip:"0759"},{label:"连南Liannan0763",name:"连南",pinyin:"liannan",zip:"0763"},{label:"连平Lianping0762",name:"连平",pinyin:"lianping",zip:"0762"},{label:"连山Lianshan0763",name:"连山",pinyin:"lianshan",zip:"0763"},{label:"涟水Lianshui0517",name:"涟水",pinyin:"lianshui",zip:"0517"},{label:"连州Lianzhou0763",name:"连州",pinyin:"lianzhou",zip:"0763"},{label:"辽中Liaozhong024",name:"辽中",pinyin:"liaozhong",zip:"024"},{label:"黎川Lichuan0794",name:"黎川",pinyin:"lichuan",zip:"0794"},{label:"利津Lijin0546",name:"利津",pinyin:"lijin",zip:"0546"},{label:"临安Linan0571",name:"临安",pinyin:"linan",zip:"0571"},{label:"灵璧Lingbi0557",name:"灵璧",pinyin:"lingbi",zip:"0557"},{label:"灵寿Lingshou0311",name:"灵寿",pinyin:"lingshou",zip:"0311"},{label:"陵县Lingxian0534",name:"陵县",pinyin:"lingxian",zip:"0534"},{label:"临海Linhai0576",name:"临海",pinyin:"linhai",zip:"0576"},{label:"临清Linqing0635",name:"临清",pinyin:"linqing",zip:"0635"},{label:"临泉Linquan0558",name:"临泉",pinyin:"linquan",zip:"0558"},{label:"临朐Linqu0536",name:"临朐",pinyin:"linqu",zip:"0536"},{label:"临沭Linshu0539",name:"临沭",pinyin:"linshu",zip:"0539"},{label:"临邑Linyi0534",name:"临邑",pinyin:"linyi",zip:"0534"},{label:"溧水Lishui025",name:"溧水",pinyin:"lishui",zip:"025"},{label:"柳城Liucheng0772",name:"柳城",pinyin:"liucheng",zip:"0772"},{label:"柳江Liujiang0772",name:"柳江",pinyin:"liujiang",zip:"0772"},{label:"浏阳Liuyang0731",name:"浏阳",pinyin:"liuyang",zip:"0731"},{label:"利辛Lixin0558",name:"利辛",pinyin:"lixin",zip:"0558"},{label:"溧阳Liyang0519",name:"溧阳",pinyin:"liyang",zip:"0519"},{label:"隆安Longan0771",name:"隆安",pinyin:"longan",zip:"0771"},{label:"龙川Longchuan0762",name:"龙川",pinyin:"longchuan",zip:"0762"},{label:"龙海Longhai0596",name:"龙海",pinyin:"longhai",zip:"0596"},{label:"龙口Longkou0535",name:"龙口",pinyin:"longkou",zip:"0535"},{label:"龙门Longmen0752",name:"龙门",pinyin:"longmen",zip:"0752"},{label:"龙南Longnan0797",name:"龙南",pinyin:"longnan",zip:"0797"},{label:"龙泉Longquan0578",name:"龙泉",pinyin:"longquan",zip:"0578"},{label:"龙游Longyou0570",name:"龙游",pinyin:"longyou",zip:"0570"},{label:"栾城Luancheng0311",name:"栾城",pinyin:"luancheng",zip:"0311"},{label:"栾川Luanchuan0379",name:"栾川",pinyin:"luanchuan",zip:"0379"},{label:"滦南Luannan0315",name:"滦南",pinyin:"luannan",zip:"0315"},{label:"滦县Luanxian0315",name:"滦县",pinyin:"luanxian",zip:"0315"},{label:"陆丰Lufeng0660",name:"陆丰",pinyin:"lufeng",zip:"0660"},{label:"陆河Luhe0660",name:"陆河",pinyin:"luhe",zip:"0660"},{label:"庐江Lujiang0565",name:"庐江",pinyin:"lujiang",zip:"0565"},{label:"罗定Luoding0766",name:"罗定",pinyin:"luoding",zip:"0766"},{label:"洛宁Luoning0379",name:"洛宁",pinyin:"luoning",zip:"0379"},{label:"罗源Luoyuan0591",name:"罗源",pinyin:"luoyuan",zip:"0591"},{label:"鹿泉Luquan0311",name:"鹿泉",pinyin:"luquan",zip:"0311"},{label:"禄劝Luquan0871",name:"禄劝",pinyin:"luquan",zip:"0871"},{label:"芦溪Luxi0799",name:"芦溪",pinyin:"luxi",zip:"0799"},{label:"鹿寨Luzhai0772",name:"鹿寨",pinyin:"luzhai",zip:"0772"}]},{group:"m",cities:[{label:"马鞍山Maanshan0555",name:"马鞍山",pinyin:"maanshan",zip:"0555"},{label:"茂名Maoming0668",name:"茂名",pinyin:"maoming",zip:"0668"},{label:"眉山Meishan028",name:"眉山",pinyin:"meishan",zip:"028"},{label:"梅州Meizhou0753",name:"梅州",pinyin:"meizhou",zip:"0753"},{label:"绵阳Mianyang0816",name:"绵阳",pinyin:"mianyang",zip:"0816"},{label:"牡丹江Mudanjiang0453",name:"牡丹江",pinyin:"mudanjiang",zip:"0453"},{label:"马山Mashan0771",name:"马山",pinyin:"mashan",zip:"0771"},{label:"梅县Meixian0753",name:"梅县",pinyin:"meixian",zip:"0753"},{label:"蒙城Mengcheng0558",name:"蒙城",pinyin:"mengcheng",zip:"0558"},{label:"孟津Mengjin0379",name:"孟津",pinyin:"mengjin",zip:"0379"},{label:"蒙阴Mengyin0539",name:"蒙阴",pinyin:"mengyin",zip:"0539"},{label:"孟州Mengzhou0391",name:"孟州",pinyin:"mengzhou",zip:"0391"},{label:"明光Mingguang0550",name:"明光",pinyin:"mingguang",zip:"0550"},{label:"明溪Mingxi0598",name:"明溪",pinyin:"mingxi",zip:"0598"},{label:"闽侯Minhou0591",name:"闽侯",pinyin:"minhou",zip:"0591"},{label:"闽清Minqing0591",name:"闽清",pinyin:"minqing",zip:"0591"},{label:"木兰Mulan0451",name:"木兰",pinyin:"mulan",zip:"0451"}]},{group:"n",cities:[{label:"南昌Nanchang0791",name:"南昌",pinyin:"nanchang",zip:"0791"},{label:"南京Nanjing025",name:"南京",pinyin:"nanjing",zip:"025"},{label:"南宁Nanning0771",name:"南宁",pinyin:"nanning",zip:"0771"},{label:"南通Nantong0513",name:"南通",pinyin:"nantong",zip:"0513"},{label:"宁波Ningbo0574",name:"宁波",pinyin:"ningbo",zip:"0574"},{label:"南充Nanchong0817",name:"南充",pinyin:"nanchong",zip:"0817"},{label:"南平Nanping0599",name:"南平",pinyin:"nanping",zip:"0599"},{label:"南阳Nanyang0377",name:"南阳",pinyin:"nanyang",zip:"0377"},{label:"那曲Naqu0896",name:"那曲",pinyin:"naqu",zip:"0896"},{label:"内江Neijiang0832",name:"内江",pinyin:"neijiang",zip:"0832"},{label:"宁德Ningde0593",name:"宁德",pinyin:"ningde",zip:"0593"},{label:"怒江Nujiang0886",name:"怒江",pinyin:"nujiang",zip:"0886"},{label:"南安Nanan0595",name:"南安",pinyin:"nanan",zip:"0595"},{label:"南澳Nanao0754",name:"南澳",pinyin:"nanao",zip:"0754"},{label:"南城Nancheng0794",name:"南城",pinyin:"nancheng",zip:"0794"},{label:"南川Nanchuan023",name:"南川",pinyin:"nanchuan",zip:"023"},{label:"南丰Nanfeng0794",name:"南丰",pinyin:"nanfeng",zip:"0794"},{label:"南靖Nanjing0596",name:"南靖",pinyin:"nanjing",zip:"0596"},{label:"南康Nankang0797",name:"南康",pinyin:"nankang",zip:"0797"},{label:"南陵Nanling0553",name:"南陵",pinyin:"nanling",zip:"0553"},{label:"南雄Nanxiong0751",name:"南雄",pinyin:"nanxiong",zip:"0751"},{label:"宁都Ningdu0797",name:"宁都",pinyin:"ningdu",zip:"0797"},{label:"宁国Ningguo0563",name:"宁国",pinyin:"ningguo",zip:"0563"},{label:"宁海Ninghai0574",name:"宁海",pinyin:"ninghai",zip:"0574"},{label:"宁化Ninghua0598",name:"宁化",pinyin:"ninghua",zip:"0598"},{label:"宁津Ningjin0534",name:"宁津",pinyin:"ningjin",zip:"0534"},{label:"宁乡Ningxiang0731",name:"宁乡",pinyin:"ningxiang",zip:"0731"},{label:"宁阳Ningyang0538",name:"宁阳",pinyin:"ningyang",zip:"0538"},{label:"农安Nongan0431",name:"农安",pinyin:"nongan",zip:"0431"}]},{group:"p",cities:[{label:"盘锦Panjin0427",name:"盘锦",pinyin:"panjin",zip:"0427"},{label:"攀枝花Panzhihua0812",name:"攀枝花",pinyin:"panzhihua",zip:"0812"},{label:"平顶山Pingdingshan0375",name:"平顶山",pinyin:"pingdingshan",zip:"0375"},{label:"平凉Pingliang0933",name:"平凉",pinyin:"pingliang",zip:"0933"},{label:"萍乡Pingxiang0799",name:"萍乡",pinyin:"pingxiang",zip:"0799"},{label:"普洱Puer0879",name:"普洱",pinyin:"puer",zip:"0879"},{label:"莆田Putian0594",name:"莆田",pinyin:"putian",zip:"0594"},{label:"濮阳Puyang0393",name:"濮阳",pinyin:"puyang",zip:"0393"},{label:"磐安Panan0579",name:"磐安",pinyin:"panan",zip:"0579"},{label:"磐石Panshi0423",name:"磐石",pinyin:"panshi",zip:"0423"},{label:"沛县Peixian0516",name:"沛县",pinyin:"peixian",zip:"0516"},{label:"蓬莱Penglai0535",name:"蓬莱",pinyin:"penglai",zip:"0535"},{label:"彭水Pengshui023",name:"彭水",pinyin:"pengshui",zip:"023"},{label:"彭泽Pengze0792",name:"彭泽",pinyin:"pengze",zip:"0792"},{label:"彭州Pengzhou028",name:"彭州",pinyin:"pengzhou",zip:"028"},{label:"平度Pingdu0532",name:"平度",pinyin:"pingdu",zip:"0532"},{label:"平和Pinghe0596",name:"平和",pinyin:"pinghe",zip:"0596"},{label:"平湖Pinghu0573",name:"平湖",pinyin:"pinghu",zip:"0573"},{label:"屏南Pingnan0593",name:"屏南",pinyin:"pingnan",zip:"0593"},{label:"平山Pingshan0311",name:"平山",pinyin:"pingshan",zip:"0311"},{label:"平潭Pingtan0591",name:"平潭",pinyin:"pingtan",zip:"0591"},{label:"平阳Pingyang0577",name:"平阳",pinyin:"pingyang",zip:"0577"},{label:"平阴Pingyin0531",name:"平阴",pinyin:"pingyin",zip:"0531"},{label:"平邑Pingyi0539",name:"平邑",pinyin:"pingyi",zip:"0539"},{label:"平原Pingyuan0534",name:"平原",pinyin:"pingyuan",zip:"0534"},{label:"平远Pingyuan0753",name:"平远",pinyin:"pingyuan",zip:"0753"},{label:"郫县Pixian028",name:"郫县",pinyin:"pixian",zip:"028"},{label:"邳州Pizhou0516",name:"邳州",pinyin:"pizhou",zip:"0516"},{label:"鄱阳Poyang0793",name:"鄱阳",pinyin:"poyang",zip:"0793"},{label:"浦城Pucheng0599",name:"浦城",pinyin:"pucheng",zip:"0599"},{label:"浦江Pujiang0579",name:"浦江",pinyin:"pujiang",zip:"0579"},{label:"蒲江Pujiang028",name:"蒲江",pinyin:"pujiang",zip:"028"},{label:"普兰店Pulandian0411",name:"普兰店",pinyin:"pulandian",zip:"0411"},{label:"普宁Puning0663",name:"普宁",pinyin:"puning",zip:"0663"}]},{group:"q",cities:[{label:"青岛Qingdao0532",name:"青岛",pinyin:"qingdao",zip:"0532"},{label:"泉州Quanzhou0595",name:"泉州",pinyin:"quanzhou",zip:"0595"},{label:"黔东Qiandong0855",name:"黔东",pinyin:"qiandong",zip:"0855"},{label:"黔南Qiannan0854",name:"黔南",pinyin:"qiannan",zip:"0854"},{label:"黔西南Qianxinan0859",name:"黔西南",pinyin:"qianxinan",zip:"0859"},{label:"庆阳Qingyang0934",name:"庆阳",pinyin:"qingyang",zip:"0934"},{label:"清远Qingyuan0763",name:"清远",pinyin:"qingyuan",zip:"0763"},{label:"秦皇岛Qinhuangdao0335",name:"秦皇岛",pinyin:"qinhuangdao",zip:"0335"},{label:"钦州Qinzhou0777",name:"钦州",pinyin:"qinzhou",zip:"0777"},{label:"齐齐哈尔Qiqihaer0452",name:"齐齐哈尔",pinyin:"qiqihaer",zip:"0452"},{label:"七台河Qitaihe0464",name:"七台河",pinyin:"qitaihe",zip:"0464"},{label:"曲靖Qujing0874",name:"曲靖",pinyin:"qujing",zip:"0874"},{label:"衢州Quzhou0570",name:"衢州",pinyin:"quzhou",zip:"0570"},{label:"迁安Qianan0315",name:"迁安",pinyin:"qianan",zip:"0315"},{label:"潜山Qianshan0556",name:"潜山",pinyin:"qianshan",zip:"0556"},{label:"铅山Qianshan0793",name:"铅山",pinyin:"qianshan",zip:"0793"},{label:"迁西Qianxi0315",name:"迁西",pinyin:"qianxi",zip:"0315"},{label:"启东Qidong0513",name:"启东",pinyin:"qidong",zip:"0513"},{label:"齐河Qihe0534",name:"齐河",pinyin:"qihe",zip:"0534"},{label:"綦江Qijiang023",name:"綦江",pinyin:"qijiang",zip:"023"},{label:"祁门Qimen0559",name:"祁门",pinyin:"qimen",zip:"0559"},{label:"清流Qingliu0598",name:"清流",pinyin:"qingliu",zip:"0598"},{label:"青田Qingtian0578",name:"青田",pinyin:"qingtian",zip:"0578"},{label:"清新Qingxin0763",name:"清新",pinyin:"qingxin",zip:"0763"},{label:"青阳Qingyang0566",name:"青阳",pinyin:"qingyang",zip:"0566"},{label:"庆元Qingyuan0578",name:"庆元",pinyin:"qingyuan",zip:"0578"},{label:"庆云Qingyun0534",name:"庆云",pinyin:"qingyun",zip:"0534"},{label:"清镇Qingzhen0851",name:"清镇",pinyin:"qingzhen",zip:"0851"},{label:"青州Qingzhou0536",name:"青州",pinyin:"qingzhou",zip:"0536"},{label:"沁阳Qinyang0391",name:"沁阳",pinyin:"qinyang",zip:"0391"},{label:"邛崃Qionglai028",name:"邛崃",pinyin:"qionglai",zip:"028"},{label:"栖霞Qixia0535",name:"栖霞",pinyin:"qixia",zip:"0535"},{label:"全椒Quanjiao0550",name:"全椒",pinyin:"quanjiao",zip:"0550"},{label:"全南Quannan0797",name:"全南",pinyin:"quannan",zip:"0797"},{label:"曲阜Qufu0537",name:"曲阜",pinyin:"qufu",zip:"0537"},{label:"曲江Qujiang0751",name:"曲江",pinyin:"qujiang",zip:"0751"}]},{group:"r",cities:[{label:"日喀则Rikaze0892",name:"日喀则",pinyin:"rikaze",zip:"0892"},{label:"日照Rizhao0633",name:"日照",pinyin:"rizhao",zip:"0633"},{label:"饶平Raoping0768",name:"饶平",pinyin:"raoping",zip:"0768"},{label:"仁化Renhua0751",name:"仁化",pinyin:"renhua",zip:"0751"},{label:"融安Rongan0772",name:"融安",pinyin:"rongan",zip:"0772"},{label:"荣昌Rongchang023",name:"荣昌",pinyin:"rongchang",zip:"023"},{label:"荣成Rongcheng0631",name:"荣成",pinyin:"rongcheng",zip:"0631"},{label:"融水Rongshui0772",name:"融水",pinyin:"rongshui",zip:"0772"},{label:"如东Rudong0513",name:"如东",pinyin:"rudong",zip:"0513"},{label:"如皋Rugao0513",name:"如皋",pinyin:"rugao",zip:"0513"},{label:"瑞安Ruian0577",name:"瑞安",pinyin:"ruian",zip:"0577"},{label:"瑞昌Ruichang0792",name:"瑞昌",pinyin:"ruichang",zip:"0792"},{label:"瑞金Ruijin0797",name:"瑞金",pinyin:"ruijin",zip:"0797"},{label:"乳山Rushan0631",name:"乳山",pinyin:"rushan",zip:"0631"},{label:"汝阳Ruyang0379",name:"汝阳",pinyin:"ruyang",zip:"0379"},{label:"乳源Ruyuan0751",name:"乳源",pinyin:"ruyuan",zip:"0751"}]},{group:"s",cities:[{label:"上海Shanghai021",name:"上海",pinyin:"shanghai",zip:"021"},{label:"沈阳Shenyang024",name:"沈阳",pinyin:"shenyang",zip:"024"},{label:"深圳Shenzhen0755",name:"深圳",pinyin:"shenzhen",zip:"0755"},{label:"石家庄Shijiazhuang0311",name:"石家庄",pinyin:"shijiazhuang",zip:"0311"},{label:"苏州Suzhou0512",name:"苏州",pinyin:"suzhou",zip:"0512"},{label:"三门峡Sanmenxia0398",name:"三门峡",pinyin:"sanmenxia",zip:"0398"},{label:"三明Sanming0598",name:"三明",pinyin:"sanming",zip:"0598"},{label:"三亚Sanya0899",name:"三亚",pinyin:"sanya",zip:"0899"},{label:"商洛Shangluo0914",name:"商洛",pinyin:"shangluo",zip:"0914"},{label:"商丘Shangqiu0370",name:"商丘",pinyin:"shangqiu",zip:"0370"},{label:"上饶Shangrao0793",name:"上饶",pinyin:"shangrao",zip:"0793"},{label:"山南Shannan0893",name:"山南",pinyin:"shannan",zip:"0893"},{label:"汕头Shantou0754",name:"汕头",pinyin:"shantou",zip:"0754"},{label:"汕尾Shanwei0660",name:"汕尾",pinyin:"shanwei",zip:"0660"},{label:"韶关Shaoguan0751",name:"韶关",pinyin:"shaoguan",zip:"0751"},{label:"绍兴Shaoxing0575",name:"绍兴",pinyin:"shaoxing",zip:"0575"},{label:"邵阳Shaoyang0739",name:"邵阳",pinyin:"shaoyang",zip:"0739"},{label:"十堰Shiyan0719",name:"十堰",pinyin:"shiyan",zip:"0719"},{label:"石嘴山Shizuishan0952",name:"石嘴山",pinyin:"shizuishan",zip:"0952"},{label:"双鸭山Shuangyashan0469",name:"双鸭山",pinyin:"shuangyashan",zip:"0469"},{label:"朔州Shuozhou0349",name:"朔州",pinyin:"shuozhou",zip:"0349"},{label:"四平Siping0434",name:"四平",pinyin:"siping",zip:"0434"},{label:"松原Songyuan0438",name:"松原",pinyin:"songyuan",zip:"0438"},{label:"绥化Suihua0455",name:"绥化",pinyin:"suihua",zip:"0455"},{label:"遂宁Suining0825",name:"遂宁",pinyin:"suining",zip:"0825"},{label:"随州Suizhou0722",name:"随州",pinyin:"suizhou",zip:"0722"},{label:"宿迁Suqian0527",name:"宿迁",pinyin:"suqian",zip:"0527"},{label:"宿州Suzhou0557",name:"宿州",pinyin:"suzhou",zip:"0557"},{label:"三江Sanjiang0772",name:"三江",pinyin:"sanjiang",zip:"0772"},{label:"三门Sanmen0576",name:"三门",pinyin:"sanmen",zip:"0576"},{label:"诏安Saoan0596",name:"诏安",pinyin:"saoan",zip:"0596"},{label:"上高Shanggao0795",name:"上高",pinyin:"shanggao",zip:"0795"},{label:"上杭Shanghang0597",name:"上杭",pinyin:"shanghang",zip:"0597"},{label:"商河Shanghe0531",name:"商河",pinyin:"shanghe",zip:"0531"},{label:"上栗Shangli0799",name:"上栗",pinyin:"shangli",zip:"0799"},{label:"上林Shanglin0771",name:"上林",pinyin:"shanglin",zip:"0771"},{label:"上饶Shangrao0793",name:"上饶",pinyin:"shangrao",zip:"0793"},{label:"上犹Shangyou0797",name:"上犹",pinyin:"shangyou",zip:"0797"},{label:"上虞Shangyu0575",name:"上虞",pinyin:"shangyu",zip:"0575"},{label:"尚志Shangzhi0451",name:"尚志",pinyin:"shangzhi",zip:"0451"},{label:"邵武Shaowu0599",name:"邵武",pinyin:"shaowu",zip:"0599"},{label:"绍兴Shaoxing0575",name:"绍兴",pinyin:"shaoxing",zip:"0575"},{label:"沙县Shaxian0598",name:"沙县",pinyin:"shaxian",zip:"0598"},{label:"嵊泗Shengsi0580",name:"嵊泗",pinyin:"shengsi",zip:"0580"},{label:"嵊州Shengzhou0575",name:"嵊州",pinyin:"shengzhou",zip:"0575"},{label:"莘县Shenxian0635",name:"莘县",pinyin:"shenxian",zip:"0635"},{label:"深泽Shenze0311",name:"深泽",pinyin:"shenze",zip:"0311"},{label:"歙县Shexian0559",name:"歙县",pinyin:"shexian",zip:"0559"},{label:"射阳Sheyang0515",name:"射阳",pinyin:"sheyang",zip:"0515"},{label:"石城Shicheng0797",name:"石城",pinyin:"shicheng",zip:"0797"},{label:"石林Shilin0871",name:"石林",pinyin:"shilin",zip:"0871"},{label:"石狮Shishi0595",name:"石狮",pinyin:"shishi",zip:"0595"},{label:"石台Shitai0566",name:"石台",pinyin:"shitai",zip:"0566"},{label:"始兴Shixing0751",name:"始兴",pinyin:"shixing",zip:"0751"},{label:"石柱Shizhu023",name:"石柱",pinyin:"shizhu",zip:"023"},{label:"寿光Shouguang0536",name:"寿光",pinyin:"shouguang",zip:"0536"},{label:"寿宁Shouning0593",name:"寿宁",pinyin:"shouning",zip:"0593"},{label:"寿县Shouxian0564",name:"寿县",pinyin:"shouxian",zip:"0564"},{label:"双城Shuangcheng0451",name:"双城",pinyin:"shuangcheng",zip:"0451"},{label:"双流Shuangliu028",name:"双流",pinyin:"shuangliu",zip:"028"},{label:"舒城Shucheng0564",name:"舒城",pinyin:"shucheng",zip:"0564"},{label:"舒兰Shulan0423",name:"舒兰",pinyin:"shulan",zip:"0423"},{label:"顺昌Shunchang0599",name:"顺昌",pinyin:"shunchang",zip:"0599"},{label:"沭阳Shuyang0527",name:"沭阳",pinyin:"shuyang",zip:"0527"},{label:"泗洪Sihong0527",name:"泗洪",pinyin:"sihong",zip:"0527"},{label:"四会Sihui0758",name:"四会",pinyin:"sihui",zip:"0758"},{label:"泗水Sishui0537",name:"泗水",pinyin:"sishui",zip:"0537"},{label:"泗县Sixian0557",name:"泗县",pinyin:"sixian",zip:"0557"},{label:"泗阳Siyang0527",name:"泗阳",pinyin:"siyang",zip:"0527"},{label:"嵩明Songming0871",name:"嵩明",pinyin:"songming",zip:"0871"},{label:"松溪Songxi0599",name:"松溪",pinyin:"songxi",zip:"0599"},{label:"嵩县Songxian0379",name:"嵩县",pinyin:"songxian",zip:"0379"},{label:"松阳Songyang0578",name:"松阳",pinyin:"songyang",zip:"0578"},{label:"遂昌Suichang0578",name:"遂昌",pinyin:"suichang",zip:"0578"},{label:"遂川Suichuan0796",name:"遂川",pinyin:"suichuan",zip:"0796"},{label:"睢宁Suining0516",name:"睢宁",pinyin:"suining",zip:"0516"},{label:"濉溪Suixi0561",name:"濉溪",pinyin:"suixi",zip:"0561"},{label:"遂溪Suixi0759",name:"遂溪",pinyin:"suixi",zip:"0759"},{label:"宿松Susong0556",name:"宿松",pinyin:"susong",zip:"0556"},{label:"宿豫Suyu0527",name:"宿豫",pinyin:"suyu",zip:"0527"}]},{group:"t",cities:[{label:"天津Tianjin022",name:"天津",pinyin:"tianjin",zip:"022"},{label:"台州Taizhou0576",name:"台州",pinyin:"taizhou",zip:"0576"},{label:"唐山Tangshan0315",name:"唐山",pinyin:"tangshan",zip:"0315"},{label:"塔城地Tachengdi0901",name:"塔城地",pinyin:"tachengdi",zip:"0901"},{label:"泰安Taian0538",name:"泰安",pinyin:"taian",zip:"0538"},{label:"太原Taiyuan0351",name:"太原",pinyin:"taiyuan",zip:"0351"},{label:"泰州Taizhou0523",name:"泰州",pinyin:"taizhou",zip:"0523"},{label:"天水Tianshui0938",name:"天水",pinyin:"tianshui",zip:"0938"},{label:"铁岭Tieling0410",name:"铁岭",pinyin:"tieling",zip:"0410"},{label:"铜川Tongchuan0919",name:"铜川",pinyin:"tongchuan",zip:"0919"},{label:"通化Tonghua0435",name:"通化",pinyin:"tonghua",zip:"0435"},{label:"通辽Tongliao0475",name:"通辽",pinyin:"tongliao",zip:"0475"},{label:"铜陵Tongling0562",name:"铜陵",pinyin:"tongling",zip:"0562"},{label:"铜仁Tongren0856",name:"铜仁",pinyin:"tongren",zip:"0856"},{label:"吐鲁番Tulufan0995",name:"吐鲁番",pinyin:"tulufan",zip:"0995"},{label:"太仓Taicang0512",name:"太仓",pinyin:"taicang",zip:"0512"},{label:"太和Taihe0558",name:"太和",pinyin:"taihe",zip:"0558"},{label:"泰和Taihe0796",name:"泰和",pinyin:"taihe",zip:"0796"},{label:"太湖Taihu0556",name:"太湖",pinyin:"taihu",zip:"0556"},{label:"泰宁Taining0598",name:"泰宁",pinyin:"taining",zip:"0598"},{label:"台山Taishan0750",name:"台山",pinyin:"taishan",zip:"0750"},{label:"泰顺Taishun0577",name:"泰顺",pinyin:"taishun",zip:"0577"},{label:"泰兴Taixing0523",name:"泰兴",pinyin:"taixing",zip:"0523"},{label:"郯城Tancheng0539",name:"郯城",pinyin:"tancheng",zip:"0539"},{label:"唐海Tanghai0315",name:"唐海",pinyin:"tanghai",zip:"0315"},{label:"滕州Tengzhou0623",name:"滕州",pinyin:"tengzhou",zip:"0623"},{label:"天长Tianchang0550",name:"天长",pinyin:"tianchang",zip:"0550"},{label:"天台Tiantai0576",name:"天台",pinyin:"tiantai",zip:"0576"},{label:"桐城Tongcheng0556",name:"桐城",pinyin:"tongcheng",zip:"0556"},{label:"铜鼓Tonggu0795",name:"铜鼓",pinyin:"tonggu",zip:"0795"},{label:"通河Tonghe0451",name:"通河",pinyin:"tonghe",zip:"0451"},{label:"铜梁Tongliang023",name:"铜梁",pinyin:"tongliang",zip:"023"},{label:"铜陵Tongling0562",name:"铜陵",pinyin:"tongling",zip:"0562"},{label:"桐庐Tonglu0571",name:"桐庐",pinyin:"tonglu",zip:"0571"},{label:"潼南Tongnan023",name:"潼南",pinyin:"tongnan",zip:"023"},{label:"铜山Tongshan0516",name:"铜山",pinyin:"tongshan",zip:"0516"},{label:"桐乡Tongxiang0573",name:"桐乡",pinyin:"tongxiang",zip:"0573"},{label:"通州Tongzhou0513",name:"通州",pinyin:"tongzhou",zip:"0513"}]},{group:"w",cities:[{label:"潍坊Weifang0536",name:"潍坊",pinyin:"weifang",zip:"0536"},{label:"威海Weihai0631",name:"威海",pinyin:"weihai",zip:"0631"},{label:"武汉Wuhan027",name:"武汉",pinyin:"wuhan",zip:"027"},{label:"无锡Wuxi0510",name:"无锡",pinyin:"wuxi",zip:"0510"},{label:"渭南Weinan0913",name:"渭南",pinyin:"weinan",zip:"0913"},{label:"文山Wenshan0876",name:"文山",pinyin:"wenshan",zip:"0876"},{label:"温州Wenzhou0577",name:"温州",pinyin:"wenzhou",zip:"0577"},{label:"乌海Wuhai0473",name:"乌海",pinyin:"wuhai",zip:"0473"},{label:"芜湖Wuhu0553",name:"芜湖",pinyin:"wuhu",zip:"0553"},{label:"乌兰察布Wulanchabu0474",name:"乌兰察布",pinyin:"wulanchabu",zip:"0474"},{label:"乌鲁木齐Wulumuqi0991",name:"乌鲁木齐",pinyin:"wulumuqi",zip:"0991"},{label:"武威Wuwei0935",name:"武威",pinyin:"wuwei",zip:"0935"},{label:"吴忠Wuzhong0953",name:"吴忠",pinyin:"wuzhong",zip:"0953"},{label:"梧州Wuzhou0774",name:"梧州",pinyin:"wuzhou",zip:"0774"},{label:"瓦房店Wafangdian0411",name:"瓦房店",pinyin:"wafangdian",zip:"0411"},{label:"万安Wanan0796",name:"万安",pinyin:"wanan",zip:"0796"},{label:"望城Wangcheng0731",name:"望城",pinyin:"wangcheng",zip:"0731"},{label:"望江Wangjiang0556",name:"望江",pinyin:"wangjiang",zip:"0556"},{label:"万年Wannian0793",name:"万年",pinyin:"wannian",zip:"0793"},{label:"万载Wanzai0795",name:"万载",pinyin:"wanzai",zip:"0795"},{label:"微山Weishan0537",name:"微山",pinyin:"weishan",zip:"0537"},{label:"文成Wencheng0577",name:"文成",pinyin:"wencheng",zip:"0577"},{label:"文登Wendeng0631",name:"文登",pinyin:"wendeng",zip:"0631"},{label:"翁源Wengyuan0751",name:"翁源",pinyin:"wengyuan",zip:"0751"},{label:"温岭Wenling0576",name:"温岭",pinyin:"wenling",zip:"0576"},{label:"汶上Wenshang0537",name:"汶上",pinyin:"wenshang",zip:"0537"},{label:"温县Wenxian0391",name:"温县",pinyin:"wenxian",zip:"0391"},{label:"涡阳Woyang0558",name:"涡阳",pinyin:"woyang",zip:"0558"},{label:"五常Wuchang0451",name:"五常",pinyin:"wuchang",zip:"0451"},{label:"武城Wucheng0534",name:"武城",pinyin:"wucheng",zip:"0534"},{label:"吴川Wuchuan0759",name:"吴川",pinyin:"wuchuan",zip:"0759"},{label:"无棣Wudi0543",name:"无棣",pinyin:"wudi",zip:"0543"},{label:"五河Wuhe0552",name:"五河",pinyin:"wuhe",zip:"0552"},{label:"芜湖Wuhu0553",name:"芜湖",pinyin:"wuhu",zip:"0553"},{label:"五华Wuhua0753",name:"五华",pinyin:"wuhua",zip:"0753"},{label:"无极Wuji0311",name:"无极",pinyin:"wuji",zip:"0311"},{label:"吴江Wujiang0512",name:"吴江",pinyin:"wujiang",zip:"0512"},{label:"五莲Wulian0633",name:"五莲",pinyin:"wulian",zip:"0633"},{label:"武隆Wulong023",name:"武隆",pinyin:"wulong",zip:"023"},{label:"武鸣Wuming0771",name:"武鸣",pinyin:"wuming",zip:"0771"},{label:"武宁Wuning0792",name:"武宁",pinyin:"wuning",zip:"0792"},{label:"武平Wuping0597",name:"武平",pinyin:"wuping",zip:"0597"},{label:"巫山Wushan023",name:"巫山",pinyin:"wushan",zip:"023"},{label:"无为Wuwei0565",name:"无为",pinyin:"wuwei",zip:"0565"},{label:"巫溪Wuxi023",name:"巫溪",pinyin:"wuxi",zip:"023"},{label:"武义Wuyi0579",name:"武义",pinyin:"wuyi",zip:"0579"},{label:"武夷山Wuyishan0599",name:"武夷山",pinyin:"wuyishan",zip:"0599"},{label:"婺源Wuyuan0793",name:"婺源",pinyin:"wuyuan",zip:"0793"},{label:"武陟Wuzhi0391",name:"武陟",pinyin:"wuzhi",zip:"0391"}]},{group:"x",cities:[{label:"厦门Xiamen0592",name:"厦门",pinyin:"xiamen",zip:"0592"},{label:"西安Xian029",name:"西安",pinyin:"xian",zip:"029"},{label:"许昌Xuchang0374",name:"许昌",pinyin:"xuchang",zip:"0374"},{label:"徐州Xuzhou0516",name:"徐州",pinyin:"xuzhou",zip:"0516"},{label:"襄樊Xiangfan0710",name:"襄樊",pinyin:"xiangfan",zip:"0710"},{label:"湘潭Xiangtan0732",name:"湘潭",pinyin:"xiangtan",zip:"0732"},{label:"湘西Xiangxi0743",name:"湘西",pinyin:"xiangxi",zip:"0743"},{label:"咸宁Xianning0715",name:"咸宁",pinyin:"xianning",zip:"0715"},{label:"咸阳Xianyang029",name:"咸阳",pinyin:"xianyang",zip:"029"},{label:"孝感Xiaogan0712",name:"孝感",pinyin:"xiaogan",zip:"0712"},{label:"锡林郭勒盟Xilinguolemeng0479",name:"锡林郭勒盟",pinyin:"xilinguolemeng",zip:"0479"},{label:"兴安盟Xinganmeng0482",name:"兴安盟",pinyin:"xinganmeng",zip:"0482"},{label:"邢台Xingtai0319",name:"邢台",pinyin:"xingtai",zip:"0319"},{label:"西宁Xining0971",name:"西宁",pinyin:"xining",zip:"0971"},{label:"新乡Xinxiang0373",name:"新乡",pinyin:"xinxiang",zip:"0373"},{label:"信阳Xinyang0376",name:"信阳",pinyin:"xinyang",zip:"0376"},{label:"新余Xinyu0790",name:"新余",pinyin:"xinyu",zip:"0790"},{label:"忻州Xinzhou0350",name:"忻州",pinyin:"xinzhou",zip:"0350"},{label:"西双版纳Xishuangbanna0691",name:"西双版纳",pinyin:"xishuangbanna",zip:"0691"},{label:"宣城Xuancheng0563",name:"宣城",pinyin:"xuancheng",zip:"0563"},{label:"峡江Xiajiang0796",name:"峡江",pinyin:"xiajiang",zip:"0796"},{label:"夏津Xiajin0534",name:"夏津",pinyin:"xiajin",zip:"0534"},{label:"象山Xiangshan0574",name:"象山",pinyin:"xiangshan",zip:"0574"},{label:"响水Xiangshui0515",name:"响水",pinyin:"xiangshui",zip:"0515"},{label:"仙居Xianju0576",name:"仙居",pinyin:"xianju",zip:"0576"},{label:"仙游Xianyou0594",name:"仙游",pinyin:"xianyou",zip:"0594"},{label:"萧县Xiaoxian0557",name:"萧县",pinyin:"xiaoxian",zip:"0557"},{label:"霞浦Xiapu0593",name:"霞浦",pinyin:"xiapu",zip:"0593"},{label:"息烽Xifeng0851",name:"息烽",pinyin:"xifeng",zip:"0851"},{label:"新安Xinan0379",name:"新安",pinyin:"xinan",zip:"0379"},{label:"新昌Xinchang0575",name:"新昌",pinyin:"xinchang",zip:"0575"},{label:"信丰Xinfeng0797",name:"信丰",pinyin:"xinfeng",zip:"0797"},{label:"新丰Xinfeng0751",name:"新丰",pinyin:"xinfeng",zip:"0751"},{label:"新干Xingan0796",name:"新干",pinyin:"xingan",zip:"0796"},{label:"兴国Xingguo0797",name:"兴国",pinyin:"xingguo",zip:"0797"},{label:"兴化Xinghua0523",name:"兴化",pinyin:"xinghua",zip:"0523"},{label:"兴宁Xingning0753",name:"兴宁",pinyin:"xingning",zip:"0753"},{label:"行唐Xingtang0311",name:"行唐",pinyin:"xingtang",zip:"0311"},{label:"荥阳Xingyang0371",name:"荥阳",pinyin:"xingyang",zip:"0371"},{label:"星子Xingzi0792",name:"星子",pinyin:"xingzi",zip:"0792"},{label:"辛集Xinji0311",name:"辛集",pinyin:"xinji",zip:"0311"},{label:"新建Xinjian0791",name:"新建",pinyin:"xinjian",zip:"0791"},{label:"新津Xinjin028",name:"新津",pinyin:"xinjin",zip:"028"},{label:"新乐Xinle0311",name:"新乐",pinyin:"xinle",zip:"0311"},{label:"新民Xinmin024",name:"新民",pinyin:"xinmin",zip:"024"},{label:"新密Xinmi0371",name:"新密",pinyin:"xinmi",zip:"0371"},{label:"新泰Xintai0538",name:"新泰",pinyin:"xintai",zip:"0538"},{label:"新兴Xinxing0766",name:"新兴",pinyin:"xinxing",zip:"0766"},{label:"新沂Xinyi0516",name:"新沂",pinyin:"xinyi",zip:"0516"},{label:"信宜Xinyi0668",name:"信宜",pinyin:"xinyi",zip:"0668"},{label:"新郑Xinzheng0371",name:"新郑",pinyin:"xinzheng",zip:"0371"},{label:"休宁Xiuning0559",name:"休宁",pinyin:"xiuning",zip:"0559"},{label:"秀山Xiushan023",name:"秀山",pinyin:"xiushan",zip:"023"},{label:"修水Xiushui0792",name:"修水",pinyin:"xiushui",zip:"0792"},{label:"修文Xiuwen0851",name:"修文",pinyin:"xiuwen",zip:"0851"},{label:"修武Xiuwu0391",name:"修武",pinyin:"xiuwu",zip:"0391"},{label:"寻甸Xundian0871",name:"寻甸",pinyin:"xundian",zip:"0871"},{label:"寻乌Xunwu0797",name:"寻乌",pinyin:"xunwu",zip:"0797"},{label:"徐闻Xuwen0759",name:"徐闻",pinyin:"xuwen",zip:"0759"},{label:"盱眙Xuyi0517",name:"盱眙",pinyin:"xuyi",zip:"0517"}]},{group:"y",cities:[{label:"扬州Yangzhou0514",name:"扬州",pinyin:"yangzhou",zip:"0514"},{label:"烟台Yantai0535",name:"烟台",pinyin:"yantai",zip:"0535"},{label:"雅安Yaan0835",name:"雅安",pinyin:"yaan",zip:"0835"},{label:"延安Yanan0911",name:"延安",pinyin:"yanan",zip:"0911"},{label:"延边Yanbian0433",name:"延边",pinyin:"yanbian",zip:"0433"},{label:"盐城Yancheng0515",name:"盐城",pinyin:"yancheng",zip:"0515"},{label:"阳江Yangjiang0662",name:"阳江",pinyin:"yangjiang",zip:"0662"},{label:"阳泉Yangquan0353",name:"阳泉",pinyin:"yangquan",zip:"0353"},{label:"宜宾Yibin0831",name:"宜宾",pinyin:"yibin",zip:"0831"},{label:"宜昌Yichang0717",name:"宜昌",pinyin:"yichang",zip:"0717"},{label:"伊春Yichun0458",name:"伊春",pinyin:"yichun",zip:"0458"},{label:"宜春Yichun0795",name:"宜春",pinyin:"yichun",zip:"0795"},{label:"伊犁哈萨克Yilihasake0999",name:"伊犁哈萨克",pinyin:"yilihasake",zip:"0999"},{label:"银川Yinchuan0951",name:"银川",pinyin:"yinchuan",zip:"0951"},{label:"营口Yingkou0417",name:"营口",pinyin:"yingkou",zip:"0417"},{label:"鹰潭Yingtan0701",name:"鹰潭",pinyin:"yingtan",zip:"0701"},{label:"益阳Yiyang0737",name:"益阳",pinyin:"yiyang",zip:"0737"},{label:"永州Yongzhou0746",name:"永州",pinyin:"yongzhou",zip:"0746"},{label:"岳阳Yueyang0730",name:"岳阳",pinyin:"yueyang",zip:"0730"},{label:"玉林Yulin0775",name:"玉林",pinyin:"yulin",zip:"0775"},{label:"榆林Yulin0912",name:"榆林",pinyin:"yulin",zip:"0912"},{label:"运城Yuncheng0359",name:"运城",pinyin:"yuncheng",zip:"0359"},{label:"云浮Yunfu0766",name:"云浮",pinyin:"yunfu",zip:"0766"},{label:"玉树Yushu0976",name:"玉树",pinyin:"yushu",zip:"0976"},{label:"玉溪Yuxi0877",name:"玉溪",pinyin:"yuxi",zip:"0877"},{label:"阳春Yangchun0662",name:"阳春",pinyin:"yangchun",zip:"0662"},{label:"阳东Yangdong0662",name:"阳东",pinyin:"yangdong",zip:"0662"},{label:"阳谷Yanggu0635",name:"阳谷",pinyin:"yanggu",zip:"0635"},{label:"阳山Yangshan0763",name:"阳山",pinyin:"yangshan",zip:"0763"},{label:"阳信Yangxin0543",name:"阳信",pinyin:"yangxin",zip:"0543"},{label:"阳西Yangxi0662",name:"阳西",pinyin:"yangxi",zip:"0662"},{label:"扬中Yangzhong0511",name:"扬中",pinyin:"yangzhong",zip:"0511"},{label:"偃师Yanshi0379",name:"偃师",pinyin:"yanshi",zip:"0379"},{label:"延寿Yanshou0451",name:"延寿",pinyin:"yanshou",zip:"0451"},{label:"兖州Yanzhou0537",name:"兖州",pinyin:"yanzhou",zip:"0537"},{label:"伊川Yichuan0379",name:"伊川",pinyin:"yichuan",zip:"0379"},{label:"宜丰Yifeng0795",name:"宜丰",pinyin:"yifeng",zip:"0795"},{label:"宜黄Yihuang0794",name:"宜黄",pinyin:"yihuang",zip:"0794"},{label:"依兰Yilan0451",name:"依兰",pinyin:"yilan",zip:"0451"},{label:"宜良Yiliang0871",name:"宜良",pinyin:"yiliang",zip:"0871"},{label:"沂南Yinan0539",name:"沂南",pinyin:"yinan",zip:"0539"},{label:"英德Yingde0763",name:"英德",pinyin:"yingde",zip:"0763"},{label:"颍上Yingshang0558",name:"颍上",pinyin:"yingshang",zip:"0558"},{label:"沂水Yishui0539",name:"沂水",pinyin:"yishui",zip:"0539"},{label:"义乌Yiwu0579",name:"义乌",pinyin:"yiwu",zip:"0579"},{label:"黟县Yixian0559",name:"黟县",pinyin:"yixian",zip:"0559"},{label:"宜兴Yixing0510",name:"宜兴",pinyin:"yixing",zip:"0510"},{label:"弋阳Yiyang0793",name:"弋阳",pinyin:"yiyang",zip:"0793"},{label:"宜阳Yiyang0379",name:"宜阳",pinyin:"yiyang",zip:"0379"},{label:"沂源Yiyuan0533",name:"沂源",pinyin:"yiyuan",zip:"0533"},{label:"仪征Yizheng0514",name:"仪征",pinyin:"yizheng",zip:"0514"},{label:"永安Yongan0598",name:"永安",pinyin:"yongan",zip:"0598"},{label:"永川Yongchuan023",name:"永川",pinyin:"yongchuan",zip:"023"},{label:"永春Yongchun0595",name:"永春",pinyin:"yongchun",zip:"0595"},{label:"永登Yongdeng0931",name:"永登",pinyin:"yongdeng",zip:"0931"},{label:"永定Yongding0597",name:"永定",pinyin:"yongding",zip:"0597"},{label:"永丰Yongfeng0796",name:"永丰",pinyin:"yongfeng",zip:"0796"},{label:"永吉Yongji0423",name:"永吉",pinyin:"yongji",zip:"0423"},{label:"永嘉Yongjia0577",name:"永嘉",pinyin:"yongjia",zip:"0577"},{label:"永康Yongkang0579",name:"永康",pinyin:"yongkang",zip:"0579"},{label:"邕宁Yongning0771",name:"邕宁",pinyin:"yongning",zip:"0771"},{label:"永泰Yongtai0591",name:"永泰",pinyin:"yongtai",zip:"0591"},{label:"永新Yongxin0796",name:"永新",pinyin:"yongxin",zip:"0796"},{label:"永修Yongxiu0792",name:"永修",pinyin:"yongxiu",zip:"0792"},{label:"尤溪Youxi0598",name:"尤溪",pinyin:"youxi",zip:"0598"},{label:"酉阳Youyang023",name:"酉阳",pinyin:"youyang",zip:"023"},{label:"元氏Yuanshi0311",name:"元氏",pinyin:"yuanshi",zip:"0311"},{label:"禹城Yucheng0534",name:"禹城",pinyin:"yucheng",zip:"0534"},{label:"于都Yudu0797",name:"于都",pinyin:"yudu",zip:"0797"},{label:"岳西Yuexi0556",name:"岳西",pinyin:"yuexi",zip:"0556"},{label:"余干Yugan0793",name:"余干",pinyin:"yugan",zip:"0793"},{label:"玉环Yuhuan0576",name:"玉环",pinyin:"yuhuan",zip:"0576"},{label:"余江Yujiang0701",name:"余江",pinyin:"yujiang",zip:"0701"},{label:"郁南Yunan0766",name:"郁南",pinyin:"yunan",zip:"0766"},{label:"云安Yunan0766",name:"云安",pinyin:"yunan",zip:"0766"},{label:"郓城Yuncheng0530",name:"郓城",pinyin:"yuncheng",zip:"0530"},{label:"云和Yunhe0578",name:"云和",pinyin:"yunhe",zip:"0578"},{label:"云霄Yunxiao0596",name:"云霄",pinyin:"yunxiao",zip:"0596"},{label:"云阳Yunyang023",name:"云阳",pinyin:"yunyang",zip:"023"},{label:"玉山Yushan0793",name:"玉山",pinyin:"yushan",zip:"0793"},{label:"榆树Yushu0431",name:"榆树",pinyin:"yushu",zip:"0431"},{label:"鱼台Yutai0537",name:"鱼台",pinyin:"yutai",zip:"0537"},{label:"玉田Yutian0315",name:"玉田",pinyin:"yutian",zip:"0315"},{label:"余姚Yuyao0574",name:"余姚",pinyin:"yuyao",zip:"0574"},{label:"榆中Yuzhong0931",name:"榆中",pinyin:"yuzhong",zip:"0931"}]},{group:"z",cities:[{label:"漳州Zhangzhou0596",name:"漳州",pinyin:"zhangzhou",zip:"0596"},{label:"郑州Zhengzhou0371",name:"郑州",pinyin:"zhengzhou",zip:"0371"},{label:"中山Zhongshan0760",name:"中山",pinyin:"zhongshan",zip:"0760"},{label:"珠海Zhuhai0756",name:"珠海",pinyin:"zhuhai",zip:"0756"},{label:"枣庄Zaozhuang0623",name:"枣庄",pinyin:"zaozhuang",zip:"0623"},{label:"张家界Zhangjiajie0744",name:"张家界",pinyin:"zhangjiajie",zip:"0744"},{label:"张家口Zhangjiakou0313",name:"张家口",pinyin:"zhangjiakou",zip:"0313"},{label:"张掖Zhangye0936",name:"张掖",pinyin:"zhangye",zip:"0936"},{label:"湛江Zhanjiang0759",name:"湛江",pinyin:"zhanjiang",zip:"0759"},{label:"肇庆Zhaoqing0758",name:"肇庆",pinyin:"zhaoqing",zip:"0758"},{label:"昭通Zhaotong0870",name:"昭通",pinyin:"zhaotong",zip:"0870"},{label:"镇江Zhenjiang0511",name:"镇江",pinyin:"zhenjiang",zip:"0511"},{label:"中卫Zhongwei0955",name:"中卫",pinyin:"zhongwei",zip:"0955"},{label:"周口Zhoukou0394",name:"周口",pinyin:"zhoukou",zip:"0394"},{label:"舟山Zhoushan0580",name:"舟山",pinyin:"zhoushan",zip:"0580"},{label:"驻马店Zhumadian0396",name:"驻马店",pinyin:"zhumadian",zip:"0396"},{label:"株洲Zhuzhou0731",name:"株洲",pinyin:"zhuzhou",zip:"0731"},{label:"淄博Zibo0533",name:"淄博",pinyin:"zibo",zip:"0533"},{label:"自贡Zigong0813",name:"自贡",pinyin:"zigong",zip:"0813"},{label:"资阳Ziyang028",name:"资阳",pinyin:"ziyang",zip:"028"},{label:"遵义Zunyi0852",name:"遵义",pinyin:"zunyi",zip:"0852"},{label:"赞皇Zanhuang0311",name:"赞皇",pinyin:"zanhuang",zip:"0311"},{label:"增城Zengcheng020",name:"增城",pinyin:"zengcheng",zip:"020"},{label:"张家港Zhangjiagang0512",name:"张家港",pinyin:"zhangjiagang",zip:"0512"},{label:"漳平Zhangping0597",name:"漳平",pinyin:"zhangping",zip:"0597"},{label:"漳浦Zhangpu0596",name:"漳浦",pinyin:"zhangpu",zip:"0596"},{label:"章丘Zhangqiu0531",name:"章丘",pinyin:"zhangqiu",zip:"0531"},{label:"樟树Zhangshu0795",name:"樟树",pinyin:"zhangshu",zip:"0795"},{label:"沾化Zhanhua0543",name:"沾化",pinyin:"zhanhua",zip:"0543"},{label:"赵县Zhaoxian0311",name:"赵县",pinyin:"zhaoxian",zip:"0311"},{label:"招远Zhaoyuan0535",name:"招远",pinyin:"zhaoyuan",zip:"0535"},{label:"正定Zhengding0311",name:"正定",pinyin:"zhengding",zip:"0311"},{label:"政和Zhenghe0599",name:"政和",pinyin:"zhenghe",zip:"0599"},{label:"柘荣Zherong0593",name:"柘荣",pinyin:"zherong",zip:"0593"},{label:"中牟Zhongmou0371",name:"中牟",pinyin:"zhongmou",zip:"0371"},{label:"忠县Zhongxian023",name:"忠县",pinyin:"zhongxian",zip:"023"},{label:"周宁Zhouning0593",name:"周宁",pinyin:"zhouning",zip:"0593"},{label:"周至Zhouzhi029",name:"周至",pinyin:"zhouzhi",zip:"029"},{label:"庄河Zhuanghe0411",name:"庄河",pinyin:"zhuanghe",zip:"0411"},{label:"诸城Zhucheng0536",name:"诸城",pinyin:"zhucheng",zip:"0536"},{label:"诸暨Zhuji0575",name:"诸暨",pinyin:"zhuji",zip:"0575"},{label:"紫金Zijin0762",name:"紫金",pinyin:"zijin",zip:"0762"},{label:"资溪Zixi0794",name:"资溪",pinyin:"zixi",zip:"0794"},{label:"邹城Zoucheng0537",name:"邹城",pinyin:"zoucheng",zip:"0537"},{label:"邹平Zouping0543",name:"邹平",pinyin:"zouping",zip:"0543"},{label:"遵化Zunhua0315",name:"遵化",pinyin:"zunhua",zip:"0315"}]}],currentCity:"正在定位...",scrollTop:0,showSearch:!1,searchResult:[]}},onLoad:function(i){var a=this;n.getLocation({type:"wgs84",success:function(i){"getLocation:ok"==i.errMsg&&n.request({url:"http://api.map.baidu.com/geocoder?output=json&location=".concat(i.latitude,",%20").concat(i.longitude,"&key=37492c0ee6f924cb5e934fa08c6b1676"),success:function(n){a.currentCity=n.data.result.addressComponent.city}})}})},computed:u({},(0,l.mapState)(["modifyAddress"])),methods:u({},(0,l.mapMutations)(["setModifyAddress"]),{selectCity:function(i){this.$store.commit("setModifyAddress",{id:this.modifyAddress.id,addr:this.modifyAddress.addr,city:i}),n.navigateBack()},gotoCategory:function(i,a){var e=this;"#"==i&&(e.scrollTop=0);var l=n.createSelectorQuery().in(this);l.select("#"+i).fields({rect:!0,size:!0,scrollOffset:!0},function(l){e.scrollTop=e.scrollTop+l.top-45-n.getSystemInfoSync().statusBarHeight,e.$nextTick(function(){a||e.gotoCategory(i,!0)})}).exec()},search:function(n){if(n.detail.value&&n.detail.value.length>0){this.showSearch=!0,this.searchResult=[];for(var i=0;i<this.cities.length;i++){var a;(a=this.searchResult).push.apply(a,p(this.cities[i].cities.filter(function(i){return i.pinyin.startsWith(n.detail.value)})))}console.log(e(this.searchResult.length," at components\\CitySelect.vue:4950"))}else this.showSearch=!1}})};i.default=b}).call(this,a("6e42")["default"],a("0de9")["default"])},"3c22":function(n,i,a){},5800:function(n,i,a){"use strict";var e=function(){var n=this,i=n.$createElement,a=(n._self._c,n.__map(n.cities,function(i,a){var e=i.group.toUpperCase();return{$orig:n.__get_orig(i),g0:e}})),e=n.__map(n.cities,function(i,a){var e=i.group.toUpperCase();return{$orig:n.__get_orig(i),g1:e}});n.$mp.data=Object.assign({},{$root:{l0:a,l1:e}})},l=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return l})},"8e7a":function(n,i,a){"use strict";(function(n){a("b52e"),a("921b");e(a("66fd"));var i=e(a("98af"));function e(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,a("6e42")["createPage"])},"98af":function(n,i,a){"use strict";a.r(i);var e=a("5800"),l=a("b1ab");for(var p in l)"default"!==p&&function(n){a.d(i,n,function(){return l[n]})}(p);a("1884");var g=a("2877"),y=Object(g["a"])(l["default"],e["a"],e["b"],!1,null,null,null);i["default"]=y.exports},b1ab:function(n,i,a){"use strict";a.r(i);var e=a("3990"),l=a.n(e);for(var p in e)"default"!==p&&function(n){a.d(i,n,function(){return e[n]})}(p);i["default"]=l.a}},[["8e7a","common/runtime","common/vendor"]]]);
});
require('components/CitySelect.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

