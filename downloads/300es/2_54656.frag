#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;


uniform vec2 resolution;

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy) / resolution.y;
	pos = pos * 10.0;
	pos = fract(pos);
	
	_GLF_color = vec4(pos, 0.1, 1.0);

}