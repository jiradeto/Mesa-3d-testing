#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform vec2  resolution;
uniform float time;

void main() {
	float x = resolution.x / 2.0;
	float y = resolution.y / 2.0;
	float size = 5.0;
	vec2  pos = vec2(x, y);
	float dist = length(gl_FragCoord.xy - pos);
	float color = size / dist;
	_GLF_color = vec4(vec3(color), 1.0);
}
