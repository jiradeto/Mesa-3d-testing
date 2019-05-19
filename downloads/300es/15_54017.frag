#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float u_time;

void main() {
	_GLF_color = vec4(abs(sin(u_time)),0.0,0.0,1.0);
}
