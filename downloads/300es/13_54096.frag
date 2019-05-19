#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

	
int renderjules(vec2 c) {
	vec2 z = (gl_FragCoord.xy - resolution*0.5) * 3.0 / resolution.x;
	int i=0;
	for (int it=0;it<255;it+=1) {
		z = (z.x*z.x+z.y*z.y<4.0)? vec2(z.x*z.x-z.y*z.y, -2.0*z.x*z.y) - c:z;
		i = (z.x*z.x+z.y*z.y<4.0)?i+1:i;
	}
	return i;
}


void main( void ) {
	vec2 c = vec2(-0.3,-0.40) + vec2(sin(time),cos(time))*0.001;
	
	int i = renderjules(c);	
	
	
	
	_GLF_color = vec4(float(i)/256.0 * vec3(sin(time*3.0)*0.5+0.5, 0.5, 0.4), 1.0);
}