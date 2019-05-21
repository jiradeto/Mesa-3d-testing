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

uniform vec2 mouse;

float dist_sphere(vec3 pos, vec3 cent, float radius)
{
 return length(pos - cent) - radius;
}
float dist_plane(vec3 pos, vec3 point, vec3 norm)
{
 return dot(point - pos, normalize(norm));
}
float dist_ground(vec3 pos)
{
 return pos.y;
}
float dist_func(vec3 pos)
{
 float plane1 = dist_plane(pos, vec3(0., 0.2, 25.), vec3(1., 1., 1.));
 float plane2 = dist_plane(pos, vec3(0., 0., 25.), vec3(- 1., 0.1, 1.));
 float ground = dist_ground(pos);
 if(((gl_FragCoord.x < 0.0)))
  {
   return 1.0;
  }
 float dist = min(plane1, plane2);
 // buggy code!
 do
  {
   dist = min(dist, ground);
   }
 while(((gl_FragCoord.x < 0.0)));
 return dist;
}
float refr_dist_func(vec3 pos)
{
 vec3 cent = vec3((mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float sphere = dist_sphere(pos, cent, 1.);
 return sphere;
}
vec3 norm_func(vec3 pos)
{
 float dx = dist_func(pos + vec3(1e-3, 0., 0.)) - dist_func(pos - vec3(1e-3, 0., 0.));
 float dy = dist_func(pos + vec3(0., 1e-3, 0.)) - dist_func(pos - vec3(0., 1e-3, 0.));
 float dz = dist_func(pos + vec3(0., 0., 1e-3)) - dist_func(pos - vec3(0., 0., 1e-3));
 return normalize(- vec3(dx, dy, dz));
}
vec3 refr_norm_func(vec3 pos)
{
 float dx = refr_dist_func(pos + vec3(1e-3, 0., 0.)) - refr_dist_func(pos - vec3(1e-3, 0., 0.));
 float dy = refr_dist_func(pos + vec3(0., 1e-3, 0.)) - refr_dist_func(pos - vec3(0., 1e-3, 0.));
 float dz = refr_dist_func(pos + vec3(0., 0., 1e-3)) - refr_dist_func(pos - vec3(0., 0., 1e-3));
 return normalize(- vec3(dx, dy, dz));
}
float refr_func(vec3 pos)
{
 vec3 cent = vec3((- vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float sphere = dist_sphere(pos, cent, 2.);
 if(sphere < 0.)
  {
   return .6;
  }
 return 1.;
}
float checker(vec2 uv)
{
 uv = mod(uv, 1.) - .5;
 return step(uv.x * uv.y, 0.);
}
vec3 color_func(vec4 pos)
{
 if(pos.w > 100.)
  {
   return vec3(.0);
  }
 if(pos.y < 1e-2)
  {
   return vec3(checker(pos.xz));
  }
 return vec3(.1);
}
vec4 trace_pos(vec3 src, vec3 dir)
{
 vec3 pos = src;
 float dist = 0.;
 float d = dist_func(pos);
 float rd = abs(refr_dist_func(pos));
 for(
     int t = 0;
     t < 100;
     t ++
 )
  {
   pos += dir * min(d, rd);
   dist += min(d, rd);
   d = dist_func(pos);
   rd = abs(refr_dist_func(pos));
   if(d < 1e-3)
    {
     break;
    }
   if(abs(rd) < 1e-3)
    {
     vec3 norm = refr_norm_func(pos);
     float k = refr_func(pos);
     dir = refract(normalize(dir), normalize(norm), 1. / k);
     pos += dir * min(d, rd);
     dist += min(d, rd);
    }
  }
 return vec4(pos, dist);
}
float is_clear(vec3 src, vec3 tgt)
{
 vec3 dir = normalize(tgt - src);
 vec3 pos = src;
 float dist = 0.;
 float d = min(dist_func(pos), length(pos - tgt));
 for(
     int t = 0;
     t < 100;
     t ++
 )
  {
   if(length(pos - tgt) < 1e-1)
    {
     return exp(- dist * 0.05);
    }
   pos += dir * d;
   dist += d;
   d = dist_func(pos);
   if(d < 1e-6)
    {
     return 0.;
    }
   d = min(dist_func(pos), length(pos - tgt));
  }
 return 0.;
}
vec3 trace_clr(vec3 src, vec3 dir)
{
 vec3 light_pos[3];
 light_pos[0] = vec3(1., 6., 2.);
 light_pos[1] = vec3(0., 7., 3.);
 light_pos[2] = vec3(2., 8., 4.);
 vec3 light_clr[3];
 light_clr[0] = vec3(1., 0., 0.);
 light_clr[1] = vec3(0., 1., 0.);
 light_clr[2] = vec3(0., 0., 1.);
 vec3 clr = vec3(0.);
 vec4 pos = trace_pos(src, dir);
 vec3 norm = norm_func(pos.xyz);
 for(
     int l = 0;
     l < 3;
     l ++
 )
  {
   vec3 l_dir = normalize(light_pos[l] - pos.xyz);
   float str = dot(norm, - l_dir) * is_clear(pos.xyz, light_pos[l]);
   clr += clamp(light_clr[l] * color_func(pos) * str, 0., 1.);
  }
 float s = .0;
 for(
     int t = 0;
     t < 3;
     t ++
 )
  {
   if(pos.y > 1e-2)
    {
     dir = reflect(dir, norm);
     pos.xyz += dir * 1e-1;
     pos = trace_pos(pos.xyz, dir);
     norm = norm_func(pos.xyz);
     for(
         int l = 0;
         l < 3;
         l ++
     )
      {
       vec3 l_dir = normalize(light_pos[l] - pos.xyz);
       float str = dot(norm, - l_dir) * is_clear(pos.xyz, light_pos[l]);
       clr += clamp(light_clr[l] * color_func(pos) * str, 0., 1.);
      }
     s *= 0.5;
    }
  }
 return clr;
}
void main(void)
{
 vec2 uvt = (gl_FragCoord.xy - vec2(256.0, 256.0).xy * .5) / min(256.0, 256.0);
 vec3 dir = normalize(vec3(uvt, 1.));
 vec3 color = trace_clr(vec3(0., 2., 0.), dir);
 _GLF_color = vec4(color, 1.0);
}


