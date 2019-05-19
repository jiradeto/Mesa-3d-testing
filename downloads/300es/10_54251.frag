#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float map(vec3 p) {
	return p.y;
}

vec3 rotate (vec3 dir, float angle) {
 	dir =  vec3(dir.x * cos(angle) - dir.z * sin(angle),
		dir.y,
		dir.x * sin(angle) + dir.z * cos(angle));
	return dir;
}

void main( void ) {

	vec2 position = ( 2.* gl_FragCoord.xy - resolution.xy )/ min(resolution.x, resolution.y);

	float color = 0.0;
	vec3 eye = vec3(0.,2.,0.);
	vec3 raydir = rotate(normalize(vec3(position.xy, -1.)), time * .1);
	vec3 p = eye;
	int hit = -1;
	
	for (int i = 0; i < 100; i++) {
		float d = map(p);
		if (d < 0.001) {
			hit = i;
			break;
		}
		p += d * raydir * .8;
	}
	
	if (hit > -1) {
		color = ((fract(p.x) < .5 == fract(p.z) < .5) ? 1. : 0.) * .2 + .6;
		color *= 1. - float(hit)/100.;
	}

	_GLF_color = vec4( vec3( color ), 1.0 );

}