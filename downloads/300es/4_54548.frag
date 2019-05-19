#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec4 translation = vec4(time * 0.5, time, 0, 0);
	
	_GLF_color = mod(translation + gl_FragCoord, 10.0);

}