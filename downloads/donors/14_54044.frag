

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
	gl_FragColor = red();
}