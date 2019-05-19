#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {


	_GLF_color = vec4( vec3( 0.2, tan(gl_FragCoord.y + time * 5.0), 0.50 + sin(gl_FragCoord.y + time * 4.0)), 1.0 );

}