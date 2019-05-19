#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;precision mediump float;
uniform float time;
uniform vec2 resolution;

void main()
{
    vec2 r = resolution,
    o = gl_FragCoord.xy - r/2.;
    o = vec2(length(o) / r.y - .35, atan(o.y,o.x));    
    vec4 s = .1*cos(1.5*vec4(0,1,2,3) + time + o.y + sin(o.y) * sin(time)*8.);
    vec4 e = s.yzwx;
    vec4 f = min(o.x-s,e-o.x);
    _GLF_color = dot(clamp(f*r.y,0.,1.),80.*(s-e)) * (s-0.1) - f;
}