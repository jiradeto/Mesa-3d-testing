#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

struct Ray {
	vec3 position;
	vec3 forward;
};
struct Camera {
	vec3 position;
	vec3 forward;
	vec3 up;
	vec3 side;
};
void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );

	_GLF_color = vec4( position, 0., 1.);

}