#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 p =2.0* ( gl_FragCoord.xy / resolution.xy )-1.0;
	p.x *= resolution.x/resolution.y;
	vec3 col = vec3(0);
	
	p *= 2.0;
	col += vec3(1,0,0)*exp(-0.8*pow(length(vec2(0.2,1)*p.xy-vec2(0.0,+0.25)), 2.0)); 
	col += vec3(0,1,0)*exp(-0.8*pow(length(vec2(0.2,1)*p.xy-vec2(0.0,0)), 2.0)); 
	col += vec3(0,0,1)*exp(-0.8*pow(length(vec2(0.2,1)*p.xy-vec2(0.0,-0.25)), 2.0)); 
	_GLF_color = vec4(col, 1.0); 
}