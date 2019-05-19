#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 rot(vec2 p, float a) {
	float c = cos(a), s = sin(a);
	return vec2(
		c * p.x - s * p.y,
		s * p.x + c * p.y);
		
}


float map(vec3 p) {
	//p.x += sin(p.z * 0.25 + time) * 2.0;
	//p.y += cos(p.z * 0.25 + time) * 2.0;
	//p.xy = rot(p.xy, -p.z * 0.1);
	vec3 m = mod(p, 2.0) - 1.0;
	
	return length(max(abs(m) - 0.1, 0.0)) - 0.001;
}

void main( void ) {

	vec2 uv = ( 2.0 * gl_FragCoord.xy - resolution.xy ) / min(resolution.x, resolution.y);
	vec3 dir = normalize(vec3(uv, 1.85));
	vec3 pos = vec3(0, 0, 0);//time * 2.0);
	//dir.yz = rot(dir.yz, time * 0.1);
	//dir.zx = rot(dir.zx, time * 0.1);
	float t = 0.0;
	for(int i = 0 ; i < 90; i++) {
		float k = map(dir * t + pos);
		t += k * 0.85;
	}
	vec3 ip = dir;
	gl_FragColor = vec4(t * 0.005 * max(vec4(1.0), mix(vec4(1,2,5,4), vec4(4,3,2,1), t * 0.005)));

}