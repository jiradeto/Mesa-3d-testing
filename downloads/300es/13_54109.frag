#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define PI 3.14159

float flower(vec2 pos)
{
	float angle = atan(pos.y,pos.x);
	angle += time;
	float d = abs(sin(angle * 3.0));
	float s = abs(sin(time * pos.x * pos.y));
	float len = length(pos / s);
	return step(len,d);
}

vec3 blendColor(vec2 pos)
{
	vec3 color = vec3(abs(sin(time)*0.85),abs(cos(time*0.85)) * 0.45,cos(time*0.52)*0.62);
	return color;
}

vec3 backColor(vec2 pos)
{
	vec3 color = vec3(sin(time) * 0.58,sin(time + cos(time*0.88))*0.6 + 0.2,abs(cos(time * 1.2) * 0.4));
	return color;
}

float circle(vec2 pos)
{
	return length((pos - vec2(0.5)) / abs(sin(time*2.0) * 0.97));	
}

vec3 back(vec2 pos)
{
	float n = 4.0;
	vec2 st = fract(pos*n);
	vec3 color = vec3(cos(time*0.24) * 0.85,abs(sin(time*0.14) + 0.2),cos(time*0.87)*0.75);
	return vec3(step(circle(st),0.5)) * color;
}


vec4 image(vec2 pos)
{
	vec3 color = vec3(0.68,0.48,0.84);
	float h = flower(pos);
	float l = length(pos);
	color *= h * l;
	color /= blendColor(pos);
	color = mix(color,back(pos),0.3);
	color = mix(color,backColor(pos),0.4);
	return vec4(color,1.0);
}

void main( void ) 
{
	vec2 pos = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x,resolution.y);
	_GLF_color = image(pos);
}