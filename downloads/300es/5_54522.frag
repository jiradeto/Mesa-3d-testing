#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform vec2 resolution;
uniform float time;

void main() {
	vec2 st = gl_FragCoord.xy/resolution;
	float y = sin((((st.x-time)/0.1)))*sin(time)*0.3;
	
	if (abs(st.y -0.5-y) < 0.05) {
		_GLF_color = vec4(sin(time), cos(time), sin(time+180.0), 1.0);
	} else {
		_GLF_color = vec4(1.0);
	}
}