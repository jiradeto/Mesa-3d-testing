#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

#ifdef GL_ES
precision mediump float;
#endif
 
#extension GL_OES_standard_derivatives : enable
 
// Light Study by @vv4pi
 
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
 
mat3 rx(float t) { return mat3(1.0, 0.0, 0.0, 0.0, cos(t), -sin(t), 0.0, sin(t), cos(t)); }
mat3 ry(float t) { return mat3(sin(t), 0.0, sin(t), 0.0, 1.0, 0.0, -sin(t), 0.0, cos(t)); }
mat3 rz(float t) { return mat3(cos(t), -sin(t), 0.0, cos(t), cos(t), 0.0, 0.0, 0.0, 1.0); }
 
 
float map(vec3 p) {
	vec3 p1 = p - vec3(2.5 + 2.0 * sin(time *-0.7), 2.5 + 2.0 * cos(time *-0.7), 2.0);
	vec3 p2 = p - vec3(2.5 + 2.0 * sin(time * 1.0), 2.5 + 2.0 * cos(time * 1.0), 1.0);
	return min(length(max(abs(p1) - 0.3, 0.0)), min(length(p2) - 0.4, min(p.x, p.y)));
}
 
 
vec3 norm(vec3 p) {
	return normalize(vec3(
		map(vec3(p.x + 0.001, p.y, p.z))  - map(vec3(p.x - 0.001, p.y, p.z)),
		map(vec3(p.x, p.y + 0.001, p.z))  - map(vec3(p.x, p.y - 0.001, p.z)),
		map(vec3(p.x, p.y, p.z  + 0.001)) - map(vec3(p.x, p.y, p.z - 0.001))
	));
}
 
 
vec3 ray(vec2 p, float camvp, vec3 campos, vec3 camlat, vec3 camtop) {
	
	vec3 camw = normalize(campos - camlat);
	vec3 camu = normalize(cross(camtop, camw));
	vec3 camv = cross(camw, camu);
	vec3 ray = normalize(p.x * camu + p.y * camv - camvp * camw);
	return ray;
}

float light(vec3 mp, vec3 p) {
	float l = 15.0;
	float pmd = 1e20;
	
	vec3 rd = normalize(p - mp);
	
	for (int i = 0; i < 100; ++i) {
		float pd = distance(mp, p);
		if (pd < .001) return l;

		float md = map(mp);
		if(md < .0001) return 0.0;

		
		float y = md * md / (2.0 * pmd);
		float d = sqrt(md * md - y * y);
		
		l = max(0.0, min(1.0, min(l, d * 10.0 / max(0.0, pd - y))));
		mp += rd * md;
	};

	return l;
}


void main( void ) {
	vec2 p = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;
	vec3 l1at = vec3(2.5 + 2.0 * sin(time *-0.7), 2.5 + 2.0 * cos(time *-0.7), 3.0);
	vec3 l2at = vec3(2.5 + 2.0 * sin(time * 1.0), 2.5 + 2.0 * cos(time * 1.0), 0.0);
 
	vec3 cat = vec3(10.0 + 2.0 * sin(time), 10.0 + 2.0 * cos(time), 10.0);
	vec3 lto = l1at / 4.0;

	vec3 rd = ray(p, 0.9, cat, lto, vec3(6.0, 0.0, 1.0));
	
	vec3 mp = cat;
	
	for (int i = 0; i < 100; ++i) {
		float md = map(mp);
		if(md < .001) break;
		mp += rd * md;
	};
	
	vec3 l1 = vec3(0.8, 0.2, 0.6) * light(l1at, mp) * max(0.0, dot(norm(mp), normalize(l1at - mp)));
	vec3 l2 = vec3(0.5, 0.4, 0.8) * light(l2at, mp) * max(0.0, dot(norm(mp), normalize(l2at - mp)));

	vec3 l = vec3(0.7, 0.8, 0.6) * 0.1 + (l1 + l2) / 2.0;
	gl_FragColor = vec4(l, 1.0);
}
