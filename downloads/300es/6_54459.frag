#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define FOR_COUNT 600

void main() {
	vec2 pos = (gl_FragCoord.xy / vec2(min(resolution.x, resolution.y)));
	_GLF_color = vec4(0.0);
	
	for(int i = 0; i < FOR_COUNT; i++) {
		float tmp0 = float(i) / float(FOR_COUNT) * 6.25 + time*0.004;
		
		if(distance(pos, vec2(cos(tmp0*float(i/5)), sin(tmp0*float(i/2)) ) * vec2(.75,0.50) + vec2(0.9, 0.5)) < 0.003) {
			_GLF_color = vec4(pos.x, pos.y, pos.x, 1.0);}
			 
		 
	}
}