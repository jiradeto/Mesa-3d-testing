#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define EPS 1e-3
#define MAXD 20.

float box(vec3 p) {
	vec3 d = abs(p) - vec3(0.2);
	return length(max(d,0.)) + min(max(d.x,max(d.y,d.z)),0.);
}

float sphere(vec3 p) {
	return length(p) - .2;
}

float map(vec3 p) {
	vec3 c = vec3(1,1,2);
	vec3 q = mod(p,c) - .5*c;
	return sphere(q);
}

vec3 normal(vec3 p) {
	vec2 e = vec2(EPS, 0.);
	float d = map(p);
	return normalize(vec3(map(p+e.xyy)-d, map(p+e.yxy)-d, map(p+e.yyx)-d));
}

vec3 lighting(vec3 p, vec3 lightPos) {
	vec3 n = normal(p);
	vec3 lightDir = normalize(lightPos-p);
	return vec3(max(dot(lightDir,n), 0.));
}

void raytrace(in vec3 ro, in vec3 rd, out vec3 p, out bool hit) {
	hit = false;
	p = ro;
	float d = 1./0.;
	float t = 0.;
	for (int i=0; i<64; i++) {
		p += rd*(d=map(p));
		if (d < EPS) {
			hit = true;
			break;
		}
		if (length(ro-p) > MAXD) break;
	}
}

void main(void) {
	vec2 uv = (2.*gl_FragCoord.xy - resolution.xy)/resolution.x;
	
	vec3 ro = vec3(0, 0, 5) + vec3(0,0,-1)*time;
	vec3 rd = normalize(vec3(uv.xy*0.5, -1));
	vec3 p;
	bool hit;
	raytrace(ro, rd, p, hit);
	
	vec3 col = vec3(0);
	if (hit) {
		vec3 lp = ro+vec3(0,0,-5);
		vec3 pl; bool hitl;
		vec3 rdl = normalize(lp-p);
		vec3 rol = p - 2.*EPS*rd; // the problem is here
		raytrace(rol, rdl, pl, hitl);
		if (length(pl-lp) > length(p-lp)) {
			col = lighting(p, lp);
		} else {
			col = vec3(1,0,0);
		}
	}
	
	vec3 fog = .2*vec3(.8,.8, 1.);
	float t = length(ro-p);
	col = mix(col, fog, 1.-exp(-0.015*t*t));
	
	_GLF_color = vec4(pow(col, vec3(1.3)), 1.);
}