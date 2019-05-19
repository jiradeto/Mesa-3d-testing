#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

void main()
{
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x+mouse.x, resolution.y+mouse.y);
	vec2 f = vec2(0.0);
	vec3 c = vec3(0.5);
	float light = 0.0;
	
	for (float x = 0.1; x < 11.0; x += 1.0)
	{
		f = vec2(sin(sin(time + uv.x * x) - uv.y * dot(vec2(x + uv.y), vec2(sin(x), cos(x)))));
		light += (0.04 / distance(uv, f)) - (0.01 * distance(vec2((sin(time + uv.y))), vec2(uv)));
		c.y *= distance(uv, f) / distance(vec2(sin(time + uv.y)), vec2(uv));
		c.z -= sin(time) * .2;
	}
	
	c *= light;
	
	_GLF_color = vec4(c, 1.0);
}