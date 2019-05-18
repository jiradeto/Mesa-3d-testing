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

struct _GLF_struct_70 {
 float GLF_dead4scale;
 mat2x3 _f0;
 ivec4 _f1;
 bool _f2;
} ;

struct _GLF_struct_69 {
 bvec2 _f0;
} ;

struct _GLF_struct_68 {
 mat3 _f0;
 int _f1;
} ;

struct _GLF_struct_71 {
 _GLF_struct_68 _f0;
 mat3 _f1;
 _GLF_struct_69 _f2;
 _GLF_struct_70 _f3;
} ;

struct _GLF_struct_67 {
 bvec2 _f0;
 vec2 _f1;
} ;

struct _GLF_struct_72 {
 _GLF_struct_67 _f0;
 _GLF_struct_71 _f1;
} ;

struct _GLF_struct_64 {
 float _f0;
 mat4x2 _f1;
} ;

struct _GLF_struct_65 {
 ivec4 _f0;
 _GLF_struct_64 _f1;
 bool _f2;
 mat2x4 _f3;
} ;

struct _GLF_struct_62 {
 mat4x3 _f0;
 float _f1;
 vec2 _f2;
 mat4x3 _f3;
} ;

struct _GLF_struct_63 {
 _GLF_struct_62 _f0;
} ;

struct _GLF_struct_66 {
 vec2 donor_replacementGLF_dead4b;
 _GLF_struct_63 _f0;
 mat4 _f1;
 _GLF_struct_65 _f2;
} ;

struct _GLF_struct_61 {
 float GLF_dead5mat;
 bvec2 _f0;
 mat3x4 _f1;
} ;

struct _GLF_struct_58 {
 vec3 _f0;
 ivec3 _f1;
 float _f2;
 uvec2 _f3;
} ;

struct _GLF_struct_59 {
 _GLF_struct_58 _f0;
} ;

struct _GLF_struct_56 {
 float _f0;
 mat3 _f1;
} ;

struct _GLF_struct_57 {
 vec3 _f0;
 _GLF_struct_56 _f1;
} ;

struct _GLF_struct_60 {
 _GLF_struct_57 _f0;
 _GLF_struct_59 _f1;
 vec3 donor_replacementGLF_dead5col;
 mat2x4 _f2;
 uint _f3;
} ;

struct _GLF_struct_53 {
 ivec2 _f0;
 float _f1;
 bvec4 _f2;
} ;

struct _GLF_struct_54 {
 uvec2 _f0;
 _GLF_struct_53 _f1;
 mat4 _f2;
} ;

struct _GLF_struct_52 {
 mat3x2 _f0;
 int stepsTaken;
} ;

struct _GLF_struct_50 {
 uvec2 _f0;
 ivec3 _f1;
 mat4x3 _f2;
 uvec4 _f3;
} ;

struct _GLF_struct_51 {
 _GLF_struct_50 _f0;
} ;

struct _GLF_struct_55 {
 _GLF_struct_51 _f0;
 _GLF_struct_52 _f1;
 _GLF_struct_54 _f2;
} ;

struct _GLF_struct_48 {
 float lum;
 mat2 _f0;
} ;

struct _GLF_struct_49 {
 mat4x3 _f0;
 _GLF_struct_48 _f1;
} ;

struct _GLF_struct_47 {
 float sat;
 mat3x4 _f0;
} ;

struct _GLF_struct_44 {
 ivec4 _f0;
 uvec4 _f1;
} ;

struct _GLF_struct_43 {
 mat3x4 _f0;
 bvec3 _f1;
 bvec3 _f2;
 bvec2 _f3;
} ;

struct _GLF_struct_45 {
 _GLF_struct_43 _f0;
 _GLF_struct_44 _f1;
} ;

struct _GLF_struct_41 {
 mat4x3 _f0;
 mat3x2 _f1;
} ;

struct _GLF_struct_42 {
 _GLF_struct_41 _f0;
 mat2x3 _f1;
} ;

struct _GLF_struct_39 {
 vec4 _f0;
 mat3 _f1;
 float _f2;
} ;

struct _GLF_struct_40 {
 float donor_replacementGLF_dead4c;
 _GLF_struct_39 _f0;
} ;

struct _GLF_struct_46 {
 _GLF_struct_40 _f0;
 _GLF_struct_42 _f1;
 _GLF_struct_45 _f2;
} ;

struct _GLF_struct_36 {
 vec2 _f0;
 ivec2 _f1;
 mat2x4 _f2;
} ;

struct _GLF_struct_35 {
 mat2 _f0;
 ivec3 _f1;
 bvec3 _f2;
 float _f3;
} ;

struct _GLF_struct_37 {
 _GLF_struct_35 _f0;
 float donor_replacementGLF_dead3d;
 _GLF_struct_36 _f1;
} ;

struct _GLF_struct_38 {
 _GLF_struct_37 _f0;
} ;

struct _GLF_struct_33 {
 int donor_replacementGLF_dead5i;
 uvec2 _f0;
} ;

struct _GLF_struct_31 {
 bvec4 _f0;
 mat4x2 _f1;
} ;

struct _GLF_struct_30 {
 bool _f0;
} ;

struct _GLF_struct_29 {
 mat2x3 _f0;
} ;

struct _GLF_struct_32 {
 _GLF_struct_29 _f0;
 _GLF_struct_30 _f1;
 _GLF_struct_31 _f2;
} ;

struct _GLF_struct_34 {
 _GLF_struct_32 _f0;
 bvec3 _f1;
 _GLF_struct_33 _f2;
 bvec3 _f3;
} ;

struct _GLF_struct_26 {
 float donor_replacementGLF_dead4p;
 vec2 _f0;
 mat2x3 _f1;
 mat3x4 _f2;
} ;

struct _GLF_struct_27 {
 _GLF_struct_26 _f0;
 uint _f1;
} ;

struct _GLF_struct_24 {
 uvec2 _f0;
 mat2x4 _f1;
 uvec4 _f2;
} ;

struct _GLF_struct_25 {
 _GLF_struct_24 _f0;
 mat2x3 _f1;
 mat4x3 _f2;
 uint _f3;
} ;

struct _GLF_struct_22 {
 mat2x4 _f0;
} ;

struct _GLF_struct_23 {
 ivec2 _f0;
 _GLF_struct_22 _f1;
 mat2 _f2;
 uvec3 _f3;
} ;

struct _GLF_struct_28 {
 uint _f0;
 _GLF_struct_23 _f1;
 _GLF_struct_25 _f2;
 _GLF_struct_27 _f3;
} ;

struct _GLF_struct_19 {
 mat4x2 _f0;
} ;

struct _GLF_struct_18 {
 int _f0;
 bvec4 _f1;
} ;

struct _GLF_struct_20 {
 uvec2 _f0;
 _GLF_struct_18 _f1;
 _GLF_struct_19 _f2;
} ;

struct _GLF_struct_21 {
 mat2x3 _f0;
 vec2 GLF_dead0uv;
 _GLF_struct_20 _f1;
} ;

struct _GLF_struct_15 {
 ivec2 _f0;
 vec4 _f1;
} ;

struct _GLF_struct_16 {
 uint _f0;
 vec2 _f1;
 _GLF_struct_15 _f2;
 vec3 GLF_dead1pol;
 vec3 _f3;
} ;

struct _GLF_struct_17 {
 _GLF_struct_16 _f0;
} ;

struct _GLF_struct_12 {
 mat4x2 _f0;
} ;

struct _GLF_struct_13 {
 _GLF_struct_12 _f0;
 float GLF_dead5h;
} ;

struct _GLF_struct_14 {
 mat4x3 _f0;
 _GLF_struct_13 _f1;
} ;

struct _GLF_struct_9 {
 mat3x2 _f0;
 uint _f1;
} ;

struct _GLF_struct_8 {
 float GLF_dead0firstMod;
 mat3x4 _f0;
 uvec4 _f1;
} ;

struct _GLF_struct_10 {
 int _f0;
 _GLF_struct_8 _f1;
 int _f2;
 _GLF_struct_9 _f3;
} ;

struct _GLF_struct_6 {
 ivec2 _f0;
 ivec2 _f1;
 mat3x4 _f2;
 mat2x4 _f3;
} ;

struct _GLF_struct_5 {
 bool _f0;
 mat4x2 _f1;
} ;

struct _GLF_struct_7 {
 _GLF_struct_5 _f0;
 _GLF_struct_6 _f1;
} ;

struct _GLF_struct_11 {
 _GLF_struct_7 _f0;
 ivec4 _f1;
 _GLF_struct_10 _f2;
 float _f3;
} ;

struct _GLF_struct_2 {
 mat2 _f0;
 bvec3 _f1;
 vec2 _f2;
 mat4x2 _f3;
} ;

struct _GLF_struct_1 {
 mat3x2 _f0;
} ;

struct _GLF_struct_0 {
 bvec4 _f0;
 ivec3 _f1;
 float _f2;
 mat3x2 _f3;
} ;

struct _GLF_struct_3 {
 _GLF_struct_0 _f0;
 _GLF_struct_1 _f1;
 _GLF_struct_2 _f2;
 uvec2 _f3;
} ;

struct _GLF_struct_4 {
 vec2 GLF_dead1c;
 _GLF_struct_3 _f0;
} ;

layout(location = 0) out vec4 _GLF_color;

uniform vec2 injectionSwitch;

uniform float time;

uniform vec2 resolution;

const vec4 iMouse = vec4(2.);

const int MAX_RAY_STEPS = 64;

const float RAY_STOP_TRESHOLD = 0.0001;

const int MENGER_ITERATIONS = 5;

float GLF_dead1iTime = 0.0;

float GLF_dead7sdCross(vec3 GLF_dead7p)
{
 GLF_dead7p = abs(GLF_dead7p);
 vec3 GLF_dead7d = vec3(max(GLF_dead7p.x, GLF_dead7p.y + 0.07), max(GLF_dead7p.y, GLF_dead7p.z), max(GLF_dead7p.z, GLF_dead7p.x));
 return min(GLF_dead7d.x, min(GLF_dead7d.y, GLF_dead7d.z)) - (1.0 / 2.23);
 if(_GLF_DEAD(false))
  return 1.0;
}
float GLF_dead7sdCrossRep(vec3 GLF_dead7p)
{
 if(_GLF_DEAD(false))
  return 1.0;
 vec3 GLF_dead7q = mod(GLF_dead7p + 1.0, 2.0) - 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 return GLF_dead7sdCross(GLF_dead7q);
}
float GLF_dead7sdCrossRepScale(vec3 GLF_dead7p, float GLF_dead7s)
{
 return GLF_dead7sdCrossRep(GLF_dead7p * GLF_dead7s) / GLF_dead7s;
}
float GLF_dead5EPSILON = 0.01;

vec2 GLF_dead5opUnion(vec2 GLF_dead5a, vec2 GLF_dead5b)
{
 if(_GLF_DEAD(false))
  return vec2(1.0);
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
     _injected_loop_counter ++
 )
  {
   return GLF_dead5a.y < GLF_dead5b.y ? GLF_dead5a : GLF_dead5b;
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return vec2(1.0);
    }
   else
    {
    }
  }
}
float GLF_dead5sphere(vec3 GLF_dead5p, float GLF_dead5r)
{
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_DEAD(false))
    return 1.0;
  }
 return length(GLF_dead5p) - GLF_dead5r;
}
float GLF_dead5box(vec3 GLF_dead5p, vec3 GLF_dead5b)
{
 vec3 GLF_dead5d = abs(GLF_dead5p) - GLF_dead5b;
 return length(max(GLF_dead5d, 0.0)) + min(max(GLF_dead5d.x, max(GLF_dead5d.y, GLF_dead5d.z)), 0.0);
 if(_GLF_DEAD(false))
  return 1.0;
}
float GLF_dead5shape(vec3 GLF_dead5p)
{
 return min(GLF_dead5sphere(GLF_dead5p - vec3(0.0, 1.6, 0.0), 1.0), GLF_dead5box(GLF_dead5p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)));
 if(_GLF_DEAD(false))
  return 1.0;
}
vec2 GLF_dead5mapWithMat(vec3 GLF_dead5p)
{
 if(_GLF_DEAD(false))
  return vec2(1.0);
 float GLF_dead5repeat = 5.0;
 vec2 GLF_dead5qxz = mod(GLF_dead5p.xz, GLF_dead5repeat) - 0.5 * GLF_dead5repeat;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec2(1.0);
 vec3 GLF_dead5q = vec3(GLF_dead5qxz.x, GLF_dead5p.y, GLF_dead5qxz.y);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   for(
       int _injected_loop_counter = _GLF_IDENTITY(1, (_GLF_IDENTITY(1, min(1, 1))) + 0);
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
       _injected_loop_counter --
   )
    {
     return vec2(1.0);
    }
  }
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   return GLF_dead5opUnion(vec2(1.0, GLF_dead5shape(GLF_dead5q)), vec2(0.0, GLF_dead5p.y));
  }
}
float GLF_dead5map(vec3 GLF_dead5p)
{
 return GLF_dead5mapWithMat(GLF_dead5p).y;
}
vec3 GLF_dead5estimateNormal(vec3 GLF_dead5p)
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   return vec3(1.0);
  }
 return normalize(vec3(GLF_dead5map(vec3(GLF_dead5p.x + GLF_dead5EPSILON, GLF_dead5p.y, GLF_dead5p.z)) - GLF_dead5map(vec3(GLF_dead5p.x - GLF_dead5EPSILON, GLF_dead5p.y, GLF_dead5p.z)), GLF_dead5map(vec3(GLF_dead5p.x, GLF_dead5p.y + GLF_dead5EPSILON, GLF_dead5p.z)) - GLF_dead5map(vec3(GLF_dead5p.x, GLF_dead5p.y - GLF_dead5EPSILON, GLF_dead5p.z)), GLF_dead5map(vec3(GLF_dead5p.x, GLF_dead5p.y, GLF_dead5p.z + GLF_dead5EPSILON)) - GLF_dead5map(vec3(GLF_dead5p.x, GLF_dead5p.y, GLF_dead5p.z - GLF_dead5EPSILON))));
 if(_GLF_DEAD(false))
  return vec3(1.0);
}
float GLF_dead5softshadow(vec3 GLF_dead5ro, vec3 GLF_dead5rd, float GLF_dead5mint, float GLF_dead5maxt, float GLF_dead5k)
{
 float GLF_dead5t = GLF_dead5mint;
 float GLF_dead5res = 1.0;
 for(
     int GLF_dead5i = 0;
     GLF_dead5i < 200;
     GLF_dead5i ++
 )
  {
   _GLF_struct_14 _GLF_struct_replacement_14 = _GLF_struct_14(mat4x3(1.0), _GLF_struct_13(_GLF_struct_12(mat4x2(1.0)), GLF_dead5map(GLF_dead5ro + GLF_dead5rd * GLF_dead5t)));
   do
    {
     do
      {
       if(_GLF_struct_replacement_14._f1.GLF_dead5h < GLF_dead5EPSILON)
        {
         return 0.0;
        }
      }
     while(_GLF_WRAPPED_LOOP(false));
    }
   while(_GLF_WRAPPED_LOOP(false));
   GLF_dead5res = min(GLF_dead5res, GLF_dead5k * _GLF_struct_replacement_14._f1.GLF_dead5h / GLF_dead5t);
   GLF_dead5t += _GLF_struct_replacement_14._f1.GLF_dead5h;
   if(_GLF_DEAD(false))
    break;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      break;
     return 1.0;
    }
   if(GLF_dead5t >= GLF_dead5maxt)
    {
     break;
    }
  }
 return GLF_dead5res;
 if(_GLF_DEAD(false))
  return 1.0;
}
vec3 GLF_dead1pal(in float GLF_dead1t, in vec3 GLF_dead1a, in vec3 GLF_dead1b, in vec3 GLF_dead1c, in vec3 GLF_dead1d)
{
 do
  {
   return GLF_dead1a + GLF_dead1b * cos(6.28318 * (GLF_dead1c * GLF_dead1t + GLF_dead1d));
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
 if(_GLF_DEAD(false))
  return vec3(1.0);
}
vec3 GLF_dead1spectrum(float GLF_dead1n)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return vec3(1.0);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   for(
       int _injected_loop_counter = 0;
       _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
       _injected_loop_counter ++
   )
    {
     return GLF_dead1pal(GLF_dead1n, vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, 0.37));
    }
   if(_GLF_DEAD(false))
    return vec3(1.0);
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  return vec3(1.0);
}
float GLF_dead1sdSphere(vec3 GLF_dead1p, float GLF_dead1s)
{
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   return length(GLF_dead1p) - GLF_dead1s;
  }
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    return 1.0;
  }
 else
  {
  }
}
float GLF_dead1sdUnion_s(float GLF_dead1a, float GLF_dead1b, float GLF_dead1k)
{
 float GLF_dead1h = clamp(0.5 + 0.5 * (GLF_dead1b - GLF_dead1a) / GLF_dead1k, 0.0, 1.0);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   return mix(GLF_dead1b, GLF_dead1a, GLF_dead1h) - GLF_dead1k * GLF_dead1h * (1.0 - GLF_dead1h);
  }
 else
  {
   for(
       int _injected_loop_counter = 0;
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
        {
         return 1.0;
        }
       else
        {
        }
      }
    }
  }
}
vec3 GLF_dead1carToPol(vec3 GLF_dead1p)
{
 vec3 GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the;
 float GLF_dead1r = length(GLF_dead1p);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.y = GLF_dead1r;
 float GLF_dead1the = acos(GLF_dead1p.z / GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.y);
 GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.z = GLF_dead1the;
 float GLF_dead1phi = atan(GLF_dead1p.y, GLF_dead1p.x);
 GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.x = GLF_dead1phi;
 return vec3(GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.y, GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.z, GLF_merged3_0_1_12_1_1_10_2_1_12GLF_dead1phiGLF_dead1rGLF_dead1the.x);
}
mat3 GLF_dead1rotationXY(vec2 GLF_dead1angle)
{
 if(_GLF_DEAD(false))
  return mat3(1.0);
 _GLF_struct_4 _GLF_struct_replacement_4 = _GLF_struct_4(cos(GLF_dead1angle), _GLF_struct_3(_GLF_struct_0(bvec4(true), ivec3(1), 1.0, mat3x2(1.0)), _GLF_struct_1(mat3x2(1.0)), _GLF_struct_2(mat2(1.0), bvec3(true), vec2(1.0), mat4x2(1.0)), uvec2(1u)));
 vec2 GLF_dead1s = sin(GLF_dead1angle);
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   return mat3(_GLF_struct_replacement_4.GLF_dead1c.y, 0.0, - GLF_dead1s.y, GLF_dead1s.y * GLF_dead1s.x, _GLF_struct_replacement_4.GLF_dead1c.x, _GLF_struct_replacement_4.GLF_dead1c.y * GLF_dead1s.x, GLF_dead1s.y * _GLF_struct_replacement_4.GLF_dead1c.x, - GLF_dead1s.x, _GLF_struct_replacement_4.GLF_dead1c.y * _GLF_struct_replacement_4.GLF_dead1c.x);
  }
}
float GLF_dead1sdVerticalCapsule(vec3 GLF_dead1p, float GLF_dead1h, float GLF_dead1r)
{
 GLF_dead1p.z -= clamp(GLF_dead1p.z, 0.0, GLF_dead1h);
 return length(GLF_dead1p) - GLF_dead1r;
}
float GLF_dead1distortedCapsule(vec3 GLF_dead1p)
{
 float GLF_dead1dtime = 1.3 * GLF_dead1p.z - 2.0 * GLF_dead1iTime - 1.;
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   vec2 donor_replacementGLF_dead4b = _GLF_FUZZED(injectionSwitch);
   _GLF_struct_46 _GLF_struct_replacement_46 = _GLF_struct_46(_GLF_struct_40(_GLF_FUZZED(smoothstep(time, vec3(-8.9, 3.0, -475.745).s, GLF_dead1dtime)), _GLF_struct_39(vec4(1.0), mat3(1.0), 1.0)), _GLF_struct_42(_GLF_struct_41(mat4x3(1.0), mat3x2(1.0)), mat2x3(1.0)), _GLF_struct_45(_GLF_struct_43(mat3x4(1.0), bvec3(true), bvec3(true), bvec2(true)), _GLF_struct_44(ivec4(1), uvec4(1u))));
   mediump vec4 donor_replacementGLF_dead4gl_FragColor = _GLF_FUZZED(_GLF_color);
   if(_GLF_DEAD(false))
    return 1.0;
   mediump vec4 donor_replacementGLF_dead4gl_FragCoord = _GLF_FUZZED(_GLF_color);
   vec2 donor_replacementGLF_dead4resolution = _GLF_FUZZED(step(GLF_dead1dtime, injectionSwitch));
   {
    vec2 GLF_dead4uv = donor_replacementGLF_dead4gl_FragCoord.xy / donor_replacementGLF_dead4resolution.xy;
    do
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
       return 1.0;
     }
    while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
    _GLF_struct_72 _GLF_struct_replacement_72 = _GLF_struct_72(_GLF_struct_67(bvec2(true), vec2(1.0)), _GLF_struct_71(_GLF_struct_68(mat3(1.0), 1), mat3(1.0), _GLF_struct_69(bvec2(true)), _GLF_struct_70(donor_replacementGLF_dead4resolution.x / donor_replacementGLF_dead4resolution.y, mat2x3(1.0), ivec4(1), true)));
    if(_GLF_WRAPPED_IF_FALSE(false))
     {
     }
    else
     {
      if(_GLF_DEAD(false))
       {
        if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         {
         }
        else
         {
          return 1.0;
         }
       }
     }
    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
     }
    else
     {
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        GLF_dead4uv = GLF_dead4uv - 0.5;
       }
      else
       {
       }
     }
    GLF_dead4uv.y /= _GLF_struct_replacement_72._f1._f3.GLF_dead4scale;
    donor_replacementGLF_dead4b = GLF_dead4uv * 256.0 + 256.0;
    if(_GLF_DEAD(false))
     return 1.0;
    _GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c = 0.0;
    for(
        int _injected_loop_counter = 0;
        _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
        _injected_loop_counter ++
    )
     {
      for(
          float GLF_dead4i = 16.0;
          GLF_dead4i >= 1.0;
          GLF_dead4i -= 1.0
      )
       {
        GLF_dead1iTime = pow(2.0, GLF_dead4i);
        if(_GLF_DEAD(false))
         discard;
        if((GLF_dead1iTime < donor_replacementGLF_dead4b.x) ^^ (GLF_dead1iTime < donor_replacementGLF_dead4b.y))
         {
          _GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c += GLF_dead1iTime;
         }
        if(GLF_dead1iTime < donor_replacementGLF_dead4b.x)
         {
          donor_replacementGLF_dead4b.x -= GLF_dead1iTime;
         }
        if(GLF_dead1iTime < donor_replacementGLF_dead4b.y)
         {
          if(_GLF_DEAD(false))
           continue;
          if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, _GLF_FALSE(false, (gl_FragCoord.y < 0.0)) || (false))))
           {
           }
          else
           {
            donor_replacementGLF_dead4b.y -= GLF_dead1iTime;
           }
         }
       }
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     return 1.0;
    _GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c = mod(_GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c / 128.0, 1.0);
    GLF_dead1p = vec3(sin(_GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c + GLF_dead4uv.x * cos(GLF_dead4uv.y * 1.2)), tan(_GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c + GLF_dead4uv.y - 0.3) * 1.1, cos(_GLF_struct_replacement_46._f0.donor_replacementGLF_dead4c - GLF_dead4uv.y + 0.9));
    donor_replacementGLF_dead4gl_FragColor = vec4(GLF_dead1p, 1.0);
   }
  }
 float GLF_dead1dt = sin((GLF_dead1dtime) - 0.8 * sin(GLF_dead1dtime));
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return 1.0;
  }
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
  }
 else
  {
   GLF_dead1p.x += 0.2 * (GLF_dead1p.z) * GLF_dead1dt;
   if(_GLF_DEAD(false))
    return 1.0;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 float GLF_dead1d = GLF_dead1sdVerticalCapsule(GLF_dead1p - vec3(0.5, 0, 0.1), 2.0, 0.05 * (4.0 - 1.5 * GLF_dead1p.z));
 float GLF_dead1d2 = GLF_dead1sdSphere(GLF_dead1p - vec3(0.5, 0, 2.2), 0.2);
 GLF_dead1d = GLF_dead1sdUnion_s(GLF_dead1d, GLF_dead1d2, 0.1);
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 return GLF_dead1d;
}
float GLF_dead1map(vec3 GLF_dead1p)
{
 if(_GLF_DEAD(false))
  return 1.0;
 vec4 GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     return 1.0;
    }
  }
 float GLF_dead1dt = sin((2.0 * GLF_dead1iTime + 2.5) - 0.8 * sin(2.0 * GLF_dead1iTime + 2.5));
 GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1.x = GLF_dead1dt;
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 GLF_dead1p.x += 0.2 * GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1.x;
 float GLF_dead1d0 = GLF_dead1sdSphere(GLF_dead1p - vec3(0.2, 0, 0), 0.4);
 float GLF_dead1d2;
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 vec3 GLF_dead1p1;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1.yzw = GLF_dead1p1;
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     for(
         float GLF_dead1i = 0.;
         GLF_dead1i < 9.;
         GLF_dead1i ++
     )
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
        continue;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return 1.0;
       if(_GLF_DEAD(false))
        discard;
       GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1.yzw = GLF_dead1rotationXY(vec2(GLF_dead1i * 2. * 3.14159265359 / 9., 0.8)) * GLF_dead1p;
       GLF_dead1d2 = GLF_dead1distortedCapsule(GLF_merged2_0_1_11_1_3_11GLF_dead1dtGLF_dead1p1.yzw);
       if(_GLF_DEAD(false))
        return 1.0;
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          return 1.0;
         discard;
        }
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
        }
       else
        {
         if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
          {
          }
         else
          {
           GLF_dead1d0 = GLF_dead1sdUnion_s(GLF_dead1d0, GLF_dead1d2, 0.2);
          }
        }
       if(_GLF_DEAD(false))
        discard;
      }
     if(_GLF_DEAD(false))
      return 1.0;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       return 1.0;
      }
     else
      {
      }
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return 1.0;
     for(
         int _injected_loop_counter = 1;
         _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
         _injected_loop_counter --
     )
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return 1.0;
      }
     float donor_replacementGLF_dead4p = _GLF_FUZZED((-34.93 / distance(GLF_dead1d2, -1.3)));
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
        return 1.0;
       }
      GLF_dead1d2 += donor_replacementGLF_dead4p;
     }
    }
  }
 do
  {
   return GLF_dead1d0;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
}
vec3 GLF_dead1gradient(vec3 GLF_dead1pos)
{
 const vec3 GLF_dead1dx = vec3(0.01, 0.0, 0.0);
 const vec3 GLF_dead1dy = vec3(0.0, 0.01, 0.0);
 const vec3 GLF_dead1dz = vec3(0.0, 0.0, 0.01);
 return normalize(vec3(GLF_dead1map(GLF_dead1pos + GLF_dead1dx) - GLF_dead1map(GLF_dead1pos - GLF_dead1dx), GLF_dead1map(GLF_dead1pos + GLF_dead1dy) - GLF_dead1map(GLF_dead1pos - GLF_dead1dy), GLF_dead1map(GLF_dead1pos + GLF_dead1dz) - GLF_dead1map(GLF_dead1pos - GLF_dead1dz)));
}
vec3 GLF_dead1fresnel(vec3 GLF_dead1F0, vec3 GLF_dead1h, vec3 GLF_dead1l)
{
 do
  {
   return GLF_dead1F0 + (1.0 - GLF_dead1F0) * pow(clamp(1.0 - dot(GLF_dead1h, GLF_dead1l), 0.0, 1.0), 5.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    discard;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    continue;
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
}
vec3 GLF_dead1selfColor(vec3 GLF_dead1pos)
{
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= _GLF_ZERO(0.0, injectionSwitch.x)))))
  {
   if(_GLF_DEAD(false))
    {
     for(
         int _injected_loop_counter = 0;
         _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
         _injected_loop_counter ++
     )
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
        {
         0.0;
        }
       else
        {
        }
       if(_GLF_DEAD(false))
        break;
      }
    }
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return vec3(1.0);
  }
 else
  {
  }
 _GLF_struct_17 _GLF_struct_replacement_17 = _GLF_struct_17(_GLF_struct_16(1u, vec2(1.0), _GLF_struct_15(ivec2(1), vec4(1.0)), GLF_dead1carToPol(GLF_dead1pos - vec3(0.4, 0, 0)), vec3(1.0)));
 return GLF_dead1spectrum(0.45 * _GLF_struct_replacement_17._f0.GLF_dead1pol.x);
}
vec3 GLF_dead1reflectedColor(in vec3 GLF_dead1p, in vec3 GLF_dead1rd)
{
 vec3 GLF_dead1Ks = vec3(0.7);
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > _GLF_IDENTITY(0, int(_GLF_ZERO(0.0, injectionSwitch.x)) + (0)));
     _injected_loop_counter --
 )
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec3(1.0);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
  return vec3(1.0);
 float GLF_dead1shininess = 40.0;
 vec3 GLF_dead1n = GLF_dead1gradient(GLF_dead1p);
 vec3 GLF_dead1ref = reflect(GLF_dead1rd, GLF_dead1n);
 if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
  return vec3(1.0);
 vec3 GLF_dead1rc = vec3(0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(GLF_dead1iTime < 1e-3)
    {
     ;
    }
  }
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 GLF_dead1light_pos = vec3(15.0, 20.0, 2.0);
 vec3 GLF_dead1light_color = vec3(1.0, 1.0, 1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   do
    {
     return vec3(1.0);
     if(_GLF_DEAD(false))
      continue;
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 GLF_dead1vl = normalize(GLF_dead1light_pos - GLF_dead1p);
 vec3 GLF_dead1specular = vec3(max(0.0, dot(GLF_dead1vl, GLF_dead1ref)));
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
     _injected_loop_counter --
 )
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      continue;
     if(_GLF_DEAD(false))
      {
       const int donor_replacementGLF_dead7MENGER_ITERATIONS = _GLF_FUZZED(MAX_RAY_STEPS);
       float donor_replacementGLF_dead7dist = _GLF_FUZZED(float(MAX_RAY_STEPS));
       for(
           int GLF_dead7i = 1;
           GLF_dead7i < donor_replacementGLF_dead7MENGER_ITERATIONS;
           GLF_dead7i ++
       )
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          break;
         donor_replacementGLF_dead7dist = max(donor_replacementGLF_dead7dist, - GLF_dead7sdCrossRepScale(GLF_dead1light_color, GLF_dead1iTime));
         GLF_dead1iTime *= 3.0;
         if(_GLF_DEAD(false))
          return vec3(1.0);
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return vec3(1.0);
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         return vec3(1.0);
        }
       else
        {
        }
      }
    }
  }
 vec3 GLF_dead1F = GLF_dead1fresnel(GLF_dead1Ks, normalize(GLF_dead1vl - GLF_dead1rd), GLF_dead1vl);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return vec3(1.0);
     return vec3(1.0);
    }
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     GLF_dead1specular = pow(GLF_dead1specular, vec3(GLF_dead1shininess));
    }
   else
    {
    }
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     for(
         int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
         _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
         _injected_loop_counter ++
     )
      {
       return vec3(1.0);
      }
    }
  }
 GLF_dead1rc += GLF_dead1light_color * GLF_dead1specular;
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
     _injected_loop_counter ++
 )
  {
   if(_GLF_DEAD(false))
    discard;
   if(_GLF_DEAD(false))
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       return vec3(1.0);
      }
     else
      {
      }
    }
  }
 return GLF_dead1rc;
 if(_GLF_DEAD(false))
  return vec3(1.0);
}
float sdCross(vec3 p)
{
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
  }
 else
  {
   if(_GLF_DEAD(false))
    return 1.0;
   p = abs(p);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 vec3 d = vec3(max(p.x, p.y + 0.07), max(p.y, p.z), max(p.z, p.x));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(false))
    return 1.0;
   if(_GLF_DEAD(false))
    return 1.0;
   return 1.0;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 return min(d.x, min(d.y, d.z)) - (1.0 / 2.23);
}
float sdCrossRep(vec3 p)
{
 if(_GLF_DEAD(false))
  return 1.0;
 vec3 q = mod(p + 1.0, 2.0) - 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
  {
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     return 1.0;
    }
   else
    {
    }
  }
 return sdCross(q);
}
float sdCrossRepScale(vec3 p, float s)
{
 do
  {
   return sdCrossRep(p * s) / s;
  }
 while(_GLF_WRAPPED_LOOP(false));
}
float scene(vec3 p)
{
 float scale = 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   vec4 donor_replacementGLF_dead6pos = _GLF_FUZZED(vec3(-491.818, 525.402, -5.9).brrb);
   if(donor_replacementGLF_dead6pos.w > 100.)
    {
     vec3(.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
        }
       else
        {
         return 1.0;
        }
      }
    }
  }
 float dist = 0.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return 1.0;
     {
      if(_GLF_DEAD(false))
       return 1.0;
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
         return 1.0;
        for(
            int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
            _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
            _injected_loop_counter ++
        )
         {
          vec3(.0);
         }
       }
      else
       {
       }
      if(_GLF_DEAD(false))
       return 1.0;
     }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        return 1.0;
       return 1.0;
      }
    }
   if(_GLF_DEAD(false))
    return 1.0;
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return 1.0;
    }
   else
    {
    }
  }
 for(
     int i = 1;
     i < MENGER_ITERATIONS;
     i ++
 )
  {
   do
    {
     dist = max(dist, - sdCrossRepScale(p, scale));
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    continue;
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     scale *= 3.0;
    }
   else
    {
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       discard;
      }
     else
      {
      }
    }
  }
 for(
     int _injected_loop_counter = 0;
     _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
     _injected_loop_counter ++
 )
  {
   return dist;
  }
 if(_GLF_DEAD(false))
  {
   vec2 GLF_merged2_0_1_33_1_1_29donor_replacementGLF_dead5EPSILONdonor_replacementGLF_dead5mat;
   float donor_replacementGLF_dead5EPSILON = _GLF_FUZZED(RAY_STOP_TRESHOLD);
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     GLF_merged2_0_1_33_1_1_29donor_replacementGLF_dead5EPSILONdonor_replacementGLF_dead5mat.x = donor_replacementGLF_dead5EPSILON;
    }
   float donor_replacementGLF_dead5mat = _GLF_FUZZED(atan(28.70, 71.76));
   GLF_merged2_0_1_33_1_1_29donor_replacementGLF_dead5EPSILONdonor_replacementGLF_dead5mat.y = donor_replacementGLF_dead5mat;
   vec2 donor_replacementGLF_dead5q = _GLF_FUZZED(injectionSwitch);
   if(donor_replacementGLF_dead5q.y < GLF_merged2_0_1_33_1_1_29donor_replacementGLF_dead5EPSILONdonor_replacementGLF_dead5mat.x)
    {
     GLF_merged2_0_1_33_1_1_29donor_replacementGLF_dead5EPSILONdonor_replacementGLF_dead5mat.y = donor_replacementGLF_dead5q.x;
     ;
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
    return 1.0;
  }
 if(_GLF_DEAD(false))
  {
   vec4 GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution;
   mediump vec4 donor_replacementGLF_dead0gl_FragColor = _GLF_FUZZED((- _GLF_color));
   mediump vec4 donor_replacementGLF_dead0gl_FragCoord = _GLF_FUZZED(mix((iMouse + vec4(1.5, -0.6, 518.951, 9090.4321)), iMouse, bvec4(true, false, false, false)));
   vec2 donor_replacementGLF_dead0mouse = _GLF_FUZZED(floor(resolution));
   GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.xy = donor_replacementGLF_dead0mouse;
   if(_GLF_DEAD(false))
    return 1.0;
   vec2 donor_replacementGLF_dead0resolution = _GLF_FUZZED(tan(injectionSwitch));
   GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw = donor_replacementGLF_dead0resolution;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return 1.0;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       for(
           int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
           _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
           _injected_loop_counter ++
       )
        {
         return 1.0;
        }
       if(_GLF_DEAD(false))
        return 1.0;
      }
     if(_GLF_DEAD(false))
      return 1.0;
     return 1.0;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return 1.0;
   for(
       int _injected_loop_counter = 0;
       _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
       _injected_loop_counter ++
   )
    {
     if(_GLF_DEAD(false))
      break;
     vec3 GLF_dead0color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      continue;
     float GLF_dead0len;
     float GLF_dead0t = time;
     if(_GLF_DEAD(false))
      discard;
     _GLF_struct_21 _GLF_struct_replacement_21 = _GLF_struct_21(mat2x3(1.0), donor_replacementGLF_dead0gl_FragCoord.xy / GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw, _GLF_struct_20(uvec2(1u), _GLF_struct_18(1, bvec4(true)), _GLF_struct_19(mat4x2(1.0))));
     vec2 GLF_dead0offset = _GLF_struct_replacement_21.GLF_dead0uv;
     do
      {
       GLF_dead0offset -= .5;
      }
     while(_GLF_WRAPPED_LOOP(false));
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       GLF_dead0offset.x *= GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw.x / GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw.y;
      }
     GLF_dead0len = length(GLF_dead0offset);
     do
      {
       GLF_dead0t += 0.07;
      }
     while(_GLF_WRAPPED_LOOP(false));
     vec2 GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
     _GLF_struct_11 _GLF_struct_replacement_11 = _GLF_struct_11(_GLF_struct_7(_GLF_struct_5(true, mat4x2(1.0)), _GLF_struct_6(ivec2(1), ivec2(1), mat3x4(1.0), mat2x4(1.0))), ivec4(1), _GLF_struct_10(1, _GLF_struct_8(sin(GLF_dead0t) + 1.0, mat3x4(1.0), uvec4(1u)), 1, _GLF_struct_9(mat3x2(1.0), 1u)), 1.0);
     float GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        discard;
       break;
      }
     _GLF_struct_replacement_21.GLF_dead0uv += GLF_dead0offset_unit_vector * _GLF_struct_replacement_11._f2._f1.GLF_dead0firstMod * GLF_dead0secondMod + GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.xy * 2.;
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         if(_GLF_DEAD(false))
          discard;
         discard;
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return 1.0;
      }
     GLF_dead0color[0] = .01 / length(abs(fract(_GLF_struct_replacement_21.GLF_dead0uv) - .5));
     if(_GLF_DEAD(false))
      return 1.0;
     do
      {
       GLF_dead0offset.x *= GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw.x / GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.zw.y;
      }
     while(_GLF_WRAPPED_LOOP(false));
     GLF_dead0len = length(GLF_dead0offset);
     if(_GLF_DEAD(false))
      discard;
     for(
         int _injected_loop_counter = 0;
         _GLF_WRAPPED_LOOP(_injected_loop_counter < 1);
         _injected_loop_counter ++
     )
      {
       if(_GLF_DEAD(false))
        discard;
      }
     GLF_dead0t += 0.07;
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       do
        {
         GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
     else
      {
       if(_GLF_DEAD(false))
        continue;
      }
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
      }
     else
      {
       _GLF_struct_replacement_11._f2._f1.GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
      }
     GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
     do
      {
       for(
           int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
           _GLF_WRAPPED_LOOP(_injected_loop_counter < _GLF_IDENTITY(1, clamp(1, 1, 1)));
           _injected_loop_counter ++
       )
        {
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
          {
           do
            {
             _GLF_struct_replacement_21.GLF_dead0uv += GLF_dead0offset_unit_vector * _GLF_struct_replacement_11._f2._f1.GLF_dead0firstMod * GLF_dead0secondMod + GLF_merged2_0_2_31_2_2_36donor_replacementGLF_dead0mousedonor_replacementGLF_dead0resolution.xy * 2.;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
          }
         else
          {
          }
        }
       if(_GLF_DEAD(false))
        discard;
       for(
           int _injected_loop_counter = 1;
           _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
           _injected_loop_counter --
       )
        {
         if(_GLF_DEAD(false))
          return 1.0;
        }
      }
     while(_GLF_WRAPPED_LOOP(false));
     GLF_dead0color[1] = .01 / length(abs(fract(_GLF_struct_replacement_21.GLF_dead0uv) - .5));
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
      {
      }
     else
      {
       donor_replacementGLF_dead0gl_FragColor = vec4(GLF_dead0color / .1, time);
      }
    }
  }
}
vec3 hsv2rgb(vec3 c)
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return vec3(1.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
      return vec3(1.0);
    }
   else
    {
    }
  }
 vec4 K = vec4(1.0, 2.0 / 3.0, 10.0 / 3.0, 3.0);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
 do
  {
   return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
}
vec4 colorize(float c)
{
 float hue = mix(0.6, 1.15, min(c * 1.2 - 0.05, 1.0));
 _GLF_struct_47 _GLF_struct_replacement_47 = _GLF_struct_47(1.0 - pow(c, 4.0), mat3x4(1.0));
 _GLF_struct_49 _GLF_struct_replacement_49 = _GLF_struct_49(mat4x3(1.0), _GLF_struct_48(c, mat2(1.0)));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
  return vec4(1.0);
 if(_GLF_DEAD(false))
  return vec4(1.0);
 vec3 hsv = vec3(hue, _GLF_struct_replacement_47.sat, _GLF_struct_replacement_49._f1.lum);
 vec3 rgb = hsv2rgb(hsv);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return vec4(1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec4(1.0);
 if(_GLF_DEAD(false))
  {
   vec2 donor_replacementGLF_dead4b = _GLF_FUZZED(resolution);
   _GLF_struct_28 _GLF_struct_replacement_28 = _GLF_struct_28(1u, _GLF_struct_23(ivec2(1), _GLF_struct_22(mat2x4(1.0)), mat2(1.0), uvec3(1u)), _GLF_struct_25(_GLF_struct_24(uvec2(1u), mat2x4(1.0), uvec4(1u)), mat2x3(1.0), mat4x3(1.0), 1u), _GLF_struct_27(_GLF_struct_26(_GLF_FUZZED(-5.3), vec2(1.0), mat2x3(1.0), mat3x4(1.0)), 1u));
   for(
       float GLF_dead4i = 16.0;
       GLF_dead4i >= 1.0;
       GLF_dead4i -= 1.0
   )
    {
     _GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p = pow(2.0, GLF_dead4i);
     for(
         int _injected_loop_counter = 0;
         _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
         _injected_loop_counter ++
     )
      {
       if((_GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p < donor_replacementGLF_dead4b.x) ^^ (_GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p < donor_replacementGLF_dead4b.y))
        {
         _GLF_struct_replacement_47.sat += _GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p;
        }
      }
     if(_GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p < donor_replacementGLF_dead4b.x)
      {
       donor_replacementGLF_dead4b.x -= _GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p;
       for(
           int _injected_loop_counter = 1;
           _GLF_WRAPPED_LOOP(_injected_loop_counter > int(_GLF_ZERO(0.0, injectionSwitch.x)));
           _injected_loop_counter --
       )
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
          return vec4(1.0);
        }
      }
     if(_GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p < donor_replacementGLF_dead4b.y)
      {
       donor_replacementGLF_dead4b.y -= _GLF_struct_replacement_28._f3._f0.donor_replacementGLF_dead4p;
      }
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return vec4(1.0);
 if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
  return vec4(1.0);
 if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
  {
   if(_GLF_DEAD(false))
    return vec4(1.0);
  }
 else
  {
  }
 return vec4(rgb, 1.0);
}
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
 vec4 GLF_merged2_0_2_8_2_2_9mousePosscreenPos;
 if(_GLF_WRAPPED_IF_FALSE(false))
  {
   if(_GLF_DEAD(false))
    return;
  }
 else
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(cos(0.0))))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
     return;
    }
  }
 if(_GLF_DEAD(false))
  {
   do
    {
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       if(_GLF_WRAPPED_IF_FALSE(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          discard;
        }
       else
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          return;
         return;
        }
      }
     else
      {
      }
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 if(_GLF_DEAD(false))
  {
   for(
       int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     return;
    }
  }
 vec2 screenPos = fragCoord.xy / resolution.xy * 2.0 - 1.0;
 GLF_merged2_0_2_8_2_2_9mousePosscreenPos.zw = screenPos;
 vec2 mousePos = iMouse.xy / resolution.xy * 2.0 - 1.0;
 GLF_merged2_0_2_8_2_2_9mousePosscreenPos.xy = mousePos;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return;
 if(_GLF_DEAD(false))
  {
   vec4 GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1rddonor_replacementGLF_dead1t;
   vec4 GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t;
   float donor_replacementGLF_dead1aD = _GLF_FUZZED(float(13091u));
   vec3 donor_replacementGLF_dead1col = _GLF_FUZZED(mat4x3(4745.1081, 7125.9727, 206.690, 67.40, 7.0, 755.822, 9340.1181, -6.4, -0.3, 34.98, -43.51, -894.530)[0]);
   float donor_replacementGLF_dead1layers = _GLF_FUZZED(RAY_STOP_TRESHOLD);
   vec3 donor_replacementGLF_dead1rd = _GLF_FUZZED(sqrt(vec3(5734.2871, -3847.2501, -449.129)));
   GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1rddonor_replacementGLF_dead1t.xyz = donor_replacementGLF_dead1rd;
   if(_GLF_DEAD(false))
    return;
   vec3 donor_replacementGLF_dead1sp = _GLF_FUZZED(vec3(-2.6, -9590.1264, -41.88));
   GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.xyz = donor_replacementGLF_dead1sp;
   float donor_replacementGLF_dead1t = _GLF_FUZZED(-8127.6254);
   GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1rddonor_replacementGLF_dead1t.w = donor_replacementGLF_dead1t;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return;
   GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.w = GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1rddonor_replacementGLF_dead1t.w;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return;
   {
    vec3 GLF_dead1sc = GLF_dead1selfColor(GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.xyz);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return;
    donor_replacementGLF_dead1col += 8. * GLF_dead1sc * (donor_replacementGLF_dead1aD * donor_replacementGLF_dead1aD * (3. - 2. * donor_replacementGLF_dead1aD) / (1. + GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.w * GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.w * 0.85));
    for(
        int _injected_loop_counter = 1;
        _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
        _injected_loop_counter --
    )
     {
      if(_GLF_DEAD(false))
       continue;
      if(_GLF_WRAPPED_IF_FALSE(_GLF_IDENTITY(false, (true ? false : _GLF_FUZZED(true)))))
       {
       }
      else
       {
        donor_replacementGLF_dead1col += 1.0 * GLF_dead1reflectedColor(GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1spdonor_replacementGLF_dead1t.xyz, GLF_merged2_0_3_28_3_1_27donor_replacementGLF_dead1rddonor_replacementGLF_dead1t.xyz);
       }
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     return;
    donor_replacementGLF_dead1layers ++;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      for(
          int _injected_loop_counter = 0;
          _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
          _injected_loop_counter ++
      )
       {
        if(_GLF_DEAD(false))
         return;
       }
      do
       {
        return;
       }
      while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
     }
   }
  }
 vec3 cameraPos = vec3(0.16 * sin(time), 0.16 * cos(time), time);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 vec3 cameraDir = vec3(0.0, 0.0, 1.0);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       for(
           int _injected_loop_counter = 0;
           _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
           _injected_loop_counter ++
       )
        {
         return;
         if(_GLF_DEAD(false))
          continue;
        }
      }
     if(_GLF_DEAD(false))
      {
       float donor_replacementGLF_dead1n = _GLF_FUZZED(length(16.43));
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
           return;
          return;
         }
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          do
           {
            GLF_dead1pal(donor_replacementGLF_dead1n, vec3(0.5, 0.5, 0.5), vec3(0.0, 0.5, 0.5), vec3(.0, 1.0, .0), vec3(0.62, 0.33, 0.37));
           }
          while(_GLF_WRAPPED_LOOP(false));
         }
        else
         {
         }
       }
       do
        {
         if(_GLF_DEAD(false))
          return;
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      }
     return;
    }
  }
 else
  {
  }
 vec3 cameraPlaneU = vec3(1.0, 0.0, 0.0);
 if(_GLF_DEAD(false))
  return;
 do
  {
   do
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
      {
       do
        {
         return;
        }
       while(_GLF_WRAPPED_LOOP(false));
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
   if(_GLF_DEAD(false))
    break;
  }
 while(_GLF_WRAPPED_LOOP(false));
 for(
     int _injected_loop_counter = 1;
     _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
     _injected_loop_counter --
 )
  {
   do
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       vec4 donor_replacementGLF_dead6pos = _GLF_FUZZED(iMouse);
       if(donor_replacementGLF_dead6pos.w > 100.)
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          continue;
         vec3(.0);
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       vec3 donor_replacementGLF_dead1pos = _GLF_FUZZED(cameraDir);
       {
        if(_GLF_WRAPPED_IF_FALSE(false))
         {
         }
        else
         {
          if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
           {
            {
             GLF_dead1iTime += GLF_dead1iTime;
            }
           }
         }
        for(
            int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
            _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
            _injected_loop_counter ++
        )
         {
          if(_GLF_DEAD(false))
           return;
         }
        vec3 GLF_dead1pol = GLF_dead1carToPol(donor_replacementGLF_dead1pos - vec3(0.4, 0, 0));
        GLF_dead1spectrum(0.45 * GLF_dead1pol.x);
       }
       if(_GLF_DEAD(false))
        discard;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
    }
   while(_GLF_WRAPPED_LOOP(false));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 vec3 cameraPlaneV = vec3(0.0, 1.0, 0.0) * (resolution.y / resolution.x);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return;
 if(_GLF_DEAD(false))
  return;
 vec3 rayPos = cameraPos;
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     return;
    }
   else
    {
    }
  }
 vec3 rayDir = cameraDir + GLF_merged2_0_2_8_2_2_9mousePosscreenPos.zw.x * cameraPlaneU + GLF_merged2_0_2_8_2_2_9mousePosscreenPos.zw.y * cameraPlaneV;
 do
  {
   rayDir = normalize(rayDir);
  }
 while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < sin(log(1.0))))));
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < 0.0)), (false ? _GLF_FUZZED(false) : _GLF_FALSE(false, (gl_FragCoord.x < 0.0))))))
  return;
 float dist = scene(rayPos);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   vec3 GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     for(
         int _injected_loop_counter = int(_GLF_ONE(1.0, injectionSwitch.y));
         _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
         _injected_loop_counter --
     )
      {
       return;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
    }
   float donor_replacementGLF_dead2aperture = _GLF_FUZZED((dist ++));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
    return;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return;
   GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.x = donor_replacementGLF_dead2aperture;
   float donor_replacementGLF_dead2offset = _GLF_FUZZED(time);
   if(_GLF_DEAD(false))
    return;
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      return;
    }
   else
    {
     GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.y = donor_replacementGLF_dead2offset;
    }
   float donor_replacementGLF_dead2radius = _GLF_FUZZED(mix(-231.870, RAY_STOP_TRESHOLD, dist));
   for(
       int _injected_loop_counter = 1;
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 0);
       _injected_loop_counter --
   )
    {
     for(
         int _injected_loop_counter = 0;
         _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
         _injected_loop_counter ++
     )
      {
       if(_GLF_DEAD(false))
        return;
       GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.z = donor_replacementGLF_dead2radius;
      }
    }
   float donor_replacementGLF_dead2width = _GLF_FUZZED(float(true));
   if(_GLF_DEAD(false))
    return;
   {
    for(
        int _injected_loop_counter = 0;
        _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y)));
        _injected_loop_counter ++
    )
     {
      GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.y = (donor_replacementGLF_dead2width * donor_replacementGLF_dead2width / GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.x - GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.x) / 2.;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         return;
        return;
       }
      else
       {
       }
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     return;
    GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.z = GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.y + GLF_merged3_0_1_34_1_1_32_2_1_32donor_replacementGLF_dead2aperturedonor_replacementGLF_dead2offsetdonor_replacementGLF_dead2radius.x;
   }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   do
    {
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       return;
      }
     else
      {
      }
    }
   while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))));
  }
 _GLF_struct_55 _GLF_struct_replacement_55;
 for(
     int i = 0;
     i < MAX_RAY_STEPS;
     i ++
 )
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
    break;
   if(dist < RAY_STOP_TRESHOLD)
    {
     if(_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? false : _GLF_FUZZED(false)))))
      {
       do
        {
         if(_GLF_DEAD(false))
          return;
         discard;
        }
       while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))));
      }
     continue;
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      discard;
    }
   rayPos += rayDir * dist;
   dist = scene(rayPos);
   if(_GLF_DEAD(false))
    continue;
   if(_GLF_DEAD(false))
    discard;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      continue;
     float donor_replacementGLF_dead5EPSILON = _GLF_FUZZED(dist);
     vec3 donor_replacementGLF_dead5dir = _GLF_FUZZED(rayPos);
     for(
         int GLF_dead5i = 0;
         GLF_dead5i < 300;
         GLF_dead5i ++
     )
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
        discard;
       vec3 GLF_dead5pos = cameraPlaneU + GLF_dead1iTime * donor_replacementGLF_dead5dir;
       vec2 GLF_dead5q = GLF_dead5mapWithMat(GLF_dead5pos);
       if(GLF_dead5q.y < donor_replacementGLF_dead5EPSILON)
        {
         dist = GLF_dead5q.x;
         break;
         if(_GLF_DEAD(false))
          return;
        }
       GLF_dead1iTime += GLF_dead5q.y;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        return;
       if(GLF_dead5i == 199)
        {
         for(
             int _injected_loop_counter = 0;
             _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
             _injected_loop_counter ++
         )
          {
           GLF_dead1iTime = 1000.0;
          }
        }
      }
    }
   if(_GLF_DEAD(false))
    return;
   if(_GLF_DEAD(false))
    continue;
   _GLF_struct_replacement_55._f1.stepsTaken = i;
  }
 if(_GLF_DEAD(false))
  return;
 vec4 color = colorize(pow(float(_GLF_struct_replacement_55._f1.stepsTaken) / float(MAX_RAY_STEPS), 0.9));
 if(_GLF_DEAD(false))
  {
   for(
       int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
       _GLF_WRAPPED_LOOP(_injected_loop_counter < int(_GLF_ONE(1.0, injectionSwitch.y)));
       _injected_loop_counter ++
   )
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     do
      {
       return;
      }
     while(_GLF_WRAPPED_LOOP(false));
    }
   vec2 donor_replacementGLF_dead3res = _GLF_FUZZED(round(GLF_merged2_0_2_8_2_2_9mousePosscreenPos.zw));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return;
   do
    {
     dist = clamp(dist + mix(donor_replacementGLF_dead3res.y, 0., donor_replacementGLF_dead3res.x / 20.), 0., 1.);
    }
   while(_GLF_WRAPPED_LOOP(false));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
      {
      }
     else
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
            return;
           return;
          }
         _GLF_struct_60 _GLF_struct_replacement_60 = _GLF_struct_60(_GLF_struct_57(vec3(1.0), _GLF_struct_56(1.0, mat3(1.0))), _GLF_struct_59(_GLF_struct_58(vec3(1.0), ivec3(1), 1.0, uvec2(1u))), _GLF_FUZZED(cameraPos), mat2x4(1.0), 1u);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
          return;
         _GLF_struct_34 _GLF_struct_replacement_34 = _GLF_struct_34(_GLF_struct_32(_GLF_struct_29(mat2x3(1.0)), _GLF_struct_30(true), _GLF_struct_31(bvec4(true), mat4x2(1.0))), bvec3(true), _GLF_struct_33(_GLF_FUZZED(MAX_RAY_STEPS), uvec2(1u)), bvec3(true));
         if(_GLF_DEAD(false))
          {
           if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
            }
           else
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               return;
              }
            }
          }
         if(_GLF_DEAD(false))
          return;
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           float GLF_dead5depth = 0.0;
           _GLF_struct_61 _GLF_struct_replacement_61 = _GLF_struct_61(0.0, bvec2(true), mat3x4(1.0));
           for(
               int GLF_dead5i = 0;
               GLF_dead5i < 300;
               GLF_dead5i ++
           )
            {
             vec3 GLF_dead5pos = cameraDir + GLF_dead5depth * cameraPlaneU;
             vec2 GLF_dead5q = GLF_dead5mapWithMat(GLF_dead5pos);
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              return;
             if(GLF_dead5q.y < dist)
              {
               _GLF_struct_replacement_61.GLF_dead5mat = GLF_dead5q.x;
               break;
              }
             GLF_dead5depth += GLF_dead5q.y;
             if(_GLF_DEAD(false))
              return;
             if(GLF_dead5i == 199)
              {
               if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                {
                }
               else
                {
                 GLF_dead5depth = 1000.0;
                }
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(length(0.0))))))
              discard;
            }
           do
            {
             if(_GLF_struct_replacement_34._f2.donor_replacementGLF_dead5i == 0)
              GLF_dead1iTime = GLF_dead5depth;
            }
           while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))));
           for(
               int _injected_loop_counter = 1;
               _GLF_WRAPPED_LOOP(_injected_loop_counter > 0);
               _injected_loop_counter --
           )
            {
             if(GLF_dead5depth >= 1000.0)
              {
               vec3(1.0);
              }
            }
           vec3 GLF_dead5pos = cameraDir + GLF_dead5depth * cameraPlaneU;
           vec3 GLF_dead5normal = GLF_dead5estimateNormal(GLF_dead5pos);
           if(_GLF_DEAD(false))
            return;
           vec3 GLF_dead5dir1 = normalize(vec3(1.0, 1.0, 1.0));
           _GLF_struct_replacement_60.donor_replacementGLF_dead5col += vec3(0.5, 0.1, 0.1) * GLF_dead5softshadow(GLF_dead5pos, GLF_dead5dir1, 20.0 * dist, 100.0, 4.0) * clamp(dot(GLF_dead5normal, GLF_dead5dir1), 0.0, 1.0);
           vec3 GLF_dead5pos2 = vec3(- 9.0, 60.0, 6.0);
           vec3 GLF_dead5dir2 = normalize(GLF_dead5pos2 - GLF_dead5pos);
           if(_GLF_DEAD(false))
            {
             do
              {
               return;
              }
             while(_GLF_WRAPPED_LOOP(false));
            }
           _GLF_struct_replacement_60.donor_replacementGLF_dead5col += vec3(0.0, 0.2, 0.5) * GLF_dead5softshadow(GLF_dead5pos, GLF_dead5dir2, 20.0 * dist, 100.0, 4.0) * clamp(dot(GLF_dead5normal, GLF_dead5dir2), 0.0, 1.0);
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_WRAPPED_IF_FALSE(false))
              {
              }
             else
              {
               if(_GLF_struct_replacement_61.GLF_dead5mat < 1.0)
                {
                 ;
                }
              }
            }
           else
            {
            }
           vec3 GLF_dead5reflected = reflect(cameraPlaneU, GLF_dead5normal);
           cameraDir = GLF_dead5pos + dist * GLF_dead5reflected;
           if(_GLF_DEAD(false))
            {
             do
              {
               return;
              }
             while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
              return;
            }
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             if(_GLF_WRAPPED_IF_TRUE(true))
              {
               if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                return;
               cameraPlaneU = GLF_dead5reflected;
              }
             else
              {
              }
            }
           else
            {
            }
          }
        }
       return;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
    return;
  }
 if(_GLF_DEAD(false))
  return;
 fragColor = color;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
    }
   else
    {
     return;
    }
  }
 if(_GLF_DEAD(false))
  return;
}
void main()
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(false))
        return;
       if(_GLF_DEAD(false))
        return;
       return;
      }
    }
   else
    {
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return;
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
      return;
     if(_GLF_DEAD(false))
      {
       do
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           vec4 GLF_merged2_0_1_30_1_3_29donor_replacementGLF_dead6distdonor_replacementGLF_dead6pos;
           float donor_replacementGLF_dead6dist = _GLF_FUZZED(GLF_dead1iTime);
           GLF_merged2_0_1_30_1_3_29donor_replacementGLF_dead6distdonor_replacementGLF_dead6pos.x = donor_replacementGLF_dead6dist;
           vec3 donor_replacementGLF_dead6pos = _GLF_FUZZED(smoothstep(GLF_dead1iTime, GLF_dead1iTime, exp2(vec3(1844.4085, -2.1, 1492.3612))));
           GLF_merged2_0_1_30_1_3_29donor_replacementGLF_dead6distdonor_replacementGLF_dead6pos.yzw = donor_replacementGLF_dead6pos;
           vec3 donor_replacementGLF_dead6tgt = _GLF_FUZZED(vec3(55.74, 772.953, 45.80));
           if(length(GLF_merged2_0_1_30_1_3_29donor_replacementGLF_dead6distdonor_replacementGLF_dead6pos.yzw - donor_replacementGLF_dead6tgt) < 1e-1)
            {
             exp(- GLF_merged2_0_1_30_1_3_29donor_replacementGLF_dead6distdonor_replacementGLF_dead6pos.x * 0.05);
            }
          }
        }
       while(_GLF_WRAPPED_LOOP(false));
       _GLF_struct_38 _GLF_struct_replacement_38 = _GLF_struct_38(_GLF_struct_37(_GLF_struct_35(mat2(1.0), ivec3(1), bvec3(true), 1.0), _GLF_FUZZED((time + -2.4)), _GLF_struct_36(vec2(1.0), ivec2(1), mat2x4(1.0))));
       float donor_replacementGLF_dead3dist = _GLF_FUZZED((time / RAY_STOP_TRESHOLD));
       if(_GLF_struct_replacement_38._f0.donor_replacementGLF_dead3d > 0.)
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            return;
           _GLF_struct_66 _GLF_struct_replacement_66 = _GLF_struct_66(_GLF_FUZZED(atan(resolution)), _GLF_struct_63(_GLF_struct_62(mat4x3(1.0), 1.0, vec2(1.0), mat4x3(1.0))), mat4(1.0), _GLF_struct_65(ivec4(1), _GLF_struct_64(1.0, mat4x2(1.0)), true, mat2x4(1.0)));
           do
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              return;
            }
           while(_GLF_WRAPPED_LOOP(false));
           float donor_replacementGLF_dead4c = _GLF_FUZZED(84.01);
           float donor_replacementGLF_dead4p = _GLF_FUZZED(GLF_dead1iTime);
           if((donor_replacementGLF_dead4p < _GLF_struct_replacement_66.donor_replacementGLF_dead4b.x) ^^ (donor_replacementGLF_dead4p < _GLF_struct_replacement_66.donor_replacementGLF_dead4b.y))
            {
             donor_replacementGLF_dead4c += donor_replacementGLF_dead4p;
            }
          }
         donor_replacementGLF_dead3dist = _GLF_struct_replacement_38._f0.donor_replacementGLF_dead3d;
         for(
             int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
             _GLF_WRAPPED_LOOP(_injected_loop_counter != int(_GLF_ONE(1.0, injectionSwitch.y)));
             _injected_loop_counter ++
         )
          {
           true;
          }
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          return;
         do
          {
           if(_GLF_DEAD(false))
            break;
           return;
          }
         while(_GLF_WRAPPED_LOOP(false));
        }
      }
    }
   if(_GLF_DEAD(false))
    return;
   return;
  }
 if(_GLF_DEAD(false))
  return;
 mainImage(_GLF_color, gl_FragCoord.xy);
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   for(
       int _injected_loop_counter = 0;
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        return;
      }
     else
      {
       if(_GLF_DEAD(false))
        continue;
       _GLF_color.a = 1.0;
      }
    }
  }
 else
  {
  }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     do
      {
       return;
      }
     while(_GLF_WRAPPED_LOOP(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))));
    }
   do
    {
     return;
    }
   while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, ! (! (false)))));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   for(
       int _injected_loop_counter = int(_GLF_ZERO(0.0, injectionSwitch.x));
       _GLF_WRAPPED_LOOP(_injected_loop_counter != 1);
       _injected_loop_counter ++
   )
    {
     return;
    }
  }
}
