#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec2 uv=(gl_FragCoord.xy-.5*resolution.xy)/resolution.y;
	uv*=3.;
	uv+=.5;
	float c=.5;
	float t=.05;
	float y=fract((uv.y*2.)+time+sin(uv.y+time))*(1.+((sin((uv.y*4.)-time)+1.)/4.));
	float l=.5-abs(uv.x-.5);
	if(y>=0.&&y<1.){
		l=.25-abs(uv.x-(.25+(y*.5)));
		if(l>=0.){c=l>t?1.:0.;}
		l=.25-abs(uv.x-(.75-(y*.5)));
		if(l>=0.){c=l>t?1.:0.;}
	}else{
		if(l>=0.){c=l>t?1.:0.;}
	}
	_GLF_color=vec4(c,c,c,0.);
}