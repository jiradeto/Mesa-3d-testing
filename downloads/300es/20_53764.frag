#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
  // _GLF_color is a special variable a fragment shader
  // is responsible for setting
  _GLF_color = vec4(1, 0, 0.5 / time, 1); // return redish-purple
}