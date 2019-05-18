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

uniform vec2 mouse;

uniform vec2 resolution;

const int GLF_dead1MENGER_ITERATIONS = 5;

float GLF_dead1sdCross(vec3 GLF_dead1p)
{
 GLF_dead1p = abs(GLF_dead1p);
 vec3 GLF_dead1d = vec3(max(GLF_dead1p.x, GLF_dead1p.y + 0.07), max(GLF_dead1p.y, GLF_dead1p.z), max(GLF_dead1p.z, GLF_dead1p.x));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(2.4, 919.043, 74.53, -9022.8457);
  }
 return min(GLF_dead1d.x, min(GLF_dead1d.y, GLF_dead1d.z)) - (1.0 / 2.23);
}
float GLF_dead1sdCrossRep(vec3 GLF_dead1p)
{
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = (vec4(-7066.0405, -8017.2953, -4939.4502, 38.16) + vec4(-29.43, -751.092, -0.3, -6.9));
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (- vec4(9644.5054, 6.1, -16.90, 1729.9871));
  {
   vec4 _GLF_outVarBackup_GLF_color;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(51.48, 3.0, -4834.3514, 4.4);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(8.7, -45.62, -307.254, -2.8);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 GLF_dead1q = mod(GLF_dead1p + 1.0, 2.0) - 1.0;
 return GLF_dead1sdCross(GLF_dead1q);
}
float GLF_dead1sdCrossRepScale(vec3 GLF_dead1p, float GLF_dead1s)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec4(-8364.4761, -81.16, -728.682, 0.3) * (mat3x4(vec4(9.3, 5.5, -492.456, 7.9), vec4(-644.822, 3884.0693, 1.4, -759.308), vec4(-1.6, -8.6, -4700.7630, 30.96)) * mat4x3(-849.348, -695.550, 3.9, 49.83, 3.9, -68.08, 4054.1218, -794.144, 19.33, 8.6, 7.2, -6374.4000)));
  }
 return GLF_dead1sdCrossRep(GLF_dead1p * GLF_dead1s) / GLF_dead1s;
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(-82.08, -7.6, -2913.1918, 814.315).qqqt;
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = (vec4(-6.7, -4326.4902, 1.3, -9.8));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = max(vec4(-349.269, 4.6, -7579.9805, -96.06), inversesqrt(refract(3.1, -982.911, -84.67)));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = vec4(-9741.9903, 5377.7130, 8.4, -6598.8498);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   _GLF_color = log2(vec4(-279.363, -3.8, -92.85, 94.99));
  }
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = vec4(48.50, -95.55, -405.020, 2.7);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = (vec4(18.16, -4.7, -60.53, 379.043) + asin(59.33));
     }
    _GLF_color = vec4(7692.9687, -883.945, 63.15, 0.2);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mod(vec4(9123.9620, -662.027, 6.4, -65.87), vec4(3.7, 1881.8232, -2.5, -66.01));
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-8.2, -4.7, -22.91, 0.5);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec4(-19.48, 4.0, 0.8, 50.26);
    }
   _GLF_color = smoothstep(vec4(-9.0, -994.803, 938.566, 4.8), vec4(853.729, -6.2, 74.51, -512.175), vec4(-5.7, -2262.7385, 40.64, 48.72));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = sign(vec4(-4.5, 77.50, -3746.6436, 2.4));
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(-7.0, 4424.8300, 941.152, -7703.8098);
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = vec4(1.8, -9070.0150, -6.1, -67.78);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec2(6.4, 4.7).xxyy;
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = ((vec4(4.2, 5.5, 390.328, 40.46) / -8.3) + pow(4207.4525, 91.02));
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
  {
   _GLF_color = vec4(-59.01, -9654.8400, -213.893, 49.64);
  }
}
float GLF_dead1scene(vec3 GLF_dead1p)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = mod(asin(vec4(-1.6, 635.484, 25.54, -34.76)), 15.81);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-680.858, 53.84, -455.990, -704.507);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3.4, -860.878, -5725.7029, 1.1);
  }
 float GLF_dead1scale = 1.0;
 float GLF_dead1dist = 0.0;
 for(
     int GLF_dead1i = 1;
     GLF_dead1i < GLF_dead1MENGER_ITERATIONS;
     GLF_dead1i ++
 )
  {
   GLF_dead1dist = max(GLF_dead1dist, - GLF_dead1sdCrossRepScale(GLF_dead1p, GLF_dead1scale));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = clamp(vec4(-4.7, -1193.3995, 7.9, -30.42), vec4(-428.798, 6.1, 8.9, -1211.2395), vec4(77.79, -4.0, -80.45, 54.71));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = max(vec4(6.4, 472.819, 4639.9887, 85.62), (vec4(-3.0, 198.193, 56.77, 74.88) + vec4(3779.5974, -8.1, -6355.3481, -26.98)));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     _GLF_color = vec4(-1.4, -6.3, 45.64, 4.8);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = fract((vec4(-35.18, 2.5, 0.4, -96.58) * vec4(352.965, 873.980, -2602.6388, 7864.4358)));
    if(_GLF_DEAD(false))
     {
      _GLF_color = fract(atan(vec4(7818.8409, -2.7, -5.5, -7690.6581), vec4(2993.9279, -249.012, 4645.6537, 9.7)));
     }
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(0.2, 7.1, 7.7, -1.1);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
   GLF_dead1scale *= 3.0;
  }
 return GLF_dead1dist;
}
vec3 GLF_dead1hsv2rgb(vec3 GLF_dead1c)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.4, -63.80, 20.17, -1149.0855);
  }
 vec4 GLF_dead1K = vec4(1.0, 2.0 / 3.0, 10.0 / 3.0, 3.0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = min((mat2x4(2652.2959, 9.4, 1598.7435, 68.00, 3585.7980, 1013.6657, 414.187, 2.2) * (vec2(33.12, -40.23) - -911.632)), vec4(-5.3, 1.2, 3922.4576, 903.433));
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-5143.6002, -56.28, -625.962, 3790.7992);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-88.49, 64.27, -30.59, 60.22);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= log(sqrt(1.0))))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      _GLF_color = mod(vec4(-1.2, -94.60, -5288.4523, -653.590), -6.3);
     }
   }
 }
 vec3 GLF_dead1p = abs(fract(GLF_dead1c.xxx + GLF_dead1K.xyz) * 6.0 - GLF_dead1K.www);
 return GLF_dead1c.z * mix(GLF_dead1K.xxx, clamp(GLF_dead1p - GLF_dead1K.xxx, 0.0, 1.0), GLF_dead1c.y);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = sin(abs(vec4(5.0, -2368.1128, -769.026, 79.23)));
  }
}
vec4 GLF_dead1colorize(float GLF_dead1c)
{
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = mix(vec4(80.80, 7.7, 8.3, 7.1), vec4(220.688, 49.50, -9.3, -7804.6115), vec4(4633.6026, 3.9, -11.22, -3298.9838));
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(78.86, 0.6, 3.0, 45.61);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = inversesqrt(round(vec4(0.3, 8924.6695, -238.601, 6092.0900)));
      }
    }
  }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = vec4(20.20, -65.33, -9.6, -59.85);
   }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(1.4, 77.71, 954.255, -76.64);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-64.09, 64.46, 7365.5593, 505.184);
      }
     _GLF_color = vec4(-1417.0934, -5.4, 2.0, -9.2);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = acos(vec4(-60.03, -38.93, -1032.5598, 122.426));
        }
      }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = round(vec4(-6.4, 248.957, 9595.5332, 333.234));
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(3347.0630, -2614.8754, -2032.8752, 4.8);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-97.67, 0.7, -7.3, 2785.0023);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= sin(0.0)))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float GLF_dead1hue = mix(0.6, 1.15, min(GLF_dead1c * 1.2 - 0.05, 1.0));
 float GLF_dead1sat = 1.0 - pow(GLF_dead1c, 4.0);
 float GLF_dead1lum = GLF_dead1c;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
  {
   _GLF_color = vec4(fract(2.1), log(-3081.5666), 94.35, 20.65);
  }
 vec3 GLF_dead1hsv = vec3(GLF_dead1hue, GLF_dead1sat, GLF_dead1lum);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (-62.83 - vec4(-3100.8835, 44.03, -2.5, 612.359));
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true && (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), true && (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))))))
    {
     _GLF_color = exp(vec4(3367.8180, -48.08, 7.8, -40.06)).qpsq;
    }
   _GLF_color = mod(vec4(-89.14, -4.1, 2.6, 8.2), vec4(6144.5975, 29.50, 3.9, 690.540));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = clamp(vec4(-778.121, -291.158, 6216.9177, 84.94), vec4(-37.00, -1952.5008, 4.9, 9.9), vec4(5314.4811, 6379.3776, 269.449, -4408.2993));
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = (8563.4931 - vec4(68.52, -5.7, 9.7, 7.5));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-6962.1762, 4024.4049, -2546.5831, -6248.3946);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(2.7, 8852.0919, 8475.6999, -9.1);
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(0.4, 7.3, 3935.4499, -2144.4287);
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-59.58, -184.245, -2180.7292, 46.64);
  }
 vec3 GLF_dead1rgb = GLF_dead1hsv2rgb(GLF_dead1hsv);
 return vec4(GLF_dead1rgb, 1.0);
}
vec2 GLF_dead2opUnion(vec2 GLF_dead2a, vec2 GLF_dead2b)
{
 return GLF_dead2a.y < GLF_dead2b.y ? GLF_dead2a : GLF_dead2b;
}
float GLF_dead2sphere(vec3 GLF_dead2p, float GLF_dead2r)
{
 return length(GLF_dead2p) - GLF_dead2r;
}
float GLF_dead2box(vec3 GLF_dead2p, vec3 GLF_dead2b)
{
 vec3 GLF_dead2d = abs(GLF_dead2p) - GLF_dead2b;
 return length(max(GLF_dead2d, 0.0)) + min(max(GLF_dead2d.x, max(GLF_dead2d.y, GLF_dead2d.z)), 0.0);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(724.751, -803.668, 1.4, -6717.8640);
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(2011.9845, -99.36, -3.4, 5.3);
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = mod(vec4(682.743, -3001.6808, -810.945, 9.6), length(vec2(353.698, 8777.1308)));
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(-49.97, -83.22, 290.801, 55.63);
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-9346.9820, -882.666, -3892.5879, -4.5);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-58.07, -8.1, 2.3, -919.829);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(6791.6190, 5.7, 5.9, -4775.1590);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = (vec4(-184.357, -5.8, 393.379, -3.5) / exp2(vec4(3465.9552, -7.9, -97.32, -33.57)));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(distance(max(vec2(-7862.4619, 1.2), vec2(-6050.9054, -0.1)), vec2(-5213.0251, 48.79)), vec2(1.1, 3459.7414), -656.954);
   }
 }
}
float GLF_dead2shape(vec3 GLF_dead2p)
{
 return min(GLF_dead2sphere(GLF_dead2p - vec3(0.0, 1.6, 0.0), 1.0), GLF_dead2box(GLF_dead2p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)));
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(6.1, 646.761, 8.0, -82.68);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
}
vec2 GLF_dead2mapWithMat(vec3 GLF_dead2p)
{
 float GLF_dead2repeat = 5.0;
 vec2 GLF_dead2qxz = mod(GLF_dead2p.xz, GLF_dead2repeat) - 0.5 * GLF_dead2repeat;
 vec3 GLF_dead2q = vec3(GLF_dead2qxz.x, GLF_dead2p.y, GLF_dead2qxz.y);
 return GLF_dead2opUnion(vec2(1.0, GLF_dead2shape(GLF_dead2q)), vec2(0.0, GLF_dead2p.y));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   _GLF_color = cos(vec4(-5.1, 3530.2870, 7.3, -3258.9669));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = (vec4(-3.0, 399.699, -52.41, -9086.8790) - vec4(-981.248, -5.9, 2614.0944, 4.7));
    }
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = clamp(vec4(-99.47, 9521.9398, -6.9, -160.305), vec4(5.9, 68.81, 713.204, -3627.2058), mod(vec4(-8891.6455, -61.57, -2.3, -35.78), vec4(-1.5, -37.70, -8.2, -416.767)));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-9.2, 35.69, 725.380, 7.4);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   _GLF_color = vec4(7.4, -4315.4885, -2.2, -0.8);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(8.0, 8.1, -71.09, 74.86);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = mat4(3915.8090, -4.3, 3.6, -2121.6104, -8.1, 65.68, -8.5, -0.6, 1380.4413, 0.2, -9.2, 1319.0963, 9.0, 906.751, -3.6, -8403.0178)[2];
       }
     }
   }
   _GLF_color = sin(vec4(vec2(vec4(47.30, 3.1, 5721.9726, 4908.6468)), vec2(4.6, 53.79)));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    _GLF_color = (vec2(2.9, 46.71) * mat4x2(70.67, -81.35, 31.57, -423.061, -83.72, 911.281, 3878.8545, -1.9));
   }
  _GLF_color = vec4(6839.1891, mod(vec2(1962.8174, -165.946), vec2(1980.5483, 303.601)), 6.0);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = sign(vec4(-957.022, -5994.8501, 4905.1525, 6.8));
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
}
float GLF_dead2map(vec3 GLF_dead2p)
{
 return GLF_dead2mapWithMat(GLF_dead2p).y;
}
uniform float GLF_dead3time;

float GLF_dead3dBox(vec3 GLF_dead3p, vec3 GLF_dead3b)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(9022.7924, 882.672, -261.824, 5.9);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(false))
  {
   {
    if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0))), (_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))) || false)))
     {
      _GLF_color = vec4(-1.5, -5.9, -2.8, -3.9);
     }
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-4.0, 7.8, 1.4, -9360.8710);
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-19.61, -921.543, -12.01, -8.6);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(0.0, -94.95, -5.1, -3.6);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = normalize(vec4(-104.565, 3.9, -735.506, 51.48));
  }
 vec3 GLF_dead3d = abs(GLF_dead3p) - GLF_dead3b;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = log(vec4(825.696, 60.89, 66.62, -64.16));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = mix(vec4(-6.8, 2.5, -6776.6711, -545.125), vec4(560.546, 9.0, -4.3, 62.47), vec4(5.8, -74.04, 7.5, 1457.5841));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(2927.2340, 81.58, -3.8, 790.181);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(978.920, 4393.8719, -326.641, 39.72);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(4.2, -7.6, 57.63, 351.895);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mat2x4(mat3(60.54, -22.18, 41.91, 883.213, -685.996, -7048.7870, -844.971, -2070.3337, -5013.2939))[1];
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return min(max(GLF_dead3d.x, max(GLF_dead3d.y, GLF_dead3d.z)), 0.0) + length(max(GLF_dead3d, 0.0)) - 0.2;
 if(_GLF_DEAD(false))
  {
   _GLF_color = abs(vec4(-991.542, 571.823, -2.9, -6673.1899));
  }
}
vec2 GLF_dead3rep(inout vec2 GLF_dead3p, vec2 GLF_dead3o)
{
 vec2 GLF_dead3c = floor((GLF_dead3p + GLF_dead3o) / (GLF_dead3o * 2.0));
 GLF_dead3p = mod(GLF_dead3p + GLF_dead3o, GLF_dead3o * 2.00) - GLF_dead3o;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.1, 5.9, 4.0, -6780.8189);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = mix(vec4(-6.6, 53.55, 4.6, -2880.4889), vec4(5.6, -71.42, 9569.7636, 8.2), float(159980u));
    }
   _GLF_color = min(vec4(-93.49, 67.00, 3.3, 7396.3840), 957.268);
   {
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (mat3x4(5.1, -62.33, -36.61, 105.028, 50.43, -70.80, 9.1, -8.9, -9.3, 91.28, -251.508, 762.364) * vec3(3.6, -2.8, 4.6));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(179.910, -85.35, 2.9, 419.898);
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(3.3, 52.03, -3352.9641, -22.11);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      if(_GLF_DEAD(false))
       {
        _GLF_color = inversesqrt(vec4(-5.0, -6810.1871, -479.905, 1595.5174));
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(39.94, 535.701, 0.4, 1150.4110);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = (vec4(0.9, 4043.6903, -3352.7479, 5.6) * vec4(2.6, 4.5, -868.756, 0.8));
          }
        }
      }
     }
   }
  }
 return GLF_dead3c;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(61.27, -9113.6426, 565.886, -7.8);
  }
}
vec2 GLF_dead3map(vec3 GLF_dead3p)
{
 GLF_dead3p.y += 1.0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(1.1, -17.29, 7499.7828, 4.6);
  }
 vec2 GLF_dead3c = GLF_dead3rep(GLF_dead3p.xz, vec2(.7));
 return vec2(GLF_dead3dBox(GLF_dead3p, vec3(.5, 1.0 + 0.27 * cos(GLF_dead3c.x * GLF_dead3time + 1.0 * GLF_dead3c.x + 3.0 * GLF_dead3c.y), .5)), abs(GLF_dead3c.x + GLF_dead3c.y));
}
float dist_sphere(vec3 pos, vec3 cent, float radius)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = acos(vec4(-611.621, 81.06, -6587.2844, -7.0));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(500.844, 4008.3867, -1084.9796, -1.5);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec3(790.710, 994.579, 7.4).sspp;
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
   {
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-5.6, -1.2, -589.937, 8.5);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = vec4(-670.128, 87.48, -754.106, 44.24);
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(3.5, -4774.0398, 593.010, -14.69);
     }
   }
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(835.989, 41.86, 2660.6878, 2.7);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
 }
 return length(pos - cent) - radius;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(7.3, -8182.2547, 282.072, -5.7);
    }
   _GLF_color = intBitsToFloat(ivec4(38622, 72317, 55389, 72529));
  }
}
float dist_plane(vec3 pos, vec3 point, vec3 norm)
{
 return dot(point - pos, normalize(norm));
}
float dist_ground(vec3 pos)
{
 return pos.y;
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = sin(vec4(6.7, 3763.9525, -7200.0986, 5963.7919));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-219.606, -630.910, -5583.7776, 68.45);
    }
   _GLF_color = sqrt(vec4(50.24, 1.0, -7991.4253, 432.267));
  }
}
float dist_func(vec3 pos)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = exp(vec4(7598.9867, 0.5, 8.9, -7.7));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = floor(vec4(78.20, 767.836, 18.70, 8.4));
    }
  }
 vec3 cent = vec3((mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(965.535, -583.547, 620.619, -4047.6850);
  }
 float plane1 = dist_plane(pos, vec3(0., 0.2, 25.), vec3(1., 1., 1.));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = (vec2(116.962, 5714.8184) * mat4x2(-7.6, 23.33, -603.736, -341.048, -3165.4366, -409.139, -43.45, 8732.7054));
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = sign(vec4(4875.0779, 25.99, -0.1, 6.7));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(6801.7738, 5716.9142, -6.0, -0.2);
        }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (-5.4 / reflect(vec4(1564.7609, 78.54, -8.2, -2.1), vec4(17.35, -218.576, -680.275, -2730.0437)));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = smoothstep(5676.4820, 8.4, vec4(7.9, -9221.1874, 42.26, 0.4));
   if(_GLF_DEAD(false))
    {
     _GLF_color = sign((vec4(0.8, 907.464, -810.901, 60.25) + 7.2));
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(447.927, -93.21, 9.7, 446.542);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 float plane2 = dist_plane(pos, vec3(0., 0., 25.), vec3(- 1., 0.1, 1.));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-0.7, 1.3, 9.6, -43.27);
  }
 if(_GLF_DEAD(false))
  {
   mediump vec4 donor_replacementGLF_dead0gl_FragColor = _GLF_FUZZED(_GLF_color);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-523.656, 55.21, 8147.1296, -540.843);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(-3.9, -886.908, 1061.6305, -0.4);
     }
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1294.7799, -3.6, -5358.0166, -4.1);
    }
   mediump vec4 donor_replacementGLF_dead0gl_FragCoord = _GLF_FUZZED(vec4(-35.07, -5.1, 0.6, 2.4));
   if(_GLF_DEAD(false))
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(6.0, -3.8, -5.8, 8204.6011);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_color = min(vec4(8.2, 7.2, -4.6, 793.818), vec4(6584.1905, -393.760, 1578.1018, 608.032));
    }
   float donor_replacementGLF_dead0time = _GLF_FUZZED(plane1);
   {
    vec3 GLF_dead0color;
    float GLF_dead0len;
    float GLF_dead0t = donor_replacementGLF_dead0time;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = vec4(-7688.2382, 14.14, vec2(-2.0, -1042.2962));
     }
    vec2 GLF_dead0uv = donor_replacementGLF_dead0gl_FragCoord.xy / mouse;
    vec2 GLF_dead0offset = GLF_dead0uv;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-576.471, vec3(507.852, 7.5, -24.59));
     }
    GLF_dead0offset -= .5;
    GLF_dead0offset.x *= mouse.x / mouse.y;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = round(vec4(32.98, 9673.1043, 420.693, -1.5));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = (vec4(180.071, -4222.0976, -6.3, 48.30) * (mat3x4(6.3, 304.950, 5.0, -3184.2531, 3.4, -3027.3147, -889.909, 335.927, -3.5, -50.55, -1.5, 945.054) * mat4x3(247.252, 674.911, 4.4, -3302.4221, 2.8, -35.83, 64.68, -47.76, -9.9, -41.62, 3.2, -22.91)));
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
     {
      _GLF_color = vec4(24.82, -4.9, -3.4, -464.470);
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-617.290, 91.92, -5219.5615, -765.214);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-251.287, 7843.9444, -3.8, -6366.3157);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_dead0len = length(GLF_dead0offset);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(22.23);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_dead0t += 0.07;
    vec2 GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    float GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
    float GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
    GLF_dead0uv += GLF_dead0offset_unit_vector * GLF_dead0firstMod * GLF_dead0secondMod + mouse * 2.;
    GLF_dead0color[0] = .01 / length(abs(fract(GLF_dead0uv) - .5));
    GLF_dead0offset.x *= mouse.x / mouse.y;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = asin(vec4(-87.44, 542.922, 766.903, 2532.1167));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = faceforward(vec4(9.7, 4.0, 9.2, -3252.9366), vec4(-3.6, -9.2, -28.83, -86.62), vec4(-9.3, 4587.7835, 1.2, -912.329));
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
         {
          _GLF_color = vec4(594.271, 1005.6132, -5.8, 549.710);
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = (vec4(-0.3, 0.0, 2.4, -95.51) - round(8.4));
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
         }
       }
     }
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_dead0len = length(GLF_dead0offset);
    GLF_dead0t += 0.07;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-210.962, 92.59, -7724.2932, 8.7);
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = max(vec4(6672.9197, vec4(-3.8, -1916.4587, -91.23, 110.342).brb), acos((vec4(751.963, -8.8, 45.33, 6.2) - vec4(13.07, -722.342, 619.812, -8401.2664))));
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-2649.3506, -4532.6909, 0.1, 2.3);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= length(0.0)))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
    GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-4.0, 21.06, 4.4, -0.3);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-78.27, -4.7, -0.2, -28.56);
     }
    GLF_dead0uv += GLF_dead0offset_unit_vector * GLF_dead0firstMod * GLF_dead0secondMod + mouse * 2.;
    GLF_dead0color[1] = .01 / length(abs(fract(GLF_dead0uv) - .5));
    donor_replacementGLF_dead0gl_FragColor = vec4(GLF_dead0color / .1, donor_replacementGLF_dead0time);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(0.0, -2.9, 117.880, -3.4);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = vec4((- 3216.3951), vec3(-25.79, 646.237, 7.9));
     }
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-359.616, -427.418, 94.06, 11.00);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4(-138.485, -2.2, 6.9, 2.7);
       }
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(59.49, -4654.7520, 9893.0787, 3.8);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = clamp(vec4(3335.5907, 939.488, 816.655, -97.49), vec4(32.91, 4656.9743, -7994.2632, 320.027), vec4(4.6, 33.50, -2.4, 963.953));
      }
     if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (_GLF_IDENTITY(true, ! (! (true))))))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-6.8, 16.80, 7.1, 0.3);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = roundEven(vec4(-8.9, 77.37, -7871.1295, 853.323));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(5093.3140, 3.7, -1353.2991, -9.1);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = inversesqrt(vec4(89.88, 6.4, -199.342, -3.5));
   }
 }
 float ground = dist_ground(pos);
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
  {
   _GLF_color = log2(vec4(625.969, -75.07, 497.263, -86.94));
  }
 float dist = min(plane1, plane2);
 dist = min(dist, ground);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-2006.5382, vec3(-730.753, 4.8, 754.293));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return dist;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(vec2(-1433.5568, 861.936), 29.50, 79.35);
  }
 {
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = exp2(vec3(-1490.4066, -62.28, 7.1).bbrr);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  vec4 _GLF_outVarBackup_GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(-72.91, 30.59, 6.1, -6.1);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mix(vec4(-511.545, -4992.7978, -1.3, -80.56), vec4(-3031.0673, 335.717, 2753.1285, -9.8), bvec4(true, true, true, false));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(false))
       {
        _GLF_color = vec4(3.1, -39.84, -49.46, -8.1);
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = atan(vec4(4.5, -597.715, -7.2, -6.2), vec4(-7571.8654, -4.3, 5.1, -0.3));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(28.88, 2.1, 8.4, 4920.8505);
          }
        }
       }
      _GLF_color = (vec4(-67.17, 2788.8303, 8475.1631, 46.00).xxwx - vec4(-8746.5547, vec2(19.25, -985.848), -89.91));
     }
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(3.7, -286.305, 4.6, 9.4);
    }
   _GLF_color = vec4(65.89, -6.3, 0.7, -2.7);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = roundEven(vec4(42.46, 63.08, -2.7, -12.21));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= length(0.0)))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
}
float refr_dist_func(vec3 pos)
{
 vec3 cent = vec3((mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 float sphere = dist_sphere(pos, cent, 1.);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = step(-4.0, vec4(-72.77, 2220.0802, -4071.0433, -5.2));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-2235.5446, -219.938, -1.1, -6.5);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(4770.1530, 3.6, 2.5, -7.0);
      }
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = reflect(vec4(5.4, -140.461, 82.98, 7.4), vec4(1.0, 732.782, 5938.5778, 5.9));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = trunc(vec4(0.3, -277.922, -66.77, -12.83));
   }
 }
 return sphere;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = (mat2(-9968.4772, -5516.6674, 2066.8515, 4409.8717)[0] * mat4x2(9.7, -94.40, 63.26, 8610.3070, 7051.8087, -7.4, -2.3, -461.460));
    }
   _GLF_color = vec4(-8.1, 2631.9993, 226.779, 3.4).bbra;
  }
}
vec3 norm_func(vec3 pos)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-993.188, -15.96, 7.3, -95.67);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = mix(vec4(1104.1668, -5.3, -6.2, 3.4), vec4(-8524.7368, 11.41, -5.2, -17.98), length(vec3(-8624.2736, 435.562, -98.09)));
    }
  }
 float es = 1e-3;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(vec2(-14.36, 0.9), vec2(6.1, -6.3));
  }
 float dx = dist_func(pos + vec3(es, 0., 0.)) - dist_func(pos - vec3(es, 0., 0.));
 float dy = dist_func(pos + vec3(0., es, 0.)) - dist_func(pos - vec3(0., es, 0.));
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = log2((-1242.4605 - vec4(6.5, 78.28, -3.0, -1035.5321)));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 float dz = dist_func(pos + vec3(0., 0., es)) - dist_func(pos - vec3(0., 0., es));
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-671.843, -55.04, 0.4, 4995.8121);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.1, -91.58, -46.57, 8757.2467);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-27.58, -3.5, -489.399, 7325.5287);
  }
 return normalize(- vec3(dx, dy, dz));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(224.308, -9.6, 119.381, 1608.2085);
  }
}
vec3 refr_norm_func(vec3 pos)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = smoothstep(vec4(-296.135, 5.3, 5.3, -7.0), vec4(3.2, -92.19, -7.0, -73.70), vec4(1943.1001, -1299.2003, -758.603, -2379.5211));
  }
 float es = 1e-3;
 float dx = refr_dist_func(pos + vec3(es, 0., 0.)) - refr_dist_func(pos - vec3(es, 0., 0.));
 float dy = refr_dist_func(pos + vec3(0., es, 0.)) - refr_dist_func(pos - vec3(0., es, 0.));
 float dz = refr_dist_func(pos + vec3(0., 0., es)) - refr_dist_func(pos - vec3(0., 0., es));
 return normalize(- vec3(dx, dy, dz));
}
float refr_func(vec3 pos)
{
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = ((mat3x4(mat2x4(3.3, -6.1, -499.148, 2.3, 10.72, 6.3, 8.2, -8038.7365)) != mat3x4(-6.4, 3143.1466, -6469.5276, 5913.9457, -51.15, -4.2, 5.9, 352.383, 5384.5325, 1.6, -64.15, 4.0)) ? vec4(148.767, -9.0, 3.0, 35.19) : vec4(4639.8705, 5.8, 20.44, 0.8));
   }
  _GLF_color = ((mat4(40.69, 832.722, -6.6, 3057.5200, -4383.5789, 45.19, -7.3, 252.347, 7.6, -546.496, -529.216, -9102.8156, 1368.3013, -6152.5957, -91.43, -126.495) / 23.96) * mat4(684.892, -7.1, -572.442, 96.90, -3968.7094, -51.34, 9.7, -680.052, -629.321, 39.22, -1.3, 6376.1875, -7.3, -4.9, -6.2, -0.9))[3];
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 vec3 cent = vec3((mouse - vec2(.5, 0.)) * vec2(12., 3.), 0.) + vec3(0., 1.2, 7.);
 if(_GLF_DEAD(false))
  {
   const int donor_replacementGLF_dead1MAX_RAY_STEPS = _GLF_FUZZED(26939);
   const float donor_replacementGLF_dead1RAY_STOP_TRESHOLD = _GLF_FUZZED((+ -2898.1463));
   vec4 donor_replacementGLF_dead1fragColor = _GLF_FUZZED(_GLF_color);
   vec2 donor_replacementGLF_dead1fragCoord = _GLF_FUZZED(vec2(599.336, 775.428));
   const vec4 donor_replacementGLF_dead1iMouse = _GLF_FUZZED(vec4(-63.97, 3.4, 16.86, 309.315));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-27.42, 0.1, -5.5, -281.230);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(1.1, 7718.8515, -779.619, 84.99);
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec3(-6.1, -82.73, 8940.8363).zyxx;
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = faceforward((abs(vec4(1270.6309, 6286.9185, 508.220, 799.085)) * vec4(1.3, 316.896, 0.9, 51.12)), vec4(-8892.2855, -4.3, -4.2, -2894.6422), vec4(620.814, -7.3, -6.3, 5.4));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   float donor_replacementGLF_dead1time = _GLF_FUZZED(max(6707.8265, 1841.4674));
   {
    vec2 GLF_dead1screenPos = donor_replacementGLF_dead1fragCoord.xy / injectionSwitch.xy * 2.0 - 1.0;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = vec4(3.3, 5.1, -8.7, -1.4);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(4.8, -93.06, 9.2, -9.6);
     }
    vec2 GLF_dead1mousePos = donor_replacementGLF_dead1iMouse.xy / injectionSwitch.xy * 2.0 - 1.0;
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-6.9, 7.3, 65.71, 5.6);
     }
    vec3 GLF_dead1cameraPos = vec3(0.16 * sin(donor_replacementGLF_dead1time), 0.16 * cos(donor_replacementGLF_dead1time), donor_replacementGLF_dead1time);
    vec3 GLF_dead1cameraDir = vec3(0.0, 0.0, 1.0);
    vec3 GLF_dead1cameraPlaneU = vec3(1.0, 0.0, 0.0);
    vec3 GLF_dead1cameraPlaneV = vec3(0.0, 1.0, 0.0) * (injectionSwitch.y / injectionSwitch.x);
    vec3 GLF_dead1rayPos = GLF_dead1cameraPos;
    vec3 GLF_dead1rayDir = GLF_dead1cameraDir + GLF_dead1screenPos.x * GLF_dead1cameraPlaneU + GLF_dead1screenPos.y * GLF_dead1cameraPlaneV;
    GLF_dead1rayDir = normalize(GLF_dead1rayDir);
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = max(vec4(630.514, 4.7, -26.27, 2398.4891), smoothstep(vec4(4.6, -234.720, -8.0, 1.2), vec4(72.75, -9226.4785, 9.2, 378.722), vec4(-68.40, -65.47, vec2(-5.6, 181.780))));
     }
    float GLF_dead1dist = GLF_dead1scene(GLF_dead1rayPos);
    int GLF_dead1stepsTaken;
    if(_GLF_DEAD(false))
     {
      _GLF_color = (vec3(4.5, -364.239, 13.51) * (true ? transpose(mat3x4(-1631.1196, -4.4, 6194.8320, -4.4, -8.1, 4.1, -26.14, -709.278, 36.10, 58.20, -438.692, -120.825)) : mat4x3(5672.1411, -459.218, -3.7, -206.643, 6838.3791, -841.091, 5820.6600, 9.3, -63.86, -3.4, 5.8, -2372.1480)));
     }
    for(
        int GLF_dead1i = 0;
        GLF_dead1i < donor_replacementGLF_dead1MAX_RAY_STEPS;
        GLF_dead1i ++
    )
     {
      if(GLF_dead1dist < donor_replacementGLF_dead1RAY_STOP_TRESHOLD)
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = (+ vec4(60.39, 69.40, -82.02, -5874.6082));
         }
        continue;
       }
      GLF_dead1rayPos += GLF_dead1rayDir * GLF_dead1dist;
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = vec4(-7537.8231, vec2(111.551, 72.32), -66.29);
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-8164.3266, -1.4, -3.7, -2517.1384);
          }
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-6.4, -6765.2974, 52.41, 2.3);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = refract((-38.64 + vec4(65.06, -90.53, -8.1, 2.2)), vec4(-9115.1707, -2.5, -3.0, -754.343), -9.2);
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-5.2, 5.3, -2450.9792, -4.4);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      GLF_dead1dist = GLF_dead1scene(GLF_dead1rayPos);
      GLF_dead1stepsTaken = GLF_dead1i;
     }
    vec4 GLF_dead1color = GLF_dead1colorize(pow(float(GLF_dead1stepsTaken) / float(donor_replacementGLF_dead1MAX_RAY_STEPS), 0.9));
    donor_replacementGLF_dead1fragColor = GLF_dead1color;
   }
  }
 float sphere = dist_sphere(pos, cent, 2.);
 if(sphere < 0.)
  {
   return .6;
  }
 return 1.;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(203.506, -616.848, 186.865, -12.17);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
   {
    _GLF_color = vec4(-520.484, 3021.8692, 8.4, -9.7);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   vec4 _GLF_outVarBackup_GLF_color;
   _GLF_outVarBackup_GLF_color = _GLF_color;
   _GLF_color = vec4(2.0, -52.65, -5.4, 833.700);
   if(_GLF_WRAPPED_IF_TRUE(true))
    {
     _GLF_color = _GLF_outVarBackup_GLF_color;
    }
  }
  _GLF_color = vec4(978.574, 2031.4347, -0.1, -187.986);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = tan(vec4(57.23, 6877.0312, -65.70, 7.3));
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = pow(vec4(-96.40, 836.074, 184.501, 60.99), asin(vec4(6.3, -7021.2607, 1.2, 6.7)));
  if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (false ? _GLF_FUZZED(true) : true))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
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
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(0.9, -98.77, 1680.0056, 7.3);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-2327.0067, -0.2, -21.50, -1.1);
  }
}
vec4 trace_pos(vec3 src, vec3 dir)
{
 vec3 pos = src;
 float dist = 0.;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-87.46, 437.094, -36.87, -1.9);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= log(1.0)))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = (vec4(-4.7, 3690.6987, -38.04, -89.40) - vec4(0.3, 5.4, -8.8, 6.2));
  }
 float d = dist_func(pos);
 float rd = abs(refr_dist_func(pos));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(6.4, 9282.5814, 2272.1380, 2748.9307);
    }
   _GLF_color = vec4(-7.1, 3.9, 1.8, 5.4);
  }
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
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec4(5888.4244, 8.3, -0.2, -974.224);
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-2.1, 4710.5411, 11.52, 0.2);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-22.11, 8.4, 88.43, -93.26);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(273.097, 4.1, 7.7, -5.3);
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
      }
     dist += min(d, rd);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-53.39, 2576.3438, 621.902, -694.336);
      }
    }
  }
 return vec4(pos, dist);
}
float is_clear(vec3 src, vec3 tgt)
{
 vec3 dir = normalize(tgt - src);
 vec3 pos = src;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(0.0, 2166.1904, -37.55, -8.5);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = ((true ? -37.85 : -471.368) * vec4(-6688.4579, 3.8, -8798.9973, 2006.9272));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = pow(intBitsToFloat(ivec4(90204, -70207, -29701, -98460)), vec4(5.6, -318.319, 4.2, 547.478));
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = mix(vec4(-5.9, 38.38, -766.598, -9.8), vec4(1876.0174, 5758.6483, -49.15, -7.8), bvec4(true, false, true, true));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(5682.9553, -1.4, 0.9, 3.4);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 float dist = 0.;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(76.82, 832.791, -6511.3951, -3567.6644);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(7.9, 7460.7142, -447.013, -39.30);
  }
 float d = min(dist_func(pos), length(pos - tgt));
 for(
     int t = 0;
     t < 100;
     t ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-622.125, -7.4, -18.45, 0.9);
    }
   if(length(pos - tgt) < 1e-1)
    {
     return exp(- dist * 0.05);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
    {
     _GLF_color = vec4(4.0, -7.2, 0.6, -8864.3282);
    }
   pos += dir * d;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = step((vec2(716.541, 5.1) * mat4x2(-4.6, -8.0, -6.4, -9319.3100, -7311.2679, -5.2, -7306.4597, 0.8)), vec4(2.6, -3.9, -9759.8484, 52.64));
    }
   dist += d;
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-7.7, -9.3, -0.7, -0.8);
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_color = vec4(-15.69, -464.791, 45.02, 3.1);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-77.44, 416.133, 8.9, 122.309);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-924.934, -2.6, -241.539, 0.9);
    if(_GLF_DEAD(false))
     {
      _GLF_color = mat2x4(29.21, -68.26, -605.781, -881.969, 585.909, 880.472, -7556.7363, -1.5)[0];
     }
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec3(-9486.8201, 4.4, -70.57).gb.xxyy;
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        _GLF_color = vec4(-863.052, 24.74, (vec2(20.19, 7557.4653) + 69.93));
       }
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(-75.24, 1.2, -567.400, 0.1);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = vec4(620.404, 7084.0644, 344.956, -5.9);
       }
     }
   }
   d = dist_func(pos);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-46.32, -5.0, 9.2, -47.27);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = mix(vec4(0.9, -7347.4527, -89.47, 2.5), vec4(0.7, 6187.0965, 7508.0621, -0.6), vec4(-36.35, 1906.5008, -774.909, 7472.1316));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(4.5, 0.1, 56.63, 9.8);
    }
   if(d < 1e-6)
    {
     return 0.;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-710.888, (vec4(-63.78, 596.394, -5.5, 355.789) * (false ? mat2x4(2.1, -63.35, -0.7, -953.702, -7874.1122, 958.045, -8.8, 50.68) : mat2x4(211.946, 7.5, 998.899, 268.737, 88.13, -143.572, -2.4, 20.01))), -824.106);
      }
    }
   d = min(dist_func(pos), length(pos - tgt));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
    {
     for(
         int GLF_dead2i = 0;
         GLF_dead2i < 200;
         GLF_dead2i ++
     )
      {
       float GLF_dead2h = GLF_dead2map(src + tgt * d);
       if(GLF_dead2h < d)
        {
         return 0.0;
        }
       dist = min(dist, d * GLF_dead2h / d);
       d += GLF_dead2h;
       if(d >= d)
        {
         break;
         if(_GLF_DEAD(false))
          {
           _GLF_color = faceforward(vec4(26.23, 1169.7340, -6.8, 289.909), vec4(-3650.3855, -1.1, -3.0, 2187.9141), vec4(-8.4, 4.4, 59.61, 94.95));
          }
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = ceil(vec4(3.7, 96.60, -0.4, 1.6));
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(1.7, -319.385, 23.80, -0.0);
        }
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-33.62, -1.5, -71.26, -9014.0260);
    }
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(70.48, -7.4, 8.8, 90.64);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 return 0.;
}
vec3 trace_clr(vec3 src, vec3 dir)
{
 vec3 light_pos[3];
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(6.5, -6478.8054, 7.9, -9135.1804);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(68.86, 0.5, -0.9, 7.7);
    }
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = ((mat2(-8505.1588, 88.86, -9.3, 9.6) * vec2(1.8, 6.2)) * mat4x2(1913.3710, -1807.6913, 2480.3216, 8.9, -28.89, -4.8, 9.5, -74.38));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 light_pos[0] = vec3(1., 6., 2.);
 light_pos[1] = vec3(0., 7., 3.);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-5.1, -8.9, 568.838, -7803.1082);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-0.9, 1.8, -4.1, -64.22);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 light_pos[2] = vec3(2., 8., 4.);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3632.2440, 6.6, -6412.7305, -4387.4938);
  }
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
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = faceforward(vec4(892.177, 7151.3503, -5.3, 46.41), vec4(-9.9, 186.396, -6.2, -657.100), vec4(-27.16, 0.7, -8897.1001, -3673.9409));
     }
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (((523.773 / mat3x4(992.633, 0.9, -88.59, -2.8, 231.666, 743.471, -27.62, -36.66, 0.7, 990.059, -55.50, -2096.3865)) * vec3(-695.855, -2938.7810, 69.75)) * (mat4(-8851.1835, 5456.4760, 9.5, -124.918, 8357.2126, -3.2, -8203.2554, -79.51, -8.8, -0.4, -4.5, 920.815, 9.3, 475.404, 5.3, -4.5) - 4.9));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
     {
      _GLF_color = sign((vec4(654.925, 4.7, 466.922, -7.7) - vec4(-284.638, -6452.0725, 9.7, -44.91)));
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = vec4(6062.3121, 2967.5220, -8731.3080, -38.65);
       }
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(1.6, 60.27, -3.6, -1.3);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(-28.86, -7.5, -51.46, 86.83);
         }
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     {
      float GLF_dead3td = 0.0;
      for(
          int GLF_dead3i = 0;
          GLF_dead3i < 128;
          GLF_dead3i ++
      )
       {
        vec2 GLF_dead3s = GLF_dead3map(src + src * GLF_dead3td);
        if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
         {
          {
           vec4 _GLF_outVarBackup_GLF_color;
           _GLF_outVarBackup_GLF_color = _GLF_color;
           _GLF_color = exp2(vec4(-7.8, vec2(-4101.9254, 8.9), -6987.0769));
           if(_GLF_WRAPPED_IF_TRUE(true))
            {
             _GLF_color = _GLF_outVarBackup_GLF_color;
            }
          }
          _GLF_color = vec4(-4.5, -8.8, 53.27, -1248.3080);
         }
        if(abs(GLF_dead3s.x) < 0.001)
         vec2(GLF_dead3td, GLF_dead3s.y);
        GLF_dead3td += GLF_dead3s.x * .5;
        {
         {
          vec4 _GLF_outVarBackup_GLF_color;
          _GLF_outVarBackup_GLF_color = _GLF_color;
          _GLF_color = vec4(8.5, 4608.4941, -9616.0240, 6561.3868);
          if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
           {
            _GLF_color = _GLF_outVarBackup_GLF_color;
           }
         }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(-72.58, 734.354, -109.784, 77.79);
          }
         vec4 _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
          {
           _GLF_color = vec4(-22.86, 920.044, -8.0, 87.61);
          }
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = (mat3x4(-273.647, -8106.3962, -56.96, 95.29, -760.434, 9.1, -2111.4329, 53.69, -86.51, -252.033, -7976.2164, -7.6) * vec3(-1.7, -9.3, -291.707));
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
       }
      vec2(10.0, - 1.0);
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-3.4, -0.1, 3.8, 3868.8209);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = (vec4(-8.9, 537.226, 5.1, 816.134) + vec4(1.5, -4.6, 972.212, -7214.0345));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
      {
       _GLF_color = acos(vec4(25.92, -2822.7251, 57.93, -9629.0036));
      }
    }
   vec3 l_dir = normalize(light_pos[l] - pos.xyz);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
       {
        _GLF_color = mod(vec4(-778.600, -189.658, 818.520, 7.9), vec4(-4107.5713, -19.44, -55.72, 6.1));
       }
      _GLF_color = vec4(7450.2406, 1891.6340, -3.3, 75.92);
     }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(23.56, -629.100, 80.23, -48.89);
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(-786.430, 169.268, 3.0, 28.83);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-827.677, -7.2, 27.00, 41.77);
        }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = fract(faceforward(vec4(3982.9225, -159.623, 63.20, 1.0), vec4(9.6, 52.56, 2441.4690, -293.902), vec4(-88.77, 962.556, -392.185, 1688.9198)));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = (vec4(-744.958, 1.1, -3732.3453, 62.66) - vec4(46.07, -3.6, -4.6, 48.32));
      }
    }
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = (mat3x4(-4.9, 407.332, 8.9, 2484.2050, 5.6, 0.5, -46.95, 653.882, -9887.3318, 7.6, 8.4, -2369.3153) * (vec3(-787.435, -9.3, -37.27) - 108.792));
     }
   }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(8314.5838, -6529.9271, -945.594, 9.7);
    }
   float str = dot(norm, - l_dir) * is_clear(pos.xyz, light_pos[l]);
   clr += clamp(light_clr[l] * color_func(pos) * str, 0., 1.);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(388.426, 4.9, -926.890, -78.20);
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(7473.3023, 4100.4652, -1.6, -17.17);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
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
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(473.049, 4.4, 745.717, 72.47);
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(70.47, -70.82, -6541.7511, 2.8);
        }
      }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-2.0, 9.9, 613.767, -48.90);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = (vec4(-7.1, 437.777, -5.7, 1.0) - mix(vec4(-2090.5554, 5616.1158, -8283.9464, 3429.5799), vec4(-8.2, -4148.5840, -73.98, 8.7), 37.58));
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(7.8, -347.701, 255.329, -959.819);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
      if(_GLF_DEAD(_GLF_IDENTITY(false, true && (_GLF_IDENTITY(false, ! (! (false)))))))
       {
        _GLF_color = vec4(4354.6441, 36.98, -2.3, -20.91);
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-8.3, -6.0, 38.75, 7.7);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
     if(_GLF_DEAD(false))
      {
       _GLF_color = exp(trunc(vec4(95.96, 3489.2332, -5133.7629, -8734.8644)));
      }
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
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-565.637, 0.0, 81.20, 9342.6120);
        }
       vec3 l_dir = normalize(light_pos[l] - pos.xyz);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(3.1, 4752.4536, 9.4, 607.285);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
          {
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-5.4, vec3(-8027.0985, -23.00, -9320.7680));
            }
           _GLF_color = vec4(-7.1, 76.92, 4.9, -2.0);
          }
         _GLF_color = round(vec4(945.878, 7336.9089, 4445.0536, -7.3));
        }
       float str = dot(norm, - l_dir) * is_clear(pos.xyz, light_pos[l]);
       clr += clamp(light_clr[l] * color_func(pos) * str, 0., 1.);
      }
     s *= 0.5;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-4.5, 50.73, -769.740, -6979.7154);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
      _GLF_color = vec4(vec2(5.7, -1.0), -839.362, 3.7);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, (true ? true : _GLF_FUZZED(true)))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
  }
 return clr;
}
void main(void)
{
 float mn = min(resolution.x, resolution.y);
 {
  vec4 _GLF_outVarBackup_GLF_color;
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(6.8, -3.9, -9.5, -9.6);
   }
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = vec4(-3.9, -5.2, -779.632, 42.76);
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
     {
      _GLF_color = vec4(-86.63, 8714.0075, -975.737, -2391.8082);
     }
   }
 }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = reflect(vec4(503.378, 0.6, 273.216, -1.3), vec4(-5031.4797, 0.6, -0.7, 35.78));
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = exp2(vec4(-97.96, -2.5, -8.2, 8.9));
     }
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = intBitsToFloat(ivec4(-8350, -57821, -93769, -49780));
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (vec4(-803.927, 886.939, -7.6, -3.2) / faceforward(vec4(-0.4, -805.866, -902.622, 934.320), vec4(-8921.5252, 949.741, -14.49, -1120.3134), vec4(65.50, -2591.1654, 8.1, -54.34)));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(5.9, 9.4, -1.1, -2.8);
     }
   }
   mediump vec4 donor_replacementGLF_dead0gl_FragColor = _GLF_FUZZED((_GLF_color));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec4(-756.840, -5.1, -95.51, 1810.3504);
      }
     _GLF_color = vec4(8.6, -753.076, -23.00, 4.1);
    }
   mediump vec4 donor_replacementGLF_dead0gl_FragCoord = _GLF_FUZZED(vec4(7767.9731, -8.9, 0.1, 4.7));
   vec2 donor_replacementGLF_dead0resolution = _GLF_FUZZED(mouse);
   if(_GLF_DEAD(false))
    {
     _GLF_color = intBitsToFloat(ivec4(83088, 73347, -24374, 51473));
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(8827.8553, 0.7, -4.8, -5.4);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-3.5, -9.5, -58.45, 514.277);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(-228.920, 3.2, -0.6, 616.845);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   float donor_replacementGLF_dead0time = _GLF_FUZZED(dot(mn, smoothstep(mn, -60.34, -6.1)));
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = (1.3 * sin(vec4(-2787.9822, -2460.6182, 8688.8676, -421.113)));
     }
    vec3 GLF_dead0color;
    float GLF_dead0len;
    float GLF_dead0t = donor_replacementGLF_dead0time;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-1.9, -4299.7381, -46.98, -7.4);
      }
     _GLF_color = mat2x4(436.778, -5.3, -268.368, 752.018, -1.5, 4424.2889, -0.5, -473.378)[1];
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = sqrt(vec4(90.37, 124.884, -882.370, 97.50));
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = vec4(-964.664, 687.327, -541.688, -0.2);
         if(_GLF_WRAPPED_IF_TRUE(true))
          {
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        if(_GLF_DEAD(false))
         {
          _GLF_color = vec4(1671.4340, 631.269, 529.463, -21.06);
         }
       }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    vec2 GLF_dead0uv = donor_replacementGLF_dead0gl_FragCoord.xy / donor_replacementGLF_dead0resolution;
    vec2 GLF_dead0offset = GLF_dead0uv;
    GLF_dead0offset -= .5;
    GLF_dead0offset.x *= donor_replacementGLF_dead0resolution.x / donor_replacementGLF_dead0resolution.y;
    GLF_dead0len = length(GLF_dead0offset);
    GLF_dead0t += 0.07;
    vec2 GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (cross(vec3(54.74, -8.0, 64.09), vec3(748.095, -49.66, 45.91)) * mat4x3(-5.2, 6965.9789, 3.6, 850.804, -3117.4132, -2863.6184, -0.9, -9.6, 5.3, -4.6, 0.2, -667.531));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    float GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
    float GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
    GLF_dead0uv += GLF_dead0offset_unit_vector * GLF_dead0firstMod * GLF_dead0secondMod + resolution * 2.;
    if(_GLF_DEAD(false))
     {
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
       {
        _GLF_color = vec4(length(vec2(-593.755, -52.70)), vec2(450.275, 1152.1477), 210.134);
       }
      _GLF_color = step(4431.9665, vec4(76.80, 5.0, -54.90, 977.651));
     }
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(265.315, -8561.9876, -2.0, 4.4);
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_color = vec4(61.58, 25.69, -2182.6178, 2.2);
      }
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = vec4(8646.4785, 2930.4689, 9.8, -648.694);
     if(_GLF_WRAPPED_IF_TRUE(true))
      {
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec4(4729.6297, 5.7, 69.21, -0.8);
      }
    }
    GLF_dead0color[0] = .01 / length(abs(fract(GLF_dead0uv) - .5));
    GLF_dead0offset.x *= donor_replacementGLF_dead0resolution.x / donor_replacementGLF_dead0resolution.y;
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
     {
      _GLF_color = max(vec4(-987.006, 19.18, -5.5, 1306.5282), -6.5);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
       {
        _GLF_color = vec4(42.75, 7902.7498, 3.6, -7788.9690);
       }
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-726.519, 77.86, -11.09, 442.283);
       if(_GLF_WRAPPED_IF_TRUE(true))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
        }
      }
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(7807.2494, -215.330, 3.7, 483.695);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = refract(vec4(-999.757, -587.454, -99.14, -1492.8505), (+ vec4(2182.6668, 83.81, -0.1, -1.1)), (-3228.7614));
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-422.064, 52.80, 5.4, 9664.5087);
     }
    GLF_dead0len = length(GLF_dead0offset);
    if(_GLF_DEAD(false))
     {
      _GLF_color = smoothstep(vec4(-6.3, 5.9, 92.10, -3610.4955), vec4(0.7, 65.07, -570.211, 25.56), vec4(0.7, 785.548, -55.72, -250.849));
     }
    GLF_dead0t += 0.07;
    GLF_dead0offset_unit_vector = GLF_dead0offset / GLF_dead0len;
    GLF_dead0firstMod = sin(GLF_dead0t) + 1.0;
    GLF_dead0secondMod = abs(sin(GLF_dead0len * 9.0 - GLF_dead0t * 2.0));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(6.2, vec2(18.30, -56.70), 8.0);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-676.044, -7.8, -610.619, -4248.1546);
     }
    GLF_dead0uv += GLF_dead0offset_unit_vector * GLF_dead0firstMod * GLF_dead0secondMod + resolution * 2.;
    {
     vec4 _GLF_outVarBackup_GLF_color;
     _GLF_outVarBackup_GLF_color = _GLF_color;
     _GLF_color = (vec4(8179.0857, 50.29, -697.994, -6695.0571) / determinant(mat4(8.6, -622.459, -513.883, -56.64, -55.82, 7.6, -6.0, -4.3, -6.7, -5.7, -43.91, 17.04, -8.9, 623.280, -5.4, -835.478)));
     if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
      {
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-4087.2098, -39.94, -31.91, 21.67);
        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_ZERO(0.0, injectionSwitch.x)))))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
       _GLF_color = _GLF_outVarBackup_GLF_color;
      }
    }
    GLF_dead0color[1] = .01 / length(abs(fract(GLF_dead0uv) - .5));
    if(_GLF_DEAD(false))
     {
      {
       vec4 _GLF_outVarBackup_GLF_color;
       _GLF_outVarBackup_GLF_color = _GLF_color;
       _GLF_color = vec4(-63.18, 177.129, -454.433, 0.9);
       if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
        {
         _GLF_color = _GLF_outVarBackup_GLF_color;
         if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
          {
           _GLF_color = vec2(-6.3, -75.15).xyxy;
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = normalize(vec4(2743.1561, -22.99, -5684.4579, 910.214));
            if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (! (true)))))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
             }
           }
          }
        }
      }
      _GLF_color = vec4(-77.24, 10.85, 3.0, -8663.2240);
     }
    donor_replacementGLF_dead0gl_FragColor = vec4(GLF_dead0color / .1, donor_replacementGLF_dead0time);
   }
  }
 vec2 uvt = (gl_FragCoord.xy - resolution.xy * .5) / mn;
 vec3 pos = vec3(0., 2., 0.);
 vec3 dir = normalize(vec3(uvt, 1.));
 if(_GLF_DEAD(false))
  {
   _GLF_color = sign(vec4(-94.79, -7756.3098, -336.040, -853.378));
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = (vec4(7018.0851, 706.992, -207.758, -513.980) / -305.634);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(4222.7077, -4593.0188, 50.41, 14.66);
    }
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(2.7, -0.4, -70.84, 1.8);
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
  }
 if(_GLF_DEAD(false))
  {
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = vec4(8.3, 337.368, 3772.8691, -2552.5064);
    if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
     }
   }
   _GLF_color = vec4(-5.8, 119.941, -5.8, 8.4);
  }
 vec3 color = trace_clr(pos, dir);
 if(_GLF_DEAD(false))
  {
   _GLF_color = reflect(vec4(917.110, -7.3, 2194.5995, -2019.7002), vec4(638.876, -8055.7977, -7237.4868, -4.1));
  }
 _GLF_color = vec4(color, 1.0);
}
