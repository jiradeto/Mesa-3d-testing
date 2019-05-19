#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec2 pos=(gl_FragCoord.xy-resolution/2.0)/resolution.x*5.0; //distance from left to right is 4
	vec2 mou=((mouse*resolution.xy)-resolution/2.0)/resolution.x*5.0;
	
	vec2 z=vec2(0.0,0.0);
	float m=99999.0;
	for (int i=0; i<300; i++){
		z=vec2(z.x*z.x-z.y*z.y,2.0*z.x*z.y)+pos;
		float len=length(mou-z);
		if (len<m){m=len;}
	}
	float col=m/1.5;
	_GLF_color=vec4(col*0.2,0.8-col*0.4,col*0.7,1.0);
}