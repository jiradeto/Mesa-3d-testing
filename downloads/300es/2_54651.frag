#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;// https://www.shadertoy.com/view/XtVXWc






uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void )
{
    vec2 p = gl_FragCoord.xy / resolution.xy;
	
    vec3 col = vec3(0.0);
    
    float r = 0.175;
	
    vec2 sp = vec2(p.x, 
		   p.y * (resolution.y / resolution.x)) - vec2(0.5 + 0.004 * sin(p.y * 80.0 + time * 5.0), 0.4);
	
    col += 1.0 * (1.0 - smoothstep(r, r + 0.05, length(sp)));
    
    _GLF_color = vec4(col, 1.0);	
}