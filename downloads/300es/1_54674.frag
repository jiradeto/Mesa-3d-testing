#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision highp float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform vec2 surfaceSize;
varying vec2 surfacePosition;

float rand(vec2 co){
	return fract(dot(co,co));
}

void main( void ) {
	
	float p = (gl_FragCoord.y * resolution.x + gl_FragCoord.x) / (resolution.x * resolution.y);
	vec2 pos = surfacePosition;//vec2(p,1.0-p)-0.5;
	float col = rand(pos);
	vec3 o = vec3(1.0,2.0,4.0)*col+col;
	o = fract(o*p+p);
	o *= dot(o,o);
	gl_FragColor = vec4(o, 1.0);

}