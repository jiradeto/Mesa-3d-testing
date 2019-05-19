#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;// https://www.shadertoy.com/view/4dcyW7






uniform float time;
uniform vec2 resolution;

void main( void )
{
    vec2 R = resolution.xy;
    vec2 uv = (gl_FragCoord.xy - 0.5 * R) / R.y + 0.5;
    
	vec2 a = vec2(0.5,0.5);
	
	a.x = 0.5 + 
	      0.01 * 						// wiggle
	      sin(uv.y * 50.0 + time * 10.0);

	
    float dist = length(uv - a);
	
	
    float sunOutline = smoothstep(
	    0.0, 
	    -0.15, // blur
	    max(dist - 0.5, -1.0));
   
    //vec3 colour = vec3(sunOutline);
    vec3 colour = sunOutline * mix(vec3(4.0, 0.0, 0.2), vec3(1.0, 1.1, 0.0), uv.y);  
       
    // 
	
    float glow = max(0.0, 1.0 - dist * 1.25);
	
    glow = min(glow * glow * glow, 0.325);
	
    colour += glow * vec3(1.5, 0.3, (sin(time)+ 1.0));	
	
    //
	
    _GLF_color = vec4(colour, sunOutline);	
}