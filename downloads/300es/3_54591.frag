#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 resolution;

float line(vec2 p, vec2 v1, vec2 v2) {
	p -= v1;
	vec2 v = v2 - v1;
	float tl = 0.005;
	
	return step(length(cross(vec3(p, 0.), vec3(normalize(v), 0.))), tl);
}

void main( void ) {
	vec2 st = gl_FragCoord.xy / resolution;
	vec2 p1 = vec2(0., 0.0 + abs(sin(time)));
	vec2 p2 = vec2(0. + abs(sin(time)), 1.);
	vec2 p3 = vec2(1., 1. - abs(sin(time)));
	vec2 p4 = vec2(1. - abs(sin(time)), 0.);
	float col = max(max(max(line(st, p1, p2), line(st, p2, p3)), line(st, p3, p4)), line(st, p4, p1));
	
	_GLF_color = vec4(vec3(col), 0.);
}