#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
uniform vec2 resolution;
uniform float time;
vec3 l=normalize(vec3(1,1,0.5));
vec3 l2=normalize(vec3(-8,-1,-0.3));

float ball(vec3 p){	
	return length(vec3(p.x*1.0,p.y*0.7,p.z*1.0))-0.7;
}

float f(vec3 p){
	return ball(p);
}


mat2 rot(float a) {
	float s = sin(a);
	float c = cos(a);
	
	return mat2(c, s, -s, c);
}

// camera rotation : pitch, yaw
mat3 rotationXY( vec2 angle ) {
	vec2 c = cos( angle );
	vec2 s = sin( angle );
	
	return mat3(
		c.y      ,  0.0, -s.y,
		s.y * s.x,  c.x,  c.y * s.x,
		s.y * c.x, -s.x,  c.y * c.x
	);
}
void main(){
	vec2 p=(gl_FragCoord.xy*2.-resolution.xy)/min( resolution.x,resolution.y);
	vec3 g=vec3(0,0,18);//eye pos
	vec3 eye=vec3(p.x,p.y,7);//eye target plane
	float angl=time;
	mat3 v=rotationXY(vec2(.03,0.06));
	mat3 v2=rotationXY(vec2(0.01,0.02));
	vec3 e=vec3(0);//color
	vec3 r=normalize( vec3(eye-g));//eye direction
	r = v * r;
	g = v * g;
	vec3 c=g;
	float s=1.;
	float d=0.;
	float isobj=0.0;
	
	vec3 c1;
	vec3 c2;
	vec3 c3;
	float c1g,c2g,c3g;
	
	for(int i=0;i<30;i++){
		d=f(c);
		
		if(d<.001){ 
			isobj=1.0;break;
		}
		if(d<0.)d/=2.;
		c+=r*d;
	}
	float fc=f(c);
	vec3 n=(vec3(		fc-f(vec3(c.x-d,c.y,c.z)),
				fc-f(vec3(c.x,c.y-d,c.z)),
				fc-f(vec3(c.x,c.y,c.z-d))
					     ));
	vec3 n2=(vec3(		fc-f(vec3(c.x-d,c.y-d,c.z)),
				fc-f(vec3(c.x  ,c.y-d,c.z-d)),
				fc-f(vec3(c.x-d,c.y  ,c.z-d))
					     ));
	vec3 normal=n+n2;
	normal.zy*=rot(time*0.3);//normalize(normal);
	normal.xy*=rot(time*0.2);//normalize(normal);
	for(int i=0; i<9; i++){
				vec3 norm=normal;
				vec2 v1=normalize(normal.xy);
				vec2 v2=normalize(normal.yz);
				vec2 v3=normalize(normal.zx);
				normal.yz*=mat2(v2.x,v2.y,-v2.y,v2.x);
				normal.zx*=mat2(v3.x,v3.y,-v3.y,v3.x);
				normal.xy*=mat2(v1.x,v1.y,-v1.y,v1.x);
				normal.zy*=rot(time*0.2);
				//normal+=norm;
				//normal*=0.5;
				//normal.xy=vec2(normal.x*v2.x+normal.y*v2.y,normal.y*v2.x-normal.x*v2.y);
				//normal.yz=vec2(normal.y*v3.x+normal.z*v3.y,normal.z*v3.x-normal.y*v3.y);
				//normal.zx=vec2(normal.z*v1.x+normal.x*v1.y,normal.x*v1.x-normal.z*v1.y);
				
				normal=normal.yzx;
			}
	
	n=(normalize((normal+0.0)));
	n=normalize(n+1.0);
	//n = v * n;
	//n2 = v * n2;

	float f=(dot(normalize(n2),l));
	e=(n*f+0.3);//*isobj;
		
_GLF_color=vec4(e,1);
}   
