#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;


 

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	float t = cos(mod(time, 200.));
	vec3 color = vec3(0.);
	
	color.x = tan(t);
	color.y = sin(cos(-t));
	color.z = tan(-t);
	
	_GLF_color = vec4(color, 1.);
}