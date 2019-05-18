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

uniform vec2 resolution;

vec3 color;

float c, p;

vec2 b;

uniform float GLF_live1time;

uniform vec2 GLF_live1mouse;

uniform vec2 GLF_live1resolution;

uniform vec2 GLF_live2mouse;

float GLF_live2dist_sphere(vec3 GLF_live2pos, vec3 GLF_live2cent, float GLF_live2radius)
{
 return length(GLF_live2pos - GLF_live2cent) - GLF_live2radius;
}
float GLF_live2dist_plane(vec3 GLF_live2pos, vec3 GLF_live2point, vec3 GLF_live2norm)
{
 return dot(GLF_live2point - GLF_live2pos, normalize(GLF_live2norm));
}
float GLF_live2dist_ground(vec3 GLF_live2pos)
{
 return GLF_live2pos.y;
}
float GLF_live2dist_func(vec3 GLF_live2pos)
{
 vec3 GLF_live2cent = vec3((GLF_live2mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float GLF_live2plane1 = GLF_live2dist_plane(GLF_live2pos, vec3(0., 0.2, 25.), vec3(1., 1., 1.));
 float GLF_live2plane2 = GLF_live2dist_plane(GLF_live2pos, vec3(0., 0., 25.), vec3(- 1., 0.1, 1.));
 float GLF_live2ground = GLF_live2dist_ground(GLF_live2pos);
 float GLF_live2dist = min(GLF_live2plane1, GLF_live2plane2);
 GLF_live2dist = min(GLF_live2dist, GLF_live2ground);
 return GLF_live2dist;
}
float GLF_live2refr_dist_func(vec3 GLF_live2pos)
{
 vec3 GLF_live2cent = vec3((GLF_live2mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float GLF_live2sphere = GLF_live2dist_sphere(GLF_live2pos, GLF_live2cent, 1.);
 return GLF_live2sphere;
}
vec3 GLF_live2norm_func(vec3 GLF_live2pos)
{
 float GLF_live2es = 1e-3;
 float GLF_live2dx = GLF_live2dist_func(GLF_live2pos + vec3(GLF_live2es, 0., 0.)) - GLF_live2dist_func(GLF_live2pos - vec3(GLF_live2es, 0., 0.));
 float GLF_live2dy = GLF_live2dist_func(GLF_live2pos + vec3(0., GLF_live2es, 0.)) - GLF_live2dist_func(GLF_live2pos - vec3(0., GLF_live2es, 0.));
 float GLF_live2dz = GLF_live2dist_func(GLF_live2pos + vec3(0., 0., GLF_live2es)) - GLF_live2dist_func(GLF_live2pos - vec3(0., 0., GLF_live2es));
 return normalize(- vec3(GLF_live2dx, GLF_live2dy, GLF_live2dz));
}
vec3 GLF_live2refr_norm_func(vec3 GLF_live2pos)
{
 float GLF_live2es = 1e-3;
 float GLF_live2dx = GLF_live2refr_dist_func(GLF_live2pos + vec3(GLF_live2es, 0., 0.)) - GLF_live2refr_dist_func(GLF_live2pos - vec3(GLF_live2es, 0., 0.));
 float GLF_live2dy = GLF_live2refr_dist_func(GLF_live2pos + vec3(0., GLF_live2es, 0.)) - GLF_live2refr_dist_func(GLF_live2pos - vec3(0., GLF_live2es, 0.));
 float GLF_live2dz = GLF_live2refr_dist_func(GLF_live2pos + vec3(0., 0., GLF_live2es)) - GLF_live2refr_dist_func(GLF_live2pos - vec3(0., 0., GLF_live2es));
 return normalize(- vec3(GLF_live2dx, GLF_live2dy, GLF_live2dz));
}
float GLF_live2refr_func(vec3 GLF_live2pos)
{
 vec3 GLF_live2cent = vec3((GLF_live2mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float GLF_live2sphere = GLF_live2dist_sphere(GLF_live2pos, GLF_live2cent, 2.);
 if(GLF_live2sphere < 0.)
  {
   return .6;
  }
 return 1.;
}
float GLF_live2checker(vec2 GLF_live2uv)
{
 GLF_live2uv = mod(GLF_live2uv, 1.) - .5;
 return step(GLF_live2uv.x * GLF_live2uv.y, 0.);
}
vec3 GLF_live2color_func(vec4 GLF_live2pos)
{
 if(GLF_live2pos.w > 100.)
  {
   return vec3(.0);
  }
 if(GLF_live2pos.y < 1e-2)
  {
   return vec3(GLF_live2checker(GLF_live2pos.xz));
  }
 return vec3(.1);
}
vec4 GLF_live2trace_pos(vec3 GLF_live2src, vec3 GLF_live2dir)
{
 vec3 GLF_live2pos = GLF_live2src;
 float GLF_live2dist = 0.;
 float GLF_live2d = GLF_live2dist_func(GLF_live2pos);
 float GLF_live2rd = abs(GLF_live2refr_dist_func(GLF_live2pos));
 {
  int GLF_live2_looplimiter0 = 0;
  for(
      int GLF_live2t = 0;
      GLF_live2t < 100;
      GLF_live2t ++
  )
   {
    if(GLF_live2_looplimiter0 >= 5)
     {
      break;
     }
    GLF_live2_looplimiter0 ++;
    GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
    GLF_live2dist += min(GLF_live2d, GLF_live2rd);
    GLF_live2d = GLF_live2dist_func(GLF_live2pos);
    GLF_live2rd = abs(GLF_live2refr_dist_func(GLF_live2pos));
    if(GLF_live2d < 1e-3)
     {
      break;
     }
    if(abs(GLF_live2rd) < 1e-3)
     {
      vec3 GLF_live2norm = GLF_live2refr_norm_func(GLF_live2pos);
      float GLF_live2k = GLF_live2refr_func(GLF_live2pos);
      GLF_live2dir = refract(normalize(GLF_live2dir), normalize(GLF_live2norm), 1. / GLF_live2k);
      GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
      GLF_live2dist += min(GLF_live2d, GLF_live2rd);
     }
   }
 }
 return vec4(GLF_live2pos, GLF_live2dist);
}
float GLF_live2is_clear(vec3 GLF_live2src, vec3 GLF_live2tgt)
{
 vec3 GLF_live2dir = normalize(GLF_live2tgt - GLF_live2src);
 vec3 GLF_live2pos = GLF_live2src;
 float GLF_live2dist = 0.;
 float GLF_live2d = min(GLF_live2dist_func(GLF_live2pos), length(GLF_live2pos - GLF_live2tgt));
 {
  int GLF_live2_looplimiter1 = 0;
  for(
      int GLF_live2t = 0;
      GLF_live2t < 100;
      GLF_live2t ++
  )
   {
    if(GLF_live2_looplimiter1 >= 5)
     {
      break;
     }
    GLF_live2_looplimiter1 ++;
    if(length(GLF_live2pos - GLF_live2tgt) < 1e-1)
     {
      return exp(- GLF_live2dist * 0.05);
     }
    GLF_live2pos += GLF_live2dir * GLF_live2d;
    GLF_live2dist += GLF_live2d;
    GLF_live2d = GLF_live2dist_func(GLF_live2pos);
    if(GLF_live2d < 1e-6)
     {
      return 0.;
     }
    GLF_live2d = min(GLF_live2dist_func(GLF_live2pos), length(GLF_live2pos - GLF_live2tgt));
   }
 }
 return 0.;
}
uniform float GLF_live0time;

float GLF_live0hash12(vec2 GLF_live0p)
{
 vec3 GLF_live0p3 = fract(vec3(GLF_live0p.xyx) * .1031);
 GLF_live0p3 += dot(GLF_live0p3, GLF_live0p3.yzx + 19.19);
 return fract((GLF_live0p3.x + GLF_live0p3.y) * GLF_live0p3.z);
}
vec2 GLF_live0hash22(vec2 GLF_live0p)
{
 vec3 GLF_live0p3 = fract(vec3(GLF_live0p.xyx) * vec3(.1031, .1030, .0973));
 GLF_live0p3 += dot(GLF_live0p3, GLF_live0p3.yzx + 19.19);
 return fract(vec2((GLF_live0p3.x + GLF_live0p3.y) * GLF_live0p3.z, (GLF_live0p3.x + GLF_live0p3.z) * GLF_live0p3.y));
}
vec2 GLF_live0iSphere(const in vec3 GLF_live0ro, const in vec3 GLF_live0rd, const in vec4 GLF_live0sp, const in vec3 GLF_live0ve, out vec3 GLF_live0nor)
{
 float GLF_live0t = - 1.0;
 float GLF_live0s = 0.0;
 GLF_live0nor = vec3(0.0);
 vec3 GLF_live0rc = GLF_live0ro - GLF_live0sp.xyz;
 float GLF_live0A = dot(GLF_live0rc, GLF_live0rd);
 float GLF_live0B = dot(GLF_live0rc, GLF_live0rc) - GLF_live0sp.w * GLF_live0sp.w;
 float GLF_live0C = dot(GLF_live0ve, GLF_live0ve);
 float GLF_live0D = dot(GLF_live0rc, GLF_live0ve);
 float GLF_live0E = dot(GLF_live0rd, GLF_live0ve);
 float GLF_live0aab = GLF_live0A * GLF_live0A - GLF_live0B;
 float GLF_live0eec = GLF_live0E * GLF_live0E - GLF_live0C;
 float GLF_live0aed = GLF_live0A * GLF_live0E - GLF_live0D;
 float GLF_live0k = GLF_live0aed * GLF_live0aed - GLF_live0eec * GLF_live0aab;
 if(GLF_live0k > 0.0)
  {
   GLF_live0k = sqrt(GLF_live0k);
   float GLF_live0hb = (GLF_live0aed - GLF_live0k) / GLF_live0eec;
   float GLF_live0ha = (GLF_live0aed + GLF_live0k) / GLF_live0eec;
   float GLF_live0ta = max(0.0, GLF_live0ha);
   float GLF_live0tb = min(1.0, GLF_live0hb);
   if(GLF_live0ta < GLF_live0tb)
    {
     GLF_live0ta = 0.5 * (GLF_live0ta + GLF_live0tb);
     GLF_live0t = - (GLF_live0A - GLF_live0E * GLF_live0ta) - sqrt((GLF_live0A - GLF_live0E * GLF_live0ta) * (GLF_live0A - GLF_live0E * GLF_live0ta) - (GLF_live0B + GLF_live0C * GLF_live0ta * GLF_live0ta - 2.0 * GLF_live0D * GLF_live0ta));
     GLF_live0nor = normalize((GLF_live0ro + GLF_live0rd * GLF_live0t) - (GLF_live0sp.xyz + GLF_live0ta * GLF_live0ve));
     GLF_live0s = 2.0 * (GLF_live0tb - GLF_live0ta);
    }
  }
 return vec2(GLF_live0t, GLF_live0s);
}
vec3 GLF_live0lig = normalize(vec3(- 0.6, 0.7, - 0.5));

vec3 GLF_live0shade(const in float GLF_live0d, in vec3 GLF_live0col, const in float GLF_live0shadow, const in vec3 GLF_live0nor, const in vec3 GLF_live0ref, const in vec3 GLF_live0sky)
{
 float GLF_live0amb = max(0., 0.5 + 0.5 * GLF_live0nor.y);
 float GLF_live0dif = max(0., dot(normalize(GLF_live0nor), GLF_live0lig));
 float GLF_live0spe = pow(clamp(dot(normalize(GLF_live0ref), GLF_live0lig), 0.0, 1.0), 16.0);
 GLF_live0dif *= GLF_live0shadow;
 vec3 GLF_live0lin = 1.20 * GLF_live0dif * vec3(1.00, 0.85, 0.55);
 GLF_live0lin += 0.50 * GLF_live0amb * vec3(0.50, 0.70, 1.00);
 GLF_live0col = GLF_live0col * GLF_live0lin;
 GLF_live0col += GLF_live0spe * GLF_live0dif;
 GLF_live0col = mix(GLF_live0col, GLF_live0sky, smoothstep(260. * .8, 260., GLF_live0d));
 return GLF_live0col;
}
void GLF_live0getSphereOffset(const in vec2 GLF_live0grid, inout vec2 GLF_live0center)
{
 GLF_live0center = (GLF_live0hash22(GLF_live0grid) - vec2(0.5)) * (7.);
}
void GLF_live0getMovingSpherePosition(const in vec2 GLF_live0grid, const in vec2 GLF_live0sphereOffset, inout vec4 GLF_live0center, inout vec3 GLF_live0speed)
{
 float GLF_live0s = 0.3 + GLF_live0hash12(GLF_live0grid);
 float GLF_live0t = 14. * GLF_live0s + GLF_live0time / GLF_live0s;
 float GLF_live0y = GLF_live0s * 30. * abs(cos(GLF_live0t));
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   GLF_live0speed = vec3(0, 30. * abs(sin(GLF_live0t)), 0) * (1. / 30.);
  }
 vec2 GLF_live0offset = GLF_live0grid + GLF_live0sphereOffset;
 GLF_live0center = vec4(GLF_live0offset.x + 0.5 * 10., 1. + GLF_live0y, GLF_live0offset.y + 0.5 * 10., 1.);
}
void GLF_live0getSpherePosition(const in vec2 GLF_live0grid, const in vec2 GLF_live0sphereOffset, inout vec4 GLF_live0center)
{
 vec2 GLF_live0offset = GLF_live0grid + GLF_live0sphereOffset;
 GLF_live0center = vec4(GLF_live0offset.x + 0.5 * 10., 1., GLF_live0offset.y + 0.5 * 10., 1.);
}
vec3 GLF_live0getSphereColor(vec2 GLF_live0grid)
{
 float GLF_live0m = GLF_live0hash12(GLF_live0grid.yx) * 12.;
 return vec3(1. - GLF_live0m * 0.08, GLF_live0m * 0.03, GLF_live0m * 0.06);
}
void main(void)
{
 vec2 uv = gl_FragCoord.xy / resolution.xy;
 {
  vec2 GLF_live0p = _GLF_FUZZED(vec2(-0.1, -5.8));
  {
   vec3 GLF_live0p3 = fract(vec3(GLF_live0p.xyx) * .1031);
   GLF_live0p3 += dot(GLF_live0p3, GLF_live0p3.yzx + 19.19);
   fract((GLF_live0p3.x + GLF_live0p3.y) * GLF_live0p3.z);
  }
 }
 float scale = resolution.x / resolution.y;
 uv = _GLF_IDENTITY(uv, clamp(uv, uv, uv)) - 0.5;
 uv.y /= scale;
 b = uv * 256.0 + 256.0;
 c = 0.0;
 for(
     float i = 16.0;
     i >= 1.0;
     i -= 1.0
 )
  {
   p = pow(_GLF_IDENTITY(2.0, _GLF_ZERO(0.0, injectionSwitch.x) + (2.0)), i);
   if((_GLF_IDENTITY(p, max(p, _GLF_IDENTITY(p, (_GLF_IDENTITY(p, min(p, p))) + 0.0))) < b.x) ^^ (p < b.y))
    {
     switch(_GLF_SWITCH(0))
      {
       case 0:
       c += p;
       break;
       case 74:
       for(
           mat3 _GLF_SWITCH_0_0v, _GLF_SWITCH_0_1v, _GLF_SWITCH_0_2v[27];
           false;
           98300u
       )
        {
         {
          bvec2 _GLF_SWITCH_0_3v[4], _GLF_SWITCH_0_4v;
          c;
          do
           {
            uvec2 _GLF_SWITCH_0_5v, _GLF_SWITCH_0_6v, _GLF_SWITCH_0_7v;
            ((7471u >> 69526u) - uvec3(136847u, 47508u, 61202u));
            mat2x3(5833.0783, 5.3, 5.6, -54.28, 2652.4050, 567.072);
            mat2x3(-199.385, 59.05, 2207.8487, -3016.3670, -5.5, -8132.6466);
            uvec3 _GLF_SWITCH_0_8v, _GLF_SWITCH_0_9v;
            32947;
            vec4 _GLF_SWITCH_0_10v[36];
            vec2 _GLF_SWITCH_0_11v, _GLF_SWITCH_0_12v;
            mat4 _GLF_SWITCH_0_13v, _GLF_SWITCH_0_14v;
           }
          while((uvec2(156637u, 91112u) != uvec2(175754u, 85752u)));
          if(_GLF_WRAPPED_IF_FALSE(false))
           {
           }
          else
           {
            min(ivec4(-49838, 47888, 76211, -36085), 47463);
            float _GLF_SWITCH_0_15v, _GLF_SWITCH_0_16v;
            mat2 _GLF_SWITCH_0_17v, _GLF_SWITCH_0_18v, _GLF_SWITCH_0_19v;
            (mat3x4(-878.179, 9269.8377, 3503.4780, -21.69, 219.165, 456.942, 0.8, 6.4, 9052.9845, 3014.8663, -7.2, -1.3) * _GLF_SWITCH_0_1v);
            uvec3(192341u, 135371u, 170585u);
            uvec3 _GLF_SWITCH_0_20v[89], _GLF_SWITCH_0_21v, _GLF_SWITCH_0_22v;
           }
          ;
          {
           mediump vec4 GLF_live1gl_FragColor = _GLF_FUZZED(vec4(-8.1, -7.7, -533.761, 2224.0571));
           mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED(vec4(-662.638, -3.6, -6.8, -0.3));
           {
            vec3 GLF_live1color;
            float GLF_live1len;
            float GLF_live1t = GLF_live1time;
            vec2 GLF_live1uv = GLF_live1gl_FragCoord.xy / GLF_live1resolution;
            vec2 GLF_live1offset = GLF_live1uv;
            GLF_live1offset -= .5;
            GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
            GLF_live1len = length(GLF_live1offset);
            GLF_live1t += 0.07;
            vec2 GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
            float GLF_live1firstMod = sin(GLF_live1t) + 1.0;
            float GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
            GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
            GLF_live1color[0] = .01 / length(abs(fract(GLF_live1uv) - .5));
            GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
            do
             {
              GLF_live1len = length(GLF_live1offset);
             }
            while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
            GLF_live1t += 0.07;
            GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
            GLF_live1firstMod = sin(GLF_live1t) + 1.0;
            GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
            GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
            GLF_live1color[1] = .01 / length(abs(fract(GLF_live1uv) - .5));
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              GLF_live1gl_FragColor = vec4(GLF_live1color / .1, GLF_live1time);
             }
            else
             {
             }
           }
          }
          if(_GLF_WRAPPED_IF_TRUE(true))
           {
            discard;
           }
          else
           {
           }
          if(true)
           {
           }
          for(
              uvec4(94977u, 161326u, 36658u, 77741u);
              true;
              roundEven(vec4(-8667.8054, 368.902, 7.1, -9.3))
          )
           {
            uvec2 _GLF_SWITCH_0_23v, _GLF_SWITCH_0_24v, _GLF_SWITCH_0_25v[41];
            vec4 _GLF_SWITCH_0_26v, _GLF_SWITCH_0_27v;
            bvec3 _GLF_SWITCH_0_28v[97], _GLF_SWITCH_0_29v[58], _GLF_SWITCH_0_30v[47];
            mat2x3(584.074, -60.63, -4121.6628, -29.21, -4.2, -6.5);
            (color);
            for(
                int _injected_loop_counter = 1;
                _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ZERO(0.0, injectionSwitch.x)));
                _injected_loop_counter --
            )
             {
              ;
             }
            int _GLF_SWITCH_0_31v[46], _GLF_SWITCH_0_32v[81], _GLF_SWITCH_0_33v[87];
            (mat3(-248.697, -7.7, -3.0, -75.35, -988.512, 54.46, -8.4, -9.0, -537.056) * mat3(scale, c, c, vec4(-5.5, 482.021, -7860.4106, 5509.9751)[0], i, i, scale, c, scale));
           }
         }
         while((mat4(761.202, -86.54, 37.86, 6.8, 21.57, 89.58, 3.8, -2.0, 205.488, -9.2, -6.7, -4805.5548, 7.4, 69.45, -638.144, -8.8) == mat4(-3018.8932, 2.9, -0.0, -3.5, -1.4, -8.8, 3.2, 6588.4222, 859.437, -515.077, -85.73, -6.5, -493.720, 6591.3908, -763.284, 3.5)))
          {
           for(
               (false ? bvec3(bool(scale), true, true) : bvec3(false, false, true));
               ((155616u + uvec2(32884u, 15870u)) != uvec2(84381u, 30988u).rr);
               -44805
           )
            {
             float _GLF_SWITCH_0_34v;
             ;
            }
           ivec3 _GLF_SWITCH_0_35v[52], _GLF_SWITCH_0_36v;
           while(false)
            {
             (39484u * uvec2(38489u, 26485u));
             float _GLF_SWITCH_0_37v, _GLF_SWITCH_0_38v[49], _GLF_SWITCH_0_39v[3];
             {
              vec3 GLF_live2dir = _GLF_FUZZED(vec3(-54.37, 278.739, -2575.2097));
              float GLF_live2rd = _GLF_FUZZED((- 3507.5424));
              float GLF_live2d = _GLF_FUZZED(1929.6026);
              vec3 GLF_live2pos = _GLF_FUZZED((vec3(-9.8, 8720.2929, 7.4) * -69.70));
              int GLF_live2_looplimiter0 = 0;
              float GLF_live2dist = _GLF_FUZZED((6870.6448));
              for(
                  int GLF_live2t = 0;
                  GLF_live2t < 100;
                  GLF_live2t ++
              )
               {
                if(GLF_live2_looplimiter0 >= 5)
                 {
                  break;
                 }
                GLF_live2_looplimiter0 ++;
                GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
                GLF_live2dist += min(GLF_live2d, GLF_live2rd);
                GLF_live2d = GLF_live2dist_func(GLF_live2pos);
                GLF_live2rd = abs(GLF_live2refr_dist_func(GLF_live2pos));
                if(GLF_live2d < 1e-3)
                 {
                  break;
                 }
                if(abs(GLF_live2rd) < 1e-3)
                 {
                  vec3 GLF_live2norm = GLF_live2refr_norm_func(GLF_live2pos);
                  float GLF_live2k = GLF_live2refr_func(GLF_live2pos);
                  GLF_live2dir = refract(normalize(GLF_live2dir), normalize(GLF_live2norm), 1. / GLF_live2k);
                  GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
                  GLF_live2dist += min(GLF_live2d, GLF_live2rd);
                 }
               }
             }
             if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
              {
              }
             else
              {
               bvec4(true, false, false, true);
              }
             mat4 _GLF_SWITCH_0_40v, _GLF_SWITCH_0_41v[52], _GLF_SWITCH_0_42v;
             (mat2(3359.0965, 651.047, -87.18, 3.0) - 409.993);
             {
              vec3 GLF_live2dir = _GLF_FUZZED(vec3(-0.8, 2331.7074, -95.87));
              vec3 GLF_live2src = _GLF_FUZZED(vec3(-9839.3990, 5.1, -1.9));
              {
               vec3 GLF_live2light_pos[3];
               GLF_live2light_pos[0] = vec3(1., 6., 2.);
               GLF_live2light_pos[1] = vec3(0., 7., 3.);
               GLF_live2light_pos[2] = vec3(2., 8., 4.);
               vec3 GLF_live2light_clr[3];
               GLF_live2light_clr[0] = vec3(1., 0., 0.);
               GLF_live2light_clr[1] = vec3(0., 1., 0.);
               GLF_live2light_clr[2] = vec3(0., 0., 1.);
               vec3 GLF_live2clr = vec3(0.);
               vec4 GLF_live2pos = GLF_live2trace_pos(GLF_live2src, GLF_live2dir);
               vec3 GLF_live2norm = GLF_live2norm_func(GLF_live2pos.xyz);
               {
                int GLF_live2_looplimiter2 = 0;
                for(
                    int GLF_live2l = 0;
                    GLF_live2l < 3;
                    GLF_live2l ++
                )
                 {
                  if(GLF_live2_looplimiter2 >= 5)
                   {
                    break;
                   }
                  GLF_live2_looplimiter2 ++;
                  vec3 GLF_live2l_dir = normalize(GLF_live2light_pos[GLF_live2l] - GLF_live2pos.xyz);
                  float GLF_live2str = dot(GLF_live2norm, - GLF_live2l_dir) * GLF_live2is_clear(GLF_live2pos.xyz, GLF_live2light_pos[GLF_live2l]);
                  GLF_live2clr += clamp(GLF_live2light_clr[GLF_live2l] * GLF_live2color_func(GLF_live2pos) * GLF_live2str, 0., 1.);
                 }
               }
               float GLF_live2s = .0;
               {
                int GLF_live2_looplimiter4 = 0;
                for(
                    int GLF_live2t = 0;
                    GLF_live2t < 3;
                    GLF_live2t ++
                )
                 {
                  if(GLF_live2_looplimiter4 >= 5)
                   {
                    break;
                   }
                  GLF_live2_looplimiter4 ++;
                  if(GLF_live2pos.y > 1e-2)
                   {
                    GLF_live2dir = reflect(GLF_live2dir, GLF_live2norm);
                    GLF_live2pos.xyz += GLF_live2dir * 1e-1;
                    GLF_live2pos = GLF_live2trace_pos(GLF_live2pos.xyz, GLF_live2dir);
                    GLF_live2norm = GLF_live2norm_func(GLF_live2pos.xyz);
                    {
                     int GLF_live2_looplimiter3 = 0;
                     for(
                         int GLF_live2l = 0;
                         GLF_live2l < 3;
                         GLF_live2l ++
                     )
                      {
                       if(GLF_live2_looplimiter3 >= 5)
                        {
                         break;
                        }
                       GLF_live2_looplimiter3 ++;
                       vec3 GLF_live2l_dir = normalize(GLF_live2light_pos[GLF_live2l] - GLF_live2pos.xyz);
                       float GLF_live2str = dot(GLF_live2norm, - GLF_live2l_dir) * GLF_live2is_clear(GLF_live2pos.xyz, GLF_live2light_pos[GLF_live2l]);
                       GLF_live2clr += clamp(GLF_live2light_clr[GLF_live2l] * GLF_live2color_func(GLF_live2pos) * GLF_live2str, 0., 1.);
                      }
                    }
                    GLF_live2s *= 0.5;
                   }
                 }
               }
               GLF_live2clr;
              }
             }
             uvec3 _GLF_SWITCH_0_43v;
             bvec2 _GLF_SWITCH_0_44v, _GLF_SWITCH_0_45v[64];
            }
           -6584.8466;
           {
            (+ uvec2(57422u, 23827u));
            min(ivec4(-45401, 23329, -7886, 45806), ivec4(-73662, 3518, -72827, -85667));
           }
           _GLF_color;
          }
         bool _GLF_SWITCH_0_46v, _GLF_SWITCH_0_47v[43];
         for(
             vec3 _GLF_SWITCH_0_48v, _GLF_SWITCH_0_49v, _GLF_SWITCH_0_50v;
             _GLF_SWITCH_0_46v;
             min(uvec4(182546u, 58682u, 149720u, 181274u), uvec4(packSnorm2x16(injectionSwitch), 194922u, uvec2(100828u, 86798u)))
         )
          {
           bvec2 _GLF_SWITCH_0_51v, _GLF_SWITCH_0_52v;
           {
            {
             ;
            }
           }
           mat2x4 _GLF_SWITCH_0_53v;
           if(true)
            {
             mat3((_GLF_SWITCH_0_53v * mat4x2(-709.230, 1.9, 8.1, -3.2, 2.2, 2.9, -1.6, -1655.1124)));
             discard;
             {
              float GLF_live0A = _GLF_FUZZED(-3.5);
              float GLF_live0E = _GLF_FUZZED(vec3(-2.4, 0.8, -5.7).g);
              const vec3 GLF_live0rd = _GLF_FUZZED(vec3(-6.2, 176.639, -3.8));
              float GLF_live0D = _GLF_FUZZED((- 0.4));
              float GLF_live0C = _GLF_FUZZED(-6740.6643);
              float GLF_live0B = _GLF_FUZZED(63.36);
              float GLF_live0aed = _GLF_FUZZED(28.20);
              const vec3 GLF_live0ve = _GLF_FUZZED(vec3(-9699.0583, 8264.6574, 772.893));
              float GLF_live0eec = _GLF_FUZZED(float(180141u));
              float GLF_live0t = _GLF_FUZZED(float(-22621));
              float GLF_live0s = _GLF_FUZZED(92.48);
              vec3 GLF_live0nor = _GLF_FUZZED(((vec3(5.9, -3.2, 8473.2519) * mat3(-267.083, -1833.3102, -8.3, -18.27, 0.3, -53.29, -7.6, -0.7, 9.7))));
              float GLF_live0k = _GLF_FUZZED(((- 9.1)));
              const vec3 GLF_live0ro = _GLF_FUZZED(vec3(11.06, -3375.7844, -7331.2162));
              const vec4 GLF_live0sp = _GLF_FUZZED(vec4(2.8, 5634.3533, -525.956, 2.1));
              if(GLF_live0k > 0.0)
               {
                GLF_live0k = sqrt(GLF_live0k);
                float GLF_live0hb = (GLF_live0aed - GLF_live0k) / GLF_live0eec;
                float GLF_live0ha = (GLF_live0aed + GLF_live0k) / GLF_live0eec;
                float GLF_live0ta = max(0.0, GLF_live0ha);
                float GLF_live0tb = min(1.0, GLF_live0hb);
                if(GLF_live0ta < GLF_live0tb)
                 {
                  GLF_live0ta = 0.5 * (GLF_live0ta + GLF_live0tb);
                  GLF_live0t = - (GLF_live0A - GLF_live0E * GLF_live0ta) - sqrt((GLF_live0A - GLF_live0E * GLF_live0ta) * (GLF_live0A - GLF_live0E * GLF_live0ta) - (GLF_live0B + GLF_live0C * GLF_live0ta * GLF_live0ta - 2.0 * GLF_live0D * GLF_live0ta));
                  GLF_live0nor = normalize((GLF_live0ro + GLF_live0rd * GLF_live0t) - (GLF_live0sp.xyz + GLF_live0ta * GLF_live0ve));
                  GLF_live0s = 2.0 * (GLF_live0tb - GLF_live0ta);
                 }
               }
             }
             uvec4 _GLF_SWITCH_0_54v;
             ;
             mat2x4(-0.1, -91.53, -950.848, 768.025, -5785.2591, 6.7, 6714.3446, -5.2);
             ;
            }
           else
            {
             mat4x3(5.1, -328.366, -224.907, -7.4, -35.24, -933.669, 9.1, -347.045, 41.71, -808.918, -60.40, -1.7);
             ivec4(-94506, 38795, 58174, 15443);
             uvec4 _GLF_SWITCH_0_55v;
             discard;
             mat3x2(-16.98, 6626.6068, -2.2, -0.5, -2.3, -95.29);
             transpose(mat3x2(-3.0, -184.840, -9803.4471, -6476.2223, 8.3, 5.6));
             mod(_GLF_color, roundEven(c));
             (_GLF_SWITCH_0_46v ? mat3x4(-48.45, -305.743, 90.10, -12.44, 46.59, 912.291, 385.468, -34.93, -399.128, 9857.1692, 162.182, -6865.4391) : mat3x4(1385.1117, 5.8, -850.080, -7.4, -4.9, -52.17, -32.87, 2.8, 77.53, -323.483, 23.53, 6209.5130));
             mat3x4(7175.5455, -72.21, 84.24, 5.7, -6.3, -2.1, -3.7, 8.9, -8.1, 9.2, -9.3, 0.9);
            }
           mat2x4((_GLF_SWITCH_0_0v));
           mat3x4 _GLF_SWITCH_0_56v, _GLF_SWITCH_0_57v[63];
           {
            mat4x2 _GLF_SWITCH_0_58v, _GLF_SWITCH_0_59v;
            vec3 _GLF_SWITCH_0_60v;
            ;
            discard;
           }
          }
         for(
             bvec2(true, true).ss;
             _GLF_SWITCH_0_46v;
             mat2(-65.78, -5695.7035, 1.4, 7116.8425)
         )
          {
           {
            mat4 _GLF_SWITCH_0_61v, _GLF_SWITCH_0_62v, _GLF_SWITCH_0_63v;
            ivec2 _GLF_SWITCH_0_64v;
           }
           if(false)
            {
             bool _GLF_SWITCH_0_65v[18];
             mat3x2(mat4x2(-1674.5934, -7.4, -7528.0066, 4.6, -1266.5618, -27.60, 6.0, 0.5));
             ;
             scale;
             (uvec4(146560u, 48410u, 147300u, 153825u) ^ 67731u);
             mat2 _GLF_SWITCH_0_66v, _GLF_SWITCH_0_67v;
             bvec3(false, true, true);
             mat4 _GLF_SWITCH_0_68v;
            }
           for(
               mat4x3(mat3x4(3.6, -65.66, -54.26, 2011.0218, 9.5, 325.470, 7319.9290, 4.9, 4.7, 251.933, 41.97, -94.09));
               _GLF_SWITCH_0_46v;
               43987u
           )
            {
             {
              vec2 GLF_live0grid = _GLF_FUZZED(vec2(vec4(-67.03, 13.49, -7.1, -8393.1468)));
              {
               float GLF_live0m = GLF_live0hash12(GLF_live0grid.yx) * 12.;
               vec3(1. - GLF_live0m * 0.08, GLF_live0m * 0.03, GLF_live0m * 0.06);
              }
             }
             int _GLF_SWITCH_0_69v[73], _GLF_SWITCH_0_70v;
             {
              vec2 GLF_live3b = _GLF_FUZZED(vec2(6.4, 7.5));
              float GLF_live3p = _GLF_FUZZED((+ -6.4));
              if(GLF_live3p < GLF_live3b.y)
               {
                GLF_live3b.y -= GLF_live3p;
               }
             }
             (i - mat2x3(-86.79, -2548.5326, -1055.0222, 9.7, 788.810, 937.186));
             int _GLF_SWITCH_0_71v, _GLF_SWITCH_0_72v[93];
            }
           uint _GLF_SWITCH_0_73v;
           ((ivec2(-60484, -97137) ^ 27755) / ivec2(62296, 61285));
           bvec4(true, false, true, true);
           {
            ivec3(-254, -2649, -43059);
            mat3x4 _GLF_SWITCH_0_74v[90];
            ;
           }
           ivec2(-36367, 67731).x;
          }
         ;
         float _GLF_SWITCH_0_75v;
         mat2x3(971.540, -886.793, 9.2, -61.75, 9.5, -55.37);
         {
          vec3 GLF_live2pos = _GLF_FUZZED(vec2(-4.6, -4809.7858).rgg);
          {
           GLF_live2pos.y;
          }
         }
         while(_GLF_SWITCH_0_46v)
          {
           {
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              ;
             }
            else
             {
             }
            (_GLF_SWITCH_0_1v ++);
            uvec3(174947u, 41287u, 135948u)[1];
            ivec2(-8239);
            int _GLF_SWITCH_0_76v[59], _GLF_SWITCH_0_77v, _GLF_SWITCH_0_78v[95];
            ivec2 _GLF_SWITCH_0_79v;
            mat4x2(1.0, -5.7, -0.5, 59.15, -8.6, -402.128, -94.54, 3602.1324);
            (6652u / (106915u << 28423u));
            (_GLF_SWITCH_0_75v - mat2x3(-953.009, -0.4, -7.7, 8.4, 174.205, -71.42));
           }
           float _GLF_SWITCH_0_80v, _GLF_SWITCH_0_81v[74], _GLF_SWITCH_0_82v[32];
           while(true)
            {
             uvec2 _GLF_SWITCH_0_83v[89], _GLF_SWITCH_0_84v[10];
             ivec2 _GLF_SWITCH_0_85v[61];
             (ivec3(37890, 28646, -41758) & (~ ivec3(-26666, 90776, -29369)));
             {
              vec3 GLF_live2pos = _GLF_FUZZED(vec3(-6.5, -8.0, -9963.1087));
              {
               GLF_live2pos.y;
              }
             }
             mat3x2(-169.058, -6.6, 3.1, 7409.6149, 40.46, 7.7);
             {
              vec3 GLF_live2pos = _GLF_FUZZED(vec3(vec2(-5.8, 89.78), 0.7));
              vec3 GLF_live2tgt = _GLF_FUZZED(vec3(-111.915, 9542.2150, 3.7));
              float GLF_live2dist = _GLF_FUZZED(float((195239u | 114619u)));
              if(length(GLF_live2pos - GLF_live2tgt) < 1e-1)
               {
                exp(- GLF_live2dist * 0.05);
               }
             }
             mat4 _GLF_SWITCH_0_86v, _GLF_SWITCH_0_87v;
             mat2x3 _GLF_SWITCH_0_88v;
            }
           roundEven(color);
           while((clamp(injectionSwitch, mix(_GLF_SWITCH_0_80v, p, true), _GLF_SWITCH_0_80v) == b))
            {
             (mat2x3(6.9, -50.22, 3402.6627, -8711.5658, 0.4, 5.7) * resolution);
             mat4(mat2(-9.8, -2842.3471, 58.45, -9213.8374));
             (mat4x2(645.619, 93.05, -0.8, 6.7, -6.9, 5.6, -8982.8081, -2.5) + -4.4);
             vec4 _GLF_SWITCH_0_89v;
             mat3x4 _GLF_SWITCH_0_90v[89];
             uvec4 _GLF_SWITCH_0_91v, _GLF_SWITCH_0_92v[8], _GLF_SWITCH_0_93v[60];
            }
           ;
           while(((_GLF_SWITCH_0_46v)))
            {
             mat3x4(i);
             bvec4((bvec2(true, true) == bvec2(true, false)), bvec3(false, false, true));
             ivec4(83014, -56119, -44539, 83534);
             mat2x3(mat4x2(6.8, -231.570, 2.4, -81.84, -1.7, 298.777, 590.778, -252.928));
             {
              mediump vec4 GLF_live1gl_FragColor = _GLF_FUZZED(vec4(vec3(-45.13, 0.0, -421.090), -4747.1811));
              mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED(vec4(-138.976, 83.90, 377.487, -1789.9991));
              {
               vec3 GLF_live1color;
               float GLF_live1len;
               float GLF_live1t = GLF_live1time;
               vec2 GLF_live1uv = GLF_live1gl_FragCoord.xy / GLF_live1resolution;
               vec2 GLF_live1offset = GLF_live1uv;
               GLF_live1offset -= .5;
               GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
               GLF_live1len = length(GLF_live1offset);
               GLF_live1t += 0.07;
               vec2 GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
               float GLF_live1firstMod = sin(GLF_live1t) + 1.0;
               float GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
               GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
               GLF_live1color[0] = .01 / length(abs(fract(GLF_live1uv) - .5));
               GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
               GLF_live1len = length(GLF_live1offset);
               GLF_live1t += 0.07;
               GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
               GLF_live1firstMod = sin(GLF_live1t) + 1.0;
               GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
               GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
               GLF_live1color[1] = .01 / length(abs(fract(GLF_live1uv) - .5));
               GLF_live1gl_FragColor = vec4(GLF_live1color / .1, GLF_live1time);
              }
             }
             ;
            }
          }
         {
          vec4 GLF_live0sphereCenter = _GLF_FUZZED(vec2(7610.9871, 1.8).tsts);
          vec3 GLF_live0ri = _GLF_FUZZED(vec3(33.72, 3971.1646, 25.00));
          float GLF_live0alpha = _GLF_FUZZED((- 8.5));
          const mat3 GLF_live0rot = _GLF_FUZZED(mat3(-4.7, 175.278, -7.3, 848.202, 3.6, 6.3, -6057.2707, 6012.6722, 1.6));
          int GLF_live0_looplimiter2 = 0;
          const vec3 GLF_live0rd = _GLF_FUZZED(vec3(-11.88, -1.3, 484.949));
          const vec3 GLF_live0cameraSpeed = _GLF_FUZZED((mat4x3(mat2x4(555.121, 118.769, -3.8, -70.05, 5.6, -550.232, -5.0, 239.080)) * vec4(-4627.4360, vec3(-7.6, 8.6, 3309.2534))));
          vec2 GLF_live0offset = _GLF_FUZZED(vec2(74.82, -439.853));
          vec3 GLF_live0sky = _GLF_FUZZED(vec3(-78.77, 9.3, 6693.5764));
          vec3 GLF_live0col = _GLF_FUZZED((vec3(-59.64, 66.48, -1.4) * (vec3(vec2(-5.4, -43.47), -5069.2526) * 329.925)));
          vec3 GLF_live0speed = _GLF_FUZZED(vec3(3.2, 0.8, 9.6));
          vec3 GLF_live0nor = _GLF_FUZZED(vec3(-99.31, -72.58, 857.941));
          vec3 GLF_live0mm = _GLF_FUZZED((vec3(-4929.9341, -138.256, 161.629) * (-81.81 / vec3(-3.0, 79.03, 6335.3464))));
          vec3 GLF_live0sphereSpeed = _GLF_FUZZED(vec3(-134.993, 263.949, -6.6));
          vec3 GLF_live0dis = _GLF_FUZZED(vec3(675.848, -7.8, -64.02));
          vec3 GLF_live0rs = _GLF_FUZZED(((vec2(-2922.0405, 78.44) - -178.106) * mat3x2(-1.8, -2361.6793, -8.8, -0.8, -8.5, -11.50)));
          vec3 GLF_live0pos = _GLF_FUZZED(vec3(-2.9, -9.0, 1.5));
          vec3 GLF_live0ref = _GLF_FUZZED((float(19914) * vec3(91.23, -23.90, 30.63)));
          const vec3 GLF_live0ro = _GLF_FUZZED(((mat3(-366.118, -257.842, -4354.5466, -41.46, -799.675, 6.2, 1871.1774, -14.51, -439.058) / 271.838) * vec3(-5.0)));
          {
           if(GLF_live0_looplimiter2 >= 5)
            {
             ;
            }
           GLF_live0_looplimiter2 ++;
           if(GLF_live0alpha < .01)
            ;
           do
            {
             GLF_live0getSphereOffset(GLF_live0pos.xz, GLF_live0offset);
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
           GLF_live0getMovingSpherePosition(GLF_live0pos.xz, - GLF_live0offset, GLF_live0sphereCenter, GLF_live0sphereSpeed);
           GLF_live0speed = GLF_live0rot * (GLF_live0sphereCenter.xyz - GLF_live0ro) + GLF_live0sphereSpeed + GLF_live0cameraSpeed;
           vec2 GLF_live0res = GLF_live0iSphere(GLF_live0ro, GLF_live0rd, GLF_live0sphereCenter, GLF_live0speed, GLF_live0nor);
           if(GLF_live0res.x > 0.0)
            {
             GLF_live0ref = reflect(GLF_live0rd, GLF_live0nor);
             vec3 GLF_live0lcol = GLF_live0shade(GLF_live0res.x, GLF_live0getSphereColor(- GLF_live0offset), 1., GLF_live0nor, GLF_live0ref, GLF_live0sky);
             GLF_live0col += GLF_live0lcol * GLF_live0res.y * GLF_live0alpha;
             GLF_live0alpha *= (1. - GLF_live0res.y);
            }
           GLF_live0getSpherePosition(GLF_live0pos.xz, GLF_live0offset, GLF_live0sphereCenter);
           GLF_live0speed = GLF_live0rot * (GLF_live0sphereCenter.xyz - GLF_live0ro) + GLF_live0cameraSpeed;
           GLF_live0res = GLF_live0iSphere(GLF_live0ro, GLF_live0rd, GLF_live0sphereCenter, GLF_live0speed, GLF_live0nor);
           if(GLF_live0res.x > 0.0)
            {
             GLF_live0ref = reflect(GLF_live0rd, GLF_live0nor);
             vec3 GLF_live0lcol = GLF_live0shade(GLF_live0res.x, GLF_live0getSphereColor(- GLF_live0offset), 1., GLF_live0nor, GLF_live0ref, GLF_live0sky);
             GLF_live0col += GLF_live0lcol * GLF_live0res.y * GLF_live0alpha;
             GLF_live0alpha *= (1. - GLF_live0res.y);
            }
           GLF_live0mm = step(GLF_live0dis.xyz, GLF_live0dis.zyx);
           GLF_live0dis += GLF_live0mm * GLF_live0rs * GLF_live0ri;
           GLF_live0pos += GLF_live0mm * GLF_live0rs;
          }
         }
        }
       case 28:
       {
        if(true)
         {
          ivec2 _GLF_SWITCH_0_94v;
          for(
              mat4(mat2x4(3424.3254, -18.02, -55.63, -4.0, -6806.8936, -8509.8948, 1.5, 7.1));
              (54583 == 69354);
              (scale / mat4(-4.8, -8.1, -3399.8466, 4.6, -2.3, -62.20, -39.45, -5449.5162, 4.0, -8.3, -921.008, 52.59, 7.8, 30.59, -1160.9542, -72.36))
          )
           {
           }
          if(true)
           {
            ;
            {
             vec3 GLF_live2dir = _GLF_FUZZED(vec3(-24.57, 6.1, 2.3));
             float GLF_live2rd = _GLF_FUZZED(147.708);
             float GLF_live2d = _GLF_FUZZED(397.860);
             vec3 GLF_live2pos = _GLF_FUZZED(vec3(0.7, 775.904, -791.763));
             int GLF_live2_looplimiter0 = 0;
             float GLF_live2dist = _GLF_FUZZED(float(-7297));
             {
              if(GLF_live2_looplimiter0 >= 5)
               {
                ;
               }
              GLF_live2_looplimiter0 ++;
              GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
              GLF_live2dist += min(GLF_live2d, GLF_live2rd);
              GLF_live2d = GLF_live2dist_func(GLF_live2pos);
              GLF_live2rd = abs(GLF_live2refr_dist_func(GLF_live2pos));
              if(GLF_live2d < 1e-3)
               {
                ;
               }
              if(abs(GLF_live2rd) < 1e-3)
               {
                vec3 GLF_live2norm = GLF_live2refr_norm_func(GLF_live2pos);
                float GLF_live2k = GLF_live2refr_func(GLF_live2pos);
                GLF_live2dir = refract(normalize(GLF_live2dir), normalize(GLF_live2norm), 1. / GLF_live2k);
                GLF_live2pos += GLF_live2dir * min(GLF_live2d, GLF_live2rd);
                GLF_live2dist += min(GLF_live2d, GLF_live2rd);
               }
             }
            }
            asin(vec4(8655.9225, -8.5, -5470.0893, 7.9));
            bvec3(true, false, false);
            mat3(mat2(matrixCompMult(mat4x3(-350.503, -434.458, 1.8, -83.73, -5663.7563, -9494.2033, -7944.4898, -80.36, 6877.1841, -0.0, 9.6, -8.0), mat4x3(-9.4, 66.20, 9396.1250, 8.1, -8.8, 6.1, -265.880, 9918.2454, -3800.9172, 1.6, -787.878, -53.90))));
            mat2(mat3(65.34, -4.7, 91.87, 7737.1907, -732.919, 863.906, -392.689, 9069.2061, 4.5));
            {
             vec2 GLF_live3b = _GLF_FUZZED((vec2(717.010, -77.86) * mat2(26.21, 8149.8299, -9.5, 398.603)));
             float GLF_live3p = _GLF_FUZZED(-0.8);
             {
              GLF_live3b.x -= GLF_live3p;
             }
            }
            mat4x3(-67.48, 552.128, -23.42, 2.5, 5135.8489, 7240.0002, -386.752, 174.982, -80.38, -315.740, 2.2, -732.869);
            mat3 _GLF_SWITCH_0_95v[74];
            mat2x4(mat4(-633.967, -27.11, -958.459, 4003.6774, 3058.1461, -6.6, -8.2, 87.65, -6002.2339, 63.17, 5711.3487, 760.229, -5370.2843, -821.466, -60.03, 8074.0238));
           }
          for(
              uvec4 _GLF_SWITCH_0_96v, _GLF_SWITCH_0_97v[42], _GLF_SWITCH_0_98v;
              isnan(length(color));
              mat3x4(6906.8206, -104.701, -556.649, -7.3, 51.57, -941.246, -6681.8171, 9729.8111, 42.88, -6.6, -188.115, 87.52)
          )
           {
            ;
            uvec4 _GLF_SWITCH_0_99v, _GLF_SWITCH_0_100v;
            ;
            vec4 _GLF_SWITCH_0_101v;
            bvec2 _GLF_SWITCH_0_102v[85];
            false;
           }
          while(false)
           {
            mat3 _GLF_SWITCH_0_103v, _GLF_SWITCH_0_104v;
            mat2x3 _GLF_SWITCH_0_105v[92], _GLF_SWITCH_0_106v;
            discard;
            ;
            mat4 _GLF_SWITCH_0_107v[10], _GLF_SWITCH_0_108v;
            ivec3(67278, 80141, -63435);
            {
             mediump vec4 GLF_live1gl_FragColor = _GLF_FUZZED(vec4(-0.5, 1.8, 0.8, 4.7));
             mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED(vec4(3504.3055, 8.3, -1.3, -6648.7942));
             {
              vec3 GLF_live1color;
              float GLF_live1len;
              float GLF_live1t = GLF_live1time;
              vec2 GLF_live1uv = GLF_live1gl_FragCoord.xy / GLF_live1resolution;
              vec2 GLF_live1offset = GLF_live1uv;
              GLF_live1offset -= .5;
              GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
              GLF_live1len = length(GLF_live1offset);
              GLF_live1t += 0.07;
              vec2 GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
              float GLF_live1firstMod = sin(GLF_live1t) + 1.0;
              float GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
              GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
              GLF_live1color[0] = .01 / length(abs(fract(GLF_live1uv) - .5));
              GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
              GLF_live1len = length(GLF_live1offset);
              GLF_live1t += 0.07;
              GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
              GLF_live1firstMod = sin(GLF_live1t) + 1.0;
              GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
              GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
              GLF_live1color[1] = .01 / length(abs(fract(GLF_live1uv) - .5));
              GLF_live1gl_FragColor = vec4(GLF_live1color / .1, GLF_live1time);
             }
            }
            float _GLF_SWITCH_0_109v[36];
           }
         }
        {
         {
          ;
         }
        }
        _GLF_color;
        if(bool(61128u))
         {
          for(
              int _injected_loop_counter = 0;
              _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
              _injected_loop_counter ++
          )
           {
            bvec2(false, true);
           }
          if(true)
           {
           }
          while((uvec3(32649u, 94424u, 94516u) == clamp((uvec3(171824u, 3518u, 61752u) >> 144637u), uvec3(196332u, 154139u, 50256u), (uvec3(16803u, 5706u, 158303u) - 40049u))))
           {
            min(uvec3(58684u, 110002u, 24921u), 179776u);
            {
             vec4 GLF_live2pos = _GLF_FUZZED(vec4(-7292.6023));
             if(GLF_live2pos.y < 1e-2)
              {
               vec3(GLF_live2checker(GLF_live2pos.xz));
              }
            }
            117621u;
            mat4x2 _GLF_SWITCH_0_110v, _GLF_SWITCH_0_111v, _GLF_SWITCH_0_112v;
            uint _GLF_SWITCH_0_113v[24], _GLF_SWITCH_0_114v[31], _GLF_SWITCH_0_115v[62];
           }
          vec4(log2(c), color);
          ;
          if(true)
           {
            (uvec2(164597u, 164747u) % 32471u);
            {
             mediump vec4 GLF_live1gl_FragColor = _GLF_FUZZED(vec4(-992.677, -8.0, -0.0, -79.41));
             mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED(vec4(-0.3, vec2(5.2, -1.0), 96.41));
             {
              vec3 GLF_live1color;
              float GLF_live1len;
              float GLF_live1t = GLF_live1time;
              vec2 GLF_live1uv = GLF_live1gl_FragCoord.xy / GLF_live1resolution;
              vec2 GLF_live1offset = GLF_live1uv;
              GLF_live1offset -= .5;
              GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
              GLF_live1len = length(GLF_live1offset);
              GLF_live1t += 0.07;
              vec2 GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
              float GLF_live1firstMod = sin(GLF_live1t) + 1.0;
              float GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
              GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
              for(
                  int _injected_loop_counter = 0;
                  _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
                  _injected_loop_counter ++
              )
               {
                GLF_live1color[0] = .01 / length(abs(fract(GLF_live1uv) - .5));
               }
              GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
              GLF_live1len = length(GLF_live1offset);
              GLF_live1t += 0.07;
              GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
              GLF_live1firstMod = sin(GLF_live1t) + 1.0;
              GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
              GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
              GLF_live1color[1] = .01 / length(abs(fract(GLF_live1uv) - .5));
              GLF_live1gl_FragColor = vec4(GLF_live1color / .1, GLF_live1time);
             }
            }
            mat3(8805.9747, 4.5, -9.0, -8.8, 4.7, -7.9, 919.472, -4.4, 9.7);
            ((uvec3(72591u, 55138u, 56898u) % uvec3(145446u, 104797u, 93299u)) + 179096u);
            mat4x2(roundEven(resolution), vec2(scale, 889.951), vec2(-6.8, -8773.3377), mix(uv, resolution, scale));
            mat4 _GLF_SWITCH_0_116v, _GLF_SWITCH_0_117v[72], _GLF_SWITCH_0_118v[64];
            uvec2 _GLF_SWITCH_0_119v, _GLF_SWITCH_0_120v;
            _GLF_color;
            {
             vec3 GLF_live2norm = _GLF_FUZZED(vec3(-765.642, -8.7, -0.2));
             vec3 GLF_live2light_clr[3];
             vec3 GLF_live2clr = _GLF_FUZZED(vec4(2.6, 8845.4893, 392.510, 47.63).spp);
             vec4 GLF_live2pos = _GLF_FUZZED(vec4(8.7, 7.2, -8.5, -3.8));
             int GLF_live2_looplimiter2 = 0;
             vec3 GLF_live2light_pos[3];
             for(
                 int GLF_live2l = 0;
                 GLF_live2l < 3;
                 GLF_live2l ++
             )
              {
               if(GLF_live2_looplimiter2 >= 5)
                {
                 break;
                }
               GLF_live2_looplimiter2 ++;
               vec3 GLF_live2l_dir = normalize(GLF_live2light_pos[GLF_live2l] - GLF_live2pos.xyz);
               float GLF_live2str = dot(GLF_live2norm, - GLF_live2l_dir) * GLF_live2is_clear(GLF_live2pos.xyz, GLF_live2light_pos[GLF_live2l]);
               GLF_live2clr += clamp(GLF_live2light_clr[GLF_live2l] * GLF_live2color_func(GLF_live2pos) * GLF_live2str, 0., 1.);
              }
            }
            discard;
            vec2 _GLF_SWITCH_0_121v;
           }
         }
        else
         {
          134159u;
         }
       }
       default:
       1;
      }
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
 {
  mediump vec4 GLF_live1gl_FragColor = _GLF_FUZZED((vec3(-2.9, 3.8, -7.8) * mat4x3(2961.0524, -7067.3200, 7.5, -9.1, -921.304, 52.52, -40.79, 0.7, 102.154, 36.89, 3.3, 2.0)));
  mediump vec4 GLF_live1gl_FragCoord = _GLF_FUZZED((+ vec4(-1.9, 8.5, 9248.1551, -5591.4839)));
  {
   vec3 GLF_live1color;
   float GLF_live1len;
   float GLF_live1t = GLF_live1time;
   vec2 GLF_live1uv = GLF_live1gl_FragCoord.xy / GLF_live1resolution;
   vec2 GLF_live1offset = GLF_live1uv;
   GLF_live1offset -= .5;
   GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
   GLF_live1len = length(GLF_live1offset);
   GLF_live1t += 0.07;
   vec2 GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
   float GLF_live1firstMod = sin(GLF_live1t) + 1.0;
   float GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
   GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
   GLF_live1color[0] = .01 / length(abs(fract(GLF_live1uv) - .5));
   GLF_live1offset.x *= GLF_live1resolution.x / GLF_live1resolution.y;
   GLF_live1len = length(GLF_live1offset);
   GLF_live1t += 0.07;
   GLF_live1offset_unit_vector = GLF_live1offset / GLF_live1len;
   GLF_live1firstMod = sin(GLF_live1t) + 1.0;
   GLF_live1secondMod = abs(sin(GLF_live1len * 9.0 - GLF_live1t * 2.0));
   GLF_live1uv += GLF_live1offset_unit_vector * GLF_live1firstMod * GLF_live1secondMod + GLF_live1mouse * 2.;
   GLF_live1color[1] = .01 / length(abs(fract(GLF_live1uv) - .5));
   GLF_live1gl_FragColor = vec4(GLF_live1color / .1, GLF_live1time);
  }
 }
 color = vec3(sin(c + _GLF_IDENTITY(uv.x * cos(uv.y * 1.2), min(uv.x * cos(uv.y * 1.2), uv.x * cos(uv.y * 1.2)))), tan(c + uv.y - 0.3) * 1.1, cos(c - uv.y + 0.9));
 _GLF_color = vec4(color, 1.0);
}
