
#extension GL_OES_standard_derivatives:enable
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
#define PI 3.1415926535897932384626433832795
mat2 rotate(float t){return mat2(cos(t),-sin(t),sin(t),cos(t));} //Two-dimensional.
mat3 rotate_x(float t){return mat3(1,0,0, 0,cos(t),-sin(t), 0,sin(t),cos(t));}
mat3 rotate_y(float t){return mat3(cos(t),0,sin(t), 0,1,0, -sin(t),0,cos(t));}
mat3 rotate_z(float t){return mat3(cos(t),-sin(t),0, sin(t),cos(t),0, 0,0,1);}
mat3 rotate_xyz(vec3 t){
	vec3 c=cos(t),s=sin(t);
	return
	mat3(1,0,0, 0,c.x,-s.x, 0,s.x,c.x)*
	mat3(c.y,0,s.y, 0,1,0, -s.y,0,c.y)*
	mat3(c.z,-s.z,0, s.z,c.z,0, 0,0,1);
}
float dSphere(vec3 p,float r){return length(p)-r;}
float dBox(vec3 p,vec3 s){
	vec3 d=abs(p)-s;
	return length(max(d,0.))+min(max(d.x,max(d.y,d.z)),0.);
}
float dTorus(vec3 p,vec2 t){
	vec2 q=vec2(length(p.xz)-t.x,p.y);
	return length(q)-t.y;
}
float dCapsule(vec3 p,vec3 a,vec3 b,float r){
	vec3 pa=p-a,ba=b-a;
	float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);
	return length(pa-ba*h)-r;
}
float scene(vec3 p){
	vec3 op=vec3(p.x,p.y,p.z-2.);
	op*=rotate_xyz(vec3(time,time,time*.5));
	float o=min(min(dSphere(op,.3),dBox(op,vec3(.25))),dTorus(op,vec2(.6,.05)));
	o=max(o,-dSphere(op-vec3(0.,0.,.6),.5));
	return min(o,p.y+.8);
}
vec3 sphericalToCartesian(float inclination,float azimuth){
	return vec3(
		sin(inclination)*cos(azimuth),
		sin(inclination)*sin(azimuth),
		cos(azimuth)
	);
}
/*float sphereTrace(vec3 p,vec2 a){ //position, angle.
	vec3 cp=p; //Current position.
	bool touched=false;
	float stepSize=1.;
	#define ITER 64
	for(int i=0;i<ITER;i++){
		float nextStep=scene(cp);
		if(nextStep<=0.){touched=true;}
		if(touched){stepSize*=.75;}
		cp+=sphericalToCartesian(a.x,a.y)*(nextStep*stepSize)*(nextStep<=0.?-1.:1.);
	}
	return length(p-cp);
}*/
float STOP=50.;
float rayMarch(vec3 ro,vec3 rd){ //ray origin, ray direction.
	float d=0.; //Distance from the origin.
	#define ITER 50
	for(int i=0;i<ITER;i++){
		vec3 p=ro+(d*rd);
		float ds=scene(p);
		d+=ds;
		if(ds<0.||d>STOP){break;}
	}
	return d;
}
vec3 getNormal(vec3 p){
	float d=scene(p);
	vec2 e=vec2(0.001,0.);
	vec3 n=d-vec3(
		scene(p-e.xyy),
		scene(p-e.yxy),
		scene(p-e.yyx)
	);
	return normalize(n);
}
float getLight(vec3 p,vec3 lp){ //position, light position.
	vec3 l=normalize(lp-p);
	vec3 n=getNormal(p);
	float diffuse=clamp(dot(n,l),0.,1.);
	
	float d=rayMarch(p+n*.005,l);
	if(d<length(lp-p)){diffuse*=.5;}
	return diffuse;
}
float ambientOcclusion(vec3 p,vec3 normal,float sd){ //point, normal, step distance.
	float o=1.; //occlusion.
	for(float samples=32.;samples>0.;samples--){ //occlusion.
		o-=(samples*sd-(scene(p+normal*samples*sd)))/pow(2.,samples);
	}
	return o;
}
void main(void){
	vec2 uv=gl_FragCoord.xy/resolution.xy;
	float rxy=resolution.x/resolution.y;
	vec2 p=vec2((uv.x-.5)*rxy,uv.y-.5);
	//gl_FragColor=vec4(fract(p.x),fract(p.y),(p.x>=0.&&p.x<1.)&&(p.y>=0.&&p.y<1.),1.);
	
	//float c=sphereTrace(vec3(p,0.),vec2(0.,0.));
	vec3 ro=vec3(0.),rd=normalize(vec3(p,1.));
	float d=rayMarch(ro,rd);
	vec3 hp=ro+(rd*d);
	float c=p.x>0.?ambientOcclusion(hp,getNormal(hp),.25):getLight(hp,vec3(1.,1.,-1.));
	gl_FragColor=vec4(vec3(c),1.);
}