#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float circle(vec2 p, float r) {
	return length(p) - r;
}

float rect(vec2 p, vec2 r) {
	p = abs(p) - r;
	return max(p.x, p.y);
}

float diamond(vec2 p, vec2 r) {
	p = abs(p) - r;
	return p.x + p.y;
}
void main() {
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);
	
	float d = rect(uv, vec2(.8, .5));
	
	col += smoothstep(.01, .0,  d);
	
	_GLF_color = vec4(col, 1.);
}