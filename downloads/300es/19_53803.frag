#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main(void)
  {
      vec2 pos = mod(gl_FragCoord.xy, vec2(50.0,50.0)) - vec2(25.0,25.0);
      float dist_squared = dot(pos, pos);
  
      _GLF_color = mix(vec4(.90, .90, .90, 1.0), vec4(.20, .20, .40, 1.0),
                         smoothstep(380.0, 420.0, dist_squared));
  }