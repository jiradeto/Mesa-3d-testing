#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float PI = 3.14159265358979323846;

float block(in vec2 pp, in vec2 p)
{
	float b = 0.01;
	//return ((pp.x > p.x-b)&&(pp.x < p.x+b)) && ((pp.y > p.y-b)&&(pp.y < p.y+b)) ? 1.0 : 0.0;
	return (length(pp-p)<b) ? 1.0 : 0.0;
}

void main(void){
	float zmin = -1.0;
	float zmax = 1.0;
	float ro1 = mod(time,PI*2.0);
	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);
	
	mat4 rotY = mat4(cos(ro1), 0.0, -1.0*sin(ro1), 0.0,
				         0.0, 1.0,          0.0, 0.0,
				     sin(ro1), 0.0,      cos(ro1), 0.0,
				         0.0, 0.0,          0.0, 1.0);
	
	float ro2 = mod(time,PI*2.0)+PI/2.0;
	mat4 rotX = mat4(1.0,          0.0,     0.0, 0.0,
					 0.0,      cos(ro2), sin(ro2), 0.0,
					 0.0, -1.0*sin(ro2), cos(ro2), 0.0,
					 0.0,          0.0,     0.0, 1.0);
				         
	float zex = zmin/zmax;
	mat4 pers = mat4(1.0, 0.0,                0.0, 0.0,
					 0.0, 1.0,                0.0, 0.0,
					 0.0, 0.0,      1.0/(1.0-zex), 1.0,
					 0.0, 0.0, -1.0*zex/(1.0-zex), 0.0);
	
	float nn1 = 1.0;
	float kk1 = 1.0+3.0*(sin(time*0.01)+1.0)/2.0;
	float ff1 = 0.0;
	for(int i=0;i<300;i++){
	
		float tt = time+float(i)*1.0;
		float ran = sin(nn1*tt/kk1);
		
		float fx = cos(tt)*ran;
		float fy = sin(tt)*ran;
		vec2 pp = vec2(fx,fy);
		vec4 ppm = vec4(pp.x,pp.y,1.0,1.0);
		vec4 ppm2 = rotX*ppm;
		ppm2 = pers*ppm2;
		vec2 pp2 = vec2(ppm2.x/ppm2.w,ppm2.y/ppm2.w)*0.3;
		float f = block(pp2,p);
		ff1 += f;
	}
	
	float nn2 = 1.0+3.0*(sin(time*0.001)+1.0)/2.0;
	float kk2 = 1.0;
	float ff2 = 0.0;
	for(int i=0;i<300;i++){
	
		float tt = time+float(i)*1.0;
		float ran = sin(nn2*tt/kk2);
		
		float fx = cos(tt)*ran;
		float fy = sin(tt)*ran;
		vec2 pp = vec2(fx,fy);
		vec4 ppm = vec4(pp.x,pp.y,0.8,1.0);
		vec4 ppm2 = rotY*ppm;
		ppm2 = pers*ppm2;
		vec2 pp2 = vec2(ppm2.x/ppm2.w,ppm2.y/ppm2.w)*0.3;
		float f = block(pp2,p);
		ff2 += f;
	}
	
    gl_FragColor = vec4(vec3((ff1+ff2)/2.0,ff2,ff1), 1.0);
    
}