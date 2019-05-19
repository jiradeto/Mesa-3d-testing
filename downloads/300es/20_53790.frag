#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	

	vec2 position = (gl_FragCoord.xy / resolution.y) - vec2(1.0+cos(time)*0.5,0.5+sin(time)*0.2);
	
	vec3 color = vec3(1.0,0.0,0.0);
	
	float d = position.x*position.x+position.y*position.y*2.0;
	
	

	if(d < 0.1){
		d*=cos(time)*100.0;
		color = vec3(0.0,d,1.0);
	}
	
	else{
		color = vec3(1.0*d,0.0,0.0);
	}
	

	_GLF_color = vec4(color,1.0);

}