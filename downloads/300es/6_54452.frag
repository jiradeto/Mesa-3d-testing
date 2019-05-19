#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 resolution;


float f(float x)
{ /** you can change the plot function here **/
	return fract((x+time*4.));
}

bool cmp(float a, float b, float epsilon)
{
	return (abs(a-b))<epsilon;
}

void main( void ) {

	vec2 p = gl_FragCoord.xy / resolution.xy * 8.0 - 4.;
	vec2 plot = gl_FragCoord.xy / resolution.xy;
	
	if(cmp(p.y, f(p.x), 0.03))
		_GLF_color = vec4(1., 0., 0., 1.);
	
	else if (cmp(0.5, plot.x, 0.002) || cmp(0.5, plot.y, 0.004)) _GLF_color = vec4(0.0, 1.0, 0.0, 1.0);
	else if(cmp(mod(.5007-plot.x, 0.0625), 0., 0.0014) || cmp(mod(.5007-plot.y, 0.125), 0., 0.003))
	   _GLF_color = vec4(1.);
		
	else _GLF_color = vec4(.0);

}