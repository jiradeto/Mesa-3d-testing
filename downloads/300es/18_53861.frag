#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {	
	float amount = 1./10.;
	
	vec2 pos = ( gl_FragCoord.xy / resolution.xy );
	
	float thickness = sin(pos.y / 50.) + 0.02;
	
	vec3 color = vec3(0.6, 0.6, 0.6) * vec3(sin(pos.y) + .2, sin(pos.x * sin(time)), cos(time) + sin(pos.y));
	
	float addition = pos.x * 2.5 + sin(time/2.0+pos.y)/3.0;
	
	if (mod(pos.y + addition, amount) <= thickness) {
		color = vec3(0, 0, 0);
	}
	
	_GLF_color = vec4(color, 1.0);

}