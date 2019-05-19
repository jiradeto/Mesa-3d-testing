#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define ITER 10
#define PI 3.1415

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy )*2.0 - 1.0;
	vec3 color;
	vec2 pos;
	float _t;
	
	for(int i = 0; i < ITER; i++){
		_t = time * 3.6;
		pos = vec2(sin(_t), 0.0);
		color += (0.05 / float(ITER)) / length(position.xy - pos + vec2(0, (float(i) / float(ITER) - 0.5) * 2.0)) *
			        vec3(0, max(min(abs(tan(_t - PI / 2.0)), 5.0), 0.7), max(min(abs(tan(_t - PI / 2.0)), 2.0), 0.7));
		
		_t = time * 1.8;
		pos = vec2(sin(_t), 0.0);
		color += (0.05 / float(ITER)) / length(position.xy - pos + vec2(0, (float(i) / float(ITER) - 0.5) * 2.0)) *
			        vec3(max(min(abs(tan(_t - PI / 2.0)), 5.0), 0.7), max(min(abs(tan(_t - PI / 2.0)), 2.0), 0.7), 0.7);
		
		_t = time * 1.2;
		pos = vec2(sin(_t), 0.0);
		color += (0.05 / float(ITER)) / length(position.xy - pos + vec2(0, (float(i) / float(ITER) - 0.5) * 2.0)) *
			        vec3(max(min(abs(tan(_t - PI / 2.0)), 5.0), 0.7), 0, max(min(abs(tan(_t - PI / 2.0)), 2.0), 0.7));
	}
	_GLF_color = vec4(color, 1.0);

}