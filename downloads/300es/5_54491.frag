#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform vec2 resolution;
uniform float time;

void main() {
  vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution.x, resolution.y);

  float v = 0.0;
  for (int i = 0; i < 80; i++) 
  {
    float s = time + float(i) * 0.0075;
    vec2 mpos = 0.8 * vec2(sin(s * 5.0), - cos(s * 6.0));
    float t = 0.01 / length(mpos - pos);
    v += pow(t, 2.0);
  }

  _GLF_color = 1.0 * vec4(vec3(v), 1.0);
}

