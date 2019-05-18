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
 bool _f0;
 vec3 col;
 bvec4 _f1;
} ;

struct _GLF_struct_71 {
 mat3 _f0;
 _GLF_struct_70 _f1;
 mat4x3 _f2;
} ;

struct _GLF_struct_68 {
 ivec3 _f0;
} ;

struct _GLF_struct_67 {
 mat3x2 _f0;
 float y;
 vec2 _f1;
} ;

struct _GLF_struct_69 {
 _GLF_struct_67 _f0;
 _GLF_struct_68 _f1;
 vec3 _f2;
} ;

struct _GLF_struct_64 {
 mat4 _f0;
 mat2x4 _f1;
 bvec4 _f2;
 mat4 _f3;
} ;

struct _GLF_struct_65 {
 _GLF_struct_64 _f0;
} ;

struct _GLF_struct_62 {
 vec3 _f0;
 mat4 _f1;
 mat2x4 _f2;
} ;

struct _GLF_struct_61 {
 vec4 _f0;
 bvec2 _f1;
 mat3 _f2;
} ;

struct _GLF_struct_63 {
 _GLF_struct_61 _f0;
 _GLF_struct_62 _f1;
} ;

struct _GLF_struct_59 {
 uvec3 _f0;
} ;

struct _GLF_struct_60 {
 uvec2 _f0;
 _GLF_struct_59 _f1;
 vec3 shadowStartPos;
} ;

struct _GLF_struct_66 {
 _GLF_struct_60 _f0;
 _GLF_struct_63 _f1;
 _GLF_struct_65 _f2;
} ;

struct _GLF_struct_57 {
 vec3 _f0;
} ;

struct _GLF_struct_55 {
 mat3x4 _f0;
 mat4x3 _f1;
 vec3 _f2;
} ;

struct _GLF_struct_56 {
 mat4x3 _f0;
 _GLF_struct_55 _f1;
} ;

struct _GLF_struct_58 {
 _GLF_struct_56 _f0;
 mat2 _f1;
 float s;
 _GLF_struct_57 _f2;
} ;

struct _GLF_struct_52 {
 mat2x3 _f0;
 mat2x4 _f1;
 ivec2 _f2;
} ;

struct _GLF_struct_51 {
 float _f0;
 uint _f1;
} ;

struct _GLF_struct_53 {
 _GLF_struct_51 _f0;
 _GLF_struct_52 _f1;
 vec4 _f2;
 uvec2 _f3;
} ;

struct _GLF_struct_50 {
 float dif;
 mat3x2 _f0;
} ;

struct _GLF_struct_54 {
 _GLF_struct_50 _f0;
 _GLF_struct_53 _f1;
 ivec3 _f2;
 mat3x4 _f3;
} ;

struct _GLF_struct_48 {
 mat2x4 _f0;
} ;

struct _GLF_struct_49 {
 float d;
 mat4x3 _f0;
 mat3x4 _f1;
 _GLF_struct_48 _f2;
 uvec2 _f3;
} ;

struct _GLF_struct_45 {
 mat2x3 _f0;
 mat2x3 _f1;
 bvec3 _f2;
} ;

struct _GLF_struct_44 {
 ivec3 _f0;
} ;

struct _GLF_struct_43 {
 bvec2 _f0;
 uvec3 _f1;
 mat3 _f2;
 vec3 _f3;
} ;

struct _GLF_struct_46 {
 _GLF_struct_43 _f0;
 _GLF_struct_44 _f1;
 _GLF_struct_45 _f2;
} ;

struct _GLF_struct_42 {
 bvec4 _f0;
} ;

struct _GLF_struct_47 {
 _GLF_struct_42 _f0;
 vec3 cv;
 _GLF_struct_46 _f1;
} ;

struct _GLF_struct_41 {
 bvec2 _f0;
 mat2 _f1;
 vec3 mm;
} ;

struct _GLF_struct_40 {
 vec4 _f0;
 vec2 shadowGridPos;
} ;

struct _GLF_struct_37 {
 mat4 _f0;
 vec4 _f1;
 ivec3 _f2;
} ;

struct _GLF_struct_38 {
 _GLF_struct_37 _f0;
 vec3 rd0;
} ;

struct _GLF_struct_39 {
 mat3x2 _f0;
 _GLF_struct_38 _f1;
} ;

struct _GLF_struct_35 {
 mat4 _f0;
 uvec2 _f1;
 uvec4 _f2;
} ;

struct _GLF_struct_33 {
 ivec2 _f0;
} ;

struct _GLF_struct_34 {
 _GLF_struct_33 _f0;
 uvec2 _f1;
} ;

struct _GLF_struct_36 {
 _GLF_struct_34 _f0;
 float tb;
 uint _f1;
 _GLF_struct_35 _f2;
} ;

struct _GLF_struct_30 {
 mat2x3 _f0;
} ;

struct _GLF_struct_29 {
 bvec2 _f0;
} ;

struct _GLF_struct_31 {
 _GLF_struct_29 _f0;
 _GLF_struct_30 _f1;
} ;

struct _GLF_struct_32 {
 uvec3 _f0;
 vec3 rd1;
 _GLF_struct_31 _f1;
} ;

struct _GLF_struct_27 {
 ivec2 _f0;
} ;

struct _GLF_struct_26 {
 bvec4 _f0;
} ;

struct _GLF_struct_28 {
 _GLF_struct_26 _f0;
 vec3 rs;
 _GLF_struct_27 _f1;
} ;

struct _GLF_struct_25 {
 vec4 sphereCenter;
 uvec4 _f0;
 bvec3 _f1;
} ;

struct _GLF_struct_22 {
 uvec3 _f0;
 mat4 _f1;
 uint _f2;
 int _f3;
} ;

struct _GLF_struct_23 {
 _GLF_struct_22 _f0;
} ;

struct _GLF_struct_24 {
 mat2x3 _f0;
 float t;
 float _f1;
 _GLF_struct_23 _f2;
} ;

struct _GLF_struct_21 {
 float t;
 vec2 _f0;
 uvec2 _f1;
} ;

struct _GLF_struct_19 {
 ivec3 _f0;
 float _f1;
 mat3x2 _f2;
 vec3 _f3;
} ;

struct _GLF_struct_17 {
 mat3x2 _f0;
 vec4 _f1;
} ;

struct _GLF_struct_16 {
 mat3 _f0;
} ;

struct _GLF_struct_18 {
 _GLF_struct_16 _f0;
 _GLF_struct_17 _f1;
 vec3 _f2;
} ;

struct _GLF_struct_14 {
 vec4 _f0;
 mat3x4 _f1;
} ;

struct _GLF_struct_13 {
 mat4 _f0;
 uint _f1;
 ivec3 _f2;
 vec3 _f3;
} ;

struct _GLF_struct_15 {
 _GLF_struct_13 _f0;
 _GLF_struct_14 _f1;
} ;

struct _GLF_struct_20 {
 ivec2 _f0;
 _GLF_struct_15 _f1;
 _GLF_struct_18 _f2;
 _GLF_struct_19 _f3;
 mat3 ca0;
} ;

struct _GLF_struct_10 {
 uvec4 _f0;
} ;

struct _GLF_struct_11 {
 _GLF_struct_10 _f0;
} ;

struct _GLF_struct_12 {
 vec3 _f0;
 mat3x4 _f1;
 float ta;
 vec2 _f2;
 _GLF_struct_11 _f3;
} ;

struct _GLF_struct_8 {
 uvec2 _f0;
 bvec3 _f1;
 bvec4 _f2;
} ;

struct _GLF_struct_9 {
 mat2x4 _f0;
 _GLF_struct_8 _f1;
 bool _f2;
 vec2 p;
} ;

struct _GLF_struct_7 {
 bvec3 _f0;
 vec2 _f1;
 vec3 lcol;
 ivec3 _f2;
} ;

struct _GLF_struct_4 {
 int _f0;
 mat3x4 _f1;
 ivec4 _f2;
 bool _f3;
 vec2 c1;
} ;

struct _GLF_struct_3 {
 int _f0;
 bvec2 _f1;
} ;

struct _GLF_struct_5 {
 _GLF_struct_3 _f0;
 mat4x3 _f1;
 _GLF_struct_4 _f2;
} ;

struct _GLF_struct_1 {
 ivec3 _f0;
 mat4 _f1;
 ivec4 _f2;
 mat3x2 _f3;
} ;

struct _GLF_struct_0 {
 float _f0;
 vec3 _f1;
} ;

struct _GLF_struct_2 {
 _GLF_struct_0 _f0;
 _GLF_struct_1 _f1;
} ;

struct _GLF_struct_6 {
 _GLF_struct_2 _f0;
 _GLF_struct_5 _f1;
 mat2x3 _f2;
} ;

layout(location = 0) out vec4 _GLF_color;

uniform vec2 injectionSwitch;

uniform float time;

uniform vec2 resolution;

float hash12(vec2 p)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return 1.0;
 vec3 p3 = fract(vec3(p.xyx) * .1031);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = intBitsToFloat(ivec4(-22454, -47362, -82661, 50060));
    }
   return 1.0;
  }
 p3 += dot(p3, p3.yzx + 19.19);
 if(_GLF_DEAD(false))
  {
   _GLF_color = max(vec4(-0.7, -7695.6447, 32.31, 21.47), vec4(763.227, 95.64, -1.5, -745.489));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(513.255, 4.5, -92.60, -6851.3924);
  }
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  return 1.0;
 return fract((p3.x + p3.y) * p3.z);
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)))))
    return 1.0;
   return 1.0;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.5, -194.080, -6131.2879, -442.319);
    }
   if(_GLF_DEAD(false))
    return 1.0;
  }
}
vec2 hash22(vec2 p)
{
 vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-7239.3388, 949.163, -62.87, 7959.7994);
  }
 p3 += dot(p3, p3.yzx + 19.19);
 return fract(vec2((p3.x + p3.y) * p3.z, (p3.x + p3.z) * p3.y));
}
vec4 _GLF_outlined_1()
{
 return vec4(-687.149, 4263.4008, -0.6, 9.8);
}
bool intersectPlane(const in vec3 ro, const in vec3 rd, const in float height, out float dist)
{
 if(rd.y == 0.0)
  {
   return false;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return true;
     _GLF_color = _GLF_outlined_1();
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   _GLF_color = exp2(smoothstep(-491.071, 1.1, vec4(-940.039, 160.150, -435.424, -7.2)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec2(-9.5, -1.0).rrrg;
    }
  }
 _GLF_struct_49 _GLF_struct_replacement_49 = _GLF_struct_49(- (ro.y - height) / rd.y, mat4x3(1.0), mat3x4(1.0), _GLF_struct_48(mat2x4(1.0)), uvec2(1u));
 _GLF_struct_replacement_49.d = min(100000.0, _GLF_struct_replacement_49.d);
 if(_GLF_struct_replacement_49.d > 0.)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return true;
   dist = _GLF_struct_replacement_49.d;
   return true;
   if(_GLF_DEAD(false))
    return true;
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(78.86, -1072.1913, 2453.6896, 9.0);
  }
 return false;
}
vec2 iSphere(const in vec3 ro, const in vec3 rd, const in vec4 sp, const in vec3 ve, out vec3 nor)
{
 _GLF_struct_21 _GLF_struct_replacement_21 = _GLF_struct_21(- 1.0, vec2(1.0), uvec2(1u));
 float s = 0.0;
 if(_GLF_DEAD(false))
  return vec2(1.0);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED((mat2(-0.3, 9.1, 9552.9037, 930.140) == mat2(-97.01, 5740.4656, -5.0, -6367.6784))) : false))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return vec2(1.0);
   return vec2(1.0);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-264.615, -533.645, -2.4, 3.7);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = atan(vec4(-5.3, -701.233, -2574.8786, -216.862), vec4(-56.59, -624.064, -7.2, -6.9));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec2(1.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = mat3x4(-9.4, 3.9, -295.683, -158.007, 138.484, 689.905, -4.6, 17.20, -2100.8659, 7.2, -8.2, -5.6)[0];
      }
     _GLF_color = vec4(7051.5600, 41.25, 4.5, -0.6);
    }
   return vec2(1.0);
   if(_GLF_DEAD(false))
    {
     _GLF_color = atan(fract(vec4(-76.14, 143.359, -5.9, -6.3)));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-4.4, -2.0, 1.8, 7.8);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = sqrt(vec4(-0.9, -59.98, -2050.9127, -93.43));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(8047.8018, -260.270, 9.5, -6640.9276);
      }
     return vec2(1.0);
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
  return vec2(1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-31.07, -8.5, -6179.5138, -48.02);
  }
 nor = vec3(0.0);
 if(_GLF_DEAD(false))
  return vec2(1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (9738.3694 + vec4((-55.24), vec3(-97.22, -4810.4650, 87.40)));
  }
 vec3 rc = ro - sp.xyz;
 float A = dot(rc, rd);
 float B = dot(rc, rc) - sp.w * sp.w;
 float C = dot(ve, ve);
 float D = dot(rc, ve);
 float E = dot(rd, ve);
 float aab = A * A - B;
 if(_GLF_DEAD(false))
  {
   _GLF_color = max(vec4(8166.4383, -36.36, -955.677, -52.08), 96.18);
  }
 float eec = E * E - C;
 if(_GLF_DEAD(false))
  return vec2(1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(314.486, 8.8, -506.548, -3.8);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-1.1, 2796.1242, -6289.6000, -9.5);
  }
 float aed = A * E - D;
 if(_GLF_DEAD(false))
  {
   _GLF_color = asin(vec4(811.768, 9395.3962, 2406.3642, 3.5));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
  {
   _GLF_color = vec4(-3.8, -1.5, 12.30, 2382.8336);
  }
 float k = aed * aed - eec * aab;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return vec2(1.0);
 if(k > 0.0)
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-277.810, 3542.3149, 8.1, 352.333);
    }
   k = sqrt(k);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-70.64, 6094.4309, 6.9, -1.6);
    }
   float hb = (aed - k) / eec;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return vec2(1.0);
   float ha = (aed + k) / eec;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = faceforward(vec4(3171.2712, 5615.9725, -8.2, -1.0), mod(vec4(-7.5, -1.3, -151.298, 270.327), vec4(4.8, -3.1, -0.6, -9374.7972)), vec4(vec2(-7.9, -586.324), -2.8, -7.1));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (mat2x4(6868.3626, -92.62, 4.4, 80.95, 209.023, 5.0, -5.5, 19.72) * vec2(-1.3, -65.90));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      return vec2(1.0);
     _GLF_color = vec4(-636.305, 6163.9612, vec2(2.4, 3797.2455));
    }
   _GLF_struct_12 _GLF_struct_replacement_12 = _GLF_struct_12(vec3(1.0), mat3x4(1.0), max(0.0, ha), vec2(1.0), _GLF_struct_11(_GLF_struct_10(uvec4(1u))));
   _GLF_struct_36 _GLF_struct_replacement_36 = _GLF_struct_36(_GLF_struct_34(_GLF_struct_33(ivec2(1)), uvec2(1u)), min(1.0, hb), 1u, _GLF_struct_35(mat4(1.0), uvec2(1u), uvec4(1u)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-44.03, -3.0, 2393.2779, 304.145);
     if(_GLF_DEAD(false))
      return vec2(1.0);
    }
   if(_GLF_struct_replacement_12.ta < _GLF_struct_replacement_36.tb)
    {
     if(_GLF_DEAD(false))
      return vec2(1.0);
     _GLF_struct_replacement_12.ta = 0.5 * (_GLF_struct_replacement_12.ta + _GLF_struct_replacement_36.tb);
     if(_GLF_DEAD(false))
      return vec2(1.0);
     _GLF_struct_replacement_21.t = - (A - E * _GLF_struct_replacement_12.ta) - sqrt((A - E * _GLF_struct_replacement_12.ta) * (A - E * _GLF_struct_replacement_12.ta) - (B + C * _GLF_struct_replacement_12.ta * _GLF_struct_replacement_12.ta - 2.0 * D * _GLF_struct_replacement_12.ta));
     nor = normalize((ro + rd * _GLF_struct_replacement_21.t) - (sp.xyz + _GLF_struct_replacement_12.ta * ve));
     s = 2.0 * (_GLF_struct_replacement_36.tb - _GLF_struct_replacement_12.ta);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec2(1.0);
  }
 return vec2(_GLF_struct_replacement_21.t, s);
}
vec3 lig = normalize(vec3(- 0.6, 0.7, - 0.5));

vec3 shade(const in float d, in vec3 col, const in float shadow, const in vec3 nor, const in vec3 ref, const in vec3 sky)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec3(1.0);
 float amb = max(0., 0.5 + 0.5 * nor.y);
 _GLF_struct_54 _GLF_struct_replacement_54 = _GLF_struct_54(_GLF_struct_50(max(0., dot(normalize(nor), lig)), mat3x2(1.0)), _GLF_struct_53(_GLF_struct_51(1.0, 1u), _GLF_struct_52(mat2x3(1.0), mat2x4(1.0), ivec2(1)), vec4(1.0), uvec2(1u)), ivec3(1), mat3x4(1.0));
 float spe = pow(clamp(dot(normalize(ref), lig), 0.0, 1.0), 16.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = ceil(vec4(-7.5, -9.4, 3931.7510, -3.7));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = exp2((vec3(4.6, 530.543, 5.4) * mat4x3(-4.9, -566.522, 7.9, 69.62, -477.212, 39.44, -822.899, -5.7, -6405.9634, -105.226, -8.8, 8.1)));
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(true) : false))))
  return vec3(1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-3.4, 724.963, -595.877, 9.9);
  }
 _GLF_struct_replacement_54._f0.dif *= shadow;
 vec3 lin = 1.20 * _GLF_struct_replacement_54._f0.dif * vec3(1.00, 0.85, 0.55);
 lin += 0.50 * amb * vec3(0.50, 0.70, 1.00);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return vec3(1.0);
   _GLF_color = vec4(1.0, -1.0, -38.16, -7.6);
  }
 col = col * lin;
 col += spe * _GLF_struct_replacement_54._f0.dif;
 col = mix(col, sky, smoothstep(260. * .8, 260., d));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return vec3(1.0);
 return col;
}
void getSphereOffset(const in vec2 grid, inout vec2 center)
{
 if(_GLF_DEAD(false))
  return;
 center = (hash22(grid) - vec2(0.5)) * (7.);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-5.1, -1.3, -8.6, -9115.2782);
  }
}
void getMovingSpherePosition(const in vec2 grid, const in vec2 sphereOffset, inout vec4 center, inout vec3 speed)
{
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
  return;
 _GLF_struct_58 _GLF_struct_replacement_58 = _GLF_struct_58(_GLF_struct_56(mat4x3(1.0), _GLF_struct_55(mat3x4(1.0), mat4x3(1.0), vec3(1.0))), mat2(1.0), 0.3 + hash12(grid), _GLF_struct_57(vec3(1.0)));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = (floor(-5.5) / vec4(-8.2, 6.7, 3756.4588, 2497.7147));
  }
 _GLF_struct_24 _GLF_struct_replacement_24 = _GLF_struct_24(mat2x3(1.0), 14. * _GLF_struct_replacement_58.s + time / _GLF_struct_replacement_58.s, 1.0, _GLF_struct_23(_GLF_struct_22(uvec3(1u), mat4(1.0), 1u, 1)));
 float y = _GLF_struct_replacement_58.s * 30. * abs(cos(_GLF_struct_replacement_24.t));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-5137.3920, -7805.6667, 0.3, -4291.3039);
    }
   return;
  }
 speed = vec3(0, 30. * abs(sin(_GLF_struct_replacement_24.t)), 0) * (1. / 30.);
 vec2 offset = grid + sphereOffset;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(1456.6916, -7.1, 54.40, -315.868);
   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
    {
     _GLF_color = vec4(-75.32, -4597.7554, -543.082, -5.2);
    }
  }
 center = vec4(offset.x + 0.5 * 10., 1. + y, offset.y + 0.5 * 10., 1.);
}
void getSpherePosition(const in vec2 grid, const in vec2 sphereOffset, inout vec4 center)
{
 vec2 offset = grid + sphereOffset;
 center = vec4(offset.x + 0.5 * 10., 1., offset.y + 0.5 * 10., 1.);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-168.550, -852.864, 1.1, 6558.3002);
  }
}
vec3 getSphereColor(vec2 grid)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec3(1.0);
 float m = hash12(grid.yx) * 12.;
 return vec3(1. - m * 0.08, m * 0.03, m * 0.06);
}
vec3 _GLF_outlined_0(_GLF_struct_6 _GLF_struct_replacement_6, float w, vec3 speed)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = (mat2x4(mat3(-9.7, 0.4, 5.7, -622.636, -19.73, 49.07, -1887.0963, -38.56, -6585.9278)) * vec2(0.3, -6.1));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
    {
     _GLF_color = vec4(33.49, -4.5, -687.068, 71.53);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4((- -18.12), vec3(-4.9, 896.365, -44.48));
  }
 return mix(mod(floor(_GLF_struct_replacement_6._f1._f2.c1.x) + floor(_GLF_struct_replacement_6._f1._f2.c1.y), 2.) < 1. ? vec3(0.4) : vec3(.6), vec3(.5), clamp((w + .8) * .007 * length(speed.xz) * 30., 0., 1.));
}
vec2 _GLF_outlined_2(vec3 ro, vec3 rd, _GLF_struct_25 _GLF_struct_replacement_25, vec3 speed, vec3 nor)
{
 return iSphere(ro, rd, _GLF_struct_replacement_25.sphereCenter, speed, nor);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(7591.2873, 0.5, -472.016, -9473.3589);
  }
}
vec3 render(const in vec3 ro, const in vec3 rd, const in vec3 cameraSpeed, const in mat3 rot)
{
 if(_GLF_DEAD(false))
  return vec3(1.0);
 vec3 nor, ref, speed;
 float dist = 260.;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-244.232, 816.611, -7604.3527, -942.232);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(3.2, 65.96, -793.870, -48.95);
    }
  }
 vec3 sky = clamp(vec3(1, 1.5, 2.5) * (1.0 - 0.8 * rd.y), vec3(0.), vec3(1.));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   return vec3(1.0);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(2785.9048, -9.3, 2.0, 1.2);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-6.6, -671.986, -2.8, 2803.4679);
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return vec3(1.0);
   _GLF_color = vec4(70.77, 7.6, 426.007, -2.4);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-3.0, -4732.0864, -340.273, -9.6);
      }
     _GLF_color = (vec4(9.3, -3966.1474, 8.6, 5.6) - -1719.1080);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (+ vec4(304.421, 6031.3883, -75.12, -4855.1806));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      return vec3(1.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      return vec3(1.0);
     return vec3(1.0);
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   return vec3(1.0);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(5.6, 8.2, 2.6, -657.351);
    }
   return vec3(1.0);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return vec3(1.0);
 vec3 colBackground = vec3(0.), sphereSpeed = vec3(0.), col = vec3(0.);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  return vec3(1.0);
 _GLF_struct_25 _GLF_struct_replacement_25 = _GLF_struct_25(vec4(0.), uvec4(1u), bvec3(true));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-0.2, -62.17, -1218.3352, 97.09);
  }
 vec3 pos = floor(ro / 10.) * 10.;
 vec2 offset = vec2(0.);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
    {
     _GLF_color = mod((-16.85 + vec4(-679.832, 9.2, -4655.4211, -896.035)), vec4(-1462.1137, 9.2, -2.7, -497.926));
    }
   _GLF_color = vec4(-7.2, -93.39, 3726.3185, -10.74);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = sign(vec4(3834.7481, 1.7, 5037.8522, 3.7));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-30.54, -68.02, -5935.5350, 6474.1806);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = mod(vec4(-26.81, 1.7, -3.4, -8.0), vec4(46.98, -8.1, -4.4, -0.9));
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
  {
   _GLF_color = vec4(-89.16, 4.2, -3.4, -8968.9809);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
  return vec3(1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        return vec3(1.0);
       _GLF_color = asin(vec4(-94.94, 223.274, -3.1, 0.6));
       if(_GLF_DEAD(false))
        return vec3(1.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(20.02, -6.2, 72.61, 764.140);
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-0.1, 6070.4015, -26.39, -9326.6359);
            }
           if(_GLF_DEAD(false))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
              {
               _GLF_color = vec4(-7.9, -609.265, 90.18, 0.1);
              }
             return vec3(1.0);
            }
          }
         if(_GLF_DEAD(false))
          return vec3(1.0);
         _GLF_color = (max(vec2(-6646.0534, -527.440), -959.511) * mat4x2(9.1, -1720.7693, 6.7, -6.6, -94.00, -0.9, -133.491, -9.3));
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = acos(vec4(93.01, -9.1, 3.9, -648.391));
      }
     return vec3(1.0);
    }
   _GLF_color = vec4(-2.7, -4.2, -112.397, 2.1);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = intBitsToFloat(max(ivec4(-11404, 32254, -1382, 55945), (47503 % 77615)));
    }
   return vec3(1.0);
  }
 if(_GLF_DEAD(false))
  return vec3(1.0);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(true) : false))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-88.67, 9727.0564, 192.647, 3.6);
    }
   _GLF_color = mix(vec4(-53.54, -73.25, 1.7, 5.6), vec4(-999.342, -81.82, -45.12, 9.1), bvec4(true, false, false, false));
  }
 if(intersectPlane(ro, rd, 0., dist))
  {
   vec3 interSectionPoint = ro + rd * dist;
   speed = rot * (interSectionPoint.xyz - ro) + cameraSpeed;
   _GLF_struct_6 _GLF_struct_replacement_6 = _GLF_struct_6(_GLF_struct_2(_GLF_struct_0(1.0, vec3(1.0)), _GLF_struct_1(ivec3(1), mat4(1.0), ivec4(1), mat3x2(1.0))), _GLF_struct_5(_GLF_struct_3(1, bvec2(true)), mat4x3(1.0), _GLF_struct_4(1, mat3x4(1.0), ivec4(1), true, mod(interSectionPoint.xz * .25, vec2(2.)))), mat2x3(1.0));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(757.924, 8.3, 148.092, 564.862);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec3(1.0);
   float w = (abs(fract(_GLF_struct_replacement_6._f1._f2.c1.x * abs(rd.x)) - .5) + abs(fract(_GLF_struct_replacement_6._f1._f2.c1.y * abs(rd.y)) - .5));
   if(_GLF_DEAD(false))
    {
     _GLF_color = (mat3x4(-4933.9378, -775.031, -1348.8229, 2714.6182, -7.4, 8.8, 6.3, 9435.1572, -3.3, -3.0, 4.7, 3.7) * vec3(-4.3, 236.412, -8.3));
    }
   colBackground = _GLF_outlined_0(_GLF_struct_replacement_6, w, speed);
   float shadow = 0.;
   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
    {
     _GLF_color = vec4(99.08, -35.18, 7779.1153, 1319.6187);
    }
   _GLF_struct_66 _GLF_struct_replacement_66 = _GLF_struct_66(_GLF_struct_60(uvec2(1u), _GLF_struct_59(uvec3(1u)), interSectionPoint - lig), _GLF_struct_63(_GLF_struct_61(vec4(1.0), bvec2(true), mat3(1.0)), _GLF_struct_62(vec3(1.0), mat4(1.0), mat2x4(1.0))), _GLF_struct_65(_GLF_struct_64(mat4(1.0), mat2x4(1.0), bvec4(true), mat4(1.0))));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    return vec3(1.0);
   _GLF_struct_40 _GLF_struct_replacement_40 = _GLF_struct_40(vec4(1.0), floor((ro + rd * dist).xz / 10.));
   for(
       float x = - 1.;
       x <= 1.;
       x ++
   )
    {
     for(
         _GLF_struct_69 _GLF_struct_replacement_69 = _GLF_struct_69(_GLF_struct_67(mat3x2(1.0), - 1., vec2(1.0)), _GLF_struct_68(ivec3(1)), vec3(1.0));
         _GLF_struct_replacement_69._f0.y <= 1.;
         _GLF_struct_replacement_69._f0.y ++
     )
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(74.34, 7.2, -375.135, -7497.8531);
        }
       vec2 gridpos = (_GLF_struct_replacement_40.shadowGridPos + vec2(x, _GLF_struct_replacement_69._f0.y)) * 10.;
       getSphereOffset(gridpos, offset);
       getMovingSpherePosition(gridpos, - offset, _GLF_struct_replacement_25.sphereCenter, sphereSpeed);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = smoothstep(vec4(0.0, -670.934, 2.6, 9446.5951), (-2.7 + vec4(-2.7, 34.42, -8.2, -6.1)), vec4(-69.81, 8525.3041, -62.68, 250.047));
          }
         _GLF_color = mat3x4(-3.8, -4.7, 25.77, 4.9, 6310.4658, 2.9, 58.45, 5146.6307, -6.1, -607.935, -433.665, -7.0)[0];
        }
       if(_GLF_DEAD(false))
        discard;
       vec2 res = iSphere(_GLF_struct_replacement_66._f0.shadowStartPos, lig, _GLF_struct_replacement_25.sphereCenter, sphereSpeed + cameraSpeed, nor);
       if(_GLF_DEAD(false))
        break;
       if(res.x > 0.0)
        {
         shadow = clamp(shadow + mix(res.y, 0., res.x / 20.), 0., 1.);
         if(_GLF_DEAD(false))
          break;
        }
       getSpherePosition(gridpos, offset, _GLF_struct_replacement_25.sphereCenter);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
        {
         _GLF_color = vec4(-0.0, 2304.3878, -840.493, 214.498);
        }
       res = iSphere(_GLF_struct_replacement_66._f0.shadowStartPos, lig, _GLF_struct_replacement_25.sphereCenter, cameraSpeed, nor);
       if(_GLF_DEAD(false))
        {
         _GLF_color = abs(vec4(-5.8, -9.2, -395.783, -8.8));
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          discard;
        }
       if(res.x > 0.0)
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(0.3, 0.9, 507.759, 0.7);
          }
         shadow = clamp(shadow + mix(res.y, 0., res.x / 20.), 0., 1.);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-8.7, -6.1, 6830.3115, -43.31);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = (vec4(1.8, 7168.3870, 37.47, 1899.4797) - vec4(1846.5759, 77.12, -9.7, -0.8));
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-4472.4494, -683.072, 4.7, 23.57);
          }
         discard;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_ZERO(0.0, injectionSwitch.x)))))
          continue;
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-6462.9300, -4.8, -10.32, -3.2);
        }
       if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
        discard;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = step(-77.43, vec4(-9.4, 4.3, 0.4, -6.9));
      }
     if(_GLF_DEAD(false))
      continue;
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return vec3(1.0);
    }
   ref = reflect(rd, vec3(0., 1., 0.));
   colBackground = shade(dist, colBackground, 1. - shadow, vec3(0., 1., 0.), ref, sky);
  }
 else
  {
   colBackground = sky;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = acos(vec4(-9.2, 2675.9039, -7.7, 2.2));
    }
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_FALSE(false, (gl_FragCoord.x < 0.0)) || (false))))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    return vec3(1.0);
  }
 vec3 ri = 1.0 / rd;
 _GLF_struct_28 _GLF_struct_replacement_28 = _GLF_struct_28(_GLF_struct_26(bvec4(true)), sign(rd) * 10., _GLF_struct_27(ivec2(1)));
 vec3 dis = (pos - ro + 0.5 * 10. + _GLF_struct_replacement_28.rs * 0.5) * ri;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   _GLF_color = vec4(vec3(2.8, -8096.0996, -5.5), -8.1);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3.9, 45.74, vec2(317.926, 5552.9890));
  }
 _GLF_struct_41 _GLF_struct_replacement_41 = _GLF_struct_41(bvec2(true), mat2(1.0), vec3(0.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(84.41, -273.284, -4.2, -7.7);
  }
 if(_GLF_DEAD(false))
  return vec3(1.0);
 float alpha = 1.;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(5181.2115, -373.353, -35.79, -5442.9316);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(908.693, -10.40, -1.5, -191.666);
  }
 for(
     int i = 0;
     i < 30;
     i ++
 )
  {
   if(alpha < .01)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        continue;
       discard;
      }
     break;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = abs(vec4(24.59, -9192.6565, -1.6, 6568.3372));
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-8.9, 9.4, -4.8, -0.7);
          }
        }
       return vec3(1.0);
      }
     continue;
    }
   if(_GLF_DEAD(false))
    discard;
   getSphereOffset(pos.xz, offset);
   getMovingSpherePosition(pos.xz, - offset, _GLF_struct_replacement_25.sphereCenter, sphereSpeed);
   if(_GLF_DEAD(false))
    continue;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    discard;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(5365.6413, -8.5, -7918.9957, -88.77);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      break;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(_GLF_ZERO(0.0, injectionSwitch.x))))))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-510.685, 311.225, -51.66, -451.665);
          }
         if(_GLF_DEAD(false))
          discard;
         _GLF_color = ceil(vec4(-4006.4773, -3.9, -224.350, -2361.9084));
        }
       break;
      }
     _GLF_color = vec4(-354.878, -866.418, 3081.7852, 93.47);
     if(_GLF_DEAD(false))
      {
       _GLF_color = (mat2x4((7441.2986 - mat2x3(-9.4, 1.5, 9859.8616, -364.690, -58.10, 5951.3064))) * max(vec2(-2.0, -537.198), vec2(-8.5, 0.4)));
      }
    }
   speed = rot * (_GLF_struct_replacement_25.sphereCenter.xyz - ro) + sphereSpeed + cameraSpeed;
   vec2 res = iSphere(ro, rd, _GLF_struct_replacement_25.sphereCenter, speed, nor);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
    discard;
   if(res.x > 0.0)
    {
     ref = reflect(rd, nor);
     if(_GLF_DEAD(false))
      break;
     vec3 lcol = shade(res.x, getSphereColor(- offset), 1., nor, ref, sky);
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = exp2(vec4(862.602, 11.73, 4562.1550, 3412.9699));
        }
       discard;
      }
     col += lcol * res.y * alpha;
     alpha *= (1. - res.y);
     if(_GLF_DEAD(false))
      break;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    break;
   getSpherePosition(pos.xz, offset, _GLF_struct_replacement_25.sphereCenter);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-8.0, -7298.6161, -60.21, -692.190);
    }
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_DEAD(false))
    continue;
   speed = rot * (_GLF_struct_replacement_25.sphereCenter.xyz - ro) + cameraSpeed;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = max(vec4(7743.0384, 1.4, 4.0, 57.47), exp(vec4(-7.6, 168.605, 2.8, 99.10)));
        }
       return vec3(1.0);
      }
     _GLF_color = vec4(3.0, 6.2, -9.6, 456.217);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = (vec3(4129.0892, 4187.5882, 294.601) * mat4x3(5122.3173, -1.9, 174.494, -6.6, 2389.1336, 132.316, -17.22, 0.1, -683.563, -91.45, 5604.5698, -4.7));
      }
    }
   res = _GLF_outlined_2(ro, rd, _GLF_struct_replacement_25, speed, nor);
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(res.x > 0.0)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = round(vec4(-603.557, 47.96, 6.8, -84.12));
      }
     ref = reflect(rd, nor);
     _GLF_struct_7 _GLF_struct_replacement_7 = _GLF_struct_7(bvec3(true), vec2(1.0), shade(res.x, getSphereColor(- offset), 1., nor, ref, sky), ivec3(1));
     col += _GLF_struct_replacement_7.lcol * res.y * alpha;
     alpha *= (1. - res.y);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(vec3(46.45, 0.8, -2.2), 3.2);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return vec3(1.0);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = (vec4(85.28, -8.6, 7.3, 150.311) / 63.32);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        continue;
       _GLF_color = vec4(-6.6, 7.1, -91.95, 89.80);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          continue;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          continue;
         continue;
         if(_GLF_DEAD(false))
          discard;
        }
      }
     discard;
    }
   _GLF_struct_replacement_41.mm = step(dis.xyz, dis.zyx);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-99.51, 10.94, -8851.3297, 1.8);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(7.2, 35.95, -706.702, 66.72);
       if(_GLF_DEAD(false))
        {
         _GLF_color = exp(vec4(-73.17, 88.68, -999.102, -38.93));
        }
      }
    }
   dis += _GLF_struct_replacement_41.mm * _GLF_struct_replacement_28.rs * ri;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-2.2, 395.149, -490.181, 216.177);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(length(0.0))))))
      {
       _GLF_color = vec4(-243.392, 372.003, -1.6, 42.01);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
        break;
      }
    }
   if(_GLF_DEAD(false))
    continue;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(227.951, 9.2, 6.7, 15.14);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = mod(vec4(-9728.7659, -3.2, -0.1, 7861.7775), distance(-1694.2966, -6.3));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(175.830, -4442.6482, 811.163, 9.3);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = sin(vec4(-63.91, 779.832, -1.4, -8724.8005));
    }
   pos += _GLF_struct_replacement_41.mm * _GLF_struct_replacement_28.rs;
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-42.85, -9.4, 63.78, 7.3);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = cos(vec4(4.2, 5382.0638, -1.0, -69.67));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(5.2, 94.91, 4.2, 6474.5053);
    }
   _GLF_color = vec4(vec3(-9181.5502, 0.8, 4.1), 527.347);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-729.603, -6938.1534, 1.1, -8013.0912);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (true ? _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) : _GLF_FUZZED(true)))))
  {
   _GLF_color = ceil(vec4(6.5, -177.850, -1.4, -3.2));
  }
 col += colBackground * alpha;
 if(_GLF_DEAD(false))
  {
   _GLF_color = log(vec4(5.5, 4093.3872, -6.3, 4.8));
  }
 return col;
}
void path(in float time, out vec3 ro, out vec3 ta)
{
 ro = vec3(16.0 * cos(0.2 + 0.5 * .4 * time * 1.5) * 20., 5.6 + 3. * sin(time), 16.0 * sin(0.1 + 0.5 * 0.11 * time * 1.5) * 20.);
 time += 1.6;
 ta = vec3(16.0 * cos(0.2 + 0.5 * .4 * time * 1.5) * 20., - .1 + 2. * sin(time), 16.0 * sin(0.1 + 0.5 * 0.11 * time * 1.5) * 20.);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = acos(vec4(-3.0, -951.263, 8.2, 290.492));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = (vec4(50.80, 121.375, 8.9, 4.6) * dot(vec3(8.3, 1975.1698, 7.0), vec3(-199.176, 3.9, -508.464)));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-8622.9214, 1.6, 344.606, 1.5);
      }
     _GLF_color = vec4(-5.5, 748.993, -4.1, -233.071);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(9.9, 0.6, -0.0, 95.66);
    }
  }
}
mat3 setCamera(in float time, out vec3 ro)
{
 vec3 ta;
 if(_GLF_DEAD(false))
  return mat3(1.0);
 path(time, ro, ta);
 float roll = - 0.15 * sin(.732 * time);
 if(_GLF_DEAD(false))
  return mat3(1.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    return mat3(1.0);
   _GLF_color = vec3(2.7, 1.2, -947.727).yyyx;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    return mat3(1.0);
   return mat3(1.0);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-2.0, 8147.0142, -699.774, 847.050);
  }
 vec3 cw = normalize(ta - ro);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8935.3077, -89.74, -75.06, 9.5);
  }
 vec3 cp = vec3(sin(roll), cos(roll), 0.);
 vec3 cu = normalize(cross(cw, cp));
 _GLF_struct_47 _GLF_struct_replacement_47 = _GLF_struct_47(_GLF_struct_42(bvec4(true)), normalize(cross(cu, cw)), _GLF_struct_46(_GLF_struct_43(bvec2(true), uvec3(1u), mat3(1.0), vec3(1.0)), _GLF_struct_44(ivec3(1)), _GLF_struct_45(mat2x3(1.0), mat2x3(1.0), bvec3(true))));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(sqrt(0.0))))))
  {
   _GLF_color = (vec4(7179.7577, -629.504, 560.714, 0.4) + vec4(-87.55, -42.35, -2121.4254, -543.818));
  }
 return mat3(cu, _GLF_struct_replacement_47.cv, cw);
}
void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = acos(vec4(-7.4, -0.8, -98.26, -7.1));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return;
     return;
    }
   return;
  }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(6.5, -25.32, -7854.1395, 9.6);
  }
 vec2 q = fragCoord.xy / resolution.xy;
 _GLF_struct_9 _GLF_struct_replacement_9 = _GLF_struct_9(mat2x4(1.0), _GLF_struct_8(uvec2(1u), bvec3(true), bvec4(true)), true, - 1.0 + 2.0 * q);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(false))
    return;
   _GLF_color = ceil(vec4(-9856.6683, 6.8, -582.677, -115.511));
  }
 _GLF_struct_replacement_9.p.x *= resolution.x / resolution.y;
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(86.85, 4584.3222, -9332.7942, 9.7);
  }
 if(_GLF_DEAD(false))
  return;
 vec3 ro0, ro1, ta;
 if(_GLF_DEAD(false))
  return;
 _GLF_struct_20 _GLF_struct_replacement_20 = _GLF_struct_20(ivec2(1), _GLF_struct_15(_GLF_struct_13(mat4(1.0), 1u, ivec3(1), vec3(1.0)), _GLF_struct_14(vec4(1.0), mat3x4(1.0))), _GLF_struct_18(_GLF_struct_16(mat3(1.0)), _GLF_struct_17(mat3x2(1.0), vec4(1.0)), vec3(1.0)), _GLF_struct_19(ivec3(1), 1.0, mat3x2(1.0), vec3(1.0)), setCamera(time - 1. / 30., ro0));
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = clamp(vec4(-41.60, 3.0, 8052.5681, -534.332), -4.3, round(669.848));
    }
   return;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = step(vec4(-4.0, -5.9, 1.7, -216.862), vec4(9159.8351, -54.38, -3.4, -91.84));
  }
 _GLF_struct_39 _GLF_struct_replacement_39 = _GLF_struct_39(mat3x2(1.0), _GLF_struct_38(_GLF_struct_37(mat4(1.0), vec4(1.0), ivec3(1)), _GLF_struct_replacement_20.ca0 * normalize(vec3(_GLF_struct_replacement_9.p.xy, 2.0))));
 mat3 ca1 = setCamera(time, ro1);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-342.090, 77.69, 3.4, 4.1);
  }
 _GLF_struct_32 _GLF_struct_replacement_32 = _GLF_struct_32(uvec3(1u), ca1 * normalize(vec3(_GLF_struct_replacement_9.p.xy, 2.0)), _GLF_struct_31(_GLF_struct_29(bvec2(true)), _GLF_struct_30(mat2x3(1.0))));
 mat3 rot = ca1 * mat3(_GLF_struct_replacement_20.ca0[0].x, _GLF_struct_replacement_20.ca0[1].x, _GLF_struct_replacement_20.ca0[2].x, _GLF_struct_replacement_20.ca0[0].y, _GLF_struct_replacement_20.ca0[1].y, _GLF_struct_replacement_20.ca0[2].y, _GLF_struct_replacement_20.ca0[0].z, _GLF_struct_replacement_20.ca0[1].z, _GLF_struct_replacement_20.ca0[2].z);
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) || false)))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-2959.6122, -3.4, -537.794, -7.1);
    }
   _GLF_color = (+ vec4(4.4, 4392.7340, -3656.8270, -102.532));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-2.2, 93.90, -68.56, 2009.2727);
      }
     _GLF_color = vec4(18.40, -11.80, 820.482, -3427.7936);
    }
   if(_GLF_DEAD(false))
    return;
  }
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  {
   _GLF_color = asin(vec4(95.13, 99.02, -11.13, 4.1));
  }
 rot -= mat3(1, 0, 0, 0, 1, 0, 0, 0, 1);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-4.6, -0.7, -5.7, 850.610);
  }
 _GLF_struct_71 _GLF_struct_replacement_71 = _GLF_struct_71(mat3(1.0), _GLF_struct_70(true, render(ro0, _GLF_struct_replacement_39._f1.rd0, ro1 - ro0, rot), bvec4(true)), mat4x3(1.0));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = ((-0.8 - vec4(2.2, 7.5, 4.6, 0.6)));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
  {
   if(_GLF_DEAD(false))
    return;
   return;
  }
 _GLF_struct_replacement_71._f1.col = pow(_GLF_struct_replacement_71._f1.col, vec3(0.5));
 if(_GLF_DEAD(false))
  return;
 if(_GLF_DEAD(false))
  {
   _GLF_color = (- vec4(-9.4, 361.345, 9.8, -9.9));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(6131.4636, 5.2, -8522.2829, 4.3);
  }
 fragColor = vec4(_GLF_struct_replacement_71._f1.col, 1.0);
}
void main(void)
{
 mainImage(_GLF_color, gl_FragCoord.xy);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(112.330, 9.9, -7.4, -6.5) + 2.7);
  }
 if(_GLF_DEAD(false))
  return;
}
