#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define FOR_LOOP 10;

void main( void ) 
{
	vec2 pos = gl_FragCoord.xy / vec2(min(resolution.x, resolution.y));
	//if(gl_FragCoord.x < 1280.)
	if(time > 10.)
	{
		_GLF_color = vec4(time, 0., 1, 1.);
	}
}