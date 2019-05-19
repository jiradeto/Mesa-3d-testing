#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define EPS 1e-4
#define MAXD 20.
#define MAXI 64

vec3 rotateX(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z);}
vec3 rotateY(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(c*p.x + s*p.z, p.y, c*p.z - s*p.x);}
vec3 rotateZ(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(c*p.x - s*p.y, s*p.x + c*p.y, p.z);}

float sphere(vec3 p, float r) {
	return length(p) - r;
}

float box(vec3 p, vec3 s) {
	vec3 d = abs(p) - s;
	return length(max(d,0.)) + min(max(d.x,max(d.y,d.z)),0.);
}

float line(vec3 p, vec3 a, vec3 b) {
    vec3 pa = p - a, ba = b - a;
    float h = clamp(dot(pa,ba)/dot(ba,ba), 0., 1.);
    return length(pa - ba*h) - EPS;
}

float lineBox(vec3 p) {
	return min(line(p, vec3(-1,1,0), vec3(1,1,0)), min(line(p, vec3(1,1,0), vec3(1,-1,0)),min(line(p, vec3(1,-1,0), vec3(-1,-1,0)), line(p, vec3(-1,-1,0), vec3(-1,1,0)))));
}

float scene(vec3 p) {
	vec3 pr = rotateZ(rotateY(rotateX(p, time), time), time);
	vec3 pr2 = rotateX(pr, 3.14159/2.);
	vec3 pr3 = rotateY(pr, 3.14159/2.);
	return min(min(lineBox(pr), lineBox(pr2)), lineBox(pr3));
}

vec3 normal(vec3 p) {
	vec2 e = vec2(EPS, 0.);
	float d = scene(p);
	return normalize(vec3(scene(p+e.xyy)-d, scene(p+e.yxy)-d, scene(p+e.yyx)-d));
}

float refd = 1./0.;
void raytrace(vec3 ro, vec3 rd, out vec3 p, out float mind, out bool hit) {
	p = ro;
	float d;
	for (int i=0; i<128; i++) { 
		p += rd*(d=scene(p));
		if (d<mind) mind = d;
		if (d<EPS) {
			hit = true;
			break;
		}
	}
}

vec3 lighting(vec3 p, vec3 lightPos) {
	vec3 n = normal(p);
	vec3 lightDir = normalize(p-lightPos);
	vec3 color = vec3(max(dot(lightDir,n), 0.));
	return color;
}

void main(void) {
	vec2 uv = (2.*gl_FragCoord.xy - resolution.xy) / resolution.x;

	vec3 ro = vec3(uv.xy, 10);
	vec3 rd = vec3(uv.xy*.5,-1);

	vec3 p = ro;
	float mind = 1./0.;
	bool hit = false;
	raytrace(ro, rd, p, mind, hit);
	
	vec3 color = vec3(0);
	color = vec3(.8,.7,.9)*pow((1.-mind), 3.)/(mind+0.7);
	
	_GLF_color = vec4(color, 1);
}