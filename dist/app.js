var Bo="160";var Mu=0,Ul=1,Su=2;var ah=1,zo=2,Pn=3,Zn=0,Le=1,In=2;var qn=0,$i=1,Dl=2,Nl=3,Ol=4,bu=5,ui=100,Eu=101,wu=102,Fl=103,Bl=104,Tu=200,Au=201,Ru=202,Cu=203,eo=204,no=205,Pu=206,Lu=207,Iu=208,Uu=209,Du=210,Nu=211,Ou=212,Fu=213,Bu=214,zu=0,ku=1,Hu=2,Ar=3,Vu=4,Gu=5,Wu=6,Xu=7,oh=0,qu=1,Yu=2,Yn=0,$u=1,Zu=2,Ju=3,ko=4,Ku=5,ju=6;var lh=300,Ki=301,ji=302,io=303,so=304,Qr=306,ro=1e3,un=1001,ao=1002,Fe=1003,zl=1004;var Ea=1005;var je=1006,Qu=1007;var ws=1008;var $n=1009,td=1010,ed=1011,Ho=1012,ch=1013,Wn=1014,Xn=1015,Ts=1016,hh=1017,uh=1018,fi=1020,nd=1021,dn=1023,id=1024,sd=1025,pi=1026,Qi=1027,rd=1028,dh=1029,ad=1030,fh=1031,ph=1033,wa=33776,Ta=33777,Aa=33778,Ra=33779,kl=35840,Hl=35841,Vl=35842,Gl=35843,mh=36196,Wl=37492,Xl=37496,ql=37808,Yl=37809,$l=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Ca=36492,ac=36494,oc=36495,od=36283,lc=36284,cc=36285,hc=36286;var Rr=2300,Cr=2301,Pa=2302,uc=2400,dc=2401,fc=2402;var gh=3e3,mi=3001,ld=3200,cd=3201,_h=0,hd=1,Qe="",pe="srgb",Dn="srgb-linear",Vo="display-p3",ta="display-p3-linear",Pr="linear",ne="srgb",Lr="rec709",Ir="p3";var Ri=7680;var pc=519,ud=512,dd=513,fd=514,xh=515,pd=516,md=517,gd=518,_d=519,mc=35044;var gc="300 es",oo=1035,Un=2e3,Ur=2001,Jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Ae=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=1234567,Ms=Math.PI/180,As=180/Math.PI;function rs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ae[n&255]+Ae[n>>8&255]+Ae[n>>16&255]+Ae[n>>24&255]+"-"+Ae[t&255]+Ae[t>>8&255]+"-"+Ae[t>>16&15|64]+Ae[t>>24&255]+"-"+Ae[e&63|128]+Ae[e>>8&255]+"-"+Ae[e>>16&255]+Ae[e>>24&255]+Ae[i&255]+Ae[i>>8&255]+Ae[i>>16&255]+Ae[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function Go(n,t){return(n%t+t)%t}function xd(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function vd(n,t,e){return n!==t?(e-n)/(t-n):0}function Ss(n,t,e){return(1-e)*n+e*t}function yd(n,t,e,i){return Ss(n,t,1-Math.exp(-e*i))}function Md(n,t=1){return t-Math.abs(Go(n,t*2)-t)}function Sd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function bd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Ed(n,t){return n+Math.floor(Math.random()*(t-n+1))}function wd(n,t){return n+Math.random()*(t-n)}function Td(n){return n*(.5-Math.random())}function Ad(n){n!==void 0&&(_c=n);let t=_c+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Rd(n){return n*Ms}function Cd(n){return n*As}function lo(n){return(n&n-1)===0&&n!==0}function Pd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Dr(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ld(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+i)/2),h=o((t+i)/2),d=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),g=o((i-t)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*m,a*c);break;case"YXY":n.set(l*m,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*m,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wi(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ne(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Bs={DEG2RAD:Ms,RAD2DEG:As,generateUUID:rs,clamp:Ce,euclideanModulo:Go,mapLinear:xd,inverseLerp:vd,lerp:Ss,damp:yd,pingpong:Md,smoothstep:Sd,smootherstep:bd,randInt:Ed,randFloat:wd,randFloatSpread:Td,seededRandom:Ad,degToRad:Rd,radToDeg:Cd,isPowerOfTwo:lo,ceilPowerOfTwo:Pd,floorPowerOfTwo:Dr,setQuaternionFromProperEuler:Ld,normalize:Ne,denormalize:Wi},Ft=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class n{constructor(t,e,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],m=i[5],g=i[8],_=s[0],p=s[3],u=s[6],E=s[1],v=s[4],w=s[7],P=s[2],A=s[5],T=s[8];return r[0]=o*_+a*E+l*P,r[3]=o*p+a*v+l*A,r[6]=o*u+a*w+l*T,r[1]=c*_+h*E+d*P,r[4]=c*p+h*v+d*A,r[7]=c*u+h*w+d*T,r[2]=f*_+m*E+g*P,r[5]=f*p+m*v+g*A,r[8]=f*u+m*w+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*d+i*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(La.makeScale(t,e)),this}rotate(t){return this.premultiply(La.makeRotation(-t)),this}translate(t,e){return this.premultiply(La.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},La=new kt;function vh(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Nr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Id(){let n=Nr("canvas");return n.style.display="block",n}var xc={};function bs(n){n in xc||(xc[n]=!0,console.warn(n))}var vc=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yc=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),sr={[Dn]:{transfer:Pr,primaries:Lr,toReference:n=>n,fromReference:n=>n},[pe]:{transfer:ne,primaries:Lr,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ta]:{transfer:Pr,primaries:Ir,toReference:n=>n.applyMatrix3(yc),fromReference:n=>n.applyMatrix3(vc)},[Vo]:{transfer:ne,primaries:Ir,toReference:n=>n.convertSRGBToLinear().applyMatrix3(yc),fromReference:n=>n.applyMatrix3(vc).convertLinearToSRGB()}},Ud=new Set([Dn,ta]),Kt={enabled:!0,_workingColorSpace:Dn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Ud.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=sr[t].toReference,s=sr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return sr[n].primaries},getTransfer:function(n){return n===Qe?Pr:sr[n].transfer}};function Zi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ia(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ci,Or=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Nr("canvas")),Ci.width=t.width,Ci.height=t.height;let i=Ci.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Zi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Zi(e[i]/255)*255):e[i]=Zi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Dd=0,Fr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=rs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ua(s[o].image)):r.push(Ua(s[o]))}else r=Ua(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Ua(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Or.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Nd=0,en=class n extends Jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=un,s=un,r=je,o=ws,a=dn,l=$n,c=n.DEFAULT_ANISOTROPY,h=Qe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=rs(),this.name="",this.source=new Fr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===mi?pe:Qe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ro:t.x=t.x-Math.floor(t.x);break;case un:t.x=t.x<0?0:1;break;case ao:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ro:t.y=t.y-Math.floor(t.y);break;case un:t.y=t.y<0?0:1;break;case ao:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===pe?mi:gh}set encoding(t){bs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===mi?pe:Qe}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=lh;en.DEFAULT_ANISOTROPY=1;var re=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,w=(m+1)/2,P=(u+1)/2,A=(h+f)/4,T=(d+_)/4,X=(g+p)/4;return v>w&&v>P?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=A/i,r=T/i):w>P?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=A/s,r=X/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=X/r),this.set(i,s,r,e),this}let E=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},co=class extends Jn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(bs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===mi?pe:Qe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Fr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends co{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Br=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ho=class extends en{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==f||c!==m||h!==g){let p=1-a,u=l*f+c*m+h*g+d*_,E=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let P=Math.sqrt(v),A=Math.atan2(P,u*E);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}let w=a*E;if(l=l*p+f*w,c=c*p+m*w,h=h*p+g*w,d=d*p+_*w,p===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=P,c*=P,h*=P,d*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*m-c*f,t[e+1]=l*g+h*f+c*d-a*m,t[e+2]=c*g+h*m+a*f-l*d,t[e+3]=h*g-a*d-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=i+a+d;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(h-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+h)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Mc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Mc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Da.copy(this).projectOnVector(t),this.sub(Da)}reflect(t){return this.sub(Da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Da=new I,Mc=new Kn,gi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ln):ln.fromBufferAttribute(r,o),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rr.copy(i.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),ar.subVectors(this.max,gs),Pi.subVectors(t.a,gs),Li.subVectors(t.b,gs),Ii.subVectors(t.c,gs),zn.subVectors(Li,Pi),kn.subVectors(Ii,Li),ai.subVectors(Pi,Ii);let e=[0,-zn.z,zn.y,0,-kn.z,kn.y,0,-ai.z,ai.y,zn.z,0,-zn.x,kn.z,0,-kn.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-kn.y,kn.x,0,-ai.y,ai.x,0];return!Na(e,Pi,Li,Ii,ar)||(e=[1,0,0,0,1,0,0,0,1],!Na(e,Pi,Li,Ii,ar))?!1:(or.crossVectors(zn,kn),e=[or.x,or.y,or.z],Na(e,Pi,Li,Ii,ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new I,new I,new I,new I,new I,new I,new I,new I],ln=new I,rr=new gi,Pi=new I,Li=new I,Ii=new I,zn=new I,kn=new I,ai=new I,gs=new I,ar=new I,or=new I,oi=new I;function Na(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){oi.fromArray(n,r);let a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),h=i.dot(oi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Od=new gi,_s=new I,Oa=new I,Rs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Od.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);let e=_s.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(_s,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(Oa)),this.expandByPoint(_s.copy(t.center).sub(Oa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Tn=new I,Fa=new I,lr=new I,Hn=new I,Ba=new I,cr=new I,za=new I,zr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Tn.copy(this.origin).addScaledVector(this.direction,e),Tn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fa.copy(t).add(e).multiplyScalar(.5),lr.copy(e).sub(t).normalize(),Hn.copy(this.origin).sub(Fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(lr),a=Hn.dot(this.direction),l=-Hn.dot(lr),c=Hn.lengthSq(),h=Math.abs(1-o*o),d,f,m,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let _=1/h;d*=_,f*=_,m=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Fa).addScaledVector(lr,f),m}intersectSphere(t,e){Tn.subVectors(t.center,this.origin);let i=Tn.dot(this.direction),s=Tn.dot(Tn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Tn)!==null}intersectTriangle(t,e,i,s,r){Ba.subVectors(e,t),cr.subVectors(i,t),za.crossVectors(Ba,cr);let o=this.direction.dot(za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hn.subVectors(this.origin,t);let l=a*this.direction.dot(cr.crossVectors(Hn,cr));if(l<0)return null;let c=a*this.direction.dot(Ba.cross(Hn));if(c<0||l+c>o)return null;let h=-a*Hn.dot(za);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class n{constructor(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p)}set(t,e,i,s,r,o,a,l,c,h,d,f,m,g,_,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/Ui.setFromMatrixColumn(t,0).length(),r=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=m+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f+_*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,m=l*d,g=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,m=o*d,g=a*h,_=a*d;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){let f=o*l,m=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Bd)}lookAt(t,e,i){let s=this.elements;return Xe.subVectors(t,e),Xe.lengthSq()===0&&(Xe.z=1),Xe.normalize(),Vn.crossVectors(i,Xe),Vn.lengthSq()===0&&(Math.abs(i.z)===1?Xe.x+=1e-4:Xe.z+=1e-4,Xe.normalize(),Vn.crossVectors(i,Xe)),Vn.normalize(),hr.crossVectors(Xe,Vn),s[0]=Vn.x,s[4]=hr.x,s[8]=Xe.x,s[1]=Vn.y,s[5]=hr.y,s[9]=Xe.y,s[2]=Vn.z,s[6]=hr.z,s[10]=Xe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],m=i[13],g=i[2],_=i[6],p=i[10],u=i[14],E=i[3],v=i[7],w=i[11],P=i[15],A=s[0],T=s[4],X=s[8],y=s[12],b=s[1],z=s[5],q=s[9],V=s[13],R=s[2],L=s[6],H=s[10],Y=s[14],G=s[3],W=s[7],Z=s[11],Q=s[15];return r[0]=o*A+a*b+l*R+c*G,r[4]=o*T+a*z+l*L+c*W,r[8]=o*X+a*q+l*H+c*Z,r[12]=o*y+a*V+l*Y+c*Q,r[1]=h*A+d*b+f*R+m*G,r[5]=h*T+d*z+f*L+m*W,r[9]=h*X+d*q+f*H+m*Z,r[13]=h*y+d*V+f*Y+m*Q,r[2]=g*A+_*b+p*R+u*G,r[6]=g*T+_*z+p*L+u*W,r[10]=g*X+_*q+p*H+u*Z,r[14]=g*y+_*V+p*Y+u*Q,r[3]=E*A+v*b+w*R+P*G,r[7]=E*T+v*z+w*L+P*W,r[11]=E*X+v*q+w*H+P*Z,r[15]=E*y+v*V+w*Y+P*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*m-i*l*m)+_*(+e*l*m-e*c*f+r*o*f-s*o*m+s*c*h-r*l*h)+p*(+e*c*d-e*a*m-r*o*d+i*o*m+r*a*h-i*c*h)+u*(-s*a*h-e*l*d+e*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],E=d*p*c-_*f*c+_*l*m-a*p*m-d*l*u+a*f*u,v=g*f*c-h*p*c-g*l*m+o*p*m+h*l*u-o*f*u,w=h*_*c-g*d*c+g*a*m-o*_*m-h*a*u+o*d*u,P=g*d*l-h*_*l-g*a*f+o*_*f+h*a*p-o*d*p,A=e*E+i*v+s*w+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return t[0]=E*T,t[1]=(_*f*r-d*p*r-_*s*m+i*p*m+d*s*u-i*f*u)*T,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*u+i*l*u)*T,t[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*m-i*l*m)*T,t[4]=v*T,t[5]=(h*p*r-g*f*r+g*s*m-e*p*m-h*s*u+e*f*u)*T,t[6]=(g*l*r-o*p*r-g*s*c+e*p*c+o*s*u-e*l*u)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*m+e*l*m)*T,t[8]=w*T,t[9]=(g*d*r-h*_*r-g*i*m+e*_*m+h*i*u-e*d*u)*T,t[10]=(o*_*r-g*a*r+g*i*c-e*_*c-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*d*r-h*i*c+e*d*c+o*i*m-e*a*m)*T,t[12]=P*T,t[13]=(h*_*s-g*d*s+g*i*f-e*_*f-h*i*p+e*d*p)*T,t[14]=(g*a*s-o*_*s-g*i*l+e*_*l+o*i*p-e*a*p)*T,t[15]=(o*d*s-h*a*s+h*i*l-e*d*l-o*i*f+e*a*f)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,f=r*c,m=r*h,g=r*d,_=o*h,p=o*d,u=a*d,E=l*c,v=l*h,w=l*d,P=i.x,A=i.y,T=i.z;return s[0]=(1-(_+u))*P,s[1]=(m+w)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-w)*A,s[5]=(1-(f+u))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(p-E)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=Ui.set(s[0],s[1],s[2]).length(),o=Ui.set(s[4],s[5],s[6]).length(),a=Ui.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],cn.copy(this);let c=1/r,h=1/o,d=1/a;return cn.elements[0]*=c,cn.elements[1]*=c,cn.elements[2]*=c,cn.elements[4]*=h,cn.elements[5]*=h,cn.elements[6]*=h,cn.elements[8]*=d,cn.elements[9]*=d,cn.elements[10]*=d,e.setFromRotationMatrix(cn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Un){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),d=(e+t)/(e-t),f=(i+s)/(i-s),m,g;if(a===Un)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ur)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Un){let l=this.elements,c=1/(e-t),h=1/(i-s),d=1/(o-r),f=(e+t)*c,m=(i+s)*h,g,_;if(a===Un)g=(o+r)*d,_=-2*d;else if(a===Ur)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Ui=new I,cn=new _e,Fd=new I(0,0,0),Bd=new I(1,1,1),Vn=new I,hr=new I,Xe=new I,Sc=new _e,bc=new Kn,kr=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bc.setFromEuler(this),this.setFromQuaternion(bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kr.DEFAULT_ORDER="XYZ";var Cs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,Ec=new I,Di=new Kn,An=new _e,ur=new I,xs=new I,kd=new I,Hd=new Kn,wc=new I(1,0,0),Tc=new I(0,1,0),Ac=new I(0,0,1),Vd={type:"added"},Gd={type:"removed"},Be=class n extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new kr,i=new Kn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new kt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(wc,t)}rotateY(t){return this.rotateOnAxis(Tc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wc,t)}translateY(t){return this.translateOnAxis(Tc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ur.copy(t):ur.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(xs,ur,this.up):An.lookAt(ur,xs,this.up),this.quaternion.setFromRotationMatrix(An),s&&(An.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(An),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,kd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Be.DEFAULT_UP=new I(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=new I,Rn=new I,ka=new I,Cn=new I,Ni=new I,Oi=new I,Rc=new I,Ha=new I,Va=new I,Ga=new I,dr=!1,Xi=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),hn.subVectors(t,e),s.cross(hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){hn.subVectors(s,e),Rn.subVectors(i,e),ka.subVectors(t,e);let o=hn.dot(hn),a=hn.dot(Rn),l=hn.dot(ka),c=Rn.dot(Rn),h=Rn.dot(ka),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getUV(t,e,i,s,r,o,a,l){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static isFrontFacing(t,e,i,s){return hn.subVectors(i,e),Rn.subVectors(t,e),hn.cross(Rn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),hn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),dr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Ni.subVectors(s,i),Oi.subVectors(r,i),Ha.subVectors(t,i);let l=Ni.dot(Ha),c=Oi.dot(Ha);if(l<=0&&c<=0)return e.copy(i);Va.subVectors(t,s);let h=Ni.dot(Va),d=Oi.dot(Va);if(h>=0&&d<=h)return e.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Ni,o);Ga.subVectors(t,r);let m=Ni.dot(Ga),g=Oi.dot(Ga);if(g>=0&&m<=g)return e.copy(r);let _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Oi,a);let p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Rc.subVectors(r,s),a=(d-h)/(d-h+(m-g)),e.copy(s).addScaledVector(Rc,a);let u=1/(p+_+f);return o=_*u,a=f*u,e.copy(i).addScaledVector(Ni,o).addScaledVector(Oi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Wa(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=Go(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Wa(o,r,t+1/3),this.g=Wa(o,r,t),this.b=Wa(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=pe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let i=yh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zi(t.r),this.g=Zi(t.g),this.b=Zi(t.b),this}copyLinearToSRGB(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return Kt.fromWorkingColorSpace(Re.copy(this),t),Math.round(Ce(Re.r*255,0,255))*65536+Math.round(Ce(Re.g*255,0,255))*256+Math.round(Ce(Re.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Re.copy(this),e);let i=Re.r,s=Re.g,r=Re.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=pe){Kt.fromWorkingColorSpace(Re.copy(this),t);let e=Re.r,i=Re.g,s=Re.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(fr);let i=Ss(Gn.h,fr.h,e),s=Ss(Gn.s,fr.s,e),r=Ss(Gn.l,fr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Re=new Rt;Rt.NAMES=yh;var Wd=0,_i=class extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=$i,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eo,this.blendDst=no,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ri,this.stencilZFail=Ri,this.stencilZPass=Ri,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eo&&(i.blendSrc=this.blendSrc),this.blendDst!==no&&(i.blendDst=this.blendDst),this.blendEquation!==ui&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ar&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ri&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ri&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ri&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},jn=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=oh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new I,pr=new Ft,tn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=mc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Wi(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mc&&(t.usage=this.usage),t}};var Hr=class extends tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Vr=class extends tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ce=class extends tn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Xd=0,Ke=new _e,Xa=new Be,Fi=new I,qe=new gi,vs=new gi,be=new I,pn=class n extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Vr:Hr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ke.makeRotationFromQuaternion(t),this.applyMatrix4(Ke),this}rotateX(t){return Ke.makeRotationX(t),this.applyMatrix4(Ke),this}rotateY(t){return Ke.makeRotationY(t),this.applyMatrix4(Ke),this}rotateZ(t){return Ke.makeRotationZ(t),this.applyMatrix4(Ke),this}translate(t,e,i){return Ke.makeTranslation(t,e,i),this.applyMatrix4(Ke),this}scale(t,e,i){return Ke.makeScale(t,e,i),this.applyMatrix4(Ke),this}lookAt(t){return Xa.lookAt(t),Xa.updateMatrix(),this.applyMatrix4(Xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(qe.min,vs.min),qe.expandByPoint(be),be.addVectors(qe.max,vs.max),qe.expandByPoint(be)):(qe.expandByPoint(vs.min),qe.expandByPoint(vs.max))}qe.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)be.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),be.add(Fi)),s=Math.max(s,i.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<a;b++)c[b]=new I,h[b]=new I;let d=new I,f=new I,m=new I,g=new Ft,_=new Ft,p=new Ft,u=new I,E=new I;function v(b,z,q){d.fromArray(s,b*3),f.fromArray(s,z*3),m.fromArray(s,q*3),g.fromArray(o,b*2),_.fromArray(o,z*2),p.fromArray(o,q*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);let V=1/(_.x*p.y-p.x*_.y);isFinite(V)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(V),E.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(V),c[b].add(u),c[z].add(u),c[q].add(u),h[b].add(E),h[z].add(E),h[q].add(E))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let b=0,z=w.length;b<z;++b){let q=w[b],V=q.start,R=q.count;for(let L=V,H=V+R;L<H;L+=3)v(i[L+0],i[L+1],i[L+2])}let P=new I,A=new I,T=new I,X=new I;function y(b){T.fromArray(r,b*3),X.copy(T);let z=c[b];P.copy(z),P.sub(T.multiplyScalar(T.dot(z))).normalize(),A.crossVectors(X,z);let V=A.dot(h[b])<0?-1:1;l[b*4]=P.x,l[b*4+1]=P.y,l[b*4+2]=P.z,l[b*4+3]=V}for(let b=0,z=w.length;b<z;++b){let q=w[b],V=q.start,R=q.count;for(let L=V,H=V+R;L<H;L+=3)y(i[L+0]),y(i[L+1]),y(i[L+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){let g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*h;for(let u=0;u<h;u++)f[g++]=c[m++]}return new tn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let m=c[d];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cc=new _e,li=new zr,mr=new Rs,Pc=new I,Bi=new I,zi=new I,ki=new I,qa=new I,gr=new I,_r=new Ft,xr=new Ft,vr=new Ft,Lc=new I,Ic=new I,Uc=new I,yr=new I,Mr=new I,qt=class extends Be{constructor(t=new pn,e=new jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(qa.fromBufferAttribute(d,t),o?gr.addScaledVector(qa,h):gr.addScaledVector(qa.sub(e),h))}e.add(gr)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mr.copy(i.boundingSphere),mr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(mr.containsPoint(li.origin)===!1&&(li.intersectSphere(mr,Pc)===null||li.origin.distanceToSquared(Pc)>(t.far-t.near)**2))&&(Cc.copy(r).invert(),li.copy(t.ray).applyMatrix4(Cc),!(i.boundingBox!==null&&li.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,P=v;w<P;w+=3){let A=a.getX(w),T=a.getX(w+1),X=a.getX(w+2);s=Sr(this,u,t,i,c,h,d,A,T,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=a.getX(p),v=a.getX(p+1),w=a.getX(p+2);s=Sr(this,o,t,i,c,h,d,E,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let p=f[g],u=o[p.materialIndex],E=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let w=E,P=v;w<P;w+=3){let A=w,T=w+1,X=w+2;s=Sr(this,u,t,i,c,h,d,A,T,X),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){let E=p,v=p+1,w=p+2;s=Sr(this,o,t,i,c,h,d,E,v,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function qd(n,t,e,i,s,r,o,a){let l;if(t.side===Le?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Zn,a),l===null)return null;Mr.copy(a),Mr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Mr);return c<e.near||c>e.far?null:{distance:c,point:Mr.clone(),object:n}}function Sr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,Bi),n.getVertexPosition(l,zi),n.getVertexPosition(c,ki);let h=qd(n,t,e,i,Bi,zi,ki,yr);if(h){s&&(_r.fromBufferAttribute(s,a),xr.fromBufferAttribute(s,l),vr.fromBufferAttribute(s,c),h.uv=Xi.getInterpolation(yr,Bi,zi,ki,_r,xr,vr,new Ft)),r&&(_r.fromBufferAttribute(r,a),xr.fromBufferAttribute(r,l),vr.fromBufferAttribute(r,c),h.uv1=Xi.getInterpolation(yr,Bi,zi,ki,_r,xr,vr,new Ft),h.uv2=h.uv1),o&&(Lc.fromBufferAttribute(o,a),Ic.fromBufferAttribute(o,l),Uc.fromBufferAttribute(o,c),h.normal=Xi.getInterpolation(yr,Bi,zi,ki,Lc,Ic,Uc,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};Xi.getNormal(Bi,zi,ki,d.normal),h.face=d}return h}var On=class n extends pn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ce(c,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(_,p,u,E,v,w,P,A,T,X,y){let b=w/T,z=P/X,q=w/2,V=P/2,R=A/2,L=T+1,H=X+1,Y=0,G=0,W=new I;for(let Z=0;Z<H;Z++){let Q=Z*z-V;for(let ot=0;ot<L;ot++){let k=ot*b-q;W[_]=k*E,W[p]=Q*v,W[u]=R,c.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[u]=A>0?1:-1,h.push(W.x,W.y,W.z),d.push(ot/T),d.push(1-Z/X),Y+=1}}for(let Z=0;Z<X;Z++)for(let Q=0;Q<T;Q++){let ot=f+Q+L*Z,k=f+Q+L*(Z+1),$=f+(Q+1)+L*(Z+1),lt=f+(Q+1)+L*Z;l.push(ot,k,lt),l.push(k,$,lt),G+=6}a.addGroup(m,G,y),m+=G,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ts(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Oe(n){let t={};for(let e=0;e<n.length;e++){let i=ts(n[e]);for(let s in i)t[s]=i[s]}return t}function Yd(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Mh(n){return n.getRenderTarget()===null?n.outputColorSpace:Kt.workingColorSpace}var $d={clone:ts,merge:Oe},Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Fn=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=Jd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ts(t.uniforms),this.uniformsGroups=Yd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Gr=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends Gr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=As*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return As*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Hi=-90,Vi=1,uo=class extends Be{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Hi,Vi,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Hi,Vi,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Hi,Vi,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Hi,Vi,t,e);a.layers=this.layers,this.add(a);let l=new Pe(Hi,Vi,t,e);l.layers=this.layers,this.add(l);let c=new Pe(Hi,Vi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Un)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ur)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Wr=class extends en{constructor(t,e,i,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ki,super(t,e,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fo=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(bs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===mi?pe:Qe),this.texture=new Wr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new On(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Le,blending:qn});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===ws&&(e.minFilter=je),new uo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},Ya=new I,Kd=new I,jd=new kt,Ln=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Ya.subVectors(i,e).cross(Kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Ya),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||jd.getNormalMatrix(t),s=this.coplanarPoint(Ya).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new Rs,br=new I,Ps=class{constructor(t=new Ln,e=new Ln,i=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Un){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],u=s[12],E=s[13],v=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,p-m,w-u).normalize(),i[1].setComponents(l+r,f+c,p+m,w+u).normalize(),i[2].setComponents(l+o,f+h,p+g,w+E).normalize(),i[3].setComponents(l-o,f-h,p-g,w-E).normalize(),i[4].setComponents(l-a,f-d,p-_,w-v).normalize(),e===Un)i[5].setComponents(l+a,f+d,p+_,w+v).normalize();else if(e===Ur)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(br.x=s.normal.x>0?t.max.x:t.min.x,br.y=s.normal.y>0?t.max.y:t.min.y,br.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(br)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Sh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Qd(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let d=c.array,f=c.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,d,f),c.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,d){let f=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(d,c),m.count===-1&&g.length===0&&n.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){let u=g[_];e?n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):n.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);if(d===void 0)i.set(c,s(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,h),d.version=c.version}}return{get:o,remove:a,update:l}}var es=class n extends pn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=e/l,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){let E=u*f-o;for(let v=0;v<c;v++){let w=v*d-r;g.push(w,-E,0),_.push(0,0,1),p.push(v/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let E=0;E<a;E++){let v=E+c*u,w=E+c*(u+1),P=E+1+c*(u+1),A=E+1+c*u;m.push(v,w,A),m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},tf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ef=`#ifdef USE_ALPHAHASH
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
#endif`,nf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,of=`#ifdef USE_AOMAP
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
#endif`,lf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,hf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,uf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ff=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pf=`#ifdef USE_IRIDESCENCE
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
#endif`,mf=`#ifdef USE_BUMPMAP
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
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ef=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tf=`vec3 transformedNormal = objectNormal;
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
#endif`,Af=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",If=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Uf=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nf=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Gf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,$f=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,Zf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
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
#endif`,tp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,ep=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,np=`#if defined( RE_IndirectDiffuse )
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
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,op=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,lp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,up=`#if defined( USE_POINTS_UV )
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
#endif`,dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,gp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_p=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bp=`#ifdef USE_NORMALMAP
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
#endif`,Ep=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ip=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Np=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Op=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Fp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hp=`#ifdef USE_SKINNING
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
#endif`,Vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gp=`#ifdef USE_SKINNING
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
#endif`,Wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yp=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,em=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,lm=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,um=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,xm=`#define MATCAP
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
}`,vm=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,ym=`#define NORMAL
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
}`,Mm=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sm=`#define PHONG
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
}`,bm=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Em=`#define STANDARD
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
}`,wm=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Tm=`#define TOON
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
}`,Am=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Rm=`uniform float size;
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
}`,Cm=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,Lm=`uniform vec3 color;
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
}`,Im=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Um=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ut={alphahash_fragment:tf,alphahash_pars_fragment:ef,alphamap_fragment:nf,alphamap_pars_fragment:sf,alphatest_fragment:rf,alphatest_pars_fragment:af,aomap_fragment:of,aomap_pars_fragment:lf,batching_pars_vertex:cf,batching_vertex:hf,begin_vertex:uf,beginnormal_vertex:df,bsdfs:ff,iridescence_fragment:pf,bumpmap_pars_fragment:mf,clipping_planes_fragment:gf,clipping_planes_pars_fragment:_f,clipping_planes_pars_vertex:xf,clipping_planes_vertex:vf,color_fragment:yf,color_pars_fragment:Mf,color_pars_vertex:Sf,color_vertex:bf,common:Ef,cube_uv_reflection_fragment:wf,defaultnormal_vertex:Tf,displacementmap_pars_vertex:Af,displacementmap_vertex:Rf,emissivemap_fragment:Cf,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:If,envmap_fragment:Uf,envmap_common_pars_fragment:Df,envmap_pars_fragment:Nf,envmap_pars_vertex:Of,envmap_physical_pars_fragment:$f,envmap_vertex:Ff,fog_vertex:Bf,fog_pars_vertex:zf,fog_fragment:kf,fog_pars_fragment:Hf,gradientmap_pars_fragment:Vf,lightmap_fragment:Gf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Zf,lights_toon_pars_fragment:Jf,lights_phong_fragment:Kf,lights_phong_pars_fragment:jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:tp,lights_fragment_begin:ep,lights_fragment_maps:np,lights_fragment_end:ip,logdepthbuf_fragment:sp,logdepthbuf_pars_fragment:rp,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:op,map_fragment:lp,map_pars_fragment:cp,map_particle_fragment:hp,map_particle_pars_fragment:up,metalnessmap_fragment:dp,metalnessmap_pars_fragment:fp,morphcolor_vertex:pp,morphnormal_vertex:mp,morphtarget_pars_vertex:gp,morphtarget_vertex:_p,normal_fragment_begin:xp,normal_fragment_maps:vp,normal_pars_fragment:yp,normal_pars_vertex:Mp,normal_vertex:Sp,normalmap_pars_fragment:bp,clearcoat_normal_fragment_begin:Ep,clearcoat_normal_fragment_maps:wp,clearcoat_pars_fragment:Tp,iridescence_pars_fragment:Ap,opaque_fragment:Rp,packing:Cp,premultiplied_alpha_fragment:Pp,project_vertex:Lp,dithering_fragment:Ip,dithering_pars_fragment:Up,roughnessmap_fragment:Dp,roughnessmap_pars_fragment:Np,shadowmap_pars_fragment:Op,shadowmap_pars_vertex:Fp,shadowmap_vertex:Bp,shadowmask_pars_fragment:zp,skinbase_vertex:kp,skinning_pars_vertex:Hp,skinning_vertex:Vp,skinnormal_vertex:Gp,specularmap_fragment:Wp,specularmap_pars_fragment:Xp,tonemapping_fragment:qp,tonemapping_pars_fragment:Yp,transmission_fragment:$p,transmission_pars_fragment:Zp,uv_pars_fragment:Jp,uv_pars_vertex:Kp,uv_vertex:jp,worldpos_vertex:Qp,background_vert:tm,background_frag:em,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:sm,cube_frag:rm,depth_vert:am,depth_frag:om,distanceRGBA_vert:lm,distanceRGBA_frag:cm,equirect_vert:hm,equirect_frag:um,linedashed_vert:dm,linedashed_frag:fm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:gm,meshlambert_frag:_m,meshmatcap_vert:xm,meshmatcap_frag:vm,meshnormal_vert:ym,meshnormal_frag:Mm,meshphong_vert:Sm,meshphong_frag:bm,meshphysical_vert:Em,meshphysical_frag:wm,meshtoon_vert:Tm,meshtoon_frag:Am,points_vert:Rm,points_frag:Cm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Im,sprite_frag:Um},it={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},vn={basic:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Oe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Oe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Oe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Oe([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Oe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Oe([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Oe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Oe([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:Oe([it.common,it.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:Oe([it.lights,it.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};vn.physical={uniforms:Oe([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};var Er={r:0,b:0,g:0};function Dm(n,t,e,i,s,r,o){let a=new Rt(0),l=r===!0?0:1,c,h,d=null,f=0,m=null;function g(p,u){let E=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),E=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Qr)?(h===void 0&&(h=new qt(new On(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:ts(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ne,(d!==v||f!==v.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new qt(new es(2,2),new Fn({name:"BackgroundMaterial",uniforms:ts(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,u){p.getRGB(Er,Mh(n)),i.buffers.color.setClear(Er.r,Er.g,Er.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),l=u,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function Nm(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null),c=l,h=!1;function d(R,L,H,Y,G){let W=!1;if(o){let Z=_(Y,H,L);c!==Z&&(c=Z,m(c.object)),W=u(R,Y,H,G),W&&E(R,Y,H,G)}else{let Z=L.wireframe===!0;(c.geometry!==Y.id||c.program!==H.id||c.wireframe!==Z)&&(c.geometry=Y.id,c.program=H.id,c.wireframe=Z,W=!0)}G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,X(R,L,H,Y),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(R){return i.isWebGL2?n.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return i.isWebGL2?n.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function _(R,L,H){let Y=H.wireframe===!0,G=a[R.id];G===void 0&&(G={},a[R.id]=G);let W=G[L.id];W===void 0&&(W={},G[L.id]=W);let Z=W[Y];return Z===void 0&&(Z=p(f()),W[Y]=Z),Z}function p(R){let L=[],H=[],Y=[];for(let G=0;G<s;G++)L[G]=0,H[G]=0,Y[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:Y,object:R,attributes:{},index:null}}function u(R,L,H,Y){let G=c.attributes,W=L.attributes,Z=0,Q=H.getAttributes();for(let ot in Q)if(Q[ot].location>=0){let $=G[ot],lt=W[ot];if(lt===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&(lt=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&(lt=R.instanceColor)),$===void 0||$.attribute!==lt||lt&&$.data!==lt.data)return!0;Z++}return c.attributesNum!==Z||c.index!==Y}function E(R,L,H,Y){let G={},W=L.attributes,Z=0,Q=H.getAttributes();for(let ot in Q)if(Q[ot].location>=0){let $=W[ot];$===void 0&&(ot==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),ot==="instanceColor"&&R.instanceColor&&($=R.instanceColor));let lt={};lt.attribute=$,$&&$.data&&(lt.data=$.data),G[ot]=lt,Z++}c.attributes=G,c.attributesNum=Z,c.index=Y}function v(){let R=c.newAttributes;for(let L=0,H=R.length;L<H;L++)R[L]=0}function w(R){P(R,0)}function P(R,L){let H=c.newAttributes,Y=c.enabledAttributes,G=c.attributeDivisors;H[R]=1,Y[R]===0&&(n.enableVertexAttribArray(R),Y[R]=1),G[R]!==L&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),G[R]=L)}function A(){let R=c.newAttributes,L=c.enabledAttributes;for(let H=0,Y=L.length;H<Y;H++)L[H]!==R[H]&&(n.disableVertexAttribArray(H),L[H]=0)}function T(R,L,H,Y,G,W,Z){Z===!0?n.vertexAttribIPointer(R,L,H,G,W):n.vertexAttribPointer(R,L,H,Y,G,W)}function X(R,L,H,Y){if(i.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let G=Y.attributes,W=H.getAttributes(),Z=L.defaultAttributeValues;for(let Q in W){let ot=W[Q];if(ot.location>=0){let k=G[Q];if(k===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){let $=k.normalized,lt=k.itemSize,gt=e.get(k);if(gt===void 0)continue;let mt=gt.buffer,Ct=gt.type,Lt=gt.bytesPerElement,St=i.isWebGL2===!0&&(Ct===n.INT||Ct===n.UNSIGNED_INT||k.gpuType===ch);if(k.isInterleavedBufferAttribute){let Xt=k.data,D=Xt.stride,Ie=k.offset;if(Xt.isInstancedInterleavedBuffer){for(let xt=0;xt<ot.locationSize;xt++)P(ot.location+xt,Xt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Xt.meshPerAttribute*Xt.count)}else for(let xt=0;xt<ot.locationSize;xt++)w(ot.location+xt);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let xt=0;xt<ot.locationSize;xt++)T(ot.location+xt,lt/ot.locationSize,Ct,$,D*Lt,(Ie+lt/ot.locationSize*xt)*Lt,St)}else{if(k.isInstancedBufferAttribute){for(let Xt=0;Xt<ot.locationSize;Xt++)P(ot.location+Xt,k.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Xt=0;Xt<ot.locationSize;Xt++)w(ot.location+Xt);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let Xt=0;Xt<ot.locationSize;Xt++)T(ot.location+Xt,lt/ot.locationSize,Ct,$,lt*Lt,lt/ot.locationSize*Xt*Lt,St)}}else if(Z!==void 0){let $=Z[Q];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(ot.location,$);break;case 3:n.vertexAttrib3fv(ot.location,$);break;case 4:n.vertexAttrib4fv(ot.location,$);break;default:n.vertexAttrib1fv(ot.location,$)}}}}A()}function y(){q();for(let R in a){let L=a[R];for(let H in L){let Y=L[H];for(let G in Y)g(Y[G].object),delete Y[G];delete L[H]}delete a[R]}}function b(R){if(a[R.id]===void 0)return;let L=a[R.id];for(let H in L){let Y=L[H];for(let G in Y)g(Y[G].object),delete Y[G];delete L[H]}delete a[R.id]}function z(R){for(let L in a){let H=a[L];if(H[R.id]===void 0)continue;let Y=H[R.id];for(let G in Y)g(Y[G].object),delete Y[G];delete H[R.id]}}function q(){V(),h=!0,c!==l&&(c=l,m(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:V,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:w,disableUnusedAttributes:A}}function Om(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,d){n.drawArrays(r,h,d),e.update(d,r,1)}function l(h,d,f){if(f===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function c(h,d,f){if(f===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Fm(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=o||t.has("OES_texture_float"),P=v&&w,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:E,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:P,maxSamples:A}}function Bm(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Ln,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let m=d.length!==0||f||i!==0||s;return s=f,i=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let E=r?0:i,v=E*4,w=u.clippingState||null;l.value=w,w=h(g,f,v,m);for(let P=0;P!==v;++P)w[P]=e[P];u.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,m,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let u=m+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,w=m;v!==_;++v,w+=4)o.copy(d[v]).applyMatrix4(E,a),o.normal.toArray(p,w),p[w+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function zm(n){let t=new WeakMap;function e(o,a){return a===io?o.mapping=Ki:a===so&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===io||a===so)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fo(l.height/2);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var Xr=class extends Gr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},qi=4,Dc=[.125,.215,.35,.446,.526,.582],di=20,$a=new Xr,Nc=new Rt,Za=null,Ja=0,Ka=0,hi=(1+Math.sqrt(5))/2,Gi=1/hi,Oc=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,hi,Gi),new I(0,hi,-Gi),new I(Gi,0,hi),new I(-Gi,0,hi),new I(hi,Gi,0),new I(-hi,Gi,0)],ns=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Za,Ja,Ka),t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ki||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Za=this._renderer.getRenderTarget(),Ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ts,format:dn,colorSpace:Dn,depthBuffer:!1},s=Fc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(r)),this._blurMaterial=Hm(r,t,e)}return s}_compileMaterial(t){let e=new qt(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,s){let a=new Pe(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Nc),h.toneMapping=Yn,h.autoClear=!1;let m=new jn({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new qt(new On,m),_=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Nc),_=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):E===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;wr(s,E*v,u>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ki||t.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;wr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,$a)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Oc[(s-1)%Oc.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new qt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*di-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):di;p>di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${di}`);let u=[],E=0;for(let T=0;T<di;++T){let X=T/_,y=Math.exp(-X*X/2);u.push(y),T===0?E+=y:T<p&&(E+=2*y)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-i;let w=this._sizeLods[s],P=3*w*(s>v-qi?s-v+qi:0),A=4*(this._cubeSize-w);wr(e,P,A,3*w,2*w),l.setRenderTarget(e),l.render(d,$a)}};function km(n){let t=[],e=[],i=[],s=n,r=n-qi+1+Dc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>n-qi?l=Dc[o-n+qi-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,E=new Float32Array(_*g*m),v=new Float32Array(p*g*m),w=new Float32Array(u*g*m);for(let A=0;A<m;A++){let T=A%3*2/3-1,X=A>2?0:-1,y=[T,X,0,T+2/3,X,0,T+2/3,X+1,0,T,X,0,T+2/3,X+1,0,T,X+1,0];E.set(y,_*g*A),v.set(f,p*g*A);let b=[A,A,A,A,A,A];w.set(b,u*g*A)}let P=new pn;P.setAttribute("position",new tn(E,_)),P.setAttribute("uv",new tn(v,p)),P.setAttribute("faceIndex",new tn(w,u)),t.push(P),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Fc(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=Qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Hm(n,t,e){let i=new Float32Array(di),s=new I(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Bc(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zc(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function Vm(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===io||l===so,h=l===Ki||l===ji;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=t.get(a);return e===null&&(e=new ns(n)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),t.set(a,d),d.texture}else{if(t.has(a))return t.get(a).texture;{let d=a.image;if(c&&d&&d.height>0||h&&d&&s(d)){e===null&&(e=new ns(n));let f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Gm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Wm(n,t,e,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",o),delete s[f.id];let m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(d){let f=[],m=d.index,g=d.attributes.position,_=0;if(m!==null){let E=m.array;_=m.version;for(let v=0,w=E.length;v<w;v+=3){let P=E[v+0],A=E[v+1],T=E[v+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){let E=g.array;_=g.version;for(let v=0,w=E.length/3-1;v<w;v+=3){let P=v+0,A=v+1,T=v+2;f.push(P,A,A,T,T,P)}}else return;let p=new(vh(f)?Vr:Hr)(f,1);p.version=_;let u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){let f=r.get(d);if(f){let m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Xm(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*l),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*l,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/l,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,_);let u=0;for(let E=0;E<_;E++)u+=g[E];e.update(u,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function qm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ym(n,t){return n[0]-t[0]}function $m(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Zm(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,d){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,_=r.get(h);if(_===void 0||_.count!==g){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};_!==void 0&&_.texture.dispose();let E=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],X=0;E===!0&&(X=1),v===!0&&(X=2),w===!0&&(X=3);let y=h.attributes.position.count*X,b=1;y>t.maxTextureSize&&(b=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let z=new Float32Array(y*b*4*g),q=new Br(z,y,b,g);q.type=Xn,q.needsUpdate=!0;let V=X*4;for(let L=0;L<g;L++){let H=P[L],Y=A[L],G=T[L],W=y*b*4*L;for(let Z=0;Z<H.count;Z++){let Q=Z*V;E===!0&&(o.fromBufferAttribute(H,Z),z[W+Q+0]=o.x,z[W+Q+1]=o.y,z[W+Q+2]=o.z,z[W+Q+3]=0),v===!0&&(o.fromBufferAttribute(Y,Z),z[W+Q+4]=o.x,z[W+Q+5]=o.y,z[W+Q+6]=o.z,z[W+Q+7]=0),w===!0&&(o.fromBufferAttribute(G,Z),z[W+Q+8]=o.x,z[W+Q+9]=o.y,z[W+Q+10]=o.z,z[W+Q+11]=G.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new Ft(y,b)},r.set(h,_),h.addEventListener("dispose",R)}let p=0;for(let E=0;E<f.length;E++)p+=f[E];let u=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(n,"morphTargetBaseInfluence",u),d.getUniforms().setValue(n,"morphTargetInfluences",f),d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let m=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<m;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort($m);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Ym);let _=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let w=a[v],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+v)!==_[P]&&h.setAttribute("morphTarget"+v,_[P]),p&&h.getAttribute("morphNormal"+v)!==p[P]&&h.setAttribute("morphNormal"+v,p[P]),s[v]=A,u+=A):(_&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let E=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Jm(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var qr=class extends en{constructor(t,e,i,s,r,o,a,l,c,h){if(h=h!==void 0?h:pi,h!==pi&&h!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===pi&&(i=Wn),i===void 0&&h===Qi&&(i=fi),super(null,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Fe,this.minFilter=l!==void 0?l:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},bh=new en,Eh=new qr(1,1);Eh.compareFunction=xh;var wh=new Br,Th=new ho,Ah=new Wr,kc=[],Hc=[],Vc=new Float32Array(16),Gc=new Float32Array(9),Wc=new Float32Array(4);function as(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=kc[s];if(r===void 0&&(r=new Float32Array(s),kc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ea(n,t){let e=Hc[t];e===void 0&&(e=new Int32Array(t),Hc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Km(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function tg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function eg(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Wc.set(i),n.uniformMatrix2fv(this.addr,!1,Wc),ve(e,i)}}function ng(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Gc.set(i),n.uniformMatrix3fv(this.addr,!1,Gc),ve(e,i)}}function ig(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,i))return;Vc.set(i),n.uniformMatrix4fv(this.addr,!1,Vc),ve(e,i)}}function sg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function rg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function ag(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function og(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function lg(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function cg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function hg(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function ug(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function dg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Eh:bh;e.setTexture2D(t||r,s)}function fg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Th,s)}function pg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Ah,s)}function mg(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||wh,s)}function gg(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return tg;case 35674:return eg;case 35675:return ng;case 35676:return ig;case 5124:case 35670:return sg;case 35667:case 35671:return rg;case 35668:case 35672:return ag;case 35669:case 35673:return og;case 5125:return lg;case 36294:return cg;case 36295:return hg;case 36296:return ug;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return fg;case 35680:case 36300:case 36308:case 36293:return pg;case 36289:case 36303:case 36311:case 36292:return mg}}function _g(n,t){n.uniform1fv(this.addr,t)}function xg(n,t){let e=as(t,this.size,2);n.uniform2fv(this.addr,e)}function vg(n,t){let e=as(t,this.size,3);n.uniform3fv(this.addr,e)}function yg(n,t){let e=as(t,this.size,4);n.uniform4fv(this.addr,e)}function Mg(n,t){let e=as(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Sg(n,t){let e=as(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function bg(n,t){let e=as(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Eg(n,t){n.uniform1iv(this.addr,t)}function wg(n,t){n.uniform2iv(this.addr,t)}function Tg(n,t){n.uniform3iv(this.addr,t)}function Ag(n,t){n.uniform4iv(this.addr,t)}function Rg(n,t){n.uniform1uiv(this.addr,t)}function Cg(n,t){n.uniform2uiv(this.addr,t)}function Pg(n,t){n.uniform3uiv(this.addr,t)}function Lg(n,t){n.uniform4uiv(this.addr,t)}function Ig(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||bh,r[o])}function Ug(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Th,r[o])}function Dg(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ah,r[o])}function Ng(n,t,e){let i=this.cache,s=t.length,r=ea(e,s);xe(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wh,r[o])}function Og(n){switch(n){case 5126:return _g;case 35664:return xg;case 35665:return vg;case 35666:return yg;case 35674:return Mg;case 35675:return Sg;case 35676:return bg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ug;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return Ng}}var po=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=gg(e.type)}},mo=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},go=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},ja=/(\w+)(\])?(\[|\.)?/g;function Xc(n,t){n.seq.push(t),n.map[t.id]=t}function Fg(n,t,e){let i=n.name,s=i.length;for(ja.lastIndex=0;;){let r=ja.exec(i),o=ja.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Xc(e,c===void 0?new po(a,n,t):new mo(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new go(a),Xc(e,d)),e=d}}}var Ji=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Fg(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function qc(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Bg=37297,zg=0;function kg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Hg(n){let t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(n),i;switch(t===e?i="":t===Ir&&e===Lr?i="LinearDisplayP3ToLinearSRGB":t===Lr&&e===Ir&&(i="LinearSRGBToLinearDisplayP3"),n){case Dn:case ta:return[i,"LinearTransferOETF"];case pe:case Vo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Yc(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+kg(n.getShaderSource(t),o)}else return s}function Vg(n,t){let e=Hg(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Gg(n,t){let e;switch(t){case $u:e="Linear";break;case Zu:e="Reinhard";break;case Ju:e="OptimizedCineon";break;case ko:e="ACESFilmic";break;case ju:e="AgX";break;case Ku:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Wg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yi).join(`
`)}function Xg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Yi).join(`
`)}function qg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Yg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yi(n){return n!==""}function $c(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(n){return n.replace($g,Jg)}var Zg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jg(n,t){let e=Ut[t];if(e===void 0){let i=Zg.get(t);if(i!==void 0)e=Ut[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}var Kg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jc(n){return n.replace(Kg,jg)}function jg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kc(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Qg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function t0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ki:case ji:t="ENVMAP_TYPE_CUBE";break;case Qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function e0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:t="ENVMAP_MODE_REFRACTION";break}return t}function n0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case oh:t="ENVMAP_BLENDING_MULTIPLY";break;case qu:t="ENVMAP_BLENDING_MIX";break;case Yu:t="ENVMAP_BLENDING_ADD";break}return t}function i0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function s0(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Qg(e),c=t0(e),h=e0(e),d=n0(e),f=i0(e),m=e.isWebGL2?"":Wg(e),g=Xg(e),_=qg(r),p=s.createProgram(),u,E,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yi).join(`
`),u.length>0&&(u+=`
`),E=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Yi).join(`
`),E.length>0&&(E+=`
`)):(u=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),E=[m,Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Yn?"#define TONE_MAPPING":"",e.toneMapping!==Yn?Ut.tonemapping_pars_fragment:"",e.toneMapping!==Yn?Gg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yi).join(`
`)),o=_o(o),o=$c(o,e),o=Zc(o,e),a=_o(a),a=$c(a,e),a=Zc(a,e),o=Jc(o),a=Jc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);let w=v+u+o,P=v+E+a,A=qc(s,s.VERTEX_SHADER,w),T=qc(s,s.FRAGMENT_SHADER,P);s.attachShader(p,A),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function X(q){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(p).trim(),R=s.getShaderInfoLog(A).trim(),L=s.getShaderInfoLog(T).trim(),H=!0,Y=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,A,T);else{let G=Yc(s,A,"vertex"),W=Yc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+G+`
`+W)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(R===""||L==="")&&(Y=!1);Y&&(q.diagnostics={runnable:H,programLog:V,vertexShader:{log:R,prefix:u},fragmentShader:{log:L,prefix:E}})}s.deleteShader(A),s.deleteShader(T),y=new Ji(s,p),b=Yg(s,p)}let y;this.getUniforms=function(){return y===void 0&&X(this),y};let b;this.getAttributes=function(){return b===void 0&&X(this),b};let z=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(p,Bg)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=T,this}var r0=0,xo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new vo(t),e.set(t,i)),i}},vo=class{constructor(t){this.id=r0++,this.code=t,this.usedTimes=0}};function a0(n,t,e,i,s,r,o){let a=new Cs,l=new xo,c=[],h=s.isWebGL2,d=s.logarithmicDepthBuffer,f=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return y===0?"uv":`uv${y}`}function p(y,b,z,q,V){let R=q.fog,L=V.geometry,H=y.isMeshStandardMaterial?q.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),G=Y&&Y.mapping===Qr?Y.image.height:null,W=g[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));let Z=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,Q=Z!==void 0?Z.length:0,ot=0;L.morphAttributes.position!==void 0&&(ot=1),L.morphAttributes.normal!==void 0&&(ot=2),L.morphAttributes.color!==void 0&&(ot=3);let k,$,lt,gt;if(W){let Ue=vn[W];k=Ue.vertexShader,$=Ue.fragmentShader}else k=y.vertexShader,$=y.fragmentShader,l.update(y),lt=l.getVertexShaderID(y),gt=l.getFragmentShaderID(y);let mt=n.getRenderTarget(),Ct=V.isInstancedMesh===!0,Lt=V.isBatchedMesh===!0,St=!!y.map,Xt=!!y.matcap,D=!!Y,Ie=!!y.aoMap,xt=!!y.lightMap,Tt=!!y.bumpMap,dt=!!y.normalMap,oe=!!y.displacementMap,Dt=!!y.emissiveMap,S=!!y.metalnessMap,x=!!y.roughnessMap,O=y.anisotropy>0,j=y.clearcoat>0,K=y.iridescence>0,tt=y.sheen>0,ft=y.transmission>0,at=O&&!!y.anisotropyMap,ht=j&&!!y.clearcoatMap,Mt=j&&!!y.clearcoatNormalMap,Nt=j&&!!y.clearcoatRoughnessMap,J=K&&!!y.iridescenceMap,Jt=K&&!!y.iridescenceThicknessMap,Ht=tt&&!!y.sheenColorMap,wt=tt&&!!y.sheenRoughnessMap,_t=!!y.specularMap,ut=!!y.specularColorMap,It=!!y.specularIntensityMap,Zt=ft&&!!y.transmissionMap,he=ft&&!!y.thicknessMap,Bt=!!y.gradientMap,nt=!!y.alphaMap,C=y.alphaTest>0,st=!!y.alphaHash,rt=!!y.extensions,bt=!!L.attributes.uv1,vt=!!L.attributes.uv2,Qt=!!L.attributes.uv3,te=Yn;return y.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(te=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:$,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:gt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:Lt,instancing:Ct,instancingColor:Ct&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:mt===null?n.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Dn,map:St,matcap:Xt,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:G,aoMap:Ie,lightMap:xt,bumpMap:Tt,normalMap:dt,displacementMap:f&&oe,emissiveMap:Dt,normalMapObjectSpace:dt&&y.normalMapType===hd,normalMapTangentSpace:dt&&y.normalMapType===_h,metalnessMap:S,roughnessMap:x,anisotropy:O,anisotropyMap:at,clearcoat:j,clearcoatMap:ht,clearcoatNormalMap:Mt,clearcoatRoughnessMap:Nt,iridescence:K,iridescenceMap:J,iridescenceThicknessMap:Jt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:ut,specularIntensityMap:It,transmission:ft,transmissionMap:Zt,thicknessMap:he,gradientMap:Bt,opaque:y.transparent===!1&&y.blending===$i,alphaMap:nt,alphaTest:C,alphaHash:st,combine:y.combine,mapUv:St&&_(y.map.channel),aoMapUv:Ie&&_(y.aoMap.channel),lightMapUv:xt&&_(y.lightMap.channel),bumpMapUv:Tt&&_(y.bumpMap.channel),normalMapUv:dt&&_(y.normalMap.channel),displacementMapUv:oe&&_(y.displacementMap.channel),emissiveMapUv:Dt&&_(y.emissiveMap.channel),metalnessMapUv:S&&_(y.metalnessMap.channel),roughnessMapUv:x&&_(y.roughnessMap.channel),anisotropyMapUv:at&&_(y.anisotropyMap.channel),clearcoatMapUv:ht&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Mt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(y.sheenRoughnessMap.channel),specularMapUv:_t&&_(y.specularMap.channel),specularColorMapUv:ut&&_(y.specularColorMap.channel),specularIntensityMapUv:It&&_(y.specularIntensityMap.channel),transmissionMapUv:Zt&&_(y.transmissionMap.channel),thicknessMapUv:he&&_(y.thicknessMap.channel),alphaMapUv:nt&&_(y.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(dt||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:vt,vertexUv3s:Qt,pointsUvs:V.isPoints===!0&&!!L.attributes.uv&&(St||nt),fog:!!R,useFog:y.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:te,useLegacyLights:n._useLegacyLights,decodeVideoTexture:St&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===ne,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===In,flipSided:y.side===Le,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:rt&&y.extensions.derivatives===!0,extensionFragDepth:rt&&y.extensions.fragDepth===!0,extensionDrawBuffers:rt&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&y.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function u(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let z in y.defines)b.push(z),b.push(y.defines[z]);return y.isRawShaderMaterial===!1&&(E(b,y),v(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function E(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function v(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function w(y){let b=g[y.type],z;if(b){let q=vn[b];z=$d.clone(q.uniforms)}else z=y.uniforms;return z}function P(y,b){let z;for(let q=0,V=c.length;q<V;q++){let R=c[q];if(R.cacheKey===b){z=R,++z.usedTimes;break}}return z===void 0&&(z=new s0(n,b,y,r),c.push(z)),z}function A(y){if(--y.usedTimes===0){let b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function T(y){l.remove(y)}function X(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:w,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:X}}function o0(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function l0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function jc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Qc(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(d,f,m,g,_,p){let u=n[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},n[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function a(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function l(d,f,m,g,_,p){let u=o(d,f,m,g,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||l0),i.length>1&&i.sort(f||jc),s.length>1&&s.sort(f||jc)}function h(){for(let d=t,f=n.length;d<f;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function c0(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new Qc,n.set(i,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function h0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Rt};break;case"SpotLight":e={position:new I,direction:new I,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function u0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var d0=0;function f0(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function p0(n,t){let e=new h0,i=u0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);let r=new I,o=new _e,a=new _e;function l(h,d){let f=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,p=0,u=0,E=0,v=0,w=0,P=0,A=0,T=0,X=0,y=0;h.sort(f0);let b=d===!0?Math.PI:1;for(let q=0,V=h.length;q<V;q++){let R=h[q],L=R.color,H=R.intensity,Y=R.distance,G=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=L.r*H*b,m+=L.g*H*b,g+=L.b*H*b;else if(R.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(R.sh.coefficients[W],H);y++}else if(R.isDirectionalLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),R.castShadow){let Z=R.shadow,Q=i.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.directionalShadow[_]=Q,s.directionalShadowMap[_]=G,s.directionalShadowMatrix[_]=R.shadow.matrix,w++}s.directional[_]=W,_++}else if(R.isSpotLight){let W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(L).multiplyScalar(H*b),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,s.spot[u]=W;let Z=R.shadow;if(R.map&&(s.spotLightMap[T]=R.map,T++,Z.updateMatrices(R),R.castShadow&&X++),s.spotLightMatrix[u]=Z.matrix,R.castShadow){let Q=i.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,s.spotShadow[u]=Q,s.spotShadowMap[u]=G,A++}u++}else if(R.isRectAreaLight){let W=e.get(R);W.color.copy(L).multiplyScalar(H),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),s.rectArea[E]=W,E++}else if(R.isPointLight){let W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity*b),W.distance=R.distance,W.decay=R.decay,R.castShadow){let Z=R.shadow,Q=i.get(R);Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,s.pointShadow[p]=Q,s.pointShadowMap[p]=G,s.pointShadowMatrix[p]=R.shadow.matrix,P++}s.point[p]=W,p++}else if(R.isHemisphereLight){let W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(H*b),W.groundColor.copy(R.groundColor).multiplyScalar(H*b),s.hemi[v]=W,v++}}E>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=g;let z=s.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==E||z.hemiLength!==v||z.numDirectionalShadows!==w||z.numPointShadows!==P||z.numSpotShadows!==A||z.numSpotMaps!==T||z.numLightProbes!==y)&&(s.directional.length=_,s.spot.length=u,s.rectArea.length=E,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=A+T-X,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=X,s.numLightProbes=y,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=E,z.hemiLength=v,z.numDirectionalShadows=w,z.numPointShadows=P,z.numSpotShadows=A,z.numSpotMaps=T,z.numLightProbes=y,s.version=d0++)}function c(h,d){let f=0,m=0,g=0,_=0,p=0,u=d.matrixWorldInverse;for(let E=0,v=h.length;E<v;E++){let w=h[E];if(w.isDirectionalLight){let P=s.directional[f];P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),f++}else if(w.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),g++}else if(w.isRectAreaLight){let P=s.rectArea[_];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(w.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(w.matrixWorld),P.position.applyMatrix4(u),m++}else if(w.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(w.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:s}}function th(n,t){let e=new p0(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(d){i.push(d)}function a(d){s.push(d)}function l(d){e.setup(i,d)}function c(d){e.setupView(i,d)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function m0(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),l;return a===void 0?(l=new th(n,t),e.set(r,[l])):o>=a.length?(l=new th(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var yo=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Mo=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},g0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
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
}`;function x0(n,t,e){let i=new Ps,s=new Ft,r=new Ft,o=new re,a=new yo({depthPacking:cd}),l=new Mo,c={},h=e.maxTextureSize,d={[Zn]:Le,[Le]:Zn,[In]:In},f=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:g0,fragmentShader:_0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let g=new pn;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new qt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let u=this.type;this.render=function(A,T,X){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let y=n.getRenderTarget(),b=n.getActiveCubeFace(),z=n.getActiveMipmapLevel(),q=n.state;q.setBlending(qn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let V=u!==Pn&&this.type===Pn,R=u===Pn&&this.type!==Pn;for(let L=0,H=A.length;L<H;L++){let Y=A[L],G=Y.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let W=G.getFrameExtents();if(s.multiply(W),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,G.mapSize.y=r.y)),G.map===null||V===!0||R===!0){let Q=this.type!==Pn?{minFilter:Fe,magFilter:Fe}:{};G.map!==null&&G.map.dispose(),G.map=new Nn(s.x,s.y,Q),G.map.texture.name=Y.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let Z=G.getViewportCount();for(let Q=0;Q<Z;Q++){let ot=G.getViewport(Q);o.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),q.viewport(o),G.updateMatrices(Y,Q),i=G.getFrustum(),w(T,X,G.camera,Y,this.type)}G.isPointLightShadow!==!0&&this.type===Pn&&E(G,X),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(y,b,z)};function E(A,T){let X=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,X,f,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,X,m,_,null)}function v(A,T,X,y){let b=null,z=X.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)b=z;else if(b=X.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let q=b.uuid,V=T.uuid,R=c[q];R===void 0&&(R={},c[q]=R);let L=R[V];L===void 0&&(L=b.clone(),R[V]=L,T.addEventListener("dispose",P)),b=L}if(b.visible=T.visible,b.wireframe=T.wireframe,y===Pn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:d[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,X.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let q=n.properties.get(b);q.light=X}return b}function w(A,T,X,y,b){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===Pn)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld);let V=t.update(A),R=A.material;if(Array.isArray(R)){let L=V.groups;for(let H=0,Y=L.length;H<Y;H++){let G=L[H],W=R[G.materialIndex];if(W&&W.visible){let Z=v(A,W,y,b);A.onBeforeShadow(n,A,T,X,V,Z,G),n.renderBufferDirect(X,null,V,Z,A,G),A.onAfterShadow(n,A,T,X,V,Z,G)}}}else if(R.visible){let L=v(A,R,y,b);A.onBeforeShadow(n,A,T,X,V,L,null),n.renderBufferDirect(X,null,V,L,A,null),A.onAfterShadow(n,A,T,X,V,L,null)}}let q=A.children;for(let V=0,R=q.length;V<R;V++)w(q[V],T,X,y,b)}function P(A){A.target.removeEventListener("dispose",P);for(let X in c){let y=c[X],b=A.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}function v0(n,t,e){let i=e.isWebGL2;function s(){let C=!1,st=new re,rt=null,bt=new re(0,0,0,0);return{setMask:function(vt){rt!==vt&&!C&&(n.colorMask(vt,vt,vt,vt),rt=vt)},setLocked:function(vt){C=vt},setClear:function(vt,Qt,te,Me,Ue){Ue===!0&&(vt*=Me,Qt*=Me,te*=Me),st.set(vt,Qt,te,Me),bt.equals(st)===!1&&(n.clearColor(vt,Qt,te,Me),bt.copy(st))},reset:function(){C=!1,rt=null,bt.set(-1,0,0,0)}}}function r(){let C=!1,st=null,rt=null,bt=null;return{setTest:function(vt){vt?Lt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(vt){st!==vt&&!C&&(n.depthMask(vt),st=vt)},setFunc:function(vt){if(rt!==vt){switch(vt){case zu:n.depthFunc(n.NEVER);break;case ku:n.depthFunc(n.ALWAYS);break;case Hu:n.depthFunc(n.LESS);break;case Ar:n.depthFunc(n.LEQUAL);break;case Vu:n.depthFunc(n.EQUAL);break;case Gu:n.depthFunc(n.GEQUAL);break;case Wu:n.depthFunc(n.GREATER);break;case Xu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=vt}},setLocked:function(vt){C=vt},setClear:function(vt){bt!==vt&&(n.clearDepth(vt),bt=vt)},reset:function(){C=!1,st=null,rt=null,bt=null}}}function o(){let C=!1,st=null,rt=null,bt=null,vt=null,Qt=null,te=null,Me=null,Ue=null;return{setTest:function(ee){C||(ee?Lt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(ee){st!==ee&&!C&&(n.stencilMask(ee),st=ee)},setFunc:function(ee,De,xn){(rt!==ee||bt!==De||vt!==xn)&&(n.stencilFunc(ee,De,xn),rt=ee,bt=De,vt=xn)},setOp:function(ee,De,xn){(Qt!==ee||te!==De||Me!==xn)&&(n.stencilOp(ee,De,xn),Qt=ee,te=De,Me=xn)},setLocked:function(ee){C=ee},setClear:function(ee){Ue!==ee&&(n.clearStencil(ee),Ue=ee)},reset:function(){C=!1,st=null,rt=null,bt=null,vt=null,Qt=null,te=null,Me=null,Ue=null}}}let a=new s,l=new r,c=new o,h=new WeakMap,d=new WeakMap,f={},m={},g=new WeakMap,_=[],p=null,u=!1,E=null,v=null,w=null,P=null,A=null,T=null,X=null,y=new Rt(0,0,0),b=0,z=!1,q=null,V=null,R=null,L=null,H=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,W=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),G=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),G=W>=2);let Q=null,ot={},k=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),lt=new re().fromArray(k),gt=new re().fromArray($);function mt(C,st,rt,bt){let vt=new Uint8Array(4),Qt=n.createTexture();n.bindTexture(C,Qt),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let te=0;te<rt;te++)i&&(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,bt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(st+te,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return Qt}let Ct={};Ct[n.TEXTURE_2D]=mt(n.TEXTURE_2D,n.TEXTURE_2D,1),Ct[n.TEXTURE_CUBE_MAP]=mt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ct[n.TEXTURE_2D_ARRAY]=mt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ct[n.TEXTURE_3D]=mt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Lt(n.DEPTH_TEST),l.setFunc(Ar),Dt(!1),S(Ul),Lt(n.CULL_FACE),dt(qn);function Lt(C){f[C]!==!0&&(n.enable(C),f[C]=!0)}function St(C){f[C]!==!1&&(n.disable(C),f[C]=!1)}function Xt(C,st){return m[C]!==st?(n.bindFramebuffer(C,st),m[C]=st,i&&(C===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),C===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function D(C,st){let rt=_,bt=!1;if(C)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),C.isWebGLMultipleRenderTargets){let vt=C.texture;if(rt.length!==vt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Qt=0,te=vt.length;Qt<te;Qt++)rt[Qt]=n.COLOR_ATTACHMENT0+Qt;rt.length=vt.length,bt=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,bt=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,bt=!0);bt&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ie(C){return p!==C?(n.useProgram(C),p=C,!0):!1}let xt={[ui]:n.FUNC_ADD,[Eu]:n.FUNC_SUBTRACT,[wu]:n.FUNC_REVERSE_SUBTRACT};if(i)xt[Fl]=n.MIN,xt[Bl]=n.MAX;else{let C=t.get("EXT_blend_minmax");C!==null&&(xt[Fl]=C.MIN_EXT,xt[Bl]=C.MAX_EXT)}let Tt={[Tu]:n.ZERO,[Au]:n.ONE,[Ru]:n.SRC_COLOR,[eo]:n.SRC_ALPHA,[Du]:n.SRC_ALPHA_SATURATE,[Iu]:n.DST_COLOR,[Pu]:n.DST_ALPHA,[Cu]:n.ONE_MINUS_SRC_COLOR,[no]:n.ONE_MINUS_SRC_ALPHA,[Uu]:n.ONE_MINUS_DST_COLOR,[Lu]:n.ONE_MINUS_DST_ALPHA,[Nu]:n.CONSTANT_COLOR,[Ou]:n.ONE_MINUS_CONSTANT_COLOR,[Fu]:n.CONSTANT_ALPHA,[Bu]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(C,st,rt,bt,vt,Qt,te,Me,Ue,ee){if(C===qn){u===!0&&(St(n.BLEND),u=!1);return}if(u===!1&&(Lt(n.BLEND),u=!0),C!==bu){if(C!==E||ee!==z){if((v!==ui||A!==ui)&&(n.blendEquation(n.FUNC_ADD),v=ui,A=ui),ee)switch(C){case $i:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.ONE,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case $i:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Dl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Nl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ol:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,P=null,T=null,X=null,y.set(0,0,0),b=0,E=C,z=ee}return}vt=vt||st,Qt=Qt||rt,te=te||bt,(st!==v||vt!==A)&&(n.blendEquationSeparate(xt[st],xt[vt]),v=st,A=vt),(rt!==w||bt!==P||Qt!==T||te!==X)&&(n.blendFuncSeparate(Tt[rt],Tt[bt],Tt[Qt],Tt[te]),w=rt,P=bt,T=Qt,X=te),(Me.equals(y)===!1||Ue!==b)&&(n.blendColor(Me.r,Me.g,Me.b,Ue),y.copy(Me),b=Ue),E=C,z=!1}function oe(C,st){C.side===In?St(n.CULL_FACE):Lt(n.CULL_FACE);let rt=C.side===Le;st&&(rt=!rt),Dt(rt),C.blending===$i&&C.transparent===!1?dt(qn):dt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),l.setFunc(C.depthFunc),l.setTest(C.depthTest),l.setMask(C.depthWrite),a.setMask(C.colorWrite);let bt=C.stencilWrite;c.setTest(bt),bt&&(c.setMask(C.stencilWriteMask),c.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),c.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),O(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Lt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){q!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),q=C)}function S(C){C!==Mu?(Lt(n.CULL_FACE),C!==V&&(C===Ul?n.cullFace(n.BACK):C===Su?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),V=C}function x(C){C!==R&&(G&&n.lineWidth(C),R=C)}function O(C,st,rt){C?(Lt(n.POLYGON_OFFSET_FILL),(L!==st||H!==rt)&&(n.polygonOffset(st,rt),L=st,H=rt)):St(n.POLYGON_OFFSET_FILL)}function j(C){C?Lt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function K(C){C===void 0&&(C=n.TEXTURE0+Y-1),Q!==C&&(n.activeTexture(C),Q=C)}function tt(C,st,rt){rt===void 0&&(Q===null?rt=n.TEXTURE0+Y-1:rt=Q);let bt=ot[rt];bt===void 0&&(bt={type:void 0,texture:void 0},ot[rt]=bt),(bt.type!==C||bt.texture!==st)&&(Q!==rt&&(n.activeTexture(rt),Q=rt),n.bindTexture(C,st||Ct[C]),bt.type=C,bt.texture=st)}function ft(){let C=ot[Q];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function at(){try{n.compressedTexImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Mt(){try{n.texSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Jt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ht(){try{n.texStorage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function wt(){try{n.texStorage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ut(){try{n.texImage3D.apply(n,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function It(C){lt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),lt.copy(C))}function Zt(C){gt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),gt.copy(C))}function he(C,st){let rt=d.get(st);rt===void 0&&(rt=new WeakMap,d.set(st,rt));let bt=rt.get(C);bt===void 0&&(bt=n.getUniformBlockIndex(st,C.name),rt.set(C,bt))}function Bt(C,st){let bt=d.get(st).get(C);h.get(st)!==bt&&(n.uniformBlockBinding(st,bt,C.__bindingPointIndex),h.set(st,bt))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Q=null,ot={},m={},g=new WeakMap,_=[],p=null,u=!1,E=null,v=null,w=null,P=null,A=null,T=null,X=null,y=new Rt(0,0,0),b=0,z=!1,q=null,V=null,R=null,L=null,H=null,lt.set(0,0,n.canvas.width,n.canvas.height),gt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Lt,disable:St,bindFramebuffer:Xt,drawBuffers:D,useProgram:Ie,setBlending:dt,setMaterial:oe,setFlipSided:Dt,setCullFace:S,setLineWidth:x,setPolygonOffset:O,setScissorTest:j,activeTexture:K,bindTexture:tt,unbindTexture:ft,compressedTexImage2D:at,compressedTexImage3D:ht,texImage2D:_t,texImage3D:ut,updateUBOMapping:he,uniformBlockBinding:Bt,texStorage2D:Ht,texStorage3D:wt,texSubImage2D:Mt,texSubImage3D:Nt,compressedTexSubImage2D:J,compressedTexSubImage3D:Jt,scissor:It,viewport:Zt,reset:nt}}function y0(n,t,e,i,s,r,o){let a=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,x){return m?new OffscreenCanvas(S,x):Nr("canvas")}function _(S,x,O,j){let K=1;if((S.width>j||S.height>j)&&(K=j/Math.max(S.width,S.height)),K<1||x===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){let tt=x?Dr:Math.floor,ft=tt(K*S.width),at=tt(K*S.height);d===void 0&&(d=g(ft,at));let ht=O?g(ft,at):d;return ht.width=ft,ht.height=at,ht.getContext("2d").drawImage(S,0,0,ft,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ft+"x"+at+")."),ht}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return lo(S.width)&&lo(S.height)}function u(S){return a?!1:S.wrapS!==un||S.wrapT!==un||S.minFilter!==Fe&&S.minFilter!==je}function E(S,x){return S.generateMipmaps&&x&&S.minFilter!==Fe&&S.minFilter!==je}function v(S){n.generateMipmap(S)}function w(S,x,O,j,K=!1){if(a===!1)return x;if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let tt=x;if(x===n.RED&&(O===n.FLOAT&&(tt=n.R32F),O===n.HALF_FLOAT&&(tt=n.R16F),O===n.UNSIGNED_BYTE&&(tt=n.R8)),x===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(tt=n.R8UI),O===n.UNSIGNED_SHORT&&(tt=n.R16UI),O===n.UNSIGNED_INT&&(tt=n.R32UI),O===n.BYTE&&(tt=n.R8I),O===n.SHORT&&(tt=n.R16I),O===n.INT&&(tt=n.R32I)),x===n.RG&&(O===n.FLOAT&&(tt=n.RG32F),O===n.HALF_FLOAT&&(tt=n.RG16F),O===n.UNSIGNED_BYTE&&(tt=n.RG8)),x===n.RGBA){let ft=K?Pr:Kt.getTransfer(j);O===n.FLOAT&&(tt=n.RGBA32F),O===n.HALF_FLOAT&&(tt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(tt=ft===ne?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function P(S,x,O){return E(S,O)===!0||S.isFramebufferTexture&&S.minFilter!==Fe&&S.minFilter!==je?Math.log2(Math.max(x.width,x.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?x.mipmaps.length:1}function A(S){return S===Fe||S===zl||S===Ea?n.NEAREST:n.LINEAR}function T(S){let x=S.target;x.removeEventListener("dispose",T),y(x),x.isVideoTexture&&h.delete(x)}function X(S){let x=S.target;x.removeEventListener("dispose",X),z(x)}function y(S){let x=i.get(S);if(x.__webglInit===void 0)return;let O=S.source,j=f.get(O);if(j){let K=j[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(S),Object.keys(j).length===0&&f.delete(O)}i.remove(S)}function b(S){let x=i.get(S);n.deleteTexture(x.__webglTexture);let O=S.source,j=f.get(O);delete j[x.__cacheKey],o.memory.textures--}function z(S){let x=S.texture,O=i.get(S),j=i.get(x);if(j.__webglTexture!==void 0&&(n.deleteTexture(j.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(O.__webglFramebuffer[K]))for(let tt=0;tt<O.__webglFramebuffer[K].length;tt++)n.deleteFramebuffer(O.__webglFramebuffer[K][tt]);else n.deleteFramebuffer(O.__webglFramebuffer[K]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[K])}else{if(Array.isArray(O.__webglFramebuffer))for(let K=0;K<O.__webglFramebuffer.length;K++)n.deleteFramebuffer(O.__webglFramebuffer[K]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let K=0;K<O.__webglColorRenderbuffer.length;K++)O.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[K]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let K=0,tt=x.length;K<tt;K++){let ft=i.get(x[K]);ft.__webglTexture&&(n.deleteTexture(ft.__webglTexture),o.memory.textures--),i.remove(x[K])}i.remove(x),i.remove(S)}let q=0;function V(){q=0}function R(){let S=q;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),q+=1,S}function L(S){let x=[];return x.push(S.wrapS),x.push(S.wrapT),x.push(S.wrapR||0),x.push(S.magFilter),x.push(S.minFilter),x.push(S.anisotropy),x.push(S.internalFormat),x.push(S.format),x.push(S.type),x.push(S.generateMipmaps),x.push(S.premultiplyAlpha),x.push(S.flipY),x.push(S.unpackAlignment),x.push(S.colorSpace),x.join()}function H(S,x){let O=i.get(S);if(S.isVideoTexture&&oe(S),S.isRenderTargetTexture===!1&&S.version>0&&O.__version!==S.version){let j=S.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(O,S,x);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+x)}function Y(S,x){let O=i.get(S);if(S.version>0&&O.__version!==S.version){lt(O,S,x);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+x)}function G(S,x){let O=i.get(S);if(S.version>0&&O.__version!==S.version){lt(O,S,x);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+x)}function W(S,x){let O=i.get(S);if(S.version>0&&O.__version!==S.version){gt(O,S,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+x)}let Z={[ro]:n.REPEAT,[un]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},Q={[Fe]:n.NEAREST,[zl]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[Qu]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},ot={[ud]:n.NEVER,[_d]:n.ALWAYS,[dd]:n.LESS,[xh]:n.LEQUAL,[fd]:n.EQUAL,[gd]:n.GEQUAL,[pd]:n.GREATER,[md]:n.NOTEQUAL};function k(S,x,O){if(O?(n.texParameteri(S,n.TEXTURE_WRAP_S,Z[x.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,Z[x.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,Z[x.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,Q[x.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,Q[x.minFilter])):(n.texParameteri(S,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(S,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==un||x.wrapT!==un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(S,n.TEXTURE_MAG_FILTER,A(x.magFilter)),n.texParameteri(S,n.TEXTURE_MIN_FILTER,A(x.minFilter)),x.minFilter!==Fe&&x.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let j=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Fe||x.minFilter!==Ea&&x.minFilter!==ws||x.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&x.type===Ts&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(S,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function $(S,x){let O=!1;S.__webglInit===void 0&&(S.__webglInit=!0,x.addEventListener("dispose",T));let j=x.source,K=f.get(j);K===void 0&&(K={},f.set(j,K));let tt=L(x);if(tt!==S.__cacheKey){K[tt]===void 0&&(K[tt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),K[tt].usedTimes++;let ft=K[S.__cacheKey];ft!==void 0&&(K[S.__cacheKey].usedTimes--,ft.usedTimes===0&&b(x)),S.__cacheKey=tt,S.__webglTexture=K[tt].texture}return O}function lt(S,x,O){let j=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(j=n.TEXTURE_3D);let K=$(S,x),tt=x.source;e.bindTexture(j,S.__webglTexture,n.TEXTURE0+O);let ft=i.get(tt);if(tt.version!==ft.__version||K===!0){e.activeTexture(n.TEXTURE0+O);let at=Kt.getPrimaries(Kt.workingColorSpace),ht=x.colorSpace===Qe?null:Kt.getPrimaries(x.colorSpace),Mt=x.colorSpace===Qe||at===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let Nt=u(x)&&p(x.image)===!1,J=_(x.image,Nt,!1,s.maxTextureSize);J=Dt(x,J);let Jt=p(J)||a,Ht=r.convert(x.format,x.colorSpace),wt=r.convert(x.type),_t=w(x.internalFormat,Ht,wt,x.colorSpace,x.isVideoTexture);k(j,x,Jt);let ut,It=x.mipmaps,Zt=a&&x.isVideoTexture!==!0&&_t!==mh,he=ft.__version===void 0||K===!0,Bt=P(x,J,Jt);if(x.isDepthTexture)_t=n.DEPTH_COMPONENT,a?x.type===Xn?_t=n.DEPTH_COMPONENT32F:x.type===Wn?_t=n.DEPTH_COMPONENT24:x.type===fi?_t=n.DEPTH24_STENCIL8:_t=n.DEPTH_COMPONENT16:x.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===pi&&_t===n.DEPTH_COMPONENT&&x.type!==Ho&&x.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Wn,wt=r.convert(x.type)),x.format===Qi&&_t===n.DEPTH_COMPONENT&&(_t=n.DEPTH_STENCIL,x.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=fi,wt=r.convert(x.type))),he&&(Zt?e.texStorage2D(n.TEXTURE_2D,1,_t,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,_t,J.width,J.height,0,Ht,wt,null));else if(x.isDataTexture)if(It.length>0&&Jt){Zt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,_t,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)ut=It[nt],Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,Ht,wt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,_t,ut.width,ut.height,0,Ht,wt,ut.data);x.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(n.TEXTURE_2D,Bt,_t,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ht,wt,J.data)):e.texImage2D(n.TEXTURE_2D,0,_t,J.width,J.height,0,Ht,wt,J.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Zt&&he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,_t,It[0].width,It[0].height,J.depth);for(let nt=0,C=It.length;nt<C;nt++)ut=It[nt],x.format!==dn?Ht!==null?Zt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,J.depth,Ht,ut.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,_t,ut.width,ut.height,J.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,J.depth,Ht,wt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,_t,ut.width,ut.height,J.depth,0,Ht,wt,ut.data)}else{Zt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,_t,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)ut=It[nt],x.format!==dn?Ht!==null?Zt?e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,Ht,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,_t,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,Ht,wt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,_t,ut.width,ut.height,0,Ht,wt,ut.data)}else if(x.isDataArrayTexture)Zt?(he&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Bt,_t,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ht,wt,J.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,_t,J.width,J.height,J.depth,0,Ht,wt,J.data);else if(x.isData3DTexture)Zt?(he&&e.texStorage3D(n.TEXTURE_3D,Bt,_t,J.width,J.height,J.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ht,wt,J.data)):e.texImage3D(n.TEXTURE_3D,0,_t,J.width,J.height,J.depth,0,Ht,wt,J.data);else if(x.isFramebufferTexture){if(he)if(Zt)e.texStorage2D(n.TEXTURE_2D,Bt,_t,J.width,J.height);else{let nt=J.width,C=J.height;for(let st=0;st<Bt;st++)e.texImage2D(n.TEXTURE_2D,st,_t,nt,C,0,Ht,wt,null),nt>>=1,C>>=1}}else if(It.length>0&&Jt){Zt&&he&&e.texStorage2D(n.TEXTURE_2D,Bt,_t,It[0].width,It[0].height);for(let nt=0,C=It.length;nt<C;nt++)ut=It[nt],Zt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,Ht,wt,ut):e.texImage2D(n.TEXTURE_2D,nt,_t,Ht,wt,ut);x.generateMipmaps=!1}else Zt?(he&&e.texStorage2D(n.TEXTURE_2D,Bt,_t,J.width,J.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ht,wt,J)):e.texImage2D(n.TEXTURE_2D,0,_t,Ht,wt,J);E(x,Jt)&&v(j),ft.__version=tt.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function gt(S,x,O){if(x.image.length!==6)return;let j=$(S,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+O);let tt=i.get(K);if(K.version!==tt.__version||j===!0){e.activeTexture(n.TEXTURE0+O);let ft=Kt.getPrimaries(Kt.workingColorSpace),at=x.colorSpace===Qe?null:Kt.getPrimaries(x.colorSpace),ht=x.colorSpace===Qe||ft===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Mt=x.isCompressedTexture||x.image[0].isCompressedTexture,Nt=x.image[0]&&x.image[0].isDataTexture,J=[];for(let nt=0;nt<6;nt++)!Mt&&!Nt?J[nt]=_(x.image[nt],!1,!0,s.maxCubemapSize):J[nt]=Nt?x.image[nt].image:x.image[nt],J[nt]=Dt(x,J[nt]);let Jt=J[0],Ht=p(Jt)||a,wt=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),ut=w(x.internalFormat,wt,_t,x.colorSpace),It=a&&x.isVideoTexture!==!0,Zt=tt.__version===void 0||j===!0,he=P(x,Jt,Ht);k(n.TEXTURE_CUBE_MAP,x,Ht);let Bt;if(Mt){It&&Zt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,he,ut,Jt.width,Jt.height);for(let nt=0;nt<6;nt++){Bt=J[nt].mipmaps;for(let C=0;C<Bt.length;C++){let st=Bt[C];x.format!==dn?wt!==null?It?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,wt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,0,0,st.width,st.height,wt,_t,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C,ut,st.width,st.height,0,wt,_t,st.data)}}}else{Bt=x.mipmaps,It&&Zt&&(Bt.length>0&&he++,e.texStorage2D(n.TEXTURE_CUBE_MAP,he,ut,J[0].width,J[0].height));for(let nt=0;nt<6;nt++)if(Nt){It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,J[nt].width,J[nt].height,wt,_t,J[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,J[nt].width,J[nt].height,0,wt,_t,J[nt].data);for(let C=0;C<Bt.length;C++){let rt=Bt[C].image[nt].image;It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,rt.width,rt.height,wt,_t,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,ut,rt.width,rt.height,0,wt,_t,rt.data)}}else{It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt,_t,J[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,wt,_t,J[nt]);for(let C=0;C<Bt.length;C++){let st=Bt[C];It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,0,0,wt,_t,st.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,C+1,ut,wt,_t,st.image[nt])}}}E(x,Ht)&&v(n.TEXTURE_CUBE_MAP),tt.__version=K.version,x.onUpdate&&x.onUpdate(x)}S.__version=x.version}function mt(S,x,O,j,K,tt){let ft=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ht=w(O.internalFormat,ft,at,O.colorSpace);if(!i.get(x).__hasExternalTextures){let Nt=Math.max(1,x.width>>tt),J=Math.max(1,x.height>>tt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,tt,ht,Nt,J,x.depth,0,ft,at,null):e.texImage2D(K,tt,ht,Nt,J,0,ft,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,S),dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,K,i.get(O).__webglTexture,0,Tt(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,K,i.get(O).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ct(S,x,O){if(n.bindRenderbuffer(n.RENDERBUFFER,S),x.depthBuffer&&!x.stencilBuffer){let j=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||dt(x)){let K=x.depthTexture;K&&K.isDepthTexture&&(K.type===Xn?j=n.DEPTH_COMPONENT32F:K.type===Wn&&(j=n.DEPTH_COMPONENT24));let tt=Tt(x);dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,j,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,j,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,j,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,S)}else if(x.depthBuffer&&x.stencilBuffer){let j=Tt(x);O&&dt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,x.width,x.height):dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,j,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,S)}else{let j=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let K=0;K<j.length;K++){let tt=j[K],ft=r.convert(tt.format,tt.colorSpace),at=r.convert(tt.type),ht=w(tt.internalFormat,ft,at,tt.colorSpace),Mt=Tt(x);O&&dt(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,ht,x.width,x.height):dt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Mt,ht,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ht,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(S,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,S),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),H(x.depthTexture,0);let j=i.get(x.depthTexture).__webglTexture,K=Tt(x);if(x.depthTexture.format===pi)dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(x.depthTexture.format===Qi)dt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function St(S){let x=i.get(S),O=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!x.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Lt(x.__webglFramebuffer,S)}else if(O){x.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[j]),x.__webglDepthbuffer[j]=n.createRenderbuffer(),Ct(x.__webglDepthbuffer[j],S,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Ct(x.__webglDepthbuffer,S,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Xt(S,x,O){let j=i.get(S);x!==void 0&&mt(j.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&St(S)}function D(S){let x=S.texture,O=i.get(S),j=i.get(x);S.addEventListener("dispose",X),S.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=x.version,o.memory.textures++);let K=S.isWebGLCubeRenderTarget===!0,tt=S.isWebGLMultipleRenderTargets===!0,ft=p(S)||a;if(K){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ht=0;ht<x.mipmaps.length;ht++)O.__webglFramebuffer[at][ht]=n.createFramebuffer()}else O.__webglFramebuffer[at]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<x.mipmaps.length;at++)O.__webglFramebuffer[at]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(tt)if(s.drawBuffers){let at=S.texture;for(let ht=0,Mt=at.length;ht<Mt;ht++){let Nt=i.get(at[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&dt(S)===!1){let at=tt?x:[x];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<at.length;ht++){let Mt=at[ht];O.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);let Nt=r.convert(Mt.format,Mt.colorSpace),J=r.convert(Mt.type),Jt=w(Mt.internalFormat,Nt,J,Mt.colorSpace,S.isXRRenderTarget===!0),Ht=Tt(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,Jt,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Ct(O.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),k(n.TEXTURE_CUBE_MAP,x,ft);for(let at=0;at<6;at++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)mt(O.__webglFramebuffer[at][ht],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ht);else mt(O.__webglFramebuffer[at],S,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);E(x,ft)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let at=S.texture;for(let ht=0,Mt=at.length;ht<Mt;ht++){let Nt=at[ht],J=i.get(Nt);e.bindTexture(n.TEXTURE_2D,J.__webglTexture),k(n.TEXTURE_2D,Nt,ft),mt(O.__webglFramebuffer,S,Nt,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),E(Nt,ft)&&v(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?at=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,j.__webglTexture),k(at,x,ft),a&&x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)mt(O.__webglFramebuffer[ht],S,x,n.COLOR_ATTACHMENT0,at,ht);else mt(O.__webglFramebuffer,S,x,n.COLOR_ATTACHMENT0,at,0);E(x,ft)&&v(at),e.unbindTexture()}S.depthBuffer&&St(S)}function Ie(S){let x=p(S)||a,O=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0,K=O.length;j<K;j++){let tt=O[j];if(E(tt,x)){let ft=S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(tt).__webglTexture;e.bindTexture(ft,at),v(ft),e.unbindTexture()}}}function xt(S){if(a&&S.samples>0&&dt(S)===!1){let x=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],O=S.width,j=S.height,K=n.COLOR_BUFFER_BIT,tt=[],ft=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(S),ht=S.isWebGLMultipleRenderTargets===!0;if(ht)for(let Mt=0;Mt<x.length;Mt++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let Mt=0;Mt<x.length;Mt++){tt.push(n.COLOR_ATTACHMENT0+Mt),S.depthBuffer&&tt.push(ft);let Nt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Nt===!1&&(S.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[Mt]),Nt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ft]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ft])),ht){let J=i.get(x[Mt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,O,j,0,0,O,j,K,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let Mt=0;Mt<x.length;Mt++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.RENDERBUFFER,at.__webglColorRenderbuffer[Mt]);let Nt=i.get(x[Mt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Mt,n.TEXTURE_2D,Nt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Tt(S){return Math.min(s.maxSamples,S.samples)}function dt(S){let x=i.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function oe(S){let x=o.render.frame;h.get(S)!==x&&(h.set(S,x),S.update())}function Dt(S,x){let O=S.colorSpace,j=S.format,K=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===oo||O!==Dn&&O!==Qe&&(Kt.getTransfer(O)===ne?a===!1?t.has("EXT_sRGB")===!0&&j===dn?(S.format=oo,S.minFilter=je,S.generateMipmaps=!1):x=Or.sRGBToLinear(x):(j!==dn||K!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),x}this.allocateTextureUnit=R,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=Xt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt}function M0(n,t,e){let i=e.isWebGL2;function s(r,o=Qe){let a,l=Kt.getTransfer(o);if(r===$n)return n.UNSIGNED_BYTE;if(r===hh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===uh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===td)return n.BYTE;if(r===ed)return n.SHORT;if(r===Ho)return n.UNSIGNED_SHORT;if(r===ch)return n.INT;if(r===Wn)return n.UNSIGNED_INT;if(r===Xn)return n.FLOAT;if(r===Ts)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===nd)return n.ALPHA;if(r===dn)return n.RGBA;if(r===id)return n.LUMINANCE;if(r===sd)return n.LUMINANCE_ALPHA;if(r===pi)return n.DEPTH_COMPONENT;if(r===Qi)return n.DEPTH_STENCIL;if(r===oo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===rd)return n.RED;if(r===dh)return n.RED_INTEGER;if(r===ad)return n.RG;if(r===fh)return n.RG_INTEGER;if(r===ph)return n.RGBA_INTEGER;if(r===wa||r===Ta||r===Aa||r===Ra)if(l===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===wa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===wa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kl||r===Hl||r===Vl||r===Gl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Vl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===mh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Wl||r===Xl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Wl)return l===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Xl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ql||r===Yl||r===$l||r===Zl||r===Jl||r===Kl||r===jl||r===Ql||r===tc||r===ec||r===nc||r===ic||r===sc||r===rc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ql)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$l)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===jl)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ql)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===tc)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ec)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nc)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ic)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===sc)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===rc)return l===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ca||r===ac||r===oc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Ca)return l===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ac)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===od||r===lc||r===cc||r===hc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Ca)return a.COMPRESSED_RED_RGTC1_EXT;if(r===lc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===cc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===fi?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var So=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fn=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},S0={type:"move"},Es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,i),u=this._getHandJoint(c,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},bo=class extends Jn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,m=null,g=null,_=e.getContextAttributes(),p=null,u=null,E=[],v=[],w=new Ft,P=null,A=new Pe;A.layers.enable(1),A.viewport=new re;let T=new Pe;T.layers.enable(2),T.viewport=new re;let X=[A,T],y=new So;y.layers.enable(1),y.layers.enable(2);let b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=E[k];return $===void 0&&($=new Es,E[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=E[k];return $===void 0&&($=new Es,E[k]=$),$.getGripSpace()},this.getHand=function(k){let $=E[k];return $===void 0&&($=new Es,E[k]=$),$.getHandSpace()};function q(k){let $=v.indexOf(k.inputSource);if($===-1)return;let lt=E[$];lt!==void 0&&(lt.update(k.inputSource,k.frame,c||o),lt.dispatchEvent({type:k.type,data:k.inputSource}))}function V(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",R);for(let k=0;k<E.length;k++){let $=v[k];$!==null&&(v[k]=null,E[k].disconnect($))}b=null,z=null,t.setRenderTarget(p),m=null,f=null,d=null,s=null,u=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",V),s.addEventListener("inputsourceschange",R),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let $={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Nn(m.framebufferWidth,m.framebufferHeight,{format:dn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let $=null,lt=null,gt=null;_.depth&&(gt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=_.stencil?Qi:pi,lt=_.stencil?fi:Wn);let mt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=new XRWebGLBinding(s,e),f=d.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Nn(f.textureWidth,f.textureHeight,{format:dn,type:$n,depthTexture:new qr(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Ct=t.properties.get(u);Ct.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function R(k){for(let $=0;$<k.removed.length;$++){let lt=k.removed[$],gt=v.indexOf(lt);gt>=0&&(v[gt]=null,E[gt].disconnect(lt))}for(let $=0;$<k.added.length;$++){let lt=k.added[$],gt=v.indexOf(lt);if(gt===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=v.length){v.push(lt),gt=Ct;break}else if(v[Ct]===null){v[Ct]=lt,gt=Ct;break}if(gt===-1)break}let mt=E[gt];mt&&mt.connect(lt)}}let L=new I,H=new I;function Y(k,$,lt){L.setFromMatrixPosition($.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);let gt=L.distanceTo(H),mt=$.projectionMatrix.elements,Ct=lt.projectionMatrix.elements,Lt=mt[14]/(mt[10]-1),St=mt[14]/(mt[10]+1),Xt=(mt[9]+1)/mt[5],D=(mt[9]-1)/mt[5],Ie=(mt[8]-1)/mt[0],xt=(Ct[8]+1)/Ct[0],Tt=Lt*Ie,dt=Lt*xt,oe=gt/(-Ie+xt),Dt=oe*-Ie;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Dt),k.translateZ(oe),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();let S=Lt+oe,x=St+oe,O=Tt-Dt,j=dt+(gt-Dt),K=Xt*St/x*S,tt=D*St/x*S;k.projectionMatrix.makePerspective(O,j,K,tt,S,x),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function G(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;y.near=T.near=A.near=k.near,y.far=T.far=A.far=k.far,(b!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),b=y.near,z=y.far);let $=k.parent,lt=y.cameras;G(y,$);for(let gt=0;gt<lt.length;gt++)G(lt[gt],$);lt.length===2?Y(y,A,T):y.projectionMatrix.copy(A.projectionMatrix),W(k,y,$)};function W(k,$,lt){lt===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(lt.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=As*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let Z=null;function Q(k,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let gt=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,gt=!0);for(let mt=0;mt<lt.length;mt++){let Ct=lt[mt],Lt=null;if(m!==null)Lt=m.getViewport(Ct);else{let Xt=d.getViewSubImage(f,Ct);Lt=Xt.viewport,mt===0&&(t.setRenderTargetTextures(u,Xt.colorTexture,f.ignoreDepthValues?void 0:Xt.depthStencilTexture),t.setRenderTarget(u))}let St=X[mt];St===void 0&&(St=new Pe,St.layers.enable(mt),St.viewport=new re,X[mt]=St),St.matrix.fromArray(Ct.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(Ct.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),mt===0&&(y.matrix.copy(St.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),gt===!0&&y.cameras.push(St)}}for(let lt=0;lt<E.length;lt++){let gt=v[lt],mt=E[lt];gt!==null&&mt!==void 0&&mt.update(gt,$,c||o)}Z&&Z(k,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}let ot=new Sh;ot.setAnimationLoop(Q),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}};function b0(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Mh(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,E,v,w){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,w)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,E,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Le&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Le&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let E=t.get(u).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,E,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*E,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,E){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Le&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){let E=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function E0(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(E,v){let w=v.program;i.uniformBlockBinding(E,w)}function c(E,v){let w=s[E.id];w===void 0&&(g(E),w=h(E),s[E.id]=w,E.addEventListener("dispose",p));let P=v.program;i.updateUBOMapping(E,P);let A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let v=d();E.__bindingPointIndex=v;let w=n.createBuffer(),P=E.__size,A=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,P,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function d(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let v=s[E.id],w=E.uniforms,P=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,T=w.length;A<T;A++){let X=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,b=X.length;y<b;y++){let z=X[y];if(m(z,A,y,P)===!0){let q=z.__offset,V=Array.isArray(z.value)?z.value:[z.value],R=0;for(let L=0;L<V.length;L++){let H=V[L],Y=_(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,q+R,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,R),R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(E,v,w,P){let A=E.value,T=v+"_"+w;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{let X=P[T];if(typeof A=="number"||typeof A=="boolean"){if(X!==A)return P[T]=A,!0}else if(X.equals(A)===!1)return X.copy(A),!0}return!1}function g(E){let v=E.uniforms,w=0,P=16;for(let T=0,X=v.length;T<X;T++){let y=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,z=y.length;b<z;b++){let q=y[b],V=Array.isArray(q.value)?q.value:[q.value];for(let R=0,L=V.length;R<L;R++){let H=V[R],Y=_(H),G=w%P;G!==0&&P-G<Y.boundary&&(w+=P-G),q.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=w,w+=Y.storage}}}let A=w%P;return A>0&&(w+=P-A),E.__size=w,E.__cache={},this}function _(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){let v=E.target;v.removeEventListener("dispose",p);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function u(){for(let E in s)n.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:u}}var Ls=class{constructor(t={}){let{canvas:e=Id(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;let m=new Uint32Array(4),g=new Int32Array(4),_=null,p=null,u=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this._useLegacyLights=!1,this.toneMapping=Yn,this.toneMappingExposure=1;let v=this,w=!1,P=0,A=0,T=null,X=-1,y=null,b=new re,z=new re,q=null,V=new Rt(0),R=0,L=e.width,H=e.height,Y=1,G=null,W=null,Z=new re(0,0,L,H),Q=new re(0,0,L,H),ot=!1,k=new Ps,$=!1,lt=!1,gt=null,mt=new _e,Ct=new Ft,Lt=new I,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return T===null?Y:1}let D=i;function Ie(M,U){for(let F=0;F<M.length;F++){let B=M[F],N=e.getContext(B,U);if(N!==null)return N}return null}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",C,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){let U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),D=Ie(U,M),D===null)throw Ie(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let xt,Tt,dt,oe,Dt,S,x,O,j,K,tt,ft,at,ht,Mt,Nt,J,Jt,Ht,wt,_t,ut,It,Zt;function he(){xt=new Gm(D),Tt=new Fm(D,xt,t),xt.init(Tt),ut=new M0(D,xt,Tt),dt=new v0(D,xt,Tt),oe=new qm(D),Dt=new o0,S=new y0(D,xt,dt,Dt,Tt,ut,oe),x=new zm(v),O=new Vm(v),j=new Qd(D,Tt),It=new Nm(D,xt,j,Tt),K=new Wm(D,j,oe,It),tt=new Jm(D,K,j,oe),Ht=new Zm(D,Tt,S),Nt=new Bm(Dt),ft=new a0(v,x,O,xt,Tt,It,Nt),at=new b0(v,Dt),ht=new c0,Mt=new m0(xt,Tt),Jt=new Dm(v,x,O,dt,tt,f,l),J=new x0(v,tt,Tt),Zt=new E0(D,oe,Tt,dt),wt=new Om(D,xt,oe,Tt),_t=new Xm(D,xt,oe,Tt),oe.programs=ft.programs,v.capabilities=Tt,v.extensions=xt,v.properties=Dt,v.renderLists=ht,v.shadowMap=J,v.state=dt,v.info=oe}he();let Bt=new bo(v,D);this.xr=Bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=xt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=xt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(M){M!==void 0&&(Y=M,this.setSize(L,H,!1))},this.getSize=function(M){return M.set(L,H)},this.setSize=function(M,U,F=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,H=U,e.width=Math.floor(M*Y),e.height=Math.floor(U*Y),F===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(L*Y,H*Y).floor()},this.setDrawingBufferSize=function(M,U,F){L=M,H=U,Y=F,e.width=Math.floor(M*F),e.height=Math.floor(U*F),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(b)},this.getViewport=function(M){return M.copy(Z)},this.setViewport=function(M,U,F,B){M.isVector4?Z.set(M.x,M.y,M.z,M.w):Z.set(M,U,F,B),dt.viewport(b.copy(Z).multiplyScalar(Y).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,U,F,B){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,U,F,B),dt.scissor(z.copy(Q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(M){dt.setScissorTest(ot=M)},this.setOpaqueSort=function(M){G=M},this.setTransparentSort=function(M){W=M},this.getClearColor=function(M){return M.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(M=!0,U=!0,F=!0){let B=0;if(M){let N=!1;if(T!==null){let ct=T.texture.format;N=ct===ph||ct===fh||ct===dh}if(N){let ct=T.texture.type,pt=ct===$n||ct===Wn||ct===Ho||ct===fi||ct===hh||ct===uh,yt=Jt.getClearColor(),Et=Jt.getClearAlpha(),Ot=yt.r,At=yt.g,Pt=yt.b;pt?(m[0]=Ot,m[1]=At,m[2]=Pt,m[3]=Et,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Ot,g[1]=At,g[2]=Pt,g[3]=Et,D.clearBufferiv(D.COLOR,0,g))}else B|=D.COLOR_BUFFER_BIT}U&&(B|=D.DEPTH_BUFFER_BIT),F&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",C,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ht.dispose(),Mt.dispose(),Dt.dispose(),x.dispose(),O.dispose(),tt.dispose(),It.dispose(),Zt.dispose(),ft.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Ue),Bt.removeEventListener("sessionend",ee),gt&&(gt.dispose(),gt=null),De.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=oe.autoReset,U=J.enabled,F=J.autoUpdate,B=J.needsUpdate,N=J.type;he(),oe.autoReset=M,J.enabled=U,J.autoUpdate=F,J.needsUpdate=B,J.type=N}function st(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function rt(M){let U=M.target;U.removeEventListener("dispose",rt),bt(U)}function bt(M){vt(M),Dt.remove(M)}function vt(M){let U=Dt.get(M).programs;U!==void 0&&(U.forEach(function(F){ft.releaseProgram(F)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,F,B,N,ct){U===null&&(U=St);let pt=N.isMesh&&N.matrixWorld.determinant()<0,yt=_u(M,U,F,B,N);dt.setMaterial(B,pt);let Et=F.index,Ot=1;if(B.wireframe===!0){if(Et=K.getWireframeAttribute(F),Et===void 0)return;Ot=2}let At=F.drawRange,Pt=F.attributes.position,de=At.start*Ot,We=(At.start+At.count)*Ot;ct!==null&&(de=Math.max(de,ct.start*Ot),We=Math.min(We,(ct.start+ct.count)*Ot)),Et!==null?(de=Math.max(de,0),We=Math.min(We,Et.count)):Pt!=null&&(de=Math.max(de,0),We=Math.min(We,Pt.count));let Se=We-de;if(Se<0||Se===1/0)return;It.setup(N,B,yt,F,Et);let En,le=wt;if(Et!==null&&(En=j.get(Et),le=_t,le.setIndex(En)),N.isMesh)B.wireframe===!0?(dt.setLineWidth(B.wireframeLinewidth*Xt()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(N.isLine){let zt=B.linewidth;zt===void 0&&(zt=1),dt.setLineWidth(zt*Xt()),N.isLineSegments?le.setMode(D.LINES):N.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else N.isPoints?le.setMode(D.POINTS):N.isSprite&&le.setMode(D.TRIANGLES);if(N.isBatchedMesh)le.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)le.renderInstances(de,Se,N.count);else if(F.isInstancedBufferGeometry){let zt=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,ya=Math.min(F.instanceCount,zt);le.renderInstances(de,Se,ya)}else le.render(de,Se)};function Qt(M,U,F){M.transparent===!0&&M.side===In&&M.forceSinglePass===!1?(M.side=Le,M.needsUpdate=!0,ir(M,U,F),M.side=Zn,M.needsUpdate=!0,ir(M,U,F),M.side=In):ir(M,U,F)}this.compile=function(M,U,F=null){F===null&&(F=M),p=Mt.get(F),p.init(),E.push(p),F.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==F&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(v._useLegacyLights);let B=new Set;return M.traverse(function(N){let ct=N.material;if(ct)if(Array.isArray(ct))for(let pt=0;pt<ct.length;pt++){let yt=ct[pt];Qt(yt,F,N),B.add(yt)}else Qt(ct,F,N),B.add(ct)}),E.pop(),p=null,B},this.compileAsync=function(M,U,F=null){let B=this.compile(M,U,F);return new Promise(N=>{function ct(){if(B.forEach(function(pt){Dt.get(pt).currentProgram.isReady()&&B.delete(pt)}),B.size===0){N(M);return}setTimeout(ct,10)}xt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let te=null;function Me(M){te&&te(M)}function Ue(){De.stop()}function ee(){De.start()}let De=new Sh;De.setAnimationLoop(Me),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(M){te=M,Bt.setAnimationLoop(M),M===null?De.stop():De.start()},Bt.addEventListener("sessionstart",Ue),Bt.addEventListener("sessionend",ee),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(U),U=Bt.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,T),p=Mt.get(M,E.length),p.init(),E.push(p),mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),k.setFromProjectionMatrix(mt),lt=this.localClippingEnabled,$=Nt.init(this.clippingPlanes,lt),_=ht.get(M,u.length),_.init(),u.push(_),xn(M,U,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(G,W),this.info.render.frame++,$===!0&&Nt.beginShadows();let F=p.state.shadowsArray;if(J.render(F,M,U),$===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(_,M),p.setupLights(v._useLegacyLights),U.isArrayCamera){let B=U.cameras;for(let N=0,ct=B.length;N<ct;N++){let pt=B[N];Al(_,M,pt,pt.viewport)}}else Al(_,M,U);T!==null&&(S.updateMultisampleRenderTarget(T),S.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(v,M,U),It.resetDefaultState(),X=-1,y=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function xn(M,U,F,B){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||k.intersectsSprite(M)){B&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(mt);let pt=tt.update(M),yt=M.material;yt.visible&&_.push(M,pt,yt,F,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||k.intersectsObject(M))){let pt=tt.update(M),yt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(mt)),Array.isArray(yt)){let Et=pt.groups;for(let Ot=0,At=Et.length;Ot<At;Ot++){let Pt=Et[Ot],de=yt[Pt.materialIndex];de&&de.visible&&_.push(M,pt,de,F,Lt.z,Pt)}}else yt.visible&&_.push(M,pt,yt,F,Lt.z,null)}}let ct=M.children;for(let pt=0,yt=ct.length;pt<yt;pt++)xn(ct[pt],U,F,B)}function Al(M,U,F,B){let N=M.opaque,ct=M.transmissive,pt=M.transparent;p.setupLightsView(F),$===!0&&Nt.setGlobalState(v.clippingPlanes,F),ct.length>0&&gu(N,ct,U,F),B&&dt.viewport(b.copy(B)),N.length>0&&nr(N,U,F),ct.length>0&&nr(ct,U,F),pt.length>0&&nr(pt,U,F),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function gu(M,U,F,B){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let ct=Tt.isWebGL2;gt===null&&(gt=new Nn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")?Ts:$n,minFilter:ws,samples:ct?4:0})),v.getDrawingBufferSize(Ct),ct?gt.setSize(Ct.x,Ct.y):gt.setSize(Dr(Ct.x),Dr(Ct.y));let pt=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(V),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear();let yt=v.toneMapping;v.toneMapping=Yn,nr(M,F,B),S.updateMultisampleRenderTarget(gt),S.updateRenderTargetMipmap(gt);let Et=!1;for(let Ot=0,At=U.length;Ot<At;Ot++){let Pt=U[Ot],de=Pt.object,We=Pt.geometry,Se=Pt.material,En=Pt.group;if(Se.side===In&&de.layers.test(B.layers)){let le=Se.side;Se.side=Le,Se.needsUpdate=!0,Rl(de,F,B,We,Se,En),Se.side=le,Se.needsUpdate=!0,Et=!0}}Et===!0&&(S.updateMultisampleRenderTarget(gt),S.updateRenderTargetMipmap(gt)),v.setRenderTarget(pt),v.setClearColor(V,R),v.toneMapping=yt}function nr(M,U,F){let B=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ct=M.length;N<ct;N++){let pt=M[N],yt=pt.object,Et=pt.geometry,Ot=B===null?pt.material:B,At=pt.group;yt.layers.test(F.layers)&&Rl(yt,U,F,Et,Ot,At)}}function Rl(M,U,F,B,N,ct){M.onBeforeRender(v,U,F,B,N,ct),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,U,F,B,M,ct),N.transparent===!0&&N.side===In&&N.forceSinglePass===!1?(N.side=Le,N.needsUpdate=!0,v.renderBufferDirect(F,U,B,N,M,ct),N.side=Zn,N.needsUpdate=!0,v.renderBufferDirect(F,U,B,N,M,ct),N.side=In):v.renderBufferDirect(F,U,B,N,M,ct),M.onAfterRender(v,U,F,B,N,ct)}function ir(M,U,F){U.isScene!==!0&&(U=St);let B=Dt.get(M),N=p.state.lights,ct=p.state.shadowsArray,pt=N.state.version,yt=ft.getParameters(M,N.state,ct,U,F),Et=ft.getProgramCacheKey(yt),Ot=B.programs;B.environment=M.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(M.isMeshStandardMaterial?O:x).get(M.envMap||B.environment),Ot===void 0&&(M.addEventListener("dispose",rt),Ot=new Map,B.programs=Ot);let At=Ot.get(Et);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===pt)return Pl(M,yt),At}else yt.uniforms=ft.getUniforms(M),M.onBuild(F,yt,v),M.onBeforeCompile(yt,v),At=ft.acquireProgram(yt,Et),Ot.set(Et,At),B.uniforms=yt.uniforms;let Pt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=Nt.uniform),Pl(M,yt),B.needsLights=vu(M),B.lightsStateVersion=pt,B.needsLights&&(Pt.ambientLightColor.value=N.state.ambient,Pt.lightProbe.value=N.state.probe,Pt.directionalLights.value=N.state.directional,Pt.directionalLightShadows.value=N.state.directionalShadow,Pt.spotLights.value=N.state.spot,Pt.spotLightShadows.value=N.state.spotShadow,Pt.rectAreaLights.value=N.state.rectArea,Pt.ltc_1.value=N.state.rectAreaLTC1,Pt.ltc_2.value=N.state.rectAreaLTC2,Pt.pointLights.value=N.state.point,Pt.pointLightShadows.value=N.state.pointShadow,Pt.hemisphereLights.value=N.state.hemi,Pt.directionalShadowMap.value=N.state.directionalShadowMap,Pt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Pt.spotShadowMap.value=N.state.spotShadowMap,Pt.spotLightMatrix.value=N.state.spotLightMatrix,Pt.spotLightMap.value=N.state.spotLightMap,Pt.pointShadowMap.value=N.state.pointShadowMap,Pt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function Cl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Ji.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Pl(M,U){let F=Dt.get(M);F.outputColorSpace=U.outputColorSpace,F.batching=U.batching,F.instancing=U.instancing,F.instancingColor=U.instancingColor,F.skinning=U.skinning,F.morphTargets=U.morphTargets,F.morphNormals=U.morphNormals,F.morphColors=U.morphColors,F.morphTargetsCount=U.morphTargetsCount,F.numClippingPlanes=U.numClippingPlanes,F.numIntersection=U.numClipIntersection,F.vertexAlphas=U.vertexAlphas,F.vertexTangents=U.vertexTangents,F.toneMapping=U.toneMapping}function _u(M,U,F,B,N){U.isScene!==!0&&(U=St),S.resetTextureUnits();let ct=U.fog,pt=B.isMeshStandardMaterial?U.environment:null,yt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Dn,Et=(B.isMeshStandardMaterial?O:x).get(B.envMap||pt),Ot=B.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,At=!!F.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pt=!!F.morphAttributes.position,de=!!F.morphAttributes.normal,We=!!F.morphAttributes.color,Se=Yn;B.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Se=v.toneMapping);let En=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=En!==void 0?En.length:0,zt=Dt.get(B),ya=p.state.lights;if($===!0&&(lt===!0||M!==y)){let Je=M===y&&B.id===X;Nt.setState(B,M,Je)}let ue=!1;B.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==ya.state.version||zt.outputColorSpace!==yt||N.isBatchedMesh&&zt.batching===!1||!N.isBatchedMesh&&zt.batching===!0||N.isInstancedMesh&&zt.instancing===!1||!N.isInstancedMesh&&zt.instancing===!0||N.isSkinnedMesh&&zt.skinning===!1||!N.isSkinnedMesh&&zt.skinning===!0||N.isInstancedMesh&&zt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&zt.instancingColor===!1&&N.instanceColor!==null||zt.envMap!==Et||B.fog===!0&&zt.fog!==ct||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Nt.numPlanes||zt.numIntersection!==Nt.numIntersection)||zt.vertexAlphas!==Ot||zt.vertexTangents!==At||zt.morphTargets!==Pt||zt.morphNormals!==de||zt.morphColors!==We||zt.toneMapping!==Se||Tt.isWebGL2===!0&&zt.morphTargetsCount!==le)&&(ue=!0):(ue=!0,zt.__version=B.version);let si=zt.currentProgram;ue===!0&&(si=ir(B,U,N));let Ll=!1,ms=!1,Ma=!1,Te=si.getUniforms(),ri=zt.uniforms;if(dt.useProgram(si.program)&&(Ll=!0,ms=!0,Ma=!0),B.id!==X&&(X=B.id,ms=!0),Ll||y!==M){Te.setValue(D,"projectionMatrix",M.projectionMatrix),Te.setValue(D,"viewMatrix",M.matrixWorldInverse);let Je=Te.map.cameraPosition;Je!==void 0&&Je.setValue(D,Lt.setFromMatrixPosition(M.matrixWorld)),Tt.logarithmicDepthBuffer&&Te.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Te.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,ms=!0,Ma=!0)}if(N.isSkinnedMesh){Te.setOptional(D,N,"bindMatrix"),Te.setOptional(D,N,"bindMatrixInverse");let Je=N.skeleton;Je&&(Tt.floatVertexTextures?(Je.boneTexture===null&&Je.computeBoneTexture(),Te.setValue(D,"boneTexture",Je.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Te.setOptional(D,N,"batchingTexture"),Te.setValue(D,"batchingTexture",N._matricesTexture,S));let Sa=F.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&Tt.isWebGL2===!0)&&Ht.update(N,F,si),(ms||zt.receiveShadow!==N.receiveShadow)&&(zt.receiveShadow=N.receiveShadow,Te.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(ri.envMap.value=Et,ri.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),ms&&(Te.setValue(D,"toneMappingExposure",v.toneMappingExposure),zt.needsLights&&xu(ri,Ma),ct&&B.fog===!0&&at.refreshFogUniforms(ri,ct),at.refreshMaterialUniforms(ri,B,Y,H,gt),Ji.upload(D,Cl(zt),ri,S)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ji.upload(D,Cl(zt),ri,S),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Te.setValue(D,"center",N.center),Te.setValue(D,"modelViewMatrix",N.modelViewMatrix),Te.setValue(D,"normalMatrix",N.normalMatrix),Te.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let Je=B.uniformsGroups;for(let ba=0,yu=Je.length;ba<yu;ba++)if(Tt.isWebGL2){let Il=Je[ba];Zt.update(Il,si),Zt.bind(Il,si)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return si}function xu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function vu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,U,F){Dt.get(M.texture).__webglTexture=U,Dt.get(M.depthTexture).__webglTexture=F;let B=Dt.get(M);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=F===void 0,B.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,U){let F=Dt.get(M);F.__webglFramebuffer=U,F.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,F=0){T=M,P=U,A=F;let B=!0,N=null,ct=!1,pt=!1;if(M){let Et=Dt.get(M);Et.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):Et.__webglFramebuffer===void 0?S.setupRenderTarget(M):Et.__hasExternalTextures&&S.rebindTextures(M,Dt.get(M.texture).__webglTexture,Dt.get(M.depthTexture).__webglTexture);let Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(pt=!0);let At=Dt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(At[U])?N=At[U][F]:N=At[U],ct=!0):Tt.isWebGL2&&M.samples>0&&S.useMultisampledRTT(M)===!1?N=Dt.get(M).__webglMultisampledFramebuffer:Array.isArray(At)?N=At[F]:N=At,b.copy(M.viewport),z.copy(M.scissor),q=M.scissorTest}else b.copy(Z).multiplyScalar(Y).floor(),z.copy(Q).multiplyScalar(Y).floor(),q=ot;if(dt.bindFramebuffer(D.FRAMEBUFFER,N)&&Tt.drawBuffers&&B&&dt.drawBuffers(M,N),dt.viewport(b),dt.scissor(z),dt.setScissorTest(q),ct){let Et=Dt.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Et.__webglTexture,F)}else if(pt){let Et=Dt.get(M.texture),Ot=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,F||0,Ot)}X=-1},this.readRenderTargetPixels=function(M,U,F,B,N,ct,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=Dt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(yt=yt[pt]),yt){dt.bindFramebuffer(D.FRAMEBUFFER,yt);try{let Et=M.texture,Ot=Et.format,At=Et.type;if(Ot!==dn&&ut.convert(Ot)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Pt=At===Ts&&(xt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&xt.has("EXT_color_buffer_float"));if(At!==$n&&ut.convert(At)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(At===Xn&&(Tt.isWebGL2||xt.has("OES_texture_float")||xt.has("WEBGL_color_buffer_float")))&&!Pt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-B&&F>=0&&F<=M.height-N&&D.readPixels(U,F,B,N,ut.convert(Ot),ut.convert(At),ct)}finally{let Et=T!==null?Dt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(M,U,F=0){let B=Math.pow(2,-F),N=Math.floor(U.image.width*B),ct=Math.floor(U.image.height*B);S.setTexture2D(U,0),D.copyTexSubImage2D(D.TEXTURE_2D,F,0,0,M.x,M.y,N,ct),dt.unbindTexture()},this.copyTextureToTexture=function(M,U,F,B=0){let N=U.image.width,ct=U.image.height,pt=ut.convert(F.format),yt=ut.convert(F.type);S.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment),U.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,M.x,M.y,N,ct,pt,yt,U.image.data):U.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,M.x,M.y,U.mipmaps[0].width,U.mipmaps[0].height,pt,U.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,M.x,M.y,pt,yt,U.image),B===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,F,B,N=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ct=M.max.x-M.min.x+1,pt=M.max.y-M.min.y+1,yt=M.max.z-M.min.z+1,Et=ut.convert(B.format),Ot=ut.convert(B.type),At;if(B.isData3DTexture)S.setTexture3D(B,0),At=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)S.setTexture2DArray(B,0),At=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let Pt=D.getParameter(D.UNPACK_ROW_LENGTH),de=D.getParameter(D.UNPACK_IMAGE_HEIGHT),We=D.getParameter(D.UNPACK_SKIP_PIXELS),Se=D.getParameter(D.UNPACK_SKIP_ROWS),En=D.getParameter(D.UNPACK_SKIP_IMAGES),le=F.isCompressedTexture?F.mipmaps[N]:F.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,le.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,M.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,M.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?D.texSubImage3D(At,N,U.x,U.y,U.z,ct,pt,yt,Et,Ot,le.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(At,N,U.x,U.y,U.z,ct,pt,yt,Et,le.data)):D.texSubImage3D(At,N,U.x,U.y,U.z,ct,pt,yt,Et,Ot,le),D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,de),D.pixelStorei(D.UNPACK_SKIP_PIXELS,We),D.pixelStorei(D.UNPACK_SKIP_ROWS,Se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,En),N===0&&B.generateMipmaps&&D.generateMipmap(At),dt.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?S.setTextureCube(M,0):M.isData3DTexture?S.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?S.setTexture2DArray(M,0):S.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){P=0,A=0,T=null,dt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Vo?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===ta?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===pe?mi:gh}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===mi?pe:Dn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Eo=class extends Ls{};Eo.prototype.isWebGL1Renderer=!0;var Yr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},is=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Is=class extends en{constructor(t,e,i,s,r,o,a,l,c){super(t,e,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $r=class n extends pn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new I,h=new Ft;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let m=i+d/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(a,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Us=class n extends pn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],m=[],g=0,_=[],p=i/2,u=0;E(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(f,3)),this.setAttribute("uv",new ce(m,2));function E(){let w=new I,P=new I,A=0,T=(e-t)/i;for(let X=0;X<=r;X++){let y=[],b=X/r,z=b*(e-t)+t;for(let q=0;q<=s;q++){let V=q/s,R=V*l+a,L=Math.sin(R),H=Math.cos(R);P.x=z*L,P.y=-b*i+p,P.z=z*H,d.push(P.x,P.y,P.z),w.set(L,T,H).normalize(),f.push(w.x,w.y,w.z),m.push(V,1-b),y.push(g++)}_.push(y)}for(let X=0;X<s;X++)for(let y=0;y<r;y++){let b=_[y][X],z=_[y+1][X],q=_[y+1][X+1],V=_[y][X+1];h.push(b,z,V),h.push(z,q,V),A+=6}c.addGroup(u,A,0),u+=A}function v(w){let P=g,A=new Ft,T=new I,X=0,y=w===!0?t:e,b=w===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,p*b,0),f.push(0,b,0),m.push(.5,.5),g++;let z=g;for(let q=0;q<=s;q++){let R=q/s*l+a,L=Math.cos(R),H=Math.sin(R);T.x=y*H,T.y=p*b,T.z=y*L,d.push(T.x,T.y,T.z),f.push(0,b,0),A.x=L*.5+.5,A.y=H*.5*b+.5,m.push(A.x,A.y),g++}for(let q=0;q<s;q++){let V=P+q,R=z+q;w===!0?h.push(R,R+1,V):h.push(R+1,R,V),X+=3}c.addGroup(u,X,w===!0?1:2),u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ds=class n extends pn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new I,f=new I,m=[],g=[],_=[],p=[];for(let u=0;u<=i;u++){let E=[],v=u/i,w=0;u===0&&o===0?w=.5/e:u===i&&l===Math.PI&&(w=-.5/e);for(let P=0;P<=e;P++){let A=P/e;d.x=-t*Math.cos(s+A*r)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(A+w,1-v),E.push(c++)}h.push(E)}for(let u=0;u<i;u++)for(let E=0;E<e;E++){let v=h[u][E+1],w=h[u][E],P=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&m.push(v,w,A),(u!==i-1||l<Math.PI)&&m.push(w,P,A)}this.setIndex(m),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(_,3)),this.setAttribute("uv",new ce(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ns=class n extends pn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new I,d=new I,f=new I;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){let _=g/s*r,p=m/i*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){let _=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,E=(s+1)*m+g;o.push(_,p,E),o.push(p,u,E)}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(l,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var yn=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_h,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Mn=class extends yn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Tr(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function w0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ss=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},wo=class extends ss{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case dc:r=t,a=2*e-i;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case dc:o=t,l=2*i-e;break;case fc:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),_=g*g,p=_*g,u=-f*p+2*f*_-f*g,E=(1+f)*p+(-1.5-2*f)*_+(-.5+f)*g+1,v=(-1-m)*p+(1.5+m)*_+.5*g,w=m*p-m*_;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+E*o[c+P]+v*o[l+P]+w*o[d+P];return r}},To=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},Ao=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Tr(e,this.TimeBufferType),this.values=Tr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Tr(t.times,Array),values:Tr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ao(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new To(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Rr:e=this.InterpolantFactoryMethodDiscrete;break;case Cr:e=this.InterpolantFactoryMethodLinear;break;case Pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rr;case this.InterpolantFactoryMethodLinear:return Cr;case this.InterpolantFactoryMethodSmooth:return Pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&w0(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(s)l=!0;else{let d=a*i,f=d-i,m=d+i;for(let g=0;g!==i;++g){let _=e[d+g];if(_!==e[f+g]||_!==e[m+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,f=o*i;for(let m=0;m!==i;++m)e[f+m]=e[d+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=Cr;var xi=class extends mn{};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Rr;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ro=class extends mn{};Ro.prototype.ValueTypeName="color";var Co=class extends mn{};Co.prototype.ValueTypeName="number";var Po=class extends ss{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),c=t*a;for(let h=c+a;c!==h;c+=4)Kn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Os=class extends mn{InterpolantFactoryMethodLinear(t){return new Po(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.DefaultInterpolation=Cr;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends mn{};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=Rr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Lo=class extends mn{};Lo.prototype.ValueTypeName="vector";var Io=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},T0=new Io,Uo=class{constructor(t){this.manager=t!==void 0?t:T0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fs=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Zr=class extends Fs{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qa=new _e,eh=new I,nh=new I,Jr=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;eh.setFromMatrixPosition(t.matrixWorld),e.position.copy(eh),nh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nh),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ih=new _e,ys=new I,to=new I,Do=class extends Jr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),i.position.copy(ys),to.copy(i.position),to.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(to),i.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),ih.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ih)}},yi=class extends Fs{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Do}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},No=class extends Jr{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mi=class extends Fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new No}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=sh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function sh(){return(typeof performance>"u"?Date:performance).now()}var Xo="\\[\\]\\.:\\/",A0=new RegExp("["+Xo+"]","g"),qo="[^"+Xo+"]",R0="[^"+Xo.replace("\\.","")+"]",C0=/((?:WC+[\/:])*)/.source.replace("WC",qo),P0=/(WCOD+)?/.source.replace("WCOD",R0),L0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qo),I0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qo),U0=new RegExp("^"+C0+P0+L0+I0+"$"),D0=["material","materials","bones","map"],Oo=class{constructor(t,e,i){let s=i||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},se=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(A0,"")}static parseTrackName(t){let e=U0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);D0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=Oo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var u_=new Float32Array(1);var jr=class{constructor(t,e,i=0,s=1/0){this.ray=new zr(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Cs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Fo(t,this,i,e),i.sort(rh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Fo(t[s],this,i,e);return i.sort(rh),i}};function rh(n,t){return n.distance-t.distance}function Fo(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){let s=n.children;for(let r=0,o=s.length;r<o;r++)Fo(s[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);var na=class extends is{constructor(t=null){super();let e=new On;e.deleteAttribute("uv");let i=new yn({side:Le}),s=new yn,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new yi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new qt(e,i);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let l=new qt(e,s);l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),this.add(l);let c=new qt(e,s);c.position.set(-5.607,-.754,-.758),c.rotation.set(0,.994,0),c.scale.set(1.97,1.534,3.955),this.add(c);let h=new qt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let d=new qt(e,s);d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),this.add(d);let f=new qt(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let m=new qt(e,s);m.position.set(-2.193,-.369,-5.547),m.rotation.set(0,.516,0),m.scale.set(3.875,3.487,2.986),this.add(m);let g=new qt(e,os(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let _=new qt(e,os(50));_.position.set(-16.109,18.021,-8.207),_.scale.set(.1,2.425,2.751),this.add(_);let p=new qt(e,os(17));p.position.set(14.904,12.198,-1.832),p.scale.set(.15,4.265,6.331),this.add(p);let u=new qt(e,os(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let E=new qt(e,os(20));E.position.set(3.235,11.486,-12.541),E.scale.set(2.5,2,.1),this.add(E);let v=new qt(e,os(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function os(n){let t=new jn;return t.color.setScalar(n),t}var zs=new I;function nn(n,t,e,i,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;zs.copy(t),zs[i]=0,zs.normalize();let c=.5*o/(o+a),h=1-zs.angleTo(n)/l;return Math.sign(zs[e])===1?h*c:a/(o+a)+c+c*(1-h)}var ls=class extends On{constructor(t=1,e=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let a=new I,l=new I,c=new I(t,e,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=h.length/6,g=new I,_=.5/s;for(let p=0,u=0;p<h.length;p+=3,u+=2)switch(a.fromArray(h,p),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[p+0]=c.x*Math.sign(a.x)+l.x*r,h[p+1]=c.y*Math.sign(a.y)+l.y*r,h[p+2]=c.z*Math.sign(a.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/m)){case 0:g.set(1,0,0),f[u+0]=nn(g,l,"z","y",r,i),f[u+1]=1-nn(g,l,"y","z",r,e);break;case 1:g.set(-1,0,0),f[u+0]=1-nn(g,l,"z","y",r,i),f[u+1]=1-nn(g,l,"y","z",r,e);break;case 2:g.set(0,1,0),f[u+0]=1-nn(g,l,"x","z",r,t),f[u+1]=nn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),f[u+0]=1-nn(g,l,"x","z",r,t),f[u+1]=1-nn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),f[u+0]=1-nn(g,l,"x","y",r,t),f[u+1]=1-nn(g,l,"y","x",r,e);break;case 5:g.set(0,0,-1),f[u+0]=nn(g,l,"x","y",r,t),f[u+1]=1-nn(g,l,"y","x",r,e);break}}};var Jo=/lite/.test(location.search)||Math.min(screen.width,screen.height)<560,gn=Math.PI*2,ie=Math.PI,sn=(n,t)=>n+Math.random()*(t-n),Rh=n=>n*n*(3-2*n),bi=Bs.clamp,sl=document.getElementById("scene"),on=new Ls({canvas:sl,antialias:!0,alpha:!0,powerPreference:"high-performance"});on.setClearColor(0,0);on.setPixelRatio(Math.min(window.devicePixelRatio,Jo?1.25:1.5));on.toneMapping=ko;on.toneMappingExposure=1;on.shadowMap.enabled=!0;on.shadowMap.type=zo;var Uh=on.capabilities.getMaxAnisotropy(),Ge=new is;Ge.fog=new Yr(269369,4.5,12);var O0=new ns(on);Ge.environment=O0.fromScene(new na(on),.04).texture;var Ye=new Pe(30,1,.1,60);Ye.position.set(0,1.35,4.4);var Yo=new I(0,1.3,0);Ge.add(new Zr(12178687,662064,.7));var ni=new Mi(16774890,2);ni.position.set(1.6,3.4,3.2);ni.castShadow=!0;ni.shadow.mapSize.set(Jo?512:1024,Jo?512:1024);Object.assign(ni.shadow.camera,{left:-1.2,right:1.2,top:2.6,bottom:0,near:.5,far:10});ni.shadow.bias=-4e-4;ni.shadow.normalBias=.02;ni.shadow.radius=5;Ge.add(ni);var Dh=new Mi(11126527,.7);Dh.position.set(-3,1.8,2.4);Ge.add(Dh);var Nh=new Mi(5219327,2.2);Nh.position.set(-2.4,2.8,-2.6);Ge.add(Nh);var Oh=new Mi(2864755,1.4);Oh.position.set(2.6,2.2,-2.4);Ge.add(Oh);function F0(n,t,e,i=!0){let s=document.createElement("canvas");s.width=n,s.height=t,e(s.getContext("2d"),n,t);let r=new Is(s);return i&&(r.colorSpace=pe),r.anisotropy=Uh,r}var Gs=.42,aa=new qt(new es(60,60),new yn({color:401213,roughness:1}));aa.rotation.x=-ie/2;aa.position.y=Gs;aa.receiveShadow=!0;Ge.add(aa);var rl=new qt(new Us(.62,.66,.035,96),new Mn({color:735334,roughness:.3,metalness:.35,clearcoat:.6}));rl.position.y=Gs+.0175;rl.receiveShadow=!0;Ge.add(rl);var Fh=(n,t)=>new yn({color:n,emissive:n,emissiveIntensity:t,roughness:.4}),al=new qt(new Ns(.64,.007,8,160),Fh(2864755,2.2));al.rotation.x=ie/2;al.position.y=Gs+.036;Ge.add(al);var ol=new qt(new Ns(.4,.004,6,140),Fh(16760153,1.6));ol.rotation.x=ie/2;ol.position.y=Gs+.037;Ge.add(ol);var Hs=new qt(new $r(.45,48),new jn({transparent:!0,depthWrite:!1,map:F0(128,128,(n,t)=>{let e=n.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.addColorStop(0,"rgba(0,0,0,0.6)"),e.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=e,n.fillRect(0,0,t,t)})}));Hs.rotation.x=-ie/2;Hs.position.y=Gs+.037;Ge.add(Hs);var an={greenTop:new Rt("#25b85a"),tealBottom:new Rt("#0e94ad"),yellow:15639067,screen:"#18263a",eye:"#dff3d6",smile:"#f5a623"},Ei=new fn;Ge.add(Ei);var Bh=1.36,Ve=new fn;Ve.position.y=Bh;Ei.add(Ve);var wi=(n,t,e,i=!0)=>{let s=new qt(n,t);return s.castShadow=i,s.receiveShadow=!0,e.add(s),s},ll=1,oa=.86,zh=.72,Ko=new ls(ll,oa,zh,6,.27);{let n=Ko.attributes.position,t=[],e=new Rt;for(let i=0;i<n.count;i++){let s=bi((n.getY(i)/oa+.5)*.85+-n.getX(i)/ll*.15+.05,0,1);e.copy(an.tealBottom).lerp(an.greenTop,s),t.push(e.r,e.g,e.b)}Ko.setAttribute("color",new ce(t,3))}var B0=new Mn({vertexColors:!0,roughness:.5,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.45}),x_=wi(Ko,B0,Ve),cl=.76,hl=.5,hs=document.createElement("canvas");hs.width=512;hs.height=Math.round(512*hl/cl);var z0=hs.getContext("2d"),Vs=new Is(hs);Vs.colorSpace=pe;Vs.anisotropy=Uh;var kh=new es(cl,hl,24,8);{let n=kh.attributes.position;for(let t=0;t<n.count;t++)n.setZ(t,-.012*(n.getX(t)/(cl/2))**2-.004*(n.getY(t)/(hl/2))**2)}var k0=new Mn({map:Vs,emissiveMap:Vs,emissive:16777215,emissiveIntensity:1.25,roughness:.35,clearcoat:.4,clearcoatRoughness:.2,envMapIntensity:.12,transparent:!0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),H0=wi(kh,k0,Ve,!1);H0.position.set(0,.02,zh/2+.022);var Hh=new Mn({color:an.yellow,roughness:.45,clearcoat:.6,emissive:an.yellow,emissiveIntensity:.05});for(let n of[-1,1]){let t=wi(new Ds(.13,32,20),Hh,Ve);t.scale.set(.55,1,1),t.position.set(n*(ll/2+.01),-.03,0)}var us=new fn;us.position.y=oa/2-.02;Ve.add(us);var V0=new Mn({color:an.yellow,roughness:.35,clearcoat:.6});wi(new Us(.022,.03,.2,16),V0,us).position.y=.1;var ia=new Mn({color:an.yellow,roughness:.25,clearcoat:1,emissive:an.yellow,emissiveIntensity:.15}),Vh=wi(new Ds(.075,32,20),ia,us);Vh.position.y=.24;var Gh=new yi(16760153,0,.8,2);Vh.add(Gh);var Ws=new fn;Ws.position.y=Bh-oa/2-.12;Ei.add(Ws);wi(new ls(.46,.15,.34,4,.06),new Mn({color:2790304,roughness:.4,clearcoat:.5}),Ws);var Wh=new yn({color:8315023,emissive:2864755,emissiveIntensity:1.2});wi(new ls(.24,.026,.02,2,.01),Wh,Ws,!1).position.set(0,0,.17);var Xh=new yi(12580297,.25,.8,2);Xh.position.set(0,0,.5);Ve.add(Xh);var ge={blink:0,gx:0,gy:0,open:0,round:0,moodK:{happy:1,surprised:0,think:0,sad:0,listen:0}},Ch="";function G0(){let n=z0,t=hs.width,e=hs.height,i=ge.moodK,s=ge,r=[s.blink,s.gx,s.gy,s.open,s.round,i.happy,i.surprised,i.think,i.sad,i.listen].map(p=>Math.round(p*60)).join();if(r===Ch)return;Ch=r,n.clearRect(0,0,t,e),n.save(),n.beginPath(),n.roundRect(4,4,t-8,e-8,92),n.clip();let o=n.createRadialGradient(t*.5,e*.42,10,t*.5,e*.5,t*.6);o.addColorStop(0,"#22344b"),o.addColorStop(1,an.screen),n.fillStyle=o,n.fillRect(0,0,t,e);let a=e*.42+s.gy*10-i.surprised*6+i.sad*6,l=46+i.surprised*8+i.listen*4-i.think*4;for(let p of[-1,1]){let u=t/2+p*82+s.gx*16;n.save(),n.translate(u,a);let E=Math.max(.08,1-s.blink)*(1-i.happy*.06);n.scale(1,E*(1.08-i.think*(p>0?.35:.05))),n.shadowColor="rgba(190,245,200,0.9)",n.shadowBlur=26,n.fillStyle=an.eye,n.beginPath(),n.ellipse(0,0,l*.92,l,0,0,gn),n.fill(),n.shadowBlur=0,n.fillStyle="rgba(255,255,255,0.85)",n.beginPath(),n.ellipse(-l*.3+s.gx*5,-l*.35+s.gy*4,l*.2,l*.16,-.4,0,gn),n.fill(),n.restore();let v=i.sad*.4*-p+i.think*(p>0?.25:0);i.sad+i.think>.05&&(n.save(),n.translate(u,a-l*(1.25-i.sad*.35)),n.rotate(v),n.fillStyle=an.screen,n.fillRect(-l*1.5,-l,l*3,l*(.9+i.sad*.3)),n.restore()),i.happy>.3&&(n.fillStyle=`rgba(255,140,120,${.18*i.happy})`,n.beginPath(),n.ellipse(u+p*30,a+l+18,26,12,0,0,gn),n.fill())}let c=s.open,h=s.round,d=t/2+s.gx*8,f=e*.72+s.gy*5,m=.7+i.happy*.4-i.sad*1.3-i.think*.6,g=(62+i.happy*8-i.surprised*24)*(1-.4*h);if(n.save(),n.shadowColor="rgba(245,166,35,0.8)",n.shadowBlur=16,c<.08&&i.surprised<.5)n.strokeStyle=an.smile,n.lineWidth=15,n.lineCap="round",n.beginPath(),n.moveTo(d-g,f-m*8),n.quadraticCurveTo(d,f+m*40,d+g,f-m*8),n.stroke();else{let p=12+c*46+i.surprised*30;n.fillStyle=an.smile,n.beginPath(),n.moveTo(d-g,f-m*6),n.quadraticCurveTo(d,f+m*18-p*.15,d+g,f-m*6),n.quadraticCurveTo(d+g*.7,f+p*1.4,d,f+p*1.15),n.quadraticCurveTo(d-g*.7,f+p*1.4,d-g,f-m*6),n.fill(),n.shadowBlur=0,n.fillStyle="#5a2a12",n.beginPath(),n.ellipse(d,f+p*.55,g*.6,p*.45,0,0,gn),n.fill(),n.fillStyle="rgba(255,120,110,0.8)",n.beginPath(),n.ellipse(d,f+p*.82,g*.32,p*.18,0,0,gn),n.fill()}n.restore();let _=n.createLinearGradient(0,0,0,e*.5);_.addColorStop(0,"rgba(255,255,255,0.10)"),_.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=_,n.beginPath(),n.ellipse(t*.4,e*.12,t*.38,e*.16,-.12,0,gn),n.fill(),n.restore(),Vs.needsUpdate=!0}var W0=n=>({rot:[.03*Math.sin(n*.7),.08*Math.sin(n*.29),.04*Math.sin(n*.53)],pos:[.015*Math.sin(n*.4),.045*Math.sin(n*1.3),0],squash:.012*Math.sin(n*2.6)}),Qn=(n,t=1,e=.18)=>Math.abs(Math.sin(n*ie*t))*e,qh={welcome:{dur:3.4,mood:"happy",pose:(n,t)=>({rot:[-.05,.9*(1-Rh(Math.min(1,t*2.5))),.18*Math.sin(t*ie*4)*(t>.35?1:0)],pos:[0,Qn(t,2,.14),0],squash:.06*Math.sin(t*ie*4),gaze:[0,0]})},wave:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[0,0,.2*Math.sin(t*ie*4)],pos:[0,Qn(t,2,.06),0]})},waveL:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[0,0,-.2*Math.sin(t*ie*4)],pos:[0,Qn(t,2,.06),0]})},point:{dur:3,mood:"happy",pose:(n,t,e)=>e.dir==="down"?{rot:[.32,0,.08],pos:[0,-.04,.08],gaze:[0,.85]}:{rot:[.08,e.dir==="left"?-.5:.5,e.dir==="left"?.1:-.1],pos:[e.dir==="left"?-.06:.06,0,0],gaze:[e.dir==="left"?-.9:.9,.2]},params:()=>({dir:"down"})},talk:{dur:2,pose:(n,t,e)=>({rot:[e.nod*Math.sin(t*ie*2),e.turn,e.tilt*Math.sin(t*ie)],pos:[0,Qn(t,1,e.lift),0],squash:e.lift*.4*Math.sin(t*ie*2)}),params:()=>({nod:sn(.03,.09),turn:sn(-.25,.25),tilt:sn(-.14,.14),lift:sn(0,.05)})},presentR:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[.05,-.3,-.12],pos:[-.05,.03*Math.sin(t*ie),0]})},presentL:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[.05,.3,.12],pos:[.05,.03*Math.sin(t*ie),0]})},both:{dur:2,mood:"happy",pose:(n,t)=>({rot:[-.06,0,0],pos:[0,Qn(t,1,.08),0],squash:.05*Math.sin(t*gn)})},chest:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[.25*Math.sin(Math.min(1,t*1.6)*ie),0,.05],pos:[0,-.03*Math.sin(t*ie),0]})},think:{dur:3,mood:"think",pose:n=>({rot:[-.18,.2,.16+.03*Math.sin(n*2)],pos:[0,.03,0],gaze:[.6,-.8]})},nod:{dur:1.5,mood:"happy",pose:(n,t)=>({rot:[.22*Math.abs(Math.sin(t*ie*2)),0,0]})},smallNod:{dur:1.2,pose:(n,t)=>({rot:[.1*Math.sin(t*ie),0,0]})},shake:{dur:1.5,pose:(n,t)=>({rot:[.04,.32*Math.sin(t*ie*3),0]})},lookAround:{dur:3.4,pose:(n,t)=>({rot:[.03,.5*Math.sin(t*gn),.05*Math.sin(t*gn)],gaze:[.9*Math.sin(t*gn),0]})},adjust:{dur:1.6,pose:(n,t)=>({rot:[0,0,.1*Math.sin(t*ie*6)],squash:.04*Math.sin(t*ie*6)})},celebrate:{dur:2.4,mood:"happy",pose:(n,t)=>({rot:[-.1,0,0],spin:Rh(bi((t-.15)/.6,0,1)),pos:[0,Qn(t,2,.24),0],squash:.1*Math.sin(t*ie*4)})},dance:{dur:5,mood:"happy",pose:(n,t)=>({rot:[.06*Math.sin(n*7),.3*Math.sin(n*3.5),.2*Math.sin(n*7)],pos:[.08*Math.sin(n*3.5),Qn(n,2.2,.08),0],squash:.06*Math.sin(n*14)})},laugh:{dur:2,mood:"happy",pose:(n,t)=>({rot:[-.15+.04*Math.sin(n*22),0,.05],pos:[0,Qn(n,3.5,.04),0],squash:.05*Math.sin(n*22)})},surprised:{dur:1.6,mood:"surprised",pose:(n,t)=>({rot:[-.12,0,0],pos:[0,.08*Math.sin(Math.min(1,t*2)*ie),-.1],squash:.1*Math.sin(Math.min(1,t*3)*ie)})},shrug:{dur:2,mood:"sad",pose:(n,t)=>({rot:[.12,0,.22],pos:[0,-.04,0],squash:-.04})}},ye=null;function ks(n,t={}){let e=qh[n];if(!e)return;let i={...e.params?e.params():{},...t};ye={name:n,g:e,params:i,start:ei.elapsedTime,dur:t.dur??e.dur}}function X0(n){ye&&(!n||ye.name===n)&&(ye.dur=Math.min(ye.dur,ei.elapsedTime-ye.start+.45))}function jo(n,t,e){if(t===void 0)return n;if(typeof n=="number")return n+(t-n)*e;if(Array.isArray(n))return n.map((s,r)=>jo(s,t[r]??s,e));let i={};for(let s in n)i[s]=jo(n[s],t[s],e);return i}function Qo(n,t,e){if(typeof n=="number")return n+(t-n)*e;if(Array.isArray(n))return n.map((s,r)=>Qo(s,t[r],e));let i={};for(let s in n)i[s]=Qo(n[s],t[s],e);return i}var q0=(()=>{let n=new Map,t=(e,i,s)=>{for(let r of e)n.set(r,[i,s])};return t("اآأإىعحهءةa",.9,.05),t("وؤضظoqu",.45,.9),t("يئeiy",.38,0),t("مبفpbmfv",.02,.15),t("سصزشثذتدطنلركقجخغ",.32,.05),n})(),rn={text:"",cursor:0,rate:13,source:null};function Ph(n){let t=rn.text[Math.floor(n)];return t?/[\s.,،؟!:؛]/.test(t)?[.05,0]:q0.get(t.toLowerCase())||[.3,.05]:[0,0]}var Y0={idle:"happy",attract:"happy",listening:"listen",thinking:"think",speaking:"happy"},$0=["smallNod","lookAround","adjust","presentL","presentR","wave"],ei=new Kr,tl=new Ft,ti=new Ft,cs={x:0,y:0,next:1},sa={x:0,y:0,until:0},me={x:0,z:0,vx:0,vz:0,prevRx:0,prevRz:0,prevY:0},He="idle",Yh=-10,Lh=2,Si=-1,el=0,nl=5,$o="",ke=null,Zo=0;function Z0(n,t){let e=W0(t),i=Y0[He]||"happy",s=null,r=0;if(He==="listening"?(e.rot=[.06,0,.14+.02*Math.sin(t*1.8)],s=[0,.05]):He==="thinking"&&(e.rot=[-.12,.15,.08],s=[.55+.1*Math.sin(t*3),-.75]),ye){let w=t-ye.start,P=w/ye.dur;if(P>=1)ye=null;else{let A=Bs.smoothstep(w,0,.35)*(1-Bs.smoothstep(w,ye.dur-.45,ye.dur)),T=ye.g.pose(t,P,ye.params);e=jo(e,{...T,rot:T.rot&&e.rot.map((X,y)=>(T.rot[y]??0)+(y===1?0:X*.3))},A),A>.4&&ye.g.mood&&(i=ye.g.mood),T.gaze&&A>.3&&(s=T.gaze),T.spin&&(r=T.spin)}}if(He==="speaking"&&!ye&&t>el&&(Math.random()<.8&&ks("talk",{dur:sn(1.4,2.4)}),el=t+sn(2,3.8)),(He==="idle"||He==="attract")&&!ye&&t>nl){if(He==="attract")ks(Math.random()<.6?"welcome":"wave");else{let w=$0.filter(P=>P!==$o);$o=w[Math.floor(Math.random()*w.length)],ks($o)}nl=t+(He==="attract"?sn(8,12):sn(8,14))}let o,a;t<sa.until?(o=sa.x,a=sa.y):t-Yh<4?(o=tl.x,a=tl.y):(o=.3*Math.sin(t*.37),a=.1*Math.sin(t*.23));let l=1-Math.exp(-n*4);ti.x+=(o-ti.x)*l,ti.y+=(a-ti.y)*l,e.rot=[e.rot[0]-ti.y*.22,e.rot[1]+ti.x*.45,e.rot[2]],ke=ke?Qo(ke,e,1-Math.exp(-n*8)):e;let c=ge.open*.02;Ve.rotation.set(ke.rot[0]+c,ke.rot[1]+r*gn,ke.rot[2]),Ei.position.set(ke.pos[0],ke.pos[1],ke.pos[2]);let h=ke.squash+ge.open*.015;Ve.scale.set(1-h*.5,1+h,1-h*.5),Ws.rotation.set(ke.rot[0]*.3,ke.rot[1]*.5,ke.rot[2]*.4);let d=1-ke.pos[1]*1.2;Hs.scale.set(d,d,d),Hs.material.opacity=bi(d,.3,1),me.vx+=(-(Ve.rotation.x-me.prevRx)*30-(Ei.position.y-me.prevY)*18)*1,me.vz+=-(Ve.rotation.z-me.prevRz)*30,me.prevRx=Ve.rotation.x,me.prevRz=Ve.rotation.z,me.prevY=Ei.position.y,me.vx+=(-70*me.x-6*me.vx)*n,me.vz+=(-70*me.z-6*me.vz)*n,me.x+=me.vx*n,me.z+=me.vz*n,us.rotation.set(bi(me.x,-.6,.6),0,bi(me.z,-.6,.6));for(let w in ge.moodK)ge.moodK[w]+=((w===i?1:0)-ge.moodK[w])*(1-Math.exp(-n*6));Hh.emissiveIntensity=.05+ge.open*.9;let f=He==="thinking"?Math.sin(t*9)>0?1:.2:He==="listening"?.5+.3*Math.sin(t*4):.15+ge.open*.6;ia.emissiveIntensity+=(f*1.6-ia.emissiveIntensity)*(1-Math.exp(-n*12)),Gh.intensity=ia.emissiveIntensity*.4,Wh.emissiveIntensity=.8+.4*Math.sin(t*2)+ge.open,t>cs.next&&(cs.x=sn(-.15,.15),cs.y=sn(-.1,.1),cs.next=t+sn(.6,2.8));let m=s?s[0]:ti.x*1.2+cs.x,g=s?s[1]:-ti.y*1.2+cs.y,_=1-Math.exp(-n*25);ge.gx+=(bi(m,-1,1)-ge.gx)*_,ge.gy+=(bi(g,-1,1)-ge.gy)*_,t>Lh&&Si<0&&(Si=0),Si>=0&&(Si+=n,ge.blink=Math.sin(Math.min(1,Si/.14)*ie),Si>.14&&(Si=-1,ge.blink=0,Lh=t+(Math.random()<.2?.25:sn(2,5))));let p=0,u=0,E=rn.source?.();if(E)[p,u]=E;else if(He==="speaking"&&rn.text){rn.cursor=Math.min(rn.cursor+n*rn.rate,rn.text.length);let w=rn.cursor,P=w-Math.floor(w),[A,T]=Ph(w),[X,y]=Ph(w+1);p=(A+(X-A)*P)*(.85+.15*Math.sin(t*17)),u=T+(y-T)*P}let v=1-Math.exp(-n*28);ge.open+=(p-ge.open)*v,ge.round+=(u-ge.round)*v,Zo+=n,Zo>.024&&(Zo=0,G0()),Ye.position.x=ra.x+.04*Math.sin(t*.13),Ye.position.y=ra.y+.02*Math.sin(t*.17),Ye.position.z=ra.z,Ye.lookAt(Yo.x+Ye.position.x*.5,Yo.y,Yo.z)}var ra=new I(0,1.4,5),J0=1.75,K0=1.55;function j0(n,t,e){on.setSize(t,e,!1),Ye.aspect=t/e;let i=n.x+n.w/2,s=n.y+n.h/2;Ye.setViewOffset(t,e,t/2-i,e/2-s,t,e),Ye.updateProjectionMatrix();let r=Math.tan(Bs.degToRad(Ye.fov/2)),o=J0/(2*r*(n.h/e)),a=K0/(2*r*Ye.aspect*(n.w/t));ra.z=Math.max(o,a)}var Ih=new jr;function Q0(n,t){Ih.setFromCamera(new Ft(n,t),Ye);let e=Ih.intersectObject(Ei,!0)[0];if(!e)return null;for(let i=e.object;i;i=i.parent){if(i===us)return"antenna";if(i===Ve)return"head"}return"body"}var $h=null,il=!0;on.setAnimationLoop(()=>{let n=Math.min(ei.getDelta(),.05);Z0(n,ei.elapsedTime),on.render(Ge,Ye),il&&(il=!1,$h?.())});var ae={onReady(n){il?$h=n:n()},setFrame:j0,hitTest:Q0,get state(){return He},setState(n){n!==He&&(He=n,n==="speaking"&&(el=ei.elapsedTime+1.2),n==="thinking"&&!ye&&Math.random()<.6&&ks("think",{dur:2.4}),(n==="idle"||n==="attract")&&(nl=ei.elapsedTime+4),n!=="speaking"&&(rn.text=""))},play:ks,stop:X0,gestures:Object.keys(qh),setPointer(n,t){tl.set(n,t),Yh=ei.elapsedTime},lookAt(n,t,e=3){Object.assign(sa,{x:n,y:t,until:ei.elapsedTime+e})},setLipSource(n){rn.source=n},speakText(n,t=13){Object.assign(rn,{text:n,cursor:0,rate:t})},syncText(n){n>=0&&(rn.cursor=n)},canvas:sl};sl.addEventListener("webglcontextlost",n=>{n.preventDefault(),window.dispatchEvent(new CustomEvent("robot-context-lost"))});var ul="https://cdn.jsdelivr.net/npm/@elevenlabs/client@1.28.0/+esm";var Zh="اقرأ حرفياً:";function Jh({agentId:n,onState:t=()=>{},onUserText:e=()=>{},onAgentText:i=()=>{},onDisconnect:s=()=>{}}){let r=null,o="off",a=1,l=0,c=0,h=!1,d=!0,f=new Set,m=V=>{V!==o&&(o=V,t(V),f.forEach(R=>R(V)))};async function g({silent:V=!1}={}){if(r)return!0;if(!n)return!1;m("connecting");try{let{Conversation:R}=await import(ul);return r=await R.startSession({agentId:n,connectionType:"webrtc",...V?{overrides:{agent:{firstMessage:""}}}:{},onModeChange:({mode:L})=>{L==="speaking"?(clearTimeout(c),m("speaking")):m(d||h?"listening":"ready")},onMessage:({message:L,role:H,source:Y})=>{if(L)if((H||Y)==="user"){if(L.startsWith(Zh))return;e(L),m("thinking"),clearTimeout(c),c=setTimeout(()=>{o==="thinking"&&m(d?"listening":"ready")},12e3)}else i(L)},onDisconnect:()=>{r=null,h=!1,m("off"),s()},onError:L=>console.warn("ElevenLabs:",L)}),r.setMicMuted(!d),r.setVolume({volume:a}),m(d?"listening":"ready"),!0}catch(R){return console.warn("ElevenLabs voice unavailable:",R),r=null,m("off"),!1}}async function _(){clearTimeout(l),clearTimeout(c),h=!1;let V=r;r=null,m("off");try{await V?.endSession()}catch{}}function p(){return r?(h=!0,r.setMicMuted(!1),m("listening"),clearTimeout(l),l=setTimeout(u,15e3),!0):!1}function u(){!r||!h||(h=!1,clearTimeout(l),r.setMicMuted(!0),m("thinking"),clearTimeout(c),c=setTimeout(()=>{o==="thinking"&&m("ready")},12e3))}function E(V){return r?(r.sendUserMessage(V),m("thinking"),clearTimeout(c),c=setTimeout(()=>{o==="thinking"&&m(d?"listening":"ready")},12e3),!0):!1}function v(){if(!r||o!=="speaking")return null;let V=Math.min(1,r.getOutputVolume()*3.2),R=r.getOutputByteFrequencyData(),L=0;if(R){let H=0,Y=0;for(let G=2;G<12;G++)H+=R[G];for(let G=24;G<64;G++)Y+=R[G];L=Math.max(0,Math.min(.8,(H/10-Y/40)/160))*V}return[V,L]}let w=window.speechSynthesis,P=null,A=0,T=/hoda|zariyah|salma|amina|amira|laila|layla|mariam|hala|noura|sara|female|woman/i,X=/naayf|hamed|shakir|tarik|male|maged|omar/i,y=()=>{let V=(w?.getVoices()||[]).filter(L=>/^ar/i.test(L.lang)),R=L=>(/^ar[-_]SA/i.test(L.lang)?4:0)+(T.test(L.name)?3:0)-(X.test(L.name)?5:0)+(/natural|online|neural/i.test(L.name)?2:0);P=V.sort((L,H)=>R(H)-R(L))[0]||null};w&&(y(),w.addEventListener?.("voiceschanged",y));function b(V,R){let L=++A;return w?.cancel(),new Promise(H=>{let Y=()=>{L===A&&H()},G=900+V.length*72;if(!w||a===0){R.speakText(V,V.length/(G/1e3)),setTimeout(Y,G);return}let W=V.split(/(?<=[.!؟?،,])\s+/).filter(Boolean),Z=W.length,Q=setTimeout(Y,G*2.5);for(let ot of W){let k=new SpeechSynthesisUtterance(ot);k.lang=P?.lang||"ar-SA",P&&(k.voice=P),k.pitch=P&&T.test(P.name)?1.05:1.25,k.volume=a,k.onstart=()=>R.speakText(ot),k.onboundary=$=>R.syncText($.charIndex),k.onend=k.onerror=()=>{--Z<=0&&(clearTimeout(Q),Y())},w.speak(k)}})}function z(){A++,w?.cancel()}async function q(){let V={client:!1,mic:!1,agent:!1};try{await import(ul),V.client=!0}catch{}try{(await navigator.mediaDevices.getUserMedia({audio:!0})).getTracks().forEach(L=>L.stop()),V.mic=!0}catch{}return V.client&&V.mic&&(V.agent=await g(),V.agent&&await _()),V}return{get state(){return o},get connected(){return!!r},get micOn(){return d},setMic(V){d=V,r?.setMicMuted(!V),(o==="listening"||o==="ready")&&m(V?"listening":"ready")},connect:g,disconnect:_,pttStart:p,pttStop:u,sendText:E,lipSample:v,speakLocal:b,stopLocal:z,selfTest:q,speakAgent(V){return r?new Promise(R=>{let L=!1,H=W=>{f.delete(Y),clearTimeout(G),R(W)},Y=W=>{W==="speaking"?L=!0:(L||W==="off")&&H(L)},G=setTimeout(()=>H(L),6e3+V.length*120);f.add(Y),r.sendUserMessage(`${Zh} ${V}`)}):Promise.resolve(!1)},preload(){n&&import(ul).catch(()=>{})},inputLevel(){try{return r?.getInputVolume?.()??0}catch{return 0}},setVolume(V){a=V,r?.setVolume({volume:V})}}}var Ee="https://www.jazanu.edu.sa",la=[{id:"forum",icon:"✨",label:"عن الملتقى",ask:"عرّفني بملتقى التحول الرقمي 2026"},{id:"forumCorners",icon:"🧭",label:"أركان الملتقى",ask:"ما أبرز أركان وفعاليات ملتقى التحول الرقمي؟"},{id:"forumGoals",icon:"🎯",label:"أهداف الملتقى",ask:"ما أهداف ملتقى التحول الرقمي؟"},{id:"about",icon:"🏛️",label:"عن الجامعة",ask:"عرّفني بجامعة جازان باختصار"},{id:"stats",icon:"📊",label:"الجامعة في أرقام",ask:"كم عدد الطلاب وأعضاء هيئة التدريس والكليات في جامعة جازان؟"},{id:"colleges",icon:"🎓",label:"الكليات",ask:"ما هي كليات جامعة جازان؟"},{id:"admission",icon:"📝",label:"القبول",ask:"ما شروط القبول في جامعة جازان؟"},{id:"services",icon:"💻",label:"الخدمات الرقمية",ask:"ما هي الخدمات الإلكترونية في جامعة جازان؟"},{id:"rankings",icon:"🏆",label:"التصنيفات",ask:"ما تصنيف جامعة جازان؟"},{id:"contact",icon:"📞",label:"التواصل",ask:"كيف أتواصل مع جامعة جازان؟"},{id:"quiz",icon:"🎯",label:"تحدي المعرفة",quiz:!0}],Kh={about:{type:"info",icon:"🏛️",title:"جامعة جازان",lines:[["📅","أُنشئت بأمر ملكي عام 1426هـ (2005م)"],["🌱","بدأت بكليات الطب والهندسة وعلوم الحاسب وكلية المجتمع"],["✅","حاصلة على الاعتماد المؤسسي الكامل"],["🌊","المدينة الجامعية على ساحل البحر الأحمر شمال جازان"]],qr:{url:`${Ee}/en/university-history`,label:"نبذة عن الجامعة"}},stats:{type:"stats",icon:"📊",title:"الجامعة في أرقام",items:[{value:36e3,prefix:"+",label:"طالب وطالبة"},{value:2489,label:"عضو هيئة تدريس"},{value:1706,label:"موظف إداري"},{value:14,label:"كلية"}],note:"المصدر: الموقع الرسمي لجامعة جازان"},president:{type:"info",icon:"👤",title:"رئيس الجامعة",lines:[["🎓","أ.د. محمد بن حسن أبوراسين (بحسب أخبار الجامعة)"],["📅","رئيساً للجامعة منذ مايو 2024م"],["📜","دكتوراه في الإرشاد النفسي – جامعة هَل، بريطانيا"]],qr:{url:`${Ee}/en/president`,label:"صفحة رئيس الجامعة"}},vision:{type:"info",icon:"🎯",title:"الرؤية والرسالة",lines:[["👁️","الرؤية: جامعة متميزة إقليمياً بمخرجاتها التعليمية وأبحاثها المبتكرة وخدماتها المجتمعية"],["🧭","الرسالة: نعلّم ونبحث ونبتكر لنسهم في بناء مجتمع حيوي"]],chips:["المواطنة","الانتماء","المسؤولية","التميز","بناء القدرات","العمل الجماعي"],qr:{url:`${Ee}/en/university-history/vision-and-mission`,label:"الرؤية والرسالة"}},colleges:{type:"list",icon:"🎓",title:"كليات الجامعة",chips:["الطب","طب الأسنان","التمريض والعلوم الصحية","الصيدلة","الصحة العامة وطب المناطق الحارة","الهندسة وعلوم الحاسب","التصميم والعمارة","الأعمال","العلوم","التربية","الآداب والعلوم الإنسانية","الشريعة والقانون","الكلية التطبيقية","التقنية الصناعية التطبيقية ببيش","الكليات الجامعية: فرسان · الدرب · الداير · أبوعريش · صبيا","التطبيقية: العارضة · صامطة"],qr:{url:`${Ee}/en`,label:"موقع الجامعة"}},admission:{type:"steps",icon:"📝",title:"القبول في البكالوريوس",steps:["التقديم عبر بوابة القبول الموحد","شهادة ثانوية لم يمضِ عليها أكثر من 5 سنوات","اجتياز اختباري القدرات والتحصيلي","تأكيد القبول خلال المهلة واستلام البطاقة الجامعية"],bars:[["الثانوية",30],["القدرات",30],["التحصيلي",40]],barsTitle:"النسبة الموزونة الشائعة",qr:{url:`${Ee}/ar/e-services/registraionportal`,label:"بوابة القبول"}},services:{type:"tiles",icon:"💻",title:"الخدمات الرقمية",tiles:[{icon:"🎓",label:"النظام الأكاديمي",url:`${Ee}/en/e-services`},{icon:"🖥️",label:"التعلم الإلكتروني",url:`${Ee}/en/e-services`},{icon:"🧩",label:"منصة الخدمات EJUST",url:`${Ee}/en/e-services`},{icon:"✉️",label:"البريد الجامعي",url:`${Ee}/ar/stu-email`},{icon:"🔐",label:"الدخول الموحد",url:`${Ee}/ar/e-services/sso`},{icon:"💬",label:"خدمة تواصل",url:`${Ee}/ar/e-services/twasul`},{icon:"📥",label:"بوابة القبول",url:`${Ee}/ar/e-services/registraionportal`},{icon:"🤖",label:"JazanuBot",url:`${Ee}/ar/e-services/jazanubot`}],hint:"المس أي خدمة لعرض رمز QR وفتحها على جوالك"},rankings:{type:"stats",icon:"🏆",title:"التصنيفات (2023)",items:[{text:"401–500",label:"تصنيف التايمز عالمياً"},{value:7,label:"بين الجامعات السعودية (التايمز)"},{text:"91–100",label:"QS للمنطقة العربية"}],qr:{url:"https://jazanu.edu.sa/en/media-center/news/news44032405",label:"خبر التصنيفات"}},contact:{type:"info",icon:"📞",title:"التواصل مع الجامعة",lines:[["☎️","الهاتف الموحد: 0173295000"],["📠","الفاكس: 0173297003"],["🏢","برج الجامعة – الدور 17 (مكتب رئيس الجامعة)"],["🕐","استقبال المراجعين: الاثنين – الأربعاء، 1:00 ظهراً"]],qr:{url:`${Ee}/en/contactinfo`,label:"صفحة التواصل"}},campus:{type:"stats",icon:"🌊",title:"المدينة الجامعية",items:[{value:9,suffix:" مليون م²",label:"مساحة المدينة الجامعية"},{text:"البحر الأحمر",label:"على الساحل شمال جازان"}],qr:{url:`${Ee}/en/university-history`,label:"عن المدينة الجامعية"}},forum:{type:"info",icon:"✨",title:"ملتقى التحول الرقمي 2026",subtitle:"قيمة وأثر · قيمة مؤسسية... وأثر ملموس",lines:[["📅","16 – 17 نوفمبر 2026م (يومان) – النسخة الثالثة"],["📍","كلية الفنون والعلوم الإنسانية بجامعة جازان"],["🏛️","تنظمه جامعة جازان ممثلة في عمادة الموارد البشرية والتقنية"],["🤖","متسق مع عام الذكاء الاصطناعي 2026 ويستعرض المنجزات الرقمية للجامعة وأثرها"]],action:{label:"🎯 ابدأ تحدي المعرفة",quiz:!0}},forumStats:{type:"stats",icon:"📊",title:"الملتقى في أرقام",items:[{value:6500,prefix:"+",label:"زائر متوقع"},{value:30,prefix:"+",label:"فعالية مصاحبة"},{value:20,prefix:"+",label:"متحدث"},{value:10,prefix:"+",label:"جهة مشاركة"}]},forumGoals:{type:"steps",icon:"🎯",title:"أهداف الملتقى",steps:["تعزيز ثقافة التحول الرقمي وإبراز منجزاته بالجامعة","توضيح أثر المنصات والخدمات الرقمية على تجربة المستفيدين","ربط التحول الرقمي بالذكاء الاصطناعي والبيانات وذكاء الأعمال","تعزيز ثقافة الابتكار الرقمي داخل الجامعة","إبراز دور الجامعة في تمكين مجتمع منطقة جازان رقمياً","تعزيز الشراكات مع الجهات الحكومية والخاصة"]},forumCorners:{type:"tiles",icon:"🧭",title:"أبرز الأركان والفعاليات",tiles:[{icon:"🖥️",label:"المعرض الرقمي «قيمة وأثر»",info:"استعراض أبرز مؤشرات الخدمات الرقمية عبر شاشات تفاعلية"},{icon:"🤖",label:"الذكاء الاصطناعي والتقنيات الناشئة",info:"استعراض أبرز الخدمات والمنجزات في الذكاء الاصطناعي"},{icon:"💡",label:"الابتكار الرقمي",info:"المشاريع الرقمية الفائزة في المعسكر والمشاريع الطلابية"},{icon:"🤝",label:"الرعاة والشركات التقنية",info:"الحلول والمنتجات المقدمة من رعاة الملتقى"},{icon:"🌐",label:"المجتمع الرقمي",info:"أبرز المبادرات الرقمية بمجتمع منطقة جازان"},{icon:"🎤",label:"جلسات حوارية وورش عمل",info:"ورش عمل ودورات متخصصة في التحول الرقمي"}],hint:"المس أي ركن لمعرفة محتواه"},forumVenue:{type:"info",icon:"📍",title:"موقع إقامة الملتقى",subtitle:"كلية الفنون والعلوم الإنسانية",lines:[["🏢","مساحة المعرض الرقمي: أجنحة الرعاة والخدمات الرقمية"],["🎙️","القاعة الرئيسية: الجلسات الحوارية وحفل الافتتاح"],["🧑‍🏫","قاعات الورش: ورش عمل متخصصة متوازية"],["📱","مساحات تفاعلية: شاشات وأركان رقمية تفاعلية"]]},forumAudience:{type:"list",icon:"👥",title:"الفئات المستهدفة",chips:["مجتمع منطقة جازان","أعضاء هيئة التدريس والموظفون","طلبة الجامعة","الجهات الحكومية بمنطقة جازان","المختصون في التحول الرقمي","الشركات التقنية ومزودو الحلول الرقمية","رواد الأعمال والمبتكرون","المستفيدون من الخدمات الرقمية"]},forumSponsors:{type:"stats",icon:"💎",title:"فئات الرعاية",items:[{value:25e4,suffix:" ر.س",label:"الشريك الاستراتيجي"},{value:15e4,suffix:" ر.س",label:"الشريك الأساسي"},{value:1e5,suffix:" ر.س",label:"الراعي الماسي"}],note:"من المزايا: جناح في المعرض الرقمي، وإبراز الشعار في الجلسات والشاشات والحملة الإعلانية، وشهادة ودرع رعاية رسمية. للتواصل: 920066664"},forumContact:{type:"info",icon:"📞",title:"التواصل مع الملتقى",lines:[["🏛️","جامعة جازان – عمادة الموارد البشرية والتقنية"],["☎️","الهاتف: 920066664"],["✉️","البريد: dxf@jazanu.edu.sa"]],qr:{url:"mailto:dxf@jazanu.edu.sa",label:"مراسلة الملتقى"}},news:n=>({type:"facts",icon:"📰",title:"آخر الأخبار",facts:n("الأخبار",4).map(t=>t.split(" — ")[0]),qr:{url:`${Ee}/ar/media-center/news`,label:"المركز الإعلامي"}}),events:n=>({type:"facts",icon:"📅",title:"الفعاليات",facts:n("الفعاليات",4).map(t=>t.split(" — ")[0]),qr:{url:`${Ee}/ar/media-center/events`,label:"الفعاليات"}})};var dl={sources:{nca:{abbr:"NCA",title:"الحقيبة التوعوية للجهات الوطنية",url:"https://nca.gov.sa/ar/cyber-awareness/cybersecurity-awareness-toolkit/"},cisa_phish:{abbr:"CISA",title:"التعرّف على التصيّد والإبلاغ عنه",url:"https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"},cisa_mfa:{abbr:"CISA",title:"فعّل التحقق متعدد العوامل",url:"https://www.cisa.gov/secure-our-world/turn-mfa"},cisa_best:{abbr:"CISA",title:"أفضل ممارسات الأمن السيبراني الأساسية",url:"https://cisa.gov/sites/default/files/2024-12/Top-Cybersecurity-Best-Practices-Basic-Final-508.pdf"},ftc:{abbr:"FTC",title:"احمِ نفسك من رسائل التصيّد",url:"https://consumer.ftc.gov/consumer-alerts/2025/04/protect-yourself-phishing-scams"},fcc:{abbr:"FCC",title:"«سرقة الشحن» Juice Jacking ونصائح تجنّبها",url:"https://www.fcc.gov/juice-jacking-tips-to-avoid-it"},nist:{abbr:"NIST",title:"مسرد مصطلحات الأمن السيبراني",url:"https://csrc.nist.gov/glossary/term/phishing"},sdaia:{abbr:"سدايا",title:"مبادئ أخلاقيات الذكاء الاصطناعي (الإصدار 1.0)",url:"https://dgp.sdaia.gov.sa/wps/wcm/connect/4c56ed1c-1b82-447d-ac29-638f5f99c12e/ai-principles-EN.pdf?CACHEID=ROOTWORKSPACE-4c56ed1c-1b82-447d-ac29-638f5f99c12e-p3k51U9&CONVERT_TO=url&MOD=AJPERES"},govuk:{abbr:"GOV.UK",title:"قياس نجاح الخدمة الرقمية",url:"https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction"},wcag:{abbr:"W3C",title:"إرشادات إتاحة محتوى الويب WCAG 2.2",url:"https://www.w3.org/TR/WCAG22/"}},questions:[{q:"ما العلامة الأوضح على رسالة تصيّد؟",options:["استعجال وتهديد بعواقب فورية","شعار الجهة في الرسالة","أنها مكتوبة بالعربية"],answer:0,why:"الاستعجال والتهديد أبرز علامات التصيّد.",src:"cisa_phish",topic:"cyber"},{q:"رسالة مشبوهة تبدو حقيقية… ما التصرف الصحيح؟",options:["التواصل مع الجهة عبر موقعها الرسمي","الضغط على الرابط للتأكد","الاتصال بالرقم الموجود في الرسالة"],answer:0,why:"القناة الرسمية التي تعرفها هي طريق التحقق.",src:"ftc",topic:"cyber"},{q:"ما فائدة التحقق متعدد العوامل؟",options:["يحمي الحساب حتى لو سُرقت كلمة المرور","يغني عن كلمة المرور","يسرّع الاتصال بالإنترنت"],answer:0,why:"عامل إضافي يحمي حتى لو تسربت كلمة المرور.",src:"cisa_mfa",topic:"cyber"},{q:"أيّ مما يلي ليس دليلًا كافيًا على سلامة الرسالة؟",options:["خلوّها من الأخطاء الإملائية","وصولها داخل التطبيق الرسمي","أنها لا تطلب بيانات سرية"],answer:0,why:"الرسائل الاحتيالية قد تخلو من الأخطاء.",src:"cisa_phish",topic:"cyber"},{q:"أفضل طريقة لشحن الجوال في المطار؟",options:["مقبس الكهرباء مع شاحنك الخاص","منفذ USB عام","أي كيبل متاح"],answer:0,why:"الشاحن الخاص لا يتبادل البيانات.",src:"fcc",topic:"cyber"},{q:"ظهرت رسالة «الوثوق بهذا الجهاز» أثناء الشحن العام… ماذا تختار؟",options:["شحن فقط","مشاركة البيانات","الوثوق دائمًا"],answer:0,why:"«شحن فقط» يمنع نقل البيانات.",src:"fcc",topic:"cyber"},{q:"مبدأ «أقل الصلاحيات» يعني…",options:["منح المستخدم ما يحتاجه فقط لعمله","منح الجميع صلاحية المدير","إلغاء كل الصلاحيات"],answer:0,why:"امنح الصلاحيات بقدر الحاجة.",src:"nist",topic:"cyber"},{q:"أيّ مما يلي من الممارسات الأساسية للأمن السيبراني؟",options:["النسخ الاحتياطي للبيانات","تأجيل التحديثات","مشاركة كلمة المرور مع الزملاء"],answer:0,why:"النسخ الاحتياطي يحميك من فقدان البيانات.",src:"cisa_best",topic:"cyber"},{q:"أيّ مما يلي من مبادئ أخلاقيات الذكاء الاصطناعي لدى سدايا؟",options:["الشفافية والقابلية للتفسير","السرعة بأي ثمن","جمع أكبر قدر من البيانات"],answer:0,why:"الشفافية والقابلية للتفسير من مبادئ سدايا.",src:"sdaia",topic:"ai"},{q:"كم عدد مبادئ أخلاقيات الذكاء الاصطناعي في إصدار سدايا الأول؟",options:["7","3","12"],answer:0,why:"سبعة مبادئ في الإصدار الأول.",src:"sdaia",topic:"ai"},{q:"أيّ مبدأ يضمن معاملة الجميع دون تحيّز في أنظمة الذكاء الاصطناعي؟",options:["العدالة","السرعة","التسويق"],answer:0,why:"العدالة تمنع التحيّز في القرارات.",src:"sdaia",topic:"ai"},{q:"ما المؤشر الذي يقيس نسبة من أنهوا الخدمة بنجاح؟",options:["نسبة الإكمال","عدد الزيارات","عدد الصفحات"],answer:0,why:"نسبة الإكمال تقيس من أنهى الخدمة.",src:"govuk",topic:"digital"},{q:"أيّ مما يلي من المؤشرات الأربعة لنجاح الخدمة في دليل GOV.UK؟",options:["رضا المستفيد","عدد الموظفين","ألوان الواجهة"],answer:0,why:"رضا المستفيد من المؤشرات الأربعة.",src:"govuk",topic:"digital"},{q:"ماذا تعني «نسبة الاستخدام الرقمي»؟",options:["نسبة من يختار القناة الرقمية بدل غيرها","سرعة الموقع","عدد التطبيقات"],answer:0,why:"الاستخدام الرقمي: من اختار القناة الرقمية.",src:"govuk",topic:"digital"},{q:"ما المعيار الدولي لإتاحة المحتوى الرقمي لذوي الإعاقة؟",options:["WCAG","HTTP","USB"],answer:0,why:"WCAG هو معيار الإتاحة الدولي.",src:"wcag",topic:"digital"},{q:"التصيّد بحسب تعريف NIST هو…",options:["انتحال جهة موثوقة للحصول على بيانات حساسة","فيروس يبطئ الجهاز","عطل في الشبكة"],answer:0,why:"انتحال جهة موثوقة لسرقة البيانات.",src:"nist",topic:"cyber"}]};var ha=null,t_=import("./chunk-F7O6VKPP.js").then(n=>(ha=n,n)),et=n=>document.querySelector(n),we=et("#app"),Xs=new URLSearchParams(location.search),e_="agent_6001m674rt3gf7dbchmh7r82f8qa",Bn={get(n,t){try{let e=localStorage.getItem("m-"+n);return e===null?t:JSON.parse(e)}catch{return t}},set(n,t){try{localStorage.setItem("m-"+n,JSON.stringify(t))}catch{}}},Wt={rotation:Xs.has("rotate")?+Xs.get("rotate"):Bn.get("rotation",0),volume:Bn.get("volume",.9),kiosk:Xs.has("kiosk")?Xs.get("kiosk")!=="0":Bn.get("kiosk",!1),idleSecs:Bn.get("idleSecs",60)},Zs=!Xs.has("localvoice"),Js=()=>Object.entries(Wt).forEach(([n,t])=>Bn.set(n,t));function yl(){document.documentElement.classList.remove("rotation-90","rotation-180","rotation-270"),Wt.rotation&&document.documentElement.classList.add(`rotation-${Wt.rotation}`);let n=document.getElementById("rotateLabel");n&&(n.textContent=`${Wt.rotation}°`)}var ma=()=>[we.clientWidth,we.clientHeight];function tu(n,t){let[e,i]=ma();switch(Wt.rotation){case 90:return[t,innerWidth-n];case 270:return[innerHeight-t,n];case 180:return[e-n,i-t];default:return[n,t]}}var ca=()=>we.classList.contains("portrait");function Ai(){let[n,t]=ma(),e=t>=n*1.05;we.classList.toggle("portrait",e),we.classList.toggle("landscape",!e);let i=et(".dock").offsetHeight;we.style.setProperty("--dock-h",`${i}px`);let s=et(".topbar").offsetHeight+et(".options").offsetHeight;we.style.setProperty("--top-h",`${s}px`);let r;if(e)r={x:0,y:s,w:n,h:t-i-s};else{let o=n*.43;r={x:0,y:s,w:n-o,h:t-i-s}}ae.setFrame(r,n,t)}new ResizeObserver(Ai).observe(we);we.addEventListener("scroll",()=>{we.scrollTop=0,we.scrollLeft=0});addEventListener("resize",Ai);(()=>{let n=et("#bgfx");for(let t=0;t<14;t++){let e=document.createElement("i"),i=2+Math.random()*5;e.style.cssText=`--x:${Math.random()*100}%;--s:${i}cqmin;--o:${(.15+Math.random()*.3).toFixed(2)};--d:${18+Math.random()*20}s;--dl:${-Math.random()*30}s`,n.appendChild(e)}})();var jt=(()=>{let n=null,t={tap:[[660,.05]],open:[[520,.06],[780,.08]],close:[[700,.05],[460,.07]],listen:[[600,.07],[900,.1]],send:[[900,.06],[600,.08]],start:[[440,.08],[660,.08],[880,.12]],right:[[660,.08],[880,.08],[1320,.16]],wrong:[[300,.12],[220,.18]],tick:[[1200,.03]],win:[[523,.1],[659,.1],[784,.1],[1046,.25]]};return{play(e){if(Wt.volume)try{n||(n=new AudioContext);let i=n.currentTime;for(let[s,r]of t[e]||[]){let o=n.createOscillator(),a=n.createGain();o.type="sine",o.frequency.value=s,a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(.12*Wt.volume,i+.01),a.gain.exponentialRampToValueAtTime(1e-4,i+r),o.connect(a).connect(n.destination),o.start(i),o.stop(i+r+.02),i+=r*.9}}catch{}}}})(),Ze={data:Bn.get("stats",{sessions:0,seconds:0,questions:0,voice:0,quizzes:0,topics:{}}),add(n,t=1){this.data[n]=(this.data[n]||0)+t,Bn.set("stats",this.data)},topic(n){this.data.topics[n]=(this.data.topics[n]||0)+1,Bn.set("stats",this.data)},text(){let n=this.data,t=n.sessions?Math.round(n.seconds/n.sessions):0,e=Object.entries(n.topics).sort((i,s)=>s[1]-i[1]).slice(0,5).map(([i,s])=>`${la.find(r=>r.id===i)?.label||i}: ${s}`).join("، ")||"—";return`الجلسات: ${n.sessions} · متوسط مدة التفاعل: ${t} ث
الأسئلة: ${n.questions} (منها صوتية: ${n.voice}) · التحديات: ${n.quizzes}
أكثر المواضيع: ${e}`}},n_={idle:"جاهز",connecting:"يتصل...",ready:"الميكروفون متوقف",listening:"تستمع إليك",thinking:"تفكر...",speaking:"تتحدث"},jh={idle:["المس الشاشة للبدء","ثم تحدث مع المساعدة الذكية مباشرة"],connecting:["لحظة، أجهّز المحادثة...",""],listening:["تحدث الآن، المساعدة تستمع","لا حاجة للضغط على أي زر"],thinking:["المساعدة تفكر...",""],speaking:["المساعدة تتحدث","يمكنك مقاطعتها بالكلام"],ready:["الميكروفون متوقف","المس هنا لتشغيله"]},Ks="idle";function ze(n){Ks=n,et("#status").dataset.state=n==="ready"?"idle":n,et("#statusText").textContent=n_[n]||"";let t=et("#micBtn");for(let s of["listening","thinking","speaking"])t.classList.toggle(s,n===s);t.classList.toggle("muted",n==="ready"),et("#micSlash").hidden=n!=="ready";let[e,i]=jh[Yt.active?n:"idle"]||jh.idle;et("#micLabel").textContent=e,et("#micHint").textContent=i,ae.setState({thinking:"thinking",speaking:"speaking"}[n]||(Yt.active?"idle":"attract")),n==="speaking"&&bn()}var _l=0;function eu(){let n=Gt?.connected?Gt.inputLevel():0;n>.06&&(_l=performance.now()),et("#micBtn").style.setProperty("--lvl",(.3+Math.min(1,n*4)*2.2).toFixed(2)),Ks==="listening"&&ae.setState(performance.now()-_l<1200?"listening":"idle"),requestAnimationFrame(eu)}var ds=et("#caption"),fl=0,xl=0;function Ti(n,t="bot"){clearInterval(fl),clearTimeout(xl),ds.classList.toggle("user",t==="user"),ds.classList.add("show");let i=`<span class="who">${t==="user"?"أنت:":"المساعدة:"}</span>`;if(t==="user"){ds.innerHTML=`<span>${i}${$t(n)}</span>`;return}let s=n.split(/\s+/),r=0;fl=setInterval(()=>{r++,ds.innerHTML=`<span>${i}${$t(s.slice(0,r).join(" "))}</span>`,r>=s.length&&clearInterval(fl)},330)}function nu(n=2500){clearTimeout(xl),xl=setTimeout(()=>ds.classList.remove("show"),n)}var $t=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ua=et("#cardLayer");function iu(n){try{let t=window.qrcode(0,"M");return t.addData(n),t.make(),t.createSvgTag({cellSize:4,margin:1,scalable:!0})}catch{return""}}function i_(n){let t=s=>`style="--i:${s}"`,e="";n.type==="stats"?e=`<div class="stats">${n.items.map((s,r)=>`<div class="stat" ${t(r)}><strong data-count="${s.value??""}" data-prefix="${s.prefix||""}" data-suffix="${s.suffix||""}">${s.text||(s.prefix||"")+"0"}</strong><small>${$t(s.label)}</small></div>`).join("")}</div>`:n.type==="info"?e=`<ul class="lines">${n.lines.map(([s,r],o)=>`<li ${t(o)}><span>${s}</span><span>${$t(r)}</span></li>`).join("")}</ul>`:n.type==="steps"?(e=`<ol class="steps">${n.steps.map((s,r)=>`<li ${t(r)}>${$t(s)}</li>`).join("")}</ol>`,n.bars&&(e+=`<div class="bars"><h3>${$t(n.barsTitle||"")}</h3>${n.bars.map(([s,r])=>`<div class="bar"><span>${$t(s)}</span><div><i data-w="${r}"></i></div><b>${r}%</b></div>`).join("")}</div>`)):n.type==="tiles"?e=`<div class="tiles">${n.tiles.map((s,r)=>`<button type="button" class="tile" ${t(r)} ${s.url?`data-qr="${$t(s.url)}"`:`data-info="${$t(s.info||"")}"`} data-label="${$t(s.label)}"><span>${s.icon}</span>${$t(s.label)}</button>`).join("")}</div>`:n.type==="facts"&&(e=`<ul class="lines">${n.facts.map((s,r)=>`<li ${t(r)}><span>•</span><span>${$t(s)}</span></li>`).join("")}</ul>`),n.type!=="list"&&n.chips&&(e+=`<div class="chips">${n.chips.map((s,r)=>`<span ${t(r)}>${$t(s)}</span>`).join("")}</div>`),n.type==="list"&&(e=`<div class="chips">${n.chips.map((s,r)=>`<span ${t(r)}>${$t(s)}</span>`).join("")}</div>`),n.hint&&(e+=`<p class="card-hint">${$t(n.hint)}</p>`),n.note&&(e+=`<p class="card-note">${$t(n.note)}</p>`),n.action&&(e+=`<div class="card-action"><button type="button" class="btn gold" data-action="quiz">${$t(n.action.label)}</button></div>`);let i=n.qr?`<div class="card-qr"><button type="button" class="qr" data-qr="${$t(n.qr.url)}" data-label="${$t(n.qr.label)}">${iu(n.qr.url)}</button><span>📱 ${$t(n.qr.label)}</span></div>`:"";return`<article class="card"><div class="card-head"><div class="card-icon">${n.icon||"📌"}</div><h2>${$t(n.title)}${n.subtitle?`<small>${$t(n.subtitle)}</small>`:""}</h2><button type="button" class="card-close" data-action="close" aria-label="إغلاق">✕</button></div><div class="card-body"><div class="card-main">${e}</div>${i}</div></article>`}function su(n){let t=typeof n=="string"?Kh[n]:n;if(typeof t=="function"&&(t=t(ha?.factsOf||(()=>[]))),!t)return;t.type||(t={type:"facts",icon:"📌",title:t.title,facts:t.facts.slice(0,3),qr:t.src?{url:t.src,label:"المصدر"}:null}),ua.innerHTML=i_(t),jt.play("open");let e=ua.firstElementChild;requestAnimationFrame(()=>{we.style.setProperty("--card-h",ca()?`${e.offsetHeight+8}px`:"0px"),e.querySelectorAll("[data-count]").forEach(i=>{let s=+i.dataset.count;if(!s)return;let r=performance.now(),o=a=>{let l=Math.min(1,(a-r)/1400);i.textContent=i.dataset.prefix+Math.round(s*(1-(1-l)**3)).toLocaleString("en-US")+i.dataset.suffix,l<1&&requestAnimationFrame(o)};requestAnimationFrame(o)}),e.querySelectorAll("[data-w]").forEach(i=>{i.style.width=i.dataset.w+"%"})}),ae.play("point",{dir:ca()?"down":"right"}),ae.lookAt(ca()?0:.7,ca()?-.75:-.1,3)}function ga(){let n=ua.firstElementChild;we.style.setProperty("--card-h","0px"),n&&(n.classList.add("out"),setTimeout(()=>n.remove(),300))}ua.addEventListener("click",n=>{let t=n.target.closest("button");if(t){if(t.dataset.action==="close")jt.play("close"),ga();else if(t.dataset.action==="quiz")tr();else if(t.dataset.qr)s_(t.dataset.qr,t.dataset.label);else if(t.dataset.info!==void 0){jt.play("tap"),t.parentElement.querySelectorAll(".tile").forEach(i=>i.classList.toggle("on",i===t));let e=t.closest(".card").querySelector(".card-hint");e&&(e.textContent=`${t.dataset.label}: ${t.dataset.info}`),bn()}}});function s_(n,t){jt.play("open");let e=et("#qrZoom");e.innerHTML=`<div class="qr">${iu(n)}</div><b>${$t(t||"")}</b><span>امسح الرمز بكاميرا جوالك لفتح الصفحة</span><small>${$t(n.replace(/^https?:\/\//,""))}</small><span>المس الشاشة للإغلاق</span>`,e.hidden=!1}et("#qrZoom").addEventListener("click",()=>{et("#qrZoom").hidden=!0,jt.play("close")});var fs="",Gt=Jh({agentId:Zs?e_:"",onState:n=>{if(n==="off"){Yt.active&&!Vt.on&&ze("idle");return}ze(n),n==="ready"&&nu()},onUserText:n=>{bn(),Ze.add("questions"),Ze.add("voice"),Ti(n,"user"),vl(n)},onAgentText:n=>{fs=n,Ti(n,"bot")},onDisconnect:()=>{Yt.active&&!Vt.on&&!Yt.ending&&setTimeout(()=>Gt.connect({silent:!0}),800)}});Gt.setVolume(Wt.volume);ae.setLipSource(()=>Gt.lipSample());var r_={card:null,gesture:"smallNod",speak:"لحظة من فضلك، أجهّز المعلومات."};function vl(n){let t=ha?ha.answer(n):r_;return t.card?setTimeout(()=>su(t.card),400):ga(),t.gesture&&!t.card&&ae.play(t.gesture==="shrug"?"smallNod":t.gesture),t}async function js(n,t){if(n=n.trim(),!n||!Yt.active)return;if(bn(),Ze.add("questions"),t&&Ze.topic(t),Ti(n,"user"),jt.play("send"),!Gt.connected&&Zs&&!Vt.on&&await Gt.connect({silent:!0}),Gt.connected){vl(n),Gt.sendText(n);return}await t_;let e=vl(n);ze("thinking"),await new Promise(i=>setTimeout(i,500)),Ml(e.speak)}async function Ml(n){fs=n,ze("speaking"),Ti(n,"bot"),au(),await Gt.speakLocal(n,ae),Ks==="speaking"&&(nu(),Yt.active&&!Vt.on?qs():ze(Yt.active?"ready":"idle"))}var da=window.SpeechRecognition||window.webkitSpeechRecognition,$e=null,ii=!0,Sl=!1;function ru(){if(!da||$e||!Yt.active||Gt.connected||Vt.on)return!1;$e=new da,$e.lang="ar-SA",$e.continuous=!0,$e.interimResults=!0,$e.onresult=n=>{let t="",e="";for(let i=n.resultIndex;i<n.results.length;i++)n.results[i].isFinal?e+=n.results[i][0].transcript:t+=n.results[i][0].transcript;t&&(_l=performance.now(),Ti(t,"user")),e.trim()&&(Ze.add("voice"),js(e))},$e.onend=()=>{$e=null,Yt.active&&ii&&!Sl&&!Vt.on&&setTimeout(ru,300)},$e.onerror=n=>{n.error==="not-allowed"&&(ii=!1,ze("ready"))};try{return $e.start(),ze("listening"),!0}catch{return $e=null,!1}}function bl(){let n=$e;$e=null,n?.abort()}function au(){Sl=!0,bl()}function qs(){Sl=!1,!(ii&&ru())&&ze(ii&&da?"listening":"ready")}et("#micBtn").addEventListener("click",async()=>{if(!Yt.active){await ps();return}if(jt.play("tap"),Gt.connected){Gt.setMic(!Gt.micOn);return}if(!da){lu();return}ii=!ii,ii?qs():(bl(),ze("ready"))});et("#replayBtn").addEventListener("click",()=>{!Yt.active||!fs||(jt.play("tap"),Gt.connected?(Gt.sendText("من فضلك أعد إجابتك الأخيرة باختصار"),Ti("أعد الإجابة من فضلك","user")):Ml(fs))});var fa=et("#topics");fa.innerHTML=la.map(n=>`<button type="button" role="listitem" class="topic${n.quiz?" topic-quiz":""}" data-id="${n.id}">${n.icon} ${$t(n.label)}</button>`).join("");fa.addEventListener("click",async n=>{let t=n.target.closest(".topic");if(!t)return;jt.play("tap");let e=la.find(i=>i.id===t.dataset.id);if(Yt.active||await ps({quiet:!0}),e.quiz){tr();return}fa.querySelectorAll(".topic").forEach(i=>i.classList.toggle("active",i===t)),js(e.ask,e.id)});var Yt={active:!1,started:0,ending:!1,lastTouch:0};function bn(){Yt.lastTouch=Date.now()}async function ps({quiet:n=!1}={}){Yt.active||(Object.assign(Yt,{active:!0,started:Date.now(),ending:!1}),bn(),Ze.add("sessions"),jt.play("start"),et("#attract").classList.add("hide"),Wt.kiosk&&Tl(),ae.play("welcome"),ze("idle"),!(Zs&&(ze("connecting"),await Gt.connect({silent:n})))&&(ii=!0,n?qs():Ml("السلام عليكم! أنا المساعدة الذكية لجامعة جازان، حيّاك الله. تحدث معي مباشرة، أو اختر موضوعاً من الأعلى.")))}async function _a(){Yt.active&&(Yt.ending=!0,Ze.add("seconds",Math.round((Date.now()-Yt.started)/1e3)),du(!1),Qs(),bl(),Gt.stopLocal(),await Gt.disconnect(),ga(),ds.classList.remove("show"),fa.querySelectorAll(".topic").forEach(n=>n.classList.remove("active")),et("#idleWarn").hidden=!0,et("#qrZoom").hidden=!0,fs="",Object.assign(Yt,{active:!1,ending:!1}),ze("idle"),et("#attract").classList.remove("hide"),ae.setState("attract"))}et("#attract").addEventListener("pointerdown",()=>ps());et("#homeBtn").addEventListener("click",()=>{jt.play("close"),_a()});var pl=0;setInterval(()=>{if(!Yt.active||["thinking","speaking","connecting"].includes(Ks)){Yt.active&&bn();return}let n=(Date.now()-Yt.lastTouch)/1e3,t=et("#idleWarn");n>Wt.idleSecs&&(t.hidden&&(t.hidden=!1,pl=10,jt.play("tick")),et("#idleCount").textContent=pl,--pl<0&&_a())},1e3);we.addEventListener("pointerdown",n=>{bn();let[t,e]=tu(n.clientX,n.clientY),[i,s]=ma();ae.setPointer(t/i*2-1,-(e/s)*2+1),!et("#idleWarn").hidden&&!n.target.closest("#idleWarn")&&(et("#idleWarn").hidden=!0)},!0);et("#stayBtn").addEventListener("click",()=>{et("#idleWarn").hidden=!0,bn()});ae.canvas.addEventListener("click",n=>{if(!Yt.active)return;let[t,e]=tu(n.clientX,n.clientY),[i,s]=ma(),r=ae.hitTest(t/i*2-1,-(e/s)*2+1);r&&ae.play(r==="head"?"laugh":r==="antenna"?"surprised":"wave")});var a_={ar:["ض ص ث ق ف غ ع ه خ ح ج","ش س ي ب ل ا ت ن م ك ط","ذ ئ ء ؤ ر لا ى ة و ز ظ د"],en:["q w e r t y u i o p","a s d f g h j k l","z x c v b n m"]},pa="ar",_n=et("#kbdInput");function ou(){let n=a_[pa].map(t=>`<div class="vkbd-row">${t.split(" ").map(e=>`<button type="button" class="key" data-k="${e}">${e}</button>`).join("")}</div>`);n.push(`<div class="vkbd-row"><button type="button" class="key mid" data-k="lang">${pa==="ar"?"English":"عربي"}</button><button type="button" class="key mid" data-k="؟">؟</button><button type="button" class="key wide" data-k="space">مسافة</button><button type="button" class="key mid" data-k="back">⌫</button><button type="button" class="key mid send" data-k="send">إرسال</button></div>`),et("#kbdKeys").innerHTML=n.join("")}function lu(){Yt.active||ps({quiet:!0}),ou(),_n.readOnly=Wt.kiosk,_n.inputMode=Wt.kiosk?"none":"text",et("#keyboard").hidden=!1,jt.play("open"),Wt.kiosk||_n.focus({preventScroll:!0})}function Qs(){et("#keyboard").hidden=!0,_n.value=""}et("#kbdBtn").addEventListener("click",lu);et("#kbdClose").addEventListener("click",()=>{jt.play("close"),Qs()});et("#kbdKeys").addEventListener("pointerdown",n=>{let t=n.target.closest(".key");if(!t)return;n.preventDefault(),jt.play("tick");let e=t.dataset.k;if(e==="lang")pa=pa==="ar"?"en":"ar",ou();else if(e==="space")_n.value+=" ";else if(e==="back")_n.value=_n.value.slice(0,-1);else if(e==="send"){let i=_n.value;Qs(),js(i)}else _n.value+=e;bn()});_n.addEventListener("keydown",n=>{if(n.key==="Enter"){let t=_n.value;Qs(),js(t)}});var xa=5,ml=20,Vt={on:!1,list:[],i:0,score:0,timer:0,left:0,locked:!1},Sn=et("#quiz"),cu=n=>n.map(t=>[Math.random(),t]).sort((t,e)=>t[0]-e[0]).map(t=>t[1]);async function Ys(n){if(fs=n,Ti(n,"bot"),Gt.connected){await Gt.speakAgent(n);return}ze("speaking"),await Gt.speakLocal(n,ae),Vt.on&&Ks==="speaking"&&ze("ready")}async function tr(){Yt.active||await ps({quiet:!0}),Vt.micWasOn=Gt.connected?Gt.micOn:!1,Gt.connected&&Gt.setMic(!1),au(),ga(),Qs(),Ze.add("quizzes"),Ze.topic("quiz"),Object.assign(Vt,{on:!0,list:cu(dl.questions).slice(0,xa),i:0,score:0}),Sn.hidden=!1,jt.play("start"),ae.play("presentL"),await Ys("يالله نبدأ تحدي المعرفة! خمسة أسئلة، ولكل إجابة صحيحة عشر نقاط."),Vt.on&&hu()}function hu(){let n=Vt.list[Vt.i],t=cu(n.options.map((s,r)=>({t:s,right:r===n.answer})));Vt.locked=!1,Vt.left=ml,Sn.innerHTML=`<div class="quiz-top"><span>السؤال ${Vt.i+1} من ${xa}</span><b>${Vt.score} نقطة</b><button type="button" class="quiz-close" data-q="close">✕ إنهاء</button></div>
    <div class="timer" id="qTimer"><i></i></div><h2>${$t(n.q)}</h2>
    <div class="options">${t.map((s,r)=>`<button type="button" class="opt" style="--i:${r}" data-right="${s.right?1:0}"><b>${"أبج"[r]}</b>${$t(s.t)}</button>`).join("")}</div><div id="qWhy"></div>`,Ys(n.q);let e=Sn.querySelector("#qTimer i");clearInterval(Vt.timer);let i=performance.now();Vt.timer=setInterval(()=>{let s=Math.max(0,1-(performance.now()-i)/(ml*1e3));e.style.transform=`scaleX(${s})`,Sn.querySelector("#qTimer")?.classList.toggle("low",s<.25);let r=Math.ceil(s*ml);r!==Vt.left&&(Vt.left=r,r<=5&&r>0&&jt.play("tick")),s<=0&&uu(null)},100)}async function uu(n){if(Vt.locked)return;Vt.locked=!0,clearInterval(Vt.timer),bn();let t=Vt.list[Vt.i],e=n?.dataset.right==="1";Sn.querySelectorAll(".opt").forEach(s=>{s.dataset.right==="1"&&s.classList.add("right")}),n&&!e&&n.classList.add("wrong");let i=dl.sources[t.src];Sn.querySelector("#qWhy").innerHTML=`<div class="why">${e?"✅":"💡"} ${$t(t.why)}${i?`<small>📚 المصدر: ${$t(i.abbr)} – ${$t(i.title)}</small>`:""}</div>`,e?(Vt.score+=10,Sn.querySelector(".quiz-top b").textContent=`${Vt.score} نقطة`,jt.play("right"),ae.play("celebrate"),await Ys(["أحسنت! إجابة صحيحة.","ممتاز! عشر نقاط لك.","برافو عليك!"][Math.floor(Math.random()*3)])):(jt.play("wrong"),ae.play("shrug"),await Ys(n?`للأسف لا. ${t.why}`:`انتهى الوقت! ${t.why}`)),Vt.on&&(await new Promise(s=>setTimeout(s,900)),Vt.on&&(++Vt.i<xa?hu():o_()))}function o_(){let n=xa*10,t=Vt.score,e=t>=n*.8?3:t>=n*.5?2:t>0?1:0;Sn.innerHTML=`<div class="result"><div class="stars">${"⭐".repeat(e)}${"☆".repeat(3-e)}</div><div class="score">${t}</div><p>من ${n} نقطة</p>
    <div class="result-actions"><button type="button" class="btn gold" data-q="again">🔁 تحدٍّ جديد</button><button type="button" class="btn ghost" data-q="close">العودة للمساعدة</button></div></div>`,e>=2?(jt.play("win"),l_(),ae.play("dance")):ae.play("chest"),Ys(e===3?`ما شاء الله! حصلت على ${t} نقطة من ${n}. أنت بطل التحول الرقمي!`:e===2?`أحسنت! حصلت على ${t} نقطة. أداء رائع!`:`حصلت على ${t} نقطة. جرّب مرة ثانية وأكيد بتتحسن!`)}function du(n=!0){Vt.on&&(Vt.on=!1,clearInterval(Vt.timer),Sn.hidden=!0,Gt.stopLocal(),ze("ready"),n&&Yt.active&&(Gt.connected?Gt.setMic(Vt.micWasOn!==!1):Zs?Gt.connect({silent:!0}).then(t=>{t||qs()}):qs()))}Sn.addEventListener("click",n=>{let t=n.target.closest("button");t&&(t.classList.contains("opt")?uu(t):t.dataset.q==="close"?(jt.play("close"),du()):t.dataset.q==="again"&&(Vt.on=!1,tr()))});et("#quizBtn").addEventListener("click",()=>{jt.play("tap"),tr()});function l_(){let n=document.createElement("div");n.className="confetti";let t=["#2bb673","#ffbd59","#8aceff","#ffffff"];for(let e=0;e<70;e++){let i=document.createElement("i");i.style.cssText=`left:${Math.random()*100}%;background:${t[e%4]};animation-duration:${2+Math.random()*2}s;animation-delay:${Math.random()*.6}s`,n.appendChild(i)}we.appendChild(n),setTimeout(()=>n.remove(),5e3)}var El=et("#settings");function er(){et("#rotSeg").innerHTML=[0,90,180,270].map(n=>`<button type="button" data-r="${n}" class="${n===Wt.rotation?"on":""}">${n}°</button>`).join(""),et("#kioskChk").checked=Wt.kiosk,et("#idleSecs").value=Wt.idleSecs,et("#statsOut").textContent=Ze.text(),El.classList.add("open"),we.classList.add("drawer-open"),et("#settingsTab").setAttribute("aria-expanded","true")}function va(){El.classList.remove("open"),we.classList.remove("drawer-open"),et("#settingsTab").setAttribute("aria-expanded","false")}var fu=()=>El.classList.contains("open");et("#settingsTab").addEventListener("click",()=>{jt.play("tap"),fu()?va():er()});et("#drawerShade").addEventListener("click",va);var pu=0;et("#brand").addEventListener("pointerdown",()=>{et("#brand").classList.add("pressing"),pu=setTimeout(()=>{et("#brand").classList.remove("pressing"),er()},2e3)});["pointerup","pointerleave","pointercancel"].forEach(n=>et("#brand").addEventListener(n,()=>{clearTimeout(pu),et("#brand").classList.remove("pressing")}));et("#settingsClose").addEventListener("click",va);function c_(n){Wt.rotation=(n%360+360)%360,Js(),yl(),requestAnimationFrame(Ai)}et("#rotateBtn").addEventListener("click",n=>{n.stopPropagation(),jt.play("tap"),c_(Wt.rotation+90),er()});et("#rotSeg").addEventListener("click",n=>{let t=n.target.closest("button");t&&(Wt.rotation=+t.dataset.r,Js(),yl(),er(),requestAnimationFrame(Ai))});var Qh=.9;function $s(n){Wt.volume=Math.round(Math.min(1,Math.max(0,n))*20)/20,Gt.setVolume(Wt.volume),Js(),mu()}function mu(){let n=Math.round(Wt.volume*100);et("#volTop").value=n,et("#volLabel").textContent=`${n}%`,et("#muteBtn").textContent=n===0?"🔇":n<50?"🔉":"🔊",et("#muteBtn").setAttribute("aria-label",n===0?"تشغيل الصوت":"كتم الصوت")}et("#volTop").addEventListener("input",n=>$s(n.target.value/100));et("#volDown").addEventListener("click",()=>{$s(Wt.volume-.1),jt.play("tick")});et("#volUp").addEventListener("click",()=>{$s(Wt.volume+.1),jt.play("tick")});et("#muteBtn").addEventListener("click",()=>{Wt.volume>0?(Qh=Wt.volume,$s(0)):$s(Qh||.9)});var h_=!!(document.documentElement.requestFullscreen||document.documentElement.webkitRequestFullscreen);function wl(){let n=!!(document.fullscreenElement||document.webkitFullscreenElement);et("#fsTopBtn").hidden=!h_,et("#fsLabel").textContent=n?"خروج من ملء الشاشة":"ملء الشاشة",et("#fsIcon").setAttribute("d",n?"M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5":"M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5")}et("#fsTopBtn").addEventListener("click",()=>{jt.play("tap"),document.fullscreenElement||document.webkitFullscreenElement?(document.exitFullscreen||document.webkitExitFullscreen).call(document):Tl()});document.addEventListener("fullscreenchange",()=>{wl(),requestAnimationFrame(Ai)});document.addEventListener("webkitfullscreenchange",wl);et("#kioskChk").addEventListener("change",n=>{Wt.kiosk=n.target.checked,Js(),Wt.kiosk&&Tl()});et("#idleSecs").addEventListener("change",n=>{Wt.idleSecs=Math.max(20,+n.target.value||60),Js()});et("#statsReset").addEventListener("click",()=>{Ze.data={sessions:0,seconds:0,questions:0,voice:0,quizzes:0,topics:{}},Bn.set("stats",Ze.data),et("#statsOut").textContent=Ze.text()});et("#reloadBtn").addEventListener("click",()=>location.reload());et("#testBtn").addEventListener("click",async()=>{let n=et("#testOut");n.textContent="جارِ الاختبار...",Yt.active&&await _a();let t=await Gt.selfTest(),e=i=>i?"✅":"❌";n.textContent=`${e(navigator.onLine)} الاتصال بالإنترنت
${e(t.client)} تحميل مكتبة الصوت
${e(t.mic)} الميكروفون
${e(t.agent)} الاتصال بوكيل المحادثة (ElevenLabs)
${t.agent?"جاهز للعرض.":"ستعمل المساعدة بالإجابات المحلية وصوت المتصفح."}`});function Tl(){let n=document.documentElement;document.fullscreenElement||(n.requestFullscreen||n.webkitRequestFullscreen)?.call(n).catch?.(()=>{})}addEventListener("contextmenu",n=>n.preventDefault());addEventListener("dragstart",n=>n.preventDefault());addEventListener("gesturestart",n=>n.preventDefault());addEventListener("keydown",n=>{if(n.key==="F2"){n.preventDefault(),fu()?va():er();return}if(!Wt.kiosk)return;let t=n.key.toLowerCase();(["f5","f3","f6","f7","f12","browserback","browserforward"].includes(t)||(n.ctrlKey||n.metaKey)&&["r","w","n","t","p","s","o","l","f","u","h","j","+","-","=","0"].includes(t)||n.altKey&&["arrowleft","arrowright","home"].includes(t))&&n.preventDefault()});addEventListener("wheel",n=>{n.ctrlKey&&n.preventDefault()},{passive:!1});Wt.kiosk&&(history.pushState(null,"",location.href),addEventListener("popstate",()=>history.pushState(null,"",location.href)));addEventListener("robot-context-lost",()=>setTimeout(()=>location.reload(),1500));var gl=[];addEventListener("error",()=>{gl=gl.filter(n=>Date.now()-n<6e4).concat(Date.now()),Wt.kiosk&&gl.length>5&&!Yt.active&&location.reload()});addEventListener("online",()=>{Yt.active&&Zs&&!Gt.connected&&!Vt.on&&Gt.connect({silent:!0})});setInterval(()=>{Wt.kiosk&&!Yt.active&&new Date().getHours()===4&&location.reload()},30*6e4);"serviceWorker"in navigator&&/^https?:$/.test(location.protocol)&&navigator.serviceWorker.register("sw.js").catch(()=>{});yl();mu();wl();Ai();eu();et("#loaderBar").style.width="70%";ae.onReady(()=>{et("#loaderBar").style.width="100%",setTimeout(()=>{et("#loader").classList.add("hide"),Ai()},350),setTimeout(()=>{let n=document.createElement("script");n.src="vendor/qrcode.js",document.head.appendChild(n),Gt.preload()},600),ae.setState("attract")});window.mohammed={Robot:ae,voice:Gt,startSession:ps,endSession:_a,startQuiz:tr,ask:js,showCard:su,settings:Wt};
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
