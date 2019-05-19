#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(1.9898,78.233))) * 43758.5453);
}

void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy;

  float value = rand(vec2(position.x + time, position.y + time));

	_GLF_color = vec4(value, value, value,1.0);
}