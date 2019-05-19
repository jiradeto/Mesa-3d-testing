#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	vec2 p1 = floor((gl_FragCoord.xy) / 32.0) + time;
	
	float tempi = mod(p1.x, 2.0) * mod(p1.y + 1.0, 2.0);
	float index = (tempi > 0.5) ? 1.0 : 0.5;
	
	
	_GLF_color = index * vec4(1.0, 1.0, 1.0, 1.0);
}