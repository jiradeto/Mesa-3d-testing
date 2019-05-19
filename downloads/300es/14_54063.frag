#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float circle(vec2 uv, vec2 p, float r, float blur) {
	return smoothstep(r, r-0.01, length(uv-p));
}

void main( void ) {

	vec2 uv = ( gl_FragCoord.xy / resolution.xy );
	uv.x *= resolution.x / resolution.y;

	float c1 = circle(uv, vec2(1., .5), 0.2, 0.01);
	c1 += circle(uv, vec2(1.5,(sin(time) + 1.)/2.), 0.05, 0.01);
	c1 += circle(uv, vec2(.5, (cos(time) + 1.)/2.), 0.05, 0.01);

	_GLF_color = vec4( vec3(c1), 1. );

}