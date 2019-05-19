#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float plane(vec3 p) {
	return p.y;
}

float box(vec3 p, vec3 s) {
	return length(max(abs(p) - s, 0.0));
}

//float sphere(vec3 p, float r) {
	//return length(p) - r;
//}

float smin(float a, float b, float k) {
	float res = exp(-k * a) + exp(-k * b);
	return -log(res) / k;
}

float map(vec3 p) {
	float d = plane(p);
	d = smin(d, box(p - vec3(-3.0, 0.0, 1.0), vec3(3.0, 0.6, 1.0)), 4.0);
	//d = smin(d, sphere(p - vec3(1.5, 1.5, 0.5), 1.0), 8.0);
	
	return d;
}

vec3 normal(vec3 p) {
	float e = 0.005;
	return normalize(vec3(
		map(p + vec3(e, 0.0, 0.0)) - map(p + vec3(-e, 0.0, 0.0)),
		map(p + vec3(0.0, e, 0.0)) - map(p + vec3(0.0, -e, 0.0)),
		map(p + vec3(0.0, 0.0, e)) - map(p + vec3(0.0, 0.0, -e))
	));
}

float softshadow(vec3 ro, vec3 rd) {
	
	float t = 0.00005;
	vec3 p = ro + t * rd;
	float  v = 1.0;
	for(int i = 0; i < 40; i++) {
		float d = map(p);
		v = min(v,  32.0 * d / t);
		t += clamp(d, 0.02, 1.0);
		p = ro + t * rd;
		
	}
	return v;
}

vec3 render(vec3 ro, vec3 rd) {

	float tmin = 0.0;
	float tmax = 120.0;
	
	float t = 0.0;
	vec3 p = ro;
	for(int i = 0; i < 128; i++) {
		float d = map(p);
		t += d;
		p = ro + t * rd;
		if (t > tmax) break;
	}
	
	vec3 col = vec3(0.5);
	vec3 light = normalize(vec3(1.0, 1.0, 0.2));
	
	if (t < tmax) {
		vec3 nor = normal(p);
		float dif = clamp(dot(nor, light), 0.0, 1.0);
		col += vec3(0.3) * dif;
		
		float ss = softshadow(p + nor * 0.1, light);
		
		//col *= clamp(ss + 0.5, 0.5, 1.0);
		
		return col;
	} else {
		vec3 nor = vec3(0.0, 1.0, 0.0);
		float dif = clamp(dot(nor, light), 0.0, 1.0);
		col += vec3(0.3 * dif);
		
		return col;
	}
}

mat3 camera(vec3 ro, vec3 ta, vec3 up) {
	vec3 cz = normalize(ta - ro);
	vec3 cx = normalize(cross(cz, normalize(up)));
	vec3 cy = normalize(cross(cx, cz));
	
	return mat3(cx, cy, cz);
}

void main( void ) {

	vec2 p = (gl_FragCoord.xy * 2.0 - resolution) / resolution;
	p.x *= resolution.x / resolution.y;
	
	vec3 ro = vec3(cos(time * 0.3 + mouse.x) * 3.0, 0.3 + mouse.y * 5.0, sin(time * 0.3 + mouse.x) * 3.0);
	vec3 ta = vec3(0.0, 0.5, 1.0);
	vec3 rd = camera(ro, ta, vec3(0.0, 1.0, 0.0)) * normalize(vec3(p.xy, 1.0));

	vec3 col = render(ro, rd);
	
	col = sqrt(col);
	
	_GLF_color = vec4(col, 1.0);
}