#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float distorsion(vec2 p) {
	return sin(p.x + p.y) + tan(p.y/3.+sin(time)) + length(p);
}

float map(vec3 p) {
	return p.y - distorsion(p.xz)/4.;
}

vec3 normal(vec3 p) {
	vec2 e = vec2(0.001, 0.);
	return normalize(vec3(
		map(p+e.xyy)-map(p-e.xyy),
		map(p+e.yxy)-map(p-e.yxy),
		map(p+e.yyx)-map(p-e.yyx)
		));
}

vec3 lightdir = vec3(.5,.5,1.);
float light(vec3 p) {
	return dot(normal(p),-lightdir)*.2+.7;
}

vec3 roty(vec3 r, float a) {
	return vec3(
		r.x*cos(a)-r.z*sin(a),
		r.y,
		r.z*cos(a)+r.x*sin(a));
}

void main( void ) {

	vec2 position = ( 2.*gl_FragCoord.xy-resolution.xy ) / resolution.y;
	
	vec3 eye = vec3(0.,3.,-4.);
	vec3 p = eye;
	vec3 raydir = normalize(vec3(position.x, position.y - .3, 1.));
	raydir = roty(raydir, time/10.);
	float hit = -1.;
	
	for (float i = 0.; i < 100.; i++) {
		float d = map(p);
		if (d < 0.001) { hit = i; break; }
		p += d * raydir ;
	}
	
	float color = clamp((hit > -1.) ? (light(p) - hit/100.) : 0., 0., 1.);
	_GLF_color = vec4( mix(vec3(.4,0.3,0.1), vec3(.9,.9,.4), color ), 1.0 );

}