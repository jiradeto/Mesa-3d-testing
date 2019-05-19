#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

float pulse(float velocity) {
	return abs(sin(time * velocity));
}

float vertical() {
	
	vec2 diagonal = (mouse);
	
	return diagonal.y;
}

vec4 red(){
	vec3 color = vec3(vertical(),0.0,pulse(1.0));
	float alpha = 1.0;
	return vec4(color, alpha);	
}

void main( void ) {
	_GLF_color = red();
}