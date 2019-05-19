#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;/*
 * Original shader from: https://www.shadertoy.com/view/Md2GDt
 */



// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

// --------[ Original ShaderToy begins here ]---------- //
// to-shadertoy preamble
#define t (time)
/*float time=iTime;vec2 resolution=iResolution.xy;*/float N(vec2 v){return fract(sin(dot

//orig: uniform float time;uniform vec2 resolution;float N(vec2 v){return fract(sin(dot
(vec2(7.,23.),v))*519.);}vec2 e=vec2(1.,0.),s,f,F;float M(vec2 v){F=floor(v);f=
fract(v);f*=f*(3.-2.*f);return mix(mix(N(F),N(F+e.xy),f.x),mix(N(F+e.yx),N(F+e.
xx),f.x),f.y);}float B(vec2 v){return M(v)+.5*M(v*2.)+.2*M(v*8.);}
float l=0.,r;void mainImage( out vec4 fragColor, in vec2 fragCoord ){for(int i=0;i<99;++i){vec3 q=vec3(fragCoord.xy/resolution
-.5,1.)*l;q.z-=2.;q.x*=1.8;r=length(q)-1.;s=42.*(q.xy+M(vec2(r-t*.5))-M(vec2(r-
t*.3))*e.xy);l+=.4*(r+.2*B(s));}fragColor=1.-vec4(B(s),B(s+.1),B(s+.3),1.);}
// --------[ Original ShaderToy ends here ]---------- //

void main(void)
{
    mainImage(_GLF_color, gl_FragCoord.xy);
    _GLF_color.a = 1.0;
}