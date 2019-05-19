#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

// hash no sine
float hash(vec2 p) {
	p = fract(p * vec2(765.54, 435.5));
	p += dot(p, p + 76.67);
	return fract(p.x * p.y * 85454.4);
}

void main() {
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);
	_GLF_color = vec4(col, 1.);
}