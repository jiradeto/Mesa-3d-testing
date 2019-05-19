#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

#extension GL_OES_standard_derivatives: enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float hash(float x) {
    return fract(sin(x * 133.3) * 13.13);
}
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate(float t,vec2 a){
	mat2 s = mat2(vec2(cos(t), -sin(t)), vec2(sin(t), cos(t)));
	return s*a;
}

void main(void) {
	float x = gl_FragCoord.x;
	float y = gl_FragCoord.y;
	float s = rand(gl_FragCoord.xy);
	float s2 = rand(rotate(0.0000001,gl_FragCoord.xy) + vec2(0.0,0.0));
	float t = 0.97;
	if(s2 > t|| s > t){
		_GLF_color = vec4(1.0, 0.0, 0.0, 1.0);
	}else{
		_GLF_color = vec4(0.0, 0.0, 0.0, 1.0);
	}

}