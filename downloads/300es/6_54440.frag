#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 p = (gl_FragCoord.xy * 3.0 - resolution) / max(resolution.x,resolution.y);
	_GLF_color = vec4(p.y,p.x,0.9,0.5);
}