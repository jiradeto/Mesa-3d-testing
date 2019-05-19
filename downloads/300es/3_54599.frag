#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy / 2.0) / gl_FragCoord.y;
	float col = rand(pos);
	_GLF_color = vec4(col, col, col, 1.0);

}