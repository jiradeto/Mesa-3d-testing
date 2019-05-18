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

uniform vec2 resolution;

float EPSILON = 0.01;

vec2 opUnion(vec2 a, vec2 b)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(1.7, -4.5, -96.36, 4.6);
  }
 if(_GLF_DEAD(false))
  return vec2(1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = min(cos(vec4(-50.86, 453.200, 77.40, 5.2)), vec4(-133.780, -0.9, -669.837, 6.1));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(423.012, 159.063, 403.521, 4841.7779);
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-4666.0145, 3.1, 3521.9700, -1.4);
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           if(_GLF_DEAD(false))
            {
             _GLF_color = (vec4(901.558, -4.3, 344.246, -9.0)).zwyx;
            }
           _GLF_color = vec4(vec2(-2.7, -0.0), vec2(3.0, -7.2));
          }
         _GLF_color = refract(vec4(4.9, -93.33, -4.3, -8842.6182), (-372.830 * vec4(-2328.5613, -2.6, -847.556, -1.1)), 6030.0894);
        }
      }
     _GLF_color = vec4(vec3(2.4, -4.6, -9.2), 485.712);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-606.864, 46.14, 55.68, -1.4);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(-6.4, -3.9, -8.3, -2.7);
          }
         return vec2(1.0);
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = (vec4(-472.341, -5.2, -2.2, -58.01));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = trunc(vec4(-4.2, -889.393, 8.4, -0.1));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-63.19, -408.365, -402.197, -973.385);
    }
  }
 return a.y < b.y ? a : b;
 if(_GLF_DEAD(false))
  {
   _GLF_color = step(log2(cos(vec4(5730.9879, -71.46, -3.7, -58.62))), vec4(2.0, -23.70, 796.745, -7157.6739));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3.9, -7.0, -1719.4899, -1339.8810);
   if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-853.703, 1.8, 227.116, -609.323);
      }
     return vec2(1.0);
    }
  }
 if(_GLF_DEAD(false))
  return vec2(1.0);
}
float sphere(vec3 p, float r)
{
 return length(p) - r;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-0.7, -76.00, 6.6, -7131.6733);
  }
 if(_GLF_DEAD(false))
  return 1.0;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(2.0, 802.638, 6.5, -8506.2737);
    }
   _GLF_color = (vec4(-8673.4493, -6.0, -7.8, -9.6) * vec4(-134.907, 5.9, -96.99, 4377.3879));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = smoothstep(reflect(vec4(-3778.1632, -2124.5765, 1.3, -15.91), vec4(2338.1842, -5.7, 21.16, 9851.6254)), vec4(289.311, -404.366, 967.485, -157.172), vec4(-124.388, 0.8, 4219.0924, -626.544));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(4474.6550, 41.88, -4.6, -5.5);
   if(_GLF_DEAD(false))
    return 1.0;
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = step(61.39, vec4(1.1, 215.822, 5.0, 7.7));
  }
}
float box(vec3 p, vec3 b)
{
 vec3 d = abs(p) - b;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(-87.93, 6.1, -9465.9347, 223.289) * mat4(-44.48, 4.3, 18.50, -987.984, 4.0, 302.857, 2.2, -1.7, 574.322, 2.7, -70.99, -94.67, 786.724, -54.01, 4.5, 60.71));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (-345.998 + round(vec4(27.41, -5.6, 8.6, 9.4)));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(-85.73, vec2(-3.8, -1.2), -334.122) - vec4(9.4, 2.9, 2.0, 5439.1228));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-276.144, 72.91, 9070.3847, 58.10);
    }
   _GLF_color = vec4(-0.0, -9.7, -8.1, 8.5);
   if(_GLF_DEAD(false))
    return 1.0;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-5.3, 7.5, 2751.0717, -4.4);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return 1.0;
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-435.898, 4568.9146, 155.426, -336.955);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(sin(0.0))))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(0.9, 6410.6505, 60.88, 3124.1960);
      }
     return 1.0;
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(3836.1444, -5386.4493, 3.4, -4.9);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = mix(vec4(7.2, -3.8, 61.21, -940.073), atan((vec4(-4.0, -4.7, 2.5, -8.0) + vec4(-1.4, -87.07, -78.71, 53.41))), (vec4(3.1, -3.2, -93.74, -3.6) * -17.78));
    }
   _GLF_color = vec4(-90.39, -23.64, -7645.5576, -169.322);
  }
 return length(max(d, 0.0)) + min(max(d.x, max(d.y, d.z)), 0.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(201.845, 6.1, 93.23, -556.147) - -684.175);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-5.8, 9320.1262, 9.5, -612.262);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-2.9, -308.798, -95.01, -45.52);
    }
   _GLF_color = mix(mix(vec4(364.597, 4.3, 9.7, -86.73), vec4(4.8, 9.5, 2456.2208, 414.665), 40.50), atan(vec4(3.2, -780.669, -6.1, 2.7), vec4(-175.272, 2.6, 4.1, 2.3)), bvec4(true, true, true, true));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-5.5, 8408.3470, -3325.5697, 6.1) / vec4(-9591.2306, 87.34, -68.29, -3.9));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(692.340, 5.4, 6236.9123, 80.37);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(7.3, -4079.5033, 4144.6443, 20.20);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = mat3x4(-741.332, -3516.7069, 2955.0928, 26.86, -5162.1112, 8321.2563, 0.4, 757.113, 384.593, -4.7, 365.323, 1937.2394)[2];
    }
  }
}
float shape(vec3 p)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = (refract(vec4(5.4, 0.1, 3.7, 2.1), vec4(76.00, 933.750, 6043.7754, 589.535), -9.3) * mat4(82.96, -555.337, -0.0, -97.61, 641.335, 2.9, -9492.6061, -781.603, -505.811, -2190.4787, 9.7, 7.4, -8.6, 45.33, -30.76, 1.3));
  }
 return min(sphere(p - vec3(0.0, 1.6, 0.0), 1.0), box(p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6)));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(454.239, -5.4, -50.92, -57.86);
  }
}
vec2 mapWithMat(vec3 p)
{
 float repeat = 5.0;
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
    {
     _GLF_color = exp2(vec4(2.7, -519.942, -5.7, 78.62));
    }
   _GLF_color = vec4(6324.0706, 3.7, -9595.7062, 4.5);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
    return vec2(1.0);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && true)))
  {
   _GLF_color = vec2(-0.2, -71.23).rrrr;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(47.36, 69.13, 3394.3631, 2.2);
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(7.7, 352.600, 5.7, 2.5);
      }
     if(_GLF_DEAD(false))
      return vec2(1.0);
     _GLF_color = vec4(5.2, -267.841, -1885.8258, -7.9);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-5153.1361, 71.60, 881.949, -7.7);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.8, -714.813, 178.758, -59.77);
    }
   _GLF_color = vec4(63.30, -89.19, -6.8, 75.32);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = inversesqrt(vec4(-1363.9289, -8487.3869, -73.93, 6155.1009));
    }
   _GLF_color = (clamp(vec4(-6310.0053, -77.69, 3140.5678, 1.0), vec4(-9.5, 98.23, -97.38, 825.740), vec4(3.0, 69.68, 7.4, 60.05)) + determinant(mat4(-5.6, -31.64, 9633.7926, -8.0, 5.5, 9.6, 3.5, -20.38, -111.553, -2024.1234, 4.5, -9.0, 12.10, -8775.2508, -14.03, -9117.7301)));
   if(_GLF_DEAD(false))
    {
     _GLF_color = fract(vec4(-17.59, 6.5, -9797.9998, -343.042));
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-9.4, 5.9, 559.105, -374.740);
  }
 vec2 qxz = mod(p.xz, repeat) - 0.5 * repeat;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = mod(reflect((vec4(7000.5178, -4.1, 2.4, 1.6) - vec4(-688.983, -52.55, 2.5, 9285.2156)), mat3x4(5.3, 5.1, 3.4, -852.963, -9.2, 372.133, -2.3, -50.61, 756.082, 6659.1900, -83.91, 2.5)[2]), -9.7);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(770.414, 0.9, -5.2, -99.17);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(2.1, -9.2, 2.8, -3.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(-776.507, vec2(-5025.6570, 4787.4815), 6.1);
        }
       return vec2(1.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return vec2(1.0);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(7116.7634, 6.2, 4.0, 1.3);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.5, -17.89, -3.4, 52.37);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < abs(0.0)))))
        {
         _GLF_color = vec4(max(vec3(-737.247, -120.819, -4.9), 7.9), 3.9);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = tan((30.66 * vec4(6.2, -7.4, -7.9, 0.0)));
        }
       _GLF_color = round(vec4(-5.8, 6.2, 7.7, 575.745));
      }
     if(_GLF_DEAD(false))
      return vec2(1.0);
     _GLF_color = pow(vec4(-2.8, -6.9, 3.2, 29.83), vec4(6.7, -76.30, -7423.9330, -108.727));
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(3.2, -7.0, -0.3, -15.82);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-633.620, 125.652, 8.1, -8392.9199);
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             _GLF_color = vec4(-321.727, -375.396, -4.2, -53.42);
            }
          }
        }
       _GLF_color = (8.3 + vec4(-98.47, -3.5, 4.8, 99.00));
       if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(true) : false))))
        return vec2(1.0);
      }
    }
  }
 vec3 q = vec3(qxz.x, p.y, qxz.y);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(8194.4528, 8.9, 9.5, 52.49);
  }
 return opUnion(vec2(1.0, shape(q)), vec2(0.0, p.y));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = log2(mat2x4(-86.11, 232.229, 3.3, 91.68, -22.54, -86.72, -6497.0476, -66.20)[1]);
    }
   return vec2(1.0);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-836.676, -0.5, -48.54, 788.394);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(-3.8, -7.7, 3.3, -1576.0834));
    }
   _GLF_color = sign(vec4(-254.579, 580.176, -7.5, 3828.0757));
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-537.203, 6.4, 7.8, 4.5);
     if(_GLF_DEAD(false))
      {
       _GLF_color = (vec4(6.9, 7185.4387, 536.894, -8.9) / vec4(-770.601, 4972.4587, 187.860, -9148.2806));
      }
    }
   _GLF_color = vec4(-84.55, 8781.6594, 76.16, -0.5);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-39.54, -6.4, -6184.8231, 9116.0334);
  }
}
float map(vec3 p)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = tan(vec4(1.8, -379.260, 7.2, -569.297));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.6, 4.9, 326.276, 7.6);
    }
   _GLF_color = vec4(-150.365, -6.4, -6598.7679, -5415.8150);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(7946.0322, -9.4, 7.3, -999.892);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = sin(vec4(1.6, 8967.9653, -0.7, -4.9));
    }
   return 1.0;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
    {
     _GLF_color = step(vec3(47.94, 8.3, -69.45)[2], vec4(4.2, -55.00, -5117.9243, -1174.5587));
    }
   _GLF_color = vec4(8.9, -89.89, 9.9, 6.8);
  }
 return mapWithMat(p).y;
}
vec3 estimateNormal(vec3 p)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(7.3, -23.08, -6943.5577, -1650.7866);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-2817.4054, 5.8, 0.8, 94.18);
  }
 return normalize(vec3(map(vec3(p.x + EPSILON, p.y, p.z)) - map(vec3(p.x - EPSILON, p.y, p.z)), map(vec3(p.x, p.y + EPSILON, p.z)) - map(vec3(p.x, p.y - EPSILON, p.z)), map(vec3(p.x, p.y, p.z + EPSILON)) - map(vec3(p.x, p.y, p.z - EPSILON))));
}
float softshadow(vec3 ro, vec3 rd, float mint, float maxt, float k)
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return 1.0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(8.3, -6.2, -6.0, -337.010);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(3.7, -18.17, -4.8, -7.4);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(2.8, 411.669, 3612.7325, 2874.0990);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(2.3, -9.1, 2192.0705, 523.207) + vec4(580.063, -72.66, -3.8, -930.102));
    }
  }
 float t = mint;
 if(_GLF_DEAD(false))
  {
   _GLF_color = sin(vec4(93.95, 359.228, 32.63, 62.21));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = floor(vec4(-5748.0453, 62.42, -83.19, 190.010));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(6695.0120, 21.30, -446.009, -2.1);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-0.1, -5.3, 644.547, -1158.1318);
  }
 float res = 1.0;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
  {
   _GLF_color = vec4(848.701, 7.3, 9.1, -44.07);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-730.700, -0.2, 1.6, -2.4);
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-3.0, 1303.6969, 5.5, -71.18);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-7821.5759, -7.8, -99.34, -4142.3301);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(734.330, -87.54, 8.7, 0.7);
    }
   _GLF_color = vec4(-52.03, -1.5, 0.1, 512.911);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(614.777, 29.82, 9.3, -81.20);
    }
   _GLF_color = vec4(-4578.6936, 7067.5302, -5833.2333, 582.818);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(2.6, 334.289, 28.01, -5.3);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    return 1.0;
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = reflect(vec4(55.49, 332.069, 639.666, -63.90), vec4(15.77, -728.457, 4555.0297, 92.53));
  }
 for(
     int i = 0;
     i < 200;
     i ++
 )
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-6.2, 4727.5190, -48.01, -20.10);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = fract(vec4(-218.030, -4145.0116, -38.16, 74.56));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(sign(-0.7));
      }
     if(_GLF_DEAD(false))
      discard;
     if(_GLF_DEAD(false))
      discard;
     _GLF_color = vec4(-410.938, 619.297, -238.091, 5.8);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(-2.6, -0.5, 5.2, 584.922);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = step(6.4, vec2(-53.93, -4.8).yyyx);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
    {
     _GLF_color = vec4(5.0, -8.1, -819.328, -4.4);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = exp2(vec4(-4372.3330, -7.3, -2.6, -7.7));
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
    {
     _GLF_color = vec4(666.539, -4.8, -1.7, 517.479);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
      {
       _GLF_color = smoothstep(0.8, determinant(mat2(7728.5856, 2153.3522, 7.1, -4.7)), min(vec4(-7.2, 0.8, 38.12, 4.8), vec4(5.1, -6463.9161, -1537.6641, -6336.1863)));
      }
     _GLF_color = vec4(-3.4, 927.526, -1.5, 8422.2322);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = log(vec4(5.8, -8194.2117, 4.2, -8.1));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4((- vec3(-1990.9130, -1.8, 83.89)), -0.2);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-67.84, 7.5, -222.503, -3.9);
      }
    }
   float h = map(ro + rd * t);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(1.1, -5853.1837, 89.07, 6.8);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    break;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    break;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = (+ intBitsToFloat(ivec4(65600, -1660, 41243, 95030)));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-39.82, -6509.5086, 896.052, 648.105);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
        {
         _GLF_color = vec4(846.586, 5.4, -53.80, 5.2);
        }
       _GLF_color = vec4(258.129, -2.8, 2227.6757, 56.99);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(3.0, -60.42, -1.0, 1766.7350);
          }
         break;
        }
      }
     discard;
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = smoothstep(827.891, 2.5, vec4(85.26, 4.2, -1015.4009, -889.700));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = pow(vec4(-43.62, 9.5, -7858.9274, 42.96), vec4(6.0, -399.865, -22.87, -9.6));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = atan(vec4(9.6, 0.0, -3.5, 38.44), vec4(-7955.2821, -2750.0224, -2.2, -103.761));
      }
     _GLF_color = mix(vec4(30.12, -9259.9312, 46.18, -446.171), vec4(-8826.5518, 7849.9870, 686.282, -8585.7943), bvec4(true, false, bvec2(bvec3(false, false, true))));
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-4.5, 526.321, -26.94, 795.816);
      }
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
        {
         _GLF_color = intBitsToFloat(ivec2(68115, -98733)).tsts;
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-2.4, -362.018, 1.7, 4931.3561);
          }
        }
       _GLF_color = (vec4(8.7, 624.156, -977.609, -97.41) - clamp(361.616, 94.52, -1410.9092));
      }
     _GLF_color = vec4(-41.56, -7.6, -14.42, -76.80);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = inversesqrt(vec4(-2360.7189, -4677.7594, 6299.6362, -8.3));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-97.22, 0.7, 1122.6220, 7.6);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    continue;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(9.1, -649.352, -9.5, 5.1);
    }
   if(h < EPSILON)
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-9.1, 7.8, 803.739, -261.874);
        }
       _GLF_color = (vec4(8472.9719, -6.2, -95.65, -8.9) - mod(vec4(495.434, 6.1, -3.2, -9.9), trunc(-47.47)));
      }
     return 0.0;
     if(_GLF_DEAD(false))
      {
       _GLF_color = sqrt(vec4(1772.4106, 10.67, 791.700, -2.9));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = faceforward(vec4(-5334.6795, 6.1, -8.3, -0.1), vec4(-2.9, 44.99, 53.47, 1636.5148), vec4(-1994.8401, -2664.1197, 868.968, 26.57));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = reflect(vec4(2.8), vec4(180.212, -6.2, 61.20, -12.97));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(8.3, 6.9, 2.4, -6743.9862);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec3(7633.3366, 6.6, -941.798).rggg;
      }
     _GLF_color = vec4(-7.8, -6.0, -42.15, 8.3);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      break;
    }
   res = min(res, k * h / t);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(-4715.4166, 414.135, -8.8, -7376.0057);
     if(_GLF_DEAD(false))
      {
       _GLF_color = exp(vec4(9.5, -43.40, 620.060, 5.6));
      }
    }
   t += h;
   if(t >= maxt)
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-3.1, -1730.2370, 32.02, 7.0);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-7825.5492, 311.356, 9.0, 872.677);
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(997.535, -633.441, -8928.1067, 4.6);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = ceil(clamp((mat2x4(-2805.0255, 473.295, -5.3, -60.36, -9330.9290, -57.22, 51.83, 1.7) * vec2(33.58, 680.666)), vec4(8.8, -63.85, 34.79, 5.9), vec4(-4.6, 1.9, -2.0, 6.2)));
        }
       _GLF_color = vec4(1.2, -2.2, 660.543, 9980.8637);
       if(_GLF_DEAD(false))
        {
         _GLF_color = (mat4(-5.2, -38.38, -3296.1913, 7892.6469, -2.2, -742.033, -5777.1675, -3.4, 6.6, 37.08, 363.000, 97.87, -757.760, -1.6, 46.62, 4281.8348) * vec4(-17.66, 9149.7841, -9.3, 82.63));
        }
      }
     break;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-2100.2537, 8723.1175, 90.57, 9.5);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = (22.76 / vec4(1.3, 5.3, 710.655, -7.7));
         if(_GLF_DEAD(false))
          break;
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = vec4(3922.0341, -73.83, 99.43, 2.3);
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(8584.5620, -4.2, -7.0, -7.2);
          }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-463.419, vec3(23.26, vec2(85.24, 1.8)));
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(false))
            continue;
           _GLF_color = vec4(9.6, 9293.5566, -2.8, -0.6);
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-369.056, -8.8, -1.9, 52.56);
            }
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(-6637.3258, 691.914, 58.95, -400.640);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-396.114, 7900.5363, -66.49, 9.6);
          }
        }
       _GLF_color = vec4(vec2(-4.2, 5.1), 7.8, -39.60);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
        {
         _GLF_color = vec4(5691.4199, 8.9, -3.3, 1.7);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = vec4(22.98, 6954.7681, 9.6, 7211.2920);
          }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-731.882, -769.847, -6866.1713, -9.4);
        }
      }
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(910.597, 2.7, -5.5, -1.9);
  }
 return res;
}
vec3 draw(vec3 orig, vec3 dir)
{
 if(_GLF_DEAD(_GLF_IDENTITY(false, (false ? _GLF_FUZZED(false) : false))))
  {
   _GLF_color = vec4(-5.4, 676.292, 6.6, -7904.0123);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   _GLF_color = vec4(8.1, 4.0, 2362.2016, -54.87);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-0.7, 863.358, 32.21, 1.4);
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  return vec3(1.0);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))
    {
     _GLF_color = trunc(vec4(-1.9, -1741.6303, -7.2, 8.3));
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
    {
     _GLF_color = vec4(-4.9, 2.6, 1816.4845, -74.48);
     if(_GLF_DEAD(false))
      {
       _GLF_color = log(vec4(8.2, -95.62, -4.9, -94.80));
      }
    }
   _GLF_color = fract((vec2(0.7, 6409.9177) * mat4x2(-79.29, 6566.3443, -90.99, 424.607, 798.359, 291.470, -19.48, 214.275)));
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return vec3(1.0);
     return vec3(1.0);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(5995.0612, 3.2, 3.0, 85.99);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = intBitsToFloat(ivec4(-71817, 36422, 32612, 73568));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-75.83, -9020.6805, 58.46, 8616.8514);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(3639.2499);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return vec3(1.0);
   _GLF_color = vec4(-3.8, -7439.3265, 80.47, 602.021);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(734.519, -8.2, -34.64, -542.978);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (1784.2774 + vec4(395.430, -6.6, -4651.5879, -83.55));
    }
  }
 vec3 col = vec3(0.0);
 if(_GLF_DEAD(false))
  return vec3(1.0);
 float origdepth = 0.0;
 for(
     int i = 0;
     i < 2;
     i ++
 )
  {
   if(_GLF_DEAD(false))
    discard;
   float depth = 0.0;
   float mat = 0.0;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = (vec4(6.7, 4104.4384, -339.336, 4.9) * -45.50);
    }
   for(
       int i = 0;
       i < 300;
       i ++
   )
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(981.202, -6.5, -7.6, 542.741);
        }
       _GLF_color = vec4(8072.6707, 2.7, 239.239, 4.5);
      }
     vec3 pos = orig + depth * dir;
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(7040.2255, -8812.4006, -279.072, 9.8);
      }
     vec2 q = mapWithMat(pos);
     if(q.y < EPSILON)
      {
       mat = q.x;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(-1092.7275, -1031.4396, -8.9, 5269.1900);
        }
       break;
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = sqrt(vec4(5816.1778, -6.5, -8.3, 7.1));
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = smoothstep(vec4(40.21, -5.4, -3.5, 4.3), vec4(94.90, -5.6, 1.3, 43.59), atan(vec4(-9.4, -4805.2172, 54.23, -65.19), vec4(9.8, 5.5, -8.8, -1.1)));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = exp(vec4(-8998.9994, -3.0, 18.54, 527.812));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = reflect(vec4(8056.0227, 761.019, 8.1, -9.3), asin(vec4(-35.79, -879.741, -81.71, -7881.2072)));
      }
     depth += q.y;
     if(i == 199)
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = mat2x4(43.42, 0.0, 11.15, -3176.0720, 2.5, 18.26, 3126.5242, 95.31)[1];
          }
         _GLF_color = vec4(3.2, 8.9, -79.77, 97.61);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(5708.2490, 1.6, -2.2, -1328.9903);
          }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = asin(sign(vec4(2165.1155, -2.4, 6.0, 15.60)));
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-6.9, 4.9, -422.197, -0.0);
          }
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-1.0, -9213.3764, 2.4, -96.36);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(8.5, 9113.1586, 5265.2044, -229.952);
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = (+ vec4(0.6, 2.3, 961.187, 837.822));
          }
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             _GLF_color = vec4(-5615.5159, -920.634, -36.63, -228.909);
            }
           _GLF_color = vec4(-66.21, -943.444, -96.97, -448.351);
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(482.731, -486.210, -685.736, -1.6);
          }
         _GLF_color = log(vec4(-54.68, 169.799, 253.660, 604.954));
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = (vec4(-0.6, -2.1, 45.93, 672.504));
          }
         _GLF_color = (vec4(4.3, 1.2, 8.6, 859.332) / 605.687);
        }
       depth = 1000.0;
       if(_GLF_DEAD(false))
        {
         _GLF_color = mix(mix(log(vec4(2.8, 79.21, 6958.9344, 831.232)), vec4(42.44, 344.786, 47.45, 712.192), 5.1), vec4(6.9, 66.69, 193.022, -9.6), 5.2);
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(3.1, 4.4, 9.1, 1181.4497);
           if(_GLF_DEAD(false))
            {
             _GLF_color = (mat2x4(32.98, -6.2, -355.209, -8.1, -8.4, -701.013, 377.949, 3799.1375) * vec2(-2.4, -8.0));
            }
          }
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             _GLF_color = vec4(-2843.6296, -480.863, 673.040, 0.2);
            }
           _GLF_color = vec4(661.742, -359.482, 1.2, 4.5);
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-340.480, 35.64, 364.006, 742.062);
          }
         _GLF_color = mat4(-2837.5218, -9663.1768, -97.01, -3.0, -3.4, 928.551, 517.089, 9.3, 2.4, 5.2, -4.0, -24.71, 33.51, -5244.6788, 508.010, -463.607)[1];
         if(_GLF_DEAD(false))
          {
           _GLF_color = abs(vec4(4114.5514, -41.89, -6887.7934, -5.0));
          }
        }
       if(_GLF_DEAD(false))
        return vec3(1.0);
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-4298.7379, -96.56, 94.37, -774.573);
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           if(_GLF_DEAD(false))
            discard;
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = vec4(-2.3, 7.2, -5.2, -2.6);
            }
           if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
            {
             if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
              {
               _GLF_color = vec4(-61.35, 6653.6185, 5663.4191, 7492.9016);
              }
             _GLF_color = vec4(994.884, -1871.5146, 44.35, -6.0);
            }
           break;
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = (vec4(-31.41, 7.1, -3.5, -51.54) + -14.17);
          }
         break;
        }
       _GLF_color = log(vec4(564.651, 8.1, -89.18, -17.83));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(_GLF_ONE(1.0, injectionSwitch.y))))))
      {
       _GLF_color = vec4(5.9, 913.776, 49.96, 1.3);
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = (vec4(13.60, 6.5, 4.0, -5.9) - vec4(7.4, -4.0, 226.308, 93.38));
        }
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(32.48, 8772.6308, 7096.2924, 870.422);
    }
   if(i == 0)
    {
     if(_GLF_DEAD(false))
      discard;
     origdepth = depth;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-7.1, -0.5, -66.70, -9707.2786).wwzw;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = mix(vec4(vec2(-9506.7753, -688.010), vec2(4595.9304, -87.64)), vec4(532.973, -5141.7296, -3173.5442, -6.4), bvec4(true, false, true, false));
      }
     _GLF_color = vec4(770.724, 1446.2855, -849.112, -546.187);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = (vec4(-5.7, 1.9, 7345.2235, 8.7) * mat4(9872.3241, -8410.1337, 2.3, 88.02, -5.4, 23.89, 317.522, -164.759, -4110.1403, -4.7, 5808.7876, 399.213, -6099.4765, 2262.9792, 8178.4339, 1260.2674));
          }
         _GLF_color = normalize(vec4(6.3, 5.3, 48.04, 5.6));
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-23.70, -8.0, 515.165, 6.5);
        }
       return vec3(1.0);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(9.7, -78.42, 6.3, -150.654);
        }
       if(_GLF_DEAD(false))
        continue;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3.1, 881.700, -609.635, 5.0);
      }
     _GLF_color = vec4(-45.47, -49.34, -72.16, -3.7);
    }
   if(depth >= 1000.0)
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sin(0.0)))))
      continue;
     return vec3(1.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = intBitsToFloat(ivec4(-83434, 42405, -24275, 64809));
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(5173.3388, 8.5, -7623.3902, 4.6);
        }
       if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))
        {
         _GLF_color = (vec4(4.1, -589.833, 747.902, 134.828) * vec4(-807.068, 0.2, -638.871, -9.2));
        }
       _GLF_color = ((vec4(6833.7782, -492.689, 5727.4507, -9531.9435) - vec4(-3.8, -8.5, -3427.2165, 217.286)));
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-4.8, -9.3, -546.704, 8.0);
          }
         break;
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(sin(0.0))))))
      {
       _GLF_color = step(vec4(1377.6432, 69.22, -815.462, 1.8), vec4(vec3(109.959, -4.3, -5.3), 3.9));
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < length(0.0)))))
        {
         _GLF_color = vec4(-1.6, 25.94, -933.459, -51.71);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(-8637.3671, -3.5, 4.4, 13.94);
            }
           return vec3(1.0);
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = log(vec4(70.93, -75.38, 7.0, -5.9));
          }
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      return vec3(1.0);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = exp2(vec4(-4785.9553, -68.31, 31.11, -77.32));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(9811.4934, -44.98, -66.31, -3891.8030);
      }
     _GLF_color = vec4(6788.4386, -7.1, -11.73, -6997.7728);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(40.62, 9.5, 9.8, -8.1);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(86.55, 171.009, -3720.0669, 3.3);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      discard;
     _GLF_color = vec4(-59.96, -3.0, 44.80, -8.4);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(95.87, -0.8, 718.087, 8.7);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-7.7, -3.8, -975.135, 8.0);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-7.4, 3.5, 9.7, -318.385);
        }
       continue;
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.2, 539.843, -15.81, -4772.9618);
        }
      }
     _GLF_color = vec4(5.7, 6256.0451, -1.2, -8768.2181);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (384.691 * vec4(196.673, -7964.9629, -9.6, -9521.2668));
     if(_GLF_DEAD(false))
      break;
    }
   vec3 pos = orig + depth * dir;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(4.8, 684.531, 31.39, 9786.7243);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(-72.04, -0.3, 6523.2599, 101.748);
    }
   vec3 normal = estimateNormal(pos);
   vec3 dir1 = normalize(vec3(1.0, 1.0, 1.0));
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(-91.66, 977.495, -28.76, 2.5);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = intBitsToFloat(ivec4(77284, 62231, 68101, 40384));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-9.1, 8.0, -13.09, 60.36);
    }
   col += vec3(0.5, 0.1, 0.1) * softshadow(pos, dir1, 20.0 * EPSILON, 100.0, 4.0) * clamp(dot(normal, dir1), 0.0, 1.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(4960.1163, -4675.6610, 3613.3794, 746.894);
      }
     _GLF_color = vec4(-1549.3862, 0.0, 15.24, 8375.7730);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      break;
     _GLF_color = vec4(-11.91, 89.86, -7949.2197, -79.27);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3.1, -7325.9555, 281.033, -1.6);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sin(0.0)))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-47.13, 320.966, -1910.3750, -588.183);
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(8.0, 1522.7138, -95.81, 51.58);
        }
       _GLF_color = max(vec4(7.7, -9289.0777, 4.1, 0.5), -2.9);
      }
     _GLF_color = vec3(498.348, 4.5, -5.3).spss;
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = refract(vec4(5.4, 6.3, -35.54, 0.0), vec4(-182.276, 7205.6593, 71.76, -29.30), -5.5);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(0.0)))))
      {
       _GLF_color = (+ vec4(-6274.3253, -46.99, -95.19, -3.7));
      }
     _GLF_color = vec4(-8.0, -8155.2539, -7.5, -5.6);
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(-10.12, -619.387, -1.2, 356.164);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-4.9, 6.4, -446.157, 1100.8915);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = min(vec4(-390.886, -7205.3279, -25.13, 8.6), -47.00);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = atan(vec4(8163.6312, -8.4, -3725.5990, -4.9));
          }
         _GLF_color = trunc(vec4(-42.16, -913.469, 7.4, 5.5));
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = round(vec4(-955.499, 4955.7720, -5.8, -229.261));
          }
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = mix(vec4(8.0, 2400.8100, -697.270, 78.57), vec4(624.684, 2.8, -8.3, -7633.5040), vec4(-1.2, 60.23, -2807.9856, -7338.7298));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       _GLF_color = vec4(2.6, 1.5, 7.3, 9.5);
       if(_GLF_DEAD(false))
        {
         _GLF_color = refract((6.9 + vec4(-6.5, 8.3, -7.5, -915.488)), vec4(-2.6, -8978.3660, -4.3, -99.28), determinant(mat3(5280.1317, 2727.9189, 78.28, 160.262, -44.42, -1.1, 5394.1983, 156.445, 3231.1471)));
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-514.955, 70.23, -8027.5392, -9691.5571);
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-35.84, 868.859, 2.2, 9.1);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = min(vec4(-37.68, 1.8, -250.121, 7.6), vec4(49.68, 3574.3897, -251.620, -8206.6514));
          }
         if(_GLF_DEAD(false))
          continue;
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = (false ? vec4(-6.7, -2229.9679, 23.83, -7811.7849) : vec4(-7300.2807));
        }
       _GLF_color = vec4(-46.86, -7.1, -80.91, -538.992);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_ZERO(0.0, injectionSwitch.x)))))
        break;
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(775.324, 7.9, -8210.1201, -6.9);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = ceil(vec4(-5.0, 210.125, 13.91, 2.2));
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = reflect(vec4(39.69, -320.502, -894.147, -3161.8938), vec4(5930.0405, -49.28, 868.868, 8469.1672));
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = sign(vec4(7516.8724, 8.6, 8608.0523, 554.366));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(8891.8163, -725.461, 1372.7041, -6098.9361);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-7.9, 1.3, -9.8, 9.3);
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
          {
           _GLF_color = vec4(-8.7, -81.31, 84.36, -2.0);
          }
         discard;
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = vec4(4.5, 72.08, -1.0, -41.62);
            }
           return vec3(1.0);
          }
         if(_GLF_DEAD(false))
          {
           _GLF_color = mix(vec4(-89.08, -8.4, -6779.6343, 65.67), vec4(70.25, -639.639, 631.528, 1698.8998), vec4(478.238, -50.00, -7.6, 4.8));
          }
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-2.1, 701.691, -40.10, -201.291);
      }
     _GLF_color = vec4(-552.284, vec2(-0.9, -25.60), 4.4);
    }
   vec3 pos2 = vec3(- 9.0, 60.0, 6.0);
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = (mat3x4(mat2x3(46.28, 9950.7337, 9.5, -6.1, 5.5, 1.1)) * vec3(9.9, -330.866, 3602.0456));
     if(_GLF_DEAD(false))
      continue;
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(8.4, -2.0, 4.7, -862.225);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(7.6, -6006.0034, 0.2, -686.899);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = max(vec4(7.5, -1.7, 38.44, 8076.2014), vec4(6208.7873, -571.673, -4980.7759, 5.8));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-28.49, 85.47, -2.6, 970.255);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(660.370, -4942.9971, -9.2, -2.8);
        }
      }
     return vec3(1.0);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3.7, 4202.0871, -9839.5723, -6.7);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-1.1, 61.02, -6.3, 8320.2276);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = uintBitsToFloat(uvec4(114935u, 19065u, 56960u, 147203u));
     if(_GLF_DEAD(false))
      {
       _GLF_color = (-6.8 - vec4(9.9, 1.3, 47.63, 593.753));
      }
    }
   vec3 dir2 = normalize(pos2 - pos);
   col += vec3(0.0, 0.2, 0.5) * softshadow(pos, dir2, 20.0 * EPSILON, 100.0, 4.0) * clamp(dot(normal, dir2), 0.0, 1.0);
   if(mat < 1.0)
    {
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-1.8, -762.000, 8.6, 62.58);
        }
       _GLF_color = vec4(vec2(-2397.7677, 3465.5062), -47.78, -88.61);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = atan(intBitsToFloat(ivec4(-61213, -43958, 91074, 60922)), vec4(-5903.2895, 3.5, 998.285, -8.3));
          }
         _GLF_color = vec4(-4.7, -78.43, -147.543, 1.6);
        }
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = (vec4(-51.72, 8.3, 6267.2480, -151.798) + 54.23);
        }
       _GLF_color = vec4(-0.3, -62.08, -89.38, 9.4);
       if(_GLF_DEAD(false))
        {
         _GLF_color = asin(vec4(-640.292, 41.71, 6258.8392, -8.1));
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = normalize(vec4(-2223.6900, 6.7, -38.12, -87.18));
        }
       _GLF_color = vec4(2.5, -569.099, 4.4, 3.6);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
      {
       _GLF_color = exp2(vec4(-4.3, 9321.6757, 4.1, 2.2));
      }
     break;
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        return vec3(1.0);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(-133.133, -2.7, -3.5, 3.3);
        }
       _GLF_color = vec4(4045.7768);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(0.1, -351.861, -2.8, 78.76);
          }
         _GLF_color = vec4(3.7, -2.3, -414.012, -555.769);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-5.3, -4.9, 99.26, 527.352);
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = (vec2(45.17, 4.4).ssss - -75.30);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      break;
     if(_GLF_DEAD(false))
      {
       _GLF_color = roundEven(vec4(-5.7, -9045.9333, -6809.6589, -2.9));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-60.03, 2.8, 2501.0902, 0.3);
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(false))
        break;
       if(_GLF_DEAD(false))
        continue;
      }
    }
   if(_GLF_DEAD(false))
    discard;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = abs(vec4(84.31, 91.90, -2.4, 3.7));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = ceil(vec4(4012.8389, 874.083, 80.63, -9475.7057));
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(64.51, -74.85, -953.800, -5.6);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < abs(0.0)))))
          {
           _GLF_color = smoothstep(83.85, roundEven(acos(-848.154)), vec4(-58.14, 6492.6418, -430.298, -0.7));
          }
        }
      }
     _GLF_color = vec4(-978.503, 3.3, 7.4, 1486.6937);
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          return vec3(1.0);
         return vec3(1.0);
        }
       _GLF_color = vec4(0.6, 15.56, -9.1, 6.2);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(788.131, -46.50, 207.888, 420.170);
    }
   vec3 reflected = reflect(dir, normal);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-78.15, -3194.9270, -47.13, -4.8);
    }
   orig = pos + EPSILON * reflected;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(95.79, -5.5, -9.5, -6.3);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-110.065, 33.49, -6.4, -31.53);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-178.433, -7168.9732, 8.0, 0.2);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(103.497, 923.529, 81.45, -0.9);
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_IDENTITY(false, (false) && _GLF_TRUE(true, (gl_FragCoord.y >= 0.0)))))
          {
           _GLF_color = vec4(-0.2, -833.347, 961.817, -8.8);
           if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
            {
             _GLF_color = max(vec4(-4.4, -93.36, 75.45, 8.8), vec4(-1519.2588, -2447.0630, -0.5, -48.58));
            }
          }
         _GLF_color = vec4(-5819.7744, -42.71, -9.5, -7.3);
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           if(_GLF_DEAD(false))
            continue;
           if(_GLF_DEAD(false))
            {
             _GLF_color = log2(vec4(-309.516, -8248.4421, -1085.9182, -632.473));
            }
           _GLF_color = vec4(1567.8212, -49.00, -765.539, 906.297);
          }
        }
      }
     if(_GLF_DEAD(false))
      discard;
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = (vec4(6280.5176, -909.793, -608.245, -2.9) / vec4(-8.2, -1062.1362, 488.174, -84.26));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          continue;
         break;
        }
       _GLF_color = fract(vec4(-500.940, -549.693, -8.2, 4524.4372));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(94.66, -350.507, 9.1, 83.90);
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(6784.5534, -634.703, 175.945, 6185.1335);
        }
      }
     continue;
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = mat2(-4.5, 5263.4942, 90.95, -2.9)[1].tsst;
    }
   dir = reflected;
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-1283.1498, 715.058, 0.4, -5.0);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < sqrt(0.0)))))
  return vec3(1.0);
 col = mix(col, vec3(1.0), origdepth * 0.01);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-677.640, -151.820, -8.8, 5330.8275);
  }
 return col;
}
mat3 createCameraToWorld(vec3 eye, vec3 target, float roll)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = trunc(vec4(-5.6, 3555.4145, -3.9, 0.7));
  }
 vec3 cw = normalize(target - eye);
 vec3 cp = vec3(sin(roll), cos(roll), 0.0);
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = (vec3(75.85, 1.5, -9.0) * mat4x3(-2.9, 28.27, -67.44, -2.6, 9594.3724, 68.86, -3364.0236, 2.0, -39.15, -6.0, 1271.2824, -0.0));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(8710.8766, 722.248, 0.8, -8137.5097);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(vec2(-6.2, -8927.3016), 856.760, (- -521.691));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(-4.1, -5510.5690, 849.888, -6.8);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-654.544, -210.830, 4.7, 46.07);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      return mat3(1.0);
     _GLF_color = vec4(7352.8532, 8600.6340, -287.898, -333.889);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return mat3(1.0);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(98.39, -6389.6267, 60.96, 9.6);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(446.181, 776.987, 8.6, 298.727);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = log(fract(faceforward(vec4(22.78, -7941.0922, 987.606, -7932.8471), vec4(-2.4, 80.55, -1964.7506, 6.5), vec4(92.53, -97.09, -6.8, -8.0))));
        }
      }
     return mat3(1.0);
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      return mat3(1.0);
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, (true ? _GLF_IDENTITY(false, ! (! (false))) : _GLF_FUZZED(true)))))
    {
     _GLF_color = vec4(-8.7, 49.43, -0.3, 5.1);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-83.26, 5190.9366, 365.461, 1.1);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = (193.841 * (vec4(-7.4, 4.3, 8814.8315, 191.137) / vec4(-58.88, -5.1, 3.6, -0.2)));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec2(12.21, 870.712).xxxy;
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-2.0, 9.9, -33.26, -3.2);
  }
 vec3 cu = normalize(cross(cw, cp));
 vec3 cv = normalize(cross(cu, cw));
 return mat3(cu, cv, cw);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), ! (! (! (false))))))))
    {
     _GLF_color = vec4(-854.248, -0.6, 447.277, -9.8);
     if(_GLF_DEAD(false))
      {
       _GLF_color = (mat2x4(-339.283, -6.8, 394.274, 8782.4007, 0.3, 32.81, -3.6, 7.1) * vec2(-428.591, 2.5));
       if(_GLF_DEAD(false))
        return mat3(1.0);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = mix(vec4(-6355.0617, -6629.8005, -6.7, -9.1), vec4(0.1, -4898.9429, 2.3, 1.2), vec4(11.41, vec3(-1.5, 4198.3602, 69.14)));
     if(_GLF_DEAD(false))
      return mat3(1.0);
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = min(vec4(8382.5431, -4.2, 8.6, -46.61), vec4(1.0, 7.5, 6.7, 618.656));
        }
       _GLF_color = (+ vec4(9.7, -84.30, -7939.5144, 3.0));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = mix(vec4(9.6, 720.402, 285.484, -531.641), vec4(5.4, 10.78, 336.294, 2.1), vec4(-0.6, 710.638, 3.1, 91.85));
      }
     if(_GLF_DEAD(false))
      return mat3(1.0);
    }
   _GLF_color = (- trunc(vec4(-8311.4173, -2.1, 7.0, 87.28)));
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   _GLF_color = vec4(77.26, 11.14, -69.02, 200.699);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = refract(vec4(-6483.1033, 1.0, 8.1, 0.7), mod(vec4(9833.0546, -532.831, 5.1, -678.744), vec4(-70.89, 2020.7744, 9.2, 70.53)), floor(5.7));
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-7.3, -9.0, -225.407, 86.12);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(3070.9883, -33.08, -3.8, 4.3);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(5.6, -6.0, 94.06, 2.1);
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(_GLF_ONE(1.0, injectionSwitch.y))))))
  {
   _GLF_color = vec4(7.2, -8899.2786, -1.4, 7.5);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(30.34, -6068.3745, -5.5, -66.80);
    }
  }
}
void main(void)
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = min(vec4(611.479, -43.48, -842.289, -66.52), -9.3);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-8.6, 2299.4691, -6158.2058, 5246.5145);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(5.9, 9.0, -84.89, -4.0);
  }
 float fovy = 3.14 / 5.0;
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-3364.3549, -495.595, 748.504, -1133.6683);
   if(_GLF_DEAD(false))
    {
     _GLF_color = exp(mix(vec4(39.29, -9751.0201, -80.29, -894.395), vec4(-2.2, 3.8, 1.0, 3679.8286), vec4(-0.9, -4184.3541, 21.33, -5713.5416)));
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(9957.4151, -6.3, -7.2, -66.04);
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(1.0, 4048.3240, -123.998, -3.9) * mat4(2869.2682, -47.50, -3.9, 776.438, -8095.8017, -9.4, 6.6, -2500.3938, -5.2, -436.617, -981.181, -5.2, -487.113, 2.9, -9689.1783, 154.549));
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = (vec4(-5394.0015, 6201.4522, -9178.4466, 1.2) * mat4(39.20, 748.054, 729.674, -2.9, -3.3, -2.8, 2867.3757, 46.11, -9982.7842, 8.6, -5835.8021, 6573.4506, -995.595, -8.3, 3.8, -7.7));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = faceforward(step(vec4(83.61, 7.1, 9.6, 1.4), vec4(-42.31, -9067.6223, 264.400, 64.40)), mod(vec4(418.623, -773.247, 221.858, -27.45), vec4(-0.0, 8.9, -29.98, 8.1)), vec4(5186.2651, -897.150, -206.984, 28.42));
  }
 vec3 ray_orig = vec3(sin(time * 0.3) * 12.0, 4.0, cos(time * 0.3) * 12.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(2703.5224, -600.746, -287.709, -4.9);
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(350.756, -302.939, 158.129, 62.32);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < length(0.0)))))
    {
     _GLF_color = vec4(-9.7, 0.1, 3.9, 345.696);
    }
   if(_GLF_DEAD(false))
    return;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(0.2, 5.9, 2.1, 101.411);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (dot(vec2(355.880, -7.1), vec2(495.629, -0.3)) + vec4(3360.6193, -8159.0800, -517.076, 313.693));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    return;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(min(vec2(7.4, -65.34), -72.74), sqrt(5.9), tan(exp(-450.145)));
     if(_GLF_DEAD(false))
      {
       _GLF_color = mix((vec4(-78.42, -319.888, -9.4, -5.3) * vec4(55.30, 3.9, 968.625, 7.1)), vec4(258.356, 18.45, -80.46, 3120.3626), bvec4(true, false, true, false));
      }
    }
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    return;
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = tan(vec4(-7.1, 0.2, 273.387, 5.2));
    }
   _GLF_color = ceil(vec4(92.62, 0.1, -20.44, -3.6));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(6413.6956, -763.902, -9472.6662, 83.01);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(1.3, 69.12, -98.09, 8.5);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-47.03, -908.020, 884.618, 155.749);
  }
 mat3 cameraToWorld = createCameraToWorld(ray_orig, vec3(2.5, 1.0, 2.5), 0.0);
 vec2 ndc = 2.0 * (gl_FragCoord.xy / resolution.xy - vec2(0.5));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = mat4(105.183, -521.537, -662.322, -84.50, 8.0, -0.8, -96.55, -8.5, 828.800, -7.0, 817.325, -44.03, 2160.1905, -3246.7509, -28.24, 2364.7434)[3];
    }
   _GLF_color = vec4(-71.07, 7.8, -8.8, -937.012);
  }
 vec3 cam_dir = normalize(vec3(vec2(ndc.x * (resolution.x / resolution.y), ndc.y) * tan(fovy * 0.5), 1.0));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(271.252, -45.38, 7.4, -6.0);
  }
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4((vec4(-22.89, 140.527, -0.3, -342.429) * mat2x4(31.92, 10.56, 3.7, 1254.4712, 7.2, 5766.8895, 31.34, 8.8)), vec2(-7.8, -3.2));
    }
   _GLF_color = acos(vec4(-1.4, -1.0, -47.48, 5555.8400));
   if(_GLF_DEAD(false))
    return;
  }
 vec3 ray_dir = cameraToWorld * cam_dir;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  return;
 vec3 res = draw(ray_orig, ray_dir);
 res = pow(res, vec3(0.4545));
 _GLF_color = vec4(res, 1.0);
}
