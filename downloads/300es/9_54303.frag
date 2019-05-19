#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float map(vec3 p) {
	float t = length(mod(p, 2.0) - 1.0) - 0.5;
	//t = min(t, length(mod(p.xy, 2.0) - 1.0) - 0.5);
	return t;
}
vec3 getN(vec3 p) {
	float t = map(p);
	vec2 d = vec2(0.001, 0.0);
	return normalize(vec3(
		t - map(p + d.xyy),
		t - map(p + d.yxy),
		t - map(p + d.yyx)));
		
}


void main( void ) {
	vec2 uv = ( 2.0 * gl_FragCoord.xy - resolution.xy ) / min(resolution.x , resolution.y);
	vec3 dir = normalize(vec3(uv, 1.0));
	vec3 pos = vec3(0 ,0 , time);
	float t= 0.0;
	for(int i = 0 ; i < 100; i++ ) {
		t += map(dir * t + pos);
	}
	vec3 ip = dir * t + pos;
	vec3 L = normalize(vec3(1,2,3));
	vec3 N = getN(ip);
	_GLF_color = vec4(dot(L, N) + dir * 0.1, 1.0);

}