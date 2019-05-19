#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	float rad = 100.0;
	vec2 pos = vec2(400.0+sin(time)*rad, 400.0+cos(time)*rad);
	vec2 dif = pos - gl_FragCoord.xy;
	float dist = dif.x*dif.x + dif.y*dif.y;
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(pow(0.999, dist));
	_GLF_color = vec4(col, 1.0);
}