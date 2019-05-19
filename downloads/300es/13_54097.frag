#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	vec2 pos = gl_FragCoord.xy / resolution;
	
	float width = 0.1;

	float paint = step(pos.x, width);
	
	paint += step(pos.y, width);
	
	paint += step(1.0 - width, pos.x);
	
	paint += step(1.0 -width, pos.y);
	
	
	_GLF_color = vec4(paint, pos.x, pos.y, 1.0);
}