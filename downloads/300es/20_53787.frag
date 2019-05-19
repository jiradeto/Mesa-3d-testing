#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void)
{
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	float scale = resolution.y / resolution.x;
	uv=((uv-0.5)*5.5);
	uv.y*=scale;
	uv.y+=0.0;
	uv.x-=0.5;
 
 
	vec2 z = vec2(0.0, 0.0);
	vec3 c = vec3(0.0, 0.0, 0.0);
	float v;
 
	for(int i=0;(i<180);i++)
	{
 
		if(((z.x*z.x+z.y*z.y) >= 4.0)) break;
		z = vec2(z.x*z.x - z.y*z.y, 2.0*z.y*z.x) + uv;
 
 
		if((z.x*z.x+z.y*z.y) >= 2.0)
		{
			c.b=float(i)/20.0;
			c.r=sin((float(i)/5.0));
		}
 
	}
 
 
	_GLF_color = vec4(c,1.0);
}