#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;



void main( void ) {
 	vec2 c = vec2(sin(time*1.3), cos(time*0.3));
	vec2 z = (gl_FragCoord.xy - resolution*0.5) * 5.0 / resolution.x;
	float i = 0.0;
	for (int it=0;it<100;it+=1) {
		z = (z.x*z.x+z.y*z.y<4.0)? vec2(z.x*z.x-z.y*z.y, -2.0*z.x*z.y) + c:z;
		i = (z.x*z.x+z.y*z.y<4.0)?i+1.0:i;
	}
	
	_GLF_color = i/128.0 * vec4(1.0, 0.3, 0.7, 1.0);
}