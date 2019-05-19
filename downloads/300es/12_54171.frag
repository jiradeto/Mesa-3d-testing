#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;// @machine_shaman





uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	
	vec2 p = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec2 _p = p;
	vec3 col = vec3(0.);
	
	

	_p *= 1. + .04 * vec2(cos(cos(p.x * 2.) + p.y + time), sin(cos(p.y) + p.x + time));

		
	float d = 0.;	
	p = _p;
	p.y += .1;
	p.x += .05 * sin(p.y * 10. + cos(p.x * 10.) + sin(p.y * 10.));
	p = abs(p) - vec2(.05, .25);
	d = max(p.x, p.y);
	
	float m = smoothstep(.01, .0, d);
	
	
	col += m;
	col *= vec3(.2, 0, .1);
	col *= .4 - _p.y;
	
	p = _p;
	p.y *= 2.0;
	p.y += -.25 + 4. * p.x * p.x;
		
	d = length(p) - .25;
	m = smoothstep(.01, .0, d);
	
	col *= 1. - m;
	col += m * (.5 + .5 * cos(p.y * 2. + time + d * 30. + vec3(0, 23, 21)));
	
	_GLF_color = vec4(col, 1.);

}