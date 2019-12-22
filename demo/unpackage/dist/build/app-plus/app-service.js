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
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/CitySelect.wxml','./pages/address/addressList.wxml','./pages/address/managerAddress.wxml','./pages/address/modifyAddress.wxml','./pages/device/device.wxml','./pages/index/index.wxml','./pages/login/clause.wxml','./pages/login/login.wxml','./pages/login/phoneLogin.wxml','./pages/my/my.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
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
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/login/login","pages/login/phoneLogin","pages/login/clause","pages/device/device","pages/my/my","pages/address/addressList","pages/address/managerAddress","pages/address/modifyAddress","components/CitySelect"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#b1b1b1","selectedColor":"#1296db","list":[{"pagePath":"pages/index/index","iconPath":"static/images/home.png","selectedIconPath":"static/images/homeactive.png","text":"首页"},{"pagePath":"pages/device/device","iconPath":"static/images/device.png","selectedIconPath":"static/images/deviceactive.png","text":"设备"},{"pagePath":"pages/my/my","iconPath":"static/images/my.png","selectedIconPath":"static/images/myactive.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"demo","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/CitySelect.json']={"usingComponents":{}};
__wxAppCode__['components/CitySelect.wxml']=$gwx('./components/CitySelect.wxml');

__wxAppCode__['pages/address/addressList.json']={"usingComponents":{}};
__wxAppCode__['pages/address/addressList.wxml']=$gwx('./pages/address/addressList.wxml');

__wxAppCode__['pages/address/managerAddress.json']={"usingComponents":{}};
__wxAppCode__['pages/address/managerAddress.wxml']=$gwx('./pages/address/managerAddress.wxml');

__wxAppCode__['pages/address/modifyAddress.json']={"usingComponents":{}};
__wxAppCode__['pages/address/modifyAddress.wxml']=$gwx('./pages/address/modifyAddress.wxml');

__wxAppCode__['pages/device/device.json']={"usingComponents":{}};
__wxAppCode__['pages/device/device.wxml']=$gwx('./pages/device/device.wxml');

__wxAppCode__['pages/index/index.json']={"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/login/clause.json']={"usingComponents":{}};
__wxAppCode__['pages/login/clause.wxml']=$gwx('./pages/login/clause.wxml');

__wxAppCode__['pages/login/login.json']={"usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/login/phoneLogin.json']={"usingComponents":{}};
__wxAppCode__['pages/login/phoneLogin.wxml']=$gwx('./pages/login/phoneLogin.wxml');

__wxAppCode__['pages/my/my.json']={"usingComponents":{}};
__wxAppCode__['pages/my/my.wxml']=$gwx('./pages/my/my.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"2dab":function(e,n,t){"use strict";t.r(n);var o=t("f4f8");for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);t("356a");var a,r,c=t("2877"),f=Object(c["a"])(o["default"],a,r,!1,null,null,null);n["default"]=f.exports},"356a":function(e,n,t){"use strict";var o=t("bdba"),u=t.n(o);u.a},"539b":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log(e("App Launch"," at App.vue:4"))},onShow:function(){console.log(e("App Show"," at App.vue:7"))},onHide:function(){console.log(e("App Hide"," at App.vue:10"))}};n.default=t}).call(this,t("0de9")["default"])},"9ea8":function(e,n,t){"use strict";(function(e){t("b52e"),t("921b");var n=a(t("66fd")),o=a(t("2dab")),u=a(t("d595"));function a(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){c(e,n,t[n])})}return e}function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t("293f"),t("2de7"),n.default.config.productionTip=!1,o.default.mpType="app",n.default.prototype.$store=u.default;var f=new n.default(r({},o.default));e(f).$mount()}).call(this,t("6e42")["createApp"])},bdba:function(e,n,t){},f4f8:function(e,n,t){"use strict";t.r(n);var o=t("539b"),u=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=u.a}},[["9ea8","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function r(r) {
    for (var n, l, i = r[0], a = r[1], f = r[2], p = 0, s = []; p < i.length; p++) {
      l = i[p], o[l] && s.push(o[l][0]), o[l] = 0;
    }

    for (n in a) {
      Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }

    c && c(r);

    while (s.length) {
      s.shift()();
    }

    return u.push.apply(u, f || []), t();
  }

  function t() {
    for (var e, r = 0; r < u.length; r++) {
      for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
        var a = t[i];
        0 !== o[a] && (n = !1);
      }

      n && (u.splice(r--, 1), e = l(l.s = t[0]));
    }

    return e;
  }

  var n = {},
      o = {
    "common/runtime": 0
  },
      u = [];

  function l(r) {
    if (n[r]) return n[r].exports;
    var t = n[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return e[r].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
  }

  l.m = e, l.c = n, l.d = function (e, r, t) {
    l.o(e, r) || Object.defineProperty(e, r, {
      enumerable: !0,
      get: t
    });
  }, l.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, l.t = function (e, r) {
    if (1 & r && (e = l(e)), 8 & r) return e;
    if (4 & r && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (l.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & r && "string" != typeof e) for (var n in e) {
      l.d(t, n, function (r) {
        return e[r];
      }.bind(null, n));
    }
    return t;
  }, l.n = function (e) {
    var r = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return l.d(r, "a", r), r;
  }, l.o = function (e, r) {
    return Object.prototype.hasOwnProperty.call(e, r);
  }, l.p = "/";
  var i = global["webpackJsonp"] = global["webpackJsonp"] || [],
      a = i.push.bind(i);
  i.push = r, i = i.slice();

  for (var f = 0; f < i.length; f++) {
    r(i[f]);
  }

  var c = a;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(o){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),i="";if(o.length>1){var a=o.pop();i=o.join("---COMMA---"),0===a.indexOf(" at ")?i+=a:i+="---COMMA---"+a}else i=o[0];return i}Object.defineProperty(e,"__esModule",{value:!0}),e.default=o},2877:function(t,e,n){"use strict";function r(t,e,n,r,o,i,a,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=u):o&&(u=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"293f":function(t,e,n){},"2de7":function(t,e,n){},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return x}),n.d(e,"mapState",function(){return E}),n.d(e,"mapMutations",function(){return D}),n.d(e,"mapGetters",function(){return P}),n.d(e,"mapActions",function(){return C}),n.d(e,"createNamespacedHelpers",function(){return T});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:r});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[r].concat(t.init):r,n.call(this,t)}}function r(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}function a(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function u(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},f={namespaced:{configurable:!0}};f.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){a(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&a(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&a(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&a(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,f);var p=function(t){this.register([],t,!1)};function l(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;l(t.concat(r),e.getChild(r),n.modules[r])}}p.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},p.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},p.prototype.update=function(t){l([],this.root,t)},p.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new c(e,n);if(0===t.length)this.root=o;else{var i=this.get(t.slice(0,-1));i.addChild(t[t.length-1],o)}e.modules&&a(e.modules,function(e,o){r.register(t.concat(o),e,n)})},p.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var h;var d=function(t){var e=this;void 0===t&&(t={}),!h&&"undefined"!==typeof window&&window.Vue&&x(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var o=t.state;void 0===o&&(o={}),"function"===typeof o&&(o=o()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new p(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new h;var a=this,s=this,u=s.dispatch,c=s.commit;this.dispatch=function(t,e){return u.call(a,t,e)},this.commit=function(t,e,n){return c.call(a,t,e,n)},this.strict=r,m(this,o,[],this._modules.root),g(this,o),n.forEach(function(t){return t(e)}),h.config.devtools&&i(this)},v={state:{configurable:!0}};function y(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function _(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),g(t,n,e)}function g(t,e,n){var r=t._vm;t.getters={};var o=t._wrappedGetters,i={};a(o,function(e,n){i[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=h.config.silent;h.config.silent=!0,t._vm=new h({data:{$$state:e},computed:i}),h.config.silent=s,t.strict&&S(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),h.nextTick(function(){return r.$destroy()}))}function m(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=k(e,n.slice(0,-1)),u=n[n.length-1];t._withCommit(function(){h.set(s,u,r.state)})}var c=r.context=b(t,a,n);r.forEachMutation(function(e,n){var r=a+n;w(t,r,e,c)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;O(t,r,o,c)}),r.forEachGetter(function(e,n){var r=a+n;A(t,r,e,c)}),r.forEachChild(function(r,i){m(t,e,n.concat(i),r,o)})}function b(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,u=i.type;return s&&s.root||(u=e+u),t.dispatch(u,a)},commit:r?t.commit:function(n,r,o){var i=j(n,r,o),a=i.payload,s=i.options,u=i.type;s&&s.root||(u=e+u),t.commit(u,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return $(t,e)}},state:{get:function(){return k(t.state,n)}}}),o}function $(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}function w(t,e,n,r){var o=t._mutations[e]||(t._mutations[e]=[]);o.push(function(e){n.call(t,r.state,e)})}function O(t,e,n,r){var o=t._actions[e]||(t._actions[e]=[]);o.push(function(e,o){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return u(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):i})}function A(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function S(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function k(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function j(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function x(t){h&&t===h||(h=t,r(h))}v.state.get=function(){return this._vm._data.$$state},v.state.set=function(t){0},d.prototype.commit=function(t,e,n){var r=this,o=j(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),u=this._mutations[i];u&&(this._withCommit(function(){u.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},d.prototype.dispatch=function(t,e){var n=this,r=j(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},d.prototype.subscribe=function(t){return y(t,this._subscribers)},d.prototype.subscribeAction=function(t){return y(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),g(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=k(e.state,t.slice(0,-1));h.delete(n,t[t.length-1])}),_(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),_(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,v);var E=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=M(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),D=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=M(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),P=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||M(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),C=N(function(t,e){var n={};return I(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=M(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"===typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),T=function(t){return{mapState:E.bind(null,t),mapGetters:P.bind(null,t),mapMutations:D.bind(null,t),mapActions:C.bind(null,t)}};function I(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function N(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function M(t,e,n){var r=t._modulesNamespaceMap[n];return r}var R={Store:d,install:x,version:"3.0.1",mapState:E,mapMutations:D,mapGetters:P,mapActions:C,createNamespacedHelpers:T};e["default"]=R},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function o(t){return void 0!==t&&null!==t}function i(t){return!0===t}function a(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function p(t){return"[object RegExp]"===c.call(t)}function l(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function h(t){return o(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function y(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}y("slot,component",!0);var _=y("key,ref,slot,slot-scope,is");function g(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function b(t,e){return m.call(t,e)}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=$(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),S=/\B([A-Z])/g,k=$(function(t){return t.replace(S,"-$1").toLowerCase()});function j(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){return t.bind(e)}var E=Function.prototype.bind?x:j;function D(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function P(t,e){for(var n in e)t[n]=e[n];return t}function C(t){for(var e={},n=0;n<t.length;n++)t[n]&&P(e,t[n]);return e}function T(t,e,n){}var I=function(t,e,n){return!1},N=function(t){return t};function M(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),i=Array.isArray(e);if(o&&i)return t.length===e.length&&t.every(function(t,n){return M(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(o||i)return!1;var a=Object.keys(t),s=Object.keys(e);return a.length===s.length&&a.every(function(n){return M(t[n],e[n])})}catch(c){return!1}}function R(t,e){for(var n=0;n<t.length;n++)if(M(t[n],e))return n;return-1}function V(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var B=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],q={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:I,isReservedAttr:I,isUnknownElement:I,getTagNamespace:T,parsePlatformTagName:N,mustUseProp:I,async:!0,_lifecycleHooks:U},L=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function F(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var z=new RegExp("[^"+L.source+".$_\\d]");function G(t){if(!z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var J,W="__proto__"in{},K="undefined"!==typeof window,X="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=X&&WXEnvironment.platform.toLowerCase(),Z=K&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),nt=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(K)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(eo){}var ot=function(){return void 0===J&&(J=!K&&!X&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),J},it=K&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function at(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&at(Symbol)&&"undefined"!==typeof Reflect&&at(Reflect.ownKeys);st="undefined"!==typeof Set&&at(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=T,ft=0,pt=function(){this.id=ft++,this.subs=[]};function lt(t){pt.SharedObject.targetStack.push(t),pt.SharedObject.target=t}function ht(){pt.SharedObject.targetStack.pop(),pt.SharedObject.target=pt.SharedObject.targetStack[pt.SharedObject.targetStack.length-1]}pt.prototype.addSub=function(t){this.subs.push(t)},pt.prototype.removeSub=function(t){g(this.subs,t)},pt.prototype.depend=function(){pt.SharedObject.target&&pt.SharedObject.target.addDep(this)},pt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},pt.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},pt.SharedObject.target=null,pt.SharedObject.targetStack=[];var dt=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},vt={child:{configurable:!0}};vt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,vt);var yt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function _t(t){return new dt(void 0,void 0,void 0,String(t))}function gt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,bt=Object.create(mt),$t=["push","pop","shift","unshift","splice","sort","reverse"];$t.forEach(function(t){var e=mt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2);break}return o&&a.observeArray(o),a.dep.notify(),i})});var wt=Object.getOwnPropertyNames(bt),Ot=!0;function At(t){Ot=t}var St=function(t){this.value=t,this.dep=new pt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(W?t.push!==t.__proto__.push?jt(t,bt,wt):kt(t,bt):jt(t,bt,wt),this.observeArray(t)):this.walk(t)};function kt(t,e){t.__proto__=e}function jt(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];H(t,i,e[i])}}function xt(t,e){var n;if(u(t)&&!(t instanceof dt))return b(t,"__ob__")&&t.__ob__ instanceof St?n=t.__ob__:Ot&&!ot()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new St(t)),e&&n&&n.vmCount++,n}function Et(t,e,n,r,o){var i=new pt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,u=a&&a.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!o&&xt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return pt.SharedObject.target&&(i.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!o&&xt(e),i.notify())}})}}function Dt(t,e,n){if(Array.isArray(t)&&l(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Et(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Pt(t,e){if(Array.isArray(t)&&l(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||b(t,e)&&(delete t[e],n&&n.dep.notify())}}function Ct(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}St.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Et(t,e[n])},St.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)xt(t[e])};var Tt=q.optionMergeStrategies;function It(t,e){if(!e)return t;for(var n,r,o,i=ut?Reflect.ownKeys(e):Object.keys(e),a=0;a<i.length;a++)n=i[a],"__ob__"!==n&&(r=t[n],o=e[n],b(t,n)?r!==o&&f(r)&&f(o)&&It(r,o):Dt(t,n,o));return t}function Nt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,o="function"===typeof t?t.call(n,n):t;return r?It(r,o):o}:e?t?function(){return It("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Vt(t,e,n,r){var o=Object.create(t||null);return e?P(o,e):o}Tt.data=function(t,e,n){return n?Nt(t,e,n):e&&"function"!==typeof e?t:Nt(t,e)},U.forEach(function(t){Tt[t]=Mt}),B.forEach(function(t){Tt[t+"s"]=Vt}),Tt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var o={};for(var i in P(o,t),e){var a=o[i],s=e[i];a&&!Array.isArray(a)&&(a=[a]),o[i]=a?a.concat(s):Array.isArray(s)?s:[s]}return o},Tt.props=Tt.methods=Tt.inject=Tt.computed=function(t,e,n,r){if(!t)return e;var o=Object.create(null);return P(o,t),e&&P(o,e),o},Tt.provide=Nt;var Bt=function(t,e){return void 0===e?t:e};function Ut(t,e){var n=t.props;if(n){var r,o,i,a={};if(Array.isArray(n)){r=n.length;while(r--)o=n[r],"string"===typeof o&&(i=O(o),a[i]={type:null})}else if(f(n))for(var s in n)o=n[s],i=O(s),a[i]=f(o)?o:{type:o};else 0;t.props=a}}function qt(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var o=0;o<n.length;o++)r[n[o]]={from:n[o]};else if(f(n))for(var i in n){var a=n[i];r[i]=f(a)?P({from:i},a):{from:a}}else 0}}function Lt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ft(t,e,n){if("function"===typeof e&&(e=e.options),Ut(e,n),qt(e,n),Lt(e),!e._base&&(e.extends&&(t=Ft(t,e.extends,n)),e.mixins))for(var r=0,o=e.mixins.length;r<o;r++)t=Ft(t,e.mixins[r],n);var i,a={};for(i in t)s(i);for(i in e)b(t,i)||s(i);function s(r){var o=Tt[r]||Bt;a[r]=o(t[r],e[r],n,r)}return a}function Ht(t,e,n,r){if("string"===typeof n){var o=t[e];if(b(o,n))return o[n];var i=O(n);if(b(o,i))return o[i];var a=A(i);if(b(o,a))return o[a];var s=o[n]||o[i]||o[a];return s}}function zt(t,e,n,r){var o=e[t],i=!b(n,t),a=n[t],s=Kt(Boolean,o.type);if(s>-1)if(i&&!b(o,"default"))a=!1;else if(""===a||a===k(t)){var u=Kt(String,o.type);(u<0||s<u)&&(a=!0)}if(void 0===a){a=Gt(r,o,t);var c=Ot;At(!0),xt(a),At(c)}return a}function Gt(t,e,n){if(b(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Wt(t,e){return Jt(t)===Jt(e)}function Kt(t,e){if(!Array.isArray(e))return Wt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Wt(e[n],t))return n;return-1}function Xt(t,e,n){lt();try{if(e){var r=e;while(r=r.$parent){var o=r.$options.errorCaptured;if(o)for(var i=0;i<o.length;i++)try{var a=!1===o[i].call(r,t,e,n);if(a)return}catch(eo){Zt(eo,r,"errorCaptured hook")}}}Zt(t,e,n)}finally{ht()}}function Yt(t,e,n,r,o){var i;try{i=n?t.apply(e,n):t.call(e),i&&!i._isVue&&h(i)&&!i._handled&&(i.catch(function(t){return Xt(t,r,o+" (Promise/async)")}),i._handled=!0)}catch(eo){Xt(eo,r,o)}return i}function Zt(t,e,n){if(q.errorHandler)try{return q.errorHandler.call(null,t,e,n)}catch(eo){eo!==t&&Qt(eo,null,"config.errorHandler")}Qt(t,e,n)}function Qt(t,e,n){if(!K&&!X||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function re(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&at(Promise)){var oe=Promise.resolve();te=function(){oe.then(re),et&&setTimeout(T)}}else if(Q||"undefined"===typeof MutationObserver||!at(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&at(setImmediate)?function(){setImmediate(re)}:function(){setTimeout(re,0)};else{var ie=1,ae=new MutationObserver(re),se=document.createTextNode(String(ie));ae.observe(se,{characterData:!0}),te=function(){ie=(ie+1)%2,se.data=String(ie)}}function ue(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(eo){Xt(eo,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function fe(t){pe(t,ce),ce.clear()}function pe(t,e){var n,r,o=Array.isArray(t);if(!(!o&&!u(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var i=t.__ob__.dep.id;if(e.has(i))return;e.add(i)}if(o){n=t.length;while(n--)pe(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)pe(t[r[n]],e)}}}var le=$(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function he(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Yt(r,null,arguments,e,"v-on handler");for(var o=r.slice(),i=0;i<o.length;i++)Yt(o[i],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,o,a,s){var u,c,f,p;for(u in t)c=t[u],f=e[u],p=le(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=he(c,s)),i(p.once)&&(c=t[u]=a(p.name,c,p.capture)),n(p.name,c,p.capture,p.passive,p.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(p=le(u),o(p.name,e[u],p.capture))}function ve(t,e,n){var i=e.options.props;if(!r(i)){var a={},s=t.attrs,u=t.props;if(o(s)||o(u))for(var c in i){var f=k(c);ye(a,u,c,f,!0)||ye(a,s,c,f,!1)}return a}}function ye(t,e,n,r,i){if(o(e)){if(b(e,n))return t[n]=e[n],i||delete e[n],!0;if(b(e,r))return t[n]=e[r],i||delete e[r],!0}return!1}function _e(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function ge(t){return s(t)?[_t(t)]:Array.isArray(t)?be(t):void 0}function me(t){return o(t)&&o(t.text)&&a(t.isComment)}function be(t,e){var n,a,u,c,f=[];for(n=0;n<t.length;n++)a=t[n],r(a)||"boolean"===typeof a||(u=f.length-1,c=f[u],Array.isArray(a)?a.length>0&&(a=be(a,(e||"")+"_"+n),me(a[0])&&me(c)&&(f[u]=_t(c.text+a[0].text),a.shift()),f.push.apply(f,a)):s(a)?me(c)?f[u]=_t(c.text+a):""!==a&&f.push(_t(a)):me(a)&&me(c)?f[u]=_t(c.text+a.text):(i(t._isVList)&&o(a.tag)&&r(a.key)&&o(e)&&(a.key="__vlist"+e+"_"+n+"__"),f.push(a)));return f}function $e(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Oe(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(n){Et(t,n,e[n])}),At(!0))}function Oe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){var i=r[o];if("__ob__"!==i){var a=t[i].from,s=e;while(s){if(s._provided&&b(s._provided,a)){n[i]=s._provided[a];break}s=s.$parent}if(!s)if("default"in t[i]){var u=t[i].default;n[i]="function"===typeof u?u.call(e):u}else 0}}return n}}function Ae(t,e){if(!t||!t.length)return{};for(var n={},r=0,o=t.length;r<o;r++){var i=t[r],a=i.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,i.context!==e&&i.fnContext!==e||!a||null==a.slot)i.asyncMeta&&i.asyncMeta.data&&"page"===i.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(i):(n.default||(n.default=[])).push(i);else{var s=a.slot,u=n[s]||(n[s]=[]);"template"===i.tag?u.push.apply(u,i.children||[]):u.push(i)}}for(var c in n)n[c].every(Se)&&delete n[c];return n}function Se(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,r){var o,i=Object.keys(e).length>0,a=t?!!t.$stable:!i,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==n&&s===r.$key&&!i&&!r.$hasNormal)return r;for(var u in o={},t)t[u]&&"$"!==u[0]&&(o[u]=je(e,u,t[u]))}else o={};for(var c in e)c in o||(o[c]=xe(e,c));return t&&Object.isExtensible(t)&&(t._normalized=o),H(o,"$stable",a),H(o,"$key",s),H(o,"$hasNormal",i),o}function je(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:ge(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function xe(t,e){return function(){return t[e]}}function Ee(t,e){var n,r,i,a,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(a=Object.keys(t),n=new Array(a.length),r=0,i=a.length;r<i;r++)s=a[r],n[r]=e(t[s],s,r);return o(n)||(n=[]),n._isVList=!0,n}function De(t,e,n,r){var o,i=this.$scopedSlots[t];i?(n=n||{},r&&(n=P(P({},r),n)),o=i(n)||e):o=this.$slots[t]||e;var a=n&&n.slot;return a?this.$createElement("template",{slot:a},o):o}function Pe(t){return Ht(this.$options,"filters",t,!0)||N}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Te(t,e,n,r,o){var i=q.keyCodes[e]||n;return o&&r&&!q.keyCodes[e]?Ce(o,r):i?Ce(i,t):r?k(r)!==e:void 0}function Ie(t,e,n,r,o){if(n)if(u(n)){var i;Array.isArray(n)&&(n=C(n));var a=function(a){if("class"===a||"style"===a||_(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||q.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=O(a),c=k(a);if(!(u in i)&&!(c in i)&&(i[a]=n[a],o)){var f=t.on||(t.on={});f["update:"+a]=function(t){n[a]=t}}};for(var s in n)a(s)}else;return t}function Ne(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Me(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ve(t[r],e+"_"+r,n);else Ve(t,e,n)}function Ve(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(f(e)){var n=t.on=t.on?P({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(o,i):i}}else;return t}function Ue(t,e,n,r){e=e||{$stable:!n};for(var o=0;o<t.length;o++){var i=t[o];Array.isArray(i)?Ue(i,e,n):i&&(i.proxy&&(i.fn.proxy=!0),e[i.key]=i.fn)}return r&&(e.$key=r),e}function qe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Le(t,e){return"string"===typeof t?e+t:t}function Fe(t){t._o=Me,t._n=v,t._s=d,t._l=Ee,t._t=De,t._q=M,t._i=R,t._m=Ne,t._f=Pe,t._k=Te,t._b=Ie,t._v=_t,t._e=yt,t._u=Ue,t._g=Be,t._d=qe,t._p=Le}function He(t,e,r,o,a){var s,u=this,c=a.options;b(o,"_uid")?(s=Object.create(o),s._original=o):(s=o,o=o._original);var f=i(c._compiled),p=!f;this.data=t,this.props=e,this.children=r,this.parent=o,this.listeners=t.on||n,this.injections=Oe(c.inject,o),this.slots=function(){return u.$slots||ke(t.scopedSlots,u.$slots=Ae(r,o)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var i=rn(s,t,e,n,r,p);return i&&!Array.isArray(i)&&(i.fnScopeId=c._scopeId,i.fnContext=o),i}:this._c=function(t,e,n,r){return rn(s,t,e,n,r,p)}}function ze(t,e,r,i,a){var s=t.options,u={},c=s.props;if(o(c))for(var f in c)u[f]=zt(f,c,e||n);else o(r.attrs)&&Je(u,r.attrs),o(r.props)&&Je(u,r.props);var p=new He(r,u,a,i,t),l=s.render.call(null,p._c,p);if(l instanceof dt)return Ge(l,r,p.parent,s,p);if(Array.isArray(l)){for(var h=ge(l)||[],d=new Array(h.length),v=0;v<h.length;v++)d[v]=Ge(h[v],r,p.parent,s,p);return d}}function Ge(t,e,n,r,o){var i=gt(t);return i.fnContext=n,i.fnOptions=r,e.slot&&((i.data||(i.data={})).slot=e.slot),i}function Je(t,e){for(var n in e)t[O(n)]=e[n]}Fe(He.prototype);var We={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;We.prepatch(n,n)}else{var r=t.componentInstance=Ye(t,On);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;jn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Pn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Fn(n):En(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Dn(e,!0):e.$destroy())}},Ke=Object.keys(We);function Xe(t,e,n,a,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=dn(f,c),void 0===t))return hn(f,e,n,a,s);e=e||{},lr(t),o(e.model)&&tn(t.options,e);var p=ve(e,t,s);if(i(t.options.functional))return ze(t,p,e,n,a);var l=e.on;if(e.on=e.nativeOn,i(t.options.abstract)){var h=e.slot;e={},h&&(e.slot=h)}Ze(e);var d=t.options.name||s,v=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:p,listeners:l,tag:s,children:a},f);return v}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return o(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var r=Ke[n],o=e[r],i=We[r];o===i||o&&o._merged||(e[r]=o?Qe(i,o):i)}}function Qe(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function tn(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var i=e.on||(e.on={}),a=i[r],s=e.model.callback;o(a)?(Array.isArray(a)?-1===a.indexOf(s):a!==s)&&(i[r]=[s].concat(a)):i[r]=s}var en=1,nn=2;function rn(t,e,n,r,o,a){return(Array.isArray(n)||s(n))&&(o=r,r=n,n=void 0),i(a)&&(o=nn),on(t,e,n,r,o)}function on(t,e,n,r,i){if(o(n)&&o(n.__ob__))return yt();if(o(n)&&o(n.is)&&(e=n.is),!e)return yt();var a,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),i===nn?r=ge(r):i===en&&(r=_e(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||q.getTagNamespace(e),a=q.isReservedTag(e)?new dt(q.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!o(u=Ht(t.$options,"components",e))?new dt(e,n,r,void 0,void 0,t):Xe(u,n,t,r,e)):a=Xe(e,n,t,r);return Array.isArray(a)?a:o(a)?(o(s)&&an(a,s),o(n)&&sn(n),a):yt()}function an(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),o(t.children))for(var a=0,s=t.children.length;a<s;a++){var u=t.children[a];o(u.tag)&&(r(u.ns)||i(n)&&"svg"!==u.tag)&&an(u,e,n)}}function sn(t){u(t.style)&&fe(t.style),u(t.class)&&fe(t.class)}function un(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,o=r&&r.context;t.$slots=Ae(e._renderChildren,o),t.$scopedSlots=n,t._c=function(e,n,r,o){return rn(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return rn(t,e,n,r,o,!0)};var i=r&&r.data;Et(t,"$attrs",i&&i.attrs||n,null,!0),Et(t,"$listeners",e._parentListeners||n,null,!0)}var cn,fn=null;function pn(t){Fe(t.prototype),t.prototype.$nextTick=function(t){return ue(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n._parentVnode;o&&(e.$scopedSlots=ke(o.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=o;try{fn=e,t=r.call(e._renderProxy,e.$createElement)}catch(eo){Xt(eo,e,"render"),t=e._vnode}finally{fn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=yt()),t.parent=o,t}}function ln(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function hn(t,e,n,r,o){var i=yt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}function dn(t,e){if(i(t.error)&&o(t.errorComp))return t.errorComp;if(o(t.resolved))return t.resolved;var n=fn;if(n&&o(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),i(t.loading)&&o(t.loadingComp))return t.loadingComp;if(n&&!o(t.owners)){var a=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return g(a,n)});var p=function(t){for(var e=0,n=a.length;e<n;e++)a[e].$forceUpdate();t&&(a.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},l=V(function(n){t.resolved=ln(n,e),s?a.length=0:p(!0)}),d=V(function(e){o(t.errorComp)&&(t.error=!0,p(!0))}),v=t(l,d);return u(v)&&(h(v)?r(t.resolved)&&v.then(l,d):h(v.component)&&(v.component.then(l,d),o(v.error)&&(t.errorComp=ln(v.error,e)),o(v.loading)&&(t.loadingComp=ln(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,p(!1))},v.delay||200)),o(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&d(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&(o(n.componentOptions)||vn(n)))return n}}function _n(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&$n(t,e)}function gn(t,e){cn.$on(t,e)}function mn(t,e){cn.$off(t,e)}function bn(t,e){var n=cn;return function r(){var o=e.apply(null,arguments);null!==o&&n.$off(t,r)}}function $n(t,e,n){cn=t,de(e,n||{},gn,mn,bn,t),cn=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var o=0,i=t.length;o<i;o++)r.$on(t[o],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)n.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(!e)return n._events[t]=null,n;var s=a.length;while(s--)if(i=a[s],i===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?D(n):n;for(var r=D(arguments,1),o='event handler for "'+t+'"',i=0,a=n.length;i<a;i++)Yt(n[i],e,r,e,o)}return e}}var On=null;function An(t){var e=On;return On=t,function(){On=e}}function Sn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,o=n._vnode,i=An(n);n._vnode=t,n.$el=o?n.__patch__(o,t):n.__patch__(n.$el,t,e,!1),i(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Pn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||g(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Pn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function jn(t,e,r,o,i){var a=o.data.scopedSlots,s=t.$scopedSlots,u=!!(a&&!a.$stable||s!==n&&!s.$stable||a&&t.$scopedSlots.$key!==a.$key),c=!!(i||t.$options._renderChildren||u);if(t.$options._parentVnode=o,t.$vnode=o,t._vnode&&(t._vnode.parent=o),t.$options._renderChildren=i,t.$attrs=o.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){At(!1);for(var f=t._props,p=t.$options._propKeys||[],l=0;l<p.length;l++){var h=p[l],d=t.$options.props;f[h]=zt(h,d,e,t)}At(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,$n(t,r,v),c&&(t.$slots=Ae(i,o.context),t.$forceUpdate())}function xn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function En(t,e){if(e){if(t._directInactive=!1,xn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)En(t.$children[n]);Pn(t,"activated")}}function Dn(t,e){if((!e||(t._directInactive=!0,!xn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Dn(t.$children[n]);Pn(t,"deactivated")}}function Pn(t,e){lt();var n=t.$options[e],r=e+" hook";if(n)for(var o=0,i=n.length;o<i;o++)Yt(n[o],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),ht()}var Cn=[],Tn=[],In={},Nn=!1,Mn=!1,Rn=0;function Vn(){Rn=Cn.length=Tn.length=0,In={},Nn=Mn=!1}var Bn=Date.now;if(K&&!Q){var Un=window.performance;Un&&"function"===typeof Un.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return Un.now()})}function qn(){var t,e;for(Bn(),Mn=!0,Cn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Cn.length;Rn++)t=Cn[Rn],t.before&&t.before(),e=t.id,In[e]=null,t.run();var n=Tn.slice(),r=Cn.slice();Vn(),Hn(n),Ln(r),it&&q.devtools&&it.emit("flush")}function Ln(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Pn(r,"updated")}}function Fn(t){t._inactive=!1,Tn.push(t)}function Hn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,En(t[e],!0)}function zn(t){var e=t.id;if(null==In[e]){if(In[e]=!0,Mn){var n=Cn.length-1;while(n>Rn&&Cn[n].id>t.id)n--;Cn.splice(n+1,0,t)}else Cn.push(t);Nn||(Nn=!0,ue(qn))}}var Gn=0,Jn=function(t,e,n,r,o){this.vm=t,o&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;lt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(eo){if(!this.user)throw eo;Xt(eo,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&fe(t),ht(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():zn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(eo){Xt(eo,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||g(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Wn={enumerable:!0,configurable:!0,get:T,set:T};function Kn(t,e,n){Wn.get=function(){return this[e][n]},Wn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Wn)}function Xn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&ir(t,e.methods),e.data?Zn(t):xt(t._data={},!0),e.computed&&er(t,e.computed),e.watch&&e.watch!==nt&&ar(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;i||At(!1);var a=function(i){o.push(i);var a=zt(i,e,n,t);Et(r,i,a),i in t||Kn(t,"_props",i)};for(var s in e)a(s);At(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?Qn(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);while(o--){var i=n[o];0,r&&b(r,i)||F(i)||Kn(t,"_data",i)}xt(e,!0)}function Qn(t,e){lt();try{return t.call(e,e)}catch(eo){return Xt(eo,e,"data()"),{}}finally{ht()}}var tr={lazy:!0};function er(t,e){var n=t._computedWatchers=Object.create(null),r=ot();for(var o in e){var i=e[o],a="function"===typeof i?i:i.get;0,r||(n[o]=new Jn(t,a||T,T,tr)),o in t||nr(t,o,i)}}function nr(t,e,n){var r=!ot();"function"===typeof n?(Wn.get=r?rr(e):or(n),Wn.set=T):(Wn.get=n.get?r&&!1!==n.cache?rr(e):or(n.get):T,Wn.set=n.set||T),Object.defineProperty(t,e,Wn)}function rr(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),pt.SharedObject.target&&e.depend(),e.value}}function or(t){return function(){return t.call(this,this)}}function ir(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?T:E(e[n],t)}function ar(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)sr(t,n,r[o]);else sr(t,n,r)}}function sr(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function ur(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Dt,t.prototype.$delete=Pt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return sr(r,t,e,n);n=n||{},n.user=!0;var o=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,o.value)}catch(i){Xt(i,r,'callback for immediate watcher "'+o.expression+'"')}return function(){o.teardown()}}}var cr=0;function fr(t){t.prototype._init=function(t){var e=this;e._uid=cr++,e._isVue=!0,t&&t._isComponent?pr(e,t):e.$options=Ft(lr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Sn(e),_n(e),un(e),Pn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Xn(e),"mp-toutiao"!==e.mpHost&&$e(e),"mp-toutiao"!==e.mpHost&&Pn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var o=r.componentOptions;n.propsData=o.propsData,n._parentListeners=o.listeners,n._renderChildren=o.children,n._componentTag=o.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function lr(t){var e=t.options;if(t.super){var n=lr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var o=hr(t);o&&P(t.extendOptions,o),e=t.options=Ft(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function hr(t){var e,n=t.options,r=t.sealedOptions;for(var o in n)n[o]!==r[o]&&(e||(e={}),e[o]=n[o]);return e}function dr(t){this._init(t)}function vr(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=D(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yr(t){t.mixin=function(t){return this.options=Ft(this.options,t),this}}function _r(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name;var a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=Ft(n.options,t),a["super"]=n,a.options.props&&gr(a),a.options.computed&&mr(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,B.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=P({},a.options),o[r]=a,a}}function gr(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function mr(t){var e=t.options.computed;for(var n in e)nr(t.prototype,n,e[n])}function br(t){B.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function $r(t){return t&&(t.Ctor.options.name||t.tag)}function wr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!p(t)&&t.test(e)}function Or(t,e){var n=t.cache,r=t.keys,o=t._vnode;for(var i in n){var a=n[i];if(a){var s=$r(a.componentOptions);s&&!e(s)&&Ar(n,i,r,o)}}}function Ar(t,e,n,r){var o=t[e];!o||r&&o.tag===r.tag||o.componentInstance.$destroy(),t[e]=null,g(n,e)}fr(dr),ur(dr),wn(dr),kn(dr),pn(dr);var Sr=[String,RegExp,Array],kr={name:"keep-alive",abstract:!0,props:{include:Sr,exclude:Sr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ar(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Or(t,function(t){return wr(e,t)})}),this.$watch("exclude",function(e){Or(t,function(t){return!wr(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var r=$r(n),o=this,i=o.include,a=o.exclude;if(i&&(!r||!wr(i,r))||a&&r&&wr(a,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,g(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Ar(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},jr={KeepAlive:kr};function xr(t){var e={get:function(){return q}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:P,mergeOptions:Ft,defineReactive:Et},t.set=Dt,t.delete=Pt,t.nextTick=ue,t.observable=function(t){return xt(t),t},t.options=Object.create(null),B.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,P(t.options.components,jr),vr(t),yr(t),_r(t),br(t)}xr(dr),Object.defineProperty(dr.prototype,"$isServer",{get:ot}),Object.defineProperty(dr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dr,"FunctionalRenderContext",{value:He}),dr.version="2.6.10";var Er="[object Array]",Dr="[object Object]";function Pr(t,e){var n={};return Cr(t,e),Tr(t,e,"",n),n}function Cr(t,e){if(t!==e){var n=Nr(t),r=Nr(e);if(n==Dr&&r==Dr){if(Object.keys(t).length>=Object.keys(e).length)for(var o in e){var i=t[o];void 0===i?t[o]=null:Cr(i,e[o])}}else n==Er&&r==Er&&t.length>=e.length&&e.forEach(function(e,n){Cr(t[n],e)})}}function Tr(t,e,n,r){if(t!==e){var o=Nr(t),i=Nr(e);if(o==Dr)if(i!=Dr||Object.keys(t).length<Object.keys(e).length)Ir(r,n,t);else{var a=function(o){var i=t[o],a=e[o],s=Nr(i),u=Nr(a);if(s!=Er&&s!=Dr)i!=e[o]&&Ir(r,(""==n?"":n+".")+o,i);else if(s==Er)u!=Er?Ir(r,(""==n?"":n+".")+o,i):i.length<a.length?Ir(r,(""==n?"":n+".")+o,i):i.forEach(function(t,e){Tr(t,a[e],(""==n?"":n+".")+o+"["+e+"]",r)});else if(s==Dr)if(u!=Dr||Object.keys(i).length<Object.keys(a).length)Ir(r,(""==n?"":n+".")+o,i);else for(var c in i)Tr(i[c],a[c],(""==n?"":n+".")+o+"."+c,r)};for(var s in t)a(s)}else o==Er?i!=Er?Ir(r,n,t):t.length<e.length?Ir(r,n,t):t.forEach(function(t,o){Tr(t,e[o],n+"["+o+"]",r)}):Ir(r,n,t)}}function Ir(t,e,n){t[e]=n}function Nr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Cn.find(function(e){return t._watcher===e})}function Vr(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ue(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var o;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(eo){Xt(eo,t,"nextTick")}else o&&o(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){o=t})}function Br(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Ur=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,o=Object.create(null);try{o=Br(this)}catch(s){console.error(s)}o.__webviewId__=r.data.__webviewId__;var i=Object.create(null);Object.keys(o).forEach(function(t){i[t]=r.data[t]});var a=Pr(o,i);Object.keys(a).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(a)),this.__next_tick_pending=!0,r.setData(a,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function qr(){}function Lr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=qr),t.$options.render||(t.$options.render=qr),"mp-toutiao"!==t.mpHost&&Pn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&Pn(t,"beforeUpdate")}},!0),n=!1,t}function Fr(t,e){return o(t)||o(e)?Hr(t,zr(e)):""}function Hr(t,e){return t?e?t+" "+e:t:e||""}function zr(t){return Array.isArray(t)?Gr(t):u(t)?Jr(t):"string"===typeof t?t:""}function Gr(t){for(var e,n="",r=0,i=t.length;r<i;r++)o(e=zr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Wr=$(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Kr(t){return Array.isArray(t)?C(t):"string"===typeof t?Wr(t):t}var Xr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Yr(t[r],n.slice(1).join("."))}function Zr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:D(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Vr(this,t)},Xr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=$e,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;lt();var r,o=n.$options[t],i=t+" hook";if(o)for(var a=0,s=o.length;a<s;a++)r=Yt(o[a],n,e?[e]:null,n,i);return n._hasHookEvent&&n.$emit("hook:"+t),ht(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yr(e||this,t)},t.prototype.__get_class=function(t,e){return Fr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Kr(t),r=e?P(e,n):n;return Object.keys(r).map(function(t){return k(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,o,i,a;if(Array.isArray(t)){for(n=new Array(t.length),r=0,o=t.length;r<o;r++)n[r]=e(t[r],r);return n}if(u(t)){for(i=Object.keys(t),n=Object.create(null),r=0,o=i.length;r<o;r++)a=i[r],n[a]=e(t[a],a,r);return n}return[]}}var Qr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function to(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==Qr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;Qr.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=Qr}dr.prototype.__patch__=Ur,dr.prototype.$mount=function(t,e){return Lr(this,t,e)},to(dr),Zr(dr),e["default"]=dr}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Oe,e.default=void 0;var r=o(n("66fd"));function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return u(t)||s(t,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done);r=!0)if(n.push(a.value),e&&n.length===e)break}catch(u){o=!0,i=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(o)throw i}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return h(t)||l(t)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function h(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function y(t){return"function"===typeof t}function _(t){return"string"===typeof t}function g(t){return"[object Object]"===d.call(t)}function m(t,e){return v.call(t,e)}function b(){}function $(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var w=/-(\w)/g,O=$(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],S={},k={};function j(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?x(n):n}function x(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function E(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function D(t,e){Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&(t[n]=j(t[n],e[n]))})}function P(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==A.indexOf(n)&&y(e[n])&&E(t[n],e[n])})}function C(t,e){"string"===typeof t&&g(e)?D(k[t]||(k[t]={}),e):g(t)&&D(S,t)}function T(t,e){"string"===typeof t?g(e)?P(k[t],e):delete k[t]:g(t)&&P(S,t)}function I(t){return function(e){return t(e)||e}}function N(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function M(t,e){for(var n=!1,r=0;r<t.length;r++){var o=t[r];if(n)n=Promise.then(I(o));else{var i=o(e);if(N(i)&&(n=Promise.resolve(i)),!1===i)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){M(t[n],e).then(function(t){return y(r)&&r(t)||t})}}}),e}function V(t,e){var n=[];Array.isArray(S.returnValue)&&n.push.apply(n,f(S.returnValue));var r=k[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function B(t){var e=Object.create(null);Object.keys(S).forEach(function(t){"returnValue"!==t&&(e[t]=S[t].slice())});var n=k[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,o=new Array(r>3?r-3:0),i=3;i<r;i++)o[i-3]=arguments[i];var a=B(t);if(a&&Object.keys(a).length){if(Array.isArray(a.invoke)){var s=M(a.invoke,n);return s.then(function(t){return e.apply(void 0,[R(a,t)].concat(o))})}return e.apply(void 0,[R(a,n)].concat(o))}return e.apply(void 0,[n].concat(o))}var q={returnValue:function(t){return N(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},L=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,F=/^create|Manager$/,H=/^on/;function z(t){return F.test(t)}function G(t){return L.test(t)}function J(t){return H.test(t)&&"onPush"!==t}function W(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function K(t){return!(z(t)||G(t)||J(t))}function X(t,e){return K(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return y(n.success)||y(n.fail)||y(n.complete)?V(t,U.apply(void 0,[t,e,n].concat(o))):V(t,W(new Promise(function(r,i){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:i})].concat(o)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,Q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Z*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Y),0===n?1!==et&&Q?.5:1:t<0?-n:n}var ot={promiseInterceptor:q},it=Object.freeze({upx2px:rt,interceptors:ot,addInterceptor:C,removeInterceptor:T}),at={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(lt(t,r,n))}}function pt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(g(e)){var i=!0===o?e:{};for(var a in y(n)&&(n=n(e,i)||{}),e)if(m(n,a)){var s=n[a];y(s)&&(s=s(e[a],e,i)),s?_(s)?i[s]=e[a]:g(s)&&(i[s.name?s.name:a]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(a))}else-1!==ct.indexOf(a)?i[a]=ft(t,e[a],r):o||(i[a]=e[a]);return i}return y(e)&&(e=ft(t,e,r)),e}function lt(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return y(at.returnValue)&&(e=at.returnValue(t,e)),pt(t,e,n,{},r)}function ht(t,e){if(m(at,t)){var n=at[t];return n?function(e,r){var o=n;y(n)&&(o=n(e)),e=pt(t,e,o.args,o.returnValue);var i=[e];"undefined"!==typeof r&&i.push(r);var a=wx[o.name||t].apply(wx,i);return G(t)?lt(t,a,o.returnValue,z(t)):a}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),vt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function yt(t){return function(e){var n=e.fail,r=e.complete,o={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};y(n)&&n(o),y(r)&&r(o)}}vt.forEach(function(t){dt[t]=yt(t)});var _t=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function gt(t,e,n){return t[e].apply(t,n)}function mt(){return gt(_t(),"$on",Array.prototype.slice.call(arguments))}function bt(){return gt(_t(),"$off",Array.prototype.slice.call(arguments))}function $t(){return gt(_t(),"$once",Array.prototype.slice.call(arguments))}function wt(){return gt(_t(),"$emit",Array.prototype.slice.call(arguments))}var Ot=Object.freeze({$on:mt,$off:bt,$once:$t,$emit:wt});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function St(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),o=t.show,i=t.hide,a=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return o.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a.apply(t,r)}}}function kt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&St(e),e}var jt=Object.freeze({getSubNVueById:kt,requireNativePlugin:At}),xt=Page,Et=Component,Dt=/:/g,Pt=$(function(t){return O(t.replace(Dt,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,o=new Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return e.apply(t,[Pt(n)].concat(o))}}}function Tt(t,e){var n=e[t];e[t]=n?function(){Ct(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),xt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),Et(t)};var It=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Nt(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Mt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,y(e))return!!y(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(y(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Mt(t,e)}):void 0}function Rt(t,e,n){e.forEach(function(e){Mt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Vt(t,e){var n;return e=e.default||e,y(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Bt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function qt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(o){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(o){}return g(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Lt=[String,Number,Boolean,Object,Array,null];function Ft(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],o=t["mixins"],i=t["props"];i||(t["props"]=i=[]);var a=[];return Array.isArray(n)&&n.forEach(function(t){a.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(i)?(i.push("name"),i.push("value")):(i["name"]={type:String,default:""},i["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),g(r)&&r.props&&a.push(e({properties:Gt(r.props,!0)})),Array.isArray(o)&&o.forEach(function(t){g(t)&&t.props&&a.push(e({properties:Gt(t.props,!0)}))}),a}function zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ft(t)}}):g(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(g(r)){var o=r["default"];y(o)&&(o=o()),r.type=zt(e,r.type),n[e]={type:-1!==Lt.indexOf(r.type)?r.type:null,value:o,observer:Ft(e)}}else{var i=zt(e,r);n[e]={type:-1!==Lt.indexOf(i)?i:null,observer:Ft(e)}}}),n}function Jt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=b,t.preventDefault=b,t.target=t.target||{},m(t,"detail")||(t.detail={}),g(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Wt(t,e){var n=t;return e.forEach(function(e){var r=e[0],o=e[2];if(r||"undefined"!==typeof o){var i=e[1],a=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=o:i?Array.isArray(s)?n=s.find(function(e){return t.__get_value(i,e)===o}):g(s)?n=Object.keys(s).find(function(e){return t.__get_value(i,s[e])===o}):console.error("v-for 暂不支持循环数据：",s):n=s[o],a&&(n=t.__get_value(a,n))}}),n}function Kt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,o){"string"===typeof e?e?"$event"===e?r["$"+o]=n:0===e.indexOf("$event.")?r["$"+o]=t.__get_value(e.replace("$event.",""),n):r["$"+o]=t.__get_value(e):r["$"+o]=t:r["$"+o]=Wt(t,e)}),r}function Xt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Yt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,a=!1;if(o&&(a=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return a?[e]:e.detail.__args__||e.detail;var s=Kt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==i||o?o&&!a?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Xt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Jt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var o=t.type,i=[];return r.forEach(function(n){var r=n[0],a=n[1],s=r.charAt(0)===Qt;r=s?r.slice(1):r;var u=r.charAt(0)===Zt;r=u?r.slice(1):r,a&&te(o,r)&&a.forEach(function(n){var r=n[0];if(r){var o=e.$vm;if(o.$options.generic&&o.$parent&&o.$parent.$parent&&(o=o.$parent.$parent),"$emit"===r)return void o.$emit.apply(o,Yt(e.$vm,t,n[1],n[2],s,r));var a=o[r];if(!y(a))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(a.once)return;a.once=!0}i.push(a.apply(o,Yt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===o&&1===i.length&&"undefined"!==typeof i[0]?i[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,o=e.initRefs;t.$options.store&&(r.default.prototype.$store=t.$options.store),r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(o(this),Nt(this,n)))}});var i={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};i.globalData=t.$options.globalData||{};var a=t.$options.methods;return a&&Object.keys(a).forEach(function(t){i[t]=a[t]}),Rt(i,ne),i}var oe=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ie(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var o=n.length-1;o>=0;o--)if(r=ie(n[o],e),r)return r}function ae(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,o=n.vueOptions;r&&(e=ie(this.$vm,r)),e||(e=this.$vm),o.parent=e}function pe(t){return re(t,{mocks:oe,initRefs:ce})}var le=["onUniNViewMessage"];function he(t){var e=pe(t);return Rt(e,le),e}function de(t){return App(he(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,o=e.initRelation,a=Vt(r.default,t),s=i(a,2),u=s[0],c=s[1],f={multipleSlots:!0,addGlobalClass:!0},p={options:f,data:qt(c,r.default.prototype),behaviors:Ht(c,ae),properties:Gt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),o.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Bt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){p.methods[t]=function(e){return this.$vm[t](e)}}),n?p:[p,u]}function ye(t){return ve(t,{isPage:se,initRelation:ue})}function _e(t){var e=ye(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ge=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=_e(t);return Rt(n.methods,ge,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function be(t){return me(t,{isPage:se,initRelation:ue})}ge.push.apply(ge,It);var $e=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=be(t);return Rt(e.methods,$e),e}function Oe(t){return Component(we(t))}function Ae(t){return Component(_e(t))}st.forEach(function(t){at[t]=!1}),ut.forEach(function(t){var e=at[t]&&at[t].name?at[t].name:t;wx.canIUse(e)||(at[t]=!1)});var Se={};Object.keys(it).forEach(function(t){Se[t]=it[t]}),Object.keys(Ot).forEach(function(t){Se[t]=Ot[t]}),Object.keys(jt).forEach(function(t){Se[t]=X(t,jt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(at,t))&&(Se[t]=X(t,ht(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Se,t.UniEmitter=Ot),wx.createApp=de,wx.createPage=Oe,wx.createComponent=Ae;var ke=Se,je=ke;e.default=je}).call(this,n("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function r(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?o(t):e}function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var p=e.version,l="https://tongji.dcloud.io/uni/stat",h="https://tongji.dcloud.io/uni/stat.gif",d=1800,v=300,y=10,_="__DC_STAT_UUID",g="__DC_UUID_VALUE";function m(){var e="";if("n"===O()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(_)}catch(n){e=g}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(_,e)}catch(n){t.setStorageSync(_,g)}}return e}var b=function(t){var e=Object.keys(t),n=e.sort(),r={},o="";for(var i in n)r[n[i]]=t[n[i]],o+=n[i]+"="+t[n[i]]+"&";return{sign:"",options:o.substr(0,o.length-1)}},$=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},O=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==O()&&"qq"!==O()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},S=function(){return"n"===O()?plus.runtime.version:""},k=function(){var t=O(),e="";return"n"===t&&(e=plus.runtime.channel),e},j=function(e){var n=O(),r="";return e||("wx"===n&&(r=t.getLaunchOptionsSync().scene),r)},x="First__Visit__Time",E="Last__Visit__Time",D=function(){var e=t.getStorageSync(x),n=0;return e?n=e:(n=w(),t.setStorageSync(x,n),t.removeStorageSync(E)),n},P=function(){var e=t.getStorageSync(E),n=0;return n=e||"",t.setStorageSync(E,w()),n},C="__page__residence__time",T=0,I=0,N=function(){return T=w(),"n"===O()&&t.setStorageSync(C,w()),T},M=function(){return I=w(),"n"===O()&&(T=t.getStorageSync(C)),I-T},R="Total__Visit__Count",V=function(){var e=t.getStorageSync(R),n=1;return e&&(n=e,n++),t.setStorageSync(R,n),n},B=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},U=0,q=0,L=function(){var t=(new Date).getTime();return U=t,q=0,t},F=function(){var t=(new Date).getTime();return q=t,t},H=function(t){var e=0;if(0!==U&&(e=q-U),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>v;return{residenceTime:e,overtime:n}}if("page"===t){var r=e>d;return{residenceTime:e,overtime:r}}return{residenceTime:e}},z=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===O()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},G=function(t){var e=getCurrentPages(),n=e[e.length-1],r=n.$vm,o=t._query,i=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===O()?r.$mp&&r.$mp.page.is+i:r.$scope&&r.$scope.route+i||r.$mp&&r.$mp.page.route+i},J=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},W=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},K=n("dfc8").default,X=n("b6f7").default||n("b6f7"),Y=t.getSystemInfoSync(),Z=function(){function e(){u(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:O(),mpn:A(),ak:X.appid,usv:p,v:S(),ch:k(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return f(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){F();var t=H("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,F();var n=H();L();var r=G(this);this._sendHideRequest({urlref:r,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=G(this),e=z();if(this._navigationBarTitle.config=K&&K.pages[e]&&K.pages[e].titleNView&&K.pages[e].titleNView.titleText||K&&K.pages[e]&&K.pages[e].navigationBarTitleText||"",this.__licationShow)return L(),this.__licationShow=!1,void(this._lastPageRoute=t);F(),this._lastPageRoute=t;var n=H("page");if(n.overtime){var r={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(r)}L()}},{key:"_pageHide",value:function(){if(!this.__licationHide){F();var t=H("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=j(t.scene),this.statData.fvts=D(),this.statData.lvts=P(),this.statData.tvc=V(),"n"===O()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,r=t.urlref_ts;this._navigationBarTitle.lt="11";var o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,r=t.urlref_ts,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:r,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,r=t.value,o=void 0===r?"":r,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:n,e_v:"object"===typeof o?JSON.stringify(o):o.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;X.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var r=this,o=w(),i=this._navigationBarTitle;e.ttn=i.page,e.ttpj=i.config,e.ttc=i.report;var a=this._reportingRequestData;if("n"===O()&&(a=t.getStorageSync("__UNI__STAT__DATA")||{}),a[e.lt]||(a[e.lt]=[]),a[e.lt].push(e),"n"===O()&&t.setStorageSync("__UNI__STAT__DATA",a),!(M()<y)||n){var s=this._reportingRequestData;"n"===O()&&(s=t.getStorageSync("__UNI__STAT__DATA")),N();var u=[],c=[],f=[],l=function(t){var e=s[t];e.forEach(function(e){var n=$(e);0===t?u.push(n):3===t?f.push(n):c.push(n)})};for(var h in s)l(h);u.push.apply(u,c.concat(f));var d={usv:p,t:o,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===O()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==O()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){r._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:l,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=b(B(t)).options;e.src=h+"?"+n}},{key:"sendEvent",value:function(t,e){W(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function n(){var e;return u(this,n),e=r(this,i(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return a(n,e),f(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),f(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,N(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,J(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,J(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(n)}}]),n}(Z),tt=Q.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function rt(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}rt()}).call(this,n("6e42")["default"])},b52e:function(t,e,n){},b6f7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={appid:"__UNI__9E1D7FE"};e.default=r},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},d595:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("66fd")),o=i(n("2f62"));function i(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default);var a=new o.default.Store({state:{appName:"demo",code:null,address:[{id:1,addr:"北京的家",city:"北京"},{id:2,addr:"我的家",city:"西安"}],currentAddress:{id:2,addr:"我的家",city:"西安"},modifyAddress:null},mutations:{removeAddress:function(t,e){var n=t.address.indexOf(function(t){return t.id==e});t.address.splice(n,1)},changeAddress:function(t,e){var n=t.address.find(function(t){return t.id==e.id});n.addr=e.addr,n.city=e.city},setModifyAddress:function(t,e){t.modifyAddress=e},setAppName:function(t,e){t.appName=e},setCode:function(t,e){t.code=e}}}),s=a;e.default=s},dfc8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={pages:{"pages/index/index":{},"pages/login/login":{},"pages/login/phoneLogin":{},"pages/login/clause":{},"pages/device/device":{},"pages/my/my":{},"pages/address/addressList":{},"pages/address/managerAddress":{},"pages/address/modifyAddress":{},"components/CitySelect":{}},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"}};e.default=r}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"19df":function(t,e,n){"use strict";n.r(e);var r=n("a6e2"),u=n("f55e");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);n("54d2");var a=n("2877"),c=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,null,null);e["default"]=c.exports},"3d9f":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("19df"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"517b":function(t,e,n){},"54d2":function(t,e,n){"use strict";var r=n("517b"),u=n.n(r);u.a},"80d4":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{}},computed:u({},(0,r.mapState)(["currentAddress"])),onLoad:function(){},mounted:function(){t.setNavigationBarTitle({title:"首页"})},methods:{switchAddress:function(){t.navigateTo({url:"../address/addressList"})}}};e.default=a}).call(this,n("6e42")["default"])},a6e2:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return u})},f55e:function(t,e,n){"use strict";n.r(e);var r=n("80d4"),u=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=u.a}},[["3d9f","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0ca1":function(e,t,n){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n("2f62");function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={computed:c({},(0,u.mapState)(["code"])),mounted:function(){e.setNavigationBarTitle({title:"健康生活"})},methods:c({},(0,u.mapMutations)(["setCode"]),{wechat_login:function(){var t=this;e.login({provider:"weixin",success:function(e){"login:ok"==e.errMsg&&t.$state.commit("setCode",e.code)}})},getUserInfo:function(e){console.log(o(e," at pages\\login\\login.vue:37"))},phone_login:function(){e.navigateTo({url:"./phoneLogin"})},goToClause:function(){e.navigateTo({url:"./clause"})}})};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"727c":function(e,t,n){"use strict";var o=n("ef23"),u=n.n(o);u.a},"79f6":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");o(n("66fd"));var t=o(n("a59c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},8554:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return u})},a59c:function(e,t,n){"use strict";n.r(t);var o=n("8554"),u=n("c7d0");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("727c");var r=n("2877"),a=Object(r["a"])(u["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},c7d0:function(e,t,n){"use strict";n.r(t);var o=n("0ca1"),u=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t["default"]=u.a},ef23:function(e,t,n){}},[["79f6","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/phoneLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/phoneLogin.js';

define('pages/login/phoneLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/phoneLogin"],{"017b":function(n,t,e){"use strict";e.r(t);var u=e("08fe"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=o.a},"08fe":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{phoneClass:"",codeClass:""}},mounted:function(){n.setNavigationBarTitle({title:"手机登录"})},methods:{phoneFocus:function(n){this.phoneClass="focus"},phoneBlur:function(n){this.phoneClass=""},codeFocus:function(n){this.codeClass="focus"},codeBlur:function(n){this.codeClass=""},login:function(){n.switchTab({url:"../index/index"})}}};t.default=e}).call(this,e("6e42")["default"])},"2a25":function(n,t,e){"use strict";var u=e("e61d"),o=e.n(u);o.a},"327f":function(n,t,e){"use strict";e.r(t);var u=e("3cfa"),o=e("017b");for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);e("2a25");var a=e("2877"),i=Object(a["a"])(o["default"],u["a"],u["b"],!1,null,null,null);t["default"]=i.exports},"3cfa":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return o})},4229:function(n,t,e){"use strict";(function(n){e("b52e"),e("921b");u(e("66fd"));var t=u(e("327f"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},e61d:function(n,t,e){}},[["4229","common/runtime","common/vendor"]]]);
});
require('pages/login/phoneLogin.js');
__wxRoute = 'pages/login/clause';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/clause.js';

define('pages/login/clause.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/clause"],{4555:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return a})},"4ad7":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");u(n("66fd"));var e=u(n("aeb4"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5108:function(t,e,n){"use strict";n.r(e);var u=n("b58a"),a=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);e["default"]=a.a},aeb4:function(t,e,n){"use strict";n.r(e);var u=n("4555"),a=n("5108");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);var o=n("2877"),i=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,null,null);e["default"]=i.exports},b58a:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={mounted:function(){t.setNavigationBarTitle({title:"用户协议"})}};e.default=n}).call(this,n("6e42")["default"])}},[["4ad7","common/runtime","common/vendor"]]]);
});
require('pages/login/clause.js');
__wxRoute = 'pages/device/device';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/device/device.js';

define('pages/device/device.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/device/device"],{"4e0c":function(e,t,n){"use strict";n.r(t);var r=n("72af"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);t["default"]=u.a},"72af":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c={data:function(){return{}},computed:u({},(0,r.mapState)(["appName"])),onLoad:function(){},methods:{}};t.default=c},7884:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("7ec1"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7ec1":function(e,t,n){"use strict";n.r(t);var r=n("bf13"),u=n("4e0c");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("f68e");var c=n("2877"),o=Object(c["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=o.exports},a85a:function(e,t,n){},bf13:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},f68e:function(e,t,n){"use strict";var r=n("a85a"),u=n.n(r);u.a}},[["7884","common/runtime","common/vendor"]]]);
});
require('pages/device/device.js');
__wxRoute = 'pages/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/my/my.js';

define('pages/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/my/my"],{2963:function(e,t,n){"use strict";var r=n("c0c2"),u=n.n(r);u.a},"6c1f":function(e,t,n){"use strict";n.r(t);var r=n("733b"),u=n("9e59");for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);n("2963");var o=n("2877"),a=Object(o["a"])(u["default"],r["a"],r["b"],!1,null,null,null);t["default"]=a.exports},"733b":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})},"90ee":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={data:function(){return{}},computed:u({},(0,r.mapState)(["appName"])),onLoad:function(){},methods:{}};t.default=o},"9e59":function(e,t,n){"use strict";n.r(t);var r=n("90ee"),u=n.n(r);for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);t["default"]=u.a},a1d0:function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("6c1f"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},c0c2:function(e,t,n){}},[["a1d0","common/runtime","common/vendor"]]]);
});
require('pages/my/my.js');
__wxRoute = 'pages/address/addressList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/addressList.js';

define('pages/address/addressList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressList"],{"2a91":function(e,t,n){"use strict";n.r(t);var r=n("dd23"),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=a.a},"74fa":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("814c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"814c":function(e,t,n){"use strict";n.r(t);var r=n("ce69"),a=n("2a91");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);var o=n("2877"),c=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},ce69:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a})},dd23:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o={computed:a({},(0,r.mapState)(["address"])),mounted:function(){e.setNavigationBarTitle({title:"家庭列表"})},methods:{gotoManager:function(){e.navigateTo({url:"./managerAddress"})}}};t.default=o}).call(this,n("6e42")["default"])}},[["74fa","common/runtime","common/vendor"]]]);
});
require('pages/address/addressList.js');
__wxRoute = 'pages/address/managerAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/managerAddress.js';

define('pages/address/managerAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/managerAddress"],{"30f1":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n("2f62");function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a={computed:o({},(0,r.mapState)(["address"])),mounted:function(){e.setNavigationBarTitle({title:"管理家庭"})},methods:{modify:function(t){e.navigateTo({url:"./modifyAddress?id="+t})},remove:function(e){this.$store.commit("removeAddress",e)}}};t.default=a}).call(this,n("6e42")["default"])},3235:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return o})},"5e8c":function(e,t,n){"use strict";(function(e){n("b52e"),n("921b");r(n("66fd"));var t=r(n("7b35"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7b35":function(e,t,n){"use strict";n.r(t);var r=n("3235"),o=n("a5b2");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);var a=n("2877"),c=Object(a["a"])(o["default"],r["a"],r["b"],!1,null,null,null);t["default"]=c.exports},a5b2:function(e,t,n){"use strict";n.r(t);var r=n("30f1"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,function(){return r[e]})}(u);t["default"]=o.a}},[["5e8c","common/runtime","common/vendor"]]]);
});
require('pages/address/managerAddress.js');
__wxRoute = 'pages/address/modifyAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/address/modifyAddress.js';

define('pages/address/modifyAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/modifyAddress"],{"09a3":function(t,e,n){},"2ff5":function(t,e,n){"use strict";n.r(e);var r=n("74ba"),s=n("fc3d");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("d14e");var d=n("2877"),o=Object(d["a"])(s["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports},"5cb3":function(t,e,n){"use strict";(function(t){n("b52e"),n("921b");r(n("66fd"));var e=r(n("2ff5"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"74ba":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s})},d14e:function(t,e,n){"use strict";var r=n("09a3"),s=n.n(r);s.a},fc3d:function(t,e,n){"use strict";n.r(e);var r=n("fd9b"),s=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);e["default"]=s.a},fd9b:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62");function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){i(t,e,n[e])})}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d={data:function(){return{currentAddress:null}},computed:s({},(0,r.mapState)(["address","modifyAddress"])),mounted:function(){t.setNavigationBarTitle({title:"修改家庭"})},onLoad:function(t){this.currentAddress=this.address.find(function(e){return e.id==t.id}),this.$store.commit("setModifyAddress",this.currentAddress)},onShow:function(){this.modifyAddress&&this.modifyAddress.id==this.currentAddress.id&&(this.currentAddress.city=this.modifyAddress.city)},methods:s({},(0,r.mapMutations)(["setModifyAddress","changeAddress"]),{selectCity:function(){t.navigateTo({url:"../../components/CitySelect"})},nameChanged:function(t){this.$store.commit("setModifyAddress",this.currentAddress)},save:function(){this.$store.commit("changeAddress",this.currentAddress),t.navigateBack()}})};e.default=d}).call(this,n("6e42")["default"])}},[["5cb3","common/runtime","common/vendor"]]]);
});
require('pages/address/modifyAddress.js');
__wxRoute = 'components/CitySelect';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/CitySelect.js';

define('components/CitySelect.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/CitySelect"],{1884:function(n,i,a){"use strict";var e=a("3c22"),l=a.n(e);l.a},3990:function(n,i,a){"use strict";(function(n,e){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=a("2f62");function p(n){return z(n)||y(n)||g()}function g(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function y(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}function z(n){if(Array.isArray(n)){for(var i=0,a=new Array(n.length);i<n.length;i++)a[i]=n[i];return a}}function u(n){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.forEach(function(i){m(n,i,a[i])})}return n}function m(n,i,a){return i in n?Object.defineProperty(n,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[i]=a,n}var b={data:function(){return{cities:[{group:"a",cities:[{label:"阿坝Aba0837",name:"阿坝",pinyin:"aba",zip:"0837"},{label:"阿克苏Akesu0997",name:"阿克苏",pinyin:"akesu",zip:"0997"},{label:"阿拉善盟Alashanmeng0483",name:"阿拉善盟",pinyin:"alashanmeng",zip:"0483"},{label:"阿勒泰Aletai0906",name:"阿勒泰",pinyin:"aletai",zip:"0906"},{label:"阿里Ali0897",name:"阿里",pinyin:"ali",zip:"0897"},{label:"安康Ankang0915",name:"安康",pinyin:"ankang",zip:"0915"},{label:"安庆Anqing0556",name:"安庆",pinyin:"anqing",zip:"0556"},{label:"鞍山Anshan0412",name:"鞍山",pinyin:"anshan",zip:"0412"},{label:"安顺Anshun0853",name:"安顺",pinyin:"anshun",zip:"0853"},{label:"安阳Anyang0372",name:"安阳",pinyin:"anyang",zip:"0372"},{label:"阿城Acheng0451",name:"阿城",pinyin:"acheng",zip:"0451"},{label:"安福Anfu0796",name:"安福",pinyin:"anfu",zip:"0796"},{label:"安吉Anji0572",name:"安吉",pinyin:"anji",zip:"0572"},{label:"安宁Anning0871",name:"安宁",pinyin:"anning",zip:"0871"},{label:"安丘Anqiu0536",name:"安丘",pinyin:"anqiu",zip:"0536"},{label:"安溪Anxi0595",name:"安溪",pinyin:"anxi",zip:"0595"},{label:"安义Anyi0791",name:"安义",pinyin:"anyi",zip:"0791"},{label:"安远Anyuan0797",name:"安远",pinyin:"anyuan",zip:"0797"}]},{group:"b",cities:[{label:"北京Beijing010",name:"北京",pinyin:"beijing",zip:"010"},{label:"白城Baicheng0436",name:"白城",pinyin:"baicheng",zip:"0436"},{label:"百色Baise0776",name:"百色",pinyin:"baise",zip:"0776"},{label:"白山Baishan0439",name:"白山",pinyin:"baishan",zip:"0439"},{label:"白银Baiyin0943",name:"白银",pinyin:"baiyin",zip:"0943"},{label:"蚌埠Bangbu0552",name:"蚌埠",pinyin:"bangbu",zip:"0552"},{label:"保定Baoding0312",name:"保定",pinyin:"baoding",zip:"0312"},{label:"宝鸡Baoji0917",name:"宝鸡",pinyin:"baoji",zip:"0917"},{label:"保山Baoshan0875",name:"保山",pinyin:"baoshan",zip:"0875"},{label:"包头Baotou0472",name:"包头",pinyin:"baotou",zip:"0472"},{label:"巴彦淖尔Bayannaoer0478",name:"巴彦淖尔",pinyin:"bayannaoer",zip:"0478"},{label:"巴音郭楞Bayinguoleng0996",name:"巴音郭楞",pinyin:"bayinguoleng",zip:"0996"},{label:"巴中Bazhong0827",name:"巴中",pinyin:"bazhong",zip:"0827"},{label:"北海Beihai0779",name:"北海",pinyin:"beihai",zip:"0779"},{label:"本溪Benxi0414",name:"本溪",pinyin:"benxi",zip:"0414"},{label:"毕节Bijie0857",name:"毕节",pinyin:"bijie",zip:"0857"},{label:"滨州Binzhou0543",name:"滨州",pinyin:"binzhou",zip:"0543"},{label:"博尔塔拉Boertala0909",name:"博尔塔拉",pinyin:"boertala",zip:"0909"},{label:"亳州Bozhou0558",name:"亳州",pinyin:"bozhou",zip:"0558"},{label:"宝应Baoying0514",name:"宝应",pinyin:"baoying",zip:"0514"},{label:"巴彦Bayan0451",name:"巴彦",pinyin:"bayan",zip:"0451"},{label:"滨海Binhai0515",name:"滨海",pinyin:"binhai",zip:"0515"},{label:"宾县Binxian0451",name:"宾县",pinyin:"binxian",zip:"0451"},{label:"宾阳Binyang0771",name:"宾阳",pinyin:"binyang",zip:"0771"},{label:"璧山Bishan023",name:"璧山",pinyin:"bishan",zip:"023"},{label:"博爱Boai0391",name:"博爱",pinyin:"boai",zip:"0391"},{label:"博罗Boluo0752",name:"博罗",pinyin:"boluo",zip:"0752"},{label:"博兴Boxing0543",name:"博兴",pinyin:"boxing",zip:"0543"}]},{group:"c",cities:[{label:"重庆Chongqing023",name:"重庆",pinyin:"chongqing",zip:"023"},{label:"长春Changchun0431",name:"长春",pinyin:"changchun",zip:"0431"},{label:"长沙Changsha0731",name:"长沙",pinyin:"changsha",zip:"0731"},{label:"常州Changzhou0519",name:"常州",pinyin:"changzhou",zip:"0519"},{label:"成都Chengdu028",name:"成都",pinyin:"chengdu",zip:"028"},{label:"沧州Cangzhou0317",name:"沧州",pinyin:"cangzhou",zip:"0317"},{label:"常德Changde0736",name:"常德",pinyin:"changde",zip:"0736"},{label:"昌都Changdu0895",name:"昌都",pinyin:"changdu",zip:"0895"},{label:"昌吉Changji0997",name:"昌吉",pinyin:"changji",zip:"0997"},{label:"长治Changzhi0355",name:"长治",pinyin:"changzhi",zip:"0355"},{label:"巢湖Chaohu0565",name:"巢湖",pinyin:"chaohu",zip:"0565"},{label:"朝阳Chaoyang0421",name:"朝阳",pinyin:"chaoyang",zip:"0421"},{label:"潮州Chaozhou0768",name:"潮州",pinyin:"chaozhou",zip:"0768"},{label:"承德Chengde0314",name:"承德",pinyin:"chengde",zip:"0314"},{label:"郴州Chenzhou0735",name:"郴州",pinyin:"chenzhou",zip:"0735"},{label:"赤峰Chifeng0476",name:"赤峰",pinyin:"chifeng",zip:"0476"},{label:"池州Chizhou0566",name:"池州",pinyin:"chizhou",zip:"0566"},{label:"崇左Chongzuo0771",name:"崇左",pinyin:"chongzuo",zip:"0771"},{label:"楚雄Chuxiong0875",name:"楚雄",pinyin:"chuxiong",zip:"0875"},{label:"滁州Chuzhou0550",name:"滁州",pinyin:"chuzhou",zip:"0550"},{label:"苍南Cangnan0577",name:"苍南",pinyin:"cangnan",zip:"0577"},{label:"苍山Cangshan0539",name:"苍山",pinyin:"cangshan",zip:"0539"},{label:"曹县Caoxian0530",name:"曹县",pinyin:"caoxian",zip:"0530"},{label:"长岛Changdao0535",name:"长岛",pinyin:"changdao",zip:"0535"},{label:"长丰Changfeng0551",name:"长丰",pinyin:"changfeng",zip:"0551"},{label:"长海Changhai0411",name:"长海",pinyin:"changhai",zip:"0411"},{label:"长乐Changle0591",name:"长乐",pinyin:"changle",zip:"0591"},{label:"昌乐Changle0536",name:"昌乐",pinyin:"changle",zip:"0536"},{label:"常山Changshan0570",name:"常山",pinyin:"changshan",zip:"0570"},{label:"常熟Changshu0512",name:"常熟",pinyin:"changshu",zip:"0512"},{label:"长泰Changtai0596",name:"长泰",pinyin:"changtai",zip:"0596"},{label:"长汀Changting0597",name:"长汀",pinyin:"changting",zip:"0597"},{label:"长兴Changxing0572",name:"长兴",pinyin:"changxing",zip:"0572"},{label:"昌邑Changyi0536",name:"昌邑",pinyin:"changyi",zip:"0536"},{label:"潮安Chaoan0768",name:"潮安",pinyin:"chaoan",zip:"0768"},{label:"呈贡Chenggong0871",name:"呈贡",pinyin:"chenggong",zip:"0871"},{label:"城口Chengkou023",name:"城口",pinyin:"chengkou",zip:"023"},{label:"成武Chengwu0530",name:"成武",pinyin:"chengwu",zip:"0530"},{label:"茌平Chiping0635",name:"茌平",pinyin:"chiping",zip:"0635"},{label:"崇仁Chongren0794",name:"崇仁",pinyin:"chongren",zip:"0794"},{label:"崇义Chongyi0797",name:"崇义",pinyin:"chongyi",zip:"0797"},{label:"崇州Chongzhou028",name:"崇州",pinyin:"chongzhou",zip:"028"},{label:"淳安Chunan0571",name:"淳安",pinyin:"chunan",zip:"0571"},{label:"慈溪Cixi0574",name:"慈溪",pinyin:"cixi",zip:"0574"},{label:"从化Conghua020",name:"从化",pinyin:"conghua",zip:"020"},{label:"枞阳Congyang0556",name:"枞阳",pinyin:"congyang",zip:"0556"}]},{group:"d",cities:[{label:"大连Dalian0411",name:"大连",pinyin:"dalian",zip:"0411"},{label:"东莞Dongguan0769",name:"东莞",pinyin:"dongguan",zip:"0769"},{label:"大理Dali0872",name:"大理",pinyin:"dali",zip:"0872"},{label:"丹东Dandong0415",name:"丹东",pinyin:"dandong",zip:"0415"},{label:"大庆Daqing0459",name:"大庆",pinyin:"daqing",zip:"0459"},{label:"大同Datong0352",name:"大同",pinyin:"datong",zip:"0352"},{label:"大兴安岭Daxinganling0457",name:"大兴安岭",pinyin:"daxinganling",zip:"0457"},{label:"达州Dazhou0818",name:"达州",pinyin:"dazhou",zip:"0818"},{label:"德宏Dehong0692",name:"德宏",pinyin:"dehong",zip:"0692"},{label:"德阳Deyang0838",name:"德阳",pinyin:"deyang",zip:"0838"},{label:"德州Dezhou0534",name:"德州",pinyin:"dezhou",zip:"0534"},{label:"定西Dingxi0932",name:"定西",pinyin:"dingxi",zip:"0932"},{label:"迪庆Diqing0887",name:"迪庆",pinyin:"diqing",zip:"0887"},{label:"东营Dongying0546",name:"东营",pinyin:"dongying",zip:"0546"},{label:"大丰Dafeng0515",name:"大丰",pinyin:"dafeng",zip:"0515"},{label:"岱山Daishan0580",name:"岱山",pinyin:"daishan",zip:"0580"},{label:"砀山Dangshan0557",name:"砀山",pinyin:"dangshan",zip:"0557"},{label:"当涂Dangtu0555",name:"当涂",pinyin:"dangtu",zip:"0555"},{label:"单县Danxian0530",name:"单县",pinyin:"danxian",zip:"0530"},{label:"丹阳Danyang0511",name:"丹阳",pinyin:"danyang",zip:"0511"},{label:"大埔Dapu0753",name:"大埔",pinyin:"dapu",zip:"0753"},{label:"大田Datian0598",name:"大田",pinyin:"datian",zip:"0598"},{label:"大邑Dayi028",name:"大邑",pinyin:"dayi",zip:"028"},{label:"大余Dayu0797",name:"大余",pinyin:"dayu",zip:"0797"},{label:"大足Dazu023",name:"大足",pinyin:"dazu",zip:"023"},{label:"德安Dean0792",name:"德安",pinyin:"dean",zip:"0792"},{label:"德化Dehua0595",name:"德化",pinyin:"dehua",zip:"0595"},{label:"德惠Dehui0431",name:"德惠",pinyin:"dehui",zip:"0431"},{label:"登封Dengfeng0371",name:"登封",pinyin:"dengfeng",zip:"0371"},{label:"德清Deqing0572",name:"德清",pinyin:"deqing",zip:"0572"},{label:"德庆Deqing0758",name:"德庆",pinyin:"deqing",zip:"0758"},{label:"德兴Dexing0793",name:"德兴",pinyin:"dexing",zip:"0793"},{label:"电白Dianbai0668",name:"电白",pinyin:"dianbai",zip:"0668"},{label:"垫江Dianjiang023",name:"垫江",pinyin:"dianjiang",zip:"023"},{label:"定南Dingnan0797",name:"定南",pinyin:"dingnan",zip:"0797"},{label:"定陶Dingtao0530",name:"定陶",pinyin:"dingtao",zip:"0530"},{label:"定远Dingyuan0550",name:"定远",pinyin:"dingyuan",zip:"0550"},{label:"东阿Donga0635",name:"东阿",pinyin:"donga",zip:"0635"},{label:"东海Donghai0518",name:"东海",pinyin:"donghai",zip:"0518"},{label:"东明Dongming0530",name:"东明",pinyin:"dongming",zip:"0530"},{label:"东平Dongping0538",name:"东平",pinyin:"dongping",zip:"0538"},{label:"东山Dongshan0596",name:"东山",pinyin:"dongshan",zip:"0596"},{label:"东台Dongtai0515",name:"东台",pinyin:"dongtai",zip:"0515"},{label:"洞头Dongtou0577",name:"洞头",pinyin:"dongtou",zip:"0577"},{label:"东乡Dongxiang0794",name:"东乡",pinyin:"dongxiang",zip:"0794"},{label:"东阳Dongyang0579",name:"东阳",pinyin:"dongyang",zip:"0579"},{label:"东源Dongyuan0762",name:"东源",pinyin:"dongyuan",zip:"0762"},{label:"东至Dongzhi0566",name:"东至",pinyin:"dongzhi",zip:"0566"},{label:"都昌Duchang0792",name:"都昌",pinyin:"duchang",zip:"0792"},{label:"都江堰Dujiangyan028",name:"都江堰",pinyin:"dujiangyan",zip:"028"}]},{group:"e",cities:[{label:"鄂尔多斯Eerduosi0477",name:"鄂尔多斯",pinyin:"eerduosi",zip:"0477"},{label:"恩施Enshi0718",name:"恩施",pinyin:"enshi",zip:"0718"},{label:"鄂州Ezhou0711",name:"鄂州",pinyin:"ezhou",zip:"0711"},{label:"恩平Enping0750",name:"恩平",pinyin:"enping",zip:"0750"}]},{group:"f",cities:[{label:"佛山Foshan0757",name:"佛山",pinyin:"foshan",zip:"0757"},{label:"福州Fuzhou0591",name:"福州",pinyin:"fuzhou",zip:"0591"},{label:"防城港Fangchenggang0770",name:"防城港",pinyin:"fangchenggang",zip:"0770"},{label:"抚顺Fushun0413",name:"抚顺",pinyin:"fushun",zip:"0413"},{label:"阜新Fuxin0418",name:"阜新",pinyin:"fuxin",zip:"0418"},{label:"阜阳Fuyang0558",name:"阜阳",pinyin:"fuyang",zip:"0558"},{label:"抚州Fuzhou0794",name:"抚州",pinyin:"fuzhou",zip:"0794"},{label:"法库Faku024",name:"法库",pinyin:"faku",zip:"024"},{label:"繁昌Fanchang0553",name:"繁昌",pinyin:"fanchang",zip:"0553"},{label:"方正Fangzheng0451",name:"方正",pinyin:"fangzheng",zip:"0451"},{label:"肥城Feicheng0538",name:"肥城",pinyin:"feicheng",zip:"0538"},{label:"肥东Feidong0551",name:"肥东",pinyin:"feidong",zip:"0551"},{label:"肥西Feixi0551",name:"肥西",pinyin:"feixi",zip:"0551"},{label:"费县Feixian0539",name:"费县",pinyin:"feixian",zip:"0539"},{label:"丰城Fengcheng0795",name:"丰城",pinyin:"fengcheng",zip:"0795"},{label:"丰都Fengdu023",name:"丰都",pinyin:"fengdu",zip:"023"},{label:"奉化Fenghua0574",name:"奉化",pinyin:"fenghua",zip:"0574"},{label:"奉节Fengjie023",name:"奉节",pinyin:"fengjie",zip:"023"},{label:"封开Fengkai0758",name:"封开",pinyin:"fengkai",zip:"0758"},{label:"丰顺Fengshun0753",name:"丰顺",pinyin:"fengshun",zip:"0753"},{label:"凤台Fengtai0554",name:"凤台",pinyin:"fengtai",zip:"0554"},{label:"丰县Fengxian0516",name:"丰县",pinyin:"fengxian",zip:"0516"},{label:"奉新Fengxin0795",name:"奉新",pinyin:"fengxin",zip:"0795"},{label:"凤阳Fengyang0550",name:"凤阳",pinyin:"fengyang",zip:"0550"},{label:"分宜Fenyi0790",name:"分宜",pinyin:"fenyi",zip:"0790"},{label:"佛冈Fogang0763",name:"佛冈",pinyin:"fogang",zip:"0763"},{label:"福安Fuan0593",name:"福安",pinyin:"fuan",zip:"0593"},{label:"福鼎Fuding0593",name:"福鼎",pinyin:"fuding",zip:"0593"},{label:"浮梁Fuliang0798",name:"浮梁",pinyin:"fuliang",zip:"0798"},{label:"富民Fumin0871",name:"富民",pinyin:"fumin",zip:"0871"},{label:"阜南Funan0558",name:"阜南",pinyin:"funan",zip:"0558"},{label:"阜宁Funing0515",name:"阜宁",pinyin:"funing",zip:"0515"},{label:"福清Fuqing0591",name:"福清",pinyin:"fuqing",zip:"0591"},{label:"富阳Fuyang0571",name:"富阳",pinyin:"fuyang",zip:"0571"}]},{group:"g",cities:[{label:"广州Guangzhou020",name:"广州",pinyin:"guangzhou",zip:"020"},{label:"贵阳Guiyang0851",name:"贵阳",pinyin:"guiyang",zip:"0851"},{label:"甘南Gannan0941",name:"甘南",pinyin:"gannan",zip:"0941"},{label:"赣州Ganzhou0797",name:"赣州",pinyin:"ganzhou",zip:"0797"},{label:"甘孜Ganzi0836",name:"甘孜",pinyin:"ganzi",zip:"0836"},{label:"广安Guangan0826",name:"广安",pinyin:"guangan",zip:"0826"},{label:"广元Guangyuan0839",name:"广元",pinyin:"guangyuan",zip:"0839"},{label:"贵港Guigang0775",name:"贵港",pinyin:"guigang",zip:"0775"},{label:"桂林Guilin0773",name:"桂林",pinyin:"guilin",zip:"0773"},{label:"果洛Guoluo0975",name:"果洛",pinyin:"guoluo",zip:"0975"},{label:"固原Guyuan0954",name:"固原",pinyin:"guyuan",zip:"0954"},{label:"赣县Ganxian0797",name:"赣县",pinyin:"ganxian",zip:"0797"},{label:"赣榆Ganyu0518",name:"赣榆",pinyin:"ganyu",zip:"0518"},{label:"高安Gaoan0795",name:"高安",pinyin:"gaoan",zip:"0795"},{label:"藁城Gaocheng0311",name:"藁城",pinyin:"gaocheng",zip:"0311"},{label:"高淳Gaochun025",name:"高淳",pinyin:"gaochun",zip:"025"},{label:"皋兰Gaolan0931",name:"皋兰",pinyin:"gaolan",zip:"0931"},{label:"高陵Gaoling029",name:"高陵",pinyin:"gaoling",zip:"029"},{label:"高密Gaomi0536",name:"高密",pinyin:"gaomi",zip:"0536"},{label:"高青Gaoqing0533",name:"高青",pinyin:"gaoqing",zip:"0533"},{label:"高唐Gaotang0635",name:"高唐",pinyin:"gaotang",zip:"0635"},{label:"高要Gaoyao0758",name:"高要",pinyin:"gaoyao",zip:"0758"},{label:"高邑Gaoyi0311",name:"高邑",pinyin:"gaoyi",zip:"0311"},{label:"高邮Gaoyou0514",name:"高邮",pinyin:"gaoyou",zip:"0514"},{label:"高州Gaozhou0668",name:"高州",pinyin:"gaozhou",zip:"0668"},{label:"巩义Gongyi0371",name:"巩义",pinyin:"gongyi",zip:"0371"},{label:"广昌Guangchang0794",name:"广昌",pinyin:"guangchang",zip:"0794"},{label:"广德Guangde0563",name:"广德",pinyin:"guangde",zip:"0563"},{label:"广丰Guangfeng0793",name:"广丰",pinyin:"guangfeng",zip:"0793"},{label:"广宁Guangning0758",name:"广宁",pinyin:"guangning",zip:"0758"},{label:"广饶Guangrao0546",name:"广饶",pinyin:"guangrao",zip:"0546"},{label:"光泽Guangze0599",name:"光泽",pinyin:"guangze",zip:"0599"},{label:"灌南Guannan0518",name:"灌南",pinyin:"guannan",zip:"0518"},{label:"冠县Guanxian0635",name:"冠县",pinyin:"guanxian",zip:"0635"},{label:"灌云Guanyun0518",name:"灌云",pinyin:"guanyun",zip:"0518"},{label:"贵溪Guixi0701",name:"贵溪",pinyin:"guixi",zip:"0701"},{label:"古田Gutian0593",name:"古田",pinyin:"gutian",zip:"0593"},{label:"固镇Guzhen0552",name:"固镇",pinyin:"guzhen",zip:"0552"}]},{group:"h",cities:[{label:"哈尔滨Haerbin0451",name:"哈尔滨",pinyin:"haerbin",zip:"0451"},{label:"海口Haikou0898",name:"海口",pinyin:"haikou",zip:"0898"},{label:"邯郸Handan0310",name:"邯郸",pinyin:"handan",zip:"0310"},{label:"杭州Hangzhou0571",name:"杭州",pinyin:"hangzhou",zip:"0571"},{label:"合肥Hefei0551",name:"合肥",pinyin:"hefei",zip:"0551"},{label:"惠州Huizhou0752",name:"惠州",pinyin:"huizhou",zip:"0752"},{label:"海北Haibei0970",name:"海北",pinyin:"haibei",zip:"0970"},{label:"海东Haidong0972",name:"海东",pinyin:"haidong",zip:"0972"},{label:"海南Hainan0974",name:"海南",pinyin:"hainan",zip:"0974"},{label:"海西Haixi0977",name:"海西",pinyin:"haixi",zip:"0977"},{label:"哈密Hami0902",name:"哈密",pinyin:"hami",zip:"0902"},{label:"汉中Hanzhong0916",name:"汉中",pinyin:"hanzhong",zip:"0916"},{label:"鹤壁Hebi0392",name:"鹤壁",pinyin:"hebi",zip:"0392"},{label:"河池Hechi0778",name:"河池",pinyin:"hechi",zip:"0778"},{label:"鹤岗Hegang0468",name:"鹤岗",pinyin:"hegang",zip:"0468"},{label:"黑河Heihe0456",name:"黑河",pinyin:"heihe",zip:"0456"},{label:"衡水Hengshui0318",name:"衡水",pinyin:"hengshui",zip:"0318"},{label:"衡阳Hengyang0734",name:"衡阳",pinyin:"hengyang",zip:"0734"},{label:"和田地Hetiandi0903",name:"和田地",pinyin:"hetiandi",zip:"0903"},{label:"河源Heyuan0762",name:"河源",pinyin:"heyuan",zip:"0762"},{label:"菏泽Heze0530",name:"菏泽",pinyin:"heze",zip:"0530"},{label:"贺州Hezhou0774",name:"贺州",pinyin:"hezhou",zip:"0774"},{label:"红河Honghe0873",name:"红河",pinyin:"honghe",zip:"0873"},{label:"淮安Huaian0517",name:"淮安",pinyin:"huaian",zip:"0517"},{label:"淮北Huaibei0561",name:"淮北",pinyin:"huaibei",zip:"0561"},{label:"怀化Huaihua0745",name:"怀化",pinyin:"huaihua",zip:"0745"},{label:"淮南Huainan0554",name:"淮南",pinyin:"huainan",zip:"0554"},{label:"黄冈Huanggang0713",name:"黄冈",pinyin:"huanggang",zip:"0713"},{label:"黄南Huangnan0973",name:"黄南",pinyin:"huangnan",zip:"0973"},{label:"黄山Huangshan0559",name:"黄山",pinyin:"huangshan",zip:"0559"},{label:"黄石Huangshi0714",name:"黄石",pinyin:"huangshi",zip:"0714"},{label:"呼和浩特Huhehaote0471",name:"呼和浩特",pinyin:"huhehaote",zip:"0471"},{label:"葫芦岛Huludao0429",name:"葫芦岛",pinyin:"huludao",zip:"0429"},{label:"呼伦贝尔Hulunbeier0470",name:"呼伦贝尔",pinyin:"hulunbeier",zip:"0470"},{label:"湖州Huzhou0572",name:"湖州",pinyin:"huzhou",zip:"0572"},{label:"海安Haian0513",name:"海安",pinyin:"haian",zip:"0513"},{label:"海丰Haifeng0660",name:"海丰",pinyin:"haifeng",zip:"0660"},{label:"海门Haimen0513",name:"海门",pinyin:"haimen",zip:"0513"},{label:"海宁Haining0573",name:"海宁",pinyin:"haining",zip:"0573"},{label:"海盐Haiyan0573",name:"海盐",pinyin:"haiyan",zip:"0573"},{label:"海阳Haiyang0535",name:"海阳",pinyin:"haiyang",zip:"0535"},{label:"含山Hanshan0565",name:"含山",pinyin:"hanshan",zip:"0565"},{label:"合川Hechuan023",name:"合川",pinyin:"hechuan",zip:"023"},{label:"横峰Hengfeng0793",name:"横峰",pinyin:"hengfeng",zip:"0793"},{label:"横县Hengxian0771",name:"横县",pinyin:"hengxian",zip:"0771"},{label:"和平Heping0762",name:"和平",pinyin:"heping",zip:"0762"},{label:"鹤山Heshan0750",name:"鹤山",pinyin:"heshan",zip:"0750"},{label:"和县Hexian0565",name:"和县",pinyin:"hexian",zip:"0565"},{label:"洪泽Hongze0517",name:"洪泽",pinyin:"hongze",zip:"0517"},{label:"华安Huaan0596",name:"华安",pinyin:"huaan",zip:"0596"},{label:"桦甸Huadian0423",name:"桦甸",pinyin:"huadian",zip:"0423"},{label:"怀集Huaiji0758",name:"怀集",pinyin:"huaiji",zip:"0758"},{label:"怀宁Huaining0556",name:"怀宁",pinyin:"huaining",zip:"0556"},{label:"怀远Huaiyuan0552",name:"怀远",pinyin:"huaiyuan",zip:"0552"},{label:"桓台Huantai0533",name:"桓台",pinyin:"huantai",zip:"0533"},{label:"化州Huazhou0668",name:"化州",pinyin:"huazhou",zip:"0668"},{label:"惠安Huian0595",name:"惠安",pinyin:"huian",zip:"0595"},{label:"会昌Huichang0797",name:"会昌",pinyin:"huichang",zip:"0797"},{label:"惠东Huidong0752",name:"惠东",pinyin:"huidong",zip:"0752"},{label:"惠来Huilai0663",name:"惠来",pinyin:"huilai",zip:"0663"},{label:"惠民Huimin0543",name:"惠民",pinyin:"huimin",zip:"0543"},{label:"湖口Hukou0792",name:"湖口",pinyin:"hukou",zip:"0792"},{label:"呼兰Hulan0451",name:"呼兰",pinyin:"hulan",zip:"0451"},{label:"霍邱Huoqiu0564",name:"霍邱",pinyin:"huoqiu",zip:"0564"},{label:"霍山Huoshan0564",name:"霍山",pinyin:"huoshan",zip:"0564"},{label:"户县Huxian029",name:"户县",pinyin:"huxian",zip:"029"}]},{group:"j",cities:[{label:"焦作Jiaozuo0391",name:"焦作",pinyin:"jiaozuo",zip:"0391"},{label:"嘉兴Jiaxing0573",name:"嘉兴",pinyin:"jiaxing",zip:"0573"},{label:"吉林Jilin0423",name:"吉林",pinyin:"jilin",zip:"0423"},{label:"济南Jinan0531",name:"济南",pinyin:"jinan",zip:"0531"},{label:"佳木斯Jiamusi0454",name:"佳木斯",pinyin:"jiamusi",zip:"0454"},{label:"江门Jiangmen0750",name:"江门",pinyin:"jiangmen",zip:"0750"},{label:"吉安Jian0796",name:"吉安",pinyin:"jian",zip:"0796"},{label:"嘉峪关Jiayuguan0937",name:"嘉峪关",pinyin:"jiayuguan",zip:"0937"},{label:"揭阳Jieyang0663",name:"揭阳",pinyin:"jieyang",zip:"0663"},{label:"金昌Jinchang0935",name:"金昌",pinyin:"jinchang",zip:"0935"},{label:"晋城Jincheng0356",name:"晋城",pinyin:"jincheng",zip:"0356"},{label:"景德镇Jingdezhen0798",name:"景德镇",pinyin:"jingdezhen",zip:"0798"},{label:"荆门Jingmen0724",name:"荆门",pinyin:"jingmen",zip:"0724"},{label:"荆州Jingzhou0716",name:"荆州",pinyin:"jingzhou",zip:"0716"},{label:"金华Jinhua0579",name:"金华",pinyin:"jinhua",zip:"0579"},{label:"济宁Jining0537",name:"济宁",pinyin:"jining",zip:"0537"},{label:"晋中Jinzhong0354",name:"晋中",pinyin:"jinzhong",zip:"0354"},{label:"锦州Jinzhou0416",name:"锦州",pinyin:"jinzhou",zip:"0416"},{label:"九江Jiujiang0792",name:"九江",pinyin:"jiujiang",zip:"0792"},{label:"酒泉Jiuquan0937",name:"酒泉",pinyin:"jiuquan",zip:"0937"},{label:"鸡西Jixi0467",name:"鸡西",pinyin:"jixi",zip:"0467"},{label:"建德Jiande0571",name:"建德",pinyin:"jiande",zip:"0571"},{label:"江都Jiangdu0514",name:"江都",pinyin:"jiangdu",zip:"0514"},{label:"江津Jiangjin023",name:"江津",pinyin:"jiangjin",zip:"023"},{label:"将乐Jiangle0598",name:"将乐",pinyin:"jiangle",zip:"0598"},{label:"江山Jiangshan0570",name:"江山",pinyin:"jiangshan",zip:"0570"},{label:"姜堰Jiangyan0523",name:"姜堰",pinyin:"jiangyan",zip:"0523"},{label:"江阴Jiangyin0510",name:"江阴",pinyin:"jiangyin",zip:"0510"},{label:"建湖Jianhu0515",name:"建湖",pinyin:"jianhu",zip:"0515"},{label:"建宁Jianning0598",name:"建宁",pinyin:"jianning",zip:"0598"},{label:"建瓯Jianou0599",name:"建瓯",pinyin:"jianou",zip:"0599"},{label:"建阳Jianyang0599",name:"建阳",pinyin:"jianyang",zip:"0599"},{label:"吉安Jian0796",name:"吉安",pinyin:"jian",zip:"0796"},{label:"蛟河Jiaohe0423",name:"蛟河",pinyin:"jiaohe",zip:"0423"},{label:"蕉岭Jiaoling0753",name:"蕉岭",pinyin:"jiaoling",zip:"0753"},{label:"胶南Jiaonan0532",name:"胶南",pinyin:"jiaonan",zip:"0532"},{label:"胶州Jiaozhou0532",name:"胶州",pinyin:"jiaozhou",zip:"0532"},{label:"嘉善Jiashan0573",name:"嘉善",pinyin:"jiashan",zip:"0573"},{label:"嘉祥Jiaxiang0537",name:"嘉祥",pinyin:"jiaxiang",zip:"0537"},{label:"揭东Jiedong0663",name:"揭东",pinyin:"jiedong",zip:"0663"},{label:"界首Jieshou0558",name:"界首",pinyin:"jieshou",zip:"0558"},{label:"揭西Jiexi0663",name:"揭西",pinyin:"jiexi",zip:"0663"},{label:"即墨Jimo0532",name:"即墨",pinyin:"jimo",zip:"0532"},{label:"靖安Jingan0795",name:"靖安",pinyin:"jingan",zip:"0795"},{label:"旌德Jingde0563",name:"旌德",pinyin:"jingde",zip:"0563"},{label:"井冈山Jinggangshan0796",name:"井冈山",pinyin:"jinggangshan",zip:"0796"},{label:"靖江Jingjiang0523",name:"靖江",pinyin:"jingjiang",zip:"0523"},{label:"景宁Jingning0578",name:"景宁",pinyin:"jingning",zip:"0578"},{label:"泾县Jingxian0563",name:"泾县",pinyin:"jingxian",zip:"0563"},{label:"井陉Jingxing0311",name:"井陉",pinyin:"jingxing",zip:"0311"},{label:"金湖Jinhu0517",name:"金湖",pinyin:"jinhu",zip:"0517"},{label:"晋江Jinjiang0595",name:"晋江",pinyin:"jinjiang",zip:"0595"},{label:"金门Jinmen0595",name:"金门",pinyin:"jinmen",zip:"0595"},{label:"晋宁Jinning0871",name:"晋宁",pinyin:"jinning",zip:"0871"},{label:"金坛Jintan0519",name:"金坛",pinyin:"jintan",zip:"0519"},{label:"金堂Jintang028",name:"金堂",pinyin:"jintang",zip:"028"},{label:"进贤Jinxian0791",name:"进贤",pinyin:"jinxian",zip:"0791"},{label:"金溪Jinxi0794",name:"金溪",pinyin:"jinxi",zip:"0794"},{label:"金乡Jinxiang0537",name:"金乡",pinyin:"jinxiang",zip:"0537"},{label:"缙云Jinyun0578",name:"缙云",pinyin:"jinyun",zip:"0578"},{label:"金寨Jinzhai0564",name:"金寨",pinyin:"jinzhai",zip:"0564"},{label:"晋州Jinzhou0311",name:"晋州",pinyin:"jinzhou",zip:"0311"},{label:"吉水Jishui0796",name:"吉水",pinyin:"jishui",zip:"0796"},{label:"九江Jiujiang0792",name:"九江",pinyin:"jiujiang",zip:"0792"},{label:"九台Jiutai0431",name:"九台",pinyin:"jiutai",zip:"0431"},{label:"绩溪Jixi0563",name:"绩溪",pinyin:"jixi",zip:"0563"},{label:"济阳Jiyang0531",name:"济阳",pinyin:"jiyang",zip:"0531"},{label:"济源Jiyuan0391",name:"济源",pinyin:"jiyuan",zip:"0391"},{label:"鄄城Juancheng0530",name:"鄄城",pinyin:"juancheng",zip:"0530"},{label:"莒南Junan0539",name:"莒南",pinyin:"junan",zip:"0539"},{label:"句容Jurong0511",name:"句容",pinyin:"jurong",zip:"0511"},{label:"莒县Juxian0633",name:"莒县",pinyin:"juxian",zip:"0633"},{label:"巨野Juye0530",name:"巨野",pinyin:"juye",zip:"0530"}]},{group:"k",cities:[{label:"昆明Kunming0871",name:"昆明",pinyin:"kunming",zip:"0871"},{label:"开封Kaifeng0378",name:"开封",pinyin:"kaifeng",zip:"0378"},{label:"喀什地Kashidi0998",name:"喀什地",pinyin:"kashidi",zip:"0998"},{label:"克拉玛依Kelamayi0990",name:"克拉玛依",pinyin:"kelamayi",zip:"0990"},{label:"克孜勒Kezile0908",name:"克孜勒",pinyin:"kezile",zip:"0908"},{label:"开化Kaihua0570",name:"开化",pinyin:"kaihua",zip:"0570"},{label:"开平Kaiping0750",name:"开平",pinyin:"kaiping",zip:"0750"},{label:"开县Kaixian023",name:"开县",pinyin:"kaixian",zip:"023"},{label:"开阳Kaiyang0851",name:"开阳",pinyin:"kaiyang",zip:"0851"},{label:"康平Kangping024",name:"康平",pinyin:"kangping",zip:"024"},{label:"垦利Kenli0546",name:"垦利",pinyin:"kenli",zip:"0546"},{label:"昆山Kunshan0512",name:"昆山",pinyin:"kunshan",zip:"0512"}]},{group:"l",cities:[{label:"兰州Lanzhou0931",name:"兰州",pinyin:"lanzhou",zip:"0931"},{label:"柳州Liuzhou0772",name:"柳州",pinyin:"liuzhou",zip:"0772"},{label:"洛阳Luoyang0379",name:"洛阳",pinyin:"luoyang",zip:"0379"},{label:"来宾Laibin0772",name:"来宾",pinyin:"laibin",zip:"0772"},{label:"莱芜Laiwu0634",name:"莱芜",pinyin:"laiwu",zip:"0634"},{label:"廊坊Langfang0316",name:"廊坊",pinyin:"langfang",zip:"0316"},{label:"拉萨Lasa0891",name:"拉萨",pinyin:"lasa",zip:"0891"},{label:"乐山Leshan0833",name:"乐山",pinyin:"leshan",zip:"0833"},{label:"凉山Liangshan0834",name:"凉山",pinyin:"liangshan",zip:"0834"},{label:"连云港Lianyungang0518",name:"连云港",pinyin:"lianyungang",zip:"0518"},{label:"聊城Liaocheng0635",name:"聊城",pinyin:"liaocheng",zip:"0635"},{label:"辽阳Liaoyang0419",name:"辽阳",pinyin:"liaoyang",zip:"0419"},{label:"辽源Liaoyuan0437",name:"辽源",pinyin:"liaoyuan",zip:"0437"},{label:"丽江Lijiang0888",name:"丽江",pinyin:"lijiang",zip:"0888"},{label:"临沧Lincang0883",name:"临沧",pinyin:"lincang",zip:"0883"},{label:"临汾Linfen0357",name:"临汾",pinyin:"linfen",zip:"0357"},{label:"临夏Linxia0930",name:"临夏",pinyin:"linxia",zip:"0930"},{label:"临沂Linyi0539",name:"临沂",pinyin:"linyi",zip:"0539"},{label:"林芝Linzhi0894",name:"林芝",pinyin:"linzhi",zip:"0894"},{label:"丽水Lishui0578",name:"丽水",pinyin:"lishui",zip:"0578"},{label:"六安Liuan0564",name:"六安",pinyin:"liuan",zip:"0564"},{label:"六盘水Liupanshui0858",name:"六盘水",pinyin:"liupanshui",zip:"0858"},{label:"陇南Longnan0939",name:"陇南",pinyin:"longnan",zip:"0939"},{label:"龙岩Longyan0597",name:"龙岩",pinyin:"longyan",zip:"0597"},{label:"娄底Loudi0738",name:"娄底",pinyin:"loudi",zip:"0738"},{label:"漯河Luohe0395",name:"漯河",pinyin:"luohe",zip:"0395"},{label:"泸州Luzhou0830",name:"泸州",pinyin:"luzhou",zip:"0830"},{label:"吕梁Lvliang0358",name:"吕梁",pinyin:"lvliang",zip:"0358"},{label:"来安Laian0550",name:"来安",pinyin:"laian",zip:"0550"},{label:"莱西Laixi0532",name:"莱西",pinyin:"laixi",zip:"0532"},{label:"莱阳Laiyang0535",name:"莱阳",pinyin:"laiyang",zip:"0535"},{label:"莱州Laizhou0535",name:"莱州",pinyin:"laizhou",zip:"0535"},{label:"郎溪Langxi0563",name:"郎溪",pinyin:"langxi",zip:"0563"},{label:"蓝田Lantian029",name:"蓝田",pinyin:"lantian",zip:"029"},{label:"兰溪Lanxi0579",name:"兰溪",pinyin:"lanxi",zip:"0579"},{label:"乐安Lean0794",name:"乐安",pinyin:"lean",zip:"0794"},{label:"乐昌Lechang0751",name:"乐昌",pinyin:"lechang",zip:"0751"},{label:"雷州Leizhou0759",name:"雷州",pinyin:"leizhou",zip:"0759"},{label:"乐陵Leling0534",name:"乐陵",pinyin:"leling",zip:"0534"},{label:"乐平Leping0798",name:"乐平",pinyin:"leping",zip:"0798"},{label:"乐清Leqing0577",name:"乐清",pinyin:"leqing",zip:"0577"},{label:"乐亭Leting0315",name:"乐亭",pinyin:"leting",zip:"0315"},{label:"连城Liancheng0597",name:"连城",pinyin:"liancheng",zip:"0597"},{label:"梁平Liangping023",name:"梁平",pinyin:"liangping",zip:"023"},{label:"梁山Liangshan0537",name:"梁山",pinyin:"liangshan",zip:"0537"},{label:"莲花Lianhua0799",name:"莲花",pinyin:"lianhua",zip:"0799"},{label:"连江Lianjiang0591",name:"连江",pinyin:"lianjiang",zip:"0591"},{label:"廉江Lianjiang0759",name:"廉江",pinyin:"lianjiang",zip:"0759"},{label:"连南Liannan0763",name:"连南",pinyin:"liannan",zip:"0763"},{label:"连平Lianping0762",name:"连平",pinyin:"lianping",zip:"0762"},{label:"连山Lianshan0763",name:"连山",pinyin:"lianshan",zip:"0763"},{label:"涟水Lianshui0517",name:"涟水",pinyin:"lianshui",zip:"0517"},{label:"连州Lianzhou0763",name:"连州",pinyin:"lianzhou",zip:"0763"},{label:"辽中Liaozhong024",name:"辽中",pinyin:"liaozhong",zip:"024"},{label:"黎川Lichuan0794",name:"黎川",pinyin:"lichuan",zip:"0794"},{label:"利津Lijin0546",name:"利津",pinyin:"lijin",zip:"0546"},{label:"临安Linan0571",name:"临安",pinyin:"linan",zip:"0571"},{label:"灵璧Lingbi0557",name:"灵璧",pinyin:"lingbi",zip:"0557"},{label:"灵寿Lingshou0311",name:"灵寿",pinyin:"lingshou",zip:"0311"},{label:"陵县Lingxian0534",name:"陵县",pinyin:"lingxian",zip:"0534"},{label:"临海Linhai0576",name:"临海",pinyin:"linhai",zip:"0576"},{label:"临清Linqing0635",name:"临清",pinyin:"linqing",zip:"0635"},{label:"临泉Linquan0558",name:"临泉",pinyin:"linquan",zip:"0558"},{label:"临朐Linqu0536",name:"临朐",pinyin:"linqu",zip:"0536"},{label:"临沭Linshu0539",name:"临沭",pinyin:"linshu",zip:"0539"},{label:"临邑Linyi0534",name:"临邑",pinyin:"linyi",zip:"0534"},{label:"溧水Lishui025",name:"溧水",pinyin:"lishui",zip:"025"},{label:"柳城Liucheng0772",name:"柳城",pinyin:"liucheng",zip:"0772"},{label:"柳江Liujiang0772",name:"柳江",pinyin:"liujiang",zip:"0772"},{label:"浏阳Liuyang0731",name:"浏阳",pinyin:"liuyang",zip:"0731"},{label:"利辛Lixin0558",name:"利辛",pinyin:"lixin",zip:"0558"},{label:"溧阳Liyang0519",name:"溧阳",pinyin:"liyang",zip:"0519"},{label:"隆安Longan0771",name:"隆安",pinyin:"longan",zip:"0771"},{label:"龙川Longchuan0762",name:"龙川",pinyin:"longchuan",zip:"0762"},{label:"龙海Longhai0596",name:"龙海",pinyin:"longhai",zip:"0596"},{label:"龙口Longkou0535",name:"龙口",pinyin:"longkou",zip:"0535"},{label:"龙门Longmen0752",name:"龙门",pinyin:"longmen",zip:"0752"},{label:"龙南Longnan0797",name:"龙南",pinyin:"longnan",zip:"0797"},{label:"龙泉Longquan0578",name:"龙泉",pinyin:"longquan",zip:"0578"},{label:"龙游Longyou0570",name:"龙游",pinyin:"longyou",zip:"0570"},{label:"栾城Luancheng0311",name:"栾城",pinyin:"luancheng",zip:"0311"},{label:"栾川Luanchuan0379",name:"栾川",pinyin:"luanchuan",zip:"0379"},{label:"滦南Luannan0315",name:"滦南",pinyin:"luannan",zip:"0315"},{label:"滦县Luanxian0315",name:"滦县",pinyin:"luanxian",zip:"0315"},{label:"陆丰Lufeng0660",name:"陆丰",pinyin:"lufeng",zip:"0660"},{label:"陆河Luhe0660",name:"陆河",pinyin:"luhe",zip:"0660"},{label:"庐江Lujiang0565",name:"庐江",pinyin:"lujiang",zip:"0565"},{label:"罗定Luoding0766",name:"罗定",pinyin:"luoding",zip:"0766"},{label:"洛宁Luoning0379",name:"洛宁",pinyin:"luoning",zip:"0379"},{label:"罗源Luoyuan0591",name:"罗源",pinyin:"luoyuan",zip:"0591"},{label:"鹿泉Luquan0311",name:"鹿泉",pinyin:"luquan",zip:"0311"},{label:"禄劝Luquan0871",name:"禄劝",pinyin:"luquan",zip:"0871"},{label:"芦溪Luxi0799",name:"芦溪",pinyin:"luxi",zip:"0799"},{label:"鹿寨Luzhai0772",name:"鹿寨",pinyin:"luzhai",zip:"0772"}]},{group:"m",cities:[{label:"马鞍山Maanshan0555",name:"马鞍山",pinyin:"maanshan",zip:"0555"},{label:"茂名Maoming0668",name:"茂名",pinyin:"maoming",zip:"0668"},{label:"眉山Meishan028",name:"眉山",pinyin:"meishan",zip:"028"},{label:"梅州Meizhou0753",name:"梅州",pinyin:"meizhou",zip:"0753"},{label:"绵阳Mianyang0816",name:"绵阳",pinyin:"mianyang",zip:"0816"},{label:"牡丹江Mudanjiang0453",name:"牡丹江",pinyin:"mudanjiang",zip:"0453"},{label:"马山Mashan0771",name:"马山",pinyin:"mashan",zip:"0771"},{label:"梅县Meixian0753",name:"梅县",pinyin:"meixian",zip:"0753"},{label:"蒙城Mengcheng0558",name:"蒙城",pinyin:"mengcheng",zip:"0558"},{label:"孟津Mengjin0379",name:"孟津",pinyin:"mengjin",zip:"0379"},{label:"蒙阴Mengyin0539",name:"蒙阴",pinyin:"mengyin",zip:"0539"},{label:"孟州Mengzhou0391",name:"孟州",pinyin:"mengzhou",zip:"0391"},{label:"明光Mingguang0550",name:"明光",pinyin:"mingguang",zip:"0550"},{label:"明溪Mingxi0598",name:"明溪",pinyin:"mingxi",zip:"0598"},{label:"闽侯Minhou0591",name:"闽侯",pinyin:"minhou",zip:"0591"},{label:"闽清Minqing0591",name:"闽清",pinyin:"minqing",zip:"0591"},{label:"木兰Mulan0451",name:"木兰",pinyin:"mulan",zip:"0451"}]},{group:"n",cities:[{label:"南昌Nanchang0791",name:"南昌",pinyin:"nanchang",zip:"0791"},{label:"南京Nanjing025",name:"南京",pinyin:"nanjing",zip:"025"},{label:"南宁Nanning0771",name:"南宁",pinyin:"nanning",zip:"0771"},{label:"南通Nantong0513",name:"南通",pinyin:"nantong",zip:"0513"},{label:"宁波Ningbo0574",name:"宁波",pinyin:"ningbo",zip:"0574"},{label:"南充Nanchong0817",name:"南充",pinyin:"nanchong",zip:"0817"},{label:"南平Nanping0599",name:"南平",pinyin:"nanping",zip:"0599"},{label:"南阳Nanyang0377",name:"南阳",pinyin:"nanyang",zip:"0377"},{label:"那曲Naqu0896",name:"那曲",pinyin:"naqu",zip:"0896"},{label:"内江Neijiang0832",name:"内江",pinyin:"neijiang",zip:"0832"},{label:"宁德Ningde0593",name:"宁德",pinyin:"ningde",zip:"0593"},{label:"怒江Nujiang0886",name:"怒江",pinyin:"nujiang",zip:"0886"},{label:"南安Nanan0595",name:"南安",pinyin:"nanan",zip:"0595"},{label:"南澳Nanao0754",name:"南澳",pinyin:"nanao",zip:"0754"},{label:"南城Nancheng0794",name:"南城",pinyin:"nancheng",zip:"0794"},{label:"南川Nanchuan023",name:"南川",pinyin:"nanchuan",zip:"023"},{label:"南丰Nanfeng0794",name:"南丰",pinyin:"nanfeng",zip:"0794"},{label:"南靖Nanjing0596",name:"南靖",pinyin:"nanjing",zip:"0596"},{label:"南康Nankang0797",name:"南康",pinyin:"nankang",zip:"0797"},{label:"南陵Nanling0553",name:"南陵",pinyin:"nanling",zip:"0553"},{label:"南雄Nanxiong0751",name:"南雄",pinyin:"nanxiong",zip:"0751"},{label:"宁都Ningdu0797",name:"宁都",pinyin:"ningdu",zip:"0797"},{label:"宁国Ningguo0563",name:"宁国",pinyin:"ningguo",zip:"0563"},{label:"宁海Ninghai0574",name:"宁海",pinyin:"ninghai",zip:"0574"},{label:"宁化Ninghua0598",name:"宁化",pinyin:"ninghua",zip:"0598"},{label:"宁津Ningjin0534",name:"宁津",pinyin:"ningjin",zip:"0534"},{label:"宁乡Ningxiang0731",name:"宁乡",pinyin:"ningxiang",zip:"0731"},{label:"宁阳Ningyang0538",name:"宁阳",pinyin:"ningyang",zip:"0538"},{label:"农安Nongan0431",name:"农安",pinyin:"nongan",zip:"0431"}]},{group:"p",cities:[{label:"盘锦Panjin0427",name:"盘锦",pinyin:"panjin",zip:"0427"},{label:"攀枝花Panzhihua0812",name:"攀枝花",pinyin:"panzhihua",zip:"0812"},{label:"平顶山Pingdingshan0375",name:"平顶山",pinyin:"pingdingshan",zip:"0375"},{label:"平凉Pingliang0933",name:"平凉",pinyin:"pingliang",zip:"0933"},{label:"萍乡Pingxiang0799",name:"萍乡",pinyin:"pingxiang",zip:"0799"},{label:"普洱Puer0879",name:"普洱",pinyin:"puer",zip:"0879"},{label:"莆田Putian0594",name:"莆田",pinyin:"putian",zip:"0594"},{label:"濮阳Puyang0393",name:"濮阳",pinyin:"puyang",zip:"0393"},{label:"磐安Panan0579",name:"磐安",pinyin:"panan",zip:"0579"},{label:"磐石Panshi0423",name:"磐石",pinyin:"panshi",zip:"0423"},{label:"沛县Peixian0516",name:"沛县",pinyin:"peixian",zip:"0516"},{label:"蓬莱Penglai0535",name:"蓬莱",pinyin:"penglai",zip:"0535"},{label:"彭水Pengshui023",name:"彭水",pinyin:"pengshui",zip:"023"},{label:"彭泽Pengze0792",name:"彭泽",pinyin:"pengze",zip:"0792"},{label:"彭州Pengzhou028",name:"彭州",pinyin:"pengzhou",zip:"028"},{label:"平度Pingdu0532",name:"平度",pinyin:"pingdu",zip:"0532"},{label:"平和Pinghe0596",name:"平和",pinyin:"pinghe",zip:"0596"},{label:"平湖Pinghu0573",name:"平湖",pinyin:"pinghu",zip:"0573"},{label:"屏南Pingnan0593",name:"屏南",pinyin:"pingnan",zip:"0593"},{label:"平山Pingshan0311",name:"平山",pinyin:"pingshan",zip:"0311"},{label:"平潭Pingtan0591",name:"平潭",pinyin:"pingtan",zip:"0591"},{label:"平阳Pingyang0577",name:"平阳",pinyin:"pingyang",zip:"0577"},{label:"平阴Pingyin0531",name:"平阴",pinyin:"pingyin",zip:"0531"},{label:"平邑Pingyi0539",name:"平邑",pinyin:"pingyi",zip:"0539"},{label:"平原Pingyuan0534",name:"平原",pinyin:"pingyuan",zip:"0534"},{label:"平远Pingyuan0753",name:"平远",pinyin:"pingyuan",zip:"0753"},{label:"郫县Pixian028",name:"郫县",pinyin:"pixian",zip:"028"},{label:"邳州Pizhou0516",name:"邳州",pinyin:"pizhou",zip:"0516"},{label:"鄱阳Poyang0793",name:"鄱阳",pinyin:"poyang",zip:"0793"},{label:"浦城Pucheng0599",name:"浦城",pinyin:"pucheng",zip:"0599"},{label:"浦江Pujiang0579",name:"浦江",pinyin:"pujiang",zip:"0579"},{label:"蒲江Pujiang028",name:"蒲江",pinyin:"pujiang",zip:"028"},{label:"普兰店Pulandian0411",name:"普兰店",pinyin:"pulandian",zip:"0411"},{label:"普宁Puning0663",name:"普宁",pinyin:"puning",zip:"0663"}]},{group:"q",cities:[{label:"青岛Qingdao0532",name:"青岛",pinyin:"qingdao",zip:"0532"},{label:"泉州Quanzhou0595",name:"泉州",pinyin:"quanzhou",zip:"0595"},{label:"黔东Qiandong0855",name:"黔东",pinyin:"qiandong",zip:"0855"},{label:"黔南Qiannan0854",name:"黔南",pinyin:"qiannan",zip:"0854"},{label:"黔西南Qianxinan0859",name:"黔西南",pinyin:"qianxinan",zip:"0859"},{label:"庆阳Qingyang0934",name:"庆阳",pinyin:"qingyang",zip:"0934"},{label:"清远Qingyuan0763",name:"清远",pinyin:"qingyuan",zip:"0763"},{label:"秦皇岛Qinhuangdao0335",name:"秦皇岛",pinyin:"qinhuangdao",zip:"0335"},{label:"钦州Qinzhou0777",name:"钦州",pinyin:"qinzhou",zip:"0777"},{label:"齐齐哈尔Qiqihaer0452",name:"齐齐哈尔",pinyin:"qiqihaer",zip:"0452"},{label:"七台河Qitaihe0464",name:"七台河",pinyin:"qitaihe",zip:"0464"},{label:"曲靖Qujing0874",name:"曲靖",pinyin:"qujing",zip:"0874"},{label:"衢州Quzhou0570",name:"衢州",pinyin:"quzhou",zip:"0570"},{label:"迁安Qianan0315",name:"迁安",pinyin:"qianan",zip:"0315"},{label:"潜山Qianshan0556",name:"潜山",pinyin:"qianshan",zip:"0556"},{label:"铅山Qianshan0793",name:"铅山",pinyin:"qianshan",zip:"0793"},{label:"迁西Qianxi0315",name:"迁西",pinyin:"qianxi",zip:"0315"},{label:"启东Qidong0513",name:"启东",pinyin:"qidong",zip:"0513"},{label:"齐河Qihe0534",name:"齐河",pinyin:"qihe",zip:"0534"},{label:"綦江Qijiang023",name:"綦江",pinyin:"qijiang",zip:"023"},{label:"祁门Qimen0559",name:"祁门",pinyin:"qimen",zip:"0559"},{label:"清流Qingliu0598",name:"清流",pinyin:"qingliu",zip:"0598"},{label:"青田Qingtian0578",name:"青田",pinyin:"qingtian",zip:"0578"},{label:"清新Qingxin0763",name:"清新",pinyin:"qingxin",zip:"0763"},{label:"青阳Qingyang0566",name:"青阳",pinyin:"qingyang",zip:"0566"},{label:"庆元Qingyuan0578",name:"庆元",pinyin:"qingyuan",zip:"0578"},{label:"庆云Qingyun0534",name:"庆云",pinyin:"qingyun",zip:"0534"},{label:"清镇Qingzhen0851",name:"清镇",pinyin:"qingzhen",zip:"0851"},{label:"青州Qingzhou0536",name:"青州",pinyin:"qingzhou",zip:"0536"},{label:"沁阳Qinyang0391",name:"沁阳",pinyin:"qinyang",zip:"0391"},{label:"邛崃Qionglai028",name:"邛崃",pinyin:"qionglai",zip:"028"},{label:"栖霞Qixia0535",name:"栖霞",pinyin:"qixia",zip:"0535"},{label:"全椒Quanjiao0550",name:"全椒",pinyin:"quanjiao",zip:"0550"},{label:"全南Quannan0797",name:"全南",pinyin:"quannan",zip:"0797"},{label:"曲阜Qufu0537",name:"曲阜",pinyin:"qufu",zip:"0537"},{label:"曲江Qujiang0751",name:"曲江",pinyin:"qujiang",zip:"0751"}]},{group:"r",cities:[{label:"日喀则Rikaze0892",name:"日喀则",pinyin:"rikaze",zip:"0892"},{label:"日照Rizhao0633",name:"日照",pinyin:"rizhao",zip:"0633"},{label:"饶平Raoping0768",name:"饶平",pinyin:"raoping",zip:"0768"},{label:"仁化Renhua0751",name:"仁化",pinyin:"renhua",zip:"0751"},{label:"融安Rongan0772",name:"融安",pinyin:"rongan",zip:"0772"},{label:"荣昌Rongchang023",name:"荣昌",pinyin:"rongchang",zip:"023"},{label:"荣成Rongcheng0631",name:"荣成",pinyin:"rongcheng",zip:"0631"},{label:"融水Rongshui0772",name:"融水",pinyin:"rongshui",zip:"0772"},{label:"如东Rudong0513",name:"如东",pinyin:"rudong",zip:"0513"},{label:"如皋Rugao0513",name:"如皋",pinyin:"rugao",zip:"0513"},{label:"瑞安Ruian0577",name:"瑞安",pinyin:"ruian",zip:"0577"},{label:"瑞昌Ruichang0792",name:"瑞昌",pinyin:"ruichang",zip:"0792"},{label:"瑞金Ruijin0797",name:"瑞金",pinyin:"ruijin",zip:"0797"},{label:"乳山Rushan0631",name:"乳山",pinyin:"rushan",zip:"0631"},{label:"汝阳Ruyang0379",name:"汝阳",pinyin:"ruyang",zip:"0379"},{label:"乳源Ruyuan0751",name:"乳源",pinyin:"ruyuan",zip:"0751"}]},{group:"s",cities:[{label:"上海Shanghai021",name:"上海",pinyin:"shanghai",zip:"021"},{label:"沈阳Shenyang024",name:"沈阳",pinyin:"shenyang",zip:"024"},{label:"深圳Shenzhen0755",name:"深圳",pinyin:"shenzhen",zip:"0755"},{label:"石家庄Shijiazhuang0311",name:"石家庄",pinyin:"shijiazhuang",zip:"0311"},{label:"苏州Suzhou0512",name:"苏州",pinyin:"suzhou",zip:"0512"},{label:"三门峡Sanmenxia0398",name:"三门峡",pinyin:"sanmenxia",zip:"0398"},{label:"三明Sanming0598",name:"三明",pinyin:"sanming",zip:"0598"},{label:"三亚Sanya0899",name:"三亚",pinyin:"sanya",zip:"0899"},{label:"商洛Shangluo0914",name:"商洛",pinyin:"shangluo",zip:"0914"},{label:"商丘Shangqiu0370",name:"商丘",pinyin:"shangqiu",zip:"0370"},{label:"上饶Shangrao0793",name:"上饶",pinyin:"shangrao",zip:"0793"},{label:"山南Shannan0893",name:"山南",pinyin:"shannan",zip:"0893"},{label:"汕头Shantou0754",name:"汕头",pinyin:"shantou",zip:"0754"},{label:"汕尾Shanwei0660",name:"汕尾",pinyin:"shanwei",zip:"0660"},{label:"韶关Shaoguan0751",name:"韶关",pinyin:"shaoguan",zip:"0751"},{label:"绍兴Shaoxing0575",name:"绍兴",pinyin:"shaoxing",zip:"0575"},{label:"邵阳Shaoyang0739",name:"邵阳",pinyin:"shaoyang",zip:"0739"},{label:"十堰Shiyan0719",name:"十堰",pinyin:"shiyan",zip:"0719"},{label:"石嘴山Shizuishan0952",name:"石嘴山",pinyin:"shizuishan",zip:"0952"},{label:"双鸭山Shuangyashan0469",name:"双鸭山",pinyin:"shuangyashan",zip:"0469"},{label:"朔州Shuozhou0349",name:"朔州",pinyin:"shuozhou",zip:"0349"},{label:"四平Siping0434",name:"四平",pinyin:"siping",zip:"0434"},{label:"松原Songyuan0438",name:"松原",pinyin:"songyuan",zip:"0438"},{label:"绥化Suihua0455",name:"绥化",pinyin:"suihua",zip:"0455"},{label:"遂宁Suining0825",name:"遂宁",pinyin:"suining",zip:"0825"},{label:"随州Suizhou0722",name:"随州",pinyin:"suizhou",zip:"0722"},{label:"宿迁Suqian0527",name:"宿迁",pinyin:"suqian",zip:"0527"},{label:"宿州Suzhou0557",name:"宿州",pinyin:"suzhou",zip:"0557"},{label:"三江Sanjiang0772",name:"三江",pinyin:"sanjiang",zip:"0772"},{label:"三门Sanmen0576",name:"三门",pinyin:"sanmen",zip:"0576"},{label:"诏安Saoan0596",name:"诏安",pinyin:"saoan",zip:"0596"},{label:"上高Shanggao0795",name:"上高",pinyin:"shanggao",zip:"0795"},{label:"上杭Shanghang0597",name:"上杭",pinyin:"shanghang",zip:"0597"},{label:"商河Shanghe0531",name:"商河",pinyin:"shanghe",zip:"0531"},{label:"上栗Shangli0799",name:"上栗",pinyin:"shangli",zip:"0799"},{label:"上林Shanglin0771",name:"上林",pinyin:"shanglin",zip:"0771"},{label:"上饶Shangrao0793",name:"上饶",pinyin:"shangrao",zip:"0793"},{label:"上犹Shangyou0797",name:"上犹",pinyin:"shangyou",zip:"0797"},{label:"上虞Shangyu0575",name:"上虞",pinyin:"shangyu",zip:"0575"},{label:"尚志Shangzhi0451",name:"尚志",pinyin:"shangzhi",zip:"0451"},{label:"邵武Shaowu0599",name:"邵武",pinyin:"shaowu",zip:"0599"},{label:"绍兴Shaoxing0575",name:"绍兴",pinyin:"shaoxing",zip:"0575"},{label:"沙县Shaxian0598",name:"沙县",pinyin:"shaxian",zip:"0598"},{label:"嵊泗Shengsi0580",name:"嵊泗",pinyin:"shengsi",zip:"0580"},{label:"嵊州Shengzhou0575",name:"嵊州",pinyin:"shengzhou",zip:"0575"},{label:"莘县Shenxian0635",name:"莘县",pinyin:"shenxian",zip:"0635"},{label:"深泽Shenze0311",name:"深泽",pinyin:"shenze",zip:"0311"},{label:"歙县Shexian0559",name:"歙县",pinyin:"shexian",zip:"0559"},{label:"射阳Sheyang0515",name:"射阳",pinyin:"sheyang",zip:"0515"},{label:"石城Shicheng0797",name:"石城",pinyin:"shicheng",zip:"0797"},{label:"石林Shilin0871",name:"石林",pinyin:"shilin",zip:"0871"},{label:"石狮Shishi0595",name:"石狮",pinyin:"shishi",zip:"0595"},{label:"石台Shitai0566",name:"石台",pinyin:"shitai",zip:"0566"},{label:"始兴Shixing0751",name:"始兴",pinyin:"shixing",zip:"0751"},{label:"石柱Shizhu023",name:"石柱",pinyin:"shizhu",zip:"023"},{label:"寿光Shouguang0536",name:"寿光",pinyin:"shouguang",zip:"0536"},{label:"寿宁Shouning0593",name:"寿宁",pinyin:"shouning",zip:"0593"},{label:"寿县Shouxian0564",name:"寿县",pinyin:"shouxian",zip:"0564"},{label:"双城Shuangcheng0451",name:"双城",pinyin:"shuangcheng",zip:"0451"},{label:"双流Shuangliu028",name:"双流",pinyin:"shuangliu",zip:"028"},{label:"舒城Shucheng0564",name:"舒城",pinyin:"shucheng",zip:"0564"},{label:"舒兰Shulan0423",name:"舒兰",pinyin:"shulan",zip:"0423"},{label:"顺昌Shunchang0599",name:"顺昌",pinyin:"shunchang",zip:"0599"},{label:"沭阳Shuyang0527",name:"沭阳",pinyin:"shuyang",zip:"0527"},{label:"泗洪Sihong0527",name:"泗洪",pinyin:"sihong",zip:"0527"},{label:"四会Sihui0758",name:"四会",pinyin:"sihui",zip:"0758"},{label:"泗水Sishui0537",name:"泗水",pinyin:"sishui",zip:"0537"},{label:"泗县Sixian0557",name:"泗县",pinyin:"sixian",zip:"0557"},{label:"泗阳Siyang0527",name:"泗阳",pinyin:"siyang",zip:"0527"},{label:"嵩明Songming0871",name:"嵩明",pinyin:"songming",zip:"0871"},{label:"松溪Songxi0599",name:"松溪",pinyin:"songxi",zip:"0599"},{label:"嵩县Songxian0379",name:"嵩县",pinyin:"songxian",zip:"0379"},{label:"松阳Songyang0578",name:"松阳",pinyin:"songyang",zip:"0578"},{label:"遂昌Suichang0578",name:"遂昌",pinyin:"suichang",zip:"0578"},{label:"遂川Suichuan0796",name:"遂川",pinyin:"suichuan",zip:"0796"},{label:"睢宁Suining0516",name:"睢宁",pinyin:"suining",zip:"0516"},{label:"濉溪Suixi0561",name:"濉溪",pinyin:"suixi",zip:"0561"},{label:"遂溪Suixi0759",name:"遂溪",pinyin:"suixi",zip:"0759"},{label:"宿松Susong0556",name:"宿松",pinyin:"susong",zip:"0556"},{label:"宿豫Suyu0527",name:"宿豫",pinyin:"suyu",zip:"0527"}]},{group:"t",cities:[{label:"天津Tianjin022",name:"天津",pinyin:"tianjin",zip:"022"},{label:"台州Taizhou0576",name:"台州",pinyin:"taizhou",zip:"0576"},{label:"唐山Tangshan0315",name:"唐山",pinyin:"tangshan",zip:"0315"},{label:"塔城地Tachengdi0901",name:"塔城地",pinyin:"tachengdi",zip:"0901"},{label:"泰安Taian0538",name:"泰安",pinyin:"taian",zip:"0538"},{label:"太原Taiyuan0351",name:"太原",pinyin:"taiyuan",zip:"0351"},{label:"泰州Taizhou0523",name:"泰州",pinyin:"taizhou",zip:"0523"},{label:"天水Tianshui0938",name:"天水",pinyin:"tianshui",zip:"0938"},{label:"铁岭Tieling0410",name:"铁岭",pinyin:"tieling",zip:"0410"},{label:"铜川Tongchuan0919",name:"铜川",pinyin:"tongchuan",zip:"0919"},{label:"通化Tonghua0435",name:"通化",pinyin:"tonghua",zip:"0435"},{label:"通辽Tongliao0475",name:"通辽",pinyin:"tongliao",zip:"0475"},{label:"铜陵Tongling0562",name:"铜陵",pinyin:"tongling",zip:"0562"},{label:"铜仁Tongren0856",name:"铜仁",pinyin:"tongren",zip:"0856"},{label:"吐鲁番Tulufan0995",name:"吐鲁番",pinyin:"tulufan",zip:"0995"},{label:"太仓Taicang0512",name:"太仓",pinyin:"taicang",zip:"0512"},{label:"太和Taihe0558",name:"太和",pinyin:"taihe",zip:"0558"},{label:"泰和Taihe0796",name:"泰和",pinyin:"taihe",zip:"0796"},{label:"太湖Taihu0556",name:"太湖",pinyin:"taihu",zip:"0556"},{label:"泰宁Taining0598",name:"泰宁",pinyin:"taining",zip:"0598"},{label:"台山Taishan0750",name:"台山",pinyin:"taishan",zip:"0750"},{label:"泰顺Taishun0577",name:"泰顺",pinyin:"taishun",zip:"0577"},{label:"泰兴Taixing0523",name:"泰兴",pinyin:"taixing",zip:"0523"},{label:"郯城Tancheng0539",name:"郯城",pinyin:"tancheng",zip:"0539"},{label:"唐海Tanghai0315",name:"唐海",pinyin:"tanghai",zip:"0315"},{label:"滕州Tengzhou0623",name:"滕州",pinyin:"tengzhou",zip:"0623"},{label:"天长Tianchang0550",name:"天长",pinyin:"tianchang",zip:"0550"},{label:"天台Tiantai0576",name:"天台",pinyin:"tiantai",zip:"0576"},{label:"桐城Tongcheng0556",name:"桐城",pinyin:"tongcheng",zip:"0556"},{label:"铜鼓Tonggu0795",name:"铜鼓",pinyin:"tonggu",zip:"0795"},{label:"通河Tonghe0451",name:"通河",pinyin:"tonghe",zip:"0451"},{label:"铜梁Tongliang023",name:"铜梁",pinyin:"tongliang",zip:"023"},{label:"铜陵Tongling0562",name:"铜陵",pinyin:"tongling",zip:"0562"},{label:"桐庐Tonglu0571",name:"桐庐",pinyin:"tonglu",zip:"0571"},{label:"潼南Tongnan023",name:"潼南",pinyin:"tongnan",zip:"023"},{label:"铜山Tongshan0516",name:"铜山",pinyin:"tongshan",zip:"0516"},{label:"桐乡Tongxiang0573",name:"桐乡",pinyin:"tongxiang",zip:"0573"},{label:"通州Tongzhou0513",name:"通州",pinyin:"tongzhou",zip:"0513"}]},{group:"w",cities:[{label:"潍坊Weifang0536",name:"潍坊",pinyin:"weifang",zip:"0536"},{label:"威海Weihai0631",name:"威海",pinyin:"weihai",zip:"0631"},{label:"武汉Wuhan027",name:"武汉",pinyin:"wuhan",zip:"027"},{label:"无锡Wuxi0510",name:"无锡",pinyin:"wuxi",zip:"0510"},{label:"渭南Weinan0913",name:"渭南",pinyin:"weinan",zip:"0913"},{label:"文山Wenshan0876",name:"文山",pinyin:"wenshan",zip:"0876"},{label:"温州Wenzhou0577",name:"温州",pinyin:"wenzhou",zip:"0577"},{label:"乌海Wuhai0473",name:"乌海",pinyin:"wuhai",zip:"0473"},{label:"芜湖Wuhu0553",name:"芜湖",pinyin:"wuhu",zip:"0553"},{label:"乌兰察布Wulanchabu0474",name:"乌兰察布",pinyin:"wulanchabu",zip:"0474"},{label:"乌鲁木齐Wulumuqi0991",name:"乌鲁木齐",pinyin:"wulumuqi",zip:"0991"},{label:"武威Wuwei0935",name:"武威",pinyin:"wuwei",zip:"0935"},{label:"吴忠Wuzhong0953",name:"吴忠",pinyin:"wuzhong",zip:"0953"},{label:"梧州Wuzhou0774",name:"梧州",pinyin:"wuzhou",zip:"0774"},{label:"瓦房店Wafangdian0411",name:"瓦房店",pinyin:"wafangdian",zip:"0411"},{label:"万安Wanan0796",name:"万安",pinyin:"wanan",zip:"0796"},{label:"望城Wangcheng0731",name:"望城",pinyin:"wangcheng",zip:"0731"},{label:"望江Wangjiang0556",name:"望江",pinyin:"wangjiang",zip:"0556"},{label:"万年Wannian0793",name:"万年",pinyin:"wannian",zip:"0793"},{label:"万载Wanzai0795",name:"万载",pinyin:"wanzai",zip:"0795"},{label:"微山Weishan0537",name:"微山",pinyin:"weishan",zip:"0537"},{label:"文成Wencheng0577",name:"文成",pinyin:"wencheng",zip:"0577"},{label:"文登Wendeng0631",name:"文登",pinyin:"wendeng",zip:"0631"},{label:"翁源Wengyuan0751",name:"翁源",pinyin:"wengyuan",zip:"0751"},{label:"温岭Wenling0576",name:"温岭",pinyin:"wenling",zip:"0576"},{label:"汶上Wenshang0537",name:"汶上",pinyin:"wenshang",zip:"0537"},{label:"温县Wenxian0391",name:"温县",pinyin:"wenxian",zip:"0391"},{label:"涡阳Woyang0558",name:"涡阳",pinyin:"woyang",zip:"0558"},{label:"五常Wuchang0451",name:"五常",pinyin:"wuchang",zip:"0451"},{label:"武城Wucheng0534",name:"武城",pinyin:"wucheng",zip:"0534"},{label:"吴川Wuchuan0759",name:"吴川",pinyin:"wuchuan",zip:"0759"},{label:"无棣Wudi0543",name:"无棣",pinyin:"wudi",zip:"0543"},{label:"五河Wuhe0552",name:"五河",pinyin:"wuhe",zip:"0552"},{label:"芜湖Wuhu0553",name:"芜湖",pinyin:"wuhu",zip:"0553"},{label:"五华Wuhua0753",name:"五华",pinyin:"wuhua",zip:"0753"},{label:"无极Wuji0311",name:"无极",pinyin:"wuji",zip:"0311"},{label:"吴江Wujiang0512",name:"吴江",pinyin:"wujiang",zip:"0512"},{label:"五莲Wulian0633",name:"五莲",pinyin:"wulian",zip:"0633"},{label:"武隆Wulong023",name:"武隆",pinyin:"wulong",zip:"023"},{label:"武鸣Wuming0771",name:"武鸣",pinyin:"wuming",zip:"0771"},{label:"武宁Wuning0792",name:"武宁",pinyin:"wuning",zip:"0792"},{label:"武平Wuping0597",name:"武平",pinyin:"wuping",zip:"0597"},{label:"巫山Wushan023",name:"巫山",pinyin:"wushan",zip:"023"},{label:"无为Wuwei0565",name:"无为",pinyin:"wuwei",zip:"0565"},{label:"巫溪Wuxi023",name:"巫溪",pinyin:"wuxi",zip:"023"},{label:"武义Wuyi0579",name:"武义",pinyin:"wuyi",zip:"0579"},{label:"武夷山Wuyishan0599",name:"武夷山",pinyin:"wuyishan",zip:"0599"},{label:"婺源Wuyuan0793",name:"婺源",pinyin:"wuyuan",zip:"0793"},{label:"武陟Wuzhi0391",name:"武陟",pinyin:"wuzhi",zip:"0391"}]},{group:"x",cities:[{label:"厦门Xiamen0592",name:"厦门",pinyin:"xiamen",zip:"0592"},{label:"西安Xian029",name:"西安",pinyin:"xian",zip:"029"},{label:"许昌Xuchang0374",name:"许昌",pinyin:"xuchang",zip:"0374"},{label:"徐州Xuzhou0516",name:"徐州",pinyin:"xuzhou",zip:"0516"},{label:"襄樊Xiangfan0710",name:"襄樊",pinyin:"xiangfan",zip:"0710"},{label:"湘潭Xiangtan0732",name:"湘潭",pinyin:"xiangtan",zip:"0732"},{label:"湘西Xiangxi0743",name:"湘西",pinyin:"xiangxi",zip:"0743"},{label:"咸宁Xianning0715",name:"咸宁",pinyin:"xianning",zip:"0715"},{label:"咸阳Xianyang029",name:"咸阳",pinyin:"xianyang",zip:"029"},{label:"孝感Xiaogan0712",name:"孝感",pinyin:"xiaogan",zip:"0712"},{label:"锡林郭勒盟Xilinguolemeng0479",name:"锡林郭勒盟",pinyin:"xilinguolemeng",zip:"0479"},{label:"兴安盟Xinganmeng0482",name:"兴安盟",pinyin:"xinganmeng",zip:"0482"},{label:"邢台Xingtai0319",name:"邢台",pinyin:"xingtai",zip:"0319"},{label:"西宁Xining0971",name:"西宁",pinyin:"xining",zip:"0971"},{label:"新乡Xinxiang0373",name:"新乡",pinyin:"xinxiang",zip:"0373"},{label:"信阳Xinyang0376",name:"信阳",pinyin:"xinyang",zip:"0376"},{label:"新余Xinyu0790",name:"新余",pinyin:"xinyu",zip:"0790"},{label:"忻州Xinzhou0350",name:"忻州",pinyin:"xinzhou",zip:"0350"},{label:"西双版纳Xishuangbanna0691",name:"西双版纳",pinyin:"xishuangbanna",zip:"0691"},{label:"宣城Xuancheng0563",name:"宣城",pinyin:"xuancheng",zip:"0563"},{label:"峡江Xiajiang0796",name:"峡江",pinyin:"xiajiang",zip:"0796"},{label:"夏津Xiajin0534",name:"夏津",pinyin:"xiajin",zip:"0534"},{label:"象山Xiangshan0574",name:"象山",pinyin:"xiangshan",zip:"0574"},{label:"响水Xiangshui0515",name:"响水",pinyin:"xiangshui",zip:"0515"},{label:"仙居Xianju0576",name:"仙居",pinyin:"xianju",zip:"0576"},{label:"仙游Xianyou0594",name:"仙游",pinyin:"xianyou",zip:"0594"},{label:"萧县Xiaoxian0557",name:"萧县",pinyin:"xiaoxian",zip:"0557"},{label:"霞浦Xiapu0593",name:"霞浦",pinyin:"xiapu",zip:"0593"},{label:"息烽Xifeng0851",name:"息烽",pinyin:"xifeng",zip:"0851"},{label:"新安Xinan0379",name:"新安",pinyin:"xinan",zip:"0379"},{label:"新昌Xinchang0575",name:"新昌",pinyin:"xinchang",zip:"0575"},{label:"信丰Xinfeng0797",name:"信丰",pinyin:"xinfeng",zip:"0797"},{label:"新丰Xinfeng0751",name:"新丰",pinyin:"xinfeng",zip:"0751"},{label:"新干Xingan0796",name:"新干",pinyin:"xingan",zip:"0796"},{label:"兴国Xingguo0797",name:"兴国",pinyin:"xingguo",zip:"0797"},{label:"兴化Xinghua0523",name:"兴化",pinyin:"xinghua",zip:"0523"},{label:"兴宁Xingning0753",name:"兴宁",pinyin:"xingning",zip:"0753"},{label:"行唐Xingtang0311",name:"行唐",pinyin:"xingtang",zip:"0311"},{label:"荥阳Xingyang0371",name:"荥阳",pinyin:"xingyang",zip:"0371"},{label:"星子Xingzi0792",name:"星子",pinyin:"xingzi",zip:"0792"},{label:"辛集Xinji0311",name:"辛集",pinyin:"xinji",zip:"0311"},{label:"新建Xinjian0791",name:"新建",pinyin:"xinjian",zip:"0791"},{label:"新津Xinjin028",name:"新津",pinyin:"xinjin",zip:"028"},{label:"新乐Xinle0311",name:"新乐",pinyin:"xinle",zip:"0311"},{label:"新民Xinmin024",name:"新民",pinyin:"xinmin",zip:"024"},{label:"新密Xinmi0371",name:"新密",pinyin:"xinmi",zip:"0371"},{label:"新泰Xintai0538",name:"新泰",pinyin:"xintai",zip:"0538"},{label:"新兴Xinxing0766",name:"新兴",pinyin:"xinxing",zip:"0766"},{label:"新沂Xinyi0516",name:"新沂",pinyin:"xinyi",zip:"0516"},{label:"信宜Xinyi0668",name:"信宜",pinyin:"xinyi",zip:"0668"},{label:"新郑Xinzheng0371",name:"新郑",pinyin:"xinzheng",zip:"0371"},{label:"休宁Xiuning0559",name:"休宁",pinyin:"xiuning",zip:"0559"},{label:"秀山Xiushan023",name:"秀山",pinyin:"xiushan",zip:"023"},{label:"修水Xiushui0792",name:"修水",pinyin:"xiushui",zip:"0792"},{label:"修文Xiuwen0851",name:"修文",pinyin:"xiuwen",zip:"0851"},{label:"修武Xiuwu0391",name:"修武",pinyin:"xiuwu",zip:"0391"},{label:"寻甸Xundian0871",name:"寻甸",pinyin:"xundian",zip:"0871"},{label:"寻乌Xunwu0797",name:"寻乌",pinyin:"xunwu",zip:"0797"},{label:"徐闻Xuwen0759",name:"徐闻",pinyin:"xuwen",zip:"0759"},{label:"盱眙Xuyi0517",name:"盱眙",pinyin:"xuyi",zip:"0517"}]},{group:"y",cities:[{label:"扬州Yangzhou0514",name:"扬州",pinyin:"yangzhou",zip:"0514"},{label:"烟台Yantai0535",name:"烟台",pinyin:"yantai",zip:"0535"},{label:"雅安Yaan0835",name:"雅安",pinyin:"yaan",zip:"0835"},{label:"延安Yanan0911",name:"延安",pinyin:"yanan",zip:"0911"},{label:"延边Yanbian0433",name:"延边",pinyin:"yanbian",zip:"0433"},{label:"盐城Yancheng0515",name:"盐城",pinyin:"yancheng",zip:"0515"},{label:"阳江Yangjiang0662",name:"阳江",pinyin:"yangjiang",zip:"0662"},{label:"阳泉Yangquan0353",name:"阳泉",pinyin:"yangquan",zip:"0353"},{label:"宜宾Yibin0831",name:"宜宾",pinyin:"yibin",zip:"0831"},{label:"宜昌Yichang0717",name:"宜昌",pinyin:"yichang",zip:"0717"},{label:"伊春Yichun0458",name:"伊春",pinyin:"yichun",zip:"0458"},{label:"宜春Yichun0795",name:"宜春",pinyin:"yichun",zip:"0795"},{label:"伊犁哈萨克Yilihasake0999",name:"伊犁哈萨克",pinyin:"yilihasake",zip:"0999"},{label:"银川Yinchuan0951",name:"银川",pinyin:"yinchuan",zip:"0951"},{label:"营口Yingkou0417",name:"营口",pinyin:"yingkou",zip:"0417"},{label:"鹰潭Yingtan0701",name:"鹰潭",pinyin:"yingtan",zip:"0701"},{label:"益阳Yiyang0737",name:"益阳",pinyin:"yiyang",zip:"0737"},{label:"永州Yongzhou0746",name:"永州",pinyin:"yongzhou",zip:"0746"},{label:"岳阳Yueyang0730",name:"岳阳",pinyin:"yueyang",zip:"0730"},{label:"玉林Yulin0775",name:"玉林",pinyin:"yulin",zip:"0775"},{label:"榆林Yulin0912",name:"榆林",pinyin:"yulin",zip:"0912"},{label:"运城Yuncheng0359",name:"运城",pinyin:"yuncheng",zip:"0359"},{label:"云浮Yunfu0766",name:"云浮",pinyin:"yunfu",zip:"0766"},{label:"玉树Yushu0976",name:"玉树",pinyin:"yushu",zip:"0976"},{label:"玉溪Yuxi0877",name:"玉溪",pinyin:"yuxi",zip:"0877"},{label:"阳春Yangchun0662",name:"阳春",pinyin:"yangchun",zip:"0662"},{label:"阳东Yangdong0662",name:"阳东",pinyin:"yangdong",zip:"0662"},{label:"阳谷Yanggu0635",name:"阳谷",pinyin:"yanggu",zip:"0635"},{label:"阳山Yangshan0763",name:"阳山",pinyin:"yangshan",zip:"0763"},{label:"阳信Yangxin0543",name:"阳信",pinyin:"yangxin",zip:"0543"},{label:"阳西Yangxi0662",name:"阳西",pinyin:"yangxi",zip:"0662"},{label:"扬中Yangzhong0511",name:"扬中",pinyin:"yangzhong",zip:"0511"},{label:"偃师Yanshi0379",name:"偃师",pinyin:"yanshi",zip:"0379"},{label:"延寿Yanshou0451",name:"延寿",pinyin:"yanshou",zip:"0451"},{label:"兖州Yanzhou0537",name:"兖州",pinyin:"yanzhou",zip:"0537"},{label:"伊川Yichuan0379",name:"伊川",pinyin:"yichuan",zip:"0379"},{label:"宜丰Yifeng0795",name:"宜丰",pinyin:"yifeng",zip:"0795"},{label:"宜黄Yihuang0794",name:"宜黄",pinyin:"yihuang",zip:"0794"},{label:"依兰Yilan0451",name:"依兰",pinyin:"yilan",zip:"0451"},{label:"宜良Yiliang0871",name:"宜良",pinyin:"yiliang",zip:"0871"},{label:"沂南Yinan0539",name:"沂南",pinyin:"yinan",zip:"0539"},{label:"英德Yingde0763",name:"英德",pinyin:"yingde",zip:"0763"},{label:"颍上Yingshang0558",name:"颍上",pinyin:"yingshang",zip:"0558"},{label:"沂水Yishui0539",name:"沂水",pinyin:"yishui",zip:"0539"},{label:"义乌Yiwu0579",name:"义乌",pinyin:"yiwu",zip:"0579"},{label:"黟县Yixian0559",name:"黟县",pinyin:"yixian",zip:"0559"},{label:"宜兴Yixing0510",name:"宜兴",pinyin:"yixing",zip:"0510"},{label:"弋阳Yiyang0793",name:"弋阳",pinyin:"yiyang",zip:"0793"},{label:"宜阳Yiyang0379",name:"宜阳",pinyin:"yiyang",zip:"0379"},{label:"沂源Yiyuan0533",name:"沂源",pinyin:"yiyuan",zip:"0533"},{label:"仪征Yizheng0514",name:"仪征",pinyin:"yizheng",zip:"0514"},{label:"永安Yongan0598",name:"永安",pinyin:"yongan",zip:"0598"},{label:"永川Yongchuan023",name:"永川",pinyin:"yongchuan",zip:"023"},{label:"永春Yongchun0595",name:"永春",pinyin:"yongchun",zip:"0595"},{label:"永登Yongdeng0931",name:"永登",pinyin:"yongdeng",zip:"0931"},{label:"永定Yongding0597",name:"永定",pinyin:"yongding",zip:"0597"},{label:"永丰Yongfeng0796",name:"永丰",pinyin:"yongfeng",zip:"0796"},{label:"永吉Yongji0423",name:"永吉",pinyin:"yongji",zip:"0423"},{label:"永嘉Yongjia0577",name:"永嘉",pinyin:"yongjia",zip:"0577"},{label:"永康Yongkang0579",name:"永康",pinyin:"yongkang",zip:"0579"},{label:"邕宁Yongning0771",name:"邕宁",pinyin:"yongning",zip:"0771"},{label:"永泰Yongtai0591",name:"永泰",pinyin:"yongtai",zip:"0591"},{label:"永新Yongxin0796",name:"永新",pinyin:"yongxin",zip:"0796"},{label:"永修Yongxiu0792",name:"永修",pinyin:"yongxiu",zip:"0792"},{label:"尤溪Youxi0598",name:"尤溪",pinyin:"youxi",zip:"0598"},{label:"酉阳Youyang023",name:"酉阳",pinyin:"youyang",zip:"023"},{label:"元氏Yuanshi0311",name:"元氏",pinyin:"yuanshi",zip:"0311"},{label:"禹城Yucheng0534",name:"禹城",pinyin:"yucheng",zip:"0534"},{label:"于都Yudu0797",name:"于都",pinyin:"yudu",zip:"0797"},{label:"岳西Yuexi0556",name:"岳西",pinyin:"yuexi",zip:"0556"},{label:"余干Yugan0793",name:"余干",pinyin:"yugan",zip:"0793"},{label:"玉环Yuhuan0576",name:"玉环",pinyin:"yuhuan",zip:"0576"},{label:"余江Yujiang0701",name:"余江",pinyin:"yujiang",zip:"0701"},{label:"郁南Yunan0766",name:"郁南",pinyin:"yunan",zip:"0766"},{label:"云安Yunan0766",name:"云安",pinyin:"yunan",zip:"0766"},{label:"郓城Yuncheng0530",name:"郓城",pinyin:"yuncheng",zip:"0530"},{label:"云和Yunhe0578",name:"云和",pinyin:"yunhe",zip:"0578"},{label:"云霄Yunxiao0596",name:"云霄",pinyin:"yunxiao",zip:"0596"},{label:"云阳Yunyang023",name:"云阳",pinyin:"yunyang",zip:"023"},{label:"玉山Yushan0793",name:"玉山",pinyin:"yushan",zip:"0793"},{label:"榆树Yushu0431",name:"榆树",pinyin:"yushu",zip:"0431"},{label:"鱼台Yutai0537",name:"鱼台",pinyin:"yutai",zip:"0537"},{label:"玉田Yutian0315",name:"玉田",pinyin:"yutian",zip:"0315"},{label:"余姚Yuyao0574",name:"余姚",pinyin:"yuyao",zip:"0574"},{label:"榆中Yuzhong0931",name:"榆中",pinyin:"yuzhong",zip:"0931"}]},{group:"z",cities:[{label:"漳州Zhangzhou0596",name:"漳州",pinyin:"zhangzhou",zip:"0596"},{label:"郑州Zhengzhou0371",name:"郑州",pinyin:"zhengzhou",zip:"0371"},{label:"中山Zhongshan0760",name:"中山",pinyin:"zhongshan",zip:"0760"},{label:"珠海Zhuhai0756",name:"珠海",pinyin:"zhuhai",zip:"0756"},{label:"枣庄Zaozhuang0623",name:"枣庄",pinyin:"zaozhuang",zip:"0623"},{label:"张家界Zhangjiajie0744",name:"张家界",pinyin:"zhangjiajie",zip:"0744"},{label:"张家口Zhangjiakou0313",name:"张家口",pinyin:"zhangjiakou",zip:"0313"},{label:"张掖Zhangye0936",name:"张掖",pinyin:"zhangye",zip:"0936"},{label:"湛江Zhanjiang0759",name:"湛江",pinyin:"zhanjiang",zip:"0759"},{label:"肇庆Zhaoqing0758",name:"肇庆",pinyin:"zhaoqing",zip:"0758"},{label:"昭通Zhaotong0870",name:"昭通",pinyin:"zhaotong",zip:"0870"},{label:"镇江Zhenjiang0511",name:"镇江",pinyin:"zhenjiang",zip:"0511"},{label:"中卫Zhongwei0955",name:"中卫",pinyin:"zhongwei",zip:"0955"},{label:"周口Zhoukou0394",name:"周口",pinyin:"zhoukou",zip:"0394"},{label:"舟山Zhoushan0580",name:"舟山",pinyin:"zhoushan",zip:"0580"},{label:"驻马店Zhumadian0396",name:"驻马店",pinyin:"zhumadian",zip:"0396"},{label:"株洲Zhuzhou0731",name:"株洲",pinyin:"zhuzhou",zip:"0731"},{label:"淄博Zibo0533",name:"淄博",pinyin:"zibo",zip:"0533"},{label:"自贡Zigong0813",name:"自贡",pinyin:"zigong",zip:"0813"},{label:"资阳Ziyang028",name:"资阳",pinyin:"ziyang",zip:"028"},{label:"遵义Zunyi0852",name:"遵义",pinyin:"zunyi",zip:"0852"},{label:"赞皇Zanhuang0311",name:"赞皇",pinyin:"zanhuang",zip:"0311"},{label:"增城Zengcheng020",name:"增城",pinyin:"zengcheng",zip:"020"},{label:"张家港Zhangjiagang0512",name:"张家港",pinyin:"zhangjiagang",zip:"0512"},{label:"漳平Zhangping0597",name:"漳平",pinyin:"zhangping",zip:"0597"},{label:"漳浦Zhangpu0596",name:"漳浦",pinyin:"zhangpu",zip:"0596"},{label:"章丘Zhangqiu0531",name:"章丘",pinyin:"zhangqiu",zip:"0531"},{label:"樟树Zhangshu0795",name:"樟树",pinyin:"zhangshu",zip:"0795"},{label:"沾化Zhanhua0543",name:"沾化",pinyin:"zhanhua",zip:"0543"},{label:"赵县Zhaoxian0311",name:"赵县",pinyin:"zhaoxian",zip:"0311"},{label:"招远Zhaoyuan0535",name:"招远",pinyin:"zhaoyuan",zip:"0535"},{label:"正定Zhengding0311",name:"正定",pinyin:"zhengding",zip:"0311"},{label:"政和Zhenghe0599",name:"政和",pinyin:"zhenghe",zip:"0599"},{label:"柘荣Zherong0593",name:"柘荣",pinyin:"zherong",zip:"0593"},{label:"中牟Zhongmou0371",name:"中牟",pinyin:"zhongmou",zip:"0371"},{label:"忠县Zhongxian023",name:"忠县",pinyin:"zhongxian",zip:"023"},{label:"周宁Zhouning0593",name:"周宁",pinyin:"zhouning",zip:"0593"},{label:"周至Zhouzhi029",name:"周至",pinyin:"zhouzhi",zip:"029"},{label:"庄河Zhuanghe0411",name:"庄河",pinyin:"zhuanghe",zip:"0411"},{label:"诸城Zhucheng0536",name:"诸城",pinyin:"zhucheng",zip:"0536"},{label:"诸暨Zhuji0575",name:"诸暨",pinyin:"zhuji",zip:"0575"},{label:"紫金Zijin0762",name:"紫金",pinyin:"zijin",zip:"0762"},{label:"资溪Zixi0794",name:"资溪",pinyin:"zixi",zip:"0794"},{label:"邹城Zoucheng0537",name:"邹城",pinyin:"zoucheng",zip:"0537"},{label:"邹平Zouping0543",name:"邹平",pinyin:"zouping",zip:"0543"},{label:"遵化Zunhua0315",name:"遵化",pinyin:"zunhua",zip:"0315"}]}],currentCity:"正在定位...",scrollTop:0,showSearch:!1,searchResult:[]}},onLoad:function(i){var a=this;n.getLocation({type:"wgs84",success:function(i){"getLocation:ok"==i.errMsg&&n.request({url:"http://api.map.baidu.com/geocoder?output=json&location=".concat(i.latitude,",%20").concat(i.longitude,"&key=37492c0ee6f924cb5e934fa08c6b1676"),success:function(n){a.currentCity=n.data.result.addressComponent.city}})}})},computed:u({},(0,l.mapState)(["modifyAddress"])),methods:u({},(0,l.mapMutations)(["setModifyAddress"]),{selectCity:function(i){this.$store.commit("setModifyAddress",{id:this.modifyAddress.id,addr:this.modifyAddress.addr,city:i}),n.navigateBack()},gotoCategory:function(i){var a=this;"#"==i&&(a.scrollTop=0);var e=n.createSelectorQuery().in(this);e.select("#"+i).fields({rect:!0,size:!0,scrollOffset:!0},function(n){a.scrollTop=a.scrollTop+n.top}).exec()},search:function(n){if(n.detail.value&&n.detail.value.length>0){this.showSearch=!0,this.searchResult=[];for(var i=0;i<this.cities.length;i++){var a;(a=this.searchResult).push.apply(a,p(this.cities[i].cities.filter(function(i){return i.pinyin.startsWith(n.detail.value)})))}console.log(e(this.searchResult.length," at components\\CitySelect.vue:4943"))}else this.showSearch=!1}})};i.default=b}).call(this,a("6e42")["default"],a("0de9")["default"])},"3c22":function(n,i,a){},"8e7a":function(n,i,a){"use strict";(function(n){a("b52e"),a("921b");e(a("66fd"));var i=e(a("98af"));function e(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,a("6e42")["createPage"])},"98af":function(n,i,a){"use strict";a.r(i);var e=a("fac3"),l=a("b1ab");for(var p in l)"default"!==p&&function(n){a.d(i,n,function(){return l[n]})}(p);a("1884");var g=a("2877"),y=Object(g["a"])(l["default"],e["a"],e["b"],!1,null,null,null);i["default"]=y.exports},b1ab:function(n,i,a){"use strict";a.r(i);var e=a("3990"),l=a.n(e);for(var p in e)"default"!==p&&function(n){a.d(i,n,function(){return e[n]})}(p);i["default"]=l.a},fac3:function(n,i,a){"use strict";var e=function(){var n=this,i=n.$createElement,a=(n._self._c,n.__map(n.cities,function(i,a){var e=i.group.toUpperCase();return{$orig:n.__get_orig(i),g0:e}})),e=n.__map(n.cities,function(i,a){var e=i.group.toUpperCase();return{$orig:n.__get_orig(i),g1:e}});n.$mp.data=Object.assign({},{$root:{l0:a,l1:e}})},l=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return l})}},[["8e7a","common/runtime","common/vendor"]]]);
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

