#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

void main(){
    vec2 st = gl_FragCoord.xy/resolution.xy;
    vec2 toCenter = vec2(0.5,0.5)-st;
    float d = length(toCenter);
    float dd = length(sin(abs(st)-.1*time));
    vec3 color = vec3(toCenter * sin(dd*d*time), sin(dd*d*time) * .5);
    _GLF_color = vec4(color, 1.);
}
