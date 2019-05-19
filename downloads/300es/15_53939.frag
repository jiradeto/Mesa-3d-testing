#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

void main( void ) {
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	uv = uv * 2.0 - 1.;
	uv.x *= resolution.x / resolution.y;  

	vec3 color = vec3(0.0);
			
	_GLF_color = vec4(color, 1.0);
}