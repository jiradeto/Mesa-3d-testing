#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	float y = gl_FragCoord.y / resolution.y;
	
	vec3 yellow = vec3(1.0, 1.0, 0.0);
	vec3 red = vec3(1.0, 0.0, 0.0);
	vec3 blue = vec3(0.0, 0.0, 1.0);
	vec3 green = vec3(0.0, 1.0, 0.0);
	float step1 = 0.0;
	float step2 = 0.33;
	float step3 = 0.66;
	float step4 = 1.0;
	
	vec3 color;
	
	if(y <= 0.33){
		color = mix(red, yellow, smoothstep(step1, step2, y));
	} else if(y <= 0.66) {
		color = mix(yellow, green, smoothstep(step2, step3, y));
	} else {
		color = mix(green, blue, smoothstep(step3, step4, y));
	}
	


	_GLF_color = vec4(color, 1.0);

}