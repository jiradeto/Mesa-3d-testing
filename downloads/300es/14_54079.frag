#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;

void main( void ) {
	_GLF_color = vec4(vec3((mouse).y,0.0,abs(sin(time * 1.0))), 1.0);
}