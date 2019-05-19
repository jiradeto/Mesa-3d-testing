#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float ring(vec2 st)
{
	float t = 0.1 / abs(abs(sin(time) * 0.87) + 0.2 - length(st));	
	return t;
}


float flower(vec2 st)
{
	float u = sin((atan(st.y,st.x) + time * 0.5) * 8.0);
	float t = 0.1 / abs(u - length(st));
	return t;
}

vec3 back(vec2 st)
{
	vec3 color = vec3(cos(abs(sin(time * 0.38)-0.2)),sin(st.y * st.x + time),cos(time*0.854)*sin(time*0.25)*0.83);	
	return color;
}

vec4 mainImage(vec2 st)
{
	float t = flower(st);
	float r = ring(st);
	float a = smoothstep(t,r,0.73);
	vec3 color = vec3(sin(time) * 0.83,cos(time*0.85)*0.74,sin(time*0.84)*0.13) * a;
	color = mix(color,back(st),0.5);
	return vec4(color,1.0);
}

void main( void ) {

	float ss = 8.0*sin(time);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
	
	vec2 pos = (gg * 2.0 - resolution.xy) / min(resolution.x,resolution.y);
	_GLF_color = mainImage(pos);
}