#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec4 grad(float offset) {
	vec4 color_bot = vec4(1, 0, 0, 1);
	vec4 color_mid = vec4(0, 1, 0, 1);
	vec4 color_top = vec4(0, 0, 1, 1);
	float middle = 0.5;

	vec4 c = mix(color_bot, color_mid, offset / middle) * step(offset, middle);
	c += mix(color_mid, color_top, (offset - middle) / (1.0 - middle)) * (1.0 - step(offset, middle));
	c.a = 1.0;	
	return c;
}

void main( void ) {
	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	_GLF_color = grad(0.9 * position.y);
}