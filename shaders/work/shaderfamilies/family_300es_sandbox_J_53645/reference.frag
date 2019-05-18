#version 300 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)          (Y)
#define _GLF_ONE(X, Y)           (Y)
#define _GLF_FALSE(X, Y)         (Y)
#define _GLF_TRUE(X, Y)          (Y)
#define _GLF_IDENTITY(X, Y)      (Y)
#define _GLF_DEAD(X)             (X)
#define _GLF_FUZZED(X)           (X)
#define _GLF_WRAPPED_LOOP(X)     X
#define _GLF_WRAPPED_IF_TRUE(X)  X
#define _GLF_WRAPPED_IF_FALSE(X) X
#define _GLF_SWITCH(X)           X
#endif

// END OF GENERATED HEADER
precision highp float;

layout(location = 0) out vec4 _GLF_color;

uniform vec2 injectionSwitch;

uniform float time;

uniform vec2 mouse;

uniform vec2 resolution;

vec3 color;

float c, p;

vec2 b;

void main(void)
{
 vec2 uv = gl_FragCoord.xy / resolution.xy;
 float scale = resolution.x / resolution.y;
 uv = uv - 0.5;
 uv.y /= scale;
 b = uv * 256.0 + 256.0;
 c = 0.0;
 for(
     float i = 16.0;
     i >= 1.0;
     i -= 1.0
 )
  {
   p = pow(2.0, i);
   if((p < b.x) ^^ (p < b.y))
    {
     c += p;
    }
   if(p < b.x)
    {
     b.x -= p;
    }
   if(p < b.y)
    {
     b.y -= p;
    }
  }
 c = mod(c / 128.0, 1.0);
 color = vec3(sin(c + uv.x * cos(uv.y * 1.2)), tan(c + uv.y - 0.3) * 1.1, cos(c - uv.y + 0.9));
 _GLF_color = vec4(color, 1.0);
}
