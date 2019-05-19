#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;





uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

void main(void)
{
    vec2 shenanigans = (gl_FragCoord.xy / resolution.xy);
    vec2 fr = fract(shenanigans.xy);
    float r = abs(sin(time * 0.2) * fr.y);
    float g = abs(sin(time * 0.5));
    float b = abs(sin(time * 2.3)* fr.x);
    _GLF_color = vec4(r, g, b, 1.);
}