#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;/*
 * Original shader from: https://www.shadertoy.com/view/XtyfDc
 */



// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// shadertoy globals
float iTime = 0.0;
vec3  iResolution = vec3(0.0);

// --------[ Original ShaderToy begins here ]---------- //
// variant of https://shadertoy.com/view/4lGfDc

#define S(r)  smoothstep(  9./R.y, 0., abs( U.x -r ) -.1 )
void mainImage(inout vec4 O, vec2 u) {
    vec2 R = iResolution.xy,
         U = u+u - R;
    U =  length(U+U)/R.y    /* .955 = 2/pi  1.05 = pi/3 */
         *cos( ( mod( .955*atan(U.y,U.x) - iTime ,1.5) - .72 ) *1.4 -vec2(0,1.97));
    U.x+U.y < 1.85 ? O += mix( .5* S(.5), S(.7), .5+.5*U.y ) : O ;
}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    iTime = time;
    iResolution = vec3(resolution, 0.0);
float ss = 16.0*sin(time*0.9);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
	
    _GLF_color.rgb = vec3(0.0);
    mainImage(_GLF_color, gg);
    _GLF_color.a = 1.0;
}