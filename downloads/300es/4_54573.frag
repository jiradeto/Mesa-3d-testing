#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution;//(2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);

	vec3 a = vec3(1, 0, 0);
	vec3 b = vec3(0, 1, 0);
	vec3 c = vec3(0, 0, 1);
		
	float x0 = uv.x * 2.;
	float x1 = (uv.x * 2.) - 1.;
	
	col = mix(a, b, x0);
	col = mix(col, c, x1);
	
	_GLF_color = vec4(col, 1.);

}