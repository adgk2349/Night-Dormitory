(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ka="179",dc=0,lo=1,pc=2,wl=1,mc=2,vn=3,Bn=0,Ht=1,Mn=2,Fn=0,Ti=1,co=2,ho=3,uo=4,Ac=5,Zn=100,gc=101,_c=102,xc=103,vc=104,Mc=200,Ec=201,Sc=202,wc=203,Zs=204,Js=205,yc=206,Tc=207,bc=208,Rc=209,Cc=210,Dc=211,Pc=212,Uc=213,Lc=214,$s=0,ea=1,ta=2,Di=3,na=4,ia=5,ra=6,sa=7,es=0,Ic=1,Fc=2,Nn=0,Nc=1,Bc=2,Oc=3,zc=4,kc=5,Hc=6,Vc=7,yl=300,Pi=301,Ui=302,aa=303,oa=304,ts=306,yn=1e3,$n=1001,la=1002,Vt=1003,ns=1004,mr=1005,ln=1006,ds=1007,ei=1008,un=1009,Tl=1010,bl=1011,$i=1012,Ha=1013,ii=1014,En=1015,rr=1016,Va=1017,Ga=1018,er=1020,Rl=35902,Cl=1021,Dl=1022,sn=1023,tr=1026,nr=1027,Pl=1028,Wa=1029,Ul=1030,Xa=1031,Qa=1033,Hr=33776,Vr=33777,Gr=33778,Wr=33779,ca=35840,ha=35841,ua=35842,fa=35843,da=36196,pa=37492,ma=37496,Aa=37808,ga=37809,_a=37810,xa=37811,va=37812,Ma=37813,Ea=37814,Sa=37815,wa=37816,ya=37817,Ta=37818,ba=37819,Ra=37820,Ca=37821,Xr=36492,Da=36494,Pa=36495,Ll=36283,Ua=36284,La=36285,Ia=36286,Gc=3200,Wc=3201,Ya=0,Xc=1,Ln="",Et="srgb",Li="srgb-linear",Yr="linear",Je="srgb",ci=7680,fo=519,Qc=512,Yc=513,Kc=514,Il=515,qc=516,jc=517,Zc=518,Jc=519,po=35044,mo="300 es",cn=2e3,Kr=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ps=Math.PI/180,Fa=180/Math.PI;function sr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Ge(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function ms(i,e,t){return(1-t)*i+t*e}function Hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,t=0){We.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ar{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],u=n[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==p||l!==m||f!==g){let A=1-o;const d=c*p+l*m+f*g+u*x,R=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const L=Math.sqrt(y),T=Math.atan2(L,d*R);A=Math.sin(A*T)/L,o=Math.sin(o*T)/L}const S=o*R;if(c=c*A+p*S,l=l*A+m*S,f=f*A+g*S,u=u*A+x*S,A===1-o){const L=1/Math.sqrt(c*c+l*l+f*f+u*u);c*=L,l*=L,f*=L,u*=L}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],u=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return e[t]=o*g+f*u+c*m-l*p,e[t+1]=c*g+f*p+l*u-o*m,e[t+2]=l*g+f*m+o*p-c*u,e[t+3]=f*g-o*u-c*p-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),u=o(s/2),p=c(n/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*f*u+l*m*g,this._y=l*m*u-p*f*g,this._z=l*f*g+p*m*u,this._w=l*f*u-p*m*g;break;case"YXZ":this._x=p*f*u+l*m*g,this._y=l*m*u-p*f*g,this._z=l*f*g-p*m*u,this._w=l*f*u+p*m*g;break;case"ZXY":this._x=p*f*u-l*m*g,this._y=l*m*u+p*f*g,this._z=l*f*g+p*m*u,this._w=l*f*u-p*m*g;break;case"ZYX":this._x=p*f*u-l*m*g,this._y=l*m*u+p*f*g,this._z=l*f*g-p*m*u,this._w=l*f*u+p*m*g;break;case"YZX":this._x=p*f*u+l*m*g,this._y=l*m*u+p*f*g,this._z=l*f*g-p*m*u,this._w=l*f*u-p*m*g;break;case"XZY":this._x=p*f*u-l*m*g,this._y=l*m*u-p*f*g,this._z=l*f*g+p*m*u,this._w=l*f*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],u=t[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(f-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(f-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+f)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),u=Math.sin((1-t)*f)/l,p=Math.sin(t*f)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=r*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class h{constructor(e=0,t=0,n=0){h.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*f,this.y=n+c*f+o*l-s*u,this.z=r+c*u+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return As.copy(this).projectOnVector(e),this.sub(As)}reflect(e){return this.sub(As.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ge(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const As=new h,Ao=new ar;class Oe{constructor(e,t,n,r,s,a,o,c,l){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],u=n[7],p=n[2],m=n[5],g=n[8],x=r[0],A=r[3],d=r[6],R=r[1],y=r[4],S=r[7],L=r[2],T=r[5],P=r[8];return s[0]=a*x+o*R+c*L,s[3]=a*A+o*y+c*T,s[6]=a*d+o*S+c*P,s[1]=l*x+f*R+u*L,s[4]=l*A+f*y+u*T,s[7]=l*d+f*S+u*P,s[2]=p*x+m*R+g*L,s[5]=p*A+m*y+g*T,s[8]=p*d+m*S+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=f*a-o*l,p=o*c-f*s,m=l*s-a*c,g=t*u+n*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(r*l-f*n)*x,e[2]=(o*n-r*a)*x,e[3]=p*x,e[4]=(f*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=m*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gs.makeScale(e,t)),this}rotate(e){return this.premultiply(gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gs=new Oe;function Fl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ir(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){const i=ir("canvas");return i.style.display="block",i}const go={};function bi(i){i in go||(go[i]=!0,console.warn(i))}function th(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const _o=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xo=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nh(){const i={enabled:!0,workingColorSpace:Li,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=wn(r.r),r.g=wn(r.g),r.b=wn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?Yr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return bi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return bi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Li]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:_o,fromXYZ:xo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const Ye=nh();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class ih{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hi===void 0&&(hi=ir("canvas")),hi.width=e.width,hi.height=e.height;const r=hi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ir("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=wn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wn(t[n]/255)*255):t[n]=wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rh=0;class Ka{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rh++}),this.uuid=sr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(_s(r[a].image)):s.push(_s(r[a]))}else s=_s(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function _s(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sh=0;const xs=new h;class Rt extends Bi{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=$n,r=$n,s=ln,a=ei,o=sn,c=un,l=Rt.DEFAULT_ANISOTROPY,f=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=sr(),this.name="",this.source=new Ka(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xs).x}get height(){return this.source.getSize(xs).y}get depth(){return this.source.getSize(xs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yn:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case la:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yn:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case la:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=yl;Rt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],u=c[8],p=c[1],m=c[5],g=c[9],x=c[2],A=c[6],d=c[10];if(Math.abs(f-p)<.01&&Math.abs(u-x)<.01&&Math.abs(g-A)<.01){if(Math.abs(f+p)<.1&&Math.abs(u+x)<.1&&Math.abs(g+A)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(m+1)/2,L=(d+1)/2,T=(f+p)/4,P=(u+x)/4,B=(g+A)/4;return y>S&&y>L?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=P/n):S>L?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=T/r,s=B/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=P/s,r=B/s),this.set(n,r,s,t),this}let R=Math.sqrt((A-g)*(A-g)+(u-x)*(u-x)+(p-f)*(p-f));return Math.abs(R)<.001&&(R=1),this.x=(A-g)/R,this.y=(u-x)/R,this.z=(p-f)/R,this.w=Math.acos((l+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ge(this.x,e.x,t.x),this.y=Ge(this.y,e.y,t.y),this.z=Ge(this.z,e.z,t.z),this.w=Ge(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ge(this.x,e,t),this.y=Ge(this.y,e,t),this.z=Ge(this.z,e,t),this.w=Ge(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ge(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ah extends Bi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Rt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ka(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends ah{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nl extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class oh extends Rt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ai{constructor(e=new h(1/0,1/0,1/0),t=new h(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(en.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(en.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=en.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,en):en.fromBufferAttribute(s,a),en.applyMatrix4(e.matrixWorld),this.expandByPoint(en);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(e.matrixWorld),this.union(Ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,en),en.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),gr.subVectors(this.max,Vi),ui.subVectors(e.a,Vi),fi.subVectors(e.b,Vi),di.subVectors(e.c,Vi),Tn.subVectors(fi,ui),bn.subVectors(di,fi),Gn.subVectors(ui,di);let t=[0,-Tn.z,Tn.y,0,-bn.z,bn.y,0,-Gn.z,Gn.y,Tn.z,0,-Tn.x,bn.z,0,-bn.x,Gn.z,0,-Gn.x,-Tn.y,Tn.x,0,-bn.y,bn.x,0,-Gn.y,Gn.x,0];return!vs(t,ui,fi,di,gr)||(t=[1,0,0,0,1,0,0,0,1],!vs(t,ui,fi,di,gr))?!1:(_r.crossVectors(Tn,bn),t=[_r.x,_r.y,_r.z],vs(t,ui,fi,di,gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,en).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(en).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new h,new h,new h,new h,new h,new h,new h,new h],en=new h,Ar=new ai,ui=new h,fi=new h,di=new h,Tn=new h,bn=new h,Gn=new h,Vi=new h,gr=new h,_r=new h,Wn=new h;function vs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Wn.fromArray(i,s);const o=r.x*Math.abs(Wn.x)+r.y*Math.abs(Wn.y)+r.z*Math.abs(Wn.z),c=e.dot(Wn),l=t.dot(Wn),f=n.dot(Wn);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const lh=new ai,Gi=new h,Ms=new h;class or{constructor(e=new h,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gi.subVectors(e,this.center);const t=Gi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Gi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ms.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gi.copy(e.center).add(Ms)),this.expandByPoint(Gi.copy(e.center).sub(Ms))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const mn=new h,Es=new h,xr=new h,Rn=new h,Ss=new h,vr=new h,ws=new h;class is{constructor(e=new h,t=new h(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Es.copy(e).add(t).multiplyScalar(.5),xr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(Es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xr),o=Rn.dot(this.direction),c=-Rn.dot(xr),l=Rn.lengthSq(),f=Math.abs(1-a*a);let u,p,m,g;if(f>0)if(u=a*c-o,p=a*o-c,g=s*f,u>=0)if(p>=-g)if(p<=g){const x=1/f;u*=x,p*=x,m=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p=-s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-a*s+o)),p=u>0?-s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+l):(u=Math.max(0,-(a*s+o)),p=u>0?s:Math.min(Math.max(-s,-c),s),m=-u*u+p*(p+2*c)+l);else p=a>0?-s:s,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Es).addScaledVector(xr,p),m}intersectSphere(e,t){mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,r=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,r=(e.min.x-p.x)*l),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-p.z)*u,c=(e.max.z-p.z)*u):(o=(e.max.z-p.z)*u,c=(e.min.z-p.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){Ss.subVectors(t,e),vr.subVectors(n,e),ws.crossVectors(Ss,vr);let a=this.direction.dot(ws),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const c=o*this.direction.dot(vr.crossVectors(Rn,vr));if(c<0)return null;const l=o*this.direction.dot(Ss.cross(Rn));if(l<0||c+l>a)return null;const f=-o*Rn.dot(ws);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,r,s,a,o,c,l,f,u,p,m,g,x,A){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,u,p,m,g,x,A)}set(e,t,n,r,s,a,o,c,l,f,u,p,m,g,x,A){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=f,d[10]=u,d[14]=p,d[3]=m,d[7]=g,d[11]=x,d[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const p=a*f,m=a*u,g=o*f,x=o*u;t[0]=c*f,t[4]=-c*u,t[8]=l,t[1]=m+g*l,t[5]=p-x*l,t[9]=-o*c,t[2]=x-p*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const p=c*f,m=c*u,g=l*f,x=l*u;t[0]=p+x*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*u,t[5]=a*f,t[9]=-o,t[2]=m*o-g,t[6]=x+p*o,t[10]=a*c}else if(e.order==="ZXY"){const p=c*f,m=c*u,g=l*f,x=l*u;t[0]=p-x*o,t[4]=-a*u,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*f,t[9]=x-p*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const p=a*f,m=a*u,g=o*f,x=o*u;t[0]=c*f,t[4]=g*l-m,t[8]=p*l+x,t[1]=c*u,t[5]=x*l+p,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*f,t[4]=x-p*u,t[8]=g*u+m,t[1]=u,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=m*u+g,t[10]=p-x*u}else if(e.order==="XZY"){const p=a*c,m=a*l,g=o*c,x=o*l;t[0]=c*f,t[4]=-u,t[8]=l*f,t[1]=p*u+x,t[5]=a*f,t[9]=m*u-g,t[2]=g*u-m,t[6]=o*f,t[10]=x*u+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ch,e,hh)}lookAt(e,t,n){const r=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),Cn.crossVectors(n,Xt),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),Cn.crossVectors(n,Xt)),Cn.normalize(),Mr.crossVectors(Xt,Cn),r[0]=Cn.x,r[4]=Mr.x,r[8]=Xt.x,r[1]=Cn.y,r[5]=Mr.y,r[9]=Xt.y,r[2]=Cn.z,r[6]=Mr.z,r[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],u=n[5],p=n[9],m=n[13],g=n[2],x=n[6],A=n[10],d=n[14],R=n[3],y=n[7],S=n[11],L=n[15],T=r[0],P=r[4],B=r[8],E=r[12],M=r[1],b=r[5],W=r[9],G=r[13],V=r[2],J=r[6],Y=r[10],re=r[14],X=r[3],ce=r[7],pe=r[11],ye=r[15];return s[0]=a*T+o*M+c*V+l*X,s[4]=a*P+o*b+c*J+l*ce,s[8]=a*B+o*W+c*Y+l*pe,s[12]=a*E+o*G+c*re+l*ye,s[1]=f*T+u*M+p*V+m*X,s[5]=f*P+u*b+p*J+m*ce,s[9]=f*B+u*W+p*Y+m*pe,s[13]=f*E+u*G+p*re+m*ye,s[2]=g*T+x*M+A*V+d*X,s[6]=g*P+x*b+A*J+d*ce,s[10]=g*B+x*W+A*Y+d*pe,s[14]=g*E+x*G+A*re+d*ye,s[3]=R*T+y*M+S*V+L*X,s[7]=R*P+y*b+S*J+L*ce,s[11]=R*B+y*W+S*Y+L*pe,s[15]=R*E+y*G+S*re+L*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],u=e[6],p=e[10],m=e[14],g=e[3],x=e[7],A=e[11],d=e[15];return g*(+s*c*u-r*l*u-s*o*p+n*l*p+r*o*m-n*c*m)+x*(+t*c*m-t*l*p+s*a*p-r*a*m+r*l*f-s*c*f)+A*(+t*l*u-t*o*m-s*a*u+n*a*m+s*o*f-n*l*f)+d*(-r*o*f-t*c*u+t*o*p+r*a*u-n*a*p+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],u=e[9],p=e[10],m=e[11],g=e[12],x=e[13],A=e[14],d=e[15],R=u*A*l-x*p*l+x*c*m-o*A*m-u*c*d+o*p*d,y=g*p*l-f*A*l-g*c*m+a*A*m+f*c*d-a*p*d,S=f*x*l-g*u*l+g*o*m-a*x*m-f*o*d+a*u*d,L=g*u*c-f*x*c-g*o*p+a*x*p+f*o*A-a*u*A,T=t*R+n*y+r*S+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=R*P,e[1]=(x*p*s-u*A*s-x*r*m+n*A*m+u*r*d-n*p*d)*P,e[2]=(o*A*s-x*c*s+x*r*l-n*A*l-o*r*d+n*c*d)*P,e[3]=(u*c*s-o*p*s-u*r*l+n*p*l+o*r*m-n*c*m)*P,e[4]=y*P,e[5]=(f*A*s-g*p*s+g*r*m-t*A*m-f*r*d+t*p*d)*P,e[6]=(g*c*s-a*A*s-g*r*l+t*A*l+a*r*d-t*c*d)*P,e[7]=(a*p*s-f*c*s+f*r*l-t*p*l-a*r*m+t*c*m)*P,e[8]=S*P,e[9]=(g*u*s-f*x*s-g*n*m+t*x*m+f*n*d-t*u*d)*P,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*d+t*o*d)*P,e[11]=(f*o*s-a*u*s-f*n*l+t*u*l+a*n*m-t*o*m)*P,e[12]=L*P,e[13]=(f*x*r-g*u*r+g*n*p-t*x*p-f*n*A+t*u*A)*P,e[14]=(g*o*r-a*x*r-g*n*c+t*x*c+a*n*A-t*o*A)*P,e[15]=(a*u*r-f*o*r+f*n*c-t*u*c-a*n*p+t*o*p)*P,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,u=o+o,p=s*l,m=s*f,g=s*u,x=a*f,A=a*u,d=o*u,R=c*l,y=c*f,S=c*u,L=n.x,T=n.y,P=n.z;return r[0]=(1-(x+d))*L,r[1]=(m+S)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(m-S)*T,r[5]=(1-(p+d))*T,r[6]=(A+R)*T,r[7]=0,r[8]=(g+y)*P,r[9]=(A-R)*P,r[10]=(1-(p+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const l=1/s,f=1/a,u=1/o;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=f,tn.elements[5]*=f,tn.elements[6]*=f,tn.elements[8]*=u,tn.elements[9]*=u,tn.elements[10]*=u,t.setFromRotationMatrix(tn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=cn,c=!1){const l=this.elements,f=2*s/(t-e),u=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===cn)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Kr)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=u,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=cn,c=!1){const l=this.elements,f=2/(t-e),u=2/(n-r),p=-(t+e)/(t-e),m=-(n+r)/(n-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===cn)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Kr)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=p,l[1]=0,l[5]=u,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const pi=new h,tn=new ot,ch=new h(0,0,0),hh=new h(1,1,1),Cn=new h,Mr=new h,Xt=new h,vo=new ot,Mo=new ar;class Ft{constructor(e=0,t=0,n=0,r=Ft.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],u=r[2],p=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ft.DEFAULT_ORDER="XYZ";class qa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uh=0;const Eo=new h,mi=new ar,An=new ot,Er=new h,Wi=new h,fh=new h,dh=new ar,So=new h(1,0,0),wo=new h(0,1,0),yo=new h(0,0,1),To={type:"added"},ph={type:"removed"},Ai={type:"childadded",child:null},ys={type:"childremoved",child:null};class Ct extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=sr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ct.DEFAULT_UP.clone();const e=new h,t=new Ft,n=new ar,r=new h(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ot},normalMatrix:{value:new Oe}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Ct.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(So,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(yo,e)}translateOnAxis(e,t){return Eo.copy(e).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(So,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Er.copy(e):Er.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Wi,Er,this.up):An.lookAt(Er,Wi,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(An),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(To),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ph),ys.child=e,this.dispatchEvent(ys),ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(To),Ai.child=e,this.dispatchEvent(Ai),Ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,fh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,dh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),u=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Ct.DEFAULT_UP=new h(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new h,gn=new h,Ts=new h,_n=new h,gi=new h,_i=new h,bo=new h,bs=new h,Rs=new h,Cs=new h,Ds=new et,Ps=new et,Us=new et;class rn{constructor(e=new h,t=new h,n=new h){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){nn.subVectors(r,t),gn.subVectors(n,t),Ts.subVectors(e,t);const a=nn.dot(nn),o=nn.dot(gn),c=nn.dot(Ts),l=gn.dot(gn),f=gn.dot(Ts),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const p=1/u,m=(l*c-o*f)*p,g=(a*f-o*c)*p;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,_n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,_n.x),c.addScaledVector(a,_n.y),c.addScaledVector(o,_n.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ds.setScalar(0),Ps.setScalar(0),Us.setScalar(0),Ds.fromBufferAttribute(e,t),Ps.fromBufferAttribute(e,n),Us.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ds,s.x),a.addScaledVector(Ps,s.y),a.addScaledVector(Us,s.z),a}static isFrontFacing(e,t,n,r){return nn.subVectors(n,t),gn.subVectors(e,t),nn.cross(gn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),nn.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,n),_i.subVectors(s,n),bs.subVectors(e,n);const c=gi.dot(bs),l=_i.dot(bs);if(c<=0&&l<=0)return t.copy(n);Rs.subVectors(e,r);const f=gi.dot(Rs),u=_i.dot(Rs);if(f>=0&&u<=f)return t.copy(r);const p=c*u-f*l;if(p<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(gi,a);Cs.subVectors(e,s);const m=gi.dot(Cs),g=_i.dot(Cs);if(g>=0&&m<=g)return t.copy(s);const x=m*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(_i,o);const A=f*g-m*u;if(A<=0&&u-f>=0&&m-g>=0)return bo.subVectors(s,r),o=(u-f)/(u-f+(m-g)),t.copy(r).addScaledVector(bo,o);const d=1/(A+x+p);return a=x*d,o=p*d,t.copy(n).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Sr={h:0,s:0,l:0};function Ls(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ye.workingColorSpace){if(e=$c(e,1),t=Ge(t,0,1),n=Ge(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ls(a,s,e+1/3),this.g=Ls(a,s,e),this.b=Ls(a,s,e-1/3)}return Ye.colorSpaceToWorking(this,r),this}setStyle(e,t=Et){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=Bl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wn(e.r),this.g=wn(e.g),this.b=wn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Ye.workingToColorSpace(yt.copy(this),e),Math.round(Ge(yt.r*255,0,255))*65536+Math.round(Ge(yt.g*255,0,255))*256+Math.round(Ge(yt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.workingToColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,s=yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=f<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Ye.workingColorSpace){return Ye.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Et){Ye.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(Sr);const n=ms(Dn.h,Sr.h,t),r=ms(Dn.s,Sr.s,t),s=ms(Dn.l,Sr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ne;Ne.NAMES=Bl;let mh=0;class fn extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=sr(),this.name="",this.type="Material",this.blending=Ti,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zs,this.blendDst=Js,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ci,this.stencilZFail=ci,this.stencilZPass=ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zs&&(n.blendSrc=this.blendSrc),this.blendDst!==Js&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bt extends fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new h,wr=new We;let Ah=0;class hn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class Ol extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zl extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class vt extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gh=0;const Zt=new ot,Is=new Ct,xi=new h,Qt=new ai,Xi=new ai,xt=new h;class Nt extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=sr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fl(e)?zl:Ol)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Oe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Is.lookAt(e),Is.updateMatrix(),this.applyMatrix4(Is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new h(-1/0,-1/0,-1/0),new h(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new h,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Qt.min,Xi.min),Qt.expandByPoint(xt),xt.addVectors(Qt.max,Xi.max),Qt.expandByPoint(xt)):(Qt.expandByPoint(Xi.min),Qt.expandByPoint(Xi.max))}Qt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)xt.fromBufferAttribute(o,l),c&&(xi.fromBufferAttribute(e,l),xt.add(xi)),r=Math.max(r,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let B=0;B<n.count;B++)o[B]=new h,c[B]=new h;const l=new h,f=new h,u=new h,p=new We,m=new We,g=new We,x=new h,A=new h;function d(B,E,M){l.fromBufferAttribute(n,B),f.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),p.fromBufferAttribute(s,B),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,M),f.sub(l),u.sub(l),m.sub(p),g.sub(p);const b=1/(m.x*g.y-g.x*m.y);isFinite(b)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(b),A.copy(u).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(b),o[B].add(x),o[E].add(x),o[M].add(x),c[B].add(A),c[E].add(A),c[M].add(A))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let B=0,E=R.length;B<E;++B){const M=R[B],b=M.start,W=M.count;for(let G=b,V=b+W;G<V;G+=3)d(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const y=new h,S=new h,L=new h,T=new h;function P(B){L.fromBufferAttribute(r,B),T.copy(L);const E=o[B];y.copy(E),y.sub(L.multiplyScalar(L.dot(E))).normalize(),S.crossVectors(T,E);const b=S.dot(c[B])<0?-1:1;a.setXYZW(B,y.x,y.y,y.z,b)}for(let B=0,E=R.length;B<E;++B){const M=R[B],b=M.start,W=M.count;for(let G=b,V=b+W;G<V;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new h,s=new h,a=new h,o=new h,c=new h,l=new h,f=new h,u=new h;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),x=e.getX(p+1),A=e.getX(p+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,A),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,A),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(A,l.x,l.y,l.z)}else for(let p=0,m=t.count;p<m;p+=3)r.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),f.subVectors(a,s),u.subVectors(r,s),f.cross(u),n.setXYZ(p+0,f.x,f.y,f.z),n.setXYZ(p+1,f.x,f.y,f.z),n.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,u=o.normalized,p=new l.constructor(c.length*f);let m=0,g=0;for(let x=0,A=c.length;x<A;x++){o.isInterleavedBufferAttribute?m=c[x]*o.data.stride+o.offset:m=c[x]*f;for(let d=0;d<f;d++)p[g++]=l[m++]}return new hn(p,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,u=l.length;f<u;f++){const p=l[f],m=e(p,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];f.push(m.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],u=s[l];for(let p=0,m=u.length;p<m;p++)f.push(u[p].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new ot,Xn=new is,yr=new or,Co=new h,Tr=new h,br=new h,Rr=new h,Fs=new h,Cr=new h,Do=new h,Dr=new h;class Kt extends Ct{constructor(e=new Nt,t=new bt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],u=s[c];f!==0&&(Fs.fromBufferAttribute(u,e),a?Cr.addScaledVector(Fs,f):Cr.addScaledVector(Fs.sub(t),f))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(yr.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(yr,Co)===null||Xn.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ro.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const A=p[g],d=a[A.materialIndex],R=Math.max(A.start,m.start),y=Math.min(o.count,Math.min(A.start+A.count,m.start+m.count));for(let S=R,L=y;S<L;S+=3){const T=o.getX(S),P=o.getX(S+1),B=o.getX(S+2);r=Pr(this,d,e,n,l,f,u,T,P,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let A=g,d=x;A<d;A+=3){const R=o.getX(A),y=o.getX(A+1),S=o.getX(A+2);r=Pr(this,a,e,n,l,f,u,R,y,S),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){const A=p[g],d=a[A.materialIndex],R=Math.max(A.start,m.start),y=Math.min(c.count,Math.min(A.start+A.count,m.start+m.count));for(let S=R,L=y;S<L;S+=3){const T=S,P=S+1,B=S+2;r=Pr(this,d,e,n,l,f,u,T,P,B),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=A.materialIndex,t.push(r))}}else{const g=Math.max(0,m.start),x=Math.min(c.count,m.start+m.count);for(let A=g,d=x;A<d;A+=3){const R=A,y=A+1,S=A+2;r=Pr(this,a,e,n,l,f,u,R,y,S),r&&(r.faceIndex=Math.floor(A/3),t.push(r))}}}}function _h(i,e,t,n,r,s,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Bn,o),c===null)return null;Dr.copy(o),Dr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Dr);return l<t.near||l>t.far?null:{distance:l,point:Dr.clone(),object:i}}function Pr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Tr),i.getVertexPosition(c,br),i.getVertexPosition(l,Rr);const f=_h(i,e,t,n,Tr,br,Rr,Do);if(f){const u=new h;rn.getBarycoord(Do,Tr,br,Rr,u),r&&(f.uv=rn.getInterpolatedAttribute(r,o,c,l,u,new We)),s&&(f.uv1=rn.getInterpolatedAttribute(s,o,c,l,u,new We)),a&&(f.normal=rn.getInterpolatedAttribute(a,o,c,l,u,new h),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:o,b:c,c:l,normal:new h,materialIndex:0};rn.getNormal(Tr,br,Rr,p.normal),f.face=p,f.barycoord=u}return f}class Oi extends Nt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(u,2));function g(x,A,d,R,y,S,L,T,P,B,E){const M=S/P,b=L/B,W=S/2,G=L/2,V=T/2,J=P+1,Y=B+1;let re=0,X=0;const ce=new h;for(let pe=0;pe<Y;pe++){const ye=pe*b-G;for(let ke=0;ke<J;ke++){const lt=ke*M-W;ce[x]=lt*R,ce[A]=ye*y,ce[d]=V,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[A]=0,ce[d]=T>0?1:-1,f.push(ce.x,ce.y,ce.z),u.push(ke/P),u.push(1-pe/B),re+=1}}for(let pe=0;pe<B;pe++)for(let ye=0;ye<P;ye++){const ke=p+ye+J*pe,lt=p+ye+J*(pe+1),tt=p+(ye+1)+J*(pe+1),q=p+(ye+1)+J*pe;c.push(ke,lt,q),c.push(lt,tt,q),X+=6}o.addGroup(m,X,E),m+=X,p+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const r in n)e[r]=n[r]}return e}function xh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const vh={clone:Ii,merge:Lt};var Mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mh,this.fragmentShader=Eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=xh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hl extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new h,Po=new We,Uo=new We;class Yt extends Hl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fa*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Po,Uo),t.subVectors(Uo,Po)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ps*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const vi=-90,Mi=1;class Sh extends Ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(vi,Mi,e,t);r.layers=this.layers,this.add(r);const s=new Yt(vi,Mi,e,t);s.layers=this.layers,this.add(s);const a=new Yt(vi,Mi,e,t);a.layers=this.layers,this.add(a);const o=new Yt(vi,Mi,e,t);o.layers=this.layers,this.add(o);const c=new Yt(vi,Mi,e,t);c.layers=this.layers,this.add(c);const l=new Yt(vi,Mi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===cn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,u=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(u,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Vl extends Rt{constructor(e=[],t=Pi,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Vl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oi(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Fn});s.uniforms.tEquirect.value=t;const a=new Kt(r,s),o=t.minFilter;return t.minFilter===ei&&(t.minFilter=ln),new Sh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Sn extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yh={type:"move"};class Ns{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new h,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new h),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new h,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new h),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const A=t.getJointPose(x,n),d=this._getHandJoint(l,x);A!==null&&(d.matrix.fromArray(A.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=A.radius),d.visible=A!==null}const f=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=f.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class ja{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ne(e),this.near=t,this.far=n}clone(){return new ja(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Th extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ft,this.environmentIntensity=1,this.environmentRotation=new Ft,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bs=new h,bh=new h,Rh=new Oe;class qn{constructor(e=new h(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Bs.subVectors(n,t).cross(bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Rh.getNormalMatrix(e),r=this.coplanarPoint(Bs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new or,Ch=new We(.5,.5),Ur=new h;class Za{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],u=s[5],p=s[6],m=s[7],g=s[8],x=s[9],A=s[10],d=s[11],R=s[12],y=s[13],S=s[14],L=s[15];if(r[0].setComponents(l-a,m-f,d-g,L-R).normalize(),r[1].setComponents(l+a,m+f,d+g,L+R).normalize(),r[2].setComponents(l+o,m+u,d+x,L+y).normalize(),r[3].setComponents(l-o,m-u,d-x,L-y).normalize(),n)r[4].setComponents(c,p,A,S).normalize(),r[5].setComponents(l-c,m-p,d-A,L-S).normalize();else if(r[4].setComponents(l-c,m-p,d-A,L-S).normalize(),t===cn)r[5].setComponents(l+c,m+p,d+A,L+S).normalize();else if(t===Kr)r[5].setComponents(c,p,A,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){Qn.center.set(0,0,0);const t=Ch.distanceTo(e.center);return Qn.radius=.7071067811865476+t,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ur.x=r.normal.x>0?e.max.x:e.min.x,Ur.y=r.normal.y>0?e.max.y:e.min.y,Ur.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ni extends fn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qr=new h,jr=new h,Lo=new ot,Qi=new is,Lr=new or,Os=new h,Io=new h;class rs extends Ct{constructor(e=new Nt,t=new ni){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)qr.fromBufferAttribute(t,r-1),jr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=qr.distanceTo(jr);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(r),Lr.radius+=s,e.ray.intersectsSphere(Lr)===!1)return;Lo.copy(r).invert(),Qi.copy(e.ray).applyMatrix4(Lo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,p=n.attributes.position;if(f!==null){const m=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=m,A=g-1;x<A;x+=l){const d=f.getX(x),R=f.getX(x+1),y=Ir(this,e,Qi,c,d,R,x);y&&t.push(y)}if(this.isLineLoop){const x=f.getX(g-1),A=f.getX(m),d=Ir(this,e,Qi,c,x,A,g-1);d&&t.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let x=m,A=g-1;x<A;x+=l){const d=Ir(this,e,Qi,c,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=Ir(this,e,Qi,c,g-1,m,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ir(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(qr.fromBufferAttribute(o,r),jr.fromBufferAttribute(o,s),t.distanceSqToSegment(qr,jr,Os,Io)>n)return;Os.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Os);if(!(l<e.near||l>e.far))return{distance:l,point:Io.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Fo=new h,No=new h;class Bo extends rs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Fo.fromBufferAttribute(t,r),No.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Fo.distanceTo(No);e.setAttribute("lineDistance",new vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qi extends fn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Oo=new ot,Na=new is,Fr=new or,Nr=new h;class zs extends Ct{constructor(e=new Nt,t=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;Oo.copy(r).invert(),Na.copy(e.ray).applyMatrix4(Oo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const p=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let g=p,x=m;g<x;g++){const A=l.getX(g);Nr.fromBufferAttribute(u,A),zo(Nr,A,c,r,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=p,x=m;g<x;g++)Nr.fromBufferAttribute(u,g),zo(Nr,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(i,e,t,n,r,s,a){const o=Na.distanceSqToPoint(i);if(o<t){const c=new h;Na.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gl extends Rt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wl extends Rt{constructor(e,t,n=ii,r,s,a,o=Vt,c=Vt,l,f=tr,u=1){if(f!==tr&&f!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:u};super(p,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ka(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ja extends Nt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const f=[],u=[],p=[],m=[];let g=0;const x=[],A=n/2;let d=0;R(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(p,3)),this.setAttribute("uv",new vt(m,2));function R(){const S=new h,L=new h;let T=0;const P=(t-e)/n;for(let B=0;B<=s;B++){const E=[],M=B/s,b=M*(t-e)+e;for(let W=0;W<=r;W++){const G=W/r,V=G*c+o,J=Math.sin(V),Y=Math.cos(V);L.x=b*J,L.y=-M*n+A,L.z=b*Y,u.push(L.x,L.y,L.z),S.set(J,P,Y).normalize(),p.push(S.x,S.y,S.z),m.push(G,1-M),E.push(g++)}x.push(E)}for(let B=0;B<r;B++)for(let E=0;E<s;E++){const M=x[E][B],b=x[E+1][B],W=x[E+1][B+1],G=x[E][B+1];(e>0||E!==0)&&(f.push(M,b,G),T+=3),(t>0||E!==s-1)&&(f.push(b,W,G),T+=3)}l.addGroup(d,T,0),d+=T}function y(S){const L=g,T=new We,P=new h;let B=0;const E=S===!0?e:t,M=S===!0?1:-1;for(let W=1;W<=r;W++)u.push(0,A*M,0),p.push(0,M,0),m.push(.5,.5),g++;const b=g;for(let W=0;W<=r;W++){const V=W/r*c+o,J=Math.cos(V),Y=Math.sin(V);P.x=E*Y,P.y=A*M,P.z=E*J,u.push(P.x,P.y,P.z),p.push(0,M,0),T.x=J*.5+.5,T.y=Y*.5*M+.5,m.push(T.x,T.y),g++}for(let W=0;W<r;W++){const G=L+W,V=b+W;S===!0?f.push(V,V+1,G):f.push(V+1,V,G),B+=3}l.addGroup(d,B,S===!0?1:2),d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ss extends Nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,u=e/o,p=t/c,m=[],g=[],x=[],A=[];for(let d=0;d<f;d++){const R=d*p-a;for(let y=0;y<l;y++){const S=y*u-s;g.push(S,-R,0),x.push(0,0,1),A.push(y/o),A.push(1-d/c)}}for(let d=0;d<c;d++)for(let R=0;R<o;R++){const y=R+l*d,S=R+l*(d+1),L=R+1+l*(d+1),T=R+1+l*d;m.push(y,S,T),m.push(S,L,T)}this.setIndex(m),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(x,3)),this.setAttribute("uv",new vt(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ss(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dh extends fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class at extends fn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ya,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ft,this.combine=es,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ph extends fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Uh extends fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lh{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,u){return l.push(f,u),this},this.removeHandler=function(f){const u=l.indexOf(f);return u!==-1&&l.splice(u,2),this},this.getHandler=function(f){for(let u=0,p=l.length;u<p;u+=2){const m=l[u],g=l[u+1];if(m.global&&(m.lastIndex=0),m.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Ih=new Lh;class lr{constructor(e){this.manager=e!==void 0?e:Ih,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const xn={};class Fh extends Error{constructor(e,t){super(e),this.response=t}}class Nh extends lr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Zi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(xn[e]!==void 0){xn[e].push({onLoad:t,onProgress:n,onError:r});return}xn[e]=[],xn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=xn[e],u=l.body.getReader(),p=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0;let x=0;const A=new ReadableStream({start(d){R();function R(){u.read().then(({done:y,value:S})=>{if(y)d.close();else{x+=S.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let T=0,P=f.length;T<P;T++){const B=f[T];B.onProgress&&B.onProgress(L)}d.enqueue(S),R()}},y=>{d.error(y)})}}});return new Response(A)}else throw new Fh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),p=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(p);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{Zi.add(`file:${e}`,l);const f=xn[e];delete xn[e];for(let u=0,p=f.length;u<p;u++){const m=f[u];m.onLoad&&m.onLoad(l)}}).catch(l=>{const f=xn[e];if(f===void 0)throw this.manager.itemError(e),l;delete xn[e];for(let u=0,p=f.length;u<p;u++){const m=f[u];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ei=new WeakMap;class Bh extends lr{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Zi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ei.get(a);u===void 0&&(u=[],Ei.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=ir("img");function c(){f(),t&&t(this);const u=Ei.get(this)||[];for(let p=0;p<u.length;p++){const m=u[p];m.onLoad&&m.onLoad(this)}Ei.delete(this),s.manager.itemEnd(e)}function l(u){f(),r&&r(u),Zi.remove(`image:${e}`);const p=Ei.get(this)||[];for(let m=0;m<p.length;m++){const g=p[m];g.onError&&g.onError(u)}Ei.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Zi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Oh extends lr{constructor(e){super(e)}load(e,t,n,r){const s=new Rt,a=new Bh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xl extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ks=new ot,ko=new h,Ho=new h;class zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Za,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Ho.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ho),t.updateMatrixWorld(),ks.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ks,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ks)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vo=new ot,Yi=new h,Hs=new h;class kh extends zh{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new h(1,0,0),new h(-1,0,0),new h(0,0,1),new h(0,0,-1),new h(0,1,0),new h(0,-1,0)],this._cubeUps=[new h(0,1,0),new h(0,1,0),new h(0,1,0),new h(0,1,0),new h(0,0,1),new h(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yi),Hs.copy(n.position),Hs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Hs),n.updateMatrixWorld(),r.makeTranslation(-Yi.x,-Yi.y,-Yi.z),Vo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vo,n.coordinateSystem,n.reversedDepth)}}class kn extends Xl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new kh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Hh extends Hl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vh extends Xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Gh extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Go=new ot;class Xh{constructor(e,t,n=0,r=1/0){this.ray=new is(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Go.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Go),this}intersectObject(e,t=!0,n=[]){return Ba(e,this,n,t),n.sort(Wo),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ba(e[r],this,n,t);return n.sort(Wo),n}}function Wo(i,e){return i.distance-e.distance}function Ba(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ba(s[a],e,t,!0)}}function Xo(i,e,t,n){const r=Qh(n);switch(t){case Cl:return i*e;case Pl:return i*e/r.components*r.byteLength;case Wa:return i*e/r.components*r.byteLength;case Ul:return i*e*2/r.components*r.byteLength;case Xa:return i*e*2/r.components*r.byteLength;case Dl:return i*e*3/r.components*r.byteLength;case sn:return i*e*4/r.components*r.byteLength;case Qa:return i*e*4/r.components*r.byteLength;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ha:case fa:return Math.max(i,16)*Math.max(e,8)/4;case ca:case ua:return Math.max(i,8)*Math.max(e,8)/2;case da:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ga:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _a:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case xa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case va:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ma:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ba:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ca:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xr:case Da:case Pa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ll:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case La:case Ia:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case un:case Tl:return{byteLength:1,components:1};case $i:case bl:case rr:return{byteLength:2,components:1};case Va:case Ga:return{byteLength:2,components:4};case ii:case Ha:case En:return{byteLength:4,components:1};case Rl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);function Ql(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Yh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,u=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,f),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const f=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,f);else{u.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<u.length;m++){const g=u[p],x=u[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,u[p]=x)}u.length=p+1;for(let m=0,g=u.length;m<g;m++){const x=u[m];i.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$h=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,iu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ru=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,su=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,au=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ou=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_u=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Eu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wu="gl_FragColor = linearToOutputTexel( gl_FragColor );",yu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ru=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Du=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Iu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ou=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zu=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ku=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ku=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ju=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ju=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$u=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ef=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,of=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,df=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ef=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Df=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,If=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ff=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Of=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Yf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$f=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,td=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,id=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,od=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ld=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ud=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,md=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ad=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_d=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Td=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Kh,alphahash_pars_fragment:qh,alphamap_fragment:jh,alphamap_pars_fragment:Zh,alphatest_fragment:Jh,alphatest_pars_fragment:$h,aomap_fragment:eu,aomap_pars_fragment:tu,batching_pars_vertex:nu,batching_vertex:iu,begin_vertex:ru,beginnormal_vertex:su,bsdfs:au,iridescence_fragment:ou,bumpmap_pars_fragment:lu,clipping_planes_fragment:cu,clipping_planes_pars_fragment:hu,clipping_planes_pars_vertex:uu,clipping_planes_vertex:fu,color_fragment:du,color_pars_fragment:pu,color_pars_vertex:mu,color_vertex:Au,common:gu,cube_uv_reflection_fragment:_u,defaultnormal_vertex:xu,displacementmap_pars_vertex:vu,displacementmap_vertex:Mu,emissivemap_fragment:Eu,emissivemap_pars_fragment:Su,colorspace_fragment:wu,colorspace_pars_fragment:yu,envmap_fragment:Tu,envmap_common_pars_fragment:bu,envmap_pars_fragment:Ru,envmap_pars_vertex:Cu,envmap_physical_pars_fragment:ku,envmap_vertex:Du,fog_vertex:Pu,fog_pars_vertex:Uu,fog_fragment:Lu,fog_pars_fragment:Iu,gradientmap_pars_fragment:Fu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Bu,lights_lambert_pars_fragment:Ou,lights_pars_begin:zu,lights_toon_fragment:Hu,lights_toon_pars_fragment:Vu,lights_phong_fragment:Gu,lights_phong_pars_fragment:Wu,lights_physical_fragment:Xu,lights_physical_pars_fragment:Qu,lights_fragment_begin:Yu,lights_fragment_maps:Ku,lights_fragment_end:qu,logdepthbuf_fragment:ju,logdepthbuf_pars_fragment:Zu,logdepthbuf_pars_vertex:Ju,logdepthbuf_vertex:$u,map_fragment:ef,map_pars_fragment:tf,map_particle_fragment:nf,map_particle_pars_fragment:rf,metalnessmap_fragment:sf,metalnessmap_pars_fragment:af,morphinstance_vertex:of,morphcolor_vertex:lf,morphnormal_vertex:cf,morphtarget_pars_vertex:hf,morphtarget_vertex:uf,normal_fragment_begin:ff,normal_fragment_maps:df,normal_pars_fragment:pf,normal_pars_vertex:mf,normal_vertex:Af,normalmap_pars_fragment:gf,clearcoat_normal_fragment_begin:_f,clearcoat_normal_fragment_maps:xf,clearcoat_pars_fragment:vf,iridescence_pars_fragment:Mf,opaque_fragment:Ef,packing:Sf,premultiplied_alpha_fragment:wf,project_vertex:yf,dithering_fragment:Tf,dithering_pars_fragment:bf,roughnessmap_fragment:Rf,roughnessmap_pars_fragment:Cf,shadowmap_pars_fragment:Df,shadowmap_pars_vertex:Pf,shadowmap_vertex:Uf,shadowmask_pars_fragment:Lf,skinbase_vertex:If,skinning_pars_vertex:Ff,skinning_vertex:Nf,skinnormal_vertex:Bf,specularmap_fragment:Of,specularmap_pars_fragment:zf,tonemapping_fragment:kf,tonemapping_pars_fragment:Hf,transmission_fragment:Vf,transmission_pars_fragment:Gf,uv_pars_fragment:Wf,uv_pars_vertex:Xf,uv_vertex:Qf,worldpos_vertex:Yf,background_vert:Kf,background_frag:qf,backgroundCube_vert:jf,backgroundCube_frag:Zf,cube_vert:Jf,cube_frag:$f,depth_vert:ed,depth_frag:td,distanceRGBA_vert:nd,distanceRGBA_frag:id,equirect_vert:rd,equirect_frag:sd,linedashed_vert:ad,linedashed_frag:od,meshbasic_vert:ld,meshbasic_frag:cd,meshlambert_vert:hd,meshlambert_frag:ud,meshmatcap_vert:fd,meshmatcap_frag:dd,meshnormal_vert:pd,meshnormal_frag:md,meshphong_vert:Ad,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:xd,meshtoon_vert:vd,meshtoon_frag:Md,points_vert:Ed,points_frag:Sd,shadow_vert:wd,shadow_frag:yd,sprite_vert:Td,sprite_frag:bd},le={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},on={basic:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Lt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Lt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Lt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ne(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Lt([le.points,le.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Lt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Lt([le.common,le.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Lt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Lt([le.sprite,le.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Lt([le.common,le.displacementmap,{referencePosition:{value:new h},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Lt([le.lights,le.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};on.physical={uniforms:Lt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Br={r:0,b:0,g:0},Yn=new Ft,Rd=new ot;function Cd(i,e,t,n,r,s,a){const o=new Ne(0);let c=s===!0?0:1,l,f,u=null,p=0,m=null;function g(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?t:e).get(S)),S}function x(y){let S=!1;const L=g(y);L===null?d(o,c):L&&L.isColor&&(d(L,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(y,S){const L=g(S);L&&(L.isCubeTexture||L.mapping===ts)?(f===void 0&&(f=new Kt(new Oi(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Ii(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(T,P,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Yn.copy(S.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),f.material.uniforms.envMap.value=L,f.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Rd.makeRotationFromEuler(Yn)),f.material.toneMapped=Ye.getTransfer(L.colorSpace)!==Je,(u!==L||p!==L.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,u=L,p=L.version,m=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Kt(new ss(2,2),new On({name:"BackgroundMaterial",uniforms:Ii(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Ye.getTransfer(L.colorSpace)!==Je,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(u!==L||p!==L.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=L,p=L.version,m=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function d(y,S){y.getRGB(Br,kl(i)),n.buffers.color.setClear(Br.r,Br.g,Br.b,S,a)}function R(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),c=S,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,d(o,c)},render:x,addToRenderList:A,dispose:R}}function Dd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,a=!1;function o(M,b,W,G,V){let J=!1;const Y=u(G,W,b);s!==Y&&(s=Y,l(s.object)),J=m(M,G,W,V),J&&g(M,G,W,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(M,b,W,G),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function u(M,b,W){const G=W.wireframe===!0;let V=n[M.id];V===void 0&&(V={},n[M.id]=V);let J=V[b.id];J===void 0&&(J={},V[b.id]=J);let Y=J[G];return Y===void 0&&(Y=p(c()),J[G]=Y),Y}function p(M){const b=[],W=[],G=[];for(let V=0;V<t;V++)b[V]=0,W[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:W,attributeDivisors:G,object:M,attributes:{},index:null}}function m(M,b,W,G){const V=s.attributes,J=b.attributes;let Y=0;const re=W.getAttributes();for(const X in re)if(re[X].location>=0){const pe=V[X];let ye=J[X];if(ye===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),pe===void 0||pe.attribute!==ye||ye&&pe.data!==ye.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function g(M,b,W,G){const V={},J=b.attributes;let Y=0;const re=W.getAttributes();for(const X in re)if(re[X].location>=0){let pe=J[X];pe===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor));const ye={};ye.attribute=pe,pe&&pe.data&&(ye.data=pe.data),V[X]=ye,Y++}s.attributes=V,s.attributesNum=Y,s.index=G}function x(){const M=s.newAttributes;for(let b=0,W=M.length;b<W;b++)M[b]=0}function A(M){d(M,0)}function d(M,b){const W=s.newAttributes,G=s.enabledAttributes,V=s.attributeDivisors;W[M]=1,G[M]===0&&(i.enableVertexAttribArray(M),G[M]=1),V[M]!==b&&(i.vertexAttribDivisor(M,b),V[M]=b)}function R(){const M=s.newAttributes,b=s.enabledAttributes;for(let W=0,G=b.length;W<G;W++)b[W]!==M[W]&&(i.disableVertexAttribArray(W),b[W]=0)}function y(M,b,W,G,V,J,Y){Y===!0?i.vertexAttribIPointer(M,b,W,V,J):i.vertexAttribPointer(M,b,W,G,V,J)}function S(M,b,W,G){x();const V=G.attributes,J=W.getAttributes(),Y=b.defaultAttributeValues;for(const re in J){const X=J[re];if(X.location>=0){let ce=V[re];if(ce===void 0&&(re==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),re==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor)),ce!==void 0){const pe=ce.normalized,ye=ce.itemSize,ke=e.get(ce);if(ke===void 0)continue;const lt=ke.buffer,tt=ke.type,q=ke.bytesPerElement,he=tt===i.INT||tt===i.UNSIGNED_INT||ce.gpuType===Ha;if(ce.isInterleavedBufferAttribute){const ae=ce.data,Ce=ae.stride,De=ce.offset;if(ae.isInstancedInterleavedBuffer){for(let Ie=0;Ie<X.locationSize;Ie++)d(X.location+Ie,ae.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ie=0;Ie<X.locationSize;Ie++)A(X.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Ie=0;Ie<X.locationSize;Ie++)y(X.location+Ie,ye/X.locationSize,tt,pe,Ce*q,(De+ye/X.locationSize*Ie)*q,he)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<X.locationSize;ae++)d(X.location+ae,ce.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<X.locationSize;ae++)A(X.location+ae);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ae=0;ae<X.locationSize;ae++)y(X.location+ae,ye/X.locationSize,tt,pe,ye*q,ye/X.locationSize*ae*q,he)}}else if(Y!==void 0){const pe=Y[re];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}R()}function L(){B();for(const M in n){const b=n[M];for(const W in b){const G=b[W];for(const V in G)f(G[V].object),delete G[V];delete b[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const b=n[M.id];for(const W in b){const G=b[W];for(const V in G)f(G[V].object),delete G[V];delete b[W]}delete n[M.id]}function P(M){for(const b in n){const W=n[b];if(W[M.id]===void 0)continue;const G=W[M.id];for(const V in G)f(G[V].object),delete G[V];delete W[M.id]}}function B(){E(),a=!0,s!==r&&(s=r,l(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:B,resetDefaultState:E,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:A,disableUnusedAttributes:R}}function Pd(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,u){u!==0&&(i.drawArraysInstanced(n,l,f,u),t.update(f,n,u))}function o(l,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,u);let m=0;for(let g=0;g<u;g++)m+=f[g];t.update(m,n,1)}function c(l,f,u,p){if(u===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],f[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,f,0,p,0,u);let g=0;for(let x=0;x<u;x++)g+=f[x]*p[x];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Ud(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==sn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const B=P===rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==un&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==En&&!B)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const u=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),A=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:A,maxAttributes:d,maxVertexUniforms:R,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:L,maxSamples:T}}function Ld(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qn,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||r;return r=p,n=u.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){t=f(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,x=u.clipIntersection,A=u.clipShadows,d=i.get(u);if(!r||g===null||g.length===0||s&&!A)s?f(null):l();else{const R=s?0:n,y=R*4;let S=d.clippingState||null;c.value=S,S=f(g,p,y,m);for(let L=0;L!==y;++L)S[L]=t[L];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,p,m,g){const x=u!==null?u.length:0;let A=null;if(x!==0){if(A=c.value,g!==!0||A===null){const d=m+x*4,R=p.matrixWorldInverse;o.getNormalMatrix(R),(A===null||A.length<d)&&(A=new Float32Array(d));for(let y=0,S=m;y!==x;++y,S+=4)a.copy(u[y]).applyMatrix4(R,o),a.normal.toArray(A,S),A[S+3]=a.constant}c.value=A,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,A}}function Id(i){let e=new WeakMap;function t(a,o){return o===aa?a.mapping=Pi:o===oa&&(a.mapping=Ui),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===aa||o===oa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new wh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const wi=4,Qo=[.125,.215,.35,.446,.526,.582],Jn=20,Vs=new Hh,Yo=new Ne;let Gs=null,Ws=0,Xs=0,Qs=!1;const jn=(1+Math.sqrt(5))/2,Si=1/jn,Ko=[new h(-jn,Si,0),new h(jn,Si,0),new h(-Si,0,jn),new h(Si,0,jn),new h(0,jn,-Si),new h(0,jn,Si),new h(-1,1,-1),new h(1,1,-1),new h(-1,1,1),new h(1,1,1)],Fd=new h;class qo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Fd}=s;Gs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gs,Ws,Xs),this._renderer.xr.enabled=Qs,e.scissorTest=!1,Or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gs=this._renderer.getRenderTarget(),Ws=this._renderer.getActiveCubeFace(),Xs=this._renderer.getActiveMipmapLevel(),Qs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:rr,format:sn,colorSpace:Li,depthBuffer:!1},r=jo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Nd(s)),this._blurMaterial=Bd(s,e,t)}return r}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Vs)}_sceneToCubeUV(e,t,n,r,s){const c=new Yt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,p=u.autoClear,m=u.toneMapping;u.getClearColor(Yo),u.toneMapping=Nn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const x=new bt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),A=new Kt(new Oi,x);let d=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,d=!0):(x.color.copy(Yo),d=!0);for(let y=0;y<6;y++){const S=y%3;S===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[y],s.y,s.z)):S===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[y]));const L=this._cubeSize;Or(r,S*L,y>2?L:0,L,L),u.setRenderTarget(r),d&&u.render(A,c),u.render(e,c)}A.geometry.dispose(),A.material.dispose(),u.toneMapping=m,u.autoClear=p,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Pi||e.mapping===Ui;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Kt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Or(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Vs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ko[(r-s-1)%Ko.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Kt(this._lodPlanes[r],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Jn-1),x=s/g,A=isFinite(s)?1+Math.floor(f*x):Jn;A>Jn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Jn}`);const d=[];let R=0;for(let P=0;P<Jn;++P){const B=P/x,E=Math.exp(-B*B/2);d.push(E),P===0?R+=E:P<A&&(R+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/R;p.envMap.value=e.texture,p.samples.value=A,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;const S=this._sizeLods[r],L=3*S*(r>y-wi?r-y+wi:0),T=4*(this._cubeSize-S);Or(t,L,T,3*S,2*S),c.setRenderTarget(t),c.render(u,Vs)}}function Nd(i){const e=[],t=[],n=[];let r=i;const s=i-wi+1+Qo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-wi?c=Qo[a-i+wi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,u=1+l,p=[f,f,u,f,u,u,f,f,u,u,f,u],m=6,g=6,x=3,A=2,d=1,R=new Float32Array(x*g*m),y=new Float32Array(A*g*m),S=new Float32Array(d*g*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,B=T>2?0:-1,E=[P,B,0,P+2/3,B,0,P+2/3,B+1,0,P,B,0,P+2/3,B+1,0,P,B+1,0];R.set(E,x*g*T),y.set(p,A*g*T);const M=[T,T,T,T,T,T];S.set(M,d*g*T)}const L=new Nt;L.setAttribute("position",new hn(R,x)),L.setAttribute("uv",new hn(y,A)),L.setAttribute("faceIndex",new hn(S,d)),e.push(L),r>wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function jo(i,e,t){const n=new ri(i,e,t);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Or(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Bd(i,e,t){const n=new Float32Array(Jn),r=new h(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Zo(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Jo(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function $a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Od(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===aa||c===oa,f=c===Pi||c===Ui;if(l||f){let u=e.get(o);const p=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new qo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return l&&m&&m.height>0||f&&m&&r(m)?(t===null&&(t=new qo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function zd(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&bi("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function kd(i,e,t,n){const r={},s=new WeakMap;function a(u){const p=u.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(u,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,t.memory.geometries++),p}function c(u){const p=u.attributes;for(const m in p)e.update(p[m],i.ARRAY_BUFFER)}function l(u){const p=[],m=u.index,g=u.attributes.position;let x=0;if(m!==null){const R=m.array;x=m.version;for(let y=0,S=R.length;y<S;y+=3){const L=R[y+0],T=R[y+1],P=R[y+2];p.push(L,T,T,P,P,L)}}else if(g!==void 0){const R=g.array;x=g.version;for(let y=0,S=R.length/3-1;y<S;y+=3){const L=y+0,T=y+1,P=y+2;p.push(L,T,T,P,P,L)}}else return;const A=new(Fl(p)?zl:Ol)(p,1);A.version=x;const d=s.get(u);d&&e.remove(d),s.set(u,A)}function f(u){const p=s.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:f}}function Hd(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,s,p*a),t.update(m,n,1)}function l(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,p*a,g),t.update(m,n,g))}function f(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,g);let A=0;for(let d=0;d<g;d++)A+=m[d];t.update(A,n,1)}function u(p,m,g,x){if(g===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let d=0;d<p.length;d++)l(p[d]/a,m[d],x[d]);else{A.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,x,0,g);let d=0;for(let R=0;R<g;R++)d+=m[R]*x[R];t.update(d,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Vd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Gd(i,e,t){const n=new WeakMap,r=new et;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=f!==void 0?f.length:0;let p=n.get(o);if(p===void 0||p.count!==u){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let S=o.attributes.position.count*y,L=1;S>e.maxTextureSize&&(L=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const T=new Float32Array(S*L*4*u),P=new Nl(T,S,L,u);P.type=En,P.needsUpdate=!0;const B=y*4;for(let M=0;M<u;M++){const b=A[M],W=d[M],G=R[M],V=S*L*4*M;for(let J=0;J<b.count;J++){const Y=J*B;m===!0&&(r.fromBufferAttribute(b,J),T[V+Y+0]=r.x,T[V+Y+1]=r.y,T[V+Y+2]=r.z,T[V+Y+3]=0),g===!0&&(r.fromBufferAttribute(W,J),T[V+Y+4]=r.x,T[V+Y+5]=r.y,T[V+Y+6]=r.z,T[V+Y+7]=0),x===!0&&(r.fromBufferAttribute(G,J),T[V+Y+8]=r.x,T[V+Y+9]=r.y,T[V+Y+10]=r.z,T[V+Y+11]=G.itemSize===4?r.w:1)}}p={count:u,texture:P,size:new We(S,L)},n.set(o,p),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<l.length;x++)m+=l[x];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Wd(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==l&&(p.update(),r.set(p,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Yl=new Rt,$o=new Wl(1,1),Kl=new Nl,ql=new oh,jl=new Vl,el=[],tl=[],nl=new Float32Array(16),il=new Float32Array(9),rl=new Float32Array(4);function zi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=el[r];if(s===void 0&&(s=new Float32Array(r),el[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function At(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function as(i,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Xd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function Yd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(At(t,n))return;rl.set(n),i.uniformMatrix2fv(this.addr,!1,rl),gt(t,n)}}function jd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(At(t,n))return;il.set(n),i.uniformMatrix3fv(this.addr,!1,il),gt(t,n)}}function Zd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(At(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(At(t,n))return;nl.set(n),i.uniformMatrix4fv(this.addr,!1,nl),gt(t,n)}}function Jd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function tp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function ap(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($o.compareFunction=Il,s=$o):s=Yl,t.setTexture2D(e||s,r)}function op(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ql,r)}function lp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||jl,r)}function cp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Kl,r)}function hp(i){switch(i){case 5126:return Xd;case 35664:return Qd;case 35665:return Yd;case 35666:return Kd;case 35674:return qd;case 35675:return jd;case 35676:return Zd;case 5124:case 35670:return Jd;case 35667:case 35671:return $d;case 35668:case 35672:return ep;case 35669:case 35673:return tp;case 5125:return np;case 36294:return ip;case 36295:return rp;case 36296:return sp;case 35678:case 36198:case 36298:case 36306:case 35682:return ap;case 35679:case 36299:case 36307:return op;case 35680:case 36300:case 36308:case 36293:return lp;case 36289:case 36303:case 36311:case 36292:return cp}}function up(i,e){i.uniform1fv(this.addr,e)}function fp(i,e){const t=zi(e,this.size,2);i.uniform2fv(this.addr,t)}function dp(i,e){const t=zi(e,this.size,3);i.uniform3fv(this.addr,t)}function pp(i,e){const t=zi(e,this.size,4);i.uniform4fv(this.addr,t)}function mp(i,e){const t=zi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ap(i,e){const t=zi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gp(i,e){const t=zi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _p(i,e){i.uniform1iv(this.addr,e)}function xp(i,e){i.uniform2iv(this.addr,e)}function vp(i,e){i.uniform3iv(this.addr,e)}function Mp(i,e){i.uniform4iv(this.addr,e)}function Ep(i,e){i.uniform1uiv(this.addr,e)}function Sp(i,e){i.uniform2uiv(this.addr,e)}function wp(i,e){i.uniform3uiv(this.addr,e)}function yp(i,e){i.uniform4uiv(this.addr,e)}function Tp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);At(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yl,s[a])}function bp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);At(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ql,s[a])}function Rp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);At(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||jl,s[a])}function Cp(i,e,t){const n=this.cache,r=e.length,s=as(t,r);At(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Kl,s[a])}function Dp(i){switch(i){case 5126:return up;case 35664:return fp;case 35665:return dp;case 35666:return pp;case 35674:return mp;case 35675:return Ap;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return xp;case 35668:case 35672:return vp;case 35669:case 35673:return Mp;case 5125:return Ep;case 36294:return Sp;case 36295:return wp;case 36296:return yp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Rp;case 36289:case 36303:case 36311:case 36292:return Cp}}class Pp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=hp(t.type)}}class Up{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dp(t.type)}}class Lp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function sl(i,e){i.seq.push(e),i.map[e.id]=e}function Ip(i,e,t){const n=i.name,r=n.length;for(Ys.lastIndex=0;;){const s=Ys.exec(n),a=Ys.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){sl(t,l===void 0?new Pp(o,i,e):new Up(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Lp(o),sl(t,u)),t=u}}}class Qr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ip(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function al(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fp=37297;let Np=0;function Bp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ol=new Oe;function Op(i){Ye._getMatrix(ol,Ye.workingColorSpace,i);const e=`mat3( ${ol.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ll(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Bp(i.getShaderSource(e),o)}else return s}function zp(i,e){const t=Op(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function kp(i,e){let t;switch(e){case Nc:t="Linear";break;case Bc:t="Reinhard";break;case Oc:t="Cineon";break;case zc:t="ACESFilmic";break;case Hc:t="AgX";break;case Vc:t="Neutral";break;case kc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const zr=new h;function Hp(){Ye.getLuminanceCoefficients(zr);const i=zr.x.toFixed(4),e=zr.y.toFixed(4),t=zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function Gp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ji(i){return i!==""}function cl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(i){return i.replace(Xp,Yp)}const Qp=new Map;function Yp(i,e){let t=ze[e];if(t===void 0){const n=Qp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oa(t)}const Kp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ul(i){return i.replace(Kp,qp)}function qp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function jp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===wl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Zp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Ui:e="ENVMAP_TYPE_CUBE";break;case ts:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Jp(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Ui&&(e="ENVMAP_MODE_REFRACTION"),e}function $p(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case es:e="ENVMAP_BLENDING_MULTIPLY";break;case Ic:e="ENVMAP_BLENDING_MIX";break;case Fc:e="ENVMAP_BLENDING_ADD";break}return e}function em(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=jp(t),l=Zp(t),f=Jp(t),u=$p(t),p=em(t),m=Vp(t),g=Gp(s),x=r.createProgram();let A,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),A.length>0&&(A+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),d.length>0&&(d+=`
`)):(A=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),d=[fl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?kp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zp("linearToOutputTexel",t.outputColorSpace),Hp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=Oa(a),a=cl(a,t),a=hl(a,t),o=Oa(o),o=cl(o,t),o=hl(o,t),a=ul(a),o=ul(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,A=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,d=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=R+A+a,S=R+d+o,L=al(r,r.VERTEX_SHADER,y),T=al(r,r.FRAGMENT_SHADER,S);r.attachShader(x,L),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(b){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(x)||"",G=r.getShaderInfoLog(L)||"",V=r.getShaderInfoLog(T)||"",J=W.trim(),Y=G.trim(),re=V.trim();let X=!0,ce=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,L,T);else{const pe=ll(r,L,"vertex"),ye=ll(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+J+`
`+pe+`
`+ye)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||re==="")&&(ce=!1);ce&&(b.diagnostics={runnable:X,programLog:J,vertexShader:{log:Y,prefix:A},fragmentShader:{log:re,prefix:d}})}r.deleteShader(L),r.deleteShader(T),B=new Qr(r,x),E=Wp(r,x)}let B;this.getUniforms=function(){return B===void 0&&P(this),B};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Fp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Np++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}let nm=0;class im{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rm(e),t.set(e,n)),n}}class rm{constructor(e){this.id=nm++,this.code=e,this.usedTimes=0}}function sm(i,e,t,n,r,s,a){const o=new qa,c=new im,l=new Set,f=[],u=r.logarithmicDepthBuffer,p=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function A(E,M,b,W,G){const V=W.fog,J=G.geometry,Y=E.isMeshStandardMaterial?W.environment:null,re=(E.isMeshStandardMaterial?t:e).get(E.envMap||Y),X=re&&re.mapping===ts?re.image.height:null,ce=g[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const pe=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ye=pe!==void 0?pe.length:0;let ke=0;J.morphAttributes.position!==void 0&&(ke=1),J.morphAttributes.normal!==void 0&&(ke=2),J.morphAttributes.color!==void 0&&(ke=3);let lt,tt,q,he;if(ce){const je=on[ce];lt=je.vertexShader,tt=je.fragmentShader}else lt=E.vertexShader,tt=E.fragmentShader,c.update(E),q=c.getVertexShaderID(E),he=c.getFragmentShaderID(E);const ae=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),De=G.isInstancedMesh===!0,Ie=G.isBatchedMesh===!0,dt=!!E.map,Xe=!!E.matcap,C=!!re,it=!!E.aoMap,be=!!E.lightMap,Ke=!!E.bumpMap,we=!!E.normalMap,ct=!!E.displacementMap,ge=!!E.emissiveMap,He=!!E.metalnessMap,_t=!!E.roughnessMap,pt=E.anisotropy>0,w=E.clearcoat>0,_=E.dispersion>0,O=E.iridescence>0,K=E.sheen>0,$=E.transmission>0,Q=pt&&!!E.anisotropyMap,Se=w&&!!E.clearcoatMap,se=w&&!!E.clearcoatNormalMap,ve=w&&!!E.clearcoatRoughnessMap,Me=O&&!!E.iridescenceMap,ne=O&&!!E.iridescenceThicknessMap,de=K&&!!E.sheenColorMap,Ue=K&&!!E.sheenRoughnessMap,Ee=!!E.specularMap,ue=!!E.specularColorMap,Be=!!E.specularIntensityMap,U=$&&!!E.transmissionMap,ie=$&&!!E.thicknessMap,oe=!!E.gradientMap,Ae=!!E.alphaMap,ee=E.alphaTest>0,j=!!E.alphaHash,xe=!!E.extensions;let Fe=Nn;E.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Fe=i.toneMapping);const rt={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:lt,fragmentShader:tt,defines:E.defines,customVertexShaderID:q,customFragmentShaderID:he,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Ie,batchingColor:Ie&&G._colorsTexture!==null,instancing:De,instancingColor:De&&G.instanceColor!==null,instancingMorph:De&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Li,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:Xe,envMap:C,envMapMode:C&&re.mapping,envMapCubeUVHeight:X,aoMap:it,lightMap:be,bumpMap:Ke,normalMap:we,displacementMap:p&&ct,emissiveMap:ge,normalMapObjectSpace:we&&E.normalMapType===Xc,normalMapTangentSpace:we&&E.normalMapType===Ya,metalnessMap:He,roughnessMap:_t,anisotropy:pt,anisotropyMap:Q,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:se,clearcoatRoughnessMap:ve,dispersion:_,iridescence:O,iridescenceMap:Me,iridescenceThicknessMap:ne,sheen:K,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:Ee,specularColorMap:ue,specularIntensityMap:Be,transmission:$,transmissionMap:U,thicknessMap:ie,gradientMap:oe,opaque:E.transparent===!1&&E.blending===Ti&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ee,alphaHash:j,combine:E.combine,mapUv:dt&&x(E.map.channel),aoMapUv:it&&x(E.aoMap.channel),lightMapUv:be&&x(E.lightMap.channel),bumpMapUv:Ke&&x(E.bumpMap.channel),normalMapUv:we&&x(E.normalMap.channel),displacementMapUv:ct&&x(E.displacementMap.channel),emissiveMapUv:ge&&x(E.emissiveMap.channel),metalnessMapUv:He&&x(E.metalnessMap.channel),roughnessMapUv:_t&&x(E.roughnessMap.channel),anisotropyMapUv:Q&&x(E.anisotropyMap.channel),clearcoatMapUv:Se&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(E.sheenRoughnessMap.channel),specularMapUv:Ee&&x(E.specularMap.channel),specularColorMapUv:ue&&x(E.specularColorMap.channel),specularIntensityMapUv:Be&&x(E.specularIntensityMap.channel),transmissionMapUv:U&&x(E.transmissionMap.channel),thicknessMapUv:ie&&x(E.thicknessMap.channel),alphaMapUv:Ae&&x(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(we||pt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(dt||Ae),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ce,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===Je,decodeVideoTextureEmissive:ge&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===Je,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===Ht,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const b in E.defines)M.push(b),M.push(E.defines[b]);return E.isRawShaderMaterial===!1&&(R(M,E),y(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function R(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function y(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function S(E){const M=g[E.type];let b;if(M){const W=on[M];b=vh.clone(W.uniforms)}else b=E.uniforms;return b}function L(E,M){let b;for(let W=0,G=f.length;W<G;W++){const V=f[W];if(V.cacheKey===M){b=V,++b.usedTimes;break}}return b===void 0&&(b=new tm(i,M,E,s),f.push(b)),b}function T(E){if(--E.usedTimes===0){const M=f.indexOf(E);f[M]=f[f.length-1],f.pop(),E.destroy()}}function P(E){c.remove(E)}function B(){c.dispose()}return{getParameters:A,getProgramCacheKey:d,getUniforms:S,acquireProgram:L,releaseProgram:T,releaseShaderCache:P,programs:f,dispose:B}}function am(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function om(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function pl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,p,m,g,x,A){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:x,group:A},i[e]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=A),e++,d}function o(u,p,m,g,x,A){const d=a(u,p,m,g,x,A);m.transmission>0?n.push(d):m.transparent===!0?r.push(d):t.push(d)}function c(u,p,m,g,x,A){const d=a(u,p,m,g,x,A);m.transmission>0?n.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function l(u,p){t.length>1&&t.sort(u||om),n.length>1&&n.sort(p||dl),r.length>1&&r.sort(p||dl)}function f(){for(let u=e,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function lm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new pl,i.set(n,[a])):r>=s.length?(a=new pl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new h,color:new Ne};break;case"SpotLight":t={position:new h,direction:new h,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new h,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new h,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new h,halfWidth:new h,halfHeight:new h};break}return i[e.id]=t,t}}}function hm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let um=0;function fm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dm(i){const e=new cm,t=hm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new h);const r=new h,s=new ot,a=new ot;function o(l){let f=0,u=0,p=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,x=0,A=0,d=0,R=0,y=0,S=0,L=0,T=0,P=0;l.sort(fm);for(let E=0,M=l.length;E<M;E++){const b=l[E],W=b.color,G=b.intensity,V=b.distance,J=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)f+=W.r*G,u+=W.g*G,p+=W.b*G;else if(b.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(b.sh.coefficients[Y],G);P++}else if(b.isDirectionalLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const re=b.shadow,X=t.get(b);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=J,n.directionalShadowMatrix[m]=b.shadow.matrix,R++}n.directional[m]=Y,m++}else if(b.isSpotLight){const Y=e.get(b);Y.position.setFromMatrixPosition(b.matrixWorld),Y.color.copy(W).multiplyScalar(G),Y.distance=V,Y.coneCos=Math.cos(b.angle),Y.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),Y.decay=b.decay,n.spot[x]=Y;const re=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,re.updateMatrices(b),b.castShadow&&T++),n.spotLightMatrix[x]=re.matrix,b.castShadow){const X=t.get(b);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=J,S++}x++}else if(b.isRectAreaLight){const Y=e.get(b);Y.color.copy(W).multiplyScalar(G),Y.halfWidth.set(b.width*.5,0,0),Y.halfHeight.set(0,b.height*.5,0),n.rectArea[A]=Y,A++}else if(b.isPointLight){const Y=e.get(b);if(Y.color.copy(b.color).multiplyScalar(b.intensity),Y.distance=b.distance,Y.decay=b.decay,b.castShadow){const re=b.shadow,X=t.get(b);X.shadowIntensity=re.intensity,X.shadowBias=re.bias,X.shadowNormalBias=re.normalBias,X.shadowRadius=re.radius,X.shadowMapSize=re.mapSize,X.shadowCameraNear=re.camera.near,X.shadowCameraFar=re.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=Y,g++}else if(b.isHemisphereLight){const Y=e.get(b);Y.skyColor.copy(b.color).multiplyScalar(G),Y.groundColor.copy(b.groundColor).multiplyScalar(G),n.hemi[d]=Y,d++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=p;const B=n.hash;(B.directionalLength!==m||B.pointLength!==g||B.spotLength!==x||B.rectAreaLength!==A||B.hemiLength!==d||B.numDirectionalShadows!==R||B.numPointShadows!==y||B.numSpotShadows!==S||B.numSpotMaps!==L||B.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=A,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=S+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,B.directionalLength=m,B.pointLength=g,B.spotLength=x,B.rectAreaLength=A,B.hemiLength=d,B.numDirectionalShadows=R,B.numPointShadows=y,B.numSpotShadows=S,B.numSpotMaps=L,B.numLightProbes=P,n.version=um++)}function c(l,f){let u=0,p=0,m=0,g=0,x=0;const A=f.matrixWorldInverse;for(let d=0,R=l.length;d<R;d++){const y=l[d];if(y.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(A),u++}else if(y.isSpotLight){const S=n.spot[m];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(A),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(A),m++}else if(y.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(A),a.identity(),s.copy(y.matrixWorld),s.premultiply(A),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=n.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(A),p++}else if(y.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(A),x++}}}return{setup:o,setupView:c,state:n}}function ml(i){const e=new dm(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function pm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ml(i),e.set(r,[o])):s>=a.length?(o=new ml(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const mm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gm(i,e,t){let n=new Za;const r=new We,s=new We,a=new et,o=new Ph({depthPacking:Wc}),c=new Uh,l={},f=t.maxTextureSize,u={[Bn]:Ht,[Ht]:Bn,[Mn]:Mn},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:mm,fragmentShader:Am}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kt(g,p),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wl;let d=this.type;this.render=function(T,P,B){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Fn),W.buffers.depth.getReversed()?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const G=d!==vn&&this.type===vn,V=d===vn&&this.type!==vn;for(let J=0,Y=T.length;J<Y;J++){const re=T[J],X=re.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ce=X.getFrameExtents();if(r.multiply(ce),s.copy(X.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/ce.x),r.x=s.x*ce.x,X.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/ce.y),r.y=s.y*ce.y,X.mapSize.y=s.y)),X.map===null||G===!0||V===!0){const ye=this.type!==vn?{minFilter:Vt,magFilter:Vt}:{};X.map!==null&&X.map.dispose(),X.map=new ri(r.x,r.y,ye),X.map.texture.name=re.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const pe=X.getViewportCount();for(let ye=0;ye<pe;ye++){const ke=X.getViewport(ye);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),W.viewport(a),X.updateMatrices(re,ye),n=X.getFrustum(),S(P,B,X.camera,re,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&R(X,B),X.needsUpdate=!1}d=this.type,A.needsUpdate=!1,i.setRenderTarget(E,M,b)};function R(T,P){const B=e.update(x);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ri(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,B,p,x,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,B,m,x,null)}function y(T,P,B,E){let M=null;const b=B.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)M=b;else if(M=B.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=M.uuid,G=P.uuid;let V=l[W];V===void 0&&(V={},l[W]=V);let J=V[G];J===void 0&&(J=M.clone(),V[G]=J,P.addEventListener("dispose",L)),M=J}if(M.visible=P.visible,M.wireframe=P.wireframe,E===vn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:u[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=B}return M}function S(T,P,B,E,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===vn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,T.matrixWorld);const G=e.update(T),V=T.material;if(Array.isArray(V)){const J=G.groups;for(let Y=0,re=J.length;Y<re;Y++){const X=J[Y],ce=V[X.materialIndex];if(ce&&ce.visible){const pe=y(T,ce,E,M);T.onBeforeShadow(i,T,P,B,G,pe,X),i.renderBufferDirect(B,null,G,pe,T,X),T.onAfterShadow(i,T,P,B,G,pe,X)}}}else if(V.visible){const J=y(T,V,E,M);T.onBeforeShadow(i,T,P,B,G,J,null),i.renderBufferDirect(B,null,G,J,T,null),T.onAfterShadow(i,T,P,B,G,J,null)}}const W=T.children;for(let G=0,V=W.length;G<V;G++)S(W[G],P,B,E,M)}function L(T){T.target.removeEventListener("dispose",L);for(const B in l){const E=l[B],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const _m={[$s]:ea,[ta]:ra,[na]:sa,[Di]:ia,[ea]:$s,[ra]:ta,[sa]:na,[ia]:Di};function xm(i,e){function t(){let U=!1;const ie=new et;let oe=null;const Ae=new et(0,0,0,0);return{setMask:function(ee){oe!==ee&&!U&&(i.colorMask(ee,ee,ee,ee),oe=ee)},setLocked:function(ee){U=ee},setClear:function(ee,j,xe,Fe,rt){rt===!0&&(ee*=Fe,j*=Fe,xe*=Fe),ie.set(ee,j,xe,Fe),Ae.equals(ie)===!1&&(i.clearColor(ee,j,xe,Fe),Ae.copy(ie))},reset:function(){U=!1,oe=null,Ae.set(-1,0,0,0)}}}function n(){let U=!1,ie=!1,oe=null,Ae=null,ee=null;return{setReversed:function(j){if(ie!==j){const xe=e.get("EXT_clip_control");j?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=j;const Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return ie},setTest:function(j){j?ae(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(j){oe!==j&&!U&&(i.depthMask(j),oe=j)},setFunc:function(j){if(ie&&(j=_m[j]),Ae!==j){switch(j){case $s:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=j}},setLocked:function(j){U=j},setClear:function(j){ee!==j&&(ie&&(j=1-j),i.clearDepth(j),ee=j)},reset:function(){U=!1,oe=null,Ae=null,ee=null,ie=!1}}}function r(){let U=!1,ie=null,oe=null,Ae=null,ee=null,j=null,xe=null,Fe=null,rt=null;return{setTest:function(je){U||(je?ae(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(je){ie!==je&&!U&&(i.stencilMask(je),ie=je)},setFunc:function(je,dn,an){(oe!==je||Ae!==dn||ee!==an)&&(i.stencilFunc(je,dn,an),oe=je,Ae=dn,ee=an)},setOp:function(je,dn,an){(j!==je||xe!==dn||Fe!==an)&&(i.stencilOp(je,dn,an),j=je,xe=dn,Fe=an)},setLocked:function(je){U=je},setClear:function(je){rt!==je&&(i.clearStencil(je),rt=je)},reset:function(){U=!1,ie=null,oe=null,Ae=null,ee=null,j=null,xe=null,Fe=null,rt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},u={},p=new WeakMap,m=[],g=null,x=!1,A=null,d=null,R=null,y=null,S=null,L=null,T=null,P=new Ne(0,0,0),B=0,E=!1,M=null,b=null,W=null,G=null,V=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,re=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=re>=1):X.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=re>=2);let ce=null,pe={};const ye=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),lt=new et().fromArray(ye),tt=new et().fromArray(ke);function q(U,ie,oe,Ae){const ee=new Uint8Array(4),j=i.createTexture();i.bindTexture(U,j),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<oe;xe++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ee):i.texImage2D(ie+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ee);return j}const he={};he[i.TEXTURE_2D]=q(i.TEXTURE_2D,i.TEXTURE_2D,1),he[i.TEXTURE_CUBE_MAP]=q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[i.TEXTURE_2D_ARRAY]=q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),he[i.TEXTURE_3D]=q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(Di),Ke(!1),we(lo),ae(i.CULL_FACE),it(Fn);function ae(U){f[U]!==!0&&(i.enable(U),f[U]=!0)}function Ce(U){f[U]!==!1&&(i.disable(U),f[U]=!1)}function De(U,ie){return u[U]!==ie?(i.bindFramebuffer(U,ie),u[U]=ie,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Ie(U,ie){let oe=m,Ae=!1;if(U){oe=p.get(ie),oe===void 0&&(oe=[],p.set(ie,oe));const ee=U.textures;if(oe.length!==ee.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let j=0,xe=ee.length;j<xe;j++)oe[j]=i.COLOR_ATTACHMENT0+j;oe.length=ee.length,Ae=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(oe)}function dt(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Xe={[Zn]:i.FUNC_ADD,[gc]:i.FUNC_SUBTRACT,[_c]:i.FUNC_REVERSE_SUBTRACT};Xe[xc]=i.MIN,Xe[vc]=i.MAX;const C={[Mc]:i.ZERO,[Ec]:i.ONE,[Sc]:i.SRC_COLOR,[Zs]:i.SRC_ALPHA,[Cc]:i.SRC_ALPHA_SATURATE,[bc]:i.DST_COLOR,[yc]:i.DST_ALPHA,[wc]:i.ONE_MINUS_SRC_COLOR,[Js]:i.ONE_MINUS_SRC_ALPHA,[Rc]:i.ONE_MINUS_DST_COLOR,[Tc]:i.ONE_MINUS_DST_ALPHA,[Dc]:i.CONSTANT_COLOR,[Pc]:i.ONE_MINUS_CONSTANT_COLOR,[Uc]:i.CONSTANT_ALPHA,[Lc]:i.ONE_MINUS_CONSTANT_ALPHA};function it(U,ie,oe,Ae,ee,j,xe,Fe,rt,je){if(U===Fn){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(ae(i.BLEND),x=!0),U!==Ac){if(U!==A||je!==E){if((d!==Zn||S!==Zn)&&(i.blendEquation(i.FUNC_ADD),d=Zn,S=Zn),je)switch(U){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case uo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ho:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}R=null,y=null,L=null,T=null,P.set(0,0,0),B=0,A=U,E=je}return}ee=ee||ie,j=j||oe,xe=xe||Ae,(ie!==d||ee!==S)&&(i.blendEquationSeparate(Xe[ie],Xe[ee]),d=ie,S=ee),(oe!==R||Ae!==y||j!==L||xe!==T)&&(i.blendFuncSeparate(C[oe],C[Ae],C[j],C[xe]),R=oe,y=Ae,L=j,T=xe),(Fe.equals(P)===!1||rt!==B)&&(i.blendColor(Fe.r,Fe.g,Fe.b,rt),P.copy(Fe),B=rt),A=U,E=!1}function be(U,ie){U.side===Mn?Ce(i.CULL_FACE):ae(i.CULL_FACE);let oe=U.side===Ht;ie&&(oe=!oe),Ke(oe),U.blending===Ti&&U.transparent===!1?it(Fn):it(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Ae=U.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ge(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function we(U){U!==dc?(ae(i.CULL_FACE),U!==b&&(U===lo?i.cullFace(i.BACK):U===pc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),b=U}function ct(U){U!==W&&(Y&&i.lineWidth(U),W=U)}function ge(U,ie,oe){U?(ae(i.POLYGON_OFFSET_FILL),(G!==ie||V!==oe)&&(i.polygonOffset(ie,oe),G=ie,V=oe)):Ce(i.POLYGON_OFFSET_FILL)}function He(U){U?ae(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function _t(U){U===void 0&&(U=i.TEXTURE0+J-1),ce!==U&&(i.activeTexture(U),ce=U)}function pt(U,ie,oe){oe===void 0&&(ce===null?oe=i.TEXTURE0+J-1:oe=ce);let Ae=pe[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},pe[oe]=Ae),(Ae.type!==U||Ae.texture!==ie)&&(ce!==oe&&(i.activeTexture(oe),ce=oe),i.bindTexture(U,ie||he[U]),Ae.type=U,Ae.texture=ie)}function w(){const U=pe[ce];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ve(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function de(U){lt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),lt.copy(U))}function Ue(U){tt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),tt.copy(U))}function Ee(U,ie){let oe=l.get(ie);oe===void 0&&(oe=new WeakMap,l.set(ie,oe));let Ae=oe.get(U);Ae===void 0&&(Ae=i.getUniformBlockIndex(ie,U.name),oe.set(U,Ae))}function ue(U,ie){const Ae=l.get(ie).get(U);c.get(ie)!==Ae&&(i.uniformBlockBinding(ie,Ae,U.__bindingPointIndex),c.set(ie,Ae))}function Be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ce=null,pe={},u={},p=new WeakMap,m=[],g=null,x=!1,A=null,d=null,R=null,y=null,S=null,L=null,T=null,P=new Ne(0,0,0),B=0,E=!1,M=null,b=null,W=null,G=null,V=null,lt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:Ce,bindFramebuffer:De,drawBuffers:Ie,useProgram:dt,setBlending:it,setMaterial:be,setFlipSided:Ke,setCullFace:we,setLineWidth:ct,setPolygonOffset:ge,setScissorTest:He,activeTexture:_t,bindTexture:pt,unbindTexture:w,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:Me,texImage3D:ne,updateUBOMapping:Ee,uniformBlockBinding:ue,texStorage2D:se,texStorage3D:ve,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:Se,scissor:de,viewport:Ue,reset:Be}}function vm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,f=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,_){return m?new OffscreenCanvas(w,_):ir("canvas")}function x(w,_,O){let K=1;const $=pt(w);if(($.width>O||$.height>O)&&(K=O/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Q=Math.floor(K*$.width),Se=Math.floor(K*$.height);u===void 0&&(u=g(Q,Se));const se=_?g(Q,Se):u;return se.width=Q,se.height=Se,se.getContext("2d").drawImage(w,0,0,Q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Q+"x"+Se+")."),se}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),w;return w}function A(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,_,O,K,$=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Q=_;if(_===i.RED&&(O===i.FLOAT&&(Q=i.R32F),O===i.HALF_FLOAT&&(Q=i.R16F),O===i.UNSIGNED_BYTE&&(Q=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.R8UI),O===i.UNSIGNED_SHORT&&(Q=i.R16UI),O===i.UNSIGNED_INT&&(Q=i.R32UI),O===i.BYTE&&(Q=i.R8I),O===i.SHORT&&(Q=i.R16I),O===i.INT&&(Q=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Q=i.RG32F),O===i.HALF_FLOAT&&(Q=i.RG16F),O===i.UNSIGNED_BYTE&&(Q=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RG8UI),O===i.UNSIGNED_SHORT&&(Q=i.RG16UI),O===i.UNSIGNED_INT&&(Q=i.RG32UI),O===i.BYTE&&(Q=i.RG8I),O===i.SHORT&&(Q=i.RG16I),O===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),O===i.UNSIGNED_INT&&(Q=i.RGB32UI),O===i.BYTE&&(Q=i.RGB8I),O===i.SHORT&&(Q=i.RGB16I),O===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),O===i.UNSIGNED_INT&&(Q=i.RGBA32UI),O===i.BYTE&&(Q=i.RGBA8I),O===i.SHORT&&(Q=i.RGBA16I),O===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),_===i.RGBA){const Se=$?Yr:Ye.getTransfer(K);O===i.FLOAT&&(Q=i.RGBA32F),O===i.HALF_FLOAT&&(Q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Q=Se===Je?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function S(w,_){let O;return w?_===null||_===ii||_===er?O=i.DEPTH24_STENCIL8:_===En?O=i.DEPTH32F_STENCIL8:_===$i&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ii||_===er?O=i.DEPTH_COMPONENT24:_===En?O=i.DEPTH_COMPONENT32F:_===$i&&(O=i.DEPTH_COMPONENT16),O}function L(w,_){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==Vt&&w.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function T(w){const _=w.target;_.removeEventListener("dispose",T),B(_),_.isVideoTexture&&f.delete(_)}function P(w){const _=w.target;_.removeEventListener("dispose",P),M(_)}function B(w){const _=n.get(w);if(_.__webglInit===void 0)return;const O=w.source,K=p.get(O);if(K){const $=K[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(w),Object.keys(K).length===0&&p.delete(O)}n.remove(w)}function E(w){const _=n.get(w);i.deleteTexture(_.__webglTexture);const O=w.source,K=p.get(O);delete K[_.__cacheKey],a.memory.textures--}function M(w){const _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let $=0;$<_.__webglFramebuffer[K].length;$++)i.deleteFramebuffer(_.__webglFramebuffer[K][$]);else i.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)i.deleteFramebuffer(_.__webglFramebuffer[K]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=w.textures;for(let K=0,$=O.length;K<$;K++){const Q=n.get(O[K]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),a.memory.textures--),n.remove(O[K])}n.remove(w)}let b=0;function W(){b=0}function G(){const w=b;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function V(w){const _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function J(w,_){const O=n.get(w);if(w.isVideoTexture&&He(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(O,w,_);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function Y(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){he(O,w,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function re(w,_){const O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){he(O,w,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function X(w,_){const O=n.get(w);if(w.version>0&&O.__version!==w.version){ae(O,w,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}const ce={[yn]:i.REPEAT,[$n]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},pe={[Vt]:i.NEAREST,[ns]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[ds]:i.LINEAR_MIPMAP_NEAREST,[ei]:i.LINEAR_MIPMAP_LINEAR},ye={[Qc]:i.NEVER,[Jc]:i.ALWAYS,[Yc]:i.LESS,[Il]:i.LEQUAL,[Kc]:i.EQUAL,[Zc]:i.GEQUAL,[qc]:i.GREATER,[jc]:i.NOTEQUAL};function ke(w,_){if(_.type===En&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===ds||_.magFilter===mr||_.magFilter===ei||_.minFilter===ln||_.minFilter===ds||_.minFilter===mr||_.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ce[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==mr&&_.minFilter!==ei||_.type===En&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function lt(w,_){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",T));const K=_.source;let $=p.get(K);$===void 0&&($={},p.set(K,$));const Q=V(_);if(Q!==w.__cacheKey){$[Q]===void 0&&($[Q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[Q].usedTimes++;const Se=$[w.__cacheKey];Se!==void 0&&($[w.__cacheKey].usedTimes--,Se.usedTimes===0&&E(_)),w.__cacheKey=Q,w.__webglTexture=$[Q].texture}return O}function tt(w,_,O){return Math.floor(Math.floor(w/O)/_)}function q(w,_,O,K){const Q=w.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,K,_.data);else{Q.sort((ne,de)=>ne.start-de.start);let Se=0;for(let ne=1;ne<Q.length;ne++){const de=Q[Se],Ue=Q[ne],Ee=de.start+de.count,ue=tt(Ue.start,_.width,4),Be=tt(de.start,_.width,4);Ue.start<=Ee+1&&ue===Be&&tt(Ue.start+Ue.count-1,_.width,4)===ue?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++Se,Q[Se]=Ue)}Q.length=Se+1;const se=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Me=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ne=0,de=Q.length;ne<de;ne++){const Ue=Q[ne],Ee=Math.floor(Ue.start/4),ue=Math.ceil(Ue.count/4),Be=Ee%_.width,U=Math.floor(Ee/_.width),ie=ue,oe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Be),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,Be,U,ie,oe,O,K,_.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Me)}}function he(w,_,O){let K=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=i.TEXTURE_3D);const $=lt(w,_),Q=_.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);const Se=n.get(Q);if(Q.version!==Se.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const se=Ye.getPrimaries(Ye.workingColorSpace),ve=_.colorSpace===Ln?null:Ye.getPrimaries(_.colorSpace),Me=_.colorSpace===Ln||se===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=x(_.image,!1,r.maxTextureSize);ne=_t(_,ne);const de=s.convert(_.format,_.colorSpace),Ue=s.convert(_.type);let Ee=y(_.internalFormat,de,Ue,_.colorSpace,_.isVideoTexture);ke(K,_);let ue;const Be=_.mipmaps,U=_.isVideoTexture!==!0,ie=Se.__version===void 0||$===!0,oe=Q.dataReady,Ae=L(_,ne);if(_.isDepthTexture)Ee=S(_.format===nr,_.type),ie&&(U?t.texStorage2D(i.TEXTURE_2D,1,Ee,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Ee,ne.width,ne.height,0,de,Ue,null));else if(_.isDataTexture)if(Be.length>0){U&&ie&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Be[0].width,Be[0].height);for(let ee=0,j=Be.length;ee<j;ee++)ue=Be[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,Ue,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,de,Ue,ue.data);_.generateMipmaps=!1}else U?(ie&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ne.width,ne.height),oe&&q(_,ne,de,Ue)):t.texImage2D(i.TEXTURE_2D,0,Ee,ne.width,ne.height,0,de,Ue,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){U&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ee,Be[0].width,Be[0].height,ne.depth);for(let ee=0,j=Be.length;ee<j;ee++)if(ue=Be[ee],_.format!==sn)if(de!==null)if(U){if(oe)if(_.layerUpdates.size>0){const xe=Xo(ue.width,ue.height,_.format,_.type);for(const Fe of _.layerUpdates){const rt=ue.data.subarray(Fe*xe/ue.data.BYTES_PER_ELEMENT,(Fe+1)*xe/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,Fe,ue.width,ue.height,1,de,rt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,de,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,ue.width,ue.height,ne.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?oe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,ne.depth,de,Ue,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,Ee,ue.width,ue.height,ne.depth,0,de,Ue,ue.data)}else{U&&ie&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Be[0].width,Be[0].height);for(let ee=0,j=Be.length;ee<j;ee++)ue=Be[ee],_.format!==sn?de!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,ue.width,ue.height,de,Ue,ue.data):t.texImage2D(i.TEXTURE_2D,ee,Ee,ue.width,ue.height,0,de,Ue,ue.data)}else if(_.isDataArrayTexture)if(U){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ee,ne.width,ne.height,ne.depth),oe)if(_.layerUpdates.size>0){const ee=Xo(ne.width,ne.height,_.format,_.type);for(const j of _.layerUpdates){const xe=ne.data.subarray(j*ee/ne.data.BYTES_PER_ELEMENT,(j+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,de,Ue,xe)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(_.isData3DTexture)U?(ie&&t.texStorage3D(i.TEXTURE_3D,Ae,Ee,ne.width,ne.height,ne.depth),oe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,Ue,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,ne.width,ne.height,ne.depth,0,de,Ue,ne.data);else if(_.isFramebufferTexture){if(ie)if(U)t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ne.width,ne.height);else{let ee=ne.width,j=ne.height;for(let xe=0;xe<Ae;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ee,ee,j,0,de,Ue,null),ee>>=1,j>>=1}}else if(Be.length>0){if(U&&ie){const ee=pt(Be[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ee.width,ee.height)}for(let ee=0,j=Be.length;ee<j;ee++)ue=Be[ee],U?oe&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,de,Ue,ue):t.texImage2D(i.TEXTURE_2D,ee,Ee,de,Ue,ue);_.generateMipmaps=!1}else if(U){if(ie){const ee=pt(ne);t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ee.width,ee.height)}oe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ue,ne)}else t.texImage2D(i.TEXTURE_2D,0,Ee,de,Ue,ne);A(_)&&d(K),Se.__version=Q.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function ae(w,_,O){if(_.image.length!==6)return;const K=lt(w,_),$=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);const Q=n.get($);if($.version!==Q.__version||K===!0){t.activeTexture(i.TEXTURE0+O);const Se=Ye.getPrimaries(Ye.workingColorSpace),se=_.colorSpace===Ln?null:Ye.getPrimaries(_.colorSpace),ve=_.colorSpace===Ln||Se===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,de=[];for(let j=0;j<6;j++)!Me&&!ne?de[j]=x(_.image[j],!0,r.maxCubemapSize):de[j]=ne?_.image[j].image:_.image[j],de[j]=_t(_,de[j]);const Ue=de[0],Ee=s.convert(_.format,_.colorSpace),ue=s.convert(_.type),Be=y(_.internalFormat,Ee,ue,_.colorSpace),U=_.isVideoTexture!==!0,ie=Q.__version===void 0||K===!0,oe=$.dataReady;let Ae=L(_,Ue);ke(i.TEXTURE_CUBE_MAP,_);let ee;if(Me){U&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Be,Ue.width,Ue.height);for(let j=0;j<6;j++){ee=de[j].mipmaps;for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];_.format!==sn?Ee!==null?U?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Fe.width,Fe.height,Ee,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,Be,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,0,0,Fe.width,Fe.height,Ee,ue,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe,Be,Fe.width,Fe.height,0,Ee,ue,Fe.data)}}}else{if(ee=_.mipmaps,U&&ie){ee.length>0&&Ae++;const j=pt(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Be,j.width,j.height)}for(let j=0;j<6;j++)if(ne){U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,de[j].width,de[j].height,Ee,ue,de[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,de[j].width,de[j].height,0,Ee,ue,de[j].data);for(let xe=0;xe<ee.length;xe++){const rt=ee[xe].image[j].image;U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,rt.width,rt.height,Ee,ue,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,Be,rt.width,rt.height,0,Ee,ue,rt.data)}}else{U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ee,ue,de[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ee,ue,de[j]);for(let xe=0;xe<ee.length;xe++){const Fe=ee[xe];U?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,0,0,Ee,ue,Fe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,xe+1,Be,Ee,ue,Fe.image[j])}}}A(_)&&d(i.TEXTURE_CUBE_MAP),Q.__version=$.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Ce(w,_,O,K,$,Q){const Se=s.convert(O.format,O.colorSpace),se=s.convert(O.type),ve=y(O.internalFormat,Se,se,O.colorSpace),Me=n.get(_),ne=n.get(O);if(ne.__renderTarget=_,!Me.__hasExternalTextures){const de=Math.max(1,_.width>>Q),Ue=Math.max(1,_.height>>Q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,Q,ve,de,Ue,_.depth,0,Se,se,null):t.texImage2D($,Q,ve,de,Ue,0,Se,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,ne.__webglTexture,0,ct(_)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,$,ne.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){const K=_.depthTexture,$=K&&K.isDepthTexture?K.type:null,Q=S(_.stencilBuffer,$),Se=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=ct(_);ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,Q,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const K=_.textures;for(let $=0;$<K.length;$++){const Q=K[$],Se=s.convert(Q.format,Q.colorSpace),se=s.convert(Q.type),ve=y(Q.internalFormat,Se,se,Q.colorSpace),Me=ct(_);O&&ge(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ve,_.width,_.height):ge(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me,ve,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ve,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ie(w,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const $=K.__webglTexture,Q=ct(_);if(_.depthTexture.format===tr)ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(_.depthTexture.format===nr)ge(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function dt(w){const _=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=K}if(w.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const K=w.texture.mipmaps;K&&K.length>0?Ie(_.__webglFramebuffer[0],w):Ie(_.__webglFramebuffer,w)}else if(O){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=i.createRenderbuffer(),De(_.__webglDepthbuffer[K],w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,w,!1);else{const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(w,_,O){const K=n.get(w);_!==void 0&&Ce(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&dt(w)}function C(w){const _=w.texture,O=n.get(w),K=n.get(_);w.addEventListener("dispose",P);const $=w.textures,Q=w.isWebGLCubeRenderTarget===!0,Se=$.length>1;if(Se||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=_.version,a.memory.textures++),Q){O.__webglFramebuffer=[];for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[se]=[];for(let ve=0;ve<_.mipmaps.length;ve++)O.__webglFramebuffer[se][ve]=i.createFramebuffer()}else O.__webglFramebuffer[se]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let se=0;se<_.mipmaps.length;se++)O.__webglFramebuffer[se]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Se)for(let se=0,ve=$.length;se<ve;se++){const Me=n.get($[se]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ge(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let se=0;se<$.length;se++){const ve=$[se];O.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[se]);const Me=s.convert(ve.format,ve.colorSpace),ne=s.convert(ve.type),de=y(ve.internalFormat,Me,ne,ve.colorSpace,w.isXRRenderTarget===!0),Ue=ct(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,de,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,O.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),De(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ke(i.TEXTURE_CUBE_MAP,_);for(let se=0;se<6;se++)if(_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ce(O.__webglFramebuffer[se][ve],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,ve);else Ce(O.__webglFramebuffer[se],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);A(_)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let se=0,ve=$.length;se<ve;se++){const Me=$[se],ne=n.get(Me);let de=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),ke(de,Me),Ce(O.__webglFramebuffer,w,Me,i.COLOR_ATTACHMENT0+se,de,0),A(Me)&&d(de)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,K.__webglTexture),ke(se,_),_.mipmaps&&_.mipmaps.length>0)for(let ve=0;ve<_.mipmaps.length;ve++)Ce(O.__webglFramebuffer[ve],w,_,i.COLOR_ATTACHMENT0,se,ve);else Ce(O.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,se,0);A(_)&&d(se),t.unbindTexture()}w.depthBuffer&&dt(w)}function it(w){const _=w.textures;for(let O=0,K=_.length;O<K;O++){const $=_[O];if(A($)){const Q=R(w),Se=n.get($).__webglTexture;t.bindTexture(Q,Se),d(Q),t.unbindTexture()}}}const be=[],Ke=[];function we(w){if(w.samples>0){if(ge(w)===!1){const _=w.textures,O=w.width,K=w.height;let $=i.COLOR_BUFFER_BIT;const Q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),se=_.length>1;if(se)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const ve=w.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){if(w.resolveDepthBuffer&&(w.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const ne=n.get(_[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,$,i.NEAREST),c===!0&&(be.length=0,Ke.length=0,be.push(i.COLOR_ATTACHMENT0+Me),w.depthBuffer&&w.resolveDepthBuffer===!1&&(be.push(Q),Ke.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Se.__webglColorRenderbuffer[Me]);const ne=n.get(_[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ct(w){return Math.min(r.maxSamples,w.samples)}function ge(w){const _=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(w){const _=a.render.frame;f.get(w)!==_&&(f.set(w,_),w.update())}function _t(w,_){const O=w.colorSpace,K=w.format,$=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Li&&O!==Ln&&(Ye.getTransfer(O)===Je?(K!==sn||$!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function pt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.setTexture2D=J,this.setTexture2DArray=Y,this.setTexture3D=re,this.setTextureCube=X,this.rebindTextures=Xe,this.setupRenderTarget=C,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=ge}function Mm(i,e){function t(n,r=Ln){let s;const a=Ye.getTransfer(r);if(n===un)return i.UNSIGNED_BYTE;if(n===Va)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tl)return i.BYTE;if(n===bl)return i.SHORT;if(n===$i)return i.UNSIGNED_SHORT;if(n===Ha)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Cl)return i.ALPHA;if(n===Dl)return i.RGB;if(n===sn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Pl)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===Ul)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===Qa)return i.RGBA_INTEGER;if(n===Hr||n===Vr||n===Gr||n===Wr)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Wr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ca||n===ha||n===ua||n===fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ca)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ha)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===da||n===pa||n===ma)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===da||n===pa)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Aa||n===ga||n===_a||n===xa||n===va||n===Ma||n===Ea||n===Sa||n===wa||n===ya||n===Ta||n===ba||n===Ra||n===Ca)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Aa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ga)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_a)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===va)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ma)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ea)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Sa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wa)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ba)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ca)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xr||n===Da||n===Pa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Xr)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Da)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Ua||n===La||n===Ia)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Xr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ua)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===La)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ia)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Zl extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const Em=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Zl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new On({vertexShader:Em,fragmentShader:Sm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ym extends Bi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,u=null,p=null,m=null,g=null;const x=new wm,A={},d=t.getContextAttributes();let R=null,y=null;const S=[],L=[],T=new We;let P=null;const B=new Yt;B.viewport=new et;const E=new Yt;E.viewport=new et;const M=[B,E],b=new Gh;let W=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let he=S[q];return he===void 0&&(he=new Ns,S[q]=he),he.getTargetRaySpace()},this.getControllerGrip=function(q){let he=S[q];return he===void 0&&(he=new Ns,S[q]=he),he.getGripSpace()},this.getHand=function(q){let he=S[q];return he===void 0&&(he=new Ns,S[q]=he),he.getHandSpace()};function V(q){const he=L.indexOf(q.inputSource);if(he===-1)return;const ae=S[he];ae!==void 0&&(ae.update(q.inputSource,q.frame,l||a),ae.dispatchEvent({type:q.type,data:q.inputSource}))}function J(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",Y);for(let q=0;q<S.length;q++){const he=L[q];he!==null&&(L[q]=null,S[q].disconnect(he))}W=null,G=null,x.reset();for(const q in A)delete A[q];e.setRenderTarget(R),m=null,p=null,u=null,r=null,y=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(R=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",J),r.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(T),typeof XRWebGLBinding<"u"&&(u=new XRWebGLBinding(r,t)),u!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,Ce=null,De=null;d.depth&&(De=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=d.stencil?nr:tr,Ce=d.stencil?er:ii);const Ie={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};p=u.createProjectionLayer(Ie),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new ri(p.textureWidth,p.textureHeight,{format:sn,type:un,depthTexture:new Wl(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const ae={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new ri(m.framebufferWidth,m.framebufferHeight,{format:sn,type:un,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Y(q){for(let he=0;he<q.removed.length;he++){const ae=q.removed[he],Ce=L.indexOf(ae);Ce>=0&&(L[Ce]=null,S[Ce].disconnect(ae))}for(let he=0;he<q.added.length;he++){const ae=q.added[he];let Ce=L.indexOf(ae);if(Ce===-1){for(let Ie=0;Ie<S.length;Ie++)if(Ie>=L.length){L.push(ae),Ce=Ie;break}else if(L[Ie]===null){L[Ie]=ae,Ce=Ie;break}if(Ce===-1)break}const De=S[Ce];De&&De.connect(ae)}}const re=new h,X=new h;function ce(q,he,ae){re.setFromMatrixPosition(he.matrixWorld),X.setFromMatrixPosition(ae.matrixWorld);const Ce=re.distanceTo(X),De=he.projectionMatrix.elements,Ie=ae.projectionMatrix.elements,dt=De[14]/(De[10]-1),Xe=De[14]/(De[10]+1),C=(De[9]+1)/De[5],it=(De[9]-1)/De[5],be=(De[8]-1)/De[0],Ke=(Ie[8]+1)/Ie[0],we=dt*be,ct=dt*Ke,ge=Ce/(-be+Ke),He=ge*-be;if(he.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(He),q.translateZ(ge),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),De[10]===-1)q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const _t=dt+ge,pt=Xe+ge,w=we-He,_=ct+(Ce-He),O=C*Xe/pt*_t,K=it*Xe/pt*_t;q.projectionMatrix.makePerspective(w,_,O,K,_t,pt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function pe(q,he){he===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(he.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let he=q.near,ae=q.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),b.near=E.near=B.near=he,b.far=E.far=B.far=ae,(W!==b.near||G!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),W=b.near,G=b.far),b.layers.mask=q.layers.mask|6,B.layers.mask=b.layers.mask&3,E.layers.mask=b.layers.mask&5;const Ce=q.parent,De=b.cameras;pe(b,Ce);for(let Ie=0;Ie<De.length;Ie++)pe(De[Ie],Ce);De.length===2?ce(b,B,E):b.projectionMatrix.copy(B.projectionMatrix),ye(q,b,Ce)};function ye(q,he,ae){ae===null?q.matrix.copy(he.matrixWorld):(q.matrix.copy(ae.matrixWorld),q.matrix.invert(),q.matrix.multiply(he.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(he.projectionMatrix),q.projectionMatrixInverse.copy(he.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Fa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)},this.getCameraTexture=function(q){return A[q]};let ke=null;function lt(q,he){if(f=he.getViewerPose(l||a),g=he,f!==null){const ae=f.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ce=!1;ae.length!==b.cameras.length&&(b.cameras.length=0,Ce=!0);for(let Xe=0;Xe<ae.length;Xe++){const C=ae[Xe];let it=null;if(m!==null)it=m.getViewport(C);else{const Ke=u.getViewSubImage(p,C);it=Ke.viewport,Xe===0&&(e.setRenderTargetTextures(y,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(y))}let be=M[Xe];be===void 0&&(be=new Yt,be.layers.enable(Xe),be.viewport=new et,M[Xe]=be),be.matrix.fromArray(C.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(C.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(it.x,it.y,it.width,it.height),Xe===0&&(b.matrix.copy(be.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Ce===!0&&b.cameras.push(be)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&u){const Xe=u.getDepthInformation(ae[0]);Xe&&Xe.isValid&&Xe.texture&&x.init(Xe,r.renderState)}if(De&&De.includes("camera-access")&&(e.state.unbindTexture(),u))for(let Xe=0;Xe<ae.length;Xe++){const C=ae[Xe].camera;if(C){let it=A[C];it||(it=new Zl,A[C]=it);const be=u.getCameraImage(C);it.sourceTexture=be}}}for(let ae=0;ae<S.length;ae++){const Ce=L[ae],De=S[ae];Ce!==null&&De!==void 0&&De.update(Ce,he,l||a)}ke&&ke(q,he),he.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:he}),g=null}const tt=new Ql;tt.setAnimationLoop(lt),this.setAnimationLoop=function(q){ke=q},this.dispose=function(){}}}const Kn=new Ft,Tm=new ot;function bm(i,e){function t(A,d){A.matrixAutoUpdate===!0&&A.updateMatrix(),d.value.copy(A.matrix)}function n(A,d){d.color.getRGB(A.fogColor.value,kl(i)),d.isFog?(A.fogNear.value=d.near,A.fogFar.value=d.far):d.isFogExp2&&(A.fogDensity.value=d.density)}function r(A,d,R,y,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(A,d):d.isMeshToonMaterial?(s(A,d),u(A,d)):d.isMeshPhongMaterial?(s(A,d),f(A,d)):d.isMeshStandardMaterial?(s(A,d),p(A,d),d.isMeshPhysicalMaterial&&m(A,d,S)):d.isMeshMatcapMaterial?(s(A,d),g(A,d)):d.isMeshDepthMaterial?s(A,d):d.isMeshDistanceMaterial?(s(A,d),x(A,d)):d.isMeshNormalMaterial?s(A,d):d.isLineBasicMaterial?(a(A,d),d.isLineDashedMaterial&&o(A,d)):d.isPointsMaterial?c(A,d,R,y):d.isSpriteMaterial?l(A,d):d.isShadowMaterial?(A.color.value.copy(d.color),A.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(A,d){A.opacity.value=d.opacity,d.color&&A.diffuse.value.copy(d.color),d.emissive&&A.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(A.map.value=d.map,t(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.bumpMap&&(A.bumpMap.value=d.bumpMap,t(d.bumpMap,A.bumpMapTransform),A.bumpScale.value=d.bumpScale,d.side===Ht&&(A.bumpScale.value*=-1)),d.normalMap&&(A.normalMap.value=d.normalMap,t(d.normalMap,A.normalMapTransform),A.normalScale.value.copy(d.normalScale),d.side===Ht&&A.normalScale.value.negate()),d.displacementMap&&(A.displacementMap.value=d.displacementMap,t(d.displacementMap,A.displacementMapTransform),A.displacementScale.value=d.displacementScale,A.displacementBias.value=d.displacementBias),d.emissiveMap&&(A.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,A.emissiveMapTransform)),d.specularMap&&(A.specularMap.value=d.specularMap,t(d.specularMap,A.specularMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest);const R=e.get(d),y=R.envMap,S=R.envMapRotation;y&&(A.envMap.value=y,Kn.copy(S),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),A.envMapRotation.value.setFromMatrix4(Tm.makeRotationFromEuler(Kn)),A.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=d.reflectivity,A.ior.value=d.ior,A.refractionRatio.value=d.refractionRatio),d.lightMap&&(A.lightMap.value=d.lightMap,A.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,A.lightMapTransform)),d.aoMap&&(A.aoMap.value=d.aoMap,A.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,A.aoMapTransform))}function a(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,d.map&&(A.map.value=d.map,t(d.map,A.mapTransform))}function o(A,d){A.dashSize.value=d.dashSize,A.totalSize.value=d.dashSize+d.gapSize,A.scale.value=d.scale}function c(A,d,R,y){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.size.value=d.size*R,A.scale.value=y*.5,d.map&&(A.map.value=d.map,t(d.map,A.uvTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function l(A,d){A.diffuse.value.copy(d.color),A.opacity.value=d.opacity,A.rotation.value=d.rotation,d.map&&(A.map.value=d.map,t(d.map,A.mapTransform)),d.alphaMap&&(A.alphaMap.value=d.alphaMap,t(d.alphaMap,A.alphaMapTransform)),d.alphaTest>0&&(A.alphaTest.value=d.alphaTest)}function f(A,d){A.specular.value.copy(d.specular),A.shininess.value=Math.max(d.shininess,1e-4)}function u(A,d){d.gradientMap&&(A.gradientMap.value=d.gradientMap)}function p(A,d){A.metalness.value=d.metalness,d.metalnessMap&&(A.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,A.metalnessMapTransform)),A.roughness.value=d.roughness,d.roughnessMap&&(A.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,A.roughnessMapTransform)),d.envMap&&(A.envMapIntensity.value=d.envMapIntensity)}function m(A,d,R){A.ior.value=d.ior,d.sheen>0&&(A.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),A.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(A.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,A.sheenColorMapTransform)),d.sheenRoughnessMap&&(A.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,A.sheenRoughnessMapTransform))),d.clearcoat>0&&(A.clearcoat.value=d.clearcoat,A.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(A.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,A.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(A.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ht&&A.clearcoatNormalScale.value.negate())),d.dispersion>0&&(A.dispersion.value=d.dispersion),d.iridescence>0&&(A.iridescence.value=d.iridescence,A.iridescenceIOR.value=d.iridescenceIOR,A.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(A.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,A.iridescenceMapTransform)),d.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),d.transmission>0&&(A.transmission.value=d.transmission,A.transmissionSamplerMap.value=R.texture,A.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(A.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,A.transmissionMapTransform)),A.thickness.value=d.thickness,d.thicknessMap&&(A.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=d.attenuationDistance,A.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(A.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(A.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=d.specularIntensity,A.specularColor.value.copy(d.specularColor),d.specularColorMap&&(A.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,A.specularColorMapTransform)),d.specularIntensityMap&&(A.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,A.specularIntensityMapTransform))}function g(A,d){d.matcap&&(A.matcap.value=d.matcap)}function x(A,d){const R=e.get(d).light;A.referencePosition.value.setFromMatrixPosition(R.matrixWorld),A.nearDistance.value=R.shadow.camera.near,A.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Rm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,y){const S=y.program;n.uniformBlockBinding(R,S)}function l(R,y){let S=r[R.id];S===void 0&&(g(R),S=f(R),r[R.id]=S,R.addEventListener("dispose",A));const L=y.program;n.updateUBOMapping(R,L);const T=e.render.frame;s[R.id]!==T&&(p(R),s[R.id]=T)}function f(R){const y=u();R.__bindingPointIndex=y;const S=i.createBuffer(),L=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,S),S}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(R){const y=r[R.id],S=R.uniforms,L=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,P=S.length;T<P;T++){const B=Array.isArray(S[T])?S[T]:[S[T]];for(let E=0,M=B.length;E<M;E++){const b=B[E];if(m(b,T,E,L)===!0){const W=b.__offset,G=Array.isArray(b.value)?b.value:[b.value];let V=0;for(let J=0;J<G.length;J++){const Y=G[J],re=x(Y);typeof Y=="number"||typeof Y=="boolean"?(b.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,W+V,b.__data)):Y.isMatrix3?(b.__data[0]=Y.elements[0],b.__data[1]=Y.elements[1],b.__data[2]=Y.elements[2],b.__data[3]=0,b.__data[4]=Y.elements[3],b.__data[5]=Y.elements[4],b.__data[6]=Y.elements[5],b.__data[7]=0,b.__data[8]=Y.elements[6],b.__data[9]=Y.elements[7],b.__data[10]=Y.elements[8],b.__data[11]=0):(Y.toArray(b.__data,V),V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,y,S,L){const T=R.value,P=y+"_"+S;if(L[P]===void 0)return typeof T=="number"||typeof T=="boolean"?L[P]=T:L[P]=T.clone(),!0;{const B=L[P];if(typeof T=="number"||typeof T=="boolean"){if(B!==T)return L[P]=T,!0}else if(B.equals(T)===!1)return B.copy(T),!0}return!1}function g(R){const y=R.uniforms;let S=0;const L=16;for(let P=0,B=y.length;P<B;P++){const E=Array.isArray(y[P])?y[P]:[y[P]];for(let M=0,b=E.length;M<b;M++){const W=E[M],G=Array.isArray(W.value)?W.value:[W.value];for(let V=0,J=G.length;V<J;V++){const Y=G[V],re=x(Y),X=S%L,ce=X%re.boundary,pe=X+ce;S+=ce,pe!==0&&L-pe<re.storage&&(S+=L-pe),W.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=re.storage}}}const T=S%L;return T>0&&(S+=L-T),R.__size=S,R.__cache={},this}function x(R){const y={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(y.boundary=4,y.storage=4):R.isVector2?(y.boundary=8,y.storage=8):R.isVector3||R.isColor?(y.boundary=16,y.storage=12):R.isVector4?(y.boundary=16,y.storage=16):R.isMatrix3?(y.boundary=48,y.storage=48):R.isMatrix4?(y.boundary=64,y.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),y}function A(R){const y=R.target;y.removeEventListener("dispose",A);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const R in r)i.deleteBuffer(r[R]);a=[],r={},s={}}return{bind:c,update:l,dispose:d}}class Cm{constructor(e={}){const{canvas:t=eh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),x=new Int32Array(4);let A=null,d=null;const R=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let L=!1;this._outputColorSpace=Et;let T=0,P=0,B=null,E=-1,M=null;const b=new et,W=new et;let G=null;const V=new Ne(0);let J=0,Y=t.width,re=t.height,X=1,ce=null,pe=null;const ye=new et(0,0,Y,re),ke=new et(0,0,Y,re);let lt=!1;const tt=new Za;let q=!1,he=!1;const ae=new ot,Ce=new h,De=new et,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Xe(){return B===null?X:1}let C=n;function it(v,F){return t.getContext(v,F)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ee,!1),C===null){const F="webgl2";if(C=it(F,v),C===null)throw it(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let be,Ke,we,ct,ge,He,_t,pt,w,_,O,K,$,Q,Se,se,ve,Me,ne,de,Ue,Ee,ue,Be;function U(){be=new zd(C),be.init(),Ee=new Mm(C,be),Ke=new Ud(C,be,e,Ee),we=new xm(C,be),Ke.reversedDepthBuffer&&p&&we.buffers.depth.setReversed(!0),ct=new Vd(C),ge=new am,He=new vm(C,be,we,ge,Ke,Ee,ct),_t=new Id(S),pt=new Od(S),w=new Yh(C),ue=new Dd(C,w),_=new kd(C,w,ct,ue),O=new Wd(C,_,w,ct),ne=new Gd(C,Ke,He),se=new Ld(ge),K=new sm(S,_t,pt,be,Ke,ue,se),$=new bm(S,ge),Q=new lm,Se=new pm(be),Me=new Cd(S,_t,pt,we,O,m,c),ve=new gm(S,O,Ke),Be=new Rm(C,ct,Ke,we),de=new Pd(C,be,ct),Ue=new Hd(C,be,ct),ct.programs=K.programs,S.capabilities=Ke,S.extensions=be,S.properties=ge,S.renderLists=Q,S.shadowMap=ve,S.state=we,S.info=ct}U();const ie=new ym(S,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const v=be.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=be.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(v){v!==void 0&&(X=v,this.setSize(Y,re,!1))},this.getSize=function(v){return v.set(Y,re)},this.setSize=function(v,F,k=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=v,re=F,t.width=Math.floor(v*X),t.height=Math.floor(F*X),k===!0&&(t.style.width=v+"px",t.style.height=F+"px"),this.setViewport(0,0,v,F)},this.getDrawingBufferSize=function(v){return v.set(Y*X,re*X).floor()},this.setDrawingBufferSize=function(v,F,k){Y=v,re=F,X=k,t.width=Math.floor(v*k),t.height=Math.floor(F*k),this.setViewport(0,0,v,F)},this.getCurrentViewport=function(v){return v.copy(b)},this.getViewport=function(v){return v.copy(ye)},this.setViewport=function(v,F,k,H){v.isVector4?ye.set(v.x,v.y,v.z,v.w):ye.set(v,F,k,H),we.viewport(b.copy(ye).multiplyScalar(X).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,F,k,H){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,F,k,H),we.scissor(W.copy(ke).multiplyScalar(X).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(v){we.setScissorTest(lt=v)},this.setOpaqueSort=function(v){ce=v},this.setTransparentSort=function(v){pe=v},this.getClearColor=function(v){return v.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(v=!0,F=!0,k=!0){let H=0;if(v){let N=!1;if(B!==null){const te=B.texture.format;N=te===Qa||te===Xa||te===Wa}if(N){const te=B.texture.type,fe=te===un||te===ii||te===$i||te===er||te===Va||te===Ga,_e=Me.getClearColor(),me=Me.getClearAlpha(),Pe=_e.r,Le=_e.g,Te=_e.b;fe?(g[0]=Pe,g[1]=Le,g[2]=Te,g[3]=me,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=Pe,x[1]=Le,x[2]=Te,x[3]=me,C.clearBufferiv(C.COLOR,0,x))}else H|=C.COLOR_BUFFER_BIT}F&&(H|=C.DEPTH_BUFFER_BIT),k&&(H|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Me.dispose(),Q.dispose(),Se.dispose(),ge.dispose(),_t.dispose(),pt.dispose(),O.dispose(),ue.dispose(),Be.dispose(),K.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",an),ie.removeEventListener("sessionend",no),Hn.stop()};function oe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const v=ct.autoReset,F=ve.enabled,k=ve.autoUpdate,H=ve.needsUpdate,N=ve.type;U(),ct.autoReset=v,ve.enabled=F,ve.autoUpdate=k,ve.needsUpdate=H,ve.type=N}function ee(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function j(v){const F=v.target;F.removeEventListener("dispose",j),xe(F)}function xe(v){Fe(v),ge.remove(v)}function Fe(v){const F=ge.get(v).programs;F!==void 0&&(F.forEach(function(k){K.releaseProgram(k)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,F,k,H,N,te){F===null&&(F=Ie);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=oc(v,F,k,H,N);we.setMaterial(H,fe);let me=k.index,Pe=1;if(H.wireframe===!0){if(me=_.getWireframeAttribute(k),me===void 0)return;Pe=2}const Le=k.drawRange,Te=k.attributes.position;let Ve=Le.start*Pe,Ze=(Le.start+Le.count)*Pe;te!==null&&(Ve=Math.max(Ve,te.start*Pe),Ze=Math.min(Ze,(te.start+te.count)*Pe)),me!==null?(Ve=Math.max(Ve,0),Ze=Math.min(Ze,me.count)):Te!=null&&(Ve=Math.max(Ve,0),Ze=Math.min(Ze,Te.count));const ft=Ze-Ve;if(ft<0||ft===1/0)return;ue.setup(N,H,_e,k,me);let st,nt=de;if(me!==null&&(st=w.get(me),nt=Ue,nt.setIndex(st)),N.isMesh)H.wireframe===!0?(we.setLineWidth(H.wireframeLinewidth*Xe()),nt.setMode(C.LINES)):nt.setMode(C.TRIANGLES);else if(N.isLine){let Re=H.linewidth;Re===void 0&&(Re=1),we.setLineWidth(Re*Xe()),N.isLineSegments?nt.setMode(C.LINES):N.isLineLoop?nt.setMode(C.LINE_LOOP):nt.setMode(C.LINE_STRIP)}else N.isPoints?nt.setMode(C.POINTS):N.isSprite&&nt.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)bi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,ht=N._multiDrawCounts,Qe=N._multiDrawCount,Gt=me?w.get(me).bytesPerElement:1,li=ge.get(H).currentProgram.getUniforms();for(let Wt=0;Wt<Qe;Wt++)li.setValue(C,"_gl_DrawID",Wt),nt.render(Re[Wt]/Gt,ht[Wt])}else if(N.isInstancedMesh)nt.renderInstances(Ve,ft,N.count);else if(k.isInstancedBufferGeometry){const Re=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ht=Math.min(k.instanceCount,Re);nt.renderInstances(Ve,ft,ht)}else nt.render(Ve,ft)};function rt(v,F,k){v.transparent===!0&&v.side===Mn&&v.forceSinglePass===!1?(v.side=Ht,v.needsUpdate=!0,pr(v,F,k),v.side=Bn,v.needsUpdate=!0,pr(v,F,k),v.side=Mn):pr(v,F,k)}this.compile=function(v,F,k=null){k===null&&(k=v),d=Se.get(k),d.init(F),y.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),v!==k&&v.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return v.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const te=N.material;if(te)if(Array.isArray(te))for(let fe=0;fe<te.length;fe++){const _e=te[fe];rt(_e,k,N),H.add(_e)}else rt(te,k,N),H.add(te)}),d=y.pop(),H},this.compileAsync=function(v,F,k=null){const H=this.compile(v,F,k);return new Promise(N=>{function te(){if(H.forEach(function(fe){ge.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){N(v);return}setTimeout(te,10)}be.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let je=null;function dn(v){je&&je(v)}function an(){Hn.stop()}function no(){Hn.start()}const Hn=new Ql;Hn.setAnimationLoop(dn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(v){je=v,ie.setAnimationLoop(v),v===null?Hn.stop():Hn.start()},ie.addEventListener("sessionstart",an),ie.addEventListener("sessionend",no),this.render=function(v,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(F),F=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,F,B),d=Se.get(v,y.length),d.init(F),y.push(d),ae.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),tt.setFromProjectionMatrix(ae,cn,F.reversedDepth),he=this.localClippingEnabled,q=se.init(this.clippingPlanes,he),A=Q.get(v,R.length),A.init(),R.push(A),ie.enabled===!0&&ie.isPresenting===!0){const te=S.xr.getDepthSensingMesh();te!==null&&us(te,F,-1/0,S.sortObjects)}us(v,F,0,S.sortObjects),A.finish(),S.sortObjects===!0&&A.sort(ce,pe),dt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,dt&&Me.addToRenderList(A,v),this.info.render.frame++,q===!0&&se.beginShadows();const k=d.state.shadowsArray;ve.render(k,v,F),q===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=A.opaque,N=A.transmissive;if(d.setupLights(),F.isArrayCamera){const te=F.cameras;if(N.length>0)for(let fe=0,_e=te.length;fe<_e;fe++){const me=te[fe];ro(H,N,v,me)}dt&&Me.render(v);for(let fe=0,_e=te.length;fe<_e;fe++){const me=te[fe];io(A,v,me,me.viewport)}}else N.length>0&&ro(H,N,v,F),dt&&Me.render(v),io(A,v,F);B!==null&&P===0&&(He.updateMultisampleRenderTarget(B),He.updateRenderTargetMipmap(B)),v.isScene===!0&&v.onAfterRender(S,v,F),ue.resetDefaultState(),E=-1,M=null,y.pop(),y.length>0?(d=y[y.length-1],q===!0&&se.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?A=R[R.length-1]:A=null};function us(v,F,k,H){if(v.visible===!1)return;if(v.layers.test(F.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(F);else if(v.isLight)d.pushLight(v),v.castShadow&&d.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||tt.intersectsSprite(v)){H&&De.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ae);const fe=O.update(v),_e=v.material;_e.visible&&A.push(v,fe,_e,k,De.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||tt.intersectsObject(v))){const fe=O.update(v),_e=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),De.copy(v.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(v.matrixWorld).applyMatrix4(ae)),Array.isArray(_e)){const me=fe.groups;for(let Pe=0,Le=me.length;Pe<Le;Pe++){const Te=me[Pe],Ve=_e[Te.materialIndex];Ve&&Ve.visible&&A.push(v,fe,Ve,k,De.z,Te)}}else _e.visible&&A.push(v,fe,_e,k,De.z,null)}}const te=v.children;for(let fe=0,_e=te.length;fe<_e;fe++)us(te[fe],F,k,H)}function io(v,F,k,H){const N=v.opaque,te=v.transmissive,fe=v.transparent;d.setupLightsView(k),q===!0&&se.setGlobalState(S.clippingPlanes,k),H&&we.viewport(b.copy(H)),N.length>0&&dr(N,F,k),te.length>0&&dr(te,F,k),fe.length>0&&dr(fe,F,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function ro(v,F,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new ri(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?rr:un,minFilter:ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const te=d.state.transmissionRenderTarget[H.id],fe=H.viewport||b;te.setSize(fe.z*S.transmissionResolutionScale,fe.w*S.transmissionResolutionScale);const _e=S.getRenderTarget(),me=S.getActiveCubeFace(),Pe=S.getActiveMipmapLevel();S.setRenderTarget(te),S.getClearColor(V),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),dt&&Me.render(k);const Le=S.toneMapping;S.toneMapping=Nn;const Te=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),q===!0&&se.setGlobalState(S.clippingPlanes,H),dr(v,k,H),He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ze=0,ft=F.length;Ze<ft;Ze++){const st=F[Ze],nt=st.object,Re=st.geometry,ht=st.material,Qe=st.group;if(ht.side===Mn&&nt.layers.test(H.layers)){const Gt=ht.side;ht.side=Ht,ht.needsUpdate=!0,so(nt,k,H,Re,ht,Qe),ht.side=Gt,ht.needsUpdate=!0,Ve=!0}}Ve===!0&&(He.updateMultisampleRenderTarget(te),He.updateRenderTargetMipmap(te))}S.setRenderTarget(_e,me,Pe),S.setClearColor(V,J),Te!==void 0&&(H.viewport=Te),S.toneMapping=Le}function dr(v,F,k){const H=F.isScene===!0?F.overrideMaterial:null;for(let N=0,te=v.length;N<te;N++){const fe=v[N],_e=fe.object,me=fe.geometry,Pe=fe.group;let Le=fe.material;Le.allowOverride===!0&&H!==null&&(Le=H),_e.layers.test(k.layers)&&so(_e,F,k,me,Le,Pe)}}function so(v,F,k,H,N,te){v.onBeforeRender(S,F,k,H,N,te),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),N.onBeforeRender(S,F,k,H,v,te),N.transparent===!0&&N.side===Mn&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,S.renderBufferDirect(k,F,H,N,v,te),N.side=Bn,N.needsUpdate=!0,S.renderBufferDirect(k,F,H,N,v,te),N.side=Mn):S.renderBufferDirect(k,F,H,N,v,te),v.onAfterRender(S,F,k,H,N,te)}function pr(v,F,k){F.isScene!==!0&&(F=Ie);const H=ge.get(v),N=d.state.lights,te=d.state.shadowsArray,fe=N.state.version,_e=K.getParameters(v,N.state,te,F,k),me=K.getProgramCacheKey(_e);let Pe=H.programs;H.environment=v.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(v.isMeshStandardMaterial?pt:_t).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?F.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",j),Pe=new Map,H.programs=Pe);let Le=Pe.get(me);if(Le!==void 0){if(H.currentProgram===Le&&H.lightsStateVersion===fe)return oo(v,_e),Le}else _e.uniforms=K.getUniforms(v),v.onBeforeCompile(_e,S),Le=K.acquireProgram(_e,me),Pe.set(me,Le),H.uniforms=_e.uniforms;const Te=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Te.clippingPlanes=se.uniform),oo(v,_e),H.needsLights=cc(v),H.lightsStateVersion=fe,H.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Le,H.uniformsList=null,Le}function ao(v){if(v.uniformsList===null){const F=v.currentProgram.getUniforms();v.uniformsList=Qr.seqWithValue(F.seq,v.uniforms)}return v.uniformsList}function oo(v,F){const k=ge.get(v);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.batchingColor=F.batchingColor,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.instancingMorph=F.instancingMorph,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function oc(v,F,k,H,N){F.isScene!==!0&&(F=Ie),He.resetTextureUnits();const te=F.fog,fe=H.isMeshStandardMaterial?F.environment:null,_e=B===null?S.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Li,me=(H.isMeshStandardMaterial?pt:_t).get(H.envMap||fe),Pe=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Le=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Te=!!k.morphAttributes.position,Ve=!!k.morphAttributes.normal,Ze=!!k.morphAttributes.color;let ft=Nn;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ft=S.toneMapping);const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=st!==void 0?st.length:0,Re=ge.get(H),ht=d.state.lights;if(q===!0&&(he===!0||v!==M)){const Pt=v===M&&H.id===E;se.setState(H,v,Pt)}let Qe=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ht.state.version||Re.outputColorSpace!==_e||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==me||H.fog===!0&&Re.fog!==te||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Pe||Re.vertexTangents!==Le||Re.morphTargets!==Te||Re.morphNormals!==Ve||Re.morphColors!==Ze||Re.toneMapping!==ft||Re.morphTargetsCount!==nt)&&(Qe=!0):(Qe=!0,Re.__version=H.version);let Gt=Re.currentProgram;Qe===!0&&(Gt=pr(H,F,N));let li=!1,Wt=!1,ki=!1;const ut=Gt.getUniforms(),qt=Re.uniforms;if(we.useProgram(Gt.program)&&(li=!0,Wt=!0,ki=!0),H.id!==E&&(E=H.id,Wt=!0),li||M!==v){we.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(C,"projectionMatrix",v.projectionMatrix),ut.setValue(C,"viewMatrix",v.matrixWorldInverse);const Ot=ut.map.cameraPosition;Ot!==void 0&&Ot.setValue(C,Ce.setFromMatrixPosition(v.matrixWorld)),Ke.logarithmicDepthBuffer&&ut.setValue(C,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ut.setValue(C,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Wt=!0,ki=!0)}if(N.isSkinnedMesh){ut.setOptional(C,N,"bindMatrix"),ut.setOptional(C,N,"bindMatrixInverse");const Pt=N.skeleton;Pt&&(Pt.boneTexture===null&&Pt.computeBoneTexture(),ut.setValue(C,"boneTexture",Pt.boneTexture,He))}N.isBatchedMesh&&(ut.setOptional(C,N,"batchingTexture"),ut.setValue(C,"batchingTexture",N._matricesTexture,He),ut.setOptional(C,N,"batchingIdTexture"),ut.setValue(C,"batchingIdTexture",N._indirectTexture,He),ut.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(C,"batchingColorTexture",N._colorsTexture,He));const jt=k.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&ne.update(N,k,Gt),(Wt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,ut.setValue(C,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(qt.envMap.value=me,qt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),Wt&&(ut.setValue(C,"toneMappingExposure",S.toneMappingExposure),Re.needsLights&&lc(qt,ki),te&&H.fog===!0&&$.refreshFogUniforms(qt,te),$.refreshMaterialUniforms(qt,H,X,re,d.state.transmissionRenderTarget[v.id]),Qr.upload(C,ao(Re),qt,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qr.upload(C,ao(Re),qt,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ut.setValue(C,"center",N.center),ut.setValue(C,"modelViewMatrix",N.modelViewMatrix),ut.setValue(C,"normalMatrix",N.normalMatrix),ut.setValue(C,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Pt=H.uniformsGroups;for(let Ot=0,fs=Pt.length;Ot<fs;Ot++){const Vn=Pt[Ot];Be.update(Vn,Gt),Be.bind(Vn,Gt)}}return Gt}function lc(v,F){v.ambientLightColor.needsUpdate=F,v.lightProbe.needsUpdate=F,v.directionalLights.needsUpdate=F,v.directionalLightShadows.needsUpdate=F,v.pointLights.needsUpdate=F,v.pointLightShadows.needsUpdate=F,v.spotLights.needsUpdate=F,v.spotLightShadows.needsUpdate=F,v.rectAreaLights.needsUpdate=F,v.hemisphereLights.needsUpdate=F}function cc(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(v,F,k){const H=ge.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),ge.get(v.texture).__webglTexture=F,ge.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:k,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,F){const k=ge.get(v);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0};const hc=C.createFramebuffer();this.setRenderTarget=function(v,F=0,k=0){B=v,T=F,P=k;let H=!0,N=null,te=!1,fe=!1;if(v){const me=ge.get(v);if(me.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(C.FRAMEBUFFER,null),H=!1;else if(me.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(me.__hasExternalTextures)He.rebindTextures(v,ge.get(v.texture).__webglTexture,ge.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Te=v.depthTexture;if(me.__boundDepthTexture!==Te){if(Te!==null&&ge.has(Te)&&(v.width!==Te.image.width||v.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const Pe=v.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Le=ge.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?N=Le[F][k]:N=Le[F],te=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?N=ge.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?N=Le[k]:N=Le,b.copy(v.viewport),W.copy(v.scissor),G=v.scissorTest}else b.copy(ye).multiplyScalar(X).floor(),W.copy(ke).multiplyScalar(X).floor(),G=lt;if(k!==0&&(N=hc),we.bindFramebuffer(C.FRAMEBUFFER,N)&&H&&we.drawBuffers(v,N),we.viewport(b),we.scissor(W),we.setScissorTest(G),te){const me=ge.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,k)}else if(fe){const me=F;for(let Pe=0;Pe<v.textures.length;Pe++){const Le=ge.get(v.textures[Pe]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,k,me)}}else if(v!==null&&k!==0){const me=ge.get(v.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,me.__webglTexture,k)}E=-1},this.readRenderTargetPixels=function(v,F,k,H,N,te,fe,_e=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){we.bindFramebuffer(C.FRAMEBUFFER,me);try{const Pe=v.textures[_e],Le=Pe.format,Te=Pe.type;if(!Ke.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(Te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=v.width-H&&k>=0&&k<=v.height-N&&(v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(F,k,H,N,Ee.convert(Le),Ee.convert(Te),te))}finally{const Pe=B!==null?ge.get(B).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,F,k,H,N,te,fe,_e=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ge.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(F>=0&&F<=v.width-H&&k>=0&&k<=v.height-N){we.bindFramebuffer(C.FRAMEBUFFER,me);const Pe=v.textures[_e],Le=Pe.format,Te=Pe.type;if(!Ke.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.bufferData(C.PIXEL_PACK_BUFFER,te.byteLength,C.STREAM_READ),v.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e),C.readPixels(F,k,H,N,Ee.convert(Le),Ee.convert(Te),0);const Ze=B!==null?ge.get(B).__webglFramebuffer:null;we.bindFramebuffer(C.FRAMEBUFFER,Ze);const ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await th(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ve),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,te),C.deleteBuffer(Ve),C.deleteSync(ft),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,F=null,k=0){const H=Math.pow(2,-k),N=Math.floor(v.image.width*H),te=Math.floor(v.image.height*H),fe=F!==null?F.x:0,_e=F!==null?F.y:0;He.setTexture2D(v,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,fe,_e,N,te),we.unbindTexture()};const uc=C.createFramebuffer(),fc=C.createFramebuffer();this.copyTextureToTexture=function(v,F,k=null,H=null,N=0,te=null){te===null&&(N!==0?(bi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=N,N=0):te=0);let fe,_e,me,Pe,Le,Te,Ve,Ze,ft;const st=v.isCompressedTexture?v.mipmaps[te]:v.image;if(k!==null)fe=k.max.x-k.min.x,_e=k.max.y-k.min.y,me=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,Le=k.min.y,Te=k.isBox3?k.min.z:0;else{const jt=Math.pow(2,-N);fe=Math.floor(st.width*jt),_e=Math.floor(st.height*jt),v.isDataArrayTexture?me=st.depth:v.isData3DTexture?me=Math.floor(st.depth*jt):me=1,Pe=0,Le=0,Te=0}H!==null?(Ve=H.x,Ze=H.y,ft=H.z):(Ve=0,Ze=0,ft=0);const nt=Ee.convert(F.format),Re=Ee.convert(F.type);let ht;F.isData3DTexture?(He.setTexture3D(F,0),ht=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),ht=C.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),ht=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=C.getParameter(C.UNPACK_ROW_LENGTH),Gt=C.getParameter(C.UNPACK_IMAGE_HEIGHT),li=C.getParameter(C.UNPACK_SKIP_PIXELS),Wt=C.getParameter(C.UNPACK_SKIP_ROWS),ki=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,st.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,st.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Pe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Le),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Te);const ut=v.isDataArrayTexture||v.isData3DTexture,qt=F.isDataArrayTexture||F.isData3DTexture;if(v.isDepthTexture){const jt=ge.get(v),Pt=ge.get(F),Ot=ge.get(jt.__renderTarget),fs=ge.get(Pt.__renderTarget);we.bindFramebuffer(C.READ_FRAMEBUFFER,Ot.__webglFramebuffer),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,fs.__webglFramebuffer);for(let Vn=0;Vn<me;Vn++)ut&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(v).__webglTexture,N,Te+Vn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ge.get(F).__webglTexture,te,ft+Vn)),C.blitFramebuffer(Pe,Le,fe,_e,Ve,Ze,fe,_e,C.DEPTH_BUFFER_BIT,C.NEAREST);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(N!==0||v.isRenderTargetTexture||ge.has(v)){const jt=ge.get(v),Pt=ge.get(F);we.bindFramebuffer(C.READ_FRAMEBUFFER,uc),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,fc);for(let Ot=0;Ot<me;Ot++)ut?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,jt.__webglTexture,N,Te+Ot):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,jt.__webglTexture,N),qt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pt.__webglTexture,te,ft+Ot):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Pt.__webglTexture,te),N!==0?C.blitFramebuffer(Pe,Le,fe,_e,Ve,Ze,fe,_e,C.COLOR_BUFFER_BIT,C.NEAREST):qt?C.copyTexSubImage3D(ht,te,Ve,Ze,ft+Ot,Pe,Le,fe,_e):C.copyTexSubImage2D(ht,te,Ve,Ze,Pe,Le,fe,_e);we.bindFramebuffer(C.READ_FRAMEBUFFER,null),we.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else qt?v.isDataTexture||v.isData3DTexture?C.texSubImage3D(ht,te,Ve,Ze,ft,fe,_e,me,nt,Re,st.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(ht,te,Ve,Ze,ft,fe,_e,me,nt,st.data):C.texSubImage3D(ht,te,Ve,Ze,ft,fe,_e,me,nt,Re,st):v.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,te,Ve,Ze,fe,_e,nt,Re,st.data):v.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,te,Ve,Ze,st.width,st.height,nt,st.data):C.texSubImage2D(C.TEXTURE_2D,te,Ve,Ze,fe,_e,nt,Re,st);C.pixelStorei(C.UNPACK_ROW_LENGTH,Qe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Gt),C.pixelStorei(C.UNPACK_SKIP_PIXELS,li),C.pixelStorei(C.UNPACK_SKIP_ROWS,Wt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ki),te===0&&F.generateMipmaps&&C.generateMipmap(ht),we.unbindTexture()},this.copyTextureToTexture3D=function(v,F,k=null,H=null,N=0){return bi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,F,k,H,N)},this.initRenderTarget=function(v){ge.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),we.unbindTexture()},this.resetState=function(){T=0,P=0,B=null,we.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const Dm=/^[og]\s*(.+)?/,Pm=/^mtllib /,Um=/^usemtl /,Lm=/^usemap /,Al=/\s+/,gl=new h,Ks=new h,_l=new h,xl=new h,Jt=new h,kr=new Ne;function Im(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){const s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},n&&n.name&&typeof n.clone=="function"){const r=n.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseNormalIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/3)*3},parseUVIndex:function(e,t){const n=parseInt(e,10);return(n>=0?n-1:n+t/2)*2},addVertex:function(e,t,n){const r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,n){const r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[n+0],r[n+1],r[n+2])},addFaceNormal:function(e,t,n){const r=this.vertices,s=this.object.geometry.normals;gl.fromArray(r,e),Ks.fromArray(r,t),_l.fromArray(r,n),Jt.subVectors(_l,Ks),xl.subVectors(gl,Ks),Jt.cross(xl),Jt.normalize(),s.push(Jt.x,Jt.y,Jt.z),s.push(Jt.x,Jt.y,Jt.z),s.push(Jt.x,Jt.y,Jt.z)},addColor:function(e,t,n){const r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[n]!==void 0&&s.push(r[n+0],r[n+1],r[n+2])},addUV:function(e,t,n){const r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[n+0],r[n+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,n,r,s,a,o,c,l){const f=this.vertices.length;let u=this.parseVertexIndex(e,f),p=this.parseVertexIndex(t,f),m=this.parseVertexIndex(n,f);if(this.addVertex(u,p,m),this.addColor(u,p,m),o!==void 0&&o!==""){const g=this.normals.length;u=this.parseNormalIndex(o,g),p=this.parseNormalIndex(c,g),m=this.parseNormalIndex(l,g),this.addNormal(u,p,m)}else this.addFaceNormal(u,p,m);if(r!==void 0&&r!==""){const g=this.uvs.length;u=this.parseUVIndex(r,g),p=this.parseUVIndex(s,g),m=this.parseUVIndex(a,g),this.addUV(u,p,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let n=0,r=e.length;n<r;n++){const s=this.parseVertexIndex(e[n],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const n=this.vertices.length,r=this.uvs.length;for(let s=0,a=e.length;s<a;s++)this.addVertexLine(this.parseVertexIndex(e[s],n));for(let s=0,a=t.length;s<a;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return i.startObject("",!1),i}class Fm extends lr{constructor(e){super(e),this.materials=null}load(e,t,n,r){const s=this,a=new Nh(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}setMaterials(e){return this.materials=e,this}parse(e){const t=new Im;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const n=e.split(`
`);let r=[];for(let o=0,c=n.length;o<c;o++){const l=n[o].trimStart();if(l.length===0)continue;const f=l.charAt(0);if(f!=="#")if(f==="v"){const u=l.split(Al);switch(u[0]){case"v":t.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(kr.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6]),Et),t.colors.push(kr.r,kr.g,kr.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":t.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(f==="f"){const p=l.slice(1).trim().split(Al),m=[];for(let x=0,A=p.length;x<A;x++){const d=p[x];if(d.length>0){const R=d.split("/");m.push(R)}}const g=m[0];for(let x=1,A=m.length-1;x<A;x++){const d=m[x],R=m[x+1];t.addFace(g[0],d[0],R[0],g[1],d[1],R[1],g[2],d[2],R[2])}}else if(f==="l"){const u=l.substring(1).trim().split(" ");let p=[];const m=[];if(l.indexOf("/")===-1)p=u;else for(let g=0,x=u.length;g<x;g++){const A=u[g].split("/");A[0]!==""&&p.push(A[0]),A[1]!==""&&m.push(A[1])}t.addLineGeometry(p,m)}else if(f==="p"){const p=l.slice(1).trim().split(" ");t.addPointGeometry(p)}else if((r=Dm.exec(l))!==null){const u=(" "+r[0].slice(1).trim()).slice(1);t.startObject(u)}else if(Um.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(Pm.test(l))t.materialLibraries.push(l.substring(7).trim());else if(Lm.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(f==="s"){if(r=l.split(" "),r.length>1){const p=r[1].trim().toLowerCase();t.object.smooth=p!=="0"&&p!=="off"}else t.object.smooth=!0;const u=t.object.currentMaterial();u&&(u.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();const s=new Sn;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let o=0,c=t.objects.length;o<c;o++){const l=t.objects[o],f=l.geometry,u=l.materials,p=f.type==="Line",m=f.type==="Points";let g=!1;if(f.vertices.length===0)continue;const x=new Nt;x.setAttribute("position",new vt(f.vertices,3)),f.normals.length>0&&x.setAttribute("normal",new vt(f.normals,3)),f.colors.length>0&&(g=!0,x.setAttribute("color",new vt(f.colors,3))),f.hasUVIndices===!0&&x.setAttribute("uv",new vt(f.uvs,2));const A=[];for(let R=0,y=u.length;R<y;R++){const S=u[R],L=S.name+"_"+S.smooth+"_"+g;let T=t.materials[L];if(this.materials!==null){if(T=this.materials.create(S.name),p&&T&&!(T instanceof ni)){const P=new ni;fn.prototype.copy.call(P,T),P.color.copy(T.color),T=P}else if(m&&T&&!(T instanceof qi)){const P=new qi({size:10,sizeAttenuation:!1});fn.prototype.copy.call(P,T),P.color.copy(T.color),P.map=T.map,T=P}}T===void 0&&(p?T=new ni:m?T=new qi({size:1,sizeAttenuation:!1}):T=new Dh,T.name=S.name,T.flatShading=!S.smooth,T.vertexColors=g,t.materials[L]=T),A.push(T)}let d;if(A.length>1){for(let R=0,y=u.length;R<y;R++){const S=u[R];x.addGroup(S.groupStart,S.groupCount,R)}p?d=new Bo(x,A):m?d=new zs(x,A):d=new Kt(x,A)}else p?d=new Bo(x,A[0]):m?d=new zs(x,A[0]):d=new Kt(x,A[0]);d.name=l.name,s.add(d)}else if(t.vertices.length>0){const o=new qi({size:1,sizeAttenuation:!1}),c=new Nt;c.setAttribute("position",new vt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new vt(t.colors,3)),o.vertexColors=!0);const l=new zs(c,o);s.add(l)}return s}}const Jl=3,D={state:0,fragments:0,observation:0,started:!1,ended:!1,lightsOn:!0,bathroomLight:!1,bedroomDoorOpen:!1,bathroomDoorOpen:!1,exitUnlocked:!1,area:"room",eventFlags:new Set,interactables:[],colliders:[],keys:new Set,velocity:new h,footstepClock:0,nextFootstepAt:.42,introActive:!1,lightMultiplier:1,flicker:{active:!1,nextAt:7,step:0,stepTime:0,pattern:[]},distantElevatorAt:45,yawTarget:0,pitchTarget:0,bobX:0,riceEndingPulse:0,showcase:{active:!1,timers:[]}},Un=i=>`/Night-Dormitory/${i}`,$e={audio:{fluorescent:Un("audio/fluorescent_hum.m4a"),corridor:Un("audio/corridor_ambience.m4a"),doorClose:Un("audio/door_close.wav"),elevatorButton:Un("audio/elevator_button.m4a"),elevatorDoor:Un("audio/elevator_door.m4a"),elevatorDing:Un("audio/elevator_ding.mp3"),footstep:Un("audio/footstep_wood.m4a"),lightSwitch:Un("audio/light_switch.m4a")},models:{bed:new URL("/Night-Dormitory/assets/dormitory_bed_single-zYilZdBk.obj",import.meta.url).href,desk:new URL("/Night-Dormitory/assets/dormitory_desk_drawer-oMUTDVdC.obj",import.meta.url).href,chair:new URL("/Night-Dormitory/assets/plastic_chair-6Szu5Vd5.obj",import.meta.url).href,roomDoor:new URL("/Night-Dormitory/assets/dormitory_door_room204-p0EtN55M.obj",import.meta.url).href,elevatorDoor:new URL("/Night-Dormitory/assets/elevator_door_set-CqJ1QvPA.obj",import.meta.url).href,fluorescentFixture:new URL("/Night-Dormitory/assets/fluorescent_fixture-C40bM6ZK.obj",import.meta.url).href,riceCooker:new URL("/Night-Dormitory/assets/rice_cooker-CWtMh7QO.obj",import.meta.url).href,trashBag:new URL("/Night-Dormitory/assets/chillas_trash_bag-BSL8MXsY.obj",import.meta.url).href,cardboardBoxes:new URL("/Night-Dormitory/assets/chillas_cardboard_boxes-9BINilMF.obj",import.meta.url).href,slippers:new URL("/Night-Dormitory/assets/chillas_slippers_pair-CIduzUu5.obj",import.meta.url).href,powerStrip:new URL("/Night-Dormitory/assets/chillas_power_strip-DRsc7wQc.obj",import.meta.url).href,cupRamen:new URL("/Night-Dormitory/assets/chillas_cup_ramen-DLyzCikb.obj",import.meta.url).href,towel:new URL("/Night-Dormitory/assets/chillas_hanging_towel-DJYvV4Am.obj",import.meta.url).href},textures:{concrete:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAARwBHAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAD8xlAAA43gAPzGUAADjeAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAMCgAwAEAAAAAQAAAMAAAAAA/8AAEQgAwADAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMADAwMDAwMFQwMFR0VFRUdKB0dHR0oMigoKCgoMjwyMjIyMjI8PDw8PDw8PEhISEhISFRUVFRUX19fX19fX19fX//bAEMBDw8PGBYYKRYWKWNDN0NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//dAAQADP/aAAwDAQACEQMRAD8AcwG3gUgPHNBbjkVHuyMVQh5OSKRm4qPOTRQA7rTcd8U4cdOlOzQAKc8UbSTmlT0p+RjFADOcZxUbE4qZipOQOKrucc9M0AMO4HNOLEMMUqjI69KMdu9AClmamhjwfSkwQaM45FAE/f5uaU5I5qMEHp2p45GSaAI8bjiplUgU1QoNOz8xzQAhBxkU4DOM0ue1HfpQAoHOAPrT8UKGBJPApBlj8tAEbAZwadgAfWo2Vg+O9OVSVJpAf//QkYkDkVCNpqQliM1DmqENIIOKYwIOe1POc5pwGeTQAgJIFPx3FKMDinDkUAJ15xUibT/hRgFfeoydvFACseKhbDHnkVIBxyetLtw3NICuAQfangc/L681IQM03p7UAMcYYikXnntS4GcmjJzk8CmAp6HFMGSeDUhHFO4XmgBVLen5UpJ7jGKVSOecHvSblOB3oAUEZxmkO4EfWmZwciguSKALJ+ZSQeKZv2dOtRRuecU8nPGKAELEnJ708Z3ZB61EQRjbQGcc4BoA/9GTHHBqAjmpvaoyAKoRFzUqtgYpvfHanHANIBwUGl24GKQ4xk03cc0wGglG56VIp3nbUTDLYzUgJX7vpQAFPSnP8x3VGWIFOzkUADMAMiouTyacRkU/BC89qAIwDjPanBgTjHFTbQE3DrUatkcjFADGOOcY5pX5GaaMscGnmIjHPFICIqM59aaMI+R1qRlxnPbpTeD82aYD/frmlC5GRTF5PrU23060gGLgHBqZcA80LtHWkzycfnTAaxUvx2oyCfSmnBbIp+w4zQB//9JeQCSOM0xyQB6U4yHvUbMSeelUIAQcZpzJxmo88jipuwpARg+vNP71G3BzUvPBpgRtHnvTcsPu9alwSfrSOMHFADFIH/16cM4JqMAE08HbQA4E7gBSEdaQkkZqLO7jNAFjc3rmmg8UikEYFNLbcUgHYG7cc0OSR6VHuJNOJzwetMB+crikEfBOaQkkVIq5HPNIAiXjGKkU4bJpFIUYNOIHJB4oAaxzSY4waack0Zx1pgKAeqjpT8lh700OAMGm5HagD//ThzmmsflOOtPyBwetIGBzVCFQjHvTgT0qBd2ealHIzSAcw9etAPbNJnPWjd1xTAeDg5pJDxSAYFIQpGG5pARjB4zzS7hjFMbgjilA3DB45pgKW4oC9xTCMHI5p2eKAHK2DzSEg9KBgU73oAauQcmlIzyeKk60uMjdmgCMH1qRG2mmNipVBGKAAcnNSdetJwOaRge1IBjjBpq89akZeOaj6CmAuSQV6U37owaFGetNJGcUAf/Urox4LDr3oKjOaefmNKevFUIizxk0uMY/QU7GOtPHPB/CgBhzjimIfmx61KfSl2qOBQAnI6cg04460rAleKjQk5B6+tIBSM0mzmpMCg9BTAibimEVIyHhqTAJxQBGBzUw9KaoAyKdxmkAZpyDNNIzSqdopgOKAnilGF4poP403NADy3rTxgrzUXUU4ZxQAp5FMK546U4NzimtnNADhxzUUh25NPPIwe1RbucGgD//1WIoxz2pKcegpGGBuqhEZBzzTx7UzOTilJwKQAVJI7AVKAOx5piNv4/WngHrQAMcVFnB4qbacH1pmQaYBG248inZTmkQcmhk4oAA2Ryag3Y4xTyPWoSuTSAlB5p5Apqqe9OIpgLj0oHTFKpo2mgBh6ECmckVIVxwKXB20ACnjNOBD/KOtIoxS4HUcUAM5xnFImWfb6VOOaaHUHHr3oAULjNVmUEnFWWbBwKj43ZFAH//1kO7GO1ISenWnj5qGAyAOtUIr4PWkYkEg9qtFD26VE2DxigBA52cChd4HPel+cD2ph3CgCdpML056VEAcYFJkU4dKAHLwMUrE4pq0vUYoAgJySKRuAB3oIwcZpvzHmgCdW3DnikOc4FAPy0wPjkDNAEqDuelP285PQmoAWk4HHNWMYGD9KAF3DpTG4GRzTiDnigjjOaQDcnANI5bjApxAGPenMcAYoAY4G36VV5zmp3Jb5agwelAEmR1qTAPNVwD0NSqcdDQB//XYJAowR1pc7iCtCEY6A0uwgAmmImQN1XpUbbVJNSH5RgdxUTYUZNMCUglgenFRPgHmmhqRiPXmkAHGTjpS0DpzScnpQAvTmk4J4p+2kxjmmBDsJanBf0qYDnNBGflxQBHzjApvkH72an2Y/GnxgA4oAhVQp5NTMOBk0148H2pm0/WgBScHilY8Uqpj71I4PQUgGEBhjpRnbweaQc8DrTcHJFMAdxjAqAlqf8AxEU1uKQB34p/NNUdTThk0wP/0ERCBzStnHtUe5gfwqRTu6fnTEGc5/lTiRgDrgVGOpUHpSoPXtQArYYD3phUA4605QN2alOC2McUwIRndTl4NOwc7aeGApAIRxTPanM2fxpQdopgHQ0d+ajLZ5pA1AFgnKjNIG4x+tNyRjHNM780AWVZNuCOfWomPPXimsSflHFOFuxXLHNICJpOaYZN3SnFRnOOaiORTAVvkUEUwMW9qCQRzTxgrQA1CCOepprAk804Ejp0NKV3HmgBu1hz6Upz0pSSF25o70Af/9GJTjrSoxGW49qiC4OadjsaoRNuJzgYFNzt6jrToyOnrTiuRu70AM53E9qsIQVz3qD1pPmHIpASc5zRv52461ExJHNAU5BzTAmHXbSE4O096EXnJoZu3vQBESAcU5mBPA6U1l75pQMN0oAepzSHkcU/Iz0pjkKRtoAmUjIzT3lI+7VdSc5pyngEigBobDbs5qNstzUjEZ4pmeeOtAEewY96ULgZNLwRnNKD8vrQBEVJOBUh5wR+NN5z0qUbe/HpQBG3v0pAKVxk47UjL6UAf//SiFSbc9abjnJqUAVQhFQKc1MBgZ70zIHHWnb+npQA0qOD3puOtSMcLgDrUa47mgCJiTTQalIBGBmo+nFADtzVG2aePenMARmgBo6cU4NxmmbgOKRSKAHk5OBQQSKUfICx703knJOc0AOQkfe/OkkbBwKOc7fWlK4wSelIBWDAZFRIGZjgVI0gPymnoxAO2gBuznDetAXJwOgowW74pAdo5pgNywPFJkk1KmCDkUoXH1oAaTgfWoyKmZgBg0zbmgD/2Q==",import.meta.url).href,floor:new URL("/Night-Dormitory/assets/floor_psx-B_7SgtrT.jpg",import.meta.url).href,metal:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAARwBHAAD/4QCARXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAD8xlAAA43gAPzGUAADjeAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAICgAwAEAAAAAQAAAIAAAAAA/8AAEQgAgACAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMADAwMDAwMFQwMFR0VFRUdKB0dHR0oMigoKCgoMjwyMjIyMjI8PDw8PDw8PEhISEhISFRUVFRUX19fX19fX19fX//bAEMBDw8PGBYYKRYWKWNDN0NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY//dAAQACP/aAAwDAQACEQMRAD8AwqSlpKokKKKKAFopKKAFpKKKAFopKWgAoopaACiiigAooooA/9DCoooqiQooooASiiigAooooAKWkpaAFopKKAFopKWgAoopKAP/0cGiiiqJCiiigAooooAKKWigAooooAKKKKACikooAWiikoA//9LBoooqiQopaKACiiigAooooAKKSigAooooAKKKWgBKKWkoA//TwqKKKokKKKKACiiigAooooASiiigAooooAKKKKAFooooA//UwqKKSqJCiiloAKKSloAKKKKACiiigBKKWigBKKKKAFooooA//9XCpKWkqiQpaSloAKKKKACiiigAooooAKKKKACkpaKACiiigD//1sKkpaSqJClpKKAFooooAKKKKACiiigAooooAKKKKACilpKAP//Z",import.meta.url).href,wallpaper:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAHAAcAAD/4QCsRXhpZgAATU0AKgAAAAgABQEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAAExAAIAAAATAAAAWodpAAQAAAABAAAAbgAAAAAAOKXHAAH/tQA4pccAAf+1U3Vic3RhbmNlIERlc2lnbmVyAAAABJAAAAcAAAAEMDIyMKABAAMAAAABAAEAAKACAAQAAAABAAAAwKADAAQAAAABAAAAwAAAAAD/wAARCADAAMADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9sAQwAMDAwMDAwVDAwVHRUVFR0oHR0dHSgyKCgoKCgyPDIyMjIyMjw8PDw8PDw8SEhISEhIVFRUVFRfX19fX19fX19f/9sAQwEPDw8YFhgpFhYpY0M3Q2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2Nj/90ABAAM/9oADAMBAAIRAxEAPwDu80HmkNA60hhRS0lABS5puRRuzQAtFJntSbqAHZwKYTzRSGgBR60UopeKAEFOoooAKKTOKXcKACkoB5pxoATtRmigdaAClopO9AC0Z9aTmloA/9DusUlOpO9IYU00uaaTQA2iiigBwpSKFHeg80AJmkNFL1oAcOlFHtQTigAzSEim0lAC0ZopKAHCnA0yloAeaTNITSUAPooHTmloAKKKSgD/0e5op1NNIY2m07FGKAEooxRQA8dKCOKBRmgBlApxptADs0hNIBQaAEoopaAEopTSUDFpc02lxQIKKUCnAUAA6UuaKToKAFpaQdaXFID/0u6pDTc5paQxtFFOGMUAJSUUUASdBTKWmmgBc0U2loAeBxijaKQGlzQAzFFKTSUAFJRRQMKdTacKBC4pRRS0ABpO1FFAC0tMzS5oA//T7alzS4ptIYZpKKWgAopKKBi5pKKKACiiloEFGaKKACkpaMUDEopaSgBaUU2igCWkoApaBDCTmkzTsZoNACUc0uKXFAH/1O6ppx2p2aYQaQxtFFFAwoopwoENp2OKXGKM0ANNKBSU8UANxS9qdTe1AABSmig0ANxS44pKM0AJRRSUDFpc4ptLmgQ8GkJBFNooAeOlLSLTqAP/1e6pppwprUhjaKWloAaaKdikxQAlFB4pKACnjmmU5TigB5HFMp+aYDQAAU72o6U0daAHEU3FOptABTaWkoAKKWkoAWlFJSigB9FFFAH/1u6pppMmkNIYZpaSigB9HFIKXvQAw0lOam0AFFFFAC0lLRQMM0ZpKKBDgaTvSUtACUtFJQAUtJRQAUtJRQMdmn55qOlzQI//1+3wRRin0lIY0jFJUlNoAUClpM4pc0AMam04mm0AFFFFAwpaSloELim06g0ANopaMUAJRS4oxQAClPSkxRQA4DijAptL2oAMUmKcKWgD/9DuM0tJinUhiYNGKWgigAprcUo96aaAEpKWkoAKKKKAFpRSUCgB+KQ07tSdaAEFFL0pOKAEpSKXApaAE6UnFONM4oAXrSCjNGeKAF60lOHSgj0oA//R7nmlFFGKQwo7UtB9qAExQQKKM0AMNNqUimGgBtFFLQA4elLkdqZSjrQA/FFGc0UAFJS0UAKKSlpKAGmjFKaBQAmKMZp1FABRRiigD//S7rtRRRSGLR7UhNFACmkxRTqQDaaR3pxpR0pgM2mlApw4ppPFACY702nc0nJoAXjrTqYKfQAUlLS4oAPrSUtJQAYpaSjvQAvSk9qM0ooAKKKQZpAf/9k=",import.meta.url).href,photoRoomWall:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCABAAEADASIAAhEBAxEB/8QAGgAAAwADAQAAAAAAAAAAAAAAAAECAwQFBv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHpKlEzaJuaAYOWglzFOKqhAJ44aIHhrRrIcgPUIUEUqx6+464q7Yf/xAAfEAABAwQDAQAAAAAAAAAAAAAAAQIRAxQgMBITMkD/2gAIAQEAAQUC0LoX5JH1kppdoXaYqV/Gbk5Nt3nQ/CCCCCD/xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAEDAQE/AQf/xAAUEQEAAAAAAAAAAAAAAAAAAABA/9oACAECAQE/AQf/xAAaEAACAwEBAAAAAAAAAAAAAAAAATAxMkFQ/9oACAEBAAY/AvFoyZmaRaOQ/wD/xAAgEAEAAQQBBQEAAAAAAAAAAAABABARIDGRITBBUWHx/9oACAEBAAE/IXdEoZmHYGDRamsFpei4FN/U+3mfbzgsUF2+nFo9NxwG6C/uoobZe/jmXPniBwf/2gAMAwEAAgADAAAAEOqfcvX1Tpw1QnwTBv/EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEgMf/aAAgBAwEBPxA7hD3Zcf/EABgRAAMBAQAAAAAAAAAAAAAAAAABERAx/9oACAECAQE/EOoTOkLBZdRDokTP/8QAJRABAAICAgECBwEAAAAAAAAAAQARITEQQVEgYXGBkaHB4fDx/9oACAEBAAE/EBS4slQWyjcOBrkZmx6Fk5UfM8/QreKJcHEd/BxfFODcVYg3GvUOuVQU3P8ABQ/Q4tEdxaLl250T2oH8crw+olmITcEfI0QXBcw9njMDoZ/fHA+Aihj58JUzSBuAvt7law/abaKlPb6T/9k=",import.meta.url).href,photoCurtain:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCABgAEADASIAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAAAQIDBAAFBv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABwMMbBJFuVLesqrqlYhs7OHBLdO1YyOlzVkjfO2KuQWady5ZTHZC1BM72Q1lazZ7Hm8uejTQznT8t03NFYTJUWDBmjkjrOd3mjIg2KmIhK9fYJ//EACMQAAECBQUBAQEAAAAAAAAAAAEAAgMQETEyBBIhM0EgIiP/2gAIAQEAAQUCiYOzF3ZvvIp/W7IXfeIhYyfg9C8S0SwsZOxfb2JhExbYyOL167B+Asiiny8PWLSJ/Rsi6g5JFkbLc1F3G4lVVVvcg+oWp76fPq1Pe3kOhvZ8NEtV3g0hgqq3KqHK3sWp5jU/nTgtVFRaeEXD/8QAGBEAAwEBAAAAAAAAAAAAAAAAARAgETD/2gAIAQMBAT8BRgwXvP8A/8QAGBEAAwEBAAAAAAAAAAAAAAAAARARMAD/2gAIAQIBAT8BQwDnTL//xAAfEAABBAMAAwEAAAAAAAAAAAAAAQIQIBEhMSIyYXH/2gAIAQEABj8CGQg2iDIQbRo2EEo0bKUYJCiUbVL4zqvTR2NaOy/9M1SHGDyatnGfsdOwvw9kFwJVc6RT/8QAIxAAAgEDBAIDAQAAAAAAAAAAAAExESFxEEFRYYGhIJGx4f/aAAgBAQABPyFbc6BLhfJoEhzqszsS7JNIMQaHGj3eyXJM0cXwf2BTzruHBA2PyERuFqjoeryLBUgQXA1l0MkPVVxY9bRuzFtHwcg2mpLmmqiTVBMUJLjY12B4f0NFmE1N02OUFyVR/wAglbnkmXRlRCJn0HJuXrpwcnk9kSwmti1oFypIxTyVPwFY3OgRe7LdBkSnNFxOj7jmFUi1b5bFvI6CsrGnHXP/2gAMAwEAAgADAAAAEJmtfvwTnrHU/olYQ1ket0XDM//EABkRAQADAQEAAAAAAAAAAAAAAAEAESAwMf/aAAgBAwEBPxA6tpFuGDHk/8QAGhEAAgMBAQAAAAAAAAAAAAAAAAEQESAhMf/aAAgBAgEBPxDRaUK0PIUMRZyP/8QAIxABAAICAgICAwEBAAAAAAAAAQARITFRYUFxgaGRscEQ8P/aAAgBAQABPxD5AQZv+1PzEqTVIKaDQuYQoQYmfYkNRMXBr40wgy9EpZzNk1OyY9RhmFcdJu9xfjlKcZjpiw+oT1BhqYWnhP8AO2npMPCO0dh1AA+yGG5ZV27T4gjRzhFO2KmzwORH1HUPKMFb8xyG7KnMDtPrItDMx0yxZSXfUduxdXuCML9yxwCgYSEAqnmIADRWGC2QjObQFv7UYoieGFIgxN4VwYlT9lYl3bomeLnGUQEkaoWJ9ygef4ggnFqoaRAcrYHojThQJurilpK7Q7eH6IgmrsOfGI6W3IpFWhIMlrqrmdFKKJrVTBXG30QzbAlN0Fv8jDAvJE4WK7YcfvA5ofUx1m0chaqb0/GVSgZA34iCtAm/glBQGsBv5i7EseNnSy2UVHtpvB/Z/9k=",import.meta.url).href,photoWindow:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCABgAEADASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgMAAQUE/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHJklE5D6d08nWKRMRz5JrNvQ6mdnF2isDEc6SazblNq+/P0BAGAObCms01LavRzNIaAxHOkms0xTarSzNIYJCOZdTWbNbKrSzNIbogH//EAB8QAAIBBAMBAQAAAAAAAAAAAAExMgACAxAgM0NBQv/aAAgBAQABBQLQZVtFY1ZLQZQoxxqyWgyhRhjVs9CihRhiVvZoUVRhiQ7NB6MMaHZoP5RhjXpv5RhjXpxMMa9OJhjXpxMMa/fExsX7/8QAFhEBAQEAAAAAAAAAAAAAAAAAASAQ/9oACAEDAQE/AcIIIIIM/8QAFxEBAQEBAAAAAAAAAAAAAAAAASAQMP/aAAgBAgEBPwHGGGHg5//EABkQAAMAAwAAAAAAAAAAAAAAAAECMAAgUP/aAAgBAQAGPwLY40Gg0DA9n//EAB8QAAICAAcBAAAAAAAAAAAAAAABEDERICFBcaGxMP/aAAgBAQABPyHLC34aRtLvggFx1JtI8Sw6M2UCZ4w9bIOhUecVvBgzA0JBTy8lajNxhWecSKNcDdG0VxKgqMdI2iviJUFDwFQqK+IFkKhFfBWbT//aAAwDAQACAAMAAAAQAJW6AlSaAxsw69sS6JMCiREC/8QAFxEBAQEBAAAAAAAAAAAAAAAAASAQAP/aAAgBAwEBPxDiBAgYMIGDv//EABkRAQADAQEAAAAAAAAAAAAAAAEAECARMP/aAAgBAgEBPxA8RwcGNdjb/8QAIxAAAgIBBAEFAQAAAAAAAAAAAAERMSEQQWFxgSBRobHwwf/aAAgBAQABPxARRpbfAubaBfIz4eisoIyHwj42nwXxrgu+T7x4U8l/X8FKl+Z1pMg2ILH6ThCsKnoky5Pzc65rfA+ZR0YFUYCTlKRKJHlN0NyHxwfWj6i/sNSgJKhTjgSwGatsUdlK0VT4ZB4U4Mml3RlSES+RYcnxdJo6mSlJG1obbak9oqWlQgWBonEkptYwkUQUdFHQ0iXDqSEfPop6GiJ9hpWVzbwbXJ//2Q==",import.meta.url).href,photoDesk:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCABAAEADASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAgQAAQMGBf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABdoV801wCa3mEN1KCzcPTpPLH1FVVwXlllldnZZlIJJtM5sw2MauV142MGo0sc2wu2Kg0B//EACQQAAEDAwQBBQAAAAAAAAAAAAEAAhEDBBAUIDNBExIiIzFC/9oACAEBAAEFAsPTfr9Jxge4mUaqfUQevIvIn1Qm1gC5/qU7KhOAYWnprTMWmYq9AMpSVM7HFwxdcCjbKuT8Hbtkxi54Ow0vTmlpwQDi44O5LBLiF//EABcRAQADAAAAAAAAAAAAAAAAABEAIDD/2gAIAQMBAT8Bqxy//8QAFBEBAAAAAAAAAAAAAAAAAAAAQP/aAAgBAgEBPwEH/8QAHhAAAQQCAwEAAAAAAAAAAAAAAQAQETECIBIhQTD/2gAIAQEABj8CcacWpqVPRa9On9Xqso5AlXqOIlstqbL4ZNGIkqMhD9tkw4mJC7Mqgv/EACUQAAIBBAEEAQUAAAAAAAAAAAABERAhMUFRYXGBkSChscHw8f/aAAgBAQABPyE0PgsV5PwGPdGzYSpHC7YmbSGt4FrOhCciHDMQl0jHtmFwQDaeyx5EITWdNI/Yzq+9LmxkKbIdBOjjYXp9sbFDOyKS+CXyOx+iZHaiy/RCZPRUaZOPgEKxghD+4y06SYVNPpaFPJpG0Oad3E/wP//aAAwDAQACAAMAAAAQWCTJr6dO88LqUYXH/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMP/aAAgBAwEBPxAItlLSxITjl//EABgRAAMBAQAAAAAAAAAAAAAAAAABERAh/9oACAECAQE/ENSZGQS7nTu0uU//xAAiEAEAAgICAQQDAAAAAAAAAAABABEhQTFxEFFhobGBkdH/2gAIAQEAAT8QiEUAMsdJy38otBrKo6ruPQLR+IWwhuGoAaAcrAIYG7qE8wrTKYVCnMUKWA7mBFu4oEHvbKEsramXVeBBDSEcJXqJj0TAxZaSwpcruKOD2R0Bl0B+H8i2j9fyMkMFIbZgmjuOEbazbLgXVHigUNM+CXDfd9olsI7rgCYmXXgbj5kxQ9UQbKuXcIdKYcX6lGDl2wJu78VVVmi5acMa5Xg+yVRlnhNpxwkRiVIU+AepCAIDZenx8F9k0hmLnqc3RcNdk3EnKvuZ/9k=",import.meta.url).href,photoExterior:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCACAAGADASEAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABOUJh0KtZ95NJd8nEkzs8DpRqjoN1M05M2dDh4xrhl1m+s5gZ0uIq8aRvasLbPnXZ0wRKB4DO1Yza+QuyFa3ACsNp02anFDN9CW1AoDE3q2c/JQEAQqgJB1CCKnhgC1lKxiyRiNnWqg8JkZUw57QpR7TWmzjAGLCEwRZDljzME3T3jBPJNwomidadE7SE1JOZMMhqLitzwLSGRGlBmrCpLYQwZFX/xAAmEAACAgIBBAEEAwAAAAAAAAABAgARAxIhEBMiMTIEIEFCIzND/9oACAEBAAEFAvx2vJHs/FsWUOPvUhlW+4VVxfAU2uZrOZjLyXjyBxcvqBP8ccN4oSGgboo/k+wi4QYqMrJHxlZewW4p1+p6h+Nqb3CJ+xyEZNVyEMbb5qb6qjA/ti+KPODCsXgBxkDLSqWRlYMJUuIKAfUg8ypqAcvOLy1XJUVwwlTUXpyPeZtWD30YeC7Q0xxPTWDLrpsDKuFLFeTE91DcxHYa+UGRSHI7mP57HdXEHTWL7siB/EgGKlEoWiAjIW0yXcVqxbXFNrc47pS5yGqaCUYUuVRodtVImSxjQ8v/AHK9y7HX31ImolTN8glTU6Q5VELbMG8t4pBJgNwmplalOYiLkJGzGDmfn86ghfa5Ll6wNsrDfHmXhZfHqfKOkHA9RRTepYEx5Zm5CqZ//8QAFBEBAAAAAAAAAAAAAAAAAAAAYP/aAAgBAwEBPwFB/8QAGBEAAwEBAAAAAAAAAAAAAAAAASAwEVD/2gAIAQIBAT8BjrhgwqOv/8QAKRAAAgEDAwMDBAMAAAAAAAAAAAERAhAhMUFREiAiAzBhMnGBkRNCof/aAAgBAQAGPwImhwZwzqow+D549iUeo9kdWjIeVyYedmQ9eDxpj7k9Z87rtr5ewxb/AALeklaHl++bJ90PQmRLk6vT/R078GTXXspyQ7rYaySsfJFeGUPs1FLkY9TmzGmU7ja04JV/JflDzI1B43m1NSzydVP5JXZI4eY0EKLNIpa4PHFQ1Vg1vreXgwpQxprQ6h/yCRTBUYpbEnKfbXHIr0tbIqNBKM5EyUJ2iye18VW+k6FJrkpMrJSydvYyrYZQ7R2cjeyvgySaH9byzUazpyfccjgzZCtNvHBlmv8Ag7YPLQUZPpP/xAAmEAEAAgICAgEEAgMAAAAAAAABABEhMUFREGFxgZGhwSDhsdHx/9oACAEBAAE/IdqNY46qDh9xu67lplI0N9P4H8OEMVQ5XHcqf5qjS6aScnQP+ELgU2v1NEeyi42misSw1Qx0PkGVQ1M3zbTJxIstSvfKlCltv1CDN+RNZs6gbhVFE37JUryO5FC1rnmVZpqNvaBcyo4CntAuihyjOPonqRMSoHh0KPcfwqoJpLTECldMemUJhJuXSArU88MM4myEubwK5iLnGMsvnbqLSMcZ6mHCBgbDJLlOLfZMmcwdaO2CT2/pL+X4rT7mwuVDGwHVS4VnEtVqwYSU1EOZihWb1DZXGbJWwkwZc+w7/wBT8COpR4bNU+omQtsjZiKzNeo+xa5uYnuwnCqjYsP0ZvE6/coWQhUtQb9wVQLidgSBTn6xBYac8bgVkDdyh88epzGIkFLeWXgDThlkjHcTwaMkTkVq6+8pdgKYhAVK9RWbuJEMCKwzyS3Qj0g2N2wXJuHfUeraKigmG5ctnMALhThNfdS4PkZYFZIFavMspOWGA3TZcrUNM+ADiz4ZXt+uYSuUsW9IxZU+ckOq/wAmHG5MMvpRBqILiAWceOfBWjqJXgXQzBgljaep90qV0ByVcppWyLRbKkRVLnqGs0x9gilJiFKHJMIapQtkq64uVocZfml9schbvEs746mChQbmNMPUqBpk8o6abH6iEUgP8/4g5g1qYhvPUqX1U2UU0dQwqvUul0yikTYNtcsNHL4UDAyxQDx8xOkHpfZqaptP7ef/2gAMAwEAAgADAAAAEMATcwA/WUDE5kBAMkDMlFCISQCEAYhMS8TIgPRMgMwMzMTAwEzMwGGMBHeIBfZOIP/EABsRAQEAAwEBAQAAAAAAAAAAAAEgABARMUBB/9oACAEDAQE/ENOvyEwDGl40l+Yz3lNPltP2uif/xAAbEQEAAgIDAAAAAAAAAAAAAAABACARMBAxUP/aAAgBAgEBPxDgbDiKmbg2hU2Du54ZYn//xAAmEAEAAgICAgEEAwEBAAAAAAABABEhMUFRYXGBEJHR8KHB4fGx/9oACAEBAAE/ECnJY3hm5EuwyD/UzyZ6MofjNHh+Yxo4rb9fH/k3rP1FsAPq5S1eyqeoNrovQuF7Lq7k4Y97V8o1dn96lCMFnv27I0yIRYTlpNE3lP2JYhuCiek5I45OHP4umPrLOLiEUAjcI3F52DVYeSDWjthpxCzZmUjZx+Ikali5t46jsVZsxj4/cxukaqPwfEwHuMwNqGKtMQwpomfoVRPI9Sj5aE0PzE1O9pzcCpFQyzaxoAFC4QIIrePpPENvsq7Np4WUtraPHUycQj3K8QWJbLlq33xLgOuSCZCRlMHiyDz/AAbsKw8emMyzQjxdxiCtmCwa+IoSijXp+ZZTpHP2gNDyRhuOEdIXKm5cNwDOpY6IAW+GUUdMIpR76jrhbMjBJiVFRsNgGyku6SPybNGHxXncUFN0ma6ioFtxyO3y7OYaEE4ikaA4MoOWtWJjv/kIlZq8L/MW2trPu/mXNBZgZ5uFC8vNaj5TJpIh0GZyr/Mw2LoTrzC4KQdvydMQXpXpF57eYZV8opXTGrqWMGTuFU0OVV++4SgzTmU5ADYErv1N47L6OozfggXAuGKC2IjgpVdssVKoSufiC8hHLyZpP3cJ3fasM06PJAEyOCncsodGUx946xQ7JcEyKvOIVVCxZcsu1NgrqGkCKRaMt8czYMRoRqJTsNDmiCEAKGprX+QeoMbGo352G5M/xNjI2hKzs8y9YoNJdxp3ih40lLJBhyS9KVEUne4FwPIgLd0sIwA1hDU0qReDXiNdp8w8woIWqeHr1DXE1HtV01ZEuqCTTviNLGY8ZSoq21K9RSFK2Acf5AOEC0WuWUcBqhbouo9JNwTFbhXNzAwIUm91UZFCoBv3MzAFj29+oAbiy77tyco+CQBYLLCl3Tad4hIUtLrM9wCESWUiDkqCF20B44z9otSK1bsb/wCQqhwLf2/2D4Bu12R9wc8Pn6YUW2eYobYza3R9yxUC4AHsC4GgQeCD1AXYEgChd5usQKcPQ99zdPDaY3mn0wmSg5nSoxr3HuRQAZrnmsc/EMEUxTg9ywUIXbk8PUWXAtOpU3xH9vF2ai+rrzN0wBNbj+ASjVwLWabX4IqodAmD91/MXVOH7mCpQwybpNfvUpXoRoVNGoSynp/eILBoHjRiQLBSneGVFJRWmrRNcJsetQmLRdbSmYibtlLFii6a9ynw2sbcMTWiil+1EUAJsKCz35gh9VklRyOVmnX2jwBWrOBjcRGugvzbEyN8ZvZngIjFmUwkHdZOKodtQGlsw6Tc0MrcGE//2Q==",import.meta.url).href,photoBuildingWindows:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCABgAGADASEAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAQUABv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB1Rk5ZIPIp8dP2scvM7Tz4ovrn0Gidwt545415YhxshSo7jNZ4QZtOqE4nokTy66z5o4Odej4nYDhvRTnLCmWik8kRYTuBAPlxZZYeKthLhTgAgOJKx2HMtG+j20n0RvoniMKFwwaPwK4jspFxLOjkrU80QRhB1PiOnVzSsAsJcP/xAAlEAACAgIBBAICAwAAAAAAAAABAgARAxIhEBMiMjEzBCAjQUL/2gAIAQEAAQUCZbh5DisKOKIUwbYyByPAwMO51IuUa7VN8CrUbYmblVsR+M4+IGB6kQ+palB2g2xmZxE9Zi5itUBlgwrMnkmPYDW1o4o/picdMSGz64/qDqCvrUYQsQoO6smuEzDk2A9iCBj+vFVr4gG5VxlJXGusyfWr/wAf9stzyWLrR2DgtS9TPlcVDHXbNdNRsV5K3P8AKOID59PLtqfH9CvNmDENsXyHuA3FHkwOt3NhBNxfHQiXR1buYzz8fkzHRZPbESYWp8ZB/QrF9n+7G+xxB5j98MIHcZBSE7y+uQeaoFf/xAAUEQEAAAAAAAAAAAAAAAAAAABg/9oACAEDAQE/ARH/xAAXEQEAAwAAAAAAAAAAAAAAAAABIEBQ/9oACAECAQE/Aa5Iy//EACYQAAIABQMEAgMAAAAAAAAAAAABAhARITESIEEiUXGBA2FSkbH/2gAIAQEABj8CNMf7Kdig/jKcCphml44lp2tcSZcplFrooyFzqtjaFTsX7D5hlCxSeDxLJVZOzRfkaZe8JCaZZIvAz0KVCuLnUNIhpnhlHZqUXgZSguzm4coQ6CdPJqhz/ZX6kPTKFRd9thpi/GdZW4ZEM0zfkevbVWZSJe5tD+h/Y6ZLTps6l7HewzzLA/Y6l+48bLGKMXgyLqpUfsY6oi0qlDTthcv/xAAlEAEAAgICAgICAgMAAAAAAAABABEhMUFRYXEQkSChgbHB4fD/2gAIAQEAAT8hE9JquJ0JddolhyIzlzOA6l+i94CisMkTuebqE2rIXX4AESZjny3BJTRAVjkZrZWQJRHegzEutSgrS/uZCEBswbv4SY3uG86b9R3rf+Eq6eUJyQHkbGWd91F9UJUttiZFtAvMFPUMADi4w31/b3L1HjTL6UGGw7xM69rUYteLMwWTxcIIWxrif8XmGvYxzaZpNrOuYiClWr1HOwRCpyKzAzDmWb4fQYHQBOoaHpl5a5HufuSp6M4qa1bKDiEcRApIgdGHklkK5wk/gIi1UP8ACZyMT6QCXxpl/sBv/cSwO4aw8wwgcIQF/fyERC/EskvKUxRMvfqMEuGiczfjAeROF4Zgrq61Fv0+Kw+YcC0rDSAYiy4HweY9hO+XwhHepxeEiqgsl4O8GejUIAr+0AsxrG4Nsr9kyyOIPkzdTLSSsy8awwNtT01NVXaI35cMLoNbRIU/acN40lwd0QcgxFvH27mb+Emx2iDKx9TDNmGa8r+AmnDwPBF0Dk3D0OwZ4CF/gCmEc3UAVRz7n//aAAwDAQACAAMAAAAQzEgDjsyKSARDcEiCHAyH1MwEAxSIyIBALCDIIELMOEg8GETM/8QAHBEAAgICAwAAAAAAAAAAAAAAASAAQTAxESFA/9oACAEDAQE/EPDctbh2pnHeC2tzhO2Lf//EABsRAAEEAwAAAAAAAAAAAAAAAAEAIDBBMUBh/9oACAECAQE/EI+uBVMCJDEynVuf/8QAJxABAAICAwABBAICAwAAAAAAAQARITFBUWFxgZGx0cHhofAQIPH/2gAIAQEAAT8QDbRaVK7JhZhjKF8cPkJisij6xSqsEzzDSNFeXkrqF9VWTSd/uBJ8aS+f3BaWuV26Yix4hsmrixvv/oLJHY5GVJ3mHIePZ7EmhtcROiUt5BQHsqUssgXxI2eu1M47i5n4eTq/w+SrS1k9cQUoVU8M/uKx2EGYp4lop9gjqA/JpgOHIQ9lrLnAMq7RPIOwo2Xmk0pKbD2Ux0wlr5q4SlZYe5YIUDbs/qWOK4biVmKjgJvyyIwFo4Zaw8fDiKlapm+Jm1uAbx3ENCMqYHX7QNNSLxquHkjwi6xur2faXRAH6Nblkh8iL5lGSGLY33EDMDR67Ih1UY0SS2Ty4Lq3T8IGBkA8KGoQjupeLfx/cLacvkqIEqx4hkLpd0o3UQvQl84/iLaiF6yNuX/EuiBzb6hbRGjs58ZSy1b5frqEdxX8EWRbxyDhFZevwQKgoug3uIcqkW7edX1r4lgd8JyP8RgBHY6YyKmQ/wDp8xcsrwEpr8QI1BGCoaEor8ckVAzoGuv/AHUDLCrBpPhlKg8+AnpqCZ0cgxTrJxEKW8KOYQGLo3d03HzV3Suo0XzW64lCQ+hN9/R4Yuqs92fPsJEOiLV5RlFHW815v6VLHD7Bn6amGekw/wBw0VtHiIKOUL6MF7ww/H9S4NjoLqFDkCvhafqIV3MOgXHhJ5FU1cDk4IuM3FvH+YF3h7gbIg7iF94z5OYC4AUZRxizZ+IjFzMDXMeKuz7ZGLwRsTu65hAs2DVw6VtDXtZ/ExBEroC/Zpi63Tho9Tcz7PyE4k9hsl0I1EcvkWwUijTpjt4lxqhh6hKr2DZ3319fvEMoNGr2xhdlzVXZ/UyylSBw8agNieR1cjVyLwkpnxNhOGXKMEUzm9vP1jVEXZfcwhQrgOfX8QRRzKi6qxl2AEEXUYXlCjKq9P3iNQsCve4ACi3GTqFcwSVV1Ux3mhfeGf7a3G5HMDBHPVYrdbPMweSihtzgdP11X/Bk5PTqUfeZQcTQKzfyr/JHBMqLOXTP/9k=",import.meta.url).href,photoEntranceGlass:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCACAAGADASEAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAB5biTBwKhAFkiYJiwDmKqrMxAALYDYQNmUj2SVYuSACOhiiHRoyxu5dK0IJrySr0Vc/mHV5YvRMz49aeXnUelVWIvqSIozbkI+kMXHL6kiKBvzF1ZayipIigbajREJmKKRFA350pFAtSQaiOjSUMYllg5KB2yJFARygx1HWURKIiQkEhsASBAAywBAEQYAf/EACcQAAICAgEDAwQDAAAAAAAAAAABAhIDERMgMTIEISIQFCMzQUJD/9oACAEBAAEFApxYjTKsqyrKsqzTNGjRyPlThu+MvjL4i+IvBy5JnJMsyzHJn+k/Loxfs+mzZ/P95eS1trHJZV8PtcZwQg+l+c/MhmlGEs8pQ5B5EPucczjyFWPvLyXezw5PdejMcYyyPuL1ElFeonIySbnxpwl5FPVk+eGMxtrI+/RLvPyXu9Nwz4m4CVc0vLol5S98nASxNN4NH25veeXl0T7+3LJQUdY2tQc9Y2Y/2S8ujJ3yef00aMa/JJfLRUqzRlXzyx/JUqVKkI/OvvUqVKCgKLRpmmaZ7j2cZRGkVRqfXo0aNGjRyHIchyHIXOQ5DkLly5RFEURRFCiONFCpRFEVR//EABgRAAMBAQAAAAAAAAAAAAAAAAERUAAC/9oACAEDAQE/AYRDw5V3/8QAFhEBAQEAAAAAAAAAAAAAAAAAEVAA/9oACAECAQE/AYTm7//EAC0QAAIAAwUGBQUAAAAAAAAAAAABAhEyECAhMUEDEiJxkaETMDNRYSNDUsHw/9oACAEBAAY/AsLMr2VyWkxzjk5nqHqFZWKUZUypmbM2Zux3Yed5DMcilxQy4ZQkeGe6VPqJp4z97yY7FD4eWo/p8JkbGHVZ20RdCiLoZCGIlPb7SXQ2k1LjscWEXwOyrsYRdjE3p5Ds+51N2NNQxPWxSeo7qGSRDvbNzSlSn+yagy+ErEvkd2EkOUU5ORKaHxf05D4uxNfkO7CYvUiltH1JxRY8zGPT3K+5DzHzuwjuw8x87sKHdh5ju6Dy8qldfNpKSkpKSkpKSkpKSk1NTW9rc//EACYQAAIBAgYCAwEBAQAAAAAAAAABESFxEDFBUWGRIKGB0fHhsfD/2gAIAQEAAT8hlStRJoq2OYcDOM4mcBwYSWxLY5IpWYLsqSmJXN7OeJAa50KzgE4E/wC4/SP7oboY0u58kl8k8MmWichqgU3xWVPEqsYIjaSF9iXEySJkfgBsGaJo3G3LJZLJYhjVN5wbOfA0yH4ZG60LAw9X0GZfD9QftBpcNldD1eMJGtKU6DkimiJYSRsaMp4Ji2abOT3sEyiEhSFN5ndSCGaLTLGOP7hW5QXueExilE4Z72Esl7k1IB7QjQiW8kQmsz7QpVZnovh4VEmFPY8Y8X9ETdDew2iLoyfH2QMxQmm3GY/K04YTTzksnqo+siCshp/p7PjR/wB6kQUFCoiMxMV1nbUjmW6z+ZKp8fBluOU26lOZnNKHoz33ikAkDAlOJ0Id87wiZVDHpdSXPQr+i/1h64OVLXBaW4NxdRtmJucyx2WOyx2Rw7E4dmdt6sg0EUmPalSGQNMkSPnj2FwuEN3ZDcQ3dkdwkykOrOXC8Xy/jJzC8R5LhUzZBPUjqLhcLx//2gAMAwEAAgADAAAAEFm1fxLXaAAMTAjEBGS4BegEMOABSAIBAAhNAAyFCZjBzIx/ALzMyHzESIJACMyITP/EAB4RAAEFAAIDAAAAAAAAAAAAAAEAEBEgQTFAITBx/9oACAEDAQE/EHhR0AiINQYRPlpFR80DhTa/Vvs1y+1lb2//xAAcEQACAgMBAQAAAAAAAAAAAAAAAREgECEwQEH/2gAIAQIBAT8QZCNY0aFiCCPA1IsRVQHLh8qrKy8S67r/AP/EACcQAQACAQIFBAMBAQAAAAAAAAEAESExQVFhcZHREIGhwbHw8eEg/9oACAEBAAE/EAluVKiY58YulRrwT+ZP40wXftP405+c12le7tOenPSxqSxDioo06wNq2YFF9JX/AK/ydb7/AOSh+54mPe6viDGsK3liVyLxnaIU9+AZmc9yB3OBCcTY/mcxl608PT4b8xvRtmfsIFs9ovZ9oljHwMtENB2ZEEsAC0N2oppkgFb9bcCjgppByXW0z1fnh/UpN5i94bEMV7znTnTnRUjNIbjXux82b8wFaC1hNQUyDO9SiAEG0W15q8QXgIcaq7QXVU+8+W9BwRx0/lP0b6lufrSEfor8sVtxZqGgt1Be0ClgakCceUEBaDSYNT0ImKyJYo3T5z8+hCUgxyxtARphpGCyhMdWDao0QzSsw60NcRIEpVgl9y21SAtPHXb02yORZZifP/n05j3gTYh5MFRu3SANQL85fRlwKoNVhVTaOl0zghZza9QA8RenpeeDXVbk+T/P/KF9KOdaveCxSmJZzy3hnTsCmrC1wGmLl/MEDQFYW3Xa4wVUiCS6nsPeNKoR0mRbnDMt32hfa8LNo+d/P/I7j8pcWGkNIcb2g0OCA1GTD3e+8cz/AJFXYtim2P7FWKNjfQa46borYgSuWwnVDW18TM/Q8SfrOPraFfUt/SH1X3DAbP1MddOUpXfxBbsVs3KEv+5FP8HODeMttcwb1Op2gCAzenOG61JkORLrsggaiLcUdT2lT29PmQlcX8wfDME8XSaqhfD4j7h4pa7kT9BG46Bw5QXb9ukT273icnveJy/26Sngt+uEaVNo4hrEwW1E2F9oblP64S+GIldZSdHM5DLcIl1qciLOjnnLjk7IqsDDLIvtCsUr7jzAXnvHmfy3mNB+U8xya/R5iR95PKZ5mCFNa2eZcdf3NO8rf2nmADPdPMBtRzTzKD/HiatK9zxNls9pZefjLd3L9dPMmwp6k3XSBkgYq7iCY+dTBqz2g257T//Z",import.meta.url).href,photoAsphalt:new URL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAA8LDA0MCg8NDA0REA8SFyYZFxUVFy8iJBwmODE7OjcxNjU9RVhLPUFUQjU2TWlOVFteY2RjPEpsdGxgc1hhY1//2wBDARARERcUFy0ZGS1fPzY/X19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1//wgARCAAwAGADASEAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAgMEAQAF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAZgKCO4xRKUcVWRibjuOQT8bxZOSVCyDeQLkPB9FvmVCBjKqUgPZH1W+c2F5QaFkASObbM0AQeNyTBX/xAAhEAACAQMFAQEBAAAAAAAAAAAAAQIQERIDISIxMiATQf/aAAgBAQABBQLE1DFfM3t8zmftIT45IyRcbGJl+NzLbV7sPUiRmkR1USakS8lz+M3yn5u3KdmWLUWpxL0j1DYl4fp8qPqiqhLeY+2rUdV1X//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQMBAT8BE//EABQRAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQIBAT8BE//EAB8QAAEEAgMBAQAAAAAAAAAAAAABEBEgITECQWEwUf/aAAgBAQAGPwLRw+mllsvg1Vf04HRvo9MyYZXlp8EM0jkLTLytVps2yVWn/8QAIRAAAwACAgMBAAMAAAAAAAAAAAERITFBURBhcYEgkbH/2gAIAQEAAT8hWjynYrqY2Kliv8clD8cfpfGWSjFPYYT6CdXRo5MtGOfKextlmY1xR4D/AMxG96Gyawn6UT1FNtttqISbtqZZ7lG4tzFLhdBvhdFb8C8SC+kKMIyptDg1mlX2dlUGw25nkzat/wBDac9IdptaNHDXSGaLgwM0G/CY+BJobEq3PpvUhnFmvXYkhvNxCROvHHHjSGoLIxM//9oADAMBAAIAAwAAABBIAGgMxABEyPOEeEMDgC/MBLb/xAAWEQADAAAAAAAAAAAAAAAAAAABMED/2gAIAQMBAT8QpK//xAAWEQADAAAAAAAAAAAAAAAAAAAAAVD/2gAIAQIBAT8Qho//xAAjEAEAAgICAQQDAQAAAAAAAAABABEhMUFhUXGBoeEQkcHw/9oACAEBAAE/EMwNWw6GIWW4hjcLpHLuEW1fwJoHERAI4R4jtvsgvZ6w09b8R8mvicdysq4DFfo5mblnIBAtqar51KMADWcRQEZ1V5l8len3L8prdgqJe5RKO/DZcoS9X2hlxLSyIagvsf5maEw7Vrh5lphXvZAUWwpTv9QchG2Q7zGHBqXKY9YuA2Cs8EVK+IIBFfcajq6YXROc2QC20UA5i0g1sAtTOs1mpn2im0tQxRvqbqrDWR/stZg8+Yiy0dwVUojxASWwAF3Bqm8XruUu16XxKUoI4iUoB4svVx0KnAaX6hC3AFA4+YmxBJijuPZTaiuYh1Zcx2WMRGFOvxU3kHzFVEzsGbsX3UIadNuARsN7FuFveYG+pRQ/hmwmKi79oolNG+3ljS5IcWVLwwoCtQBWi3RcsS4A1H5NxGS8XKtbn//Z",import.meta.url).href}},Nm=document.querySelector("#app");Nm.innerHTML=`
  <canvas id="game"></canvas>
  <div class="hud">
    <div id="reticle"></div>
    <div id="prompt"></div>
    <div id="objective">클릭해서 시작</div>
    <div id="storyPreview" class="story-preview hidden">
      <p>늦은 밤, 고시텔 방으로 돌아왔다.</p>
      <p>바로 옆 엘리베이터는 멈춘 층도 없이 계속 울리고, 1층 밥솥의 보온등은 꺼지지 않는다.</p>
      <p>나는 그날 문을 열지 않았다.</p>
    </div>
    <div id="subtitles"></div>
  </div>
  <div id="start" class="screen">
    <h1>Night Dormitory</h1>
    <p>WASD 이동 · 마우스 시점 · E 상호작용 · Shift 천천히 걷기</p>
    <button>시작</button>
  </div>
  <div id="ending" class="screen hidden">
    <h1>다시 방이다</h1>
    <p>1층 밥솥의 보온등이 꺼진 뒤에도, 방 옆 엘리베이터는 계속 올라온다.</p>
    <button>다시 시작</button>
  </div>
`;const Zr=document.querySelector("#game"),Bm=document.querySelector("#prompt"),Om=document.querySelector("#objective"),Ji=document.querySelector("#storyPreview"),qs=document.querySelector("#subtitles"),$l=document.querySelector("#start"),ec=document.querySelector("#ending"),Bt=new Th;Bt.background=new Ne(328966);Bt.fog=new ja(394759,5.5,30);const qe=new Yt(63,window.innerWidth/window.innerHeight,.05,70);qe.position.set(-2.78,1.62,.18);qe.rotation.order="YXZ";window.__nightDormitoryDebug={getPosition:()=>({x:Number(qe.position.x.toFixed(3)),y:Number(qe.position.y.toFixed(3)),z:Number(qe.position.z.toFixed(3))}),getArea:()=>D.area};const cr=new Cm({canvas:Zr,antialias:!1,powerPreference:"high-performance"});cr.setPixelRatio(Math.min(window.devicePixelRatio,.92));cr.setSize(window.innerWidth,window.innerHeight);cr.outputColorSpace=Et;const vl=new Xh,zm=new We(0,0),km=new Wh,Ml=new ai,Hm=new h,Vm=new Fm,Gm=new Oh;function $t(i,e,t){const n=Gm.load(i);return n.colorSpace=Et,n.wrapS=yn,n.wrapT=yn,n.repeat.set(e,t),n.magFilter=Vt,n.minFilter=ns,n}function Ki(i,e,t=1,n=1,r=64){const s=document.createElement("canvas");s.width=r,s.height=r;const a=s.getContext("2d");let o=2166136261;for(let f=0;f<i.length;f+=1)o=Math.imul(o^i.charCodeAt(f),16777619);const c=()=>(o^=o<<13,o^=o>>>17,o^=o<<5,(o>>>0)%1e3/1e3);for(let f=0;f<r;f+=1)for(let u=0;u<r;u+=1){const p=e[Math.floor(c()*e.length)],m=new Ne(p),g=.78+c()*.32,x=.86+Math.sin((u+f*.35)*.28)*.08;m.multiplyScalar(g*x),a.fillStyle=`#${m.getHexString()}`,a.fillRect(u,f,1,1)}const l=new Gl(s);return l.colorSpace=Et,l.wrapS=yn,l.wrapT=yn,l.repeat.set(t,n),l.magFilter=Vt,l.minFilter=ns,l}function Wm(i,e,t,n,r=3,s=3,a=96){const o=document.createElement("canvas");o.width=a,o.height=a;const c=o.getContext("2d");let l=2166136261;for(let m=0;m<i.length;m+=1)l=Math.imul(l^i.charCodeAt(m),16777619);const f=()=>(l^=l<<13,l^=l>>>17,l^=l<<5,(l>>>0)%1e3/1e3),u=16;for(let m=0;m<a;m+=1)for(let g=0;g<a;g+=1){const x=g%u<1||m%u<1,A=new Ne(x?n:e),d=Math.max(0,Math.sin((g+l)*.15)*.08),R=f()*.08+d;!x&&f()>.88&&A.lerp(new Ne(t),.28+R),A.multiplyScalar(.9+f()*.18-R),c.fillStyle=`#${A.getHexString()}`,c.fillRect(g,m,1,1)}const p=new Gl(o);return p.colorSpace=Et,p.wrapS=yn,p.wrapT=yn,p.repeat.set(r,s),p.magFilter=Vt,p.minFilter=ns,p}const kt={concrete:$t($e.textures.concrete,1.6,1.6),floor:$t($e.textures.floor,2.2,2.2),metal:$t($e.textures.metal,1.2,1.2),wallpaper:$t($e.textures.wallpaper,1.8,1.5),photoRoomWall:$t($e.textures.photoRoomWall,2.2,1.8),photoCurtain:$t($e.textures.photoCurtain,1.2,1.4),photoWindow:$t($e.textures.photoWindow,1,1),photoDesk:$t($e.textures.photoDesk,1.4,1.2),photoExterior:$t($e.textures.photoExterior,1.5,1.1),photoBuildingWindows:$t($e.textures.photoBuildingWindows,1.2,1.2),photoEntranceGlass:$t($e.textures.photoEntranceGlass,1,1),photoAsphalt:$t($e.textures.photoAsphalt,2.2,1.4),bathroomTile:Wm("bathroom tile",11120035,6712679,5593944,3.4,3.2,96),dirtyCeramic:Ki("dirty ceramic",[14144192,12104613,15196106,9144188],1.5,1.5,48),fabric:Ki("thin old fabric",[10194296,6643536,12169115,4143923],2.5,2.5,48),curtain:Ki("pink curtain photo smear",[11110265,12624017,7625558,13875366],1.5,2.6,48),deskLaminate:Ki("brown laminated desk",[7227954,10120521,4008477,11766369],2,2,48),roadAsphalt:Ki("wet asphalt",[526344,1513238,2631203,987411],2,2,48)},I={wall:new at({color:13616035,map:kt.photoRoomWall}),concrete:new at({color:12631216,map:kt.concrete}),floor:new at({color:11171920,map:kt.floor}),ceiling:new at({color:7170656}),trim:new at({color:2367774}),door:new at({color:4469285}),doorDark:new at({color:1906451}),wood:new at({color:9071184,map:kt.photoDesk}),paleWall:new at({color:12893865}),paleCurtain:new at({color:12163468,map:kt.photoCurtain}),mattress:new at({color:11907236,map:kt.fabric}),darkChair:new at({color:1118997}),paper:new at({color:13748138}),plastic:new at({color:10659744}),bedding:new at({color:6511175,map:kt.fabric}),pillow:new at({color:13682617}),bathroomTile:new at({color:11842986,map:kt.bathroomTile}),dirtyCeramic:new at({color:13288884}),screenGlow:new bt({color:793383}),roadLine:new bt({color:14009452}),tailLight:new bt({color:11809060}),streetLamp:new bt({color:14926199}),red:new at({color:6365473}),black:new at({color:526344}),asphalt:new at({color:1315860,map:kt.photoAsphalt}),exteriorPhoto:new at({color:12105901,map:kt.photoExterior}),buildingWindowPhoto:new bt({color:8886176,map:kt.photoBuildingWindows}),entranceGlassPhoto:new bt({color:6716025,map:kt.photoEntranceGlass}),invisible:new bt({color:0,transparent:!0,opacity:0}),metal:new at({color:12763320,map:kt.metal}),stain:new bt({color:1380621,transparent:!0,opacity:.36}),glow:new bt({color:14340778}),mirror:new bt({color:1318954}),windowGlass:new bt({color:1782596,map:kt.photoWindow,transparent:!0,opacity:.58}),elevator:new at({color:5792359}),riceLight:new bt({color:13978159})},Z=new Sn;Bt.add(Z);const St={enabled:!1,clips:{}},tc=new Vh(3090977,.52);Bt.add(tc);const os=new kn(16770728,1.75,14,2);os.position.set(-2.05,2.35,-1.45);Bt.add(os);const ls=new kn(16765339,1.2,9,2);ls.position.set(-2.8,2.35,-4.25);Bt.add(ls);const hr=new kn(12113663,0,7,2);hr.position.set(1.42,2.16,-3.48);Bt.add(hr);const cs=new kn(9746175,0,10,2);cs.position.set(0,1.2,6.4);Bt.add(cs);const Fi=new kn(11912447,0,12,2);Fi.position.set(0,2.35,10.5);Bt.add(Fi);const Ni=new kn(13161471,0,5.5,2);Ni.position.set(.9,2.12,7.55);Bt.add(Ni);const si=new kn(16766618,0,12,2);si.position.set(0,2.35,21.5);Bt.add(si);const hs=new kn(16724770,0,5,2);hs.position.set(-.6,1.4,24.35);Bt.add(hs);function z(i,e,t,n,r=Z,s=!0){const a=new Kt(new Oi(e.x,e.y,e.z),n);return a.name=i,a.position.copy(t),a.castShadow=!1,a.receiveShadow=!1,r.add(a),s&&(a.userData.collider=!0,D.colliders.push(a)),a}function ti(i,e,t,n,r=Z){return z(i,e,t,n,r,!1)}function Ci(i,e,t,n,r,s,a,o=Z,c=!1){const l=new Kt(new Ja(e,t,n,r),a);return l.name=i,l.position.copy(s),o.add(l),c&&(l.userData.collider=!0,D.colliders.push(l)),l}function yi(i,e,{position:t,rotation:n=new Ft,scale:r=1,material:s}){const a=new Sn;return a.name=`${i} holder`,a.position.copy(t),a.rotation.copy(n),a.scale.setScalar(r),Z.add(a),Vm.load(e,o=>{o.name=i,o.traverse(c=>{c.isMesh&&(c.material=s,c.castShadow=!1,c.receiveShadow=!1)}),a.add(o)},void 0,()=>{console.warn(`Failed to load model: ${i}`)}),a}function Xm(){z("floor",new h(4.35,.12,7.15),new h(-2.05,-.06,-2.05),I.floor,Z,!0),z("ceiling",new h(4.35,.12,7.15),new h(-2.05,2.62,-2.05),I.ceiling),z("photo back wall",new h(4.35,2.65,.18),new h(-2.05,1.32,-5.65),I.wall),z("photo entry wall",new h(4.35,2.65,.18),new h(-2.05,1.32,1.55),I.wall),z("photo bed wall",new h(.18,2.65,7.15),new h(-4.3,1.32,-2.05),I.wall),z("photo desk wall back segment",new h(.18,2.65,1.35),new h(.22,1.32,-4.98),I.wall),z("photo desk wall front segment",new h(.18,2.65,4.15),new h(.22,1.32,-.42),I.wall),z("bathroom doorway header",new h(.18,.45,1),new h(.22,2.42,-3.55),I.wall),z("entry alcove dark wall",new h(1.35,2.45,.16),new h(-.55,1.22,1.2),I.doorDark),z("narrow entry trim",new h(1.24,.12,.1),new h(-.55,2.08,1.05),I.trim,Z,!1),$m(),jm()}function Qm(){z("photo bed mattress",new h(1.15,.32,2.5),new h(-3.65,.34,-4.25),I.mattress),z("green bed base",new h(1.28,.18,2.65),new h(-3.65,.16,-4.25),new at({color:4543041})),z("bed headboard",new h(1.18,.74,.12),new h(-3.65,.72,-5.46),I.doorDark),z("thin blanket folded on bed",new h(1.06,.06,1.2),new h(-3.65,.54,-3.72),I.bedding,Z,!1),z("flat pillow near window",new h(.86,.12,.42),new h(-3.65,.62,-5.08),I.pillow,Z,!1),z("desk opposite bed",new h(.62,.18,1.36),new h(-.18,.82,-4.32),I.wood),z("desk leg front",new h(.1,.72,.1),new h(-.18,.4,-3.78),I.wood),z("desk leg back",new h(.1,.72,.1),new h(-.18,.4,-4.86),I.wood),D.chair=z("black plastic chair collider",new h(.6,.78,.6),new h(-.92,.38,-4.32),I.invisible,Z,!0),D.chairVisual=qm(new h(-.92,0,-4.32),-Math.PI/2+.15),z("wardrobe",new h(.72,2.1,.62),new h(-.18,1.05,-.7),I.doorDark),z("mini fridge",new h(.72,.82,.62),new h(-.2,.42,-1.62),I.black),D.tv=z("blank black monitor",new h(.78,.44,.07),new h(-.68,1.08,-4.75),I.black,Z,!1),z("shoe rack",new h(1.1,.32,.38),new h(-1.7,.18,.9),I.wood),D.mirror=ti("mirror",new h(.7,.72,.04),new h(.11,1.48,-3.7),I.mirror),Ym(),Km()}function Ym(){z("tall window frame",new h(.66,1.46,.08),new h(-1.58,1.56,-5.52),I.trim,Z,!1),z("tall dark window glass",new h(.46,1.22,.04),new h(-1.58,1.56,-5.46),I.windowGlass,Z,!1),Zm(),z("left curtain panel",new h(.34,1.34,.07),new h(-2.18,1.38,-5.4),I.paleCurtain,Z,!1),z("right curtain panel",new h(.34,1.34,.07),new h(-.92,1.38,-5.4),I.paleCurtain,Z,!1),z("drawer unit",new h(.56,.84,.55),new h(-.1,.42,-4.25),I.plastic);for(let n=0;n<3;n+=1)z(`drawer line ${n}`,new h(.42,.035,.04),new h(-.1,.24+n*.22,-3.95),I.metal,Z,!1);z("wall ac unit",new h(1.05,.32,.3),new h(-3.72,2.24,-5.34),I.plastic,Z,!1),z("ac vent shadow",new h(.84,.04,.04),new h(-3.72,2.11,-5.13),I.black,Z,!1);const i=Ci("fan base",.28,.35,.08,16,new h(-.35,.08,-1.95),I.plastic,Z,!1);i.rotation.x=Math.PI/2,Ci("fan pole",.035,.035,.78,8,new h(-.35,.45,-1.95),I.metal,Z,!1);const e=Ci("fan head",.32,.32,.12,18,new h(-.35,.92,-1.95),I.plastic,Z,!1);e.rotation.x=Math.PI/2,z("fan blade a",new h(.48,.03,.05),new h(-.35,.92,-1.87),I.metal,Z,!1);const t=z("fan blade b",new h(.03,.48,.05),new h(-.35,.92,-1.87),I.metal,Z,!1);t.rotation.z=.25,Jm()}function Km(){z("desk monitor silhouette",new h(.08,.54,.7),new h(-.49,1.15,-4.32),I.black,Z,!1),z("desk monitor blue noise",new h(.04,.42,.56),new h(-.53,1.15,-4.32),I.screenGlow,Z,!1),z("desk keyboard",new h(.34,.035,.48),new h(-.45,.93,-4),I.black,Z,!1),z("desk book stack lower",new h(.36,.055,.28),new h(-.48,.91,-4.83),I.paper,Z,!1),z("desk book stack upper",new h(.3,.055,.24),new h(-.48,.98,-4.84),I.red,Z,!1),z("wall socket near desk",new h(.035,.18,.2),new h(.13,.44,-3.62),I.paper,Z,!1);const i=new Nt().setFromPoints([new h(.11,.39,-3.62),new h(-.16,.17,-3.8),new h(-.58,.1,-4.05)]),e=new rs(i,new ni({color:328965}));e.name="desk black cable",Z.add(e);const t=Ci("desk paper cup",.11,.09,.18,10,new h(-.48,1.02,-3.72),I.paper,Z,!1);t.rotation.x=.08,z("desk phone dark slab",new h(.18,.025,.34),new h(-.46,.94,-4.56),I.black,Z,!1)}function qm(i,e){const t=new Sn;t.name="procedural black plastic chair",t.position.copy(i),t.rotation.y=e,Z.add(t),z("chair seat shell",new h(.58,.12,.56),new h(0,.5,0),I.darkChair,t,!1),z("chair curved back panel",new h(.58,.76,.1),new h(0,.9,-.24),I.darkChair,t,!1),z("chair back cutout",new h(.3,.16,.105),new h(0,1.02,-.3),I.black,t,!1);for(const[n,r]of[[-.22,-.18],[.22,-.18],[-.22,.2],[.22,.2]])z("thin chrome chair leg",new h(.055,.52,.055),new h(n,.25,r),I.metal,t,!1);return t}function jm(){z("bathroom wet floor",new h(2.35,.1,2.18),new h(1.48,-.05,-3.56),I.bathroomTile),z("bathroom low ceiling",new h(2.35,.1,2.18),new h(1.48,2.42,-3.56),I.ceiling),z("bathroom right tile wall",new h(.12,2.5,2.18),new h(2.68,1.25,-3.56),I.bathroomTile),z("bathroom back tile wall",new h(2.35,2.5,.12),new h(1.48,1.25,-4.68),I.bathroomTile),z("bathroom front tile wall",new h(2.35,2.5,.12),new h(1.48,1.25,-2.44),I.bathroomTile),z("bathroom door frame top",new h(.16,.22,1.04),new h(.28,2.2,-3.55),I.trim,Z,!1),z("bathroom threshold dirty sill",new h(.24,.08,.92),new h(.36,.04,-3.55),I.metal,Z,!1),z("bathroom fluorescent cover",new h(.72,.045,.22),new h(1.42,2.31,-3.48),I.glow,Z,!1);for(const r of[-4.34,-3.86,-3.38,-2.9])z("bathroom floor grout horizontal",new h(2.08,.012,.018),new h(1.48,.012,r),I.stain,Z,!1);for(const r of[.78,1.26,1.74,2.22])z("bathroom floor grout vertical",new h(.018,.012,1.72),new h(r,.014,-3.56),I.stain,Z,!1);const i=Ci("bathroom toilet base",.26,.32,.38,12,new h(2,.25,-4.08),I.dirtyCeramic,Z,!0);i.scale.z=.82;const e=Ci("bathroom toilet seat",.36,.34,.12,16,new h(2,.5,-4.08),I.dirtyCeramic,Z,!0);e.scale.z=.72,z("bathroom toilet tank",new h(.7,.44,.22),new h(2,.75,-4.55),I.dirtyCeramic),z("bathroom sink bowl block",new h(.72,.22,.42),new h(.86,.86,-4.38),I.dirtyCeramic,Z,!0),z("bathroom sink cabinet shadow",new h(.52,.58,.32),new h(.86,.45,-4.38),I.plastic,Z,!0),z("bathroom faucet",new h(.08,.16,.08),new h(.86,1.02,-4.56),I.metal,Z,!1),z("bathroom mirror smeared",new h(.62,.64,.035),new h(.86,1.48,-4.61),I.mirror,Z,!1),z("bathroom mirror water streak one",new h(.025,.5,.02),new h(.72,1.44,-4.58),I.stain,Z,!1),z("bathroom mirror water streak two",new h(.02,.38,.02),new h(.98,1.52,-4.58),I.stain,Z,!1);const t=new Nt().setFromPoints([new h(2.52,1.9,-3.2),new h(2.3,1.58,-3.25),new h(2.42,1.18,-3.34)]),n=new rs(t,new ni({color:2961456}));n.name="bathroom shower hose",Z.add(n),z("bathroom shower head",new h(.18,.08,.12),new h(2.46,1.86,-3.18),I.metal,Z,!1),z("bathroom drain grate",new h(.34,.025,.28),new h(1.45,.02,-3.05),I.metal,Z,!1),z("bathroom wet stain floor",new h(1.1,.025,.72),new h(1.42,.025,-3.24),I.stain,Z,!1),z("bathroom towel rail",new h(.08,.08,.76),new h(2.6,1.42,-2.98),I.metal,Z,!1),z("bathroom hanging towel smear",new h(.06,.64,.5),new h(2.56,1.05,-2.98),I.paleCurtain,Z,!1)}function Zm(){z("window open road strip",new h(.44,.28,.02),new h(-1.58,1.02,-5.4),I.black,Z,!1),z("window road center line",new h(.06,.02,.018),new h(-1.58,1.02,-5.37),I.roadLine,Z,!1),z("window passing car red one",new h(.08,.035,.018),new h(-1.72,.92,-5.35),I.tailLight,Z,!1),z("window passing car red two",new h(.08,.035,.018),new h(-1.48,.93,-5.35),I.tailLight,Z,!1),z("window street lamp smear",new h(.07,.22,.018),new h(-1.35,1.22,-5.35),I.streetLamp,Z,!1),z("window opposite building slice",new h(.44,.7,.02),new h(-1.58,1.63,-5.39),I.exteriorPhoto,Z,!1);for(const[i,e]of[[-1.68,1.78],[-1.48,1.78],[-1.68,1.5],[-1.48,1.5]])z("window opposite room light",new h(.1,.1,.018),new h(i,e,-5.36),I.windowGlass,Z,!1);z("window railing vertical left",new h(.025,1.18,.018),new h(-1.75,1.55,-5.34),I.metal,Z,!1),z("window railing vertical right",new h(.025,1.18,.018),new h(-1.41,1.55,-5.34),I.metal,Z,!1)}function Jm(){const i=new Sn;i.name="window exterior facade",Z.add(i),z("outside second floor road",new h(4.6,.08,3.2),new h(-1.58,-.08,-7.35),I.asphalt,i,!1),z("outside road lane mark left",new h(.08,.025,1.2),new h(-2.4,-.02,-7.25),I.roadLine,i,!1),z("outside road lane mark right",new h(.08,.025,1.2),new h(-.6,-.02,-7.25),I.roadLine,i,!1),z("outside street lamp pole",new h(.05,1.6,.05),new h(.66,.73,-6.85),I.metal,i,!1),z("outside sodium street lamp",new h(.28,.12,.08),new h(.52,1.45,-6.72),I.streetLamp,i,!1),z("outside opposite building wall",new h(4.2,2.8,.12),new h(-1.55,1.45,-8.55),I.exteriorPhoto,i,!1);for(const[e,t]of[[-2.7,1.9],[-1.55,1.9],[-.4,1.9],[-2.1,1.08],[-.95,1.08]])z("outside small window frame",new h(.5,.38,.05),new h(e,t,-8.45),I.trim,i,!1),z("outside blue glass",new h(.38,.26,.04),new h(e,t,-8.41),I.buildingWindowPhoto,i,!1),z("outside ac unit",new h(.46,.22,.22),new h(e+.42,t-.34,-8.37),I.metal,i,!1);z("outside vertical pipe",new h(.06,2.7,.08),new h(.18,1.35,-8.33),I.metal,i,!1)}function $m(){z("water stain over bed",new h(.78,.5,.025),new h(-3.7,1.95,-5.48),I.stain,Z,!1),z("old outlet stain",new h(.24,.16,.025),new h(-.1,.55,-5.48),I.stain,Z,!1),z("entry shoe mark a",new h(.42,.025,.18),new h(-1.2,.04,.9),I.stain,Z,!1),z("entry shoe mark b",new h(.34,.025,.16),new h(-.75,.04,.6),I.stain,Z,!1),z("room warning sticker",new h(.32,.16,.03),new h(-.55,1.55,1.08),I.paper,Z,!1),z("room sticker slash",new h(.24,.025,.035),new h(-.55,1.55,1.03),I.red,Z,!1),z("peeling wallpaper bed wall one",new h(.04,.38,.28),new h(-4.2,1.52,-3.7),I.stain,Z,!1),z("peeling wallpaper bed wall two",new h(.04,.24,.18),new h(-4.2,1.16,-2.2),I.stain,Z,!1)}function eA(){yi("asset elevator door set",$e.models.elevatorDoor,{position:new h(1.46,1.12,7.55),rotation:new Ft(0,Math.PI/2,0),scale:1.58,material:I.elevator}),yi("asset fluorescent fixture main",$e.models.fluorescentFixture,{position:new h(-2.05,2.48,-1.5),scale:1.05,material:I.glow}),yi("asset fluorescent fixture room",$e.models.fluorescentFixture,{position:new h(-2.75,2.48,-4.25),scale:.9,material:I.glow}),yi("asset rice cooker",$e.models.riceCooker,{position:new h(-.78,1.23,24.42),scale:.95,material:I.plastic}),tA()}function tA(){const i=[["trash bag left 1",$e.models.trashBag,[-1.26,.28,8.7],[0,.15,0],1.2,I.black],["trash bag left 2",$e.models.trashBag,[-1.24,.28,10.05],[0,-.45,0],1,I.black],["trash bag right 1",$e.models.trashBag,[1.22,.28,12.25],[0,.8,0],1.05,I.black],["cardboard stack 1",$e.models.cardboardBoxes,[-1.16,.32,9.1],[0,-.24,0],1.1,I.wood],["cardboard stack 2",$e.models.cardboardBoxes,[1.08,.32,10.95],[0,.5,0],1,I.wood],["cardboard stack 3",$e.models.cardboardBoxes,[-1.15,.32,13.6],[0,.1,0],1,I.wood],["power strip room 204",$e.models.powerStrip,[-1.08,.08,6.5],[0,-.05,0],1.05,I.plastic],["hanging towel bath",$e.models.towel,[.28,1.28,-3.55],[0,-Math.PI/2,0],1.15,I.paleCurtain],["common cup ramen 1",$e.models.cupRamen,[.8,1.02,24.55],[0,-.1,0],.9,I.paper],["common cup ramen 2",$e.models.cupRamen,[1.15,1.02,24.65],[0,.35,0],.9,I.paper]];for(const[e,t,n,r,s,a]of i)yi(e,t,{position:new h(...n),rotation:new Ft(...r),scale:s,material:a});D.slippersModel=yi("room 204 slippers",$e.models.slippers,{position:new h(-.72,.08,6.72),rotation:new Ft(0,-.42,0),scale:1.55,material:I.darkChair}),nA()}function nA(){const i=[new h(-1.08,.1,6.52),new h(-.96,.07,6.34),new h(-.88,.13,6.12),new h(-.78,.2,6.01)],e=new Nt().setFromPoints(i),t=new rs(e,new ni({color:526086}));t.name="power strip cord entering door crack",Z.add(t)}function iA(){z("corridor floor",new h(3.15,.1,9.8),new h(0,-.05,10.9),I.floor),z("corridor ceiling",new h(3.15,.1,9.8),new h(0,2.42,10.9),I.ceiling),z("corridor west wall",new h(.14,2.5,9.8),new h(-1.55,1.25,10.9),I.concrete),z("corridor east wall",new h(.14,2.5,9.8),new h(1.55,1.25,10.9),I.concrete),z("corridor end wall",new h(3.15,2.5,.14),new h(0,1.25,15.85),I.exteriorPhoto),z("corridor room door",new h(1.16,2.15,.12),new h(-.72,1.08,6.08),I.doorDark,Z,!1),z("room number plate",new h(.36,.16,.04),new h(.02,1.72,6.15),I.paper,Z,!1),z("room number 204 mark a",new h(.05,.09,.045),new h(-.08,1.72,6.18),I.black,Z,!1),z("room number 204 mark b",new h(.05,.09,.045),new h(.02,1.72,6.18),I.black,Z,!1),z("room number 204 mark c",new h(.05,.09,.045),new h(.12,1.72,6.18),I.black,Z,!1),z("corridor ceiling stain",new h(.9,.03,.45),new h(-.55,2.36,12.2),I.stain,Z,!1),z("corridor wall stain",new h(.03,.9,.42),new h(-1.47,1.28,13.4),I.stain,Z,!1),rA(),D.elevatorDoor=z("elevator door",new h(.12,2.18,1.28),new h(1.5,1.09,7.55),I.elevator,Z,!1),ti("elevator seam",new h(.04,2,.02),new h(1.43,1.04,7.55),I.metal);const i=ti("elevator button",new h(.08,.22,.16),new h(1.39,1.22,8.22),I.glow);In("엘리베이터 버튼",i,()=>eo()),z("common floor",new h(4.6,.1,4.65),new h(0,-.05,22.7),I.floor),z("common ceiling",new h(4.6,.1,4.65),new h(0,2.42,22.7),I.ceiling),z("common back wall",new h(4.6,2.5,.14),new h(0,1.25,25.08),I.concrete),z("common left wall",new h(.14,2.5,4.65),new h(-2.3,1.25,22.7),I.concrete),z("common right wall",new h(.14,2.5,4.65),new h(2.3,1.25,22.7),I.concrete),z("common entry wall",new h(4.6,2.5,.14),new h(0,1.25,20.32),I.concrete),z("common counter",new h(2.7,.88,.62),new h(-.15,.44,24.45),I.wood),z("rice shelf upper",new h(2.6,.08,.48),new h(-.15,1.45,24.48),I.wood),z("rice shelf left post",new h(.08,1.05,.08),new h(-1.4,.94,24.5),I.metal),z("rice shelf right post",new h(.08,1.05,.08),new h(1.1,.94,24.5),I.metal),D.riceCooker=z("rice cooker",new h(.72,.48,.58),new h(-.78,1.04,24.42),I.plastic,Z,!1),z("rice cooker light",new h(.08,.08,.04),new h(-.53,1.1,24.11),I.riceLight,Z,!1),z("second rice cooker",new h(.72,.48,.58),new h(.26,1.04,24.42),I.plastic,Z,!1),aA(),In("밥솥",D.riceCooker,()=>nc())}function rA(){for(const i of[7.2,10.2,13.2])z("corridor fluorescent cover",new h(.92,.045,.28),new h(0,2.32,i),I.glow,Z,!1),z("corridor light stain",new h(1.2,.02,.48),new h(0,2.29,i+.08),I.stain,Z,!1);for(const[i,e]of[[8.95,"203"],[11.55,"205"],[14.1,"206"]])z(`room ${e} flat door`,new h(1,1.92,.08),new h(-1.47,1.02,i),I.doorDark,Z,!1),z(`room ${e} plate`,new h(.34,.13,.04),new h(-1.42,1.63,i-.34),I.paper,Z,!1),z(`room ${e} handle`,new h(.06,.12,.08),new h(-1.36,1,i+.32),I.metal,Z,!1);z("elevator floor sign plate",new h(.48,.18,.04),new h(1.38,1.78,7),I.paper,Z,!1),z("elevator red arrow",new h(.18,.04,.045),new h(1.36,1.78,7),I.red,Z,!1),z("corridor cable tray",new h(.08,.08,8.5),new h(-1.42,2.08,10.8),I.metal,Z,!1),z("corridor end narrow window frame",new h(1.05,.82,.04),new h(0,1.58,15.77),I.trim,Z,!1),z("corridor end night window",new h(.82,.58,.035),new h(0,1.58,15.72),I.entranceGlassPhoto,Z,!1),z("corridor end outside road glow",new h(.7,.08,.03),new h(0,1.36,15.69),I.streetLamp,Z,!1),z("emergency exit sign",new h(.58,.18,.04),new h(-.94,2.02,7.45),new bt({color:2383682}),Z,!1),sA()}function sA(){for(const[i,e,t,n]of[[-1.47,1.45,8.55,"west"],[-1.47,1.62,11.7,"west"],[1.47,1.34,9.55,"east"],[1.47,1.58,13.3,"east"]])z("small corridor flyer paper",new h(.02,.34,.26),new h(i,e,t),I.paper,Z,!1),z("small corridor flyer tear",new h(.02+.004,.06,.18),new h(i,e-.08,t+.02),I.stain,Z,!1)}function aA(){z("common bulletin board",new h(1.42,.84,.05),new h(-1.34,1.55,25),I.doorDark,Z,!1);for(let i=0;i<5;i+=1)z(`common notice ${i}`,new h(.34,.22,.04),new h(-1.78+i%3*.4,1.72-Math.floor(i/3)*.28,24.95),I.paper,Z,!1);z("common plastic table",new h(1.24,.08,.8),new h(1.25,.72,22.1),I.plastic),z("common table leg a",new h(.06,.7,.06),new h(.75,.36,21.78),I.metal),z("common table leg b",new h(.06,.7,.06),new h(1.75,.36,21.78),I.metal),z("common table leg c",new h(.06,.7,.06),new h(.75,.36,22.42),I.metal),z("common table leg d",new h(.06,.7,.06),new h(1.75,.36,22.42),I.metal),z("common sink block",new h(.8,.78,.54),new h(1.75,.39,24.3),I.metal),z("common trash bin",new h(.42,.68,.42),new h(-1.85,.34,22),I.black),z("common fluorescent cover",new h(1.1,.045,.28),new h(0,2.32,22.5),I.glow,Z,!1),z("common rice scoop handle",new h(.08,.06,.5),new h(.72,1.04,24.1),I.plastic,Z,!1),z("common taped label one",new h(.32,.12,.04),new h(-.8,1.32,24.1),I.paper,Z,!1),z("common taped label two",new h(.32,.12,.04),new h(.24,1.32,24.1),I.paper,Z,!1)}function oA(){D.bedroomDoor=z("closet door",new h(.68,1.7,.08),new h(-.18,.95,-.36),I.doorDark,Z,!0),D.bathroomDoor=z("bathroom door",new h(.12,2.1,.78),new h(.12,1.05,-3.7),I.door,Z,!0),D.exitDoor=z("exit door",new h(1.1,2.25,.16),new h(-.55,1.12,1.53),I.doorDark,Z,!0),In("옷장 문",D.bedroomDoor,()=>lA()),In("화장실 문",D.bathroomDoor,()=>cA()),In("현관문",D.exitDoor,()=>fA());const i=ti("거실 스위치",new h(.18,.24,.08),new h(-1.25,1.35,1.36),I.glow);In("거실 조명 스위치",i,()=>hA());const e=ti("화장실 스위치",new h(.08,.24,.16),new h(.08,1.35,-2.95),I.glow);In("화장실 조명 스위치",e,()=>uA());const t=ti("침대 옆 메모",new h(.36,.03,.28),new h(-3.18,.54,-4),I.paper);js("메모",t,"문을 두드리는 소리를 들었지만, 그날은 피곤했다.");const n=ti("옷장 안 사진",new h(.3,.03,.38),new h(-.18,1.25,-.35),I.paper);js("사진",n,'사진 뒷면에 작은 글씨가 있다. "열어 줬어야 했어."');const r=z("녹음기",new h(.3,.14,.2),new h(-.95,.98,-4.3),I.black,Z,!1);js("녹음기",r,"잡음 사이로 네 이름과 현관 비밀번호가 반복된다.")}function In(i,e,t){e.userData.interactable={label:i,onUse:t},D.interactables.push(e)}function js(i,e,t){e.userData.fragment=!0,In(i,e,()=>{e.visible!==!1&&(e.visible=!1,D.fragments+=1,Mt(t),D.fragments===1&&(It("방을 다시 확인하자."),setTimeout(to,900)),D.fragments===2&&It("주방 쪽에서 소리가 난다."),D.fragments>=3?(D.exitUnlocked=!0,zn(3),It("현관문이 열릴 것 같다."),Mt("현관 쪽에서 잠금이 풀리는 소리가 났다.")):zn(Math.min(Jl,D.state+1)))})}function oi(i,e){i.visible=!e,i.userData.open=e,i===D.bedroomDoor&&D.bedroomDoorModel&&(D.bedroomDoorModel.visible=!e),dA()}function lA(){D.bedroomDoorOpen=!D.bedroomDoorOpen,oi(D.bedroomDoor,D.bedroomDoorOpen),Dt("doorClose",.42),ur("bedroom-door")}function cA(){D.bathroomDoorOpen=!D.bathroomDoorOpen,oi(D.bathroomDoor,D.bathroomDoorOpen),Dt("doorClose",.38),ur("bathroom-door")}function hA(){D.lightsOn=!D.lightsOn,Dt("lightSwitch",.65),fr(),D.state>=1&&!D.eventFlags.has("wrong-light")&&(D.eventFlags.add("wrong-light"),D.bathroomLight=!1,hr.intensity=0,setTimeout(()=>Mt("스위치를 눌렀는데 화장실 안에서 딸깍 소리가 났다."),200)),ur("living-light")}function uA(){D.bathroomLight=!D.bathroomLight,Dt("lightSwitch",.6),fr(),D.state>=2&&!D.eventFlags.has("mirror-text")&&(D.eventFlags.add("mirror-text"),I.mirror.color.set(2430230),Mt("거울 표면에 물기가 서리며 글자가 번진다.")),ur("bath-light")}function fA(){if(!D.exitUnlocked){Mt("문고리가 차갑다. 아무리 돌려도 열리지 않는다."),ur("exit-locked"),D.observation>=3&&D.state===0&&zn(1);return}Jr()}function Jr(){D.area="corridor",qe.position.set(-.45,1.62,6.68),qe.rotation.set(0,-2,0),D.yawTarget=-2,D.pitchTarget=0,Fi.intensity=1.35,Ni.intensity=1.45,cs.intensity=.45,Dt("doorClose",.6),Dt("elevatorDing",.45),za("corridor",.22),It("방 옆 엘리베이터를 확인하자."),Mt("문을 열자마자 엘리베이터 도착음이 바로 옆에서 울렸다."),setTimeout(ic,1200)}function eo(){D.area==="corridor"&&(Dt("elevatorButton",.75),Dt("elevatorDoor",.58),D.area="common",qe.position.set(0,1.62,21.15),qe.rotation.set(0,Math.PI,0),D.yawTarget=Math.PI,D.pitchTarget=0,Fi.intensity=0,Ni.intensity=0,si.intensity=1.35,It("1층 공용공간의 밥솥을 확인하자."),Mt("문이 닫히는 소리는 없었다. 그래도 1층 냄새가 났다."))}function nc(){D.area==="common"&&(D.eventFlags.has("rice-ending")||(D.eventFlags.add("rice-ending"),D.riceEndingPulse=1,D.lightMultiplier=.08,hs.intensity=1.4,si.intensity=.12,Dt("elevatorDoor",.4),Dt("doorClose",.55),Mt("밥솥 안은 비어 있다. 안쪽 스테인리스에 네 방 문이 비친다."),setTimeout(()=>{It("뒤돌아보지 마라."),Mt("보온등이 꺼졌다. 그런데 방 안 형광등 소리가 난다.")},850),setTimeout(pA,3300)))}function ur(i){D.observation+=1,D.observation>=4&&D.state<2&&zn(D.state+1),i==="bedroom-door"&&D.state>=1&&!D.eventFlags.has("chair-moved")&&setTimeout(to,650)}function to(){D.eventFlags.has("chair-moved")||(D.eventFlags.add("chair-moved"),D.chair.position.set(-1.05,.38,-2.55),D.chair.rotation.y=-.55,D.chairVisual&&(D.chairVisual.position.set(-1.05,0,-2.55),D.chairVisual.rotation.y=-.55),rc(),Dt("doorClose",.3),Mt("뒤쪽에서 의자가 장판을 긁는 소리가 났다."))}function ic(){D.eventFlags.has("slippers-moved")||D.area!=="corridor"||(D.eventFlags.add("slippers-moved"),D.slippersModel&&(D.slippersModel.position.set(.5,.08,7.18),D.slippersModel.rotation.y=1.15),Dt("footstep",.18),setTimeout(()=>Dt("footstep",.14),180),Mt("204호 앞 슬리퍼가 엘리베이터 쪽을 향해 놓여 있다."))}function zn(i){const e=D.state;D.state=Math.max(0,Math.min(Jl,i)),D.state!==e&&(tc.intensity=.52-D.state*.06,Bt.fog.near=Math.max(3,5.5-D.state*.7),Bt.fog.far=30-D.state*4,D.state>=1&&(D.tv.material=new bt({color:1119777})),D.state>=2&&(D.bedroomDoorOpen=!1,oi(D.bedroomDoor,!1),os.color.set(16761226),ls.color.set(13213567),It("기억 파편을 찾아라.")),D.state>=3&&(cs.intensity=1.15,D.exitDoor.material=I.door),fr())}function dA(){D.colliders=[],Z.traverse(i=>{i.userData?.collider&&!i.userData.open&&D.colliders.push(i)})}function fr(i=0){const e=D.state>=3,t=e?.48:D.lightsOn?1.75:.25,n=e?.3:D.lightsOn?1.2:.18,r=D.lightMultiplier;os.intensity=Math.max(.02,(t+i)*r),ls.intensity=Math.max(.02,n*r),hr.intensity=!e&&D.bathroomLight?1.25*r:0,Fi.intensity=D.area==="corridor"?1.35*r:Fi.intensity,Ni.intensity=D.area==="corridor"?1.45*r:Ni.intensity,si.intensity=D.area==="common"?1.35*r:si.intensity}function Mt(i){qs.textContent=i,qs.classList.add("show"),clearTimeout(Mt.timer),Mt.timer=setTimeout(()=>qs.classList.remove("show"),4200)}function It(i){Om.textContent=i}function pA(){D.ended=!0,El("fluorescent"),El("corridor"),document.exitPointerLock?.(),ec.classList.remove("hidden")}function mA(){window.location.reload()}function AA(){D.started=!0,$l.classList.add("hidden"),xA(),za("fluorescent",.2),za("corridor",.08),$r(),sc(),It("집 안을 확인하자."),gA()}function Ut(i,e,t=0){qe.position.copy(i),qe.rotation.set(t,e,0),D.yawTarget=e,D.pitchTarget=t}function gA(){if(location.hash==="#showcase"){_A();return}location.hash==="#bathroom"&&(Ji.classList.add("hidden"),D.introActive=!1,D.bathroomDoorOpen=!0,oi(D.bathroomDoor,!0),D.bathroomLight=!0,hr.intensity=1.25,qe.position.set(1.12,1.54,-2.76),qe.rotation.set(0,-.28,0),D.yawTarget=-.28,D.pitchTarget=0,It("화장실을 확인하자.")),location.hash==="#corridor"&&(Ji.classList.add("hidden"),D.introActive=!1,D.exitUnlocked=!0,zn(3),Jr()),location.hash==="#common"&&(Ji.classList.add("hidden"),D.introActive=!1,D.exitUnlocked=!0,zn(3),Jr(),eo())}function Tt(i,e){const t=setTimeout(e,i);D.showcase.timers.push(t)}function _A(){D.showcase.active=!0,D.keys.clear(),$r(),It("데모 캡처: 고시텔 방을 확인하자."),Tt(700,()=>Ut(new h(-2.78,1.62,.18),0)),Tt(2900,()=>Ut(new h(-2.35,1.6,-1.4),-.18)),Tt(5200,()=>{Mt("세로로 긴 창문 아래로 2층 도로의 빛이 번진다."),Ut(new h(-2.2,1.56,-2.75),-.08)}),Tt(8100,()=>{Ut(new h(-.58,1.56,-3.9),-1.55),It("화장실 문을 열어 안쪽을 확인하자."),D.bathroomDoorOpen=!0,oi(D.bathroomDoor,!0),D.bathroomLight=!0,fr(),Mt("문 뒤에는 젖은 타일 냄새가 남아 있다.")}),Tt(11200,()=>Ut(new h(1.08,1.54,-2.85),-.25)),Tt(14500,()=>{Ut(new h(-2.8,1.58,-3.35),-.2),Mt("책상 위 컵과 어두운 모니터가 그대로 놓여 있다.")}),Tt(17200,()=>{zn(1),to(),Ut(new h(-2.45,1.58,-2.35),-.62),It("방 안의 배치가 조금 어긋났다.")}),Tt(21500,()=>{zn(3),D.exitUnlocked=!0,It("현관문이 열릴 것 같다."),Mt("현관 쪽에서 잠금이 풀리는 소리가 났다."),Ut(new h(-1.05,1.62,.42),2.98)}),Tt(25500,()=>{Jr(),Ut(new h(-.38,1.62,6.72),-1.58)}),Tt(29200,()=>{ic(),Ut(new h(-.72,1.56,7.35),-1.22)}),Tt(33500,()=>{Ut(new h(-.45,1.58,8.7),.05),It("복도 끝과 204호 앞 생활감을 확인하자.")}),Tt(38e3,()=>{Ut(new h(.65,1.58,7.75),-1.58),Mt("엘리베이터 버튼 불빛만 바로 옆에서 켜져 있다.")}),Tt(42e3,()=>{eo(),Ut(new h(.2,1.62,21.35),3.08)}),Tt(46200,()=>Ut(new h(-.35,1.58,23.25),3.04)),Tt(50500,()=>{Ut(new h(-.72,1.52,23.88),3.08),It("1층 밥솥의 보온등을 확인하자.")}),Tt(54800,()=>nc())}function $r(){D.introActive=!0,Ji.classList.remove("hidden"),clearTimeout($r.timer),$r.timer=setTimeout(()=>{Ji.classList.add("hidden"),D.introActive=!1},7200)}function xA(){if(!St.enabled){St.enabled=!0;for(const[i,e]of Object.entries($e.audio)){const t=new Audio(e);t.preload="auto",t.volume=.5,St.clips[i]=t}St.clips.fluorescent.loop=!0,St.clips.corridor.loop=!0}}function Dt(i,e=.5){if(!St.enabled||!St.clips[i])return;const t=St.clips[i].cloneNode();t.volume=e,t.play().catch(()=>{})}function za(i,e=.25){if(!St.enabled||!St.clips[i])return;const t=St.clips[i];t.volume=e,t.play().catch(()=>{})}function El(i){const e=St.clips[i];e&&(e.pause(),e.currentTime=0)}function vA(){if(!St.enabled||!St.clips.fluorescent)return;const i=[new h(.1,2.4,1.8),new h(-3.25,2.4,-3.5),new h(0,2.2,10.5)];let e=1/0;for(const n of i)e=Math.min(e,qe.position.distanceTo(n));const t=Math.max(0,1-e/7);St.clips.fluorescent.volume=.12+t*.24,St.clips.corridor&&(St.clips.corridor.volume=D.area==="room"?.08:.3)}function rc(){D.flicker.active=!0,D.flicker.step=0,D.flicker.stepTime=0,D.flicker.pattern=[{duration:.05,multiplier:.1},{duration:.05,multiplier:1.05},{duration:.05,multiplier:.05},{duration:.06,multiplier:.95},{duration:.2,multiplier:.03},{duration:.08,multiplier:1}],Dt("lightSwitch",.22)}function MA(i){if(!D.started||D.ended||(D.flicker.nextAt-=i,!D.flicker.active&&D.flicker.nextAt<=0&&rc(),!D.flicker.active))return;const e=D.flicker.pattern[D.flicker.step];D.lightMultiplier=e.multiplier,D.flicker.stepTime+=i,D.flicker.stepTime>=e.duration&&(D.flicker.step+=1,D.flicker.stepTime=0,D.flicker.step>=D.flicker.pattern.length&&(D.flicker.active=!1,D.lightMultiplier=1,D.flicker.nextAt=10+Math.random()*16))}function EA(i){!D.started||D.ended||(D.distantElevatorAt-=i,!(D.distantElevatorAt>0)&&(Dt(Math.random()>.45?"elevatorDing":"elevatorDoor",.14),D.distantElevatorAt=40+Math.random()*20))}function sc(){try{const i=Zr.requestPointerLock?.();i?.catch&&i.catch(()=>{})}catch{}}function SA(){vl.setFromCamera(zm,qe);const e=vl.intersectObjects(D.interactables.filter(t=>t.visible!==!1),!1).find(t=>t.distance<2.15);D.currentHit=e?.object??null,Bm.textContent=D.currentHit?`E  ${D.currentHit.userData.interactable.label}`:""}function wA(){D.currentHit&&D.currentHit.userData.interactable.onUse()}function Sl(i){const t=new ai(new h(i.x-.23,.45,i.z-.23),new h(i.x+.23,1.78,i.z+.23));for(const n of D.colliders)if(n.visible!==!1&&(Ml.setFromObject(n),t.intersectsBox(Ml)))return!1;return!0}function yA(i){const e=D.keys.has("ShiftLeft")||D.keys.has("ShiftRight")?1.15:2.15,t=Number(D.keys.has("KeyW"))-Number(D.keys.has("KeyS")),n=Number(D.keys.has("KeyD"))-Number(D.keys.has("KeyA")),r=qe.rotation.y,s=Hm.set(0,0,0);s.x=-Math.sin(r)*t+Math.cos(r)*n,s.z=-Math.cos(r)*t-Math.sin(r)*n,s.lengthSq()>0&&s.normalize().multiplyScalar(e*i);const a=qe.position.clone();a.x+=s.x,Sl(a)&&(qe.position.x=a.x);const o=qe.position.clone();o.z+=s.z,Sl(o)&&(qe.position.z=o.z),s.lengthSq()>0&&!D.ended?(D.footstepClock+=i*e,qe.position.y=1.62+Math.sin(D.footstepClock*7.2)*.03,D.bobX=Math.sin(D.footstepClock*3.6)*.015,D.footstepClock>=D.nextFootstepAt&&(D.nextFootstepAt=D.footstepClock+(e>1.5?.42:.62),Dt("footstep",e>1.5?.26:.16))):(qe.position.y+=(1.62-qe.position.y)*Math.min(1,i*8),D.bobX+=(0-D.bobX)*Math.min(1,i*8))}function ac(){const i=Math.min(km.getDelta(),.05);D.started&&!D.ended&&(MA(i),EA(i),vA(),qe.rotation.y+=(D.yawTarget-qe.rotation.y)*Math.min(1,i*11),qe.rotation.x+=(D.pitchTarget-qe.rotation.x)*Math.min(1,i*11),qe.rotation.z=D.bobX*.55,yA(i),fr(),SA(),TA(i)),cr.render(Bt,qe),requestAnimationFrame(ac)}function TA(i){if(D.riceEndingPulse<=0)return;D.riceEndingPulse=Math.max(0,D.riceEndingPulse-i*.32);const e=.65+Math.sin(performance.now()*.025)*.35;hs.intensity=.5+D.riceEndingPulse*e*1.6,si.intensity=.08+Math.sin(performance.now()*.018)*.04}function bA(){$l.querySelector("button").addEventListener("click",AA),ec.querySelector("button").addEventListener("click",mA),window.addEventListener("keydown",i=>{i.code==="KeyE"&&wA(),D.keys.add(i.code)}),window.addEventListener("keyup",i=>D.keys.delete(i.code)),window.addEventListener("mousemove",i=>{document.pointerLockElement!==Zr||D.ended||(D.yawTarget-=i.movementX*.00165,D.pitchTarget-=i.movementY*.00165,D.pitchTarget=Math.max(-1.25,Math.min(1.25,D.pitchTarget)))}),window.addEventListener("resize",()=>{qe.aspect=window.innerWidth/window.innerHeight,qe.updateProjectionMatrix(),cr.setSize(window.innerWidth,window.innerHeight)}),Zr.addEventListener("click",()=>{D.started&&!D.ended&&sc()})}Xm();Qm();iA();oA();eA();oi(D.bedroomDoor,!1);oi(D.bathroomDoor,!1);bA();ac();
