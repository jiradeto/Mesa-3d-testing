#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 p = ( gl_FragCoord.xy / resolution.xy );

	float color = sin(p.x)*time;

	_GLF_color = vec4( vec3( sin(color*time), color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );

}