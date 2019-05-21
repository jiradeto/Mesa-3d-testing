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

float dBox(vec3 p, vec3 b)
{
 vec3 d = abs(p) - b;
 return min(max(d.x, max(d.y, d.z)), 0.0) + length(max(d, 0.0)) - 0.2;
}
vec2 rep(inout vec2 p, vec2 o)
{
 vec2 c = floor((p + o) / (o * 2.0));
 p = mod(p + o, o * 2.00) - o;
 return c;
}
vec2 map(vec3 p)
{
 p.y += 1.0;
 vec2 c = rep(p.xz, vec2(.7));
 return vec2(dBox(p, vec3(.5, 1.0 + 0.27 * cos(c.x + 3.0 * c.y), .5)), abs(c.x + c.y));
}
vec2 intersect(vec3 ro, vec3 rd)
{
 float td = 0.0;
 for(
     int i = 0;
     i < 128;
     i ++
 )
  {
   vec2 s = map(ro + rd * td);
   if(abs(s.x) < 0.001)
    {
     return vec2(td, s.y);
    }
   do
    {
     td += s.x * .5;
    }
   while(((injectionSwitch.x > injectionSwitch.y)));
  }
 return vec2(10.0, - 1.0);
}
vec3 normal(vec3 p)
{
 vec3 n = vec3(map(p + vec2(0.01, 0.0).xyy).x - map(p - vec2(0.01, 0.0).xyy).x, map(p + vec2(0.01, 0.0).yxy).x - map(p - vec2(0.01, 0.0).yxy).x, map(p + vec2(0.01, 0.0).yyx).x - map(p - vec2(0.01, 0.0).yyx).x);
 return normalize(n);
}
vec3 lighting(vec3 p, vec3 l, vec3 rd)
{
 vec3 lig = normalize(l);
 vec3 n = normal(p);
 vec3 ref = reflect(lig, n);
 float amb = clamp((p.y + 0.25) * 1.2, 0.0, 1.0);
 float dif = clamp(dot(n, lig), 0.0, 1.0);
 float spe = pow(clamp(dot(ref, rd), 0.0, 1.0), 52.0);
 vec3 lin = vec3(0);
 lin += amb;
 lin += dif * vec3(.3, .27, .25);
 lin += 2.0 * spe * vec3(1, .97, .1) * dif;
 return lin;
}
mat3 camera(vec3 e, vec3 la)
{
 vec3 f = normalize(la - e);
 vec3 r = normalize(cross(vec3(0, 1, 0), f));
 vec3 u = normalize(cross(f, r));
 return mat3(r, u, f);
}
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
 vec2 uv = - 1.0 + 2.0 * (fragCoord / vec2(256.0, 256.0).xy);
 do
  {
   uv.x *= 256.0 / 256.0;
  }
 while(((injectionSwitch.x > injectionSwitch.y)));
 // BUGGY CODE!
 vec3 rd = camera(vec3(5.0, 5.0, 0.0), vec3(0)) * normalize(vec3(uv, 2.0));
 vec3 col = vec3(0);
 vec2 i = intersect(vec3(5.0, 5.0, 0.0), rd);
 if(i.y > - 1.0)
  {
   vec3 p = vec3(5.0, 5.0, 0.0) + rd * i.x;
   col = mix(vec3(.0, .75, .75), vec3(.74, 0, .75), abs(cos(i.y)));
   col *= lighting(p, vec3(- 3.0, 4.0, 0.0), rd);
  }
 fragColor = vec4(col, 1.0);
}
void main(void)
{
 mainImage(_GLF_color, gl_FragCoord.xy);
}


