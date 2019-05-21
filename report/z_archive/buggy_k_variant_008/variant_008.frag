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

vec2 ObjUnion(in vec2 obj0, in vec2 obj1)
{
 if(obj0.x < obj1.x)
  {
   return obj0;
  }
 else
  {
   return obj1;
  }
}
vec2 rot(vec2 p, float r)
{
 vec2 ret;
 ret.x = p.x * cos(r) - p.y * sin(r);
 ret.y = p.x * sin(r) + p.y * cos(r);
 return ret;
}
vec2 rotsim(vec2 p, float s)
{
 vec2 ret = p;
 ret = rot(p, - 3.14159265 / (s * 2.0));
 do
  {
   ret = rot(p, floor(atan(ret.x, ret.y) / 3.14159265 * s) * (3.14159265 / s));
  }
 while(((float(gl_FragCoord.y) < 0.1)));
 return ret;
}
vec2 obj0(in vec3 p)
{
 p.y = p.y - 1.5;
 p.xz = rotsim(p.xz, 32.0);
 p.z = p.z - 32.0;
 p.yz = rotsim(p.yz, 8.0);
 p.z = p.z - 3.0;
 p.xy = rotsim(p.xy, 2.0);
 float c1 = length(max(abs(p) - vec3(0.2, 0.2, 0.2), 0.0));
 float c3 = length(max(abs(p) - vec3(0.1, 4.0, 0.1), 0.0));
 return vec2(min(c1, c3), 0);
}
vec3 obj0_c(in vec3 p)
{
 return vec3(1.0, 0.5, 0.2);
}
vec2 obj1(vec3 p)
{
 p.y = p.y - 1.5;
 p.xz = rotsim(p.xz, 256.0);
 p.z = p.z - 32.0;
 p.yz = rotsim(p.yz, 48.0);
 p.z = p.z - 4.0;
 p.xy = rotsim(p.xy, 2.0);
 float c3 = length(max(abs(p) - vec3(0.1, 2.0, 0.1), 0.0));
 return vec2(c3, 1);
}
vec3 obj1_c(in vec3 p)
{
 return vec3(0.2, 0.5, 1.0);
}
vec2 inObj(in vec3 p)
{
 return ObjUnion(obj0(p), obj1(p));
}
void main(void)
{
 vec2 vPos = - 1.0 + 2.0 * gl_FragCoord.xy / vec2(256.0, 256.0).xy;
 vec3 prp = vec3(sin((- 0.1)) * 32.0, 0.0, cos((- 0.1)) * 32.0);
 vec3 vpn = normalize(vec3(0.0, 0.0, 32.0) - prp);
 vec3 u = normalize(cross(vec3(0, 1, 0), vpn));
 vec3 v = cross(vpn, u);
 vec3 scrCoord = prp + vpn * 3.5 + vPos.x * u * 256.0 / 256.0 + vPos.y * v;
 vec3 scp = normalize(scrCoord - prp);
 vec2 s = vec2(0.1, 0.0);
 vec3 c, p, n;
 float f = 1.0;
 for(
     int i = 0;
     i < 256;
     i ++
 )
  {
   if(abs(s.x) < .001 || f > 60.0)
    {
     break;
    }
   f += s.x;
   p = prp + scp * f;
   s = inObj(p);
  }
 if(f < 60.0)
  {
   if(s.y == 0.0)
    {
     c = obj0_c(p);
    }
   else
    {
     c = obj1_c(p);
    }
   float v1 = inObj(vec3(p.x + 0.01, p.y - 0.01, p.z - 0.01)).x;
   float v2 = inObj(vec3(p.x - 0.01, p.y - 0.01, p.z + 0.01)).x;
   float v3 = inObj(vec3(p.x - 0.01, p.y + 0.01, p.z - 0.01)).x;
   float v4 = inObj(vec3(p.x + 0.01, p.y + 0.01, p.z + 0.01)).x;
   n = normalize(vec3(v4 + v1 - v3 - v2, v3 + v4 - v1 - v2, v2 + v4 - v3 - v1));
   float b = dot(n, normalize(prp - p));
   _GLF_color = vec4((b * c + pow(b, 8.0)) * (1.0 - f * .01), 1.0);
  }
 else
  {
   _GLF_color = vec4(0, 0, 0, 1);
  }
}


