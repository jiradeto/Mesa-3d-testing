#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;
		
	float color = 0.0;
	float a = gl_FragCoord.x / resolution.x;
	

	_GLF_color = vec4( vec3(a), 1.0 );

}