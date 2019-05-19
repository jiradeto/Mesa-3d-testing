#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


vec2 rot(vec2 p, float a) {
	float c = cos(a), s = sin(a);
	return vec2(
		c * p.x - s * p.y,
		s * p.x + c * p.y);
		
}



vec2 map(vec3 p) {
	vec2 mi = vec2(0.0);
	p = mod(p, 10.0) - 5.0;
	float t0 = (0.0 - dot(p, vec3(0, 0, 1)));
	t0 = max(t0, smoothstep(0.25, 0.75, dot(p.xy * 0.3 * vec2(1.0, 1.5 * p.y), p.xy)));
	float m0 = length(p * vec3(1.5, 10.0, 1.0) + vec3(0.0, 9.0, -0.0)) - 0.5;
	float n0 = length(p * vec3(1.0,  1.0, 1.0) + vec3(0.0, 0.3,  0.0)) - 0.15;
	float e0 = length(p * vec3(1.0, 10.0, 1.0) + vec3(0.5, 0.0, -0.0)) - 0.25;
	float e1 = length(p * vec3(1.0, 10.0, 1.0) + vec3(-0.5, 0.0, -0.0)) - 0.25;
	float t = min(m0, min(e0, e1));
	t = max(t0, -t);
	t = min(t, n0);
	return vec2(t, 0.0);
}

vec3 getnor(vec3 p) {
	vec2 d = vec2(0.001, 0.0);
	float t = map(p).x;
	return normalize(
		vec3(
			t - map(p + d.xyy).x,
			t - map(p + d.yxy).x,
			t - map(p + d.yyx).x));
}

void main( void ) {

	vec2 uv = ( 2.0 * gl_FragCoord.xy - resolution.xy ) / min(resolution.x, resolution.y);
	vec3 dir = normalize(vec3(uv, 1.0));
	vec3 pos = vec3(cos(time) * 2.0 + time * 2.0, 0, -2.0);
	float t = 0.1;
	for(int i = 0 ; i < 50; i++) {
		vec2 mi = map(dir * t + pos);
		t += mi.x * 0.5;
	}
	vec3 ip = dir * (t * 0.999) + pos;
	vec3 N = getnor(ip);
	vec3 col = vec3(0.0);
	col = vec3(t * 0.1);
	_GLF_color = vec4(col * N * 2.0 + t * 0.01, 1.0);

}