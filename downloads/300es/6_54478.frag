#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float triangle(vec2 p, vec2 p0, vec2 p1, vec2 p2) {
	
	vec2 e0 = p1 - p0;
	vec2 e1 = p2 - p1;
	vec2 e2 = p0 - p2;
	vec2 v0 = p - p0;
	vec2 v1 = p - p1;
	vec2 v2 = p - p2;
	
	vec2 q0 = v0 - e0 * clamp(dot(v0, e0) / dot(e0, e0), 0.0, 1.0);
	vec2 q1 = v1 - e1 * clamp(dot(v1, e1) / dot(e1, e1), 0.0, 1.0);
	vec2 q2 = v2 - e2 * clamp(dot(v2, e2) / dot(e2, e2), 0.0, 1.0);
	
	float s = sign(e0.x * e2.y - e0.y * e2.x);

	vec2 k0 = vec2(dot(q0, q0), s * (v0.x * e0.y - v0.y * e0.x));
	vec2 k1 = vec2(dot(q1, q1), s * (v1.x * e1.y - v1.y * e1.x));
	vec2 k2 = vec2(dot(q2, q2), s * (v0.x * e2.y - v2.y * e2.x));
	vec2 d = min(min(k0, k1), k2);
	
	return -sqrt(d.x) * sign(d.y);
	
}

void main() {

	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);

	float d = triangle(uv, vec2(-.25, -.25), vec2(0, .25), vec2(.25, -.25));
	
	col += abs(.003 / d);
	
	_GLF_color = vec4(col, 1.);

}