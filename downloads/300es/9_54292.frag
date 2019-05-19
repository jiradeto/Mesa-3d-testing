#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;

	float color1 = 0.0;
	float color2 = 0.0;
	float color3 = 0.0;
	if(gl_FragCoord.x / resolution.x > 0.5)
	{
		color1 = sin(time) * 0.8 + 0.3;
		color2 = cos(time) * 0.8 + 0.3;
		color3 = (cos(time) + sin(time)) * 0.8 + 0.3;
	}
	else
	{
		color1 = sin(time) * 0.8 + 0.3;
		color2 = sin(time) * 0.8 + 0.3;
		color3 = (cos(time) + sin(time)) * 0.8 + 0.3;
	}

	_GLF_color = vec4( vec3(color1, color2, color3), 1.0 );

}