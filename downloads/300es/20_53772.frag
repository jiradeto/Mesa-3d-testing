#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	_GLF_color = .6 + .59 * cos(2.*time + 6.28 * (floor(64.0*gl_FragCoord.y / resolution.x)/64.0) + vec4(10, 2,8, 0));
}