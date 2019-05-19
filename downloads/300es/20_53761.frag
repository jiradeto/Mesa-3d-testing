#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	_GLF_color = .6 + .59 * cos(time + 6.28 * (gl_FragCoord.x / resolution.y) + vec4(23, 21, 0, 0));
}