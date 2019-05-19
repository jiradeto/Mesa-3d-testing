#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec2 position = gl_FragCoord.xy / resolution.xy;
	float color = 1.0 - distance(position.y, sin(time * 5.0 + position.x * 10.0) / 2.4 + 0.5) * 10.0;
	if(color < 0.2) color = 0.0;
	float dye = 0.0;
	if(color != 0.0) dye = 0.2;
	_GLF_color = vec4(color + (sin(time + position.x * 2.0) + 1.0) * dye, color + (sin(time + position.x * 2.0 + 2.0) + 1.0) * dye, color + (sin(time + position.x * 2.0 + 4.0) + 1.0) * dye, 0);	
}