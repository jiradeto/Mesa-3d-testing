#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




precision mediump float;
uniform float time; // time
uniform vec2  r; // resolution

void main(void){
    float r = abs(sin(time)); // *1
    float g = abs(cos(time));
    float b = (r + g) / 2.0; // *2
    _GLF_color = vec4(r, g, b, 2.0);
}