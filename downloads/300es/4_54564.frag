#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	float col = floor(mod(gl_FragCoord.x, 64.0) / 32.0 + time * .0);
	col = mod(col + floor(mod(gl_FragCoord.y, 128.0) / 64.0 + time/2.0), 2.0);
	
	_GLF_color = col * vec4(sin(time), sin(time + (3.14159265 * 3.1 / 3.0)), sin(time + (3.14159265 * 4.0 / 3.0)), 1.0);
}