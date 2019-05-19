#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float func(vec2 pos, vec2 touch, float t)
{
	pos -= touch;
	float d = (sqrt(pos.x * pos.x + pos.y * pos.y) )  - t;
	if (d > 0.0) return 0.0;
	float s = 0.5;
	return (d * s + 1.0);
}

void main( void ) {

	vec2 position = (gl_FragCoord.xy - resolution.xy / 2.0) / resolution.y;

	float color = 0.0;
	
	color = func(position, mouse - 0.5, fract(time));
	

	_GLF_color = vec4(color, color, color, 1.0);

}