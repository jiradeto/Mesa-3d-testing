#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

// it's ya boi trix

uniform vec2 resolution;
uniform float time;

void main()
{
	vec2 p=2.8*(2.0*gl_FragCoord.xy-resolution)
		/max(resolution.x,resolution.y);
	
	for(int i=1;i<19;i++)
	{
		vec2 newp=p;
		float speed = 123.0; // speed control
		newp.x+=0.4/float(i)*sin(float(i)*p.y+time/(100.0/speed)+0.3*float(i))+1.0;
		newp.y+=0.6/float(i)*sin(float(i)*p.x+time/(100.0/speed)+0.3*float(i+10))-1.4;
		p=newp;
	}
	float col=0.5+(sin(p.x) + cos(p.y))/4.;
	_GLF_color=vec4(col*1.5, col, col/2., 1.0);
}
