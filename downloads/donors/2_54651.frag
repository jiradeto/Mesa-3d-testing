// https://www.shadertoy.com/view/XtVXWc

#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

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
    
    gl_FragColor = vec4(col, 1.0);	
}