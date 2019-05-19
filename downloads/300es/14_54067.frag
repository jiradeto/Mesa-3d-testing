#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


void main( void ) {

	vec2 pos = gl_FragCoord.xy / resolution - 0.5;

	_GLF_color = vec4(pos.x * pos.y * vec3(1, 1, 1) * 20.0, 1);

}