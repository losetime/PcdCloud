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
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
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

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
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
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'neil-modal']],[[2,'?:'],[[7],[3,'isOpen']],[1,'neil-modal--show'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'bindTouchmove']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'neil-modal__container'])
Z([[2,'>'],[[6],[[7],[3,'title']],[3,'length']],[1,0]])
Z([[4],[[5],[[5],[1,'neil-modal__content']],[[2,'?:'],[[7],[3,'content']],[1,'neil-modal--padding'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'text-align:'],[[7],[3,'align']]],[1,';']])
Z([[7],[3,'content']])
Z([[7],[3,'showCancel']])
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
Z([3,'plr10 ptb10'])
Z([[7],[3,'showJoinDialog']])
Z([[7],[3,'showExitDialog']])
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
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'kzshow']])
Z([3,'plr10 ptb20 mt88 w90 mauto list bgWhite radius4'])
Z([3,'flex bold around'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'shift']],[[4],[[5],[1,1]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'active']],[1,1]])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'shift']],[[4],[[5],[1,2]]]]]]]]]]])
Z([[2,'=='],[[7],[3,'active']],[1,2]])
Z(z[5])
Z([3,'__l'])
Z([[7],[3,'loadingType']])
Z([3,'1'])
Z(z[8])
Z(z[10])
Z(z[11])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'handleMenu']])
Z(z[0])
Z([3,'__e'])
Z([3,'handle_item data-v-43d013b2'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onJumphandle']],[[4],[[5],[[7],[3,'index']]]]]]]]]]]])
Z([3,'handle_right data-v-43d013b2'])
Z([[2,'==='],[[7],[3,'index']],[1,3]])
Z([[2,'!=='],[[7],[3,'index']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'data-v-3fb7803c'])
Z([3,'所有信息都会删除,是否确认解绑？'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[[5],[1,'onDialogEvent']],[[4],[[5],[1,'cancel']]]]]]]]]],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[[5],[1,'onDialogEvent']],[[4],[[5],[1,'confirm']]]]]]]]]]])
Z([[7],[3,'showDialog']])
Z([3,'确认解绑'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z(z[1])
Z([3,'取消'])
Z([3,'data-v-16c7c27c'])
Z([3,'确定'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^cancel']],[[4],[[5],[[4],[[5],[[5],[1,'onChangeNameDialog']],[[4],[[5],[1,'cancel']]]]]]]]]],[[4],[[5],[[5],[1,'^confirm']],[[4],[[5],[[4],[[5],[[5],[1,'onChangeNameDialog']],[[4],[[5],[1,'confirm']]]]]]]]]]])
Z([[7],[3,'showChangeNameDialog']])
Z([3,'修改昵称'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/uni-dialog/uni-dialog.wxml','./components/uni-load-more/uni-load-more.wxml','./pages/login/forgetPass.wxml','./pages/login/index.wxml','./pages/login/okCode.wxml','./pages/login/register.wxml','./pages/mine/index.wxml','./pages/mine/joinOrePool.wxml','./pages/news/index.wxml','./pages/news/newsDetail.wxml','./pages/update/index.wxml','./pages/user/apply.wxml','./pages/user/contactUs.wxml','./pages/user/extract.wxml','./pages/user/help.wxml','./pages/user/income.wxml','./pages/user/index.wxml','./pages/user/invite.wxml','./pages/user/lockWarehourse.wxml','./pages/user/okCode.wxml','./pages/user/security.wxml','./pages/user/unlockWarehourse.wxml','./pages/user/updatePass.wxml','./pages/user/userInfo.wxml','./pages/user/wallet.wxml','./pages/wallet/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_mz(z,'view',['catchtouchmove',0,'class',1,'data-event-opts',1],[],e,s,gg)
var xC=_n('view')
_rz(z,xC,'class',3,e,s,gg)
var oD=_v()
_(xC,oD)
if(_oz(z,4,e,s,gg)){oD.wxVkey=1
}
var cF=_mz(z,'view',['class',5,'style',1],[],e,s,gg)
var hG=_v()
_(cF,hG)
if(_oz(z,7,e,s,gg)){hG.wxVkey=1
}
else{hG.wxVkey=2
var oH=_n('slot')
_(hG,oH)
}
hG.wxXCkey=1
_(xC,cF)
var fE=_v()
_(xC,fE)
if(_oz(z,8,e,s,gg)){fE.wxVkey=1
}
oD.wxXCkey=1
fE.wxXCkey=1
_(oB,xC)
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
var oP=_n('view')
_rz(z,oP,'class',0,e,s,gg)
var xQ=_v()
_(oP,xQ)
if(_oz(z,1,e,s,gg)){xQ.wxVkey=1
}
var oR=_v()
_(oP,oR)
if(_oz(z,2,e,s,gg)){oR.wxVkey=1
}
xQ.wxXCkey=1
oR.wxXCkey=1
_(r,oP)
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
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var t1=_n('view')
var e2=_v()
_(t1,e2)
if(_oz(z,0,e,s,gg)){e2.wxVkey=1
}
var b3=_n('view')
_rz(z,b3,'class',1,e,s,gg)
var o6=_n('view')
_rz(z,o6,'class',2,e,s,gg)
var f7=_mz(z,'view',['bindtap',3,'data-event-opts',1],[],e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,5,e,s,gg)){c8.wxVkey=1
}
c8.wxXCkey=1
_(o6,f7)
var h9=_mz(z,'view',['bindtap',6,'data-event-opts',1],[],e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,8,e,s,gg)){o0.wxVkey=1
}
o0.wxXCkey=1
_(o6,h9)
_(b3,o6)
var o4=_v()
_(b3,o4)
if(_oz(z,9,e,s,gg)){o4.wxVkey=1
var cAB=_mz(z,'uni-load-more',['bind:__l',10,'status',1,'vueId',2],[],e,s,gg)
_(o4,cAB)
}
var x5=_v()
_(b3,x5)
if(_oz(z,13,e,s,gg)){x5.wxVkey=1
var oBB=_mz(z,'uni-load-more',['bind:__l',14,'status',1,'vueId',2],[],e,s,gg)
_(x5,oBB)
}
o4.wxXCkey=1
o4.wxXCkey=3
x5.wxXCkey=1
x5.wxXCkey=3
_(t1,b3)
e2.wxXCkey=1
_(r,t1)
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var aDB=_v()
_(r,aDB)
var tEB=function(bGB,eFB,oHB,gg){
var oJB=_mz(z,'view',['bindtap',4,'class',1,'data-event-opts',2],[],bGB,eFB,gg)
var fKB=_n('view')
_rz(z,fKB,'class',7,bGB,eFB,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,8,bGB,eFB,gg)){cLB.wxVkey=1
}
var hMB=_v()
_(fKB,hMB)
if(_oz(z,9,bGB,eFB,gg)){hMB.wxVkey=1
}
cLB.wxXCkey=1
hMB.wxXCkey=1
_(oJB,fKB)
_(oHB,oJB)
return oHB
}
aDB.wxXCkey=2
_2z(z,2,tEB,e,s,gg,aDB,'item','index','index')
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var lQB=_mz(z,'uni-dialog',['bind:__l',0,'bind:cancel',1,'bind:confirm',1,'class',2,'content',3,'data-event-opts',4,'show',5,'title',6,'vueId',7],[],e,s,gg)
_(r,lQB)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oVB=_mz(z,'uni-dialog',['bind:__l',0,'bind:cancel',1,'bind:confirm',1,'cancelText',2,'class',3,'confirmText',4,'data-event-opts',5,'show',6,'title',7,'vueId',8,'vueSlots',9],[],e,s,gg)
_(r,oVB)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
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



__wxAppCode__['app.json']={"pages":["pages/login/index","pages/login/forgetPass","pages/login/register","pages/login/okCode","pages/update/index","pages/mine/index","pages/mine/joinOrePool","pages/wallet/index","pages/news/index","pages/news/newsDetail","pages/user/index","pages/user/userInfo","pages/user/okCode","pages/user/wallet","pages/user/contactUs","pages/user/security","pages/user/updatePass","pages/user/extract","pages/user/invite","pages/user/apply","pages/user/unlockWarehourse","pages/user/lockWarehourse","pages/user/income","pages/user/help"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"backgroundColor":"#FFFFFF","color":"#999999","selectedColor":"#215EEA","list":[{"pagePath":"pages/mine/index","iconPath":"/static/img/footer/mine.png","selectedIconPath":"/static/img/footer/mine_selected.png","text":"矿场"},{"pagePath":"pages/wallet/index","iconPath":"/static/img/footer/mine.png","selectedIconPath":"/static/img/footer/mine_selected.png","text":"钱包"},{"pagePath":"pages/news/index","iconPath":"/static/img/footer/home.png","selectedIconPath":"/static/img/footer/home_selected.png","text":"资讯"},{"pagePath":"pages/user/index","iconPath":"/static/img/footer/user.png","selectedIconPath":"/static/img/footer/user_selected.png","text":"我的"}]},"networkTimeout":{"uploadFile":10000,"request":10000},"nvueCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"PcdCloud","compilerVersion":"2.2.2","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['components/uni-dialog/uni-dialog.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-dialog/uni-dialog.wxml']=$gwx('./components/uni-dialog/uni-dialog.wxml');

__wxAppCode__['components/uni-load-more/uni-load-more.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-load-more/uni-load-more.wxml']=$gwx('./components/uni-load-more/uni-load-more.wxml');

__wxAppCode__['pages/login/forgetPass.json']={"navigationBarTitleText":"忘记密码","usingComponents":{}};
__wxAppCode__['pages/login/forgetPass.wxml']=$gwx('./pages/login/forgetPass.wxml');

__wxAppCode__['pages/login/index.json']={"navigationStyle":"custom","navigationBarTitleText":"","usingComponents":{}};
__wxAppCode__['pages/login/index.wxml']=$gwx('./pages/login/index.wxml');

__wxAppCode__['pages/login/okCode.json']={"navigationBarTitleText":"绑定OK账号","usingComponents":{}};
__wxAppCode__['pages/login/okCode.wxml']=$gwx('./pages/login/okCode.wxml');

__wxAppCode__['pages/login/register.json']={"navigationBarTitleText":"注册账号","usingComponents":{}};
__wxAppCode__['pages/login/register.wxml']=$gwx('./pages/login/register.wxml');

__wxAppCode__['pages/mine/index.json']={"enablePullDownRefresh":true,"titleNView":{"buttons":[{"text":"矿场","float":"left","fontSize":"16","fontWeight":"bold"}]},"usingComponents":{}};
__wxAppCode__['pages/mine/index.wxml']=$gwx('./pages/mine/index.wxml');

__wxAppCode__['pages/mine/joinOrePool.json']={"navigationBarTitleText":"加入矿池","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/mine/joinOrePool.wxml']=$gwx('./pages/mine/joinOrePool.wxml');

__wxAppCode__['pages/news/index.json']={"navigationStyle":"custom","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/news/index.wxml']=$gwx('./pages/news/index.wxml');

__wxAppCode__['pages/news/newsDetail.json']={"enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/news/newsDetail.wxml']=$gwx('./pages/news/newsDetail.wxml');

__wxAppCode__['pages/update/index.json']={"navigationBarTitleText":"更新","usingComponents":{}};
__wxAppCode__['pages/update/index.wxml']=$gwx('./pages/update/index.wxml');

__wxAppCode__['pages/user/apply.json']={"navigationBarTitleText":"矿主申请","usingComponents":{}};
__wxAppCode__['pages/user/apply.wxml']=$gwx('./pages/user/apply.wxml');

__wxAppCode__['pages/user/contactUs.json']={"navigationBarTitleText":"联系我们","usingComponents":{}};
__wxAppCode__['pages/user/contactUs.wxml']=$gwx('./pages/user/contactUs.wxml');

__wxAppCode__['pages/user/extract.json']={"navigationBarTitleText":"提币","usingComponents":{}};
__wxAppCode__['pages/user/extract.wxml']=$gwx('./pages/user/extract.wxml');

__wxAppCode__['pages/user/help.json']={"navigationBarTitleText":"帮助","usingComponents":{}};
__wxAppCode__['pages/user/help.wxml']=$gwx('./pages/user/help.wxml');

__wxAppCode__['pages/user/income.json']={"navigationBarTitleText":"收益","usingComponents":{"uni-load-more":"/components/uni-load-more/uni-load-more"}};
__wxAppCode__['pages/user/income.wxml']=$gwx('./pages/user/income.wxml');

__wxAppCode__['pages/user/index.json']={"navigationStyle":"custom","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/user/index.wxml']=$gwx('./pages/user/index.wxml');

__wxAppCode__['pages/user/invite.json']={"navigationBarTitleText":"我的邀请码","enablePullDownRefresh":true,"usingComponents":{}};
__wxAppCode__['pages/user/invite.wxml']=$gwx('./pages/user/invite.wxml');

__wxAppCode__['pages/user/lockWarehourse.json']={"navigationBarTitleText":"锁仓","usingComponents":{}};
__wxAppCode__['pages/user/lockWarehourse.wxml']=$gwx('./pages/user/lockWarehourse.wxml');

__wxAppCode__['pages/user/okCode.json']={"navigationBarTitleText":"绑定ok账号","usingComponents":{"uni-dialog":"/components/uni-dialog/uni-dialog"}};
__wxAppCode__['pages/user/okCode.wxml']=$gwx('./pages/user/okCode.wxml');

__wxAppCode__['pages/user/security.json']={"navigationBarTitleText":"安全设置","usingComponents":{}};
__wxAppCode__['pages/user/security.wxml']=$gwx('./pages/user/security.wxml');

__wxAppCode__['pages/user/unlockWarehourse.json']={"navigationBarTitleText":"解仓","usingComponents":{}};
__wxAppCode__['pages/user/unlockWarehourse.wxml']=$gwx('./pages/user/unlockWarehourse.wxml');

__wxAppCode__['pages/user/updatePass.json']={"navigationBarTitleText":"修改密码","usingComponents":{}};
__wxAppCode__['pages/user/updatePass.wxml']=$gwx('./pages/user/updatePass.wxml');

__wxAppCode__['pages/user/userInfo.json']={"navigationBarTitleText":"修改信息","usingComponents":{"uni-dialog":"/components/uni-dialog/uni-dialog"}};
__wxAppCode__['pages/user/userInfo.wxml']=$gwx('./pages/user/userInfo.wxml');

__wxAppCode__['pages/user/wallet.json']={"navigationBarTitleText":"钱包","usingComponents":{}};
__wxAppCode__['pages/user/wallet.wxml']=$gwx('./pages/user/wallet.wxml');

__wxAppCode__['pages/wallet/index.json']={"navigationBarTitleText":"钱包","usingComponents":{}};
__wxAppCode__['pages/wallet/index.wxml']=$gwx('./pages/wallet/index.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"072f":function(n,e,t){"use strict";t.r(e);var o=t("c32a"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=a.a},"5fcc":function(n,e,t){"use strict";var o=t("ec03"),a=t.n(o);a.a},"8b19":function(n,e,t){"use strict";t.r(e);var o=t("072f");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("5fcc");var u,i,r=t("2877"),c=Object(r["a"])(o["default"],u,i,!1,null,null,null);e["default"]=c.exports},c32a:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={onLaunch:function(){plus.screen.lockOrientation("portrait-primary");var e={appid:plus.runtime.appid,version:plus.runtime.version};this.$api.getUpdate({},function(t){if("ok"==t.data.type){var o=t.data.message.app_version;n.setStorageSync("app_version",o),o!=e.version&&n.getStorage({key:"is_update_prompt",success:function(e){!1!==e.data&&n.redirectTo({url:"/pages/update/index"})}})}})},onShow:function(){console.log(t("App Show"," at App.vue:36"))},onHide:function(){console.log(t("App Hide"," at App.vue:39"))}};e.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},ec03:function(n,e,t){}},[["1b80","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function t(t) {
    for (var r, o, a = t[0], l = t[1], c = t[2], s = 0, f = []; s < a.length; s++) {
      o = a[s], u[o] && f.push(u[o][0]), u[o] = 0;
    }

    for (r in l) {
      Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
    }

    d && d(t);

    while (f.length) {
      f.shift()();
    }

    return i.push.apply(i, c || []), n();
  }

  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, o = 1; o < n.length; o++) {
        var a = n[o];
        0 !== u[a] && (r = !1);
      }

      r && (i.splice(t--, 1), e = l(l.s = n[0]));
    }

    return e;
  }

  var r = {},
      o = {
    "common/runtime": 0
  },
      u = {
    "common/runtime": 0
  },
      i = [];

  function a(e) {
    return l.p + "" + e + ".js";
  }

  function l(t) {
    if (r[t]) return r[t].exports;
    var n = r[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return e[t].call(n.exports, n, n.exports, l), n.l = !0, n.exports;
  }

  l.e = function (e) {
    var t = [],
        n = {
      "components/uni-dialog/uni-dialog": 1,
      "components/uni-load-more/uni-load-more": 1
    };
    o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise(function (t, n) {
      for (var r = ({
        "components/uni-dialog/uni-dialog": "components/uni-dialog/uni-dialog",
        "components/uni-load-more/uni-load-more": "components/uni-load-more/uni-load-more"
      }[e] || e) + ".wxss", u = l.p + r, i = document.getElementsByTagName("link"), a = 0; a < i.length; a++) {
        var c = i[a],
            s = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (s === r || s === u)) return t();
      }

      var f = document.getElementsByTagName("style");

      for (a = 0; a < f.length; a++) {
        c = f[a], s = c.getAttribute("data-href");
        if (s === r || s === u) return t();
      }

      var d = document.createElement("link");
      d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function (t) {
        var r = t && t.target && t.target.src || u,
            i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
        i.request = r, delete o[e], d.parentNode.removeChild(d), n(i);
      }, d.href = u;
      var p = document.getElementsByTagName("head")[0];
      p.appendChild(d);
    }).then(function () {
      o[e] = 0;
    }));
    var r = u[e];
    if (0 !== r) if (r) t.push(r[2]);else {
      var i = new Promise(function (t, n) {
        r = u[e] = [t, n];
      });
      t.push(r[2] = i);
      var c,
          s = document.createElement("script");
      s.charset = "utf-8", s.timeout = 120, l.nc && s.setAttribute("nonce", l.nc), s.src = a(e), c = function c(t) {
        s.onerror = s.onload = null, clearTimeout(f);
        var n = u[e];

        if (0 !== n) {
          if (n) {
            var r = t && ("load" === t.type ? "missing" : t.type),
                o = t && t.target && t.target.src,
                i = new Error("Loading chunk " + e + " failed.\n(" + r + ": " + o + ")");
            i.type = r, i.request = o, n[1](i);
          }

          u[e] = void 0;
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
  }, l.m = e, l.c = r, l.d = function (e, t, n) {
    l.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
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
    var n = Object.create(null);
    if (l.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      l.d(n, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return n;
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

  var d = s;
  n();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function r(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function i(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(i){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=r(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(i.length>1){var o=i.pop();a=i.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=i[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"0f8a":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("dbc9"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"1b80":function(t,e,n){"use strict";(function(t){n("5639");var e=o(n("66fd")),r=o(n("8b19")),i=o(n("c4b0")),a=o(n("2d6b"));function o(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){return e=e?parseInt(e):0,e<=0?Math.round(t):(t=Math.round(t*Math.pow(10,e))/Math.pow(10,e),t=Number(t).toFixed(e),t)}e.default.config.productionTip=!1,e.default.prototype.$api=i.default,e.default.prototype.$util=a.default,e.default.prototype.round=c,r.default.mpType="app";var f=new e.default(s({},r.default));t(f).$mount()}).call(this,n("6e42")["createApp"])},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,a,o,s){var u,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(t,e){return u.call(e),f(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},"2d6b":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={checkMobile:function(t){var e=/^[1][3,4,5,7,8,9][0-9]{9}$/;return!!e.test(t)}};e.default=r},"3db6":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("0ffe"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"3e14":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAgCAYAAAB3j6rJAAAFx0lEQVRYR7WXa2wUVRTHz5l7Z7tAHwGlYAG/tAFalp3dvbtAFQUSJRqjBj4YiTyMEQjGD8QHSDSCmCiKgB9AkUQNmOCDQNQgUTRaPyCCmU47226lYAiKEkRDSml3dmbnHnPrLCmPslse9+Pec/7zu+eec+5ZhGtY0Wh0GGPsfsbYvVLKCQBQAQA9iNjpuu4PoVBor2maXYORxsEYK9t4PL5A07QXAKBhIF8i+g0A1jc3N79Xqn7JIEIInYi2IOLifuIEAH8CgDq9isoYAGCFfSnlznA4/OTBgwezxYBKBcFEIvEBIj4eCHoA8D4ifkhERyoqKnqy2exQx3FqGWMqYkuJaKiylVLurqqqerSpqSl/NZiSQKLR6DJd198JhE5LKedblvXdQMKTJk26U9f1nZzz25WN4zgr2tra1l8XiBDiVgBIA8BopSmlvM+yrB+LhToSiSTLysq+V1cmpTzr+37Utu2TA/kVjYhhGEs551sREVzX3WDb9nPFIAr70Wh0ja7rq4MretayrI3XDCKE+BwAHgaArO/7RktLy9FSQVKp1DgpZRsAVEopv7Usa/a1gmiJRKIFEScTUVttbW1s165dfqkgys4wjEO6rk9RJR0KhSYPVEFXvZq6urqyqqoqGxHHu657wLbt6YOBULbJZPJLInoQAM64rjshnU6fvZJGsRxREbEQMUpEdnNzc1xV5GBghBAqYWcBwO+c8yn5fH45ANQTkepBgCr5AE4UAwEhxF4AeAAAuru6uhqOHTs2YOZfCiiEqAKADgC4jYj2E9HbjLF9AcNF5kVBDMN4hnO+QYHncrmV6XT6zVIjEovFFjPGtinf3t7eNfl8fkt5efkXiFh3icbxoiC1tbXjhg8f3k5EFUT0r5SysZTKicfjNYh4GBHHIGLedd2IbdtHFIDKvQLI2LFjsampySkKohwmTpz4Wnl5+aogpK2e582xbfv4QJExDGMMY+wzRLxD2fi+v0lKuZFz/hIiDiEi1e4L30Yi+qMkkJqamqHV1dXfcM6nBzCnAGCt53l7bNv+uwCkunA+n3+IMbYaEfvaOwC0VlRUTDt37ty7/d6qy85QEojyamxsHJHL5T5GxHsAQAu65WlEbEbE00Q0Uk0JiFgTfIWklD85jvNYR0fHCSHEIgBQ+RUGgL6KCZZiKJ4jBetUKjXa87yFmqatUeEtIWG7pZRLLMv65JKIlUkpeysrKy+8xgcOHDhfNCKRSGQc5/xpxtgTAKAewEEtKeXPvu+/Zdv27oJjLBabqWmaejZUfqhWcvKqIEKIZQCgHq1R/b5+DgBsImoHADWJnSIiBxFHIOI4IqpXTwIAjO9PjIhfu667XFWOEOI0AFRftH+l402dOrUyn89vBYB5/fbVY7fN87zdV6uYIJ+G9PT0NDLGljDG5hKRHuic8X1/CSLO1jRtYb9p7vLOGswfewDgrsD5PBGtQ8TNgx2IlX8ikZhGRK9rmjYz0MsT0VO+7+/jnIfV1RBR10VX09DQUB4Oh79CxLsDpw7f9xe1tLT8MqjEuNyYRSKRV8Lh8Iuq/BHR7+3tnZfJZHb1L50LbolE4iNEnK9aMhEdAoA5pmmqnnFDViqVWkZEm4lII6Iez/NmpNNpU4lfiIhhGAt0Xd+hfvQ876jrujM6OjpuGEThJPX19SuGDRv2hooMEbU6jjM9k8n8X77RaLSac96KiGouzWaz2ZmZTObwDQnDFUSEEJ8CwCPB1qumab7cB5JMJtcQUWG2XGdZ1qqbBaF0I5HIqFAopDqy6sJns9lsAwYzQwYAaojoL0Q0TNP852aCKO1YLPY8Y6wwUqxSf5zmImJf13McZ217e3tfZG72isfjIzVNU0PTLervCsbj8e1Bc8l1d3fHOjs7f73ZEAX9eDy+Q9O0BWr6w2QyeZSI1MTUZpqmMdiZ9HqgDcOYxTnfr/IEDcNYyTlXrXyTaZrbr0f4WnyFEIlcLpf/D+Y9cwfLvFzcAAAAAElFTkSuQmCC"},"402c":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("0095"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"40f7":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("50b4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"41c3":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("4f4e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4428:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("5a4d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},4852:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("50e8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4a79":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("c372"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"4f81":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("2053"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},5639:function(t,e,n){},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function r(t){return void 0===t||null===t}function i(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function u(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function f(t){return"[object Object]"===c.call(t)}function l(t){return"[object RegExp]"===c.call(t)}function h(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function d(t){return i(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function p(t){return null==t?"":Array.isArray(t)||f(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function v(t){var e=parseFloat(t);return isNaN(e)?t:e}function _(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}_("slot,component",!0);var g=_("key,ref,slot,slot-scope,is");function y(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function w(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,k=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),x=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),O=/\B([A-Z])/g,E=b(function(t){return t.replace(O,"-$1").toLowerCase()});function S(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function C(t,e){return t.bind(e)}var B=Function.prototype.bind?C:S;function P(t,e){e=e||0;var n=t.length-e,r=new Array(n);while(n--)r[n]=t[n+e];return r}function I(t,e){for(var n in e)t[n]=e[n];return t}function D(t){for(var e={},n=0;n<t.length;n++)t[n]&&I(e,t[n]);return e}function T(t,e,n){}var z=function(t,e,n){return!1},$=function(t){return t};function j(t,e){if(t===e)return!0;var n=u(t),r=u(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var i=Array.isArray(t),a=Array.isArray(e);if(i&&a)return t.length===e.length&&t.every(function(t,n){return j(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(i||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return j(t[n],e[n])})}catch(c){return!1}}function M(t,e){for(var n=0;n<t.length;n++)if(j(t[n],e))return n;return-1}function R(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],U=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],L={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:z,isReservedAttr:z,isUnknownElement:z,getTagNamespace:T,parsePlatformTagName:$,mustUseProp:z,async:!0,_lifecycleHooks:U},F=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function V(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function H(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var Z=new RegExp("[^"+F.source+".$_\\d]");function G(t){if(!Z.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var K,J="__proto__"in{},Q="undefined"!==typeof window,Y="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,W=Y&&WXEnvironment.platform.toLowerCase(),X=Q&&window.navigator.userAgent.toLowerCase(),q=X&&/msie|trident/.test(X),tt=(X&&X.indexOf("msie 9.0"),X&&X.indexOf("edge/")>0),et=(X&&X.indexOf("android"),X&&/iphone|ipad|ipod|ios/.test(X)||"ios"===W),nt=(X&&/chrome\/\d+/.test(X),X&&/phantomjs/.test(X),X&&X.match(/firefox\/(\d+)/),{}.watch);if(Q)try{var rt={};Object.defineProperty(rt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,rt)}catch(ni){}var it=function(){return void 0===K&&(K=!Q&&!Y&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),K},at=Q&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,ut="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=T,ft=0,lt=function(){this.id=ft++,this.subs=[]};lt.prototype.addSub=function(t){this.subs.push(t)},lt.prototype.removeSub=function(t){y(this.subs,t)},lt.prototype.depend=function(){lt.target&&lt.target.addDep(this)},lt.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},lt.target=null;var ht=[];function dt(t){ht.push(t),lt.target=t}function pt(){ht.pop(),lt.target=ht[ht.length-1]}var vt=function(t,e,n,r,i,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},_t={child:{configurable:!0}};_t.child.get=function(){return this.componentInstance},Object.defineProperties(vt.prototype,_t);var gt=function(t){void 0===t&&(t="");var e=new vt;return e.text=t,e.isComment=!0,e};function yt(t){return new vt(void 0,void 0,void 0,String(t))}function mt(t){var e=new vt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var wt=Array.prototype,bt=Object.create(wt),At=["push","pop","shift","unshift","splice","sort","reverse"];At.forEach(function(t){var e=wt[t];H(bt,t,function(){var n=[],r=arguments.length;while(r--)n[r]=arguments[r];var i,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2);break}return i&&o.observeArray(i),o.dep.notify(),a})});var kt=Object.getOwnPropertyNames(bt),xt=!0;function Ot(t){xt=t}var Et=function(t){this.value=t,this.dep=new lt,this.vmCount=0,H(t,"__ob__",this),Array.isArray(t)?(J?St(t,bt):Ct(t,bt,kt),this.observeArray(t)):this.walk(t)};function St(t,e){t.__proto__=e}function Ct(t,e,n){for(var r=0,i=n.length;r<i;r++){var a=n[r];H(t,a,e[a])}}function Bt(t,e){var n;if(u(t)&&!(t instanceof vt))return w(t,"__ob__")&&t.__ob__ instanceof Et?n=t.__ob__:xt&&!it()&&(Array.isArray(t)||f(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Et(t)),e&&n&&n.vmCount++,n}function Pt(t,e,n,r,i){var a=new lt,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,u=o&&o.set;s&&!u||2!==arguments.length||(n=t[e]);var c=!i&&Bt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return lt.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Tt(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!==e&&r!==r||s&&!u||(u?u.call(t,e):n=e,c=!i&&Bt(e),a.notify())}})}}function It(t,e,n){if(Array.isArray(t)&&h(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(Pt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function Dt(t,e){if(Array.isArray(t)&&h(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||w(t,e)&&(delete t[e],n&&n.dep.notify())}}function Tt(t){for(var e=void 0,n=0,r=t.length;n<r;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Tt(e)}Et.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Pt(t,e[n])},Et.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Bt(t[e])};var zt=L.optionMergeStrategies;function $t(t,e){if(!e)return t;for(var n,r,i,a=ut?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(r=t[n],i=e[n],w(t,n)?r!==i&&f(r)&&f(i)&&$t(r,i):It(t,n,i));return t}function jt(t,e,n){return n?function(){var r="function"===typeof e?e.call(n,n):e,i="function"===typeof t?t.call(n,n):t;return r?$t(r,i):i}:e?t?function(){return $t("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Mt(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?Rt(n):n}function Rt(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function Nt(t,e,n,r){var i=Object.create(t||null);return e?I(i,e):i}zt.data=function(t,e,n){return n?jt(t,e,n):e&&"function"!==typeof e?t:jt(t,e)},U.forEach(function(t){zt[t]=Mt}),N.forEach(function(t){zt[t+"s"]=Nt}),zt.watch=function(t,e,n,r){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};for(var a in I(i,t),e){var o=i[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),i[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return i},zt.props=zt.methods=zt.inject=zt.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return I(i,t),e&&I(i,e),i},zt.provide=jt;var Ut=function(t,e){return void 0===e?t:e};function Lt(t,e){var n=t.props;if(n){var r,i,a,o={};if(Array.isArray(n)){r=n.length;while(r--)i=n[r],"string"===typeof i&&(a=k(i),o[a]={type:null})}else if(f(n))for(var s in n)i=n[s],a=k(s),o[a]=f(i)?i:{type:i};else 0;t.props=o}}function Ft(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(f(n))for(var a in n){var o=n[a];r[a]=f(o)?I({from:a},o):{from:o}}else 0}}function Vt(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"===typeof r&&(e[n]={bind:r,update:r})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Lt(e,n),Ft(e,n),Vt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var r=0,i=e.mixins.length;r<i;r++)t=Ht(t,e.mixins[r],n);var a,o={};for(a in t)s(a);for(a in e)w(t,a)||s(a);function s(r){var i=zt[r]||Ut;o[r]=i(t[r],e[r],n,r)}return o}function Zt(t,e,n,r){if("string"===typeof n){var i=t[e];if(w(i,n))return i[n];var a=k(n);if(w(i,a))return i[a];var o=x(a);if(w(i,o))return i[o];var s=i[n]||i[a]||i[o];return s}}function Gt(t,e,n,r){var i=e[t],a=!w(n,t),o=n[t],s=Yt(Boolean,i.type);if(s>-1)if(a&&!w(i,"default"))o=!1;else if(""===o||o===E(t)){var u=Yt(String,i.type);(u<0||s<u)&&(o=!0)}if(void 0===o){o=Kt(r,i,t);var c=xt;Ot(!0),Bt(o),Ot(c)}return o}function Kt(t,e,n){if(w(e,"default")){var r=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof r&&"Function"!==Jt(e.type)?r.call(t):r}}function Jt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Qt(t,e){return Jt(t)===Jt(e)}function Yt(t,e){if(!Array.isArray(e))return Qt(e,t)?0:-1;for(var n=0,r=e.length;n<r;n++)if(Qt(e[n],t))return n;return-1}function Wt(t,e,n){dt();try{if(e){var r=e;while(r=r.$parent){var i=r.$options.errorCaptured;if(i)for(var a=0;a<i.length;a++)try{var o=!1===i[a].call(r,t,e,n);if(o)return}catch(ni){qt(ni,r,"errorCaptured hook")}}}qt(t,e,n)}finally{pt()}}function Xt(t,e,n,r,i){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&d(a)&&!a._handled&&(a.catch(function(t){return Wt(t,r,i+" (Promise/async)")}),a._handled=!0)}catch(ni){Wt(ni,r,i)}return a}function qt(t,e,n){if(L.errorHandler)try{return L.errorHandler.call(null,t,e,n)}catch(ni){ni!==t&&te(ni,null,"config.errorHandler")}te(t,e,n)}function te(t,e,n){if(!Q&&!Y||"undefined"===typeof console)throw t;console.error(t)}var ee,ne=[],re=!1;function ie(){re=!1;var t=ne.slice(0);ne.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var ae=Promise.resolve();ee=function(){ae.then(ie),et&&setTimeout(T)}}else if(q||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())ee="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var oe=1,se=new MutationObserver(ie),ue=document.createTextNode(String(oe));se.observe(ue,{characterData:!0}),ee=function(){oe=(oe+1)%2,ue.data=String(oe)}}function ce(t,e){var n;if(ne.push(function(){if(t)try{t.call(e)}catch(ni){Wt(ni,e,"nextTick")}else n&&n(e)}),re||(re=!0,ee()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var fe=new st;function le(t){he(t,fe),fe.clear()}function he(t,e){var n,r,i=Array.isArray(t);if(!(!i&&!u(t)||Object.isFrozen(t)||t instanceof vt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(i){n=t.length;while(n--)he(t[n],e)}else{r=Object.keys(t),n=r.length;while(n--)he(t[r[n]],e)}}}var de=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var r="!"===t.charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}});function pe(t,e){function n(){var t=arguments,r=n.fns;if(!Array.isArray(r))return Xt(r,null,arguments,e,"v-on handler");for(var i=r.slice(),a=0;a<i.length;a++)Xt(i[a],null,t,e,"v-on handler")}return n.fns=t,n}function ve(t,e,n,i,o,s){var u,c,f,l;for(u in t)c=t[u],f=e[u],l=de(u),r(c)||(r(f)?(r(c.fns)&&(c=t[u]=pe(c,s)),a(l.once)&&(c=t[u]=o(l.name,c,l.capture)),n(l.name,c,l.capture,l.passive,l.params)):c!==f&&(f.fns=c,t[u]=f));for(u in e)r(t[u])&&(l=de(u),i(l.name,e[u],l.capture))}function _e(t,e,n){var a=e.options.props;if(!r(a)){var o={},s=t.attrs,u=t.props;if(i(s)||i(u))for(var c in a){var f=E(c);ge(o,u,c,f,!0)||ge(o,s,c,f,!1)}return o}}function ge(t,e,n,r,a){if(i(e)){if(w(e,n))return t[n]=e[n],a||delete e[n],!0;if(w(e,r))return t[n]=e[r],a||delete e[r],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function we(t){return i(t)&&i(t.text)&&o(t.isComment)}function be(t,e){var n,o,u,c,f=[];for(n=0;n<t.length;n++)o=t[n],r(o)||"boolean"===typeof o||(u=f.length-1,c=f[u],Array.isArray(o)?o.length>0&&(o=be(o,(e||"")+"_"+n),we(o[0])&&we(c)&&(f[u]=yt(c.text+o[0].text),o.shift()),f.push.apply(f,o)):s(o)?we(c)?f[u]=yt(c.text+o):""!==o&&f.push(yt(o)):we(o)&&we(c)?f[u]=yt(c.text+o.text):(a(t._isVList)&&i(o.tag)&&r(o.key)&&i(e)&&(o.key="__vlist"+e+"_"+n+"__"),f.push(o)));return f}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function ke(t){var e=xe(t.$options.inject,t);e&&(Ot(!1),Object.keys(e).forEach(function(n){Pt(t,n,e[n])}),Ot(!0))}function xe(t,e){if(t){for(var n=Object.create(null),r=ut?Reflect.ownKeys(t):Object.keys(t),i=0;i<r.length;i++){var a=r[i];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&w(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var u=t[a].default;n[a]="function"===typeof u?u.call(e):u}else 0}}return n}}function Oe(t,e){if(!t||!t.length)return{};for(var n={},r=0,i=t.length;r<i;r++){var a=t[r],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)(n.default||(n.default=[])).push(a);else{var s=o.slot,u=n[s]||(n[s]=[]);"template"===a.tag?u.push.apply(u,a.children||[]):u.push(a)}}for(var c in n)n[c].every(Ee)&&delete n[c];return n}function Ee(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Se(t,e,r){var i,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&r&&r!==n&&s===r.$key&&!a&&!r.$hasNormal)return r;for(var u in i={},t)t[u]&&"$"!==u[0]&&(i[u]=Ce(e,u,t[u]))}else i={};for(var c in e)c in i||(i[c]=Be(e,c));return t&&Object.isExtensible(t)&&(t._normalized=i),H(i,"$stable",o),H(i,"$key",s),H(i,"$hasNormal",a),i}function Ce(t,e,n){var r=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:r,enumerable:!0,configurable:!0}),r}function Be(t,e){return function(){return t[e]}}function Pe(t,e){var n,r,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),r=0,a=t.length;r<a;r++)n[r]=e(t[r],r);else if("number"===typeof t)for(n=new Array(t),r=0;r<t;r++)n[r]=e(r+1,r);else if(u(t))if(ut&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),f=c.next();while(!f.done)n.push(e(f.value,n.length)),f=c.next()}else for(o=Object.keys(t),n=new Array(o.length),r=0,a=o.length;r<a;r++)s=o[r],n[r]=e(t[s],s,r);return i(n)||(n=[]),n._isVList=!0,n}function Ie(t,e,n,r){var i,a=this.$scopedSlots[t];a?(n=n||{},r&&(n=I(I({},r),n)),i=a(n)||e):i=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},i):i}function De(t){return Zt(this.$options,"filters",t,!0)||$}function Te(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function ze(t,e,n,r,i){var a=L.keyCodes[e]||n;return i&&r&&!L.keyCodes[e]?Te(i,r):a?Te(a,t):r?E(r)!==e:void 0}function $e(t,e,n,r,i){if(n)if(u(n)){var a;Array.isArray(n)&&(n=D(n));var o=function(o){if("class"===o||"style"===o||g(o))a=t;else{var s=t.attrs&&t.attrs.type;a=r||L.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var u=k(o),c=E(o);if(!(u in a)&&!(c in a)&&(a[o]=n[o],i)){var f=t.on||(t.on={});f["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function je(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?r:(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Re(r,"__static__"+t,!1),r)}function Me(t,e,n){return Re(t,"__once__"+e+(n?"_"+n:""),!0),t}function Re(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!==typeof t[r]&&Ne(t[r],e+"_"+r,n);else Ne(t,e,n)}function Ne(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ue(t,e){if(e)if(f(e)){var n=t.on=t.on?I({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function Le(t,e,n,r){e=e||{$stable:!n};for(var i=0;i<t.length;i++){var a=t[i];Array.isArray(a)?Le(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return r&&(e.$key=r),e}function Fe(t,e){for(var n=0;n<e.length;n+=2){var r=e[n];"string"===typeof r&&r&&(t[e[n]]=e[n+1])}return t}function Ve(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Me,t._n=v,t._s=p,t._l=Pe,t._t=Ie,t._q=j,t._i=M,t._m=je,t._f=De,t._k=ze,t._b=$e,t._v=yt,t._e=gt,t._u=Le,t._g=Ue,t._d=Fe,t._p=Ve}function Ze(t,e,r,i,o){var s,u=this,c=o.options;w(i,"_uid")?(s=Object.create(i),s._original=i):(s=i,i=i._original);var f=a(c._compiled),l=!f;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||n,this.injections=xe(c.inject,i),this.slots=function(){return u.$slots||Se(t.scopedSlots,u.$slots=Oe(r,i)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Se(t.scopedSlots,this.slots())}}),f&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Se(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,r){var a=an(s,t,e,n,r,l);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=i),a}:this._c=function(t,e,n,r){return an(s,t,e,n,r,l)}}function Ge(t,e,r,a,o){var s=t.options,u={},c=s.props;if(i(c))for(var f in c)u[f]=Gt(f,c,e||n);else i(r.attrs)&&Je(u,r.attrs),i(r.props)&&Je(u,r.props);var l=new Ze(r,u,o,a,t),h=s.render.call(null,l._c,l);if(h instanceof vt)return Ke(h,r,l.parent,s,l);if(Array.isArray(h)){for(var d=me(h)||[],p=new Array(d.length),v=0;v<d.length;v++)p[v]=Ke(d[v],r,l.parent,s,l);return p}}function Ke(t,e,n,r,i){var a=mt(t);return a.fnContext=n,a.fnOptions=r,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Je(t,e){for(var n in e)t[k(n)]=e[n]}He(Ze.prototype);var Qe={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Qe.prepatch(n,n)}else{var r=t.componentInstance=Xe(t,xn);r.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,r=e.componentInstance=t.componentInstance;Cn(r,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,Dn(n,"mounted")),t.data.keepAlive&&(e._isMounted?Hn(n):Pn(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?In(e,!0):e.$destroy())}},Ye=Object.keys(Qe);function We(t,e,n,o,s){if(!r(t)){var c=n.$options._base;if(u(t)&&(t=c.extend(t)),"function"===typeof t){var f;if(r(t.cid)&&(f=t,t=vn(f,c),void 0===t))return pn(f,e,n,o,s);e=e||{},dr(t),i(e.model)&&en(t.options,e);var l=_e(e,t,s);if(a(t.options.functional))return Ge(t,l,e,n,o);var h=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}qe(e);var p=t.options.name||s,v=new vt("vue-component-"+t.cid+(p?"-"+p:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:l,listeners:h,tag:s,children:o},f);return v}}}function Xe(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},r=t.data.inlineTemplate;return i(r)&&(n.render=r.render,n.staticRenderFns=r.staticRenderFns),new t.componentOptions.Ctor(n)}function qe(t){for(var e=t.hook||(t.hook={}),n=0;n<Ye.length;n++){var r=Ye[n],i=e[r],a=Qe[r];i===a||i&&i._merged||(e[r]=i?tn(a,i):a)}}function tn(t,e){var n=function(n,r){t(n,r),e(n,r)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",r=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[r],s=e.model.callback;i(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[r]=[s].concat(o)):a[r]=s}var nn=1,rn=2;function an(t,e,n,r,i,o){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),a(o)&&(i=rn),on(t,e,n,r,i)}function on(t,e,n,r,a){if(i(n)&&i(n.__ob__))return gt();if(i(n)&&i(n.is)&&(e=n.is),!e)return gt();var o,s,u;(Array.isArray(r)&&"function"===typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),a===rn?r=me(r):a===nn&&(r=ye(r)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||L.getTagNamespace(e),o=L.isReservedTag(e)?new vt(L.parsePlatformTagName(e),n,r,void 0,void 0,t):n&&n.pre||!i(u=Zt(t.$options,"components",e))?new vt(e,n,r,void 0,void 0,t):We(u,n,t,r,e)):o=We(e,n,t,r);return Array.isArray(o)?o:i(o)?(i(s)&&sn(o,s),i(n)&&un(n),o):gt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),i(t.children))for(var o=0,s=t.children.length;o<s;o++){var u=t.children[o];i(u.tag)&&(r(u.ns)||a(n)&&"svg"!==u.tag)&&sn(u,e,n)}}function un(t){u(t.style)&&le(t.style),u(t.class)&&le(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,r=t.$vnode=e._parentVnode,i=r&&r.context;t.$slots=Oe(e._renderChildren,i),t.$scopedSlots=n,t._c=function(e,n,r,i){return an(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return an(t,e,n,r,i,!0)};var a=r&&r.data;Pt(t,"$attrs",a&&a.attrs||n,null,!0),Pt(t,"$listeners",e._parentListeners||n,null,!0)}var fn,ln=null;function hn(t){He(t.prototype),t.prototype.$nextTick=function(t){return ce(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,i=n._parentVnode;i&&(e.$scopedSlots=Se(i.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=i;try{ln=e,t=r.call(e._renderProxy,e.$createElement)}catch(ni){Wt(ni,e,"render"),t=e._vnode}finally{ln=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof vt||(t=gt()),t.parent=i,t}}function dn(t,e){return(t.__esModule||ut&&"Module"===t[Symbol.toStringTag])&&(t=t.default),u(t)?e.extend(t):t}function pn(t,e,n,r,i){var a=gt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:r,tag:i},a}function vn(t,e){if(a(t.error)&&i(t.errorComp))return t.errorComp;if(i(t.resolved))return t.resolved;var n=ln;if(n&&i(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&i(t.loadingComp))return t.loadingComp;if(n&&!i(t.owners)){var o=t.owners=[n],s=!0,c=null,f=null;n.$on("hook:destroyed",function(){return y(o,n)});var l=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==f&&(clearTimeout(f),f=null))},h=R(function(n){t.resolved=dn(n,e),s?o.length=0:l(!0)}),p=R(function(e){i(t.errorComp)&&(t.error=!0,l(!0))}),v=t(h,p);return u(v)&&(d(v)?r(t.resolved)&&v.then(h,p):d(v.component)&&(v.component.then(h,p),i(v.error)&&(t.errorComp=dn(v.error,e)),i(v.loading)&&(t.loadingComp=dn(v.loading,e),0===v.delay?t.loading=!0:c=setTimeout(function(){c=null,r(t.resolved)&&r(t.error)&&(t.loading=!0,l(!1))},v.delay||200)),i(v.timeout)&&(f=setTimeout(function(){f=null,r(t.resolved)&&p(null)},v.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function _n(t){return t.isComment&&t.asyncFactory}function gn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(i(n)&&(i(n.componentOptions)||_n(n)))return n}}function yn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){fn.$on(t,e)}function wn(t,e){fn.$off(t,e)}function bn(t,e){var n=fn;return function r(){var i=e.apply(null,arguments);null!==i&&n.$off(t,r)}}function An(t,e,n){fn=t,ve(e,n||{},mn,wn,bn,t),fn=void 0}function kn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var r=this;if(Array.isArray(t))for(var i=0,a=t.length;i<a;i++)r.$on(t[i],n);else(r._events[t]||(r._events[t]=[])).push(n),e.test(t)&&(r._hasHookEvent=!0);return r},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,i=t.length;r<i;r++)n.$off(t[r],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?P(n):n;for(var r=P(arguments,1),i='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Xt(n[a],e,r,e,i)}return e}}var xn=null;function On(t){var e=xn;return xn=t,function(){xn=e}}function En(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Sn(t){t.prototype._update=function(t,e){var n=this,r=n.$el,i=n._vnode,a=On(n);n._vnode=t,n.$el=i?n.__patch__(i,t):n.__patch__(n.$el,t,e,!1),a(),r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Dn(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||y(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Dn(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Cn(t,e,r,i,a){var o=i.data.scopedSlots,s=t.$scopedSlots,u=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||u);if(t.$options._parentVnode=i,t.$vnode=i,t._vnode&&(t._vnode.parent=i),t.$options._renderChildren=a,t.$attrs=i.data.attrs||n,t.$listeners=r||n,e&&t.$options.props){Ot(!1);for(var f=t._props,l=t.$options._propKeys||[],h=0;h<l.length;h++){var d=l[h],p=t.$options.props;f[d]=Gt(d,p,e,t)}Ot(!0),t.$options.propsData=e}r=r||n;var v=t.$options._parentListeners;t.$options._parentListeners=r,An(t,r,v),c&&(t.$slots=Oe(a,i.context),t.$forceUpdate())}function Bn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Pn(t,e){if(e){if(t._directInactive=!1,Bn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Pn(t.$children[n]);Dn(t,"activated")}}function In(t,e){if((!e||(t._directInactive=!0,!Bn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)In(t.$children[n]);Dn(t,"deactivated")}}function Dn(t,e){dt();var n=t.$options[e],r=e+" hook";if(n)for(var i=0,a=n.length;i<a;i++)Xt(n[i],t,null,t,r);t._hasHookEvent&&t.$emit("hook:"+e),pt()}var Tn=[],zn=[],$n={},jn=!1,Mn=!1,Rn=0;function Nn(){Rn=Tn.length=zn.length=0,$n={},jn=Mn=!1}var Un=Date.now;if(Q&&!q){var Ln=window.performance;Ln&&"function"===typeof Ln.now&&Un()>document.createEvent("Event").timeStamp&&(Un=function(){return Ln.now()})}function Fn(){var t,e;for(Un(),Mn=!0,Tn.sort(function(t,e){return t.id-e.id}),Rn=0;Rn<Tn.length;Rn++)t=Tn[Rn],t.before&&t.before(),e=t.id,$n[e]=null,t.run();var n=zn.slice(),r=Tn.slice();Nn(),Zn(n),Vn(r),at&&L.devtools&&at.emit("flush")}function Vn(t){var e=t.length;while(e--){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&!r._isDestroyed&&Dn(r,"updated")}}function Hn(t){t._inactive=!1,zn.push(t)}function Zn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Pn(t[e],!0)}function Gn(t){var e=t.id;if(null==$n[e]){if($n[e]=!0,Mn){var n=Tn.length-1;while(n>Rn&&Tn[n].id>t.id)n--;Tn.splice(n+1,0,t)}else Tn.push(t);jn||(jn=!0,ce(Fn))}}var Kn=0,Jn=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync,this.before=r.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Kn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=G(e),this.getter||(this.getter=T)),this.value=this.lazy?void 0:this.get()};Jn.prototype.get=function(){var t;dt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ni){if(!this.user)throw ni;Wt(ni,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&le(t),pt(),this.cleanupDeps()}return t},Jn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Jn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Jn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Gn(this)},Jn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||u(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ni){Wt(ni,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Jn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Jn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Jn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||y(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Qn={enumerable:!0,configurable:!0,get:T,set:T};function Yn(t,e,n){Qn.get=function(){return this[e][n]},Qn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Qn)}function Wn(t){t._watchers=[];var e=t.$options;e.props&&Xn(t,e.props),e.methods&&or(t,e.methods),e.data?qn(t):Bt(t._data={},!0),e.computed&&nr(t,e.computed),e.watch&&e.watch!==nt&&sr(t,e.watch)}function Xn(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],a=!t.$parent;a||Ot(!1);var o=function(a){i.push(a);var o=Gt(a,e,n,t);Pt(r,a,o),a in t||Yn(t,"_props",a)};for(var s in e)o(s);Ot(!0)}function qn(t){var e=t.$options.data;e=t._data="function"===typeof e?tr(e,t):e||{},f(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);while(i--){var a=n[i];0,r&&w(r,a)||V(a)||Yn(t,"_data",a)}Bt(e,!0)}function tr(t,e){dt();try{return t.call(e,e)}catch(ni){return Wt(ni,e,"data()"),{}}finally{pt()}}var er={lazy:!0};function nr(t,e){var n=t._computedWatchers=Object.create(null),r=it();for(var i in e){var a=e[i],o="function"===typeof a?a:a.get;0,r||(n[i]=new Jn(t,o||T,T,er)),i in t||rr(t,i,a)}}function rr(t,e,n){var r=!it();"function"===typeof n?(Qn.get=r?ir(e):ar(n),Qn.set=T):(Qn.get=n.get?r&&!1!==n.cache?ir(e):ar(n.get):T,Qn.set=n.set||T),Object.defineProperty(t,e,Qn)}function ir(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),lt.target&&e.depend(),e.value}}function ar(t){return function(){return t.call(this,this)}}function or(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?T:B(e[n],t)}function sr(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)ur(t,n,r[i]);else ur(t,n,r)}}function ur(t,e,n,r){return f(n)&&(r=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,r)}function cr(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=It,t.prototype.$delete=Dt,t.prototype.$watch=function(t,e,n){var r=this;if(f(e))return ur(r,t,e,n);n=n||{},n.user=!0;var i=new Jn(r,t,e,n);if(n.immediate)try{e.call(r,i.value)}catch(a){Wt(a,r,'callback for immediate watcher "'+i.expression+'"')}return function(){i.teardown()}}}var fr=0;function lr(t){t.prototype._init=function(t){var e=this;e._uid=fr++,e._isVue=!0,t&&t._isComponent?hr(e,t):e.$options=Ht(dr(e.constructor),t||{},e),e._renderProxy=e,e._self=e,En(e),yn(e),cn(e),Dn(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&ke(e),Wn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Dn(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function hr(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function dr(t){var e=t.options;if(t.super){var n=dr(t.super),r=t.superOptions;if(n!==r){t.superOptions=n;var i=pr(t);i&&I(t.extendOptions,i),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function pr(t){var e,n=t.options,r=t.sealedOptions;for(var i in n)n[i]!==r[i]&&(e||(e={}),e[i]=n[i]);return e}function vr(t){this._init(t)}function _r(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=P(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function gr(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yr(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(n.options,t),o["super"]=n,o.options.props&&mr(o),o.options.computed&&wr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,N.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=I({},o.options),i[r]=o,o}}function mr(t){var e=t.options.props;for(var n in e)Yn(t.prototype,"_props",n)}function wr(t){var e=t.options.computed;for(var n in e)rr(t.prototype,n,e[n])}function br(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&f(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ar(t){return t&&(t.Ctor.options.name||t.tag)}function kr(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!l(t)&&t.test(e)}function xr(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var a in n){var o=n[a];if(o){var s=Ar(o.componentOptions);s&&!e(s)&&Or(n,a,r,i)}}}function Or(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,y(n,e)}lr(vr),cr(vr),kn(vr),Sn(vr),hn(vr);var Er=[String,RegExp,Array],Sr={name:"keep-alive",abstract:!0,props:{include:Er,exclude:Er,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Or(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){xr(t,function(t){return kr(e,t)})}),this.$watch("exclude",function(e){xr(t,function(t){return!kr(e,t)})})},render:function(){var t=this.$slots.default,e=gn(t),n=e&&e.componentOptions;if(n){var r=Ar(n),i=this,a=i.include,o=i.exclude;if(a&&(!r||!kr(a,r))||o&&r&&kr(o,r))return e;var s=this,u=s.cache,c=s.keys,f=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;u[f]?(e.componentInstance=u[f].componentInstance,y(c,f),c.push(f)):(u[f]=e,c.push(f),this.max&&c.length>parseInt(this.max)&&Or(u,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Cr={KeepAlive:Sr};function Br(t){var e={get:function(){return L}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:I,mergeOptions:Ht,defineReactive:Pt},t.set=It,t.delete=Dt,t.nextTick=ce,t.observable=function(t){return Bt(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,I(t.options.components,Cr),_r(t),gr(t),yr(t),br(t)}Br(vr),Object.defineProperty(vr.prototype,"$isServer",{get:it}),Object.defineProperty(vr.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(vr,"FunctionalRenderContext",{value:Ze}),vr.version="2.6.10";var Pr="[object Array]",Ir="[object Object]";function Dr(t,e){var n={};return Tr(t,e),zr(t,e,"",n),n}function Tr(t,e){if(t!==e){var n=jr(t),r=jr(e);if(n==Ir&&r==Ir){if(Object.keys(t).length>=Object.keys(e).length)for(var i in e){var a=t[i];void 0===a?t[i]=null:Tr(a,e[i])}}else n==Pr&&r==Pr&&t.length>=e.length&&e.forEach(function(e,n){Tr(t[n],e)})}}function zr(t,e,n,r){if(t!==e){var i=jr(t),a=jr(e);if(i==Ir)if(a!=Ir||Object.keys(t).length<Object.keys(e).length)$r(r,n,t);else{var o=function(i){var a=t[i],o=e[i],s=jr(a),u=jr(o);if(s!=Pr&&s!=Ir)a!=e[i]&&$r(r,(""==n?"":n+".")+i,a);else if(s==Pr)u!=Pr?$r(r,(""==n?"":n+".")+i,a):a.length<o.length?$r(r,(""==n?"":n+".")+i,a):a.forEach(function(t,e){zr(t,o[e],(""==n?"":n+".")+i+"["+e+"]",r)});else if(s==Ir)if(u!=Ir||Object.keys(a).length<Object.keys(o).length)$r(r,(""==n?"":n+".")+i,a);else for(var c in a)zr(a[c],o[c],(""==n?"":n+".")+i+"."+c,r)};for(var s in t)o(s)}else i==Pr?a!=Pr?$r(r,n,t):t.length<e.length?$r(r,n,t):t.forEach(function(t,i){zr(t,e[i],n+"["+i+"]",r)}):$r(r,n,t)}}function $r(t,e,n){t[e]=n}function jr(t){return Object.prototype.toString.call(t)}function Mr(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var r=0;r<n.length;r++)n[r]()}}function Rr(t){return Tn.find(function(e){return t._watcher===e})}function Nr(t,e){if(!t.__next_tick_pending&&!Rr(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return ce(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var r=t.$scope;console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+t._uid+"]:nextMPTick")}var i;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ni){Wt(ni,t,"nextTick")}else i&&i(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}function Ur(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Lr=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var r=this.$scope,i=Object.create(null);try{i=Ur(this)}catch(s){console.error(s)}i.__webviewId__=r.data.__webviewId__;var a=Object.create(null);Object.keys(i).forEach(function(t){a[t]=r.data[t]});var o=Dr(i,a);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(r.is||r.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,r.setData(o,function(){n.__next_tick_pending=!1,Mr(n)})):Mr(this)}};function Fr(){}function Vr(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Fr),t.$options.render||(t.$options.render=Fr),"mp-toutiao"!==t.mpHost&&Dn(t,"beforeMount");var r=function(){t._update(t._render(),n)};return new Jn(t,r,T,{before:function(){t._isMounted&&!t._isDestroyed&&Dn(t,"beforeUpdate")}},!0),n=!1,t}function Hr(t,e){return i(t)||i(e)?Zr(t,Gr(e)):""}function Zr(t,e){return t?e?t+" "+e:t:e||""}function Gr(t){return Array.isArray(t)?Kr(t):u(t)?Jr(t):"string"===typeof t?t:""}function Kr(t){for(var e,n="",r=0,a=t.length;r<a;r++)i(e=Gr(t[r]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Jr(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Qr=b(function(t){var e={},n=/;(?![^(]*\))/g,r=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(r);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Yr(t){return Array.isArray(t)?D(t):"string"===typeof t?Qr(t):t}var Wr=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Xr(t,e){var n=e.split("."),r=n[0];return 0===r.indexOf("__$n")&&(r=parseInt(r.replace("__$n",""))),1===n.length?t[r]:Xr(t[r],n.slice(1).join("."))}function qr(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:P(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Nr(this,t)},Wr.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=ke,t.prototype.__call_hook=function(t,e){var n=this;dt();var r,i=n.$options[t],a=t+" hook";if(i)for(var o=0,s=i.length;o<s;o++)r=Xt(i[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t),pt(),r},t.prototype.__set_model=function(t,e,n,r){Array.isArray(r)&&(-1!==r.indexOf("trim")&&(n=n.trim()),-1!==r.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return f(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Xr(e||this,t)},t.prototype.__get_class=function(t,e){return Hr(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Yr(t),r=e?I(e,n):n;return Object.keys(r).map(function(t){return E(t)+":"+r[t]}).join(";")},t.prototype.__map=function(t,e){var n,r,i,a,o;if(Array.isArray(t)){for(n=new Array(t.length),r=0,i=t.length;r<i;r++)n[r]=e(t[r],r);return n}if(u(t)){for(a=Object.keys(t),n=Object.create(null),r=0,i=a.length;r<i;r++)o=a[r],n[o]=e(t[o],o,r);return n}return[]}}var ti=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ei(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==ti.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,r=n.created;ti.forEach(function(t){n[t]=r}),t.prototype.__lifecycle_hooks__=ti}vr.prototype.__patch__=Lr,vr.prototype.$mount=function(t,e){return Vr(this,t,e)},ei(vr),qr(vr),e["default"]=vr}.call(this,n("c8ba"))},"6b8a":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("e526"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=pe,e.createComponent=xe,e.createPage=ke,e.default=void 0;var r=i(n("66fd"));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return u(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(u){i=!0,a=u}finally{try{r||null==s["return"]||s["return"]()}finally{if(i)throw a}}return n}function u(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){return d(t)||h(t)||l()}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function d(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var p=Object.prototype.toString,v=Object.prototype.hasOwnProperty;function _(t){return"function"===typeof t}function g(t){return"string"===typeof t}function y(t){return"[object Object]"===p.call(t)}function m(t,e){return v.call(t,e)}function w(){}function b(t){var e=Object.create(null);return function(n){var r=e[n];return r||(e[n]=t(n))}}var A=/-(\w)/g,k=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),x=["invoke","success","fail","complete","returnValue"],O={},E={};function S(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?C(n):n}function C(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function B(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function P(t,e){Object.keys(e).forEach(function(n){-1!==x.indexOf(n)&&_(e[n])&&(t[n]=S(t[n],e[n]))})}function I(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==x.indexOf(n)&&_(e[n])&&B(t[n],e[n])})}function D(t,e){"string"===typeof t&&y(e)?P(E[t]||(E[t]={}),e):y(t)&&P(O,t)}function T(t,e){"string"===typeof t?y(e)?I(E[t],e):delete E[t]:y(t)&&I(O,t)}function z(t){return function(e){return t(e)||e}}function $(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function j(t,e){for(var n=!1,r=0;r<t.length;r++){var i=t[r];if(n)n=Promise.then(z(i));else{var a=i(e);if($(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var r=e[n];e[n]=function(e){j(t[n],e).then(function(t){return _(r)&&r(t)||t})}}}),e}function R(t,e){var n=[];Array.isArray(O.returnValue)&&n.push.apply(n,f(O.returnValue));var r=E[t];return r&&Array.isArray(r.returnValue)&&n.push.apply(n,f(r.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(O).forEach(function(t){"returnValue"!==t&&(e[t]=O[t].slice())});var n=E[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function U(t,e,n){for(var r=arguments.length,i=new Array(r>3?r-3:0),a=3;a<r;a++)i[a-3]=arguments[a];var o=N(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=j(o.invoke,n);return s.then(function(t){return e.apply(void 0,[M(o,t)].concat(i))})}return e.apply(void 0,[M(o,n)].concat(i))}return e.apply(void 0,[n].concat(i))}var L={returnValue:function(t){return $(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},F=/^\$|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,V=/^create|Manager$/,H=/^on/;function Z(t){return V.test(t)}function G(t){return F.test(t)}function K(t){return H.test(t)}function J(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function Q(t){return!(Z(t)||G(t)||K(t))}function Y(t,e){return Q(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return _(n.success)||_(n.fail)||_(n.complete)?R(t,U.apply(void 0,[t,e,n].concat(i))):R(t,J(new Promise(function(r,a){U.apply(void 0,[t,e,Object.assign({},n,{success:r,fail:a})].concat(i)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var W=1e-4,X=750,q=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,r=t.windowWidth;tt=r,et=n,q="ios"===e}function rt(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/X*(e||tt);return n<0&&(n=-n),n=Math.floor(n+W),0===n?1!==et&&q?.5:1:t<0?-n:n}var it={promiseInterceptor:L},at=Object.freeze({upx2px:rt,interceptors:it,addInterceptor:D,removeInterceptor:T}),ot={},st=[],ut=[],ct=["success","fail","cancel","complete"];function ft(t,e,n){return function(r){return e(ht(t,r,n))}}function lt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(y(e)){var a=!0===i?e:{};for(var o in _(n)&&(n=n(e,a)||{}),e)if(m(n,o)){var s=n[o];_(s)&&(s=s(e[o],e,a)),s?g(s)?a[s]=e[o]:y(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ft(t,e[o],r):i||(a[o]=e[o]);return a}return _(e)&&(e=ft(t,e,r)),e}function ht(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return _(ot.returnValue)&&(e=ot.returnValue(t,e)),lt(t,e,n,{},r)}function dt(t,e){if(m(ot,t)){var n=ot[t];return n?function(e,r){var i=n;_(n)&&(i=n(e)),e=lt(t,e,i.args,i.returnValue);var a=[e];"undefined"!==typeof r&&a.push(r);var o=wx[i.name||t].apply(wx,a);return G(t)?ht(t,o,i.returnValue,Z(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var pt=Object.create(null),vt=["subscribePush","unsubscribePush","onPush","offPush","share"];function _t(t){return function(e){var n=e.fail,r=e.complete,i={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};_(n)&&n(i),_(r)&&r(i)}}vt.forEach(function(t){pt[t]=_t(t)});var gt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new r.default),t};var t}();function yt(t,e,n){return t[e].apply(t,n)}function mt(){return yt(gt(),"$on",Array.prototype.slice.call(arguments))}function wt(){return yt(gt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return yt(gt(),"$once",Array.prototype.slice.call(arguments))}function At(){return yt(gt(),"$emit",Array.prototype.slice.call(arguments))}var kt=Object.freeze({$on:mt,$off:wt,$once:bt,$emit:At});function xt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,r=plus.webview.getWebviewById(t.__uniapp_mask_id);r=r.parent()||r;var i=t.show,a=t.hide,o=t.close,s=function(){r.setStyle({mask:n})},u=function(){r.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return i.apply(t,n)},t.hide=function(){u();for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return a.apply(t,n)},t.close=function(){u(),e=[];for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return o.apply(t,r)}}}function Ot(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&xt(e),e}function Et(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}var St=Object.freeze({requireNativePlugin:Et,getSubNVueById:Ot}),Ct=Page,Bt=Component,Pt=/:/g,It=b(function(t){return k(t.replace(Pt,"-"))});function Dt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];return e.apply(t,[It(n)].concat(i))}}}function Tt(t,e){var n=e[t];e[t]=n?function(){Dt(this);for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return n.apply(this,e)}:function(){Dt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("onLoad",t),Ct(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Tt("created",t),Bt(t)};var zt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function $t(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function jt(t,e){if(!e)return!0;if(r.default.options&&Array.isArray(r.default.options[t]))return!0;if(e=e.default||e,_(e))return!!_(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(_(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return jt(t,e)}):void 0}function Mt(t,e,n){e.forEach(function(e){jt(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function Rt(t,e){var n;return e=e.default||e,_(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Ut(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function Lt(t,e){var n=t.data||{},r=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(i){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(i){}return y(n)||(n={}),Object.keys(r).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=r[t])}),n}var Ft=[String,Number,Boolean,Object,Array,null];function Vt(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ht(t,e){var n=t["behaviors"],r=t["extends"],i=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),y(r)&&r.props&&o.push(e({properties:Gt(r.props,!0)})),Array.isArray(i)&&i.forEach(function(t){y(t)&&t.props&&o.push(e({properties:Gt(t.props,!0)}))}),o}function Zt(t,e,n,r){return Array.isArray(e)&&1===e.length?e[0]:e}function Gt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Vt(t)}}):y(t)&&Object.keys(t).forEach(function(e){var r=t[e];if(y(r)){var i=r["default"];_(i)&&(i=i()),r.type=Zt(e,r.type),n[e]={type:-1!==Ft.indexOf(r.type)?r.type:null,value:i,observer:Vt(e)}}else{var a=Zt(e,r);n[e]={type:-1!==Ft.indexOf(a)?a:null,observer:Vt(e)}}}),n}function Kt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=w,t.preventDefault=w,t.target=t.target||{},m(t,"detail")||(t.detail={}),y(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Jt(t,e){var n=t;return e.forEach(function(e){var r=e[0],i=e[2];if(r||"undefined"!==typeof i){var a=e[1],o=e[3],s=r?t.__get_value(r,n):n;Number.isInteger(s)?n=i:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===i}):y(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===i}):console.error("v-for 暂不支持循环数据：",s):n=s[i],o&&(n=t.__get_value(o,n))}}),n}function Qt(t,e,n){var r={};return Array.isArray(e)&&e.length&&e.forEach(function(e,i){"string"===typeof e?e?"$event"===e?r["$"+i]=n:0===e.indexOf("$event.")?r["$"+i]=t.__get_value(e.replace("$event.",""),n):r["$"+i]=t.__get_value(e):r["$"+i]=t:r["$"+i]=Jt(t,e)}),r}function Yt(t){for(var e={},n=1;n<t.length;n++){var r=t[n];e[r[0]]=r[1]}return e}function Wt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(i&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Qt(t,r,e),u=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||i?i&&!o?u.push(e.detail.__args__[0]):u.push(e):u.push(e.target.value):Array.isArray(t)&&"o"===t[0]?u.push(Yt(t)):"string"===typeof t&&m(s,t)?u.push(s[t]):u.push(t)}),u}var Xt="~",qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Kt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var r=n.eventOpts||n["event-opts"];if(!r)return console.warn("事件信息不存在");var i=t.type,a=[];return r.forEach(function(n){var r=n[0],o=n[1],s=r.charAt(0)===qt;r=s?r.slice(1):r;var u=r.charAt(0)===Xt;r=u?r.slice(1):r,o&&te(i,r)&&o.forEach(function(n){var r=n[0];if(r){var i=e.$vm;i.$options.generic&&i.$parent&&i.$parent.$parent&&(i=i.$parent.$parent);var o=i[r];if(!_(o))throw new Error(" _vm.".concat(r," is not a function"));if(u){if(o.once)return;o.once=!0}a.push(o.apply(i,Wt(e.$vm,t,n[1],n[2],s,r)))}})}),"input"===i&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function re(t,e){var n=e.mocks,i=e.initRefs;r.default.prototype.mpHost="app-plus",r.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(i(this),$t(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};return a.globalData=t.$options.globalData||{},Mt(a,ne),a}var ie=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){var n=t.$children,r=n.find(function(t){return t.$scope._$vueId===e});if(r)return r;for(var i=n.length-1;i>=0;i--)if(r=ae(n[i],e),r)return r}function oe(t){return Behavior(t)}function se(){return!!this.route}function ue(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var r=e.selectAllComponents(".vue-ref-in-for");return r.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function fe(t){var e,n=t.detail||t.value,r=n.vuePid,i=n.vueOptions;r&&(e=ae(this.$vm,r)),e||(e=this.$vm),i.parent=e}function le(t){return re(t,{mocks:ie,initRefs:ce})}var he=["onUniNViewMessage"];function de(t){var e=le(t);return Mt(e,he),e}function pe(t){return App(de(t)),t}function ve(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,i=e.initRelation,o=Rt(r.default,t),s=a(o,2),u=s[0],c=s[1],f={options:{multipleSlots:!0,addGlobalClass:!0},data:Lt(c,r.default.prototype),behaviors:Ht(c,oe),properties:Gt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Ut(t.vueId,this),i.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new u(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:fe,__e:ee}};return n?f:[f,u]}function _e(t){return ve(t,{isPage:se,initRelation:ue})}function ge(t){var e=_e(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var ye=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ge(t);return Mt(n.methods,ye,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function we(t){return me(t,{isPage:se,initRelation:ue})}ye.push.apply(ye,zt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=we(t);return Mt(e.methods,be),e}function ke(t){return Component(Ae(t))}function xe(t){return Component(ge(t))}st.forEach(function(t){ot[t]=!1}),ut.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Oe={};Object.keys(at).forEach(function(t){Oe[t]=at[t]}),Object.keys(kt).forEach(function(t){Oe[t]=kt[t]}),Object.keys(St).forEach(function(t){Oe[t]=Y(t,St[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ot,t))&&(Oe[t]=Y(t,dt(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Oe,t.UniEmitter=kt),wx.createApp=pe,wx.createPage=ke,wx.createComponent=xe;var Ee=Oe,Se=Ee;e.default=Se}).call(this,n("c8ba"))},"77a4":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("c755"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7aee":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("9b8f"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},8063:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("c03c"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8c1b":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("c2dd"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8dc8":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("1c16"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"94b8":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("f675"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},9948:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("e512"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9a37":function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("3936"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},a963:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFeklEQVRYR61XbYiUVRR+zp2Z2F2b0kAzP0DSwEadde99py2XMOiDILTS1siI0KBP0r6sLPOPRWqmaZGVYv2IDBQLizCkWAuL3XnvzOrmFIXbF5VWpn3tyDhzT5ztnW3S3X3fpQ7Mj+Gec89z7nvOc84hRJSmpqaRsVhspnNuJhE1ApgAYHhg/iuArwHsY+Y9iURiT3t7++EoV1OYktb6fCJaBGAegLNq9H8HII5Fzgh+1eNjALYR0Qbf9z8ZzMeAAIwxDQAeAvAggDoAx5j5LaXUbufcvng8/l0sFuuRyyuVSkOlUhnDzGkiuhzArABsiYjW9PT0PFkoFP7oD0i/AIwxEwG8BuACABLpU0qpTdls9lDYi8l5Op0elUgkFgYByGeysVhsfkdHx+cn258CQGttiOgNAOOJaJdSanF/hlGAeJ53rnNuHRHNBvA9gDnW2vZa238BCCLfA2AsMz+Xy+UWA3BRnA2mY4xZA+B+AIckkWsD6gOQTqeHJRKJDwBoAButtXf+V8e19lrrtUR0L4D9xWKxpZoTfQC01o8T0aNE9J7v+1dEjdwYcw0z30VER5VSiwbLE2PM2wCuArDKWvuwAOwFEJSaBVAmoum+73dHid7zvMuYeXeN7iZr7a0D2WYymfFSQQAalFImm80e6AVgjNkM4BYAy621K6I4D+yeB3BHjf671torQ/LhAakqAK9YaxeQMJxS6qCUM4DzrLU/DwGAgF1W1SeiVt/3t4cAOBPAF/IK8Xh8Immtryei14noVd/3b4rqXPQaGxvHJhKJjcw8BsAWa628SKhorV8gotsA3EjGmI0Abiei+b7vbw21/h8UPM+7mpnfJKKXBMDHAC50zk3J5/OFod6vtU4rpcYxc95a+0MU+4Bv5DO0CwAxaiiVShO6urqORrkgSEDhi6cBXAwgxsyrc7mc9I5QSaVSp9fX138JoCgA/gTwUzKZnNzW1nY81BqA53kLmXk5M+8LaFbMllhrhfFCpbW1Ndbd3X0AwBgBIM3mSFQAQdJK5LOdc0op1SF8opRqyWazH4V6/1tBGWMEwHgB8K308qifwPO8qcxctNYeNMZIx7wBwIFisagLhUIpCoCA9oXsnJThXiKawcypXC73aZQLRKe5uXlcuVyWpE0S0X2+76+LaitdkpklCfPyAlU2m2et3Rb1Eq31EiJaDeDHWCyW6ujoODIE21lEtFPYsJaIXvZ9X4aIUEmlUqfV19fnAExh5idyuVyVDYXaOeyCatDMvICC6UWouFQqlSZFKcVMJiPDaRsAoe1JAE4A2OycW5vP5/3BAAQlKM8/vFwuT+ptRp7nbRE0AJZaa1eGRaC1XkVEMitKBcjAugHAh8lkcllYKRtj7g70t1pr5/cCyGQyU5xz0o5lyJxurf1mMBDGmB0Arg10jhLRUt/3XwwDnslkRjvn9kv0RNTs+36+diCpRvWOtVaGhgHF87zZzPwIgBwzPxu1erTW24loLoD11tp7xEEfgJaWluTx48f3ApgGYI21dklYREM5N8ZUW/dnlUrlos7OTtkd/gEgf4wxkwHIUDrq/wRR4/wIEV1Su6ycMpZnMpkZzjn5xmcz807n3OLOzs6vhhJtVTcYwdYCuE4qxjk3N5/Py+DbJ/0uJk1NTSmllMwGaQC/MPPKeDy+JSrZTJs2bUQikbiZiCRPRgKQ9Wy+tbbr5EAGW81kdHoMgIzSCsDhYIjYBaCrWCweLhQKvatZOp2ur6urG1Uul6cSkcyEUiHnCCkx8zMnTpxYMRC/RFlODYDFRDQHwLCaCGT7lflBmG8EgNE1Zz1EtKNSqawPI6ZQANVLg+ZzKRHNlEph5rE1G/FvweolT9ymlHo/m81Klw2VvwCiqkvR8jXrnwAAAABJRU5ErkJggg=="},b5b9:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("0278"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b97e:function(t,e,n){"use strict";function r(t,e){if("undefined"==typeof t.length)throw new Error(t.length+"/"+e);var n=function(){for(var n=0;n<t.length&&0==t[n];)n+=1;for(var r=new Array(t.length-n+e),i=0;i<t.length-n;i+=1)r[i]=t[i+n];return r}(),i={getAt:function(t){return n[t]},getLength:function(){return n.length},multiply:function(t){for(var e=new Array(i.getLength()+t.getLength()-1),n=0;n<i.getLength();n+=1)for(var a=0;a<t.getLength();a+=1)e[n+a]^=c.gexp(c.glog(i.getAt(n))+c.glog(t.getAt(a)));return r(e,0)},mod:function(t){if(i.getLength()-t.getLength()<0)return i;for(var e=c.glog(i.getAt(0))-c.glog(t.getAt(0)),n=new Array(i.getLength()),a=0;a<i.getLength();a+=1)n[a]=i.getAt(a);for(a=0;a<t.getLength();a+=1)n[a]^=c.gexp(c.glog(t.getAt(a))+e);return r(n,0).mod(t)}};return i}var i=function(t,e){var n=236,i=17,a=t,s=o[e],c=null,d=0,p=null,v=new Array,_={},y=function(t,e){d=4*a+17,c=function(t){for(var e=new Array(t),n=0;n<t;n+=1){e[n]=new Array(t);for(var r=0;r<t;r+=1)e[n][r]=null}return e}(d),m(0,0),m(d-7,0),m(0,d-7),A(),b(),x(t,e),a>=7&&k(t),null==p&&(p=S(a,s,v)),O(p,e)},m=function(t,e){for(var n=-1;n<=7;n+=1)if(!(t+n<=-1||d<=t+n))for(var r=-1;r<=7;r+=1)e+r<=-1||d<=e+r||(c[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},w=function(){for(var t=0,e=0,n=0;n<8;n+=1){y(!0,n);var r=u.getLostPoint(_);(0==n||t>r)&&(t=r,e=n)}return e},b=function(){for(var t=8;t<d-8;t+=1)null==c[t][6]&&(c[t][6]=t%2==0);for(var e=8;e<d-8;e+=1)null==c[6][e]&&(c[6][e]=e%2==0)},A=function(){for(var t=u.getPatternPosition(a),e=0;e<t.length;e+=1)for(var n=0;n<t.length;n+=1){var r=t[e],i=t[n];if(null==c[r][i])for(var o=-2;o<=2;o+=1)for(var s=-2;s<=2;s+=1)c[r+o][i+s]=-2==o||2==o||-2==s||2==s||0==o&&0==s}},k=function(t){for(var e=u.getBCHTypeNumber(a),n=0;n<18;n+=1){var r=!t&&1==(e>>n&1);c[Math.floor(n/3)][n%3+d-8-3]=r}for(n=0;n<18;n+=1){r=!t&&1==(e>>n&1);c[n%3+d-8-3][Math.floor(n/3)]=r}},x=function(t,e){for(var n=s<<3|e,r=u.getBCHTypeInfo(n),i=0;i<15;i+=1){var a=!t&&1==(r>>i&1);i<6?c[i][8]=a:i<8?c[i+1][8]=a:c[d-15+i][8]=a}for(i=0;i<15;i+=1){a=!t&&1==(r>>i&1);i<8?c[8][d-i-1]=a:i<9?c[8][15-i-1+1]=a:c[8][15-i-1]=a}c[d-8][8]=!t},O=function(t,e){for(var n=-1,r=d-1,i=7,a=0,o=u.getMaskFunction(e),s=d-1;s>0;s-=2)for(6==s&&(s-=1);;){for(var f=0;f<2;f+=1)if(null==c[r][s-f]){var l=!1;a<t.length&&(l=1==(t[a]>>>i&1));var h=o(r,s-f);h&&(l=!l),c[r][s-f]=l,i-=1,-1==i&&(a+=1,i=7)}if(r+=n,r<0||d<=r){r-=n,n=-n;break}}},E=function(t,e){for(var n=0,i=0,a=0,o=new Array(e.length),s=new Array(e.length),c=0;c<e.length;c+=1){var f=e[c].dataCount,l=e[c].totalCount-f;i=Math.max(i,f),a=Math.max(a,l),o[c]=new Array(f);for(var h=0;h<o[c].length;h+=1)o[c][h]=255&t.getBuffer()[h+n];n+=f;var d=u.getErrorCorrectPolynomial(l),p=r(o[c],d.getLength()-1),v=p.mod(d);s[c]=new Array(d.getLength()-1);for(h=0;h<s[c].length;h+=1){var _=h+v.getLength()-s[c].length;s[c][h]=_>=0?v.getAt(_):0}}var g=0;for(h=0;h<e.length;h+=1)g+=e[h].totalCount;var y=new Array(g),m=0;for(h=0;h<i;h+=1)for(c=0;c<e.length;c+=1)h<o[c].length&&(y[m]=o[c][h],m+=1);for(h=0;h<a;h+=1)for(c=0;c<e.length;c+=1)h<s[c].length&&(y[m]=s[c][h],m+=1);return y},S=function(t,e,r){for(var a=f.getRSBlocks(t,e),o=l(),s=0;s<r.length;s+=1){var c=r[s];o.put(c.getMode(),4),o.put(c.getLength(),u.getLengthInBits(c.getMode(),t)),c.write(o)}var h=0;for(s=0;s<a.length;s+=1)h+=a[s].dataCount;if(o.getLengthInBits()>8*h)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*h+")");for(o.getLengthInBits()+4<=8*h&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;;){if(o.getLengthInBits()>=8*h)break;if(o.put(n,8),o.getLengthInBits()>=8*h)break;o.put(i,8)}return E(o,a)};return _.addData=function(t){var e=h(t);v.push(e),p=null},_.isDark=function(t,e){if(t<0||d<=t||e<0||d<=e)throw new Error(t+","+e);return c[t][e]},_.getModuleCount=function(){return d},_.make=function(){y(!1,w())},_.createTableTag=function(t,e){t=t||2,e="undefined"==typeof e?4*t:e;var n="";n+='<table style="',n+=" border-width: 0upx; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0upx; margin: "+e+"upx;",n+='">',n+="<tbody>";for(var r=0;r<_.getModuleCount();r+=1){n+="<tr>";for(var i=0;i<_.getModuleCount();i+=1)n+='<td style="',n+=" border-width: 0upx; border-style: none;",n+=" border-collapse: collapse;",n+=" padding: 0upx; margin: 0upx;",n+=" width: "+t+"upx;",n+=" height: "+t+"upx;",n+=" background-color: ",n+=_.isDark(r,i)?"#000000":"#ffffff",n+=";",n+='"/>';n+="</tr>"}return n+="</tbody>",n+"</table>"},_.createImgTag=function(t,e,n){t=t||2,e="undefined"==typeof e?4*t:e;var r=e,i=_.getModuleCount()*t+e;return g(n,n,function(e,n){if(r<=e&&e<i&&r<=n&&n<i){var a=Math.floor((e-r)/t),o=Math.floor((n-r)/t);return _.isDark(o,a)?0:1}return 1})},_};i.stringToBytes=function(t){for(var e=new Array,n=0;n<t.length;n+=1){var r=t.charCodeAt(n);e.push(255&r)}return e},i.createStringToBytes=function(t,e){var n=function(){for(var n=v(t),r=function(){var t=n.read();if(-1==t)throw new Error;return t},i=0,a={};;){var o=n.read();if(-1==o)break;var s=r(),u=r(),c=r(),f=String.fromCharCode(o<<8|s),l=u<<8|c;a[f]=l,i+=1}if(i!=e)throw new Error(i+" != "+e);return a}(),r="?".charCodeAt(0);return function(t){for(var e=new Array,i=0;i<t.length;i+=1){var a=t.charCodeAt(i);if(a<128)e.push(a);else{var o=n[t.charAt(i)];"number"==typeof o?(255&o)==o?e.push(o):(e.push(o>>>8),e.push(255&o)):e.push(r)}}return e}};var a={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},o={L:1,M:0,Q:3,H:2},s={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},u=function(){var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],e=1335,n=7973,i=21522,o={},u=function(t){for(var e=0;0!=t;)e+=1,t>>>=1;return e};return o.getBCHTypeInfo=function(t){for(var n=t<<10;u(n)-u(e)>=0;)n^=e<<u(n)-u(e);return(t<<10|n)^i},o.getBCHTypeNumber=function(t){for(var e=t<<12;u(e)-u(n)>=0;)e^=n<<u(e)-u(n);return t<<12|e},o.getPatternPosition=function(e){return t[e-1]},o.getMaskFunction=function(t){switch(t){case s.PATTERN000:return function(t,e){return(t+e)%2==0};case s.PATTERN001:return function(t,e){return t%2==0};case s.PATTERN010:return function(t,e){return e%3==0};case s.PATTERN011:return function(t,e){return(t+e)%3==0};case s.PATTERN100:return function(t,e){return(Math.floor(t/2)+Math.floor(e/3))%2==0};case s.PATTERN101:return function(t,e){return t*e%2+t*e%3==0};case s.PATTERN110:return function(t,e){return(t*e%2+t*e%3)%2==0};case s.PATTERN111:return function(t,e){return(t*e%3+(t+e)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},o.getErrorCorrectPolynomial=function(t){for(var e=r([1],0),n=0;n<t;n+=1)e=e.multiply(r([1,c.gexp(n)],0));return e},o.getLengthInBits=function(t,e){if(1<=e&&e<10)switch(t){case a.MODE_NUMBER:return 10;case a.MODE_ALPHA_NUM:return 9;case a.MODE_8BIT_BYTE:return 8;case a.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case a.MODE_NUMBER:return 12;case a.MODE_ALPHA_NUM:return 11;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case a.MODE_NUMBER:return 14;case a.MODE_ALPHA_NUM:return 13;case a.MODE_8BIT_BYTE:return 16;case a.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},o.getLostPoint=function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r+=1)for(var i=0;i<e;i+=1){for(var a=0,o=t.isDark(r,i),s=-1;s<=1;s+=1)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u+=1)i+u<0||e<=i+u||0==s&&0==u||o==t.isDark(r+s,i+u)&&(a+=1);a>5&&(n+=3+a-5)}for(r=0;r<e-1;r+=1)for(i=0;i<e-1;i+=1){var c=0;t.isDark(r,i)&&(c+=1),t.isDark(r+1,i)&&(c+=1),t.isDark(r,i+1)&&(c+=1),t.isDark(r+1,i+1)&&(c+=1),0!=c&&4!=c||(n+=3)}for(r=0;r<e;r+=1)for(i=0;i<e-6;i+=1)t.isDark(r,i)&&!t.isDark(r,i+1)&&t.isDark(r,i+2)&&t.isDark(r,i+3)&&t.isDark(r,i+4)&&!t.isDark(r,i+5)&&t.isDark(r,i+6)&&(n+=40);for(i=0;i<e;i+=1)for(r=0;r<e-6;r+=1)t.isDark(r,i)&&!t.isDark(r+1,i)&&t.isDark(r+2,i)&&t.isDark(r+3,i)&&t.isDark(r+4,i)&&!t.isDark(r+5,i)&&t.isDark(r+6,i)&&(n+=40);var f=0;for(i=0;i<e;i+=1)for(r=0;r<e;r+=1)t.isDark(r,i)&&(f+=1);var l=Math.abs(100*f/e/e-50)/5;return n+10*l},o}(),c=function(){for(var t=new Array(256),e=new Array(256),n=0;n<8;n+=1)t[n]=1<<n;for(n=8;n<256;n+=1)t[n]=t[n-4]^t[n-5]^t[n-6]^t[n-8];for(n=0;n<255;n+=1)e[t[n]]=n;var r={glog:function(t){if(t<1)throw new Error("glog("+t+")");return e[t]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return t[e]}};return r}(),f=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],e=function(t,e){var n={};return n.totalCount=t,n.dataCount=e,n},n={},r=function(e,n){switch(n){case o.L:return t[4*(e-1)+0];case o.M:return t[4*(e-1)+1];case o.Q:return t[4*(e-1)+2];case o.H:return t[4*(e-1)+3];default:return}};return n.getRSBlocks=function(t,n){var i=r(t,n);if("undefined"==typeof i)throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:"+t+"/errorCorrectLevel:"+n);for(var a=i.length/3,o=new Array,s=0;s<a;s+=1)for(var u=i[3*s+0],c=i[3*s+1],f=i[3*s+2],l=0;l<u;l+=1)o.push(e(c,f));return o},n}(),l=function(){var t=new Array,e=0,n={getBuffer:function(){return t},getAt:function(e){var n=Math.floor(e/8);return 1==(t[n]>>>7-e%8&1)},put:function(t,e){for(var r=0;r<e;r+=1)n.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return e},putBit:function(n){var r=Math.floor(e/8);t.length<=r&&t.push(0),n&&(t[r]|=128>>>e%8),e+=1}};return n},h=function(t){for(var e=a.MODE_8BIT_BYTE,n=t,r=[],i={},o=0,s=n.length;o<s;o++){var u=[],c=n.charCodeAt(o);c>65536?(u[0]=240|(1835008&c)>>>18,u[1]=128|(258048&c)>>>12,u[2]=128|(4032&c)>>>6,u[3]=128|63&c):c>2048?(u[0]=224|(61440&c)>>>12,u[1]=128|(4032&c)>>>6,u[2]=128|63&c):c>128?(u[0]=192|(1984&c)>>>6,u[1]=128|63&c):u[0]=c,r.push(u)}r=Array.prototype.concat.apply([],r),r.length!=n.length&&(r.unshift(191),r.unshift(187),r.unshift(239));var f=r;return i.getMode=function(){return e},i.getLength=function(t){return f.length},i.write=function(t){for(var e=0;e<f.length;e+=1)t.put(f[e],8)},i},d=function(){var t=new Array,e={writeByte:function(e){t.push(255&e)},writeShort:function(t){e.writeByte(t),e.writeByte(t>>>8)},writeBytes:function(t,n,r){n=n||0,r=r||t.length;for(var i=0;i<r;i+=1)e.writeByte(t[i+n])},writeString:function(t){for(var n=0;n<t.length;n+=1)e.writeByte(t.charCodeAt(n))},toByteArray:function(){return t},toString:function(){var e="";e+="[";for(var n=0;n<t.length;n+=1)n>0&&(e+=","),e+=t[n];return e+"]"}};return e},p=function(){var t=0,e=0,n=0,r="",i={},a=function(t){r+=String.fromCharCode(o(63&t))},o=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return i.writeByte=function(r){for(t=t<<8|255&r,e+=8,n+=1;e>=6;)a(t>>>e-6),e-=6},i.flush=function(){if(e>0&&(a(t<<6-e),t=0,e=0),n%3!=0)for(var i=3-n%3,o=0;o<i;o+=1)r+="="},i.toString=function(){return r},i},v=function(t){var e=t,n=0,r=0,i=0,a={read:function(){for(;i<8;){if(n>=e.length){if(0==i)return-1;throw new Error("unexpected end of file./"+i)}var t=e.charAt(n);if(n+=1,"="==t)return i=0,-1;t.match(/^\s$/)||(r=r<<6|o(t.charCodeAt(0)),i+=6)}var a=r>>>i-8&255;return i-=8,a}},o=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return a},_=function(t,e){var n=t,r=e,i=new Array(t*e),a={setPixel:function(t,e,r){i[e*n+t]=r},write:function(t){t.writeString("GIF87a"),t.writeShort(n),t.writeShort(r),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(n),t.writeShort(r),t.writeByte(0);var e=2,i=s(e);t.writeByte(e);for(var a=0;i.length-a>255;)t.writeByte(255),t.writeBytes(i,a,255),a+=255;t.writeByte(i.length-a),t.writeBytes(i,a,i.length-a),t.writeByte(0),t.writeString(";")}},o=function(t){var e=t,n=0,r=0,i={write:function(t,i){if(t>>>i!=0)throw new Error("length over");for(;n+i>=8;)e.writeByte(255&(t<<n|r)),i-=8-n,t>>>=8-n,r=0,n=0;r|=t<<n,n+=i},flush:function(){n>0&&e.writeByte(r)}};return i},s=function(t){for(var e=1<<t,n=1+(1<<t),r=t+1,a=u(),s=0;s<e;s+=1)a.add(String.fromCharCode(s));a.add(String.fromCharCode(e)),a.add(String.fromCharCode(n));var c=d(),f=o(c);f.write(e,r);var l=0,h=String.fromCharCode(i[l]);for(l+=1;l<i.length;){var p=String.fromCharCode(i[l]);l+=1,a.contains(h+p)?h+=p:(f.write(a.indexOf(h),r),a.size()<4095&&(a.size()==1<<r&&(r+=1),a.add(h+p)),h=p)}return f.write(a.indexOf(h),r),f.write(n,r),f.flush(),c.toByteArray()},u=function(){var t={},e=0,n={add:function(r){if(n.contains(r))throw new Error("dup key:"+r);t[r]=e,e+=1},size:function(){return e},indexOf:function(e){return t[e]},contains:function(e){return"undefined"!=typeof t[e]}};return n};return a},g=function(t,e,n,r){for(var i=_(t,e),a=0;a<e;a+=1)for(var o=0;o<t;o+=1)i.setPixel(o,a,n(o,a));var s=d();i.write(s);for(var u=p(),c=s.toByteArray(),f=0;f<c.length;f+=1)u.writeByte(c[f]);u.flush();var l="";return l+="data:image/gif;base64,",l+u},y=function(t,e){e=e||{};var n,r=e.typeNumber||4,a=e.errorCorrectLevel||"M",o=e.size||500;try{n=i(r,a||"M"),n.addData(t),n.make()}catch(e){if(r>=40)throw new Error("Text too long to encode");return gen(t,{size:o,errorCorrectLevel:a,typeNumber:r+1})}var s=parseInt(o/n.getModuleCount()),u=parseInt((o-n.getModuleCount()*s)/2);return n.createImgTag(s,u,o)};t.exports={createQrCodeImg:y}},bc7f:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("24a6"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bcb2:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("8670"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c4b0:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("cb21"));function i(t){return t&&t.__esModule?t:{default:t}}var a={getDownloadUrl:function(t,e){(0,r.default)("/app_download_url","GET",t,e)},getUpdate:function(t,e){(0,r.default)("/app_update_version","GET",t,e)},setLogin:function(t,e){(0,r.default)("/login","POST",t,e)},setLoginOut:function(t,e){(0,r.default)("/user/signout","POST",t,e)},register:function(t,e){(0,r.default)("/register","POST",t,e)},getVerifyCode:function(t,e){(0,r.default)("/sms_send","POST",t,e)},forgetPass:function(t,e){(0,r.default)("/user/forget","POST",t,e)},getUserInfo:function(t,e){(0,r.default)("/user/info","GET",t,e)},bindOkAccount:function(t,e){(0,r.default)("/user/account_bind","POST",t,e)},removeOkAccount:function(t,e){(0,r.default)("/user/account_unbind","POST",t,e)},getWalletInfo:function(t,e){(0,r.default)("/currency/detail","GET",t,e)},getContactWay:function(t,e){(0,r.default)("/service_wechat_pic","GET",t,e)},getCurrencyList:function(t,e){(0,r.default)("/v2/currencyLists","POST",t,e)},getCurrencyNumber:function(t,e){(0,r.default)("/v2/getNumber","POST",t,e)},getRates:function(t,e){(0,r.default)("/wallet/wallet_out_rate","GET",t,e)},onExtract:function(t,e){(0,r.default)("/wallet/out","POST",t,e)},updatePass:function(t,e){(0,r.default)("/updatePassword","POST",t,e)},getInviteCode:function(t,e){(0,r.default)("/user/getInviteCode","GET",t,e)},toBeMiner:function(t,e){(0,r.default)("/user/toBeMiner","POST",t,e)},unlockWarehourse:function(t,e){(0,r.default)("/user/turnOutLock","POST",t,e)},lockWarehourse:function(t,e){(0,r.default)("/user/lock_house","POST",t,e)},getIncome:function(t,e){(0,r.default)("/interest_log","GET",t,e)},getApiUrl:function(){return"http://192.168.1.7/api"},changeUserInfo:function(t,e){(0,r.default)("/user/modify","POST",t,e)},getUserPoolList:function(t,e){(0,r.default)("/user_pool_lists","GET",t,e)},joinOrePool:function(t,e){(0,r.default)("/user/addUserPool","POST",t,e)},getOrePoolMinNumber:function(t,e){(0,r.default)("/mini_join_num","POST",t,e)},exitOrePool:function(t,e){(0,r.default)("/user/turnOutInvestment","POST",t,e)},getOrePoolSum:function(t,e){(0,r.default)("/field/detail","GET",t,e)},getAnnouncementList:function(t,e){(0,r.default)("/news/list","POST",t,e)},getNewsDetail:function(t,e){(0,r.default)("/news/detail","GET",t,e)}};e.default=a},c59f:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("5551"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c799:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGeklEQVRYR5VXfYwbVxGfmbe7DunlDgGBlrYgEXO5+OKP3b1wVUoTUVIiFYEoDapoGyohPgQilC9VIfAHFUihEkWQ8iVKESoJICKgEh9VSaqSplWkXGyv144N5SiChiKgUtugs8/79r1Bc9ydLhf77Js/LK3fm5nfmzfvNzMIQ4rv+5uNMbuVUrsAoEBEbwSAMQBAAHiZmf9ORHGapqestafiOP73MKZFeU0JgmAbMx9AxH2IuBkRgZmXdDQAyIe3ysgLzPwLY8wDtVrt/FoO+gIIw3AjM9+DiJ9DxCvEKTM/Za096TjOjLX2AjO/LMYRcYyZrwaAKaXUHmaWKMn/HWPM/caYr8ZxPNcLSE8A+Xz+TY7jHCOi6+TEWutjxphvNBqNc4MiJuthGAbW2ruJ6APyzcwz8/PztzebzdnV+pcBEGUA+BUAvAEAnmHmT1YqlceGcbx6j+/7e4joCABsA4ALxpj3RlE0s3LfJQDk5J7nnQKAa5j5ZJqmdwybTP0AhmH4GmvtUSLaCwD/7HQ6u1ZGYhmA3Lm19kmlVMjMJ7TWt/S7t/VGQ2ynafpL13X3pmlatdbesGR7GYDv+18moi8CwJ8BYGe5XH6hn6NCoXCDUup9RFSSF8DMf7XW/iaKop8CgO2ll8vlXrVhw4aniWjCGHO4Wq0eWkhU+RkfH58YGRkpI+IrjDE3RlH0hz7OqVQqfU0p9ek+6ycA4PZ+4PP5/C7P854AgKTT6YTNZrO5AKBUKn3fcZwPp2l6LIqiO/udPAgCeZb3MfNLzHzIWvu4UkpOLK/lPgB4vbX2J9Vq9Y5+NorF4sOu6+7XWj9Uq9U+hNlsdvPo6OgziLhJa12K47jRS3nr1q2bRkZG/gQAV2mt74rj+OGV+0ql0juVUr8GAAMAE+Vy+S+97BSLxUnHcSIAmNNaj2OxWLzNcZyfAcDpcrm8QCC9ZPF5lkUxSZJr6/X6iyv3hWEotCxOX22tvblarT7az9bU1NQpISut9fvR9/3vKKU+liTJoTiOD6+ReNOu6/6YmWe3bNnyruPHj8tJl0VqBREJgE3dbvcdjUZD8qGn+L5/UCl1WGv9PQyCQDJzZ7fbvaler59c44lRNpt1x8bGbLlclhpwieTz+Xs8z5M8eFFrPbEWfywS1AmhdgzD8IIkDyJuO3funNzxusX3/X1KKXmCjtb6QK1W+9ZaRsIwnACAFjM/KwCkoHhpmmZrtdo/1us9CIK9zPyIUmpDu92+t9lsfmmQjTAMr1rMl7YAkGTaSETZmZmZ5wYpr7r3IhEJZ7xSKXXv2bNnBzoX/UKh8FrXdZ8FAC0A/iaFx1o7Wa1Wm+sAIAn8GBHdZIx5MIqijwyrG4bhFil0APC8ADgNAG/tdrt7G43G74c1UigUrnFdV8ortdvtyVarJRQ+lPi+v4uIpHM6i4VC4due5308TdNDURT1fYarLQdBIOx3BgBeAoCry+VyeyjvAOD7/meI6H5r7Q/lGd6GiAOJaLXxHTt2XJmm6XukH8xmsz9fzQtrgQmC4AQi7rHW3iURkISQ+7ii3W77rVarJxUPe7pB+0ql0puVUuJDW2vHF4pREAQPEdEHu93u0Xq9vn+QEVlf5PTPI2KSJMnBYRuXFYXvaBRF+xcA+L6fQ8QyEXlzc3Nva7VaTw4CMTU1dTMz/1b2GWPGoygamISFQuE613Ul6e38/Pxbzp8/X1tuSIrF4mHXdQ8y8x+TJNm5utisBhSG4TQzfxcAusaYfYNILJvNjo6Ojj5FRHljzNer1epnxeYygFwuN+J53mnHcUrW2kczmcytZ86c6QyKxDDruVzO8zzvuOM477bWNi5evHj97OzsxUsAyIckCCKeJqLXWWt/l6bpnYMiMQjA9PT0qNb6R4h4CwD8h5l3VyqV1pJer7ZcQvsIIl4JAI0kST5Rr9elU163TE5OXp/JZB4gIt8Y8y9mvjWKoqdXGuo5mGzfvn1bJpOR6lZc3PyDJEmO1Ov1+jAoJKmJ6AAAfHTxmuNOpyODyWVj2lqjmYxbX0DETwGAK5mLiE8YY4REZDR7LpPJLNyj1nqTMeZaRJwioj2I+HYAUACQpmn6TUT8ShRFwpiXycDhtFAoBER0t1JKWG90hQUZSpfod+P/R8HlwfW/Ml0x85FKpSJtXF8ZCGBJU4qPUupGRNyNiNuliZH2a3FdHD5vjJEQS5F5PI5jaXQGyv8AZe76ZE45bJcAAAAASUVORK5CYII="},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}t.exports=n},cb21:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var n="http://192.168.1.7/api";function r(e,r,i,a){t.request({url:n+e,method:r||"GET",data:i,header:{AUTHORIZATION:t.getStorageSync("user_token")},success:function(e){500!==e.statusCode?a&&a(e):t.showToast({title:"服务器错误，请稍后重试",mask:!1,icon:"none",duration:1e3})}})}}).call(this,n("6e42")["default"])},ccd3:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("7054"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},d739:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAcCAYAAACH81QkAAACVElEQVRIS53Vz2sTQRQH8O+bDQoS9KBIQD2o7M5O8cdRr55iq/ijogUVf4J482/wP7AXRaTFHyiICBYrih4qnqNeQjKTbayICopHPSiZfTJhDdM26W6c4/DeZ997O7NLAFCr1daUy+WrQRBMhmH42e0NsyhJkrVpmt5n5oMA3hHRISnll6EQrfU0gPNekhFCjEVR9KEoRMaY3cz8GMB2LykBUI3jeKEIRC6o0WiEQogXALZ5SS1mriqlPuZBXcStZrMZEZGDtvqtARjNq6iHuESttQTwFEDoQQtCiANRFDUHVbQIcUHz8/NbOp3OMwA7vaRPRFSVUup+0DLEBRljNjHz86WQEGJ/v4r6Ig5KkmSztdZBO/yKgiAYDcOw4Vc0EPFamwWwy0v6CuBwHMe1f3srIhm00Vo7w8x7Peg7M48ppd66vVwkm9GGNE1niWhP7+lE34QQrrX3hZDsHK0nokcA9vkVARgvjGTnaArABX+ozHyyMGKMucnMlzwgJaJzUsp7hRCt9Q0Alz2AM+Bu7mCZOWi1WlPMfNYDLDNfVErdyX3FDjDGuMBTHvDHzUAp5T4dvdW3HWYWGXDai/0NYCKO45ml92cZwsyktb5NRGf8CohoQkr5JPcCJkmy2lrrWpgoCiwabAY8dPfCA34COB7HsftYDVzddur1+qpSqeSAI17krzRNj46MjLxaCehW0m6313U6nWlmHv8foItora8AuOYDDlRKvcyroHdO3M/LWnsLwAkAP4QQx6IoelMU6A12bm6uVKlUrgN4oJR6PQzgYv8Cn8r5vqC+SeMAAAAASUVORK5CYII="},e52e:function(t,e,n){"use strict";(function(t){n("5639");r(n("66fd"));var e=r(n("923e"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},f39f:function(t,e,n){"use strict";var r;(function(e){t.exports=e()})(function(){return function(){function t(e,n,i){function a(s,u){if(!n[s]){if(!e[s]){var c="function"==typeof r&&r;if(!u&&c)return r(s,!0);if(o)return o(s,!0);var f=new Error("Cannot find module '"+s+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return a(n||t)},l,l.exports,t,e,n,i)}return n[s].exports}for(var o="function"==typeof r&&r,s=0;s<i.length;s++)a(i[s]);return a}return t}()({1:[function(t,e,n){var r=t("./zlib/deflate"),i=t("./utils/common"),a=t("./utils/strings"),o=t("./zlib/messages"),s=t("./zlib/zstream"),u=Object.prototype.toString,c=0,f=4,l=0,h=1,d=2,p=-1,v=0,_=8;function g(t){if(!(this instanceof g))return new g(t);this.options=i.assign({level:p,method:_,chunkSize:16384,windowBits:15,memLevel:8,strategy:v,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new s,this.strm.avail_out=0;var n=r.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(n!==l)throw new Error(o[n]);if(e.header&&r.deflateSetHeader(this.strm,e.header),e.dictionary){var c;if(c="string"===typeof e.dictionary?a.string2buf(e.dictionary):"[object ArrayBuffer]"===u.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,n=r.deflateSetDictionary(this.strm,c),n!==l)throw new Error(o[n]);this._dict_set=!0}}function y(t,e){var n=new g(e);if(n.push(t,!0),n.err)throw n.msg||o[n.err];return n.result}function m(t,e){return e=e||{},e.raw=!0,y(t,e)}function w(t,e){return e=e||{},e.gzip=!0,y(t,e)}g.prototype.push=function(t,e){var n,o,s=this.strm,p=this.options.chunkSize;if(this.ended)return!1;o=e===~~e?e:!0===e?f:c,"string"===typeof t?s.input=a.string2buf(t):"[object ArrayBuffer]"===u.call(t)?s.input=new Uint8Array(t):s.input=t,s.next_in=0,s.avail_in=s.input.length;do{if(0===s.avail_out&&(s.output=new i.Buf8(p),s.next_out=0,s.avail_out=p),n=r.deflate(s,o),n!==h&&n!==l)return this.onEnd(n),this.ended=!0,!1;0!==s.avail_out&&(0!==s.avail_in||o!==f&&o!==d)||("string"===this.options.to?this.onData(a.buf2binstring(i.shrinkBuf(s.output,s.next_out))):this.onData(i.shrinkBuf(s.output,s.next_out)))}while((s.avail_in>0||0===s.avail_out)&&n!==h);return o===f?(n=r.deflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===l):o!==d||(this.onEnd(l),s.avail_out=0,!0)},g.prototype.onData=function(t){this.chunks.push(t)},g.prototype.onEnd=function(t){t===l&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},n.Deflate=g,n.deflate=y,n.deflateRaw=m,n.gzip=w},{"./utils/common":3,"./utils/strings":4,"./zlib/deflate":8,"./zlib/messages":13,"./zlib/zstream":15}],2:[function(t,e,n){var r=t("./zlib/inflate"),i=t("./utils/common"),a=t("./utils/strings"),o=t("./zlib/constants"),s=t("./zlib/messages"),u=t("./zlib/zstream"),c=t("./zlib/gzheader"),f=Object.prototype.toString;function l(t){if(!(this instanceof l))return new l(t);this.options=i.assign({chunkSize:16384,windowBits:0,to:""},t||{});var e=this.options;e.raw&&e.windowBits>=0&&e.windowBits<16&&(e.windowBits=-e.windowBits,0===e.windowBits&&(e.windowBits=-15)),!(e.windowBits>=0&&e.windowBits<16)||t&&t.windowBits||(e.windowBits+=32),e.windowBits>15&&e.windowBits<48&&0===(15&e.windowBits)&&(e.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new u,this.strm.avail_out=0;var n=r.inflateInit2(this.strm,e.windowBits);if(n!==o.Z_OK)throw new Error(s[n]);if(this.header=new c,r.inflateGetHeader(this.strm,this.header),e.dictionary&&("string"===typeof e.dictionary?e.dictionary=a.string2buf(e.dictionary):"[object ArrayBuffer]"===f.call(e.dictionary)&&(e.dictionary=new Uint8Array(e.dictionary)),e.raw&&(n=r.inflateSetDictionary(this.strm,e.dictionary),n!==o.Z_OK)))throw new Error(s[n])}function h(t,e){var n=new l(e);if(n.push(t,!0),n.err)throw n.msg||s[n.err];return n.result}function d(t,e){return e=e||{},e.raw=!0,h(t,e)}l.prototype.push=function(t,e){var n,s,u,c,l,h=this.strm,d=this.options.chunkSize,p=this.options.dictionary,v=!1;if(this.ended)return!1;s=e===~~e?e:!0===e?o.Z_FINISH:o.Z_NO_FLUSH,"string"===typeof t?h.input=a.binstring2buf(t):"[object ArrayBuffer]"===f.call(t)?h.input=new Uint8Array(t):h.input=t,h.next_in=0,h.avail_in=h.input.length;do{if(0===h.avail_out&&(h.output=new i.Buf8(d),h.next_out=0,h.avail_out=d),n=r.inflate(h,o.Z_NO_FLUSH),n===o.Z_NEED_DICT&&p&&(n=r.inflateSetDictionary(this.strm,p)),n===o.Z_BUF_ERROR&&!0===v&&(n=o.Z_OK,v=!1),n!==o.Z_STREAM_END&&n!==o.Z_OK)return this.onEnd(n),this.ended=!0,!1;h.next_out&&(0!==h.avail_out&&n!==o.Z_STREAM_END&&(0!==h.avail_in||s!==o.Z_FINISH&&s!==o.Z_SYNC_FLUSH)||("string"===this.options.to?(u=a.utf8border(h.output,h.next_out),c=h.next_out-u,l=a.buf2string(h.output,u),h.next_out=c,h.avail_out=d-c,c&&i.arraySet(h.output,h.output,u,c,0),this.onData(l)):this.onData(i.shrinkBuf(h.output,h.next_out)))),0===h.avail_in&&0===h.avail_out&&(v=!0)}while((h.avail_in>0||0===h.avail_out)&&n!==o.Z_STREAM_END);return n===o.Z_STREAM_END&&(s=o.Z_FINISH),s===o.Z_FINISH?(n=r.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,n===o.Z_OK):s!==o.Z_SYNC_FLUSH||(this.onEnd(o.Z_OK),h.avail_out=0,!0)},l.prototype.onData=function(t){this.chunks.push(t)},l.prototype.onEnd=function(t){t===o.Z_OK&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=i.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},n.Inflate=l,n.inflate=h,n.inflateRaw=d,n.ungzip=h},{"./utils/common":3,"./utils/strings":4,"./zlib/constants":6,"./zlib/gzheader":9,"./zlib/inflate":11,"./zlib/messages":13,"./zlib/zstream":15}],3:[function(t,e,n){var r="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;function i(t,e){return Object.prototype.hasOwnProperty.call(t,e)}n.assign=function(t){var e=Array.prototype.slice.call(arguments,1);while(e.length){var n=e.shift();if(n){if("object"!==typeof n)throw new TypeError(n+"must be non-object");for(var r in n)i(n,r)&&(t[r]=n[r])}}return t},n.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var a={arraySet:function(t,e,n,r,i){if(e.subarray&&t.subarray)t.set(e.subarray(n,n+r),i);else for(var a=0;a<r;a++)t[i+a]=e[n+a]},flattenChunks:function(t){var e,n,r,i,a,o;for(r=0,e=0,n=t.length;e<n;e++)r+=t[e].length;for(o=new Uint8Array(r),i=0,e=0,n=t.length;e<n;e++)a=t[e],o.set(a,i),i+=a.length;return o}},o={arraySet:function(t,e,n,r,i){for(var a=0;a<r;a++)t[i+a]=e[n+a]},flattenChunks:function(t){return[].concat.apply([],t)}};n.setTyped=function(t){t?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,a)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(r)},{}],4:[function(t,e,n){var r=t("./common"),i=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch(c){i=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(c){a=!1}for(var o=new r.Buf8(256),s=0;s<256;s++)o[s]=s>=252?6:s>=248?5:s>=240?4:s>=224?3:s>=192?2:1;function u(t,e){if(e<65534&&(t.subarray&&a||!t.subarray&&i))return String.fromCharCode.apply(null,r.shrinkBuf(t,e));for(var n="",o=0;o<e;o++)n+=String.fromCharCode(t[o]);return n}o[254]=o[254]=1,n.string2buf=function(t){var e,n,i,a,o,s=t.length,u=0;for(a=0;a<s;a++)n=t.charCodeAt(a),55296===(64512&n)&&a+1<s&&(i=t.charCodeAt(a+1),56320===(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),a++)),u+=n<128?1:n<2048?2:n<65536?3:4;for(e=new r.Buf8(u),o=0,a=0;o<u;a++)n=t.charCodeAt(a),55296===(64512&n)&&a+1<s&&(i=t.charCodeAt(a+1),56320===(64512&i)&&(n=65536+(n-55296<<10)+(i-56320),a++)),n<128?e[o++]=n:n<2048?(e[o++]=192|n>>>6,e[o++]=128|63&n):n<65536?(e[o++]=224|n>>>12,e[o++]=128|n>>>6&63,e[o++]=128|63&n):(e[o++]=240|n>>>18,e[o++]=128|n>>>12&63,e[o++]=128|n>>>6&63,e[o++]=128|63&n);return e},n.buf2binstring=function(t){return u(t,t.length)},n.binstring2buf=function(t){for(var e=new r.Buf8(t.length),n=0,i=e.length;n<i;n++)e[n]=t.charCodeAt(n);return e},n.buf2string=function(t,e){var n,r,i,a,s=e||t.length,c=new Array(2*s);for(r=0,n=0;n<s;)if(i=t[n++],i<128)c[r++]=i;else if(a=o[i],a>4)c[r++]=65533,n+=a-1;else{i&=2===a?31:3===a?15:7;while(a>1&&n<s)i=i<<6|63&t[n++],a--;a>1?c[r++]=65533:i<65536?c[r++]=i:(i-=65536,c[r++]=55296|i>>10&1023,c[r++]=56320|1023&i)}return u(c,r)},n.utf8border=function(t,e){var n;e=e||t.length,e>t.length&&(e=t.length),n=e-1;while(n>=0&&128===(192&t[n]))n--;return n<0?e:0===n?e:n+o[t[n]]>e?n:e}},{"./common":3}],5:[function(t,e,n){function r(t,e,n,r){var i=65535&t|0,a=t>>>16&65535|0,o=0;while(0!==n){o=n>2e3?2e3:n,n-=o;do{i=i+e[r++]|0,a=a+i|0}while(--o);i%=65521,a%=65521}return i|a<<16|0}e.exports=r},{}],6:[function(t,e,n){e.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],7:[function(t,e,n){function r(){for(var t,e=[],n=0;n<256;n++){t=n;for(var r=0;r<8;r++)t=1&t?3988292384^t>>>1:t>>>1;e[n]=t}return e}var i=r();function a(t,e,n,r){var a=i,o=r+n;t^=-1;for(var s=r;s<o;s++)t=t>>>8^a[255&(t^e[s])];return-1^t}e.exports=a},{}],8:[function(t,e,n){var r,i=t("../utils/common"),a=t("./trees"),o=t("./adler32"),s=t("./crc32"),u=t("./messages"),c=0,f=1,l=3,h=4,d=5,p=0,v=1,_=-2,g=-3,y=-5,m=-1,w=1,b=2,A=3,k=4,x=0,O=2,E=8,S=9,C=15,B=8,P=29,I=256,D=I+1+P,T=30,z=19,$=2*D+1,j=15,M=3,R=258,N=R+M+1,U=32,L=42,F=69,V=73,H=91,Z=103,G=113,K=666,J=1,Q=2,Y=3,W=4,X=3;function q(t,e){return t.msg=u[e],e}function tt(t){return(t<<1)-(t>4?9:0)}function et(t){var e=t.length;while(--e>=0)t[e]=0}function nt(t){var e=t.state,n=e.pending;n>t.avail_out&&(n=t.avail_out),0!==n&&(i.arraySet(t.output,e.pending_buf,e.pending_out,n,t.next_out),t.next_out+=n,e.pending_out+=n,t.total_out+=n,t.avail_out-=n,e.pending-=n,0===e.pending&&(e.pending_out=0))}function rt(t,e){a._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,nt(t.strm)}function it(t,e){t.pending_buf[t.pending++]=e}function at(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function ot(t,e,n,r){var a=t.avail_in;return a>r&&(a=r),0===a?0:(t.avail_in-=a,i.arraySet(e,t.input,t.next_in,a,n),1===t.state.wrap?t.adler=o(t.adler,e,a,n):2===t.state.wrap&&(t.adler=s(t.adler,e,a,n)),t.next_in+=a,t.total_in+=a,a)}function st(t,e){var n,r,i=t.max_chain_length,a=t.strstart,o=t.prev_length,s=t.nice_match,u=t.strstart>t.w_size-N?t.strstart-(t.w_size-N):0,c=t.window,f=t.w_mask,l=t.prev,h=t.strstart+R,d=c[a+o-1],p=c[a+o];t.prev_length>=t.good_match&&(i>>=2),s>t.lookahead&&(s=t.lookahead);do{if(n=e,c[n+o]===p&&c[n+o-1]===d&&c[n]===c[a]&&c[++n]===c[a+1]){a+=2,n++;do{}while(c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&c[++a]===c[++n]&&a<h);if(r=R-(h-a),a=h-R,r>o){if(t.match_start=e,o=r,r>=s)break;d=c[a+o-1],p=c[a+o]}}}while((e=l[e&f])>u&&0!==--i);return o<=t.lookahead?o:t.lookahead}function ut(t){var e,n,r,a,o,s=t.w_size;do{if(a=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-N)){i.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,n=t.hash_size,e=n;do{r=t.head[--e],t.head[e]=r>=s?r-s:0}while(--n);n=s,e=n;do{r=t.prev[--e],t.prev[e]=r>=s?r-s:0}while(--n);a+=s}if(0===t.strm.avail_in)break;if(n=ot(t.strm,t.window,t.strstart+t.lookahead,a),t.lookahead+=n,t.lookahead+t.insert>=M){o=t.strstart-t.insert,t.ins_h=t.window[o],t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+1])&t.hash_mask;while(t.insert)if(t.ins_h=(t.ins_h<<t.hash_shift^t.window[o+M-1])&t.hash_mask,t.prev[o&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=o,o++,t.insert--,t.lookahead+t.insert<M)break}}while(t.lookahead<N&&0!==t.strm.avail_in)}function ct(t,e){var n=65535;for(n>t.pending_buf_size-5&&(n=t.pending_buf_size-5);;){if(t.lookahead<=1){if(ut(t),0===t.lookahead&&e===c)return J;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var r=t.block_start+n;if((0===t.strstart||t.strstart>=r)&&(t.lookahead=t.strstart-r,t.strstart=r,rt(t,!1),0===t.strm.avail_out))return J;if(t.strstart-t.block_start>=t.w_size-N&&(rt(t,!1),0===t.strm.avail_out))return J}return t.insert=0,e===h?(rt(t,!0),0===t.strm.avail_out?Y:W):(t.strstart>t.block_start&&(rt(t,!1),t.strm.avail_out),J)}function ft(t,e){for(var n,r;;){if(t.lookahead<N){if(ut(t),t.lookahead<N&&e===c)return J;if(0===t.lookahead)break}if(n=0,t.lookahead>=M&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+M-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==n&&t.strstart-n<=t.w_size-N&&(t.match_length=st(t,n)),t.match_length>=M)if(r=a._tr_tally(t,t.strstart-t.match_start,t.match_length-M),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=M){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+M-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!==--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else r=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(r&&(rt(t,!1),0===t.strm.avail_out))return J}return t.insert=t.strstart<M-1?t.strstart:M-1,e===h?(rt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(rt(t,!1),0===t.strm.avail_out)?J:Q}function lt(t,e){for(var n,r,i;;){if(t.lookahead<N){if(ut(t),t.lookahead<N&&e===c)return J;if(0===t.lookahead)break}if(n=0,t.lookahead>=M&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+M-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=M-1,0!==n&&t.prev_length<t.max_lazy_match&&t.strstart-n<=t.w_size-N&&(t.match_length=st(t,n),t.match_length<=5&&(t.strategy===w||t.match_length===M&&t.strstart-t.match_start>4096)&&(t.match_length=M-1)),t.prev_length>=M&&t.match_length<=t.prev_length){i=t.strstart+t.lookahead-M,r=a._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-M),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=i&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+M-1])&t.hash_mask,n=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!==--t.prev_length);if(t.match_available=0,t.match_length=M-1,t.strstart++,r&&(rt(t,!1),0===t.strm.avail_out))return J}else if(t.match_available){if(r=a._tr_tally(t,0,t.window[t.strstart-1]),r&&rt(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return J}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(r=a._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<M-1?t.strstart:M-1,e===h?(rt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(rt(t,!1),0===t.strm.avail_out)?J:Q}function ht(t,e){for(var n,r,i,o,s=t.window;;){if(t.lookahead<=R){if(ut(t),t.lookahead<=R&&e===c)return J;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=M&&t.strstart>0&&(i=t.strstart-1,r=s[i],r===s[++i]&&r===s[++i]&&r===s[++i])){o=t.strstart+R;do{}while(r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&r===s[++i]&&i<o);t.match_length=R-(o-i),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=M?(n=a._tr_tally(t,1,t.match_length-M),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(n=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),n&&(rt(t,!1),0===t.strm.avail_out))return J}return t.insert=0,e===h?(rt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(rt(t,!1),0===t.strm.avail_out)?J:Q}function dt(t,e){for(var n;;){if(0===t.lookahead&&(ut(t),0===t.lookahead)){if(e===c)return J;break}if(t.match_length=0,n=a._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,n&&(rt(t,!1),0===t.strm.avail_out))return J}return t.insert=0,e===h?(rt(t,!0),0===t.strm.avail_out?Y:W):t.last_lit&&(rt(t,!1),0===t.strm.avail_out)?J:Q}function pt(t,e,n,r,i){this.good_length=t,this.max_lazy=e,this.nice_length=n,this.max_chain=r,this.func=i}function vt(t){t.window_size=2*t.w_size,et(t.head),t.max_lazy_match=r[t.level].max_lazy,t.good_match=r[t.level].good_length,t.nice_match=r[t.level].nice_length,t.max_chain_length=r[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=M-1,t.match_available=0,t.ins_h=0}function _t(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=E,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new i.Buf16(2*$),this.dyn_dtree=new i.Buf16(2*(2*T+1)),this.bl_tree=new i.Buf16(2*(2*z+1)),et(this.dyn_ltree),et(this.dyn_dtree),et(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new i.Buf16(j+1),this.heap=new i.Buf16(2*D+1),et(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new i.Buf16(2*D+1),et(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function gt(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=O,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?L:G,t.adler=2===e.wrap?0:1,e.last_flush=c,a._tr_init(e),p):q(t,_)}function yt(t){var e=gt(t);return e===p&&vt(t.state),e}function mt(t,e){return t&&t.state?2!==t.state.wrap?_:(t.state.gzhead=e,p):_}function wt(t,e,n,r,a,o){if(!t)return _;var s=1;if(e===m&&(e=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),a<1||a>S||n!==E||r<8||r>15||e<0||e>9||o<0||o>k)return q(t,_);8===r&&(r=9);var u=new _t;return t.state=u,u.strm=t,u.wrap=s,u.gzhead=null,u.w_bits=r,u.w_size=1<<u.w_bits,u.w_mask=u.w_size-1,u.hash_bits=a+7,u.hash_size=1<<u.hash_bits,u.hash_mask=u.hash_size-1,u.hash_shift=~~((u.hash_bits+M-1)/M),u.window=new i.Buf8(2*u.w_size),u.head=new i.Buf16(u.hash_size),u.prev=new i.Buf16(u.w_size),u.lit_bufsize=1<<a+6,u.pending_buf_size=4*u.lit_bufsize,u.pending_buf=new i.Buf8(u.pending_buf_size),u.d_buf=1*u.lit_bufsize,u.l_buf=3*u.lit_bufsize,u.level=e,u.strategy=o,u.method=n,yt(t)}function bt(t,e){return wt(t,e,E,C,B,x)}function At(t,e){var n,i,o,u;if(!t||!t.state||e>d||e<0)return t?q(t,_):_;if(i=t.state,!t.output||!t.input&&0!==t.avail_in||i.status===K&&e!==h)return q(t,0===t.avail_out?y:_);if(i.strm=t,n=i.last_flush,i.last_flush=e,i.status===L)if(2===i.wrap)t.adler=0,it(i,31),it(i,139),it(i,8),i.gzhead?(it(i,(i.gzhead.text?1:0)+(i.gzhead.hcrc?2:0)+(i.gzhead.extra?4:0)+(i.gzhead.name?8:0)+(i.gzhead.comment?16:0)),it(i,255&i.gzhead.time),it(i,i.gzhead.time>>8&255),it(i,i.gzhead.time>>16&255),it(i,i.gzhead.time>>24&255),it(i,9===i.level?2:i.strategy>=b||i.level<2?4:0),it(i,255&i.gzhead.os),i.gzhead.extra&&i.gzhead.extra.length&&(it(i,255&i.gzhead.extra.length),it(i,i.gzhead.extra.length>>8&255)),i.gzhead.hcrc&&(t.adler=s(t.adler,i.pending_buf,i.pending,0)),i.gzindex=0,i.status=F):(it(i,0),it(i,0),it(i,0),it(i,0),it(i,0),it(i,9===i.level?2:i.strategy>=b||i.level<2?4:0),it(i,X),i.status=G);else{var g=E+(i.w_bits-8<<4)<<8,m=-1;m=i.strategy>=b||i.level<2?0:i.level<6?1:6===i.level?2:3,g|=m<<6,0!==i.strstart&&(g|=U),g+=31-g%31,i.status=G,at(i,g),0!==i.strstart&&(at(i,t.adler>>>16),at(i,65535&t.adler)),t.adler=1}if(i.status===F)if(i.gzhead.extra){o=i.pending;while(i.gzindex<(65535&i.gzhead.extra.length)){if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),nt(t),o=i.pending,i.pending===i.pending_buf_size))break;it(i,255&i.gzhead.extra[i.gzindex]),i.gzindex++}i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),i.gzindex===i.gzhead.extra.length&&(i.gzindex=0,i.status=V)}else i.status=V;if(i.status===V)if(i.gzhead.name){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),nt(t),o=i.pending,i.pending===i.pending_buf_size)){u=1;break}u=i.gzindex<i.gzhead.name.length?255&i.gzhead.name.charCodeAt(i.gzindex++):0,it(i,u)}while(0!==u);i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),0===u&&(i.gzindex=0,i.status=H)}else i.status=H;if(i.status===H)if(i.gzhead.comment){o=i.pending;do{if(i.pending===i.pending_buf_size&&(i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),nt(t),o=i.pending,i.pending===i.pending_buf_size)){u=1;break}u=i.gzindex<i.gzhead.comment.length?255&i.gzhead.comment.charCodeAt(i.gzindex++):0,it(i,u)}while(0!==u);i.gzhead.hcrc&&i.pending>o&&(t.adler=s(t.adler,i.pending_buf,i.pending-o,o)),0===u&&(i.status=Z)}else i.status=Z;if(i.status===Z&&(i.gzhead.hcrc?(i.pending+2>i.pending_buf_size&&nt(t),i.pending+2<=i.pending_buf_size&&(it(i,255&t.adler),it(i,t.adler>>8&255),t.adler=0,i.status=G)):i.status=G),0!==i.pending){if(nt(t),0===t.avail_out)return i.last_flush=-1,p}else if(0===t.avail_in&&tt(e)<=tt(n)&&e!==h)return q(t,y);if(i.status===K&&0!==t.avail_in)return q(t,y);if(0!==t.avail_in||0!==i.lookahead||e!==c&&i.status!==K){var w=i.strategy===b?dt(i,e):i.strategy===A?ht(i,e):r[i.level].func(i,e);if(w!==Y&&w!==W||(i.status=K),w===J||w===Y)return 0===t.avail_out&&(i.last_flush=-1),p;if(w===Q&&(e===f?a._tr_align(i):e!==d&&(a._tr_stored_block(i,0,0,!1),e===l&&(et(i.head),0===i.lookahead&&(i.strstart=0,i.block_start=0,i.insert=0))),nt(t),0===t.avail_out))return i.last_flush=-1,p}return e!==h?p:i.wrap<=0?v:(2===i.wrap?(it(i,255&t.adler),it(i,t.adler>>8&255),it(i,t.adler>>16&255),it(i,t.adler>>24&255),it(i,255&t.total_in),it(i,t.total_in>>8&255),it(i,t.total_in>>16&255),it(i,t.total_in>>24&255)):(at(i,t.adler>>>16),at(i,65535&t.adler)),nt(t),i.wrap>0&&(i.wrap=-i.wrap),0!==i.pending?p:v)}function kt(t){var e;return t&&t.state?(e=t.state.status,e!==L&&e!==F&&e!==V&&e!==H&&e!==Z&&e!==G&&e!==K?q(t,_):(t.state=null,e===G?q(t,g):p)):_}function xt(t,e){var n,r,a,s,u,c,f,l,h=e.length;if(!t||!t.state)return _;if(n=t.state,s=n.wrap,2===s||1===s&&n.status!==L||n.lookahead)return _;1===s&&(t.adler=o(t.adler,e,h,0)),n.wrap=0,h>=n.w_size&&(0===s&&(et(n.head),n.strstart=0,n.block_start=0,n.insert=0),l=new i.Buf8(n.w_size),i.arraySet(l,e,h-n.w_size,n.w_size,0),e=l,h=n.w_size),u=t.avail_in,c=t.next_in,f=t.input,t.avail_in=h,t.next_in=0,t.input=e,ut(n);while(n.lookahead>=M){r=n.strstart,a=n.lookahead-(M-1);do{n.ins_h=(n.ins_h<<n.hash_shift^n.window[r+M-1])&n.hash_mask,n.prev[r&n.w_mask]=n.head[n.ins_h],n.head[n.ins_h]=r,r++}while(--a);n.strstart=r,n.lookahead=M-1,ut(n)}return n.strstart+=n.lookahead,n.block_start=n.strstart,n.insert=n.lookahead,n.lookahead=0,n.match_length=n.prev_length=M-1,n.match_available=0,t.next_in=c,t.input=f,t.avail_in=u,n.wrap=s,p}r=[new pt(0,0,0,0,ct),new pt(4,4,8,4,ft),new pt(4,5,16,8,ft),new pt(4,6,32,32,ft),new pt(4,4,16,16,lt),new pt(8,16,32,32,lt),new pt(8,16,128,128,lt),new pt(8,32,128,256,lt),new pt(32,128,258,1024,lt),new pt(32,258,258,4096,lt)],n.deflateInit=bt,n.deflateInit2=wt,n.deflateReset=yt,n.deflateResetKeep=gt,n.deflateSetHeader=mt,n.deflate=At,n.deflateEnd=kt,n.deflateSetDictionary=xt,n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./messages":13,"./trees":14}],9:[function(t,e,n){function r(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}e.exports=r},{}],10:[function(t,e,n){var r=30,i=12;e.exports=function(t,e){var n,a,o,s,u,c,f,l,h,d,p,v,_,g,y,m,w,b,A,k,x,O,E,S,C;n=t.state,a=t.next_in,S=t.input,o=a+(t.avail_in-5),s=t.next_out,C=t.output,u=s-(e-t.avail_out),c=s+(t.avail_out-257),f=n.dmax,l=n.wsize,h=n.whave,d=n.wnext,p=n.window,v=n.hold,_=n.bits,g=n.lencode,y=n.distcode,m=(1<<n.lenbits)-1,w=(1<<n.distbits)-1;t:do{_<15&&(v+=S[a++]<<_,_+=8,v+=S[a++]<<_,_+=8),b=g[v&m];e:for(;;){if(A=b>>>24,v>>>=A,_-=A,A=b>>>16&255,0===A)C[s++]=65535&b;else{if(!(16&A)){if(0===(64&A)){b=g[(65535&b)+(v&(1<<A)-1)];continue e}if(32&A){n.mode=i;break t}t.msg="invalid literal/length code",n.mode=r;break t}k=65535&b,A&=15,A&&(_<A&&(v+=S[a++]<<_,_+=8),k+=v&(1<<A)-1,v>>>=A,_-=A),_<15&&(v+=S[a++]<<_,_+=8,v+=S[a++]<<_,_+=8),b=y[v&w];n:for(;;){if(A=b>>>24,v>>>=A,_-=A,A=b>>>16&255,!(16&A)){if(0===(64&A)){b=y[(65535&b)+(v&(1<<A)-1)];continue n}t.msg="invalid distance code",n.mode=r;break t}if(x=65535&b,A&=15,_<A&&(v+=S[a++]<<_,_+=8,_<A&&(v+=S[a++]<<_,_+=8)),x+=v&(1<<A)-1,x>f){t.msg="invalid distance too far back",n.mode=r;break t}if(v>>>=A,_-=A,A=s-u,x>A){if(A=x-A,A>h&&n.sane){t.msg="invalid distance too far back",n.mode=r;break t}if(O=0,E=p,0===d){if(O+=l-A,A<k){k-=A;do{C[s++]=p[O++]}while(--A);O=s-x,E=C}}else if(d<A){if(O+=l+d-A,A-=d,A<k){k-=A;do{C[s++]=p[O++]}while(--A);if(O=0,d<k){A=d,k-=A;do{C[s++]=p[O++]}while(--A);O=s-x,E=C}}}else if(O+=d-A,A<k){k-=A;do{C[s++]=p[O++]}while(--A);O=s-x,E=C}while(k>2)C[s++]=E[O++],C[s++]=E[O++],C[s++]=E[O++],k-=3;k&&(C[s++]=E[O++],k>1&&(C[s++]=E[O++]))}else{O=s-x;do{C[s++]=C[O++],C[s++]=C[O++],C[s++]=C[O++],k-=3}while(k>2);k&&(C[s++]=C[O++],k>1&&(C[s++]=C[O++]))}break}}break}}while(a<o&&s<c);k=_>>3,a-=k,_-=k<<3,v&=(1<<_)-1,t.next_in=a,t.next_out=s,t.avail_in=a<o?o-a+5:5-(a-o),t.avail_out=s<c?c-s+257:257-(s-c),n.hold=v,n.bits=_}},{}],11:[function(t,e,n){var r=t("../utils/common"),i=t("./adler32"),a=t("./crc32"),o=t("./inffast"),s=t("./inftrees"),u=0,c=1,f=2,l=4,h=5,d=6,p=0,v=1,_=2,g=-2,y=-3,m=-4,w=-5,b=8,A=1,k=2,x=3,O=4,E=5,S=6,C=7,B=8,P=9,I=10,D=11,T=12,z=13,$=14,j=15,M=16,R=17,N=18,U=19,L=20,F=21,V=22,H=23,Z=24,G=25,K=26,J=27,Q=28,Y=29,W=30,X=31,q=32,tt=852,et=592,nt=15,rt=nt;function it(t){return(t>>>24&255)+(t>>>8&65280)+((65280&t)<<8)+((255&t)<<24)}function at(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function ot(t){var e;return t&&t.state?(e=t.state,t.total_in=t.total_out=e.total=0,t.msg="",e.wrap&&(t.adler=1&e.wrap),e.mode=A,e.last=0,e.havedict=0,e.dmax=32768,e.head=null,e.hold=0,e.bits=0,e.lencode=e.lendyn=new r.Buf32(tt),e.distcode=e.distdyn=new r.Buf32(et),e.sane=1,e.back=-1,p):g}function st(t){var e;return t&&t.state?(e=t.state,e.wsize=0,e.whave=0,e.wnext=0,ot(t)):g}function ut(t,e){var n,r;return t&&t.state?(r=t.state,e<0?(n=0,e=-e):(n=1+(e>>4),e<48&&(e&=15)),e&&(e<8||e>15)?g:(null!==r.window&&r.wbits!==e&&(r.window=null),r.wrap=n,r.wbits=e,st(t))):g}function ct(t,e){var n,r;return t?(r=new at,t.state=r,r.window=null,n=ut(t,e),n!==p&&(t.state=null),n):g}function ft(t){return ct(t,rt)}var lt,ht,dt=!0;function pt(t){if(dt){var e;lt=new r.Buf32(512),ht=new r.Buf32(32),e=0;while(e<144)t.lens[e++]=8;while(e<256)t.lens[e++]=9;while(e<280)t.lens[e++]=7;while(e<288)t.lens[e++]=8;s(c,t.lens,0,288,lt,0,t.work,{bits:9}),e=0;while(e<32)t.lens[e++]=5;s(f,t.lens,0,32,ht,0,t.work,{bits:5}),dt=!1}t.lencode=lt,t.lenbits=9,t.distcode=ht,t.distbits=5}function vt(t,e,n,i){var a,o=t.state;return null===o.window&&(o.wsize=1<<o.wbits,o.wnext=0,o.whave=0,o.window=new r.Buf8(o.wsize)),i>=o.wsize?(r.arraySet(o.window,e,n-o.wsize,o.wsize,0),o.wnext=0,o.whave=o.wsize):(a=o.wsize-o.wnext,a>i&&(a=i),r.arraySet(o.window,e,n-i,a,o.wnext),i-=a,i?(r.arraySet(o.window,e,n-i,i,0),o.wnext=i,o.whave=o.wsize):(o.wnext+=a,o.wnext===o.wsize&&(o.wnext=0),o.whave<o.wsize&&(o.whave+=a))),0}function _t(t,e){var n,tt,et,nt,rt,at,ot,st,ut,ct,ft,lt,ht,dt,_t,gt,yt,mt,wt,bt,At,kt,xt,Ot,Et=0,St=new r.Buf8(4),Ct=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!t||!t.state||!t.output||!t.input&&0!==t.avail_in)return g;n=t.state,n.mode===T&&(n.mode=z),rt=t.next_out,et=t.output,ot=t.avail_out,nt=t.next_in,tt=t.input,at=t.avail_in,st=n.hold,ut=n.bits,ct=at,ft=ot,kt=p;t:for(;;)switch(n.mode){case A:if(0===n.wrap){n.mode=z;break}while(ut<16){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(2&n.wrap&&35615===st){n.check=0,St[0]=255&st,St[1]=st>>>8&255,n.check=a(n.check,St,2,0),st=0,ut=0,n.mode=k;break}if(n.flags=0,n.head&&(n.head.done=!1),!(1&n.wrap)||(((255&st)<<8)+(st>>8))%31){t.msg="incorrect header check",n.mode=W;break}if((15&st)!==b){t.msg="unknown compression method",n.mode=W;break}if(st>>>=4,ut-=4,At=8+(15&st),0===n.wbits)n.wbits=At;else if(At>n.wbits){t.msg="invalid window size",n.mode=W;break}n.dmax=1<<At,t.adler=n.check=1,n.mode=512&st?I:T,st=0,ut=0;break;case k:while(ut<16){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(n.flags=st,(255&n.flags)!==b){t.msg="unknown compression method",n.mode=W;break}if(57344&n.flags){t.msg="unknown header flags set",n.mode=W;break}n.head&&(n.head.text=st>>8&1),512&n.flags&&(St[0]=255&st,St[1]=st>>>8&255,n.check=a(n.check,St,2,0)),st=0,ut=0,n.mode=x;case x:while(ut<32){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.head&&(n.head.time=st),512&n.flags&&(St[0]=255&st,St[1]=st>>>8&255,St[2]=st>>>16&255,St[3]=st>>>24&255,n.check=a(n.check,St,4,0)),st=0,ut=0,n.mode=O;case O:while(ut<16){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.head&&(n.head.xflags=255&st,n.head.os=st>>8),512&n.flags&&(St[0]=255&st,St[1]=st>>>8&255,n.check=a(n.check,St,2,0)),st=0,ut=0,n.mode=E;case E:if(1024&n.flags){while(ut<16){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.length=st,n.head&&(n.head.extra_len=st),512&n.flags&&(St[0]=255&st,St[1]=st>>>8&255,n.check=a(n.check,St,2,0)),st=0,ut=0}else n.head&&(n.head.extra=null);n.mode=S;case S:if(1024&n.flags&&(lt=n.length,lt>at&&(lt=at),lt&&(n.head&&(At=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Array(n.head.extra_len)),r.arraySet(n.head.extra,tt,nt,lt,At)),512&n.flags&&(n.check=a(n.check,tt,lt,nt)),at-=lt,nt+=lt,n.length-=lt),n.length))break t;n.length=0,n.mode=C;case C:if(2048&n.flags){if(0===at)break t;lt=0;do{At=tt[nt+lt++],n.head&&At&&n.length<65536&&(n.head.name+=String.fromCharCode(At))}while(At&&lt<at);if(512&n.flags&&(n.check=a(n.check,tt,lt,nt)),at-=lt,nt+=lt,At)break t}else n.head&&(n.head.name=null);n.length=0,n.mode=B;case B:if(4096&n.flags){if(0===at)break t;lt=0;do{At=tt[nt+lt++],n.head&&At&&n.length<65536&&(n.head.comment+=String.fromCharCode(At))}while(At&&lt<at);if(512&n.flags&&(n.check=a(n.check,tt,lt,nt)),at-=lt,nt+=lt,At)break t}else n.head&&(n.head.comment=null);n.mode=P;case P:if(512&n.flags){while(ut<16){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(st!==(65535&n.check)){t.msg="header crc mismatch",n.mode=W;break}st=0,ut=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),t.adler=n.check=0,n.mode=T;break;case I:while(ut<32){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}t.adler=n.check=it(st),st=0,ut=0,n.mode=D;case D:if(0===n.havedict)return t.next_out=rt,t.avail_out=ot,t.next_in=nt,t.avail_in=at,n.hold=st,n.bits=ut,_;t.adler=n.check=1,n.mode=T;case T:if(e===h||e===d)break t;case z:if(n.last){st>>>=7&ut,ut-=7&ut,n.mode=J;break}while(ut<3){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}switch(n.last=1&st,st>>>=1,ut-=1,3&st){case 0:n.mode=$;break;case 1:if(pt(n),n.mode=L,e===d){st>>>=2,ut-=2;break t}break;case 2:n.mode=R;break;case 3:t.msg="invalid block type",n.mode=W}st>>>=2,ut-=2;break;case $:st>>>=7&ut,ut-=7&ut;while(ut<32){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if((65535&st)!==(st>>>16^65535)){t.msg="invalid stored block lengths",n.mode=W;break}if(n.length=65535&st,st=0,ut=0,n.mode=j,e===d)break t;case j:n.mode=M;case M:if(lt=n.length,lt){if(lt>at&&(lt=at),lt>ot&&(lt=ot),0===lt)break t;r.arraySet(et,tt,nt,lt,rt),at-=lt,nt+=lt,ot-=lt,rt+=lt,n.length-=lt;break}n.mode=T;break;case R:while(ut<14){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(n.nlen=257+(31&st),st>>>=5,ut-=5,n.ndist=1+(31&st),st>>>=5,ut-=5,n.ncode=4+(15&st),st>>>=4,ut-=4,n.nlen>286||n.ndist>30){t.msg="too many length or distance symbols",n.mode=W;break}n.have=0,n.mode=N;case N:while(n.have<n.ncode){while(ut<3){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.lens[Ct[n.have++]]=7&st,st>>>=3,ut-=3}while(n.have<19)n.lens[Ct[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,xt={bits:n.lenbits},kt=s(u,n.lens,0,19,n.lencode,0,n.work,xt),n.lenbits=xt.bits,kt){t.msg="invalid code lengths set",n.mode=W;break}n.have=0,n.mode=U;case U:while(n.have<n.nlen+n.ndist){for(;;){if(Et=n.lencode[st&(1<<n.lenbits)-1],_t=Et>>>24,gt=Et>>>16&255,yt=65535&Et,_t<=ut)break;if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(yt<16)st>>>=_t,ut-=_t,n.lens[n.have++]=yt;else{if(16===yt){Ot=_t+2;while(ut<Ot){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(st>>>=_t,ut-=_t,0===n.have){t.msg="invalid bit length repeat",n.mode=W;break}At=n.lens[n.have-1],lt=3+(3&st),st>>>=2,ut-=2}else if(17===yt){Ot=_t+3;while(ut<Ot){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}st>>>=_t,ut-=_t,At=0,lt=3+(7&st),st>>>=3,ut-=3}else{Ot=_t+7;while(ut<Ot){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}st>>>=_t,ut-=_t,At=0,lt=11+(127&st),st>>>=7,ut-=7}if(n.have+lt>n.nlen+n.ndist){t.msg="invalid bit length repeat",n.mode=W;break}while(lt--)n.lens[n.have++]=At}}if(n.mode===W)break;if(0===n.lens[256]){t.msg="invalid code -- missing end-of-block",n.mode=W;break}if(n.lenbits=9,xt={bits:n.lenbits},kt=s(c,n.lens,0,n.nlen,n.lencode,0,n.work,xt),n.lenbits=xt.bits,kt){t.msg="invalid literal/lengths set",n.mode=W;break}if(n.distbits=6,n.distcode=n.distdyn,xt={bits:n.distbits},kt=s(f,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,xt),n.distbits=xt.bits,kt){t.msg="invalid distances set",n.mode=W;break}if(n.mode=L,e===d)break t;case L:n.mode=F;case F:if(at>=6&&ot>=258){t.next_out=rt,t.avail_out=ot,t.next_in=nt,t.avail_in=at,n.hold=st,n.bits=ut,o(t,ft),rt=t.next_out,et=t.output,ot=t.avail_out,nt=t.next_in,tt=t.input,at=t.avail_in,st=n.hold,ut=n.bits,n.mode===T&&(n.back=-1);break}for(n.back=0;;){if(Et=n.lencode[st&(1<<n.lenbits)-1],_t=Et>>>24,gt=Et>>>16&255,yt=65535&Et,_t<=ut)break;if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(gt&&0===(240&gt)){for(mt=_t,wt=gt,bt=yt;;){if(Et=n.lencode[bt+((st&(1<<mt+wt)-1)>>mt)],_t=Et>>>24,gt=Et>>>16&255,yt=65535&Et,mt+_t<=ut)break;if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}st>>>=mt,ut-=mt,n.back+=mt}if(st>>>=_t,ut-=_t,n.back+=_t,n.length=yt,0===gt){n.mode=K;break}if(32&gt){n.back=-1,n.mode=T;break}if(64&gt){t.msg="invalid literal/length code",n.mode=W;break}n.extra=15&gt,n.mode=V;case V:if(n.extra){Ot=n.extra;while(ut<Ot){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.length+=st&(1<<n.extra)-1,st>>>=n.extra,ut-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=H;case H:for(;;){if(Et=n.distcode[st&(1<<n.distbits)-1],_t=Et>>>24,gt=Et>>>16&255,yt=65535&Et,_t<=ut)break;if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(0===(240&gt)){for(mt=_t,wt=gt,bt=yt;;){if(Et=n.distcode[bt+((st&(1<<mt+wt)-1)>>mt)],_t=Et>>>24,gt=Et>>>16&255,yt=65535&Et,mt+_t<=ut)break;if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}st>>>=mt,ut-=mt,n.back+=mt}if(st>>>=_t,ut-=_t,n.back+=_t,64&gt){t.msg="invalid distance code",n.mode=W;break}n.offset=yt,n.extra=15&gt,n.mode=Z;case Z:if(n.extra){Ot=n.extra;while(ut<Ot){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}n.offset+=st&(1<<n.extra)-1,st>>>=n.extra,ut-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){t.msg="invalid distance too far back",n.mode=W;break}n.mode=G;case G:if(0===ot)break t;if(lt=ft-ot,n.offset>lt){if(lt=n.offset-lt,lt>n.whave&&n.sane){t.msg="invalid distance too far back",n.mode=W;break}lt>n.wnext?(lt-=n.wnext,ht=n.wsize-lt):ht=n.wnext-lt,lt>n.length&&(lt=n.length),dt=n.window}else dt=et,ht=rt-n.offset,lt=n.length;lt>ot&&(lt=ot),ot-=lt,n.length-=lt;do{et[rt++]=dt[ht++]}while(--lt);0===n.length&&(n.mode=F);break;case K:if(0===ot)break t;et[rt++]=n.length,ot--,n.mode=F;break;case J:if(n.wrap){while(ut<32){if(0===at)break t;at--,st|=tt[nt++]<<ut,ut+=8}if(ft-=ot,t.total_out+=ft,n.total+=ft,ft&&(t.adler=n.check=n.flags?a(n.check,et,ft,rt-ft):i(n.check,et,ft,rt-ft)),ft=ot,(n.flags?st:it(st))!==n.check){t.msg="incorrect data check",n.mode=W;break}st=0,ut=0}n.mode=Q;case Q:if(n.wrap&&n.flags){while(ut<32){if(0===at)break t;at--,st+=tt[nt++]<<ut,ut+=8}if(st!==(4294967295&n.total)){t.msg="incorrect length check",n.mode=W;break}st=0,ut=0}n.mode=Y;case Y:kt=v;break t;case W:kt=y;break t;case X:return m;case q:default:return g}return t.next_out=rt,t.avail_out=ot,t.next_in=nt,t.avail_in=at,n.hold=st,n.bits=ut,(n.wsize||ft!==t.avail_out&&n.mode<W&&(n.mode<J||e!==l))&&vt(t,t.output,t.next_out,ft-t.avail_out)?(n.mode=X,m):(ct-=t.avail_in,ft-=t.avail_out,t.total_in+=ct,t.total_out+=ft,n.total+=ft,n.wrap&&ft&&(t.adler=n.check=n.flags?a(n.check,et,ft,t.next_out-ft):i(n.check,et,ft,t.next_out-ft)),t.data_type=n.bits+(n.last?64:0)+(n.mode===T?128:0)+(n.mode===L||n.mode===j?256:0),(0===ct&&0===ft||e===l)&&kt===p&&(kt=w),kt)}function gt(t){if(!t||!t.state)return g;var e=t.state;return e.window&&(e.window=null),t.state=null,p}function yt(t,e){var n;return t&&t.state?(n=t.state,0===(2&n.wrap)?g:(n.head=e,e.done=!1,p)):g}function mt(t,e){var n,r,a,o=e.length;return t&&t.state?(n=t.state,0!==n.wrap&&n.mode!==D?g:n.mode===D&&(r=1,r=i(r,e,o,0),r!==n.check)?y:(a=vt(t,e,o,o),a?(n.mode=X,m):(n.havedict=1,p))):g}n.inflateReset=st,n.inflateReset2=ut,n.inflateResetKeep=ot,n.inflateInit=ft,n.inflateInit2=ct,n.inflate=_t,n.inflateEnd=gt,n.inflateGetHeader=yt,n.inflateSetDictionary=mt,n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":3,"./adler32":5,"./crc32":7,"./inffast":10,"./inftrees":12}],12:[function(t,e,n){var r=t("../utils/common"),i=15,a=852,o=592,s=0,u=1,c=2,f=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],d=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];e.exports=function(t,e,n,p,v,_,g,y){var m,w,b,A,k,x,O,E,S,C=y.bits,B=0,P=0,I=0,D=0,T=0,z=0,$=0,j=0,M=0,R=0,N=null,U=0,L=new r.Buf16(i+1),F=new r.Buf16(i+1),V=null,H=0;for(B=0;B<=i;B++)L[B]=0;for(P=0;P<p;P++)L[e[n+P]]++;for(T=C,D=i;D>=1;D--)if(0!==L[D])break;if(T>D&&(T=D),0===D)return v[_++]=20971520,v[_++]=20971520,y.bits=1,0;for(I=1;I<D;I++)if(0!==L[I])break;for(T<I&&(T=I),j=1,B=1;B<=i;B++)if(j<<=1,j-=L[B],j<0)return-1;if(j>0&&(t===s||1!==D))return-1;for(F[1]=0,B=1;B<i;B++)F[B+1]=F[B]+L[B];for(P=0;P<p;P++)0!==e[n+P]&&(g[F[e[n+P]]++]=P);if(t===s?(N=V=g,x=19):t===u?(N=f,U-=257,V=l,H-=257,x=256):(N=h,V=d,x=-1),R=0,P=0,B=I,k=_,z=T,$=0,b=-1,M=1<<T,A=M-1,t===u&&M>a||t===c&&M>o)return 1;for(;;){O=B-$,g[P]<x?(E=0,S=g[P]):g[P]>x?(E=V[H+g[P]],S=N[U+g[P]]):(E=96,S=0),m=1<<B-$,w=1<<z,I=w;do{w-=m,v[k+(R>>$)+w]=O<<24|E<<16|S|0}while(0!==w);m=1<<B-1;while(R&m)m>>=1;if(0!==m?(R&=m-1,R+=m):R=0,P++,0===--L[B]){if(B===D)break;B=e[n+g[P]]}if(B>T&&(R&A)!==b){0===$&&($=T),k+=I,z=B-$,j=1<<z;while(z+$<D){if(j-=L[z+$],j<=0)break;z++,j<<=1}if(M+=1<<z,t===u&&M>a||t===c&&M>o)return 1;b=R&A,v[b]=T<<24|z<<16|k-_|0}}return 0!==R&&(v[k+R]=B-$<<24|64<<16|0),y.bits=T,0}},{"../utils/common":3}],13:[function(t,e,n){e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],14:[function(t,e,n){var r=t("../utils/common"),i=4,a=0,o=1,s=2;function u(t){var e=t.length;while(--e>=0)t[e]=0}var c=0,f=1,l=2,h=3,d=258,p=29,v=256,_=v+1+p,g=30,y=19,m=2*_+1,w=15,b=16,A=7,k=256,x=16,O=17,E=18,S=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],C=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],I=512,D=new Array(2*(_+2));u(D);var T=new Array(2*g);u(T);var z=new Array(I);u(z);var $=new Array(d-h+1);u($);var j=new Array(p);u(j);var M,R,N,U=new Array(g);function L(t,e,n,r,i){this.static_tree=t,this.extra_bits=e,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=t&&t.length}function F(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function V(t){return t<256?z[t]:z[256+(t>>>7)]}function H(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function Z(t,e,n){t.bi_valid>b-n?(t.bi_buf|=e<<t.bi_valid&65535,H(t,t.bi_buf),t.bi_buf=e>>b-t.bi_valid,t.bi_valid+=n-b):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=n)}function G(t,e,n){Z(t,n[2*e],n[2*e+1])}function K(t,e){var n=0;do{n|=1&t,t>>>=1,n<<=1}while(--e>0);return n>>>1}function J(t){16===t.bi_valid?(H(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function Q(t,e){var n,r,i,a,o,s,u=e.dyn_tree,c=e.max_code,f=e.stat_desc.static_tree,l=e.stat_desc.has_stree,h=e.stat_desc.extra_bits,d=e.stat_desc.extra_base,p=e.stat_desc.max_length,v=0;for(a=0;a<=w;a++)t.bl_count[a]=0;for(u[2*t.heap[t.heap_max]+1]=0,n=t.heap_max+1;n<m;n++)r=t.heap[n],a=u[2*u[2*r+1]+1]+1,a>p&&(a=p,v++),u[2*r+1]=a,r>c||(t.bl_count[a]++,o=0,r>=d&&(o=h[r-d]),s=u[2*r],t.opt_len+=s*(a+o),l&&(t.static_len+=s*(f[2*r+1]+o)));if(0!==v){do{a=p-1;while(0===t.bl_count[a])a--;t.bl_count[a]--,t.bl_count[a+1]+=2,t.bl_count[p]--,v-=2}while(v>0);for(a=p;0!==a;a--){r=t.bl_count[a];while(0!==r)i=t.heap[--n],i>c||(u[2*i+1]!==a&&(t.opt_len+=(a-u[2*i+1])*u[2*i],u[2*i+1]=a),r--)}}}function Y(t,e,n){var r,i,a=new Array(w+1),o=0;for(r=1;r<=w;r++)a[r]=o=o+n[r-1]<<1;for(i=0;i<=e;i++){var s=t[2*i+1];0!==s&&(t[2*i]=K(a[s]++,s))}}function W(){var t,e,n,r,i,a=new Array(w+1);for(n=0,r=0;r<p-1;r++)for(j[r]=n,t=0;t<1<<S[r];t++)$[n++]=r;for($[n-1]=r,i=0,r=0;r<16;r++)for(U[r]=i,t=0;t<1<<C[r];t++)z[i++]=r;for(i>>=7;r<g;r++)for(U[r]=i<<7,t=0;t<1<<C[r]-7;t++)z[256+i++]=r;for(e=0;e<=w;e++)a[e]=0;t=0;while(t<=143)D[2*t+1]=8,t++,a[8]++;while(t<=255)D[2*t+1]=9,t++,a[9]++;while(t<=279)D[2*t+1]=7,t++,a[7]++;while(t<=287)D[2*t+1]=8,t++,a[8]++;for(Y(D,_+1,a),t=0;t<g;t++)T[2*t+1]=5,T[2*t]=K(t,5);M=new L(D,S,v+1,_,w),R=new L(T,C,0,g,w),N=new L(new Array(0),B,0,y,A)}function X(t){var e;for(e=0;e<_;e++)t.dyn_ltree[2*e]=0;for(e=0;e<g;e++)t.dyn_dtree[2*e]=0;for(e=0;e<y;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*k]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function q(t){t.bi_valid>8?H(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function tt(t,e,n,i){q(t),i&&(H(t,n),H(t,~n)),r.arraySet(t.pending_buf,t.window,e,n,t.pending),t.pending+=n}function et(t,e,n,r){var i=2*e,a=2*n;return t[i]<t[a]||t[i]===t[a]&&r[e]<=r[n]}function nt(t,e,n){var r=t.heap[n],i=n<<1;while(i<=t.heap_len){if(i<t.heap_len&&et(e,t.heap[i+1],t.heap[i],t.depth)&&i++,et(e,r,t.heap[i],t.depth))break;t.heap[n]=t.heap[i],n=i,i<<=1}t.heap[n]=r}function rt(t,e,n){var r,i,a,o,s=0;if(0!==t.last_lit)do{r=t.pending_buf[t.d_buf+2*s]<<8|t.pending_buf[t.d_buf+2*s+1],i=t.pending_buf[t.l_buf+s],s++,0===r?G(t,i,e):(a=$[i],G(t,a+v+1,e),o=S[a],0!==o&&(i-=j[a],Z(t,i,o)),r--,a=V(r),G(t,a,n),o=C[a],0!==o&&(r-=U[a],Z(t,r,o)))}while(s<t.last_lit);G(t,k,e)}function it(t,e){var n,r,i,a=e.dyn_tree,o=e.stat_desc.static_tree,s=e.stat_desc.has_stree,u=e.stat_desc.elems,c=-1;for(t.heap_len=0,t.heap_max=m,n=0;n<u;n++)0!==a[2*n]?(t.heap[++t.heap_len]=c=n,t.depth[n]=0):a[2*n+1]=0;while(t.heap_len<2)i=t.heap[++t.heap_len]=c<2?++c:0,a[2*i]=1,t.depth[i]=0,t.opt_len--,s&&(t.static_len-=o[2*i+1]);for(e.max_code=c,n=t.heap_len>>1;n>=1;n--)nt(t,a,n);i=u;do{n=t.heap[1],t.heap[1]=t.heap[t.heap_len--],nt(t,a,1),r=t.heap[1],t.heap[--t.heap_max]=n,t.heap[--t.heap_max]=r,a[2*i]=a[2*n]+a[2*r],t.depth[i]=(t.depth[n]>=t.depth[r]?t.depth[n]:t.depth[r])+1,a[2*n+1]=a[2*r+1]=i,t.heap[1]=i++,nt(t,a,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],Q(t,e),Y(a,c,t.bl_count)}function at(t,e,n){var r,i,a=-1,o=e[1],s=0,u=7,c=4;for(0===o&&(u=138,c=3),e[2*(n+1)+1]=65535,r=0;r<=n;r++)i=o,o=e[2*(r+1)+1],++s<u&&i===o||(s<c?t.bl_tree[2*i]+=s:0!==i?(i!==a&&t.bl_tree[2*i]++,t.bl_tree[2*x]++):s<=10?t.bl_tree[2*O]++:t.bl_tree[2*E]++,s=0,a=i,0===o?(u=138,c=3):i===o?(u=6,c=3):(u=7,c=4))}function ot(t,e,n){var r,i,a=-1,o=e[1],s=0,u=7,c=4;for(0===o&&(u=138,c=3),r=0;r<=n;r++)if(i=o,o=e[2*(r+1)+1],!(++s<u&&i===o)){if(s<c)do{G(t,i,t.bl_tree)}while(0!==--s);else 0!==i?(i!==a&&(G(t,i,t.bl_tree),s--),G(t,x,t.bl_tree),Z(t,s-3,2)):s<=10?(G(t,O,t.bl_tree),Z(t,s-3,3)):(G(t,E,t.bl_tree),Z(t,s-11,7));s=0,a=i,0===o?(u=138,c=3):i===o?(u=6,c=3):(u=7,c=4)}}function st(t){var e;for(at(t,t.dyn_ltree,t.l_desc.max_code),at(t,t.dyn_dtree,t.d_desc.max_code),it(t,t.bl_desc),e=y-1;e>=3;e--)if(0!==t.bl_tree[2*P[e]+1])break;return t.opt_len+=3*(e+1)+5+5+4,e}function ut(t,e,n,r){var i;for(Z(t,e-257,5),Z(t,n-1,5),Z(t,r-4,4),i=0;i<r;i++)Z(t,t.bl_tree[2*P[i]+1],3);ot(t,t.dyn_ltree,e-1),ot(t,t.dyn_dtree,n-1)}function ct(t){var e,n=4093624447;for(e=0;e<=31;e++,n>>>=1)if(1&n&&0!==t.dyn_ltree[2*e])return a;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return o;for(e=32;e<v;e++)if(0!==t.dyn_ltree[2*e])return o;return a}u(U);var ft=!1;function lt(t){ft||(W(),ft=!0),t.l_desc=new F(t.dyn_ltree,M),t.d_desc=new F(t.dyn_dtree,R),t.bl_desc=new F(t.bl_tree,N),t.bi_buf=0,t.bi_valid=0,X(t)}function ht(t,e,n,r){Z(t,(c<<1)+(r?1:0),3),tt(t,e,n,!0)}function dt(t){Z(t,f<<1,3),G(t,k,D),J(t)}function pt(t,e,n,r){var a,o,u=0;t.level>0?(t.strm.data_type===s&&(t.strm.data_type=ct(t)),it(t,t.l_desc),it(t,t.d_desc),u=st(t),a=t.opt_len+3+7>>>3,o=t.static_len+3+7>>>3,o<=a&&(a=o)):a=o=n+5,n+4<=a&&-1!==e?ht(t,e,n,r):t.strategy===i||o===a?(Z(t,(f<<1)+(r?1:0),3),rt(t,D,T)):(Z(t,(l<<1)+(r?1:0),3),ut(t,t.l_desc.max_code+1,t.d_desc.max_code+1,u+1),rt(t,t.dyn_ltree,t.dyn_dtree)),X(t),r&&q(t)}function vt(t,e,n){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&n,t.last_lit++,0===e?t.dyn_ltree[2*n]++:(t.matches++,e--,t.dyn_ltree[2*($[n]+v+1)]++,t.dyn_dtree[2*V(e)]++),t.last_lit===t.lit_bufsize-1}n._tr_init=lt,n._tr_stored_block=ht,n._tr_flush_block=pt,n._tr_tally=vt,n._tr_align=dt},{"../utils/common":3}],15:[function(t,e,n){function r(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}e.exports=r},{}],"/":[function(t,e,n){var r=t("./lib/utils/common").assign,i=t("./lib/deflate"),a=t("./lib/inflate"),o=t("./lib/zlib/constants"),s={};r(s,i,a,o),e.exports=s},{"./lib/deflate":1,"./lib/inflate":2,"./lib/utils/common":3,"./lib/zlib/constants":6}]},{},[])("/")})}}]);
});
define('static/js/api.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _http = _interopRequireDefault(require("./http"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /** --------------------------- 设备相关 ------------------------- */
  // 下载地址
  getDownloadUrl: function getDownloadUrl(param, callback) {
    (0, _http.default)('/app_download_url', 'GET', param, callback);
  },
  // 更新推送
  getUpdate: function getUpdate(param, callback) {
    (0, _http.default)('/app_update_version', 'GET', param, callback);
  },

  /** --------------------------- 登录相关 ------------------------- */
  // 登录
  setLogin: function setLogin(param, callback) {
    (0, _http.default)('/login', 'POST', param, callback);
  },
  // 退出
  setLoginOut: function setLoginOut(param, callback) {
    (0, _http.default)('/user/signout', 'POST', param, callback);
  },
  // 注册
  register: function register(param, callback) {
    (0, _http.default)('/register', 'POST', param, callback);
  },
  // 获取验证码
  getVerifyCode: function getVerifyCode(param, callback) {
    (0, _http.default)('/sms_send', 'POST', param, callback);
  },
  // 忘记密码
  forgetPass: function forgetPass(param, callback) {
    (0, _http.default)('/user/forget', 'POST', param, callback);
  },

  /** --------------------------- 用户信息相关 ------------------------- */
  // 获取用户信息
  getUserInfo: function getUserInfo(param, callback) {
    (0, _http.default)('/user/info', 'GET', param, callback);
  },
  // 绑定ok账户
  bindOkAccount: function bindOkAccount(param, callback) {
    (0, _http.default)('/user/account_bind', 'POST', param, callback);
  },
  // 解绑ok账户
  removeOkAccount: function removeOkAccount(param, callback) {
    (0, _http.default)('/user/account_unbind', 'POST', param, callback);
  },
  // 获取钱包信息
  getWalletInfo: function getWalletInfo(param, callback) {
    (0, _http.default)('/currency/detail', 'GET', param, callback);
  },
  // 获取联系方式
  getContactWay: function getContactWay(param, callback) {
    (0, _http.default)('/service_wechat_pic', 'GET', param, callback);
  },
  // 获取货币列表
  getCurrencyList: function getCurrencyList(param, callback) {
    (0, _http.default)('/v2/currencyLists', 'POST', param, callback);
  },
  // 获取货币数量
  getCurrencyNumber: function getCurrencyNumber(param, callback) {
    (0, _http.default)('/v2/getNumber', 'POST', param, callback);
  },
  // 获取手续费
  getRates: function getRates(param, callback) {
    (0, _http.default)('/wallet/wallet_out_rate', 'GET', param, callback);
  },
  // 提币操作
  onExtract: function onExtract(param, callback) {
    (0, _http.default)('/wallet/out', 'POST', param, callback);
  },
  // 修改密码
  updatePass: function updatePass(param, callback) {
    (0, _http.default)('/updatePassword', 'POST', param, callback);
  },
  // 获取邀请码
  getInviteCode: function getInviteCode(param, callback) {
    (0, _http.default)('/user/getInviteCode', 'GET', param, callback);
  },
  // 矿主申请
  toBeMiner: function toBeMiner(param, callback) {
    (0, _http.default)('/user/toBeMiner', 'POST', param, callback);
  },
  // 解仓
  unlockWarehourse: function unlockWarehourse(param, callback) {
    (0, _http.default)('/user/turnOutLock', 'POST', param, callback);
  },
  // 锁仓
  lockWarehourse: function lockWarehourse(param, callback) {
    (0, _http.default)('/user/lock_house', 'POST', param, callback);
  },
  // 获取收益
  getIncome: function getIncome(param, callback) {
    (0, _http.default)('/interest_log', 'GET', param, callback);
  },
  // 获取API地址
  getApiUrl: function getApiUrl() {
    return 'http://192.168.1.7/api';
  },
  // 修改用户资料
  changeUserInfo: function changeUserInfo(param, callback) {
    (0, _http.default)('/user/modify', 'POST', param, callback);
  },

  /** --------------------------- 矿场信息相关 ------------------------- */
  // 矿场列表
  getUserPoolList: function getUserPoolList(param, callback) {
    (0, _http.default)('/user_pool_lists', 'GET', param, callback);
  },
  // 加入矿场
  joinOrePool: function joinOrePool(param, callback) {
    (0, _http.default)('/user/addUserPool', 'POST', param, callback);
  },
  // 加入矿池的最小数值
  getOrePoolMinNumber: function getOrePoolMinNumber(param, callback) {
    (0, _http.default)('/mini_join_num', 'POST', param, callback);
  },
  // 退出矿池
  exitOrePool: function exitOrePool(param, callback) {
    (0, _http.default)('/user/turnOutInvestment', 'POST', param, callback);
  },
  // 获取矿池总量
  getOrePoolSum: function getOrePoolSum(param, callback) {
    (0, _http.default)('/field/detail', 'GET', param, callback);
  },

  /**
   * 获取公告: c_id:10
   * 获取资讯: c_id:9
   */
  getAnnouncementList: function getAnnouncementList(param, callback) {
    (0, _http.default)('/news/list', 'POST', param, callback);
  },
  // 获取新闻详情
  getNewsDetail: function getNewsDetail(param, callback) {
    (0, _http.default)('/news/detail', 'GET', param, callback);
  }
};
exports.default = _default;
});
define('static/js/country.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = [{
  "area_code": "+86",
  "country_id": 37,
  "name_cn": "中国大陆---Z",
  "name_en": "China"
}, {
  "area_code": "+852",
  "country_id": 71,
  "name_cn": "中国香港---Z",
  "name_en": "Hong Kong (China)"
}, {
  "area_code": "+853",
  "country_id": 500,
  "name_cn": "中国澳门---Z",
  "name_en": "Macao (China)"
}, {
  "area_code": "+886",
  "country_id": 169,
  "name_cn": "中国台湾---Z",
  "name_en": "Taiwan (China)"
}, {
  "area_code": "+355",
  "country_id": 3,
  "name_cn": "阿尔巴尼亚---A",
  "name_en": "Albania"
}, {
  "area_code": "+213",
  "country_id": 4,
  "name_cn": "阿尔及利亚---A",
  "name_en": "Algeria"
}, {
  "area_code": "+376",
  "country_id": 5,
  "name_cn": "安道尔共和国---A",
  "name_en": "Andorra"
}, {
  "area_code": "+244",
  "country_id": 1,
  "name_cn": "安哥拉---A",
  "name_en": "Angola"
}, {
  "area_code": "+1264",
  "country_id": 6,
  "name_cn": "安圭拉岛---A",
  "name_en": "Anguilla"
}, {
  "area_code": "+1268",
  "country_id": 7,
  "name_cn": "安提瓜和巴布达---A",
  "name_en": "Antigua and Barbuda"
}, {
  "area_code": "+54",
  "country_id": 8,
  "name_cn": "阿根廷---A",
  "name_en": "Argentina"
}, {
  "area_code": "+297",
  "country_id": 194,
  "name_cn": "阿鲁巴---A",
  "name_en": "Aruba"
}, {
  "area_code": "+247",
  "country_id": 10,
  "name_cn": "阿森松---A",
  "name_en": "Ascension"
}, {
  "area_code": "+61",
  "country_id": 11,
  "name_cn": "澳大利亚---A",
  "name_en": "Australia"
}, {
  "area_code": "+672",
  "country_id": 195,
  "name_cn": "澳大利亚海外领地---A",
  "name_en": "Australianoverseasterritories"
}, {
  "area_code": "+43",
  "country_id": 12,
  "name_cn": "奥地利---A",
  "name_en": "Austria"
}, {
  "area_code": "+994",
  "country_id": 13,
  "name_cn": "阿塞拜疆---A",
  "name_en": "Azerbaijan"
}, {
  "area_code": "+20",
  "country_id": 49,
  "name_cn": "埃及---A",
  "name_en": "Egypt"
}, {
  "area_code": "+372",
  "country_id": 51,
  "name_cn": "爱沙尼亚---A",
  "name_en": "Estonia"
}, {
  "area_code": "+251",
  "country_id": 52,
  "name_cn": "埃塞俄比亚---A",
  "name_en": "Ethiopia"
}, {
  "area_code": "+353",
  "country_id": 78,
  "name_cn": "爱尔兰---A",
  "name_en": "Ireland"
}, {
  "area_code": "+968",
  "country_id": 128,
  "name_cn": "阿曼---A",
  "name_en": "Oman"
}, {
  "area_code": "+971",
  "country_id": 181,
  "name_cn": "阿拉伯联合酋长国---A",
  "name_en": "United Arab Emirates"
}, {
  "area_code": "+1242",
  "country_id": 14,
  "name_cn": "巴哈马---B",
  "name_en": "Bahamas"
}, {
  "area_code": "+973",
  "country_id": 15,
  "name_cn": "巴林---B",
  "name_en": "Bahrain"
}, {
  "area_code": "+1246",
  "country_id": 17,
  "name_cn": "巴巴多斯---B",
  "name_en": "Barbados"
}, {
  "area_code": "+32",
  "country_id": 19,
  "name_cn": "比利时---B",
  "name_en": "Belgium"
}, {
  "area_code": "+501",
  "country_id": 20,
  "name_cn": "伯利兹---B",
  "name_en": "Belize"
}, {
  "area_code": "+229",
  "country_id": 21,
  "name_cn": "贝宁---B",
  "name_en": "Benin"
}, {
  "area_code": "+1441",
  "country_id": 22,
  "name_cn": "百慕大群岛---B",
  "name_en": "Bermuda"
}, {
  "area_code": "+975",
  "country_id": 196,
  "name_cn": "不丹---B",
  "name_en": "Bhutan"
}, {
  "area_code": "+387",
  "country_id": 197,
  "name_cn": "波斯尼亚和黑塞哥维那---B",
  "name_en": "BosniaandHerzegovina"
}, {
  "area_code": "+267",
  "country_id": 24,
  "name_cn": "博茨瓦纳---B",
  "name_en": "Botswana"
}, {
  "area_code": "+55",
  "country_id": 25,
  "name_cn": "巴西---B",
  "name_en": "Brazil"
}, {
  "area_code": "+359",
  "country_id": 27,
  "name_cn": "保加利亚---B",
  "name_en": "Bulgaria"
}, {
  "area_code": "+226",
  "country_id": 28,
  "name_cn": "布基纳法索---B",
  "name_en": "Burkina Faso"
}, {
  "area_code": "+257",
  "country_id": 30,
  "name_cn": "布隆迪---B",
  "name_en": "Burundi"
}, {
  "area_code": "+855",
  "country_id": 85,
  "name_cn": "柬埔寨---B",
  "name_en": "Cambodia"
}, {
  "area_code": "+253",
  "country_id": 46,
  "name_cn": "吉布提---B",
  "name_en": "Djibouti"
}, {
  "area_code": "+354",
  "country_id": 73,
  "name_cn": "冰岛---B",
  "name_en": "Iceland"
}, {
  "area_code": "+970",
  "country_id": 219,
  "name_cn": "巴勒斯坦---B",
  "name_en": "Palestine"
}, {
  "area_code": "+507",
  "country_id": 130,
  "name_cn": "巴拿马---B",
  "name_en": "Panama"
}, {
  "area_code": "+675",
  "country_id": 131,
  "name_cn": "巴布亚新几内亚---B",
  "name_en": "Papua New Cuinea"
}, {
  "area_code": "+595",
  "country_id": 132,
  "name_cn": "巴拉圭---B",
  "name_en": "Paraguay"
}, {
  "area_code": "+51",
  "country_id": 133,
  "name_cn": "秘鲁---B",
  "name_en": "Peru"
}, {
  "area_code": "+48",
  "country_id": 135,
  "name_cn": "波兰---B",
  "name_en": "Poland"
}, {
  "area_code": "+240",
  "country_id": 203,
  "name_cn": "赤道几内亚---C",
  "name_en": "EquatorialGuinea"
}, {
  "area_code": "+49",
  "country_id": 60,
  "name_cn": "德国---D",
  "name_en": "Germany"
}, {
  "area_code": "+684",
  "country_id": 145,
  "name_cn": "东萨摩亚(美)---D",
  "name_en": "Samoa Eastern"
}, {
  "area_code": "+228",
  "country_id": 173,
  "name_cn": "多哥---D",
  "name_en": "Togo"
}, {
  "area_code": "+45",
  "country_id": 45,
  "name_cn": "丹麦---D",
  "name_en": "Denmark"
}, {
  "area_code": "+1809",
  "country_id": 47,
  "name_cn": "多米尼加共和国---D",
  "name_en": "Dominican Republic"
}, {
  "area_code": "+670",
  "country_id": 202,
  "name_cn": "东帝汶---D",
  "name_en": "EastTimor"
}, {
  "area_code": "+9714",
  "country_id": 230,
  "name_cn": "迪拜酋长国---D",
  "name_en": "Emirate of Dubai"
}, {
  "area_code": "+291",
  "country_id": 204,
  "name_cn": "厄立特里亚---E",
  "name_en": "Eritrea"
}, {
  "area_code": "+7",
  "country_id": 142,
  "name_cn": "俄罗斯---E",
  "name_en": "Russia"
}, {
  "area_code": "+238",
  "country_id": 198,
  "name_cn": "佛得角---F",
  "name_en": "CapeVerde"
}, {
  "area_code": "+500",
  "country_id": 205,
  "name_cn": "福克兰群岛---F",
  "name_en": "FalklandIslands"
}, {
  "area_code": "+298",
  "country_id": 206,
  "name_cn": "法罗群岛---F",
  "name_en": "FaroeIslands"
}, {
  "area_code": "+679",
  "country_id": 53,
  "name_cn": "斐济---F",
  "name_en": "Fiji"
}, {
  "area_code": "+358",
  "country_id": 54,
  "name_cn": "芬兰---F",
  "name_en": "Finland"
}, {
  "area_code": "+33",
  "country_id": 55,
  "name_cn": "法国---F",
  "name_en": "France"
}, {
  "area_code": "+594",
  "country_id": 56,
  "name_cn": "法属圭亚那---F",
  "name_en": "French Guiana"
}, {
  "area_code": "+689",
  "country_id": 136,
  "name_cn": "法属玻利尼西亚---F",
  "name_en": "French Polynesia"
}, {
  "area_code": "+63",
  "country_id": 134,
  "name_cn": "菲律宾---F",
  "name_en": "Philippines"
}, {
  "area_code": "+379",
  "country_id": 227,
  "name_cn": "梵蒂冈城---F",
  "name_en": "VaticanCity"
}, {
  "area_code": "+57",
  "country_id": 38,
  "name_cn": "哥伦比亚---G",
  "name_en": "Colombia"
}, {
  "area_code": "+506",
  "country_id": 41,
  "name_cn": "哥斯达黎加---G",
  "name_en": "Costa Rica"
}, {
  "area_code": "+220",
  "country_id": 58,
  "name_cn": "冈比亚---G",
  "name_en": "Gambia"
}, {
  "area_code": "+995",
  "country_id": 59,
  "name_cn": "格鲁吉亚---G",
  "name_en": "Georgia"
}, {
  "area_code": "+299",
  "country_id": 207,
  "name_cn": "格陵兰岛---G",
  "name_en": "Greenland"
}, {
  "area_code": "+1473",
  "country_id": 64,
  "name_cn": "格林纳达---G",
  "name_en": "Grenada"
}, {
  "area_code": "+590",
  "country_id": 208,
  "name_cn": "瓜德罗普---G",
  "name_en": "Guadeloupe"
}, {
  "area_code": "+1671",
  "country_id": 65,
  "name_cn": "关岛---G",
  "name_en": "Guam"
}, {
  "area_code": "+592",
  "country_id": 68,
  "name_cn": "圭亚那---G",
  "name_en": "Guyana"
}, {
  "area_code": "+509",
  "country_id": 69,
  "name_cn": "海地---H",
  "name_en": "Haiti"
}, {
  "area_code": "+504",
  "country_id": 70,
  "name_cn": "洪都拉斯---H",
  "name_en": "Honduras"
}, {
  "area_code": "+82",
  "country_id": 88,
  "name_cn": "韩国---H",
  "name_en": "Korea"
}, {
  "area_code": "+382",
  "country_id": 215,
  "name_cn": "黑山---H",
  "name_en": "Montenegro"
}, {
  "area_code": "+599",
  "country_id": 120,
  "name_cn": "荷属安的列斯---H",
  "name_en": "Netheriands Antilles"
}, {
  "area_code": "+31",
  "country_id": 121,
  "name_cn": "荷兰---H",
  "name_en": "Netherlands"
}, {
  "area_code": "+1",
  "country_id": 32,
  "name_cn": "加拿大---J",
  "name_en": "Canada"
}, {
  "area_code": "+420",
  "country_id": 44,
  "name_cn": "捷克---J",
  "name_en": "Czech Republic"
}, {
  "area_code": "+241",
  "country_id": 57,
  "name_cn": "加蓬---J",
  "name_en": "Gabon"
}, {
  "area_code": "+233",
  "country_id": 61,
  "name_cn": "加纳---J",
  "name_en": "Ghana"
}, {
  "area_code": "+245",
  "country_id": 209,
  "name_cn": "几内亚比绍---J",
  "name_en": "Guinea-Bissau"
}, {
  "area_code": "+686",
  "country_id": 210,
  "name_cn": "基里巴斯---J",
  "name_en": "Kiribati"
}, {
  "area_code": "+996",
  "country_id": 90,
  "name_cn": "吉尔吉斯坦---J",
  "name_en": "Kyrgyzstan"
}, {
  "area_code": "+1345",
  "country_id": 33,
  "name_cn": "开曼群岛---K",
  "name_en": "Cayman Islands."
}, {
  "area_code": "+269",
  "country_id": 199,
  "name_cn": "科摩罗群岛---K",
  "name_en": "ComorosIslands"
}, {
  "area_code": "+682",
  "country_id": 40,
  "name_cn": "库克群岛---K",
  "name_en": "Cook Islands."
}, {
  "area_code": "+385",
  "country_id": 200,
  "name_cn": "克罗地亚---K",
  "name_en": "Croatia"
}, {
  "area_code": "+254",
  "country_id": 87,
  "name_cn": "肯尼亚---K",
  "name_en": "Kenya"
}, {
  "area_code": "+965",
  "country_id": 89,
  "name_cn": "科威特---K",
  "name_en": "Kuwait"
}, {
  "area_code": "+974",
  "country_id": 139,
  "name_cn": "卡塔尔---K",
  "name_en": "Qatar"
}, {
  "area_code": "+856",
  "country_id": 91,
  "name_cn": "老挝---L",
  "name_en": "Laos"
}, {
  "area_code": "+371",
  "country_id": 92,
  "name_cn": "拉脱维亚---L",
  "name_en": "Latvia"
}, {
  "area_code": "+266",
  "country_id": 94,
  "name_cn": "莱索托---L",
  "name_en": "Lesotho"
}, {
  "area_code": "+423",
  "country_id": 97,
  "name_cn": "列支敦士登---L",
  "name_en": "Liechtenstein"
}, {
  "area_code": "+370",
  "country_id": 98,
  "name_cn": "立陶宛---L",
  "name_en": "Lithuania"
}, {
  "area_code": "+352",
  "country_id": 99,
  "name_cn": "卢森堡---L",
  "name_en": "Luxembourg"
}, {
  "area_code": "+262",
  "country_id": 140,
  "name_cn": "留尼旺---L",
  "name_en": "Reunion"
}, {
  "area_code": "+40",
  "country_id": 141,
  "name_cn": "罗马尼亚---L",
  "name_en": "Romania"
}, {
  "area_code": "+250",
  "country_id": 220,
  "name_cn": "卢旺达---L",
  "name_en": "Rwanda"
}, {
  "area_code": "+1",
  "country_id": '',
  "name_cn": "美国---M",
  "name_en": "Amerancra"
}, {
  "area_code": "+389",
  "country_id": 211,
  "name_cn": "马其顿---M",
  "name_en": "Macedonia"
}, {
  "area_code": "+261",
  "country_id": 101,
  "name_cn": "马达加斯加---M",
  "name_en": "Madagascar"
}, {
  "area_code": "+265",
  "country_id": 102,
  "name_cn": "马拉维---M",
  "name_en": "Malawi"
}, {
  "area_code": "+60",
  "country_id": 103,
  "name_cn": "马来西亚---M",
  "name_en": "Malaysia"
}, {
  "area_code": "+960",
  "country_id": 104,
  "name_cn": "马尔代夫---M",
  "name_en": "Maldives"
}, {
  "area_code": "+223",
  "country_id": 105,
  "name_cn": "马里---M",
  "name_en": "Mali"
}, {
  "area_code": "+356",
  "country_id": 106,
  "name_cn": "马耳他---M",
  "name_en": "Malta"
}, {
  "area_code": "+223",
  "country_id": 107,
  "name_cn": "马里亚那群岛---M",
  "name_en": "Marshall Islands"
}, {
  "area_code": "+692",
  "country_id": 212,
  "name_cn": "马绍尔群岛---M",
  "name_en": "MarshallIslands"
}, {
  "area_code": "+596",
  "country_id": 108,
  "name_cn": "马提尼克---M",
  "name_en": "Martinique"
}, {
  "area_code": "+222",
  "country_id": 213,
  "name_cn": "毛里塔尼亚---M",
  "name_en": "Mauritania"
}, {
  "area_code": "+230",
  "country_id": 109,
  "name_cn": "毛里求斯---M",
  "name_en": "Mauritius"
}, {
  "area_code": "+52",
  "country_id": 110,
  "name_cn": "墨西哥---M",
  "name_en": "Mexico"
}, {
  "area_code": "+691",
  "country_id": 214,
  "name_cn": "密克罗尼西亚---M",
  "name_en": "Micronesia"
}, {
  "area_code": "+373",
  "country_id": 111,
  "name_cn": "摩尔多瓦---M",
  "name_en": "Moldova"
}, {
  "area_code": "+377",
  "country_id": 112,
  "name_cn": "摩纳哥---M",
  "name_en": "Monaco"
}, {
  "area_code": "+976",
  "country_id": 113,
  "name_cn": "蒙古---M",
  "name_en": "Mongolia"
}, {
  "area_code": "+1664",
  "country_id": 114,
  "name_cn": "蒙特塞拉特岛---M",
  "name_en": "Montserrat"
}, {
  "area_code": "+212",
  "country_id": 115,
  "name_cn": "摩洛哥---M",
  "name_en": "Morocco"
}, {
  "area_code": "+258",
  "country_id": 116,
  "name_cn": "莫桑比克---M",
  "name_en": "Mozambique"
}, {
  "area_code": "+264",
  "country_id": 117,
  "name_cn": "纳米比亚---N",
  "name_en": "Namibia"
}, {
  "area_code": "+674",
  "country_id": 118,
  "name_cn": "瑙鲁---N",
  "name_en": "Nauru"
}, {
  "area_code": "+977",
  "country_id": 119,
  "name_cn": "尼泊尔---N",
  "name_en": "Nepal"
}, {
  "area_code": "+227",
  "country_id": 124,
  "name_cn": "尼日尔---N",
  "name_en": "Niger"
}, {
  "area_code": "+234",
  "country_id": 125,
  "name_cn": "尼日利亚---N",
  "name_en": "Nigeria"
}, {
  "area_code": "+683",
  "country_id": 217,
  "name_cn": "纽埃岛---N",
  "name_en": "Niue"
}, {
  "area_code": "+47",
  "country_id": 127,
  "name_cn": "挪威---N",
  "name_en": "Norway"
}, {
  "area_code": "+27",
  "country_id": 158,
  "name_cn": "南非---N",
  "name_en": "South Africa"
}, {
  "area_code": "+338",
  "country_id": 189,
  "name_cn": "南斯拉夫---N",
  "name_en": "Yugoslavia"
}, {
  "area_code": "+680",
  "country_id": 218,
  "name_cn": "帕劳---P",
  "name_en": "Palau"
}, {
  "area_code": "+351",
  "country_id": 137,
  "name_cn": "葡萄牙---P",
  "name_en": "Portugal"
}, {
  "area_code": "+1",
  "country_id": 138,
  "name_cn": "波多黎各---P",
  "name_en": "Puerto Rico"
}, {
  "area_code": "+46",
  "country_id": 166,
  "name_cn": "瑞典---R",
  "name_en": "Sweden"
}, {
  "area_code": "+41",
  "country_id": 167,
  "name_cn": "瑞士---R",
  "name_en": "Switzerland"
}, {
  "area_code": "+357",
  "country_id": 43,
  "name_cn": "塞浦路斯---S",
  "name_en": "Cyprus"
}, {
  "area_code": "+503",
  "country_id": 50,
  "name_cn": "萨尔瓦多---S",
  "name_en": "El Salvador"
}, {
  "area_code": "+7",
  "country_id": 86,
  "name_cn": "哈萨克斯坦---S",
  "name_en": "Kazakstan"
}, {
  "area_code": "+1758",
  "country_id": 143,
  "name_cn": "圣卢西亚---S",
  "name_en": "Saint Lueia"
}, {
  "area_code": "+1784",
  "country_id": 144,
  "name_cn": "圣文森特岛---S",
  "name_en": "Saint Vincent"
}, {
  "area_code": "+508",
  "country_id": 222,
  "name_cn": "圣皮埃尔和密克隆群岛---S",
  "name_en": "SaintPierreandMiquelon"
}, {
  "area_code": "+378",
  "country_id": 147,
  "name_cn": "圣马力诺---S",
  "name_en": "San Marino"
}, {
  "area_code": "+239",
  "country_id": 148,
  "name_cn": "圣多美和普林西比---S",
  "name_en": "Sao Tome and Principe"
}, {
  "area_code": "+966",
  "country_id": 149,
  "name_cn": "沙特阿拉伯---S",
  "name_en": "Saudi Arabia"
}, {
  "area_code": "+221",
  "country_id": 150,
  "name_cn": "塞内加尔---S",
  "name_en": "Senegal"
}, {
  "area_code": "+381",
  "country_id": 223,
  "name_cn": "塞尔维亚---S",
  "name_en": "Serbia"
}, {
  "area_code": "+248",
  "country_id": 151,
  "name_cn": "塞舌尔---S",
  "name_en": "Seychelles"
}, {
  "area_code": "+232",
  "country_id": 152,
  "name_cn": "塞拉利昂---S",
  "name_en": "Sierra Leone"
}, {
  "area_code": "+421",
  "country_id": 154,
  "name_cn": "斯洛伐克---S",
  "name_en": "Slovakia"
}, {
  "area_code": "+386",
  "country_id": 155,
  "name_cn": "斯洛文尼亚---S",
  "name_en": "Slovenia"
}, {
  "area_code": "+677",
  "country_id": 156,
  "name_cn": "所罗门群岛---S",
  "name_en": "Solomon Islands"
}, {
  "area_code": "+94",
  "country_id": 160,
  "name_cn": "斯里兰卡---S",
  "name_en": "Sri Lanka"
}, {
  "area_code": "+290",
  "country_id": 221,
  "name_cn": "圣赫勒拿岛---S",
  "name_en": "St.Helena"
}, {
  "area_code": "+1758",
  "country_id": 161,
  "name_cn": "圣卢西亚---S",
  "name_en": "St.Lucia"
}, {
  "area_code": "+1784",
  "country_id": 162,
  "name_cn": "圣文森特---S",
  "name_en": "St.Vincent"
}, {
  "area_code": "+597",
  "country_id": 164,
  "name_cn": "苏里南---S",
  "name_en": "Suriname"
}, {
  "area_code": "+268",
  "country_id": 165,
  "name_cn": "斯威士兰---S",
  "name_en": "Swaziland"
}, {
  "area_code": "+992",
  "country_id": 170,
  "name_cn": "塔吉克斯坦---T",
  "name_en": "Tajikstan"
}, {
  "area_code": "+255",
  "country_id": 171,
  "name_cn": "坦桑尼亚---T",
  "name_en": "Tanzania"
}, {
  "area_code": "+66",
  "country_id": 172,
  "name_cn": "泰国---T",
  "name_en": "Thailand"
}, {
  "area_code": "+690",
  "country_id": 224,
  "name_cn": "托克劳群岛---T",
  "name_en": "Tokelau"
}, {
  "area_code": "+676",
  "country_id": 174,
  "name_cn": "汤加---T",
  "name_en": "Tonga"
}, {
  "area_code": "+1868",
  "country_id": 175,
  "name_cn": "特立尼达和多巴哥---T",
  "name_en": "Trinidad and Tobago"
}, {
  "area_code": "+216",
  "country_id": 176,
  "name_cn": "突尼斯---T",
  "name_en": "Tunisia"
}, {
  "area_code": "+90",
  "country_id": 177,
  "name_cn": "土耳其---T",
  "name_en": "Turkey"
}, {
  "area_code": "+993",
  "country_id": 178,
  "name_cn": "土库曼斯坦---T",
  "name_en": "Turkmenistan"
}, {
  "area_code": "+688",
  "country_id": 225,
  "name_cn": "图瓦卢---T",
  "name_en": "Tuvalu"
}, {
  "area_code": "+673",
  "country_id": 26,
  "name_cn": "文莱---W",
  "name_en": "Brunei"
}, {
  "area_code": "+502",
  "country_id": 66,
  "name_cn": "危地马拉---W",
  "name_en": "Guatemala"
}, {
  "area_code": "+256",
  "country_id": 179,
  "name_cn": "乌干达---W",
  "name_en": "Uganda"
}, {
  "area_code": "+380",
  "country_id": 180,
  "name_cn": "乌克兰---W",
  "name_en": "Ukraine"
}, {
  "area_code": "+598",
  "country_id": 184,
  "name_cn": "乌拉圭---W",
  "name_en": "Uruguay"
}, {
  "area_code": "+998",
  "country_id": 185,
  "name_cn": "乌兹别克斯坦---W",
  "name_en": "Uzbekistan"
}, {
  "area_code": "+678",
  "country_id": 226,
  "name_cn": "瓦努阿图---W",
  "name_en": "Vanuatu"
}, {
  "area_code": "+58",
  "country_id": 186,
  "name_cn": "委内瑞拉---W",
  "name_en": "Venezuela"
}, {
  "area_code": "+681",
  "country_id": 228,
  "name_cn": "瓦利斯和富图纳---W",
  "name_en": "WallisandFutuna"
}, {
  "area_code": "+30",
  "country_id": 63,
  "name_cn": "希腊---X",
  "name_en": "Greece"
}, {
  "area_code": "+36",
  "country_id": 72,
  "name_cn": "匈牙利---X",
  "name_en": "Hungary"
}, {
  "area_code": "+64",
  "country_id": 122,
  "name_cn": "新西兰---X",
  "name_en": "New Zealand"
}, {
  "area_code": "+687",
  "country_id": 216,
  "name_cn": "新喀里多尼亚---X",
  "name_en": "NewCaledonia"
}, {
  "area_code": "+505",
  "country_id": 123,
  "name_cn": "尼加拉瓜---X",
  "name_en": "Nicaragua"
}, {
  "area_code": "+685",
  "country_id": 146,
  "name_cn": "西萨摩亚---X",
  "name_en": "Samoa Western"
}, {
  "area_code": "+65",
  "country_id": 153,
  "name_cn": "新加坡---X",
  "name_en": "Singapore"
}, {
  "area_code": "+34",
  "country_id": 159,
  "name_cn": "西班牙---X",
  "name_en": "Spain"
}, {
  "area_code": "+374",
  "country_id": 9,
  "name_cn": "亚美尼亚---Y",
  "name_en": "Armenia"
}, {
  "area_code": "+1284",
  "country_id": 229,
  "name_cn": "英属维尔京群岛---Y",
  "name_en": "British Virgin Islands"
}, {
  "area_code": "+56",
  "country_id": 36,
  "name_cn": "智利---Z",
  "name_en": "Chile"
}, {
  "area_code": "+350",
  "country_id": 62,
  "name_cn": "直布罗陀---Z",
  "name_en": "Gibraltar"
}, {
  "area_code": "+243",
  "country_id": 192,
  "name_cn": "扎伊尔---Z",
  "name_en": "Zaire"
}, {
  "area_code": "+260",
  "country_id": 193,
  "name_cn": "赞比亚---Z",
  "name_en": "Zambia"
}];
exports.default = _default;
});
define('static/js/http.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = http;
// var API = "http://www.wxlcoin.com/api/";
var API2 = 'http://192.168.1.7/api';

function http(url, type, param, callback) {
  uni.request({
    url: API2 + url,
    method: type || 'GET',
    data: param,
    header: {
      'AUTHORIZATION': uni.getStorageSync('user_token')
    },
    //自定义请求头信息
    success: function success(res) {
      if (res.statusCode === 500) {
        uni.showToast({
          title: "服务器错误，请稍后重试",
          mask: false,
          icon: 'none',
          duration: 1000
        });
        return;
      } // if(res.data.type === '999'){
      // 	setTimeout(()=>{
      // 		uni.redirectTo({
      // 			url:'/pages/login/index'
      // 		})
      // 	},1000)
      // }


      callback && callback(res);
    }
  });
}
});
define('static/js/pako.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

/* pako 1.0.10 nodeca/pako */
(function (f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.pako = f();
  }
})(function () {
  var define, module, exports;
  return function () {
    function r(e, n, t) {
      function o(i, f) {
        if (!n[i]) {
          if (!e[i]) {
            var c = "function" == typeof require && require;
            if (!f && c) return c(i, !0);
            if (u) return u(i, !0);
            var a = new Error("Cannot find module '" + i + "'");
            throw a.code = "MODULE_NOT_FOUND", a;
          }

          var p = n[i] = {
            exports: {}
          };
          e[i][0].call(p.exports, function (r) {
            var n = e[i][1][r];
            return o(n || r);
          }, p, p.exports, r, e, n, t);
        }

        return n[i].exports;
      }

      for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
        o(t[i]);
      }

      return o;
    }

    return r;
  }()({
    1: [function (require, module, exports) {
      'use strict';

      var zlib_deflate = require('./zlib/deflate');

      var utils = require('./utils/common');

      var strings = require('./utils/strings');

      var msg = require('./zlib/messages');

      var ZStream = require('./zlib/zstream');

      var toString = Object.prototype.toString;
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      var Z_NO_FLUSH = 0;
      var Z_FINISH = 4;
      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_SYNC_FLUSH = 2;
      var Z_DEFAULT_COMPRESSION = -1;
      var Z_DEFAULT_STRATEGY = 0;
      var Z_DEFLATED = 8;
      /* ===========================================================================*/

      /**
       * class Deflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[deflate]],
       * [[deflateRaw]] and [[gzip]].
       **/

      /* internal
       * Deflate.chunks -> Array
       *
       * Chunks of output data, if [[Deflate#onData]] not overridden.
       **/

      /**
       * Deflate.result -> Uint8Array|Array
       *
       * Compressed result, generated by default [[Deflate#onData]]
       * and [[Deflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Deflate#push]] with `Z_FINISH` / `true` param)  or if you
       * push a chunk with explicit flush (call [[Deflate#push]] with
       * `Z_SYNC_FLUSH` param).
       **/

      /**
       * Deflate.err -> Number
       *
       * Error code after deflate finished. 0 (Z_OK) on success.
       * You will not need it in real life, because deflate errors
       * are possible only on wrong options or bad `onData` / `onEnd`
       * custom handlers.
       **/

      /**
       * Deflate.msg -> String
       *
       * Error message, if [[Deflate.err]] != 0
       **/

      /**
       * new Deflate(options)
       * - options (Object): zlib deflate options.
       *
       * Creates new deflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `level`
       * - `windowBits`
       * - `memLevel`
       * - `strategy`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw deflate
       * - `gzip` (Boolean) - create gzip wrapper
       * - `to` (String) - if equal to 'string', then result will be "binary string"
       *    (each char code [0..255])
       * - `header` (Object) - custom header for gzip
       *   - `text` (Boolean) - true if compressed data believed to be text
       *   - `time` (Number) - modification time, unix timestamp
       *   - `os` (Number) - operation system code
       *   - `extra` (Array) - array of bytes with extra data (max 65536)
       *   - `name` (String) - file name (binary string)
       *   - `comment` (String) - comment (binary string)
       *   - `hcrc` (Boolean) - true if header crc should be added
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * var deflate = new pako.Deflate({ level: 3});
       *
       * deflate.push(chunk1, false);
       * deflate.push(chunk2, true);  // true -> last chunk
       *
       * if (deflate.err) { throw new Error(deflate.err); }
       *
       * console.log(deflate.result);
       * ```
       **/

      function Deflate(options) {
        if (!(this instanceof Deflate)) return new Deflate(options);
        this.options = utils.assign({
          level: Z_DEFAULT_COMPRESSION,
          method: Z_DEFLATED,
          chunkSize: 16384,
          windowBits: 15,
          memLevel: 8,
          strategy: Z_DEFAULT_STRATEGY,
          to: ''
        }, options || {});
        var opt = this.options;

        if (opt.raw && opt.windowBits > 0) {
          opt.windowBits = -opt.windowBits;
        } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
          opt.windowBits += 16;
        }

        this.err = 0; // error code, if happens (0 = Z_OK)

        this.msg = ''; // error message

        this.ended = false; // used to avoid multiple onEnd() calls

        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_deflate.deflateInit2(this.strm, opt.level, opt.method, opt.windowBits, opt.memLevel, opt.strategy);

        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }

        if (opt.header) {
          zlib_deflate.deflateSetHeader(this.strm, opt.header);
        }

        if (opt.dictionary) {
          var dict; // Convert data if needed

          if (typeof opt.dictionary === 'string') {
            // If we need to compress text, change encoding to utf8.
            dict = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
            dict = new Uint8Array(opt.dictionary);
          } else {
            dict = opt.dictionary;
          }

          status = zlib_deflate.deflateSetDictionary(this.strm, dict);

          if (status !== Z_OK) {
            throw new Error(msg[status]);
          }

          this._dict_set = true;
        }
      }
      /**
       * Deflate#push(data[, mode]) -> Boolean
       * - data (Uint8Array|Array|ArrayBuffer|String): input data. Strings will be
       *   converted to utf8 byte sequence.
       * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
       *
       * Sends input data to deflate pipe, generating [[Deflate#onData]] calls with
       * new compressed chunks. Returns `true` on success. The last data block must have
       * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
       * [[Deflate#onEnd]]. For interim explicit flushes (without ending the stream) you
       * can use mode Z_SYNC_FLUSH, keeping the compression context.
       *
       * On fail call [[Deflate#onEnd]] with error code and return false.
       *
       * We strongly recommend to use `Uint8Array` on input for best speed (output
       * array format is detected automatically). Also, don't skip last param and always
       * use the same type in your code (boolean or number). That will improve JS speed.
       *
       * For regular `Array`-s make sure all elements are [0..255].
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/


      Deflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;

        var status, _mode;

        if (this.ended) {
          return false;
        }

        _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH; // Convert data if needed

        if (typeof data === 'string') {
          // If we need to compress text, change encoding to utf8.
          strm.input = strings.string2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_deflate.deflate(strm, _mode);
          /* no bad return value */

          if (status !== Z_STREAM_END && status !== Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
            if (this.options.to === 'string') {
              this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END); // Finalize on the last chunk.


        if (_mode === Z_FINISH) {
          status = zlib_deflate.deflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === Z_OK;
        } // callback interim results if Z_SYNC_FLUSH.


        if (_mode === Z_SYNC_FLUSH) {
          this.onEnd(Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };
      /**
       * Deflate#onData(chunk) -> Void
       * - chunk (Uint8Array|Array|String): output data. Type of array depends
       *   on js engine support. When string output requested, each chunk
       *   will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/


      Deflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };
      /**
       * Deflate#onEnd(status) -> Void
       * - status (Number): deflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called once after you tell deflate that the input stream is
       * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
       * or if an error happened. By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/


      Deflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === Z_OK) {
          if (this.options.to === 'string') {
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }

        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      /**
       * deflate(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * Compress `data` with deflate algorithm and `options`.
       *
       * Supported options are:
       *
       * - level
       * - windowBits
       * - memLevel
       * - strategy
       * - dictionary
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be "binary string"
       *    (each char code [0..255])
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , data = Uint8Array([1,2,3,4,5,6,7,8,9]);
       *
       * console.log(pako.deflate(data));
       * ```
       **/


      function deflate(input, options) {
        var deflator = new Deflate(options);
        deflator.push(input, true); // That will never happens, if you don't cheat with options :)

        if (deflator.err) {
          throw deflator.msg || msg[deflator.err];
        }

        return deflator.result;
      }
      /**
       * deflateRaw(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/


      function deflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return deflate(input, options);
      }
      /**
       * gzip(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to compress.
       * - options (Object): zlib deflate options.
       *
       * The same as [[deflate]], but create gzip wrapper instead of
       * deflate one.
       **/


      function gzip(input, options) {
        options = options || {};
        options.gzip = true;
        return deflate(input, options);
      }

      exports.Deflate = Deflate;
      exports.deflate = deflate;
      exports.deflateRaw = deflateRaw;
      exports.gzip = gzip;
    }, {
      "./utils/common": 3,
      "./utils/strings": 4,
      "./zlib/deflate": 8,
      "./zlib/messages": 13,
      "./zlib/zstream": 15
    }],
    2: [function (require, module, exports) {
      'use strict';

      var zlib_inflate = require('./zlib/inflate');

      var utils = require('./utils/common');

      var strings = require('./utils/strings');

      var c = require('./zlib/constants');

      var msg = require('./zlib/messages');

      var ZStream = require('./zlib/zstream');

      var GZheader = require('./zlib/gzheader');

      var toString = Object.prototype.toString;
      /**
       * class Inflate
       *
       * Generic JS-style wrapper for zlib calls. If you don't need
       * streaming behaviour - use more simple functions: [[inflate]]
       * and [[inflateRaw]].
       **/

      /* internal
       * inflate.chunks -> Array
       *
       * Chunks of output data, if [[Inflate#onData]] not overridden.
       **/

      /**
       * Inflate.result -> Uint8Array|Array|String
       *
       * Uncompressed result, generated by default [[Inflate#onData]]
       * and [[Inflate#onEnd]] handlers. Filled after you push last chunk
       * (call [[Inflate#push]] with `Z_FINISH` / `true` param) or if you
       * push a chunk with explicit flush (call [[Inflate#push]] with
       * `Z_SYNC_FLUSH` param).
       **/

      /**
       * Inflate.err -> Number
       *
       * Error code after inflate finished. 0 (Z_OK) on success.
       * Should be checked if broken data possible.
       **/

      /**
       * Inflate.msg -> String
       *
       * Error message, if [[Inflate.err]] != 0
       **/

      /**
       * new Inflate(options)
       * - options (Object): zlib inflate options.
       *
       * Creates new inflator instance with specified params. Throws exception
       * on bad params. Supported options:
       *
       * - `windowBits`
       * - `dictionary`
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information on these.
       *
       * Additional options, for internal needs:
       *
       * - `chunkSize` - size of generated data chunks (16K by default)
       * - `raw` (Boolean) - do raw inflate
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       * By default, when no options set, autodetect deflate/gzip data format via
       * wrapper header.
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , chunk1 = Uint8Array([1,2,3,4,5,6,7,8,9])
       *   , chunk2 = Uint8Array([10,11,12,13,14,15,16,17,18,19]);
       *
       * var inflate = new pako.Inflate({ level: 3});
       *
       * inflate.push(chunk1, false);
       * inflate.push(chunk2, true);  // true -> last chunk
       *
       * if (inflate.err) { throw new Error(inflate.err); }
       *
       * console.log(inflate.result);
       * ```
       **/

      function Inflate(options) {
        if (!(this instanceof Inflate)) return new Inflate(options);
        this.options = utils.assign({
          chunkSize: 16384,
          windowBits: 0,
          to: ''
        }, options || {});
        var opt = this.options; // Force window size for `raw` data, if not set directly,
        // because we have no header for autodetect.

        if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
          opt.windowBits = -opt.windowBits;

          if (opt.windowBits === 0) {
            opt.windowBits = -15;
          }
        } // If `windowBits` not defined (and mode not raw) - set autodetect flag for gzip/deflate


        if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options && options.windowBits)) {
          opt.windowBits += 32;
        } // Gzip header has no info about windows size, we can do autodetect only
        // for deflate. So, if window size not set, force it to max when gzip possible


        if (opt.windowBits > 15 && opt.windowBits < 48) {
          // bit 3 (16) -> gzipped data
          // bit 4 (32) -> autodetect gzip/deflate
          if ((opt.windowBits & 15) === 0) {
            opt.windowBits |= 15;
          }
        }

        this.err = 0; // error code, if happens (0 = Z_OK)

        this.msg = ''; // error message

        this.ended = false; // used to avoid multiple onEnd() calls

        this.chunks = []; // chunks of compressed data

        this.strm = new ZStream();
        this.strm.avail_out = 0;
        var status = zlib_inflate.inflateInit2(this.strm, opt.windowBits);

        if (status !== c.Z_OK) {
          throw new Error(msg[status]);
        }

        this.header = new GZheader();
        zlib_inflate.inflateGetHeader(this.strm, this.header); // Setup dictionary

        if (opt.dictionary) {
          // Convert data if needed
          if (typeof opt.dictionary === 'string') {
            opt.dictionary = strings.string2buf(opt.dictionary);
          } else if (toString.call(opt.dictionary) === '[object ArrayBuffer]') {
            opt.dictionary = new Uint8Array(opt.dictionary);
          }

          if (opt.raw) {
            //In raw mode we need to set the dictionary early
            status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);

            if (status !== c.Z_OK) {
              throw new Error(msg[status]);
            }
          }
        }
      }
      /**
       * Inflate#push(data[, mode]) -> Boolean
       * - data (Uint8Array|Array|ArrayBuffer|String): input data
       * - mode (Number|Boolean): 0..6 for corresponding Z_NO_FLUSH..Z_TREE modes.
       *   See constants. Skipped or `false` means Z_NO_FLUSH, `true` means Z_FINISH.
       *
       * Sends input data to inflate pipe, generating [[Inflate#onData]] calls with
       * new output chunks. Returns `true` on success. The last data block must have
       * mode Z_FINISH (or `true`). That will flush internal pending buffers and call
       * [[Inflate#onEnd]]. For interim explicit flushes (without ending the stream) you
       * can use mode Z_SYNC_FLUSH, keeping the decompression context.
       *
       * On fail call [[Inflate#onEnd]] with error code and return false.
       *
       * We strongly recommend to use `Uint8Array` on input for best speed (output
       * format is detected automatically). Also, don't skip last param and always
       * use the same type in your code (boolean or number). That will improve JS speed.
       *
       * For regular `Array`-s make sure all elements are [0..255].
       *
       * ##### Example
       *
       * ```javascript
       * push(chunk, false); // push one of data chunks
       * ...
       * push(chunk, true);  // push last chunk
       * ```
       **/


      Inflate.prototype.push = function (data, mode) {
        var strm = this.strm;
        var chunkSize = this.options.chunkSize;
        var dictionary = this.options.dictionary;

        var status, _mode;

        var next_out_utf8, tail, utf8str; // Flag to properly process Z_BUF_ERROR on testing inflate call
        // when we check that all output data was flushed.

        var allowBufError = false;

        if (this.ended) {
          return false;
        }

        _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH; // Convert data if needed

        if (typeof data === 'string') {
          // Only binary strings can be decompressed on practice
          strm.input = strings.binstring2buf(data);
        } else if (toString.call(data) === '[object ArrayBuffer]') {
          strm.input = new Uint8Array(data);
        } else {
          strm.input = data;
        }

        strm.next_in = 0;
        strm.avail_in = strm.input.length;

        do {
          if (strm.avail_out === 0) {
            strm.output = new utils.Buf8(chunkSize);
            strm.next_out = 0;
            strm.avail_out = chunkSize;
          }

          status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
          /* no bad return value */

          if (status === c.Z_NEED_DICT && dictionary) {
            status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
          }

          if (status === c.Z_BUF_ERROR && allowBufError === true) {
            status = c.Z_OK;
            allowBufError = false;
          }

          if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
            this.onEnd(status);
            this.ended = true;
            return false;
          }

          if (strm.next_out) {
            if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
              if (this.options.to === 'string') {
                next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
                tail = strm.next_out - next_out_utf8;
                utf8str = strings.buf2string(strm.output, next_out_utf8); // move tail

                strm.next_out = tail;
                strm.avail_out = chunkSize - tail;

                if (tail) {
                  utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
                }

                this.onData(utf8str);
              } else {
                this.onData(utils.shrinkBuf(strm.output, strm.next_out));
              }
            }
          } // When no more input data, we should check that internal inflate buffers
          // are flushed. The only way to do it when avail_out = 0 - run one more
          // inflate pass. But if output data not exists, inflate return Z_BUF_ERROR.
          // Here we set flag to process this error properly.
          //
          // NOTE. Deflate does not return error in this case and does not needs such
          // logic.


          if (strm.avail_in === 0 && strm.avail_out === 0) {
            allowBufError = true;
          }
        } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);

        if (status === c.Z_STREAM_END) {
          _mode = c.Z_FINISH;
        } // Finalize on the last chunk.


        if (_mode === c.Z_FINISH) {
          status = zlib_inflate.inflateEnd(this.strm);
          this.onEnd(status);
          this.ended = true;
          return status === c.Z_OK;
        } // callback interim results if Z_SYNC_FLUSH.


        if (_mode === c.Z_SYNC_FLUSH) {
          this.onEnd(c.Z_OK);
          strm.avail_out = 0;
          return true;
        }

        return true;
      };
      /**
       * Inflate#onData(chunk) -> Void
       * - chunk (Uint8Array|Array|String): output data. Type of array depends
       *   on js engine support. When string output requested, each chunk
       *   will be string.
       *
       * By default, stores data blocks in `chunks[]` property and glue
       * those in `onEnd`. Override this handler, if you need another behaviour.
       **/


      Inflate.prototype.onData = function (chunk) {
        this.chunks.push(chunk);
      };
      /**
       * Inflate#onEnd(status) -> Void
       * - status (Number): inflate status. 0 (Z_OK) on success,
       *   other if not.
       *
       * Called either after you tell inflate that the input stream is
       * complete (Z_FINISH) or should be flushed (Z_SYNC_FLUSH)
       * or if an error happened. By default - join collected chunks,
       * free memory and fill `results` / `err` properties.
       **/


      Inflate.prototype.onEnd = function (status) {
        // On success - join
        if (status === c.Z_OK) {
          if (this.options.to === 'string') {
            // Glue & convert here, until we teach pako to send
            // utf8 aligned strings to onData
            this.result = this.chunks.join('');
          } else {
            this.result = utils.flattenChunks(this.chunks);
          }
        }

        this.chunks = [];
        this.err = status;
        this.msg = this.strm.msg;
      };
      /**
       * inflate(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Decompress `data` with inflate/ungzip and `options`. Autodetect
       * format via wrapper header by default. That's why we don't provide
       * separate `ungzip` method.
       *
       * Supported options are:
       *
       * - windowBits
       *
       * [http://zlib.net/manual.html#Advanced](http://zlib.net/manual.html#Advanced)
       * for more information.
       *
       * Sugar (options):
       *
       * - `raw` (Boolean) - say that we work with raw stream, if you don't wish to specify
       *   negative windowBits implicitly.
       * - `to` (String) - if equal to 'string', then result will be converted
       *   from utf8 to utf16 (javascript) string. When string output requested,
       *   chunk length can differ from `chunkSize`, depending on content.
       *
       *
       * ##### Example:
       *
       * ```javascript
       * var pako = require('pako')
       *   , input = pako.deflate([1,2,3,4,5,6,7,8,9])
       *   , output;
       *
       * try {
       *   output = pako.inflate(input);
       * } catch (err)
       *   console.log(err);
       * }
       * ```
       **/


      function inflate(input, options) {
        var inflator = new Inflate(options);
        inflator.push(input, true); // That will never happens, if you don't cheat with options :)

        if (inflator.err) {
          throw inflator.msg || msg[inflator.err];
        }

        return inflator.result;
      }
      /**
       * inflateRaw(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * The same as [[inflate]], but creates raw data, without wrapper
       * (header and adler32 crc).
       **/


      function inflateRaw(input, options) {
        options = options || {};
        options.raw = true;
        return inflate(input, options);
      }
      /**
       * ungzip(data[, options]) -> Uint8Array|Array|String
       * - data (Uint8Array|Array|String): input data to decompress.
       * - options (Object): zlib inflate options.
       *
       * Just shortcut to [[inflate]], because it autodetects format
       * by header.content. Done for convenience.
       **/


      exports.Inflate = Inflate;
      exports.inflate = inflate;
      exports.inflateRaw = inflateRaw;
      exports.ungzip = inflate;
    }, {
      "./utils/common": 3,
      "./utils/strings": 4,
      "./zlib/constants": 6,
      "./zlib/gzheader": 9,
      "./zlib/inflate": 11,
      "./zlib/messages": 13,
      "./zlib/zstream": 15
    }],
    3: [function (require, module, exports) {
      'use strict';

      var TYPED_OK = typeof Uint8Array !== 'undefined' && typeof Uint16Array !== 'undefined' && typeof Int32Array !== 'undefined';

      function _has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }

      exports.assign = function (obj
      /*from1, from2, from3, ...*/
      ) {
        var sources = Array.prototype.slice.call(arguments, 1);

        while (sources.length) {
          var source = sources.shift();

          if (!source) {
            continue;
          }

          if (typeof source !== 'object') {
            throw new TypeError(source + 'must be non-object');
          }

          for (var p in source) {
            if (_has(source, p)) {
              obj[p] = source[p];
            }
          }
        }

        return obj;
      }; // reduce buffer size, avoiding mem copy


      exports.shrinkBuf = function (buf, size) {
        if (buf.length === size) {
          return buf;
        }

        if (buf.subarray) {
          return buf.subarray(0, size);
        }

        buf.length = size;
        return buf;
      };

      var fnTyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          if (src.subarray && dest.subarray) {
            dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
            return;
          } // Fallback to ordinary array


          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          var i, l, len, pos, chunk, result; // calculate data length

          len = 0;

          for (i = 0, l = chunks.length; i < l; i++) {
            len += chunks[i].length;
          } // join chunks


          result = new Uint8Array(len);
          pos = 0;

          for (i = 0, l = chunks.length; i < l; i++) {
            chunk = chunks[i];
            result.set(chunk, pos);
            pos += chunk.length;
          }

          return result;
        }
      };
      var fnUntyped = {
        arraySet: function arraySet(dest, src, src_offs, len, dest_offs) {
          for (var i = 0; i < len; i++) {
            dest[dest_offs + i] = src[src_offs + i];
          }
        },
        // Join array of chunks to single array.
        flattenChunks: function flattenChunks(chunks) {
          return [].concat.apply([], chunks);
        }
      }; // Enable/Disable typed arrays use, for testing
      //

      exports.setTyped = function (on) {
        if (on) {
          exports.Buf8 = Uint8Array;
          exports.Buf16 = Uint16Array;
          exports.Buf32 = Int32Array;
          exports.assign(exports, fnTyped);
        } else {
          exports.Buf8 = Array;
          exports.Buf16 = Array;
          exports.Buf32 = Array;
          exports.assign(exports, fnUntyped);
        }
      };

      exports.setTyped(TYPED_OK);
    }, {}],
    4: [function (require, module, exports) {
      // String encode/decode helpers
      'use strict';

      var utils = require('./common'); // Quick check if we can use fast array to bin string conversion
      //
      // - apply(Array) can fail on Android 2.2
      // - apply(Uint8Array) can fail on iOS 5.1 Safari
      //


      var STR_APPLY_OK = true;
      var STR_APPLY_UIA_OK = true;

      try {
        String.fromCharCode.apply(null, [0]);
      } catch (__) {
        STR_APPLY_OK = false;
      }

      try {
        String.fromCharCode.apply(null, new Uint8Array(1));
      } catch (__) {
        STR_APPLY_UIA_OK = false;
      } // Table with utf8 lengths (calculated by first byte of sequence)
      // Note, that 5 & 6-byte values and some 4-byte values can not be represented in JS,
      // because max possible codepoint is 0x10ffff


      var _utf8len = new utils.Buf8(256);

      for (var q = 0; q < 256; q++) {
        _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
      }

      _utf8len[254] = _utf8len[254] = 1; // Invalid sequence start
      // convert string to array (typed, when possible)

      exports.string2buf = function (str) {
        var buf,
            c,
            c2,
            m_pos,
            i,
            str_len = str.length,
            buf_len = 0; // count binary size

        for (m_pos = 0; m_pos < str_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          buf_len += c < 0x80 ? 1 : c < 0x800 ? 2 : c < 0x10000 ? 3 : 4;
        } // allocate buffer


        buf = new utils.Buf8(buf_len); // convert

        for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
          c = str.charCodeAt(m_pos);

          if ((c & 0xfc00) === 0xd800 && m_pos + 1 < str_len) {
            c2 = str.charCodeAt(m_pos + 1);

            if ((c2 & 0xfc00) === 0xdc00) {
              c = 0x10000 + (c - 0xd800 << 10) + (c2 - 0xdc00);
              m_pos++;
            }
          }

          if (c < 0x80) {
            /* one byte */
            buf[i++] = c;
          } else if (c < 0x800) {
            /* two bytes */
            buf[i++] = 0xC0 | c >>> 6;
            buf[i++] = 0x80 | c & 0x3f;
          } else if (c < 0x10000) {
            /* three bytes */
            buf[i++] = 0xE0 | c >>> 12;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          } else {
            /* four bytes */
            buf[i++] = 0xf0 | c >>> 18;
            buf[i++] = 0x80 | c >>> 12 & 0x3f;
            buf[i++] = 0x80 | c >>> 6 & 0x3f;
            buf[i++] = 0x80 | c & 0x3f;
          }
        }

        return buf;
      }; // Helper (used in 2 places)


      function buf2binstring(buf, len) {
        // On Chrome, the arguments in a function call that are allowed is `65534`.
        // If the length of the buffer is smaller than that, we can use this optimization,
        // otherwise we will take a slower path.
        if (len < 65534) {
          if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
            return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
          }
        }

        var result = '';

        for (var i = 0; i < len; i++) {
          result += String.fromCharCode(buf[i]);
        }

        return result;
      } // Convert byte array to binary string


      exports.buf2binstring = function (buf) {
        return buf2binstring(buf, buf.length);
      }; // Convert binary string (typed, when possible)


      exports.binstring2buf = function (str) {
        var buf = new utils.Buf8(str.length);

        for (var i = 0, len = buf.length; i < len; i++) {
          buf[i] = str.charCodeAt(i);
        }

        return buf;
      }; // convert array to string


      exports.buf2string = function (buf, max) {
        var i, out, c, c_len;
        var len = max || buf.length; // Reserve max possible length (2 words per char)
        // NB: by unknown reasons, Array is significantly faster for
        //     String.fromCharCode.apply than Uint16Array.

        var utf16buf = new Array(len * 2);

        for (out = 0, i = 0; i < len;) {
          c = buf[i++]; // quick process ascii

          if (c < 0x80) {
            utf16buf[out++] = c;
            continue;
          }

          c_len = _utf8len[c]; // skip 5 & 6 byte codes

          if (c_len > 4) {
            utf16buf[out++] = 0xfffd;
            i += c_len - 1;
            continue;
          } // apply mask on first byte


          c &= c_len === 2 ? 0x1f : c_len === 3 ? 0x0f : 0x07; // join the rest

          while (c_len > 1 && i < len) {
            c = c << 6 | buf[i++] & 0x3f;
            c_len--;
          } // terminated by end of string?


          if (c_len > 1) {
            utf16buf[out++] = 0xfffd;
            continue;
          }

          if (c < 0x10000) {
            utf16buf[out++] = c;
          } else {
            c -= 0x10000;
            utf16buf[out++] = 0xd800 | c >> 10 & 0x3ff;
            utf16buf[out++] = 0xdc00 | c & 0x3ff;
          }
        }

        return buf2binstring(utf16buf, out);
      }; // Calculate max possible position in utf8 buffer,
      // that will not break sequence. If that's not possible
      // - (very small limits) return max size as is.
      //
      // buf[] - utf8 bytes array
      // max   - length limit (mandatory);


      exports.utf8border = function (buf, max) {
        var pos;
        max = max || buf.length;

        if (max > buf.length) {
          max = buf.length;
        } // go back from last position, until start of sequence found


        pos = max - 1;

        while (pos >= 0 && (buf[pos] & 0xC0) === 0x80) {
          pos--;
        } // Very small and broken sequence,
        // return max, because we should return something anyway.


        if (pos < 0) {
          return max;
        } // If we came to start of buffer - that means buffer is too small,
        // return max too.


        if (pos === 0) {
          return max;
        }

        return pos + _utf8len[buf[pos]] > max ? pos : max;
      };
    }, {
      "./common": 3
    }],
    5: [function (require, module, exports) {
      'use strict'; // Note: adler32 takes 12% for level 0 and 2% for level 6.
      // It isn't worth it to make additional optimizations as in original.
      // Small size is preferable.
      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function adler32(adler, buf, len, pos) {
        var s1 = adler & 0xffff | 0,
            s2 = adler >>> 16 & 0xffff | 0,
            n = 0;

        while (len !== 0) {
          // Set limit ~ twice less than 5552, to keep
          // s2 in 31-bits, because we force signed ints.
          // in other case %= will fail.
          n = len > 2000 ? 2000 : len;
          len -= n;

          do {
            s1 = s1 + buf[pos++] | 0;
            s2 = s2 + s1 | 0;
          } while (--n);

          s1 %= 65521;
          s2 %= 65521;
        }

        return s1 | s2 << 16 | 0;
      }

      module.exports = adler32;
    }, {}],
    6: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {
        /* Allowed flush values; see deflate() and inflate() below for details */
        Z_NO_FLUSH: 0,
        Z_PARTIAL_FLUSH: 1,
        Z_SYNC_FLUSH: 2,
        Z_FULL_FLUSH: 3,
        Z_FINISH: 4,
        Z_BLOCK: 5,
        Z_TREES: 6,

        /* Return codes for the compression/decompression functions. Negative values
         * are errors, positive values are used for special but normal events.
         */
        Z_OK: 0,
        Z_STREAM_END: 1,
        Z_NEED_DICT: 2,
        Z_ERRNO: -1,
        Z_STREAM_ERROR: -2,
        Z_DATA_ERROR: -3,
        //Z_MEM_ERROR:     -4,
        Z_BUF_ERROR: -5,
        //Z_VERSION_ERROR: -6,

        /* compression levels */
        Z_NO_COMPRESSION: 0,
        Z_BEST_SPEED: 1,
        Z_BEST_COMPRESSION: 9,
        Z_DEFAULT_COMPRESSION: -1,
        Z_FILTERED: 1,
        Z_HUFFMAN_ONLY: 2,
        Z_RLE: 3,
        Z_FIXED: 4,
        Z_DEFAULT_STRATEGY: 0,

        /* Possible values of the data_type field (though see inflate()) */
        Z_BINARY: 0,
        Z_TEXT: 1,
        //Z_ASCII:                1, // = Z_TEXT (deprecated)
        Z_UNKNOWN: 2,

        /* The deflate compression method */
        Z_DEFLATED: 8 //Z_NULL:                 null // Use -1 or null inline, depending on var type

      };
    }, {}],
    7: [function (require, module, exports) {
      'use strict'; // Note: we can't get significant speed boost here.
      // So write code to minimize size - no pregenerated tables
      // and array tools dependencies.
      // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.
      // Use ordinary array, since untyped makes no boost here

      function makeTable() {
        var c,
            table = [];

        for (var n = 0; n < 256; n++) {
          c = n;

          for (var k = 0; k < 8; k++) {
            c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
          }

          table[n] = c;
        }

        return table;
      } // Create table on load. Just 255 signed longs. Not a problem.


      var crcTable = makeTable();

      function crc32(crc, buf, len, pos) {
        var t = crcTable,
            end = pos + len;
        crc ^= -1;

        for (var i = pos; i < end; i++) {
          crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 0xFF];
        }

        return crc ^ -1; // >>> 0;
      }

      module.exports = crc32;
    }, {}],
    8: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var trees = require('./trees');

      var adler32 = require('./adler32');

      var crc32 = require('./crc32');

      var msg = require('./messages');
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      /* Allowed flush values; see deflate() and inflate() below for details */


      var Z_NO_FLUSH = 0;
      var Z_PARTIAL_FLUSH = 1; //var Z_SYNC_FLUSH    = 2;

      var Z_FULL_FLUSH = 3;
      var Z_FINISH = 4;
      var Z_BLOCK = 5; //var Z_TREES         = 6;

      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */

      var Z_OK = 0;
      var Z_STREAM_END = 1; //var Z_NEED_DICT     = 2;
      //var Z_ERRNO         = -1;

      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3; //var Z_MEM_ERROR     = -4;

      var Z_BUF_ERROR = -5; //var Z_VERSION_ERROR = -6;

      /* compression levels */
      //var Z_NO_COMPRESSION      = 0;
      //var Z_BEST_SPEED          = 1;
      //var Z_BEST_COMPRESSION    = 9;

      var Z_DEFAULT_COMPRESSION = -1;
      var Z_FILTERED = 1;
      var Z_HUFFMAN_ONLY = 2;
      var Z_RLE = 3;
      var Z_FIXED = 4;
      var Z_DEFAULT_STRATEGY = 0;
      /* Possible values of the data_type field (though see inflate()) */
      //var Z_BINARY              = 0;
      //var Z_TEXT                = 1;
      //var Z_ASCII               = 1; // = Z_TEXT

      var Z_UNKNOWN = 2;
      /* The deflate compression method */

      var Z_DEFLATED = 8;
      /*============================================================================*/

      var MAX_MEM_LEVEL = 9;
      /* Maximum value for memLevel in deflateInit2 */

      var MAX_WBITS = 15;
      /* 32K LZ77 window */

      var DEF_MEM_LEVEL = 8;
      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS = 256;
      /* number of literal bytes 0..255 */

      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES = 30;
      /* number of distance codes */

      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */

      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
      var PRESET_DICT = 0x20;
      var INIT_STATE = 42;
      var EXTRA_STATE = 69;
      var NAME_STATE = 73;
      var COMMENT_STATE = 91;
      var HCRC_STATE = 103;
      var BUSY_STATE = 113;
      var FINISH_STATE = 666;
      var BS_NEED_MORE = 1;
      /* block not completed, need more input or more output */

      var BS_BLOCK_DONE = 2;
      /* block flush performed */

      var BS_FINISH_STARTED = 3;
      /* finish started, need only more output at next deflate */

      var BS_FINISH_DONE = 4;
      /* finish done, accept no more input or output */

      var OS_CODE = 0x03; // Unix :) . Don't detect, use this default.

      function err(strm, errorCode) {
        strm.msg = msg[errorCode];
        return errorCode;
      }

      function rank(f) {
        return (f << 1) - (f > 4 ? 9 : 0);
      }

      function zero(buf) {
        var len = buf.length;

        while (--len >= 0) {
          buf[len] = 0;
        }
      }
      /* =========================================================================
       * Flush as much pending output as possible. All deflate() output goes
       * through this function so some applications may wish to modify it
       * to avoid allocating a large strm->output buffer and copying into it.
       * (See also read_buf()).
       */


      function flush_pending(strm) {
        var s = strm.state; //_tr_flush_bits(s);

        var len = s.pending;

        if (len > strm.avail_out) {
          len = strm.avail_out;
        }

        if (len === 0) {
          return;
        }

        utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
        strm.next_out += len;
        s.pending_out += len;
        strm.total_out += len;
        strm.avail_out -= len;
        s.pending -= len;

        if (s.pending === 0) {
          s.pending_out = 0;
        }
      }

      function flush_block_only(s, last) {
        trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);

        s.block_start = s.strstart;
        flush_pending(s.strm);
      }

      function put_byte(s, b) {
        s.pending_buf[s.pending++] = b;
      }
      /* =========================================================================
       * Put a short in the pending buffer. The 16-bit value is put in MSB order.
       * IN assertion: the stream state is correct and there is enough room in
       * pending_buf.
       */


      function putShortMSB(s, b) {
        //  put_byte(s, (Byte)(b >> 8));
        //  put_byte(s, (Byte)(b & 0xff));
        s.pending_buf[s.pending++] = b >>> 8 & 0xff;
        s.pending_buf[s.pending++] = b & 0xff;
      }
      /* ===========================================================================
       * Read a new buffer from the current input stream, update the adler32
       * and total number of bytes read.  All deflate() input goes through
       * this function so some applications may wish to modify it to avoid
       * allocating a large strm->input buffer and copying from it.
       * (See also flush_pending()).
       */


      function read_buf(strm, buf, start, size) {
        var len = strm.avail_in;

        if (len > size) {
          len = size;
        }

        if (len === 0) {
          return 0;
        }

        strm.avail_in -= len; // zmemcpy(buf, strm->next_in, len);

        utils.arraySet(buf, strm.input, strm.next_in, len, start);

        if (strm.state.wrap === 1) {
          strm.adler = adler32(strm.adler, buf, len, start);
        } else if (strm.state.wrap === 2) {
          strm.adler = crc32(strm.adler, buf, len, start);
        }

        strm.next_in += len;
        strm.total_in += len;
        return len;
      }
      /* ===========================================================================
       * Set match_start to the longest match starting at the given string and
       * return its length. Matches shorter or equal to prev_length are discarded,
       * in which case the result is equal to prev_length and match_start is
       * garbage.
       * IN assertions: cur_match is the head of the hash chain for the current
       *   string (strstart) and its distance is <= MAX_DIST, and prev_length >= 1
       * OUT assertion: the match length is not greater than s->lookahead.
       */


      function longest_match(s, cur_match) {
        var chain_length = s.max_chain_length;
        /* max hash chain length */

        var scan = s.strstart;
        /* current string */

        var match;
        /* matched string */

        var len;
        /* length of current match */

        var best_len = s.prev_length;
        /* best match length so far */

        var nice_match = s.nice_match;
        /* stop if match long enough */

        var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0
        /*NIL*/
        ;
        var _win = s.window; // shortcut

        var wmask = s.w_mask;
        var prev = s.prev;
        /* Stop when cur_match becomes <= limit. To simplify the code,
         * we prevent matches with the string of window index 0.
         */

        var strend = s.strstart + MAX_MATCH;
        var scan_end1 = _win[scan + best_len - 1];
        var scan_end = _win[scan + best_len];
        /* The code is optimized for HASH_BITS >= 8 and MAX_MATCH-2 multiple of 16.
         * It is easy to get rid of this optimization if necessary.
         */
        // Assert(s->hash_bits >= 8 && MAX_MATCH == 258, "Code too clever");

        /* Do not waste too much time if we already have a good match: */

        if (s.prev_length >= s.good_match) {
          chain_length >>= 2;
        }
        /* Do not look for matches beyond the end of the input. This is necessary
         * to make deflate deterministic.
         */


        if (nice_match > s.lookahead) {
          nice_match = s.lookahead;
        } // Assert((ulg)s->strstart <= s->window_size-MIN_LOOKAHEAD, "need lookahead");


        do {
          // Assert(cur_match < s->strstart, "no future");
          match = cur_match;
          /* Skip to next match if the match length cannot increase
           * or if the match length is less than 2.  Note that the checks below
           * for insufficient lookahead only occur occasionally for performance
           * reasons.  Therefore uninitialized memory will be accessed, and
           * conditional jumps will be made that depend on those values.
           * However the length of the match is limited to the lookahead, so
           * the output of deflate is not affected by the uninitialized values.
           */

          if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
            continue;
          }
          /* The check at best_len-1 can be removed because it will be made
           * again later. (This heuristic is not always a win.)
           * It is not necessary to compare scan[2] and match[2] since they
           * are always equal when the other bytes match, given that
           * the hash keys are equal and that HASH_BITS >= 8.
           */


          scan += 2;
          match++; // Assert(*scan == *match, "match[2]?");

          /* We check for insufficient lookahead only every 8th comparison;
           * the 256th check will be made at strstart+258.
           */

          do {
            /*jshint noempty:false*/
          } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend); // Assert(scan <= s->window+(unsigned)(s->window_size-1), "wild scan");


          len = MAX_MATCH - (strend - scan);
          scan = strend - MAX_MATCH;

          if (len > best_len) {
            s.match_start = cur_match;
            best_len = len;

            if (len >= nice_match) {
              break;
            }

            scan_end1 = _win[scan + best_len - 1];
            scan_end = _win[scan + best_len];
          }
        } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);

        if (best_len <= s.lookahead) {
          return best_len;
        }

        return s.lookahead;
      }
      /* ===========================================================================
       * Fill the window when the lookahead becomes insufficient.
       * Updates strstart and lookahead.
       *
       * IN assertion: lookahead < MIN_LOOKAHEAD
       * OUT assertions: strstart <= window_size-MIN_LOOKAHEAD
       *    At least one byte has been read, or avail_in == 0; reads are
       *    performed for at least two bytes (required for the zip translate_eol
       *    option -- not supported here).
       */


      function fill_window(s) {
        var _w_size = s.w_size;
        var p, n, m, more, str; //Assert(s->lookahead < MIN_LOOKAHEAD, "already enough lookahead");

        do {
          more = s.window_size - s.lookahead - s.strstart; // JS ints have 32 bit, block below not needed

          /* Deal with !@#$% 64K limit: */
          //if (sizeof(int) <= 2) {
          //    if (more == 0 && s->strstart == 0 && s->lookahead == 0) {
          //        more = wsize;
          //
          //  } else if (more == (unsigned)(-1)) {
          //        /* Very unlikely, but possible on 16 bit machine if
          //         * strstart == 0 && lookahead == 1 (input done a byte at time)
          //         */
          //        more--;
          //    }
          //}

          /* If the window is almost full and there is insufficient lookahead,
           * move the upper half to the lower one to make room in the upper half.
           */

          if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
            utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
            s.match_start -= _w_size;
            s.strstart -= _w_size;
            /* we now have strstart >= MAX_DIST */

            s.block_start -= _w_size;
            /* Slide the hash table (could be avoided with 32 bit values
             at the expense of memory usage). We slide even when level == 0
             to keep the hash table consistent if we switch back to level > 0
             later. (Using level 0 permanently is not an optimal usage of
             zlib, so we don't care about this pathological case.)
             */

            n = s.hash_size;
            p = n;

            do {
              m = s.head[--p];
              s.head[p] = m >= _w_size ? m - _w_size : 0;
            } while (--n);

            n = _w_size;
            p = n;

            do {
              m = s.prev[--p];
              s.prev[p] = m >= _w_size ? m - _w_size : 0;
              /* If n is not on any hash chain, prev[n] is garbage but
               * its value will never be used.
               */
            } while (--n);

            more += _w_size;
          }

          if (s.strm.avail_in === 0) {
            break;
          }
          /* If there was no sliding:
           *    strstart <= WSIZE+MAX_DIST-1 && lookahead <= MIN_LOOKAHEAD - 1 &&
           *    more == window_size - lookahead - strstart
           * => more >= window_size - (MIN_LOOKAHEAD-1 + WSIZE + MAX_DIST-1)
           * => more >= window_size - 2*WSIZE + 2
           * In the BIG_MEM or MMAP case (not yet supported),
           *   window_size == input_size + MIN_LOOKAHEAD  &&
           *   strstart + s->lookahead <= input_size => more >= MIN_LOOKAHEAD.
           * Otherwise, window_size == 2*WSIZE so more >= 2.
           * If there was sliding, more >= WSIZE. So in all cases, more >= 2.
           */
          //Assert(more >= 2, "more < 2");


          n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
          s.lookahead += n;
          /* Initialize the hash value now that we have some input: */

          if (s.lookahead + s.insert >= MIN_MATCH) {
            str = s.strstart - s.insert;
            s.ins_h = s.window[str];
            /* UPDATE_HASH(s, s->ins_h, s->window[str + 1]); */

            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask; //#if MIN_MATCH != 3
            //        Call update_hash() MIN_MATCH-3 more times
            //#endif

            while (s.insert) {
              /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
              s.prev[str & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = str;
              str++;
              s.insert--;

              if (s.lookahead + s.insert < MIN_MATCH) {
                break;
              }
            }
          }
          /* If the whole input has less than MIN_MATCH bytes, ins_h is garbage,
           * but this is not important since only literal bytes will be emitted.
           */

        } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
        /* If the WIN_INIT bytes after the end of the current data have never been
         * written, then zero those bytes in order to avoid memory check reports of
         * the use of uninitialized (or uninitialised as Julian writes) bytes by
         * the longest match routines.  Update the high water mark for the next
         * time through here.  WIN_INIT is set to MAX_MATCH since the longest match
         * routines allow scanning to strstart + MAX_MATCH, ignoring lookahead.
         */
        //  if (s.high_water < s.window_size) {
        //    var curr = s.strstart + s.lookahead;
        //    var init = 0;
        //
        //    if (s.high_water < curr) {
        //      /* Previous high water mark below current data -- zero WIN_INIT
        //       * bytes or up to end of window, whichever is less.
        //       */
        //      init = s.window_size - curr;
        //      if (init > WIN_INIT)
        //        init = WIN_INIT;
        //      zmemzero(s->window + curr, (unsigned)init);
        //      s->high_water = curr + init;
        //    }
        //    else if (s->high_water < (ulg)curr + WIN_INIT) {
        //      /* High water mark at or above current data, but below current data
        //       * plus WIN_INIT -- zero out to current data plus WIN_INIT, or up
        //       * to end of window, whichever is less.
        //       */
        //      init = (ulg)curr + WIN_INIT - s->high_water;
        //      if (init > s->window_size - s->high_water)
        //        init = s->window_size - s->high_water;
        //      zmemzero(s->window + s->high_water, (unsigned)init);
        //      s->high_water += init;
        //    }
        //  }
        //
        //  Assert((ulg)s->strstart <= s->window_size - MIN_LOOKAHEAD,
        //    "not enough room for search");

      }
      /* ===========================================================================
       * Copy without compression as much as possible from the input stream, return
       * the current block state.
       * This function does not insert new strings in the dictionary since
       * uncompressible data is probably not useful. This function is used
       * only for the level=0 compression option.
       * NOTE: this function should be optimized to avoid extra copying from
       * window to pending_buf.
       */


      function deflate_stored(s, flush) {
        /* Stored blocks are limited to 0xffff bytes, pending_buf is limited
         * to pending_buf_size, and each stored block has a 5 byte header:
         */
        var max_block_size = 0xffff;

        if (max_block_size > s.pending_buf_size - 5) {
          max_block_size = s.pending_buf_size - 5;
        }
        /* Copy as much as possible from input to output: */


        for (;;) {
          /* Fill the window as much as possible: */
          if (s.lookahead <= 1) {
            //Assert(s->strstart < s->w_size+MAX_DIST(s) ||
            //  s->block_start >= (long)s->w_size, "slide too late");
            //      if (!(s.strstart < s.w_size + (s.w_size - MIN_LOOKAHEAD) ||
            //        s.block_start >= s.w_size)) {
            //        throw  new Error("slide too late");
            //      }
            fill_window(s);

            if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          } //Assert(s->block_start >= 0L, "block gone");
          //    if (s.block_start < 0) throw new Error("block gone");


          s.strstart += s.lookahead;
          s.lookahead = 0;
          /* Emit a stored block if pending_buf will be full: */

          var max_start = s.block_start + max_block_size;

          if (s.strstart === 0 || s.strstart >= max_start) {
            /* strstart == 0 is possible when wraparound on 16-bit machine */
            s.lookahead = s.strstart - max_start;
            s.strstart = max_start;
            /*** FLUSH_BLOCK(s, 0); ***/

            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
          /* Flush if we may have to slide, otherwise block_start may become
           * negative and the data will be gone:
           */


          if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.strstart > s.block_start) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_NEED_MORE;
      }
      /* ===========================================================================
       * Compress as much as possible from the input stream, return the current
       * block state.
       * This function does not perform lazy evaluation of matches and inserts
       * new strings in the dictionary only for unmatched strings or for short
       * matches. It is used only for the fast compression options.
       */


      function deflate_fast(s, flush) {
        var hash_head;
        /* head of the hash chain */

        var bflush;
        /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);

            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
              /* flush the current block */
            }
          }
          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */


          hash_head = 0
          /*NIL*/
          ;

          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
          /* Find the longest match, discarding those <= prev_length.
           * At this point we have always match_length < MIN_MATCH
           */


          if (hash_head !== 0
          /*NIL*/
          && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
            /* To simplify the code, we prevent matches with the string
             * of window index 0 (in particular we have to avoid a match
             * of the string with itself at the start of the input file).
             */
            s.match_length = longest_match(s, hash_head);
            /* longest_match() sets match_start */
          }

          if (s.match_length >= MIN_MATCH) {
            // check_match(s, s.strstart, s.match_start, s.match_length); // for debug only

            /*** _tr_tally_dist(s, s.strstart - s.match_start,
                           s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            /* Insert new strings in the hash table only if the match length
             * is not too large. This saves time but degrades compression.
             */

            if (s.match_length <= s.max_lazy_match
            /*max_insert_length*/
            && s.lookahead >= MIN_MATCH) {
              s.match_length--;
              /* string at strstart already in table */

              do {
                s.strstart++;
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/

                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/

                /* strstart never exceeds WSIZE-MAX_MATCH, so there are
                 * always MIN_MATCH bytes ahead.
                 */
              } while (--s.match_length !== 0);

              s.strstart++;
            } else {
              s.strstart += s.match_length;
              s.match_length = 0;
              s.ins_h = s.window[s.strstart];
              /* UPDATE_HASH(s, s.ins_h, s.window[s.strstart+1]); */

              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask; //#if MIN_MATCH != 3
              //                Call UPDATE_HASH() MIN_MATCH-3 more times
              //#endif

              /* If lookahead < MIN_MATCH, ins_h is garbage, but it does not
               * matter since it will be recomputed at next deflate call.
               */
            }
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s.window[s.strstart]));

            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * Same as above, but achieves better compression. We use a lazy
       * evaluation for matches: a match is finally adopted only if there is
       * no better match at the next window position.
       */


      function deflate_slow(s, flush) {
        var hash_head;
        /* head of hash chain */

        var bflush;
        /* set if current block must be flushed */

        var max_insert;
        /* Process the input block. */

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the next match, plus MIN_MATCH bytes to insert the
           * string following the next match.
           */
          if (s.lookahead < MIN_LOOKAHEAD) {
            fill_window(s);

            if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          }
          /* Insert the string window[strstart .. strstart+2] in the
           * dictionary, and set hash_head to the head of the hash chain:
           */


          hash_head = 0
          /*NIL*/
          ;

          if (s.lookahead >= MIN_MATCH) {
            /*** INSERT_STRING(s, s.strstart, hash_head); ***/
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
            hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = s.strstart;
            /***/
          }
          /* Find the longest match, discarding those <= prev_length.
           */


          s.prev_length = s.match_length;
          s.prev_match = s.match_start;
          s.match_length = MIN_MATCH - 1;

          if (hash_head !== 0
          /*NIL*/
          && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD
          /*MAX_DIST(s)*/
          ) {
              /* To simplify the code, we prevent matches with the string
               * of window index 0 (in particular we have to avoid a match
               * of the string with itself at the start of the input file).
               */
              s.match_length = longest_match(s, hash_head);
              /* longest_match() sets match_start */

              if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096
              /*TOO_FAR*/
              )) {
                /* If prev_match is also MIN_MATCH, match_start is garbage
                 * but we will ignore the current match anyway.
                 */
                s.match_length = MIN_MATCH - 1;
              }
            }
          /* If there was a match at the previous step and the current
           * match is not better, output the previous match:
           */


          if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
            max_insert = s.strstart + s.lookahead - MIN_MATCH;
            /* Do not insert strings in hash table beyond this. */
            //check_match(s, s.strstart-1, s.prev_match, s.prev_length);

            /***_tr_tally_dist(s, s.strstart - 1 - s.prev_match,
                           s.prev_length - MIN_MATCH, bflush);***/

            bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
            /* Insert in hash table all strings up to the end of the match.
             * strstart-1 and strstart are already inserted. If there is not
             * enough lookahead, the last two strings are not inserted in
             * the hash table.
             */

            s.lookahead -= s.prev_length - 1;
            s.prev_length -= 2;

            do {
              if (++s.strstart <= max_insert) {
                /*** INSERT_STRING(s, s.strstart, hash_head); ***/
                s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
                hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
                s.head[s.ins_h] = s.strstart;
                /***/
              }
            } while (--s.prev_length !== 0);

            s.match_available = 0;
            s.match_length = MIN_MATCH - 1;
            s.strstart++;

            if (bflush) {
              /*** FLUSH_BLOCK(s, 0); ***/
              flush_block_only(s, false);

              if (s.strm.avail_out === 0) {
                return BS_NEED_MORE;
              }
              /***/

            }
          } else if (s.match_available) {
            /* If there was no match at the previous position, output a
             * single literal. If there was a match but the current match
             * is longer, truncate the previous match to a single literal.
             */
            //Tracevv((stderr,"%c", s->window[s->strstart-1]));

            /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);

            if (bflush) {
              /*** FLUSH_BLOCK_ONLY(s, 0) ***/
              flush_block_only(s, false);
              /***/
            }

            s.strstart++;
            s.lookahead--;

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          } else {
            /* There is no previous match to compare with, wait for
             * the next step to decide.
             */
            s.match_available = 1;
            s.strstart++;
            s.lookahead--;
          }
        } //Assert (flush != Z_NO_FLUSH, "no flush?");


        if (s.match_available) {
          //Tracevv((stderr,"%c", s->window[s->strstart-1]));

          /*** _tr_tally_lit(s, s.window[s.strstart-1], bflush); ***/
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          s.match_available = 0;
        }

        s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * For Z_RLE, simply look for runs of bytes, generate matches only of distance
       * one.  Do not maintain a hash table.  (It will be regenerated if this run of
       * deflate switches away from Z_RLE.)
       */


      function deflate_rle(s, flush) {
        var bflush;
        /* set if current block must be flushed */

        var prev;
        /* byte at distance one to match */

        var scan, strend;
        /* scan goes up to strend for length of run */

        var _win = s.window;

        for (;;) {
          /* Make sure that we always have enough lookahead, except
           * at the end of the input file. We need MAX_MATCH bytes
           * for the longest run, plus one for the unrolled loop.
           */
          if (s.lookahead <= MAX_MATCH) {
            fill_window(s);

            if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }

            if (s.lookahead === 0) {
              break;
            }
            /* flush the current block */

          }
          /* See how many times the previous byte repeats */


          s.match_length = 0;

          if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
            scan = s.strstart - 1;
            prev = _win[scan];

            if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
              strend = s.strstart + MAX_MATCH;

              do {
                /*jshint noempty:false*/
              } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);

              s.match_length = MAX_MATCH - (strend - scan);

              if (s.match_length > s.lookahead) {
                s.match_length = s.lookahead;
              }
            } //Assert(scan <= s->window+(uInt)(s->window_size-1), "wild scan");

          }
          /* Emit match if have run of MIN_MATCH or longer, else emit literal */


          if (s.match_length >= MIN_MATCH) {
            //check_match(s, s.strstart, s.strstart - 1, s.match_length);

            /*** _tr_tally_dist(s, 1, s.match_length - MIN_MATCH, bflush); ***/
            bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
            s.lookahead -= s.match_length;
            s.strstart += s.match_length;
            s.match_length = 0;
          } else {
            /* No match, output a literal byte */
            //Tracevv((stderr,"%c", s->window[s->strstart]));

            /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/
            bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
            s.lookahead--;
            s.strstart++;
          }

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* ===========================================================================
       * For Z_HUFFMAN_ONLY, do not look for matches.  Do not maintain a hash table.
       * (It will be regenerated if this run of deflate switches away from Huffman.)
       */


      function deflate_huff(s, flush) {
        var bflush;
        /* set if current block must be flushed */

        for (;;) {
          /* Make sure that we have a literal to write. */
          if (s.lookahead === 0) {
            fill_window(s);

            if (s.lookahead === 0) {
              if (flush === Z_NO_FLUSH) {
                return BS_NEED_MORE;
              }

              break;
              /* flush the current block */
            }
          }
          /* Output a literal byte */


          s.match_length = 0; //Tracevv((stderr,"%c", s->window[s->strstart]));

          /*** _tr_tally_lit(s, s.window[s.strstart], bflush); ***/

          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;

          if (bflush) {
            /*** FLUSH_BLOCK(s, 0); ***/
            flush_block_only(s, false);

            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
            /***/

          }
        }

        s.insert = 0;

        if (flush === Z_FINISH) {
          /*** FLUSH_BLOCK(s, 1); ***/
          flush_block_only(s, true);

          if (s.strm.avail_out === 0) {
            return BS_FINISH_STARTED;
          }
          /***/


          return BS_FINISH_DONE;
        }

        if (s.last_lit) {
          /*** FLUSH_BLOCK(s, 0); ***/
          flush_block_only(s, false);

          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
          /***/

        }

        return BS_BLOCK_DONE;
      }
      /* Values for max_lazy_match, good_match and max_chain_length, depending on
       * the desired pack level (0..9). The values given below have been tuned to
       * exclude worst case performance for pathological files. Better values may be
       * found for specific files.
       */


      function Config(good_length, max_lazy, nice_length, max_chain, func) {
        this.good_length = good_length;
        this.max_lazy = max_lazy;
        this.nice_length = nice_length;
        this.max_chain = max_chain;
        this.func = func;
      }

      var configuration_table;
      configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
      ];
      /* ===========================================================================
       * Initialize the "longest match" routines for a new zlib stream
       */

      function lm_init(s) {
        s.window_size = 2 * s.w_size;
        /*** CLEAR_HASH(s); ***/

        zero(s.head); // Fill with NIL (= 0);

        /* Set the default configuration parameters:
         */

        s.max_lazy_match = configuration_table[s.level].max_lazy;
        s.good_match = configuration_table[s.level].good_length;
        s.nice_match = configuration_table[s.level].nice_length;
        s.max_chain_length = configuration_table[s.level].max_chain;
        s.strstart = 0;
        s.block_start = 0;
        s.lookahead = 0;
        s.insert = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        s.ins_h = 0;
      }

      function DeflateState() {
        this.strm = null;
        /* pointer back to this zlib stream */

        this.status = 0;
        /* as the name implies */

        this.pending_buf = null;
        /* output still pending */

        this.pending_buf_size = 0;
        /* size of pending_buf */

        this.pending_out = 0;
        /* next pending byte to output to the stream */

        this.pending = 0;
        /* nb of bytes in the pending buffer */

        this.wrap = 0;
        /* bit 0 true for zlib, bit 1 true for gzip */

        this.gzhead = null;
        /* gzip header information to write */

        this.gzindex = 0;
        /* where in extra, name, or comment */

        this.method = Z_DEFLATED;
        /* can only be DEFLATED */

        this.last_flush = -1;
        /* value of flush param for previous deflate call */

        this.w_size = 0;
        /* LZ77 window size (32K by default) */

        this.w_bits = 0;
        /* log2(w_size)  (8..16) */

        this.w_mask = 0;
        /* w_size - 1 */

        this.window = null;
        /* Sliding window. Input bytes are read into the second half of the window,
         * and move to the first half later to keep a dictionary of at least wSize
         * bytes. With this organization, matches are limited to a distance of
         * wSize-MAX_MATCH bytes, but this ensures that IO is always
         * performed with a length multiple of the block size.
         */

        this.window_size = 0;
        /* Actual size of window: 2*wSize, except when the user input buffer
         * is directly used as sliding window.
         */

        this.prev = null;
        /* Link to older string with same hash index. To limit the size of this
         * array to 64K, this link is maintained only for the last 32K strings.
         * An index in this array is thus a window index modulo 32K.
         */

        this.head = null;
        /* Heads of the hash chains or NIL. */

        this.ins_h = 0;
        /* hash index of string to be inserted */

        this.hash_size = 0;
        /* number of elements in hash table */

        this.hash_bits = 0;
        /* log2(hash_size) */

        this.hash_mask = 0;
        /* hash_size-1 */

        this.hash_shift = 0;
        /* Number of bits by which ins_h must be shifted at each input
         * step. It must be such that after MIN_MATCH steps, the oldest
         * byte no longer takes part in the hash key, that is:
         *   hash_shift * MIN_MATCH >= hash_bits
         */

        this.block_start = 0;
        /* Window position at the beginning of the current output block. Gets
         * negative when the window is moved backwards.
         */

        this.match_length = 0;
        /* length of best match */

        this.prev_match = 0;
        /* previous match */

        this.match_available = 0;
        /* set if previous match exists */

        this.strstart = 0;
        /* start of string to insert */

        this.match_start = 0;
        /* start of matching string */

        this.lookahead = 0;
        /* number of valid bytes ahead in window */

        this.prev_length = 0;
        /* Length of the best match at previous step. Matches not greater than this
         * are discarded. This is used in the lazy match evaluation.
         */

        this.max_chain_length = 0;
        /* To speed up deflation, hash chains are never searched beyond this
         * length.  A higher limit improves compression ratio but degrades the
         * speed.
         */

        this.max_lazy_match = 0;
        /* Attempt to find a better match only when the current match is strictly
         * smaller than this value. This mechanism is used only for compression
         * levels >= 4.
         */
        // That's alias to max_lazy_match, don't use directly
        //this.max_insert_length = 0;

        /* Insert new strings in the hash table only if the match length is not
         * greater than this length. This saves time but degrades compression.
         * max_insert_length is used only for compression levels <= 3.
         */

        this.level = 0;
        /* compression level (1..9) */

        this.strategy = 0;
        /* favor or force Huffman coding*/

        this.good_match = 0;
        /* Use a faster search when the previous match is longer than this */

        this.nice_match = 0;
        /* Stop searching when current match exceeds this */

        /* used by trees.c: */

        /* Didn't use ct_data typedef below to suppress compiler warning */
        // struct ct_data_s dyn_ltree[HEAP_SIZE];   /* literal and length tree */
        // struct ct_data_s dyn_dtree[2*D_CODES+1]; /* distance tree */
        // struct ct_data_s bl_tree[2*BL_CODES+1];  /* Huffman tree for bit lengths */
        // Use flat array of DOUBLE size, with interleaved fata,
        // because JS does not support effective

        this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
        this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
        this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
        zero(this.dyn_ltree);
        zero(this.dyn_dtree);
        zero(this.bl_tree);
        this.l_desc = null;
        /* desc. for literal tree */

        this.d_desc = null;
        /* desc. for distance tree */

        this.bl_desc = null;
        /* desc. for bit length tree */
        //ush bl_count[MAX_BITS+1];

        this.bl_count = new utils.Buf16(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */
        //int heap[2*L_CODES+1];      /* heap used to build the Huffman trees */

        this.heap = new utils.Buf16(2 * L_CODES + 1);
        /* heap used to build the Huffman trees */

        zero(this.heap);
        this.heap_len = 0;
        /* number of elements in the heap */

        this.heap_max = 0;
        /* element of largest frequency */

        /* The sons of heap[n] are heap[2*n] and heap[2*n+1]. heap[0] is not used.
         * The same heap array is used to build all trees.
         */

        this.depth = new utils.Buf16(2 * L_CODES + 1); //uch depth[2*L_CODES+1];

        zero(this.depth);
        /* Depth of each subtree used as tie breaker for trees of equal frequency
         */

        this.l_buf = 0;
        /* buffer index for literals or lengths */

        this.lit_bufsize = 0;
        /* Size of match buffer for literals/lengths.  There are 4 reasons for
         * limiting lit_bufsize to 64K:
         *   - frequencies can be kept in 16 bit counters
         *   - if compression is not successful for the first block, all input
         *     data is still in the window so we can still emit a stored block even
         *     when input comes from standard input.  (This can also be done for
         *     all blocks if lit_bufsize is not greater than 32K.)
         *   - if compression is not successful for a file smaller than 64K, we can
         *     even emit a stored file instead of a stored block (saving 5 bytes).
         *     This is applicable only for zip (not gzip or zlib).
         *   - creating new Huffman trees less frequently may not provide fast
         *     adaptation to changes in the input data statistics. (Take for
         *     example a binary file with poorly compressible code followed by
         *     a highly compressible string table.) Smaller buffer sizes give
         *     fast adaptation but have of course the overhead of transmitting
         *     trees more frequently.
         *   - I can't count above 4
         */

        this.last_lit = 0;
        /* running index in l_buf */

        this.d_buf = 0;
        /* Buffer index for distances. To simplify the code, d_buf and l_buf have
         * the same number of elements. To use different lengths, an extra flag
         * array would be necessary.
         */

        this.opt_len = 0;
        /* bit length of current block with optimal trees */

        this.static_len = 0;
        /* bit length of current block with static trees */

        this.matches = 0;
        /* number of string matches in current block */

        this.insert = 0;
        /* bytes at end of window left to insert */

        this.bi_buf = 0;
        /* Output buffer. bits are inserted starting at the bottom (least
         * significant bits).
         */

        this.bi_valid = 0;
        /* Number of valid bits in bi_buf.  All bits above the last valid bit
         * are always zero.
         */
        // Used for window memory init. We safely ignore it for JS. That makes
        // sense only for pointers and memory check tools.
        //this.high_water = 0;

        /* High water mark offset in window for initialized bytes -- bytes above
         * this are set to zero in order to avoid memory check warnings when
         * longest match routines access bytes past the input.  This is then
         * updated to the new high water mark.
         */
      }

      function deflateResetKeep(strm) {
        var s;

        if (!strm || !strm.state) {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.total_in = strm.total_out = 0;
        strm.data_type = Z_UNKNOWN;
        s = strm.state;
        s.pending = 0;
        s.pending_out = 0;

        if (s.wrap < 0) {
          s.wrap = -s.wrap;
          /* was made negative by deflate(..., Z_FINISH); */
        }

        s.status = s.wrap ? INIT_STATE : BUSY_STATE;
        strm.adler = s.wrap === 2 ? 0 // crc32(0, Z_NULL, 0)
        : 1; // adler32(0, Z_NULL, 0)

        s.last_flush = Z_NO_FLUSH;

        trees._tr_init(s);

        return Z_OK;
      }

      function deflateReset(strm) {
        var ret = deflateResetKeep(strm);

        if (ret === Z_OK) {
          lm_init(strm.state);
        }

        return ret;
      }

      function deflateSetHeader(strm, head) {
        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        if (strm.state.wrap !== 2) {
          return Z_STREAM_ERROR;
        }

        strm.state.gzhead = head;
        return Z_OK;
      }

      function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
        if (!strm) {
          // === Z_NULL
          return Z_STREAM_ERROR;
        }

        var wrap = 1;

        if (level === Z_DEFAULT_COMPRESSION) {
          level = 6;
        }

        if (windowBits < 0) {
          /* suppress zlib wrapper */
          wrap = 0;
          windowBits = -windowBits;
        } else if (windowBits > 15) {
          wrap = 2;
          /* write gzip wrapper instead */

          windowBits -= 16;
        }

        if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
          return err(strm, Z_STREAM_ERROR);
        }

        if (windowBits === 8) {
          windowBits = 9;
        }
        /* until 256-byte window bug fixed */


        var s = new DeflateState();
        strm.state = s;
        s.strm = strm;
        s.wrap = wrap;
        s.gzhead = null;
        s.w_bits = windowBits;
        s.w_size = 1 << s.w_bits;
        s.w_mask = s.w_size - 1;
        s.hash_bits = memLevel + 7;
        s.hash_size = 1 << s.hash_bits;
        s.hash_mask = s.hash_size - 1;
        s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
        s.window = new utils.Buf8(s.w_size * 2);
        s.head = new utils.Buf16(s.hash_size);
        s.prev = new utils.Buf16(s.w_size); // Don't need mem init magic for JS.
        //s.high_water = 0;  /* nothing written to s->window yet */

        s.lit_bufsize = 1 << memLevel + 6;
        /* 16K elements by default */

        s.pending_buf_size = s.lit_bufsize * 4; //overlay = (ushf *) ZALLOC(strm, s->lit_bufsize, sizeof(ush)+2);
        //s->pending_buf = (uchf *) overlay;

        s.pending_buf = new utils.Buf8(s.pending_buf_size); // It is offset from `s.pending_buf` (size is `s.lit_bufsize * 2`)
        //s->d_buf = overlay + s->lit_bufsize/sizeof(ush);

        s.d_buf = 1 * s.lit_bufsize; //s->l_buf = s->pending_buf + (1+sizeof(ush))*s->lit_bufsize;

        s.l_buf = (1 + 2) * s.lit_bufsize;
        s.level = level;
        s.strategy = strategy;
        s.method = method;
        return deflateReset(strm);
      }

      function deflateInit(strm, level) {
        return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
      }

      function deflate(strm, flush) {
        var old_flush, s;
        var beg, val; // for gzip header write only

        if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
          return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
        }

        s = strm.state;

        if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
          return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
        }

        s.strm = strm;
        /* just in case */

        old_flush = s.last_flush;
        s.last_flush = flush;
        /* Write the header */

        if (s.status === INIT_STATE) {
          if (s.wrap === 2) {
            // GZIP header
            strm.adler = 0; //crc32(0L, Z_NULL, 0);

            put_byte(s, 31);
            put_byte(s, 139);
            put_byte(s, 8);

            if (!s.gzhead) {
              // s->gzhead == Z_NULL
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, 0);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, OS_CODE);
              s.status = BUSY_STATE;
            } else {
              put_byte(s, (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16));
              put_byte(s, s.gzhead.time & 0xff);
              put_byte(s, s.gzhead.time >> 8 & 0xff);
              put_byte(s, s.gzhead.time >> 16 & 0xff);
              put_byte(s, s.gzhead.time >> 24 & 0xff);
              put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
              put_byte(s, s.gzhead.os & 0xff);

              if (s.gzhead.extra && s.gzhead.extra.length) {
                put_byte(s, s.gzhead.extra.length & 0xff);
                put_byte(s, s.gzhead.extra.length >> 8 & 0xff);
              }

              if (s.gzhead.hcrc) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
              }

              s.gzindex = 0;
              s.status = EXTRA_STATE;
            }
          } else // DEFLATE header
            {
              var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
              var level_flags = -1;

              if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
                level_flags = 0;
              } else if (s.level < 6) {
                level_flags = 1;
              } else if (s.level === 6) {
                level_flags = 2;
              } else {
                level_flags = 3;
              }

              header |= level_flags << 6;

              if (s.strstart !== 0) {
                header |= PRESET_DICT;
              }

              header += 31 - header % 31;
              s.status = BUSY_STATE;
              putShortMSB(s, header);
              /* Save the adler32 of the preset dictionary: */

              if (s.strstart !== 0) {
                putShortMSB(s, strm.adler >>> 16);
                putShortMSB(s, strm.adler & 0xffff);
              }

              strm.adler = 1; // adler32(0L, Z_NULL, 0);
            }
        } //#ifdef GZIP


        if (s.status === EXTRA_STATE) {
          if (s.gzhead.extra
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */

              while (s.gzindex < (s.gzhead.extra.length & 0xffff)) {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    break;
                  }
                }

                put_byte(s, s.gzhead.extra[s.gzindex] & 0xff);
                s.gzindex++;
              }

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (s.gzindex === s.gzhead.extra.length) {
                s.gzindex = 0;
                s.status = NAME_STATE;
              }
            } else {
            s.status = NAME_STATE;
          }
        }

        if (s.status === NAME_STATE) {
          if (s.gzhead.name
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                } // JS specific: little magic to add zero terminator to end of string


                if (s.gzindex < s.gzhead.name.length) {
                  val = s.gzhead.name.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }

                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (val === 0) {
                s.gzindex = 0;
                s.status = COMMENT_STATE;
              }
            } else {
            s.status = COMMENT_STATE;
          }
        }

        if (s.status === COMMENT_STATE) {
          if (s.gzhead.comment
          /* != Z_NULL*/
          ) {
              beg = s.pending;
              /* start of bytes to update crc */
              //int val;

              do {
                if (s.pending === s.pending_buf_size) {
                  if (s.gzhead.hcrc && s.pending > beg) {
                    strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
                  }

                  flush_pending(strm);
                  beg = s.pending;

                  if (s.pending === s.pending_buf_size) {
                    val = 1;
                    break;
                  }
                } // JS specific: little magic to add zero terminator to end of string


                if (s.gzindex < s.gzhead.comment.length) {
                  val = s.gzhead.comment.charCodeAt(s.gzindex++) & 0xff;
                } else {
                  val = 0;
                }

                put_byte(s, val);
              } while (val !== 0);

              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }

              if (val === 0) {
                s.status = HCRC_STATE;
              }
            } else {
            s.status = HCRC_STATE;
          }
        }

        if (s.status === HCRC_STATE) {
          if (s.gzhead.hcrc) {
            if (s.pending + 2 > s.pending_buf_size) {
              flush_pending(strm);
            }

            if (s.pending + 2 <= s.pending_buf_size) {
              put_byte(s, strm.adler & 0xff);
              put_byte(s, strm.adler >> 8 & 0xff);
              strm.adler = 0; //crc32(0L, Z_NULL, 0);

              s.status = BUSY_STATE;
            }
          } else {
            s.status = BUSY_STATE;
          }
        } //#endif

        /* Flush as much pending output as possible */


        if (s.pending !== 0) {
          flush_pending(strm);

          if (strm.avail_out === 0) {
            /* Since avail_out is 0, deflate will be called again with
             * more output space, but possibly with both pending and
             * avail_in equal to zero. There won't be anything to do,
             * but this is not an error situation so make sure we
             * return OK instead of BUF_ERROR at next call of deflate:
             */
            s.last_flush = -1;
            return Z_OK;
          }
          /* Make sure there is something to do and avoid duplicate consecutive
           * flushes. For repeated and useless calls with Z_FINISH, we keep
           * returning Z_STREAM_END instead of Z_BUF_ERROR.
           */

        } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
          return err(strm, Z_BUF_ERROR);
        }
        /* User must not provide more input after the first FINISH: */


        if (s.status === FINISH_STATE && strm.avail_in !== 0) {
          return err(strm, Z_BUF_ERROR);
        }
        /* Start a new block or continue the current one.
         */


        if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
          var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);

          if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
            s.status = FINISH_STATE;
          }

          if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR next call, see above */
            }

            return Z_OK;
            /* If flush != Z_NO_FLUSH && avail_out == 0, the next call
             * of deflate should use the same flush parameter to make sure
             * that the flush is complete. So we don't have to output an
             * empty block here, this will be done at next call. This also
             * ensures that for a very small output buffer, we emit at most
             * one empty block.
             */
          }

          if (bstate === BS_BLOCK_DONE) {
            if (flush === Z_PARTIAL_FLUSH) {
              trees._tr_align(s);
            } else if (flush !== Z_BLOCK) {
              /* FULL_FLUSH or SYNC_FLUSH */
              trees._tr_stored_block(s, 0, 0, false);
              /* For a full flush, this empty block will be recognized
               * as a special marker by inflate_sync().
               */


              if (flush === Z_FULL_FLUSH) {
                /*** CLEAR_HASH(s); ***/

                /* forget history */
                zero(s.head); // Fill with NIL (= 0);

                if (s.lookahead === 0) {
                  s.strstart = 0;
                  s.block_start = 0;
                  s.insert = 0;
                }
              }
            }

            flush_pending(strm);

            if (strm.avail_out === 0) {
              s.last_flush = -1;
              /* avoid BUF_ERROR at next call, see above */

              return Z_OK;
            }
          }
        } //Assert(strm->avail_out > 0, "bug2");
        //if (strm.avail_out <= 0) { throw new Error("bug2");}


        if (flush !== Z_FINISH) {
          return Z_OK;
        }

        if (s.wrap <= 0) {
          return Z_STREAM_END;
        }
        /* Write the trailer */


        if (s.wrap === 2) {
          put_byte(s, strm.adler & 0xff);
          put_byte(s, strm.adler >> 8 & 0xff);
          put_byte(s, strm.adler >> 16 & 0xff);
          put_byte(s, strm.adler >> 24 & 0xff);
          put_byte(s, strm.total_in & 0xff);
          put_byte(s, strm.total_in >> 8 & 0xff);
          put_byte(s, strm.total_in >> 16 & 0xff);
          put_byte(s, strm.total_in >> 24 & 0xff);
        } else {
          putShortMSB(s, strm.adler >>> 16);
          putShortMSB(s, strm.adler & 0xffff);
        }

        flush_pending(strm);
        /* If avail_out is zero, the application will call deflate again
         * to flush the rest.
         */

        if (s.wrap > 0) {
          s.wrap = -s.wrap;
        }
        /* write the trailer only once! */


        return s.pending !== 0 ? Z_OK : Z_STREAM_END;
      }

      function deflateEnd(strm) {
        var status;

        if (!strm
        /*== Z_NULL*/
        || !strm.state
        /*== Z_NULL*/
        ) {
            return Z_STREAM_ERROR;
          }

        status = strm.state.status;

        if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
          return err(strm, Z_STREAM_ERROR);
        }

        strm.state = null;
        return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
      }
      /* =========================================================================
       * Initializes the compression dictionary from the given byte
       * sequence without producing any compressed output.
       */


      function deflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var s;
        var str, n;
        var wrap;
        var avail;
        var next;
        var input;
        var tmpDict;

        if (!strm
        /*== Z_NULL*/
        || !strm.state
        /*== Z_NULL*/
        ) {
            return Z_STREAM_ERROR;
          }

        s = strm.state;
        wrap = s.wrap;

        if (wrap === 2 || wrap === 1 && s.status !== INIT_STATE || s.lookahead) {
          return Z_STREAM_ERROR;
        }
        /* when using zlib wrappers, compute Adler-32 for provided dictionary */


        if (wrap === 1) {
          /* adler32(strm->adler, dictionary, dictLength); */
          strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
        }

        s.wrap = 0;
        /* avoid computing Adler-32 in read_buf */

        /* if dictionary would fill window, just replace the history */

        if (dictLength >= s.w_size) {
          if (wrap === 0) {
            /* already empty otherwise */

            /*** CLEAR_HASH(s); ***/
            zero(s.head); // Fill with NIL (= 0);

            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
          /* use the tail */
          // dictionary = dictionary.slice(dictLength - s.w_size);


          tmpDict = new utils.Buf8(s.w_size);
          utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
          dictionary = tmpDict;
          dictLength = s.w_size;
        }
        /* insert dictionary into window and hash */


        avail = strm.avail_in;
        next = strm.next_in;
        input = strm.input;
        strm.avail_in = dictLength;
        strm.next_in = 0;
        strm.input = dictionary;
        fill_window(s);

        while (s.lookahead >= MIN_MATCH) {
          str = s.strstart;
          n = s.lookahead - (MIN_MATCH - 1);

          do {
            /* UPDATE_HASH(s, s->ins_h, s->window[str + MIN_MATCH-1]); */
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str;
            str++;
          } while (--n);

          s.strstart = str;
          s.lookahead = MIN_MATCH - 1;
          fill_window(s);
        }

        s.strstart += s.lookahead;
        s.block_start = s.strstart;
        s.insert = s.lookahead;
        s.lookahead = 0;
        s.match_length = s.prev_length = MIN_MATCH - 1;
        s.match_available = 0;
        strm.next_in = next;
        strm.input = input;
        strm.avail_in = avail;
        s.wrap = wrap;
        return Z_OK;
      }

      exports.deflateInit = deflateInit;
      exports.deflateInit2 = deflateInit2;
      exports.deflateReset = deflateReset;
      exports.deflateResetKeep = deflateResetKeep;
      exports.deflateSetHeader = deflateSetHeader;
      exports.deflate = deflate;
      exports.deflateEnd = deflateEnd;
      exports.deflateSetDictionary = deflateSetDictionary;
      exports.deflateInfo = 'pako deflate (from Nodeca project)';
      /* Not implemented
      exports.deflateBound = deflateBound;
      exports.deflateCopy = deflateCopy;
      exports.deflateParams = deflateParams;
      exports.deflatePending = deflatePending;
      exports.deflatePrime = deflatePrime;
      exports.deflateTune = deflateTune;
      */
    }, {
      "../utils/common": 3,
      "./adler32": 5,
      "./crc32": 7,
      "./messages": 13,
      "./trees": 14
    }],
    9: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function GZheader() {
        /* true if compressed data believed to be text */
        this.text = 0;
        /* modification time */

        this.time = 0;
        /* extra flags (not used when writing a gzip file) */

        this.xflags = 0;
        /* operating system */

        this.os = 0;
        /* pointer to extra field or Z_NULL if none */

        this.extra = null;
        /* extra field length (valid if extra != Z_NULL) */

        this.extra_len = 0; // Actually, we don't need it in JS,
        // but leave for few code modifications
        //
        // Setup limits is not necessary because in js we should not preallocate memory
        // for inflate use constant limit in 65536 bytes
        //

        /* space at extra (only when reading header) */
        // this.extra_max  = 0;

        /* pointer to zero-terminated file name or Z_NULL */

        this.name = '';
        /* space at name (only when reading header) */
        // this.name_max   = 0;

        /* pointer to zero-terminated comment or Z_NULL */

        this.comment = '';
        /* space at comment (only when reading header) */
        // this.comm_max   = 0;

        /* true if there was or will be a header crc */

        this.hcrc = 0;
        /* true when done reading gzip header (not used when writing a gzip file) */

        this.done = false;
      }

      module.exports = GZheader;
    }, {}],
    10: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.
      // See state defs from inflate.js

      var BAD = 30;
      /* got a data error -- remain here until reset */

      var TYPE = 12;
      /* i: waiting for type bits, including last-flag bit */

      /*
         Decode literal, length, and distance codes and write out the resulting
         literal and match bytes until either not enough input or output is
         available, an end-of-block is encountered, or a data error is encountered.
         When large enough input and output buffers are supplied to inflate(), for
         example, a 16K input buffer and a 64K output buffer, more than 95% of the
         inflate execution time is spent in this routine.
      		   Entry assumptions:
      		        state.mode === LEN
              strm.avail_in >= 6
              strm.avail_out >= 258
              start >= strm.avail_out
              state.bits < 8
      		   On return, state.mode is one of:
      		        LEN -- ran out of enough output space or enough available input
              TYPE -- reached end of block code, inflate() to interpret next block
              BAD -- error in block data
      		   Notes:
      		    - The maximum input bits used by a length/distance pair is 15 bits for the
            length code, 5 bits for the length extra, 15 bits for the distance code,
            and 13 bits for the distance extra.  This totals 48 bits, or six bytes.
            Therefore if strm.avail_in >= 6, then there is enough input to avoid
            checking for available input while decoding.
      		    - The maximum bytes that a single length/distance pair can output is 258
            bytes, which is the maximum length that can be coded.  inflate_fast()
            requires strm.avail_out >= 258 for each loop to avoid checking for
            output space.
       */

      module.exports = function inflate_fast(strm, start) {
        var state;

        var _in;
        /* local strm.input */


        var last;
        /* have enough input while in < last */

        var _out;
        /* local strm.output */


        var beg;
        /* inflate()'s initial strm.output */

        var end;
        /* while out < end, enough space available */
        //#ifdef INFLATE_STRICT

        var dmax;
        /* maximum distance from zlib header */
        //#endif

        var wsize;
        /* window size or zero if not using window */

        var whave;
        /* valid bytes in the window */

        var wnext;
        /* window write index */
        // Use `s_window` instead `window`, avoid conflict with instrumentation tools

        var s_window;
        /* allocated sliding window, if wsize != 0 */

        var hold;
        /* local strm.hold */

        var bits;
        /* local strm.bits */

        var lcode;
        /* local strm.lencode */

        var dcode;
        /* local strm.distcode */

        var lmask;
        /* mask for first level of length codes */

        var dmask;
        /* mask for first level of distance codes */

        var here;
        /* retrieved table entry */

        var op;
        /* code bits, operation, extra bits, or */

        /*  window position, window bytes to copy */

        var len;
        /* match length, unused bytes */

        var dist;
        /* match distance */

        var from;
        /* where to copy match from */

        var from_source;
        var input, output; // JS specific, because we have no pointers

        /* copy state to local variables */

        state = strm.state; //here = state.here;

        _in = strm.next_in;
        input = strm.input;
        last = _in + (strm.avail_in - 5);
        _out = strm.next_out;
        output = strm.output;
        beg = _out - (start - strm.avail_out);
        end = _out + (strm.avail_out - 257); //#ifdef INFLATE_STRICT

        dmax = state.dmax; //#endif

        wsize = state.wsize;
        whave = state.whave;
        wnext = state.wnext;
        s_window = state.window;
        hold = state.hold;
        bits = state.bits;
        lcode = state.lencode;
        dcode = state.distcode;
        lmask = (1 << state.lenbits) - 1;
        dmask = (1 << state.distbits) - 1;
        /* decode literals and length/distances until end-of-block or not enough
           input data or output space */

        top: do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }

          here = lcode[hold & lmask];

          dolen: for (;;) {
            // Goto emulation
            op = here >>> 24
            /*here.bits*/
            ;
            hold >>>= op;
            bits -= op;
            op = here >>> 16 & 0xff
            /*here.op*/
            ;

            if (op === 0) {
              /* literal */
              //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
              //        "inflate:         literal '%c'\n" :
              //        "inflate:         literal 0x%02x\n", here.val));
              output[_out++] = here & 0xffff
              /*here.val*/
              ;
            } else if (op & 16) {
              /* length base */
              len = here & 0xffff
              /*here.val*/
              ;
              op &= 15;
              /* number of extra bits */

              if (op) {
                if (bits < op) {
                  hold += input[_in++] << bits;
                  bits += 8;
                }

                len += hold & (1 << op) - 1;
                hold >>>= op;
                bits -= op;
              } //Tracevv((stderr, "inflate:         length %u\n", len));


              if (bits < 15) {
                hold += input[_in++] << bits;
                bits += 8;
                hold += input[_in++] << bits;
                bits += 8;
              }

              here = dcode[hold & dmask];

              dodist: for (;;) {
                // goto emulation
                op = here >>> 24
                /*here.bits*/
                ;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 0xff
                /*here.op*/
                ;

                if (op & 16) {
                  /* distance base */
                  dist = here & 0xffff
                  /*here.val*/
                  ;
                  op &= 15;
                  /* number of extra bits */

                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;

                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }

                  dist += hold & (1 << op) - 1; //#ifdef INFLATE_STRICT

                  if (dist > dmax) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break top;
                  } //#endif


                  hold >>>= op;
                  bits -= op; //Tracevv((stderr, "inflate:         distance %u\n", dist));

                  op = _out - beg;
                  /* max distance in output */

                  if (dist > op) {
                    /* see if copy from window */
                    op = dist - op;
                    /* distance back in window */

                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = 'invalid distance too far back';
                        state.mode = BAD;
                        break top;
                      } // (!) This block is disabled in zlib defaults,
                      // don't enable it for binary compatibility
                      //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                      //                if (len <= op - whave) {
                      //                  do {
                      //                    output[_out++] = 0;
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //                len -= op - whave;
                      //                do {
                      //                  output[_out++] = 0;
                      //                } while (--op > whave);
                      //                if (op === 0) {
                      //                  from = _out - dist;
                      //                  do {
                      //                    output[_out++] = output[from++];
                      //                  } while (--len);
                      //                  continue top;
                      //                }
                      //#endif

                    }

                    from = 0; // window index

                    from_source = s_window;

                    if (wnext === 0) {
                      /* very common case */
                      from += wsize - op;

                      if (op < len) {
                        /* some from window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = _out - dist;
                        /* rest from output */

                        from_source = output;
                      }
                    } else if (wnext < op) {
                      /* wrap around window */
                      from += wsize + wnext - op;
                      op -= wnext;

                      if (op < len) {
                        /* some from end of window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = 0;

                        if (wnext < len) {
                          /* some from start of window */
                          op = wnext;
                          len -= op;

                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);

                          from = _out - dist;
                          /* rest from output */

                          from_source = output;
                        }
                      }
                    } else {
                      /* contiguous in window */
                      from += wnext - op;

                      if (op < len) {
                        /* some from window */
                        len -= op;

                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);

                        from = _out - dist;
                        /* rest from output */

                        from_source = output;
                      }
                    }

                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }

                    if (len) {
                      output[_out++] = from_source[from++];

                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    /* copy direct from output */

                    do {
                      /* minimum length is three */
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);

                    if (len) {
                      output[_out++] = output[from++];

                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  /* 2nd level distance code */
                  here = dcode[(here & 0xffff) + (
                  /*here.val*/
                  hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = 'invalid distance code';
                  state.mode = BAD;
                  break top;
                }

                break; // need to emulate goto via "continue"
              }
            } else if ((op & 64) === 0) {
              /* 2nd level length code */
              here = lcode[(here & 0xffff) + (
              /*here.val*/
              hold & (1 << op) - 1)];
              continue dolen;
            } else if (op & 32) {
              /* end-of-block */
              //Tracevv((stderr, "inflate:         end of block\n"));
              state.mode = TYPE;
              break top;
            } else {
              strm.msg = 'invalid literal/length code';
              state.mode = BAD;
              break top;
            }

            break; // need to emulate goto via "continue"
          }
        } while (_in < last && _out < end);
        /* return unused bytes (on entry, bits < 8, so in won't go too far back) */


        len = bits >> 3;
        _in -= len;
        bits -= len << 3;
        hold &= (1 << bits) - 1;
        /* update state and return */

        strm.next_in = _in;
        strm.next_out = _out;
        strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
        strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
        state.hold = hold;
        state.bits = bits;
        return;
      };
    }, {}],
    11: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var adler32 = require('./adler32');

      var crc32 = require('./crc32');

      var inflate_fast = require('./inffast');

      var inflate_table = require('./inftrees');

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      /* Public constants ==========================================================*/

      /* ===========================================================================*/

      /* Allowed flush values; see deflate() and inflate() below for details */
      //var Z_NO_FLUSH      = 0;
      //var Z_PARTIAL_FLUSH = 1;
      //var Z_SYNC_FLUSH    = 2;
      //var Z_FULL_FLUSH    = 3;

      var Z_FINISH = 4;
      var Z_BLOCK = 5;
      var Z_TREES = 6;
      /* Return codes for the compression/decompression functions. Negative values
       * are errors, positive values are used for special but normal events.
       */

      var Z_OK = 0;
      var Z_STREAM_END = 1;
      var Z_NEED_DICT = 2; //var Z_ERRNO         = -1;

      var Z_STREAM_ERROR = -2;
      var Z_DATA_ERROR = -3;
      var Z_MEM_ERROR = -4;
      var Z_BUF_ERROR = -5; //var Z_VERSION_ERROR = -6;

      /* The deflate compression method */

      var Z_DEFLATED = 8;
      /* STATES ====================================================================*/

      /* ===========================================================================*/

      var HEAD = 1;
      /* i: waiting for magic header */

      var FLAGS = 2;
      /* i: waiting for method and flags (gzip) */

      var TIME = 3;
      /* i: waiting for modification time (gzip) */

      var OS = 4;
      /* i: waiting for extra flags and operating system (gzip) */

      var EXLEN = 5;
      /* i: waiting for extra length (gzip) */

      var EXTRA = 6;
      /* i: waiting for extra bytes (gzip) */

      var NAME = 7;
      /* i: waiting for end of file name (gzip) */

      var COMMENT = 8;
      /* i: waiting for end of comment (gzip) */

      var HCRC = 9;
      /* i: waiting for header crc (gzip) */

      var DICTID = 10;
      /* i: waiting for dictionary check value */

      var DICT = 11;
      /* waiting for inflateSetDictionary() call */

      var TYPE = 12;
      /* i: waiting for type bits, including last-flag bit */

      var TYPEDO = 13;
      /* i: same, but skip check to exit inflate on new block */

      var STORED = 14;
      /* i: waiting for stored size (length and complement) */

      var COPY_ = 15;
      /* i/o: same as COPY below, but only first time in */

      var COPY = 16;
      /* i/o: waiting for input or output to copy stored block */

      var TABLE = 17;
      /* i: waiting for dynamic block table lengths */

      var LENLENS = 18;
      /* i: waiting for code length code lengths */

      var CODELENS = 19;
      /* i: waiting for length/lit and distance code lengths */

      var LEN_ = 20;
      /* i: same as LEN below, but only first time in */

      var LEN = 21;
      /* i: waiting for length/lit/eob code */

      var LENEXT = 22;
      /* i: waiting for length extra bits */

      var DIST = 23;
      /* i: waiting for distance code */

      var DISTEXT = 24;
      /* i: waiting for distance extra bits */

      var MATCH = 25;
      /* o: waiting for output space to copy string */

      var LIT = 26;
      /* o: waiting for output space to write literal */

      var CHECK = 27;
      /* i: waiting for 32-bit check value */

      var LENGTH = 28;
      /* i: waiting for 32-bit length (gzip) */

      var DONE = 29;
      /* finished check, done -- remain here until reset */

      var BAD = 30;
      /* got a data error -- remain here until reset */

      var MEM = 31;
      /* got an inflate() memory error -- remain here until reset */

      var SYNC = 32;
      /* looking for synchronization bytes to restart inflate() */

      /* ===========================================================================*/

      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592; //var ENOUGH =  (ENOUGH_LENS+ENOUGH_DISTS);

      var MAX_WBITS = 15;
      /* 32K LZ77 window */

      var DEF_WBITS = MAX_WBITS;

      function zswap32(q) {
        return (q >>> 24 & 0xff) + (q >>> 8 & 0xff00) + ((q & 0xff00) << 8) + ((q & 0xff) << 24);
      }

      function InflateState() {
        this.mode = 0;
        /* current inflate mode */

        this.last = false;
        /* true if processing last block */

        this.wrap = 0;
        /* bit 0 true for zlib, bit 1 true for gzip */

        this.havedict = false;
        /* true if dictionary provided */

        this.flags = 0;
        /* gzip header method and flags (0 if zlib) */

        this.dmax = 0;
        /* zlib header max distance (INFLATE_STRICT) */

        this.check = 0;
        /* protected copy of check value */

        this.total = 0;
        /* protected copy of output count */
        // TODO: may be {}

        this.head = null;
        /* where to save gzip header information */

        /* sliding window */

        this.wbits = 0;
        /* log base 2 of requested window size */

        this.wsize = 0;
        /* window size or zero if not using window */

        this.whave = 0;
        /* valid bytes in the window */

        this.wnext = 0;
        /* window write index */

        this.window = null;
        /* allocated sliding window, if needed */

        /* bit accumulator */

        this.hold = 0;
        /* input bit accumulator */

        this.bits = 0;
        /* number of bits in "in" */

        /* for string and stored block copying */

        this.length = 0;
        /* literal or length of data to copy */

        this.offset = 0;
        /* distance back to copy string from */

        /* for table and code decoding */

        this.extra = 0;
        /* extra bits needed */

        /* fixed and dynamic code tables */

        this.lencode = null;
        /* starting table for length/literal codes */

        this.distcode = null;
        /* starting table for distance codes */

        this.lenbits = 0;
        /* index bits for lencode */

        this.distbits = 0;
        /* index bits for distcode */

        /* dynamic table building */

        this.ncode = 0;
        /* number of code length code lengths */

        this.nlen = 0;
        /* number of length code lengths */

        this.ndist = 0;
        /* number of distance code lengths */

        this.have = 0;
        /* number of code lengths in lens[] */

        this.next = null;
        /* next available space in codes[] */

        this.lens = new utils.Buf16(320);
        /* temporary storage for code lengths */

        this.work = new utils.Buf16(288);
        /* work area for code table building */

        /*
         because we don't have pointers in js, we use lencode and distcode directly
         as buffers so we don't need codes
        */
        //this.codes = new utils.Buf32(ENOUGH);       /* space for code tables */

        this.lendyn = null;
        /* dynamic table for length/literal codes (JS specific) */

        this.distdyn = null;
        /* dynamic table for distance codes (JS specific) */

        this.sane = 0;
        /* if false, allow invalid distance too far */

        this.back = 0;
        /* bits back of last unprocessed length/lit */

        this.was = 0;
        /* initial length of match */
      }

      function inflateResetKeep(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        strm.total_in = strm.total_out = state.total = 0;
        strm.msg = '';
        /*Z_NULL*/

        if (state.wrap) {
          /* to support ill-conceived Java test suite */
          strm.adler = state.wrap & 1;
        }

        state.mode = HEAD;
        state.last = 0;
        state.havedict = 0;
        state.dmax = 32768;
        state.head = null
        /*Z_NULL*/
        ;
        state.hold = 0;
        state.bits = 0; //state.lencode = state.distcode = state.next = state.codes;

        state.lencode = state.lendyn = new utils.Buf32(ENOUGH_LENS);
        state.distcode = state.distdyn = new utils.Buf32(ENOUGH_DISTS);
        state.sane = 1;
        state.back = -1; //Tracev((stderr, "inflate: reset\n"));

        return Z_OK;
      }

      function inflateReset(strm) {
        var state;

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        state.wsize = 0;
        state.whave = 0;
        state.wnext = 0;
        return inflateResetKeep(strm);
      }

      function inflateReset2(strm, windowBits) {
        var wrap;
        var state;
        /* get the state */

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;
        /* extract wrap request from windowBits parameter */

        if (windowBits < 0) {
          wrap = 0;
          windowBits = -windowBits;
        } else {
          wrap = (windowBits >> 4) + 1;

          if (windowBits < 48) {
            windowBits &= 15;
          }
        }
        /* set number of window bits, free window if different */


        if (windowBits && (windowBits < 8 || windowBits > 15)) {
          return Z_STREAM_ERROR;
        }

        if (state.window !== null && state.wbits !== windowBits) {
          state.window = null;
        }
        /* update state and reset the rest of it */


        state.wrap = wrap;
        state.wbits = windowBits;
        return inflateReset(strm);
      }

      function inflateInit2(strm, windowBits) {
        var ret;
        var state;

        if (!strm) {
          return Z_STREAM_ERROR;
        } //strm.msg = Z_NULL;                 /* in case we return an error */


        state = new InflateState(); //if (state === Z_NULL) return Z_MEM_ERROR;
        //Tracev((stderr, "inflate: allocated\n"));

        strm.state = state;
        state.window = null
        /*Z_NULL*/
        ;
        ret = inflateReset2(strm, windowBits);

        if (ret !== Z_OK) {
          strm.state = null
          /*Z_NULL*/
          ;
        }

        return ret;
      }

      function inflateInit(strm) {
        return inflateInit2(strm, DEF_WBITS);
      }
      /*
       Return state with length and distance decoding tables and index sizes set to
       fixed code decoding.  Normally this returns fixed tables from inffixed.h.
       If BUILDFIXED is defined, then instead this routine builds the tables the
       first time it's called, and returns those tables the first time and
       thereafter.  This reduces the size of the code by about 2K bytes, in
       exchange for a little execution time.  However, BUILDFIXED should not be
       used for threaded applications, since the rewriting of the tables and virgin
       may not be thread-safe.
       */


      var virgin = true;
      var lenfix, distfix; // We have no pointers in JS, so keep tables separate

      function fixedtables(state) {
        /* build fixed huffman tables if first call (may not be thread safe) */
        if (virgin) {
          var sym;
          lenfix = new utils.Buf32(512);
          distfix = new utils.Buf32(32);
          /* literal/length table */

          sym = 0;

          while (sym < 144) {
            state.lens[sym++] = 8;
          }

          while (sym < 256) {
            state.lens[sym++] = 9;
          }

          while (sym < 280) {
            state.lens[sym++] = 7;
          }

          while (sym < 288) {
            state.lens[sym++] = 8;
          }

          inflate_table(LENS, state.lens, 0, 288, lenfix, 0, state.work, {
            bits: 9
          });
          /* distance table */

          sym = 0;

          while (sym < 32) {
            state.lens[sym++] = 5;
          }

          inflate_table(DISTS, state.lens, 0, 32, distfix, 0, state.work, {
            bits: 5
          });
          /* do this just once */

          virgin = false;
        }

        state.lencode = lenfix;
        state.lenbits = 9;
        state.distcode = distfix;
        state.distbits = 5;
      }
      /*
       Update the window with the last wsize (normally 32K) bytes written before
       returning.  If window does not exist yet, create it.  This is only called
       when a window is already in use, or when output has been written during this
       inflate call, but the end of the deflate stream has not been reached yet.
       It is also called to create a window for dictionary data when a dictionary
       is loaded.
      		 Providing output buffers larger than 32K to inflate() should provide a speed
       advantage, since only the last 32K of output is copied to the sliding window
       upon return from inflate(), and since all distances after the first 32K of
       output will fall in the output data, making match copies simpler and faster.
       The advantage may be dependent on the size of the processor's data caches.
       */


      function updatewindow(strm, src, end, copy) {
        var dist;
        var state = strm.state;
        /* if it hasn't been done already, allocate space for the window */

        if (state.window === null) {
          state.wsize = 1 << state.wbits;
          state.wnext = 0;
          state.whave = 0;
          state.window = new utils.Buf8(state.wsize);
        }
        /* copy state->wsize or less output bytes into the circular window */


        if (copy >= state.wsize) {
          utils.arraySet(state.window, src, end - state.wsize, state.wsize, 0);
          state.wnext = 0;
          state.whave = state.wsize;
        } else {
          dist = state.wsize - state.wnext;

          if (dist > copy) {
            dist = copy;
          } //zmemcpy(state->window + state->wnext, end - copy, dist);


          utils.arraySet(state.window, src, end - copy, dist, state.wnext);
          copy -= dist;

          if (copy) {
            //zmemcpy(state->window, end - copy, copy);
            utils.arraySet(state.window, src, end - copy, copy, 0);
            state.wnext = copy;
            state.whave = state.wsize;
          } else {
            state.wnext += dist;

            if (state.wnext === state.wsize) {
              state.wnext = 0;
            }

            if (state.whave < state.wsize) {
              state.whave += dist;
            }
          }
        }

        return 0;
      }

      function inflate(strm, flush) {
        var state;
        var input, output; // input/output buffers

        var next;
        /* next input INDEX */

        var put;
        /* next output INDEX */

        var have, left;
        /* available input and output */

        var hold;
        /* bit buffer */

        var bits;
        /* bits in bit buffer */

        var _in, _out;
        /* save starting available input and output */


        var copy;
        /* number of stored or match bytes to copy */

        var from;
        /* where to copy match bytes from */

        var from_source;
        var here = 0;
        /* current decoding table entry */

        var here_bits, here_op, here_val; // paked "here" denormalized (JS specific)
        //var last;                   /* parent table entry */

        var last_bits, last_op, last_val; // paked "last" denormalized (JS specific)

        var len;
        /* length to copy for repeats, bits to drop */

        var ret;
        /* return code */

        var hbuf = new utils.Buf8(4);
        /* buffer for gzip header crc calculation */

        var opts;
        var n; // temporary var for NEED_BITS

        var order =
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

        if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;

        if (state.mode === TYPE) {
          state.mode = TYPEDO;
        }
        /* skip check */
        //--- LOAD() ---


        put = strm.next_out;
        output = strm.output;
        left = strm.avail_out;
        next = strm.next_in;
        input = strm.input;
        have = strm.avail_in;
        hold = state.hold;
        bits = state.bits; //---

        _in = have;
        _out = left;
        ret = Z_OK;

        inf_leave: // goto emulation
        for (;;) {
          switch (state.mode) {
            case HEAD:
              if (state.wrap === 0) {
                state.mode = TYPEDO;
                break;
              } //=== NEEDBITS(16);


              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.wrap & 2 && hold === 0x8b1f) {
                /* gzip header */
                state.check = 0
                /*crc32(0L, Z_NULL, 0)*/
                ; //=== CRC2(state.check, hold);

                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
                //=== INITBITS();

                hold = 0;
                bits = 0; //===//

                state.mode = FLAGS;
                break;
              }

              state.flags = 0;
              /* expect zlib header */

              if (state.head) {
                state.head.done = false;
              }

              if (!(state.wrap & 1) ||
              /* check if zlib header allowed */
              (((hold & 0xff) <<
              /*BITS(8)*/
              8) + (hold >> 8)) % 31) {
                strm.msg = 'incorrect header check';
                state.mode = BAD;
                break;
              }

              if ((hold & 0x0f) !==
              /*BITS(4)*/
              Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              } //--- DROPBITS(4) ---//


              hold >>>= 4;
              bits -= 4; //---//

              len = (hold & 0x0f) +
              /*BITS(4)*/
              8;

              if (state.wbits === 0) {
                state.wbits = len;
              } else if (len > state.wbits) {
                strm.msg = 'invalid window size';
                state.mode = BAD;
                break;
              }

              state.dmax = 1 << len; //Tracev((stderr, "inflate:   zlib header ok\n"));

              strm.adler = state.check = 1
              /*adler32(0L, Z_NULL, 0)*/
              ;
              state.mode = hold & 0x200 ? DICTID : TYPE; //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              break;

            case FLAGS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.flags = hold;

              if ((state.flags & 0xff) !== Z_DEFLATED) {
                strm.msg = 'unknown compression method';
                state.mode = BAD;
                break;
              }

              if (state.flags & 0xe000) {
                strm.msg = 'unknown header flags set';
                state.mode = BAD;
                break;
              }

              if (state.head) {
                state.head.text = hold >> 8 & 1;
              }

              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = TIME;

            /* falls through */

            case TIME:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.head) {
                state.head.time = hold;
              }

              if (state.flags & 0x0200) {
                //=== CRC4(state.check, hold)
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                hbuf[2] = hold >>> 16 & 0xff;
                hbuf[3] = hold >>> 24 & 0xff;
                state.check = crc32(state.check, hbuf, 4, 0); //===
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = OS;

            /* falls through */

            case OS:
              //=== NEEDBITS(16); */
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if (state.head) {
                state.head.xflags = hold & 0xff;
                state.head.os = hold >> 8;
              }

              if (state.flags & 0x0200) {
                //=== CRC2(state.check, hold);
                hbuf[0] = hold & 0xff;
                hbuf[1] = hold >>> 8 & 0xff;
                state.check = crc32(state.check, hbuf, 2, 0); //===//
              } //=== INITBITS();


              hold = 0;
              bits = 0; //===//

              state.mode = EXLEN;

            /* falls through */

            case EXLEN:
              if (state.flags & 0x0400) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.length = hold;

                if (state.head) {
                  state.head.extra_len = hold;
                }

                if (state.flags & 0x0200) {
                  //=== CRC2(state.check, hold);
                  hbuf[0] = hold & 0xff;
                  hbuf[1] = hold >>> 8 & 0xff;
                  state.check = crc32(state.check, hbuf, 2, 0); //===//
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
              } else if (state.head) {
                state.head.extra = null
                /*Z_NULL*/
                ;
              }

              state.mode = EXTRA;

            /* falls through */

            case EXTRA:
              if (state.flags & 0x0400) {
                copy = state.length;

                if (copy > have) {
                  copy = have;
                }

                if (copy) {
                  if (state.head) {
                    len = state.head.extra_len - state.length;

                    if (!state.head.extra) {
                      // Use untyped array for more convenient processing later
                      state.head.extra = new Array(state.head.extra_len);
                    }

                    utils.arraySet(state.head.extra, input, next, // extra field is limited to 65536 bytes
                    // - no need for additional size check
                    copy,
                    /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                    len); //zmemcpy(state.head.extra + len, next,
                    //        len + copy > state.head.extra_max ?
                    //        state.head.extra_max - len : copy);
                  }

                  if (state.flags & 0x0200) {
                    state.check = crc32(state.check, input, copy, next);
                  }

                  have -= copy;
                  next += copy;
                  state.length -= copy;
                }

                if (state.length) {
                  break inf_leave;
                }
              }

              state.length = 0;
              state.mode = NAME;

            /* falls through */

            case NAME:
              if (state.flags & 0x0800) {
                if (have === 0) {
                  break inf_leave;
                }

                copy = 0;

                do {
                  // TODO: 2 or 1 bytes?
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */

                  if (state.head && len && state.length < 65536
                  /*state.head.name_max*/
                  ) {
                    state.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }

                have -= copy;
                next += copy;

                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.name = null;
              }

              state.length = 0;
              state.mode = COMMENT;

            /* falls through */

            case COMMENT:
              if (state.flags & 0x1000) {
                if (have === 0) {
                  break inf_leave;
                }

                copy = 0;

                do {
                  len = input[next + copy++];
                  /* use constant limit because in js we should not preallocate memory */

                  if (state.head && len && state.length < 65536
                  /*state.head.comm_max*/
                  ) {
                    state.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);

                if (state.flags & 0x0200) {
                  state.check = crc32(state.check, input, copy, next);
                }

                have -= copy;
                next += copy;

                if (len) {
                  break inf_leave;
                }
              } else if (state.head) {
                state.head.comment = null;
              }

              state.mode = HCRC;

            /* falls through */

            case HCRC:
              if (state.flags & 0x0200) {
                //=== NEEDBITS(16); */
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                if (hold !== (state.check & 0xffff)) {
                  strm.msg = 'header crc mismatch';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
              }

              if (state.head) {
                state.head.hcrc = state.flags >> 9 & 1;
                state.head.done = true;
              }

              strm.adler = state.check = 0;
              state.mode = TYPE;
              break;

            case DICTID:
              //=== NEEDBITS(32); */
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              strm.adler = state.check = zswap32(hold); //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              state.mode = DICT;

            /* falls through */

            case DICT:
              if (state.havedict === 0) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits; //---

                return Z_NEED_DICT;
              }

              strm.adler = state.check = 1
              /*adler32(0L, Z_NULL, 0)*/
              ;
              state.mode = TYPE;

            /* falls through */

            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case TYPEDO:
              if (state.last) {
                //--- BYTEBITS() ---//
                hold >>>= bits & 7;
                bits -= bits & 7; //---//

                state.mode = CHECK;
                break;
              } //=== NEEDBITS(3); */


              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.last = hold & 0x01
              /*BITS(1)*/
              ; //--- DROPBITS(1) ---//

              hold >>>= 1;
              bits -= 1; //---//

              switch (hold & 0x03) {
                /*BITS(2)*/
                case 0:
                  /* stored block */
                  //Tracev((stderr, "inflate:     stored block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = STORED;
                  break;

                case 1:
                  /* fixed block */
                  fixedtables(state); //Tracev((stderr, "inflate:     fixed codes block%s\n",
                  //        state.last ? " (last)" : ""));

                  state.mode = LEN_;
                  /* decode codes */

                  if (flush === Z_TREES) {
                    //--- DROPBITS(2) ---//
                    hold >>>= 2;
                    bits -= 2; //---//

                    break inf_leave;
                  }

                  break;

                case 2:
                  /* dynamic block */
                  //Tracev((stderr, "inflate:     dynamic codes block%s\n",
                  //        state.last ? " (last)" : ""));
                  state.mode = TABLE;
                  break;

                case 3:
                  strm.msg = 'invalid block type';
                  state.mode = BAD;
              } //--- DROPBITS(2) ---//


              hold >>>= 2;
              bits -= 2; //---//

              break;

            case STORED:
              //--- BYTEBITS() ---// /* go to byte boundary */
              hold >>>= bits & 7;
              bits -= bits & 7; //---//
              //=== NEEDBITS(32); */

              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              if ((hold & 0xffff) !== (hold >>> 16 ^ 0xffff)) {
                strm.msg = 'invalid stored block lengths';
                state.mode = BAD;
                break;
              }

              state.length = hold & 0xffff; //Tracev((stderr, "inflate:       stored length %u\n",
              //        state.length));
              //=== INITBITS();

              hold = 0;
              bits = 0; //===//

              state.mode = COPY_;

              if (flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case COPY_:
              state.mode = COPY;

            /* falls through */

            case COPY:
              copy = state.length;

              if (copy) {
                if (copy > have) {
                  copy = have;
                }

                if (copy > left) {
                  copy = left;
                }

                if (copy === 0) {
                  break inf_leave;
                } //--- zmemcpy(put, next, copy); ---


                utils.arraySet(output, input, next, copy, put); //---//

                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state.length -= copy;
                break;
              } //Tracev((stderr, "inflate:       stored end\n"));


              state.mode = TYPE;
              break;

            case TABLE:
              //=== NEEDBITS(14); */
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8;
              } //===//


              state.nlen = (hold & 0x1f) +
              /*BITS(5)*/
              257; //--- DROPBITS(5) ---//

              hold >>>= 5;
              bits -= 5; //---//

              state.ndist = (hold & 0x1f) +
              /*BITS(5)*/
              1; //--- DROPBITS(5) ---//

              hold >>>= 5;
              bits -= 5; //---//

              state.ncode = (hold & 0x0f) +
              /*BITS(4)*/
              4; //--- DROPBITS(4) ---//

              hold >>>= 4;
              bits -= 4; //---//
              //#ifndef PKZIP_BUG_WORKAROUND

              if (state.nlen > 286 || state.ndist > 30) {
                strm.msg = 'too many length or distance symbols';
                state.mode = BAD;
                break;
              } //#endif
              //Tracev((stderr, "inflate:       table sizes ok\n"));


              state.have = 0;
              state.mode = LENLENS;

            /* falls through */

            case LENLENS:
              while (state.have < state.ncode) {
                //=== NEEDBITS(3);
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.lens[order[state.have++]] = hold & 0x07; //BITS(3);
                //--- DROPBITS(3) ---//

                hold >>>= 3;
                bits -= 3; //---//
              }

              while (state.have < 19) {
                state.lens[order[state.have++]] = 0;
              } // We have separate tables & no pointers. 2 commented lines below not needed.
              //state.next = state.codes;
              //state.lencode = state.next;
              // Switch to use dynamic table


              state.lencode = state.lendyn;
              state.lenbits = 7;
              opts = {
                bits: state.lenbits
              };
              ret = inflate_table(CODES, state.lens, 0, 19, state.lencode, 0, state.work, opts);
              state.lenbits = opts.bits;

              if (ret) {
                strm.msg = 'invalid code lengths set';
                state.mode = BAD;
                break;
              } //Tracev((stderr, "inflate:       code lengths ok\n"));


              state.have = 0;
              state.mode = CODELENS;

            /* falls through */

            case CODELENS:
              while (state.have < state.nlen + state.ndist) {
                for (;;) {
                  here = state.lencode[hold & (1 << state.lenbits) - 1];
                  /*BITS(state.lenbits)*/

                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                }

                if (here_val < 16) {
                  //--- DROPBITS(here.bits) ---//
                  hold >>>= here_bits;
                  bits -= here_bits; //---//

                  state.lens[state.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    //=== NEEDBITS(here.bits + 2);
                    n = here_bits + 2;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    if (state.have === 0) {
                      strm.msg = 'invalid bit length repeat';
                      state.mode = BAD;
                      break;
                    }

                    len = state.lens[state.have - 1];
                    copy = 3 + (hold & 0x03); //BITS(2);
                    //--- DROPBITS(2) ---//

                    hold >>>= 2;
                    bits -= 2; //---//
                  } else if (here_val === 17) {
                    //=== NEEDBITS(here.bits + 3);
                    n = here_bits + 3;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    len = 0;
                    copy = 3 + (hold & 0x07); //BITS(3);
                    //--- DROPBITS(3) ---//

                    hold >>>= 3;
                    bits -= 3; //---//
                  } else {
                    //=== NEEDBITS(here.bits + 7);
                    n = here_bits + 7;

                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }

                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    } //===//
                    //--- DROPBITS(here.bits) ---//


                    hold >>>= here_bits;
                    bits -= here_bits; //---//

                    len = 0;
                    copy = 11 + (hold & 0x7f); //BITS(7);
                    //--- DROPBITS(7) ---//

                    hold >>>= 7;
                    bits -= 7; //---//
                  }

                  if (state.have + copy > state.nlen + state.ndist) {
                    strm.msg = 'invalid bit length repeat';
                    state.mode = BAD;
                    break;
                  }

                  while (copy--) {
                    state.lens[state.have++] = len;
                  }
                }
              }
              /* handle error breaks in while */


              if (state.mode === BAD) {
                break;
              }
              /* check for end-of-block code (better have one) */


              if (state.lens[256] === 0) {
                strm.msg = 'invalid code -- missing end-of-block';
                state.mode = BAD;
                break;
              }
              /* build code tables -- note: do not change the lenbits or distbits
                 values here (9 and 6) without reading the comments in inftrees.h
                 concerning the ENOUGH constants, which depend on those values */


              state.lenbits = 9;
              opts = {
                bits: state.lenbits
              };
              ret = inflate_table(LENS, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;

              state.lenbits = opts.bits; // state.lencode = state.next;

              if (ret) {
                strm.msg = 'invalid literal/lengths set';
                state.mode = BAD;
                break;
              }

              state.distbits = 6; //state.distcode.copy(state.codes);
              // Switch to use dynamic table

              state.distcode = state.distdyn;
              opts = {
                bits: state.distbits
              };
              ret = inflate_table(DISTS, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts); // We have separate tables & no pointers. 2 commented lines below not needed.
              // state.next_index = opts.table_index;

              state.distbits = opts.bits; // state.distcode = state.next;

              if (ret) {
                strm.msg = 'invalid distances set';
                state.mode = BAD;
                break;
              } //Tracev((stderr, 'inflate:       codes ok\n'));


              state.mode = LEN_;

              if (flush === Z_TREES) {
                break inf_leave;
              }

            /* falls through */

            case LEN_:
              state.mode = LEN;

            /* falls through */

            case LEN:
              if (have >= 6 && left >= 258) {
                //--- RESTORE() ---
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state.hold = hold;
                state.bits = bits; //---

                inflate_fast(strm, _out); //--- LOAD() ---

                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state.hold;
                bits = state.bits; //---

                if (state.mode === TYPE) {
                  state.back = -1;
                }

                break;
              }

              state.back = 0;

              for (;;) {
                here = state.lencode[hold & (1 << state.lenbits) - 1];
                /*BITS(state.lenbits)*/

                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                } //--- PULLBYTE() ---//


                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8; //---//
              }

              if (here_op && (here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;

                for (;;) {
                  here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
                  /*BITS(last.bits + last.op)*/
                  last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                } //--- DROPBITS(last.bits) ---//


                hold >>>= last_bits;
                bits -= last_bits; //---//

                state.back += last_bits;
              } //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.back += here_bits;
              state.length = here_val;

              if (here_op === 0) {
                //Tracevv((stderr, here.val >= 0x20 && here.val < 0x7f ?
                //        "inflate:         literal '%c'\n" :
                //        "inflate:         literal 0x%02x\n", here.val));
                state.mode = LIT;
                break;
              }

              if (here_op & 32) {
                //Tracevv((stderr, "inflate:         end of block\n"));
                state.back = -1;
                state.mode = TYPE;
                break;
              }

              if (here_op & 64) {
                strm.msg = 'invalid literal/length code';
                state.mode = BAD;
                break;
              }

              state.extra = here_op & 15;
              state.mode = LENEXT;

            /* falls through */

            case LENEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.length += hold & (1 << state.extra) - 1
                /*BITS(state.extra)*/
                ; //--- DROPBITS(state.extra) ---//

                hold >>>= state.extra;
                bits -= state.extra; //---//

                state.back += state.extra;
              } //Tracevv((stderr, "inflate:         length %u\n", state.length));


              state.was = state.length;
              state.mode = DIST;

            /* falls through */

            case DIST:
              for (;;) {
                here = state.distcode[hold & (1 << state.distbits) - 1];
                /*BITS(state.distbits)*/

                here_bits = here >>> 24;
                here_op = here >>> 16 & 0xff;
                here_val = here & 0xffff;

                if (here_bits <= bits) {
                  break;
                } //--- PULLBYTE() ---//


                if (have === 0) {
                  break inf_leave;
                }

                have--;
                hold += input[next++] << bits;
                bits += 8; //---//
              }

              if ((here_op & 0xf0) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;

                for (;;) {
                  here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >>
                  /*BITS(last.bits + last.op)*/
                  last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 0xff;
                  here_val = here & 0xffff;

                  if (last_bits + here_bits <= bits) {
                    break;
                  } //--- PULLBYTE() ---//


                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8; //---//
                } //--- DROPBITS(last.bits) ---//


                hold >>>= last_bits;
                bits -= last_bits; //---//

                state.back += last_bits;
              } //--- DROPBITS(here.bits) ---//


              hold >>>= here_bits;
              bits -= here_bits; //---//

              state.back += here_bits;

              if (here_op & 64) {
                strm.msg = 'invalid distance code';
                state.mode = BAD;
                break;
              }

              state.offset = here_val;
              state.extra = here_op & 15;
              state.mode = DISTEXT;

            /* falls through */

            case DISTEXT:
              if (state.extra) {
                //=== NEEDBITS(state.extra);
                n = state.extra;

                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                state.offset += hold & (1 << state.extra) - 1
                /*BITS(state.extra)*/
                ; //--- DROPBITS(state.extra) ---//

                hold >>>= state.extra;
                bits -= state.extra; //---//

                state.back += state.extra;
              } //#ifdef INFLATE_STRICT


              if (state.offset > state.dmax) {
                strm.msg = 'invalid distance too far back';
                state.mode = BAD;
                break;
              } //#endif
              //Tracevv((stderr, "inflate:         distance %u\n", state.offset));


              state.mode = MATCH;

            /* falls through */

            case MATCH:
              if (left === 0) {
                break inf_leave;
              }

              copy = _out - left;

              if (state.offset > copy) {
                /* copy from window */
                copy = state.offset - copy;

                if (copy > state.whave) {
                  if (state.sane) {
                    strm.msg = 'invalid distance too far back';
                    state.mode = BAD;
                    break;
                  } // (!) This block is disabled in zlib defaults,
                  // don't enable it for binary compatibility
                  //#ifdef INFLATE_ALLOW_INVALID_DISTANCE_TOOFAR_ARRR
                  //          Trace((stderr, "inflate.c too far\n"));
                  //          copy -= state.whave;
                  //          if (copy > state.length) { copy = state.length; }
                  //          if (copy > left) { copy = left; }
                  //          left -= copy;
                  //          state.length -= copy;
                  //          do {
                  //            output[put++] = 0;
                  //          } while (--copy);
                  //          if (state.length === 0) { state.mode = LEN; }
                  //          break;
                  //#endif

                }

                if (copy > state.wnext) {
                  copy -= state.wnext;
                  from = state.wsize - copy;
                } else {
                  from = state.wnext - copy;
                }

                if (copy > state.length) {
                  copy = state.length;
                }

                from_source = state.window;
              } else {
                /* copy from output */
                from_source = output;
                from = put - state.offset;
                copy = state.length;
              }

              if (copy > left) {
                copy = left;
              }

              left -= copy;
              state.length -= copy;

              do {
                output[put++] = from_source[from++];
              } while (--copy);

              if (state.length === 0) {
                state.mode = LEN;
              }

              break;

            case LIT:
              if (left === 0) {
                break inf_leave;
              }

              output[put++] = state.length;
              left--;
              state.mode = LEN;
              break;

            case CHECK:
              if (state.wrap) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--; // Use '|' instead of '+' to make sure that result is signed

                  hold |= input[next++] << bits;
                  bits += 8;
                } //===//


                _out -= left;
                strm.total_out += _out;
                state.total += _out;

                if (_out) {
                  strm.adler = state.check =
                  /*UPDATE(state.check, put - _out, _out);*/
                  state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
                }

                _out = left; // NB: crc32 stored as signed 32-bit int, zswap32 returns signed too

                if ((state.flags ? hold : zswap32(hold)) !== state.check) {
                  strm.msg = 'incorrect data check';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
                //Tracev((stderr, "inflate:   check matches trailer\n"));
              }

              state.mode = LENGTH;

            /* falls through */

            case LENGTH:
              if (state.wrap && state.flags) {
                //=== NEEDBITS(32);
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }

                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                } //===//


                if (hold !== (state.total & 0xffffffff)) {
                  strm.msg = 'incorrect length check';
                  state.mode = BAD;
                  break;
                } //=== INITBITS();


                hold = 0;
                bits = 0; //===//
                //Tracev((stderr, "inflate:   length matches trailer\n"));
              }

              state.mode = DONE;

            /* falls through */

            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;

            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;

            case MEM:
              return Z_MEM_ERROR;

            case SYNC:
            /* falls through */

            default:
              return Z_STREAM_ERROR;
          }
        } // inf_leave <- here is real place for "goto inf_leave", emulated via "break inf_leave"

        /*
           Return from inflate(), updating the total counts and the check value.
           If there was no progress during the inflate() call, return a buffer
           error.  Call updatewindow() to create and/or update the window state.
           Note: a memory error from inflate() is non-recoverable.
         */
        //--- RESTORE() ---


        strm.next_out = put;
        strm.avail_out = left;
        strm.next_in = next;
        strm.avail_in = have;
        state.hold = hold;
        state.bits = bits; //---

        if (state.wsize || _out !== strm.avail_out && state.mode < BAD && (state.mode < CHECK || flush !== Z_FINISH)) {
          if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
            state.mode = MEM;
            return Z_MEM_ERROR;
          }
        }

        _in -= strm.avail_in;
        _out -= strm.avail_out;
        strm.total_in += _in;
        strm.total_out += _out;
        state.total += _out;

        if (state.wrap && _out) {
          strm.adler = state.check =
          /*UPDATE(state.check, strm.next_out - _out, _out);*/
          state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
        }

        strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);

        if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
          ret = Z_BUF_ERROR;
        }

        return ret;
      }

      function inflateEnd(strm) {
        if (!strm || !strm.state
        /*|| strm->zfree == (free_func)0*/
        ) {
            return Z_STREAM_ERROR;
          }

        var state = strm.state;

        if (state.window) {
          state.window = null;
        }

        strm.state = null;
        return Z_OK;
      }

      function inflateGetHeader(strm, head) {
        var state;
        /* check state */

        if (!strm || !strm.state) {
          return Z_STREAM_ERROR;
        }

        state = strm.state;

        if ((state.wrap & 2) === 0) {
          return Z_STREAM_ERROR;
        }
        /* save header structure */


        state.head = head;
        head.done = false;
        return Z_OK;
      }

      function inflateSetDictionary(strm, dictionary) {
        var dictLength = dictionary.length;
        var state;
        var dictid;
        var ret;
        /* check state */

        if (!strm
        /* == Z_NULL */
        || !strm.state
        /* == Z_NULL */
        ) {
            return Z_STREAM_ERROR;
          }

        state = strm.state;

        if (state.wrap !== 0 && state.mode !== DICT) {
          return Z_STREAM_ERROR;
        }
        /* check for correct dictionary identifier */


        if (state.mode === DICT) {
          dictid = 1;
          /* adler32(0, null, 0)*/

          /* dictid = adler32(dictid, dictionary, dictLength); */

          dictid = adler32(dictid, dictionary, dictLength, 0);

          if (dictid !== state.check) {
            return Z_DATA_ERROR;
          }
        }
        /* copy dictionary to window using updatewindow(), which will amend the
         existing dictionary if appropriate */


        ret = updatewindow(strm, dictionary, dictLength, dictLength);

        if (ret) {
          state.mode = MEM;
          return Z_MEM_ERROR;
        }

        state.havedict = 1; // Tracev((stderr, "inflate:   dictionary set\n"));

        return Z_OK;
      }

      exports.inflateReset = inflateReset;
      exports.inflateReset2 = inflateReset2;
      exports.inflateResetKeep = inflateResetKeep;
      exports.inflateInit = inflateInit;
      exports.inflateInit2 = inflateInit2;
      exports.inflate = inflate;
      exports.inflateEnd = inflateEnd;
      exports.inflateGetHeader = inflateGetHeader;
      exports.inflateSetDictionary = inflateSetDictionary;
      exports.inflateInfo = 'pako inflate (from Nodeca project)';
      /* Not implemented
      exports.inflateCopy = inflateCopy;
      exports.inflateGetDictionary = inflateGetDictionary;
      exports.inflateMark = inflateMark;
      exports.inflatePrime = inflatePrime;
      exports.inflateSync = inflateSync;
      exports.inflateSyncPoint = inflateSyncPoint;
      exports.inflateUndermine = inflateUndermine;
      */
    }, {
      "../utils/common": 3,
      "./adler32": 5,
      "./crc32": 7,
      "./inffast": 10,
      "./inftrees": 12
    }],
    12: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      var utils = require('../utils/common');

      var MAXBITS = 15;
      var ENOUGH_LENS = 852;
      var ENOUGH_DISTS = 592; //var ENOUGH = (ENOUGH_LENS+ENOUGH_DISTS);

      var CODES = 0;
      var LENS = 1;
      var DISTS = 2;
      var lbase = [
      /* Length codes 257..285 base */
      3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0];
      var lext = [
      /* Length codes 257..285 extra */
      16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78];
      var dbase = [
      /* Distance codes 0..29 base */
      1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0];
      var dext = [
      /* Distance codes 0..29 extra */
      16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];

      module.exports = function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
        var bits = opts.bits; //here = opts.here; /* table entry for duplication */

        var len = 0;
        /* a code's length in bits */

        var sym = 0;
        /* index of code symbols */

        var min = 0,
            max = 0;
        /* minimum and maximum code lengths */

        var root = 0;
        /* number of index bits for root table */

        var curr = 0;
        /* number of index bits for current table */

        var drop = 0;
        /* code bits to drop for sub-table */

        var left = 0;
        /* number of prefix codes available */

        var used = 0;
        /* code entries in table used */

        var huff = 0;
        /* Huffman code */

        var incr;
        /* for incrementing code, index */

        var fill;
        /* index for replicating entries */

        var low;
        /* low bits for current root entry */

        var mask;
        /* mask for low root bits */

        var next;
        /* next available space in table */

        var base = null;
        /* base value table to use */

        var base_index = 0; //  var shoextra;    /* extra bits table to use */

        var end;
        /* use base and extra for symbol > end */

        var count = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];    /* number of codes of each length */

        var offs = new utils.Buf16(MAXBITS + 1); //[MAXBITS+1];     /* offsets in table for each length */

        var extra = null;
        var extra_index = 0;
        var here_bits, here_op, here_val;
        /*
         Process a set of code lengths to create a canonical Huffman code.  The
         code lengths are lens[0..codes-1].  Each length corresponds to the
         symbols 0..codes-1.  The Huffman code is generated by first sorting the
         symbols by length from short to long, and retaining the symbol order
         for codes with equal lengths.  Then the code starts with all zero bits
         for the first code of the shortest length, and the codes are integer
         increments for the same length, and zeros are appended as the length
         increases.  For the deflate format, these bits are stored backwards
         from their more natural integer increment ordering, and so when the
         decoding tables are built in the large loop below, the integer codes
         are incremented backwards.
        		 This routine assumes, but does not check, that all of the entries in
         lens[] are in the range 0..MAXBITS.  The caller must assure this.
         1..MAXBITS is interpreted as that code length.  zero means that that
         symbol does not occur in this code.
        		 The codes are sorted by computing a count of codes for each length,
         creating from that a table of starting indices for each length in the
         sorted table, and then entering the symbols in order in the sorted
         table.  The sorted table is work[], with that space being provided by
         the caller.
        		 The length counts are used for other purposes as well, i.e. finding
         the minimum and maximum length codes, determining if there are any
         codes at all, checking for a valid set of lengths, and looking ahead
         at length counts to determine sub-table sizes when building the
         decoding tables.
         */

        /* accumulate lengths for codes (assumes lens[] all in 0..MAXBITS) */

        for (len = 0; len <= MAXBITS; len++) {
          count[len] = 0;
        }

        for (sym = 0; sym < codes; sym++) {
          count[lens[lens_index + sym]]++;
        }
        /* bound code lengths, force root to be within code lengths */


        root = bits;

        for (max = MAXBITS; max >= 1; max--) {
          if (count[max] !== 0) {
            break;
          }
        }

        if (root > max) {
          root = max;
        }

        if (max === 0) {
          /* no symbols to code at all */
          //table.op[opts.table_index] = 64;  //here.op = (var char)64;    /* invalid code marker */
          //table.bits[opts.table_index] = 1;   //here.bits = (var char)1;
          //table.val[opts.table_index++] = 0;   //here.val = (var short)0;
          table[table_index++] = 1 << 24 | 64 << 16 | 0; //table.op[opts.table_index] = 64;
          //table.bits[opts.table_index] = 1;
          //table.val[opts.table_index++] = 0;

          table[table_index++] = 1 << 24 | 64 << 16 | 0;
          opts.bits = 1;
          return 0;
          /* no symbols, but wait for decoding to report error */
        }

        for (min = 1; min < max; min++) {
          if (count[min] !== 0) {
            break;
          }
        }

        if (root < min) {
          root = min;
        }
        /* check for an over-subscribed or incomplete set of lengths */


        left = 1;

        for (len = 1; len <= MAXBITS; len++) {
          left <<= 1;
          left -= count[len];

          if (left < 0) {
            return -1;
          }
          /* over-subscribed */

        }

        if (left > 0 && (type === CODES || max !== 1)) {
          return -1;
          /* incomplete set */
        }
        /* generate offsets into symbol table for each length for sorting */


        offs[1] = 0;

        for (len = 1; len < MAXBITS; len++) {
          offs[len + 1] = offs[len] + count[len];
        }
        /* sort symbols by length, by symbol order within each length */


        for (sym = 0; sym < codes; sym++) {
          if (lens[lens_index + sym] !== 0) {
            work[offs[lens[lens_index + sym]]++] = sym;
          }
        }
        /*
         Create and fill in decoding tables.  In this loop, the table being
         filled is at next and has curr index bits.  The code being used is huff
         with length len.  That code is converted to an index by dropping drop
         bits off of the bottom.  For codes where len is less than drop + curr,
         those top drop + curr - len bits are incremented through all values to
         fill the table with replicated entries.
        		 root is the number of index bits for the root table.  When len exceeds
         root, sub-tables are created pointed to by the root entry with an index
         of the low root bits of huff.  This is saved in low to check for when a
         new sub-table should be started.  drop is zero when the root table is
         being filled, and drop is root when sub-tables are being filled.
        		 When a new sub-table is needed, it is necessary to look ahead in the
         code lengths to determine what size sub-table is needed.  The length
         counts are used for this, and so count[] is decremented as codes are
         entered in the tables.
        		 used keeps track of how many table entries have been allocated from the
         provided *table space.  It is checked for LENS and DIST tables against
         the constants ENOUGH_LENS and ENOUGH_DISTS to guard against changes in
         the initial root table size constants.  See the comments in inftrees.h
         for more information.
        		 sym increments through all symbols, and the loop terminates when
         all codes of length max, i.e. all codes, have been processed.  This
         routine permits incomplete codes, so another loop after this one fills
         in the rest of the decoding tables with invalid code markers.
         */

        /* set up for code type */
        // poor man optimization - use if-else instead of switch,
        // to avoid deopts in old v8


        if (type === CODES) {
          base = extra = work;
          /* dummy value--not used */

          end = 19;
        } else if (type === LENS) {
          base = lbase;
          base_index -= 257;
          extra = lext;
          extra_index -= 257;
          end = 256;
        } else {
          /* DISTS */
          base = dbase;
          extra = dext;
          end = -1;
        }
        /* initialize opts for loop */


        huff = 0;
        /* starting code */

        sym = 0;
        /* starting code symbol */

        len = min;
        /* starting code length */

        next = table_index;
        /* current table to fill in */

        curr = root;
        /* current table index bits */

        drop = 0;
        /* current bits to drop from code for index */

        low = -1;
        /* trigger new sub-table when len > root */

        used = 1 << root;
        /* use root table entries */

        mask = used - 1;
        /* mask for comparing low */

        /* check available table space */

        if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
          return 1;
        }
        /* process all codes and make table entries */


        for (;;) {
          /* create table entry */
          here_bits = len - drop;

          if (work[sym] < end) {
            here_op = 0;
            here_val = work[sym];
          } else if (work[sym] > end) {
            here_op = extra[extra_index + work[sym]];
            here_val = base[base_index + work[sym]];
          } else {
            here_op = 32 + 64;
            /* end of block */

            here_val = 0;
          }
          /* replicate for those indices with low len bits equal to huff */


          incr = 1 << len - drop;
          fill = 1 << curr;
          min = fill;
          /* save offset to next table */

          do {
            fill -= incr;
            table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
          } while (fill !== 0);
          /* backwards increment the len-bit code huff */


          incr = 1 << len - 1;

          while (huff & incr) {
            incr >>= 1;
          }

          if (incr !== 0) {
            huff &= incr - 1;
            huff += incr;
          } else {
            huff = 0;
          }
          /* go to next symbol, update count, len */


          sym++;

          if (--count[len] === 0) {
            if (len === max) {
              break;
            }

            len = lens[lens_index + work[sym]];
          }
          /* create new sub-table if needed */


          if (len > root && (huff & mask) !== low) {
            /* if first time, transition to sub-tables */
            if (drop === 0) {
              drop = root;
            }
            /* increment past last table */


            next += min;
            /* here min is 1 << curr */

            /* determine length of next table */

            curr = len - drop;
            left = 1 << curr;

            while (curr + drop < max) {
              left -= count[curr + drop];

              if (left <= 0) {
                break;
              }

              curr++;
              left <<= 1;
            }
            /* check for enough space */


            used += 1 << curr;

            if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
              return 1;
            }
            /* point entry in root table to sub-table */


            low = huff & mask;
            /*table.op[low] = curr;
            table.bits[low] = root;
            table.val[low] = next - opts.table_index;*/

            table[low] = root << 24 | curr << 16 | next - table_index | 0;
          }
        }
        /* fill in remaining table entry if code is incomplete (guaranteed to have
         at most one remaining entry, since if the code is incomplete, the
         maximum code length that was allowed to get this far is one bit) */


        if (huff !== 0) {
          //table.op[next + huff] = 64;            /* invalid code marker */
          //table.bits[next + huff] = len - drop;
          //table.val[next + huff] = 0;
          table[next + huff] = len - drop << 24 | 64 << 16 | 0;
        }
        /* set return parameters */
        //opts.table_index += used;


        opts.bits = root;
        return 0;
      };
    }, {
      "../utils/common": 3
    }],
    13: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      module.exports = {
        2: 'need dictionary',

        /* Z_NEED_DICT       2  */
        1: 'stream end',

        /* Z_STREAM_END      1  */
        0: '',

        /* Z_OK              0  */
        '-1': 'file error',

        /* Z_ERRNO         (-1) */
        '-2': 'stream error',

        /* Z_STREAM_ERROR  (-2) */
        '-3': 'data error',

        /* Z_DATA_ERROR    (-3) */
        '-4': 'insufficient memory',

        /* Z_MEM_ERROR     (-4) */
        '-5': 'buffer error',

        /* Z_BUF_ERROR     (-5) */
        '-6': 'incompatible version'
        /* Z_VERSION_ERROR (-6) */

      };
    }, {}],
    14: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      /* eslint-disable space-unary-ops */

      var utils = require('../utils/common');
      /* Public constants ==========================================================*/

      /* ===========================================================================*/
      //var Z_FILTERED          = 1;
      //var Z_HUFFMAN_ONLY      = 2;
      //var Z_RLE               = 3;


      var Z_FIXED = 4; //var Z_DEFAULT_STRATEGY  = 0;

      /* Possible values of the data_type field (though see inflate()) */

      var Z_BINARY = 0;
      var Z_TEXT = 1; //var Z_ASCII             = 1; // = Z_TEXT

      var Z_UNKNOWN = 2;
      /*============================================================================*/

      function zero(buf) {
        var len = buf.length;

        while (--len >= 0) {
          buf[len] = 0;
        }
      } // From zutil.h


      var STORED_BLOCK = 0;
      var STATIC_TREES = 1;
      var DYN_TREES = 2;
      /* The three kinds of block type */

      var MIN_MATCH = 3;
      var MAX_MATCH = 258;
      /* The minimum and maximum match lengths */
      // From deflate.h

      /* ===========================================================================
       * Internal compression state.
       */

      var LENGTH_CODES = 29;
      /* number of length codes, not counting the special END_BLOCK code */

      var LITERALS = 256;
      /* number of literal bytes 0..255 */

      var L_CODES = LITERALS + 1 + LENGTH_CODES;
      /* number of Literal or Length codes, including the END_BLOCK code */

      var D_CODES = 30;
      /* number of distance codes */

      var BL_CODES = 19;
      /* number of codes used to transfer the bit lengths */

      var HEAP_SIZE = 2 * L_CODES + 1;
      /* maximum heap size */

      var MAX_BITS = 15;
      /* All codes must not exceed MAX_BITS bits */

      var Buf_size = 16;
      /* size of bit buffer in bi_buf */

      /* ===========================================================================
       * Constants
       */

      var MAX_BL_BITS = 7;
      /* Bit length codes must not exceed MAX_BL_BITS bits */

      var END_BLOCK = 256;
      /* end of block literal code */

      var REP_3_6 = 16;
      /* repeat previous bit length 3-6 times (2 bits of repeat count) */

      var REPZ_3_10 = 17;
      /* repeat a zero length 3-10 times  (3 bits of repeat count) */

      var REPZ_11_138 = 18;
      /* repeat a zero length 11-138 times  (7 bits of repeat count) */

      /* eslint-disable comma-spacing,array-bracket-spacing */

      var extra_lbits =
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
      var extra_dbits =
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
      var extra_blbits =
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
      var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
      /* eslint-enable comma-spacing,array-bracket-spacing */

      /* The lengths of the bit length codes are sent in order of decreasing
       * probability, to avoid transmitting the lengths for unused bit length codes.
       */

      /* ===========================================================================
       * Local data. These are initialized only once.
       */
      // We pre-fill arrays with 0 to avoid uninitialized gaps

      var DIST_CODE_LEN = 512;
      /* see definition of array dist_code below */
      // !!!! Use flat array instead of structure, Freq = i*2, Len = i*2+1

      var static_ltree = new Array((L_CODES + 2) * 2);
      zero(static_ltree);
      /* The static literal tree. Since the bit lengths are imposed, there is no
       * need for the L_CODES extra codes used during heap construction. However
       * The codes 286 and 287 are needed to build a canonical tree (see _tr_init
       * below).
       */

      var static_dtree = new Array(D_CODES * 2);
      zero(static_dtree);
      /* The static distance tree. (Actually a trivial tree since all codes use
       * 5 bits.)
       */

      var _dist_code = new Array(DIST_CODE_LEN);

      zero(_dist_code);
      /* Distance codes. The first 256 values correspond to the distances
       * 3 .. 258, the last 256 values correspond to the top 8 bits of
       * the 15 bit distances.
       */

      var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);

      zero(_length_code);
      /* length code for each normalized match length (0 == MIN_MATCH) */

      var base_length = new Array(LENGTH_CODES);
      zero(base_length);
      /* First normalized length for each code (0 = MIN_MATCH) */

      var base_dist = new Array(D_CODES);
      zero(base_dist);
      /* First normalized distance for each code (0 = distance of 1) */

      function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
        this.static_tree = static_tree;
        /* static tree or NULL */

        this.extra_bits = extra_bits;
        /* extra bits for each code or NULL */

        this.extra_base = extra_base;
        /* base index for extra_bits */

        this.elems = elems;
        /* max number of elements in the tree */

        this.max_length = max_length;
        /* max bit length for the codes */
        // show if `static_tree` has data or dummy - needed for monomorphic objects

        this.has_stree = static_tree && static_tree.length;
      }

      var static_l_desc;
      var static_d_desc;
      var static_bl_desc;

      function TreeDesc(dyn_tree, stat_desc) {
        this.dyn_tree = dyn_tree;
        /* the dynamic tree */

        this.max_code = 0;
        /* largest code with non zero frequency */

        this.stat_desc = stat_desc;
        /* the corresponding static tree */
      }

      function d_code(dist) {
        return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
      }
      /* ===========================================================================
       * Output a short LSB first on the stream.
       * IN assertion: there is enough room in pendingBuf.
       */


      function put_short(s, w) {
        //    put_byte(s, (uch)((w) & 0xff));
        //    put_byte(s, (uch)((ush)(w) >> 8));
        s.pending_buf[s.pending++] = w & 0xff;
        s.pending_buf[s.pending++] = w >>> 8 & 0xff;
      }
      /* ===========================================================================
       * Send a value on a given number of bits.
       * IN assertion: length <= 16 and value fits in length bits.
       */


      function send_bits(s, value, length) {
        if (s.bi_valid > Buf_size - length) {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          put_short(s, s.bi_buf);
          s.bi_buf = value >> Buf_size - s.bi_valid;
          s.bi_valid += length - Buf_size;
        } else {
          s.bi_buf |= value << s.bi_valid & 0xffff;
          s.bi_valid += length;
        }
      }

      function send_code(s, c, tree) {
        send_bits(s, tree[c * 2]
        /*.Code*/
        , tree[c * 2 + 1]
        /*.Len*/
        );
      }
      /* ===========================================================================
       * Reverse the first len bits of a code, using straightforward code (a faster
       * method would use a table)
       * IN assertion: 1 <= len <= 15
       */


      function bi_reverse(code, len) {
        var res = 0;

        do {
          res |= code & 1;
          code >>>= 1;
          res <<= 1;
        } while (--len > 0);

        return res >>> 1;
      }
      /* ===========================================================================
       * Flush the bit buffer, keeping at most 7 bits in it.
       */


      function bi_flush(s) {
        if (s.bi_valid === 16) {
          put_short(s, s.bi_buf);
          s.bi_buf = 0;
          s.bi_valid = 0;
        } else if (s.bi_valid >= 8) {
          s.pending_buf[s.pending++] = s.bi_buf & 0xff;
          s.bi_buf >>= 8;
          s.bi_valid -= 8;
        }
      }
      /* ===========================================================================
       * Compute the optimal bit lengths for a tree and update the total bit length
       * for the current block.
       * IN assertion: the fields freq and dad are set, heap[heap_max] and
       *    above are the tree nodes sorted by increasing frequency.
       * OUT assertions: the field len is set to the optimal bit length, the
       *     array bl_count contains the frequencies for each bit length.
       *     The length opt_len is updated; static_len is also updated if stree is
       *     not null.
       */


      function gen_bitlen(s, desc) //    deflate_state *s;
      //    tree_desc *desc;    /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var max_code = desc.max_code;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var extra = desc.stat_desc.extra_bits;
        var base = desc.stat_desc.extra_base;
        var max_length = desc.stat_desc.max_length;
        var h;
        /* heap index */

        var n, m;
        /* iterate over the tree elements */

        var bits;
        /* bit length */

        var xbits;
        /* extra bits */

        var f;
        /* frequency */

        var overflow = 0;
        /* number of elements with bit length too large */

        for (bits = 0; bits <= MAX_BITS; bits++) {
          s.bl_count[bits] = 0;
        }
        /* In a first pass, compute the optimal bit lengths (which may
         * overflow in the case of the bit length tree).
         */


        tree[s.heap[s.heap_max] * 2 + 1]
        /*.Len*/
        = 0;
        /* root of the heap */

        for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
          n = s.heap[h];
          bits = tree[tree[n * 2 + 1]
          /*.Dad*/
          * 2 + 1]
          /*.Len*/
          + 1;

          if (bits > max_length) {
            bits = max_length;
            overflow++;
          }

          tree[n * 2 + 1]
          /*.Len*/
          = bits;
          /* We overwrite tree[n].Dad which is no longer needed */

          if (n > max_code) {
            continue;
          }
          /* not a leaf node */


          s.bl_count[bits]++;
          xbits = 0;

          if (n >= base) {
            xbits = extra[n - base];
          }

          f = tree[n * 2]
          /*.Freq*/
          ;
          s.opt_len += f * (bits + xbits);

          if (has_stree) {
            s.static_len += f * (stree[n * 2 + 1]
            /*.Len*/
            + xbits);
          }
        }

        if (overflow === 0) {
          return;
        } // Trace((stderr,"\nbit length overflow\n"));

        /* This happens for example on obj2 and pic of the Calgary corpus */

        /* Find the first bit length which could increase: */


        do {
          bits = max_length - 1;

          while (s.bl_count[bits] === 0) {
            bits--;
          }

          s.bl_count[bits]--;
          /* move one leaf down the tree */

          s.bl_count[bits + 1] += 2;
          /* move one overflow item as its brother */

          s.bl_count[max_length]--;
          /* The brother of the overflow item also moves one step up,
           * but this does not affect bl_count[max_length]
           */

          overflow -= 2;
        } while (overflow > 0);
        /* Now recompute all bit lengths, scanning in increasing frequency.
         * h is still equal to HEAP_SIZE. (It is simpler to reconstruct all
         * lengths instead of fixing only the wrong ones. This idea is taken
         * from 'ar' written by Haruhiko Okumura.)
         */


        for (bits = max_length; bits !== 0; bits--) {
          n = s.bl_count[bits];

          while (n !== 0) {
            m = s.heap[--h];

            if (m > max_code) {
              continue;
            }

            if (tree[m * 2 + 1]
            /*.Len*/
            !== bits) {
              // Trace((stderr,"code %d bits %d->%d\n", m, tree[m].Len, bits));
              s.opt_len += (bits - tree[m * 2 + 1]
              /*.Len*/
              ) * tree[m * 2]
              /*.Freq*/
              ;
              tree[m * 2 + 1]
              /*.Len*/
              = bits;
            }

            n--;
          }
        }
      }
      /* ===========================================================================
       * Generate the codes for a given tree and bit counts (which need not be
       * optimal).
       * IN assertion: the array bl_count contains the bit length statistics for
       * the given tree and the field len is set for all tree elements.
       * OUT assertion: the field code is set for all tree elements of non
       *     zero code length.
       */


      function gen_codes(tree, max_code, bl_count) //    ct_data *tree;             /* the tree to decorate */
      //    int max_code;              /* largest code with non zero frequency */
      //    ushf *bl_count;            /* number of codes at each bit length */
      {
        var next_code = new Array(MAX_BITS + 1);
        /* next code value for each bit length */

        var code = 0;
        /* running code value */

        var bits;
        /* bit index */

        var n;
        /* code index */

        /* The distribution counts are first used to generate the code values
         * without bit reversal.
         */

        for (bits = 1; bits <= MAX_BITS; bits++) {
          next_code[bits] = code = code + bl_count[bits - 1] << 1;
        }
        /* Check that the bit counts in bl_count are consistent. The last code
         * must be all ones.
         */
        //Assert (code + bl_count[MAX_BITS]-1 == (1<<MAX_BITS)-1,
        //        "inconsistent bit counts");
        //Tracev((stderr,"\ngen_codes: max_code %d ", max_code));


        for (n = 0; n <= max_code; n++) {
          var len = tree[n * 2 + 1]
          /*.Len*/
          ;

          if (len === 0) {
            continue;
          }
          /* Now reverse the bits */


          tree[n * 2]
          /*.Code*/
          = bi_reverse(next_code[len]++, len); //Tracecv(tree != static_ltree, (stderr,"\nn %3d %c l %2d c %4x (%x) ",
          //     n, (isgraph(n) ? n : ' '), len, tree[n].Code, next_code[len]-1));
        }
      }
      /* ===========================================================================
       * Initialize the various 'constant' tables.
       */


      function tr_static_init() {
        var n;
        /* iterates over tree elements */

        var bits;
        /* bit counter */

        var length;
        /* length value */

        var code;
        /* code value */

        var dist;
        /* distance index */

        var bl_count = new Array(MAX_BITS + 1);
        /* number of codes at each bit length for an optimal tree */
        // do check in _tr_init()
        //if (static_init_done) return;

        /* For some embedded targets, global variables are not initialized: */

        /*#ifdef NO_INIT_GLOBAL_POINTERS
          static_l_desc.static_tree = static_ltree;
          static_l_desc.extra_bits = extra_lbits;
          static_d_desc.static_tree = static_dtree;
          static_d_desc.extra_bits = extra_dbits;
          static_bl_desc.extra_bits = extra_blbits;
        #endif*/

        /* Initialize the mapping length (0..255) -> length code (0..28) */

        length = 0;

        for (code = 0; code < LENGTH_CODES - 1; code++) {
          base_length[code] = length;

          for (n = 0; n < 1 << extra_lbits[code]; n++) {
            _length_code[length++] = code;
          }
        } //Assert (length == 256, "tr_static_init: length != 256");

        /* Note that the length 255 (match length 258) can be represented
         * in two different ways: code 284 + 5 bits or code 285, so we
         * overwrite length_code[255] to use the best encoding:
         */


        _length_code[length - 1] = code;
        /* Initialize the mapping dist (0..32K) -> dist code (0..29) */

        dist = 0;

        for (code = 0; code < 16; code++) {
          base_dist[code] = dist;

          for (n = 0; n < 1 << extra_dbits[code]; n++) {
            _dist_code[dist++] = code;
          }
        } //Assert (dist == 256, "tr_static_init: dist != 256");


        dist >>= 7;
        /* from now on, all distances are divided by 128 */

        for (; code < D_CODES; code++) {
          base_dist[code] = dist << 7;

          for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
            _dist_code[256 + dist++] = code;
          }
        } //Assert (dist == 256, "tr_static_init: 256+dist != 512");

        /* Construct the codes of the static literal tree */


        for (bits = 0; bits <= MAX_BITS; bits++) {
          bl_count[bits] = 0;
        }

        n = 0;

        while (n <= 143) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 8;
          n++;
          bl_count[8]++;
        }

        while (n <= 255) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 9;
          n++;
          bl_count[9]++;
        }

        while (n <= 279) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 7;
          n++;
          bl_count[7]++;
        }

        while (n <= 287) {
          static_ltree[n * 2 + 1]
          /*.Len*/
          = 8;
          n++;
          bl_count[8]++;
        }
        /* Codes 286 and 287 do not exist, but we must include them in the
         * tree construction to get a canonical Huffman tree (longest code
         * all ones)
         */


        gen_codes(static_ltree, L_CODES + 1, bl_count);
        /* The static distance tree is trivial: */

        for (n = 0; n < D_CODES; n++) {
          static_dtree[n * 2 + 1]
          /*.Len*/
          = 5;
          static_dtree[n * 2]
          /*.Code*/
          = bi_reverse(n, 5);
        } // Now data ready and we can init static trees


        static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
        static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
        static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS); //static_init_done = true;
      }
      /* ===========================================================================
       * Initialize a new block.
       */


      function init_block(s) {
        var n;
        /* iterates over tree elements */

        /* Initialize the trees. */

        for (n = 0; n < L_CODES; n++) {
          s.dyn_ltree[n * 2]
          /*.Freq*/
          = 0;
        }

        for (n = 0; n < D_CODES; n++) {
          s.dyn_dtree[n * 2]
          /*.Freq*/
          = 0;
        }

        for (n = 0; n < BL_CODES; n++) {
          s.bl_tree[n * 2]
          /*.Freq*/
          = 0;
        }

        s.dyn_ltree[END_BLOCK * 2]
        /*.Freq*/
        = 1;
        s.opt_len = s.static_len = 0;
        s.last_lit = s.matches = 0;
      }
      /* ===========================================================================
       * Flush the bit buffer and align the output on a byte boundary
       */


      function bi_windup(s) {
        if (s.bi_valid > 8) {
          put_short(s, s.bi_buf);
        } else if (s.bi_valid > 0) {
          //put_byte(s, (Byte)s->bi_buf);
          s.pending_buf[s.pending++] = s.bi_buf;
        }

        s.bi_buf = 0;
        s.bi_valid = 0;
      }
      /* ===========================================================================
       * Copy a stored block, storing first the length and its
       * one's complement if requested.
       */


      function copy_block(s, buf, len, header) //DeflateState *s;
      //charf    *buf;    /* the input data */
      //unsigned len;     /* its length */
      //int      header;  /* true if block header must be written */
      {
        bi_windup(s);
        /* align on byte boundary */

        if (header) {
          put_short(s, len);
          put_short(s, ~len);
        } //  while (len--) {
        //    put_byte(s, *buf++);
        //  }


        utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
        s.pending += len;
      }
      /* ===========================================================================
       * Compares to subtrees, using the tree depth as tie breaker when
       * the subtrees have equal frequency. This minimizes the worst case length.
       */


      function smaller(tree, n, m, depth) {
        var _n2 = n * 2;

        var _m2 = m * 2;

        return tree[_n2]
        /*.Freq*/
        < tree[_m2]
        /*.Freq*/
        || tree[_n2]
        /*.Freq*/
        === tree[_m2]
        /*.Freq*/
        && depth[n] <= depth[m];
      }
      /* ===========================================================================
       * Restore the heap property by moving down the tree starting at node k,
       * exchanging a node with the smallest of its two sons if necessary, stopping
       * when the heap property is re-established (each father smaller than its
       * two sons).
       */


      function pqdownheap(s, tree, k) //    deflate_state *s;
      //    ct_data *tree;  /* the tree to restore */
      //    int k;               /* node to move down */
      {
        var v = s.heap[k];
        var j = k << 1;
        /* left son of k */

        while (j <= s.heap_len) {
          /* Set j to the smallest of the two sons: */
          if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
            j++;
          }
          /* Exit if v is smaller than both sons */


          if (smaller(tree, v, s.heap[j], s.depth)) {
            break;
          }
          /* Exchange v with the smallest son */


          s.heap[k] = s.heap[j];
          k = j;
          /* And continue down the tree, setting j to the left son of k */

          j <<= 1;
        }

        s.heap[k] = v;
      } // inlined manually
      // var SMALLEST = 1;

      /* ===========================================================================
       * Send the block data compressed using the given Huffman trees
       */


      function compress_block(s, ltree, dtree) //    deflate_state *s;
      //    const ct_data *ltree; /* literal tree */
      //    const ct_data *dtree; /* distance tree */
      {
        var dist;
        /* distance of matched string */

        var lc;
        /* match length or unmatched char (if dist == 0) */

        var lx = 0;
        /* running index in l_buf */

        var code;
        /* the code to send */

        var extra;
        /* number of extra bits to send */

        if (s.last_lit !== 0) {
          do {
            dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
            lc = s.pending_buf[s.l_buf + lx];
            lx++;

            if (dist === 0) {
              send_code(s, lc, ltree);
              /* send a literal byte */
              //Tracecv(isgraph(lc), (stderr," '%c' ", lc));
            } else {
              /* Here, lc is the match length - MIN_MATCH */
              code = _length_code[lc];
              send_code(s, code + LITERALS + 1, ltree);
              /* send the length code */

              extra = extra_lbits[code];

              if (extra !== 0) {
                lc -= base_length[code];
                send_bits(s, lc, extra);
                /* send the extra length bits */
              }

              dist--;
              /* dist is now the match distance - 1 */

              code = d_code(dist); //Assert (code < D_CODES, "bad d_code");

              send_code(s, code, dtree);
              /* send the distance code */

              extra = extra_dbits[code];

              if (extra !== 0) {
                dist -= base_dist[code];
                send_bits(s, dist, extra);
                /* send the extra distance bits */
              }
            }
            /* literal or match pair ? */

            /* Check that the overlay between pending_buf and d_buf+l_buf is ok: */
            //Assert((uInt)(s->pending) < s->lit_bufsize + 2*lx,
            //       "pendingBuf overflow");

          } while (lx < s.last_lit);
        }

        send_code(s, END_BLOCK, ltree);
      }
      /* ===========================================================================
       * Construct one Huffman tree and assigns the code bit strings and lengths.
       * Update the total bit length for the current block.
       * IN assertion: the field freq is set for all tree elements.
       * OUT assertions: the fields len and code are set to the optimal bit length
       *     and corresponding code. The length opt_len is updated; static_len is
       *     also updated if stree is not null. The field max_code is set.
       */


      function build_tree(s, desc) //    deflate_state *s;
      //    tree_desc *desc; /* the tree descriptor */
      {
        var tree = desc.dyn_tree;
        var stree = desc.stat_desc.static_tree;
        var has_stree = desc.stat_desc.has_stree;
        var elems = desc.stat_desc.elems;
        var n, m;
        /* iterate over heap elements */

        var max_code = -1;
        /* largest code with non zero frequency */

        var node;
        /* new node being created */

        /* Construct the initial heap, with least frequent element in
         * heap[SMALLEST]. The sons of heap[n] are heap[2*n] and heap[2*n+1].
         * heap[0] is not used.
         */

        s.heap_len = 0;
        s.heap_max = HEAP_SIZE;

        for (n = 0; n < elems; n++) {
          if (tree[n * 2]
          /*.Freq*/
          !== 0) {
            s.heap[++s.heap_len] = max_code = n;
            s.depth[n] = 0;
          } else {
            tree[n * 2 + 1]
            /*.Len*/
            = 0;
          }
        }
        /* The pkzip format requires that at least one distance code exists,
         * and that at least one bit should be sent even if there is only one
         * possible code. So to avoid special checks later on we force at least
         * two codes of non zero frequency.
         */


        while (s.heap_len < 2) {
          node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
          tree[node * 2]
          /*.Freq*/
          = 1;
          s.depth[node] = 0;
          s.opt_len--;

          if (has_stree) {
            s.static_len -= stree[node * 2 + 1]
            /*.Len*/
            ;
          }
          /* node is 0 or 1 so it does not have extra bits */

        }

        desc.max_code = max_code;
        /* The elements heap[heap_len/2+1 .. heap_len] are leaves of the tree,
         * establish sub-heaps of increasing lengths:
         */

        for (n = s.heap_len >> 1
        /*int /2*/
        ; n >= 1; n--) {
          pqdownheap(s, tree, n);
        }
        /* Construct the Huffman tree by repeatedly combining the least two
         * frequent nodes.
         */


        node = elems;
        /* next internal node of the tree */

        do {
          //pqremove(s, tree, n);  /* n = node of least frequency */

          /*** pqremove ***/
          n = s.heap[1
          /*SMALLEST*/
          ];
          s.heap[1
          /*SMALLEST*/
          ] = s.heap[s.heap_len--];
          pqdownheap(s, tree, 1
          /*SMALLEST*/
          );
          /***/

          m = s.heap[1
          /*SMALLEST*/
          ];
          /* m = node of next least frequency */

          s.heap[--s.heap_max] = n;
          /* keep the nodes sorted by frequency */

          s.heap[--s.heap_max] = m;
          /* Create a new node father of n and m */

          tree[node * 2]
          /*.Freq*/
          = tree[n * 2]
          /*.Freq*/
          + tree[m * 2]
          /*.Freq*/
          ;
          s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
          tree[n * 2 + 1]
          /*.Dad*/
          = tree[m * 2 + 1]
          /*.Dad*/
          = node;
          /* and insert the new node in the heap */

          s.heap[1
          /*SMALLEST*/
          ] = node++;
          pqdownheap(s, tree, 1
          /*SMALLEST*/
          );
        } while (s.heap_len >= 2);

        s.heap[--s.heap_max] = s.heap[1
        /*SMALLEST*/
        ];
        /* At this point, the fields freq and dad are set. We can now
         * generate the bit lengths.
         */

        gen_bitlen(s, desc);
        /* The field len is now set, we can generate the bit codes */

        gen_codes(tree, max_code, s.bl_count);
      }
      /* ===========================================================================
       * Scan a literal or distance tree to determine the frequencies of the codes
       * in the bit length tree.
       */


      function scan_tree(s, tree, max_code) //    deflate_state *s;
      //    ct_data *tree;   /* the tree to be scanned */
      //    int max_code;    /* and its largest code of non zero frequency */
      {
        var n;
        /* iterates over all tree elements */

        var prevlen = -1;
        /* last emitted length */

        var curlen;
        /* length of current code */

        var nextlen = tree[0 * 2 + 1]
        /*.Len*/
        ;
        /* length of next code */

        var count = 0;
        /* repeat count of the current code */

        var max_count = 7;
        /* max repeat count */

        var min_count = 4;
        /* min repeat count */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }

        tree[(max_code + 1) * 2 + 1]
        /*.Len*/
        = 0xffff;
        /* guard */

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1]
          /*.Len*/
          ;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            s.bl_tree[curlen * 2]
            /*.Freq*/
            += count;
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              s.bl_tree[curlen * 2] /*.Freq*/++;
            }

            s.bl_tree[REP_3_6 * 2] /*.Freq*/++;
          } else if (count <= 10) {
            s.bl_tree[REPZ_3_10 * 2] /*.Freq*/++;
          } else {
            s.bl_tree[REPZ_11_138 * 2] /*.Freq*/++;
          }

          count = 0;
          prevlen = curlen;

          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      /* ===========================================================================
       * Send a literal or distance tree in compressed form, using the codes in
       * bl_tree.
       */


      function send_tree(s, tree, max_code) //    deflate_state *s;
      //    ct_data *tree; /* the tree to be scanned */
      //    int max_code;       /* and its largest code of non zero frequency */
      {
        var n;
        /* iterates over all tree elements */

        var prevlen = -1;
        /* last emitted length */

        var curlen;
        /* length of current code */

        var nextlen = tree[0 * 2 + 1]
        /*.Len*/
        ;
        /* length of next code */

        var count = 0;
        /* repeat count of the current code */

        var max_count = 7;
        /* max repeat count */

        var min_count = 4;
        /* min repeat count */

        /* tree[max_code+1].Len = -1; */

        /* guard already set */

        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        }

        for (n = 0; n <= max_code; n++) {
          curlen = nextlen;
          nextlen = tree[(n + 1) * 2 + 1]
          /*.Len*/
          ;

          if (++count < max_count && curlen === nextlen) {
            continue;
          } else if (count < min_count) {
            do {
              send_code(s, curlen, s.bl_tree);
            } while (--count !== 0);
          } else if (curlen !== 0) {
            if (curlen !== prevlen) {
              send_code(s, curlen, s.bl_tree);
              count--;
            } //Assert(count >= 3 && count <= 6, " 3_6?");


            send_code(s, REP_3_6, s.bl_tree);
            send_bits(s, count - 3, 2);
          } else if (count <= 10) {
            send_code(s, REPZ_3_10, s.bl_tree);
            send_bits(s, count - 3, 3);
          } else {
            send_code(s, REPZ_11_138, s.bl_tree);
            send_bits(s, count - 11, 7);
          }

          count = 0;
          prevlen = curlen;

          if (nextlen === 0) {
            max_count = 138;
            min_count = 3;
          } else if (curlen === nextlen) {
            max_count = 6;
            min_count = 3;
          } else {
            max_count = 7;
            min_count = 4;
          }
        }
      }
      /* ===========================================================================
       * Construct the Huffman tree for the bit lengths and return the index in
       * bl_order of the last bit length code to send.
       */


      function build_bl_tree(s) {
        var max_blindex;
        /* index of last bit length code of non zero freq */

        /* Determine the bit length frequencies for literal and distance trees */

        scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
        scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
        /* Build the bit length tree: */

        build_tree(s, s.bl_desc);
        /* opt_len now includes the length of the tree representations, except
         * the lengths of the bit lengths codes and the 5+5+4 bits for the counts.
         */

        /* Determine the number of bit length codes to send. The pkzip format
         * requires that at least 4 bit length codes be sent. (appnote.txt says
         * 3 but the actual value used is 4.)
         */

        for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
          if (s.bl_tree[bl_order[max_blindex] * 2 + 1]
          /*.Len*/
          !== 0) {
            break;
          }
        }
        /* Update opt_len to include the bit length tree and counts */


        s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4; //Tracev((stderr, "\ndyn trees: dyn %ld, stat %ld",
        //        s->opt_len, s->static_len));

        return max_blindex;
      }
      /* ===========================================================================
       * Send the header for a block using dynamic Huffman trees: the counts, the
       * lengths of the bit length codes, the literal tree and the distance tree.
       * IN assertion: lcodes >= 257, dcodes >= 1, blcodes >= 4.
       */


      function send_all_trees(s, lcodes, dcodes, blcodes) //    deflate_state *s;
      //    int lcodes, dcodes, blcodes; /* number of codes for each tree */
      {
        var rank;
        /* index in bl_order */
        //Assert (lcodes >= 257 && dcodes >= 1 && blcodes >= 4, "not enough codes");
        //Assert (lcodes <= L_CODES && dcodes <= D_CODES && blcodes <= BL_CODES,
        //        "too many codes");
        //Tracev((stderr, "\nbl counts: "));

        send_bits(s, lcodes - 257, 5);
        /* not +255 as stated in appnote.txt */

        send_bits(s, dcodes - 1, 5);
        send_bits(s, blcodes - 4, 4);
        /* not -3 as stated in appnote.txt */

        for (rank = 0; rank < blcodes; rank++) {
          //Tracev((stderr, "\nbl code %2d ", bl_order[rank]));
          send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1]
          /*.Len*/
          , 3);
        } //Tracev((stderr, "\nbl tree: sent %ld", s->bits_sent));


        send_tree(s, s.dyn_ltree, lcodes - 1);
        /* literal tree */
        //Tracev((stderr, "\nlit tree: sent %ld", s->bits_sent));

        send_tree(s, s.dyn_dtree, dcodes - 1);
        /* distance tree */
        //Tracev((stderr, "\ndist tree: sent %ld", s->bits_sent));
      }
      /* ===========================================================================
       * Check if the data type is TEXT or BINARY, using the following algorithm:
       * - TEXT if the two conditions below are satisfied:
       *    a) There are no non-portable control characters belonging to the
       *       "black list" (0..6, 14..25, 28..31).
       *    b) There is at least one printable character belonging to the
       *       "white list" (9 {TAB}, 10 {LF}, 13 {CR}, 32..255).
       * - BINARY otherwise.
       * - The following partially-portable control characters form a
       *   "gray list" that is ignored in this detection algorithm:
       *   (7 {BEL}, 8 {BS}, 11 {VT}, 12 {FF}, 26 {SUB}, 27 {ESC}).
       * IN assertion: the fields Freq of dyn_ltree are set.
       */


      function detect_data_type(s) {
        /* black_mask is the bit mask of black-listed bytes
         * set bits 0..6, 14..25, and 28..31
         * 0xf3ffc07f = binary 11110011111111111100000001111111
         */
        var black_mask = 0xf3ffc07f;
        var n;
        /* Check for non-textual ("black-listed") bytes. */

        for (n = 0; n <= 31; n++, black_mask >>>= 1) {
          if (black_mask & 1 && s.dyn_ltree[n * 2]
          /*.Freq*/
          !== 0) {
            return Z_BINARY;
          }
        }
        /* Check for textual ("white-listed") bytes. */


        if (s.dyn_ltree[9 * 2]
        /*.Freq*/
        !== 0 || s.dyn_ltree[10 * 2]
        /*.Freq*/
        !== 0 || s.dyn_ltree[13 * 2]
        /*.Freq*/
        !== 0) {
          return Z_TEXT;
        }

        for (n = 32; n < LITERALS; n++) {
          if (s.dyn_ltree[n * 2]
          /*.Freq*/
          !== 0) {
            return Z_TEXT;
          }
        }
        /* There are no "black-listed" or "white-listed" bytes:
         * this stream either is empty or has tolerated ("gray-listed") bytes only.
         */


        return Z_BINARY;
      }

      var static_init_done = false;
      /* ===========================================================================
       * Initialize the tree data structures for a new zlib stream.
       */

      function _tr_init(s) {
        if (!static_init_done) {
          tr_static_init();
          static_init_done = true;
        }

        s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
        s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
        s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
        s.bi_buf = 0;
        s.bi_valid = 0;
        /* Initialize the first block of the first file: */

        init_block(s);
      }
      /* ===========================================================================
       * Send a stored block
       */


      function _tr_stored_block(s, buf, stored_len, last) //DeflateState *s;
      //charf *buf;       /* input block */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
        /* send block type */

        copy_block(s, buf, stored_len, true);
        /* with header */
      }
      /* ===========================================================================
       * Send one empty static block to give enough lookahead for inflate.
       * This takes 10 bits, of which 7 may remain in the bit buffer.
       */


      function _tr_align(s) {
        send_bits(s, STATIC_TREES << 1, 3);
        send_code(s, END_BLOCK, static_ltree);
        bi_flush(s);
      }
      /* ===========================================================================
       * Determine the best encoding for the current block: dynamic trees, static
       * trees or store, and output the encoded block to the zip file.
       */


      function _tr_flush_block(s, buf, stored_len, last) //DeflateState *s;
      //charf *buf;       /* input block, or NULL if too old */
      //ulg stored_len;   /* length of input block */
      //int last;         /* one if this is the last block for a file */
      {
        var opt_lenb, static_lenb;
        /* opt_len and static_len in bytes */

        var max_blindex = 0;
        /* index of last bit length code of non zero freq */

        /* Build the Huffman trees unless a stored block is forced */

        if (s.level > 0) {
          /* Check if the file is binary or text */
          if (s.strm.data_type === Z_UNKNOWN) {
            s.strm.data_type = detect_data_type(s);
          }
          /* Construct the literal and distance trees */


          build_tree(s, s.l_desc); // Tracev((stderr, "\nlit data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          build_tree(s, s.d_desc); // Tracev((stderr, "\ndist data: dyn %ld, stat %ld", s->opt_len,
          //        s->static_len));

          /* At this point, opt_len and static_len are the total bit lengths of
           * the compressed block data, excluding the tree representations.
           */

          /* Build the bit length tree for the above two trees, and get the index
           * in bl_order of the last bit length code to send.
           */

          max_blindex = build_bl_tree(s);
          /* Determine the best encoding. Compute the block lengths in bytes. */

          opt_lenb = s.opt_len + 3 + 7 >>> 3;
          static_lenb = s.static_len + 3 + 7 >>> 3; // Tracev((stderr, "\nopt %lu(%lu) stat %lu(%lu) stored %lu lit %u ",
          //        opt_lenb, s->opt_len, static_lenb, s->static_len, stored_len,
          //        s->last_lit));

          if (static_lenb <= opt_lenb) {
            opt_lenb = static_lenb;
          }
        } else {
          // Assert(buf != (char*)0, "lost buf");
          opt_lenb = static_lenb = stored_len + 5;
          /* force a stored block */
        }

        if (stored_len + 4 <= opt_lenb && buf !== -1) {
          /* 4: two words for the lengths */

          /* The test buf != NULL is only necessary if LIT_BUFSIZE > WSIZE.
           * Otherwise we can't have processed more than WSIZE input bytes since
           * the last block flush, because compression would have been
           * successful. If LIT_BUFSIZE <= WSIZE, it is never too late to
           * transform a block into a stored block.
           */
          _tr_stored_block(s, buf, stored_len, last);
        } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
          send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
          compress_block(s, static_ltree, static_dtree);
        } else {
          send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
          send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
          compress_block(s, s.dyn_ltree, s.dyn_dtree);
        } // Assert (s->compressed_len == s->bits_sent, "bad compressed size");

        /* The above check is made mod 2^32, for files larger than 512 MB
         * and uLong implemented on 32 bits.
         */


        init_block(s);

        if (last) {
          bi_windup(s);
        } // Tracev((stderr,"\ncomprlen %lu(%lu) ", s->compressed_len>>3,
        //       s->compressed_len-7*last));

      }
      /* ===========================================================================
       * Save the match info and tally the frequency counts. Return true if
       * the current block must be flushed.
       */


      function _tr_tally(s, dist, lc) //    deflate_state *s;
      //    unsigned dist;  /* distance of matched string */
      //    unsigned lc;    /* match length-MIN_MATCH or unmatched char (if dist==0) */
      {
        //var out_length, in_length, dcode;
        s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 0xff;
        s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 0xff;
        s.pending_buf[s.l_buf + s.last_lit] = lc & 0xff;
        s.last_lit++;

        if (dist === 0) {
          /* lc is the unmatched char */
          s.dyn_ltree[lc * 2] /*.Freq*/++;
        } else {
          s.matches++;
          /* Here, lc is the match length - MIN_MATCH */

          dist--;
          /* dist = match distance - 1 */
          //Assert((ush)dist < (ush)MAX_DIST(s) &&
          //       (ush)lc <= (ush)(MAX_MATCH-MIN_MATCH) &&
          //       (ush)d_code(dist) < (ush)D_CODES,  "_tr_tally: bad match");

          s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2] /*.Freq*/++;
          s.dyn_dtree[d_code(dist) * 2] /*.Freq*/++;
        } // (!) This block is disabled in zlib defaults,
        // don't enable it for binary compatibility
        //#ifdef TRUNCATE_BLOCK
        //  /* Try to guess if it is profitable to stop the current block here */
        //  if ((s.last_lit & 0x1fff) === 0 && s.level > 2) {
        //    /* Compute an upper bound for the compressed length */
        //    out_length = s.last_lit*8;
        //    in_length = s.strstart - s.block_start;
        //
        //    for (dcode = 0; dcode < D_CODES; dcode++) {
        //      out_length += s.dyn_dtree[dcode*2]/*.Freq*/ * (5 + extra_dbits[dcode]);
        //    }
        //    out_length >>>= 3;
        //    //Tracev((stderr,"\nlast_lit %u, in %ld, out ~%ld(%ld%%) ",
        //    //       s->last_lit, in_length, out_length,
        //    //       100L - out_length*100L/in_length));
        //    if (s.matches < (s.last_lit>>1)/*int /2*/ && out_length < (in_length>>1)/*int /2*/) {
        //      return true;
        //    }
        //  }
        // #endif


        return s.last_lit === s.lit_bufsize - 1;
        /* We avoid equality with lit_bufsize because of wraparound at 64K
         * on 16 bit machines and because stored blocks are restricted to
         * 64K-1 bytes.
         */
      }

      exports._tr_init = _tr_init;
      exports._tr_stored_block = _tr_stored_block;
      exports._tr_flush_block = _tr_flush_block;
      exports._tr_tally = _tr_tally;
      exports._tr_align = _tr_align;
    }, {
      "../utils/common": 3
    }],
    15: [function (require, module, exports) {
      'use strict'; // (C) 1995-2013 Jean-loup Gailly and Mark Adler
      // (C) 2014-2017 Vitaly Puzrin and Andrey Tupitsin
      //
      // This software is provided 'as-is', without any express or implied
      // warranty. In no event will the authors be held liable for any damages
      // arising from the use of this software.
      //
      // Permission is granted to anyone to use this software for any purpose,
      // including commercial applications, and to alter it and redistribute it
      // freely, subject to the following restrictions:
      //
      // 1. The origin of this software must not be misrepresented; you must not
      //   claim that you wrote the original software. If you use this software
      //   in a product, an acknowledgment in the product documentation would be
      //   appreciated but is not required.
      // 2. Altered source versions must be plainly marked as such, and must not be
      //   misrepresented as being the original software.
      // 3. This notice may not be removed or altered from any source distribution.

      function ZStream() {
        /* next input byte */
        this.input = null; // JS specific, because we have no pointers

        this.next_in = 0;
        /* number of bytes available at input */

        this.avail_in = 0;
        /* total number of input bytes read so far */

        this.total_in = 0;
        /* next output byte should be put there */

        this.output = null; // JS specific, because we have no pointers

        this.next_out = 0;
        /* remaining free space at output */

        this.avail_out = 0;
        /* total number of bytes output so far */

        this.total_out = 0;
        /* last error message, NULL if no error */

        this.msg = ''
        /*Z_NULL*/
        ;
        /* not visible by applications */

        this.state = null;
        /* best guess about the data type: binary or text */

        this.data_type = 2
        /*Z_UNKNOWN*/
        ;
        /* adler32 value of the uncompressed data */

        this.adler = 0;
      }

      module.exports = ZStream;
    }, {}],
    "/": [function (require, module, exports) {
      // Top level file is just a mixin of submodules & constants
      'use strict';

      var assign = require('./lib/utils/common').assign;

      var deflate = require('./lib/deflate');

      var inflate = require('./lib/inflate');

      var constants = require('./lib/zlib/constants');

      var pako = {};
      assign(pako, deflate, inflate, constants);
      module.exports = pako;
    }, {
      "./lib/deflate": 1,
      "./lib/inflate": 2,
      "./lib/utils/common": 3,
      "./lib/zlib/constants": 6
    }]
  }, {}, [])("/");
});
});
define('static/js/qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

function qrPolynomial(r, t) {
  if ("undefined" == typeof r.length) throw new Error(r.length + "/" + t);

  var e = function () {
    for (var e = 0; e < r.length && 0 == r[e];) {
      e += 1;
    }

    for (var n = new Array(r.length - e + t), o = 0; o < r.length - e; o += 1) {
      n[o] = r[o + e];
    }

    return n;
  }(),
      n = {};

  return n.getAt = function (r) {
    return e[r];
  }, n.getLength = function () {
    return e.length;
  }, n.multiply = function (r) {
    for (var t = new Array(n.getLength() + r.getLength() - 1), e = 0; e < n.getLength(); e += 1) {
      for (var o = 0; o < r.getLength(); o += 1) {
        t[e + o] ^= QRMath.gexp(QRMath.glog(n.getAt(e)) + QRMath.glog(r.getAt(o)));
      }
    }

    return qrPolynomial(t, 0);
  }, n.mod = function (r) {
    if (n.getLength() - r.getLength() < 0) return n;

    for (var t = QRMath.glog(n.getAt(0)) - QRMath.glog(r.getAt(0)), e = new Array(n.getLength()), o = 0; o < n.getLength(); o += 1) {
      e[o] = n.getAt(o);
    }

    for (var o = 0; o < r.getLength(); o += 1) {
      e[o] ^= QRMath.gexp(QRMath.glog(r.getAt(o)) + t);
    }

    return qrPolynomial(e, 0).mod(r);
  }, n;
}

var qrcode = function qrcode(r, t) {
  var e = 236,
      n = 17,
      o = r,
      a = QRErrorCorrectLevel[t],
      i = null,
      u = 0,
      f = null,
      c = new Array(),
      g = {},
      l = function l(r, t) {
    u = 4 * o + 17, i = function (r) {
      for (var t = new Array(r), e = 0; e < r; e += 1) {
        t[e] = new Array(r);

        for (var n = 0; n < r; n += 1) {
          t[e][n] = null;
        }
      }

      return t;
    }(u), h(0, 0), h(u - 7, 0), h(0, u - 7), d(), s(), y(r, t), o >= 7 && w(r), null == f && (f = p(o, a, c)), M(f, t);
  },
      h = function h(r, t) {
    for (var e = -1; e <= 7; e += 1) {
      if (!(r + e <= -1 || u <= r + e)) for (var n = -1; n <= 7; n += 1) {
        t + n <= -1 || u <= t + n || (0 <= e && e <= 6 && (0 == n || 6 == n) || 0 <= n && n <= 6 && (0 == e || 6 == e) || 2 <= e && e <= 4 && 2 <= n && n <= 4 ? i[r + e][t + n] = !0 : i[r + e][t + n] = !1);
      }
    }
  },
      v = function v() {
    for (var r = 0, t = 0, e = 0; e < 8; e += 1) {
      l(!0, e);
      var n = QRUtil.getLostPoint(g);
      (0 == e || r > n) && (r = n, t = e);
    }

    return t;
  },
      s = function s() {
    for (var r = 8; r < u - 8; r += 1) {
      null == i[r][6] && (i[r][6] = r % 2 == 0);
    }

    for (var t = 8; t < u - 8; t += 1) {
      null == i[6][t] && (i[6][t] = t % 2 == 0);
    }
  },
      d = function d() {
    for (var r = QRUtil.getPatternPosition(o), t = 0; t < r.length; t += 1) {
      for (var e = 0; e < r.length; e += 1) {
        var n = r[t],
            a = r[e];
        if (null == i[n][a]) for (var u = -2; u <= 2; u += 1) {
          for (var f = -2; f <= 2; f += 1) {
            u == -2 || 2 == u || f == -2 || 2 == f || 0 == u && 0 == f ? i[n + u][a + f] = !0 : i[n + u][a + f] = !1;
          }
        }
      }
    }
  },
      w = function w(r) {
    for (var t = QRUtil.getBCHTypeNumber(o), e = 0; e < 18; e += 1) {
      var n = !r && 1 == (t >> e & 1);
      i[Math.floor(e / 3)][e % 3 + u - 8 - 3] = n;
    }

    for (var e = 0; e < 18; e += 1) {
      var n = !r && 1 == (t >> e & 1);
      i[e % 3 + u - 8 - 3][Math.floor(e / 3)] = n;
    }
  },
      y = function y(r, t) {
    for (var e = a << 3 | t, n = QRUtil.getBCHTypeInfo(e), o = 0; o < 15; o += 1) {
      var f = !r && 1 == (n >> o & 1);
      o < 6 ? i[o][8] = f : o < 8 ? i[o + 1][8] = f : i[u - 15 + o][8] = f;
    }

    for (var o = 0; o < 15; o += 1) {
      var f = !r && 1 == (n >> o & 1);
      o < 8 ? i[8][u - o - 1] = f : o < 9 ? i[8][15 - o - 1 + 1] = f : i[8][15 - o - 1] = f;
    }

    i[u - 8][8] = !r;
  },
      M = function M(r, t) {
    for (var e = -1, n = u - 1, o = 7, a = 0, f = QRUtil.getMaskFunction(t), c = u - 1; c > 0; c -= 2) {
      for (6 == c && (c -= 1);;) {
        for (var g = 0; g < 2; g += 1) {
          if (null == i[n][c - g]) {
            var l = !1;
            a < r.length && (l = 1 == (r[a] >>> o & 1));
            var h = f(n, c - g);
            h && (l = !l), i[n][c - g] = l, o -= 1, o == -1 && (a += 1, o = 7);
          }
        }

        if (n += e, n < 0 || u <= n) {
          n -= e, e = -e;
          break;
        }
      }
    }
  },
      B = function B(r, t) {
    for (var e = 0, n = 0, o = 0, a = new Array(t.length), i = new Array(t.length), u = 0; u < t.length; u += 1) {
      var f = t[u].dataCount,
          c = t[u].totalCount - f;
      n = Math.max(n, f), o = Math.max(o, c), a[u] = new Array(f);

      for (var g = 0; g < a[u].length; g += 1) {
        a[u][g] = 255 & r.getBuffer()[g + e];
      }

      e += f;
      var l = QRUtil.getErrorCorrectPolynomial(c),
          h = qrPolynomial(a[u], l.getLength() - 1),
          v = h.mod(l);
      i[u] = new Array(l.getLength() - 1);

      for (var g = 0; g < i[u].length; g += 1) {
        var s = g + v.getLength() - i[u].length;
        i[u][g] = s >= 0 ? v.getAt(s) : 0;
      }
    }

    for (var d = 0, g = 0; g < t.length; g += 1) {
      d += t[g].totalCount;
    }

    for (var w = new Array(d), y = 0, g = 0; g < n; g += 1) {
      for (var u = 0; u < t.length; u += 1) {
        g < a[u].length && (w[y] = a[u][g], y += 1);
      }
    }

    for (var g = 0; g < o; g += 1) {
      for (var u = 0; u < t.length; u += 1) {
        g < i[u].length && (w[y] = i[u][g], y += 1);
      }
    }

    return w;
  },
      p = function p(r, t, o) {
    for (var a = QRRSBlock.getRSBlocks(r, t), i = qrBitBuffer(), u = 0; u < o.length; u += 1) {
      var f = o[u];
      i.put(f.getMode(), 4), i.put(f.getLength(), QRUtil.getLengthInBits(f.getMode(), r)), f.write(i);
    }

    for (var c = 0, u = 0; u < a.length; u += 1) {
      c += a[u].dataCount;
    }

    if (i.getLengthInBits() > 8 * c) throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * c + ")");

    for (i.getLengthInBits() + 4 <= 8 * c && i.put(0, 4); i.getLengthInBits() % 8 != 0;) {
      i.putBit(!1);
    }

    for (;;) {
      if (i.getLengthInBits() >= 8 * c) break;
      if (i.put(e, 8), i.getLengthInBits() >= 8 * c) break;
      i.put(n, 8);
    }

    return B(i, a);
  };

  return g.addData = function (r) {
    var t = qr8BitByte(r);
    c.push(t), f = null;
  }, g.isDark = function (r, t) {
    if (r < 0 || u <= r || t < 0 || u <= t) throw new Error(r + "," + t);
    return i[r][t];
  }, g.getModuleCount = function () {
    return u;
  }, g.make = function () {
    l(!1, v());
  }, g.createTableTag = function (r, t) {
    r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
    var e = "";
    e += '<table style="', e += " border-width: 0upx; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0upx; margin: " + t + "upx;", e += '">', e += "<tbody>";

    for (var n = 0; n < g.getModuleCount(); n += 1) {
      e += "<tr>";

      for (var o = 0; o < g.getModuleCount(); o += 1) {
        e += '<td style="', e += " border-width: 0upx; border-style: none;", e += " border-collapse: collapse;", e += " padding: 0upx; margin: 0upx;", e += " width: " + r + "upx;", e += " height: " + r + "upx;", e += " background-color: ", e += g.isDark(n, o) ? "#000000" : "#ffffff", e += ";", e += '"/>';
      }

      e += "</tr>";
    }

    return e += "</tbody>", e += "</table>";
  }, g.createImgTag = function (r, t, e) {
    r = r || 2, t = "undefined" == typeof t ? 4 * r : t;
    var n = t,
        o = g.getModuleCount() * r + t;
    return createImgTag(e, e, function (t, e) {
      if (n <= t && t < o && n <= e && e < o) {
        var a = Math.floor((t - n) / r),
            i = Math.floor((e - n) / r);
        return g.isDark(i, a) ? 0 : 1;
      }

      return 1;
    });
  }, g;
};

qrcode.stringToBytes = function (r) {
  for (var t = new Array(), e = 0; e < r.length; e += 1) {
    var n = r.charCodeAt(e);
    t.push(255 & n);
  }

  return t;
}, qrcode.createStringToBytes = function (r, t) {
  var e = function () {
    for (var e = base64DecodeInputStream(r), n = function n() {
      var r = e.read();
      if (r == -1) throw new Error();
      return r;
    }, o = 0, a = {};;) {
      var i = e.read();
      if (i == -1) break;
      var u = n(),
          f = n(),
          c = n(),
          g = String.fromCharCode(i << 8 | u),
          l = f << 8 | c;
      a[g] = l, o += 1;
    }

    if (o != t) throw new Error(o + " != " + t);
    return a;
  }(),
      n = "?".charCodeAt(0);

  return function (r) {
    for (var t = new Array(), o = 0; o < r.length; o += 1) {
      var a = r.charCodeAt(o);
      if (a < 128) t.push(a);else {
        var i = e[r.charAt(o)];
        "number" == typeof i ? (255 & i) == i ? t.push(i) : (t.push(i >>> 8), t.push(255 & i)) : t.push(n);
      }
    }

    return t;
  };
};

var QRMode = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
},
    QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
},
    QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
},
    QRUtil = function () {
  var r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
      t = 1335,
      e = 7973,
      n = 21522,
      o = {},
      a = function a(r) {
    for (var t = 0; 0 != r;) {
      t += 1, r >>>= 1;
    }

    return t;
  };

  return o.getBCHTypeInfo = function (r) {
    for (var e = r << 10; a(e) - a(t) >= 0;) {
      e ^= t << a(e) - a(t);
    }

    return (r << 10 | e) ^ n;
  }, o.getBCHTypeNumber = function (r) {
    for (var t = r << 12; a(t) - a(e) >= 0;) {
      t ^= e << a(t) - a(e);
    }

    return r << 12 | t;
  }, o.getPatternPosition = function (t) {
    return r[t - 1];
  }, o.getMaskFunction = function (r) {
    switch (r) {
      case QRMaskPattern.PATTERN000:
        return function (r, t) {
          return (r + t) % 2 == 0;
        };

      case QRMaskPattern.PATTERN001:
        return function (r, t) {
          return r % 2 == 0;
        };

      case QRMaskPattern.PATTERN010:
        return function (r, t) {
          return t % 3 == 0;
        };

      case QRMaskPattern.PATTERN011:
        return function (r, t) {
          return (r + t) % 3 == 0;
        };

      case QRMaskPattern.PATTERN100:
        return function (r, t) {
          return (Math.floor(r / 2) + Math.floor(t / 3)) % 2 == 0;
        };

      case QRMaskPattern.PATTERN101:
        return function (r, t) {
          return r * t % 2 + r * t % 3 == 0;
        };

      case QRMaskPattern.PATTERN110:
        return function (r, t) {
          return (r * t % 2 + r * t % 3) % 2 == 0;
        };

      case QRMaskPattern.PATTERN111:
        return function (r, t) {
          return (r * t % 3 + (r + t) % 2) % 2 == 0;
        };

      default:
        throw new Error("bad maskPattern:" + r);
    }
  }, o.getErrorCorrectPolynomial = function (r) {
    for (var t = qrPolynomial([1], 0), e = 0; e < r; e += 1) {
      t = t.multiply(qrPolynomial([1, QRMath.gexp(e)], 0));
    }

    return t;
  }, o.getLengthInBits = function (r, t) {
    if (1 <= t && t < 10) switch (r) {
      case QRMode.MODE_NUMBER:
        return 10;

      case QRMode.MODE_ALPHA_NUM:
        return 9;

      case QRMode.MODE_8BIT_BYTE:
        return 8;

      case QRMode.MODE_KANJI:
        return 8;

      default:
        throw new Error("mode:" + r);
    } else if (t < 27) switch (r) {
      case QRMode.MODE_NUMBER:
        return 12;

      case QRMode.MODE_ALPHA_NUM:
        return 11;

      case QRMode.MODE_8BIT_BYTE:
        return 16;

      case QRMode.MODE_KANJI:
        return 10;

      default:
        throw new Error("mode:" + r);
    } else {
      if (!(t < 41)) throw new Error("type:" + t);

      switch (r) {
        case QRMode.MODE_NUMBER:
          return 14;

        case QRMode.MODE_ALPHA_NUM:
          return 13;

        case QRMode.MODE_8BIT_BYTE:
          return 16;

        case QRMode.MODE_KANJI:
          return 12;

        default:
          throw new Error("mode:" + r);
      }
    }
  }, o.getLostPoint = function (r) {
    for (var t = r.getModuleCount(), e = 0, n = 0; n < t; n += 1) {
      for (var o = 0; o < t; o += 1) {
        for (var a = 0, i = r.isDark(n, o), u = -1; u <= 1; u += 1) {
          if (!(n + u < 0 || t <= n + u)) for (var f = -1; f <= 1; f += 1) {
            o + f < 0 || t <= o + f || 0 == u && 0 == f || i == r.isDark(n + u, o + f) && (a += 1);
          }
        }

        a > 5 && (e += 3 + a - 5);
      }
    }

    for (var n = 0; n < t - 1; n += 1) {
      for (var o = 0; o < t - 1; o += 1) {
        var c = 0;
        r.isDark(n, o) && (c += 1), r.isDark(n + 1, o) && (c += 1), r.isDark(n, o + 1) && (c += 1), r.isDark(n + 1, o + 1) && (c += 1), 0 != c && 4 != c || (e += 3);
      }
    }

    for (var n = 0; n < t; n += 1) {
      for (var o = 0; o < t - 6; o += 1) {
        r.isDark(n, o) && !r.isDark(n, o + 1) && r.isDark(n, o + 2) && r.isDark(n, o + 3) && r.isDark(n, o + 4) && !r.isDark(n, o + 5) && r.isDark(n, o + 6) && (e += 40);
      }
    }

    for (var o = 0; o < t; o += 1) {
      for (var n = 0; n < t - 6; n += 1) {
        r.isDark(n, o) && !r.isDark(n + 1, o) && r.isDark(n + 2, o) && r.isDark(n + 3, o) && r.isDark(n + 4, o) && !r.isDark(n + 5, o) && r.isDark(n + 6, o) && (e += 40);
      }
    }

    for (var g = 0, o = 0; o < t; o += 1) {
      for (var n = 0; n < t; n += 1) {
        r.isDark(n, o) && (g += 1);
      }
    }

    var l = Math.abs(100 * g / t / t - 50) / 5;
    return e += 10 * l;
  }, o;
}(),
    QRMath = function () {
  for (var r = new Array(256), t = new Array(256), e = 0; e < 8; e += 1) {
    r[e] = 1 << e;
  }

  for (var e = 8; e < 256; e += 1) {
    r[e] = r[e - 4] ^ r[e - 5] ^ r[e - 6] ^ r[e - 8];
  }

  for (var e = 0; e < 255; e += 1) {
    t[r[e]] = e;
  }

  var n = {};
  return n.glog = function (r) {
    if (r < 1) throw new Error("glog(" + r + ")");
    return t[r];
  }, n.gexp = function (t) {
    for (; t < 0;) {
      t += 255;
    }

    for (; t >= 256;) {
      t -= 255;
    }

    return r[t];
  }, n;
}(),
    QRRSBlock = function () {
  var r = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
      t = function t(r, _t) {
    var e = {};
    return e.totalCount = r, e.dataCount = _t, e;
  },
      e = {},
      n = function n(t, e) {
    switch (e) {
      case QRErrorCorrectLevel.L:
        return r[4 * (t - 1) + 0];

      case QRErrorCorrectLevel.M:
        return r[4 * (t - 1) + 1];

      case QRErrorCorrectLevel.Q:
        return r[4 * (t - 1) + 2];

      case QRErrorCorrectLevel.H:
        return r[4 * (t - 1) + 3];

      default:
        return;
    }
  };

  return e.getRSBlocks = function (r, e) {
    var o = n(r, e);
    if ("undefined" == typeof o) throw new Error("bad rs block [url=home.php?mod=space&uid=5302]@[/url] typeNumber:" + r + "/errorCorrectLevel:" + e);

    for (var a = o.length / 3, i = new Array(), u = 0; u < a; u += 1) {
      for (var f = o[3 * u + 0], c = o[3 * u + 1], g = o[3 * u + 2], l = 0; l < f; l += 1) {
        i.push(t(c, g));
      }
    }

    return i;
  }, e;
}(),
    qrBitBuffer = function qrBitBuffer() {
  var r = new Array(),
      t = 0,
      e = {};
  return e.getBuffer = function () {
    return r;
  }, e.getAt = function (t) {
    var e = Math.floor(t / 8);
    return 1 == (r[e] >>> 7 - t % 8 & 1);
  }, e.put = function (r, t) {
    for (var n = 0; n < t; n += 1) {
      e.putBit(1 == (r >>> t - n - 1 & 1));
    }
  }, e.getLengthInBits = function () {
    return t;
  }, e.putBit = function (e) {
    var n = Math.floor(t / 8);
    r.length <= n && r.push(0), e && (r[n] |= 128 >>> t % 8), t += 1;
  }, e;
},
    qr8BitByte = function qr8BitByte(r) {
  for (var t = QRMode.MODE_8BIT_BYTE, e = r, n = [], o = {}, a = 0, i = e.length; a < i; a++) {
    var u = [],
        f = e.charCodeAt(a);
    f > 65536 ? (u[0] = 240 | (1835008 & f) >>> 18, u[1] = 128 | (258048 & f) >>> 12, u[2] = 128 | (4032 & f) >>> 6, u[3] = 128 | 63 & f) : f > 2048 ? (u[0] = 224 | (61440 & f) >>> 12, u[1] = 128 | (4032 & f) >>> 6, u[2] = 128 | 63 & f) : f > 128 ? (u[0] = 192 | (1984 & f) >>> 6, u[1] = 128 | 63 & f) : u[0] = f, n.push(u);
  }

  n = Array.prototype.concat.apply([], n), n.length != e.length && (n.unshift(191), n.unshift(187), n.unshift(239));
  var c = n;
  return o.getMode = function () {
    return t;
  }, o.getLength = function (r) {
    return c.length;
  }, o.write = function (r) {
    for (var t = 0; t < c.length; t += 1) {
      r.put(c[t], 8);
    }
  }, o;
},
    byteArrayOutputStream = function byteArrayOutputStream() {
  var r = new Array(),
      t = {};
  return t.writeByte = function (t) {
    r.push(255 & t);
  }, t.writeShort = function (r) {
    t.writeByte(r), t.writeByte(r >>> 8);
  }, t.writeBytes = function (r, e, n) {
    e = e || 0, n = n || r.length;

    for (var o = 0; o < n; o += 1) {
      t.writeByte(r[o + e]);
    }
  }, t.writeString = function (r) {
    for (var e = 0; e < r.length; e += 1) {
      t.writeByte(r.charCodeAt(e));
    }
  }, t.toByteArray = function () {
    return r;
  }, t.toString = function () {
    var t = "";
    t += "[";

    for (var e = 0; e < r.length; e += 1) {
      e > 0 && (t += ","), t += r[e];
    }

    return t += "]";
  }, t;
},
    base64EncodeOutputStream = function base64EncodeOutputStream() {
  var r = 0,
      t = 0,
      e = 0,
      n = "",
      o = {},
      a = function a(r) {
    n += String.fromCharCode(i(63 & r));
  },
      i = function i(r) {
    if (r < 0) ;else {
      if (r < 26) return 65 + r;
      if (r < 52) return 97 + (r - 26);
      if (r < 62) return 48 + (r - 52);
      if (62 == r) return 43;
      if (63 == r) return 47;
    }
    throw new Error("n:" + r);
  };

  return o.writeByte = function (n) {
    for (r = r << 8 | 255 & n, t += 8, e += 1; t >= 6;) {
      a(r >>> t - 6), t -= 6;
    }
  }, o.flush = function () {
    if (t > 0 && (a(r << 6 - t), r = 0, t = 0), e % 3 != 0) for (var o = 3 - e % 3, i = 0; i < o; i += 1) {
      n += "=";
    }
  }, o.toString = function () {
    return n;
  }, o;
},
    base64DecodeInputStream = function base64DecodeInputStream(r) {
  var t = r,
      e = 0,
      n = 0,
      o = 0,
      a = {};

  a.read = function () {
    for (; o < 8;) {
      if (e >= t.length) {
        if (0 == o) return -1;
        throw new Error("unexpected end of file./" + o);
      }

      var r = t.charAt(e);
      if (e += 1, "=" == r) return o = 0, -1;
      r.match(/^\s$/) || (n = n << 6 | i(r.charCodeAt(0)), o += 6);
    }

    var a = n >>> o - 8 & 255;
    return o -= 8, a;
  };

  var i = function i(r) {
    if (65 <= r && r <= 90) return r - 65;
    if (97 <= r && r <= 122) return r - 97 + 26;
    if (48 <= r && r <= 57) return r - 48 + 52;
    if (43 == r) return 62;
    if (47 == r) return 63;
    throw new Error("c:" + r);
  };

  return a;
},
    gifImage = function gifImage(r, t) {
  var e = r,
      n = t,
      o = new Array(r * t),
      a = {};
  a.setPixel = function (r, t, n) {
    o[t * e + r] = n;
  }, a.write = function (r) {
    r.writeString("GIF87a"), r.writeShort(e), r.writeShort(n), r.writeByte(128), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(0), r.writeByte(255), r.writeByte(255), r.writeByte(255), r.writeString(","), r.writeShort(0), r.writeShort(0), r.writeShort(e), r.writeShort(n), r.writeByte(0);
    var t = 2,
        o = u(t);
    r.writeByte(t);

    for (var a = 0; o.length - a > 255;) {
      r.writeByte(255), r.writeBytes(o, a, 255), a += 255;
    }

    r.writeByte(o.length - a), r.writeBytes(o, a, o.length - a), r.writeByte(0), r.writeString(";");
  };

  var i = function i(r) {
    var t = r,
        e = 0,
        n = 0,
        o = {};
    return o.write = function (r, o) {
      if (r >>> o != 0) throw new Error("length over");

      for (; e + o >= 8;) {
        t.writeByte(255 & (r << e | n)), o -= 8 - e, r >>>= 8 - e, n = 0, e = 0;
      }

      n |= r << e, e += o;
    }, o.flush = function () {
      e > 0 && t.writeByte(n);
    }, o;
  },
      u = function u(r) {
    for (var t = 1 << r, e = (1 << r) + 1, n = r + 1, a = f(), u = 0; u < t; u += 1) {
      a.add(String.fromCharCode(u));
    }

    a.add(String.fromCharCode(t)), a.add(String.fromCharCode(e));
    var c = byteArrayOutputStream(),
        g = i(c);
    g.write(t, n);
    var l = 0,
        h = String.fromCharCode(o[l]);

    for (l += 1; l < o.length;) {
      var v = String.fromCharCode(o[l]);
      l += 1, a.contains(h + v) ? h += v : (g.write(a.indexOf(h), n), a.size() < 4095 && (a.size() == 1 << n && (n += 1), a.add(h + v)), h = v);
    }

    return g.write(a.indexOf(h), n), g.write(e, n), g.flush(), c.toByteArray();
  },
      f = function f() {
    var r = {},
        t = 0,
        e = {};
    return e.add = function (n) {
      if (e.contains(n)) throw new Error("dup key:" + n);
      r[n] = t, t += 1;
    }, e.size = function () {
      return t;
    }, e.indexOf = function (t) {
      return r[t];
    }, e.contains = function (t) {
      return "undefined" != typeof r[t];
    }, e;
  };

  return a;
},
    createImgTag = function createImgTag(r, t, e, n) {
  for (var o = gifImage(r, t), a = 0; a < t; a += 1) {
    for (var i = 0; i < r; i += 1) {
      o.setPixel(i, a, e(i, a));
    }
  }

  var u = byteArrayOutputStream();
  o.write(u);

  for (var f = base64EncodeOutputStream(), c = u.toByteArray(), g = 0; g < c.length; g += 1) {
    f.writeByte(c[g]);
  }

  f.flush();
  var l = "";
  return l += "data:image/gif;base64,", l += f;
},
    createQrCodeImg = function createQrCodeImg(r, t) {
  t = t || {};
  var e,
      n = t.typeNumber || 4,
      o = t.errorCorrectLevel || "M",
      a = t.size || 500;

  try {
    e = qrcode(n, o || "M"), e.addData(r), e.make();
  } catch (t) {
    if (n >= 40) throw new Error("Text too long to encode");
    return gen(r, {
      size: a,
      errorCorrectLevel: o,
      typeNumber: n + 1
    });
  }

  var i = parseInt(a / e.getModuleCount()),
      u = parseInt((a - e.getModuleCount() * i) / 2);
  return e.createImgTag(i, u, a);
};

module.exports = {
  createQrCodeImg: createQrCodeImg
};
});
define('static/js/util.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  checkMobile: function checkMobile(phones) {
    var phone = /^[1][3,4,5,7,8,9][0-9]{9}$/;

    if (!phone.test(phones)) {
      return false;
    } else {
      return true;
    }
  }
};
exports.default = _default;
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'components/uni-dialog/uni-dialog';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-dialog/uni-dialog.js';

define('components/uni-dialog/uni-dialog.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-dialog/uni-dialog"], {
  "029f": function f(t, n, e) {
    "use strict";

    var i = function i() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "a", function () {
      return i;
    }), e.d(n, "b", function () {
      return o;
    });
  },
  "053a": function a(t, n, e) {
    "use strict";

    var i = e("07f8"),
        o = e.n(i);
    o.a;
  },
  "07f8": function f8(t, n, e) {},
  "0b9b": function b9b(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("e879"),
        o = e.n(i);

    for (var a in i) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(a);
    }

    n["default"] = o.a;
  },
  cdc9: function cdc9(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("029f"),
        o = e("0b9b");

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    e("053a");
    var u = e("2877"),
        c = Object(u["a"])(o["default"], i["a"], i["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  e879: function e879(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      name: "uni-dialog",
      props: {
        title: {
          type: String,
          default: ""
        },
        content: String,
        align: {
          type: String,
          default: "left"
        },
        cancelText: {
          type: String,
          default: "取消"
        },
        cancelColor: {
          type: String,
          default: "#333333"
        },
        confirmText: {
          type: String,
          default: "确定"
        },
        confirmColor: {
          type: String,
          default: "#007aff"
        },
        showCancel: {
          type: [Boolean, String],
          default: !0
        },
        show: {
          type: [Boolean, String],
          default: !1
        },
        autoClose: {
          type: [Boolean, String],
          default: !0
        }
      },
      data: function data() {
        return {
          isOpen: !1
        };
      },
      watch: {
        show: function show(t) {
          this.isOpen = t;
        }
      },
      created: function created() {
        this.isOpen = this.show;
      },
      methods: {
        bindTouchmove: function bindTouchmove() {},
        clickLeft: function clickLeft() {
          var t = this;
          setTimeout(function () {
            t.$emit("cancel");
          }, 200), this.closeModal();
        },
        clickRight: function clickRight() {
          var t = this;
          setTimeout(function () {
            t.$emit("confirm");
          }, 200), this.closeModal();
        },
        clickMask: function clickMask() {
          this.autoClose && this.closeModal();
        },
        closeModal: function closeModal() {
          this.showAnimation = !1, this.isOpen = !1, this.$emit("close");
        }
      }
    };
    n.default = i;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-dialog/uni-dialog-create-component', {
  'components/uni-dialog/uni-dialog-create-component': function componentsUniDialogUniDialogCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("cdc9"));
  }
}, [['components/uni-dialog/uni-dialog-create-component']]]);
});
require('components/uni-dialog/uni-dialog.js');
__wxRoute = 'components/uni-load-more/uni-load-more';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-load-more/uni-load-more.js';

define('components/uni-load-more/uni-load-more.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-load-more/uni-load-more"], {
  "116d": function d(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniLoadMore",
      props: {
        status: {
          type: String,
          default: "more"
        },
        showIcon: {
          type: Boolean,
          default: !0
        },
        color: {
          type: String,
          default: "#777777"
        },
        contentText: {
          type: Object,
          default: function _default() {
            return {
              contentdown: "上拉显示更多",
              contentrefresh: "正在加载...",
              contentnomore: "没有更多数据了"
            };
          }
        }
      },
      data: function data() {
        return {};
      }
    };
    n.default = o;
  },
  "6e87": function e87(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "825c": function c(t, n, e) {},
  "8a2f": function a2f(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6e87"),
        u = e("cab4");

    for (var r in u) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    e("cacc");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  cab4: function cab4(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("116d"),
        u = e.n(o);

    for (var r in o) {
      "default" !== r && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(r);
    }

    n["default"] = u.a;
  },
  cacc: function cacc(t, n, e) {
    "use strict";

    var o = e("825c"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-load-more/uni-load-more-create-component', {
  'components/uni-load-more/uni-load-more-create-component': function componentsUniLoadMoreUniLoadMoreCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8a2f"));
  }
}, [['components/uni-load-more/uni-load-more-create-component']]]);
});
require('components/uni-load-more/uni-load-more.js');

__wxRoute = 'pages/login/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/index.js';

define('pages/login/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/index"],{"257f":function(n,t,e){},"2c95":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{account:"",password:""}},methods:{onLoginBtn:function(){n.showLoading({title:"登录中..."}),""!=this.account?""!=this.password?this.$api.setLogin({mobile:this.account,password:this.password},function(t){if(n.hideLoading(),"ok"==t.data.type){var e=t.data.message;n.setStorageSync("user_token",e.token),0===e.ok_bind?n.navigateTo({url:"/pages/login/okCode"}):n.switchTab({url:"/pages/mine/index"})}}):n.showToast({title:"请输入密码",icon:"none"}):n.showToast({title:"请输入手机号",icon:"none"})},register:function(){n.navigateTo({url:"/pages/login/register"})},forgetPass:function(){n.navigateTo({url:"/pages/login/forgetPass"})}}};t.default=e}).call(this,e("6e42")["default"])},"7a0a":function(n,t,e){"use strict";e.r(t);var o=e("2c95"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},dbc9:function(n,t,e){"use strict";e.r(t);var o=e("dc96"),a=e("7a0a");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("dc8f");var s=e("2877"),r=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,"3876e442",null);t["default"]=r.exports},dc8f:function(n,t,e){"use strict";var o=e("257f"),a=e.n(o);a.a},dc96:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})}},[["0f8a","common/runtime","common/vendor"]]]);
});
require('pages/login/index.js');
__wxRoute = 'pages/login/forgetPass';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/forgetPass.js';

define('pages/login/forgetPass.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/forgetPass"],{"21c2":function(t,e,n){"use strict";var o=n("db78"),i=n.n(o);i.a},"2c8d":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"9b8f":function(t,e,n){"use strict";n.r(e);var o=n("2c8d"),i=n("e568");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("21c2");var a=n("2877"),r=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"65b4ccfd",null);e["default"]=r.exports},bb46:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mobile:"",verifyCode:"",newPassword:"",codeText:"获取验证码",countdown:60,disabledVerify:!1,disabledSubmit:!1,countDownInterval:null}},methods:{countDownFn:function(){var t=this;this.codeText="60S",this.disabledVerify=!0,this.countDownInterval=setInterval(function(){t.countdown--,t.countdown>0?t.codeText=t.countdown+"S":(clearInterval(interval),t.countdown=60,t.disabledVerify=!1,t.codeText="获取验证码")},1e3)},verifyMobileFn:function(){return""===this.mobile?(t.showToast({title:"请输入手机号",icon:"none"}),!1):this.$util.checkMobile(this.mobile)?void 0:(t.showToast({title:"手机号格式有误",icon:"none"}),!1)},getVerifyCode:function(){var e=this;this.verifyMobileFn&&60===this.countdown&&(this.countDownFn(),this.$api.getVerifyCode({mobile:this.mobile,type:"forget"},function(n){"ok"!==n.data.type&&(clearInterval(e.countDownInterval),e.disabledVerify=!1,e.codeText="获取验证码"),t.showToast({title:n.data.message,icon:"none"})}))},onConfirmReset:function(){var e=this;this.verifyMobileFn&&(""!=this.newPassword?this.newPassword.length<6||this.newPassword.length>16?t.showToast({title:"密码必须在6到16位之间",icon:"none"}):(this.disabledSubmit=!0,this.$api.forgetPass({mobile:this.mobile,password:this.newPassword,msg_code:this.verifyCode},function(n){"ok"===n.data.type?(t.showToast({title:n.data.message}),setTimeout(function(){t.redirectTo({url:"/pages/login/index"})},1500)):e.disabledSubmit=!1})):t.showToast({title:"请设置您的新密码",icon:"none"}))}}};e.default=n}).call(this,n("6e42")["default"])},db78:function(t,e,n){},e568:function(t,e,n){"use strict";n.r(e);var o=n("bb46"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a}},[["7aee","common/runtime","common/vendor"]]]);
});
require('pages/login/forgetPass.js');
__wxRoute = 'pages/login/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/register.js';

define('pages/login/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register"],{"1c16":function(t,e,n){"use strict";n.r(e);var o=n("cb90"),i=n("c82c");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("ef0f");var a=n("2877"),c=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"1a6cc1ae",null);e["default"]=c.exports},"9f28":function(t,e,n){},b384:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{mobile:"",verifyCode:"",newPassword:"",inviteCode:"",codeText:"获取验证码",countdown:60,disabledVerify:!1,disabledSubmit:!1,countDownInterval:null}},methods:{countDownFn:function(){var t=this;this.codeText="60S",this.disabledVerify=!0,this.countDownInterval=setInterval(function(){t.countdown--,t.countdown>0?t.codeText=t.countdown+"S":(clearInterval(t.countDownInterval),t.countdown=60,t.disabledVerify=!1,t.codeText="获取验证码")},1e3)},verifyMobileFn:function(){return""===this.mobile?(t.showToast({title:"请输入手机号",icon:"none"}),!1):this.$util.checkMobile(this.mobile)?void 0:(t.showToast({title:"手机号格式有误",icon:"none"}),!1)},getVerifyCode:function(){var e=this;this.verifyMobileFn&&60===this.countdown&&(this.countDownFn(),this.$api.getVerifyCode({mobile:this.mobile,type:"register"},function(n){"ok"!==n.data.type&&(clearInterval(e.countDownInterval),e.disabledVerify=!1,e.codeText="获取验证码"),t.showToast({title:n.data.message,icon:"none"})}))},onRegister:function(){var e=this;this.verifyMobileFn&&(""!=this.newPassword?this.newPassword.length<6||this.newPassword.length>16?t.showToast({title:"密码必须在6到16位之间",icon:"none"}):""!=this.inviteCode?(this.disabledSubmit=!0,this.$api.register({mobile:this.mobile,password:this.newPassword,msg_code:this.verifyCode,invitation_code:this.inviteCode},function(n){"ok"===n.data.type?(t.showToast({title:n.data.message}),setTimeout(function(){t.redirectTo({url:"/pages/login/index"})},1500)):(e.disabledSubmit=!1,t.showToast({title:n.data.message,icon:"none"}))})):t.showToast({title:"请输入邀请码",icon:"none"}):t.showToast({title:"请设置您的密码",icon:"none"}))}}};e.default=n}).call(this,n("6e42")["default"])},c82c:function(t,e,n){"use strict";n.r(e);var o=n("b384"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},cb90:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},ef0f:function(t,e,n){"use strict";var o=n("9f28"),i=n.n(o);i.a}},[["8dc8","common/runtime","common/vendor"]]]);
});
require('pages/login/register.js');
__wxRoute = 'pages/login/okCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/okCode.js';

define('pages/login/okCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/okCode"],{"1c7f":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{account:"",apiKey:"",secretKey:"",passphrase:""}},methods:{bindOkAccount:function(){""!=this.account?""!=this.apiKey?""!=this.secretKey?""!=this.passphrase?(t.showLoading(),this.$api.bindOkAccount({account:this.account,key:this.apiKey,secret:this.secretKey,passphrase:this.passphrase},function(e){t.hideLoading(),"ok"==e.data.type?t.switchTab({url:"/pages/mine/index"}):t.showToast({title:"输入有误，请重新确认"})})):t.showToast({title:"请输入passphrase"}):t.showToast({title:"请输入secretKey"}):t.showToast({title:"请输入apiKey"}):t.showToast({title:"请输入OK账号"})}}};e.default=a}).call(this,a("6e42")["default"])},5551:function(t,e,a){"use strict";a.r(e);var n=a("e49e"),s=a("864a");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("c514");var o=a("2877"),c=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,"5d679905",null);e["default"]=c.exports},"5a58":function(t,e,a){},"864a":function(t,e,a){"use strict";a.r(e);var n=a("1c7f"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},c514:function(t,e,a){"use strict";var n=a("5a58"),s=a.n(n);s.a},e49e:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})}},[["c59f","common/runtime","common/vendor"]]]);
});
require('pages/login/okCode.js');
__wxRoute = 'pages/update/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/update/index.js';

define('pages/update/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/update/index"],{"24a6":function(t,e,n){"use strict";n.r(e);var a=n("3147"),u=n("8a2d");for(var o in u)"default"!==o&&function(t){n.d(e,t,function(){return u[t]})}(o);var r=n("2877"),i=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=i.exports},3147:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},u=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return u})},"53d8":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{}},methods:{radioChange:function(t){t.detail.value.length?this.setUpdateStorage(!1):this.setUpdateStorage(!0)},setUpdateStorage:function(e){try{t.setStorageSync("is_update_prompt",e)}catch(n){}},onUpdateBtn:function(){t.getStorage({key:"is_update_prompt",success:function(t){console.log(n(t.data," at pages\\update\\index.vue:53"))}}),this.$api.getDownloadUrl({},function(t){if("ok"==t.data.type){var e=t.data.message;plus.runtime.openURL(e)}})}}};e.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"8a2d":function(t,e,n){"use strict";n.r(e);var a=n("53d8"),u=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=u.a}},[["bc7f","common/runtime","common/vendor"]]]);
});
require('pages/update/index.js');
__wxRoute = 'pages/mine/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/index.js';

define('pages/mine/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/index"],{"6f5d":function(e,n,t){},"7deb":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.round(e.msg.change_balance,2)),o=e.round(e.msg.change_balance*e.msg.cnyRate*e.msg.pcdUsd,2),a=e.round(e.msg.lock_change_balance,2),i=e.round(e.msg.lock_change_balance*e.msg.cnyRate*e.msg.pcdUsd,2);e.$mp.data=Object.assign({},{$root:{m0:t,m1:o,m2:a,m3:i}})},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},b3f6:function(e,n,t){"use strict";var o=t("6f5d"),a=t.n(o);a.a},b6a6:function(e,n,t){"use strict";t.r(n);var o=t("bf7f"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},bf7f:function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=i(t("f39f"));function i(e){return e&&e.__esModule?e:{default:e}}var s={data:function(){return{list:[],msg:""}},onShow:function(){this.getList()},onLoad:function(){this.getNum(),e.startPullDownRefresh()},onPullDownRefresh:function(){this.getNum(),setTimeout(function(){e.stopPullDownRefresh()},1e3)},methods:{getList:function(){var n=this;e.showLoading(),this.$api.getUserPoolList({},function(t){e.hideLoading(),"ok"==t.data.type&&(n.list=t.data.message)})},join:function(n){e.navigateTo({url:"/pages/mine/joinOrePool?id="+n})},getNum:function(){var n=this;e.showLoading(),this.$api.getWalletInfo({},function(t){e.hideLoading(),console.log(o(t," at pages\\mine\\index.vue:69")),"ok"==t.data.type&&(console.log(o(t.data.message," at pages\\mine\\index.vue:71")),n.msg=t.data.message)})},getPrice:function(){var e=new WebSocket("wss://real.okex.com:8443/ws/v3?brokerId=166");e.onopen=function(){var n={op:"subscribe",args:["index/ticker:PCD-USD"]};e.send(JSON.stringify(n))},e.onmessage=function(n){if(n.data instanceof Blob){console.log(o(n.data,"我是Blob对象"," at pages\\mine\\index.vue:129"));var t=new FileReader;console.log(o(t,"从Blob对象中读取数据"," at pages\\mine\\index.vue:133")),console.log(o(t.result,"数据"," at pages\\mine\\index.vue:134")),console.log(o(t.readyState,"333"," at pages\\mine\\index.vue:135")),t.onload=function(){result=JSON.parse(a.default.pako.inflate(t.result,{to:"string"})),result.ping&&e.send(JSON.stringify({pong:result.ping}))},t.readAsBinaryString(n.data)}},e.onclose=function(){}}}};n.default=s}).call(this,t("6e42")["default"],t("0de9")["default"])},e526:function(e,n,t){"use strict";t.r(n);var o=t("7deb"),a=t("b6a6");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("b3f6");var s=t("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["6b8a","common/runtime","common/vendor"]]]);
});
require('pages/mine/index.js');
__wxRoute = 'pages/mine/joinOrePool';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/joinOrePool.js';

define('pages/mine/joinOrePool.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/joinOrePool"],{3759:function(o,e,t){"use strict";t.r(e);var i=t("ac55"),n=t.n(i);for(var a in i)"default"!==a&&function(o){t.d(e,o,function(){return i[o]})}(a);e["default"]=n.a},ac55:function(o,e,t){"use strict";(function(o,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{showJoinDialog:!1,showExitDialog:!1,canExitOrePoolNumber:200,actualExitOrePoolNumber:"",minJoinOrePoolNumber:"0",actualJoinOrePoolNumber:"",userInfo:{},orePoolId:""}},onLoad:function(o){this.orePoolId=o.id,this.getOrePoolSum(),this.getOrePoolMinNumber()},onPullDownRefresh:function(){this.getOrePoolSum(),this.getOrePoolMinNumber(),setTimeout(function(){o.stopPullDownRefresh()},1e3)},methods:{joinOrePoolDialog:function(){this.getUserInfo()&&(this.showJoinDialog=!0)},cancelJoinDialog:function(){this.showJoinDialog=!1,this.actualJoinOrePoolNumber=""},exitOrePoolDialog:function(){this.showExitDialog=!0},cancelExitDialog:function(){this.showExitDialog=!1,this.actualExitOrePoolNumber=""},joinOrePoolConfirm:function(){var e=this;if(""==this.actualJoinOrePoolNumber||this.actualJoinOrePoolNumber<=0)return o.showToast({title:"请输入正确的加入数量",icon:"none"}),this.showJoinDialog=!0,!1;this.$api.joinOrePool({number:this.actualJoinOrePoolNumber,id:this.orePoolId},function(i){console.log(t(i.data.message," at pages\\mine\\joinOrePool.vue:143")),"ok"==i.data.type&&(o.showToast({title:"加入矿场成功",icon:"none"}),e.showJoinDialog=!1,e.actualJoinOrePoolNumber="",setTimeout(function(){o.startPullDownRefresh()},1500))})},exitOrePoolConfirm:function(){var e=this;if(""==this.actualExitOrePoolNumber||this.actualExitOrePoolNumber<=0)return o.showToast({title:"请输入正确的退出数量",icon:"none"}),this.showExitDialog=!0,!1;this.$api.exitOrePool({number:this.actualExitOrePoolNumber},function(t){"ok"==t.data.type&&(e.showToast({title:"退出成功"}),e.showExitDialog=!1,e.actualExitOrePoolNumber="",setTimeout(function(){o.startPullDownRefresh()},1500))})},getOrePoolMinNumber:function(){var o=this;this.$api.getOrePoolMinNumber({id:this.orePoolId},function(e){console.log(t(e.data,"147258"," at pages\\mine\\joinOrePool.vue:191")),o.minJoinOrePoolNumber=e.data.message.mini_join_num,o.canExitOrePoolNumber=e.data.message.back_num})},getOrePoolSum:function(){var e=this;o.showLoading(),this.$api.getOrePoolSum({id:this.orePoolId},function(i){o.hideLoading(),"ok"==i.data.type&&(console.log(t(i.data.message," at pages\\mine\\joinOrePool.vue:205")),e.userInfo=i.data.message)})},getUserInfo:function(){this.$api.getUserInfo({},function(e){if("ok"==e.data.type){var t=e.data.message;return""!=t.okaccount||(o.navigateTo({url:"/pages/user/okCode"}),!1)}})}}};e.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},c755:function(o,e,t){"use strict";t.r(e);var i=t("e90e"),n=t("3759");for(var a in n)"default"!==a&&function(o){t.d(e,o,function(){return n[o]})}(a);t("fd8a");var r=t("2877"),u=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,null,null);e["default"]=u.exports},ced6:function(o,e,t){},e90e:function(o,e,t){"use strict";var i=function(){var o=this,e=o.$createElement,t=(o._self._c,o.round(o.userInfo.total,2)),i=o.round(o.userInfo.totalField,4),n=o.round(o.userInfo.comPower,4),a=o.round(o.userInfo.yesField,4),r=o.round(o.userInfo.peoNum),u=o.round(o.minJoinOrePoolNumber,2),l=o.round(o.canExitOrePoolNumber,2);o.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:n,m3:a,m4:r,m5:u,m6:l}})},n=[];t.d(e,"a",function(){return i}),t.d(e,"b",function(){return n})},fd8a:function(o,e,t){"use strict";var i=t("ced6"),n=t.n(i);n.a}},[["77a4","common/runtime","common/vendor"]]]);
});
require('pages/mine/joinOrePool.js');
__wxRoute = 'pages/wallet/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/wallet/index.js';

define('pages/wallet/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wallet/index"],{"00aa":function(n,e,t){"use strict";var a=t("3723"),o=t.n(a);o.a},3723:function(n,e,t){},"8cfa":function(n,e,t){"use strict";t.r(e);var a=t("b00f"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a},"98e7":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=(n._self._c,n.round(n.userInfo.user_total_balance,2)),a=n.round(n.userInfo.lock_change_balance,2),o=n.round(n.userInfo.userpool_available_balance,2),u=n.round(n.userInfo.pool_num,2),r=n.round(n.userInfo.withdrawable_balance,2);n.$mp.data=Object.assign({},{$root:{m0:t,m1:a,m2:o,m3:u,m4:r}})},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},b00f:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{userInfo:{}}},onLoad:function(){this.getUserInfo()},methods:{getUserInfo:function(){var n=this;this.$api.getUserInfo({},function(e){"ok"==e.data.type&&(n.userInfo=e.data.message)})}}};e.default=a},c03c:function(n,e,t){"use strict";t.r(e);var a=t("98e7"),o=t("8cfa");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("00aa");var r=t("2877"),f=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports}},[["8063","common/runtime","common/vendor"]]]);
});
require('pages/wallet/index.js');
__wxRoute = 'pages/news/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/index.js';

define('pages/news/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/index"],{"0492":function(t,n,e){"use strict";var a=e("681a"),i=e.n(a);i.a},2053:function(t,n,e){"use strict";e.r(n);var a=e("fafa"),i=e("a504");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("0492");var s=e("2877"),o=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"024d4f73",null);n["default"]=o.exports},"681a":function(t,n,e){},a504:function(t,n,e){"use strict";e.r(n);var a=e("f10e"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},f10e:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{newsList:[]}},onLoad:function(){this.getNewsList()},onPullDownRefresh:function(){this.getNewsList()},methods:{goDetail:function(n){t.navigateTo({url:"/pages/news/newsDetail?id="+n})},getNewsList:function(){var n=this;this.$api.getAnnouncementList({page:this.page,c_id:9},function(e){"ok"==e.data.type&&e.data.message.data.length>0&&(n.newsList=e.data.message.data,t.stopPullDownRefresh())})}}};n.default=e}).call(this,e("6e42")["default"])},fafa:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})}},[["4f81","common/runtime","common/vendor"]]]);
});
require('pages/news/index.js');
__wxRoute = 'pages/news/newsDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/newsDetail.js';

define('pages/news/newsDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/newsDetail"],{2854:function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},c372:function(t,n,e){"use strict";e.r(n);var a=e("2854"),u=e("fcb5");for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);e("eaec");var o=e("2877"),c=Object(o["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},ea64:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{newsContent:{}}},onLoad:function(t){this.getNewsDetail(t.c_id,t.id)},methods:{getNewsDetail:function(t,n){var e=this;this.$api.getNewsDetail({id:n},function(t){"ok"==t.data.type&&(e.newsContent=t.data.message)})}}};n.default=a},eaec:function(t,n,e){"use strict";var a=e("f0b0"),u=e.n(a);u.a},f0b0:function(t,n,e){},fcb5:function(t,n,e){"use strict";e.r(n);var a=e("ea64"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=u.a}},[["4a79","common/runtime","common/vendor"]]]);
});
require('pages/news/newsDetail.js');
__wxRoute = 'pages/user/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/index.js';

define('pages/user/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/index"],{"0095":function(e,t,n){"use strict";n.r(t);var a=n("7c1a"),o=n("a00a");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("a581");var i=n("2877"),r=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,"43d013b2",null);t["default"]=r.exports},"7c1a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o})},"87ef":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{userInfo:{},appVersion:"",handleMenu:[{leftPic:n("3e14"),text:"收益明细",rightPic:n("d739")},{leftPic:n("3e14"),text:"OK账户解绑",rightPic:n("d739")},{leftPic:n("c799"),text:"帮助中心",rightPic:n("d739")},{leftPic:n("a963"),text:"版本",rightPic:n("d739")}]}},onReady:function(){this.getUserInfo(),this.appVersion=e.getStorageSync("app_version")},onPullDownRefresh:function(){this.getUserInfo()},methods:{jumpChangeUserInfo:function(){e.navigateTo({url:"/pages/user/userInfo"})},jumpSecurityPage:function(){e.navigateTo({url:"/pages/user/security"})},jumpInvitePage:function(){e.navigateTo({url:"/pages/user/invite"})},onJumphandle:function(t){switch(t){case 0:e.navigateTo({url:"/pages/user/income"});break;case 1:e.navigateTo({url:"/pages/user/okCode"});break;case 2:e.navigateTo({url:"/pages/user/help"});break}},getUserInfo:function(){var t=this;this.$api.getUserInfo({},function(n){"ok"==n.data.type&&(t.userInfo=n.data.message.baseInfo,e.setStorageSync("user_Info",n.data.message),e.stopPullDownRefresh())})},logout:function(){var t=this;e.showModal({content:"确定要退出吗?",confirmColor:"#007AFF",success:function(n){n.confirm&&t.$api.setLoginOut({},function(t){"ok"==t.data.type&&(e.removeStorageSync("user_token"),e.showToast({title:"退出成功"}),setTimeout(function(){e.reLaunch({url:"/pages/login/index"})},1e3))})}})}}};t.default=a}).call(this,n("6e42")["default"])},a00a:function(e,t,n){"use strict";n.r(t);var a=n("87ef"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},a581:function(e,t,n){"use strict";var a=n("c71a"),o=n.n(a);o.a},c71a:function(e,t,n){}},[["402c","common/runtime","common/vendor"]]]);
});
require('pages/user/index.js');
__wxRoute = 'pages/user/userInfo';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/userInfo.js';

define('pages/user/userInfo.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/userInfo"],{"0ffe":function(e,a,t){"use strict";t.r(a);var n=t("1d47"),s=t("2cd3");for(var o in s)"default"!==o&&function(e){t.d(a,e,function(){return s[e]})}(o);t("11d5");var i=t("2877"),r=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,"16c7c27c",null);a["default"]=r.exports},"11d5":function(e,a,t){"use strict";var n=t("1ea8"),s=t.n(n);s.a},"1d47":function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement;e._self._c;e._isMounted||(e.e0=function(a){e.showChangeNameDialog=!0})},s=[];t.d(a,"a",function(){return n}),t.d(a,"b",function(){return s})},"1ea8":function(e,a,t){},"2cd3":function(e,a,t){"use strict";t.r(a);var n=t("bb8e"),s=t.n(n);for(var o in n)"default"!==o&&function(e){t.d(a,e,function(){return n[e]})}(o);a["default"]=s.a},bb8e:function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=function(){return t.e("components/uni-dialog/uni-dialog").then(t.bind(null,"cdc9"))},i={data:function(){return{showChangeNameDialog:!1,newUserName:"",userAvatar:"",userNickname:""}},onReady:function(){this.getUserInfo()},methods:{uploadAvatar:function(){var a=this;e.chooseImage({count:1,success:function(t){var o=this;console.log(n(t," at pages\\user\\userInfo.vue:51")),e.uploadFile({url:a.$api.getApiUrl(),filePath:t.tempFilePaths[0],name:"file",formData:{img:t.tempFilePaths[0]},header:{"content-type":"multipart/form-data"},success:function(t){console.log(n(t," at pages\\user\\userInfo.vue:64")),console.log(n(JSON.parse(t.data)," at pages\\user\\userInfo.vue:65")),s;var i=JSON.parse(t.data).message;a.userAvatar=i,console.log(n(a.userAvatar,i,t.data.message," at pages\\user\\userInfo.vue:68")),o.$api.changeUserInfo({avatar:i},function(a){"ok"==a.data.type&&e.showToast({title:a.data.message})})}})}})},onChangeNameDialog:function(a){var t=this;if("confirm"===a){if(""===this.newUserName)return void e.showToast({title:"请输入昵称"});if(this.newUserName.length<2||this.newUserName.length>8)return void e.showToast({title:"请输入2~8位昵称"});this.$api.changeUserInfo({nickname:this.newUserName},function(a){"ok"==a.data.type&&(e.showToast({title:a.data.message}),t.getUserInfo())}),this.showChangeNameDialog=!1,this.newUserName=""}else this.showChangeNameDialog=!1,this.newUserName=""},getUserInfo:function(){var e=this;this.$api.getUserInfo({},function(a){if("ok"==a.data.type){var t=a.data.message;e.userAvatar=t.baseInfo.avatar,e.userNickname=t.baseInfo.nickname}})}},components:{uniDialog:o}};a.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])}},[["3db6","common/runtime","common/vendor"]]]);
});
require('pages/user/userInfo.js');
__wxRoute = 'pages/user/okCode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/okCode.js';

define('pages/user/okCode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/okCode"],{"20f0":function(n,t,e){"use strict";e.r(t);var o=e("d034"),u=e.n(o);for(var c in o)"default"!==c&&function(n){e.d(t,n,function(){return o[n]})}(c);t["default"]=u.a},"50e8":function(n,t,e){"use strict";e.r(t);var o=e("7eaa"),u=e("20f0");for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);e("63dc");var i=e("2877"),a=Object(i["a"])(u["default"],o["a"],o["b"],!1,null,"3fb7803c",null);t["default"]=a.exports},"63dc":function(n,t,e){"use strict";var o=e("e947"),u=e.n(o);u.a},"7eaa":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;n._isMounted||(n.e0=function(t){n.showDialog=!0})},u=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return u})},d034:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return e.e("components/uni-dialog/uni-dialog").then(e.bind(null,"cdc9"))},u={data:function(){return{userInfo:{},showDialog:!1}},onReady:function(){this.userInfo=n.getStorageSync("user_Info").okAccount},methods:{onDialogEvent:function(n){"cancel"===n?this.showDialog=!1:"confirm"===n&&this.removeOkAccount()},removeOkAccount:function(){this.$api.removeOkAccount({},function(t){"ok"===t.data.type&&n.reLaunch({url:"/pages/login/index"})})}},components:{uniDialog:o}};t.default=u}).call(this,e("6e42")["default"])},e947:function(n,t,e){}},[["4852","common/runtime","common/vendor"]]]);
});
require('pages/user/okCode.js');
__wxRoute = 'pages/user/wallet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/wallet.js';

define('pages/user/wallet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/wallet"],{"2f3f":function(n,e,t){"use strict";var a=t("8e29"),o=t.n(a);o.a},3936:function(n,e,t){"use strict";t.r(e);var a=t("d9e0"),o=t("ff7a");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("2f3f");var r=t("2877"),f=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports},"68d0":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{userInfo:{}}},onLoad:function(){this.getUserInfo()},methods:{getUserInfo:function(){var n=this;this.$api.getUserInfo({},function(e){"ok"==e.data.type&&(n.userInfo=e.data.message)})}}};e.default=a},"8e29":function(n,e,t){},d9e0:function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement,t=(n._self._c,n.round(n.userInfo.user_total_balance,2)),a=n.round(n.userInfo.lock_change_balance,2),o=n.round(n.userInfo.userpool_available_balance,2),u=n.round(n.userInfo.pool_num,2),r=n.round(n.userInfo.withdrawable_balance,2);n.$mp.data=Object.assign({},{$root:{m0:t,m1:a,m2:o,m3:u,m4:r}})},o=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return o})},ff7a:function(n,e,t){"use strict";t.r(e);var a=t("68d0"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a}},[["9a37","common/runtime","common/vendor"]]]);
});
require('pages/user/wallet.js');
__wxRoute = 'pages/user/contactUs';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/contactUs.js';

define('pages/user/contactUs.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/contactUs"],{"109f":function(t,n,a){"use strict";var e=a("84b7"),o=a.n(e);o.a},5205:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},o=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return o})},"5d34":function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{contactWay:""}},onLoad:function(){this.getContactWay()},methods:{getContactWay:function(){var t=this;this.$api.getContactWay({},function(n){"ok"==n.data.type&&(t.contactWay=n.data.message)})}}};n.default=e},"84b7":function(t,n,a){},8670:function(t,n,a){"use strict";a.r(n);var e=a("5205"),o=a("ea22");for(var u in o)"default"!==u&&function(t){a.d(n,t,function(){return o[t]})}(u);a("109f");var c=a("2877"),r=Object(c["a"])(o["default"],e["a"],e["b"],!1,null,null,null);n["default"]=r.exports},ea22:function(t,n,a){"use strict";a.r(n);var e=a("5d34"),o=a.n(e);for(var u in e)"default"!==u&&function(t){a.d(n,t,function(){return e[t]})}(u);n["default"]=o.a}},[["bcb2","common/runtime","common/vendor"]]]);
});
require('pages/user/contactUs.js');
__wxRoute = 'pages/user/security';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/security.js';

define('pages/user/security.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/security"],{"3fa0":function(n,t,e){"use strict";var u=e("6dec"),a=e.n(u);a.a},"6dec":function(n,t,e){},"812d":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return a})},ac2d:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{}},methods:{changePass:function(){n.navigateTo({url:"./updatePass"})}}};t.default=e}).call(this,e("6e42")["default"])},b679:function(n,t,e){"use strict";e.r(t);var u=e("ac2d"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,function(){return u[n]})}(c);t["default"]=a.a},e512:function(n,t,e){"use strict";e.r(t);var u=e("812d"),a=e("b679");for(var c in a)"default"!==c&&function(n){e.d(t,n,function(){return a[n]})}(c);e("3fa0");var r=e("2877"),o=Object(r["a"])(a["default"],u["a"],u["b"],!1,null,"94c7dfb6",null);t["default"]=o.exports}},[["9948","common/runtime","common/vendor"]]]);
});
require('pages/user/security.js');
__wxRoute = 'pages/user/updatePass';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/updatePass.js';

define('pages/user/updatePass.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/updatePass"],{"346e":function(n,t,s){"use strict";var e=s("7fdf"),o=s.n(e);o.a},"4d60":function(n,t,s){"use strict";s.r(t);var e=s("64e6"),o=s.n(e);for(var a in e)"default"!==a&&function(n){s.d(t,n,function(){return e[n]})}(a);t["default"]=o.a},"64e6":function(n,t,s){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{oldPass:"",newPass:"",newPassConfirm:""}},methods:{onUpdatePass:function(){""!=this.oldPass?""!=this.newPass?this.newPass.length<6||this.newPass.length>16?n.showToast({title:"新密码长度在6~16位之间",icon:"none"}):""!=this.newPassConfirm?this.newPassConfirm==this.newPass?(n.showLoading(),this.$api.updatePass({password:this.oldPass,new_password:this.newPassConfirm},function(t){n.hideLoading(),"ok"==t.data.type&&n.showToast({title:"修改成功"})})):n.showToast({title:"两次输入的密码不一样",icon:"none"}):n.showToast({title:"请再次输入新密码",icon:"none"}):n.showToast({title:"请输入新密码",icon:"none"}):n.showToast({title:"请输入旧密码",icon:"none"})}}};t.default=s}).call(this,s("6e42")["default"])},"7fdf":function(n,t,s){},f675:function(n,t,s){"use strict";s.r(t);var e=s("f94b"),o=s("4d60");for(var a in o)"default"!==a&&function(n){s.d(t,n,function(){return o[n]})}(a);s("346e");var i=s("2877"),u=Object(i["a"])(o["default"],e["a"],e["b"],!1,null,"b724c6a0",null);t["default"]=u.exports},f94b:function(n,t,s){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},o=[];s.d(t,"a",function(){return e}),s.d(t,"b",function(){return o})}},[["94b8","common/runtime","common/vendor"]]]);
});
require('pages/user/updatePass.js');
__wxRoute = 'pages/user/extract';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/extract.js';

define('pages/user/extract.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/extract"],{"0c0b":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("b97e"));function i(t){return t&&t.__esModule?t:{default:t}}var o={data:function(){return{coinList:[{name:"BTC"},{name:"USDT"}],val:0,address:"",num:"",psw:"",currency_id:"",balance:"",rates:.1}},onLoad:function(){this.getUserInfo(),this.getRates()},computed:{realNum:function(){return this.num-this.num*this.rates}},methods:{getUserInfo:function(){this.msg=t.getStorageSync("userinfo"),console.log(n(this.msg," at pages\\user\\extract.vue:89"))},scan:function(){var e=this;t.scanCode({onlyFromCamera:!0,success:function(t){console.log(n(t," at pages\\user\\extract.vue:96")),console.log(n("条码类型："+t.scanType," at pages\\user\\extract.vue:97")),console.log(n("条码内容："+t.result," at pages\\user\\extract.vue:98")),e.address=t.result}})},getList:function(){var e=this;t.showLoading(),this.$api.getCurrencyList({},function(a){if(t.hideLoading(),"ok"==a.data.type){e.coinList=a.data.message,e.currency_id=a.data.message[0].id;var n=s.default.createQrCodeImg(a.data.message[0].total_account);e.img=n,t.stopPullDownRefresh(),e.$api.getCurrencyNumber({currency_id:e.currency_id},function(n){t.hideLoading(),"ok"==a.data.type&&(e.balance=n.data.message)})}})},changeCoin:function(e){var a=this;this.num="",this.address="",this.psw="",this.val=e.target.value;for(var n=0;n<this.coinList.length;n++)if(e.target.value==n){this.currency_id=this.coinList[n].id;var i=s.default.createQrCodeImg(this.coinList[n].total_account);this.img=i}t.showLoading(),this.$api.getCurrencyNumber({currency_id:this.currency_id},function(e){t.hideLoading(),"ok"==res.data.type&&(a.balance=e.data.message)})},all:function(){this.num=this.msg.withdrawable_balance},getRates:function(){var e=this;t.showLoading(),this.$api.getRates({},function(a){t.hideLoading(),"ok"==a.data.type&&(console.log(n(a.data.message,"手续费"," at pages\\user\\extract.vue:159")),e.rates=a.data.message)})},onExtract:function(){this.address?!this.num||this.num<30?this.$util.showToast("请输入提币数量，且必须大于30枚"):(t.showLoading(),this.$api.onExtract({number:that.num,address:that.address},function(e){t.hideLoading(),"ok"==e.data.type&&(t.showToast(e.data.message),setTimeout(function(){t.switchTab({url:"/pages/mine/mine"})},1500))})):this.$util.showToast("请输入提币地址")}}};e.default=o}).call(this,a("6e42")["default"],a("0de9")["default"])},"166f":function(t,e,a){},6710:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=(t._self._c,t.round(t.msg.withdrawable_balance,2));t.$mp.data=Object.assign({},{$root:{m0:a}})},s=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return s})},7054:function(t,e,a){"use strict";a.r(e);var n=a("6710"),s=a("b280");for(var i in s)"default"!==i&&function(t){a.d(e,t,function(){return s[t]})}(i);a("df45");var o=a("2877"),r=Object(o["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=r.exports},b280:function(t,e,a){"use strict";a.r(e);var n=a("0c0b"),s=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},df45:function(t,e,a){"use strict";var n=a("166f"),s=a.n(n);s.a}},[["ccd3","common/runtime","common/vendor"]]]);
});
require('pages/user/extract.js');
__wxRoute = 'pages/user/invite';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/invite.js';

define('pages/user/invite.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/invite"],{"0e29":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a})},"302a":function(e,t,n){},"3e00":function(e,t,n){"use strict";n.r(t);var o=n("a277"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=a.a},"427e":function(e,t,n){"use strict";var o=n("302a"),a=n.n(o);a.a},a277:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("b97e"));function a(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{codeImg:"",inviteCode:""}},onReady:function(){this.getInviteCode()},onPullDownRefresh:function(){this.getInviteCode()},methods:{getInviteCode:function(){var t=this;this.$api.getInviteCode({},function(n){if("ok"==n.data.type){t.inviteCode=n.data.message.code;var a=o.default.createQrCodeImg(n.data.message.pic_url);t.codeImg=a,e.stopPullDownRefresh()}})},copyCode:function(){e.setClipboardData({data:this.inviteCode,success:function(){e.showToast({title:"复制成功"})}})}}};t.default=i}).call(this,n("6e42")["default"])},c2dd:function(e,t,n){"use strict";n.r(t);var o=n("0e29"),a=n("3e00");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("427e");var u=n("2877"),c=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,"319f5f88",null);t["default"]=c.exports}},[["8c1b","common/runtime","common/vendor"]]]);
});
require('pages/user/invite.js');
__wxRoute = 'pages/user/apply';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/apply.js';

define('pages/user/apply.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/apply"],{"0278":function(n,t,e){"use strict";e.r(t);var a=e("6df5"),o=e("9e6a");for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);e("5faa");var u=e("2877"),c=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"5faa":function(n,t,e){"use strict";var a=e("c84c"),o=e.n(a);o.a},"6df5":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},8572:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{pcdNumber:"",mineName:""}},onLoad:function(){},methods:{confirm:function(){""!=this.pcdNumber?""!=this.mineName?(n.showLoading(),this.$api.toBeMiner({number:this.pcdNumber,name:this.mineName},function(t){n.hideLoading(),"ok"==t.data.type&&(n.showToast({title:t.data.message,icon:"none"}),setTimeout(function(){n.switchTab({url:"/pages/user/index"})},1500))})):n.showToast({title:"请输入矿主名称",icon:"none"}):n.showToast({title:"请输入投币数量",icon:"none"})}}};t.default=e}).call(this,e("6e42")["default"])},"9e6a":function(n,t,e){"use strict";e.r(t);var a=e("8572"),o=e.n(a);for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);t["default"]=o.a},c84c:function(n,t,e){}},[["b5b9","common/runtime","common/vendor"]]]);
});
require('pages/user/apply.js');
__wxRoute = 'pages/user/unlockWarehourse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/unlockWarehourse.js';

define('pages/user/unlockWarehourse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/unlockWarehourse"],{"09ea":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{canUnlockNumer:"",needUnlockNumer:""}},onLoad:function(){this.getUserInfo()},methods:{unlockWarehourseConfirm:function(){""!=this.needUnlockNumer?(n.showLoading(),this.$api.unlockWarehourse({number:this.needUnlockNumer},function(e){n.hideLoading(),"ok"==e.data.type&&(n.showToast({title:e.data.message,icon:"none"}),setTimeout(function(){n.switchTab({url:"/pages/user/index"})},1500))})):n.showToast({title:"请输入要解仓的数量",icon:"none"})},getUserInfo:function(){var n=this;this.$api.getUserInfo({},function(e){"ok"==e.data.type&&(n.canUnlockNumer=e.data.message.available_balance)})}}};e.default=t}).call(this,t("6e42")["default"])},"5a4d":function(n,e,t){"use strict";t.r(e);var o=t("dffd"),a=t("6d17");for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);t("f60f");var r=t("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},"6d17":function(n,e,t){"use strict";t.r(e);var o=t("09ea"),a=t.n(o);for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);e["default"]=a.a},d6fe:function(n,e,t){},dffd:function(n,e,t){"use strict";var o=function(){var n=this,e=n.$createElement,t=(n._self._c,n.round(n.canUnlockNumer,2));n.$mp.data=Object.assign({},{$root:{m0:t}})},a=[];t.d(e,"a",function(){return o}),t.d(e,"b",function(){return a})},f60f:function(n,e,t){"use strict";var o=t("d6fe"),a=t.n(o);a.a}},[["4428","common/runtime","common/vendor"]]]);
});
require('pages/user/unlockWarehourse.js');
__wxRoute = 'pages/user/lockWarehourse';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/lockWarehourse.js';

define('pages/user/lockWarehourse.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/lockWarehourse"],{"0b50":function(e,n,t){"use strict";t.r(n);var o=t("9878"),a=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=a.a},"4a3d":function(e,n,t){},"57f9":function(e,n,t){"use strict";var o=t("4a3d"),a=t.n(o);a.a},"923e":function(e,n,t){"use strict";t.r(n);var o=t("ec4c"),a=t("0b50");for(var u in a)"default"!==u&&function(e){t.d(n,e,function(){return a[e]})}(u);t("57f9");var r=t("2877"),c=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=c.exports},9878:function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{canLockNumber:0,needLockNumber:"",minLockNumber:""}},onLoad:function(){this.getUserInfo()},methods:{lockWarehourseConfirm:function(){""!=this.needLockNumber?this.needLockNumber<50?e.showToast({title:"锁仓数量不能小于50枚",icon:"none"}):(e.showLoading(),this.$api.lockWarehourse({number:this.needLockNumber},function(n){e.hideLoading(),"ok"==n.data.type&&(e.showToast({title:n.data.message,icon:"none"}),setTimeout(function(){e.switchTab({url:"/pages/user/index"})},1500))})):e.showToast({title:"请输入锁仓数量",icon:"none"})},getUserInfo:function(){var e=this;this.$api.getUserInfo({},function(n){if("ok"==n.data.type){var o=n.data.message;console.log(t("data",o," at pages\\user\\lockWarehourse.vue:65")),e.canLockNumber=o.total_balance,e.minLockNumber=o.mini_lock_num}})}}};n.default=o}).call(this,t("6e42")["default"],t("0de9")["default"])},ec4c:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.round(e.canLockNumber,2)),o=e.round(e.minLockNumber,2);e.$mp.data=Object.assign({},{$root:{m0:t,m1:o}})},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})}},[["e52e","common/runtime","common/vendor"]]]);
});
require('pages/user/lockWarehourse.js');
__wxRoute = 'pages/user/income';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/income.js';

define('pages/user/income.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/income"],{2100:function(e,n,t){},"50b4":function(e,n,t){"use strict";t.r(n);var o=t("d04b"),s=t("6b61");for(var a in s)"default"!==a&&function(e){t.d(n,e,function(){return s[e]})}(a);t("d63b");var i=t("2877"),u=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"6b61":function(e,n,t){"use strict";t.r(n);var o=t("810a"),s=t.n(o);for(var a in o)"default"!==a&&function(e){t.d(n,e,function(){return o[e]})}(a);n["default"]=s.a},"810a":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s=function(){return t.e("components/uni-load-more/uni-load-more").then(t.bind(null,"8a2f"))},a={components:{uniLoadMore:s},data:function(){return{avatar:"../../static/img/shouyi_banner.png",active:1,list:[],show:!1,msg:"",kzshow:!1,page:1,loadingType:"more"}},onLoad:function(){this.earnings(),this.getUserInfo()},onPullDownRefresh:function(){this.page=1,this.loadingType="more",this.list=[],this.earnings(),this.getUserInfo(),setTimeout(function(){e.stopPullDownRefresh()},1e3)},onReachBottom:function(){"nomore"!=this.loadingType&&(this.page++,this.earnings())},methods:{shift:function(e){this.active=e,console.log(o(this.active," at pages\\user\\income.vue:192")),this.earnings()},earnings:function(){var e=this;this.$api.getIncome({type:this.active},function(n){"ok"==n.data.type&&(console.log(o(n.data.message.data," at pages\\user\\income.vue:201")),console.log(o(n.data.message.data.length," at pages\\user\\income.vue:202")),e.loadingType=n.data.message.page==e.page?"nomore":"more",e.list=n.data.message.data)})},getUserInfo:function(){this.msg=e.getStorageSync("userinfo"),console.log(o(this.msg," at pages\\user\\income.vue:210")),console.log(o(this.msg.person_num," at pages\\user\\income.vue:211")),console.log(o(this.msg.user_pool_num," at pages\\user\\income.vue:212")),1==this.msg.is_miners&&(this.kzshow=!0)}},computed:{}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},d04b:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.round(e.msg.person_num,2)),o=e.round(e.msg.total_income,2);e.$mp.data=Object.assign({},{$root:{m0:t,m1:o}})},s=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s})},d63b:function(e,n,t){"use strict";var o=t("2100"),s=t.n(o);s.a}},[["40f7","common/runtime","common/vendor"]]]);
});
require('pages/user/income.js');
__wxRoute = 'pages/user/help';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/help.js';

define('pages/user/help.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/help"],{"4f4e":function(e,n,t){"use strict";t.r(n);var o=t("888e"),s=t("cd18");for(var u in s)"default"!==u&&function(e){t.d(n,e,function(){return s[e]})}(u);t("623e");var i=t("2877"),r=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,"cdc65b60",null);n["default"]=r.exports},"55c5":function(e,n,t){},"623e":function(e,n,t){"use strict";var o=t("55c5"),s=t.n(o);s.a},"888e":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return s})},c761:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{questionList:[{question:"1.唯信链云矿池存取PCD代币是否需要手续费？",reply:"不需要",showReply:!1},{question:"2.唯信链云矿池如何关联Token Coin账户？",reply:"①登录Token Coin账户  ②申请API  ③申请Passpharse  ④获取apiKey和secretKey ⑤记录流程中的Passpharse，apiKey，secretKey ⑥点击绑定Token Coin账户，填入相应数据完成绑定。",showReply:!1},{question:"3.唯信链云矿池如何盈利？",reply:"官方将对矿池参与用户进行锁仓，每日按照一定比列生成利润。",showReply:!1},{question:"4.矿主的代币是否计入矿池之中？",reply:"不计入，矿主的代币只用来获取资格，不用来计入矿池总数。",showReply:!1},{question:"5.锁仓代币何时释放？",reply:"用户如果需要将代币解仓，则需在前一天提出申请，官方将于第二个工作日进行解仓。",showReply:!1}]}},methods:{onMenuSwitch:function(e){this.questionList[e].showReply=!this.questionList[e].showReply}}};n.default=o},cd18:function(e,n,t){"use strict";t.r(n);var o=t("c761"),s=t.n(o);for(var u in o)"default"!==u&&function(e){t.d(n,e,function(){return o[e]})}(u);n["default"]=s.a}},[["41c3","common/runtime","common/vendor"]]]);
});
require('pages/user/help.js');
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

