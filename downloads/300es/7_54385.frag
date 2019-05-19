#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec3 result = vec3(0,0,0);
	vec4 pos = gl_FragCoord;
	
	if(pos.x >= (resolution.x / 2.0)){
		result = vec3(1,0,0);
	}
		
	_GLF_color = vec4(result, 1);

}